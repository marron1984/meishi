import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. KATACHI (形) — Kashiwa Sato
// Bold red top bar, geometric confidence
// ============================================================
const katachiTemplate: TemplateDefinition = {
  id: 'katachi',
  name: 'KATACHI',
  nameJa: '形',
  category: 'geometric',
  designer: 'Kashiwa Sato',
  description: '大胆な赤のバーと幾何学的な自信。形の力強さ。',
  accentColor: '#E60012',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="geometric-katachi-paper" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" seed="2" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" result="paper" />
        </filter>
        <filter id="geometric-katachi-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.5" result="blur" />
          <feOffset dx="0.3" dy="0.3" in="blur" result="offsetBlur" />
          <feFlood floodColor="#000000" floodOpacity="0.15" result="color" />
          <feComposite in="color" in2="offsetBlur" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="geometric-katachi-redGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#E60012" />
          <stop offset="100%" stopColor="#C2000F" />
        </linearGradient>
        <linearGradient id="geometric-katachi-barShine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#FAFAFA" filter="url(#geometric-katachi-paper)" />
      {/* Bold red top bar with gradient */}
      <rect x="0" y="0" width="91" height="14" fill="url(#geometric-katachi-redGrad)" />
      <rect x="0" y="0" width="91" height="14" fill="url(#geometric-katachi-barShine)" />
      {/* Geometric square accents in bar */}
      <rect x="74" y="2" width="10" height="10" fill="#ffffff" opacity="0.08" />
      <rect x="77" y="4" width="5" height="5" fill="#ffffff" opacity="0.15" rx="0.3" />
      <rect x="79" y="6" width="1.5" height="1.5" fill="#ffffff" opacity="0.4" />
      {/* Thin gold accent line below bar */}
      <line x1="0" y1="14.3" x2="91" y2="14.3" stroke="#D4A853" strokeWidth="0.25" opacity="0.4" />
      {/* Decorative corner mark */}
      <rect x="83" y="47" width="4" height="4" fill="none" stroke="#E60012" strokeWidth="0.2" opacity="0.15" />
      {/* Company in bar */}
      <text x="8" y="9.5" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="2.8" letterSpacing="0.5" fill="#ffffff">
        {data.companyEn.toUpperCase()}
      </text>
      <text x="8" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.6" fill="#ffffff" opacity="0.7">
        {data.companyJa}
      </text>
      {/* Name */}
      <text x="8" y="26" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="6.5" fill="#1a1a1a" filter="url(#geometric-katachi-shadow)">
        {data.nameJa}
      </text>
      <text x="8" y="31.5" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="2.2" letterSpacing="0.15" fill="#666666">
        {data.nameEn.toUpperCase()}
      </text>
      {/* Title */}
      <text x="8" y="36" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.8" fill="#999999">
        {data.titleJa}
      </text>
      {/* Separator */}
      <line x1="8" y1="39" x2="42" y2="39" stroke="#E60012" strokeWidth="0.3" />
      {/* Contact */}
      <text x="8" y="43" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#666666">
        {data.tel}
      </text>
      <text x="8" y="46.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#666666">
        {data.email}
      </text>
      <text x="8" y="50" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#666666">
        {data.website}
      </text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="75" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="geometric-katachi-backpaper" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" seed="5" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" result="paper" />
        </filter>
        <linearGradient id="geometric-katachi-backGrad" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#E60012" />
          <stop offset="60%" stopColor="#C2000F" />
          <stop offset="100%" stopColor="#A0000B" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#geometric-katachi-backGrad)" filter="url(#geometric-katachi-backpaper)" />
      {/* Geometric rectangle pattern */}
      <rect x="60" y="0" width="31" height="20" fill="#C2000F" opacity="0.5" />
      <rect x="70" y="20" width="21" height="15" fill="#A0000B" opacity="0.4" />
      <rect x="0" y="42" width="25" height="13" fill="#A0000B" opacity="0.3" />
      {/* Decorative grid dots */}
      <circle cx="10" cy="10" r="0.4" fill="#ffffff" opacity="0.15" />
      <circle cx="16" cy="10" r="0.4" fill="#ffffff" opacity="0.15" />
      <circle cx="10" cy="16" r="0.4" fill="#ffffff" opacity="0.15" />
      <circle cx="16" cy="16" r="0.4" fill="#ffffff" opacity="0.15" />
      {/* Thin border frame */}
      <rect x="3" y="3" width="85" height="49" fill="none" stroke="#ffffff" strokeWidth="0.15" opacity="0.15" />
      {/* Company name */}
      <text x="45.5" y="24" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="6" letterSpacing="0.5" fill="#ffffff">
        {data.companyEn.toUpperCase()}
      </text>
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" letterSpacing="0.8" fill="rgba(255,255,255,0.7)">
        {data.companyJa}
      </text>
      {/* Separator */}
      <line x1="30" y1="33" x2="61" y2="33" stroke="#D4A853" strokeWidth="0.2" opacity="0.4" />
      {/* Contact info */}
      <text x="45.5" y="37" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="rgba(255,255,255,0.7)">
        {data.titleJa}
      </text>
      <text x="45.5" y="40.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(255,255,255,0.6)">
        {data.tel} | {data.email}
      </text>
      <text x="45.5" y="43.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(255,255,255,0.5)">
        {data.website}
      </text>
      <text x="45.5" y="48" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="rgba(255,255,255,0.4)">
        〒{data.zipCode} {data.addressJa}
      </text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="75" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 2. DIAMOND (菱) — Peter Saville
// Diamond/rhombus accent shape, monochrome elegance
// ============================================================
const diamondTemplate: TemplateDefinition = {
  id: 'diamond',
  name: 'DIAMOND',
  nameJa: '菱',
  category: 'geometric',
  designer: 'Peter Saville',
  description: '菱形のアクセントが生むモノクロームの緊張感。',
  accentColor: '#1A1A1A',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="geometric-diamond-paper" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" seed="10" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" result="paper" />
        </filter>
        <filter id="geometric-diamond-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.4" result="blur" />
          <feOffset dx="0.2" dy="0.3" in="blur" result="offsetBlur" />
          <feFlood floodColor="#000000" floodOpacity="0.12" result="color" />
          <feComposite in="color" in2="offsetBlur" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="geometric-diamond-fill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2A2A2A" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#1A1A1A" stopOpacity="0.08" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#ffffff" filter="url(#geometric-diamond-paper)" />
      {/* Large diamond shape on right */}
      <polygon points="72,5 85,27.5 72,50 59,27.5" fill="none" stroke="#1A1A1A" strokeWidth="0.5" />
      <polygon points="72,12 80,27.5 72,43 64,27.5" fill="url(#geometric-diamond-fill)" />
      {/* Inner diamond detail */}
      <polygon points="72,18 76,27.5 72,37 68,27.5" fill="none" stroke="#1A1A1A" strokeWidth="0.15" opacity="0.3" />
      {/* Small diamond accent near name */}
      <polygon points="8,19 10,21 8,23 6,21" fill="#1A1A1A" />
      {/* Decorative diamond row at bottom */}
      <polygon points="8,51 9,52 8,53 7,52" fill="#1A1A1A" opacity="0.1" />
      <polygon points="12,51 13,52 12,53 11,52" fill="#1A1A1A" opacity="0.08" />
      <polygon points="16,51 17,52 16,53 15,52" fill="#1A1A1A" opacity="0.06" />
      <polygon points="20,51 21,52 20,53 19,52" fill="#1A1A1A" opacity="0.04" />
      {/* Name */}
      <text x="14" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="5.5" fill="#1A1A1A" filter="url(#geometric-diamond-shadow)">
        {data.nameJa}
      </text>
      <text x="14" y="27.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.2" fill="#666666">
        {data.nameEn}
      </text>
      <text x="14" y="32" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#999999">
        {data.titleJa}
      </text>
      {/* Separator */}
      <line x1="14" y1="35" x2="48" y2="35" stroke="#1A1A1A" strokeWidth="0.15" />
      {/* Contact */}
      <text x="14" y="38.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.5" fill="#777777">
        {data.companyJa}
      </text>
      <text x="14" y="41.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#888888">
        {data.tel}
      </text>
      <text x="14" y="44.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#888888">
        {data.email}
      </text>
      <text x="14" y="47.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#888888">
        {data.website}
      </text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="48" y="38" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="geometric-diamond-backpaper" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="3" seed="12" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" result="paper" />
        </filter>
        <linearGradient id="geometric-diamond-backGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1A1A1A" />
          <stop offset="50%" stopColor="#222222" />
          <stop offset="100%" stopColor="#1A1A1A" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#geometric-diamond-backGrad)" filter="url(#geometric-diamond-backpaper)" />
      {/* Centered diamond */}
      <polygon points="45.5,6 64,27.5 45.5,49 27,27.5" fill="none" stroke="#ffffff" strokeWidth="0.4" opacity="0.2" />
      <polygon points="45.5,12 58,27.5 45.5,43 33,27.5" fill="#ffffff" opacity="0.04" />
      <polygon points="45.5,18 52,27.5 45.5,37 39,27.5" fill="none" stroke="#ffffff" strokeWidth="0.15" opacity="0.15" />
      {/* Corner diamonds */}
      <polygon points="8,8 10,10 8,12 6,10" fill="#ffffff" opacity="0.1" />
      <polygon points="83,43 85,45 83,47 81,45" fill="#ffffff" opacity="0.1" />
      {/* Company */}
      <text x="45.5" y="24" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="3" letterSpacing="0.6" fill="#ffffff">
        {data.companyEn.toUpperCase()}
      </text>
      <text x="45.5" y="28.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" fill="rgba(255,255,255,0.5)">
        {data.companyJa}
      </text>
      {/* Separator */}
      <line x1="32" y1="31" x2="59" y2="31" stroke="#ffffff" strokeWidth="0.1" opacity="0.25" />
      {/* Contact */}
      <text x="45.5" y="34.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(255,255,255,0.5)">
        {data.titleJa}
      </text>
      <text x="45.5" y="37.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(255,255,255,0.45)">
        {data.tel} | {data.email}
      </text>
      <text x="45.5" y="40.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(255,255,255,0.4)">
        {data.website}
      </text>
      <text x="45.5" y="45" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="rgba(255,255,255,0.3)">
        〒{data.zipCode} {data.addressJa}
      </text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="75" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 3. HEX (六) — Max Bill
// Hexagonal motif, Bauhaus geometry meets Swiss order
// ============================================================
const hexTemplate: TemplateDefinition = {
  id: 'hex',
  name: 'HEX',
  nameJa: '六',
  category: 'geometric',
  designer: 'Max Bill',
  description: '六角形のモチーフ。バウハウスとスイスの秩序が融合。',
  accentColor: '#E8A000',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="geometric-hex-paper" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" seed="20" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" result="paper" />
        </filter>
        <filter id="geometric-hex-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" result="blur" />
          <feOffset dx="0.15" dy="0.25" in="blur" result="offsetBlur" />
          <feFlood floodColor="#000000" floodOpacity="0.1" result="color" />
          <feComposite in="color" in2="offsetBlur" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="geometric-hex-goldGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F0C040" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#E8A000" stopOpacity="0.08" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#FAFAF7" filter="url(#geometric-hex-paper)" />
      {/* Hexagonal motif cluster - top right */}
      <polygon points="70,4 76.5,7.75 76.5,15.25 70,19 63.5,15.25 63.5,7.75" fill="url(#geometric-hex-goldGrad)" stroke="#E8A000" strokeWidth="0.3" />
      <polygon points="82,4 88.5,7.75 88.5,15.25 82,19 75.5,15.25 75.5,7.75" fill="none" stroke="#E8A000" strokeWidth="0.2" opacity="0.4" />
      <polygon points="76,16 82.5,19.75 82.5,27.25 76,31 69.5,27.25 69.5,19.75" fill="none" stroke="#E8A000" strokeWidth="0.25" opacity="0.3" />
      {/* Small hex detail inside first hex */}
      <polygon points="70,7 73.2,9 73.2,13 70,15 66.8,13 66.8,9" fill="none" stroke="#E8A000" strokeWidth="0.15" opacity="0.4" />
      {/* Decorative hex dot */}
      <circle cx="70" cy="11.5" r="0.5" fill="#E8A000" opacity="0.3" />
      {/* Name block */}
      <text x="8" y="17" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="6" fill="#1a1a1a" filter="url(#geometric-hex-shadow)">
        {data.nameJa}
      </text>
      <text x="8" y="23" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.15" fill="#E8A000">
        {data.nameEn.toUpperCase()}
      </text>
      <text x="8" y="27.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#888888">
        {data.titleJa}
      </text>
      {/* Company */}
      <text x="8" y="32" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.6" fill="#777777">
        {data.companyJa}
      </text>
      {/* Separator */}
      <line x1="8" y1="35" x2="50" y2="35" stroke="#E8A000" strokeWidth="0.25" />
      {/* Contact */}
      <text x="8" y="38.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#777777">
        {data.tel}
      </text>
      <text x="8" y="41.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#777777">
        {data.email}
      </text>
      <text x="8" y="44.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#777777">
        {data.website}
      </text>
      <text x="8" y="49" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#aaaaaa">
        〒{data.zipCode} {data.addressJa}
      </text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="75" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="geometric-hex-backpaper" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" seed="22" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" result="paper" />
        </filter>
        <linearGradient id="geometric-hex-backGrad" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#E8A000" />
          <stop offset="50%" stopColor="#D49200" />
          <stop offset="100%" stopColor="#C08000" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#geometric-hex-backGrad)" filter="url(#geometric-hex-backpaper)" />
      {/* Hex pattern on back */}
      <polygon points="20,10 28,14.6 28,23.8 20,28.4 12,23.8 12,14.6" fill="none" stroke="#ffffff" strokeWidth="0.4" opacity="0.2" />
      <polygon points="36,10 44,14.6 44,23.8 36,28.4 28,23.8 28,14.6" fill="none" stroke="#ffffff" strokeWidth="0.4" opacity="0.15" />
      <polygon points="28,25 36,29.6 36,38.8 28,43.4 20,38.8 20,29.6" fill="none" stroke="#ffffff" strokeWidth="0.4" opacity="0.18" />
      <polygon points="52,10 60,14.6 60,23.8 52,28.4 44,23.8 44,14.6" fill="none" stroke="#ffffff" strokeWidth="0.4" opacity="0.12" />
      <polygon points="44,25 52,29.6 52,38.8 44,43.4 36,38.8 36,29.6" fill="none" stroke="#ffffff" strokeWidth="0.4" opacity="0.15" />
      <polygon points="60,25 68,29.6 68,38.8 60,43.4 52,38.8 52,29.6" fill="none" stroke="#ffffff" strokeWidth="0.4" opacity="0.1" />
      {/* Company */}
      <text x="45.5" y="18" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="4" letterSpacing="0.6" fill="#ffffff">
        {data.companyEn.toUpperCase()}
      </text>
      <text x="45.5" y="23" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" fill="rgba(255,255,255,0.7)">
        {data.companyJa}
      </text>
      {/* Separator */}
      <line x1="28" y1="26" x2="63" y2="26" stroke="#ffffff" strokeWidth="0.15" opacity="0.3" />
      {/* Contact */}
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="rgba(255,255,255,0.65)">
        {data.titleJa}
      </text>
      <text x="45.5" y="33.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(255,255,255,0.6)">
        {data.tel}
      </text>
      <text x="45.5" y="36.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(255,255,255,0.6)">
        {data.email}
      </text>
      <text x="45.5" y="39.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(255,255,255,0.5)">
        {data.website}
      </text>
      <text x="45.5" y="44" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="rgba(255,255,255,0.4)">
        〒{data.zipCode} {data.addressJa}
      </text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="75" y="44" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 4. GRID-GEO (格) — Karl Gerstner
// Visible grid overlay, content aligned to grid
// ============================================================
const gridGeoTemplate: TemplateDefinition = {
  id: 'grid-geo',
  name: 'GRID-GEO',
  nameJa: '格',
  category: 'geometric',
  designer: 'Karl Gerstner',
  description: '可視グリッドが秩序を可視化。情報建築の極致。',
  accentColor: '#0066CC',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="geometric-grid-paper" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" seed="30" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" result="paper" />
        </filter>
        <filter id="geometric-grid-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.35" result="blur" />
          <feOffset dx="0.2" dy="0.2" in="blur" result="offsetBlur" />
          <feFlood floodColor="#0066CC" floodOpacity="0.1" result="color" />
          <feComposite in="color" in2="offsetBlur" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="geometric-grid-blueGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0066CC" />
          <stop offset="100%" stopColor="#004D99" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#ffffff" filter="url(#geometric-grid-paper)" />
      {/* Visible grid lines */}
      <g stroke="#0066CC" strokeWidth="0.08" opacity="0.2">
        <line x1="7" y1="0" x2="7" y2="55" />
        <line x1="22.75" y1="0" x2="22.75" y2="55" />
        <line x1="38.5" y1="0" x2="38.5" y2="55" />
        <line x1="54.25" y1="0" x2="54.25" y2="55" />
        <line x1="70" y1="0" x2="70" y2="55" />
        <line x1="84" y1="0" x2="84" y2="55" />
        <line x1="0" y1="7" x2="91" y2="7" />
        <line x1="0" y1="17" x2="91" y2="17" />
        <line x1="0" y1="27" x2="91" y2="27" />
        <line x1="0" y1="37" x2="91" y2="37" />
        <line x1="0" y1="47" x2="91" y2="47" />
      </g>
      {/* Blue accent block in top-left grid cell */}
      <rect x="0" y="0" width="7" height="7" fill="url(#geometric-grid-blueGrad)" />
      {/* Intersection dots */}
      <circle cx="7" cy="7" r="0.3" fill="#0066CC" opacity="0.3" />
      <circle cx="22.75" cy="7" r="0.3" fill="#0066CC" opacity="0.2" />
      <circle cx="7" cy="17" r="0.3" fill="#0066CC" opacity="0.2" />
      {/* Grid label */}
      <text x="3.5" y="4.5" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="2.5" fill="#ffffff" textAnchor="middle">
        G
      </text>
      {/* Name */}
      <text x="22.75" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="5.5" fill="#1a1a1a" filter="url(#geometric-grid-shadow)">
        {data.nameJa}
      </text>
      <text x="22.75" y="20" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.15" fill="#0066CC">
        {data.nameEn}
      </text>
      <text x="22.75" y="25" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#888888">
        {data.titleJa}
      </text>
      {/* Contact section label */}
      <text x="7" y="32" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.4" letterSpacing="0.1" fill="#0066CC">
        CONTACT
      </text>
      <text x="7" y="36" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#666666">
        {data.tel}
      </text>
      <text x="7" y="39.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#666666">
        {data.email}
      </text>
      <text x="7" y="43" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#666666">
        {data.website}
      </text>
      <text x="7" y="49" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#999999">
        〒{data.zipCode} {data.addressJa}
      </text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="75" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="geometric-grid-backpaper" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="3" seed="32" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" result="paper" />
        </filter>
        <linearGradient id="geometric-grid-backGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0066CC" />
          <stop offset="100%" stopColor="#003D7A" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#geometric-grid-backGrad)" filter="url(#geometric-grid-backpaper)" />
      {/* Grid lines on back */}
      <g stroke="#ffffff" strokeWidth="0.1" opacity="0.12">
        <line x1="22.75" y1="0" x2="22.75" y2="55" />
        <line x1="45.5" y1="0" x2="45.5" y2="55" />
        <line x1="68.25" y1="0" x2="68.25" y2="55" />
        <line x1="0" y1="13.75" x2="91" y2="13.75" />
        <line x1="0" y1="27.5" x2="91" y2="27.5" />
        <line x1="0" y1="41.25" x2="91" y2="41.25" />
      </g>
      {/* Accent cell */}
      <rect x="68.25" y="41.25" width="22.75" height="13.75" fill="#004D99" opacity="0.6" />
      {/* Intersection highlights */}
      <circle cx="45.5" cy="27.5" r="0.5" fill="#ffffff" opacity="0.1" />
      <circle cx="22.75" cy="13.75" r="0.5" fill="#ffffff" opacity="0.08" />
      {/* Company */}
      <text x="45.5" y="18" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="4.5" letterSpacing="0.8" fill="#ffffff">
        {data.companyEn.toUpperCase()}
      </text>
      <text x="45.5" y="23" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" fill="rgba(255,255,255,0.6)">
        {data.companyJa}
      </text>
      {/* Separator */}
      <line x1="25" y1="26" x2="66" y2="26" stroke="#ffffff" strokeWidth="0.1" opacity="0.3" />
      {/* Contact */}
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="rgba(255,255,255,0.6)">
        {data.titleJa}
      </text>
      <text x="45.5" y="33.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(255,255,255,0.55)">
        {data.tel} | {data.email}
      </text>
      <text x="45.5" y="36.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(255,255,255,0.5)">
        {data.website}
      </text>
      <text x="45.5" y="41" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="rgba(255,255,255,0.4)">
        〒{data.zipCode} {data.addressJa}
      </text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="74" y="44" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 5. BLOCK (塊) — Paul Rand
// Color block composition, 2-3 bold colored rectangles
// ============================================================
const blockTemplate: TemplateDefinition = {
  id: 'block',
  name: 'BLOCK',
  nameJa: '塊',
  category: 'geometric',
  designer: 'Paul Rand',
  description: '色面の構成美。大胆な矩形が空間を支配する。',
  accentColor: '#FF6900',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="geometric-block-paper" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" seed="40" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" result="paper" />
        </filter>
        <filter id="geometric-block-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.5" result="blur" />
          <feOffset dx="0.3" dy="0.4" in="blur" result="offsetBlur" />
          <feFlood floodColor="#000000" floodOpacity="0.12" result="color" />
          <feComposite in="color" in2="offsetBlur" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="geometric-block-orangeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF7A1A" />
          <stop offset="100%" stopColor="#FF6900" />
        </linearGradient>
        <linearGradient id="geometric-block-blueGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#003893" />
          <stop offset="100%" stopColor="#002D75" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#FFFDF8" filter="url(#geometric-block-paper)" />
      {/* Three bold color blocks */}
      <rect x="0" y="0" width="28" height="22" fill="url(#geometric-block-orangeGrad)" />
      <rect x="0" y="22" width="14" height="33" fill="url(#geometric-block-blueGrad)" />
      <rect x="14" y="22" width="14" height="16" fill="#FFC800" />
      {/* Block overlay shine */}
      <rect x="0" y="0" width="28" height="5" fill="#ffffff" opacity="0.08" />
      {/* Small decorative block */}
      <rect x="22" y="16" width="4" height="4" fill="#ffffff" opacity="0.15" />
      {/* Name on white area */}
      <text x="36" y="13" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="6" fill="#1a1a1a" filter="url(#geometric-block-shadow)">
        {data.nameJa}
      </text>
      <text x="36" y="19" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="2" letterSpacing="0.15" fill="#FF6900">
        {data.nameEn.toUpperCase()}
      </text>
      <text x="36" y="24" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.8" fill="#888888">
        {data.titleJa}
      </text>
      <text x="36" y="28.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.6" fill="#777777">
        {data.companyJa}
      </text>
      {/* Separator */}
      <line x1="36" y1="31.5" x2="82" y2="31.5" stroke="#FF6900" strokeWidth="0.2" />
      {/* Contact */}
      <text x="36" y="35.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#666666">
        T. {data.tel}
      </text>
      <text x="36" y="39" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#666666">
        {data.email}
      </text>
      <text x="36" y="42.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#666666">
        {data.website}
      </text>
      <text x="36" y="49" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#aaaaaa">
        〒{data.zipCode} {data.addressJa}
      </text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="75" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="geometric-block-backpaper" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="3" seed="42" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" result="paper" />
        </filter>
        <linearGradient id="geometric-block-backOrangeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF7A1A" />
          <stop offset="100%" stopColor="#E85D00" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#geometric-block-backOrangeGrad)" filter="url(#geometric-block-backpaper)" />
      {/* Overlapping block composition */}
      <rect x="0" y="32" width="45" height="23" fill="#003893" opacity="0.8" />
      <rect x="55" y="0" width="36" height="28" fill="#FFC800" opacity="0.7" />
      <rect x="60" y="22" width="10" height="10" fill="#ffffff" opacity="0.06" />
      {/* Thin frame */}
      <rect x="4" y="4" width="83" height="47" fill="none" stroke="#ffffff" strokeWidth="0.1" opacity="0.15" />
      {/* Company */}
      <text x="45.5" y="18" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="5" letterSpacing="0.4" fill="#ffffff">
        {data.companyEn.toUpperCase()}
      </text>
      <text x="45.5" y="23.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.2" fill="rgba(255,255,255,0.75)">
        {data.companyJa}
      </text>
      {/* Separator */}
      <line x1="25" y1="27" x2="66" y2="27" stroke="#ffffff" strokeWidth="0.15" opacity="0.3" />
      {/* Contact */}
      <text x="45.5" y="31" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="rgba(255,255,255,0.7)">
        {data.titleJa}
      </text>
      <text x="45.5" y="37" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(255,255,255,0.65)">
        {data.tel} | {data.email}
      </text>
      <text x="45.5" y="40.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(255,255,255,0.6)">
        {data.website}
      </text>
      <text x="45.5" y="47" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="rgba(255,255,255,0.45)">
        〒{data.zipCode} {data.addressJa}
      </text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="5" y="35" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 6. STRIPE (縞) — Daniel Buren
// Bold vertical stripes as accent
// ============================================================
const stripeTemplate: TemplateDefinition = {
  id: 'stripe',
  name: 'STRIPE',
  nameJa: '縞',
  category: 'geometric',
  designer: 'Daniel Buren',
  description: '反復する縞が空間にリズムと秩序を刻む。',
  accentColor: '#00805A',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="geometric-stripe-paper" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" seed="50" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" result="paper" />
        </filter>
        <filter id="geometric-stripe-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.4" result="blur" />
          <feOffset dx="0.2" dy="0.25" in="blur" result="offsetBlur" />
          <feFlood floodColor="#00805A" floodOpacity="0.08" result="color" />
          <feComposite in="color" in2="offsetBlur" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="geometric-stripe-greenGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#009E6E" />
          <stop offset="100%" stopColor="#00805A" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#ffffff" filter="url(#geometric-stripe-paper)" />
      {/* Bold vertical stripes on left edge */}
      <rect x="0" y="0" width="3" height="55" fill="url(#geometric-stripe-greenGrad)" />
      <rect x="5" y="0" width="3" height="55" fill="#00805A" />
      <rect x="10" y="0" width="3" height="55" fill="#00805A" />
      <rect x="15" y="0" width="3" height="55" fill="#00805A" opacity="0.6" />
      <rect x="20" y="0" width="3" height="55" fill="#00805A" opacity="0.3" />
      <rect x="25" y="0" width="3" height="55" fill="#00805A" opacity="0.12" />
      {/* Decorative small stripe accent on right */}
      <rect x="85" y="4" width="1" height="8" fill="#00805A" opacity="0.1" />
      <rect x="87" y="4" width="1" height="6" fill="#00805A" opacity="0.07" />
      {/* Name */}
      <text x="34" y="16" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="5.5" fill="#1a1a1a" filter="url(#geometric-stripe-shadow)">
        {data.nameJa}
      </text>
      <text x="34" y="22" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.2" fill="#00805A">
        {data.nameEn}
      </text>
      <text x="34" y="27" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#888888">
        {data.titleJa}
      </text>
      <text x="34" y="31" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.6" fill="#777777">
        {data.companyJa}
      </text>
      {/* Separator */}
      <line x1="34" y1="34" x2="82" y2="34" stroke="#00805A" strokeWidth="0.2" />
      {/* Contact */}
      <text x="34" y="37.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#666666">
        {data.tel}
      </text>
      <text x="34" y="41" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#666666">
        {data.email}
      </text>
      <text x="34" y="44.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#666666">
        {data.website}
      </text>
      <text x="34" y="50" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#aaaaaa">
        〒{data.zipCode} {data.addressJa}
      </text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="75" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="geometric-stripe-backpaper" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" seed="52" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" result="paper" />
        </filter>
        <linearGradient id="geometric-stripe-backGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#006E4D" />
          <stop offset="50%" stopColor="#00805A" />
          <stop offset="100%" stopColor="#006E4D" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#geometric-stripe-backGrad)" filter="url(#geometric-stripe-backpaper)" />
      {/* White stripes pattern */}
      <rect x="0" y="0" width="5.2" height="55" fill="#ffffff" opacity="0.08" />
      <rect x="10.4" y="0" width="5.2" height="55" fill="#ffffff" opacity="0.08" />
      <rect x="20.8" y="0" width="5.2" height="55" fill="#ffffff" opacity="0.08" />
      <rect x="31.2" y="0" width="5.2" height="55" fill="#ffffff" opacity="0.08" />
      <rect x="41.6" y="0" width="5.2" height="55" fill="#ffffff" opacity="0.08" />
      <rect x="52" y="0" width="5.2" height="55" fill="#ffffff" opacity="0.08" />
      <rect x="62.4" y="0" width="5.2" height="55" fill="#ffffff" opacity="0.08" />
      <rect x="72.8" y="0" width="5.2" height="55" fill="#ffffff" opacity="0.08" />
      <rect x="83.2" y="0" width="5.2" height="55" fill="#ffffff" opacity="0.08" />
      {/* Company */}
      <text x="45.5" y="18" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="4.5" letterSpacing="0.6" fill="#ffffff">
        {data.companyEn.toUpperCase()}
      </text>
      <text x="45.5" y="23.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" fill="rgba(255,255,255,0.65)">
        {data.companyJa}
      </text>
      {/* Separator */}
      <line x1="25" y1="27" x2="66" y2="27" stroke="#ffffff" strokeWidth="0.15" opacity="0.3" />
      {/* Contact */}
      <text x="45.5" y="31" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="rgba(255,255,255,0.65)">
        {data.titleJa}
      </text>
      <text x="45.5" y="34.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(255,255,255,0.6)">
        {data.tel}
      </text>
      <text x="45.5" y="37.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(255,255,255,0.6)">
        {data.email}
      </text>
      <text x="45.5" y="40.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(255,255,255,0.5)">
        {data.website}
      </text>
      <text x="45.5" y="47" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="rgba(255,255,255,0.4)">
        〒{data.zipCode} {data.addressJa}
      </text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="75" y="44" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 7. ARC (弧) — Zaha Hadid
// Sweeping circular arcs, architectural curves
// ============================================================
const arcTemplate: TemplateDefinition = {
  id: 'arc',
  name: 'ARC',
  nameJa: '弧',
  category: 'geometric',
  designer: 'Zaha Hadid',
  description: '流麗なアークが建築的な動勢を生み出す。',
  accentColor: '#6B21A8',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="geometric-arc-paper" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" seed="60" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" result="paper" />
        </filter>
        <filter id="geometric-arc-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.45" result="blur" />
          <feOffset dx="0.2" dy="0.3" in="blur" result="offsetBlur" />
          <feFlood floodColor="#6B21A8" floodOpacity="0.1" result="color" />
          <feComposite in="color" in2="offsetBlur" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="geometric-arc-glow" cx="0.8" cy="0.9" r="0.5">
          <stop offset="0%" stopColor="#6B21A8" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#6B21A8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="geometric-arc-arcGrad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#6B21A8" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#9333EA" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#FAF8FF" filter="url(#geometric-arc-paper)" />
      <rect width="91" height="55" fill="url(#geometric-arc-glow)" />
      {/* Sweeping arcs from bottom-right */}
      <path d="M 91 55 A 70 70 0 0 0 21 55" fill="none" stroke="#6B21A8" strokeWidth="0.4" opacity="0.15" />
      <path d="M 91 55 A 55 55 0 0 0 36 55" fill="none" stroke="#6B21A8" strokeWidth="0.7" opacity="0.2" />
      <path d="M 91 55 A 40 40 0 0 0 51 55" fill="none" stroke="url(#geometric-arc-arcGrad)" strokeWidth="1.2" />
      <path d="M 91 55 A 25 25 0 0 0 66 55" fill="#6B21A8" opacity="0.06" />
      {/* Arc from top-left */}
      <path d="M 0 0 A 80 80 0 0 1 80 0" fill="none" stroke="#6B21A8" strokeWidth="0.25" opacity="0.12" />
      <path d="M 0 0 A 50 50 0 0 1 50 0" fill="none" stroke="#9333EA" strokeWidth="0.15" opacity="0.08" />
      {/* Name */}
      <text x="10" y="17" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="6" fill="#2D0A4E" filter="url(#geometric-arc-shadow)">
        {data.nameJa}
      </text>
      <text x="10" y="23" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.2" fill="#6B21A8">
        {data.nameEn}
      </text>
      <text x="10" y="28" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#999999">
        {data.titleJa}
      </text>
      <text x="10" y="32.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.6" fill="#888888">
        {data.companyJa}
      </text>
      {/* Separator */}
      <line x1="10" y1="35.5" x2="45" y2="35.5" stroke="#6B21A8" strokeWidth="0.2" opacity="0.4" />
      {/* Contact */}
      <text x="10" y="39" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#777777">
        {data.tel}
      </text>
      <text x="10" y="42.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#777777">
        {data.email}
      </text>
      <text x="10" y="46" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#777777">
        {data.website}
      </text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="75" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="geometric-arc-backpaper" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" seed="62" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" result="paper" />
        </filter>
        <linearGradient id="geometric-arc-backGrad" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#2D0A4E" />
          <stop offset="100%" stopColor="#1A0530" />
        </linearGradient>
        <linearGradient id="geometric-arc-backArcGrad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#9333EA" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#6B21A8" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#geometric-arc-backGrad)" filter="url(#geometric-arc-backpaper)" />
      {/* Dramatic sweeping arcs */}
      <path d="M 0 0 A 90 90 0 0 1 91 0" fill="none" stroke="#ffffff" strokeWidth="0.25" opacity="0.1" />
      <path d="M 0 10 A 80 80 0 0 1 91 10" fill="none" stroke="#ffffff" strokeWidth="0.2" opacity="0.08" />
      <path d="M 0 55 A 60 60 0 0 0 91 55" fill="none" stroke="url(#geometric-arc-backArcGrad)" strokeWidth="2" />
      <path d="M 0 55 A 45 45 0 0 0 91 55" fill="none" stroke="#6B21A8" strokeWidth="1.5" opacity="0.35" />
      <path d="M 0 55 A 30 30 0 0 0 91 55" fill="none" stroke="#6B21A8" strokeWidth="1" opacity="0.25" />
      {/* Company */}
      <text x="45.5" y="18" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="4" letterSpacing="0.5" fill="#ffffff">
        {data.companyEn.toUpperCase()}
      </text>
      <text x="45.5" y="23" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" fill="rgba(255,255,255,0.5)">
        {data.companyJa}
      </text>
      {/* Separator */}
      <line x1="28" y1="26" x2="63" y2="26" stroke="#9333EA" strokeWidth="0.15" opacity="0.4" />
      {/* Contact */}
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="rgba(255,255,255,0.55)">
        {data.titleJa}
      </text>
      <text x="45.5" y="33.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(255,255,255,0.5)">
        {data.tel} | {data.email}
      </text>
      <text x="45.5" y="36.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(255,255,255,0.45)">
        {data.website}
      </text>
      <text x="45.5" y="42" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="rgba(255,255,255,0.3)">
        〒{data.zipCode} {data.addressJa}
      </text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="75" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 8. CORNER (隅) — Otl Aicher
// Corner bracket/frame accent, clean inside
// ============================================================
const cornerTemplate: TemplateDefinition = {
  id: 'corner',
  name: 'CORNER',
  nameJa: '隅',
  category: 'geometric',
  designer: 'Otl Aicher',
  description: 'コーナーフレームが空間を定義。清潔な内部。',
  accentColor: '#006B3F',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="geometric-corner-paper" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" seed="70" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" result="paper" />
        </filter>
        <filter id="geometric-corner-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.35" result="blur" />
          <feOffset dx="0.15" dy="0.2" in="blur" result="offsetBlur" />
          <feFlood floodColor="#006B3F" floodOpacity="0.08" result="color" />
          <feComposite in="color" in2="offsetBlur" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="geometric-corner-greenGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#008A50" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#006B3F" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#ffffff" filter="url(#geometric-corner-paper)" />
      {/* Subtle background glow in corners */}
      <rect x="0" y="0" width="25" height="20" fill="url(#geometric-corner-greenGrad)" />
      <rect x="66" y="35" width="25" height="20" fill="url(#geometric-corner-greenGrad)" />
      {/* Top-left corner bracket */}
      <line x1="5" y1="5" x2="5" y2="15" stroke="#006B3F" strokeWidth="0.8" />
      <line x1="5" y1="5" x2="18" y2="5" stroke="#006B3F" strokeWidth="0.8" />
      {/* Bottom-right corner bracket */}
      <line x1="86" y1="50" x2="86" y2="40" stroke="#006B3F" strokeWidth="0.8" />
      <line x1="86" y1="50" x2="73" y2="50" stroke="#006B3F" strokeWidth="0.8" />
      {/* Accent dots at intersections */}
      <circle cx="5" cy="5" r="1" fill="#006B3F" />
      <circle cx="86" cy="50" r="1" fill="#006B3F" />
      {/* Small decorative corner marks */}
      <line x1="86" y1="5" x2="82" y2="5" stroke="#006B3F" strokeWidth="0.2" opacity="0.2" />
      <line x1="86" y1="5" x2="86" y2="9" stroke="#006B3F" strokeWidth="0.2" opacity="0.2" />
      <line x1="5" y1="50" x2="9" y2="50" stroke="#006B3F" strokeWidth="0.2" opacity="0.2" />
      <line x1="5" y1="50" x2="5" y2="46" stroke="#006B3F" strokeWidth="0.2" opacity="0.2" />
      {/* Content within frame */}
      <text x="14" y="23" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="5.5" fill="#1a1a1a" filter="url(#geometric-corner-shadow)">
        {data.nameJa}
      </text>
      <text x="14" y="29" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.15" fill="#006B3F">
        {data.nameEn}
      </text>
      <text x="14" y="34" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#999999">
        {data.titleJa}
      </text>
      <text x="14" y="38" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.6" fill="#777777">
        {data.companyJa}
      </text>
      {/* Separator */}
      <line x1="14" y1="40.5" x2="50" y2="40.5" stroke="#006B3F" strokeWidth="0.15" />
      {/* Contact */}
      <text x="14" y="44" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#666666">
        {data.tel} | {data.email}
      </text>
      <text x="14" y="47" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#666666">
        {data.website}
      </text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="70" y="18" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="geometric-corner-backpaper" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="3" seed="72" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" result="paper" />
        </filter>
        <linearGradient id="geometric-corner-backGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#006B3F" />
          <stop offset="100%" stopColor="#004D2D" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#geometric-corner-backGrad)" filter="url(#geometric-corner-backpaper)" />
      {/* White corner brackets - all four corners */}
      <line x1="6" y1="6" x2="6" y2="16" stroke="#ffffff" strokeWidth="0.6" />
      <line x1="6" y1="6" x2="19" y2="6" stroke="#ffffff" strokeWidth="0.6" />
      <line x1="85" y1="6" x2="85" y2="16" stroke="#ffffff" strokeWidth="0.6" />
      <line x1="85" y1="6" x2="72" y2="6" stroke="#ffffff" strokeWidth="0.6" />
      <line x1="6" y1="49" x2="6" y2="39" stroke="#ffffff" strokeWidth="0.6" />
      <line x1="6" y1="49" x2="19" y2="49" stroke="#ffffff" strokeWidth="0.6" />
      <line x1="85" y1="49" x2="85" y2="39" stroke="#ffffff" strokeWidth="0.6" />
      <line x1="85" y1="49" x2="72" y2="49" stroke="#ffffff" strokeWidth="0.6" />
      {/* Corner dots */}
      <circle cx="6" cy="6" r="0.8" fill="#ffffff" opacity="0.4" />
      <circle cx="85" cy="6" r="0.8" fill="#ffffff" opacity="0.4" />
      <circle cx="6" cy="49" r="0.8" fill="#ffffff" opacity="0.4" />
      <circle cx="85" cy="49" r="0.8" fill="#ffffff" opacity="0.4" />
      {/* Company */}
      <text x="45.5" y="18" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="3.5" letterSpacing="0.6" fill="#ffffff">
        {data.companyEn.toUpperCase()}
      </text>
      <text x="45.5" y="23" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" fill="rgba(255,255,255,0.7)">
        {data.companyJa}
      </text>
      {/* Separator */}
      <line x1="28" y1="26" x2="63" y2="26" stroke="#ffffff" strokeWidth="0.1" opacity="0.3" />
      {/* Contact */}
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="rgba(255,255,255,0.6)">
        {data.titleJa}
      </text>
      <text x="45.5" y="33.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(255,255,255,0.55)">
        {data.tel} | {data.email}
      </text>
      <text x="45.5" y="36.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(255,255,255,0.5)">
        {data.website}
      </text>
      <text x="45.5" y="42" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="rgba(255,255,255,0.4)">
        〒{data.zipCode} {data.addressJa}
      </text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="75" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 9. SPLIT (断) — Aaron Siskind
// Diagonal split two-tone background
// ============================================================
const splitTemplate: TemplateDefinition = {
  id: 'split',
  name: 'SPLIT',
  nameJa: '断',
  category: 'geometric',
  designer: 'Aaron Siskind',
  description: '対角線が空間を二分する。緊張と調和の共存。',
  accentColor: '#D4380D',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="geometric-split-paper" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" seed="80" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" result="paper" />
        </filter>
        <filter id="geometric-split-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.5" result="blur" />
          <feOffset dx="0.3" dy="0.3" in="blur" result="offsetBlur" />
          <feFlood floodColor="#000000" floodOpacity="0.15" result="color" />
          <feComposite in="color" in2="offsetBlur" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="geometric-split-darkGrad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#1C1C1C" />
          <stop offset="100%" stopColor="#2A2A2A" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#geometric-split-darkGrad)" filter="url(#geometric-split-paper)" />
      {/* Diagonal split - white triangle */}
      <polygon points="0,0 91,0 91,55" fill="#ffffff" />
      {/* Accent diagonal line */}
      <line x1="0" y1="0" x2="91" y2="55" stroke="#D4380D" strokeWidth="0.6" />
      {/* Secondary parallel line */}
      <line x1="0" y1="3" x2="88" y2="55" stroke="#D4380D" strokeWidth="0.15" opacity="0.3" />
      {/* Decorative dot on diagonal */}
      <circle cx="45.5" cy="27.5" r="0.8" fill="#D4380D" opacity="0.4" />
      {/* Corner accent squares */}
      <rect x="82" y="3" width="4" height="4" fill="none" stroke="#D4380D" strokeWidth="0.15" opacity="0.3" />
      {/* Name on lighter side (top-right) */}
      <text x="50" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="5.5" fill="#1C1C1C" filter="url(#geometric-split-shadow)">
        {data.nameJa}
      </text>
      <text x="50" y="20" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.15" fill="#D4380D">
        {data.nameEn}
      </text>
      {/* Title and company on dark side */}
      <text x="8" y="35" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="rgba(255,255,255,0.8)">
        {data.titleJa}
      </text>
      <text x="8" y="38.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.6" fill="rgba(255,255,255,0.6)">
        {data.companyJa}
      </text>
      {/* Contact info on dark side */}
      <line x1="8" y1="41" x2="35" y2="41" stroke="#D4380D" strokeWidth="0.15" opacity="0.4" />
      <text x="8" y="44.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="rgba(255,255,255,0.6)">
        {data.tel}
      </text>
      <text x="8" y="47.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="rgba(255,255,255,0.6)">
        {data.email}
      </text>
      <text x="8" y="50.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="rgba(255,255,255,0.5)">
        {data.website}
      </text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="75" y="10" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="geometric-split-backpaper" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="3" seed="82" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" result="paper" />
        </filter>
        <linearGradient id="geometric-split-backRedGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D4380D" />
          <stop offset="100%" stopColor="#B52E0A" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#geometric-split-backRedGrad)" filter="url(#geometric-split-backpaper)" />
      {/* Reverse diagonal split */}
      <polygon points="0,55 91,0 91,55" fill="#1C1C1C" />
      <line x1="0" y1="55" x2="91" y2="0" stroke="#ffffff" strokeWidth="0.3" opacity="0.2" />
      <line x1="3" y1="55" x2="91" y2="3" stroke="#ffffff" strokeWidth="0.1" opacity="0.1" />
      {/* Decorative elements */}
      <circle cx="45.5" cy="27.5" r="0.6" fill="#ffffff" opacity="0.2" />
      <rect x="4" y="4" width="3" height="3" fill="none" stroke="#ffffff" strokeWidth="0.15" opacity="0.15" />
      {/* Company */}
      <text x="30" y="16" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="4.5" letterSpacing="0.4" fill="#ffffff">
        {data.companyEn.toUpperCase()}
      </text>
      <text x="30" y="21" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2" fill="rgba(255,255,255,0.7)">
        {data.companyJa}
      </text>
      {/* Separator */}
      <line x1="30" y1="24" x2="70" y2="24" stroke="#ffffff" strokeWidth="0.1" opacity="0.3" />
      {/* Contact */}
      <text x="55" y="34" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="rgba(255,255,255,0.6)">
        {data.titleJa}
      </text>
      <text x="55" y="37.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(255,255,255,0.55)">
        {data.tel} | {data.email}
      </text>
      <text x="55" y="40.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(255,255,255,0.5)">
        {data.website}
      </text>
      <text x="55" y="47" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="rgba(255,255,255,0.35)">
        〒{data.zipCode} {data.addressJa}
      </text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="6" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 10. MOSAIC (片) — Victor Vasarely
// Small square pattern accent strip
// ============================================================
const mosaicTemplate: TemplateDefinition = {
  id: 'mosaic',
  name: 'MOSAIC',
  nameJa: '片',
  category: 'geometric',
  designer: 'Victor Vasarely',
  description: '小さな四角形の集積がリズミカルなパターンを生む。',
  accentColor: '#2563EB',
  renderFront: (data: CardData) => {
    const mosaicSquares: React.ReactNode[] = [];
    const colors = ['#2563EB', '#3B82F6', '#60A5FA', '#93C5FD', '#1D4ED8'];
    for (let col = 0; col < 26; col++) {
      const x = col * 3.5;
      const colorIndex = (col * 3 + 1) % colors.length;
      const opacity = 0.3 + (Math.abs(col - 13) / 13) * 0.7;
      mosaicSquares.push(
        <rect key={`mosaic-front-${col}`} x={x} y={0} width="3.5" height="3.5" fill={colors[colorIndex]} opacity={opacity} />
      );
    }
    for (let col = 0; col < 26; col++) {
      const x = col * 3.5;
      const colorIndex = (col * 7 + 2) % colors.length;
      const opacity = 0.15 + (Math.abs(col - 13) / 13) * 0.35;
      mosaicSquares.push(
        <rect key={`mosaic-front2-${col}`} x={x} y={3.5} width="3.5" height="3.5" fill={colors[colorIndex]} opacity={opacity} />
      );
    }

    return (
      <g>
        <defs>
          <filter id="geometric-mosaic-paper" x="0" y="0" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" seed="90" result="noise" />
            <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
            <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" result="paper" />
          </filter>
          <filter id="geometric-mosaic-shadow">
            <feGaussianBlur in="SourceAlpha" stdDeviation="0.4" result="blur" />
            <feOffset dx="0.2" dy="0.3" in="blur" result="offsetBlur" />
            <feFlood floodColor="#2563EB" floodOpacity="0.08" result="color" />
            <feComposite in="color" in2="offsetBlur" operator="in" result="shadow" />
            <feMerge>
              <feMergeNode in="shadow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="geometric-mosaic-blueGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.03" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="91" height="55" fill="#ffffff" filter="url(#geometric-mosaic-paper)" />
        {/* Mosaic strip at top */}
        {mosaicSquares}
        {/* Subtle gradient wash below mosaic */}
        <rect x="0" y="7" width="91" height="8" fill="url(#geometric-mosaic-blueGrad)" />
        {/* Decorative small squares at bottom right */}
        <rect x="80" y="48" width="2" height="2" fill="#2563EB" opacity="0.06" />
        <rect x="83" y="48" width="2" height="2" fill="#3B82F6" opacity="0.04" />
        <rect x="80" y="51" width="2" height="2" fill="#60A5FA" opacity="0.05" />
        {/* Name */}
        <text x="8" y="19" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="5.5" fill="#1a1a1a" filter="url(#geometric-mosaic-shadow)">
          {data.nameJa}
        </text>
        <text x="8" y="25" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.15" fill="#2563EB">
          {data.nameEn.toUpperCase()}
        </text>
        <text x="8" y="30" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#888888">
          {data.titleJa}
        </text>
        <text x="8" y="34" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.6" fill="#777777">
          {data.companyJa}
        </text>
        {/* Separator */}
        <line x1="8" y1="37" x2="50" y2="37" stroke="#2563EB" strokeWidth="0.2" />
        {/* Contact */}
        <text x="8" y="40.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#666666">
          T. {data.tel}
        </text>
        <text x="8" y="43.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#666666">
          {data.email}
        </text>
        <text x="8" y="46.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#666666">
          {data.website}
        </text>
        <text x="8" y="51" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#aaaaaa">
          〒{data.zipCode} {data.addressJa}
        </text>
        {/* Logo */}
        {data.logo && <image href={data.logo} x="75" y="18" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      </g>
    );
  },
  renderBack: (data: CardData) => {
    const mosaicSquares: React.ReactNode[] = [];
    const colors = ['#2563EB', '#3B82F6', '#60A5FA', '#93C5FD', '#1D4ED8', '#1E40AF'];
    for (let row = 0; row < 16; row++) {
      for (let col = 0; col < 26; col++) {
        const x = col * 3.5;
        const y = row * 3.5;
        const colorIndex = (row * 3 + col * 7) % colors.length;
        const opacity = 0.06 + ((row + col) % 5) * 0.03;
        mosaicSquares.push(
          <rect key={`mosaic-back-${row}-${col}`} x={x} y={y} width="3.4" height="3.4" fill={colors[colorIndex]} opacity={opacity} />
        );
      }
    }

    return (
      <g>
        <defs>
          <filter id="geometric-mosaic-backpaper" x="0" y="0" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" seed="92" result="noise" />
            <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
            <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" result="paper" />
          </filter>
          <linearGradient id="geometric-mosaic-backGrad" x1="0" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#162D6E" />
          </linearGradient>
        </defs>
        <rect width="91" height="55" fill="url(#geometric-mosaic-backGrad)" filter="url(#geometric-mosaic-backpaper)" />
        {/* Full mosaic pattern */}
        {mosaicSquares}
        {/* Company name centered with backdrop */}
        <rect x="14" y="12" width="63" height="32" fill="#1E3A8A" opacity="0.82" rx="1" />
        <rect x="14" y="12" width="63" height="32" fill="none" stroke="#ffffff" strokeWidth="0.1" opacity="0.1" rx="1" />
        {/* Company */}
        <text x="45.5" y="22" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="4.5" letterSpacing="0.5" fill="#ffffff">
          {data.companyEn.toUpperCase()}
        </text>
        <text x="45.5" y="27" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" fill="rgba(255,255,255,0.7)">
          {data.companyJa}
        </text>
        {/* Separator */}
        <line x1="28" y1="29.5" x2="63" y2="29.5" stroke="#60A5FA" strokeWidth="0.1" opacity="0.4" />
        {/* Contact */}
        <text x="45.5" y="33" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(255,255,255,0.6)">
          {data.titleJa}
        </text>
        <text x="45.5" y="36" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(255,255,255,0.55)">
          {data.tel} | {data.email}
        </text>
        <text x="45.5" y="39" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(255,255,255,0.5)">
          {data.website}
        </text>
        <text x="45.5" y="48" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="rgba(255,255,255,0.35)">
          〒{data.zipCode} {data.addressJa}
        </text>
        {/* Logo */}
        {data.logo && <image href={data.logo} x="75" y="44" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      </g>
    );
  },
};

export const geometricTemplates: TemplateDefinition[] = [
  katachiTemplate,
  diamondTemplate,
  hexTemplate,
  gridGeoTemplate,
  blockTemplate,
  stripeTemplate,
  arcTemplate,
  cornerTemplate,
  splitTemplate,
  mosaicTemplate,
];
