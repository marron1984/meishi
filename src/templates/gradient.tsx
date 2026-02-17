import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. DAWN (曙) — Warm sunrise gradient
// Soft peach to golden amber, horizontal sunrise feel
// ============================================================
const dawnTemplate: TemplateDefinition = {
  id: 'gradient-dawn',
  name: 'DAWN',
  nameJa: '曙',
  category: 'gradient',
  designer: 'Gradient Series',
  description: '夜明けの空。桃色から琥珀へ、温かな光の移ろい。',
  accentColor: '#F4845F',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="gd-dawn-f-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FDE8D0" />
          <stop offset="20%" stopColor="#F9C9A3" />
          <stop offset="45%" stopColor="#F4A47A" />
          <stop offset="70%" stopColor="#F4845F" />
          <stop offset="100%" stopColor="#D64545" />
        </linearGradient>
        <linearGradient id="gd-dawn-f-accent" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="gd-dawn-f-sun" cx="0.15" cy="0.2" r="0.45">
          <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#FDE68A" stopOpacity="0" />
        </radialGradient>
        <filter id="gd-dawn-f-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="gd-dawn-f-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#gd-dawn-f-bg)" />
      <rect width="91" height="55" fill="url(#gd-dawn-f-sun)" />
      <rect x="0" y="0" width="91" height="18" fill="url(#gd-dawn-f-accent)" />
      <rect width="91" height="55" filter="url(#gd-dawn-f-grain)" opacity="0.03" fill="transparent" />
      {/* Horizon glow lines */}
      <line x1="0" y1="42" x2="91" y2="42" stroke="rgba(253,230,138,0.12)" strokeWidth="0.3" />
      <line x1="0" y1="44" x2="91" y2="44" stroke="rgba(253,230,138,0.06)" strokeWidth="0.5" />
      {/* Subtle cloud wisps */}
      <ellipse cx="65" cy="10" rx="12" ry="2" fill="rgba(255,255,255,0.08)" />
      <ellipse cx="30" cy="7" rx="8" ry="1.5" fill="rgba(255,255,255,0.06)" />
      {data.logo && <image href={data.logo} x="73" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <g filter="url(#gd-dawn-f-shadow)">
        <text x="10" y="24" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6.5" letterSpacing="0.8" fill="#ffffff">{data.nameJa}</text>
      </g>
      <text x="10" y="30.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.4" fill="rgba(255,255,255,0.85)">{data.nameEn}</text>
      <line x1="10" y1="34" x2="50" y2="34" stroke="rgba(255,255,255,0.35)" strokeWidth="0.2" />
      <text x="10" y="39" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="rgba(255,255,255,0.7)">{data.titleJa}</text>
      <text x="10" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="rgba(255,255,255,0.6)">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="gd-dawn-b-bg" x1="1" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#FDE8D0" />
          <stop offset="25%" stopColor="#F9C9A3" />
          <stop offset="50%" stopColor="#F4845F" />
          <stop offset="100%" stopColor="#D64545" />
        </linearGradient>
        <radialGradient id="gd-dawn-b-glow" cx="0.8" cy="0.8" r="0.5">
          <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#FDE68A" stopOpacity="0" />
        </radialGradient>
        <filter id="gd-dawn-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#gd-dawn-b-bg)" />
      <rect width="91" height="55" fill="url(#gd-dawn-b-glow)" />
      <rect width="91" height="55" filter="url(#gd-dawn-b-grain)" opacity="0.03" fill="transparent" />
      <ellipse cx="20" cy="48" rx="15" ry="2" fill="rgba(255,255,255,0.06)" />
      <circle cx="12" cy="8" r="3" fill="rgba(253,230,138,0.08)" />
      {data.logo && <image href={data.logo} x="10" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="81" y="11" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" fill="#ffffff">{data.companyJa}</text>
      <text x="81" y="15.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(255,255,255,0.7)">{data.companyEn}</text>
      <text x="81" y="20" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="rgba(255,255,255,0.55)">{data.titleJa}</text>
      <line x1="40" y1="23" x2="81" y2="23" stroke="rgba(255,255,255,0.25)" strokeWidth="0.15" />
      <text x="81" y="28.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="rgba(255,255,255,0.85)">{data.tel}</text>
      <text x="81" y="32.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="rgba(255,255,255,0.85)">{data.email}</text>
      <text x="81" y="36.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="rgba(255,255,255,0.85)">{data.website}</text>
      <line x1="40" y1="40" x2="81" y2="40" stroke="rgba(255,255,255,0.15)" strokeWidth="0.1" />
      <text x="81" y="44.5" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="rgba(255,255,255,0.55)">〒{data.zipCode}</text>
      <text x="81" y="48" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="rgba(255,255,255,0.55)">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 2. DUSK (暮) — Cool twilight gradient
// Deep indigo to dusty violet, serene evening palette
// ============================================================
const duskTemplate: TemplateDefinition = {
  id: 'gradient-dusk',
  name: 'DUSK',
  nameJa: '暮',
  category: 'gradient',
  designer: 'Gradient Series',
  description: '黄昏の帳。深い藍色から薄紫へ、静寂の時間。',
  accentColor: '#6B5B95',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="gd-dusk-f-bg" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#1B1464" />
          <stop offset="30%" stopColor="#2D2074" />
          <stop offset="55%" stopColor="#6B5B95" />
          <stop offset="80%" stopColor="#9B8CC0" />
          <stop offset="100%" stopColor="#C4A7D7" />
        </linearGradient>
        <radialGradient id="gd-dusk-f-moon" cx="0.82" cy="0.18" r="0.15">
          <stop offset="0%" stopColor="#E8DCF0" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#E8DCF0" stopOpacity="0" />
        </radialGradient>
        <filter id="gd-dusk-f-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="gd-dusk-f-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#gd-dusk-f-bg)" />
      <rect width="91" height="55" fill="url(#gd-dusk-f-moon)" />
      <rect width="91" height="55" filter="url(#gd-dusk-f-grain)" opacity="0.03" fill="transparent" />
      <circle cx="75" cy="10" r="3" fill="rgba(232,220,240,0.15)" />
      <circle cx="78" cy="8" r="1.2" fill="rgba(232,220,240,0.08)" />
      {/* Stars */}
      <circle cx="20" cy="6" r="0.2" fill="rgba(232,220,240,0.3)" />
      <circle cx="55" cy="4" r="0.15" fill="rgba(232,220,240,0.25)" />
      <circle cx="40" cy="9" r="0.12" fill="rgba(232,220,240,0.2)" />
      {data.logo && <image href={data.logo} x="73" y="38" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <g filter="url(#gd-dusk-f-shadow)">
        <text x="45.5" y="22" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="7" letterSpacing="1.5" fill="#E8DCF0">{data.nameJa}</text>
      </g>
      <text x="45.5" y="29" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2.2" letterSpacing="0.6" fill="rgba(232,220,240,0.7)">{data.nameEn}</text>
      <line x1="25" y1="33" x2="66" y2="33" stroke="rgba(232,220,240,0.2)" strokeWidth="0.15" />
      <text x="45.5" y="38.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="rgba(232,220,240,0.5)">{data.titleJa}</text>
      <text x="45.5" y="45" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="rgba(232,220,240,0.4)">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="gd-dusk-b-bg" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1B1464" />
          <stop offset="35%" stopColor="#3D2C7C" />
          <stop offset="65%" stopColor="#6B5B95" />
          <stop offset="100%" stopColor="#C4A7D7" />
        </linearGradient>
        <filter id="gd-dusk-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#gd-dusk-b-bg)" />
      <rect width="91" height="55" filter="url(#gd-dusk-b-grain)" opacity="0.03" fill="transparent" />
      <circle cx="82" cy="6" r="0.15" fill="rgba(232,220,240,0.3)" />
      <circle cx="70" cy="4" r="0.12" fill="rgba(232,220,240,0.2)" />
      <circle cx="15" cy="48" r="4" fill="rgba(196,167,215,0.06)" />
      {data.logo && <image href={data.logo} x="10" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="81" y="11" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" fill="#E8DCF0">{data.companyJa}</text>
      <text x="81" y="15.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(232,220,240,0.6)">{data.companyEn}</text>
      <text x="81" y="20" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="rgba(232,220,240,0.45)">{data.titleJa}</text>
      <line x1="40" y1="23" x2="81" y2="23" stroke="rgba(232,220,240,0.2)" strokeWidth="0.12" />
      <text x="81" y="28.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="rgba(232,220,240,0.8)">{data.tel}</text>
      <text x="81" y="32.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="rgba(232,220,240,0.8)">{data.email}</text>
      <text x="81" y="36.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="rgba(232,220,240,0.8)">{data.website}</text>
      <line x1="40" y1="40" x2="81" y2="40" stroke="rgba(232,220,240,0.12)" strokeWidth="0.1" />
      <text x="81" y="44.5" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="rgba(232,220,240,0.45)">〒{data.zipCode}</text>
      <text x="81" y="48" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="rgba(232,220,240,0.45)">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 3. PRISM (虹彩) — Rainbow prism gradient
// Full spectrum refraction, diagonal light band
// ============================================================
const prismTemplate: TemplateDefinition = {
  id: 'gradient-prism',
  name: 'PRISM',
  nameJa: '虹彩',
  category: 'gradient',
  designer: 'Gradient Series',
  description: 'プリズムの虹彩。光が分解されて生まれる七色の帯。',
  accentColor: '#8B5CF6',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="gd-prism-f-band" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF0040" stopOpacity="0.3" />
          <stop offset="16%" stopColor="#FF8C00" stopOpacity="0.3" />
          <stop offset="33%" stopColor="#FFD700" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#00C853" stopOpacity="0.3" />
          <stop offset="66%" stopColor="#2196F3" stopOpacity="0.3" />
          <stop offset="83%" stopColor="#8B5CF6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#E040FB" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="gd-prism-f-stripe" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF0040" />
          <stop offset="16%" stopColor="#FF8C00" />
          <stop offset="33%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#00C853" />
          <stop offset="66%" stopColor="#2196F3" />
          <stop offset="83%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#E040FB" />
        </linearGradient>
        <filter id="gd-prism-f-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="gd-prism-f-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="gd-prism-f-blur">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="#fafafa" />
      <rect x="0" y="0" width="91" height="55" fill="url(#gd-prism-f-band)" opacity="0.12" />
      <rect width="91" height="55" filter="url(#gd-prism-f-grain)" opacity="0.02" fill="transparent" />
      {/* Prism light refraction */}
      <rect x="4" y="4" width="1.2" height="47" fill="url(#gd-prism-f-stripe)" rx="0.6" />
      <rect x="4" y="4" width="1.2" height="47" fill="url(#gd-prism-f-stripe)" rx="0.6" filter="url(#gd-prism-f-blur)" opacity="0.3" />
      {/* Diffraction dots */}
      <circle cx="82" cy="8" r="1" fill="#8B5CF6" opacity="0.06" />
      <circle cx="78" cy="45" r="1.5" fill="#FF8C00" opacity="0.04" />
      <circle cx="50" cy="5" r="0.8" fill="#2196F3" opacity="0.05" />
      {data.logo && <image href={data.logo} x="73" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <g filter="url(#gd-prism-f-shadow)">
        <text x="12" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6" letterSpacing="0.5" fill="#2d2d2d">{data.nameJa}</text>
      </g>
      <text x="12" y="26" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.3" fill="#666666">{data.nameEn}</text>
      <text x="12" y="34" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#888888">{data.titleJa}</text>
      <text x="12" y="42" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#999999">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="gd-prism-b-stripe" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E040FB" />
          <stop offset="16%" stopColor="#8B5CF6" />
          <stop offset="33%" stopColor="#2196F3" />
          <stop offset="50%" stopColor="#00C853" />
          <stop offset="66%" stopColor="#FFD700" />
          <stop offset="83%" stopColor="#FF8C00" />
          <stop offset="100%" stopColor="#FF0040" />
        </linearGradient>
        <filter id="gd-prism-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="gd-prism-b-blur">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="#fafafa" />
      <rect width="91" height="55" filter="url(#gd-prism-b-grain)" opacity="0.02" fill="transparent" />
      <rect x="85.8" y="4" width="1.2" height="47" fill="url(#gd-prism-b-stripe)" rx="0.6" />
      <rect x="85.8" y="4" width="1.2" height="47" fill="url(#gd-prism-b-stripe)" rx="0.6" filter="url(#gd-prism-b-blur)" opacity="0.3" />
      <circle cx="10" cy="48" r="1.2" fill="#00C853" opacity="0.05" />
      <circle cx="45" cy="5" r="0.6" fill="#E040FB" opacity="0.04" />
      {data.logo && <image href={data.logo} x="10" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="79" y="11" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" fill="#2d2d2d">{data.companyJa}</text>
      <text x="79" y="15.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#888888">{data.companyEn}</text>
      <text x="79" y="20" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#999999">{data.titleJa}</text>
      <line x1="40" y1="23" x2="79" y2="23" stroke="#ddd" strokeWidth="0.1" />
      <text x="79" y="28" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#555555">{data.tel}</text>
      <text x="79" y="32" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#555555">{data.email}</text>
      <text x="79" y="36" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#555555">{data.website}</text>
      <line x1="40" y1="39.5" x2="79" y2="39.5" stroke="#eee" strokeWidth="0.1" />
      <text x="79" y="43.5" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#aaaaaa">〒{data.zipCode}</text>
      <text x="79" y="47" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#aaaaaa">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 4. AURORA-G (極光) — Northern lights gradient
// Teal to emerald to violet, shimmering curtain effect
// ============================================================
const auroraGTemplate: TemplateDefinition = {
  id: 'gradient-aurora-g',
  name: 'AURORA-G',
  nameJa: '極光',
  category: 'gradient',
  designer: 'Gradient Series',
  description: '極光のカーテン。翡翠とすみれ色が揺れ動く天幕。',
  accentColor: '#10B981',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="gd-aurorG-f-bg" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#064E3B" />
          <stop offset="25%" stopColor="#065F46" />
          <stop offset="50%" stopColor="#10B981" />
          <stop offset="75%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#312E81" />
        </linearGradient>
        <radialGradient id="gd-aurorG-f-glow" cx="0.7" cy="0.3" r="0.5">
          <stop offset="0%" stopColor="#34D399" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#34D399" stopOpacity="0" />
        </radialGradient>
        <filter id="gd-aurorG-f-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="gd-aurorG-f-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#gd-aurorG-f-bg)" />
      <rect width="91" height="55" fill="url(#gd-aurorG-f-glow)" />
      <rect width="91" height="55" filter="url(#gd-aurorG-f-grain)" opacity="0.03" fill="transparent" />
      <path d="M0,15 Q20,8 40,18 Q60,28 91,10 L91,0 L0,0 Z" fill="rgba(52,211,153,0.12)" />
      <path d="M0,25 Q30,15 55,22 Q75,28 91,18 L91,12 Q75,22 55,16 Q30,9 0,19 Z" fill="rgba(99,102,241,0.1)" />
      {/* Shimmer particles */}
      <circle cx="30" cy="8" r="0.2" fill="rgba(167,243,208,0.4)" />
      <circle cx="60" cy="5" r="0.15" fill="rgba(167,243,208,0.3)" />
      <circle cx="80" cy="12" r="0.18" fill="rgba(167,243,208,0.35)" />
      {data.logo && <image href={data.logo} x="73" y="38" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <g filter="url(#gd-aurorG-f-shadow)">
        <text x="12" y="30" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="6.5" letterSpacing="1" fill="#ECFDF5">{data.nameJa}</text>
      </g>
      <text x="12" y="36.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.5" fill="rgba(236,253,245,0.7)">{data.nameEn}</text>
      <text x="12" y="44" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="rgba(167,243,208,0.5)">{data.titleJa}</text>
      <text x="12" y="50" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="rgba(167,243,208,0.4)">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="gd-aurorG-b-bg" x1="0.5" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#064E3B" />
          <stop offset="30%" stopColor="#065F46" />
          <stop offset="60%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#312E81" />
        </linearGradient>
        <filter id="gd-aurorG-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#gd-aurorG-b-bg)" />
      <rect width="91" height="55" filter="url(#gd-aurorG-b-grain)" opacity="0.03" fill="transparent" />
      <path d="M0,45 Q25,38 50,42 Q75,46 91,40 L91,55 L0,55 Z" fill="rgba(52,211,153,0.1)" />
      <circle cx="75" cy="48" r="0.15" fill="rgba(167,243,208,0.3)" />
      <circle cx="20" cy="50" r="0.12" fill="rgba(99,102,241,0.25)" />
      {data.logo && <image href={data.logo} x="10" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="81" y="11" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" fill="#ECFDF5">{data.companyJa}</text>
      <text x="81" y="15.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(167,243,208,0.6)">{data.companyEn}</text>
      <text x="81" y="20" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="rgba(167,243,208,0.45)">{data.titleJa}</text>
      <line x1="50" y1="23" x2="81" y2="23" stroke="rgba(167,243,208,0.2)" strokeWidth="0.12" />
      <text x="81" y="28" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="rgba(236,253,245,0.8)">{data.tel}</text>
      <text x="81" y="32" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="rgba(236,253,245,0.8)">{data.email}</text>
      <text x="81" y="36" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="rgba(236,253,245,0.8)">{data.website}</text>
      <line x1="50" y1="39.5" x2="81" y2="39.5" stroke="rgba(167,243,208,0.12)" strokeWidth="0.1" />
      <text x="81" y="43.5" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="rgba(167,243,208,0.45)">〒{data.zipCode}</text>
      <text x="81" y="47" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="rgba(167,243,208,0.45)">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 5. FLAME (焔) — Fire gradient
// Deep crimson to bright orange to yellow, hot rising flames
// ============================================================
const flameTemplate: TemplateDefinition = {
  id: 'gradient-flame',
  name: 'FLAME',
  nameJa: '焔',
  category: 'gradient',
  designer: 'Gradient Series',
  description: '焔の揺らめき。深紅から金色へ、燃え上がる情熱。',
  accentColor: '#DC2626',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="gd-flame-f-bg" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#7F1D1D" />
          <stop offset="25%" stopColor="#DC2626" />
          <stop offset="50%" stopColor="#EA580C" />
          <stop offset="75%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#FDE68A" />
        </linearGradient>
        <radialGradient id="gd-flame-f-heat" cx="0.5" cy="1" r="0.7">
          <stop offset="0%" stopColor="#7F1D1D" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#7F1D1D" stopOpacity="0" />
        </radialGradient>
        <filter id="gd-flame-f-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="gd-flame-f-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#gd-flame-f-bg)" />
      <rect width="91" height="55" fill="url(#gd-flame-f-heat)" />
      <rect width="91" height="55" filter="url(#gd-flame-f-grain)" opacity="0.03" fill="transparent" />
      <path d="M20,55 Q22,40 18,30 Q25,38 28,25 Q32,35 35,22 Q38,32 42,28 Q40,40 45,55 Z" fill="rgba(253,230,138,0.08)" />
      <path d="M55,55 Q57,44 53,36 Q58,42 60,30 Q63,38 66,55 Z" fill="rgba(253,230,138,0.05)" />
      {/* Ember particles */}
      <circle cx="25" cy="15" r="0.3" fill="rgba(253,230,138,0.2)" />
      <circle cx="60" cy="10" r="0.2" fill="rgba(253,230,138,0.15)" />
      <circle cx="72" cy="18" r="0.25" fill="rgba(253,230,138,0.12)" />
      {data.logo && <image href={data.logo} x="73" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <g filter="url(#gd-flame-f-shadow)">
        <text x="45.5" y="18" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="7" letterSpacing="1.2" fill="#FEF3C7">{data.nameJa}</text>
      </g>
      <line x1="20" y1="23" x2="71" y2="23" stroke="rgba(254,243,199,0.3)" strokeWidth="0.15" />
      <text x="45.5" y="28.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.5" fill="rgba(254,243,199,0.8)">{data.nameEn.toUpperCase()}</text>
      <text x="45.5" y="37" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="rgba(254,243,199,0.6)">{data.titleJa}</text>
      <text x="45.5" y="44" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="rgba(254,243,199,0.5)">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="gd-flame-b-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="25%" stopColor="#F59E0B" />
          <stop offset="55%" stopColor="#EA580C" />
          <stop offset="80%" stopColor="#DC2626" />
          <stop offset="100%" stopColor="#7F1D1D" />
        </linearGradient>
        <filter id="gd-flame-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#gd-flame-b-bg)" />
      <rect width="91" height="55" filter="url(#gd-flame-b-grain)" opacity="0.03" fill="transparent" />
      <circle cx="75" cy="48" r="0.2" fill="rgba(254,243,199,0.15)" />
      <circle cx="15" cy="8" r="0.3" fill="rgba(127,29,29,0.1)" />
      {data.logo && <image href={data.logo} x="10" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="45.5" y="10" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#7F1D1D">{data.companyJa}</text>
      <text x="45.5" y="14.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(127,29,29,0.6)">{data.companyEn}</text>
      <text x="45.5" y="19" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="rgba(127,29,29,0.45)">{data.titleJa}</text>
      <line x1="25" y1="22" x2="66" y2="22" stroke="rgba(127,29,29,0.2)" strokeWidth="0.12" />
      <text x="45.5" y="27.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="rgba(254,243,199,0.9)">{data.tel}</text>
      <text x="45.5" y="31.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="rgba(254,243,199,0.9)">{data.email}</text>
      <text x="45.5" y="35.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="rgba(254,243,199,0.9)">{data.website}</text>
      <line x1="25" y1="39" x2="66" y2="39" stroke="rgba(254,243,199,0.15)" strokeWidth="0.1" />
      <text x="45.5" y="43.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="rgba(254,243,199,0.55)">〒{data.zipCode}</text>
      <text x="45.5" y="47" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="rgba(254,243,199,0.55)">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 6. ICE (氷) — Ice blue gradient
// Crystal clear pale blue to deep glacial blue
// ============================================================
const iceTemplate: TemplateDefinition = {
  id: 'gradient-ice',
  name: 'ICE',
  nameJa: '氷',
  category: 'gradient',
  designer: 'Gradient Series',
  description: '氷の結晶。透明な蒼から深い氷河の青へ。',
  accentColor: '#0EA5E9',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="gd-ice-f-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F0F9FF" />
          <stop offset="20%" stopColor="#BAE6FD" />
          <stop offset="45%" stopColor="#38BDF8" />
          <stop offset="70%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#0C4A6E" />
        </linearGradient>
        <radialGradient id="gd-ice-f-crystal" cx="0.3" cy="0.4" r="0.4">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <filter id="gd-ice-f-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="gd-ice-f-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#gd-ice-f-bg)" />
      <rect width="91" height="55" fill="url(#gd-ice-f-crystal)" />
      <rect width="91" height="55" filter="url(#gd-ice-f-grain)" opacity="0.03" fill="transparent" />
      {/* Ice crystal shapes */}
      <polygon points="15,8 17,3 19,8 17,6" fill="rgba(255,255,255,0.15)" />
      <polygon points="30,12 31.5,8 33,12 31.5,10.5" fill="rgba(255,255,255,0.1)" />
      <polygon points="8,18 9.2,15 10.4,18 9.2,16.8" fill="rgba(255,255,255,0.12)" />
      <line x1="75" y1="5" x2="80" y2="10" stroke="rgba(255,255,255,0.08)" strokeWidth="0.15" />
      <line x1="80" y1="5" x2="75" y2="10" stroke="rgba(255,255,255,0.08)" strokeWidth="0.15" />
      {data.logo && <image href={data.logo} x="73" y="38" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <g filter="url(#gd-ice-f-shadow)">
        <text x="10" y="28" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="6" letterSpacing="0.8" fill="#ffffff">{data.nameJa}</text>
      </g>
      <text x="10" y="34" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.8" letterSpacing="0.4" fill="rgba(255,255,255,0.75)">{data.nameEn}</text>
      <text x="10" y="42" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="rgba(255,255,255,0.5)">{data.titleJa}</text>
      <text x="10" y="48" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="rgba(255,255,255,0.4)">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="gd-ice-b-bg" x1="1" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#F0F9FF" />
          <stop offset="25%" stopColor="#BAE6FD" />
          <stop offset="55%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0C4A6E" />
        </linearGradient>
        <filter id="gd-ice-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#gd-ice-b-bg)" />
      <rect width="91" height="55" filter="url(#gd-ice-b-grain)" opacity="0.03" fill="transparent" />
      <polygon points="76,42 77.5,38 79,42 77.5,40.5" fill="rgba(255,255,255,0.1)" />
      <polygon points="65,47 66,44 67,47 66,46" fill="rgba(255,255,255,0.08)" />
      {data.logo && <image href={data.logo} x="73" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="10" y="11" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" fill="#0C4A6E">{data.companyJa}</text>
      <text x="10" y="15.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(12,74,110,0.6)">{data.companyEn}</text>
      <text x="10" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="rgba(12,74,110,0.4)">{data.titleJa}</text>
      <line x1="10" y1="23" x2="55" y2="23" stroke="rgba(12,74,110,0.15)" strokeWidth="0.12" />
      <text x="10" y="28" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#ffffff">{data.tel}</text>
      <text x="10" y="32" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#ffffff">{data.email}</text>
      <text x="10" y="36" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#ffffff">{data.website}</text>
      <line x1="10" y1="39.5" x2="55" y2="39.5" stroke="rgba(255,255,255,0.12)" strokeWidth="0.1" />
      <text x="10" y="44" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="rgba(255,255,255,0.55)">〒{data.zipCode}</text>
      <text x="10" y="47.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="rgba(255,255,255,0.55)">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 7. BLOOM (咲) — Floral gradient
// Soft petal pinks to lavender, botanical warmth
// ============================================================
const bloomTemplate: TemplateDefinition = {
  id: 'gradient-bloom',
  name: 'BLOOM',
  nameJa: '咲',
  category: 'gradient',
  designer: 'Gradient Series',
  description: '花が咲く。花弁の桃色から薄紫へ、春の息吹。',
  accentColor: '#EC4899',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="gd-bloom-f-bg" cx="0.5" cy="0.5" r="0.7">
          <stop offset="0%" stopColor="#FDF2F8" />
          <stop offset="25%" stopColor="#FBCFE8" />
          <stop offset="50%" stopColor="#F9A8D4" />
          <stop offset="75%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#9D174D" />
        </radialGradient>
        <radialGradient id="gd-bloom-f-petal1" cx="0.2" cy="0.3" r="0.25">
          <stop offset="0%" stopColor="#FDF2F8" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FDF2F8" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="gd-bloom-f-petal2" cx="0.8" cy="0.7" r="0.2">
          <stop offset="0%" stopColor="#F9A8D4" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#F9A8D4" stopOpacity="0" />
        </radialGradient>
        <filter id="gd-bloom-f-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="gd-bloom-f-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#gd-bloom-f-bg)" />
      <rect width="91" height="55" fill="url(#gd-bloom-f-petal1)" />
      <rect width="91" height="55" fill="url(#gd-bloom-f-petal2)" />
      <rect width="91" height="55" filter="url(#gd-bloom-f-grain)" opacity="0.03" fill="transparent" />
      {/* Petal circles */}
      <circle cx="18" cy="15" r="4" fill="rgba(253,242,248,0.12)" />
      <circle cx="72" cy="40" r="5" fill="rgba(253,242,248,0.08)" />
      <circle cx="60" cy="10" r="3" fill="rgba(253,242,248,0.1)" />
      <circle cx="82" cy="48" r="2" fill="rgba(253,242,248,0.06)" />
      {data.logo && <image href={data.logo} x="73" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <g filter="url(#gd-bloom-f-shadow)">
        <text x="45.5" y="24" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="6.5" letterSpacing="1.2" fill="#ffffff">{data.nameJa}</text>
      </g>
      <text x="45.5" y="31" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2.2" letterSpacing="0.6" fontStyle="italic" fill="rgba(255,255,255,0.75)">{data.nameEn}</text>
      <text x="45.5" y="40" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="rgba(255,255,255,0.55)">{data.titleJa}</text>
      <text x="45.5" y="47" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="rgba(255,255,255,0.4)">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="gd-bloom-b-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9D174D" />
          <stop offset="35%" stopColor="#EC4899" />
          <stop offset="65%" stopColor="#FBCFE8" />
          <stop offset="100%" stopColor="#FDF2F8" />
        </linearGradient>
        <filter id="gd-bloom-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#gd-bloom-b-bg)" />
      <rect width="91" height="55" filter="url(#gd-bloom-b-grain)" opacity="0.03" fill="transparent" />
      <circle cx="15" cy="45" r="3" fill="rgba(253,242,248,0.08)" />
      <circle cx="25" cy="48" r="2" fill="rgba(253,242,248,0.06)" />
      {data.logo && <image href={data.logo} x="10" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="81" y="11" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" fill="#FDF2F8">{data.companyJa}</text>
      <text x="81" y="15.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(253,242,248,0.65)">{data.companyEn}</text>
      <text x="81" y="20" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="rgba(253,242,248,0.45)">{data.titleJa}</text>
      <line x1="45" y1="23" x2="81" y2="23" stroke="rgba(253,242,248,0.25)" strokeWidth="0.12" />
      <text x="81" y="28" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#9D174D">{data.tel}</text>
      <text x="81" y="32" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#9D174D">{data.email}</text>
      <text x="81" y="36" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#9D174D">{data.website}</text>
      <line x1="45" y1="39.5" x2="81" y2="39.5" stroke="rgba(157,23,77,0.15)" strokeWidth="0.1" />
      <text x="81" y="44" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="rgba(157,23,77,0.55)">〒{data.zipCode}</text>
      <text x="81" y="47.5" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="rgba(157,23,77,0.55)">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 8. FADE (溶) — Subtle fade gradient
// Near-white to soft grey, almost imperceptible transition
// ============================================================
const fadeTemplate: TemplateDefinition = {
  id: 'gradient-fade',
  name: 'FADE',
  nameJa: '溶',
  category: 'gradient',
  designer: 'Gradient Series',
  description: '溶け合う境界。白からグレーへ、ほとんど気づかない移ろい。',
  accentColor: '#94A3B8',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="gd-fade-f-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="30%" stopColor="#F8FAFC" />
          <stop offset="60%" stopColor="#F1F5F9" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>
        <linearGradient id="gd-fade-f-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#94A3B8" stopOpacity="0" />
          <stop offset="50%" stopColor="#94A3B8" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#94A3B8" stopOpacity="0" />
        </linearGradient>
        <filter id="gd-fade-f-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="gd-fade-f-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#gd-fade-f-bg)" />
      <rect width="91" height="55" filter="url(#gd-fade-f-grain)" opacity="0.02" fill="transparent" />
      {/* Subtle geometric accents */}
      <circle cx="80" cy="8" r="6" fill="rgba(148,163,184,0.03)" />
      <circle cx="78" cy="45" r="4" fill="rgba(148,163,184,0.02)" />
      {data.logo && <image href={data.logo} x="73" y="38" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <g filter="url(#gd-fade-f-shadow)">
        <text x="45.5" y="20" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="6" letterSpacing="1" fill="#475569">{data.nameJa}</text>
      </g>
      <line x1="15" y1="25" x2="76" y2="25" stroke="url(#gd-fade-f-line)" strokeWidth="0.15" />
      <text x="45.5" y="30.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.8" letterSpacing="0.5" fill="#94A3B8">{data.nameEn.toUpperCase()}</text>
      <text x="45.5" y="38" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#CBD5E1">{data.titleJa}</text>
      <text x="45.5" y="44" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#CBD5E1">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="gd-fade-b-bg" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="30%" stopColor="#F8FAFC" />
          <stop offset="60%" stopColor="#F1F5F9" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>
        <linearGradient id="gd-fade-b-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#94A3B8" stopOpacity="0" />
          <stop offset="50%" stopColor="#94A3B8" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#94A3B8" stopOpacity="0" />
        </linearGradient>
        <filter id="gd-fade-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#gd-fade-b-bg)" />
      <rect width="91" height="55" filter="url(#gd-fade-b-grain)" opacity="0.02" fill="transparent" />
      <circle cx="12" cy="48" r="5" fill="rgba(148,163,184,0.03)" />
      {data.logo && <image href={data.logo} x="10" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="45.5" y="11" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" fill="#475569">{data.companyJa}</text>
      <text x="45.5" y="15.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" letterSpacing="0.3" fill="#94A3B8">{data.companyEn}</text>
      <text x="45.5" y="20" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#CBD5E1">{data.titleJa}</text>
      <line x1="10" y1="23" x2="81" y2="23" stroke="url(#gd-fade-b-line)" strokeWidth="0.1" />
      <text x="45.5" y="28" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#64748B">{data.tel}</text>
      <text x="45.5" y="32" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#64748B">{data.email}</text>
      <text x="45.5" y="36" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#64748B">{data.website}</text>
      <line x1="10" y1="39.5" x2="81" y2="39.5" stroke="url(#gd-fade-b-line)" strokeWidth="0.1" />
      <text x="45.5" y="44" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#CBD5E1">〒{data.zipCode}</text>
      <text x="45.5" y="47.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#CBD5E1">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 9. SPECTRUM (帯) — Full spectrum band
// Horizontal rainbow bar accent on clean white
// ============================================================
const spectrumTemplate: TemplateDefinition = {
  id: 'gradient-spectrum',
  name: 'SPECTRUM',
  nameJa: '帯',
  category: 'gradient',
  designer: 'Gradient Series',
  description: '光の帯。虹のスペクトルが一筋のラインに凝縮される。',
  accentColor: '#06B6D4',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="gd-spec-f-bar" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#EF4444" />
          <stop offset="12%" stopColor="#F97316" />
          <stop offset="25%" stopColor="#EAB308" />
          <stop offset="37%" stopColor="#22C55E" />
          <stop offset="50%" stopColor="#06B6D4" />
          <stop offset="62%" stopColor="#3B82F6" />
          <stop offset="75%" stopColor="#8B5CF6" />
          <stop offset="87%" stopColor="#D946EF" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
        <filter id="gd-spec-f-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="gd-spec-f-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="gd-spec-f-blur">
          <feGaussianBlur stdDeviation="1" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="#ffffff" />
      <rect width="91" height="55" filter="url(#gd-spec-f-grain)" opacity="0.015" fill="transparent" />
      <rect x="0" y="0" width="91" height="2" fill="url(#gd-spec-f-bar)" />
      <rect x="0" y="0" width="91" height="2" fill="url(#gd-spec-f-bar)" filter="url(#gd-spec-f-blur)" opacity="0.3" />
      <rect x="0" y="53" width="91" height="2" fill="url(#gd-spec-f-bar)" />
      <rect x="0" y="53" width="91" height="2" fill="url(#gd-spec-f-bar)" filter="url(#gd-spec-f-blur)" opacity="0.3" />
      {/* Subtle spectral dot accents */}
      <circle cx="82" cy="10" r="0.5" fill="#06B6D4" opacity="0.06" />
      <circle cx="78" cy="44" r="0.4" fill="#8B5CF6" opacity="0.05" />
      {data.logo && <image href={data.logo} x="73" y="8" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <g filter="url(#gd-spec-f-shadow)">
        <text x="8" y="18" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6.5" letterSpacing="0.5" fill="#1e1e1e">{data.nameJa}</text>
      </g>
      <text x="8" y="24" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.3" fill="#666666">{data.nameEn}</text>
      <text x="8" y="32" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#888888">{data.titleJa}</text>
      <text x="8" y="40" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#aaaaaa">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="gd-spec-b-bar" x1="1" y1="0" x2="0" y2="0">
          <stop offset="0%" stopColor="#EF4444" />
          <stop offset="12%" stopColor="#F97316" />
          <stop offset="25%" stopColor="#EAB308" />
          <stop offset="37%" stopColor="#22C55E" />
          <stop offset="50%" stopColor="#06B6D4" />
          <stop offset="62%" stopColor="#3B82F6" />
          <stop offset="75%" stopColor="#8B5CF6" />
          <stop offset="87%" stopColor="#D946EF" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
        <filter id="gd-spec-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="gd-spec-b-blur">
          <feGaussianBlur stdDeviation="1" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="#ffffff" />
      <rect width="91" height="55" filter="url(#gd-spec-b-grain)" opacity="0.015" fill="transparent" />
      <rect x="0" y="0" width="91" height="2" fill="url(#gd-spec-b-bar)" />
      <rect x="0" y="0" width="91" height="2" fill="url(#gd-spec-b-bar)" filter="url(#gd-spec-b-blur)" opacity="0.3" />
      <rect x="0" y="53" width="91" height="2" fill="url(#gd-spec-b-bar)" />
      <rect x="0" y="53" width="91" height="2" fill="url(#gd-spec-b-bar)" filter="url(#gd-spec-b-blur)" opacity="0.3" />
      {data.logo && <image href={data.logo} x="10" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="83" y="11" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" fill="#1e1e1e">{data.companyJa}</text>
      <text x="83" y="15.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#888888">{data.companyEn}</text>
      <text x="83" y="20" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#aaaaaa">{data.titleJa}</text>
      <line x1="40" y1="23" x2="83" y2="23" stroke="#eee" strokeWidth="0.1" />
      <text x="83" y="28" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#555555">{data.tel}</text>
      <text x="83" y="32" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#555555">{data.email}</text>
      <text x="83" y="36" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#555555">{data.website}</text>
      <line x1="40" y1="39.5" x2="83" y2="39.5" stroke="#eee" strokeWidth="0.1" />
      <text x="83" y="44" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#aaaaaa">〒{data.zipCode}</text>
      <text x="83" y="47.5" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#aaaaaa">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 10. GLOW (灯) — Warm glow gradient
// Golden amber center radiating outward, lantern warmth
// ============================================================
const glowTemplate: TemplateDefinition = {
  id: 'gradient-glow',
  name: 'GLOW',
  nameJa: '灯',
  category: 'gradient',
  designer: 'Gradient Series',
  description: '灯火の温もり。琥珀色の光が中心から優しく広がる。',
  accentColor: '#D97706',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="gd-glow-f-bg" cx="0.5" cy="0.4" r="0.65">
          <stop offset="0%" stopColor="#FFFBEB" />
          <stop offset="20%" stopColor="#FEF3C7" />
          <stop offset="45%" stopColor="#FCD34D" />
          <stop offset="70%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#78350F" />
        </radialGradient>
        <radialGradient id="gd-glow-f-hi" cx="0.45" cy="0.35" r="0.2">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <filter id="gd-glow-f-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="gd-glow-f-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#gd-glow-f-bg)" />
      <rect width="91" height="55" fill="url(#gd-glow-f-hi)" />
      <rect width="91" height="55" filter="url(#gd-glow-f-grain)" opacity="0.03" fill="transparent" />
      {/* Light ray hints */}
      <line x1="45.5" y1="22" x2="20" y2="0" stroke="rgba(255,251,235,0.06)" strokeWidth="0.5" />
      <line x1="45.5" y1="22" x2="70" y2="0" stroke="rgba(255,251,235,0.04)" strokeWidth="0.5" />
      <line x1="45.5" y1="22" x2="10" y2="55" stroke="rgba(255,251,235,0.03)" strokeWidth="0.4" />
      {data.logo && <image href={data.logo} x="73" y="38" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <g filter="url(#gd-glow-f-shadow)">
        <text x="45.5" y="20" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="7" letterSpacing="1.5" fill="#78350F">{data.nameJa}</text>
      </g>
      <text x="45.5" y="27" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2.2" letterSpacing="0.5" fill="rgba(120,53,15,0.6)">{data.nameEn}</text>
      <text x="45.5" y="36" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="rgba(120,53,15,0.4)">{data.titleJa}</text>
      <text x="45.5" y="45" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="rgba(120,53,15,0.35)">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="gd-glow-b-bg" cx="0.5" cy="0.6" r="0.65">
          <stop offset="0%" stopColor="#FFFBEB" />
          <stop offset="25%" stopColor="#FEF3C7" />
          <stop offset="55%" stopColor="#FCD34D" />
          <stop offset="80%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#78350F" />
        </radialGradient>
        <filter id="gd-glow-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#gd-glow-b-bg)" />
      <rect width="91" height="55" filter="url(#gd-glow-b-grain)" opacity="0.03" fill="transparent" />
      <line x1="45.5" y1="33" x2="20" y2="55" stroke="rgba(255,251,235,0.04)" strokeWidth="0.4" />
      <line x1="45.5" y1="33" x2="70" y2="55" stroke="rgba(255,251,235,0.03)" strokeWidth="0.4" />
      {data.logo && <image href={data.logo} x="10" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="45.5" y="10" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#FFFBEB">{data.companyJa}</text>
      <text x="45.5" y="14.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(255,251,235,0.65)">{data.companyEn}</text>
      <text x="45.5" y="19" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="rgba(255,251,235,0.45)">{data.titleJa}</text>
      <line x1="20" y1="22" x2="71" y2="22" stroke="rgba(255,251,235,0.2)" strokeWidth="0.12" />
      <text x="45.5" y="27" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#78350F">{data.tel}</text>
      <text x="45.5" y="31" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#78350F">{data.email}</text>
      <text x="45.5" y="35" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#78350F">{data.website}</text>
      <line x1="20" y1="38.5" x2="71" y2="38.5" stroke="rgba(255,251,235,0.12)" strokeWidth="0.1" />
      <text x="45.5" y="43" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="rgba(255,251,235,0.5)">〒{data.zipCode}</text>
      <text x="45.5" y="46.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="rgba(255,251,235,0.5)">{data.addressJa}</text>
    </g>
  ),
};

export const gradientTemplates: TemplateDefinition[] = [
  dawnTemplate,
  duskTemplate,
  prismTemplate,
  auroraGTemplate,
  flameTemplate,
  iceTemplate,
  bloomTemplate,
  fadeTemplate,
  spectrumTemplate,
  glowTemplate,
];
