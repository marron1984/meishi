import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. KATACHI (形) — Kashiwa Sato
// Bold red top bar, geometric confidence
// ============================================================
const katachiTemplate: TemplateDefinition = {
  id: 'katachi',
  name: 'KATACHI',
  nameJa: '形',
  category: 'geometric',
  designer: 'Kashiwa Sato',
  description: '大胆な赤のバーと幾何学的な自信。形の力強さ。',
  accentColor: '#E60012',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Bold red top bar */}
      <rect x="0" y="0" width="91" height="13" fill="#E60012" />
      {/* Small geometric square accent */}
      <rect x="78" y="3" width="7" height="7" fill="#ffffff" opacity="0.2" />
      <rect x="80" y="5" width="3" height="3" fill="#ffffff" opacity="0.35" />
      <text
        x="8"
        y="9.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="3"
        letterSpacing="0.4"
        fill="#ffffff"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <text
        x="8"
        y="25"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="6.5"
        fill="#1a1a1a"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="31"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        letterSpacing="0.15"
        fill="#666666"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="8"
        y="36"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2"
        fill="#999999"
      >
        {data.titleJa}
      </text>
      <line x1="8" y1="39.5" x2="40" y2="39.5" stroke="#E60012" strokeWidth="0.4" />
      <text
        x="8"
        y="43.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.7"
        fill="#666666"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="47"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.7"
        fill="#666666"
      >
        {data.email}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#E60012" />
      {/* Geometric rectangle pattern */}
      <rect x="60" y="0" width="31" height="20" fill="#C2000F" />
      <rect x="70" y="20" width="21" height="15" fill="#B0000D" />
      <text
        x="45.5"
        y="29"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="800"
        fontSize="7"
        letterSpacing="0.5"
        fill="#ffffff"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        letterSpacing="0.8"
        fill="rgba(255,255,255,0.7)"
      >
        {data.companyJa}
      </text>
    </g>
  ),
};

// ============================================================
// 2. DIAMOND (菱) — Peter Saville
// Diamond/rhombus accent shape, monochrome elegance
// ============================================================
const diamondTemplate: TemplateDefinition = {
  id: 'diamond',
  name: 'DIAMOND',
  nameJa: '菱',
  category: 'geometric',
  designer: 'Peter Saville',
  description: '菱形のアクセントが生むモノクロームの緊張感。',
  accentColor: '#1A1A1A',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Large diamond shape on right */}
      <polygon
        points="72,5 85,27.5 72,50 59,27.5"
        fill="none"
        stroke="#1A1A1A"
        strokeWidth="0.5"
      />
      <polygon
        points="72,12 80,27.5 72,43 64,27.5"
        fill="#1A1A1A"
        opacity="0.06"
      />
      {/* Small diamond accent near name */}
      <polygon
        points="8,19 10,21 8,23 6,21"
        fill="#1A1A1A"
      />
      <text
        x="14"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="5"
        fill="#1A1A1A"
      >
        {data.nameJa}
      </text>
      <text
        x="14"
        y="27.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.2"
        fill="#666666"
      >
        {data.nameEn}
      </text>
      <text
        x="14"
        y="32"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="#999999"
      >
        {data.titleJa}
      </text>
      <line x1="14" y1="35.5" x2="45" y2="35.5" stroke="#1A1A1A" strokeWidth="0.15" />
      <text
        x="14"
        y="39.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#888888"
      >
        {data.tel}
      </text>
      <text
        x="14"
        y="43"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#888888"
      >
        {data.email}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1A1A1A" />
      {/* Centered diamond */}
      <polygon
        points="45.5,8 62,27.5 45.5,47 29,27.5"
        fill="none"
        stroke="#ffffff"
        strokeWidth="0.4"
      />
      <polygon
        points="45.5,14 56,27.5 45.5,41 35,27.5"
        fill="#ffffff"
        opacity="0.08"
      />
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="3"
        letterSpacing="0.6"
        fill="#ffffff"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2"
        fill="rgba(255,255,255,0.5)"
      >
        {data.companyJa}
      </text>
    </g>
  ),
};

// ============================================================
// 3. HEX (六) — Max Bill
// Hexagonal motif, Bauhaus geometry meets Swiss order
// ============================================================
const hexTemplate: TemplateDefinition = {
  id: 'hex',
  name: 'HEX',
  nameJa: '六',
  category: 'geometric',
  designer: 'Max Bill',
  description: '六角形のモチーフ。バウハウスとスイスの秩序が融合。',
  accentColor: '#E8A000',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FAFAFA" />
      {/* Hexagonal motif cluster - top right */}
      <polygon points="70,4 76.5,7.75 76.5,15.25 70,19 63.5,15.25 63.5,7.75" fill="#E8A000" opacity="0.12" />
      <polygon points="70,4 76.5,7.75 76.5,15.25 70,19 63.5,15.25 63.5,7.75" fill="none" stroke="#E8A000" strokeWidth="0.3" />
      <polygon points="82,4 88.5,7.75 88.5,15.25 82,19 75.5,15.25 75.5,7.75" fill="#E8A000" opacity="0.06" />
      <polygon points="82,4 88.5,7.75 88.5,15.25 82,19 75.5,15.25 75.5,7.75" fill="none" stroke="#E8A000" strokeWidth="0.2" />
      <polygon points="76,16 82.5,19.75 82.5,27.25 76,31 69.5,27.25 69.5,19.75" fill="#E8A000" opacity="0.08" />
      <polygon points="76,16 82.5,19.75 82.5,27.25 76,31 69.5,27.25 69.5,19.75" fill="none" stroke="#E8A000" strokeWidth="0.25" />
      {/* Name block */}
      <text
        x="8"
        y="18"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="5.5"
        fill="#1a1a1a"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="24"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.15"
        fill="#E8A000"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="8"
        y="29"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      {/* Thin line separator */}
      <line x1="8" y1="33" x2="50" y2="33" stroke="#E8A000" strokeWidth="0.25" />
      <text
        x="8"
        y="37.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#777777"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="41"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#777777"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="44.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#777777"
      >
        {data.website}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#E8A000" />
      {/* Hex pattern on back */}
      <polygon points="20,10 28,14.6 28,23.8 20,28.4 12,23.8 12,14.6" fill="none" stroke="#ffffff" strokeWidth="0.4" opacity="0.3" />
      <polygon points="36,10 44,14.6 44,23.8 36,28.4 28,23.8 28,14.6" fill="none" stroke="#ffffff" strokeWidth="0.4" opacity="0.2" />
      <polygon points="28,25 36,29.6 36,38.8 28,43.4 20,38.8 20,29.6" fill="none" stroke="#ffffff" strokeWidth="0.4" opacity="0.25" />
      <polygon points="52,10 60,14.6 60,23.8 52,28.4 44,23.8 44,14.6" fill="none" stroke="#ffffff" strokeWidth="0.4" opacity="0.15" />
      <polygon points="44,25 52,29.6 52,38.8 44,43.4 36,38.8 36,29.6" fill="none" stroke="#ffffff" strokeWidth="0.4" opacity="0.2" />
      <polygon points="60,25 68,29.6 68,38.8 60,43.4 52,38.8 52,29.6" fill="none" stroke="#ffffff" strokeWidth="0.4" opacity="0.15" />
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="4.5"
        letterSpacing="0.6"
        fill="#ffffff"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="rgba(255,255,255,0.7)"
      >
        {data.companyJa}
      </text>
    </g>
  ),
};

// ============================================================
// 4. GRID-GEO (格) — Karl Gerstner
// Visible grid overlay, content aligned to grid
// ============================================================
const gridGeoTemplate: TemplateDefinition = {
  id: 'grid-geo',
  name: 'GRID-GEO',
  nameJa: '格',
  category: 'geometric',
  designer: 'Karl Gerstner',
  description: '可視グリッドが秩序を可視化。情報建築の極致。',
  accentColor: '#0066CC',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Visible grid lines */}
      <line x1="7" y1="0" x2="7" y2="55" stroke="#0066CC" strokeWidth="0.08" opacity="0.3" />
      <line x1="22.75" y1="0" x2="22.75" y2="55" stroke="#0066CC" strokeWidth="0.08" opacity="0.3" />
      <line x1="38.5" y1="0" x2="38.5" y2="55" stroke="#0066CC" strokeWidth="0.08" opacity="0.3" />
      <line x1="54.25" y1="0" x2="54.25" y2="55" stroke="#0066CC" strokeWidth="0.08" opacity="0.3" />
      <line x1="70" y1="0" x2="70" y2="55" stroke="#0066CC" strokeWidth="0.08" opacity="0.3" />
      <line x1="84" y1="0" x2="84" y2="55" stroke="#0066CC" strokeWidth="0.08" opacity="0.3" />
      <line x1="0" y1="7" x2="91" y2="7" stroke="#0066CC" strokeWidth="0.08" opacity="0.3" />
      <line x1="0" y1="17" x2="91" y2="17" stroke="#0066CC" strokeWidth="0.08" opacity="0.3" />
      <line x1="0" y1="27" x2="91" y2="27" stroke="#0066CC" strokeWidth="0.08" opacity="0.3" />
      <line x1="0" y1="37" x2="91" y2="37" stroke="#0066CC" strokeWidth="0.08" opacity="0.3" />
      <line x1="0" y1="47" x2="91" y2="47" stroke="#0066CC" strokeWidth="0.08" opacity="0.3" />
      {/* Blue accent block in top-left grid cell */}
      <rect x="0" y="0" width="7" height="7" fill="#0066CC" />
      {/* Grid-aligned content */}
      <text
        x="7"
        y="5"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="1.5"
        fill="#ffffff"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        G
      </text>
      <text
        x="22.75"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="5.5"
        fill="#1a1a1a"
      >
        {data.nameJa}
      </text>
      <text
        x="22.75"
        y="20"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.15"
        fill="#0066CC"
      >
        {data.nameEn}
      </text>
      <text
        x="22.75"
        y="25"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      {/* Contact info aligned to lower grid */}
      <text
        x="7"
        y="32"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.5"
        letterSpacing="0.1"
        fill="#0066CC"
      >
        CONTACT
      </text>
      <text
        x="7"
        y="36"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#666666"
      >
        {data.tel}
      </text>
      <text
        x="7"
        y="39.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#666666"
      >
        {data.email}
      </text>
      <text
        x="7"
        y="43"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#666666"
      >
        {data.website}
      </text>
      <text
        x="7"
        y="49"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#999999"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0066CC" />
      {/* Grid lines on back */}
      <line x1="22.75" y1="0" x2="22.75" y2="55" stroke="#ffffff" strokeWidth="0.1" opacity="0.15" />
      <line x1="45.5" y1="0" x2="45.5" y2="55" stroke="#ffffff" strokeWidth="0.1" opacity="0.15" />
      <line x1="68.25" y1="0" x2="68.25" y2="55" stroke="#ffffff" strokeWidth="0.1" opacity="0.15" />
      <line x1="0" y1="13.75" x2="91" y2="13.75" stroke="#ffffff" strokeWidth="0.1" opacity="0.15" />
      <line x1="0" y1="27.5" x2="91" y2="27.5" stroke="#ffffff" strokeWidth="0.1" opacity="0.15" />
      <line x1="0" y1="41.25" x2="91" y2="41.25" stroke="#ffffff" strokeWidth="0.1" opacity="0.15" />
      {/* White accent cell */}
      <rect x="68.25" y="41.25" width="22.75" height="13.75" fill="#004D99" />
      <text
        x="45.5"
        y="25"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="5"
        letterSpacing="0.8"
        fill="#ffffff"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="rgba(255,255,255,0.6)"
      >
        {data.companyJa}
      </text>
    </g>
  ),
};

// ============================================================
// 5. BLOCK (塊) — Paul Rand
// Color block composition, 2-3 bold colored rectangles
// ============================================================
const blockTemplate: TemplateDefinition = {
  id: 'block',
  name: 'BLOCK',
  nameJa: '塊',
  category: 'geometric',
  designer: 'Paul Rand',
  description: '色面の構成美。大胆な矩形が空間を支配する。',
  accentColor: '#FF6900',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFDF8" />
      {/* Three bold color blocks */}
      <rect x="0" y="0" width="28" height="22" fill="#FF6900" />
      <rect x="0" y="22" width="14" height="33" fill="#003893" />
      <rect x="14" y="22" width="14" height="16" fill="#FFC800" />
      {/* Name on white area */}
      <text
        x="36"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="6"
        fill="#1a1a1a"
      >
        {data.nameJa}
      </text>
      <text
        x="36"
        y="20"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="2"
        letterSpacing="0.15"
        fill="#FF6900"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="36"
        y="25"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      <text
        x="36"
        y="35"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#666666"
      >
        T. {data.tel}
      </text>
      <text
        x="36"
        y="38.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#666666"
      >
        {data.email}
      </text>
      <text
        x="36"
        y="42"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#666666"
      >
        {data.website}
      </text>
      <text
        x="36"
        y="49"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#aaaaaa"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FF6900" />
      {/* Overlapping block composition */}
      <rect x="0" y="30" width="45" height="25" fill="#003893" />
      <rect x="55" y="0" width="36" height="30" fill="#FFC800" />
      <text
        x="45.5"
        y="25"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="800"
        fontSize="5.5"
        letterSpacing="0.4"
        fill="#ffffff"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="rgba(255,255,255,0.75)"
      >
        {data.companyJa}
      </text>
    </g>
  ),
};

// ============================================================
// 6. STRIPE (縞) — Daniel Buren
// Bold vertical stripes as accent
// ============================================================
const stripeTemplate: TemplateDefinition = {
  id: 'stripe',
  name: 'STRIPE',
  nameJa: '縞',
  category: 'geometric',
  designer: 'Daniel Buren',
  description: '反復する縞が空間にリズムと秩序を刻む。',
  accentColor: '#00805A',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Bold vertical stripes on left edge */}
      <rect x="0" y="0" width="3" height="55" fill="#00805A" />
      <rect x="5" y="0" width="3" height="55" fill="#00805A" />
      <rect x="10" y="0" width="3" height="55" fill="#00805A" />
      <rect x="15" y="0" width="3" height="55" fill="#00805A" opacity="0.6" />
      <rect x="20" y="0" width="3" height="55" fill="#00805A" opacity="0.3" />
      <rect x="25" y="0" width="3" height="55" fill="#00805A" opacity="0.1" />
      {/* Content placed after stripes */}
      <text
        x="34"
        y="16"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="5.5"
        fill="#1a1a1a"
      >
        {data.nameJa}
      </text>
      <text
        x="34"
        y="22"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.2"
        fill="#00805A"
      >
        {data.nameEn}
      </text>
      <text
        x="34"
        y="27"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      <line x1="34" y1="31" x2="82" y2="31" stroke="#00805A" strokeWidth="0.2" />
      <text
        x="34"
        y="35.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#666666"
      >
        {data.tel}
      </text>
      <text
        x="34"
        y="39"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#666666"
      >
        {data.email}
      </text>
      <text
        x="34"
        y="42.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#666666"
      >
        {data.website}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#00805A" />
      {/* White stripes pattern */}
      <rect x="0" y="0" width="5.2" height="55" fill="#ffffff" opacity="0.12" />
      <rect x="10.4" y="0" width="5.2" height="55" fill="#ffffff" opacity="0.12" />
      <rect x="20.8" y="0" width="5.2" height="55" fill="#ffffff" opacity="0.12" />
      <rect x="31.2" y="0" width="5.2" height="55" fill="#ffffff" opacity="0.12" />
      <rect x="41.6" y="0" width="5.2" height="55" fill="#ffffff" opacity="0.12" />
      <rect x="52" y="0" width="5.2" height="55" fill="#ffffff" opacity="0.12" />
      <rect x="62.4" y="0" width="5.2" height="55" fill="#ffffff" opacity="0.12" />
      <rect x="72.8" y="0" width="5.2" height="55" fill="#ffffff" opacity="0.12" />
      <rect x="83.2" y="0" width="5.2" height="55" fill="#ffffff" opacity="0.12" />
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="5"
        letterSpacing="0.6"
        fill="#ffffff"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="33"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="rgba(255,255,255,0.65)"
      >
        {data.companyJa}
      </text>
    </g>
  ),
};

// ============================================================
// 7. ARC (弧) — Zaha Hadid
// Sweeping circular arcs, architectural curves
// ============================================================
const arcTemplate: TemplateDefinition = {
  id: 'arc',
  name: 'ARC',
  nameJa: '弧',
  category: 'geometric',
  designer: 'Zaha Hadid',
  description: '流麗なアークが建築的な動勢を生み出す。',
  accentColor: '#6B21A8',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FAF8FF" />
      {/* Sweeping arcs */}
      <path
        d="M 91 55 A 70 70 0 0 0 21 55"
        fill="none"
        stroke="#6B21A8"
        strokeWidth="0.5"
        opacity="0.2"
      />
      <path
        d="M 91 55 A 55 55 0 0 0 36 55"
        fill="none"
        stroke="#6B21A8"
        strokeWidth="0.8"
        opacity="0.3"
      />
      <path
        d="M 91 55 A 40 40 0 0 0 51 55"
        fill="none"
        stroke="#6B21A8"
        strokeWidth="1.2"
        opacity="0.5"
      />
      <path
        d="M 91 55 A 25 25 0 0 0 66 55"
        fill="#6B21A8"
        opacity="0.08"
      />
      {/* Large arc from top-left */}
      <path
        d="M 0 0 A 80 80 0 0 1 80 0"
        fill="none"
        stroke="#6B21A8"
        strokeWidth="0.3"
        opacity="0.15"
      />
      <text
        x="10"
        y="17"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="6"
        fill="#2D0A4E"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="23"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.2"
        fill="#6B21A8"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="28"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="#999999"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#777777"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="39.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#777777"
      >
        {data.email}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#2D0A4E" />
      {/* Dramatic sweeping arcs */}
      <path
        d="M 0 0 A 90 90 0 0 1 91 0"
        fill="none"
        stroke="#ffffff"
        strokeWidth="0.3"
        opacity="0.15"
      />
      <path
        d="M 0 10 A 80 80 0 0 1 91 10"
        fill="none"
        stroke="#ffffff"
        strokeWidth="0.3"
        opacity="0.12"
      />
      <path
        d="M 0 55 A 60 60 0 0 0 91 55"
        fill="none"
        stroke="#6B21A8"
        strokeWidth="2"
        opacity="0.5"
      />
      <path
        d="M 0 55 A 45 45 0 0 0 91 55"
        fill="none"
        stroke="#6B21A8"
        strokeWidth="1.5"
        opacity="0.35"
      />
      <path
        d="M 0 55 A 30 30 0 0 0 91 55"
        fill="none"
        stroke="#6B21A8"
        strokeWidth="1"
        opacity="0.25"
      />
      <text
        x="45.5"
        y="25"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="4.5"
        letterSpacing="0.5"
        fill="#ffffff"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="rgba(255,255,255,0.5)"
      >
        {data.companyJa}
      </text>
    </g>
  ),
};

// ============================================================
// 8. CORNER (隅) — Otl Aicher
// Corner bracket/frame accent, clean inside
// ============================================================
const cornerTemplate: TemplateDefinition = {
  id: 'corner',
  name: 'CORNER',
  nameJa: '隅',
  category: 'geometric',
  designer: 'Otl Aicher',
  description: 'コーナーフレームが空間を定義。清潔な内部。',
  accentColor: '#006B3F',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Top-left corner bracket */}
      <line x1="5" y1="5" x2="5" y2="15" stroke="#006B3F" strokeWidth="0.8" />
      <line x1="5" y1="5" x2="18" y2="5" stroke="#006B3F" strokeWidth="0.8" />
      {/* Bottom-right corner bracket */}
      <line x1="86" y1="50" x2="86" y2="40" stroke="#006B3F" strokeWidth="0.8" />
      <line x1="86" y1="50" x2="73" y2="50" stroke="#006B3F" strokeWidth="0.8" />
      {/* Small accent dot at intersection */}
      <circle cx="5" cy="5" r="1" fill="#006B3F" />
      <circle cx="86" cy="50" r="1" fill="#006B3F" />
      {/* Content within frame */}
      <text
        x="14"
        y="24"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="5.5"
        fill="#1a1a1a"
      >
        {data.nameJa}
      </text>
      <text
        x="14"
        y="30"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.15"
        fill="#006B3F"
      >
        {data.nameEn}
      </text>
      <text
        x="14"
        y="35"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="#999999"
      >
        {data.titleJa}
      </text>
      <text
        x="14"
        y="42"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#666666"
      >
        {data.tel} | {data.email}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#006B3F" />
      {/* White corner brackets - all four corners */}
      <line x1="6" y1="6" x2="6" y2="16" stroke="#ffffff" strokeWidth="0.6" />
      <line x1="6" y1="6" x2="19" y2="6" stroke="#ffffff" strokeWidth="0.6" />
      <line x1="85" y1="6" x2="85" y2="16" stroke="#ffffff" strokeWidth="0.6" />
      <line x1="85" y1="6" x2="72" y2="6" stroke="#ffffff" strokeWidth="0.6" />
      <line x1="6" y1="49" x2="6" y2="39" stroke="#ffffff" strokeWidth="0.6" />
      <line x1="6" y1="49" x2="19" y2="49" stroke="#ffffff" strokeWidth="0.6" />
      <line x1="85" y1="49" x2="85" y2="39" stroke="#ffffff" strokeWidth="0.6" />
      <line x1="85" y1="49" x2="72" y2="49" stroke="#ffffff" strokeWidth="0.6" />
      <text
        x="45.5"
        y="23"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="4"
        letterSpacing="0.6"
        fill="#ffffff"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="29"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="rgba(255,255,255,0.7)"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="37"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="rgba(255,255,255,0.5)"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
      <text
        x="45.5"
        y="41"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="rgba(255,255,255,0.5)"
      >
        {data.website}
      </text>
    </g>
  ),
};

// ============================================================
// 9. SPLIT (断) — Aaron Siskind
// Diagonal split two-tone background
// ============================================================
const splitTemplate: TemplateDefinition = {
  id: 'split',
  name: 'SPLIT',
  nameJa: '断',
  category: 'geometric',
  designer: 'Aaron Siskind',
  description: '対角線が空間を二分する。緊張と調和の共存。',
  accentColor: '#D4380D',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1C1C1C" />
      {/* Diagonal split - white triangle */}
      <polygon points="0,0 91,0 91,55" fill="#ffffff" />
      {/* Accent diagonal line */}
      <line x1="0" y1="0" x2="91" y2="55" stroke="#D4380D" strokeWidth="0.6" />
      {/* Name on lighter side (top-right) */}
      <text
        x="50"
        y="15"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="5.5"
        fill="#1C1C1C"
      >
        {data.nameJa}
      </text>
      <text
        x="50"
        y="21"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.15"
        fill="#D4380D"
      >
        {data.nameEn}
      </text>
      {/* Title on dark side */}
      <text
        x="8"
        y="38"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="rgba(255,255,255,0.8)"
      >
        {data.titleJa}
      </text>
      {/* Contact info on dark side */}
      <text
        x="8"
        y="44"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="rgba(255,255,255,0.6)"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="47.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="rgba(255,255,255,0.6)"
      >
        {data.email}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#D4380D" />
      {/* Reverse diagonal split */}
      <polygon points="0,55 91,0 91,55" fill="#1C1C1C" />
      <line x1="0" y1="55" x2="91" y2="0" stroke="#ffffff" strokeWidth="0.3" opacity="0.3" />
      <text
        x="30"
        y="18"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="5"
        letterSpacing="0.4"
        fill="#ffffff"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <text
        x="55"
        y="42"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="rgba(255,255,255,0.6)"
      >
        {data.companyJa}
      </text>
    </g>
  ),
};

// ============================================================
// 10. MOSAIC (片) — Victor Vasarely
// Small square pattern accent strip
// ============================================================
const mosaicTemplate: TemplateDefinition = {
  id: 'mosaic',
  name: 'MOSAIC',
  nameJa: '片',
  category: 'geometric',
  designer: 'Victor Vasarely',
  description: '小さな四角形の集積がリズミカルなパターンを生む。',
  accentColor: '#2563EB',
  renderFront: (data: CardData) => {
    // Generate mosaic strip along the top
    const mosaicSquares: React.ReactNode[] = [];
    const colors = ['#2563EB', '#3B82F6', '#60A5FA', '#93C5FD', '#1D4ED8'];
    for (let col = 0; col < 26; col++) {
      const x = col * 3.5;
      const colorIndex = (col * 3 + 1) % colors.length;
      const opacity = 0.3 + (Math.abs(col - 13) / 13) * 0.7;
      mosaicSquares.push(
        <rect
          key={`mosaic-front-${col}`}
          x={x}
          y={0}
          width="3.5"
          height="3.5"
          fill={colors[colorIndex]}
          opacity={opacity}
        />
      );
    }
    // Second row partial
    for (let col = 0; col < 26; col++) {
      const x = col * 3.5;
      const colorIndex = (col * 7 + 2) % colors.length;
      const opacity = 0.15 + (Math.abs(col - 13) / 13) * 0.35;
      mosaicSquares.push(
        <rect
          key={`mosaic-front2-${col}`}
          x={x}
          y={3.5}
          width="3.5"
          height="3.5"
          fill={colors[colorIndex]}
          opacity={opacity}
        />
      );
    }

    return (
      <g>
        <rect width="91" height="55" fill="#ffffff" />
        {/* Mosaic strip at top */}
        {mosaicSquares}
        {/* Content below mosaic */}
        <text
          x="8"
          y="19"
          fontFamily="'Noto Sans JP', sans-serif"
          fontWeight="700"
          fontSize="5.5"
          fill="#1a1a1a"
        >
          {data.nameJa}
        </text>
        <text
          x="8"
          y="25"
          fontFamily="'Inter', sans-serif"
          fontWeight="400"
          fontSize="2"
          letterSpacing="0.15"
          fill="#2563EB"
        >
          {data.nameEn.toUpperCase()}
        </text>
        <text
          x="8"
          y="30"
          fontFamily="'Noto Sans JP', sans-serif"
          fontWeight="300"
          fontSize="1.8"
          fill="#888888"
        >
          {data.titleJa}
        </text>
        <line x1="8" y1="34" x2="50" y2="34" stroke="#2563EB" strokeWidth="0.2" />
        <text
          x="8"
          y="38.5"
          fontFamily="'Inter', sans-serif"
          fontWeight="400"
          fontSize="1.6"
          fill="#666666"
        >
          T. {data.tel}
        </text>
        <text
          x="8"
          y="42"
          fontFamily="'Inter', sans-serif"
          fontWeight="400"
          fontSize="1.6"
          fill="#666666"
        >
          {data.email}
        </text>
        <text
          x="8"
          y="45.5"
          fontFamily="'Inter', sans-serif"
          fontWeight="400"
          fontSize="1.6"
          fill="#666666"
        >
          {data.website}
        </text>
        <text
          x="8"
          y="50"
          fontFamily="'Noto Sans JP', sans-serif"
          fontWeight="300"
          fontSize="1.4"
          fill="#aaaaaa"
        >
          〒{data.zipCode} {data.addressJa}
        </text>
      </g>
    );
  },
  renderBack: (data: CardData) => {
    // Full mosaic pattern on back
    const mosaicSquares: React.ReactNode[] = [];
    const colors = ['#2563EB', '#3B82F6', '#60A5FA', '#93C5FD', '#1D4ED8', '#1E40AF'];
    for (let row = 0; row < 16; row++) {
      for (let col = 0; col < 26; col++) {
        const x = col * 3.5;
        const y = row * 3.5;
        const colorIndex = (row * 3 + col * 7) % colors.length;
        const opacity = 0.08 + ((row + col) % 5) * 0.04;
        mosaicSquares.push(
          <rect
            key={`mosaic-back-${row}-${col}`}
            x={x}
            y={y}
            width="3.4"
            height="3.4"
            fill={colors[colorIndex]}
            opacity={opacity}
          />
        );
      }
    }

    return (
      <g>
        <rect width="91" height="55" fill="#1E3A8A" />
        {/* Full mosaic pattern */}
        {mosaicSquares}
        {/* Company name centered */}
        <rect x="15" y="18" width="61" height="20" fill="#1E3A8A" opacity="0.85" rx="1" />
        <text
          x="45.5"
          y="28"
          textAnchor="middle"
          fontFamily="'Inter', sans-serif"
          fontWeight="700"
          fontSize="5"
          letterSpacing="0.5"
          fill="#ffffff"
        >
          {data.companyEn.toUpperCase()}
        </text>
        <text
          x="45.5"
          y="34"
          textAnchor="middle"
          fontFamily="'Noto Sans JP', sans-serif"
          fontWeight="400"
          fontSize="2.2"
          fill="rgba(255,255,255,0.7)"
        >
          {data.companyJa}
        </text>
      </g>
    );
  },
};

export const geometricTemplates: TemplateDefinition[] = [
  katachiTemplate,
  diamondTemplate,
  hexTemplate,
  gridGeoTemplate,
  blockTemplate,
  stripeTemplate,
  arcTemplate,
  cornerTemplate,
  splitTemplate,
  mosaicTemplate,
];
