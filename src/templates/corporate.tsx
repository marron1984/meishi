import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. EXECUTIVE (役) — Pentagram inspired
// Classic navy and gold palette, refined executive presence
// ============================================================
const executiveTemplate: TemplateDefinition = {
  id: 'corporate-executive',
  name: 'EXECUTIVE',
  nameJa: '役',
  category: 'corporate',
  designer: 'Pentagram',
  description: '格式と威厳。紺とゴールドが織りなす経営者の名刺。',
  accentColor: '#1a2744',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="executive-gold-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#C5A55A" stopOpacity="0" />
          <stop offset="15%" stopColor="#C5A55A" stopOpacity="1" />
          <stop offset="85%" stopColor="#C5A55A" stopOpacity="1" />
          <stop offset="100%" stopColor="#C5A55A" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#1a2744" />
      <rect x="0" y="0" width="91" height="1.2" fill="#C5A55A" opacity="0.15" />
      <rect x="0" y="53.8" width="91" height="1.2" fill="#C5A55A" opacity="0.15" />
      <text
        x="45.5"
        y="19"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="7"
        letterSpacing="2"
        fill="#ffffff"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="25"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="1.2"
        fill="#C5A55A"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <line x1="20" y1="29" x2="71" y2="29" stroke="url(#executive-gold-line)" strokeWidth="0.2" />
      <text
        x="45.5"
        y="34"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.5"
        fill="#8a9bbd"
      >
        {data.titleJa}
      </text>
      <text
        x="45.5"
        y="38"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        letterSpacing="0.3"
        fill="#6b7c9e"
      >
        {data.titleEn}
      </text>
      <text
        x="45.5"
        y="46"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        letterSpacing="0.8"
        fill="#C5A55A"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="50"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        letterSpacing="0.6"
        fill="#6b7c9e"
      >
        {data.companyEn.toUpperCase()}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1a2744" />
      <rect x="0" y="0" width="91" height="0.6" fill="#C5A55A" opacity="0.3" />
      <text
        x="45.5"
        y="11"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        letterSpacing="1"
        fill="#C5A55A"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="15"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        letterSpacing="0.6"
        fill="#6b7c9e"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <line x1="15" y1="19" x2="76" y2="19" stroke="#C5A55A" strokeWidth="0.12" opacity="0.4" />
      <text
        x="45.5"
        y="25"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#8a9bbd"
      >
        TEL {data.tel}
      </text>
      <text
        x="45.5"
        y="29"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#8a9bbd"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="33"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#8a9bbd"
      >
        {data.website}
      </text>
      <line x1="15" y1="37" x2="76" y2="37" stroke="#C5A55A" strokeWidth="0.12" opacity="0.4" />
      <text
        x="45.5"
        y="42"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#6b7c9e"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="46"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#6b7c9e"
      >
        {data.addressJa}
      </text>
      <text
        x="45.5"
        y="50"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.1"
        fill="#4e5f81"
      >
        {data.addressEn}
      </text>
    </g>
  ),
};

// ============================================================
// 2. CONSUL (顧) — McKinsey style
// Clean gray tones, company name prominent, understated elegance
// ============================================================
const consulTemplate: TemplateDefinition = {
  id: 'corporate-consul',
  name: 'CONSUL',
  nameJa: '顧',
  category: 'corporate',
  designer: 'McKinsey',
  description: '控えめな気品。グレートーンが語るコンサルタントの矜持。',
  accentColor: '#4a4a4a',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      <rect x="0" y="0" width="91" height="0.4" fill="#4a4a4a" />
      <text
        x="8"
        y="12"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="2.8"
        letterSpacing="0.8"
        fill="#2a2a2a"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <text
        x="8"
        y="16"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        letterSpacing="0.3"
        fill="#888888"
      >
        {data.companyJa}
      </text>
      <line x1="8" y1="20" x2="35" y2="20" stroke="#cccccc" strokeWidth="0.15" />
      <text
        x="8"
        y="30"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5"
        letterSpacing="0.5"
        fill="#2a2a2a"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="35"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#777777"
      >
        {data.nameEn}
      </text>
      <text
        x="8"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="#999999"
      >
        {data.titleJa}
      </text>
      <text
        x="8"
        y="46"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        letterSpacing="0.2"
        fill="#aaaaaa"
      >
        {data.titleEn}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      <rect x="0" y="0" width="91" height="0.4" fill="#4a4a4a" />
      <text
        x="8"
        y="12"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="2.5"
        letterSpacing="0.6"
        fill="#2a2a2a"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <text
        x="8"
        y="16"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#888888"
      >
        {data.companyJa}
      </text>
      <line x1="8" y1="20" x2="83" y2="20" stroke="#e0e0e0" strokeWidth="0.15" />
      <text
        x="8"
        y="26"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#555555"
      >
        T
      </text>
      <text
        x="13"
        y="26"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#666666"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="30"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#555555"
      >
        E
      </text>
      <text
        x="13"
        y="30"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#666666"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="34"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#555555"
      >
        W
      </text>
      <text
        x="13"
        y="34"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#666666"
      >
        {data.website}
      </text>
      <line x1="8" y1="38" x2="83" y2="38" stroke="#e0e0e0" strokeWidth="0.15" />
      <text
        x="8"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#888888"
      >
        〒{data.zipCode}
      </text>
      <text
        x="8"
        y="46.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#888888"
      >
        {data.addressJa}
      </text>
      <text
        x="8"
        y="50"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.1"
        fill="#aaaaaa"
      >
        {data.addressEn}
      </text>
    </g>
  ),
};

// ============================================================
// 3. LEGAL (法) — Traditional law firm
// Dark green accent, serif-like weight, authoritative
// ============================================================
const legalTemplate: TemplateDefinition = {
  id: 'corporate-legal',
  name: 'LEGAL',
  nameJa: '法',
  category: 'corporate',
  designer: 'Cravath',
  description: '法の重みを纏う。深緑とセリフが醸す信頼と権威。',
  accentColor: '#1B3D2F',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FAFAF7" />
      <rect x="0" y="0" width="91" height="2" fill="#1B3D2F" />
      <rect x="0" y="2" width="91" height="0.3" fill="#8B7D3C" />
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="600"
        fontSize="2.8"
        letterSpacing="0.8"
        fill="#1B3D2F"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="18"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        letterSpacing="0.5"
        fill="#5a6e63"
      >
        {data.companyJa}
      </text>
      <line x1="25" y1="21" x2="66" y2="21" stroke="#1B3D2F" strokeWidth="0.12" opacity="0.3" />
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="1"
        fill="#1B3D2F"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.6"
        fill="#5a6e63"
      >
        {data.nameEn}
      </text>
      <line x1="25" y1="38.5" x2="66" y2="38.5" stroke="#1B3D2F" strokeWidth="0.12" opacity="0.3" />
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#5a6e63"
      >
        {data.titleJa}
      </text>
      <text
        x="45.5"
        y="47"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        letterSpacing="0.3"
        fill="#8a9b8f"
      >
        {data.titleEn}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FAFAF7" />
      <rect x="0" y="0" width="91" height="2" fill="#1B3D2F" />
      <rect x="0" y="2" width="91" height="0.3" fill="#8B7D3C" />
      <text
        x="45.5"
        y="12"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="600"
        fontSize="2.5"
        letterSpacing="0.6"
        fill="#1B3D2F"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="16"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        letterSpacing="0.4"
        fill="#5a6e63"
      >
        {data.companyJa}
      </text>
      <line x1="15" y1="19.5" x2="76" y2="19.5" stroke="#1B3D2F" strokeWidth="0.1" opacity="0.25" />
      <text
        x="17"
        y="25"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="500"
        fontSize="1.3"
        fill="#1B3D2F"
      >
        Tel.
      </text>
      <text
        x="26"
        y="25"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5a6e63"
      >
        {data.tel}
      </text>
      <text
        x="17"
        y="29"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="500"
        fontSize="1.3"
        fill="#1B3D2F"
      >
        Email
      </text>
      <text
        x="26"
        y="29"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5a6e63"
      >
        {data.email}
      </text>
      <text
        x="17"
        y="33"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="500"
        fontSize="1.3"
        fill="#1B3D2F"
      >
        Web
      </text>
      <text
        x="26"
        y="33"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5a6e63"
      >
        {data.website}
      </text>
      <line x1="15" y1="36.5" x2="76" y2="36.5" stroke="#1B3D2F" strokeWidth="0.1" opacity="0.25" />
      <text
        x="45.5"
        y="41.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#5a6e63"
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
        fill="#5a6e63"
      >
        {data.addressJa}
      </text>
      <text
        x="45.5"
        y="48.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.1"
        fill="#8a9b8f"
      >
        {data.addressEn}
      </text>
    </g>
  ),
};

// ============================================================
// 4. FINANCE (財) — Banking style
// Dark blue, thin gold line accents, institutional gravitas
// ============================================================
const financeTemplate: TemplateDefinition = {
  id: 'corporate-finance',
  name: 'FINANCE',
  nameJa: '財',
  category: 'corporate',
  designer: 'Goldman Sachs',
  description: '金融の威信。ダークブルーとゴールドラインが示す堅実さ。',
  accentColor: '#0C2340',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0C2340" />
      <line x1="7" y1="7" x2="84" y2="7" stroke="#B8953E" strokeWidth="0.15" />
      <line x1="7" y1="7" x2="7" y2="48" stroke="#B8953E" strokeWidth="0.15" />
      <line x1="84" y1="7" x2="84" y2="48" stroke="#B8953E" strokeWidth="0.15" />
      <line x1="7" y1="48" x2="84" y2="48" stroke="#B8953E" strokeWidth="0.15" />
      <text
        x="45.5"
        y="16"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        letterSpacing="1.5"
        fill="#B8953E"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="19.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        letterSpacing="0.8"
        fill="#5a7099"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <line x1="30" y1="23" x2="61" y2="23" stroke="#B8953E" strokeWidth="0.1" />
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="1.5"
        fill="#ffffff"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.5"
        fill="#B8953E"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <line x1="30" y1="39" x2="61" y2="39" stroke="#B8953E" strokeWidth="0.1" />
      <text
        x="45.5"
        y="43.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        letterSpacing="0.3"
        fill="#7a8fb0"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0C2340" />
      <line x1="7" y1="7" x2="84" y2="7" stroke="#B8953E" strokeWidth="0.15" />
      <line x1="7" y1="48" x2="84" y2="48" stroke="#B8953E" strokeWidth="0.15" />
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="1"
        fill="#B8953E"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <line x1="20" y1="17.5" x2="71" y2="17.5" stroke="#B8953E" strokeWidth="0.08" opacity="0.5" />
      <text
        x="15"
        y="23"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.2"
        letterSpacing="0.3"
        fill="#B8953E"
      >
        TEL
      </text>
      <text
        x="25"
        y="23"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8a9bbd"
      >
        {data.tel}
      </text>
      <text
        x="15"
        y="27"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.2"
        letterSpacing="0.3"
        fill="#B8953E"
      >
        EMAIL
      </text>
      <text
        x="25"
        y="27"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8a9bbd"
      >
        {data.email}
      </text>
      <text
        x="15"
        y="31"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.2"
        letterSpacing="0.3"
        fill="#B8953E"
      >
        WEB
      </text>
      <text
        x="25"
        y="31"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8a9bbd"
      >
        {data.website}
      </text>
      <line x1="15" y1="34.5" x2="76" y2="34.5" stroke="#B8953E" strokeWidth="0.08" opacity="0.5" />
      <text
        x="45.5"
        y="39"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#7a8fb0"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="42.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#7a8fb0"
      >
        {data.addressJa}
      </text>
      <text
        x="45.5"
        y="46"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.1"
        fill="#5a7099"
      >
        {data.addressEn}
      </text>
    </g>
  ),
};

// ============================================================
// 5. ARCHITECT (建) — Architecture firm
// Thin lines, structural layout, light gray palette
// ============================================================
const architectTemplate: TemplateDefinition = {
  id: 'corporate-architect',
  name: 'ARCHITECT',
  nameJa: '建',
  category: 'corporate',
  designer: 'Tadao Ando',
  description: '建築的構造美。細い線と余白が描く空間のグリッド。',
  accentColor: '#555555',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f8f8f8" />
      {/* Structural grid lines */}
      <line x1="8" y1="8" x2="8" y2="47" stroke="#cccccc" strokeWidth="0.08" />
      <line x1="30" y1="8" x2="30" y2="47" stroke="#cccccc" strokeWidth="0.08" />
      <line x1="8" y1="8" x2="83" y2="8" stroke="#cccccc" strokeWidth="0.08" />
      <line x1="8" y1="24" x2="83" y2="24" stroke="#cccccc" strokeWidth="0.08" />
      <line x1="8" y1="47" x2="83" y2="47" stroke="#cccccc" strokeWidth="0.08" />
      {/* Company in grid header */}
      <text
        x="32"
        y="13"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        letterSpacing="0.5"
        fill="#999999"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <text
        x="32"
        y="16.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#888888"
      >
        {data.companyJa}
      </text>
      <text
        x="32"
        y="20.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#aaaaaa"
      >
        {data.titleJa}
      </text>
      {/* Name in main content area */}
      <text
        x="10"
        y="34"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="0.5"
        fill="#333333"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="39.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.3"
        fill="#888888"
      >
        {data.nameEn}
      </text>
      {/* Structural accent */}
      <rect x="8" y="43" width="4" height="0.15" fill="#333333" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f8f8f8" />
      {/* Grid structure */}
      <line x1="8" y1="8" x2="8" y2="47" stroke="#cccccc" strokeWidth="0.08" />
      <line x1="30" y1="8" x2="30" y2="47" stroke="#cccccc" strokeWidth="0.08" />
      <line x1="8" y1="8" x2="83" y2="8" stroke="#cccccc" strokeWidth="0.08" />
      <line x1="8" y1="20" x2="83" y2="20" stroke="#cccccc" strokeWidth="0.08" />
      <line x1="8" y1="47" x2="83" y2="47" stroke="#cccccc" strokeWidth="0.08" />
      {/* Company header */}
      <text
        x="32"
        y="13"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.6"
        fill="#333333"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <text
        x="32"
        y="17"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#888888"
      >
        {data.companyJa}
      </text>
      {/* Contact details in grid */}
      <text
        x="10"
        y="25"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1"
        letterSpacing="0.3"
        fill="#aaaaaa"
      >
        TEL
      </text>
      <text
        x="32"
        y="25"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#666666"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="29"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1"
        letterSpacing="0.3"
        fill="#aaaaaa"
      >
        EMAIL
      </text>
      <text
        x="32"
        y="29"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#666666"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="33"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1"
        letterSpacing="0.3"
        fill="#aaaaaa"
      >
        WEB
      </text>
      <text
        x="32"
        y="33"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#666666"
      >
        {data.website}
      </text>
      <line x1="8" y1="36.5" x2="83" y2="36.5" stroke="#cccccc" strokeWidth="0.08" />
      <text
        x="10"
        y="40.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1"
        letterSpacing="0.3"
        fill="#aaaaaa"
      >
        ADDRESS
      </text>
      <text
        x="32"
        y="40.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#666666"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
      <text
        x="32"
        y="44"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.1"
        fill="#999999"
      >
        {data.addressEn}
      </text>
    </g>
  ),
};

// ============================================================
// 6. AGENCY (社) — Creative agency
// Bold single accent color left border, modern layout
// ============================================================
const agencyTemplate: TemplateDefinition = {
  id: 'corporate-agency',
  name: 'AGENCY',
  nameJa: '社',
  category: 'corporate',
  designer: 'Wieden+Kennedy',
  description: '大胆な左縁が主張する。クリエイティブエージェンシーの気概。',
  accentColor: '#E63946',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      <rect x="0" y="0" width="3" height="55" fill="#E63946" />
      <text
        x="10"
        y="13"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="2.5"
        letterSpacing="0.5"
        fill="#E63946"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <text
        x="10"
        y="17"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#999999"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="28"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="6"
        letterSpacing="0.3"
        fill="#1a1a1a"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="33.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.2"
        fill="#555555"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="40"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="44"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        letterSpacing="0.15"
        fill="#aaaaaa"
      >
        {data.titleEn}
      </text>
      <rect x="10" y="48" width="8" height="0.4" fill="#E63946" rx="0.2" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      <rect x="0" y="0" width="3" height="55" fill="#E63946" />
      <text
        x="10"
        y="12"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="2.2"
        letterSpacing="0.4"
        fill="#E63946"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <text
        x="10"
        y="16"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#999999"
      >
        {data.companyJa}
      </text>
      <line x1="10" y1="19.5" x2="83" y2="19.5" stroke="#eeeeee" strokeWidth="0.15" />
      <text
        x="10"
        y="25"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.5"
        fill="#1a1a1a"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="29"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.5"
        fill="#1a1a1a"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="33"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.5"
        fill="#1a1a1a"
      >
        {data.website}
      </text>
      <line x1="10" y1="36.5" x2="83" y2="36.5" stroke="#eeeeee" strokeWidth="0.15" />
      <text
        x="10"
        y="41"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#888888"
      >
        〒{data.zipCode}
      </text>
      <text
        x="10"
        y="44.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#888888"
      >
        {data.addressJa}
      </text>
      <text
        x="10"
        y="48"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.1"
        fill="#aaaaaa"
      >
        {data.addressEn}
      </text>
    </g>
  ),
};

// ============================================================
// 7. STARTUP (創) — Modern startup
// Gradient accent, Space Grotesk font, fresh feel
// ============================================================
const startupTemplate: TemplateDefinition = {
  id: 'corporate-startup',
  name: 'STARTUP',
  nameJa: '創',
  category: 'corporate',
  designer: 'Y Combinator',
  description: '未来を創る。グラデーションと現代書体が放つ新鮮さ。',
  accentColor: '#6C5CE7',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="startup-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6C5CE7" />
          <stop offset="100%" stopColor="#00B4D8" />
        </linearGradient>
        <linearGradient id="startup-bar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6C5CE7" />
          <stop offset="100%" stopColor="#00B4D8" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#ffffff" />
      <rect x="0" y="0" width="91" height="0.6" fill="url(#startup-gradient)" />
      <circle cx="80" cy="12" r="3.5" fill="url(#startup-gradient)" opacity="0.08" />
      <circle cx="76" cy="16" r="2" fill="url(#startup-gradient)" opacity="0.05" />
      <text
        x="8"
        y="14"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="700"
        fontSize="3"
        letterSpacing="0.3"
        fill="url(#startup-gradient)"
      >
        {data.companyEn}
      </text>
      <text
        x="8"
        y="18"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#999999"
      >
        {data.companyJa}
      </text>
      <text
        x="8"
        y="29"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="5.5"
        letterSpacing="0.3"
        fill="#2d2d2d"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="34"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.2"
        fill="#777777"
      >
        {data.nameEn}
      </text>
      <text
        x="8"
        y="40"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.7"
        fill="#999999"
      >
        {data.titleJa}
      </text>
      <text
        x="8"
        y="44"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#bbbbbb"
      >
        {data.titleEn}
      </text>
      <rect x="8" y="48" width="12" height="0.5" fill="url(#startup-gradient)" rx="0.25" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="startup-gradient-back" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6C5CE7" />
          <stop offset="100%" stopColor="#00B4D8" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#ffffff" />
      <rect x="0" y="54.4" width="91" height="0.6" fill="url(#startup-gradient-back)" />
      <text
        x="8"
        y="12"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="700"
        fontSize="2.5"
        letterSpacing="0.2"
        fill="url(#startup-gradient-back)"
      >
        {data.companyEn}
      </text>
      <text
        x="8"
        y="16"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#999999"
      >
        {data.companyJa}
      </text>
      <line x1="8" y1="19.5" x2="40" y2="19.5" stroke="#6C5CE7" strokeWidth="0.1" opacity="0.3" />
      <text
        x="8"
        y="25"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#555555"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="29"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#555555"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="33"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#555555"
      >
        {data.website}
      </text>
      <line x1="8" y1="36.5" x2="40" y2="36.5" stroke="#6C5CE7" strokeWidth="0.1" opacity="0.3" />
      <text
        x="8"
        y="41"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#888888"
      >
        〒{data.zipCode}
      </text>
      <text
        x="8"
        y="44.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#888888"
      >
        {data.addressJa}
      </text>
      <text
        x="8"
        y="48"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.1"
        fill="#aaaaaa"
      >
        {data.addressEn}
      </text>
    </g>
  ),
};

// ============================================================
// 8. MEDICAL (医) — Medical professional
// Clean white, light blue accent, clinical precision
// ============================================================
const medicalTemplate: TemplateDefinition = {
  id: 'corporate-medical',
  name: 'MEDICAL',
  nameJa: '医',
  category: 'corporate',
  designer: 'Mayo Clinic',
  description: '清潔と信頼。ライトブルーが映す医療の精確さ。',
  accentColor: '#4A90D9',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      <rect x="0" y="0" width="91" height="0.3" fill="#4A90D9" />
      {/* Medical cross accent */}
      <rect x="79" y="7" width="0.4" height="4" fill="#4A90D9" opacity="0.2" />
      <rect x="77.2" y="8.8" width="4" height="0.4" fill="#4A90D9" opacity="0.2" />
      <text
        x="8"
        y="13"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        letterSpacing="0.5"
        fill="#4A90D9"
      >
        {data.companyJa}
      </text>
      <text
        x="8"
        y="17"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        letterSpacing="0.3"
        fill="#8ab8e8"
      >
        {data.companyEn}
      </text>
      <line x1="8" y1="21" x2="50" y2="21" stroke="#4A90D9" strokeWidth="0.12" opacity="0.3" />
      <text
        x="8"
        y="30"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#2a2a2a"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="35"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.2"
        fill="#777777"
      >
        {data.nameEn}
      </text>
      <text
        x="8"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="#4A90D9"
      >
        {data.titleJa}
      </text>
      <text
        x="8"
        y="46"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#8ab8e8"
      >
        {data.titleEn}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      <rect x="0" y="54.7" width="91" height="0.3" fill="#4A90D9" />
      <text
        x="8"
        y="11"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.4"
        fill="#4A90D9"
      >
        {data.companyJa}
      </text>
      <text
        x="8"
        y="15"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        letterSpacing="0.3"
        fill="#8ab8e8"
      >
        {data.companyEn}
      </text>
      <line x1="8" y1="18.5" x2="83" y2="18.5" stroke="#4A90D9" strokeWidth="0.1" opacity="0.2" />
      <text
        x="8"
        y="24"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.1"
        letterSpacing="0.3"
        fill="#4A90D9"
      >
        TEL
      </text>
      <text
        x="20"
        y="24"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#555555"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="28"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.1"
        letterSpacing="0.3"
        fill="#4A90D9"
      >
        EMAIL
      </text>
      <text
        x="20"
        y="28"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#555555"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="32"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.1"
        letterSpacing="0.3"
        fill="#4A90D9"
      >
        WEB
      </text>
      <text
        x="20"
        y="32"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#555555"
      >
        {data.website}
      </text>
      <line x1="8" y1="35.5" x2="83" y2="35.5" stroke="#4A90D9" strokeWidth="0.1" opacity="0.2" />
      <text
        x="8"
        y="40"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#777777"
      >
        〒{data.zipCode}
      </text>
      <text
        x="8"
        y="43.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#777777"
      >
        {data.addressJa}
      </text>
      <text
        x="8"
        y="47"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.1"
        fill="#aaaaaa"
      >
        {data.addressEn}
      </text>
    </g>
  ),
};

// ============================================================
// 9. ACADEMIC (学) — University/academic
// Warm tones, serif company name, scholarly feel
// ============================================================
const academicTemplate: TemplateDefinition = {
  id: 'corporate-academic',
  name: 'ACADEMIC',
  nameJa: '学',
  category: 'corporate',
  designer: 'Oxford',
  description: '学問の薫り。温かみのあるセリフ体が醸す知性と品格。',
  accentColor: '#8B1A1A',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FDF8F0" />
      <rect x="0" y="0" width="91" height="1.5" fill="#8B1A1A" />
      <rect x="0" y="1.5" width="91" height="0.4" fill="#C9A94E" />
      <text
        x="45.5"
        y="12"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="600"
        fontSize="2.5"
        letterSpacing="0.6"
        fill="#8B1A1A"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="16"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        letterSpacing="0.5"
        fill="#7a6040"
      >
        {data.companyJa}
      </text>
      <line x1="20" y1="19" x2="71" y2="19" stroke="#C9A94E" strokeWidth="0.12" opacity="0.5" />
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="1"
        fill="#3a2a1a"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="33"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="500"
        fontSize="2"
        letterSpacing="0.4"
        fill="#7a6040"
      >
        {data.nameEn}
      </text>
      <line x1="35" y1="36" x2="56" y2="36" stroke="#C9A94E" strokeWidth="0.1" opacity="0.4" />
      <text
        x="45.5"
        y="41"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="#7a6040"
      >
        {data.titleJa}
      </text>
      <text
        x="45.5"
        y="45"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        letterSpacing="0.2"
        fill="#a08860"
      >
        {data.titleEn}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FDF8F0" />
      <rect x="0" y="0" width="91" height="1.5" fill="#8B1A1A" />
      <rect x="0" y="1.5" width="91" height="0.4" fill="#C9A94E" />
      <text
        x="45.5"
        y="11"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="600"
        fontSize="2.2"
        letterSpacing="0.5"
        fill="#8B1A1A"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="15"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        letterSpacing="0.4"
        fill="#7a6040"
      >
        {data.companyJa}
      </text>
      <line x1="15" y1="18.5" x2="76" y2="18.5" stroke="#C9A94E" strokeWidth="0.1" opacity="0.4" />
      <text
        x="17"
        y="24"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="500"
        fontSize="1.3"
        fill="#8B1A1A"
      >
        Telephone
      </text>
      <text
        x="34"
        y="24"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5a4a30"
      >
        {data.tel}
      </text>
      <text
        x="17"
        y="28"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="500"
        fontSize="1.3"
        fill="#8B1A1A"
      >
        Electronic Mail
      </text>
      <text
        x="34"
        y="28"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5a4a30"
      >
        {data.email}
      </text>
      <text
        x="17"
        y="32"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="500"
        fontSize="1.3"
        fill="#8B1A1A"
      >
        Website
      </text>
      <text
        x="34"
        y="32"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5a4a30"
      >
        {data.website}
      </text>
      <line x1="15" y1="35.5" x2="76" y2="35.5" stroke="#C9A94E" strokeWidth="0.1" opacity="0.4" />
      <text
        x="45.5"
        y="40.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#7a6040"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#7a6040"
      >
        {data.addressJa}
      </text>
      <text
        x="45.5"
        y="47.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.1"
        fill="#a08860"
      >
        {data.addressEn}
      </text>
    </g>
  ),
};

// ============================================================
// 10. PRESS (報) — Media/publishing
// High contrast black/white, editorial authority
// ============================================================
const pressTemplate: TemplateDefinition = {
  id: 'corporate-press',
  name: 'PRESS',
  nameJa: '報',
  category: 'corporate',
  designer: 'The New York Times',
  description: '報道の矜持。黒と白のコントラストが示す編集者の権威。',
  accentColor: '#000000',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#000000" />
      <text
        x="8"
        y="11"
        fontFamily="'Inter', sans-serif"
        fontWeight="800"
        fontSize="3"
        letterSpacing="0.3"
        fill="#ffffff"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <text
        x="8"
        y="15"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#777777"
      >
        {data.companyJa}
      </text>
      <line x1="8" y1="18" x2="83" y2="18" stroke="#333333" strokeWidth="0.2" />
      <text
        x="8"
        y="30"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="7"
        letterSpacing="0.5"
        fill="#ffffff"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="35.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.3"
        fill="#888888"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <line x1="8" y1="39" x2="83" y2="39" stroke="#333333" strokeWidth="0.2" />
      <text
        x="8"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        fill="#aaaaaa"
      >
        {data.titleJa}
      </text>
      <text
        x="8"
        y="48"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        letterSpacing="0.2"
        fill="#666666"
      >
        {data.titleEn}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      <rect x="0" y="0" width="91" height="14" fill="#000000" />
      <text
        x="8"
        y="9"
        fontFamily="'Inter', sans-serif"
        fontWeight="800"
        fontSize="3"
        letterSpacing="0.3"
        fill="#ffffff"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <text
        x="83"
        y="9"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#888888"
      >
        {data.companyJa}
      </text>
      <text
        x="8"
        y="22"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.5"
        fill="#1a1a1a"
      >
        TEL
      </text>
      <text
        x="20"
        y="22"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#333333"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="26"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.5"
        fill="#1a1a1a"
      >
        EMAIL
      </text>
      <text
        x="20"
        y="26"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#333333"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="30"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.5"
        fill="#1a1a1a"
      >
        WEB
      </text>
      <text
        x="20"
        y="30"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#333333"
      >
        {data.website}
      </text>
      <line x1="8" y1="34" x2="83" y2="34" stroke="#000000" strokeWidth="0.3" />
      <text
        x="8"
        y="39"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#555555"
      >
        〒{data.zipCode}
      </text>
      <text
        x="8"
        y="42.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#555555"
      >
        {data.addressJa}
      </text>
      <text
        x="8"
        y="46"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.1"
        fill="#888888"
      >
        {data.addressEn}
      </text>
      <line x1="8" y1="50" x2="83" y2="50" stroke="#000000" strokeWidth="0.15" />
    </g>
  ),
};

export const corporateTemplates: TemplateDefinition[] = [
  executiveTemplate,
  consulTemplate,
  legalTemplate,
  financeTemplate,
  architectTemplate,
  agencyTemplate,
  startupTemplate,
  medicalTemplate,
  academicTemplate,
  pressTemplate,
];
