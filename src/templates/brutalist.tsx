import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. CONCRETE (塊) — Raw concrete texture, heavy blocks
// Weathered béton brut with formwork imprints and aggregate
// ============================================================
const concreteTemplate: TemplateDefinition = {
  id: 'brutalist-concrete',
  name: 'CONCRETE',
  nameJa: '塊',
  category: 'brutalist',
  designer: 'Concrete Bureau',
  description: 'コンクリートの塊が持つ無骨な存在感。',
  accentColor: '#808080',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="brutalist-concrete-bg" x1="0" y1="0" x2="0.15" y2="1">
          <stop offset="0%" stopColor="#c8c4bf" />
          <stop offset="25%" stopColor="#bdb9b4" />
          <stop offset="55%" stopColor="#c2beb9" />
          <stop offset="80%" stopColor="#b5b1ac" />
          <stop offset="100%" stopColor="#bab6b1" />
        </linearGradient>
        <linearGradient id="brutalist-concrete-block-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#1e1e1e" />
        </linearGradient>
        <filter id="brutalist-concrete-texture">
          <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="6" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="brutalist-concrete-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.4" />
          <feOffset dx="0.2" dy="0.3" />
          <feFlood floodColor="#000" floodOpacity="0.25" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="brutalist-concrete-inset">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.15" />
          <feOffset dx="-0.05" dy="-0.08" />
          <feFlood floodColor="#fff" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#brutalist-concrete-bg)" />
      <rect width="91" height="55" filter="url(#brutalist-concrete-texture)" opacity="0.06" fill="transparent" />
      {/* Formwork joint lines */}
      <line x1="0" y1="12" x2="91" y2="12" stroke="#a09c97" strokeWidth="0.25" opacity="0.5" />
      <line x1="0" y1="24" x2="91" y2="24" stroke="#a09c97" strokeWidth="0.18" opacity="0.35" />
      <line x1="0" y1="36" x2="91" y2="36" stroke="#a09c97" strokeWidth="0.22" opacity="0.4" />
      <line x1="30" y1="0" x2="30" y2="55" stroke="#a09c97" strokeWidth="0.12" opacity="0.25" />
      <line x1="60" y1="0" x2="60" y2="55" stroke="#a09c97" strokeWidth="0.12" opacity="0.25" />
      {/* Aggregate spots */}
      <circle cx="15" cy="8" r="1.8" fill="#9a9690" opacity="0.18" />
      <circle cx="72" cy="44" r="2.2" fill="#9a9690" opacity="0.14" />
      <circle cx="42" cy="50" r="1.2" fill="#9a9690" opacity="0.16" />
      <ellipse cx="82" cy="6" rx="2" ry="1.3" fill="#a09c97" opacity="0.12" />
      {/* Heavy black text block with depth */}
      <g filter="url(#brutalist-concrete-shadow)">
        <rect x="5" y="14" width="52" height="14" fill="url(#brutalist-concrete-block-grad)" />
      </g>
      <rect x="5" y="14" width="52" height="0.4" fill="#3a3a3a" opacity="0.4" />
      {data.logo && <image href={data.logo} x="76" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <g filter="url(#brutalist-concrete-inset)">
        <text x="8" y="23" fontFamily="'Noto Sans JP', sans-serif" fontWeight="900" fontSize="5.5" letterSpacing="0.3" fill="#c8c4bf">{data.nameJa}</text>
      </g>
      <text x="8" y="35" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="2.5" letterSpacing="0.2" fill="#2a2a2a">{data.nameEn.toUpperCase()}</text>
      <text x="8" y="42" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="1.8" fill="#5a5855">{data.titleJa}</text>
      <text x="8" y="48" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.5" fill="#757170">{data.companyJa}</text>
      {/* Formwork bolt holes */}
      <circle cx="4" cy="4" r="0.6" fill="#a09c97" stroke="#8a8680" strokeWidth="0.15" />
      <circle cx="87" cy="4" r="0.6" fill="#a09c97" stroke="#8a8680" strokeWidth="0.15" />
      <circle cx="4" cy="51" r="0.6" fill="#a09c97" stroke="#8a8680" strokeWidth="0.15" />
      <circle cx="87" cy="51" r="0.6" fill="#a09c97" stroke="#8a8680" strokeWidth="0.15" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="brutalist-concrete-b-bg" x1="0.1" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#c2beb9" />
          <stop offset="40%" stopColor="#bdb9b4" />
          <stop offset="100%" stopColor="#c8c4bf" />
        </linearGradient>
        <filter id="brutalist-concrete-b-texture">
          <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="6" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="brutalist-concrete-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.15" dy="0.2" />
          <feFlood floodColor="#000" floodOpacity="0.2" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#brutalist-concrete-b-bg)" />
      <rect width="91" height="55" filter="url(#brutalist-concrete-b-texture)" opacity="0.06" fill="transparent" />
      {/* Formwork lines */}
      <line x1="0" y1="10" x2="91" y2="10" stroke="#a09c97" strokeWidth="0.18" opacity="0.35" />
      <line x1="0" y1="42" x2="91" y2="42" stroke="#a09c97" strokeWidth="0.18" opacity="0.35" />
      {/* Heavy company header with shadow */}
      <g filter="url(#brutalist-concrete-b-shadow)">
        <rect x="0" y="0" width="91" height="10" fill="#2a2a2a" />
      </g>
      {data.logo && <image href={data.logo} x="74" y="1.5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="8" y="7" fontFamily="'Noto Sans JP', sans-serif" fontWeight="800" fontSize="2.5" fill="#c8c4bf">{data.companyJa}</text>
      <text x="70" y="7" textAnchor="end" fontFamily="'Space Grotesk', sans-serif" fontWeight="600" fontSize="1.5" fill="#808080">{data.companyEn}</text>
      {/* Contact info */}
      <text x="8" y="16" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="1.6" fill="#5a5855">{data.titleJa}</text>
      <text x="8" y="22" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1.4" fill="#3a3a3a">TEL</text>
      <text x="20" y="22" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#5a5855">{data.tel}</text>
      <text x="8" y="27" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1.4" fill="#3a3a3a">MAIL</text>
      <text x="20" y="27" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#5a5855">{data.email}</text>
      <text x="8" y="32" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1.4" fill="#3a3a3a">WEB</text>
      <text x="20" y="32" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#5a5855">{data.website}</text>
      <rect x="0" y="35" width="91" height="0.5" fill="#2a2a2a" opacity="0.2" />
      {/* Aggregate decorations */}
      <circle cx="78" cy="25" r="1.5" fill="#a09c97" opacity="0.12" />
      <ellipse cx="82" cy="38" rx="2" ry="1" fill="#a09c97" opacity="0.1" />
      <text x="8" y="40" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.4" fill="#757170">〒{data.zipCode}</text>
      <text x="8" y="44" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.4" fill="#757170">{data.addressJa}</text>
      {/* Bolt holes */}
      <circle cx="4" cy="51" r="0.6" fill="#a09c97" stroke="#8a8680" strokeWidth="0.15" />
      <circle cx="87" cy="51" r="0.6" fill="#a09c97" stroke="#8a8680" strokeWidth="0.15" />
    </g>
  ),
};

// ============================================================
// 2. SLAB (板) — Heavy horizontal slab divisions
// Monumental concrete slabs with weathering and patina
// ============================================================
const slabTemplate: TemplateDefinition = {
  id: 'brutalist-slab',
  name: 'SLAB',
  nameJa: '板',
  category: 'brutalist',
  designer: 'Slab Bureau',
  description: '重厚なスラブが空間を断ち切る。',
  accentColor: '#333333',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="brutalist-slab-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ede9e4" />
          <stop offset="50%" stopColor="#e8e4e0" />
          <stop offset="100%" stopColor="#e3dfda" />
        </linearGradient>
        <linearGradient id="brutalist-slab-top" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2d2d2d" />
          <stop offset="100%" stopColor="#3a3a3a" />
        </linearGradient>
        <linearGradient id="brutalist-slab-mid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4a4a4a" />
          <stop offset="100%" stopColor="#585858" />
        </linearGradient>
        <linearGradient id="brutalist-slab-bot" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#383838" />
          <stop offset="100%" stopColor="#2d2d2d" />
        </linearGradient>
        <filter id="brutalist-slab-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="5" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="brutalist-slab-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.5" />
          <feOffset dx="0" dy="0.4" />
          <feFlood floodColor="#000" floodOpacity="0.3" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#brutalist-slab-bg)" />
      <rect width="91" height="55" filter="url(#brutalist-slab-texture)" opacity="0.04" fill="transparent" />
      {/* Heavy slabs with gradients */}
      <g filter="url(#brutalist-slab-shadow)">
        <rect x="0" y="0" width="91" height="18" fill="url(#brutalist-slab-top)" />
      </g>
      <rect x="0" y="18" width="91" height="0.3" fill="#1a1a1a" opacity="0.4" />
      <rect x="0" y="20" width="91" height="3" fill="url(#brutalist-slab-mid)" />
      <rect x="0" y="23" width="91" height="0.2" fill="#1a1a1a" opacity="0.3" />
      <g filter="url(#brutalist-slab-shadow)">
        <rect x="0" y="48" width="91" height="7" fill="url(#brutalist-slab-bot)" />
      </g>
      <rect x="0" y="48" width="91" height="0.3" fill="#1a1a1a" opacity="0.4" />
      {/* Slab surface patina */}
      <ellipse cx="50" cy="9" rx="8" ry="3" fill="#3a3a3a" opacity="0.08" />
      <ellipse cx="20" cy="35" rx="5" ry="2" fill="#d0ccc7" opacity="0.3" />
      {data.logo && <image href={data.logo} x="74" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="8" y="13" fontFamily="'Noto Sans JP', sans-serif" fontWeight="900" fontSize="7" letterSpacing="0.5" fill="#e8e4e0">{data.nameJa}</text>
      <text x="8" y="30" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="3" letterSpacing="0.3" fill="#333333">{data.nameEn.toUpperCase()}</text>
      <text x="8" y="38" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="1.8" fill="#666666">{data.titleJa}</text>
      <text x="8" y="44" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.5" fill="#888888">{data.companyJa}</text>
      <text x="8" y="53" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fill="#a0a0a0">{data.email}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="brutalist-slab-b-bg" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#ede9e4" />
          <stop offset="100%" stopColor="#e3dfda" />
        </linearGradient>
        <filter id="brutalist-slab-b-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="5" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="brutalist-slab-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.4" />
          <feOffset dx="0" dy="0.3" />
          <feFlood floodColor="#000" floodOpacity="0.25" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#brutalist-slab-b-bg)" />
      <rect width="91" height="55" filter="url(#brutalist-slab-b-texture)" opacity="0.04" fill="transparent" />
      {/* Slab divisions */}
      <g filter="url(#brutalist-slab-b-shadow)">
        <rect x="0" y="0" width="91" height="14" fill="#333333" />
      </g>
      <rect x="0" y="14" width="91" height="0.3" fill="#1a1a1a" opacity="0.4" />
      <rect x="0" y="16" width="91" height="2" fill="#555555" />
      <rect x="0" y="18" width="91" height="0.2" fill="#1a1a1a" opacity="0.3" />
      <g filter="url(#brutalist-slab-b-shadow)">
        <rect x="0" y="45" width="91" height="10" fill="#333333" />
      </g>
      <rect x="0" y="45" width="91" height="0.3" fill="#1a1a1a" opacity="0.4" />
      {/* Decorative patina spots */}
      <circle cx="70" cy="30" r="3" fill="#d8d4cf" opacity="0.2" />
      <ellipse cx="25" cy="40" rx="4" ry="1.5" fill="#d8d4cf" opacity="0.15" />
      {data.logo && <image href={data.logo} x="74" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="8" y="10" fontFamily="'Noto Sans JP', sans-serif" fontWeight="800" fontSize="2.5" fill="#e8e4e0">{data.companyJa}</text>
      <text x="70" y="10" textAnchor="end" fontFamily="'Space Grotesk', sans-serif" fontWeight="500" fontSize="1.5" fill="#808080">{data.companyEn}</text>
      <text x="8" y="23" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.6" fill="#555555">{data.titleJa}</text>
      <text x="8" y="28" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.5" fill="#333333">{data.tel}</text>
      <text x="8" y="33" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.5" fill="#333333">{data.email}</text>
      <text x="8" y="38" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.5" fill="#333333">{data.website}</text>
      <text x="8" y="50" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.3" fill="#a0a0a0">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 3. RAW (素) — Unfinished, exposed construction
// Board-formed concrete with rebar traces and tie holes
// ============================================================
const rawTemplate: TemplateDefinition = {
  id: 'brutalist-raw',
  name: 'RAW',
  nameJa: '素',
  category: 'brutalist',
  designer: 'Raw Bureau',
  description: '素のまま。加工を拒む原始的な力。',
  accentColor: '#A0A0A0',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="brutalist-raw-bg" x1="0" y1="0" x2="0.05" y2="1">
          <stop offset="0%" stopColor="#dcd8d3" />
          <stop offset="35%" stopColor="#d8d4d0" />
          <stop offset="65%" stopColor="#d4d0cb" />
          <stop offset="100%" stopColor="#d0ccc7" />
        </linearGradient>
        <linearGradient id="brutalist-raw-rebar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b83c3c" />
          <stop offset="50%" stopColor="#cc4444" />
          <stop offset="100%" stopColor="#a03535" />
        </linearGradient>
        <filter id="brutalist-raw-texture">
          <feTurbulence type="fractalNoise" baseFrequency="1.5" numOctaves="6" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="brutalist-raw-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.35" />
          <feOffset dx="0.12" dy="0.18" />
          <feFlood floodColor="#000" floodOpacity="0.2" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#brutalist-raw-bg)" />
      <rect width="91" height="55" filter="url(#brutalist-raw-texture)" opacity="0.05" fill="transparent" />
      {/* Exposed rebar lines with gradient */}
      <line x1="5" y1="0" x2="5" y2="55" stroke="url(#brutalist-raw-rebar)" strokeWidth="0.35" opacity="0.35" />
      <line x1="86" y1="0" x2="86" y2="55" stroke="url(#brutalist-raw-rebar)" strokeWidth="0.35" opacity="0.35" />
      {/* Board-formed wood grain texture */}
      {[...Array(8)].map((_, i) => (
        <line key={`brutalist-raw-grain-${i}`} x1="0" y1={3 + i * 7} x2="91" y2={3 + i * 7} stroke="#c8c4bf" strokeWidth="0.08" opacity="0.3" />
      ))}
      {/* Concrete joint lines */}
      <line x1="0" y1="15" x2="91" y2="15" stroke="#b0aca8" strokeWidth="0.4" />
      <line x1="0" y1="40" x2="91" y2="40" stroke="#b0aca8" strokeWidth="0.4" />
      {/* Form tie holes with depth */}
      <circle cx="5" cy="15" r="0.9" fill="#a0a0a0" stroke="#8a8a8a" strokeWidth="0.15" />
      <circle cx="86" cy="15" r="0.9" fill="#a0a0a0" stroke="#8a8a8a" strokeWidth="0.15" />
      <circle cx="5" cy="40" r="0.9" fill="#a0a0a0" stroke="#8a8a8a" strokeWidth="0.15" />
      <circle cx="86" cy="40" r="0.9" fill="#a0a0a0" stroke="#8a8a8a" strokeWidth="0.15" />
      <circle cx="5" cy="15" r="0.4" fill="#888888" />
      <circle cx="86" cy="15" r="0.4" fill="#888888" />
      <circle cx="5" cy="40" r="0.4" fill="#888888" />
      <circle cx="86" cy="40" r="0.4" fill="#888888" />
      {/* Rough texture patches */}
      <rect x="10" y="3" width="22" height="1" fill="#c8c4bf" rx="0.2" opacity="0.4" />
      <rect x="60" y="50" width="18" height="1" fill="#c8c4bf" rx="0.2" opacity="0.3" />
      {data.logo && <image href={data.logo} x="70" y="20" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <g filter="url(#brutalist-raw-shadow)">
        <text x="45.5" y="25" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="900" fontSize="7" letterSpacing="0.5" fill="#2a2a2a">{data.nameJa}</text>
      </g>
      <text x="45.5" y="33" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="2" letterSpacing="0.5" fill="#555555">{data.nameEn.toUpperCase()}</text>
      <text x="45.5" y="38" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.6" fill="#777777">{data.titleJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="brutalist-raw-b-bg" x1="0.05" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#d4d0cb" />
          <stop offset="50%" stopColor="#d8d4d0" />
          <stop offset="100%" stopColor="#dcd8d3" />
        </linearGradient>
        <filter id="brutalist-raw-b-texture">
          <feTurbulence type="fractalNoise" baseFrequency="1.5" numOctaves="6" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="brutalist-raw-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.15" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#brutalist-raw-b-bg)" />
      <rect width="91" height="55" filter="url(#brutalist-raw-b-texture)" opacity="0.05" fill="transparent" />
      {/* Rebar lines */}
      <line x1="5" y1="0" x2="5" y2="55" stroke="#cc4444" strokeWidth="0.35" opacity="0.3" />
      <line x1="86" y1="0" x2="86" y2="55" stroke="#cc4444" strokeWidth="0.35" opacity="0.3" />
      <line x1="0" y1="12" x2="91" y2="12" stroke="#b0aca8" strokeWidth="0.4" />
      <line x1="0" y1="42" x2="91" y2="42" stroke="#b0aca8" strokeWidth="0.4" />
      {/* Tie holes */}
      <circle cx="5" cy="12" r="0.9" fill="#a0a0a0" stroke="#8a8a8a" strokeWidth="0.15" />
      <circle cx="86" cy="12" r="0.9" fill="#a0a0a0" stroke="#8a8a8a" strokeWidth="0.15" />
      <circle cx="5" cy="42" r="0.9" fill="#a0a0a0" stroke="#8a8a8a" strokeWidth="0.15" />
      <circle cx="86" cy="42" r="0.9" fill="#a0a0a0" stroke="#8a8a8a" strokeWidth="0.15" />
      {data.logo && <image href={data.logo} x="74" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="10" y="9" fontFamily="'Noto Sans JP', sans-serif" fontWeight="900" fontSize="2.5" fill="#2a2a2a">{data.companyJa}</text>
      <text x="10" y="19" fontFamily="'Space Grotesk', sans-serif" fontWeight="600" fontSize="1.5" fill="#555555">{data.companyEn}</text>
      <text x="10" y="24" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.5" fill="#666666">{data.titleJa}</text>
      <rect x="10" y="26.5" width="40" height="0.3" fill="#b0aca8" opacity="0.5" />
      <text x="10" y="31" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.5" fill="#444444">{data.tel}</text>
      <text x="10" y="35.5" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.5" fill="#444444">{data.email}</text>
      <text x="10" y="40" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.5" fill="#444444">{data.website}</text>
      <text x="10" y="48" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.4" fill="#666666">〒{data.zipCode}</text>
      <text x="10" y="52" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.4" fill="#666666">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 4. BLOCK (壁) — Massive rectangular block composition
// Interlocking concrete mass with ventilation slits
// ============================================================
const blockTemplate: TemplateDefinition = {
  id: 'brutalist-block',
  name: 'BLOCK',
  nameJa: '壁',
  category: 'brutalist',
  designer: 'Block Bureau',
  description: '巨大なブロックの壁が威圧する。',
  accentColor: '#4a4a4a',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="brutalist-block-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f2eee9" />
          <stop offset="100%" stopColor="#ebe7e2" />
        </linearGradient>
        <linearGradient id="brutalist-block-wall" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4e4e4e" />
          <stop offset="40%" stopColor="#4a4a4a" />
          <stop offset="100%" stopColor="#424242" />
        </linearGradient>
        <linearGradient id="brutalist-block-cap" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6e6e6e" />
          <stop offset="100%" stopColor="#626262" />
        </linearGradient>
        <filter id="brutalist-block-texture">
          <feTurbulence type="fractalNoise" baseFrequency="1.0" numOctaves="5" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="brutalist-block-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.6" />
          <feOffset dx="0.5" dy="0.4" />
          <feFlood floodColor="#000" floodOpacity="0.3" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#brutalist-block-bg)" />
      <rect width="91" height="55" filter="url(#brutalist-block-texture)" opacity="0.04" fill="transparent" />
      {/* Large brutalist block with shadow */}
      <g filter="url(#brutalist-block-shadow)">
        <rect x="0" y="0" width="35" height="55" fill="url(#brutalist-block-wall)" />
      </g>
      <rect x="37" y="0" width="54" height="8" fill="url(#brutalist-block-cap)" />
      <rect x="37" y="47" width="54" height="8" fill="#5a5a5a" />
      {/* Ventilation grid with depth */}
      {[...Array(5)].map((_, i) => (
        <g key={`brutalist-block-vent-${i}`}>
          <rect x="5" y={10 + i * 4} width="25" height="2.2" fill="#3a3a3a" />
          <rect x="5" y={10 + i * 4} width="25" height="0.3" fill="#2a2a2a" />
        </g>
      ))}
      {/* Water stain on block */}
      <path d="M30,10 Q32,20 31,35 Q33,40 30,50" fill="none" stroke="#3e3e3e" strokeWidth="0.3" opacity="0.15" />
      {data.logo && <image href={data.logo} x="74" y="10" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="17.5" y="44" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="900" fontSize="5.5" fill="#f0ece8" writingMode="vertical-rl">{data.nameJa}</text>
      <text x="42" y="20" fontFamily="'Space Grotesk', sans-serif" fontWeight="800" fontSize="3" letterSpacing="0.3" fill="#4a4a4a">{data.nameEn.toUpperCase()}</text>
      <text x="42" y="27" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2" fill="#777777">{data.titleJa}</text>
      <text x="42" y="34" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.5" fill="#999999">{data.companyJa}</text>
      <text x="42" y="42" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#888888">{data.email}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="brutalist-block-b-bg" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#f2eee9" />
          <stop offset="100%" stopColor="#ebe7e2" />
        </linearGradient>
        <filter id="brutalist-block-b-texture">
          <feTurbulence type="fractalNoise" baseFrequency="1.0" numOctaves="5" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="brutalist-block-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.4" />
          <feOffset dx="0.2" dy="0.3" />
          <feFlood floodColor="#000" floodOpacity="0.25" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#brutalist-block-b-bg)" />
      <rect width="91" height="55" filter="url(#brutalist-block-b-texture)" opacity="0.04" fill="transparent" />
      {/* Block divisions */}
      <g filter="url(#brutalist-block-b-shadow)">
        <rect x="0" y="0" width="91" height="12" fill="#4a4a4a" />
      </g>
      <rect x="0" y="14" width="45" height="41" fill="#5a5a5a" opacity="0.08" />
      <rect x="0" y="14" width="0.5" height="41" fill="#4a4a4a" opacity="0.15" />
      <g filter="url(#brutalist-block-b-shadow)">
        <rect x="56" y="43" width="35" height="12" fill="#4a4a4a" />
      </g>
      {/* Decorative weathering */}
      <circle cx="75" cy="30" r="2.5" fill="#ddd9d4" opacity="0.15" />
      {data.logo && <image href={data.logo} x="74" y="2" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="8" y="8" fontFamily="'Noto Sans JP', sans-serif" fontWeight="900" fontSize="2.5" fill="#f0ece8">{data.companyJa}</text>
      <text x="70" y="8" textAnchor="end" fontFamily="'Space Grotesk', sans-serif" fontWeight="600" fontSize="1.5" fill="#a0a0a0">{data.companyEn}</text>
      <text x="8" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.6" fill="#555555">{data.titleJa}</text>
      <text x="8" y="26" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1.5" fill="#4a4a4a">{data.tel}</text>
      <text x="8" y="31" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1.5" fill="#4a4a4a">{data.email}</text>
      <text x="8" y="36" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1.5" fill="#4a4a4a">{data.website}</text>
      <text x="8" y="44" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.3" fill="#777777">〒{data.zipCode}</text>
      <text x="8" y="48" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.3" fill="#777777">{data.addressJa}</text>
      <text x="60" y="50" fontFamily="'Space Grotesk', sans-serif" fontWeight="600" fontSize="1.3" fill="#a0a0a0">{data.email}</text>
    </g>
  ),
};

// ============================================================
// 5. MONOLITH (柱) — Single towering monolith shape
// 2001-inspired black monolith with precise shadow geometry
// ============================================================
const monolithTemplate: TemplateDefinition = {
  id: 'brutalist-monolith',
  name: 'MONOLITH',
  nameJa: '柱',
  category: 'brutalist',
  designer: 'Monolith Bureau',
  description: '孤高のモノリスが静かに立ち尽くす。',
  accentColor: '#1a1a1a',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="brutalist-monolith-bg" x1="0" y1="0" x2="0.1" y2="1">
          <stop offset="0%" stopColor="#e5e1dc" />
          <stop offset="50%" stopColor="#e0dcd8" />
          <stop offset="100%" stopColor="#dbd7d2" />
        </linearGradient>
        <linearGradient id="brutalist-monolith-pillar" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1e1e1e" />
          <stop offset="50%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#151515" />
        </linearGradient>
        <linearGradient id="brutalist-monolith-shad" x1="0" y1="0" x2="1" y2="0.3">
          <stop offset="0%" stopColor="#1a1a1a" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#1a1a1a" stopOpacity="0" />
        </linearGradient>
        <filter id="brutalist-monolith-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="5" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="brutalist-monolith-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.5" />
          <feOffset dx="0.8" dy="0.5" />
          <feFlood floodColor="#000" floodOpacity="0.35" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#brutalist-monolith-bg)" />
      <rect width="91" height="55" filter="url(#brutalist-monolith-texture)" opacity="0.04" fill="transparent" />
      {/* Central monolith with cast shadow */}
      <rect x="53" y="5" width="4" height="47" fill="url(#brutalist-monolith-shad)" />
      <g filter="url(#brutalist-monolith-shadow)">
        <rect x="38" y="3" width="15" height="49" fill="url(#brutalist-monolith-pillar)" />
      </g>
      {/* Ground shadow ellipse */}
      <ellipse cx="48" cy="53" rx="12" ry="1" fill="#1a1a1a" opacity="0.08" />
      {/* Subtle edge highlights on monolith */}
      <line x1="38" y1="3" x2="38" y2="52" stroke="#2a2a2a" strokeWidth="0.15" />
      <line x1="53" y1="3" x2="53" y2="52" stroke="#0e0e0e" strokeWidth="0.1" />
      {data.logo && <image href={data.logo} x="5" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Name positioned left of monolith */}
      <text x="33" y="22" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="900" fontSize="5.5" fill="#1a1a1a">{data.nameJa}</text>
      <text x="33" y="28" textAnchor="end" fontFamily="'Space Grotesk', sans-serif" fontWeight="600" fontSize="2" fill="#555555">{data.nameEn}</text>
      <text x="33" y="34" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.6" fill="#888888">{data.companyJa}</text>
      {/* Title right of monolith */}
      <text x="58" y="28" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.6" fill="#777777">{data.titleJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="brutalist-monolith-b-bg" x1="0.1" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#dbd7d2" />
          <stop offset="100%" stopColor="#e5e1dc" />
        </linearGradient>
        <filter id="brutalist-monolith-b-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="5" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="brutalist-monolith-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.4" />
          <feOffset dx="0.4" dy="0.3" />
          <feFlood floodColor="#000" floodOpacity="0.3" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#brutalist-monolith-b-bg)" />
      <rect width="91" height="55" filter="url(#brutalist-monolith-b-texture)" opacity="0.04" fill="transparent" />
      {/* Narrow monolith on back with shadow */}
      <g filter="url(#brutalist-monolith-b-shadow)">
        <rect x="4" y="0" width="4" height="55" fill="#1a1a1a" />
      </g>
      <rect x="8" y="2" width="1.5" height="51" fill="#1a1a1a" opacity="0.06" />
      {/* Ground reference line */}
      <line x1="4" y1="53" x2="87" y2="53" stroke="#c0bcb7" strokeWidth="0.1" />
      {data.logo && <image href={data.logo} x="74" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="14" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="800" fontSize="2.5" fill="#1a1a1a">{data.companyJa}</text>
      <text x="14" y="17" fontFamily="'Space Grotesk', sans-serif" fontWeight="500" fontSize="1.5" fill="#555555">{data.companyEn}</text>
      <text x="14" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.5" fill="#777777">{data.titleJa}</text>
      <rect x="14" y="24.5" width="60" height="0.4" fill="#1a1a1a" opacity="0.15" />
      <text x="14" y="30" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.5" fill="#444444">{data.tel}</text>
      <text x="14" y="34.5" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.5" fill="#444444">{data.email}</text>
      <text x="14" y="39" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.5" fill="#444444">{data.website}</text>
      <rect x="14" y="42" width="60" height="0.4" fill="#1a1a1a" opacity="0.15" />
      <text x="14" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.4" fill="#777777">〒{data.zipCode}</text>
      <text x="14" y="51" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.4" fill="#777777">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 6. VOID-B (空洞) — Void/negative space cutout
// Deep recessed void with beveled edges and inner shadows
// ============================================================
const voidBTemplate: TemplateDefinition = {
  id: 'brutalist-void-b',
  name: 'VOID-B',
  nameJa: '空洞',
  category: 'brutalist',
  designer: 'Void Bureau',
  description: '空洞が生む反転した存在感。',
  accentColor: '#2a2a2a',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="brutalist-void-b-dark" x1="0" y1="0" x2="0.1" y2="1">
          <stop offset="0%" stopColor="#2e2e2e" />
          <stop offset="50%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#252525" />
        </linearGradient>
        <linearGradient id="brutalist-void-b-inner" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f4f0eb" />
          <stop offset="100%" stopColor="#ede9e4" />
        </linearGradient>
        <filter id="brutalist-void-b-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="5" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="brutalist-void-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.5" />
          <feOffset dx="0.15" dy="0.2" />
          <feFlood floodColor="#000" floodOpacity="0.3" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="brutalist-void-b-inset-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.8" />
          <feOffset dx="0.4" dy="0.6" />
          <feFlood floodColor="#000" floodOpacity="0.15" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#brutalist-void-b-dark)" />
      <rect width="91" height="55" filter="url(#brutalist-void-b-texture)" opacity="0.04" fill="transparent" />
      {/* Beveled void cutout */}
      <rect x="14" y="9" width="63" height="37" fill="#1e1e1e" />
      <g filter="url(#brutalist-void-b-inset-shadow)">
        <rect x="15" y="10" width="61" height="35" fill="url(#brutalist-void-b-inner)" />
      </g>
      {/* Inner shadow edges for depth */}
      <line x1="15" y1="10" x2="76" y2="10" stroke="#c8c4bf" strokeWidth="0.2" />
      <line x1="76" y1="10" x2="76" y2="45" stroke="#d4d0cb" strokeWidth="0.15" />
      <line x1="15" y1="10" x2="15" y2="45" stroke="#1a1a1a" strokeWidth="0.25" opacity="0.3" />
      <line x1="15" y1="45" x2="76" y2="45" stroke="#1a1a1a" strokeWidth="0.2" opacity="0.2" />
      {data.logo && <image href={data.logo} x="62" y="13" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <g filter="url(#brutalist-void-b-shadow)">
        <text x="45.5" y="25" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="900" fontSize="6" letterSpacing="0.5" fill="#2a2a2a">{data.nameJa}</text>
      </g>
      <text x="45.5" y="32" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="2" letterSpacing="0.3" fill="#555555">{data.nameEn.toUpperCase()}</text>
      <text x="45.5" y="39" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.6" fill="#888888">{data.titleJa}</text>
      {/* Corner markers on dark area */}
      <rect x="3" y="3" width="4" height="0.5" fill="#505050" />
      <rect x="3" y="3" width="0.5" height="4" fill="#505050" />
      <rect x="84" y="3" width="4" height="0.5" fill="#505050" />
      <rect x="87.5" y="3" width="0.5" height="4" fill="#505050" />
      <rect x="3" y="51.5" width="4" height="0.5" fill="#505050" />
      <rect x="3" y="48" width="0.5" height="4" fill="#505050" />
      <rect x="84" y="51.5" width="4" height="0.5" fill="#505050" />
      <rect x="87.5" y="48" width="0.5" height="4" fill="#505050" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="brutalist-void-b-b-dark" x1="0.1" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#2e2e2e" />
          <stop offset="100%" stopColor="#252525" />
        </linearGradient>
        <filter id="brutalist-void-b-b-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="5" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="brutalist-void-b-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.6" />
          <feOffset dx="0.3" dy="0.4" />
          <feFlood floodColor="#000" floodOpacity="0.15" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#brutalist-void-b-b-dark)" />
      <rect width="91" height="55" filter="url(#brutalist-void-b-b-texture)" opacity="0.04" fill="transparent" />
      {/* Void for content with inset */}
      <rect x="7" y="4" width="77" height="47" fill="#1e1e1e" />
      <g filter="url(#brutalist-void-b-b-shadow)">
        <rect x="8" y="5" width="75" height="45" fill="#f0ece8" />
      </g>
      {/* Bevel edges */}
      <line x1="8" y1="5" x2="83" y2="5" stroke="#ddd9d4" strokeWidth="0.15" />
      <line x1="8" y1="5" x2="8" y2="50" stroke="#1a1a1a" strokeWidth="0.2" opacity="0.2" />
      {/* Corner accent */}
      <rect x="3" y="3" width="2" height="0.4" fill="#505050" />
      <rect x="3" y="3" width="0.4" height="2" fill="#505050" />
      {data.logo && <image href={data.logo} x="12" y="8" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="45.5" y="14" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="800" fontSize="2.5" fill="#2a2a2a">{data.companyJa}</text>
      <text x="45.5" y="18.5" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="600" fontSize="1.5" fill="#555555">{data.companyEn}</text>
      <text x="45.5" y="22.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.5" fill="#777777">{data.titleJa}</text>
      <rect x="20" y="25" width="51" height="0.4" fill="#2a2a2a" opacity="0.2" />
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.5" fill="#444444">{data.tel}</text>
      <text x="45.5" y="34" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.5" fill="#444444">{data.email}</text>
      <text x="45.5" y="38" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.5" fill="#444444">{data.website}</text>
      <rect x="20" y="40.5" width="51" height="0.4" fill="#2a2a2a" opacity="0.2" />
      <text x="45.5" y="45" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.3" fill="#777777">〒{data.zipCode}</text>
      <text x="45.5" y="49" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.3" fill="#777777">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 7. GRID-B (格子) — Exposed structural grid
// Precise engineering grid with filled accent cells
// ============================================================
const gridBTemplate: TemplateDefinition = {
  id: 'brutalist-grid-b',
  name: 'GRID-B',
  nameJa: '格子',
  category: 'brutalist',
  designer: 'Grid Bureau',
  description: '剥き出しの構造グリッドが秩序を示す。',
  accentColor: '#555555',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="brutalist-grid-b-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f4f0eb" />
          <stop offset="100%" stopColor="#ede9e4" />
        </linearGradient>
        <linearGradient id="brutalist-grid-b-cell" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5a5a5a" />
          <stop offset="100%" stopColor="#505050" />
        </linearGradient>
        <linearGradient id="brutalist-grid-b-accent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d43333" />
          <stop offset="100%" stopColor="#b82828" />
        </linearGradient>
        <filter id="brutalist-grid-b-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="brutalist-grid-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.2" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#brutalist-grid-b-bg)" />
      <rect width="91" height="55" filter="url(#brutalist-grid-b-texture)" opacity="0.03" fill="transparent" />
      {/* Heavy grid lines */}
      {[...Array(6)].map((_, i) => (
        <line key={`brutalist-grid-h-${i}`} x1="0" y1={i * 11} x2="91" y2={i * 11} stroke="#555555" strokeWidth="0.5" />
      ))}
      {[...Array(9)].map((_, i) => (
        <line key={`brutalist-grid-v-${i}`} x1={i * 11.375} y1="0" x2={i * 11.375} y2="55" stroke="#555555" strokeWidth="0.5" />
      ))}
      {/* Filled grid cells */}
      <rect x="0" y="0" width="11.375" height="11" fill="url(#brutalist-grid-b-cell)" />
      <rect x="79.625" y="44" width="11.375" height="11" fill="url(#brutalist-grid-b-cell)" />
      {/* Red accent cell with gradient */}
      <rect x="0" y="44" width="11.375" height="11" fill="url(#brutalist-grid-b-accent)" opacity="0.8" />
      {/* Subtle node dots at intersections */}
      <circle cx="0" cy="0" r="0.6" fill="#555555" />
      <circle cx="91" cy="0" r="0.6" fill="#555555" />
      <circle cx="0" cy="55" r="0.6" fill="#555555" />
      <circle cx="91" cy="55" r="0.6" fill="#555555" />
      {data.logo && <image href={data.logo} x="74" y="2" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <g filter="url(#brutalist-grid-b-shadow)">
        <text x="45.5" y="25" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="900" fontSize="6" letterSpacing="0.5" fill="#2a2a2a">{data.nameJa}</text>
      </g>
      <text x="45.5" y="35" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="2.5" letterSpacing="0.3" fill="#555555">{data.nameEn.toUpperCase()}</text>
      <text x="45.5" y="42" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.6" fill="#888888">{data.titleJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="brutalist-grid-b-b-bg" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#f4f0eb" />
          <stop offset="100%" stopColor="#ede9e4" />
        </linearGradient>
        <filter id="brutalist-grid-b-b-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="brutalist-grid-b-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.1" dy="0.12" />
          <feFlood floodColor="#000" floodOpacity="0.15" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#brutalist-grid-b-b-bg)" />
      <rect width="91" height="55" filter="url(#brutalist-grid-b-b-texture)" opacity="0.03" fill="transparent" />
      {/* Grid lines */}
      {[...Array(6)].map((_, i) => (
        <line key={`brutalist-grid-hb-${i}`} x1="0" y1={i * 11} x2="91" y2={i * 11} stroke="#555555" strokeWidth="0.4" />
      ))}
      {[...Array(9)].map((_, i) => (
        <line key={`brutalist-grid-vb-${i}`} x1={i * 11.375} y1="0" x2={i * 11.375} y2="55" stroke="#555555" strokeWidth="0.4" />
      ))}
      {/* Header row fill */}
      <rect x="0" y="0" width="91" height="11" fill="#555555" />
      {/* Red accent corner */}
      <rect x="79.625" y="0" width="11.375" height="11" fill="#cc3333" opacity="0.7" />
      {data.logo && <image href={data.logo} x="80" y="1.5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="8" y="7.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="800" fontSize="2.5" fill="#f0ece8">{data.companyJa}</text>
      <text x="76" y="7.5" textAnchor="end" fontFamily="'Space Grotesk', sans-serif" fontWeight="500" fontSize="1.5" fill="#a0a0a0">{data.companyEn}</text>
      <text x="8" y="16" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.5" fill="#666666">{data.titleJa}</text>
      <text x="8" y="22" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1.5" fill="#2a2a2a">{data.tel}</text>
      <text x="8" y="28" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1.5" fill="#2a2a2a">{data.email}</text>
      <text x="8" y="34" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1.5" fill="#2a2a2a">{data.website}</text>
      <text x="8" y="42" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.4" fill="#666666">〒{data.zipCode}</text>
      <text x="8" y="48" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.4" fill="#666666">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 8. SHAFT (軸) — Vertical shaft / elevator core
// Industrial elevator shaft with floor indicators
// ============================================================
const shaftTemplate: TemplateDefinition = {
  id: 'brutalist-shaft',
  name: 'SHAFT',
  nameJa: '軸',
  category: 'brutalist',
  designer: 'Shaft Bureau',
  description: 'エレベーターシャフトのような垂直の軸。',
  accentColor: '#3a3a3a',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="brutalist-shaft-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#dcd8d3" />
          <stop offset="100%" stopColor="#d4d0cb" />
        </linearGradient>
        <linearGradient id="brutalist-shaft-col" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3e3e3e" />
          <stop offset="50%" stopColor="#3a3a3a" />
          <stop offset="100%" stopColor="#353535" />
        </linearGradient>
        <linearGradient id="brutalist-shaft-indicator" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d43333" />
          <stop offset="100%" stopColor="#c02828" />
        </linearGradient>
        <filter id="brutalist-shaft-texture">
          <feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves="5" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="brutalist-shaft-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.5" />
          <feOffset dx="0.4" dy="0.3" />
          <feFlood floodColor="#000" floodOpacity="0.3" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#brutalist-shaft-bg)" />
      <rect width="91" height="55" filter="url(#brutalist-shaft-texture)" opacity="0.04" fill="transparent" />
      {/* Left shaft column with shadow */}
      <g filter="url(#brutalist-shaft-shadow)">
        <rect x="0" y="0" width="25" height="55" fill="url(#brutalist-shaft-col)" />
      </g>
      {/* Shaft internal guide rails */}
      <line x1="5" y1="0" x2="5" y2="55" stroke="#4a4a4a" strokeWidth="0.25" />
      <line x1="20" y1="0" x2="20" y2="55" stroke="#4a4a4a" strokeWidth="0.25" />
      {/* Floor markers in shaft */}
      {[...Array(10)].map((_, i) => (
        <line key={`brutalist-shaft-floor-${i}`} x1="5" y1={3 + i * 5.2} x2="20" y2={3 + i * 5.2} stroke="#4a4a4a" strokeWidth="0.15" />
      ))}
      {/* Floor numbers */}
      <text x="12.5" y="7" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.2" fill="#5a5a5a">10</text>
      <text x="12.5" y="12.2" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.2" fill="#5a5a5a">09</text>
      {/* Red accent indicator with gradient */}
      <rect x="7" y="22" width="11" height="4" fill="url(#brutalist-shaft-indicator)" opacity="0.7" rx="0.3" />
      {/* Shadow edge of shaft */}
      <rect x="25" y="0" width="1.5" height="55" fill="#3a3a3a" opacity="0.08" />
      {data.logo && <image href={data.logo} x="74" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="32" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="900" fontSize="6" fill="#2a2a2a">{data.nameJa}</text>
      <text x="32" y="27" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="2" letterSpacing="0.2" fill="#555555">{data.nameEn.toUpperCase()}</text>
      <text x="32" y="34" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.8" fill="#777777">{data.titleJa}</text>
      <text x="32" y="40" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.5" fill="#999999">{data.companyJa}</text>
      <text x="32" y="48" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#888888">{data.email}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="brutalist-shaft-b-bg" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#d4d0cb" />
          <stop offset="100%" stopColor="#dcd8d3" />
        </linearGradient>
        <filter id="brutalist-shaft-b-texture">
          <feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves="5" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="brutalist-shaft-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.4" />
          <feOffset dx="-0.3" dy="0.3" />
          <feFlood floodColor="#000" floodOpacity="0.25" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#brutalist-shaft-b-bg)" />
      <rect width="91" height="55" filter="url(#brutalist-shaft-b-texture)" opacity="0.04" fill="transparent" />
      {/* Right shaft column mirrored */}
      <g filter="url(#brutalist-shaft-b-shadow)">
        <rect x="66" y="0" width="25" height="55" fill="#3a3a3a" />
      </g>
      <line x1="71" y1="0" x2="71" y2="55" stroke="#4a4a4a" strokeWidth="0.25" />
      <line x1="86" y1="0" x2="86" y2="55" stroke="#4a4a4a" strokeWidth="0.25" />
      {[...Array(10)].map((_, i) => (
        <line key={`brutalist-shaft-fb-${i}`} x1="71" y1={3 + i * 5.2} x2="86" y2={3 + i * 5.2} stroke="#4a4a4a" strokeWidth="0.15" />
      ))}
      {/* Shadow edge */}
      <rect x="64.5" y="0" width="1.5" height="55" fill="#3a3a3a" opacity="0.08" />
      {data.logo && <image href={data.logo} x="73" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="8" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="800" fontSize="2.5" fill="#2a2a2a">{data.companyJa}</text>
      <text x="8" y="17" fontFamily="'Space Grotesk', sans-serif" fontWeight="500" fontSize="1.5" fill="#555555">{data.companyEn}</text>
      <text x="8" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.5" fill="#777777">{data.titleJa}</text>
      <rect x="8" y="24.5" width="50" height="0.4" fill="#3a3a3a" opacity="0.2" />
      <text x="8" y="29.5" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.5" fill="#444444">{data.tel}</text>
      <text x="8" y="34" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.5" fill="#444444">{data.email}</text>
      <text x="8" y="38.5" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.5" fill="#444444">{data.website}</text>
      <rect x="8" y="41.5" width="50" height="0.4" fill="#3a3a3a" opacity="0.2" />
      <text x="8" y="46.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.4" fill="#777777">〒{data.zipCode}</text>
      <text x="8" y="51" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.4" fill="#777777">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 9. MASS (量) — Dense heavy mass with tight spacing
// Oppressive dark mass with crimson accent bar
// ============================================================
const massTemplate: TemplateDefinition = {
  id: 'brutalist-mass',
  name: 'MASS',
  nameJa: '量',
  category: 'brutalist',
  designer: 'Mass Bureau',
  description: '密集する質量が放つ圧倒的な重み。',
  accentColor: '#2a2a2a',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="brutalist-mass-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2e2e2e" />
          <stop offset="100%" stopColor="#242424" />
        </linearGradient>
        <linearGradient id="brutalist-mass-header" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e1e1e" />
          <stop offset="100%" stopColor="#151515" />
        </linearGradient>
        <linearGradient id="brutalist-mass-accent" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#d43333" />
          <stop offset="70%" stopColor="#cc3333" />
          <stop offset="100%" stopColor="#b02828" />
        </linearGradient>
        <filter id="brutalist-mass-texture">
          <feTurbulence type="fractalNoise" baseFrequency="1.3" numOctaves="5" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="screen" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="brutalist-mass-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.3" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#brutalist-mass-bg)" />
      <rect width="91" height="55" filter="url(#brutalist-mass-texture)" opacity="0.03" fill="transparent" />
      {/* Stacked heavy header block */}
      <rect x="0" y="0" width="91" height="28" fill="url(#brutalist-mass-header)" />
      <rect x="0" y="28" width="91" height="0.3" fill="#0a0a0a" />
      {/* Subtle horizontal striations */}
      <line x1="0" y1="7" x2="91" y2="7" stroke="#252525" strokeWidth="0.1" />
      <line x1="0" y1="14" x2="91" y2="14" stroke="#252525" strokeWidth="0.1" />
      <line x1="0" y1="21" x2="91" y2="21" stroke="#252525" strokeWidth="0.1" />
      {data.logo && <image href={data.logo} x="74" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <g filter="url(#brutalist-mass-shadow)">
        <text x="8" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="900" fontSize="7" letterSpacing="0" fill="#A0A0A0">{data.nameJa}</text>
      </g>
      <text x="8" y="24" fontFamily="'Space Grotesk', sans-serif" fontWeight="800" fontSize="3.5" letterSpacing="0" fill="#555555">{data.nameEn.toUpperCase()}</text>
      {/* Lower accent bar with gradient */}
      <rect x="0" y="30" width="50" height="8" fill="url(#brutalist-mass-accent)" />
      <rect x="50" y="30" width="2" height="8" fill="#8a1a1a" opacity="0.3" />
      <text x="5" y="36" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="2.2" fill="#ffffff">{data.titleJa}</text>
      <text x="8" y="44" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.5" fill="#757575">{data.companyJa}</text>
      <text x="8" y="49" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#808080">{data.email}</text>
      <text x="8" y="53" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#808080">{data.tel}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="brutalist-mass-b-bg" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#2e2e2e" />
          <stop offset="100%" stopColor="#242424" />
        </linearGradient>
        <filter id="brutalist-mass-b-texture">
          <feTurbulence type="fractalNoise" baseFrequency="1.3" numOctaves="5" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="screen" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="brutalist-mass-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.1" dy="0.12" />
          <feFlood floodColor="#000" floodOpacity="0.25" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#brutalist-mass-b-bg)" />
      <rect width="91" height="55" filter="url(#brutalist-mass-b-texture)" opacity="0.03" fill="transparent" />
      {/* Dense header block */}
      <rect x="0" y="0" width="91" height="16" fill="#1a1a1a" />
      <rect x="0" y="16" width="91" height="0.3" fill="#0a0a0a" />
      {data.logo && <image href={data.logo} x="74" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="8" y="8" fontFamily="'Noto Sans JP', sans-serif" fontWeight="900" fontSize="3" fill="#A0A0A0">{data.companyJa}</text>
      <text x="8" y="13" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="1.8" fill="#555555">{data.companyEn}</text>
      {/* Red accent bar */}
      <rect x="0" y="18" width="91" height="1.5" fill="#cc3333" />
      <rect x="0" y="19.5" width="91" height="0.3" fill="#8a1a1a" opacity="0.5" />
      {/* Striations */}
      <line x1="0" y1="30" x2="91" y2="30" stroke="#333333" strokeWidth="0.08" />
      <line x1="0" y1="40" x2="91" y2="40" stroke="#333333" strokeWidth="0.08" />
      <text x="8" y="24.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.5" fill="#909090">{data.titleJa}</text>
      <text x="8" y="29" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1.5" fill="#c0c0c0">{data.tel}</text>
      <text x="8" y="34" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1.5" fill="#c0c0c0">{data.email}</text>
      <text x="8" y="39" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1.5" fill="#c0c0c0">{data.website}</text>
      <rect x="0" y="43" width="91" height="0.5" fill="#808080" opacity="0.2" />
      <text x="8" y="48" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.4" fill="#808080">〒{data.zipCode}</text>
      <text x="8" y="52" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.4" fill="#808080">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 10. FORM (形) — Exposed structural form, blueprint style
// Technical drawing aesthetic with dimension markers
// ============================================================
const formTemplate: TemplateDefinition = {
  id: 'brutalist-form',
  name: 'FORM',
  nameJa: '形',
  category: 'brutalist',
  designer: 'Form Bureau',
  description: '構造の形態そのものが美になる。',
  accentColor: '#444444',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="brutalist-form-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f4f0eb" />
          <stop offset="100%" stopColor="#ede9e4" />
        </linearGradient>
        <linearGradient id="brutalist-form-frame" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#484848" />
          <stop offset="50%" stopColor="#444444" />
          <stop offset="100%" stopColor="#3e3e3e" />
        </linearGradient>
        <filter id="brutalist-form-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="brutalist-form-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.2" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#brutalist-form-bg)" />
      <rect width="91" height="55" filter="url(#brutalist-form-texture)" opacity="0.03" fill="transparent" />
      {/* Structural cross-bracing with dash pattern */}
      <line x1="0" y1="0" x2="91" y2="55" stroke="#444444" strokeWidth="0.2" opacity="0.08" strokeDasharray="2 2" />
      <line x1="91" y1="0" x2="0" y2="55" stroke="#444444" strokeWidth="0.2" opacity="0.08" strokeDasharray="2 2" />
      {/* Thick frame with gradient */}
      <rect x="0" y="0" width="91" height="3" fill="url(#brutalist-form-frame)" />
      <rect x="0" y="52" width="91" height="3" fill="url(#brutalist-form-frame)" />
      <rect x="0" y="0" width="3" height="55" fill="url(#brutalist-form-frame)" />
      <rect x="88" y="0" width="3" height="55" fill="url(#brutalist-form-frame)" />
      {/* Interior structural lines */}
      <line x1="3" y1="27.5" x2="88" y2="27.5" stroke="#444444" strokeWidth="0.15" strokeDasharray="1 1" />
      <line x1="45.5" y1="3" x2="45.5" y2="52" stroke="#444444" strokeWidth="0.15" strokeDasharray="1 1" />
      {/* Dimension markers with arrows */}
      <text x="45.5" y="2" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="0.8" fill="#666666">91mm</text>
      <text x="90" y="27.5" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="0.8" fill="#666666" transform="rotate(90 90 27.5)">55mm</text>
      {/* Registration marks at corners */}
      <circle cx="3" cy="3" r="0.4" fill="none" stroke="#444444" strokeWidth="0.1" />
      <circle cx="88" cy="3" r="0.4" fill="none" stroke="#444444" strokeWidth="0.1" />
      <circle cx="3" cy="52" r="0.4" fill="none" stroke="#444444" strokeWidth="0.1" />
      <circle cx="88" cy="52" r="0.4" fill="none" stroke="#444444" strokeWidth="0.1" />
      {data.logo && <image href={data.logo} x="56" y="8" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <g filter="url(#brutalist-form-shadow)">
        <text x="24" y="16" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="900" fontSize="5.5" fill="#2a2a2a">{data.nameJa}</text>
      </g>
      <text x="67" y="16" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="2" letterSpacing="0.2" fill="#555555">{data.nameEn.toUpperCase()}</text>
      <text x="24" y="34" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="1.8" fill="#666666">{data.titleJa}</text>
      <text x="24" y="40" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.5" fill="#888888">{data.companyJa}</text>
      <text x="67" y="35" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fill="#777777">{data.email}</text>
      <text x="67" y="40" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fill="#777777">{data.tel}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="brutalist-form-b-bg" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#f4f0eb" />
          <stop offset="100%" stopColor="#ede9e4" />
        </linearGradient>
        <filter id="brutalist-form-b-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="brutalist-form-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.08" dy="0.1" />
          <feFlood floodColor="#000" floodOpacity="0.15" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#brutalist-form-b-bg)" />
      <rect width="91" height="55" filter="url(#brutalist-form-b-texture)" opacity="0.03" fill="transparent" />
      {/* Thick frame */}
      <rect x="0" y="0" width="91" height="3" fill="#444444" />
      <rect x="0" y="52" width="91" height="3" fill="#444444" />
      <rect x="0" y="0" width="3" height="55" fill="#444444" />
      <rect x="88" y="0" width="3" height="55" fill="#444444" />
      {/* Structural dividers */}
      <line x1="3" y1="18" x2="88" y2="18" stroke="#444444" strokeWidth="0.2" strokeDasharray="1 1" />
      <line x1="3" y1="40" x2="88" y2="40" stroke="#444444" strokeWidth="0.2" strokeDasharray="1 1" />
      {/* Cross bracing */}
      <line x1="3" y1="3" x2="88" y2="52" stroke="#444444" strokeWidth="0.1" opacity="0.06" strokeDasharray="2 2" />
      {/* Registration marks */}
      <circle cx="3" cy="3" r="0.4" fill="none" stroke="#444444" strokeWidth="0.1" />
      <circle cx="88" cy="52" r="0.4" fill="none" stroke="#444444" strokeWidth="0.1" />
      {data.logo && <image href={data.logo} x="74" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="8" y="11" fontFamily="'Noto Sans JP', sans-serif" fontWeight="900" fontSize="2.5" fill="#2a2a2a">{data.companyJa}</text>
      <text x="70" y="11" textAnchor="end" fontFamily="'Space Grotesk', sans-serif" fontWeight="600" fontSize="1.5" fill="#555555">{data.companyEn}</text>
      <text x="8" y="16" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.5" fill="#777777">{data.titleJa}</text>
      <text x="8" y="24" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1.5" fill="#2a2a2a">{data.tel}</text>
      <text x="8" y="29" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1.5" fill="#2a2a2a">{data.email}</text>
      <text x="8" y="34" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1.5" fill="#2a2a2a">{data.website}</text>
      <text x="8" y="46" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.4" fill="#666666">〒{data.zipCode}</text>
      <text x="8" y="50" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.4" fill="#666666">{data.addressJa}</text>
    </g>
  ),
};

export const brutalistTemplates: TemplateDefinition[] = [
  concreteTemplate,
  slabTemplate,
  rawTemplate,
  blockTemplate,
  monolithTemplate,
  voidBTemplate,
  gridBTemplate,
  shaftTemplate,
  massTemplate,
  formTemplate,
];
