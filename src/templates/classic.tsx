import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. ROMAN (羅馬) — Roman classical, column proportions
// Pediment shapes, classical column lines, imperial order
// ============================================================
const romanTemplate: TemplateDefinition = {
  id: 'classic-roman',
  name: 'ROMAN',
  nameJa: '羅馬',
  category: 'classic',
  designer: 'Classical Scholar',
  description: 'ローマの威厳。列柱の比例が生む古典の秩序美。',
  accentColor: '#1B2A4A',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFEF2" />
      {/* Pediment triangle */}
      <path d="M25,8 L45.5,3 L66,8" fill="none" stroke="#1B2A4A" strokeWidth="0.2" opacity="0.3" />
      <line x1="25" y1="8" x2="66" y2="8" stroke="#1B2A4A" strokeWidth="0.15" opacity="0.25" />
      {/* Column lines */}
      <line x1="28" y1="8" x2="28" y2="14" stroke="#1B2A4A" strokeWidth="0.15" opacity="0.2" />
      <line x1="63" y1="8" x2="63" y2="14" stroke="#1B2A4A" strokeWidth="0.15" opacity="0.2" />
      {/* Column base */}
      <line x1="26" y1="14" x2="30" y2="14" stroke="#1B2A4A" strokeWidth="0.1" opacity="0.2" />
      <line x1="61" y1="14" x2="65" y2="14" stroke="#1B2A4A" strokeWidth="0.1" opacity="0.2" />
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="600"
        fontSize="6"
        letterSpacing="0.5"
        fill="#1B2A4A"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.4"
        fill="#4A5A7A"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Decorative rule */}
      <line x1="30" y1="34" x2="61" y2="34" stroke="#1B2A4A" strokeWidth="0.15" opacity="0.3" />
      <circle cx="30" cy="34" r="0.3" fill="#1B2A4A" opacity="0.3" />
      <circle cx="61" cy="34" r="0.3" fill="#1B2A4A" opacity="0.3" />
      <text
        x="45.5"
        y="39"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#6B7B9A"
      >
        {data.titleJa}
      </text>
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#6B7B9A"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFEF2" />
      {/* Simple classical border */}
      <rect x="6" y="6" width="79" height="43" fill="none" stroke="#1B2A4A" strokeWidth="0.12" opacity="0.2" />
      <rect x="7.5" y="7.5" width="76" height="40" fill="none" stroke="#1B2A4A" strokeWidth="0.08" opacity="0.15" />
      <text
        x="45.5"
        y="15"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="600"
        fontSize="2.2"
        letterSpacing="0.3"
        fill="#1B2A4A"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="19"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        letterSpacing="0.3"
        fill="#4A5A7A"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <line x1="25" y1="22" x2="66" y2="22" stroke="#1B2A4A" strokeWidth="0.1" opacity="0.2" />
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#4A5A7A"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#4A5A7A"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#4A5A7A"
      >
        {data.website}
      </text>
      <line x1="25" y1="39" x2="66" y2="39" stroke="#1B2A4A" strokeWidth="0.1" opacity="0.2" />
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#8B9BBB"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 2. COPPERPLATE (銅板) — Copperplate engraving style
// Fine engraved lines, formal script feel, intaglio print
// ============================================================
const copperplateTemplate: TemplateDefinition = {
  id: 'classic-copperplate',
  name: 'COPPERPLATE',
  nameJa: '銅板',
  category: 'classic',
  designer: 'Master Engraver',
  description: '銅版画の精緻。ビュランが刻む格式の極み。',
  accentColor: '#3C2415',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFEF2" />
      {/* Fine engraved border - double rule */}
      <rect x="5" y="5" width="81" height="45" fill="none" stroke="#3C2415" strokeWidth="0.2" opacity="0.3" />
      <rect x="6.5" y="6.5" width="78" height="42" fill="none" stroke="#3C2415" strokeWidth="0.08" opacity="0.2" />
      {/* Corner ornaments */}
      <path d="M5,5 L9,5 M5,5 L5,9" stroke="#3C2415" strokeWidth="0.25" opacity="0.35" />
      <path d="M86,5 L82,5 M86,5 L86,9" stroke="#3C2415" strokeWidth="0.25" opacity="0.35" />
      <path d="M5,50 L9,50 M5,50 L5,46" stroke="#3C2415" strokeWidth="0.25" opacity="0.35" />
      <path d="M86,50 L82,50 M86,50 L86,46" stroke="#3C2415" strokeWidth="0.25" opacity="0.35" />
      {/* Fine hatching under name */}
      {[14, 14.3, 14.6, 14.9, 15.2, 15.5, 15.8].map((y, i) => (
        <line key={`classic-cp-hf-${i}`} x1="30" y1={y} x2="61" y2={y} stroke="#3C2415" strokeWidth="0.03" opacity="0.1" />
      ))}
      <text
        x="45.5"
        y="23"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="600"
        fontSize="5.5"
        letterSpacing="0.3"
        fill="#3C2415"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="29"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.5"
        fontStyle="italic"
        fill="#6B5040"
      >
        {data.nameEn}
      </text>
      <line x1="25" y1="33" x2="66" y2="33" stroke="#3C2415" strokeWidth="0.1" opacity="0.25" />
      <text
        x="45.5"
        y="38"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#8B6B50"
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
        fill="#8B6B50"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFEF2" />
      <rect x="5" y="5" width="81" height="45" fill="none" stroke="#3C2415" strokeWidth="0.2" opacity="0.3" />
      <rect x="6.5" y="6.5" width="78" height="42" fill="none" stroke="#3C2415" strokeWidth="0.08" opacity="0.2" />
      <text
        x="45.5"
        y="15"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="600"
        fontSize="2.2"
        letterSpacing="0.3"
        fill="#3C2415"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="19"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.4"
        letterSpacing="0.3"
        fontStyle="italic"
        fill="#6B5040"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="22.5" x2="71" y2="22.5" stroke="#3C2415" strokeWidth="0.08" opacity="0.2" />
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#6B5040"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#6B5040"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#6B5040"
      >
        {data.website}
      </text>
      <line x1="20" y1="39.5" x2="71" y2="39.5" stroke="#3C2415" strokeWidth="0.08" opacity="0.2" />
      <text
        x="45.5"
        y="44.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#8B6B50"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 3. LINEN (麻) — Linen textured paper, warm cream, understated
// Soft fabric feel, natural fibers, warm neutral palette
// ============================================================
const linenTemplate: TemplateDefinition = {
  id: 'classic-linen',
  name: 'LINEN',
  nameJa: '麻',
  category: 'classic',
  designer: 'Paper Mill Master',
  description: '麻紙の手触り。素材が語る上質な日常。',
  accentColor: '#6B5040',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <pattern id="classic-linen-tex" width="3" height="3" patternUnits="userSpaceOnUse">
          <rect width="3" height="3" fill="#F8F4EC" />
          <line x1="0" y1="0.5" x2="3" y2="0.5" stroke="#E8E0D0" strokeWidth="0.04" />
          <line x1="0" y1="1.5" x2="3" y2="1.5" stroke="#E8E0D0" strokeWidth="0.04" />
          <line x1="0" y1="2.5" x2="3" y2="2.5" stroke="#E8E0D0" strokeWidth="0.04" />
          <line x1="0.5" y1="0" x2="0.5" y2="3" stroke="#E8E0D0" strokeWidth="0.03" />
          <line x1="1.5" y1="0" x2="1.5" y2="3" stroke="#E8E0D0" strokeWidth="0.03" />
          <line x1="2.5" y1="0" x2="2.5" y2="3" stroke="#E8E0D0" strokeWidth="0.03" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#classic-linen-tex)" />
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.4"
        fill="#3C2415"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.4"
        fill="#6B5040"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#8B7B60"
      >
        {data.titleJa}
      </text>
      <text
        x="45.5"
        y="42"
        textAnchor="middle"
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
      <defs>
        <pattern id="classic-linen-tex-b" width="3" height="3" patternUnits="userSpaceOnUse">
          <rect width="3" height="3" fill="#F8F4EC" />
          <line x1="0" y1="0.5" x2="3" y2="0.5" stroke="#E8E0D0" strokeWidth="0.04" />
          <line x1="0" y1="1.5" x2="3" y2="1.5" stroke="#E8E0D0" strokeWidth="0.04" />
          <line x1="0" y1="2.5" x2="3" y2="2.5" stroke="#E8E0D0" strokeWidth="0.04" />
          <line x1="0.5" y1="0" x2="0.5" y2="3" stroke="#E8E0D0" strokeWidth="0.03" />
          <line x1="1.5" y1="0" x2="1.5" y2="3" stroke="#E8E0D0" strokeWidth="0.03" />
          <line x1="2.5" y1="0" x2="2.5" y2="3" stroke="#E8E0D0" strokeWidth="0.03" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#classic-linen-tex-b)" />
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#3C2415"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="18"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#6B5040"
      >
        {data.companyEn}
      </text>
      <line x1="25" y1="22" x2="66" y2="22" stroke="#C4B494" strokeWidth="0.1" opacity="0.4" />
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#6B5040"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#6B5040"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#6B5040"
      >
        {data.website}
      </text>
      <line x1="25" y1="40" x2="66" y2="40" stroke="#C4B494" strokeWidth="0.1" opacity="0.4" />
      <text
        x="45.5"
        y="45"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#8B7B60"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 4. EMBASSY (大使館) — Diplomatic formal style
// Navy and gold, crest placeholder, formal hierarchy
// ============================================================
const embassyTemplate: TemplateDefinition = {
  id: 'classic-embassy',
  name: 'EMBASSY',
  nameJa: '大使館',
  category: 'classic',
  designer: 'Diplomatic Designer',
  description: '外交の格式。紋章が示す信頼と権威の証。',
  accentColor: '#1B2A4A',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFEF2" />
      {/* Gold top stripe */}
      <rect x="0" y="0" width="91" height="1.5" fill="#C4A35A" opacity="0.3" />
      <rect x="0" y="1.5" width="91" height="0.3" fill="#1B2A4A" opacity="0.2" />
      {/* Crest circle */}
      <circle cx="45.5" cy="10" r="4" fill="none" stroke="#C4A35A" strokeWidth="0.15" opacity="0.3" />
      <circle cx="45.5" cy="10" r="3" fill="none" stroke="#C4A35A" strokeWidth="0.1" opacity="0.2" />
      {/* Shield shape inside */}
      <path d="M43.5,8 L47.5,8 L47.5,11 L45.5,12.5 L43.5,11 Z" fill="none" stroke="#1B2A4A" strokeWidth="0.12" opacity="0.25" />
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5"
        letterSpacing="1"
        fill="#1B2A4A"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.5"
        fill="#4A5A7A"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <line x1="30" y1="30" x2="61" y2="30" stroke="#C4A35A" strokeWidth="0.12" opacity="0.3" />
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#6B7B9A"
      >
        {data.titleJa}
      </text>
      <text
        x="45.5"
        y="41"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#1B2A4A"
      >
        {data.companyJa}
      </text>
      {/* Gold bottom stripe */}
      <rect x="0" y="53.2" width="91" height="0.3" fill="#1B2A4A" opacity="0.2" />
      <rect x="0" y="53.5" width="91" height="1.5" fill="#C4A35A" opacity="0.3" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFEF2" />
      <rect x="0" y="0" width="91" height="1.5" fill="#C4A35A" opacity="0.3" />
      <rect x="0" y="1.5" width="91" height="0.3" fill="#1B2A4A" opacity="0.2" />
      <text
        x="45.5"
        y="12"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        letterSpacing="0.4"
        fill="#1B2A4A"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="16"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        letterSpacing="0.3"
        fill="#4A5A7A"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <line x1="20" y1="20" x2="71" y2="20" stroke="#C4A35A" strokeWidth="0.1" opacity="0.3" />
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#4A5A7A"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#4A5A7A"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="34"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#4A5A7A"
      >
        {data.website}
      </text>
      <line x1="20" y1="38" x2="71" y2="38" stroke="#C4A35A" strokeWidth="0.1" opacity="0.3" />
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#8B9BBB"
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
        fill="#8B9BBB"
      >
        {data.addressJa}
      </text>
      <rect x="0" y="53.2" width="91" height="0.3" fill="#1B2A4A" opacity="0.2" />
      <rect x="0" y="53.5" width="91" height="1.5" fill="#C4A35A" opacity="0.3" />
    </g>
  ),
};

// ============================================================
// 5. HERITAGE (遺産) — Heritage style, established tradition
// Burgundy accents, formal typography, aged elegance
// ============================================================
const heritageTemplate: TemplateDefinition = {
  id: 'classic-heritage',
  name: 'HERITAGE',
  nameJa: '遺産',
  category: 'classic',
  designer: 'Heritage Keeper',
  description: '受け継がれる格式。時を越えて輝く伝統の美。',
  accentColor: '#6B2D3E',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFEF2" />
      {/* Burgundy left accent bar */}
      <rect x="0" y="0" width="2.5" height="55" fill="#6B2D3E" opacity="0.7" />
      {/* Thin gold inner line */}
      <line x1="2.5" y1="0" x2="2.5" y2="55" stroke="#C4A35A" strokeWidth="0.15" opacity="0.4" />
      <text
        x="10"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#3C1A28"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="26"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.3"
        fill="#6B2D3E"
      >
        {data.nameEn}
      </text>
      <line x1="10" y1="30" x2="55" y2="30" stroke="#6B2D3E" strokeWidth="0.1" opacity="0.25" />
      <text
        x="10"
        y="36"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#8B5060"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#3C1A28"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFEF2" />
      <rect x="88.5" y="0" width="2.5" height="55" fill="#6B2D3E" opacity="0.7" />
      <line x1="88.5" y1="0" x2="88.5" y2="55" stroke="#C4A35A" strokeWidth="0.15" opacity="0.4" />
      <text
        x="80"
        y="14"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#3C1A28"
      >
        {data.companyJa}
      </text>
      <text
        x="80"
        y="18"
        textAnchor="end"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#6B2D3E"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="22" x2="80" y2="22" stroke="#6B2D3E" strokeWidth="0.08" opacity="0.2" />
      <text
        x="80"
        y="28"
        textAnchor="end"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#8B5060"
      >
        {data.tel}
      </text>
      <text
        x="80"
        y="32"
        textAnchor="end"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#8B5060"
      >
        {data.email}
      </text>
      <text
        x="80"
        y="36"
        textAnchor="end"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#8B5060"
      >
        {data.website}
      </text>
      <line x1="20" y1="40" x2="80" y2="40" stroke="#6B2D3E" strokeWidth="0.08" opacity="0.2" />
      <text
        x="80"
        y="45"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#A07080"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 6. GUILD (組合) — Medieval guild, craft emblem, structured
// Structured compartments, emblem space, guild hierarchy
// ============================================================
const guildTemplate: TemplateDefinition = {
  id: 'classic-guild',
  name: 'GUILD',
  nameJa: '組合',
  category: 'classic',
  designer: 'Guild Master',
  description: 'ギルドの誇り。職人たちの絆が刻む紋章の力。',
  accentColor: '#1B2A4A',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFEF2" />
      {/* Guild emblem - shield outline at top left */}
      <path
        d="M10,8 L22,8 L22,16 L16,20 L10,16 Z"
        fill="none"
        stroke="#1B2A4A"
        strokeWidth="0.2"
        opacity="0.3"
      />
      <path
        d="M11.5,9.5 L20.5,9.5 L20.5,15.5 L16,18.5 L11.5,15.5 Z"
        fill="none"
        stroke="#1B2A4A"
        strokeWidth="0.1"
        opacity="0.2"
      />
      {/* Cross in shield */}
      <line x1="16" y1="10" x2="16" y2="17" stroke="#1B2A4A" strokeWidth="0.1" opacity="0.15" />
      <line x1="12.5" y1="13" x2="19.5" y2="13" stroke="#1B2A4A" strokeWidth="0.1" opacity="0.15" />
      <text
        x="28"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5"
        letterSpacing="0.5"
        fill="#1B2A4A"
      >
        {data.nameJa}
      </text>
      <text
        x="28"
        y="19.5"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#4A5A7A"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <line x1="8" y1="25" x2="83" y2="25" stroke="#1B2A4A" strokeWidth="0.12" opacity="0.2" />
      <text
        x="10"
        y="32"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#6B7B9A"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="38"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#1B2A4A"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="44"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#6B7B9A"
      >
        {data.companyEn}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFEF2" />
      {/* Large faded guild shield watermark */}
      <path
        d="M35,5 L56,5 L56,20 L45.5,26 L35,20 Z"
        fill="none"
        stroke="#1B2A4A"
        strokeWidth="0.12"
        opacity="0.08"
      />
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#1B2A4A"
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
        fill="#4A5A7A"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="22" x2="71" y2="22" stroke="#1B2A4A" strokeWidth="0.08" opacity="0.2" />
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#4A5A7A"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#4A5A7A"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#4A5A7A"
      >
        {data.website}
      </text>
      <line x1="20" y1="40" x2="71" y2="40" stroke="#1B2A4A" strokeWidth="0.08" opacity="0.2" />
      <text
        x="45.5"
        y="45"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#8B9BBB"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 7. LIBRARY (書院) — Library / scholar's study
// Book-spine layout, scholarly, muted tones, bookplate style
// ============================================================
const libraryTemplate: TemplateDefinition = {
  id: 'classic-library',
  name: 'LIBRARY',
  nameJa: '書院',
  category: 'classic',
  designer: 'Librarian',
  description: '書院の静寂。積み重なる知の背表紙が並ぶ空間。',
  accentColor: '#3C2415',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E6" />
      {/* Book spine stripes on left */}
      <rect x="0" y="0" width="4" height="55" fill="#3C2415" opacity="0.8" />
      <rect x="4" y="0" width="2.5" height="55" fill="#6B2D3E" opacity="0.6" />
      <rect x="6.5" y="0" width="1.5" height="55" fill="#1B2A4A" opacity="0.7" />
      <rect x="8" y="0" width="3" height="55" fill="#5A4030" opacity="0.5" />
      {/* Thin gold lines between spines */}
      <line x1="4" y1="0" x2="4" y2="55" stroke="#C4A35A" strokeWidth="0.1" opacity="0.3" />
      <line x1="6.5" y1="0" x2="6.5" y2="55" stroke="#C4A35A" strokeWidth="0.1" opacity="0.3" />
      <line x1="8" y1="0" x2="8" y2="55" stroke="#C4A35A" strokeWidth="0.1" opacity="0.3" />
      <line x1="11" y1="0" x2="11" y2="55" stroke="#C4A35A" strokeWidth="0.1" opacity="0.3" />
      <text
        x="18"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.4"
        fill="#3C2415"
      >
        {data.nameJa}
      </text>
      <text
        x="18"
        y="28"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#6B5040"
      >
        {data.nameEn}
      </text>
      <text
        x="18"
        y="35"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#8B7B60"
      >
        {data.titleJa}
      </text>
      <text
        x="18"
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
      <rect width="91" height="55" fill="#F5F0E6" />
      {/* Bookplate frame */}
      <rect x="15" y="6" width="61" height="43" fill="none" stroke="#3C2415" strokeWidth="0.15" opacity="0.25" />
      <rect x="16.5" y="7.5" width="58" height="40" fill="none" stroke="#3C2415" strokeWidth="0.08" opacity="0.15" />
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="600"
        fontSize="1.2"
        letterSpacing="0.5"
        fill="#3C2415"
        opacity="0.5"
      >
        EX LIBRIS
      </text>
      <text
        x="45.5"
        y="19"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#3C2415"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="23"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#6B5040"
      >
        {data.companyEn}
      </text>
      <line x1="25" y1="26" x2="66" y2="26" stroke="#3C2415" strokeWidth="0.08" opacity="0.2" />
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#6B5040"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#6B5040"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="39"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#6B5040"
      >
        {data.website}
      </text>
      <text
        x="45.5"
        y="45"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#8B7B60"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 8. CROWN (王冠) — Royal, regal, crown motif
// Gold and navy, regal symmetry, crown symbol
// ============================================================
const crownTemplate: TemplateDefinition = {
  id: 'classic-crown',
  name: 'CROWN',
  nameJa: '王冠',
  category: 'classic',
  designer: 'Royal Designer',
  description: '王冠の威光。頂に輝く黄金の秩序。',
  accentColor: '#C4A35A',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1B2A4A" />
      {/* Crown symbol */}
      <path
        d="M40,6 L42,10 L44,6 L45.5,11 L47,6 L49,10 L51,6 L51,13 L40,13 Z"
        fill="none"
        stroke="#C4A35A"
        strokeWidth="0.2"
        opacity="0.5"
      />
      <line x1="40" y1="14" x2="51" y2="14" stroke="#C4A35A" strokeWidth="0.15" opacity="0.4" />
      {/* Three gems on crown */}
      <circle cx="42" cy="10.5" r="0.3" fill="#C4A35A" opacity="0.4" />
      <circle cx="45.5" cy="11.5" r="0.4" fill="#C4A35A" opacity="0.5" />
      <circle cx="49" cy="10.5" r="0.3" fill="#C4A35A" opacity="0.4" />
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.8"
        fill="#C4A35A"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.5"
        fill="#8B8050"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <line x1="25" y1="34" x2="66" y2="34" stroke="#C4A35A" strokeWidth="0.1" opacity="0.25" />
      <text
        x="45.5"
        y="39"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#8B8B6B"
      >
        {data.titleJa}
      </text>
      <text
        x="45.5"
        y="45"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#8B8B6B"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1B2A4A" />
      {/* Subtle crown watermark */}
      <path
        d="M38,3 L41,8 L43.5,3 L45.5,9 L47.5,3 L50,8 L53,3 L53,11 L38,11 Z"
        fill="none"
        stroke="#C4A35A"
        strokeWidth="0.08"
        opacity="0.1"
      />
      <text
        x="45.5"
        y="16"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#C4A35A"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="20"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#8B8050"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <line x1="20" y1="24" x2="71" y2="24" stroke="#C4A35A" strokeWidth="0.08" opacity="0.2" />
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#8B8050"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="34"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#8B8050"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="38"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#8B8050"
      >
        {data.website}
      </text>
      <line x1="20" y1="42" x2="71" y2="42" stroke="#C4A35A" strokeWidth="0.08" opacity="0.2" />
      <text
        x="45.5"
        y="47"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#8B8B6B"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 9. COURT (宮廷) — Court/palace style, baroque ornament
// Ornate frames, fleur-de-lis hints, palatial grandeur
// ============================================================
const courtTemplate: TemplateDefinition = {
  id: 'classic-court',
  name: 'COURT',
  nameJa: '宮廷',
  category: 'classic',
  designer: 'Court Designer',
  description: '宮廷の華麗さ。バロックの装飾が彩る壮麗な空間。',
  accentColor: '#6B2D3E',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFEF2" />
      {/* Ornate top border */}
      <path
        d="M10,6 Q20,3 30,6 Q40,3 45.5,6 Q51,3 61,6 Q71,3 81,6"
        fill="none"
        stroke="#6B2D3E"
        strokeWidth="0.15"
        opacity="0.3"
      />
      <path
        d="M10,7.5 Q20,5 30,7.5 Q40,5 45.5,7.5 Q51,5 61,7.5 Q71,5 81,7.5"
        fill="none"
        stroke="#6B2D3E"
        strokeWidth="0.08"
        opacity="0.2"
      />
      {/* Ornate bottom border */}
      <path
        d="M10,49 Q20,52 30,49 Q40,52 45.5,49 Q51,52 61,49 Q71,52 81,49"
        fill="none"
        stroke="#6B2D3E"
        strokeWidth="0.15"
        opacity="0.3"
      />
      <path
        d="M10,47.5 Q20,50 30,47.5 Q40,50 45.5,47.5 Q51,50 61,47.5 Q71,50 81,47.5"
        fill="none"
        stroke="#6B2D3E"
        strokeWidth="0.08"
        opacity="0.2"
      />
      {/* Center fleur-de-lis hint */}
      <path
        d="M44.5,10 Q45.5,8 46.5,10 M43,11 Q45.5,9 48,11 M44,12 L47,12"
        fill="none"
        stroke="#C4A35A"
        strokeWidth="0.12"
        opacity="0.3"
      />
      <text
        x="45.5"
        y="23"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="600"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#3C1A28"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="29"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.4"
        fontStyle="italic"
        fill="#6B2D3E"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#8B5060"
      >
        {data.titleJa}
      </text>
      <text
        x="45.5"
        y="42"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#8B5060"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFEF2" />
      {/* Ornate top/bottom */}
      <path
        d="M10,6 Q20,3 30,6 Q40,3 45.5,6 Q51,3 61,6 Q71,3 81,6"
        fill="none"
        stroke="#6B2D3E"
        strokeWidth="0.12"
        opacity="0.2"
      />
      <path
        d="M10,49 Q20,52 30,49 Q40,52 45.5,49 Q51,52 61,49 Q71,52 81,49"
        fill="none"
        stroke="#6B2D3E"
        strokeWidth="0.12"
        opacity="0.2"
      />
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="600"
        fontSize="2.2"
        fill="#3C1A28"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="18"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.4"
        fontStyle="italic"
        fill="#6B2D3E"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="22" x2="71" y2="22" stroke="#6B2D3E" strokeWidth="0.08" opacity="0.2" />
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#8B5060"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#8B5060"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#8B5060"
      >
        {data.website}
      </text>
      <line x1="20" y1="40" x2="71" y2="40" stroke="#6B2D3E" strokeWidth="0.08" opacity="0.2" />
      <text
        x="45.5"
        y="45"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#A07080"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 10. MANOR (館) — English manor house, country estate
// Deep green and brown, countryside estate feel, landed gentry
// ============================================================
const manorTemplate: TemplateDefinition = {
  id: 'classic-manor',
  name: 'MANOR',
  nameJa: '館',
  category: 'classic',
  designer: 'Estate Designer',
  description: '英国邸宅の風格。緑の庭園に佇む館の気品。',
  accentColor: '#2A4A2A',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F2E8" />
      {/* Dark green top band */}
      <rect x="0" y="0" width="91" height="8" fill="#2A4A2A" opacity="0.85" />
      {/* Gold trim line */}
      <line x1="0" y1="8" x2="91" y2="8" stroke="#C4A35A" strokeWidth="0.2" opacity="0.4" />
      {/* Company name in top band */}
      <text
        x="45.5"
        y="5.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.6"
        letterSpacing="0.5"
        fill="#C4A35A"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#2A4A2A"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.3"
        fill="#4A6A4A"
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
        fill="#6A8A6A"
      >
        {data.titleJa}
      </text>
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#2A4A2A"
      >
        {data.companyJa}
      </text>
      {/* Dark green bottom band */}
      <line x1="0" y1="47" x2="91" y2="47" stroke="#C4A35A" strokeWidth="0.2" opacity="0.4" />
      <rect x="0" y="47" width="91" height="8" fill="#2A4A2A" opacity="0.85" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F2E8" />
      <rect x="0" y="0" width="91" height="6" fill="#2A4A2A" opacity="0.85" />
      <line x1="0" y1="6" x2="91" y2="6" stroke="#C4A35A" strokeWidth="0.2" opacity="0.4" />
      <text
        x="45.5"
        y="4.2"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        letterSpacing="0.5"
        fill="#C4A35A"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#2A4A2A"
      >
        {data.companyJa}
      </text>
      <line x1="25" y1="18" x2="66" y2="18" stroke="#2A4A2A" strokeWidth="0.08" opacity="0.2" />
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#4A6A4A"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#4A6A4A"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#4A6A4A"
      >
        {data.website}
      </text>
      <line x1="25" y1="36" x2="66" y2="36" stroke="#2A4A2A" strokeWidth="0.08" opacity="0.2" />
      <text
        x="45.5"
        y="41"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#6A8A6A"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="44.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#6A8A6A"
      >
        {data.addressJa}
      </text>
      <line x1="0" y1="49" x2="91" y2="49" stroke="#C4A35A" strokeWidth="0.2" opacity="0.4" />
      <rect x="0" y="49" width="91" height="6" fill="#2A4A2A" opacity="0.85" />
    </g>
  ),
};

export const classicTemplates: TemplateDefinition[] = [
  romanTemplate,
  copperplateTemplate,
  linenTemplate,
  embassyTemplate,
  heritageTemplate,
  guildTemplate,
  libraryTemplate,
  crownTemplate,
  courtTemplate,
  manorTemplate,
];
