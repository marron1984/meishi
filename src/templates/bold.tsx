import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. IMPACT (衝) — Maximum impact
// Full black background, oversized white text, heavy weight
// ============================================================
const impactTemplate: TemplateDefinition = {
  id: 'bold-impact',
  name: 'IMPACT',
  nameJa: '衝',
  category: 'bold',
  designer: 'David Carson',
  description: '衝撃の一撃。圧倒的な存在感で目を射抜く。',
  accentColor: '#ffffff',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#000000" />
      {/* Oversized name */}
      <text
        x="8"
        y="28"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="10"
        letterSpacing="-0.5"
        fill="#ffffff"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="36"
        fontFamily="'Inter', sans-serif"
        fontWeight="800"
        fontSize="2.5"
        letterSpacing="0.5"
        fill="#ffffff"
        opacity="0.5"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Title bar */}
      <rect x="8" y="40" width="30" height="3" fill="#ffffff" />
      <text
        x="9.5"
        y="42.2"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="1.5"
        fill="#000000"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#000000" />
      {/* Bold company name */}
      <text
        x="8"
        y="15"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="4"
        fill="#ffffff"
      >
        {data.companyJa}
      </text>
      <text
        x="8"
        y="20"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="1.6"
        letterSpacing="0.3"
        fill="#ffffff"
        opacity="0.4"
      >
        {data.companyEn.toUpperCase()}
      </text>
      {/* Thick divider */}
      <rect x="8" y="23" width="75" height="0.8" fill="#ffffff" />
      {/* Contact - bold */}
      <text
        x="8"
        y="30"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="1.6"
        fill="#ffffff"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="34"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="1.6"
        fill="#ffffff"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="38"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="1.6"
        fill="#ffffff"
      >
        {data.website}
      </text>
      <rect x="8" y="41" width="75" height="0.4" fill="#ffffff" opacity="0.3" />
      <text
        x="8"
        y="47"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="1.3"
        fill="#ffffff"
        opacity="0.5"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 2. THUNDER (雷) — Electrifying diagonal energy
// Diagonal split with high contrast, lightning bolt motif
// ============================================================
const thunderTemplate: TemplateDefinition = {
  id: 'bold-thunder',
  name: 'THUNDER',
  nameJa: '雷',
  category: 'bold',
  designer: 'Neville Brody',
  description: '雷の閃光。斜めに裂ける電撃のエネルギー。',
  accentColor: '#FFD700',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1a1a1a" />
      {/* Diagonal lightning bolt split */}
      <polygon points="50,0 55,22 45,22 52,55 48,55 41,22 51,22 46,0" fill="#FFD700" opacity="0.08" />
      {/* Bold diagonal line */}
      <line x1="48" y1="0" x2="43" y2="55" stroke="#FFD700" strokeWidth="0.4" />
      {/* Name on left */}
      <text
        x="8"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="7"
        fill="#ffffff"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="29"
        fontFamily="'Inter', sans-serif"
        fontWeight="800"
        fontSize="2.2"
        letterSpacing="0.3"
        fill="#FFD700"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Title */}
      <text
        x="8"
        y="40"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="1.6"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      {/* Electric accent */}
      <rect x="8" y="44" width="15" height="0.5" fill="#FFD700" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1a1a1a" />
      {/* Diagonal accent */}
      <line x1="60" y1="0" x2="55" y2="55" stroke="#FFD700" strokeWidth="0.2" opacity="0.3" />
      {/* Company */}
      <text
        x="8"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="800"
        fontSize="3"
        fill="#ffffff"
      >
        {data.companyJa}
      </text>
      <text
        x="8"
        y="19"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="1.5"
        fill="#FFD700"
        opacity="0.6"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <rect x="8" y="22" width="40" height="0.4" fill="#FFD700" />
      {/* Contact */}
      <text
        x="8"
        y="28"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="1.5"
        fill="#cccccc"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="32"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="1.5"
        fill="#cccccc"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="36"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="1.5"
        fill="#cccccc"
      >
        {data.website}
      </text>
      <text
        x="8"
        y="46"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.2"
        fill="#666666"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 3. TITAN (巨) — Titanic scale
// Enormous cropped characters, architectural solidity
// ============================================================
const titanTemplate: TemplateDefinition = {
  id: 'bold-titan',
  name: 'TITAN',
  nameJa: '巨',
  category: 'bold',
  designer: 'Massimo Vignelli',
  description: '巨人の文字。画面を超えるスケールの存在感。',
  accentColor: '#1a1a1a',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f0f0f0" />
      {/* Enormous cropped first character as background */}
      <text
        x="-5"
        y="55"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="55"
        fill="#1a1a1a"
        opacity="0.06"
      >
        巨
      </text>
      {/* Name */}
      <text
        x="8"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="8"
        letterSpacing="-0.5"
        fill="#1a1a1a"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="29"
        fontFamily="'Inter', sans-serif"
        fontWeight="800"
        fontSize="2.5"
        letterSpacing="0.3"
        fill="#1a1a1a"
        opacity="0.4"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Thick bottom bar */}
      <rect x="0" y="48" width="91" height="7" fill="#1a1a1a" />
      <text
        x="8"
        y="53"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="1.8"
        fill="#f0f0f0"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f0f0f0" />
      {/* Top heavy bar */}
      <rect x="0" y="0" width="91" height="7" fill="#1a1a1a" />
      <text
        x="8"
        y="5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="800"
        fontSize="2.8"
        fill="#f0f0f0"
      >
        {data.companyJa}
      </text>
      <text
        x="8"
        y="14"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="1.5"
        fill="#1a1a1a"
        opacity="0.4"
      >
        {data.companyEn.toUpperCase()}
      </text>
      {/* Thick divider */}
      <rect x="8" y="17" width="75" height="0.6" fill="#1a1a1a" />
      {/* Contact bold */}
      <text
        x="8"
        y="24"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="1.6"
        fill="#1a1a1a"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="28.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="1.6"
        fill="#1a1a1a"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="33"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="1.6"
        fill="#1a1a1a"
      >
        {data.website}
      </text>
      <rect x="8" y="36" width="75" height="0.3" fill="#1a1a1a" opacity="0.3" />
      <text
        x="8"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="1.3"
        fill="#666666"
      >
        〒{data.zipCode}
      </text>
      <text
        x="8"
        y="46"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="1.3"
        fill="#666666"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 4. SHOUT (叫) — Screaming typography
// Red on black, aggressive layout, tilted elements
// ============================================================
const shoutTemplate: TemplateDefinition = {
  id: 'bold-shout',
  name: 'SHOUT',
  nameJa: '叫',
  category: 'bold',
  designer: 'Stefan Sagmeister',
  description: '絶叫のタイポグラフィ。赤と黒が叫ぶ衝動。',
  accentColor: '#CC0000',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0a0a0a" />
      {/* Red accent blocks */}
      <rect x="0" y="0" width="4" height="55" fill="#CC0000" />
      <rect x="0" y="0" width="91" height="3" fill="#CC0000" />
      {/* Name - large */}
      <text
        x="12"
        y="26"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="8"
        fill="#CC0000"
      >
        {data.nameJa}
      </text>
      <text
        x="12"
        y="33"
        fontFamily="'Inter', sans-serif"
        fontWeight="900"
        fontSize="2.5"
        letterSpacing="0.5"
        fill="#ffffff"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Title in red bar */}
      <rect x="12" y="38" width="35" height="3.5" fill="#CC0000" />
      <text
        x="13.5"
        y="40.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="1.6"
        fill="#ffffff"
      >
        {data.titleJa}
      </text>
      {/* Exclamation accent */}
      <text
        x="82"
        y="48"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="900"
        fontSize="6"
        fill="#CC0000"
        opacity="0.15"
      >
        !
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0a0a0a" />
      {/* Red edge accents */}
      <rect x="87" y="0" width="4" height="55" fill="#CC0000" />
      <rect x="0" y="52" width="91" height="3" fill="#CC0000" />
      {/* Company */}
      <text
        x="8"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="3.5"
        fill="#CC0000"
      >
        {data.companyJa}
      </text>
      <text
        x="8"
        y="19"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="1.5"
        fill="#666666"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <rect x="8" y="22" width="70" height="0.5" fill="#CC0000" />
      {/* Contact */}
      <text
        x="8"
        y="29"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="1.5"
        fill="#ffffff"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="33.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="1.5"
        fill="#ffffff"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="38"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="1.5"
        fill="#ffffff"
      >
        {data.website}
      </text>
      <text
        x="8"
        y="47"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="1.2"
        fill="#666666"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 5. HEAVY (重) — Heavy weight, centered mass
// Dense centered block of text, maximum weight
// ============================================================
const heavyTemplate: TemplateDefinition = {
  id: 'bold-heavy',
  name: 'HEAVY',
  nameJa: '重',
  category: 'bold',
  designer: 'Paula Scher',
  description: '重力のタイポ。文字の塊が中央に鎮座する重厚感。',
  accentColor: '#2C3E50',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ECF0F1" />
      {/* Heavy center block */}
      <rect x="10" y="10" width="71" height="35" fill="#2C3E50" />
      {/* Name inside block */}
      <text
        x="45.5"
        y="25"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="7"
        fill="#ECF0F1"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="800"
        fontSize="2.2"
        letterSpacing="0.5"
        fill="#ECF0F1"
        opacity="0.6"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="39"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="1.6"
        fill="#ECF0F1"
        opacity="0.4"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ECF0F1" />
      {/* Top heavy bar */}
      <rect x="0" y="0" width="91" height="18" fill="#2C3E50" />
      <text
        x="45.5"
        y="10"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="3.5"
        fill="#ECF0F1"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="15"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="1.4"
        fill="#ECF0F1"
        opacity="0.5"
      >
        {data.companyEn.toUpperCase()}
      </text>
      {/* Contact below */}
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="1.6"
        fill="#2C3E50"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="31.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="1.6"
        fill="#2C3E50"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="1.6"
        fill="#2C3E50"
      >
        {data.website}
      </text>
      <rect x="20" y="39" width="51" height="0.3" fill="#2C3E50" opacity="0.3" />
      <text
        x="45.5"
        y="45"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="1.2"
        fill="#7F8C8D"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 6. FORCE (力) — Force and power
// Navy and gold, strong geometric presence
// ============================================================
const forceTemplate: TemplateDefinition = {
  id: 'bold-force',
  name: 'FORCE',
  nameJa: '力',
  category: 'bold',
  designer: 'Aaron Siskind',
  description: '力の結晶。紺青と金が放つ不動の威厳。',
  accentColor: '#DAA520',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0A1628" />
      {/* Gold accent bar */}
      <rect x="0" y="0" width="3" height="55" fill="#DAA520" />
      {/* Diagonal gold line */}
      <line x1="3" y1="55" x2="91" y2="40" stroke="#DAA520" strokeWidth="0.15" opacity="0.3" />
      {/* Name */}
      <text
        x="12"
        y="23"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="7.5"
        fill="#ffffff"
      >
        {data.nameJa}
      </text>
      <text
        x="12"
        y="30"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="2.2"
        letterSpacing="0.4"
        fill="#DAA520"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Title */}
      <text
        x="12"
        y="38"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="1.6"
        fill="#6B7B9B"
      >
        {data.titleJa}
      </text>
      {/* Gold bottom accent */}
      <rect x="12" y="45" width="20" height="0.5" fill="#DAA520" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0A1628" />
      <rect x="88" y="0" width="3" height="55" fill="#DAA520" />
      {/* Company */}
      <text
        x="82"
        y="14"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="800"
        fontSize="3"
        fill="#ffffff"
      >
        {data.companyJa}
      </text>
      <text
        x="82"
        y="19"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="1.4"
        fill="#DAA520"
        opacity="0.6"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <rect x="40" y="22" width="42" height="0.4" fill="#DAA520" />
      {/* Contact */}
      <text
        x="82"
        y="28"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="1.5"
        fill="#8B9BBB"
      >
        {data.tel}
      </text>
      <text
        x="82"
        y="32"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="1.5"
        fill="#8B9BBB"
      >
        {data.email}
      </text>
      <text
        x="82"
        y="36"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="1.5"
        fill="#8B9BBB"
      >
        {data.website}
      </text>
      <text
        x="82"
        y="46"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.2"
        fill="#4A5A7A"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 7. GIANT (大) — Giant letterforms
// Single kanji character as background, oversized
// ============================================================
const giantTemplate: TemplateDefinition = {
  id: 'bold-giant',
  name: 'GIANT',
  nameJa: '大',
  category: 'bold',
  designer: 'Herb Lubalin',
  description: '大の一字。一文字が空間を支配する究極の大胆さ。',
  accentColor: '#E74C3C',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Giant background character */}
      <text
        x="55"
        y="52"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="60"
        fill="#E74C3C"
        opacity="0.06"
      >
        大
      </text>
      {/* Name overlaid */}
      <text
        x="10"
        y="25"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="8"
        fill="#1a1a1a"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Inter', sans-serif"
        fontWeight="800"
        fontSize="2.2"
        letterSpacing="0.3"
        fill="#E74C3C"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Red dot + title */}
      <circle cx="12" cy="39.5" r="1.2" fill="#E74C3C" />
      <text
        x="16"
        y="41"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="1.6"
        fill="#666666"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Red top bar */}
      <rect x="0" y="0" width="91" height="2" fill="#E74C3C" />
      {/* Company */}
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="3"
        fill="#1a1a1a"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="19"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="1.5"
        fill="#E74C3C"
        opacity="0.6"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <rect x="10" y="22" width="71" height="0.5" fill="#1a1a1a" />
      {/* Contact */}
      <text
        x="10"
        y="28"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="1.5"
        fill="#333333"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="1.5"
        fill="#333333"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="1.5"
        fill="#333333"
      >
        {data.website}
      </text>
      <rect x="10" y="39" width="71" height="0.3" fill="#1a1a1a" opacity="0.2" />
      <text
        x="10"
        y="45"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="1.2"
        fill="#888888"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
      {/* Red bottom bar */}
      <rect x="0" y="53" width="91" height="2" fill="#E74C3C" />
    </g>
  ),
};

// ============================================================
// 8. CRUSH (砕) — Fragmented, broken grid
// Overlapping blocks creating crushed, layered effect
// ============================================================
const crushTemplate: TemplateDefinition = {
  id: 'bold-crush',
  name: 'CRUSH',
  nameJa: '砕',
  category: 'bold',
  designer: 'Wolfgang Weingart',
  description: '砕けるグリッド。崩壊したレイアウトの中の秩序。',
  accentColor: '#8E44AD',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1a1a1a" />
      {/* Crushed overlapping blocks */}
      <rect x="5" y="3" width="35" height="20" fill="#8E44AD" opacity="0.12" />
      <rect x="30" y="10" width="40" height="15" fill="#8E44AD" opacity="0.08" />
      <rect x="55" y="0" width="30" height="25" fill="#8E44AD" opacity="0.05" />
      {/* Bottom fragment */}
      <rect x="0" y="42" width="50" height="13" fill="#8E44AD" opacity="0.1" />
      {/* Name - bold layered */}
      <text
        x="10"
        y="26"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="8"
        fill="#8E44AD"
        opacity="0.3"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="24"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="8"
        fill="#ffffff"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="32"
        fontFamily="'Inter', sans-serif"
        fontWeight="800"
        fontSize="2.2"
        letterSpacing="0.3"
        fill="#8E44AD"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="8"
        y="40"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="1.6"
        fill="#777777"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1a1a1a" />
      {/* Fragments */}
      <rect x="60" y="0" width="31" height="12" fill="#8E44AD" opacity="0.1" />
      <rect x="0" y="45" width="40" height="10" fill="#8E44AD" opacity="0.08" />
      {/* Company */}
      <text
        x="8"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="3"
        fill="#ffffff"
      >
        {data.companyJa}
      </text>
      <text
        x="8"
        y="19"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="1.4"
        fill="#8E44AD"
        opacity="0.6"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <rect x="8" y="22" width="60" height="0.5" fill="#8E44AD" />
      {/* Contact */}
      <text
        x="8"
        y="28"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="1.5"
        fill="#cccccc"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="32"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="1.5"
        fill="#cccccc"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="36"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="1.5"
        fill="#cccccc"
      >
        {data.website}
      </text>
      <text
        x="8"
        y="46"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.2"
        fill="#555555"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 9. MEGA (超) — Super-sized everything
// All caps, full-bleed color, maximum presence
// ============================================================
const megaTemplate: TemplateDefinition = {
  id: 'bold-mega',
  name: 'MEGA',
  nameJa: '超',
  category: 'bold',
  designer: 'Milton Glaser',
  description: '超越のデザイン。すべてが最大で、すべてが主役。',
  accentColor: '#FF4500',
  renderFront: (data: CardData) => (
    <g>
      {/* Full bleed orange-red */}
      <rect width="91" height="55" fill="#FF4500" />
      {/* White block for text */}
      <rect x="6" y="6" width="79" height="43" fill="#ffffff" />
      {/* Mega name */}
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="9"
        fill="#FF4500"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="900"
        fontSize="2.8"
        letterSpacing="0.5"
        fill="#1a1a1a"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="40"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="1.8"
        fill="#FF4500"
        opacity="0.6"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FF4500" />
      <rect x="6" y="6" width="79" height="43" fill="#ffffff" />
      {/* Company */}
      <text
        x="45.5"
        y="15"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="3"
        fill="#FF4500"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="20"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="1.5"
        fill="#1a1a1a"
        opacity="0.5"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <rect x="20" y="23" width="51" height="0.5" fill="#FF4500" />
      {/* Contact */}
      <text
        x="45.5"
        y="29"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="1.5"
        fill="#1a1a1a"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="33"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="1.5"
        fill="#1a1a1a"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="37"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="1.5"
        fill="#1a1a1a"
      >
        {data.website}
      </text>
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="1.2"
        fill="#FF4500"
        opacity="0.6"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 10. PRIME (首) — Prime, first, chief
// Split layout with strong vertical divider
// ============================================================
const primeTemplate: TemplateDefinition = {
  id: 'bold-prime',
  name: 'PRIME',
  nameJa: '首',
  category: 'bold',
  designer: 'Saul Bass',
  description: '首位の証。垂直の分断が生む圧倒的な構成力。',
  accentColor: '#1a1a1a',
  renderFront: (data: CardData) => (
    <g>
      {/* Left half black, right half white */}
      <rect x="0" y="0" width="45" height="55" fill="#1a1a1a" />
      <rect x="45" y="0" width="46" height="55" fill="#ffffff" />
      {/* Bold vertical divider */}
      <rect x="43.5" y="0" width="3" height="55" fill="#CC0000" />
      {/* Name on dark side */}
      <text
        x="6"
        y="24"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="6"
        fill="#ffffff"
      >
        {data.nameJa}
      </text>
      {/* English name on light side */}
      <text
        x="50"
        y="24"
        fontFamily="'Inter', sans-serif"
        fontWeight="800"
        fontSize="2.5"
        fill="#1a1a1a"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Title spanning */}
      <text
        x="6"
        y="36"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="1.5"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      <text
        x="50"
        y="36"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="1.5"
        fill="#888888"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect x="0" y="0" width="45" height="55" fill="#1a1a1a" />
      <rect x="45" y="0" width="46" height="55" fill="#ffffff" />
      <rect x="43.5" y="0" width="3" height="55" fill="#CC0000" />
      {/* Company on dark side */}
      <text
        x="6"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="800"
        fontSize="2.5"
        fill="#ffffff"
      >
        {data.companyJa}
      </text>
      <text
        x="6"
        y="19"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.2"
        fill="#666666"
      >
        {data.companyEn}
      </text>
      {/* Contact on light side */}
      <text
        x="50"
        y="14"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="1.5"
        fill="#1a1a1a"
      >
        {data.tel}
      </text>
      <text
        x="50"
        y="19"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="1.5"
        fill="#1a1a1a"
      >
        {data.email}
      </text>
      <text
        x="50"
        y="24"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="1.5"
        fill="#1a1a1a"
      >
        {data.website}
      </text>
      {/* Address on dark side */}
      <text
        x="6"
        y="36"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.1"
        fill="#555555"
      >
        〒{data.zipCode}
      </text>
      <text
        x="6"
        y="40"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.1"
        fill="#555555"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

export const boldTemplates: TemplateDefinition[] = [
  impactTemplate,
  thunderTemplate,
  titanTemplate,
  shoutTemplate,
  heavyTemplate,
  forceTemplate,
  giantTemplate,
  crushTemplate,
  megaTemplate,
  primeTemplate,
];
