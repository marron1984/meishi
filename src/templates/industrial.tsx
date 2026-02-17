import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. STEEL (鋼) — Heavy steel plate aesthetic
// Brushed metal look with thick borders and stencil text
// ============================================================
const steelTemplate: TemplateDefinition = {
  id: 'industrial-steel',
  name: 'STEEL',
  nameJa: '鋼',
  category: 'industrial',
  designer: 'Heavy Industry',
  description: '鋼鉄の重厚感。ブラッシュドメタルの質感と太い枠線。',
  accentColor: '#71797E',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="industrial-steel-metal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8A9199" />
          <stop offset="50%" stopColor="#71797E" />
          <stop offset="100%" stopColor="#5C6368" />
        </linearGradient>
        <pattern id="industrial-steel-brush" width="2" height="0.3" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0.15" x2="2" y2="0.15" stroke="#7D858A" strokeWidth="0.05" opacity="0.3" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#industrial-steel-metal)" />
      <rect width="91" height="55" fill="url(#industrial-steel-brush)" />
      <rect x="3" y="3" width="85" height="49" fill="none" stroke="#A0A8AD" strokeWidth="0.6" />
      <rect x="4.5" y="4.5" width="82" height="46" fill="none" stroke="#5C6368" strokeWidth="0.2" />
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="7"
        letterSpacing="1.5"
        fill="#E8ECEF"
      >
        {data.nameJa}
      </text>
      <line x1="20" y1="26" x2="71" y2="26" stroke="#A0A8AD" strokeWidth="0.3" />
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        letterSpacing="2"
        fill="#C8CDD0"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="38"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        fill="#A0A8AD"
      >
        {data.titleJa}
      </text>
      {/* Corner rivets */}
      <circle cx="7" cy="7" r="1" fill="#5C6368" stroke="#8A9199" strokeWidth="0.3" />
      <circle cx="84" cy="7" r="1" fill="#5C6368" stroke="#8A9199" strokeWidth="0.3" />
      <circle cx="7" cy="48" r="1" fill="#5C6368" stroke="#8A9199" strokeWidth="0.3" />
      <circle cx="84" cy="48" r="1" fill="#5C6368" stroke="#8A9199" strokeWidth="0.3" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="industrial-steel-metal-b" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8A9199" />
          <stop offset="50%" stopColor="#71797E" />
          <stop offset="100%" stopColor="#5C6368" />
        </linearGradient>
        <pattern id="industrial-steel-brush-b" width="2" height="0.3" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0.15" x2="2" y2="0.15" stroke="#7D858A" strokeWidth="0.05" opacity="0.3" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#industrial-steel-metal-b)" />
      <rect width="91" height="55" fill="url(#industrial-steel-brush-b)" />
      <rect x="3" y="3" width="85" height="49" fill="none" stroke="#A0A8AD" strokeWidth="0.6" />
      <rect x="4.5" y="4.5" width="82" height="46" fill="none" stroke="#5C6368" strokeWidth="0.2" />
      <text
        x="45.5"
        y="13"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="2.8"
        letterSpacing="1"
        fill="#E8ECEF"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="17.5"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        letterSpacing="1"
        fill="#A0A8AD"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <line x1="12" y1="21" x2="79" y2="21" stroke="#A0A8AD" strokeWidth="0.2" />
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#C8CDD0"
      >
        TEL: {data.tel}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#C8CDD0"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#C8CDD0"
      >
        {data.website}
      </text>
      <line x1="12" y1="38" x2="79" y2="38" stroke="#A0A8AD" strokeWidth="0.2" />
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#A0A8AD"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="46.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#A0A8AD"
      >
        {data.addressJa}
      </text>
      <circle cx="7" cy="7" r="1" fill="#5C6368" stroke="#8A9199" strokeWidth="0.3" />
      <circle cx="84" cy="7" r="1" fill="#5C6368" stroke="#8A9199" strokeWidth="0.3" />
      <circle cx="7" cy="48" r="1" fill="#5C6368" stroke="#8A9199" strokeWidth="0.3" />
      <circle cx="84" cy="48" r="1" fill="#5C6368" stroke="#8A9199" strokeWidth="0.3" />
    </g>
  ),
};

// ============================================================
// 2. RIVET (鋲) — Riveted metal panel with punched holes
// Diamond plate texture with rivet accents along borders
// ============================================================
const rivetTemplate: TemplateDefinition = {
  id: 'industrial-rivet',
  name: 'RIVET',
  nameJa: '鋲',
  category: 'industrial',
  designer: 'Heavy Industry',
  description: '鋲打ちの鉄板。パンチされた穴と重厚なプレート感。',
  accentColor: '#B7410E',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#3B3B3B" />
      <defs>
        <pattern id="industrial-rivet-diamond" width="3" height="3" patternUnits="userSpaceOnUse">
          <polygon points="1.5,0 3,1.5 1.5,3 0,1.5" fill="none" stroke="#444444" strokeWidth="0.1" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#industrial-rivet-diamond)" opacity="0.4" />
      {/* Top rivet row */}
      <circle cx="8" cy="4" r="0.8" fill="#555" stroke="#666" strokeWidth="0.2" />
      <circle cx="16" cy="4" r="0.8" fill="#555" stroke="#666" strokeWidth="0.2" />
      <circle cx="24" cy="4" r="0.8" fill="#555" stroke="#666" strokeWidth="0.2" />
      <circle cx="32" cy="4" r="0.8" fill="#555" stroke="#666" strokeWidth="0.2" />
      <circle cx="40" cy="4" r="0.8" fill="#555" stroke="#666" strokeWidth="0.2" />
      <circle cx="48" cy="4" r="0.8" fill="#555" stroke="#666" strokeWidth="0.2" />
      <circle cx="56" cy="4" r="0.8" fill="#555" stroke="#666" strokeWidth="0.2" />
      <circle cx="64" cy="4" r="0.8" fill="#555" stroke="#666" strokeWidth="0.2" />
      <circle cx="72" cy="4" r="0.8" fill="#555" stroke="#666" strokeWidth="0.2" />
      <circle cx="80" cy="4" r="0.8" fill="#555" stroke="#666" strokeWidth="0.2" />
      {/* Bottom rivet row */}
      <circle cx="8" cy="51" r="0.8" fill="#555" stroke="#666" strokeWidth="0.2" />
      <circle cx="16" cy="51" r="0.8" fill="#555" stroke="#666" strokeWidth="0.2" />
      <circle cx="24" cy="51" r="0.8" fill="#555" stroke="#666" strokeWidth="0.2" />
      <circle cx="32" cy="51" r="0.8" fill="#555" stroke="#666" strokeWidth="0.2" />
      <circle cx="40" cy="51" r="0.8" fill="#555" stroke="#666" strokeWidth="0.2" />
      <circle cx="48" cy="51" r="0.8" fill="#555" stroke="#666" strokeWidth="0.2" />
      <circle cx="56" cy="51" r="0.8" fill="#555" stroke="#666" strokeWidth="0.2" />
      <circle cx="64" cy="51" r="0.8" fill="#555" stroke="#666" strokeWidth="0.2" />
      <circle cx="72" cy="51" r="0.8" fill="#555" stroke="#666" strokeWidth="0.2" />
      <circle cx="80" cy="51" r="0.8" fill="#555" stroke="#666" strokeWidth="0.2" />
      <rect x="10" y="12" width="71" height="31" fill="#2A2A2A" stroke="#B7410E" strokeWidth="0.4" />
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="6"
        letterSpacing="1"
        fill="#E8E8E8"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="600"
        fontSize="2.2"
        letterSpacing="1.5"
        fill="#B7410E"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="37"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#888888"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#3B3B3B" />
      <defs>
        <pattern id="industrial-rivet-diamond-b" width="3" height="3" patternUnits="userSpaceOnUse">
          <polygon points="1.5,0 3,1.5 1.5,3 0,1.5" fill="none" stroke="#444444" strokeWidth="0.1" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#industrial-rivet-diamond-b)" opacity="0.4" />
      <circle cx="8" cy="4" r="0.8" fill="#555" stroke="#666" strokeWidth="0.2" />
      <circle cx="24" cy="4" r="0.8" fill="#555" stroke="#666" strokeWidth="0.2" />
      <circle cx="40" cy="4" r="0.8" fill="#555" stroke="#666" strokeWidth="0.2" />
      <circle cx="56" cy="4" r="0.8" fill="#555" stroke="#666" strokeWidth="0.2" />
      <circle cx="72" cy="4" r="0.8" fill="#555" stroke="#666" strokeWidth="0.2" />
      <circle cx="8" cy="51" r="0.8" fill="#555" stroke="#666" strokeWidth="0.2" />
      <circle cx="24" cy="51" r="0.8" fill="#555" stroke="#666" strokeWidth="0.2" />
      <circle cx="40" cy="51" r="0.8" fill="#555" stroke="#666" strokeWidth="0.2" />
      <circle cx="56" cy="51" r="0.8" fill="#555" stroke="#666" strokeWidth="0.2" />
      <circle cx="72" cy="51" r="0.8" fill="#555" stroke="#666" strokeWidth="0.2" />
      <text
        x="45.5"
        y="12"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="2.5"
        letterSpacing="0.8"
        fill="#E8E8E8"
      >
        {data.companyJa}
      </text>
      <rect x="15" y="15" width="61" height="0.3" fill="#B7410E" />
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#AAAAAA"
      >
        TEL {data.tel}
      </text>
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#AAAAAA"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#AAAAAA"
      >
        {data.website}
      </text>
      <rect x="15" y="33" width="61" height="0.3" fill="#B7410E" />
      <text
        x="45.5"
        y="39"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#888888"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#888888"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 3. GEAR (歯車) — Interlocking gears motif
// Mechanical gear outlines with precise engineering feel
// ============================================================
const gearTemplate: TemplateDefinition = {
  id: 'industrial-gear',
  name: 'GEAR',
  nameJa: '歯車',
  category: 'industrial',
  designer: 'Heavy Industry',
  description: '噛み合う歯車。精密機械のような確かさ。',
  accentColor: '#FFD700',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1C1C1C" />
      <defs>
        <clipPath id="industrial-gear-clip">
          <rect width="91" height="55" />
        </clipPath>
      </defs>
      <g clipPath="url(#industrial-gear-clip)" opacity="0.15">
        {/* Large gear outline top-right */}
        <circle cx="78" cy="8" r="18" fill="none" stroke="#FFD700" strokeWidth="0.3" />
        <circle cx="78" cy="8" r="15" fill="none" stroke="#FFD700" strokeWidth="0.2" />
        <circle cx="78" cy="8" r="3" fill="none" stroke="#FFD700" strokeWidth="0.3" />
        {/* Gear teeth */}
        <line x1="78" y1="-11" x2="78" y2="-7" stroke="#FFD700" strokeWidth="0.8" />
        <line x1="78" y1="23" x2="78" y2="27" stroke="#FFD700" strokeWidth="0.8" />
        <line x1="59" y1="8" x2="55" y2="8" stroke="#FFD700" strokeWidth="0.8" />
        <line x1="97" y1="8" x2="101" y2="8" stroke="#FFD700" strokeWidth="0.8" />
        <line x1="65.3" y1="-4.7" x2="62.5" y2="-7.5" stroke="#FFD700" strokeWidth="0.8" />
        <line x1="90.7" y1="20.7" x2="93.5" y2="23.5" stroke="#FFD700" strokeWidth="0.8" />
        <line x1="65.3" y1="20.7" x2="62.5" y2="23.5" stroke="#FFD700" strokeWidth="0.8" />
        <line x1="90.7" y1="-4.7" x2="93.5" y2="-7.5" stroke="#FFD700" strokeWidth="0.8" />
        {/* Small gear bottom-left */}
        <circle cx="12" cy="48" r="10" fill="none" stroke="#FFD700" strokeWidth="0.3" />
        <circle cx="12" cy="48" r="7.5" fill="none" stroke="#FFD700" strokeWidth="0.2" />
        <circle cx="12" cy="48" r="2" fill="none" stroke="#FFD700" strokeWidth="0.3" />
      </g>
      <text
        x="10"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="6.5"
        letterSpacing="0.8"
        fill="#FFFFFF"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="29"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        letterSpacing="1.2"
        fill="#FFD700"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <rect x="10" y="33" width="30" height="0.3" fill="#FFD700" />
      <text
        x="10"
        y="39"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#666666"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1C1C1C" />
      <defs>
        <clipPath id="industrial-gear-clip-b">
          <rect width="91" height="55" />
        </clipPath>
      </defs>
      <g clipPath="url(#industrial-gear-clip-b)" opacity="0.1">
        <circle cx="75" cy="45" r="20" fill="none" stroke="#FFD700" strokeWidth="0.3" />
        <circle cx="75" cy="45" r="17" fill="none" stroke="#FFD700" strokeWidth="0.2" />
        <circle cx="75" cy="45" r="3.5" fill="none" stroke="#FFD700" strokeWidth="0.3" />
      </g>
      <text
        x="10"
        y="12"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="2.8"
        letterSpacing="0.5"
        fill="#FFFFFF"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="17"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        letterSpacing="0.8"
        fill="#888888"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <rect x="10" y="20" width="71" height="0.2" fill="#FFD700" opacity="0.5" />
      <text
        x="10"
        y="27"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#AAAAAA"
      >
        T: {data.tel}
      </text>
      <text
        x="10"
        y="31"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#AAAAAA"
      >
        E: {data.email}
      </text>
      <text
        x="10"
        y="35"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#AAAAAA"
      >
        W: {data.website}
      </text>
      <rect x="10" y="39" width="71" height="0.2" fill="#FFD700" opacity="0.5" />
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#666666"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 4. PIPE (管) — Industrial piping and conduit lines
// Parallel lines suggesting pipes, valves, industrial plumbing
// ============================================================
const pipeTemplate: TemplateDefinition = {
  id: 'industrial-pipe',
  name: 'PIPE',
  nameJa: '管',
  category: 'industrial',
  designer: 'Heavy Industry',
  description: '配管のリズム。パイプが走る工場の美しさ。',
  accentColor: '#71797E',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#E8E4DF" />
      {/* Horizontal pipes */}
      <rect x="0" y="5" width="91" height="1.5" fill="#A0A8AD" rx="0.75" />
      <rect x="0" y="5.2" width="91" height="0.3" fill="#C0C8CD" />
      <rect x="0" y="48" width="91" height="1.5" fill="#A0A8AD" rx="0.75" />
      <rect x="0" y="48.2" width="91" height="0.3" fill="#C0C8CD" />
      {/* Vertical connector pipes */}
      <rect x="5" y="5" width="1.5" height="44.5" fill="#8A9199" rx="0.75" />
      <rect x="5.2" y="5" width="0.3" height="44.5" fill="#A0A8AD" />
      <rect x="84" y="5" width="1.5" height="44.5" fill="#8A9199" rx="0.75" />
      <rect x="84.2" y="5" width="0.3" height="44.5" fill="#A0A8AD" />
      {/* Pipe joints */}
      <circle cx="5.75" cy="5.75" r="2" fill="#71797E" stroke="#5C6368" strokeWidth="0.3" />
      <circle cx="84.75" cy="5.75" r="2" fill="#71797E" stroke="#5C6368" strokeWidth="0.3" />
      <circle cx="5.75" cy="48.75" r="2" fill="#71797E" stroke="#5C6368" strokeWidth="0.3" />
      <circle cx="84.75" cy="48.75" r="2" fill="#71797E" stroke="#5C6368" strokeWidth="0.3" />
      <text
        x="45.5"
        y="23"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="6"
        letterSpacing="0.5"
        fill="#333333"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="2"
        letterSpacing="1"
        fill="#71797E"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="37"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#888888"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#E8E4DF" />
      <rect x="0" y="5" width="91" height="1.5" fill="#A0A8AD" rx="0.75" />
      <rect x="0" y="5.2" width="91" height="0.3" fill="#C0C8CD" />
      <rect x="0" y="48" width="91" height="1.5" fill="#A0A8AD" rx="0.75" />
      <rect x="0" y="48.2" width="91" height="0.3" fill="#C0C8CD" />
      <rect x="5" y="5" width="1.5" height="44.5" fill="#8A9199" rx="0.75" />
      <rect x="5.2" y="5" width="0.3" height="44.5" fill="#A0A8AD" />
      <rect x="84" y="5" width="1.5" height="44.5" fill="#8A9199" rx="0.75" />
      <rect x="84.2" y="5" width="0.3" height="44.5" fill="#A0A8AD" />
      <circle cx="5.75" cy="5.75" r="2" fill="#71797E" stroke="#5C6368" strokeWidth="0.3" />
      <circle cx="84.75" cy="5.75" r="2" fill="#71797E" stroke="#5C6368" strokeWidth="0.3" />
      <circle cx="5.75" cy="48.75" r="2" fill="#71797E" stroke="#5C6368" strokeWidth="0.3" />
      <circle cx="84.75" cy="48.75" r="2" fill="#71797E" stroke="#5C6368" strokeWidth="0.3" />
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="2.5"
        fill="#333333"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="18.5"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        letterSpacing="0.5"
        fill="#71797E"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <line x1="20" y1="22" x2="71" y2="22" stroke="#A0A8AD" strokeWidth="0.3" />
      <text
        x="45.5"
        y="27.5"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#555555"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="31.5"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#555555"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="35.5"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#555555"
      >
        {data.website}
      </text>
      <line x1="20" y1="38.5" x2="71" y2="38.5" stroke="#A0A8AD" strokeWidth="0.3" />
      <text
        x="45.5"
        y="43.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#888888"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 5. CRANE (鶴機) — Construction crane silhouette
// Bold crane outlines with safety yellow accents
// ============================================================
const craneTemplate: TemplateDefinition = {
  id: 'industrial-crane',
  name: 'CRANE',
  nameJa: '鶴機',
  category: 'industrial',
  designer: 'Heavy Industry',
  description: '建設クレーンの威容。安全黄色が警鐘を鳴らす。',
  accentColor: '#FFD700',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#2B2B2B" />
      <defs>
        <clipPath id="industrial-crane-clip">
          <rect width="91" height="55" />
        </clipPath>
      </defs>
      <g clipPath="url(#industrial-crane-clip)">
        {/* Crane tower */}
        <rect x="72" y="8" width="2" height="50" fill="#FFD700" opacity="0.3" />
        <rect x="75" y="8" width="0.5" height="50" fill="#FFD700" opacity="0.2" />
        {/* Crane boom */}
        <line x1="73" y1="10" x2="20" y2="10" stroke="#FFD700" strokeWidth="0.6" opacity="0.3" />
        <line x1="73" y1="12" x2="25" y2="12" stroke="#FFD700" strokeWidth="0.3" opacity="0.2" />
        {/* Diagonal braces */}
        <line x1="73" y1="10" x2="68" y2="20" stroke="#FFD700" strokeWidth="0.2" opacity="0.15" />
        <line x1="68" y1="10" x2="73" y2="20" stroke="#FFD700" strokeWidth="0.2" opacity="0.15" />
        <line x1="63" y1="10" x2="68" y2="20" stroke="#FFD700" strokeWidth="0.2" opacity="0.15" />
        <line x1="73" y1="20" x2="68" y2="30" stroke="#FFD700" strokeWidth="0.2" opacity="0.15" />
        <line x1="68" y1="20" x2="73" y2="30" stroke="#FFD700" strokeWidth="0.2" opacity="0.15" />
        {/* Cable line */}
        <line x1="30" y1="10" x2="30" y2="30" stroke="#FFD700" strokeWidth="0.15" opacity="0.25" />
        {/* Hook */}
        <path d="M28.5,30 Q28.5,33 30,33 Q31.5,33 31.5,30" fill="none" stroke="#FFD700" strokeWidth="0.3" opacity="0.3" />
      </g>
      {/* Safety stripe top */}
      <defs>
        <pattern id="industrial-crane-hazard" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="2" height="4" fill="#FFD700" opacity="0.8" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="91" height="2" fill="url(#industrial-crane-hazard)" />
      <text
        x="10"
        y="26"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="6.5"
        letterSpacing="0.5"
        fill="#FFFFFF"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="33"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="600"
        fontSize="2.2"
        letterSpacing="1.5"
        fill="#FFD700"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="10"
        y="40"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      <rect x="0" y="53" width="91" height="2" fill="url(#industrial-crane-hazard)" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#2B2B2B" />
      <defs>
        <pattern id="industrial-crane-hazard-b" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="2" height="4" fill="#FFD700" opacity="0.8" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="91" height="2" fill="url(#industrial-crane-hazard-b)" />
      <text
        x="10"
        y="12"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="2.8"
        letterSpacing="0.5"
        fill="#FFFFFF"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="17"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        letterSpacing="0.8"
        fill="#FFD700"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <line x1="10" y1="20" x2="81" y2="20" stroke="#FFD700" strokeWidth="0.2" opacity="0.5" />
      <text
        x="10"
        y="26"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#CCCCCC"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="30"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#CCCCCC"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="34"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#CCCCCC"
      >
        {data.website}
      </text>
      <line x1="10" y1="37" x2="81" y2="37" stroke="#FFD700" strokeWidth="0.2" opacity="0.5" />
      <text
        x="10"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#888888"
      >
        〒{data.zipCode}
      </text>
      <text
        x="10"
        y="46"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#888888"
      >
        {data.addressJa}
      </text>
      <rect x="0" y="53" width="91" height="2" fill="url(#industrial-crane-hazard-b)" />
    </g>
  ),
};

// ============================================================
// 6. WELD (溶接) — Welding sparks and seam lines
// Bright spark accents on dark surface with weld seam patterns
// ============================================================
const weldTemplate: TemplateDefinition = {
  id: 'industrial-weld',
  name: 'WELD',
  nameJa: '溶接',
  category: 'industrial',
  designer: 'Heavy Industry',
  description: '溶接の閃光。暗闇に散る火花と溶着の痕跡。',
  accentColor: '#B7410E',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1A1A1A" />
      {/* Weld seam line across middle */}
      <line x1="0" y1="27.5" x2="91" y2="27.5" stroke="#B7410E" strokeWidth="0.4" opacity="0.6" />
      <line x1="0" y1="27.5" x2="91" y2="27.5" stroke="#FF6B35" strokeWidth="0.15" opacity="0.8" />
      {/* Spark particles */}
      <circle cx="15" cy="25" r="0.3" fill="#FFD700" opacity="0.7" />
      <circle cx="22" cy="23" r="0.2" fill="#FF6B35" opacity="0.6" />
      <circle cx="35" cy="26" r="0.25" fill="#FFD700" opacity="0.5" />
      <circle cx="48" cy="24" r="0.3" fill="#FF6B35" opacity="0.7" />
      <circle cx="55" cy="29" r="0.2" fill="#FFD700" opacity="0.4" />
      <circle cx="68" cy="25" r="0.3" fill="#FF6B35" opacity="0.6" />
      <circle cx="78" cy="30" r="0.2" fill="#FFD700" opacity="0.5" />
      <circle cx="42" cy="30" r="0.15" fill="#FFD700" opacity="0.3" />
      <circle cx="60" cy="23" r="0.2" fill="#FF6B35" opacity="0.4" />
      {/* Weld bead texture */}
      <path d="M0,27.5 Q5,26.5 10,27.5 Q15,28.5 20,27.5 Q25,26.5 30,27.5 Q35,28.5 40,27.5 Q45,26.5 50,27.5 Q55,28.5 60,27.5 Q65,26.5 70,27.5 Q75,28.5 80,27.5 Q85,26.5 91,27.5" fill="none" stroke="#666" strokeWidth="0.15" />
      <text
        x="10"
        y="18"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="6"
        letterSpacing="0.5"
        fill="#E8E8E8"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="24"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="2"
        letterSpacing="1"
        fill="#B7410E"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="10"
        y="38"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#666666"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1A1A1A" />
      <line x1="0" y1="20" x2="91" y2="20" stroke="#B7410E" strokeWidth="0.4" opacity="0.6" />
      <line x1="0" y1="20" x2="91" y2="20" stroke="#FF6B35" strokeWidth="0.15" opacity="0.8" />
      <circle cx="20" cy="18" r="0.2" fill="#FFD700" opacity="0.5" />
      <circle cx="45" cy="22" r="0.25" fill="#FF6B35" opacity="0.6" />
      <circle cx="70" cy="18.5" r="0.3" fill="#FFD700" opacity="0.4" />
      <text
        x="10"
        y="13"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="2.8"
        fill="#E8E8E8"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="17.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        letterSpacing="0.5"
        fill="#B7410E"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <text
        x="10"
        y="28"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#AAAAAA"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#AAAAAA"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#AAAAAA"
      >
        {data.website}
      </text>
      <line x1="10" y1="39.5" x2="81" y2="39.5" stroke="#444444" strokeWidth="0.15" />
      <text
        x="10"
        y="44.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#666666"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 7. PRESS-I (圧) — Hydraulic press / stamped metal
// Embossed/debossed text effect with stamped border
// ============================================================
const pressTemplate: TemplateDefinition = {
  id: 'industrial-press',
  name: 'PRESS-I',
  nameJa: '圧',
  category: 'industrial',
  designer: 'Heavy Industry',
  description: 'プレス加工の力。金属に刻印された文字の確かさ。',
  accentColor: '#333333',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="industrial-press-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D0D0D0" />
          <stop offset="100%" stopColor="#B8B8B8" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#industrial-press-bg)" />
      {/* Stamped border */}
      <rect x="4" y="4" width="83" height="47" fill="none" stroke="#999999" strokeWidth="0.8" />
      <rect x="5.5" y="5.5" width="80" height="44" fill="none" stroke="#A8A8A8" strokeWidth="0.2" />
      {/* Emboss effect: darker text with lighter offset */}
      <text
        x="45.5"
        y="22.3"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="800"
        fontSize="6.5"
        letterSpacing="0.8"
        fill="#C8C8C8"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="800"
        fontSize="6.5"
        letterSpacing="0.8"
        fill="#888888"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="30.3"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="600"
        fontSize="2.2"
        letterSpacing="1.5"
        fill="#C8C8C8"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="600"
        fontSize="2.2"
        letterSpacing="1.5"
        fill="#888888"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="38"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#777777"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="industrial-press-bg-b" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D0D0D0" />
          <stop offset="100%" stopColor="#B8B8B8" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#industrial-press-bg-b)" />
      <rect x="4" y="4" width="83" height="47" fill="none" stroke="#999999" strokeWidth="0.8" />
      <rect x="5.5" y="5.5" width="80" height="44" fill="none" stroke="#A8A8A8" strokeWidth="0.2" />
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="2.8"
        fill="#888888"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="18.5"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="1.5"
        letterSpacing="0.8"
        fill="#999999"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <line x1="15" y1="22" x2="76" y2="22" stroke="#A8A8A8" strokeWidth="0.3" />
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#777777"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#777777"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#777777"
      >
        {data.website}
      </text>
      <line x1="15" y1="39" x2="76" y2="39" stroke="#A8A8A8" strokeWidth="0.3" />
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#999999"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 8. BOLT (栓) — Hex bolt and threaded patterns
// Hexagonal motifs with threading texture lines
// ============================================================
const boltTemplate: TemplateDefinition = {
  id: 'industrial-bolt',
  name: 'BOLT',
  nameJa: '栓',
  category: 'industrial',
  designer: 'Heavy Industry',
  description: 'ボルトの六角形。ネジ山が刻む精密なリズム。',
  accentColor: '#71797E',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#2A2A2A" />
      <defs>
        <clipPath id="industrial-bolt-clip">
          <rect width="91" height="55" />
        </clipPath>
      </defs>
      <g clipPath="url(#industrial-bolt-clip)">
        {/* Large hex bolt top-right */}
        <polygon points="78,2 86,6.6 86,15.8 78,20.4 70,15.8 70,6.6" fill="none" stroke="#555555" strokeWidth="0.4" />
        <polygon points="78,4.5 83.5,7.7 83.5,14.1 78,17.3 72.5,14.1 72.5,7.7" fill="none" stroke="#444444" strokeWidth="0.2" />
        <circle cx="78" cy="11.2" r="3" fill="none" stroke="#555555" strokeWidth="0.3" />
        {/* Small hex bolt bottom-left */}
        <polygon points="14,40 19,42.9 19,48.7 14,51.6 9,48.7 9,42.9" fill="none" stroke="#555555" strokeWidth="0.3" />
        <circle cx="14" cy="47.25" r="2" fill="none" stroke="#444444" strokeWidth="0.2" />
        {/* Thread lines across top */}
        <line x1="0" y1="1" x2="91" y2="1" stroke="#3A3A3A" strokeWidth="0.15" />
        <line x1="0" y1="2.5" x2="91" y2="2.5" stroke="#3A3A3A" strokeWidth="0.15" />
        <line x1="0" y1="4" x2="91" y2="4" stroke="#3A3A3A" strokeWidth="0.15" />
        <line x1="0" y1="51" x2="91" y2="51" stroke="#3A3A3A" strokeWidth="0.15" />
        <line x1="0" y1="52.5" x2="91" y2="52.5" stroke="#3A3A3A" strokeWidth="0.15" />
        <line x1="0" y1="54" x2="91" y2="54" stroke="#3A3A3A" strokeWidth="0.15" />
      </g>
      <text
        x="10"
        y="23"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#DDDDDD"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="29"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.8"
        fill="#71797E"
      >
        {data.nameEn.toUpperCase()}
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
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#2A2A2A" />
      {/* Thread lines */}
      <line x1="0" y1="1" x2="91" y2="1" stroke="#3A3A3A" strokeWidth="0.15" />
      <line x1="0" y1="2.5" x2="91" y2="2.5" stroke="#3A3A3A" strokeWidth="0.15" />
      <line x1="0" y1="4" x2="91" y2="4" stroke="#3A3A3A" strokeWidth="0.15" />
      <line x1="0" y1="51" x2="91" y2="51" stroke="#3A3A3A" strokeWidth="0.15" />
      <line x1="0" y1="52.5" x2="91" y2="52.5" stroke="#3A3A3A" strokeWidth="0.15" />
      <line x1="0" y1="54" x2="91" y2="54" stroke="#3A3A3A" strokeWidth="0.15" />
      {/* Hex accent */}
      <polygon points="80,42 84,44.3 84,48.9 80,51.2 76,48.9 76,44.3" fill="none" stroke="#555555" strokeWidth="0.3" />
      <text
        x="10"
        y="13"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="2.8"
        fill="#DDDDDD"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="17.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        letterSpacing="0.5"
        fill="#71797E"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <line x1="10" y1="21" x2="70" y2="21" stroke="#444444" strokeWidth="0.2" />
      <text
        x="10"
        y="27"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#AAAAAA"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="31"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#AAAAAA"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="35"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#AAAAAA"
      >
        {data.website}
      </text>
      <line x1="10" y1="38" x2="70" y2="38" stroke="#444444" strokeWidth="0.2" />
      <text
        x="10"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#777777"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 9. FACTORY (工場) — Factory floor plan aesthetic
// Blueprint-like grid with floor plan elements
// ============================================================
const factoryTemplate: TemplateDefinition = {
  id: 'industrial-factory',
  name: 'FACTORY',
  nameJa: '工場',
  category: 'industrial',
  designer: 'Heavy Industry',
  description: '工場の設計図。ブループリントに刻まれた情報。',
  accentColor: '#B7410E',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1E3248" />
      <defs>
        <pattern id="industrial-factory-grid" width="5" height="5" patternUnits="userSpaceOnUse">
          <line x1="5" y1="0" x2="5" y2="5" stroke="#2A4A6B" strokeWidth="0.1" />
          <line x1="0" y1="5" x2="5" y2="5" stroke="#2A4A6B" strokeWidth="0.1" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#industrial-factory-grid)" />
      {/* Factory outline shapes */}
      <rect x="60" y="35" width="20" height="12" fill="none" stroke="#4A7AAA" strokeWidth="0.2" strokeDasharray="0.5,0.5" />
      <rect x="65" y="38" width="10" height="6" fill="none" stroke="#4A7AAA" strokeWidth="0.15" />
      <line x1="60" y1="41" x2="80" y2="41" stroke="#4A7AAA" strokeWidth="0.1" strokeDasharray="0.3,0.3" />
      <text
        x="8"
        y="18"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="6"
        letterSpacing="0.5"
        fill="#C8DCF0"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="25"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        letterSpacing="1"
        fill="#6AA0D0"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <line x1="8" y1="29" x2="50" y2="29" stroke="#6AA0D0" strokeWidth="0.2" />
      <text
        x="8"
        y="35"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#8AB8E0"
      >
        {data.titleJa}
      </text>
      <text
        x="8"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#6A90B0"
      >
        {data.companyJa}
      </text>
      {/* Blueprint corner marks */}
      <line x1="3" y1="3" x2="8" y2="3" stroke="#6AA0D0" strokeWidth="0.15" />
      <line x1="3" y1="3" x2="3" y2="8" stroke="#6AA0D0" strokeWidth="0.15" />
      <line x1="83" y1="3" x2="88" y2="3" stroke="#6AA0D0" strokeWidth="0.15" />
      <line x1="88" y1="3" x2="88" y2="8" stroke="#6AA0D0" strokeWidth="0.15" />
      <line x1="3" y1="52" x2="8" y2="52" stroke="#6AA0D0" strokeWidth="0.15" />
      <line x1="3" y1="47" x2="3" y2="52" stroke="#6AA0D0" strokeWidth="0.15" />
      <line x1="83" y1="52" x2="88" y2="52" stroke="#6AA0D0" strokeWidth="0.15" />
      <line x1="88" y1="47" x2="88" y2="52" stroke="#6AA0D0" strokeWidth="0.15" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1E3248" />
      <defs>
        <pattern id="industrial-factory-grid-b" width="5" height="5" patternUnits="userSpaceOnUse">
          <line x1="5" y1="0" x2="5" y2="5" stroke="#2A4A6B" strokeWidth="0.1" />
          <line x1="0" y1="5" x2="5" y2="5" stroke="#2A4A6B" strokeWidth="0.1" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#industrial-factory-grid-b)" />
      {/* Blueprint corner marks */}
      <line x1="3" y1="3" x2="8" y2="3" stroke="#6AA0D0" strokeWidth="0.15" />
      <line x1="3" y1="3" x2="3" y2="8" stroke="#6AA0D0" strokeWidth="0.15" />
      <line x1="83" y1="3" x2="88" y2="3" stroke="#6AA0D0" strokeWidth="0.15" />
      <line x1="88" y1="3" x2="88" y2="8" stroke="#6AA0D0" strokeWidth="0.15" />
      <line x1="3" y1="52" x2="8" y2="52" stroke="#6AA0D0" strokeWidth="0.15" />
      <line x1="3" y1="47" x2="3" y2="52" stroke="#6AA0D0" strokeWidth="0.15" />
      <line x1="83" y1="52" x2="88" y2="52" stroke="#6AA0D0" strokeWidth="0.15" />
      <line x1="88" y1="47" x2="88" y2="52" stroke="#6AA0D0" strokeWidth="0.15" />
      <text
        x="8"
        y="13"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="2.5"
        fill="#C8DCF0"
      >
        {data.companyJa}
      </text>
      <text
        x="8"
        y="17.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        letterSpacing="0.5"
        fill="#6AA0D0"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <line x1="8" y1="21" x2="83" y2="21" stroke="#4A7AAA" strokeWidth="0.15" />
      <text
        x="8"
        y="27"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#8AB8E0"
      >
        TEL: {data.tel}
      </text>
      <text
        x="8"
        y="31"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#8AB8E0"
      >
        EMAIL: {data.email}
      </text>
      <text
        x="8"
        y="35"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#8AB8E0"
      >
        WEB: {data.website}
      </text>
      <line x1="8" y1="38" x2="83" y2="38" stroke="#4A7AAA" strokeWidth="0.15" />
      <text
        x="8"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#6A90B0"
      >
        〒{data.zipCode}
      </text>
      <text
        x="8"
        y="47"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#6A90B0"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 10. FORGE (鍛) — Blacksmith forge aesthetic
// Dark with ember glows, heavy typography, anvil shapes
// ============================================================
const forgeTemplate: TemplateDefinition = {
  id: 'industrial-forge',
  name: 'FORGE',
  nameJa: '鍛',
  category: 'industrial',
  designer: 'Heavy Industry',
  description: '鍛冶場の炎。鉄を打つ槌の響きが宿る。',
  accentColor: '#B7410E',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#141414" />
      <defs>
        <radialGradient id="industrial-forge-ember" cx="50%" cy="80%" r="50%">
          <stop offset="0%" stopColor="#B7410E" stopOpacity="0.3" />
          <stop offset="60%" stopColor="#B7410E" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#B7410E" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#industrial-forge-ember)" />
      {/* Ember particles */}
      <circle cx="30" cy="48" r="0.4" fill="#FF6B35" opacity="0.6" />
      <circle cx="45" cy="45" r="0.3" fill="#FFD700" opacity="0.4" />
      <circle cx="55" cy="50" r="0.35" fill="#B7410E" opacity="0.7" />
      <circle cx="38" cy="42" r="0.2" fill="#FF6B35" opacity="0.3" />
      <circle cx="62" cy="47" r="0.25" fill="#FFD700" opacity="0.5" />
      <circle cx="50" cy="52" r="0.3" fill="#B7410E" opacity="0.4" />
      {/* Heavy divider */}
      <rect x="8" y="30" width="50" height="0.8" fill="#B7410E" opacity="0.6" />
      <text
        x="8"
        y="24"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="7"
        letterSpacing="1"
        fill="#E8E8E8"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="38"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="700"
        fontSize="2.5"
        letterSpacing="2"
        fill="#B7410E"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="8"
        y="45"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#777777"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#141414" />
      <defs>
        <radialGradient id="industrial-forge-ember-b" cx="50%" cy="20%" r="50%">
          <stop offset="0%" stopColor="#B7410E" stopOpacity="0.2" />
          <stop offset="60%" stopColor="#B7410E" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#B7410E" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#industrial-forge-ember-b)" />
      <circle cx="20" cy="8" r="0.3" fill="#FF6B35" opacity="0.4" />
      <circle cx="40" cy="5" r="0.25" fill="#FFD700" opacity="0.3" />
      <circle cx="65" cy="10" r="0.35" fill="#B7410E" opacity="0.5" />
      <text
        x="8"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="3"
        letterSpacing="0.5"
        fill="#E8E8E8"
      >
        {data.companyJa}
      </text>
      <text
        x="8"
        y="19"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="1.5"
        letterSpacing="1"
        fill="#B7410E"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <rect x="8" y="22" width="75" height="0.5" fill="#B7410E" opacity="0.4" />
      <text
        x="8"
        y="29"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#AAAAAA"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="33"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#AAAAAA"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="37"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#AAAAAA"
      >
        {data.website}
      </text>
      <rect x="8" y="40" width="75" height="0.5" fill="#B7410E" opacity="0.4" />
      <text
        x="8"
        y="46"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#666666"
      >
        〒{data.zipCode}
      </text>
      <text
        x="8"
        y="50"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#666666"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

export const industrialTemplates: TemplateDefinition[] = [
  steelTemplate,
  rivetTemplate,
  gearTemplate,
  pipeTemplate,
  craneTemplate,
  weldTemplate,
  pressTemplate,
  boltTemplate,
  factoryTemplate,
  forgeTemplate,
];
