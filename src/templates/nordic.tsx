import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. FJORD (峡) — Deep Norwegian fjord
// Deep blue-gray water, clean cliff edges, serene depth
// ============================================================
const fjordTemplate: TemplateDefinition = {
  id: 'nordic-fjord',
  name: 'FJORD',
  nameJa: '峡',
  category: 'nordic',
  designer: 'Nordic Series',
  description: 'フィヨルドの静寂。深い青灰色の水面が崖に抱かれる。',
  accentColor: '#5B7B94',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F1EB" />
      {/* Fjord water band */}
      <rect x="0" y="35" width="91" height="20" fill="#5B7B94" opacity="0.12" />
      <path d="M0,35 Q20,33 45.5,36 Q70,39 91,35 L91,55 L0,55 Z" fill="#5B7B94" opacity="0.08" />
      {/* Mountain silhouette */}
      <path d="M0,35 L15,22 L25,28 L40,18 L55,25 L65,20 L80,27 L91,22 L91,35 Z" fill="#5B7B94" opacity="0.06" />
      <text
        x="10"
        y="18"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="6"
        letterSpacing="0.8"
        fill="#3D5A6E"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="24"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#7A99AD"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#95AEC0"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F1EB" />
      <rect x="0" y="0" width="91" height="12" fill="#5B7B94" opacity="0.08" />
      <path d="M0,12 Q30,10 45.5,13 Q65,16 91,12 L91,0 L0,0 Z" fill="#5B7B94" opacity="0.05" />
      <text
        x="81"
        y="10"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#3D5A6E"
      >
        {data.companyJa}
      </text>
      <text
        x="81"
        y="18"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#7A99AD"
      >
        {data.companyEn}
      </text>
      <line x1="40" y1="22" x2="81" y2="22" stroke="#C0D0DB" strokeWidth="0.12" />
      <text
        x="81"
        y="28"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#5B7B94"
      >
        {data.tel}
      </text>
      <text
        x="81"
        y="32"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#5B7B94"
      >
        {data.email}
      </text>
      <text
        x="81"
        y="36"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#5B7B94"
      >
        {data.website}
      </text>
      <text
        x="81"
        y="45"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#95AEC0"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 2. HYGGE (温) — Danish coziness and warmth
// Warm whites, soft pink, candle-like warmth
// ============================================================
const hyggeTemplate: TemplateDefinition = {
  id: 'nordic-hygge',
  name: 'HYGGE',
  nameJa: '温',
  category: 'nordic',
  designer: 'Nordic Series',
  description: 'ヒュッゲの温もり。柔らかな灯りが包む北欧の団欒。',
  accentColor: '#D4A5A5',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FBF8F4" />
      {/* Warm glow circle */}
      <circle cx="75" cy="15" r="12" fill="#D4A5A5" opacity="0.08" />
      <circle cx="75" cy="15" r="7" fill="#D4A5A5" opacity="0.06" />
      <circle cx="75" cy="15" r="2" fill="#D4A5A5" opacity="0.12" />
      <text
        x="12"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="6.5"
        letterSpacing="1"
        fill="#6B5050"
      >
        {data.nameJa}
      </text>
      <text
        x="12"
        y="28.5"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.4"
        fill="#A08080"
      >
        {data.nameEn}
      </text>
      <line x1="12" y1="33" x2="50" y2="33" stroke="#D4A5A5" strokeWidth="0.12" />
      <text
        x="12"
        y="39"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#B09090"
      >
        {data.titleJa}
      </text>
      <text
        x="12"
        y="46"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#C0AAAA"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FBF8F4" />
      <circle cx="16" cy="40" r="10" fill="#D4A5A5" opacity="0.06" />
      <circle cx="16" cy="40" r="5" fill="#D4A5A5" opacity="0.05" />
      <text
        x="79"
        y="14"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2.2"
        fill="#6B5050"
      >
        {data.companyJa}
      </text>
      <text
        x="79"
        y="18.5"
        textAnchor="end"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#A08080"
      >
        {data.companyEn}
      </text>
      <line x1="40" y1="22" x2="79" y2="22" stroke="#D4A5A5" strokeWidth="0.1" />
      <text
        x="79"
        y="28"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#806060"
      >
        {data.tel}
      </text>
      <text
        x="79"
        y="32"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#806060"
      >
        {data.email}
      </text>
      <text
        x="79"
        y="36"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#806060"
      >
        {data.website}
      </text>
      <text
        x="79"
        y="45"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#C0AAAA"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 3. BIRCH (白樺) — White birch forest
// Vertical birch trunk lines, natural light, white and sage
// ============================================================
const birchTemplate: TemplateDefinition = {
  id: 'nordic-birch',
  name: 'BIRCH',
  nameJa: '白樺',
  category: 'nordic',
  designer: 'Nordic Series',
  description: '白樺の林。細い幹が並び、木漏れ日が揺れる。',
  accentColor: '#7A9E7E',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F1EB" />
      {/* Birch trunk lines */}
      <line x1="65" y1="0" x2="65" y2="55" stroke="#D0D8C8" strokeWidth="1.5" />
      <line x1="72" y1="0" x2="72" y2="55" stroke="#D8DFD0" strokeWidth="1" />
      <line x1="78" y1="0" x2="78" y2="55" stroke="#C8D0C0" strokeWidth="1.8" />
      <line x1="84" y1="0" x2="84" y2="55" stroke="#D5DCD0" strokeWidth="0.8" />
      {/* Birch bark marks */}
      <line x1="64" y1="12" x2="66" y2="12" stroke="#A8B8A0" strokeWidth="0.3" />
      <line x1="64.5" y1="28" x2="65.5" y2="28" stroke="#A8B8A0" strokeWidth="0.25" />
      <line x1="77" y1="18" x2="79" y2="18" stroke="#A8B8A0" strokeWidth="0.3" />
      <line x1="77.5" y1="38" x2="78.5" y2="38" stroke="#A8B8A0" strokeWidth="0.25" />
      <line x1="71.5" y1="35" x2="72.5" y2="35" stroke="#A8B8A0" strokeWidth="0.2" />
      <line x1="83.5" y1="22" x2="84.5" y2="22" stroke="#A8B8A0" strokeWidth="0.2" />
      <text
        x="10"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.6"
        fill="#4A6A4E"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="26"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#7A9E7E"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="34"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#90B090"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#A8C0A8"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F1EB" />
      {/* Birch trunks on left */}
      <line x1="7" y1="0" x2="7" y2="55" stroke="#D0D8C8" strokeWidth="1.5" />
      <line x1="13" y1="0" x2="13" y2="55" stroke="#D8DFD0" strokeWidth="0.8" />
      <line x1="19" y1="0" x2="19" y2="55" stroke="#C8D0C0" strokeWidth="1.8" />
      <line x1="25" y1="0" x2="25" y2="55" stroke="#D5DCD0" strokeWidth="1" />
      <line x1="6" y1="15" x2="8" y2="15" stroke="#A8B8A0" strokeWidth="0.3" />
      <line x1="18" y1="30" x2="20" y2="30" stroke="#A8B8A0" strokeWidth="0.3" />
      <line x1="12.5" y1="42" x2="13.5" y2="42" stroke="#A8B8A0" strokeWidth="0.2" />
      <text
        x="81"
        y="12"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#4A6A4E"
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
        fill="#90B090"
      >
        {data.companyEn}
      </text>
      <line x1="40" y1="20" x2="81" y2="20" stroke="#C0D0C0" strokeWidth="0.1" />
      <text
        x="81"
        y="26"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#5A7A5E"
      >
        {data.tel}
      </text>
      <text
        x="81"
        y="30"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#5A7A5E"
      >
        {data.email}
      </text>
      <text
        x="81"
        y="34"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#5A7A5E"
      >
        {data.website}
      </text>
      <text
        x="81"
        y="45"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#A8C0A8"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 4. FROST (霜) — Winter frost crystals
// Ice crystal patterns, cool blue-white palette
// ============================================================
const frostTemplate: TemplateDefinition = {
  id: 'nordic-frost',
  name: 'FROST',
  nameJa: '霜',
  category: 'nordic',
  designer: 'Nordic Series',
  description: '窓の霜。氷の結晶が描く繊細な幾何学模様。',
  accentColor: '#8AAEC0',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F0F4F8" />
      {/* Frost crystal patterns */}
      <g opacity="0.12">
        {/* Crystal 1 */}
        <line x1="75" y1="5" x2="75" y2="20" stroke="#8AAEC0" strokeWidth="0.3" />
        <line x1="68" y1="12.5" x2="82" y2="12.5" stroke="#8AAEC0" strokeWidth="0.3" />
        <line x1="70" y1="7" x2="80" y2="18" stroke="#8AAEC0" strokeWidth="0.2" />
        <line x1="80" y1="7" x2="70" y2="18" stroke="#8AAEC0" strokeWidth="0.2" />
        {/* Crystal branches */}
        <line x1="72" y1="8" x2="70" y2="6" stroke="#8AAEC0" strokeWidth="0.15" />
        <line x1="78" y1="8" x2="80" y2="6" stroke="#8AAEC0" strokeWidth="0.15" />
        <line x1="72" y1="17" x2="70" y2="19" stroke="#8AAEC0" strokeWidth="0.15" />
        <line x1="78" y1="17" x2="80" y2="19" stroke="#8AAEC0" strokeWidth="0.15" />
      </g>
      {/* Crystal 2 - smaller */}
      <g opacity="0.08">
        <line x1="60" y1="38" x2="60" y2="48" stroke="#8AAEC0" strokeWidth="0.25" />
        <line x1="55" y1="43" x2="65" y2="43" stroke="#8AAEC0" strokeWidth="0.25" />
        <line x1="57" y1="40" x2="63" y2="46" stroke="#8AAEC0" strokeWidth="0.15" />
        <line x1="63" y1="40" x2="57" y2="46" stroke="#8AAEC0" strokeWidth="0.15" />
      </g>
      <text
        x="10"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="6"
        letterSpacing="0.8"
        fill="#4A6A7E"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="28"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#8AAEC0"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#A0BED0"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#B8D0E0"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F0F4F8" />
      <g opacity="0.1">
        <line x1="15" y1="35" x2="15" y2="50" stroke="#8AAEC0" strokeWidth="0.3" />
        <line x1="8" y1="42.5" x2="22" y2="42.5" stroke="#8AAEC0" strokeWidth="0.3" />
        <line x1="10" y1="37" x2="20" y2="48" stroke="#8AAEC0" strokeWidth="0.2" />
        <line x1="20" y1="37" x2="10" y2="48" stroke="#8AAEC0" strokeWidth="0.2" />
      </g>
      <text
        x="81"
        y="12"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2.2"
        fill="#4A6A7E"
      >
        {data.companyJa}
      </text>
      <text
        x="81"
        y="16.5"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#A0BED0"
      >
        {data.companyEn}
      </text>
      <line x1="40" y1="20" x2="81" y2="20" stroke="#C8D8E4" strokeWidth="0.1" />
      <text
        x="81"
        y="26"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#5A7A8E"
      >
        {data.tel}
      </text>
      <text
        x="81"
        y="30"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#5A7A8E"
      >
        {data.email}
      </text>
      <text
        x="81"
        y="34"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#5A7A8E"
      >
        {data.website}
      </text>
      <text
        x="81"
        y="45"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#B8D0E0"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 5. TUNDRA (原) — Arctic tundra landscape
// Vast horizontal lines, muted earth tones, open space
// ============================================================
const tundraTemplate: TemplateDefinition = {
  id: 'nordic-tundra',
  name: 'TUNDRA',
  nameJa: '原',
  category: 'nordic',
  designer: 'Nordic Series',
  description: 'ツンドラの広がり。果てしない地平線が静かに横たわる。',
  accentColor: '#8A9A7E',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F1EB" />
      {/* Tundra horizon layers */}
      <rect x="0" y="38" width="91" height="4" fill="#D0C8B8" opacity="0.25" />
      <rect x="0" y="42" width="91" height="4" fill="#C8C0B0" opacity="0.2" />
      <rect x="0" y="46" width="91" height="4" fill="#C0B8A8" opacity="0.15" />
      <rect x="0" y="50" width="91" height="5" fill="#B8B0A0" opacity="0.1" />
      {/* Sky line */}
      <line x1="0" y1="37" x2="91" y2="37" stroke="#8A9A7E" strokeWidth="0.2" opacity="0.3" />
      <text
        x="45.5"
        y="16"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="6.5"
        letterSpacing="2"
        fill="#5A6A50"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="23"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="1.8"
        letterSpacing="0.6"
        fill="#8A9A7E"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#A0B098"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F1EB" />
      <rect x="0" y="0" width="91" height="4" fill="#D0C8B8" opacity="0.2" />
      <rect x="0" y="4" width="91" height="4" fill="#C8C0B0" opacity="0.15" />
      <rect x="0" y="8" width="91" height="4" fill="#C0B8A8" opacity="0.1" />
      <line x1="0" y1="12" x2="91" y2="12" stroke="#8A9A7E" strokeWidth="0.15" opacity="0.25" />
      <text
        x="45.5"
        y="21"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2.2"
        fill="#5A6A50"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="25.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#8A9A7E"
      >
        {data.companyEn}
      </text>
      <text
        x="45.5"
        y="33"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#6A7A60"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="37"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#6A7A60"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="41"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#6A7A60"
      >
        {data.website}
      </text>
      <text
        x="45.5"
        y="50"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#A0B098"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 6. AURORA-N (光幕) — Northern lights display
// Vertical curtain shimmer, green and violet on dark sky
// ============================================================
const auroraNTemplate: TemplateDefinition = {
  id: 'nordic-aurora-n',
  name: 'AURORA-N',
  nameJa: '光幕',
  category: 'nordic',
  designer: 'Nordic Series',
  description: 'オーロラの幕。暗い空に揺れる緑と紫の光のカーテン。',
  accentColor: '#7A9E7E',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1A2332" />
      {/* Aurora curtain streaks */}
      <rect x="15" y="0" width="2" height="25" fill="#7A9E7E" opacity="0.12" rx="1" />
      <rect x="22" y="0" width="3" height="30" fill="#8AB88E" opacity="0.1" rx="1.5" />
      <rect x="30" y="0" width="2.5" height="22" fill="#6A8E9E" opacity="0.08" rx="1.2" />
      <rect x="38" y="0" width="2" height="28" fill="#7A9E7E" opacity="0.14" rx="1" />
      <rect x="45" y="0" width="3" height="18" fill="#8E7AA0" opacity="0.1" rx="1.5" />
      <rect x="53" y="0" width="2" height="26" fill="#7A9E7E" opacity="0.1" rx="1" />
      <rect x="60" y="0" width="2.5" height="20" fill="#8AB88E" opacity="0.12" rx="1.2" />
      <rect x="68" y="0" width="2" height="24" fill="#6A8E9E" opacity="0.09" rx="1" />
      <rect x="75" y="0" width="3" height="16" fill="#8E7AA0" opacity="0.08" rx="1.5" />
      {/* Stars */}
      <circle cx="10" cy="5" r="0.2" fill="#ffffff" opacity="0.4" />
      <circle cx="50" cy="8" r="0.15" fill="#ffffff" opacity="0.3" />
      <circle cx="85" cy="4" r="0.2" fill="#ffffff" opacity="0.35" />
      <circle cx="35" cy="3" r="0.1" fill="#ffffff" opacity="0.25" />
      <text
        x="10"
        y="35"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="6"
        letterSpacing="0.8"
        fill="#C0E0C8"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="41"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="rgba(192,224,200,0.6)"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="48"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="rgba(192,224,200,0.4)"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1A2332" />
      <rect x="10" y="30" width="2" height="25" fill="#7A9E7E" opacity="0.1" rx="1" />
      <rect x="20" y="28" width="2.5" height="27" fill="#8AB88E" opacity="0.08" rx="1.2" />
      <rect x="30" y="32" width="2" height="23" fill="#6A8E9E" opacity="0.12" rx="1" />
      <rect x="40" y="30" width="3" height="25" fill="#8E7AA0" opacity="0.08" rx="1.5" />
      <rect x="55" y="28" width="2" height="27" fill="#7A9E7E" opacity="0.1" rx="1" />
      <rect x="65" y="32" width="2.5" height="23" fill="#8AB88E" opacity="0.09" rx="1.2" />
      <rect x="78" y="30" width="2" height="25" fill="#6A8E9E" opacity="0.1" rx="1" />
      <circle cx="45" cy="5" r="0.2" fill="#ffffff" opacity="0.35" />
      <circle cx="80" cy="8" r="0.15" fill="#ffffff" opacity="0.3" />
      <text
        x="81"
        y="10"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2.2"
        fill="#C0E0C8"
      >
        {data.companyJa}
      </text>
      <text
        x="81"
        y="14.5"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="rgba(192,224,200,0.5)"
      >
        {data.companyEn}
      </text>
      <line x1="50" y1="18" x2="81" y2="18" stroke="rgba(122,158,126,0.2)" strokeWidth="0.12" />
      <text
        x="81"
        y="24"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="rgba(192,224,200,0.7)"
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
        fill="rgba(192,224,200,0.7)"
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
        fill="rgba(192,224,200,0.7)"
      >
        {data.website}
      </text>
      <text
        x="81"
        y="45"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="rgba(192,224,200,0.4)"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 7. CABIN (小屋) — Scandinavian log cabin
// Warm wood tones, horizontal log-like lines, cozy interior
// ============================================================
const cabinTemplate: TemplateDefinition = {
  id: 'nordic-cabin',
  name: 'CABIN',
  nameJa: '小屋',
  category: 'nordic',
  designer: 'Nordic Series',
  description: '北欧の小屋。丸太が積まれた壁の温もりが感じられる。',
  accentColor: '#A68B6B',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5EDE3" />
      {/* Log cabin horizontal lines */}
      <line x1="0" y1="4" x2="91" y2="4" stroke="#D4C4B0" strokeWidth="0.6" />
      <line x1="0" y1="8.5" x2="91" y2="8.5" stroke="#DCCFC0" strokeWidth="0.5" />
      <line x1="0" y1="13" x2="91" y2="13" stroke="#D0C0AD" strokeWidth="0.7" />
      <line x1="0" y1="42" x2="91" y2="42" stroke="#D4C4B0" strokeWidth="0.5" />
      <line x1="0" y1="46.5" x2="91" y2="46.5" stroke="#DCCFC0" strokeWidth="0.6" />
      <line x1="0" y1="51" x2="91" y2="51" stroke="#D0C0AD" strokeWidth="0.5" />
      <text
        x="12"
        y="24"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#6B5040"
      >
        {data.nameJa}
      </text>
      <text
        x="12"
        y="30"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#A08060"
      >
        {data.nameEn}
      </text>
      <text
        x="12"
        y="37"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#B09878"
      >
        {data.titleJa} | {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5EDE3" />
      <line x1="0" y1="4" x2="91" y2="4" stroke="#D4C4B0" strokeWidth="0.6" />
      <line x1="0" y1="8.5" x2="91" y2="8.5" stroke="#DCCFC0" strokeWidth="0.5" />
      <line x1="0" y1="46.5" x2="91" y2="46.5" stroke="#D4C4B0" strokeWidth="0.5" />
      <line x1="0" y1="51" x2="91" y2="51" stroke="#DCCFC0" strokeWidth="0.6" />
      <text
        x="45.5"
        y="17"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#6B5040"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="21.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#A08060"
      >
        {data.companyEn}
      </text>
      <line x1="25" y1="25" x2="66" y2="25" stroke="#C8B8A0" strokeWidth="0.12" />
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#806848"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#806848"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="39"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#806848"
      >
        {data.website}
      </text>
      <text
        x="45.5"
        y="45"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#B09878"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 8. PINE (松) — Pine forest simplicity
// Dark green accent, needle-like fine lines, evergreen
// ============================================================
const pineTemplate: TemplateDefinition = {
  id: 'nordic-pine',
  name: 'PINE',
  nameJa: '松',
  category: 'nordic',
  designer: 'Nordic Series',
  description: '松林の香り。常緑の深い緑が静かな力を湛える。',
  accentColor: '#3A5A40',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F1EB" />
      {/* Stylized pine tree silhouette */}
      <g opacity="0.08">
        <polygon points="80,45 76,45 78,38 74,38 78,30 75,30 78,22 81,22 84,30 81,30 85,38 81,38 83,45" fill="#3A5A40" />
        <rect x="78.5" y="45" width="2" height="4" fill="#3A5A40" />
      </g>
      <g opacity="0.05">
        <polygon points="68,48 65,48 66.5,42 64,42 66.5,36 64.5,36 66.5,30 68.5,30 70.5,36 68.5,36 71,42 68.5,42 70,48" fill="#3A5A40" />
        <rect x="67" y="48" width="1.5" height="3" fill="#3A5A40" />
      </g>
      <rect x="0" y="50" width="91" height="5" fill="#3A5A40" opacity="0.04" />
      <text
        x="10"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="0.5"
        fill="#2A4A30"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="26"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#5A7A60"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="34"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#7A9A80"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#90AA90"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F1EB" />
      <g opacity="0.06">
        <polygon points="14,48 11,48 12.5,42 10,42 12.5,36 10.5,36 12.5,30 14.5,30 16.5,36 14.5,36 17,42 14.5,42 16,48" fill="#3A5A40" />
        <rect x="13" y="48" width="1.5" height="3" fill="#3A5A40" />
      </g>
      <rect x="0" y="50" width="91" height="5" fill="#3A5A40" opacity="0.03" />
      <text
        x="81"
        y="12"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#2A4A30"
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
        fill="#7A9A80"
      >
        {data.companyEn}
      </text>
      <line x1="40" y1="20" x2="81" y2="20" stroke="#A0B8A0" strokeWidth="0.1" />
      <text
        x="81"
        y="26"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#4A6A50"
      >
        {data.tel}
      </text>
      <text
        x="81"
        y="30"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#4A6A50"
      >
        {data.email}
      </text>
      <text
        x="81"
        y="34"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#4A6A50"
      >
        {data.website}
      </text>
      <text
        x="81"
        y="45"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#90AA90"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 9. LAKE (湖) — Still Scandinavian lake
// Mirror-like reflection, horizontal calm, muted blue
// ============================================================
const lakeTemplate: TemplateDefinition = {
  id: 'nordic-lake',
  name: 'LAKE',
  nameJa: '湖',
  category: 'nordic',
  designer: 'Nordic Series',
  description: '北欧の湖。鏡のような水面が空と大地を映し出す。',
  accentColor: '#5B7B94',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F1EB" />
      {/* Lake - top half sky, bottom half water reflection */}
      <rect x="0" y="28" width="91" height="27" fill="#5B7B94" opacity="0.06" />
      <line x1="0" y1="27.5" x2="91" y2="27.5" stroke="#5B7B94" strokeWidth="0.3" opacity="0.15" />
      {/* Ripple lines on water */}
      <line x1="10" y1="34" x2="30" y2="34" stroke="#5B7B94" strokeWidth="0.08" opacity="0.12" />
      <line x1="40" y1="38" x2="65" y2="38" stroke="#5B7B94" strokeWidth="0.08" opacity="0.1" />
      <line x1="20" y1="42" x2="50" y2="42" stroke="#5B7B94" strokeWidth="0.08" opacity="0.08" />
      <line x1="55" y1="46" x2="80" y2="46" stroke="#5B7B94" strokeWidth="0.08" opacity="0.06" />
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="6"
        letterSpacing="1.2"
        fill="#3D5A6E"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="20.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="1.8"
        letterSpacing="0.4"
        fill="#7A99AD"
      >
        {data.nameEn}
      </text>
      {/* Reflected name (upside-down effect with lower opacity) */}
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="4"
        letterSpacing="1.2"
        fill="#5B7B94"
        opacity="0.06"
      >
        {data.nameJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F1EB" />
      <rect x="0" y="28" width="91" height="27" fill="#5B7B94" opacity="0.06" />
      <line x1="0" y1="27.5" x2="91" y2="27.5" stroke="#5B7B94" strokeWidth="0.3" opacity="0.12" />
      <line x1="15" y1="32" x2="40" y2="32" stroke="#5B7B94" strokeWidth="0.08" opacity="0.1" />
      <line x1="50" y1="36" x2="75" y2="36" stroke="#5B7B94" strokeWidth="0.08" opacity="0.08" />
      <text
        x="10"
        y="10"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2.2"
        fill="#3D5A6E"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="14.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#7A99AD"
      >
        {data.companyEn}
      </text>
      <text
        x="10"
        y="22"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#5B7B94"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="26"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#5B7B94"
      >
        {data.email}
      </text>
      <text
        x="81"
        y="22"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#5B7B94"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#95AEC0"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 10. WOOL (毛) — Knitted wool texture
// Warm, soft, textured feel with knit-like pattern lines
// ============================================================
const woolTemplate: TemplateDefinition = {
  id: 'nordic-wool',
  name: 'WOOL',
  nameJa: '毛',
  category: 'nordic',
  designer: 'Nordic Series',
  description: '毛糸の温もり。編み目の柔らかな質感が手に伝わる。',
  accentColor: '#D4A5A5',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F8F3ED" />
      {/* Knit pattern band at top */}
      <g opacity="0.12">
        {/* V-shaped knit stitches row 1 */}
        <path d="M5,3 L7,6 L9,3" fill="none" stroke="#D4A5A5" strokeWidth="0.3" />
        <path d="M11,3 L13,6 L15,3" fill="none" stroke="#D4A5A5" strokeWidth="0.3" />
        <path d="M17,3 L19,6 L21,3" fill="none" stroke="#D4A5A5" strokeWidth="0.3" />
        <path d="M23,3 L25,6 L27,3" fill="none" stroke="#D4A5A5" strokeWidth="0.3" />
        <path d="M29,3 L31,6 L33,3" fill="none" stroke="#D4A5A5" strokeWidth="0.3" />
        <path d="M35,3 L37,6 L39,3" fill="none" stroke="#D4A5A5" strokeWidth="0.3" />
        <path d="M41,3 L43,6 L45,3" fill="none" stroke="#D4A5A5" strokeWidth="0.3" />
        <path d="M47,3 L49,6 L51,3" fill="none" stroke="#D4A5A5" strokeWidth="0.3" />
        <path d="M53,3 L55,6 L57,3" fill="none" stroke="#D4A5A5" strokeWidth="0.3" />
        <path d="M59,3 L61,6 L63,3" fill="none" stroke="#D4A5A5" strokeWidth="0.3" />
        <path d="M65,3 L67,6 L69,3" fill="none" stroke="#D4A5A5" strokeWidth="0.3" />
        <path d="M71,3 L73,6 L75,3" fill="none" stroke="#D4A5A5" strokeWidth="0.3" />
        <path d="M77,3 L79,6 L81,3" fill="none" stroke="#D4A5A5" strokeWidth="0.3" />
        <path d="M83,3 L85,6 L87,3" fill="none" stroke="#D4A5A5" strokeWidth="0.3" />
        {/* V-shaped knit stitches row 2 */}
        <path d="M5,7 L7,10 L9,7" fill="none" stroke="#B09090" strokeWidth="0.3" />
        <path d="M11,7 L13,10 L15,7" fill="none" stroke="#B09090" strokeWidth="0.3" />
        <path d="M17,7 L19,10 L21,7" fill="none" stroke="#B09090" strokeWidth="0.3" />
        <path d="M23,7 L25,10 L27,7" fill="none" stroke="#B09090" strokeWidth="0.3" />
        <path d="M29,7 L31,10 L33,7" fill="none" stroke="#B09090" strokeWidth="0.3" />
        <path d="M35,7 L37,10 L39,7" fill="none" stroke="#B09090" strokeWidth="0.3" />
        <path d="M41,7 L43,10 L45,7" fill="none" stroke="#B09090" strokeWidth="0.3" />
        <path d="M47,7 L49,10 L51,7" fill="none" stroke="#B09090" strokeWidth="0.3" />
        <path d="M53,7 L55,10 L57,7" fill="none" stroke="#B09090" strokeWidth="0.3" />
        <path d="M59,7 L61,10 L63,7" fill="none" stroke="#B09090" strokeWidth="0.3" />
        <path d="M65,7 L67,10 L69,7" fill="none" stroke="#B09090" strokeWidth="0.3" />
        <path d="M71,7 L73,10 L75,7" fill="none" stroke="#B09090" strokeWidth="0.3" />
        <path d="M77,7 L79,10 L81,7" fill="none" stroke="#B09090" strokeWidth="0.3" />
        <path d="M83,7 L85,10 L87,7" fill="none" stroke="#B09090" strokeWidth="0.3" />
      </g>
      <text
        x="12"
        y="24"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#6B5050"
      >
        {data.nameJa}
      </text>
      <text
        x="12"
        y="30"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.25"
        fill="#A08080"
      >
        {data.nameEn}
      </text>
      <text
        x="12"
        y="38"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#B09898"
      >
        {data.titleJa}
      </text>
      <text
        x="12"
        y="45"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#C8B0B0"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F8F3ED" />
      {/* Knit pattern band at bottom */}
      <g opacity="0.1">
        <path d="M5,45 L7,48 L9,45" fill="none" stroke="#D4A5A5" strokeWidth="0.3" />
        <path d="M11,45 L13,48 L15,45" fill="none" stroke="#D4A5A5" strokeWidth="0.3" />
        <path d="M17,45 L19,48 L21,45" fill="none" stroke="#D4A5A5" strokeWidth="0.3" />
        <path d="M23,45 L25,48 L27,45" fill="none" stroke="#D4A5A5" strokeWidth="0.3" />
        <path d="M29,45 L31,48 L33,45" fill="none" stroke="#D4A5A5" strokeWidth="0.3" />
        <path d="M35,45 L37,48 L39,45" fill="none" stroke="#D4A5A5" strokeWidth="0.3" />
        <path d="M41,45 L43,48 L45,45" fill="none" stroke="#D4A5A5" strokeWidth="0.3" />
        <path d="M47,45 L49,48 L51,45" fill="none" stroke="#D4A5A5" strokeWidth="0.3" />
        <path d="M53,45 L55,48 L57,45" fill="none" stroke="#D4A5A5" strokeWidth="0.3" />
        <path d="M59,45 L61,48 L63,45" fill="none" stroke="#D4A5A5" strokeWidth="0.3" />
        <path d="M65,45 L67,48 L69,45" fill="none" stroke="#D4A5A5" strokeWidth="0.3" />
        <path d="M71,45 L73,48 L75,45" fill="none" stroke="#D4A5A5" strokeWidth="0.3" />
        <path d="M77,45 L79,48 L81,45" fill="none" stroke="#D4A5A5" strokeWidth="0.3" />
        <path d="M83,45 L85,48 L87,45" fill="none" stroke="#D4A5A5" strokeWidth="0.3" />
        <path d="M5,49 L7,52 L9,49" fill="none" stroke="#B09090" strokeWidth="0.3" />
        <path d="M11,49 L13,52 L15,49" fill="none" stroke="#B09090" strokeWidth="0.3" />
        <path d="M17,49 L19,52 L21,49" fill="none" stroke="#B09090" strokeWidth="0.3" />
        <path d="M23,49 L25,52 L27,49" fill="none" stroke="#B09090" strokeWidth="0.3" />
        <path d="M29,49 L31,52 L33,49" fill="none" stroke="#B09090" strokeWidth="0.3" />
        <path d="M35,49 L37,52 L39,49" fill="none" stroke="#B09090" strokeWidth="0.3" />
        <path d="M41,49 L43,52 L45,49" fill="none" stroke="#B09090" strokeWidth="0.3" />
        <path d="M47,49 L49,52 L51,49" fill="none" stroke="#B09090" strokeWidth="0.3" />
        <path d="M53,49 L55,52 L57,49" fill="none" stroke="#B09090" strokeWidth="0.3" />
        <path d="M59,49 L61,52 L63,49" fill="none" stroke="#B09090" strokeWidth="0.3" />
        <path d="M65,49 L67,52 L69,49" fill="none" stroke="#B09090" strokeWidth="0.3" />
        <path d="M71,49 L73,52 L75,49" fill="none" stroke="#B09090" strokeWidth="0.3" />
        <path d="M77,49 L79,52 L81,49" fill="none" stroke="#B09090" strokeWidth="0.3" />
        <path d="M83,49 L85,52 L87,49" fill="none" stroke="#B09090" strokeWidth="0.3" />
      </g>
      <text
        x="79"
        y="12"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#6B5050"
      >
        {data.companyJa}
      </text>
      <text
        x="79"
        y="16.5"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#A08080"
      >
        {data.companyEn}
      </text>
      <line x1="35" y1="20" x2="79" y2="20" stroke="#D4C0C0" strokeWidth="0.1" />
      <text
        x="79"
        y="26"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#806060"
      >
        {data.tel}
      </text>
      <text
        x="79"
        y="30"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#806060"
      >
        {data.email}
      </text>
      <text
        x="79"
        y="34"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#806060"
      >
        {data.website}
      </text>
      <text
        x="79"
        y="42"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#C8B0B0"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

export const nordicTemplates: TemplateDefinition[] = [
  fjordTemplate,
  hyggeTemplate,
  birchTemplate,
  frostTemplate,
  tundraTemplate,
  auroraNTemplate,
  cabinTemplate,
  pineTemplate,
  lakeTemplate,
  woolTemplate,
];
