import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. DAWN (曙) — Warm sunrise gradient
// Soft peach to golden amber, horizontal sunrise feel
// ============================================================
const dawnTemplate: TemplateDefinition = {
  id: 'gradient-dawn',
  name: 'DAWN',
  nameJa: '曙',
  category: 'gradient',
  designer: 'Gradient Series',
  description: '夜明けの空。桃色から琥珀へ、温かな光の移ろい。',
  accentColor: '#F4845F',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="gradient-dawn-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FDE8D0" />
          <stop offset="35%" stopColor="#F9C9A3" />
          <stop offset="70%" stopColor="#F4845F" />
          <stop offset="100%" stopColor="#D64545" />
        </linearGradient>
        <linearGradient id="gradient-dawn-accent" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#gradient-dawn-bg)" />
      <rect x="0" y="0" width="91" height="18" fill="url(#gradient-dawn-accent)" />
      <text
        x="10"
        y="24"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6.5"
        letterSpacing="0.8"
        fill="#ffffff"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="30.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.4"
        fill="rgba(255,255,255,0.8)"
      >
        {data.nameEn}
      </text>
      <line x1="10" y1="35" x2="50" y2="35" stroke="rgba(255,255,255,0.4)" strokeWidth="0.2" />
      <text
        x="10"
        y="40"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="rgba(255,255,255,0.7)"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="47"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="rgba(255,255,255,0.6)"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="gradient-dawn-bg-back" x1="1" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#FDE8D0" />
          <stop offset="35%" stopColor="#F9C9A3" />
          <stop offset="70%" stopColor="#F4845F" />
          <stop offset="100%" stopColor="#D64545" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#gradient-dawn-bg-back)" />
      <text
        x="81"
        y="14"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#ffffff"
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
        fill="rgba(255,255,255,0.7)"
      >
        {data.companyEn}
      </text>
      <line x1="40" y1="22" x2="81" y2="22" stroke="rgba(255,255,255,0.3)" strokeWidth="0.2" />
      <text
        x="81"
        y="28"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="rgba(255,255,255,0.85)"
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
        fill="rgba(255,255,255,0.85)"
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
        fill="rgba(255,255,255,0.85)"
      >
        {data.website}
      </text>
      <text
        x="81"
        y="43"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.3"
        fill="rgba(255,255,255,0.6)"
      >
        〒{data.zipCode}
      </text>
      <text
        x="81"
        y="46.5"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.3"
        fill="rgba(255,255,255,0.6)"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 2. DUSK (暮) — Cool twilight gradient
// Deep indigo to dusty violet, serene evening palette
// ============================================================
const duskTemplate: TemplateDefinition = {
  id: 'gradient-dusk',
  name: 'DUSK',
  nameJa: '暮',
  category: 'gradient',
  designer: 'Gradient Series',
  description: '黄昏の帳。深い藍色から薄紫へ、静寂の時間。',
  accentColor: '#6B5B95',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="gradient-dusk-bg" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#1B1464" />
          <stop offset="40%" stopColor="#3D2C7C" />
          <stop offset="70%" stopColor="#6B5B95" />
          <stop offset="100%" stopColor="#C4A7D7" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#gradient-dusk-bg)" />
      <circle cx="75" cy="12" r="15" fill="rgba(196,167,215,0.1)" />
      <circle cx="78" cy="10" r="8" fill="rgba(196,167,215,0.08)" />
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="7"
        letterSpacing="1.5"
        fill="#E8DCF0"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="29"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="2.2"
        letterSpacing="0.6"
        fill="rgba(232,220,240,0.7)"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="38"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="rgba(232,220,240,0.5)"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="gradient-dusk-bg-back" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1B1464" />
          <stop offset="40%" stopColor="#3D2C7C" />
          <stop offset="70%" stopColor="#6B5B95" />
          <stop offset="100%" stopColor="#C4A7D7" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#gradient-dusk-bg-back)" />
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#E8DCF0"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="rgba(232,220,240,0.6)"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="22" x2="45" y2="22" stroke="rgba(232,220,240,0.25)" strokeWidth="0.15" />
      <text
        x="10"
        y="28"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="rgba(232,220,240,0.8)"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="rgba(232,220,240,0.8)"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="rgba(232,220,240,0.8)"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="rgba(232,220,240,0.5)"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 3. PRISM (虹彩) — Rainbow prism gradient
// Full spectrum refraction, diagonal light band
// ============================================================
const prismTemplate: TemplateDefinition = {
  id: 'gradient-prism',
  name: 'PRISM',
  nameJa: '虹彩',
  category: 'gradient',
  designer: 'Gradient Series',
  description: 'プリズムの虹彩。光が分解されて生まれる七色の帯。',
  accentColor: '#8B5CF6',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="gradient-prism-band" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF0040" stopOpacity="0.3" />
          <stop offset="16%" stopColor="#FF8C00" stopOpacity="0.3" />
          <stop offset="33%" stopColor="#FFD700" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#00C853" stopOpacity="0.3" />
          <stop offset="66%" stopColor="#2196F3" stopOpacity="0.3" />
          <stop offset="83%" stopColor="#8B5CF6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#E040FB" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="gradient-prism-stripe" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF0040" />
          <stop offset="16%" stopColor="#FF8C00" />
          <stop offset="33%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#00C853" />
          <stop offset="66%" stopColor="#2196F3" />
          <stop offset="83%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#E040FB" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#fafafa" />
      <rect x="0" y="0" width="91" height="55" fill="url(#gradient-prism-band)" opacity="0.15" />
      <rect x="4" y="4" width="1.2" height="47" fill="url(#gradient-prism-stripe)" rx="0.6" />
      <text
        x="12"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="0.5"
        fill="#2d2d2d"
      >
        {data.nameJa}
      </text>
      <text
        x="12"
        y="26"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.3"
        fill="#666666"
      >
        {data.nameEn}
      </text>
      <text
        x="12"
        y="34"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.7"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      <text
        x="12"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.7"
        fill="#999999"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="gradient-prism-stripe-back" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E040FB" />
          <stop offset="16%" stopColor="#8B5CF6" />
          <stop offset="33%" stopColor="#2196F3" />
          <stop offset="50%" stopColor="#00C853" />
          <stop offset="66%" stopColor="#FFD700" />
          <stop offset="83%" stopColor="#FF8C00" />
          <stop offset="100%" stopColor="#FF0040" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#fafafa" />
      <rect x="85.8" y="4" width="1.2" height="47" fill="url(#gradient-prism-stripe-back)" rx="0.6" />
      <text
        x="79"
        y="14"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#2d2d2d"
      >
        {data.companyJa}
      </text>
      <text
        x="79"
        y="18.5"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#888888"
      >
        {data.companyEn}
      </text>
      <text
        x="79"
        y="26"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#555555"
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
        fill="#555555"
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
        fill="#555555"
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
        fill="#aaaaaa"
      >
        〒{data.zipCode}
      </text>
      <text
        x="79"
        y="45.5"
        textAnchor="end"
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
// 4. AURORA-G (極光) — Northern lights gradient
// Teal to emerald to violet, shimmering curtain effect
// ============================================================
const auroraGTemplate: TemplateDefinition = {
  id: 'gradient-aurora-g',
  name: 'AURORA-G',
  nameJa: '極光',
  category: 'gradient',
  designer: 'Gradient Series',
  description: '極光のカーテン。翡翠とすみれ色が揺れ動く天幕。',
  accentColor: '#10B981',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="gradient-aurora-g-bg" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#064E3B" />
          <stop offset="30%" stopColor="#065F46" />
          <stop offset="50%" stopColor="#10B981" />
          <stop offset="75%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#312E81" />
        </linearGradient>
        <radialGradient id="gradient-aurora-g-glow" cx="0.7" cy="0.3" r="0.5">
          <stop offset="0%" stopColor="#34D399" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#34D399" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#gradient-aurora-g-bg)" />
      <rect width="91" height="55" fill="url(#gradient-aurora-g-glow)" />
      <path d="M0,15 Q20,8 40,18 Q60,28 91,10 L91,0 L0,0 Z" fill="rgba(52,211,153,0.12)" />
      <path d="M0,25 Q30,15 55,22 Q75,28 91,18 L91,12 Q75,22 55,16 Q30,9 0,19 Z" fill="rgba(99,102,241,0.1)" />
      <text
        x="12"
        y="30"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="6.5"
        letterSpacing="1"
        fill="#ECFDF5"
      >
        {data.nameJa}
      </text>
      <text
        x="12"
        y="36.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.5"
        fill="rgba(236,253,245,0.7)"
      >
        {data.nameEn}
      </text>
      <text
        x="12"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="rgba(167,243,208,0.5)"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="gradient-aurora-g-bg-back" x1="0.5" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#064E3B" />
          <stop offset="30%" stopColor="#065F46" />
          <stop offset="60%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#312E81" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#gradient-aurora-g-bg-back)" />
      <path d="M0,45 Q25,38 50,42 Q75,46 91,40 L91,55 L0,55 Z" fill="rgba(52,211,153,0.1)" />
      <text
        x="81"
        y="12"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#ECFDF5"
      >
        {data.companyJa}
      </text>
      <text
        x="81"
        y="16"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="rgba(167,243,208,0.6)"
      >
        {data.companyEn}
      </text>
      <line x1="50" y1="20" x2="81" y2="20" stroke="rgba(167,243,208,0.25)" strokeWidth="0.15" />
      <text
        x="81"
        y="26"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="rgba(236,253,245,0.8)"
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
        fill="rgba(236,253,245,0.8)"
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
        fill="rgba(236,253,245,0.8)"
      >
        {data.website}
      </text>
      <text
        x="81"
        y="43"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="rgba(167,243,208,0.5)"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 5. FLAME (焔) — Fire gradient
// Deep crimson to bright orange to yellow, hot rising flames
// ============================================================
const flameTemplate: TemplateDefinition = {
  id: 'gradient-flame',
  name: 'FLAME',
  nameJa: '焔',
  category: 'gradient',
  designer: 'Gradient Series',
  description: '焔の揺らめき。深紅から金色へ、燃え上がる情熱。',
  accentColor: '#DC2626',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="gradient-flame-bg" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#7F1D1D" />
          <stop offset="30%" stopColor="#DC2626" />
          <stop offset="60%" stopColor="#EA580C" />
          <stop offset="85%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#FDE68A" />
        </linearGradient>
        <radialGradient id="gradient-flame-heat" cx="0.5" cy="1" r="0.7">
          <stop offset="0%" stopColor="#7F1D1D" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#7F1D1D" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#gradient-flame-bg)" />
      <rect width="91" height="55" fill="url(#gradient-flame-heat)" />
      <path d="M20,55 Q22,40 18,30 Q25,38 28,25 Q32,35 35,22 Q38,32 42,28 Q40,40 45,55 Z" fill="rgba(253,230,138,0.08)" />
      <text
        x="45.5"
        y="18"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="7"
        letterSpacing="1.2"
        fill="#FEF3C7"
      >
        {data.nameJa}
      </text>
      <line x1="20" y1="23" x2="71" y2="23" stroke="rgba(254,243,199,0.3)" strokeWidth="0.15" />
      <text
        x="45.5"
        y="28.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.5"
        fill="rgba(254,243,199,0.8)"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="37"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.7"
        fill="rgba(254,243,199,0.6)"
      >
        {data.titleJa}
      </text>
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.7"
        fill="rgba(254,243,199,0.5)"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="gradient-flame-bg-back" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="30%" stopColor="#F59E0B" />
          <stop offset="60%" stopColor="#EA580C" />
          <stop offset="85%" stopColor="#DC2626" />
          <stop offset="100%" stopColor="#7F1D1D" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#gradient-flame-bg-back)" />
      <text
        x="45.5"
        y="12"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        fill="#7F1D1D"
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
        fill="rgba(127,29,29,0.6)"
      >
        {data.companyEn}
      </text>
      <line x1="25" y1="20" x2="66" y2="20" stroke="rgba(127,29,29,0.2)" strokeWidth="0.15" />
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="rgba(254,243,199,0.9)"
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
        fill="rgba(254,243,199,0.9)"
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
        fill="rgba(254,243,199,0.9)"
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
        fill="rgba(254,243,199,0.6)"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 6. ICE (氷) — Ice blue gradient
// Crystal clear pale blue to deep glacial blue
// ============================================================
const iceTemplate: TemplateDefinition = {
  id: 'gradient-ice',
  name: 'ICE',
  nameJa: '氷',
  category: 'gradient',
  designer: 'Gradient Series',
  description: '氷の結晶。透明な蒼から深い氷河の青へ。',
  accentColor: '#0EA5E9',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="gradient-ice-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F0F9FF" />
          <stop offset="25%" stopColor="#BAE6FD" />
          <stop offset="55%" stopColor="#38BDF8" />
          <stop offset="80%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#0C4A6E" />
        </linearGradient>
        <radialGradient id="gradient-ice-crystal" cx="0.3" cy="0.4" r="0.4">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#gradient-ice-bg)" />
      <rect width="91" height="55" fill="url(#gradient-ice-crystal)" />
      <polygon points="15,8 17,3 19,8 17,6" fill="rgba(255,255,255,0.15)" />
      <polygon points="30,12 31.5,8 33,12 31.5,10.5" fill="rgba(255,255,255,0.1)" />
      <polygon points="8,18 9.2,15 10.4,18 9.2,16.8" fill="rgba(255,255,255,0.12)" />
      <text
        x="10"
        y="28"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="6"
        letterSpacing="0.8"
        fill="#ffffff"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="34"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="1.8"
        letterSpacing="0.4"
        fill="rgba(255,255,255,0.75)"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="rgba(255,255,255,0.5)"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="48"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="rgba(255,255,255,0.4)"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="gradient-ice-bg-back" x1="1" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#F0F9FF" />
          <stop offset="30%" stopColor="#BAE6FD" />
          <stop offset="60%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0C4A6E" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#gradient-ice-bg-back)" />
      <text
        x="10"
        y="12"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#0C4A6E"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="16"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="rgba(12,74,110,0.6)"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="20" x2="55" y2="20" stroke="rgba(12,74,110,0.2)" strokeWidth="0.15" />
      <text
        x="10"
        y="26"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#ffffff"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="30"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#ffffff"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="34"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#ffffff"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="rgba(255,255,255,0.6)"
      >
        〒{data.zipCode}
      </text>
      <text
        x="10"
        y="46.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="rgba(255,255,255,0.6)"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 7. BLOOM (咲) — Floral gradient
// Soft petal pinks to lavender, botanical warmth
// ============================================================
const bloomTemplate: TemplateDefinition = {
  id: 'gradient-bloom',
  name: 'BLOOM',
  nameJa: '咲',
  category: 'gradient',
  designer: 'Gradient Series',
  description: '花が咲く。花弁の桃色から薄紫へ、春の息吹。',
  accentColor: '#EC4899',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="gradient-bloom-bg" cx="0.5" cy="0.5" r="0.7">
          <stop offset="0%" stopColor="#FDF2F8" />
          <stop offset="30%" stopColor="#FBCFE8" />
          <stop offset="55%" stopColor="#F9A8D4" />
          <stop offset="80%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#9D174D" />
        </radialGradient>
        <radialGradient id="gradient-bloom-petal1" cx="0.2" cy="0.3" r="0.25">
          <stop offset="0%" stopColor="#FDF2F8" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FDF2F8" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="gradient-bloom-petal2" cx="0.8" cy="0.7" r="0.2">
          <stop offset="0%" stopColor="#F9A8D4" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#F9A8D4" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#gradient-bloom-bg)" />
      <rect width="91" height="55" fill="url(#gradient-bloom-petal1)" />
      <rect width="91" height="55" fill="url(#gradient-bloom-petal2)" />
      <circle cx="18" cy="15" r="4" fill="rgba(253,242,248,0.12)" />
      <circle cx="72" cy="40" r="5" fill="rgba(253,242,248,0.08)" />
      <circle cx="60" cy="10" r="3" fill="rgba(253,242,248,0.1)" />
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="6.5"
        letterSpacing="1.2"
        fill="#ffffff"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2.2"
        letterSpacing="0.6"
        fontStyle="italic"
        fill="rgba(255,255,255,0.75)"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="40"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="rgba(255,255,255,0.55)"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="gradient-bloom-bg-back" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9D174D" />
          <stop offset="40%" stopColor="#EC4899" />
          <stop offset="70%" stopColor="#FBCFE8" />
          <stop offset="100%" stopColor="#FDF2F8" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#gradient-bloom-bg-back)" />
      <text
        x="81"
        y="12"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#FDF2F8"
      >
        {data.companyJa}
      </text>
      <text
        x="81"
        y="16"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="rgba(253,242,248,0.65)"
      >
        {data.companyEn}
      </text>
      <line x1="45" y1="20" x2="81" y2="20" stroke="rgba(253,242,248,0.3)" strokeWidth="0.15" />
      <text
        x="81"
        y="27"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#9D174D"
      >
        {data.tel}
      </text>
      <text
        x="81"
        y="31"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#9D174D"
      >
        {data.email}
      </text>
      <text
        x="81"
        y="35"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#9D174D"
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
        fill="rgba(157,23,77,0.6)"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 8. FADE (溶) — Subtle fade gradient
// Near-white to soft grey, almost imperceptible transition
// ============================================================
const fadeTemplate: TemplateDefinition = {
  id: 'gradient-fade',
  name: 'FADE',
  nameJa: '溶',
  category: 'gradient',
  designer: 'Gradient Series',
  description: '溶け合う境界。白からグレーへ、ほとんど気づかない移ろい。',
  accentColor: '#94A3B8',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="gradient-fade-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#F8FAFC" />
          <stop offset="70%" stopColor="#F1F5F9" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>
        <linearGradient id="gradient-fade-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#94A3B8" stopOpacity="0" />
          <stop offset="50%" stopColor="#94A3B8" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#94A3B8" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#gradient-fade-bg)" />
      <text
        x="45.5"
        y="20"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="6"
        letterSpacing="1"
        fill="#475569"
      >
        {data.nameJa}
      </text>
      <line x1="15" y1="25" x2="76" y2="25" stroke="url(#gradient-fade-line)" strokeWidth="0.15" />
      <text
        x="45.5"
        y="30.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.5"
        fill="#94A3B8"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="38"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#CBD5E1"
      >
        {data.titleJa}
      </text>
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#CBD5E1"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="gradient-fade-bg-back" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#F8FAFC" />
          <stop offset="70%" stopColor="#F1F5F9" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>
        <linearGradient id="gradient-fade-line-back" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#94A3B8" stopOpacity="0" />
          <stop offset="50%" stopColor="#94A3B8" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#94A3B8" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#gradient-fade-bg-back)" />
      <text
        x="45.5"
        y="13"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#475569"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="17.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        letterSpacing="0.3"
        fill="#94A3B8"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="21" x2="81" y2="21" stroke="url(#gradient-fade-line-back)" strokeWidth="0.12" />
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#64748B"
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
        fill="#64748B"
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
        fill="#64748B"
      >
        {data.website}
      </text>
      <line x1="10" y1="39" x2="81" y2="39" stroke="url(#gradient-fade-line-back)" strokeWidth="0.12" />
      <text
        x="45.5"
        y="45"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#CBD5E1"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 9. SPECTRUM (帯) — Full spectrum band
// Horizontal rainbow bar accent on clean white
// ============================================================
const spectrumTemplate: TemplateDefinition = {
  id: 'gradient-spectrum',
  name: 'SPECTRUM',
  nameJa: '帯',
  category: 'gradient',
  designer: 'Gradient Series',
  description: '光の帯。虹のスペクトルが一筋のラインに凝縮される。',
  accentColor: '#06B6D4',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="gradient-spectrum-bar" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#EF4444" />
          <stop offset="12%" stopColor="#F97316" />
          <stop offset="25%" stopColor="#EAB308" />
          <stop offset="37%" stopColor="#22C55E" />
          <stop offset="50%" stopColor="#06B6D4" />
          <stop offset="62%" stopColor="#3B82F6" />
          <stop offset="75%" stopColor="#8B5CF6" />
          <stop offset="87%" stopColor="#D946EF" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#ffffff" />
      <rect x="0" y="0" width="91" height="2" fill="url(#gradient-spectrum-bar)" />
      <text
        x="8"
        y="18"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6.5"
        letterSpacing="0.5"
        fill="#1e1e1e"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="24"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.3"
        fill="#666666"
      >
        {data.nameEn}
      </text>
      <text
        x="8"
        y="32"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.7"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      <text
        x="8"
        y="40"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.7"
        fill="#aaaaaa"
      >
        {data.companyJa}
      </text>
      <rect x="0" y="53" width="91" height="2" fill="url(#gradient-spectrum-bar)" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="gradient-spectrum-bar-back" x1="1" y1="0" x2="0" y2="0">
          <stop offset="0%" stopColor="#EF4444" />
          <stop offset="12%" stopColor="#F97316" />
          <stop offset="25%" stopColor="#EAB308" />
          <stop offset="37%" stopColor="#22C55E" />
          <stop offset="50%" stopColor="#06B6D4" />
          <stop offset="62%" stopColor="#3B82F6" />
          <stop offset="75%" stopColor="#8B5CF6" />
          <stop offset="87%" stopColor="#D946EF" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#ffffff" />
      <rect x="0" y="0" width="91" height="2" fill="url(#gradient-spectrum-bar-back)" />
      <text
        x="83"
        y="14"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#1e1e1e"
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
        fill="#888888"
      >
        {data.companyEn}
      </text>
      <text
        x="83"
        y="26"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#555555"
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
        fill="#555555"
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
        fill="#555555"
      >
        {data.website}
      </text>
      <text
        x="83"
        y="43"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#aaaaaa"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
      <rect x="0" y="53" width="91" height="2" fill="url(#gradient-spectrum-bar-back)" />
    </g>
  ),
};

// ============================================================
// 10. GLOW (灯) — Warm glow gradient
// Golden amber center radiating outward, lantern warmth
// ============================================================
const glowTemplate: TemplateDefinition = {
  id: 'gradient-glow',
  name: 'GLOW',
  nameJa: '灯',
  category: 'gradient',
  designer: 'Gradient Series',
  description: '灯火の温もり。琥珀色の光が中心から優しく広がる。',
  accentColor: '#D97706',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="gradient-glow-bg" cx="0.5" cy="0.4" r="0.65">
          <stop offset="0%" stopColor="#FFFBEB" />
          <stop offset="25%" stopColor="#FEF3C7" />
          <stop offset="50%" stopColor="#FCD34D" />
          <stop offset="75%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#78350F" />
        </radialGradient>
        <radialGradient id="gradient-glow-highlight" cx="0.45" cy="0.35" r="0.2">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#gradient-glow-bg)" />
      <rect width="91" height="55" fill="url(#gradient-glow-highlight)" />
      <text
        x="45.5"
        y="20"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="7"
        letterSpacing="1.5"
        fill="#78350F"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2.2"
        letterSpacing="0.5"
        fill="rgba(120,53,15,0.6)"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="rgba(120,53,15,0.4)"
      >
        {data.titleJa}
      </text>
      <text
        x="45.5"
        y="45"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="rgba(120,53,15,0.35)"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="gradient-glow-bg-back" cx="0.5" cy="0.6" r="0.65">
          <stop offset="0%" stopColor="#FFFBEB" />
          <stop offset="30%" stopColor="#FEF3C7" />
          <stop offset="60%" stopColor="#FCD34D" />
          <stop offset="85%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#78350F" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#gradient-glow-bg-back)" />
      <text
        x="45.5"
        y="12"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#FFFBEB"
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
        fill="rgba(255,251,235,0.65)"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="20" x2="71" y2="20" stroke="rgba(255,251,235,0.25)" strokeWidth="0.15" />
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#78350F"
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
        fill="#78350F"
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
        fill="#78350F"
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
        fill="rgba(255,251,235,0.5)"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

export const gradientTemplates: TemplateDefinition[] = [
  dawnTemplate,
  duskTemplate,
  prismTemplate,
  auroraGTemplate,
  flameTemplate,
  iceTemplate,
  bloomTemplate,
  fadeTemplate,
  spectrumTemplate,
  glowTemplate,
];
