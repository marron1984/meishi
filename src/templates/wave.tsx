import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. TIDE (潮) — Ocean tide, rhythmic water movement
// ============================================================
const tideTemplate: TemplateDefinition = {
  id: 'wave-tide',
  name: 'TIDE',
  nameJa: '潮',
  category: 'wave',
  designer: 'Ocean Designer',
  description: '潮の満ち引き。海が呼吸するリズムの美。',
  accentColor: '#0A3D62',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="wave-tide-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#061E33" />
          <stop offset="35%" stopColor="#0A3D62" />
          <stop offset="70%" stopColor="#1A5580" />
          <stop offset="100%" stopColor="#2A7AAE" />
        </linearGradient>
        <linearGradient id="wave-tide-foam" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset="30%" stopColor="#FFFFFF" stopOpacity="0.15" />
          <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="wave-tide-moon" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E0F0FF" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#E0F0FF" stopOpacity="0" />
        </radialGradient>
        <filter id="wave-tide-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="wave-tide-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.15" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#wave-tide-bg)" />
      <rect width="91" height="55" fill="transparent" filter="url(#wave-tide-texture)" opacity="0.06" />
      {/* Moonlight glow */}
      <circle cx="75" cy="8" r="18" fill="url(#wave-tide-moon)" />
      <circle cx="75" cy="8" r="2" fill="#E0F0FF" opacity="0.06" />
      {/* Tide wave layers with foam */}
      <path d="M0,33 Q8,29 16,33 Q24,37 32,33 Q40,29 48,33 Q56,37 64,33 Q72,29 80,33 Q88,37 91,34 L91,55 L0,55 Z" fill="#0E4872" opacity="0.5" />
      <path d="M0,33 Q8,29 16,33 Q24,37 32,33 Q40,29 48,33 Q56,37 64,33 Q72,29 80,33 Q88,37 91,34" fill="none" stroke="url(#wave-tide-foam)" strokeWidth="0.6" />
      <path d="M0,38 Q10,34 20,38 Q30,42 40,38 Q50,34 60,38 Q70,42 80,38 Q88,35 91,37 L91,55 L0,55 Z" fill="#0A3D62" opacity="0.45" />
      <path d="M0,43 Q12,39 24,43 Q36,47 48,43 Q60,39 72,43 Q84,47 91,44 L91,55 L0,55 Z" fill="#082D4A" opacity="0.4" />
      <path d="M0,48 Q15,45 30,48 Q45,51 60,48 Q75,45 91,48 L91,55 L0,55 Z" fill="#061E33" opacity="0.35" />
      {/* Foam sparkles */}
      <circle cx="18" cy="32" r="0.25" fill="#FFFFFF" opacity="0.2" />
      <circle cx="42" cy="30" r="0.2" fill="#FFFFFF" opacity="0.15" />
      <circle cx="66" cy="32" r="0.3" fill="#FFFFFF" opacity="0.18" />
      {/* Name */}
      <g filter="url(#wave-tide-shadow)">
        <text x="10" y="15" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6" letterSpacing="0.5" fill="#E0F0FF">
          {data.nameJa}
        </text>
      </g>
      <text x="10" y="21" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.8" letterSpacing="0.4" fill="#88BBDD">
        {data.nameEn}
      </text>
      <text x="10" y="26" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#6699BB">
        {data.titleJa}
      </text>
      <text x="10" y="30.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#6699BB">
        {data.companyJa}
      </text>
      {data.logo && <image href={data.logo} x="75" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="wave-tide-bg-b" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#061E33" />
          <stop offset="50%" stopColor="#0A3D62" />
          <stop offset="100%" stopColor="#1A5580" />
        </linearGradient>
        <linearGradient id="wave-tide-accent-b" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#88BBDD" stopOpacity="0" />
          <stop offset="50%" stopColor="#88BBDD" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#88BBDD" stopOpacity="0" />
        </linearGradient>
        <filter id="wave-tide-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="wave-tide-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.12" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#wave-tide-bg-b)" />
      <rect width="91" height="55" fill="transparent" filter="url(#wave-tide-texture-b)" opacity="0.06" />
      {/* Decorative waves bottom */}
      <path d="M0,44 Q12,40 24,44 Q36,48 48,44 Q60,40 72,44 Q84,48 91,44" fill="none" stroke="#FFFFFF" strokeWidth="0.1" opacity="0.08" />
      <path d="M0,47 Q12,43 24,47 Q36,51 48,47 Q60,43 72,47 Q84,51 91,47" fill="none" stroke="#FFFFFF" strokeWidth="0.08" opacity="0.06" />
      <path d="M0,50 Q12,46 24,50 Q36,54 48,50 Q60,46 72,50 Q84,54 91,50" fill="none" stroke="#FFFFFF" strokeWidth="0.06" opacity="0.04" />
      {/* Decorative wave top */}
      <path d="M0,5 Q12,3 24,5 Q36,7 48,5 Q60,3 72,5 Q84,7 91,5" fill="none" stroke="#FFFFFF" strokeWidth="0.08" opacity="0.06" />
      {/* Company */}
      <g filter="url(#wave-tide-shadow-b)">
        <text x="45.5" y="11" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#E0F0FF">
          {data.companyJa}
        </text>
      </g>
      <text x="45.5" y="15" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.3" fill="#88BBDD">
        {data.companyEn}
      </text>
      <text x="45.5" y="19" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#6699BB" opacity="0.8">
        {data.titleJa}
      </text>
      <line x1="18" y1="21.5" x2="73" y2="21.5" stroke="url(#wave-tide-accent-b)" strokeWidth="0.08" />
      <text x="45.5" y="26" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#88BBDD">
        {data.tel}
      </text>
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#88BBDD">
        {data.email}
      </text>
      <text x="45.5" y="34" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#88BBDD">
        {data.website}
      </text>
      <line x1="18" y1="37" x2="73" y2="37" stroke="url(#wave-tide-accent-b)" strokeWidth="0.08" />
      <text x="45.5" y="41" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#6699BB">
        〒{data.zipCode}
      </text>
      <text x="45.5" y="44.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#6699BB">
        {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="75" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 2. RIPPLE (波紋) — Concentric ripple rings
// ============================================================
const rippleTemplate: TemplateDefinition = {
  id: 'wave-ripple',
  name: 'RIPPLE',
  nameJa: '波紋',
  category: 'wave',
  designer: 'Ripple Artist',
  description: '波紋の同心円。一滴の水が広がる静かな衝撃。',
  accentColor: '#1ABC9C',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="wave-ripple-bg" cx="72%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#E8FAF6" />
          <stop offset="50%" stopColor="#F0F8F6" />
          <stop offset="100%" stopColor="#E0F0EC" />
        </radialGradient>
        <radialGradient id="wave-ripple-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1ABC9C" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#1ABC9C" stopOpacity="0" />
        </radialGradient>
        <filter id="wave-ripple-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="wave-ripple-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.08" dy="0.12" />
          <feFlood floodColor="#0A5A4A" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#wave-ripple-bg)" />
      <rect width="91" height="55" fill="transparent" filter="url(#wave-ripple-texture)" opacity="0.04" />
      {/* Primary ripple set */}
      <circle cx="68" cy="18" r="18" fill="url(#wave-ripple-glow)" />
      <circle cx="68" cy="18" r="2.5" fill="none" stroke="#1ABC9C" strokeWidth="0.18" opacity="0.45" />
      <circle cx="68" cy="18" r="5" fill="none" stroke="#1ABC9C" strokeWidth="0.14" opacity="0.35" />
      <circle cx="68" cy="18" r="8" fill="none" stroke="#1ABC9C" strokeWidth="0.11" opacity="0.25" />
      <circle cx="68" cy="18" r="11" fill="none" stroke="#1ABC9C" strokeWidth="0.08" opacity="0.18" />
      <circle cx="68" cy="18" r="14.5" fill="none" stroke="#1ABC9C" strokeWidth="0.06" opacity="0.12" />
      <circle cx="68" cy="18" r="18" fill="none" stroke="#1ABC9C" strokeWidth="0.05" opacity="0.08" />
      <circle cx="68" cy="18" r="22" fill="none" stroke="#1ABC9C" strokeWidth="0.04" opacity="0.05" />
      {/* Center drop */}
      <circle cx="68" cy="18" r="0.6" fill="#1ABC9C" opacity="0.5" />
      <circle cx="68" cy="18" r="0.2" fill="#FFFFFF" opacity="0.6" />
      {/* Secondary subtle ripple */}
      <circle cx="15" cy="48" r="5" fill="none" stroke="#1ABC9C" strokeWidth="0.05" opacity="0.08" />
      <circle cx="15" cy="48" r="8" fill="none" stroke="#1ABC9C" strokeWidth="0.04" opacity="0.05" />
      {/* Name */}
      <g filter="url(#wave-ripple-shadow)">
        <text x="10" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6" letterSpacing="0.5" fill="#0A5A4A">
          {data.nameJa}
        </text>
      </g>
      <text x="10" y="28" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.8" letterSpacing="0.4" fill="#1ABC9C">
        {data.nameEn}
      </text>
      <text x="10" y="35" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#4A8A7A">
        {data.titleJa}
      </text>
      <text x="10" y="41" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#4A8A7A">
        {data.companyJa}
      </text>
      {data.logo && <image href={data.logo} x="7" y="44" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="wave-ripple-bg-b" cx="25%" cy="70%" r="70%">
          <stop offset="0%" stopColor="#E8FAF6" />
          <stop offset="100%" stopColor="#E0F0EC" />
        </radialGradient>
        <linearGradient id="wave-ripple-line-b" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1ABC9C" stopOpacity="0" />
          <stop offset="50%" stopColor="#1ABC9C" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#1ABC9C" stopOpacity="0" />
        </linearGradient>
        <filter id="wave-ripple-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="wave-ripple-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.08" dy="0.12" />
          <feFlood floodColor="#0A5A4A" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#wave-ripple-bg-b)" />
      <rect width="91" height="55" fill="transparent" filter="url(#wave-ripple-texture-b)" opacity="0.04" />
      {/* Background ripples */}
      <circle cx="75" cy="42" r="6" fill="none" stroke="#1ABC9C" strokeWidth="0.06" opacity="0.1" />
      <circle cx="75" cy="42" r="10" fill="none" stroke="#1ABC9C" strokeWidth="0.05" opacity="0.07" />
      <circle cx="75" cy="42" r="14" fill="none" stroke="#1ABC9C" strokeWidth="0.04" opacity="0.05" />
      <circle cx="12" cy="8" r="4" fill="none" stroke="#1ABC9C" strokeWidth="0.05" opacity="0.06" />
      <circle cx="12" cy="8" r="7" fill="none" stroke="#1ABC9C" strokeWidth="0.04" opacity="0.04" />
      {/* Company */}
      <g filter="url(#wave-ripple-shadow-b)">
        <text x="45.5" y="11" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#0A5A4A">
          {data.companyJa}
        </text>
      </g>
      <text x="45.5" y="15" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.3" fill="#1ABC9C">
        {data.companyEn}
      </text>
      <text x="45.5" y="19" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#4A8A7A" opacity="0.8">
        {data.titleJa}
      </text>
      <line x1="18" y1="21.5" x2="73" y2="21.5" stroke="url(#wave-ripple-line-b)" strokeWidth="0.08" />
      <text x="45.5" y="26" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#2A8A7A">
        {data.tel}
      </text>
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#2A8A7A">
        {data.email}
      </text>
      <text x="45.5" y="34" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#2A8A7A">
        {data.website}
      </text>
      <line x1="18" y1="37" x2="73" y2="37" stroke="url(#wave-ripple-line-b)" strokeWidth="0.08" />
      <text x="45.5" y="41" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#4A8A7A">
        〒{data.zipCode}
      </text>
      <text x="45.5" y="44.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#4A8A7A">
        {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="75" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 3. CURRENT (流) — Ocean current, flowing water streams
// ============================================================
const currentTemplate: TemplateDefinition = {
  id: 'wave-current',
  name: 'CURRENT',
  nameJa: '流',
  category: 'wave',
  designer: 'Flow Designer',
  description: '海流の道筋。目に見えない力が導く水の旅路。',
  accentColor: '#0A3D62',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="wave-current-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F4F8FC" />
          <stop offset="50%" stopColor="#EAF0F6" />
          <stop offset="100%" stopColor="#E0E8F0" />
        </linearGradient>
        <linearGradient id="wave-current-flow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0A3D62" stopOpacity="0" />
          <stop offset="30%" stopColor="#0A3D62" stopOpacity="0.15" />
          <stop offset="70%" stopColor="#2A6A90" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#2A6A90" stopOpacity="0" />
        </linearGradient>
        <filter id="wave-current-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="wave-current-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.08" dy="0.12" />
          <feFlood floodColor="#0A3D62" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#wave-current-bg)" />
      <rect width="91" height="55" fill="transparent" filter="url(#wave-current-texture)" opacity="0.04" />
      {/* Flowing current lines - top cluster */}
      <path d="M0,8 Q20,5 40,10 Q60,15 80,8 Q88,6 91,7" fill="none" stroke="url(#wave-current-flow)" strokeWidth="0.2" />
      <path d="M0,11 Q25,8 45,13 Q65,18 85,11 Q90,9 91,10" fill="none" stroke="url(#wave-current-flow)" strokeWidth="0.18" />
      <path d="M0,14 Q20,11 40,16 Q55,20 75,14 Q88,10 91,13" fill="none" stroke="url(#wave-current-flow)" strokeWidth="0.15" />
      {/* Flowing current lines - bottom cluster */}
      <path d="M0,40 Q15,37 35,42 Q55,47 75,40 Q88,36 91,39" fill="none" stroke="url(#wave-current-flow)" strokeWidth="0.2" />
      <path d="M0,43 Q20,40 40,45 Q60,50 80,43 Q90,40 91,42" fill="none" stroke="url(#wave-current-flow)" strokeWidth="0.18" />
      <path d="M0,46 Q25,43 45,48 Q65,52 85,46 Q90,44 91,45" fill="none" stroke="url(#wave-current-flow)" strokeWidth="0.15" />
      <path d="M0,49 Q20,46 40,50 Q55,53 75,49 Q88,46 91,48" fill="none" stroke="url(#wave-current-flow)" strokeWidth="0.12" />
      {/* Small current dots */}
      <circle cx="30" cy="9" r="0.15" fill="#0A3D62" opacity="0.1" />
      <circle cx="60" cy="13" r="0.12" fill="#0A3D62" opacity="0.08" />
      <circle cx="50" cy="44" r="0.15" fill="#0A3D62" opacity="0.1" />
      {/* Name */}
      <g filter="url(#wave-current-shadow)">
        <text x="10" y="27" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6" letterSpacing="0.5" fill="#0A3D62">
          {data.nameJa}
        </text>
      </g>
      <text x="10" y="33" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.8" letterSpacing="0.4" fill="#2A6A90">
        {data.nameEn}
      </text>
      <text x="80" y="27" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#4A8AAA">
        {data.titleJa}
      </text>
      <text x="80" y="33" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#4A8AAA">
        {data.companyJa}
      </text>
      {data.logo && <image href={data.logo} x="75" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="wave-current-bg-b" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F4F8FC" />
          <stop offset="100%" stopColor="#E0E8F0" />
        </linearGradient>
        <linearGradient id="wave-current-line-b" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0A3D62" stopOpacity="0" />
          <stop offset="50%" stopColor="#0A3D62" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#0A3D62" stopOpacity="0" />
        </linearGradient>
        <filter id="wave-current-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="wave-current-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.08" dy="0.12" />
          <feFlood floodColor="#0A3D62" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#wave-current-bg-b)" />
      <rect width="91" height="55" fill="transparent" filter="url(#wave-current-texture-b)" opacity="0.04" />
      {/* Subtle currents */}
      <path d="M0,4 Q20,2 40,6 Q60,10 80,4 Q90,2 91,3" fill="none" stroke="#0A3D62" strokeWidth="0.1" opacity="0.06" />
      <path d="M0,7 Q25,5 45,9 Q65,12 85,7 Q90,5 91,6" fill="none" stroke="#0A3D62" strokeWidth="0.08" opacity="0.04" />
      <path d="M0,49 Q20,47 40,51 Q60,54 80,49 Q90,47 91,48" fill="none" stroke="#0A3D62" strokeWidth="0.1" opacity="0.06" />
      <path d="M0,52 Q25,50 45,53 Q65,55 85,52 Q90,50 91,51" fill="none" stroke="#0A3D62" strokeWidth="0.08" opacity="0.04" />
      {/* Company */}
      <g filter="url(#wave-current-shadow-b)">
        <text x="45.5" y="11" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#0A3D62">
          {data.companyJa}
        </text>
      </g>
      <text x="45.5" y="15" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.3" fill="#2A6A90">
        {data.companyEn}
      </text>
      <text x="45.5" y="19" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#4A8AAA" opacity="0.8">
        {data.titleJa}
      </text>
      <line x1="18" y1="21.5" x2="73" y2="21.5" stroke="url(#wave-current-line-b)" strokeWidth="0.08" />
      <text x="45.5" y="26" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#2A6A90">
        {data.tel}
      </text>
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#2A6A90">
        {data.email}
      </text>
      <text x="45.5" y="34" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#2A6A90">
        {data.website}
      </text>
      <line x1="18" y1="37" x2="73" y2="37" stroke="url(#wave-current-line-b)" strokeWidth="0.08" />
      <text x="45.5" y="41" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#4A8AAA">
        〒{data.zipCode}
      </text>
      <text x="45.5" y="44.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#4A8AAA">
        {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="75" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 4. TSUNAMI (津) — Powerful wave, dramatic curve
// ============================================================
const tsunamiTemplate: TemplateDefinition = {
  id: 'wave-tsunami',
  name: 'TSUNAMI',
  nameJa: '津',
  category: 'wave',
  designer: 'Wave Master',
  description: '大波の迫力。力強くうねる波頭が白く砕ける。',
  accentColor: '#0A3D62',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="wave-tsunami-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#061E33" />
          <stop offset="40%" stopColor="#0A3D62" />
          <stop offset="100%" stopColor="#0E4872" />
        </linearGradient>
        <linearGradient id="wave-tsunami-wave" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1A6090" />
          <stop offset="100%" stopColor="#0A3D62" />
        </linearGradient>
        <radialGradient id="wave-tsunami-spray" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
        <filter id="wave-tsunami-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="wave-tsunami-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.2" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#wave-tsunami-bg)" />
      <rect width="91" height="55" fill="transparent" filter="url(#wave-tsunami-texture)" opacity="0.08" />
      {/* Great wave */}
      <path d="M-5,38 Q8,12 22,16 Q32,18 38,10 Q43,3 52,7 Q57,9 60,5 Q63,2 66,4 L66,7 Q62,10 58,14 Q52,20 42,22 Q32,24 22,34 Q12,44 -2,46 Z" fill="url(#wave-tsunami-wave)" opacity="0.55" />
      {/* Foam crest curling */}
      <path d="M38,10 Q40,7 43,9 Q45,6 47,8 Q49,5 51,7 Q53,4 55,6 Q57,3 59,5 Q61,3 63,4 Q65,3 66,4" fill="none" stroke="#FFFFFF" strokeWidth="0.25" opacity="0.35" />
      <path d="M36,12 Q38,9 40,11 Q42,8 44,10 Q46,7 48,9" fill="none" stroke="#FFFFFF" strokeWidth="0.15" opacity="0.2" />
      {/* Spray particles */}
      <circle cx="48" cy="8" r="5" fill="url(#wave-tsunami-spray)" />
      <circle cx="50" cy="9" r="0.3" fill="#FFFFFF" opacity="0.2" />
      <circle cx="55" cy="6" r="0.2" fill="#FFFFFF" opacity="0.15" />
      <circle cx="44" cy="7" r="0.25" fill="#FFFFFF" opacity="0.2" />
      <circle cx="59" cy="8" r="0.18" fill="#FFFFFF" opacity="0.15" />
      <circle cx="47" cy="5" r="0.15" fill="#FFFFFF" opacity="0.12" />
      {/* Name */}
      <g filter="url(#wave-tsunami-shadow)">
        <text x="10" y="30" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="6" letterSpacing="0.5" fill="#E0F0FF">
          {data.nameJa}
        </text>
      </g>
      <text x="10" y="36" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.8" letterSpacing="0.4" fill="#88BBDD">
        {data.nameEn}
      </text>
      <text x="10" y="43" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#6699BB">
        {data.titleJa}
      </text>
      <text x="10" y="49" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#6699BB">
        {data.companyJa}
      </text>
      {data.logo && <image href={data.logo} x="75" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="wave-tsunami-bg-b" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#061E33" />
          <stop offset="100%" stopColor="#0A3D62" />
        </linearGradient>
        <linearGradient id="wave-tsunami-line-b" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#88BBDD" stopOpacity="0" />
          <stop offset="50%" stopColor="#88BBDD" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#88BBDD" stopOpacity="0" />
        </linearGradient>
        <filter id="wave-tsunami-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="wave-tsunami-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.15" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#wave-tsunami-bg-b)" />
      <rect width="91" height="55" fill="transparent" filter="url(#wave-tsunami-texture-b)" opacity="0.08" />
      {/* Subtle waves */}
      <path d="M0,46 Q12,42 24,46 Q36,50 48,46 Q60,42 72,46 Q84,50 91,46 L91,55 L0,55 Z" fill="#082D4A" opacity="0.3" />
      <path d="M0,50 Q15,47 30,50 Q45,53 60,50 Q75,47 91,50 L91,55 L0,55 Z" fill="#061E33" opacity="0.25" />
      {/* Spray dots decoration */}
      <circle cx="78" cy="5" r="0.2" fill="#FFFFFF" opacity="0.06" />
      <circle cx="82" cy="7" r="0.15" fill="#FFFFFF" opacity="0.04" />
      <circle cx="75" cy="8" r="0.18" fill="#FFFFFF" opacity="0.05" />
      {/* Company */}
      <g filter="url(#wave-tsunami-shadow-b)">
        <text x="45.5" y="11" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#E0F0FF">
          {data.companyJa}
        </text>
      </g>
      <text x="45.5" y="15" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.3" fill="#88BBDD">
        {data.companyEn}
      </text>
      <text x="45.5" y="19" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#6699BB" opacity="0.8">
        {data.titleJa}
      </text>
      <line x1="18" y1="21.5" x2="73" y2="21.5" stroke="url(#wave-tsunami-line-b)" strokeWidth="0.08" />
      <text x="45.5" y="26" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#88BBDD">
        {data.tel}
      </text>
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#88BBDD">
        {data.email}
      </text>
      <text x="45.5" y="34" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#88BBDD">
        {data.website}
      </text>
      <line x1="18" y1="37" x2="73" y2="37" stroke="url(#wave-tsunami-line-b)" strokeWidth="0.08" />
      <text x="45.5" y="41" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#6699BB">
        〒{data.zipCode}
      </text>
      <text x="45.5" y="44.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#6699BB">
        {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="75" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 5. SINE (弦) — Mathematical sine wave
// ============================================================
const sineTemplate: TemplateDefinition = {
  id: 'wave-sine',
  name: 'SINE',
  nameJa: '弦',
  category: 'wave',
  designer: 'Math Artist',
  description: '正弦波の数学美。規則正しい振動が描く永遠の曲線。',
  accentColor: '#1ABC9C',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="wave-sine-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FCFEFE" />
          <stop offset="100%" stopColor="#F4FAF8" />
        </linearGradient>
        <linearGradient id="wave-sine-wave" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1ABC9C" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#1ABC9C" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#1ABC9C" stopOpacity="0.1" />
        </linearGradient>
        <filter id="wave-sine-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="wave-sine-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.06" dy="0.1" />
          <feFlood floodColor="#0A5A4A" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#wave-sine-bg)" />
      <rect width="91" height="55" fill="transparent" filter="url(#wave-sine-texture)" opacity="0.03" />
      {/* Grid lines */}
      <line x1="0" y1="27.5" x2="91" y2="27.5" stroke="#DDDDDD" strokeWidth="0.08" />
      {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90].map((x, i) => (
        <line key={`wave-sine-gv-${i}`} x1={x} y1="14" x2={x} y2="41" stroke="#EEEEEE" strokeWidth="0.05" />
      ))}
      <line x1="0" y1="14" x2="91" y2="14" stroke="#F0F0F0" strokeWidth="0.04" />
      <line x1="0" y1="41" x2="91" y2="41" stroke="#F0F0F0" strokeWidth="0.04" />
      {/* Primary sine wave */}
      <path d="M0,27.5 C5,19 10,14 15,14 C20,14 25,19 30,27.5 C35,36 40,41 45,41 C50,41 55,36 60,27.5 C65,19 70,14 75,14 C80,14 85,19 91,27.5" fill="none" stroke="url(#wave-sine-wave)" strokeWidth="0.35" />
      {/* Secondary sine wave - phase shifted */}
      <path d="M0,27.5 C5,22 10,18 15,18 C20,18 25,22 30,27.5 C35,33 40,37 45,37 C50,37 55,33 60,27.5 C65,22 70,18 75,18 C80,18 85,22 91,27.5" fill="none" stroke="#1ABC9C" strokeWidth="0.15" opacity="0.2" />
      {/* Tertiary wave */}
      <path d="M0,27.5 C5,24 10,22 15,22 C20,22 25,24 30,27.5 C35,31 40,33 45,33 C50,33 55,31 60,27.5 C65,24 70,22 75,22 C80,22 85,24 91,27.5" fill="none" stroke="#1ABC9C" strokeWidth="0.08" opacity="0.12" />
      {/* Axis labels */}
      <text x="2" y="15" fontFamily="'Space Grotesk', monospace" fontSize="0.8" fill="#BBBBBB">+A</text>
      <text x="2" y="41.8" fontFamily="'Space Grotesk', monospace" fontSize="0.8" fill="#BBBBBB">-A</text>
      {/* Peak markers */}
      <circle cx="15" cy="14" r="0.4" fill="#1ABC9C" opacity="0.3" />
      <circle cx="45" cy="41" r="0.4" fill="#1ABC9C" opacity="0.3" />
      <circle cx="75" cy="14" r="0.4" fill="#1ABC9C" opacity="0.3" />
      {/* Name */}
      <g filter="url(#wave-sine-shadow)">
        <text x="45.5" y="9" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="5.5" letterSpacing="0.5" fill="#0A5A4A">
          {data.nameJa}
        </text>
      </g>
      <text x="45.5" y="48" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.8" letterSpacing="0.4" fill="#1ABC9C">
        {data.nameEn}
      </text>
      <text x="80" y="48" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#6AAA9A">
        {data.companyJa}
      </text>
      {data.logo && <image href={data.logo} x="5" y="44" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="wave-sine-bg-b" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FCFEFE" />
          <stop offset="100%" stopColor="#F4FAF8" />
        </linearGradient>
        <linearGradient id="wave-sine-line-b" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1ABC9C" stopOpacity="0" />
          <stop offset="50%" stopColor="#1ABC9C" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#1ABC9C" stopOpacity="0" />
        </linearGradient>
        <filter id="wave-sine-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="wave-sine-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.06" dy="0.1" />
          <feFlood floodColor="#0A5A4A" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#wave-sine-bg-b)" />
      <rect width="91" height="55" fill="transparent" filter="url(#wave-sine-texture-b)" opacity="0.03" />
      {/* Background sine */}
      <path d="M0,27.5 C5,19 10,14 15,14 C20,14 25,19 30,27.5 C35,36 40,41 45,41 C50,41 55,36 60,27.5 C65,19 70,14 75,14 C80,14 85,19 91,27.5" fill="none" stroke="#1ABC9C" strokeWidth="0.1" opacity="0.08" />
      {/* Grid hint */}
      <line x1="0" y1="27.5" x2="91" y2="27.5" stroke="#EEEEEE" strokeWidth="0.05" />
      {/* Peak dots */}
      <circle cx="15" cy="14" r="0.3" fill="#1ABC9C" opacity="0.08" />
      <circle cx="45" cy="41" r="0.3" fill="#1ABC9C" opacity="0.08" />
      <circle cx="75" cy="14" r="0.3" fill="#1ABC9C" opacity="0.08" />
      {/* Company */}
      <g filter="url(#wave-sine-shadow-b)">
        <text x="45.5" y="11" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#0A5A4A">
          {data.companyJa}
        </text>
      </g>
      <text x="45.5" y="15" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.3" fill="#1ABC9C">
        {data.companyEn}
      </text>
      <text x="45.5" y="19" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#4A8A7A" opacity="0.8">
        {data.titleJa}
      </text>
      <line x1="18" y1="21.5" x2="73" y2="21.5" stroke="url(#wave-sine-line-b)" strokeWidth="0.08" />
      <text x="45.5" y="26" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#2A8A7A">
        {data.tel}
      </text>
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#2A8A7A">
        {data.email}
      </text>
      <text x="45.5" y="34" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#2A8A7A">
        {data.website}
      </text>
      <line x1="18" y1="37" x2="73" y2="37" stroke="url(#wave-sine-line-b)" strokeWidth="0.08" />
      <text x="45.5" y="41" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#4A8A7A">
        〒{data.zipCode}
      </text>
      <text x="45.5" y="44.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#4A8A7A">
        {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="75" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 6. SWELL (膨) — Open ocean swell
// ============================================================
const swellTemplate: TemplateDefinition = {
  id: 'wave-swell',
  name: 'SWELL',
  nameJa: '膨',
  category: 'wave',
  designer: 'Swell Chaser',
  description: '外洋のうねり。長い波長が運ぶ大海原のエネルギー。',
  accentColor: '#1A5580',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="wave-swell-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E0ECF4" />
          <stop offset="50%" stopColor="#E8F0F4" />
          <stop offset="100%" stopColor="#D8E4EC" />
        </linearGradient>
        <linearGradient id="wave-swell-stroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1A5580" stopOpacity="0.05" />
          <stop offset="50%" stopColor="#1A5580" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#1A5580" stopOpacity="0.05" />
        </linearGradient>
        <filter id="wave-swell-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="wave-swell-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.08" dy="0.12" />
          <feFlood floodColor="#0A3D62" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#wave-swell-bg)" />
      <rect width="91" height="55" fill="transparent" filter="url(#wave-swell-texture)" opacity="0.04" />
      {/* Long period swell curves */}
      <path d="M0,30 Q22.75,20 45.5,30 Q68.25,40 91,30" fill="none" stroke="url(#wave-swell-stroke)" strokeWidth="0.25" />
      <path d="M0,34 Q22.75,24 45.5,34 Q68.25,44 91,34" fill="none" stroke="url(#wave-swell-stroke)" strokeWidth="0.22" />
      <path d="M0,38 Q22.75,28 45.5,38 Q68.25,48 91,38" fill="none" stroke="url(#wave-swell-stroke)" strokeWidth="0.18" />
      <path d="M0,42 Q22.75,32 45.5,42 Q68.25,52 91,42" fill="none" stroke="url(#wave-swell-stroke)" strokeWidth="0.15" />
      <path d="M0,46 Q22.75,36 45.5,46 Q68.25,55 91,46" fill="none" stroke="url(#wave-swell-stroke)" strokeWidth="0.12" />
      {/* Highlight line */}
      <path d="M0,30 Q22.75,20 45.5,30 Q68.25,40 91,30" fill="none" stroke="#FFFFFF" strokeWidth="0.1" opacity="0.3" />
      {/* Name */}
      <g filter="url(#wave-swell-shadow)">
        <text x="12" y="16" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6" letterSpacing="0.5" fill="#0A3D62">
          {data.nameJa}
        </text>
      </g>
      <text x="12" y="22" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.8" letterSpacing="0.4" fill="#1A5580">
        {data.nameEn}
      </text>
      <text x="12" y="28" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#4A7A9A">
        {data.titleJa}
      </text>
      {data.logo && <image href={data.logo} x="75" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="wave-swell-bg-b" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E0ECF4" />
          <stop offset="100%" stopColor="#D8E4EC" />
        </linearGradient>
        <linearGradient id="wave-swell-line-b" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1A5580" stopOpacity="0" />
          <stop offset="50%" stopColor="#1A5580" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#1A5580" stopOpacity="0" />
        </linearGradient>
        <filter id="wave-swell-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="wave-swell-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.08" dy="0.12" />
          <feFlood floodColor="#0A3D62" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#wave-swell-bg-b)" />
      <rect width="91" height="55" fill="transparent" filter="url(#wave-swell-texture-b)" opacity="0.04" />
      {/* Subtle swell lines */}
      <path d="M0,43 Q22.75,36 45.5,43 Q68.25,50 91,43" fill="none" stroke="#1A5580" strokeWidth="0.1" opacity="0.08" />
      <path d="M0,47 Q22.75,40 45.5,47 Q68.25,54 91,47" fill="none" stroke="#1A5580" strokeWidth="0.08" opacity="0.06" />
      <path d="M0,5 Q22.75,2 45.5,5 Q68.25,8 91,5" fill="none" stroke="#1A5580" strokeWidth="0.08" opacity="0.05" />
      {/* Company */}
      <g filter="url(#wave-swell-shadow-b)">
        <text x="45.5" y="11" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#0A3D62">
          {data.companyJa}
        </text>
      </g>
      <text x="45.5" y="15" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.3" fill="#1A5580">
        {data.companyEn}
      </text>
      <text x="45.5" y="19" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#4A7A9A" opacity="0.8">
        {data.titleJa}
      </text>
      <line x1="18" y1="21.5" x2="73" y2="21.5" stroke="url(#wave-swell-line-b)" strokeWidth="0.08" />
      <text x="45.5" y="26" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#2A6A88">
        {data.tel}
      </text>
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#2A6A88">
        {data.email}
      </text>
      <text x="45.5" y="34" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#2A6A88">
        {data.website}
      </text>
      <line x1="18" y1="37" x2="73" y2="37" stroke="url(#wave-swell-line-b)" strokeWidth="0.08" />
      <text x="45.5" y="41" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#4A7A9A">
        〒{data.zipCode}
      </text>
      <text x="45.5" y="44.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#4A7A9A">
        {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="75" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 7. CASCADE (滝) — Waterfall, vertical flow
// ============================================================
const cascadeTemplate: TemplateDefinition = {
  id: 'wave-cascade',
  name: 'CASCADE',
  nameJa: '滝',
  category: 'wave',
  designer: 'Cascade Designer',
  description: '滝の垂直美。落下する水が白い飛沫を散らす。',
  accentColor: '#1ABC9C',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="wave-cascade-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8FAF6" />
          <stop offset="100%" stopColor="#F0F8F6" />
        </linearGradient>
        <linearGradient id="wave-cascade-fall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1ABC9C" stopOpacity="0.05" />
          <stop offset="50%" stopColor="#1ABC9C" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#1ABC9C" stopOpacity="0.05" />
        </linearGradient>
        <radialGradient id="wave-cascade-mist" cx="50%" cy="90%" r="40%">
          <stop offset="0%" stopColor="#1ABC9C" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#1ABC9C" stopOpacity="0" />
        </radialGradient>
        <filter id="wave-cascade-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="wave-cascade-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.08" dy="0.12" />
          <feFlood floodColor="#0A5A4A" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#wave-cascade-bg)" />
      <rect width="91" height="55" fill="transparent" filter="url(#wave-cascade-texture)" opacity="0.04" />
      {/* Vertical cascade lines */}
      <path d="M71,0 Q72.5,14 70,28 Q68.5,42 71,55" fill="none" stroke="url(#wave-cascade-fall)" strokeWidth="0.2" />
      <path d="M74,0 Q73,12 75.5,24 Q77,38 74,55" fill="none" stroke="url(#wave-cascade-fall)" strokeWidth="0.18" />
      <path d="M77,0 Q78.5,10 76,22 Q74.5,36 77,55" fill="none" stroke="url(#wave-cascade-fall)" strokeWidth="0.2" />
      <path d="M80,0 Q79,14 81.5,28 Q83,42 80,55" fill="none" stroke="url(#wave-cascade-fall)" strokeWidth="0.18" />
      <path d="M83,0 Q84.5,12 82,25 Q80.5,38 83,55" fill="none" stroke="url(#wave-cascade-fall)" strokeWidth="0.15" />
      {/* Mist at bottom */}
      <ellipse cx="77" cy="50" rx="12" ry="4" fill="url(#wave-cascade-mist)" />
      {/* Splash drops */}
      <circle cx="69" cy="48" r="0.3" fill="#1ABC9C" opacity="0.15" />
      <circle cx="82" cy="46" r="0.2" fill="#1ABC9C" opacity="0.12" />
      <circle cx="74" cy="49" r="0.25" fill="#1ABC9C" opacity="0.14" />
      <circle cx="86" cy="48" r="0.18" fill="#1ABC9C" opacity="0.1" />
      {/* Name */}
      <g filter="url(#wave-cascade-shadow)">
        <text x="10" y="18" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6" letterSpacing="0.5" fill="#0A5A4A">
          {data.nameJa}
        </text>
      </g>
      <text x="10" y="24" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.8" letterSpacing="0.4" fill="#1ABC9C">
        {data.nameEn}
      </text>
      <text x="10" y="32" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#4A8A7A">
        {data.titleJa}
      </text>
      <text x="10" y="38" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#4A8A7A">
        {data.companyJa}
      </text>
      {data.logo && <image href={data.logo} x="7" y="43" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="wave-cascade-bg-b" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8FAF6" />
          <stop offset="100%" stopColor="#F0F8F6" />
        </linearGradient>
        <linearGradient id="wave-cascade-line-b" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1ABC9C" stopOpacity="0" />
          <stop offset="50%" stopColor="#1ABC9C" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#1ABC9C" stopOpacity="0" />
        </linearGradient>
        <filter id="wave-cascade-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="wave-cascade-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.08" dy="0.12" />
          <feFlood floodColor="#0A5A4A" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#wave-cascade-bg-b)" />
      <rect width="91" height="55" fill="transparent" filter="url(#wave-cascade-texture-b)" opacity="0.04" />
      {/* Subtle cascade lines on left */}
      <path d="M7,0 Q6,16 8,32 Q9.5,44 7,55" fill="none" stroke="#1ABC9C" strokeWidth="0.08" opacity="0.08" />
      <path d="M10,0 Q11.5,14 9,28 Q7.5,42 10,55" fill="none" stroke="#1ABC9C" strokeWidth="0.08" opacity="0.06" />
      <path d="M13,0 Q12,16 14,32 Q15.5,44 13,55" fill="none" stroke="#1ABC9C" strokeWidth="0.06" opacity="0.05" />
      {/* Mist hints */}
      <circle cx="9" cy="50" r="0.2" fill="#1ABC9C" opacity="0.06" />
      <circle cx="12" cy="49" r="0.15" fill="#1ABC9C" opacity="0.05" />
      {/* Company */}
      <g filter="url(#wave-cascade-shadow-b)">
        <text x="45.5" y="11" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#0A5A4A">
          {data.companyJa}
        </text>
      </g>
      <text x="45.5" y="15" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.3" fill="#1ABC9C">
        {data.companyEn}
      </text>
      <text x="45.5" y="19" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#4A8A7A" opacity="0.8">
        {data.titleJa}
      </text>
      <line x1="18" y1="21.5" x2="73" y2="21.5" stroke="url(#wave-cascade-line-b)" strokeWidth="0.08" />
      <text x="45.5" y="26" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#2A8A7A">
        {data.tel}
      </text>
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#2A8A7A">
        {data.email}
      </text>
      <text x="45.5" y="34" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#2A8A7A">
        {data.website}
      </text>
      <line x1="18" y1="37" x2="73" y2="37" stroke="url(#wave-cascade-line-b)" strokeWidth="0.08" />
      <text x="45.5" y="41" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#4A8A7A">
        〒{data.zipCode}
      </text>
      <text x="45.5" y="44.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#4A8A7A">
        {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="75" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 8. SURF (浪) — Beach surf, breaking waves
// ============================================================
const surfTemplate: TemplateDefinition = {
  id: 'wave-surf',
  name: 'SURF',
  nameJa: '浪',
  category: 'wave',
  designer: 'Surf Designer',
  description: '磯の白波。波が砕ける瞬間の躍動感。',
  accentColor: '#0A3D62',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="wave-surf-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1A6090" />
          <stop offset="40%" stopColor="#2A7AAE" />
          <stop offset="55%" stopColor="#C2B280" />
          <stop offset="100%" stopColor="#D4C494" />
        </linearGradient>
        <linearGradient id="wave-surf-foam" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset="20%" stopColor="#FFFFFF" stopOpacity="0.4" />
          <stop offset="80%" stopColor="#FFFFFF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
        <filter id="wave-surf-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="wave-surf-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.12" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#wave-surf-bg)" />
      <rect width="91" height="55" fill="transparent" filter="url(#wave-surf-texture)" opacity="0.06" />
      {/* Breaking wave with foam */}
      <path d="M0,24 Q10,19 20,21 Q30,23 40,19 Q50,15 60,17 Q70,19 80,16 Q85,15 91,17 L91,28 Q80,26 70,28 Q60,30 50,26 Q40,22 30,25 Q20,28 10,26 Q5,25 0,26 Z" fill="#1A5580" opacity="0.45" />
      {/* Foam line */}
      <path d="M0,24 Q10,19 20,21 Q30,23 40,19 Q50,15 60,17 Q70,19 80,16 Q85,15 91,17" fill="none" stroke="url(#wave-surf-foam)" strokeWidth="0.5" />
      {/* Foam scatter */}
      <circle cx="20" cy="22" r="0.5" fill="#FFFFFF" opacity="0.25" />
      <circle cx="35" cy="20" r="0.35" fill="#FFFFFF" opacity="0.2" />
      <circle cx="50" cy="17" r="0.4" fill="#FFFFFF" opacity="0.25" />
      <circle cx="65" cy="18" r="0.3" fill="#FFFFFF" opacity="0.2" />
      <circle cx="78" cy="17" r="0.35" fill="#FFFFFF" opacity="0.22" />
      {/* Wet sand reflection */}
      <rect x="0" y="28" width="91" height="2" fill="#FFFFFF" opacity="0.04" />
      {/* Name */}
      <g filter="url(#wave-surf-shadow)">
        <text x="10" y="10" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="5.5" letterSpacing="0.5" fill="#E0F0FF">
          {data.nameJa}
        </text>
      </g>
      <text x="10" y="15" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.8" letterSpacing="0.4" fill="#AAD0E8">
        {data.nameEn}
      </text>
      <text x="10" y="38" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.6" fill="#5A4A2A">
        {data.titleJa}
      </text>
      <text x="10" y="44" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.6" fill="#5A4A2A">
        {data.companyJa}
      </text>
      {data.logo && <image href={data.logo} x="75" y="38" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="wave-surf-bg-b" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C2B280" />
          <stop offset="100%" stopColor="#D4C494" />
        </linearGradient>
        <linearGradient id="wave-surf-line-b" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8A7A5A" stopOpacity="0" />
          <stop offset="50%" stopColor="#8A7A5A" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#8A7A5A" stopOpacity="0" />
        </linearGradient>
        <filter id="wave-surf-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="wave-surf-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#3A2A10" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#wave-surf-bg-b)" />
      <rect width="91" height="55" fill="transparent" filter="url(#wave-surf-texture-b)" opacity="0.06" />
      {/* Wave wash at top */}
      <path d="M0,0 L91,0 L91,8 Q80,6 70,8 Q60,10 50,7 Q40,4 30,7 Q20,10 10,7 Q5,6 0,8 Z" fill="#2A6A90" opacity="0.2" />
      <path d="M0,8 Q10,6 20,8 Q30,10 40,7 Q50,4 60,7 Q70,10 80,7 Q88,5 91,7" fill="none" stroke="#FFFFFF" strokeWidth="0.15" opacity="0.15" />
      {/* Sand texture dots */}
      <circle cx="25" cy="30" r="0.1" fill="#8A7A5A" opacity="0.08" />
      <circle cx="60" cy="35" r="0.08" fill="#8A7A5A" opacity="0.06" />
      <circle cx="40" cy="42" r="0.1" fill="#8A7A5A" opacity="0.08" />
      {/* Company */}
      <g filter="url(#wave-surf-shadow-b)">
        <text x="45.5" y="16" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#3A2A10">
          {data.companyJa}
        </text>
      </g>
      <text x="45.5" y="20" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.3" fill="#5A4A2A">
        {data.companyEn}
      </text>
      <text x="45.5" y="24" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#6A5A3A" opacity="0.8">
        {data.titleJa}
      </text>
      <line x1="18" y1="26.5" x2="73" y2="26.5" stroke="url(#wave-surf-line-b)" strokeWidth="0.08" />
      <text x="45.5" y="31" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#5A4A2A">
        {data.tel}
      </text>
      <text x="45.5" y="35" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#5A4A2A">
        {data.email}
      </text>
      <text x="45.5" y="39" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#5A4A2A">
        {data.website}
      </text>
      <line x1="18" y1="42" x2="73" y2="42" stroke="url(#wave-surf-line-b)" strokeWidth="0.08" />
      <text x="45.5" y="46" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#6A5A3A">
        〒{data.zipCode}
      </text>
      <text x="45.5" y="49.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#6A5A3A">
        {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="75" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 9. EDDY (渦) — Whirlpool, spiral vortex
// ============================================================
const eddyTemplate: TemplateDefinition = {
  id: 'wave-eddy',
  name: 'EDDY',
  nameJa: '渦',
  category: 'wave',
  designer: 'Vortex Designer',
  description: '渦の引力。螺旋が吸い込む深淵の美しさ。',
  accentColor: '#0A3D62',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="wave-eddy-bg" cx="72%" cy="55%" r="50%">
          <stop offset="0%" stopColor="#E8F0F8" />
          <stop offset="50%" stopColor="#F0F4F8" />
          <stop offset="100%" stopColor="#E4ECF4" />
        </radialGradient>
        <radialGradient id="wave-eddy-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0A3D62" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#0A3D62" stopOpacity="0" />
        </radialGradient>
        <filter id="wave-eddy-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="wave-eddy-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.08" dy="0.12" />
          <feFlood floodColor="#0A3D62" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#wave-eddy-bg)" />
      <rect width="91" height="55" fill="transparent" filter="url(#wave-eddy-texture)" opacity="0.04" />
      {/* Spiral vortex */}
      <circle cx="68" cy="30" r="15" fill="url(#wave-eddy-glow)" />
      <path d="M70,30 C70,26 66,24 63,24 C58,24 55,28 55,32 C55,38 60,42 66,42 C74,42 78,36 78,30 C78,22 72,17 65,17 C55,17 50,24 50,32 C50,43 58,48 68,48" fill="none" stroke="#0A3D62" strokeWidth="0.15" opacity="0.18" />
      <path d="M70,30 C70,28 68,26 66,26 C63,26 61,28 61,31 C61,35 64,38 68,38 C73,38 76,34 76,30 C76,24 71,20 66,20 C59,20 55,25 55,32 C55,40 60,45 68,45" fill="none" stroke="#0A3D62" strokeWidth="0.1" opacity="0.12" />
      <path d="M68,30 C68,29 67,28 66,28 C64.5,28 63.5,29.5 63.5,31 C63.5,33 65,35 67,35 C70,35 72,33 72,30 C72,27 70,24 67,24 C63,24 60,27 60,31" fill="none" stroke="#0A3D62" strokeWidth="0.08" opacity="0.1" />
      {/* Center dot */}
      <circle cx="67" cy="30" r="0.5" fill="#0A3D62" opacity="0.2" />
      <circle cx="67" cy="30" r="0.15" fill="#0A3D62" opacity="0.35" />
      {/* Name */}
      <g filter="url(#wave-eddy-shadow)">
        <text x="10" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6" letterSpacing="0.5" fill="#0A3D62">
          {data.nameJa}
        </text>
      </g>
      <text x="10" y="26" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.8" letterSpacing="0.4" fill="#2A6A90">
        {data.nameEn}
      </text>
      <text x="10" y="34" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#4A8AAA">
        {data.titleJa}
      </text>
      <text x="10" y="40" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#4A8AAA">
        {data.companyJa}
      </text>
      {data.logo && <image href={data.logo} x="7" y="44" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="wave-eddy-bg-b" cx="25%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#E8F0F8" />
          <stop offset="100%" stopColor="#E4ECF4" />
        </radialGradient>
        <linearGradient id="wave-eddy-line-b" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0A3D62" stopOpacity="0" />
          <stop offset="50%" stopColor="#0A3D62" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#0A3D62" stopOpacity="0" />
        </linearGradient>
        <filter id="wave-eddy-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="wave-eddy-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.08" dy="0.12" />
          <feFlood floodColor="#0A3D62" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#wave-eddy-bg-b)" />
      <rect width="91" height="55" fill="transparent" filter="url(#wave-eddy-texture-b)" opacity="0.04" />
      {/* Faint spiral */}
      <path d="M25,27 C25,24 22,22 20,22 C16,22 14,25 14,28 C14,33 18,36 22,36 C28,36 31,32 31,27 C31,21 26,17 21,17 C14,17 10,22 10,28 C10,36 16,41 24,41" fill="none" stroke="#0A3D62" strokeWidth="0.06" opacity="0.06" />
      <circle cx="22" cy="28" r="0.3" fill="#0A3D62" opacity="0.06" />
      {/* Secondary spiral hint */}
      <path d="M78,42 C78,40 76,39 75,39 C73,39 72,40.5 72,42 C72,44 74,46 76,46 C79,46 81,44 81,42 C81,39 79,37 76,37" fill="none" stroke="#0A3D62" strokeWidth="0.04" opacity="0.04" />
      {/* Company */}
      <g filter="url(#wave-eddy-shadow-b)">
        <text x="45.5" y="11" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#0A3D62">
          {data.companyJa}
        </text>
      </g>
      <text x="45.5" y="15" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.3" fill="#2A6A90">
        {data.companyEn}
      </text>
      <text x="45.5" y="19" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#4A8AAA" opacity="0.8">
        {data.titleJa}
      </text>
      <line x1="18" y1="21.5" x2="73" y2="21.5" stroke="url(#wave-eddy-line-b)" strokeWidth="0.08" />
      <text x="45.5" y="26" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#2A6A90">
        {data.tel}
      </text>
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#2A6A90">
        {data.email}
      </text>
      <text x="45.5" y="34" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#2A6A90">
        {data.website}
      </text>
      <line x1="18" y1="37" x2="73" y2="37" stroke="url(#wave-eddy-line-b)" strokeWidth="0.08" />
      <text x="45.5" y="41" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#4A8AAA">
        〒{data.zipCode}
      </text>
      <text x="45.5" y="44.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#4A8AAA">
        {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="75" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 10. CALM (凪) — Dead calm, mirror water
// ============================================================
const calmTemplate: TemplateDefinition = {
  id: 'wave-calm',
  name: 'CALM',
  nameJa: '凪',
  category: 'wave',
  designer: 'Calm Designer',
  description: '凪の静寂。鏡のように澄んだ水面に映る世界。',
  accentColor: '#0A3D62',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="wave-calm-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D0DDE8" />
          <stop offset="44%" stopColor="#E4ECF2" />
          <stop offset="50%" stopColor="#C8D8E4" />
          <stop offset="56%" stopColor="#D0DEE8" />
          <stop offset="100%" stopColor="#B8CCD8" />
        </linearGradient>
        <linearGradient id="wave-calm-horizon" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0A3D62" stopOpacity="0" />
          <stop offset="20%" stopColor="#0A3D62" stopOpacity="0.25" />
          <stop offset="80%" stopColor="#0A3D62" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#0A3D62" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="wave-calm-sun" cx="50%" cy="45%" r="30%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
        <filter id="wave-calm-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="wave-calm-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.06" dy="0.1" />
          <feFlood floodColor="#0A3D62" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#wave-calm-sky)" />
      <rect width="91" height="55" fill="url(#wave-calm-sun)" />
      <rect width="91" height="55" fill="transparent" filter="url(#wave-calm-texture)" opacity="0.03" />
      {/* Perfect horizon line */}
      <line x1="0" y1="27.5" x2="91" y2="27.5" stroke="url(#wave-calm-horizon)" strokeWidth="0.12" />
      {/* Subtle ripples on water surface */}
      <line x1="20" y1="30" x2="30" y2="30" stroke="#0A3D62" strokeWidth="0.03" opacity="0.06" />
      <line x1="50" y1="31" x2="62" y2="31" stroke="#0A3D62" strokeWidth="0.03" opacity="0.05" />
      <line x1="35" y1="33" x2="42" y2="33" stroke="#0A3D62" strokeWidth="0.02" opacity="0.04" />
      {/* Name above horizon */}
      <g filter="url(#wave-calm-shadow)">
        <text x="45.5" y="20" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="5.5" letterSpacing="0.8" fill="#0A3D62">
          {data.nameJa}
        </text>
      </g>
      {/* Reflection below horizon */}
      <text x="45.5" y="37" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="5.5" letterSpacing="0.8" fill="#0A3D62" opacity="0.06" transform="translate(0,0) scale(1,-1) translate(0,-64)">
        {data.nameJa}
      </text>
      <text x="45.5" y="24" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.7" letterSpacing="0.4" fill="#4A7A9A">
        {data.nameEn}
      </text>
      <text x="45.5" y="44" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#6A8AA0">
        {data.companyJa}
      </text>
      <text x="45.5" y="48" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#6A8AA0">
        {data.titleJa}
      </text>
      {data.logo && <image href={data.logo} x="5" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="wave-calm-sky-b" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D0DDE8" />
          <stop offset="44%" stopColor="#E4ECF2" />
          <stop offset="50%" stopColor="#C8D8E4" />
          <stop offset="56%" stopColor="#D0DEE8" />
          <stop offset="100%" stopColor="#B8CCD8" />
        </linearGradient>
        <linearGradient id="wave-calm-horizon-b" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0A3D62" stopOpacity="0" />
          <stop offset="20%" stopColor="#0A3D62" stopOpacity="0.2" />
          <stop offset="80%" stopColor="#0A3D62" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#0A3D62" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="wave-calm-line-b" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#4A7A9A" stopOpacity="0" />
          <stop offset="50%" stopColor="#4A7A9A" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#4A7A9A" stopOpacity="0" />
        </linearGradient>
        <filter id="wave-calm-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="wave-calm-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.06" dy="0.1" />
          <feFlood floodColor="#0A3D62" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#wave-calm-sky-b)" />
      <rect width="91" height="55" fill="transparent" filter="url(#wave-calm-texture-b)" opacity="0.03" />
      {/* Horizon */}
      <line x1="0" y1="27.5" x2="91" y2="27.5" stroke="url(#wave-calm-horizon-b)" strokeWidth="0.08" />
      {/* Subtle water ripples */}
      <line x1="15" y1="30" x2="25" y2="30" stroke="#0A3D62" strokeWidth="0.02" opacity="0.04" />
      <line x1="55" y1="32" x2="68" y2="32" stroke="#0A3D62" strokeWidth="0.02" opacity="0.03" />
      <line x1="35" y1="29" x2="48" y2="29" stroke="#0A3D62" strokeWidth="0.02" opacity="0.04" />
      {/* Company */}
      <g filter="url(#wave-calm-shadow-b)">
        <text x="45.5" y="10" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#0A3D62">
          {data.companyJa}
        </text>
      </g>
      <text x="45.5" y="14" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.5" letterSpacing="0.3" fill="#4A7A9A">
        {data.companyEn}
      </text>
      <text x="45.5" y="21" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.5" fill="#4A7A9A">
        {data.tel}
      </text>
      <text x="45.5" y="33" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.5" fill="#6A8AA0">
        {data.email}
      </text>
      <text x="45.5" y="37" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.5" fill="#6A8AA0">
        {data.website}
      </text>
      <line x1="18" y1="40" x2="73" y2="40" stroke="url(#wave-calm-line-b)" strokeWidth="0.06" />
      <text x="45.5" y="44" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#8AAABB">
        〒{data.zipCode}
      </text>
      <text x="45.5" y="47.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#8AAABB">
        {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="75" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

export const waveTemplates: TemplateDefinition[] = [
  tideTemplate,
  rippleTemplate,
  currentTemplate,
  tsunamiTemplate,
  sineTemplate,
  swellTemplate,
  cascadeTemplate,
  surfTemplate,
  eddyTemplate,
  calmTemplate,
];
