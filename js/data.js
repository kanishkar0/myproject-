// ============================================
// Texnect – Mock Data
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
      avatarColor: '#185FA5',
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
      avatarColor: '#378ADD',
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
      avatarColor: '#0C447C',
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
      avatarColor: '#85B7EB',
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
      avatarColor: '#185FA5',
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
      avatarColor: '#378ADD',
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
      industry: 'Manufacturing',
      type: 'Spinning Mill',
      location: 'Coimbatore, India',
      fabricType: 'Cotton',
      employees: '5,000–10,000',
      followers: 12400,
      about: 'One of India\'s oldest and most respected cotton spinning mills. 1 lakh spindles, certified organic cotton processing.',
      color: '#185FA5'
    },
    {
      id: 'c2',
      name: 'House of Silk',
      tagline: 'Luxury Silk Weaving, Varanasi',
      industry: 'Design',
      type: 'Weaving & Design',
      location: 'Varanasi, India',
      fabricType: 'Silk',
      employees: '500–1,000',
      followers: 8700,
      about: 'Premium Banarasi silk manufacturer serving luxury fashion houses globally. UNESCO recognized craft heritage brand.',
      color: '#378ADD'
    },
    {
      id: 'c3',
      name: 'Arvind Fashions',
      tagline: 'The Fabric of Modern India',
      industry: 'Manufacturing',
      type: 'Integrated Textile',
      location: 'Ahmedabad, India',
      fabricType: 'Denim',
      employees: '10,000+',
      followers: 31200,
      about: 'India\'s largest denim manufacturer. 100+ million meters annual capacity. Supplying global fashion brands.',
      color: '#0C447C'
    },
    {
      id: 'c4',
      name: 'Vardhman Textiles',
      tagline: 'Weaving a Better Tomorrow',
      industry: 'Export',
      type: 'Yarn & Fabric',
      location: 'Ludhiana, India',
      fabricType: 'Wool',
      employees: '25,000+',
      followers: 24500,
      about: 'India\'s leading yarn manufacturer. Diversified across cotton, acrylic, and wool yarns with global exports.',
      color: '#185FA5'
    },
    {
      id: 'c5',
      name: 'Welspun India',
      tagline: 'Home Textiles, Global Leader',
      industry: 'Manufacturing',
      type: 'Home Textiles',
      location: 'Kutch, India',
      fabricType: 'Cotton',
      employees: '15,000+',
      followers: 18900,
      about: 'World\'s leading home textiles company. Supplying Walmart, Target, IKEA. Pioneer in sustainable cotton sourcing.',
      color: '#85B7EB'
    },
    {
      id: 'c6',
      name: 'Grasim Industries',
      tagline: 'Pioneers in Man-Made Fibres',
      industry: 'Research',
      type: 'Fibre Manufacturing',
      location: 'Mumbai, India',
      fabricType: 'Rayon',
      employees: '50,000+',
      followers: 42000,
      about: 'Global leader in viscose staple fibre. Part of Aditya Birla Group. Pioneering eco-friendly lyocell production.',
      color: '#378ADD'
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
        { text: 'Hi Rajesh! I saw your post about AI quality monitoring. Fascinating!', fromMe: false, time: '9:00 AM' },
        { text: 'Thanks Priya! It really transformed our defect detection workflow.', fromMe: true, time: '9:05 AM' },
        { text: 'Do you think similar tech could work for silk weaving inspection?', fromMe: false, time: '9:08 AM' },
        { text: 'Absolutely! Vision-based AI works even better on silk due to the lustre variations.', fromMe: true, time: '9:15 AM' },
        { text: 'Thank you for the insights on cotton blending!', fromMe: false, time: '9:20 AM' }
      ]
    },
    {
      id: 'conv2',
      userId: 'u3',
      lastMessage: 'Can we discuss the denim supply for Q3?',
      time: '2h ago',
      unread: 1,
      messages: [
        { text: 'Hello! I\'m looking for cotton suppliers for our denim blends.', fromMe: false, time: 'Yesterday' },
        { text: 'Hi Chen! We supply BCI certified cotton. What quantity are you looking at?', fromMe: true, time: 'Yesterday' },
        { text: 'Can we discuss the denim supply for Q3?', fromMe: false, time: '10:30 AM' }
      ]
    },
    {
      id: 'conv3',
      userId: 'u5',
      lastMessage: 'Great talking to you at the textile summit!',
      time: '1d ago',
      unread: 0,
      messages: [
        { text: 'Great talking to you at the textile summit!', fromMe: false, time: '2d ago' },
        { text: 'Same here! Your presentation on PLI scheme was eye-opening.', fromMe: true, time: '2d ago' }
      ]
    }
  ],

  // ── Expert Domains ──
  expertDomains: ['Spinning','Weaving','Knitting','Dyeing & Printing','Garments','Quality Control','Textile Testing','Sustainability','Textile Machinery','Technical Textiles'],

  // ── Experts ──
  experts: [
    { id:'e1', userId:'u1', domain:'Spinning', specialization:'Ring & Rotor Spinning', experience:'15+ years', rating:4.9, reviews:128, solved:87, location:'Coimbatore, India', available:true, rate:'Free for students' },
    { id:'e2', userId:'u2', domain:'Dyeing & Printing', specialization:'Silk Dyeing & Block Printing', experience:'12+ years', rating:4.8, reviews:95, solved:62, location:'Surat, India', available:true, rate:'₹500/session' },
    { id:'e3', userId:'u3', domain:'Quality Control', specialization:'Denim QC & AATCC Testing', experience:'10+ years', rating:4.7, reviews:76, solved:54, location:'Guangzhou, China', available:false, rate:'$30/session' },
    { id:'e4', userId:'u4', domain:'Sustainability', specialization:'Bio-dyes & Eco-fibers', experience:'8+ years', rating:4.9, reviews:142, solved:91, location:'Istanbul, Turkey', available:true, rate:'Free' },
    { id:'e5', userId:'u5', domain:'Weaving', specialization:'Power Loom & Handloom Operations', experience:'20+ years', rating:4.6, reviews:64, solved:45, location:'Ahmedabad, India', available:true, rate:'₹300/session' },
    { id:'e6', userId:'u6', domain:'Knitting', specialization:'Circular & Flat-bed Knitting', experience:'9+ years', rating:4.8, reviews:53, solved:38, location:'Osaka, Japan', available:true, rate:'¥3000/session' },
    { id:'e7', userId:'u1', domain:'Textile Machinery', specialization:'Spinning Machine Maintenance', experience:'15+ years', rating:4.9, reviews:89, solved:72, location:'Coimbatore, India', available:true, rate:'₹400/session' },
    { id:'e8', userId:'u4', domain:'Textile Testing', specialization:'Fiber Analysis & Fabric Testing', experience:'8+ years', rating:4.7, reviews:67, solved:51, location:'Istanbul, Turkey', available:true, rate:'Free for research' }
  ],

  // ── Problems / Ask Experts ──
  problems: [
    {
      id:'prob1', authorId:'u1', domain:'Spinning',
      title:'Frequent yarn breakage on Ring Frame at 18,000 RPM',
      description:'We are experiencing 5-8 breakages per 100 spindle hours on our Lakshmi Rieter G35 ring frames. Count: 40s Ne combed cotton. TM is 4.2. Traveller: Bracker C1 EL Udr. The breakages increase after the 3rd shift. We have checked roving quality and it seems fine. Any suggestions on root cause analysis?',
      urgency:'High', status:'open', posted:'3h ago',
      tags:['Ring Spinning','Yarn Breakage','Cotton 40s'],
      upvotes:24, views:186, answerCount:3,
      answers:[
        { id:'a1', expertId:'e1', text:'At 18K RPM with 40s Ne, check your spindle bearing condition first — worn bearings cause vibration-induced breaks especially in later shifts due to thermal expansion. Also verify your traveller weight — C1 EL might be heavy for 40s. Try C1 EL Sdr (0.2g lighter). Run a spindle vibration audit on bottom rollers too.', upvotes:18, time:'2h ago', accepted:true },
        { id:'a2', expertId:'e7', text:'Shift-dependent breakage strongly suggests a temperature/humidity issue. Check your humidification system — RH should be 55-58% for 40s combed. After 3rd shift, ambient temp rises and RH drops, causing fiber brittleness. Install hygrometer near the frames.', upvotes:12, time:'1h ago', accepted:false },
        { id:'a3', expertId:'e5', text:'Check your drafting zone — particularly the aprons. Worn aprons cause uneven drafting which shows as weak spots. Replace if they have more than 6 months of runtime.', upvotes:8, time:'45m ago', accepted:false }
      ]
    },
    {
      id:'prob2', authorId:'u2', domain:'Dyeing & Printing',
      title:'Shade variation in reactive dyeing of cotton knitted fabric',
      description:'Getting ΔE > 1.5 between batches using Reactive HE dyes on 100% cotton single jersey (160 GSM). Process: exhaust dyeing at 60°C, 45 min. Salt: 60 g/L, Soda ash: 15 g/L. The left-center-right shade is fine but batch-to-batch consistency is the issue. MLR is 1:8.',
      urgency:'Medium', status:'open', posted:'6h ago',
      tags:['Reactive Dyeing','Shade Variation','Cotton Knits'],
      upvotes:31, views:247, answerCount:2,
      answers:[
        { id:'a4', expertId:'e2', text:'ΔE > 1.5 batch-to-batch with HE dyes usually comes from inconsistent pre-treatment. Check your scouring — residual wax/oil varies between grey fabric lots. Run a drop test (should be < 3 sec). Also, calibrate your dye dosing system — even 2% variation in dye weight causes visible shifts in medium shades.', upvotes:22, time:'5h ago', accepted:true },
        { id:'a5', expertId:'e4', text:'Consider switching to controlled dosing of salt and alkali. The migration phase (salt addition) timing significantly affects levelness. Use a programmable dosing pump and add salt in 3 stages over 20 minutes instead of single shot.', upvotes:15, time:'4h ago', accepted:false }
      ]
    },
    {
      id:'prob3', authorId:'u5', domain:'Weaving',
      title:'High warp breakage rate on air-jet loom with polyester-viscose blend',
      description:'Running 45" width fabric on Toyota JAT810 air-jet looms. Warp: 30s PV 65/35 blend. Getting 3.5 breaks per lakh picks. Reed: 72/2. The breaks are concentrated near selvedge (80%). Sizing recipe: PVA 6%, Acrylic 2%, Wax 0.5%. Need to bring it below 1.5 breaks.',
      urgency:'High', status:'open', posted:'1d ago',
      tags:['Air-jet Weaving','PV Blend','Warp Breakage'],
      upvotes:19, views:163, answerCount:1,
      answers:[
        { id:'a6', expertId:'e5', text:'Selvedge-concentrated breaks on air-jet with PV blend — classic issue. Check your temple ring condition and air pressure at selvedge nozzles. For PV, you need slightly higher wax % (try 0.8%) for better abrasion resistance at reed. Also, verify your lease rod position — it should be 15-18 inches from the heald frames.', upvotes:14, time:'20h ago', accepted:false }
      ]
    },
    {
      id:'prob4', authorId:'u6', domain:'Knitting',
      title:'Needle line marks on circular knit single jersey',
      description:'Visible needle lines appearing on our Mayer & Cie Relanit 4.0 (30 gauge, 30" dia). Using 30s Ne cotton yarn. The lines appear every 12 needles consistently. Already replaced suspected needles and sinkers. Cylinder was lapped 6 months ago. What else could cause this?',
      urgency:'Medium', status:'solved', posted:'3d ago',
      tags:['Circular Knitting','Needle Lines','Quality Defect'],
      upvotes:27, views:312, answerCount:2,
      answers:[
        { id:'a7', expertId:'e6', text:'Every-12-needle pattern on Relanit = cam track issue, not needles. The cam timing is slightly off for one set of cams. Check cam box 3 specifically — a 0.02mm wear on the clearing cam creates this exact 12-needle repeat pattern. Also inspect the dial-cylinder timing. On 30 gauge, even 0.01mm misalignment shows as needle lines.', upvotes:31, time:'2d ago', accepted:true },
        { id:'a8', expertId:'e7', text:'Also worth checking: yarn tension variation. If your creel has a bad tensioner every 12th position, it creates the same visual defect. Run individual tension readings across all yarn feeds.', upvotes:9, time:'2d ago', accepted:false }
      ]
    },
    {
      id:'prob5', authorId:'u4', domain:'Sustainability',
      title:'How to achieve GOTS certification for existing cotton processing unit?',
      description:'We are a medium-scale cotton processing unit in Tirupur (spinning + knitting + dyeing). Currently using conventional chemicals. Want to transition to GOTS certified organic production. What are the key steps, estimated timeline, and costs? We process about 500 MT/month.',
      urgency:'Low', status:'open', posted:'5d ago',
      tags:['GOTS Certification','Organic Cotton','Sustainability'],
      upvotes:42, views:521, answerCount:1,
      answers:[
        { id:'a9', expertId:'e4', text:'For a 500 MT/month unit, here is a realistic roadmap:\n\n1. Gap Analysis (Month 1-2): Hire a GOTS consultant (₹2-3 lakh). They audit your entire supply chain.\n\n2. Chemical Substitution (Month 2-4): Replace all inputs with GOTS-approved chemicals. Budget ₹15-20 lakh for initial stock. Use the GOTS positive list.\n\n3. Infrastructure Changes (Month 3-5): Separate organic lines, install traceability systems, effluent treatment upgrades. Budget ₹30-50 lakh.\n\n4. Training (Month 4-5): All workers need training on organic handling protocols.\n\n5. Certification Audit (Month 6): Apply to Control Union or Ecocert. Audit fee: ₹3-5 lakh.\n\nTotal timeline: 6-8 months. Total investment: ₹50-80 lakh. ROI: Organic premiums are 15-25% higher.', upvotes:38, time:'4d ago', accepted:true }
      ]
    },
    {
      id:'prob6', authorId:'u3', domain:'Quality Control',
      title:'Pilling grade below 3 on polyester-cotton blend bed sheets',
      description:'Our 60:40 PC blend bed sheets (Martindale method) are consistently getting 2-2.5 pilling grade after 5000 cycles. Customer requirement is minimum 3.5. Fabric: 300 TC sateen weave, yarn: 40s PC. Finishing includes singeing + enzyme bio-polish. What can we improve?',
      urgency:'High', status:'open', posted:'2d ago',
      tags:['Pilling','PC Blend','Quality Testing'],
      upvotes:15, views:198, answerCount:0,
      answers:[]
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
  return user ? user.avatarColor : '#185FA5';
}

function getUserById(userId) {
  return TC_DATA.users.find(u => u.id === userId) || null;
}

// avatarHTML is defined in app.js with blue token system

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
