import type { CardData, TemplateDefinition } from './types';

// ============================================================
// 1. VOID — Kenya Hara inspired: Ultra-minimal, vast white space
// ============================================================
const voidTemplate: TemplateDefinition = {
  id: 'void',
  name: 'VOID',
  nameJa: '余白',
  designer: 'Kenya Hara',
  description: '極限の余白美。静寂の中に名が浮かぶ。',
  accentColor: '#000000',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="100"
        fontSize="5.5"
        letterSpacing="0.8"
        fill="#1a1a1a"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="2.2"
        letterSpacing="0.3"
        fill="#999999"
      >
        {data.nameEn.toUpperCase()}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      <text
        x="81"
        y="38"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2"
        fill="#666666"
      >
        {data.companyJa}
      </text>
      <text
        x="81"
        y="41.5"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="#999999"
      >
        {data.titleJa}
      </text>
      <text
        x="81"
        y="45.5"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#999999"
      >
        {data.email}
      </text>
      <text
        x="81"
        y="48.5"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#999999"
      >
        {data.tel}
      </text>
    </g>
  ),
};

// ============================================================
// 2. KATACHI — Kashiwa Sato inspired: Bold geometric
// ============================================================
const katachiTemplate: TemplateDefinition = {
  id: 'katachi',
  name: 'KATACHI',
  nameJa: '形',
  designer: 'Kashiwa Sato',
  description: '大胆な幾何学と鮮烈な色彩。',
  accentColor: '#E60012',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      <rect x="0" y="0" width="91" height="14" fill="#E60012" />
      <text
        x="8"
        y="10"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="3.2"
        letterSpacing="0.4"
        fill="#ffffff"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <text
        x="8"
        y="26"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="6.5"
        fill="#1a1a1a"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="32"
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
        y="37"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2"
        fill="#999999"
      >
        {data.titleJa}
      </text>
      <line x1="8" y1="40" x2="40" y2="40" stroke="#E60012" strokeWidth="0.4" />
      <text
        x="8"
        y="44"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.7"
        fill="#666666"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="47.5"
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
// 3. WA — Ikko Tanaka inspired: Japanese modernism
// ============================================================
const waTemplate: TemplateDefinition = {
  id: 'wa',
  name: 'WA',
  nameJa: '和',
  designer: 'Ikko Tanaka',
  description: '日本のモダニズム。幾何学と和の融合。',
  accentColor: '#C41E3A',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1B1464" />
      <circle cx="68" cy="20" r="14" fill="#C41E3A" />
      <circle cx="68" cy="20" r="8" fill="#1B1464" />
      <circle cx="68" cy="20" r="4" fill="#F5C518" />
      <text
        x="10"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="7"
        fill="#ffffff"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="48"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.2"
        fill="rgba(255,255,255,0.6)"
      >
        {data.titleEn.toUpperCase()}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E8" />
      <rect x="0" y="0" width="4" height="55" fill="#C41E3A" />
      <text
        x="12"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="2.8"
        fill="#1B1464"
      >
        {data.companyJa}
      </text>
      <text
        x="12"
        y="18.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.8"
        letterSpacing="0.15"
        fill="#1B1464"
      >
        {data.companyEn}
      </text>
      <text
        x="12"
        y="26"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2"
        fill="#333333"
      >
        {data.titleJa}
      </text>
      <line x1="12" y1="30" x2="45" y2="30" stroke="#C41E3A" strokeWidth="0.3" />
      <text
        x="12"
        y="35"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.7"
        fill="#555555"
      >
        〒{data.zipCode}
      </text>
      <text
        x="12"
        y="38.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.7"
        fill="#555555"
      >
        {data.addressJa}
      </text>
      <text
        x="12"
        y="43"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.7"
        fill="#555555"
      >
        TEL {data.tel}
      </text>
      <text
        x="12"
        y="46.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.7"
        fill="#555555"
      >
        {data.email}
      </text>
    </g>
  ),
};

// ============================================================
// 4. TYPO — Helmut Schmid inspired: Typography master
// ============================================================
const typoTemplate: TemplateDefinition = {
  id: 'typo',
  name: 'TYPO',
  nameJa: '字',
  designer: 'Helmut Schmid',
  description: 'タイポグラフィの力。文字が空間を支配する。',
  accentColor: '#333333',
  renderFront: (data: CardData) => {
    const initials = data.nameEn
      .split(' ')
      .map((n) => n[0])
      .join('');
    return (
      <g>
        <rect width="91" height="55" fill="#ffffff" />
        <text
          x="-2"
          y="48"
          fontFamily="'Inter', sans-serif"
          fontWeight="900"
          fontSize="42"
          fill="#f0f0f0"
          letterSpacing="-2"
        >
          {initials}
        </text>
        <text
          x="8"
          y="20"
          fontFamily="'Noto Sans JP', sans-serif"
          fontWeight="500"
          fontSize="4.5"
          letterSpacing="0.5"
          fill="#1a1a1a"
        >
          {data.nameJa}
        </text>
        <text
          x="8"
          y="25.5"
          fontFamily="'Inter', sans-serif"
          fontWeight="300"
          fontSize="2"
          letterSpacing="0.3"
          fill="#666666"
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
          {data.companyJa} — {data.titleJa}
        </text>
        <line x1="8" y1="35" x2="83" y2="35" stroke="#e0e0e0" strokeWidth="0.15" />
        <text
          x="8"
          y="39"
          fontFamily="'Inter', sans-serif"
          fontWeight="400"
          fontSize="1.6"
          fill="#888888"
        >
          T. {data.tel}
        </text>
        <text
          x="8"
          y="42.5"
          fontFamily="'Inter', sans-serif"
          fontWeight="400"
          fontSize="1.6"
          fill="#888888"
        >
          {data.email}
        </text>
        <text
          x="8"
          y="46"
          fontFamily="'Inter', sans-serif"
          fontWeight="400"
          fontSize="1.6"
          fill="#888888"
        >
          {data.website}
        </text>
      </g>
    );
  },
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1a1a1a" />
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="3.5"
        letterSpacing="1.5"
        fill="#ffffff"
      >
        {data.companyEn.toUpperCase()}
      </text>
    </g>
  ),
};

// ============================================================
// 5. NEO — Sagmeister & Walsh inspired: Contemporary playful
// ============================================================
const neoTemplate: TemplateDefinition = {
  id: 'neo',
  name: 'NEO',
  nameJa: '新',
  designer: 'Sagmeister & Walsh',
  description: '常識を覆す遊び心。予想外の構成美。',
  accentColor: '#6C2BD9',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FAF7FF" />
      <defs>
        <linearGradient id="neo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6C2BD9" />
          <stop offset="100%" stopColor="#FF6B9D" />
        </linearGradient>
      </defs>
      <rect x="55" y="0" width="36" height="55" fill="url(#neo-grad)" />
      <text
        x="8"
        y="18"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="700"
        fontSize="5.5"
        fill="#1a1a1a"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="24"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.2"
        fill="#6C2BD9"
      >
        {data.titleEn}
      </text>
      <text
        x="8"
        y="35"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.7"
        fill="#666666"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="39"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.7"
        fill="#666666"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="43"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.7"
        fill="#666666"
      >
        {data.website}
      </text>
      <text
        x="73"
        y="30"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="700"
        fontSize="3"
        fill="#ffffff"
        transform="rotate(-90, 73, 27.5)"
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
      <text
        x="45.5"
        y="26"
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
        y="33"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        fill="rgba(255,255,255,0.7)"
      >
        {data.companyJa}
      </text>
    </g>
  ),
};

// ============================================================
// 6. RATIO — Josef Müller-Brockmann inspired: Swiss grid
// ============================================================
const ratioTemplate: TemplateDefinition = {
  id: 'ratio',
  name: 'RATIO',
  nameJa: '律',
  designer: 'Müller-Brockmann',
  description: 'スイスグリッドの秩序美。情報の完璧な配置。',
  accentColor: '#0057B8',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Grid lines (subtle) */}
      <line x1="30.3" y1="0" x2="30.3" y2="55" stroke="#f0f0f0" strokeWidth="0.1" />
      <line x1="60.6" y1="0" x2="60.6" y2="55" stroke="#f0f0f0" strokeWidth="0.1" />
      <line x1="0" y1="18.3" x2="91" y2="18.3" stroke="#f0f0f0" strokeWidth="0.1" />
      <line x1="0" y1="36.6" x2="91" y2="36.6" stroke="#f0f0f0" strokeWidth="0.1" />
      {/* Blue accent block */}
      <rect x="0" y="0" width="30.3" height="18.3" fill="#0057B8" />
      <text
        x="6"
        y="11"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="3"
        letterSpacing="0.2"
        fill="#ffffff"
      >
        {data.companyEn.split(' ')[0]?.toUpperCase()}
      </text>
      {/* Name area */}
      <text
        x="6"
        y="28"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5"
        fill="#1a1a1a"
      >
        {data.nameJa}
      </text>
      <text
        x="6"
        y="33"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.15"
        fill="#0057B8"
      >
        {data.titleEn}
      </text>
      {/* Contact area */}
      <text
        x="6"
        y="41"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#666666"
      >
        〒{data.zipCode}
      </text>
      <text
        x="6"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#666666"
      >
        {data.addressJa}
      </text>
      <text
        x="6"
        y="48"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#666666"
      >
        T. {data.tel}
      </text>
      <text
        x="6"
        y="51"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#666666"
      >
        {data.email}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0057B8" />
      <rect x="60.6" y="36.6" width="30.4" height="18.4" fill="#003D80" />
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
      <text
        x="45.5"
        y="48"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="rgba(255,255,255,0.5)"
      >
        {data.website}
      </text>
    </g>
  ),
};

export const templates: TemplateDefinition[] = [
  voidTemplate,
  katachiTemplate,
  waTemplate,
  typoTemplate,
  neoTemplate,
  ratioTemplate,
];
