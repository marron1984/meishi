import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. MATRIX (行列) — Dense matrix grid
// Tight grid with data placed at intersections, crimson energy
// ============================================================
const matrixTemplate: TemplateDefinition = {
  id: 'grid-matrix',
  name: 'MATRIX',
  nameJa: '行列',
  category: 'grid',
  designer: 'Grid Systems',
  description: '行列の秩序。密なグリッドの交点に情報が宿る。',
  accentColor: '#E53935',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="grid-matrix-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
        </filter>
        <filter id="grid-matrix-shadow">
          <feDropShadow dx="0.2" dy="0.2" stdDeviation="0.3" floodColor="#E53935" floodOpacity="0.15" />
        </filter>
        <linearGradient id="grid-matrix-grad" x1="0" y1="0" x2="91" y2="55" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#FFF5F5" />
        </linearGradient>
        <linearGradient id="grid-matrix-accent-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E53935" />
          <stop offset="100%" stopColor="#FF6F61" />
        </linearGradient>
        <pattern id="grid-matrix-grid" width="5" height="5" patternUnits="userSpaceOnUse">
          <line x1="5" y1="0" x2="5" y2="5" stroke="#E0E0E0" strokeWidth="0.08" />
          <line x1="0" y1="5" x2="5" y2="5" stroke="#E0E0E0" strokeWidth="0.08" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#grid-matrix-grad)" />
      <rect width="91" height="55" fill="url(#grid-matrix-grid)" />
      {/* Decorative intersection nodes */}
      <circle cx="10" cy="10" r="0.7" fill="url(#grid-matrix-accent-grad)" opacity="0.8" />
      <circle cx="15" cy="10" r="0.5" fill="#E53935" opacity="0.4" />
      <circle cx="10" cy="15" r="0.5" fill="#E53935" opacity="0.35" />
      <circle cx="20" cy="10" r="0.35" fill="#FF6F61" opacity="0.25" />
      <circle cx="10" cy="20" r="0.35" fill="#FF6F61" opacity="0.2" />
      {/* Decorative corner crosshair */}
      <line x1="75" y1="5" x2="85" y2="5" stroke="#E53935" strokeWidth="0.12" opacity="0.15" />
      <line x1="80" y1="2" x2="80" y2="8" stroke="#E53935" strokeWidth="0.12" opacity="0.15" />
      <rect x="78.5" y="3.5" width="3" height="3" fill="none" stroke="#E53935" strokeWidth="0.08" opacity="0.12" />
      {/* Name block */}
      <text x="10" y="26" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="6.5" letterSpacing="0.5" fill="#1A1A1A" filter="url(#grid-matrix-shadow)">
        {data.nameJa}
      </text>
      <text x="10" y="32" fontFamily="'Space Grotesk', sans-serif" fontWeight="500" fontSize="2.2" letterSpacing="0.8" fill="url(#grid-matrix-accent-grad)">
        {data.nameEn.toUpperCase()}
      </text>
      <text x="10" y="38" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#888888">
        {data.titleJa}
      </text>
      <text x="10" y="44" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#BBBBBB">
        {data.companyJa}
      </text>
      {/* Bottom decorative bar */}
      <rect x="10" y="49" width="18" height="0.6" fill="url(#grid-matrix-accent-grad)" opacity="0.4" rx="0.3" />
      <rect x="30" y="49" width="6" height="0.6" fill="#E53935" opacity="0.15" rx="0.3" />
      {data.logo && <image href={data.logo} x="75" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="grid-matrix-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
        </filter>
        <filter id="grid-matrix-shadow-b">
          <feDropShadow dx="0.15" dy="0.15" stdDeviation="0.2" floodColor="#000000" floodOpacity="0.08" />
        </filter>
        <linearGradient id="grid-matrix-grad-b" x1="0" y1="0" x2="91" y2="55" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#FFF8F8" />
        </linearGradient>
        <pattern id="grid-matrix-grid-b" width="5" height="5" patternUnits="userSpaceOnUse">
          <line x1="5" y1="0" x2="5" y2="5" stroke="#E0E0E0" strokeWidth="0.08" />
          <line x1="0" y1="5" x2="5" y2="5" stroke="#E0E0E0" strokeWidth="0.08" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#grid-matrix-grad-b)" />
      <rect width="91" height="55" fill="url(#grid-matrix-grid-b)" />
      {/* Corner nodes */}
      <circle cx="80" cy="5" r="0.6" fill="#E53935" opacity="0.5" />
      <circle cx="85" cy="5" r="0.4" fill="#FF6F61" opacity="0.3" />
      <circle cx="80" cy="10" r="0.4" fill="#FF6F61" opacity="0.25" />
      {/* Top accent bar */}
      <rect x="5" y="3" width="25" height="0.5" fill="#E53935" opacity="0.2" rx="0.25" />
      {/* Company info */}
      <text x="10" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="2.8" fill="#1A1A1A" filter="url(#grid-matrix-shadow-b)">
        {data.companyJa}
      </text>
      <text x="10" y="16.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#E53935">
        {data.companyEn.toUpperCase()}
      </text>
      <text x="10" y="21" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#999999">
        {data.titleJa}
      </text>
      <line x1="10" y1="24" x2="81" y2="24" stroke="#E53935" strokeWidth="0.2" opacity="0.3" />
      {/* Contact details */}
      <text x="10" y="29" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#555555">TEL {data.tel}</text>
      <text x="10" y="33" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#555555">{data.email}</text>
      <text x="10" y="37" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#555555">{data.website}</text>
      <line x1="10" y1="40" x2="81" y2="40" stroke="#E0E0E0" strokeWidth="0.15" />
      <text x="10" y="45" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#AAAAAA">〒{data.zipCode}</text>
      <text x="10" y="49" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#AAAAAA">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="75" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 2. CELL-G (区) — Divided cells with content
// Card divided into cells with rich blue gradients
// ============================================================
const cellGTemplate: TemplateDefinition = {
  id: 'grid-cell-g',
  name: 'CELL-G',
  nameJa: '区',
  category: 'grid',
  designer: 'Grid Systems',
  description: '区画の美学。分割されたセルに情報が収まる。',
  accentColor: '#1565C0',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="grid-cell-g-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
        </filter>
        <filter id="grid-cell-g-shadow">
          <feDropShadow dx="0.15" dy="0.15" stdDeviation="0.25" floodColor="#1565C0" floodOpacity="0.12" />
        </filter>
        <linearGradient id="grid-cell-g-bg" x1="0" y1="0" x2="91" y2="55" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="70%" stopColor="#F8FBFF" />
          <stop offset="100%" stopColor="#EDF4FC" />
        </linearGradient>
        <linearGradient id="grid-cell-g-accent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1565C0" />
          <stop offset="100%" stopColor="#42A5F5" />
        </linearGradient>
        <radialGradient id="grid-cell-g-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#1565C0" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#1565C0" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#grid-cell-g-bg)" />
      {/* Cell divisions */}
      <line x1="0" y1="30" x2="91" y2="30" stroke="#1565C0" strokeWidth="0.15" opacity="0.3" />
      <line x1="55" y1="0" x2="55" y2="55" stroke="#1565C0" strokeWidth="0.15" opacity="0.3" />
      {/* Glow in bottom-right cell */}
      <ellipse cx="73" cy="42" rx="16" ry="11" fill="url(#grid-cell-g-glow)" />
      {/* Decorative cell corner markers */}
      <rect x="54" y="29" width="2" height="2" fill="none" stroke="#1565C0" strokeWidth="0.15" opacity="0.3" />
      <circle cx="55" cy="30" r="0.5" fill="#1565C0" opacity="0.25" />
      {/* Top-left cell: Name */}
      <text x="6" y="13" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="6" letterSpacing="0.5" fill="#1A1A1A" filter="url(#grid-cell-g-shadow)">
        {data.nameJa}
      </text>
      <text x="6" y="19.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="2.2" letterSpacing="0.5" fill="url(#grid-cell-g-accent)">
        {data.nameEn}
      </text>
      {/* Decorative small grid dots in top-left */}
      <circle cx="6" cy="25" r="0.3" fill="#1565C0" opacity="0.2" />
      <circle cx="9" cy="25" r="0.3" fill="#1565C0" opacity="0.15" />
      <circle cx="12" cy="25" r="0.3" fill="#42A5F5" opacity="0.1" />
      {/* Top-right cell: Title */}
      <text x="60" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.9" fill="#666666">
        {data.titleJa}
      </text>
      <text x="60" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#999999">
        {data.companyJa}
      </text>
      {/* Bottom-left cell: Contact */}
      <text x="6" y="37" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#555555">{data.tel}</text>
      <text x="6" y="41" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#555555">{data.email}</text>
      <text x="6" y="45" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#555555">{data.website}</text>
      {/* Bottom-right cell: Accent block with zip */}
      <rect x="55" y="30" width="36" height="25" fill="#1565C0" opacity="0.04" />
      <text x="60" y="39" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#999999">〒{data.zipCode}</text>
      <rect x="60" y="42" width="20" height="0.4" fill="url(#grid-cell-g-accent)" opacity="0.15" rx="0.2" />
      {data.logo && <image href={data.logo} x="70" y="44" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="grid-cell-g-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
        </filter>
        <filter id="grid-cell-g-shadow-b">
          <feDropShadow dx="0.1" dy="0.1" stdDeviation="0.2" floodColor="#000000" floodOpacity="0.06" />
        </filter>
        <linearGradient id="grid-cell-g-bg-b" x1="0" y1="0" x2="91" y2="55" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F5F9FF" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#grid-cell-g-bg-b)" />
      {/* Grid structure */}
      <line x1="0" y1="18" x2="91" y2="18" stroke="#1565C0" strokeWidth="0.12" opacity="0.2" />
      <line x1="0" y1="38" x2="91" y2="38" stroke="#1565C0" strokeWidth="0.12" opacity="0.2" />
      <line x1="45" y1="18" x2="45" y2="38" stroke="#1565C0" strokeWidth="0.12" opacity="0.2" />
      {/* Cell marker corners */}
      <path d="M 44 17 L 46 17 L 46 19" fill="none" stroke="#1565C0" strokeWidth="0.2" opacity="0.25" />
      <path d="M 44 39 L 46 39 L 46 37" fill="none" stroke="#1565C0" strokeWidth="0.2" opacity="0.25" />
      {/* Decorative dot row */}
      <circle cx="6" cy="5" r="0.3" fill="#1565C0" opacity="0.3" />
      <circle cx="9" cy="5" r="0.3" fill="#42A5F5" opacity="0.2" />
      <circle cx="12" cy="5" r="0.3" fill="#90CAF9" opacity="0.15" />
      {/* Top cell: Company */}
      <text x="6" y="10" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="2.8" fill="#1A1A1A" filter="url(#grid-cell-g-shadow-b)">
        {data.companyJa}
      </text>
      <text x="6" y="15" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#1565C0">
        {data.companyEn}
      </text>
      {/* Middle-left: Contact */}
      <text x="6" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#777777">{data.titleJa}</text>
      <text x="6" y="26.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#555555">TEL {data.tel}</text>
      <text x="6" y="31" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#555555">{data.email}</text>
      <text x="6" y="35.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#555555">{data.website}</text>
      {/* Middle-right: Website accent cell */}
      <rect x="45" y="18" width="46" height="20" fill="#1565C0" opacity="0.03" />
      {/* Bottom: Address */}
      <text x="6" y="44" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#AAAAAA">〒{data.zipCode}</text>
      <text x="6" y="48.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#AAAAAA">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="75" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 3. TABLE (表) — Data table layout
// Structured rows and columns like a spreadsheet, premium dark header
// ============================================================
const tableTemplate: TemplateDefinition = {
  id: 'grid-table',
  name: 'TABLE',
  nameJa: '表',
  category: 'grid',
  designer: 'Grid Systems',
  description: '表の整然。スプレッドシートのような秩序。',
  accentColor: '#333333',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="grid-table-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
        </filter>
        <filter id="grid-table-shadow">
          <feDropShadow dx="0" dy="0.3" stdDeviation="0.4" floodColor="#000000" floodOpacity="0.15" />
        </filter>
        <linearGradient id="grid-table-header" x1="0" y1="0" x2="91" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1A1A1A" />
          <stop offset="100%" stopColor="#333333" />
        </linearGradient>
        <linearGradient id="grid-table-bg" x1="0" y1="0" x2="0" y2="55" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FAFAFA" />
          <stop offset="100%" stopColor="#F5F5F5" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#grid-table-bg)" />
      {/* Table header area with gradient */}
      <rect x="5" y="4" width="81" height="11" fill="url(#grid-table-header)" rx="0.5" filter="url(#grid-table-shadow)" />
      <text x="10" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="5" letterSpacing="0.5" fill="#FFFFFF">
        {data.nameJa}
      </text>
      <text x="82" y="11" textAnchor="end" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.8" fill="#AAAAAA">
        {data.nameEn.toUpperCase()}
      </text>
      {/* Subtle row stripes */}
      <rect x="5" y="20" width="81" height="5" fill="#F0F0F0" opacity="0.5" />
      <rect x="5" y="30" width="81" height="5" fill="#F0F0F0" opacity="0.5" />
      {/* Table rows */}
      <line x1="5" y1="20" x2="86" y2="20" stroke="#E0E0E0" strokeWidth="0.15" />
      <text x="8" y="19" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.4" fill="#999999">役職</text>
      <text x="25" y="19" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#555555">{data.titleJa}</text>
      <line x1="5" y1="25" x2="86" y2="25" stroke="#E0E0E0" strokeWidth="0.15" />
      <text x="8" y="24" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.4" fill="#999999">会社</text>
      <text x="25" y="24" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#555555">{data.companyJa}</text>
      <line x1="5" y1="30" x2="86" y2="30" stroke="#E0E0E0" strokeWidth="0.15" />
      <text x="8" y="29" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.4" fill="#999999">電話</text>
      <text x="25" y="29" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.5" fill="#555555">{data.tel}</text>
      <line x1="5" y1="35" x2="86" y2="35" stroke="#E0E0E0" strokeWidth="0.15" />
      <text x="8" y="34" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.4" fill="#999999">メール</text>
      <text x="25" y="34" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.5" fill="#555555">{data.email}</text>
      {/* Label column divider */}
      <line x1="22" y1="15" x2="22" y2="35" stroke="#E0E0E0" strokeWidth="0.1" />
      {/* Decorative corner brackets */}
      <path d="M 5 40 L 5 42 L 7 42" fill="none" stroke="#333333" strokeWidth="0.15" opacity="0.2" />
      <path d="M 86 40 L 86 42 L 84 42" fill="none" stroke="#333333" strokeWidth="0.15" opacity="0.2" />
      {data.logo && <image href={data.logo} x="75" y="43" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="grid-table-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
        </filter>
        <filter id="grid-table-shadow-b">
          <feDropShadow dx="0" dy="0.2" stdDeviation="0.3" floodColor="#000000" floodOpacity="0.12" />
        </filter>
        <linearGradient id="grid-table-header-b" x1="0" y1="0" x2="91" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1A1A1A" />
          <stop offset="100%" stopColor="#3A3A3A" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#FAFAFA" />
      <rect x="5" y="4" width="81" height="9" fill="url(#grid-table-header-b)" rx="0.5" filter="url(#grid-table-shadow-b)" />
      <text x="10" y="10.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.8" fill="#FFFFFF">{data.companyJa}</text>
      <text x="82" y="10" textAnchor="end" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#CCCCCC">{data.companyEn.toUpperCase()}</text>
      {/* Stripe rows */}
      <rect x="5" y="18" width="81" height="4.5" fill="#F5F5F5" opacity="0.6" />
      <rect x="5" y="27" width="81" height="4.5" fill="#F5F5F5" opacity="0.6" />
      {/* Data rows */}
      <text x="8" y="17" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.4" fill="#999999">役職</text>
      <text x="25" y="17" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#555555">{data.titleJa}</text>
      <line x1="5" y1="18" x2="86" y2="18" stroke="#E0E0E0" strokeWidth="0.15" />
      <text x="8" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.4" fill="#999999">電話</text>
      <text x="25" y="22" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.5" fill="#555555">{data.tel}</text>
      <line x1="5" y1="23" x2="86" y2="23" stroke="#E0E0E0" strokeWidth="0.15" />
      <text x="8" y="27" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.4" fill="#999999">メール</text>
      <text x="25" y="27" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.5" fill="#555555">{data.email}</text>
      <line x1="5" y1="28" x2="86" y2="28" stroke="#E0E0E0" strokeWidth="0.15" />
      <text x="8" y="32" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.4" fill="#999999">Web</text>
      <text x="25" y="32" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.5" fill="#555555">{data.website}</text>
      <line x1="5" y1="33" x2="86" y2="33" stroke="#E0E0E0" strokeWidth="0.15" />
      <text x="8" y="37" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.4" fill="#999999">郵便</text>
      <text x="25" y="37" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.5" fill="#555555">〒{data.zipCode}</text>
      <line x1="5" y1="38" x2="86" y2="38" stroke="#E0E0E0" strokeWidth="0.15" />
      <text x="8" y="42" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.4" fill="#999999">住所</text>
      <text x="25" y="42" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#555555">{data.addressJa}</text>
      <line x1="22" y1="14" x2="22" y2="43" stroke="#E0E0E0" strokeWidth="0.1" />
      {/* Corner mark */}
      <path d="M 5 48 L 5 50 L 7 50" fill="none" stroke="#333333" strokeWidth="0.12" opacity="0.15" />
      {data.logo && <image href={data.logo} x="75" y="44" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 4. PIXEL-G (画) — Pixel art inspired grid
// Retro 8-bit feel with green pixel clusters
// ============================================================
const pixelGTemplate: TemplateDefinition = {
  id: 'grid-pixel-g',
  name: 'PIXEL-G',
  nameJa: '画',
  category: 'grid',
  designer: 'Grid Systems',
  description: '画素の世界。小さな正方形が形を描く。',
  accentColor: '#4CAF50',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="grid-pixel-g-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
        </filter>
        <filter id="grid-pixel-g-shadow">
          <feDropShadow dx="0.15" dy="0.15" stdDeviation="0.2" floodColor="#4CAF50" floodOpacity="0.1" />
        </filter>
        <linearGradient id="grid-pixel-g-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4CAF50" />
          <stop offset="50%" stopColor="#66BB6A" />
          <stop offset="100%" stopColor="#81C784" />
        </linearGradient>
        <linearGradient id="grid-pixel-g-bg" x1="0" y1="0" x2="91" y2="55" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F5FFF5" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#grid-pixel-g-bg)" />
      {/* Pixel cluster top-right */}
      <g opacity="0.18">
        <rect x="68" y="4" width="2" height="2" fill="#4CAF50" />
        <rect x="72" y="4" width="2" height="2" fill="#66BB6A" />
        <rect x="70" y="6" width="2" height="2" fill="#4CAF50" />
        <rect x="74" y="6" width="2" height="2" fill="#81C784" />
        <rect x="68" y="8" width="2" height="2" fill="#66BB6A" />
        <rect x="72" y="8" width="2" height="2" fill="#4CAF50" />
        <rect x="76" y="8" width="2" height="2" fill="#81C784" />
        <rect x="78" y="6" width="2" height="2" fill="#A5D6A7" opacity="0.6" />
        <rect x="80" y="4" width="2" height="2" fill="#C8E6C9" opacity="0.4" />
        <rect x="66" y="6" width="2" height="2" fill="#C8E6C9" opacity="0.5" />
        <rect x="70" y="10" width="2" height="2" fill="#66BB6A" opacity="0.7" />
        <rect x="74" y="10" width="2" height="2" fill="#A5D6A7" opacity="0.4" />
      </g>
      {/* Pixel cluster bottom-left */}
      <g opacity="0.1">
        <rect x="5" y="42" width="2" height="2" fill="#4CAF50" />
        <rect x="9" y="42" width="2" height="2" fill="#66BB6A" />
        <rect x="7" y="44" width="2" height="2" fill="#81C784" />
        <rect x="11" y="44" width="2" height="2" fill="#4CAF50" />
        <rect x="5" y="46" width="2" height="2" fill="#A5D6A7" />
      </g>
      {/* Decorative pixel bar */}
      <rect x="8" y="38" width="12" height="0.8" fill="url(#grid-pixel-g-grad)" opacity="0.2" />
      <rect x="22" y="38" width="4" height="0.8" fill="#4CAF50" opacity="0.1" />
      {/* Name block */}
      <text x="8" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="6.5" letterSpacing="0.5" fill="#1A1A1A" filter="url(#grid-pixel-g-shadow)">
        {data.nameJa}
      </text>
      <text x="8" y="29" fontFamily="'Space Grotesk', sans-serif" fontWeight="500" fontSize="2.2" letterSpacing="0.5" fill="url(#grid-pixel-g-grad)">
        {data.nameEn.toUpperCase()}
      </text>
      <text x="8" y="35" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#888888">
        {data.titleJa}
      </text>
      {data.logo && <image href={data.logo} x="75" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="grid-pixel-g-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
        </filter>
        <filter id="grid-pixel-g-shadow-b">
          <feDropShadow dx="0.1" dy="0.1" stdDeviation="0.15" floodColor="#000000" floodOpacity="0.06" />
        </filter>
        <linearGradient id="grid-pixel-g-bg-b" x1="0" y1="0" x2="91" y2="55" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F8FFF8" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#grid-pixel-g-bg-b)" />
      {/* Pixel cluster decorative */}
      <g opacity="0.12">
        <rect x="75" y="40" width="2" height="2" fill="#4CAF50" />
        <rect x="79" y="40" width="2" height="2" fill="#66BB6A" />
        <rect x="77" y="42" width="2" height="2" fill="#81C784" />
        <rect x="81" y="42" width="2" height="2" fill="#4CAF50" />
        <rect x="75" y="44" width="2" height="2" fill="#A5D6A7" />
        <rect x="83" y="44" width="2" height="2" fill="#C8E6C9" opacity="0.5" />
      </g>
      {/* Top decorative pixel line */}
      <rect x="8" y="4" width="16" height="0.6" fill="#4CAF50" opacity="0.15" />
      <rect x="26" y="4" width="5" height="0.6" fill="#66BB6A" opacity="0.1" />
      {/* Company */}
      <text x="8" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="2.8" fill="#1A1A1A" filter="url(#grid-pixel-g-shadow-b)">{data.companyJa}</text>
      <text x="8" y="17" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#4CAF50">{data.companyEn.toUpperCase()}</text>
      <text x="8" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#888888">{data.titleJa}</text>
      <line x1="8" y1="24.5" x2="83" y2="24.5" stroke="#4CAF50" strokeWidth="0.2" opacity="0.25" />
      {/* Contact */}
      <text x="8" y="29.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#555555">TEL {data.tel}</text>
      <text x="8" y="33.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#555555">{data.email}</text>
      <text x="8" y="37.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#555555">{data.website}</text>
      <line x1="8" y1="40" x2="83" y2="40" stroke="#E0E0E0" strokeWidth="0.15" />
      <text x="8" y="44.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#AAAAAA">〒{data.zipCode}</text>
      <text x="8" y="48.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#AAAAAA">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="75" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 5. TILE (敷) — Mosaic tile pattern
// Warm orange mosaic tiles creating a decorative band
// ============================================================
const tileTemplate: TemplateDefinition = {
  id: 'grid-tile',
  name: 'TILE',
  nameJa: '敷',
  category: 'grid',
  designer: 'Grid Systems',
  description: 'タイルの帯。モザイク模様が彩るライン。',
  accentColor: '#FF9800',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="grid-tile-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="3" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
        </filter>
        <filter id="grid-tile-shadow">
          <feDropShadow dx="0.15" dy="0.2" stdDeviation="0.25" floodColor="#FF9800" floodOpacity="0.12" />
        </filter>
        <linearGradient id="grid-tile-warm" x1="0" y1="0" x2="91" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FF9800" />
          <stop offset="33%" stopColor="#FFC107" />
          <stop offset="66%" stopColor="#FFB300" />
          <stop offset="100%" stopColor="#FF9800" />
        </linearGradient>
        <linearGradient id="grid-tile-bg" x1="0" y1="0" x2="0" y2="55" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFDF8" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#grid-tile-bg)" />
      {/* Tile mosaic band at top */}
      <g>
        {[0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87].map((x, i) => (
          <rect key={`tile-f-${i}`} x={x} y="0" width="3" height="3" fill={i % 3 === 0 ? '#FF9800' : i % 3 === 1 ? '#FFC107' : '#FFE0B2'} opacity={0.3 + (i % 5) * 0.08} />
        ))}
      </g>
      {/* Second tile row with offset */}
      <g opacity="0.5">
        {[1.5, 4.5, 7.5, 10.5, 13.5, 16.5, 19.5, 22.5, 25.5, 28.5, 31.5, 34.5, 37.5, 40.5, 43.5, 46.5, 49.5, 52.5, 55.5, 58.5, 61.5, 64.5, 67.5, 70.5, 73.5, 76.5, 79.5, 82.5, 85.5, 88.5].map((x, i) => (
          <rect key={`tile-f2-${i}`} x={x} y="3" width="3" height="2" fill={i % 2 === 0 ? '#FFB300' : '#FFE0B2'} opacity={0.15 + (i % 4) * 0.05} />
        ))}
      </g>
      {/* Grout line */}
      <line x1="0" y1="5" x2="91" y2="5" stroke="#E0C080" strokeWidth="0.15" opacity="0.3" />
      {/* Decorative diamond accent */}
      <polygon points="80,42 83,45 80,48 77,45" fill="none" stroke="#FF9800" strokeWidth="0.15" opacity="0.15" />
      <polygon points="80,43 82,45 80,47 78,45" fill="#FFC107" opacity="0.06" />
      {/* Name */}
      <text x="10" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="6.5" letterSpacing="0.5" fill="#1A1A1A" filter="url(#grid-tile-shadow)">
        {data.nameJa}
      </text>
      <text x="10" y="27" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="2.2" letterSpacing="0.5" fill="url(#grid-tile-warm)">
        {data.nameEn.toUpperCase()}
      </text>
      <text x="10" y="34" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#888888">
        {data.titleJa}
      </text>
      <text x="10" y="41" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#AAAAAA">
        {data.companyJa}
      </text>
      {data.logo && <image href={data.logo} x="75" y="10" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="grid-tile-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="3" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
        </filter>
        <filter id="grid-tile-shadow-b">
          <feDropShadow dx="0.1" dy="0.1" stdDeviation="0.15" floodColor="#000000" floodOpacity="0.06" />
        </filter>
        <linearGradient id="grid-tile-bg-b" x1="0" y1="55" x2="0" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFDF8" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#grid-tile-bg-b)" />
      {/* Tile band at bottom */}
      <g>
        {[0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87].map((x, i) => (
          <rect key={`tile-b-${i}`} x={x} y="52" width="3" height="3" fill={i % 3 === 0 ? '#FF9800' : i % 3 === 1 ? '#FFC107' : '#FFE0B2'} opacity={0.3 + (i % 5) * 0.08} />
        ))}
      </g>
      <g opacity="0.5">
        {[1.5, 4.5, 7.5, 10.5, 13.5, 16.5, 19.5, 22.5, 25.5, 28.5, 31.5, 34.5, 37.5, 40.5, 43.5, 46.5, 49.5, 52.5, 55.5, 58.5, 61.5, 64.5, 67.5, 70.5, 73.5, 76.5, 79.5, 82.5, 85.5, 88.5].map((x, i) => (
          <rect key={`tile-b2-${i}`} x={x} y="50" width="3" height="2" fill={i % 2 === 0 ? '#FFB300' : '#FFE0B2'} opacity={0.15 + (i % 4) * 0.05} />
        ))}
      </g>
      <line x1="0" y1="50" x2="91" y2="50" stroke="#E0C080" strokeWidth="0.15" opacity="0.3" />
      {/* Decorative diamond */}
      <polygon points="80,5 83,8 80,11 77,8" fill="none" stroke="#FF9800" strokeWidth="0.12" opacity="0.12" />
      {/* Company */}
      <text x="10" y="11" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.8" fill="#1A1A1A" filter="url(#grid-tile-shadow-b)">{data.companyJa}</text>
      <text x="10" y="16" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#FF9800">{data.companyEn.toUpperCase()}</text>
      <text x="10" y="21" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#999999">{data.titleJa}</text>
      <line x1="10" y1="24" x2="81" y2="24" stroke="#FFE0B2" strokeWidth="0.25" />
      {/* Contact */}
      <text x="10" y="29" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#555555">TEL {data.tel}</text>
      <text x="10" y="33" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#555555">{data.email}</text>
      <text x="10" y="37" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#555555">{data.website}</text>
      <line x1="10" y1="40" x2="81" y2="40" stroke="#FFE0B2" strokeWidth="0.2" />
      <text x="10" y="44.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#AAAAAA">〒{data.zipCode}</text>
      <text x="10" y="48.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#AAAAAA">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="75" y="39" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 6. MODULE (模) — Modular grid system
// Strict 12-column modular grid with visible structure, purple
// ============================================================
const moduleTemplate: TemplateDefinition = {
  id: 'grid-module',
  name: 'MODULE',
  nameJa: '模',
  category: 'grid',
  designer: 'Grid Systems',
  description: 'モジュールの法則。12列グリッドの厳格な美。',
  accentColor: '#9C27B0',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="grid-module-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
        </filter>
        <filter id="grid-module-shadow">
          <feDropShadow dx="0.1" dy="0.15" stdDeviation="0.2" floodColor="#9C27B0" floodOpacity="0.1" />
        </filter>
        <linearGradient id="grid-module-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9C27B0" />
          <stop offset="100%" stopColor="#CE93D8" />
        </linearGradient>
        <linearGradient id="grid-module-bg" x1="0" y1="0" x2="91" y2="55" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FAFAFA" />
          <stop offset="100%" stopColor="#FDF5FF" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#grid-module-bg)" />
      {/* 12-column grid */}
      <g opacity="0.05">
        <rect x="3" y="0" width="6.7" height="55" fill="#9C27B0" />
        <rect x="16.4" y="0" width="6.7" height="55" fill="#9C27B0" />
        <rect x="29.8" y="0" width="6.7" height="55" fill="#9C27B0" />
        <rect x="43.2" y="0" width="6.7" height="55" fill="#9C27B0" />
        <rect x="56.6" y="0" width="6.7" height="55" fill="#9C27B0" />
        <rect x="70" y="0" width="6.7" height="55" fill="#9C27B0" />
      </g>
      {/* Horizontal grid */}
      <line x1="0" y1="5" x2="91" y2="5" stroke="#9C27B0" strokeWidth="0.05" opacity="0.12" />
      <line x1="0" y1="15" x2="91" y2="15" stroke="#9C27B0" strokeWidth="0.05" opacity="0.12" />
      <line x1="0" y1="25" x2="91" y2="25" stroke="#9C27B0" strokeWidth="0.05" opacity="0.12" />
      <line x1="0" y1="35" x2="91" y2="35" stroke="#9C27B0" strokeWidth="0.05" opacity="0.12" />
      <line x1="0" y1="45" x2="91" y2="45" stroke="#9C27B0" strokeWidth="0.05" opacity="0.12" />
      {/* Decorative module highlight */}
      <rect x="3" y="5" width="6.7" height="10" fill="#9C27B0" opacity="0.04" stroke="#9C27B0" strokeWidth="0.08" />
      <rect x="70" y="35" width="6.7" height="10" fill="#CE93D8" opacity="0.06" stroke="#9C27B0" strokeWidth="0.06" />
      {/* Module crosshair marker */}
      <circle cx="76.7" cy="45" r="0.5" fill="url(#grid-module-grad)" opacity="0.3" />
      <line x1="74" y1="45" x2="79.4" y2="45" stroke="#9C27B0" strokeWidth="0.08" opacity="0.2" />
      <line x1="76.7" y1="42" x2="76.7" y2="48" stroke="#9C27B0" strokeWidth="0.08" opacity="0.2" />
      {/* Content */}
      <text x="3" y="13" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="6" letterSpacing="0.5" fill="#1A1A1A" filter="url(#grid-module-shadow)">
        {data.nameJa}
      </text>
      <text x="3" y="23" fontFamily="'Space Grotesk', sans-serif" fontWeight="500" fontSize="2.2" letterSpacing="0.5" fill="url(#grid-module-grad)">
        {data.nameEn.toUpperCase()}
      </text>
      <text x="3" y="33" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#888888">
        {data.titleJa}
      </text>
      <text x="3" y="43" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#AAAAAA">
        {data.companyJa}
      </text>
      {data.logo && <image href={data.logo} x="78" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="grid-module-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
        </filter>
        <filter id="grid-module-shadow-b">
          <feDropShadow dx="0.1" dy="0.1" stdDeviation="0.15" floodColor="#000000" floodOpacity="0.06" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="#FAFAFA" />
      <g opacity="0.04">
        <rect x="3" y="0" width="6.7" height="55" fill="#9C27B0" />
        <rect x="16.4" y="0" width="6.7" height="55" fill="#9C27B0" />
        <rect x="29.8" y="0" width="6.7" height="55" fill="#9C27B0" />
        <rect x="43.2" y="0" width="6.7" height="55" fill="#9C27B0" />
        <rect x="56.6" y="0" width="6.7" height="55" fill="#9C27B0" />
        <rect x="70" y="0" width="6.7" height="55" fill="#9C27B0" />
      </g>
      <line x1="0" y1="5" x2="91" y2="5" stroke="#9C27B0" strokeWidth="0.05" opacity="0.08" />
      <line x1="0" y1="15" x2="91" y2="15" stroke="#9C27B0" strokeWidth="0.05" opacity="0.08" />
      <line x1="0" y1="25" x2="91" y2="25" stroke="#9C27B0" strokeWidth="0.05" opacity="0.08" />
      <line x1="0" y1="35" x2="91" y2="35" stroke="#9C27B0" strokeWidth="0.05" opacity="0.08" />
      <line x1="0" y1="45" x2="91" y2="45" stroke="#9C27B0" strokeWidth="0.05" opacity="0.08" />
      {/* Active module highlight */}
      <rect x="3" y="5" width="20.1" height="10" fill="#9C27B0" opacity="0.03" stroke="#9C27B0" strokeWidth="0.06" />
      {/* Module indicator dots */}
      <circle cx="3" cy="5" r="0.3" fill="#9C27B0" opacity="0.3" />
      <circle cx="9.7" cy="5" r="0.3" fill="#CE93D8" opacity="0.2" />
      <circle cx="3" cy="15" r="0.3" fill="#CE93D8" opacity="0.2" />
      {/* Content */}
      <text x="3" y="13" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="2.8" fill="#1A1A1A" filter="url(#grid-module-shadow-b)">{data.companyJa}</text>
      <text x="43.2" y="13" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#9C27B0">{data.companyEn}</text>
      <text x="3" y="23" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#888888">{data.titleJa}</text>
      <text x="3" y="30" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#555555">TEL {data.tel}</text>
      <text x="43.2" y="30" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#555555">{data.email}</text>
      <text x="3" y="38" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#555555">{data.website}</text>
      <text x="3" y="48" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#AAAAAA">〒{data.zipCode} {data.addressJa}</text>
      {data.logo && <image href={data.logo} x="78" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 7. COLUMN (柱列) — Strong vertical column divisions
// Bold vertical dividers creating distinct content zones, cyan
// ============================================================
const columnTemplate: TemplateDefinition = {
  id: 'grid-column',
  name: 'COLUMN',
  nameJa: '柱列',
  category: 'grid',
  designer: 'Grid Systems',
  description: '柱列の構造。太い縦線が空間を分割する。',
  accentColor: '#00BCD4',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="grid-column-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
        </filter>
        <filter id="grid-column-shadow">
          <feDropShadow dx="0.3" dy="0" stdDeviation="0.5" floodColor="#00BCD4" floodOpacity="0.12" />
        </filter>
        <linearGradient id="grid-column-pillar" x1="0" y1="0" x2="0" y2="55" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00BCD4" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#00ACC1" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#00BCD4" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="grid-column-accent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00BCD4" />
          <stop offset="100%" stopColor="#4DD0E1" />
        </linearGradient>
        <linearGradient id="grid-column-left-bg" x1="0" y1="0" x2="28" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00BCD4" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#00BCD4" stopOpacity="0.01" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#FFFFFF" />
      {/* Bold column divider */}
      <rect x="27.5" y="0" width="1" height="55" fill="url(#grid-column-pillar)" filter="url(#grid-column-shadow)" />
      {/* Left column: accent zone */}
      <rect x="0" y="0" width="27.5" height="55" fill="url(#grid-column-left-bg)" />
      {/* Vertical kanji watermark */}
      <text x="14" y="28" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="100" fontSize="10" fill="#00BCD4" opacity="0.1" transform="rotate(-90,14,28)">
        名刺
      </text>
      {/* Decorative horizontal ticks */}
      <line x1="24" y1="10" x2="27.5" y2="10" stroke="#00BCD4" strokeWidth="0.1" opacity="0.3" />
      <line x1="24" y1="20" x2="27.5" y2="20" stroke="#00BCD4" strokeWidth="0.1" opacity="0.25" />
      <line x1="24" y1="30" x2="27.5" y2="30" stroke="#00BCD4" strokeWidth="0.1" opacity="0.2" />
      <line x1="24" y1="40" x2="27.5" y2="40" stroke="#00BCD4" strokeWidth="0.1" opacity="0.15" />
      {/* Right column: content */}
      <text x="34" y="17" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="6" letterSpacing="0.5" fill="#1A1A1A">
        {data.nameJa}
      </text>
      <text x="34" y="24" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="2.2" letterSpacing="0.5" fill="url(#grid-column-accent)">
        {data.nameEn}
      </text>
      <text x="34" y="33" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#888888">
        {data.titleJa}
      </text>
      <text x="34" y="41" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#AAAAAA">
        {data.companyJa}
      </text>
      {/* Bottom accent bar */}
      <rect x="34" y="47" width="14" height="0.5" fill="url(#grid-column-accent)" opacity="0.25" rx="0.25" />
      {data.logo && <image href={data.logo} x="75" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="grid-column-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
        </filter>
        <filter id="grid-column-shadow-b">
          <feDropShadow dx="0.2" dy="0" stdDeviation="0.3" floodColor="#00BCD4" floodOpacity="0.08" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="#FFFFFF" />
      <rect x="27.5" y="0" width="1" height="55" fill="#00BCD4" opacity="0.25" filter="url(#grid-column-shadow-b)" />
      <rect x="0" y="0" width="27.5" height="55" fill="#00BCD4" opacity="0.02" />
      {/* Left column label */}
      <text x="14" y="13" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="2" fill="#00BCD4" opacity="0.35">連絡先</text>
      {/* Decorative ticks */}
      <line x1="24" y1="12" x2="27.5" y2="12" stroke="#00BCD4" strokeWidth="0.1" opacity="0.25" />
      <line x1="24" y1="22" x2="27.5" y2="22" stroke="#00BCD4" strokeWidth="0.1" opacity="0.2" />
      <line x1="24" y1="32" x2="27.5" y2="32" stroke="#00BCD4" strokeWidth="0.1" opacity="0.15" />
      {/* Decorative dot */}
      <circle cx="14" cy="40" r="1.5" fill="#00BCD4" opacity="0.04" />
      <circle cx="14" cy="40" r="0.4" fill="#00BCD4" opacity="0.15" />
      {/* Right column content */}
      <text x="34" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="2.8" fill="#1A1A1A">{data.companyJa}</text>
      <text x="34" y="17" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#00BCD4">{data.companyEn}</text>
      <text x="34" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#999999">{data.titleJa}</text>
      <line x1="34" y1="24.5" x2="86" y2="24.5" stroke="#00BCD4" strokeWidth="0.15" opacity="0.2" />
      <text x="34" y="29.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#555555">TEL {data.tel}</text>
      <text x="34" y="33.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#555555">{data.email}</text>
      <text x="34" y="37.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#555555">{data.website}</text>
      <line x1="34" y1="40" x2="86" y2="40" stroke="#E0E0E0" strokeWidth="0.15" />
      <text x="34" y="44.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#AAAAAA">〒{data.zipCode}</text>
      <text x="34" y="48.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#AAAAAA">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="75" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 8. ROW (列) — Horizontal row emphasis
// Strong horizontal bands with warm orange-red energy
// ============================================================
const rowTemplate: TemplateDefinition = {
  id: 'grid-row',
  name: 'ROW',
  nameJa: '列',
  category: 'grid',
  designer: 'Grid Systems',
  description: '列の水平。横帯が情報を層状に整える。',
  accentColor: '#FF5722',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="grid-row-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.45" numOctaves="4" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
        </filter>
        <filter id="grid-row-shadow">
          <feDropShadow dx="0" dy="0.2" stdDeviation="0.3" floodColor="#FF5722" floodOpacity="0.12" />
        </filter>
        <linearGradient id="grid-row-band1" x1="0" y1="0" x2="91" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FF5722" stopOpacity="0.08" />
          <stop offset="50%" stopColor="#FF8A65" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#FF5722" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient id="grid-row-accent" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FF5722" />
          <stop offset="100%" stopColor="#FF8A65" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#FFFFFF" />
      {/* Row bands with gradient */}
      <rect x="0" y="0" width="91" height="12" fill="url(#grid-row-band1)" />
      <rect x="0" y="32" width="91" height="10" fill="#FF5722" opacity="0.03" />
      <rect x="0" y="44" width="91" height="11" fill="url(#grid-row-band1)" />
      {/* Row dividers */}
      <line x1="0" y1="12" x2="91" y2="12" stroke="url(#grid-row-accent)" strokeWidth="0.3" opacity="0.3" />
      <line x1="0" y1="32" x2="91" y2="32" stroke="#FF5722" strokeWidth="0.12" opacity="0.15" />
      <line x1="0" y1="44" x2="91" y2="44" stroke="#FF5722" strokeWidth="0.12" opacity="0.15" />
      {/* Decorative row indicator dots */}
      <circle cx="4" cy="6" r="0.4" fill="#FF5722" opacity="0.25" />
      <circle cx="4" cy="38" r="0.3" fill="#FF8A65" opacity="0.15" />
      <circle cx="4" cy="50" r="0.3" fill="#FF5722" opacity="0.2" />
      {/* Row 1: Company */}
      <text x="8" y="8" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#FF5722">{data.companyJa}</text>
      {/* Row 2: Name */}
      <text x="8" y="24" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="6.5" letterSpacing="0.5" fill="#1A1A1A" filter="url(#grid-row-shadow)">
        {data.nameJa}
      </text>
      <text x="83" y="24" textAnchor="end" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="2.2" fill="url(#grid-row-accent)">
        {data.nameEn.toUpperCase()}
      </text>
      {/* Row 3: Title */}
      <text x="8" y="39" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#888888">{data.titleJa}</text>
      {/* Row 4: Contact */}
      <text x="8" y="51" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.5" fill="#AAAAAA">{data.email}</text>
      {data.logo && <image href={data.logo} x="75" y="34" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="grid-row-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.45" numOctaves="4" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
        </filter>
        <filter id="grid-row-shadow-b">
          <feDropShadow dx="0" dy="0.1" stdDeviation="0.2" floodColor="#000000" floodOpacity="0.06" />
        </filter>
        <linearGradient id="grid-row-accent-b" x1="0" y1="0" x2="91" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FF5722" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#FF8A65" stopOpacity="0.06" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#FFFFFF" />
      <rect x="0" y="0" width="91" height="10" fill="url(#grid-row-accent-b)" />
      <line x1="0" y1="10" x2="91" y2="10" stroke="#FF5722" strokeWidth="0.25" opacity="0.3" />
      <line x1="0" y1="20" x2="91" y2="20" stroke="#FF5722" strokeWidth="0.08" opacity="0.12" />
      <line x1="0" y1="30" x2="91" y2="30" stroke="#FF5722" strokeWidth="0.08" opacity="0.12" />
      <line x1="0" y1="40" x2="91" y2="40" stroke="#FF5722" strokeWidth="0.08" opacity="0.12" />
      {/* Row indicator dots */}
      <circle cx="4" cy="5" r="0.4" fill="#FF5722" opacity="0.25" />
      <circle cx="4" cy="15" r="0.3" fill="#FF8A65" opacity="0.15" />
      <circle cx="4" cy="25" r="0.3" fill="#FF5722" opacity="0.12" />
      <circle cx="4" cy="35" r="0.3" fill="#FF8A65" opacity="0.1" />
      {/* Content */}
      <text x="8" y="7" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="2.8" fill="#1A1A1A" filter="url(#grid-row-shadow-b)">{data.companyJa}</text>
      <text x="83" y="7" textAnchor="end" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#FF5722">{data.companyEn.toUpperCase()}</text>
      <text x="8" y="15" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#999999">{data.titleJa}</text>
      <text x="8" y="25" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#555555">TEL {data.tel}</text>
      <text x="8" y="35" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#555555">{data.email}</text>
      <text x="8" y="45" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#555555">{data.website}</text>
      <text x="8" y="51" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#AAAAAA">〒{data.zipCode} {data.addressJa}</text>
      {data.logo && <image href={data.logo} x="75" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 9. LATTICE (格) — Intersecting lattice pattern
// Woven grid lines creating a basket-weave, deep indigo
// ============================================================
const latticeTemplate: TemplateDefinition = {
  id: 'grid-lattice',
  name: 'LATTICE',
  nameJa: '格',
  category: 'grid',
  designer: 'Grid Systems',
  description: '格子の織り。交差する線が空間を編む。',
  accentColor: '#3F51B5',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="grid-lattice-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
        </filter>
        <filter id="grid-lattice-shadow">
          <feDropShadow dx="0.15" dy="0.15" stdDeviation="0.25" floodColor="#1A237E" floodOpacity="0.1" />
        </filter>
        <linearGradient id="grid-lattice-accent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3F51B5" />
          <stop offset="100%" stopColor="#7986CB" />
        </linearGradient>
        <radialGradient id="grid-lattice-glow" cx="0.3" cy="0.4" r="0.6">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F5F7FF" />
        </radialGradient>
        <pattern id="grid-lattice-pattern" width="6" height="6" patternUnits="userSpaceOnUse">
          <line x1="0" y1="3" x2="6" y2="3" stroke="#3F51B5" strokeWidth="0.12" opacity="0.1" />
          <line x1="3" y1="0" x2="3" y2="6" stroke="#3F51B5" strokeWidth="0.12" opacity="0.1" />
          <rect x="1.5" y="1.5" width="3" height="3" fill="none" stroke="#3F51B5" strokeWidth="0.04" opacity="0.06" transform="rotate(45,3,3)" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#grid-lattice-glow)" />
      <rect width="91" height="55" fill="url(#grid-lattice-pattern)" />
      {/* Clear content area with soft border */}
      <rect x="5" y="9" width="56" height="37" fill="#FFFFFF" opacity="0.92" rx="0.5" />
      <rect x="5" y="9" width="56" height="37" fill="none" stroke="#3F51B5" strokeWidth="0.06" opacity="0.08" rx="0.5" />
      {/* Decorative lattice knot */}
      <circle cx="75" cy="12" r="2.5" fill="none" stroke="#3F51B5" strokeWidth="0.1" opacity="0.12" />
      <circle cx="75" cy="12" r="1.2" fill="none" stroke="#7986CB" strokeWidth="0.08" opacity="0.1" />
      <circle cx="75" cy="12" r="0.3" fill="#3F51B5" opacity="0.15" />
      {/* Second lattice knot */}
      <circle cx="80" cy="42" r="1.8" fill="none" stroke="#3F51B5" strokeWidth="0.08" opacity="0.08" />
      <circle cx="80" cy="42" r="0.8" fill="none" stroke="#7986CB" strokeWidth="0.06" opacity="0.06" />
      {/* Content */}
      <text x="10" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="6" letterSpacing="0.5" fill="#1A237E" filter="url(#grid-lattice-shadow)">
        {data.nameJa}
      </text>
      <text x="10" y="29" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="2.2" letterSpacing="0.5" fill="url(#grid-lattice-accent)">
        {data.nameEn}
      </text>
      <text x="10" y="36.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#7986CB">
        {data.titleJa}
      </text>
      <text x="10" y="42" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#9FA8DA">
        {data.companyJa}
      </text>
      {data.logo && <image href={data.logo} x="75" y="24" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="grid-lattice-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
        </filter>
        <filter id="grid-lattice-shadow-b">
          <feDropShadow dx="0.1" dy="0.1" stdDeviation="0.15" floodColor="#000000" floodOpacity="0.06" />
        </filter>
        <pattern id="grid-lattice-pattern-b" width="6" height="6" patternUnits="userSpaceOnUse">
          <line x1="0" y1="3" x2="6" y2="3" stroke="#3F51B5" strokeWidth="0.1" opacity="0.06" />
          <line x1="3" y1="0" x2="3" y2="6" stroke="#3F51B5" strokeWidth="0.1" opacity="0.06" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="#FFFFFF" />
      <rect width="91" height="55" fill="url(#grid-lattice-pattern-b)" />
      <rect x="5" y="4" width="81" height="46" fill="#FFFFFF" opacity="0.88" rx="0.5" />
      <rect x="5" y="4" width="81" height="46" fill="none" stroke="#3F51B5" strokeWidth="0.04" opacity="0.06" rx="0.5" />
      {/* Decorative knots */}
      <circle cx="82" cy="8" r="1.5" fill="none" stroke="#3F51B5" strokeWidth="0.08" opacity="0.1" />
      <circle cx="82" cy="8" r="0.4" fill="#3F51B5" opacity="0.12" />
      <circle cx="8" cy="46" r="1.2" fill="none" stroke="#7986CB" strokeWidth="0.06" opacity="0.08" />
      {/* Content */}
      <text x="10" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.8" fill="#1A237E" filter="url(#grid-lattice-shadow-b)">{data.companyJa}</text>
      <text x="10" y="18.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.5" fill="#3F51B5">{data.companyEn}</text>
      <text x="10" y="23" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#7986CB">{data.titleJa}</text>
      <line x1="10" y1="26" x2="80" y2="26" stroke="#3F51B5" strokeWidth="0.12" opacity="0.15" />
      <text x="10" y="31" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#555555">TEL {data.tel}</text>
      <text x="10" y="35" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#555555">{data.email}</text>
      <text x="10" y="39" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#555555">{data.website}</text>
      <line x1="10" y1="42" x2="80" y2="42" stroke="#C5CAE9" strokeWidth="0.12" />
      <text x="10" y="46" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#9FA8DA">〒{data.zipCode} {data.addressJa}</text>
      {data.logo && <image href={data.logo} x="75" y="28" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 10. MESH (網目) — Fine mesh/wireframe overlay
// Dark technical wireframe with teal glow nodes
// ============================================================
const meshTemplate: TemplateDefinition = {
  id: 'grid-mesh',
  name: 'MESH',
  nameJa: '網目',
  category: 'grid',
  designer: 'Grid Systems',
  description: '網目の精緻。極細メッシュが包むワイヤーフレーム。',
  accentColor: '#009688',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="grid-mesh-texture">
          <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="2" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
        </filter>
        <filter id="grid-mesh-shadow">
          <feDropShadow dx="0" dy="0" stdDeviation="0.8" floodColor="#009688" floodOpacity="0.25" />
        </filter>
        <linearGradient id="grid-mesh-bg" x1="0" y1="0" x2="91" y2="55" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0A1A18" />
          <stop offset="50%" stopColor="#0D201D" />
          <stop offset="100%" stopColor="#081614" />
        </linearGradient>
        <linearGradient id="grid-mesh-glow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4DB6AC" />
          <stop offset="100%" stopColor="#009688" />
        </linearGradient>
        <radialGradient id="grid-mesh-node-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#009688" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#009688" stopOpacity="0" />
        </radialGradient>
        <pattern id="grid-mesh-fine" width="2.5" height="2.5" patternUnits="userSpaceOnUse">
          <line x1="2.5" y1="0" x2="2.5" y2="2.5" stroke="#009688" strokeWidth="0.04" opacity="0.25" />
          <line x1="0" y1="2.5" x2="2.5" y2="2.5" stroke="#009688" strokeWidth="0.04" opacity="0.25" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#grid-mesh-bg)" />
      <rect width="91" height="55" fill="url(#grid-mesh-fine)" />
      {/* Major grid lines */}
      <line x1="10" y1="0" x2="10" y2="55" stroke="#009688" strokeWidth="0.08" opacity="0.2" />
      <line x1="45.5" y1="0" x2="45.5" y2="55" stroke="#009688" strokeWidth="0.08" opacity="0.2" />
      <line x1="81" y1="0" x2="81" y2="55" stroke="#009688" strokeWidth="0.08" opacity="0.2" />
      <line x1="0" y1="10" x2="91" y2="10" stroke="#009688" strokeWidth="0.08" opacity="0.2" />
      <line x1="0" y1="27.5" x2="91" y2="27.5" stroke="#009688" strokeWidth="0.08" opacity="0.2" />
      <line x1="0" y1="45" x2="91" y2="45" stroke="#009688" strokeWidth="0.08" opacity="0.2" />
      {/* Glowing node dots at major intersections */}
      <ellipse cx="10" cy="10" rx="2" ry="2" fill="url(#grid-mesh-node-glow)" />
      <circle cx="10" cy="10" r="0.5" fill="#009688" opacity="0.6" />
      <ellipse cx="45.5" cy="10" rx="1.5" ry="1.5" fill="url(#grid-mesh-node-glow)" />
      <circle cx="45.5" cy="10" r="0.4" fill="#009688" opacity="0.5" />
      <circle cx="81" cy="10" r="0.35" fill="#4DB6AC" opacity="0.4" />
      <ellipse cx="10" cy="27.5" rx="1.5" ry="1.5" fill="url(#grid-mesh-node-glow)" />
      <circle cx="10" cy="27.5" r="0.4" fill="#009688" opacity="0.45" />
      <circle cx="10" cy="45" r="0.35" fill="#4DB6AC" opacity="0.35" />
      {/* Content */}
      <text x="12" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6" letterSpacing="0.5" fill="#E0F2F1" filter="url(#grid-mesh-shadow)">
        {data.nameJa}
      </text>
      <text x="12" y="28" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="2.2" letterSpacing="0.8" fill="url(#grid-mesh-glow)">
        {data.nameEn.toUpperCase()}
      </text>
      <text x="12" y="37" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#4DB6AC">
        {data.titleJa}
      </text>
      <text x="12" y="43" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#80CBC4" opacity="0.6">
        {data.companyJa}
      </text>
      {data.logo && <image href={data.logo} x="75" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="grid-mesh-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="2" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
        </filter>
        <filter id="grid-mesh-shadow-b">
          <feDropShadow dx="0" dy="0" stdDeviation="0.4" floodColor="#009688" floodOpacity="0.15" />
        </filter>
        <linearGradient id="grid-mesh-bg-b" x1="0" y1="0" x2="91" y2="55" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#081614" />
          <stop offset="100%" stopColor="#0D201D" />
        </linearGradient>
        <radialGradient id="grid-mesh-node-glow-b" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#009688" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#009688" stopOpacity="0" />
        </radialGradient>
        <pattern id="grid-mesh-fine-b" width="2.5" height="2.5" patternUnits="userSpaceOnUse">
          <line x1="2.5" y1="0" x2="2.5" y2="2.5" stroke="#009688" strokeWidth="0.04" opacity="0.18" />
          <line x1="0" y1="2.5" x2="2.5" y2="2.5" stroke="#009688" strokeWidth="0.04" opacity="0.18" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#grid-mesh-bg-b)" />
      <rect width="91" height="55" fill="url(#grid-mesh-fine-b)" />
      <line x1="10" y1="0" x2="10" y2="55" stroke="#009688" strokeWidth="0.08" opacity="0.15" />
      <line x1="0" y1="10" x2="91" y2="10" stroke="#009688" strokeWidth="0.08" opacity="0.15" />
      <line x1="0" y1="27.5" x2="91" y2="27.5" stroke="#009688" strokeWidth="0.08" opacity="0.15" />
      <line x1="0" y1="45" x2="91" y2="45" stroke="#009688" strokeWidth="0.08" opacity="0.15" />
      {/* Glowing node */}
      <ellipse cx="10" cy="10" rx="2" ry="2" fill="url(#grid-mesh-node-glow-b)" />
      <circle cx="10" cy="10" r="0.4" fill="#009688" opacity="0.4" />
      <ellipse cx="10" cy="27.5" rx="1.5" ry="1.5" fill="url(#grid-mesh-node-glow-b)" />
      <circle cx="10" cy="27.5" r="0.3" fill="#4DB6AC" opacity="0.3" />
      {/* Content */}
      <text x="12" y="9" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.8" fill="#E0F2F1" filter="url(#grid-mesh-shadow-b)">{data.companyJa}</text>
      <text x="12" y="15" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#009688">{data.companyEn}</text>
      <text x="12" y="20.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#4DB6AC">{data.titleJa}</text>
      <line x1="12" y1="23" x2="80" y2="23" stroke="#009688" strokeWidth="0.1" opacity="0.2" />
      <text x="12" y="30" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#4DB6AC">TEL {data.tel}</text>
      <text x="12" y="35" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#4DB6AC">{data.email}</text>
      <text x="12" y="40" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#4DB6AC">{data.website}</text>
      <line x1="12" y1="43" x2="80" y2="43" stroke="#009688" strokeWidth="0.08" opacity="0.12" />
      <text x="12" y="48" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#80CBC4" opacity="0.6">〒{data.zipCode}</text>
      <text x="12" y="52" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#80CBC4" opacity="0.6">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="75" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

export const gridTemplates: TemplateDefinition[] = [
  matrixTemplate,
  cellGTemplate,
  tableTemplate,
  pixelGTemplate,
  tileTemplate,
  moduleTemplate,
  columnTemplate,
  rowTemplate,
  latticeTemplate,
  meshTemplate,
];
