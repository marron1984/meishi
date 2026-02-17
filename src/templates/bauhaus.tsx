import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. DESSAU (校) — The Bauhaus school building
// Clean grid, primary color blocks, architectural composition
// ============================================================
const dessauTemplate: TemplateDefinition = {
  id: 'bauhaus-dessau',
  name: 'DESSAU',
  nameJa: '校',
  category: 'bauhaus',
  designer: 'Bauhaus Series',
  description: 'デッサウ校舎。直角と原色のブロックが建築的秩序を描く。',
  accentColor: '#E63946',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FAFAFA" />
      {/* Architectural color blocks */}
      <rect x="0" y="0" width="25" height="55" fill="#1D3557" />
      <rect x="0" y="0" width="25" height="18" fill="#E63946" />
      <rect x="25" y="45" width="66" height="10" fill="#F4D35E" />
      <text
        x="34"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="6.5"
        letterSpacing="0.3"
        fill="#1a1a1a"
      >
        {data.nameJa}
      </text>
      <text
        x="34"
        y="26.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="2"
        letterSpacing="0.3"
        fill="#555555"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="34"
        y="34"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      <text
        x="12.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="rgba(255,255,255,0.7)"
      >
        {data.companyJa}
      </text>
      <text
        x="34"
        y="49"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#1a1a1a"
      >
        {data.email}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FAFAFA" />
      <rect x="66" y="0" width="25" height="55" fill="#1D3557" />
      <rect x="66" y="37" width="25" height="18" fill="#E63946" />
      <rect x="0" y="0" width="66" height="10" fill="#F4D35E" />
      <text
        x="10"
        y="7.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="2.5"
        fill="#1a1a1a"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="19"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#666666"
      >
        {data.companyEn}
      </text>
      <text
        x="10"
        y="27"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#333333"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="31"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#333333"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="35"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#333333"
      >
        {data.website}
      </text>
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
// 2. KANDINSKY (点線面) — Point, Line, Plane
// Circles, triangles and lines in dynamic composition
// ============================================================
const kandinskyTemplate: TemplateDefinition = {
  id: 'bauhaus-kandinsky',
  name: 'KANDINSKY',
  nameJa: '点線面',
  category: 'bauhaus',
  designer: 'Bauhaus Series',
  description: '点・線・面。カンディンスキーの抽象構成が踊る。',
  accentColor: '#1D3557',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFFF5" />
      {/* Kandinsky-style abstract elements */}
      <circle cx="72" cy="15" r="8" fill="none" stroke="#E63946" strokeWidth="0.5" />
      <circle cx="72" cy="15" r="4" fill="#E63946" opacity="0.15" />
      <circle cx="72" cy="15" r="1.5" fill="#E63946" />
      <polygon points="15,42 22,42 18.5,36" fill="#F4D35E" opacity="0.6" />
      <line x1="10" y1="48" x2="80" y2="5" stroke="#1D3557" strokeWidth="0.15" opacity="0.3" />
      <line x1="5" y1="35" x2="30" y2="35" stroke="#1D3557" strokeWidth="0.3" />
      <rect x="80" y="40" width="6" height="6" fill="#1D3557" opacity="0.2" />
      <text
        x="10"
        y="18"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="6"
        letterSpacing="0.3"
        fill="#1D3557"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="24"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#555555"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="31"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#888888"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFFF5" />
      <circle cx="20" cy="42" r="6" fill="none" stroke="#E63946" strokeWidth="0.4" />
      <circle cx="20" cy="42" r="2" fill="#E63946" opacity="0.3" />
      <polygon points="75,8 82,8 78.5,2" fill="#F4D35E" opacity="0.4" />
      <line x1="30" y1="50" x2="85" y2="10" stroke="#1D3557" strokeWidth="0.12" opacity="0.25" />
      <rect x="5" y="5" width="4" height="4" fill="#1D3557" opacity="0.15" />
      <text
        x="45.5"
        y="12"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="2.5"
        fill="#1D3557"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="16.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#888888"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="20" x2="71" y2="20" stroke="#1D3557" strokeWidth="0.15" />
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#333333"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#333333"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="34"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#333333"
      >
        {data.website}
      </text>
      <text
        x="45.5"
        y="48"
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
// 3. MOHOLY (光) — Moholy-Nagy light experiments
// Circular light play, overlapping translucent shapes
// ============================================================
const moholyTemplate: TemplateDefinition = {
  id: 'bauhaus-moholy',
  name: 'MOHOLY',
  nameJa: '光',
  category: 'bauhaus',
  designer: 'Bauhaus Series',
  description: '光の実験。モホイ＝ナジの透過する円と光のコンポジション。',
  accentColor: '#F4D35E',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1a1a1a" />
      {/* Overlapping translucent circles */}
      <circle cx="65" cy="20" r="18" fill="#E63946" opacity="0.25" />
      <circle cx="55" cy="30" r="14" fill="#F4D35E" opacity="0.2" />
      <circle cx="72" cy="35" r="10" fill="#1D3557" opacity="0.3" />
      <circle cx="60" cy="25" r="3" fill="#ffffff" opacity="0.15" />
      {/* Light beam lines */}
      <line x1="0" y1="10" x2="45" y2="20" stroke="#ffffff" strokeWidth="0.08" opacity="0.3" />
      <line x1="0" y1="15" x2="45" y2="25" stroke="#ffffff" strokeWidth="0.08" opacity="0.2" />
      <text
        x="8"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="6"
        letterSpacing="0.8"
        fill="#ffffff"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="26"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.4"
        fill="rgba(255,255,255,0.6)"
      >
        {data.nameEn}
      </text>
      <text
        x="8"
        y="38"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="rgba(255,255,255,0.4)"
      >
        {data.titleJa}
      </text>
      <text
        x="8"
        y="46"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="rgba(255,255,255,0.3)"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1a1a1a" />
      <circle cx="25" cy="35" r="15" fill="#E63946" opacity="0.2" />
      <circle cx="35" cy="25" r="11" fill="#F4D35E" opacity="0.15" />
      <circle cx="18" cy="28" r="8" fill="#1D3557" opacity="0.25" />
      <text
        x="83"
        y="12"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#ffffff"
      >
        {data.companyJa}
      </text>
      <text
        x="83"
        y="16"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="rgba(255,255,255,0.5)"
      >
        {data.companyEn}
      </text>
      <line x1="50" y1="20" x2="83" y2="20" stroke="rgba(255,255,255,0.15)" strokeWidth="0.15" />
      <text
        x="83"
        y="26"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="rgba(255,255,255,0.7)"
      >
        {data.tel}
      </text>
      <text
        x="83"
        y="30"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="rgba(255,255,255,0.7)"
      >
        {data.email}
      </text>
      <text
        x="83"
        y="34"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="rgba(255,255,255,0.7)"
      >
        {data.website}
      </text>
      <text
        x="83"
        y="46"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="rgba(255,255,255,0.35)"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 4. ALBERS (色) — Josef Albers color interaction
// Nested squares, color interaction study
// ============================================================
const albersTemplate: TemplateDefinition = {
  id: 'bauhaus-albers',
  name: 'ALBERS',
  nameJa: '色',
  category: 'bauhaus',
  designer: 'Bauhaus Series',
  description: '色の相互作用。ネストされた正方形が色彩の対話を生む。',
  accentColor: '#E63946',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F4D35E" />
      {/* Albers nested squares */}
      <rect x="55" y="5" width="32" height="32" fill="#E63946" />
      <rect x="60" y="10" width="22" height="22" fill="#1D3557" />
      <rect x="66" y="16" width="10" height="10" fill="#F4D35E" />
      <text
        x="10"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="6"
        letterSpacing="0.3"
        fill="#1D3557"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="26"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="rgba(29,53,87,0.7)"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="rgba(29,53,87,0.5)"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="46"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="rgba(29,53,87,0.4)"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1D3557" />
      <rect x="4" y="18" width="32" height="32" fill="#E63946" />
      <rect x="9" y="23" width="22" height="22" fill="#F4D35E" />
      <rect x="15" y="29" width="10" height="10" fill="#1D3557" />
      <text
        x="81"
        y="12"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="2.5"
        fill="#F4D35E"
      >
        {data.companyJa}
      </text>
      <text
        x="81"
        y="16.5"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="rgba(244,211,94,0.6)"
      >
        {data.companyEn}
      </text>
      <text
        x="81"
        y="24"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="rgba(255,255,255,0.8)"
      >
        {data.tel}
      </text>
      <text
        x="81"
        y="28"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="rgba(255,255,255,0.8)"
      >
        {data.email}
      </text>
      <text
        x="81"
        y="32"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="rgba(255,255,255,0.8)"
      >
        {data.website}
      </text>
      <text
        x="81"
        y="44"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="rgba(244,211,94,0.5)"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 5. KLEE (夢) — Paul Klee dreamlike composition
// Playful grid of colored squares, whimsical arrangement
// ============================================================
const kleeTemplate: TemplateDefinition = {
  id: 'bauhaus-klee',
  name: 'KLEE',
  nameJa: '夢',
  category: 'bauhaus',
  designer: 'Bauhaus Series',
  description: 'クレーの夢。色彩の小さなマスが遊び心を描く。',
  accentColor: '#E63946',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFF8E7" />
      {/* Klee-style color grid in corner */}
      <rect x="60" y="3" width="6" height="6" fill="#E63946" opacity="0.7" />
      <rect x="67" y="3" width="6" height="6" fill="#F4D35E" opacity="0.6" />
      <rect x="74" y="3" width="6" height="6" fill="#1D3557" opacity="0.5" />
      <rect x="81" y="3" width="6" height="6" fill="#E63946" opacity="0.3" />
      <rect x="60" y="10" width="6" height="6" fill="#1D3557" opacity="0.4" />
      <rect x="67" y="10" width="6" height="6" fill="#E63946" opacity="0.5" />
      <rect x="74" y="10" width="6" height="6" fill="#F4D35E" opacity="0.7" />
      <rect x="81" y="10" width="6" height="6" fill="#1D3557" opacity="0.6" />
      <rect x="60" y="17" width="6" height="6" fill="#F4D35E" opacity="0.5" />
      <rect x="67" y="17" width="6" height="6" fill="#1D3557" opacity="0.7" />
      <rect x="74" y="17" width="6" height="6" fill="#E63946" opacity="0.4" />
      <rect x="81" y="17" width="6" height="6" fill="#F4D35E" opacity="0.3" />
      <text
        x="10"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="0.4"
        fill="#1D3557"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="26"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.2"
        fill="#666666"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="34"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#aaaaaa"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFF8E7" />
      {/* Color grid bottom-left */}
      <rect x="4" y="32" width="6" height="6" fill="#F4D35E" opacity="0.6" />
      <rect x="11" y="32" width="6" height="6" fill="#1D3557" opacity="0.5" />
      <rect x="18" y="32" width="6" height="6" fill="#E63946" opacity="0.4" />
      <rect x="25" y="32" width="6" height="6" fill="#F4D35E" opacity="0.3" />
      <rect x="4" y="39" width="6" height="6" fill="#1D3557" opacity="0.7" />
      <rect x="11" y="39" width="6" height="6" fill="#E63946" opacity="0.6" />
      <rect x="18" y="39" width="6" height="6" fill="#F4D35E" opacity="0.5" />
      <rect x="25" y="39" width="6" height="6" fill="#1D3557" opacity="0.4" />
      <rect x="4" y="46" width="6" height="6" fill="#E63946" opacity="0.5" />
      <rect x="11" y="46" width="6" height="6" fill="#F4D35E" opacity="0.7" />
      <rect x="18" y="46" width="6" height="6" fill="#1D3557" opacity="0.6" />
      <rect x="25" y="46" width="6" height="6" fill="#E63946" opacity="0.3" />
      <text
        x="81"
        y="12"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        fill="#1D3557"
      >
        {data.companyJa}
      </text>
      <text
        x="81"
        y="16.5"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#888888"
      >
        {data.companyEn}
      </text>
      <text
        x="81"
        y="24"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#444444"
      >
        {data.tel}
      </text>
      <text
        x="81"
        y="28"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#444444"
      >
        {data.email}
      </text>
      <text
        x="81"
        y="32"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#444444"
      >
        {data.website}
      </text>
      <text
        x="81"
        y="44"
        textAnchor="end"
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
// 6. GROPIUS (構) — Walter Gropius structural clarity
// Strong horizontal/vertical grid, rational layout
// ============================================================
const gropiusTemplate: TemplateDefinition = {
  id: 'bauhaus-gropius',
  name: 'GROPIUS',
  nameJa: '構',
  category: 'bauhaus',
  designer: 'Bauhaus Series',
  description: 'グロピウスの構築。水平と垂直が完璧な秩序を生む。',
  accentColor: '#1D3557',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Structural grid */}
      <line x1="30" y1="0" x2="30" y2="55" stroke="#1D3557" strokeWidth="0.5" />
      <line x1="0" y1="35" x2="91" y2="35" stroke="#E63946" strokeWidth="0.3" />
      <rect x="0" y="0" width="30" height="35" fill="#1D3557" opacity="0.04" />
      <text
        x="35"
        y="16"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="5.5"
        letterSpacing="0.2"
        fill="#1D3557"
      >
        {data.nameJa}
      </text>
      <text
        x="35"
        y="22"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="1.8"
        letterSpacing="0.4"
        fill="#E63946"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="35"
        y="30"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      <text
        x="5"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#666666"
      >
        {data.companyJa}
      </text>
      <text
        x="5"
        y="49"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#999999"
      >
        {data.email}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      <line x1="61" y1="0" x2="61" y2="55" stroke="#1D3557" strokeWidth="0.5" />
      <line x1="0" y1="20" x2="91" y2="20" stroke="#E63946" strokeWidth="0.3" />
      <rect x="61" y="20" width="30" height="35" fill="#1D3557" opacity="0.04" />
      <text
        x="8"
        y="12"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="2.5"
        fill="#1D3557"
      >
        {data.companyJa}
      </text>
      <text
        x="8"
        y="16.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#888888"
      >
        {data.companyEn}
      </text>
      <text
        x="8"
        y="28"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#333333"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="32"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#333333"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="36"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#333333"
      >
        {data.website}
      </text>
      <text
        x="8"
        y="46"
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
// 7. BREUER (椅) — Marcel Breuer tubular steel
// Thin lines suggesting tubular steel furniture, open structure
// ============================================================
const breuerTemplate: TemplateDefinition = {
  id: 'bauhaus-breuer',
  name: 'BREUER',
  nameJa: '椅',
  category: 'bauhaus',
  designer: 'Bauhaus Series',
  description: 'ブロイヤーの鋼管。細い線が家具の骨格を描く。',
  accentColor: '#333333',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F5F5" />
      {/* Tubular steel frame lines */}
      <line x1="8" y1="5" x2="8" y2="50" stroke="#333333" strokeWidth="0.4" />
      <line x1="83" y1="5" x2="83" y2="50" stroke="#333333" strokeWidth="0.4" />
      <line x1="8" y1="5" x2="83" y2="5" stroke="#333333" strokeWidth="0.4" />
      <line x1="8" y1="50" x2="83" y2="50" stroke="#333333" strokeWidth="0.4" />
      {/* Curved corner connectors */}
      <path d="M8,5 Q8,5 8,5" fill="none" stroke="#333333" strokeWidth="0.4" />
      {/* Cross support */}
      <line x1="8" y1="28" x2="83" y2="28" stroke="#E63946" strokeWidth="0.25" />
      <circle cx="8" cy="28" r="0.8" fill="#E63946" />
      <circle cx="83" cy="28" r="0.8" fill="#E63946" />
      <text
        x="15"
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
        x="15"
        y="23.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#666666"
      >
        {data.nameEn}
      </text>
      <text
        x="15"
        y="36"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      <text
        x="15"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#aaaaaa"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F5F5" />
      <line x1="8" y1="5" x2="8" y2="50" stroke="#333333" strokeWidth="0.4" />
      <line x1="83" y1="5" x2="83" y2="50" stroke="#333333" strokeWidth="0.4" />
      <line x1="8" y1="5" x2="83" y2="5" stroke="#333333" strokeWidth="0.4" />
      <line x1="8" y1="50" x2="83" y2="50" stroke="#333333" strokeWidth="0.4" />
      <line x1="8" y1="22" x2="83" y2="22" stroke="#E63946" strokeWidth="0.25" />
      <circle cx="8" cy="22" r="0.8" fill="#E63946" />
      <circle cx="83" cy="22" r="0.8" fill="#E63946" />
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        fill="#1a1a1a"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="18.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#888888"
      >
        {data.companyEn}
      </text>
      <text
        x="45.5"
        y="29"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#444444"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="33"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#444444"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="37"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#444444"
      >
        {data.website}
      </text>
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
// 8. ITTEN (環) — Johannes Itten color wheel
// Concentric color rings, chromatic study
// ============================================================
const ittenTemplate: TemplateDefinition = {
  id: 'bauhaus-itten',
  name: 'ITTEN',
  nameJa: '環',
  category: 'bauhaus',
  designer: 'Bauhaus Series',
  description: 'イッテンの色環。同心円の色が対話し共鳴する。',
  accentColor: '#E63946',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFFF8" />
      {/* Itten color rings */}
      <circle cx="72" cy="27.5" r="20" fill="none" stroke="#E63946" strokeWidth="2.5" opacity="0.15" />
      <circle cx="72" cy="27.5" r="15" fill="none" stroke="#F4D35E" strokeWidth="2" opacity="0.2" />
      <circle cx="72" cy="27.5" r="10" fill="none" stroke="#1D3557" strokeWidth="1.5" opacity="0.2" />
      <circle cx="72" cy="27.5" r="5" fill="none" stroke="#E63946" strokeWidth="1" opacity="0.25" />
      <circle cx="72" cy="27.5" r="1.5" fill="#1D3557" opacity="0.3" />
      <text
        x="10"
        y="18"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="6"
        letterSpacing="0.3"
        fill="#1D3557"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="24"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#E63946"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="34"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#aaaaaa"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFFF8" />
      <circle cx="19" cy="27.5" r="18" fill="none" stroke="#F4D35E" strokeWidth="2" opacity="0.12" />
      <circle cx="19" cy="27.5" r="12" fill="none" stroke="#1D3557" strokeWidth="1.5" opacity="0.15" />
      <circle cx="19" cy="27.5" r="6" fill="none" stroke="#E63946" strokeWidth="1" opacity="0.18" />
      <text
        x="81"
        y="12"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        fill="#1D3557"
      >
        {data.companyJa}
      </text>
      <text
        x="81"
        y="16.5"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#888888"
      >
        {data.companyEn}
      </text>
      <line x1="45" y1="20" x2="81" y2="20" stroke="#E63946" strokeWidth="0.15" />
      <text
        x="81"
        y="26"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#333333"
      >
        {data.tel}
      </text>
      <text
        x="81"
        y="30"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#333333"
      >
        {data.email}
      </text>
      <text
        x="81"
        y="34"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#333333"
      >
        {data.website}
      </text>
      <text
        x="81"
        y="46"
        textAnchor="end"
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
// 9. SCHLEMMER (像) — Oskar Schlemmer figure study
// Geometric human figure, theatrical abstraction
// ============================================================
const schlemmerTemplate: TemplateDefinition = {
  id: 'bauhaus-schlemmer',
  name: 'SCHLEMMER',
  nameJa: '像',
  category: 'bauhaus',
  designer: 'Bauhaus Series',
  description: 'シュレンマーの人体。幾何学的な人形が舞台に立つ。',
  accentColor: '#1D3557',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F8F5F0" />
      {/* Abstract geometric figure */}
      <circle cx="76" cy="12" r="4" fill="#1D3557" opacity="0.2" />
      <ellipse cx="76" cy="25" rx="5" ry="8" fill="#E63946" opacity="0.12" />
      <line x1="76" y1="33" x2="72" y2="45" stroke="#1D3557" strokeWidth="0.5" opacity="0.2" />
      <line x1="76" y1="33" x2="80" y2="45" stroke="#1D3557" strokeWidth="0.5" opacity="0.2" />
      <line x1="71" y1="22" x2="65" y2="28" stroke="#1D3557" strokeWidth="0.4" opacity="0.2" />
      <line x1="81" y1="22" x2="87" y2="28" stroke="#1D3557" strokeWidth="0.4" opacity="0.2" />
      <circle cx="76" cy="12" r="2" fill="#F4D35E" opacity="0.3" />
      <text
        x="10"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="6.5"
        letterSpacing="0.3"
        fill="#1D3557"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="26.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.25"
        fill="#666666"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#aaaaaa"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F8F5F0" />
      {/* Smaller abstract figure */}
      <circle cx="15" cy="38" r="3" fill="#1D3557" opacity="0.15" />
      <ellipse cx="15" cy="46" rx="3.5" ry="5" fill="#E63946" opacity="0.08" />
      <circle cx="15" cy="38" r="1.5" fill="#F4D35E" opacity="0.2" />
      <text
        x="81"
        y="12"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        fill="#1D3557"
      >
        {data.companyJa}
      </text>
      <text
        x="81"
        y="16.5"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#888888"
      >
        {data.companyEn}
      </text>
      <line x1="40" y1="20" x2="81" y2="20" stroke="#1D3557" strokeWidth="0.15" />
      <text
        x="81"
        y="27"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#444444"
      >
        {data.tel}
      </text>
      <text
        x="81"
        y="31"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#444444"
      >
        {data.email}
      </text>
      <text
        x="81"
        y="35"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#444444"
      >
        {data.website}
      </text>
      <text
        x="81"
        y="46"
        textAnchor="end"
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
// 10. BAYER (型) — Herbert Bayer universal type
// Bold sans-serif typography, diagonal layout, clean modernism
// ============================================================
const bayerTemplate: TemplateDefinition = {
  id: 'bauhaus-bayer',
  name: 'BAYER',
  nameJa: '型',
  category: 'bauhaus',
  designer: 'Bauhaus Series',
  description: 'バイヤーの活字。ユニバーサルな書体が力強く語る。',
  accentColor: '#E63946',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Bold diagonal stripe */}
      <polygon points="0,0 45,0 25,55 0,55" fill="#1D3557" />
      <polygon points="0,0 10,0 0,22" fill="#E63946" />
      <text
        x="32"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="800"
        fontSize="7"
        letterSpacing="0.2"
        fill="#ffffff"
      >
        {data.nameJa}
      </text>
      <text
        x="35"
        y="28"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="600"
        fontSize="2.2"
        letterSpacing="0.4"
        fill="#F4D35E"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="38"
        y="38"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="48"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="rgba(255,255,255,0.6)"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      <polygon points="46,0 91,0 91,55 66,55" fill="#1D3557" />
      <polygon points="81,55 91,55 91,33" fill="#E63946" />
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="2.5"
        fill="#1D3557"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#888888"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="22" x2="50" y2="22" stroke="#E63946" strokeWidth="0.2" />
      <text
        x="10"
        y="28"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.5"
        fill="#333333"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.5"
        fill="#333333"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.5"
        fill="#333333"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="46"
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

export const bauhausTemplates: TemplateDefinition[] = [
  dessauTemplate,
  kandinskyTemplate,
  moholyTemplate,
  albersTemplate,
  kleeTemplate,
  gropiusTemplate,
  breuerTemplate,
  ittenTemplate,
  schlemmerTemplate,
  bayerTemplate,
];
