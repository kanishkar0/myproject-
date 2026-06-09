// ============================================
// TextileConnect – App Core (app.js)
// ============================================

// ── Navbar renderer ──
function renderNavbar(activePage = '') {
  const user = Auth.getCurrentUser();
  const isLoggedIn = !!user;

  const links = [
    { id: 'home', icon: '🏠', label: 'Home', href: isLoggedIn ? 'feed.html' : 'index.html' },
    { id: 'explore', icon: '🔍', label: 'Explore', href: 'explore.html' },
    { id: 'jobs', icon: '💼', label: 'Jobs', href: 'jobs.html' },
    { id: 'messages', icon: '💬', label: 'Messages', href: 'messages.html' },
    { id: 'companies', icon: '🏭', label: 'Companies', href: 'companies.html' },
    { id: 'notifications', icon: '🔔', label: 'Alerts', href: 'notifications.html' }
  ];

  const linksHTML = links.map(l => `
    <a href="${l.href}" class="nav-link ${activePage === l.id ? 'active' : ''}" id="navlink-${l.id}">
      <span class="nav-icon">${l.icon}</span>
      <span>${l.label}</span>
      ${l.id === 'notifications' && isLoggedIn ? '<span class="notif-dot"></span>' : ''}
    </a>
  `).join('');

  const userArea = isLoggedIn ? `
    <div style="position:relative;">
      <button class="nav-avatar-btn" id="navUserBtn" onclick="toggleNavDropdown()">
        ${avatarHTML(user, 'sm')}
        <span class="text-sm">${user.name.split(' ')[0]}</span>
        <span style="font-size:0.7rem;opacity:0.6">▼</span>
      </button>
      <div class="nav-dropdown" id="navDropdown">
        <button class="dropdown-item" onclick="window.location.href='profile.html'">👤 My Profile</button>
        <button class="dropdown-item" onclick="window.location.href='feed.html'">📰 Feed</button>
        <button class="dropdown-item" onclick="window.location.href='jobs.html'">💼 Jobs</button>
        <hr style="border:none;border-top:1px solid var(--border-subtle);margin:6px 0">
        <button class="dropdown-item danger" onclick="Auth.logout()">🚪 Sign Out</button>
      </div>
    </div>
  ` : `
    <div style="display:flex;gap:8px;">
      <a href="auth.html" class="btn btn-ghost btn-sm">Sign In</a>
      <a href="auth.html#register" class="btn btn-primary btn-sm">Join Free</a>
    </div>
  `;

  return `
    <nav class="navbar">
      <div class="nav-inner">
        <a href="${isLoggedIn ? 'feed.html' : 'index.html'}" class="nav-logo">
          <div class="nav-logo-icon">🧵</div>
          <span class="nav-logo-text">TextileConnect</span>
        </a>
        <div class="nav-search">
          <span class="nav-search-icon">🔍</span>
          <input type="text" placeholder="Search people, companies, jobs…" id="globalSearch" onkeydown="handleGlobalSearch(event)">
        </div>
        <div class="nav-links">${linksHTML}</div>
        ${userArea}
      </div>
    </nav>
  `;
}

function toggleNavDropdown() {
  const d = document.getElementById('navDropdown');
  if (d) d.classList.toggle('open');
}
document.addEventListener('click', (e) => {
  const btn = document.getElementById('navUserBtn');
  const drop = document.getElementById('navDropdown');
  if (drop && btn && !btn.contains(e.target) && !drop.contains(e.target)) {
    drop.classList.remove('open');
  }
});

function handleGlobalSearch(e) {
  if (e.key === 'Enter') {
    const q = e.target.value.trim();
    if (q) window.location.href = `explore.html?q=${encodeURIComponent(q)}`;
  }
}

// ── Left Sidebar renderer ──
function renderLeftSidebar(activePage = '') {
  const user = Auth.getCurrentUser();
  if (!user) return '<div></div>';

  const links = [
    { id: 'feed', icon: '📰', label: 'My Feed', href: 'feed.html' },
    { id: 'profile', icon: '👤', label: 'My Profile', href: 'profile.html' },
    { id: 'explore', icon: '🔍', label: 'Explore', href: 'explore.html' },
    { id: 'jobs', icon: '💼', label: 'Jobs', href: 'jobs.html' },
    { id: 'companies', icon: '🏭', label: 'Companies', href: 'companies.html' },
    { id: 'messages', icon: '💬', label: 'Messages', href: 'messages.html' },
    { id: 'notifications', icon: '🔔', label: 'Notifications', href: 'notifications.html' }
  ];

  return `
    <aside class="sidebar">
      <div class="profile-card">
        <div class="profile-card-banner"></div>
        <div class="profile-card-body">
          <div class="profile-card-avatar">${avatarHTML(user, 'md')}</div>
          <div class="profile-card-name">${user.name}</div>
          <div class="profile-card-title">${user.title || user.role}</div>
          <div class="profile-card-stats">
            <div class="profile-card-stat">
              <span>Connections</span>
              <span>${(user.connections || 0).toLocaleString()}</span>
            </div>
            <div class="profile-card-stat">
              <span>Followers</span>
              <span>${(user.followers || 0).toLocaleString()}</span>
            </div>
            <div class="profile-card-stat">
              <span>Specialty</span>
              <span>${user.fabricType || '—'}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="card p-4">
        <nav class="sidebar-nav">
          ${links.map(l => `
            <a href="${l.href}" class="sidebar-nav-link ${activePage === l.id ? 'active' : ''}">
              <span class="icon">${l.icon}</span>
              <span>${l.label}</span>
            </a>
          `).join('')}
        </nav>
      </div>
    </aside>
  `;
}

// ── Right Sidebar renderer ──
function renderRightSidebar() {
  const suggestions = TC_DATA.users.slice(0, 4);
  const trending = TC_DATA.trending.slice(0, 6);

  return `
    <aside class="sidebar">
      <div class="trending-card">
        <div class="trending-title">🔥 Trending in Textiles</div>
        ${trending.map(t => `
          <div class="trending-item" onclick="window.location.href='explore.html?q=${encodeURIComponent(t.tag)}'">
            <span class="trending-tag">${t.tag}</span>
            <span class="trending-count">${t.posts}</span>
          </div>
        `).join('')}
      </div>
      <div class="suggestion-card">
        <div class="trending-title" style="margin-bottom:var(--sp-3);">👥 People You May Know</div>
        ${suggestions.map(u => `
          <div class="suggestion-item">
            ${avatarHTML(u, 'sm')}
            <div class="suggestion-info">
              <div class="suggestion-name" onclick="window.location.href='profile.html?id=${u.id}'">${u.name}</div>
              <div class="suggestion-role">${u.role}</div>
            </div>
            <button class="btn btn-outline btn-sm" onclick="connectUser('${u.id}', this)">+ Connect</button>
          </div>
        `).join('')}
      </div>
    </aside>
  `;
}

function connectUser(userId, btn) {
  btn.textContent = '✓ Pending';
  btn.disabled = true;
  btn.style.opacity = '0.6';
  showToast('Connection request sent!', 'success');
}

// ── Post renderer ──
function renderPost(post) {
  const author = getUserById(post.authorId);
  const user = Auth.getCurrentUser();
  if (!author) return '';

  return `
    <article class="post-card animate-fadeInUp" id="post-${post.id}">
      <div class="post-header">
        <div style="cursor:pointer" onclick="window.location.href='profile.html?id=${author.id}'">
          ${avatarHTML(author, 'md')}
        </div>
        <div class="post-author-info">
          <div class="post-author-name" onclick="window.location.href='profile.html?id=${author.id}'">${author.name}</div>
          <div class="post-author-meta">${author.title} · ${author.company}</div>
          <div class="post-time">${post.time}</div>
        </div>
        <span class="post-category-badge">${post.category}</span>
      </div>
      <div class="post-body">${escapeHTML(post.content)}</div>
      <div class="post-actions">
        <button class="post-action-btn ${post.liked ? 'liked' : ''}" onclick="toggleLike('${post.id}', this)">
          <span class="post-icon">${post.liked ? '❤️' : '🤍'}</span>
          <span class="like-count">${post.likes}</span> Like
        </button>
        <button class="post-action-btn" onclick="toggleComments('${post.id}')">
          💬 <span>${post.comments}</span> Comment
        </button>
        <button class="post-action-btn" onclick="sharePost('${post.id}')">
          ↗️ <span>${post.shares}</span> Share
        </button>
        ${user ? `<button class="post-action-btn" style="margin-left:auto" onclick="savePost('${post.id}', this)">🔖 Save</button>` : ''}
      </div>
      <div class="comments-section" id="comments-${post.id}">
        <div class="comment-item">
          ${avatarHTML(TC_DATA.users[1], 'sm')}
          <div class="comment-bubble">
            <div class="comment-author">${TC_DATA.users[1].name}</div>
            <div class="comment-text">Great insights! This is exactly what our industry needs. 👏</div>
          </div>
        </div>
        ${user ? `
          <div class="comment-input-row">
            ${avatarHTML(user, 'sm')}
            <input type="text" placeholder="Write a comment…" onkeydown="submitComment(event, '${post.id}')">
            <button class="btn btn-primary btn-sm" onclick="submitCommentBtn('${post.id}', this.previousElementSibling)">Post</button>
          </div>
        ` : ''}
      </div>
    </article>
  `;
}

function toggleLike(postId, btn) {
  const posts = Posts.toggle_like(postId);
  const post = posts.find(p => p.id === postId);
  if (!post) return;
  const icon = btn.querySelector('.post-icon');
  const count = btn.querySelector('.like-count');
  icon.textContent = post.liked ? '❤️' : '🤍';
  count.textContent = post.likes;
  btn.classList.toggle('liked', post.liked);
  if (post.liked) btn.classList.add('like-anim');
  setTimeout(() => btn.classList.remove('like-anim'), 400);
}

function toggleComments(postId) {
  const el = document.getElementById(`comments-${postId}`);
  if (el) el.classList.toggle('open');
}

function sharePost(postId) {
  showToast('Link copied to clipboard!', 'success');
}

function savePost(postId, btn) {
  btn.textContent = '✓ Saved';
  showToast('Post saved!', 'info');
}

function submitComment(event, postId) {
  if (event.key === 'Enter') {
    submitCommentBtn(postId, event.target);
  }
}
function submitCommentBtn(postId, input) {
  const text = input.value.trim();
  if (!text) return;
  const user = Auth.getCurrentUser();
  const section = document.getElementById(`comments-${postId}`);
  const newComment = document.createElement('div');
  newComment.className = 'comment-item animate-fadeInUp';
  newComment.innerHTML = `
    ${avatarHTML(user, 'sm')}
    <div class="comment-bubble">
      <div class="comment-author">${user.name}</div>
      <div class="comment-text">${escapeHTML(text)}</div>
    </div>
  `;
  section.insertBefore(newComment, section.querySelector('.comment-input-row'));
  input.value = '';
  showToast('Comment posted!', 'success');
}

function escapeHTML(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// ── Create Post Modal ──
function openPostModal() {
  if (!Auth.isLoggedIn()) { window.location.href = 'auth.html'; return; }
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.id = 'postModal';
  const user = Auth.getCurrentUser();
  const categories = ['Technology','Design','Market Insights','Achievement','Tips & Tricks','Research','Business','Sustainability'];
  modal.innerHTML = `
    <div class="modal">
      <div class="modal-header">
        <h3 class="modal-title">Create Post</h3>
        <button class="modal-close" onclick="closePostModal()">✕</button>
      </div>
      <div style="display:flex;gap:12px;align-items:flex-start;margin-bottom:16px;">
        ${avatarHTML(user, 'md')}
        <div>
          <div style="font-weight:700;font-size:0.95rem;">${user.name}</div>
          <div style="font-size:0.8rem;color:var(--txt-muted);">${user.title || user.role}</div>
        </div>
      </div>
      <div class="input-group" style="margin-bottom:16px;">
        <textarea class="textarea" id="postContent" placeholder="Share your textile expertise, insights, or news…" style="min-height:140px;"></textarea>
      </div>
      <div class="input-group" style="margin-bottom:20px;">
        <select class="select" id="postCategory">
          ${categories.map(c => `<option value="${c}">${c}</option>`).join('')}
        </select>
      </div>
      <div style="display:flex;justify-content:flex-end;gap:12px;">
        <button class="btn btn-ghost" onclick="closePostModal()">Cancel</button>
        <button class="btn btn-primary" onclick="submitPost()">🚀 Publish Post</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

function closePostModal() {
  const m = document.getElementById('postModal');
  if (m) m.remove();
}

function submitPost() {
  const content = document.getElementById('postContent').value.trim();
  const category = document.getElementById('postCategory').value;
  if (!content) { showToast('Please write something first!', 'error'); return; }
  const user = Auth.getCurrentUser();
  const newPost = {
    id: 'p' + Date.now(),
    authorId: user.id,
    content,
    category,
    likes: 0, comments: 0, shares: 0,
    time: 'just now', liked: false
  };
  const posts = Posts.getAll();
  posts.unshift(newPost);
  Posts.save(posts);
  closePostModal();
  showToast('Post published! 🎉', 'success');
  // Re-render feed if on feed page
  if (typeof renderFeed === 'function') renderFeed();
}

// ── Init check ──
function initPage(page) {
  // Insert navbar
  const navEl = document.getElementById('navbar');
  if (navEl) navEl.innerHTML = renderNavbar(page);
}
