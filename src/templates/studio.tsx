import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. ATELIER (工房) — Artist's workshop
// Clean with creative orange accent, asymmetric grid
// ============================================================
const atelierTemplate: TemplateDefinition = {
  id: 'studio-atelier',
  name: 'ATELIER',
  nameJa: '工房',
  category: 'studio',
  designer: 'Pentagram',
  description: '工房の精神。クリエイティブの源泉が息づく空間。',
  accentColor: '#E86830',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#fafafa" />
      {/* Orange accent bar on left */}
      <rect x="0" y="0" width="2" height="55" fill="#E86830" />
      {/* Asymmetric grid lines */}
      <line x1="30" y1="0" x2="30" y2="55" stroke="#e8e8e8" strokeWidth="0.1" />
      <line x1="0" y1="38" x2="91" y2="38" stroke="#e8e8e8" strokeWidth="0.1" />
      {/* Name */}
      <text
        x="8"
        y="18"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.4"
        fill="#2a2a2a"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="24"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#E86830"
      >
        {data.nameEn}
      </text>
      <text
        x="8"
        y="32"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      {/* Studio tag */}
      <text
        x="8"
        y="44"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="1"
        letterSpacing="0.5"
        fill="#E86830"
        opacity="0.5"
      >
        ATELIER
      </text>
      {/* Orange dot accent */}
      <circle cx="84" cy="6" r="2" fill="#E86830" opacity="0.1" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#fafafa" />
      <rect x="89" y="0" width="2" height="55" fill="#E86830" />
      {/* Grid lines */}
      <line x1="60" y1="0" x2="60" y2="55" stroke="#e8e8e8" strokeWidth="0.1" />
      <line x1="0" y1="20" x2="91" y2="20" stroke="#e8e8e8" strokeWidth="0.1" />
      {/* Company */}
      <text
        x="8"
        y="12"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#2a2a2a"
      >
        {data.companyJa}
      </text>
      <text
        x="8"
        y="16.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#E86830"
        opacity="0.7"
      >
        {data.companyEn}
      </text>
      {/* Contact */}
      <text
        x="8"
        y="27"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#555555"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="31"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#555555"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="35"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#555555"
      >
        {data.website}
      </text>
      <text
        x="8"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#aaaaaa"
      >
        〒{data.zipCode}
      </text>
      <text
        x="8"
        y="48"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#aaaaaa"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 2. BUREAU (局) — Design bureau formal
// Structured layout with teal accent, professional grid
// ============================================================
const bureauTemplate: TemplateDefinition = {
  id: 'studio-bureau',
  name: 'BUREAU',
  nameJa: '局',
  category: 'studio',
  designer: 'Bureau Borsche',
  description: '局の厳格さ。構造化されたグリッドの中の創造性。',
  accentColor: '#008080',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Teal top strip */}
      <rect x="0" y="0" width="91" height="1.5" fill="#008080" />
      {/* Grid structure */}
      <line x1="8" y1="6" x2="8" y2="49" stroke="#e0e0e0" strokeWidth="0.1" />
      <line x1="45.5" y1="6" x2="45.5" y2="49" stroke="#e0e0e0" strokeWidth="0.1" />
      <line x1="83" y1="6" x2="83" y2="49" stroke="#e0e0e0" strokeWidth="0.1" />
      {/* Name */}
      <text
        x="10"
        y="18"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.3"
        fill="#1a1a1a"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="24"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.2"
        fill="#008080"
      >
        {data.nameEn}
      </text>
      {/* Title in teal */}
      <text
        x="10"
        y="32"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#666666"
      >
        {data.titleJa}
      </text>
      {/* Bureau label */}
      <text
        x="83"
        y="48"
        textAnchor="end"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="0.9"
        letterSpacing="0.4"
        fill="#008080"
        opacity="0.4"
      >
        BUREAU
      </text>
      {/* Bottom teal strip */}
      <rect x="0" y="53.5" width="91" height="1.5" fill="#008080" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      <rect x="0" y="0" width="91" height="1.5" fill="#008080" />
      <rect x="0" y="53.5" width="91" height="1.5" fill="#008080" />
      {/* Company */}
      <text
        x="10"
        y="12"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#1a1a1a"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="16.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#008080"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="20" x2="81" y2="20" stroke="#008080" strokeWidth="0.1" />
      {/* Contact - structured grid */}
      <text
        x="10"
        y="26"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1"
        letterSpacing="0.3"
        fill="#008080"
      >
        TEL
      </text>
      <text
        x="22"
        y="26"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#333333"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="30"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1"
        letterSpacing="0.3"
        fill="#008080"
      >
        MAIL
      </text>
      <text
        x="22"
        y="30"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#333333"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="34"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1"
        letterSpacing="0.3"
        fill="#008080"
      >
        WEB
      </text>
      <text
        x="22"
        y="34"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#333333"
      >
        {data.website}
      </text>
      <line x1="10" y1="38" x2="81" y2="38" stroke="#e0e0e0" strokeWidth="0.1" />
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#999999"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 3. LAB (研) — Research lab / experimental studio
// Technical grid with magenta accent, data-driven feel
// ============================================================
const labTemplate: TemplateDefinition = {
  id: 'studio-lab',
  name: 'LAB',
  nameJa: '研',
  category: 'studio',
  designer: 'IDEO',
  description: '研究所の知性。実験精神が宿るデータ駆動の美学。',
  accentColor: '#CC0066',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#fafafa" />
      {/* Lab grid background */}
      <defs>
        <pattern id="studio-lab-fg" x="0" y="0" width="9.1" height="9.17" patternUnits="userSpaceOnUse">
          <rect width="9.1" height="9.17" fill="none" stroke="#eaeaea" strokeWidth="0.08" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#studio-lab-fg)" />
      {/* Magenta experiment markers */}
      <circle cx="8" cy="8" r="0.5" fill="#CC0066" />
      <circle cx="8" cy="8" r="2" fill="none" stroke="#CC0066" strokeWidth="0.1" />
      {/* Name */}
      <text
        x="14"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.3"
        fill="#2a2a2a"
      >
        {data.nameJa}
      </text>
      <text
        x="14"
        y="26"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.2"
        fill="#CC0066"
      >
        {data.nameEn}
      </text>
      <text
        x="14"
        y="33"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      {/* Lab label */}
      <rect x="14" y="40" width="12" height="3" fill="#CC0066" opacity="0.1" rx="0.3" />
      <text
        x="15"
        y="42.2"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="1.2"
        fill="#CC0066"
      >
        LAB
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#fafafa" />
      {/* Lab grid */}
      <defs>
        <pattern id="studio-lab-bg" x="0" y="0" width="9.1" height="9.17" patternUnits="userSpaceOnUse">
          <rect width="9.1" height="9.17" fill="none" stroke="#f0f0f0" strokeWidth="0.06" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#studio-lab-bg)" />
      {/* Company */}
      <text
        x="8"
        y="12"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#2a2a2a"
      >
        {data.companyJa}
      </text>
      <text
        x="8"
        y="16.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#CC0066"
        opacity="0.7"
      >
        {data.companyEn}
      </text>
      <line x1="8" y1="20" x2="83" y2="20" stroke="#CC0066" strokeWidth="0.1" />
      {/* Contact */}
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
      <text
        x="8"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#aaaaaa"
      >
        〒{data.zipCode}
      </text>
      <text
        x="8"
        y="48"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#aaaaaa"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 4. WORKSHOP (作) — Hands-on workshop
// Warm gray with craft-like details, honest material feel
// ============================================================
const workshopTemplate: TemplateDefinition = {
  id: 'studio-workshop',
  name: 'WORKSHOP',
  nameJa: '作',
  category: 'studio',
  designer: 'Werkstatt',
  description: '作業場の温もり。手仕事の誠実さが宿るデザイン。',
  accentColor: '#8B7355',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f5f2ed" />
      {/* Craft paper texture lines */}
      <line x1="0" y1="6" x2="91" y2="6" stroke="#d8d2c8" strokeWidth="0.08" />
      <line x1="0" y1="48" x2="91" y2="48" stroke="#d8d2c8" strokeWidth="0.08" />
      {/* Left margin rule like notebook */}
      <line x1="10" y1="6" x2="10" y2="48" stroke="#8B7355" strokeWidth="0.12" opacity="0.2" />
      {/* Name */}
      <text
        x="14"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.3"
        fill="#3a3530"
      >
        {data.nameJa}
      </text>
      <text
        x="14"
        y="26"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.2"
        fill="#8B7355"
      >
        {data.nameEn}
      </text>
      <text
        x="14"
        y="33"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#999080"
      >
        {data.titleJa}
      </text>
      {/* Small workshop stamp */}
      <rect x="70" y="38" width="14" height="6" fill="none" stroke="#8B7355" strokeWidth="0.15" opacity="0.3" rx="0.5" />
      <text
        x="77"
        y="42"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="1"
        fill="#8B7355"
        opacity="0.4"
      >
        WORKSHOP
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f5f2ed" />
      <line x1="0" y1="6" x2="91" y2="6" stroke="#d8d2c8" strokeWidth="0.08" />
      <line x1="0" y1="48" x2="91" y2="48" stroke="#d8d2c8" strokeWidth="0.08" />
      <line x1="10" y1="6" x2="10" y2="48" stroke="#8B7355" strokeWidth="0.12" opacity="0.2" />
      {/* Company */}
      <text
        x="14"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#3a3530"
      >
        {data.companyJa}
      </text>
      <text
        x="14"
        y="18.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#8B7355"
      >
        {data.companyEn}
      </text>
      <line x1="14" y1="22" x2="80" y2="22" stroke="#d8d2c8" strokeWidth="0.1" />
      {/* Contact */}
      <text
        x="14"
        y="28"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#5A5040"
      >
        {data.tel}
      </text>
      <text
        x="14"
        y="32"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#5A5040"
      >
        {data.email}
      </text>
      <text
        x="14"
        y="36"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#5A5040"
      >
        {data.website}
      </text>
      <text
        x="14"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#999080"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 5. OFFICE (事) — Modern design office
// Clean white with matte black typography, minimal color
// ============================================================
const officeTemplate: TemplateDefinition = {
  id: 'studio-office',
  name: 'OFFICE',
  nameJa: '事',
  category: 'studio',
  designer: 'Norm',
  description: '事務所の洗練。無駄を削ぎ落としたプロの佇まい。',
  accentColor: '#333333',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Matte black top bar with company */}
      <rect x="0" y="0" width="91" height="8" fill="#333333" />
      <text
        x="8"
        y="5.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="1.4"
        letterSpacing="0.3"
        fill="#ffffff"
      >
        {data.companyEn.toUpperCase()}
      </text>
      {/* Name */}
      <text
        x="8"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.3"
        fill="#1a1a1a"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="28"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.2"
        fill="#666666"
      >
        {data.nameEn}
      </text>
      <text
        x="8"
        y="35"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#999999"
      >
        {data.titleJa}
      </text>
      {/* Minimal bottom line */}
      <line x1="8" y1="48" x2="83" y2="48" stroke="#e0e0e0" strokeWidth="0.1" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      <rect x="0" y="0" width="91" height="8" fill="#333333" />
      <text
        x="8"
        y="5.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="1.4"
        letterSpacing="0.3"
        fill="#ffffff"
      >
        {data.companyEn.toUpperCase()}
      </text>
      {/* Company JP */}
      <text
        x="8"
        y="17"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2"
        fill="#1a1a1a"
      >
        {data.companyJa}
      </text>
      <line x1="8" y1="21" x2="83" y2="21" stroke="#e0e0e0" strokeWidth="0.1" />
      {/* Contact */}
      <text
        x="8"
        y="27"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#555555"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="31"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#555555"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="35"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#555555"
      >
        {data.website}
      </text>
      <line x1="8" y1="39" x2="83" y2="39" stroke="#e0e0e0" strokeWidth="0.1" />
      <text
        x="8"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#aaaaaa"
      >
        〒{data.zipCode}
      </text>
      <text
        x="8"
        y="48"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#aaaaaa"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 6. AGENCY (社) — Creative agency bold
// Matte black card with vibrant accent, portfolio feel
// ============================================================
const agencyTemplate: TemplateDefinition = {
  id: 'studio-agency',
  name: 'AGENCY',
  nameJa: '社',
  category: 'studio',
  designer: 'Wieden+Kennedy',
  description: '社の力強さ。エージェンシーの自信が漲る一枚。',
  accentColor: '#00BFA5',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1a1a1a" />
      {/* Teal accent corner */}
      <rect x="0" y="0" width="20" height="3" fill="#00BFA5" />
      <rect x="0" y="0" width="3" height="15" fill="#00BFA5" />
      {/* Name */}
      <text
        x="10"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.4"
        fill="#ffffff"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="28"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#00BFA5"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="35"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#777777"
      >
        {data.titleJa}
      </text>
      {/* Agency label */}
      <text
        x="83"
        y="49"
        textAnchor="end"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="0.9"
        letterSpacing="0.5"
        fill="#00BFA5"
        opacity="0.4"
      >
        AGENCY
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1a1a1a" />
      {/* Teal accent - bottom right */}
      <rect x="71" y="52" width="20" height="3" fill="#00BFA5" />
      <rect x="88" y="40" width="3" height="15" fill="#00BFA5" />
      {/* Company */}
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#ffffff"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#00BFA5"
        opacity="0.7"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="22" x2="80" y2="22" stroke="#333333" strokeWidth="0.15" />
      {/* Contact */}
      <text
        x="10"
        y="28"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#999999"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#999999"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#999999"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#555555"
      >
        〒{data.zipCode}
      </text>
      <text
        x="10"
        y="48"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#555555"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 7. HQ (本部) — Headquarters command center
// Strong horizontal banding, military-clean precision
// ============================================================
const hqTemplate: TemplateDefinition = {
  id: 'studio-hq',
  name: 'HQ',
  nameJa: '本部',
  category: 'studio',
  designer: 'Base Design',
  description: '本部の統率力。水平帯が生む指揮所の秩序。',
  accentColor: '#2E4057',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f5f5f5" />
      {/* Horizontal bands */}
      <rect x="0" y="0" width="91" height="3" fill="#2E4057" />
      <rect x="0" y="5" width="91" height="0.5" fill="#2E4057" opacity="0.3" />
      <rect x="0" y="51.5" width="91" height="0.5" fill="#2E4057" opacity="0.3" />
      <rect x="0" y="52" width="91" height="3" fill="#2E4057" />
      {/* HQ marker */}
      <text
        x="83"
        y="2.2"
        textAnchor="end"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="700"
        fontSize="1.4"
        fill="#ffffff"
      >
        HQ
      </text>
      {/* Name */}
      <text
        x="8"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="5.5"
        letterSpacing="0.4"
        fill="#2E4057"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="28"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#5A7A9A"
      >
        {data.nameEn}
      </text>
      <text
        x="8"
        y="36"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#8899AA"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f5f5f5" />
      <rect x="0" y="0" width="91" height="3" fill="#2E4057" />
      <rect x="0" y="5" width="91" height="0.5" fill="#2E4057" opacity="0.3" />
      <rect x="0" y="51.5" width="91" height="0.5" fill="#2E4057" opacity="0.3" />
      <rect x="0" y="52" width="91" height="3" fill="#2E4057" />
      {/* Company */}
      <text
        x="8"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="2.2"
        fill="#2E4057"
      >
        {data.companyJa}
      </text>
      <text
        x="8"
        y="18.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#5A7A9A"
      >
        {data.companyEn}
      </text>
      <line x1="8" y1="22" x2="83" y2="22" stroke="#2E4057" strokeWidth="0.1" />
      {/* Contact */}
      <text
        x="8"
        y="28"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#4A5A6A"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="32"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#4A5A6A"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="36"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#4A5A6A"
      >
        {data.website}
      </text>
      <text
        x="8"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#8899AA"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 8. LOFT (天) — Open loft creative space
// Airy layout with high ceilings feel, warm gray palette
// ============================================================
const loftTemplate: TemplateDefinition = {
  id: 'studio-loft',
  name: 'LOFT',
  nameJa: '天',
  category: 'studio',
  designer: 'Kinfolk',
  description: '天井の高い空間。開放感と温もりが共存するロフト。',
  accentColor: '#B5856D',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f8f6f3" />
      {/* Warm exposed beam lines at top */}
      <line x1="0" y1="4" x2="91" y2="4" stroke="#B5856D" strokeWidth="0.12" opacity="0.15" />
      <line x1="0" y1="6" x2="91" y2="6" stroke="#B5856D" strokeWidth="0.06" opacity="0.1" />
      {/* Open space - name sits high */}
      <text
        x="45.5"
        y="19"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#3a3530"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="25"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#B5856D"
      >
        {data.nameEn}
      </text>
      {/* Wide open space in middle */}
      <text
        x="45.5"
        y="37"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#999080"
      >
        {data.titleJa}
      </text>
      {/* Warm bottom detail */}
      <line x1="30" y1="48" x2="61" y2="48" stroke="#B5856D" strokeWidth="0.08" opacity="0.2" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f8f6f3" />
      {/* Beam lines */}
      <line x1="0" y1="4" x2="91" y2="4" stroke="#B5856D" strokeWidth="0.12" opacity="0.15" />
      <line x1="0" y1="6" x2="91" y2="6" stroke="#B5856D" strokeWidth="0.06" opacity="0.1" />
      {/* Company */}
      <text
        x="45.5"
        y="15"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2"
        fill="#3a3530"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="19.5"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#B5856D"
      >
        {data.companyEn}
      </text>
      <line x1="30" y1="23" x2="61" y2="23" stroke="#B5856D" strokeWidth="0.06" opacity="0.2" />
      {/* Contact - centered, airy */}
      <text
        x="45.5"
        y="29"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#6A5A4A"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="33"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#6A5A4A"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="37"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#6A5A4A"
      >
        {data.website}
      </text>
      <text
        x="45.5"
        y="46"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.1"
        fill="#B0A898"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 9. DEN (巣) — Creative den / hideout
// Dark cozy feel, warm amber accent
// ============================================================
const denTemplate: TemplateDefinition = {
  id: 'studio-den',
  name: 'DEN',
  nameJa: '巣',
  category: 'studio',
  designer: 'Snøhetta',
  description: '巣の親密さ。暗がりに灯る温かな光の創造空間。',
  accentColor: '#D4930A',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#252220" />
      {/* Amber glow */}
      <defs>
        <radialGradient id="studio-den-glow" cx="20%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#D4930A" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#D4930A" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#studio-den-glow)" />
      {/* Amber accent line */}
      <line x1="8" y1="10" x2="8" y2="44" stroke="#D4930A" strokeWidth="0.2" opacity="0.4" />
      {/* Name */}
      <text
        x="14"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.3"
        fill="#e8ddd0"
      >
        {data.nameJa}
      </text>
      <text
        x="14"
        y="28"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.2"
        fill="#D4930A"
      >
        {data.nameEn}
      </text>
      <text
        x="14"
        y="35"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#807060"
      >
        {data.titleJa}
      </text>
      {/* Den dot */}
      <circle cx="8" cy="8" r="0.8" fill="#D4930A" opacity="0.6" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#252220" />
      {/* Amber line right */}
      <line x1="83" y1="10" x2="83" y2="44" stroke="#D4930A" strokeWidth="0.2" opacity="0.4" />
      <circle cx="83" cy="47" r="0.8" fill="#D4930A" opacity="0.6" />
      {/* Company */}
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#e8ddd0"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#D4930A"
        opacity="0.6"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="22" x2="78" y2="22" stroke="#D4930A" strokeWidth="0.08" opacity="0.2" />
      {/* Contact */}
      <text
        x="10"
        y="28"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#A09080"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#A09080"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#A09080"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#605040"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 10. SPACE (間) — Open creative space
// Maximum whitespace, geometric accent, gallery-like
// ============================================================
const spaceTemplate: TemplateDefinition = {
  id: 'studio-space',
  name: 'SPACE',
  nameJa: '間',
  category: 'studio',
  designer: 'Nendo',
  description: '間の哲学。余白そのものがデザインとなる空間。',
  accentColor: '#4A90D9',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Geometric blue accent - small square */}
      <rect x="8" y="8" width="4" height="4" fill="#4A90D9" opacity="0.12" />
      <rect x="8" y="8" width="4" height="4" fill="none" stroke="#4A90D9" strokeWidth="0.12" opacity="0.3" />
      {/* Name - lots of space around it */}
      <text
        x="8"
        y="28"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.6"
        fill="#2a2a2a"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="34"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#4A90D9"
      >
        {data.nameEn}
      </text>
      {/* Title far below with space */}
      <text
        x="8"
        y="46"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#aaaaaa"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Blue accent square - bottom right */}
      <rect x="79" y="43" width="4" height="4" fill="#4A90D9" opacity="0.12" />
      <rect x="79" y="43" width="4" height="4" fill="none" stroke="#4A90D9" strokeWidth="0.12" opacity="0.3" />
      {/* Company */}
      <text
        x="8"
        y="12"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#2a2a2a"
      >
        {data.companyJa}
      </text>
      <text
        x="8"
        y="16.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#4A90D9"
        opacity="0.7"
      >
        {data.companyEn}
      </text>
      <line x1="8" y1="20" x2="50" y2="20" stroke="#4A90D9" strokeWidth="0.08" opacity="0.2" />
      {/* Contact - generous spacing */}
      <text
        x="8"
        y="27"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#555555"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="32"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#555555"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="37"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#555555"
      >
        {data.website}
      </text>
      <text
        x="8"
        y="48"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#bbbbbb"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

export const studioTemplates: TemplateDefinition[] = [
  atelierTemplate,
  bureauTemplate,
  labTemplate,
  workshopTemplate,
  officeTemplate,
  agencyTemplate,
  hqTemplate,
  loftTemplate,
  denTemplate,
  spaceTemplate,
];
