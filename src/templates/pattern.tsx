import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. STRIPE (縞) — Horizontal stripe pattern
// Clean parallel lines creating rhythm and movement
// ============================================================
const stripeTemplate: TemplateDefinition = {
  id: 'pattern-stripe',
  name: 'STRIPE',
  nameJa: '縞',
  category: 'pattern',
  designer: 'Daniel Buren',
  description: '縞模様の秩序。平行線が生み出すリズムと動き。',
  accentColor: '#1B4965',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="stripe-f-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="stripe-f-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="stripe-f-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f5f8fa" />
        </linearGradient>
        <pattern id="stripe-f-pat" x="0" y="0" width="91" height="4" patternUnits="userSpaceOnUse">
          <rect width="91" height="2" fill="#1B4965" opacity="0.05" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#stripe-f-bg)" />
      <rect width="91" height="55" fill="url(#stripe-f-pat)" />
      {/* Accent stripe band */}
      <rect x="0" y="17" width="91" height="2.5" fill="#1B4965" opacity="0.12" />
      <rect x="0" y="20" width="91" height="0.3" fill="#5FA8D3" opacity="0.2" />
      {/* Decorative stripe cluster on right */}
      <rect x="72" y="0" width="0.3" height="55" fill="#1B4965" opacity="0.04" />
      <rect x="74" y="0" width="0.15" height="55" fill="#5FA8D3" opacity="0.06" />
      <rect x="76" y="0" width="0.3" height="55" fill="#1B4965" opacity="0.04" />
      {/* Name */}
      <text x="10" y="25" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="5.5" letterSpacing="0.5" fill="#1B4965" filter="url(#stripe-f-shadow)">
        {data.nameJa}
      </text>
      <text x="10" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.8" letterSpacing="0.3" fill="#5FA8D3">
        {data.nameEn.toUpperCase()}
      </text>
      <text x="10" y="37" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#7BA7C4">
        {data.titleJa}
      </text>
      <text x="10" y="46" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#4A7A9A">
        {data.companyJa}
      </text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="75" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="stripe-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <pattern id="stripe-b-pat" x="0" y="0" width="91" height="4" patternUnits="userSpaceOnUse">
          <rect width="91" height="1.5" fill="#1B4965" opacity="0.04" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="#fafcfe" />
      <rect width="91" height="55" fill="url(#stripe-b-pat)" />
      <rect x="0" y="7" width="91" height="0.4" fill="#1B4965" opacity="0.15" />
      {/* Company */}
      <text x="10" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#1B4965">
        {data.companyJa}
      </text>
      <text x="10" y="18.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#5FA8D3">
        {data.companyEn}
      </text>
      <text x="10" y="22.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#7BA7C4">
        {data.titleJa}
      </text>
      <line x1="10" y1="25" x2="81" y2="25" stroke="#1B4965" strokeWidth="0.12" opacity="0.2" />
      <text x="10" y="30" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#4A6A8A">
        TEL {data.tel}
      </text>
      <text x="10" y="34" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#4A6A8A">
        {data.email}
      </text>
      <text x="10" y="38" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#4A6A8A">
        {data.website}
      </text>
      <line x1="10" y1="41" x2="81" y2="41" stroke="#dce8f0" strokeWidth="0.1" />
      <text x="10" y="45.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#8AACCC">
        〒{data.zipCode}
      </text>
      <text x="10" y="49" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#8AACCC">
        {data.addressJa}
      </text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="75" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
};

// ============================================================
// 2. CHECK (格) — Checkered pattern
// ============================================================
const checkTemplate: TemplateDefinition = {
  id: 'pattern-check', name: 'CHECK', nameJa: '格', category: 'pattern',
  designer: 'Vivienne Westwood', description: '格子の交差。縦横が織りなす秩序の美。', accentColor: '#5C4033',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="check-f-grain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" /><feColorMatrix type="saturate" values="0" in="noise" result="gray" /><feBlend mode="multiply" in="SourceGraphic" in2="gray" /></filter>
        <filter id="check-f-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.3" /><feOffset dx="0.1" dy="0.15" /><feFlood floodColor="#000" floodOpacity="0.08" /><feComposite operator="in" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        <pattern id="check-f-pat" x="0" y="0" width="7" height="7" patternUnits="userSpaceOnUse">
          <rect width="7" height="7" fill="#faf5f0" />
          <rect width="3.5" height="7" fill="#5C4033" opacity="0.04" />
          <rect width="7" height="3.5" fill="#5C4033" opacity="0.04" />
          <rect width="3.5" height="3.5" fill="#5C4033" opacity="0.04" />
        </pattern>
        <linearGradient id="check-f-fade" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#faf5f0" stopOpacity="0" /><stop offset="100%" stopColor="#faf5f0" stopOpacity="0.4" /></linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#check-f-pat)" />
      <rect width="91" height="55" fill="url(#check-f-fade)" />
      <rect x="0" y="0" width="4" height="55" fill="#5C4033" opacity="0.06" />
      <rect x="0" y="0" width="91" height="3" fill="#5C4033" opacity="0.04" />
      <text x="12" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="5.5" letterSpacing="0.5" fill="#3a2820" filter="url(#check-f-shadow)">{data.nameJa}</text>
      <text x="12" y="28" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.8" letterSpacing="0.3" fill="#8B6948">{data.nameEn.toUpperCase()}</text>
      <line x1="12" y1="31" x2="50" y2="31" stroke="#5C4033" strokeWidth="0.1" opacity="0.2" />
      <text x="12" y="36" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#9A8070">{data.titleJa}</text>
      <text x="12" y="44" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#7A6050">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="74" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <pattern id="check-b-pat" x="0" y="0" width="7" height="7" patternUnits="userSpaceOnUse"><rect width="7" height="7" fill="#faf5f0" /><rect width="3.5" height="7" fill="#5C4033" opacity="0.03" /><rect width="7" height="3.5" fill="#5C4033" opacity="0.03" /></pattern>
      </defs>
      <rect width="91" height="55" fill="url(#check-b-pat)" />
      <rect x="87" y="0" width="4" height="55" fill="#5C4033" opacity="0.06" />
      <text x="10" y="13" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#3a2820">{data.companyJa}</text>
      <text x="10" y="17.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#8B6948">{data.companyEn}</text>
      <text x="10" y="21.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#9A8070">{data.titleJa}</text>
      <line x1="10" y1="24" x2="81" y2="24" stroke="#5C4033" strokeWidth="0.12" opacity="0.15" />
      <text x="10" y="29" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#5C4033">TEL {data.tel}</text>
      <text x="10" y="33" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#5C4033">{data.email}</text>
      <text x="10" y="37" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#5C4033">{data.website}</text>
      <line x1="10" y1="40" x2="81" y2="40" stroke="#d5c5b5" strokeWidth="0.1" />
      <text x="10" y="44.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#9A8070">〒{data.zipCode}</text>
      <text x="10" y="48.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#9A8070">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="74" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
};

// ============================================================
// 3. HERRINGBONE (杉) — Herringbone pattern
// ============================================================
const herringboneTemplate: TemplateDefinition = {
  id: 'pattern-herringbone', name: 'HERRINGBONE', nameJa: '杉', category: 'pattern',
  designer: 'Issey Miyake', description: '杉綾の織り。Vの連なりが紡ぐ伝統の紋様。', accentColor: '#4A5D4A',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="herring-f-grain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" /><feColorMatrix type="saturate" values="0" in="noise" result="gray" /><feBlend mode="multiply" in="SourceGraphic" in2="gray" /></filter>
        <filter id="herring-f-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.25" /><feOffset dx="0.08" dy="0.12" /><feFlood floodColor="#000" floodOpacity="0.06" /><feComposite operator="in" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        <pattern id="herring-f-pat" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
          <path d="M 0,4 L 4,0 L 4,4 L 0,8 Z" fill="#4A5D4A" opacity="0.04" />
          <path d="M 4,4 L 8,0 L 8,4 L 4,8 Z" fill="#4A5D4A" opacity="0.06" />
        </pattern>
        <linearGradient id="herring-f-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#f5f5f0" /><stop offset="100%" stopColor="#eeefe8" /></linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#herring-f-bg)" />
      <rect width="91" height="55" fill="url(#herring-f-pat)" />
      <line x1="8" y1="12" x2="40" y2="12" stroke="#4A5D4A" strokeWidth="0.15" opacity="0.3" />
      <path d="M 80,8 L 82,5 L 84,8" fill="none" stroke="#4A5D4A" strokeWidth="0.12" opacity="0.15" />
      <path d="M 80,10 L 82,7 L 84,10" fill="none" stroke="#4A5D4A" strokeWidth="0.08" opacity="0.1" />
      <text x="10" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="5.5" letterSpacing="0.5" fill="#2a3a2a" filter="url(#herring-f-shadow)">{data.nameJa}</text>
      <text x="10" y="28" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.8" letterSpacing="0.3" fill="#6A7D6A">{data.nameEn}</text>
      <text x="10" y="35" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#8A9D8A">{data.titleJa}</text>
      <text x="10" y="45" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#5A6D5A">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="75" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <pattern id="herring-b-pat" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse"><path d="M 0,4 L 4,0 L 4,4 L 0,8 Z" fill="#4A5D4A" opacity="0.03" /><path d="M 4,4 L 8,0 L 8,4 L 4,8 Z" fill="#4A5D4A" opacity="0.04" /></pattern>
      </defs>
      <rect width="91" height="55" fill="#f5f5f0" />
      <rect width="91" height="55" fill="url(#herring-b-pat)" />
      <line x1="10" y1="8" x2="81" y2="8" stroke="#4A5D4A" strokeWidth="0.1" opacity="0.2" />
      <text x="10" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#2a3a2a">{data.companyJa}</text>
      <text x="10" y="18.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#6A7D6A">{data.companyEn}</text>
      <text x="10" y="22.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#8A9D8A">{data.titleJa}</text>
      <line x1="10" y1="25" x2="81" y2="25" stroke="#4A5D4A" strokeWidth="0.08" opacity="0.15" />
      <text x="10" y="30" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#4A5D4A">TEL {data.tel}</text>
      <text x="10" y="34" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#4A5D4A">{data.email}</text>
      <text x="10" y="38" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#4A5D4A">{data.website}</text>
      <line x1="10" y1="41" x2="81" y2="41" stroke="#c5d0c5" strokeWidth="0.08" />
      <text x="10" y="45.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#8A9D8A">〒{data.zipCode}</text>
      <text x="10" y="49" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#8A9D8A">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="75" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
};

// ============================================================
// 4. DOTS-P (点) — Polka dot pattern
// ============================================================
const dotsPTemplate: TemplateDefinition = {
  id: 'pattern-dots-p', name: 'DOTS-P', nameJa: '点', category: 'pattern',
  designer: 'Yayoi Kusama', description: '点の宇宙。無限に広がる水玉の永遠。', accentColor: '#8B2252',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="dotsp-f-grain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" /><feColorMatrix type="saturate" values="0" in="noise" result="gray" /><feBlend mode="multiply" in="SourceGraphic" in2="gray" /></filter>
        <filter id="dotsp-f-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.3" /><feOffset dx="0.1" dy="0.15" /><feFlood floodColor="#000" floodOpacity="0.08" /><feComposite operator="in" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        <pattern id="dotsp-f-pat" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse"><circle cx="3" cy="3" r="0.8" fill="#8B2252" opacity="0.06" /></pattern>
        <radialGradient id="dotsp-f-bg" cx="30%" cy="40%" r="60%"><stop offset="0%" stopColor="#fff5f8" /><stop offset="100%" stopColor="#f8eef2" /></radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#dotsp-f-bg)" />
      <rect width="91" height="55" fill="url(#dotsp-f-pat)" />
      <circle cx="78" cy="10" r="3" fill="#8B2252" opacity="0.06" />
      <circle cx="82" cy="44" r="2" fill="#8B2252" opacity="0.08" />
      <circle cx="6" cy="48" r="1.5" fill="#8B2252" opacity="0.05" />
      <text x="10" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="5.5" letterSpacing="0.4" fill="#5A1535" filter="url(#dotsp-f-shadow)">{data.nameJa}</text>
      <text x="10" y="28" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.8" letterSpacing="0.3" fill="#8B2252">{data.nameEn}</text>
      <text x="10" y="35" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#BB7090">{data.titleJa}</text>
      <text x="10" y="44" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#8B5070">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="74" y="38" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <pattern id="dotsp-b-pat" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse"><circle cx="3" cy="3" r="0.6" fill="#8B2252" opacity="0.04" /></pattern>
      </defs>
      <rect width="91" height="55" fill="#fdf5f8" />
      <rect width="91" height="55" fill="url(#dotsp-b-pat)" />
      <circle cx="83" cy="8" r="1.5" fill="#8B2252" opacity="0.08" />
      <text x="10" y="13" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#5A1535">{data.companyJa}</text>
      <text x="10" y="17.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#8B2252">{data.companyEn}</text>
      <text x="10" y="21.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#BB7090">{data.titleJa}</text>
      <line x1="10" y1="24" x2="60" y2="24" stroke="#8B2252" strokeWidth="0.1" opacity="0.15" />
      <text x="10" y="29" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#6A3050">TEL {data.tel}</text>
      <text x="10" y="33" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#6A3050">{data.email}</text>
      <text x="10" y="37" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#6A3050">{data.website}</text>
      <line x1="10" y1="40" x2="60" y2="40" stroke="#e0c8d4" strokeWidth="0.08" />
      <text x="10" y="44.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#BB7090">〒{data.zipCode}</text>
      <text x="10" y="48.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#BB7090">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="74" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
};

// ============================================================
// 5. HOUNDSTOOTH (犬) — Houndstooth pattern
// ============================================================
const houndstoothTemplate: TemplateDefinition = {
  id: 'pattern-houndstooth', name: 'HOUNDSTOOTH', nameJa: '犬', category: 'pattern',
  designer: 'Christian Dior', description: '千鳥格子。壊れたチェックが生む古典の優雅。', accentColor: '#2C2C2C',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="hound-f-grain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" /><feColorMatrix type="saturate" values="0" in="noise" result="gray" /><feBlend mode="multiply" in="SourceGraphic" in2="gray" /></filter>
        <filter id="hound-f-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.3" /><feOffset dx="0.1" dy="0.15" /><feFlood floodColor="#000" floodOpacity="0.08" /><feComposite operator="in" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        <pattern id="hound-f-pat" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
          <rect width="6" height="6" fill="#f5f5f5" />
          <path d="M 0,0 L 3,0 L 3,3 L 6,3 L 6,6 L 3,6 L 3,3 L 0,3 Z" fill="#2C2C2C" opacity="0.04" />
          <path d="M 3,0 L 6,0 L 6,3 Z" fill="#2C2C2C" opacity="0.06" />
          <path d="M 0,3 L 3,3 L 0,6 Z" fill="#2C2C2C" opacity="0.06" />
        </pattern>
        <linearGradient id="hound-f-fade" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#f8f8f8" stopOpacity="0.3" /><stop offset="100%" stopColor="#f0f0f0" stopOpacity="0" /></linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#hound-f-pat)" />
      <rect width="91" height="55" fill="url(#hound-f-fade)" />
      <rect x="0" y="0" width="91" height="1" fill="#2C2C2C" opacity="0.08" />
      <rect x="0" y="54" width="91" height="1" fill="#2C2C2C" opacity="0.08" />
      <text x="10" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="5.5" letterSpacing="0.4" fill="#1a1a1a" filter="url(#hound-f-shadow)">{data.nameJa}</text>
      <text x="10" y="28" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.8" letterSpacing="0.3" fill="#555555">{data.nameEn.toUpperCase()}</text>
      <text x="10" y="35" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#888888">{data.titleJa}</text>
      <text x="10" y="45" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#555555">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="75" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <pattern id="hound-b-pat" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse"><rect width="6" height="6" fill="#f5f5f5" /><path d="M 0,0 L 3,0 L 3,3 L 6,3 L 6,6 L 3,6 L 3,3 L 0,3 Z" fill="#2C2C2C" opacity="0.03" /></pattern>
      </defs>
      <rect width="91" height="55" fill="url(#hound-b-pat)" />
      <rect x="0" y="0" width="91" height="1" fill="#2C2C2C" opacity="0.08" />
      <rect x="0" y="54" width="91" height="1" fill="#2C2C2C" opacity="0.08" />
      <text x="10" y="13" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#1a1a1a">{data.companyJa}</text>
      <text x="10" y="17.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#555555">{data.companyEn}</text>
      <text x="10" y="21.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#888888">{data.titleJa}</text>
      <line x1="10" y1="24" x2="81" y2="24" stroke="#2C2C2C" strokeWidth="0.1" opacity="0.12" />
      <text x="10" y="29" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#444444">TEL {data.tel}</text>
      <text x="10" y="33" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#444444">{data.email}</text>
      <text x="10" y="37" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#444444">{data.website}</text>
      <line x1="10" y1="40" x2="81" y2="40" stroke="#d0d0d0" strokeWidth="0.08" />
      <text x="10" y="44.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#888888">〒{data.zipCode}</text>
      <text x="10" y="48.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#888888">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="75" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
};

// ============================================================
// 6. ARGYLE (菱) — Argyle diamond pattern
// ============================================================
const argyleTemplate: TemplateDefinition = {
  id: 'pattern-argyle', name: 'ARGYLE', nameJa: '菱', category: 'pattern',
  designer: 'Pringle of Scotland', description: '菱形の連鎖。ダイヤモンドが織りなす上品な格調。', accentColor: '#1A3C5C',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="argyle-f-grain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" /><feColorMatrix type="saturate" values="0" in="noise" result="gray" /><feBlend mode="multiply" in="SourceGraphic" in2="gray" /></filter>
        <filter id="argyle-f-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.25" /><feOffset dx="0.08" dy="0.12" /><feFlood floodColor="#000" floodOpacity="0.08" /><feComposite operator="in" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        <pattern id="argyle-f-pat" x="0" y="0" width="10" height="12" patternUnits="userSpaceOnUse">
          <rect width="10" height="12" fill="#f0f4f8" />
          <path d="M 5,0 L 10,6 L 5,12 L 0,6 Z" fill="#1A3C5C" opacity="0.04" />
          <line x1="0" y1="6" x2="10" y2="6" stroke="#8B1A1A" strokeWidth="0.06" opacity="0.08" />
          <line x1="5" y1="0" x2="5" y2="12" stroke="#8B1A1A" strokeWidth="0.06" opacity="0.08" />
        </pattern>
        <linearGradient id="argyle-f-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#f0f4f8" /><stop offset="100%" stopColor="#e8ecf2" /></linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#argyle-f-bg)" />
      <rect width="91" height="55" fill="url(#argyle-f-pat)" />
      <path d="M 80,10 L 83,14 L 80,18 L 77,14 Z" fill="none" stroke="#1A3C5C" strokeWidth="0.12" opacity="0.1" />
      <path d="M 80,10 L 83,14 L 80,18 L 77,14 Z" fill="#1A3C5C" opacity="0.02" />
      <text x="10" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="5.5" letterSpacing="0.4" fill="#1A2C4C" filter="url(#argyle-f-shadow)">{data.nameJa}</text>
      <text x="10" y="28" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.8" letterSpacing="0.3" fill="#4A6C8C">{data.nameEn.toUpperCase()}</text>
      <text x="10" y="35" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#7A9CBC">{data.titleJa}</text>
      <text x="10" y="45" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#4A6C8C">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="74" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <pattern id="argyle-b-pat" x="0" y="0" width="10" height="12" patternUnits="userSpaceOnUse"><rect width="10" height="12" fill="#f2f5f8" /><path d="M 5,0 L 10,6 L 5,12 L 0,6 Z" fill="#1A3C5C" opacity="0.03" /></pattern>
      </defs>
      <rect width="91" height="55" fill="url(#argyle-b-pat)" />
      <text x="10" y="13" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#1A2C4C">{data.companyJa}</text>
      <text x="10" y="17.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#4A6C8C">{data.companyEn}</text>
      <text x="10" y="21.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#7A9CBC">{data.titleJa}</text>
      <line x1="10" y1="24" x2="81" y2="24" stroke="#1A3C5C" strokeWidth="0.1" opacity="0.12" />
      <text x="10" y="29" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#2A4C6C">TEL {data.tel}</text>
      <text x="10" y="33" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#2A4C6C">{data.email}</text>
      <text x="10" y="37" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#2A4C6C">{data.website}</text>
      <line x1="10" y1="40" x2="81" y2="40" stroke="#c8d4e0" strokeWidth="0.08" />
      <text x="10" y="44.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#7A9CBC">〒{data.zipCode}</text>
      <text x="10" y="48.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#7A9CBC">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="74" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
};

// ============================================================
// 7. PLAID (格) — Scottish plaid / tartan
// ============================================================
const plaidTemplate: TemplateDefinition = {
  id: 'pattern-plaid', name: 'PLAID', nameJa: '格', category: 'pattern',
  designer: 'Burberry', description: 'タータンの誇り。色の交差が語るスコットランドの伝統。', accentColor: '#8B4513',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="plaid-f-grain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" /><feColorMatrix type="saturate" values="0" in="noise" result="gray" /><feBlend mode="multiply" in="SourceGraphic" in2="gray" /></filter>
        <filter id="plaid-f-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.25" /><feOffset dx="0.08" dy="0.12" /><feFlood floodColor="#000" floodOpacity="0.06" /><feComposite operator="in" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        <pattern id="plaid-f-pat" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
          <rect width="12" height="12" fill="#faf5ed" />
          <rect x="0" width="4" height="12" fill="#8B4513" opacity="0.04" />
          <rect x="8" width="1" height="12" fill="#CC0000" opacity="0.03" />
          <rect y="0" width="12" height="4" fill="#8B4513" opacity="0.04" />
          <rect y="8" width="12" height="1" fill="#CC0000" opacity="0.03" />
        </pattern>
        <linearGradient id="plaid-f-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#faf5ed" /><stop offset="100%" stopColor="#f2ede5" /></linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#plaid-f-bg)" />
      <rect width="91" height="55" fill="url(#plaid-f-pat)" />
      <line x1="0" y1="4" x2="91" y2="4" stroke="#8B4513" strokeWidth="0.15" opacity="0.1" />
      <line x1="88" y1="0" x2="88" y2="55" stroke="#CC0000" strokeWidth="0.08" opacity="0.08" />
      <text x="10" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="5.5" letterSpacing="0.5" fill="#4A2510" filter="url(#plaid-f-shadow)">{data.nameJa}</text>
      <text x="10" y="28" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.8" letterSpacing="0.3" fill="#8B4513">{data.nameEn}</text>
      <text x="10" y="35" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#AA8060">{data.titleJa}</text>
      <text x="10" y="45" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#7A5530">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="74" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <pattern id="plaid-b-pat" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse"><rect width="12" height="12" fill="#faf5ed" /><rect x="0" width="4" height="12" fill="#8B4513" opacity="0.03" /><rect y="0" width="12" height="4" fill="#8B4513" opacity="0.03" /></pattern>
      </defs>
      <rect width="91" height="55" fill="url(#plaid-b-pat)" />
      <text x="10" y="13" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#4A2510">{data.companyJa}</text>
      <text x="10" y="17.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#8B4513">{data.companyEn}</text>
      <text x="10" y="21.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#AA8060">{data.titleJa}</text>
      <line x1="10" y1="24" x2="81" y2="24" stroke="#8B4513" strokeWidth="0.1" opacity="0.12" />
      <text x="10" y="29" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#5A3520">TEL {data.tel}</text>
      <text x="10" y="33" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#5A3520">{data.email}</text>
      <text x="10" y="37" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#5A3520">{data.website}</text>
      <line x1="10" y1="40" x2="81" y2="40" stroke="#d5c5b0" strokeWidth="0.08" />
      <text x="10" y="44.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#AA8060">〒{data.zipCode}</text>
      <text x="10" y="48.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#AA8060">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="74" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
};

// ============================================================
// 8. ZIGZAG-P (雷) — Zigzag chevron pattern
// ============================================================
const zigzagPTemplate: TemplateDefinition = {
  id: 'pattern-zigzag-p', name: 'ZIGZAG-P', nameJa: '雷', category: 'pattern',
  designer: 'Missoni', description: '稲妻の軌跡。ジグザグが走る躍動のパターン。', accentColor: '#CC5500',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="zigzag-f-grain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" /><feColorMatrix type="saturate" values="0" in="noise" result="gray" /><feBlend mode="multiply" in="SourceGraphic" in2="gray" /></filter>
        <filter id="zigzag-f-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.3" /><feOffset dx="0.1" dy="0.15" /><feFlood floodColor="#000" floodOpacity="0.08" /><feComposite operator="in" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        <pattern id="zigzag-f-pat" x="0" y="0" width="8" height="6" patternUnits="userSpaceOnUse"><path d="M 0,3 L 2,0 L 4,3 L 6,0 L 8,3 L 6,6 L 4,3 L 2,6 L 0,3 Z" fill="none" stroke="#CC5500" strokeWidth="0.08" opacity="0.08" /></pattern>
        <linearGradient id="zigzag-f-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#fffaf5" /><stop offset="100%" stopColor="#f8f0e8" /></linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#zigzag-f-bg)" />
      <rect width="91" height="55" fill="url(#zigzag-f-pat)" />
      <path d="M 0,48 L 5,44 L 10,48 L 15,44 L 20,48 L 25,44 L 30,48 L 35,44 L 40,48 L 45,44 L 50,48 L 55,44 L 60,48 L 65,44 L 70,48 L 75,44 L 80,48 L 85,44 L 91,48" fill="none" stroke="#CC5500" strokeWidth="0.15" opacity="0.15" />
      <path d="M 78,8 L 80,5 L 82,8" fill="none" stroke="#CC5500" strokeWidth="0.12" opacity="0.15" />
      <path d="M 77,11 L 80,7 L 83,11" fill="none" stroke="#CC5500" strokeWidth="0.08" opacity="0.1" />
      <text x="10" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="5.5" letterSpacing="0.5" fill="#6A2A00" filter="url(#zigzag-f-shadow)">{data.nameJa}</text>
      <text x="10" y="28" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.8" letterSpacing="0.3" fill="#CC5500">{data.nameEn.toUpperCase()}</text>
      <text x="10" y="35" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#CC8855">{data.titleJa}</text>
      <text x="10" y="44" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#AA5530">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="74" y="38" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <pattern id="zigzag-b-pat" x="0" y="0" width="8" height="6" patternUnits="userSpaceOnUse"><path d="M 0,3 L 2,0 L 4,3 L 6,0 L 8,3" fill="none" stroke="#CC5500" strokeWidth="0.06" opacity="0.06" /></pattern>
      </defs>
      <rect width="91" height="55" fill="#fdf8f2" />
      <rect width="91" height="55" fill="url(#zigzag-b-pat)" />
      <path d="M 0,7 L 3,5 L 6,7 L 9,5 L 12,7 L 15,5 L 18,7 L 21,5 L 24,7 L 27,5 L 30,7" fill="none" stroke="#CC5500" strokeWidth="0.1" opacity="0.1" />
      <text x="10" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#6A2A00">{data.companyJa}</text>
      <text x="10" y="18.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#CC5500">{data.companyEn}</text>
      <text x="10" y="22.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#CC8855">{data.titleJa}</text>
      <line x1="10" y1="25" x2="81" y2="25" stroke="#CC5500" strokeWidth="0.1" opacity="0.12" />
      <text x="10" y="30" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#7A3A10">TEL {data.tel}</text>
      <text x="10" y="34" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#7A3A10">{data.email}</text>
      <text x="10" y="38" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#7A3A10">{data.website}</text>
      <line x1="10" y1="41" x2="81" y2="41" stroke="#e5d0c0" strokeWidth="0.08" />
      <text x="10" y="45.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#CC8855">〒{data.zipCode}</text>
      <text x="10" y="49" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#CC8855">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="74" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
};

// ============================================================
// 9. SCALE (鱗) — Fish scale / wave scallop pattern
// ============================================================
const scaleTemplate: TemplateDefinition = {
  id: 'pattern-scale', name: 'SCALE', nameJa: '鱗', category: 'pattern',
  designer: 'William Morris', description: '鱗模様の波動。半円が重なる有機的なリズム。', accentColor: '#2E5A5A',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="scale-f-grain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" /><feColorMatrix type="saturate" values="0" in="noise" result="gray" /><feBlend mode="multiply" in="SourceGraphic" in2="gray" /></filter>
        <filter id="scale-f-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.25" /><feOffset dx="0.08" dy="0.12" /><feFlood floodColor="#000" floodOpacity="0.06" /><feComposite operator="in" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        <pattern id="scale-f-pat" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
          <path d="M 0,8 A 4,4 0 0,1 4,4 A 4,4 0 0,1 8,8" fill="none" stroke="#2E5A5A" strokeWidth="0.1" opacity="0.06" />
          <path d="M -4,8 A 4,4 0 0,1 0,4" fill="none" stroke="#2E5A5A" strokeWidth="0.1" opacity="0.06" />
          <path d="M 8,4 A 4,4 0 0,1 12,8" fill="none" stroke="#2E5A5A" strokeWidth="0.1" opacity="0.06" />
        </pattern>
        <linearGradient id="scale-f-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#f5fafa" /><stop offset="100%" stopColor="#eaf2f2" /></linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#scale-f-bg)" />
      <rect width="91" height="55" fill="url(#scale-f-pat)" />
      <path d="M 70,10 A 8,8 0 0,1 86,10" fill="none" stroke="#2E5A5A" strokeWidth="0.1" opacity="0.1" />
      <path d="M 74,10 A 4,4 0 0,1 82,10" fill="none" stroke="#2E5A5A" strokeWidth="0.08" opacity="0.12" />
      <text x="10" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="5.5" letterSpacing="0.5" fill="#1A3A3A" filter="url(#scale-f-shadow)">{data.nameJa}</text>
      <text x="10" y="28" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.8" letterSpacing="0.3" fill="#4A7A7A">{data.nameEn}</text>
      <text x="10" y="35" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#7AACAC">{data.titleJa}</text>
      <text x="10" y="45" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#3A6A6A">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="75" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <pattern id="scale-b-pat" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse"><path d="M 0,8 A 4,4 0 0,1 4,4 A 4,4 0 0,1 8,8" fill="none" stroke="#2E5A5A" strokeWidth="0.08" opacity="0.04" /></pattern>
      </defs>
      <rect width="91" height="55" fill="#f5fafa" />
      <rect width="91" height="55" fill="url(#scale-b-pat)" />
      <text x="10" y="13" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#1A3A3A">{data.companyJa}</text>
      <text x="10" y="17.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#4A7A7A">{data.companyEn}</text>
      <text x="10" y="21.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#7AACAC">{data.titleJa}</text>
      <line x1="10" y1="24" x2="81" y2="24" stroke="#2E5A5A" strokeWidth="0.1" opacity="0.12" />
      <text x="10" y="29" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#2E5A5A">TEL {data.tel}</text>
      <text x="10" y="33" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#2E5A5A">{data.email}</text>
      <text x="10" y="37" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#2E5A5A">{data.website}</text>
      <line x1="10" y1="40" x2="81" y2="40" stroke="#c8dede" strokeWidth="0.08" />
      <text x="10" y="44.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#7AACAC">〒{data.zipCode}</text>
      <text x="10" y="48.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#7AACAC">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="75" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
};

// ============================================================
// 10. MOSAIC (片) — Mosaic tile pattern
// ============================================================
const mosaicTemplate: TemplateDefinition = {
  id: 'pattern-mosaic', name: 'MOSAIC', nameJa: '片', category: 'pattern',
  designer: 'Antoni Gaudí', description: '片の集積。小さなタイルが織りなすモザイクの世界。', accentColor: '#B85C3C',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="mosaic-f-grain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" /><feColorMatrix type="saturate" values="0" in="noise" result="gray" /><feBlend mode="multiply" in="SourceGraphic" in2="gray" /></filter>
        <filter id="mosaic-f-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.3" /><feOffset dx="0.1" dy="0.15" /><feFlood floodColor="#000" floodOpacity="0.08" /><feComposite operator="in" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        <pattern id="mosaic-f-pat" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse">
          <rect width="5" height="5" fill="#faf5f0" />
          <rect x="0.2" y="0.2" width="2.1" height="2.1" fill="#B85C3C" opacity="0.04" />
          <rect x="2.7" y="0.2" width="2.1" height="2.1" fill="#2E5A5A" opacity="0.03" />
          <rect x="0.2" y="2.7" width="2.1" height="2.1" fill="#8B7355" opacity="0.03" />
          <rect x="2.7" y="2.7" width="2.1" height="2.1" fill="#B85C3C" opacity="0.04" />
        </pattern>
        <linearGradient id="mosaic-f-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#faf5f0" /><stop offset="100%" stopColor="#f2ece5" /></linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#mosaic-f-bg)" />
      <rect width="91" height="55" fill="url(#mosaic-f-pat)" />
      <rect x="72" y="5" width="3" height="3" fill="#B85C3C" opacity="0.08" rx="0.2" />
      <rect x="76" y="5" width="3" height="3" fill="#2E5A5A" opacity="0.06" rx="0.2" />
      <rect x="80" y="5" width="3" height="3" fill="#8B7355" opacity="0.05" rx="0.2" />
      <rect x="72" y="9" width="3" height="3" fill="#8B7355" opacity="0.05" rx="0.2" />
      <rect x="76" y="9" width="3" height="3" fill="#B85C3C" opacity="0.07" rx="0.2" />
      <text x="10" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="5.5" letterSpacing="0.4" fill="#5A2A1A" filter="url(#mosaic-f-shadow)">{data.nameJa}</text>
      <text x="10" y="28" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.8" letterSpacing="0.3" fill="#B85C3C">{data.nameEn}</text>
      <text x="10" y="35" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#CC9080">{data.titleJa}</text>
      <text x="10" y="45" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#8A5030">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="74" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <pattern id="mosaic-b-pat" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse"><rect width="5" height="5" fill="#faf5f0" /><rect x="0.2" y="0.2" width="2.1" height="2.1" fill="#B85C3C" opacity="0.03" /><rect x="2.7" y="2.7" width="2.1" height="2.1" fill="#B85C3C" opacity="0.03" /></pattern>
      </defs>
      <rect width="91" height="55" fill="url(#mosaic-b-pat)" />
      <text x="10" y="13" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#5A2A1A">{data.companyJa}</text>
      <text x="10" y="17.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#B85C3C">{data.companyEn}</text>
      <text x="10" y="21.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#CC9080">{data.titleJa}</text>
      <line x1="10" y1="24" x2="81" y2="24" stroke="#B85C3C" strokeWidth="0.1" opacity="0.12" />
      <text x="10" y="29" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#6A3A20">TEL {data.tel}</text>
      <text x="10" y="33" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#6A3A20">{data.email}</text>
      <text x="10" y="37" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#6A3A20">{data.website}</text>
      <line x1="10" y1="40" x2="81" y2="40" stroke="#dcc8b8" strokeWidth="0.08" />
      <text x="10" y="44.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#CC9080">〒{data.zipCode}</text>
      <text x="10" y="48.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#CC9080">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="74" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
};

export const patternTemplates: TemplateDefinition[] = [
  stripeTemplate,
  checkTemplate,
  herringboneTemplate,
  dotsPTemplate,
  houndstoothTemplate,
  argyleTemplate,
  plaidTemplate,
  zigzagPTemplate,
  scaleTemplate,
  mosaicTemplate,
];
