import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. CELL (胞) — Biomorphic cell-like shapes
// Interconnected organic blobs with soft green tones
// ============================================================
const cellTemplate: TemplateDefinition = {
  id: 'organic-cell',
  name: 'CELL',
  nameJa: '胞',
  category: 'organic',
  designer: 'Organic Studio',
  description: '細胞のような有機的な形が静かに呼吸する。',
  accentColor: '#7CB07B',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F9F0" />
      <defs>
        <filter id="organic-cell-grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="organic-cell-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="organic-cell-grad1" cx="0.3" cy="0.4" r="0.6">
          <stop offset="0%" stopColor="#C8E6C9" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#E8F5E9" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="organic-cell-grad2" cx="0.7" cy="0.6" r="0.5">
          <stop offset="0%" stopColor="#A5D6A7" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#E8F5E9" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="organic-cell-grad3" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#81C784" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#F5F9F0" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="organic-cell-membrane" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#66BB6A" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#A5D6A7" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      {/* Large organic blob top-left */}
      <ellipse cx="20" cy="18" rx="18" ry="14" fill="url(#organic-cell-grad1)" />
      {/* Medium blob center-right */}
      <ellipse cx="65" cy="32" rx="22" ry="16" fill="url(#organic-cell-grad2)" />
      {/* Smaller blob bottom */}
      <ellipse cx="40" cy="48" rx="14" ry="10" fill="url(#organic-cell-grad3)" />
      {/* Small cell shapes */}
      <circle cx="12" cy="40" r="6" fill="#C8E6C9" fillOpacity="0.25" />
      <circle cx="78" cy="12" r="5" fill="#A5D6A7" fillOpacity="0.2" />
      <circle cx="40" cy="45" r="4" fill="#81C784" fillOpacity="0.15" />
      {/* Cell membrane lines */}
      <path d="M 8,28 Q 20,25 30,30 Q 40,36 50,28" stroke="#7CB07B" strokeWidth="0.15" fill="none" strokeOpacity="0.4" />
      <path d="M 55,15 Q 65,20 75,17 Q 82,14 88,20" stroke="#7CB07B" strokeWidth="0.15" fill="none" strokeOpacity="0.3" />
      <path d="M 3,48 Q 15,44 25,50 Q 35,53 45,48" stroke="#66BB6A" strokeWidth="0.12" fill="none" strokeOpacity="0.2" />
      {/* Micro organelle dots */}
      <circle cx="18" cy="16" r="0.6" fill="#4CAF50" fillOpacity="0.2" />
      <circle cx="22" cy="20" r="0.4" fill="#388E3C" fillOpacity="0.15" />
      <circle cx="66" cy="30" r="0.5" fill="#4CAF50" fillOpacity="0.18" />
      <circle cx="70" cy="34" r="0.3" fill="#388E3C" fillOpacity="0.12" />
      {data.logo && <image href={data.logo} x="74" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="6"
        letterSpacing="0.5"
        fill="#3E6B3E"
        filter="url(#organic-cell-shadow)"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.4"
        fill="#6B9B6B"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="37"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#8BB88B"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F9F0" />
      <defs>
        <filter id="organic-cell-bgrain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="organic-cell-bshadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="organic-cell-back-grad" cx="0.8" cy="0.3" r="0.5">
          <stop offset="0%" stopColor="#C8E6C9" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#F5F9F0" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="organic-cell-back-grad2" cx="0.2" cy="0.7" r="0.4">
          <stop offset="0%" stopColor="#A5D6A7" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#F5F9F0" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="72" cy="18" rx="20" ry="15" fill="url(#organic-cell-back-grad)" />
      <ellipse cx="20" cy="40" rx="16" ry="12" fill="url(#organic-cell-back-grad2)" />
      <circle cx="15" cy="42" r="8" fill="#C8E6C9" fillOpacity="0.2" />
      <circle cx="30" cy="10" r="5" fill="#A5D6A7" fillOpacity="0.15" />
      {/* Cell membrane back decorations */}
      <path d="M 60,8 Q 72,6 82,10 Q 88,14 86,20" stroke="#7CB07B" strokeWidth="0.12" fill="none" strokeOpacity="0.25" />
      <path d="M 5,35 Q 15,32 25,36 Q 35,40 30,46" stroke="#66BB6A" strokeWidth="0.1" fill="none" strokeOpacity="0.2" />
      {/* Micro organelle dots back */}
      <circle cx="74" cy="16" r="0.4" fill="#4CAF50" fillOpacity="0.15" />
      <circle cx="18" cy="38" r="0.5" fill="#388E3C" fillOpacity="0.12" />
      {data.logo && <image href={data.logo} x="74" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="10"
        y="16"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#3E6B3E"
        filter="url(#organic-cell-bshadow)"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="20"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#6B9B6B"
      >
        {data.companyEn}
      </text>
      <text
        x="10"
        y="24.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#7BAF7E"
      >
        {data.titleJa}
      </text>
      <path d="M 10,27 Q 30,26 50,28 Q 70,30 83,27" stroke="#7CB07B" strokeWidth="0.15" fill="none" strokeOpacity="0.5" />
      <text x="10" y="32" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#5A8A5A">
        {data.tel}
      </text>
      <text x="10" y="36" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#5A8A5A">
        {data.email}
      </text>
      <text x="10" y="40" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#5A8A5A">
        {data.website}
      </text>
      <text x="10" y="48" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#8BB88B">
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 2. CORAL (珊瑚) — Branching coral reef forms
// Warm coral and pink organic branching structures
// ============================================================
const coralTemplate: TemplateDefinition = {
  id: 'organic-coral',
  name: 'CORAL',
  nameJa: '珊瑚',
  category: 'organic',
  designer: 'Organic Studio',
  description: '珊瑚礁のように枝分かれする温かな有機形態。',
  accentColor: '#E8836B',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFF5F2" />
      <defs>
        <filter id="organic-coral-grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="organic-coral-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#5D2A1A" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="organic-coral-grad1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFAB91" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FF8A65" stopOpacity="0.1" />
        </linearGradient>
        <radialGradient id="organic-coral-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#FFCCBC" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#FFF5F2" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Coral branch structures */}
      <path d="M 0,55 Q 5,40 8,30 Q 10,25 14,20 Q 16,17 13,12 Q 11,8 15,5" stroke="#E8836B" strokeWidth="0.8" fill="none" strokeOpacity="0.3" strokeLinecap="round" />
      <path d="M 8,30 Q 12,28 18,30 Q 22,32 20,36" stroke="#E8836B" strokeWidth="0.5" fill="none" strokeOpacity="0.25" strokeLinecap="round" />
      <path d="M 14,20 Q 20,18 24,22" stroke="#E8836B" strokeWidth="0.4" fill="none" strokeOpacity="0.2" strokeLinecap="round" />
      <path d="M 0,55 Q 3,48 10,42 Q 15,38 12,32" stroke="#F4A08E" strokeWidth="0.6" fill="none" strokeOpacity="0.25" strokeLinecap="round" />
      {/* Right side coral */}
      <path d="M 91,50 Q 85,42 80,35 Q 77,30 80,24 Q 82,20 78,15" stroke="#E8836B" strokeWidth="0.6" fill="none" strokeOpacity="0.2" strokeLinecap="round" />
      <path d="M 80,35 Q 75,33 72,36" stroke="#E8836B" strokeWidth="0.4" fill="none" strokeOpacity="0.15" strokeLinecap="round" />
      {/* Soft bg glow */}
      <ellipse cx="50" cy="28" rx="25" ry="15" fill="url(#organic-coral-grad1)" />
      <ellipse cx="15" cy="44" rx="12" ry="10" fill="url(#organic-coral-glow)" />
      {/* Coral polyp dots */}
      <circle cx="15" cy="5" r="0.5" fill="#E8836B" fillOpacity="0.3" />
      <circle cx="24" cy="22" r="0.4" fill="#FF8A65" fillOpacity="0.25" />
      <circle cx="78" cy="15" r="0.5" fill="#E8836B" fillOpacity="0.2" />
      <circle cx="72" cy="36" r="0.3" fill="#F4A08E" fillOpacity="0.25" />
      {data.logo && <image href={data.logo} x="74" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="6.5"
        letterSpacing="0.8"
        fill="#8B3A2A"
        filter="url(#organic-coral-shadow)"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="29"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2.2"
        letterSpacing="0.5"
        fill="#C4624E"
        fontStyle="italic"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#D4846F"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFF5F2" />
      <defs>
        <filter id="organic-coral-bshadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#5D2A1A" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="organic-coral-bglow" cx="0.8" cy="0.8" r="0.5">
          <stop offset="0%" stopColor="#FFCCBC" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#FFF5F2" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Subtle coral branches on back */}
      <path d="M 91,0 Q 82,8 78,18 Q 75,25 79,32 Q 82,37 78,42" stroke="#E8836B" strokeWidth="0.5" fill="none" strokeOpacity="0.2" strokeLinecap="round" />
      <path d="M 78,18 Q 72,16 68,20" stroke="#E8836B" strokeWidth="0.3" fill="none" strokeOpacity="0.15" strokeLinecap="round" />
      <path d="M 79,32 Q 84,34 88,30" stroke="#F4A08E" strokeWidth="0.25" fill="none" strokeOpacity="0.15" strokeLinecap="round" />
      <ellipse cx="80" cy="45" rx="14" ry="12" fill="url(#organic-coral-bglow)" />
      {/* Polyp dots back */}
      <circle cx="68" cy="20" r="0.4" fill="#E8836B" fillOpacity="0.2" />
      <circle cx="88" cy="30" r="0.3" fill="#F4A08E" fillOpacity="0.2" />
      <circle cx="82" cy="42" r="0.5" fill="#FFAB91" fillOpacity="0.15" />
      {data.logo && <image href={data.logo} x="74" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="12"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#8B3A2A"
        filter="url(#organic-coral-bshadow)"
      >
        {data.companyJa}
      </text>
      <text
        x="12"
        y="18.5"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        letterSpacing="0.2"
        fill="#C4624E"
        fontStyle="italic"
      >
        {data.companyEn}
      </text>
      <text
        x="12"
        y="22.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#D4846F"
      >
        {data.titleJa}
      </text>
      <line x1="12" y1="25" x2="55" y2="25" stroke="#E8836B" strokeWidth="0.12" strokeOpacity="0.4" />
      <text x="12" y="30" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#9B5A4A">{data.tel}</text>
      <text x="12" y="34" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#9B5A4A">{data.email}</text>
      <text x="12" y="38" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#9B5A4A">{data.website}</text>
      <text x="12" y="46" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#D4846F">
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 3. PETAL (花弁) — Flower petal shapes
// Soft overlapping petal forms in muted purples and pinks
// ============================================================
const petalTemplate: TemplateDefinition = {
  id: 'organic-petal',
  name: 'PETAL',
  nameJa: '花弁',
  category: 'organic',
  designer: 'Organic Studio',
  description: '花弁が重なり合うように、柔らかな曲線が響き合う。',
  accentColor: '#B088A8',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FBF5F9" />
      <defs>
        <filter id="organic-petal-grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="organic-petal-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#4A2040" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="organic-petal-g1" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#D1A3C5" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#D1A3C5" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="organic-petal-g2" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#C48DB7" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#C48DB7" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="organic-petal-stem" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#B088A8" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#FBF5F9" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Overlapping petals in top-right */}
      <ellipse cx="72" cy="14" rx="14" ry="9" transform="rotate(-20 72 14)" fill="url(#organic-petal-g1)" />
      <ellipse cx="78" cy="20" rx="12" ry="8" transform="rotate(15 78 20)" fill="url(#organic-petal-g2)" />
      <ellipse cx="68" cy="22" rx="10" ry="7" transform="rotate(-40 68 22)" fill="#E0C4D8" fillOpacity="0.2" />
      <ellipse cx="76" cy="12" rx="8" ry="5" transform="rotate(30 76 12)" fill="#D1A3C5" fillOpacity="0.12" />
      {/* Small petal accent bottom-left */}
      <ellipse cx="15" cy="44" rx="8" ry="5" transform="rotate(25 15 44)" fill="#D1A3C5" fillOpacity="0.15" />
      <ellipse cx="22" cy="48" rx="6" ry="4" transform="rotate(-10 22 48)" fill="#C48DB7" fillOpacity="0.12" />
      {/* Petal veins */}
      <path d="M 72,14 Q 76,16 80,20" stroke="#B088A8" strokeWidth="0.08" fill="none" strokeOpacity="0.2" />
      <path d="M 68,22 Q 72,20 76,16" stroke="#C48DB7" strokeWidth="0.06" fill="none" strokeOpacity="0.15" />
      {/* Pollen micro dots */}
      <circle cx="74" cy="17" r="0.3" fill="#9C6B90" fillOpacity="0.2" />
      <circle cx="70" cy="19" r="0.25" fill="#B088A8" fillOpacity="0.18" />
      <circle cx="18" cy="46" r="0.3" fill="#9C6B90" fillOpacity="0.15" />
      {data.logo && <image href={data.logo} x="5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="10"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="6"
        letterSpacing="0.6"
        fill="#6B3A5E"
        filter="url(#organic-petal-shadow)"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="29"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.3"
        fill="#9B6A8E"
        fontStyle="italic"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#B088A8"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FBF5F9" />
      <defs>
        <filter id="organic-petal-bshadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#4A2040" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="organic-petal-bg1" cx="0.8" cy="0.8" r="0.5">
          <stop offset="0%" stopColor="#D1A3C5" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#FBF5F9" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Subtle petals on back */}
      <ellipse cx="75" cy="42" rx="12" ry="8" transform="rotate(30 75 42)" fill="#D1A3C5" fillOpacity="0.15" />
      <ellipse cx="82" cy="38" rx="9" ry="6" transform="rotate(-15 82 38)" fill="#C48DB7" fillOpacity="0.1" />
      <ellipse cx="70" cy="46" rx="7" ry="5" transform="rotate(45 70 46)" fill="#E0C4D8" fillOpacity="0.1" />
      <ellipse cx="78" cy="48" rx="5" ry="3.5" transform="rotate(10 78 48)" fill="#D1A3C5" fillOpacity="0.08" />
      {/* Petal vein back */}
      <path d="M 75,42 Q 79,40 82,38" stroke="#B088A8" strokeWidth="0.06" fill="none" strokeOpacity="0.15" />
      <circle cx="77" cy="40" r="0.25" fill="#9C6B90" fillOpacity="0.15" />
      {data.logo && <image href={data.logo} x="74" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#6B3A5E"
        filter="url(#organic-petal-bshadow)"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18.5"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#9B6A8E"
        fontStyle="italic"
      >
        {data.companyEn}
      </text>
      <text x="10" y="22.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#B088A8">
        {data.titleJa}
      </text>
      <path d="M 10,25 Q 25,24 40,25.5 Q 55,27 65,25" stroke="#B088A8" strokeWidth="0.12" fill="none" strokeOpacity="0.5" />
      <text x="10" y="30" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#7B5A6E">{data.tel}</text>
      <text x="10" y="34" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#7B5A6E">{data.email}</text>
      <text x="10" y="38" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#7B5A6E">{data.website}</text>
      <text x="10" y="46" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#B088A8">
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 4. SEED (種) — Seed and sprout forms
// Earth tones with seed-shaped elements scattered
// ============================================================
const seedTemplate: TemplateDefinition = {
  id: 'organic-seed',
  name: 'SEED',
  nameJa: '種',
  category: 'organic',
  designer: 'Organic Studio',
  description: '種が大地に落ちる瞬間。生命の始まりの形。',
  accentColor: '#8B7355',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FAF6F0" />
      <defs>
        <filter id="organic-seed-grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="organic-seed-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#3E2723" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="organic-seed-earth" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#D7CCC8" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FAF6F0" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="organic-seed-warmth" cx="0.5" cy="0.6" r="0.5">
          <stop offset="0%" stopColor="#BCAAA4" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#FAF6F0" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Earth ground */}
      <rect x="0" y="40" width="91" height="15" fill="url(#organic-seed-earth)" />
      <ellipse cx="45" cy="50" rx="40" ry="8" fill="url(#organic-seed-warmth)" />
      {/* Seed shapes scattered */}
      <ellipse cx="18" cy="38" rx="2.5" ry="4" transform="rotate(-20 18 38)" fill="#A1887F" fillOpacity="0.3" />
      <ellipse cx="72" cy="42" rx="2" ry="3.5" transform="rotate(15 72 42)" fill="#8D6E63" fillOpacity="0.25" />
      <ellipse cx="55" cy="44" rx="1.8" ry="3" transform="rotate(-5 55 44)" fill="#A1887F" fillOpacity="0.2" />
      <ellipse cx="35" cy="46" rx="1.5" ry="2.5" transform="rotate(30 35 46)" fill="#BCAAA4" fillOpacity="0.25" />
      {/* Tiny sprout from one seed */}
      <path d="M 18,34 Q 17,30 19,27 Q 21,25 20,22" stroke="#7CB07B" strokeWidth="0.3" fill="none" strokeOpacity="0.5" strokeLinecap="round" />
      <ellipse cx="20" cy="22" rx="2" ry="1.2" transform="rotate(-30 20 22)" fill="#81C784" fillOpacity="0.3" />
      <ellipse cx="18.5" cy="23" rx="1.5" ry="0.9" transform="rotate(20 18.5 23)" fill="#A5D6A7" fillOpacity="0.2" />
      {/* Root tendrils from seeds */}
      <path d="M 18,42 Q 17,45 16,48" stroke="#8D6E63" strokeWidth="0.1" fill="none" strokeOpacity="0.2" strokeLinecap="round" />
      <path d="M 72,46 Q 73,48 72,51" stroke="#8D6E63" strokeWidth="0.08" fill="none" strokeOpacity="0.15" strokeLinecap="round" />
      {data.logo && <image href={data.logo} x="74" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="45.5"
        y="18"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.4"
        fill="#5D4037"
        filter="url(#organic-seed-shadow)"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="24.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#8D6E63"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#A1887F"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FAF6F0" />
      <defs>
        <filter id="organic-seed-bshadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#3E2723" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="organic-seed-back-earth" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#D7CCC8" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FAF6F0" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="0" y="44" width="91" height="11" fill="url(#organic-seed-back-earth)" />
      {/* Small seed accents */}
      <ellipse cx="80" cy="10" rx="1.5" ry="2.5" transform="rotate(10 80 10)" fill="#A1887F" fillOpacity="0.2" />
      <ellipse cx="76" cy="15" rx="1.2" ry="2" transform="rotate(-20 76 15)" fill="#8D6E63" fillOpacity="0.15" />
      {/* Sprout accent */}
      <path d="M 80,6 Q 79,4 80,2" stroke="#7CB07B" strokeWidth="0.15" fill="none" strokeOpacity="0.25" strokeLinecap="round" />
      <ellipse cx="80.5" cy="2" rx="1" ry="0.6" transform="rotate(-25 80.5 2)" fill="#81C784" fillOpacity="0.15" />
      {data.logo && <image href={data.logo} x="74" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="10" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" fill="#5D4037" filter="url(#organic-seed-bshadow)">
        {data.companyJa}
      </text>
      <text x="10" y="18.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#8D6E63">{data.companyEn}</text>
      <text x="10" y="22.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#A1887F">{data.titleJa}</text>
      <line x1="10" y1="25" x2="50" y2="25" stroke="#A1887F" strokeWidth="0.12" strokeOpacity="0.4" />
      <text x="10" y="30" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#6D4C41">{data.tel}</text>
      <text x="10" y="34" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#6D4C41">{data.email}</text>
      <text x="10" y="38" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#6D4C41">{data.website}</text>
      <text x="10" y="46" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#A1887F">
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 5. MOSS (苔) — Moss and lichen texture
// Textured green patches with earthy background
// ============================================================
const mossTemplate: TemplateDefinition = {
  id: 'organic-moss',
  name: 'MOSS',
  nameJa: '苔',
  category: 'organic',
  designer: 'Organic Studio',
  description: '苔むした石のように、時間が刻む有機的な模様。',
  accentColor: '#5E8C61',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F0F2EB" />
      <defs>
        <filter id="organic-moss-grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="organic-moss-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#1B3D1E" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="organic-moss-g1" cx="0.3" cy="0.8" r="0.4">
          <stop offset="0%" stopColor="#81C784" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#81C784" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="organic-moss-g2" cx="0.8" cy="0.2" r="0.35">
          <stop offset="0%" stopColor="#66BB6A" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#66BB6A" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="organic-moss-g3" cx="0.5" cy="0.5" r="0.4">
          <stop offset="0%" stopColor="#4CAF50" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#F0F2EB" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Moss patches */}
      <ellipse cx="15" cy="45" rx="14" ry="8" fill="url(#organic-moss-g1)" />
      <ellipse cx="72" cy="10" rx="16" ry="9" fill="url(#organic-moss-g2)" />
      <ellipse cx="50" cy="40" rx="10" ry="6" fill="url(#organic-moss-g3)" />
      {/* Tiny moss dots cluster bottom-left */}
      <circle cx="8" cy="42" r="0.8" fill="#5E8C61" fillOpacity="0.4" />
      <circle cx="11" cy="44" r="0.6" fill="#66BB6A" fillOpacity="0.35" />
      <circle cx="14" cy="43" r="0.9" fill="#5E8C61" fillOpacity="0.3" />
      <circle cx="10" cy="46" r="0.5" fill="#4CAF50" fillOpacity="0.3" />
      <circle cx="16" cy="46" r="0.7" fill="#66BB6A" fillOpacity="0.25" />
      <circle cx="18" cy="44" r="0.4" fill="#5E8C61" fillOpacity="0.35" />
      <circle cx="12" cy="48" r="0.6" fill="#81C784" fillOpacity="0.3" />
      {/* Tiny moss dots cluster top-right */}
      <circle cx="70" cy="8" r="0.7" fill="#5E8C61" fillOpacity="0.3" />
      <circle cx="73" cy="10" r="0.5" fill="#66BB6A" fillOpacity="0.25" />
      <circle cx="76" cy="9" r="0.8" fill="#5E8C61" fillOpacity="0.2" />
      <circle cx="74" cy="12" r="0.6" fill="#4CAF50" fillOpacity="0.25" />
      <circle cx="78" cy="11" r="0.4" fill="#66BB6A" fillOpacity="0.2" />
      {/* Lichen veins */}
      <path d="M 8,43 Q 12,42 16,44" stroke="#4CAF50" strokeWidth="0.06" fill="none" strokeOpacity="0.25" />
      <path d="M 70,9 Q 74,8 78,10" stroke="#4CAF50" strokeWidth="0.06" fill="none" strokeOpacity="0.2" />
      {data.logo && <image href={data.logo} x="74" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.6"
        fill="#2E5630"
        filter="url(#organic-moss-shadow)"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="29"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.4"
        fill="#5E8C61"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#7BAF7E"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F0F2EB" />
      <defs>
        <filter id="organic-moss-bshadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#1B3D1E" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="organic-moss-bg1" cx="0.8" cy="0.8" r="0.4">
          <stop offset="0%" stopColor="#81C784" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#F0F2EB" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Moss patches back */}
      <ellipse cx="78" cy="46" rx="12" ry="7" fill="url(#organic-moss-bg1)" />
      <circle cx="75" cy="44" r="0.6" fill="#5E8C61" fillOpacity="0.3" />
      <circle cx="78" cy="46" r="0.8" fill="#66BB6A" fillOpacity="0.25" />
      <circle cx="81" cy="45" r="0.5" fill="#5E8C61" fillOpacity="0.3" />
      <circle cx="76" cy="48" r="0.7" fill="#4CAF50" fillOpacity="0.2" />
      <circle cx="83" cy="47" r="0.4" fill="#66BB6A" fillOpacity="0.2" />
      {/* Lichen veins back */}
      <path d="M 75,45 Q 79,44 83,46" stroke="#4CAF50" strokeWidth="0.05" fill="none" strokeOpacity="0.2" />
      {data.logo && <image href={data.logo} x="74" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="10" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" fill="#2E5630" filter="url(#organic-moss-bshadow)">
        {data.companyJa}
      </text>
      <text x="10" y="18.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5E8C61">{data.companyEn}</text>
      <text x="10" y="22.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#7BAF7E">{data.titleJa}</text>
      <line x1="10" y1="25" x2="55" y2="25" stroke="#5E8C61" strokeWidth="0.12" strokeOpacity="0.35" />
      <text x="10" y="30" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#3E6B40">{data.tel}</text>
      <text x="10" y="34" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#3E6B40">{data.email}</text>
      <text x="10" y="38" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#3E6B40">{data.website}</text>
      <text x="10" y="46" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#7BAF7E">
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 6. SHELL (貝) — Seashell spiral forms
// Warm sand tones with spiral/nautilus shapes
// ============================================================
const shellTemplate: TemplateDefinition = {
  id: 'organic-shell',
  name: 'SHELL',
  nameJa: '貝',
  category: 'organic',
  designer: 'Organic Studio',
  description: '貝殻の螺旋が語る、自然界の黄金比。',
  accentColor: '#C2956B',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FDF8F3" />
      <defs>
        <filter id="organic-shell-grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="organic-shell-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#4E3420" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="organic-shell-spiral" cx="0.4" cy="0.5" r="0.6">
          <stop offset="0%" stopColor="#D7B899" stopOpacity="0.35" />
          <stop offset="50%" stopColor="#E8D5BE" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FDF8F3" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="organic-shell-sand" x1="0" y1="1" x2="0" y2="0.7">
          <stop offset="0%" stopColor="#E8D5BE" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#FDF8F3" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Sand gradient at bottom */}
      <rect x="0" y="42" width="91" height="13" fill="url(#organic-shell-sand)" />
      {/* Nautilus spiral in background */}
      <circle cx="70" cy="28" r="20" fill="url(#organic-shell-spiral)" />
      <path d="M 70,28 Q 70,18 62,18 Q 54,18 54,25 Q 54,32 62,34 Q 68,35 72,32 Q 76,29 74,24 Q 72,20 66,20 Q 60,20 59,25 Q 58,30 63,32" stroke="#C2956B" strokeWidth="0.25" fill="none" strokeOpacity="0.35" strokeLinecap="round" />
      {/* Smaller shell accent */}
      <path d="M 15,42 Q 15,39 12,39 Q 9,39 9,41 Q 9,43 12,44 Q 14,44 15,42" stroke="#C2956B" strokeWidth="0.2" fill="none" strokeOpacity="0.25" />
      {/* Sand grain dots */}
      <circle cx="25" cy="50" r="0.3" fill="#C2956B" fillOpacity="0.15" />
      <circle cx="40" cy="48" r="0.25" fill="#D7B899" fillOpacity="0.12" />
      <circle cx="60" cy="51" r="0.3" fill="#C2956B" fillOpacity="0.1" />
      <circle cx="80" cy="49" r="0.2" fill="#D7B899" fillOpacity="0.15" />
      {data.logo && <image href={data.logo} x="5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="12"
        y="18"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="6"
        letterSpacing="0.5"
        fill="#6D4C2F"
        filter="url(#organic-shell-shadow)"
      >
        {data.nameJa}
      </text>
      <text
        x="12"
        y="25"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2.2"
        letterSpacing="0.4"
        fill="#A07850"
        fontStyle="italic"
      >
        {data.nameEn}
      </text>
      <text
        x="12"
        y="32"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#C2956B"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FDF8F3" />
      <defs>
        <filter id="organic-shell-bshadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#4E3420" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="organic-shell-bglow" cx="0.85" cy="0.2" r="0.3">
          <stop offset="0%" stopColor="#E8D5BE" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#FDF8F3" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Subtle shell spiral top-right */}
      <ellipse cx="80" cy="10" rx="12" ry="10" fill="url(#organic-shell-bglow)" />
      <path d="M 82,8 Q 82,4 78,4 Q 74,4 74,7 Q 74,10 78,11 Q 81,11 82,8" stroke="#C2956B" strokeWidth="0.2" fill="none" strokeOpacity="0.2" />
      <path d="M 78,7 Q 78,6 77,6 Q 76,6 76,7" stroke="#C2956B" strokeWidth="0.15" fill="none" strokeOpacity="0.2" />
      {/* Sand grain dots back */}
      <circle cx="75" cy="48" r="0.25" fill="#C2956B" fillOpacity="0.1" />
      <circle cx="82" cy="50" r="0.2" fill="#D7B899" fillOpacity="0.12" />
      {data.logo && <image href={data.logo} x="74" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="10" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" fill="#6D4C2F" filter="url(#organic-shell-bshadow)">
        {data.companyJa}
      </text>
      <text x="10" y="18.5" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#A07850" fontStyle="italic">{data.companyEn}</text>
      <text x="10" y="22.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#C2956B">{data.titleJa}</text>
      <path d="M 10,25 Q 20,24.5 30,25 Q 40,25.5 50,25" stroke="#C2956B" strokeWidth="0.12" fill="none" strokeOpacity="0.35" />
      <text x="10" y="30" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#7D5C3F">{data.tel}</text>
      <text x="10" y="34" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#7D5C3F">{data.email}</text>
      <text x="10" y="38" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#7D5C3F">{data.website}</text>
      <text x="10" y="46" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#C2956B">
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 7. VINE (蔓) — Climbing vine tendrils
// Flowing vine lines with leaf accents
// ============================================================
const vineTemplate: TemplateDefinition = {
  id: 'organic-vine',
  name: 'VINE',
  nameJa: '蔓',
  category: 'organic',
  designer: 'Organic Studio',
  description: '蔓草が壁を這うように、自由に伸びる有機的な線。',
  accentColor: '#4A7C59',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F4F7F0" />
      <defs>
        <filter id="organic-vine-grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="organic-vine-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#1A3D22" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="organic-vine-leafgrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#81C784" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#A5D6A7" stopOpacity="0.08" />
        </linearGradient>
      </defs>
      {/* Main vine from bottom-left curving up */}
      <path d="M 0,55 Q 5,45 8,38 Q 10,32 15,28 Q 20,24 22,18 Q 23,14 20,10 Q 18,7 20,4" stroke="#4A7C59" strokeWidth="0.4" fill="none" strokeOpacity="0.4" strokeLinecap="round" />
      {/* Branch tendril */}
      <path d="M 15,28 Q 20,26 25,28 Q 30,30 32,27" stroke="#4A7C59" strokeWidth="0.25" fill="none" strokeOpacity="0.3" strokeLinecap="round" />
      {/* Curling tendril */}
      <path d="M 32,27 Q 34,25 33,23 Q 32,22 33,21" stroke="#66BB6A" strokeWidth="0.12" fill="none" strokeOpacity="0.2" strokeLinecap="round" />
      {/* Small leaves along the vine */}
      <ellipse cx="22" cy="18" rx="3" ry="1.5" transform="rotate(-40 22 18)" fill="url(#organic-vine-leafgrad)" />
      <ellipse cx="15" cy="28" rx="2.5" ry="1.2" transform="rotate(20 15 28)" fill="#81C784" fillOpacity="0.18" />
      <ellipse cx="32" cy="27" rx="2" ry="1" transform="rotate(-25 32 27)" fill="#66BB6A" fillOpacity="0.15" />
      <ellipse cx="8" cy="38" rx="2.5" ry="1.2" transform="rotate(45 8 38)" fill="#81C784" fillOpacity="0.2" />
      {/* Leaf veins */}
      <path d="M 21,18 Q 23,18 24,17.5" stroke="#4A7C59" strokeWidth="0.04" fill="none" strokeOpacity="0.2" />
      <path d="M 14,28 Q 16,28 17,27.5" stroke="#4A7C59" strokeWidth="0.04" fill="none" strokeOpacity="0.15" />
      {/* Right side thin vine */}
      <path d="M 91,20 Q 85,22 82,28 Q 80,32 82,38" stroke="#4A7C59" strokeWidth="0.2" fill="none" strokeOpacity="0.2" strokeLinecap="round" />
      <ellipse cx="82" cy="28" rx="2" ry="1" transform="rotate(60 82 28)" fill="#66BB6A" fillOpacity="0.12" />
      {data.logo && <image href={data.logo} x="74" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="50"
        y="22"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#2D5A37"
        filter="url(#organic-vine-shadow)"
      >
        {data.nameJa}
      </text>
      <text
        x="50"
        y="29"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.4"
        fill="#4A7C59"
        fontStyle="italic"
      >
        {data.nameEn}
      </text>
      <text
        x="50"
        y="36"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#6B9B6B"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F4F7F0" />
      <defs>
        <filter id="organic-vine-bshadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#1A3D22" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      {/* Subtle vine on right side */}
      <path d="M 91,0 Q 84,5 82,12 Q 80,18 83,24 Q 85,28 82,34" stroke="#4A7C59" strokeWidth="0.25" fill="none" strokeOpacity="0.2" strokeLinecap="round" />
      <ellipse cx="82" cy="12" rx="2" ry="1" transform="rotate(-30 82 12)" fill="#66BB6A" fillOpacity="0.1" />
      <ellipse cx="83" cy="24" rx="1.8" ry="0.9" transform="rotate(20 83 24)" fill="#81C784" fillOpacity="0.1" />
      {/* Curling tendril back */}
      <path d="M 82,34 Q 80,36 81,38 Q 82,39 81,40" stroke="#66BB6A" strokeWidth="0.1" fill="none" strokeOpacity="0.15" strokeLinecap="round" />
      {/* Leaf vein back */}
      <path d="M 81,12 Q 83,12 84,11.5" stroke="#4A7C59" strokeWidth="0.03" fill="none" strokeOpacity="0.15" />
      {data.logo && <image href={data.logo} x="74" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="10" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" fill="#2D5A37" filter="url(#organic-vine-bshadow)">
        {data.companyJa}
      </text>
      <text x="10" y="18.5" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#4A7C59" fontStyle="italic">{data.companyEn}</text>
      <text x="10" y="22.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#6B9B6B">{data.titleJa}</text>
      <path d="M 10,25 Q 25,24 40,25.5" stroke="#4A7C59" strokeWidth="0.1" fill="none" strokeOpacity="0.3" />
      <text x="10" y="30" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#3E6B42">{data.tel}</text>
      <text x="10" y="34" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#3E6B42">{data.email}</text>
      <text x="10" y="38" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#3E6B42">{data.website}</text>
      <text x="10" y="46" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#6B9B6B">
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 8. SPORE (胞子) — Floating spore particles
// Scattered floating circles of various sizes
// ============================================================
const sporeTemplate: TemplateDefinition = {
  id: 'organic-spore',
  name: 'SPORE',
  nameJa: '胞子',
  category: 'organic',
  designer: 'Organic Studio',
  description: '風に舞う胞子のように、空間に散らばる生命の粒子。',
  accentColor: '#8E7CC3',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F3FA" />
      <defs>
        <filter id="organic-spore-grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="organic-spore-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#2A1A50" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="organic-spore-g1" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#B39DDB" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#B39DDB" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="organic-spore-g2" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#CE93D8" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#F5F3FA" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Floating spore particles - various sizes */}
      <circle cx="12" cy="10" r="3.5" fill="#B39DDB" fillOpacity="0.15" />
      <circle cx="20" cy="8" r="1.5" fill="#9575CD" fillOpacity="0.2" />
      <circle cx="8" cy="16" r="1" fill="#7E57C2" fillOpacity="0.15" />
      <circle cx="78" cy="42" r="4" fill="#B39DDB" fillOpacity="0.12" />
      <circle cx="84" cy="38" r="1.8" fill="#9575CD" fillOpacity="0.18" />
      <circle cx="72" cy="46" r="2.2" fill="#CE93D8" fillOpacity="0.15" />
      <circle cx="82" cy="48" r="1.2" fill="#7E57C2" fillOpacity="0.12" />
      <circle cx="35" cy="45" r="1.5" fill="#B39DDB" fillOpacity="0.1" />
      <circle cx="60" cy="8" r="2" fill="#CE93D8" fillOpacity="0.1" />
      <circle cx="45" cy="48" r="0.8" fill="#9575CD" fillOpacity="0.15" />
      <circle cx="88" cy="20" r="1.3" fill="#B39DDB" fillOpacity="0.12" />
      <circle cx="5" cy="35" r="1.8" fill="#CE93D8" fillOpacity="0.1" />
      {/* Drifting connection lines between some spores */}
      <path d="M 12,10 Q 16,9 20,8" stroke="#8E7CC3" strokeWidth="0.08" fill="none" strokeOpacity="0.3" />
      <path d="M 78,42 Q 80,40 84,38" stroke="#8E7CC3" strokeWidth="0.08" fill="none" strokeOpacity="0.25" />
      <path d="M 72,46 Q 76,47 82,48" stroke="#9575CD" strokeWidth="0.06" fill="none" strokeOpacity="0.2" />
      {/* Spore nucleus micro-details */}
      <circle cx="12" cy="10" r="0.5" fill="#7E57C2" fillOpacity="0.1" />
      <circle cx="78" cy="42" r="0.6" fill="#7E57C2" fillOpacity="0.08" />
      {data.logo && <image href={data.logo} x="74" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="6"
        letterSpacing="0.6"
        fill="#4527A0"
        filter="url(#organic-spore-shadow)"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="29"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.4"
        fill="#7E57C2"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#9575CD"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F3FA" />
      <defs>
        <filter id="organic-spore-bshadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#2A1A50" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      {/* Subtle spore particles on back */}
      <circle cx="80" cy="8" r="2.5" fill="#B39DDB" fillOpacity="0.12" />
      <circle cx="85" cy="12" r="1" fill="#9575CD" fillOpacity="0.15" />
      <circle cx="76" cy="5" r="1.2" fill="#CE93D8" fillOpacity="0.1" />
      <circle cx="8" cy="48" r="2" fill="#B39DDB" fillOpacity="0.1" />
      <circle cx="14" cy="50" r="1.5" fill="#9575CD" fillOpacity="0.12" />
      {/* Connection threads back */}
      <path d="M 80,8 Q 82,10 85,12" stroke="#8E7CC3" strokeWidth="0.06" fill="none" strokeOpacity="0.2" />
      <path d="M 8,48 Q 10,49 14,50" stroke="#8E7CC3" strokeWidth="0.05" fill="none" strokeOpacity="0.15" />
      {/* Nucleus dots back */}
      <circle cx="80" cy="8" r="0.4" fill="#7E57C2" fillOpacity="0.08" />
      {data.logo && <image href={data.logo} x="74" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="10" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" fill="#4527A0" filter="url(#organic-spore-bshadow)">
        {data.companyJa}
      </text>
      <text x="10" y="18.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#7E57C2">{data.companyEn}</text>
      <text x="10" y="22.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#9575CD">{data.titleJa}</text>
      <line x1="10" y1="25" x2="55" y2="25" stroke="#8E7CC3" strokeWidth="0.1" strokeOpacity="0.3" />
      <text x="10" y="30" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#5E35B1">{data.tel}</text>
      <text x="10" y="34" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#5E35B1">{data.email}</text>
      <text x="10" y="38" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#5E35B1">{data.website}</text>
      <text x="10" y="46" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#9575CD">
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 9. ROOT (根) — Underground root networks
// Branching root system with earth tones
// ============================================================
const rootTemplate: TemplateDefinition = {
  id: 'organic-root',
  name: 'ROOT',
  nameJa: '根',
  category: 'organic',
  designer: 'Organic Studio',
  description: '地中に広がる根の網。見えないところで支える力。',
  accentColor: '#795548',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F8F4EF" />
      <defs>
        <filter id="organic-root-grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="organic-root-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#3E2723" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="organic-root-soil" x1="0" y1="0.6" x2="0" y2="1">
          <stop offset="0%" stopColor="#F8F4EF" stopOpacity="1" />
          <stop offset="100%" stopColor="#E8DDD0" stopOpacity="1" />
        </linearGradient>
        <radialGradient id="organic-root-depth" cx="0.5" cy="0.8" r="0.4">
          <stop offset="0%" stopColor="#D7CCC8" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#F8F4EF" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Soil gradient at bottom */}
      <rect x="0" y="33" width="91" height="22" fill="url(#organic-root-soil)" />
      <ellipse cx="45" cy="48" rx="35" ry="10" fill="url(#organic-root-depth)" />
      {/* Root system branching from bottom center */}
      <path d="M 45,55 Q 45,48 44,42 Q 43,38 40,35 Q 37,33 32,33" stroke="#795548" strokeWidth="0.5" fill="none" strokeOpacity="0.35" strokeLinecap="round" />
      <path d="M 45,55 Q 46,47 48,40 Q 50,36 54,34 Q 58,33 62,34" stroke="#795548" strokeWidth="0.45" fill="none" strokeOpacity="0.3" strokeLinecap="round" />
      <path d="M 44,42 Q 42,40 38,39 Q 34,38 30,40" stroke="#795548" strokeWidth="0.3" fill="none" strokeOpacity="0.25" strokeLinecap="round" />
      <path d="M 48,40 Q 52,38 56,39 Q 60,40 64,38" stroke="#795548" strokeWidth="0.3" fill="none" strokeOpacity="0.25" strokeLinecap="round" />
      {/* Fine root hairs */}
      <path d="M 32,33 Q 28,32 24,34" stroke="#8D6E63" strokeWidth="0.15" fill="none" strokeOpacity="0.2" strokeLinecap="round" />
      <path d="M 62,34 Q 66,33 70,35" stroke="#8D6E63" strokeWidth="0.15" fill="none" strokeOpacity="0.2" strokeLinecap="round" />
      <path d="M 30,40 Q 26,42 22,40" stroke="#8D6E63" strokeWidth="0.12" fill="none" strokeOpacity="0.18" strokeLinecap="round" />
      <path d="M 64,38 Q 68,40 72,38" stroke="#8D6E63" strokeWidth="0.12" fill="none" strokeOpacity="0.18" strokeLinecap="round" />
      {/* Root nodules */}
      <circle cx="32" cy="33" r="0.6" fill="#795548" fillOpacity="0.15" />
      <circle cx="62" cy="34" r="0.5" fill="#8D6E63" fillOpacity="0.12" />
      <circle cx="30" cy="40" r="0.4" fill="#795548" fillOpacity="0.1" />
      {data.logo && <image href={data.logo} x="74" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#4E342E"
        filter="url(#organic-root-shadow)"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="21"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#795548"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#A1887F"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F8F4EF" />
      <defs>
        <filter id="organic-root-bshadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#3E2723" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="organic-root-back-soil" x1="0" y1="0.7" x2="0" y2="1">
          <stop offset="0%" stopColor="#F8F4EF" stopOpacity="1" />
          <stop offset="100%" stopColor="#E8DDD0" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      <rect x="0" y="42" width="91" height="13" fill="url(#organic-root-back-soil)" />
      {/* Small root detail bottom-right */}
      <path d="M 80,55 Q 80,50 78,47 Q 76,45 72,44" stroke="#795548" strokeWidth="0.25" fill="none" strokeOpacity="0.2" strokeLinecap="round" />
      <path d="M 78,47 Q 82,46 85,48" stroke="#8D6E63" strokeWidth="0.15" fill="none" strokeOpacity="0.15" strokeLinecap="round" />
      {/* Root nodule back */}
      <circle cx="72" cy="44" r="0.4" fill="#795548" fillOpacity="0.1" />
      <circle cx="85" cy="48" r="0.3" fill="#8D6E63" fillOpacity="0.08" />
      {data.logo && <image href={data.logo} x="74" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="10" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" fill="#4E342E" filter="url(#organic-root-bshadow)">
        {data.companyJa}
      </text>
      <text x="10" y="18.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#795548">{data.companyEn}</text>
      <text x="10" y="22.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#A1887F">{data.titleJa}</text>
      <line x1="10" y1="25" x2="55" y2="25" stroke="#795548" strokeWidth="0.12" strokeOpacity="0.3" />
      <text x="10" y="30" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#5D4037">{data.tel}</text>
      <text x="10" y="34" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#5D4037">{data.email}</text>
      <text x="10" y="38" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#5D4037">{data.website}</text>
      <text x="10" y="46" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#A1887F">
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 10. BLOOM-O (華) — Full bloom flower abstraction
// Radial bloom pattern with warm colors
// ============================================================
const bloomOTemplate: TemplateDefinition = {
  id: 'organic-bloom-o',
  name: 'BLOOM-O',
  nameJa: '華',
  category: 'organic',
  designer: 'Organic Studio',
  description: '満開の花のように、華やかに広がる有機的な放射形。',
  accentColor: '#E07B8E',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFF5F6" />
      <defs>
        <filter id="organic-bloom-o-grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="organic-bloom-o-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#5E2030" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="organic-bloom-o-center" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#F8BBD0" stopOpacity="0.5" />
          <stop offset="60%" stopColor="#F48FB1" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FFF5F6" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="organic-bloom-o-inner" cx="0.5" cy="0.5" r="0.3">
          <stop offset="0%" stopColor="#E07B8E" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#F8BBD0" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Bloom center glow */}
      <circle cx="72" cy="18" r="18" fill="url(#organic-bloom-o-center)" />
      {/* Radial petals around bloom center */}
      <ellipse cx="72" cy="5" rx="4" ry="8" fill="#F8BBD0" fillOpacity="0.15" />
      <ellipse cx="82" cy="10" rx="4" ry="7" transform="rotate(50 82 10)" fill="#F48FB1" fillOpacity="0.12" />
      <ellipse cx="85" cy="22" rx="4" ry="7" transform="rotate(90 85 22)" fill="#F8BBD0" fillOpacity="0.1" />
      <ellipse cx="80" cy="32" rx="3.5" ry="6.5" transform="rotate(130 80 32)" fill="#F48FB1" fillOpacity="0.1" />
      <ellipse cx="70" cy="36" rx="3.5" ry="6.5" transform="rotate(170 70 36)" fill="#F8BBD0" fillOpacity="0.12" />
      <ellipse cx="60" cy="28" rx="3.5" ry="6.5" transform="rotate(-50 60 28)" fill="#F48FB1" fillOpacity="0.1" />
      <ellipse cx="60" cy="14" rx="3.5" ry="6.5" transform="rotate(-30 60 14)" fill="#F8BBD0" fillOpacity="0.12" />
      {/* Center dots */}
      <circle cx="72" cy="18" r="2.5" fill="url(#organic-bloom-o-inner)" />
      <circle cx="72" cy="18" r="1" fill="#E07B8E" fillOpacity="0.4" />
      {/* Stamen micro dots */}
      <circle cx="70" cy="16" r="0.3" fill="#D4899B" fillOpacity="0.3" />
      <circle cx="74" cy="16" r="0.25" fill="#C4627A" fillOpacity="0.25" />
      <circle cx="72" cy="20" r="0.3" fill="#D4899B" fillOpacity="0.2" />
      {data.logo && <image href={data.logo} x="5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="10"
        y="24"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="6"
        letterSpacing="0.5"
        fill="#8E3A4E"
        filter="url(#organic-bloom-o-shadow)"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="31"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.3"
        fill="#C4627A"
        fontStyle="italic"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="38"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#D4899B"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFF5F6" />
      <defs>
        <filter id="organic-bloom-o-bshadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#5E2030" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="organic-bloom-o-back" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#F8BBD0" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FFF5F6" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Subtle bloom in bottom-right corner */}
      <circle cx="82" cy="48" r="12" fill="url(#organic-bloom-o-back)" />
      <ellipse cx="82" cy="40" rx="2.5" ry="5" fill="#F8BBD0" fillOpacity="0.1" />
      <ellipse cx="88" cy="46" rx="2.5" ry="5" transform="rotate(70 88 46)" fill="#F48FB1" fillOpacity="0.08" />
      <ellipse cx="78" cy="52" rx="2.5" ry="5" transform="rotate(-50 78 52)" fill="#F8BBD0" fillOpacity="0.08" />
      <circle cx="82" cy="48" r="1.5" fill="#E07B8E" fillOpacity="0.15" />
      {/* Stamen dots back */}
      <circle cx="81" cy="47" r="0.2" fill="#D4899B" fillOpacity="0.15" />
      <circle cx="83" cy="47" r="0.15" fill="#C4627A" fillOpacity="0.12" />
      {data.logo && <image href={data.logo} x="74" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="10" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" fill="#8E3A4E" filter="url(#organic-bloom-o-bshadow)">
        {data.companyJa}
      </text>
      <text x="10" y="18.5" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#C4627A" fontStyle="italic">{data.companyEn}</text>
      <text x="10" y="22.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#D4899B">{data.titleJa}</text>
      <line x1="10" y1="25" x2="55" y2="25" stroke="#E07B8E" strokeWidth="0.12" strokeOpacity="0.35" />
      <text x="10" y="30" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#9E4A5E">{data.tel}</text>
      <text x="10" y="34" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#9E4A5E">{data.email}</text>
      <text x="10" y="38" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#9E4A5E">{data.website}</text>
      <text x="10" y="46" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#D4899B">
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

export const organicTemplates: TemplateDefinition[] = [
  cellTemplate,
  coralTemplate,
  petalTemplate,
  seedTemplate,
  mossTemplate,
  shellTemplate,
  vineTemplate,
  sporeTemplate,
  rootTemplate,
  bloomOTemplate,
];
