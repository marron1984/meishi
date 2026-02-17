import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. NOIR (黒) — Pure black on black
// Rich black background with subtle dark grey text hierarchy
// ============================================================
const noirTemplate: TemplateDefinition = {
  id: 'monochrome-noir',
  name: 'NOIR',
  nameJa: '黒',
  category: 'monochrome',
  designer: 'Monochrome Series',
  description: '漆黒の深淵。黒の中に黒で描く、究極のダーク。',
  accentColor: '#0a0a0a',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0a0a0a" />
      <rect x="6" y="6" width="79" height="43" fill="none" stroke="#1a1a1a" strokeWidth="0.15" />
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="7"
        letterSpacing="1.5"
        fill="#e0e0e0"
      >
        {data.nameJa}
      </text>
      <line x1="25" y1="27" x2="66" y2="27" stroke="#333333" strokeWidth="0.15" />
      <text
        x="45.5"
        y="33"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.6"
        fill="#666666"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="41"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#444444"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0a0a0a" />
      <rect x="6" y="6" width="79" height="43" fill="none" stroke="#1a1a1a" strokeWidth="0.15" />
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#cccccc"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="18"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        letterSpacing="0.3"
        fill="#555555"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="22" x2="71" y2="22" stroke="#222222" strokeWidth="0.12" />
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#888888"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#888888"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#888888"
      >
        {data.website}
      </text>
      <line x1="20" y1="40" x2="71" y2="40" stroke="#222222" strokeWidth="0.12" />
      <text
        x="45.5"
        y="45.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#555555"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 2. IVORY (象牙) — Warm cream whites
// Ivory and warm off-white, delicate warm tones
// ============================================================
const ivoryTemplate: TemplateDefinition = {
  id: 'monochrome-ivory',
  name: 'IVORY',
  nameJa: '象牙',
  category: 'monochrome',
  designer: 'Monochrome Series',
  description: '象牙の肌。温かみのある白の重なり、上品な余韻。',
  accentColor: '#D4C5A9',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FAF6F0" />
      <rect x="0" y="0" width="91" height="3" fill="#EDE5D8" />
      <rect x="0" y="52" width="91" height="3" fill="#EDE5D8" />
      <text
        x="10"
        y="21"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="6"
        letterSpacing="0.6"
        fill="#8B7355"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="27"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.4"
        fill="#B5A088"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="35"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#C4B49A"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#D4C5A9"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FAF6F0" />
      <rect x="0" y="0" width="91" height="3" fill="#EDE5D8" />
      <rect x="0" y="52" width="91" height="3" fill="#EDE5D8" />
      <text
        x="81"
        y="14"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#8B7355"
      >
        {data.companyJa}
      </text>
      <text
        x="81"
        y="18.5"
        textAnchor="end"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        letterSpacing="0.2"
        fill="#B5A088"
      >
        {data.companyEn}
      </text>
      <line x1="40" y1="22" x2="81" y2="22" stroke="#D4C5A9" strokeWidth="0.12" />
      <text
        x="81"
        y="28"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#9A8B74"
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
        fill="#9A8B74"
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
        fill="#9A8B74"
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
        fill="#C4B49A"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 3. GRAPHITE (鉛) — Dark pencil graphite tones
// Charcoal pencil drawn feel, dense dark grays
// ============================================================
const graphiteTemplate: TemplateDefinition = {
  id: 'monochrome-graphite',
  name: 'GRAPHITE',
  nameJa: '鉛',
  category: 'monochrome',
  designer: 'Monochrome Series',
  description: '鉛筆の芯。濃い灰色の階調が紙面に滲む質感。',
  accentColor: '#4B5563',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#374151" />
      {/* Graphite texture lines */}
      <line x1="0" y1="5" x2="91" y2="5" stroke="#3D4756" strokeWidth="0.3" />
      <line x1="0" y1="10" x2="91" y2="10" stroke="#404A59" strokeWidth="0.2" />
      <line x1="0" y1="15" x2="91" y2="15" stroke="#3B4555" strokeWidth="0.25" />
      <line x1="0" y1="20" x2="91" y2="20" stroke="#424C5B" strokeWidth="0.15" />
      <line x1="0" y1="25" x2="91" y2="25" stroke="#3E4857" strokeWidth="0.2" />
      <line x1="0" y1="30" x2="91" y2="30" stroke="#3C4656" strokeWidth="0.3" />
      <line x1="0" y1="35" x2="91" y2="35" stroke="#414B5A" strokeWidth="0.15" />
      <line x1="0" y1="40" x2="91" y2="40" stroke="#3F4958" strokeWidth="0.25" />
      <line x1="0" y1="45" x2="91" y2="45" stroke="#3D4756" strokeWidth="0.2" />
      <line x1="0" y1="50" x2="91" y2="50" stroke="#434D5C" strokeWidth="0.15" />
      <text
        x="8"
        y="24"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="0.4"
        fill="#E5E7EB"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="30"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#9CA3AF"
      >
        {data.nameEn}
      </text>
      <text
        x="8"
        y="38"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#6B7280"
      >
        {data.titleJa}
      </text>
      <text
        x="8"
        y="46"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#6B7280"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#374151" />
      <line x1="0" y1="8" x2="91" y2="8" stroke="#3D4756" strokeWidth="0.2" />
      <line x1="0" y1="16" x2="91" y2="16" stroke="#404A59" strokeWidth="0.15" />
      <line x1="0" y1="24" x2="91" y2="24" stroke="#3E4857" strokeWidth="0.2" />
      <line x1="0" y1="32" x2="91" y2="32" stroke="#3C4656" strokeWidth="0.25" />
      <line x1="0" y1="40" x2="91" y2="40" stroke="#414B5A" strokeWidth="0.15" />
      <line x1="0" y1="48" x2="91" y2="48" stroke="#3F4958" strokeWidth="0.2" />
      <text
        x="83"
        y="14"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#E5E7EB"
      >
        {data.companyJa}
      </text>
      <text
        x="83"
        y="18.5"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#6B7280"
      >
        {data.companyEn}
      </text>
      <text
        x="83"
        y="27"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#9CA3AF"
      >
        {data.tel}
      </text>
      <text
        x="83"
        y="31"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#9CA3AF"
      >
        {data.email}
      </text>
      <text
        x="83"
        y="35"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#9CA3AF"
      >
        {data.website}
      </text>
      <text
        x="83"
        y="44"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#6B7280"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 4. SNOW (雪) — Bright white with very light gray
// Crisp white, almost invisible light gray accents
// ============================================================
const snowTemplate: TemplateDefinition = {
  id: 'monochrome-snow',
  name: 'SNOW',
  nameJa: '雪',
  category: 'monochrome',
  designer: 'Monochrome Series',
  description: '新雪の静寂。真白い面に薄い灰色がそっと息づく。',
  accentColor: '#E5E7EB',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Snow crystal dots */}
      <circle cx="15" cy="10" r="0.4" fill="#E5E7EB" />
      <circle cx="35" cy="7" r="0.3" fill="#E5E7EB" />
      <circle cx="55" cy="12" r="0.5" fill="#E5E7EB" />
      <circle cx="72" cy="8" r="0.35" fill="#E5E7EB" />
      <circle cx="25" cy="15" r="0.25" fill="#F3F4F6" />
      <circle cx="80" cy="14" r="0.45" fill="#F3F4F6" />
      <circle cx="45" cy="5" r="0.3" fill="#E5E7EB" />
      <text
        x="45.5"
        y="25"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="6.5"
        letterSpacing="1.2"
        fill="#D1D5DB"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="31.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="2"
        letterSpacing="0.5"
        fill="#E5E7EB"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="39"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#E5E7EB"
      >
        {data.titleJa}
      </text>
      <text
        x="45.5"
        y="46"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#F3F4F6"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      <circle cx="20" cy="45" r="0.4" fill="#E5E7EB" />
      <circle cx="60" cy="48" r="0.3" fill="#E5E7EB" />
      <circle cx="75" cy="43" r="0.5" fill="#E5E7EB" />
      <circle cx="40" cy="50" r="0.35" fill="#F3F4F6" />
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2.2"
        fill="#D1D5DB"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="18.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#E5E7EB"
      >
        {data.companyEn}
      </text>
      <line x1="30" y1="22" x2="61" y2="22" stroke="#F3F4F6" strokeWidth="0.12" />
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#D1D5DB"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#D1D5DB"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#D1D5DB"
      >
        {data.website}
      </text>
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#E5E7EB"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 5. INK (墨汁) — Dense black ink on white
// High contrast sumi ink feel, bold and stark
// ============================================================
const inkTemplate: TemplateDefinition = {
  id: 'monochrome-ink',
  name: 'INK',
  nameJa: '墨汁',
  category: 'monochrome',
  designer: 'Monochrome Series',
  description: '墨汁の濃淡。太い墨の線が白紙に鮮やかに映える。',
  accentColor: '#111111',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFFF8" />
      {/* Ink splash decorative element */}
      <circle cx="78" cy="10" r="6" fill="#111111" opacity="0.06" />
      <circle cx="80" cy="8" r="3" fill="#111111" opacity="0.04" />
      <circle cx="75" cy="13" r="2" fill="#111111" opacity="0.03" />
      <rect x="7" y="38" width="35" height="3" fill="#111111" rx="0.2" />
      <text
        x="8"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="8"
        letterSpacing="0.5"
        fill="#111111"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="27"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="2"
        letterSpacing="0.3"
        fill="#111111"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="8"
        y="34"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.7"
        fill="#444444"
      >
        {data.titleJa}
      </text>
      <text
        x="9"
        y="40.2"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#FFFFF8"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFFF8" />
      <rect x="0" y="0" width="91" height="12" fill="#111111" />
      <text
        x="8"
        y="8"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        fill="#FFFFF8"
      >
        {data.companyJa}
      </text>
      <text
        x="83"
        y="8"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="rgba(255,255,248,0.6)"
      >
        {data.companyEn}
      </text>
      <text
        x="8"
        y="22"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#111111"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="26"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#111111"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="30"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#111111"
      >
        {data.website}
      </text>
      <line x1="8" y1="35" x2="83" y2="35" stroke="#111111" strokeWidth="0.15" />
      <text
        x="8"
        y="41"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#555555"
      >
        〒{data.zipCode}
      </text>
      <text
        x="8"
        y="45"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#555555"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 6. CLOUD (雲) — Soft mid-gray tones
// Gentle cloud-like atmosphere, medium gray palette
// ============================================================
const cloudTemplate: TemplateDefinition = {
  id: 'monochrome-cloud',
  name: 'CLOUD',
  nameJa: '雲',
  category: 'monochrome',
  designer: 'Monochrome Series',
  description: '雲の層。柔らかな中間グレーが幾重にも漂う。',
  accentColor: '#9CA3AF',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F3F4F6" />
      {/* Cloud-like layered shapes */}
      <ellipse cx="25" cy="48" rx="20" ry="6" fill="#E5E7EB" />
      <ellipse cx="55" cy="50" rx="25" ry="7" fill="#E5E7EB" />
      <ellipse cx="75" cy="46" rx="18" ry="5" fill="#D1D5DB" opacity="0.5" />
      <text
        x="12"
        y="18"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="6"
        letterSpacing="0.6"
        fill="#6B7280"
      >
        {data.nameJa}
      </text>
      <text
        x="12"
        y="24"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#9CA3AF"
      >
        {data.nameEn}
      </text>
      <text
        x="12"
        y="32"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#9CA3AF"
      >
        {data.titleJa}
      </text>
      <text
        x="12"
        y="38"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#D1D5DB"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F3F4F6" />
      <ellipse cx="30" cy="6" rx="22" ry="6" fill="#E5E7EB" />
      <ellipse cx="65" cy="4" rx="18" ry="5" fill="#D1D5DB" opacity="0.4" />
      <text
        x="79"
        y="16"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#6B7280"
      >
        {data.companyJa}
      </text>
      <text
        x="79"
        y="20.5"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#9CA3AF"
      >
        {data.companyEn}
      </text>
      <text
        x="79"
        y="28"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#6B7280"
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
        fill="#6B7280"
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
        fill="#6B7280"
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
        fill="#9CA3AF"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 7. ASH (灰) — Warm gray ash tones
// Warm gray with brownish undertone, earthy monochrome
// ============================================================
const ashTemplate: TemplateDefinition = {
  id: 'monochrome-ash',
  name: 'ASH',
  nameJa: '灰',
  category: 'monochrome',
  designer: 'Monochrome Series',
  description: '灰の記憶。温かみのある灰色が燻るように広がる。',
  accentColor: '#78716C',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F5F4" />
      <rect x="0" y="0" width="4" height="55" fill="#E7E5E4" />
      <rect x="4" y="0" width="0.3" height="55" fill="#D6D3D1" />
      <text
        x="14"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.4"
        fill="#57534E"
      >
        {data.nameJa}
      </text>
      <text
        x="14"
        y="26"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.25"
        fill="#78716C"
      >
        {data.nameEn}
      </text>
      <text
        x="14"
        y="34"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#A8A29E"
      >
        {data.titleJa}
      </text>
      <text
        x="14"
        y="41"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#A8A29E"
      >
        {data.companyJa}
      </text>
      <text
        x="14"
        y="48"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#D6D3D1"
      >
        {data.email}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F5F4" />
      <rect x="87" y="0" width="4" height="55" fill="#E7E5E4" />
      <rect x="86.7" y="0" width="0.3" height="55" fill="#D6D3D1" />
      <text
        x="80"
        y="14"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#57534E"
      >
        {data.companyJa}
      </text>
      <text
        x="80"
        y="18.5"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#A8A29E"
      >
        {data.companyEn}
      </text>
      <line x1="35" y1="22" x2="80" y2="22" stroke="#D6D3D1" strokeWidth="0.12" />
      <text
        x="80"
        y="28"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#78716C"
      >
        {data.tel}
      </text>
      <text
        x="80"
        y="32"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#78716C"
      >
        {data.email}
      </text>
      <text
        x="80"
        y="36"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#78716C"
      >
        {data.website}
      </text>
      <text
        x="80"
        y="44"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#A8A29E"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 8. CHALK (白墨) — Chalk white on dark board
// Dark slate background with chalky white text
// ============================================================
const chalkTemplate: TemplateDefinition = {
  id: 'monochrome-chalk',
  name: 'CHALK',
  nameJa: '白墨',
  category: 'monochrome',
  designer: 'Monochrome Series',
  description: '黒板と白墨。暗い背景に白い文字が浮き立つ教室の記憶。',
  accentColor: '#1E293B',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1E293B" />
      {/* Chalk dust texture */}
      <circle cx="10" cy="5" r="0.3" fill="rgba(255,255,255,0.05)" />
      <circle cx="30" cy="48" r="0.4" fill="rgba(255,255,255,0.04)" />
      <circle cx="70" cy="8" r="0.35" fill="rgba(255,255,255,0.06)" />
      <circle cx="50" cy="50" r="0.3" fill="rgba(255,255,255,0.04)" />
      <circle cx="85" cy="30" r="0.25" fill="rgba(255,255,255,0.05)" />
      <text
        x="45.5"
        y="20"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="7"
        letterSpacing="1.5"
        fill="rgba(255,255,255,0.9)"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="2"
        letterSpacing="0.6"
        fill="rgba(255,255,255,0.55)"
      >
        {data.nameEn}
      </text>
      <line x1="20" y1="33" x2="71" y2="33" stroke="rgba(255,255,255,0.12)" strokeWidth="0.15" />
      <text
        x="45.5"
        y="39"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="rgba(255,255,255,0.4)"
      >
        {data.titleJa}
      </text>
      <text
        x="45.5"
        y="46"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="rgba(255,255,255,0.3)"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1E293B" />
      <circle cx="15" cy="45" r="0.3" fill="rgba(255,255,255,0.04)" />
      <circle cx="80" cy="10" r="0.4" fill="rgba(255,255,255,0.05)" />
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="rgba(255,255,255,0.85)"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="rgba(255,255,255,0.4)"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="22" x2="50" y2="22" stroke="rgba(255,255,255,0.1)" strokeWidth="0.15" />
      <text
        x="10"
        y="28"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="rgba(255,255,255,0.65)"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="rgba(255,255,255,0.65)"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="rgba(255,255,255,0.65)"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="rgba(255,255,255,0.35)"
      >
        〒{data.zipCode}
      </text>
      <text
        x="10"
        y="47.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="rgba(255,255,255,0.35)"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 9. SHADOW (影) — Layered shadow depth
// White card with dramatic dark shadow blocks
// ============================================================
const shadowTemplate: TemplateDefinition = {
  id: 'monochrome-shadow',
  name: 'SHADOW',
  nameJa: '影',
  category: 'monochrome',
  designer: 'Monochrome Series',
  description: '影の重なり。白い空間に落ちる暗いブロックが奥行を描く。',
  accentColor: '#334155',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Shadow blocks creating depth */}
      <rect x="60" y="0" width="31" height="55" fill="#F8FAFC" />
      <rect x="65" y="0" width="26" height="55" fill="#F1F5F9" />
      <rect x="72" y="0" width="19" height="55" fill="#E2E8F0" />
      <rect x="80" y="0" width="11" height="55" fill="#CBD5E1" />
      <text
        x="8"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="0.4"
        fill="#1E293B"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="26"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#64748B"
      >
        {data.nameEn}
      </text>
      <text
        x="8"
        y="34"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#94A3B8"
      >
        {data.titleJa}
      </text>
      <text
        x="8"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#94A3B8"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Shadow blocks on left side (mirror) */}
      <rect x="0" y="0" width="31" height="55" fill="#F8FAFC" />
      <rect x="0" y="0" width="26" height="55" fill="#F1F5F9" />
      <rect x="0" y="0" width="19" height="55" fill="#E2E8F0" />
      <rect x="0" y="0" width="11" height="55" fill="#CBD5E1" />
      <text
        x="83"
        y="14"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#1E293B"
      >
        {data.companyJa}
      </text>
      <text
        x="83"
        y="18.5"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#94A3B8"
      >
        {data.companyEn}
      </text>
      <line x1="40" y1="22" x2="83" y2="22" stroke="#CBD5E1" strokeWidth="0.15" />
      <text
        x="83"
        y="28"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#475569"
      >
        {data.tel}
      </text>
      <text
        x="83"
        y="32"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#475569"
      >
        {data.email}
      </text>
      <text
        x="83"
        y="36"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#475569"
      >
        {data.website}
      </text>
      <text
        x="83"
        y="44"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#94A3B8"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 10. SILVER (銀) — Metallic silver tones
// Cool blue-gray metallic feel, polished steel
// ============================================================
const silverTemplate: TemplateDefinition = {
  id: 'monochrome-silver',
  name: 'SILVER',
  nameJa: '銀',
  category: 'monochrome',
  designer: 'Monochrome Series',
  description: '銀の光沢。クールなブルーグレーが金属の輝きを宿す。',
  accentColor: '#94A3B8',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="monochrome-silver-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#CBD5E1" />
          <stop offset="30%" stopColor="#E2E8F0" />
          <stop offset="60%" stopColor="#F1F5F9" />
          <stop offset="80%" stopColor="#E2E8F0" />
          <stop offset="100%" stopColor="#CBD5E1" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#monochrome-silver-bg)" />
      <line x1="0" y1="8" x2="91" y2="8" stroke="#94A3B8" strokeWidth="0.08" />
      <line x1="0" y1="47" x2="91" y2="47" stroke="#94A3B8" strokeWidth="0.08" />
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="6"
        letterSpacing="0.8"
        fill="#334155"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="28.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.5"
        fill="#64748B"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="37"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#94A3B8"
      >
        {data.titleJa}
      </text>
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#94A3B8"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="monochrome-silver-bg-back" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#CBD5E1" />
          <stop offset="30%" stopColor="#E2E8F0" />
          <stop offset="60%" stopColor="#F1F5F9" />
          <stop offset="80%" stopColor="#E2E8F0" />
          <stop offset="100%" stopColor="#CBD5E1" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#monochrome-silver-bg-back)" />
      <line x1="0" y1="8" x2="91" y2="8" stroke="#94A3B8" strokeWidth="0.08" />
      <line x1="0" y1="47" x2="91" y2="47" stroke="#94A3B8" strokeWidth="0.08" />
      <text
        x="45.5"
        y="15"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#334155"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="19.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        letterSpacing="0.3"
        fill="#64748B"
      >
        {data.companyEn}
      </text>
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#475569"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#475569"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#475569"
      >
        {data.website}
      </text>
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#94A3B8"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

export const monochromeTemplates: TemplateDefinition[] = [
  noirTemplate,
  ivoryTemplate,
  graphiteTemplate,
  snowTemplate,
  inkTemplate,
  cloudTemplate,
  ashTemplate,
  chalkTemplate,
  shadowTemplate,
  silverTemplate,
];
