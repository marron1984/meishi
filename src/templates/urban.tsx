import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. METRO (地下) — Subway/underground inspired
// Transit map style lines and station dots with concrete grain
// ============================================================
const metroTemplate: TemplateDefinition = {
  id: 'urban-metro',
  name: 'METRO',
  nameJa: '地下',
  category: 'urban',
  designer: 'Urban Studio',
  description: '地下鉄路線図の美学。色分けされた線が都市を繋ぐ。',
  accentColor: '#E53935',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FAFAFA" />
      <defs>
        <filter id="urban-metro-grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="urban-metro-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="urban-metro-red" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#C62828" />
          <stop offset="50%" stopColor="#E53935" />
          <stop offset="100%" stopColor="#EF5350" />
        </linearGradient>
        <linearGradient id="urban-metro-blue" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1565C0" />
          <stop offset="50%" stopColor="#1E88E5" />
          <stop offset="100%" stopColor="#42A5F5" />
        </linearGradient>
        <linearGradient id="urban-metro-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F9A825" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FDD835" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      {/* Concrete texture overlay */}
      <rect width="91" height="55" fill="#F0EFEE" fillOpacity="0.3" filter="url(#urban-metro-grain)" />
      {/* Metro Red Line */}
      <line x1="0" y1="12" x2="35" y2="12" stroke="url(#urban-metro-red)" strokeWidth="0.9" />
      <line x1="35" y1="12" x2="45" y2="22" stroke="url(#urban-metro-red)" strokeWidth="0.9" />
      <line x1="45" y1="22" x2="91" y2="22" stroke="url(#urban-metro-red)" strokeWidth="0.9" />
      {/* Metro Blue Line */}
      <line x1="0" y1="42" x2="25" y2="42" stroke="url(#urban-metro-blue)" strokeWidth="0.7" />
      <line x1="25" y1="42" x2="35" y2="35" stroke="url(#urban-metro-blue)" strokeWidth="0.7" />
      <line x1="35" y1="35" x2="91" y2="35" stroke="url(#urban-metro-blue)" strokeWidth="0.7" />
      {/* Gold line accent */}
      <line x1="60" y1="0" x2="60" y2="55" stroke="#FDD835" strokeWidth="0.5" strokeOpacity="0.25" />
      {/* Station dots with shadows */}
      <circle cx="35" cy="12" r="1.5" fill="#ffffff" stroke="#E53935" strokeWidth="0.6" filter="url(#urban-metro-shadow)" />
      <circle cx="45" cy="22" r="1.5" fill="#ffffff" stroke="#E53935" strokeWidth="0.6" filter="url(#urban-metro-shadow)" />
      <circle cx="25" cy="42" r="1.2" fill="#ffffff" stroke="#1E88E5" strokeWidth="0.5" />
      <circle cx="35" cy="35" r="1.2" fill="#ffffff" stroke="#1E88E5" strokeWidth="0.5" />
      {/* Transfer station (intersection) */}
      <circle cx="60" cy="22" r="1.8" fill="#ffffff" stroke="#333333" strokeWidth="0.6" filter="url(#urban-metro-shadow)" />
      <circle cx="60" cy="35" r="1.8" fill="#ffffff" stroke="#333333" strokeWidth="0.6" filter="url(#urban-metro-shadow)" />
      {/* Micro-detail: tiny grid marks */}
      <rect x="3" y="3" width="0.4" height="0.4" fill="#BDBDBD" fillOpacity="0.4" />
      <rect x="6" y="3" width="0.4" height="0.4" fill="#BDBDBD" fillOpacity="0.3" />
      <rect x="3" y="6" width="0.4" height="0.4" fill="#BDBDBD" fillOpacity="0.3" />
      {data.logo && <image href={data.logo} x="76" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="48"
        y="18"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="5.5"
        letterSpacing="0.3"
        fill="#1a1a1a"
        filter="url(#urban-metro-shadow)"
      >
        {data.nameJa}
      </text>
      <text
        x="62"
        y="30"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.2"
        fill="#616161"
      >
        {data.nameEn}
      </text>
      <text
        x="62"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#9E9E9E"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FAFAFA" />
      <defs>
        <filter id="urban-metro-bgrain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="urban-metro-bshadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#F0EFEE" fillOpacity="0.3" filter="url(#urban-metro-bgrain)" />
      {/* Subtle metro lines on back */}
      <line x1="0" y1="8" x2="91" y2="8" stroke="#E53935" strokeWidth="0.4" strokeOpacity="0.2" />
      <line x1="0" y1="48" x2="91" y2="48" stroke="#1E88E5" strokeWidth="0.4" strokeOpacity="0.2" />
      <circle cx="10" cy="8" r="0.8" fill="#ffffff" stroke="#E53935" strokeWidth="0.3" />
      <circle cx="82" cy="48" r="0.8" fill="#ffffff" stroke="#1E88E5" strokeWidth="0.3" />
      <circle cx="45" cy="8" r="0.6" fill="#ffffff" stroke="#E53935" strokeWidth="0.2" />
      {data.logo && <image href={data.logo} x="76" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="10"
        y="16"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#1a1a1a"
        filter="url(#urban-metro-bshadow)"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="20"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#616161"
      >
        {data.companyEn}
      </text>
      <text
        x="10"
        y="24.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#9E9E9E"
      >
        {data.titleJa}
      </text>
      <path d="M 10,27 Q 30,26.5 50,27.5 Q 70,28 82,27" stroke="#BDBDBD" strokeWidth="0.15" fill="none" strokeOpacity="0.6" />
      <text x="10" y="32" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#555555">
        {data.tel}
      </text>
      <text x="10" y="36" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#555555">
        {data.email}
      </text>
      <text x="10" y="40" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#555555">
        {data.website}
      </text>
      <text x="10" y="46" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#9E9E9E">
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 2. SKYLINE (街並) — City skyline silhouette
// Building silhouettes with gradient sky and window lights
// ============================================================
const skylineTemplate: TemplateDefinition = {
  id: 'urban-skyline',
  name: 'SKYLINE',
  nameJa: '街並',
  category: 'urban',
  designer: 'Urban Studio',
  description: '夕暮れの街並み。ビルのシルエットが地平線を描く。',
  accentColor: '#1A237E',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="urban-skyline-grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="urban-skyline-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.4" />
          <feOffset dx="0.1" dy="0.2" />
          <feFlood floodColor="#000" floodOpacity="0.12" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="urban-skyline-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0D1240" />
          <stop offset="30%" stopColor="#1A237E" />
          <stop offset="60%" stopColor="#283593" />
          <stop offset="100%" stopColor="#3949AB" />
        </linearGradient>
        <radialGradient id="urban-skyline-moon" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#C5CAE9" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#urban-skyline-sky)" />
      {/* Moon glow */}
      <circle cx="78" cy="10" r="10" fill="url(#urban-skyline-moon)" />
      <circle cx="78" cy="10" r="2" fill="#E8EAF6" fillOpacity="0.15" />
      {/* Stars micro-details */}
      <circle cx="12" cy="5" r="0.2" fill="#FFFFFF" fillOpacity="0.4" />
      <circle cx="30" cy="8" r="0.15" fill="#FFFFFF" fillOpacity="0.3" />
      <circle cx="55" cy="3" r="0.2" fill="#FFFFFF" fillOpacity="0.35" />
      <circle cx="65" cy="6" r="0.12" fill="#FFFFFF" fillOpacity="0.25" />
      <circle cx="42" cy="10" r="0.15" fill="#FFFFFF" fillOpacity="0.3" />
      {/* City skyline */}
      <path d="M 0,55 L 0,42 L 4,42 L 4,38 L 7,38 L 7,42 L 10,42 L 10,35 L 13,35 L 13,32 L 15,32 L 15,35 L 18,35 L 18,40 L 22,40 L 22,28 L 24,28 L 24,25 L 26,25 L 26,28 L 28,28 L 28,38 L 32,38 L 32,30 L 35,30 L 35,22 L 37,22 L 37,20 L 39,20 L 39,22 L 41,22 L 41,32 L 44,32 L 44,38 L 48,38 L 48,26 L 50,26 L 50,24 L 52,24 L 52,26 L 54,26 L 54,35 L 58,35 L 58,30 L 62,30 L 62,34 L 65,34 L 65,40 L 68,40 L 68,36 L 72,36 L 72,28 L 74,28 L 74,26 L 76,26 L 76,28 L 78,28 L 78,38 L 82,38 L 82,42 L 86,42 L 86,40 L 91,40 L 91,55 Z" fill="#0D1240" fillOpacity="0.7" />
      {/* Window lights with varied colors */}
      <rect x="23" y="30" width="1" height="1" fill="#FDD835" fillOpacity="0.6" />
      <rect x="25" y="32" width="1" height="1" fill="#FDD835" fillOpacity="0.45" />
      <rect x="36" y="24" width="0.8" height="0.8" fill="#FFE082" fillOpacity="0.7" />
      <rect x="38" y="26" width="0.8" height="0.8" fill="#FDD835" fillOpacity="0.4" />
      <rect x="49" y="28" width="0.8" height="0.8" fill="#FFE082" fillOpacity="0.55" />
      <rect x="51" y="30" width="0.8" height="0.8" fill="#FDD835" fillOpacity="0.35" />
      <rect x="73" y="30" width="0.8" height="0.8" fill="#FFE082" fillOpacity="0.5" />
      <rect x="75" y="32" width="0.8" height="0.8" fill="#FDD835" fillOpacity="0.4" />
      <rect x="33" y="32" width="0.7" height="0.7" fill="#64FFDA" fillOpacity="0.25" />
      <rect x="59" y="32" width="0.7" height="0.7" fill="#64FFDA" fillOpacity="0.2" />
      {data.logo && <image href={data.logo} x="5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="5.5"
        letterSpacing="0.6"
        fill="#E8EAF6"
        filter="url(#urban-skyline-shadow)"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="20"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#9FA8DA"
      >
        {data.nameEn.toUpperCase()}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="urban-skyline-bgrain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="urban-skyline-bshadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="urban-skyline-back-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#283593" />
          <stop offset="100%" stopColor="#3949AB" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#urban-skyline-back-sky)" />
      {/* Minimal skyline silhouette at bottom */}
      <path d="M 0,55 L 0,50 L 8,50 L 8,46 L 12,46 L 12,48 L 18,48 L 18,44 L 22,44 L 22,50 L 30,50 L 30,47 L 34,47 L 34,50 L 91,50 L 91,55 Z" fill="#0D1240" fillOpacity="0.5" />
      <rect x="19" y="45" width="0.5" height="0.5" fill="#FDD835" fillOpacity="0.3" />
      <rect x="31" y="48" width="0.5" height="0.5" fill="#FFE082" fillOpacity="0.25" />
      {/* Stars micro-details */}
      <circle cx="80" cy="5" r="0.15" fill="#FFFFFF" fillOpacity="0.3" />
      <circle cx="60" cy="8" r="0.12" fill="#FFFFFF" fillOpacity="0.25" />
      {data.logo && <image href={data.logo} x="76" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#E8EAF6"
        filter="url(#urban-skyline-bshadow)"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#9FA8DA"
      >
        {data.companyEn}
      </text>
      <text
        x="10"
        y="23"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#7986CB"
      >
        {data.titleJa}
      </text>
      <line x1="10" y1="26" x2="55" y2="26" stroke="#5C6BC0" strokeWidth="0.12" strokeOpacity="0.4" />
      <text x="10" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#C5CAE9">
        {data.tel}
      </text>
      <text x="10" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#C5CAE9">
        {data.email}
      </text>
      <text x="10" y="39" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#C5CAE9">
        {data.website}
      </text>
      <text x="10" y="45" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#7986CB">
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 3. ALLEY (路地) — Narrow alleyway perspective
// Converging lines creating depth, concrete texture
// ============================================================
const alleyTemplate: TemplateDefinition = {
  id: 'urban-alley',
  name: 'ALLEY',
  nameJa: '路地',
  category: 'urban',
  designer: 'Urban Studio',
  description: '路地裏の奥行き。収束する線が都市の深度を描く。',
  accentColor: '#78909C',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ECEFF1" />
      <defs>
        <filter id="urban-alley-grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="urban-alley-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.35" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="urban-alley-wall-l" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#90A4AE" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#ECEFF1" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="urban-alley-wall-r" x1="1" y1="0" x2="0" y2="0">
          <stop offset="0%" stopColor="#78909C" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#ECEFF1" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="urban-alley-light" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#ECEFF1" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fillOpacity="0.2" filter="url(#urban-alley-grain)" fill="#CFD8DC" />
      {/* Left wall */}
      <polygon points="0,0 30,15 30,40 0,55" fill="url(#urban-alley-wall-l)" />
      {/* Right wall */}
      <polygon points="91,0 61,15 61,40 91,55" fill="url(#urban-alley-wall-r)" />
      {/* Light at end of alley */}
      <circle cx="45.5" cy="27.5" r="12" fill="url(#urban-alley-light)" />
      {/* Perspective converging lines */}
      <line x1="0" y1="0" x2="30" y2="15" stroke="#78909C" strokeWidth="0.15" strokeOpacity="0.3" />
      <line x1="0" y1="55" x2="30" y2="40" stroke="#78909C" strokeWidth="0.15" strokeOpacity="0.3" />
      <line x1="91" y1="0" x2="61" y2="15" stroke="#78909C" strokeWidth="0.15" strokeOpacity="0.3" />
      <line x1="91" y1="55" x2="61" y2="40" stroke="#78909C" strokeWidth="0.15" strokeOpacity="0.3" />
      {/* Horizontal depth lines */}
      <line x1="30" y1="22" x2="61" y2="22" stroke="#78909C" strokeWidth="0.08" strokeOpacity="0.2" />
      <line x1="30" y1="28" x2="61" y2="28" stroke="#78909C" strokeWidth="0.08" strokeOpacity="0.15" />
      <line x1="30" y1="34" x2="61" y2="34" stroke="#78909C" strokeWidth="0.08" strokeOpacity="0.2" />
      {/* Brick texture micro-details on walls */}
      <rect x="3" y="10" width="3" height="1.2" fill="#B0BEC5" fillOpacity="0.12" rx="0.1" />
      <rect x="2" y="12" width="3" height="1.2" fill="#B0BEC5" fillOpacity="0.1" rx="0.1" />
      <rect x="85" y="15" width="3" height="1.2" fill="#90A4AE" fillOpacity="0.1" rx="0.1" />
      <rect x="86" y="17.5" width="3" height="1.2" fill="#90A4AE" fillOpacity="0.08" rx="0.1" />
      {data.logo && <image href={data.logo} x="75" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.4"
        fill="#37474F"
        filter="url(#urban-alley-shadow)"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#607D8B"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#90A4AE"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ECEFF1" />
      <defs>
        <filter id="urban-alley-bgrain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="urban-alley-bshadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fillOpacity="0.15" filter="url(#urban-alley-bgrain)" fill="#CFD8DC" />
      <line x1="0" y1="8" x2="91" y2="8" stroke="#78909C" strokeWidth="0.12" strokeOpacity="0.2" />
      <line x1="0" y1="48" x2="91" y2="48" stroke="#78909C" strokeWidth="0.12" strokeOpacity="0.2" />
      <polygon points="0,0 12,8 12,48 0,55" fill="#B0BEC5" fillOpacity="0.08" />
      {data.logo && <image href={data.logo} x="76" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text
        x="14"
        y="16"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#37474F"
        filter="url(#urban-alley-bshadow)"
      >
        {data.companyJa}
      </text>
      <text
        x="14"
        y="20"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#607D8B"
      >
        {data.companyEn}
      </text>
      <text
        x="14"
        y="24.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#90A4AE"
      >
        {data.titleJa}
      </text>
      <path d="M 14,27 Q 35,26.5 55,27.5 Q 70,28 82,27" stroke="#90A4AE" strokeWidth="0.12" fill="none" strokeOpacity="0.4" />
      <text x="14" y="31.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#546E7A">
        {data.tel}
      </text>
      <text x="14" y="35.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#546E7A">
        {data.email}
      </text>
      <text x="14" y="39.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#546E7A">
        {data.website}
      </text>
      <text x="14" y="46" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#90A4AE">
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 4. SIGNAL (信号) — Traffic signal / urban signage
// Bold colored circles and clean signage style
// ============================================================
const signalTemplate: TemplateDefinition = {
  id: 'urban-signal',
  name: 'SIGNAL',
  nameJa: '信号',
  category: 'urban',
  designer: 'Urban Studio',
  description: '信号機の三色。都市のリズムを支配する赤・黄・緑。',
  accentColor: '#F44336',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#212121" />
      <defs>
        <filter id="urban-signal-grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="urban-signal-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.35" />
          <feOffset dx="0.1" dy="0.2" />
          <feFlood floodColor="#000" floodOpacity="0.15" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="urban-signal-red-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#F44336" stopOpacity="0.4" />
          <stop offset="60%" stopColor="#F44336" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#F44336" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="urban-signal-amber-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#FFC107" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#FFC107" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="urban-signal-green-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#4CAF50" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#4CAF50" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fillOpacity="0.15" filter="url(#urban-signal-grain)" fill="#333333" />
      {/* Traffic signal housing */}
      <rect x="4" y="9" width="9" height="37" rx="2" fill="#2C2C2C" stroke="#3E3E3E" strokeWidth="0.15" />
      {/* Signal lights with glows */}
      <circle cx="8.5" cy="15.5" r="6" fill="url(#urban-signal-red-glow)" />
      <circle cx="8.5" cy="15.5" r="2.8" fill="#F44336" fillOpacity="0.85" />
      <circle cx="8.5" cy="15.5" r="1.5" fill="#FF8A80" fillOpacity="0.3" />
      <circle cx="8.5" cy="27.5" r="4" fill="url(#urban-signal-amber-glow)" />
      <circle cx="8.5" cy="27.5" r="2.5" fill="#FFC107" fillOpacity="0.55" />
      <circle cx="8.5" cy="39.5" r="3" fill="url(#urban-signal-green-glow)" />
      <circle cx="8.5" cy="39.5" r="2.5" fill="#4CAF50" fillOpacity="0.35" />
      {/* Signal pole */}
      <rect x="7.5" y="46" width="2" height="5" fill="#2C2C2C" />
      {/* Crosswalk stripes at bottom */}
      <rect x="22" y="47" width="8" height="1.4" fill="#FFFFFF" fillOpacity="0.25" rx="0.2" />
      <rect x="33" y="47" width="8" height="1.4" fill="#FFFFFF" fillOpacity="0.25" rx="0.2" />
      <rect x="44" y="47" width="8" height="1.4" fill="#FFFFFF" fillOpacity="0.25" rx="0.2" />
      <rect x="55" y="47" width="8" height="1.4" fill="#FFFFFF" fillOpacity="0.25" rx="0.2" />
      <rect x="66" y="47" width="8" height="1.4" fill="#FFFFFF" fillOpacity="0.25" rx="0.2" />
      <rect x="77" y="47" width="8" height="1.4" fill="#FFFFFF" fillOpacity="0.25" rx="0.2" />
      {data.logo && <image href={data.logo} x="76" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text
        x="22"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="0.4"
        fill="#FFFFFF"
        filter="url(#urban-signal-shadow)"
      >
        {data.nameJa}
      </text>
      <text
        x="22"
        y="29"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.3"
        fill="#BDBDBD"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="22"
        y="36"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#757575"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#212121" />
      <defs>
        <filter id="urban-signal-bgrain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="urban-signal-bshadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fillOpacity="0.12" filter="url(#urban-signal-bgrain)" fill="#333333" />
      {/* Small signal dots top-right */}
      <circle cx="80" cy="8" r="1.5" fill="#F44336" fillOpacity="0.35" />
      <circle cx="80" cy="14" r="1.5" fill="#FFC107" fillOpacity="0.25" />
      <circle cx="80" cy="20" r="1.5" fill="#4CAF50" fillOpacity="0.18" />
      {/* Crosswalk at bottom */}
      <rect x="5" y="49" width="6" height="1" fill="#FFFFFF" fillOpacity="0.15" />
      <rect x="14" y="49" width="6" height="1" fill="#FFFFFF" fillOpacity="0.15" />
      <rect x="23" y="49" width="6" height="1" fill="#FFFFFF" fillOpacity="0.15" />
      {data.logo && <image href={data.logo} x="76" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#FFFFFF"
        filter="url(#urban-signal-bshadow)"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#BDBDBD"
      >
        {data.companyEn}
      </text>
      <text
        x="10"
        y="23"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#757575"
      >
        {data.titleJa}
      </text>
      <line x1="10" y1="26" x2="55" y2="26" stroke="#555555" strokeWidth="0.12" />
      <text x="10" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#E0E0E0">
        {data.tel}
      </text>
      <text x="10" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#E0E0E0">
        {data.email}
      </text>
      <text x="10" y="39" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#E0E0E0">
        {data.website}
      </text>
      <text x="10" y="45.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#757575">
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 5. BRIDGE (橋) — Suspension bridge cables
// Cable/wire patterns stretching across the card
// ============================================================
const bridgeTemplate: TemplateDefinition = {
  id: 'urban-bridge',
  name: 'BRIDGE',
  nameJa: '橋',
  category: 'urban',
  designer: 'Urban Studio',
  description: '吊り橋のケーブルが空を横切る。構造美の極致。',
  accentColor: '#455A64',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F5F5" />
      <defs>
        <filter id="urban-bridge-grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="urban-bridge-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="urban-bridge-cable" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#78909C" stopOpacity="0" />
          <stop offset="30%" stopColor="#455A64" stopOpacity="0.5" />
          <stop offset="70%" stopColor="#455A64" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#78909C" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="urban-bridge-steel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#546E7A" />
          <stop offset="50%" stopColor="#455A64" />
          <stop offset="100%" stopColor="#37474F" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fillOpacity="0.15" filter="url(#urban-bridge-grain)" fill="#CFD8DC" />
      {/* Bridge towers */}
      <rect x="19.5" y="5" width="2" height="50" fill="url(#urban-bridge-steel)" fillOpacity="0.25" rx="0.2" />
      <rect x="69.5" y="5" width="2" height="50" fill="url(#urban-bridge-steel)" fillOpacity="0.25" rx="0.2" />
      {/* Main cable catenary */}
      <path d="M 0,8 Q 21,20 45.5,22 Q 70,20 91,8" stroke="#455A64" strokeWidth="0.35" fill="none" strokeOpacity="0.4" />
      {/* Suspension cables */}
      <line x1="25" y1="18" x2="25" y2="42" stroke="#78909C" strokeWidth="0.1" strokeOpacity="0.2" />
      <line x1="30" y1="19" x2="30" y2="42" stroke="#78909C" strokeWidth="0.1" strokeOpacity="0.2" />
      <line x1="35" y1="20" x2="35" y2="42" stroke="#78909C" strokeWidth="0.1" strokeOpacity="0.2" />
      <line x1="40" y1="21" x2="40" y2="42" stroke="#78909C" strokeWidth="0.1" strokeOpacity="0.2" />
      <line x1="45" y1="22" x2="45" y2="42" stroke="#78909C" strokeWidth="0.1" strokeOpacity="0.2" />
      <line x1="50" y1="21.5" x2="50" y2="42" stroke="#78909C" strokeWidth="0.1" strokeOpacity="0.2" />
      <line x1="55" y1="21" x2="55" y2="42" stroke="#78909C" strokeWidth="0.1" strokeOpacity="0.2" />
      <line x1="60" y1="20" x2="60" y2="42" stroke="#78909C" strokeWidth="0.1" strokeOpacity="0.2" />
      <line x1="65" y1="19" x2="65" y2="42" stroke="#78909C" strokeWidth="0.1" strokeOpacity="0.2" />
      {/* Bridge deck */}
      <line x1="0" y1="42" x2="91" y2="42" stroke="#455A64" strokeWidth="0.5" strokeOpacity="0.45" />
      {/* Rivet micro-details on towers */}
      <circle cx="20.5" cy="10" r="0.3" fill="#37474F" fillOpacity="0.2" />
      <circle cx="20.5" cy="15" r="0.3" fill="#37474F" fillOpacity="0.2" />
      <circle cx="70.5" cy="10" r="0.3" fill="#37474F" fillOpacity="0.2" />
      <circle cx="70.5" cy="15" r="0.3" fill="#37474F" fillOpacity="0.2" />
      {data.logo && <image href={data.logo} x="5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#263238"
        filter="url(#urban-bridge-shadow)"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="38"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#607D8B"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="48"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#90A4AE"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F5F5" />
      <defs>
        <filter id="urban-bridge-bgrain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="urban-bridge-bshadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fillOpacity="0.12" filter="url(#urban-bridge-bgrain)" fill="#CFD8DC" />
      {/* Subtle cable accent */}
      <path d="M 0,5 Q 45.5,12 91,5" stroke="#455A64" strokeWidth="0.2" fill="none" strokeOpacity="0.15" />
      <line x1="0" y1="48" x2="91" y2="48" stroke="#455A64" strokeWidth="0.2" strokeOpacity="0.15" />
      {data.logo && <image href={data.logo} x="76" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#263238"
        filter="url(#urban-bridge-bshadow)"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#607D8B"
      >
        {data.companyEn}
      </text>
      <text
        x="10"
        y="23"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#90A4AE"
      >
        {data.titleJa}
      </text>
      <path d="M 10,26 Q 30,25.5 50,26.5 Q 70,27 82,26" stroke="#78909C" strokeWidth="0.12" fill="none" strokeOpacity="0.4" />
      <text x="10" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#455A64">
        {data.tel}
      </text>
      <text x="10" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#455A64">
        {data.email}
      </text>
      <text x="10" y="39" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#455A64">
        {data.website}
      </text>
      <text x="10" y="45" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#90A4AE">
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 6. GRID-U (碁盤) — Urban grid/block layout
// City block grid pattern with highlighted blocks
// ============================================================
const gridUTemplate: TemplateDefinition = {
  id: 'urban-grid-u',
  name: 'GRID-U',
  nameJa: '碁盤',
  category: 'urban',
  designer: 'Urban Studio',
  description: '碁盤の目のように整然とした都市計画。街区の幾何学。',
  accentColor: '#37474F',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FAFAFA" />
      <defs>
        <filter id="urban-grid-u-grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="urban-grid-u-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="urban-grid-u-accent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E53935" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FF8A80" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fillOpacity="0.1" filter="url(#urban-grid-u-grain)" fill="#CFD8DC" />
      {/* City grid - streets */}
      {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90].map((x, i) => (
        <line key={`urban-grid-u-v-${i}`} x1={x} y1="0" x2={x} y2="55" stroke="#CFD8DC" strokeWidth="0.15" />
      ))}
      {[0, 11, 22, 33, 44, 55].map((y, i) => (
        <line key={`urban-grid-u-h-${i}`} x1="0" y1={y} x2="91" y2={y} stroke="#CFD8DC" strokeWidth="0.15" />
      ))}
      {/* Highlighted city blocks */}
      <rect x="60" y="0" width="10" height="11" fill="#37474F" fillOpacity="0.06" />
      <rect x="70" y="0" width="10" height="11" fill="url(#urban-grid-u-accent)" />
      <rect x="80" y="0" width="10" height="11" fill="#37474F" fillOpacity="0.04" />
      <rect x="70" y="11" width="10" height="11" fill="#37474F" fillOpacity="0.04" />
      <rect x="80" y="11" width="10" height="11" fill="#37474F" fillOpacity="0.08" />
      <rect x="0" y="44" width="10" height="11" fill="#37474F" fillOpacity="0.06" />
      <rect x="10" y="44" width="10" height="11" fill="#37474F" fillOpacity="0.04" />
      {/* Micro-detail intersections */}
      <circle cx="70" cy="11" r="0.4" fill="#E53935" fillOpacity="0.15" />
      <circle cx="80" cy="11" r="0.3" fill="#37474F" fillOpacity="0.15" />
      {data.logo && <image href={data.logo} x="5" y="3" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.4"
        fill="#263238"
        filter="url(#urban-grid-u-shadow)"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.2"
        fill="#607D8B"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#90A4AE"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FAFAFA" />
      <defs>
        <filter id="urban-grid-u-bgrain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="urban-grid-u-bshadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fillOpacity="0.08" filter="url(#urban-grid-u-bgrain)" fill="#CFD8DC" />
      {/* Subtle grid on back */}
      {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90].map((x, i) => (
        <line key={`urban-grid-u-bv-${i}`} x1={x} y1="0" x2={x} y2="55" stroke="#ECEFF1" strokeWidth="0.1" />
      ))}
      {[0, 11, 22, 33, 44, 55].map((y, i) => (
        <line key={`urban-grid-u-bh-${i}`} x1="0" y1={y} x2="91" y2={y} stroke="#ECEFF1" strokeWidth="0.1" />
      ))}
      <rect x="70" y="44" width="10" height="11" fill="#37474F" fillOpacity="0.04" />
      <rect x="80" y="44" width="10" height="11" fill="#37474F" fillOpacity="0.06" />
      {data.logo && <image href={data.logo} x="76" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#263238"
        filter="url(#urban-grid-u-bshadow)"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#607D8B"
      >
        {data.companyEn}
      </text>
      <text
        x="10"
        y="23"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#90A4AE"
      >
        {data.titleJa}
      </text>
      <path d="M 10,26 Q 30,25.5 50,26.5 Q 70,27 82,26" stroke="#90A4AE" strokeWidth="0.12" fill="none" strokeOpacity="0.4" />
      <text x="10" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#455A64">
        {data.tel}
      </text>
      <text x="10" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#455A64">
        {data.email}
      </text>
      <text x="10" y="39" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#455A64">
        {data.website}
      </text>
      <text x="10" y="45.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#90A4AE">
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 7. TOWER (塔) — Skyscraper/tower form
// Tall vertical emphasis with window pattern
// ============================================================
const towerTemplate: TemplateDefinition = {
  id: 'urban-tower',
  name: 'TOWER',
  nameJa: '塔',
  category: 'urban',
  designer: 'Urban Studio',
  description: '摩天楼の垂直性。天を突く塔が都市のアイコンとなる。',
  accentColor: '#546E7A',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#263238" />
      <defs>
        <filter id="urban-tower-grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="urban-tower-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.4" />
          <feOffset dx="0.1" dy="0.2" />
          <feFlood floodColor="#000" floodOpacity="0.12" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="urban-tower-glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#546E7A" />
          <stop offset="50%" stopColor="#455A64" />
          <stop offset="100%" stopColor="#37474F" />
        </linearGradient>
        <linearGradient id="urban-tower-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1A2634" />
          <stop offset="100%" stopColor="#263238" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#urban-tower-sky)" />
      <rect width="91" height="55" fillOpacity="0.12" filter="url(#urban-tower-grain)" fill="#37474F" />
      {/* Tower body */}
      <rect x="67" y="0" width="17" height="55" fill="url(#urban-tower-glass)" />
      {/* Window grid on tower */}
      {[4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52].map((y, i) => (
        <g key={`urban-tower-win-${i}`}>
          <rect x="69" y={y} width="2.5" height="2" fill="#78909C" fillOpacity={i % 3 === 0 ? 0.5 : 0.2} />
          <rect x="73" y={y} width="2.5" height="2" fill="#78909C" fillOpacity={i % 2 === 0 ? 0.4 : 0.15} />
          <rect x="77" y={y} width="2.5" height="2" fill="#78909C" fillOpacity={i % 4 === 0 ? 0.5 : 0.2} />
        </g>
      ))}
      {/* Lit windows (warm yellow) */}
      <rect x="69" y="20" width="2.5" height="2" fill="#FDD835" fillOpacity="0.4" />
      <rect x="77" y="32" width="2.5" height="2" fill="#FFE082" fillOpacity="0.35" />
      <rect x="73" y="44" width="2.5" height="2" fill="#FDD835" fillOpacity="0.3" />
      <rect x="69" y="40" width="2.5" height="2" fill="#64FFDA" fillOpacity="0.15" />
      {/* Tower antenna */}
      <line x1="75.5" y1="0" x2="75.5" y2="3" stroke="#90A4AE" strokeWidth="0.3" />
      <circle cx="75.5" cy="0.5" r="0.4" fill="#F44336" fillOpacity="0.5" />
      {data.logo && <image href={data.logo} x="5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text
        x="10"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="6"
        letterSpacing="0.5"
        fill="#ECEFF1"
        filter="url(#urban-tower-shadow)"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="27"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.3"
        fill="#78909C"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="34"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#607D8B"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#263238" />
      <defs>
        <filter id="urban-tower-bgrain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="urban-tower-bshadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fillOpacity="0.1" filter="url(#urban-tower-bgrain)" fill="#37474F" />
      {/* Small tower silhouette */}
      <rect x="78" y="0" width="8" height="55" fill="#37474F" fillOpacity="0.3" />
      <rect x="80" y="4" width="1.5" height="1.2" fill="#78909C" fillOpacity="0.2" />
      <rect x="83" y="4" width="1.5" height="1.2" fill="#78909C" fillOpacity="0.15" />
      <rect x="80" y="8" width="1.5" height="1.2" fill="#FDD835" fillOpacity="0.18" />
      <rect x="83" y="8" width="1.5" height="1.2" fill="#78909C" fillOpacity="0.15" />
      {data.logo && <image href={data.logo} x="76" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#ECEFF1"
        filter="url(#urban-tower-bshadow)"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#78909C"
      >
        {data.companyEn}
      </text>
      <text
        x="10"
        y="23"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#607D8B"
      >
        {data.titleJa}
      </text>
      <line x1="10" y1="26" x2="55" y2="26" stroke="#546E7A" strokeWidth="0.12" />
      <text x="10" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#B0BEC5">
        {data.tel}
      </text>
      <text x="10" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#B0BEC5">
        {data.email}
      </text>
      <text x="10" y="39" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#B0BEC5">
        {data.website}
      </text>
      <text x="10" y="45.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#607D8B">
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 8. TUNNEL (隧道) — Tunnel perspective
// Concentric rectangles creating tunnel depth effect
// ============================================================
const tunnelTemplate: TemplateDefinition = {
  id: 'urban-tunnel',
  name: 'TUNNEL',
  nameJa: '隧道',
  category: 'urban',
  designer: 'Urban Studio',
  description: 'トンネルの向こうに見える出口の光。奥行きの幾何学。',
  accentColor: '#424242',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#2C2C2C" />
      <defs>
        <filter id="urban-tunnel-grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.95" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="urban-tunnel-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.35" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.12" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="urban-tunnel-light" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.15" />
          <stop offset="40%" stopColor="#ECEFF1" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#2C2C2C" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="urban-tunnel-depth" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3E3E3E" />
          <stop offset="100%" stopColor="#1A1A1A" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fillOpacity="0.15" filter="url(#urban-tunnel-grain)" fill="#424242" />
      {/* Tunnel concentric rectangles */}
      <rect x="3" y="2" width="85" height="51" fill="none" stroke="#4A4A4A" strokeWidth="0.15" />
      <rect x="10" y="6" width="71" height="43" fill="none" stroke="#555555" strokeWidth="0.15" />
      <rect x="17" y="10" width="57" height="35" fill="none" stroke="#666666" strokeWidth="0.15" />
      <rect x="24" y="14" width="43" height="27" fill="none" stroke="#777777" strokeWidth="0.15" />
      <rect x="31" y="18" width="29" height="19" fill="none" stroke="#888888" strokeWidth="0.15" />
      {/* Light at the end of tunnel */}
      <rect x="36" y="21" width="19" height="13" fill="url(#urban-tunnel-light)" />
      <rect x="39" y="23" width="13" height="9" fill="#ECEFF1" fillOpacity="0.06" />
      <rect x="42" y="25" width="7" height="5" fill="#FAFAFA" fillOpacity="0.1" />
      {/* Tunnel light strips */}
      <rect x="3" y="27" width="85" height="0.15" fill="#FFC107" fillOpacity="0.08" />
      <rect x="10" y="27" width="71" height="0.12" fill="#FFC107" fillOpacity="0.1" />
      {data.logo && <image href={data.logo} x="5" y="3" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="3.5"
        letterSpacing="0.3"
        fill="#FAFAFA"
        filter="url(#urban-tunnel-shadow)"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="30.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        letterSpacing="0.2"
        fill="#BDBDBD"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="47"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#757575"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#2C2C2C" />
      <defs>
        <filter id="urban-tunnel-bgrain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.95" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="urban-tunnel-bshadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fillOpacity="0.12" filter="url(#urban-tunnel-bgrain)" fill="#424242" />
      {/* Subtle tunnel rings */}
      <rect x="60" y="5" width="26" height="20" fill="none" stroke="#3E3E3E" strokeWidth="0.1" />
      <rect x="63" y="7" width="20" height="16" fill="none" stroke="#4A4A4A" strokeWidth="0.1" />
      <rect x="66" y="9" width="14" height="12" fill="none" stroke="#555555" strokeWidth="0.1" />
      <rect x="69" y="11" width="8" height="8" fill="#ECEFF1" fillOpacity="0.03" />
      {data.logo && <image href={data.logo} x="76" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#ECEFF1"
        filter="url(#urban-tunnel-bshadow)"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#9E9E9E"
      >
        {data.companyEn}
      </text>
      <text
        x="10"
        y="23"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#757575"
      >
        {data.titleJa}
      </text>
      <line x1="10" y1="26" x2="50" y2="26" stroke="#555555" strokeWidth="0.12" />
      <text x="10" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#BDBDBD">
        {data.tel}
      </text>
      <text x="10" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#BDBDBD">
        {data.email}
      </text>
      <text x="10" y="39" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#BDBDBD">
        {data.website}
      </text>
      <text x="10" y="45.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#757575">
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 9. PARK (公園) — Urban park oasis
// Green space in concrete with bench/tree elements
// ============================================================
const parkTemplate: TemplateDefinition = {
  id: 'urban-park',
  name: 'PARK',
  nameJa: '公園',
  category: 'urban',
  designer: 'Urban Studio',
  description: 'コンクリートの中の緑。都市公園が生む安らぎの空間。',
  accentColor: '#43A047',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#E8F5E9" />
      <defs>
        <filter id="urban-park-grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="urban-park-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="urban-park-canopy1" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#66BB6A" stopOpacity="0.3" />
          <stop offset="60%" stopColor="#81C784" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#E8F5E9" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="urban-park-canopy2" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#43A047" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#E8F5E9" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="urban-park-path-g" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#BDBDBD" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#BDBDBD" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fillOpacity="0.15" filter="url(#urban-park-grain)" fill="#C8E6C9" />
      {/* Park path */}
      <path d="M 0,40 Q 20,38 40,42 Q 60,46 91,40" stroke="#BDBDBD" strokeWidth="1.5" fill="none" strokeOpacity="0.25" />
      {/* Tree canopy shapes */}
      <circle cx="15" cy="18" r="9" fill="url(#urban-park-canopy1)" />
      <circle cx="12" cy="15" r="6" fill="#81C784" fillOpacity="0.18" />
      <circle cx="18" cy="14" r="5" fill="#A5D6A7" fillOpacity="0.15" />
      {/* Tree trunk */}
      <rect x="14" y="24" width="1.2" height="8" fill="#795548" fillOpacity="0.25" rx="0.3" />
      {/* Second tree */}
      <circle cx="80" cy="22" r="7" fill="url(#urban-park-canopy2)" />
      <circle cx="78" cy="20" r="4.5" fill="#81C784" fillOpacity="0.12" />
      <rect x="79" y="27" width="1" height="6" fill="#795548" fillOpacity="0.2" rx="0.2" />
      {/* Park bench micro-detail */}
      <rect x="42" y="36" width="8" height="0.6" fill="#8D6E63" fillOpacity="0.35" rx="0.15" />
      <rect x="43" y="36.6" width="0.5" height="2" fill="#8D6E63" fillOpacity="0.25" />
      <rect x="49" y="36.6" width="0.5" height="2" fill="#8D6E63" fillOpacity="0.25" />
      {/* Leaf micro-details */}
      <circle cx="25" cy="10" r="0.4" fill="#4CAF50" fillOpacity="0.2" />
      <circle cx="8" cy="22" r="0.3" fill="#388E3C" fillOpacity="0.15" />
      <circle cx="85" cy="16" r="0.35" fill="#66BB6A" fillOpacity="0.18" />
      {data.logo && <image href={data.logo} x="76" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text
        x="45.5"
        y="18"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#2E7D32"
        filter="url(#urban-park-shadow)"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="25"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#43A047"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#66BB6A"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#E8F5E9" />
      <defs>
        <filter id="urban-park-bgrain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="urban-park-bshadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fillOpacity="0.12" filter="url(#urban-park-bgrain)" fill="#C8E6C9" />
      {/* Subtle tree in corner */}
      <circle cx="82" cy="8" r="5" fill="#66BB6A" fillOpacity="0.12" />
      <circle cx="80" cy="6" r="3.5" fill="#81C784" fillOpacity="0.1" />
      <rect x="81" y="12" width="0.8" height="4" fill="#795548" fillOpacity="0.15" rx="0.2" />
      {/* Path hint */}
      <path d="M 0,50 Q 30,48 60,51 Q 80,53 91,50" stroke="#BDBDBD" strokeWidth="0.8" fill="none" strokeOpacity="0.12" />
      {data.logo && <image href={data.logo} x="76" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#2E7D32"
        filter="url(#urban-park-bshadow)"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#43A047"
      >
        {data.companyEn}
      </text>
      <text
        x="10"
        y="23"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#66BB6A"
      >
        {data.titleJa}
      </text>
      <path d="M 10,26 Q 30,25.5 50,26.5 Q 70,27 82,26" stroke="#43A047" strokeWidth="0.12" fill="none" strokeOpacity="0.35" />
      <text x="10" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#388E3C">
        {data.tel}
      </text>
      <text x="10" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#388E3C">
        {data.email}
      </text>
      <text x="10" y="39" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#388E3C">
        {data.website}
      </text>
      <text x="10" y="45.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#66BB6A">
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 10. STATION (駅) — Train station platform
// Platform edge, track lines, departure board aesthetic
// ============================================================
const stationTemplate: TemplateDefinition = {
  id: 'urban-station',
  name: 'STATION',
  nameJa: '駅',
  category: 'urban',
  designer: 'Urban Studio',
  description: '駅のホーム。出発と到着が交差する都市の結節点。',
  accentColor: '#FFC107',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1B1B2F" />
      <defs>
        <filter id="urban-station-grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="urban-station-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.35" />
          <feOffset dx="0.1" dy="0.2" />
          <feFlood floodColor="#000" floodOpacity="0.12" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="urban-station-board" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0D0D1A" />
          <stop offset="100%" stopColor="#141428" />
        </linearGradient>
        <linearGradient id="urban-station-platform" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFC107" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#FFD54F" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#FFC107" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fillOpacity="0.12" filter="url(#urban-station-grain)" fill="#252540" />
      {/* Platform edge line */}
      <rect x="0" y="38" width="91" height="0.6" fill="url(#urban-station-platform)" />
      {/* Warning stripes on platform edge */}
      {[0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84].map((x, i) => (
        <rect key={`urban-station-stripe-${i}`} x={x} y="38.6" width="3" height="2" fill="#FFC107" fillOpacity="0.12" />
      ))}
      {/* Track lines */}
      <line x1="0" y1="48" x2="91" y2="48" stroke="#555555" strokeWidth="0.35" />
      <line x1="0" y1="50" x2="91" y2="50" stroke="#555555" strokeWidth="0.35" />
      {/* Rail ties */}
      {[5, 15, 25, 35, 45, 55, 65, 75, 85].map((x, i) => (
        <rect key={`urban-station-tie-${i}`} x={x} y="47" width="4" height="4" fill="#2A2A2A" fillOpacity="0.4" rx="0.2" />
      ))}
      {/* Departure board */}
      <rect x="5" y="4" width="42" height="15" rx="1" fill="url(#urban-station-board)" stroke="#333333" strokeWidth="0.2" />
      {/* Board LED dots micro-detail */}
      <circle cx="8" cy="7" r="0.3" fill="#FFC107" fillOpacity="0.3" />
      <circle cx="8" cy="16" r="0.3" fill="#4CAF50" fillOpacity="0.2" />
      {data.logo && <image href={data.logo} x="76" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text
        x="26"
        y="12"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.3"
        fill="#FFC107"
        filter="url(#urban-station-shadow)"
      >
        {data.nameJa}
      </text>
      <text
        x="26"
        y="17"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        letterSpacing="0.2"
        fill="#E0E0E0"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="26"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#9E9E9E"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#757575"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1B1B2F" />
      <defs>
        <filter id="urban-station-bgrain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="urban-station-bshadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fillOpacity="0.1" filter="url(#urban-station-bgrain)" fill="#252540" />
      {/* Platform edge */}
      <rect x="0" y="46" width="91" height="0.4" fill="#FFC107" fillOpacity="0.4" />
      {/* Small departure indicator */}
      <rect x="72" y="4" width="14" height="8" rx="0.5" fill="#0D0D1A" stroke="#333333" strokeWidth="0.15" />
      <circle cx="79" cy="8" r="2" fill="#FFC107" fillOpacity="0.12" />
      {data.logo && <image href={data.logo} x="76" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#FFC107"
        filter="url(#urban-station-bshadow)"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#BDBDBD"
      >
        {data.companyEn}
      </text>
      <text
        x="10"
        y="23"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#9E9E9E"
      >
        {data.titleJa}
      </text>
      <line x1="10" y1="26" x2="55" y2="26" stroke="#FFC107" strokeWidth="0.1" strokeOpacity="0.25" />
      <text x="10" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#E0E0E0">
        {data.tel}
      </text>
      <text x="10" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#E0E0E0">
        {data.email}
      </text>
      <text x="10" y="39" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#E0E0E0">
        {data.website}
      </text>
      <text x="10" y="45" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#757575">
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

export const urbanTemplates: TemplateDefinition[] = [
  metroTemplate,
  skylineTemplate,
  alleyTemplate,
  signalTemplate,
  bridgeTemplate,
  gridUTemplate,
  towerTemplate,
  tunnelTemplate,
  parkTemplate,
  stationTemplate,
];
