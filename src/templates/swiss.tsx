import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// Swiss International Style (Internationaler Stil)
// Grid-based, objective, sans-serif, asymmetric, flush left
// ============================================================

const EN_FONT = "'Inter', sans-serif";
const JA_FONT = "'Noto Sans JP', sans-serif";

// ============================================================
// 1. RATIO — Müller-Brockmann: Blue accent block top-left, strict grid
// ============================================================
const ratioTemplate: TemplateDefinition = {
  id: 'ratio',
  name: 'RATIO',
  nameJa: '律',
  category: 'swiss',
  designer: 'Müller-Brockmann',
  description: '比率と秩序。ブルーのアクセントブロックが厳密なグリッドを支配する。',
  accentColor: '#0057B8',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Blue accent block top-left */}
      <rect x="0" y="0" width="24" height="16" fill="#0057B8" />
      {/* Name area - aligned to grid at 28mm from left */}
      <text
        x="28"
        y="12"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="700"
        fontSize="6"
        letterSpacing="0.5"
        fill="#1a1a1a"
      >
        {data.nameJa}
      </text>
      <text
        x="28"
        y="17"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="400"
        fontSize="2.4"
        letterSpacing="0.3"
        fill="#666666"
      >
        {data.nameEn}
      </text>
      {/* Title aligned to same grid column */}
      <text
        x="28"
        y="24"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="400"
        fontSize="2"
        fill="#999999"
      >
        {data.titleJa}
      </text>
      <text
        x="28"
        y="27.5"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="300"
        fontSize="1.8"
        fill="#999999"
      >
        {data.titleEn}
      </text>
      {/* Thin rule at grid line */}
      <line x1="28" y1="31" x2="83" y2="31" stroke="#0057B8" strokeWidth="0.3" />
      {/* Company flush left at bottom grid */}
      <text
        x="28"
        y="36"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="500"
        fontSize="2.2"
        fill="#333333"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Blue accent block mirrored bottom-right */}
      <rect x="67" y="39" width="24" height="16" fill="#0057B8" />
      {/* Company info top-left, grid aligned */}
      <text
        x="8"
        y="10"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="700"
        fontSize="2.8"
        fill="#1a1a1a"
      >
        {data.companyJa}
      </text>
      <text
        x="8"
        y="14"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="500"
        fontSize="2"
        letterSpacing="0.2"
        fill="#666666"
      >
        {data.companyEn}
      </text>
      {/* Contact details in strict grid rows */}
      <line x1="8" y1="18" x2="60" y2="18" stroke="#0057B8" strokeWidth="0.3" />
      <text
        x="8"
        y="22"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="400"
        fontSize="1.8"
        fill="#333333"
      >
        TEL {data.tel}
      </text>
      <text
        x="8"
        y="26"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="400"
        fontSize="1.8"
        fill="#333333"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="30"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="400"
        fontSize="1.8"
        fill="#333333"
      >
        {data.website}
      </text>
      <line x1="8" y1="33" x2="60" y2="33" stroke="#0057B8" strokeWidth="0.3" />
      <text
        x="8"
        y="37"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="300"
        fontSize="1.6"
        fill="#666666"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
      <text
        x="8"
        y="40.5"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="300"
        fontSize="1.4"
        fill="#999999"
      >
        {data.addressEn}
      </text>
    </g>
  ),
};

// ============================================================
// 2. AKZIDENZ — Max Miedinger: Helvetica-style clean, flush left, no decoration
// ============================================================
const akzidenzTemplate: TemplateDefinition = {
  id: 'akzidenz',
  name: 'AKZIDENZ',
  nameJa: '活',
  category: 'swiss',
  designer: 'Max Miedinger',
  description: 'ヘルベチカの精神。装飾なし、余白と書体だけで語る。',
  accentColor: '#000000',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Pure typography, no decorative elements */}
      <text
        x="8"
        y="16"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="700"
        fontSize="7"
        letterSpacing="0.8"
        fill="#000000"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="22"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="400"
        fontSize="2.6"
        letterSpacing="0.4"
        fill="#333333"
      >
        {data.nameEn}
      </text>
      {/* Title with generous whitespace above */}
      <text
        x="8"
        y="32"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="300"
        fontSize="2.2"
        fill="#666666"
      >
        {data.titleJa}
      </text>
      {/* Company at bottom, flush left */}
      <text
        x="8"
        y="48"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="500"
        fontSize="2.2"
        fill="#000000"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Company name large, flush left */}
      <text
        x="8"
        y="12"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="700"
        fontSize="3.4"
        letterSpacing="0.3"
        fill="#000000"
      >
        {data.companyEn}
      </text>
      <text
        x="8"
        y="16.5"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="400"
        fontSize="2"
        fill="#666666"
      >
        {data.companyJa}
      </text>
      {/* Contact info, clean list, consistent spacing */}
      <text
        x="8"
        y="25"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="400"
        fontSize="1.8"
        fill="#333333"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="29"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="400"
        fontSize="1.8"
        fill="#333333"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="33"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="400"
        fontSize="1.8"
        fill="#333333"
      >
        {data.website}
      </text>
      {/* Address at bottom */}
      <text
        x="8"
        y="42"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="300"
        fontSize="1.6"
        fill="#666666"
      >
        〒{data.zipCode}
      </text>
      <text
        x="8"
        y="45.5"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="300"
        fontSize="1.6"
        fill="#666666"
      >
        {data.addressJa}
      </text>
      <text
        x="8"
        y="49"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="300"
        fontSize="1.4"
        fill="#999999"
      >
        {data.addressEn}
      </text>
    </g>
  ),
};

// ============================================================
// 3. GRID-SWISS — Karl Gerstner: Visible light grid, content at intersections
// ============================================================
const gridSwissTemplate: TemplateDefinition = {
  id: 'grid-swiss',
  name: 'GRID',
  nameJa: '格',
  category: 'swiss',
  designer: 'Karl Gerstner',
  description: '可視グリッドの美学。交点にコンテンツが配置される構造美。',
  accentColor: '#0057B8',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      <defs>
        {/* Visible grid pattern */}
        <pattern id="grid-swiss-grid-front" x="0" y="0" width="7.583" height="6.875" patternUnits="userSpaceOnUse">
          <line x1="7.583" y1="0" x2="7.583" y2="6.875" stroke="#e0e0e0" strokeWidth="0.15" />
          <line x1="0" y1="6.875" x2="7.583" y2="6.875" stroke="#e0e0e0" strokeWidth="0.15" />
        </pattern>
      </defs>
      {/* Visible grid background */}
      <rect width="91" height="55" fill="url(#grid-swiss-grid-front)" />
      {/* Content snapped to grid intersections */}
      {/* Name at intersection col 2, row 2 */}
      <text
        x="15.166"
        y="13.75"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="700"
        fontSize="6.5"
        fill="#1a1a1a"
      >
        {data.nameJa}
      </text>
      {/* English name at col 2, row 3 */}
      <text
        x="15.166"
        y="20.625"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="400"
        fontSize="2.4"
        letterSpacing="0.3"
        fill="#0057B8"
      >
        {data.nameEn}
      </text>
      {/* Title at col 2, row 4 */}
      <text
        x="15.166"
        y="27.5"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="300"
        fontSize="2"
        fill="#666666"
      >
        {data.titleJa}
      </text>
      {/* Blue accent dot at grid intersection */}
      <circle cx="7.583" cy="13.75" r="1.2" fill="#0057B8" />
      {/* Company at col 2, row 7 */}
      <text
        x="15.166"
        y="48.125"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="500"
        fontSize="2.2"
        fill="#333333"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      <defs>
        <pattern id="grid-swiss-grid-back" x="0" y="0" width="7.583" height="6.875" patternUnits="userSpaceOnUse">
          <line x1="7.583" y1="0" x2="7.583" y2="6.875" stroke="#e0e0e0" strokeWidth="0.15" />
          <line x1="0" y1="6.875" x2="7.583" y2="6.875" stroke="#e0e0e0" strokeWidth="0.15" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#grid-swiss-grid-back)" />
      {/* Company at col 2, row 1 */}
      <text
        x="15.166"
        y="6.875"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="700"
        fontSize="2.8"
        fill="#1a1a1a"
      >
        {data.companyJa}
      </text>
      <text
        x="15.166"
        y="13.75"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="500"
        fontSize="2"
        fill="#0057B8"
      >
        {data.companyEn}
      </text>
      {/* Contact at col 2, row 3-5 */}
      <text
        x="15.166"
        y="20.625"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="400"
        fontSize="1.8"
        fill="#333333"
      >
        {data.tel}
      </text>
      <text
        x="15.166"
        y="27.5"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="400"
        fontSize="1.8"
        fill="#333333"
      >
        {data.email}
      </text>
      <text
        x="15.166"
        y="34.375"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="400"
        fontSize="1.8"
        fill="#333333"
      >
        {data.website}
      </text>
      {/* Address at col 2, row 6-7 */}
      <text
        x="15.166"
        y="41.25"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="300"
        fontSize="1.6"
        fill="#666666"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
      <text
        x="15.166"
        y="48.125"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="300"
        fontSize="1.4"
        fill="#999999"
      >
        {data.addressEn}
      </text>
      {/* Grid accent dots at key intersections */}
      <circle cx="7.583" cy="6.875" r="1" fill="#0057B8" />
      <circle cx="7.583" cy="20.625" r="0.5" fill="#0057B8" />
    </g>
  ),
};

// ============================================================
// 4. MODULAR — Wim Crouwel: Modular scale spacing (8/16/24), systematic
// ============================================================
const modularTemplate: TemplateDefinition = {
  id: 'modular',
  name: 'MODULAR',
  nameJa: '組',
  category: 'swiss',
  designer: 'Wim Crouwel',
  description: 'モジュラースケールの秩序。8の倍数が全てを支配する。',
  accentColor: '#FFD700',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1a1a1a" />
      {/* Yellow modular accent bar: 8 units from top, 8 units wide */}
      <rect x="8" y="8" width="2" height="24" fill="#FFD700" />
      {/* Name block: starts at 16 units from left (modular position) */}
      <text
        x="16"
        y="16"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="700"
        fontSize="5.5"
        letterSpacing="0.6"
        fill="#ffffff"
      >
        {data.nameJa}
      </text>
      <text
        x="16"
        y="22"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="300"
        fontSize="2.4"
        letterSpacing="0.5"
        fill="#FFD700"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Title at 32 units from top (8+24) */}
      <text
        x="16"
        y="32"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="300"
        fontSize="2"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      <text
        x="16"
        y="36"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="300"
        fontSize="1.8"
        fill="#666666"
      >
        {data.titleEn}
      </text>
      {/* Company at 48 units (modular: 8*6) */}
      <text
        x="16"
        y="48"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="500"
        fontSize="2"
        fill="#cccccc"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1a1a1a" />
      {/* Modular grid accent elements */}
      <rect x="8" y="8" width="16" height="0.5" fill="#FFD700" />
      <rect x="8" y="16" width="16" height="0.5" fill="#333333" />
      <rect x="8" y="24" width="16" height="0.5" fill="#333333" />
      {/* Company block */}
      <text
        x="32"
        y="12"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="700"
        fontSize="2.8"
        fill="#ffffff"
      >
        {data.companyJa}
      </text>
      <text
        x="32"
        y="16"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.3"
        fill="#FFD700"
      >
        {data.companyEn}
      </text>
      {/* Contact at modular positions */}
      <text
        x="32"
        y="24"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="400"
        fontSize="1.8"
        fill="#cccccc"
      >
        {data.tel}
      </text>
      <text
        x="32"
        y="28"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="400"
        fontSize="1.8"
        fill="#cccccc"
      >
        {data.email}
      </text>
      <text
        x="32"
        y="32"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="400"
        fontSize="1.8"
        fill="#cccccc"
      >
        {data.website}
      </text>
      {/* Address block at modular position 40 (8*5) */}
      <rect x="32" y="37" width="48" height="0.3" fill="#FFD700" />
      <text
        x="32"
        y="42"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="300"
        fontSize="1.6"
        fill="#888888"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
      <text
        x="32"
        y="46"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="300"
        fontSize="1.4"
        fill="#666666"
      >
        {data.addressEn}
      </text>
    </g>
  ),
};

// ============================================================
// 5. RED-DOT — Hans Hillmann: Small red circle, B&W type
// ============================================================
const redDotTemplate: TemplateDefinition = {
  id: 'red-dot',
  name: 'RED DOT',
  nameJa: '赤',
  category: 'swiss',
  designer: 'Hans Hillmann',
  description: '小さな赤い円が唯一のアクセント。白黒の文字が静かに語る。',
  accentColor: '#E60012',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* The singular red dot - only color accent */}
      <circle cx="12" cy="12" r="2.5" fill="#E60012" />
      {/* Name in black, flush left */}
      <text
        x="12"
        y="26"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="700"
        fontSize="6.5"
        letterSpacing="0.6"
        fill="#000000"
      >
        {data.nameJa}
      </text>
      <text
        x="12"
        y="32"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="400"
        fontSize="2.4"
        letterSpacing="0.4"
        fill="#333333"
      >
        {data.nameEn}
      </text>
      {/* Title in lighter weight */}
      <text
        x="12"
        y="39"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="300"
        fontSize="2"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      {/* Company at bottom */}
      <text
        x="12"
        y="48"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="500"
        fontSize="2.2"
        fill="#000000"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Red dot, different position on back - bottom right */}
      <circle cx="79" cy="43" r="2.5" fill="#E60012" />
      {/* Company top */}
      <text
        x="12"
        y="10"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="700"
        fontSize="3"
        fill="#000000"
      >
        {data.companyJa}
      </text>
      <text
        x="12"
        y="14.5"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="500"
        fontSize="2"
        fill="#333333"
      >
        {data.companyEn}
      </text>
      {/* Contact details in B&W */}
      <text
        x="12"
        y="22"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="400"
        fontSize="1.8"
        fill="#000000"
      >
        {data.tel}
      </text>
      <text
        x="12"
        y="26"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="400"
        fontSize="1.8"
        fill="#000000"
      >
        {data.email}
      </text>
      <text
        x="12"
        y="30"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="400"
        fontSize="1.8"
        fill="#000000"
      >
        {data.website}
      </text>
      {/* Address */}
      <text
        x="12"
        y="38"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="300"
        fontSize="1.6"
        fill="#666666"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
      <text
        x="12"
        y="42"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="300"
        fontSize="1.4"
        fill="#999999"
      >
        {data.addressEn}
      </text>
    </g>
  ),
};

// ============================================================
// 6. POSTER — Armin Hofmann: Poster-like bold type hierarchy, asymmetric
// ============================================================
const posterTemplate: TemplateDefinition = {
  id: 'poster',
  name: 'POSTER',
  nameJa: '貼',
  category: 'swiss',
  designer: 'Armin Hofmann',
  description: 'ポスターのような大胆な文字階層。非対称のバランスが緊張感を生む。',
  accentColor: '#000000',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Massive name - poster-like scale, asymmetric placement */}
      <text
        x="6"
        y="24"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="900"
        fontSize="12"
        letterSpacing="1"
        fill="#000000"
      >
        {data.nameJa}
      </text>
      {/* English name dramatically smaller for contrast */}
      <text
        x="6"
        y="30"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.6"
        fill="#888888"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Title pushed to far right for asymmetric balance */}
      <text
        x="83"
        y="42"
        textAnchor="end"
        fontFamily={JA_FONT}
        fontWeight="300"
        fontSize="2"
        fill="#666666"
      >
        {data.titleJa}
      </text>
      {/* Company at bottom left */}
      <text
        x="6"
        y="50"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="500"
        fontSize="2.4"
        fill="#000000"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#000000" />
      {/* Inverted - white on black for poster drama */}
      <text
        x="6"
        y="14"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="900"
        fontSize="4.5"
        fill="#ffffff"
      >
        {data.companyJa}
      </text>
      <text
        x="6"
        y="19"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="700"
        fontSize="2.2"
        letterSpacing="0.5"
        fill="#ffffff"
      >
        {data.companyEn}
      </text>
      {/* Contact in light weight, asymmetrically placed right */}
      <text
        x="83"
        y="28"
        textAnchor="end"
        fontFamily={EN_FONT}
        fontWeight="300"
        fontSize="1.8"
        fill="#cccccc"
      >
        {data.tel}
      </text>
      <text
        x="83"
        y="32"
        textAnchor="end"
        fontFamily={EN_FONT}
        fontWeight="300"
        fontSize="1.8"
        fill="#cccccc"
      >
        {data.email}
      </text>
      <text
        x="83"
        y="36"
        textAnchor="end"
        fontFamily={EN_FONT}
        fontWeight="300"
        fontSize="1.8"
        fill="#cccccc"
      >
        {data.website}
      </text>
      {/* Address at bottom left */}
      <text
        x="6"
        y="45"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="300"
        fontSize="1.6"
        fill="#888888"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
      <text
        x="6"
        y="49"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="300"
        fontSize="1.4"
        fill="#666666"
      >
        {data.addressEn}
      </text>
    </g>
  ),
};

// ============================================================
// 7. BASELINE — Emil Ruder: Strong baseline grid visible, text aligned
// ============================================================
const baselineTemplate: TemplateDefinition = {
  id: 'baseline',
  name: 'BASELINE',
  nameJa: '基',
  category: 'swiss',
  designer: 'Emil Ruder',
  description: 'ベースライングリッドの美学。全てのテキストが見えない線に従う。',
  accentColor: '#E60012',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      <defs>
        {/* Visible baseline grid pattern */}
        <pattern id="baseline-lines-front" x="0" y="4.5" width="91" height="4.5" patternUnits="userSpaceOnUse">
          <line x1="0" y1="4.5" x2="91" y2="4.5" stroke="#f0e0e0" strokeWidth="0.15" />
        </pattern>
      </defs>
      {/* Baseline grid visible across card */}
      <rect width="91" height="55" fill="url(#baseline-lines-front)" />
      {/* Red vertical rule - left margin marker */}
      <line x1="10" y1="4.5" x2="10" y2="49.5" stroke="#E60012" strokeWidth="0.3" />
      {/* All text sits perfectly on baseline grid lines */}
      {/* Baseline 2 (y=9) */}
      <text
        x="13"
        y="9"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="300"
        fontSize="2"
        fill="#999999"
      >
        {data.titleJa}
      </text>
      {/* Baseline 4-5 (y=18, 22.5) - Name */}
      <text
        x="13"
        y="18"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="700"
        fontSize="6.5"
        fill="#000000"
      >
        {data.nameJa}
      </text>
      {/* Baseline 6 (y=27) */}
      <text
        x="13"
        y="27"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="400"
        fontSize="2.4"
        letterSpacing="0.3"
        fill="#333333"
      >
        {data.nameEn}
      </text>
      {/* Baseline 10 (y=45) - Company */}
      <text
        x="13"
        y="45"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="500"
        fontSize="2.4"
        fill="#000000"
      >
        {data.companyJa}
      </text>
      {/* Baseline 11 (y=49.5) */}
      <text
        x="13"
        y="49.5"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="400"
        fontSize="1.8"
        fill="#666666"
      >
        {data.companyEn}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      <defs>
        <pattern id="baseline-lines-back" x="0" y="4.5" width="91" height="4.5" patternUnits="userSpaceOnUse">
          <line x1="0" y1="4.5" x2="91" y2="4.5" stroke="#f0e0e0" strokeWidth="0.15" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#baseline-lines-back)" />
      {/* Red margin rule */}
      <line x1="10" y1="4.5" x2="10" y2="49.5" stroke="#E60012" strokeWidth="0.3" />
      {/* Company on baseline 2 */}
      <text
        x="13"
        y="9"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="700"
        fontSize="3"
        fill="#000000"
      >
        {data.companyJa}
      </text>
      {/* Contact on baselines 4,5,6,7 */}
      <text
        x="13"
        y="18"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="400"
        fontSize="1.8"
        fill="#333333"
      >
        T {data.tel}
      </text>
      <text
        x="13"
        y="22.5"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="400"
        fontSize="1.8"
        fill="#333333"
      >
        E {data.email}
      </text>
      <text
        x="13"
        y="27"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="400"
        fontSize="1.8"
        fill="#333333"
      >
        W {data.website}
      </text>
      {/* Address on baselines 9,10 */}
      <text
        x="13"
        y="36"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="300"
        fontSize="1.6"
        fill="#666666"
      >
        〒{data.zipCode}
      </text>
      <text
        x="13"
        y="40.5"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="300"
        fontSize="1.6"
        fill="#666666"
      >
        {data.addressJa}
      </text>
      <text
        x="13"
        y="45"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="300"
        fontSize="1.4"
        fill="#999999"
      >
        {data.addressEn}
      </text>
    </g>
  ),
};

// ============================================================
// 8. COLUMN — Richard Paul Lohse: Multi-column text layout, newspaper-like
// ============================================================
const columnTemplate: TemplateDefinition = {
  id: 'column',
  name: 'COLUMN',
  nameJa: '柱',
  category: 'swiss',
  designer: 'Richard Paul Lohse',
  description: '段組の構造美。新聞のような二段・三段レイアウトが情報を整理する。',
  accentColor: '#0057B8',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Column divider lines */}
      <line x1="32" y1="6" x2="32" y2="49" stroke="#e0e0e0" strokeWidth="0.2" />
      <line x1="62" y1="6" x2="62" y2="49" stroke="#e0e0e0" strokeWidth="0.2" />
      {/* Column 1 (left): Name vertical emphasis */}
      <text
        x="6"
        y="12"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="700"
        fontSize="6"
        fill="#000000"
      >
        {data.nameJa}
      </text>
      <text
        x="6"
        y="17.5"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="400"
        fontSize="2.2"
        letterSpacing="0.2"
        fill="#0057B8"
      >
        {data.nameEn}
      </text>
      {/* Column 2 (middle): Title info */}
      <text
        x="35"
        y="12"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="400"
        fontSize="2"
        fill="#666666"
      >
        {data.titleJa}
      </text>
      <text
        x="35"
        y="16"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="300"
        fontSize="1.6"
        fill="#999999"
      >
        {data.titleEn}
      </text>
      {/* Column 3 (right): Company */}
      <text
        x="65"
        y="12"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="500"
        fontSize="2.2"
        fill="#333333"
      >
        {data.companyJa}
      </text>
      <text
        x="65"
        y="16"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="400"
        fontSize="1.6"
        fill="#666666"
      >
        {data.companyEn}
      </text>
      {/* Blue accent bar spanning columns at bottom */}
      <rect x="6" y="46" width="79" height="0.8" fill="#0057B8" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Blue header bar */}
      <rect x="0" y="0" width="91" height="8" fill="#0057B8" />
      <text
        x="6"
        y="5.5"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="700"
        fontSize="3"
        fill="#ffffff"
      >
        {data.companyJa}
      </text>
      <text
        x="83"
        y="5.5"
        textAnchor="end"
        fontFamily={EN_FONT}
        fontWeight="500"
        fontSize="2"
        fill="#ffffff"
      >
        {data.companyEn}
      </text>
      {/* Two-column layout for contact and address */}
      <line x1="46" y1="12" x2="46" y2="48" stroke="#e0e0e0" strokeWidth="0.2" />
      {/* Left column: Contact */}
      <text
        x="6"
        y="15"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="600"
        fontSize="1.6"
        letterSpacing="0.3"
        fill="#0057B8"
      >
        CONTACT
      </text>
      <text
        x="6"
        y="20"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="400"
        fontSize="1.8"
        fill="#333333"
      >
        {data.tel}
      </text>
      <text
        x="6"
        y="24.5"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="400"
        fontSize="1.8"
        fill="#333333"
      >
        {data.email}
      </text>
      <text
        x="6"
        y="29"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="400"
        fontSize="1.8"
        fill="#333333"
      >
        {data.website}
      </text>
      {/* Right column: Address */}
      <text
        x="49"
        y="15"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="600"
        fontSize="1.6"
        letterSpacing="0.3"
        fill="#0057B8"
      >
        ADDRESS
      </text>
      <text
        x="49"
        y="20"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="400"
        fontSize="1.6"
        fill="#333333"
      >
        〒{data.zipCode}
      </text>
      <text
        x="49"
        y="24.5"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="400"
        fontSize="1.6"
        fill="#333333"
      >
        {data.addressJa}
      </text>
      <text
        x="49"
        y="29"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="300"
        fontSize="1.4"
        fill="#999999"
      >
        {data.addressEn}
      </text>
    </g>
  ),
};

// ============================================================
// 9. NEUE — Neue Grafik journal style: Structured info blocks, labeled sections
// ============================================================
const neueTemplate: TemplateDefinition = {
  id: 'neue',
  name: 'NEUE',
  nameJa: '新',
  category: 'swiss',
  designer: 'Neue Grafik',
  description: 'ノイエ・グラフィーク誌の精神。ラベル付きセクションが情報を構造化する。',
  accentColor: '#E60012',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Section label: NAME */}
      <text
        x="8"
        y="8"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="600"
        fontSize="1.4"
        letterSpacing="0.5"
        fill="#E60012"
      >
        NAME
      </text>
      <line x1="8" y1="9.5" x2="40" y2="9.5" stroke="#E60012" strokeWidth="0.2" />
      <text
        x="8"
        y="16"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="700"
        fontSize="6"
        fill="#000000"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="21"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="400"
        fontSize="2.4"
        letterSpacing="0.3"
        fill="#333333"
      >
        {data.nameEn}
      </text>
      {/* Section label: TITLE */}
      <text
        x="8"
        y="29"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="600"
        fontSize="1.4"
        letterSpacing="0.5"
        fill="#E60012"
      >
        TITLE
      </text>
      <line x1="8" y1="30.5" x2="40" y2="30.5" stroke="#E60012" strokeWidth="0.2" />
      <text
        x="8"
        y="35"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="400"
        fontSize="2.2"
        fill="#666666"
      >
        {data.titleJa}
      </text>
      <text
        x="8"
        y="39"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="300"
        fontSize="1.8"
        fill="#999999"
      >
        {data.titleEn}
      </text>
      {/* Section label: COMPANY */}
      <text
        x="8"
        y="46"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="600"
        fontSize="1.4"
        letterSpacing="0.5"
        fill="#E60012"
      >
        COMPANY
      </text>
      <text
        x="28"
        y="46"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="500"
        fontSize="2.2"
        fill="#000000"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Red top accent line */}
      <rect x="0" y="0" width="91" height="1" fill="#E60012" />
      {/* Section: COMPANY */}
      <text
        x="8"
        y="8"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="600"
        fontSize="1.4"
        letterSpacing="0.5"
        fill="#E60012"
      >
        COMPANY
      </text>
      <line x1="8" y1="9.5" x2="83" y2="9.5" stroke="#E60012" strokeWidth="0.2" />
      <text
        x="8"
        y="14"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="700"
        fontSize="2.8"
        fill="#000000"
      >
        {data.companyJa}
      </text>
      <text
        x="8"
        y="18"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="500"
        fontSize="2"
        fill="#333333"
      >
        {data.companyEn}
      </text>
      {/* Section: CONTACT */}
      <text
        x="8"
        y="24"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="600"
        fontSize="1.4"
        letterSpacing="0.5"
        fill="#E60012"
      >
        CONTACT
      </text>
      <line x1="8" y1="25.5" x2="83" y2="25.5" stroke="#E60012" strokeWidth="0.2" />
      <text
        x="8"
        y="30"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="400"
        fontSize="1.8"
        fill="#333333"
      >
        {data.tel}
      </text>
      <text
        x="40"
        y="30"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="400"
        fontSize="1.8"
        fill="#333333"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="34.5"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="400"
        fontSize="1.8"
        fill="#333333"
      >
        {data.website}
      </text>
      {/* Section: ADDRESS */}
      <text
        x="8"
        y="41"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="600"
        fontSize="1.4"
        letterSpacing="0.5"
        fill="#E60012"
      >
        ADDRESS
      </text>
      <line x1="8" y1="42.5" x2="83" y2="42.5" stroke="#E60012" strokeWidth="0.2" />
      <text
        x="8"
        y="47"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="300"
        fontSize="1.6"
        fill="#666666"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
      <text
        x="8"
        y="51"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="300"
        fontSize="1.4"
        fill="#999999"
      >
        {data.addressEn}
      </text>
    </g>
  ),
};

// ============================================================
// 10. SYSTEM — Unimark / Massimo Vignelli: System-font minimal, information-first
// ============================================================
const systemTemplate: TemplateDefinition = {
  id: 'system',
  name: 'SYSTEM',
  nameJa: '系',
  category: 'swiss',
  designer: 'Unimark (Massimo Vignelli)',
  description: 'システムの美学。情報が最優先。装飾はゼロ、秩序は最大。',
  accentColor: '#000000',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Top rule */}
      <line x1="6" y1="6" x2="85" y2="6" stroke="#000000" strokeWidth="0.5" />
      {/* Name - system-like uniformity */}
      <text
        x="6"
        y="14"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="700"
        fontSize="5.5"
        fill="#000000"
      >
        {data.nameJa}
      </text>
      <text
        x="6"
        y="19"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="400"
        fontSize="2.2"
        letterSpacing="0.3"
        fill="#333333"
      >
        {data.nameEn}
      </text>
      {/* Thin divider */}
      <line x1="6" y1="22" x2="85" y2="22" stroke="#000000" strokeWidth="0.15" />
      {/* Title */}
      <text
        x="6"
        y="27"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="400"
        fontSize="2"
        fill="#666666"
      >
        {data.titleJa}
      </text>
      <text
        x="6"
        y="31"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="300"
        fontSize="1.8"
        fill="#999999"
      >
        {data.titleEn}
      </text>
      {/* Company at bottom with rule */}
      <line x1="6" y1="43" x2="85" y2="43" stroke="#000000" strokeWidth="0.15" />
      <text
        x="6"
        y="48"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="500"
        fontSize="2.4"
        fill="#000000"
      >
        {data.companyJa}
      </text>
      {/* Bottom rule */}
      <line x1="6" y1="50" x2="85" y2="50" stroke="#000000" strokeWidth="0.5" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Top rule */}
      <line x1="6" y1="6" x2="85" y2="6" stroke="#000000" strokeWidth="0.5" />
      {/* Company block */}
      <text
        x="6"
        y="12"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="700"
        fontSize="2.8"
        fill="#000000"
      >
        {data.companyJa}
      </text>
      <text
        x="6"
        y="16"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="500"
        fontSize="2"
        letterSpacing="0.2"
        fill="#333333"
      >
        {data.companyEn}
      </text>
      {/* Divider */}
      <line x1="6" y1="19" x2="85" y2="19" stroke="#000000" strokeWidth="0.15" />
      {/* Information-first: all details in uniform rows */}
      <text
        x="6"
        y="24"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="500"
        fontSize="1.4"
        fill="#999999"
      >
        TEL
      </text>
      <text
        x="18"
        y="24"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="400"
        fontSize="1.8"
        fill="#333333"
      >
        {data.tel}
      </text>
      <text
        x="6"
        y="28.5"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="500"
        fontSize="1.4"
        fill="#999999"
      >
        EMAIL
      </text>
      <text
        x="18"
        y="28.5"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="400"
        fontSize="1.8"
        fill="#333333"
      >
        {data.email}
      </text>
      <text
        x="6"
        y="33"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="500"
        fontSize="1.4"
        fill="#999999"
      >
        WEB
      </text>
      <text
        x="18"
        y="33"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="400"
        fontSize="1.8"
        fill="#333333"
      >
        {data.website}
      </text>
      {/* Divider */}
      <line x1="6" y1="36" x2="85" y2="36" stroke="#000000" strokeWidth="0.15" />
      {/* Address */}
      <text
        x="6"
        y="40.5"
        textAnchor="start"
        fontFamily={JA_FONT}
        fontWeight="300"
        fontSize="1.6"
        fill="#666666"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
      <text
        x="6"
        y="44.5"
        textAnchor="start"
        fontFamily={EN_FONT}
        fontWeight="300"
        fontSize="1.4"
        fill="#999999"
      >
        {data.addressEn}
      </text>
      {/* Bottom rule */}
      <line x1="6" y1="50" x2="85" y2="50" stroke="#000000" strokeWidth="0.5" />
    </g>
  ),
};

// ============================================================
// Export all Swiss templates
// ============================================================
export const swissTemplates: TemplateDefinition[] = [
  ratioTemplate,
  akzidenzTemplate,
  gridSwissTemplate,
  modularTemplate,
  redDotTemplate,
  posterTemplate,
  baselineTemplate,
  columnTemplate,
  neueTemplate,
  systemTemplate,
];
