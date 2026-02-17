import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. PRIMARY (三原) — Primary colors: red, blue, yellow
// Bold primary color blocks, Mondrian-esque composition
// ============================================================
const primaryTemplate: TemplateDefinition = {
  id: 'color-primary',
  name: 'PRIMARY',
  nameJa: '三原',
  category: 'color',
  designer: 'Color Theorist',
  description: '三原色の力。赤・青・黄が生む根源的なエネルギー。',
  accentColor: '#DD0000',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFFFF" />
      {/* Primary color blocks */}
      <rect x="0" y="0" width="25" height="18" fill="#DD0000" />
      <rect x="66" y="37" width="25" height="18" fill="#0044CC" />
      <rect x="0" y="37" width="15" height="18" fill="#FFCC00" />
      {/* Black grid lines (Mondrian style) */}
      <line x1="25" y1="0" x2="25" y2="55" stroke="#1A1A1A" strokeWidth="0.5" />
      <line x1="66" y1="0" x2="66" y2="55" stroke="#1A1A1A" strokeWidth="0.5" />
      <line x1="0" y1="18" x2="91" y2="18" stroke="#1A1A1A" strokeWidth="0.5" />
      <line x1="0" y1="37" x2="91" y2="37" stroke="#1A1A1A" strokeWidth="0.5" />
      <line x1="15" y1="37" x2="15" y2="55" stroke="#1A1A1A" strokeWidth="0.5" />
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="5"
        letterSpacing="0.5"
        fill="#1A1A1A"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="31.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#333333"
      >
        {data.nameEn}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFFFF" />
      {/* Smaller color accents */}
      <rect x="0" y="0" width="8" height="8" fill="#DD0000" />
      <rect x="83" y="47" width="8" height="8" fill="#0044CC" />
      <rect x="0" y="47" width="8" height="8" fill="#FFCC00" />
      <line x1="8" y1="0" x2="8" y2="55" stroke="#1A1A1A" strokeWidth="0.3" />
      <line x1="83" y1="0" x2="83" y2="55" stroke="#1A1A1A" strokeWidth="0.3" />
      <line x1="0" y1="8" x2="91" y2="8" stroke="#1A1A1A" strokeWidth="0.3" />
      <line x1="0" y1="47" x2="91" y2="47" stroke="#1A1A1A" strokeWidth="0.3" />
      <text
        x="45.5"
        y="16"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#1A1A1A"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="20"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#333333"
      >
        {data.companyEn}
      </text>
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#333333"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#333333"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#333333"
      >
        {data.website}
      </text>
      <text
        x="45.5"
        y="42"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#666666"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 2. CMYK (印刷) — Print color model, halftone dots
// Cyan, Magenta, Yellow, Key overlapping circles
// ============================================================
const cmykTemplate: TemplateDefinition = {
  id: 'color-cmyk',
  name: 'CMYK',
  nameJa: '印刷',
  category: 'color',
  designer: 'Print Master',
  description: '印刷の四色。CMYKが重なり合う色彩の錬金術。',
  accentColor: '#00AACC',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFFFF" />
      {/* CMYK overlapping circles */}
      <circle cx="68" cy="16" r="8" fill="#00AADD" opacity="0.25" />
      <circle cx="74" cy="16" r="8" fill="#DD0077" opacity="0.25" />
      <circle cx="71" cy="10" r="8" fill="#FFDD00" opacity="0.25" />
      {/* Registration marks */}
      <circle cx="5" cy="5" r="1.5" fill="none" stroke="#1A1A1A" strokeWidth="0.08" opacity="0.3" />
      <line x1="3.5" y1="5" x2="6.5" y2="5" stroke="#1A1A1A" strokeWidth="0.06" opacity="0.3" />
      <line x1="5" y1="3.5" x2="5" y2="6.5" stroke="#1A1A1A" strokeWidth="0.06" opacity="0.3" />
      <circle cx="86" cy="50" r="1.5" fill="none" stroke="#1A1A1A" strokeWidth="0.08" opacity="0.3" />
      <line x1="84.5" y1="50" x2="87.5" y2="50" stroke="#1A1A1A" strokeWidth="0.06" opacity="0.3" />
      <line x1="86" y1="48.5" x2="86" y2="51.5" stroke="#1A1A1A" strokeWidth="0.06" opacity="0.3" />
      {/* Color bar at bottom */}
      <rect x="10" y="50" width="10" height="2" fill="#00AADD" opacity="0.6" />
      <rect x="20" y="50" width="10" height="2" fill="#DD0077" opacity="0.6" />
      <rect x="30" y="50" width="10" height="2" fill="#FFDD00" opacity="0.6" />
      <rect x="40" y="50" width="10" height="2" fill="#1A1A1A" opacity="0.6" />
      <text
        x="10"
        y="26"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#1A1A1A"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#333333"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="38"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#666666"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#666666"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFFFF" />
      {/* Small CMYK dots in corner */}
      <circle cx="80" cy="8" r="3" fill="#00AADD" opacity="0.15" />
      <circle cx="83" cy="8" r="3" fill="#DD0077" opacity="0.15" />
      <circle cx="81.5" cy="5.5" r="3" fill="#FFDD00" opacity="0.15" />
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#1A1A1A"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="18"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#333333"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="22" x2="71" y2="22" stroke="#CCCCCC" strokeWidth="0.1" />
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#333333"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#333333"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#333333"
      >
        {data.website}
      </text>
      <line x1="20" y1="40" x2="71" y2="40" stroke="#CCCCCC" strokeWidth="0.1" />
      <text
        x="45.5"
        y="45"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#666666"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 3. RGB (光) — Screen color model, light emission
// Red, green, blue additive light circles, dark background
// ============================================================
const rgbTemplate: TemplateDefinition = {
  id: 'color-rgb',
  name: 'RGB',
  nameJa: '光',
  category: 'color',
  designer: 'Light Artist',
  description: '光の三原色。RGBが混ざり合い白い光を生む。',
  accentColor: '#00CC66',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#111111" />
      {/* RGB additive circles */}
      <circle cx="65" cy="15" r="9" fill="#FF0000" opacity="0.3" />
      <circle cx="72" cy="15" r="9" fill="#00FF00" opacity="0.3" />
      <circle cx="68.5" cy="8" r="9" fill="#0000FF" opacity="0.3" />
      {/* White center where all overlap */}
      <circle cx="68.5" cy="13" r="2" fill="#FFFFFF" opacity="0.15" />
      <text
        x="10"
        y="24"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#FFFFFF"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="30"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#CCCCCC"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="37"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#888888"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#111111" />
      {/* Small RGB indicator dots */}
      <circle cx="40" cy="5" r="1" fill="#FF0000" opacity="0.4" />
      <circle cx="45.5" cy="5" r="1" fill="#00FF00" opacity="0.4" />
      <circle cx="51" cy="5" r="1" fill="#0000FF" opacity="0.4" />
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#FFFFFF"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="18"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#CCCCCC"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="22" x2="71" y2="22" stroke="#333333" strokeWidth="0.1" />
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#CCCCCC"
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
        fill="#CCCCCC"
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
        fill="#CCCCCC"
      >
        {data.website}
      </text>
      <line x1="20" y1="40" x2="71" y2="40" stroke="#333333" strokeWidth="0.1" />
      <text
        x="45.5"
        y="45"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#888888"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 4. WARM (暖) — Warm color palette, sunset tones
// Orange, red, yellow gradient feel, warm atmosphere
// ============================================================
const warmTemplate: TemplateDefinition = {
  id: 'color-warm',
  name: 'WARM',
  nameJa: '暖',
  category: 'color',
  designer: 'Warmth Designer',
  description: '暖色の包容力。夕焼けが染める温かな色彩。',
  accentColor: '#E85D2C',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="color-warm-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFE4B5" />
          <stop offset="30%" stopColor="#FFCC88" />
          <stop offset="60%" stopColor="#FFB060" />
          <stop offset="100%" stopColor="#FF8844" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#color-warm-grad)" />
      {/* Warm color swatches */}
      <rect x="70" y="5" width="6" height="6" fill="#FF4422" opacity="0.3" rx="0.5" />
      <rect x="77" y="5" width="6" height="6" fill="#FF7744" opacity="0.3" rx="0.5" />
      <rect x="70" y="12" width="6" height="6" fill="#FFAA33" opacity="0.3" rx="0.5" />
      <rect x="77" y="12" width="6" height="6" fill="#FFCC55" opacity="0.3" rx="0.5" />
      <text
        x="10"
        y="24"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#5A1A0A"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="30"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#7A3A1A"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="37"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#8A4A2A"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#8A4A2A"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="color-warm-grad-b" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFE4B5" />
          <stop offset="100%" stopColor="#FFB060" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#color-warm-grad-b)" />
      <text
        x="45.5"
        y="13"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#5A1A0A"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="17"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#7A3A1A"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="21" x2="71" y2="21" stroke="#8A4A2A" strokeWidth="0.1" opacity="0.25" />
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#7A3A1A"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#7A3A1A"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#7A3A1A"
      >
        {data.website}
      </text>
      <line x1="20" y1="39" x2="71" y2="39" stroke="#8A4A2A" strokeWidth="0.1" opacity="0.25" />
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#8A4A2A"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 5. COOL (冷) — Cool color palette, icy blue-green tones
// Blue, teal, violet, cool atmosphere
// ============================================================
const coolTemplate: TemplateDefinition = {
  id: 'color-cool',
  name: 'COOL',
  nameJa: '冷',
  category: 'color',
  designer: 'Cool Palette Designer',
  description: '冷色の静謐。氷と空が織りなす清涼な世界。',
  accentColor: '#2288AA',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="color-cool-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E8F4F8" />
          <stop offset="30%" stopColor="#C8E4F0" />
          <stop offset="60%" stopColor="#A8D4E8" />
          <stop offset="100%" stopColor="#88BBD8" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#color-cool-grad)" />
      {/* Cool color swatches */}
      <rect x="70" y="38" width="6" height="6" fill="#4488CC" opacity="0.3" rx="0.5" />
      <rect x="77" y="38" width="6" height="6" fill="#22AAAA" opacity="0.3" rx="0.5" />
      <rect x="70" y="45" width="6" height="6" fill="#6666BB" opacity="0.3" rx="0.5" />
      <rect x="77" y="45" width="6" height="6" fill="#44CCCC" opacity="0.3" rx="0.5" />
      <text
        x="10"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#1A3A5A"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="28"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#2A5A7A"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="35"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#3A6A8A"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="41"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#3A6A8A"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="color-cool-grad-b" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E8F4F8" />
          <stop offset="100%" stopColor="#A8D4E8" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#color-cool-grad-b)" />
      <text
        x="45.5"
        y="13"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#1A3A5A"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="17"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#2A5A7A"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="21" x2="71" y2="21" stroke="#2A5A7A" strokeWidth="0.1" opacity="0.25" />
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#2A5A7A"
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
        fill="#2A5A7A"
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
        fill="#2A5A7A"
      >
        {data.website}
      </text>
      <line x1="20" y1="39" x2="71" y2="39" stroke="#2A5A7A" strokeWidth="0.1" opacity="0.25" />
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#3A6A8A"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 6. COMPLEMENTARY (補) — Complementary color pairing
// Orange and blue split, complementary contrast
// ============================================================
const complementaryTemplate: TemplateDefinition = {
  id: 'color-complementary',
  name: 'COMPLEMENTARY',
  nameJa: '補',
  category: 'color',
  designer: 'Harmony Designer',
  description: '補色の対話。正反対の色が生む最高のコントラスト。',
  accentColor: '#E07020',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFFFF" />
      {/* Diagonal split: orange top-left, blue bottom-right */}
      <polygon points="0,0 91,0 0,55" fill="#E07020" opacity="0.12" />
      <polygon points="91,0 91,55 0,55" fill="#2070E0" opacity="0.12" />
      {/* Complementary accent circles */}
      <circle cx="15" cy="12" r="4" fill="#E07020" opacity="0.2" />
      <circle cx="76" cy="43" r="4" fill="#2070E0" opacity="0.2" />
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#2A2A2A"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#444444"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#666666"
      >
        {data.titleJa}
      </text>
      <text
        x="45.5"
        y="41"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#666666"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFFFF" />
      {/* Subtle complementary accents */}
      <rect x="0" y="0" width="3" height="55" fill="#E07020" opacity="0.15" />
      <rect x="88" y="0" width="3" height="55" fill="#2070E0" opacity="0.15" />
      <text
        x="45.5"
        y="13"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#2A2A2A"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="17"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#444444"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="21" x2="71" y2="21" stroke="#CCCCCC" strokeWidth="0.1" />
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#444444"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#444444"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#444444"
      >
        {data.website}
      </text>
      <line x1="20" y1="39" x2="71" y2="39" stroke="#CCCCCC" strokeWidth="0.1" />
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#666666"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 7. TRIAD (三色) — Triadic color harmony
// Three equally spaced hues: red, blue, yellow arranged in thirds
// ============================================================
const triadTemplate: TemplateDefinition = {
  id: 'color-triad',
  name: 'TRIAD',
  nameJa: '三色',
  category: 'color',
  designer: 'Triad Designer',
  description: '三色の調和。120度ずつ離れた色が織りなす均衡。',
  accentColor: '#DD3344',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FAFAFA" />
      {/* Three color triangles */}
      <polygon points="45.5,5 55,20 36,20" fill="#DD3344" opacity="0.15" />
      <polygon points="25,35 35,50 15,50" fill="#3344DD" opacity="0.15" />
      <polygon points="66,35 76,50 56,50" fill="#44DD33" opacity="0.15" />
      {/* Connecting lines forming larger triangle */}
      <line x1="45.5" y1="12" x2="25" y2="42" stroke="#AAAAAA" strokeWidth="0.06" opacity="0.2" />
      <line x1="25" y1="42" x2="66" y2="42" stroke="#AAAAAA" strokeWidth="0.06" opacity="0.2" />
      <line x1="66" y1="42" x2="45.5" y2="12" stroke="#AAAAAA" strokeWidth="0.06" opacity="0.2" />
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="5"
        letterSpacing="0.5"
        fill="#2A2A2A"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#444444"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="37"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#666666"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FAFAFA" />
      {/* Small triadic dots */}
      <circle cx="40" cy="5" r="1.2" fill="#DD3344" opacity="0.2" />
      <circle cx="45.5" cy="5" r="1.2" fill="#3344DD" opacity="0.2" />
      <circle cx="51" cy="5" r="1.2" fill="#44DD33" opacity="0.2" />
      <text
        x="45.5"
        y="13"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#2A2A2A"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="17"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#444444"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="21" x2="71" y2="21" stroke="#CCCCCC" strokeWidth="0.1" />
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#444444"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#444444"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#444444"
      >
        {data.website}
      </text>
      <line x1="20" y1="39" x2="71" y2="39" stroke="#CCCCCC" strokeWidth="0.1" />
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#666666"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 8. MUTED (渋) — Muted, desaturated tones
// Sophisticated grayed-down colors, understated elegance
// ============================================================
const mutedTemplate: TemplateDefinition = {
  id: 'color-muted',
  name: 'MUTED',
  nameJa: '渋',
  category: 'color',
  designer: 'Muted Palette Designer',
  description: '渋色の深み。彩度を落とした大人の色彩美学。',
  accentColor: '#8A7B6B',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#E8E4DE" />
      {/* Muted color blocks in a horizontal strip */}
      <rect x="8" y="6" width="11" height="4" fill="#9B8B7B" opacity="0.5" rx="0.3" />
      <rect x="21" y="6" width="11" height="4" fill="#7B8B8B" opacity="0.5" rx="0.3" />
      <rect x="34" y="6" width="11" height="4" fill="#8B7B7B" opacity="0.5" rx="0.3" />
      <rect x="47" y="6" width="11" height="4" fill="#7B8B7B" opacity="0.5" rx="0.3" />
      <rect x="60" y="6" width="11" height="4" fill="#8B8B7B" opacity="0.5" rx="0.3" />
      <rect x="73" y="6" width="11" height="4" fill="#7B7B8B" opacity="0.5" rx="0.3" />
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#4A4038"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#6A5A4A"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="37"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#8A7A6A"
      >
        {data.titleJa}
      </text>
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#8A7A6A"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#E8E4DE" />
      {/* Small muted swatch */}
      <rect x="38" y="4" width="3" height="3" fill="#9B8B7B" opacity="0.4" rx="0.2" />
      <rect x="42" y="4" width="3" height="3" fill="#7B8B8B" opacity="0.4" rx="0.2" />
      <rect x="46" y="4" width="3" height="3" fill="#8B7B7B" opacity="0.4" rx="0.2" />
      <rect x="50" y="4" width="3" height="3" fill="#7B8B7B" opacity="0.4" rx="0.2" />
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#4A4038"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="18"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#6A5A4A"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="22" x2="71" y2="22" stroke="#B0A898" strokeWidth="0.1" opacity="0.4" />
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#6A5A4A"
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
        fill="#6A5A4A"
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
        fill="#6A5A4A"
      >
        {data.website}
      </text>
      <line x1="20" y1="40" x2="71" y2="40" stroke="#B0A898" strokeWidth="0.1" opacity="0.4" />
      <text
        x="45.5"
        y="45"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#8A7A6A"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 9. VIVID (鮮) — Vivid, fully saturated, high chroma
// Bright electric colors, bold saturation, pop energy
// ============================================================
const vividTemplate: TemplateDefinition = {
  id: 'color-vivid',
  name: 'VIVID',
  nameJa: '鮮',
  category: 'color',
  designer: 'Vivid Designer',
  description: '鮮烈な彩度。目を射る純粋な色彩のエネルギー。',
  accentColor: '#FF0066',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFFFF" />
      {/* Vivid color explosion — overlapping circles */}
      <circle cx="20" cy="12" r="7" fill="#FF0066" opacity="0.15" />
      <circle cx="35" cy="8" r="5" fill="#00CCFF" opacity="0.15" />
      <circle cx="72" cy="42" r="8" fill="#FFCC00" opacity="0.15" />
      <circle cx="80" cy="48" r="5" fill="#00FF66" opacity="0.15" />
      <circle cx="60" cy="45" r="4" fill="#CC00FF" opacity="0.1" />
      {/* Vivid accent bar */}
      <rect x="0" y="0" width="91" height="1" fill="#FF0066" />
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="6"
        letterSpacing="0.5"
        fill="#1A1A1A"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="2"
        letterSpacing="0.3"
        fill="#FF0066"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="37"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#666666"
      >
        {data.titleJa}
      </text>
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#666666"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFFFF" />
      <rect x="0" y="54" width="91" height="1" fill="#FF0066" />
      {/* Small vivid circles */}
      <circle cx="10" cy="8" r="2" fill="#FF0066" opacity="0.1" />
      <circle cx="80" cy="8" r="2" fill="#00CCFF" opacity="0.1" />
      <text
        x="45.5"
        y="13"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="2.2"
        fill="#1A1A1A"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="17"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#FF0066"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="21" x2="71" y2="21" stroke="#FF0066" strokeWidth="0.1" opacity="0.2" />
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#333333"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#333333"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#333333"
      >
        {data.website}
      </text>
      <line x1="20" y1="39" x2="71" y2="39" stroke="#FF0066" strokeWidth="0.1" opacity="0.2" />
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#666666"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 10. EARTH (土色) — Earth tones, natural pigments
// Brown, ochre, olive, terra cotta, natural earth colors
// ============================================================
const earthTemplate: TemplateDefinition = {
  id: 'color-earth',
  name: 'EARTH',
  nameJa: '土色',
  category: 'color',
  designer: 'Earth Tone Artist',
  description: '大地の色彩。土・砂・石が紡ぐ自然のパレット。',
  accentColor: '#8B6B4A',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5EDE0" />
      {/* Earth color horizontal bands */}
      <rect x="0" y="0" width="91" height="3" fill="#C4956A" opacity="0.3" />
      <rect x="0" y="3" width="91" height="2" fill="#8B6B4A" opacity="0.25" />
      <rect x="0" y="5" width="91" height="2" fill="#6B7B50" opacity="0.2" />
      <rect x="0" y="7" width="91" height="1.5" fill="#A08860" opacity="0.15" />
      {/* Earth color swatch palette */}
      <circle cx="72" cy="40" r="2.5" fill="#CC6644" opacity="0.25" />
      <circle cx="78" cy="40" r="2.5" fill="#8B6B4A" opacity="0.25" />
      <circle cx="75" cy="45" r="2.5" fill="#6B7B50" opacity="0.25" />
      <circle cx="81" cy="45" r="2.5" fill="#C4956A" opacity="0.25" />
      <text
        x="10"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#4A3520"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="28"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#6B5040"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="35"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#8B7B60"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="41"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#8B7B60"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5EDE0" />
      {/* Earth tone top band */}
      <rect x="0" y="0" width="91" height="2" fill="#8B6B4A" opacity="0.2" />
      <rect x="0" y="2" width="91" height="1.5" fill="#6B7B50" opacity="0.15" />
      <text
        x="45.5"
        y="12"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#4A3520"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="16"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#6B5040"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="20" x2="71" y2="20" stroke="#C4B494" strokeWidth="0.1" opacity="0.4" />
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#6B5040"
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
        fill="#6B5040"
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
        fill="#6B5040"
      >
        {data.website}
      </text>
      <line x1="20" y1="38" x2="71" y2="38" stroke="#C4B494" strokeWidth="0.1" opacity="0.4" />
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#8B7B60"
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
        fill="#8B7B60"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

export const colorTemplates: TemplateDefinition[] = [
  primaryTemplate,
  cmykTemplate,
  rgbTemplate,
  warmTemplate,
  coolTemplate,
  complementaryTemplate,
  triadTemplate,
  mutedTemplate,
  vividTemplate,
  earthTemplate,
];
