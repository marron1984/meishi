import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. GATSBY (華) — Roaring Twenties glamour
// Bold gold on black with geometric fan motifs
// ============================================================
const gatsbyTemplate: TemplateDefinition = {
  id: 'deco-gatsby',
  name: 'GATSBY',
  nameJa: '華',
  category: 'deco',
  designer: 'Art Deco Studio',
  description: '華やかなる時代。金と黒の狂騒曲。',
  accentColor: '#C9A96E',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0A0A0A" />
      {/* Decorative gold border */}
      <rect x="3" y="3" width="85" height="49" fill="none" stroke="#C9A96E" strokeWidth="0.4" />
      <rect x="5" y="5" width="81" height="45" fill="none" stroke="#C9A96E" strokeWidth="0.15" />
      {/* Corner ornaments */}
      <line x1="3" y1="10" x2="10" y2="3" stroke="#C9A96E" strokeWidth="0.2" />
      <line x1="81" y1="3" x2="88" y2="10" stroke="#C9A96E" strokeWidth="0.2" />
      <line x1="3" y1="45" x2="10" y2="52" stroke="#C9A96E" strokeWidth="0.2" />
      <line x1="81" y1="52" x2="88" y2="45" stroke="#C9A96E" strokeWidth="0.2" />
      {/* Fan motif top center */}
      <defs>
        <clipPath id="deco-gatsby-fan">
          <rect x="30" y="3" width="31" height="12" />
        </clipPath>
      </defs>
      <g clipPath="url(#deco-gatsby-fan)" opacity="0.3">
        <line x1="45.5" y1="15" x2="35" y2="3" stroke="#C9A96E" strokeWidth="0.15" />
        <line x1="45.5" y1="15" x2="38" y2="3" stroke="#C9A96E" strokeWidth="0.15" />
        <line x1="45.5" y1="15" x2="41" y2="3" stroke="#C9A96E" strokeWidth="0.15" />
        <line x1="45.5" y1="15" x2="44" y2="3" stroke="#C9A96E" strokeWidth="0.15" />
        <line x1="45.5" y1="15" x2="47" y2="3" stroke="#C9A96E" strokeWidth="0.15" />
        <line x1="45.5" y1="15" x2="50" y2="3" stroke="#C9A96E" strokeWidth="0.15" />
        <line x1="45.5" y1="15" x2="53" y2="3" stroke="#C9A96E" strokeWidth="0.15" />
        <line x1="45.5" y1="15" x2="56" y2="3" stroke="#C9A96E" strokeWidth="0.15" />
        <circle cx="45.5" cy="15" r="12" fill="none" stroke="#C9A96E" strokeWidth="0.15" />
        <circle cx="45.5" cy="15" r="10" fill="none" stroke="#C9A96E" strokeWidth="0.1" />
      </g>
      <text
        x="45.5"
        y="25"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="1.5"
        fill="#C9A96E"
      >
        {data.nameJa}
      </text>
      <line x1="20" y1="29" x2="71" y2="29" stroke="#C9A96E" strokeWidth="0.2" />
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="500"
        fontSize="2.5"
        letterSpacing="2"
        fill="#C9A96E"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="42"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#8A7A5A"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0A0A0A" />
      <rect x="3" y="3" width="85" height="49" fill="none" stroke="#C9A96E" strokeWidth="0.4" />
      <rect x="5" y="5" width="81" height="45" fill="none" stroke="#C9A96E" strokeWidth="0.15" />
      <line x1="3" y1="10" x2="10" y2="3" stroke="#C9A96E" strokeWidth="0.2" />
      <line x1="81" y1="3" x2="88" y2="10" stroke="#C9A96E" strokeWidth="0.2" />
      <line x1="3" y1="45" x2="10" y2="52" stroke="#C9A96E" strokeWidth="0.2" />
      <line x1="81" y1="52" x2="88" y2="45" stroke="#C9A96E" strokeWidth="0.2" />
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.8"
        letterSpacing="0.8"
        fill="#C9A96E"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="18.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        letterSpacing="1"
        fill="#8A7A5A"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <line x1="15" y1="22" x2="76" y2="22" stroke="#C9A96E" strokeWidth="0.15" />
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#C9A96E"
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
        fill="#C9A96E"
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
        fill="#C9A96E"
      >
        {data.website}
      </text>
      <line x1="15" y1="39" x2="76" y2="39" stroke="#C9A96E" strokeWidth="0.15" />
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#8A7A5A"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 2. CHRYSLER (尖) — Chrysler Building inspired
// Stepped triangular crown motif, silver and chrome
// ============================================================
const chryslerTemplate: TemplateDefinition = {
  id: 'deco-chrysler',
  name: 'CHRYSLER',
  nameJa: '尖',
  category: 'deco',
  designer: 'Art Deco Studio',
  description: '尖塔の輝き。クライスラービルの冠を戴く。',
  accentColor: '#C0C0C0',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1A1A2E" />
      {/* Chrysler crown motif */}
      <defs>
        <clipPath id="deco-chrysler-crown">
          <rect width="91" height="55" />
        </clipPath>
      </defs>
      <g clipPath="url(#deco-chrysler-crown)" opacity="0.2">
        {/* Stepped triangle */}
        <polygon points="45.5,0 55,12 50,12 50,8 45.5,5 41,8 41,12 36,12" fill="none" stroke="#C0C0C0" strokeWidth="0.3" />
        <line x1="45.5" y1="0" x2="45.5" y2="12" stroke="#C0C0C0" strokeWidth="0.15" />
        {/* Arched sunbeams */}
        <line x1="45.5" y1="12" x2="30" y2="0" stroke="#C0C0C0" strokeWidth="0.1" />
        <line x1="45.5" y1="12" x2="35" y2="0" stroke="#C0C0C0" strokeWidth="0.1" />
        <line x1="45.5" y1="12" x2="40" y2="0" stroke="#C0C0C0" strokeWidth="0.1" />
        <line x1="45.5" y1="12" x2="51" y2="0" stroke="#C0C0C0" strokeWidth="0.1" />
        <line x1="45.5" y1="12" x2="56" y2="0" stroke="#C0C0C0" strokeWidth="0.1" />
        <line x1="45.5" y1="12" x2="61" y2="0" stroke="#C0C0C0" strokeWidth="0.1" />
      </g>
      {/* Stepped border bottom */}
      <path d="M5,48 L5,45 L8,45 L8,43 L11,43 L11,41 L80,41 L80,43 L83,43 L83,45 L86,45 L86,48" fill="none" stroke="#C0C0C0" strokeWidth="0.2" opacity="0.3" />
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="6"
        letterSpacing="1"
        fill="#E8E8E8"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="500"
        fontSize="2.2"
        letterSpacing="1.5"
        fill="#C0C0C0"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="38"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#808090"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1A1A2E" />
      <path d="M5,7 L5,10 L8,10 L8,12 L11,12 L11,14 L80,14 L80,12 L83,12 L83,10 L86,10 L86,7" fill="none" stroke="#C0C0C0" strokeWidth="0.2" opacity="0.3" />
      <text
        x="45.5"
        y="11"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        letterSpacing="0.8"
        fill="#E8E8E8"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="20"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        letterSpacing="0.8"
        fill="#C0C0C0"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <line x1="20" y1="23" x2="71" y2="23" stroke="#C0C0C0" strokeWidth="0.1" opacity="0.4" />
      <text
        x="45.5"
        y="29"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#A0A0B0"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="33"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#A0A0B0"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="37"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#A0A0B0"
      >
        {data.website}
      </text>
      <line x1="20" y1="40" x2="71" y2="40" stroke="#C0C0C0" strokeWidth="0.1" opacity="0.4" />
      <text
        x="45.5"
        y="46"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#808090"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 3. METROPOLIS (都) — Film Metropolis inspired
// Towering vertical lines, dramatic perspective
// ============================================================
const metropolisTemplate: TemplateDefinition = {
  id: 'deco-metropolis',
  name: 'METROPOLIS',
  nameJa: '都',
  category: 'deco',
  designer: 'Art Deco Studio',
  description: '大都市の威容。摩天楼が空を突き刺す。',
  accentColor: '#C9A96E',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0D0D0D" />
      {/* Vertical building silhouettes */}
      <g opacity="0.15">
        <rect x="3" y="15" width="4" height="40" fill="#C9A96E" />
        <rect x="4" y="12" width="2" height="3" fill="#C9A96E" />
        <rect x="9" y="20" width="3" height="35" fill="#C9A96E" />
        <rect x="14" y="10" width="5" height="45" fill="#C9A96E" />
        <rect x="15.5" y="6" width="2" height="4" fill="#C9A96E" />
        <rect x="21" y="25" width="3" height="30" fill="#C9A96E" />
        <rect x="76" y="18" width="4" height="37" fill="#C9A96E" />
        <rect x="82" y="22" width="3" height="33" fill="#C9A96E" />
        <rect x="87" y="15" width="4" height="40" fill="#C9A96E" />
        <rect x="88" y="10" width="2" height="5" fill="#C9A96E" />
      </g>
      {/* Perspective lines converging */}
      <g opacity="0.08">
        <line x1="45.5" y1="10" x2="0" y2="55" stroke="#C9A96E" strokeWidth="0.15" />
        <line x1="45.5" y1="10" x2="91" y2="55" stroke="#C9A96E" strokeWidth="0.15" />
        <line x1="45.5" y1="10" x2="0" y2="40" stroke="#C9A96E" strokeWidth="0.1" />
        <line x1="45.5" y1="10" x2="91" y2="40" stroke="#C9A96E" strokeWidth="0.1" />
      </g>
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="1"
        fill="#FFFFFF"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="34"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="500"
        fontSize="2.2"
        letterSpacing="1.5"
        fill="#C9A96E"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="42"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#8A7A5A"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0D0D0D" />
      <g opacity="0.1">
        <rect x="3" y="0" width="4" height="15" fill="#C9A96E" />
        <rect x="9" y="0" width="3" height="10" fill="#C9A96E" />
        <rect x="82" y="0" width="3" height="12" fill="#C9A96E" />
        <rect x="87" y="0" width="4" height="18" fill="#C9A96E" />
      </g>
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.8"
        letterSpacing="0.5"
        fill="#FFFFFF"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="18.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        letterSpacing="0.8"
        fill="#C9A96E"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <line x1="15" y1="22" x2="76" y2="22" stroke="#C9A96E" strokeWidth="0.15" opacity="0.4" />
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#C9A96E"
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
        fill="#C9A96E"
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
        fill="#C9A96E"
      >
        {data.website}
      </text>
      <line x1="15" y1="39" x2="76" y2="39" stroke="#C9A96E" strokeWidth="0.15" opacity="0.4" />
      <text
        x="45.5"
        y="45"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#8A7A5A"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 4. FLAPPER (踊) — Dance-era elegance
// Flowing curves with emerald and gold, feminine deco
// ============================================================
const flapperTemplate: TemplateDefinition = {
  id: 'deco-flapper',
  name: 'FLAPPER',
  nameJa: '踊',
  category: 'deco',
  designer: 'Art Deco Studio',
  description: '踊る時代。エメラルドと金のフラッパーの夜。',
  accentColor: '#046A38',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FDF5E6" />
      {/* Emerald geometric accents */}
      <rect x="0" y="0" width="91" height="1" fill="#046A38" opacity="0.5" />
      <rect x="0" y="2" width="91" height="0.3" fill="#C9A96E" opacity="0.4" />
      <rect x="0" y="52.7" width="91" height="0.3" fill="#C9A96E" opacity="0.4" />
      <rect x="0" y="54" width="91" height="1" fill="#046A38" opacity="0.5" />
      {/* Curved deco ornament left */}
      <path d="M8,15 Q4,27.5 8,40" fill="none" stroke="#046A38" strokeWidth="0.3" opacity="0.3" />
      <path d="M10,17 Q7,27.5 10,38" fill="none" stroke="#C9A96E" strokeWidth="0.15" opacity="0.3" />
      <circle cx="8" cy="14" r="0.8" fill="#046A38" opacity="0.3" />
      <circle cx="8" cy="41" r="0.8" fill="#046A38" opacity="0.3" />
      <text
        x="45.5"
        y="23"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="1"
        fill="#1A1A1A"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="500"
        fontSize="2"
        letterSpacing="1"
        fontStyle="italic"
        fill="#046A38"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="38"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#8A8A6A"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FDF5E6" />
      <rect x="0" y="0" width="91" height="1" fill="#046A38" opacity="0.5" />
      <rect x="0" y="2" width="91" height="0.3" fill="#C9A96E" opacity="0.4" />
      <rect x="0" y="52.7" width="91" height="0.3" fill="#C9A96E" opacity="0.4" />
      <rect x="0" y="54" width="91" height="1" fill="#046A38" opacity="0.5" />
      <text
        x="45.5"
        y="13"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#1A1A1A"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="17.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        letterSpacing="0.5"
        fontStyle="italic"
        fill="#046A38"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <line x1="20" y1="21" x2="71" y2="21" stroke="#C9A96E" strokeWidth="0.2" opacity="0.4" />
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#555555"
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
        fill="#555555"
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
        fill="#555555"
      >
        {data.website}
      </text>
      <line x1="20" y1="38.5" x2="71" y2="38.5" stroke="#C9A96E" strokeWidth="0.2" opacity="0.4" />
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#8A8A6A"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 5. DECO-GOLD (箔) — Pure gold leaf on cream
// Rich gold foil effect with geometric patterns
// ============================================================
const decoGoldTemplate: TemplateDefinition = {
  id: 'deco-gold',
  name: 'DECO-GOLD',
  nameJa: '箔',
  category: 'deco',
  designer: 'Art Deco Studio',
  description: '金箔の輝き。黄金の幾何学模様が踊る。',
  accentColor: '#C9A96E',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FDF5E6" />
      <defs>
        <pattern id="deco-gold-pattern" width="8" height="8" patternUnits="userSpaceOnUse">
          <rect width="8" height="8" fill="none" />
          <rect x="0" y="0" width="4" height="4" fill="none" stroke="#C9A96E" strokeWidth="0.1" opacity="0.15" />
          <rect x="4" y="4" width="4" height="4" fill="none" stroke="#C9A96E" strokeWidth="0.1" opacity="0.15" />
          <line x1="0" y1="0" x2="4" y2="4" stroke="#C9A96E" strokeWidth="0.05" opacity="0.1" />
          <line x1="4" y1="4" x2="8" y2="8" stroke="#C9A96E" strokeWidth="0.05" opacity="0.1" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#deco-gold-pattern)" />
      {/* Gold frame */}
      <rect x="8" y="8" width="75" height="39" fill="none" stroke="#C9A96E" strokeWidth="0.6" />
      <rect x="10" y="10" width="71" height="35" fill="#FDF5E6" stroke="#C9A96E" strokeWidth="0.15" />
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="1"
        fill="#8A6F3A"
      >
        {data.nameJa}
      </text>
      <line x1="22" y1="28" x2="69" y2="28" stroke="#C9A96E" strokeWidth="0.3" />
      <text
        x="45.5"
        y="34"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="600"
        fontSize="2.2"
        letterSpacing="1.5"
        fill="#C9A96E"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="41"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#A09060"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FDF5E6" />
      <defs>
        <pattern id="deco-gold-pattern-b" width="8" height="8" patternUnits="userSpaceOnUse">
          <rect width="8" height="8" fill="none" />
          <rect x="0" y="0" width="4" height="4" fill="none" stroke="#C9A96E" strokeWidth="0.1" opacity="0.15" />
          <rect x="4" y="4" width="4" height="4" fill="none" stroke="#C9A96E" strokeWidth="0.1" opacity="0.15" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#deco-gold-pattern-b)" />
      <rect x="8" y="8" width="75" height="39" fill="none" stroke="#C9A96E" strokeWidth="0.6" />
      <rect x="10" y="10" width="71" height="35" fill="#FDF5E6" stroke="#C9A96E" strokeWidth="0.15" />
      <text
        x="45.5"
        y="17"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        fill="#8A6F3A"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="21.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        letterSpacing="0.5"
        fill="#C9A96E"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <line x1="20" y1="24.5" x2="71" y2="24.5" stroke="#C9A96E" strokeWidth="0.2" />
      <text
        x="45.5"
        y="29"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#8A6F3A"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="32.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#8A6F3A"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#8A6F3A"
      >
        {data.website}
      </text>
      <line x1="20" y1="38.5" x2="71" y2="38.5" stroke="#C9A96E" strokeWidth="0.2" />
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.1"
        fill="#A09060"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 6. SUNBURST (旭) — Radiating sunburst rays
// Dramatic rays emanating from a central point
// ============================================================
const sunburstTemplate: TemplateDefinition = {
  id: 'deco-sunburst',
  name: 'SUNBURST',
  nameJa: '旭',
  category: 'deco',
  designer: 'Art Deco Studio',
  description: '旭日の光芒。中心から放射される力強い光線。',
  accentColor: '#C9A96E',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1A0A0A" />
      <defs>
        <clipPath id="deco-sunburst-clip">
          <rect width="91" height="55" />
        </clipPath>
      </defs>
      <g clipPath="url(#deco-sunburst-clip)" opacity="0.15">
        {/* Sunburst rays from bottom center */}
        <line x1="45.5" y1="55" x2="0" y2="0" stroke="#C9A96E" strokeWidth="0.3" />
        <line x1="45.5" y1="55" x2="10" y2="0" stroke="#C9A96E" strokeWidth="0.3" />
        <line x1="45.5" y1="55" x2="20" y2="0" stroke="#C9A96E" strokeWidth="0.3" />
        <line x1="45.5" y1="55" x2="30" y2="0" stroke="#C9A96E" strokeWidth="0.3" />
        <line x1="45.5" y1="55" x2="40" y2="0" stroke="#C9A96E" strokeWidth="0.3" />
        <line x1="45.5" y1="55" x2="51" y2="0" stroke="#C9A96E" strokeWidth="0.3" />
        <line x1="45.5" y1="55" x2="61" y2="0" stroke="#C9A96E" strokeWidth="0.3" />
        <line x1="45.5" y1="55" x2="71" y2="0" stroke="#C9A96E" strokeWidth="0.3" />
        <line x1="45.5" y1="55" x2="81" y2="0" stroke="#C9A96E" strokeWidth="0.3" />
        <line x1="45.5" y1="55" x2="91" y2="0" stroke="#C9A96E" strokeWidth="0.3" />
        <line x1="45.5" y1="55" x2="0" y2="20" stroke="#C9A96E" strokeWidth="0.2" />
        <line x1="45.5" y1="55" x2="91" y2="20" stroke="#C9A96E" strokeWidth="0.2" />
      </g>
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6.5"
        letterSpacing="1"
        fill="#C9A96E"
      >
        {data.nameJa}
      </text>
      <line x1="20" y1="26" x2="71" y2="26" stroke="#C9A96E" strokeWidth="0.2" />
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="500"
        fontSize="2.2"
        letterSpacing="1.5"
        fill="#E8D8B8"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="40"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#8A7A5A"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1A0A0A" />
      <defs>
        <clipPath id="deco-sunburst-clip-b">
          <rect width="91" height="55" />
        </clipPath>
      </defs>
      <g clipPath="url(#deco-sunburst-clip-b)" opacity="0.08">
        <line x1="45.5" y1="0" x2="0" y2="55" stroke="#C9A96E" strokeWidth="0.2" />
        <line x1="45.5" y1="0" x2="20" y2="55" stroke="#C9A96E" strokeWidth="0.2" />
        <line x1="45.5" y1="0" x2="40" y2="55" stroke="#C9A96E" strokeWidth="0.2" />
        <line x1="45.5" y1="0" x2="51" y2="55" stroke="#C9A96E" strokeWidth="0.2" />
        <line x1="45.5" y1="0" x2="71" y2="55" stroke="#C9A96E" strokeWidth="0.2" />
        <line x1="45.5" y1="0" x2="91" y2="55" stroke="#C9A96E" strokeWidth="0.2" />
      </g>
      <text
        x="45.5"
        y="13"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.8"
        fill="#C9A96E"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="18"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        letterSpacing="0.8"
        fill="#E8D8B8"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <line x1="15" y1="21.5" x2="76" y2="21.5" stroke="#C9A96E" strokeWidth="0.15" />
      <text
        x="45.5"
        y="27.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#C9A96E"
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
        fill="#C9A96E"
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
        fill="#C9A96E"
      >
        {data.website}
      </text>
      <line x1="15" y1="39" x2="76" y2="39" stroke="#C9A96E" strokeWidth="0.15" />
      <text
        x="45.5"
        y="45"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#8A7A5A"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 7. ZIGZAG (稲妻) — Zigzag chevron patterns
// Bold zigzag lines creating a dynamic border
// ============================================================
const zigzagTemplate: TemplateDefinition = {
  id: 'deco-zigzag',
  name: 'ZIGZAG',
  nameJa: '稲妻',
  category: 'deco',
  designer: 'Art Deco Studio',
  description: '稲妻の閃き。ジグザグが走る力強いリズム。',
  accentColor: '#C9A96E',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1A1A1A" />
      {/* Zigzag top border */}
      <path d="M0,3 L4,7 L8,3 L12,7 L16,3 L20,7 L24,3 L28,7 L32,3 L36,7 L40,3 L44,7 L48,3 L52,7 L56,3 L60,7 L64,3 L68,7 L72,3 L76,7 L80,3 L84,7 L88,3 L91,5.5" fill="none" stroke="#C9A96E" strokeWidth="0.4" opacity="0.6" />
      {/* Zigzag bottom border */}
      <path d="M0,49.5 L4,48 L8,52 L12,48 L16,52 L20,48 L24,52 L28,48 L32,52 L36,48 L40,52 L44,48 L48,52 L52,48 L56,52 L60,48 L64,52 L68,48 L72,52 L76,48 L80,52 L84,48 L88,52 L91,49.5" fill="none" stroke="#C9A96E" strokeWidth="0.4" opacity="0.6" />
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="6"
        letterSpacing="1"
        fill="#FFFFFF"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="500"
        fontSize="2.2"
        letterSpacing="1.5"
        fill="#C9A96E"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="40"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#8A8A6A"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1A1A1A" />
      <path d="M0,3 L4,7 L8,3 L12,7 L16,3 L20,7 L24,3 L28,7 L32,3 L36,7 L40,3 L44,7 L48,3 L52,7 L56,3 L60,7 L64,3 L68,7 L72,3 L76,7 L80,3 L84,7 L88,3 L91,5.5" fill="none" stroke="#C9A96E" strokeWidth="0.4" opacity="0.6" />
      <path d="M0,49.5 L4,48 L8,52 L12,48 L16,52 L20,48 L24,52 L28,48 L32,52 L36,48 L40,52 L44,48 L48,52 L52,48 L56,52 L60,48 L64,52 L68,48 L72,52 L76,48 L80,52 L84,48 L88,52 L91,49.5" fill="none" stroke="#C9A96E" strokeWidth="0.4" opacity="0.6" />
      <text
        x="45.5"
        y="15"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.8"
        fill="#FFFFFF"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="19.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        letterSpacing="0.8"
        fill="#C9A96E"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <line x1="20" y1="23" x2="71" y2="23" stroke="#C9A96E" strokeWidth="0.15" />
      <text
        x="45.5"
        y="28.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#C9A96E"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="32.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#C9A96E"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="36.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#C9A96E"
      >
        {data.website}
      </text>
      <line x1="20" y1="40" x2="71" y2="40" stroke="#C9A96E" strokeWidth="0.15" />
      <text
        x="45.5"
        y="45.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#8A8A6A"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 8. FAN (扇) — Decorative fan/shell motif
// Scalloped fan shapes in corners with burgundy tones
// ============================================================
const fanTemplate: TemplateDefinition = {
  id: 'deco-fan',
  name: 'FAN',
  nameJa: '扇',
  category: 'deco',
  designer: 'Art Deco Studio',
  description: '扇の優雅。貝殻のような扇形が彩る装飾美。',
  accentColor: '#800020',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FDF5E6" />
      {/* Fan motif top-left corner */}
      <defs>
        <clipPath id="deco-fan-tl">
          <rect x="0" y="0" width="20" height="20" />
        </clipPath>
        <clipPath id="deco-fan-br">
          <rect x="71" y="35" width="20" height="20" />
        </clipPath>
      </defs>
      <g clipPath="url(#deco-fan-tl)" opacity="0.2">
        <circle cx="0" cy="0" r="6" fill="none" stroke="#800020" strokeWidth="0.2" />
        <circle cx="0" cy="0" r="10" fill="none" stroke="#800020" strokeWidth="0.2" />
        <circle cx="0" cy="0" r="14" fill="none" stroke="#800020" strokeWidth="0.2" />
        <circle cx="0" cy="0" r="18" fill="none" stroke="#800020" strokeWidth="0.2" />
        <line x1="0" y1="0" x2="18" y2="6" stroke="#800020" strokeWidth="0.1" />
        <line x1="0" y1="0" x2="16" y2="10" stroke="#800020" strokeWidth="0.1" />
        <line x1="0" y1="0" x2="12" y2="14" stroke="#800020" strokeWidth="0.1" />
        <line x1="0" y1="0" x2="6" y2="18" stroke="#800020" strokeWidth="0.1" />
      </g>
      {/* Fan motif bottom-right corner */}
      <g clipPath="url(#deco-fan-br)" opacity="0.2">
        <circle cx="91" cy="55" r="6" fill="none" stroke="#800020" strokeWidth="0.2" />
        <circle cx="91" cy="55" r="10" fill="none" stroke="#800020" strokeWidth="0.2" />
        <circle cx="91" cy="55" r="14" fill="none" stroke="#800020" strokeWidth="0.2" />
        <circle cx="91" cy="55" r="18" fill="none" stroke="#800020" strokeWidth="0.2" />
        <line x1="91" y1="55" x2="73" y2="49" stroke="#800020" strokeWidth="0.1" />
        <line x1="91" y1="55" x2="75" y2="45" stroke="#800020" strokeWidth="0.1" />
        <line x1="91" y1="55" x2="79" y2="41" stroke="#800020" strokeWidth="0.1" />
        <line x1="91" y1="55" x2="85" y2="37" stroke="#800020" strokeWidth="0.1" />
      </g>
      <text
        x="45.5"
        y="23"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="1"
        fill="#800020"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="500"
        fontSize="2"
        letterSpacing="1"
        fontStyle="italic"
        fill="#C9A96E"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="38"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#A06070"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FDF5E6" />
      <defs>
        <clipPath id="deco-fan-tl-b">
          <rect x="0" y="0" width="15" height="15" />
        </clipPath>
        <clipPath id="deco-fan-br-b">
          <rect x="76" y="40" width="15" height="15" />
        </clipPath>
      </defs>
      <g clipPath="url(#deco-fan-tl-b)" opacity="0.15">
        <circle cx="0" cy="0" r="5" fill="none" stroke="#800020" strokeWidth="0.2" />
        <circle cx="0" cy="0" r="9" fill="none" stroke="#800020" strokeWidth="0.2" />
        <circle cx="0" cy="0" r="13" fill="none" stroke="#800020" strokeWidth="0.2" />
      </g>
      <g clipPath="url(#deco-fan-br-b)" opacity="0.15">
        <circle cx="91" cy="55" r="5" fill="none" stroke="#800020" strokeWidth="0.2" />
        <circle cx="91" cy="55" r="9" fill="none" stroke="#800020" strokeWidth="0.2" />
        <circle cx="91" cy="55" r="13" fill="none" stroke="#800020" strokeWidth="0.2" />
      </g>
      <text
        x="45.5"
        y="13"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#800020"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="17.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fontStyle="italic"
        fill="#C9A96E"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <line x1="20" y1="21" x2="71" y2="21" stroke="#C9A96E" strokeWidth="0.15" />
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8A5060"
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
        fill="#8A5060"
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
        fill="#8A5060"
      >
        {data.website}
      </text>
      <line x1="20" y1="38.5" x2="71" y2="38.5" stroke="#C9A96E" strokeWidth="0.15" />
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#A07080"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 9. EMPIRE (帝) — Empire State inspired grandeur
// Stepped pyramid forms, strong vertical emphasis
// ============================================================
const empireTemplate: TemplateDefinition = {
  id: 'deco-empire',
  name: 'EMPIRE',
  nameJa: '帝',
  category: 'deco',
  designer: 'Art Deco Studio',
  description: '帝国の威光。ピラミッドのように積み上がる力。',
  accentColor: '#C9A96E',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0A0A12" />
      {/* Stepped pyramid at top center */}
      <g opacity="0.25">
        <rect x="35" y="0" width="21" height="3" fill="#C9A96E" />
        <rect x="38" y="3" width="15" height="2.5" fill="#C9A96E" />
        <rect x="41" y="5.5" width="9" height="2" fill="#C9A96E" />
        <rect x="43.5" y="7.5" width="4" height="1.5" fill="#C9A96E" />
        <line x1="45.5" y1="9" x2="45.5" y2="14" stroke="#C9A96E" strokeWidth="0.3" />
      </g>
      {/* Vertical lines flanking */}
      <line x1="10" y1="5" x2="10" y2="50" stroke="#C9A96E" strokeWidth="0.15" opacity="0.15" />
      <line x1="81" y1="5" x2="81" y2="50" stroke="#C9A96E" strokeWidth="0.15" opacity="0.15" />
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6.5"
        letterSpacing="1.5"
        fill="#C9A96E"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="33"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="600"
        fontSize="2.2"
        letterSpacing="2"
        fill="#E8D8B8"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="41"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#8A7A5A"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0A0A12" />
      <g opacity="0.15">
        <rect x="35" y="52" width="21" height="3" fill="#C9A96E" />
        <rect x="38" y="49.5" width="15" height="2.5" fill="#C9A96E" />
        <rect x="41" y="47.5" width="9" height="2" fill="#C9A96E" />
        <rect x="43.5" y="46" width="4" height="1.5" fill="#C9A96E" />
      </g>
      <line x1="10" y1="5" x2="10" y2="50" stroke="#C9A96E" strokeWidth="0.15" opacity="0.15" />
      <line x1="81" y1="5" x2="81" y2="50" stroke="#C9A96E" strokeWidth="0.15" opacity="0.15" />
      <text
        x="45.5"
        y="12"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.8"
        letterSpacing="0.5"
        fill="#C9A96E"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="17"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        letterSpacing="1"
        fill="#E8D8B8"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <line x1="18" y1="20.5" x2="73" y2="20.5" stroke="#C9A96E" strokeWidth="0.15" />
      <text
        x="45.5"
        y="26.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#C9A96E"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="30.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#C9A96E"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="34.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#C9A96E"
      >
        {data.website}
      </text>
      <line x1="18" y1="38" x2="73" y2="38" stroke="#C9A96E" strokeWidth="0.15" />
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#8A7A5A"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 10. JAZZ (韻) — Jazz Age rhythm and movement
// Dynamic diagonal lines suggesting musical rhythm
// ============================================================
const jazzTemplate: TemplateDefinition = {
  id: 'deco-jazz',
  name: 'JAZZ',
  nameJa: '韻',
  category: 'deco',
  designer: 'Art Deco Studio',
  description: 'ジャズの韻律。斜線が奏でるスウィングのリズム。',
  accentColor: '#046A38',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0D0D0D" />
      {/* Jazz rhythm diagonal stripes */}
      <g opacity="0.12">
        <line x1="0" y1="55" x2="15" y2="0" stroke="#C9A96E" strokeWidth="1.5" />
        <line x1="8" y1="55" x2="23" y2="0" stroke="#046A38" strokeWidth="0.8" />
        <line x1="14" y1="55" x2="29" y2="0" stroke="#C9A96E" strokeWidth="0.4" />
        <line x1="62" y1="55" x2="77" y2="0" stroke="#C9A96E" strokeWidth="0.4" />
        <line x1="68" y1="55" x2="83" y2="0" stroke="#046A38" strokeWidth="0.8" />
        <line x1="76" y1="55" x2="91" y2="0" stroke="#C9A96E" strokeWidth="1.5" />
      </g>
      <text
        x="45.5"
        y="23"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="1"
        fill="#C9A96E"
      >
        {data.nameJa}
      </text>
      <line x1="22" y1="27" x2="69" y2="27" stroke="#046A38" strokeWidth="0.3" />
      <text
        x="45.5"
        y="34"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="500"
        fontSize="2.2"
        letterSpacing="1.5"
        fill="#046A38"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="42"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#8A8A6A"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0D0D0D" />
      <g opacity="0.08">
        <line x1="0" y1="55" x2="15" y2="0" stroke="#C9A96E" strokeWidth="1" />
        <line x1="6" y1="55" x2="21" y2="0" stroke="#046A38" strokeWidth="0.5" />
        <line x1="76" y1="55" x2="91" y2="0" stroke="#C9A96E" strokeWidth="1" />
        <line x1="70" y1="55" x2="85" y2="0" stroke="#046A38" strokeWidth="0.5" />
      </g>
      <text
        x="45.5"
        y="13"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.8"
        fill="#C9A96E"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="17.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        letterSpacing="0.8"
        fill="#046A38"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <line x1="20" y1="21" x2="71" y2="21" stroke="#C9A96E" strokeWidth="0.15" />
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#C9A96E"
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
        fill="#C9A96E"
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
        fill="#C9A96E"
      >
        {data.website}
      </text>
      <line x1="20" y1="38.5" x2="71" y2="38.5" stroke="#C9A96E" strokeWidth="0.15" />
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#8A8A6A"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

export const decoTemplates: TemplateDefinition[] = [
  gatsbyTemplate,
  chryslerTemplate,
  metropolisTemplate,
  flapperTemplate,
  decoGoldTemplate,
  sunburstTemplate,
  zigzagTemplate,
  fanTemplate,
  empireTemplate,
  jazzTemplate,
];
