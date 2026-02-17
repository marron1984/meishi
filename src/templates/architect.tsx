import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. BLUEPRINT (青写真) — Architecture blueprint style
// Technical drawing aesthetic with white-on-blue layout
// ============================================================
const blueprintTemplate: TemplateDefinition = {
  id: 'architect-blueprint',
  name: 'BLUEPRINT',
  nameJa: '青写真',
  category: 'architect',
  designer: 'Tadao Ando',
  description: '建築の青写真。技術的な精密さと知的な美しさ。',
  accentColor: '#005B96',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="arch-bp-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#004a7c" />
          <stop offset="50%" stopColor="#005B96" />
          <stop offset="100%" stopColor="#004070" />
        </linearGradient>
        <pattern id="arch-bp-grid" width="4.55" height="4.55" patternUnits="userSpaceOnUse">
          <path d="M 4.55 0 L 0 0 0 4.55" fill="none" stroke="#1a7ab5" strokeWidth="0.08" />
        </pattern>
        <pattern id="arch-bp-subgrid" width="0.91" height="0.91" patternUnits="userSpaceOnUse">
          <path d="M 0.91 0 L 0 0 0 0.91" fill="none" stroke="#0d6090" strokeWidth="0.03" />
        </pattern>
        <filter id="arch-bp-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="arch-bp-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#arch-bp-bg)" />
      <rect width="91" height="55" fill="url(#arch-bp-subgrid)" />
      <rect width="91" height="55" fill="url(#arch-bp-grid)" />
      <rect width="91" height="55" fill="transparent" filter="url(#arch-bp-grain)" opacity="0.12" />
      {/* Double border frame */}
      <rect x="3" y="3" width="85" height="49" fill="none" stroke="#ffffff" strokeWidth="0.15" opacity="0.9" />
      <rect x="4.2" y="4.2" width="82.6" height="46.6" fill="none" stroke="#8ec5e8" strokeWidth="0.06" opacity="0.5" />
      {/* Corner registration marks */}
      <g stroke="#ffffff" strokeWidth="0.1" opacity="0.7">
        <line x1="1" y1="3" x2="3" y2="3" /><line x1="3" y1="1" x2="3" y2="3" />
        <line x1="88" y1="3" x2="90" y2="3" /><line x1="88" y1="1" x2="88" y2="3" />
        <line x1="1" y1="52" x2="3" y2="52" /><line x1="3" y1="52" x2="3" y2="54" />
        <line x1="88" y1="52" x2="90" y2="52" /><line x1="88" y1="52" x2="88" y2="54" />
      </g>
      {/* Title block bottom-right */}
      <line x1="48" y1="37" x2="87" y2="37" stroke="#8ec5e8" strokeWidth="0.1" opacity="0.6" />
      <line x1="48" y1="37" x2="48" y2="51" stroke="#8ec5e8" strokeWidth="0.1" opacity="0.6" />
      <line x1="48" y1="44" x2="87" y2="44" stroke="#8ec5e8" strokeWidth="0.06" opacity="0.4" />
      {/* Name area with shadow */}
      <g filter="url(#arch-bp-shadow)">
        <text x="45.5" y="19" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="6.5" letterSpacing="1" fill="#ffffff">
          {data.nameJa}
        </text>
      </g>
      <text x="45.5" y="26" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2.2" letterSpacing="0.5" fill="#8ec5e8">
        {data.nameEn.toUpperCase()}
      </text>
      {/* Title block content */}
      <text x="67.5" y="41.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#8ec5e8">
        {data.titleJa}
      </text>
      <text x="67.5" y="48.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#ffffff">
        {data.companyJa}
      </text>
      {/* Dimension markers */}
      <line x1="10" y1="31" x2="36" y2="31" stroke="#8ec5e8" strokeWidth="0.08" />
      <line x1="10" y1="29.8" x2="10" y2="32.2" stroke="#8ec5e8" strokeWidth="0.08" />
      <line x1="36" y1="29.8" x2="36" y2="32.2" stroke="#8ec5e8" strokeWidth="0.08" />
      <text x="23" y="30" textAnchor="middle" fontFamily="'Inter', sans-serif" fontSize="0.8" fill="#8ec5e8" opacity="0.6">6,000</text>
      {/* North arrow */}
      <g opacity="0.5">
        <line x1="82" y1="12" x2="82" y2="7" stroke="#ffffff" strokeWidth="0.1" />
        <path d="M 81 8.5 L 82 6 L 83 8.5" fill="none" stroke="#ffffff" strokeWidth="0.1" />
        <text x="82" y="14" textAnchor="middle" fontFamily="'Inter', sans-serif" fontSize="0.9" fill="#ffffff">N</text>
      </g>
      {data.logo && <image href={data.logo} x="6" y="39" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="arch-bp-bg-b" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#004a7c" />
          <stop offset="50%" stopColor="#005B96" />
          <stop offset="100%" stopColor="#004070" />
        </linearGradient>
        <pattern id="arch-bp-grid-b" width="4.55" height="4.55" patternUnits="userSpaceOnUse">
          <path d="M 4.55 0 L 0 0 0 4.55" fill="none" stroke="#1a7ab5" strokeWidth="0.08" />
        </pattern>
        <filter id="arch-bp-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="arch-bp-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#arch-bp-bg-b)" />
      <rect width="91" height="55" fill="url(#arch-bp-grid-b)" />
      <rect width="91" height="55" fill="transparent" filter="url(#arch-bp-grain-b)" opacity="0.12" />
      <rect x="3" y="3" width="85" height="49" fill="none" stroke="#ffffff" strokeWidth="0.15" opacity="0.9" />
      <rect x="4.2" y="4.2" width="82.6" height="46.6" fill="none" stroke="#8ec5e8" strokeWidth="0.06" opacity="0.5" />
      {/* Company block */}
      <g filter="url(#arch-bp-shadow-b)">
        <text x="8" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.8" letterSpacing="0.3" fill="#ffffff">
          {data.companyJa}
        </text>
      </g>
      <text x="8" y="16.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.2" fill="#8ec5e8">
        {data.companyEn}
      </text>
      <text x="8" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#8ec5e8" opacity="0.7">
        {data.titleJa}
      </text>
      <line x1="8" y1="22" x2="83" y2="22" stroke="#ffffff" strokeWidth="0.1" opacity="0.4" />
      {/* Contact info */}
      <text x="8" y="27" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#ffffff">TEL: {data.tel}</text>
      <text x="8" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#ffffff">EMAIL: {data.email}</text>
      <text x="8" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#ffffff">WEB: {data.website}</text>
      <line x1="8" y1="38" x2="83" y2="38" stroke="#ffffff" strokeWidth="0.1" opacity="0.4" />
      <text x="8" y="42.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#8ec5e8">
        〒{data.zipCode}
      </text>
      <text x="8" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#8ec5e8">
        {data.addressJa}
      </text>
      {/* Scale bar decoration */}
      <g opacity="0.4">
        <line x1="60" y1="48" x2="83" y2="48" stroke="#ffffff" strokeWidth="0.08" />
        {[0, 1, 2, 3, 4].map((i) => (
          <line key={i} x1={60 + i * 5.75} y1="47.5" x2={60 + i * 5.75} y2="48.5" stroke="#ffffff" strokeWidth="0.06" />
        ))}
        <text x="71.5" y="50" textAnchor="middle" fontFamily="'Inter', sans-serif" fontSize="0.7" fill="#8ec5e8">1:100</text>
      </g>
      {data.logo && <image href={data.logo} x="75" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 2. FACADE (正面) — Building facade elevation style
// Clean elevation drawing with structured typography
// ============================================================
const facadeTemplate: TemplateDefinition = {
  id: 'architect-facade',
  name: 'FACADE',
  nameJa: '正面',
  category: 'architect',
  designer: 'Kengo Kuma',
  description: '建物のファサードのように、構造的で美しい正面性。',
  accentColor: '#2C3E50',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="arch-fac-bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f8f4ec" />
          <stop offset="100%" stopColor="#f0e8d8" />
        </linearGradient>
        <filter id="arch-fac-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="arch-fac-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#arch-fac-bg)" />
      <rect width="91" height="55" fill="transparent" filter="url(#arch-fac-grain)" opacity="0.06" />
      {/* Facade pillar lines */}
      <line x1="7" y1="5" x2="7" y2="50" stroke="#2C3E50" strokeWidth="0.3" />
      <line x1="84" y1="5" x2="84" y2="50" stroke="#2C3E50" strokeWidth="0.3" />
      {[22, 37, 52, 67].map((x) => (
        <line key={x} x1={x} y1="5" x2={x} y2="50" stroke="#2C3E50" strokeWidth="0.1" opacity="0.35" />
      ))}
      <line x1="7" y1="5" x2="84" y2="5" stroke="#2C3E50" strokeWidth="0.3" />
      <line x1="7" y1="18" x2="84" y2="18" stroke="#2C3E50" strokeWidth="0.15" />
      <line x1="7" y1="50" x2="84" y2="50" stroke="#2C3E50" strokeWidth="0.3" />
      {/* Window rectangles */}
      {[10, 18, 26, 60, 68, 76].map((x) => (
        <rect key={x} x={x} y={40} width="5" height="7" fill="none" stroke="#2C3E50" strokeWidth="0.08" opacity="0.4" />
      ))}
      {/* Name */}
      <g filter="url(#arch-fac-shadow)">
        <text x="45.5" y="13" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="5.5" letterSpacing="1.5" fill="#2C3E50">
          {data.nameJa}
        </text>
      </g>
      <text x="45.5" y="25" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.8" fill="#5d7486">
        {data.nameEn.toUpperCase()}
      </text>
      <text x="45.5" y="33" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#7f8c8d">
        {data.titleJa}
      </text>
      {data.logo && <image href={data.logo} x="38" y="34" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="arch-fac-bg-b" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f8f4ec" />
          <stop offset="100%" stopColor="#f0e8d8" />
        </linearGradient>
        <filter id="arch-fac-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="arch-fac-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#arch-fac-bg-b)" />
      <rect width="91" height="55" fill="transparent" filter="url(#arch-fac-grain-b)" opacity="0.06" />
      <line x1="7" y1="5" x2="7" y2="50" stroke="#2C3E50" strokeWidth="0.3" />
      <line x1="84" y1="5" x2="84" y2="50" stroke="#2C3E50" strokeWidth="0.3" />
      <line x1="7" y1="5" x2="84" y2="5" stroke="#2C3E50" strokeWidth="0.3" />
      <line x1="7" y1="50" x2="84" y2="50" stroke="#2C3E50" strokeWidth="0.3" />
      <line x1="7" y1="16" x2="84" y2="16" stroke="#2C3E50" strokeWidth="0.15" />
      {/* Company */}
      <g filter="url(#arch-fac-shadow-b)">
        <text x="45.5" y="12" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.8" letterSpacing="0.5" fill="#2C3E50">
          {data.companyJa}
        </text>
      </g>
      <text x="45.5" y="15" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" letterSpacing="0.3" fill="#7f8c8d">
        {data.companyEn}
      </text>
      <text x="12" y="20.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#5d7486">{data.titleJa}</text>
      {/* Contact */}
      <text x="12" y="25" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#2C3E50">{data.tel}</text>
      <text x="12" y="29" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#2C3E50">{data.email}</text>
      <text x="12" y="33" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#2C3E50">{data.website}</text>
      <line x1="12" y1="36" x2="79" y2="36" stroke="#2C3E50" strokeWidth="0.08" opacity="0.3" />
      <text x="12" y="41" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#7f8c8d">〒{data.zipCode}</text>
      <text x="12" y="45.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#7f8c8d">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="73" y="39" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 3. PLAN (設計) — Floor plan inspired layout
// Information arranged like rooms in a floor plan
// ============================================================
const planTemplate: TemplateDefinition = {
  id: 'architect-plan',
  name: 'PLAN',
  nameJa: '設計',
  category: 'architect',
  designer: 'Fumihiko Maki',
  description: '間取り図のような情報配置。空間の設計そのもの。',
  accentColor: '#1a3a5c',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="arch-plan-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="arch-plan-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#ffffff" />
      <rect width="91" height="55" fill="transparent" filter="url(#arch-plan-grain)" opacity="0.04" />
      {/* Floor plan walls */}
      <rect x="5" y="5" width="40" height="25" fill="none" stroke="#1a3a5c" strokeWidth="0.25" />
      <rect x="46" y="5" width="40" height="25" fill="none" stroke="#1a3a5c" strokeWidth="0.25" />
      <rect x="5" y="31" width="81" height="19" fill="none" stroke="#1a3a5c" strokeWidth="0.25" />
      {/* Door openings with arcs */}
      <line x1="30" y1="30" x2="38" y2="30" stroke="#ffffff" strokeWidth="0.4" />
      <path d="M 30 30 Q 30 24 36 24" fill="none" stroke="#1a3a5c" strokeWidth="0.08" strokeDasharray="0.5,0.3" />
      <line x1="46" y1="15" x2="46" y2="22" stroke="#ffffff" strokeWidth="0.4" />
      <path d="M 46 15 Q 52 15 52 21" fill="none" stroke="#1a3a5c" strokeWidth="0.08" strokeDasharray="0.5,0.3" />
      {/* Name in main room */}
      <g filter="url(#arch-plan-shadow)">
        <text x="25" y="16" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="5.5" letterSpacing="0.3" fill="#1a3a5c">
          {data.nameJa}
        </text>
      </g>
      <text x="25" y="22" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.8" letterSpacing="0.3" fill="#5a7a9c">
        {data.nameEn}
      </text>
      {/* Title in second room */}
      <text x="66" y="16" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#1a3a5c">{data.titleJa}</text>
      <text x="66" y="22" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#5a7a9c">{data.companyJa}</text>
      {/* Bottom room dimension */}
      <text x="45.5" y="43" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.2" letterSpacing="2" fill="#aabbcc">ARCHITECT</text>
      <text x="22" y="29" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="0.9" fill="#aabbcc">6,000</text>
      {data.logo && <image href={data.logo} x="73" y="34" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="arch-plan-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="arch-plan-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#ffffff" />
      <rect width="91" height="55" fill="transparent" filter="url(#arch-plan-grain-b)" opacity="0.04" />
      <rect x="5" y="5" width="81" height="45" fill="none" stroke="#1a3a5c" strokeWidth="0.25" />
      <line x1="5" y1="16" x2="86" y2="16" stroke="#1a3a5c" strokeWidth="0.15" />
      <line x1="5" y1="35" x2="86" y2="35" stroke="#1a3a5c" strokeWidth="0.15" />
      {/* Company */}
      <g filter="url(#arch-plan-shadow-b)">
        <text x="45.5" y="12" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.8" letterSpacing="0.5" fill="#1a3a5c">
          {data.companyJa}
        </text>
      </g>
      <text x="45.5" y="15" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5a7a9c">{data.companyEn}</text>
      {/* Contact block */}
      <text x="10" y="21" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#5a7a9c">{data.titleJa}</text>
      <text x="10" y="25" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#1a3a5c">T. {data.tel}</text>
      <text x="10" y="29" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#1a3a5c">E. {data.email}</text>
      <text x="10" y="33" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#1a3a5c">W. {data.website}</text>
      {/* Address block */}
      <text x="10" y="41" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#5a7a9c">〒{data.zipCode}</text>
      <text x="10" y="45.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#5a7a9c">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="73" y="38" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 4. SECTION (断面) — Architectural cross-section view
// Layered horizontal bands like building section drawing
// ============================================================
const sectionTemplate: TemplateDefinition = {
  id: 'architect-section',
  name: 'SECTION',
  nameJa: '断面',
  category: 'architect',
  designer: 'Toyo Ito',
  description: '建物の断面図。層が織りなす構造美。',
  accentColor: '#34495e',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="arch-sec-bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fdfbf8" />
          <stop offset="100%" stopColor="#f5f0ea" />
        </linearGradient>
        <filter id="arch-sec-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="arch-sec-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#arch-sec-bg)" />
      <rect width="91" height="55" fill="transparent" filter="url(#arch-sec-grain)" opacity="0.05" />
      {/* Section cut layers */}
      <rect x="0" y="0" width="91" height="3" fill="#2C3E50" />
      <rect x="0" y="3" width="91" height="0.5" fill="#e74c3c" opacity="0.6" />
      {/* Ground line */}
      <line x1="0" y1="42" x2="91" y2="42" stroke="#2C3E50" strokeWidth="0.3" />
      {/* Hatching below ground */}
      {[...Array(18)].map((_, i) => (
        <line key={i} x1={i * 5} y1="42" x2={i * 5 + 3} y2="55" stroke="#d5cfc7" strokeWidth="0.1" />
      ))}
      {/* Section cut indicator */}
      <line x1="5" y1="6" x2="5" y2="42" stroke="#e74c3c" strokeWidth="0.12" strokeDasharray="1,0.5" />
      <circle cx="5" cy="6" r="1.5" fill="none" stroke="#e74c3c" strokeWidth="0.12" />
      <text x="5" y="6.7" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1" fill="#e74c3c">A</text>
      {/* Floor level lines */}
      <line x1="8" y1="22" x2="14" y2="22" stroke="#2C3E50" strokeWidth="0.06" opacity="0.3" />
      <text x="15" y="22.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="0.7" fill="#7f8c8d">FL+1</text>
      {/* Name */}
      <g filter="url(#arch-sec-shadow)">
        <text x="45.5" y="20" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="6" letterSpacing="0.8" fill="#2C3E50">
          {data.nameJa}
        </text>
      </g>
      <text x="45.5" y="27" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.4" fill="#7f8c8d">
        {data.nameEn.toUpperCase()}
      </text>
      <text x="45.5" y="38" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#7f8c8d">{data.titleJa}</text>
      <text x="86" y="41" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="0.8" fill="#7f8c8d">GL±0</text>
      {data.logo && <image href={data.logo} x="76" y="28" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="arch-sec-bg-b" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fdfbf8" />
          <stop offset="100%" stopColor="#f5f0ea" />
        </linearGradient>
        <filter id="arch-sec-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="arch-sec-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#arch-sec-bg-b)" />
      <rect width="91" height="55" fill="transparent" filter="url(#arch-sec-grain-b)" opacity="0.05" />
      <rect x="0" y="0" width="91" height="3" fill="#2C3E50" />
      <rect x="0" y="3" width="91" height="0.5" fill="#e74c3c" opacity="0.6" />
      <line x1="0" y1="42" x2="91" y2="42" stroke="#2C3E50" strokeWidth="0.3" />
      {/* Company */}
      <g filter="url(#arch-sec-shadow-b)">
        <text x="10" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.8" letterSpacing="0.4" fill="#2C3E50">
          {data.companyJa}
        </text>
      </g>
      <text x="10" y="16.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#7f8c8d">{data.companyEn}</text>
      <text x="10" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#7f8c8d">{data.titleJa}</text>
      <line x1="10" y1="22" x2="81" y2="22" stroke="#2C3E50" strokeWidth="0.06" />
      <text x="10" y="26.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#34495e">{data.tel}</text>
      <text x="10" y="30.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#34495e">{data.email}</text>
      <text x="10" y="34.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#34495e">{data.website}</text>
      <line x1="10" y1="37" x2="81" y2="37" stroke="#2C3E50" strokeWidth="0.06" />
      <text x="10" y="41" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#7f8c8d">〒{data.zipCode} {data.addressJa}</text>
      {data.logo && <image href={data.logo} x="75" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 5. COLUMN-A (円柱) — Classical column proportions
// Inspired by column orders: base, shaft, capital
// ============================================================
const columnTemplate: TemplateDefinition = {
  id: 'architect-column',
  name: 'COLUMN-A',
  nameJa: '円柱',
  category: 'architect',
  designer: 'Andrea Palladio',
  description: '古典円柱の比例。秩序と格式の建築美。',
  accentColor: '#8B7355',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="arch-col-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#faf6f0" />
          <stop offset="100%" stopColor="#f2ebe0" />
        </linearGradient>
        <filter id="arch-col-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="arch-col-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#arch-col-bg)" />
      <rect width="91" height="55" fill="transparent" filter="url(#arch-col-grain)" opacity="0.06" />
      {/* Column shaft */}
      <rect x="8" y="6" width="6" height="43" fill="none" stroke="#8B7355" strokeWidth="0.15" />
      <rect x="6" y="4" width="10" height="2.5" fill="none" stroke="#8B7355" strokeWidth="0.15" rx="0.3" />
      <rect x="6" y="49" width="10" height="2" fill="none" stroke="#8B7355" strokeWidth="0.15" />
      {/* Fluting lines */}
      {[9.5, 11, 12.5].map((x) => (
        <line key={x} x1={x} y1="6.5" x2={x} y2="48.5" stroke="#8B7355" strokeWidth="0.06" opacity="0.5" />
      ))}
      {/* Entablature detail */}
      <line x1="5" y1="3.5" x2="17" y2="3.5" stroke="#8B7355" strokeWidth="0.04" opacity="0.4" />
      {/* Name */}
      <g filter="url(#arch-col-shadow)">
        <text x="22" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="5.5" letterSpacing="0.5" fill="#2C3E50">
          {data.nameJa}
        </text>
      </g>
      <text x="22" y="26.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2.2" letterSpacing="0.6" fill="#8B7355">
        {data.nameEn}
      </text>
      <line x1="22" y1="30" x2="82" y2="30" stroke="#8B7355" strokeWidth="0.08" opacity="0.4" />
      <text x="22" y="35" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#999999">{data.titleJa}</text>
      <text x="22" y="42" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#8B7355">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="74" y="38" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="arch-col-bg-b" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#faf6f0" />
          <stop offset="100%" stopColor="#f2ebe0" />
        </linearGradient>
        <filter id="arch-col-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="arch-col-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#arch-col-bg-b)" />
      <rect width="91" height="55" fill="transparent" filter="url(#arch-col-grain-b)" opacity="0.06" />
      <rect x="5" y="4" width="81" height="2.5" fill="none" stroke="#8B7355" strokeWidth="0.15" rx="0.3" />
      <rect x="5" y="48.5" width="81" height="2" fill="none" stroke="#8B7355" strokeWidth="0.15" />
      <line x1="5" y1="3.5" x2="86" y2="3.5" stroke="#8B7355" strokeWidth="0.04" opacity="0.4" />
      {/* Company */}
      <g filter="url(#arch-col-shadow-b)">
        <text x="45.5" y="14" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.8" letterSpacing="0.8" fill="#2C3E50">
          {data.companyJa}
        </text>
      </g>
      <text x="45.5" y="18.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" letterSpacing="0.4" fill="#8B7355">
        {data.companyEn}
      </text>
      <text x="45.5" y="22" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#999999">{data.titleJa}</text>
      <line x1="20" y1="24" x2="71" y2="24" stroke="#8B7355" strokeWidth="0.08" opacity="0.3" />
      <text x="45.5" y="29" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#555555">{data.tel}</text>
      <text x="45.5" y="33" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#555555">{data.email}</text>
      <text x="45.5" y="37" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#555555">{data.website}</text>
      <line x1="20" y1="40" x2="71" y2="40" stroke="#8B7355" strokeWidth="0.08" opacity="0.3" />
      <text x="45.5" y="44.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#999999">〒{data.zipCode}</text>
      <text x="45.5" y="47.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#999999">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="75" y="9" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 6. DOME (丸天) — Dome/cupola geometry
// Circular arc motif with radial composition
// ============================================================
const domeTemplate: TemplateDefinition = {
  id: 'architect-dome',
  name: 'DOME',
  nameJa: '丸天',
  category: 'architect',
  designer: 'Buckminster Fuller',
  description: '円蓋の幾何学。放射状に広がる構造の美。',
  accentColor: '#2C3E50',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <clipPath id="arch-dome-clip">
          <rect width="91" height="55" />
        </clipPath>
        <linearGradient id="arch-dome-bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f8f4ec" />
          <stop offset="100%" stopColor="#efe8dc" />
        </linearGradient>
        <filter id="arch-dome-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="arch-dome-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#arch-dome-bg)" />
      <rect width="91" height="55" fill="transparent" filter="url(#arch-dome-grain)" opacity="0.05" />
      <g clipPath="url(#arch-dome-clip)">
        <circle cx="45.5" cy="55" r="48" fill="none" stroke="#2C3E50" strokeWidth="0.12" opacity="0.3" />
        <circle cx="45.5" cy="55" r="40" fill="none" stroke="#2C3E50" strokeWidth="0.1" opacity="0.25" />
        <circle cx="45.5" cy="55" r="32" fill="none" stroke="#2C3E50" strokeWidth="0.08" opacity="0.2" />
        <circle cx="45.5" cy="55" r="24" fill="none" stroke="#2C3E50" strokeWidth="0.06" opacity="0.15" />
        {[10, 25, 45.5, 66, 81].map((x) => (
          <line key={x} x1="45.5" y1="55" x2={x} y2="0" stroke="#2C3E50" strokeWidth="0.05" opacity="0.15" />
        ))}
      </g>
      {/* Keystone marker */}
      <circle cx="45.5" cy="7" r="1.8" fill="none" stroke="#2C3E50" strokeWidth="0.12" opacity="0.5" />
      <circle cx="45.5" cy="7" r="0.5" fill="#2C3E50" opacity="0.4" />
      {/* Name */}
      <g filter="url(#arch-dome-shadow)">
        <text x="45.5" y="20" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="5.5" letterSpacing="0.5" fill="#2C3E50">
          {data.nameJa}
        </text>
      </g>
      <text x="45.5" y="27" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.5" fill="#7f8c8d">
        {data.nameEn.toUpperCase()}
      </text>
      {data.logo && <image href={data.logo} x="6" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <clipPath id="arch-dome-clip-b">
          <rect width="91" height="55" />
        </clipPath>
        <linearGradient id="arch-dome-bg-b" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f8f4ec" />
          <stop offset="100%" stopColor="#efe8dc" />
        </linearGradient>
        <filter id="arch-dome-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="arch-dome-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#arch-dome-bg-b)" />
      <rect width="91" height="55" fill="transparent" filter="url(#arch-dome-grain-b)" opacity="0.05" />
      <g clipPath="url(#arch-dome-clip-b)">
        <circle cx="45.5" cy="55" r="48" fill="none" stroke="#2C3E50" strokeWidth="0.08" opacity="0.15" />
        <circle cx="45.5" cy="55" r="36" fill="none" stroke="#2C3E50" strokeWidth="0.06" opacity="0.12" />
      </g>
      <g filter="url(#arch-dome-shadow-b)">
        <text x="45.5" y="12" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.8" letterSpacing="0.5" fill="#2C3E50">
          {data.companyJa}
        </text>
      </g>
      <text x="45.5" y="16.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#7f8c8d">{data.companyEn}</text>
      <text x="45.5" y="20" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#7f8c8d">{data.titleJa}</text>
      <line x1="15" y1="22.5" x2="76" y2="22.5" stroke="#2C3E50" strokeWidth="0.08" opacity="0.2" />
      <text x="45.5" y="27.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#34495e">{data.tel}</text>
      <text x="45.5" y="31.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#34495e">{data.email}</text>
      <text x="45.5" y="35.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#34495e">{data.website}</text>
      <line x1="15" y1="38.5" x2="76" y2="38.5" stroke="#2C3E50" strokeWidth="0.08" opacity="0.2" />
      <text x="45.5" y="43" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#7f8c8d">〒{data.zipCode}</text>
      <text x="45.5" y="47" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#7f8c8d">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="6" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 7. TRUSS (桁) — Structural truss pattern
// Triangulated structural grid with engineering feel
// ============================================================
const trussTemplate: TemplateDefinition = {
  id: 'architect-truss',
  name: 'TRUSS',
  nameJa: '桁',
  category: 'architect',
  designer: 'Santiago Calatrava',
  description: 'トラス構造の力学美。三角形が支える堅牢さ。',
  accentColor: '#1a1a2e',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="arch-truss-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="arch-truss-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#ffffff" />
      <rect width="91" height="55" fill="transparent" filter="url(#arch-truss-grain)" opacity="0.04" />
      {/* Top truss structure */}
      <line x1="0" y1="8" x2="91" y2="8" stroke="#1a1a2e" strokeWidth="0.2" />
      <line x1="0" y1="14" x2="91" y2="14" stroke="#1a1a2e" strokeWidth="0.2" />
      {[...Array(16)].map((_, i) => (
        <g key={i}>
          <line x1={i * 5.7} y1="8" x2={i * 5.7 + 2.85} y2="14" stroke="#1a1a2e" strokeWidth="0.08" />
          <line x1={i * 5.7 + 2.85} y1="14" x2={i * 5.7 + 5.7} y2="8" stroke="#1a1a2e" strokeWidth="0.08" />
        </g>
      ))}
      {[...Array(17)].map((_, i) => (
        <circle key={`n${i}`} cx={i * 5.7} cy="8" r="0.4" fill="#1a1a2e" />
      ))}
      {/* Name */}
      <g filter="url(#arch-truss-shadow)">
        <text x="45.5" y="28" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6" letterSpacing="0.5" fill="#1a1a2e">
          {data.nameJa}
        </text>
      </g>
      <text x="45.5" y="35" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.6" fill="#555577">
        {data.nameEn.toUpperCase()}
      </text>
      <text x="45.5" y="42" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#888899">
        {data.titleJa} — {data.companyJa}
      </text>
      <line x1="0" y1="48" x2="91" y2="48" stroke="#1a1a2e" strokeWidth="0.15" />
      {data.logo && <image href={data.logo} x="75" y="17" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="arch-truss-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="arch-truss-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#ffffff" />
      <rect width="91" height="55" fill="transparent" filter="url(#arch-truss-grain-b)" opacity="0.04" />
      <line x1="0" y1="8" x2="91" y2="8" stroke="#1a1a2e" strokeWidth="0.2" />
      <line x1="0" y1="14" x2="91" y2="14" stroke="#1a1a2e" strokeWidth="0.2" />
      {[...Array(16)].map((_, i) => (
        <g key={i}>
          <line x1={i * 5.7} y1="8" x2={i * 5.7 + 2.85} y2="14" stroke="#1a1a2e" strokeWidth="0.08" />
          <line x1={i * 5.7 + 2.85} y1="14" x2={i * 5.7 + 5.7} y2="8" stroke="#1a1a2e" strokeWidth="0.08" />
        </g>
      ))}
      {/* Company */}
      <g filter="url(#arch-truss-shadow-b)">
        <text x="10" y="23" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.8" fill="#1a1a2e">{data.companyJa}</text>
      </g>
      <text x="10" y="27.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#555577">{data.companyEn}</text>
      <text x="10" y="31" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#888899">{data.titleJa}</text>
      <line x1="10" y1="33" x2="81" y2="33" stroke="#1a1a2e" strokeWidth="0.06" />
      <text x="10" y="37" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#1a1a2e">{data.tel}</text>
      <text x="10" y="41" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#1a1a2e">{data.email}</text>
      <text x="10" y="45" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#1a1a2e">{data.website}</text>
      <text x="10" y="50" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#888899">〒{data.zipCode} {data.addressJa}</text>
      {data.logo && <image href={data.logo} x="75" y="17" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 8. ARCH (拱) — Pointed arch / gothic arch motif
// Elegant arched forms with vertical emphasis
// ============================================================
const archTemplate: TemplateDefinition = {
  id: 'architect-arch',
  name: 'ARCH',
  nameJa: '拱',
  category: 'architect',
  designer: 'Antoni Gaudí',
  description: 'アーチの優美な曲線。重力に抗う構造の詩。',
  accentColor: '#6B3A2A',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <clipPath id="arch-arch-clip">
          <rect width="91" height="55" />
        </clipPath>
        <linearGradient id="arch-arch-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#faf6f0" />
          <stop offset="100%" stopColor="#f0e8dc" />
        </linearGradient>
        <filter id="arch-arch-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="arch-arch-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#arch-arch-bg)" />
      <rect width="91" height="55" fill="transparent" filter="url(#arch-arch-grain)" opacity="0.06" />
      <g clipPath="url(#arch-arch-clip)">
        <path d="M 5 55 L 5 20 Q 5 5 18 5 Q 31 5 31 20 L 31 55" fill="none" stroke="#6B3A2A" strokeWidth="0.2" />
        <path d="M 8 55 L 8 21 Q 8 8 18 8 Q 28 8 28 21 L 28 55" fill="none" stroke="#6B3A2A" strokeWidth="0.1" opacity="0.5" />
        <path d="M 16 5.5 L 18 3 L 20 5.5 Z" fill="none" stroke="#6B3A2A" strokeWidth="0.1" />
      </g>
      {/* Voussoir marks */}
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1={8 + i * 5.5} y1={20 - i * 3.5} x2={28 - i * 5.5} y2={20 - i * 3.5} stroke="#6B3A2A" strokeWidth="0.04" opacity="0.3" />
      ))}
      <g filter="url(#arch-arch-shadow)">
        <text x="40" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="5.5" letterSpacing="0.5" fill="#2C3E50">
          {data.nameJa}
        </text>
      </g>
      <text x="40" y="27" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2.2" letterSpacing="0.5" fill="#6B3A2A">{data.nameEn}</text>
      <text x="40" y="35" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#999999">{data.titleJa}</text>
      <text x="40" y="42" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#6B3A2A">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="75" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <clipPath id="arch-arch-clip-b">
          <rect width="91" height="55" />
        </clipPath>
        <linearGradient id="arch-arch-bg-b" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#faf6f0" />
          <stop offset="100%" stopColor="#f0e8dc" />
        </linearGradient>
        <filter id="arch-arch-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="arch-arch-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#arch-arch-bg-b)" />
      <rect width="91" height="55" fill="transparent" filter="url(#arch-arch-grain-b)" opacity="0.06" />
      <g clipPath="url(#arch-arch-clip-b)">
        {[{x1: 10, x2: 26}, {x1: 30, x2: 46}, {x1: 50, x2: 66}, {x1: 70, x2: 86}].map(({x1, x2}, i) => (
          <path key={i} d={`M ${x1} 10 Q ${x1} 3 ${(x1+x2)/2} 3 Q ${x2} 3 ${x2} 10`} fill="none" stroke="#6B3A2A" strokeWidth="0.12" opacity="0.4" />
        ))}
      </g>
      <line x1="10" y1="10" x2="86" y2="10" stroke="#6B3A2A" strokeWidth="0.12" opacity="0.4" />
      <g filter="url(#arch-arch-shadow-b)">
        <text x="45.5" y="18" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.8" letterSpacing="0.5" fill="#2C3E50">
          {data.companyJa}
        </text>
      </g>
      <text x="45.5" y="22.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#6B3A2A">{data.companyEn}</text>
      <text x="45.5" y="26" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#999999">{data.titleJa}</text>
      <line x1="25" y1="28" x2="66" y2="28" stroke="#6B3A2A" strokeWidth="0.06" opacity="0.3" />
      <text x="45.5" y="32.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#555555">{data.tel}</text>
      <text x="45.5" y="36.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#555555">{data.email}</text>
      <text x="45.5" y="40.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#555555">{data.website}</text>
      <line x1="25" y1="43" x2="66" y2="43" stroke="#6B3A2A" strokeWidth="0.06" opacity="0.3" />
      <text x="45.5" y="47" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#999999">〒{data.zipCode}</text>
      <text x="45.5" y="50.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#999999">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="6" y="13" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 9. SPAN (径間) — Bridge span / cantilever concept
// Horizontal structural emphasis, suspension lines
// ============================================================
const spanTemplate: TemplateDefinition = {
  id: 'architect-span',
  name: 'SPAN',
  nameJa: '径間',
  category: 'architect',
  designer: 'Pier Luigi Nervi',
  description: '径間を渡す大胆な水平線。橋のような構造美。',
  accentColor: '#2C3E50',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="arch-span-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="arch-span-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#ffffff" />
      <rect width="91" height="55" fill="transparent" filter="url(#arch-span-grain)" opacity="0.04" />
      {/* Main span beam */}
      <rect x="0" y="18" width="91" height="1.2" fill="#2C3E50" />
      {/* Suspension cables */}
      {[10, 25, 40, 55, 70, 85].map((x) => (
        <line key={x} x1={x} y1="0" x2={x} y2="18" stroke="#2C3E50" strokeWidth="0.1" opacity="0.5" />
      ))}
      <path d="M 0 2 Q 45.5 14 91 2" fill="none" stroke="#2C3E50" strokeWidth="0.12" />
      {/* Rivet dots */}
      {[10, 25, 40, 55, 70, 85].map((x) => (
        <circle key={`r${x}`} cx={x} cy="18.6" r="0.3" fill="#2C3E50" opacity="0.4" />
      ))}
      <g filter="url(#arch-span-shadow)">
        <text x="10" y="30" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6" letterSpacing="0.5" fill="#2C3E50">
          {data.nameJa}
        </text>
      </g>
      <text x="10" y="36.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.4" fill="#7f8c8d">
        {data.nameEn.toUpperCase()}
      </text>
      <text x="10" y="44" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#aaaaaa">{data.titleJa}</text>
      <text x="10" y="50" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#7f8c8d">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="75" y="30" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="arch-span-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="arch-span-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#ffffff" />
      <rect width="91" height="55" fill="transparent" filter="url(#arch-span-grain-b)" opacity="0.04" />
      <rect x="0" y="10" width="91" height="1.2" fill="#2C3E50" />
      <path d="M 0 2 Q 45.5 8 91 2" fill="none" stroke="#2C3E50" strokeWidth="0.1" />
      {[20, 45.5, 71].map((x) => (
        <line key={x} x1={x} y1="2.5" x2={x} y2="10" stroke="#2C3E50" strokeWidth="0.08" />
      ))}
      <g filter="url(#arch-span-shadow-b)">
        <text x="10" y="19" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.8" fill="#2C3E50">{data.companyJa}</text>
      </g>
      <text x="10" y="23.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#7f8c8d">{data.companyEn}</text>
      <text x="10" y="27" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#aaaaaa">{data.titleJa}</text>
      <line x1="10" y1="29.5" x2="81" y2="29.5" stroke="#2C3E50" strokeWidth="0.06" />
      <text x="10" y="34" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#34495e">{data.tel}</text>
      <text x="10" y="38" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#34495e">{data.email}</text>
      <text x="10" y="42" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#34495e">{data.website}</text>
      <line x1="10" y1="44.5" x2="81" y2="44.5" stroke="#2C3E50" strokeWidth="0.06" />
      <text x="10" y="49" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#7f8c8d">〒{data.zipCode} {data.addressJa}</text>
      {data.logo && <image href={data.logo} x="75" y="15" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 10. ATRIUM (中庭) — Open courtyard concept
// Central open space with surrounding structure
// ============================================================
const atriumTemplate: TemplateDefinition = {
  id: 'architect-atrium',
  name: 'ATRIUM',
  nameJa: '中庭',
  category: 'architect',
  designer: 'Louis Kahn',
  description: '中庭のような中央空間。光と影の建築的対話。',
  accentColor: '#005B96',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="arch-atr-light" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#faf6f0" />
          <stop offset="100%" stopColor="#ede5d8" />
        </linearGradient>
        <filter id="arch-atr-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="arch-atr-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#2C3E50" />
      <rect width="91" height="55" fill="transparent" filter="url(#arch-atr-grain)" opacity="0.08" />
      {/* Central atrium */}
      <rect x="18" y="10" width="55" height="35" fill="url(#arch-atr-light)" />
      <rect x="20" y="12" width="51" height="31" fill="none" stroke="#2C3E50" strokeWidth="0.1" opacity="0.3" />
      {/* Perspective lines */}
      <line x1="18" y1="10" x2="0" y2="0" stroke="#3d566e" strokeWidth="0.1" />
      <line x1="73" y1="10" x2="91" y2="0" stroke="#3d566e" strokeWidth="0.1" />
      <line x1="18" y1="45" x2="0" y2="55" stroke="#3d566e" strokeWidth="0.1" />
      <line x1="73" y1="45" x2="91" y2="55" stroke="#3d566e" strokeWidth="0.1" />
      {/* Light rays in atrium */}
      <line x1="35" y1="10" x2="30" y2="15" stroke="#d4c8b0" strokeWidth="0.04" opacity="0.3" />
      <line x1="55" y1="10" x2="60" y2="15" stroke="#d4c8b0" strokeWidth="0.04" opacity="0.3" />
      <g filter="url(#arch-atr-shadow)">
        <text x="45.5" y="24" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="5.5" letterSpacing="0.5" fill="#2C3E50">
          {data.nameJa}
        </text>
      </g>
      <text x="45.5" y="31" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.8" letterSpacing="0.4" fill="#7f8c8d">
        {data.nameEn.toUpperCase()}
      </text>
      <text x="45.5" y="38" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#7f8c8d">{data.titleJa}</text>
      <text x="45.5" y="52" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#8ec5e8">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="22" y="14" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="arch-atr-light-b" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#faf6f0" />
          <stop offset="100%" stopColor="#ede5d8" />
        </linearGradient>
        <filter id="arch-atr-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="arch-atr-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#2C3E50" />
      <rect width="91" height="55" fill="transparent" filter="url(#arch-atr-grain-b)" opacity="0.08" />
      <rect x="18" y="5" width="55" height="45" fill="url(#arch-atr-light-b)" />
      <rect x="20" y="7" width="51" height="41" fill="none" stroke="#2C3E50" strokeWidth="0.1" opacity="0.3" />
      <line x1="18" y1="5" x2="0" y2="0" stroke="#3d566e" strokeWidth="0.1" />
      <line x1="73" y1="5" x2="91" y2="0" stroke="#3d566e" strokeWidth="0.1" />
      <line x1="18" y1="50" x2="0" y2="55" stroke="#3d566e" strokeWidth="0.1" />
      <line x1="73" y1="50" x2="91" y2="55" stroke="#3d566e" strokeWidth="0.1" />
      <g filter="url(#arch-atr-shadow-b)">
        <text x="45.5" y="14" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.8" letterSpacing="0.4" fill="#2C3E50">
          {data.companyJa}
        </text>
      </g>
      <text x="45.5" y="18.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#7f8c8d">{data.companyEn}</text>
      <text x="45.5" y="22" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#7f8c8d">{data.titleJa}</text>
      <line x1="25" y1="24" x2="66" y2="24" stroke="#2C3E50" strokeWidth="0.06" opacity="0.3" />
      <text x="45.5" y="28.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#34495e">{data.tel}</text>
      <text x="45.5" y="32.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#34495e">{data.email}</text>
      <text x="45.5" y="36.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#34495e">{data.website}</text>
      <line x1="25" y1="39" x2="66" y2="39" stroke="#2C3E50" strokeWidth="0.06" opacity="0.3" />
      <text x="45.5" y="43" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#7f8c8d">〒{data.zipCode}</text>
      <text x="45.5" y="46.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#7f8c8d">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="22" y="9" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

export const architectTemplates: TemplateDefinition[] = [
  blueprintTemplate,
  facadeTemplate,
  planTemplate,
  sectionTemplate,
  columnTemplate,
  domeTemplate,
  trussTemplate,
  archTemplate,
  spanTemplate,
  atriumTemplate,
];
