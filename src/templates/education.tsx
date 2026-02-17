import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. CAMPUS (校園) — University campus inspired
// Classic academic layout with crest-like header and ruled lines
// ============================================================
const campusTemplate: TemplateDefinition = {
  id: 'education-campus',
  name: 'CAMPUS',
  nameJa: '校園',
  category: 'education',
  designer: 'Academic Press',
  description: 'キャンパスの荘厳さを凝縮。紋章と罫線が学びの場を想起させる。',
  accentColor: '#1B2A4A',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="edu-campus-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise"/>
          <feColorMatrix type="saturate" values="0" in="noise" result="gray"/>
          <feBlend mode="multiply" in="SourceGraphic" in2="gray"/>
        </filter>
        <filter id="edu-campus-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3"/>
          <feOffset dx="0.1" dy="0.15"/>
          <feFlood floodColor="#000" floodOpacity="0.08"/>
          <feComposite operator="in"/>
          <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <linearGradient id="edu-campus-navygrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1B2A4A"/>
          <stop offset="100%" stopColor="#2A3F6A"/>
        </linearGradient>
        <linearGradient id="edu-campus-goldbar" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C5A572" stopOpacity="0"/>
          <stop offset="20%" stopColor="#C5A572"/>
          <stop offset="80%" stopColor="#D4B882"/>
          <stop offset="100%" stopColor="#C5A572" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#FAFAF7" filter="url(#edu-campus-grain)"/>
      {/* Top navy bar with gradient */}
      <rect x="0" y="0" width="91" height="8" fill="url(#edu-campus-navygrad)"/>
      <rect x="0" y="8" width="91" height="0.4" fill="url(#edu-campus-goldbar)"/>
      {/* Academic crest */}
      <circle cx="45.5" cy="8" r="5.2" fill="#FAFAF7" stroke="#1B2A4A" strokeWidth="0.3"/>
      <circle cx="45.5" cy="8" r="4.4" fill="none" stroke="#C5A572" strokeWidth="0.2"/>
      <circle cx="45.5" cy="8" r="3.6" fill="none" stroke="#1B2A4A" strokeWidth="0.08" strokeDasharray="0.4 0.3"/>
      <path d="M43.5 6.2 L45.5 5.5 L47.5 6.2 L47.5 9.5 L45.5 10.5 L43.5 9.5 Z" fill="none" stroke="#1B2A4A" strokeWidth="0.2"/>
      <line x1="45.5" y1="6" x2="45.5" y2="10" stroke="#C5A572" strokeWidth="0.15"/>
      <line x1="43.8" y1="8" x2="47.2" y2="8" stroke="#C5A572" strokeWidth="0.15"/>
      <circle cx="45.5" cy="6.8" r="0.25" fill="#C5A572"/>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="4" y="1.5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6"/>}
      {/* Name */}
      <text x="45.5" y="22" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="5.5" letterSpacing="0.8" fill="#1B2A4A" filter="url(#edu-campus-shadow)">{data.nameJa}</text>
      <line x1="20" y1="25" x2="71" y2="25" stroke="url(#edu-campus-goldbar)" strokeWidth="0.2"/>
      <text x="45.5" y="29.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2.2" letterSpacing="0.5" fill="#5A6B8A">{data.nameEn}</text>
      {/* Title */}
      <text x="45.5" y="35" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#5A6B8A">{data.titleJa}</text>
      {/* Ruled lines at bottom */}
      <line x1="8" y1="42" x2="83" y2="42" stroke="#D0D0C8" strokeWidth="0.08"/>
      <line x1="8" y1="44.5" x2="83" y2="44.5" stroke="#D0D0C8" strokeWidth="0.08"/>
      <line x1="8" y1="47" x2="83" y2="47" stroke="#D0D0C8" strokeWidth="0.08"/>
      <text x="45.5" y="44" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#8A8A7E">{data.companyJa}</text>
      {/* Corner bookmarks */}
      <path d="M3 3 L6 3 L3 6 Z" fill="#1B2A4A" opacity="0.06"/>
      <path d="M88 3 L85 3 L88 6 Z" fill="#1B2A4A" opacity="0.06"/>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="edu-campus-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise"/>
          <feColorMatrix type="saturate" values="0" in="noise" result="gray"/>
          <feBlend mode="multiply" in="SourceGraphic" in2="gray"/>
        </filter>
        <linearGradient id="edu-campus-b-gold" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C5A572" stopOpacity="0"/>
          <stop offset="20%" stopColor="#C5A572"/>
          <stop offset="80%" stopColor="#D4B882"/>
          <stop offset="100%" stopColor="#C5A572" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#FAFAF7" filter="url(#edu-campus-b-grain)"/>
      <rect x="0" y="0" width="91" height="1.2" fill="#1B2A4A"/>
      <rect x="0" y="1.5" width="91" height="0.3" fill="url(#edu-campus-b-gold)"/>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="74" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6"/>}
      <text x="45.5" y="10" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" letterSpacing="0.5" fill="#1B2A4A">{data.companyJa}</text>
      <text x="45.5" y="14" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.6" letterSpacing="0.4" fill="#8A8A7E">{data.companyEn}</text>
      <text x="45.5" y="17.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#6A7B9A">{data.titleJa}</text>
      <line x1="30" y1="19.5" x2="61" y2="19.5" stroke="url(#edu-campus-b-gold)" strokeWidth="0.2"/>
      {/* Contact info */}
      <line x1="12" y1="24" x2="79" y2="24" stroke="#E8E8E0" strokeWidth="0.06"/>
      <text x="14" y="23.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.2" fill="#8A8A7E">TEL</text>
      <text x="26" y="23.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#3A4A6A">{data.tel}</text>
      <line x1="12" y1="28" x2="79" y2="28" stroke="#E8E8E0" strokeWidth="0.06"/>
      <text x="14" y="27.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.2" fill="#8A8A7E">EMAIL</text>
      <text x="26" y="27.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#3A4A6A">{data.email}</text>
      <line x1="12" y1="32" x2="79" y2="32" stroke="#E8E8E0" strokeWidth="0.06"/>
      <text x="14" y="31.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.2" fill="#8A8A7E">WEB</text>
      <text x="26" y="31.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#3A4A6A">{data.website}</text>
      <line x1="12" y1="36" x2="79" y2="36" stroke="#E8E8E0" strokeWidth="0.06"/>
      {/* Address */}
      <text x="45.5" y="41" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#8A8A7E">〒{data.zipCode}</text>
      <text x="45.5" y="44.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#8A8A7E">{data.addressJa}</text>
      {/* Decorative corners */}
      <path d="M3 3 L6 3 L3 6 Z" fill="#1B2A4A" opacity="0.06"/>
      <path d="M88 52 L85 52 L88 49 Z" fill="#1B2A4A" opacity="0.06"/>
      <rect x="0" y="53.5" width="91" height="0.3" fill="url(#edu-campus-b-gold)"/>
      <rect x="0" y="54" width="91" height="1" fill="#1B2A4A"/>
    </g>
  ),
};

// ============================================================
// 2. SCHOLAR (学) — Scholarly serif typography
// Heavy serif fonts, open book motif, deep navy palette
// ============================================================
const scholarTemplate: TemplateDefinition = {
  id: 'education-scholar',
  name: 'SCHOLAR',
  nameJa: '学',
  category: 'education',
  designer: 'Oxford Press',
  description: '学問の重みを感じる書体と構成。知性が静かに語る。',
  accentColor: '#1B2A4A',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="edu-scholar-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise"/>
          <feColorMatrix type="saturate" values="0" in="noise" result="gray"/>
          <feBlend mode="multiply" in="SourceGraphic" in2="gray"/>
        </filter>
        <filter id="edu-scholar-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3"/>
          <feOffset dx="0.1" dy="0.15"/>
          <feFlood floodColor="#000" floodOpacity="0.08"/>
          <feComposite operator="in"/>
          <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <linearGradient id="edu-scholar-accent" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C5A572" stopOpacity="0"/>
          <stop offset="15%" stopColor="#C5A572"/>
          <stop offset="85%" stopColor="#D4B882"/>
          <stop offset="100%" stopColor="#C5A572" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#F5F2EC" filter="url(#edu-scholar-grain)"/>
      {/* Open book motif */}
      <path d="M40 5 Q45.5 3 45.5 8 Q45.5 3 51 5 L51 13 Q45.5 11 45.5 16 Q45.5 11 40 13 Z" fill="none" stroke="#1B2A4A" strokeWidth="0.2"/>
      <line x1="45.5" y1="4" x2="45.5" y2="15" stroke="#1B2A4A" strokeWidth="0.1"/>
      {/* Page lines in book */}
      <line x1="41.5" y1="7" x2="44.5" y2="7" stroke="#C5A572" strokeWidth="0.06" opacity="0.4"/>
      <line x1="41.5" y1="8.5" x2="44.5" y2="8.5" stroke="#C5A572" strokeWidth="0.06" opacity="0.4"/>
      <line x1="41.5" y1="10" x2="44.5" y2="10" stroke="#C5A572" strokeWidth="0.06" opacity="0.4"/>
      <line x1="46.5" y1="7" x2="49.5" y2="7" stroke="#C5A572" strokeWidth="0.06" opacity="0.4"/>
      <line x1="46.5" y1="8.5" x2="49.5" y2="8.5" stroke="#C5A572" strokeWidth="0.06" opacity="0.4"/>
      <line x1="46.5" y1="10" x2="49.5" y2="10" stroke="#C5A572" strokeWidth="0.06" opacity="0.4"/>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="5" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6"/>}
      {/* Name */}
      <text x="45.5" y="25" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="5.5" letterSpacing="1.2" fill="#1B2A4A" filter="url(#edu-scholar-shadow)">{data.nameJa}</text>
      <text x="45.5" y="30.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="2.2" letterSpacing="0.6" fill="#5A6B8A">{data.nameEn}</text>
      {/* Decorative rule with diamond */}
      <line x1="22" y1="34" x2="40" y2="34" stroke="url(#edu-scholar-accent)" strokeWidth="0.15"/>
      <path d="M44.5 34 L45.5 32.8 L46.5 34 L45.5 35.2 Z" fill="#C5A572"/>
      <line x1="51" y1="34" x2="69" y2="34" stroke="url(#edu-scholar-accent)" strokeWidth="0.15"/>
      {/* Title */}
      <text x="45.5" y="39" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#5A6B8A">{data.titleJa}</text>
      <text x="45.5" y="42.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" letterSpacing="0.3" fill="#8A8A7E">{data.titleEn}</text>
      {/* Company */}
      <text x="45.5" y="49" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#8A8A7E">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="edu-scholar-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise"/>
          <feColorMatrix type="saturate" values="0" in="noise" result="gray"/>
          <feBlend mode="multiply" in="SourceGraphic" in2="gray"/>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#F5F2EC" filter="url(#edu-scholar-b-grain)"/>
      <rect x="6" y="5" width="79" height="45" fill="none" stroke="#D0CCC0" strokeWidth="0.15"/>
      <rect x="7" y="6" width="77" height="43" fill="none" stroke="#E0DCD0" strokeWidth="0.08"/>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="38" y="6.5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6"/>}
      {/* Small book motif */}
      <path d="M42.5 7.5 Q45.5 6 45.5 9 Q45.5 6 48.5 7.5 L48.5 12 Q45.5 10.5 45.5 13.5 Q45.5 10.5 42.5 12 Z" fill="none" stroke="#1B2A4A" strokeWidth="0.1" opacity="0.3"/>
      <text x="45.5" y="12" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.2" letterSpacing="0.6" fill="#1B2A4A">{data.companyJa}</text>
      <text x="45.5" y="16" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" letterSpacing="0.4" fill="#8A8A7E">{data.companyEn}</text>
      <text x="45.5" y="19.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#6A7B9A">{data.titleJa}</text>
      <line x1="14" y1="22" x2="77" y2="22" stroke="#D0CCC0" strokeWidth="0.1"/>
      {/* Contact */}
      <text x="15" y="27" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.1" fill="#8A8A7E">Tel.</text>
      <text x="25" y="27" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5A6B8A">{data.tel}</text>
      <text x="15" y="31" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.1" fill="#8A8A7E">Email</text>
      <text x="25" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5A6B8A">{data.email}</text>
      <text x="15" y="35" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.1" fill="#8A8A7E">Web</text>
      <text x="25" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5A6B8A">{data.website}</text>
      <line x1="14" y1="38" x2="77" y2="38" stroke="#D0CCC0" strokeWidth="0.1"/>
      <text x="45.5" y="42.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#8A8A7E">〒{data.zipCode}</text>
      <text x="45.5" y="46" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#8A8A7E">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 3. LECTURE (講) — Lecture hall inspired
// Blackboard-like dark background, chalk-white text
// ============================================================
const lectureTemplate: TemplateDefinition = {
  id: 'education-lecture',
  name: 'LECTURE',
  nameJa: '講',
  category: 'education',
  designer: 'Lecture Hall',
  description: '講義室の黒板を思わせる。チョークのような白文字が知の空間を描く。',
  accentColor: '#2D5016',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="edu-lecture-chalk">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch" result="noise"/>
          <feColorMatrix type="saturate" values="0" in="noise" result="gray"/>
          <feBlend mode="multiply" in="SourceGraphic" in2="gray"/>
        </filter>
        <filter id="edu-lecture-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3"/>
          <feOffset dx="0.1" dy="0.15"/>
          <feFlood floodColor="#000" floodOpacity="0.12"/>
          <feComposite operator="in"/>
          <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <linearGradient id="edu-lecture-board" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2A3A2A"/>
          <stop offset="50%" stopColor="#263626"/>
          <stop offset="100%" stopColor="#223222"/>
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#edu-lecture-board)" filter="url(#edu-lecture-chalk)"/>
      {/* Blackboard frame */}
      <rect x="2.5" y="2.5" width="86" height="50" fill="none" stroke="#6C8050" strokeWidth="0.5"/>
      <rect x="3.5" y="3.5" width="84" height="48" fill="none" stroke="#4A5A3A" strokeWidth="0.15"/>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="5" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6"/>}
      {/* Chalk-style text */}
      <text x="45.5" y="19" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="6" letterSpacing="1" fill="#E8E4D8" opacity="0.95" filter="url(#edu-lecture-shadow)">{data.nameJa}</text>
      <text x="45.5" y="25.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2.2" letterSpacing="0.5" fill="#B8C4A0">{data.nameEn}</text>
      {/* Chalk divider */}
      <line x1="25" y1="29" x2="66" y2="29" stroke="#E8E4D8" strokeWidth="0.15" opacity="0.5"/>
      <text x="45.5" y="34" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#B8C4A0">{data.titleJa}</text>
      <text x="45.5" y="42" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#8A9A70">{data.companyJa}</text>
      {/* Chalk dust dots */}
      <circle cx="12" cy="10" r="0.2" fill="#E8E4D8" opacity="0.3"/>
      <circle cx="78" cy="45" r="0.15" fill="#E8E4D8" opacity="0.25"/>
      <circle cx="70" cy="8" r="0.18" fill="#E8E4D8" opacity="0.2"/>
      <circle cx="22" cy="46" r="0.12" fill="#E8E4D8" opacity="0.15"/>
      <circle cx="82" cy="12" r="0.14" fill="#E8E4D8" opacity="0.18"/>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="edu-lecture-b-chalk">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch" result="noise"/>
          <feColorMatrix type="saturate" values="0" in="noise" result="gray"/>
          <feBlend mode="multiply" in="SourceGraphic" in2="gray"/>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#2A3A2A" filter="url(#edu-lecture-b-chalk)"/>
      <rect x="2.5" y="2.5" width="86" height="50" fill="none" stroke="#6C8050" strokeWidth="0.5"/>
      <rect x="3.5" y="3.5" width="84" height="48" fill="none" stroke="#4A5A3A" strokeWidth="0.15"/>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="75" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6"/>}
      <text x="45.5" y="11" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" letterSpacing="0.5" fill="#E8E4D8">{data.companyJa}</text>
      <text x="45.5" y="15" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.3" fill="#8A9A70">{data.companyEn}</text>
      <text x="45.5" y="18.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#B8C4A0">{data.titleJa}</text>
      <line x1="14" y1="21" x2="77" y2="21" stroke="#E8E4D8" strokeWidth="0.1" opacity="0.3"/>
      <text x="14" y="26" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.1" fill="#8A9A70">TEL</text>
      <text x="24" y="26" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#B8C4A0">{data.tel}</text>
      <text x="14" y="30" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.1" fill="#8A9A70">EMAIL</text>
      <text x="24" y="30" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#B8C4A0">{data.email}</text>
      <text x="14" y="34" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.1" fill="#8A9A70">WEB</text>
      <text x="24" y="34" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#B8C4A0">{data.website}</text>
      <line x1="14" y1="37" x2="77" y2="37" stroke="#E8E4D8" strokeWidth="0.1" opacity="0.3"/>
      <text x="45.5" y="42" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#8A9A70">〒{data.zipCode}</text>
      <text x="45.5" y="45.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#8A9A70">{data.addressJa}</text>
      {/* Chalk dust */}
      <circle cx="10" cy="48" r="0.15" fill="#E8E4D8" opacity="0.2"/>
      <circle cx="80" cy="45" r="0.1" fill="#E8E4D8" opacity="0.15"/>
    </g>
  ),
};

// ============================================================
// 4. THESIS (論) — Research paper inspired
// Clean structured layout like a thesis title page
// ============================================================
const thesisTemplate: TemplateDefinition = {
  id: 'education-thesis',
  name: 'THESIS',
  nameJa: '論',
  category: 'education',
  designer: 'Research Press',
  description: '論文の表紙のような構成美。学術的な厳格さが漂う。',
  accentColor: '#5C0029',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="edu-thesis-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise"/>
          <feColorMatrix type="saturate" values="0" in="noise" result="gray"/>
          <feBlend mode="multiply" in="SourceGraphic" in2="gray"/>
        </filter>
        <filter id="edu-thesis-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3"/>
          <feOffset dx="0.1" dy="0.15"/>
          <feFlood floodColor="#000" floodOpacity="0.08"/>
          <feComposite operator="in"/>
          <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <linearGradient id="edu-thesis-maroon" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5C0029" stopOpacity="0.6"/>
          <stop offset="50%" stopColor="#7A0038"/>
          <stop offset="100%" stopColor="#5C0029" stopOpacity="0.6"/>
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#FFFDF8" filter="url(#edu-thesis-grain)"/>
      {/* Double rule at top */}
      <line x1="10" y1="8" x2="81" y2="8" stroke="#5C0029" strokeWidth="0.3"/>
      <line x1="10" y1="9.2" x2="81" y2="9.2" stroke="#5C0029" strokeWidth="0.1"/>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="5" y="2" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6"/>}
      {/* Thesis-style name */}
      <text x="45.5" y="22" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="5.5" letterSpacing="2" fill="#2A0A1A" filter="url(#edu-thesis-shadow)">{data.nameJa}</text>
      <text x="45.5" y="28" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="2" letterSpacing="0.8" fill="#5C0029">{data.nameEn}</text>
      {/* Diamond separator */}
      <line x1="28" y1="33" x2="42" y2="33" stroke="#5C0029" strokeWidth="0.1"/>
      <path d="M43.5 33 L45.5 31.5 L47.5 33 L45.5 34.5 Z" fill="#5C0029" opacity="0.6"/>
      <line x1="49" y1="33" x2="63" y2="33" stroke="#5C0029" strokeWidth="0.1"/>
      <text x="45.5" y="39" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#7A4A5A">{data.titleJa}</text>
      {/* Double rule at bottom */}
      <line x1="10" y1="45.5" x2="81" y2="45.5" stroke="#5C0029" strokeWidth="0.1"/>
      <line x1="10" y1="46.5" x2="81" y2="46.5" stroke="#5C0029" strokeWidth="0.3"/>
      <text x="45.5" y="51" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#9A7A8A">{data.companyJa}</text>
      {/* Corner marks */}
      <line x1="10" y1="8" x2="10" y2="11" stroke="#5C0029" strokeWidth="0.1"/>
      <line x1="81" y1="8" x2="81" y2="11" stroke="#5C0029" strokeWidth="0.1"/>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="edu-thesis-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise"/>
          <feColorMatrix type="saturate" values="0" in="noise" result="gray"/>
          <feBlend mode="multiply" in="SourceGraphic" in2="gray"/>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#FFFDF8" filter="url(#edu-thesis-b-grain)"/>
      <line x1="10" y1="7" x2="81" y2="7" stroke="#5C0029" strokeWidth="0.2"/>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="76" y="2" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6"/>}
      <text x="45.5" y="13" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.2" letterSpacing="0.8" fill="#2A0A1A">{data.companyJa}</text>
      <text x="45.5" y="17" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" letterSpacing="0.5" fill="#7A4A5A">{data.companyEn}</text>
      <text x="45.5" y="20.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#9A7A8A">{data.titleJa}</text>
      <line x1="30" y1="23" x2="61" y2="23" stroke="#5C0029" strokeWidth="0.1"/>
      <text x="14" y="28" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.1" fill="#9A7A8A">Tel.</text>
      <text x="24" y="28" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#4A2A3A">{data.tel}</text>
      <text x="14" y="32" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.1" fill="#9A7A8A">E-mail</text>
      <text x="24" y="32" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#4A2A3A">{data.email}</text>
      <text x="14" y="36" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.1" fill="#9A7A8A">Web</text>
      <text x="24" y="36" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#4A2A3A">{data.website}</text>
      <line x1="10" y1="39" x2="81" y2="39" stroke="#5C0029" strokeWidth="0.1"/>
      <text x="45.5" y="44" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#9A7A8A">〒{data.zipCode}</text>
      <text x="45.5" y="47.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#9A7A8A">{data.addressJa}</text>
      <line x1="10" y1="51" x2="81" y2="51" stroke="#5C0029" strokeWidth="0.2"/>
    </g>
  ),
};

// ============================================================
// 5. SEMINAR (演) — Seminar room inspired
// Warm tones, discussion-circle motif, approachable academic
// ============================================================
const seminarTemplate: TemplateDefinition = {
  id: 'education-seminar',
  name: 'SEMINAR',
  nameJa: '演',
  category: 'education',
  designer: 'Seminar Room',
  description: 'ゼミの温かさを表現。円卓を囲む知的な対話の場。',
  accentColor: '#C5A572',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="edu-seminar-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise"/>
          <feColorMatrix type="saturate" values="0" in="noise" result="gray"/>
          <feBlend mode="multiply" in="SourceGraphic" in2="gray"/>
        </filter>
        <filter id="edu-seminar-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3"/>
          <feOffset dx="0.1" dy="0.15"/>
          <feFlood floodColor="#000" floodOpacity="0.08"/>
          <feComposite operator="in"/>
          <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <radialGradient id="edu-seminar-glow" cx="72" cy="18" r="14" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C5A572" stopOpacity="0.08"/>
          <stop offset="100%" stopColor="#C5A572" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="#FAF7F0" filter="url(#edu-seminar-grain)"/>
      <rect width="91" height="55" fill="url(#edu-seminar-glow)"/>
      {/* Concentric discussion circles */}
      <circle cx="72" cy="18" r="12" fill="none" stroke="#C5A572" strokeWidth="0.1" opacity="0.3"/>
      <circle cx="72" cy="18" r="8" fill="none" stroke="#C5A572" strokeWidth="0.1" opacity="0.4"/>
      <circle cx="72" cy="18" r="4" fill="none" stroke="#C5A572" strokeWidth="0.15" opacity="0.5"/>
      <circle cx="72" cy="18" r="1" fill="#C5A572" opacity="0.3"/>
      {/* Small participant dots */}
      <circle cx="72" cy="6" r="0.4" fill="#C5A572" opacity="0.25"/>
      <circle cx="60" cy="18" r="0.4" fill="#C5A572" opacity="0.25"/>
      <circle cx="84" cy="18" r="0.4" fill="#C5A572" opacity="0.25"/>
      <circle cx="72" cy="30" r="0.4" fill="#C5A572" opacity="0.25"/>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="5" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6"/>}
      {/* Name */}
      <text x="10" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="5.5" letterSpacing="0.5" fill="#3A2A1A" filter="url(#edu-seminar-shadow)">{data.nameJa}</text>
      <text x="10" y="27.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.3" fill="#8A7A5A">{data.nameEn}</text>
      <line x1="10" y1="30" x2="50" y2="30" stroke="#C5A572" strokeWidth="0.2"/>
      <text x="10" y="35" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#7A6A4A">{data.titleJa}</text>
      <text x="10" y="42" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#9A8A6A">{data.companyJa}</text>
      <text x="10" y="46" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.3" fill="#B0A080">{data.email}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="edu-seminar-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise"/>
          <feColorMatrix type="saturate" values="0" in="noise" result="gray"/>
          <feBlend mode="multiply" in="SourceGraphic" in2="gray"/>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#FAF7F0" filter="url(#edu-seminar-b-grain)"/>
      {/* Corner accent */}
      <circle cx="83" cy="8" r="3" fill="none" stroke="#C5A572" strokeWidth="0.15"/>
      <circle cx="83" cy="8" r="1.5" fill="#C5A572" opacity="0.15"/>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="75" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6"/>}
      <text x="10" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.2" fill="#3A2A1A">{data.companyJa}</text>
      <text x="10" y="16" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" letterSpacing="0.3" fill="#9A8A6A">{data.companyEn}</text>
      <text x="10" y="19.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#7A6A4A">{data.titleJa}</text>
      <line x1="10" y1="22" x2="60" y2="22" stroke="#C5A572" strokeWidth="0.15"/>
      <text x="10" y="27" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5A4A3A">{data.tel}</text>
      <text x="10" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5A4A3A">{data.email}</text>
      <text x="10" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5A4A3A">{data.website}</text>
      <line x1="10" y1="38" x2="60" y2="38" stroke="#C5A572" strokeWidth="0.1"/>
      <text x="10" y="42.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#9A8A6A">〒{data.zipCode}</text>
      <text x="10" y="46" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#9A8A6A">{data.addressJa}</text>
      {/* Decorative circle */}
      <circle cx="83" cy="47" r="2" fill="none" stroke="#C5A572" strokeWidth="0.1" opacity="0.2"/>
    </g>
  ),
};

// ============================================================
// 6. ACADEMY (院) — Graduate academy inspired
// Formal columns, institutional weight, laurel hints
// ============================================================
const academyTemplate: TemplateDefinition = {
  id: 'education-academy',
  name: 'ACADEMY',
  nameJa: '院',
  category: 'education',
  designer: 'Academy Press',
  description: '大学院の格式を纏う。柱のような構造と月桂の気品。',
  accentColor: '#2D5016',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="edu-academy-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise"/>
          <feColorMatrix type="saturate" values="0" in="noise" result="gray"/>
          <feBlend mode="multiply" in="SourceGraphic" in2="gray"/>
        </filter>
        <filter id="edu-academy-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3"/>
          <feOffset dx="0.1" dy="0.15"/>
          <feFlood floodColor="#000" floodOpacity="0.08"/>
          <feComposite operator="in"/>
          <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <linearGradient id="edu-academy-col" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2D5016" stopOpacity="0.9"/>
          <stop offset="50%" stopColor="#3A6620"/>
          <stop offset="100%" stopColor="#2D5016" stopOpacity="0.9"/>
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#F8F8F2" filter="url(#edu-academy-grain)"/>
      {/* Left column bar */}
      <rect x="5" y="5" width="1.2" height="45" fill="url(#edu-academy-col)"/>
      <rect x="6.5" y="5" width="0.3" height="45" fill="#2D5016" opacity="0.3"/>
      {/* Laurel hints */}
      <path d="M42 5 Q44 3 45.5 5 Q47 3 49 5" fill="none" stroke="#2D5016" strokeWidth="0.15" opacity="0.5"/>
      <path d="M42 6 Q44 4 45.5 6 Q47 4 49 6" fill="none" stroke="#2D5016" strokeWidth="0.1" opacity="0.3"/>
      <circle cx="45.5" cy="4" r="0.3" fill="#2D5016" opacity="0.3"/>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="76" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6"/>}
      {/* Name */}
      <text x="12" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="5.5" letterSpacing="0.6" fill="#1A2A0A" filter="url(#edu-academy-shadow)">{data.nameJa}</text>
      <text x="12" y="28" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="2" letterSpacing="0.5" fill="#4A6A2A">{data.nameEn}</text>
      <line x1="12" y1="31" x2="55" y2="31" stroke="#2D5016" strokeWidth="0.2"/>
      <text x="12" y="36" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#4A6A2A">{data.titleJa}</text>
      <text x="12" y="43" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#7A8A6A">{data.companyJa}</text>
      <text x="12" y="47" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.3" fill="#9AAA8A">{data.companyEn}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="edu-academy-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise"/>
          <feColorMatrix type="saturate" values="0" in="noise" result="gray"/>
          <feBlend mode="multiply" in="SourceGraphic" in2="gray"/>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#F8F8F2" filter="url(#edu-academy-b-grain)"/>
      <rect x="5" y="5" width="1.2" height="45" fill="#2D5016" opacity="0.8"/>
      <rect x="6.5" y="5" width="0.3" height="45" fill="#2D5016" opacity="0.3"/>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="76" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6"/>}
      <text x="12" y="13" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.2" letterSpacing="0.5" fill="#1A2A0A">{data.companyJa}</text>
      <text x="12" y="17" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" letterSpacing="0.3" fill="#7A8A6A">{data.companyEn}</text>
      <text x="12" y="20.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#4A6A2A">{data.titleJa}</text>
      <line x1="12" y1="23" x2="80" y2="23" stroke="#2D5016" strokeWidth="0.12"/>
      <text x="12" y="28" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#3A5A2A">{data.tel}</text>
      <text x="12" y="32" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#3A5A2A">{data.email}</text>
      <text x="12" y="36" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#3A5A2A">{data.website}</text>
      <line x1="12" y1="39" x2="80" y2="39" stroke="#2D5016" strokeWidth="0.08"/>
      <text x="12" y="43.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#7A8A6A">〒{data.zipCode}</text>
      <text x="12" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#7A8A6A">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 7. BOOK (書) — Old book / library inspired
// Aged paper tones, book spine element, classical typography
// ============================================================
const bookTemplate: TemplateDefinition = {
  id: 'education-book',
  name: 'BOOK',
  nameJa: '書',
  category: 'education',
  designer: 'Library Press',
  description: '古書の風合いを宿す。書棚から引き出した一枚のような存在感。',
  accentColor: '#8B6914',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="edu-book-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" result="noise"/>
          <feColorMatrix type="saturate" values="0" in="noise" result="gray"/>
          <feBlend mode="multiply" in="SourceGraphic" in2="gray"/>
        </filter>
        <filter id="edu-book-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3"/>
          <feOffset dx="0.1" dy="0.15"/>
          <feFlood floodColor="#000" floodOpacity="0.08"/>
          <feComposite operator="in"/>
          <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <linearGradient id="edu-book-spine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4A0020"/>
          <stop offset="50%" stopColor="#5C0029"/>
          <stop offset="100%" stopColor="#4A0020"/>
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#F0E8D8" filter="url(#edu-book-grain)"/>
      {/* Book spine */}
      <rect x="0" y="0" width="8" height="55" fill="url(#edu-book-spine)"/>
      <line x1="7.5" y1="0" x2="7.5" y2="55" stroke="#C5A572" strokeWidth="0.15"/>
      <line x1="1" y1="0" x2="1" y2="55" stroke="#C5A572" strokeWidth="0.1" opacity="0.5"/>
      <line x1="2" y1="0" x2="2" y2="55" stroke="#C5A572" strokeWidth="0.06" opacity="0.3"/>
      {/* Spine text */}
      <text x="4" y="35" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.2" fill="#C5A572" transform="rotate(-90, 4, 35)" letterSpacing="0.5">MEISHI</text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="74" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6"/>}
      {/* Name */}
      <text x="50" y="18" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="5.5" letterSpacing="1" fill="#2A1A0A" filter="url(#edu-book-shadow)">{data.nameJa}</text>
      <line x1="25" y1="22" x2="75" y2="22" stroke="#C5A572" strokeWidth="0.15"/>
      <text x="50" y="27" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="2.2" letterSpacing="0.6" fill="#5C0029">{data.nameEn}</text>
      <text x="50" y="34" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#7A5A3A">{data.titleJa}</text>
      <text x="50" y="46" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#9A7A5A">{data.companyJa}</text>
      {/* Page corner fold */}
      <path d="M85 49 L91 49 L91 55 Z" fill="#E0D8C8"/>
      <path d="M85 49 L91 55" stroke="#C8C0B0" strokeWidth="0.1"/>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="edu-book-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" result="noise"/>
          <feColorMatrix type="saturate" values="0" in="noise" result="gray"/>
          <feBlend mode="multiply" in="SourceGraphic" in2="gray"/>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#F0E8D8" filter="url(#edu-book-b-grain)"/>
      {/* Book spine on right */}
      <rect x="83" y="0" width="8" height="55" fill="#5C0029"/>
      <line x1="83.5" y1="0" x2="83.5" y2="55" stroke="#C5A572" strokeWidth="0.15"/>
      <line x1="89" y1="0" x2="89" y2="55" stroke="#C5A572" strokeWidth="0.1" opacity="0.5"/>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="5" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6"/>}
      <text x="42" y="12" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2" letterSpacing="0.5" fill="#2A1A0A">{data.companyJa}</text>
      <text x="42" y="16" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" letterSpacing="0.3" fill="#7A5A3A">{data.companyEn}</text>
      <text x="42" y="19.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#9A7A5A">{data.titleJa}</text>
      <line x1="10" y1="22" x2="74" y2="22" stroke="#C5A572" strokeWidth="0.1"/>
      <text x="10" y="27" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5A3A1A">{data.tel}</text>
      <text x="10" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5A3A1A">{data.email}</text>
      <text x="10" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5A3A1A">{data.website}</text>
      <line x1="10" y1="38.5" x2="74" y2="38.5" stroke="#C5A572" strokeWidth="0.08"/>
      <text x="10" y="43" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#9A7A5A">〒{data.zipCode}</text>
      <text x="10" y="46.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#9A7A5A">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 8. PEN (筆) — Fountain pen / writing inspired
// Ink-like strokes, calligraphic accents, writing tool motif
// ============================================================
const penTemplate: TemplateDefinition = {
  id: 'education-pen',
  name: 'PEN',
  nameJa: '筆',
  category: 'education',
  designer: 'Ink & Quill',
  description: '万年筆のインクが紡ぐ知性。書くことへの敬意を形に。',
  accentColor: '#1B2A4A',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="edu-pen-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise"/>
          <feColorMatrix type="saturate" values="0" in="noise" result="gray"/>
          <feBlend mode="multiply" in="SourceGraphic" in2="gray"/>
        </filter>
        <filter id="edu-pen-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3"/>
          <feOffset dx="0.1" dy="0.15"/>
          <feFlood floodColor="#000" floodOpacity="0.08"/>
          <feComposite operator="in"/>
          <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <radialGradient id="edu-pen-ink" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1B2A4A" stopOpacity="0.15"/>
          <stop offset="100%" stopColor="#1B2A4A" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="#FDFCF8" filter="url(#edu-pen-grain)"/>
      {/* Ink splash */}
      <circle cx="78" cy="10" r="8" fill="url(#edu-pen-ink)"/>
      <path d="M78 4 L79.5 10 L78 18 L76.5 10 Z" fill="none" stroke="#1B2A4A" strokeWidth="0.15" opacity="0.4"/>
      <circle cx="78" cy="10" r="0.5" fill="#1B2A4A" opacity="0.5"/>
      {/* Ink flow line */}
      <path d="M78 18 Q70 25 10 30" fill="none" stroke="#1B2A4A" strokeWidth="0.1" opacity="0.2"/>
      {/* Small ink drops */}
      <circle cx="50" cy="22" r="0.3" fill="#1B2A4A" opacity="0.08"/>
      <circle cx="35" cy="26" r="0.2" fill="#1B2A4A" opacity="0.06"/>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6"/>}
      <text x="10" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="5.5" letterSpacing="0.8" fill="#1B2A4A" filter="url(#edu-pen-shadow)">{data.nameJa}</text>
      <text x="10" y="26" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.4" fill="#5A6B8A">{data.nameEn}</text>
      <text x="10" y="34" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#6A7B9A">{data.titleJa}</text>
      <text x="10" y="42" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#8A8B9A">{data.companyJa}</text>
      <line x1="10" y1="48" x2="45" y2="48" stroke="#1B2A4A" strokeWidth="0.15" opacity="0.3"/>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="edu-pen-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise"/>
          <feColorMatrix type="saturate" values="0" in="noise" result="gray"/>
          <feBlend mode="multiply" in="SourceGraphic" in2="gray"/>
        </filter>
        <radialGradient id="edu-pen-b-ink" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1B2A4A" stopOpacity="0.12"/>
          <stop offset="100%" stopColor="#1B2A4A" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="#FDFCF8" filter="url(#edu-pen-b-grain)"/>
      <circle cx="83" cy="8" r="5" fill="url(#edu-pen-b-ink)"/>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="75" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6"/>}
      <text x="10" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.2" fill="#1B2A4A">{data.companyJa}</text>
      <text x="10" y="16" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" letterSpacing="0.3" fill="#6A7B9A">{data.companyEn}</text>
      <text x="10" y="19.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#5A6B8A">{data.titleJa}</text>
      <line x1="10" y1="22" x2="55" y2="22" stroke="#1B2A4A" strokeWidth="0.15" opacity="0.4"/>
      <text x="10" y="27" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#3A4B6A">{data.tel}</text>
      <text x="10" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#3A4B6A">{data.email}</text>
      <text x="10" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#3A4B6A">{data.website}</text>
      <line x1="10" y1="38" x2="55" y2="38" stroke="#1B2A4A" strokeWidth="0.08" opacity="0.3"/>
      <text x="10" y="42.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#8A8B9A">〒{data.zipCode}</text>
      <text x="10" y="46" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#8A8B9A">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 9. BOARD (板) — Whiteboard / presentation inspired
// Clean white with marker-style elements, modern academic
// ============================================================
const boardTemplate: TemplateDefinition = {
  id: 'education-board',
  name: 'BOARD',
  nameJa: '板',
  category: 'education',
  designer: 'Whiteboard Co.',
  description: 'ホワイトボードの明快さ。マーカーで描かれたアイデアの原点。',
  accentColor: '#D04040',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="edu-board-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" stitchTiles="stitch" result="noise"/>
          <feColorMatrix type="saturate" values="0" in="noise" result="gray"/>
          <feBlend mode="multiply" in="SourceGraphic" in2="gray"/>
        </filter>
        <filter id="edu-board-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3"/>
          <feOffset dx="0.1" dy="0.15"/>
          <feFlood floodColor="#000" floodOpacity="0.06"/>
          <feComposite operator="in"/>
          <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#FFFFFF" filter="url(#edu-board-grain)"/>
      <rect x="2" y="2" width="87" height="51" fill="none" stroke="#E0E0E0" strokeWidth="0.3" rx="0.5"/>
      {/* Marker tray */}
      <rect x="25" y="50" width="41" height="2" fill="#E8E8E8" rx="0.3"/>
      <circle cx="35" cy="51" r="0.6" fill="#D04040"/>
      <circle cx="40" cy="51" r="0.6" fill="#1B2A4A"/>
      <circle cx="45" cy="51" r="0.6" fill="#2D5016"/>
      <circle cx="50" cy="51" r="0.6" fill="#333333"/>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="74" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6"/>}
      <text x="45.5" y="18" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="6" letterSpacing="0.5" fill="#1B2A4A" filter="url(#edu-board-shadow)">{data.nameJa}</text>
      <line x1="20" y1="21" x2="71" y2="21" stroke="#D04040" strokeWidth="0.5" opacity="0.6"/>
      <text x="45.5" y="27" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="2" letterSpacing="0.3" fill="#4A5A7A">{data.nameEn}</text>
      <text x="45.5" y="33" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#6A7A9A">{data.titleJa}</text>
      <text x="45.5" y="40" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#8A8A8A">{data.companyJa}</text>
      {/* Bullet point */}
      <circle cx="30" cy="44" r="0.3" fill="#2D5016"/>
      <text x="32" y="44.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.2" fill="#8A8A8A">{data.email}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="edu-board-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" stitchTiles="stitch" result="noise"/>
          <feColorMatrix type="saturate" values="0" in="noise" result="gray"/>
          <feBlend mode="multiply" in="SourceGraphic" in2="gray"/>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#FFFFFF" filter="url(#edu-board-b-grain)"/>
      <rect x="2" y="2" width="87" height="51" fill="none" stroke="#E0E0E0" strokeWidth="0.3" rx="0.5"/>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="74" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6"/>}
      <text x="45.5" y="12" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="2.5" fill="#1B2A4A">{data.companyJa}</text>
      <line x1="22" y1="14" x2="69" y2="14" stroke="#D04040" strokeWidth="0.4" opacity="0.5"/>
      <text x="45.5" y="18.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#8A8A8A">{data.companyEn}</text>
      <text x="45.5" y="21.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#6A7A9A">{data.titleJa}</text>
      {/* Bullet contact list */}
      <circle cx="15" cy="26" r="0.3" fill="#2D5016"/>
      <text x="17.5" y="26.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#4A4A4A">{data.tel}</text>
      <circle cx="15" cy="30" r="0.3" fill="#2D5016"/>
      <text x="17.5" y="30.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#4A4A4A">{data.email}</text>
      <circle cx="15" cy="34" r="0.3" fill="#2D5016"/>
      <text x="17.5" y="34.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#4A4A4A">{data.website}</text>
      <line x1="10" y1="38" x2="81" y2="38" stroke="#E0E0E0" strokeWidth="0.15"/>
      <text x="45.5" y="43" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#8A8A8A">〒{data.zipCode}</text>
      <text x="45.5" y="47" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#8A8A8A">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 10. DEGREE (位) — Diploma / degree certificate inspired
// Ornate borders, certificate-style layout, gold and maroon
// ============================================================
const degreeTemplate: TemplateDefinition = {
  id: 'education-degree',
  name: 'DEGREE',
  nameJa: '位',
  category: 'education',
  designer: 'Certificate Press',
  description: '学位記の荘厳さを凝縮。証書のような格式と金の輝き。',
  accentColor: '#C5A572',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="edu-degree-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise"/>
          <feColorMatrix type="saturate" values="0" in="noise" result="gray"/>
          <feBlend mode="multiply" in="SourceGraphic" in2="gray"/>
        </filter>
        <filter id="edu-degree-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3"/>
          <feOffset dx="0.1" dy="0.15"/>
          <feFlood floodColor="#000" floodOpacity="0.08"/>
          <feComposite operator="in"/>
          <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <linearGradient id="edu-degree-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C5A572"/>
          <stop offset="50%" stopColor="#D4B882"/>
          <stop offset="100%" stopColor="#C5A572"/>
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#FFFEF5" filter="url(#edu-degree-grain)"/>
      {/* Ornate double border */}
      <rect x="4" y="3" width="83" height="49" fill="none" stroke="url(#edu-degree-gold)" strokeWidth="0.3"/>
      <rect x="5.5" y="4.5" width="80" height="46" fill="none" stroke="#C5A572" strokeWidth="0.1"/>
      {/* Corner ornaments */}
      <path d="M4 3 L9 3 L9 5 L6 5 L6 8 L4 8 Z" fill="none" stroke="#C5A572" strokeWidth="0.15"/>
      <path d="M87 3 L82 3 L82 5 L85 5 L85 8 L87 8 Z" fill="none" stroke="#C5A572" strokeWidth="0.15"/>
      <path d="M4 52 L9 52 L9 50 L6 50 L6 47 L4 47 Z" fill="none" stroke="#C5A572" strokeWidth="0.15"/>
      <path d="M87 52 L82 52 L82 50 L85 50 L85 47 L87 47 Z" fill="none" stroke="#C5A572" strokeWidth="0.15"/>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="8" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6"/>}
      <text x="45.5" y="20" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6" letterSpacing="1.5" fill="#5C0029" filter="url(#edu-degree-shadow)">{data.nameJa}</text>
      {/* Gold ornamental line */}
      <line x1="20" y1="24" x2="37" y2="24" stroke="#C5A572" strokeWidth="0.15"/>
      <circle cx="40" cy="24" r="0.5" fill="#C5A572"/>
      <line x1="43" y1="24" x2="48" y2="24" stroke="#C5A572" strokeWidth="0.15"/>
      <circle cx="51" cy="24" r="0.5" fill="#C5A572"/>
      <line x1="54" y1="24" x2="71" y2="24" stroke="#C5A572" strokeWidth="0.15"/>
      <text x="45.5" y="29.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="2.2" letterSpacing="0.8" fill="#5C0029">{data.nameEn}</text>
      <text x="45.5" y="35" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#8A5A6A">{data.titleJa}</text>
      <text x="45.5" y="43" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.6" letterSpacing="0.3" fill="#5C0029">{data.companyJa}</text>
      {/* Seal hint */}
      <circle cx="75" cy="42" r="3" fill="none" stroke="#C5A572" strokeWidth="0.2" opacity="0.4"/>
      <circle cx="75" cy="42" r="2" fill="none" stroke="#C5A572" strokeWidth="0.1" opacity="0.3"/>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="edu-degree-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise"/>
          <feColorMatrix type="saturate" values="0" in="noise" result="gray"/>
          <feBlend mode="multiply" in="SourceGraphic" in2="gray"/>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#FFFEF5" filter="url(#edu-degree-b-grain)"/>
      <rect x="4" y="3" width="83" height="49" fill="none" stroke="#C5A572" strokeWidth="0.3"/>
      <rect x="5.5" y="4.5" width="80" height="46" fill="none" stroke="#C5A572" strokeWidth="0.1"/>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="38" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6"/>}
      <text x="45.5" y="13" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" letterSpacing="0.8" fill="#5C0029">{data.companyJa}</text>
      <text x="45.5" y="17.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" letterSpacing="0.5" fill="#8A5A6A">{data.companyEn}</text>
      <text x="45.5" y="21" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#9A7A8A">{data.titleJa}</text>
      <line x1="25" y1="23.5" x2="66" y2="23.5" stroke="#C5A572" strokeWidth="0.15"/>
      <text x="45.5" y="28.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5A3A4A">{data.tel}</text>
      <text x="45.5" y="32.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5A3A4A">{data.email}</text>
      <text x="45.5" y="36.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5A3A4A">{data.website}</text>
      <line x1="25" y1="39.5" x2="66" y2="39.5" stroke="#C5A572" strokeWidth="0.1"/>
      <text x="45.5" y="44" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#8A5A6A">〒{data.zipCode}</text>
      <text x="45.5" y="47.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#8A5A6A">{data.addressJa}</text>
    </g>
  ),
};

export const educationTemplates: TemplateDefinition[] = [
  campusTemplate,
  scholarTemplate,
  lectureTemplate,
  thesisTemplate,
  seminarTemplate,
  academyTemplate,
  bookTemplate,
  penTemplate,
  boardTemplate,
  degreeTemplate,
];
