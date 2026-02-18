import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. ATELIER (工房) — Artist's workshop
// Warm creative space with asymmetric composition, paint-splatter textures
// ============================================================
const atelierTemplate: TemplateDefinition = {
  id: 'studio-atelier',
  name: 'ATELIER',
  nameJa: '工房',
  category: 'studio',
  designer: 'Pentagram',
  description: '工房の精神。クリエイティブの源泉が息づく空間。',
  accentColor: '#E86830',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="studio-atelier-texture" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" seed="2" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" />
        </filter>
        <filter id="studio-atelier-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0.3" dy="0.3" stdDeviation="0.4" floodColor="#E86830" floodOpacity="0.3" />
        </filter>
        <linearGradient id="studio-atelier-grad1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#faf8f5" />
          <stop offset="100%" stopColor="#f0ebe3" />
        </linearGradient>
        <linearGradient id="studio-atelier-bar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E86830" />
          <stop offset="50%" stopColor="#D45A25" />
          <stop offset="100%" stopColor="#C04D1A" />
        </linearGradient>
        <radialGradient id="studio-atelier-glow" cx="0.15" cy="0.35" r="0.5">
          <stop offset="0%" stopColor="#E86830" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#E86830" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#studio-atelier-grad1)" />
      <rect width="91" height="55" fill="url(#studio-atelier-glow)" />
      <rect width="91" height="55" fill="none" filter="url(#studio-atelier-texture)" opacity="0.03" />
      {/* Orange accent bar on left with gradient */}
      <rect x="0" y="0" width="2.5" height="55" fill="url(#studio-atelier-bar)" />
      {/* Asymmetric grid lines */}
      <line x1="30" y1="0" x2="30" y2="55" stroke="#E86830" strokeWidth="0.06" opacity="0.08" />
      <line x1="0" y1="38" x2="91" y2="38" stroke="#E86830" strokeWidth="0.06" opacity="0.08" />
      {/* Decorative paint splatter dots */}
      <circle cx="78" cy="8" r="3.5" fill="#E86830" opacity="0.05" />
      <circle cx="82" cy="6" r="1.8" fill="#E86830" opacity="0.08" />
      <circle cx="75" cy="12" r="1" fill="#D45A25" opacity="0.06" />
      {/* Small diamond accents */}
      <rect x="83" y="42" width="2" height="2" fill="#E86830" opacity="0.1" transform="rotate(45 84 43)" />
      <rect x="86" y="46" width="1.2" height="1.2" fill="#C04D1A" opacity="0.08" transform="rotate(45 86.6 46.6)" />
      {/* Name */}
      <text
        x="8"
        y="18"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="0.5"
        fill="#2a2a2a"
        filter="url(#studio-atelier-shadow)"
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
        fill="#E86830"
      >
        {data.nameEn}
      </text>
      <text
        x="8"
        y="31"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="#8a7a6a"
      >
        {data.titleJa}
      </text>
      {/* Studio tag line */}
      <line x1="8" y1="43" x2="24" y2="43" stroke="#E86830" strokeWidth="0.15" opacity="0.3" />
      <text
        x="8"
        y="47"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="1"
        letterSpacing="0.5"
        fill="#E86830"
        opacity="0.45"
      >
        ATELIER
      </text>
      {data.logo && <image href={data.logo} x="75" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="studio-atelier-btex" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" seed="5" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" />
        </filter>
        <linearGradient id="studio-atelier-bgrad" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#faf8f5" />
          <stop offset="100%" stopColor="#f0ebe3" />
        </linearGradient>
        <linearGradient id="studio-atelier-bbar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C04D1A" />
          <stop offset="50%" stopColor="#D45A25" />
          <stop offset="100%" stopColor="#E86830" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#studio-atelier-bgrad)" />
      <rect width="91" height="55" fill="none" filter="url(#studio-atelier-btex)" opacity="0.03" />
      <rect x="88.5" y="0" width="2.5" height="55" fill="url(#studio-atelier-bbar)" />
      {/* Grid lines mirrored */}
      <line x1="61" y1="0" x2="61" y2="55" stroke="#E86830" strokeWidth="0.06" opacity="0.08" />
      <line x1="0" y1="20" x2="91" y2="20" stroke="#E86830" strokeWidth="0.06" opacity="0.08" />
      {/* Decorative paint marks */}
      <circle cx="12" cy="46" r="2.5" fill="#E86830" opacity="0.04" />
      <circle cx="15" cy="48" r="1.2" fill="#D45A25" opacity="0.06" />
      <rect x="4" y="6" width="1.5" height="1.5" fill="#E86830" opacity="0.08" transform="rotate(45 4.75 6.75)" />
      {/* Company */}
      <text
        x="8"
        y="12"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        fill="#2a2a2a"
      >
        {data.companyJa}
      </text>
      <text
        x="8"
        y="17"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#E86830"
        opacity="0.7"
      >
        {data.companyEn}
      </text>
      {/* Title */}
      <text
        x="8"
        y="24"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#8a7a6a"
      >
        {data.titleJa}
      </text>
      <line x1="8" y1="27" x2="55" y2="27" stroke="#E86830" strokeWidth="0.08" opacity="0.15" />
      {/* Contact */}
      <text x="8" y="31.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1" letterSpacing="0.3" fill="#E86830" opacity="0.5">TEL</text>
      <text x="17" y="31.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#555555">{data.tel}</text>
      <text x="8" y="35.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1" letterSpacing="0.3" fill="#E86830" opacity="0.5">MAIL</text>
      <text x="17" y="35.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#555555">{data.email}</text>
      <text x="8" y="39.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1" letterSpacing="0.3" fill="#E86830" opacity="0.5">WEB</text>
      <text x="17" y="39.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#555555">{data.website}</text>
      <line x1="8" y1="42.5" x2="55" y2="42.5" stroke="#e0d8d0" strokeWidth="0.08" />
      <text x="8" y="46" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#aaa09a">
        〒{data.zipCode}
      </text>
      <text x="8" y="49.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#aaa09a">
        {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="75" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 2. BUREAU (局) — Design bureau formal
// Structured layout with teal accent, professional grid, engraved feel
// ============================================================
const bureauTemplate: TemplateDefinition = {
  id: 'studio-bureau',
  name: 'BUREAU',
  nameJa: '局',
  category: 'studio',
  designer: 'Bureau Borsche',
  description: '局の厳格さ。構造化されたグリッドの中の創造性。',
  accentColor: '#008080',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="studio-bureau-texture" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" seed="10" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" />
        </filter>
        <filter id="studio-bureau-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0.2" dy="0.2" stdDeviation="0.3" floodColor="#008080" floodOpacity="0.2" />
        </filter>
        <linearGradient id="studio-bureau-teal" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#006666" />
          <stop offset="50%" stopColor="#008080" />
          <stop offset="100%" stopColor="#009999" />
        </linearGradient>
        <linearGradient id="studio-bureau-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f8fafa" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#studio-bureau-bg)" />
      <rect width="91" height="55" fill="none" filter="url(#studio-bureau-texture)" opacity="0.02" />
      {/* Teal top strip with gradient */}
      <rect x="0" y="0" width="91" height="2" fill="url(#studio-bureau-teal)" />
      <rect x="0" y="53" width="91" height="2" fill="url(#studio-bureau-teal)" />
      {/* Grid structure */}
      <line x1="8" y1="6" x2="8" y2="49" stroke="#008080" strokeWidth="0.06" opacity="0.08" />
      <line x1="45.5" y1="6" x2="45.5" y2="49" stroke="#008080" strokeWidth="0.04" opacity="0.06" />
      <line x1="83" y1="6" x2="83" y2="49" stroke="#008080" strokeWidth="0.06" opacity="0.08" />
      {/* Corner crosshair marks */}
      <line x1="5" y1="5" x2="11" y2="5" stroke="#008080" strokeWidth="0.1" opacity="0.12" />
      <line x1="8" y1="3" x2="8" y2="7" stroke="#008080" strokeWidth="0.1" opacity="0.12" />
      <line x1="80" y1="50" x2="86" y2="50" stroke="#008080" strokeWidth="0.1" opacity="0.12" />
      <line x1="83" y1="48" x2="83" y2="52" stroke="#008080" strokeWidth="0.1" opacity="0.12" />
      {/* Decorative teal corner bracket */}
      <path d="M4,4 L4,8 M4,4 L8,4" fill="none" stroke="#008080" strokeWidth="0.15" opacity="0.15" />
      <path d="M87,51 L87,47 M87,51 L83,51" fill="none" stroke="#008080" strokeWidth="0.15" opacity="0.15" />
      {/* Name */}
      <text
        x="10"
        y="18"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="0.4"
        fill="#1a1a1a"
        filter="url(#studio-bureau-shadow)"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="24"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.25"
        fill="#008080"
      >
        {data.nameEn}
      </text>
      {/* Title */}
      <text
        x="10"
        y="32"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="#666666"
      >
        {data.titleJa}
      </text>
      {/* Bureau label */}
      <text
        x="83"
        y="48"
        textAnchor="end"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="0.9"
        letterSpacing="0.4"
        fill="#008080"
        opacity="0.35"
      >
        BUREAU
      </text>
      {data.logo && <image href={data.logo} x="74" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="studio-bureau-btex" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" seed="12" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" />
        </filter>
        <linearGradient id="studio-bureau-bteal" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#009999" />
          <stop offset="50%" stopColor="#008080" />
          <stop offset="100%" stopColor="#006666" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#studio-bureau-bg)" />
      <rect width="91" height="55" fill="none" filter="url(#studio-bureau-btex)" opacity="0.02" />
      <rect x="0" y="0" width="91" height="2" fill="url(#studio-bureau-bteal)" />
      <rect x="0" y="53" width="91" height="2" fill="url(#studio-bureau-bteal)" />
      {/* Grid marks */}
      <line x1="8" y1="6" x2="8" y2="49" stroke="#008080" strokeWidth="0.04" opacity="0.06" />
      <line x1="83" y1="6" x2="83" y2="49" stroke="#008080" strokeWidth="0.04" opacity="0.06" />
      {/* Corner brackets */}
      <path d="M4,4 L4,8 M4,4 L8,4" fill="none" stroke="#008080" strokeWidth="0.12" opacity="0.12" />
      <path d="M87,51 L87,47 M87,51 L83,51" fill="none" stroke="#008080" strokeWidth="0.12" opacity="0.12" />
      {/* Subtle watermark circle */}
      <circle cx="75" cy="40" r="8" fill="none" stroke="#008080" strokeWidth="0.06" opacity="0.05" />
      <circle cx="75" cy="40" r="5" fill="none" stroke="#008080" strokeWidth="0.04" opacity="0.04" />
      {/* Company */}
      <text x="10" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#1a1a1a">{data.companyJa}</text>
      <text x="10" y="16.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#008080">{data.companyEn}</text>
      {/* Title */}
      <text x="10" y="21" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#777">{data.titleJa}</text>
      <line x1="10" y1="24" x2="81" y2="24" stroke="#008080" strokeWidth="0.12" opacity="0.12" />
      {/* Contact - structured grid */}
      <text x="10" y="28.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1" letterSpacing="0.3" fill="#008080">TEL</text>
      <text x="22" y="28.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#333333">{data.tel}</text>
      <text x="10" y="32.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1" letterSpacing="0.3" fill="#008080">MAIL</text>
      <text x="22" y="32.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#333333">{data.email}</text>
      <text x="10" y="36.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1" letterSpacing="0.3" fill="#008080">WEB</text>
      <text x="22" y="36.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#333333">{data.website}</text>
      <line x1="10" y1="40" x2="81" y2="40" stroke="#e0e0e0" strokeWidth="0.08" />
      <text x="10" y="44" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#999999">
        〒{data.zipCode}
      </text>
      <text x="10" y="48" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#999999">
        {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="74" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 3. LAB (研) — Research lab / experimental studio
// Technical grid with magenta accent, data-driven feel, scientific
// ============================================================
const labTemplate: TemplateDefinition = {
  id: 'studio-lab',
  name: 'LAB',
  nameJa: '研',
  category: 'studio',
  designer: 'IDEO',
  description: '研究所の知性。実験精神が宿るデータ駆動の美学。',
  accentColor: '#CC0066',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="studio-lab-texture" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" seed="7" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" />
        </filter>
        <filter id="studio-lab-scanline" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="turbulence" baseFrequency="0 1.5" numOctaves="1" seed="1" result="scanlines" />
          <feColorMatrix type="saturate" values="0" in="scanlines" result="grayScanlines" />
          <feBlend in="SourceGraphic" in2="grayScanlines" mode="multiply" />
        </filter>
        <pattern id="studio-lab-fg" x="0" y="0" width="9.1" height="9.17" patternUnits="userSpaceOnUse">
          <rect width="9.1" height="9.17" fill="none" stroke="#CC0066" strokeWidth="0.04" opacity="0.08" />
        </pattern>
        <radialGradient id="studio-lab-glow" cx="0.3" cy="0.4" r="0.5">
          <stop offset="0%" stopColor="#CC0066" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#CC0066" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="studio-lab-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fcfafc" />
          <stop offset="100%" stopColor="#f5f0f5" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#studio-lab-grad)" />
      <rect width="91" height="55" fill="url(#studio-lab-fg)" />
      <rect width="91" height="55" fill="url(#studio-lab-glow)" />
      <rect width="91" height="55" fill="none" filter="url(#studio-lab-texture)" opacity="0.02" />
      {/* Experiment markers: concentric circles */}
      <circle cx="8" cy="8" r="0.5" fill="#CC0066" />
      <circle cx="8" cy="8" r="2" fill="none" stroke="#CC0066" strokeWidth="0.1" opacity="0.25" />
      <circle cx="8" cy="8" r="3.5" fill="none" stroke="#CC0066" strokeWidth="0.06" opacity="0.12" />
      {/* Data point scatter */}
      <circle cx="76" cy="44" r="0.3" fill="#CC0066" opacity="0.2" />
      <circle cx="80" cy="42" r="0.25" fill="#CC0066" opacity="0.15" />
      <circle cx="78" cy="47" r="0.2" fill="#CC0066" opacity="0.12" />
      <circle cx="83" cy="45" r="0.35" fill="#CC0066" opacity="0.18" />
      {/* Crosshair indicator */}
      <line x1="72" y1="10" x2="84" y2="10" stroke="#CC0066" strokeWidth="0.06" opacity="0.1" />
      <line x1="78" y1="5" x2="78" y2="15" stroke="#CC0066" strokeWidth="0.06" opacity="0.1" />
      {/* Name */}
      <text
        x="14"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="0.4"
        fill="#2a2a2a"
      >
        {data.nameJa}
      </text>
      <text
        x="14"
        y="28"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.25"
        fill="#CC0066"
      >
        {data.nameEn}
      </text>
      <text
        x="14"
        y="35"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      {/* Lab badge */}
      <rect x="14" y="40" width="14" height="3.5" fill="#CC0066" opacity="0.08" rx="0.4" />
      <rect x="14" y="40" width="14" height="3.5" fill="none" stroke="#CC0066" strokeWidth="0.08" opacity="0.2" rx="0.4" />
      <text x="15.5" y="42.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="600" fontSize="1.3" letterSpacing="0.5" fill="#CC0066">LAB</text>
      {data.logo && <image href={data.logo} x="75" y="28" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="studio-lab-btex" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" seed="9" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" />
        </filter>
        <pattern id="studio-lab-bg" x="0" y="0" width="9.1" height="9.17" patternUnits="userSpaceOnUse">
          <rect width="9.1" height="9.17" fill="none" stroke="#CC0066" strokeWidth="0.03" opacity="0.05" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#studio-lab-grad)" />
      <rect width="91" height="55" fill="url(#studio-lab-bg)" />
      <rect width="91" height="55" fill="none" filter="url(#studio-lab-btex)" opacity="0.02" />
      {/* Experiment rings top-right */}
      <circle cx="82" cy="8" r="3" fill="none" stroke="#CC0066" strokeWidth="0.06" opacity="0.08" />
      <circle cx="82" cy="8" r="1.5" fill="none" stroke="#CC0066" strokeWidth="0.04" opacity="0.06" />
      <circle cx="82" cy="8" r="0.3" fill="#CC0066" opacity="0.12" />
      {/* Bottom left data scatter */}
      <circle cx="10" cy="48" r="0.25" fill="#CC0066" opacity="0.1" />
      <circle cx="14" cy="46" r="0.2" fill="#CC0066" opacity="0.08" />
      <circle cx="12" cy="50" r="0.3" fill="#CC0066" opacity="0.12" />
      {/* Company */}
      <text x="8" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#2a2a2a">{data.companyJa}</text>
      <text x="8" y="16.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#CC0066" opacity="0.7">{data.companyEn}</text>
      {/* Title */}
      <text x="8" y="21" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#888">{data.titleJa}</text>
      <line x1="8" y1="24" x2="83" y2="24" stroke="#CC0066" strokeWidth="0.1" opacity="0.12" />
      {/* Contact */}
      <text x="8" y="28.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1" letterSpacing="0.3" fill="#CC0066" opacity="0.5">TEL</text>
      <text x="17" y="28.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#555555">{data.tel}</text>
      <text x="8" y="32.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1" letterSpacing="0.3" fill="#CC0066" opacity="0.5">MAIL</text>
      <text x="17" y="32.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#555555">{data.email}</text>
      <text x="8" y="36.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1" letterSpacing="0.3" fill="#CC0066" opacity="0.5">WEB</text>
      <text x="17" y="36.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#555555">{data.website}</text>
      <line x1="8" y1="40" x2="83" y2="40" stroke="#e0d0e0" strokeWidth="0.06" />
      <text x="8" y="44" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#aaaaaa">〒{data.zipCode}</text>
      <text x="8" y="48" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#aaaaaa">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="75" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 4. WORKSHOP (作) — Hands-on workshop
// Warm gray with craft-like details, letterpress texture, notebook feel
// ============================================================
const workshopTemplate: TemplateDefinition = {
  id: 'studio-workshop',
  name: 'WORKSHOP',
  nameJa: '作',
  category: 'studio',
  designer: 'Werkstatt',
  description: '作業場の温もり。手仕事の誠実さが宿るデザイン。',
  accentColor: '#8B7355',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="studio-workshop-texture" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="5" seed="3" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" />
        </filter>
        <filter id="studio-workshop-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0.15" dy="0.15" stdDeviation="0.2" floodColor="#8B7355" floodOpacity="0.15" />
        </filter>
        <linearGradient id="studio-workshop-paper" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#f7f3ed" />
          <stop offset="50%" stopColor="#f5f2ed" />
          <stop offset="100%" stopColor="#efe9e0" />
        </linearGradient>
        <linearGradient id="studio-workshop-rule" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8B7355" stopOpacity="0" />
          <stop offset="20%" stopColor="#8B7355" stopOpacity="0.15" />
          <stop offset="80%" stopColor="#8B7355" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#8B7355" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#studio-workshop-paper)" />
      <rect width="91" height="55" fill="none" filter="url(#studio-workshop-texture)" opacity="0.04" />
      {/* Craft paper ruled lines */}
      <line x1="0" y1="6" x2="91" y2="6" stroke="#d8d2c8" strokeWidth="0.08" />
      <line x1="0" y1="48" x2="91" y2="48" stroke="#d8d2c8" strokeWidth="0.08" />
      {/* Left margin rule */}
      <rect x="9.8" y="6" width="0.4" height="42" fill="url(#studio-workshop-rule)" />
      {/* Stitching holes along top */}
      <circle cx="20" cy="3" r="0.3" fill="none" stroke="#c8bfb0" strokeWidth="0.08" />
      <circle cx="35" cy="3" r="0.3" fill="none" stroke="#c8bfb0" strokeWidth="0.08" />
      <circle cx="50" cy="3" r="0.3" fill="none" stroke="#c8bfb0" strokeWidth="0.08" />
      <circle cx="65" cy="3" r="0.3" fill="none" stroke="#c8bfb0" strokeWidth="0.08" />
      {/* Distressed corner fold hint */}
      <path d="M83,0 L91,0 L91,8" fill="none" stroke="#d0c8b8" strokeWidth="0.15" opacity="0.2" />
      <line x1="83" y1="0" x2="91" y2="8" stroke="#d0c8b8" strokeWidth="0.08" opacity="0.1" />
      {/* Name */}
      <text
        x="14"
        y="21"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="0.4"
        fill="#3a3530"
        filter="url(#studio-workshop-shadow)"
      >
        {data.nameJa}
      </text>
      <text
        x="14"
        y="27"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.25"
        fill="#8B7355"
      >
        {data.nameEn}
      </text>
      <text
        x="14"
        y="34"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="#999080"
      >
        {data.titleJa}
      </text>
      {/* Workshop stamp */}
      <rect x="68" y="37" width="16" height="7" fill="none" stroke="#8B7355" strokeWidth="0.2" opacity="0.25" rx="0.5" />
      <text x="76" y="41.5" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="600" fontSize="1.2" letterSpacing="0.3" fill="#8B7355" opacity="0.35">WORKSHOP</text>
      {data.logo && <image href={data.logo} x="75" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="studio-workshop-btex" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.45" numOctaves="4" seed="4" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#studio-workshop-paper)" />
      <rect width="91" height="55" fill="none" filter="url(#studio-workshop-btex)" opacity="0.04" />
      <line x1="0" y1="6" x2="91" y2="6" stroke="#d8d2c8" strokeWidth="0.08" />
      <line x1="0" y1="48" x2="91" y2="48" stroke="#d8d2c8" strokeWidth="0.08" />
      <rect x="9.8" y="6" width="0.4" height="42" fill="url(#studio-workshop-rule)" />
      {/* Stitching holes */}
      <circle cx="20" cy="52" r="0.3" fill="none" stroke="#c8bfb0" strokeWidth="0.08" />
      <circle cx="35" cy="52" r="0.3" fill="none" stroke="#c8bfb0" strokeWidth="0.08" />
      <circle cx="50" cy="52" r="0.3" fill="none" stroke="#c8bfb0" strokeWidth="0.08" />
      <circle cx="65" cy="52" r="0.3" fill="none" stroke="#c8bfb0" strokeWidth="0.08" />
      {/* Company */}
      <text x="14" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#3a3530">{data.companyJa}</text>
      <text x="14" y="18.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#8B7355">{data.companyEn}</text>
      {/* Title */}
      <text x="14" y="23" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#999080">{data.titleJa}</text>
      <line x1="14" y1="26" x2="80" y2="26" stroke="#d8d2c8" strokeWidth="0.1" />
      {/* Contact */}
      <text x="14" y="30" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1" letterSpacing="0.3" fill="#8B7355" opacity="0.5">TEL</text>
      <text x="23" y="30" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#5A5040">{data.tel}</text>
      <text x="14" y="34" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1" letterSpacing="0.3" fill="#8B7355" opacity="0.5">MAIL</text>
      <text x="23" y="34" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#5A5040">{data.email}</text>
      <text x="14" y="38" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1" letterSpacing="0.3" fill="#8B7355" opacity="0.5">WEB</text>
      <text x="23" y="38" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#5A5040">{data.website}</text>
      <line x1="14" y1="41" x2="80" y2="41" stroke="#d8d2c8" strokeWidth="0.06" />
      <text x="14" y="44.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#999080">〒{data.zipCode}</text>
      <text x="14" y="48" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#999080">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="75" y="8" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 5. OFFICE (事) — Modern design office
// Matte black header with clean white body, editorial precision
// ============================================================
const officeTemplate: TemplateDefinition = {
  id: 'studio-office',
  name: 'OFFICE',
  nameJa: '事',
  category: 'studio',
  designer: 'Norm',
  description: '事務所の洗練。無駄を削ぎ落としたプロの佇まい。',
  accentColor: '#333333',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="studio-office-texture" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" seed="20" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" />
        </filter>
        <filter id="studio-office-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0.2" dy="0.2" stdDeviation="0.3" floodColor="#000000" floodOpacity="0.15" />
        </filter>
        <linearGradient id="studio-office-header" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="50%" stopColor="#333333" />
          <stop offset="100%" stopColor="#3a3a3a" />
        </linearGradient>
        <linearGradient id="studio-office-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#fafafa" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#studio-office-body)" />
      <rect width="91" height="55" fill="none" filter="url(#studio-office-texture)" opacity="0.015" />
      {/* Matte black header */}
      <rect x="0" y="0" width="91" height="9" fill="url(#studio-office-header)" />
      {/* Fine pinstripe in header */}
      <line x1="0" y1="8.5" x2="91" y2="8.5" stroke="#444" strokeWidth="0.08" />
      <text
        x="8"
        y="6"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="1.5"
        letterSpacing="0.4"
        fill="#ffffff"
      >
        {data.companyEn.toUpperCase()}
      </text>
      {/* Decorative thin rules */}
      <line x1="8" y1="12" x2="83" y2="12" stroke="#e8e8e8" strokeWidth="0.06" />
      <line x1="8" y1="48" x2="83" y2="48" stroke="#e0e0e0" strokeWidth="0.08" />
      {/* Subtle corner marks */}
      <line x1="5" y1="12" x2="5" y2="14" stroke="#cccccc" strokeWidth="0.08" />
      <line x1="86" y1="46" x2="86" y2="48" stroke="#cccccc" strokeWidth="0.08" />
      {/* Name */}
      <text
        x="8"
        y="24"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="0.4"
        fill="#1a1a1a"
        filter="url(#studio-office-shadow)"
      >
        {data.nameJa}
      </text>
      <text x="8" y="30" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.25" fill="#666666">{data.nameEn}</text>
      <text x="8" y="37" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#999999">{data.titleJa}</text>
      {/* Minimal office mark */}
      <rect x="80" y="44" width="3" height="3" fill="#333" opacity="0.06" />
      {data.logo && <image href={data.logo} x="76" y="1" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="studio-office-btex" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" seed="22" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#studio-office-body)" />
      <rect width="91" height="55" fill="none" filter="url(#studio-office-btex)" opacity="0.015" />
      <rect x="0" y="0" width="91" height="9" fill="url(#studio-office-header)" />
      <line x1="0" y1="8.5" x2="91" y2="8.5" stroke="#444" strokeWidth="0.08" />
      <text x="8" y="6" fontFamily="'Space Grotesk', sans-serif" fontWeight="500" fontSize="1.5" letterSpacing="0.4" fill="#ffffff">
        {data.companyEn.toUpperCase()}
      </text>
      {/* Company JP */}
      <text x="8" y="17" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.2" fill="#1a1a1a">{data.companyJa}</text>
      {/* Title */}
      <text x="8" y="21.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#999">{data.titleJa}</text>
      <line x1="8" y1="24" x2="83" y2="24" stroke="#e0e0e0" strokeWidth="0.08" />
      {/* Decorative corner */}
      <line x1="5" y1="12" x2="5" y2="14" stroke="#ccc" strokeWidth="0.08" />
      <line x1="86" y1="46" x2="86" y2="48" stroke="#ccc" strokeWidth="0.08" />
      <rect x="80" y="44" width="3" height="3" fill="#333" opacity="0.04" />
      {/* Contact */}
      <text x="8" y="28.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1" letterSpacing="0.3" fill="#999">TEL</text>
      <text x="18" y="28.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#555555">{data.tel}</text>
      <text x="8" y="32.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1" letterSpacing="0.3" fill="#999">MAIL</text>
      <text x="18" y="32.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#555555">{data.email}</text>
      <text x="8" y="36.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1" letterSpacing="0.3" fill="#999">WEB</text>
      <text x="18" y="36.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#555555">{data.website}</text>
      <line x1="8" y1="40" x2="83" y2="40" stroke="#e0e0e0" strokeWidth="0.06" />
      <text x="8" y="44" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#aaaaaa">〒{data.zipCode}</text>
      <text x="8" y="48" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#aaaaaa">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="76" y="1" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 6. AGENCY (社) — Creative agency bold
// Matte black with vibrant teal neon glow, cinema-grade presence
// ============================================================
const agencyTemplate: TemplateDefinition = {
  id: 'studio-agency',
  name: 'AGENCY',
  nameJa: '社',
  category: 'studio',
  designer: 'Wieden+Kennedy',
  description: '社の力強さ。エージェンシーの自信が漲る一枚。',
  accentColor: '#00BFA5',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="studio-agency-texture" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="4" seed="30" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" />
        </filter>
        <filter id="studio-agency-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="0.8" floodColor="#00BFA5" floodOpacity="0.35" />
        </filter>
        <linearGradient id="studio-agency-bg" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#1e1e1e" />
          <stop offset="100%" stopColor="#141414" />
        </linearGradient>
        <linearGradient id="studio-agency-accent" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00E6C0" />
          <stop offset="50%" stopColor="#00BFA5" />
          <stop offset="100%" stopColor="#009980" />
        </linearGradient>
        <radialGradient id="studio-agency-radial" cx="0.05" cy="0.1" r="0.5">
          <stop offset="0%" stopColor="#00BFA5" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#00BFA5" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#studio-agency-bg)" />
      <rect width="91" height="55" fill="url(#studio-agency-radial)" />
      <rect width="91" height="55" fill="none" filter="url(#studio-agency-texture)" opacity="0.04" />
      {/* Teal accent corner L-bracket */}
      <rect x="0" y="0" width="22" height="2.5" fill="url(#studio-agency-accent)" />
      <rect x="0" y="0" width="2.5" height="16" fill="url(#studio-agency-accent)" />
      {/* Corner highlight dot */}
      <circle cx="3" cy="3" r="0.6" fill="#00E6C0" opacity="0.3" />
      {/* Diagonal speed line */}
      <line x1="60" y1="0" x2="91" y2="25" stroke="#00BFA5" strokeWidth="0.06" opacity="0.06" />
      <line x1="70" y1="0" x2="91" y2="17" stroke="#00BFA5" strokeWidth="0.04" opacity="0.04" />
      {/* Name */}
      <text
        x="10"
        y="24"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="6.5"
        letterSpacing="0.5"
        fill="#ffffff"
        filter="url(#studio-agency-glow)"
      >
        {data.nameJa}
      </text>
      <text x="10" y="30" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.3" fill="#00BFA5">{data.nameEn}</text>
      <text x="10" y="37" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#667777">{data.titleJa}</text>
      {/* Agency label with glow */}
      <text x="83" y="49" textAnchor="end" fontFamily="'Space Grotesk', sans-serif" fontWeight="500" fontSize="1" letterSpacing="0.6" fill="#00BFA5" opacity="0.35">AGENCY</text>
      {data.logo && <image href={data.logo} x="76" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="studio-agency-btex" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" seed="32" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" />
        </filter>
        <radialGradient id="studio-agency-bradial" cx="0.95" cy="0.9" r="0.5">
          <stop offset="0%" stopColor="#00BFA5" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#00BFA5" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#studio-agency-bg)" />
      <rect width="91" height="55" fill="url(#studio-agency-bradial)" />
      <rect width="91" height="55" fill="none" filter="url(#studio-agency-btex)" opacity="0.04" />
      {/* Bottom-right L-bracket */}
      <rect x="69" y="52.5" width="22" height="2.5" fill="url(#studio-agency-accent)" />
      <rect x="88.5" y="39" width="2.5" height="16" fill="url(#studio-agency-accent)" />
      <circle cx="88" cy="52" r="0.6" fill="#00E6C0" opacity="0.3" />
      {/* Diagonal lines */}
      <line x1="0" y1="30" x2="31" y2="55" stroke="#00BFA5" strokeWidth="0.06" opacity="0.06" />
      <line x1="0" y1="38" x2="21" y2="55" stroke="#00BFA5" strokeWidth="0.04" opacity="0.04" />
      {/* Company */}
      <text x="10" y="13" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#ffffff">{data.companyJa}</text>
      <text x="10" y="17.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#00BFA5" opacity="0.7">{data.companyEn}</text>
      {/* Title */}
      <text x="10" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#667777">{data.titleJa}</text>
      <line x1="10" y1="25" x2="80" y2="25" stroke="#00BFA5" strokeWidth="0.12" opacity="0.12" />
      {/* Contact */}
      <text x="10" y="29.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1" letterSpacing="0.3" fill="#00BFA5" opacity="0.5">TEL</text>
      <text x="20" y="29.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#999999">{data.tel}</text>
      <text x="10" y="33.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1" letterSpacing="0.3" fill="#00BFA5" opacity="0.5">MAIL</text>
      <text x="20" y="33.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#999999">{data.email}</text>
      <text x="10" y="37.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1" letterSpacing="0.3" fill="#00BFA5" opacity="0.5">WEB</text>
      <text x="20" y="37.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#999999">{data.website}</text>
      <line x1="10" y1="41" x2="80" y2="41" stroke="#333" strokeWidth="0.1" />
      <text x="10" y="45" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#555555">〒{data.zipCode}</text>
      <text x="10" y="49" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#555555">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="4" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 7. HQ (本部) — Headquarters command center
// Strong horizontal banding, military-clean precision, navy blue
// ============================================================
const hqTemplate: TemplateDefinition = {
  id: 'studio-hq',
  name: 'HQ',
  nameJa: '本部',
  category: 'studio',
  designer: 'Base Design',
  description: '本部の統率力。水平帯が生む指揮所の秩序。',
  accentColor: '#2E4057',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="studio-hq-texture" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" seed="40" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" />
        </filter>
        <filter id="studio-hq-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0.2" dy="0.2" stdDeviation="0.3" floodColor="#2E4057" floodOpacity="0.2" />
        </filter>
        <linearGradient id="studio-hq-band" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1E3047" />
          <stop offset="50%" stopColor="#2E4057" />
          <stop offset="100%" stopColor="#3E5067" />
        </linearGradient>
        <linearGradient id="studio-hq-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f5f5f7" />
          <stop offset="100%" stopColor="#eeeef0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#studio-hq-bg)" />
      <rect width="91" height="55" fill="none" filter="url(#studio-hq-texture)" opacity="0.02" />
      {/* Horizontal bands */}
      <rect x="0" y="0" width="91" height="3.5" fill="url(#studio-hq-band)" />
      <rect x="0" y="5" width="91" height="0.5" fill="#2E4057" opacity="0.25" />
      <rect x="0" y="51" width="91" height="0.5" fill="#2E4057" opacity="0.25" />
      <rect x="0" y="51.5" width="91" height="3.5" fill="url(#studio-hq-band)" />
      {/* HQ marker badge */}
      <rect x="78" y="0.5" width="8" height="2.5" fill="#5A7A9A" opacity="0.3" rx="0.3" />
      <text x="82" y="2.4" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="1.4" fill="#ffffff">HQ</text>
      {/* Rank-like bars decorative */}
      <rect x="4" y="7" width="6" height="0.3" fill="#2E4057" opacity="0.08" />
      <rect x="4" y="8" width="4" height="0.3" fill="#2E4057" opacity="0.06" />
      <rect x="4" y="9" width="2" height="0.3" fill="#2E4057" opacity="0.04" />
      {/* Name */}
      <text
        x="8"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="6"
        letterSpacing="0.5"
        fill="#2E4057"
        filter="url(#studio-hq-shadow)"
      >
        {data.nameJa}
      </text>
      <text x="8" y="28" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.3" fill="#5A7A9A">{data.nameEn}</text>
      <text x="8" y="36" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#8899AA">{data.titleJa}</text>
      {/* Decorative horizontal rule with diamond */}
      <line x1="8" y1="43" x2="38" y2="43" stroke="#2E4057" strokeWidth="0.06" opacity="0.1" />
      <rect x="39" y="42" width="2" height="2" fill="#2E4057" opacity="0.06" transform="rotate(45 40 43)" />
      <line x1="43" y1="43" x2="83" y2="43" stroke="#2E4057" strokeWidth="0.06" opacity="0.1" />
      {data.logo && <image href={data.logo} x="76" y="7" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="studio-hq-btex" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="3" seed="42" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#studio-hq-bg)" />
      <rect width="91" height="55" fill="none" filter="url(#studio-hq-btex)" opacity="0.02" />
      <rect x="0" y="0" width="91" height="3.5" fill="url(#studio-hq-band)" />
      <rect x="0" y="5" width="91" height="0.5" fill="#2E4057" opacity="0.25" />
      <rect x="0" y="51" width="91" height="0.5" fill="#2E4057" opacity="0.25" />
      <rect x="0" y="51.5" width="91" height="3.5" fill="url(#studio-hq-band)" />
      {/* Rank bars right side */}
      <rect x="81" y="7" width="6" height="0.3" fill="#2E4057" opacity="0.08" />
      <rect x="83" y="8" width="4" height="0.3" fill="#2E4057" opacity="0.06" />
      <rect x="85" y="9" width="2" height="0.3" fill="#2E4057" opacity="0.04" />
      {/* Diamond decorative rule */}
      <line x1="8" y1="24" x2="38" y2="24" stroke="#2E4057" strokeWidth="0.06" opacity="0.1" />
      <rect x="39" y="23" width="2" height="2" fill="#2E4057" opacity="0.06" transform="rotate(45 40 24)" />
      <line x1="43" y1="24" x2="83" y2="24" stroke="#2E4057" strokeWidth="0.06" opacity="0.1" />
      {/* Company */}
      <text x="8" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="2.5" fill="#2E4057">{data.companyJa}</text>
      <text x="8" y="18.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#5A7A9A">{data.companyEn}</text>
      <text x="8" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#8899AA">{data.titleJa}</text>
      {/* Contact */}
      <text x="8" y="29" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1" letterSpacing="0.3" fill="#5A7A9A" opacity="0.5">TEL</text>
      <text x="18" y="29" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#4A5A6A">{data.tel}</text>
      <text x="8" y="33" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1" letterSpacing="0.3" fill="#5A7A9A" opacity="0.5">MAIL</text>
      <text x="18" y="33" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#4A5A6A">{data.email}</text>
      <text x="8" y="37" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1" letterSpacing="0.3" fill="#5A7A9A" opacity="0.5">WEB</text>
      <text x="18" y="37" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#4A5A6A">{data.website}</text>
      <line x1="8" y1="40" x2="83" y2="40" stroke="#c0c8d0" strokeWidth="0.06" />
      <text x="8" y="44" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#8899AA">〒{data.zipCode}</text>
      <text x="8" y="48" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#8899AA">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="76" y="7" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 8. LOFT (天) — Open loft creative space
// Airy centered layout, warm terracotta tones, gallery ceiling beams
// ============================================================
const loftTemplate: TemplateDefinition = {
  id: 'studio-loft',
  name: 'LOFT',
  nameJa: '天',
  category: 'studio',
  designer: 'Kinfolk',
  description: '天井の高い空間。開放感と温もりが共存するロフト。',
  accentColor: '#B5856D',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="studio-loft-texture" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.4" numOctaves="5" seed="50" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" />
        </filter>
        <filter id="studio-loft-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0.1" dy="0.15" stdDeviation="0.25" floodColor="#B5856D" floodOpacity="0.12" />
        </filter>
        <linearGradient id="studio-loft-bg" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#faf8f5" />
          <stop offset="50%" stopColor="#f8f6f3" />
          <stop offset="100%" stopColor="#f5f2ee" />
        </linearGradient>
        <linearGradient id="studio-loft-beam" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#B5856D" stopOpacity="0" />
          <stop offset="30%" stopColor="#B5856D" stopOpacity="0.12" />
          <stop offset="70%" stopColor="#B5856D" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#B5856D" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#studio-loft-bg)" />
      <rect width="91" height="55" fill="none" filter="url(#studio-loft-texture)" opacity="0.03" />
      {/* Exposed beam lines */}
      <rect x="0" y="3.5" width="91" height="0.4" fill="url(#studio-loft-beam)" />
      <rect x="0" y="5.5" width="91" height="0.2" fill="url(#studio-loft-beam)" opacity="0.6" />
      {/* Ceiling light rectangle */}
      <rect x="38" y="1" width="15" height="1" fill="#B5856D" opacity="0.06" rx="0.5" />
      {/* Warm floor detail */}
      <rect x="0" y="49" width="91" height="0.2" fill="url(#studio-loft-beam)" opacity="0.5" />
      {/* Airy centered name */}
      <text
        x="45.5"
        y="21"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="6"
        letterSpacing="0.6"
        fill="#3a3530"
        filter="url(#studio-loft-shadow)"
      >
        {data.nameJa}
      </text>
      <text x="45.5" y="27" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.35" fill="#B5856D">{data.nameEn}</text>
      {/* Decorative line separator */}
      <line x1="35" y1="31" x2="56" y2="31" stroke="#B5856D" strokeWidth="0.1" opacity="0.2" />
      <circle cx="45.5" cy="31" r="0.4" fill="#B5856D" opacity="0.15" />
      <text x="45.5" y="37" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#999080">{data.titleJa}</text>
      {/* Warm bottom detail */}
      <line x1="30" y1="46" x2="61" y2="46" stroke="#B5856D" strokeWidth="0.08" opacity="0.15" />
      {data.logo && <image href={data.logo} x="76" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="studio-loft-btex" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.35" numOctaves="4" seed="52" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#studio-loft-bg)" />
      <rect width="91" height="55" fill="none" filter="url(#studio-loft-btex)" opacity="0.03" />
      {/* Beam lines */}
      <rect x="0" y="3.5" width="91" height="0.4" fill="url(#studio-loft-beam)" />
      <rect x="0" y="5.5" width="91" height="0.2" fill="url(#studio-loft-beam)" opacity="0.6" />
      <rect x="38" y="1" width="15" height="1" fill="#B5856D" opacity="0.06" rx="0.5" />
      <rect x="0" y="49" width="91" height="0.2" fill="url(#studio-loft-beam)" opacity="0.5" />
      {/* Company centered */}
      <text x="45.5" y="14" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" fill="#3a3530">{data.companyJa}</text>
      <text x="45.5" y="18.5" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.5" fill="#B5856D">{data.companyEn}</text>
      {/* Title */}
      <text x="45.5" y="22.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#999080">{data.titleJa}</text>
      <line x1="30" y1="25" x2="61" y2="25" stroke="#B5856D" strokeWidth="0.06" opacity="0.15" />
      <circle cx="45.5" cy="25" r="0.3" fill="#B5856D" opacity="0.1" />
      {/* Contact - centered, airy */}
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.5" fill="#6A5A4A">{data.tel}</text>
      <text x="45.5" y="34" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.5" fill="#6A5A4A">{data.email}</text>
      <text x="45.5" y="38" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.5" fill="#6A5A4A">{data.website}</text>
      <line x1="30" y1="41" x2="61" y2="41" stroke="#B5856D" strokeWidth="0.04" opacity="0.1" />
      <text x="45.5" y="45" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#B0A898">〒{data.zipCode}</text>
      <text x="45.5" y="48.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#B0A898">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="4" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 9. DEN (巣) — Creative den / hideout
// Dark cozy feel, warm amber glow, firelight ambience
// ============================================================
const denTemplate: TemplateDefinition = {
  id: 'studio-den',
  name: 'DEN',
  nameJa: '巣',
  category: 'studio',
  designer: 'Snøhetta',
  description: '巣の親密さ。暗がりに灯る温かな光の創造空間。',
  accentColor: '#D4930A',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="studio-den-texture" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.4" numOctaves="5" seed="60" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" />
        </filter>
        <filter id="studio-den-glow-f" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="0.6" floodColor="#D4930A" floodOpacity="0.25" />
        </filter>
        <radialGradient id="studio-den-glow" cx="0.2" cy="0.4" r="0.55">
          <stop offset="0%" stopColor="#D4930A" stopOpacity="0.08" />
          <stop offset="60%" stopColor="#D4930A" stopOpacity="0.02" />
          <stop offset="100%" stopColor="#D4930A" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="studio-den-bg" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#2a2620" />
          <stop offset="100%" stopColor="#201e1a" />
        </linearGradient>
        <linearGradient id="studio-den-amber" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8A820" />
          <stop offset="50%" stopColor="#D4930A" />
          <stop offset="100%" stopColor="#B07808" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#studio-den-bg)" />
      <rect width="91" height="55" fill="url(#studio-den-glow)" />
      <rect width="91" height="55" fill="none" filter="url(#studio-den-texture)" opacity="0.05" />
      {/* Amber accent line with glow */}
      <line x1="8" y1="10" x2="8" y2="44" stroke="#D4930A" strokeWidth="0.25" opacity="0.35" />
      {/* Amber ember dot */}
      <circle cx="8" cy="8" r="1" fill="#D4930A" opacity="0.5" />
      <circle cx="8" cy="8" r="2" fill="#D4930A" opacity="0.08" />
      <circle cx="8" cy="8" r="3.5" fill="#D4930A" opacity="0.03" />
      {/* Floating spark particles */}
      <circle cx="72" cy="12" r="0.3" fill="#E8A820" opacity="0.15" />
      <circle cx="78" cy="8" r="0.2" fill="#D4930A" opacity="0.12" />
      <circle cx="68" cy="15" r="0.15" fill="#E8A820" opacity="0.1" />
      <circle cx="82" cy="44" r="0.25" fill="#D4930A" opacity="0.1" />
      {/* Name */}
      <text
        x="14"
        y="23"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="0.4"
        fill="#e8ddd0"
        filter="url(#studio-den-glow-f)"
      >
        {data.nameJa}
      </text>
      <text x="14" y="29" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.25" fill="#D4930A">{data.nameEn}</text>
      <text x="14" y="36" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#807060">{data.titleJa}</text>
      {/* Warm horizontal accent */}
      <line x1="14" y1="42" x2="40" y2="42" stroke="#D4930A" strokeWidth="0.08" opacity="0.15" />
      {data.logo && <image href={data.logo} x="76" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="studio-den-btex" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.35" numOctaves="4" seed="62" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" />
        </filter>
        <radialGradient id="studio-den-bglow" cx="0.8" cy="0.6" r="0.5">
          <stop offset="0%" stopColor="#D4930A" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#D4930A" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#studio-den-bg)" />
      <rect width="91" height="55" fill="url(#studio-den-bglow)" />
      <rect width="91" height="55" fill="none" filter="url(#studio-den-btex)" opacity="0.05" />
      {/* Amber line right */}
      <line x1="83" y1="10" x2="83" y2="44" stroke="#D4930A" strokeWidth="0.25" opacity="0.35" />
      <circle cx="83" cy="47" r="1" fill="#D4930A" opacity="0.5" />
      <circle cx="83" cy="47" r="2" fill="#D4930A" opacity="0.08" />
      {/* Floating sparks */}
      <circle cx="12" cy="44" r="0.2" fill="#E8A820" opacity="0.1" />
      <circle cx="18" cy="48" r="0.15" fill="#D4930A" opacity="0.08" />
      <circle cx="8" cy="8" r="0.25" fill="#E8A820" opacity="0.12" />
      {/* Company */}
      <text x="10" y="13" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#e8ddd0">{data.companyJa}</text>
      <text x="10" y="17.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#D4930A" opacity="0.6">{data.companyEn}</text>
      {/* Title */}
      <text x="10" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#807060">{data.titleJa}</text>
      <line x1="10" y1="25" x2="78" y2="25" stroke="#D4930A" strokeWidth="0.08" opacity="0.15" />
      {/* Contact */}
      <text x="10" y="29.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1" letterSpacing="0.3" fill="#D4930A" opacity="0.4">TEL</text>
      <text x="19" y="29.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#A09080">{data.tel}</text>
      <text x="10" y="33.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1" letterSpacing="0.3" fill="#D4930A" opacity="0.4">MAIL</text>
      <text x="19" y="33.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#A09080">{data.email}</text>
      <text x="10" y="37.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1" letterSpacing="0.3" fill="#D4930A" opacity="0.4">WEB</text>
      <text x="19" y="37.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#A09080">{data.website}</text>
      <line x1="10" y1="41" x2="78" y2="41" stroke="#D4930A" strokeWidth="0.06" opacity="0.1" />
      <text x="10" y="45" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#605040">〒{data.zipCode}</text>
      <text x="10" y="49" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#605040">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="4" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 10. SPACE (間) — Open creative space
// Maximum whitespace, geometric blue accent, gallery-like zen
// ============================================================
const spaceTemplate: TemplateDefinition = {
  id: 'studio-space',
  name: 'SPACE',
  nameJa: '間',
  category: 'studio',
  designer: 'Nendo',
  description: '間の哲学。余白そのものがデザインとなる空間。',
  accentColor: '#4A90D9',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="studio-space-texture" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" seed="70" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" />
        </filter>
        <filter id="studio-space-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0.1" dy="0.1" stdDeviation="0.2" floodColor="#4A90D9" floodOpacity="0.1" />
        </filter>
        <linearGradient id="studio-space-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#fafcff" />
        </linearGradient>
        <linearGradient id="studio-space-box" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4A90D9" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#6AADE9" stopOpacity="0.06" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#studio-space-bg)" />
      <rect width="91" height="55" fill="none" filter="url(#studio-space-texture)" opacity="0.015" />
      {/* Geometric blue accent squares */}
      <rect x="8" y="8" width="4" height="4" fill="url(#studio-space-box)" />
      <rect x="8" y="8" width="4" height="4" fill="none" stroke="#4A90D9" strokeWidth="0.12" opacity="0.25" />
      {/* Secondary floating square */}
      <rect x="14" y="10" width="2" height="2" fill="none" stroke="#4A90D9" strokeWidth="0.06" opacity="0.1" />
      {/* Thin horizon line */}
      <line x1="8" y1="42" x2="50" y2="42" stroke="#4A90D9" strokeWidth="0.04" opacity="0.08" />
      {/* Bottom right geometric echo */}
      <rect x="82" y="46" width="3" height="3" fill="none" stroke="#4A90D9" strokeWidth="0.06" opacity="0.06" />
      {/* Name with generous space */}
      <text
        x="8"
        y="28"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="6"
        letterSpacing="0.7"
        fill="#2a2a2a"
        filter="url(#studio-space-shadow)"
      >
        {data.nameJa}
      </text>
      <text x="8" y="34" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.35" fill="#4A90D9">{data.nameEn}</text>
      {/* Title far below with space */}
      <text x="8" y="46" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#aaaaaa">{data.titleJa}</text>
      {data.logo && <image href={data.logo} x="76" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="studio-space-btex" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" seed="72" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#studio-space-bg)" />
      <rect width="91" height="55" fill="none" filter="url(#studio-space-btex)" opacity="0.015" />
      {/* Blue accent square bottom right */}
      <rect x="79" y="43" width="4" height="4" fill="url(#studio-space-box)" />
      <rect x="79" y="43" width="4" height="4" fill="none" stroke="#4A90D9" strokeWidth="0.12" opacity="0.25" />
      {/* Floating echo */}
      <rect x="75" y="45" width="2" height="2" fill="none" stroke="#4A90D9" strokeWidth="0.06" opacity="0.1" />
      {/* Thin horizon line */}
      <line x1="41" y1="22" x2="83" y2="22" stroke="#4A90D9" strokeWidth="0.04" opacity="0.08" />
      {/* Top left geometric echo */}
      <rect x="6" y="6" width="3" height="3" fill="none" stroke="#4A90D9" strokeWidth="0.06" opacity="0.06" />
      {/* Company */}
      <text x="8" y="13" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#2a2a2a">{data.companyJa}</text>
      <text x="8" y="17.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.5" fill="#4A90D9" opacity="0.7">{data.companyEn}</text>
      {/* Title */}
      <text x="8" y="21.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#aaa">{data.titleJa}</text>
      <line x1="8" y1="24" x2="50" y2="24" stroke="#4A90D9" strokeWidth="0.06" opacity="0.1" />
      {/* Contact with generous spacing */}
      <text x="8" y="29" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.5" fill="#555555">{data.tel}</text>
      <text x="8" y="33.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.5" fill="#555555">{data.email}</text>
      <text x="8" y="38" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.5" fill="#555555">{data.website}</text>
      <line x1="8" y1="42" x2="50" y2="42" stroke="#4A90D9" strokeWidth="0.04" opacity="0.06" />
      <text x="8" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#bbbbbb">〒{data.zipCode}</text>
      <text x="8" y="51" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#bbbbbb">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="4" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

export const studioTemplates: TemplateDefinition[] = [
  atelierTemplate,
  bureauTemplate,
  labTemplate,
  workshopTemplate,
  officeTemplate,
  agencyTemplate,
  hqTemplate,
  loftTemplate,
  denTemplate,
  spaceTemplate,
];
