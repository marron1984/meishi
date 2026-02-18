import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. SPLASH (飛) — Paint splatter explosion
// ============================================================
const splashTemplate: TemplateDefinition = {
  id: 'pop-splash',
  name: 'SPLASH',
  nameJa: '飛',
  category: 'pop',
  designer: 'Splash Studio',
  description: '飛び散るペンキが弾けるエネルギー。',
  accentColor: '#FF1493',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="pop-splash-bg" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#fefcfd" />
          <stop offset="100%" stopColor="#fdf5f8" />
        </linearGradient>
        <radialGradient id="pop-splash-glow1" cx="0.2" cy="0.25" r="0.35">
          <stop offset="0%" stopColor="#FF1493" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FF1493" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="pop-splash-glow2" cx="0.8" cy="0.75" r="0.35">
          <stop offset="0%" stopColor="#00BFFF" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#00BFFF" stopOpacity="0" />
        </radialGradient>
        <filter id="pop-splash-vibrant">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="overlay" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="pop-splash-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#FF1493" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#pop-splash-bg)" />
      <rect width="91" height="55" fill="url(#pop-splash-glow1)" />
      <rect width="91" height="55" fill="url(#pop-splash-glow2)" />
      {/* Large paint splashes */}
      <circle cx="15" cy="12" r="8" fill="#FF1493" opacity="0.18" />
      <circle cx="18" cy="10" r="5" fill="#FF1493" opacity="0.25" />
      <circle cx="12" cy="15" r="3" fill="#FF1493" opacity="0.12" />
      <circle cx="75" cy="42" r="10" fill="#00BFFF" opacity="0.12" />
      <circle cx="80" cy="38" r="6" fill="#00BFFF" opacity="0.2" />
      <circle cx="70" cy="45" r="4" fill="#00BFFF" opacity="0.1" />
      <circle cx="50" cy="8" r="5" fill="#FFD700" opacity="0.15" />
      <circle cx="55" cy="6" r="3" fill="#FFD700" opacity="0.2" />
      {/* Splash droplets */}
      <circle cx="25" cy="6" r="1" fill="#FF1493" opacity="0.3" />
      <circle cx="10" cy="22" r="0.8" fill="#FF1493" opacity="0.25" />
      <circle cx="65" cy="48" r="1.2" fill="#00BFFF" opacity="0.3" />
      <circle cx="85" cy="30" r="0.7" fill="#00BFFF" opacity="0.2" />
      <circle cx="42" cy="4" r="0.6" fill="#FFD700" opacity="0.3" />
      {/* Streak marks */}
      <path d="M6,20 Q8,18 10,22" fill="none" stroke="#FF1493" strokeWidth="0.2" opacity="0.2" />
      <path d="M82,35 Q84,33 86,37" fill="none" stroke="#00BFFF" strokeWidth="0.2" opacity="0.2" />
      <path d="M48,3 Q50,5 52,2" fill="none" stroke="#FFD700" strokeWidth="0.15" opacity="0.25" />
      {data.logo && <image href={data.logo} x="76" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.35" />}
      <g filter="url(#pop-splash-shadow)">
        <text x="45.5" y="25" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="900" fontSize="6.5" letterSpacing="0.5" fill="#FF1493">{data.nameJa}</text>
      </g>
      <text x="45.5" y="33" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="2.2" letterSpacing="0.3" fill="#00BFFF">{data.nameEn.toUpperCase()}</text>
      <line x1="30" y1="36" x2="61" y2="36" stroke="#FFD700" strokeWidth="0.15" opacity="0.5" />
      <text x="45.5" y="41" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.6" fill="#888888">{data.titleJa}</text>
      <text x="45.5" y="46" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#aaaaaa">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="pop-splash-b-bg" x1="0.4" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#fdf5f8" />
        </linearGradient>
        <filter id="pop-splash-b-vibrant">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="overlay" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="pop-splash-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.08" dy="0.1" />
          <feFlood floodColor="#FF1493" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#pop-splash-b-bg)" />
      {/* Subtle splashes */}
      <circle cx="80" cy="8" r="6" fill="#FF1493" opacity="0.08" />
      <circle cx="10" cy="48" r="5" fill="#00BFFF" opacity="0.06" />
      <circle cx="70" cy="50" r="3" fill="#FFD700" opacity="0.08" />
      <circle cx="5" cy="10" r="2" fill="#FFD700" opacity="0.06" />
      {/* Droplet accents */}
      <circle cx="85" cy="14" r="0.5" fill="#FF1493" opacity="0.2" />
      <circle cx="6" cy="44" r="0.4" fill="#00BFFF" opacity="0.15" />
      {data.logo && <image href={data.logo} x="38" y="2" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.25" />}
      <text x="45.5" y="14" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="800" fontSize="2.5" fill="#FF1493">{data.companyJa}</text>
      <text x="45.5" y="18.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1.5" fill="#00BFFF">{data.companyEn}</text>
      <text x="45.5" y="22" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.4" fill="#999999">{data.titleJa}</text>
      <line x1="20" y1="24.5" x2="71" y2="24.5" stroke="#FF1493" strokeWidth="0.2" opacity="0.3" />
      <text x="20" y="29" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1" fill="#FF1493" opacity="0.6">Tel.</text>
      <text x="28" y="29" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fill="#555555">{data.tel}</text>
      <text x="20" y="33" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1" fill="#00BFFF" opacity="0.6">Mail</text>
      <text x="28" y="33" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fill="#555555">{data.email}</text>
      <text x="20" y="37" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1" fill="#FFD700" opacity="0.6">Web</text>
      <text x="28" y="37" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fill="#555555">{data.website}</text>
      <line x1="20" y1="39.5" x2="71" y2="39.5" stroke="#00BFFF" strokeWidth="0.2" opacity="0.3" />
      <text x="45.5" y="44" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.2" fill="#999999">〒{data.zipCode}</text>
      <text x="45.5" y="48" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.2" fill="#999999">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 2. BUBBLE (泡) — Floating colorful soap bubbles
// ============================================================
const bubbleTemplate: TemplateDefinition = {
  id: 'pop-bubble',
  name: 'BUBBLE',
  nameJa: '泡',
  category: 'pop',
  designer: 'Bubble Studio',
  description: 'カラフルなシャボン玉が空中を舞う。',
  accentColor: '#9B59B6',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="pop-bubble-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fce4ec" />
          <stop offset="50%" stopColor="#e8eaf6" />
          <stop offset="100%" stopColor="#e0f7fa" />
        </linearGradient>
        <radialGradient id="pop-bubble-b1" cx="0.3" cy="0.25" r="0.5">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="60%" stopColor="#9B59B6" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#9B59B6" stopOpacity="0.02" />
        </radialGradient>
        <radialGradient id="pop-bubble-b2" cx="0.3" cy="0.25" r="0.5">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="60%" stopColor="#3498DB" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#3498DB" stopOpacity="0.02" />
        </radialGradient>
        <radialGradient id="pop-bubble-b3" cx="0.3" cy="0.25" r="0.5">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="60%" stopColor="#E91E63" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#E91E63" stopOpacity="0.02" />
        </radialGradient>
        <filter id="pop-bubble-vibrant">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="overlay" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="pop-bubble-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.08" dy="0.12" />
          <feFlood floodColor="#9B59B6" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#pop-bubble-bg)" />
      {/* Main bubbles with iridescent gradients */}
      <circle cx="12" cy="10" r="7" fill="url(#pop-bubble-b1)" stroke="#9B59B6" strokeWidth="0.12" opacity="0.7" />
      <ellipse cx="13" cy="7" rx="2" ry="0.8" fill="#ffffff" opacity="0.3" />
      <circle cx="78" cy="15" r="9" fill="url(#pop-bubble-b2)" stroke="#3498DB" strokeWidth="0.12" opacity="0.6" />
      <ellipse cx="76" cy="11" rx="2.5" ry="0.8" fill="#ffffff" opacity="0.25" />
      <circle cx="20" cy="42" r="6" fill="url(#pop-bubble-b3)" stroke="#E91E63" strokeWidth="0.1" opacity="0.5" />
      <ellipse cx="19" cy="40" rx="1.5" ry="0.6" fill="#ffffff" opacity="0.25" />
      <circle cx="82" cy="45" r="5" fill="url(#pop-bubble-b1)" stroke="#9B59B6" strokeWidth="0.08" opacity="0.4" />
      <circle cx="55" cy="5" r="4" fill="url(#pop-bubble-b2)" stroke="#3498DB" strokeWidth="0.08" opacity="0.45" />
      {/* Tiny bubbles */}
      <circle cx="35" cy="48" r="2" fill="url(#pop-bubble-b3)" stroke="#E91E63" strokeWidth="0.06" opacity="0.35" />
      <circle cx="65" cy="50" r="1.5" fill="url(#pop-bubble-b1)" stroke="#9B59B6" strokeWidth="0.05" opacity="0.3" />
      <circle cx="42" cy="3" r="1" fill="url(#pop-bubble-b2)" stroke="#3498DB" strokeWidth="0.04" opacity="0.25" />
      {data.logo && <image href={data.logo} x="6" y="6" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.3" />}
      <g filter="url(#pop-bubble-shadow)">
        <text x="45.5" y="24" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="6" letterSpacing="0.5" fill="#9B59B6">{data.nameJa}</text>
      </g>
      <text x="45.5" y="31" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="2" letterSpacing="0.3" fill="#3498DB">{data.nameEn}</text>
      <text x="45.5" y="38" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.5" fill="#E91E63">{data.titleJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="pop-bubble-b-bg" x1="1" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#fce4ec" />
          <stop offset="50%" stopColor="#e8eaf6" />
          <stop offset="100%" stopColor="#f3e5f5" />
        </linearGradient>
        <filter id="pop-bubble-b-vibrant">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="overlay" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="pop-bubble-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.06" dy="0.08" />
          <feFlood floodColor="#9B59B6" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#pop-bubble-b-bg)" />
      {/* Decorative outline bubbles */}
      <circle cx="80" cy="10" r="4" fill="none" stroke="#9B59B6" strokeWidth="0.1" opacity="0.25" />
      <circle cx="10" cy="45" r="3" fill="none" stroke="#3498DB" strokeWidth="0.08" opacity="0.2" />
      <circle cx="75" cy="48" r="2" fill="none" stroke="#E91E63" strokeWidth="0.06" opacity="0.18" />
      <circle cx="5" cy="8" r="2.5" fill="none" stroke="#9B59B6" strokeWidth="0.06" opacity="0.15" />
      <circle cx="88" cy="30" r="1.5" fill="none" stroke="#3498DB" strokeWidth="0.05" opacity="0.15" />
      {data.logo && <image href={data.logo} x="38" y="2" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.25" />}
      <text x="45.5" y="14" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="2.2" fill="#9B59B6">{data.companyJa}</text>
      <text x="45.5" y="18" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.5" fill="#3498DB">{data.companyEn}</text>
      <text x="45.5" y="21.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.3" fill="#E91E63">{data.titleJa}</text>
      <line x1="20" y1="24" x2="71" y2="24" stroke="#9B59B6" strokeWidth="0.15" opacity="0.3" />
      <text x="20" y="28.5" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1" fill="#9B59B6" opacity="0.5">Tel.</text>
      <text x="28" y="28.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fill="#555555">{data.tel}</text>
      <text x="20" y="32.5" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1" fill="#3498DB" opacity="0.5">Mail</text>
      <text x="28" y="32.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fill="#555555">{data.email}</text>
      <text x="20" y="36.5" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1" fill="#E91E63" opacity="0.5">Web</text>
      <text x="28" y="36.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fill="#555555">{data.website}</text>
      <line x1="20" y1="39" x2="71" y2="39" stroke="#3498DB" strokeWidth="0.15" opacity="0.3" />
      <text x="45.5" y="43.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.2" fill="#999999">〒{data.zipCode}</text>
      <text x="45.5" y="47.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.2" fill="#999999">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 3. COMIC (漫) — Comic panel style with speech bubbles
// ============================================================
const comicTemplate: TemplateDefinition = {
  id: 'pop-comic',
  name: 'COMIC',
  nameJa: '漫',
  category: 'pop',
  designer: 'Comic Studio',
  description: 'コミックの一コマから飛び出す躍動感。',
  accentColor: '#FF4444',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="pop-comic-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFEE44" />
          <stop offset="100%" stopColor="#FFDD00" />
        </linearGradient>
        <filter id="pop-comic-halftone">
          <feTurbulence type="fractalNoise" baseFrequency="1.5" numOctaves="2" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="pop-comic-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.15" dy="0.2" />
          <feFlood floodColor="#000000" floodOpacity="0.15" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#pop-comic-bg)" />
      <rect width="91" height="55" filter="url(#pop-comic-halftone)" opacity="0.04" fill="transparent" />
      {/* Halftone dot pattern */}
      {[...Array(6)].map((_, row) =>
        [...Array(10)].map((_, col) => (
          <circle key={`pop-comic-dot-${row}-${col}`} cx={5 + col * 9} cy={5 + row * 10} r="1" fill="#FF4444" opacity="0.06" />
        ))
      )}
      {/* Bold comic border */}
      <rect x="3" y="2" width="85" height="51" fill="none" stroke="#000000" strokeWidth="0.8" />
      <rect x="4" y="3" width="83" height="49" fill="none" stroke="#000000" strokeWidth="0.15" />
      {/* Speech bubble shape */}
      <path d="M15,10 Q15,6 20,6 L72,6 Q77,6 77,10 L77,30 Q77,34 72,34 L35,34 L28,40 L30,34 L20,34 Q15,34 15,30 Z" fill="#ffffff" stroke="#000000" strokeWidth="0.4" />
      {/* Speed lines */}
      <line x1="8" y1="42" x2="18" y2="42" stroke="#FF4444" strokeWidth="0.15" opacity="0.3" />
      <line x1="72" y1="44" x2="84" y2="44" stroke="#FF4444" strokeWidth="0.15" opacity="0.3" />
      <line x1="10" y1="46" x2="22" y2="46" stroke="#FF4444" strokeWidth="0.1" opacity="0.2" />
      {data.logo && <image href={data.logo} x="62" y="8" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.3" />}
      <g filter="url(#pop-comic-shadow)">
        <text x="46" y="20" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="900" fontSize="6" letterSpacing="0.3" fill="#FF4444">{data.nameJa}</text>
      </g>
      <text x="46" y="27" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="2" letterSpacing="0.3" fill="#333333">{data.nameEn.toUpperCase()}</text>
      <text x="46" y="31" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="1.4" fill="#666666">{data.titleJa}</text>
      <text x="60" y="46" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.4" fill="#444444">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="pop-comic-b-bg" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#FFEE44" />
          <stop offset="100%" stopColor="#FFDD00" />
        </linearGradient>
        <filter id="pop-comic-b-halftone">
          <feTurbulence type="fractalNoise" baseFrequency="1.5" numOctaves="2" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="pop-comic-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.1" dy="0.12" />
          <feFlood floodColor="#000000" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#pop-comic-b-bg)" />
      <rect width="91" height="55" filter="url(#pop-comic-b-halftone)" opacity="0.04" fill="transparent" />
      {/* Halftone dots back */}
      {[...Array(6)].map((_, row) =>
        [...Array(10)].map((_, col) => (
          <circle key={`pop-comic-dotb-${row}-${col}`} cx={5 + col * 9} cy={5 + row * 10} r="0.8" fill="#FF4444" opacity="0.05" />
        ))
      )}
      <rect x="3" y="2" width="85" height="51" fill="none" stroke="#000000" strokeWidth="0.8" />
      {/* Company panel */}
      <rect x="10" y="5" width="71" height="10" fill="#ffffff" stroke="#000000" strokeWidth="0.3" />
      {data.logo && <image href={data.logo} x="70" y="6" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.3" />}
      <text x="45.5" y="11" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="900" fontSize="2.5" fill="#FF4444">{data.companyJa}</text>
      <text x="45.5" y="19" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1.5" fill="#333333">{data.companyEn}</text>
      <text x="45.5" y="23" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.4" fill="#666666">{data.titleJa}</text>
      <line x1="10" y1="25.5" x2="81" y2="25.5" stroke="#000000" strokeWidth="0.3" />
      <text x="12" y="30" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="1" fill="#FF4444">TEL</text>
      <text x="22" y="30" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.4" fill="#333333">{data.tel}</text>
      <text x="12" y="34" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="1" fill="#FF4444">MAIL</text>
      <text x="22" y="34" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.4" fill="#333333">{data.email}</text>
      <text x="12" y="38" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="1" fill="#FF4444">WEB</text>
      <text x="22" y="38" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.4" fill="#333333">{data.website}</text>
      <line x1="10" y1="40.5" x2="81" y2="40.5" stroke="#000000" strokeWidth="0.3" />
      <text x="45.5" y="45" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="1.2" fill="#555555">〒{data.zipCode}</text>
      <text x="45.5" y="49" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="1.2" fill="#555555">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 4. CANDY (菓) — Sweet candy stripes and bright colors
// ============================================================
const candyTemplate: TemplateDefinition = {
  id: 'pop-candy',
  name: 'CANDY',
  nameJa: '菓',
  category: 'pop',
  designer: 'Candy Studio',
  description: 'キャンディのように甘くカラフルなデザイン。',
  accentColor: '#FF69B4',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="pop-candy-base" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#fff5f8" />
          <stop offset="50%" stopColor="#fff0f5" />
          <stop offset="100%" stopColor="#ffe8f0" />
        </linearGradient>
        <pattern id="pop-candy-stripes" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="3" height="6" fill="#FF69B4" opacity="0.06" />
          <rect x="3" width="3" height="6" fill="#ffffff" opacity="0" />
        </pattern>
        <radialGradient id="pop-candy-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#FF69B4" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#FF69B4" stopOpacity="0" />
        </radialGradient>
        <filter id="pop-candy-vibrant">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="overlay" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="pop-candy-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.08" dy="0.12" />
          <feFlood floodColor="#FF69B4" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#pop-candy-base)" />
      <rect width="91" height="55" fill="url(#pop-candy-stripes)" />
      <rect width="91" height="55" fill="url(#pop-candy-glow)" />
      {/* Candy circles */}
      <circle cx="10" cy="8" r="4" fill="#FF69B4" opacity="0.12" />
      <circle cx="82" cy="8" r="3" fill="#87CEEB" opacity="0.12" />
      <circle cx="8" cy="48" r="3" fill="#98FB98" opacity="0.1" />
      <circle cx="84" cy="48" r="4" fill="#DDA0DD" opacity="0.1" />
      {/* Lollipop swirl */}
      <circle cx="80" cy="10" r="5" fill="none" stroke="#FF69B4" strokeWidth="0.25" opacity="0.15" />
      <circle cx="80" cy="10" r="3.5" fill="none" stroke="#87CEEB" strokeWidth="0.2" opacity="0.12" />
      <circle cx="80" cy="10" r="2" fill="none" stroke="#DDA0DD" strokeWidth="0.15" opacity="0.1" />
      {/* Sprinkle dots */}
      <rect x="20" y="5" width="1.5" height="0.5" rx="0.2" fill="#FF69B4" opacity="0.15" transform="rotate(30 20 5)" />
      <rect x="65" y="48" width="1.5" height="0.5" rx="0.2" fill="#87CEEB" opacity="0.15" transform="rotate(-20 65 48)" />
      <rect x="35" y="50" width="1.5" height="0.5" rx="0.2" fill="#98FB98" opacity="0.12" transform="rotate(45 35 50)" />
      {data.logo && <image href={data.logo} x="6" y="6" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.3" />}
      <g filter="url(#pop-candy-shadow)">
        <text x="45.5" y="24" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="6.5" letterSpacing="0.5" fill="#FF69B4">{data.nameJa}</text>
      </g>
      <text x="45.5" y="32" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="2.2" letterSpacing="0.3" fill="#87CEEB">{data.nameEn}</text>
      <text x="45.5" y="39" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.6" fill="#DDA0DD">{data.titleJa}</text>
      <text x="45.5" y="44" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#cc88aa">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="pop-candy-b-base" x1="0.3" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#fff5f8" />
          <stop offset="100%" stopColor="#ffe8f0" />
        </linearGradient>
        <pattern id="pop-candy-stripes-b" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
          <rect width="3" height="6" fill="#87CEEB" opacity="0.05" />
        </pattern>
        <filter id="pop-candy-b-vibrant">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="overlay" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="pop-candy-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.06" dy="0.08" />
          <feFlood floodColor="#FF69B4" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#pop-candy-b-base)" />
      <rect width="91" height="55" fill="url(#pop-candy-stripes-b)" />
      {/* Sprinkle accents */}
      <rect x="80" y="6" width="1.5" height="0.5" rx="0.2" fill="#FF69B4" opacity="0.12" transform="rotate(30 80 6)" />
      <rect x="8" y="48" width="1.5" height="0.5" rx="0.2" fill="#87CEEB" opacity="0.12" transform="rotate(-25 8 48)" />
      <rect x="78" y="44" width="1.5" height="0.5" rx="0.2" fill="#DDA0DD" opacity="0.1" transform="rotate(50 78 44)" />
      {data.logo && <image href={data.logo} x="38" y="2" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.25" />}
      <text x="45.5" y="14" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="2.2" fill="#FF69B4">{data.companyJa}</text>
      <text x="45.5" y="18" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.5" fill="#87CEEB">{data.companyEn}</text>
      <text x="45.5" y="21.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.3" fill="#DDA0DD">{data.titleJa}</text>
      <line x1="20" y1="24" x2="71" y2="24" stroke="#FF69B4" strokeWidth="0.15" opacity="0.35" />
      <text x="20" y="28.5" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1" fill="#FF69B4" opacity="0.5">Tel.</text>
      <text x="28" y="28.5" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.4" fill="#cc5590">{data.tel}</text>
      <text x="20" y="32.5" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1" fill="#87CEEB" opacity="0.5">Mail</text>
      <text x="28" y="32.5" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.4" fill="#cc5590">{data.email}</text>
      <text x="20" y="36.5" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1" fill="#DDA0DD" opacity="0.5">Web</text>
      <text x="28" y="36.5" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.4" fill="#cc5590">{data.website}</text>
      <line x1="20" y1="39" x2="71" y2="39" stroke="#87CEEB" strokeWidth="0.15" opacity="0.35" />
      <text x="45.5" y="43.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.2" fill="#DDA0DD">〒{data.zipCode}</text>
      <text x="45.5" y="47.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.2" fill="#DDA0DD">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 5. PIXEL (粒) — Pixel art grid pattern
// ============================================================
const pixelTemplate: TemplateDefinition = {
  id: 'pop-pixel',
  name: 'PIXEL',
  nameJa: '粒',
  category: 'pop',
  designer: 'Pixel Studio',
  description: 'ピクセルの一粒一粒が世界を構成する。',
  accentColor: '#00CC44',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="pop-pixel-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#141414" />
          <stop offset="100%" stopColor="#0e0e0e" />
        </linearGradient>
        <linearGradient id="pop-pixel-scanline" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00CC44" stopOpacity="0.03" />
          <stop offset="50%" stopColor="#00CC44" stopOpacity="0" />
          <stop offset="100%" stopColor="#00CC44" stopOpacity="0.03" />
        </linearGradient>
        <filter id="pop-pixel-glow">
          <feTurbulence type="fractalNoise" baseFrequency="2" numOctaves="2" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="screen" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="pop-pixel-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.1" dy="0.12" />
          <feFlood floodColor="#00CC44" floodOpacity="0.12" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#pop-pixel-bg)" />
      <rect width="91" height="55" filter="url(#pop-pixel-glow)" opacity="0.03" fill="transparent" />
      {/* Pixel grid pattern */}
      {[...Array(5)].map((_, row) =>
        [...Array(8)].map((_, col) => (
          <rect key={`pop-pixel-g-${row}-${col}`} x={3 + col * 11} y={3 + row * 11} width="9" height="9" fill="#1a1a1a" stroke="#1e1e1e" strokeWidth="0.15" />
        ))
      )}
      {/* Colored pixels scattered */}
      <rect x="3" y="3" width="9" height="9" fill="#00CC44" opacity="0.25" />
      <rect x="25" y="3" width="9" height="9" fill="#FF4444" opacity="0.15" />
      <rect x="69" y="3" width="9" height="9" fill="#4444FF" opacity="0.2" />
      <rect x="80" y="14" width="9" height="9" fill="#FFCC00" opacity="0.15" />
      <rect x="3" y="36" width="9" height="9" fill="#FF44FF" opacity="0.15" />
      <rect x="14" y="47" width="9" height="9" fill="#00CCFF" opacity="0.2" />
      <rect x="69" y="47" width="9" height="9" fill="#00CC44" opacity="0.15" />
      <rect x="80" y="36" width="9" height="9" fill="#FF4444" opacity="0.12" />
      {/* Scanline effect */}
      {[...Array(11)].map((_, i) => (
        <line key={`pop-pixel-scan-${i}`} x1="0" y1={i * 5} x2="91" y2={i * 5} stroke="#00CC44" strokeWidth="0.06" opacity="0.1" />
      ))}
      {data.logo && <image href={data.logo} x="74" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
      <g filter="url(#pop-pixel-shadow)">
        <text x="45.5" y="24" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="800" fontSize="6" letterSpacing="0.5" fill="#00CC44">{data.nameJa}</text>
      </g>
      <text x="45.5" y="32" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="2.2" letterSpacing="0.4" fill="#00ff55">{data.nameEn.toUpperCase()}</text>
      <text x="45.5" y="39" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.5" fill="#00aa33">{data.titleJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="pop-pixel-b-bg" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#141414" />
          <stop offset="100%" stopColor="#0e0e0e" />
        </linearGradient>
        <filter id="pop-pixel-b-glow">
          <feTurbulence type="fractalNoise" baseFrequency="2" numOctaves="2" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="screen" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="pop-pixel-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.08" dy="0.1" />
          <feFlood floodColor="#00CC44" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#pop-pixel-b-bg)" />
      <rect width="91" height="55" filter="url(#pop-pixel-b-glow)" opacity="0.03" fill="transparent" />
      {/* Subtle pixel grid */}
      {[...Array(5)].map((_, row) =>
        [...Array(8)].map((_, col) => (
          <rect key={`pop-pixel-gb-${row}-${col}`} x={3 + col * 11} y={3 + row * 11} width="9" height="9" fill="none" stroke="#1a1a1a" strokeWidth="0.08" />
        ))
      )}
      {/* Scanlines */}
      {[...Array(11)].map((_, i) => (
        <line key={`pop-pixel-scanb-${i}`} x1="0" y1={i * 5} x2="91" y2={i * 5} stroke="#00CC44" strokeWidth="0.04" opacity="0.08" />
      ))}
      {data.logo && <image href={data.logo} x="38" y="2" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.35" />}
      <text x="45.5" y="14" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="2.2" fill="#00CC44">{data.companyJa}</text>
      <text x="45.5" y="18" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.5" fill="#00aa33">{data.companyEn}</text>
      <text x="45.5" y="21.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.3" fill="#008822">{data.titleJa}</text>
      <line x1="15" y1="24" x2="76" y2="24" stroke="#00CC44" strokeWidth="0.15" opacity="0.3" />
      <text x="15" y="28.5" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1" fill="#00CC44" opacity="0.5">TEL</text>
      <text x="24" y="28.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fill="#00ff55">{data.tel}</text>
      <text x="15" y="32.5" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1" fill="#00CC44" opacity="0.5">MAIL</text>
      <text x="24" y="32.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fill="#00ff55">{data.email}</text>
      <text x="15" y="36.5" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1" fill="#00CC44" opacity="0.5">WEB</text>
      <text x="24" y="36.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fill="#00ff55">{data.website}</text>
      <line x1="15" y1="39" x2="76" y2="39" stroke="#00CC44" strokeWidth="0.15" opacity="0.3" />
      <text x="45.5" y="44" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.2" fill="#00aa33">〒{data.zipCode}</text>
      <text x="45.5" y="48" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.2" fill="#00aa33">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 6. STICKER (貼) — Peeled sticker with white border
// ============================================================
const stickerTemplate: TemplateDefinition = {
  id: 'pop-sticker',
  name: 'STICKER',
  nameJa: '貼',
  category: 'pop',
  designer: 'Sticker Studio',
  description: 'ペタッと貼れるステッカーのような存在感。',
  accentColor: '#FF6600',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="pop-sticker-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f8f8f8" />
          <stop offset="100%" stopColor="#f0f0f0" />
        </linearGradient>
        <linearGradient id="pop-sticker-face" x1="0" y1="0" x2="0.2" y2="1">
          <stop offset="0%" stopColor="#FF7711" />
          <stop offset="50%" stopColor="#FF6600" />
          <stop offset="100%" stopColor="#EE5500" />
        </linearGradient>
        <radialGradient id="pop-sticker-shine" cx="0.3" cy="0.2" r="0.5">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <filter id="pop-sticker-vibrant">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="overlay" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="pop-sticker-peel">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.6" />
          <feOffset dx="0.4" dy="0.5" />
          <feFlood floodColor="#000" floodOpacity="0.15" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#pop-sticker-bg)" />
      {/* Sticker shape with peel shadow */}
      <g filter="url(#pop-sticker-peel)">
        <rect x="8" y="5" width="75" height="45" rx="6" fill="url(#pop-sticker-face)" />
      </g>
      {/* White die-cut border */}
      <rect x="8" y="5" width="75" height="45" rx="6" fill="none" stroke="#ffffff" strokeWidth="1.5" />
      {/* Sticker shine */}
      <rect x="8" y="5" width="75" height="45" rx="6" fill="url(#pop-sticker-shine)" />
      {/* Peel corner */}
      <path d="M76,45 Q80,44 83,48 Q82,50 78,50 Z" fill="#e0e0e0" opacity="0.4" />
      <path d="M76,45 Q78,44 80,46" fill="none" stroke="#cccccc" strokeWidth="0.15" opacity="0.3" />
      {data.logo && <image href={data.logo} x="12" y="9" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.35" />}
      <text x="45.5" y="24" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="800" fontSize="6" letterSpacing="0.5" fill="#ffffff">{data.nameJa}</text>
      <text x="45.5" y="32" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="2.2" letterSpacing="0.3" fill="#ffe0c0">{data.nameEn.toUpperCase()}</text>
      <text x="45.5" y="39" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.5" fill="#ffccaa">{data.titleJa}</text>
      <text x="45.5" y="44" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#ffbb99">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="pop-sticker-b-bg" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#f8f8f8" />
          <stop offset="100%" stopColor="#f0f0f0" />
        </linearGradient>
        <filter id="pop-sticker-b-vibrant">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="overlay" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="pop-sticker-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.08" dy="0.1" />
          <feFlood floodColor="#FF6600" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#pop-sticker-b-bg)" />
      {/* Sticker outline on back */}
      <rect x="8" y="5" width="75" height="45" rx="6" fill="#ffffff" stroke="#FF6600" strokeWidth="0.4" />
      {/* Inner dashed guideline */}
      <rect x="12" y="8" width="67" height="39" rx="4" fill="none" stroke="#FF6600" strokeWidth="0.1" strokeDasharray="1.5 1" opacity="0.2" />
      {data.logo && <image href={data.logo} x="38" y="6" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.25" />}
      <text x="45.5" y="17" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="2.2" fill="#FF6600">{data.companyJa}</text>
      <text x="45.5" y="21" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.5" fill="#cc5500">{data.companyEn}</text>
      <text x="45.5" y="24.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.3" fill="#888888">{data.titleJa}</text>
      <line x1="18" y1="27" x2="73" y2="27" stroke="#FF6600" strokeWidth="0.15" opacity="0.35" />
      <text x="18" y="31" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1" fill="#FF6600" opacity="0.5">Tel.</text>
      <text x="26" y="31" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.4" fill="#555555">{data.tel}</text>
      <text x="18" y="35" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1" fill="#FF6600" opacity="0.5">Mail</text>
      <text x="26" y="35" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.4" fill="#555555">{data.email}</text>
      <text x="18" y="39" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1" fill="#FF6600" opacity="0.5">Web</text>
      <text x="26" y="39" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.4" fill="#555555">{data.website}</text>
      <line x1="18" y1="41.5" x2="73" y2="41.5" stroke="#FF6600" strokeWidth="0.15" opacity="0.35" />
      <text x="45.5" y="45.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.2" fill="#999999">〒{data.zipCode}</text>
      <text x="45.5" y="49" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.2" fill="#999999">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 7. HALFTONE (網) — Large halftone dot pattern
// ============================================================
const halftoneTemplate: TemplateDefinition = {
  id: 'pop-halftone',
  name: 'HALFTONE',
  nameJa: '網',
  category: 'pop',
  designer: 'Halftone Studio',
  description: '網点の集合が生み出すポップな世界。',
  accentColor: '#E91E63',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="pop-halftone-bg" x1="0" y1="0" x2="0.2" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#fef5f8" />
        </linearGradient>
        <radialGradient id="pop-halftone-glow" cx="0.1" cy="0.1" r="0.6">
          <stop offset="0%" stopColor="#E91E63" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#E91E63" stopOpacity="0" />
        </radialGradient>
        <filter id="pop-halftone-vibrant">
          <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="2" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="overlay" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="pop-halftone-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#E91E63" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#pop-halftone-bg)" />
      <rect width="91" height="55" fill="url(#pop-halftone-glow)" />
      {/* Large halftone dots - gradient from large to small */}
      {[...Array(8)].map((_, row) =>
        [...Array(12)].map((_, col) => {
          const dist = Math.sqrt(Math.pow(col - 2, 2) + Math.pow(row - 1, 2));
          const r = Math.max(0.2, 2.5 - dist * 0.3);
          return (
            <circle key={`pop-half-d-${row}-${col}`} cx={4 + col * 7.5} cy={4 + row * 7} r={r} fill="#E91E63" opacity={Math.max(0.04, 0.25 - dist * 0.025)} />
          );
        })
      )}
      {/* Secondary color dots - smaller, offset */}
      <circle cx="60" cy="8" r="1.5" fill="#FF5722" opacity="0.08" />
      <circle cx="70" cy="12" r="1.2" fill="#FF5722" opacity="0.06" />
      <circle cx="80" cy="6" r="0.8" fill="#FF5722" opacity="0.04" />
      {data.logo && <image href={data.logo} x="76" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.3" />}
      <g filter="url(#pop-halftone-shadow)">
        <text x="45.5" y="24" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="900" fontSize="7" letterSpacing="0.5" fill="#E91E63">{data.nameJa}</text>
      </g>
      <text x="45.5" y="33" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="2.5" letterSpacing="0.4" fill="#333333">{data.nameEn.toUpperCase()}</text>
      <text x="45.5" y="40" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.6" fill="#999999">{data.titleJa}</text>
      <text x="45.5" y="46" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#bbbbbb">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="pop-halftone-b-bg" x1="0.2" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#fef5f8" />
        </linearGradient>
        <filter id="pop-halftone-b-vibrant">
          <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="2" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="overlay" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="pop-halftone-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.06" dy="0.08" />
          <feFlood floodColor="#E91E63" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#pop-halftone-b-bg)" />
      {/* Halftone dots - corner pattern */}
      {[...Array(5)].map((_, row) =>
        [...Array(5)].map((_, col) => (
          <circle key={`pop-half-db-${row}-${col}`} cx={70 + col * 5} cy={35 + row * 5} r={Math.max(0.3, 1.5 - (row + col) * 0.15)} fill="#E91E63" opacity={Math.max(0.03, 0.12 - (row + col) * 0.012)} />
        ))
      )}
      {/* Top-left dots */}
      {[...Array(3)].map((_, row) =>
        [...Array(3)].map((_, col) => (
          <circle key={`pop-half-dtl-${row}-${col}`} cx={4 + col * 4} cy={4 + row * 4} r={Math.max(0.2, 1 - (row + col) * 0.15)} fill="#E91E63" opacity={Math.max(0.02, 0.08 - (row + col) * 0.01)} />
        ))
      )}
      {data.logo && <image href={data.logo} x="38" y="2" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.25" />}
      <text x="45.5" y="14" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="800" fontSize="2.5" fill="#E91E63">{data.companyJa}</text>
      <text x="45.5" y="18.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1.5" fill="#666666">{data.companyEn}</text>
      <text x="45.5" y="22" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.3" fill="#999999">{data.titleJa}</text>
      <line x1="15" y1="24.5" x2="76" y2="24.5" stroke="#E91E63" strokeWidth="0.2" opacity="0.3" />
      <text x="15" y="29" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1" fill="#E91E63" opacity="0.5">Tel.</text>
      <text x="23" y="29" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.4" fill="#444444">{data.tel}</text>
      <text x="15" y="33" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1" fill="#E91E63" opacity="0.5">Mail</text>
      <text x="23" y="33" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.4" fill="#444444">{data.email}</text>
      <text x="15" y="37" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1" fill="#E91E63" opacity="0.5">Web</text>
      <text x="23" y="37" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.4" fill="#444444">{data.website}</text>
      <line x1="15" y1="39.5" x2="76" y2="39.5" stroke="#E91E63" strokeWidth="0.2" opacity="0.3" />
      <text x="45.5" y="44" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.2" fill="#999999">〒{data.zipCode}</text>
      <text x="45.5" y="48" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.2" fill="#999999">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 8. WARHOL (複) — Warhol multi-color repeated pattern
// ============================================================
const warholTemplate: TemplateDefinition = {
  id: 'pop-warhol',
  name: 'WARHOL',
  nameJa: '複',
  category: 'pop',
  designer: 'Warhol Studio',
  description: 'ウォーホルの複製芸術が名刺に宿る。',
  accentColor: '#FF4081',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="pop-warhol-q1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF4081" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#FF4081" stopOpacity="0.04" />
        </linearGradient>
        <linearGradient id="pop-warhol-q2" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#536DFE" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#536DFE" stopOpacity="0.04" />
        </linearGradient>
        <linearGradient id="pop-warhol-q3" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFAB40" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#FFAB40" stopOpacity="0.04" />
        </linearGradient>
        <linearGradient id="pop-warhol-q4" x1="1" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#69F0AE" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#69F0AE" stopOpacity="0.04" />
        </linearGradient>
        <filter id="pop-warhol-vibrant">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="overlay" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="pop-warhol-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.12" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Four color quadrants with gradients */}
      <rect x="0" y="0" width="45.5" height="27.5" fill="url(#pop-warhol-q1)" />
      <rect x="45.5" y="0" width="45.5" height="27.5" fill="url(#pop-warhol-q2)" />
      <rect x="0" y="27.5" width="45.5" height="27.5" fill="url(#pop-warhol-q3)" />
      <rect x="45.5" y="27.5" width="45.5" height="27.5" fill="url(#pop-warhol-q4)" />
      {/* Grid lines */}
      <line x1="45.5" y1="0" x2="45.5" y2="55" stroke="#000000" strokeWidth="0.12" opacity="0.08" />
      <line x1="0" y1="27.5" x2="91" y2="27.5" stroke="#000000" strokeWidth="0.12" opacity="0.08" />
      {/* Name repeated in each quadrant */}
      <text x="22.75" y="14" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="800" fontSize="3.5" fill="#FF4081" opacity="0.45">{data.nameJa}</text>
      <text x="68.25" y="14" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="800" fontSize="3.5" fill="#536DFE" opacity="0.45">{data.nameJa}</text>
      <text x="22.75" y="42" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="800" fontSize="3.5" fill="#FFAB40" opacity="0.45">{data.nameJa}</text>
      <text x="68.25" y="42" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="800" fontSize="3.5" fill="#69F0AE" opacity="0.45">{data.nameJa}</text>
      {/* Center overlay panel */}
      <rect x="20" y="18" width="51" height="19" rx="0.5" fill="#ffffff" opacity="0.88" />
      <rect x="20" y="18" width="51" height="19" rx="0.5" fill="none" stroke="#000" strokeWidth="0.06" opacity="0.1" />
      {data.logo && <image href={data.logo} x="60" y="20" width="6" height="6" preserveAspectRatio="xMidYMid meet" opacity="0.3" />}
      <g filter="url(#pop-warhol-shadow)">
        <text x="45.5" y="27" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="900" fontSize="5" fill="#333333">{data.nameJa}</text>
      </g>
      <text x="45.5" y="33" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1.8" fill="#FF4081">{data.nameEn.toUpperCase()}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="pop-warhol-b-vibrant">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="overlay" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="pop-warhol-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.06" dy="0.08" />
          <feFlood floodColor="#000" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Subtle quadrant tints */}
      <rect x="0" y="0" width="45.5" height="27.5" fill="#FF4081" opacity="0.03" />
      <rect x="45.5" y="0" width="45.5" height="27.5" fill="#536DFE" opacity="0.03" />
      <rect x="0" y="27.5" width="45.5" height="27.5" fill="#FFAB40" opacity="0.03" />
      <rect x="45.5" y="27.5" width="45.5" height="27.5" fill="#69F0AE" opacity="0.03" />
      {/* Subtle grid */}
      <line x1="45.5" y1="0" x2="45.5" y2="55" stroke="#000" strokeWidth="0.06" opacity="0.05" />
      <line x1="0" y1="27.5" x2="91" y2="27.5" stroke="#000" strokeWidth="0.06" opacity="0.05" />
      {data.logo && <image href={data.logo} x="38" y="2" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.25" />}
      <text x="45.5" y="14" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="800" fontSize="2.5" fill="#FF4081">{data.companyJa}</text>
      <text x="45.5" y="18.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1.5" fill="#536DFE">{data.companyEn}</text>
      <text x="45.5" y="22" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.3" fill="#888888">{data.titleJa}</text>
      <line x1="15" y1="24.5" x2="76" y2="24.5" stroke="#FF4081" strokeWidth="0.15" opacity="0.25" />
      <text x="15" y="29" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1" fill="#FF4081" opacity="0.5">Tel.</text>
      <text x="23" y="29" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.4" fill="#555555">{data.tel}</text>
      <text x="15" y="33" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1" fill="#536DFE" opacity="0.5">Mail</text>
      <text x="23" y="33" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.4" fill="#555555">{data.email}</text>
      <text x="15" y="37" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1" fill="#FFAB40" opacity="0.5">Web</text>
      <text x="23" y="37" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.4" fill="#555555">{data.website}</text>
      <line x1="15" y1="39.5" x2="76" y2="39.5" stroke="#536DFE" strokeWidth="0.15" opacity="0.25" />
      <text x="45.5" y="44" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.2" fill="#999999">〒{data.zipCode}</text>
      <text x="45.5" y="48" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.2" fill="#999999">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 9. BANG (爆) — Explosive starburst with bold text
// ============================================================
const bangTemplate: TemplateDefinition = {
  id: 'pop-bang',
  name: 'BANG',
  nameJa: '爆',
  category: 'pop',
  designer: 'Bang Studio',
  description: '爆発的なスターバーストが目を引く。',
  accentColor: '#FF0000',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="pop-bang-bg" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#FFEE22" />
          <stop offset="100%" stopColor="#FFDD00" />
        </linearGradient>
        <radialGradient id="pop-bang-burst" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#FF0000" stopOpacity="0.2" />
          <stop offset="60%" stopColor="#FF0000" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#FF0000" stopOpacity="0" />
        </radialGradient>
        <filter id="pop-bang-vibrant">
          <feTurbulence type="fractalNoise" baseFrequency="1" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="overlay" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="pop-bang-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.35" />
          <feOffset dx="0.15" dy="0.2" />
          <feFlood floodColor="#000" floodOpacity="0.12" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#pop-bang-bg)" />
      <rect width="91" height="55" fill="url(#pop-bang-burst)" />
      {/* Explosion starburst outer */}
      <polygon
        points="45.5,2 50,14 62,5 54,17 68,14 56,22 70,27 56,28 65,38 53,33 55,47 45.5,37 36,47 38,33 26,38 35,28 21,27 35,22 23,14 37,17 29,5 41,14"
        fill="#FF0000" opacity="0.12"
      />
      {/* Inner starburst */}
      <polygon
        points="45.5,8 49,16 57,10 52,19 62,17 54,23 63,27 54,28 60,35 51,31 52,41 45.5,34 39,41 40,31 31,35 37,28 28,27 37,23 29,17 39,19 34,10 42,16"
        fill="#FF0000" opacity="0.08"
      />
      {/* Bold border */}
      <rect x="2" y="1" width="87" height="53" fill="none" stroke="#FF0000" strokeWidth="0.8" />
      <rect x="3.5" y="2.5" width="84" height="50" fill="none" stroke="#FF0000" strokeWidth="0.15" opacity="0.3" />
      {data.logo && <image href={data.logo} x="76" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.3" />}
      <g filter="url(#pop-bang-shadow)">
        <text x="45.5" y="25" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="900" fontSize="7" letterSpacing="0.5" fill="#FF0000">{data.nameJa}</text>
      </g>
      <text x="45.5" y="33" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="2.5" letterSpacing="0.3" fill="#000000">{data.nameEn.toUpperCase()}</text>
      <text x="45.5" y="41" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="1.6" fill="#cc0000">{data.titleJa}</text>
      <text x="45.5" y="46" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.3" fill="#aa0000">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="pop-bang-b-bg" x1="0.3" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#FFEE22" />
          <stop offset="100%" stopColor="#FFDD00" />
        </linearGradient>
        <filter id="pop-bang-b-vibrant">
          <feTurbulence type="fractalNoise" baseFrequency="1" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="overlay" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="pop-bang-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.08" dy="0.1" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#pop-bang-b-bg)" />
      <rect x="2" y="1" width="87" height="53" fill="none" stroke="#FF0000" strokeWidth="0.6" />
      {/* Small starburst decorations */}
      <polygon points="45.5,3 47,5 49,3 48,5.5 50,6 48,7 49,9 47,7.5 45.5,9 44,7.5 42,9 43,7 41,6 43,5.5 42,3 44,5" fill="#FF0000" opacity="0.15" />
      <polygon points="80,45 81,47 82,45 81.5,47 83,47.5 81.5,48 82,50 81,48.5 80,50 79.5,48.5 78,50 79,48 78,47.5 79,47 78.5,45 79.5,47" fill="#FF0000" opacity="0.1" />
      {data.logo && <image href={data.logo} x="38" y="2" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.25" />}
      <text x="45.5" y="14" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="900" fontSize="2.5" fill="#FF0000">{data.companyJa}</text>
      <text x="45.5" y="18.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="1.5" fill="#000000">{data.companyEn}</text>
      <text x="45.5" y="22" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.4" fill="#cc0000">{data.titleJa}</text>
      <line x1="12" y1="24.5" x2="79" y2="24.5" stroke="#FF0000" strokeWidth="0.25" />
      <text x="12" y="29" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="1" fill="#FF0000">TEL</text>
      <text x="22" y="29" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1.4" fill="#333333">{data.tel}</text>
      <text x="12" y="33" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="1" fill="#FF0000">MAIL</text>
      <text x="22" y="33" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1.4" fill="#333333">{data.email}</text>
      <text x="12" y="37" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="1" fill="#FF0000">WEB</text>
      <text x="22" y="37" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1.4" fill="#333333">{data.website}</text>
      <line x1="12" y1="39.5" x2="79" y2="39.5" stroke="#FF0000" strokeWidth="0.25" />
      <text x="45.5" y="44" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="1.2" fill="#cc0000">〒{data.zipCode}</text>
      <text x="45.5" y="48" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="1.2" fill="#cc0000">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 10. RAINBOW (虹) — Rainbow gradient stripe pattern
// ============================================================
const rainbowTemplate: TemplateDefinition = {
  id: 'pop-rainbow',
  name: 'RAINBOW',
  nameJa: '虹',
  category: 'pop',
  designer: 'Rainbow Studio',
  description: '七色の虹が架ける希望の橋。',
  accentColor: '#FF6B6B',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="pop-rainbow-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FF6B6B" />
          <stop offset="16%" stopColor="#FFA500" />
          <stop offset="33%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#4CAF50" />
          <stop offset="66%" stopColor="#2196F3" />
          <stop offset="83%" stopColor="#3F51B5" />
          <stop offset="100%" stopColor="#9C27B0" />
        </linearGradient>
        <linearGradient id="pop-rainbow-glow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.03" />
          <stop offset="50%" stopColor="#4CAF50" stopOpacity="0.02" />
          <stop offset="100%" stopColor="#9C27B0" stopOpacity="0.03" />
        </linearGradient>
        <filter id="pop-rainbow-vibrant">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="overlay" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="pop-rainbow-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#ffffff" />
      <rect width="91" height="55" fill="url(#pop-rainbow-glow)" />
      {/* Rainbow stripes at top */}
      <rect x="0" y="0" width="91" height="1.2" fill="#FF6B6B" />
      <rect x="0" y="1.2" width="91" height="1.2" fill="#FFA500" />
      <rect x="0" y="2.4" width="91" height="1.2" fill="#FFD700" />
      <rect x="0" y="3.6" width="91" height="1.2" fill="#4CAF50" />
      <rect x="0" y="4.8" width="91" height="1.2" fill="#2196F3" />
      <rect x="0" y="6" width="91" height="1.2" fill="#3F51B5" />
      <rect x="0" y="7.2" width="91" height="1.2" fill="#9C27B0" />
      {/* Rainbow stripes at bottom (reversed) */}
      <rect x="0" y="46.6" width="91" height="1.2" fill="#9C27B0" />
      <rect x="0" y="47.8" width="91" height="1.2" fill="#3F51B5" />
      <rect x="0" y="49" width="91" height="1.2" fill="#2196F3" />
      <rect x="0" y="50.2" width="91" height="1.2" fill="#4CAF50" />
      <rect x="0" y="51.4" width="91" height="1.2" fill="#FFD700" />
      <rect x="0" y="52.6" width="91" height="1.2" fill="#FFA500" />
      <rect x="0" y="53.8" width="91" height="1.2" fill="#FF6B6B" />
      {/* Prismatic light scatter */}
      <circle cx="18" cy="14" r="0.5" fill="#FF6B6B" opacity="0.15" />
      <circle cx="72" cy="40" r="0.4" fill="#4CAF50" opacity="0.12" />
      <circle cx="80" cy="16" r="0.3" fill="#2196F3" opacity="0.1" />
      {data.logo && <image href={data.logo} x="76" y="10" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.3" />}
      <g filter="url(#pop-rainbow-shadow)">
        <text x="45.5" y="24" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="800" fontSize="6.5" letterSpacing="0.5" fill="url(#pop-rainbow-grad)">{data.nameJa}</text>
      </g>
      <text x="45.5" y="32" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="2.2" letterSpacing="0.3" fill="#333333">{data.nameEn}</text>
      <text x="45.5" y="39" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.6" fill="#666666">{data.titleJa}</text>
      <text x="45.5" y="44" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#999999">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="pop-rainbow-b-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF6B6B" />
          <stop offset="16%" stopColor="#FFA500" />
          <stop offset="33%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#4CAF50" />
          <stop offset="66%" stopColor="#2196F3" />
          <stop offset="83%" stopColor="#3F51B5" />
          <stop offset="100%" stopColor="#9C27B0" />
        </linearGradient>
        <filter id="pop-rainbow-b-vibrant">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="overlay" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="pop-rainbow-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.06" dy="0.08" />
          <feFlood floodColor="#000" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Left rainbow edge */}
      <rect x="0" y="0" width="1" height="55" fill="#FF6B6B" />
      <rect x="1" y="0" width="1" height="55" fill="#FFA500" />
      <rect x="2" y="0" width="1" height="55" fill="#FFD700" />
      <rect x="3" y="0" width="1" height="55" fill="#4CAF50" />
      <rect x="4" y="0" width="1" height="55" fill="#2196F3" />
      <rect x="5" y="0" width="1" height="55" fill="#3F51B5" />
      <rect x="6" y="0" width="1" height="55" fill="#9C27B0" />
      {/* Prismatic dots */}
      <circle cx="82" cy="8" r="0.4" fill="#FF6B6B" opacity="0.12" />
      <circle cx="86" cy="48" r="0.3" fill="#9C27B0" opacity="0.1" />
      <circle cx="78" cy="32" r="0.35" fill="#4CAF50" opacity="0.08" />
      {data.logo && <image href={data.logo} x="40" y="2" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.25" />}
      <text x="50" y="14" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="2.2" fill="#FF6B6B">{data.companyJa}</text>
      <text x="50" y="18" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.5" fill="#3F51B5">{data.companyEn}</text>
      <text x="50" y="21.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.3" fill="#888888">{data.titleJa}</text>
      <line x1="15" y1="24" x2="85" y2="24" stroke="#4CAF50" strokeWidth="0.15" opacity="0.4" />
      <text x="15" y="28.5" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1" fill="#FF6B6B" opacity="0.5">Tel.</text>
      <text x="23" y="28.5" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.4" fill="#555555">{data.tel}</text>
      <text x="15" y="32.5" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1" fill="#2196F3" opacity="0.5">Mail</text>
      <text x="23" y="32.5" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.4" fill="#555555">{data.email}</text>
      <text x="15" y="36.5" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1" fill="#9C27B0" opacity="0.5">Web</text>
      <text x="23" y="36.5" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.4" fill="#555555">{data.website}</text>
      <line x1="15" y1="39" x2="85" y2="39" stroke="#FFA500" strokeWidth="0.15" opacity="0.4" />
      <text x="50" y="43.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.2" fill="#999999">〒{data.zipCode}</text>
      <text x="50" y="47.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.2" fill="#999999">{data.addressJa}</text>
    </g>
  ),
};

export const popTemplates: TemplateDefinition[] = [
  splashTemplate,
  bubbleTemplate,
  comicTemplate,
  candyTemplate,
  pixelTemplate,
  stickerTemplate,
  halftoneTemplate,
  warholTemplate,
  bangTemplate,
  rainbowTemplate,
];
