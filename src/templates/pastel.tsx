import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. BLUSH — Warm blush pink with watercolor bloom texture
// ============================================================
const blushTemplate: TemplateDefinition = {
  id: 'pastel-blush',
  name: 'BLUSH',
  nameJa: '頬',
  category: 'pastel',
  designer: 'Pastel Atelier',
  description: '頬を染める淡い桜色。やわらかな温もりのデザイン。',
  accentColor: '#F8BBD9',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="pastel-blush-bg" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0%" stopColor="#FFF5F8" />
          <stop offset="50%" stopColor="#FFF0F5" />
          <stop offset="100%" stopColor="#FFE8F0" />
        </linearGradient>
        <radialGradient id="pastel-blush-glow1" cx="0.75" cy="0.25" r="0.45">
          <stop offset="0%" stopColor="#F8BBD9" stopOpacity="0.35" />
          <stop offset="70%" stopColor="#F48FB1" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#FFF0F5" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="pastel-blush-glow2" cx="0.15" cy="0.8" r="0.35">
          <stop offset="0%" stopColor="#F48FB1" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#FFF0F5" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="pastel-blush-accent" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#F8BBD9" stopOpacity="0" />
          <stop offset="50%" stopColor="#F48FB1" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#F8BBD9" stopOpacity="0" />
        </linearGradient>
        <filter id="pastel-blush-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="pastel-blush-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.05" dy="0.1" />
          <feFlood floodColor="#AD1457" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#pastel-blush-bg)" />
      <rect width="91" height="55" filter="url(#pastel-blush-texture)" opacity="0.04" fill="#D4A0B0" />
      <circle cx="70" cy="14" r="22" fill="url(#pastel-blush-glow1)" />
      <circle cx="15" cy="46" r="18" fill="url(#pastel-blush-glow2)" />
      {/* Decorative circles */}
      <circle cx="80" cy="8" r="7" fill="#F8BBD9" fillOpacity="0.1" />
      <circle cx="74" cy="18" r="4.5" fill="#F48FB1" fillOpacity="0.07" />
      <circle cx="86" cy="16" r="3" fill="#FCE4EC" fillOpacity="0.15" />
      <circle cx="8" cy="42" r="5.5" fill="#F8BBD9" fillOpacity="0.08" />
      <circle cx="18" cy="50" r="3.5" fill="#F48FB1" fillOpacity="0.06" />
      {/* Thin accent line */}
      <line x1="14" y1="32" x2="77" y2="32" stroke="url(#pastel-blush-accent)" strokeWidth="0.15" />
      <text x="45.5" y="20" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="6.5" letterSpacing="0.8" fill="#AD1457" filter="url(#pastel-blush-shadow)">{data.nameJa}</text>
      <text x="45.5" y="27" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="2.2" letterSpacing="0.5" fill="#C2185B" fontStyle="italic">{data.nameEn}</text>
      <text x="45.5" y="36" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#E91E8C" fillOpacity="0.5">{data.titleJa}</text>
      <text x="45.5" y="42" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#F06292" fillOpacity="0.4">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="75" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="pastel-blush-bg-b" x1="0.4" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#FFF5F8" />
          <stop offset="100%" stopColor="#FFE8F0" />
        </linearGradient>
        <filter id="pastel-blush-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="pastel-blush-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.18" />
          <feOffset dx="0.05" dy="0.08" />
          <feFlood floodColor="#AD1457" floodOpacity="0.05" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="pastel-blush-glow-b" cx="0.85" cy="0.8" r="0.4">
          <stop offset="0%" stopColor="#F8BBD9" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#FFF0F5" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="pastel-blush-line-b" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#F8BBD9" stopOpacity="0" />
          <stop offset="50%" stopColor="#F48FB1" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#F8BBD9" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#pastel-blush-bg-b)" />
      <rect width="91" height="55" filter="url(#pastel-blush-texture-b)" opacity="0.04" fill="#D4A0B0" />
      <circle cx="78" cy="44" r="14" fill="url(#pastel-blush-glow-b)" />
      <circle cx="82" cy="40" r="6" fill="#F8BBD9" fillOpacity="0.08" />
      <circle cx="74" cy="48" r="4" fill="#F48FB1" fillOpacity="0.06" />
      <circle cx="10" cy="8" r="5" fill="#FCE4EC" fillOpacity="0.1" />
      {data.logo && <image href={data.logo} x="41.5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="10" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#AD1457" filter="url(#pastel-blush-shadow-b)">{data.companyJa}</text>
      <text x="10" y="18.5" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#C2185B" fontStyle="italic">{data.companyEn}</text>
      <text x="10" y="23" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#E91E8C" fillOpacity="0.5">{data.titleJa}</text>
      <line x1="10" y1="26" x2="60" y2="26" stroke="url(#pastel-blush-line-b)" strokeWidth="0.15" />
      <text x="10" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#AD1457" fillOpacity="0.7">{data.tel}</text>
      <text x="10" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#AD1457" fillOpacity="0.7">{data.email}</text>
      <text x="10" y="39" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#AD1457" fillOpacity="0.7">{data.website}</text>
      <line x1="10" y1="42" x2="60" y2="42" stroke="url(#pastel-blush-line-b)" strokeWidth="0.12" />
      <text x="10" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#E91E8C" fillOpacity="0.4">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 2. MINT — Cool mint green with frosted glass layers
// ============================================================
const mintTemplate: TemplateDefinition = {
  id: 'pastel-mint',
  name: 'MINT',
  nameJa: '薄荷',
  category: 'pastel',
  designer: 'Pastel Atelier',
  description: '薄荷のような爽やかさ。清涼感あふれるミントグリーン。',
  accentColor: '#B2DFDB',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="pastel-mint-bg" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#E8F5F3" />
          <stop offset="50%" stopColor="#E0F2F1" />
          <stop offset="100%" stopColor="#D5EDEA" />
        </linearGradient>
        <linearGradient id="pastel-mint-frost" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#B2DFDB" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#80CBC4" stopOpacity="0.05" />
        </linearGradient>
        <filter id="pastel-mint-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="pastel-mint-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.05" dy="0.1" />
          <feFlood floodColor="#00695C" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="pastel-mint-bar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#80CBC4" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#B2DFDB" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#pastel-mint-bg)" />
      <rect width="91" height="55" filter="url(#pastel-mint-texture)" opacity="0.04" fill="#8BABA5" />
      {/* Frosted glass panels */}
      <rect x="58" y="3" width="28" height="18" rx="4" fill="url(#pastel-mint-frost)" />
      <rect x="62" y="6" width="20" height="12" rx="2.5" fill="#80CBC4" fillOpacity="0.08" />
      <rect x="4" y="36" width="24" height="14" rx="3.5" fill="url(#pastel-mint-frost)" />
      <rect x="7" y="38.5" width="18" height="9" rx="2" fill="#80CBC4" fillOpacity="0.06" />
      {/* Floating dot accents */}
      <circle cx="55" cy="44" r="1.5" fill="#4DB6AC" fillOpacity="0.1" />
      <circle cx="50" cy="48" r="1" fill="#80CBC4" fillOpacity="0.12" />
      <circle cx="88" cy="28" r="1.2" fill="#B2DFDB" fillOpacity="0.15" />
      <text x="45.5" y="21" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="6" letterSpacing="0.6" fill="#00695C" filter="url(#pastel-mint-shadow)">{data.nameJa}</text>
      <text x="45.5" y="28" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2.1" letterSpacing="0.4" fill="#00897B">{data.nameEn}</text>
      <line x1="30" y1="31.5" x2="61" y2="31.5" stroke="#4DB6AC" strokeWidth="0.12" strokeOpacity="0.4" />
      <text x="45.5" y="36" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#4DB6AC">{data.titleJa}</text>
      {data.logo && <image href={data.logo} x="75" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="pastel-mint-bg-b" x1="0.5" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#E8F5F3" />
          <stop offset="100%" stopColor="#D5EDEA" />
        </linearGradient>
        <filter id="pastel-mint-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="pastel-mint-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.18" />
          <feOffset dx="0.05" dy="0.08" />
          <feFlood floodColor="#00695C" floodOpacity="0.05" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#pastel-mint-bg-b)" />
      <rect width="91" height="55" filter="url(#pastel-mint-texture-b)" opacity="0.04" fill="#8BABA5" />
      <rect x="64" y="36" width="22" height="14" rx="3.5" fill="#B2DFDB" fillOpacity="0.15" />
      <rect x="67" y="38.5" width="16" height="9" rx="2" fill="#80CBC4" fillOpacity="0.08" />
      <circle cx="8" cy="48" r="2" fill="#4DB6AC" fillOpacity="0.08" />
      <circle cx="14" cy="50" r="1.2" fill="#80CBC4" fillOpacity="0.1" />
      {data.logo && <image href={data.logo} x="41.5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="10" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#00695C" filter="url(#pastel-mint-shadow-b)">{data.companyJa}</text>
      <text x="10" y="18.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#00897B">{data.companyEn}</text>
      <text x="10" y="23" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#4DB6AC">{data.titleJa}</text>
      <line x1="10" y1="26" x2="58" y2="26" stroke="#4DB6AC" strokeWidth="0.12" strokeOpacity="0.4" />
      <text x="10" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#00796B">{data.tel}</text>
      <text x="10" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#00796B">{data.email}</text>
      <text x="10" y="39" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#00796B">{data.website}</text>
      <line x1="10" y1="42" x2="58" y2="42" stroke="#4DB6AC" strokeWidth="0.1" strokeOpacity="0.3" />
      <text x="10" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#4DB6AC">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 3. LAVENDER — Dreamy lavender with wave ripples
// ============================================================
const lavenderTemplate: TemplateDefinition = {
  id: 'pastel-lavender',
  name: 'LAVENDER',
  nameJa: '薰衣草',
  category: 'pastel',
  designer: 'Pastel Atelier',
  description: 'ラベンダー畑の夢見心地。紫の霞がかった優しさ。',
  accentColor: '#D1C4E9',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="pastel-lavender-bg" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#F3EEFA" />
          <stop offset="50%" stopColor="#EDE7F6" />
          <stop offset="100%" stopColor="#E6DEF2" />
        </linearGradient>
        <linearGradient id="pastel-lavender-wave" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#D1C4E9" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#B39DDB" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#D1C4E9" stopOpacity="0.3" />
        </linearGradient>
        <filter id="pastel-lavender-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="pastel-lavender-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.05" dy="0.1" />
          <feFlood floodColor="#4527A0" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="pastel-lavender-orb" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#B39DDB" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#EDE7F6" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#pastel-lavender-bg)" />
      <rect width="91" height="55" filter="url(#pastel-lavender-texture)" opacity="0.04" fill="#A898B8" />
      {/* Layered wave patterns */}
      <path d="M 0,40 Q 12,36 24,40 Q 36,44 48,40 Q 60,36 72,40 Q 84,44 91,40 L 91,55 L 0,55 Z" fill="#D1C4E9" fillOpacity="0.18" />
      <path d="M 0,44 Q 14,40 28,44 Q 42,48 56,44 Q 70,40 82,44 Q 88,46 91,44 L 91,55 L 0,55 Z" fill="#B39DDB" fillOpacity="0.12" />
      <path d="M 0,48 Q 10,45 22,48 Q 34,51 46,48 Q 58,45 70,48 Q 82,51 91,48 L 91,55 L 0,55 Z" fill="#9575CD" fillOpacity="0.08" />
      {/* Floating orbs */}
      <circle cx="78" cy="10" r="8" fill="url(#pastel-lavender-orb)" />
      <circle cx="12" cy="14" r="5" fill="url(#pastel-lavender-orb)" />
      <circle cx="60" cy="6" r="3" fill="#D1C4E9" fillOpacity="0.1" />
      <text x="45.5" y="16" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="6.5" letterSpacing="0.8" fill="#4527A0" filter="url(#pastel-lavender-shadow)">{data.nameJa}</text>
      <text x="45.5" y="23" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="2.2" letterSpacing="0.4" fill="#5E35B1" fontStyle="italic">{data.nameEn}</text>
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#7E57C2">{data.titleJa}</text>
      <text x="45.5" y="36" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#9575CD">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="75" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="pastel-lavender-bg-b" x1="0.3" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#F3EEFA" />
          <stop offset="100%" stopColor="#E6DEF2" />
        </linearGradient>
        <filter id="pastel-lavender-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="pastel-lavender-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.18" />
          <feOffset dx="0.05" dy="0.08" />
          <feFlood floodColor="#4527A0" floodOpacity="0.05" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#pastel-lavender-bg-b)" />
      <rect width="91" height="55" filter="url(#pastel-lavender-texture-b)" opacity="0.04" fill="#A898B8" />
      {/* Top wave decoration */}
      <path d="M 0,0 L 91,0 L 91,9 Q 78,13 65,9 Q 52,5 39,9 Q 26,13 13,9 Q 6,7 0,9 Z" fill="#D1C4E9" fillOpacity="0.15" />
      <path d="M 0,0 L 91,0 L 91,5 Q 76,9 61,5 Q 46,1 31,5 Q 16,9 0,5 Z" fill="#B39DDB" fillOpacity="0.1" />
      <circle cx="80" cy="44" r="6" fill="#D1C4E9" fillOpacity="0.08" />
      <circle cx="8" cy="48" r="4" fill="#B39DDB" fillOpacity="0.06" />
      {data.logo && <image href={data.logo} x="41.5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="10" y="18" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#4527A0" filter="url(#pastel-lavender-shadow-b)">{data.companyJa}</text>
      <text x="10" y="22.5" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#5E35B1" fontStyle="italic">{data.companyEn}</text>
      <text x="10" y="27" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#7E57C2">{data.titleJa}</text>
      <line x1="10" y1="30" x2="60" y2="30" stroke="#B39DDB" strokeWidth="0.12" strokeOpacity="0.4" />
      <text x="10" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#5E35B1">{data.tel}</text>
      <text x="10" y="39" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#5E35B1">{data.email}</text>
      <text x="10" y="43" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#5E35B1">{data.website}</text>
      <line x1="10" y1="46" x2="60" y2="46" stroke="#B39DDB" strokeWidth="0.1" strokeOpacity="0.3" />
      <text x="10" y="50.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#9575CD">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 4. PEACH — Warm peach with soft oval bokeh
// ============================================================
const peachTemplate: TemplateDefinition = {
  id: 'pastel-peach',
  name: 'PEACH',
  nameJa: '桃',
  category: 'pastel',
  designer: 'Pastel Atelier',
  description: '桃のように温かく柔らかい。ピーチトーンの優しい空間。',
  accentColor: '#FFCCBC',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="pastel-peach-bg" x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0%" stopColor="#FFF8F2" />
          <stop offset="50%" stopColor="#FFF3E0" />
          <stop offset="100%" stopColor="#FFECD8" />
        </linearGradient>
        <radialGradient id="pastel-peach-glow" cx="0.3" cy="0.4" r="0.55">
          <stop offset="0%" stopColor="#FFCCBC" stopOpacity="0.35" />
          <stop offset="70%" stopColor="#FFAB91" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#FFF3E0" stopOpacity="0" />
        </radialGradient>
        <filter id="pastel-peach-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="pastel-peach-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.05" dy="0.1" />
          <feFlood floodColor="#BF360C" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="pastel-peach-stripe" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFAB91" stopOpacity="0" />
          <stop offset="50%" stopColor="#FFAB91" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FFAB91" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#pastel-peach-bg)" />
      <rect width="91" height="55" filter="url(#pastel-peach-texture)" opacity="0.04" fill="#C0A890" />
      <ellipse cx="28" cy="24" rx="22" ry="16" fill="url(#pastel-peach-glow)" />
      {/* Soft oval bokeh */}
      <ellipse cx="72" cy="40" rx="14" ry="9" fill="#FFAB91" fillOpacity="0.1" />
      <ellipse cx="80" cy="10" rx="9" ry="6" fill="#FFCCBC" fillOpacity="0.12" />
      <ellipse cx="6" cy="48" rx="6" ry="4" fill="#FF8A65" fillOpacity="0.06" />
      <circle cx="85" cy="30" r="2" fill="#FFCCBC" fillOpacity="0.15" />
      {/* Accent line */}
      <line x1="15" y1="32" x2="76" y2="32" stroke="url(#pastel-peach-stripe)" strokeWidth="0.15" />
      <text x="45.5" y="20" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="6.5" letterSpacing="0.6" fill="#BF360C" filter="url(#pastel-peach-shadow)">{data.nameJa}</text>
      <text x="45.5" y="27" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="2.1" letterSpacing="0.4" fill="#D84315" fontStyle="italic">{data.nameEn}</text>
      <text x="45.5" y="37" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#FF8A65">{data.titleJa}</text>
      <text x="45.5" y="43" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#FFAB91">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="75" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="pastel-peach-bg-b" x1="0.6" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#FFF8F2" />
          <stop offset="100%" stopColor="#FFECD8" />
        </linearGradient>
        <filter id="pastel-peach-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="pastel-peach-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.18" />
          <feOffset dx="0.05" dy="0.08" />
          <feFlood floodColor="#BF360C" floodOpacity="0.05" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#pastel-peach-bg-b)" />
      <rect width="91" height="55" filter="url(#pastel-peach-texture-b)" opacity="0.04" fill="#C0A890" />
      <ellipse cx="78" cy="44" rx="10" ry="7" fill="#FFCCBC" fillOpacity="0.12" />
      <ellipse cx="84" cy="38" rx="6" ry="4" fill="#FFAB91" fillOpacity="0.08" />
      <ellipse cx="10" cy="8" rx="7" ry="5" fill="#FFCCBC" fillOpacity="0.08" />
      <circle cx="4" cy="35" r="2.5" fill="#FF8A65" fillOpacity="0.06" />
      {data.logo && <image href={data.logo} x="41.5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="10" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#BF360C" filter="url(#pastel-peach-shadow-b)">{data.companyJa}</text>
      <text x="10" y="18.5" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#D84315" fontStyle="italic">{data.companyEn}</text>
      <text x="10" y="23" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#FF8A65">{data.titleJa}</text>
      <line x1="10" y1="26" x2="58" y2="26" stroke="#FFAB91" strokeWidth="0.12" strokeOpacity="0.4" />
      <text x="10" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#D84315">{data.tel}</text>
      <text x="10" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#D84315">{data.email}</text>
      <text x="10" y="39" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#D84315">{data.website}</text>
      <line x1="10" y1="42" x2="58" y2="42" stroke="#FFAB91" strokeWidth="0.1" strokeOpacity="0.3" />
      <text x="10" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#FF8A65">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 5. SKY-P — Soft sky blue with cloud formations
// ============================================================
const skyPTemplate: TemplateDefinition = {
  id: 'pastel-sky-p',
  name: 'SKY-P',
  nameJa: '蒼',
  category: 'pastel',
  designer: 'Pastel Atelier',
  description: '柔らかな空色。雲のような形が浮かぶ穏やかな青空。',
  accentColor: '#BBDEFB',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="pastel-skyp-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8F2FC" />
          <stop offset="40%" stopColor="#E3F2FD" />
          <stop offset="100%" stopColor="#DCEEFB" />
        </linearGradient>
        <linearGradient id="pastel-skyp-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#BBDEFB" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#E3F2FD" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="pastel-skyp-cloud" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
          <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
        <filter id="pastel-skyp-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="pastel-skyp-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.05" dy="0.1" />
          <feFlood floodColor="#1565C0" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#pastel-skyp-bg)" />
      <rect width="91" height="55" filter="url(#pastel-skyp-texture)" opacity="0.03" fill="#90A8C0" />
      <rect width="91" height="28" fill="url(#pastel-skyp-sky)" />
      {/* Cloud cluster top-right */}
      <ellipse cx="72" cy="10" rx="14" ry="6" fill="url(#pastel-skyp-cloud)" />
      <ellipse cx="64" cy="8" rx="9" ry="4.5" fill="#FFFFFF" fillOpacity="0.35" />
      <ellipse cx="80" cy="9" rx="8" ry="4" fill="#FFFFFF" fillOpacity="0.3" />
      <ellipse cx="69" cy="12" rx="6" ry="3" fill="#FFFFFF" fillOpacity="0.25" />
      {/* Cloud cluster bottom-left */}
      <ellipse cx="22" cy="44" rx="12" ry="5" fill="url(#pastel-skyp-cloud)" />
      <ellipse cx="14" cy="42" rx="7" ry="3.5" fill="#FFFFFF" fillOpacity="0.25" />
      <ellipse cx="30" cy="43" rx="6" ry="3" fill="#FFFFFF" fillOpacity="0.2" />
      <text x="45.5" y="21" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="6.5" letterSpacing="0.7" fill="#1565C0" filter="url(#pastel-skyp-shadow)">{data.nameJa}</text>
      <text x="45.5" y="28" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2.1" letterSpacing="0.4" fill="#1976D2">{data.nameEn}</text>
      <text x="45.5" y="35" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#42A5F5">{data.titleJa}</text>
      {data.logo && <image href={data.logo} x="75" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="pastel-skyp-bg-b" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#E8F2FC" />
          <stop offset="100%" stopColor="#DCEEFB" />
        </linearGradient>
        <filter id="pastel-skyp-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="pastel-skyp-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.18" />
          <feOffset dx="0.05" dy="0.08" />
          <feFlood floodColor="#1565C0" floodOpacity="0.05" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#pastel-skyp-bg-b)" />
      <rect width="91" height="55" filter="url(#pastel-skyp-texture-b)" opacity="0.03" fill="#90A8C0" />
      <ellipse cx="78" cy="8" rx="10" ry="4.5" fill="#FFFFFF" fillOpacity="0.3" />
      <ellipse cx="72" cy="7" rx="6" ry="3" fill="#FFFFFF" fillOpacity="0.25" />
      <ellipse cx="85" cy="7.5" rx="5" ry="2.5" fill="#FFFFFF" fillOpacity="0.2" />
      <ellipse cx="10" cy="48" r="4" fill="#BBDEFB" fillOpacity="0.08" />
      {data.logo && <image href={data.logo} x="41.5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="10" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#1565C0" filter="url(#pastel-skyp-shadow-b)">{data.companyJa}</text>
      <text x="10" y="18.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#1976D2">{data.companyEn}</text>
      <text x="10" y="23" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#42A5F5">{data.titleJa}</text>
      <line x1="10" y1="26" x2="58" y2="26" stroke="#90CAF9" strokeWidth="0.12" strokeOpacity="0.4" />
      <text x="10" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#1976D2">{data.tel}</text>
      <text x="10" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#1976D2">{data.email}</text>
      <text x="10" y="39" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#1976D2">{data.website}</text>
      <line x1="10" y1="42" x2="58" y2="42" stroke="#90CAF9" strokeWidth="0.1" strokeOpacity="0.3" />
      <text x="10" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#64B5F6">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 6. LEMON — Soft lemon yellow with citrus slice motifs
// ============================================================
const lemonTemplate: TemplateDefinition = {
  id: 'pastel-lemon',
  name: 'LEMON',
  nameJa: '檸檬',
  category: 'pastel',
  designer: 'Pastel Atelier',
  description: 'レモンの爽快さ。明るいイエローが元気を運ぶ。',
  accentColor: '#FFF9C4',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="pastel-lemon-bg" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#FFFEF2" />
          <stop offset="50%" stopColor="#FFFDE7" />
          <stop offset="100%" stopColor="#FFF9D6" />
        </linearGradient>
        <radialGradient id="pastel-lemon-slice" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#FFF9C4" stopOpacity="0.5" />
          <stop offset="60%" stopColor="#FFF176" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#FFD54F" stopOpacity="0.05" />
        </radialGradient>
        <filter id="pastel-lemon-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="pastel-lemon-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.05" dy="0.1" />
          <feFlood floodColor="#F57F17" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#pastel-lemon-bg)" />
      <rect width="91" height="55" filter="url(#pastel-lemon-texture)" opacity="0.03" fill="#B8A870" />
      {/* Dot grid pattern corners */}
      {[5, 10, 15, 20, 25].map((x) =>
        [5, 10, 15].map((y, j) => (
          <circle key={`pastel-lemon-dot-${x}-${j}`} cx={x} cy={y} r="0.6" fill="#FFF176" fillOpacity={0.35 - j * 0.08} />
        ))
      )}
      {[66, 71, 76, 81, 86].map((x) =>
        [40, 45, 50].map((y, j) => (
          <circle key={`pastel-lemon-bdot-${x}-${j}`} cx={x} cy={y} r="0.6" fill="#FFF176" fillOpacity={0.25 - j * 0.06} />
        ))
      )}
      {/* Citrus slice */}
      <circle cx="80" cy="10" r="8" fill="url(#pastel-lemon-slice)" />
      <circle cx="80" cy="10" r="5.5" fill="none" stroke="#FFD54F" strokeWidth="0.15" strokeOpacity="0.25" />
      <circle cx="80" cy="10" r="3" fill="none" stroke="#FBC02D" strokeWidth="0.1" strokeOpacity="0.15" />
      {/* Slice segments */}
      <line x1="80" y1="5" x2="80" y2="15" stroke="#FFD54F" strokeWidth="0.06" strokeOpacity="0.15" />
      <line x1="75.5" y1="7" x2="84.5" y2="13" stroke="#FFD54F" strokeWidth="0.06" strokeOpacity="0.12" />
      <line x1="75.5" y1="13" x2="84.5" y2="7" stroke="#FFD54F" strokeWidth="0.06" strokeOpacity="0.12" />
      <text x="45.5" y="23" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="6" letterSpacing="0.6" fill="#F57F17" filter="url(#pastel-lemon-shadow)">{data.nameJa}</text>
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2.1" letterSpacing="0.4" fill="#F9A825">{data.nameEn}</text>
      <text x="45.5" y="37" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#FBC02D">{data.titleJa}</text>
      {data.logo && <image href={data.logo} x="75" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="pastel-lemon-bg-b" x1="0.5" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#FFFEF2" />
          <stop offset="100%" stopColor="#FFF9D6" />
        </linearGradient>
        <filter id="pastel-lemon-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="pastel-lemon-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.18" />
          <feOffset dx="0.05" dy="0.08" />
          <feFlood floodColor="#F57F17" floodOpacity="0.05" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#pastel-lemon-bg-b)" />
      <rect width="91" height="55" filter="url(#pastel-lemon-texture-b)" opacity="0.03" fill="#B8A870" />
      {[72, 77, 82, 87].map((x) =>
        [42, 47, 52].map((y, j) => (
          <circle key={`pastel-lemon-back-${x}-${j}`} cx={x} cy={y} r="0.5" fill="#FFF176" fillOpacity={0.2 - j * 0.05} />
        ))
      )}
      <circle cx="82" cy="8" r="5" fill="#FFF9C4" fillOpacity="0.2" />
      <circle cx="82" cy="8" r="3.5" fill="none" stroke="#FFD54F" strokeWidth="0.1" strokeOpacity="0.15" />
      {data.logo && <image href={data.logo} x="41.5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="10" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#F57F17" filter="url(#pastel-lemon-shadow-b)">{data.companyJa}</text>
      <text x="10" y="18.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#F9A825">{data.companyEn}</text>
      <text x="10" y="23" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#FBC02D">{data.titleJa}</text>
      <line x1="10" y1="26" x2="58" y2="26" stroke="#FFD54F" strokeWidth="0.12" strokeOpacity="0.35" />
      <text x="10" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#F9A825">{data.tel}</text>
      <text x="10" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#F9A825">{data.email}</text>
      <text x="10" y="39" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#F9A825">{data.website}</text>
      <line x1="10" y1="42" x2="58" y2="42" stroke="#FFD54F" strokeWidth="0.1" strokeOpacity="0.25" />
      <text x="10" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#FBC02D">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 7. LILAC — Wisteria-like cascading clusters
// ============================================================
const lilacTemplate: TemplateDefinition = {
  id: 'pastel-lilac',
  name: 'LILAC',
  nameJa: '藤',
  category: 'pastel',
  designer: 'Pastel Atelier',
  description: '藤の花のような薄紫。枝垂れる花房のリズム。',
  accentColor: '#CE93D8',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="pastel-lilac-bg" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#F8F0FB" />
          <stop offset="50%" stopColor="#F3E5F5" />
          <stop offset="100%" stopColor="#EDD8F0" />
        </linearGradient>
        <linearGradient id="pastel-lilac-vine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8E24AA" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#6A1B9A" stopOpacity="0.1" />
        </linearGradient>
        <filter id="pastel-lilac-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="pastel-lilac-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.05" dy="0.1" />
          <feFlood floodColor="#6A1B9A" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="pastel-lilac-glow" cx="0.5" cy="0.3" r="0.6">
          <stop offset="0%" stopColor="#CE93D8" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#F3E5F5" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#pastel-lilac-bg)" />
      <rect width="91" height="55" filter="url(#pastel-lilac-texture)" opacity="0.04" fill="#B090B8" />
      {/* Hanging wisteria clusters - left side */}
      <path d="M 8,0 Q 10,4 12,3 Q 16,1 20,2 Q 24,3 28,1 Q 30,0 32,1" stroke="#8E24AA" strokeWidth="0.12" fill="none" strokeOpacity="0.18" />
      <g opacity="0.28">
        <circle cx="12" cy="3" r="1.3" fill="#CE93D8" />
        <circle cx="12" cy="6.5" r="1.1" fill="#BA68C8" />
        <circle cx="12" cy="9.5" r="0.9" fill="#AB47BC" />
        <circle cx="12" cy="12" r="0.7" fill="#9C27B0" />
        <circle cx="12" cy="14" r="0.5" fill="#7B1FA2" />
      </g>
      <g opacity="0.22">
        <circle cx="20" cy="2.5" r="1.1" fill="#CE93D8" />
        <circle cx="20" cy="5.5" r="0.9" fill="#BA68C8" />
        <circle cx="20" cy="8" r="0.7" fill="#AB47BC" />
        <circle cx="20" cy="10" r="0.5" fill="#9C27B0" />
      </g>
      <g opacity="0.18">
        <circle cx="28" cy="3" r="0.9" fill="#CE93D8" />
        <circle cx="28" cy="5.5" r="0.7" fill="#BA68C8" />
        <circle cx="28" cy="7.5" r="0.5" fill="#AB47BC" />
      </g>
      {/* Right side clusters */}
      <path d="M 70,0 Q 73,2 75,1 Q 78,0 80,2 Q 83,3 86,1 Q 88,0 91,1" stroke="#8E24AA" strokeWidth="0.12" fill="none" strokeOpacity="0.14" />
      <g opacity="0.24">
        <circle cx="75" cy="2" r="1.2" fill="#CE93D8" />
        <circle cx="75" cy="5" r="1" fill="#BA68C8" />
        <circle cx="75" cy="8" r="0.8" fill="#AB47BC" />
        <circle cx="75" cy="10.5" r="0.6" fill="#9C27B0" />
      </g>
      <g opacity="0.18">
        <circle cx="83" cy="3" r="0.9" fill="#CE93D8" />
        <circle cx="83" cy="5.5" r="0.7" fill="#BA68C8" />
        <circle cx="83" cy="7.5" r="0.5" fill="#AB47BC" />
      </g>
      <circle cx="50" cy="8" r="10" fill="url(#pastel-lilac-glow)" />
      <text x="45.5" y="23" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="6.5" letterSpacing="0.7" fill="#6A1B9A" filter="url(#pastel-lilac-shadow)">{data.nameJa}</text>
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="2.1" letterSpacing="0.4" fill="#7B1FA2" fontStyle="italic">{data.nameEn}</text>
      <text x="45.5" y="38" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#AB47BC">{data.titleJa}</text>
      <text x="45.5" y="44" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#CE93D8">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="75" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="pastel-lilac-bg-b" x1="0.3" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#F8F0FB" />
          <stop offset="100%" stopColor="#EDD8F0" />
        </linearGradient>
        <filter id="pastel-lilac-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="pastel-lilac-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.18" />
          <feOffset dx="0.05" dy="0.08" />
          <feFlood floodColor="#6A1B9A" floodOpacity="0.05" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#pastel-lilac-bg-b)" />
      <rect width="91" height="55" filter="url(#pastel-lilac-texture-b)" opacity="0.04" fill="#B090B8" />
      {/* Subtle accent clusters */}
      <g opacity="0.12">
        <circle cx="80" cy="3" r="0.9" fill="#CE93D8" />
        <circle cx="80" cy="5.5" r="0.7" fill="#BA68C8" />
        <circle cx="80" cy="7.5" r="0.5" fill="#AB47BC" />
      </g>
      <g opacity="0.08">
        <circle cx="86" cy="4" r="0.7" fill="#CE93D8" />
        <circle cx="86" cy="6" r="0.5" fill="#BA68C8" />
      </g>
      <circle cx="12" cy="48" r="4" fill="#CE93D8" fillOpacity="0.06" />
      {data.logo && <image href={data.logo} x="41.5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="10" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#6A1B9A" filter="url(#pastel-lilac-shadow-b)">{data.companyJa}</text>
      <text x="10" y="18.5" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#7B1FA2" fontStyle="italic">{data.companyEn}</text>
      <text x="10" y="23" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#AB47BC">{data.titleJa}</text>
      <line x1="10" y1="26" x2="58" y2="26" stroke="#CE93D8" strokeWidth="0.12" strokeOpacity="0.35" />
      <text x="10" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#7B1FA2">{data.tel}</text>
      <text x="10" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#7B1FA2">{data.email}</text>
      <text x="10" y="39" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#7B1FA2">{data.website}</text>
      <line x1="10" y1="42" x2="58" y2="42" stroke="#CE93D8" strokeWidth="0.1" strokeOpacity="0.25" />
      <text x="10" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#AB47BC">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 8. CORAL-P — Warm coral with overlapping translucent rings
// ============================================================
const coralPTemplate: TemplateDefinition = {
  id: 'pastel-coral-p',
  name: 'CORAL-P',
  nameJa: '珊',
  category: 'pastel',
  designer: 'Pastel Atelier',
  description: '珊瑚色の温もり。透明な円が重なり合う穏やかな調和。',
  accentColor: '#EF9A9A',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="pastel-coralp-bg" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0%" stopColor="#FFF2F0" />
          <stop offset="50%" stopColor="#FFEBEE" />
          <stop offset="100%" stopColor="#FFE2E6" />
        </linearGradient>
        <radialGradient id="pastel-coralp-orb1" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#EF9A9A" stopOpacity="0.2" />
          <stop offset="70%" stopColor="#E57373" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#FFEBEE" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="pastel-coralp-orb2" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#E57373" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FFEBEE" stopOpacity="0" />
        </radialGradient>
        <filter id="pastel-coralp-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="pastel-coralp-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.05" dy="0.1" />
          <feFlood floodColor="#C62828" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#pastel-coralp-bg)" />
      <rect width="91" height="55" filter="url(#pastel-coralp-texture)" opacity="0.04" fill="#C0A0A0" />
      {/* Overlapping coral circles */}
      <circle cx="70" cy="14" r="14" fill="url(#pastel-coralp-orb1)" />
      <circle cx="80" cy="18" r="11" fill="url(#pastel-coralp-orb2)" />
      <circle cx="74" cy="22" r="8" fill="#EF5350" fillOpacity="0.04" />
      {/* Ring accents */}
      <circle cx="72" cy="16" r="9" fill="none" stroke="#EF9A9A" strokeWidth="0.15" strokeOpacity="0.15" />
      <circle cx="78" cy="20" r="6" fill="none" stroke="#E57373" strokeWidth="0.1" strokeOpacity="0.12" />
      {/* Bottom-left group */}
      <circle cx="18" cy="44" r="11" fill="url(#pastel-coralp-orb1)" />
      <circle cx="26" cy="48" r="8" fill="url(#pastel-coralp-orb2)" />
      <circle cx="12" cy="50" r="6" fill="#EF5350" fillOpacity="0.03" />
      <text x="45.5" y="21" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="6.5" letterSpacing="0.6" fill="#C62828" filter="url(#pastel-coralp-shadow)">{data.nameJa}</text>
      <text x="45.5" y="28" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2.1" letterSpacing="0.4" fill="#D32F2F">{data.nameEn}</text>
      <text x="45.5" y="35.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#E57373">{data.titleJa}</text>
      {data.logo && <image href={data.logo} x="75" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="pastel-coralp-bg-b" x1="0.4" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#FFF2F0" />
          <stop offset="100%" stopColor="#FFE2E6" />
        </linearGradient>
        <filter id="pastel-coralp-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="pastel-coralp-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.18" />
          <feOffset dx="0.05" dy="0.08" />
          <feFlood floodColor="#C62828" floodOpacity="0.05" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#pastel-coralp-bg-b)" />
      <rect width="91" height="55" filter="url(#pastel-coralp-texture-b)" opacity="0.04" fill="#C0A0A0" />
      <circle cx="80" cy="44" r="9" fill="#EF9A9A" fillOpacity="0.08" />
      <circle cx="76" cy="48" r="6" fill="#E57373" fillOpacity="0.05" />
      <circle cx="84" cy="40" r="4" fill="#EF9A9A" fillOpacity="0.06" />
      <circle cx="10" cy="8" r="5" fill="#EF9A9A" fillOpacity="0.06" />
      {data.logo && <image href={data.logo} x="41.5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="10" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#C62828" filter="url(#pastel-coralp-shadow-b)">{data.companyJa}</text>
      <text x="10" y="18.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#D32F2F">{data.companyEn}</text>
      <text x="10" y="23" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#E57373">{data.titleJa}</text>
      <line x1="10" y1="26" x2="58" y2="26" stroke="#EF9A9A" strokeWidth="0.12" strokeOpacity="0.4" />
      <text x="10" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#D32F2F">{data.tel}</text>
      <text x="10" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#D32F2F">{data.email}</text>
      <text x="10" y="39" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#D32F2F">{data.website}</text>
      <line x1="10" y1="42" x2="58" y2="42" stroke="#EF9A9A" strokeWidth="0.1" strokeOpacity="0.3" />
      <text x="10" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#E57373">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 9. SAGE — Muted sage green with leaf vein patterns
// ============================================================
const sageTemplate: TemplateDefinition = {
  id: 'pastel-sage',
  name: 'SAGE',
  nameJa: '鼠',
  category: 'pastel',
  designer: 'Pastel Atelier',
  description: 'セージの落ち着き。灰みがかった緑が静けさを纏う。',
  accentColor: '#A5D6A7',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="pastel-sage-bg" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#EFF5EF" />
          <stop offset="50%" stopColor="#E8F5E9" />
          <stop offset="100%" stopColor="#DEEDDF" />
        </linearGradient>
        <linearGradient id="pastel-sage-leaf" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C8E6C9" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#E8F5E9" stopOpacity="0" />
        </linearGradient>
        <filter id="pastel-sage-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="5" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="pastel-sage-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.05" dy="0.1" />
          <feFlood floodColor="#2E7D32" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#pastel-sage-bg)" />
      <rect width="91" height="55" filter="url(#pastel-sage-texture)" opacity="0.05" fill="#8B9B80" />
      {/* Large sage leaf silhouette */}
      <ellipse cx="72" cy="28" rx="20" ry="16" fill="url(#pastel-sage-leaf)" />
      {/* Leaf vein network */}
      <path d="M 58,28 Q 72,28 86,28" stroke="#A5D6A7" strokeWidth="0.15" fill="none" strokeOpacity="0.25" />
      <path d="M 64,20 Q 70,25 72,28" stroke="#A5D6A7" strokeWidth="0.1" fill="none" strokeOpacity="0.18" />
      <path d="M 65,36 Q 70,31 72,28" stroke="#A5D6A7" strokeWidth="0.1" fill="none" strokeOpacity="0.18" />
      <path d="M 60,22 Q 67,26 72,28" stroke="#A5D6A7" strokeWidth="0.08" fill="none" strokeOpacity="0.12" />
      <path d="M 61,34 Q 68,30 72,28" stroke="#A5D6A7" strokeWidth="0.08" fill="none" strokeOpacity="0.12" />
      <path d="M 76,19 Q 74,24 72,28" stroke="#A5D6A7" strokeWidth="0.08" fill="none" strokeOpacity="0.12" />
      <path d="M 78,37 Q 75,32 72,28" stroke="#A5D6A7" strokeWidth="0.08" fill="none" strokeOpacity="0.12" />
      <path d="M 82,22 Q 77,25 72,28" stroke="#A5D6A7" strokeWidth="0.06" fill="none" strokeOpacity="0.1" />
      <circle cx="10" cy="48" r="4" fill="#C8E6C9" fillOpacity="0.1" />
      <text x="10" y="19" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="6" letterSpacing="0.6" fill="#2E7D32" filter="url(#pastel-sage-shadow)">{data.nameJa}</text>
      <text x="10" y="26" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="2.1" letterSpacing="0.4" fill="#388E3C" fontStyle="italic">{data.nameEn}</text>
      <text x="10" y="34" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#66BB6A">{data.titleJa}</text>
      <text x="10" y="41" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#81C784">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="75" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="pastel-sage-bg-b" x1="0.5" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#EFF5EF" />
          <stop offset="100%" stopColor="#DEEDDF" />
        </linearGradient>
        <filter id="pastel-sage-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="5" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="pastel-sage-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.18" />
          <feOffset dx="0.05" dy="0.08" />
          <feFlood floodColor="#2E7D32" floodOpacity="0.05" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#pastel-sage-bg-b)" />
      <rect width="91" height="55" filter="url(#pastel-sage-texture-b)" opacity="0.05" fill="#8B9B80" />
      <ellipse cx="80" cy="44" rx="12" ry="8" fill="#C8E6C9" fillOpacity="0.12" />
      <path d="M 74,44 Q 80,44 86,44" stroke="#A5D6A7" strokeWidth="0.1" fill="none" strokeOpacity="0.15" />
      <path d="M 78,40 Q 80,42 80,44" stroke="#A5D6A7" strokeWidth="0.06" fill="none" strokeOpacity="0.1" />
      <path d="M 78,48 Q 80,46 80,44" stroke="#A5D6A7" strokeWidth="0.06" fill="none" strokeOpacity="0.1" />
      <circle cx="8" cy="8" r="3" fill="#C8E6C9" fillOpacity="0.08" />
      {data.logo && <image href={data.logo} x="41.5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="10" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#2E7D32" filter="url(#pastel-sage-shadow-b)">{data.companyJa}</text>
      <text x="10" y="18.5" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#388E3C" fontStyle="italic">{data.companyEn}</text>
      <text x="10" y="23" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#66BB6A">{data.titleJa}</text>
      <line x1="10" y1="26" x2="58" y2="26" stroke="#A5D6A7" strokeWidth="0.12" strokeOpacity="0.35" />
      <text x="10" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#388E3C">{data.tel}</text>
      <text x="10" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#388E3C">{data.email}</text>
      <text x="10" y="39" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#388E3C">{data.website}</text>
      <line x1="10" y1="42" x2="58" y2="42" stroke="#A5D6A7" strokeWidth="0.1" strokeOpacity="0.25" />
      <text x="10" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#66BB6A">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 10. CREAM — Warm cream with diagonal stripe weave
// ============================================================
const creamTemplate: TemplateDefinition = {
  id: 'pastel-cream',
  name: 'CREAM',
  nameJa: '練',
  category: 'pastel',
  designer: 'Pastel Atelier',
  description: 'クリームの温かみ。バニラ色のやわらかな品格。',
  accentColor: '#FFE0B2',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="pastel-cream-bg" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#FFFCF5" />
          <stop offset="50%" stopColor="#FFF8E1" />
          <stop offset="100%" stopColor="#FFF2D0" />
        </linearGradient>
        <linearGradient id="pastel-cream-diag" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFE0B2" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#FFF8E1" stopOpacity="0" />
        </linearGradient>
        <filter id="pastel-cream-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="5" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="pastel-cream-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.05" dy="0.1" />
          <feFlood floodColor="#E65100" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="pastel-cream-accent" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFCC80" stopOpacity="0" />
          <stop offset="50%" stopColor="#FFCC80" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FFCC80" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#pastel-cream-bg)" />
      <rect width="91" height="55" filter="url(#pastel-cream-texture)" opacity="0.05" fill="#B8A880" />
      {/* Diagonal stripe weave */}
      <line x1="52" y1="0" x2="91" y2="39" stroke="#FFE0B2" strokeWidth="9" strokeOpacity="0.06" />
      <line x1="62" y1="0" x2="91" y2="29" stroke="#FFCC80" strokeWidth="6" strokeOpacity="0.05" />
      <line x1="72" y1="0" x2="91" y2="19" stroke="#FFB74D" strokeWidth="4" strokeOpacity="0.04" />
      <line x1="0" y1="28" x2="33" y2="55" stroke="#FFE0B2" strokeWidth="8" strokeOpacity="0.05" />
      <line x1="0" y1="36" x2="25" y2="55" stroke="#FFCC80" strokeWidth="5" strokeOpacity="0.04" />
      {/* Small diamond accents */}
      <path d="M 82,6 L 84,8 L 82,10 L 80,8 Z" fill="#FFE0B2" fillOpacity="0.12" />
      <path d="M 8,46 L 10,48 L 8,50 L 6,48 Z" fill="#FFCC80" fillOpacity="0.1" />
      <line x1="15" y1="32" x2="76" y2="32" stroke="url(#pastel-cream-accent)" strokeWidth="0.15" />
      <text x="45.5" y="20" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="6.5" letterSpacing="0.6" fill="#E65100" filter="url(#pastel-cream-shadow)">{data.nameJa}</text>
      <text x="45.5" y="27" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="2.2" letterSpacing="0.4" fill="#EF6C00" fontStyle="italic">{data.nameEn}</text>
      <text x="45.5" y="37" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#FF9800">{data.titleJa}</text>
      <text x="45.5" y="43" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#FFB74D">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="75" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="pastel-cream-bg-b" x1="0.5" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#FFFCF5" />
          <stop offset="100%" stopColor="#FFF2D0" />
        </linearGradient>
        <filter id="pastel-cream-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="5" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="pastel-cream-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.18" />
          <feOffset dx="0.05" dy="0.08" />
          <feFlood floodColor="#E65100" floodOpacity="0.05" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#pastel-cream-bg-b)" />
      <rect width="91" height="55" filter="url(#pastel-cream-texture-b)" opacity="0.05" fill="#B8A880" />
      <line x1="58" y1="38" x2="91" y2="55" stroke="#FFE0B2" strokeWidth="7" strokeOpacity="0.05" />
      <line x1="66" y1="38" x2="91" y2="48" stroke="#FFCC80" strokeWidth="4" strokeOpacity="0.04" />
      <path d="M 80,42 L 82,44 L 80,46 L 78,44 Z" fill="#FFE0B2" fillOpacity="0.1" />
      <circle cx="8" cy="8" r="3" fill="#FFE0B2" fillOpacity="0.08" />
      {data.logo && <image href={data.logo} x="41.5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="10" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#E65100" filter="url(#pastel-cream-shadow-b)">{data.companyJa}</text>
      <text x="10" y="18.5" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#EF6C00" fontStyle="italic">{data.companyEn}</text>
      <text x="10" y="23" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#FF9800">{data.titleJa}</text>
      <line x1="10" y1="26" x2="58" y2="26" stroke="#FFCC80" strokeWidth="0.12" strokeOpacity="0.4" />
      <text x="10" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#EF6C00">{data.tel}</text>
      <text x="10" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#EF6C00">{data.email}</text>
      <text x="10" y="39" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#EF6C00">{data.website}</text>
      <line x1="10" y1="42" x2="58" y2="42" stroke="#FFCC80" strokeWidth="0.1" strokeOpacity="0.3" />
      <text x="10" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#FF9800">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

export const pastelTemplates: TemplateDefinition[] = [
  blushTemplate,
  mintTemplate,
  lavenderTemplate,
  peachTemplate,
  skyPTemplate,
  lemonTemplate,
  lilacTemplate,
  coralPTemplate,
  sageTemplate,
  creamTemplate,
];
