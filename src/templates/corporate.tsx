import type { CardData, TemplateDefinition } from '../types';

const EN = "'Inter', sans-serif";
const JA = "'Noto Sans JP', sans-serif";

// ============================================================
// 1. EXECUTIVE (役) — Pentagram inspired
// Classic navy and gold palette, refined executive presence
// ============================================================
const executiveTemplate: TemplateDefinition = {
  id: 'corporate-executive',
  name: 'EXECUTIVE',
  nameJa: '役',
  category: 'corporate',
  designer: 'Pentagram',
  description: '格式と威厳。紺とゴールドが織りなす経営者の名刺。',
  accentColor: '#1a2744',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="corp-exec-paper"><feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="corp-exec-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.35" result="blur"/><feOffset dx="0.12" dy="0.18" result="shifted"/><feFlood floodColor="#000" floodOpacity="0.12" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <linearGradient id="corp-exec-gold" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#C5A55A" stopOpacity="0"/><stop offset="15%" stopColor="#C5A55A" stopOpacity="1"/><stop offset="85%" stopColor="#C5A55A" stopOpacity="1"/><stop offset="100%" stopColor="#C5A55A" stopOpacity="0"/></linearGradient>
        <linearGradient id="corp-exec-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e2d4e"/><stop offset="100%" stopColor="#141e36"/></linearGradient>
        <radialGradient id="corp-exec-glow" cx="50%" cy="30%" r="60%"><stop offset="0%" stopColor="#253a5e"/><stop offset="100%" stopColor="#141e36"/></radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#corp-exec-bg)" filter="url(#corp-exec-paper)" />
      <rect width="91" height="55" fill="url(#corp-exec-glow)" opacity="0.4" />
      <rect x="0" y="0" width="91" height="0.8" fill="#C5A55A" opacity="0.25" />
      <rect x="0" y="54.2" width="91" height="0.8" fill="#C5A55A" opacity="0.15" />
      <line x1="7" y1="7" x2="7" y2="12" stroke="#C5A55A" strokeWidth="0.15" opacity="0.35" />
      <line x1="7" y1="7" x2="12" y2="7" stroke="#C5A55A" strokeWidth="0.15" opacity="0.35" />
      <circle cx="84" cy="48" r="0.3" fill="#C5A55A" opacity="0.25" />
      <text x="45.5" y="19" textAnchor="middle" fontFamily={JA} fontWeight="500" fontSize="6.5" letterSpacing="2" fill="#ffffff" filter="url(#corp-exec-shadow)">{data.nameJa}</text>
      <text x="45.5" y="25" textAnchor="middle" fontFamily={EN} fontWeight="300" fontSize="2" letterSpacing="1.2" fill="#C5A55A">{data.nameEn.toUpperCase()}</text>
      <line x1="20" y1="29" x2="71" y2="29" stroke="url(#corp-exec-gold)" strokeWidth="0.2" />
      <text x="45.5" y="34" textAnchor="middle" fontFamily={JA} fontWeight="300" fontSize="2" letterSpacing="0.5" fill="#8a9bbd">{data.titleJa}</text>
      <text x="45.5" y="38" textAnchor="middle" fontFamily={EN} fontWeight="300" fontSize="1.5" letterSpacing="0.3" fill="#6b7c9e">{data.titleEn}</text>
      <text x="45.5" y="46" textAnchor="middle" fontFamily={JA} fontWeight="400" fontSize="2.2" letterSpacing="0.8" fill="#C5A55A">{data.companyJa}</text>
      <text x="45.5" y="50" textAnchor="middle" fontFamily={EN} fontWeight="300" fontSize="1.3" letterSpacing="0.6" fill="#6b7c9e">{data.companyEn.toUpperCase()}</text>
      {data.logo && <image href={data.logo} x="4" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="corp-exec-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <linearGradient id="corp-exec-bg-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#141e36"/><stop offset="100%" stopColor="#1e2d4e"/></linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#corp-exec-bg-b)" filter="url(#corp-exec-paper-b)" />
      <rect x="0" y="0" width="91" height="0.6" fill="#C5A55A" opacity="0.3" />
      <line x1="79" y1="43" x2="84" y2="43" stroke="#C5A55A" strokeWidth="0.15" opacity="0.35" />
      <line x1="84" y1="43" x2="84" y2="48" stroke="#C5A55A" strokeWidth="0.15" opacity="0.35" />
      <circle cx="7" cy="7" r="0.3" fill="#C5A55A" opacity="0.25" />
      <rect x="40" y="3.5" width="11" height="0.12" fill="#C5A55A" opacity="0.2" />
      <text x="45.5" y="11" textAnchor="middle" fontFamily={JA} fontWeight="400" fontSize="2.5" letterSpacing="1" fill="#C5A55A">{data.companyJa}</text>
      <text x="45.5" y="15" textAnchor="middle" fontFamily={EN} fontWeight="300" fontSize="1.3" letterSpacing="0.6" fill="#6b7c9e">{data.companyEn.toUpperCase()}</text>
      <text x="45.5" y="18.5" textAnchor="middle" fontFamily={JA} fontWeight="300" fontSize="1.4" fill="#5a6b8e">{data.titleJa}</text>
      <line x1="15" y1="21" x2="76" y2="21" stroke="#C5A55A" strokeWidth="0.12" opacity="0.4" />
      <text x="45.5" y="26" textAnchor="middle" fontFamily={EN} fontWeight="300" fontSize="1.5" fill="#8a9bbd">TEL {data.tel}</text>
      <text x="45.5" y="30" textAnchor="middle" fontFamily={EN} fontWeight="300" fontSize="1.5" fill="#8a9bbd">{data.email}</text>
      <text x="45.5" y="34" textAnchor="middle" fontFamily={EN} fontWeight="300" fontSize="1.5" fill="#8a9bbd">{data.website}</text>
      <line x1="15" y1="37" x2="76" y2="37" stroke="#C5A55A" strokeWidth="0.12" opacity="0.4" />
      <text x="45.5" y="42" textAnchor="middle" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#6b7c9e">〒{data.zipCode}</text>
      <text x="45.5" y="46" textAnchor="middle" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#6b7c9e">{data.addressJa}</text>
      <text x="45.5" y="50" textAnchor="middle" fontFamily={EN} fontWeight="300" fontSize="1.1" fill="#4e5f81">{data.addressEn}</text>
      {data.logo && <image href={data.logo} x="41" y="52" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.35" />}
    </g>
  ),
};

// ============================================================
// 2. CONSUL (顧) — McKinsey style
// Clean gray tones, company name prominent, understated elegance
// ============================================================
const consulTemplate: TemplateDefinition = {
  id: 'corporate-consul',
  name: 'CONSUL',
  nameJa: '顧',
  category: 'corporate',
  designer: 'McKinsey',
  description: '控えめな気品。グレートーンが語るコンサルタントの矜持。',
  accentColor: '#4a4a4a',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="corp-consul-paper"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="corp-consul-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.2" result="blur"/><feOffset dx="0.06" dy="0.1" result="shifted"/><feFlood floodColor="#000" floodOpacity="0.06" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <linearGradient id="corp-consul-line" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#cccccc" stopOpacity="0"/><stop offset="20%" stopColor="#cccccc"/><stop offset="80%" stopColor="#cccccc"/><stop offset="100%" stopColor="#cccccc" stopOpacity="0"/></linearGradient>
      </defs>
      <rect width="91" height="55" fill="#ffffff" filter="url(#corp-consul-paper)" />
      <rect x="0" y="0" width="91" height="0.4" fill="#4a4a4a" />
      <rect x="0" y="0.4" width="91" height="0.12" fill="#888888" opacity="0.3" />
      <circle cx="83" cy="48" r="0.25" fill="#4a4a4a" opacity="0.15" />
      <rect x="8" y="19.5" width="22" height="0.08" fill="#cccccc" />
      <text x="8" y="12" fontFamily={EN} fontWeight="600" fontSize="2.8" letterSpacing="0.8" fill="#2a2a2a" filter="url(#corp-consul-shadow)">{data.companyEn.toUpperCase()}</text>
      <text x="8" y="16" fontFamily={JA} fontWeight="400" fontSize="1.6" letterSpacing="0.3" fill="#888888">{data.companyJa}</text>
      <text x="8" y="30" fontFamily={JA} fontWeight="500" fontSize="5.5" letterSpacing="0.5" fill="#2a2a2a" filter="url(#corp-consul-shadow)">{data.nameJa}</text>
      <text x="8" y="35" fontFamily={EN} fontWeight="300" fontSize="1.8" letterSpacing="0.3" fill="#777777">{data.nameEn}</text>
      <text x="8" y="42" fontFamily={JA} fontWeight="300" fontSize="1.8" fill="#999999">{data.titleJa}</text>
      <text x="8" y="46" fontFamily={EN} fontWeight="300" fontSize="1.3" letterSpacing="0.2" fill="#aaaaaa">{data.titleEn}</text>
      <rect x="8" y="49" width="6" height="0.12" fill="#4a4a4a" opacity="0.25" />
      {data.logo && <image href={data.logo} x="76" y="40" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="corp-consul-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
      </defs>
      <rect width="91" height="55" fill="#ffffff" filter="url(#corp-consul-paper-b)" />
      <rect x="0" y="0" width="91" height="0.4" fill="#4a4a4a" />
      <rect x="0" y="0.4" width="91" height="0.12" fill="#888888" opacity="0.3" />
      <circle cx="8" cy="48" r="0.25" fill="#4a4a4a" opacity="0.15" />
      <rect x="76" y="5" width="0.08" height="8" fill="#cccccc" />
      <text x="8" y="12" fontFamily={EN} fontWeight="600" fontSize="2.5" letterSpacing="0.6" fill="#2a2a2a">{data.companyEn.toUpperCase()}</text>
      <text x="8" y="16" fontFamily={JA} fontWeight="400" fontSize="1.5" fill="#888888">{data.companyJa}</text>
      <text x="8" y="19.5" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#aaaaaa">{data.titleJa}</text>
      <line x1="8" y1="22" x2="83" y2="22" stroke="#e0e0e0" strokeWidth="0.15" />
      <text x="8" y="27" fontFamily={EN} fontWeight="400" fontSize="1.2" fill="#555555">T</text>
      <text x="13" y="27" fontFamily={EN} fontWeight="300" fontSize="1.4" fill="#666666">{data.tel}</text>
      <text x="8" y="31" fontFamily={EN} fontWeight="400" fontSize="1.2" fill="#555555">E</text>
      <text x="13" y="31" fontFamily={EN} fontWeight="300" fontSize="1.4" fill="#666666">{data.email}</text>
      <text x="8" y="35" fontFamily={EN} fontWeight="400" fontSize="1.2" fill="#555555">W</text>
      <text x="13" y="35" fontFamily={EN} fontWeight="300" fontSize="1.4" fill="#666666">{data.website}</text>
      <line x1="8" y1="38" x2="83" y2="38" stroke="#e0e0e0" strokeWidth="0.15" />
      <text x="8" y="43" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#888888">〒{data.zipCode}</text>
      <text x="8" y="46.5" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#888888">{data.addressJa}</text>
      <text x="8" y="50" fontFamily={EN} fontWeight="300" fontSize="1.1" fill="#aaaaaa">{data.addressEn}</text>
      {data.logo && <image href={data.logo} x="76" y="40" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.45" />}
    </g>
  ),
};

// ============================================================
// 3. LEGAL (法) — Traditional law firm
// Dark green accent, serif-like weight, authoritative
// ============================================================
const legalTemplate: TemplateDefinition = {
  id: 'corporate-legal',
  name: 'LEGAL',
  nameJa: '法',
  category: 'corporate',
  designer: 'Cravath',
  description: '法の重みを纏う。深緑とセリフが醸す信頼と権威。',
  accentColor: '#1B3D2F',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="corp-legal-paper"><feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="5" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="corp-legal-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.3" result="blur"/><feOffset dx="0.1" dy="0.15" result="shifted"/><feFlood floodColor="#0a1f15" floodOpacity="0.1" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <linearGradient id="corp-legal-bar" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e4a38"/><stop offset="100%" stopColor="#14312a"/></linearGradient>
        <linearGradient id="corp-legal-gold" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#8B7D3C" stopOpacity="0.3"/><stop offset="50%" stopColor="#8B7D3C"/><stop offset="100%" stopColor="#8B7D3C" stopOpacity="0.3"/></linearGradient>
      </defs>
      <rect width="91" height="55" fill="#FAFAF7" filter="url(#corp-legal-paper)" />
      <rect x="0" y="0" width="91" height="2" fill="url(#corp-legal-bar)" />
      <rect x="0" y="2" width="91" height="0.3" fill="url(#corp-legal-gold)" />
      <circle cx="7" cy="52" r="0.3" fill="#1B3D2F" opacity="0.15" />
      <rect x="84" y="7" width="0.12" height="5" fill="#1B3D2F" opacity="0.12" />
      <text x="45.5" y="14" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="600" fontSize="2.8" letterSpacing="0.8" fill="#1B3D2F" filter="url(#corp-legal-shadow)">{data.companyEn.toUpperCase()}</text>
      <text x="45.5" y="18" textAnchor="middle" fontFamily={JA} fontWeight="400" fontSize="1.6" letterSpacing="0.5" fill="#5a6e63">{data.companyJa}</text>
      <line x1="25" y1="21" x2="66" y2="21" stroke="#1B3D2F" strokeWidth="0.12" opacity="0.3" />
      <text x="45.5" y="30" textAnchor="middle" fontFamily={JA} fontWeight="500" fontSize="5.5" letterSpacing="1" fill="#1B3D2F" filter="url(#corp-legal-shadow)">{data.nameJa}</text>
      <text x="45.5" y="35" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="2" letterSpacing="0.6" fill="#5a6e63">{data.nameEn}</text>
      <line x1="25" y1="38.5" x2="66" y2="38.5" stroke="#1B3D2F" strokeWidth="0.12" opacity="0.3" />
      <text x="45.5" y="43" textAnchor="middle" fontFamily={JA} fontWeight="300" fontSize="1.8" letterSpacing="0.3" fill="#5a6e63">{data.titleJa}</text>
      <text x="45.5" y="47" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.4" letterSpacing="0.3" fill="#8a9b8f">{data.titleEn}</text>
      {data.logo && <image href={data.logo} x="4" y="4" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.45" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="corp-legal-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="5" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <linearGradient id="corp-legal-bar-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e4a38"/><stop offset="100%" stopColor="#14312a"/></linearGradient>
      </defs>
      <rect width="91" height="55" fill="#FAFAF7" filter="url(#corp-legal-paper-b)" />
      <rect x="0" y="0" width="91" height="2" fill="url(#corp-legal-bar-b)" />
      <rect x="0" y="2" width="91" height="0.3" fill="#8B7D3C" opacity="0.5" />
      <circle cx="84" cy="52" r="0.3" fill="#1B3D2F" opacity="0.15" />
      <rect x="7" y="48" width="0.12" height="5" fill="#1B3D2F" opacity="0.12" />
      <text x="45.5" y="12" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="600" fontSize="2.5" letterSpacing="0.6" fill="#1B3D2F">{data.companyEn.toUpperCase()}</text>
      <text x="45.5" y="16" textAnchor="middle" fontFamily={JA} fontWeight="400" fontSize="1.5" letterSpacing="0.4" fill="#5a6e63">{data.companyJa}</text>
      <text x="45.5" y="19.5" textAnchor="middle" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#7a8b7e">{data.titleJa}</text>
      <line x1="15" y1="22" x2="76" y2="22" stroke="#1B3D2F" strokeWidth="0.1" opacity="0.25" />
      <text x="17" y="27" fontFamily="'Cormorant Garamond', serif" fontWeight="500" fontSize="1.3" fill="#1B3D2F">Tel.</text>
      <text x="26" y="27" fontFamily={EN} fontWeight="300" fontSize="1.4" fill="#5a6e63">{data.tel}</text>
      <text x="17" y="31" fontFamily="'Cormorant Garamond', serif" fontWeight="500" fontSize="1.3" fill="#1B3D2F">Email</text>
      <text x="26" y="31" fontFamily={EN} fontWeight="300" fontSize="1.4" fill="#5a6e63">{data.email}</text>
      <text x="17" y="35" fontFamily="'Cormorant Garamond', serif" fontWeight="500" fontSize="1.3" fill="#1B3D2F">Web</text>
      <text x="26" y="35" fontFamily={EN} fontWeight="300" fontSize="1.4" fill="#5a6e63">{data.website}</text>
      <line x1="15" y1="38" x2="76" y2="38" stroke="#1B3D2F" strokeWidth="0.1" opacity="0.25" />
      <text x="45.5" y="42.5" textAnchor="middle" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#5a6e63">〒{data.zipCode}</text>
      <text x="45.5" y="46" textAnchor="middle" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#5a6e63">{data.addressJa}</text>
      <text x="45.5" y="49.5" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.1" fill="#8a9b8f">{data.addressEn}</text>
      {data.logo && <image href={data.logo} x="41" y="52" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.35" />}
    </g>
  ),
};

// ============================================================
// 4. FINANCE (財) — Banking style
// Dark blue, thin gold line accents, institutional gravitas
// ============================================================
const financeTemplate: TemplateDefinition = {
  id: 'corporate-finance',
  name: 'FINANCE',
  nameJa: '財',
  category: 'corporate',
  designer: 'Goldman Sachs',
  description: '金融の威信。ダークブルーとゴールドラインが示す堅実さ。',
  accentColor: '#0C2340',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="corp-fin-paper"><feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="corp-fin-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.3" result="blur"/><feOffset dx="0.1" dy="0.15" result="shifted"/><feFlood floodColor="#000" floodOpacity="0.1" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <linearGradient id="corp-fin-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#0e2a4a"/><stop offset="100%" stopColor="#081a30"/></linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#corp-fin-bg)" filter="url(#corp-fin-paper)" />
      <line x1="7" y1="7" x2="84" y2="7" stroke="#B8953E" strokeWidth="0.15" />
      <line x1="7" y1="7" x2="7" y2="48" stroke="#B8953E" strokeWidth="0.15" />
      <line x1="84" y1="7" x2="84" y2="48" stroke="#B8953E" strokeWidth="0.15" />
      <line x1="7" y1="48" x2="84" y2="48" stroke="#B8953E" strokeWidth="0.15" />
      <circle cx="7" cy="7" r="0.4" fill="#B8953E" opacity="0.3" />
      <circle cx="84" cy="48" r="0.4" fill="#B8953E" opacity="0.3" />
      <text x="45.5" y="16" textAnchor="middle" fontFamily={JA} fontWeight="400" fontSize="2.2" letterSpacing="1.5" fill="#B8953E">{data.companyJa}</text>
      <text x="45.5" y="19.5" textAnchor="middle" fontFamily={EN} fontWeight="300" fontSize="1.2" letterSpacing="0.8" fill="#5a7099">{data.companyEn.toUpperCase()}</text>
      <line x1="30" y1="23" x2="61" y2="23" stroke="#B8953E" strokeWidth="0.1" />
      <text x="45.5" y="31" textAnchor="middle" fontFamily={JA} fontWeight="500" fontSize="5.5" letterSpacing="1.5" fill="#ffffff" filter="url(#corp-fin-shadow)">{data.nameJa}</text>
      <text x="45.5" y="36" textAnchor="middle" fontFamily={EN} fontWeight="300" fontSize="1.8" letterSpacing="0.5" fill="#B8953E">{data.nameEn.toUpperCase()}</text>
      <line x1="30" y1="39" x2="61" y2="39" stroke="#B8953E" strokeWidth="0.1" />
      <text x="45.5" y="43.5" textAnchor="middle" fontFamily={JA} fontWeight="300" fontSize="1.6" letterSpacing="0.3" fill="#7a8fb0">{data.titleJa}</text>
      {data.logo && <image href={data.logo} x="76" y="38" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.45" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="corp-fin-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <linearGradient id="corp-fin-bg-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#081a30"/><stop offset="100%" stopColor="#0e2a4a"/></linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#corp-fin-bg-b)" filter="url(#corp-fin-paper-b)" />
      <line x1="7" y1="7" x2="84" y2="7" stroke="#B8953E" strokeWidth="0.15" />
      <line x1="7" y1="48" x2="84" y2="48" stroke="#B8953E" strokeWidth="0.15" />
      <circle cx="84" cy="7" r="0.4" fill="#B8953E" opacity="0.3" />
      <circle cx="7" cy="48" r="0.4" fill="#B8953E" opacity="0.3" />
      <rect x="43" y="3" width="5" height="0.12" fill="#B8953E" opacity="0.2" />
      <text x="45.5" y="14" textAnchor="middle" fontFamily={EN} fontWeight="400" fontSize="2" letterSpacing="1" fill="#B8953E">{data.companyEn.toUpperCase()}</text>
      <text x="45.5" y="17.5" textAnchor="middle" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#5a7099">{data.companyJa}</text>
      <line x1="20" y1="20" x2="71" y2="20" stroke="#B8953E" strokeWidth="0.08" opacity="0.5" />
      <text x="15" y="25.5" fontFamily={EN} fontWeight="400" fontSize="1.2" letterSpacing="0.3" fill="#B8953E">TEL</text>
      <text x="25" y="25.5" fontFamily={EN} fontWeight="300" fontSize="1.4" fill="#8a9bbd">{data.tel}</text>
      <text x="15" y="29.5" fontFamily={EN} fontWeight="400" fontSize="1.2" letterSpacing="0.3" fill="#B8953E">EMAIL</text>
      <text x="25" y="29.5" fontFamily={EN} fontWeight="300" fontSize="1.4" fill="#8a9bbd">{data.email}</text>
      <text x="15" y="33.5" fontFamily={EN} fontWeight="400" fontSize="1.2" letterSpacing="0.3" fill="#B8953E">WEB</text>
      <text x="25" y="33.5" fontFamily={EN} fontWeight="300" fontSize="1.4" fill="#8a9bbd">{data.website}</text>
      <line x1="15" y1="36.5" x2="76" y2="36.5" stroke="#B8953E" strokeWidth="0.08" opacity="0.5" />
      <text x="45.5" y="40.5" textAnchor="middle" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#7a8fb0">〒{data.zipCode}</text>
      <text x="45.5" y="44" textAnchor="middle" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#7a8fb0">{data.addressJa}</text>
      <text x="45.5" y="47.5" textAnchor="middle" fontFamily={EN} fontWeight="300" fontSize="1.1" fill="#5a7099">{data.addressEn}</text>
      {data.logo && <image href={data.logo} x="41" y="49" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.35" />}
    </g>
  ),
};

// ============================================================
// 5. ARCHITECT (建) — Architecture firm
// Thin lines, structural layout, light gray palette
// ============================================================
const architectTemplate: TemplateDefinition = {
  id: 'corporate-architect',
  name: 'ARCHITECT',
  nameJa: '建',
  category: 'corporate',
  designer: 'Tadao Ando',
  description: '建築的構造美。細い線と余白が描く空間のグリッド。',
  accentColor: '#555555',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="corp-arch-paper"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="corp-arch-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.2" result="blur"/><feOffset dx="0.06" dy="0.1" result="shifted"/><feFlood floodColor="#000" floodOpacity="0.05" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <rect width="91" height="55" fill="#f8f8f8" filter="url(#corp-arch-paper)" />
      <line x1="8" y1="8" x2="8" y2="47" stroke="#cccccc" strokeWidth="0.08" />
      <line x1="30" y1="8" x2="30" y2="47" stroke="#cccccc" strokeWidth="0.08" />
      <line x1="8" y1="8" x2="83" y2="8" stroke="#cccccc" strokeWidth="0.08" />
      <line x1="8" y1="24" x2="83" y2="24" stroke="#cccccc" strokeWidth="0.08" />
      <line x1="8" y1="47" x2="83" y2="47" stroke="#cccccc" strokeWidth="0.08" />
      <circle cx="8" cy="8" r="0.3" fill="#555555" opacity="0.2" />
      <circle cx="30" cy="24" r="0.3" fill="#555555" opacity="0.15" />
      <circle cx="83" cy="47" r="0.3" fill="#555555" opacity="0.1" />
      <text x="32" y="13" fontFamily={EN} fontWeight="300" fontSize="1.2" letterSpacing="0.5" fill="#999999">{data.companyEn.toUpperCase()}</text>
      <text x="32" y="16.5" fontFamily={JA} fontWeight="300" fontSize="1.4" fill="#888888">{data.companyJa}</text>
      <text x="32" y="20.5" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#aaaaaa">{data.titleJa}</text>
      <text x="10" y="34" fontFamily={JA} fontWeight="500" fontSize="6" letterSpacing="0.5" fill="#333333" filter="url(#corp-arch-shadow)">{data.nameJa}</text>
      <text x="10" y="39.5" fontFamily={EN} fontWeight="300" fontSize="2" letterSpacing="0.3" fill="#888888">{data.nameEn}</text>
      <rect x="8" y="43" width="4" height="0.15" fill="#333333" />
      <rect x="14" y="43" width="2" height="0.15" fill="#333333" opacity="0.4" />
      {data.logo && <image href={data.logo} x="76" y="10" width="6" height="6" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="corp-arch-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
      </defs>
      <rect width="91" height="55" fill="#f8f8f8" filter="url(#corp-arch-paper-b)" />
      <line x1="8" y1="8" x2="8" y2="47" stroke="#cccccc" strokeWidth="0.08" />
      <line x1="30" y1="8" x2="30" y2="47" stroke="#cccccc" strokeWidth="0.08" />
      <line x1="8" y1="8" x2="83" y2="8" stroke="#cccccc" strokeWidth="0.08" />
      <line x1="8" y1="20" x2="83" y2="20" stroke="#cccccc" strokeWidth="0.08" />
      <line x1="8" y1="47" x2="83" y2="47" stroke="#cccccc" strokeWidth="0.08" />
      <circle cx="83" cy="8" r="0.3" fill="#555555" opacity="0.2" />
      <circle cx="30" cy="20" r="0.3" fill="#555555" opacity="0.15" />
      <text x="32" y="13" fontFamily={EN} fontWeight="400" fontSize="2" letterSpacing="0.6" fill="#333333">{data.companyEn.toUpperCase()}</text>
      <text x="32" y="17" fontFamily={JA} fontWeight="300" fontSize="1.4" fill="#888888">{data.companyJa}</text>
      <text x="10" y="25" fontFamily={EN} fontWeight="300" fontSize="1" letterSpacing="0.3" fill="#aaaaaa">TEL</text>
      <text x="32" y="25" fontFamily={EN} fontWeight="300" fontSize="1.4" fill="#666666">{data.tel}</text>
      <text x="10" y="29" fontFamily={EN} fontWeight="300" fontSize="1" letterSpacing="0.3" fill="#aaaaaa">EMAIL</text>
      <text x="32" y="29" fontFamily={EN} fontWeight="300" fontSize="1.4" fill="#666666">{data.email}</text>
      <text x="10" y="33" fontFamily={EN} fontWeight="300" fontSize="1" letterSpacing="0.3" fill="#aaaaaa">WEB</text>
      <text x="32" y="33" fontFamily={EN} fontWeight="300" fontSize="1.4" fill="#666666">{data.website}</text>
      <line x1="8" y1="36.5" x2="83" y2="36.5" stroke="#cccccc" strokeWidth="0.08" />
      <text x="10" y="40.5" fontFamily={EN} fontWeight="300" fontSize="1" letterSpacing="0.3" fill="#aaaaaa">ADDRESS</text>
      <text x="32" y="40.5" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#666666">〒{data.zipCode} {data.addressJa}</text>
      <text x="32" y="44" fontFamily={EN} fontWeight="300" fontSize="1.1" fill="#999999">{data.addressEn}</text>
      {data.logo && <image href={data.logo} x="76" y="38" width="6" height="6" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
    </g>
  ),
};

// ============================================================
// 6. AGENCY (社) — Creative agency
// Bold single accent color left border, modern layout
// ============================================================
const agencyTemplate: TemplateDefinition = {
  id: 'corporate-agency',
  name: 'AGENCY',
  nameJa: '社',
  category: 'corporate',
  designer: 'Wieden+Kennedy',
  description: '大胆な左縁が主張する。クリエイティブエージェンシーの気概。',
  accentColor: '#E63946',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="corp-agency-paper"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="corp-agency-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.25" result="blur"/><feOffset dx="0.08" dy="0.12" result="shifted"/><feFlood floodColor="#000" floodOpacity="0.07" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <linearGradient id="corp-agency-bar" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#E63946"/><stop offset="100%" stopColor="#c42f3c"/></linearGradient>
      </defs>
      <rect width="91" height="55" fill="#ffffff" filter="url(#corp-agency-paper)" />
      <rect x="0" y="0" width="3" height="55" fill="url(#corp-agency-bar)" />
      <rect x="3" y="0" width="0.15" height="55" fill="#E63946" opacity="0.15" />
      <circle cx="86" cy="6" r="0.35" fill="#E63946" opacity="0.15" />
      <circle cx="86" cy="9" r="0.2" fill="#E63946" opacity="0.1" />
      <text x="10" y="13" fontFamily={EN} fontWeight="700" fontSize="2.5" letterSpacing="0.5" fill="#E63946">{data.companyEn.toUpperCase()}</text>
      <text x="10" y="17" fontFamily={JA} fontWeight="300" fontSize="1.5" fill="#999999">{data.companyJa}</text>
      <text x="10" y="28" fontFamily={JA} fontWeight="600" fontSize="6" letterSpacing="0.3" fill="#1a1a1a" filter="url(#corp-agency-shadow)">{data.nameJa}</text>
      <text x="10" y="33.5" fontFamily={EN} fontWeight="400" fontSize="2" letterSpacing="0.2" fill="#555555">{data.nameEn}</text>
      <text x="10" y="40" fontFamily={JA} fontWeight="300" fontSize="1.8" fill="#888888">{data.titleJa}</text>
      <text x="10" y="44" fontFamily={EN} fontWeight="300" fontSize="1.3" letterSpacing="0.15" fill="#aaaaaa">{data.titleEn}</text>
      <rect x="10" y="48" width="8" height="0.4" fill="#E63946" rx="0.2" />
      <rect x="20" y="48" width="3" height="0.4" fill="#E63946" rx="0.2" opacity="0.3" />
      {data.logo && <image href={data.logo} x="78" y="40" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="corp-agency-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <linearGradient id="corp-agency-bar-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#c42f3c"/><stop offset="100%" stopColor="#E63946"/></linearGradient>
      </defs>
      <rect width="91" height="55" fill="#ffffff" filter="url(#corp-agency-paper-b)" />
      <rect x="0" y="0" width="3" height="55" fill="url(#corp-agency-bar-b)" />
      <rect x="3" y="0" width="0.15" height="55" fill="#E63946" opacity="0.15" />
      <circle cx="86" cy="49" r="0.35" fill="#E63946" opacity="0.15" />
      <text x="10" y="12" fontFamily={EN} fontWeight="700" fontSize="2.2" letterSpacing="0.4" fill="#E63946">{data.companyEn.toUpperCase()}</text>
      <text x="10" y="16" fontFamily={JA} fontWeight="300" fontSize="1.4" fill="#999999">{data.companyJa}</text>
      <text x="10" y="19.5" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#aaaaaa">{data.titleJa}</text>
      <line x1="10" y1="22" x2="83" y2="22" stroke="#eeeeee" strokeWidth="0.15" />
      <text x="10" y="27" fontFamily={EN} fontWeight="500" fontSize="1.5" fill="#1a1a1a">{data.tel}</text>
      <text x="10" y="31" fontFamily={EN} fontWeight="500" fontSize="1.5" fill="#1a1a1a">{data.email}</text>
      <text x="10" y="35" fontFamily={EN} fontWeight="500" fontSize="1.5" fill="#1a1a1a">{data.website}</text>
      <line x1="10" y1="38" x2="83" y2="38" stroke="#eeeeee" strokeWidth="0.15" />
      <text x="10" y="42.5" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#888888">〒{data.zipCode}</text>
      <text x="10" y="46" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#888888">{data.addressJa}</text>
      <text x="10" y="49.5" fontFamily={EN} fontWeight="300" fontSize="1.1" fill="#aaaaaa">{data.addressEn}</text>
      {data.logo && <image href={data.logo} x="78" y="6" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.45" />}
    </g>
  ),
};

// ============================================================
// 7. STARTUP (創) — Modern startup
// Gradient accent, Space Grotesk font, fresh feel
// ============================================================
const startupTemplate: TemplateDefinition = {
  id: 'corporate-startup',
  name: 'STARTUP',
  nameJa: '創',
  category: 'corporate',
  designer: 'Y Combinator',
  description: '未来を創る。グラデーションと現代書体が放つ新鮮さ。',
  accentColor: '#6C5CE7',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="corp-start-paper"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="corp-start-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.25" result="blur"/><feOffset dx="0.08" dy="0.12" result="shifted"/><feFlood floodColor="#6C5CE7" floodOpacity="0.08" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <linearGradient id="corp-start-grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#6C5CE7"/><stop offset="100%" stopColor="#00B4D8"/></linearGradient>
        <linearGradient id="corp-start-bar" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#6C5CE7"/><stop offset="100%" stopColor="#00B4D8"/></linearGradient>
        <radialGradient id="corp-start-orb" cx="80%" cy="20%" r="30%"><stop offset="0%" stopColor="#6C5CE7" stopOpacity="0.08"/><stop offset="100%" stopColor="#6C5CE7" stopOpacity="0"/></radialGradient>
      </defs>
      <rect width="91" height="55" fill="#ffffff" filter="url(#corp-start-paper)" />
      <rect x="0" y="0" width="91" height="0.6" fill="url(#corp-start-grad)" />
      <rect width="91" height="55" fill="url(#corp-start-orb)" />
      <circle cx="80" cy="12" r="3.5" fill="url(#corp-start-grad)" opacity="0.08" />
      <circle cx="76" cy="16" r="2" fill="url(#corp-start-grad)" opacity="0.05" />
      <circle cx="84" cy="8" r="1.2" fill="url(#corp-start-grad)" opacity="0.06" />
      <text x="8" y="14" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="3" letterSpacing="0.3" fill="url(#corp-start-grad)">{data.companyEn}</text>
      <text x="8" y="18" fontFamily={JA} fontWeight="300" fontSize="1.4" fill="#999999">{data.companyJa}</text>
      <text x="8" y="29" fontFamily={JA} fontWeight="600" fontSize="5.5" letterSpacing="0.3" fill="#2d2d2d" filter="url(#corp-start-shadow)">{data.nameJa}</text>
      <text x="8" y="34" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.2" fill="#777777">{data.nameEn}</text>
      <text x="8" y="40" fontFamily={JA} fontWeight="300" fontSize="1.7" fill="#999999">{data.titleJa}</text>
      <text x="8" y="44" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.3" fill="#bbbbbb">{data.titleEn}</text>
      <rect x="8" y="48" width="12" height="0.5" fill="url(#corp-start-grad)" rx="0.25" />
      <rect x="22" y="48" width="4" height="0.5" fill="url(#corp-start-grad)" rx="0.25" opacity="0.3" />
      {data.logo && <image href={data.logo} x="76" y="40" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="corp-start-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <linearGradient id="corp-start-grad-b" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#6C5CE7"/><stop offset="100%" stopColor="#00B4D8"/></linearGradient>
      </defs>
      <rect width="91" height="55" fill="#ffffff" filter="url(#corp-start-paper-b)" />
      <rect x="0" y="54.4" width="91" height="0.6" fill="url(#corp-start-grad-b)" />
      <circle cx="83" cy="7" r="2" fill="url(#corp-start-grad-b)" opacity="0.06" />
      <circle cx="79" cy="10" r="1" fill="url(#corp-start-grad-b)" opacity="0.04" />
      <text x="8" y="12" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="2.5" letterSpacing="0.2" fill="url(#corp-start-grad-b)">{data.companyEn}</text>
      <text x="8" y="16" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#999999">{data.companyJa}</text>
      <text x="8" y="19.5" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#aaaaaa">{data.titleJa}</text>
      <line x1="8" y1="22" x2="40" y2="22" stroke="#6C5CE7" strokeWidth="0.1" opacity="0.3" />
      <text x="8" y="27" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#555555">{data.tel}</text>
      <text x="8" y="31" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#555555">{data.email}</text>
      <text x="8" y="35" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#555555">{data.website}</text>
      <line x1="8" y1="38" x2="40" y2="38" stroke="#6C5CE7" strokeWidth="0.1" opacity="0.3" />
      <text x="8" y="42.5" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#888888">〒{data.zipCode}</text>
      <text x="8" y="46" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#888888">{data.addressJa}</text>
      <text x="8" y="49.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.1" fill="#aaaaaa">{data.addressEn}</text>
      {data.logo && <image href={data.logo} x="76" y="40" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.45" />}
    </g>
  ),
};

// ============================================================
// 8. MEDICAL (医) — Medical professional
// Clean white, light blue accent, clinical precision
// ============================================================
const medicalTemplate: TemplateDefinition = {
  id: 'corporate-medical',
  name: 'MEDICAL',
  nameJa: '医',
  category: 'corporate',
  designer: 'Mayo Clinic',
  description: '清潔と信頼。ライトブルーが映す医療の精確さ。',
  accentColor: '#4A90D9',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="corp-med-paper"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="corp-med-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.2" result="blur"/><feOffset dx="0.06" dy="0.1" result="shifted"/><feFlood floodColor="#4A90D9" floodOpacity="0.06" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <linearGradient id="corp-med-accent" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#4A90D9"/><stop offset="100%" stopColor="#3a7abf"/></linearGradient>
      </defs>
      <rect width="91" height="55" fill="#ffffff" filter="url(#corp-med-paper)" />
      <rect x="0" y="0" width="91" height="0.3" fill="url(#corp-med-accent)" />
      <rect x="0" y="0.3" width="91" height="0.08" fill="#4A90D9" opacity="0.2" />
      {/* Medical cross accent */}
      <rect x="79" y="7" width="0.4" height="4" fill="#4A90D9" opacity="0.2" />
      <rect x="77.2" y="8.8" width="4" height="0.4" fill="#4A90D9" opacity="0.2" />
      <circle cx="85" cy="46" r="0.3" fill="#4A90D9" opacity="0.12" />
      <text x="8" y="13" fontFamily={JA} fontWeight="400" fontSize="2.2" letterSpacing="0.5" fill="#4A90D9">{data.companyJa}</text>
      <text x="8" y="17" fontFamily={EN} fontWeight="300" fontSize="1.3" letterSpacing="0.3" fill="#8ab8e8">{data.companyEn}</text>
      <line x1="8" y1="21" x2="50" y2="21" stroke="#4A90D9" strokeWidth="0.12" opacity="0.3" />
      <text x="8" y="30" fontFamily={JA} fontWeight="500" fontSize="5.5" letterSpacing="0.5" fill="#2a2a2a" filter="url(#corp-med-shadow)">{data.nameJa}</text>
      <text x="8" y="35" fontFamily={EN} fontWeight="300" fontSize="1.8" letterSpacing="0.2" fill="#777777">{data.nameEn}</text>
      <text x="8" y="42" fontFamily={JA} fontWeight="300" fontSize="1.8" fill="#4A90D9">{data.titleJa}</text>
      <text x="8" y="46" fontFamily={EN} fontWeight="300" fontSize="1.3" fill="#8ab8e8">{data.titleEn}</text>
      {data.logo && <image href={data.logo} x="76" y="28" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="corp-med-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
      </defs>
      <rect width="91" height="55" fill="#ffffff" filter="url(#corp-med-paper-b)" />
      <rect x="0" y="54.7" width="91" height="0.3" fill="#4A90D9" />
      <rect x="0" y="54.4" width="91" height="0.08" fill="#4A90D9" opacity="0.2" />
      {/* Medical cross accent back */}
      <rect x="79" y="44" width="0.4" height="4" fill="#4A90D9" opacity="0.12" />
      <rect x="77.2" y="45.8" width="4" height="0.4" fill="#4A90D9" opacity="0.12" />
      <circle cx="6" cy="6" r="0.3" fill="#4A90D9" opacity="0.12" />
      <text x="8" y="11" fontFamily={JA} fontWeight="400" fontSize="2" letterSpacing="0.4" fill="#4A90D9">{data.companyJa}</text>
      <text x="8" y="15" fontFamily={EN} fontWeight="300" fontSize="1.2" letterSpacing="0.3" fill="#8ab8e8">{data.companyEn}</text>
      <text x="8" y="18.5" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#aab8d8">{data.titleJa}</text>
      <line x1="8" y1="21" x2="83" y2="21" stroke="#4A90D9" strokeWidth="0.1" opacity="0.2" />
      <text x="8" y="26" fontFamily={EN} fontWeight="400" fontSize="1.1" letterSpacing="0.3" fill="#4A90D9">TEL</text>
      <text x="20" y="26" fontFamily={EN} fontWeight="300" fontSize="1.4" fill="#555555">{data.tel}</text>
      <text x="8" y="30" fontFamily={EN} fontWeight="400" fontSize="1.1" letterSpacing="0.3" fill="#4A90D9">EMAIL</text>
      <text x="20" y="30" fontFamily={EN} fontWeight="300" fontSize="1.4" fill="#555555">{data.email}</text>
      <text x="8" y="34" fontFamily={EN} fontWeight="400" fontSize="1.1" letterSpacing="0.3" fill="#4A90D9">WEB</text>
      <text x="20" y="34" fontFamily={EN} fontWeight="300" fontSize="1.4" fill="#555555">{data.website}</text>
      <line x1="8" y1="37" x2="83" y2="37" stroke="#4A90D9" strokeWidth="0.1" opacity="0.2" />
      <text x="8" y="41.5" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#777777">〒{data.zipCode}</text>
      <text x="8" y="45" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#777777">{data.addressJa}</text>
      <text x="8" y="48.5" fontFamily={EN} fontWeight="300" fontSize="1.1" fill="#aaaaaa">{data.addressEn}</text>
      {data.logo && <image href={data.logo} x="76" y="6" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.45" />}
    </g>
  ),
};

// ============================================================
// 9. ACADEMIC (学) — University/academic
// Warm tones, serif company name, scholarly feel
// ============================================================
const academicTemplate: TemplateDefinition = {
  id: 'corporate-academic',
  name: 'ACADEMIC',
  nameJa: '学',
  category: 'corporate',
  designer: 'Oxford',
  description: '学問の薫り。温かみのあるセリフ体が醸す知性と品格。',
  accentColor: '#8B1A1A',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="corp-acad-paper"><feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="5" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="corp-acad-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.3" result="blur"/><feOffset dx="0.1" dy="0.15" result="shifted"/><feFlood floodColor="#5a1010" floodOpacity="0.08" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <linearGradient id="corp-acad-bar" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#8B1A1A"/><stop offset="100%" stopColor="#6e1515"/></linearGradient>
        <linearGradient id="corp-acad-gold" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#C9A94E" stopOpacity="0.3"/><stop offset="50%" stopColor="#C9A94E"/><stop offset="100%" stopColor="#C9A94E" stopOpacity="0.3"/></linearGradient>
      </defs>
      <rect width="91" height="55" fill="#FDF8F0" filter="url(#corp-acad-paper)" />
      <rect x="0" y="0" width="91" height="1.5" fill="url(#corp-acad-bar)" />
      <rect x="0" y="1.5" width="91" height="0.4" fill="url(#corp-acad-gold)" />
      <circle cx="7" cy="52" r="0.25" fill="#8B1A1A" opacity="0.15" />
      <circle cx="84" cy="52" r="0.25" fill="#C9A94E" opacity="0.2" />
      <text x="45.5" y="12" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="600" fontSize="2.5" letterSpacing="0.6" fill="#8B1A1A" filter="url(#corp-acad-shadow)">{data.companyEn.toUpperCase()}</text>
      <text x="45.5" y="16" textAnchor="middle" fontFamily={JA} fontWeight="400" fontSize="1.5" letterSpacing="0.5" fill="#7a6040">{data.companyJa}</text>
      <line x1="20" y1="19" x2="71" y2="19" stroke="#C9A94E" strokeWidth="0.12" opacity="0.5" />
      <text x="45.5" y="28" textAnchor="middle" fontFamily={JA} fontWeight="500" fontSize="5.5" letterSpacing="1" fill="#3a2a1a" filter="url(#corp-acad-shadow)">{data.nameJa}</text>
      <text x="45.5" y="33" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="500" fontSize="2" letterSpacing="0.4" fill="#7a6040">{data.nameEn}</text>
      <line x1="35" y1="36" x2="56" y2="36" stroke="#C9A94E" strokeWidth="0.1" opacity="0.4" />
      <text x="45.5" y="41" textAnchor="middle" fontFamily={JA} fontWeight="300" fontSize="1.8" fill="#7a6040">{data.titleJa}</text>
      <text x="45.5" y="45" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.4" letterSpacing="0.2" fill="#a08860">{data.titleEn}</text>
      {data.logo && <image href={data.logo} x="4" y="4" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="corp-acad-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="5" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <linearGradient id="corp-acad-bar-b" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#6e1515"/><stop offset="100%" stopColor="#8B1A1A"/></linearGradient>
      </defs>
      <rect width="91" height="55" fill="#FDF8F0" filter="url(#corp-acad-paper-b)" />
      <rect x="0" y="0" width="91" height="1.5" fill="url(#corp-acad-bar-b)" />
      <rect x="0" y="1.5" width="91" height="0.4" fill="#C9A94E" opacity="0.5" />
      <circle cx="84" cy="6" r="0.25" fill="#8B1A1A" opacity="0.15" />
      <circle cx="7" cy="6" r="0.25" fill="#C9A94E" opacity="0.2" />
      <text x="45.5" y="11" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="600" fontSize="2.2" letterSpacing="0.5" fill="#8B1A1A">{data.companyEn.toUpperCase()}</text>
      <text x="45.5" y="15" textAnchor="middle" fontFamily={JA} fontWeight="400" fontSize="1.4" letterSpacing="0.4" fill="#7a6040">{data.companyJa}</text>
      <text x="45.5" y="18.5" textAnchor="middle" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#a08860">{data.titleJa}</text>
      <line x1="15" y1="21" x2="76" y2="21" stroke="#C9A94E" strokeWidth="0.1" opacity="0.4" />
      <text x="17" y="26" fontFamily="'Cormorant Garamond', serif" fontWeight="500" fontSize="1.3" fill="#8B1A1A">Telephone</text>
      <text x="34" y="26" fontFamily={EN} fontWeight="300" fontSize="1.4" fill="#5a4a30">{data.tel}</text>
      <text x="17" y="30" fontFamily="'Cormorant Garamond', serif" fontWeight="500" fontSize="1.3" fill="#8B1A1A">Electronic Mail</text>
      <text x="38" y="30" fontFamily={EN} fontWeight="300" fontSize="1.4" fill="#5a4a30">{data.email}</text>
      <text x="17" y="34" fontFamily="'Cormorant Garamond', serif" fontWeight="500" fontSize="1.3" fill="#8B1A1A">Website</text>
      <text x="34" y="34" fontFamily={EN} fontWeight="300" fontSize="1.4" fill="#5a4a30">{data.website}</text>
      <line x1="15" y1="37" x2="76" y2="37" stroke="#C9A94E" strokeWidth="0.1" opacity="0.4" />
      <text x="45.5" y="41.5" textAnchor="middle" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#7a6040">〒{data.zipCode}</text>
      <text x="45.5" y="45" textAnchor="middle" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#7a6040">{data.addressJa}</text>
      <text x="45.5" y="48.5" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.1" fill="#a08860">{data.addressEn}</text>
      {data.logo && <image href={data.logo} x="41" y="50" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.3" />}
    </g>
  ),
};

// ============================================================
// 10. PRESS (報) — Media/publishing
// High contrast black/white, editorial authority
// ============================================================
const pressTemplate: TemplateDefinition = {
  id: 'corporate-press',
  name: 'PRESS',
  nameJa: '報',
  category: 'corporate',
  designer: 'The New York Times',
  description: '報道の矜持。黒と白のコントラストが示す編集者の権威。',
  accentColor: '#000000',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="corp-press-paper"><feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="corp-press-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.3" result="blur"/><feOffset dx="0.1" dy="0.15" result="shifted"/><feFlood floodColor="#fff" floodOpacity="0.1" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <rect width="91" height="55" fill="#000000" filter="url(#corp-press-paper)" />
      <rect x="86" y="4" width="0.15" height="8" fill="#ffffff" opacity="0.12" />
      <rect x="4" y="50" width="8" height="0.15" fill="#ffffff" opacity="0.12" />
      <circle cx="86" cy="48" r="0.3" fill="#ffffff" opacity="0.1" />
      <text x="8" y="11" fontFamily={EN} fontWeight="800" fontSize="3" letterSpacing="0.3" fill="#ffffff" filter="url(#corp-press-shadow)">{data.companyEn.toUpperCase()}</text>
      <text x="8" y="15" fontFamily={JA} fontWeight="400" fontSize="1.4" fill="#777777">{data.companyJa}</text>
      <line x1="8" y1="18" x2="83" y2="18" stroke="#333333" strokeWidth="0.2" />
      <line x1="8" y1="18.5" x2="83" y2="18.5" stroke="#222222" strokeWidth="0.08" />
      <text x="8" y="30" fontFamily={JA} fontWeight="700" fontSize="7" letterSpacing="0.5" fill="#ffffff" filter="url(#corp-press-shadow)">{data.nameJa}</text>
      <text x="8" y="35.5" fontFamily={EN} fontWeight="300" fontSize="2" letterSpacing="0.3" fill="#888888">{data.nameEn.toUpperCase()}</text>
      <line x1="8" y1="39" x2="83" y2="39" stroke="#333333" strokeWidth="0.2" />
      <text x="8" y="44" fontFamily={JA} fontWeight="400" fontSize="1.8" fill="#aaaaaa">{data.titleJa}</text>
      <text x="8" y="48" fontFamily={EN} fontWeight="300" fontSize="1.3" letterSpacing="0.2" fill="#666666">{data.titleEn}</text>
      {data.logo && <image href={data.logo} x="76" y="40" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="corp-press-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
      </defs>
      <rect width="91" height="55" fill="#ffffff" filter="url(#corp-press-paper-b)" />
      <rect x="0" y="0" width="91" height="14" fill="#000000" />
      <rect x="0" y="14" width="91" height="0.3" fill="#333333" />
      <rect x="86" y="16" width="0.15" height="6" fill="#000000" opacity="0.1" />
      <circle cx="5" cy="51" r="0.3" fill="#000000" opacity="0.1" />
      <text x="8" y="9" fontFamily={EN} fontWeight="800" fontSize="3" letterSpacing="0.3" fill="#ffffff">{data.companyEn.toUpperCase()}</text>
      <text x="83" y="9" textAnchor="end" fontFamily={JA} fontWeight="400" fontSize="1.4" fill="#888888">{data.companyJa}</text>
      <text x="83" y="12" textAnchor="end" fontFamily={JA} fontWeight="300" fontSize="1.2" fill="#666666">{data.titleJa}</text>
      <text x="8" y="22" fontFamily={EN} fontWeight="500" fontSize="1.5" fill="#1a1a1a">TEL</text>
      <text x="20" y="22" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#333333">{data.tel}</text>
      <text x="8" y="26" fontFamily={EN} fontWeight="500" fontSize="1.5" fill="#1a1a1a">EMAIL</text>
      <text x="20" y="26" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#333333">{data.email}</text>
      <text x="8" y="30" fontFamily={EN} fontWeight="500" fontSize="1.5" fill="#1a1a1a">WEB</text>
      <text x="20" y="30" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#333333">{data.website}</text>
      <line x1="8" y1="34" x2="83" y2="34" stroke="#000000" strokeWidth="0.3" />
      <text x="8" y="39" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#555555">〒{data.zipCode}</text>
      <text x="8" y="42.5" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#555555">{data.addressJa}</text>
      <text x="8" y="46" fontFamily={EN} fontWeight="300" fontSize="1.1" fill="#888888">{data.addressEn}</text>
      <line x1="8" y1="50" x2="83" y2="50" stroke="#000000" strokeWidth="0.15" />
      {data.logo && <image href={data.logo} x="76" y="36" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
};

export const corporateTemplates: TemplateDefinition[] = [
  executiveTemplate,
  consulTemplate,
  legalTemplate,
  financeTemplate,
  architectTemplate,
  agencyTemplate,
  startupTemplate,
  medicalTemplate,
  academicTemplate,
  pressTemplate,
];
