import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. COUTURE (仕立) — Haute couture elegance
// Ultra-refined serif typography, luxurious fabric-like texture
// ============================================================
const coutureTemplate: TemplateDefinition = {
  id: 'fashion-couture',
  name: 'COUTURE',
  nameJa: '仕立',
  category: 'fashion',
  designer: 'Coco Chanel',
  description: 'オートクチュールの気品。極限まで研ぎ澄まされた優雅さ。',
  accentColor: '#1a1a1a',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="fsh-ct-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fefefe" />
          <stop offset="50%" stopColor="#f9f7f4" />
          <stop offset="100%" stopColor="#f5f2ed" />
        </linearGradient>
        <linearGradient id="fsh-ct-gold" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#c9a96e" />
          <stop offset="50%" stopColor="#dfc89a" />
          <stop offset="100%" stopColor="#c9a96e" />
        </linearGradient>
        <filter id="fsh-ct-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="fsh-ct-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <pattern id="fsh-ct-weave" width="2" height="2" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="2" y2="2" stroke="#e8e2d8" strokeWidth="0.04" />
          <line x1="2" y1="0" x2="0" y2="2" stroke="#ece6dc" strokeWidth="0.03" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#fsh-ct-bg)" />
      <rect width="91" height="55" fill="url(#fsh-ct-weave)" opacity="0.5" />
      <rect width="91" height="55" fill="transparent" filter="url(#fsh-ct-grain)" opacity="0.06" />
      {/* Thin elegant border with gold accent */}
      <rect x="5" y="5" width="81" height="45" fill="none" stroke="#1a1a1a" strokeWidth="0.08" />
      <rect x="5.8" y="5.8" width="79.4" height="43.4" fill="none" stroke="url(#fsh-ct-gold)" strokeWidth="0.04" />
      {/* Decorative corner flourishes */}
      <g stroke="#c9a96e" strokeWidth="0.1" opacity="0.6">
        <path d="M 7 5 L 7 8 M 5 7 L 8 7" fill="none" />
        <path d="M 84 5 L 84 8 M 83 7 L 86 7" fill="none" />
        <path d="M 7 50 L 7 47 M 5 48 L 8 48" fill="none" />
        <path d="M 84 50 L 84 47 M 83 48 L 86 48" fill="none" />
      </g>
      {/* Subtle diagonal stitch line */}
      <line x1="5" y1="16" x2="86" y2="16" stroke="#c9a96e" strokeWidth="0.03" strokeDasharray="0.3 1" opacity="0.4" />
      {/* Name with shadow */}
      <g filter="url(#fsh-ct-shadow)">
        <text x="45.5" y="24" textAnchor="middle" fontFamily="'Noto Sans JP', serif" fontWeight="300" fontSize="6.5" letterSpacing="2" fill="#1a1a1a">
          {data.nameJa}
        </text>
      </g>
      <text x="45.5" y="30.5" textAnchor="middle" fontFamily="'Inter', serif" fontWeight="200" fontSize="2.2" letterSpacing="1.5" fill="#8a7e6b">
        {data.nameEn.toUpperCase()}
      </text>
      {/* Title and company */}
      <text x="45.5" y="37" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#6b5e4b">
        {data.titleJa}
      </text>
      <line x1="32" y1="39.5" x2="59" y2="39.5" stroke="#c9a96e" strokeWidth="0.04" />
      <text x="45.5" y="43.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#1a1a1a">
        {data.companyJa}
      </text>
      {/* Monogram decorative element */}
      <circle cx="45.5" cy="11" r="2.5" fill="none" stroke="#c9a96e" strokeWidth="0.06" opacity="0.5" />
      <circle cx="45.5" cy="11" r="1.8" fill="none" stroke="#c9a96e" strokeWidth="0.03" opacity="0.3" />
      {data.logo && <image href={data.logo} x="7" y="39" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="fsh-ct-bg-b" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="50%" stopColor="#222222" />
          <stop offset="100%" stopColor="#181818" />
        </linearGradient>
        <linearGradient id="fsh-ct-gold-b" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#c9a96e" />
          <stop offset="50%" stopColor="#dfc89a" />
          <stop offset="100%" stopColor="#c9a96e" />
        </linearGradient>
        <pattern id="fsh-ct-weave-b" width="2" height="2" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="2" y2="2" stroke="#2a2a2a" strokeWidth="0.04" />
          <line x1="2" y1="0" x2="0" y2="2" stroke="#252525" strokeWidth="0.03" />
        </pattern>
        <filter id="fsh-ct-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="fsh-ct-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#fsh-ct-bg-b)" />
      <rect width="91" height="55" fill="url(#fsh-ct-weave-b)" opacity="0.3" />
      <rect width="91" height="55" fill="transparent" filter="url(#fsh-ct-grain-b)" opacity="0.08" />
      <rect x="5" y="5" width="81" height="45" fill="none" stroke="url(#fsh-ct-gold-b)" strokeWidth="0.08" />
      {/* Company block */}
      <g filter="url(#fsh-ct-shadow-b)">
        <text x="8" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.8" letterSpacing="0.3" fill="#f5f2ed">
          {data.companyJa}
        </text>
      </g>
      <text x="8" y="16.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.2" fill="#c9a96e">
        {data.companyEn}
      </text>
      <text x="8" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#c9a96e" opacity="0.7">
        {data.titleJa}
      </text>
      <line x1="8" y1="22" x2="83" y2="22" stroke="#c9a96e" strokeWidth="0.06" opacity="0.4" />
      {/* Contact info */}
      <text x="8" y="27" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#f5f2ed">TEL: {data.tel}</text>
      <text x="8" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#f5f2ed">EMAIL: {data.email}</text>
      <text x="8" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#f5f2ed">WEB: {data.website}</text>
      <line x1="8" y1="38" x2="83" y2="38" stroke="#c9a96e" strokeWidth="0.06" opacity="0.4" />
      <text x="8" y="42.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#c9a96e">
        〒{data.zipCode}
      </text>
      <text x="8" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#c9a96e">
        {data.addressJa}
      </text>
      {/* Decorative stitch marks on corners */}
      <g stroke="#c9a96e" strokeWidth="0.06" opacity="0.3" strokeDasharray="0.4 0.3">
        <line x1="7" y1="5" x2="7" y2="50" />
        <line x1="84" y1="5" x2="84" y2="50" />
      </g>
      {data.logo && <image href={data.logo} x="75" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 2. SILK (絹) — Flowing silk fabric texture
// Smooth gradients suggesting draped silk with luminous sheen
// ============================================================
const silkTemplate: TemplateDefinition = {
  id: 'fashion-silk',
  name: 'SILK',
  nameJa: '絹',
  category: 'fashion',
  designer: 'Issey Miyake',
  description: 'シルクの流れるような光沢。布の質感を名刺に。',
  accentColor: '#6B2D5B',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="fsh-sk-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8f0f5" />
          <stop offset="30%" stopColor="#f2e4ee" />
          <stop offset="70%" stopColor="#ecdae5" />
          <stop offset="100%" stopColor="#f0e0ea" />
        </linearGradient>
        <linearGradient id="fsh-sk-sheen" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="40%" stopColor="#ffffff" stopOpacity="0.15" />
          <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <filter id="fsh-sk-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="fsh-sk-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <clipPath id="fsh-sk-clip"><rect width="91" height="55" /></clipPath>
      </defs>
      <rect width="91" height="55" fill="url(#fsh-sk-bg)" />
      <rect width="91" height="55" fill="url(#fsh-sk-sheen)" />
      <rect width="91" height="55" fill="transparent" filter="url(#fsh-sk-grain)" opacity="0.05" />
      {/* Flowing silk wave lines */}
      <g opacity="0.15" clipPath="url(#fsh-sk-clip)">
        <path d="M -5 20 Q 20 15 45 22 T 96 18" fill="none" stroke="#6B2D5B" strokeWidth="0.08" />
        <path d="M -5 25 Q 25 20 50 27 T 96 23" fill="none" stroke="#6B2D5B" strokeWidth="0.06" />
        <path d="M -5 30 Q 22 26 48 32 T 96 28" fill="none" stroke="#6B2D5B" strokeWidth="0.04" />
        <path d="M -5 35 Q 20 32 45 37 T 96 33" fill="none" stroke="#6B2D5B" strokeWidth="0.08" />
        <path d="M -5 40 Q 25 36 50 42 T 96 38" fill="none" stroke="#6B2D5B" strokeWidth="0.06" />
      </g>
      {/* Drape fold highlight */}
      <path d="M 30 0 Q 35 27.5 30 55" fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.12" />
      <path d="M 60 0 Q 55 27.5 60 55" fill="none" stroke="#ffffff" strokeWidth="0.3" opacity="0.08" />
      {/* Name */}
      <g filter="url(#fsh-sk-shadow)">
        <text x="45.5" y="20" textAnchor="middle" fontFamily="'Noto Sans JP', serif" fontWeight="300" fontSize="6" letterSpacing="1.5" fill="#4a1a3a">
          {data.nameJa}
        </text>
      </g>
      <text x="45.5" y="26.5" textAnchor="middle" fontFamily="'Inter', serif" fontWeight="200" fontSize="2" letterSpacing="1.2" fill="#8a5e7a">
        {data.nameEn.toUpperCase()}
      </text>
      {/* Title */}
      <text x="45.5" y="34" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#6B2D5B">
        {data.titleJa}
      </text>
      <text x="45.5" y="41" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="2" fill="#4a1a3a">
        {data.companyJa}
      </text>
      {/* Decorative pearl dots */}
      <g opacity="0.3">
        <circle cx="20" cy="47" r="0.3" fill="#c9a96e" />
        <circle cx="22" cy="47" r="0.2" fill="#c9a96e" />
        <circle cx="23.5" cy="47" r="0.15" fill="#c9a96e" />
      </g>
      {data.logo && <image href={data.logo} x="7" y="42" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="fsh-sk-bg-b" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3a1530" />
          <stop offset="50%" stopColor="#4a1a3a" />
          <stop offset="100%" stopColor="#351228" />
        </linearGradient>
        <linearGradient id="fsh-sk-sheen-b" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="40%" stopColor="#ffffff" stopOpacity="0.06" />
          <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <filter id="fsh-sk-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="fsh-sk-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#fsh-sk-bg-b)" />
      <rect width="91" height="55" fill="url(#fsh-sk-sheen-b)" />
      <rect width="91" height="55" fill="transparent" filter="url(#fsh-sk-grain-b)" opacity="0.08" />
      {/* Flowing silk lines */}
      <g opacity="0.1">
        <path d="M -5 15 Q 25 10 50 17 T 96 13" fill="none" stroke="#f0e0ea" strokeWidth="0.08" />
        <path d="M -5 40 Q 20 36 45 42 T 96 38" fill="none" stroke="#f0e0ea" strokeWidth="0.06" />
      </g>
      {/* Company block */}
      <g filter="url(#fsh-sk-shadow-b)">
        <text x="8" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.8" letterSpacing="0.3" fill="#f0e0ea">
          {data.companyJa}
        </text>
      </g>
      <text x="8" y="16.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.2" fill="#c9a96e">
        {data.companyEn}
      </text>
      <text x="8" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#c9a96e" opacity="0.7">
        {data.titleJa}
      </text>
      <line x1="8" y1="22" x2="83" y2="22" stroke="#c9a96e" strokeWidth="0.06" opacity="0.3" />
      <text x="8" y="27" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#f0e0ea">TEL: {data.tel}</text>
      <text x="8" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#f0e0ea">EMAIL: {data.email}</text>
      <text x="8" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#f0e0ea">WEB: {data.website}</text>
      <line x1="8" y1="38" x2="83" y2="38" stroke="#c9a96e" strokeWidth="0.06" opacity="0.3" />
      <text x="8" y="42.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#c9a96e">
        〒{data.zipCode}
      </text>
      <text x="8" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#c9a96e">
        {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="75" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 3. TWEED (綾) — Herringbone tweed texture
// Classic fabric texture with structured pattern overlay
// ============================================================
const tweedTemplate: TemplateDefinition = {
  id: 'fashion-tweed',
  name: 'TWEED',
  nameJa: '綾',
  category: 'fashion',
  designer: 'Rei Kawakubo',
  description: 'ツイードの温もり。英国仕立ての質感を纏う名刺。',
  accentColor: '#3D2B1F',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="fsh-tw-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f5f0e8" />
          <stop offset="50%" stopColor="#ede6da" />
          <stop offset="100%" stopColor="#e8e0d2" />
        </linearGradient>
        <pattern id="fsh-tw-herr" width="3" height="3" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="3" stroke="#c8bca8" strokeWidth="0.15" />
          <line x1="1.5" y1="0" x2="1.5" y2="3" stroke="#d0c4b0" strokeWidth="0.1" />
        </pattern>
        <filter id="fsh-tw-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="fsh-tw-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#fsh-tw-bg)" />
      <rect width="91" height="55" fill="url(#fsh-tw-herr)" opacity="0.3" />
      <rect width="91" height="55" fill="transparent" filter="url(#fsh-tw-grain)" opacity="0.08" />
      {/* Leather patch effect */}
      <rect x="8" y="10" width="40" height="22" rx="0.5" fill="#3D2B1F" opacity="0.05" />
      {/* Stitching around name area */}
      <rect x="8" y="10" width="40" height="22" rx="0.5" fill="none" stroke="#3D2B1F" strokeWidth="0.08" strokeDasharray="0.5 0.4" opacity="0.3" />
      {/* Name */}
      <g filter="url(#fsh-tw-shadow)">
        <text x="28" y="20" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="5.5" letterSpacing="0.8" fill="#3D2B1F">
          {data.nameJa}
        </text>
      </g>
      <text x="28" y="26" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.8" letterSpacing="0.8" fill="#7a6555">
        {data.nameEn.toUpperCase()}
      </text>
      {/* Right side info */}
      <text x="83" y="38" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#3D2B1F">
        {data.titleJa}
      </text>
      <text x="83" y="43" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2" fill="#3D2B1F">
        {data.companyJa}
      </text>
      {/* Button decorations */}
      <g opacity="0.25">
        <circle cx="78" cy="10" r="1.5" fill="none" stroke="#3D2B1F" strokeWidth="0.15" />
        <circle cx="78" cy="10" r="0.3" fill="#3D2B1F" />
        <line x1="77.4" y1="10" x2="78.6" y2="10" stroke="#3D2B1F" strokeWidth="0.08" />
        <line x1="78" y1="9.4" x2="78" y2="10.6" stroke="#3D2B1F" strokeWidth="0.08" />
      </g>
      {/* Woven edge accent */}
      <rect x="0" y="0" width="91" height="0.8" fill="#3D2B1F" opacity="0.7" />
      <rect x="0" y="54.2" width="91" height="0.8" fill="#3D2B1F" opacity="0.7" />
      {data.logo && <image href={data.logo} x="8" y="38" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="fsh-tw-bg-b" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3D2B1F" />
          <stop offset="50%" stopColor="#4a3628" />
          <stop offset="100%" stopColor="#362518" />
        </linearGradient>
        <pattern id="fsh-tw-herr-b" width="3" height="3" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="3" stroke="#5a4535" strokeWidth="0.15" />
          <line x1="1.5" y1="0" x2="1.5" y2="3" stroke="#4d3a2c" strokeWidth="0.1" />
        </pattern>
        <filter id="fsh-tw-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="fsh-tw-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#fsh-tw-bg-b)" />
      <rect width="91" height="55" fill="url(#fsh-tw-herr-b)" opacity="0.3" />
      <rect width="91" height="55" fill="transparent" filter="url(#fsh-tw-grain-b)" opacity="0.08" />
      <g filter="url(#fsh-tw-shadow-b)">
        <text x="8" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.8" letterSpacing="0.3" fill="#f5f0e8">
          {data.companyJa}
        </text>
      </g>
      <text x="8" y="16.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.2" fill="#c8bca8">
        {data.companyEn}
      </text>
      <text x="8" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#c8bca8" opacity="0.7">
        {data.titleJa}
      </text>
      <line x1="8" y1="22" x2="83" y2="22" stroke="#c8bca8" strokeWidth="0.06" opacity="0.4" />
      <text x="8" y="27" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#f5f0e8">TEL: {data.tel}</text>
      <text x="8" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#f5f0e8">EMAIL: {data.email}</text>
      <text x="8" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#f5f0e8">WEB: {data.website}</text>
      <line x1="8" y1="38" x2="83" y2="38" stroke="#c8bca8" strokeWidth="0.06" opacity="0.4" />
      <text x="8" y="42.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#c8bca8">
        〒{data.zipCode}
      </text>
      <text x="8" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#c8bca8">
        {data.addressJa}
      </text>
      {/* Stitching decoration */}
      <line x1="5" y1="3" x2="86" y2="3" stroke="#c8bca8" strokeWidth="0.08" strokeDasharray="0.5 0.4" opacity="0.3" />
      <line x1="5" y1="52" x2="86" y2="52" stroke="#c8bca8" strokeWidth="0.08" strokeDasharray="0.5 0.4" opacity="0.3" />
      {data.logo && <image href={data.logo} x="75" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 4. LACE (紗) — Delicate lace pattern overlay
// Intricate lace-like SVG patterns with transparency
// ============================================================
const laceTemplate: TemplateDefinition = {
  id: 'fashion-lace',
  name: 'LACE',
  nameJa: '紗',
  category: 'fashion',
  designer: 'Valentino Garavani',
  description: 'レースの繊細さ。透ける美しさと上品な陰影。',
  accentColor: '#2D1B2E',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="fsh-lc-bg" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#faf5f8" />
          <stop offset="100%" stopColor="#f0e8ed" />
        </radialGradient>
        <pattern id="fsh-lc-pat" width="5" height="5" patternUnits="userSpaceOnUse">
          <circle cx="2.5" cy="2.5" r="2" fill="none" stroke="#d0b8c8" strokeWidth="0.04" />
          <circle cx="0" cy="0" r="1.2" fill="none" stroke="#d0b8c8" strokeWidth="0.03" />
          <circle cx="5" cy="0" r="1.2" fill="none" stroke="#d0b8c8" strokeWidth="0.03" />
          <circle cx="0" cy="5" r="1.2" fill="none" stroke="#d0b8c8" strokeWidth="0.03" />
          <circle cx="5" cy="5" r="1.2" fill="none" stroke="#d0b8c8" strokeWidth="0.03" />
          <line x1="1" y1="1" x2="4" y2="4" stroke="#d0b8c8" strokeWidth="0.02" />
          <line x1="4" y1="1" x2="1" y2="4" stroke="#d0b8c8" strokeWidth="0.02" />
        </pattern>
        <filter id="fsh-lc-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="fsh-lc-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#fsh-lc-bg)" />
      {/* Lace overlay on edges */}
      <rect x="0" y="0" width="15" height="55" fill="url(#fsh-lc-pat)" opacity="0.4" />
      <rect x="76" y="0" width="15" height="55" fill="url(#fsh-lc-pat)" opacity="0.4" />
      <rect x="15" y="0" width="61" height="8" fill="url(#fsh-lc-pat)" opacity="0.25" />
      <rect x="15" y="47" width="61" height="8" fill="url(#fsh-lc-pat)" opacity="0.25" />
      <rect width="91" height="55" fill="transparent" filter="url(#fsh-lc-grain)" opacity="0.05" />
      {/* Central clear area for text */}
      <g filter="url(#fsh-lc-shadow)">
        <text x="45.5" y="22" textAnchor="middle" fontFamily="'Noto Sans JP', serif" fontWeight="300" fontSize="6.5" letterSpacing="1.5" fill="#2D1B2E">
          {data.nameJa}
        </text>
      </g>
      <text x="45.5" y="28.5" textAnchor="middle" fontFamily="'Inter', serif" fontWeight="200" fontSize="2" letterSpacing="1" fill="#7a5a72">
        {data.nameEn.toUpperCase()}
      </text>
      <text x="45.5" y="35" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#5a3a52">
        {data.titleJa}
      </text>
      {/* Decorative lace divider */}
      <g opacity="0.4">
        <line x1="30" y1="38" x2="61" y2="38" stroke="#2D1B2E" strokeWidth="0.04" />
        <circle cx="37" cy="38" r="0.4" fill="none" stroke="#2D1B2E" strokeWidth="0.04" />
        <circle cx="45.5" cy="38" r="0.5" fill="none" stroke="#2D1B2E" strokeWidth="0.05" />
        <circle cx="54" cy="38" r="0.4" fill="none" stroke="#2D1B2E" strokeWidth="0.04" />
      </g>
      <text x="45.5" y="43" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2" fill="#2D1B2E">
        {data.companyJa}
      </text>
      {data.logo && <image href={data.logo} x="7" y="22" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="fsh-lc-bg-b" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#2D1B2E" />
          <stop offset="100%" stopColor="#1a0f1b" />
        </radialGradient>
        <pattern id="fsh-lc-pat-b" width="5" height="5" patternUnits="userSpaceOnUse">
          <circle cx="2.5" cy="2.5" r="2" fill="none" stroke="#5a3a52" strokeWidth="0.04" />
          <circle cx="0" cy="0" r="1.2" fill="none" stroke="#5a3a52" strokeWidth="0.03" />
          <circle cx="5" cy="0" r="1.2" fill="none" stroke="#5a3a52" strokeWidth="0.03" />
          <circle cx="0" cy="5" r="1.2" fill="none" stroke="#5a3a52" strokeWidth="0.03" />
          <circle cx="5" cy="5" r="1.2" fill="none" stroke="#5a3a52" strokeWidth="0.03" />
        </pattern>
        <filter id="fsh-lc-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="fsh-lc-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#fsh-lc-bg-b)" />
      <rect x="0" y="0" width="12" height="55" fill="url(#fsh-lc-pat-b)" opacity="0.3" />
      <rect x="79" y="0" width="12" height="55" fill="url(#fsh-lc-pat-b)" opacity="0.3" />
      <rect width="91" height="55" fill="transparent" filter="url(#fsh-lc-grain-b)" opacity="0.08" />
      <g filter="url(#fsh-lc-shadow-b)">
        <text x="8" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.8" letterSpacing="0.3" fill="#f0e8ed">
          {data.companyJa}
        </text>
      </g>
      <text x="8" y="16.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.2" fill="#d0b8c8">
        {data.companyEn}
      </text>
      <text x="8" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#d0b8c8" opacity="0.7">
        {data.titleJa}
      </text>
      <line x1="8" y1="22" x2="83" y2="22" stroke="#d0b8c8" strokeWidth="0.06" opacity="0.3" />
      <text x="8" y="27" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#f0e8ed">TEL: {data.tel}</text>
      <text x="8" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#f0e8ed">EMAIL: {data.email}</text>
      <text x="8" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#f0e8ed">WEB: {data.website}</text>
      <line x1="8" y1="38" x2="83" y2="38" stroke="#d0b8c8" strokeWidth="0.06" opacity="0.3" />
      <text x="8" y="42.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#d0b8c8">
        〒{data.zipCode}
      </text>
      <text x="8" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#d0b8c8">
        {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="75" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 5. VELVET (天鵞絨) — Rich velvet depth
// Deep luxurious colors with velvety texture
// ============================================================
const velvetTemplate: TemplateDefinition = {
  id: 'fashion-velvet',
  name: 'VELVET',
  nameJa: '天鵞絨',
  category: 'fashion',
  designer: 'Tom Ford',
  description: 'ベルベットの深み。豪華でありながら洗練された佇まい。',
  accentColor: '#1a0a2e',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="fsh-vl-bg" cx="30%" cy="40%" r="80%">
          <stop offset="0%" stopColor="#2a1245" />
          <stop offset="40%" stopColor="#1a0a2e" />
          <stop offset="100%" stopColor="#0f0620" />
        </radialGradient>
        <radialGradient id="fsh-vl-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <filter id="fsh-vl-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="fsh-vl-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#fsh-vl-bg)" />
      <rect width="91" height="55" fill="url(#fsh-vl-glow)" />
      <rect width="91" height="55" fill="transparent" filter="url(#fsh-vl-grain)" opacity="0.1" />
      {/* Velvet sheen effect - vertical light streak */}
      <rect x="25" y="0" width="20" height="55" fill="url(#fsh-vl-glow)" opacity="0.5" />
      {/* Gold filigree border */}
      <rect x="4" y="4" width="83" height="47" fill="none" stroke="#c9a96e" strokeWidth="0.06" opacity="0.3" />
      <rect x="5.5" y="5.5" width="80" height="44" fill="none" stroke="#c9a96e" strokeWidth="0.03" opacity="0.2" />
      {/* Corner ornaments */}
      <g stroke="#c9a96e" strokeWidth="0.08" opacity="0.4" fill="none">
        <path d="M 6 8 C 6 6 8 6 8 6" />
        <path d="M 83 6 C 85 6 85 8 85 8" />
        <path d="M 85 47 C 85 49 83 49 83 49" />
        <path d="M 8 49 C 6 49 6 47 6 47" />
      </g>
      {/* Name */}
      <g filter="url(#fsh-vl-shadow)">
        <text x="45.5" y="22" textAnchor="middle" fontFamily="'Noto Sans JP', serif" fontWeight="300" fontSize="6.5" letterSpacing="1.5" fill="#e8d5b5">
          {data.nameJa}
        </text>
      </g>
      <text x="45.5" y="28.5" textAnchor="middle" fontFamily="'Inter', serif" fontWeight="200" fontSize="2.2" letterSpacing="1.2" fill="#c9a96e">
        {data.nameEn.toUpperCase()}
      </text>
      <line x1="28" y1="32" x2="63" y2="32" stroke="#c9a96e" strokeWidth="0.04" opacity="0.4" />
      <text x="45.5" y="37" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.7" fill="#a08060">
        {data.titleJa}
      </text>
      <text x="45.5" y="43" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="2" fill="#e8d5b5">
        {data.companyJa}
      </text>
      {/* Decorative diamond */}
      <g opacity="0.3" transform="translate(45.5, 11)">
        <rect x="-1.2" y="-1.2" width="2.4" height="2.4" fill="none" stroke="#c9a96e" strokeWidth="0.05" transform="rotate(45)" />
      </g>
      {data.logo && <image href={data.logo} x="7" y="40" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="fsh-vl-bg-b" cx="70%" cy="60%" r="80%">
          <stop offset="0%" stopColor="#2a1245" />
          <stop offset="40%" stopColor="#1a0a2e" />
          <stop offset="100%" stopColor="#0f0620" />
        </radialGradient>
        <filter id="fsh-vl-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="fsh-vl-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#fsh-vl-bg-b)" />
      <rect width="91" height="55" fill="transparent" filter="url(#fsh-vl-grain-b)" opacity="0.1" />
      <rect x="4" y="4" width="83" height="47" fill="none" stroke="#c9a96e" strokeWidth="0.06" opacity="0.3" />
      <g filter="url(#fsh-vl-shadow-b)">
        <text x="8" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.8" letterSpacing="0.3" fill="#e8d5b5">
          {data.companyJa}
        </text>
      </g>
      <text x="8" y="16.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.2" fill="#c9a96e">
        {data.companyEn}
      </text>
      <text x="8" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#c9a96e" opacity="0.7">
        {data.titleJa}
      </text>
      <line x1="8" y1="22" x2="83" y2="22" stroke="#c9a96e" strokeWidth="0.06" opacity="0.3" />
      <text x="8" y="27" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#e8d5b5">TEL: {data.tel}</text>
      <text x="8" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#e8d5b5">EMAIL: {data.email}</text>
      <text x="8" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#e8d5b5">WEB: {data.website}</text>
      <line x1="8" y1="38" x2="83" y2="38" stroke="#c9a96e" strokeWidth="0.06" opacity="0.3" />
      <text x="8" y="42.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#c9a96e">
        〒{data.zipCode}
      </text>
      <text x="8" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#c9a96e">
        {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="75" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 6. PLEAT (襞) — Issey Miyake-inspired pleats
// Geometric fold lines creating rhythm and dimension
// ============================================================
const pleatTemplate: TemplateDefinition = {
  id: 'fashion-pleat',
  name: 'PLEAT',
  nameJa: '襞',
  category: 'fashion',
  designer: 'Issey Miyake',
  description: 'プリーツの律動。折りが生む光と影のリズム。',
  accentColor: '#2C3E50',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="fsh-pl-bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f2f0ed" />
          <stop offset="100%" stopColor="#e8e4de" />
        </linearGradient>
        <filter id="fsh-pl-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="fsh-pl-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <clipPath id="fsh-pl-clip"><rect width="91" height="55" /></clipPath>
      </defs>
      <rect width="91" height="55" fill="url(#fsh-pl-bg)" />
      <rect width="91" height="55" fill="transparent" filter="url(#fsh-pl-grain)" opacity="0.06" />
      {/* Pleat fold lines - alternating light/shadow */}
      <g clipPath="url(#fsh-pl-clip)" opacity="0.15">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
          <g key={i}>
            <line x1={i * 7} y1="0" x2={i * 7} y2="55" stroke={i % 2 === 0 ? '#2C3E50' : '#ffffff'} strokeWidth={i % 2 === 0 ? '0.3' : '0.5'} />
            <rect x={i * 7} y="0" width="3.5" height="55" fill={i % 2 === 0 ? '#000000' : '#ffffff'} opacity="0.02" />
          </g>
        ))}
      </g>
      {/* Name centered */}
      <g filter="url(#fsh-pl-shadow)">
        <text x="45.5" y="21" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6" letterSpacing="1" fill="#2C3E50">
          {data.nameJa}
        </text>
      </g>
      <text x="45.5" y="27.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2" letterSpacing="1" fill="#6a7b8c">
        {data.nameEn.toUpperCase()}
      </text>
      <text x="45.5" y="35" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#4a5a6a">
        {data.titleJa}
      </text>
      <text x="45.5" y="42" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="2" fill="#2C3E50">
        {data.companyJa}
      </text>
      {/* Folded paper corner decoration */}
      <path d="M 83 0 L 91 0 L 91 8 Z" fill="#d8d2c8" opacity="0.4" />
      <line x1="83" y1="0" x2="91" y2="8" stroke="#b0a898" strokeWidth="0.08" opacity="0.3" />
      {data.logo && <image href={data.logo} x="7" y="40" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="fsh-pl-bg-b" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2C3E50" />
          <stop offset="100%" stopColor="#1a2a3a" />
        </linearGradient>
        <filter id="fsh-pl-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="fsh-pl-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <clipPath id="fsh-pl-clip-b"><rect width="91" height="55" /></clipPath>
      </defs>
      <rect width="91" height="55" fill="url(#fsh-pl-bg-b)" />
      <rect width="91" height="55" fill="transparent" filter="url(#fsh-pl-grain-b)" opacity="0.08" />
      {/* Pleat fold lines */}
      <g clipPath="url(#fsh-pl-clip-b)" opacity="0.08">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
          <line key={i} x1={i * 7} y1="0" x2={i * 7} y2="55" stroke="#ffffff" strokeWidth="0.3" />
        ))}
      </g>
      <g filter="url(#fsh-pl-shadow-b)">
        <text x="8" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.8" letterSpacing="0.3" fill="#f2f0ed">
          {data.companyJa}
        </text>
      </g>
      <text x="8" y="16.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.2" fill="#8a9bac">
        {data.companyEn}
      </text>
      <text x="8" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#8a9bac" opacity="0.7">
        {data.titleJa}
      </text>
      <line x1="8" y1="22" x2="83" y2="22" stroke="#8a9bac" strokeWidth="0.06" opacity="0.3" />
      <text x="8" y="27" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#f2f0ed">TEL: {data.tel}</text>
      <text x="8" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#f2f0ed">EMAIL: {data.email}</text>
      <text x="8" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#f2f0ed">WEB: {data.website}</text>
      <line x1="8" y1="38" x2="83" y2="38" stroke="#8a9bac" strokeWidth="0.06" opacity="0.3" />
      <text x="8" y="42.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#8a9bac">
        〒{data.zipCode}
      </text>
      <text x="8" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#8a9bac">
        {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="75" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 7. DENIM (藍布) — Japanese denim indigo
// Raw selvedge denim texture with sashiko-inspired details
// ============================================================
const denimTemplate: TemplateDefinition = {
  id: 'fashion-denim',
  name: 'DENIM',
  nameJa: '藍布',
  category: 'fashion',
  designer: 'Yohji Yamamoto',
  description: '生デニムの風合い。藍染めの深い青と時間の味わい。',
  accentColor: '#1B3A5C',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="fsh-dn-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1B3A5C" />
          <stop offset="30%" stopColor="#1e4068" />
          <stop offset="70%" stopColor="#193660" />
          <stop offset="100%" stopColor="#162e50" />
        </linearGradient>
        <pattern id="fsh-dn-twill" width="1" height="1" patternUnits="userSpaceOnUse" patternTransform="rotate(30)">
          <line x1="0" y1="0.5" x2="1" y2="0.5" stroke="#2a4a6c" strokeWidth="0.3" />
        </pattern>
        <filter id="fsh-dn-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="fsh-dn-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#fsh-dn-bg)" />
      <rect width="91" height="55" fill="url(#fsh-dn-twill)" opacity="0.15" />
      <rect width="91" height="55" fill="transparent" filter="url(#fsh-dn-grain)" opacity="0.12" />
      {/* Selvedge edge - red/white stripe */}
      <rect x="0" y="0" width="1.2" height="55" fill="#1B3A5C" />
      <rect x="0.15" y="0" width="0.25" height="55" fill="#c0392b" opacity="0.7" />
      <rect x="0.55" y="0" width="0.15" height="55" fill="#ffffff" opacity="0.5" />
      {/* Sashiko stitch pattern - cross design */}
      <g stroke="#5a8aac" strokeWidth="0.08" opacity="0.25" strokeDasharray="0.4 0.5">
        <line x1="70" y1="8" x2="85" y2="8" />
        <line x1="70" y1="10" x2="85" y2="10" />
        <line x1="70" y1="12" x2="85" y2="12" />
        <line x1="77.5" y1="5" x2="77.5" y2="15" />
      </g>
      {/* Name */}
      <g filter="url(#fsh-dn-shadow)">
        <text x="45.5" y="22" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6" letterSpacing="1" fill="#e8dcc8">
          {data.nameJa}
        </text>
      </g>
      <text x="45.5" y="28.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.8" fill="#8aaac8">
        {data.nameEn.toUpperCase()}
      </text>
      <text x="45.5" y="37" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#8aaac8">
        {data.titleJa}
      </text>
      <text x="45.5" y="44" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="2" fill="#e8dcc8">
        {data.companyJa}
      </text>
      {/* Rivets decoration */}
      <g opacity="0.4">
        <circle cx="6" cy="6" r="0.8" fill="none" stroke="#c9a96e" strokeWidth="0.12" />
        <circle cx="6" cy="6" r="0.2" fill="#c9a96e" />
        <circle cx="85" cy="49" r="0.8" fill="none" stroke="#c9a96e" strokeWidth="0.12" />
        <circle cx="85" cy="49" r="0.2" fill="#c9a96e" />
      </g>
      {data.logo && <image href={data.logo} x="7" y="40" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="fsh-dn-bg-b" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8dcc8" />
          <stop offset="50%" stopColor="#f0e6d4" />
          <stop offset="100%" stopColor="#e5d8c2" />
        </linearGradient>
        <filter id="fsh-dn-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="fsh-dn-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#fsh-dn-bg-b)" />
      <rect width="91" height="55" fill="transparent" filter="url(#fsh-dn-grain-b)" opacity="0.06" />
      {/* Selvedge on back too */}
      <rect x="89.65" y="0" width="1.2" height="55" fill="#e8dcc8" />
      <rect x="90.45" y="0" width="0.25" height="55" fill="#c0392b" opacity="0.5" />
      <rect x="90.15" y="0" width="0.15" height="55" fill="#1B3A5C" opacity="0.3" />
      <g filter="url(#fsh-dn-shadow-b)">
        <text x="8" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.8" letterSpacing="0.3" fill="#1B3A5C">
          {data.companyJa}
        </text>
      </g>
      <text x="8" y="16.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.2" fill="#4a6a8c">
        {data.companyEn}
      </text>
      <text x="8" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#4a6a8c" opacity="0.7">
        {data.titleJa}
      </text>
      <line x1="8" y1="22" x2="83" y2="22" stroke="#1B3A5C" strokeWidth="0.06" opacity="0.3" />
      <text x="8" y="27" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#1B3A5C">TEL: {data.tel}</text>
      <text x="8" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#1B3A5C">EMAIL: {data.email}</text>
      <text x="8" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#1B3A5C">WEB: {data.website}</text>
      <line x1="8" y1="38" x2="83" y2="38" stroke="#1B3A5C" strokeWidth="0.06" opacity="0.3" />
      <text x="8" y="42.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#4a6a8c">
        〒{data.zipCode}
      </text>
      <text x="8" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#4a6a8c">
        {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="75" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 8. PEARL (真珠) — Luminous pearl iridescence
// Soft iridescent glow with mother-of-pearl shimmer
// ============================================================
const pearlTemplate: TemplateDefinition = {
  id: 'fashion-pearl',
  name: 'PEARL',
  nameJa: '真珠',
  category: 'fashion',
  designer: 'Mikimoto Kokichi',
  description: '真珠の輝き。虹色に揺れる上品な光沢。',
  accentColor: '#4a4a5a',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="fsh-pr-bg" cx="40%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#faf8fa" />
          <stop offset="40%" stopColor="#f0eef2" />
          <stop offset="100%" stopColor="#e8e4ec" />
        </radialGradient>
        <radialGradient id="fsh-pr-shim" cx="60%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#f5e6f0" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#e6f0f5" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#f5f0e6" stopOpacity="0" />
        </radialGradient>
        <filter id="fsh-pr-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="fsh-pr-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#fsh-pr-bg)" />
      <rect width="91" height="55" fill="url(#fsh-pr-shim)" />
      <rect width="91" height="55" fill="transparent" filter="url(#fsh-pr-grain)" opacity="0.04" />
      {/* Concentric pearl rings decoration */}
      <g opacity="0.08">
        <circle cx="75" cy="12" r="15" fill="none" stroke="#8a7aaa" strokeWidth="0.06" />
        <circle cx="75" cy="12" r="12" fill="none" stroke="#8a7aaa" strokeWidth="0.05" />
        <circle cx="75" cy="12" r="9" fill="none" stroke="#8a7aaa" strokeWidth="0.04" />
        <circle cx="75" cy="12" r="6" fill="none" stroke="#8a7aaa" strokeWidth="0.03" />
      </g>
      {/* Name */}
      <g filter="url(#fsh-pr-shadow)">
        <text x="35" y="22" textAnchor="middle" fontFamily="'Noto Sans JP', serif" fontWeight="300" fontSize="6" letterSpacing="1.2" fill="#3a3a4a">
          {data.nameJa}
        </text>
      </g>
      <text x="35" y="28" textAnchor="middle" fontFamily="'Inter', serif" fontWeight="200" fontSize="2" letterSpacing="1" fill="#7a7a8a">
        {data.nameEn.toUpperCase()}
      </text>
      {/* Subtle iridescent line */}
      <linearGradient id="fsh-pr-line" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#d4a8c8" stopOpacity="0.4" />
        <stop offset="33%" stopColor="#a8c8d4" stopOpacity="0.4" />
        <stop offset="66%" stopColor="#c8d4a8" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#d4a8c8" stopOpacity="0.4" />
      </linearGradient>
      <line x1="10" y1="32" x2="60" y2="32" stroke="url(#fsh-pr-line)" strokeWidth="0.08" />
      <text x="35" y="38" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#5a5a6a">
        {data.titleJa}
      </text>
      <text x="35" y="44.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="2" fill="#3a3a4a">
        {data.companyJa}
      </text>
      {/* Pearl dot accents */}
      <g opacity="0.2">
        <circle cx="8" cy="8" r="0.6" fill="#d0c0e0" />
        <circle cx="83" cy="47" r="0.5" fill="#d0c0e0" />
        <circle cx="82" cy="45" r="0.3" fill="#d0c0e0" />
      </g>
      {data.logo && <image href={data.logo} x="75" y="35" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="fsh-pr-bg-b" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#4a4a5a" />
          <stop offset="100%" stopColor="#3a3a4a" />
        </radialGradient>
        <radialGradient id="fsh-pr-shim-b" cx="40%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#6a5a7a" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#5a6a7a" stopOpacity="0" />
        </radialGradient>
        <filter id="fsh-pr-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="fsh-pr-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#fsh-pr-bg-b)" />
      <rect width="91" height="55" fill="url(#fsh-pr-shim-b)" />
      <rect width="91" height="55" fill="transparent" filter="url(#fsh-pr-grain-b)" opacity="0.08" />
      <g filter="url(#fsh-pr-shadow-b)">
        <text x="8" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.8" letterSpacing="0.3" fill="#f0eef2">
          {data.companyJa}
        </text>
      </g>
      <text x="8" y="16.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.2" fill="#b0a8c0">
        {data.companyEn}
      </text>
      <text x="8" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#b0a8c0" opacity="0.7">
        {data.titleJa}
      </text>
      <line x1="8" y1="22" x2="83" y2="22" stroke="#b0a8c0" strokeWidth="0.06" opacity="0.3" />
      <text x="8" y="27" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#f0eef2">TEL: {data.tel}</text>
      <text x="8" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#f0eef2">EMAIL: {data.email}</text>
      <text x="8" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#f0eef2">WEB: {data.website}</text>
      <line x1="8" y1="38" x2="83" y2="38" stroke="#b0a8c0" strokeWidth="0.06" opacity="0.3" />
      <text x="8" y="42.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#b0a8c0">
        〒{data.zipCode}
      </text>
      <text x="8" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#b0a8c0">
        {data.addressJa}
      </text>
      {/* Iridescent ring on back */}
      <g opacity="0.1">
        <circle cx="78" cy="45" r="8" fill="none" stroke="#d0c0e0" strokeWidth="0.06" />
        <circle cx="78" cy="45" r="5" fill="none" stroke="#c0d0e0" strokeWidth="0.04" />
      </g>
      {data.logo && <image href={data.logo} x="75" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 9. NOIR (黒) — Total black minimalism
// Monochromatic black on black with subtle textures
// ============================================================
const noirTemplate: TemplateDefinition = {
  id: 'fashion-noir',
  name: 'NOIR',
  nameJa: '黒',
  category: 'fashion',
  designer: 'Yohji Yamamoto',
  description: '漆黒の中の存在。黒の中に潜む無限の表情。',
  accentColor: '#0a0a0a',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="fsh-nr-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#141414" />
          <stop offset="50%" stopColor="#0a0a0a" />
          <stop offset="100%" stopColor="#111111" />
        </linearGradient>
        <radialGradient id="fsh-nr-spot" cx="45%" cy="40%" r="40%">
          <stop offset="0%" stopColor="#1c1c1c" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </radialGradient>
        <filter id="fsh-nr-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="fsh-nr-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#fff" floodOpacity="0.04" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#fsh-nr-bg)" />
      <rect width="91" height="55" fill="url(#fsh-nr-spot)" />
      <rect width="91" height="55" fill="transparent" filter="url(#fsh-nr-grain)" opacity="0.15" />
      {/* Subtle frame - barely visible */}
      <rect x="5" y="5" width="81" height="45" fill="none" stroke="#222222" strokeWidth="0.08" />
      {/* Name in subtle silver */}
      <g filter="url(#fsh-nr-shadow)">
        <text x="45.5" y="23" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="6.5" letterSpacing="1.5" fill="#888888">
          {data.nameJa}
        </text>
      </g>
      <text x="45.5" y="29.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="2" letterSpacing="1.2" fill="#555555">
        {data.nameEn.toUpperCase()}
      </text>
      <text x="45.5" y="37" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#444444">
        {data.titleJa}
      </text>
      <text x="45.5" y="43.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#666666">
        {data.companyJa}
      </text>
      {/* Tiny accent mark */}
      <rect x="44.5" y="14" width="2" height="0.15" fill="#333333" />
      {data.logo && <image href={data.logo} x="7" y="8" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.3" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="fsh-nr-bg-b" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#141414" />
          <stop offset="50%" stopColor="#0a0a0a" />
          <stop offset="100%" stopColor="#111111" />
        </linearGradient>
        <filter id="fsh-nr-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="fsh-nr-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#fff" floodOpacity="0.04" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#fsh-nr-bg-b)" />
      <rect width="91" height="55" fill="transparent" filter="url(#fsh-nr-grain-b)" opacity="0.15" />
      <rect x="5" y="5" width="81" height="45" fill="none" stroke="#222222" strokeWidth="0.08" />
      <g filter="url(#fsh-nr-shadow-b)">
        <text x="8" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.8" letterSpacing="0.3" fill="#888888">
          {data.companyJa}
        </text>
      </g>
      <text x="8" y="16.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.2" fill="#555555">
        {data.companyEn}
      </text>
      <text x="8" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#555555" opacity="0.7">
        {data.titleJa}
      </text>
      <line x1="8" y1="22" x2="83" y2="22" stroke="#222222" strokeWidth="0.06" />
      <text x="8" y="27" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#777777">TEL: {data.tel}</text>
      <text x="8" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#777777">EMAIL: {data.email}</text>
      <text x="8" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#777777">WEB: {data.website}</text>
      <line x1="8" y1="38" x2="83" y2="38" stroke="#222222" strokeWidth="0.06" />
      <text x="8" y="42.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#555555">
        〒{data.zipCode}
      </text>
      <text x="8" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#555555">
        {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="75" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.3" />}
    </g>
  ),
};

// ============================================================
// 10. KIMONO (着物) — Traditional Japanese kimono patterns
// Geometric patterns inspired by kimono textiles
// ============================================================
const kimonoTemplate: TemplateDefinition = {
  id: 'fashion-kimono',
  name: 'KIMONO',
  nameJa: '着物',
  category: 'fashion',
  designer: 'Hanae Mori',
  description: '着物の紋様。日本の伝統美を現代に織り込む。',
  accentColor: '#8B2252',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="fsh-km-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#faf5f0" />
          <stop offset="100%" stopColor="#f5ece2" />
        </linearGradient>
        <pattern id="fsh-km-asanoha" width="6" height="6" patternUnits="userSpaceOnUse">
          <path d="M 3 0 L 6 3 L 3 6 L 0 3 Z" fill="none" stroke="#8B2252" strokeWidth="0.04" />
          <line x1="3" y1="0" x2="3" y2="6" stroke="#8B2252" strokeWidth="0.03" />
          <line x1="0" y1="3" x2="6" y2="3" stroke="#8B2252" strokeWidth="0.03" />
        </pattern>
        <filter id="fsh-km-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="fsh-km-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <clipPath id="fsh-km-clip"><rect width="91" height="55" /></clipPath>
      </defs>
      <rect width="91" height="55" fill="url(#fsh-km-bg)" />
      <rect width="91" height="55" fill="transparent" filter="url(#fsh-km-grain)" opacity="0.05" />
      {/* Asanoha pattern on left panel */}
      <g clipPath="url(#fsh-km-clip)">
        <rect x="0" y="0" width="25" height="55" fill="url(#fsh-km-asanoha)" opacity="0.15" />
      </g>
      {/* Obi-like band */}
      <rect x="22" y="0" width="3" height="55" fill="#8B2252" opacity="0.08" />
      <line x1="22" y1="0" x2="22" y2="55" stroke="#8B2252" strokeWidth="0.08" opacity="0.4" />
      <line x1="25" y1="0" x2="25" y2="55" stroke="#8B2252" strokeWidth="0.06" opacity="0.3" />
      {/* Name */}
      <g filter="url(#fsh-km-shadow)">
        <text x="58" y="21" textAnchor="middle" fontFamily="'Noto Sans JP', serif" fontWeight="400" fontSize="6" letterSpacing="1" fill="#3a1520">
          {data.nameJa}
        </text>
      </g>
      <text x="58" y="27.5" textAnchor="middle" fontFamily="'Inter', serif" fontWeight="300" fontSize="2" letterSpacing="0.8" fill="#8B2252">
        {data.nameEn.toUpperCase()}
      </text>
      <text x="58" y="35" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#6a3a4a">
        {data.titleJa}
      </text>
      <text x="58" y="42" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="2" fill="#3a1520">
        {data.companyJa}
      </text>
      {/* Kamon-style circle */}
      <g opacity="0.2">
        <circle cx="11" cy="12" r="4" fill="none" stroke="#8B2252" strokeWidth="0.1" />
        <circle cx="11" cy="12" r="2.5" fill="none" stroke="#8B2252" strokeWidth="0.06" />
        <circle cx="11" cy="12" r="1" fill="none" stroke="#8B2252" strokeWidth="0.04" />
      </g>
      {data.logo && <image href={data.logo} x="7" y="40" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="fsh-km-bg-b" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3a1520" />
          <stop offset="50%" stopColor="#4a1828" />
          <stop offset="100%" stopColor="#301018" />
        </linearGradient>
        <pattern id="fsh-km-asanoha-b" width="6" height="6" patternUnits="userSpaceOnUse">
          <path d="M 3 0 L 6 3 L 3 6 L 0 3 Z" fill="none" stroke="#6a3a4a" strokeWidth="0.04" />
          <line x1="3" y1="0" x2="3" y2="6" stroke="#6a3a4a" strokeWidth="0.03" />
          <line x1="0" y1="3" x2="6" y2="3" stroke="#6a3a4a" strokeWidth="0.03" />
        </pattern>
        <filter id="fsh-km-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="fsh-km-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#fsh-km-bg-b)" />
      <rect x="66" y="0" width="25" height="55" fill="url(#fsh-km-asanoha-b)" opacity="0.15" />
      <rect width="91" height="55" fill="transparent" filter="url(#fsh-km-grain-b)" opacity="0.08" />
      <g filter="url(#fsh-km-shadow-b)">
        <text x="8" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.8" letterSpacing="0.3" fill="#f5ece2">
          {data.companyJa}
        </text>
      </g>
      <text x="8" y="16.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.2" fill="#c9a0a8">
        {data.companyEn}
      </text>
      <text x="8" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#c9a0a8" opacity="0.7">
        {data.titleJa}
      </text>
      <line x1="8" y1="22" x2="60" y2="22" stroke="#c9a0a8" strokeWidth="0.06" opacity="0.3" />
      <text x="8" y="27" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#f5ece2">TEL: {data.tel}</text>
      <text x="8" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#f5ece2">EMAIL: {data.email}</text>
      <text x="8" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#f5ece2">WEB: {data.website}</text>
      <line x1="8" y1="38" x2="60" y2="38" stroke="#c9a0a8" strokeWidth="0.06" opacity="0.3" />
      <text x="8" y="42.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#c9a0a8">
        〒{data.zipCode}
      </text>
      <text x="8" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#c9a0a8">
        {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="75" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

export const fashionTemplates: TemplateDefinition[] = [
  coutureTemplate,
  silkTemplate,
  tweedTemplate,
  laceTemplate,
  velvetTemplate,
  pleatTemplate,
  denimTemplate,
  pearlTemplate,
  noirTemplate,
  kimonoTemplate,
];
