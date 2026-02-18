import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. GOLD (金) — Pure gold foil on deep black with emboss texture
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
          <stop offset="0%" stopColor="#B8860B" />
          <stop offset="20%" stopColor="#D4AF37" />
          <stop offset="40%" stopColor="#F5D060" />
          <stop offset="55%" stopColor="#D4AF37" />
          <stop offset="75%" stopColor="#C5A572" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
        <linearGradient id="luxury-gold-border" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8B6914" />
          <stop offset="25%" stopColor="#C5A572" />
          <stop offset="50%" stopColor="#F5D060" />
          <stop offset="75%" stopColor="#C5A572" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>
        <radialGradient id="luxury-gold-spotlight" cx="0.45" cy="0.4" r="0.55">
          <stop offset="0%" stopColor="#1a1510" />
          <stop offset="100%" stopColor="#050403" />
        </radialGradient>
        <filter id="luxury-gold-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" seed="2" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="overlay" />
        </filter>
        <filter id="luxury-gold-emboss">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" seed="5" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="bnoise" />
          <feBlend in="SourceGraphic" in2="bnoise" mode="soft-light" />
        </filter>
        <filter id="luxury-gold-glow">
          <feGaussianBlur stdDeviation="0.4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#luxury-gold-spotlight)" />
      <rect width="91" height="55" fill="#0a0a08" opacity="0.3" filter="url(#luxury-gold-texture)" />
      {/* Outer ornamental border */}
      <rect x="4" y="3" width="83" height="49" fill="none" stroke="url(#luxury-gold-border)" strokeWidth="0.25" />
      <rect x="6" y="5" width="79" height="45" fill="none" stroke="url(#luxury-gold-border)" strokeWidth="0.1" opacity="0.6" />
      {/* Corner ornaments - top left */}
      <path d="M4,8 L4,3 L9,3" fill="none" stroke="url(#luxury-gold-foil)" strokeWidth="0.5" />
      <path d="M6,10 C6,7 7,5 10,5" fill="none" stroke="#C5A572" strokeWidth="0.15" opacity="0.7" />
      <circle cx="4" cy="3" r="0.4" fill="#F5D060" opacity="0.8" />
      {/* Corner ornaments - top right */}
      <path d="M82,3 L87,3 L87,8" fill="none" stroke="url(#luxury-gold-foil)" strokeWidth="0.5" />
      <path d="M81,5 C84,5 85,7 85,10" fill="none" stroke="#C5A572" strokeWidth="0.15" opacity="0.7" />
      <circle cx="87" cy="3" r="0.4" fill="#F5D060" opacity="0.8" />
      {/* Corner ornaments - bottom left */}
      <path d="M4,47 L4,52 L9,52" fill="none" stroke="url(#luxury-gold-foil)" strokeWidth="0.5" />
      <path d="M6,45 C6,48 7,50 10,50" fill="none" stroke="#C5A572" strokeWidth="0.15" opacity="0.7" />
      <circle cx="4" cy="52" r="0.4" fill="#F5D060" opacity="0.8" />
      {/* Corner ornaments - bottom right */}
      <path d="M82,52 L87,52 L87,47" fill="none" stroke="url(#luxury-gold-foil)" strokeWidth="0.5" />
      <path d="M81,50 C84,50 85,48 85,45" fill="none" stroke="#C5A572" strokeWidth="0.15" opacity="0.7" />
      <circle cx="87" cy="52" r="0.4" fill="#F5D060" opacity="0.8" />
      {/* Central decorative filigree */}
      <path d="M30,16 Q35,14 40,16 Q43,17 45.5,15 Q48,17 51,16 Q56,14 61,16" fill="none" stroke="url(#luxury-gold-foil)" strokeWidth="0.12" opacity="0.5" />
      {data.logo && <image href={data.logo} x="41.75" y="7" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6.5"
        letterSpacing="1.5"
        fill="url(#luxury-gold-foil)"
        filter="url(#luxury-gold-glow)"
      >
        {data.nameJa}
      </text>
      <line x1="25" y1="30" x2="66" y2="30" stroke="url(#luxury-gold-foil)" strokeWidth="0.15" />
      <circle cx="25" cy="30" r="0.3" fill="#D4AF37" opacity="0.6" />
      <circle cx="66" cy="30" r="0.3" fill="#D4AF37" opacity="0.6" />
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2.2"
        letterSpacing="0.8"
        fill="#C5A572"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="41"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="#8a7a5a"
      >
        {data.titleJa}
      </text>
      <text
        x="45.5"
        y="47"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        letterSpacing="0.3"
        fill="#6a5a3a"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="luxury-gold-foil-back" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#B8860B" />
          <stop offset="30%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#F5D060" />
          <stop offset="70%" stopColor="#C5A572" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
        <filter id="luxury-gold-texture-back">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" seed="8" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="overlay" />
        </filter>
        <filter id="luxury-gold-shadow-back">
          <feGaussianBlur stdDeviation="0.3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="#080706" />
      <rect width="91" height="55" fill="#0a0a08" opacity="0.3" filter="url(#luxury-gold-texture-back)" />
      {/* Ornamental border */}
      <rect x="4" y="3" width="83" height="49" fill="none" stroke="url(#luxury-gold-foil-back)" strokeWidth="0.2" />
      <rect x="6" y="5" width="79" height="45" fill="none" stroke="#C5A572" strokeWidth="0.08" opacity="0.4" />
      {/* Corner flourishes */}
      <path d="M4,8 L4,3 L9,3" fill="none" stroke="url(#luxury-gold-foil-back)" strokeWidth="0.4" />
      <path d="M82,3 L87,3 L87,8" fill="none" stroke="url(#luxury-gold-foil-back)" strokeWidth="0.4" />
      <path d="M4,47 L4,52 L9,52" fill="none" stroke="url(#luxury-gold-foil-back)" strokeWidth="0.4" />
      <path d="M82,52 L87,52 L87,47" fill="none" stroke="url(#luxury-gold-foil-back)" strokeWidth="0.4" />
      {/* Top decorative divider */}
      <path d="M25,8 Q35,6 45.5,8 Q56,6 66,8" fill="none" stroke="#C5A572" strokeWidth="0.1" opacity="0.5" />
      {data.logo && <image href={data.logo} x="41.75" y="9" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        letterSpacing="0.5"
        fill="url(#luxury-gold-foil-back)"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        letterSpacing="0.4"
        fill="#8a7a5a"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="29.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#7a6a4a"
      >
        {data.titleJa}
      </text>
      <line x1="22" y1="32" x2="69" y2="32" stroke="url(#luxury-gold-foil-back)" strokeWidth="0.1" />
      <text
        x="45.5"
        y="35.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#C5A572"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="38.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#C5A572"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="41.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#C5A572"
      >
        {data.website}
      </text>
      <line x1="22" y1="44" x2="69" y2="44" stroke="url(#luxury-gold-foil-back)" strokeWidth="0.1" />
      <text
        x="45.5"
        y="47.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#6a5a3a"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="50.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#6a5a3a"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 2. MARBLE (大理石) — Marble veining texture with gold inlay
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
      <defs>
        <linearGradient id="luxury-marble-bg" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#f5f2ed" />
          <stop offset="30%" stopColor="#eae7e1" />
          <stop offset="60%" stopColor="#f0ede8" />
          <stop offset="100%" stopColor="#e8e5df" />
        </linearGradient>
        <linearGradient id="luxury-marble-gold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#B8860B" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <filter id="luxury-marble-texture">
          <feTurbulence type="turbulence" baseFrequency="0.03 0.06" numOctaves="5" seed="12" result="noise" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.78  0 0 0 0 0.75  0 0 0 0 0.72  0 0 0 0.12 0" in="noise" result="veins" />
          <feBlend in="SourceGraphic" in2="veins" mode="multiply" />
        </filter>
        <filter id="luxury-marble-emboss">
          <feTurbulence type="fractalNoise" baseFrequency="0.15" numOctaves="2" seed="3" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="bnoise" />
          <feBlend in="SourceGraphic" in2="bnoise" mode="soft-light" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#luxury-marble-bg)" />
      <rect width="91" height="55" fill="#f0ede8" opacity="0.5" filter="url(#luxury-marble-texture)" />
      {/* Marble vein lines */}
      <path d="M-5,12 Q10,8 25,15 Q40,22 55,14 Q70,6 91,10" fill="none" stroke="#c8c0b5" strokeWidth="0.5" opacity="0.25" />
      <path d="M-5,14 Q12,10 28,17 Q42,23 58,16 Q73,8 96,13" fill="none" stroke="#d5cdc2" strokeWidth="0.3" opacity="0.15" />
      <path d="M0,38 Q15,32 30,36 Q50,42 70,34 Q85,28 91,31" fill="none" stroke="#c8c0b5" strokeWidth="0.4" opacity="0.2" />
      <path d="M8,0 Q15,18 22,35 Q28,48 32,55" fill="none" stroke="#d0c8be" strokeWidth="0.6" opacity="0.1" />
      <path d="M65,0 Q68,15 72,30 Q75,42 78,55" fill="none" stroke="#d0c8be" strokeWidth="0.45" opacity="0.08" />
      {/* Gold inlay accent line */}
      <line x1="28" y1="30" x2="63" y2="30" stroke="url(#luxury-marble-gold)" strokeWidth="0.2" />
      <circle cx="28" cy="30" r="0.35" fill="#D4AF37" opacity="0.5" />
      <circle cx="63" cy="30" r="0.35" fill="#D4AF37" opacity="0.5" />
      {data.logo && <image href={data.logo} x="41.75" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="6"
        letterSpacing="1"
        fill="#2a2a3a"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2.2"
        letterSpacing="0.6"
        fill="#6a6a7a"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="#7a7a8a"
      >
        {data.titleJa}
      </text>
      <text
        x="45.5"
        y="42"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#9a9aaa"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="luxury-marble-bg-back" x1="1" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#f5f2ed" />
          <stop offset="50%" stopColor="#eae7e1" />
          <stop offset="100%" stopColor="#f0ede8" />
        </linearGradient>
        <linearGradient id="luxury-marble-gold-back" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#B8860B" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <filter id="luxury-marble-texture-back">
          <feTurbulence type="turbulence" baseFrequency="0.04 0.05" numOctaves="4" seed="20" result="noise" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.8  0 0 0 0 0.77  0 0 0 0 0.74  0 0 0 0.1 0" in="noise" result="veins" />
          <feBlend in="SourceGraphic" in2="veins" mode="multiply" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#luxury-marble-bg-back)" />
      <rect width="91" height="55" fill="#f0ede8" opacity="0.4" filter="url(#luxury-marble-texture-back)" />
      {/* Marble veins */}
      <path d="M0,18 Q25,12 50,20 Q75,28 91,16" fill="none" stroke="#c8c0b8" strokeWidth="0.35" opacity="0.2" />
      <path d="M0,40 Q20,35 40,38 Q65,43 91,36" fill="none" stroke="#c8c0b8" strokeWidth="0.3" opacity="0.15" />
      <path d="M45,0 Q48,20 52,40 Q54,50 55,55" fill="none" stroke="#d0c8c0" strokeWidth="0.4" opacity="0.1" />
      {data.logo && <image href={data.logo} x="41.75" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="45.5"
        y="17"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#2a2a3a"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="21"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        letterSpacing="0.3"
        fill="#6a6a7a"
      >
        {data.companyEn}
      </text>
      <text
        x="45.5"
        y="25"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8a8a9a"
      >
        {data.titleJa}
      </text>
      <line x1="22" y1="27.5" x2="69" y2="27.5" stroke="url(#luxury-marble-gold-back)" strokeWidth="0.12" />
      <text
        x="45.5"
        y="31.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#5a5a6a"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#5a5a6a"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="38.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#5a5a6a"
      >
        {data.website}
      </text>
      <line x1="22" y1="41" x2="69" y2="41" stroke="url(#luxury-marble-gold-back)" strokeWidth="0.12" />
      <text
        x="45.5"
        y="45"
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
        y="49"
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
// 3. SILK (絹) — Flowing silk fabric waves with rose gold
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
        <linearGradient id="luxury-silk-bg" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#faf4f4" />
          <stop offset="30%" stopColor="#f5eced" />
          <stop offset="60%" stopColor="#f0e5e6" />
          <stop offset="100%" stopColor="#ecdfe0" />
        </linearGradient>
        <linearGradient id="luxury-silk-rosegold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#B76E79" />
          <stop offset="30%" stopColor="#E8A0A0" />
          <stop offset="50%" stopColor="#D4908A" />
          <stop offset="70%" stopColor="#E8A0A0" />
          <stop offset="100%" stopColor="#B76E79" />
        </linearGradient>
        <filter id="luxury-silk-texture">
          <feTurbulence type="turbulence" baseFrequency="0.01 0.15" numOctaves="3" seed="7" result="noise" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.85  0 0 0 0 0.78  0 0 0 0 0.78  0 0 0 0.08 0" in="noise" result="silk" />
          <feBlend in="SourceGraphic" in2="silk" mode="multiply" />
        </filter>
        <filter id="luxury-silk-glow">
          <feGaussianBlur stdDeviation="0.3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#luxury-silk-bg)" />
      <rect width="91" height="55" fill="#f0e8e8" opacity="0.4" filter="url(#luxury-silk-texture)" />
      {/* Silk wave folds - flowing curves */}
      <path d="M0,8 C15,4 25,12 40,8 C55,4 65,12 80,8 C88,5 91,7 91,7" fill="none" stroke="#d8b0b8" strokeWidth="0.5" opacity="0.25" />
      <path d="M0,12 C18,7 28,16 45,11 C62,6 72,15 91,11" fill="none" stroke="#e0c0c8" strokeWidth="0.3" opacity="0.18" />
      <path d="M0,44 C15,40 25,48 40,44 C55,40 65,48 80,44 C88,41 91,43 91,43" fill="none" stroke="#d8b0b8" strokeWidth="0.5" opacity="0.25" />
      <path d="M0,48 C18,43 28,52 45,47 C62,42 72,51 91,47" fill="none" stroke="#e0c0c8" strokeWidth="0.3" opacity="0.18" />
      {/* Delicate rose-gold accent */}
      <ellipse cx="45.5" cy="27.5" rx="22" ry="0.08" fill="url(#luxury-silk-rosegold)" opacity="0.6" />
      {data.logo && <image href={data.logo} x="41.75" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="45.5"
        y="23"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.8"
        fill="#7a3548"
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
        fontSize="1.8"
        fill="#b88898"
      >
        {data.titleJa}
      </text>
      <text
        x="45.5"
        y="42"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#c8a0a8"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="luxury-silk-bg-back" x1="1" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#faf4f4" />
          <stop offset="50%" stopColor="#f5eced" />
          <stop offset="100%" stopColor="#f0e5e6" />
        </linearGradient>
        <linearGradient id="luxury-silk-rosegold-back" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#B76E79" />
          <stop offset="50%" stopColor="#D4908A" />
          <stop offset="100%" stopColor="#B76E79" />
        </linearGradient>
        <filter id="luxury-silk-texture-back">
          <feTurbulence type="turbulence" baseFrequency="0.01 0.12" numOctaves="3" seed="15" result="noise" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.88  0 0 0 0 0.8  0 0 0 0 0.8  0 0 0 0.06 0" in="noise" result="silk" />
          <feBlend in="SourceGraphic" in2="silk" mode="multiply" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#luxury-silk-bg-back)" />
      <rect width="91" height="55" fill="#f0e8e8" opacity="0.3" filter="url(#luxury-silk-texture-back)" />
      {/* Silk waves */}
      <path d="M0,6 C25,2 50,10 75,5 C85,3 91,5 91,5" fill="none" stroke="#d0b0b8" strokeWidth="0.35" opacity="0.2" />
      <path d="M0,50 C25,46 50,54 75,49 C85,47 91,49 91,49" fill="none" stroke="#d0b0b8" strokeWidth="0.35" opacity="0.2" />
      <path d="M0,28 C30,24 60,32 91,28" fill="none" stroke="#e0c0c8" strokeWidth="0.2" opacity="0.12" />
      {data.logo && <image href={data.logo} x="41.75" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="45.5"
        y="17"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#7a3548"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="21"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#a06878"
      >
        {data.companyEn}
      </text>
      <text
        x="45.5"
        y="25"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#b88898"
      >
        {data.titleJa}
      </text>
      <line x1="25" y1="27.5" x2="66" y2="27.5" stroke="url(#luxury-silk-rosegold-back)" strokeWidth="0.12" />
      <text
        x="45.5"
        y="31.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#8B4557"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#8B4557"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="38.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#8B4557"
      >
        {data.website}
      </text>
      <line x1="25" y1="41" x2="66" y2="41" stroke="url(#luxury-silk-rosegold-back)" strokeWidth="0.12" />
      <text
        x="45.5"
        y="45"
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
        y="49"
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
// 4. VELVET (天鵞絨) — Deep rich velvet texture with gold filigree
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
          <stop offset="30%" stopColor="#5a1838" />
          <stop offset="60%" stopColor="#4A0E2E" />
          <stop offset="100%" stopColor="#380820" />
        </linearGradient>
        <radialGradient id="luxury-velvet-sheen" cx="0.4" cy="0.3" r="0.55">
          <stop offset="0%" stopColor="#7a2848" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#5a1838" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#4A0E2E" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="luxury-velvet-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8B6914" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>
        <filter id="luxury-velvet-texture">
          <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="5" seed="4" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="soft-light" />
        </filter>
        <filter id="luxury-velvet-glow">
          <feGaussianBlur stdDeviation="0.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#luxury-velvet-bg)" />
      <rect width="91" height="55" fill="url(#luxury-velvet-sheen)" />
      <rect width="91" height="55" fill="#4A0E2E" opacity="0.2" filter="url(#luxury-velvet-texture)" />
      {/* Gold corner filigree - top left */}
      <path d="M5,5 Q5,12 12,12" fill="none" stroke="url(#luxury-velvet-gold)" strokeWidth="0.2" />
      <path d="M5,5 L8.5,5 M5,5 L5,8.5" stroke="url(#luxury-velvet-gold)" strokeWidth="0.18" />
      <circle cx="5" cy="5" r="0.3" fill="#D4AF37" opacity="0.7" />
      {/* Gold corner filigree - top right */}
      <path d="M86,5 Q86,12 79,12" fill="none" stroke="url(#luxury-velvet-gold)" strokeWidth="0.2" />
      <path d="M86,5 L82.5,5 M86,5 L86,8.5" stroke="url(#luxury-velvet-gold)" strokeWidth="0.18" />
      <circle cx="86" cy="5" r="0.3" fill="#D4AF37" opacity="0.7" />
      {/* Gold corner filigree - bottom left */}
      <path d="M5,50 Q5,43 12,43" fill="none" stroke="url(#luxury-velvet-gold)" strokeWidth="0.2" />
      <path d="M5,50 L8.5,50 M5,50 L5,46.5" stroke="url(#luxury-velvet-gold)" strokeWidth="0.18" />
      <circle cx="5" cy="50" r="0.3" fill="#D4AF37" opacity="0.7" />
      {/* Gold corner filigree - bottom right */}
      <path d="M86,50 Q86,43 79,43" fill="none" stroke="url(#luxury-velvet-gold)" strokeWidth="0.2" />
      <path d="M86,50 L82.5,50 M86,50 L86,46.5" stroke="url(#luxury-velvet-gold)" strokeWidth="0.18" />
      <circle cx="86" cy="50" r="0.3" fill="#D4AF37" opacity="0.7" />
      {/* Center ornamental divider */}
      <path d="M33,28 Q39,26 45.5,28 Q52,26 58,28" fill="none" stroke="#C5A572" strokeWidth="0.1" opacity="0.5" />
      {data.logo && <image href={data.logo} x="41.75" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="1"
        fill="#f0d8e0"
        filter="url(#luxury-velvet-glow)"
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
        fontSize="1.8"
        fill="#c090a0"
      >
        {data.titleJa}
      </text>
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#a07080"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="luxury-velvet-bg-back" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#4A0E2E" />
          <stop offset="50%" stopColor="#5a1838" />
          <stop offset="100%" stopColor="#380820" />
        </linearGradient>
        <linearGradient id="luxury-velvet-gold-back" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8B6914" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>
        <filter id="luxury-velvet-texture-back">
          <feTurbulence type="fractalNoise" baseFrequency="1.0" numOctaves="4" seed="9" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="soft-light" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#luxury-velvet-bg-back)" />
      <rect width="91" height="55" fill="#4A0E2E" opacity="0.2" filter="url(#luxury-velvet-texture-back)" />
      {/* Ornamental corners */}
      <path d="M5,5 L9,5 M5,5 L5,9" stroke="#C5A572" strokeWidth="0.15" />
      <path d="M86,5 L82,5 M86,5 L86,9" stroke="#C5A572" strokeWidth="0.15" />
      <path d="M5,50 L9,50 M5,50 L5,46" stroke="#C5A572" strokeWidth="0.15" />
      <path d="M86,50 L82,50 M86,50 L86,46" stroke="#C5A572" strokeWidth="0.15" />
      {/* Decorative border line */}
      <rect x="8" y="8" width="75" height="39" fill="none" stroke="#C5A572" strokeWidth="0.08" opacity="0.3" />
      {data.logo && <image href={data.logo} x="41.75" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="45.5"
        y="17"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#f0d8e0"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="21"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#C5A572"
      >
        {data.companyEn}
      </text>
      <text
        x="45.5"
        y="25"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#c090a0"
      >
        {data.titleJa}
      </text>
      <line x1="22" y1="27.5" x2="69" y2="27.5" stroke="url(#luxury-velvet-gold-back)" strokeWidth="0.1" />
      <text
        x="45.5"
        y="31.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#d0b0c0"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#d0b0c0"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="38.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#d0b0c0"
      >
        {data.website}
      </text>
      <line x1="22" y1="41" x2="69" y2="41" stroke="url(#luxury-velvet-gold-back)" strokeWidth="0.1" />
      <text
        x="45.5"
        y="45"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#a07080"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="49"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#a07080"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 5. PEARL (珠) — Iridescent pearl shimmer with nacre effects
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
          <stop offset="0%" stopColor="#f4f2f7" />
          <stop offset="25%" stopColor="#eceaf2" />
          <stop offset="50%" stopColor="#f2eeeb" />
          <stop offset="75%" stopColor="#eae8f2" />
          <stop offset="100%" stopColor="#f0eef5" />
        </linearGradient>
        <radialGradient id="luxury-pearl-orb" cx="0.42" cy="0.35" r="0.45">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="40%" stopColor="#f0ecf5" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="luxury-pearl-iridescent" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#c8d0e8" />
          <stop offset="25%" stopColor="#d8c8d8" />
          <stop offset="50%" stopColor="#c8d8d0" />
          <stop offset="75%" stopColor="#d0c8e0" />
          <stop offset="100%" stopColor="#c8d0e8" />
        </linearGradient>
        <filter id="luxury-pearl-texture">
          <feTurbulence type="turbulence" baseFrequency="0.02 0.08" numOctaves="3" seed="18" result="noise" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.9  0 0 0 0 0.88  0 0 0 0 0.92  0 0 0 0.06 0" in="noise" result="nacre" />
          <feBlend in="SourceGraphic" in2="nacre" mode="screen" />
        </filter>
        <filter id="luxury-pearl-shimmer">
          <feGaussianBlur stdDeviation="0.25" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#luxury-pearl-bg)" />
      <rect width="91" height="55" fill="url(#luxury-pearl-orb)" />
      <rect width="91" height="55" fill="#f0eef5" opacity="0.3" filter="url(#luxury-pearl-texture)" />
      {/* Iridescent sheen arcs */}
      <path d="M0,18 Q22,14 45.5,18 Q69,22 91,18" fill="none" stroke="url(#luxury-pearl-iridescent)" strokeWidth="0.25" opacity="0.35" />
      <path d="M0,22 Q22,18 45.5,22 Q69,26 91,22" fill="none" stroke="#d0c8d8" strokeWidth="0.15" opacity="0.2" />
      <path d="M0,37 Q22,33 45.5,37 Q69,41 91,37" fill="none" stroke="url(#luxury-pearl-iridescent)" strokeWidth="0.25" opacity="0.35" />
      {/* Thin border with pearl finish */}
      <rect x="5" y="4" width="81" height="47" fill="none" stroke="#c0c8d8" strokeWidth="0.12" rx="0.5" />
      {data.logo && <image href={data.logo} x="41.75" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.8"
        fill="#3a4555"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="29"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.5"
        fill="#7a8898"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="#8898A8"
      >
        {data.titleJa}
      </text>
      <text
        x="45.5"
        y="42"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#a0a8b8"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="luxury-pearl-bg-back" x1="1" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#f4f2f7" />
          <stop offset="50%" stopColor="#eae8f2" />
          <stop offset="100%" stopColor="#f2eeeb" />
        </linearGradient>
        <linearGradient id="luxury-pearl-iridescent-back" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#c0c8d8" />
          <stop offset="50%" stopColor="#d0c0d0" />
          <stop offset="100%" stopColor="#c0d0c8" />
        </linearGradient>
        <filter id="luxury-pearl-texture-back">
          <feTurbulence type="turbulence" baseFrequency="0.02 0.06" numOctaves="3" seed="25" result="noise" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.92  0 0 0 0 0.9  0 0 0 0 0.94  0 0 0 0.05 0" in="noise" result="nacre" />
          <feBlend in="SourceGraphic" in2="nacre" mode="screen" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#luxury-pearl-bg-back)" />
      <rect width="91" height="55" fill="#f0eef5" opacity="0.25" filter="url(#luxury-pearl-texture-back)" />
      <rect x="5" y="4" width="81" height="47" fill="none" stroke="#c0c8d8" strokeWidth="0.1" rx="0.5" />
      {/* Subtle iridescent arcs */}
      <path d="M0,15 Q45,10 91,15" fill="none" stroke="url(#luxury-pearl-iridescent-back)" strokeWidth="0.2" opacity="0.25" />
      <path d="M0,42 Q45,38 91,42" fill="none" stroke="url(#luxury-pearl-iridescent-back)" strokeWidth="0.2" opacity="0.25" />
      {data.logo && <image href={data.logo} x="41.75" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="45.5"
        y="17"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#3a4555"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="21"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#7a8898"
      >
        {data.companyEn}
      </text>
      <text
        x="45.5"
        y="25"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8898A8"
      >
        {data.titleJa}
      </text>
      <line x1="24" y1="27.5" x2="67" y2="27.5" stroke="url(#luxury-pearl-iridescent-back)" strokeWidth="0.1" />
      <text
        x="45.5"
        y="31.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#5a6a7a"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#5a6a7a"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="38.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#5a6a7a"
      >
        {data.website}
      </text>
      <line x1="24" y1="41" x2="67" y2="41" stroke="url(#luxury-pearl-iridescent-back)" strokeWidth="0.1" />
      <text
        x="45.5"
        y="45"
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
        y="49"
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
// 6. DIAMOND (煌) — Faceted diamond refractions with sparkle
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
      <defs>
        <linearGradient id="luxury-diamond-bg" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#0f1825" />
          <stop offset="50%" stopColor="#0d1520" />
          <stop offset="100%" stopColor="#08101a" />
        </linearGradient>
        <linearGradient id="luxury-diamond-facet" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#88c8f8" stopOpacity="0.2" />
          <stop offset="30%" stopColor="#ffffff" stopOpacity="0.08" />
          <stop offset="60%" stopColor="#a8d8ff" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#c8e0f8" stopOpacity="0.12" />
        </linearGradient>
        <radialGradient id="luxury-diamond-sparkle" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#c8e0ff" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <filter id="luxury-diamond-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" seed="22" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="overlay" />
        </filter>
        <filter id="luxury-diamond-glow">
          <feGaussianBlur stdDeviation="0.35" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#luxury-diamond-bg)" />
      <rect width="91" height="55" fill="#0d1520" opacity="0.2" filter="url(#luxury-diamond-texture)" />
      {/* Diamond facet polygon - crown */}
      <polygon points="45.5,3 56,13 51,18 40,18 35,13" fill="url(#luxury-diamond-facet)" stroke="#3a6a9a" strokeWidth="0.1" opacity="0.5" />
      {/* Internal facet lines */}
      <line x1="45.5" y1="3" x2="45.5" y2="18" stroke="#4488cc" strokeWidth="0.06" opacity="0.3" />
      <line x1="35" y1="13" x2="56" y2="13" stroke="#4488cc" strokeWidth="0.06" opacity="0.3" />
      <line x1="40" y1="18" x2="45.5" y2="3" stroke="#4488cc" strokeWidth="0.05" opacity="0.2" />
      <line x1="51" y1="18" x2="45.5" y2="3" stroke="#4488cc" strokeWidth="0.05" opacity="0.2" />
      {/* Sparkle points */}
      <circle cx="18" cy="10" r="0.35" fill="url(#luxury-diamond-sparkle)" />
      <line x1="16.5" y1="10" x2="19.5" y2="10" stroke="#ffffff" strokeWidth="0.06" opacity="0.6" />
      <line x1="18" y1="8.5" x2="18" y2="11.5" stroke="#ffffff" strokeWidth="0.06" opacity="0.6" />
      <circle cx="74" cy="7" r="0.25" fill="#ffffff" opacity="0.5" />
      <circle cx="82" cy="44" r="0.2" fill="#ffffff" opacity="0.35" />
      <circle cx="10" cy="40" r="0.2" fill="#ffffff" opacity="0.3" />
      {data.logo && <image href={data.logo} x="41.75" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="6"
        letterSpacing="1"
        fill="#c8ddf0"
        filter="url(#luxury-diamond-glow)"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="37"
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
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="#4a6880"
      >
        {data.titleJa}
      </text>
      <text
        x="45.5"
        y="49"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#3a5870"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="luxury-diamond-bg-back" x1="1" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#0f1825" />
          <stop offset="100%" stopColor="#08101a" />
        </linearGradient>
        <filter id="luxury-diamond-texture-back">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" seed="30" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="overlay" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#luxury-diamond-bg-back)" />
      <rect width="91" height="55" fill="#0d1520" opacity="0.2" filter="url(#luxury-diamond-texture-back)" />
      {/* Facet lines radiating from corners */}
      <line x1="0" y1="0" x2="25" y2="18" stroke="#3a6a9a" strokeWidth="0.06" opacity="0.15" />
      <line x1="91" y1="0" x2="66" y2="18" stroke="#3a6a9a" strokeWidth="0.06" opacity="0.15" />
      <line x1="0" y1="55" x2="25" y2="37" stroke="#3a6a9a" strokeWidth="0.05" opacity="0.1" />
      <line x1="91" y1="55" x2="66" y2="37" stroke="#3a6a9a" strokeWidth="0.05" opacity="0.1" />
      <circle cx="80" cy="6" r="0.2" fill="#ffffff" opacity="0.4" />
      <circle cx="12" cy="48" r="0.15" fill="#ffffff" opacity="0.3" />
      {data.logo && <image href={data.logo} x="41.75" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="45.5"
        y="16"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#c8ddf0"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="20"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#6a88a8"
      >
        {data.companyEn}
      </text>
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#4a6880"
      >
        {data.titleJa}
      </text>
      <line x1="22" y1="26.5" x2="69" y2="26.5" stroke="#4488cc" strokeWidth="0.08" opacity="0.3" />
      <text
        x="45.5"
        y="30.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#8aa8c0"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="34"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#8aa8c0"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="37.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#8aa8c0"
      >
        {data.website}
      </text>
      <line x1="22" y1="40" x2="69" y2="40" stroke="#4488cc" strokeWidth="0.08" opacity="0.3" />
      <text
        x="45.5"
        y="44"
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
        y="48"
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
// 7. ONYX (漆黒) — Pure black with silver emboss and texture
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
          <stop offset="0%" stopColor="#222222" />
          <stop offset="60%" stopColor="#141414" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </radialGradient>
        <linearGradient id="luxury-onyx-silver" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#888888" />
          <stop offset="30%" stopColor="#c0c0c0" />
          <stop offset="50%" stopColor="#e0e0e0" />
          <stop offset="70%" stopColor="#c0c0c0" />
          <stop offset="100%" stopColor="#888888" />
        </linearGradient>
        <filter id="luxury-onyx-texture">
          <feTurbulence type="fractalNoise" baseFrequency="1.5" numOctaves="5" seed="33" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="overlay" />
        </filter>
        <filter id="luxury-onyx-emboss">
          <feTurbulence type="fractalNoise" baseFrequency="0.3" numOctaves="2" seed="11" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="bnoise" />
          <feBlend in="SourceGraphic" in2="bnoise" mode="soft-light" />
        </filter>
        <filter id="luxury-onyx-glow">
          <feGaussianBlur stdDeviation="0.3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#luxury-onyx-sheen)" />
      <rect width="91" height="55" fill="#0a0a0a" opacity="0.3" filter="url(#luxury-onyx-texture)" />
      {/* Surface polish reflection */}
      <ellipse cx="42" cy="18" rx="30" ry="12" fill="#1a1a1a" opacity="0.5" />
      {/* Silver border with corner accents */}
      <rect x="4.5" y="3.5" width="82" height="48" fill="none" stroke="url(#luxury-onyx-silver)" strokeWidth="0.12" />
      <line x1="4.5" y1="7" x2="4.5" y2="3.5" stroke="#c0c0c0" strokeWidth="0.3" />
      <line x1="4.5" y1="3.5" x2="8" y2="3.5" stroke="#c0c0c0" strokeWidth="0.3" />
      <line x1="83" y1="3.5" x2="86.5" y2="3.5" stroke="#c0c0c0" strokeWidth="0.3" />
      <line x1="86.5" y1="3.5" x2="86.5" y2="7" stroke="#c0c0c0" strokeWidth="0.3" />
      <line x1="4.5" y1="48" x2="4.5" y2="51.5" stroke="#c0c0c0" strokeWidth="0.3" />
      <line x1="4.5" y1="51.5" x2="8" y2="51.5" stroke="#c0c0c0" strokeWidth="0.3" />
      <line x1="83" y1="51.5" x2="86.5" y2="51.5" stroke="#c0c0c0" strokeWidth="0.3" />
      <line x1="86.5" y1="48" x2="86.5" y2="51.5" stroke="#c0c0c0" strokeWidth="0.3" />
      {data.logo && <image href={data.logo} x="41.75" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="45.5"
        y="23"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="6"
        letterSpacing="1.2"
        fill="url(#luxury-onyx-silver)"
        filter="url(#luxury-onyx-glow)"
      >
        {data.nameJa}
      </text>
      <line x1="28" y1="27" x2="63" y2="27" stroke="#555555" strokeWidth="0.12" />
      <text
        x="45.5"
        y="33"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.6"
        fill="#888888"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="39"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.8"
        fill="#666666"
      >
        {data.titleJa}
      </text>
      <text
        x="45.5"
        y="45"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#555555"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="luxury-onyx-sheen-back" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#080808" />
        </radialGradient>
        <linearGradient id="luxury-onyx-silver-back" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#888888" />
          <stop offset="50%" stopColor="#c8c8c8" />
          <stop offset="100%" stopColor="#888888" />
        </linearGradient>
        <filter id="luxury-onyx-texture-back">
          <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="4" seed="40" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="overlay" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#luxury-onyx-sheen-back)" />
      <rect width="91" height="55" fill="#0a0a0a" opacity="0.25" filter="url(#luxury-onyx-texture-back)" />
      <rect x="4.5" y="3.5" width="82" height="48" fill="none" stroke="#444444" strokeWidth="0.08" />
      <line x1="4.5" y1="6" x2="4.5" y2="3.5" stroke="#666666" strokeWidth="0.2" />
      <line x1="4.5" y1="3.5" x2="7" y2="3.5" stroke="#666666" strokeWidth="0.2" />
      <line x1="84" y1="3.5" x2="86.5" y2="3.5" stroke="#666666" strokeWidth="0.2" />
      <line x1="86.5" y1="3.5" x2="86.5" y2="6" stroke="#666666" strokeWidth="0.2" />
      {data.logo && <image href={data.logo} x="41.75" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="45.5"
        y="17"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2.5"
        fill="#c0c0c0"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="21"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#777777"
      >
        {data.companyEn}
      </text>
      <text
        x="45.5"
        y="25"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#666666"
      >
        {data.titleJa}
      </text>
      <line x1="22" y1="27.5" x2="69" y2="27.5" stroke="url(#luxury-onyx-silver-back)" strokeWidth="0.08" />
      <text
        x="45.5"
        y="31.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#999999"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#999999"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="38.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#999999"
      >
        {data.website}
      </text>
      <line x1="22" y1="41" x2="69" y2="41" stroke="url(#luxury-onyx-silver-back)" strokeWidth="0.08" />
      <text
        x="45.5"
        y="45"
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
        y="49"
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
// 8. CHAMPAGNE (泡) — Golden champagne bubbles with effervescence
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
          <stop offset="0%" stopColor="#c8a860" />
          <stop offset="25%" stopColor="#d4b87a" />
          <stop offset="50%" stopColor="#e2cc98" />
          <stop offset="75%" stopColor="#eedcb0" />
          <stop offset="100%" stopColor="#f8f0d8" />
        </linearGradient>
        <radialGradient id="luxury-champagne-bubble" cx="0.35" cy="0.3" r="0.5">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
          <stop offset="60%" stopColor="#f5ecd0" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <filter id="luxury-champagne-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" seed="14" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="soft-light" />
        </filter>
        <filter id="luxury-champagne-glow">
          <feGaussianBlur stdDeviation="0.2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#luxury-champagne-bg)" />
      <rect width="91" height="55" fill="#e8d4a0" opacity="0.15" filter="url(#luxury-champagne-texture)" />
      {/* Champagne bubbles - left stream */}
      <circle cx="14" cy="44" r="1.2" fill="url(#luxury-champagne-bubble)" stroke="#C5A572" strokeWidth="0.12" opacity="0.45" />
      <circle cx="17" cy="36" r="0.9" fill="url(#luxury-champagne-bubble)" stroke="#C5A572" strokeWidth="0.1" opacity="0.4" />
      <circle cx="12" cy="28" r="0.65" fill="url(#luxury-champagne-bubble)" stroke="#C5A572" strokeWidth="0.08" opacity="0.35" />
      <circle cx="15" cy="20" r="0.45" fill="url(#luxury-champagne-bubble)" stroke="#C5A572" strokeWidth="0.06" opacity="0.3" />
      {/* Right stream */}
      <circle cx="76" cy="48" r="1" fill="url(#luxury-champagne-bubble)" stroke="#C5A572" strokeWidth="0.12" opacity="0.45" />
      <circle cx="79" cy="40" r="0.75" fill="url(#luxury-champagne-bubble)" stroke="#C5A572" strokeWidth="0.1" opacity="0.4" />
      <circle cx="74" cy="32" r="0.55" fill="url(#luxury-champagne-bubble)" stroke="#C5A572" strokeWidth="0.08" opacity="0.35" />
      <circle cx="77" cy="24" r="0.4" fill="url(#luxury-champagne-bubble)" stroke="#C5A572" strokeWidth="0.06" opacity="0.3" />
      {/* Center cluster */}
      <circle cx="48" cy="50" r="0.8" fill="url(#luxury-champagne-bubble)" stroke="#C5A572" strokeWidth="0.08" opacity="0.3" />
      {data.logo && <image href={data.logo} x="41.75" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="45.5"
        y="21"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="6"
        letterSpacing="0.8"
        fill="#5a4520"
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
        fill="#7a6530"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="#907540"
      >
        {data.titleJa}
      </text>
      <text
        x="45.5"
        y="41"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#a08550"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="luxury-champagne-bg-back" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f8f0d8" />
          <stop offset="50%" stopColor="#f0e4c0" />
          <stop offset="100%" stopColor="#eedcb0" />
        </linearGradient>
        <filter id="luxury-champagne-texture-back">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" seed="19" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="soft-light" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#luxury-champagne-bg-back)" />
      <rect width="91" height="55" fill="#f0e4c0" opacity="0.12" filter="url(#luxury-champagne-texture-back)" />
      {/* Subtle floating bubbles */}
      <circle cx="82" cy="42" r="0.5" fill="none" stroke="#C5A572" strokeWidth="0.08" opacity="0.25" />
      <circle cx="80" cy="34" r="0.35" fill="none" stroke="#C5A572" strokeWidth="0.06" opacity="0.2" />
      <circle cx="8" cy="46" r="0.4" fill="none" stroke="#C5A572" strokeWidth="0.06" opacity="0.2" />
      {data.logo && <image href={data.logo} x="41.75" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="45.5"
        y="16"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#5a4520"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="20"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#7a6530"
      >
        {data.companyEn}
      </text>
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#907540"
      >
        {data.titleJa}
      </text>
      <line x1="22" y1="26.5" x2="69" y2="26.5" stroke="#C5A572" strokeWidth="0.12" />
      <text
        x="45.5"
        y="30.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#6a5530"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="34"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#6a5530"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="37.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#6a5530"
      >
        {data.website}
      </text>
      <line x1="22" y1="40" x2="69" y2="40" stroke="#C5A572" strokeWidth="0.12" />
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#907540"
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
        fill="#907540"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 9. PLATINUM (白金) — Cool silvery tones with brushed metal
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
        <linearGradient id="luxury-platinum-bg" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#eaecf0" />
          <stop offset="30%" stopColor="#e0e2e8" />
          <stop offset="60%" stopColor="#d8dce2" />
          <stop offset="100%" stopColor="#e2e6ec" />
        </linearGradient>
        <linearGradient id="luxury-platinum-accent" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#9aa4b4" />
          <stop offset="25%" stopColor="#b8c0cc" />
          <stop offset="50%" stopColor="#d0d8e0" />
          <stop offset="75%" stopColor="#b8c0cc" />
          <stop offset="100%" stopColor="#9aa4b4" />
        </linearGradient>
        <filter id="luxury-platinum-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.01 2.0" numOctaves="3" seed="16" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="soft-light" />
        </filter>
        <filter id="luxury-platinum-emboss">
          <feTurbulence type="fractalNoise" baseFrequency="0.4" numOctaves="2" seed="6" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="bnoise" />
          <feBlend in="SourceGraphic" in2="bnoise" mode="overlay" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#luxury-platinum-bg)" />
      <rect width="91" height="55" fill="#dde0e6" opacity="0.2" filter="url(#luxury-platinum-texture)" />
      {/* Platinum stripe accents */}
      <rect x="0" y="0" width="91" height="0.6" fill="url(#luxury-platinum-accent)" />
      <line x1="0" y1="1.5" x2="91" y2="1.5" stroke="#b0b8c4" strokeWidth="0.06" />
      <rect x="0" y="54.4" width="91" height="0.6" fill="url(#luxury-platinum-accent)" />
      <line x1="0" y1="53.5" x2="91" y2="53.5" stroke="#b0b8c4" strokeWidth="0.06" />
      {/* Embossed diamond emblem */}
      <polygon points="45.5,5 50,9.5 45.5,14 41,9.5" fill="none" stroke="url(#luxury-platinum-accent)" strokeWidth="0.18" />
      <polygon points="45.5,6.5 48.5,9.5 45.5,12.5 42.5,9.5" fill="none" stroke="#a0aab8" strokeWidth="0.08" opacity="0.5" />
      {data.logo && <image href={data.logo} x="41.75" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="45.5"
        y="25"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="6"
        letterSpacing="1"
        fill="#2a3545"
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
        letterSpacing="0.6"
        fill="#5a6a7a"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="39"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="#7a8a9a"
      >
        {data.titleJa}
      </text>
      <text
        x="45.5"
        y="45"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#8a9aaa"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="luxury-platinum-bg-back" x1="1" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#eaecf0" />
          <stop offset="50%" stopColor="#e0e2e8" />
          <stop offset="100%" stopColor="#d8dce2" />
        </linearGradient>
        <linearGradient id="luxury-platinum-accent-back" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#9aa4b4" />
          <stop offset="50%" stopColor="#c8d0d8" />
          <stop offset="100%" stopColor="#9aa4b4" />
        </linearGradient>
        <filter id="luxury-platinum-texture-back">
          <feTurbulence type="fractalNoise" baseFrequency="0.01 1.8" numOctaves="3" seed="21" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="soft-light" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#luxury-platinum-bg-back)" />
      <rect width="91" height="55" fill="#dde0e6" opacity="0.15" filter="url(#luxury-platinum-texture-back)" />
      <rect x="0" y="0" width="91" height="0.5" fill="url(#luxury-platinum-accent-back)" />
      <rect x="0" y="54.5" width="91" height="0.5" fill="url(#luxury-platinum-accent-back)" />
      <polygon points="45.5,4 47.5,6 45.5,8 43.5,6" fill="none" stroke="#a0aab8" strokeWidth="0.1" opacity="0.5" />
      {data.logo && <image href={data.logo} x="41.75" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="45.5"
        y="15"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#2a3545"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="19"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#5a6a7a"
      >
        {data.companyEn}
      </text>
      <text
        x="45.5"
        y="23"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#7a8a9a"
      >
        {data.titleJa}
      </text>
      <line x1="22" y1="25.5" x2="69" y2="25.5" stroke="url(#luxury-platinum-accent-back)" strokeWidth="0.1" />
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#4a5a6a"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="33.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#4a5a6a"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="37"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#4a5a6a"
      >
        {data.website}
      </text>
      <line x1="22" y1="39.5" x2="69" y2="39.5" stroke="url(#luxury-platinum-accent-back)" strokeWidth="0.1" />
      <text
        x="45.5"
        y="44"
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
        y="48"
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
// 10. CREST (紋章) — Heraldic crest with ornamental gold frame
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
      <defs>
        <linearGradient id="luxury-crest-bg" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#1e2d40" />
          <stop offset="50%" stopColor="#1B2838" />
          <stop offset="100%" stopColor="#162030" />
        </linearGradient>
        <linearGradient id="luxury-crest-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8B6914" />
          <stop offset="25%" stopColor="#C5A572" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="75%" stopColor="#C5A572" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>
        <filter id="luxury-crest-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" seed="28" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="overlay" />
        </filter>
        <filter id="luxury-crest-glow">
          <feGaussianBlur stdDeviation="0.25" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#luxury-crest-bg)" />
      <rect width="91" height="55" fill="#1B2838" opacity="0.15" filter="url(#luxury-crest-texture)" />
      {/* Double ornamental frame */}
      <rect x="3.5" y="2.5" width="84" height="50" fill="none" stroke="url(#luxury-crest-gold)" strokeWidth="0.22" />
      <rect x="5.5" y="4.5" width="80" height="46" fill="none" stroke="#C5A572" strokeWidth="0.08" opacity="0.4" />
      {/* Corner ornamental flourishes */}
      <path d="M3.5,7 L3.5,2.5 L8,2.5" fill="none" stroke="#D4AF37" strokeWidth="0.35" />
      <path d="M83,2.5 L87.5,2.5 L87.5,7" fill="none" stroke="#D4AF37" strokeWidth="0.35" />
      <path d="M3.5,48 L3.5,52.5 L8,52.5" fill="none" stroke="#D4AF37" strokeWidth="0.35" />
      <path d="M83,52.5 L87.5,52.5 L87.5,48" fill="none" stroke="#D4AF37" strokeWidth="0.35" />
      {/* Shield crest */}
      <path d="M45.5,5 L53,7.5 L53,14 Q53,20 45.5,22 Q38,20 38,14 L38,7.5 Z" fill="none" stroke="url(#luxury-crest-gold)" strokeWidth="0.25" />
      <line x1="45.5" y1="8" x2="45.5" y2="19" stroke="#D4AF37" strokeWidth="0.1" opacity="0.5" />
      <line x1="40" y1="13" x2="51" y2="13" stroke="#D4AF37" strokeWidth="0.1" opacity="0.5" />
      {/* Ornamental flourishes beside shield */}
      <path d="M34,13 Q31,13 31,10" fill="none" stroke="#C5A572" strokeWidth="0.1" opacity="0.4" />
      <path d="M57,13 Q60,13 60,10" fill="none" stroke="#C5A572" strokeWidth="0.1" opacity="0.4" />
      {data.logo && <image href={data.logo} x="41.75" y="7" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="1.2"
        fill="#e8dcc0"
        filter="url(#luxury-crest-glow)"
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
        letterSpacing="0.6"
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
        fontSize="1.8"
        fill="#8a9aaa"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="luxury-crest-bg-back" x1="0.5" y1="1" x2="0.5" y2="0">
          <stop offset="0%" stopColor="#1e2d40" />
          <stop offset="100%" stopColor="#1B2838" />
        </linearGradient>
        <linearGradient id="luxury-crest-gold-back" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8B6914" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>
        <filter id="luxury-crest-texture-back">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" seed="35" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="overlay" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#luxury-crest-bg-back)" />
      <rect width="91" height="55" fill="#1B2838" opacity="0.12" filter="url(#luxury-crest-texture-back)" />
      <rect x="3.5" y="2.5" width="84" height="50" fill="none" stroke="url(#luxury-crest-gold-back)" strokeWidth="0.15" />
      <path d="M3.5,6 L3.5,2.5 L7,2.5" fill="none" stroke="#D4AF37" strokeWidth="0.25" />
      <path d="M84,2.5 L87.5,2.5 L87.5,6" fill="none" stroke="#D4AF37" strokeWidth="0.25" />
      <path d="M3.5,49 L3.5,52.5 L7,52.5" fill="none" stroke="#D4AF37" strokeWidth="0.25" />
      <path d="M84,52.5 L87.5,52.5 L87.5,49" fill="none" stroke="#D4AF37" strokeWidth="0.25" />
      {/* Small crest at top */}
      <path d="M45.5,4 L49,5.5 L49,9 Q49,11.5 45.5,12.5 Q42,11.5 42,9 L42,5.5 Z" fill="none" stroke="#C5A572" strokeWidth="0.15" opacity="0.5" />
      {data.logo && <image href={data.logo} x="41.75" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="45.5"
        y="18"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#e8dcc0"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#C5A572"
      >
        {data.companyEn}
      </text>
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8a9aaa"
      >
        {data.titleJa}
      </text>
      <line x1="18" y1="28.5" x2="73" y2="28.5" stroke="url(#luxury-crest-gold-back)" strokeWidth="0.1" opacity="0.4" />
      <text
        x="45.5"
        y="32.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#a8b8c8"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#a8b8c8"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="39.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#a8b8c8"
      >
        {data.website}
      </text>
      <line x1="18" y1="42" x2="73" y2="42" stroke="url(#luxury-crest-gold-back)" strokeWidth="0.1" opacity="0.4" />
      <text
        x="45.5"
        y="46"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#7a8a9a"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="50"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#7a8a9a"
      >
        {data.addressJa}
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
