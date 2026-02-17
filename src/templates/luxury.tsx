import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. GOLD (金) — Pure gold foil on deep black
// ============================================================
const goldTemplate: TemplateDefinition = {
  id: 'luxury-gold',
  name: 'GOLD',
  nameJa: '金',
  category: 'luxury',
  designer: 'Gold Atelier',
  description: '漆黒に浮かぶ金箔の輝き。最上の格式。',
  accentColor: '#D4AF37',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="luxury-gold-foil" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="30%" stopColor="#F5D060" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="70%" stopColor="#C5A572" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
        <linearGradient id="luxury-gold-border" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#C5A572" />
          <stop offset="50%" stopColor="#F5D060" />
          <stop offset="100%" stopColor="#C5A572" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#0a0a0a" />
      {/* Gold border lines */}
      <rect x="5" y="4" width="81" height="47" fill="none" stroke="url(#luxury-gold-border)" strokeWidth="0.2" />
      <rect x="7" y="6" width="77" height="43" fill="none" stroke="url(#luxury-gold-border)" strokeWidth="0.1" />
      {/* Corner ornaments */}
      <path d="M5,8 L5,4 L9,4" fill="none" stroke="url(#luxury-gold-foil)" strokeWidth="0.4" />
      <path d="M82,4 L86,4 L86,8" fill="none" stroke="url(#luxury-gold-foil)" strokeWidth="0.4" />
      <path d="M5,47 L5,51 L9,51" fill="none" stroke="url(#luxury-gold-foil)" strokeWidth="0.4" />
      <path d="M82,51 L86,51 L86,47" fill="none" stroke="url(#luxury-gold-foil)" strokeWidth="0.4" />
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="1.5"
        fill="url(#luxury-gold-foil)"
      >
        {data.nameJa}
      </text>
      <line x1="30" y1="28" x2="61" y2="28" stroke="url(#luxury-gold-foil)" strokeWidth="0.15" />
      <text
        x="45.5"
        y="33"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.6"
        fill="#C5A572"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="39"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#8a7a5a"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="luxury-gold-foil-back" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#F5D060" />
          <stop offset="100%" stopColor="#C5A572" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#0a0a0a" />
      <rect x="5" y="4" width="81" height="47" fill="none" stroke="#C5A572" strokeWidth="0.15" />
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        letterSpacing="0.5"
        fill="url(#luxury-gold-foil-back)"
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
        fill="#8a7a5a"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <line x1="25" y1="22" x2="66" y2="22" stroke="#C5A572" strokeWidth="0.1" />
      <text
        x="45.5"
        y="27.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#C5A572"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="31.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#C5A572"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="35.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#C5A572"
      >
        {data.website}
      </text>
      <line x1="25" y1="39" x2="66" y2="39" stroke="#C5A572" strokeWidth="0.1" />
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#8a7a5a"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="48"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#8a7a5a"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 2. MARBLE (大理石) — Marble veining texture
// ============================================================
const marbleTemplate: TemplateDefinition = {
  id: 'luxury-marble',
  name: 'MARBLE',
  nameJa: '大理石',
  category: 'luxury',
  designer: 'Marble Atelier',
  description: '大理石の静脈が刻む永遠の美。',
  accentColor: '#4a4a5a',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f0ede8" />
      <defs>
        <linearGradient id="luxury-marble-vein1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d0ccc5" stopOpacity="0" />
          <stop offset="40%" stopColor="#c0b8b0" stopOpacity="0.5" />
          <stop offset="60%" stopColor="#d0ccc5" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Marble veining */}
      <path d="M0,15 Q20,10 35,18 Q50,25 65,15 Q80,5 91,12" fill="none" stroke="#c8c0b8" strokeWidth="0.4" opacity="0.3" />
      <path d="M0,35 Q15,28 30,33 Q55,40 75,30 Q85,25 91,28" fill="none" stroke="#c8c0b8" strokeWidth="0.3" opacity="0.25" />
      <path d="M10,0 Q20,15 25,30 Q30,45 35,55" fill="none" stroke="#d0c8c0" strokeWidth="0.5" opacity="0.15" />
      <path d="M60,0 Q65,20 70,35 Q72,45 75,55" fill="none" stroke="#d0c8c0" strokeWidth="0.4" opacity="0.12" />
      {/* Gold accent line */}
      <line x1="30" y1="30" x2="61" y2="30" stroke="#C5A572" strokeWidth="0.15" />
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="1"
        fill="#3a3a4a"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.5"
        fill="#6a6a7a"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="37"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#8a8a9a"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f0ede8" />
      {/* Marble veins */}
      <path d="M0,20 Q30,15 50,22 Q70,28 91,18" fill="none" stroke="#c8c0b8" strokeWidth="0.3" opacity="0.25" />
      <path d="M0,42 Q25,36 45,40 Q70,45 91,38" fill="none" stroke="#c8c0b8" strokeWidth="0.25" opacity="0.2" />
      <path d="M40,0 Q45,25 50,55" fill="none" stroke="#d0c8c0" strokeWidth="0.35" opacity="0.12" />
      <text
        x="45.5"
        y="13"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#3a3a4a"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="17.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#6a6a7a"
      >
        {data.companyEn}
      </text>
      <line x1="25" y1="21" x2="66" y2="21" stroke="#C5A572" strokeWidth="0.12" />
      <text
        x="45.5"
        y="26.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5a5a6a"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="30.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5a5a6a"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="34.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5a5a6a"
      >
        {data.website}
      </text>
      <line x1="25" y1="38" x2="66" y2="38" stroke="#C5A572" strokeWidth="0.12" />
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#8a8a9a"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="47"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#8a8a9a"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 3. SILK (絹) — Flowing silk fabric waves
// ============================================================
const silkTemplate: TemplateDefinition = {
  id: 'luxury-silk',
  name: 'SILK',
  nameJa: '絹',
  category: 'luxury',
  designer: 'Silk Atelier',
  description: '絹の波紋が映し出す上質な手触り。',
  accentColor: '#8B4557',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="luxury-silk-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f8f0f0" />
          <stop offset="50%" stopColor="#f0e8e8" />
          <stop offset="100%" stopColor="#e8e0e0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#luxury-silk-bg)" />
      {/* Silk wave folds */}
      <path d="M0,10 C20,5 30,15 50,10 C70,5 80,15 91,10" fill="none" stroke="#d0b0b8" strokeWidth="0.4" opacity="0.3" />
      <path d="M0,15 C20,10 30,20 50,15 C70,10 80,20 91,15" fill="none" stroke="#d0b0b8" strokeWidth="0.3" opacity="0.2" />
      <path d="M0,42 C20,37 30,47 50,42 C70,37 80,47 91,42" fill="none" stroke="#d0b0b8" strokeWidth="0.4" opacity="0.3" />
      <path d="M0,47 C20,42 30,52 50,47 C70,42 80,52 91,47" fill="none" stroke="#d0b0b8" strokeWidth="0.3" opacity="0.2" />
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.8"
        fill="#8B4557"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.4"
        fill="#a06878"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="37"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#b88898"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f8f0f0" />
      {/* Silk wave */}
      <path d="M0,8 C30,3 60,13 91,8" fill="none" stroke="#d0b0b8" strokeWidth="0.3" opacity="0.25" />
      <path d="M0,48 C30,43 60,53 91,48" fill="none" stroke="#d0b0b8" strokeWidth="0.3" opacity="0.25" />
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#8B4557"
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
        fill="#a06878"
      >
        {data.companyEn}
      </text>
      <line x1="30" y1="22" x2="61" y2="22" stroke="#c8a0a8" strokeWidth="0.12" />
      <text
        x="45.5"
        y="27.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8B4557"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="31.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8B4557"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="35.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8B4557"
      >
        {data.website}
      </text>
      <line x1="30" y1="39" x2="61" y2="39" stroke="#c8a0a8" strokeWidth="0.12" />
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#b88898"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="48"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#b88898"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 4. VELVET (天鵞絨) — Deep rich velvet texture
// ============================================================
const velvetTemplate: TemplateDefinition = {
  id: 'luxury-velvet',
  name: 'VELVET',
  nameJa: '天鵞絨',
  category: 'luxury',
  designer: 'Velvet Atelier',
  description: '天鵞絨の深い色合いに沈む贅沢な質感。',
  accentColor: '#4A0E2E',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="luxury-velvet-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4A0E2E" />
          <stop offset="50%" stopColor="#5a1838" />
          <stop offset="100%" stopColor="#3a0820" />
        </linearGradient>
        <radialGradient id="luxury-velvet-sheen" cx="0.4" cy="0.3" r="0.5">
          <stop offset="0%" stopColor="#7a2848" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#4A0E2E" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#luxury-velvet-bg)" />
      <rect width="91" height="55" fill="url(#luxury-velvet-sheen)" />
      {/* Gold corner flourishes */}
      <path d="M6,6 Q6,12 12,12" fill="none" stroke="#C5A572" strokeWidth="0.2" />
      <path d="M6,6 L8,6 M6,6 L6,8" stroke="#C5A572" strokeWidth="0.15" />
      <path d="M85,6 Q85,12 79,12" fill="none" stroke="#C5A572" strokeWidth="0.2" />
      <path d="M85,6 L83,6 M85,6 L85,8" stroke="#C5A572" strokeWidth="0.15" />
      <path d="M6,49 Q6,43 12,43" fill="none" stroke="#C5A572" strokeWidth="0.2" />
      <path d="M6,49 L8,49 M6,49 L6,47" stroke="#C5A572" strokeWidth="0.15" />
      <path d="M85,49 Q85,43 79,43" fill="none" stroke="#C5A572" strokeWidth="0.2" />
      <path d="M85,49 L83,49 M85,49 L85,47" stroke="#C5A572" strokeWidth="0.15" />
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="1"
        fill="#f0d8e0"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.5"
        fill="#C5A572"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="38"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#c090a0"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="luxury-velvet-bg-back" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#4A0E2E" />
          <stop offset="100%" stopColor="#3a0820" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#luxury-velvet-bg-back)" />
      <text
        x="45.5"
        y="13"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#f0d8e0"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="17.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#C5A572"
      >
        {data.companyEn}
      </text>
      <line x1="25" y1="21" x2="66" y2="21" stroke="#C5A572" strokeWidth="0.1" />
      <text
        x="45.5"
        y="26.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#d0b0c0"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="30.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#d0b0c0"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="34.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#d0b0c0"
      >
        {data.website}
      </text>
      <line x1="25" y1="38" x2="66" y2="38" stroke="#C5A572" strokeWidth="0.1" />
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#c090a0"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="47"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#c090a0"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 5. PEARL (珠) — Iridescent pearl shimmer
// ============================================================
const pearlTemplate: TemplateDefinition = {
  id: 'luxury-pearl',
  name: 'PEARL',
  nameJa: '珠',
  category: 'luxury',
  designer: 'Pearl Atelier',
  description: '真珠の虹色の輝きが品格を語る。',
  accentColor: '#8898A8',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="luxury-pearl-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f0f0f5" />
          <stop offset="30%" stopColor="#e8eaf0" />
          <stop offset="60%" stopColor="#f0ece8" />
          <stop offset="100%" stopColor="#eae8f0" />
        </linearGradient>
        <radialGradient id="luxury-pearl-orb" cx="0.4" cy="0.35" r="0.4">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#luxury-pearl-bg)" />
      <rect width="91" height="55" fill="url(#luxury-pearl-orb)" />
      {/* Iridescent sheen lines */}
      <path d="M0,20 Q45,15 91,20" fill="none" stroke="#c8d0e0" strokeWidth="0.2" opacity="0.3" />
      <path d="M0,25 Q45,20 91,25" fill="none" stroke="#d0c8d8" strokeWidth="0.15" opacity="0.25" />
      <path d="M0,35 Q45,30 91,35" fill="none" stroke="#c8d8d0" strokeWidth="0.2" opacity="0.3" />
      {/* Thin elegant border */}
      <rect x="6" y="5" width="79" height="45" fill="none" stroke="#b0b8c8" strokeWidth="0.12" />
      <text
        x="45.5"
        y="23"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.8"
        fill="#4a5565"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.4"
        fill="#7a8898"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="37"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#8898A8"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="luxury-pearl-bg-back" x1="1" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#f0f0f5" />
          <stop offset="50%" stopColor="#eae8f0" />
          <stop offset="100%" stopColor="#f0ece8" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#luxury-pearl-bg-back)" />
      <rect x="6" y="5" width="79" height="45" fill="none" stroke="#b0b8c8" strokeWidth="0.1" />
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#4a5565"
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
        fill="#7a8898"
      >
        {data.companyEn}
      </text>
      <line x1="28" y1="22" x2="63" y2="22" stroke="#b0b8c8" strokeWidth="0.1" />
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5a6a7a"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5a6a7a"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5a6a7a"
      >
        {data.website}
      </text>
      <line x1="28" y1="38.5" x2="63" y2="38.5" stroke="#b0b8c8" strokeWidth="0.1" />
      <text
        x="45.5"
        y="43.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#8898A8"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="47.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#8898A8"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 6. DIAMOND (煌) — Faceted diamond light refractions
// ============================================================
const diamondTemplate: TemplateDefinition = {
  id: 'luxury-diamond',
  name: 'DIAMOND',
  nameJa: '煌',
  category: 'luxury',
  designer: 'Diamond Atelier',
  description: 'ダイヤモンドの光が無限に屈折する。',
  accentColor: '#2C3E50',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0d1520" />
      <defs>
        <linearGradient id="luxury-diamond-facet" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#88c8f8" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#c8e0f8" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      {/* Diamond facet lines */}
      <polygon points="45.5,5 55,15 50,20 41,20 36,15" fill="url(#luxury-diamond-facet)" stroke="#4488cc" strokeWidth="0.1" opacity="0.4" />
      <line x1="45.5" y1="5" x2="45.5" y2="20" stroke="#4488cc" strokeWidth="0.08" opacity="0.3" />
      <line x1="36" y1="15" x2="55" y2="15" stroke="#4488cc" strokeWidth="0.08" opacity="0.3" />
      <line x1="41" y1="20" x2="45.5" y2="5" stroke="#4488cc" strokeWidth="0.06" opacity="0.2" />
      <line x1="50" y1="20" x2="45.5" y2="5" stroke="#4488cc" strokeWidth="0.06" opacity="0.2" />
      {/* Light sparkles */}
      <circle cx="20" cy="12" r="0.3" fill="#ffffff" opacity="0.5" />
      <circle cx="72" cy="8" r="0.2" fill="#ffffff" opacity="0.4" />
      <circle cx="80" cy="42" r="0.25" fill="#ffffff" opacity="0.3" />
      <circle cx="12" cy="38" r="0.2" fill="#ffffff" opacity="0.35" />
      {/* Cross sparkle */}
      <line x1="19" y1="12" x2="21" y2="12" stroke="#ffffff" strokeWidth="0.08" opacity="0.5" />
      <line x1="20" y1="11" x2="20" y2="13" stroke="#ffffff" strokeWidth="0.08" opacity="0.5" />
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="1"
        fill="#c8ddf0"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="38.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.5"
        fill="#6a88a8"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="45"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#4a6880"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0d1520" />
      {/* Subtle facet lines */}
      <line x1="0" y1="0" x2="30" y2="20" stroke="#4488cc" strokeWidth="0.06" opacity="0.15" />
      <line x1="91" y1="0" x2="60" y2="20" stroke="#4488cc" strokeWidth="0.06" opacity="0.15" />
      <line x1="0" y1="55" x2="30" y2="35" stroke="#4488cc" strokeWidth="0.06" opacity="0.1" />
      <line x1="91" y1="55" x2="60" y2="35" stroke="#4488cc" strokeWidth="0.06" opacity="0.1" />
      <text
        x="45.5"
        y="13"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#c8ddf0"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="17.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#6a88a8"
      >
        {data.companyEn}
      </text>
      <line x1="25" y1="21" x2="66" y2="21" stroke="#4488cc" strokeWidth="0.08" opacity="0.3" />
      <text
        x="45.5"
        y="26.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8aa8c0"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="30.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8aa8c0"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="34.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8aa8c0"
      >
        {data.website}
      </text>
      <line x1="25" y1="38" x2="66" y2="38" stroke="#4488cc" strokeWidth="0.08" opacity="0.3" />
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#4a6880"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="47"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#4a6880"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 7. ONYX (漆黒) — Pure black with subtle dark textures
// ============================================================
const onyxTemplate: TemplateDefinition = {
  id: 'luxury-onyx',
  name: 'ONYX',
  nameJa: '漆黒',
  category: 'luxury',
  designer: 'Onyx Atelier',
  description: '漆黒の深淵に銀の文字が浮かぶ。',
  accentColor: '#1a1a1a',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="luxury-onyx-sheen" cx="0.5" cy="0.4" r="0.6">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#luxury-onyx-sheen)" />
      {/* Surface polish reflection */}
      <ellipse cx="45" cy="20" rx="35" ry="15" fill="#1a1a1a" opacity="0.5" />
      {/* Thin silver border */}
      <rect x="5" y="4" width="81" height="47" fill="none" stroke="#666666" strokeWidth="0.1" />
      <text
        x="45.5"
        y="23"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="5.5"
        letterSpacing="1.2"
        fill="#c0c0c0"
      >
        {data.nameJa}
      </text>
      <line x1="30" y1="27" x2="61" y2="27" stroke="#555555" strokeWidth="0.12" />
      <text
        x="45.5"
        y="33"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.5"
        fill="#888888"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="40"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#666666"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0a0a0a" />
      <rect x="5" y="4" width="81" height="47" fill="none" stroke="#444444" strokeWidth="0.08" />
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2.2"
        fill="#c0c0c0"
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
        fill="#777777"
      >
        {data.companyEn}
      </text>
      <line x1="25" y1="22" x2="66" y2="22" stroke="#444444" strokeWidth="0.08" />
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#999999"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#999999"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#999999"
      >
        {data.website}
      </text>
      <line x1="25" y1="38.5" x2="66" y2="38.5" stroke="#444444" strokeWidth="0.08" />
      <text
        x="45.5"
        y="43.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#666666"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="47.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#666666"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 8. CHAMPAGNE (泡) — Golden champagne bubbles rising
// ============================================================
const champagneTemplate: TemplateDefinition = {
  id: 'luxury-champagne',
  name: 'CHAMPAGNE',
  nameJa: '泡',
  category: 'luxury',
  designer: 'Champagne Atelier',
  description: 'シャンパンの泡が立ち昇る祝福の瞬間。',
  accentColor: '#C5A572',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="luxury-champagne-bg" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#d4b87a" />
          <stop offset="40%" stopColor="#e8d4a0" />
          <stop offset="100%" stopColor="#f5ecd0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#luxury-champagne-bg)" />
      {/* Champagne bubbles rising */}
      <circle cx="15" cy="42" r="1" fill="none" stroke="#C5A572" strokeWidth="0.15" opacity="0.4" />
      <circle cx="18" cy="35" r="0.7" fill="none" stroke="#C5A572" strokeWidth="0.12" opacity="0.35" />
      <circle cx="13" cy="28" r="0.5" fill="none" stroke="#C5A572" strokeWidth="0.1" opacity="0.3" />
      <circle cx="16" cy="20" r="0.4" fill="none" stroke="#C5A572" strokeWidth="0.08" opacity="0.25" />
      <circle cx="75" cy="45" r="0.8" fill="none" stroke="#C5A572" strokeWidth="0.15" opacity="0.4" />
      <circle cx="78" cy="38" r="0.6" fill="none" stroke="#C5A572" strokeWidth="0.12" opacity="0.35" />
      <circle cx="73" cy="30" r="0.5" fill="none" stroke="#C5A572" strokeWidth="0.1" opacity="0.3" />
      <circle cx="76" cy="22" r="0.35" fill="none" stroke="#C5A572" strokeWidth="0.08" opacity="0.25" />
      <circle cx="80" cy="15" r="0.3" fill="none" stroke="#C5A572" strokeWidth="0.06" opacity="0.2" />
      {/* Center cluster */}
      <circle cx="50" cy="48" r="0.9" fill="none" stroke="#C5A572" strokeWidth="0.12" opacity="0.3" />
      <circle cx="45" cy="50" r="0.6" fill="none" stroke="#C5A572" strokeWidth="0.1" opacity="0.25" />
      <text
        x="45.5"
        y="20"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.8"
        fill="#6a5530"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.4"
        fill="#8a7548"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="34"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#a08858"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f5ecd0" />
      {/* Subtle bubbles */}
      <circle cx="80" cy="40" r="0.6" fill="none" stroke="#C5A572" strokeWidth="0.1" opacity="0.25" />
      <circle cx="78" cy="32" r="0.4" fill="none" stroke="#C5A572" strokeWidth="0.08" opacity="0.2" />
      <circle cx="82" cy="25" r="0.3" fill="none" stroke="#C5A572" strokeWidth="0.06" opacity="0.15" />
      <text
        x="45.5"
        y="13"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#6a5530"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="17.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#8a7548"
      >
        {data.companyEn}
      </text>
      <line x1="25" y1="21" x2="66" y2="21" stroke="#C5A572" strokeWidth="0.12" />
      <text
        x="45.5"
        y="26.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#7a6540"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="30.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#7a6540"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="34.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#7a6540"
      >
        {data.website}
      </text>
      <line x1="25" y1="38" x2="66" y2="38" stroke="#C5A572" strokeWidth="0.12" />
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#a08858"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="47"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#a08858"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 9. PLATINUM (白金) — Cool silvery tones with white gold
// ============================================================
const platinumTemplate: TemplateDefinition = {
  id: 'luxury-platinum',
  name: 'PLATINUM',
  nameJa: '白金',
  category: 'luxury',
  designer: 'Platinum Atelier',
  description: '白金の冷たい輝きが気品を刻む。',
  accentColor: '#7a8a9a',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="luxury-platinum-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e8ecf0" />
          <stop offset="50%" stopColor="#d8dce0" />
          <stop offset="100%" stopColor="#e0e4e8" />
        </linearGradient>
        <linearGradient id="luxury-platinum-accent" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#a0aab8" />
          <stop offset="50%" stopColor="#c8d0d8" />
          <stop offset="100%" stopColor="#a0aab8" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#luxury-platinum-bg)" />
      {/* Platinum stripe accents */}
      <rect x="0" y="0" width="91" height="0.5" fill="url(#luxury-platinum-accent)" />
      <rect x="0" y="54.5" width="91" height="0.5" fill="url(#luxury-platinum-accent)" />
      <line x1="0" y1="2" x2="91" y2="2" stroke="#b0b8c0" strokeWidth="0.08" />
      <line x1="0" y1="53" x2="91" y2="53" stroke="#b0b8c0" strokeWidth="0.08" />
      {/* Embossed diamond shape */}
      <polygon points="45.5,6 49,9.5 45.5,13 42,9.5" fill="none" stroke="#a0aab8" strokeWidth="0.15" />
      <text
        x="45.5"
        y="25"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="1"
        fill="#3a4555"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.5"
        fill="#6a7a8a"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="39"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#8a9aaa"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="luxury-platinum-bg-back" x1="1" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#e8ecf0" />
          <stop offset="100%" stopColor="#d8dce0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#luxury-platinum-bg-back)" />
      <rect x="0" y="0" width="91" height="0.5" fill="#b0b8c8" />
      <rect x="0" y="54.5" width="91" height="0.5" fill="#b0b8c8" />
      <text
        x="45.5"
        y="13"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#3a4555"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="17.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#6a7a8a"
      >
        {data.companyEn}
      </text>
      <line x1="25" y1="21" x2="66" y2="21" stroke="#a0aab8" strokeWidth="0.1" />
      <text
        x="45.5"
        y="26.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5a6a7a"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="30.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5a6a7a"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="34.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5a6a7a"
      >
        {data.website}
      </text>
      <line x1="25" y1="38" x2="66" y2="38" stroke="#a0aab8" strokeWidth="0.1" />
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#8a9aaa"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="47"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#8a9aaa"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 10. CREST (紋章) — Heraldic crest with ornamental frame
// ============================================================
const crestTemplate: TemplateDefinition = {
  id: 'luxury-crest',
  name: 'CREST',
  nameJa: '紋章',
  category: 'luxury',
  designer: 'Crest Atelier',
  description: '紋章が語る格式と伝統の重み。',
  accentColor: '#1B2838',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1B2838" />
      <defs>
        <linearGradient id="luxury-crest-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C5A572" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#C5A572" />
        </linearGradient>
      </defs>
      {/* Shield crest shape */}
      <path d="M45.5,6 L52,8 L52,14 Q52,20 45.5,22 Q39,20 39,14 L39,8 Z" fill="none" stroke="url(#luxury-crest-gold)" strokeWidth="0.25" />
      {/* Cross inside shield */}
      <line x1="45.5" y1="9" x2="45.5" y2="19" stroke="#D4AF37" strokeWidth="0.12" opacity="0.5" />
      <line x1="41" y1="13" x2="50" y2="13" stroke="#D4AF37" strokeWidth="0.12" opacity="0.5" />
      {/* Ornamental flourishes */}
      <path d="M35,14 Q32,14 32,11" fill="none" stroke="#C5A572" strokeWidth="0.12" opacity="0.4" />
      <path d="M56,14 Q59,14 59,11" fill="none" stroke="#C5A572" strokeWidth="0.12" opacity="0.4" />
      {/* Double border frame */}
      <rect x="4" y="3" width="83" height="49" fill="none" stroke="#C5A572" strokeWidth="0.2" />
      <rect x="6" y="5" width="79" height="45" fill="none" stroke="#C5A572" strokeWidth="0.1" opacity="0.5" />
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5"
        letterSpacing="1.2"
        fill="#e8dcc0"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="38"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="500"
        fontSize="2"
        letterSpacing="0.5"
        fill="#C5A572"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8a9aaa"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1B2838" />
      <rect x="4" y="3" width="83" height="49" fill="none" stroke="#C5A572" strokeWidth="0.15" />
      {/* Small crest at top */}
      <path d="M45.5,5 L48,6 L48,9 Q48,11 45.5,12 Q43,11 43,9 L43,6 Z" fill="none" stroke="#C5A572" strokeWidth="0.15" opacity="0.5" />
      <text
        x="45.5"
        y="18"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#e8dcc0"
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
        fill="#C5A572"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="26" x2="71" y2="26" stroke="#C5A572" strokeWidth="0.1" opacity="0.4" />
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#a8b8c8"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#a8b8c8"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="39"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#a8b8c8"
      >
        {data.website}
      </text>
      <line x1="20" y1="42" x2="71" y2="42" stroke="#C5A572" strokeWidth="0.1" opacity="0.4" />
      <text
        x="45.5"
        y="47"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#8a9aaa"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

export const luxuryTemplates: TemplateDefinition[] = [
  goldTemplate,
  marbleTemplate,
  silkTemplate,
  velvetTemplate,
  pearlTemplate,
  diamondTemplate,
  onyxTemplate,
  champagneTemplate,
  platinumTemplate,
  crestTemplate,
];
