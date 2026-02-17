import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. MATRIX (行列) — Dense matrix grid
// Tight grid with data placed at intersections
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
      <rect width="91" height="55" fill="#FFFFFF" />
      <defs>
        <pattern id="grid-matrix-grid" width="5" height="5" patternUnits="userSpaceOnUse">
          <line x1="5" y1="0" x2="5" y2="5" stroke="#E0E0E0" strokeWidth="0.1" />
          <line x1="0" y1="5" x2="5" y2="5" stroke="#E0E0E0" strokeWidth="0.1" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#grid-matrix-grid)" />
      {/* Red accent intersections */}
      <circle cx="10" cy="10" r="0.5" fill="#E53935" />
      <circle cx="10" cy="15" r="0.5" fill="#E53935" opacity="0.5" />
      <circle cx="15" cy="10" r="0.5" fill="#E53935" opacity="0.3" />
      <text
        x="10"
        y="25"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="6"
        letterSpacing="0.5"
        fill="#1A1A1A"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="2"
        letterSpacing="0.5"
        fill="#E53935"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="10"
        y="40"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="45"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#AAAAAA"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFFFF" />
      <defs>
        <pattern id="grid-matrix-grid-b" width="5" height="5" patternUnits="userSpaceOnUse">
          <line x1="5" y1="0" x2="5" y2="5" stroke="#E0E0E0" strokeWidth="0.1" />
          <line x1="0" y1="5" x2="5" y2="5" stroke="#E0E0E0" strokeWidth="0.1" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#grid-matrix-grid-b)" />
      <circle cx="80" cy="10" r="0.5" fill="#E53935" />
      <text
        x="10"
        y="12"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="2.5"
        fill="#1A1A1A"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="17"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#E53935"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <line x1="10" y1="20" x2="81" y2="20" stroke="#E53935" strokeWidth="0.2" />
      <text
        x="10"
        y="26"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#555555"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="30"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#555555"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="34"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#555555"
      >
        {data.website}
      </text>
      <line x1="10" y1="37.5" x2="81" y2="37.5" stroke="#E0E0E0" strokeWidth="0.15" />
      <text
        x="10"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#AAAAAA"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 2. CELL-G (区) — Divided cells with content
// Card divided into rectangular cells, each holding info
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
      <rect width="91" height="55" fill="#FFFFFF" />
      {/* Cell divisions */}
      <line x1="0" y1="30" x2="91" y2="30" stroke="#1565C0" strokeWidth="0.15" />
      <line x1="55" y1="0" x2="55" y2="55" stroke="#1565C0" strokeWidth="0.15" />
      {/* Top-left cell: Name */}
      <text
        x="5"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="6"
        letterSpacing="0.5"
        fill="#1A1A1A"
      >
        {data.nameJa}
      </text>
      <text
        x="5"
        y="21"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.5"
        fill="#1565C0"
      >
        {data.nameEn}
      </text>
      {/* Top-right cell: Title */}
      <text
        x="60"
        y="15"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="#666666"
      >
        {data.titleJa}
      </text>
      <text
        x="60"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#999999"
      >
        {data.companyJa}
      </text>
      {/* Bottom-left cell: Contact */}
      <text
        x="5"
        y="38"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#555555"
      >
        {data.tel}
      </text>
      <text
        x="5"
        y="42"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#555555"
      >
        {data.email}
      </text>
      <text
        x="5"
        y="46"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#555555"
      >
        {data.website}
      </text>
      {/* Bottom-right cell: Blue accent block */}
      <rect x="55" y="30" width="36" height="25" fill="#1565C0" opacity="0.05" />
      <text
        x="60"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#999999"
      >
        〒{data.zipCode}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFFFF" />
      <line x1="0" y1="20" x2="91" y2="20" stroke="#1565C0" strokeWidth="0.15" />
      <line x1="0" y1="40" x2="91" y2="40" stroke="#1565C0" strokeWidth="0.15" />
      <line x1="45" y1="20" x2="45" y2="40" stroke="#1565C0" strokeWidth="0.15" />
      {/* Top cell: Company */}
      <text
        x="5"
        y="10"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="2.8"
        fill="#1A1A1A"
      >
        {data.companyJa}
      </text>
      <text
        x="5"
        y="15"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#1565C0"
      >
        {data.companyEn}
      </text>
      {/* Middle-left: Phone + Email */}
      <text
        x="5"
        y="28"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#555555"
      >
        {data.tel}
      </text>
      <text
        x="5"
        y="33"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#555555"
      >
        {data.email}
      </text>
      {/* Middle-right: Website */}
      <text
        x="50"
        y="28"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#555555"
      >
        {data.website}
      </text>
      {/* Bottom cell: Address */}
      <text
        x="5"
        y="48"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.3"
        fill="#AAAAAA"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 3. TABLE (表) — Data table layout
// Structured rows and columns like a spreadsheet
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
      <rect width="91" height="55" fill="#FAFAFA" />
      {/* Table header area */}
      <rect x="5" y="5" width="81" height="10" fill="#333333" />
      <text
        x="10"
        y="12"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="4.5"
        letterSpacing="0.5"
        fill="#FFFFFF"
      >
        {data.nameJa}
      </text>
      <text
        x="82"
        y="11"
        textAnchor="end"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        fill="#CCCCCC"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Table rows */}
      <line x1="5" y1="20" x2="86" y2="20" stroke="#E0E0E0" strokeWidth="0.15" />
      <text
        x="8"
        y="19"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#999999"
      >
        役職
      </text>
      <text
        x="25"
        y="19"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#555555"
      >
        {data.titleJa}
      </text>
      <line x1="5" y1="25" x2="86" y2="25" stroke="#E0E0E0" strokeWidth="0.15" />
      <text
        x="8"
        y="24"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#999999"
      >
        会社
      </text>
      <text
        x="25"
        y="24"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#555555"
      >
        {data.companyJa}
      </text>
      <line x1="5" y1="30" x2="86" y2="30" stroke="#E0E0E0" strokeWidth="0.15" />
      <text
        x="8"
        y="29"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#999999"
      >
        電話
      </text>
      <text
        x="25"
        y="29"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#555555"
      >
        {data.tel}
      </text>
      <line x1="5" y1="35" x2="86" y2="35" stroke="#E0E0E0" strokeWidth="0.15" />
      <text
        x="8"
        y="34"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#999999"
      >
        メール
      </text>
      <text
        x="25"
        y="34"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#555555"
      >
        {data.email}
      </text>
      {/* Label column divider */}
      <line x1="22" y1="15" x2="22" y2="35" stroke="#E0E0E0" strokeWidth="0.1" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FAFAFA" />
      <rect x="5" y="5" width="81" height="8" fill="#333333" />
      <text
        x="10"
        y="11"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        fill="#FFFFFF"
      >
        {data.companyJa}
      </text>
      <text
        x="82"
        y="10.5"
        textAnchor="end"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#CCCCCC"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <line x1="5" y1="18" x2="86" y2="18" stroke="#E0E0E0" strokeWidth="0.15" />
      <text x="8" y="17" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.3" fill="#999999">電話</text>
      <text x="25" y="17" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#555555">{data.tel}</text>
      <line x1="5" y1="23" x2="86" y2="23" stroke="#E0E0E0" strokeWidth="0.15" />
      <text x="8" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.3" fill="#999999">メール</text>
      <text x="25" y="22" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#555555">{data.email}</text>
      <line x1="5" y1="28" x2="86" y2="28" stroke="#E0E0E0" strokeWidth="0.15" />
      <text x="8" y="27" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.3" fill="#999999">Web</text>
      <text x="25" y="27" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#555555">{data.website}</text>
      <line x1="5" y1="33" x2="86" y2="33" stroke="#E0E0E0" strokeWidth="0.15" />
      <text x="8" y="32" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.3" fill="#999999">郵便</text>
      <text x="25" y="32" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#555555">〒{data.zipCode}</text>
      <line x1="5" y1="38" x2="86" y2="38" stroke="#E0E0E0" strokeWidth="0.15" />
      <text x="8" y="37" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.3" fill="#999999">住所</text>
      <text x="25" y="37" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#555555">{data.addressJa}</text>
      <line x1="22" y1="13" x2="22" y2="38" stroke="#E0E0E0" strokeWidth="0.1" />
    </g>
  ),
};

// ============================================================
// 4. PIXEL-G (画) — Pixel art inspired grid
// Small square pixels forming a pattern, retro 8-bit feel
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
      <rect width="91" height="55" fill="#FFFFFF" />
      {/* Pixel pattern decoration */}
      <g opacity="0.15">
        <rect x="68" y="4" width="2" height="2" fill="#4CAF50" />
        <rect x="72" y="4" width="2" height="2" fill="#4CAF50" />
        <rect x="70" y="6" width="2" height="2" fill="#4CAF50" />
        <rect x="74" y="6" width="2" height="2" fill="#4CAF50" />
        <rect x="68" y="8" width="2" height="2" fill="#4CAF50" />
        <rect x="72" y="8" width="2" height="2" fill="#4CAF50" />
        <rect x="76" y="8" width="2" height="2" fill="#4CAF50" />
        <rect x="78" y="6" width="2" height="2" fill="#4CAF50" opacity="0.6" />
        <rect x="80" y="4" width="2" height="2" fill="#4CAF50" opacity="0.4" />
        <rect x="66" y="6" width="2" height="2" fill="#4CAF50" opacity="0.4" />
        <rect x="70" y="10" width="2" height="2" fill="#4CAF50" opacity="0.6" />
        <rect x="74" y="10" width="2" height="2" fill="#4CAF50" opacity="0.3" />
      </g>
      <g opacity="0.08">
        <rect x="5" y="42" width="2" height="2" fill="#4CAF50" />
        <rect x="9" y="42" width="2" height="2" fill="#4CAF50" />
        <rect x="7" y="44" width="2" height="2" fill="#4CAF50" />
        <rect x="11" y="44" width="2" height="2" fill="#4CAF50" />
        <rect x="5" y="46" width="2" height="2" fill="#4CAF50" />
      </g>
      <text
        x="8"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="6"
        letterSpacing="0.5"
        fill="#1A1A1A"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="29"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="2"
        letterSpacing="0.5"
        fill="#4CAF50"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="8"
        y="36"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#888888"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFFFF" />
      <g opacity="0.1">
        <rect x="75" y="40" width="2" height="2" fill="#4CAF50" />
        <rect x="79" y="40" width="2" height="2" fill="#4CAF50" />
        <rect x="77" y="42" width="2" height="2" fill="#4CAF50" />
        <rect x="81" y="42" width="2" height="2" fill="#4CAF50" />
        <rect x="75" y="44" width="2" height="2" fill="#4CAF50" />
        <rect x="83" y="44" width="2" height="2" fill="#4CAF50" opacity="0.5" />
      </g>
      <text
        x="8"
        y="12"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="2.5"
        fill="#1A1A1A"
      >
        {data.companyJa}
      </text>
      <text
        x="8"
        y="17"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#4CAF50"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <line x1="8" y1="20" x2="83" y2="20" stroke="#4CAF50" strokeWidth="0.2" />
      <text
        x="8"
        y="26"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#555555"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="30"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#555555"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="34"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#555555"
      >
        {data.website}
      </text>
      <line x1="8" y1="37.5" x2="83" y2="37.5" stroke="#E0E0E0" strokeWidth="0.15" />
      <text
        x="8"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#AAAAAA"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 5. TILE (敷) — Mosaic tile pattern
// Small colored tiles creating a decorative band
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
      <rect width="91" height="55" fill="#FFFFFF" />
      {/* Tile mosaic band at top */}
      <g>
        <rect x="0" y="0" width="3" height="3" fill="#FF9800" opacity="0.6" />
        <rect x="3" y="0" width="3" height="3" fill="#FFC107" opacity="0.4" />
        <rect x="6" y="0" width="3" height="3" fill="#FF9800" opacity="0.3" />
        <rect x="9" y="0" width="3" height="3" fill="#FFE0B2" opacity="0.5" />
        <rect x="12" y="0" width="3" height="3" fill="#FF9800" opacity="0.7" />
        <rect x="15" y="0" width="3" height="3" fill="#FFC107" opacity="0.3" />
        <rect x="18" y="0" width="3" height="3" fill="#FF9800" opacity="0.5" />
        <rect x="21" y="0" width="3" height="3" fill="#FFE0B2" opacity="0.6" />
        <rect x="24" y="0" width="3" height="3" fill="#FFC107" opacity="0.4" />
        <rect x="27" y="0" width="3" height="3" fill="#FF9800" opacity="0.3" />
        <rect x="30" y="0" width="3" height="3" fill="#FF9800" opacity="0.6" />
        <rect x="33" y="0" width="3" height="3" fill="#FFC107" opacity="0.5" />
        <rect x="36" y="0" width="3" height="3" fill="#FFE0B2" opacity="0.3" />
        <rect x="39" y="0" width="3" height="3" fill="#FF9800" opacity="0.4" />
        <rect x="42" y="0" width="3" height="3" fill="#FFC107" opacity="0.7" />
        <rect x="45" y="0" width="3" height="3" fill="#FF9800" opacity="0.3" />
        <rect x="48" y="0" width="3" height="3" fill="#FFE0B2" opacity="0.5" />
        <rect x="51" y="0" width="3" height="3" fill="#FF9800" opacity="0.6" />
        <rect x="54" y="0" width="3" height="3" fill="#FFC107" opacity="0.4" />
        <rect x="57" y="0" width="3" height="3" fill="#FF9800" opacity="0.3" />
        <rect x="60" y="0" width="3" height="3" fill="#FFE0B2" opacity="0.5" />
        <rect x="63" y="0" width="3" height="3" fill="#FF9800" opacity="0.7" />
        <rect x="66" y="0" width="3" height="3" fill="#FFC107" opacity="0.3" />
        <rect x="69" y="0" width="3" height="3" fill="#FF9800" opacity="0.5" />
        <rect x="72" y="0" width="3" height="3" fill="#FFE0B2" opacity="0.6" />
        <rect x="75" y="0" width="3" height="3" fill="#FFC107" opacity="0.4" />
        <rect x="78" y="0" width="3" height="3" fill="#FF9800" opacity="0.3" />
        <rect x="81" y="0" width="3" height="3" fill="#FF9800" opacity="0.6" />
        <rect x="84" y="0" width="3" height="3" fill="#FFC107" opacity="0.5" />
        <rect x="87" y="0" width="4" height="3" fill="#FF9800" opacity="0.4" />
      </g>
      <text
        x="10"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="0.5"
        fill="#1A1A1A"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="27"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.5"
        fill="#FF9800"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#AAAAAA"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFFFF" />
      {/* Tile band at bottom */}
      <g>
        {[0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87].map((x, i) => (
          <rect key={i} x={x} y="52" width="3" height="3" fill={i % 3 === 0 ? '#FF9800' : i % 3 === 1 ? '#FFC107' : '#FFE0B2'} opacity={0.3 + (i % 5) * 0.1} />
        ))}
      </g>
      <text
        x="10"
        y="12"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        fill="#1A1A1A"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="17"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#FF9800"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <line x1="10" y1="20" x2="81" y2="20" stroke="#FFE0B2" strokeWidth="0.2" />
      <text
        x="10"
        y="26"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#555555"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="30"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#555555"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="34"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#555555"
      >
        {data.website}
      </text>
      <line x1="10" y1="37.5" x2="81" y2="37.5" stroke="#FFE0B2" strokeWidth="0.2" />
      <text
        x="10"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#AAAAAA"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 6. MODULE (模) — Modular grid system
// Strict 12-column modular grid with visible structure
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
      <rect width="91" height="55" fill="#FAFAFA" />
      {/* 12-column grid lines */}
      <g opacity="0.06">
        <rect x="3" y="0" width="6.7" height="55" fill="#9C27B0" />
        <rect x="16.4" y="0" width="6.7" height="55" fill="#9C27B0" />
        <rect x="29.8" y="0" width="6.7" height="55" fill="#9C27B0" />
        <rect x="43.2" y="0" width="6.7" height="55" fill="#9C27B0" />
        <rect x="56.6" y="0" width="6.7" height="55" fill="#9C27B0" />
        <rect x="70" y="0" width="6.7" height="55" fill="#9C27B0" />
      </g>
      {/* Horizontal grid */}
      <line x1="0" y1="5" x2="91" y2="5" stroke="#9C27B0" strokeWidth="0.05" opacity="0.15" />
      <line x1="0" y1="15" x2="91" y2="15" stroke="#9C27B0" strokeWidth="0.05" opacity="0.15" />
      <line x1="0" y1="25" x2="91" y2="25" stroke="#9C27B0" strokeWidth="0.05" opacity="0.15" />
      <line x1="0" y1="35" x2="91" y2="35" stroke="#9C27B0" strokeWidth="0.05" opacity="0.15" />
      <line x1="0" y1="45" x2="91" y2="45" stroke="#9C27B0" strokeWidth="0.05" opacity="0.15" />
      <text
        x="3"
        y="13"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="6"
        letterSpacing="0.5"
        fill="#1A1A1A"
      >
        {data.nameJa}
      </text>
      <text
        x="3"
        y="23"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="2"
        letterSpacing="0.5"
        fill="#9C27B0"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="3"
        y="33"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      <text
        x="3"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#AAAAAA"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FAFAFA" />
      <g opacity="0.04">
        <rect x="3" y="0" width="6.7" height="55" fill="#9C27B0" />
        <rect x="16.4" y="0" width="6.7" height="55" fill="#9C27B0" />
        <rect x="29.8" y="0" width="6.7" height="55" fill="#9C27B0" />
        <rect x="43.2" y="0" width="6.7" height="55" fill="#9C27B0" />
        <rect x="56.6" y="0" width="6.7" height="55" fill="#9C27B0" />
        <rect x="70" y="0" width="6.7" height="55" fill="#9C27B0" />
      </g>
      <line x1="0" y1="5" x2="91" y2="5" stroke="#9C27B0" strokeWidth="0.05" opacity="0.1" />
      <line x1="0" y1="15" x2="91" y2="15" stroke="#9C27B0" strokeWidth="0.05" opacity="0.1" />
      <line x1="0" y1="25" x2="91" y2="25" stroke="#9C27B0" strokeWidth="0.05" opacity="0.1" />
      <line x1="0" y1="35" x2="91" y2="35" stroke="#9C27B0" strokeWidth="0.05" opacity="0.1" />
      <line x1="0" y1="45" x2="91" y2="45" stroke="#9C27B0" strokeWidth="0.05" opacity="0.1" />
      <text
        x="3"
        y="13"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="2.5"
        fill="#1A1A1A"
      >
        {data.companyJa}
      </text>
      <text
        x="43.2"
        y="13"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#9C27B0"
      >
        {data.companyEn}
      </text>
      <text x="3" y="23" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.4" fill="#555555">{data.tel}</text>
      <text x="43.2" y="23" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.4" fill="#555555">{data.email}</text>
      <text x="3" y="33" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.4" fill="#555555">{data.website}</text>
      <text x="3" y="43" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#AAAAAA">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 7. COLUMN (柱列) — Strong vertical column divisions
// Bold vertical dividers creating distinct content zones
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
      <rect width="91" height="55" fill="#FFFFFF" />
      {/* Bold column divider */}
      <rect x="28" y="0" width="0.8" height="55" fill="#00BCD4" opacity="0.3" />
      {/* Left column: accent */}
      <rect x="0" y="0" width="28" height="55" fill="#00BCD4" opacity="0.03" />
      <text
        x="14"
        y="28"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="100"
        fontSize="10"
        fill="#00BCD4"
        opacity="0.15"
        transform="rotate(-90,14,28)"
      >
        名刺
      </text>
      {/* Right column: content */}
      <text
        x="34"
        y="18"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#1A1A1A"
      >
        {data.nameJa}
      </text>
      <text
        x="34"
        y="25"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.5"
        fill="#00BCD4"
      >
        {data.nameEn}
      </text>
      <text
        x="34"
        y="34"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      <text
        x="34"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#AAAAAA"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFFFF" />
      <rect x="28" y="0" width="0.8" height="55" fill="#00BCD4" opacity="0.3" />
      <rect x="0" y="0" width="28" height="55" fill="#00BCD4" opacity="0.03" />
      <text
        x="14"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="2"
        fill="#00BCD4"
        opacity="0.4"
      >
        連絡先
      </text>
      <text
        x="34"
        y="12"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="2.5"
        fill="#1A1A1A"
      >
        {data.companyJa}
      </text>
      <text
        x="34"
        y="17"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#00BCD4"
      >
        {data.companyEn}
      </text>
      <line x1="34" y1="20.5" x2="86" y2="20.5" stroke="#00BCD4" strokeWidth="0.15" />
      <text x="34" y="26" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.4" fill="#555555">{data.tel}</text>
      <text x="34" y="30" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.4" fill="#555555">{data.email}</text>
      <text x="34" y="34" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.4" fill="#555555">{data.website}</text>
      <line x1="34" y1="37.5" x2="86" y2="37.5" stroke="#E0E0E0" strokeWidth="0.15" />
      <text x="34" y="43" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#AAAAAA">〒{data.zipCode}</text>
      <text x="34" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#AAAAAA">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 8. ROW (列) — Horizontal row emphasis
// Strong horizontal bands creating row-based layout
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
      <rect width="91" height="55" fill="#FFFFFF" />
      {/* Row bands */}
      <rect x="0" y="0" width="91" height="12" fill="#FF5722" opacity="0.08" />
      <rect x="0" y="14" width="91" height="16" fill="#FFFFFF" />
      <rect x="0" y="32" width="91" height="10" fill="#FF5722" opacity="0.04" />
      <rect x="0" y="44" width="91" height="11" fill="#FF5722" opacity="0.08" />
      {/* Row dividers */}
      <line x1="0" y1="12" x2="91" y2="12" stroke="#FF5722" strokeWidth="0.3" opacity="0.3" />
      <line x1="0" y1="32" x2="91" y2="32" stroke="#FF5722" strokeWidth="0.15" opacity="0.2" />
      <line x1="0" y1="44" x2="91" y2="44" stroke="#FF5722" strokeWidth="0.15" opacity="0.2" />
      {/* Row 1: Company */}
      <text
        x="8"
        y="8"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#FF5722"
      >
        {data.companyJa}
      </text>
      {/* Row 2: Name */}
      <text
        x="8"
        y="24"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="6"
        letterSpacing="0.5"
        fill="#1A1A1A"
      >
        {data.nameJa}
      </text>
      <text
        x="83"
        y="24"
        textAnchor="end"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="2"
        fill="#FF5722"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Row 3: Title */}
      <text
        x="8"
        y="39"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      {/* Row 4: Contact hint */}
      <text
        x="8"
        y="51"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#AAAAAA"
      >
        {data.email}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFFFF" />
      <rect x="0" y="0" width="91" height="10" fill="#FF5722" opacity="0.08" />
      <line x1="0" y1="10" x2="91" y2="10" stroke="#FF5722" strokeWidth="0.3" opacity="0.3" />
      <line x1="0" y1="20" x2="91" y2="20" stroke="#FF5722" strokeWidth="0.1" opacity="0.15" />
      <line x1="0" y1="30" x2="91" y2="30" stroke="#FF5722" strokeWidth="0.1" opacity="0.15" />
      <line x1="0" y1="40" x2="91" y2="40" stroke="#FF5722" strokeWidth="0.1" opacity="0.15" />
      <text x="8" y="7" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="2.5" fill="#1A1A1A">{data.companyJa}</text>
      <text x="83" y="7" textAnchor="end" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.3" fill="#FF5722">{data.companyEn.toUpperCase()}</text>
      <text x="8" y="17" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.4" fill="#555555">{data.tel}</text>
      <text x="8" y="27" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.4" fill="#555555">{data.email}</text>
      <text x="8" y="37" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.4" fill="#555555">{data.website}</text>
      <text x="8" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#AAAAAA">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 9. LATTICE (格) — Intersecting lattice pattern
// Woven grid lines creating a basket-weave effect
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
      <rect width="91" height="55" fill="#FFFFFF" />
      <defs>
        <pattern id="grid-lattice-pattern" width="6" height="6" patternUnits="userSpaceOnUse">
          <line x1="0" y1="3" x2="6" y2="3" stroke="#3F51B5" strokeWidth="0.15" opacity="0.12" />
          <line x1="3" y1="0" x2="3" y2="6" stroke="#3F51B5" strokeWidth="0.15" opacity="0.12" />
          <rect x="1.5" y="1.5" width="3" height="3" fill="none" stroke="#3F51B5" strokeWidth="0.05" opacity="0.08" transform="rotate(45,3,3)" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#grid-lattice-pattern)" />
      {/* Clear content area */}
      <rect x="6" y="10" width="55" height="35" fill="#FFFFFF" opacity="0.9" />
      <text
        x="10"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="0.5"
        fill="#1A237E"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="29"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.5"
        fill="#3F51B5"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="37"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#7986CB"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#9FA8DA"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFFFF" />
      <defs>
        <pattern id="grid-lattice-pattern-b" width="6" height="6" patternUnits="userSpaceOnUse">
          <line x1="0" y1="3" x2="6" y2="3" stroke="#3F51B5" strokeWidth="0.15" opacity="0.08" />
          <line x1="3" y1="0" x2="3" y2="6" stroke="#3F51B5" strokeWidth="0.15" opacity="0.08" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#grid-lattice-pattern-b)" />
      <rect x="6" y="5" width="79" height="44" fill="#FFFFFF" opacity="0.85" />
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        fill="#1A237E"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#3F51B5"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="22" x2="80" y2="22" stroke="#3F51B5" strokeWidth="0.15" />
      <text x="10" y="28" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.4" fill="#555555">{data.tel}</text>
      <text x="10" y="32" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.4" fill="#555555">{data.email}</text>
      <text x="10" y="36" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.4" fill="#555555">{data.website}</text>
      <line x1="10" y1="39.5" x2="80" y2="39.5" stroke="#C5CAE9" strokeWidth="0.15" />
      <text x="10" y="44.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#9FA8DA">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 10. MESH (網目) — Fine mesh/wireframe overlay
// Ultra-fine mesh grid creating a technical wireframe feel
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
      <rect width="91" height="55" fill="#0A1A18" />
      <defs>
        <pattern id="grid-mesh-fine" width="2.5" height="2.5" patternUnits="userSpaceOnUse">
          <line x1="2.5" y1="0" x2="2.5" y2="2.5" stroke="#009688" strokeWidth="0.05" opacity="0.3" />
          <line x1="0" y1="2.5" x2="2.5" y2="2.5" stroke="#009688" strokeWidth="0.05" opacity="0.3" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#grid-mesh-fine)" />
      {/* Major grid lines */}
      <line x1="10" y1="0" x2="10" y2="55" stroke="#009688" strokeWidth="0.1" opacity="0.2" />
      <line x1="45.5" y1="0" x2="45.5" y2="55" stroke="#009688" strokeWidth="0.1" opacity="0.2" />
      <line x1="81" y1="0" x2="81" y2="55" stroke="#009688" strokeWidth="0.1" opacity="0.2" />
      <line x1="0" y1="10" x2="91" y2="10" stroke="#009688" strokeWidth="0.1" opacity="0.2" />
      <line x1="0" y1="27.5" x2="91" y2="27.5" stroke="#009688" strokeWidth="0.1" opacity="0.2" />
      <line x1="0" y1="45" x2="91" y2="45" stroke="#009688" strokeWidth="0.1" opacity="0.2" />
      {/* Node dots at major intersections */}
      <circle cx="10" cy="10" r="0.4" fill="#009688" opacity="0.5" />
      <circle cx="45.5" cy="10" r="0.4" fill="#009688" opacity="0.5" />
      <circle cx="81" cy="10" r="0.4" fill="#009688" opacity="0.5" />
      <circle cx="10" cy="27.5" r="0.4" fill="#009688" opacity="0.5" />
      <circle cx="10" cy="45" r="0.4" fill="#009688" opacity="0.5" />
      <text
        x="12"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#E0F2F1"
      >
        {data.nameJa}
      </text>
      <text
        x="12"
        y="28"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.8"
        fill="#009688"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="12"
        y="37"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#4DB6AC"
      >
        {data.titleJa}
      </text>
      <text
        x="12"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#80CBC4"
        opacity="0.6"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0A1A18" />
      <defs>
        <pattern id="grid-mesh-fine-b" width="2.5" height="2.5" patternUnits="userSpaceOnUse">
          <line x1="2.5" y1="0" x2="2.5" y2="2.5" stroke="#009688" strokeWidth="0.05" opacity="0.2" />
          <line x1="0" y1="2.5" x2="2.5" y2="2.5" stroke="#009688" strokeWidth="0.05" opacity="0.2" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#grid-mesh-fine-b)" />
      <line x1="10" y1="0" x2="10" y2="55" stroke="#009688" strokeWidth="0.1" opacity="0.15" />
      <line x1="0" y1="10" x2="91" y2="10" stroke="#009688" strokeWidth="0.1" opacity="0.15" />
      <line x1="0" y1="27.5" x2="91" y2="27.5" stroke="#009688" strokeWidth="0.1" opacity="0.15" />
      <line x1="0" y1="45" x2="91" y2="45" stroke="#009688" strokeWidth="0.1" opacity="0.15" />
      <circle cx="10" cy="10" r="0.4" fill="#009688" opacity="0.4" />
      <text
        x="12"
        y="9"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        fill="#E0F2F1"
      >
        {data.companyJa}
      </text>
      <text
        x="12"
        y="16"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#009688"
      >
        {data.companyEn}
      </text>
      <text x="12" y="24" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.4" fill="#4DB6AC">{data.tel}</text>
      <text x="12" y="31" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.4" fill="#4DB6AC">{data.email}</text>
      <text x="12" y="38" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.4" fill="#4DB6AC">{data.website}</text>
      <text x="12" y="48" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#80CBC4" opacity="0.6">〒{data.zipCode} {data.addressJa}</text>
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
