import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. SHUTTER (幕) — Camera shutter inspired
// Dark room aesthetic with film-strip borders and red accents
// ============================================================
const shutterTemplate: TemplateDefinition = {
  id: 'photo-shutter',
  name: 'SHUTTER',
  nameJa: '幕',
  category: 'photo',
  designer: 'Daido Moriyama',
  description: 'シャッターの一瞬。暗室の赤が静かに灯る。',
  accentColor: '#8B0000',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="shutter-f-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="shutter-f-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.12" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="shutter-f-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="50%" stopColor="#141414" />
          <stop offset="100%" stopColor="#0f0f0f" />
        </linearGradient>
        <radialGradient id="shutter-f-vignette" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.3" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#shutter-f-bg)" />
      <rect width="91" height="55" fill="url(#shutter-f-vignette)" />
      {/* Film strip perforations top */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((i) => (
        <rect key={`shutter-ft-${i}`} x={3 + i * 5} y="1.5" width="2.5" height="1.5" rx="0.3" fill="#2a2a2a" opacity="0.7" />
      ))}
      {/* Film strip perforations bottom */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((i) => (
        <rect key={`shutter-fb-${i}`} x={3 + i * 5} y="52" width="2.5" height="1.5" rx="0.3" fill="#2a2a2a" opacity="0.7" />
      ))}
      {/* Shutter curtain lines */}
      <line x1="0" y1="18" x2="91" y2="18" stroke="#8B0000" strokeWidth="0.2" opacity="0.6" />
      <line x1="0" y1="18.5" x2="91" y2="18.5" stroke="#8B0000" strokeWidth="0.06" opacity="0.3" />
      <line x1="0" y1="37" x2="91" y2="37" stroke="#8B0000" strokeWidth="0.2" opacity="0.6" />
      <line x1="0" y1="37.5" x2="91" y2="37.5" stroke="#8B0000" strokeWidth="0.06" opacity="0.3" />
      {/* Decorative shutter blade marks */}
      <line x1="5" y1="19" x2="15" y2="19" stroke="#8B0000" strokeWidth="0.08" opacity="0.2" />
      <line x1="76" y1="36" x2="86" y2="36" stroke="#8B0000" strokeWidth="0.08" opacity="0.2" />
      {/* Name */}
      <text x="45.5" y="25" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6.5" letterSpacing="1.5" fill="#ffffff" filter="url(#shutter-f-shadow)">
        {data.nameJa}
      </text>
      <text x="45.5" y="31" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.8" fill="#8B0000">
        {data.nameEn.toUpperCase()}
      </text>
      {/* Title */}
      <text x="45.5" y="35" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#666666">
        {data.titleJa}
      </text>
      {/* Red indicator dot */}
      <circle cx="45.5" cy="45" r="1.2" fill="#8B0000" opacity="0.8" />
      <circle cx="45.5" cy="45" r="2" fill="none" stroke="#8B0000" strokeWidth="0.1" opacity="0.3" />
      {/* Frame counter */}
      <text x="82" y="5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="0.8" fill="#8B0000" opacity="0.4">36A</text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="5" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="shutter-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <linearGradient id="shutter-b-bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#121212" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#shutter-b-bg)" />
      {/* Film strip perforations top */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((i) => (
        <rect key={`shutter-bt-${i}`} x={3 + i * 5} y="1.5" width="2.5" height="1.5" rx="0.3" fill="#2a2a2a" opacity="0.7" />
      ))}
      {/* Film strip perforations bottom */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((i) => (
        <rect key={`shutter-bb-${i}`} x={3 + i * 5} y="52" width="2.5" height="1.5" rx="0.3" fill="#2a2a2a" opacity="0.7" />
      ))}
      {/* Decorative shutter line */}
      <line x1="10" y1="9" x2="81" y2="9" stroke="#8B0000" strokeWidth="0.15" opacity="0.4" />
      {/* Company */}
      <text x="10" y="15" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#ffffff">
        {data.companyJa}
      </text>
      <text x="10" y="19" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.2" fill="#666666">
        {data.companyEn}
      </text>
      {/* Title */}
      <text x="10" y="23" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#8B0000" opacity="0.7">
        {data.titleJa}
      </text>
      <line x1="10" y1="25.5" x2="81" y2="25.5" stroke="#8B0000" strokeWidth="0.15" opacity="0.3" />
      {/* Contact info */}
      <text x="10" y="30" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#999999">
        TEL {data.tel}
      </text>
      <text x="10" y="34" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#999999">
        {data.email}
      </text>
      <text x="10" y="38" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#999999">
        {data.website}
      </text>
      <line x1="10" y1="40.5" x2="81" y2="40.5" stroke="#333333" strokeWidth="0.1" />
      <text x="10" y="44.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#666666">
        〒{data.zipCode}
      </text>
      <text x="10" y="48" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#666666">
        {data.addressJa}
      </text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="74" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      {/* Red dot decorative */}
      <circle cx="83" cy="9" r="0.4" fill="#8B0000" opacity="0.5" />
    </g>
  ),
};

// ============================================================
// 2. LENS (玉) — Lens optics inspired
// Concentric circles suggesting lens elements
// ============================================================
const lensTemplate: TemplateDefinition = {
  id: 'photo-lens',
  name: 'LENS',
  nameJa: '玉',
  category: 'photo',
  designer: 'Hiroshi Sugimoto',
  description: 'レンズの同心円。光を集める玉の構造美。',
  accentColor: '#4a4a4a',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="lens-f-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="lens-f-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="lens-f-glass" cx="50%" cy="45%" r="50%">
          <stop offset="0%" stopColor="#f8f8f4" />
          <stop offset="60%" stopColor="#f2f2ec" />
          <stop offset="100%" stopColor="#e8e8e0" />
        </radialGradient>
        <radialGradient id="lens-f-flare" cx="65%" cy="35%" r="30%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#lens-f-glass)" />
      <rect width="91" height="55" fill="url(#lens-f-flare)" />
      {/* Concentric lens circles */}
      <circle cx="70" cy="27.5" r="22" fill="none" stroke="#d8d8d0" strokeWidth="0.15" />
      <circle cx="70" cy="27.5" r="17" fill="none" stroke="#d0d0c8" strokeWidth="0.25" />
      <circle cx="70" cy="27.5" r="12" fill="none" stroke="#c5c5bd" strokeWidth="0.35" />
      <circle cx="70" cy="27.5" r="7" fill="none" stroke="#b5b5ad" strokeWidth="0.4" />
      <circle cx="70" cy="27.5" r="2.5" fill="#4a4a4a" opacity="0.12" />
      {/* Lens coating reflection */}
      <path d="M 60,18 Q 65,15 72,17" fill="none" stroke="#8888cc" strokeWidth="0.1" opacity="0.15" />
      <path d="M 63,38 Q 70,40 78,37" fill="none" stroke="#88cc88" strokeWidth="0.08" opacity="0.1" />
      {/* Name on left */}
      <text x="8" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="5.5" letterSpacing="0.4" fill="#2a2a2a" filter="url(#lens-f-shadow)">
        {data.nameJa}
      </text>
      <text x="8" y="26" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.8" letterSpacing="0.3" fill="#888888">
        {data.nameEn}
      </text>
      <line x1="8" y1="29" x2="42" y2="29" stroke="#c5c5bd" strokeWidth="0.1" />
      <text x="8" y="33.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#999999">
        {data.titleJa}
      </text>
      <text x="8" y="42" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#aaaaaa">
        {data.companyJa}
      </text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="8" y="44" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="lens-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <linearGradient id="lens-b-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f5f5f0" />
          <stop offset="100%" stopColor="#ececE4" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#lens-b-bg)" />
      {/* Single lens ring accent */}
      <circle cx="83" cy="8" r="4" fill="none" stroke="#d5d5cd" strokeWidth="0.25" />
      <circle cx="83" cy="8" r="2" fill="none" stroke="#c8c8c0" strokeWidth="0.15" />
      <circle cx="83" cy="8" r="0.8" fill="#4a4a4a" opacity="0.08" />
      {/* Company info */}
      <text x="8" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#2a2a2a">
        {data.companyJa}
      </text>
      <text x="8" y="18.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.2" fill="#888888">
        {data.companyEn}
      </text>
      {/* Title */}
      <text x="8" y="22.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#aaaaaa">
        {data.titleJa}
      </text>
      <line x1="8" y1="25" x2="50" y2="25" stroke="#ccccc4" strokeWidth="0.15" />
      {/* Contact */}
      <text x="8" y="30" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#777777">
        TEL {data.tel}
      </text>
      <text x="8" y="34" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#777777">
        {data.email}
      </text>
      <text x="8" y="38" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#777777">
        {data.website}
      </text>
      <line x1="8" y1="41" x2="50" y2="41" stroke="#ddddd5" strokeWidth="0.1" />
      <text x="8" y="45" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#aaaaaa">
        〒{data.zipCode}
      </text>
      <text x="8" y="49" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#aaaaaa">
        {data.addressJa}
      </text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="74" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
};

// ============================================================
// 3. FOCUS (焦) — Focus ring / depth of field
// Sharp center, blurred edges effect
// ============================================================
const focusTemplate: TemplateDefinition = {
  id: 'photo-focus',
  name: 'FOCUS',
  nameJa: '焦',
  category: 'photo',
  designer: 'William Eggleston',
  description: '焦点を合わせる。鮮明と曖昧の境界線。',
  accentColor: '#D4A017',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="focus-f-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#f8f8f4" />
          <stop offset="100%" stopColor="#e5e5dc" />
        </radialGradient>
        <filter id="focus-f-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="focus-f-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.08" dy="0.12" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#focus-f-grad)" />
      {/* Focus ring marks */}
      <circle cx="45.5" cy="27.5" r="20" fill="none" stroke="#D4A017" strokeWidth="0.08" strokeDasharray="0.5 1.5" opacity="0.3" />
      <circle cx="45.5" cy="27.5" r="16" fill="none" stroke="#D4A017" strokeWidth="0.12" strokeDasharray="0.8 1.2" opacity="0.35" />
      <circle cx="45.5" cy="27.5" r="12" fill="none" stroke="#D4A017" strokeWidth="0.1" opacity="0.2" />
      {/* Center crosshair */}
      <line x1="43" y1="17" x2="43" y2="20" stroke="#D4A017" strokeWidth="0.15" opacity="0.5" />
      <line x1="48" y1="17" x2="48" y2="20" stroke="#D4A017" strokeWidth="0.15" opacity="0.5" />
      <line x1="38" y1="27.5" x2="40.5" y2="27.5" stroke="#D4A017" strokeWidth="0.1" opacity="0.3" />
      <line x1="50.5" y1="27.5" x2="53" y2="27.5" stroke="#D4A017" strokeWidth="0.1" opacity="0.3" />
      {/* Name - sharp in center */}
      <text x="45.5" y="25.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="6" letterSpacing="0.8" fill="#1a1a1a" filter="url(#focus-f-shadow)">
        {data.nameJa}
      </text>
      <text x="45.5" y="31.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.4" fill="#555555">
        {data.nameEn}
      </text>
      {/* Faded edges - title */}
      <text x="45.5" y="37.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#bbbbbb">
        {data.titleJa}
      </text>
      {/* Focus distance marker */}
      <text x="83" y="50" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1" fill="#D4A017" opacity="0.5">f/1.4</text>
      {/* Depth scale ticks */}
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={`focus-tick-${i}`} x={70 + i * 3} y="47" width="0.3" height="1" fill="#D4A017" opacity={0.2 + i * 0.05} />
      ))}
      {/* Logo */}
      {data.logo && <image href={data.logo} x="5" y="44" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="focus-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <linearGradient id="focus-b-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fcfcf8" />
          <stop offset="100%" stopColor="#f5f5f0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#focus-b-bg)" />
      {/* Focus bracket marks in corners */}
      <path d="M 6,6 L 6,10" fill="none" stroke="#D4A017" strokeWidth="0.2" />
      <path d="M 6,6 L 10,6" fill="none" stroke="#D4A017" strokeWidth="0.2" />
      <path d="M 85,6 L 85,10" fill="none" stroke="#D4A017" strokeWidth="0.2" />
      <path d="M 85,6 L 81,6" fill="none" stroke="#D4A017" strokeWidth="0.2" />
      <path d="M 6,49 L 6,45" fill="none" stroke="#D4A017" strokeWidth="0.2" />
      <path d="M 6,49 L 10,49" fill="none" stroke="#D4A017" strokeWidth="0.2" />
      <path d="M 85,49 L 85,45" fill="none" stroke="#D4A017" strokeWidth="0.2" />
      <path d="M 85,49 L 81,49" fill="none" stroke="#D4A017" strokeWidth="0.2" />
      {/* Corner dot accents */}
      <circle cx="6" cy="6" r="0.3" fill="#D4A017" opacity="0.4" />
      <circle cx="85" cy="6" r="0.3" fill="#D4A017" opacity="0.4" />
      <circle cx="6" cy="49" r="0.3" fill="#D4A017" opacity="0.4" />
      <circle cx="85" cy="49" r="0.3" fill="#D4A017" opacity="0.4" />
      {/* Company */}
      <text x="45.5" y="14" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#2a2a2a">
        {data.companyJa}
      </text>
      <text x="45.5" y="18.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#888888">
        {data.companyEn}
      </text>
      {/* Title */}
      <text x="45.5" y="22" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#D4A017" opacity="0.6">
        {data.titleJa}
      </text>
      <line x1="28" y1="24.5" x2="63" y2="24.5" stroke="#D4A017" strokeWidth="0.1" opacity="0.3" />
      {/* Contact centered */}
      <text x="45.5" y="29.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#666666">
        TEL {data.tel}
      </text>
      <text x="45.5" y="33.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#666666">
        {data.email}
      </text>
      <text x="45.5" y="37.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#666666">
        {data.website}
      </text>
      <line x1="28" y1="40" x2="63" y2="40" stroke="#e5e5dd" strokeWidth="0.1" />
      <text x="45.5" y="44" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#aaaaaa">
        〒{data.zipCode} {data.addressJa}
      </text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="74" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
};

// ============================================================
// 4. EXPOSURE (露) — Light exposure / high-key inspired
// Overexposed whites with subtle detail
// ============================================================
const exposureTemplate: TemplateDefinition = {
  id: 'photo-exposure',
  name: 'EXPOSURE',
  nameJa: '露',
  category: 'photo',
  designer: 'Michael Kenna',
  description: '露出の極み。白飛びの中に浮かぶ文字の残像。',
  accentColor: '#c8c8c0',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="exposure-f-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#fefefc" />
          <stop offset="100%" stopColor="#f0f0ec" />
        </linearGradient>
        <filter id="exposure-f-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="exposure-f-glow">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
          <feBlend mode="screen" in="SourceGraphic" in2="blur" />
        </filter>
        <radialGradient id="exposure-f-flare" cx="25%" cy="25%" r="45%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#exposure-f-bg)" />
      {/* Overexposure light flare */}
      <rect width="91" height="55" fill="url(#exposure-f-flare)" />
      {/* Exposure meter bar at top */}
      <rect x="10" y="4" width="71" height="0.3" fill="#e0e0d8" />
      <rect x="10" y="4" width="50" height="0.3" fill="#c8c8c0" />
      <rect x="58" y="3.5" width="0.3" height="1.3" fill="#8B0000" opacity="0.5" />
      {/* Scale ticks */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <line key={`exp-tick-${i}`} x1={10 + i * 10} y1="5.5" x2={10 + i * 10} y2="6" stroke="#d0d0c8" strokeWidth="0.08" />
      ))}
      {/* Name */}
      <text x="45.5" y="24" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="6.5" letterSpacing="1" fill="#c8c8c0">
        {data.nameJa}
      </text>
      <text x="45.5" y="31" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="2" letterSpacing="0.6" fill="#d0d0c8">
        {data.nameEn.toUpperCase()}
      </text>
      <text x="45.5" y="37" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#dddddd">
        {data.titleJa}
      </text>
      {/* EV value */}
      <text x="81" y="51" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="0.9" fill="#dddddd">EV +2.0</text>
      {/* Decorative light streak */}
      <line x1="0" y1="44" x2="30" y2="44" stroke="#e8e8e0" strokeWidth="0.3" opacity="0.4" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="5" y="44" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.3" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="exposure-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <linearGradient id="exposure-b-bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fcfcfa" />
          <stop offset="100%" stopColor="#f5f5f0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#exposure-b-bg)" />
      {/* Subtle exposure gradient bar */}
      <rect x="0" y="0" width="91" height="6" fill="#f5f5f0" opacity="0.5" />
      <line x1="10" y1="6" x2="81" y2="6" stroke="#e5e5dd" strokeWidth="0.08" />
      {/* Company */}
      <text x="10" y="13" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="2.5" fill="#999999">
        {data.companyJa}
      </text>
      <text x="10" y="17.5" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.5" fill="#bbbbbb">
        {data.companyEn}
      </text>
      {/* Title */}
      <text x="10" y="21.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#cccccc">
        {data.titleJa}
      </text>
      <line x1="10" y1="24" x2="40" y2="24" stroke="#e0e0d8" strokeWidth="0.12" />
      {/* Contact */}
      <text x="10" y="29" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#aaaaaa">
        TEL {data.tel}
      </text>
      <text x="10" y="33" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#aaaaaa">
        {data.email}
      </text>
      <text x="10" y="37" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#aaaaaa">
        {data.website}
      </text>
      <line x1="10" y1="40" x2="40" y2="40" stroke="#ededE5" strokeWidth="0.08" />
      <text x="10" y="44.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#cccccc">
        〒{data.zipCode}
      </text>
      <text x="10" y="48.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#cccccc">
        {data.addressJa}
      </text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="74" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.3" />}
      {/* Decorative meter */}
      <rect x="74" y="6" width="8" height="0.2" fill="#e0e0d8" />
    </g>
  ),
};

// ============================================================
// 5. FRAME-P (枠) — Picture frame / viewfinder
// Viewfinder frame with info display overlay
// ============================================================
const framePTemplate: TemplateDefinition = {
  id: 'photo-frame-p',
  name: 'FRAME-P',
  nameJa: '枠',
  category: 'photo',
  designer: 'Sebastião Salgado',
  description: 'ファインダーの枠。世界を切り取る四角い窓。',
  accentColor: '#333333',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="framep-f-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="framep-f-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.15" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="framep-f-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e1e1e" />
          <stop offset="50%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#141414" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#framep-f-bg)" />
      {/* Viewfinder frame */}
      <rect x="8" y="6" width="75" height="43" fill="none" stroke="#444444" strokeWidth="0.2" />
      <rect x="8.5" y="6.5" width="74" height="42" fill="none" stroke="#333333" strokeWidth="0.08" />
      {/* Corner brackets */}
      <path d="M 8,6 L 14,6" fill="none" stroke="#ffffff" strokeWidth="0.5" />
      <path d="M 8,6 L 8,12" fill="none" stroke="#ffffff" strokeWidth="0.5" />
      <path d="M 83,6 L 77,6" fill="none" stroke="#ffffff" strokeWidth="0.5" />
      <path d="M 83,6 L 83,12" fill="none" stroke="#ffffff" strokeWidth="0.5" />
      <path d="M 8,49 L 14,49" fill="none" stroke="#ffffff" strokeWidth="0.5" />
      <path d="M 8,49 L 8,43" fill="none" stroke="#ffffff" strokeWidth="0.5" />
      <path d="M 83,49 L 77,49" fill="none" stroke="#ffffff" strokeWidth="0.5" />
      <path d="M 83,49 L 83,43" fill="none" stroke="#ffffff" strokeWidth="0.5" />
      {/* Center focus point */}
      <rect x="43.5" y="25.5" width="4" height="4" fill="none" stroke="#8B0000" strokeWidth="0.25" />
      <line x1="45.5" y1="24.5" x2="45.5" y2="26" stroke="#8B0000" strokeWidth="0.1" />
      <line x1="45.5" y1="29" x2="45.5" y2="30.5" stroke="#8B0000" strokeWidth="0.1" />
      {/* Name */}
      <text x="45.5" y="24" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="5.5" fill="#ffffff" filter="url(#framep-f-shadow)">
        {data.nameJa}
      </text>
      <text x="45.5" y="35.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.8" letterSpacing="0.4" fill="#888888">
        {data.nameEn.toUpperCase()}
      </text>
      {/* Viewfinder info overlay */}
      <text x="12" y="47" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="0.9" fill="#8B0000">● REC</text>
      <text x="78" y="10" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="0.9" fill="#555555">
        {data.titleJa}
      </text>
      {/* Grid lines */}
      <line x1="38.3" y1="6" x2="38.3" y2="49" stroke="#ffffff" strokeWidth="0.03" opacity="0.1" />
      <line x1="52.7" y1="6" x2="52.7" y2="49" stroke="#ffffff" strokeWidth="0.03" opacity="0.1" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="74" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="framep-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <linearGradient id="framep-b-bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e1e1e" />
          <stop offset="100%" stopColor="#161616" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#framep-b-bg)" />
      {/* Subtle frame */}
      <rect x="8" y="6" width="75" height="43" fill="none" stroke="#2a2a2a" strokeWidth="0.15" />
      {/* Corner marks */}
      <path d="M 8,6 L 11,6" fill="none" stroke="#555555" strokeWidth="0.2" />
      <path d="M 8,6 L 8,9" fill="none" stroke="#555555" strokeWidth="0.2" />
      <path d="M 83,49 L 80,49" fill="none" stroke="#555555" strokeWidth="0.2" />
      <path d="M 83,49 L 83,46" fill="none" stroke="#555555" strokeWidth="0.2" />
      {/* Company */}
      <text x="14" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#ffffff">
        {data.companyJa}
      </text>
      <text x="14" y="18.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#666666">
        {data.companyEn}
      </text>
      {/* Title */}
      <text x="14" y="22.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#8B0000" opacity="0.6">
        {data.titleJa}
      </text>
      <line x1="14" y1="25" x2="77" y2="25" stroke="#333333" strokeWidth="0.12" />
      {/* Contact */}
      <text x="14" y="30" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#888888">
        TEL {data.tel}
      </text>
      <text x="14" y="34" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#888888">
        {data.email}
      </text>
      <text x="14" y="38" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#888888">
        {data.website}
      </text>
      <line x1="14" y1="40.5" x2="77" y2="40.5" stroke="#2a2a2a" strokeWidth="0.08" />
      <text x="14" y="44.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#555555">
        〒{data.zipCode}
      </text>
      <text x="14" y="48" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#555555">
        {data.addressJa}
      </text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="74" y="10" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
    </g>
  ),
};

// ============================================================
// 6. CROP (切) — Crop marks / print registration
// Print crop marks at edges with precise registration
// ============================================================
const cropTemplate: TemplateDefinition = {
  id: 'photo-crop',
  name: 'CROP',
  nameJa: '切',
  category: 'photo',
  designer: 'Irving Penn',
  description: '切り取り線。印刷の精密さが生むデザイン。',
  accentColor: '#1a1a1a',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="crop-f-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="crop-f-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.08" dy="0.1" />
          <feFlood floodColor="#000" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="crop-f-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#fafaf8" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#crop-f-bg)" />
      {/* Crop marks - corners */}
      <line x1="0" y1="5" x2="4" y2="5" stroke="#1a1a1a" strokeWidth="0.15" />
      <line x1="5" y1="0" x2="5" y2="4" stroke="#1a1a1a" strokeWidth="0.15" />
      <line x1="87" y1="5" x2="91" y2="5" stroke="#1a1a1a" strokeWidth="0.15" />
      <line x1="86" y1="0" x2="86" y2="4" stroke="#1a1a1a" strokeWidth="0.15" />
      <line x1="0" y1="50" x2="4" y2="50" stroke="#1a1a1a" strokeWidth="0.15" />
      <line x1="5" y1="51" x2="5" y2="55" stroke="#1a1a1a" strokeWidth="0.15" />
      <line x1="87" y1="50" x2="91" y2="50" stroke="#1a1a1a" strokeWidth="0.15" />
      <line x1="86" y1="51" x2="86" y2="55" stroke="#1a1a1a" strokeWidth="0.15" />
      {/* Registration circles */}
      <circle cx="45.5" cy="3" r="1" fill="none" stroke="#1a1a1a" strokeWidth="0.1" />
      <line x1="44.5" y1="3" x2="46.5" y2="3" stroke="#1a1a1a" strokeWidth="0.1" />
      <line x1="45.5" y1="2" x2="45.5" y2="4" stroke="#1a1a1a" strokeWidth="0.1" />
      <circle cx="45.5" cy="52" r="1" fill="none" stroke="#1a1a1a" strokeWidth="0.1" />
      <line x1="44.5" y1="52" x2="46.5" y2="52" stroke="#1a1a1a" strokeWidth="0.1" />
      <line x1="45.5" y1="51" x2="45.5" y2="53" stroke="#1a1a1a" strokeWidth="0.1" />
      {/* Content area */}
      <text x="45.5" y="22" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6" letterSpacing="0.6" fill="#1a1a1a" filter="url(#crop-f-shadow)">
        {data.nameJa}
      </text>
      <text x="45.5" y="28" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.4" fill="#666666">
        {data.nameEn.toUpperCase()}
      </text>
      <text x="45.5" y="35" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#999999">
        {data.titleJa}
      </text>
      {/* Color bar at bottom */}
      <rect x="15" y="44" width="4" height="1.5" fill="#00ffff" opacity="0.3" />
      <rect x="20" y="44" width="4" height="1.5" fill="#ff00ff" opacity="0.3" />
      <rect x="25" y="44" width="4" height="1.5" fill="#ffff00" opacity="0.3" />
      <rect x="30" y="44" width="4" height="1.5" fill="#000000" opacity="0.3" />
      {/* Density step wedge */}
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={`crop-wedge-${i}`} x={55 + i * 4} y="44" width="3.5" height="1.5" fill="#000000" opacity={0.1 + i * 0.08} />
      ))}
      {/* Logo */}
      {data.logo && <image href={data.logo} x="5" y="8" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="crop-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Crop marks */}
      <line x1="0" y1="5" x2="4" y2="5" stroke="#1a1a1a" strokeWidth="0.15" />
      <line x1="5" y1="0" x2="5" y2="4" stroke="#1a1a1a" strokeWidth="0.15" />
      <line x1="87" y1="5" x2="91" y2="5" stroke="#1a1a1a" strokeWidth="0.15" />
      <line x1="86" y1="0" x2="86" y2="4" stroke="#1a1a1a" strokeWidth="0.15" />
      <line x1="0" y1="50" x2="4" y2="50" stroke="#1a1a1a" strokeWidth="0.15" />
      <line x1="5" y1="51" x2="5" y2="55" stroke="#1a1a1a" strokeWidth="0.15" />
      <line x1="87" y1="50" x2="91" y2="50" stroke="#1a1a1a" strokeWidth="0.15" />
      <line x1="86" y1="51" x2="86" y2="55" stroke="#1a1a1a" strokeWidth="0.15" />
      {/* Company */}
      <text x="10" y="13" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#1a1a1a">
        {data.companyJa}
      </text>
      <text x="10" y="17.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#888888">
        {data.companyEn}
      </text>
      {/* Title */}
      <text x="10" y="21.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#aaaaaa">
        {data.titleJa}
      </text>
      <line x1="10" y1="24" x2="81" y2="24" stroke="#e0e0e0" strokeWidth="0.1" />
      {/* Contact info */}
      <text x="10" y="29" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#555555">
        TEL {data.tel}
      </text>
      <text x="10" y="33" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#555555">
        {data.email}
      </text>
      <text x="10" y="37" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#555555">
        {data.website}
      </text>
      <line x1="10" y1="40" x2="81" y2="40" stroke="#e0e0e0" strokeWidth="0.1" />
      <text x="10" y="44.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#999999">
        〒{data.zipCode}
      </text>
      <text x="10" y="48" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#999999">
        {data.addressJa}
      </text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="74" y="10" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
};

// ============================================================
// 7. DARKROOM (暗) — Darkroom processing
// Red safelight ambience, chemical tray layout
// ============================================================
const darkroomTemplate: TemplateDefinition = {
  id: 'photo-darkroom',
  name: 'DARKROOM',
  nameJa: '暗',
  category: 'photo',
  designer: 'Ansel Adams',
  description: '暗室の赤い灯。現像液に浮かぶ像の美しさ。',
  accentColor: '#8B0000',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="darkroom-f-safe" cx="50%" cy="50%" r="65%">
          <stop offset="0%" stopColor="#2a0808" />
          <stop offset="60%" stopColor="#180505" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </radialGradient>
        <filter id="darkroom-f-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="5" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="darkroom-f-glow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.5" />
          <feOffset dx="0" dy="0" />
          <feFlood floodColor="#8B0000" floodOpacity="0.15" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="darkroom-f-lamp" cx="88%" cy="8%" r="20%">
          <stop offset="0%" stopColor="#8B0000" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#8B0000" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#darkroom-f-safe)" />
      <rect width="91" height="55" fill="url(#darkroom-f-lamp)" />
      {/* Safelight glow */}
      <circle cx="80" cy="5" r="3" fill="#8B0000" opacity="0.1" />
      <circle cx="80" cy="5" r="1.5" fill="#8B0000" opacity="0.15" />
      <circle cx="80" cy="5" r="0.5" fill="#cc2222" opacity="0.3" />
      {/* Developing tray border */}
      <rect x="6" y="10" width="79" height="35" fill="none" stroke="#8B0000" strokeWidth="0.2" opacity="0.25" />
      <rect x="6.5" y="10.5" width="78" height="34" fill="none" stroke="#660000" strokeWidth="0.08" opacity="0.15" />
      {/* Chemical ripple lines */}
      <path d="M 10,40 Q 30,38 50,40 Q 70,42 85,40" fill="none" stroke="#8B0000" strokeWidth="0.06" opacity="0.15" />
      <path d="M 10,42 Q 35,40 55,42 Q 75,44 85,42" fill="none" stroke="#8B0000" strokeWidth="0.04" opacity="0.1" />
      {/* Text emerging like a developing print */}
      <text x="45.5" y="24" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="6.5" letterSpacing="0.8" fill="#8B0000" opacity="0.9" filter="url(#darkroom-f-glow)">
        {data.nameJa}
      </text>
      <text x="45.5" y="31" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.5" fill="#661111">
        {data.nameEn}
      </text>
      <text x="45.5" y="37" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#441111">
        {data.titleJa}
      </text>
      {/* Timer display */}
      <text x="81" y="48" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="0.8" fill="#8B0000" opacity="0.4">00:45</text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="8" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.3" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="darkroom-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="5" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <linearGradient id="darkroom-b-bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#120606" />
          <stop offset="100%" stopColor="#0a0303" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#darkroom-b-bg)" />
      {/* Safelight lines */}
      <line x1="0" y1="8" x2="91" y2="8" stroke="#8B0000" strokeWidth="0.08" opacity="0.25" />
      <line x1="0" y1="46" x2="91" y2="46" stroke="#8B0000" strokeWidth="0.08" opacity="0.25" />
      {/* Tray edge detail */}
      <rect x="8" y="9" width="75" height="0.3" fill="#8B0000" opacity="0.1" />
      {/* Company */}
      <text x="10" y="15" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#8B0000" opacity="0.8">
        {data.companyJa}
      </text>
      <text x="10" y="19.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#661111">
        {data.companyEn}
      </text>
      {/* Title */}
      <text x="10" y="23.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#551111">
        {data.titleJa}
      </text>
      {/* Contact */}
      <text x="10" y="29" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#553333">
        TEL {data.tel}
      </text>
      <text x="10" y="33" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#553333">
        {data.email}
      </text>
      <text x="10" y="37" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#553333">
        {data.website}
      </text>
      <line x1="10" y1="40" x2="70" y2="40" stroke="#8B0000" strokeWidth="0.06" opacity="0.15" />
      <text x="10" y="44" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#441111">
        〒{data.zipCode} {data.addressJa}
      </text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="74" y="38" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.3" />}
      {/* Safelight dot */}
      <circle cx="83" cy="8" r="0.4" fill="#8B0000" opacity="0.5" />
    </g>
  ),
};

// ============================================================
// 8. FILM-P (膜) — Film strip / negative
// Sprocket holes and frame numbers
// ============================================================
const filmPTemplate: TemplateDefinition = {
  id: 'photo-film-p',
  name: 'FILM-P',
  nameJa: '膜',
  category: 'photo',
  designer: 'Henri Cartier-Bresson',
  description: 'フィルムの質感。スプロケットが語る時間の記録。',
  accentColor: '#B8860B',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="filmp-f-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="filmp-f-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="filmp-f-bg" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#111111" />
          <stop offset="9%" stopColor="#111111" />
          <stop offset="10%" stopColor="#1e1e1e" />
          <stop offset="90%" stopColor="#1a1a1a" />
          <stop offset="91%" stopColor="#111111" />
          <stop offset="100%" stopColor="#111111" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#filmp-f-bg)" />
      {/* Film strip left edge */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
        <rect key={`filmp-ls-${i}`} x="2" y={2 + i * 4.2} width="3.5" height="2.2" rx="0.4" fill="#2a2a2a" />
      ))}
      {/* Film strip right edge */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
        <rect key={`filmp-rs-${i}`} x="85.5" y={2 + i * 4.2} width="3.5" height="2.2" rx="0.4" fill="#2a2a2a" />
      ))}
      {/* Frame border lines */}
      <line x1="8" y1="0" x2="8" y2="55" stroke="#333330" strokeWidth="0.08" />
      <line x1="83" y1="0" x2="83" y2="55" stroke="#333330" strokeWidth="0.08" />
      {/* Frame number */}
      <text x="5" y="5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.2" fill="#B8860B" opacity="0.6">36A</text>
      {/* Content within film frame */}
      <text x="45.5" y="22" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6.5" letterSpacing="0.6" fill="#e8e0d0" filter="url(#filmp-f-shadow)">
        {data.nameJa}
      </text>
      <text x="45.5" y="29" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.4" fill="#B8860B">
        {data.nameEn}
      </text>
      <text x="45.5" y="36" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#888880">
        {data.titleJa}
      </text>
      {/* Film edge text */}
      <text x="45.5" y="49" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="0.9" fill="#B8860B" opacity="0.4">KODAK TRI-X 400</text>
      {/* DX code bars */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={`filmp-dx-${i}`} x={22 + i * 2.5} y="50.5" width="1.2" height="2" fill="#B8860B" opacity={i % 2 === 0 ? 0.15 : 0.08} />
      ))}
      {/* Logo */}
      {data.logo && <image href={data.logo} x="10" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="filmp-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="#1c1c1c" />
      {/* Film strip edges */}
      <rect x="0" y="0" width="8" height="55" fill="#111111" />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
        <rect key={`filmp-bls-${i}`} x="2" y={2 + i * 4.2} width="3.5" height="2.2" rx="0.4" fill="#2a2a2a" />
      ))}
      <rect x="83" y="0" width="8" height="55" fill="#111111" />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
        <rect key={`filmp-brs-${i}`} x="85.5" y={2 + i * 4.2} width="3.5" height="2.2" rx="0.4" fill="#2a2a2a" />
      ))}
      {/* Company */}
      <text x="14" y="13" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#e8e0d0">
        {data.companyJa}
      </text>
      <text x="14" y="17.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#888880">
        {data.companyEn}
      </text>
      {/* Title */}
      <text x="14" y="21.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#B8860B" opacity="0.5">
        {data.titleJa}
      </text>
      <line x1="14" y1="24" x2="78" y2="24" stroke="#333330" strokeWidth="0.12" />
      {/* Contact */}
      <text x="14" y="29" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#999990">
        TEL {data.tel}
      </text>
      <text x="14" y="33" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#999990">
        {data.email}
      </text>
      <text x="14" y="37" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#999990">
        {data.website}
      </text>
      <line x1="14" y1="40" x2="78" y2="40" stroke="#2a2a28" strokeWidth="0.08" />
      <text x="14" y="44.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#666660">
        〒{data.zipCode}
      </text>
      <text x="14" y="48.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#666660">
        {data.addressJa}
      </text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="68" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
    </g>
  ),
};

// ============================================================
// 9. APERTURE (絞) — Aperture blade pattern
// Hexagonal aperture blades forming an iris
// ============================================================
const apertureTemplate: TemplateDefinition = {
  id: 'photo-aperture',
  name: 'APERTURE',
  nameJa: '絞',
  category: 'photo',
  designer: 'Fan Ho',
  description: '絞り羽根の六角形。光を制御する精密機構。',
  accentColor: '#4a5568',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="aperture-f-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="aperture-f-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.08" dy="0.12" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="aperture-f-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f2f2ee" />
          <stop offset="100%" stopColor="#e8e8e2" />
        </linearGradient>
        <clipPath id="aperture-f-clip">
          <rect width="91" height="55" />
        </clipPath>
      </defs>
      <rect width="91" height="55" fill="url(#aperture-f-bg)" />
      {/* Aperture blades - hexagonal iris */}
      <g opacity="0.07" clipPath="url(#aperture-f-clip)">
        <polygon points="70,12 80,18 80,30 70,36 60,30 60,18" fill="#4a5568" />
        <polygon points="72,14 78,18 78,28 72,32 66,28 66,18" fill="none" stroke="#4a5568" strokeWidth="0.3" />
        <polygon points="74,16 76,18 76,26 74,28 72,26 72,18" fill="none" stroke="#4a5568" strokeWidth="0.2" />
      </g>
      {/* Aperture rings */}
      <circle cx="70" cy="24" r="16" fill="none" stroke="#d0d0cc" strokeWidth="0.12" />
      <circle cx="70" cy="24" r="12" fill="none" stroke="#d0d0cc" strokeWidth="0.18" />
      <circle cx="70" cy="24" r="8" fill="none" stroke="#c8c8c4" strokeWidth="0.1" />
      {/* Light ray from aperture */}
      <line x1="70" y1="8" x2="70" y2="10" stroke="#4a5568" strokeWidth="0.06" opacity="0.15" />
      <line x1="70" y1="38" x2="70" y2="40" stroke="#4a5568" strokeWidth="0.06" opacity="0.15" />
      {/* Name */}
      <text x="10" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="5.5" letterSpacing="0.4" fill="#2d3748" filter="url(#aperture-f-shadow)">
        {data.nameJa}
      </text>
      <text x="10" y="26" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.8" letterSpacing="0.3" fill="#718096">
        {data.nameEn}
      </text>
      <line x1="10" y1="29" x2="45" y2="29" stroke="#cbd5e0" strokeWidth="0.1" />
      <text x="10" y="33.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#a0aec0">
        {data.titleJa}
      </text>
      {/* Aperture value */}
      <text x="10" y="48" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="0.9" fill="#a0aec0">f/2.8</text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="10" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="aperture-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <linearGradient id="aperture-b-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f0f0ec" />
          <stop offset="100%" stopColor="#eaeae4" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#aperture-b-bg)" />
      {/* Small aperture icon */}
      <g opacity="0.08">
        <polygon points="80,8 83,10 83,14 80,16 77,14 77,10" fill="#4a5568" />
        <polygon points="80,9 82,10.5 82,13.5 80,15 78,13.5 78,10.5" fill="none" stroke="#4a5568" strokeWidth="0.15" />
      </g>
      {/* Company */}
      <text x="10" y="13" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#2d3748">
        {data.companyJa}
      </text>
      <text x="10" y="17.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#718096">
        {data.companyEn}
      </text>
      {/* Title */}
      <text x="10" y="21.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#a0aec0">
        {data.titleJa}
      </text>
      <line x1="10" y1="24" x2="55" y2="24" stroke="#cbd5e0" strokeWidth="0.12" />
      {/* Contact */}
      <text x="10" y="29" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#4a5568">
        TEL {data.tel}
      </text>
      <text x="10" y="33" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#4a5568">
        {data.email}
      </text>
      <text x="10" y="37" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#4a5568">
        {data.website}
      </text>
      <line x1="10" y1="40" x2="55" y2="40" stroke="#dde3e8" strokeWidth="0.08" />
      <text x="10" y="44.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#a0aec0">
        〒{data.zipCode}
      </text>
      <text x="10" y="48.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#a0aec0">
        {data.addressJa}
      </text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="74" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
};

// ============================================================
// 10. MACRO (近) — Macro photography close-up
// Extreme detail, magnified grid pattern
// ============================================================
const macroTemplate: TemplateDefinition = {
  id: 'photo-macro',
  name: 'MACRO',
  nameJa: '近',
  category: 'photo',
  designer: 'Karl Blossfeldt',
  description: '接写の世界。拡大された細部が新たな宇宙を見せる。',
  accentColor: '#556B2F',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="macro-f-bg" cx="30%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#f5f8f0" />
          <stop offset="60%" stopColor="#eff3ea" />
          <stop offset="100%" stopColor="#e4ebe0" />
        </radialGradient>
        <filter id="macro-f-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="macro-f-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.08" dy="0.12" />
          <feFlood floodColor="#000" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#macro-f-bg)" />
      {/* Magnification grid */}
      <g opacity="0.06">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <line key={`macro-vh-${i}`} x1={i * 9.1} y1="0" x2={i * 9.1} y2="55" stroke="#556B2F" strokeWidth="0.1" />
        ))}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line key={`macro-hh-${i}`} x1="0" y1={i * 9.17} x2="91" y2={i * 9.17} stroke="#556B2F" strokeWidth="0.1" />
        ))}
      </g>
      {/* Macro focus circle */}
      <circle cx="68" cy="20" r="14" fill="none" stroke="#556B2F" strokeWidth="0.12" opacity="0.12" />
      <circle cx="68" cy="20" r="10" fill="none" stroke="#556B2F" strokeWidth="0.1" opacity="0.18" />
      <circle cx="68" cy="20" r="6" fill="none" stroke="#556B2F" strokeWidth="0.08" opacity="0.22" />
      <circle cx="68" cy="20" r="2" fill="#556B2F" opacity="0.05" />
      {/* Focus crosshair on macro circle */}
      <line x1="68" y1="14" x2="68" y2="15.5" stroke="#556B2F" strokeWidth="0.08" opacity="0.2" />
      <line x1="68" y1="24.5" x2="68" y2="26" stroke="#556B2F" strokeWidth="0.08" opacity="0.2" />
      {/* Name */}
      <text x="10" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="5.5" letterSpacing="0.5" fill="#3a4a2a" filter="url(#macro-f-shadow)">
        {data.nameJa}
      </text>
      <text x="10" y="28" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.8" letterSpacing="0.3" fill="#6b7b5b">
        {data.nameEn}
      </text>
      <line x1="10" y1="31" x2="45" y2="31" stroke="#c0cbb0" strokeWidth="0.1" />
      <text x="10" y="35.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#8b9b7b">
        {data.titleJa}
      </text>
      {/* Magnification ratio */}
      <text x="81" y="50" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="0.9" fill="#556B2F" opacity="0.4">1:1 MACRO</text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="10" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="macro-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <linearGradient id="macro-b-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f5f8f0" />
          <stop offset="100%" stopColor="#eef2e8" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#macro-b-bg)" />
      {/* Light grid */}
      <g opacity="0.04">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <line key={`macro-bvh-${i}`} x1={i * 9.1} y1="0" x2={i * 9.1} y2="55" stroke="#556B2F" strokeWidth="0.1" />
        ))}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line key={`macro-bhh-${i}`} x1="0" y1={i * 9.17} x2="91" y2={i * 9.17} stroke="#556B2F" strokeWidth="0.1" />
        ))}
      </g>
      {/* Small macro ring accent */}
      <circle cx="83" cy="8" r="3" fill="none" stroke="#556B2F" strokeWidth="0.08" opacity="0.15" />
      <circle cx="83" cy="8" r="1.5" fill="none" stroke="#556B2F" strokeWidth="0.06" opacity="0.2" />
      {/* Company */}
      <text x="10" y="13" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#3a4a2a">
        {data.companyJa}
      </text>
      <text x="10" y="17.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#6b7b5b">
        {data.companyEn}
      </text>
      {/* Title */}
      <text x="10" y="21.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#8b9b7b">
        {data.titleJa}
      </text>
      <line x1="10" y1="24" x2="50" y2="24" stroke="#c0cbb0" strokeWidth="0.12" />
      {/* Contact */}
      <text x="10" y="29" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#556B2F">
        TEL {data.tel}
      </text>
      <text x="10" y="33" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#556B2F">
        {data.email}
      </text>
      <text x="10" y="37" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#556B2F">
        {data.website}
      </text>
      <line x1="10" y1="40" x2="50" y2="40" stroke="#d5dfca" strokeWidth="0.08" />
      <text x="10" y="44.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#8b9b7b">
        〒{data.zipCode}
      </text>
      <text x="10" y="48.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#8b9b7b">
        {data.addressJa}
      </text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="74" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
};

export const photoTemplates: TemplateDefinition[] = [
  shutterTemplate,
  lensTemplate,
  focusTemplate,
  exposureTemplate,
  framePTemplate,
  cropTemplate,
  darkroomTemplate,
  filmPTemplate,
  apertureTemplate,
  macroTemplate,
];
