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
          <stop offset="0%" stopColor="#1a3a0a" />
          <stop offset="100%" stopColor="#2D5016" />
        </linearGradient>
        <linearGradient id="nature-forest-light" x1="0.3" y1="0" x2="0.7" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#nature-forest-bg)" />
      {/* Tree canopy silhouettes */}
      <ellipse cx="15" cy="-2" rx="18" ry="14" fill="#1a3a0a" opacity="0.6" />
      <ellipse cx="40" cy="-5" rx="22" ry="16" fill="#1a3a0a" opacity="0.5" />
      <ellipse cx="70" cy="-1" rx="16" ry="12" fill="#1a3a0a" opacity="0.7" />
      <ellipse cx="88" cy="0" rx="14" ry="10" fill="#1a3a0a" opacity="0.4" />
      {/* Light rays through canopy */}
      <polygon points="30,-5 34,55 28,55" fill="url(#nature-forest-light)" />
      <polygon points="55,-5 58,55 52,55" fill="url(#nature-forest-light)" />
      <polygon points="72,-5 74,55 70,55" fill="url(#nature-forest-light)" />
      {/* Ground moss */}
      <ellipse cx="10" cy="54" rx="12" ry="3" fill="#1a3a0a" opacity="0.4" />
      <ellipse cx="45" cy="55" rx="20" ry="4" fill="#1a3a0a" opacity="0.3" />
      <ellipse cx="80" cy="54" rx="14" ry="3" fill="#1a3a0a" opacity="0.35" />
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="1"
        fill="#d4e8c2"
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
        fill="#8ab06a"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="37"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#6d9a4a"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="nature-forest-bg-back" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2D5016" />
          <stop offset="100%" stopColor="#1a3a0a" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#nature-forest-bg-back)" />
      {/* Subtle tree trunk lines */}
      <line x1="8" y1="0" x2="8" y2="55" stroke="#1a3a0a" strokeWidth="0.8" opacity="0.4" />
      <line x1="20" y1="0" x2="20" y2="55" stroke="#1a3a0a" strokeWidth="0.5" opacity="0.3" />
      <line x1="85" y1="0" x2="85" y2="55" stroke="#1a3a0a" strokeWidth="0.6" opacity="0.35" />
      <text
        x="45.5"
        y="12"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        letterSpacing="0.5"
        fill="#d4e8c2"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="16.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        letterSpacing="0.3"
        fill="#8ab06a"
      >
        {data.companyEn}
      </text>
      <line x1="25" y1="20" x2="66" y2="20" stroke="#6d9a4a" strokeWidth="0.15" />
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#a8cc8e"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#a8cc8e"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="34"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#a8cc8e"
      >
        {data.website}
      </text>
      <line x1="25" y1="37.5" x2="66" y2="37.5" stroke="#6d9a4a" strokeWidth="0.15" />
      <text
        x="45.5"
        y="42"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#6d9a4a"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="46"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#6d9a4a"
      >
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
          <stop offset="0%" stopColor="#0A4B78" />
          <stop offset="60%" stopColor="#0d3b5e" />
          <stop offset="100%" stopColor="#072840" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#nature-ocean-bg)" />
      {/* Wave patterns */}
      <path d="M0,40 Q10,36 20,40 T40,40 T60,40 T80,40 T91,40" fill="none" stroke="#1a6da8" strokeWidth="0.3" opacity="0.5" />
      <path d="M0,43 Q10,39 20,43 T40,43 T60,43 T80,43 T91,43" fill="none" stroke="#1a6da8" strokeWidth="0.25" opacity="0.4" />
      <path d="M0,46 Q10,42 20,46 T40,46 T60,46 T80,46 T91,46" fill="none" stroke="#1a6da8" strokeWidth="0.2" opacity="0.3" />
      <path d="M0,49 Q10,45 20,49 T40,49 T60,49 T80,49 T91,49" fill="none" stroke="#1a6da8" strokeWidth="0.15" opacity="0.25" />
      <path d="M0,52 Q10,48 20,52 T40,52 T60,52 T80,52 T91,52" fill="none" stroke="#1a6da8" strokeWidth="0.12" opacity="0.2" />
      {/* Bubbles */}
      <circle cx="75" cy="15" r="0.8" fill="none" stroke="#4da8da" strokeWidth="0.15" opacity="0.4" />
      <circle cx="78" cy="10" r="0.5" fill="none" stroke="#4da8da" strokeWidth="0.12" opacity="0.35" />
      <circle cx="73" cy="8" r="0.6" fill="none" stroke="#4da8da" strokeWidth="0.12" opacity="0.3" />
      <text
        x="12"
        y="18"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6.5"
        letterSpacing="0.8"
        fill="#c8e0f0"
      >
        {data.nameJa}
      </text>
      <text
        x="12"
        y="25"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.4"
        fill="#6aaed4"
      >
        {data.nameEn}
      </text>
      <text
        x="12"
        y="31"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#4a8ab0"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="nature-ocean-bg-back" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#0A4B78" />
          <stop offset="100%" stopColor="#072840" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#nature-ocean-bg-back)" />
      {/* Subtle wave at top */}
      <path d="M0,6 Q15,3 30,6 T60,6 T91,6 L91,0 L0,0 Z" fill="#072840" opacity="0.4" />
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#c8e0f0"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#6aaed4"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="22" x2="50" y2="22" stroke="#4a8ab0" strokeWidth="0.15" />
      <text
        x="10"
        y="27"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8ec4e0"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="31"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8ec4e0"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="35"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8ec4e0"
      >
        {data.website}
      </text>
      <line x1="10" y1="38.5" x2="50" y2="38.5" stroke="#4a8ab0" strokeWidth="0.15" />
      <text
        x="10"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#6aaed4"
      >
        〒{data.zipCode}
      </text>
      <text
        x="10"
        y="47"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#6aaed4"
      >
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
          <stop offset="0%" stopColor="#9e8e7e" />
          <stop offset="100%" stopColor="#7A6B5D" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#nature-stone-rad)" />
      {/* Stone texture - scattered small shapes */}
      <circle cx="12" cy="8" r="6" fill="#8a7a6a" opacity="0.3" />
      <circle cx="78" cy="45" r="8" fill="#6a5a4a" opacity="0.2" />
      <circle cx="65" cy="10" r="4" fill="#8a7a6a" opacity="0.15" />
      <ellipse cx="30" cy="48" rx="10" ry="5" fill="#6a5a4a" opacity="0.2" />
      {/* Mineral vein lines */}
      <path d="M0,20 Q20,18 40,22 Q60,26 91,20" fill="none" stroke="#b0a090" strokeWidth="0.2" opacity="0.3" />
      <path d="M0,35 Q30,32 50,36 Q70,40 91,34" fill="none" stroke="#b0a090" strokeWidth="0.15" opacity="0.25" />
      <text
        x="45.5"
        y="23"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="5.5"
        letterSpacing="0.6"
        fill="#f0e8de"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2.2"
        letterSpacing="0.3"
        fill="#d8ccbc"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#c0b0a0"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#7A6B5D" />
      {/* Stone pebble shapes */}
      <ellipse cx="75" cy="8" rx="8" ry="5" fill="#6a5a4a" opacity="0.3" />
      <ellipse cx="15" cy="50" rx="10" ry="4" fill="#6a5a4a" opacity="0.25" />
      <path d="M0,30 Q25,27 45,30 Q70,33 91,28" fill="none" stroke="#b0a090" strokeWidth="0.15" opacity="0.2" />
      <text
        x="45.5"
        y="13"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#f0e8de"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="17.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#d8ccbc"
      >
        {data.companyEn}
      </text>
      <line x1="30" y1="21" x2="61" y2="21" stroke="#b0a090" strokeWidth="0.15" />
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#d0c4b4"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#d0c4b4"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="34"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#d0c4b4"
      >
        {data.website}
      </text>
      <line x1="30" y1="37.5" x2="61" y2="37.5" stroke="#b0a090" strokeWidth="0.15" />
      <text
        x="45.5"
        y="42"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#b0a090"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="46"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#b0a090"
      >
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
          <stop offset="100%" stopColor="#d0eac0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#nature-leaf-bg)" />
      {/* Large leaf vein structure */}
      <path d="M0,55 Q45,27 91,0" fill="none" stroke="#3A7D44" strokeWidth="0.4" opacity="0.2" />
      <path d="M0,55 Q30,35 45,27" fill="none" stroke="#3A7D44" strokeWidth="0.2" opacity="0.15" />
      <path d="M15,55 Q35,38 45,27" fill="none" stroke="#3A7D44" strokeWidth="0.15" opacity="0.12" />
      <path d="M30,55 Q40,40 45,27" fill="none" stroke="#3A7D44" strokeWidth="0.15" opacity="0.1" />
      <path d="M45,27 Q55,20 60,10" fill="none" stroke="#3A7D44" strokeWidth="0.15" opacity="0.12" />
      <path d="M45,27 Q60,18 75,5" fill="none" stroke="#3A7D44" strokeWidth="0.15" opacity="0.1" />
      <path d="M45,27 Q65,22 91,12" fill="none" stroke="#3A7D44" strokeWidth="0.15" opacity="0.1" />
      {/* Small decorative leaf */}
      <ellipse cx="80" cy="6" rx="4" ry="2" fill="#3A7D44" opacity="0.08" transform="rotate(-30 80 6)" />
      <text
        x="10"
        y="18"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="0.5"
        fill="#2a5d30"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="25"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.3"
        fill="#5a9d60"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="31"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#6aad70"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#e8f5e0" />
      {/* Leaf vein background detail */}
      <path d="M91,0 Q45,27 0,55" fill="none" stroke="#3A7D44" strokeWidth="0.3" opacity="0.1" />
      <path d="M91,15 Q55,30 30,55" fill="none" stroke="#3A7D44" strokeWidth="0.15" opacity="0.08" />
      <path d="M91,30 Q70,40 55,55" fill="none" stroke="#3A7D44" strokeWidth="0.15" opacity="0.08" />
      <text
        x="80"
        y="12"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#2a5d30"
      >
        {data.companyJa}
      </text>
      <text
        x="80"
        y="16.5"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#5a9d60"
      >
        {data.companyEn}
      </text>
      <line x1="40" y1="20" x2="80" y2="20" stroke="#3A7D44" strokeWidth="0.15" opacity="0.3" />
      <text
        x="80"
        y="25.5"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#4a8d50"
      >
        {data.tel}
      </text>
      <text
        x="80"
        y="29.5"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#4a8d50"
      >
        {data.email}
      </text>
      <text
        x="80"
        y="33.5"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#4a8d50"
      >
        {data.website}
      </text>
      <line x1="40" y1="37" x2="80" y2="37" stroke="#3A7D44" strokeWidth="0.15" opacity="0.3" />
      <text
        x="80"
        y="42"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#6aad70"
      >
        〒{data.zipCode}
      </text>
      <text
        x="80"
        y="46"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#6aad70"
      >
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
          <stop offset="0%" stopColor="#E8823A" />
          <stop offset="40%" stopColor="#f0a050" />
          <stop offset="70%" stopColor="#f8c878" />
          <stop offset="100%" stopColor="#fde8b0" />
        </linearGradient>
        <radialGradient id="nature-sunrise-sun" cx="0.5" cy="0.85" r="0.5">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#nature-sunrise-bg)" />
      {/* Sun glow */}
      <circle cx="45.5" cy="48" r="20" fill="url(#nature-sunrise-sun)" />
      {/* Sun disc */}
      <circle cx="45.5" cy="48" r="6" fill="#ffffff" opacity="0.5" />
      {/* Horizon line */}
      <line x1="0" y1="42" x2="91" y2="42" stroke="#ffffff" strokeWidth="0.2" opacity="0.4" />
      {/* Light rays */}
      <line x1="45.5" y1="42" x2="20" y2="0" stroke="#ffffff" strokeWidth="0.12" opacity="0.2" />
      <line x1="45.5" y1="42" x2="35" y2="0" stroke="#ffffff" strokeWidth="0.12" opacity="0.25" />
      <line x1="45.5" y1="42" x2="55" y2="0" stroke="#ffffff" strokeWidth="0.12" opacity="0.25" />
      <line x1="45.5" y1="42" x2="70" y2="0" stroke="#ffffff" strokeWidth="0.12" opacity="0.2" />
      <text
        x="45.5"
        y="16"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="0.8"
        fill="#6d2e0a"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="23"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.4"
        fill="#8a4420"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="29"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#9a5430"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="nature-sunrise-bg-back" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fde8b0" />
          <stop offset="100%" stopColor="#f0a050" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#nature-sunrise-bg-back)" />
      {/* Subtle horizon */}
      <line x1="0" y1="8" x2="91" y2="8" stroke="#E8823A" strokeWidth="0.15" opacity="0.3" />
      <text
        x="45.5"
        y="15"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#6d2e0a"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="19.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#8a4420"
      >
        {data.companyEn}
      </text>
      <line x1="25" y1="23" x2="66" y2="23" stroke="#9a5430" strokeWidth="0.15" />
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#7a3a18"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#7a3a18"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#7a3a18"
      >
        {data.website}
      </text>
      <line x1="25" y1="39.5" x2="66" y2="39.5" stroke="#9a5430" strokeWidth="0.15" />
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#9a5430"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="48"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#9a5430"
      >
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
          <stop offset="0%" stopColor="#e0f0f8" />
          <stop offset="100%" stopColor="#c0dce8" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#nature-river-bg)" />
      {/* Flowing river curves */}
      <path d="M-5,10 C15,8 25,15 45,12 C65,9 75,16 96,14" fill="none" stroke="#2E86AB" strokeWidth="0.8" opacity="0.15" />
      <path d="M-5,14 C15,12 25,19 45,16 C65,13 75,20 96,18" fill="none" stroke="#2E86AB" strokeWidth="0.5" opacity="0.12" />
      <path d="M-5,18 C15,16 25,23 45,20 C65,17 75,24 96,22" fill="none" stroke="#2E86AB" strokeWidth="0.3" opacity="0.1" />
      {/* River pebbles */}
      <circle cx="20" cy="46" r="1.5" fill="#2E86AB" opacity="0.08" />
      <circle cx="30" cy="48" r="1" fill="#2E86AB" opacity="0.06" />
      <circle cx="60" cy="47" r="1.2" fill="#2E86AB" opacity="0.07" />
      <circle cx="72" cy="45" r="0.8" fill="#2E86AB" opacity="0.06" />
      <text
        x="8"
        y="32"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="0.5"
        fill="#1a5570"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="39"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.3"
        fill="#2E86AB"
      >
        {data.nameEn}
      </text>
      <text
        x="8"
        y="45"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#5aaac8"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#e0f0f8" />
      {/* Flowing river curves on back */}
      <path d="M-5,38 C15,36 25,43 45,40 C65,37 75,44 96,42" fill="none" stroke="#2E86AB" strokeWidth="0.5" opacity="0.12" />
      <path d="M-5,42 C15,40 25,47 45,44 C65,41 75,48 96,46" fill="none" stroke="#2E86AB" strokeWidth="0.3" opacity="0.1" />
      <path d="M-5,46 C15,44 25,51 45,48 C65,45 75,52 96,50" fill="none" stroke="#2E86AB" strokeWidth="0.2" opacity="0.08" />
      <text
        x="10"
        y="12"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#1a5570"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="16.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#2E86AB"
      >
        {data.companyEn}
      </text>
      <path d="M10,20 C20,19.5 30,20.5 50,20" fill="none" stroke="#2E86AB" strokeWidth="0.15" />
      <text
        x="10"
        y="25.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#3a90b0"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="29.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#3a90b0"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="33.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#3a90b0"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="39"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#5aaac8"
      >
        〒{data.zipCode} {data.addressJa}
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
          <stop offset="0%" stopColor="#c8d8e8" />
          <stop offset="100%" stopColor="#e8eff5" />
        </linearGradient>
        <linearGradient id="nature-mountain-peak1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4A6670" />
          <stop offset="100%" stopColor="#6a8690" />
        </linearGradient>
        <linearGradient id="nature-mountain-peak2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5a7680" />
          <stop offset="100%" stopColor="#7a96a0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#nature-mountain-sky)" />
      {/* Far mountains */}
      <polygon points="0,40 15,28 30,40" fill="url(#nature-mountain-peak2)" opacity="0.3" />
      <polygon points="60,40 80,25 91,35 91,40" fill="url(#nature-mountain-peak2)" opacity="0.25" />
      {/* Main mountain range */}
      <polygon points="0,55 20,30 40,45 55,25 75,40 91,32 91,55" fill="url(#nature-mountain-peak1)" opacity="0.5" />
      {/* Snow caps */}
      <polygon points="18,31 20,30 22,31" fill="#ffffff" opacity="0.6" />
      <polygon points="53,26 55,25 57,26.5" fill="#ffffff" opacity="0.6" />
      {/* Mist */}
      <rect x="0" y="42" width="91" height="13" fill="#e8eff5" opacity="0.5" />
      <text
        x="45.5"
        y="15"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="5.5"
        letterSpacing="0.8"
        fill="#3a5660"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="21"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.3"
        fill="#5a7680"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="50"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#6a8690"
      >
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
      </defs>
      <rect width="91" height="55" fill="url(#nature-mountain-back)" />
      {/* Distant peak silhouette */}
      <polygon points="0,10 25,3 50,10" fill="#4A6670" opacity="0.1" />
      <polygon points="40,10 70,2 91,8 91,10" fill="#4A6670" opacity="0.08" />
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="2.2"
        fill="#3a5660"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="18.5"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#5a7680"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="22" x2="71" y2="22" stroke="#4A6670" strokeWidth="0.15" opacity="0.3" />
      <text
        x="45.5"
        y="27.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5a7680"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="31.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5a7680"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="35.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5a7680"
      >
        {data.website}
      </text>
      <line x1="20" y1="39" x2="71" y2="39" stroke="#4A6670" strokeWidth="0.15" opacity="0.3" />
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#6a8690"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="48"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#6a8690"
      >
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
          <stop offset="0%" stopColor="#8aaab8" />
          <stop offset="100%" stopColor="#6a8a98" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#nature-rain-bg)" />
      {/* Rain drops - vertical thin lines */}
      <line x1="5" y1="0" x2="5" y2="8" stroke="#c8dce5" strokeWidth="0.15" opacity="0.4" />
      <line x1="12" y1="5" x2="12" y2="15" stroke="#c8dce5" strokeWidth="0.12" opacity="0.35" />
      <line x1="18" y1="2" x2="18" y2="10" stroke="#c8dce5" strokeWidth="0.15" opacity="0.3" />
      <line x1="25" y1="8" x2="25" y2="18" stroke="#c8dce5" strokeWidth="0.12" opacity="0.4" />
      <line x1="33" y1="0" x2="33" y2="12" stroke="#c8dce5" strokeWidth="0.15" opacity="0.35" />
      <line x1="40" y1="6" x2="40" y2="14" stroke="#c8dce5" strokeWidth="0.12" opacity="0.3" />
      <line x1="48" y1="3" x2="48" y2="13" stroke="#c8dce5" strokeWidth="0.15" opacity="0.4" />
      <line x1="55" y1="10" x2="55" y2="20" stroke="#c8dce5" strokeWidth="0.12" opacity="0.35" />
      <line x1="63" y1="0" x2="63" y2="9" stroke="#c8dce5" strokeWidth="0.15" opacity="0.3" />
      <line x1="70" y1="7" x2="70" y2="16" stroke="#c8dce5" strokeWidth="0.12" opacity="0.4" />
      <line x1="78" y1="1" x2="78" y2="11" stroke="#c8dce5" strokeWidth="0.15" opacity="0.35" />
      <line x1="85" y1="4" x2="85" y2="14" stroke="#c8dce5" strokeWidth="0.12" opacity="0.3" />
      {/* More rain in background */}
      <line x1="8" y1="35" x2="8" y2="45" stroke="#c8dce5" strokeWidth="0.1" opacity="0.2" />
      <line x1="22" y1="40" x2="22" y2="50" stroke="#c8dce5" strokeWidth="0.1" opacity="0.2" />
      <line x1="38" y1="38" x2="38" y2="48" stroke="#c8dce5" strokeWidth="0.1" opacity="0.2" />
      <line x1="52" y1="42" x2="52" y2="52" stroke="#c8dce5" strokeWidth="0.1" opacity="0.2" />
      <line x1="68" y1="36" x2="68" y2="46" stroke="#c8dce5" strokeWidth="0.1" opacity="0.2" />
      <line x1="82" y1="40" x2="82" y2="50" stroke="#c8dce5" strokeWidth="0.1" opacity="0.2" />
      {/* Puddle ripple */}
      <ellipse cx="45" cy="52" rx="12" ry="1.5" fill="none" stroke="#c8dce5" strokeWidth="0.12" opacity="0.2" />
      <ellipse cx="45" cy="52" rx="8" ry="1" fill="none" stroke="#c8dce5" strokeWidth="0.1" opacity="0.15" />
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="6"
        letterSpacing="0.8"
        fill="#ffffff"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="33"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.4"
        fill="#d8eaf0"
      >
        {data.nameEn}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#6a8a98" />
      {/* Rain on back */}
      <line x1="10" y1="0" x2="10" y2="7" stroke="#c8dce5" strokeWidth="0.12" opacity="0.25" />
      <line x1="25" y1="3" x2="25" y2="10" stroke="#c8dce5" strokeWidth="0.12" opacity="0.2" />
      <line x1="42" y1="1" x2="42" y2="8" stroke="#c8dce5" strokeWidth="0.12" opacity="0.25" />
      <line x1="58" y1="4" x2="58" y2="11" stroke="#c8dce5" strokeWidth="0.12" opacity="0.2" />
      <line x1="75" y1="0" x2="75" y2="7" stroke="#c8dce5" strokeWidth="0.12" opacity="0.25" />
      <line x1="88" y1="2" x2="88" y2="9" stroke="#c8dce5" strokeWidth="0.12" opacity="0.2" />
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#ffffff"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="18.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#c8dce5"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="22" x2="71" y2="22" stroke="#c8dce5" strokeWidth="0.12" opacity="0.3" />
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#d8eaf0"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#d8eaf0"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#d8eaf0"
      >
        {data.website}
      </text>
      <line x1="20" y1="38.5" x2="71" y2="38.5" stroke="#c8dce5" strokeWidth="0.12" opacity="0.3" />
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#c8dce5"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="47"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#c8dce5"
      >
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
          <stop offset="0%" stopColor="#b8d8f0" />
          <stop offset="60%" stopColor="#d0e8f0" />
          <stop offset="100%" stopColor="#e8f0e0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#nature-field-sky)" />
      {/* Ground / grass area */}
      <rect x="0" y="35" width="91" height="20" fill="#8aae40" opacity="0.3" />
      <rect x="0" y="40" width="91" height="15" fill="#6B8E23" opacity="0.2" />
      {/* Grass blades */}
      <line x1="5" y1="35" x2="4" y2="30" stroke="#6B8E23" strokeWidth="0.2" opacity="0.3" />
      <line x1="7" y1="35" x2="8" y2="31" stroke="#6B8E23" strokeWidth="0.15" opacity="0.25" />
      <line x1="15" y1="35" x2="14" y2="29" stroke="#6B8E23" strokeWidth="0.2" opacity="0.3" />
      <line x1="22" y1="35" x2="23" y2="31" stroke="#6B8E23" strokeWidth="0.15" opacity="0.25" />
      <line x1="30" y1="35" x2="29" y2="30" stroke="#6B8E23" strokeWidth="0.2" opacity="0.3" />
      <line x1="38" y1="35" x2="39" y2="31" stroke="#6B8E23" strokeWidth="0.15" opacity="0.25" />
      <line x1="50" y1="35" x2="49" y2="29" stroke="#6B8E23" strokeWidth="0.2" opacity="0.3" />
      <line x1="60" y1="35" x2="61" y2="31" stroke="#6B8E23" strokeWidth="0.15" opacity="0.25" />
      <line x1="70" y1="35" x2="69" y2="30" stroke="#6B8E23" strokeWidth="0.2" opacity="0.3" />
      <line x1="80" y1="35" x2="81" y2="31" stroke="#6B8E23" strokeWidth="0.15" opacity="0.25" />
      <line x1="88" y1="35" x2="87" y2="30" stroke="#6B8E23" strokeWidth="0.2" opacity="0.3" />
      {/* Small wildflowers */}
      <circle cx="20" cy="33" r="0.6" fill="#e8a0c0" opacity="0.5" />
      <circle cx="55" cy="34" r="0.5" fill="#f0c060" opacity="0.5" />
      <circle cx="75" cy="33" r="0.4" fill="#e8a0c0" opacity="0.4" />
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="0.5"
        fill="#3a5010"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="21"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.3"
        fill="#5a7020"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="27"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#6B8E23"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f0f5e8" />
      {/* Subtle grass border at bottom */}
      <rect x="0" y="48" width="91" height="7" fill="#6B8E23" opacity="0.1" />
      <line x1="5" y1="48" x2="4" y2="45" stroke="#6B8E23" strokeWidth="0.15" opacity="0.15" />
      <line x1="15" y1="48" x2="16" y2="45" stroke="#6B8E23" strokeWidth="0.15" opacity="0.15" />
      <line x1="25" y1="48" x2="24" y2="45" stroke="#6B8E23" strokeWidth="0.15" opacity="0.15" />
      <line x1="40" y1="48" x2="41" y2="45" stroke="#6B8E23" strokeWidth="0.15" opacity="0.15" />
      <line x1="55" y1="48" x2="54" y2="45" stroke="#6B8E23" strokeWidth="0.15" opacity="0.15" />
      <line x1="70" y1="48" x2="71" y2="45" stroke="#6B8E23" strokeWidth="0.15" opacity="0.15" />
      <line x1="85" y1="48" x2="84" y2="45" stroke="#6B8E23" strokeWidth="0.15" opacity="0.15" />
      <text
        x="10"
        y="12"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#3a5010"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="16.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#5a7020"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="20" x2="55" y2="20" stroke="#6B8E23" strokeWidth="0.15" opacity="0.3" />
      <text
        x="10"
        y="25.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5a7020"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="29.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5a7020"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="33.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5a7020"
      >
        {data.website}
      </text>
      <line x1="10" y1="37" x2="55" y2="37" stroke="#6B8E23" strokeWidth="0.15" opacity="0.3" />
      <text
        x="10"
        y="41.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#6B8E23"
      >
        〒{data.zipCode}
      </text>
      <text
        x="10"
        y="45"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#6B8E23"
      >
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
          <stop offset="0%" stopColor="#2860a8" />
          <stop offset="50%" stopColor="#4A90D9" />
          <stop offset="100%" stopColor="#88c0f0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#nature-sky-bg)" />
      {/* Cloud wisps */}
      <ellipse cx="15" cy="12" rx="10" ry="3" fill="#ffffff" opacity="0.15" />
      <ellipse cx="22" cy="11" rx="6" ry="2.5" fill="#ffffff" opacity="0.12" />
      <ellipse cx="65" cy="20" rx="12" ry="3.5" fill="#ffffff" opacity="0.1" />
      <ellipse cx="75" cy="19" rx="7" ry="2.5" fill="#ffffff" opacity="0.08" />
      <ellipse cx="35" cy="38" rx="8" ry="2" fill="#ffffff" opacity="0.07" />
      <ellipse cx="85" cy="40" rx="6" ry="2" fill="#ffffff" opacity="0.06" />
      {/* Sun (subtle) */}
      <circle cx="78" cy="8" r="4" fill="#ffffff" opacity="0.15" />
      <circle cx="78" cy="8" r="2" fill="#ffffff" opacity="0.25" />
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="6.5"
        letterSpacing="1"
        fill="#ffffff"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.5"
        fill="#d0e4f8"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="42"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#a8c8e8"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="nature-sky-back" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#2860a8" />
          <stop offset="100%" stopColor="#88c0f0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#nature-sky-back)" />
      {/* Wisps */}
      <ellipse cx="25" cy="8" rx="8" ry="2" fill="#ffffff" opacity="0.1" />
      <ellipse cx="70" cy="45" rx="10" ry="2.5" fill="#ffffff" opacity="0.08" />
      <text
        x="45.5"
        y="12"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#ffffff"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="16.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#d0e4f8"
      >
        {data.companyEn}
      </text>
      <line x1="25" y1="20" x2="66" y2="20" stroke="#ffffff" strokeWidth="0.12" opacity="0.3" />
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#d8e8f8"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#d8e8f8"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="34"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#d8e8f8"
      >
        {data.website}
      </text>
      <line x1="25" y1="37.5" x2="66" y2="37.5" stroke="#ffffff" strokeWidth="0.12" opacity="0.3" />
      <text
        x="45.5"
        y="42.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#a8c8e8"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="46.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#a8c8e8"
      >
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
