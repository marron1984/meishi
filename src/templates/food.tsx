import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. KITCHEN (厨) — Professional kitchen, clean whites
// Crisp white with clean lines suggesting a pro kitchen
// ============================================================
const kitchenTemplate: TemplateDefinition = {
  id: 'food-kitchen',
  name: 'KITCHEN',
  nameJa: '厨',
  category: 'food',
  designer: 'Jiro Ono',
  description: '厨房の清潔感。プロフェッショナルの白い空間。',
  accentColor: '#2C1810',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="fd-kt-bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF8F0" />
          <stop offset="50%" stopColor="#FFF5EB" />
          <stop offset="100%" stopColor="#FFF0E0" />
        </linearGradient>
        <filter id="fd-kt-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="fd-kt-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#fd-kt-bg)" />
      <rect width="91" height="55" fill="transparent" filter="url(#fd-kt-grain)" opacity="0.05" />
      {/* Kitchen pass lines */}
      <rect x="0" y="0" width="91" height="1.2" fill="#2C1810" />
      <rect x="0" y="53.8" width="91" height="1.2" fill="#2C1810" />
      {/* Subtle tile grid */}
      <g opacity="0.06">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line key={i} x1={i * 15.2 + 7.5} y1="3" x2={i * 15.2 + 7.5} y2="52" stroke="#2C1810" strokeWidth="0.04" />
        ))}
      </g>
      {/* Knife line decoration */}
      <line x1="8" y1="30" x2="50" y2="30" stroke="#2C1810" strokeWidth="0.06" opacity="0.2" />
      <path d="M 50 30 L 53 29 L 53.5 30 L 50 30" fill="#2C1810" opacity="0.15" />
      {/* Name */}
      <g filter="url(#fd-kt-shadow)">
        <text x="10" y="18" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6" letterSpacing="0.8" fill="#2C1810">
          {data.nameJa}
        </text>
      </g>
      <text x="10" y="24.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.4" fill="#8B6F5C">
        {data.nameEn}
      </text>
      <text x="10" y="35" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#8B6F5C">
        {data.titleJa}
      </text>
      <text x="10" y="42" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2" fill="#2C1810">
        {data.companyJa}
      </text>
      {/* Steam wisps */}
      <g opacity="0.08">
        <path d="M 78 45 C 76 40 80 38 78 33" fill="none" stroke="#2C1810" strokeWidth="0.1" />
        <path d="M 82 47 C 80 42 84 40 82 35" fill="none" stroke="#2C1810" strokeWidth="0.08" />
      </g>
      {data.logo && <image href={data.logo} x="75" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="fd-kt-bg-b" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2C1810" />
          <stop offset="100%" stopColor="#1e100a" />
        </linearGradient>
        <filter id="fd-kt-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="fd-kt-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#fd-kt-bg-b)" />
      <rect width="91" height="55" fill="transparent" filter="url(#fd-kt-grain-b)" opacity="0.08" />
      <g filter="url(#fd-kt-shadow-b)">
        <text x="8" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.8" letterSpacing="0.3" fill="#FFF8F0">
          {data.companyJa}
        </text>
      </g>
      <text x="8" y="16.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.2" fill="#c0a890">
        {data.companyEn}
      </text>
      <text x="8" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#c0a890" opacity="0.7">
        {data.titleJa}
      </text>
      <line x1="8" y1="22" x2="83" y2="22" stroke="#c0a890" strokeWidth="0.06" opacity="0.3" />
      <text x="8" y="27" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#FFF8F0">TEL: {data.tel}</text>
      <text x="8" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#FFF8F0">EMAIL: {data.email}</text>
      <text x="8" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#FFF8F0">WEB: {data.website}</text>
      <line x1="8" y1="38" x2="83" y2="38" stroke="#c0a890" strokeWidth="0.06" opacity="0.3" />
      <text x="8" y="42.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#c0a890">〒{data.zipCode}</text>
      <text x="8" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#c0a890">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="75" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 2. SAKE (酒) — Japanese sake brewery aesthetic
// Washi paper texture with traditional brush strokes
// ============================================================
const sakeTemplate: TemplateDefinition = {
  id: 'food-sake',
  name: 'SAKE',
  nameJa: '酒',
  category: 'food',
  designer: 'Sake Master',
  description: '酒蔵の趣。和紙の質感と墨の力強さ。',
  accentColor: '#1a1a2e',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="fd-sk-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f5f0e0" />
          <stop offset="50%" stopColor="#f0e8d0" />
          <stop offset="100%" stopColor="#ebe0c8" />
        </linearGradient>
        <filter id="fd-sk-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="fd-sk-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#fd-sk-bg)" />
      <rect width="91" height="55" fill="transparent" filter="url(#fd-sk-grain)" opacity="0.1" />
      {/* Vertical label band */}
      <rect x="70" y="3" width="16" height="49" fill="#1a1a2e" opacity="0.06" />
      <rect x="70" y="3" width="16" height="49" fill="none" stroke="#1a1a2e" strokeWidth="0.08" opacity="0.3" />
      {/* Brush stroke accent */}
      <path d="M 5 8 Q 8 7.5 12 8.5 T 25 8" fill="none" stroke="#1a1a2e" strokeWidth="0.4" opacity="0.15" />
      {/* Sake cup circle */}
      <g opacity="0.1">
        <circle cx="78" cy="27.5" r="6" fill="none" stroke="#c0392b" strokeWidth="0.1" />
        <circle cx="78" cy="27.5" r="4" fill="none" stroke="#c0392b" strokeWidth="0.06" />
      </g>
      {/* Name */}
      <g filter="url(#fd-sk-shadow)">
        <text x="35" y="24" textAnchor="middle" fontFamily="'Noto Sans JP', serif" fontWeight="400" fontSize="6.5" letterSpacing="1.5" fill="#1a1a2e">
          {data.nameJa}
        </text>
      </g>
      <text x="35" y="30.5" textAnchor="middle" fontFamily="'Inter', serif" fontWeight="300" fontSize="2" letterSpacing="0.8" fill="#6a6a7e">
        {data.nameEn.toUpperCase()}
      </text>
      <text x="35" y="38" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#4a4a5e">
        {data.titleJa}
      </text>
      <text x="35" y="45" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2" fill="#1a1a2e">
        {data.companyJa}
      </text>
      {data.logo && <image href={data.logo} x="7" y="40" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="fd-sk-bg-b" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a1a2e" />
          <stop offset="100%" stopColor="#121228" />
        </linearGradient>
        <filter id="fd-sk-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="fd-sk-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#fd-sk-bg-b)" />
      <rect width="91" height="55" fill="transparent" filter="url(#fd-sk-grain-b)" opacity="0.1" />
      <g filter="url(#fd-sk-shadow-b)">
        <text x="8" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.8" letterSpacing="0.3" fill="#f0e8d0">
          {data.companyJa}
        </text>
      </g>
      <text x="8" y="16.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.2" fill="#8a8a9e">
        {data.companyEn}
      </text>
      <text x="8" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#8a8a9e" opacity="0.7">
        {data.titleJa}
      </text>
      <line x1="8" y1="22" x2="83" y2="22" stroke="#8a8a9e" strokeWidth="0.06" opacity="0.3" />
      <text x="8" y="27" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#f0e8d0">TEL: {data.tel}</text>
      <text x="8" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#f0e8d0">EMAIL: {data.email}</text>
      <text x="8" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#f0e8d0">WEB: {data.website}</text>
      <line x1="8" y1="38" x2="83" y2="38" stroke="#8a8a9e" strokeWidth="0.06" opacity="0.3" />
      <text x="8" y="42.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#8a8a9e">〒{data.zipCode}</text>
      <text x="8" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#8a8a9e">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="75" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 3. SUSHI (鮨) — Refined sushi counter aesthetic
// Hinoki wood and subtle ocean tones
// ============================================================
const sushiTemplate: TemplateDefinition = {
  id: 'food-sushi',
  name: 'SUSHI',
  nameJa: '鮨',
  category: 'food',
  designer: 'Sushi Artisan',
  description: '鮨の美学。檜のカウンターと海の恵み。',
  accentColor: '#4a3020',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="fd-su-bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f5ece0" />
          <stop offset="70%" stopColor="#f0e5d5" />
          <stop offset="100%" stopColor="#e8dcc8" />
        </linearGradient>
        <linearGradient id="fd-su-wood" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#d4b896" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#c8a880" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#d4b896" stopOpacity="0.15" />
        </linearGradient>
        <filter id="fd-su-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="fd-su-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#fd-su-bg)" />
      <rect width="91" height="55" fill="url(#fd-su-wood)" />
      <rect width="91" height="55" fill="transparent" filter="url(#fd-su-grain)" opacity="0.06" />
      {/* Wood grain lines */}
      <g opacity="0.05">
        <path d="M 0 15 Q 45 13 91 16" fill="none" stroke="#4a3020" strokeWidth="0.08" />
        <path d="M 0 35 Q 45 33 91 36" fill="none" stroke="#4a3020" strokeWidth="0.06" />
        <path d="M 0 45 Q 45 43 91 46" fill="none" stroke="#4a3020" strokeWidth="0.04" />
      </g>
      {/* Counter edge */}
      <rect x="0" y="50" width="91" height="5" fill="#4a3020" opacity="0.08" />
      <line x1="0" y1="50" x2="91" y2="50" stroke="#4a3020" strokeWidth="0.1" opacity="0.3" />
      {/* Chopstick rest accent */}
      <g opacity="0.15">
        <rect x="75" y="42" width="10" height="1.5" rx="0.5" fill="#4a3020" />
        <line x1="77" y1="39" x2="83" y2="45" stroke="#4a3020" strokeWidth="0.08" />
        <line x1="78" y1="39" x2="84" y2="45" stroke="#4a3020" strokeWidth="0.06" />
      </g>
      {/* Name */}
      <g filter="url(#fd-su-shadow)">
        <text x="10" y="20" fontFamily="'Noto Sans JP', serif" fontWeight="400" fontSize="6" letterSpacing="1" fill="#4a3020">
          {data.nameJa}
        </text>
      </g>
      <text x="10" y="26.5" fontFamily="'Inter', serif" fontWeight="300" fontSize="2" letterSpacing="0.6" fill="#8a7060">
        {data.nameEn}
      </text>
      <text x="10" y="34" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#6a5040">
        {data.titleJa}
      </text>
      <text x="10" y="41" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.8" fill="#4a3020">
        {data.companyJa}
      </text>
      {data.logo && <image href={data.logo} x="75" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="fd-su-bg-b" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4a3020" />
          <stop offset="100%" stopColor="#3a2418" />
        </linearGradient>
        <filter id="fd-su-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="fd-su-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#fd-su-bg-b)" />
      <rect width="91" height="55" fill="transparent" filter="url(#fd-su-grain-b)" opacity="0.08" />
      <g filter="url(#fd-su-shadow-b)">
        <text x="8" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.8" letterSpacing="0.3" fill="#f0e5d5">
          {data.companyJa}
        </text>
      </g>
      <text x="8" y="16.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.2" fill="#c0a890">
        {data.companyEn}
      </text>
      <text x="8" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#c0a890" opacity="0.7">
        {data.titleJa}
      </text>
      <line x1="8" y1="22" x2="83" y2="22" stroke="#c0a890" strokeWidth="0.06" opacity="0.3" />
      <text x="8" y="27" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#f0e5d5">TEL: {data.tel}</text>
      <text x="8" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#f0e5d5">EMAIL: {data.email}</text>
      <text x="8" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#f0e5d5">WEB: {data.website}</text>
      <line x1="8" y1="38" x2="83" y2="38" stroke="#c0a890" strokeWidth="0.06" opacity="0.3" />
      <text x="8" y="42.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#c0a890">〒{data.zipCode}</text>
      <text x="8" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#c0a890">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="75" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 4. PATISSERIE (菓子) — French pastry elegance
// Soft cream tones with delicate ornamental details
// ============================================================
const patisserieTemplate: TemplateDefinition = {
  id: 'food-patisserie',
  name: 'PATISSERIE',
  nameJa: '菓子',
  category: 'food',
  designer: 'Pierre Hermé',
  description: 'パティスリーの繊細さ。甘美な芸術の世界。',
  accentColor: '#8B4557',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="fd-pt-bg" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#fff5f0" />
          <stop offset="100%" stopColor="#f8e8e0" />
        </radialGradient>
        <linearGradient id="fd-pt-rose" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#d4a0a8" />
          <stop offset="50%" stopColor="#e0b0b8" />
          <stop offset="100%" stopColor="#d4a0a8" />
        </linearGradient>
        <filter id="fd-pt-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="fd-pt-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#fd-pt-bg)" />
      <rect width="91" height="55" fill="transparent" filter="url(#fd-pt-grain)" opacity="0.04" />
      {/* Decorative piping border */}
      <rect x="5" y="5" width="81" height="45" fill="none" stroke="url(#fd-pt-rose)" strokeWidth="0.06" />
      {/* Scallop edge decoration */}
      <g opacity="0.2">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <circle key={i} cx={9.5 + i * 8} cy="5" r="1" fill="none" stroke="#d4a0a8" strokeWidth="0.04" />
        ))}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <circle key={`b${i}`} cx={9.5 + i * 8} cy="50" r="1" fill="none" stroke="#d4a0a8" strokeWidth="0.04" />
        ))}
      </g>
      {/* Name */}
      <g filter="url(#fd-pt-shadow)">
        <text x="45.5" y="22" textAnchor="middle" fontFamily="'Noto Sans JP', serif" fontWeight="300" fontSize="6" letterSpacing="1.5" fill="#8B4557">
          {data.nameJa}
        </text>
      </g>
      <text x="45.5" y="28.5" textAnchor="middle" fontFamily="'Inter', serif" fontWeight="200" fontSize="2" letterSpacing="1" fill="#b07080">
        {data.nameEn.toUpperCase()}
      </text>
      <text x="45.5" y="36" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#a06070">
        {data.titleJa}
      </text>
      <text x="45.5" y="43" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#8B4557">
        {data.companyJa}
      </text>
      {/* Rosette decoration */}
      <g opacity="0.15" transform="translate(45.5, 12)">
        <circle r="2" fill="none" stroke="#8B4557" strokeWidth="0.06" />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <circle key={i} cx={2 * Math.cos(i * Math.PI / 3)} cy={2 * Math.sin(i * Math.PI / 3)} r="0.8" fill="none" stroke="#8B4557" strokeWidth="0.04" />
        ))}
      </g>
      {data.logo && <image href={data.logo} x="7" y="39" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="fd-pt-bg-b" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B4557" />
          <stop offset="100%" stopColor="#6a3040" />
        </linearGradient>
        <filter id="fd-pt-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="fd-pt-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#fd-pt-bg-b)" />
      <rect width="91" height="55" fill="transparent" filter="url(#fd-pt-grain-b)" opacity="0.08" />
      <g filter="url(#fd-pt-shadow-b)">
        <text x="8" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.8" letterSpacing="0.3" fill="#fff5f0">
          {data.companyJa}
        </text>
      </g>
      <text x="8" y="16.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.2" fill="#e0b0b8">
        {data.companyEn}
      </text>
      <text x="8" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#e0b0b8" opacity="0.7">
        {data.titleJa}
      </text>
      <line x1="8" y1="22" x2="83" y2="22" stroke="#e0b0b8" strokeWidth="0.06" opacity="0.3" />
      <text x="8" y="27" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#fff5f0">TEL: {data.tel}</text>
      <text x="8" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#fff5f0">EMAIL: {data.email}</text>
      <text x="8" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#fff5f0">WEB: {data.website}</text>
      <line x1="8" y1="38" x2="83" y2="38" stroke="#e0b0b8" strokeWidth="0.06" opacity="0.3" />
      <text x="8" y="42.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#e0b0b8">〒{data.zipCode}</text>
      <text x="8" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#e0b0b8">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="75" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 5. CAFE (珈琲) — Coffee shop warmth
// Rich brown tones with coffee stain textures
// ============================================================
const cafeTemplate: TemplateDefinition = {
  id: 'food-cafe',
  name: 'CAFE',
  nameJa: '珈琲',
  category: 'food',
  designer: 'Barista Design',
  description: '珈琲の温もり。一杯に込めた時間の贅沢。',
  accentColor: '#3C2415',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="fd-cf-bg" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#f8f0e4" />
          <stop offset="100%" stopColor="#ece0cc" />
        </radialGradient>
        <radialGradient id="fd-cf-stain" cx="75%" cy="70%" r="20%">
          <stop offset="0%" stopColor="#c8a880" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#c8a880" stopOpacity="0" />
        </radialGradient>
        <filter id="fd-cf-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="fd-cf-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#fd-cf-bg)" />
      <rect width="91" height="55" fill="url(#fd-cf-stain)" />
      <rect width="91" height="55" fill="transparent" filter="url(#fd-cf-grain)" opacity="0.08" />
      {/* Coffee ring stain */}
      <circle cx="72" cy="38" r="7" fill="none" stroke="#3C2415" strokeWidth="0.12" opacity="0.06" />
      <circle cx="72" cy="38" r="6.5" fill="none" stroke="#3C2415" strokeWidth="0.04" opacity="0.04" />
      {/* Bean shape decoration */}
      <g opacity="0.1" transform="translate(78, 10)">
        <ellipse rx="2" ry="3" fill="none" stroke="#3C2415" strokeWidth="0.1" />
        <line x1="0" y1="-2.5" x2="0" y2="2.5" stroke="#3C2415" strokeWidth="0.06" />
      </g>
      {/* Name */}
      <g filter="url(#fd-cf-shadow)">
        <text x="10" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6" letterSpacing="0.8" fill="#3C2415">
          {data.nameJa}
        </text>
      </g>
      <text x="10" y="26.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.5" fill="#8a6a4a">
        {data.nameEn}
      </text>
      <line x1="10" y1="30" x2="55" y2="30" stroke="#3C2415" strokeWidth="0.06" opacity="0.2" />
      <text x="10" y="36" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#6a4a30">
        {data.titleJa}
      </text>
      <text x="10" y="43" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2" fill="#3C2415">
        {data.companyJa}
      </text>
      {data.logo && <image href={data.logo} x="7" y="43" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="fd-cf-bg-b" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3C2415" />
          <stop offset="100%" stopColor="#2a180c" />
        </linearGradient>
        <filter id="fd-cf-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="fd-cf-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#fd-cf-bg-b)" />
      <rect width="91" height="55" fill="transparent" filter="url(#fd-cf-grain-b)" opacity="0.1" />
      <g filter="url(#fd-cf-shadow-b)">
        <text x="8" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.8" letterSpacing="0.3" fill="#f8f0e4">
          {data.companyJa}
        </text>
      </g>
      <text x="8" y="16.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.2" fill="#c0a880">
        {data.companyEn}
      </text>
      <text x="8" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#c0a880" opacity="0.7">
        {data.titleJa}
      </text>
      <line x1="8" y1="22" x2="83" y2="22" stroke="#c0a880" strokeWidth="0.06" opacity="0.3" />
      <text x="8" y="27" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#f8f0e4">TEL: {data.tel}</text>
      <text x="8" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#f8f0e4">EMAIL: {data.email}</text>
      <text x="8" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#f8f0e4">WEB: {data.website}</text>
      <line x1="8" y1="38" x2="83" y2="38" stroke="#c0a880" strokeWidth="0.06" opacity="0.3" />
      <text x="8" y="42.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#c0a880">〒{data.zipCode}</text>
      <text x="8" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#c0a880">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="75" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 6. FARM (農) — Farm-to-table organic
// Earth tones with organic shapes
// ============================================================
const farmTemplate: TemplateDefinition = {
  id: 'food-farm',
  name: 'FARM',
  nameJa: '農',
  category: 'food',
  designer: 'Farm Design',
  description: '農園の実り。大地と太陽が育む豊かさ。',
  accentColor: '#4A6741',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="fd-fm-bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f5f0e5" />
          <stop offset="100%" stopColor="#e8e0c8" />
        </linearGradient>
        <filter id="fd-fm-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="fd-fm-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#fd-fm-bg)" />
      <rect width="91" height="55" fill="transparent" filter="url(#fd-fm-grain)" opacity="0.08" />
      {/* Leaf decoration */}
      <g opacity="0.1">
        <path d="M 78 8 Q 82 5 85 8 Q 82 10 78 8" fill="#4A6741" />
        <line x1="78" y1="8" x2="85" y2="8" stroke="#4A6741" strokeWidth="0.06" />
        <path d="M 75 12 Q 78 10 80 13 Q 77 14 75 12" fill="#4A6741" />
      </g>
      {/* Earth horizon line */}
      <rect x="0" y="48" width="91" height="7" fill="#4A6741" opacity="0.04" />
      <line x1="0" y1="48" x2="91" y2="48" stroke="#4A6741" strokeWidth="0.08" opacity="0.15" />
      {/* Seed dots */}
      <g opacity="0.08">
        <circle cx="15" cy="50" r="0.3" fill="#4A6741" />
        <circle cx="30" cy="51" r="0.25" fill="#4A6741" />
        <circle cx="50" cy="50.5" r="0.3" fill="#4A6741" />
        <circle cx="70" cy="50" r="0.2" fill="#4A6741" />
      </g>
      {/* Name */}
      <g filter="url(#fd-fm-shadow)">
        <text x="10" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6" letterSpacing="0.8" fill="#3a4a30">
          {data.nameJa}
        </text>
      </g>
      <text x="10" y="26.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.4" fill="#6a8060">
        {data.nameEn}
      </text>
      <text x="10" y="34" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#5a7050">
        {data.titleJa}
      </text>
      <text x="10" y="41" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2" fill="#3a4a30">
        {data.companyJa}
      </text>
      {data.logo && <image href={data.logo} x="7" y="42" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="fd-fm-bg-b" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3a4a30" />
          <stop offset="100%" stopColor="#2a3a20" />
        </linearGradient>
        <filter id="fd-fm-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="fd-fm-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#fd-fm-bg-b)" />
      <rect width="91" height="55" fill="transparent" filter="url(#fd-fm-grain-b)" opacity="0.08" />
      <g filter="url(#fd-fm-shadow-b)">
        <text x="8" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.8" letterSpacing="0.3" fill="#e8e0c8">
          {data.companyJa}
        </text>
      </g>
      <text x="8" y="16.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.2" fill="#8aa080">
        {data.companyEn}
      </text>
      <text x="8" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#8aa080" opacity="0.7">
        {data.titleJa}
      </text>
      <line x1="8" y1="22" x2="83" y2="22" stroke="#8aa080" strokeWidth="0.06" opacity="0.3" />
      <text x="8" y="27" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#e8e0c8">TEL: {data.tel}</text>
      <text x="8" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#e8e0c8">EMAIL: {data.email}</text>
      <text x="8" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#e8e0c8">WEB: {data.website}</text>
      <line x1="8" y1="38" x2="83" y2="38" stroke="#8aa080" strokeWidth="0.06" opacity="0.3" />
      <text x="8" y="42.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#8aa080">〒{data.zipCode}</text>
      <text x="8" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#8aa080">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="75" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 7. BAKERY (窯) — Artisan bakery warmth
// Warm wheat tones with rustic texture
// ============================================================
const bakeryTemplate: TemplateDefinition = {
  id: 'food-bakery',
  name: 'BAKERY',
  nameJa: '窯',
  category: 'food',
  designer: 'Boulanger',
  description: '窯の温もり。小麦と酵母が紡ぐ幸福。',
  accentColor: '#8B6914',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="fd-bk-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8f0d8" />
          <stop offset="50%" stopColor="#f0e8c8" />
          <stop offset="100%" stopColor="#e8deb8" />
        </linearGradient>
        <filter id="fd-bk-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="fd-bk-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#fd-bk-bg)" />
      <rect width="91" height="55" fill="transparent" filter="url(#fd-bk-grain)" opacity="0.1" />
      {/* Wheat stalk decoration */}
      <g opacity="0.12">
        <line x1="80" y1="45" x2="80" y2="8" stroke="#8B6914" strokeWidth="0.08" />
        <ellipse cx="80" cy="10" rx="1" ry="2" fill="none" stroke="#8B6914" strokeWidth="0.06" transform="rotate(-15 80 10)" />
        <ellipse cx="79" cy="13" rx="1" ry="2" fill="none" stroke="#8B6914" strokeWidth="0.06" transform="rotate(15 79 13)" />
        <ellipse cx="80" cy="16" rx="1" ry="2" fill="none" stroke="#8B6914" strokeWidth="0.06" transform="rotate(-15 80 16)" />
        <ellipse cx="79" cy="19" rx="1" ry="2" fill="none" stroke="#8B6914" strokeWidth="0.06" transform="rotate(15 79 19)" />
      </g>
      {/* Scoring lines accent */}
      <g opacity="0.08">
        <line x1="5" y1="48" x2="20" y2="46" stroke="#8B6914" strokeWidth="0.15" />
        <line x1="8" y1="50" x2="23" y2="48" stroke="#8B6914" strokeWidth="0.12" />
      </g>
      {/* Name */}
      <g filter="url(#fd-bk-shadow)">
        <text x="10" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6" letterSpacing="0.8" fill="#5a4010">
          {data.nameJa}
        </text>
      </g>
      <text x="10" y="26.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.5" fill="#8B6914">
        {data.nameEn}
      </text>
      <text x="10" y="34" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#7a5a10">
        {data.titleJa}
      </text>
      <text x="10" y="41" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2" fill="#5a4010">
        {data.companyJa}
      </text>
      {data.logo && <image href={data.logo} x="7" y="42" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="fd-bk-bg-b" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5a4010" />
          <stop offset="100%" stopColor="#3a2a08" />
        </linearGradient>
        <filter id="fd-bk-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="fd-bk-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#fd-bk-bg-b)" />
      <rect width="91" height="55" fill="transparent" filter="url(#fd-bk-grain-b)" opacity="0.1" />
      <g filter="url(#fd-bk-shadow-b)">
        <text x="8" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.8" letterSpacing="0.3" fill="#f8f0d8">
          {data.companyJa}
        </text>
      </g>
      <text x="8" y="16.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.2" fill="#c0a060">
        {data.companyEn}
      </text>
      <text x="8" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#c0a060" opacity="0.7">
        {data.titleJa}
      </text>
      <line x1="8" y1="22" x2="83" y2="22" stroke="#c0a060" strokeWidth="0.06" opacity="0.3" />
      <text x="8" y="27" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#f8f0d8">TEL: {data.tel}</text>
      <text x="8" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#f8f0d8">EMAIL: {data.email}</text>
      <text x="8" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#f8f0d8">WEB: {data.website}</text>
      <line x1="8" y1="38" x2="83" y2="38" stroke="#c0a060" strokeWidth="0.06" opacity="0.3" />
      <text x="8" y="42.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#c0a060">〒{data.zipCode}</text>
      <text x="8" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#c0a060">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="75" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 8. TEA (茶) — Japanese tea ceremony
// Matcha green with zen garden tranquility
// ============================================================
const teaTemplate: TemplateDefinition = {
  id: 'food-tea',
  name: 'TEA',
  nameJa: '茶',
  category: 'food',
  designer: 'Sen no Rikyu',
  description: '茶の道。侘び寂びの静謐な空間。',
  accentColor: '#4a6848',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="fd-te-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f0ece0" />
          <stop offset="100%" stopColor="#e8e4d4" />
        </linearGradient>
        <filter id="fd-te-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="fd-te-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#fd-te-bg)" />
      <rect width="91" height="55" fill="transparent" filter="url(#fd-te-grain)" opacity="0.06" />
      {/* Zen garden raked lines */}
      <g opacity="0.06">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <path key={i} d={`M 0 ${42 + i * 1.5} Q 45 ${40 + i * 1.5} 91 ${42 + i * 1.5}`} fill="none" stroke="#4a6848" strokeWidth="0.04" />
        ))}
      </g>
      {/* Tea bowl circle */}
      <g opacity="0.12">
        <circle cx="75" cy="15" r="5" fill="none" stroke="#4a6848" strokeWidth="0.1" />
        <circle cx="75" cy="15" r="3.5" fill="#4a6848" opacity="0.04" />
      </g>
      {/* Name */}
      <g filter="url(#fd-te-shadow)">
        <text x="10" y="18" fontFamily="'Noto Sans JP', serif" fontWeight="300" fontSize="6" letterSpacing="1.5" fill="#3a4a30">
          {data.nameJa}
        </text>
      </g>
      <text x="10" y="24.5" fontFamily="'Inter', serif" fontWeight="200" fontSize="2" letterSpacing="0.8" fill="#6a8060">
        {data.nameEn}
      </text>
      <text x="10" y="32" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#5a7050">
        {data.titleJa}
      </text>
      <text x="10" y="39" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#3a4a30">
        {data.companyJa}
      </text>
      {data.logo && <image href={data.logo} x="7" y="42" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="fd-te-bg-b" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3a4a30" />
          <stop offset="100%" stopColor="#2a3a20" />
        </linearGradient>
        <filter id="fd-te-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="fd-te-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#fd-te-bg-b)" />
      <rect width="91" height="55" fill="transparent" filter="url(#fd-te-grain-b)" opacity="0.08" />
      <g filter="url(#fd-te-shadow-b)">
        <text x="8" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.8" letterSpacing="0.3" fill="#e8e4d4">
          {data.companyJa}
        </text>
      </g>
      <text x="8" y="16.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.2" fill="#8aa078">
        {data.companyEn}
      </text>
      <text x="8" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#8aa078" opacity="0.7">
        {data.titleJa}
      </text>
      <line x1="8" y1="22" x2="83" y2="22" stroke="#8aa078" strokeWidth="0.06" opacity="0.3" />
      <text x="8" y="27" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#e8e4d4">TEL: {data.tel}</text>
      <text x="8" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#e8e4d4">EMAIL: {data.email}</text>
      <text x="8" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#e8e4d4">WEB: {data.website}</text>
      <line x1="8" y1="38" x2="83" y2="38" stroke="#8aa078" strokeWidth="0.06" opacity="0.3" />
      <text x="8" y="42.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#8aa078">〒{data.zipCode}</text>
      <text x="8" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#8aa078">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="75" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 9. RAMEN (麺) — Ramen shop energy
// Bold red and warm steam rising
// ============================================================
const ramenTemplate: TemplateDefinition = {
  id: 'food-ramen',
  name: 'RAMEN',
  nameJa: '麺',
  category: 'food',
  designer: 'Ramen Artisan',
  description: 'ラーメンの熱気。湯気の向こうに見える情熱。',
  accentColor: '#B22222',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="fd-rm-bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fff5e8" />
          <stop offset="100%" stopColor="#f8e8d0" />
        </linearGradient>
        <filter id="fd-rm-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="fd-rm-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#fd-rm-bg)" />
      <rect width="91" height="55" fill="transparent" filter="url(#fd-rm-grain)" opacity="0.06" />
      {/* Bold noren-style top band */}
      <rect x="0" y="0" width="91" height="3" fill="#B22222" />
      <rect x="0" y="52" width="91" height="3" fill="#B22222" opacity="0.5" />
      {/* Steam rising */}
      <g opacity="0.08">
        <path d="M 75 48 C 73 42 77 38 75 32 C 73 26 77 22 75 16" fill="none" stroke="#B22222" strokeWidth="0.15" />
        <path d="M 80 50 C 78 44 82 40 80 34 C 78 28 82 24 80 18" fill="none" stroke="#B22222" strokeWidth="0.1" />
        <path d="M 85 48 C 83 43 87 39 85 33" fill="none" stroke="#B22222" strokeWidth="0.08" />
      </g>
      {/* Noodle wave lines */}
      <g opacity="0.06">
        <path d="M 5 45 Q 15 43 25 45 T 45 45" fill="none" stroke="#B22222" strokeWidth="0.1" />
        <path d="M 5 47 Q 15 45 25 47 T 45 47" fill="none" stroke="#B22222" strokeWidth="0.08" />
      </g>
      {/* Name */}
      <g filter="url(#fd-rm-shadow)">
        <text x="10" y="18" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="6" letterSpacing="0.5" fill="#B22222">
          {data.nameJa}
        </text>
      </g>
      <text x="10" y="24.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.3" fill="#8a4040">
        {data.nameEn}
      </text>
      <text x="10" y="32" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.7" fill="#8a4040">
        {data.titleJa}
      </text>
      <text x="10" y="39" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2" fill="#B22222">
        {data.companyJa}
      </text>
      {data.logo && <image href={data.logo} x="7" y="42" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="fd-rm-bg-b" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#B22222" />
          <stop offset="100%" stopColor="#8a1818" />
        </linearGradient>
        <filter id="fd-rm-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="fd-rm-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#fd-rm-bg-b)" />
      <rect width="91" height="55" fill="transparent" filter="url(#fd-rm-grain-b)" opacity="0.08" />
      <g filter="url(#fd-rm-shadow-b)">
        <text x="8" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.8" letterSpacing="0.3" fill="#fff5e8">
          {data.companyJa}
        </text>
      </g>
      <text x="8" y="16.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.2" fill="#f0c0a0">
        {data.companyEn}
      </text>
      <text x="8" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#f0c0a0" opacity="0.7">
        {data.titleJa}
      </text>
      <line x1="8" y1="22" x2="83" y2="22" stroke="#f0c0a0" strokeWidth="0.06" opacity="0.3" />
      <text x="8" y="27" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#fff5e8">TEL: {data.tel}</text>
      <text x="8" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#fff5e8">EMAIL: {data.email}</text>
      <text x="8" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#fff5e8">WEB: {data.website}</text>
      <line x1="8" y1="38" x2="83" y2="38" stroke="#f0c0a0" strokeWidth="0.06" opacity="0.3" />
      <text x="8" y="42.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#f0c0a0">〒{data.zipCode}</text>
      <text x="8" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#f0c0a0">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="75" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 10. IZAKAYA (居酒屋) — Japanese pub atmosphere
// Warm lantern glow with wood texture
// ============================================================
const izakayaTemplate: TemplateDefinition = {
  id: 'food-izakaya',
  name: 'IZAKAYA',
  nameJa: '居酒屋',
  category: 'food',
  designer: 'Izakaya Design',
  description: '居酒屋の灯り。提灯の温かな光に集う。',
  accentColor: '#D4742C',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="fd-iz-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a1a0c" />
          <stop offset="50%" stopColor="#1e1408" />
          <stop offset="100%" stopColor="#181004" />
        </linearGradient>
        <radialGradient id="fd-iz-glow" cx="50%" cy="25%" r="40%">
          <stop offset="0%" stopColor="#D4742C" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#D4742C" stopOpacity="0" />
        </radialGradient>
        <filter id="fd-iz-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="fd-iz-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#fd-iz-bg)" />
      <rect width="91" height="55" fill="url(#fd-iz-glow)" />
      <rect width="91" height="55" fill="transparent" filter="url(#fd-iz-grain)" opacity="0.12" />
      {/* Lantern shape */}
      <g opacity="0.15">
        <ellipse cx="78" cy="14" rx="5" ry="7" fill="none" stroke="#D4742C" strokeWidth="0.15" />
        <line x1="78" y1="7" x2="78" y2="4" stroke="#D4742C" strokeWidth="0.08" />
        <line x1="73" y1="14" x2="83" y2="14" stroke="#D4742C" strokeWidth="0.04" />
      </g>
      {/* Wood plank lines */}
      <g opacity="0.06">
        <line x1="0" y1="40" x2="91" y2="40" stroke="#D4742C" strokeWidth="0.08" />
        <line x1="0" y1="45" x2="91" y2="45" stroke="#D4742C" strokeWidth="0.06" />
        <line x1="0" y1="50" x2="91" y2="50" stroke="#D4742C" strokeWidth="0.04" />
      </g>
      {/* Name */}
      <g filter="url(#fd-iz-shadow)">
        <text x="10" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6" letterSpacing="0.8" fill="#D4742C">
          {data.nameJa}
        </text>
      </g>
      <text x="10" y="26.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.5" fill="#c09060">
        {data.nameEn}
      </text>
      <text x="10" y="34" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#c09060">
        {data.titleJa}
      </text>
      <text x="10" y="41" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2" fill="#D4742C">
        {data.companyJa}
      </text>
      {data.logo && <image href={data.logo} x="7" y="42" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="fd-iz-bg-b" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#2a1a0c" />
          <stop offset="100%" stopColor="#1e1408" />
        </linearGradient>
        <filter id="fd-iz-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="fd-iz-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#fd-iz-bg-b)" />
      <rect width="91" height="55" fill="transparent" filter="url(#fd-iz-grain-b)" opacity="0.12" />
      <g filter="url(#fd-iz-shadow-b)">
        <text x="8" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.8" letterSpacing="0.3" fill="#D4742C">
          {data.companyJa}
        </text>
      </g>
      <text x="8" y="16.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.2" fill="#c09060">
        {data.companyEn}
      </text>
      <text x="8" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#c09060" opacity="0.7">
        {data.titleJa}
      </text>
      <line x1="8" y1="22" x2="83" y2="22" stroke="#c09060" strokeWidth="0.06" opacity="0.3" />
      <text x="8" y="27" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#f0d8c0">TEL: {data.tel}</text>
      <text x="8" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#f0d8c0">EMAIL: {data.email}</text>
      <text x="8" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#f0d8c0">WEB: {data.website}</text>
      <line x1="8" y1="38" x2="83" y2="38" stroke="#c09060" strokeWidth="0.06" opacity="0.3" />
      <text x="8" y="42.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#c09060">〒{data.zipCode}</text>
      <text x="8" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#c09060">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="75" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

export const foodTemplates: TemplateDefinition[] = [
  kitchenTemplate,
  sakeTemplate,
  sushiTemplate,
  patisserieTemplate,
  cafeTemplate,
  farmTemplate,
  bakeryTemplate,
  teaTemplate,
  ramenTemplate,
  izakayaTemplate,
];
