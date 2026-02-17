import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. BLUEPRINT (青写真) — Architecture blueprint style
// Technical drawing aesthetic with white-on-blue layout
// ============================================================
const blueprintTemplate: TemplateDefinition = {
  id: 'architect-blueprint',
  name: 'BLUEPRINT',
  nameJa: '青写真',
  category: 'architect',
  designer: 'Tadao Ando',
  description: '建築の青写真。技術的な精密さと知的な美しさ。',
  accentColor: '#005B96',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <pattern id="architect-blueprint-grid" width="4.55" height="4.55" patternUnits="userSpaceOnUse">
          <path d="M 4.55 0 L 0 0 0 4.55" fill="none" stroke="#1a6aa5" strokeWidth="0.08" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="#005B96" />
      <rect width="91" height="55" fill="url(#architect-blueprint-grid)" />
      {/* Border frame like technical drawing */}
      <rect x="3" y="3" width="85" height="49" fill="none" stroke="#ffffff" strokeWidth="0.15" />
      <rect x="4" y="4" width="83" height="47" fill="none" stroke="#ffffff" strokeWidth="0.08" />
      {/* Title block bottom-right */}
      <line x1="50" y1="38" x2="87" y2="38" stroke="#ffffff" strokeWidth="0.1" />
      <line x1="50" y1="38" x2="50" y2="51" stroke="#ffffff" strokeWidth="0.1" />
      <line x1="50" y1="44" x2="87" y2="44" stroke="#ffffff" strokeWidth="0.1" />
      {/* Name area */}
      <text
        x="45.5"
        y="20"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="6.5"
        letterSpacing="1"
        fill="#ffffff"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="2.2"
        letterSpacing="0.5"
        fill="#8ec5e8"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Title block content */}
      <text
        x="68.5"
        y="42"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#8ec5e8"
      >
        {data.titleJa}
      </text>
      <text
        x="68.5"
        y="48.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#ffffff"
      >
        {data.companyJa}
      </text>
      {/* Dimension marker decorative */}
      <line x1="10" y1="32" x2="35" y2="32" stroke="#8ec5e8" strokeWidth="0.1" />
      <line x1="10" y1="31" x2="10" y2="33" stroke="#8ec5e8" strokeWidth="0.1" />
      <line x1="35" y1="31" x2="35" y2="33" stroke="#8ec5e8" strokeWidth="0.1" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <pattern id="architect-blueprint-grid-b" width="4.55" height="4.55" patternUnits="userSpaceOnUse">
          <path d="M 4.55 0 L 0 0 0 4.55" fill="none" stroke="#1a6aa5" strokeWidth="0.08" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="#005B96" />
      <rect width="91" height="55" fill="url(#architect-blueprint-grid-b)" />
      <rect x="3" y="3" width="85" height="49" fill="none" stroke="#ffffff" strokeWidth="0.15" />
      <rect x="4" y="4" width="83" height="47" fill="none" stroke="#ffffff" strokeWidth="0.08" />
      {/* Company block */}
      <text
        x="8"
        y="13"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        letterSpacing="0.3"
        fill="#ffffff"
      >
        {data.companyJa}
      </text>
      <text
        x="8"
        y="17"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        letterSpacing="0.2"
        fill="#8ec5e8"
      >
        {data.companyEn}
      </text>
      <line x1="8" y1="20" x2="83" y2="20" stroke="#ffffff" strokeWidth="0.1" />
      {/* Contact info */}
      <text
        x="8"
        y="26"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#ffffff"
      >
        TEL: {data.tel}
      </text>
      <text
        x="8"
        y="30"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#ffffff"
      >
        EMAIL: {data.email}
      </text>
      <text
        x="8"
        y="34"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#ffffff"
      >
        WEB: {data.website}
      </text>
      <line x1="8" y1="37" x2="83" y2="37" stroke="#ffffff" strokeWidth="0.1" />
      <text
        x="8"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.3"
        fill="#8ec5e8"
      >
        〒{data.zipCode}
      </text>
      <text
        x="8"
        y="46"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.3"
        fill="#8ec5e8"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 2. FACADE (正面) — Building facade elevation style
// Clean elevation drawing with structured typography
// ============================================================
const facadeTemplate: TemplateDefinition = {
  id: 'architect-facade',
  name: 'FACADE',
  nameJa: '正面',
  category: 'architect',
  designer: 'Kengo Kuma',
  description: '建物のファサードのように、構造的で美しい正面性。',
  accentColor: '#2C3E50',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f5f0e8" />
      {/* Facade grid lines - vertical pillars */}
      <line x1="7" y1="5" x2="7" y2="50" stroke="#2C3E50" strokeWidth="0.3" />
      <line x1="22" y1="5" x2="22" y2="50" stroke="#2C3E50" strokeWidth="0.12" />
      <line x1="37" y1="5" x2="37" y2="50" stroke="#2C3E50" strokeWidth="0.12" />
      <line x1="52" y1="5" x2="52" y2="50" stroke="#2C3E50" strokeWidth="0.12" />
      <line x1="67" y1="5" x2="67" y2="50" stroke="#2C3E50" strokeWidth="0.12" />
      <line x1="84" y1="5" x2="84" y2="50" stroke="#2C3E50" strokeWidth="0.3" />
      {/* Horizontal floor lines */}
      <line x1="7" y1="5" x2="84" y2="5" stroke="#2C3E50" strokeWidth="0.3" />
      <line x1="7" y1="18" x2="84" y2="18" stroke="#2C3E50" strokeWidth="0.15" />
      <line x1="7" y1="50" x2="84" y2="50" stroke="#2C3E50" strokeWidth="0.3" />
      {/* Name in the upper section */}
      <text
        x="45.5"
        y="13"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="1.5"
        fill="#2C3E50"
      >
        {data.nameJa}
      </text>
      {/* English name in lower section */}
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.8"
        fill="#2C3E50"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="33"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#7f8c8d"
      >
        {data.titleJa}
      </text>
      {/* Window-like rectangles as decoration */}
      <rect x="10" y="40" width="5" height="7" fill="none" stroke="#2C3E50" strokeWidth="0.08" />
      <rect x="18" y="40" width="5" height="7" fill="none" stroke="#2C3E50" strokeWidth="0.08" />
      <rect x="26" y="40" width="5" height="7" fill="none" stroke="#2C3E50" strokeWidth="0.08" />
      <rect x="60" y="40" width="5" height="7" fill="none" stroke="#2C3E50" strokeWidth="0.08" />
      <rect x="68" y="40" width="5" height="7" fill="none" stroke="#2C3E50" strokeWidth="0.08" />
      <rect x="76" y="40" width="5" height="7" fill="none" stroke="#2C3E50" strokeWidth="0.08" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f5f0e8" />
      {/* Structure lines */}
      <line x1="7" y1="5" x2="7" y2="50" stroke="#2C3E50" strokeWidth="0.3" />
      <line x1="84" y1="5" x2="84" y2="50" stroke="#2C3E50" strokeWidth="0.3" />
      <line x1="7" y1="5" x2="84" y2="5" stroke="#2C3E50" strokeWidth="0.3" />
      <line x1="7" y1="50" x2="84" y2="50" stroke="#2C3E50" strokeWidth="0.3" />
      <line x1="7" y1="16" x2="84" y2="16" stroke="#2C3E50" strokeWidth="0.15" />
      {/* Company */}
      <text
        x="45.5"
        y="12"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        letterSpacing="0.5"
        fill="#2C3E50"
      >
        {data.companyJa}
      </text>
      {/* Contact in structured blocks */}
      <text
        x="12"
        y="23"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#2C3E50"
      >
        {data.tel}
      </text>
      <text
        x="12"
        y="27"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#2C3E50"
      >
        {data.email}
      </text>
      <text
        x="12"
        y="31"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#2C3E50"
      >
        {data.website}
      </text>
      <line x1="12" y1="35" x2="79" y2="35" stroke="#2C3E50" strokeWidth="0.08" />
      <text
        x="12"
        y="40"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.3"
        fill="#7f8c8d"
      >
        〒{data.zipCode}
      </text>
      <text
        x="12"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.3"
        fill="#7f8c8d"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 3. PLAN (設計) — Floor plan inspired layout
// Information arranged like rooms in a floor plan
// ============================================================
const planTemplate: TemplateDefinition = {
  id: 'architect-plan',
  name: 'PLAN',
  nameJa: '設計',
  category: 'architect',
  designer: 'Fumihiko Maki',
  description: '間取り図のような情報配置。空間の設計そのもの。',
  accentColor: '#1a3a5c',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Floor plan walls */}
      <rect x="5" y="5" width="40" height="25" fill="none" stroke="#1a3a5c" strokeWidth="0.25" />
      <rect x="46" y="5" width="40" height="25" fill="none" stroke="#1a3a5c" strokeWidth="0.25" />
      <rect x="5" y="31" width="81" height="19" fill="none" stroke="#1a3a5c" strokeWidth="0.25" />
      {/* Door openings */}
      <line x1="30" y1="30" x2="38" y2="30" stroke="#ffffff" strokeWidth="0.4" />
      <path d="M 30 30 Q 30 25 35 25" fill="none" stroke="#1a3a5c" strokeWidth="0.1" strokeDasharray="0.5,0.3" />
      {/* Name in main room */}
      <text
        x="25"
        y="16"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="4.5"
        letterSpacing="0.3"
        fill="#1a3a5c"
      >
        {data.nameJa}
      </text>
      <text
        x="25"
        y="22"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#5a7a9c"
      >
        {data.nameEn}
      </text>
      {/* Title in second room */}
      <text
        x="66"
        y="16"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="#1a3a5c"
      >
        {data.titleJa}
      </text>
      <text
        x="66"
        y="22"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="#5a7a9c"
      >
        {data.companyJa}
      </text>
      {/* Bottom room - decoration */}
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        letterSpacing="2"
        fill="#aabbcc"
      >
        ARCHITECT
      </text>
      {/* Dimension markers */}
      <text x="22" y="29" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="200" fontSize="0.9" fill="#aabbcc">
        6,000
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Plan outline */}
      <rect x="5" y="5" width="81" height="45" fill="none" stroke="#1a3a5c" strokeWidth="0.25" />
      <line x1="5" y1="16" x2="86" y2="16" stroke="#1a3a5c" strokeWidth="0.15" />
      <line x1="5" y1="35" x2="86" y2="35" stroke="#1a3a5c" strokeWidth="0.15" />
      {/* Company */}
      <text
        x="45.5"
        y="12"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        letterSpacing="0.5"
        fill="#1a3a5c"
      >
        {data.companyJa}
      </text>
      {/* Contact block */}
      <text
        x="10"
        y="22"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#1a3a5c"
      >
        T. {data.tel}
      </text>
      <text
        x="10"
        y="26"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#1a3a5c"
      >
        E. {data.email}
      </text>
      <text
        x="10"
        y="30"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#1a3a5c"
      >
        W. {data.website}
      </text>
      {/* Address block */}
      <text
        x="10"
        y="41"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.3"
        fill="#5a7a9c"
      >
        〒{data.zipCode}
      </text>
      <text
        x="10"
        y="45"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.3"
        fill="#5a7a9c"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 4. SECTION (断面) — Architectural cross-section view
// Layered horizontal bands like building section drawing
// ============================================================
const sectionTemplate: TemplateDefinition = {
  id: 'architect-section',
  name: 'SECTION',
  nameJa: '断面',
  category: 'architect',
  designer: 'Toyo Ito',
  description: '建物の断面図。層が織りなす構造美。',
  accentColor: '#34495e',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#faf8f5" />
      {/* Section cut layers */}
      <rect x="0" y="0" width="91" height="3" fill="#2C3E50" />
      <rect x="0" y="3" width="91" height="0.5" fill="#e74c3c" opacity="0.6" />
      {/* Ground line */}
      <line x1="0" y1="42" x2="91" y2="42" stroke="#2C3E50" strokeWidth="0.3" />
      {/* Hatching below ground */}
      {[...Array(18)].map((_, i) => (
        <line key={i} x1={i * 5} y1="42" x2={i * 5 + 3} y2="55" stroke="#d5cfc7" strokeWidth="0.1" />
      ))}
      {/* Section cut indicator */}
      <line x1="5" y1="6" x2="5" y2="42" stroke="#e74c3c" strokeWidth="0.12" strokeDasharray="1,0.5" />
      <circle cx="5" cy="6" r="1.2" fill="none" stroke="#e74c3c" strokeWidth="0.12" />
      <text x="5" y="6.5" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1" fill="#e74c3c">A</text>
      {/* Name */}
      <text
        x="45.5"
        y="20"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="6"
        letterSpacing="0.8"
        fill="#2C3E50"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.4"
        fill="#7f8c8d"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Title on floor line */}
      <text
        x="45.5"
        y="38"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#7f8c8d"
      >
        {data.titleJa}
      </text>
      {/* Level marker */}
      <text x="86" y="41" textAnchor="end" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="0.8" fill="#7f8c8d">GL±0</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#faf8f5" />
      <rect x="0" y="0" width="91" height="3" fill="#2C3E50" />
      <rect x="0" y="3" width="91" height="0.5" fill="#e74c3c" opacity="0.6" />
      <line x1="0" y1="42" x2="91" y2="42" stroke="#2C3E50" strokeWidth="0.3" />
      {/* Company */}
      <text
        x="10"
        y="13"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        letterSpacing="0.4"
        fill="#2C3E50"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="17.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#7f8c8d"
      >
        {data.companyEn}
      </text>
      {/* Contact as levels */}
      <line x1="10" y1="21" x2="81" y2="21" stroke="#2C3E50" strokeWidth="0.06" />
      <text x="10" y="25" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#34495e">
        {data.tel}
      </text>
      <text x="10" y="29" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#34495e">
        {data.email}
      </text>
      <text x="10" y="33" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#34495e">
        {data.website}
      </text>
      <line x1="10" y1="36" x2="81" y2="36" stroke="#2C3E50" strokeWidth="0.06" />
      <text
        x="10"
        y="40"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#7f8c8d"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 5. COLUMN-A (円柱) — Classical column proportions
// Inspired by column orders: base, shaft, capital
// ============================================================
const columnTemplate: TemplateDefinition = {
  id: 'architect-column',
  name: 'COLUMN-A',
  nameJa: '円柱',
  category: 'architect',
  designer: 'Andrea Palladio',
  description: '古典円柱の比例。秩序と格式の建築美。',
  accentColor: '#8B7355',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f7f3ed" />
      {/* Column shaft - left decorative element */}
      <rect x="8" y="6" width="6" height="43" fill="none" stroke="#8B7355" strokeWidth="0.15" />
      {/* Capital */}
      <rect x="6" y="4" width="10" height="2.5" fill="none" stroke="#8B7355" strokeWidth="0.15" rx="0.3" />
      {/* Base */}
      <rect x="6" y="49" width="10" height="2" fill="none" stroke="#8B7355" strokeWidth="0.15" />
      {/* Fluting lines */}
      <line x1="9.5" y1="6.5" x2="9.5" y2="48.5" stroke="#8B7355" strokeWidth="0.06" />
      <line x1="11" y1="6.5" x2="11" y2="48.5" stroke="#8B7355" strokeWidth="0.06" />
      <line x1="12.5" y1="6.5" x2="12.5" y2="48.5" stroke="#8B7355" strokeWidth="0.06" />
      {/* Name */}
      <text
        x="22"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#2C3E50"
      >
        {data.nameJa}
      </text>
      <text
        x="22"
        y="26.5"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2.2"
        letterSpacing="0.6"
        fill="#8B7355"
      >
        {data.nameEn}
      </text>
      <line x1="22" y1="30" x2="82" y2="30" stroke="#8B7355" strokeWidth="0.08" />
      <text
        x="22"
        y="35"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#999999"
      >
        {data.titleJa}
      </text>
      <text
        x="22"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#8B7355"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f7f3ed" />
      {/* Column capitals as header decoration */}
      <rect x="5" y="4" width="81" height="2.5" fill="none" stroke="#8B7355" strokeWidth="0.15" rx="0.3" />
      <rect x="5" y="48.5" width="81" height="2" fill="none" stroke="#8B7355" strokeWidth="0.15" />
      {/* Company */}
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        letterSpacing="0.8"
        fill="#2C3E50"
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
        letterSpacing="0.4"
        fill="#8B7355"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="22" x2="71" y2="22" stroke="#8B7355" strokeWidth="0.08" />
      {/* Contact */}
      <text x="45.5" y="27" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#555555">
        {data.tel}
      </text>
      <text x="45.5" y="31" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#555555">
        {data.email}
      </text>
      <text x="45.5" y="35" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#555555">
        {data.website}
      </text>
      <line x1="20" y1="38" x2="71" y2="38" stroke="#8B7355" strokeWidth="0.08" />
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
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
// 6. DOME (丸天) — Dome/cupola geometry
// Circular arc motif with radial composition
// ============================================================
const domeTemplate: TemplateDefinition = {
  id: 'architect-dome',
  name: 'DOME',
  nameJa: '丸天',
  category: 'architect',
  designer: 'Buckminster Fuller',
  description: '円蓋の幾何学。放射状に広がる構造の美。',
  accentColor: '#2C3E50',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <clipPath id="architect-dome-clip">
          <rect width="91" height="55" />
        </clipPath>
      </defs>
      <rect width="91" height="55" fill="#f5f0e8" />
      {/* Dome arcs */}
      <g clipPath="url(#architect-dome-clip)">
        <circle cx="45.5" cy="55" r="48" fill="none" stroke="#2C3E50" strokeWidth="0.12" />
        <circle cx="45.5" cy="55" r="40" fill="none" stroke="#2C3E50" strokeWidth="0.1" />
        <circle cx="45.5" cy="55" r="32" fill="none" stroke="#2C3E50" strokeWidth="0.08" />
        <circle cx="45.5" cy="55" r="24" fill="none" stroke="#2C3E50" strokeWidth="0.06" />
        {/* Radial lines */}
        <line x1="45.5" y1="55" x2="10" y2="0" stroke="#2C3E50" strokeWidth="0.05" />
        <line x1="45.5" y1="55" x2="25" y2="0" stroke="#2C3E50" strokeWidth="0.05" />
        <line x1="45.5" y1="55" x2="45.5" y2="0" stroke="#2C3E50" strokeWidth="0.05" />
        <line x1="45.5" y1="55" x2="66" y2="0" stroke="#2C3E50" strokeWidth="0.05" />
        <line x1="45.5" y1="55" x2="81" y2="0" stroke="#2C3E50" strokeWidth="0.05" />
      </g>
      {/* Name centered in dome */}
      <text
        x="45.5"
        y="18"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#2C3E50"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="25"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.5"
        fill="#7f8c8d"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Keystone marker */}
      <circle cx="45.5" cy="7" r="1.5" fill="none" stroke="#2C3E50" strokeWidth="0.12" />
      <circle cx="45.5" cy="7" r="0.4" fill="#2C3E50" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <clipPath id="architect-dome-clip-b">
          <rect width="91" height="55" />
        </clipPath>
      </defs>
      <rect width="91" height="55" fill="#f5f0e8" />
      <g clipPath="url(#architect-dome-clip-b)">
        <circle cx="45.5" cy="55" r="48" fill="none" stroke="#2C3E50" strokeWidth="0.08" />
        <circle cx="45.5" cy="55" r="36" fill="none" stroke="#2C3E50" strokeWidth="0.06" />
      </g>
      {/* Company */}
      <text
        x="45.5"
        y="12"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        letterSpacing="0.5"
        fill="#2C3E50"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="16.5"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#7f8c8d"
      >
        {data.companyEn}
      </text>
      <line x1="15" y1="20" x2="76" y2="20" stroke="#2C3E50" strokeWidth="0.08" />
      {/* Contact */}
      <text x="45.5" y="26" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#34495e">
        {data.tel}
      </text>
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#34495e">
        {data.email}
      </text>
      <text x="45.5" y="34" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#34495e">
        {data.website}
      </text>
      <line x1="15" y1="37.5" x2="76" y2="37.5" stroke="#2C3E50" strokeWidth="0.08" />
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#7f8c8d"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 7. TRUSS (桁) — Structural truss pattern
// Triangulated structural grid with engineering feel
// ============================================================
const trussTemplate: TemplateDefinition = {
  id: 'architect-truss',
  name: 'TRUSS',
  nameJa: '桁',
  category: 'architect',
  designer: 'Santiago Calatrava',
  description: 'トラス構造の力学美。三角形が支える堅牢さ。',
  accentColor: '#1a1a2e',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Top truss structure */}
      <line x1="0" y1="8" x2="91" y2="8" stroke="#1a1a2e" strokeWidth="0.2" />
      <line x1="0" y1="14" x2="91" y2="14" stroke="#1a1a2e" strokeWidth="0.2" />
      {/* Diagonal truss members */}
      {[...Array(16)].map((_, i) => (
        <g key={i}>
          <line x1={i * 5.7} y1="8" x2={i * 5.7 + 2.85} y2="14" stroke="#1a1a2e" strokeWidth="0.08" />
          <line x1={i * 5.7 + 2.85} y1="14" x2={i * 5.7 + 5.7} y2="8" stroke="#1a1a2e" strokeWidth="0.08" />
        </g>
      ))}
      {/* Joint nodes */}
      {[...Array(17)].map((_, i) => (
        <circle key={`n${i}`} cx={i * 5.7} cy="8" r="0.4" fill="#1a1a2e" />
      ))}
      {/* Name */}
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="0.5"
        fill="#1a1a2e"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.6"
        fill="#555577"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="42"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#888899"
      >
        {data.titleJa} — {data.companyJa}
      </text>
      {/* Bottom truss */}
      <line x1="0" y1="48" x2="91" y2="48" stroke="#1a1a2e" strokeWidth="0.15" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Top truss */}
      <line x1="0" y1="8" x2="91" y2="8" stroke="#1a1a2e" strokeWidth="0.2" />
      <line x1="0" y1="14" x2="91" y2="14" stroke="#1a1a2e" strokeWidth="0.2" />
      {[...Array(16)].map((_, i) => (
        <g key={i}>
          <line x1={i * 5.7} y1="8" x2={i * 5.7 + 2.85} y2="14" stroke="#1a1a2e" strokeWidth="0.08" />
          <line x1={i * 5.7 + 2.85} y1="14" x2={i * 5.7 + 5.7} y2="8" stroke="#1a1a2e" strokeWidth="0.08" />
        </g>
      ))}
      {/* Company */}
      <text
        x="10"
        y="23"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#1a1a2e"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="27.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#555577"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="30" x2="81" y2="30" stroke="#1a1a2e" strokeWidth="0.06" />
      <text x="10" y="34.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#1a1a2e">
        {data.tel}
      </text>
      <text x="10" y="38.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#1a1a2e">
        {data.email}
      </text>
      <text x="10" y="42.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#1a1a2e">
        {data.website}
      </text>
      <text
        x="10"
        y="48"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#888899"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 8. ARCH (拱) — Pointed arch / gothic arch motif
// Elegant arched forms with vertical emphasis
// ============================================================
const archTemplate: TemplateDefinition = {
  id: 'architect-arch',
  name: 'ARCH',
  nameJa: '拱',
  category: 'architect',
  designer: 'Antoni Gaudí',
  description: 'アーチの優美な曲線。重力に抗う構造の詩。',
  accentColor: '#6B3A2A',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <clipPath id="architect-arch-clip">
          <rect width="91" height="55" />
        </clipPath>
      </defs>
      <rect width="91" height="55" fill="#f7f3ed" />
      {/* Gothic arch form on left side */}
      <g clipPath="url(#architect-arch-clip)">
        <path
          d="M 5 55 L 5 20 Q 5 5 18 5 Q 31 5 31 20 L 31 55"
          fill="none"
          stroke="#6B3A2A"
          strokeWidth="0.2"
        />
        <path
          d="M 8 55 L 8 21 Q 8 8 18 8 Q 28 8 28 21 L 28 55"
          fill="none"
          stroke="#6B3A2A"
          strokeWidth="0.1"
        />
        {/* Keystone */}
        <path d="M 16 5.5 L 18 3 L 20 5.5 Z" fill="none" stroke="#6B3A2A" strokeWidth="0.1" />
      </g>
      {/* Name to the right of arch */}
      <text
        x="40"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#2C3E50"
      >
        {data.nameJa}
      </text>
      <text
        x="40"
        y="27"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2.2"
        letterSpacing="0.5"
        fill="#6B3A2A"
      >
        {data.nameEn}
      </text>
      <text
        x="40"
        y="35"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#999999"
      >
        {data.titleJa}
      </text>
      <text
        x="40"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#6B3A2A"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <clipPath id="architect-arch-clip-b">
          <rect width="91" height="55" />
        </clipPath>
      </defs>
      <rect width="91" height="55" fill="#f7f3ed" />
      {/* Small decorative arches at top */}
      <g clipPath="url(#architect-arch-clip-b)">
        <path d="M 10 10 Q 10 3 18 3 Q 26 3 26 10" fill="none" stroke="#6B3A2A" strokeWidth="0.12" />
        <path d="M 30 10 Q 30 3 38 3 Q 46 3 46 10" fill="none" stroke="#6B3A2A" strokeWidth="0.12" />
        <path d="M 50 10 Q 50 3 58 3 Q 66 3 66 10" fill="none" stroke="#6B3A2A" strokeWidth="0.12" />
        <path d="M 70 10 Q 70 3 78 3 Q 86 3 86 10" fill="none" stroke="#6B3A2A" strokeWidth="0.12" />
      </g>
      <line x1="10" y1="10" x2="86" y2="10" stroke="#6B3A2A" strokeWidth="0.12" />
      {/* Company */}
      <text
        x="45.5"
        y="18"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        letterSpacing="0.5"
        fill="#2C3E50"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="22.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#6B3A2A"
      >
        {data.companyEn}
      </text>
      <line x1="25" y1="25.5" x2="66" y2="25.5" stroke="#6B3A2A" strokeWidth="0.06" />
      {/* Contact */}
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#555555">
        {data.tel}
      </text>
      <text x="45.5" y="34" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#555555">
        {data.email}
      </text>
      <text x="45.5" y="38" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#555555">
        {data.website}
      </text>
      <line x1="25" y1="41" x2="66" y2="41" stroke="#6B3A2A" strokeWidth="0.06" />
      <text
        x="45.5"
        y="46"
        textAnchor="middle"
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
// 9. SPAN (径間) — Bridge span / cantilever concept
// Horizontal structural emphasis, suspension lines
// ============================================================
const spanTemplate: TemplateDefinition = {
  id: 'architect-span',
  name: 'SPAN',
  nameJa: '径間',
  category: 'architect',
  designer: 'Pier Luigi Nervi',
  description: '径間を渡す大胆な水平線。橋のような構造美。',
  accentColor: '#2C3E50',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Main span beam */}
      <rect x="0" y="18" width="91" height="1.2" fill="#2C3E50" />
      {/* Suspension cables from top */}
      <line x1="10" y1="0" x2="10" y2="18" stroke="#2C3E50" strokeWidth="0.1" />
      <line x1="25" y1="0" x2="25" y2="18" stroke="#2C3E50" strokeWidth="0.1" />
      <line x1="40" y1="0" x2="40" y2="18" stroke="#2C3E50" strokeWidth="0.1" />
      <line x1="55" y1="0" x2="55" y2="18" stroke="#2C3E50" strokeWidth="0.1" />
      <line x1="70" y1="0" x2="70" y2="18" stroke="#2C3E50" strokeWidth="0.1" />
      <line x1="85" y1="0" x2="85" y2="18" stroke="#2C3E50" strokeWidth="0.1" />
      {/* Catenary curve */}
      <path d="M 0 2 Q 45.5 14 91 2" fill="none" stroke="#2C3E50" strokeWidth="0.12" />
      {/* Name below span */}
      <text
        x="10"
        y="30"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="0.5"
        fill="#2C3E50"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="36.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.4"
        fill="#7f8c8d"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#aaaaaa"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="50"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#7f8c8d"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Span beam */}
      <rect x="0" y="10" width="91" height="1.2" fill="#2C3E50" />
      <path d="M 0 2 Q 45.5 8 91 2" fill="none" stroke="#2C3E50" strokeWidth="0.1" />
      {/* Vertical hangers */}
      <line x1="20" y1="2.5" x2="20" y2="10" stroke="#2C3E50" strokeWidth="0.08" />
      <line x1="45.5" y1="5" x2="45.5" y2="10" stroke="#2C3E50" strokeWidth="0.08" />
      <line x1="71" y1="2.5" x2="71" y2="10" stroke="#2C3E50" strokeWidth="0.08" />
      {/* Company */}
      <text
        x="10"
        y="19"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#2C3E50"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="23.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#7f8c8d"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="26.5" x2="81" y2="26.5" stroke="#2C3E50" strokeWidth="0.06" />
      {/* Contact */}
      <text x="10" y="31" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#34495e">
        {data.tel}
      </text>
      <text x="10" y="35" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#34495e">
        {data.email}
      </text>
      <text x="10" y="39" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#34495e">
        {data.website}
      </text>
      <line x1="10" y1="42" x2="81" y2="42" stroke="#2C3E50" strokeWidth="0.06" />
      <text
        x="10"
        y="47"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#7f8c8d"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 10. ATRIUM (中庭) — Open courtyard concept
// Central open space with surrounding structure
// ============================================================
const atriumTemplate: TemplateDefinition = {
  id: 'architect-atrium',
  name: 'ATRIUM',
  nameJa: '中庭',
  category: 'architect',
  designer: 'Louis Kahn',
  description: '中庭のような中央空間。光と影の建築的対話。',
  accentColor: '#005B96',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#2C3E50" />
      {/* Central atrium (light opening) */}
      <rect x="18" y="10" width="55" height="35" fill="#f5f0e8" />
      <rect x="20" y="12" width="51" height="31" fill="none" stroke="#2C3E50" strokeWidth="0.1" />
      {/* Surrounding structure walls */}
      <line x1="18" y1="10" x2="0" y2="0" stroke="#3d566e" strokeWidth="0.1" />
      <line x1="73" y1="10" x2="91" y2="0" stroke="#3d566e" strokeWidth="0.1" />
      <line x1="18" y1="45" x2="0" y2="55" stroke="#3d566e" strokeWidth="0.1" />
      <line x1="73" y1="45" x2="91" y2="55" stroke="#3d566e" strokeWidth="0.1" />
      {/* Name in the atrium light */}
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5"
        letterSpacing="0.5"
        fill="#2C3E50"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.4"
        fill="#7f8c8d"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="38"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#7f8c8d"
      >
        {data.titleJa}
      </text>
      {/* Company on the dark border */}
      <text
        x="45.5"
        y="52"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#8ec5e8"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#2C3E50" />
      {/* Atrium opening */}
      <rect x="18" y="5" width="55" height="45" fill="#f5f0e8" />
      <rect x="20" y="7" width="51" height="41" fill="none" stroke="#2C3E50" strokeWidth="0.1" />
      {/* Perspective lines */}
      <line x1="18" y1="5" x2="0" y2="0" stroke="#3d566e" strokeWidth="0.1" />
      <line x1="73" y1="5" x2="91" y2="0" stroke="#3d566e" strokeWidth="0.1" />
      <line x1="18" y1="50" x2="0" y2="55" stroke="#3d566e" strokeWidth="0.1" />
      <line x1="73" y1="50" x2="91" y2="55" stroke="#3d566e" strokeWidth="0.1" />
      {/* Company */}
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        letterSpacing="0.4"
        fill="#2C3E50"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="18.5"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#7f8c8d"
      >
        {data.companyEn}
      </text>
      <line x1="25" y1="21.5" x2="66" y2="21.5" stroke="#2C3E50" strokeWidth="0.06" />
      {/* Contact */}
      <text x="45.5" y="26" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#34495e">
        {data.tel}
      </text>
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#34495e">
        {data.email}
      </text>
      <text x="45.5" y="34" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#34495e">
        {data.website}
      </text>
      <line x1="25" y1="37" x2="66" y2="37" stroke="#2C3E50" strokeWidth="0.06" />
      <text
        x="45.5"
        y="41.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#7f8c8d"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="45"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#7f8c8d"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

export const architectTemplates: TemplateDefinition[] = [
  blueprintTemplate,
  facadeTemplate,
  planTemplate,
  sectionTemplate,
  columnTemplate,
  domeTemplate,
  trussTemplate,
  archTemplate,
  spanTemplate,
  atriumTemplate,
];
