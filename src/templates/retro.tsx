import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. VINYL (盤) — Vinyl record grooves, spinning disc aesthetic
// ============================================================
const vinylTemplate: TemplateDefinition = {
  id: 'retro-vinyl',
  name: 'VINYL',
  nameJa: '盤',
  category: 'retro',
  designer: 'Vinyl Studio',
  description: 'レコードの溝が奏でるアナログの温もり。',
  accentColor: '#2C2C2C',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="retro-vinyl-disc" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#555555" />
          <stop offset="20%" stopColor="#3a3a3a" />
          <stop offset="60%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </radialGradient>
        <radialGradient id="retro-vinyl-label" cx="0.45" cy="0.4" r="0.5">
          <stop offset="0%" stopColor="#e07840" />
          <stop offset="100%" stopColor="#c85a30" />
        </radialGradient>
        <linearGradient id="retro-vinyl-sheen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.06" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.03" />
        </linearGradient>
        <filter id="retro-vinyl-halftone">
          <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="2" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="retro-vinyl-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.12" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#1a1a1a" />
      <rect width="91" height="55" fill="url(#retro-vinyl-sheen)" />
      {/* Vinyl record */}
      <circle cx="68" cy="27.5" r="24" fill="url(#retro-vinyl-disc)" />
      {/* Record grooves - concentric rings */}
      {[22, 20, 18, 16, 14, 12, 10, 8].map((r, i) => (
        <circle key={`retro-vinyl-groove-${i}`} cx="68" cy="27.5" r={r} fill="none" stroke={i % 2 === 0 ? '#3a3a3a' : '#333333'} strokeWidth={i % 2 === 0 ? '0.15' : '0.1'} />
      ))}
      {/* Center label */}
      <circle cx="68" cy="27.5" r="6" fill="url(#retro-vinyl-label)" />
      <circle cx="68" cy="27.5" r="5.5" fill="none" stroke="#a04820" strokeWidth="0.15" />
      <circle cx="68" cy="27.5" r="1.2" fill="#1a1a1a" />
      {/* Label text */}
      <text x="68" y="26" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontSize="1" fontWeight="600" fill="#1a1a1a" letterSpacing="0.3">SIDE A</text>
      <text x="68" y="28.8" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontSize="0.8" fill="#2a1a0a" opacity="0.6">33 RPM</text>
      {/* Light reflection arc */}
      <path d="M52,12 Q68,6 84,12 Q80,27 52,24 Z" fill="#ffffff" opacity="0.025" />
      {/* Tonearm line */}
      <line x1="48" y1="3" x2="60" y2="20" stroke="#555555" strokeWidth="0.3" opacity="0.4" />
      <circle cx="60" cy="20" r="0.8" fill="none" stroke="#777777" strokeWidth="0.2" opacity="0.4" />
      {data.logo && <image href={data.logo} x="5" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text x="7" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="5.5" letterSpacing="0.5" fill="#f0e0d0" filter="url(#retro-vinyl-shadow)">
        {data.nameJa}
      </text>
      <text x="7" y="27" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.3" fill="#c85a30">
        {data.nameEn}
      </text>
      <line x1="7" y1="30" x2="40" y2="30" stroke="#c85a30" strokeWidth="0.12" opacity="0.4" />
      <text x="7" y="35" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#888888">
        {data.titleJa}
      </text>
      <text x="7" y="40" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#666666">
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="retro-vinyl-halftone-b">
          <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="2" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="retro-vinyl-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#1a1a1a" />
      {/* Record sleeve horizontal lines */}
      <line x1="0" y1="5" x2="91" y2="5" stroke="#2a2a2a" strokeWidth="0.3" />
      <line x1="0" y1="50" x2="91" y2="50" stroke="#2a2a2a" strokeWidth="0.3" />
      <rect x="6" y="7" width="79" height="0.3" fill="#c85a30" opacity="0.6" />
      {/* Small vinyl icon top-right */}
      <circle cx="79" cy="11" r="3" fill="none" stroke="#444444" strokeWidth="0.2" />
      <circle cx="79" cy="11" r="1" fill="#c85a30" opacity="0.5" />
      <circle cx="79" cy="11" r="0.3" fill="#1a1a1a" />
      {data.logo && <image href={data.logo} x="7" y="9" width="6" height="6" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
      <text x="45.5" y="16" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.2" fill="#f0e0d0" filter="url(#retro-vinyl-shadow-b)">
        {data.companyJa}
      </text>
      <text x="45.5" y="20.5" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#c85a30">
        {data.companyEn}
      </text>
      <text x="45.5" y="24" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#777777">
        {data.titleJa}
      </text>
      <line x1="20" y1="26.5" x2="71" y2="26.5" stroke="#333333" strokeWidth="0.15" />
      <text x="14" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#999999">
        TEL
      </text>
      <text x="25" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#ccbbaa">
        {data.tel}
      </text>
      <text x="14" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#999999">
        MAIL
      </text>
      <text x="25" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#ccbbaa">
        {data.email}
      </text>
      <text x="14" y="39" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#999999">
        WEB
      </text>
      <text x="25" y="39" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#ccbbaa">
        {data.website}
      </text>
      <line x1="20" y1="42" x2="71" y2="42" stroke="#333333" strokeWidth="0.15" />
      <text x="45.5" y="46.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#666666">
        〒{data.zipCode}
      </text>
      <text x="45.5" y="50" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#666666">
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 2. DINER (店) — 1950s American diner, checkered pattern
// ============================================================
const dinerTemplate: TemplateDefinition = {
  id: 'retro-diner',
  name: 'DINER',
  nameJa: '店',
  category: 'retro',
  designer: 'Diner Studio',
  description: '50年代のダイナーの陽気な活気。',
  accentColor: '#D44B3F',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="retro-diner-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFF8E7" />
          <stop offset="100%" stopColor="#F5EDD8" />
        </linearGradient>
        <linearGradient id="retro-diner-stripe" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D44B3F" />
          <stop offset="100%" stopColor="#B83A30" />
        </linearGradient>
        <filter id="retro-diner-halftone">
          <feTurbulence type="fractalNoise" baseFrequency="1.5" numOctaves="2" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="retro-diner-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.15" dy="0.2" />
          <feFlood floodColor="#8B2500" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#retro-diner-bg)" />
      {/* Top red stripe band */}
      <rect x="0" y="0" width="91" height="4" fill="url(#retro-diner-stripe)" />
      <rect x="0" y="4" width="91" height="1.5" fill="#ffffff" />
      <rect x="0" y="5.5" width="91" height="1.5" fill="url(#retro-diner-stripe)" />
      {/* Bottom red stripe band */}
      <rect x="0" y="48" width="91" height="1.5" fill="url(#retro-diner-stripe)" />
      <rect x="0" y="49.5" width="91" height="1.5" fill="#ffffff" />
      <rect x="0" y="51" width="91" height="4" fill="url(#retro-diner-stripe)" />
      {/* Checkerboard pattern - left side */}
      {[0, 1, 2, 3].map((i) =>
        [0, 1, 2, 3].map((j) => (
          <rect
            key={`retro-diner-check-${i}-${j}`}
            x={i * 2.5}
            y={8 + j * 2.5}
            width="2.5"
            height="2.5"
            fill={(i + j) % 2 === 0 ? '#D44B3F' : '#FFF8E7'}
            opacity="0.12"
          />
        ))
      )}
      {/* Checkerboard pattern - right side */}
      {[0, 1, 2, 3].map((i) =>
        [0, 1, 2, 3].map((j) => (
          <rect
            key={`retro-diner-check-r-${i}-${j}`}
            x={81 - i * 2.5}
            y={8 + j * 2.5}
            width="2.5"
            height="2.5"
            fill={(i + j) % 2 === 0 ? '#D44B3F' : '#FFF8E7'}
            opacity="0.12"
          />
        ))
      )}
      {/* Starburst decoration */}
      <polygon points="45.5,8 46.5,11 49.5,11 47,12.8 48,15.5 45.5,13.8 43,15.5 44,12.8 41.5,11 44.5,11" fill="#D44B3F" opacity="0.08" />
      {/* Chrome circle accent */}
      <circle cx="45.5" cy="11" r="6" fill="none" stroke="#D44B3F" strokeWidth="0.12" opacity="0.15" />
      {data.logo && <image href={data.logo} x="40" y="8" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.15" />}
      <text x="45.5" y="25" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="6" letterSpacing="0.5" fill="#D44B3F" filter="url(#retro-diner-shadow)">
        {data.nameJa}
      </text>
      <text x="45.5" y="32" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="2.2" letterSpacing="0.3" fill="#333333">
        {data.nameEn.toUpperCase()}
      </text>
      <line x1="20" y1="35" x2="71" y2="35" stroke="#D44B3F" strokeWidth="0.15" strokeDasharray="0.8,0.4" />
      <text x="45.5" y="40" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.6" fill="#888888">
        {data.titleJa}
      </text>
      <text x="45.5" y="45" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#aaaaaa">
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="retro-diner-halftone-b">
          <feTurbulence type="fractalNoise" baseFrequency="1.5" numOctaves="2" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="retro-diner-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#8B2500" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#FFF8E7" />
      <rect x="0" y="0" width="91" height="3" fill="#D44B3F" />
      <rect x="0" y="52" width="91" height="3" fill="#D44B3F" />
      {/* Corner starbursts */}
      <polygon points="8,8 9,10.5 11.5,10.5 9.5,12 10.5,14.5 8,12.5 5.5,14.5 6.5,12 4.5,10.5 7,10.5" fill="#D44B3F" opacity="0.08" />
      <polygon points="83,42 84,44.5 86.5,44.5 84.5,46 85.5,48.5 83,46.5 80.5,48.5 81.5,46 79.5,44.5 82,44.5" fill="#D44B3F" opacity="0.08" />
      {/* Dotted border */}
      <rect x="5" y="5" width="81" height="45" fill="none" stroke="#D44B3F" strokeWidth="0.15" strokeDasharray="0.6,0.8" opacity="0.25" />
      {data.logo && <image href={data.logo} x="39" y="5.5" width="6" height="6" preserveAspectRatio="xMidYMid meet" opacity="0.3" />}
      <text x="45.5" y="16" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="2.2" fill="#D44B3F" filter="url(#retro-diner-shadow-b)">
        {data.companyJa}
      </text>
      <text x="45.5" y="20.5" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="500" fontSize="1.5" fill="#666666">
        {data.companyEn}
      </text>
      <text x="45.5" y="24" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#888888">
        {data.titleJa}
      </text>
      <line x1="15" y1="26.5" x2="76" y2="26.5" stroke="#D44B3F" strokeWidth="0.2" strokeDasharray="1,0.5" />
      <text x="14" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1" fill="#D44B3F" letterSpacing="0.3">TEL</text>
      <text x="24" y="31" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fill="#555555">{data.tel}</text>
      <text x="14" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1" fill="#D44B3F" letterSpacing="0.3">MAIL</text>
      <text x="24" y="35" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fill="#555555">{data.email}</text>
      <text x="14" y="39" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1" fill="#D44B3F" letterSpacing="0.3">WEB</text>
      <text x="24" y="39" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fill="#555555">{data.website}</text>
      <line x1="15" y1="41.5" x2="76" y2="41.5" stroke="#D44B3F" strokeWidth="0.2" strokeDasharray="1,0.5" />
      <text x="45.5" y="46" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#888888">
        〒{data.zipCode}
      </text>
      <text x="45.5" y="49.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#888888">
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 3. ARCADE (遊) — Retro pixel-style game aesthetic
// ============================================================
const arcadeTemplate: TemplateDefinition = {
  id: 'retro-arcade',
  name: 'ARCADE',
  nameJa: '遊',
  category: 'retro',
  designer: 'Arcade Studio',
  description: 'ゲームセンターの蛍光灯が照らすノスタルジー。',
  accentColor: '#00CC66',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="retro-arcade-glow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00CC66" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#00CC66" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="retro-arcade-crt" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor="#0a0a2e" stopOpacity="0" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.3" />
        </radialGradient>
        <filter id="retro-arcade-halftone">
          <feTurbulence type="fractalNoise" baseFrequency="2.0" numOctaves="1" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="screen" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="retro-arcade-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.4" />
          <feOffset dx="0" dy="0.2" />
          <feFlood floodColor="#00FF80" floodOpacity="0.15" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="retro-arcade-phosphor">
          <feGaussianBlur stdDeviation="0.6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#0a0a2e" />
      <rect width="91" height="55" fill="url(#retro-arcade-crt)" />
      {/* Scanline effect */}
      {[...Array(28)].map((_, i) => (
        <line key={`retro-arcade-scan-${i}`} x1="0" y1={i * 2} x2="91" y2={i * 2} stroke="#ffffff" strokeWidth="0.1" opacity="0.04" />
      ))}
      {/* Green border */}
      <rect x="3" y="3" width="85" height="49" fill="none" stroke="#00CC66" strokeWidth="0.4" />
      <rect x="4.5" y="4.5" width="82" height="46" fill="none" stroke="#00CC66" strokeWidth="0.15" opacity="0.4" />
      {/* Corner pixel decorations */}
      <rect x="3" y="3" width="2" height="2" fill="#00CC66" opacity="0.6" />
      <rect x="86" y="3" width="2" height="2" fill="#00CC66" opacity="0.6" />
      <rect x="3" y="50" width="2" height="2" fill="#00CC66" opacity="0.6" />
      <rect x="86" y="50" width="2" height="2" fill="#00CC66" opacity="0.6" />
      {/* Star/power-up pixels */}
      <rect x="10" y="8" width="1" height="1" fill="#ffcc00" opacity="0.6" />
      <rect x="78" y="10" width="1" height="1" fill="#ffcc00" opacity="0.5" />
      <rect x="15" y="45" width="1" height="1" fill="#ffcc00" opacity="0.4" />
      <rect x="74" y="44" width="1" height="1" fill="#ff4444" opacity="0.3" />
      <rect x="82" y="8" width="0.8" height="0.8" fill="#44ccff" opacity="0.4" />
      {/* Top glow */}
      <rect width="91" height="10" fill="url(#retro-arcade-glow)" />
      {data.logo && <image href={data.logo} x="6" y="6" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
      <text x="45.5" y="22" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="6" letterSpacing="0.8" fill="#00CC66" filter="url(#retro-arcade-phosphor)">
        {data.nameJa}
      </text>
      <text x="45.5" y="29" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="500" fontSize="2" letterSpacing="0.5" fill="#00ff80">
        {data.nameEn.toUpperCase()}
      </text>
      <text x="45.5" y="36" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#008844">
        {data.titleJa}
      </text>
      {/* Score-like company display */}
      <text x="45.5" y="42" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.2" fill="#006633" letterSpacing="0.3">
        {data.companyEn}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="retro-arcade-halftone-b">
          <feTurbulence type="fractalNoise" baseFrequency="2.0" numOctaves="1" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="screen" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="retro-arcade-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0" dy="0.15" />
          <feFlood floodColor="#00FF80" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#0a0a2e" />
      {/* Scanlines */}
      {[...Array(28)].map((_, i) => (
        <line key={`retro-arcade-scan-b-${i}`} x1="0" y1={i * 2} x2="91" y2={i * 2} stroke="#ffffff" strokeWidth="0.1" opacity="0.04" />
      ))}
      <rect x="3" y="3" width="85" height="49" fill="none" stroke="#00CC66" strokeWidth="0.4" />
      {/* Pixel corners */}
      <rect x="3" y="3" width="2" height="2" fill="#00CC66" opacity="0.5" />
      <rect x="86" y="3" width="2" height="2" fill="#00CC66" opacity="0.5" />
      <rect x="3" y="50" width="2" height="2" fill="#00CC66" opacity="0.5" />
      <rect x="86" y="50" width="2" height="2" fill="#00CC66" opacity="0.5" />
      {data.logo && <image href={data.logo} x="39" y="4" width="6" height="6" preserveAspectRatio="xMidYMid meet" opacity="0.35" />}
      <text x="45.5" y="14" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="2.2" fill="#00CC66" filter="url(#retro-arcade-shadow-b)">
        {data.companyJa}
      </text>
      <text x="45.5" y="18" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#008844">
        {data.companyEn}
      </text>
      <text x="45.5" y="21.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#006633">
        {data.titleJa}
      </text>
      <line x1="15" y1="23.5" x2="76" y2="23.5" stroke="#00CC66" strokeWidth="0.15" opacity="0.4" />
      {/* Contact info with pixel-label style */}
      <text x="14" y="28" fontFamily="'Space Grotesk', sans-serif" fontWeight="600" fontSize="1" fill="#00CC66" letterSpacing="0.2">&gt; TEL</text>
      <text x="28" y="28" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#00ff80">{data.tel}</text>
      <text x="14" y="32" fontFamily="'Space Grotesk', sans-serif" fontWeight="600" fontSize="1" fill="#00CC66" letterSpacing="0.2">&gt; MAIL</text>
      <text x="28" y="32" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#00ff80">{data.email}</text>
      <text x="14" y="36" fontFamily="'Space Grotesk', sans-serif" fontWeight="600" fontSize="1" fill="#00CC66" letterSpacing="0.2">&gt; WEB</text>
      <text x="28" y="36" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#00ff80">{data.website}</text>
      <line x1="15" y1="39" x2="76" y2="39" stroke="#00CC66" strokeWidth="0.15" opacity="0.4" />
      <text x="45.5" y="43.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#008844">
        〒{data.zipCode}
      </text>
      <text x="45.5" y="47.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#008844">
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 4. POLAROID (写) — Instant photo frame aesthetic
// ============================================================
const polaroidTemplate: TemplateDefinition = {
  id: 'retro-polaroid',
  name: 'POLAROID',
  nameJa: '写',
  category: 'retro',
  designer: 'Polaroid Studio',
  description: 'インスタント写真の余白に刻まれた記憶。',
  accentColor: '#E8D5B7',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="retro-polaroid-photo" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d8c8b0" />
          <stop offset="30%" stopColor="#c8b8a0" />
          <stop offset="70%" stopColor="#baa890" />
          <stop offset="100%" stopColor="#b8a890" />
        </linearGradient>
        <linearGradient id="retro-polaroid-frame" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f8f4ec" />
        </linearGradient>
        <filter id="retro-polaroid-aged">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="retro-polaroid-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.5" />
          <feOffset dx="0.2" dy="0.3" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="retro-polaroid-vignette">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
          <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.15 0" />
          <feBlend mode="multiply" in="SourceGraphic" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="#f5f0e8" />
      {/* Subtle aged paper grain overlay */}
      <rect width="91" height="55" fill="#e8dcd0" opacity="0.1" />
      {/* Polaroid frame with shadow */}
      <rect x="22" y="2" width="47" height="43" rx="0.3" fill="url(#retro-polaroid-frame)" filter="url(#retro-polaroid-shadow)" />
      <rect x="22" y="2" width="47" height="43" rx="0.3" fill="none" stroke="#e0d8cc" strokeWidth="0.2" />
      {/* Photo area */}
      <rect x="25" y="5" width="41" height="28" fill="url(#retro-polaroid-photo)" />
      {/* Faded photo elements - circle sun, horizon, landscape */}
      <circle cx="56" cy="14" r="5" fill="#c8b080" opacity="0.35" />
      <rect x="25" y="22" width="41" height="11" fill="#b8a080" opacity="0.2" />
      <path d="M25,28 Q35,20 45,25 T65,22 L66,33 L25,33 Z" fill="#a89870" opacity="0.15" />
      {/* Light leak effect */}
      <rect x="25" y="5" width="10" height="28" fill="#e8a040" opacity="0.06" />
      {data.logo && <image href={data.logo} x="28" y="8" width="6" height="6" preserveAspectRatio="xMidYMid meet" opacity="0.25" />}
      {/* Name in the white border area */}
      <text x="45.5" y="39" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="3" fill="#555555">
        {data.nameJa}
      </text>
      <text x="45.5" y="49" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.8" letterSpacing="0.2" fill="#888888">
        {data.nameEn}
      </text>
      <text x="45.5" y="53" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#aaaaaa">
        {data.titleJa}
      </text>
      {/* Handwritten date style */}
      <text x="8" y="50" fontFamily="'Cormorant Garamond', serif" fontWeight="300" fontSize="1" fill="#c8baa8" opacity="0.6">
        since 2024
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="retro-polaroid-aged-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="retro-polaroid-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#f5f0e8" />
      {/* Aged paper texture lines */}
      {[...Array(10)].map((_, i) => (
        <line key={`retro-polaroid-rule-${i}`} x1="0" y1={5 + i * 5} x2="91" y2={5 + i * 5} stroke="#e0d8c8" strokeWidth="0.08" />
      ))}
      {/* Tape strip at top */}
      <rect x="32" y="0" width="27" height="3" fill="#e8dcc0" opacity="0.4" rx="0.2" />
      <rect x="32" y="0" width="27" height="3" fill="none" stroke="#d8ccb0" strokeWidth="0.1" rx="0.2" />
      {data.logo && <image href={data.logo} x="40" y="4" width="6" height="6" preserveAspectRatio="xMidYMid meet" opacity="0.35" />}
      <text x="45.5" y="14" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.2" fill="#555555" filter="url(#retro-polaroid-shadow-b)">
        {data.companyJa}
      </text>
      <text x="45.5" y="18.5" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#888888">
        {data.companyEn}
      </text>
      <text x="45.5" y="22" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#aaaaaa">
        {data.titleJa}
      </text>
      <line x1="25" y1="24.5" x2="66" y2="24.5" stroke="#c8baa8" strokeWidth="0.15" />
      <text x="14" y="29" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1" fill="#bba898" letterSpacing="0.2">Tel.</text>
      <text x="22" y="29" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#777777">{data.tel}</text>
      <text x="14" y="33" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1" fill="#bba898" letterSpacing="0.2">Mail</text>
      <text x="22" y="33" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#777777">{data.email}</text>
      <text x="14" y="37" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1" fill="#bba898" letterSpacing="0.2">Web</text>
      <text x="22" y="37" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#777777">{data.website}</text>
      <line x1="25" y1="39.5" x2="66" y2="39.5" stroke="#c8baa8" strokeWidth="0.15" />
      <text x="45.5" y="44" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#aaaaaa">
        〒{data.zipCode}
      </text>
      <text x="45.5" y="48" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#aaaaaa">
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 5. CASSETTE (録) — Cassette tape window and reels
// ============================================================
const cassetteTemplate: TemplateDefinition = {
  id: 'retro-cassette',
  name: 'CASSETTE',
  nameJa: '録',
  category: 'retro',
  designer: 'Cassette Studio',
  description: 'カセットテープの巻き戻せない時間。',
  accentColor: '#C8963E',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="retro-cassette-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f0e8d0" />
          <stop offset="100%" stopColor="#e0d4b8" />
        </linearGradient>
        <linearGradient id="retro-cassette-label" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f8f2e8" />
        </linearGradient>
        <linearGradient id="retro-cassette-window" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a3028" />
          <stop offset="100%" stopColor="#2a2018" />
        </linearGradient>
        <filter id="retro-cassette-halftone">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="retro-cassette-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.15" dy="0.2" />
          <feFlood floodColor="#3a2a18" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#retro-cassette-body)" />
      {/* Cassette body outline */}
      <rect x="8" y="4" width="75" height="47" rx="3" fill="#e8dcc0" stroke="#c8b898" strokeWidth="0.3" />
      <rect x="9.5" y="5.5" width="72" height="44" rx="2" fill="none" stroke="#d8ccb0" strokeWidth="0.15" />
      {/* Label area */}
      <rect x="14" y="7" width="63" height="19" rx="1" fill="url(#retro-cassette-label)" stroke="#d8ccb0" strokeWidth="0.2" />
      {/* Label ruled lines */}
      <line x1="16" y1="13" x2="75" y2="13" stroke="#e8dcc0" strokeWidth="0.08" />
      <line x1="16" y1="17" x2="75" y2="17" stroke="#e8dcc0" strokeWidth="0.08" />
      <line x1="16" y1="21" x2="75" y2="21" stroke="#e8dcc0" strokeWidth="0.08" />
      {/* Tape window */}
      <rect x="28" y="29" width="35" height="11" rx="2" fill="url(#retro-cassette-window)" />
      <rect x="28" y="29" width="35" height="11" rx="2" fill="none" stroke="#5a4838" strokeWidth="0.2" />
      {/* Tape reels */}
      <circle cx="37" cy="34.5" r="3.8" fill="none" stroke="#5a4838" strokeWidth="0.2" />
      <circle cx="37" cy="34.5" r="1.8" fill="#C8963E" />
      <circle cx="37" cy="34.5" r="0.5" fill="#3a3028" />
      {/* Reel spokes */}
      <line x1="37" y1="32.7" x2="37" y2="36.3" stroke="#a07828" strokeWidth="0.15" />
      <line x1="35.2" y1="34.5" x2="38.8" y2="34.5" stroke="#a07828" strokeWidth="0.15" />
      <circle cx="54" cy="34.5" r="3.8" fill="none" stroke="#5a4838" strokeWidth="0.2" />
      <circle cx="54" cy="34.5" r="1.8" fill="#C8963E" />
      <circle cx="54" cy="34.5" r="0.5" fill="#3a3028" />
      <line x1="54" y1="32.7" x2="54" y2="36.3" stroke="#a07828" strokeWidth="0.15" />
      <line x1="52.2" y1="34.5" x2="55.8" y2="34.5" stroke="#a07828" strokeWidth="0.15" />
      {/* Tape between reels */}
      <path d="M40.8,34.5 Q45.5,32 50.2,34.5" fill="none" stroke="#5a4838" strokeWidth="0.15" />
      {/* Screw holes */}
      <circle cx="12" cy="8" r="1" fill="none" stroke="#c8b898" strokeWidth="0.2" />
      <circle cx="79" cy="8" r="1" fill="none" stroke="#c8b898" strokeWidth="0.2" />
      <circle cx="12" cy="47" r="1" fill="none" stroke="#c8b898" strokeWidth="0.2" />
      <circle cx="79" cy="47" r="1" fill="none" stroke="#c8b898" strokeWidth="0.2" />
      {data.logo && <image href={data.logo} x="16" y="8" width="5" height="5" preserveAspectRatio="xMidYMid meet" opacity="0.3" />}
      {/* Name on label */}
      <text x="45.5" y="15" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="4" letterSpacing="0.3" fill="#4a3a28" filter="url(#retro-cassette-shadow)">
        {data.nameJa}
      </text>
      <text x="45.5" y="20.5" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.8" letterSpacing="0.2" fill="#8a7a60">
        {data.nameEn}
      </text>
      <text x="45.5" y="24.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#a0906e">
        {data.titleJa}
      </text>
      {/* Side A indicator */}
      <text x="70" y="10" fontFamily="'Space Grotesk', sans-serif" fontWeight="600" fontSize="1.2" fill="#C8963E" letterSpacing="0.3">SIDE A</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="retro-cassette-halftone-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="retro-cassette-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#3a2a18" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#f0e8d0" />
      {/* Lined paper effect - J-card insert style */}
      {[...Array(11)].map((_, i) => (
        <line key={`retro-cassette-line-${i}`} x1="10" y1={7 + i * 4} x2="81" y2={7 + i * 4} stroke="#d8ccb0" strokeWidth="0.08" />
      ))}
      {/* Side B label */}
      <text x="78" y="6" fontFamily="'Space Grotesk', sans-serif" fontWeight="600" fontSize="1" fill="#C8963E" letterSpacing="0.3">SIDE B</text>
      {data.logo && <image href={data.logo} x="39" y="3" width="6" height="6" preserveAspectRatio="xMidYMid meet" opacity="0.3" />}
      <text x="45.5" y="13" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="2.2" fill="#4a3a28" filter="url(#retro-cassette-shadow-b)">
        {data.companyJa}
      </text>
      <text x="45.5" y="17.5" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#8a7a60">
        {data.companyEn}
      </text>
      <text x="45.5" y="21" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#a0906e">
        {data.titleJa}
      </text>
      <rect x="20" y="23" width="51" height="0.2" fill="#C8963E" opacity="0.5" />
      <text x="14" y="28" fontFamily="'Space Grotesk', sans-serif" fontWeight="500" fontSize="1" fill="#C8963E" letterSpacing="0.2">TEL</text>
      <text x="24" y="28" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#6a5a42">{data.tel}</text>
      <text x="14" y="32" fontFamily="'Space Grotesk', sans-serif" fontWeight="500" fontSize="1" fill="#C8963E" letterSpacing="0.2">MAIL</text>
      <text x="24" y="32" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#6a5a42">{data.email}</text>
      <text x="14" y="36" fontFamily="'Space Grotesk', sans-serif" fontWeight="500" fontSize="1" fill="#C8963E" letterSpacing="0.2">WEB</text>
      <text x="24" y="36" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#6a5a42">{data.website}</text>
      <rect x="20" y="38.5" width="51" height="0.2" fill="#C8963E" opacity="0.5" />
      <text x="45.5" y="43" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#8a7a60">
        〒{data.zipCode}
      </text>
      <text x="45.5" y="47" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#8a7a60">
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 6. NEONRETRO (管) — Neon tubes on dark background
// ============================================================
const neonretroTemplate: TemplateDefinition = {
  id: 'retro-neonretro',
  name: 'NEONRETRO',
  nameJa: '管',
  category: 'retro',
  designer: 'Neon Studio',
  description: 'ネオン管が夜を彩るレトロフューチャー。',
  accentColor: '#FF6EC7',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="retro-neonretro-bg" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#1a0a2e" />
          <stop offset="50%" stopColor="#150828" />
          <stop offset="100%" stopColor="#0f0620" />
        </linearGradient>
        <radialGradient id="retro-neonretro-ambient" cx="0.5" cy="0.5" r="0.8">
          <stop offset="0%" stopColor="#FF6EC7" stopOpacity="0.03" />
          <stop offset="100%" stopColor="#1a0a2e" stopOpacity="0" />
        </radialGradient>
        <filter id="retro-neonretro-glow">
          <feGaussianBlur stdDeviation="0.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="retro-neonretro-halftone">
          <feTurbulence type="fractalNoise" baseFrequency="1.8" numOctaves="2" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="screen" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="retro-neonretro-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#FF6EC7" floodOpacity="0.12" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#retro-neonretro-bg)" />
      <rect width="91" height="55" fill="url(#retro-neonretro-ambient)" />
      {/* Neon border - double glow */}
      <rect x="5" y="4" width="81" height="47" rx="2" fill="none" stroke="#FF6EC7" strokeWidth="0.3" opacity="0.6" />
      <rect x="5" y="4" width="81" height="47" rx="2" fill="none" stroke="#FF6EC7" strokeWidth="1" opacity="0.08" />
      {/* Neon accent lines with glow */}
      <line x1="10" y1="10" x2="30" y2="10" stroke="#00FFFF" strokeWidth="0.3" opacity="0.7" />
      <line x1="10" y1="10" x2="30" y2="10" stroke="#00FFFF" strokeWidth="1" opacity="0.1" />
      <line x1="61" y1="45" x2="81" y2="45" stroke="#FF6EC7" strokeWidth="0.3" opacity="0.7" />
      <line x1="61" y1="45" x2="81" y2="45" stroke="#FF6EC7" strokeWidth="1" opacity="0.1" />
      {/* Reflection dots */}
      <circle cx="80" cy="10" r="0.4" fill="#FF6EC7" opacity="0.6" />
      <circle cx="12" cy="45" r="0.4" fill="#00FFFF" opacity="0.6" />
      <circle cx="45" cy="4" r="0.3" fill="#FF6EC7" opacity="0.4" />
      {/* Window reflection grid */}
      <line x1="75" y1="15" x2="82" y2="15" stroke="#00FFFF" strokeWidth="0.08" opacity="0.2" />
      <line x1="75" y1="18" x2="82" y2="18" stroke="#00FFFF" strokeWidth="0.08" opacity="0.15" />
      <line x1="78" y1="12" x2="78" y2="21" stroke="#00FFFF" strokeWidth="0.08" opacity="0.15" />
      {data.logo && <image href={data.logo} x="7" y="12" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
      <text x="45.5" y="24" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="6" letterSpacing="0.5" fill="#FF6EC7" filter="url(#retro-neonretro-glow)">
        {data.nameJa}
      </text>
      <text x="45.5" y="31" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="500" fontSize="2" letterSpacing="0.4" fill="#00FFFF">
        {data.nameEn.toUpperCase()}
      </text>
      <text x="45.5" y="37" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#9966cc">
        {data.titleJa}
      </text>
      <text x="45.5" y="42" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#7744aa">
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="retro-neonretro-glow-b">
          <feGaussianBlur stdDeviation="0.4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="retro-neonretro-halftone-b">
          <feTurbulence type="fractalNoise" baseFrequency="1.8" numOctaves="2" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="screen" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="retro-neonretro-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.1" dy="0.12" />
          <feFlood floodColor="#FF6EC7" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#1a0a2e" />
      <rect x="5" y="4" width="81" height="47" rx="2" fill="none" stroke="#FF6EC7" strokeWidth="0.3" opacity="0.35" />
      <rect x="5" y="4" width="81" height="47" rx="2" fill="none" stroke="#FF6EC7" strokeWidth="0.8" opacity="0.06" />
      {/* Decorative neon marks */}
      <line x1="8" y1="8" x2="18" y2="8" stroke="#00FFFF" strokeWidth="0.2" opacity="0.4" />
      <line x1="73" y1="47" x2="83" y2="47" stroke="#FF6EC7" strokeWidth="0.2" opacity="0.4" />
      {data.logo && <image href={data.logo} x="39" y="4.5" width="6" height="6" preserveAspectRatio="xMidYMid meet" opacity="0.3" />}
      <text x="45.5" y="15" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.2" fill="#FF6EC7" filter="url(#retro-neonretro-shadow-b)">
        {data.companyJa}
      </text>
      <text x="45.5" y="19" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#00FFFF">
        {data.companyEn}
      </text>
      <text x="45.5" y="22.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#9966cc">
        {data.titleJa}
      </text>
      <line x1="20" y1="25" x2="71" y2="25" stroke="#9966cc" strokeWidth="0.12" opacity="0.4" />
      <text x="14" y="29.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1" fill="#FF6EC7" letterSpacing="0.2">TEL</text>
      <text x="24" y="29.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#cc88ee">{data.tel}</text>
      <text x="14" y="33.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1" fill="#FF6EC7" letterSpacing="0.2">MAIL</text>
      <text x="24" y="33.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#cc88ee">{data.email}</text>
      <text x="14" y="37.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1" fill="#FF6EC7" letterSpacing="0.2">WEB</text>
      <text x="24" y="37.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#cc88ee">{data.website}</text>
      <line x1="20" y1="40" x2="71" y2="40" stroke="#9966cc" strokeWidth="0.12" opacity="0.4" />
      <text x="45.5" y="44.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#9966cc">
        〒{data.zipCode}
      </text>
      <text x="45.5" y="48.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#9966cc">
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 7. TYPEWRITER (打) — Typewriter key impressions
// ============================================================
const typewriterTemplate: TemplateDefinition = {
  id: 'retro-typewriter',
  name: 'TYPEWRITER',
  nameJa: '打',
  category: 'retro',
  designer: 'Typewriter Studio',
  description: 'タイプライターが紡ぐ一文字一文字の重み。',
  accentColor: '#4A4035',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="retro-typewriter-paper" x1="0" y1="0" x2="0.1" y2="1">
          <stop offset="0%" stopColor="#f8f0e0" />
          <stop offset="100%" stopColor="#f0e8d4" />
        </linearGradient>
        <filter id="retro-typewriter-ink">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="retro-typewriter-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.15" />
          <feOffset dx="0.08" dy="0.1" />
          <feFlood floodColor="#4A4035" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="retro-typewriter-stamp">
          <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 8 -4" in="noise" result="mask" />
          <feComposite operator="in" in="SourceGraphic" in2="mask" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#retro-typewriter-paper)" />
      {/* Paper texture - ruled lines */}
      {[...Array(22)].map((_, i) => (
        <line key={`retro-typewriter-rule-${i}`} x1="5" y1={5 + i * 2.3} x2="86" y2={5 + i * 2.3} stroke="#e0d8c8" strokeWidth="0.06" />
      ))}
      {/* Red margin line */}
      <line x1="12" y1="0" x2="12" y2="55" stroke="#cc4444" strokeWidth="0.15" opacity="0.25" />
      {/* Punch holes */}
      <circle cx="4" cy="13.75" r="1.2" fill="none" stroke="#d8d0c0" strokeWidth="0.15" />
      <circle cx="4" cy="27.5" r="1.2" fill="none" stroke="#d8d0c0" strokeWidth="0.15" />
      <circle cx="4" cy="41.25" r="1.2" fill="none" stroke="#d8d0c0" strokeWidth="0.15" />
      {/* Typewriter ribbon smudge */}
      <rect x="14" y="17" width="70" height="9" fill="#4A4035" opacity="0.02" rx="1" />
      {data.logo && <image href={data.logo} x="74" y="5" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.2" />}
      <text x="45.5" y="23" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="5" letterSpacing="0.8" fill="#4A4035" filter="url(#retro-typewriter-shadow)">
        {data.nameJa}
      </text>
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="500" fontSize="2.2" letterSpacing="0.3" fill="#6a5a4a">
        {data.nameEn}
      </text>
      <text x="45.5" y="36" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#8a7a6a">
        {data.titleJa}
      </text>
      <text x="45.5" y="41" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#a09888">
        {data.companyJa}
      </text>
      {/* Page number style decoration */}
      <text x="45.5" y="50" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="300" fontSize="1.2" fill="#c0b8a8">
        {'— 1 —'}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="retro-typewriter-ink-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="retro-typewriter-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.15" />
          <feOffset dx="0.08" dy="0.1" />
          <feFlood floodColor="#4A4035" floodOpacity="0.05" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#f8f0e0" />
      {/* Paper lines */}
      {[...Array(22)].map((_, i) => (
        <line key={`retro-typewriter-rule-b-${i}`} x1="5" y1={5 + i * 2.3} x2="86" y2={5 + i * 2.3} stroke="#e0d8c8" strokeWidth="0.06" />
      ))}
      <line x1="12" y1="0" x2="12" y2="55" stroke="#cc4444" strokeWidth="0.15" opacity="0.25" />
      {/* Punch holes */}
      <circle cx="4" cy="13.75" r="1.2" fill="none" stroke="#d8d0c0" strokeWidth="0.15" />
      <circle cx="4" cy="27.5" r="1.2" fill="none" stroke="#d8d0c0" strokeWidth="0.15" />
      <circle cx="4" cy="41.25" r="1.2" fill="none" stroke="#d8d0c0" strokeWidth="0.15" />
      {data.logo && <image href={data.logo} x="40" y="3" width="5" height="5" preserveAspectRatio="xMidYMid meet" opacity="0.25" />}
      <text x="45.5" y="12" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.2" fill="#4A4035" filter="url(#retro-typewriter-shadow-b)">
        {data.companyJa}
      </text>
      <text x="45.5" y="16.5" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#6a5a4a">
        {data.companyEn}
      </text>
      <text x="45.5" y="20" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#8a7a6a">
        {data.titleJa}
      </text>
      <text x="45.5" y="22.5" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="300" fontSize="0.8" fill="#c0b8a8" letterSpacing="0.5">
        {'————————————————————————'}
      </text>
      <text x="14" y="27" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1" fill="#a09888" letterSpacing="0.1">Tel.</text>
      <text x="22" y="27" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#6a5a4a">{data.tel}</text>
      <text x="14" y="31" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1" fill="#a09888" letterSpacing="0.1">Mail</text>
      <text x="22" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#6a5a4a">{data.email}</text>
      <text x="14" y="35" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1" fill="#a09888" letterSpacing="0.1">Web</text>
      <text x="22" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#6a5a4a">{data.website}</text>
      <text x="45.5" y="38.5" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="300" fontSize="0.8" fill="#c0b8a8" letterSpacing="0.5">
        {'————————————————————————'}
      </text>
      <text x="45.5" y="43" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#8a7a6a">
        〒{data.zipCode}
      </text>
      <text x="45.5" y="47" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#8a7a6a">
        {data.addressJa}
      </text>
      {/* Page number */}
      <text x="45.5" y="52" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="300" fontSize="1" fill="#c0b8a8">
        {'— 2 —'}
      </text>
    </g>
  ),
};

// ============================================================
// 8. FILM (映) — Film strip perforations and frames
// ============================================================
const filmTemplate: TemplateDefinition = {
  id: 'retro-film',
  name: 'FILM',
  nameJa: '映',
  category: 'retro',
  designer: 'Film Studio',
  description: 'フィルムの一コマに焼き付いた瞬間。',
  accentColor: '#2C2C2C',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="retro-film-exposure" x1="0" y1="0" x2="0.2" y2="1">
          <stop offset="0%" stopColor="#503828" />
          <stop offset="50%" stopColor="#483020" />
          <stop offset="100%" stopColor="#382818" />
        </linearGradient>
        <linearGradient id="retro-film-leak" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c86030" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#e88040" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#c86030" stopOpacity="0" />
        </linearGradient>
        <filter id="retro-film-grain">
          <feTurbulence type="fractalNoise" baseFrequency="1.0" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="retro-film-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.12" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#2C2C2C" />
      {/* Film strip perforations - left */}
      {[...Array(9)].map((_, i) => (
        <rect key={`retro-film-perf-l-${i}`} x="2" y={3 + i * 5.8} width="3" height="3" rx="0.5" fill="#1a1a1a" stroke="#444444" strokeWidth="0.1" />
      ))}
      {/* Film strip perforations - right */}
      {[...Array(9)].map((_, i) => (
        <rect key={`retro-film-perf-r-${i}`} x="86" y={3 + i * 5.8} width="3" height="3" rx="0.5" fill="#1a1a1a" stroke="#444444" strokeWidth="0.1" />
      ))}
      {/* Film frame border */}
      <rect x="8" y="3" width="75" height="49" fill="#1a1a1a" stroke="#444444" strokeWidth="0.2" />
      {/* Inner frame - exposure area */}
      <rect x="10" y="5" width="71" height="45" fill="url(#retro-film-exposure)" />
      {/* Light leak effect */}
      <rect x="10" y="5" width="25" height="45" fill="url(#retro-film-leak)" />
      {/* Film grain scratch marks */}
      <line x1="25" y1="5" x2="26" y2="50" stroke="#888" strokeWidth="0.05" opacity="0.15" />
      <line x1="58" y1="5" x2="57" y2="50" stroke="#888" strokeWidth="0.04" opacity="0.1" />
      <line x1="42" y1="5" x2="43" y2="50" stroke="#888" strokeWidth="0.03" opacity="0.08" />
      {data.logo && <image href={data.logo} x="12" y="7" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.3" />}
      <text x="45.5" y="24" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6" letterSpacing="0.5" fill="#e8d8c0" filter="url(#retro-film-shadow)">
        {data.nameJa}
      </text>
      <text x="45.5" y="31" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="2" letterSpacing="0.3" fill="#c8a880">
        {data.nameEn}
      </text>
      <text x="45.5" y="37" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#a08860">
        {data.titleJa}
      </text>
      <text x="45.5" y="42" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#887040">
        {data.companyJa}
      </text>
      {/* Frame number */}
      <text x="75" y="10" textAnchor="end" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.2" fill="#887860">
        24A
      </text>
      {/* DX code marks */}
      <rect x="10" y="47" width="2" height="2" fill="#c8a880" opacity="0.15" />
      <rect x="13" y="47" width="1" height="2" fill="#c8a880" opacity="0.1" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="retro-film-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="1.0" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="retro-film-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.1" dy="0.12" />
          <feFlood floodColor="#000" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#2C2C2C" />
      {/* Perforations */}
      {[...Array(9)].map((_, i) => (
        <rect key={`retro-film-perf-lb-${i}`} x="2" y={3 + i * 5.8} width="3" height="3" rx="0.5" fill="#1a1a1a" stroke="#444444" strokeWidth="0.1" />
      ))}
      {[...Array(9)].map((_, i) => (
        <rect key={`retro-film-perf-rb-${i}`} x="86" y={3 + i * 5.8} width="3" height="3" rx="0.5" fill="#1a1a1a" stroke="#444444" strokeWidth="0.1" />
      ))}
      <rect x="8" y="3" width="75" height="49" fill="#1a1a1a" stroke="#444444" strokeWidth="0.2" />
      {/* Scratch marks */}
      <line x1="30" y1="3" x2="31" y2="52" stroke="#888" strokeWidth="0.04" opacity="0.1" />
      <line x1="60" y1="3" x2="59" y2="52" stroke="#888" strokeWidth="0.03" opacity="0.08" />
      {data.logo && <image href={data.logo} x="39" y="4" width="6" height="6" preserveAspectRatio="xMidYMid meet" opacity="0.3" />}
      <text x="45.5" y="14" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.2" fill="#e8d8c0" filter="url(#retro-film-shadow-b)">
        {data.companyJa}
      </text>
      <text x="45.5" y="18.5" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#c8a880">
        {data.companyEn}
      </text>
      <text x="45.5" y="22" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#a08860">
        {data.titleJa}
      </text>
      <line x1="20" y1="24.5" x2="71" y2="24.5" stroke="#444444" strokeWidth="0.15" />
      <text x="14" y="29" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1" fill="#887860" letterSpacing="0.15">Tel.</text>
      <text x="22" y="29" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#b8a888">{data.tel}</text>
      <text x="14" y="33" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1" fill="#887860" letterSpacing="0.15">Mail</text>
      <text x="22" y="33" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#b8a888">{data.email}</text>
      <text x="14" y="37" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1" fill="#887860" letterSpacing="0.15">Web</text>
      <text x="22" y="37" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#b8a888">{data.website}</text>
      <line x1="20" y1="39.5" x2="71" y2="39.5" stroke="#444444" strokeWidth="0.15" />
      <text x="45.5" y="44" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#887860">
        〒{data.zipCode}
      </text>
      <text x="45.5" y="48" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#887860">
        {data.addressJa}
      </text>
      {/* Frame number */}
      <text x="75" y="9" textAnchor="end" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.2" fill="#887860">
        24B
      </text>
    </g>
  ),
};

// ============================================================
// 9. JUKEBOX (箱) — Colorful jukebox arches, chrome accents
// ============================================================
const jukeboxTemplate: TemplateDefinition = {
  id: 'retro-jukebox',
  name: 'JUKEBOX',
  nameJa: '箱',
  category: 'retro',
  designer: 'Jukebox Studio',
  description: 'ジュークボックスが奏でる華やかな時代。',
  accentColor: '#C0392B',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="retro-jukebox-chrome" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ede6d4" />
          <stop offset="30%" stopColor="#e0d6c0" />
          <stop offset="70%" stopColor="#d8c8b0" />
          <stop offset="100%" stopColor="#c8b898" />
        </linearGradient>
        <linearGradient id="retro-jukebox-arch" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D44838" />
          <stop offset="100%" stopColor="#962d22" />
        </linearGradient>
        <linearGradient id="retro-jukebox-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e8c040" />
          <stop offset="50%" stopColor="#d4a020" />
          <stop offset="100%" stopColor="#c89018" />
        </linearGradient>
        <filter id="retro-jukebox-halftone">
          <feTurbulence type="fractalNoise" baseFrequency="1.0" numOctaves="2" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="retro-jukebox-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.15" dy="0.2" />
          <feFlood floodColor="#5a1a10" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#retro-jukebox-chrome)" />
      {/* Arch decoration at top */}
      <path d="M10,0 Q10,13 25,13 L66,13 Q81,13 81,0 Z" fill="url(#retro-jukebox-arch)" />
      <path d="M15,0 Q15,10 27,10 L64,10 Q76,10 76,0 Z" fill="url(#retro-jukebox-gold)" opacity="0.35" />
      {/* Chrome trim lines */}
      <line x1="5" y1="14.5" x2="86" y2="14.5" stroke="#a08868" strokeWidth="0.4" />
      <line x1="5" y1="15.5" x2="86" y2="15.5" stroke="#d8c8b0" strokeWidth="0.15" />
      {/* Bottom chrome trim */}
      <line x1="5" y1="48" x2="86" y2="48" stroke="#a08868" strokeWidth="0.4" />
      <line x1="5" y1="49" x2="86" y2="49" stroke="#d8c8b0" strokeWidth="0.15" />
      {/* Bubble lights in arch */}
      <circle cx="15" cy="5" r="1.5" fill="#ffcc00" opacity="0.45" />
      <circle cx="15" cy="5" r="2" fill="#ffcc00" opacity="0.1" />
      <circle cx="25" cy="3.5" r="1.2" fill="#ff6644" opacity="0.35" />
      <circle cx="25" cy="3.5" r="1.6" fill="#ff6644" opacity="0.08" />
      <circle cx="66" cy="3.5" r="1.2" fill="#44ccff" opacity="0.35" />
      <circle cx="66" cy="3.5" r="1.6" fill="#44ccff" opacity="0.08" />
      <circle cx="76" cy="5" r="1.5" fill="#ffcc00" opacity="0.45" />
      <circle cx="76" cy="5" r="2" fill="#ffcc00" opacity="0.1" />
      <circle cx="45.5" cy="2.5" r="1" fill="#ff4488" opacity="0.3" />
      {data.logo && <image href={data.logo} x="6" y="17" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.3" />}
      <text x="45.5" y="28" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="6" letterSpacing="0.5" fill="#C0392B" filter="url(#retro-jukebox-shadow)">
        {data.nameJa}
      </text>
      <text x="45.5" y="35" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="500" fontSize="2" letterSpacing="0.3" fill="#6a3a28">
        {data.nameEn.toUpperCase()}
      </text>
      <text x="45.5" y="41" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#8a6a50">
        {data.titleJa}
      </text>
      <text x="45.5" y="45.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#a08868">
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="retro-jukebox-halftone-b">
          <feTurbulence type="fractalNoise" baseFrequency="1.0" numOctaves="2" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="retro-jukebox-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#5a1a10" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#e8e0d0" />
      {/* Chrome borders */}
      <rect x="4" y="3" width="83" height="49" fill="none" stroke="#c8b898" strokeWidth="0.3" rx="2" />
      <rect x="6" y="5" width="79" height="45" fill="none" stroke="#d8c8b0" strokeWidth="0.15" rx="1" />
      {/* Small arch at top center */}
      <path d="M35,5 Q35,11 45.5,11 Q56,11 56,5" fill="none" stroke="#C0392B" strokeWidth="0.3" />
      {/* Side bubble lights */}
      <circle cx="8" cy="27.5" r="0.8" fill="#ffcc00" opacity="0.3" />
      <circle cx="83" cy="27.5" r="0.8" fill="#ffcc00" opacity="0.3" />
      {data.logo && <image href={data.logo} x="40" y="5" width="5" height="5" preserveAspectRatio="xMidYMid meet" opacity="0.25" />}
      <text x="45.5" y="15" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="2.2" fill="#C0392B" filter="url(#retro-jukebox-shadow-b)">
        {data.companyJa}
      </text>
      <text x="45.5" y="19.5" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#6a3a28">
        {data.companyEn}
      </text>
      <text x="45.5" y="23" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#8a6a50">
        {data.titleJa}
      </text>
      <line x1="20" y1="25.5" x2="71" y2="25.5" stroke="#c8b898" strokeWidth="0.2" />
      <text x="14" y="30" fontFamily="'Space Grotesk', sans-serif" fontWeight="500" fontSize="1" fill="#C0392B" letterSpacing="0.2">TEL</text>
      <text x="24" y="30" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fill="#6a5a48">{data.tel}</text>
      <text x="14" y="34" fontFamily="'Space Grotesk', sans-serif" fontWeight="500" fontSize="1" fill="#C0392B" letterSpacing="0.2">MAIL</text>
      <text x="24" y="34" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fill="#6a5a48">{data.email}</text>
      <text x="14" y="38" fontFamily="'Space Grotesk', sans-serif" fontWeight="500" fontSize="1" fill="#C0392B" letterSpacing="0.2">WEB</text>
      <text x="24" y="38" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fill="#6a5a48">{data.website}</text>
      <line x1="20" y1="40.5" x2="71" y2="40.5" stroke="#c8b898" strokeWidth="0.2" />
      <text x="45.5" y="45" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#8a7a60">
        〒{data.zipCode}
      </text>
      <text x="45.5" y="49" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#8a7a60">
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 10. POSTER (報) — Vintage poster typography, bold layered
// ============================================================
const posterTemplate: TemplateDefinition = {
  id: 'retro-poster',
  name: 'POSTER',
  nameJa: '報',
  category: 'retro',
  designer: 'Poster Studio',
  description: '古いポスターの重ね刷りが生む味わい。',
  accentColor: '#1B5E6B',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="retro-poster-paper" x1="0" y1="0" x2="0.2" y2="1">
          <stop offset="0%" stopColor="#f8ecd0" />
          <stop offset="100%" stopColor="#f0e0c0" />
        </linearGradient>
        <filter id="retro-poster-aged">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="retro-poster-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.2" dy="0.25" />
          <feFlood floodColor="#0a2830" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="retro-poster-overprint">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.15" />
          <feOffset dx="0.4" dy="0.4" />
          <feFlood floodColor="#C0392B" floodOpacity="0.12" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#retro-poster-paper)" />
      {/* Aged paper distress effects */}
      <circle cx="10" cy="8" r="15" fill="#e8d4b0" opacity="0.2" />
      <circle cx="80" cy="48" r="12" fill="#e8d4b0" opacity="0.15" />
      <circle cx="75" cy="5" r="8" fill="#e8d4b0" opacity="0.1" />
      {/* Bold poster border - double line */}
      <rect x="4" y="3" width="83" height="49" fill="none" stroke="#1B5E6B" strokeWidth="0.8" />
      <rect x="6" y="5" width="79" height="45" fill="none" stroke="#1B5E6B" strokeWidth="0.3" />
      {/* Stars decoration */}
      <polygon points="12,8 13,10.5 15.5,10.5 13.5,12 14.5,14.5 12,13 9.5,14.5 10.5,12 8.5,10.5 11,10.5" fill="#1B5E6B" opacity="0.12" />
      <polygon points="79,42 80,44.5 82.5,44.5 80.5,46 81.5,48.5 79,47 76.5,48.5 77.5,46 75.5,44.5 78,44.5" fill="#1B5E6B" opacity="0.12" />
      {/* Small corner ornaments */}
      <line x1="7" y1="6" x2="12" y2="6" stroke="#1B5E6B" strokeWidth="0.2" />
      <line x1="7" y1="6" x2="7" y2="11" stroke="#1B5E6B" strokeWidth="0.2" />
      <line x1="84" y1="44" x2="79" y2="44" stroke="#1B5E6B" strokeWidth="0.2" />
      <line x1="84" y1="44" x2="84" y2="49" stroke="#1B5E6B" strokeWidth="0.2" />
      {data.logo && <image href={data.logo} x="74" y="6" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.2" />}
      {/* Large bold name with overprint offset */}
      <text x="46" y="21.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="900" fontSize="7" letterSpacing="1" fill="#C0392B" opacity="0.12">
        {data.nameJa}
      </text>
      <text x="45.5" y="21" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="900" fontSize="7" letterSpacing="1" fill="#1B5E6B" filter="url(#retro-poster-shadow)">
        {data.nameJa}
      </text>
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="2.5" letterSpacing="0.8" fill="#1B5E6B">
        {data.nameEn.toUpperCase()}
      </text>
      <line x1="20" y1="34" x2="71" y2="34" stroke="#1B5E6B" strokeWidth="0.3" />
      <text x="45.5" y="40" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.6" fill="#4a7a88">
        {data.titleJa}
      </text>
      <text x="45.5" y="45" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#6a8a98">
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="retro-poster-aged-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="retro-poster-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.15" dy="0.2" />
          <feFlood floodColor="#0a2830" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#f5e6c8" />
      <rect x="4" y="3" width="83" height="49" fill="none" stroke="#1B5E6B" strokeWidth="0.6" />
      <rect x="6" y="5" width="79" height="45" fill="none" stroke="#1B5E6B" strokeWidth="0.2" />
      {/* Aged paper distress */}
      <circle cx="75" cy="10" r="10" fill="#e8d4b0" opacity="0.2" />
      <circle cx="15" cy="45" r="8" fill="#e8d4b0" opacity="0.15" />
      {data.logo && <image href={data.logo} x="40" y="4" width="5" height="5" preserveAspectRatio="xMidYMid meet" opacity="0.2" />}
      <text x="45.5" y="13" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="800" fontSize="2.5" letterSpacing="0.5" fill="#1B5E6B" filter="url(#retro-poster-shadow-b)">
        {data.companyJa}
      </text>
      <text x="45.5" y="18" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="600" fontSize="1.5" letterSpacing="0.4" fill="#4a7a88">
        {data.companyEn.toUpperCase()}
      </text>
      <text x="45.5" y="21.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#6a8a98">
        {data.titleJa}
      </text>
      <line x1="15" y1="24" x2="76" y2="24" stroke="#1B5E6B" strokeWidth="0.3" />
      <line x1="15" y1="25" x2="76" y2="25" stroke="#1B5E6B" strokeWidth="0.12" />
      <text x="14" y="29.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="600" fontSize="1" fill="#1B5E6B" letterSpacing="0.2">TEL</text>
      <text x="24" y="29.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fill="#3a5a68">{data.tel}</text>
      <text x="14" y="33.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="600" fontSize="1" fill="#1B5E6B" letterSpacing="0.2">MAIL</text>
      <text x="24" y="33.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fill="#3a5a68">{data.email}</text>
      <text x="14" y="37.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="600" fontSize="1" fill="#1B5E6B" letterSpacing="0.2">WEB</text>
      <text x="24" y="37.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fill="#3a5a68">{data.website}</text>
      <line x1="15" y1="40" x2="76" y2="40" stroke="#1B5E6B" strokeWidth="0.3" />
      <line x1="15" y1="41" x2="76" y2="41" stroke="#1B5E6B" strokeWidth="0.12" />
      <text x="45.5" y="45.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.2" fill="#4a7a88">
        〒{data.zipCode}
      </text>
      <text x="45.5" y="49" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.2" fill="#4a7a88">
        {data.addressJa}
      </text>
    </g>
  ),
};

export const retroTemplates: TemplateDefinition[] = [
  vinylTemplate,
  dinerTemplate,
  arcadeTemplate,
  polaroidTemplate,
  cassetteTemplate,
  neonretroTemplate,
  typewriterTemplate,
  filmTemplate,
  jukeboxTemplate,
  posterTemplate,
];
