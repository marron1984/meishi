import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. VOID-A (虚) — Negative space abstraction
// Empty forms defined by surrounding shapes, monochrome
// ============================================================
const voidATemplate: TemplateDefinition = {
  id: 'abstract-void-a',
  name: 'VOID-A',
  nameJa: '虚',
  category: 'abstract',
  designer: 'Abstract Studio',
  description: '虚無の形。周囲によって定義される不在。',
  accentColor: '#1A1A1A',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="abstract-void-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F5F5F5" />
          <stop offset="50%" stopColor="#ECECEC" />
          <stop offset="100%" stopColor="#E0E0E0" />
        </linearGradient>
        <filter id="abstract-void-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="abstract-void-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="abstract-void-displace">
          <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" result="warp" />
          <feDisplacementMap in="SourceGraphic" in2="warp" scale="1.5" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <clipPath id="abstract-void-clip">
          <rect width="91" height="55" />
        </clipPath>
      </defs>
      <rect width="91" height="55" fill="url(#abstract-void-bg)" />
      <rect width="91" height="55" filter="url(#abstract-void-grain)" opacity="0.08" fill="#999" />
      <g clipPath="url(#abstract-void-clip)" filter="url(#abstract-void-displace)">
        <rect x="0" y="0" width="25" height="18" fill="#1A1A1A" opacity="0.08" />
        <rect x="66" y="0" width="25" height="22" fill="#1A1A1A" opacity="0.06" />
        <rect x="0" y="37" width="30" height="18" fill="#1A1A1A" opacity="0.05" />
        <rect x="61" y="33" width="30" height="22" fill="#1A1A1A" opacity="0.07" />
        <polygon points="25,0 40,0 25,18" fill="#2A2A2A" opacity="0.04" />
        <polygon points="61,55 91,33 91,55" fill="#2A2A2A" opacity="0.03" />
      </g>
      {/* Thin geometric accent lines */}
      <line x1="25" y1="0" x2="25" y2="18" stroke="#1A1A1A" strokeWidth="0.1" opacity="0.12" />
      <line x1="61" y1="33" x2="61" y2="55" stroke="#1A1A1A" strokeWidth="0.1" opacity="0.12" />
      <circle cx="25" cy="18" r="0.4" fill="#1A1A1A" opacity="0.15" />
      <circle cx="61" cy="33" r="0.4" fill="#1A1A1A" opacity="0.15" />
      <text x="45.5" y="25" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="6" letterSpacing="1.5" fill="#1A1A1A" filter="url(#abstract-void-shadow)">{data.nameJa}</text>
      <text x="45.5" y="32" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2" letterSpacing="1" fill="#555555">{data.nameEn.toUpperCase()}</text>
      <text x="45.5" y="39" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#888888">{data.titleJa}</text>
      {data.logo && <image href={data.logo} x="78" y="43" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="abstract-void-bg-b" x1="1" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#F5F5F5" />
          <stop offset="50%" stopColor="#ECECEC" />
          <stop offset="100%" stopColor="#E0E0E0" />
        </linearGradient>
        <filter id="abstract-void-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="abstract-void-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#abstract-void-bg-b)" />
      <rect width="91" height="55" filter="url(#abstract-void-grain-b)" opacity="0.08" fill="#999" />
      <rect x="0" y="0" width="20" height="55" fill="#1A1A1A" opacity="0.04" />
      <rect x="71" y="0" width="20" height="55" fill="#1A1A1A" opacity="0.04" />
      <line x1="20" y1="0" x2="20" y2="55" stroke="#1A1A1A" strokeWidth="0.1" opacity="0.08" />
      <line x1="71" y1="0" x2="71" y2="55" stroke="#1A1A1A" strokeWidth="0.1" opacity="0.08" />
      {data.logo && <image href={data.logo} x="41.5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text x="45.5" y="16" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#1A1A1A" filter="url(#abstract-void-shadow-b)">{data.companyJa}</text>
      <text x="45.5" y="20" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" letterSpacing="0.5" fill="#555555">{data.companyEn.toUpperCase()}</text>
      <line x1="30" y1="23" x2="61" y2="23" stroke="#CCCCCC" strokeWidth="0.15" />
      <text x="45.5" y="28" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#888888">{data.titleJa}</text>
      <text x="45.5" y="33" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#666666">{data.tel}</text>
      <text x="45.5" y="37" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#666666">{data.email}</text>
      <text x="45.5" y="41" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#666666">{data.website}</text>
      <line x1="30" y1="43.5" x2="61" y2="43.5" stroke="#CCCCCC" strokeWidth="0.15" />
      <text x="45.5" y="48" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#AAAAAA">〒{data.zipCode}</text>
      <text x="45.5" y="51" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#AAAAAA">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 2. FLOW (流) — Fluid organic curves
// Smooth flowing lines suggesting water or wind
// ============================================================
const flowTemplate: TemplateDefinition = {
  id: 'abstract-flow',
  name: 'FLOW',
  nameJa: '流',
  category: 'abstract',
  designer: 'Abstract Studio',
  description: '流れる曲線。水や風のような有機的な動き。',
  accentColor: '#1565C0',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="abstract-flow-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F0F4F8" />
          <stop offset="40%" stopColor="#E3EBF3" />
          <stop offset="100%" stopColor="#D6E4F0" />
        </linearGradient>
        <filter id="abstract-flow-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="abstract-flow-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.1" dy="0.12" />
          <feFlood floodColor="#0D47A1" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="abstract-flow-warp">
          <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="2" result="warp" />
          <feDisplacementMap in="SourceGraphic" in2="warp" scale="2" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <linearGradient id="abstract-flow-stroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1565C0" stopOpacity="0" />
          <stop offset="30%" stopColor="#1565C0" stopOpacity="0.3" />
          <stop offset="70%" stopColor="#42A5F5" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#1565C0" stopOpacity="0" />
        </linearGradient>
        <clipPath id="abstract-flow-clip">
          <rect width="91" height="55" />
        </clipPath>
      </defs>
      <rect width="91" height="55" fill="url(#abstract-flow-bg)" />
      <rect width="91" height="55" filter="url(#abstract-flow-grain)" opacity="0.06" fill="#8899AA" />
      <g clipPath="url(#abstract-flow-clip)" filter="url(#abstract-flow-warp)">
        <path d="M-10,35 Q10,15 30,25 Q50,35 70,20 Q90,5 110,25" fill="none" stroke="url(#abstract-flow-stroke)" strokeWidth="0.5" />
        <path d="M-10,40 Q10,20 30,30 Q50,40 70,25 Q90,10 110,30" fill="none" stroke="#1565C0" strokeWidth="0.3" opacity="0.12" />
        <path d="M-10,45 Q10,25 30,35 Q50,45 70,30 Q90,15 110,35" fill="none" stroke="#42A5F5" strokeWidth="0.25" opacity="0.09" />
        <path d="M-10,50 Q10,30 30,40 Q50,50 70,35 Q90,20 110,40" fill="none" stroke="#1565C0" strokeWidth="0.2" opacity="0.06" />
      </g>
      {/* Micro-detail: floating dots */}
      <circle cx="72" cy="12" r="0.3" fill="#1565C0" opacity="0.15" />
      <circle cx="76" cy="16" r="0.2" fill="#42A5F5" opacity="0.12" />
      <circle cx="68" cy="18" r="0.25" fill="#1565C0" opacity="0.1" />
      <text x="10" y="18" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="6" letterSpacing="0.5" fill="#1A2A3A" filter="url(#abstract-flow-shadow)">{data.nameJa}</text>
      <text x="10" y="25" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.5" fill="#1565C0">{data.nameEn}</text>
      <text x="10" y="33" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#5A7A9A">{data.titleJa}</text>
      {data.logo && <image href={data.logo} x="78" y="43" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="abstract-flow-bg-b" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F0F4F8" />
          <stop offset="100%" stopColor="#D6E4F0" />
        </linearGradient>
        <filter id="abstract-flow-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="abstract-flow-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.1" dy="0.12" />
          <feFlood floodColor="#0D47A1" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <clipPath id="abstract-flow-clip-b">
          <rect width="91" height="55" />
        </clipPath>
      </defs>
      <rect width="91" height="55" fill="url(#abstract-flow-bg-b)" />
      <rect width="91" height="55" filter="url(#abstract-flow-grain-b)" opacity="0.06" fill="#8899AA" />
      <g clipPath="url(#abstract-flow-clip-b)">
        <path d="M-10,10 Q10,30 30,20 Q50,10 70,25 Q90,40 110,20" fill="none" stroke="#1565C0" strokeWidth="0.3" opacity="0.1" />
        <path d="M-10,15 Q10,35 30,25 Q50,15 70,30 Q90,45 110,25" fill="none" stroke="#42A5F5" strokeWidth="0.25" opacity="0.07" />
      </g>
      {data.logo && <image href={data.logo} x="5" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text x="81" y="13" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#1A2A3A" filter="url(#abstract-flow-shadow-b)">{data.companyJa}</text>
      <text x="81" y="17.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#1565C0">{data.companyEn}</text>
      <text x="81" y="22" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#5A7A9A">{data.titleJa}</text>
      <line x1="30" y1="24.5" x2="81" y2="24.5" stroke="#1565C0" strokeWidth="0.1" opacity="0.3" />
      <text x="81" y="29" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#5A7A9A">{data.tel}</text>
      <text x="81" y="33" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#5A7A9A">{data.email}</text>
      <text x="81" y="37" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#5A7A9A">{data.website}</text>
      <line x1="30" y1="39.5" x2="81" y2="39.5" stroke="#1565C0" strokeWidth="0.1" opacity="0.3" />
      <text x="81" y="44" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#8AAABB">〒{data.zipCode}</text>
      <text x="81" y="47.5" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#8AAABB">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 3. FRAGMENT (片) — Broken geometric shards
// Scattered triangular fragments with multi-color palette
// ============================================================
const fragmentTemplate: TemplateDefinition = {
  id: 'abstract-fragment',
  name: 'FRAGMENT',
  nameJa: '片',
  category: 'abstract',
  designer: 'Abstract Studio',
  description: '砕けた破片。多彩な三角形が散乱する。',
  accentColor: '#E53935',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="abstract-fragment-bg" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#FAFAFA" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <filter id="abstract-fragment-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="abstract-fragment-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.15" dy="0.2" />
          <feFlood floodColor="#C62828" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="abstract-fragment-colorshift">
          <feColorMatrix type="matrix" values="1.05 0 0 0 0  0 0.95 0 0 0  0 0 0.9 0 0  0 0 0 1 0" />
        </filter>
        <clipPath id="abstract-fragment-clip">
          <rect width="91" height="55" />
        </clipPath>
      </defs>
      <rect width="91" height="55" fill="url(#abstract-fragment-bg)" />
      <rect width="91" height="55" filter="url(#abstract-fragment-grain)" opacity="0.07" fill="#AAA" />
      <g clipPath="url(#abstract-fragment-clip)" filter="url(#abstract-fragment-colorshift)">
        <polygon points="70,5 80,8 74,15" fill="#E53935" opacity="0.15" />
        <polygon points="75,12 85,10 82,20" fill="#1565C0" opacity="0.12" />
        <polygon points="65,2 72,0 68,8" fill="#FFC107" opacity="0.1" />
        <polygon points="78,18 88,22 82,28" fill="#4CAF50" opacity="0.08" />
        <polygon points="60,40 68,38 64,46" fill="#E53935" opacity="0.06" />
        <polygon points="72,42 82,44 76,50" fill="#9C27B0" opacity="0.08" />
        <polygon points="80,35 88,32 86,40" fill="#1565C0" opacity="0.05" />
        <polygon points="5,45 12,42 8,50" fill="#FFC107" opacity="0.07" />
      </g>
      {/* Micro detail: shard edge accents */}
      <line x1="70" y1="5" x2="80" y2="8" stroke="#E53935" strokeWidth="0.15" opacity="0.2" />
      <line x1="75" y1="12" x2="85" y2="10" stroke="#1565C0" strokeWidth="0.1" opacity="0.15" />
      <circle cx="74" cy="15" r="0.3" fill="#E53935" opacity="0.2" />
      <text x="10" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6" letterSpacing="0.5" fill="#2A2A2A" filter="url(#abstract-fragment-shadow)">{data.nameJa}</text>
      <text x="10" y="27" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.5" fill="#E53935">{data.nameEn.toUpperCase()}</text>
      <text x="10" y="35" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#777777">{data.titleJa}</text>
      <text x="10" y="42" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#999999">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="78" y="43" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="abstract-fragment-bg-b" x1="0.5" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#FAFAFA" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <filter id="abstract-fragment-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="abstract-fragment-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#C62828" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#abstract-fragment-bg-b)" />
      <rect width="91" height="55" filter="url(#abstract-fragment-grain-b)" opacity="0.07" fill="#AAA" />
      <polygon points="5,5 15,3 10,12" fill="#E53935" opacity="0.1" />
      <polygon points="10,10 20,8 16,18" fill="#1565C0" opacity="0.08" />
      <polygon points="0,12 8,15 3,20" fill="#FFC107" opacity="0.06" />
      <polygon points="78,48 86,45 84,53" fill="#4CAF50" opacity="0.07" />
      {data.logo && <image href={data.logo} x="41.5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text x="45.5" y="16" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#2A2A2A" filter="url(#abstract-fragment-shadow-b)">{data.companyJa}</text>
      <text x="45.5" y="20" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#E53935">{data.companyEn.toUpperCase()}</text>
      <text x="45.5" y="24" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#777777">{data.titleJa}</text>
      <line x1="20" y1="26.5" x2="71" y2="26.5" stroke="#E0E0E0" strokeWidth="0.15" />
      <text x="45.5" y="31" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#666666">{data.tel}</text>
      <text x="45.5" y="35" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#666666">{data.email}</text>
      <text x="45.5" y="39" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#666666">{data.website}</text>
      <line x1="20" y1="41.5" x2="71" y2="41.5" stroke="#E0E0E0" strokeWidth="0.15" />
      <text x="45.5" y="46" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#AAAAAA">〒{data.zipCode}</text>
      <text x="45.5" y="49.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#AAAAAA">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 4. NOISE (雑) — Static/noise texture overlay
// Dense dot pattern creating visual noise, dark aesthetic
// ============================================================
const noiseTemplate: TemplateDefinition = {
  id: 'abstract-noise',
  name: 'NOISE',
  nameJa: '雑',
  category: 'abstract',
  designer: 'Abstract Studio',
  description: '雑音のテクスチャ。デジタルノイズの中に浮かぶ情報。',
  accentColor: '#00E676',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="abstract-noise-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0D0D0D" />
          <stop offset="50%" stopColor="#0A0A0A" />
          <stop offset="100%" stopColor="#050505" />
        </linearGradient>
        <filter id="abstract-noise-grain">
          <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="5" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="screen" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="abstract-noise-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.4" />
          <feOffset dx="0" dy="0.2" />
          <feFlood floodColor="#00E676" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="abstract-noise-scanline">
          <feTurbulence type="fractalNoise" baseFrequency="0.01 0.8" numOctaves="1" result="scan" />
          <feColorMatrix type="luminanceToAlpha" in="scan" result="alpha" />
          <feComponentTransfer in="alpha" result="mask"><feFuncA type="discrete" tableValues="0 0.03" /></feComponentTransfer>
          <feFlood floodColor="#00E676" result="color" />
          <feComposite in="color" in2="mask" operator="in" />
          <feMerge><feMergeNode in="SourceGraphic" /><feMergeNode /></feMerge>
        </filter>
        <pattern id="abstract-noise-dots" width="1.5" height="1.5" patternUnits="userSpaceOnUse">
          <circle cx="0.75" cy="0.75" r="0.15" fill="#333333" />
        </pattern>
        <pattern id="abstract-noise-dots2" width="2.3" height="2.3" patternUnits="userSpaceOnUse">
          <circle cx="1.15" cy="1.15" r="0.12" fill="#222222" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#abstract-noise-bg)" />
      <rect width="91" height="55" fill="url(#abstract-noise-dots)" />
      <rect width="91" height="55" fill="url(#abstract-noise-dots2)" opacity="0.5" />
      <rect width="91" height="55" filter="url(#abstract-noise-grain)" opacity="0.06" fill="#222" />
      {/* Glitch-like horizontal lines */}
      <rect x="0" y="18" width="45" height="0.3" fill="#00E676" opacity="0.3" />
      <rect x="50" y="25" width="30" height="0.2" fill="#00E676" opacity="0.2" />
      <rect x="60" y="42" width="20" height="0.15" fill="#00E676" opacity="0.15" />
      {/* Data corruption micro-detail */}
      <rect x="82" y="5" width="4" height="0.5" fill="#00E676" opacity="0.08" />
      <rect x="80" y="7" width="6" height="0.3" fill="#00E676" opacity="0.06" />
      <text x="10" y="24" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="6" letterSpacing="0.5" fill="#FFFFFF" filter="url(#abstract-noise-shadow)">{data.nameJa}</text>
      <text x="10" y="31" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="2" letterSpacing="1" fill="#00E676">{data.nameEn.toUpperCase()}</text>
      <text x="10" y="40" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#555555">{data.titleJa}</text>
      <text x="10" y="46" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#444444">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="78" y="43" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="abstract-noise-bg-b" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#0D0D0D" />
          <stop offset="100%" stopColor="#050505" />
        </linearGradient>
        <filter id="abstract-noise-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="5" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="screen" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="abstract-noise-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0" dy="0.15" />
          <feFlood floodColor="#00E676" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <pattern id="abstract-noise-dots-b" width="1.5" height="1.5" patternUnits="userSpaceOnUse">
          <circle cx="0.75" cy="0.75" r="0.15" fill="#333333" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#abstract-noise-bg-b)" />
      <rect width="91" height="55" fill="url(#abstract-noise-dots-b)" />
      <rect width="91" height="55" filter="url(#abstract-noise-grain-b)" opacity="0.06" fill="#222" />
      <rect x="0" y="20" width="35" height="0.2" fill="#00E676" opacity="0.2" />
      <rect x="55" y="44" width="25" height="0.15" fill="#00E676" opacity="0.12" />
      {data.logo && <image href={data.logo} x="5" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
      <text x="10" y="13" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="2.5" fill="#FFFFFF" filter="url(#abstract-noise-shadow-b)">{data.companyJa}</text>
      <text x="10" y="17.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" letterSpacing="0.5" fill="#00E676">{data.companyEn.toUpperCase()}</text>
      <text x="10" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#555555">{data.titleJa}</text>
      <line x1="10" y1="24.5" x2="81" y2="24.5" stroke="#333333" strokeWidth="0.15" />
      <text x="10" y="29" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#888888">{data.tel}</text>
      <text x="10" y="33" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#888888">{data.email}</text>
      <text x="10" y="37" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#888888">{data.website}</text>
      <line x1="10" y1="39.5" x2="81" y2="39.5" stroke="#333333" strokeWidth="0.15" />
      <text x="10" y="44" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#555555">〒{data.zipCode}</text>
      <text x="10" y="47.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#555555">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 5. MORPH (変) — Morphing blob shapes
// Organic blobs with smooth edges, pastel palette
// ============================================================
const morphTemplate: TemplateDefinition = {
  id: 'abstract-morph',
  name: 'MORPH',
  nameJa: '変',
  category: 'abstract',
  designer: 'Abstract Studio',
  description: '変態する形。アメーバのように動き続ける有機体。',
  accentColor: '#FF6F61',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="abstract-morph-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFBF5" />
          <stop offset="50%" stopColor="#FFF5EC" />
          <stop offset="100%" stopColor="#FFF0E3" />
        </linearGradient>
        <filter id="abstract-morph-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="abstract-morph-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#FF6F61" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="abstract-morph-blur">
          <feGaussianBlur stdDeviation="1.5" />
        </filter>
        <radialGradient id="abstract-morph-blob1" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#FF6F61" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FF6F61" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="abstract-morph-blob2" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#6C63FF" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#6C63FF" stopOpacity="0" />
        </radialGradient>
        <clipPath id="abstract-morph-clip">
          <rect width="91" height="55" />
        </clipPath>
      </defs>
      <rect width="91" height="55" fill="url(#abstract-morph-bg)" />
      <rect width="91" height="55" filter="url(#abstract-morph-grain)" opacity="0.06" fill="#CC9988" />
      <g clipPath="url(#abstract-morph-clip)" filter="url(#abstract-morph-blur)">
        <path d="M65,10 Q75,5 82,12 Q88,20 80,28 Q72,32 65,25 Q58,18 65,10Z" fill="url(#abstract-morph-blob1)" />
        <path d="M70,30 Q80,25 86,35 Q90,45 78,48 Q68,50 64,42 Q60,34 70,30Z" fill="url(#abstract-morph-blob2)" />
        <path d="M5,35 Q15,28 22,35 Q28,42 20,48 Q12,52 5,45 Q0,40 5,35Z" fill="#00BFA5" opacity="0.06" />
      </g>
      {/* Tiny accent dots */}
      <circle cx="73" cy="18" r="0.4" fill="#FF6F61" opacity="0.15" />
      <circle cx="78" cy="40" r="0.3" fill="#6C63FF" opacity="0.12" />
      <circle cx="15" cy="42" r="0.35" fill="#00BFA5" opacity="0.1" />
      <text x="12" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="6" letterSpacing="0.5" fill="#333333" filter="url(#abstract-morph-shadow)">{data.nameJa}</text>
      <text x="12" y="27" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.5" fill="#FF6F61">{data.nameEn}</text>
      <text x="12" y="35" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#888888">{data.titleJa}</text>
      {data.logo && <image href={data.logo} x="78" y="43" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="abstract-morph-bg-b" x1="1" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#FFFBF5" />
          <stop offset="100%" stopColor="#FFF0E3" />
        </linearGradient>
        <filter id="abstract-morph-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="abstract-morph-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.1" dy="0.12" />
          <feFlood floodColor="#FF6F61" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="abstract-morph-blur-b">
          <feGaussianBlur stdDeviation="1.5" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#abstract-morph-bg-b)" />
      <rect width="91" height="55" filter="url(#abstract-morph-grain-b)" opacity="0.06" fill="#CC9988" />
      <g filter="url(#abstract-morph-blur-b)">
        <path d="M5,5 Q15,0 22,8 Q28,16 18,20 Q10,22 5,15 Q0,10 5,5Z" fill="#FF6F61" opacity="0.08" />
        <path d="M72,40 Q82,35 88,44 Q92,52 80,54 Q70,55 66,48 Q62,40 72,40Z" fill="#6C63FF" opacity="0.06" />
      </g>
      {data.logo && <image href={data.logo} x="41.5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text x="45.5" y="16" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#333333" filter="url(#abstract-morph-shadow-b)">{data.companyJa}</text>
      <text x="45.5" y="20" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#FF6F61">{data.companyEn}</text>
      <text x="45.5" y="24" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#888888">{data.titleJa}</text>
      <line x1="25" y1="26.5" x2="66" y2="26.5" stroke="#EEEEEE" strokeWidth="0.15" />
      <text x="45.5" y="31" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#777777">{data.tel}</text>
      <text x="45.5" y="35" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#777777">{data.email}</text>
      <text x="45.5" y="39" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#777777">{data.website}</text>
      <line x1="25" y1="41.5" x2="66" y2="41.5" stroke="#EEEEEE" strokeWidth="0.15" />
      <text x="45.5" y="46" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#BBBBBB">〒{data.zipCode}</text>
      <text x="45.5" y="49.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#BBBBBB">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 6. DRIFT (漂) — Drifting parallel lines
// Horizontal lines that drift and bend organically
// ============================================================
const driftTemplate: TemplateDefinition = {
  id: 'abstract-drift',
  name: 'DRIFT',
  nameJa: '漂',
  category: 'abstract',
  designer: 'Abstract Studio',
  description: '漂流する線。平行線が有機的に揺れ動く。',
  accentColor: '#795548',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="abstract-drift-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FAF8F5" />
          <stop offset="50%" stopColor="#F5F0EA" />
          <stop offset="100%" stopColor="#EDE5DA" />
        </linearGradient>
        <filter id="abstract-drift-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="abstract-drift-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.1" dy="0.12" />
          <feFlood floodColor="#3E2723" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="abstract-drift-warp">
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" result="warp" />
          <feDisplacementMap in="SourceGraphic" in2="warp" scale="1" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#abstract-drift-bg)" />
      <rect width="91" height="55" filter="url(#abstract-drift-grain)" opacity="0.08" fill="#AA9988" />
      <g filter="url(#abstract-drift-warp)">
        <path d="M0,8 Q20,6 45.5,8 Q70,10 91,8" fill="none" stroke="#795548" strokeWidth="0.15" opacity="0.2" />
        <path d="M0,12 Q25,10 45.5,12 Q65,14 91,11" fill="none" stroke="#795548" strokeWidth="0.15" opacity="0.18" />
        <path d="M0,16 Q30,14.5 45.5,16 Q60,17.5 91,15" fill="none" stroke="#795548" strokeWidth="0.15" opacity="0.16" />
        <path d="M0,39 Q22,41 45.5,39 Q68,37 91,40" fill="none" stroke="#795548" strokeWidth="0.15" opacity="0.14" />
        <path d="M0,43 Q20,45 45.5,43 Q70,41 91,44" fill="none" stroke="#795548" strokeWidth="0.15" opacity="0.12" />
        <path d="M0,47 Q25,49 45.5,47 Q65,45 91,48" fill="none" stroke="#795548" strokeWidth="0.15" opacity="0.1" />
        <path d="M0,51 Q30,52.5 45.5,51 Q60,49.5 91,52" fill="none" stroke="#795548" strokeWidth="0.15" opacity="0.08" />
      </g>
      {/* Micro detail: small brown dots */}
      <circle cx="80" cy="10" r="0.25" fill="#795548" opacity="0.15" />
      <circle cx="84" cy="14" r="0.2" fill="#8D6E63" opacity="0.12" />
      <circle cx="5" cy="44" r="0.3" fill="#795548" opacity="0.1" />
      <text x="10" y="26" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="5.5" letterSpacing="0.5" fill="#3E2723" filter="url(#abstract-drift-shadow)">{data.nameJa}</text>
      <text x="10" y="33" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.5" fill="#795548">{data.nameEn}</text>
      {data.logo && <image href={data.logo} x="78" y="43" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="abstract-drift-bg-b" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#FAF8F5" />
          <stop offset="100%" stopColor="#EDE5DA" />
        </linearGradient>
        <filter id="abstract-drift-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="abstract-drift-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.1" dy="0.12" />
          <feFlood floodColor="#3E2723" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#abstract-drift-bg-b)" />
      <rect width="91" height="55" filter="url(#abstract-drift-grain-b)" opacity="0.08" fill="#AA9988" />
      <path d="M0,4 Q20,6 45.5,4 Q70,2 91,5" fill="none" stroke="#795548" strokeWidth="0.15" opacity="0.12" />
      <path d="M0,8 Q25,10 45.5,8 Q65,6 91,9" fill="none" stroke="#795548" strokeWidth="0.15" opacity="0.1" />
      <path d="M0,47 Q22,45 45.5,47 Q68,49 91,46" fill="none" stroke="#795548" strokeWidth="0.15" opacity="0.12" />
      <path d="M0,51 Q20,49 45.5,51 Q70,53 91,50" fill="none" stroke="#795548" strokeWidth="0.15" opacity="0.1" />
      {data.logo && <image href={data.logo} x="5" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text x="10" y="18" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#3E2723" filter="url(#abstract-drift-shadow-b)">{data.companyJa}</text>
      <text x="10" y="22.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#795548">{data.companyEn}</text>
      <text x="10" y="27" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#8D6E63">{data.titleJa}</text>
      <line x1="10" y1="29.5" x2="81" y2="29.5" stroke="#D7CCC8" strokeWidth="0.15" />
      <text x="10" y="34" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#8D6E63">{data.tel}</text>
      <text x="10" y="38" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#8D6E63">{data.email}</text>
      <text x="10" y="42" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#8D6E63">{data.website}</text>
      <line x1="10" y1="44.5" x2="81" y2="44.5" stroke="#D7CCC8" strokeWidth="0.15" />
      <text x="10" y="49" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#BCAAA4">〒{data.zipCode}</text>
      <text x="10" y="52" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#BCAAA4">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 7. SPLIT (裂) — Torn/split composition
// Card appears split diagonally with contrasting halves
// ============================================================
const splitTemplate: TemplateDefinition = {
  id: 'abstract-split',
  name: 'SPLIT',
  nameJa: '裂',
  category: 'abstract',
  designer: 'Abstract Studio',
  description: '裂ける面。対角線で分断された二つの世界。',
  accentColor: '#FF5722',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="abstract-split-dark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1A1A1A" />
          <stop offset="100%" stopColor="#2A2A2A" />
        </linearGradient>
        <linearGradient id="abstract-split-light" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F5F5F5" />
          <stop offset="100%" stopColor="#FAFAFA" />
        </linearGradient>
        <filter id="abstract-split-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="abstract-split-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#FF5722" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <clipPath id="abstract-split-top">
          <polygon points="0,0 91,0 91,35 0,55" />
        </clipPath>
        <clipPath id="abstract-split-bottom">
          <polygon points="0,55 91,35 91,55" />
        </clipPath>
      </defs>
      <rect width="91" height="55" fill="url(#abstract-split-dark)" clipPath="url(#abstract-split-top)" />
      <rect width="91" height="55" fill="url(#abstract-split-light)" clipPath="url(#abstract-split-bottom)" />
      <rect width="91" height="55" filter="url(#abstract-split-grain)" opacity="0.08" fill="#888" />
      {/* Split line with glow */}
      <line x1="0" y1="55" x2="91" y2="35" stroke="#FF5722" strokeWidth="0.4" />
      <line x1="0" y1="55" x2="91" y2="35" stroke="#FF5722" strokeWidth="1.5" opacity="0.08" />
      {/* Micro details along split line */}
      <circle cx="30" cy="48" r="0.3" fill="#FF5722" opacity="0.3" />
      <circle cx="60" cy="41" r="0.25" fill="#FF5722" opacity="0.25" />
      <text x="10" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="6" letterSpacing="0.5" fill="#FFFFFF" filter="url(#abstract-split-shadow)">{data.nameJa}</text>
      <text x="10" y="27" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="2" letterSpacing="0.8" fill="#FF5722">{data.nameEn.toUpperCase()}</text>
      <text x="10" y="35" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#888888">{data.titleJa}</text>
      {data.logo && <image href={data.logo} x="78" y="43" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="abstract-split-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="abstract-split-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#FF5722" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <clipPath id="abstract-split-top-b">
          <polygon points="0,0 91,0 91,20 0,40" />
        </clipPath>
        <clipPath id="abstract-split-bottom-b">
          <polygon points="0,40 91,20 91,55 0,55" />
        </clipPath>
      </defs>
      <rect width="91" height="55" fill="#FAFAFA" clipPath="url(#abstract-split-top-b)" />
      <rect width="91" height="55" fill="#1A1A1A" clipPath="url(#abstract-split-bottom-b)" />
      <rect width="91" height="55" filter="url(#abstract-split-grain-b)" opacity="0.08" fill="#888" />
      <line x1="0" y1="40" x2="91" y2="20" stroke="#FF5722" strokeWidth="0.4" />
      <line x1="0" y1="40" x2="91" y2="20" stroke="#FF5722" strokeWidth="1.5" opacity="0.08" />
      {data.logo && <image href={data.logo} x="5" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text x="10" y="16" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#1A1A1A" filter="url(#abstract-split-shadow-b)">{data.companyJa}</text>
      <text x="10" y="20.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#FF5722">{data.companyEn.toUpperCase()}</text>
      <text x="81" y="28" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#CCCCCC">{data.titleJa}</text>
      <text x="81" y="33" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#CCCCCC">{data.tel}</text>
      <text x="81" y="37" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#CCCCCC">{data.email}</text>
      <text x="81" y="41" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#CCCCCC">{data.website}</text>
      <line x1="35" y1="43.5" x2="81" y2="43.5" stroke="#444444" strokeWidth="0.15" />
      <text x="81" y="48" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#666666">〒{data.zipCode}</text>
      <text x="81" y="51.5" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#666666">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 8. LAYER (層) — Stacked translucent layers
// Overlapping semi-transparent rectangles creating depth
// ============================================================
const layerTemplate: TemplateDefinition = {
  id: 'abstract-layer',
  name: 'LAYER',
  nameJa: '層',
  category: 'abstract',
  designer: 'Abstract Studio',
  description: '積層する面。半透明の層が深みを生む。',
  accentColor: '#3F51B5',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="abstract-layer-bg" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#F5F5FA" />
          <stop offset="50%" stopColor="#EDEDF5" />
          <stop offset="100%" stopColor="#E5E5F0" />
        </linearGradient>
        <filter id="abstract-layer-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="abstract-layer-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#1A237E" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="abstract-layer-depth">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.5" />
          <feOffset dx="0.3" dy="0.4" />
          <feFlood floodColor="#3F51B5" floodOpacity="0.05" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#abstract-layer-bg)" />
      <rect width="91" height="55" filter="url(#abstract-layer-grain)" opacity="0.06" fill="#8888AA" />
      {/* Stacked translucent layers with depth effect */}
      <g filter="url(#abstract-layer-depth)">
        <rect x="50" y="3" width="38" height="30" fill="#3F51B5" opacity="0.06" rx="1" />
        <rect x="55" y="8" width="34" height="30" fill="#3F51B5" opacity="0.08" rx="1" />
        <rect x="60" y="13" width="30" height="30" fill="#3F51B5" opacity="0.1" rx="1" />
        <rect x="65" y="18" width="26" height="30" fill="#3F51B5" opacity="0.06" rx="1" />
      </g>
      <g filter="url(#abstract-layer-depth)">
        <rect x="3" y="35" width="30" height="18" fill="#E91E63" opacity="0.04" rx="1" />
        <rect x="8" y="38" width="25" height="15" fill="#E91E63" opacity="0.06" rx="1" />
      </g>
      {/* Layer edge highlights */}
      <line x1="50" y1="3" x2="88" y2="3" stroke="#3F51B5" strokeWidth="0.1" opacity="0.15" />
      <line x1="3" y1="35" x2="33" y2="35" stroke="#E91E63" strokeWidth="0.1" opacity="0.1" />
      <text x="10" y="18" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="6" letterSpacing="0.5" fill="#1A237E" filter="url(#abstract-layer-shadow)">{data.nameJa}</text>
      <text x="10" y="25" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.5" fill="#3F51B5">{data.nameEn}</text>
      <text x="10" y="33" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#7986CB">{data.titleJa}</text>
      {data.logo && <image href={data.logo} x="78" y="43" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="abstract-layer-bg-b" x1="0.5" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#F5F5FA" />
          <stop offset="100%" stopColor="#E5E5F0" />
        </linearGradient>
        <filter id="abstract-layer-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="abstract-layer-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#1A237E" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#abstract-layer-bg-b)" />
      <rect width="91" height="55" filter="url(#abstract-layer-grain-b)" opacity="0.06" fill="#8888AA" />
      <rect x="3" y="3" width="32" height="25" fill="#3F51B5" opacity="0.05" rx="1" />
      <rect x="8" y="8" width="28" height="22" fill="#3F51B5" opacity="0.07" rx="1" />
      <rect x="56" y="30" width="33" height="23" fill="#E91E63" opacity="0.03" rx="1" />
      <rect x="60" y="34" width="29" height="19" fill="#E91E63" opacity="0.05" rx="1" />
      {data.logo && <image href={data.logo} x="41.5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text x="45.5" y="16" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#1A237E" filter="url(#abstract-layer-shadow-b)">{data.companyJa}</text>
      <text x="45.5" y="20" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#3F51B5">{data.companyEn}</text>
      <text x="45.5" y="24" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#7986CB">{data.titleJa}</text>
      <line x1="20" y1="26.5" x2="71" y2="26.5" stroke="#C5CAE9" strokeWidth="0.15" />
      <text x="45.5" y="31" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#5C6BC0">{data.tel}</text>
      <text x="45.5" y="35" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#5C6BC0">{data.email}</text>
      <text x="45.5" y="39" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#5C6BC0">{data.website}</text>
      <line x1="20" y1="41.5" x2="71" y2="41.5" stroke="#C5CAE9" strokeWidth="0.15" />
      <text x="45.5" y="46" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#9FA8DA">〒{data.zipCode}</text>
      <text x="45.5" y="49.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#9FA8DA">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 9. ECHO (響) — Repeating concentric forms
// Concentric circles/rings that echo outward from a point
// ============================================================
const echoTemplate: TemplateDefinition = {
  id: 'abstract-echo',
  name: 'ECHO',
  nameJa: '響',
  category: 'abstract',
  designer: 'Abstract Studio',
  description: '響きの波紋。一点から広がる同心円の反復。',
  accentColor: '#009688',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="abstract-echo-bg" cx="80%" cy="85%" r="80%">
          <stop offset="0%" stopColor="#E0F2F1" />
          <stop offset="50%" stopColor="#E8F5F3" />
          <stop offset="100%" stopColor="#F0FAF8" />
        </radialGradient>
        <filter id="abstract-echo-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="abstract-echo-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.1" dy="0.12" />
          <feFlood floodColor="#004D40" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="abstract-echo-ripple">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" result="warp" />
          <feDisplacementMap in="SourceGraphic" in2="warp" scale="0.8" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <clipPath id="abstract-echo-clip">
          <rect width="91" height="55" />
        </clipPath>
      </defs>
      <rect width="91" height="55" fill="url(#abstract-echo-bg)" />
      <rect width="91" height="55" filter="url(#abstract-echo-grain)" opacity="0.06" fill="#88AAAA" />
      <g clipPath="url(#abstract-echo-clip)" filter="url(#abstract-echo-ripple)">
        <circle cx="80" cy="48" r="8" fill="none" stroke="#009688" strokeWidth="0.2" opacity="0.2" />
        <circle cx="80" cy="48" r="14" fill="none" stroke="#009688" strokeWidth="0.18" opacity="0.17" />
        <circle cx="80" cy="48" r="20" fill="none" stroke="#009688" strokeWidth="0.16" opacity="0.14" />
        <circle cx="80" cy="48" r="26" fill="none" stroke="#009688" strokeWidth="0.14" opacity="0.11" />
        <circle cx="80" cy="48" r="32" fill="none" stroke="#009688" strokeWidth="0.12" opacity="0.08" />
        <circle cx="80" cy="48" r="38" fill="none" stroke="#009688" strokeWidth="0.1" opacity="0.05" />
        <circle cx="80" cy="48" r="44" fill="none" stroke="#009688" strokeWidth="0.08" opacity="0.03" />
      </g>
      {/* Center point */}
      <circle cx="80" cy="48" r="0.6" fill="#009688" opacity="0.3" />
      <circle cx="80" cy="48" r="0.2" fill="#009688" opacity="0.6" />
      <text x="10" y="19" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="6" letterSpacing="0.5" fill="#004D40" filter="url(#abstract-echo-shadow)">{data.nameJa}</text>
      <text x="10" y="26" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.5" fill="#009688">{data.nameEn}</text>
      <text x="10" y="34" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#4DB6AC">{data.titleJa}</text>
      <text x="10" y="41" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#80CBC4">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="5" y="43" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="abstract-echo-bg-b" cx="10%" cy="15%" r="80%">
          <stop offset="0%" stopColor="#E0F2F1" />
          <stop offset="100%" stopColor="#F0FAF8" />
        </radialGradient>
        <filter id="abstract-echo-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="abstract-echo-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.1" dy="0.12" />
          <feFlood floodColor="#004D40" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <clipPath id="abstract-echo-clip-b">
          <rect width="91" height="55" />
        </clipPath>
      </defs>
      <rect width="91" height="55" fill="url(#abstract-echo-bg-b)" />
      <rect width="91" height="55" filter="url(#abstract-echo-grain-b)" opacity="0.06" fill="#88AAAA" />
      <g clipPath="url(#abstract-echo-clip-b)">
        <circle cx="10" cy="8" r="6" fill="none" stroke="#009688" strokeWidth="0.18" opacity="0.15" />
        <circle cx="10" cy="8" r="12" fill="none" stroke="#009688" strokeWidth="0.15" opacity="0.12" />
        <circle cx="10" cy="8" r="18" fill="none" stroke="#009688" strokeWidth="0.12" opacity="0.09" />
        <circle cx="10" cy="8" r="24" fill="none" stroke="#009688" strokeWidth="0.1" opacity="0.06" />
        <circle cx="10" cy="8" r="30" fill="none" stroke="#009688" strokeWidth="0.08" opacity="0.03" />
      </g>
      <circle cx="10" cy="8" r="0.4" fill="#009688" opacity="0.25" />
      {data.logo && <image href={data.logo} x="41.5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text x="81" y="14" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#004D40" filter="url(#abstract-echo-shadow-b)">{data.companyJa}</text>
      <text x="81" y="18.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#009688">{data.companyEn}</text>
      <text x="81" y="23" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#4DB6AC">{data.titleJa}</text>
      <line x1="35" y1="25.5" x2="81" y2="25.5" stroke="#B2DFDB" strokeWidth="0.15" />
      <text x="81" y="30" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#4DB6AC">{data.tel}</text>
      <text x="81" y="34" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#4DB6AC">{data.email}</text>
      <text x="81" y="38" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#4DB6AC">{data.website}</text>
      <line x1="35" y1="40.5" x2="81" y2="40.5" stroke="#B2DFDB" strokeWidth="0.15" />
      <text x="81" y="45" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#80CBC4">〒{data.zipCode}</text>
      <text x="81" y="48.5" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#80CBC4">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 10. WARP (歪) — Warped/distorted grid
// Grid lines that bend and warp around a gravitational point
// ============================================================
const warpTemplate: TemplateDefinition = {
  id: 'abstract-warp',
  name: 'WARP',
  nameJa: '歪',
  category: 'abstract',
  designer: 'Abstract Studio',
  description: '歪む空間。重力場に引き寄せられる格子。',
  accentColor: '#7C4DFF',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="abstract-warp-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0D0D15" />
          <stop offset="50%" stopColor="#12121E" />
          <stop offset="100%" stopColor="#0A0A12" />
        </linearGradient>
        <filter id="abstract-warp-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="screen" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="abstract-warp-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.35" />
          <feOffset dx="0" dy="0.2" />
          <feFlood floodColor="#7C4DFF" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="abstract-warp-distort">
          <feTurbulence type="fractalNoise" baseFrequency="0.025" numOctaves="3" result="warp" />
          <feDisplacementMap in="SourceGraphic" in2="warp" scale="2.5" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <radialGradient id="abstract-warp-glow" cx="68%" cy="50%" r="20%">
          <stop offset="0%" stopColor="#7C4DFF" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#7C4DFF" stopOpacity="0" />
        </radialGradient>
        <clipPath id="abstract-warp-clip">
          <rect width="91" height="55" />
        </clipPath>
      </defs>
      <rect width="91" height="55" fill="url(#abstract-warp-bg)" />
      <rect width="91" height="55" filter="url(#abstract-warp-grain)" opacity="0.05" fill="#333" />
      <rect width="91" height="55" fill="url(#abstract-warp-glow)" />
      <g clipPath="url(#abstract-warp-clip)" opacity="0.25" filter="url(#abstract-warp-distort)">
        <path d="M0,5 Q30,5 60,8 Q80,12 91,5" fill="none" stroke="#7C4DFF" strokeWidth="0.15" />
        <path d="M0,15 Q30,15 60,20 Q80,25 91,15" fill="none" stroke="#7C4DFF" strokeWidth="0.15" />
        <path d="M0,25 Q30,25 55,30 Q75,38 91,25" fill="none" stroke="#7C4DFF" strokeWidth="0.15" />
        <path d="M0,35 Q30,35 55,30 Q75,22 91,35" fill="none" stroke="#7C4DFF" strokeWidth="0.15" />
        <path d="M0,45 Q30,45 60,40 Q80,35 91,45" fill="none" stroke="#7C4DFF" strokeWidth="0.15" />
        <path d="M10,0 Q10,20 14,27.5 Q10,35 10,55" fill="none" stroke="#7C4DFF" strokeWidth="0.15" />
        <path d="M25,0 Q25,18 30,27.5 Q25,37 25,55" fill="none" stroke="#7C4DFF" strokeWidth="0.15" />
        <path d="M40,0 Q40,15 48,27.5 Q40,40 40,55" fill="none" stroke="#7C4DFF" strokeWidth="0.15" />
        <path d="M55,0 Q55,12 62,27.5 Q55,43 55,55" fill="none" stroke="#7C4DFF" strokeWidth="0.15" />
        <path d="M70,0 Q70,15 68,27.5 Q70,40 70,55" fill="none" stroke="#7C4DFF" strokeWidth="0.15" />
        <path d="M85,0 Q85,20 82,27.5 Q85,35 85,55" fill="none" stroke="#7C4DFF" strokeWidth="0.15" />
      </g>
      {/* Gravity point glow */}
      <circle cx="62" cy="27.5" r="3" fill="#7C4DFF" opacity="0.08" />
      <circle cx="62" cy="27.5" r="1.5" fill="#7C4DFF" opacity="0.15" />
      <circle cx="62" cy="27.5" r="0.4" fill="#B388FF" opacity="0.4" />
      <text x="10" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6" letterSpacing="0.5" fill="#E8E0FF" filter="url(#abstract-warp-shadow)">{data.nameJa}</text>
      <text x="10" y="27" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2" letterSpacing="1" fill="#7C4DFF">{data.nameEn.toUpperCase()}</text>
      <text x="10" y="36" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#8A80AA">{data.titleJa}</text>
      <text x="10" y="43" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#6A608A">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="78" y="43" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="abstract-warp-bg-b" x1="1" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#0D0D15" />
          <stop offset="100%" stopColor="#0A0A12" />
        </linearGradient>
        <filter id="abstract-warp-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="screen" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="abstract-warp-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0" dy="0.15" />
          <feFlood floodColor="#7C4DFF" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#abstract-warp-bg-b)" />
      <rect width="91" height="55" filter="url(#abstract-warp-grain-b)" opacity="0.05" fill="#333" />
      <g opacity="0.15">
        <path d="M0,10 Q30,10 50,14 Q70,20 91,10" fill="none" stroke="#7C4DFF" strokeWidth="0.12" />
        <path d="M0,25 Q30,25 50,28 Q70,32 91,25" fill="none" stroke="#7C4DFF" strokeWidth="0.12" />
        <path d="M0,40 Q30,40 50,36 Q70,30 91,40" fill="none" stroke="#7C4DFF" strokeWidth="0.12" />
      </g>
      {data.logo && <image href={data.logo} x="5" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
      <text x="10" y="13" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#E8E0FF" filter="url(#abstract-warp-shadow-b)">{data.companyJa}</text>
      <text x="10" y="17.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" letterSpacing="0.5" fill="#7C4DFF">{data.companyEn.toUpperCase()}</text>
      <text x="10" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#8A80AA">{data.titleJa}</text>
      <line x1="10" y1="24.5" x2="81" y2="24.5" stroke="#2A2040" strokeWidth="0.15" />
      <text x="10" y="29" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#B0A0D0">{data.tel}</text>
      <text x="10" y="33" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#B0A0D0">{data.email}</text>
      <text x="10" y="37" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#B0A0D0">{data.website}</text>
      <line x1="10" y1="39.5" x2="81" y2="39.5" stroke="#2A2040" strokeWidth="0.15" />
      <text x="10" y="44" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#6A608A">〒{data.zipCode}</text>
      <text x="10" y="47.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#6A608A">{data.addressJa}</text>
    </g>
  ),
};

export const abstractTemplates: TemplateDefinition[] = [
  voidATemplate,
  flowTemplate,
  fragmentTemplate,
  noiseTemplate,
  morphTemplate,
  driftTemplate,
  splitTemplate,
  layerTemplate,
  echoTemplate,
  warpTemplate,
];
