import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. FOREST (森) — Deep woodland greens with layered canopy
// ============================================================
const forestTemplate: TemplateDefinition = {
  id: 'nature-forest',
  name: 'FOREST',
  nameJa: '森',
  category: 'nature',
  designer: 'Forest Studio',
  description: '深い森の中、木漏れ日が名前を照らす。',
  accentColor: '#2D5016',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="nature-forest-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f2b06" />
          <stop offset="50%" stopColor="#1a3a0a" />
          <stop offset="100%" stopColor="#2D5016" />
        </linearGradient>
        <linearGradient id="nature-forest-light" x1="0.3" y1="0" x2="0.7" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="nature-forest-glow" cx="0.45" cy="0.1" r="0.6">
          <stop offset="0%" stopColor="#8bc34a" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#1a3a0a" stopOpacity="0" />
        </radialGradient>
        <filter id="nature-forest-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="nature-forest-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#nature-forest-bg)" />
      <rect width="91" height="55" fill="url(#nature-forest-glow)" />
      {/* Tree canopy silhouettes layered */}
      <ellipse cx="10" cy="-4" rx="18" ry="16" fill="#0a1f04" opacity="0.7" />
      <ellipse cx="35" cy="-6" rx="22" ry="18" fill="#0a1f04" opacity="0.5" />
      <ellipse cx="60" cy="-3" rx="20" ry="14" fill="#0f2b06" opacity="0.6" />
      <ellipse cx="85" cy="-2" rx="16" ry="12" fill="#0a1f04" opacity="0.5" />
      <ellipse cx="22" cy="-1" rx="12" ry="10" fill="#132e08" opacity="0.4" />
      {/* Light rays through canopy */}
      <polygon points="28,-5 33,55 26,55" fill="url(#nature-forest-light)" />
      <polygon points="50,-5 54,55 48,55" fill="url(#nature-forest-light)" opacity="0.7" />
      <polygon points="70,-5 73,55 68,55" fill="url(#nature-forest-light)" opacity="0.5" />
      {/* Ground moss and ferns */}
      <ellipse cx="8" cy="54" rx="14" ry="4" fill="#1a3a0a" opacity="0.5" />
      <ellipse cx="40" cy="55" rx="22" ry="5" fill="#132e08" opacity="0.4" />
      <ellipse cx="78" cy="54" rx="16" ry="4" fill="#1a3a0a" opacity="0.45" />
      {/* Firefly dots */}
      <circle cx="20" cy="18" r="0.3" fill="#d4e8c2" opacity="0.6" />
      <circle cx="72" cy="22" r="0.25" fill="#d4e8c2" opacity="0.5" />
      <circle cx="60" cy="38" r="0.2" fill="#d4e8c2" opacity="0.4" />
      {data.logo && <image href={data.logo} x="6" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="45.5" y="22" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6" letterSpacing="1" fill="#d4e8c2" filter="url(#nature-forest-shadow)">
        {data.nameJa}
      </text>
      <text x="45.5" y="29" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.4" fill="#8ab06a">
        {data.nameEn}
      </text>
      <line x1="30" y1="33" x2="61" y2="33" stroke="#6d9a4a" strokeWidth="0.12" opacity="0.5" />
      <text x="45.5" y="38" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#6d9a4a">
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="nature-forest-bg-back" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2D5016" />
          <stop offset="100%" stopColor="#0f2b06" />
        </linearGradient>
        <filter id="nature-forest-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="nature-forest-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#nature-forest-bg-back)" />
      {/* Subtle tree trunk lines */}
      <line x1="7" y1="0" x2="7" y2="55" stroke="#1a3a0a" strokeWidth="0.8" opacity="0.3" />
      <line x1="18" y1="0" x2="18" y2="55" stroke="#1a3a0a" strokeWidth="0.5" opacity="0.2" />
      <line x1="84" y1="0" x2="84" y2="55" stroke="#1a3a0a" strokeWidth="0.6" opacity="0.25" />
      <line x1="75" y1="0" x2="75" y2="55" stroke="#1a3a0a" strokeWidth="0.4" opacity="0.15" />
      {/* Ground moss at bottom */}
      <ellipse cx="25" cy="55" rx="18" ry="4" fill="#0a1f04" opacity="0.4" />
      <ellipse cx="65" cy="55" rx="20" ry="5" fill="#0a1f04" opacity="0.35" />
      {/* Firefly dots */}
      <circle cx="82" cy="14" r="0.2" fill="#d4e8c2" opacity="0.5" />
      <circle cx="10" cy="42" r="0.25" fill="#d4e8c2" opacity="0.4" />
      {data.logo && <image href={data.logo} x="38" y="3" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text x="45.5" y="15" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.2" letterSpacing="0.5" fill="#d4e8c2" filter="url(#nature-forest-shadow-b)">
        {data.companyJa}
      </text>
      <text x="45.5" y="19.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.3" fill="#8ab06a">
        {data.companyEn}
      </text>
      <text x="45.5" y="23.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#6d9a4a">
        {data.titleJa}
      </text>
      <line x1="25" y1="26" x2="66" y2="26" stroke="#6d9a4a" strokeWidth="0.12" opacity="0.4" />
      <text x="45.5" y="31" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#a8cc8e">
        {data.tel}
      </text>
      <text x="45.5" y="35" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#a8cc8e">
        {data.email}
      </text>
      <text x="45.5" y="39" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#a8cc8e">
        {data.website}
      </text>
      <line x1="25" y1="42" x2="66" y2="42" stroke="#6d9a4a" strokeWidth="0.12" opacity="0.4" />
      <text x="45.5" y="46.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#6d9a4a">
        〒{data.zipCode}
      </text>
      <text x="45.5" y="50.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#6d9a4a">
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 2. OCEAN (海) — Deep blue gradients with wave patterns
// ============================================================
const oceanTemplate: TemplateDefinition = {
  id: 'nature-ocean',
  name: 'OCEAN',
  nameJa: '海',
  category: 'nature',
  designer: 'Ocean Studio',
  description: '深海の静けさと波の律動が共存する。',
  accentColor: '#0A4B78',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="nature-ocean-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#041e30" />
          <stop offset="40%" stopColor="#0A4B78" />
          <stop offset="70%" stopColor="#0d3b5e" />
          <stop offset="100%" stopColor="#072840" />
        </linearGradient>
        <radialGradient id="nature-ocean-caustic" cx="0.6" cy="0.3" r="0.5">
          <stop offset="0%" stopColor="#1a8ad4" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#072840" stopOpacity="0" />
        </radialGradient>
        <filter id="nature-ocean-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="nature-ocean-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#nature-ocean-bg)" />
      <rect width="91" height="55" fill="url(#nature-ocean-caustic)" />
      {/* Wave patterns - multiple layers */}
      <path d="M0,36 Q8,32 16,36 T32,36 T48,36 T64,36 T80,36 T91,36" fill="none" stroke="#1a6da8" strokeWidth="0.4" opacity="0.4" />
      <path d="M0,39 Q8,35 16,39 T32,39 T48,39 T64,39 T80,39 T91,39" fill="none" stroke="#1a6da8" strokeWidth="0.3" opacity="0.35" />
      <path d="M0,42 Q8,38 16,42 T32,42 T48,42 T64,42 T80,42 T91,42" fill="none" stroke="#1a6da8" strokeWidth="0.25" opacity="0.3" />
      <path d="M0,45 Q8,41 16,45 T32,45 T48,45 T64,45 T80,45 T91,45" fill="none" stroke="#1a6da8" strokeWidth="0.2" opacity="0.25" />
      <path d="M0,48 Q8,44 16,48 T32,48 T48,48 T64,48 T80,48 T91,48" fill="none" stroke="#1a6da8" strokeWidth="0.15" opacity="0.2" />
      <path d="M0,51 Q8,47 16,51 T32,51 T48,51 T64,51 T80,51 T91,51" fill="none" stroke="#1a6da8" strokeWidth="0.12" opacity="0.15" />
      {/* Bubbles cluster */}
      <circle cx="76" cy="14" r="0.9" fill="none" stroke="#4da8da" strokeWidth="0.15" opacity="0.45" />
      <circle cx="79" cy="9" r="0.55" fill="none" stroke="#4da8da" strokeWidth="0.12" opacity="0.35" />
      <circle cx="74" cy="7" r="0.7" fill="none" stroke="#4da8da" strokeWidth="0.12" opacity="0.3" />
      <circle cx="81" cy="16" r="0.4" fill="none" stroke="#4da8da" strokeWidth="0.1" opacity="0.3" />
      {data.logo && <image href={data.logo} x="6" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text x="12" y="17" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6.5" letterSpacing="0.8" fill="#c8e0f0" filter="url(#nature-ocean-shadow)">
        {data.nameJa}
      </text>
      <text x="12" y="24" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.4" fill="#6aaed4">
        {data.nameEn}
      </text>
      <text x="12" y="30" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#4a8ab0">
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="nature-ocean-bg-back" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#0A4B78" />
          <stop offset="50%" stopColor="#0d3b5e" />
          <stop offset="100%" stopColor="#041e30" />
        </linearGradient>
        <filter id="nature-ocean-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="nature-ocean-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#nature-ocean-bg-back)" />
      {/* Subtle wave at top */}
      <path d="M0,5 Q12,2 24,5 T48,5 T72,5 T91,5 L91,0 L0,0 Z" fill="#041e30" opacity="0.4" />
      {/* Wave decorations at bottom */}
      <path d="M0,48 Q10,45 20,48 T40,48 T60,48 T80,48 T91,48" fill="none" stroke="#1a6da8" strokeWidth="0.2" opacity="0.2" />
      <path d="M0,51 Q10,48 20,51 T40,51 T60,51 T80,51 T91,51" fill="none" stroke="#1a6da8" strokeWidth="0.15" opacity="0.15" />
      {/* Bubble accents */}
      <circle cx="82" cy="10" r="0.4" fill="none" stroke="#4da8da" strokeWidth="0.1" opacity="0.3" />
      <circle cx="85" cy="7" r="0.25" fill="none" stroke="#4da8da" strokeWidth="0.08" opacity="0.25" />
      {data.logo && <image href={data.logo} x="76" y="4" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
      <text x="10" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.2" fill="#c8e0f0" filter="url(#nature-ocean-shadow-b)">
        {data.companyJa}
      </text>
      <text x="10" y="16.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#6aaed4">
        {data.companyEn}
      </text>
      <text x="10" y="20.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#4a8ab0">
        {data.titleJa}
      </text>
      <line x1="10" y1="23.5" x2="55" y2="23.5" stroke="#4a8ab0" strokeWidth="0.12" opacity="0.4" />
      <text x="10" y="28" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#8ec4e0">
        {data.tel}
      </text>
      <text x="10" y="32" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#8ec4e0">
        {data.email}
      </text>
      <text x="10" y="36" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#8ec4e0">
        {data.website}
      </text>
      <line x1="10" y1="39.5" x2="55" y2="39.5" stroke="#4a8ab0" strokeWidth="0.12" opacity="0.4" />
      <text x="10" y="44" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#6aaed4">
        〒{data.zipCode}
      </text>
      <text x="10" y="48" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#6aaed4">
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 3. STONE (石) — Earthy stone textures with mineral accents
// ============================================================
const stoneTemplate: TemplateDefinition = {
  id: 'nature-stone',
  name: 'STONE',
  nameJa: '石',
  category: 'nature',
  designer: 'Stone Studio',
  description: '河原の石のように丸く、温かく、確かな存在。',
  accentColor: '#7A6B5D',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="nature-stone-rad" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor="#a89e8e" />
          <stop offset="60%" stopColor="#9e8e7e" />
          <stop offset="100%" stopColor="#7A6B5D" />
        </radialGradient>
        <filter id="nature-stone-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="5" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="nature-stone-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#nature-stone-rad)" />
      {/* Stone texture - scattered shapes */}
      <circle cx="10" cy="7" r="7" fill="#8a7a6a" opacity="0.25" />
      <circle cx="80" cy="46" r="9" fill="#6a5a4a" opacity="0.18" />
      <circle cx="68" cy="8" r="5" fill="#8a7a6a" opacity="0.12" />
      <ellipse cx="28" cy="49" rx="12" ry="5" fill="#6a5a4a" opacity="0.15" />
      {/* Mineral vein lines */}
      <path d="M0,18 Q20,15 40,20 Q60,25 91,18" fill="none" stroke="#b0a090" strokeWidth="0.25" opacity="0.3" />
      <path d="M0,35 Q30,31 50,36 Q70,40 91,33" fill="none" stroke="#b0a090" strokeWidth="0.18" opacity="0.25" />
      <path d="M5,0 Q15,15 20,35 Q25,50 30,55" fill="none" stroke="#c0b0a0" strokeWidth="0.12" opacity="0.15" />
      {data.logo && <image href={data.logo} x="6" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text x="45.5" y="22" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="5.5" letterSpacing="0.6" fill="#f0e8de" filter="url(#nature-stone-shadow)">
        {data.nameJa}
      </text>
      <text x="45.5" y="29" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="2.2" letterSpacing="0.3" fill="#d8ccbc">
        {data.nameEn}
      </text>
      <line x1="30" y1="33" x2="61" y2="33" stroke="#b0a090" strokeWidth="0.12" opacity="0.4" />
      <text x="45.5" y="38" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#c0b0a0">
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="nature-stone-back-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7A6B5D" />
          <stop offset="50%" stopColor="#8a7a6a" />
          <stop offset="100%" stopColor="#7A6B5D" />
        </linearGradient>
        <filter id="nature-stone-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="5" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="nature-stone-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#nature-stone-back-bg)" />
      {/* Stone texture elements */}
      <ellipse cx="78" cy="7" rx="9" ry="5" fill="#6a5a4a" opacity="0.25" />
      <ellipse cx="12" cy="50" rx="11" ry="4" fill="#6a5a4a" opacity="0.2" />
      {/* Mineral veins */}
      <path d="M0,28 Q25,24 45,28 Q70,32 91,26" fill="none" stroke="#b0a090" strokeWidth="0.15" opacity="0.2" />
      <path d="M60,0 Q65,20 70,55" fill="none" stroke="#c0b0a0" strokeWidth="0.1" opacity="0.12" />
      {data.logo && <image href={data.logo} x="38" y="3" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.45" />}
      <text x="45.5" y="15" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.2" fill="#f0e8de" filter="url(#nature-stone-shadow-b)">
        {data.companyJa}
      </text>
      <text x="45.5" y="19.5" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#d8ccbc">
        {data.companyEn}
      </text>
      <text x="45.5" y="23.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#c0b0a0">
        {data.titleJa}
      </text>
      <line x1="28" y1="26" x2="63" y2="26" stroke="#b0a090" strokeWidth="0.12" opacity="0.35" />
      <text x="45.5" y="31" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#d0c4b4">
        {data.tel}
      </text>
      <text x="45.5" y="35" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#d0c4b4">
        {data.email}
      </text>
      <text x="45.5" y="39" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#d0c4b4">
        {data.website}
      </text>
      <line x1="28" y1="42" x2="63" y2="42" stroke="#b0a090" strokeWidth="0.12" opacity="0.35" />
      <text x="45.5" y="46.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#b0a090">
        〒{data.zipCode}
      </text>
      <text x="45.5" y="50.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#b0a090">
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 4. LEAF (葉) — Single leaf vein pattern, fresh greens
// ============================================================
const leafTemplate: TemplateDefinition = {
  id: 'nature-leaf',
  name: 'LEAF',
  nameJa: '葉',
  category: 'nature',
  designer: 'Leaf Studio',
  description: '一枚の葉脈が示す生命の設計図。',
  accentColor: '#3A7D44',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="nature-leaf-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e8f5e0" />
          <stop offset="50%" stopColor="#dcefd0" />
          <stop offset="100%" stopColor="#d0eac0" />
        </linearGradient>
        <radialGradient id="nature-leaf-glow" cx="0.3" cy="0.4" r="0.6">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#d0eac0" stopOpacity="0" />
        </radialGradient>
        <filter id="nature-leaf-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="nature-leaf-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#2a5d30" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#nature-leaf-bg)" />
      <rect width="91" height="55" fill="url(#nature-leaf-glow)" />
      {/* Main leaf vein - central spine */}
      <path d="M0,55 Q45,27 91,0" fill="none" stroke="#3A7D44" strokeWidth="0.45" opacity="0.2" />
      {/* Secondary veins branching left */}
      <path d="M8,55 Q28,38 45,27" fill="none" stroke="#3A7D44" strokeWidth="0.2" opacity="0.15" />
      <path d="M18,55 Q35,40 45,27" fill="none" stroke="#3A7D44" strokeWidth="0.15" opacity="0.12" />
      <path d="M30,55 Q40,42 45,27" fill="none" stroke="#3A7D44" strokeWidth="0.12" opacity="0.1" />
      {/* Secondary veins branching right */}
      <path d="M45,27 Q55,18 62,8" fill="none" stroke="#3A7D44" strokeWidth="0.15" opacity="0.12" />
      <path d="M45,27 Q62,17 78,4" fill="none" stroke="#3A7D44" strokeWidth="0.12" opacity="0.1" />
      <path d="M45,27 Q68,20 91,10" fill="none" stroke="#3A7D44" strokeWidth="0.12" opacity="0.1" />
      {/* Decorative leaf shape */}
      <ellipse cx="82" cy="5" rx="5" ry="2.5" fill="#3A7D44" opacity="0.06" transform="rotate(-30 82 5)" />
      {/* Dew drops */}
      <circle cx="20" cy="45" r="0.5" fill="#ffffff" opacity="0.3" />
      <circle cx="65" cy="12" r="0.35" fill="#ffffff" opacity="0.25" />
      {data.logo && <image href={data.logo} x="6" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text x="10" y="17" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6" letterSpacing="0.5" fill="#2a5d30" filter="url(#nature-leaf-shadow)">
        {data.nameJa}
      </text>
      <text x="10" y="24" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.3" fill="#5a9d60">
        {data.nameEn}
      </text>
      <text x="10" y="30" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#6aad70">
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="nature-leaf-bg-back" x1="1" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#e8f5e0" />
          <stop offset="100%" stopColor="#d0eac0" />
        </linearGradient>
        <filter id="nature-leaf-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="nature-leaf-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#2a5d30" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#nature-leaf-bg-back)" />
      {/* Mirror leaf veins on back */}
      <path d="M91,0 Q45,27 0,55" fill="none" stroke="#3A7D44" strokeWidth="0.35" opacity="0.1" />
      <path d="M91,15 Q55,30 30,55" fill="none" stroke="#3A7D44" strokeWidth="0.15" opacity="0.08" />
      <path d="M91,30 Q70,40 55,55" fill="none" stroke="#3A7D44" strokeWidth="0.12" opacity="0.06" />
      {/* Dew drops */}
      <circle cx="75" cy="10" r="0.4" fill="#ffffff" opacity="0.25" />
      <circle cx="15" cy="48" r="0.3" fill="#ffffff" opacity="0.2" />
      {data.logo && <image href={data.logo} x="73" y="3" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
      <text x="80" y="15" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.2" fill="#2a5d30" filter="url(#nature-leaf-shadow-b)">
        {data.companyJa}
      </text>
      <text x="80" y="19.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#5a9d60">
        {data.companyEn}
      </text>
      <text x="80" y="23.5" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#6aad70">
        {data.titleJa}
      </text>
      <line x1="35" y1="26" x2="80" y2="26" stroke="#3A7D44" strokeWidth="0.12" opacity="0.3" />
      <text x="80" y="31" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#4a8d50">
        {data.tel}
      </text>
      <text x="80" y="35" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#4a8d50">
        {data.email}
      </text>
      <text x="80" y="39" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#4a8d50">
        {data.website}
      </text>
      <line x1="35" y1="42" x2="80" y2="42" stroke="#3A7D44" strokeWidth="0.12" opacity="0.3" />
      <text x="80" y="46.5" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#6aad70">
        〒{data.zipCode}
      </text>
      <text x="80" y="50.5" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#6aad70">
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 5. SUNRISE (朝) — Warm dawn colors, radiating light
// ============================================================
const sunriseTemplate: TemplateDefinition = {
  id: 'nature-sunrise',
  name: 'SUNRISE',
  nameJa: '朝',
  category: 'nature',
  designer: 'Dawn Studio',
  description: '朝焼けの光が新しい一日を照らす。',
  accentColor: '#E8823A',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="nature-sunrise-bg" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#c0501a" />
          <stop offset="25%" stopColor="#E8823A" />
          <stop offset="50%" stopColor="#f0a050" />
          <stop offset="75%" stopColor="#f8c878" />
          <stop offset="100%" stopColor="#fde8b0" />
        </linearGradient>
        <radialGradient id="nature-sunrise-sun" cx="0.5" cy="0.85" r="0.5">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <filter id="nature-sunrise-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="nature-sunrise-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#4a1a00" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#nature-sunrise-bg)" />
      {/* Sun glow */}
      <circle cx="45.5" cy="48" r="22" fill="url(#nature-sunrise-sun)" />
      {/* Sun disc */}
      <circle cx="45.5" cy="48" r="7" fill="#ffffff" opacity="0.5" />
      <circle cx="45.5" cy="48" r="4" fill="#ffffff" opacity="0.3" />
      {/* Horizon line */}
      <line x1="0" y1="42" x2="91" y2="42" stroke="#ffffff" strokeWidth="0.2" opacity="0.45" />
      {/* Light rays */}
      <line x1="45.5" y1="42" x2="15" y2="0" stroke="#ffffff" strokeWidth="0.12" opacity="0.18" />
      <line x1="45.5" y1="42" x2="30" y2="0" stroke="#ffffff" strokeWidth="0.12" opacity="0.22" />
      <line x1="45.5" y1="42" x2="45" y2="0" stroke="#ffffff" strokeWidth="0.1" opacity="0.15" />
      <line x1="45.5" y1="42" x2="60" y2="0" stroke="#ffffff" strokeWidth="0.12" opacity="0.22" />
      <line x1="45.5" y1="42" x2="75" y2="0" stroke="#ffffff" strokeWidth="0.12" opacity="0.18" />
      {/* Cloud wisps */}
      <ellipse cx="20" cy="8" rx="10" ry="2" fill="#ffffff" opacity="0.1" />
      <ellipse cx="72" cy="12" rx="8" ry="1.5" fill="#ffffff" opacity="0.08" />
      {data.logo && <image href={data.logo} x="6" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text x="45.5" y="15" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6" letterSpacing="0.8" fill="#6d2e0a" filter="url(#nature-sunrise-shadow)">
        {data.nameJa}
      </text>
      <text x="45.5" y="22" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.4" fill="#8a4420">
        {data.nameEn}
      </text>
      <text x="45.5" y="28" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#9a5430">
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="nature-sunrise-bg-back" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fde8b0" />
          <stop offset="50%" stopColor="#f8c878" />
          <stop offset="100%" stopColor="#f0a050" />
        </linearGradient>
        <filter id="nature-sunrise-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="nature-sunrise-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#4a1a00" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#nature-sunrise-bg-back)" />
      {/* Subtle horizon band */}
      <line x1="0" y1="7" x2="91" y2="7" stroke="#E8823A" strokeWidth="0.15" opacity="0.3" />
      {/* Radiating light lines from top center */}
      <line x1="45.5" y1="0" x2="20" y2="55" stroke="#ffffff" strokeWidth="0.08" opacity="0.1" />
      <line x1="45.5" y1="0" x2="70" y2="55" stroke="#ffffff" strokeWidth="0.08" opacity="0.1" />
      {/* Cloud wisps */}
      <ellipse cx="25" cy="4" rx="8" ry="1.5" fill="#ffffff" opacity="0.08" />
      <ellipse cx="68" cy="3" rx="6" ry="1" fill="#ffffff" opacity="0.06" />
      {data.logo && <image href={data.logo} x="38" y="2" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
      <text x="45.5" y="14" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.2" fill="#6d2e0a" filter="url(#nature-sunrise-shadow-b)">
        {data.companyJa}
      </text>
      <text x="45.5" y="18.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#8a4420">
        {data.companyEn}
      </text>
      <text x="45.5" y="22.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#9a5430">
        {data.titleJa}
      </text>
      <line x1="25" y1="25.5" x2="66" y2="25.5" stroke="#9a5430" strokeWidth="0.12" opacity="0.4" />
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#7a3a18">
        {data.tel}
      </text>
      <text x="45.5" y="34" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#7a3a18">
        {data.email}
      </text>
      <text x="45.5" y="38" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#7a3a18">
        {data.website}
      </text>
      <line x1="25" y1="41" x2="66" y2="41" stroke="#9a5430" strokeWidth="0.12" opacity="0.4" />
      <text x="45.5" y="45.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#9a5430">
        〒{data.zipCode}
      </text>
      <text x="45.5" y="49.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#9a5430">
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 6. RIVER (川) — Flowing water lines, cool blues
// ============================================================
const riverTemplate: TemplateDefinition = {
  id: 'nature-river',
  name: 'RIVER',
  nameJa: '川',
  category: 'nature',
  designer: 'River Studio',
  description: '清流のように滑らかに流れる情報の川。',
  accentColor: '#2E86AB',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="nature-river-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e8f4fb" />
          <stop offset="50%" stopColor="#e0f0f8" />
          <stop offset="100%" stopColor="#c0dce8" />
        </linearGradient>
        <filter id="nature-river-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="nature-river-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#0a3050" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#nature-river-bg)" />
      {/* Flowing river curves - multiple layers */}
      <path d="M-5,8 C15,5 25,14 45,10 C65,6 75,15 96,12" fill="none" stroke="#2E86AB" strokeWidth="0.9" opacity="0.12" />
      <path d="M-5,12 C15,9 25,18 45,14 C65,10 75,19 96,16" fill="none" stroke="#2E86AB" strokeWidth="0.6" opacity="0.1" />
      <path d="M-5,16 C15,13 25,22 45,18 C65,14 75,23 96,20" fill="none" stroke="#2E86AB" strokeWidth="0.4" opacity="0.08" />
      {/* River pebbles */}
      <circle cx="18" cy="47" r="1.8" fill="#2E86AB" opacity="0.06" />
      <circle cx="30" cy="49" r="1.2" fill="#2E86AB" opacity="0.05" />
      <circle cx="58" cy="48" r="1.5" fill="#2E86AB" opacity="0.06" />
      <circle cx="72" cy="46" r="1" fill="#2E86AB" opacity="0.05" />
      <circle cx="45" cy="50" r="0.8" fill="#2E86AB" opacity="0.04" />
      {data.logo && <image href={data.logo} x="6" y="28" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text x="8" y="31" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6" letterSpacing="0.5" fill="#1a5570" filter="url(#nature-river-shadow)">
        {data.nameJa}
      </text>
      <text x="8" y="38" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.3" fill="#2E86AB">
        {data.nameEn}
      </text>
      <text x="8" y="44" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#5aaac8">
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="nature-river-bg-back" x1="1" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#e8f4fb" />
          <stop offset="100%" stopColor="#c0dce8" />
        </linearGradient>
        <filter id="nature-river-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="nature-river-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#0a3050" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#nature-river-bg-back)" />
      {/* Flowing curves on back - lower portion */}
      <path d="M-5,40 C15,37 25,45 45,42 C65,39 75,47 96,44" fill="none" stroke="#2E86AB" strokeWidth="0.5" opacity="0.1" />
      <path d="M-5,44 C15,41 25,49 45,46 C65,43 75,51 96,48" fill="none" stroke="#2E86AB" strokeWidth="0.35" opacity="0.08" />
      <path d="M-5,48 C15,45 25,53 45,50 C65,47 75,55 96,52" fill="none" stroke="#2E86AB" strokeWidth="0.25" opacity="0.06" />
      {/* Pebbles */}
      <circle cx="80" cy="48" r="1" fill="#2E86AB" opacity="0.05" />
      <circle cx="10" cy="50" r="0.8" fill="#2E86AB" opacity="0.04" />
      {data.logo && <image href={data.logo} x="76" y="3" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
      <text x="10" y="11" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.2" fill="#1a5570" filter="url(#nature-river-shadow-b)">
        {data.companyJa}
      </text>
      <text x="10" y="15.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#2E86AB">
        {data.companyEn}
      </text>
      <text x="10" y="19.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#5aaac8">
        {data.titleJa}
      </text>
      <path d="M10,22.5 C20,22 30,23 50,22.5" fill="none" stroke="#2E86AB" strokeWidth="0.12" opacity="0.3" />
      <text x="10" y="27" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#3a90b0">
        {data.tel}
      </text>
      <text x="10" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#3a90b0">
        {data.email}
      </text>
      <text x="10" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#3a90b0">
        {data.website}
      </text>
      <path d="M10,38 C20,37.5 30,38.5 50,38" fill="none" stroke="#2E86AB" strokeWidth="0.12" opacity="0.3" />
      <text x="10" y="42.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#5aaac8">
        〒{data.zipCode}
      </text>
      <text x="10" y="46.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#5aaac8">
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 7. MOUNTAIN (峰) — Triangular peaks, misty gradients
// ============================================================
const mountainTemplate: TemplateDefinition = {
  id: 'nature-mountain',
  name: 'MOUNTAIN',
  nameJa: '峰',
  category: 'nature',
  designer: 'Peak Studio',
  description: '連なる峰が静かな威厳を放つ。',
  accentColor: '#4A6670',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="nature-mountain-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b8c8d8" />
          <stop offset="40%" stopColor="#c8d8e8" />
          <stop offset="100%" stopColor="#e8eff5" />
        </linearGradient>
        <linearGradient id="nature-mountain-peak1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a5660" />
          <stop offset="100%" stopColor="#6a8690" />
        </linearGradient>
        <linearGradient id="nature-mountain-peak2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5a7680" />
          <stop offset="100%" stopColor="#7a96a0" />
        </linearGradient>
        <filter id="nature-mountain-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="nature-mountain-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#1a3040" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#nature-mountain-sky)" />
      {/* Far mountain range */}
      <polygon points="0,42 12,30 25,38 30,42" fill="url(#nature-mountain-peak2)" opacity="0.25" />
      <polygon points="62,42 75,27 88,37 91,40 91,42" fill="url(#nature-mountain-peak2)" opacity="0.2" />
      {/* Main mountain range */}
      <polygon points="0,55 18,28 35,42 50,24 68,38 85,30 91,35 91,55" fill="url(#nature-mountain-peak1)" opacity="0.45" />
      {/* Snow caps */}
      <polygon points="16,29 18,28 20,29.5" fill="#ffffff" opacity="0.65" />
      <polygon points="48,25 50,24 52,25.5" fill="#ffffff" opacity="0.65" />
      <polygon points="83,31 85,30 87,31.5" fill="#ffffff" opacity="0.5" />
      {/* Mist layers */}
      <rect x="0" y="44" width="91" height="11" fill="#e8eff5" opacity="0.5" />
      <ellipse cx="30" cy="44" rx="20" ry="3" fill="#e8eff5" opacity="0.3" />
      <ellipse cx="70" cy="42" rx="15" ry="2.5" fill="#e8eff5" opacity="0.25" />
      {data.logo && <image href={data.logo} x="6" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text x="45.5" y="14" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="5.5" letterSpacing="0.8" fill="#3a5660" filter="url(#nature-mountain-shadow)">
        {data.nameJa}
      </text>
      <text x="45.5" y="20" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.3" fill="#5a7680">
        {data.nameEn}
      </text>
      <text x="45.5" y="50" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#6a8690">
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="nature-mountain-back" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8eff5" />
          <stop offset="100%" stopColor="#c8d8e8" />
        </linearGradient>
        <filter id="nature-mountain-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="nature-mountain-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#1a3040" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#nature-mountain-back)" />
      {/* Distant peak silhouettes */}
      <polygon points="0,9 20,2 40,8 50,9" fill="#4A6670" opacity="0.08" />
      <polygon points="45,9 65,1 85,6 91,8 91,9" fill="#4A6670" opacity="0.06" />
      {/* Mist accent */}
      <ellipse cx="45" cy="9" rx="30" ry="2" fill="#c8d8e8" opacity="0.3" />
      {data.logo && <image href={data.logo} x="38" y="2" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
      <text x="45.5" y="15" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="2.2" fill="#3a5660" filter="url(#nature-mountain-shadow-b)">
        {data.companyJa}
      </text>
      <text x="45.5" y="19.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#5a7680">
        {data.companyEn}
      </text>
      <text x="45.5" y="23.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#6a8690">
        {data.titleJa}
      </text>
      <line x1="20" y1="26" x2="71" y2="26" stroke="#4A6670" strokeWidth="0.12" opacity="0.3" />
      <text x="45.5" y="31" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5a7680">
        {data.tel}
      </text>
      <text x="45.5" y="35" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5a7680">
        {data.email}
      </text>
      <text x="45.5" y="39" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5a7680">
        {data.website}
      </text>
      <line x1="20" y1="42" x2="71" y2="42" stroke="#4A6670" strokeWidth="0.12" opacity="0.3" />
      <text x="45.5" y="46.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#6a8690">
        〒{data.zipCode}
      </text>
      <text x="45.5" y="50.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#6a8690">
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 8. RAIN (雨) — Vertical rain lines, cool gray-blue palette
// ============================================================
const rainTemplate: TemplateDefinition = {
  id: 'nature-rain',
  name: 'RAIN',
  nameJa: '雨',
  category: 'nature',
  designer: 'Rain Studio',
  description: '静かに降り注ぐ雨の中、名前が浮かぶ。',
  accentColor: '#5B7B8A',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="nature-rain-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7a9aaa" />
          <stop offset="50%" stopColor="#8aaab8" />
          <stop offset="100%" stopColor="#6a8a98" />
        </linearGradient>
        <filter id="nature-rain-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="nature-rain-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.4" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#nature-rain-bg)" />
      {/* Rain drops - foreground layer */}
      <line x1="5" y1="0" x2="5" y2="9" stroke="#c8dce5" strokeWidth="0.15" opacity="0.4" />
      <line x1="12" y1="5" x2="12" y2="16" stroke="#c8dce5" strokeWidth="0.12" opacity="0.35" />
      <line x1="18" y1="2" x2="18" y2="11" stroke="#c8dce5" strokeWidth="0.15" opacity="0.3" />
      <line x1="25" y1="8" x2="25" y2="19" stroke="#c8dce5" strokeWidth="0.12" opacity="0.4" />
      <line x1="33" y1="0" x2="33" y2="13" stroke="#c8dce5" strokeWidth="0.15" opacity="0.35" />
      <line x1="40" y1="6" x2="40" y2="15" stroke="#c8dce5" strokeWidth="0.12" opacity="0.3" />
      <line x1="48" y1="3" x2="48" y2="14" stroke="#c8dce5" strokeWidth="0.15" opacity="0.4" />
      <line x1="55" y1="10" x2="55" y2="21" stroke="#c8dce5" strokeWidth="0.12" opacity="0.35" />
      <line x1="63" y1="0" x2="63" y2="10" stroke="#c8dce5" strokeWidth="0.15" opacity="0.3" />
      <line x1="70" y1="7" x2="70" y2="17" stroke="#c8dce5" strokeWidth="0.12" opacity="0.4" />
      <line x1="78" y1="1" x2="78" y2="12" stroke="#c8dce5" strokeWidth="0.15" opacity="0.35" />
      <line x1="85" y1="4" x2="85" y2="15" stroke="#c8dce5" strokeWidth="0.12" opacity="0.3" />
      {/* Background rain */}
      <line x1="8" y1="35" x2="8" y2="46" stroke="#c8dce5" strokeWidth="0.1" opacity="0.18" />
      <line x1="22" y1="40" x2="22" y2="51" stroke="#c8dce5" strokeWidth="0.1" opacity="0.18" />
      <line x1="38" y1="38" x2="38" y2="49" stroke="#c8dce5" strokeWidth="0.1" opacity="0.18" />
      <line x1="52" y1="42" x2="52" y2="53" stroke="#c8dce5" strokeWidth="0.1" opacity="0.18" />
      <line x1="68" y1="36" x2="68" y2="47" stroke="#c8dce5" strokeWidth="0.1" opacity="0.18" />
      <line x1="82" y1="40" x2="82" y2="51" stroke="#c8dce5" strokeWidth="0.1" opacity="0.18" />
      {/* Puddle ripples */}
      <ellipse cx="45" cy="52" rx="14" ry="1.8" fill="none" stroke="#c8dce5" strokeWidth="0.12" opacity="0.2" />
      <ellipse cx="45" cy="52" rx="9" ry="1.2" fill="none" stroke="#c8dce5" strokeWidth="0.1" opacity="0.15" />
      <ellipse cx="45" cy="52" rx="5" ry="0.7" fill="none" stroke="#c8dce5" strokeWidth="0.08" opacity="0.1" />
      {data.logo && <image href={data.logo} x="6" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.45" />}
      <text x="45.5" y="26" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="6" letterSpacing="0.8" fill="#ffffff" filter="url(#nature-rain-shadow)">
        {data.nameJa}
      </text>
      <text x="45.5" y="33" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.4" fill="#d8eaf0">
        {data.nameEn}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="nature-rain-bg-back" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#7a9aaa" />
          <stop offset="100%" stopColor="#6a8a98" />
        </linearGradient>
        <filter id="nature-rain-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="nature-rain-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#nature-rain-bg-back)" />
      {/* Rain drops on back */}
      <line x1="10" y1="0" x2="10" y2="8" stroke="#c8dce5" strokeWidth="0.12" opacity="0.22" />
      <line x1="25" y1="3" x2="25" y2="11" stroke="#c8dce5" strokeWidth="0.12" opacity="0.18" />
      <line x1="42" y1="1" x2="42" y2="9" stroke="#c8dce5" strokeWidth="0.12" opacity="0.22" />
      <line x1="58" y1="4" x2="58" y2="12" stroke="#c8dce5" strokeWidth="0.12" opacity="0.18" />
      <line x1="75" y1="0" x2="75" y2="8" stroke="#c8dce5" strokeWidth="0.12" opacity="0.22" />
      <line x1="88" y1="2" x2="88" y2="10" stroke="#c8dce5" strokeWidth="0.12" opacity="0.18" />
      {/* Puddle ripple at bottom */}
      <ellipse cx="70" cy="52" rx="10" ry="1.2" fill="none" stroke="#c8dce5" strokeWidth="0.1" opacity="0.15" />
      <ellipse cx="70" cy="52" rx="6" ry="0.8" fill="none" stroke="#c8dce5" strokeWidth="0.08" opacity="0.1" />
      {data.logo && <image href={data.logo} x="76" y="3" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
      <text x="45.5" y="14" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" fill="#ffffff" filter="url(#nature-rain-shadow-b)">
        {data.companyJa}
      </text>
      <text x="45.5" y="18.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#c8dce5">
        {data.companyEn}
      </text>
      <text x="45.5" y="22.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#a8c0d0">
        {data.titleJa}
      </text>
      <line x1="20" y1="25.5" x2="71" y2="25.5" stroke="#c8dce5" strokeWidth="0.1" opacity="0.25" />
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#d8eaf0">
        {data.tel}
      </text>
      <text x="45.5" y="34" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#d8eaf0">
        {data.email}
      </text>
      <text x="45.5" y="38" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#d8eaf0">
        {data.website}
      </text>
      <line x1="20" y1="41" x2="71" y2="41" stroke="#c8dce5" strokeWidth="0.1" opacity="0.25" />
      <text x="45.5" y="45.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#c8dce5">
        〒{data.zipCode}
      </text>
      <text x="45.5" y="49.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#c8dce5">
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 9. FIELD (野) — Open meadow, grass textures, warm green
// ============================================================
const fieldTemplate: TemplateDefinition = {
  id: 'nature-field',
  name: 'FIELD',
  nameJa: '野',
  category: 'nature',
  designer: 'Meadow Studio',
  description: '広がる野原に風が吹き抜ける開放感。',
  accentColor: '#6B8E23',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="nature-field-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a8c8e8" />
          <stop offset="40%" stopColor="#b8d8f0" />
          <stop offset="65%" stopColor="#d0e8f0" />
          <stop offset="100%" stopColor="#e0ecd0" />
        </linearGradient>
        <linearGradient id="nature-field-grass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8aae40" />
          <stop offset="100%" stopColor="#6B8E23" />
        </linearGradient>
        <filter id="nature-field-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="nature-field-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#1a3008" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#nature-field-sky)" />
      {/* Ground / grass area */}
      <rect x="0" y="34" width="91" height="21" fill="url(#nature-field-grass)" opacity="0.25" />
      <rect x="0" y="39" width="91" height="16" fill="#6B8E23" opacity="0.15" />
      {/* Grass blades */}
      <line x1="5" y1="34" x2="4" y2="29" stroke="#6B8E23" strokeWidth="0.2" opacity="0.25" />
      <line x1="7" y1="34" x2="8" y2="30" stroke="#6B8E23" strokeWidth="0.15" opacity="0.2" />
      <line x1="15" y1="34" x2="14" y2="28" stroke="#6B8E23" strokeWidth="0.2" opacity="0.25" />
      <line x1="22" y1="34" x2="23" y2="30" stroke="#6B8E23" strokeWidth="0.15" opacity="0.2" />
      <line x1="30" y1="34" x2="29" y2="29" stroke="#6B8E23" strokeWidth="0.2" opacity="0.25" />
      <line x1="38" y1="34" x2="39" y2="30" stroke="#6B8E23" strokeWidth="0.15" opacity="0.2" />
      <line x1="50" y1="34" x2="49" y2="28" stroke="#6B8E23" strokeWidth="0.2" opacity="0.25" />
      <line x1="60" y1="34" x2="61" y2="30" stroke="#6B8E23" strokeWidth="0.15" opacity="0.2" />
      <line x1="70" y1="34" x2="69" y2="29" stroke="#6B8E23" strokeWidth="0.2" opacity="0.25" />
      <line x1="80" y1="34" x2="81" y2="30" stroke="#6B8E23" strokeWidth="0.15" opacity="0.2" />
      <line x1="88" y1="34" x2="87" y2="29" stroke="#6B8E23" strokeWidth="0.2" opacity="0.25" />
      {/* Wildflowers */}
      <circle cx="18" cy="32" r="0.7" fill="#e8a0c0" opacity="0.5" />
      <circle cx="45" cy="33" r="0.5" fill="#f0c060" opacity="0.5" />
      <circle cx="55" cy="32" r="0.6" fill="#e8a0c0" opacity="0.4" />
      <circle cx="75" cy="33" r="0.45" fill="#a0c8f0" opacity="0.4" />
      {/* Cloud wisps */}
      <ellipse cx="25" cy="6" rx="10" ry="2.5" fill="#ffffff" opacity="0.15" />
      <ellipse cx="70" cy="10" rx="8" ry="2" fill="#ffffff" opacity="0.1" />
      {data.logo && <image href={data.logo} x="6" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text x="10" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6" letterSpacing="0.5" fill="#3a5010" filter="url(#nature-field-shadow)">
        {data.nameJa}
      </text>
      <text x="10" y="21" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.3" fill="#5a7020">
        {data.nameEn}
      </text>
      <text x="10" y="27" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#6B8E23">
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="nature-field-back-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f0f5e8" />
          <stop offset="100%" stopColor="#e4ecd8" />
        </linearGradient>
        <filter id="nature-field-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="nature-field-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#1a3008" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#nature-field-back-bg)" />
      {/* Subtle grass border at bottom */}
      <rect x="0" y="48" width="91" height="7" fill="#6B8E23" opacity="0.08" />
      <line x1="5" y1="48" x2="4" y2="45" stroke="#6B8E23" strokeWidth="0.15" opacity="0.12" />
      <line x1="15" y1="48" x2="16" y2="45" stroke="#6B8E23" strokeWidth="0.15" opacity="0.12" />
      <line x1="25" y1="48" x2="24" y2="45" stroke="#6B8E23" strokeWidth="0.15" opacity="0.12" />
      <line x1="40" y1="48" x2="41" y2="45" stroke="#6B8E23" strokeWidth="0.15" opacity="0.12" />
      <line x1="55" y1="48" x2="54" y2="45" stroke="#6B8E23" strokeWidth="0.15" opacity="0.12" />
      <line x1="70" y1="48" x2="71" y2="45" stroke="#6B8E23" strokeWidth="0.15" opacity="0.12" />
      <line x1="85" y1="48" x2="84" y2="45" stroke="#6B8E23" strokeWidth="0.15" opacity="0.12" />
      {/* Small wildflower */}
      <circle cx="82" cy="47" r="0.4" fill="#e8a0c0" opacity="0.35" />
      {data.logo && <image href={data.logo} x="76" y="3" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
      <text x="10" y="11" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.2" fill="#3a5010" filter="url(#nature-field-shadow-b)">
        {data.companyJa}
      </text>
      <text x="10" y="15.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#5a7020">
        {data.companyEn}
      </text>
      <text x="10" y="19.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#6B8E23">
        {data.titleJa}
      </text>
      <line x1="10" y1="22.5" x2="55" y2="22.5" stroke="#6B8E23" strokeWidth="0.12" opacity="0.3" />
      <text x="10" y="27" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5a7020">
        {data.tel}
      </text>
      <text x="10" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5a7020">
        {data.email}
      </text>
      <text x="10" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5a7020">
        {data.website}
      </text>
      <line x1="10" y1="38" x2="55" y2="38" stroke="#6B8E23" strokeWidth="0.12" opacity="0.3" />
      <text x="10" y="42.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#6B8E23">
        〒{data.zipCode}
      </text>
      <text x="10" y="46.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#6B8E23">
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 10. SKY (天) — Expansive sky gradient with cloud wisps
// ============================================================
const skyTemplate: TemplateDefinition = {
  id: 'nature-sky',
  name: 'SKY',
  nameJa: '天',
  category: 'nature',
  designer: 'Sky Studio',
  description: '果てしない空の広がりが心を解放する。',
  accentColor: '#4A90D9',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="nature-sky-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a4888" />
          <stop offset="30%" stopColor="#2860a8" />
          <stop offset="60%" stopColor="#4A90D9" />
          <stop offset="100%" stopColor="#88c0f0" />
        </linearGradient>
        <radialGradient id="nature-sky-sun-glow" cx="0.85" cy="0.15" r="0.3">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <filter id="nature-sky-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="nature-sky-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.4" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#nature-sky-bg)" />
      <rect width="91" height="55" fill="url(#nature-sky-sun-glow)" />
      {/* Cloud wisps - multiple layers */}
      <ellipse cx="12" cy="10" rx="11" ry="3" fill="#ffffff" opacity="0.15" />
      <ellipse cx="20" cy="9" rx="7" ry="2.5" fill="#ffffff" opacity="0.12" />
      <ellipse cx="62" cy="18" rx="14" ry="3.5" fill="#ffffff" opacity="0.1" />
      <ellipse cx="74" cy="17" rx="8" ry="2.5" fill="#ffffff" opacity="0.08" />
      <ellipse cx="32" cy="36" rx="9" ry="2" fill="#ffffff" opacity="0.06" />
      <ellipse cx="82" cy="38" rx="7" ry="2" fill="#ffffff" opacity="0.05" />
      {/* Sun - subtle */}
      <circle cx="80" cy="7" r="5" fill="#ffffff" opacity="0.12" />
      <circle cx="80" cy="7" r="2.5" fill="#ffffff" opacity="0.25" />
      {/* Sun cross sparkle */}
      <line x1="77" y1="7" x2="83" y2="7" stroke="#ffffff" strokeWidth="0.08" opacity="0.3" />
      <line x1="80" y1="4" x2="80" y2="10" stroke="#ffffff" strokeWidth="0.08" opacity="0.3" />
      {data.logo && <image href={data.logo} x="6" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text x="45.5" y="27" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="6.5" letterSpacing="1" fill="#ffffff" filter="url(#nature-sky-shadow)">
        {data.nameJa}
      </text>
      <text x="45.5" y="34" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.5" fill="#d0e4f8">
        {data.nameEn}
      </text>
      <text x="45.5" y="41" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#a8c8e8">
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="nature-sky-back" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#1a4888" />
          <stop offset="50%" stopColor="#2860a8" />
          <stop offset="100%" stopColor="#88c0f0" />
        </linearGradient>
        <filter id="nature-sky-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="nature-sky-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#nature-sky-back)" />
      {/* Cloud wisps */}
      <ellipse cx="22" cy="7" rx="9" ry="2" fill="#ffffff" opacity="0.08" />
      <ellipse cx="72" cy="46" rx="11" ry="2.5" fill="#ffffff" opacity="0.06" />
      <ellipse cx="50" cy="50" rx="8" ry="1.5" fill="#ffffff" opacity="0.04" />
      {data.logo && <image href={data.logo} x="38" y="2" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
      <text x="45.5" y="14" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" fill="#ffffff" filter="url(#nature-sky-shadow-b)">
        {data.companyJa}
      </text>
      <text x="45.5" y="18.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#d0e4f8">
        {data.companyEn}
      </text>
      <text x="45.5" y="22.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#a8c8e8">
        {data.titleJa}
      </text>
      <line x1="25" y1="25.5" x2="66" y2="25.5" stroke="#ffffff" strokeWidth="0.1" opacity="0.25" />
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#d8e8f8">
        {data.tel}
      </text>
      <text x="45.5" y="34" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#d8e8f8">
        {data.email}
      </text>
      <text x="45.5" y="38" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#d8e8f8">
        {data.website}
      </text>
      <line x1="25" y1="41" x2="66" y2="41" stroke="#ffffff" strokeWidth="0.1" opacity="0.25" />
      <text x="45.5" y="45.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#a8c8e8">
        〒{data.zipCode}
      </text>
      <text x="45.5" y="49.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#a8c8e8">
        {data.addressJa}
      </text>
    </g>
  ),
};

export const natureTemplates: TemplateDefinition[] = [
  forestTemplate,
  oceanTemplate,
  stoneTemplate,
  leafTemplate,
  sunriseTemplate,
  riverTemplate,
  mountainTemplate,
  rainTemplate,
  fieldTemplate,
  skyTemplate,
];
