// ============================================
// TextileConnect – Mock Data
// ============================================

const TC_DATA = {

  // ── Fabric Types ──
  fabricTypes: [
    'Cotton', 'Silk', 'Wool', 'Linen', 'Denim', 'Polyester',
    'Nylon', 'Rayon', 'Velvet', 'Chiffon', 'Satin', 'Tweed',
    'Fleece', 'Georgette', 'Organza', 'Crepe', 'Jacquard', 'Cambric'
  ],

  // ── Roles ──
  roles: [
    'Textile Manufacturer', 'Fabric Designer', 'Yarn Trader', 'Fabric Buyer',
    'Quality Inspector', 'Textile Engineer', 'Mill Owner', 'Export Manager',
    'Fashion Designer', 'Textile Chemist', 'Weaving Expert', 'Knitting Specialist',
    'Dyeing & Printing Expert', 'Supply Chain Manager', 'Textile Consultant',
    'Research Scientist', 'Textile Student', 'Brand Manager'
  ],

  // ── Skills ──
  skills: [
    '🧵 Yarn Spinning', '🪡 Fabric Weaving', '🎨 Dyeing & Printing', '🔬 Quality Control',
    '📐 Pattern Making', '🏭 Mill Operations', '🤝 B2B Trading', '📦 Supply Chain',
    '🌿 Sustainable Textiles', '⚗️ Textile Chemistry', '🖥️ CAD Design', '🌍 Export Management',
    '🔧 Loom Maintenance', '📊 Textile Analytics', '🎯 Merchandising', '💼 Procurement'
  ],

  // ── Countries ──
  countries: [
    'India', 'China', 'Bangladesh', 'Vietnam', 'Turkey', 'Indonesia',
    'Pakistan', 'Italy', 'Germany', 'USA', 'Japan', 'South Korea',
    'Egypt', 'Brazil', 'Sri Lanka', 'Myanmar', 'Ethiopia', 'France'
  ],

  // ── Sample Users ──
  users: [
    {
      id: 'u1',
      name: 'Rajesh Murugan',
      title: 'Senior Textile Engineer',
      role: 'Textile Engineer',
      company: 'Coimbatore Spinning Mills',
      location: 'Coimbatore, India',
      country: 'India',
      fabricType: 'Cotton',
      avatar: null,
      avatarColor: '#4F46E5',
      initials: 'RM',
      connections: 1842,
      followers: 3200,
      about: 'Passionate textile engineer with 15+ years in cotton spinning. Specialized in ring frame and rotor spinning technologies. Committed to sustainable manufacturing practices.',
      skills: ['🧵 Yarn Spinning', '🏭 Mill Operations', '🔬 Quality Control', '🌿 Sustainable Textiles'],
      experience: [
        { title: 'Senior Textile Engineer', company: 'Coimbatore Spinning Mills', years: '2018 – Present', desc: 'Managing 50,000 spindles production facility' },
        { title: 'Process Engineer', company: 'Tirupur Cotton Works', years: '2012 – 2018', desc: 'Optimized yarn production by 23%' }
      ],
      certifications: ['ISO 9001 Quality Management', 'GOTS Certified Organic Textiles'],
      posts: ['p1', 'p4'],
      isDemo: true
    },
    {
      id: 'u2',
      name: 'Priya Sharma',
      title: 'Fabric Designer & Consultant',
      role: 'Fabric Designer',
      company: 'Silk Route Studios',
      location: 'Surat, India',
      country: 'India',
      fabricType: 'Silk',
      avatar: null,
      avatarColor: '#D97706',
      initials: 'PS',
      connections: 956,
      followers: 4800,
      about: 'Award-winning fabric designer specializing in traditional Indian silk weaves with modern aesthetics. Working with luxury fashion brands globally.',
      skills: ['📐 Pattern Making', '🎨 Dyeing & Printing', '🖥️ CAD Design', '🎯 Merchandising'],
      experience: [
        { title: 'Lead Fabric Designer', company: 'Silk Route Studios', years: '2020 – Present', desc: 'Creating exclusive collections for luxury brands' },
        { title: 'Designer', company: 'Banarasi Weaves Co.', years: '2015 – 2020', desc: 'Revived 12 traditional Banarasi patterns' }
      ],
      certifications: ['National Institute of Fashion Technology', 'NIFT Excellence Award 2022'],
      posts: ['p2', 'p5'],
      isDemo: true
    },
    {
      id: 'u3',
      name: 'Chen Wei',
      title: 'Export Manager – Denim Fabrics',
      role: 'Export Manager',
      company: 'Guangzhou Denim Co.',
      location: 'Guangzhou, China',
      country: 'China',
      fabricType: 'Denim',
      avatar: null,
      avatarColor: '#0EA5E9',
      initials: 'CW',
      connections: 2340,
      followers: 5100,
      about: 'International textile trade expert with expertise in denim fabrics. Connecting manufacturers with global buyers across 30+ countries.',
      skills: ['🌍 Export Management', '🤝 B2B Trading', '📦 Supply Chain', '📊 Textile Analytics'],
      experience: [
        { title: 'Export Manager', company: 'Guangzhou Denim Co.', years: '2016 – Present', desc: 'Managing $50M annual exports to Europe & USA' }
      ],
      certifications: ['OTEXA Certified Trader', 'ISO 14001 Environmental Management'],
      posts: ['p3'],
      isDemo: true
    },
    {
      id: 'u4',
      name: 'Fatima Al-Rashid',
      title: 'Sustainable Textiles Researcher',
      role: 'Research Scientist',
      company: 'Green Fibre Labs',
      location: 'Istanbul, Turkey',
      country: 'Turkey',
      fabricType: 'Linen',
      avatar: null,
      avatarColor: '#10B981',
      initials: 'FA',
      connections: 678,
      followers: 2900,
      about: 'PhD Researcher in sustainable textile innovations. Focused on bio-based dyes, natural fibers, and circular fashion economy.',
      skills: ['⚗️ Textile Chemistry', '🌿 Sustainable Textiles', '🔬 Quality Control'],
      experience: [
        { title: 'Lead Researcher', company: 'Green Fibre Labs', years: '2019 – Present', desc: 'Developing plant-based dyeing processes' }
      ],
      certifications: ['PhD Textile Science – Istanbul Technical University', 'OEKO-TEX Specialist'],
      posts: ['p6'],
      isDemo: true
    },
    {
      id: 'u5',
      name: 'Arjun Patel',
      title: 'Mill Owner & Textile Entrepreneur',
      role: 'Mill Owner',
      company: 'Patel Textile Group',
      location: 'Ahmedabad, India',
      country: 'India',
      fabricType: 'Cotton',
      avatar: null,
      avatarColor: '#8B5CF6',
      initials: 'AP',
      connections: 3100,
      followers: 8200,
      about: '3rd generation textile entrepreneur. Running integrated textile complex with spinning, weaving, and finishing units. Advocate for Made-in-India textiles.',
      skills: ['🏭 Mill Operations', '💼 Procurement', '🤝 B2B Trading', '📊 Textile Analytics'],
      experience: [
        { title: 'Managing Director', company: 'Patel Textile Group', years: '2010 – Present', desc: '₹500 crore revenue, 2000+ employees' }
      ],
      certifications: ['BCI Better Cotton Initiative', 'Textile Association of India – Board Member'],
      posts: ['p7'],
      isDemo: true
    },
    {
      id: 'u6',
      name: 'Yuki Tanaka',
      title: 'Knitting Technology Specialist',
      role: 'Knitting Specialist',
      company: 'Osaka Knit Technologies',
      location: 'Osaka, Japan',
      country: 'Japan',
      fabricType: 'Wool',
      avatar: null,
      avatarColor: '#EC4899',
      initials: 'YT',
      connections: 445,
      followers: 1600,
      about: 'Expert in advanced circular knitting and seamless garment technology. Bridging traditional Japanese craftsmanship with modern automation.',
      skills: ['🪡 Fabric Weaving', '🔧 Loom Maintenance', '⚗️ Textile Chemistry'],
      experience: [
        { title: 'Technical Specialist', company: 'Osaka Knit Technologies', years: '2017 – Present', desc: 'Leading R&D for next-gen knitting machinery' }
      ],
      certifications: ['Shima Seiki APEX3 Certified', 'Japan Textile Technology Award 2023'],
      posts: [],
      isDemo: true
    }
  ],

  // ── Sample Posts ──
  posts: [
    {
      id: 'p1',
      authorId: 'u1',
      content: '🧵 Excited to share that our mill has successfully implemented AI-powered yarn quality monitoring! Defect detection rate improved by 40%. The future of textile manufacturing is digital! #TextileTech #YarnSpinning #Industry4 #TextileConnect',
      image: null,
      likes: 284,
      comments: 47,
      shares: 31,
      time: '2h ago',
      liked: false,
      category: 'Technology'
    },
    {
      id: 'p2',
      authorId: 'u2',
      content: '🌺 Just unveiled our Spring 2026 Banarasi Silk collection! Inspired by the ancient Mughal court patterns, reimagined for contemporary luxury fashion. Each saree takes 3 weeks to handcraft. Swipe to see the details! \n\n#SilkFabrics #BanarasiWeaves #HandloomHeritage #TextileArt',
      image: null,
      likes: 512,
      comments: 89,
      shares: 76,
      time: '5h ago',
      liked: false,
      category: 'Design'
    },
    {
      id: 'p3',
      authorId: 'u3',
      content: 'Market Update 📊: Global denim fabric prices have stabilized after Q3 2025 fluctuations. Key trends:\n\n• Sustainable denim up 34% YoY\n• Stretch denim still dominant (68% share)\n• Organic cotton blends rising in Europe\n• China-Bangladesh price gap narrowing\n\nFull report in comments! #DenimMarket #TextileTrade #FabricPrices',
      image: null,
      likes: 198,
      comments: 63,
      shares: 88,
      time: '1d ago',
      liked: false,
      category: 'Market Insights'
    },
    {
      id: 'p4',
      authorId: 'u1',
      content: '🏆 Proud moment! Coimbatore Spinning Mills has received the "Best Sustainable Cotton Mill" award at the India Textile Summit 2026. This is a testament to our team\'s relentless efforts over 3 years to reduce water consumption by 55%! \n\n#Sustainability #CottonMill #TextileIndia',
      image: null,
      likes: 421,
      comments: 55,
      shares: 42,
      time: '3d ago',
      liked: false,
      category: 'Achievement'
    },
    {
      id: 'p5',
      authorId: 'u2',
      content: '🎨 Designer tip of the week: When working with pure silk, always pre-wash in cold water with pH-neutral soap before printing. This opens the fiber structure for better dye absorption and gives you 25% more vibrancy! \n\nWhat are your go-to silk preparation techniques? Share below! 👇 \n\n#SilkDesign #FabricTips #TextileDesign',
      image: null,
      likes: 367,
      comments: 72,
      shares: 54,
      time: '4d ago',
      liked: false,
      category: 'Tips & Tricks'
    },
    {
      id: 'p6',
      authorId: 'u4',
      content: '🌿 Breakthrough research: We\'ve successfully developed a zero-waste indigo dyeing process using fermentation technology! Traditional indigo dyeing wastes ~30% of dye. Our new method? Less than 2% waste. \n\nPublishing in Journal of Cleaner Production next month! \n\n#SustainableTextiles #IndigoDyeing #CircularFashion #GreenTextile',
      image: null,
      likes: 634,
      comments: 108,
      shares: 195,
      time: '6d ago',
      liked: false,
      category: 'Research'
    },
    {
      id: 'p7',
      authorId: 'u5',
      content: 'Building a textile empire in India? 🇮🇳 Here\'s what nobody tells you:\n\n1️⃣ Raw material sourcing is 60% of your battle\n2️⃣ Government schemes like PLI can transform your margins\n3️⃣ Export markets are more stable than domestic\n4️⃣ Invest in your workers — they ARE your technology\n5️⃣ Quality certifications open global doors\n\nStarted with 200 spindles, now running 80,000. DM for mentorship! \n\n#TextileEntrepreneur #MadeInIndia #TextileBusiness',
      image: null,
      likes: 892,
      comments: 143,
      shares: 211,
      time: '1w ago',
      liked: false,
      category: 'Business'
    }
  ],

  // ── Sample Jobs ──
  jobs: [
    {
      id: 'j1',
      title: 'Senior Yarn Spinning Technologist',
      company: 'Lakshmi Mills Ltd.',
      companyId: 'c1',
      location: 'Coimbatore, India',
      type: 'Full-time',
      fabricType: 'Cotton',
      salary: '₹8–12 LPA',
      posted: '2d ago',
      applicants: 47,
      description: 'We are seeking an experienced spinning technologist to optimize our ring spinning and OE rotor processes. Min 5 years experience required.',
      requirements: ['5+ years spinning experience', 'Ring frame & rotor expertise', 'Quality management knowledge'],
      isNew: true
    },
    {
      id: 'j2',
      title: 'Textile Designer – Silk Weaves',
      company: 'House of Silk',
      companyId: 'c2',
      location: 'Varanasi, India',
      type: 'Full-time',
      fabricType: 'Silk',
      salary: '₹5–8 LPA',
      posted: '3d ago',
      applicants: 82,
      description: 'Join our design team to create exclusive Banarasi silk collections for luxury export markets. Portfolio mandatory.',
      requirements: ['Fashion Design degree', 'Experience with Jacquard loom patterns', 'CAD proficiency'],
      isNew: true
    },
    {
      id: 'j3',
      title: 'Quality Control Manager – Denim',
      company: 'Arvind Fashions',
      companyId: 'c3',
      location: 'Ahmedabad, India',
      type: 'Full-time',
      fabricType: 'Denim',
      salary: '₹10–15 LPA',
      posted: '5d ago',
      applicants: 34,
      description: 'Lead quality operations for our 50 million meters/year denim production. AATCC/ISO testing experience essential.',
      requirements: ['QC/QA management 7+ years', 'AATCC testing standards', 'Six Sigma preferred'],
      isNew: false
    },
    {
      id: 'j4',
      title: 'Export Sales Executive',
      company: 'Vardhman Textiles',
      companyId: 'c4',
      location: 'Ludhiana, India',
      type: 'Full-time',
      fabricType: 'Wool',
      salary: '₹6–10 LPA + Commission',
      posted: '1w ago',
      applicants: 56,
      description: 'Drive international sales for our premium wool yarn products. Experience in European and US markets preferred.',
      requirements: ['B2B sales 3+ years', 'Textile product knowledge', 'English proficiency'],
      isNew: false
    },
    {
      id: 'j5',
      title: 'Dyeing & Finishing Process Engineer',
      company: 'Welspun India',
      companyId: 'c5',
      location: 'Kutch, India',
      type: 'Full-time',
      fabricType: 'Cotton',
      salary: '₹7–11 LPA',
      posted: '1w ago',
      applicants: 29,
      description: 'Optimize dyeing & finishing processes for home textiles. Focus on sustainable and OEKO-TEX compliant processes.',
      requirements: ['Textile/Chemical Engineering', 'Dyeing process knowledge', 'OEKO-TEX awareness'],
      isNew: false
    },
    {
      id: 'j6',
      title: 'Sustainable Textile Researcher',
      company: 'Grasim Industries',
      companyId: 'c6',
      location: 'Mumbai, India',
      type: 'Full-time',
      fabricType: 'Rayon',
      salary: '₹9–14 LPA',
      posted: '2w ago',
      applicants: 21,
      description: 'Research sustainable viscose and lyocell fiber production. PhD or Masters in Textile Science preferred.',
      requirements: ['MSc/PhD Textile Science', 'Research publication preferred', 'Sustainable fiber expertise'],
      isNew: false
    }
  ],

  // ── Sample Companies ──
  companies: [
    {
      id: 'c1',
      name: 'Lakshmi Mills Ltd.',
      tagline: 'Spinning Excellence Since 1910',
      type: 'Spinning Mill',
      location: 'Coimbatore, India',
      fabricType: 'Cotton',
      employees: '5,000–10,000',
      followers: 12400,
      about: 'One of India\'s oldest and most respected cotton spinning mills. 1 lakh spindles, certified organic cotton processing.',
      color: '#4F46E5'
    },
    {
      id: 'c2',
      name: 'House of Silk',
      tagline: 'Luxury Silk Weaving, Varanasi',
      type: 'Weaving & Design',
      location: 'Varanasi, India',
      fabricType: 'Silk',
      employees: '500–1,000',
      followers: 8700,
      about: 'Premium Banarasi silk manufacturer serving luxury fashion houses globally. UNESCO recognized craft heritage brand.',
      color: '#D97706'
    },
    {
      id: 'c3',
      name: 'Arvind Fashions',
      tagline: 'The Fabric of Modern India',
      type: 'Integrated Textile',
      location: 'Ahmedabad, India',
      fabricType: 'Denim',
      employees: '10,000+',
      followers: 31200,
      about: 'India\'s largest denim manufacturer. 100+ million meters annual capacity. Supplying global fashion brands.',
      color: '#0EA5E9'
    },
    {
      id: 'c4',
      name: 'Vardhman Textiles',
      tagline: 'Weaving a Better Tomorrow',
      type: 'Yarn & Fabric',
      location: 'Ludhiana, India',
      fabricType: 'Wool',
      employees: '25,000+',
      followers: 24500,
      about: 'India\'s leading yarn manufacturer. Diversified across cotton, acrylic, and wool yarns with global exports.',
      color: '#8B5CF6'
    },
    {
      id: 'c5',
      name: 'Welspun India',
      tagline: 'Home Textiles, Global Leader',
      type: 'Home Textiles',
      location: 'Kutch, India',
      fabricType: 'Cotton',
      employees: '15,000+',
      followers: 18900,
      about: 'World\'s leading home textiles company. Supplying Walmart, Target, IKEA. Pioneer in sustainable cotton sourcing.',
      color: '#10B981'
    },
    {
      id: 'c6',
      name: 'Grasim Industries',
      tagline: 'Pioneers in Man-Made Fibres',
      type: 'Fibre Manufacturing',
      location: 'Mumbai, India',
      fabricType: 'Rayon',
      employees: '50,000+',
      followers: 42000,
      about: 'Global leader in viscose staple fibre. Part of Aditya Birla Group. Pioneering eco-friendly lyocell production.',
      color: '#EC4899'
    }
  ],

  // ── Trending Topics ──
  trending: [
    { tag: '#SustainableTextiles', posts: '24.5K posts' },
    { tag: '#TextileTech2026', posts: '18.2K posts' },
    { tag: '#DenimTrends', posts: '12.8K posts' },
    { tag: '#MadeInIndia', posts: '9.4K posts' },
    { tag: '#SilkHeritage', posts: '7.1K posts' },
    { tag: '#CircularFashion', posts: '5.8K posts' },
    { tag: '#YarnInnovation', posts: '4.3K posts' },
    { tag: '#TextileExports', posts: '3.9K posts' }
  ],

  // ── Notifications ──
  notifications: [
    { id: 'n1', type: 'like', userId: 'u2', message: 'Priya Sharma liked your post about AI-powered quality monitoring', time: '10m ago', read: false },
    { id: 'n2', type: 'comment', userId: 'u3', message: 'Chen Wei commented on your post: "Great insights Rajesh!"', time: '45m ago', read: false },
    { id: 'n3', type: 'connect', userId: 'u5', message: 'Arjun Patel wants to connect with you', time: '2h ago', read: false },
    { id: 'n4', type: 'like', userId: 'u4', message: 'Fatima Al-Rashid liked your post about sustainable cotton', time: '5h ago', read: true },
    { id: 'n5', type: 'job', userId: null, message: 'New job match: Senior Yarn Spinning Technologist at Lakshmi Mills', time: '1d ago', read: true },
    { id: 'n6', type: 'follow', userId: 'u6', message: 'Yuki Tanaka started following you', time: '1d ago', read: true },
    { id: 'n7', type: 'comment', userId: 'u2', message: 'Priya Sharma replied to your comment on the silk collection post', time: '2d ago', read: true },
    { id: 'n8', type: 'milestone', userId: null, message: '🎉 Your profile has been viewed 500 times this week!', time: '3d ago', read: true }
  ],

  // ── Messages ──
  conversations: [
    {
      id: 'conv1',
      userId: 'u2',
      lastMessage: 'Thank you for the insights on cotton blending!',
      time: '10m ago',
      unread: 2,
      messages: [
        { from: 'u2', text: 'Hi Rajesh! I saw your post about AI quality monitoring. Fascinating!', time: '9:00 AM' },
        { from: 'me', text: 'Thanks Priya! It really transformed our defect detection workflow.', time: '9:05 AM' },
        { from: 'u2', text: 'Do you think similar tech could work for silk weaving inspection?', time: '9:08 AM' },
        { from: 'me', text: 'Absolutely! Vision-based AI works even better on silk due to the lustre variations.', time: '9:15 AM' },
        { from: 'u2', text: 'Thank you for the insights on cotton blending!', time: '9:20 AM' }
      ]
    },
    {
      id: 'conv2',
      userId: 'u3',
      lastMessage: 'Can we discuss the denim supply for Q3?',
      time: '2h ago',
      unread: 1,
      messages: [
        { from: 'u3', text: 'Hello! I\'m looking for cotton suppliers for our denim blends.', time: 'Yesterday' },
        { from: 'me', text: 'Hi Chen! We supply BCI certified cotton. What quantity are you looking at?', time: 'Yesterday' },
        { from: 'u3', text: 'Can we discuss the denim supply for Q3?', time: '10:30 AM' }
      ]
    },
    {
      id: 'conv3',
      userId: 'u5',
      lastMessage: 'Great talking to you at the textile summit!',
      time: '1d ago',
      unread: 0,
      messages: [
        { from: 'u5', text: 'Great talking to you at the textile summit!', time: '2d ago' },
        { from: 'me', text: 'Same here! Your presentation on PLI scheme was eye-opening.', time: '2d ago' }
      ]
    }
  ]
};

// ── Storage Helpers ──
const Storage = {
  get: (key) => {
    try { return JSON.parse(localStorage.getItem('tc_' + key)); }
    catch { return null; }
  },
  set: (key, value) => {
    try { localStorage.setItem('tc_' + key, JSON.stringify(value)); }
    catch {}
  },
  remove: (key) => localStorage.removeItem('tc_' + key)
};

// ── Auth Helpers ──
const Auth = {
  getCurrentUser: () => Storage.get('currentUser'),
  isLoggedIn: () => !!Storage.get('currentUser'),
  login: (user) => Storage.set('currentUser', user),
  logout: () => { Storage.remove('currentUser'); window.location.href = 'index.html'; },
  requireAuth: () => {
    if (!Storage.get('currentUser')) {
      window.location.href = 'auth.html';
      return false;
    }
    return true;
  }
};

// ── Post helpers ──
const Posts = {
  getAll: () => {
    const saved = Storage.get('posts');
    return saved || TC_DATA.posts;
  },
  save: (posts) => Storage.set('posts', posts),
  toggle_like: (postId) => {
    const posts = Posts.getAll();
    const post = posts.find(p => p.id === postId);
    if (post) {
      post.liked = !post.liked;
      post.likes += post.liked ? 1 : -1;
      Posts.save(posts);
    }
    return posts;
  }
};

// ── User color map ──
function getUserColor(userId) {
  const user = TC_DATA.users.find(u => u.id === userId);
  return user ? user.avatarColor : '#4F46E5';
}

function getUserById(userId) {
  return TC_DATA.users.find(u => u.id === userId) || null;
}

// ── Avatar HTML ──
function avatarHTML(user, size = 'md') {
  if (!user) return '';
  const sz = { sm: 36, md: 48, lg: 72, xl: 100, '2xl': 128 };
  const px = sz[size] || 48;
  const fs = Math.round(px * 0.38);
  return `<div class="avatar-placeholder" style="width:${px}px;height:${px}px;background:linear-gradient(135deg,${user.avatarColor},${user.avatarColor}99);font-size:${fs}px;border:2px solid ${user.avatarColor}44;">${user.initials}</div>`;
}

// ── Toast helper ──
function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}

// ── Relative time ──
function timeAgo(date) {
  const diff = Date.now() - new Date(date).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 1) return 'just now';
  if (m < 60) return m + 'm ago';
  const h = Math.floor(m / 60);
  if (h < 24) return h + 'h ago';
  return Math.floor(h / 24) + 'd ago';
}
