import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. CONCRETE (塊) — Raw concrete texture, heavy blocks
// ============================================================
const concreteTemplate: TemplateDefinition = {
  id: 'brutalist-concrete',
  name: 'CONCRETE',
  nameJa: '塊',
  category: 'brutalist',
  designer: 'Concrete Bureau',
  description: 'コンクリートの塊が持つ無骨な存在感。',
  accentColor: '#808080',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#c0c0c0" />
      <defs>
        <linearGradient id="brutalist-concrete-tex" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#b0b0b0" />
          <stop offset="30%" stopColor="#c0c0c0" />
          <stop offset="60%" stopColor="#a8a8a8" />
          <stop offset="100%" stopColor="#b8b8b8" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#brutalist-concrete-tex)" />
      {/* Concrete texture marks */}
      <line x1="0" y1="12" x2="91" y2="12" stroke="#a0a0a0" strokeWidth="0.2" opacity="0.4" />
      <line x1="0" y1="24" x2="91" y2="24" stroke="#a0a0a0" strokeWidth="0.15" opacity="0.3" />
      <line x1="0" y1="36" x2="91" y2="36" stroke="#a0a0a0" strokeWidth="0.2" opacity="0.35" />
      <line x1="30" y1="0" x2="30" y2="55" stroke="#a0a0a0" strokeWidth="0.1" opacity="0.2" />
      <line x1="60" y1="0" x2="60" y2="55" stroke="#a0a0a0" strokeWidth="0.1" opacity="0.2" />
      {/* Aggregate spots */}
      <circle cx="15" cy="8" r="1.5" fill="#9a9a9a" opacity="0.2" />
      <circle cx="70" cy="42" r="2" fill="#9a9a9a" opacity="0.15" />
      <circle cx="40" cy="50" r="1" fill="#9a9a9a" opacity="0.2" />
      {/* Heavy black text block */}
      <rect x="5" y="14" width="50" height="14" fill="#2a2a2a" />
      <text
        x="8"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="5.5"
        letterSpacing="0.3"
        fill="#c0c0c0"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="35"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="700"
        fontSize="2.5"
        letterSpacing="0.2"
        fill="#2a2a2a"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="8"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="1.6"
        fill="#555555"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#c0c0c0" />
      {/* Concrete form lines */}
      <line x1="0" y1="10" x2="91" y2="10" stroke="#a0a0a0" strokeWidth="0.15" opacity="0.3" />
      <line x1="0" y1="42" x2="91" y2="42" stroke="#a0a0a0" strokeWidth="0.15" opacity="0.3" />
      {/* Heavy company header */}
      <rect x="0" y="0" width="91" height="10" fill="#2a2a2a" />
      <text
        x="8"
        y="7"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="800"
        fontSize="2.5"
        fill="#c0c0c0"
      >
        {data.companyJa}
      </text>
      <text
        x="83"
        y="7"
        textAnchor="end"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="600"
        fontSize="1.5"
        fill="#808080"
      >
        {data.companyEn}
      </text>
      <text
        x="8"
        y="17"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="1.5"
        fill="#2a2a2a"
      >
        TEL
      </text>
      <text
        x="22"
        y="17"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#555555"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="22"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="1.5"
        fill="#2a2a2a"
      >
        MAIL
      </text>
      <text
        x="22"
        y="22"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#555555"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="27"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="1.5"
        fill="#2a2a2a"
      >
        WEB
      </text>
      <text
        x="22"
        y="27"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#555555"
      >
        {data.website}
      </text>
      <rect x="0" y="32" width="91" height="0.5" fill="#2a2a2a" opacity="0.3" />
      <text
        x="8"
        y="38"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#555555"
      >
        〒{data.zipCode}
      </text>
      <text
        x="8"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#555555"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 2. SLAB (板) — Heavy horizontal slab divisions
// ============================================================
const slabTemplate: TemplateDefinition = {
  id: 'brutalist-slab',
  name: 'SLAB',
  nameJa: '板',
  category: 'brutalist',
  designer: 'Slab Bureau',
  description: '重厚なスラブが空間を断ち切る。',
  accentColor: '#333333',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#e8e4e0" />
      {/* Heavy slabs */}
      <rect x="0" y="0" width="91" height="18" fill="#333333" />
      <rect x="0" y="20" width="91" height="3" fill="#555555" />
      <rect x="0" y="48" width="91" height="7" fill="#333333" />
      <text
        x="8"
        y="12"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="7"
        letterSpacing="0.5"
        fill="#e8e4e0"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="30"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="700"
        fontSize="3"
        letterSpacing="0.3"
        fill="#333333"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="8"
        y="38"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="1.8"
        fill="#666666"
      >
        {data.titleJa}
      </text>
      <text
        x="8"
        y="53"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#a0a0a0"
      >
        {data.email}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#e8e4e0" />
      {/* Slab divisions */}
      <rect x="0" y="0" width="91" height="14" fill="#333333" />
      <rect x="0" y="16" width="91" height="2" fill="#555555" />
      <rect x="0" y="45" width="91" height="10" fill="#333333" />
      <text
        x="8"
        y="10"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="800"
        fontSize="2.5"
        fill="#e8e4e0"
      >
        {data.companyJa}
      </text>
      <text
        x="83"
        y="10"
        textAnchor="end"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="1.5"
        fill="#808080"
      >
        {data.companyEn}
      </text>
      <text
        x="8"
        y="25"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.5"
        fill="#333333"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="30"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.5"
        fill="#333333"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="35"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.5"
        fill="#333333"
      >
        {data.website}
      </text>
      <text
        x="8"
        y="50"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.2"
        fill="#a0a0a0"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 3. RAW (素) — Unfinished, exposed construction
// ============================================================
const rawTemplate: TemplateDefinition = {
  id: 'brutalist-raw',
  name: 'RAW',
  nameJa: '素',
  category: 'brutalist',
  designer: 'Raw Bureau',
  description: '素のまま。加工を拒む原始的な力。',
  accentColor: '#A0A0A0',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#d8d4d0" />
      {/* Exposed rebar / construction marks */}
      <line x1="5" y1="0" x2="5" y2="55" stroke="#cc4444" strokeWidth="0.3" opacity="0.3" />
      <line x1="86" y1="0" x2="86" y2="55" stroke="#cc4444" strokeWidth="0.3" opacity="0.3" />
      {/* Concrete joint lines */}
      <line x1="0" y1="15" x2="91" y2="15" stroke="#b0aca8" strokeWidth="0.4" />
      <line x1="0" y1="40" x2="91" y2="40" stroke="#b0aca8" strokeWidth="0.4" />
      {/* Rough texture spots */}
      <rect x="10" y="3" width="20" height="1" fill="#b8b4b0" />
      <rect x="60" y="50" width="15" height="1" fill="#b8b4b0" />
      {/* Form tie holes */}
      <circle cx="5" cy="15" r="0.8" fill="#a0a0a0" />
      <circle cx="86" cy="15" r="0.8" fill="#a0a0a0" />
      <circle cx="5" cy="40" r="0.8" fill="#a0a0a0" />
      <circle cx="86" cy="40" r="0.8" fill="#a0a0a0" />
      <text
        x="45.5"
        y="25"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="8"
        letterSpacing="0.5"
        fill="#2a2a2a"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="33"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="700"
        fontSize="2"
        letterSpacing="0.5"
        fill="#555555"
      >
        {data.nameEn.toUpperCase()}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#d8d4d0" />
      {/* Rebar lines */}
      <line x1="5" y1="0" x2="5" y2="55" stroke="#cc4444" strokeWidth="0.3" opacity="0.3" />
      <line x1="86" y1="0" x2="86" y2="55" stroke="#cc4444" strokeWidth="0.3" opacity="0.3" />
      <line x1="0" y1="12" x2="91" y2="12" stroke="#b0aca8" strokeWidth="0.4" />
      <circle cx="5" cy="12" r="0.8" fill="#a0a0a0" />
      <circle cx="86" cy="12" r="0.8" fill="#a0a0a0" />
      <text
        x="10"
        y="9"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="2.5"
        fill="#2a2a2a"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="19"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="600"
        fontSize="1.5"
        fill="#555555"
      >
        {data.companyEn}
      </text>
      <text
        x="10"
        y="26"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.5"
        fill="#444444"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="31"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.5"
        fill="#444444"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.5"
        fill="#444444"
      >
        {data.website}
      </text>
      <line x1="0" y1="42" x2="91" y2="42" stroke="#b0aca8" strokeWidth="0.4" />
      <circle cx="5" cy="42" r="0.8" fill="#a0a0a0" />
      <circle cx="86" cy="42" r="0.8" fill="#a0a0a0" />
      <text
        x="10"
        y="48"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#666666"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 4. BLOCK (壁) — Massive rectangular block composition
// ============================================================
const blockTemplate: TemplateDefinition = {
  id: 'brutalist-block',
  name: 'BLOCK',
  nameJa: '壁',
  category: 'brutalist',
  designer: 'Block Bureau',
  description: '巨大なブロックの壁が威圧する。',
  accentColor: '#4a4a4a',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f0ece8" />
      {/* Large brutalist blocks */}
      <rect x="0" y="0" width="35" height="55" fill="#4a4a4a" />
      <rect x="37" y="0" width="54" height="8" fill="#6a6a6a" />
      <rect x="37" y="47" width="54" height="8" fill="#5a5a5a" />
      {/* Ventilation grid pattern */}
      {[...Array(4)].map((_, i) => (
        <rect
          key={`brutalist-block-vent-${i}`}
          x="5"
          y={10 + i * 3.5}
          width="25"
          height="2"
          fill="#3a3a3a"
        />
      ))}
      <text
        x="17.5"
        y="38"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="5"
        fill="#f0ece8"
        writingMode="vertical-rl"
        transform="rotate(0)"
      >
        {data.nameJa}
      </text>
      <text
        x="42"
        y="20"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="800"
        fontSize="3"
        letterSpacing="0.3"
        fill="#4a4a4a"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="42"
        y="28"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="1.8"
        fill="#777777"
      >
        {data.titleJa}
      </text>
      <text
        x="42"
        y="38"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#888888"
      >
        {data.email}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f0ece8" />
      {/* Block divisions */}
      <rect x="0" y="0" width="91" height="12" fill="#4a4a4a" />
      <rect x="0" y="14" width="45" height="41" fill="#5a5a5a" opacity="0.15" />
      <rect x="56" y="43" width="35" height="12" fill="#4a4a4a" />
      <text
        x="8"
        y="8"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="2.5"
        fill="#f0ece8"
      >
        {data.companyJa}
      </text>
      <text
        x="83"
        y="8"
        textAnchor="end"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="600"
        fontSize="1.5"
        fill="#a0a0a0"
      >
        {data.companyEn}
      </text>
      <text
        x="8"
        y="22"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="1.5"
        fill="#4a4a4a"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="27"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="1.5"
        fill="#4a4a4a"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="32"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="1.5"
        fill="#4a4a4a"
      >
        {data.website}
      </text>
      <text
        x="8"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.2"
        fill="#777777"
      >
        〒{data.zipCode}
      </text>
      <text
        x="8"
        y="46"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.2"
        fill="#777777"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 5. MONOLITH (柱) — Single towering monolith shape
// ============================================================
const monolithTemplate: TemplateDefinition = {
  id: 'brutalist-monolith',
  name: 'MONOLITH',
  nameJa: '柱',
  category: 'brutalist',
  designer: 'Monolith Bureau',
  description: '孤高のモノリスが静かに立ち尽くす。',
  accentColor: '#1a1a1a',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#e0dcd8" />
      {/* Central monolith */}
      <rect x="38" y="3" width="15" height="49" fill="#1a1a1a" />
      {/* Shadow */}
      <rect x="53" y="5" width="3" height="47" fill="#1a1a1a" opacity="0.2" />
      {/* Name positioned left of monolith */}
      <text
        x="33"
        y="22"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="5"
        fill="#1a1a1a"
      >
        {data.nameJa}
      </text>
      <text
        x="33"
        y="28"
        textAnchor="end"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="600"
        fontSize="1.8"
        fill="#555555"
      >
        {data.nameEn}
      </text>
      {/* Title right of monolith */}
      <text
        x="58"
        y="28"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#777777"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#e0dcd8" />
      {/* Narrow monolith on back */}
      <rect x="4" y="0" width="4" height="55" fill="#1a1a1a" />
      <text
        x="14"
        y="12"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="800"
        fontSize="2.5"
        fill="#1a1a1a"
      >
        {data.companyJa}
      </text>
      <text
        x="14"
        y="17"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="1.5"
        fill="#555555"
      >
        {data.companyEn}
      </text>
      <rect x="14" y="21" width="60" height="0.4" fill="#1a1a1a" opacity="0.2" />
      <text
        x="14"
        y="27"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.5"
        fill="#444444"
      >
        {data.tel}
      </text>
      <text
        x="14"
        y="31.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.5"
        fill="#444444"
      >
        {data.email}
      </text>
      <text
        x="14"
        y="36"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.5"
        fill="#444444"
      >
        {data.website}
      </text>
      <rect x="14" y="40" width="60" height="0.4" fill="#1a1a1a" opacity="0.2" />
      <text
        x="14"
        y="46"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#777777"
      >
        〒{data.zipCode}
      </text>
      <text
        x="14"
        y="50"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#777777"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 6. VOID-B (空洞) — Void/negative space cutout
// ============================================================
const voidBTemplate: TemplateDefinition = {
  id: 'brutalist-void-b',
  name: 'VOID-B',
  nameJa: '空洞',
  category: 'brutalist',
  designer: 'Void Bureau',
  description: '空洞が生む反転した存在感。',
  accentColor: '#2a2a2a',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#2a2a2a" />
      {/* Large void (white cutout) */}
      <rect x="15" y="10" width="61" height="35" fill="#f0ece8" />
      {/* Inner shadow edges */}
      <line x1="15" y1="10" x2="76" y2="10" stroke="#1a1a1a" strokeWidth="0.3" />
      <line x1="15" y1="10" x2="15" y2="45" stroke="#1a1a1a" strokeWidth="0.3" />
      <text
        x="45.5"
        y="25"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="6"
        letterSpacing="0.5"
        fill="#2a2a2a"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="700"
        fontSize="2"
        letterSpacing="0.3"
        fill="#555555"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="39"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      {/* Corner markers on dark area */}
      <rect x="3" y="3" width="4" height="0.5" fill="#808080" />
      <rect x="3" y="3" width="0.5" height="4" fill="#808080" />
      <rect x="84" y="3" width="4" height="0.5" fill="#808080" />
      <rect x="87.5" y="3" width="0.5" height="4" fill="#808080" />
      <rect x="3" y="51.5" width="4" height="0.5" fill="#808080" />
      <rect x="3" y="48" width="0.5" height="4" fill="#808080" />
      <rect x="84" y="51.5" width="4" height="0.5" fill="#808080" />
      <rect x="87.5" y="48" width="0.5" height="4" fill="#808080" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#2a2a2a" />
      {/* Void for content */}
      <rect x="8" y="5" width="75" height="45" fill="#f0ece8" />
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="800"
        fontSize="2.5"
        fill="#2a2a2a"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="18.5"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="600"
        fontSize="1.5"
        fill="#555555"
      >
        {data.companyEn}
      </text>
      <rect x="20" y="21.5" width="51" height="0.4" fill="#2a2a2a" opacity="0.3" />
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.4"
        fill="#444444"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.4"
        fill="#444444"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.4"
        fill="#444444"
      >
        {data.website}
      </text>
      <rect x="20" y="38" width="51" height="0.4" fill="#2a2a2a" opacity="0.3" />
      <text
        x="45.5"
        y="43.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.2"
        fill="#777777"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="47.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.2"
        fill="#777777"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 7. GRID-B (格子) — Exposed structural grid
// ============================================================
const gridBTemplate: TemplateDefinition = {
  id: 'brutalist-grid-b',
  name: 'GRID-B',
  nameJa: '格子',
  category: 'brutalist',
  designer: 'Grid Bureau',
  description: '剥き出しの構造グリッドが秩序を示す。',
  accentColor: '#555555',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f0ece8" />
      {/* Heavy grid lines */}
      {[...Array(6)].map((_, i) => (
        <line
          key={`brutalist-grid-h-${i}`}
          x1="0"
          y1={i * 11}
          x2="91"
          y2={i * 11}
          stroke="#555555"
          strokeWidth="0.5"
        />
      ))}
      {[...Array(9)].map((_, i) => (
        <line
          key={`brutalist-grid-v-${i}`}
          x1={i * 11.375}
          y1="0"
          x2={i * 11.375}
          y2="55"
          stroke="#555555"
          strokeWidth="0.5"
        />
      ))}
      {/* Filled grid cell for emphasis */}
      <rect x="0" y="0" width="11.375" height="11" fill="#555555" />
      <rect x="79.625" y="44" width="11.375" height="11" fill="#555555" />
      {/* Red accent cell */}
      <rect x="0" y="44" width="11.375" height="11" fill="#cc3333" opacity="0.7" />
      <text
        x="45.5"
        y="25"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="6"
        letterSpacing="0.5"
        fill="#2a2a2a"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="700"
        fontSize="2.5"
        letterSpacing="0.3"
        fill="#555555"
      >
        {data.nameEn.toUpperCase()}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f0ece8" />
      {/* Grid lines */}
      {[...Array(6)].map((_, i) => (
        <line
          key={`brutalist-grid-hb-${i}`}
          x1="0"
          y1={i * 11}
          x2="91"
          y2={i * 11}
          stroke="#555555"
          strokeWidth="0.4"
        />
      ))}
      {[...Array(9)].map((_, i) => (
        <line
          key={`brutalist-grid-vb-${i}`}
          x1={i * 11.375}
          y1="0"
          x2={i * 11.375}
          y2="55"
          stroke="#555555"
          strokeWidth="0.4"
        />
      ))}
      {/* Header row fill */}
      <rect x="0" y="0" width="91" height="11" fill="#555555" />
      <text
        x="8"
        y="7.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="800"
        fontSize="2.5"
        fill="#f0ece8"
      >
        {data.companyJa}
      </text>
      <text
        x="83"
        y="7.5"
        textAnchor="end"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="1.5"
        fill="#a0a0a0"
      >
        {data.companyEn}
      </text>
      <text
        x="8"
        y="18"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="1.5"
        fill="#2a2a2a"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="24"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="1.5"
        fill="#2a2a2a"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="30"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="1.5"
        fill="#2a2a2a"
      >
        {data.website}
      </text>
      <text
        x="8"
        y="40"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#666666"
      >
        〒{data.zipCode}
      </text>
      <text
        x="8"
        y="46"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#666666"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 8. SHAFT (軸) — Vertical shaft / elevator core
// ============================================================
const shaftTemplate: TemplateDefinition = {
  id: 'brutalist-shaft',
  name: 'SHAFT',
  nameJa: '軸',
  category: 'brutalist',
  designer: 'Shaft Bureau',
  description: 'エレベーターシャフトのような垂直の軸。',
  accentColor: '#3a3a3a',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#d8d4d0" />
      {/* Left shaft column */}
      <rect x="0" y="0" width="25" height="55" fill="#3a3a3a" />
      {/* Shaft internal lines */}
      <line x1="5" y1="0" x2="5" y2="55" stroke="#4a4a4a" strokeWidth="0.2" />
      <line x1="20" y1="0" x2="20" y2="55" stroke="#4a4a4a" strokeWidth="0.2" />
      {/* Floor markers in shaft */}
      {[...Array(10)].map((_, i) => (
        <line
          key={`brutalist-shaft-floor-${i}`}
          x1="5"
          y1={3 + i * 5.2}
          x2="20"
          y2={3 + i * 5.2}
          stroke="#4a4a4a"
          strokeWidth="0.15"
        />
      ))}
      {/* Red accent indicator */}
      <rect x="7" y="22" width="11" height="4" fill="#cc3333" opacity="0.6" />
      <text
        x="32"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="6"
        fill="#2a2a2a"
      >
        {data.nameJa}
      </text>
      <text
        x="32"
        y="27"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="700"
        fontSize="2"
        letterSpacing="0.2"
        fill="#555555"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="32"
        y="34"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#777777"
      >
        {data.titleJa}
      </text>
      <text
        x="32"
        y="44"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#888888"
      >
        {data.email}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#d8d4d0" />
      {/* Right shaft column */}
      <rect x="66" y="0" width="25" height="55" fill="#3a3a3a" />
      <line x1="71" y1="0" x2="71" y2="55" stroke="#4a4a4a" strokeWidth="0.2" />
      <line x1="86" y1="0" x2="86" y2="55" stroke="#4a4a4a" strokeWidth="0.2" />
      {[...Array(10)].map((_, i) => (
        <line
          key={`brutalist-shaft-fb-${i}`}
          x1="71"
          y1={3 + i * 5.2}
          x2="86"
          y2={3 + i * 5.2}
          stroke="#4a4a4a"
          strokeWidth="0.15"
        />
      ))}
      <text
        x="8"
        y="12"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="800"
        fontSize="2.5"
        fill="#2a2a2a"
      >
        {data.companyJa}
      </text>
      <text
        x="8"
        y="17"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="1.5"
        fill="#555555"
      >
        {data.companyEn}
      </text>
      <rect x="8" y="20.5" width="50" height="0.4" fill="#3a3a3a" opacity="0.3" />
      <text
        x="8"
        y="26"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.5"
        fill="#444444"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="30.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.5"
        fill="#444444"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="35"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.5"
        fill="#444444"
      >
        {data.website}
      </text>
      <rect x="8" y="39" width="50" height="0.4" fill="#3a3a3a" opacity="0.3" />
      <text
        x="8"
        y="44.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#777777"
      >
        〒{data.zipCode}
      </text>
      <text
        x="8"
        y="49"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#777777"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 9. MASS (量) — Dense heavy mass with tight spacing
// ============================================================
const massTemplate: TemplateDefinition = {
  id: 'brutalist-mass',
  name: 'MASS',
  nameJa: '量',
  category: 'brutalist',
  designer: 'Mass Bureau',
  description: '密集する質量が放つ圧倒的な重み。',
  accentColor: '#2a2a2a',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#2a2a2a" />
      {/* Stacked heavy text blocks */}
      <rect x="0" y="0" width="91" height="28" fill="#1a1a1a" />
      <text
        x="8"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="9"
        letterSpacing="0"
        fill="#A0A0A0"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="24"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="800"
        fontSize="4"
        letterSpacing="0"
        fill="#555555"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Lower block with title */}
      <rect x="0" y="30" width="50" height="8" fill="#cc3333" />
      <text
        x="5"
        y="36"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="2"
        fill="#ffffff"
      >
        {data.titleJa}
      </text>
      <text
        x="8"
        y="46"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#808080"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="50"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#808080"
      >
        {data.tel}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#2a2a2a" />
      {/* Dense header */}
      <rect x="0" y="0" width="91" height="16" fill="#1a1a1a" />
      <text
        x="8"
        y="8"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="3.5"
        fill="#A0A0A0"
      >
        {data.companyJa}
      </text>
      <text
        x="8"
        y="13"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="700"
        fontSize="1.8"
        fill="#555555"
      >
        {data.companyEn}
      </text>
      {/* Red accent bar */}
      <rect x="0" y="18" width="91" height="1.5" fill="#cc3333" />
      <text
        x="8"
        y="26"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="1.5"
        fill="#c0c0c0"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="31"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="1.5"
        fill="#c0c0c0"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="36"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="1.5"
        fill="#c0c0c0"
      >
        {data.website}
      </text>
      <rect x="0" y="41" width="91" height="0.5" fill="#808080" opacity="0.3" />
      <text
        x="8"
        y="47"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#808080"
      >
        〒{data.zipCode}
      </text>
      <text
        x="8"
        y="51"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#808080"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 10. FORM (形) — Exposed structural form, blueprint style
// ============================================================
const formTemplate: TemplateDefinition = {
  id: 'brutalist-form',
  name: 'FORM',
  nameJa: '形',
  category: 'brutalist',
  designer: 'Form Bureau',
  description: '構造の形態そのものが美になる。',
  accentColor: '#444444',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f0ece8" />
      {/* Structural cross-bracing */}
      <line x1="0" y1="0" x2="91" y2="55" stroke="#444444" strokeWidth="0.3" opacity="0.1" />
      <line x1="91" y1="0" x2="0" y2="55" stroke="#444444" strokeWidth="0.3" opacity="0.1" />
      {/* Thick frame */}
      <rect x="0" y="0" width="91" height="3" fill="#444444" />
      <rect x="0" y="52" width="91" height="3" fill="#444444" />
      <rect x="0" y="0" width="3" height="55" fill="#444444" />
      <rect x="88" y="0" width="3" height="55" fill="#444444" />
      {/* Interior structural lines */}
      <line x1="3" y1="27.5" x2="88" y2="27.5" stroke="#444444" strokeWidth="0.2" />
      <line x1="45.5" y1="3" x2="45.5" y2="52" stroke="#444444" strokeWidth="0.2" />
      {/* Dimension markers */}
      <text
        x="45.5"
        y="2"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="0.8"
        fill="#444444"
      >
        91mm
      </text>
      <text
        x="90"
        y="27.5"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="0.8"
        fill="#444444"
        transform="rotate(90 90 27.5)"
      >
        55mm
      </text>
      <text
        x="24"
        y="16"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="5.5"
        fill="#2a2a2a"
      >
        {data.nameJa}
      </text>
      <text
        x="67"
        y="16"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="700"
        fontSize="2"
        letterSpacing="0.2"
        fill="#555555"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="24"
        y="38"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="1.6"
        fill="#666666"
      >
        {data.titleJa}
      </text>
      <text
        x="67"
        y="35"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#777777"
      >
        {data.email}
      </text>
      <text
        x="67"
        y="40"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#777777"
      >
        {data.tel}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f0ece8" />
      {/* Thick frame */}
      <rect x="0" y="0" width="91" height="3" fill="#444444" />
      <rect x="0" y="52" width="91" height="3" fill="#444444" />
      <rect x="0" y="0" width="3" height="55" fill="#444444" />
      <rect x="88" y="0" width="3" height="55" fill="#444444" />
      {/* Horizontal structural divider */}
      <line x1="3" y1="18" x2="88" y2="18" stroke="#444444" strokeWidth="0.3" />
      <line x1="3" y1="40" x2="88" y2="40" stroke="#444444" strokeWidth="0.3" />
      <text
        x="8"
        y="11"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="2.5"
        fill="#2a2a2a"
      >
        {data.companyJa}
      </text>
      <text
        x="83"
        y="11"
        textAnchor="end"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="600"
        fontSize="1.5"
        fill="#555555"
      >
        {data.companyEn}
      </text>
      <text
        x="8"
        y="24"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="1.5"
        fill="#2a2a2a"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="29"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="1.5"
        fill="#2a2a2a"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="34"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="1.5"
        fill="#2a2a2a"
      >
        {data.website}
      </text>
      <text
        x="8"
        y="46"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#666666"
      >
        〒{data.zipCode}
      </text>
      <text
        x="8"
        y="50"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#666666"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

export const brutalistTemplates: TemplateDefinition[] = [
  concreteTemplate,
  slabTemplate,
  rawTemplate,
  blockTemplate,
  monolithTemplate,
  voidBTemplate,
  gridBTemplate,
  shaftTemplate,
  massTemplate,
  formTemplate,
];
