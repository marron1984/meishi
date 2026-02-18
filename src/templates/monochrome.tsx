import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. NOIR (黒) — Pure black on black
// Deep abyss blacks with embossed border and diamond accents
// ============================================================
const noirTemplate: TemplateDefinition = {
  id: 'monochrome-noir',
  name: 'NOIR',
  nameJa: '黒',
  category: 'monochrome',
  designer: 'Monochrome Series',
  description: '漆黒の深淵。黒の中に黒で描く、究極のダーク。',
  accentColor: '#0a0a0a',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="mc-noir-f-bg" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#111111" />
          <stop offset="25%" stopColor="#0e0e0e" />
          <stop offset="50%" stopColor="#0a0a0a" />
          <stop offset="75%" stopColor="#080808" />
          <stop offset="100%" stopColor="#050505" />
        </linearGradient>
        <radialGradient id="mc-noir-f-spot" cx="0.3" cy="0.4" r="0.5">
          <stop offset="0%" stopColor="#1a1a1a" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#1a1a1a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="mc-noir-f-accent" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="50%" stopColor="#222222" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
        <filter id="mc-noir-f-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="screen" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="mc-noir-f-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.35" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.2" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#mc-noir-f-bg)" />
      <rect width="91" height="55" fill="url(#mc-noir-f-spot)" />
      <rect width="91" height="55" filter="url(#mc-noir-f-grain)" opacity="0.02" fill="transparent" />
      {/* Embossed double border */}
      <rect x="6" y="6" width="79" height="43" fill="none" stroke="#1a1a1a" strokeWidth="0.15" />
      <rect x="6.3" y="6.3" width="78.4" height="42.4" fill="none" stroke="#0d0d0d" strokeWidth="0.08" />
      {/* Corner diamond accents */}
      <polygon points="10,9 11,10 10,11 9,10" fill="#222222" />
      <polygon points="81,9 82,10 81,11 80,10" fill="#222222" />
      <polygon points="10,44 11,45 10,46 9,45" fill="#222222" />
      <polygon points="81,44 82,45 81,46 80,45" fill="#222222" />
      {/* Subtle horizontal accent line */}
      <line x1="25" y1="27" x2="66" y2="27" stroke="url(#mc-noir-f-accent)" strokeWidth="0.15" />
      {data.logo && <image href={data.logo} x="73" y="8" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <g filter="url(#mc-noir-f-shadow)">
        <text x="45.5" y="22" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="7" letterSpacing="1.5" fill="#e0e0e0">{data.nameJa}</text>
      </g>
      <text x="45.5" y="33" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.6" fill="#666666">{data.nameEn.toUpperCase()}</text>
      <text x="45.5" y="38" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#444444">{data.titleJa}</text>
      <text x="45.5" y="44" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#333333">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="mc-noir-b-bg" x1="0.7" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#111111" />
          <stop offset="50%" stopColor="#0a0a0a" />
          <stop offset="100%" stopColor="#060606" />
        </linearGradient>
        <radialGradient id="mc-noir-b-spot" cx="0.7" cy="0.6" r="0.4">
          <stop offset="0%" stopColor="#181818" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#181818" stopOpacity="0" />
        </radialGradient>
        <filter id="mc-noir-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="screen" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="mc-noir-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.06" dy="0.1" />
          <feFlood floodColor="#000" floodOpacity="0.15" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#mc-noir-b-bg)" />
      <rect width="91" height="55" fill="url(#mc-noir-b-spot)" />
      <rect width="91" height="55" filter="url(#mc-noir-b-grain)" opacity="0.02" fill="transparent" />
      {/* Border and corner accents */}
      <rect x="6" y="6" width="79" height="43" fill="none" stroke="#1a1a1a" strokeWidth="0.15" />
      <polygon points="81,44 82,45 81,46 80,45" fill="#222222" />
      <polygon points="10,9 11,10 10,11 9,10" fill="#222222" />
      {data.logo && <image href={data.logo} x="10" y="8" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="45.5" y="14" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" fill="#cccccc">{data.companyJa}</text>
      <text x="45.5" y="18" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" letterSpacing="0.3" fill="#555555">{data.companyEn}</text>
      <text x="45.5" y="22" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#444444">{data.titleJa}</text>
      <line x1="20" y1="25" x2="71" y2="25" stroke="#222222" strokeWidth="0.12" />
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#888888">{data.tel}</text>
      <text x="45.5" y="34" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#888888">{data.email}</text>
      <text x="45.5" y="38" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#888888">{data.website}</text>
      <line x1="20" y1="41" x2="71" y2="41" stroke="#222222" strokeWidth="0.12" />
      <text x="45.5" y="45.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#555555">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 2. IVORY (象牙) — Warm cream whites
// Luxurious ivory paper with gold-toned letterpress feel
// ============================================================
const ivoryTemplate: TemplateDefinition = {
  id: 'monochrome-ivory',
  name: 'IVORY',
  nameJa: '象牙',
  category: 'monochrome',
  designer: 'Monochrome Series',
  description: '象牙の肌。温かみのある白の重なり、上品な余韻。',
  accentColor: '#D4C5A9',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="mc-ivory-f-bg" x1="0" y1="0" x2="0.05" y2="1">
          <stop offset="0%" stopColor="#FBF9F4" />
          <stop offset="25%" stopColor="#FAF7F1" />
          <stop offset="50%" stopColor="#F8F4ED" />
          <stop offset="75%" stopColor="#F5EFE5" />
          <stop offset="100%" stopColor="#F0E8D8" />
        </linearGradient>
        <linearGradient id="mc-ivory-f-band" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#EDE5D8" stopOpacity="0" />
          <stop offset="20%" stopColor="#EDE5D8" />
          <stop offset="80%" stopColor="#EDE5D8" />
          <stop offset="100%" stopColor="#EDE5D8" stopOpacity="0" />
        </linearGradient>
        <filter id="mc-ivory-f-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="mc-ivory-f-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.08" dy="0.12" />
          <feFlood floodColor="#8B7355" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#mc-ivory-f-bg)" />
      <rect width="91" height="55" filter="url(#mc-ivory-f-grain)" opacity="0.025" fill="transparent" />
      {/* Warm band accents with fade */}
      <rect x="0" y="0" width="91" height="3" fill="url(#mc-ivory-f-band)" />
      <rect x="0" y="52" width="91" height="3" fill="url(#mc-ivory-f-band)" />
      <line x1="0" y1="3" x2="91" y2="3" stroke="#D4C5A9" strokeWidth="0.08" />
      <line x1="0" y1="52" x2="91" y2="52" stroke="#D4C5A9" strokeWidth="0.08" />
      {/* Decorative serif ornament with improved detail */}
      <line x1="8" y1="31" x2="18" y2="31" stroke="#D4C5A9" strokeWidth="0.12" />
      <circle cx="13" cy="31" r="0.5" fill="none" stroke="#D4C5A9" strokeWidth="0.1" />
      <circle cx="13" cy="31" r="0.15" fill="#D4C5A9" />
      {/* Subtle corner flourish */}
      <path d="M8,8 Q10,8 10,10" fill="none" stroke="#D4C5A9" strokeWidth="0.08" opacity="0.4" />
      <path d="M83,8 Q81,8 81,10" fill="none" stroke="#D4C5A9" strokeWidth="0.08" opacity="0.4" />
      {data.logo && <image href={data.logo} x="74" y="8" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <g filter="url(#mc-ivory-f-shadow)">
        <text x="10" y="21" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="6" letterSpacing="0.6" fill="#8B7355">{data.nameJa}</text>
      </g>
      <text x="10" y="27" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.4" fill="#B5A088">{data.nameEn}</text>
      <text x="10" y="37" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#C4B49A">{data.titleJa}</text>
      <text x="10" y="44" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#D4C5A9">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="mc-ivory-b-bg" x1="0" y1="1" x2="0.05" y2="0">
          <stop offset="0%" stopColor="#FBF9F4" />
          <stop offset="50%" stopColor="#FAF6F0" />
          <stop offset="100%" stopColor="#F0E8D8" />
        </linearGradient>
        <filter id="mc-ivory-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="mc-ivory-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.06" dy="0.08" />
          <feFlood floodColor="#8B7355" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#mc-ivory-b-bg)" />
      <rect width="91" height="55" filter="url(#mc-ivory-b-grain)" opacity="0.025" fill="transparent" />
      <rect x="0" y="0" width="91" height="3" fill="#EDE5D8" />
      <rect x="0" y="52" width="91" height="3" fill="#EDE5D8" />
      {/* Ornament on back */}
      <line x1="72" y1="42" x2="82" y2="42" stroke="#D4C5A9" strokeWidth="0.12" />
      <circle cx="77" cy="42" r="0.5" fill="none" stroke="#D4C5A9" strokeWidth="0.1" />
      <circle cx="77" cy="42" r="0.15" fill="#D4C5A9" />
      {/* Corner flourish */}
      <path d="M83,47 Q81,47 81,45" fill="none" stroke="#D4C5A9" strokeWidth="0.08" opacity="0.4" />
      {data.logo && <image href={data.logo} x="10" y="8" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="81" y="14" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" fill="#8B7355">{data.companyJa}</text>
      <text x="81" y="18.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" letterSpacing="0.2" fill="#B5A088">{data.companyEn}</text>
      <text x="81" y="23" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#C4B49A">{data.titleJa}</text>
      <line x1="40" y1="26" x2="81" y2="26" stroke="#D4C5A9" strokeWidth="0.12" />
      <text x="81" y="31" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#9A8B74">{data.tel}</text>
      <text x="81" y="35" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#9A8B74">{data.email}</text>
      <text x="81" y="39" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#9A8B74">{data.website}</text>
      <text x="81" y="47" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#C4B49A">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 3. GRAPHITE (鉛) — Dark pencil graphite tones
// Dense charcoal with halftone texture and pencil shaving detail
// ============================================================
const graphiteTemplate: TemplateDefinition = {
  id: 'monochrome-graphite',
  name: 'GRAPHITE',
  nameJa: '鉛',
  category: 'monochrome',
  designer: 'Monochrome Series',
  description: '鉛筆の芯。濃い灰色の階調が紙面に滲む質感。',
  accentColor: '#4B5563',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="mc-graphite-f-bg" x1="0" y1="0" x2="0.1" y2="1">
          <stop offset="0%" stopColor="#3B4555" />
          <stop offset="25%" stopColor="#394050" />
          <stop offset="50%" stopColor="#374151" />
          <stop offset="75%" stopColor="#333D4D" />
          <stop offset="100%" stopColor="#2F3949" />
        </linearGradient>
        <linearGradient id="mc-graphite-f-sheen" x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor="#4B5563" stopOpacity="0" />
          <stop offset="50%" stopColor="#4B5563" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#4B5563" stopOpacity="0" />
        </linearGradient>
        <filter id="mc-graphite-f-grain">
          <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="5" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="screen" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="mc-graphite-f-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.12" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#mc-graphite-f-bg)" />
      <rect width="91" height="55" fill="url(#mc-graphite-f-sheen)" />
      <rect width="91" height="55" filter="url(#mc-graphite-f-grain)" opacity="0.04" fill="transparent" />
      {/* Graphite texture striation lines */}
      <line x1="0" y1="5" x2="91" y2="5" stroke="#3D4756" strokeWidth="0.3" />
      <line x1="0" y1="15" x2="91" y2="15" stroke="#3B4555" strokeWidth="0.25" />
      <line x1="0" y1="25" x2="91" y2="25" stroke="#3E4857" strokeWidth="0.2" />
      <line x1="0" y1="35" x2="91" y2="35" stroke="#414B5A" strokeWidth="0.15" />
      <line x1="0" y1="45" x2="91" y2="45" stroke="#3D4756" strokeWidth="0.2" />
      {/* Pencil shaving accent curl */}
      <path d="M80,4 Q82,6 81,8 Q83,7 85,8" fill="none" stroke="#4B5563" strokeWidth="0.2" opacity="0.3" />
      <path d="M7,49 Q9,47 11,49" fill="none" stroke="#4B5563" strokeWidth="0.15" opacity="0.2" />
      {data.logo && <image href={data.logo} x="74" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <g filter="url(#mc-graphite-f-shadow)">
        <text x="8" y="24" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6" letterSpacing="0.4" fill="#E5E7EB">{data.nameJa}</text>
      </g>
      <text x="8" y="30" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.3" fill="#9CA3AF">{data.nameEn}</text>
      <text x="8" y="38" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#6B7280">{data.titleJa}</text>
      <text x="8" y="46" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#6B7280">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="mc-graphite-b-bg" x1="0.9" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#3B4555" />
          <stop offset="50%" stopColor="#374151" />
          <stop offset="100%" stopColor="#2F3949" />
        </linearGradient>
        <radialGradient id="mc-graphite-b-spot" cx="0.6" cy="0.3" r="0.4">
          <stop offset="0%" stopColor="#414B5A" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#414B5A" stopOpacity="0" />
        </radialGradient>
        <filter id="mc-graphite-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="5" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="screen" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="mc-graphite-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.08" dy="0.1" />
          <feFlood floodColor="#000" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#mc-graphite-b-bg)" />
      <rect width="91" height="55" fill="url(#mc-graphite-b-spot)" />
      <rect width="91" height="55" filter="url(#mc-graphite-b-grain)" opacity="0.04" fill="transparent" />
      {/* Striation lines */}
      <line x1="0" y1="8" x2="91" y2="8" stroke="#3D4756" strokeWidth="0.2" />
      <line x1="0" y1="24" x2="91" y2="24" stroke="#3E4857" strokeWidth="0.2" />
      <line x1="0" y1="40" x2="91" y2="40" stroke="#414B5A" strokeWidth="0.15" />
      {/* Pencil curl */}
      <path d="M6,48 Q8,46 10,48" fill="none" stroke="#4B5563" strokeWidth="0.15" opacity="0.25" />
      {data.logo && <image href={data.logo} x="10" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="83" y="14" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" fill="#E5E7EB">{data.companyJa}</text>
      <text x="83" y="18.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#6B7280">{data.companyEn}</text>
      <text x="83" y="22.5" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#6B7280">{data.titleJa}</text>
      <line x1="45" y1="25.5" x2="83" y2="25.5" stroke="#4B5563" strokeWidth="0.12" />
      <text x="83" y="30" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#9CA3AF">{data.tel}</text>
      <text x="83" y="34" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#9CA3AF">{data.email}</text>
      <text x="83" y="38" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#9CA3AF">{data.website}</text>
      <text x="83" y="46" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#6B7280">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 4. SNOW (雪) — Bright white with very light gray
// Pristine snow field with crystalline scatter
// ============================================================
const snowTemplate: TemplateDefinition = {
  id: 'monochrome-snow',
  name: 'SNOW',
  nameJa: '雪',
  category: 'monochrome',
  designer: 'Monochrome Series',
  description: '新雪の静寂。真白い面に薄い灰色がそっと息づく。',
  accentColor: '#E5E7EB',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="mc-snow-f-glow" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#FCFDFE" />
          <stop offset="70%" stopColor="#FAFBFC" />
          <stop offset="100%" stopColor="#F3F4F6" />
        </radialGradient>
        <radialGradient id="mc-snow-f-frost" cx="0.2" cy="0.8" r="0.4">
          <stop offset="0%" stopColor="#E5E7EB" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#E5E7EB" stopOpacity="0" />
        </radialGradient>
        <filter id="mc-snow-f-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="mc-snow-f-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.06" dy="0.1" />
          <feFlood floodColor="#9CA3AF" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#mc-snow-f-glow)" />
      <rect width="91" height="55" fill="url(#mc-snow-f-frost)" />
      <rect width="91" height="55" filter="url(#mc-snow-f-grain)" opacity="0.015" fill="transparent" />
      {/* Snow crystal scatter */}
      <circle cx="15" cy="10" r="0.4" fill="#E5E7EB" />
      <circle cx="35" cy="7" r="0.3" fill="#E5E7EB" />
      <circle cx="55" cy="12" r="0.5" fill="#E5E7EB" />
      <circle cx="72" cy="8" r="0.35" fill="#E5E7EB" />
      <circle cx="25" cy="15" r="0.25" fill="#F3F4F6" />
      <circle cx="80" cy="14" r="0.45" fill="#F3F4F6" />
      <circle cx="45" cy="5" r="0.3" fill="#E5E7EB" />
      {/* Snowflake accent */}
      <line x1="82" y1="44" x2="86" y2="44" stroke="#E5E7EB" strokeWidth="0.08" />
      <line x1="84" y1="42" x2="84" y2="46" stroke="#E5E7EB" strokeWidth="0.08" />
      <line x1="82.5" y1="42.5" x2="85.5" y2="45.5" stroke="#E5E7EB" strokeWidth="0.06" />
      <line x1="85.5" y1="42.5" x2="82.5" y2="45.5" stroke="#E5E7EB" strokeWidth="0.06" />
      {data.logo && <image href={data.logo} x="74" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <g filter="url(#mc-snow-f-shadow)">
        <text x="45.5" y="25" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="6.5" letterSpacing="1.2" fill="#D1D5DB">{data.nameJa}</text>
      </g>
      <text x="45.5" y="31.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="2" letterSpacing="0.5" fill="#E5E7EB">{data.nameEn}</text>
      <text x="45.5" y="39" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#E5E7EB">{data.titleJa}</text>
      <text x="45.5" y="46" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#F3F4F6">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="mc-snow-b-glow" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#F3F4F6" />
        </radialGradient>
        <radialGradient id="mc-snow-b-frost" cx="0.8" cy="0.2" r="0.4">
          <stop offset="0%" stopColor="#E5E7EB" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#E5E7EB" stopOpacity="0" />
        </radialGradient>
        <filter id="mc-snow-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="mc-snow-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.15" />
          <feOffset dx="0.05" dy="0.08" />
          <feFlood floodColor="#9CA3AF" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#mc-snow-b-glow)" />
      <rect width="91" height="55" fill="url(#mc-snow-b-frost)" />
      <rect width="91" height="55" filter="url(#mc-snow-b-grain)" opacity="0.015" fill="transparent" />
      {/* Crystal scatter */}
      <circle cx="20" cy="45" r="0.4" fill="#E5E7EB" />
      <circle cx="60" cy="48" r="0.3" fill="#E5E7EB" />
      <circle cx="75" cy="43" r="0.5" fill="#E5E7EB" />
      <circle cx="40" cy="50" r="0.35" fill="#F3F4F6" />
      {/* Snowflake */}
      <line x1="6" y1="44" x2="10" y2="44" stroke="#E5E7EB" strokeWidth="0.08" />
      <line x1="8" y1="42" x2="8" y2="46" stroke="#E5E7EB" strokeWidth="0.08" />
      {data.logo && <image href={data.logo} x="10" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="45.5" y="14" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="2.2" fill="#D1D5DB">{data.companyJa}</text>
      <text x="45.5" y="18.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.4" fill="#E5E7EB">{data.companyEn}</text>
      <text x="45.5" y="22.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#E5E7EB">{data.titleJa}</text>
      <line x1="30" y1="25.5" x2="61" y2="25.5" stroke="#F3F4F6" strokeWidth="0.12" />
      <text x="45.5" y="30.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#D1D5DB">{data.tel}</text>
      <text x="45.5" y="34.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#D1D5DB">{data.email}</text>
      <text x="45.5" y="38.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#D1D5DB">{data.website}</text>
      <text x="45.5" y="46" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#E5E7EB">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 5. INK (墨汁) — Dense black ink on white
// High contrast sumi ink with splash and drip details
// ============================================================
const inkTemplate: TemplateDefinition = {
  id: 'monochrome-ink',
  name: 'INK',
  nameJa: '墨汁',
  category: 'monochrome',
  designer: 'Monochrome Series',
  description: '墨汁の濃淡。太い墨の線が白紙に鮮やかに映える。',
  accentColor: '#111111',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="mc-ink-f-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFF8" />
          <stop offset="40%" stopColor="#FDFDF5" />
          <stop offset="100%" stopColor="#F8F5EC" />
        </linearGradient>
        <linearGradient id="mc-ink-f-bar" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#111111" />
          <stop offset="80%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#222222" />
        </linearGradient>
        <filter id="mc-ink-f-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="mc-ink-f-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.4" />
          <feOffset dx="0.15" dy="0.2" />
          <feFlood floodColor="#111" floodOpacity="0.12" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#mc-ink-f-bg)" />
      <rect width="91" height="55" filter="url(#mc-ink-f-grain)" opacity="0.02" fill="transparent" />
      {/* Ink splash decorative element */}
      <circle cx="78" cy="10" r="6" fill="#111111" opacity="0.06" />
      <circle cx="80" cy="8" r="3" fill="#111111" opacity="0.04" />
      <circle cx="75" cy="13" r="2" fill="#111111" opacity="0.03" />
      <circle cx="82" cy="12" r="1" fill="#111111" opacity="0.04" />
      {/* Ink company bar with gradient */}
      <rect x="7" y="38" width="35" height="3" fill="url(#mc-ink-f-bar)" rx="0.2" />
      {/* Micro ink drops */}
      <circle cx="44" cy="39.5" r="0.3" fill="#111111" opacity="0.2" />
      <circle cx="46" cy="38.5" r="0.15" fill="#111111" opacity="0.15" />
      {data.logo && <image href={data.logo} x="73" y="38" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <g filter="url(#mc-ink-f-shadow)">
        <text x="8" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="7" letterSpacing="0.5" fill="#111111">{data.nameJa}</text>
      </g>
      <text x="8" y="27" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="2" letterSpacing="0.3" fill="#111111">{data.nameEn.toUpperCase()}</text>
      <text x="8" y="34" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.8" fill="#444444">{data.titleJa}</text>
      <text x="9" y="40.2" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#FFFFF8">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="mc-ink-b-header" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0e0e0e" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
        <filter id="mc-ink-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="mc-ink-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.08" dy="0.12" />
          <feFlood floodColor="#111" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#FFFFF8" />
      <rect width="91" height="55" filter="url(#mc-ink-b-grain)" opacity="0.02" fill="transparent" />
      <rect x="0" y="0" width="91" height="12" fill="url(#mc-ink-b-header)" />
      {/* Ink drip detail */}
      <path d="M45,12 L45,14 Q45.5,15 45,16" stroke="#111111" strokeWidth="0.3" fill="none" opacity="0.4" />
      <circle cx="45" cy="16.5" r="0.5" fill="#111111" opacity="0.3" />
      {/* Decorative ink spot */}
      <circle cx="82" cy="45" r="3" fill="#111111" opacity="0.03" />
      {data.logo && <image href={data.logo} x="10" y="2" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="8" y="8" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#FFFFF8">{data.companyJa}</text>
      <text x="83" y="8" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(255,255,248,0.6)">{data.companyEn}</text>
      <text x="8" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#444444">{data.titleJa}</text>
      <text x="8" y="28" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#111111">{data.tel}</text>
      <text x="8" y="32" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#111111">{data.email}</text>
      <text x="8" y="36" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#111111">{data.website}</text>
      <line x1="8" y1="40" x2="83" y2="40" stroke="#111111" strokeWidth="0.15" />
      <text x="8" y="45" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#555555">〒{data.zipCode}</text>
      <text x="8" y="49" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#555555">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 6. CLOUD (雲) — Soft mid-gray tones
// Layered cloud atmosphere with elliptical formations
// ============================================================
const cloudTemplate: TemplateDefinition = {
  id: 'monochrome-cloud',
  name: 'CLOUD',
  nameJa: '雲',
  category: 'monochrome',
  designer: 'Monochrome Series',
  description: '雲の層。柔らかな中間グレーが幾重にも漂う。',
  accentColor: '#9CA3AF',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="mc-cloud-f-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F9FAFB" />
          <stop offset="30%" stopColor="#F5F6F8" />
          <stop offset="60%" stopColor="#F3F4F6" />
          <stop offset="100%" stopColor="#E5E7EB" />
        </linearGradient>
        <radialGradient id="mc-cloud-f-soft" cx="0.3" cy="0.8" r="0.5">
          <stop offset="0%" stopColor="#E5E7EB" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#E5E7EB" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="mc-cloud-f-haze" cx="0.7" cy="0.3" r="0.4">
          <stop offset="0%" stopColor="#D1D5DB" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#D1D5DB" stopOpacity="0" />
        </radialGradient>
        <filter id="mc-cloud-f-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="mc-cloud-f-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.06" dy="0.1" />
          <feFlood floodColor="#6B7280" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#mc-cloud-f-bg)" />
      <rect width="91" height="55" fill="url(#mc-cloud-f-soft)" />
      <rect width="91" height="55" fill="url(#mc-cloud-f-haze)" />
      <rect width="91" height="55" filter="url(#mc-cloud-f-grain)" opacity="0.02" fill="transparent" />
      {/* Cloud-like layered shapes */}
      <ellipse cx="25" cy="48" rx="20" ry="6" fill="#E5E7EB" opacity="0.6" />
      <ellipse cx="55" cy="50" rx="25" ry="7" fill="#E5E7EB" opacity="0.5" />
      <ellipse cx="75" cy="46" rx="18" ry="5" fill="#D1D5DB" opacity="0.35" />
      <ellipse cx="10" cy="52" rx="12" ry="4" fill="#E5E7EB" opacity="0.4" />
      {data.logo && <image href={data.logo} x="74" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <g filter="url(#mc-cloud-f-shadow)">
        <text x="12" y="18" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="6" letterSpacing="0.6" fill="#6B7280">{data.nameJa}</text>
      </g>
      <text x="12" y="24" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.3" fill="#9CA3AF">{data.nameEn}</text>
      <text x="12" y="32" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#9CA3AF">{data.titleJa}</text>
      <text x="12" y="38" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#D1D5DB">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="mc-cloud-b-bg" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#F9FAFB" />
          <stop offset="100%" stopColor="#E5E7EB" />
        </linearGradient>
        <radialGradient id="mc-cloud-b-haze" cx="0.4" cy="0.7" r="0.5">
          <stop offset="0%" stopColor="#D1D5DB" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#D1D5DB" stopOpacity="0" />
        </radialGradient>
        <filter id="mc-cloud-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="mc-cloud-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.15" />
          <feOffset dx="0.05" dy="0.08" />
          <feFlood floodColor="#6B7280" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#mc-cloud-b-bg)" />
      <rect width="91" height="55" fill="url(#mc-cloud-b-haze)" />
      <rect width="91" height="55" filter="url(#mc-cloud-b-grain)" opacity="0.02" fill="transparent" />
      {/* Cloud formations at top */}
      <ellipse cx="30" cy="6" rx="22" ry="6" fill="#E5E7EB" opacity="0.5" />
      <ellipse cx="65" cy="4" rx="18" ry="5" fill="#D1D5DB" opacity="0.35" />
      <ellipse cx="85" cy="8" rx="10" ry="4" fill="#E5E7EB" opacity="0.3" />
      {data.logo && <image href={data.logo} x="10" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="79" y="14" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" fill="#6B7280">{data.companyJa}</text>
      <text x="79" y="18.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#9CA3AF">{data.companyEn}</text>
      <text x="79" y="22.5" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#9CA3AF">{data.titleJa}</text>
      <line x1="40" y1="25.5" x2="79" y2="25.5" stroke="#D1D5DB" strokeWidth="0.12" />
      <text x="79" y="30.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#6B7280">{data.tel}</text>
      <text x="79" y="34.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#6B7280">{data.email}</text>
      <text x="79" y="38.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#6B7280">{data.website}</text>
      <text x="79" y="47" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#9CA3AF">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 7. ASH (灰) — Warm gray ash tones
// Warm earthy gray with ember-like particle accents
// ============================================================
const ashTemplate: TemplateDefinition = {
  id: 'monochrome-ash',
  name: 'ASH',
  nameJa: '灰',
  category: 'monochrome',
  designer: 'Monochrome Series',
  description: '灰の記憶。温かみのある灰色が燻るように広がる。',
  accentColor: '#78716C',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="mc-ash-f-bg" x1="0" y1="0" x2="0.1" y2="1">
          <stop offset="0%" stopColor="#F7F5F3" />
          <stop offset="30%" stopColor="#F5F5F4" />
          <stop offset="60%" stopColor="#F2F0ED" />
          <stop offset="100%" stopColor="#EFEDEA" />
        </linearGradient>
        <linearGradient id="mc-ash-f-stripe" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E7E5E4" />
          <stop offset="100%" stopColor="#DDD9D6" />
        </linearGradient>
        <filter id="mc-ash-f-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="mc-ash-f-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.08" dy="0.12" />
          <feFlood floodColor="#57534E" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#mc-ash-f-bg)" />
      <rect width="91" height="55" filter="url(#mc-ash-f-grain)" opacity="0.025" fill="transparent" />
      {/* Left accent stripe with gradient */}
      <rect x="0" y="0" width="4" height="55" fill="url(#mc-ash-f-stripe)" />
      <rect x="4" y="0" width="0.3" height="55" fill="#D6D3D1" />
      {/* Ash particle dots - embers floating */}
      <circle cx="50" cy="8" r="0.3" fill="#D6D3D1" opacity="0.5" />
      <circle cx="70" cy="12" r="0.2" fill="#D6D3D1" opacity="0.4" />
      <circle cx="60" cy="45" r="0.25" fill="#D6D3D1" opacity="0.45" />
      <circle cx="35" cy="48" r="0.18" fill="#D6D3D1" opacity="0.3" />
      <circle cx="80" cy="38" r="0.22" fill="#D6D3D1" opacity="0.35" />
      {data.logo && <image href={data.logo} x="74" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <g filter="url(#mc-ash-f-shadow)">
        <text x="14" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="5.5" letterSpacing="0.4" fill="#57534E">{data.nameJa}</text>
      </g>
      <text x="14" y="26" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.25" fill="#78716C">{data.nameEn}</text>
      <text x="14" y="34" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.7" fill="#A8A29E">{data.titleJa}</text>
      <text x="14" y="41" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#A8A29E">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="mc-ash-b-bg" x1="0.9" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#F7F5F3" />
          <stop offset="100%" stopColor="#EFEDEA" />
        </linearGradient>
        <linearGradient id="mc-ash-b-stripe" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#DDD9D6" />
          <stop offset="100%" stopColor="#E7E5E4" />
        </linearGradient>
        <filter id="mc-ash-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="mc-ash-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.06" dy="0.08" />
          <feFlood floodColor="#57534E" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#mc-ash-b-bg)" />
      <rect width="91" height="55" filter="url(#mc-ash-b-grain)" opacity="0.025" fill="transparent" />
      {/* Right accent stripe mirrored */}
      <rect x="87" y="0" width="4" height="55" fill="url(#mc-ash-b-stripe)" />
      <rect x="86.7" y="0" width="0.3" height="55" fill="#D6D3D1" />
      {/* Ember particles */}
      <circle cx="30" cy="48" r="0.25" fill="#D6D3D1" opacity="0.35" />
      <circle cx="15" cy="42" r="0.2" fill="#D6D3D1" opacity="0.3" />
      {data.logo && <image href={data.logo} x="10" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="80" y="14" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" fill="#57534E">{data.companyJa}</text>
      <text x="80" y="18.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#A8A29E">{data.companyEn}</text>
      <text x="80" y="22.5" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#A8A29E">{data.titleJa}</text>
      <line x1="35" y1="25.5" x2="80" y2="25.5" stroke="#D6D3D1" strokeWidth="0.12" />
      <text x="80" y="30" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#78716C">{data.tel}</text>
      <text x="80" y="34" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#78716C">{data.email}</text>
      <text x="80" y="38" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#78716C">{data.website}</text>
      <text x="80" y="46" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#A8A29E">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 8. CHALK (白墨) — Chalk white on dark board
// Dark slate chalkboard with dusty white chalk texture
// ============================================================
const chalkTemplate: TemplateDefinition = {
  id: 'monochrome-chalk',
  name: 'CHALK',
  nameJa: '白墨',
  category: 'monochrome',
  designer: 'Monochrome Series',
  description: '黒板と白墨。暗い背景に白い文字が浮き立つ教室の記憶。',
  accentColor: '#1E293B',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="mc-chalk-f-bg" x1="0" y1="0" x2="0.2" y2="1">
          <stop offset="0%" stopColor="#1F2D40" />
          <stop offset="30%" stopColor="#1D2A3C" />
          <stop offset="60%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#1A2535" />
        </linearGradient>
        <radialGradient id="mc-chalk-f-smudge" cx="0.6" cy="0.3" r="0.3">
          <stop offset="0%" stopColor="#2A3A4D" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#2A3A4D" stopOpacity="0" />
        </radialGradient>
        <filter id="mc-chalk-f-grain">
          <feTurbulence type="fractalNoise" baseFrequency="1.5" numOctaves="5" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="screen" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="mc-chalk-f-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.15" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#mc-chalk-f-bg)" />
      <rect width="91" height="55" fill="url(#mc-chalk-f-smudge)" />
      <rect width="91" height="55" filter="url(#mc-chalk-f-grain)" opacity="0.03" fill="transparent" />
      {/* Chalk dust particles */}
      <circle cx="10" cy="5" r="0.3" fill="rgba(255,255,255,0.05)" />
      <circle cx="30" cy="48" r="0.4" fill="rgba(255,255,255,0.04)" />
      <circle cx="70" cy="8" r="0.35" fill="rgba(255,255,255,0.06)" />
      <circle cx="50" cy="50" r="0.3" fill="rgba(255,255,255,0.04)" />
      <circle cx="85" cy="30" r="0.25" fill="rgba(255,255,255,0.05)" />
      {/* Chalk tray line */}
      <line x1="0" y1="53" x2="91" y2="53" stroke="rgba(255,255,255,0.06)" strokeWidth="0.3" />
      {data.logo && <image href={data.logo} x="73" y="38" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <g filter="url(#mc-chalk-f-shadow)">
        <text x="45.5" y="20" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="7" letterSpacing="1.5" fill="rgba(255,255,255,0.9)">{data.nameJa}</text>
      </g>
      <text x="45.5" y="28" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="2" letterSpacing="0.6" fill="rgba(255,255,255,0.55)">{data.nameEn}</text>
      <line x1="20" y1="33" x2="71" y2="33" stroke="rgba(255,255,255,0.12)" strokeWidth="0.15" />
      <text x="45.5" y="39" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="rgba(255,255,255,0.4)">{data.titleJa}</text>
      <text x="45.5" y="46" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="rgba(255,255,255,0.3)">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="mc-chalk-b-bg" x1="0.8" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#1F2D40" />
          <stop offset="50%" stopColor="#1D2A3C" />
          <stop offset="100%" stopColor="#1A2535" />
        </linearGradient>
        <radialGradient id="mc-chalk-b-smudge" cx="0.3" cy="0.7" r="0.3">
          <stop offset="0%" stopColor="#2A3A4D" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#2A3A4D" stopOpacity="0" />
        </radialGradient>
        <filter id="mc-chalk-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="1.5" numOctaves="5" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="screen" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="mc-chalk-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.06" dy="0.08" />
          <feFlood floodColor="#000" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#mc-chalk-b-bg)" />
      <rect width="91" height="55" fill="url(#mc-chalk-b-smudge)" />
      <rect width="91" height="55" filter="url(#mc-chalk-b-grain)" opacity="0.03" fill="transparent" />
      {/* Dust particles */}
      <circle cx="15" cy="45" r="0.3" fill="rgba(255,255,255,0.04)" />
      <circle cx="80" cy="10" r="0.4" fill="rgba(255,255,255,0.05)" />
      <circle cx="55" cy="48" r="0.25" fill="rgba(255,255,255,0.03)" />
      {/* Tray line */}
      <line x1="0" y1="53" x2="91" y2="53" stroke="rgba(255,255,255,0.06)" strokeWidth="0.3" />
      {data.logo && <image href={data.logo} x="10" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="10" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" fill="rgba(255,255,255,0.85)">{data.companyJa}</text>
      <text x="10" y="18.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(255,255,255,0.4)">{data.companyEn}</text>
      <text x="10" y="22.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="rgba(255,255,255,0.35)">{data.titleJa}</text>
      <line x1="10" y1="25.5" x2="50" y2="25.5" stroke="rgba(255,255,255,0.1)" strokeWidth="0.15" />
      <text x="10" y="30.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="rgba(255,255,255,0.65)">{data.tel}</text>
      <text x="10" y="34.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="rgba(255,255,255,0.65)">{data.email}</text>
      <text x="10" y="38.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="rgba(255,255,255,0.65)">{data.website}</text>
      <text x="10" y="46" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="rgba(255,255,255,0.35)">〒{data.zipCode}</text>
      <text x="10" y="49.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="rgba(255,255,255,0.35)">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 9. SHADOW (影) — Layered shadow depth
// White card with graduated shadow blocks creating perspective
// ============================================================
const shadowTemplate: TemplateDefinition = {
  id: 'monochrome-shadow',
  name: 'SHADOW',
  nameJa: '影',
  category: 'monochrome',
  designer: 'Monochrome Series',
  description: '影の重なり。白い空間に落ちる暗いブロックが奥行を描く。',
  accentColor: '#334155',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="mc-shadow-f-depth" x1="0.6" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#F8FAFC" stopOpacity="0" />
          <stop offset="30%" stopColor="#F1F5F9" />
          <stop offset="60%" stopColor="#E2E8F0" />
          <stop offset="80%" stopColor="#CBD5E1" />
          <stop offset="100%" stopColor="#B0BEC9" />
        </linearGradient>
        <filter id="mc-shadow-f-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="mc-shadow-f-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#1E293B" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#ffffff" />
      <rect width="91" height="55" filter="url(#mc-shadow-f-grain)" opacity="0.015" fill="transparent" />
      {/* Shadow blocks creating depth with smoother transition */}
      <rect x="60" y="0" width="31" height="55" fill="#F8FAFC" />
      <rect x="65" y="0" width="26" height="55" fill="#F1F5F9" />
      <rect x="72" y="0" width="19" height="55" fill="#E2E8F0" />
      <rect x="80" y="0" width="11" height="55" fill="#CBD5E1" />
      {/* Light leak accent */}
      <line x1="60" y1="0" x2="60" y2="55" stroke="#CBD5E1" strokeWidth="0.08" />
      {/* Subtle shadow perspective lines */}
      <line x1="60" y1="0" x2="91" y2="8" stroke="#CBD5E1" strokeWidth="0.04" opacity="0.3" />
      <line x1="60" y1="55" x2="91" y2="47" stroke="#CBD5E1" strokeWidth="0.04" opacity="0.3" />
      {data.logo && <image href={data.logo} x="63" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <g filter="url(#mc-shadow-f-shadow)">
        <text x="8" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6" letterSpacing="0.4" fill="#1E293B">{data.nameJa}</text>
      </g>
      <text x="8" y="26" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.3" fill="#64748B">{data.nameEn}</text>
      <text x="8" y="34" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#94A3B8">{data.titleJa}</text>
      <text x="8" y="42" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#94A3B8">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="mc-shadow-b-depth" x1="0" y1="0" x2="0.4" y2="0">
          <stop offset="0%" stopColor="#B0BEC9" />
          <stop offset="30%" stopColor="#CBD5E1" />
          <stop offset="60%" stopColor="#E2E8F0" />
          <stop offset="100%" stopColor="#F8FAFC" stopOpacity="0" />
        </linearGradient>
        <filter id="mc-shadow-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="mc-shadow-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.06" dy="0.1" />
          <feFlood floodColor="#1E293B" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#ffffff" />
      <rect width="91" height="55" filter="url(#mc-shadow-b-grain)" opacity="0.015" fill="transparent" />
      {/* Shadow blocks on left side (mirror) */}
      <rect x="0" y="0" width="31" height="55" fill="#F8FAFC" />
      <rect x="0" y="0" width="26" height="55" fill="#F1F5F9" />
      <rect x="0" y="0" width="19" height="55" fill="#E2E8F0" />
      <rect x="0" y="0" width="11" height="55" fill="#CBD5E1" />
      <line x1="31" y1="0" x2="31" y2="55" stroke="#CBD5E1" strokeWidth="0.08" />
      {/* Perspective lines */}
      <line x1="0" y1="8" x2="31" y2="0" stroke="#CBD5E1" strokeWidth="0.04" opacity="0.3" />
      <line x1="0" y1="47" x2="31" y2="55" stroke="#CBD5E1" strokeWidth="0.04" opacity="0.3" />
      {data.logo && <image href={data.logo} x="14" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="83" y="14" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" fill="#1E293B">{data.companyJa}</text>
      <text x="83" y="18.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#94A3B8">{data.companyEn}</text>
      <text x="83" y="22.5" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#94A3B8">{data.titleJa}</text>
      <line x1="40" y1="25.5" x2="83" y2="25.5" stroke="#CBD5E1" strokeWidth="0.15" />
      <text x="83" y="30.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#475569">{data.tel}</text>
      <text x="83" y="34.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#475569">{data.email}</text>
      <text x="83" y="38.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#475569">{data.website}</text>
      <text x="83" y="46" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#94A3B8">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 10. SILVER (銀) — Metallic silver tones
// Polished steel with multi-stop sheen and highlight accents
// ============================================================
const silverTemplate: TemplateDefinition = {
  id: 'monochrome-silver',
  name: 'SILVER',
  nameJa: '銀',
  category: 'monochrome',
  designer: 'Monochrome Series',
  description: '銀の光沢。クールなブルーグレーが金属の輝きを宿す。',
  accentColor: '#94A3B8',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="mc-silver-f-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#CBD5E1" />
          <stop offset="20%" stopColor="#D8E0E8" />
          <stop offset="40%" stopColor="#E2E8F0" />
          <stop offset="55%" stopColor="#F1F5F9" />
          <stop offset="70%" stopColor="#E2E8F0" />
          <stop offset="85%" stopColor="#D8E0E8" />
          <stop offset="100%" stopColor="#CBD5E1" />
        </linearGradient>
        <linearGradient id="mc-silver-f-sheen" x1="0" y1="0" x2="1" y2="0.5">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="30%" stopColor="#ffffff" stopOpacity="0.06" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.12" />
          <stop offset="70%" stopColor="#ffffff" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="mc-silver-f-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#94A3B8" stopOpacity="0" />
          <stop offset="20%" stopColor="#94A3B8" />
          <stop offset="80%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#94A3B8" stopOpacity="0" />
        </linearGradient>
        <filter id="mc-silver-f-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="mc-silver-f-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.08" dy="0.12" />
          <feFlood floodColor="#334155" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#mc-silver-f-bg)" />
      <rect width="91" height="55" fill="url(#mc-silver-f-sheen)" />
      <rect width="91" height="55" filter="url(#mc-silver-f-grain)" opacity="0.02" fill="transparent" />
      {/* Metallic accent lines with fade */}
      <line x1="0" y1="8" x2="91" y2="8" stroke="url(#mc-silver-f-line)" strokeWidth="0.08" />
      <line x1="0" y1="47" x2="91" y2="47" stroke="url(#mc-silver-f-line)" strokeWidth="0.08" />
      {/* Metallic highlight dots */}
      <circle cx="80" cy="12" r="0.3" fill="#ffffff" opacity="0.18" />
      <circle cx="75" cy="43" r="0.25" fill="#ffffff" opacity="0.12" />
      <circle cx="12" cy="10" r="0.2" fill="#ffffff" opacity="0.1" />
      {data.logo && <image href={data.logo} x="74" y="10" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <g filter="url(#mc-silver-f-shadow)">
        <text x="45.5" y="22" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="6" letterSpacing="0.8" fill="#334155">{data.nameJa}</text>
      </g>
      <text x="45.5" y="28.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.5" fill="#64748B">{data.nameEn.toUpperCase()}</text>
      <text x="45.5" y="37" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#94A3B8">{data.titleJa}</text>
      <text x="45.5" y="43" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#94A3B8">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="mc-silver-b-bg" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#CBD5E1" />
          <stop offset="20%" stopColor="#D8E0E8" />
          <stop offset="40%" stopColor="#E2E8F0" />
          <stop offset="55%" stopColor="#F1F5F9" />
          <stop offset="70%" stopColor="#E2E8F0" />
          <stop offset="85%" stopColor="#D8E0E8" />
          <stop offset="100%" stopColor="#CBD5E1" />
        </linearGradient>
        <linearGradient id="mc-silver-b-sheen" x1="1" y1="0.5" x2="0" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="40%" stopColor="#ffffff" stopOpacity="0.08" />
          <stop offset="60%" stopColor="#ffffff" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <filter id="mc-silver-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="mc-silver-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.06" dy="0.08" />
          <feFlood floodColor="#334155" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#mc-silver-b-bg)" />
      <rect width="91" height="55" fill="url(#mc-silver-b-sheen)" />
      <rect width="91" height="55" filter="url(#mc-silver-b-grain)" opacity="0.02" fill="transparent" />
      <line x1="0" y1="8" x2="91" y2="8" stroke="#94A3B8" strokeWidth="0.08" />
      <line x1="0" y1="47" x2="91" y2="47" stroke="#94A3B8" strokeWidth="0.08" />
      {/* Highlight dots */}
      <circle cx="12" cy="43" r="0.25" fill="#ffffff" opacity="0.15" />
      <circle cx="82" cy="12" r="0.2" fill="#ffffff" opacity="0.1" />
      {data.logo && <image href={data.logo} x="10" y="10" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="45.5" y="15" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" fill="#334155">{data.companyJa}</text>
      <text x="45.5" y="19.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" letterSpacing="0.3" fill="#64748B">{data.companyEn}</text>
      <text x="45.5" y="23.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#94A3B8">{data.titleJa}</text>
      <line x1="25" y1="26.5" x2="66" y2="26.5" stroke="#94A3B8" strokeWidth="0.1" />
      <text x="45.5" y="31" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#475569">{data.tel}</text>
      <text x="45.5" y="35" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#475569">{data.email}</text>
      <text x="45.5" y="39" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#475569">{data.website}</text>
      <text x="45.5" y="45" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#94A3B8">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

export const monochromeTemplates: TemplateDefinition[] = [
  noirTemplate,
  ivoryTemplate,
  graphiteTemplate,
  snowTemplate,
  inkTemplate,
  cloudTemplate,
  ashTemplate,
  chalkTemplate,
  shadowTemplate,
  silverTemplate,
];
