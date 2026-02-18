import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. FERN (蕨) — Unfurling fern fronds
// Watercolor-washed greens with curling frond details and paper grain
// ============================================================
const fernTemplate: TemplateDefinition = {
  id: 'botanical-fern',
  name: 'FERN',
  nameJa: '蕨',
  category: 'botanical',
  designer: 'Botanical Studio',
  description: '蕨の渦巻き。森の床に広がる原始的な美しさ。',
  accentColor: '#228B22',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="botanical-fern-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FDFAF5" />
          <stop offset="40%" stopColor="#F5F2EB" />
          <stop offset="100%" stopColor="#EDE8DD" />
        </linearGradient>
        <filter id="botanical-fern-paper">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="5" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="botanical-fern-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.08" dy="0.12" />
          <feFlood floodColor="#1A3A1A" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="botanical-fern-frond" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1B6B1B" />
          <stop offset="50%" stopColor="#228B22" />
          <stop offset="100%" stopColor="#2DAA2D" />
        </linearGradient>
        <filter id="botanical-fern-watercolor">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="warp" />
          <feDisplacementMap in="SourceGraphic" in2="warp" scale="1.5" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <clipPath id="botanical-fern-clip"><rect width="91" height="55" /></clipPath>
      </defs>
      <rect width="91" height="55" fill="url(#botanical-fern-bg)" />
      <rect width="91" height="55" filter="url(#botanical-fern-paper)" opacity="0.06" fill="#8B8B7A" />
      <g clipPath="url(#botanical-fern-clip)" filter="url(#botanical-fern-watercolor)">
        {/* Primary fern frond curving up from bottom-right */}
        <path d="M82,55 Q80,42 74,35 Q70,30 72,25 Q75,20 73,14 Q71,10 74,5" fill="none" stroke="url(#botanical-fern-frond)" strokeWidth="0.5" opacity="0.2" />
        <path d="M74,35 Q68,33 64,36" fill="none" stroke="#228B22" strokeWidth="0.3" opacity="0.18" />
        <path d="M72,25 Q66,23 62,26" fill="none" stroke="#228B22" strokeWidth="0.3" opacity="0.18" />
        <path d="M73,14 Q67,12 64,15" fill="none" stroke="#228B22" strokeWidth="0.25" opacity="0.15" />
        <path d="M74,35 Q78,32 81,34" fill="none" stroke="#228B22" strokeWidth="0.3" opacity="0.18" />
        <path d="M72,25 Q76,22 79,24" fill="none" stroke="#228B22" strokeWidth="0.3" opacity="0.15" />
        <path d="M73,14 Q77,11 80,13" fill="none" stroke="#228B22" strokeWidth="0.25" opacity="0.12" />
        {/* Spiral tip */}
        <path d="M74,5 Q76,2 78,3 Q80,5 77,7" fill="none" stroke="#228B22" strokeWidth="0.4" opacity="0.15" />
        {/* Secondary smaller frond */}
        <path d="M86,55 Q85,48 83,44 Q81,40 83,37" fill="none" stroke="#2E7D32" strokeWidth="0.3" opacity="0.12" />
        <path d="M83,44 Q80,43 78,45" fill="none" stroke="#2E7D32" strokeWidth="0.2" opacity="0.1" />
        {/* Tiny leaf veins detail */}
        <line x1="64" y1="36" x2="62" y2="34" stroke="#228B22" strokeWidth="0.08" opacity="0.12" />
        <line x1="64" y1="36" x2="63" y2="38" stroke="#228B22" strokeWidth="0.08" opacity="0.12" />
      </g>
      {/* Watercolor wash spots */}
      <circle cx="78" cy="20" r="8" fill="#228B22" opacity="0.03" />
      <circle cx="70" cy="40" r="6" fill="#2E7D32" opacity="0.02" />
      <text x="10" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="6" letterSpacing="0.5" fill="#2D4A2D" filter="url(#botanical-fern-shadow)">{data.nameJa}</text>
      <text x="10" y="27" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2.2" letterSpacing="0.5" fill="#228B22" opacity="0.8">{data.nameEn}</text>
      <line x1="10" y1="31" x2="45" y2="31" stroke="#228B22" strokeWidth="0.15" opacity="0.4" />
      <text x="10" y="37" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#6B8E6B">{data.titleJa}</text>
      <text x="10" y="43" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#8BAA8B">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="75" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="botanical-fern-bg-b" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FDFAF5" />
          <stop offset="50%" stopColor="#F5F2EB" />
          <stop offset="100%" stopColor="#EDE8DD" />
        </linearGradient>
        <filter id="botanical-fern-paper-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="5" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="botanical-fern-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.08" dy="0.12" />
          <feFlood floodColor="#1A3A1A" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="botanical-fern-wc-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="warp" />
          <feDisplacementMap in="SourceGraphic" in2="warp" scale="1.5" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <clipPath id="botanical-fern-clip-b"><rect width="91" height="55" /></clipPath>
      </defs>
      <rect width="91" height="55" fill="url(#botanical-fern-bg-b)" />
      <rect width="91" height="55" filter="url(#botanical-fern-paper-b)" opacity="0.06" fill="#8B8B7A" />
      <g clipPath="url(#botanical-fern-clip-b)" filter="url(#botanical-fern-wc-b)" opacity="0.12">
        <path d="M5,55 Q8,42 14,35 Q18,30 16,25 Q13,20 15,14 Q17,10 14,5" fill="none" stroke="#228B22" strokeWidth="0.5" />
        <path d="M14,35 Q20,33 24,36" fill="none" stroke="#228B22" strokeWidth="0.3" />
        <path d="M16,25 Q22,23 26,26" fill="none" stroke="#228B22" strokeWidth="0.3" />
        <path d="M14,35 Q10,32 7,34" fill="none" stroke="#228B22" strokeWidth="0.3" />
        <path d="M16,25 Q12,22 9,24" fill="none" stroke="#228B22" strokeWidth="0.3" />
      </g>
      {data.logo && <image href={data.logo} x="41.5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text x="81" y="13" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#2D4A2D" filter="url(#botanical-fern-shadow-b)">{data.companyJa}</text>
      <text x="81" y="17.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#228B22" opacity="0.7">{data.companyEn}</text>
      <line x1="40" y1="21" x2="81" y2="21" stroke="#228B22" strokeWidth="0.15" opacity="0.4" />
      <text x="81" y="27" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5D7A5D">{data.tel}</text>
      <text x="81" y="31" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5D7A5D">{data.email}</text>
      <text x="81" y="35" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5D7A5D">{data.website}</text>
      <line x1="40" y1="38.5" x2="81" y2="38.5" stroke="#228B22" strokeWidth="0.15" opacity="0.4" />
      <text x="81" y="44" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#8BAA8B">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 2. LOTUS (蓮) — Sacred lotus blossom
// Layered petals with radial gradients and soft watercolor bleed
// ============================================================
const lotusTemplate: TemplateDefinition = {
  id: 'botanical-lotus',
  name: 'LOTUS',
  nameJa: '蓮',
  category: 'botanical',
  designer: 'Botanical Studio',
  description: '蓮の花弁。水面から立ち上がる聖なる美。',
  accentColor: '#E8A0BF',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="botanical-lotus-glow" cx="85%" cy="85%" r="50%">
          <stop offset="0%" stopColor="#F8E0EC" />
          <stop offset="100%" stopColor="#FFF8F0" />
        </radialGradient>
        <filter id="botanical-lotus-paper">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="botanical-lotus-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.06" dy="0.1" />
          <feFlood floodColor="#5D4037" floodOpacity="0.05" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="botanical-lotus-petal" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#F0C0D8" />
          <stop offset="60%" stopColor="#E8A0BF" />
          <stop offset="100%" stopColor="#D4899A" />
        </radialGradient>
        <filter id="botanical-lotus-wc">
          <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" result="warp" />
          <feDisplacementMap in="SourceGraphic" in2="warp" scale="1.2" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <clipPath id="botanical-lotus-clip"><rect width="91" height="55" /></clipPath>
      </defs>
      <rect width="91" height="55" fill="url(#botanical-lotus-glow)" />
      <rect width="91" height="55" filter="url(#botanical-lotus-paper)" opacity="0.05" fill="#A08888" />
      <g clipPath="url(#botanical-lotus-clip)" filter="url(#botanical-lotus-wc)" opacity="0.15">
        <ellipse cx="82" cy="50" rx="8" ry="16" fill="none" stroke="url(#botanical-lotus-petal)" strokeWidth="0.3" transform="rotate(-15,82,50)" />
        <ellipse cx="82" cy="50" rx="8" ry="16" fill="none" stroke="url(#botanical-lotus-petal)" strokeWidth="0.3" transform="rotate(15,82,50)" />
        <ellipse cx="82" cy="50" rx="8" ry="16" fill="none" stroke="url(#botanical-lotus-petal)" strokeWidth="0.3" transform="rotate(0,82,50)" />
        <ellipse cx="82" cy="50" rx="7" ry="14" fill="none" stroke="#D4899A" strokeWidth="0.25" transform="rotate(-30,82,50)" />
        <ellipse cx="82" cy="50" rx="7" ry="14" fill="none" stroke="#D4899A" strokeWidth="0.25" transform="rotate(30,82,50)" />
        <ellipse cx="82" cy="50" rx="6" ry="12" fill="none" stroke="#C07888" strokeWidth="0.2" transform="rotate(-45,82,50)" />
        <ellipse cx="82" cy="50" rx="6" ry="12" fill="none" stroke="#C07888" strokeWidth="0.2" transform="rotate(45,82,50)" />
        <circle cx="82" cy="50" r="3" fill="none" stroke="#E8A0BF" strokeWidth="0.4" />
        {/* Petal vein lines */}
        <line x1="82" y1="50" x2="82" y2="34" stroke="#E8A0BF" strokeWidth="0.08" opacity="0.6" />
        <line x1="82" y1="50" x2="74" y2="38" stroke="#E8A0BF" strokeWidth="0.06" opacity="0.4" />
        <line x1="82" y1="50" x2="90" y2="38" stroke="#E8A0BF" strokeWidth="0.06" opacity="0.4" />
      </g>
      {/* Watercolor wash */}
      <circle cx="82" cy="50" r="15" fill="#E8A0BF" opacity="0.03" />
      <circle cx="75" cy="45" r="8" fill="#D4899A" opacity="0.02" />
      <text x="10" y="19" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="6" letterSpacing="0.8" fill="#5D4037" filter="url(#botanical-lotus-shadow)">{data.nameJa}</text>
      <text x="10" y="26" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2.2" letterSpacing="0.4" fill="#D4899A">{data.nameEn}</text>
      <text x="10" y="34" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#A0887A">{data.titleJa}</text>
      <text x="10" y="41" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#C0A898">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="75" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="botanical-lotus-glow-b" cx="15%" cy="15%" r="55%">
          <stop offset="0%" stopColor="#F8E0EC" />
          <stop offset="100%" stopColor="#FFF8F0" />
        </radialGradient>
        <filter id="botanical-lotus-paper-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="botanical-lotus-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.06" dy="0.1" />
          <feFlood floodColor="#5D4037" floodOpacity="0.05" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="botanical-lotus-wc-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" result="warp" />
          <feDisplacementMap in="SourceGraphic" in2="warp" scale="1.2" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <clipPath id="botanical-lotus-clip-b"><rect width="91" height="55" /></clipPath>
      </defs>
      <rect width="91" height="55" fill="url(#botanical-lotus-glow-b)" />
      <rect width="91" height="55" filter="url(#botanical-lotus-paper-b)" opacity="0.05" fill="#A08888" />
      <g clipPath="url(#botanical-lotus-clip-b)" filter="url(#botanical-lotus-wc-b)" opacity="0.1">
        <ellipse cx="10" cy="5" rx="7" ry="14" fill="none" stroke="#E8A0BF" strokeWidth="0.3" transform="rotate(15,10,5)" />
        <ellipse cx="10" cy="5" rx="7" ry="14" fill="none" stroke="#E8A0BF" strokeWidth="0.3" transform="rotate(-15,10,5)" />
        <ellipse cx="10" cy="5" rx="6" ry="12" fill="none" stroke="#E8A0BF" strokeWidth="0.25" transform="rotate(30,10,5)" />
        <ellipse cx="10" cy="5" rx="6" ry="12" fill="none" stroke="#E8A0BF" strokeWidth="0.25" transform="rotate(-30,10,5)" />
        <circle cx="10" cy="5" r="2.5" fill="none" stroke="#E8A0BF" strokeWidth="0.3" />
      </g>
      {data.logo && <image href={data.logo} x="41.5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text x="45.5" y="13" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#5D4037" filter="url(#botanical-lotus-shadow-b)">{data.companyJa}</text>
      <text x="45.5" y="17.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#D4899A">{data.companyEn}</text>
      <line x1="25" y1="21" x2="66" y2="21" stroke="#E8A0BF" strokeWidth="0.15" opacity="0.4" />
      <text x="45.5" y="27" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#8A7060">{data.tel}</text>
      <text x="45.5" y="31" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#8A7060">{data.email}</text>
      <text x="45.5" y="35" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#8A7060">{data.website}</text>
      <line x1="25" y1="38.5" x2="66" y2="38.5" stroke="#E8A0BF" strokeWidth="0.15" opacity="0.4" />
      <text x="45.5" y="44" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#C0A898">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 3. BAMBOO (竹) — Vertical bamboo stalks
// Node-segmented stalks with gradient fills and leaf details
// ============================================================
const bambooTemplate: TemplateDefinition = {
  id: 'botanical-bamboo',
  name: 'BAMBOO',
  nameJa: '竹',
  category: 'botanical',
  designer: 'Botanical Studio',
  description: '竹林の静寂。真っ直ぐに伸びる緑の柱。',
  accentColor: '#4CAF50',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="botanical-bamboo-bg" x1="0" y1="0" x2="1" y2="0.5">
          <stop offset="0%" stopColor="#F5F0E8" />
          <stop offset="100%" stopColor="#EDE8DF" />
        </linearGradient>
        <filter id="botanical-bamboo-paper">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="botanical-bamboo-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.06" dy="0.1" />
          <feFlood floodColor="#1A3A1A" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="botanical-bamboo-stalk" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#388E3C" />
          <stop offset="40%" stopColor="#4CAF50" />
          <stop offset="100%" stopColor="#388E3C" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#botanical-bamboo-bg)" />
      <rect width="91" height="55" filter="url(#botanical-bamboo-paper)" opacity="0.05" fill="#8B8B78" />
      {/* Bamboo stalks with gradient fills */}
      <rect x="70" y="0" width="1.8" height="55" fill="url(#botanical-bamboo-stalk)" opacity="0.12" rx="0.5" />
      <rect x="70" y="12" width="1.8" height="0.5" fill="#2E7D32" opacity="0.18" />
      <rect x="70" y="28" width="1.8" height="0.5" fill="#2E7D32" opacity="0.18" />
      <rect x="70" y="44" width="1.8" height="0.5" fill="#2E7D32" opacity="0.18" />
      <rect x="76" y="0" width="1.2" height="55" fill="#4CAF50" opacity="0.08" rx="0.3" />
      <rect x="76" y="18" width="1.2" height="0.4" fill="#388E3C" opacity="0.12" />
      <rect x="76" y="36" width="1.2" height="0.4" fill="#388E3C" opacity="0.12" />
      <rect x="81" y="0" width="2.2" height="55" fill="url(#botanical-bamboo-stalk)" opacity="0.15" rx="0.6" />
      <rect x="81" y="8" width="2.2" height="0.6" fill="#2E7D32" opacity="0.2" />
      <rect x="81" y="22" width="2.2" height="0.6" fill="#2E7D32" opacity="0.2" />
      <rect x="81" y="38" width="2.2" height="0.6" fill="#2E7D32" opacity="0.2" />
      {/* Leaf sprouts at nodes */}
      <path d="M71.8,12 Q74,9 76,11" fill="none" stroke="#4CAF50" strokeWidth="0.2" opacity="0.2" />
      <path d="M83.2,22 Q86,19 88,21" fill="none" stroke="#4CAF50" strokeWidth="0.2" opacity="0.2" />
      <path d="M71.8,28 Q68,26 66.5,28" fill="none" stroke="#4CAF50" strokeWidth="0.15" opacity="0.15" />
      {/* Tiny bamboo leaf shapes */}
      <path d="M85,19 Q87,17 89,18.5 Q87,20 85,19Z" fill="#4CAF50" opacity="0.08" />
      <path d="M68,10 Q66,8 64,9.5 Q66,11 68,10Z" fill="#4CAF50" opacity="0.06" />
      <text x="10" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="6.5" letterSpacing="0.5" fill="#2E4A2E" filter="url(#botanical-bamboo-shadow)">{data.nameJa}</text>
      <text x="10" y="27" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.5" fill="#4CAF50" opacity="0.8">{data.nameEn}</text>
      <text x="10" y="35" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#6B8B6B">{data.titleJa}</text>
      <text x="10" y="42" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#8BAA8B">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="75" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="botanical-bamboo-bg-b" x1="1" y1="0" x2="0" y2="0.5">
          <stop offset="0%" stopColor="#F5F0E8" />
          <stop offset="100%" stopColor="#EDE8DF" />
        </linearGradient>
        <filter id="botanical-bamboo-paper-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="botanical-bamboo-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.06" dy="0.1" />
          <feFlood floodColor="#1A3A1A" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="botanical-bamboo-stalk-b" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#388E3C" />
          <stop offset="50%" stopColor="#4CAF50" />
          <stop offset="100%" stopColor="#388E3C" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#botanical-bamboo-bg-b)" />
      <rect width="91" height="55" filter="url(#botanical-bamboo-paper-b)" opacity="0.05" fill="#8B8B78" />
      <rect x="5" y="0" width="2" height="55" fill="url(#botanical-bamboo-stalk-b)" opacity="0.1" rx="0.5" />
      <rect x="5" y="15" width="2" height="0.4" fill="#2E7D32" opacity="0.14" />
      <rect x="5" y="35" width="2" height="0.4" fill="#2E7D32" opacity="0.14" />
      <rect x="10" y="0" width="1.3" height="55" fill="#4CAF50" opacity="0.07" rx="0.3" />
      <rect x="10" y="22" width="1.3" height="0.3" fill="#388E3C" opacity="0.1" />
      {data.logo && <image href={data.logo} x="41.5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text x="20" y="13" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#2E4A2E" filter="url(#botanical-bamboo-shadow-b)">{data.companyJa}</text>
      <text x="20" y="17.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#4CAF50" opacity="0.7">{data.companyEn}</text>
      <line x1="20" y1="21" x2="80" y2="21" stroke="#4CAF50" strokeWidth="0.1" opacity="0.3" />
      <text x="20" y="27" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5D7A5D">{data.tel}</text>
      <text x="20" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5D7A5D">{data.email}</text>
      <text x="20" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5D7A5D">{data.website}</text>
      <line x1="20" y1="38.5" x2="80" y2="38.5" stroke="#4CAF50" strokeWidth="0.1" opacity="0.3" />
      <text x="20" y="44" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#8BAA8B">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 4. SAKURA (桜) — Cherry blossom petals
// Scattered five-petal flowers with gradient pink hues
// ============================================================
const sakuraTemplate: TemplateDefinition = {
  id: 'botanical-sakura',
  name: 'SAKURA',
  nameJa: '桜',
  category: 'botanical',
  designer: 'Botanical Studio',
  description: '桜吹雪。風に舞う花びらの儚さ。',
  accentColor: '#FFB7C5',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="botanical-sakura-bg" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#FFF5F7" />
          <stop offset="60%" stopColor="#FFF0F3" />
          <stop offset="100%" stopColor="#FFE8EE" />
        </linearGradient>
        <filter id="botanical-sakura-paper">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="botanical-sakura-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.06" dy="0.1" />
          <feFlood floodColor="#5D4037" floodOpacity="0.05" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="botanical-sakura-petal" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFCDD7" />
          <stop offset="100%" stopColor="#FFB7C5" />
        </radialGradient>
        <filter id="botanical-sakura-wc">
          <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" result="warp" />
          <feDisplacementMap in="SourceGraphic" in2="warp" scale="1" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <clipPath id="botanical-sakura-clip"><rect width="91" height="55" /></clipPath>
      </defs>
      <rect width="91" height="55" fill="url(#botanical-sakura-bg)" />
      <rect width="91" height="55" filter="url(#botanical-sakura-paper)" opacity="0.04" fill="#AA8888" />
      <g clipPath="url(#botanical-sakura-clip)" filter="url(#botanical-sakura-wc)" opacity="0.25">
        {/* Falling petals */}
        <path d="M75,8 Q77,5 79,8 Q77,10 75,8Z" fill="url(#botanical-sakura-petal)" />
        <path d="M82,15 Q84,12 86,15 Q84,17 82,15Z" fill="#FFB7C5" opacity="0.7" />
        <path d="M68,12 Q70,9 72,12 Q70,14 68,12Z" fill="#FFCDD7" opacity="0.5" />
        <path d="M85,25 Q87,22 89,25 Q87,27 85,25Z" fill="#FFB7C5" opacity="0.4" />
        <path d="M72,42 Q74,39 76,42 Q74,44 72,42Z" fill="#FFCDD7" opacity="0.6" />
        <path d="M80,48 Q82,45 84,48 Q82,50 80,48Z" fill="#FFB7C5" opacity="0.3" />
        {/* Full 5-petal flower with center dot */}
        <g transform="translate(78,10)">
          <ellipse cx="0" cy="-3" rx="1" ry="2.5" fill="#FFB7C5" opacity="0.6" />
          <ellipse cx="2.85" cy="-0.93" rx="1" ry="2.5" fill="#FFB7C5" opacity="0.6" transform="rotate(72,0,0)" />
          <ellipse cx="1.76" cy="2.43" rx="1" ry="2.5" fill="#FFB7C5" opacity="0.6" transform="rotate(144,0,0)" />
          <ellipse cx="-1.76" cy="2.43" rx="1" ry="2.5" fill="#FFB7C5" opacity="0.6" transform="rotate(216,0,0)" />
          <ellipse cx="-2.85" cy="-0.93" rx="1" ry="2.5" fill="#FFB7C5" opacity="0.6" transform="rotate(288,0,0)" />
          <circle cx="0" cy="0" r="0.6" fill="#C97A88" opacity="0.5" />
        </g>
        {/* Stamen dots */}
        <circle cx="78" cy="10" r="0.2" fill="#DAA520" opacity="0.3" />
        <circle cx="77.5" cy="9.5" r="0.15" fill="#DAA520" opacity="0.25" />
      </g>
      {/* Soft watercolor wash */}
      <circle cx="80" cy="12" r="10" fill="#FFB7C5" opacity="0.02" />
      <text x="10" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="6" letterSpacing="1" fill="#5D4037" filter="url(#botanical-sakura-shadow)">{data.nameJa}</text>
      <text x="10" y="29" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.5" fill="#C97A88">{data.nameEn}</text>
      <text x="10" y="37" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#A08878">{data.titleJa}</text>
      <text x="10" y="44" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#C0A898">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="75" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="botanical-sakura-bg-b" x1="0.5" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#FFF5F7" />
          <stop offset="100%" stopColor="#FFE8EE" />
        </linearGradient>
        <filter id="botanical-sakura-paper-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="botanical-sakura-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.06" dy="0.1" />
          <feFlood floodColor="#5D4037" floodOpacity="0.05" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="botanical-sakura-wc-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" result="warp" />
          <feDisplacementMap in="SourceGraphic" in2="warp" scale="1" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#botanical-sakura-bg-b)" />
      <rect width="91" height="55" filter="url(#botanical-sakura-paper-b)" opacity="0.04" fill="#AA8888" />
      <g filter="url(#botanical-sakura-wc-b)" opacity="0.15">
        <path d="M8,45 Q10,42 12,45 Q10,47 8,45Z" fill="#FFB7C5" />
        <path d="M15,50 Q17,47 19,50 Q17,52 15,50Z" fill="#FFCDD7" />
        <path d="M5,38 Q7,35 9,38 Q7,40 5,38Z" fill="#FFB7C5" opacity="0.6" />
        <circle cx="10" cy="46" r="0.15" fill="#DAA520" opacity="0.2" />
      </g>
      {data.logo && <image href={data.logo} x="41.5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text x="45.5" y="12" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#5D4037" filter="url(#botanical-sakura-shadow-b)">{data.companyJa}</text>
      <text x="45.5" y="16.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#C97A88">{data.companyEn}</text>
      <line x1="20" y1="20" x2="71" y2="20" stroke="#FFB7C5" strokeWidth="0.15" opacity="0.4" />
      <text x="45.5" y="26" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#8A7060">{data.tel}</text>
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#8A7060">{data.email}</text>
      <text x="45.5" y="34" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#8A7060">{data.website}</text>
      <line x1="20" y1="37.5" x2="71" y2="37.5" stroke="#FFB7C5" strokeWidth="0.15" opacity="0.4" />
      <text x="45.5" y="43" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#C0A898">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 5. IVY (蔦) — Climbing ivy vine pattern
// Trailing vine with heart-shaped leaves and paper texture
// ============================================================
const ivyTemplate: TemplateDefinition = {
  id: 'botanical-ivy',
  name: 'IVY',
  nameJa: '蔦',
  category: 'botanical',
  designer: 'Botanical Studio',
  description: '蔦が這う。壁を覆い尽くす生命の意志。',
  accentColor: '#228B22',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="botanical-ivy-bg" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#F8F5EF" />
          <stop offset="100%" stopColor="#F0EDE5" />
        </linearGradient>
        <filter id="botanical-ivy-paper">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="5" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="botanical-ivy-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.06" dy="0.1" />
          <feFlood floodColor="#1A3A1A" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="botanical-ivy-vine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1B6B1B" />
          <stop offset="100%" stopColor="#228B22" />
        </linearGradient>
        <clipPath id="botanical-ivy-clip"><rect width="91" height="55" /></clipPath>
      </defs>
      <rect width="91" height="55" fill="url(#botanical-ivy-bg)" />
      <rect width="91" height="55" filter="url(#botanical-ivy-paper)" opacity="0.05" fill="#8B8B7A" />
      <g clipPath="url(#botanical-ivy-clip)" opacity="0.18">
        <path d="M88,55 Q86,45 87,38 Q89,30 86,22 Q84,15 87,8 Q88,3 86,0" fill="none" stroke="url(#botanical-ivy-vine)" strokeWidth="0.4" />
        {/* Heart-shaped ivy leaves */}
        <path d="M87,38 L83,36 L85,33 Z" fill="#228B22" opacity="0.6" />
        <path d="M86,22 L82,24 L83,20 Z" fill="#228B22" opacity="0.5" />
        <path d="M87,8 L83,10 L84,6 Z" fill="#228B22" opacity="0.7" />
        <path d="M87,45 L84,47 L85,43 Z" fill="#228B22" opacity="0.4" />
        {/* Secondary tendril */}
        <path d="M87,30 Q82,28 78,30" fill="none" stroke="#228B22" strokeWidth="0.2" />
        <path d="M78,30 L75,28 L76,32 Z" fill="#228B22" opacity="0.3" />
        {/* Leaf vein details */}
        <line x1="85" y1="35.5" x2="84" y2="36" stroke="#1B6B1B" strokeWidth="0.05" opacity="0.4" />
        <line x1="84" y1="21" x2="83" y2="22" stroke="#1B6B1B" strokeWidth="0.05" opacity="0.3" />
        {/* Tiny curling tendrils */}
        <path d="M88,15 Q89,13 88.5,12" fill="none" stroke="#228B22" strokeWidth="0.1" opacity="0.3" />
        <path d="M85,40 Q83,39 83.5,38" fill="none" stroke="#228B22" strokeWidth="0.1" opacity="0.25" />
      </g>
      <text x="8" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="5.5" letterSpacing="0.5" fill="#2D4A2D" filter="url(#botanical-ivy-shadow)">{data.nameJa}</text>
      <text x="8" y="27" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="2" letterSpacing="0.4" fill="#228B22" opacity="0.8">{data.nameEn}</text>
      <text x="8" y="35" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#5D7A5D">{data.titleJa}</text>
      <text x="8" y="42" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#7B9A7B">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="75" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="botanical-ivy-bg-b" x1="0.7" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#F8F5EF" />
          <stop offset="100%" stopColor="#F0EDE5" />
        </linearGradient>
        <filter id="botanical-ivy-paper-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="5" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="botanical-ivy-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.06" dy="0.1" />
          <feFlood floodColor="#1A3A1A" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <clipPath id="botanical-ivy-clip-b"><rect width="91" height="55" /></clipPath>
      </defs>
      <rect width="91" height="55" fill="url(#botanical-ivy-bg-b)" />
      <rect width="91" height="55" filter="url(#botanical-ivy-paper-b)" opacity="0.05" fill="#8B8B7A" />
      <g clipPath="url(#botanical-ivy-clip-b)" opacity="0.12">
        <path d="M3,0 Q5,10 4,18 Q2,26 5,34 Q7,40 4,48 Q3,52 5,55" fill="none" stroke="#228B22" strokeWidth="0.4" />
        <path d="M4,18 L8,16 L6,20 Z" fill="#228B22" opacity="0.5" />
        <path d="M5,34 L9,32 L7,36 Z" fill="#228B22" opacity="0.4" />
        <path d="M4,48 L8,46 L6,50 Z" fill="#228B22" opacity="0.6" />
      </g>
      {data.logo && <image href={data.logo} x="41.5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text x="81" y="12" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#2D4A2D" filter="url(#botanical-ivy-shadow-b)">{data.companyJa}</text>
      <text x="81" y="16.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fill="#228B22" opacity="0.7">{data.companyEn}</text>
      <line x1="20" y1="20" x2="81" y2="20" stroke="#228B22" strokeWidth="0.1" opacity="0.3" />
      <text x="81" y="26" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5D7A5D">{data.tel}</text>
      <text x="81" y="30" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5D7A5D">{data.email}</text>
      <text x="81" y="34" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5D7A5D">{data.website}</text>
      <line x1="20" y1="37.5" x2="81" y2="37.5" stroke="#228B22" strokeWidth="0.1" opacity="0.3" />
      <text x="81" y="43" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#8BAA8B">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 6. PALM (椰) — Tropical palm frond silhouette
// Bold palm leaves with warm gradients and paper grain
// ============================================================
const palmTemplate: TemplateDefinition = {
  id: 'botanical-palm',
  name: 'PALM',
  nameJa: '椰',
  category: 'botanical',
  designer: 'Botanical Studio',
  description: '椰子の葉陰。南国の風が吹き抜ける。',
  accentColor: '#2E7D32',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="botanical-palm-bg" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#FFFEF5" />
          <stop offset="50%" stopColor="#FFF8E8" />
          <stop offset="100%" stopColor="#FFF2D8" />
        </linearGradient>
        <filter id="botanical-palm-paper">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="botanical-palm-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.06" dy="0.1" />
          <feFlood floodColor="#1A3A1A" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="botanical-palm-leaf" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1B5E20" />
          <stop offset="50%" stopColor="#2E7D32" />
          <stop offset="100%" stopColor="#43A047" />
        </linearGradient>
        <clipPath id="botanical-palm-clip"><rect width="91" height="55" /></clipPath>
      </defs>
      <rect width="91" height="55" fill="url(#botanical-palm-bg)" />
      <rect width="91" height="55" filter="url(#botanical-palm-paper)" opacity="0.05" fill="#8B8B70" />
      <g clipPath="url(#botanical-palm-clip)" opacity="0.12">
        <path d="M91,0 Q75,8 65,18" fill="none" stroke="url(#botanical-palm-leaf)" strokeWidth="0.6" />
        {/* Left-side frond leaflets */}
        <path d="M85,3 Q80,1 78,5 Q82,4 85,3Z" fill="#2E7D32" />
        <path d="M80,7 Q74,4 72,9 Q77,7 80,7Z" fill="#2E7D32" />
        <path d="M75,12 Q69,9 67,14 Q72,12 75,12Z" fill="#2E7D32" />
        <path d="M70,16 Q64,14 63,18 Q67,16 70,16Z" fill="#2E7D32" />
        {/* Right-side frond leaflets */}
        <path d="M88,2 Q86,7 84,5 Q87,4 88,2Z" fill="#2E7D32" opacity="0.8" />
        <path d="M83,5 Q82,10 79,9 Q82,7 83,5Z" fill="#2E7D32" opacity="0.8" />
        <path d="M78,10 Q77,15 74,13 Q77,12 78,10Z" fill="#2E7D32" opacity="0.8" />
        {/* Midrib veins */}
        <line x1="85" y1="3" x2="78" y2="5" stroke="#1B5E20" strokeWidth="0.06" opacity="0.5" />
        <line x1="80" y1="7" x2="72" y2="9" stroke="#1B5E20" strokeWidth="0.06" opacity="0.4" />
      </g>
      <text x="10" y="25" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="6" letterSpacing="0.5" fill="#2E4A2E" filter="url(#botanical-palm-shadow)">{data.nameJa}</text>
      <text x="10" y="32" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2.2" letterSpacing="0.4" fill="#2E7D32" opacity="0.8">{data.nameEn}</text>
      <text x="10" y="40" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#6B8E6B">{data.titleJa}</text>
      <text x="10" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#8BAA8B">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="75" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="botanical-palm-bg-b" x1="0.5" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#FFFEF5" />
          <stop offset="100%" stopColor="#FFF2D8" />
        </linearGradient>
        <filter id="botanical-palm-paper-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="botanical-palm-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.06" dy="0.1" />
          <feFlood floodColor="#1A3A1A" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <clipPath id="botanical-palm-clip-b"><rect width="91" height="55" /></clipPath>
      </defs>
      <rect width="91" height="55" fill="url(#botanical-palm-bg-b)" />
      <rect width="91" height="55" filter="url(#botanical-palm-paper-b)" opacity="0.05" fill="#8B8B70" />
      <g clipPath="url(#botanical-palm-clip-b)" opacity="0.08">
        <path d="M0,55 Q16,46 26,36" fill="none" stroke="#2E7D32" strokeWidth="0.6" />
        <path d="M6,52 Q12,54 14,49 Q10,50 6,52Z" fill="#2E7D32" />
        <path d="M12,47 Q18,50 20,44 Q15,46 12,47Z" fill="#2E7D32" />
        <path d="M18,42 Q24,44 25,38 Q21,40 18,42Z" fill="#2E7D32" />
      </g>
      {data.logo && <image href={data.logo} x="41.5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text x="10" y="13" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#2E4A2E" filter="url(#botanical-palm-shadow-b)">{data.companyJa}</text>
      <text x="10" y="17.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fill="#2E7D32" opacity="0.7">{data.companyEn}</text>
      <line x1="10" y1="21" x2="81" y2="21" stroke="#2E7D32" strokeWidth="0.1" opacity="0.3" />
      <text x="10" y="27" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5D7A5D">{data.tel}</text>
      <text x="10" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5D7A5D">{data.email}</text>
      <text x="10" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5D7A5D">{data.website}</text>
      <line x1="10" y1="38.5" x2="81" y2="38.5" stroke="#2E7D32" strokeWidth="0.1" opacity="0.3" />
      <text x="10" y="44" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#8BAA8B">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 7. HERB (薬草) — Medicinal herb garden layout
// Botanical illustration style with double border frames
// ============================================================
const herbTemplate: TemplateDefinition = {
  id: 'botanical-herb',
  name: 'HERB',
  nameJa: '薬草',
  category: 'botanical',
  designer: 'Botanical Studio',
  description: '薬草図鑑。植物画のような精密な美しさ。',
  accentColor: '#5D4037',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="botanical-herb-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FAF6EE" />
          <stop offset="100%" stopColor="#F5F0E5" />
        </linearGradient>
        <filter id="botanical-herb-paper">
          <feTurbulence type="fractalNoise" baseFrequency="0.95" numOctaves="5" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="botanical-herb-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.06" dy="0.1" />
          <feFlood floodColor="#3E2723" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="botanical-herb-stem" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5D4037" />
          <stop offset="100%" stopColor="#795548" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#botanical-herb-bg)" />
      <rect width="91" height="55" filter="url(#botanical-herb-paper)" opacity="0.06" fill="#8B8070" />
      {/* Botanical illustration double border */}
      <rect x="4" y="4" width="83" height="47" fill="none" stroke="#D4C8B8" strokeWidth="0.2" />
      <rect x="5.5" y="5.5" width="80" height="44" fill="none" stroke="#E8DDD0" strokeWidth="0.1" />
      {/* Small herb sprig illustration */}
      <g opacity="0.25" transform="translate(68,8)">
        <line x1="0" y1="20" x2="0" y2="0" stroke="url(#botanical-herb-stem)" strokeWidth="0.3" />
        <ellipse cx="-2" cy="5" rx="2" ry="3.5" fill="none" stroke="#228B22" strokeWidth="0.2" transform="rotate(-20,-2,5)" />
        <ellipse cx="2" cy="8" rx="2" ry="3" fill="none" stroke="#228B22" strokeWidth="0.2" transform="rotate(15,2,8)" />
        <ellipse cx="-1.5" cy="12" rx="1.8" ry="3" fill="none" stroke="#228B22" strokeWidth="0.2" transform="rotate(-10,-1.5,12)" />
        <ellipse cx="1.5" cy="15" rx="1.5" ry="2.5" fill="none" stroke="#228B22" strokeWidth="0.2" transform="rotate(10,1.5,15)" />
        <ellipse cx="0" cy="2" rx="1.5" ry="2.8" fill="none" stroke="#228B22" strokeWidth="0.2" />
        {/* Leaf vein details */}
        <line x1="-2" y1="5" x2="-3" y2="4" stroke="#1B6B1B" strokeWidth="0.06" opacity="0.4" />
        <line x1="2" y1="8" x2="3" y2="7" stroke="#1B6B1B" strokeWidth="0.06" opacity="0.4" />
      </g>
      {/* Small corner decorative dot */}
      <circle cx="7" cy="7" r="0.4" fill="#D4C8B8" opacity="0.5" />
      <circle cx="84" cy="7" r="0.4" fill="#D4C8B8" opacity="0.5" />
      <circle cx="7" cy="48" r="0.4" fill="#D4C8B8" opacity="0.5" />
      <circle cx="84" cy="48" r="0.4" fill="#D4C8B8" opacity="0.5" />
      <text x="10" y="18" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="5.5" letterSpacing="0.5" fill="#5D4037" filter="url(#botanical-herb-shadow)">{data.nameJa}</text>
      <text x="10" y="25" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.5" fill="#8B6F5E">{data.nameEn}</text>
      <line x1="10" y1="29" x2="55" y2="29" stroke="#D4C8B8" strokeWidth="0.15" opacity="0.5" />
      <text x="10" y="35" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#8B7B6B">{data.titleJa}</text>
      <text x="10" y="42" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#A0907E">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="75" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="botanical-herb-bg-b" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#FAF6EE" />
          <stop offset="100%" stopColor="#F5F0E5" />
        </linearGradient>
        <filter id="botanical-herb-paper-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.95" numOctaves="5" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="botanical-herb-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.06" dy="0.1" />
          <feFlood floodColor="#3E2723" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#botanical-herb-bg-b)" />
      <rect width="91" height="55" filter="url(#botanical-herb-paper-b)" opacity="0.06" fill="#8B8070" />
      <rect x="4" y="4" width="83" height="47" fill="none" stroke="#D4C8B8" strokeWidth="0.2" />
      <rect x="5.5" y="5.5" width="80" height="44" fill="none" stroke="#E8DDD0" strokeWidth="0.1" />
      <g opacity="0.15" transform="translate(12,32)">
        <line x1="0" y1="14" x2="0" y2="0" stroke="#5D4037" strokeWidth="0.2" />
        <ellipse cx="-1.5" cy="3" rx="1.5" ry="2.5" fill="none" stroke="#228B22" strokeWidth="0.15" />
        <ellipse cx="1.5" cy="6" rx="1.5" ry="2.5" fill="none" stroke="#228B22" strokeWidth="0.15" />
        <ellipse cx="-1" cy="10" rx="1.2" ry="2" fill="none" stroke="#228B22" strokeWidth="0.15" />
      </g>
      <circle cx="7" cy="7" r="0.4" fill="#D4C8B8" opacity="0.5" />
      <circle cx="84" cy="7" r="0.4" fill="#D4C8B8" opacity="0.5" />
      <circle cx="7" cy="48" r="0.4" fill="#D4C8B8" opacity="0.5" />
      <circle cx="84" cy="48" r="0.4" fill="#D4C8B8" opacity="0.5" />
      {data.logo && <image href={data.logo} x="41.5" y="5.5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text x="45.5" y="13" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#5D4037" filter="url(#botanical-herb-shadow-b)">{data.companyJa}</text>
      <text x="45.5" y="17.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fill="#8B6F5E">{data.companyEn}</text>
      <line x1="20" y1="21" x2="71" y2="21" stroke="#D4C8B8" strokeWidth="0.15" opacity="0.5" />
      <text x="45.5" y="27" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#8B7B6B">{data.tel}</text>
      <text x="45.5" y="31" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#8B7B6B">{data.email}</text>
      <text x="45.5" y="35" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#8B7B6B">{data.website}</text>
      <line x1="20" y1="38.5" x2="71" y2="38.5" stroke="#D4C8B8" strokeWidth="0.15" opacity="0.5" />
      <text x="45.5" y="44" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#A0907E">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 8. GARDEN (庭) — Japanese garden composition
// Raked gravel patterns with stones and moss
// ============================================================
const gardenTemplate: TemplateDefinition = {
  id: 'botanical-garden',
  name: 'GARDEN',
  nameJa: '庭',
  category: 'botanical',
  designer: 'Botanical Studio',
  description: '枯山水の庭。砂紋と苔が織りなす静寂。',
  accentColor: '#4CAF50',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="botanical-garden-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F0EDE5" />
          <stop offset="60%" stopColor="#EBE7DD" />
          <stop offset="100%" stopColor="#E5E0D5" />
        </linearGradient>
        <filter id="botanical-garden-paper">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="botanical-garden-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.06" dy="0.1" />
          <feFlood floodColor="#3A3530" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="botanical-garden-stone" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#D8D0C0" />
          <stop offset="100%" stopColor="#B8B0A0" />
        </radialGradient>
        <pattern id="botanical-garden-gravel" width="91" height="1.5" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0.75" x2="91" y2="0.75" stroke="#8B8578" strokeWidth="0.15" opacity="0.1" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#botanical-garden-bg)" />
      <rect width="91" height="55" filter="url(#botanical-garden-paper)" opacity="0.06" fill="#8B8578" />
      {/* Raked gravel pattern in bottom area */}
      <rect x="0" y="40" width="91" height="15" fill="url(#botanical-garden-gravel)" />
      {/* Stone with gradient */}
      <ellipse cx="75" cy="46" rx="5" ry="3" fill="url(#botanical-garden-stone)" opacity="0.3" />
      <ellipse cx="75" cy="46" rx="4.5" ry="2.7" fill="none" stroke="#A09888" strokeWidth="0.1" opacity="0.2" />
      {/* Moss patches */}
      <circle cx="68" cy="48" r="2" fill="#4CAF50" opacity="0.08" />
      <circle cx="70" cy="46.5" r="1.5" fill="#4CAF50" opacity="0.06" />
      <circle cx="66" cy="47" r="0.8" fill="#388E3C" opacity="0.05" />
      {/* Tiny pebbles */}
      <circle cx="80" cy="50" r="0.6" fill="#C0B8A8" opacity="0.2" />
      <circle cx="82" cy="49" r="0.4" fill="#C0B8A8" opacity="0.15" />
      <text x="10" y="18" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="6" letterSpacing="1" fill="#3A3530" filter="url(#botanical-garden-shadow)">{data.nameJa}</text>
      <text x="10" y="25" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.4" fill="#6B8E6B">{data.nameEn}</text>
      <text x="10" y="33" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#8B8578">{data.titleJa}</text>
      <text x="10" y="39" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#A09A8E">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="75" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="botanical-garden-bg-b" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#F0EDE5" />
          <stop offset="100%" stopColor="#E5E0D5" />
        </linearGradient>
        <filter id="botanical-garden-paper-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="botanical-garden-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.06" dy="0.1" />
          <feFlood floodColor="#3A3530" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="botanical-garden-stone-b" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#D8D0C0" />
          <stop offset="100%" stopColor="#B8B0A0" />
        </radialGradient>
        <pattern id="botanical-garden-gravel-b" width="91" height="1.5" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0.75" x2="91" y2="0.75" stroke="#8B8578" strokeWidth="0.15" opacity="0.1" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#botanical-garden-bg-b)" />
      <rect width="91" height="55" filter="url(#botanical-garden-paper-b)" opacity="0.06" fill="#8B8578" />
      <rect x="0" y="0" width="91" height="10" fill="url(#botanical-garden-gravel-b)" />
      <ellipse cx="15" cy="6" rx="4" ry="2.5" fill="url(#botanical-garden-stone-b)" opacity="0.25" />
      <circle cx="22" cy="5" r="1.2" fill="#4CAF50" opacity="0.06" />
      {data.logo && <image href={data.logo} x="41.5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text x="81" y="17" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#3A3530" filter="url(#botanical-garden-shadow-b)">{data.companyJa}</text>
      <text x="81" y="21.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fill="#6B8E6B">{data.companyEn}</text>
      <line x1="40" y1="25" x2="81" y2="25" stroke="#C8C0B0" strokeWidth="0.15" opacity="0.4" />
      <text x="81" y="31" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#8B8578">{data.tel}</text>
      <text x="81" y="35" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#8B8578">{data.email}</text>
      <text x="81" y="39" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#8B8578">{data.website}</text>
      <line x1="40" y1="42" x2="81" y2="42" stroke="#C8C0B0" strokeWidth="0.15" opacity="0.4" />
      <text x="81" y="47.5" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#A09A8E">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 9. BONSAI (盆栽) — Miniature tree silhouette
// Asymmetric bonsai with foliage clouds and aged pot
// ============================================================
const bonsaiTemplate: TemplateDefinition = {
  id: 'botanical-bonsai',
  name: 'BONSAI',
  nameJa: '盆栽',
  category: 'botanical',
  designer: 'Botanical Studio',
  description: '盆栽の佇まい。小さな鉢に宿る大自然。',
  accentColor: '#5D4037',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="botanical-bonsai-bg" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#FBF8F2" />
          <stop offset="100%" stopColor="#F5F0E8" />
        </linearGradient>
        <filter id="botanical-bonsai-paper">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="botanical-bonsai-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.06" dy="0.1" />
          <feFlood floodColor="#3E2723" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="botanical-bonsai-trunk" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#4E342E" />
          <stop offset="50%" stopColor="#5D4037" />
          <stop offset="100%" stopColor="#4E342E" />
        </linearGradient>
        <radialGradient id="botanical-bonsai-foliage" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#2E7D32" />
          <stop offset="100%" stopColor="#1B5E20" />
        </radialGradient>
        <clipPath id="botanical-bonsai-clip"><rect width="91" height="55" /></clipPath>
      </defs>
      <rect width="91" height="55" fill="url(#botanical-bonsai-bg)" />
      <rect width="91" height="55" filter="url(#botanical-bonsai-paper)" opacity="0.05" fill="#8B8070" />
      <g clipPath="url(#botanical-bonsai-clip)" opacity="0.15">
        {/* Trunk */}
        <path d="M72,50 Q71,42 70,38 Q69,34 72,30" fill="none" stroke="url(#botanical-bonsai-trunk)" strokeWidth="0.6" />
        {/* Branches */}
        <path d="M72,30 Q68,26 64,25" fill="none" stroke="#5D4037" strokeWidth="0.4" />
        <path d="M72,30 Q76,24 80,22" fill="none" stroke="#5D4037" strokeWidth="0.3" />
        <path d="M70,35 Q66,32 62,33" fill="none" stroke="#5D4037" strokeWidth="0.3" />
        {/* Foliage clouds */}
        <ellipse cx="63" cy="23" rx="6" ry="4" fill="url(#botanical-bonsai-foliage)" opacity="0.4" />
        <ellipse cx="72" cy="20" rx="5" ry="3.5" fill="url(#botanical-bonsai-foliage)" opacity="0.35" />
        <ellipse cx="79" cy="21" rx="4" ry="3" fill="url(#botanical-bonsai-foliage)" opacity="0.3" />
        <ellipse cx="61" cy="31" rx="4" ry="3" fill="url(#botanical-bonsai-foliage)" opacity="0.3" />
        {/* Pot */}
        <path d="M66,50 L78,50 L76,53 L68,53 Z" fill="#5D4037" opacity="0.3" />
        <line x1="66" y1="50" x2="78" y2="50" stroke="#795548" strokeWidth="0.2" opacity="0.4" />
        {/* Tiny detail: exposed root */}
        <path d="M70,50 Q69,51 68,50" fill="none" stroke="#5D4037" strokeWidth="0.15" opacity="0.3" />
      </g>
      <text x="10" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="5.5" letterSpacing="0.5" fill="#3A3025" filter="url(#botanical-bonsai-shadow)">{data.nameJa}</text>
      <text x="10" y="27" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.4" fill="#5D4037" opacity="0.8">{data.nameEn}</text>
      <text x="10" y="35" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#7B6B5B">{data.titleJa}</text>
      <text x="10" y="42" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#A09080">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="75" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="botanical-bonsai-bg-b" x1="0.5" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#FBF8F2" />
          <stop offset="100%" stopColor="#F5F0E8" />
        </linearGradient>
        <filter id="botanical-bonsai-paper-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="botanical-bonsai-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.06" dy="0.1" />
          <feFlood floodColor="#3E2723" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <clipPath id="botanical-bonsai-clip-b"><rect width="91" height="55" /></clipPath>
      </defs>
      <rect width="91" height="55" fill="url(#botanical-bonsai-bg-b)" />
      <rect width="91" height="55" filter="url(#botanical-bonsai-paper-b)" opacity="0.05" fill="#8B8070" />
      <g clipPath="url(#botanical-bonsai-clip-b)" opacity="0.08">
        <path d="M15,48 Q14,42 15,38 Q16,35 14,32" fill="none" stroke="#5D4037" strokeWidth="0.4" />
        <ellipse cx="12" cy="30" rx="4" ry="3" fill="#228B22" opacity="0.4" />
        <ellipse cx="17" cy="29" rx="3" ry="2.5" fill="#228B22" opacity="0.3" />
        <path d="M11,48 L19,48 L18,50 L12,50 Z" fill="#5D4037" opacity="0.3" />
      </g>
      {data.logo && <image href={data.logo} x="41.5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text x="45.5" y="12" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#3A3025" filter="url(#botanical-bonsai-shadow-b)">{data.companyJa}</text>
      <text x="45.5" y="16.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fill="#5D4037" opacity="0.7">{data.companyEn}</text>
      <line x1="20" y1="20" x2="71" y2="20" stroke="#D4C8B8" strokeWidth="0.15" opacity="0.4" />
      <text x="45.5" y="26" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#7B6B5B">{data.tel}</text>
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#7B6B5B">{data.email}</text>
      <text x="45.5" y="34" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#7B6B5B">{data.website}</text>
      <line x1="20" y1="37.5" x2="71" y2="37.5" stroke="#D4C8B8" strokeWidth="0.15" opacity="0.4" />
      <text x="45.5" y="43" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#A09080">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 10. WISTERIA (藤花) — Cascading wisteria flowers
// Hanging clusters in purple/lavender with watercolor effect
// ============================================================
const wisteriaTemplate: TemplateDefinition = {
  id: 'botanical-wisteria',
  name: 'WISTERIA',
  nameJa: '藤花',
  category: 'botanical',
  designer: 'Botanical Studio',
  description: '藤の花房。紫の滝のように垂れ下がる優雅さ。',
  accentColor: '#9C27B0',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="botanical-wisteria-bg" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#FDF8FF" />
          <stop offset="50%" stopColor="#F8F0FC" />
          <stop offset="100%" stopColor="#F0E8F8" />
        </linearGradient>
        <filter id="botanical-wisteria-paper">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="botanical-wisteria-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.06" dy="0.1" />
          <feFlood floodColor="#4A2050" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="botanical-wisteria-cluster" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#CE93D8" />
          <stop offset="40%" stopColor="#BA68C8" />
          <stop offset="70%" stopColor="#AB47BC" />
          <stop offset="100%" stopColor="#9C27B0" />
        </linearGradient>
        <filter id="botanical-wisteria-wc">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" result="warp" />
          <feDisplacementMap in="SourceGraphic" in2="warp" scale="1" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <clipPath id="botanical-wisteria-clip"><rect width="91" height="55" /></clipPath>
      </defs>
      <rect width="91" height="55" fill="url(#botanical-wisteria-bg)" />
      <rect width="91" height="55" filter="url(#botanical-wisteria-paper)" opacity="0.04" fill="#9988AA" />
      <g clipPath="url(#botanical-wisteria-clip)" filter="url(#botanical-wisteria-wc)" opacity="0.2">
        {/* Vine at top */}
        <path d="M55,0 Q58,2 65,2 Q72,2 78,0" fill="none" stroke="#5D4037" strokeWidth="0.3" />
        {/* Hanging flower clusters */}
        <g transform="translate(60,2)">
          <ellipse cx="0" cy="4" rx="1.5" ry="2" fill="#CE93D8" />
          <ellipse cx="0" cy="7" rx="1.3" ry="1.8" fill="#BA68C8" />
          <ellipse cx="0" cy="10" rx="1.1" ry="1.5" fill="#AB47BC" />
          <ellipse cx="0" cy="12.5" rx="0.8" ry="1.2" fill="#9C27B0" />
          <ellipse cx="0" cy="14.5" rx="0.5" ry="0.8" fill="#9C27B0" />
        </g>
        <g transform="translate(68,1)">
          <ellipse cx="0" cy="3" rx="1.3" ry="1.8" fill="#CE93D8" />
          <ellipse cx="0" cy="6" rx="1.1" ry="1.5" fill="#BA68C8" />
          <ellipse cx="0" cy="8.5" rx="0.9" ry="1.2" fill="#AB47BC" />
          <ellipse cx="0" cy="10.5" rx="0.6" ry="0.8" fill="#9C27B0" />
        </g>
        <g transform="translate(74,0)">
          <ellipse cx="0" cy="3.5" rx="1.4" ry="1.9" fill="#CE93D8" />
          <ellipse cx="0" cy="6.5" rx="1.2" ry="1.6" fill="#BA68C8" />
          <ellipse cx="0" cy="9" rx="1" ry="1.3" fill="#AB47BC" />
          <ellipse cx="0" cy="11" rx="0.7" ry="1" fill="#9C27B0" />
          <ellipse cx="0" cy="12.5" rx="0.4" ry="0.6" fill="#9C27B0" />
        </g>
        {/* Leaves */}
        <path d="M57,1 Q54,4 56,6" fill="none" stroke="#4CAF50" strokeWidth="0.2" />
        <path d="M65,2 Q62,5 64,7" fill="none" stroke="#4CAF50" strokeWidth="0.2" />
        {/* Tiny bud details */}
        <circle cx="60" cy="17" r="0.3" fill="#9C27B0" opacity="0.3" />
        <circle cx="74" cy="13.5" r="0.25" fill="#9C27B0" opacity="0.25" />
      </g>
      {/* Watercolor wash */}
      <circle cx="67" cy="8" r="12" fill="#CE93D8" opacity="0.02" />
      <text x="10" y="25" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="6" letterSpacing="0.8" fill="#4A2050" filter="url(#botanical-wisteria-shadow)">{data.nameJa}</text>
      <text x="10" y="32" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.4" fill="#9C27B0" opacity="0.8">{data.nameEn}</text>
      <text x="10" y="40" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#8B6B9B">{data.titleJa}</text>
      <text x="10" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#A08BAA">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="75" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="botanical-wisteria-bg-b" x1="0.3" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#FDF8FF" />
          <stop offset="100%" stopColor="#F0E8F8" />
        </linearGradient>
        <filter id="botanical-wisteria-paper-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="botanical-wisteria-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.06" dy="0.1" />
          <feFlood floodColor="#4A2050" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="botanical-wisteria-wc-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" result="warp" />
          <feDisplacementMap in="SourceGraphic" in2="warp" scale="1" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#botanical-wisteria-bg-b)" />
      <rect width="91" height="55" filter="url(#botanical-wisteria-paper-b)" opacity="0.04" fill="#9988AA" />
      <g filter="url(#botanical-wisteria-wc-b)" opacity="0.12">
        <path d="M10,55 Q12,52 18,52 Q24,53 28,55" fill="none" stroke="#5D4037" strokeWidth="0.3" />
        <g transform="translate(14,48) scale(1,-1)">
          <ellipse cx="0" cy="3" rx="1.2" ry="1.5" fill="#CE93D8" />
          <ellipse cx="0" cy="5.5" rx="1" ry="1.2" fill="#BA68C8" />
          <ellipse cx="0" cy="7.5" rx="0.7" ry="0.9" fill="#AB47BC" />
        </g>
        <g transform="translate(22,49) scale(1,-1)">
          <ellipse cx="0" cy="3" rx="1" ry="1.3" fill="#CE93D8" />
          <ellipse cx="0" cy="5" rx="0.8" ry="1" fill="#BA68C8" />
        </g>
      </g>
      {data.logo && <image href={data.logo} x="41.5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text x="45.5" y="12" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#4A2050" filter="url(#botanical-wisteria-shadow-b)">{data.companyJa}</text>
      <text x="45.5" y="16.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fill="#9C27B0" opacity="0.7">{data.companyEn}</text>
      <line x1="20" y1="20" x2="71" y2="20" stroke="#CE93D8" strokeWidth="0.15" opacity="0.4" />
      <text x="45.5" y="26" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#7B5B8B">{data.tel}</text>
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#7B5B8B">{data.email}</text>
      <text x="45.5" y="34" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#7B5B8B">{data.website}</text>
      <line x1="20" y1="37.5" x2="71" y2="37.5" stroke="#CE93D8" strokeWidth="0.15" opacity="0.4" />
      <text x="45.5" y="43" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#A08BAA">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

export const botanicalTemplates: TemplateDefinition[] = [
  fernTemplate,
  lotusTemplate,
  bambooTemplate,
  sakuraTemplate,
  ivyTemplate,
  palmTemplate,
  herbTemplate,
  gardenTemplate,
  bonsaiTemplate,
  wisteriaTemplate,
];
