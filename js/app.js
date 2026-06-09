// ============================================
// Texnect – App Core v3.0
// Awwwards-level Blue Edition
// ============================================

// ── Shared motion system (included via initMotion) ──
function initMotion() {
  // Scroll reveal
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const delay = e.target.dataset.delay || 0;
        setTimeout(() => { e.target.style.opacity='1'; e.target.style.transform='translateY(0) scale(1)'; }, parseInt(delay));
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.opacity='0'; el.style.transform='translateY(28px) scale(0.98)';
    el.style.transition='opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)';
    el.dataset.delay = i * 80;
    revealObs.observe(el);
  });

  // Counter
  const countObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting){ animateCount(e.target); countObs.unobserve(e.target); }});
  }, {threshold:0.5});
  document.querySelectorAll('.count-up').forEach(el => countObs.observe(el));

  // Ripple
  document.querySelectorAll('.btn-primary,.btn-outline').forEach(btn => {
    btn.style.position='relative'; btn.style.overflow='hidden';
    btn.addEventListener('click', function(e) {
      const r=document.createElement('span'), rect=this.getBoundingClientRect();
      r.style.cssText=`position:absolute;border-radius:50%;width:4px;height:4px;background:rgba(230,241,251,0.35);pointer-events:none;left:${e.clientX-rect.left-2}px;top:${e.clientY-rect.top-2}px;animation:ripple 0.6s ease-out forwards;transform:scale(0)`;
      this.appendChild(r); r.addEventListener('animationend',()=>r.remove());
    });
  });

  // Magnetic primary buttons
  document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('mousemove', function(e) {
      const rect=this.getBoundingClientRect();
      const x=(e.clientX-rect.left-rect.width/2)*0.12, y=(e.clientY-rect.top-rect.height/2)*0.12;
      this.style.transform=`translate(${x}px,${y}px) scale(1.04)`;
    });
    btn.addEventListener('mouseleave',function(){ this.style.transform=''; });
  });

  // Nav progress bar
  const prog = document.getElementById('nav-progress');
  if(prog){ let w=0; const iv=setInterval(()=>{ w+=w<70?18:8; prog.style.width=Math.min(w,100)+'%'; if(w>=100){clearInterval(iv);setTimeout(()=>{prog.style.opacity='0';},200);}},70); }

  // Cycling search placeholder
  const cycleInputs = document.querySelectorAll('.search-input[data-cycle]');
  if(cycleInputs.length){
    const phrases=['Search textile professionals...','Find yarn traders in Tirupur...','Explore Coimbatore mills...','Search by fabric specialty...','Connect with denim experts...'];
    let pi=0;
    setInterval(()=>{ cycleInputs.forEach(inp=>{ if(document.activeElement!==inp) inp.placeholder=phrases[pi%phrases.length]; }); pi++; },3000);
  }

  // Page sweep on navigation
  const sweep = document.getElementById('page-sweep');
  if(sweep){
    document.querySelectorAll('a[href]').forEach(a=>{
      a.addEventListener('click',function(e){
        const href=this.getAttribute('href');
        if(href && !href.startsWith('#') && !href.startsWith('javascript') && !this.target){
          e.preventDefault(); sweep.style.width='100%'; sweep.style.opacity='1';
          setTimeout(()=>{ window.location.href=href; },280);
        }
      });
    });
  }

  // Navbar scroll
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('mainNavbar');
    if(nav) nav.classList.toggle('scrolled', window.scrollY > 8);
  });

  // Init Lucide icons
  if(typeof lucide !== 'undefined') lucide.createIcons();
}

function animateCount(el) {
  const target = parseFloat(el.dataset.target), suffix = el.dataset.suffix||'', prefix = el.dataset.prefix||'';
  const duration = 1800, start = performance.now();
  const update = now => {
    const p = Math.min((now-start)/duration,1), ease = 1-Math.pow(1-p,4);
    const val = target<100 ? (ease*target).toFixed(0) : Math.round(ease*target).toLocaleString();
    el.textContent = prefix+val+suffix; if(p<1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

// ── Lucide icon helper ──
function icon(name, size=18) {
  return `<i data-lucide="${name}" style="width:${size}px;height:${size}px;stroke-width:1.5"></i>`;
}

// ── Domain color mapping ──
const DOMAIN_COLORS = {
  'Spinning':'var(--cyan)','Weaving':'var(--indigo)','Knitting':'var(--teal)',
  'Dyeing & Printing':'var(--violet)','Garments':'var(--coral)','Quality Control':'var(--electric)',
  'Textile Testing':'var(--sky)','Sustainability':'var(--emerald)','Textile Machinery':'var(--amber)',
  'Technical Textiles':'var(--rose)','Fashion':'var(--rose)'
};
const DOMAIN_CLASSES = {
  'Spinning':'domain-spinning','Weaving':'domain-weaving','Knitting':'domain-knitting',
  'Dyeing & Printing':'domain-dyeing','Garments':'domain-garments','Quality Control':'domain-quality',
  'Textile Testing':'domain-testing','Sustainability':'domain-sustainability',
  'Textile Machinery':'domain-machinery','Technical Textiles':'domain-technical'
};
function getDomainColor(domain) { return DOMAIN_COLORS[domain] || 'var(--b400)'; }
function getDomainClass(domain) { return DOMAIN_CLASSES[domain] || ''; }

// ── Avatar ──
function avatarHTML(user, size='md') {
  if (!user) return '';
  const sizeClass = `avatar-${size}`;
  const dims = {sm:'36px',md:'48px',lg:'68px',xl:'100px'}[size]||'48px';
  const fs = {sm:'13px',md:'16px',lg:'22px',xl:'32px'}[size]||'16px';
  const initials = (user.name||'?').split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
  // Vibrant gradient by fabric type
  const bgMap = {
    'Cotton':'linear-gradient(135deg,var(--cyan),var(--b400))',
    'Silk':'linear-gradient(135deg,var(--violet),var(--indigo))',
    'Denim':'linear-gradient(135deg,var(--b600),var(--electric))',
    'Linen':'linear-gradient(135deg,var(--emerald),var(--teal))',
    'Wool':'linear-gradient(135deg,var(--amber),var(--coral))',
    'Polyester':'linear-gradient(135deg,var(--rose),var(--violet))'
  };
  const bg = bgMap[user.fabricType] || 'linear-gradient(135deg,var(--b600),var(--cyan))';
  return `<div class="avatar-placeholder ${sizeClass}" style="background:${bg};color:var(--b050);width:${dims};height:${dims};font-size:${fs};border-radius:50%;" aria-label="${user.name}">${initials}</div>`;
}

// ── Navbar ──
function renderNavbar(activePage = '') {
  const user = Auth.getCurrentUser();
  const isLoggedIn = !!user;

  const links = [
    { id:'home',          icon:'home',           label:'Home',      href: isLoggedIn ? 'feed.html' : 'index.html' },
    { id:'explore',       icon:'compass',        label:'Explore',   href:'explore.html' },
    { id:'experts',       icon:'award',          label:'Experts',   href:'experts.html' },
    { id:'jobs',          icon:'briefcase',       label:'Jobs',      href:'jobs.html' },
    { id:'problems',      icon:'help-circle',     label:'Problems',  href:'problems.html' },
    { id:'messages',      icon:'message-circle',  label:'Messages',  href:'messages.html' },
    { id:'notifications', icon:'bell',            label:'Alerts',    href:'notifications.html' }
  ];

  const linksHTML = links.map(l => `
    <a href="${l.href}" class="nav-link ${activePage===l.id?'active':''}" id="navlink-${l.id}">
      <span class="nav-icon">${icon(l.icon, 20)}</span>
      <span class="nav-label">${l.label}</span>
      ${l.id==='notifications'&&isLoggedIn ? '<span class="notif-dot"></span>' : ''}
    </a>
  `).join('');

  const userArea = isLoggedIn ? `
    <div style="position:relative;">
      <button class="nav-avatar-btn" id="navUserBtn" onclick="toggleNavDropdown()">
        ${avatarHTML(user,'sm')}
        <span style="font-size:14px;color:var(--text-primary);">${user.name.split(' ')[0]}</span>
        <span style="font-size:10px;opacity:0.4;">▼</span>
      </button>
      <div class="nav-dropdown" id="navDropdown">
        <button class="dropdown-item" onclick="window.location.href='profile.html'">${icon('user',16)} My Profile</button>
        <button class="dropdown-item" onclick="window.location.href='feed.html'">${icon('rss',16)} Feed</button>
        <button class="dropdown-item" onclick="window.location.href='jobs.html'">${icon('briefcase',16)} Jobs</button>
        <hr style="border:none;border-top:1px solid var(--border-dim);margin:6px 0;">
        <button class="dropdown-item" onclick="Auth.logout()" style="color:var(--b200);">${icon('log-out',16)} Sign Out</button>
      </div>
    </div>
  ` : `
    <div style="display:flex;gap:8px;">
      <a href="auth.html" class="btn btn-outline btn-sm">${icon('log-in',16)} Sign In</a>
      <a href="auth.html#register" class="btn btn-primary btn-sm">Join Free</a>
    </div>
  `;

  return `
    <nav class="navbar" id="mainNavbar">
      <div id="nav-progress"></div>
      <div class="nav-inner">
        <a href="${isLoggedIn?'feed.html':'index.html'}" class="nav-logo">
          <div class="nav-logo-icon">${icon('layers',20)}</div>
          <span class="nav-logo-text">Texnect</span>
        </a>
        <div class="nav-search">
          <span class="nav-search-icon">${icon('search',18)}</span>
          <input type="text" class="search-input" data-cycle placeholder="Search textile professionals..." id="globalSearch" onkeydown="handleGlobalSearch(event)">
        </div>
        <div class="nav-links">${linksHTML}</div>
        ${userArea}
      </div>
    </nav>
    <div id="page-sweep"></div>
  `;
}

function toggleNavDropdown() { const d=document.getElementById('navDropdown'); if(d) d.classList.toggle('open'); }
document.addEventListener('click', e => {
  const btn=document.getElementById('navUserBtn'), drop=document.getElementById('navDropdown');
  if(drop&&btn&&!btn.contains(e.target)&&!drop.contains(e.target)) drop.classList.remove('open');
});
function handleGlobalSearch(e) { if(e.key==='Enter'){ const q=e.target.value.trim(); if(q) window.location.href=`explore.html?q=${encodeURIComponent(q)}`; }}

// ── Profile completion ──
function profileCompletion(user) {
  let s=0;
  if(user.name) s+=20; if(user.title) s+=15; if(user.about) s+=20;
  if(user.fabricType) s+=15; if((user.skills||[]).length) s+=15; if((user.experience||[]).length) s+=15;
  return Math.min(s,100);
}

// ── Left Sidebar ──
function renderLeftSidebar(activePage = '') {
  const user = Auth.getCurrentUser();
  if(!user) return '<div></div>';

  const links = [
    { id:'feed',          ic:'rss',           label:'My Feed',       href:'feed.html' },
    { id:'profile',       ic:'user',          label:'My Profile',    href:'profile.html' },
    { id:'explore',       ic:'compass',       label:'Explore',       href:'explore.html' },
    { id:'experts',       ic:'award',         label:'Find Experts',  href:'experts.html' },
    { id:'problems',      ic:'help-circle',   label:'Ask Experts',   href:'problems.html' },
    { id:'jobs',          ic:'briefcase',     label:'Jobs',          href:'jobs.html' },
    { id:'companies',     ic:'building-2',    label:'Companies',     href:'companies.html' },
    { id:'messages',      ic:'message-circle',label:'Messages',      href:'messages.html' },
    { id:'notifications', ic:'bell',          label:'Notifications', href:'notifications.html' }
  ];

  const completion = profileCompletion(user);
  const hasConn = (user.connections||0) > 0;
  const specs = user.fabricType ? [user.fabricType] : [];
  if(user.skills&&user.skills.length) specs.push(...user.skills.slice(0,2));

  return `
    <aside class="sidebar sidebar-left">
      <div class="profile-card reveal">
        <div class="profile-card-banner"></div>
        <div class="profile-card-body">
          <div class="profile-card-avatar">${avatarHTML(user,'lg')}</div>
          <div class="profile-card-name">${user.name}</div>
          <div class="profile-card-title">${user.title || user.role}</div>
          ${specs.length ? `<div style="display:flex;flex-wrap:wrap;gap:5px;margin-top:10px;">${specs.map(s=>`<span class="specialty-pill">${s}</span>`).join('')}</div>` : ''}
          <div style="margin-top:14px;">
            <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
              <span style="font-size:12px;color:var(--text-hint);">Profile strength</span>
              <span style="font-size:12px;font-weight:700;color:var(--b200);">${completion}%</span>
            </div>
            <div style="height:6px;background:var(--bg-section);border-radius:99px;overflow:hidden;">
              <div style="height:100%;width:${completion}%;background:linear-gradient(90deg,var(--b600),var(--b400));border-radius:99px;transition:width 0.8s cubic-bezier(0.4,0,0.2,1);"></div>
            </div>
            ${completion<100 ? `<a href="profile.html" style="font-size:12px;color:var(--b400);display:block;margin-top:6px;">Complete your profile →</a>` : ''}
          </div>
          <div class="profile-card-stats">
            ${hasConn ? `<div class="profile-card-stat"><span>Connections</span><span>${user.connections.toLocaleString()}</span></div>` : `<div class="profile-card-stat"><a href="explore.html" style="font-size:13px;color:var(--b400);">Grow your network →</a></div>`}
            <div class="profile-card-stat"><span>Specialty</span><span>${user.fabricType||'—'}</span></div>
          </div>
        </div>
      </div>
      <div class="card reveal" style="padding:8px;">
        <nav class="sidebar-nav">
          ${links.map(l=>`<a href="${l.href}" class="sidebar-nav-link ${activePage===l.id?'active':''}"><span class="sn-icon">${icon(l.ic,18)}</span><span>${l.label}</span></a>`).join('')}
        </nav>
      </div>
    </aside>
  `;
}

// ── Right Sidebar ──
function renderRightSidebar() {
  const suggestions = TC_DATA.users.slice(0,4);
  const trending    = TC_DATA.trending.slice(0,6);
  const quickJobs   = TC_DATA.jobs.slice(0,2);

  return `
    <aside class="sidebar sidebar-right">
      <div class="trending-card reveal">
        <div class="trending-title"><span class="trend-pulse" style="font-size:16px;">${icon('trending-up',18)}</span> Trending in Textiles</div>
        ${trending.map(t=>`<div class="trending-item" onclick="window.location.href='explore.html?q=${encodeURIComponent(t.tag)}'"><span class="trending-tag">${t.tag}</span><span class="trending-count">${t.posts}</span></div>`).join('')}
      </div>
      <div class="suggestion-card reveal">
        <div class="trending-title">${icon('users',18)} People You May Know</div>
        ${suggestions.map(u=>`
          <div class="suggestion-item">
            ${avatarHTML(u,'sm')}
            <div class="suggestion-info">
              <div class="suggestion-name" onclick="window.location.href='profile.html?id=${u.id}'">${u.name}</div>
              <div class="suggestion-role">${u.role}</div>
              <span class="specialty-pill" style="margin-top:4px;display:inline-flex;">${u.fabricType||'Textiles'}</span>
            </div>
            <button class="btn btn-primary btn-sm" onclick="connectUser('${u.id}',this)" style="padding:6px 12px;animation:none;">${icon('user-plus',14)} Connect</button>
          </div>
        `).join('')}
      </div>
      <div class="opp-sidebar-card reveal">
        <div class="trending-title">${icon('briefcase',18)} Opportunities</div>
        ${quickJobs.map(j=>`
          <div style="padding:12px 0;border-bottom:1px solid var(--border-dim);">
            <div style="font-size:14px;font-weight:600;color:var(--text-primary);">${j.title}</div>
            <div style="font-size:13px;color:var(--b400);margin-top:2px;">${j.company}</div>
            <div style="font-size:12px;color:var(--text-hint);margin-top:3px;display:flex;align-items:center;gap:4px;">${icon('map-pin',12)} ${j.location} · ${j.salary}</div>
            <a href="jobs.html" style="margin-top:8px;display:inline-block;color:var(--b400);font-size:13px;font-weight:600;">Apply →</a>
          </div>
        `).join('')}
        <a href="jobs.html" style="font-size:13px;color:var(--text-secondary);display:block;margin-top:10px;text-align:center;">View all jobs →</a>
      </div>
    </aside>
  `;
}

function connectUser(userId, btn) {
  btn.innerHTML = icon('check',14) + ' Pending';
  btn.disabled = true;
  btn.style.background='var(--emerald)'; btn.style.borderColor='var(--emerald)'; btn.style.color='white';
  btn.classList.add('animate-follow');
  setTimeout(()=>btn.classList.remove('animate-follow'),700);
  showToast('Connection request sent!','success');
}

// ── Category colors (vibrant accents) ──
const CATEGORY_COLORS = {
  'Technology':'var(--cyan)','Yarn & Fibre':'var(--amber)','Weaving & Knitting':'var(--indigo)',
  'Dyeing & Finishing':'var(--violet)','Technical Textiles':'var(--rose)','Sustainability':'var(--emerald)',
  'Export & Trade':'var(--teal)','Design':'var(--coral)','Market Insights':'var(--sky)',
  'Achievement':'var(--amber)','Tips & Tricks':'var(--cyan)','Research':'var(--electric)','Business':'var(--indigo)',
};

// ── Post renderer ──
function renderPost(post) {
  const author = getUserById(post.authorId);
  const user = Auth.getCurrentUser();
  if(!author) return '';
  const borderColor = CATEGORY_COLORS[post.category] || 'var(--b400)';
  return `
    <article class="post-card" id="post-${post.id}" style="border-left:3px solid ${borderColor};">
      <div class="post-header">
        <div style="cursor:pointer;flex-shrink:0;" onclick="window.location.href='profile.html?id=${author.id}'">${avatarHTML(author,'md')}</div>
        <div class="post-author-info">
          <div class="post-author-name" onclick="window.location.href='profile.html?id=${author.id}'">${author.name}</div>
          <div class="post-author-meta">${author.title} · ${author.company}</div>
          <div class="post-time">${post.time}</div>
        </div>
        <span class="post-category-badge">${post.category}</span>
      </div>
      <div class="post-body">${escapeHTML(post.content)}</div>
      <div class="post-actions">
        <button class="post-action-btn action-like ${post.liked?'liked':''}" onclick="toggleLike('${post.id}',this)" style="${post.liked?'color:var(--coral);':''}">
          <span class="pa-icon">${icon(post.liked?'heart':'heart',18)}</span>
          <span class="like-count">${post.likes}</span> Like
        </button>
        <button class="post-action-btn action-comment" onclick="toggleComments('${post.id}')">
          ${icon('message-square',18)} <span>${post.comments}</span> Comment
        </button>
        <button class="post-action-btn action-share" onclick="sharePost('${post.id}',this)">
          ${icon('share-2',18)} <span>${post.shares}</span> Share
        </button>
        ${user ? `<button class="post-action-btn action-save" style="margin-left:auto" onclick="savePost('${post.id}',this)">${icon('bookmark',18)} Save</button>` : ''}
      </div>
      <div class="comments-section" id="comments-${post.id}">
        <div class="comment-item">
          ${avatarHTML(TC_DATA.users[1],'sm')}
          <div class="comment-bubble">
            <div class="comment-author">${TC_DATA.users[1].name}</div>
            <div class="comment-text">Great insights! Exactly what our industry needs.</div>
          </div>
        </div>
        ${user ? `<div class="comment-input-row">${avatarHTML(user,'sm')}<input type="text" placeholder="Write a comment…" onkeydown="submitComment(event,'${post.id}')"><button class="btn btn-primary btn-sm" style="animation:none;" onclick="submitCommentBtn('${post.id}',this.previousElementSibling)">Post</button></div>` : ''}
      </div>
    </article>
  `;
}

function toggleLike(postId, btn) {
  const posts = Posts.toggle_like(postId);
  const post = posts.find(p=>p.id===postId); if(!post) return;
  const countEl = btn.querySelector('.like-count');
  countEl.textContent = post.likes;
  btn.classList.toggle('liked', post.liked);
  if(post.liked){
    btn.style.color='var(--coral)';
    btn.classList.add('animate-like'); setTimeout(()=>btn.classList.remove('animate-like'),400);
    // Create floating heart particles
    createLikeParticles(btn);
  } else {
    btn.style.color='';
  }
}
function createLikeParticles(el) {
  const rect = el.getBoundingClientRect();
  for(let i=0; i<5; i++) {
    const p = document.createElement('div');
    p.textContent = '❤';
    Object.assign(p.style, {
      position:'fixed', left:(rect.left+rect.width/2)+'px', top:rect.top+'px',
      fontSize:'12px', pointerEvents:'none', zIndex:'9999', color:'var(--coral)',
      transform:`translate(${(Math.random()-0.5)*40}px, 0)`,
      transition:'all 0.8s ease', opacity:'1'
    });
    document.body.appendChild(p);
    requestAnimationFrame(()=>{
      p.style.transform=`translate(${(Math.random()-0.5)*60}px, -${40+Math.random()*30}px)`;
      p.style.opacity='0';
    });
    setTimeout(()=>p.remove(), 900);
  }
}
function toggleComments(postId) {
  const el=document.getElementById(`comments-${postId}`);
  if(el) { el.classList.toggle('open'); el.style.color='var(--cyan)'; }
}
function sharePost(id,btn){
  if(btn) { btn.style.color='var(--emerald)'; btn.classList.add('animate-check'); setTimeout(()=>{btn.classList.remove('animate-check');btn.style.color='';},500); }
  showToast('Link copied to clipboard!','success');
}
function savePost(id,btn){
  btn.innerHTML = icon('bookmark',18)+' Saved';
  btn.style.color='var(--amber)';
  btn.classList.add('animate-save'); setTimeout(()=>btn.classList.remove('animate-save'),500);
  showToast('Post saved!','info');
}
function submitComment(event,postId) { if(event.key==='Enter') submitCommentBtn(postId,event.target); }
function submitCommentBtn(postId,input) {
  const text=input.value.trim(); if(!text) return;
  const user=Auth.getCurrentUser();
  const section=document.getElementById(`comments-${postId}`);
  const el=document.createElement('div');
  el.className='comment-item animate-fadeUp';
  el.innerHTML=`${avatarHTML(user,'sm')}<div class="comment-bubble"><div class="comment-author">${user.name}</div><div class="comment-text">${escapeHTML(text)}</div></div>`;
  section.insertBefore(el, section.querySelector('.comment-input-row'));
  input.value='';
  showToast('Comment posted!','success');
  if(typeof lucide!=='undefined') lucide.createIcons();
}
function escapeHTML(str) { return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

// ── Post Modal ──
function openPostModal() {
  if(!Auth.isLoggedIn()){ window.location.href='auth.html'; return; }
  const modal = document.createElement('div'); modal.className='modal-overlay'; modal.id='postModal';
  const user = Auth.getCurrentUser();
  const cats = ['Yarn & Fibre','Weaving & Knitting','Dyeing & Finishing','Technical Textiles','Sustainability','Export & Trade','Market Insights','Achievement','Tips & Tricks','Research','Business','Technology','Design'];
  modal.innerHTML = `
    <div class="modal">
      <div class="modal-header"><h3 class="modal-title">${icon('edit-3',20)} Create Post</h3><button class="modal-close" onclick="closePostModal()">✕</button></div>
      <div style="display:flex;gap:12px;align-items:flex-start;margin-bottom:16px;">
        ${avatarHTML(user,'md')}
        <div><div style="font-weight:600;font-size:15px;color:var(--text-primary);">${user.name}</div><div style="font-size:13px;color:var(--text-secondary);">${user.title||user.role}</div></div>
      </div>
      <div class="input-group" style="margin-bottom:14px;"><textarea class="textarea" id="postContent" placeholder="Share your textile expertise, insights, or news…" style="min-height:130px;"></textarea></div>
      <div class="input-group" style="margin-bottom:20px;"><select class="select" id="postCategory">${cats.map(c=>`<option value="${c}">${c}</option>`).join('')}</select></div>
      <div style="display:flex;justify-content:flex-end;gap:10px;">
        <button class="btn btn-ghost" onclick="closePostModal()">Cancel</button>
        <button class="btn btn-primary" style="animation:none;">${icon('send',16)} Publish</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  if(typeof lucide!=='undefined') lucide.createIcons();
}
function closePostModal() { const m=document.getElementById('postModal'); if(m) m.remove(); }
function submitPost() {
  const content=document.getElementById('postContent').value.trim();
  const category=document.getElementById('postCategory').value;
  if(!content){ showToast('Write something first!','error'); return; }
  const user=Auth.getCurrentUser();
  const newPost={id:'p'+Date.now(),authorId:user.id,content,category,likes:0,comments:0,shares:0,time:'just now',liked:false};
  const posts=Posts.getAll(); posts.unshift(newPost); Posts.save(posts);
  closePostModal();
  showToast('Post published!','success');
  if(typeof renderFeed==='function') renderFeed();
}

// ── Init ──
function initPage(page) {
  const navEl = document.getElementById('navbar');
  if(navEl) navEl.innerHTML = renderNavbar(page);
  // Delay motion init to allow DOM to settle + Lucide to load
  setTimeout(()=>{ initMotion(); }, 100);
}

// ── Toast ──
function showToast(message, type='info') {
  const container = document.getElementById('toast-container');
  if(!container) return;
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(()=>toast.remove(), 3200);
}
