import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. NEO (新) — Sagmeister & Walsh: Left side light, right panel gradient purple-to-pink
// ============================================================
const neoTemplate: TemplateDefinition = {
  id: 'neo',
  name: 'NEO',
  nameJa: '新',
  category: 'avantgarde',
  designer: 'Sagmeister & Walsh',
  description: '新しい感覚の二面性。光と色彩のグラデーションが共存する。',
  accentColor: '#6C2BD9',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="neo-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6C2BD9" />
          <stop offset="100%" stopColor="#FF6B9D" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#FAFAFA" />
      <rect x="50" y="0" width="41" height="55" fill="url(#neo-grad)" />
      {/* Decorative circle bleeding across the divide */}
      <circle cx="50" cy="27.5" r="8" fill="none" stroke="#6C2BD9" strokeWidth="0.2" opacity="0.3" />
      <text
        x="8"
        y="18"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="6"
        fill="#1a1a1a"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="24"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="2.2"
        letterSpacing="0.15"
        fill="#6C2BD9"
      >
        {data.nameEn}
      </text>
      <text
        x="8"
        y="30"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="#999999"
      >
        {data.titleJa}
      </text>
      <text
        x="8"
        y="40"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#777777"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="44"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#777777"
      >
        {data.email}
      </text>
      {/* Vertical name on the gradient panel */}
      <text
        x="70"
        y="45"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="700"
        fontSize="2.8"
        fill="rgba(255,255,255,0.85)"
        transform="rotate(-90, 70, 27.5)"
      >
        {data.nameEn.toUpperCase()}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="neo-grad-back" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6C2BD9" />
          <stop offset="50%" stopColor="#FF6B9D" />
          <stop offset="100%" stopColor="#FFC247" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#neo-grad-back)" />
      <circle cx="75" cy="12" r="18" fill="rgba(255,255,255,0.08)" />
      <circle cx="20" cy="45" r="12" fill="rgba(255,255,255,0.06)" />
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="700"
        fontSize="5"
        letterSpacing="0.5"
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
        fontSize="2.5"
        fill="rgba(255,255,255,0.7)"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="40"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="rgba(255,255,255,0.5)"
      >
        {data.website}
      </text>
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="rgba(255,255,255,0.4)"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 2. GLITCH (乱) — David Carson: Offset/duplicated text elements
// ============================================================
const glitchTemplate: TemplateDefinition = {
  id: 'glitch',
  name: 'GLITCH',
  nameJa: '乱',
  category: 'avantgarde',
  designer: 'David Carson',
  description: 'ノイズとずれの美学。秩序を破壊し再構築する。',
  accentColor: '#FF0040',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0A0A0A" />
      {/* Glitch offset strips */}
      <rect x="0" y="20" width="91" height="0.4" fill="#FF0040" opacity="0.6" />
      <rect x="0" y="35" width="91" height="0.3" fill="#00FFFF" opacity="0.4" />
      <rect x="15" y="12" width="50" height="0.2" fill="#FF0040" opacity="0.3" />
      {/* Name - glitch duplicated (cyan shadow offset 0.3mm) */}
      <text
        x="10.3"
        y="22.3"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="7"
        fill="#00FFFF"
        opacity="0.6"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="7"
        fill="#ffffff"
      >
        {data.nameJa}
      </text>
      {/* English name - glitch offset (red shadow) */}
      <text
        x="10.3"
        y="28.3"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="600"
        fontSize="2.5"
        letterSpacing="0.2"
        fill="#FF0040"
        opacity="0.7"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="10"
        y="28"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="600"
        fontSize="2.5"
        letterSpacing="0.2"
        fill="#ffffff"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Title - glitched */}
      <text
        x="10.3"
        y="33.3"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="#FF0040"
        opacity="0.5"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="33"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="rgba(255,255,255,0.7)"
      >
        {data.titleJa}
      </text>
      {/* Contact info */}
      <text
        x="10"
        y="43"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="rgba(255,255,255,0.5)"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="47"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="rgba(255,255,255,0.5)"
      >
        {data.email}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0A0A0A" />
      {/* Horizontal glitch lines */}
      <rect x="0" y="8" width="60" height="0.3" fill="#FF0040" opacity="0.5" />
      <rect x="20" y="25" width="71" height="0.2" fill="#00FFFF" opacity="0.3" />
      <rect x="0" y="42" width="45" height="0.3" fill="#FF0040" opacity="0.4" />
      {/* Company - glitch duplicated */}
      <text
        x="45.8"
        y="24.3"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="800"
        fontSize="4.5"
        letterSpacing="0.5"
        fill="#00FFFF"
        opacity="0.5"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="800"
        fontSize="4.5"
        letterSpacing="0.5"
        fill="#ffffff"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="rgba(255,255,255,0.5)"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="38"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="rgba(255,255,255,0.4)"
      >
        {data.addressEn}
      </text>
      <text
        x="45.5"
        y="42"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="rgba(255,255,255,0.4)"
      >
        {data.website}
      </text>
    </g>
  ),
};

// ============================================================
// 3. NOISE (粒) — Experimental Jetset: Grain-like dot pattern strip
// ============================================================
const noiseTemplate: TemplateDefinition = {
  id: 'noise',
  name: 'NOISE',
  nameJa: '粒',
  category: 'avantgarde',
  designer: 'Experimental Jetset',
  description: '粒子のざらつき。印刷の原点に立ち返る生々しさ。',
  accentColor: '#222222',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F2ED" />
      {/* Grain dot pattern strip across the card */}
      <defs>
        <pattern id="noise-dots" x="0" y="0" width="1.5" height="1.5" patternUnits="userSpaceOnUse">
          <circle cx="0.4" cy="0.4" r="0.25" fill="#222222" opacity="0.15" />
          <circle cx="1.1" cy="1.1" r="0.18" fill="#222222" opacity="0.1" />
        </pattern>
      </defs>
      <rect x="0" y="18" width="91" height="10" fill="url(#noise-dots)" />
      <rect x="0" y="18" width="91" height="0.15" fill="#222222" />
      <rect x="0" y="28" width="91" height="0.15" fill="#222222" />
      {/* Name - raw, direct */}
      <text
        x="8"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="5.5"
        fill="#222222"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="25"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="2.8"
        letterSpacing="0.3"
        fill="#222222"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Raw utilitarian contact info */}
      <text
        x="8"
        y="35"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.7"
        fill="#555555"
      >
        {data.titleEn}
      </text>
      <text
        x="8"
        y="42"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#888888"
      >
        T {data.tel}
      </text>
      <text
        x="8"
        y="46"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#888888"
      >
        E {data.email}
      </text>
      <text
        x="8"
        y="50"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#888888"
      >
        W {data.website}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F2ED" />
      <defs>
        <pattern id="noise-dots-back" x="0" y="0" width="1.2" height="1.2" patternUnits="userSpaceOnUse">
          <circle cx="0.35" cy="0.35" r="0.2" fill="#222222" opacity="0.12" />
          <circle cx="0.9" cy="0.85" r="0.15" fill="#222222" opacity="0.08" />
          <circle cx="0.2" cy="0.95" r="0.12" fill="#222222" opacity="0.06" />
        </pattern>
      </defs>
      {/* Large grain area covering most of the back */}
      <rect x="0" y="0" width="91" height="55" fill="url(#noise-dots-back)" />
      <rect x="0" y="22" width="91" height="0.15" fill="#222222" />
      <rect x="0" y="33" width="91" height="0.15" fill="#222222" />
      <text
        x="45.5"
        y="18"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="800"
        fontSize="4"
        letterSpacing="0.8"
        fill="#222222"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="29"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        fill="#444444"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="40"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#888888"
      >
        〒{data.zipCode} {data.addressEn}
      </text>
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#888888"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 4. BRUTALIST (粗) — Peter Saville: Raw, concrete gray, heavy sans-serif
// ============================================================
const brutalistTemplate: TemplateDefinition = {
  id: 'brutalist',
  name: 'BRUTALIST',
  nameJa: '粗',
  category: 'avantgarde',
  designer: 'Peter Saville',
  description: '無骨なコンクリートの質感。装飾を排した原始的な力。',
  accentColor: '#B0B0B0',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#B0B0B0" />
      {/* Concrete texture - subtle rectangles */}
      <rect x="0" y="0" width="91" height="55" fill="#A8A8A8" opacity="0.3" />
      <rect x="5" y="3" width="30" height="0.3" fill="#9A9A9A" />
      <rect x="60" y="50" width="25" height="0.3" fill="#9A9A9A" />
      <rect x="0" y="38" width="91" height="0.2" fill="#8A8A8A" opacity="0.5" />
      {/* Heavy name */}
      <text
        x="8"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="8"
        fill="#1A1A1A"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="27"
        fontFamily="'Inter', sans-serif"
        fontWeight="900"
        fontSize="3.2"
        letterSpacing="0.3"
        fill="#333333"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="8"
        y="33"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2"
        fill="#4A4A4A"
      >
        {data.titleJa}
      </text>
      {/* Contact block - raw */}
      <text
        x="8"
        y="43"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="1.6"
        fill="#333333"
      >
        TEL {data.tel}
      </text>
      <text
        x="8"
        y="47"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="1.6"
        fill="#333333"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="51"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="1.6"
        fill="#333333"
      >
        {data.website}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1A1A1A" />
      {/* Brutalist thick bars */}
      <rect x="0" y="0" width="91" height="4" fill="#B0B0B0" />
      <rect x="0" y="51" width="91" height="4" fill="#B0B0B0" />
      <text
        x="45.5"
        y="25"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="900"
        fontSize="6"
        letterSpacing="1"
        fill="#B0B0B0"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="3"
        fill="#888888"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="42"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#666666"
      >
        〒{data.zipCode} {data.addressEn}
      </text>
      <text
        x="45.5"
        y="46"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#666666"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 5. DECON (崩) — April Greiman: Deconstructed layout, text at odd angles
// ============================================================
const deconTemplate: TemplateDefinition = {
  id: 'decon',
  name: 'DECON',
  nameJa: '崩',
  category: 'avantgarde',
  designer: 'April Greiman',
  description: '脱構築の自由。角度とレイヤーが秩序を解体する。',
  accentColor: '#E040A0',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFBF5" />
      {/* Deconstructed geometric elements */}
      <rect x="60" y="-5" width="20" height="20" fill="#E040A0" opacity="0.12" transform="rotate(15, 70, 5)" />
      <rect x="-5" y="35" width="25" height="15" fill="#40A0E0" opacity="0.1" transform="rotate(-8, 7, 42)" />
      <line x1="10" y1="0" x2="80" y2="55" stroke="#E040A0" strokeWidth="0.1" opacity="0.3" />
      <line x1="85" y1="0" x2="20" y2="55" stroke="#40A0E0" strokeWidth="0.1" opacity="0.2" />
      {/* Name at slight angle */}
      <text
        x="12"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="6.5"
        fill="#1a1a1a"
        transform="rotate(-3, 12, 20)"
      >
        {data.nameJa}
      </text>
      {/* English name rotated differently */}
      <text
        x="14"
        y="28"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        letterSpacing="0.2"
        fill="#E040A0"
        transform="rotate(2, 14, 28)"
      >
        {data.nameEn}
      </text>
      {/* Title tilted */}
      <text
        x="18"
        y="34"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="#888888"
        transform="rotate(-5, 18, 34)"
      >
        {data.titleJa}
      </text>
      {/* Contact info at another angle */}
      <text
        x="10"
        y="43"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#666666"
        transform="rotate(1.5, 10, 43)"
      >
        {data.tel} / {data.email}
      </text>
      <text
        x="10"
        y="48"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#666666"
        transform="rotate(-2, 10, 48)"
      >
        {data.website}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFBF5" />
      {/* Deconstructed rectangles */}
      <rect x="55" y="5" width="30" height="18" fill="#E040A0" opacity="0.08" transform="rotate(12, 70, 14)" />
      <rect x="5" y="30" width="35" height="14" fill="#40A0E0" opacity="0.06" transform="rotate(-6, 22, 37)" />
      <rect x="40" y="38" width="20" height="10" fill="#E040A0" opacity="0.05" transform="rotate(4, 50, 43)" />
      {/* Company at dramatic angle */}
      <text
        x="45.5"
        y="20"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="800"
        fontSize="5"
        letterSpacing="0.3"
        fill="#1a1a1a"
        transform="rotate(-7, 45.5, 20)"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        fill="#E040A0"
        transform="rotate(3, 45.5, 28)"
      >
        {data.companyJa}
      </text>
      {/* Address scattered */}
      <text
        x="15"
        y="40"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#999999"
        transform="rotate(-4, 15, 40)"
      >
        〒{data.zipCode}
      </text>
      <text
        x="50"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#999999"
        transform="rotate(2, 50, 42)"
      >
        {data.addressJa}
      </text>
      <text
        x="30"
        y="49"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#999999"
        transform="rotate(-1.5, 30, 49)"
      >
        {data.tel} | {data.email} | {data.website}
      </text>
    </g>
  ),
};

// ============================================================
// 6. OVERLAP (層) — Irma Boom: Overlapping semi-transparent colored rectangles
// ============================================================
const overlapTemplate: TemplateDefinition = {
  id: 'overlap',
  name: 'OVERLAP',
  nameJa: '層',
  category: 'avantgarde',
  designer: 'Irma Boom',
  description: '色彩の層が重なり新しい色を生む。透明度の詩学。',
  accentColor: '#FF6600',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FEFEFE" />
      {/* Overlapping transparent rectangles */}
      <rect x="5" y="5" width="35" height="25" fill="#FF6600" opacity="0.25" />
      <rect x="20" y="15" width="35" height="25" fill="#0066FF" opacity="0.2" />
      <rect x="50" y="2" width="30" height="20" fill="#FFD700" opacity="0.2" />
      <rect x="60" y="30" width="25" height="20" fill="#FF6600" opacity="0.15" />
      <rect x="35" y="35" width="30" height="15" fill="#0066FF" opacity="0.1" />
      {/* Name over the layers */}
      <text
        x="10"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="800"
        fontSize="6"
        fill="#1a1a1a"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="28"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        letterSpacing="0.15"
        fill="#333333"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="33"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="#666666"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="45"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#888888"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="49"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#888888"
      >
        {data.email}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FEFEFE" />
      {/* Larger overlapping rectangles on back */}
      <rect x="-5" y="-5" width="50" height="35" fill="#FF6600" opacity="0.3" />
      <rect x="30" y="10" width="40" height="35" fill="#0066FF" opacity="0.25" />
      <rect x="55" y="-5" width="40" height="30" fill="#FFD700" opacity="0.2" />
      <rect x="10" y="30" width="45" height="25" fill="#00CC66" opacity="0.15" />
      <rect x="50" y="35" width="40" height="20" fill="#FF6600" opacity="0.12" />
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="800"
        fontSize="4.5"
        letterSpacing="0.4"
        fill="#1a1a1a"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        fill="#333333"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="40"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#666666"
      >
        〒{data.zipCode} {data.addressEn}
      </text>
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#666666"
      >
        {data.addressJa}
      </text>
      <text
        x="45.5"
        y="50"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#888888"
      >
        {data.website}
      </text>
    </g>
  ),
};

// ============================================================
// 7. ROTATE (転) — Wolfgang Weingart: Key text rotated 90°/-90°
// ============================================================
const rotateTemplate: TemplateDefinition = {
  id: 'rotate',
  name: 'ROTATE',
  nameJa: '転',
  category: 'avantgarde',
  designer: 'Wolfgang Weingart',
  description: '回転する文字が視線を翻弄する。読む行為を再定義。',
  accentColor: '#1A1A8C',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F0F0F0" />
      {/* Vertical stripe accent */}
      <rect x="0" y="0" width="3" height="55" fill="#1A1A8C" />
      {/* Japanese name rotated 90° along left */}
      <text
        x="8"
        y="50"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="6"
        fill="#1A1A8C"
        transform="rotate(-90, 8, 50)"
      >
        {data.nameJa}
      </text>
      {/* English name rotated -90° on right side */}
      <text
        x="82"
        y="5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="700"
        fontSize="2.8"
        letterSpacing="0.2"
        fill="#333333"
        transform="rotate(90, 82, 5)"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Title horizontal for contrast */}
      <text
        x="25"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2"
        fill="#666666"
      >
        {data.titleJa}
      </text>
      <text
        x="25"
        y="25"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.7"
        fill="#888888"
      >
        {data.titleEn}
      </text>
      {/* Contact info horizontal */}
      <text
        x="25"
        y="35"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#666666"
      >
        {data.tel}
      </text>
      <text
        x="25"
        y="39"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#666666"
      >
        {data.email}
      </text>
      <text
        x="25"
        y="43"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#666666"
      >
        {data.website}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1A1A8C" />
      {/* Horizontal stripe */}
      <rect x="0" y="52" width="91" height="3" fill="#F0F0F0" />
      {/* Company rotated -90° taking up full height */}
      <text
        x="25"
        y="52"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="800"
        fontSize="5"
        letterSpacing="0.5"
        fill="#ffffff"
        transform="rotate(-90, 25, 52)"
      >
        {data.companyEn.toUpperCase()}
      </text>
      {/* Japanese company rotated 90° */}
      <text
        x="60"
        y="5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="3"
        fill="rgba(255,255,255,0.5)"
        transform="rotate(90, 60, 5)"
      >
        {data.companyJa}
      </text>
      {/* Address horizontal near bottom */}
      <text
        x="45.5"
        y="46"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="rgba(255,255,255,0.4)"
      >
        〒{data.zipCode} {data.addressEn}
      </text>
    </g>
  ),
};

// ============================================================
// 8. FRAGMENT (破) — Rudy VanderLans: Text split across separate zones
// ============================================================
const fragmentTemplate: TemplateDefinition = {
  id: 'fragment',
  name: 'FRAGMENT',
  nameJa: '破',
  category: 'avantgarde',
  designer: 'Rudy VanderLans',
  description: '断片化された情報。分離と再結合の緊張感。',
  accentColor: '#CC3300',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FAF8F5" />
      {/* Dividing lines creating zones */}
      <line x1="45.5" y1="0" x2="45.5" y2="55" stroke="#CC3300" strokeWidth="0.15" />
      <line x1="0" y1="27.5" x2="91" y2="27.5" stroke="#CC3300" strokeWidth="0.15" />
      {/* Zone 1: Top-left - Japanese name */}
      <text
        x="5"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="800"
        fontSize="5.5"
        fill="#1a1a1a"
      >
        {data.nameJa}
      </text>
      <text
        x="5"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      {/* Zone 2: Top-right - English name */}
      <text
        x="48"
        y="10"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="600"
        fontSize="2.5"
        letterSpacing="0.15"
        fill="#CC3300"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="48"
        y="15"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#999999"
      >
        {data.titleEn}
      </text>
      {/* Zone 3: Bottom-left - Contact */}
      <text
        x="5"
        y="35"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#666666"
      >
        TEL
      </text>
      <text
        x="5"
        y="39"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="1.7"
        fill="#333333"
      >
        {data.tel}
      </text>
      <text
        x="5"
        y="44"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#666666"
      >
        MAIL
      </text>
      <text
        x="5"
        y="48"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="1.7"
        fill="#333333"
      >
        {data.email}
      </text>
      {/* Zone 4: Bottom-right - Website */}
      <text
        x="48"
        y="35"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#666666"
      >
        WEB
      </text>
      <text
        x="48"
        y="39"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="1.7"
        fill="#333333"
      >
        {data.website}
      </text>
      {/* Small red square at intersection */}
      <rect x="44" y="26" width="3" height="3" fill="#CC3300" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FAF8F5" />
      {/* Fragmented grid lines */}
      <line x1="30" y1="0" x2="30" y2="55" stroke="#CC3300" strokeWidth="0.12" />
      <line x1="60" y1="0" x2="60" y2="55" stroke="#CC3300" strokeWidth="0.12" />
      <line x1="0" y1="20" x2="91" y2="20" stroke="#CC3300" strokeWidth="0.12" />
      <line x1="0" y1="38" x2="91" y2="38" stroke="#CC3300" strokeWidth="0.12" />
      {/* Company English - split across top zones */}
      <text
        x="5"
        y="13"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="800"
        fontSize="4"
        fill="#1a1a1a"
      >
        {data.companyEn.toUpperCase()}
      </text>
      {/* Company Japanese - middle zone */}
      <text
        x="33"
        y="30"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="3"
        fill="#CC3300"
      >
        {data.companyJa}
      </text>
      {/* Address fragments in different zones */}
      <text
        x="5"
        y="30"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#999999"
      >
        〒{data.zipCode}
      </text>
      <text
        x="5"
        y="45"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#888888"
      >
        {data.addressJa}
      </text>
      <text
        x="63"
        y="30"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#999999"
      >
        {data.tel}
      </text>
      <text
        x="63"
        y="45"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#999999"
      >
        {data.website}
      </text>
      {/* Red squares at intersections */}
      <rect x="28.5" y="18.5" width="3" height="3" fill="#CC3300" />
      <rect x="58.5" y="36.5" width="3" height="3" fill="#CC3300" />
    </g>
  ),
};

// ============================================================
// 9. FLUX (流) — Tomato: Flowing diagonal composition, dynamic energy
// ============================================================
const fluxTemplate: TemplateDefinition = {
  id: 'flux',
  name: 'FLUX',
  nameJa: '流',
  category: 'avantgarde',
  designer: 'Tomato',
  description: '流動する対角線。止まることのない動的エネルギー。',
  accentColor: '#FF4400',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="flux-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF4400" />
          <stop offset="100%" stopColor="#FF8800" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#FAFAFA" />
      {/* Dynamic diagonal stripes */}
      <polygon points="0,0 40,0 0,24" fill="#FF4400" opacity="0.08" />
      <polygon points="91,55 50,55 91,30" fill="#FF4400" opacity="0.06" />
      <line x1="0" y1="55" x2="91" y2="0" stroke="url(#flux-grad)" strokeWidth="0.3" opacity="0.4" />
      <line x1="0" y1="45" x2="75" y2="0" stroke="#FF4400" strokeWidth="0.15" opacity="0.2" />
      <line x1="15" y1="55" x2="91" y2="10" stroke="#FF8800" strokeWidth="0.15" opacity="0.2" />
      {/* Name flowing diagonally */}
      <text
        x="10"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="800"
        fontSize="6.5"
        fill="#1a1a1a"
        transform="rotate(-12, 10, 22)"
      >
        {data.nameJa}
      </text>
      <text
        x="18"
        y="30"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="2.3"
        letterSpacing="0.2"
        fill="#FF4400"
        transform="rotate(-12, 18, 30)"
      >
        {data.nameEn}
      </text>
      {/* Contact info flowing along bottom diagonal */}
      <text
        x="30"
        y="42"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#888888"
        transform="rotate(-12, 30, 42)"
      >
        {data.titleEn}
      </text>
      <text
        x="8"
        y="49"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#999999"
      >
        {data.tel} | {data.email}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="flux-grad-back" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF4400" />
          <stop offset="50%" stopColor="#FF6600" />
          <stop offset="100%" stopColor="#FF8800" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#1A1A1A" />
      {/* Dynamic diagonal fills */}
      <polygon points="0,0 91,0 91,25 0,40" fill="url(#flux-grad-back)" opacity="0.9" />
      <polygon points="0,42 91,27 91,32 0,47" fill="#FF4400" opacity="0.15" />
      {/* Company name riding the diagonal */}
      <text
        x="12"
        y="20"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="800"
        fontSize="5"
        letterSpacing="0.4"
        fill="#ffffff"
        transform="rotate(-12, 12, 20)"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <text
        x="18"
        y="28"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        fill="rgba(255,255,255,0.7)"
        transform="rotate(-12, 18, 28)"
      >
        {data.companyJa}
      </text>
      {/* Contact flowing along bottom */}
      <text
        x="10"
        y="47"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#FF8800"
      >
        {data.addressEn}
      </text>
      <text
        x="10"
        y="51"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="rgba(255,136,0,0.6)"
      >
        {data.website} | {data.tel}
      </text>
    </g>
  ),
};

// ============================================================
// 10. INVERT (逆) — Tibor Kalman: Inverted colors, white on black, subversive
// ============================================================
const invertTemplate: TemplateDefinition = {
  id: 'invert',
  name: 'INVERT',
  nameJa: '逆',
  category: 'avantgarde',
  designer: 'Tibor Kalman',
  description: '反転の衝撃。白と黒の価値を逆転させる挑発。',
  accentColor: '#FFFFFF',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#000000" />
      {/* Thin white border inset */}
      <rect x="2" y="2" width="87" height="51" fill="none" stroke="#ffffff" strokeWidth="0.15" />
      {/* Name - stark white on black */}
      <text
        x="8"
        y="18"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="7"
        fill="#ffffff"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="24"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        letterSpacing="0.2"
        fill="rgba(255,255,255,0.7)"
      >
        {data.nameEn}
      </text>
      {/* White line divider */}
      <line x1="8" y1="28" x2="40" y2="28" stroke="#ffffff" strokeWidth="0.2" />
      <text
        x="8"
        y="33"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="rgba(255,255,255,0.6)"
      >
        {data.titleJa}
      </text>
      {/* Contact info */}
      <text
        x="8"
        y="41"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="rgba(255,255,255,0.5)"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="45"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="rgba(255,255,255,0.5)"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="49"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="rgba(255,255,255,0.5)"
      >
        {data.website}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#000000" />
      {/* Inverted white block in center */}
      <rect x="15" y="12" width="61" height="31" fill="#ffffff" />
      {/* Black text on white block - the inversion of the inversion */}
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="800"
        fontSize="4.5"
        letterSpacing="0.5"
        fill="#000000"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        fill="#333333"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="37"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#666666"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
      <text
        x="45.5"
        y="41"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#666666"
      >
        {data.addressEn}
      </text>
      {/* White text below the block */}
      <text
        x="45.5"
        y="50"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="rgba(255,255,255,0.4)"
      >
        {data.tel} | {data.email}
      </text>
    </g>
  ),
};

export const avantgardeTemplates: TemplateDefinition[] = [
  neoTemplate,
  glitchTemplate,
  noiseTemplate,
  brutalistTemplate,
  deconTemplate,
  overlapTemplate,
  rotateTemplate,
  fragmentTemplate,
  fluxTemplate,
  invertTemplate,
];
