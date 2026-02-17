import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. WA (和) — Ikko Tanaka: Concentric circles, Japanese modernism
// ============================================================
const waTemplate: TemplateDefinition = {
  id: 'wa',
  name: 'WA',
  nameJa: '和',
  category: 'japanese',
  designer: 'Ikko Tanaka',
  description: '同心円が織りなす日本のモダニズム。赤・紺・金の三色が調和する。',
  accentColor: '#C41E3A',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E8" />
      {/* Concentric circles — large, behind text */}
      <circle cx="70" cy="28" r="22" fill="none" stroke="#1B1464" strokeWidth="0.6" opacity="0.25" />
      <circle cx="70" cy="28" r="16" fill="none" stroke="#C41E3A" strokeWidth="0.8" opacity="0.35" />
      <circle cx="70" cy="28" r="10" fill="none" stroke="#D4A853" strokeWidth="1" opacity="0.45" />
      <circle cx="70" cy="28" r="4" fill="#C41E3A" opacity="0.6" />
      {/* Name */}
      <text
        x="10"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="6.5"
        fill="#1B1464"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="28"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        letterSpacing="0.2"
        fill="#C41E3A"
      >
        {data.nameEn}
      </text>
      {/* Title */}
      <text
        x="10"
        y="34"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2"
        fill="#666666"
      >
        {data.titleJa}
      </text>
      {/* Small gold accent line */}
      <line x1="10" y1="37" x2="35" y2="37" stroke="#D4A853" strokeWidth="0.4" />
      {/* Company */}
      <text
        x="10"
        y="41"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2"
        fill="#1B1464"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1B1464" />
      {/* Concentric circles — large, decorative */}
      <circle cx="45.5" cy="27.5" r="24" fill="none" stroke="#D4A853" strokeWidth="0.3" opacity="0.3" />
      <circle cx="45.5" cy="27.5" r="18" fill="none" stroke="#C41E3A" strokeWidth="0.4" opacity="0.4" />
      <circle cx="45.5" cy="27.5" r="12" fill="none" stroke="#D4A853" strokeWidth="0.5" opacity="0.5" />
      <circle cx="45.5" cy="27.5" r="6" fill="#C41E3A" opacity="0.7" />
      {/* Company name */}
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="4"
        fill="#F5F0E8"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="29"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.3"
        fill="#D4A853"
      >
        {data.companyEn}
      </text>
      {/* Contact info */}
      <text
        x="45.5"
        y="40"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#F5F0E8"
        opacity="0.7"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="43.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#F5F0E8"
        opacity="0.7"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="47"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#F5F0E8"
        opacity="0.5"
      >
        {data.website}
      </text>
    </g>
  ),
};

// ============================================================
// 2. ZEN (禅) — Shunmyo Masuno: Ensō brush stroke, wabi-sabi
// ============================================================
const zenTemplate: TemplateDefinition = {
  id: 'zen',
  name: 'ZEN',
  nameJa: '禅',
  category: 'japanese',
  designer: 'Shunmyo Masuno',
  description: '円相の不完全な美。侘び寂びの精神を一筆に宿す。',
  accentColor: '#1a1a1a',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E8" />
      {/* Ensō — incomplete circle brush stroke */}
      <defs>
        <linearGradient id="zen-enso-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1a1a1a" stopOpacity="0.9" />
          <stop offset="70%" stopColor="#1a1a1a" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#1a1a1a" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <path
        d="M 62 10 A 16 16 0 1 1 55 8"
        fill="none"
        stroke="url(#zen-enso-grad)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Name — bottom left, understated */}
      <text
        x="10"
        y="40"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        fill="#1a1a1a"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="45.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.15"
        fill="#888888"
      >
        {data.nameEn}
      </text>
      {/* Title — subtle */}
      <text
        x="10"
        y="49.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.7"
        fill="#aaaaaa"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E8" />
      {/* Small ensō mark */}
      <circle cx="45.5" cy="12" r="4" fill="none" stroke="#1a1a1a" strokeWidth="0.8" opacity="0.2" />
      {/* Company */}
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="3"
        fill="#1a1a1a"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        letterSpacing="0.2"
        fill="#888888"
      >
        {data.companyEn}
      </text>
      {/* Thin rule */}
      <line x1="30" y1="32" x2="61" y2="32" stroke="#1a1a1a" strokeWidth="0.15" />
      {/* Contact */}
      <text
        x="45.5"
        y="36.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#666666"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="40"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#666666"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="46"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#aaaaaa"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 3. KAMON (紋) — Traditional: Family crest geometric emblem
// ============================================================
const kamonTemplate: TemplateDefinition = {
  id: 'kamon',
  name: 'KAMON',
  nameJa: '紋',
  category: 'japanese',
  designer: 'Traditional',
  description: '家紋の幾何学的美を現代に。中央に凛と据えた紋章。',
  accentColor: '#1B1464',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Kamon — stylized geometric crest (mitsu-domoe inspired) */}
      <g transform="translate(45.5, 22)" opacity="0.12">
        <circle cx="0" cy="0" r="14" fill="none" stroke="#1B1464" strokeWidth="0.4" />
        <circle cx="0" cy="-5" r="3.5" fill="#1B1464" />
        <circle cx="4.33" cy="2.5" r="3.5" fill="#1B1464" />
        <circle cx="-4.33" cy="2.5" r="3.5" fill="#1B1464" />
        <path d="M 0 -5 A 5 5 0 0 1 4.33 2.5" fill="none" stroke="#1B1464" strokeWidth="1" />
        <path d="M 4.33 2.5 A 5 5 0 0 1 -4.33 2.5" fill="none" stroke="#1B1464" strokeWidth="1" />
        <path d="M -4.33 2.5 A 5 5 0 0 1 0 -5" fill="none" stroke="#1B1464" strokeWidth="1" />
      </g>
      {/* Name centered below crest */}
      <text
        x="45.5"
        y="41"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="5"
        letterSpacing="0.5"
        fill="#1B1464"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="46"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.3"
        fill="#888888"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="50"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#aaaaaa"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1B1464" />
      {/* Small kamon mark in gold */}
      <g transform="translate(45.5, 14)" opacity="0.5">
        <circle cx="0" cy="0" r="6" fill="none" stroke="#D4A853" strokeWidth="0.3" />
        <circle cx="0" cy="-2.2" r="1.5" fill="#D4A853" />
        <circle cx="1.9" cy="1.1" r="1.5" fill="#D4A853" />
        <circle cx="-1.9" cy="1.1" r="1.5" fill="#D4A853" />
      </g>
      {/* Company */}
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="3"
        fill="#F5F0E8"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        letterSpacing="0.2"
        fill="#D4A853"
      >
        {data.companyEn}
      </text>
      {/* Contact */}
      <line x1="30" y1="34.5" x2="61" y2="34.5" stroke="#D4A853" strokeWidth="0.15" />
      <text
        x="45.5"
        y="38.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#F5F0E8"
        opacity="0.7"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="42"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#F5F0E8"
        opacity="0.7"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="48"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#F5F0E8"
        opacity="0.4"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 4. WASHI (紙) — Taku Satoh: Paper texture feel, warm cream
// ============================================================
const washiTemplate: TemplateDefinition = {
  id: 'washi',
  name: 'WASHI',
  nameJa: '紙',
  category: 'japanese',
  designer: 'Taku Satoh',
  description: '和紙の温もりを感じる柔らかなクリーム地。素朴な美。',
  accentColor: '#8B7355',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E8" />
      {/* Washi paper texture — scattered subtle fiber lines */}
      <g opacity="0.06" stroke="#8B7355" strokeWidth="0.15">
        <line x1="5" y1="8" x2="18" y2="9" />
        <line x1="30" y1="3" x2="42" y2="4.5" />
        <line x1="60" y1="12" x2="75" y2="11" />
        <line x1="12" y1="20" x2="25" y2="22" />
        <line x1="50" y1="25" x2="65" y2="24" />
        <line x1="70" y1="35" x2="86" y2="36" />
        <line x1="8" y1="42" x2="22" y2="43" />
        <line x1="35" y1="48" x2="50" y2="47" />
        <line x1="72" y1="46" x2="85" y2="48" />
        <line x1="15" y1="15" x2="28" y2="16" />
        <line x1="55" y1="6" x2="68" y2="5" />
        <line x1="40" y1="38" x2="55" y2="39" />
      </g>
      {/* Thin border inset — like a frame on fine paper */}
      <rect x="5" y="4" width="81" height="47" fill="none" stroke="#C4B49A" strokeWidth="0.2" />
      {/* Name */}
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.6"
        fill="#4A3C2A"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="27.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.25"
        fill="#8B7355"
      >
        {data.nameEn}
      </text>
      {/* Title & company */}
      <text
        x="45.5"
        y="34"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="#8B7355"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="38"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#A89880"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E8" />
      {/* Washi fiber texture */}
      <g opacity="0.06" stroke="#8B7355" strokeWidth="0.15">
        <line x1="10" y1="5" x2="24" y2="6" />
        <line x1="40" y1="10" x2="55" y2="9" />
        <line x1="65" y1="15" x2="80" y2="16" />
        <line x1="20" y1="30" x2="35" y2="31" />
        <line x1="55" y1="40" x2="70" y2="41" />
        <line x1="8" y1="48" x2="20" y2="49" />
      </g>
      {/* Frame */}
      <rect x="5" y="4" width="81" height="47" fill="none" stroke="#C4B49A" strokeWidth="0.2" />
      {/* Company */}
      <text
        x="45.5"
        y="16"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="3"
        fill="#4A3C2A"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="20"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        letterSpacing="0.2"
        fill="#8B7355"
      >
        {data.companyEn}
      </text>
      {/* Divider */}
      <line x1="35" y1="23" x2="56" y2="23" stroke="#C4B49A" strokeWidth="0.15" />
      {/* Contact */}
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#8B7355"
      >
        TEL {data.tel}
      </text>
      <text
        x="45.5"
        y="31.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#8B7355"
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
        fill="#A89880"
      >
        {data.website}
      </text>
      {/* Address */}
      <text
        x="45.5"
        y="42"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#A89880"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="45"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#A89880"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 5. SUMI (墨) — Yusaku Kamekura: Ink wash gradient, bold
// ============================================================
const sumiTemplate: TemplateDefinition = {
  id: 'sumi',
  name: 'SUMI',
  nameJa: '墨',
  category: 'japanese',
  designer: 'Yusaku Kamekura',
  description: '墨の濃淡が力強く滲む。黒から透明へ、大胆な墨流し。',
  accentColor: '#1a1a1a',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E8" />
      {/* Ink wash gradient — sweeping from left */}
      <defs>
        <linearGradient id="sumi-wash" x1="0" y1="0" x2="1" y2="0.3">
          <stop offset="0%" stopColor="#1a1a1a" stopOpacity="0.95" />
          <stop offset="40%" stopColor="#1a1a1a" stopOpacity="0.6" />
          <stop offset="70%" stopColor="#1a1a1a" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#1a1a1a" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="55" height="55" fill="url(#sumi-wash)" />
      {/* Name — white on dark area */}
      <text
        x="8"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="7"
        fill="#F5F0E8"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="26"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="2.4"
        letterSpacing="0.15"
        fill="#F5F0E8"
        opacity="0.8"
      >
        {data.nameEn}
      </text>
      {/* Title on lighter area */}
      <text
        x="8"
        y="34"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="#F5F0E8"
        opacity="0.6"
      >
        {data.titleJa}
      </text>
      {/* Contact in dark text on the light right side */}
      <text
        x="83"
        y="42"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#1a1a1a"
        opacity="0.6"
      >
        {data.tel}
      </text>
      <text
        x="83"
        y="45.5"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#1a1a1a"
        opacity="0.6"
      >
        {data.email}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1a1a1a" />
      {/* Ink wash — lighter area emerging */}
      <defs>
        <radialGradient id="sumi-back-wash" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#F5F0E8" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#F5F0E8" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#sumi-back-wash)" />
      {/* Company — bold white */}
      <text
        x="45.5"
        y="20"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="4.5"
        fill="#F5F0E8"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="25"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="2"
        letterSpacing="0.3"
        fill="#F5F0E8"
        opacity="0.5"
      >
        {data.companyEn}
      </text>
      {/* Contact */}
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#F5F0E8"
        opacity="0.5"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="38.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#F5F0E8"
        opacity="0.5"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="42"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#F5F0E8"
        opacity="0.3"
      >
        {data.website}
      </text>
      <text
        x="45.5"
        y="49"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#F5F0E8"
        opacity="0.3"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 6. ORIGAMI (折) — Issey Miyake: Folded triangular geometry
// ============================================================
const origamiTemplate: TemplateDefinition = {
  id: 'origami',
  name: 'ORIGAMI',
  nameJa: '折',
  category: 'japanese',
  designer: 'Issey Miyake',
  description: '折り紙の幾何学。三角形が重なり、奥行きを生む。',
  accentColor: '#C41E3A',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Layered triangular shapes — origami folds */}
      <polygon points="0,0 40,0 0,35" fill="#C41E3A" opacity="0.08" />
      <polygon points="0,0 55,0 20,30" fill="#1B1464" opacity="0.06" />
      <polygon points="91,55 50,55 91,20" fill="#C41E3A" opacity="0.06" />
      <polygon points="91,55 35,55 70,25" fill="#D4A853" opacity="0.05" />
      {/* Fold lines */}
      <line x1="0" y1="0" x2="40" y2="35" stroke="#C41E3A" strokeWidth="0.15" opacity="0.2" />
      <line x1="91" y1="55" x2="50" y2="20" stroke="#1B1464" strokeWidth="0.15" opacity="0.15" />
      {/* Name */}
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="6"
        fill="#1a1a1a"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        letterSpacing="0.2"
        fill="#C41E3A"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="#888888"
      >
        {data.titleJa} | {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#C41E3A" />
      {/* Origami fold shapes on back */}
      <polygon points="0,0 45,0 0,55" fill="#1B1464" opacity="0.3" />
      <polygon points="91,0 91,55 45,55" fill="#D4A853" opacity="0.15" />
      <polygon points="45,0 91,0 91,30" fill="#ffffff" opacity="0.05" />
      {/* Company */}
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="3.5"
        fill="#ffffff"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.2"
        fill="#ffffff"
        opacity="0.7"
      >
        {data.companyEn}
      </text>
      {/* Contact */}
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#ffffff"
        opacity="0.8"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="39.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#ffffff"
        opacity="0.8"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="46"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#ffffff"
        opacity="0.5"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 7. NOREN (暖) — Kengo Kuma: Vertical stripe division
// ============================================================
const norenTemplate: TemplateDefinition = {
  id: 'noren',
  name: 'NOREN',
  nameJa: '暖',
  category: 'japanese',
  designer: 'Kengo Kuma',
  description: '暖簾の縦縞が空間を仕切る。木と布の建築的構成。',
  accentColor: '#5B3A29',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E8" />
      {/* Noren vertical stripes — like curtain panels */}
      <rect x="6" y="0" width="8" height="42" fill="#5B3A29" opacity="0.08" rx="0" />
      <rect x="18" y="0" width="8" height="45" fill="#5B3A29" opacity="0.06" rx="0" />
      <rect x="30" y="0" width="8" height="40" fill="#5B3A29" opacity="0.1" rx="0" />
      <rect x="42" y="0" width="8" height="44" fill="#5B3A29" opacity="0.05" rx="0" />
      <rect x="54" y="0" width="8" height="41" fill="#5B3A29" opacity="0.08" rx="0" />
      <rect x="66" y="0" width="8" height="46" fill="#5B3A29" opacity="0.06" rx="0" />
      <rect x="78" y="0" width="8" height="43" fill="#5B3A29" opacity="0.09" rx="0" />
      {/* Horizontal bar at top — the noren rod */}
      <rect x="0" y="0" width="91" height="2" fill="#5B3A29" opacity="0.3" />
      {/* Name in the lower clear area */}
      <text
        x="10"
        y="48"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="5"
        fill="#5B3A29"
      >
        {data.nameJa}
      </text>
      <text
        x="83"
        y="48"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.15"
        fill="#8B7355"
      >
        {data.nameEn}
      </text>
      <text
        x="83"
        y="52"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#A89880"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#5B3A29" />
      {/* Noren stripes — lighter on dark */}
      <rect x="6" y="0" width="8" height="42" fill="#F5F0E8" opacity="0.06" />
      <rect x="18" y="0" width="8" height="45" fill="#F5F0E8" opacity="0.04" />
      <rect x="30" y="0" width="8" height="40" fill="#F5F0E8" opacity="0.07" />
      <rect x="42" y="0" width="8" height="44" fill="#F5F0E8" opacity="0.04" />
      <rect x="54" y="0" width="8" height="41" fill="#F5F0E8" opacity="0.06" />
      <rect x="66" y="0" width="8" height="46" fill="#F5F0E8" opacity="0.04" />
      <rect x="78" y="0" width="8" height="43" fill="#F5F0E8" opacity="0.07" />
      {/* Rod */}
      <rect x="0" y="0" width="91" height="2" fill="#D4A853" opacity="0.4" />
      {/* Company */}
      <text
        x="45.5"
        y="18"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="3.5"
        fill="#F5F0E8"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="22.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        letterSpacing="0.2"
        fill="#D4A853"
      >
        {data.companyEn}
      </text>
      {/* Contact */}
      <line x1="25" y1="26" x2="66" y2="26" stroke="#F5F0E8" strokeWidth="0.1" opacity="0.3" />
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#F5F0E8"
        opacity="0.7"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="34.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#F5F0E8"
        opacity="0.7"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="38"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#F5F0E8"
        opacity="0.5"
      >
        {data.website}
      </text>
      {/* Address */}
      <text
        x="45.5"
        y="47"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#F5F0E8"
        opacity="0.4"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 8. SHOJI (障) — Tadao Ando: Grid frame pattern, architectural
// ============================================================
const shojiTemplate: TemplateDefinition = {
  id: 'shoji',
  name: 'SHOJI',
  nameJa: '障',
  category: 'japanese',
  designer: 'Tadao Ando',
  description: '障子の格子が光を濾す。建築的グリッドの静謐な美。',
  accentColor: '#8B7355',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E8" />
      {/* Shoji grid pattern — full card */}
      <g stroke="#C4B49A" strokeWidth="0.15" opacity="0.35">
        {/* Vertical lines */}
        <line x1="18.2" y1="0" x2="18.2" y2="55" />
        <line x1="36.4" y1="0" x2="36.4" y2="55" />
        <line x1="54.6" y1="0" x2="54.6" y2="55" />
        <line x1="72.8" y1="0" x2="72.8" y2="55" />
        {/* Horizontal lines */}
        <line x1="0" y1="11" x2="91" y2="11" />
        <line x1="0" y1="22" x2="91" y2="22" />
        <line x1="0" y1="33" x2="91" y2="33" />
        <line x1="0" y1="44" x2="91" y2="44" />
      </g>
      {/* Outer frame — heavier, like kumiko woodwork */}
      <rect x="1" y="1" width="89" height="53" fill="none" stroke="#8B7355" strokeWidth="0.5" opacity="0.3" />
      {/* Name — positioned in a grid cell area */}
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        fill="#4A3C2A"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="31.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.2"
        fill="#8B7355"
      >
        {data.nameEn}
      </text>
      {/* Title — lower cell */}
      <text
        x="45.5"
        y="39"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.7"
        fill="#A89880"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E8" />
      {/* Shoji grid — subtler on back */}
      <g stroke="#C4B49A" strokeWidth="0.1" opacity="0.2">
        <line x1="18.2" y1="0" x2="18.2" y2="55" />
        <line x1="36.4" y1="0" x2="36.4" y2="55" />
        <line x1="54.6" y1="0" x2="54.6" y2="55" />
        <line x1="72.8" y1="0" x2="72.8" y2="55" />
        <line x1="0" y1="11" x2="91" y2="11" />
        <line x1="0" y1="22" x2="91" y2="22" />
        <line x1="0" y1="33" x2="91" y2="33" />
        <line x1="0" y1="44" x2="91" y2="44" />
      </g>
      <rect x="1" y="1" width="89" height="53" fill="none" stroke="#8B7355" strokeWidth="0.5" opacity="0.3" />
      {/* Company — centered in upper area */}
      <text
        x="45.5"
        y="15"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="3"
        fill="#4A3C2A"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="19"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        letterSpacing="0.2"
        fill="#8B7355"
      >
        {data.companyEn}
      </text>
      {/* Contact — middle */}
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#8B7355"
      >
        TEL {data.tel}
      </text>
      <text
        x="45.5"
        y="31.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#8B7355"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#A89880"
      >
        {data.website}
      </text>
      {/* Address — lower cell */}
      <text
        x="45.5"
        y="42"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#A89880"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="45"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#A89880"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 9. FUJI (富) — Hokusai: Mountain silhouette, dawn colors
// ============================================================
const fujiTemplate: TemplateDefinition = {
  id: 'fuji',
  name: 'FUJI',
  nameJa: '富',
  category: 'japanese',
  designer: 'Hokusai',
  description: '富士の稜線が黎明に浮かぶ。北斎の大胆な構図を名刺に。',
  accentColor: '#2D5F8A',
  renderFront: (data: CardData) => (
    <g>
      {/* Dawn sky gradient */}
      <defs>
        <linearGradient id="fuji-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2D5F8A" />
          <stop offset="50%" stopColor="#D4856A" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#F5D6C3" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#fuji-sky)" />
      {/* Mt. Fuji silhouette at bottom */}
      <path
        d="M -5 55 L 30 22 L 38 26 L 42 24 L 55 22 L 96 55 Z"
        fill="#1B1464"
        opacity="0.7"
      />
      {/* Snow cap */}
      <path
        d="M 30 22 L 36 28 L 38 26 L 42 24 L 48 28 L 55 22 L 50 25 L 42 20 L 38 22 L 34 25 Z"
        fill="#ffffff"
        opacity="0.6"
      />
      {/* Name — upper area, light text */}
      <text
        x="10"
        y="12"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="5.5"
        fill="#ffffff"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="17"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.2"
        fill="#ffffff"
        opacity="0.8"
      >
        {data.nameEn}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1B1464" />
      {/* Subtle mountain ridge at very bottom */}
      <path
        d="M 0 55 L 20 45 L 35 48 L 50 42 L 65 47 L 80 44 L 91 50 L 91 55 Z"
        fill="#2D5F8A"
        opacity="0.3"
      />
      {/* Company */}
      <text
        x="45.5"
        y="15"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="3.5"
        fill="#F5D6C3"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="19.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        letterSpacing="0.2"
        fill="#D4856A"
      >
        {data.companyEn}
      </text>
      {/* Divider */}
      <line x1="30" y1="23" x2="61" y2="23" stroke="#D4856A" strokeWidth="0.15" opacity="0.4" />
      {/* Contact */}
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#F5D6C3"
        opacity="0.7"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="31.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#F5D6C3"
        opacity="0.7"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#F5D6C3"
        opacity="0.5"
      >
        {data.website}
      </text>
      <text
        x="45.5"
        y="41"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#F5D6C3"
        opacity="0.4"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 10. SAKURA (桜) — Rei Kawakubo: Abstract petal shapes, pink accents
// ============================================================
const sakuraTemplate: TemplateDefinition = {
  id: 'sakura',
  name: 'SAKURA',
  nameJa: '桜',
  category: 'japanese',
  designer: 'Rei Kawakubo',
  description: '抽象化された花弁が舞う。淡いピンクの前衛的な桜。',
  accentColor: '#D4728C',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Abstract sakura petals — simple elliptical shapes scattered */}
      <g opacity="0.12">
        <ellipse cx="72" cy="10" rx="5" ry="3" fill="#D4728C" transform="rotate(-30 72 10)" />
        <ellipse cx="80" cy="18" rx="4" ry="2.5" fill="#D4728C" transform="rotate(15 80 18)" />
        <ellipse cx="68" cy="20" rx="3.5" ry="2" fill="#E8A0B4" transform="rotate(-60 68 20)" />
        <ellipse cx="78" cy="6" rx="3" ry="1.8" fill="#E8A0B4" transform="rotate(40 78 6)" />
        <ellipse cx="85" cy="12" rx="3.5" ry="2" fill="#D4728C" transform="rotate(-10 85 12)" />
      </g>
      <g opacity="0.07">
        <ellipse cx="15" cy="45" rx="4" ry="2.5" fill="#D4728C" transform="rotate(20 15 45)" />
        <ellipse cx="8" cy="40" rx="3" ry="2" fill="#E8A0B4" transform="rotate(-45 8 40)" />
        <ellipse cx="22" cy="48" rx="3.5" ry="2" fill="#D4728C" transform="rotate(60 22 48)" />
      </g>
      {/* Name */}
      <text
        x="10"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        fill="#1a1a1a"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="26"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2.2"
        letterSpacing="0.2"
        fill="#D4728C"
      >
        {data.nameEn}
      </text>
      {/* Title */}
      <text
        x="10"
        y="32"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="#999999"
      >
        {data.titleJa}
      </text>
      {/* Accent line */}
      <line x1="10" y1="35" x2="30" y2="35" stroke="#D4728C" strokeWidth="0.3" opacity="0.4" />
      {/* Company */}
      <text
        x="10"
        y="39.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2"
        fill="#666666"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1a1a1a" />
      {/* Abstract petals — glowing on dark */}
      <g opacity="0.15">
        <ellipse cx="70" cy="8" rx="5" ry="3" fill="#D4728C" transform="rotate(-20 70 8)" />
        <ellipse cx="78" cy="14" rx="4" ry="2.5" fill="#E8A0B4" transform="rotate(30 78 14)" />
        <ellipse cx="65" cy="16" rx="3.5" ry="2" fill="#D4728C" transform="rotate(-50 65 16)" />
        <ellipse cx="82" cy="5" rx="3" ry="1.8" fill="#E8A0B4" transform="rotate(10 82 5)" />
      </g>
      <g opacity="0.08">
        <ellipse cx="12" cy="46" rx="4" ry="2.5" fill="#D4728C" transform="rotate(25 12 46)" />
        <ellipse cx="20" cy="50" rx="3.5" ry="2" fill="#E8A0B4" transform="rotate(-35 20 50)" />
        <ellipse cx="6" cy="50" rx="3" ry="2" fill="#D4728C" transform="rotate(55 6 50)" />
      </g>
      {/* Company */}
      <text
        x="45.5"
        y="20"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="3.5"
        fill="#F5F0E8"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="25"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        letterSpacing="0.2"
        fill="#D4728C"
      >
        {data.companyEn}
      </text>
      {/* Contact info */}
      <line x1="30" y1="29" x2="61" y2="29" stroke="#D4728C" strokeWidth="0.1" opacity="0.3" />
      <text
        x="45.5"
        y="34"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#F5F0E8"
        opacity="0.7"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="37.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#F5F0E8"
        opacity="0.7"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="41"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#F5F0E8"
        opacity="0.5"
      >
        {data.website}
      </text>
      <text
        x="45.5"
        y="48"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#F5F0E8"
        opacity="0.35"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// Export all Japanese templates
// ============================================================
export const japaneseTemplates: TemplateDefinition[] = [
  waTemplate,
  zenTemplate,
  kamonTemplate,
  washiTemplate,
  sumiTemplate,
  origamiTemplate,
  norenTemplate,
  shojiTemplate,
  fujiTemplate,
  sakuraTemplate,
];
