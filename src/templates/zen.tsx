import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. ENSO (円相) — Enso circle, zen brush stroke
// Bold brush circle, extreme whitespace, ink black on washi paper
// ============================================================
const ensoTemplate: TemplateDefinition = {
  id: 'zen-enso',
  name: 'ENSO',
  nameJa: '円相',
  category: 'zen',
  designer: 'Zen Brush',
  description: '一筆の円に全てを込める。悟りの形としての名刺。',
  accentColor: '#2A2A2A',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="zen-enso-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="5" stitchTiles="stitch" result="noise"/>
          <feColorMatrix type="saturate" values="0" in="noise" result="gray"/>
          <feBlend mode="multiply" in="SourceGraphic" in2="gray"/>
        </filter>
        <filter id="zen-enso-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3"/>
          <feOffset dx="0.1" dy="0.15"/>
          <feFlood floodColor="#000" floodOpacity="0.06"/>
          <feComposite operator="in"/>
          <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="zen-enso-brush">
          <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="3" result="brushNoise"/>
          <feDisplacementMap in="SourceGraphic" in2="brushNoise" scale="0.3" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
        <radialGradient id="zen-enso-warm" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#F8F3E8"/>
          <stop offset="100%" stopColor="#F0E8D8"/>
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#zen-enso-warm)" filter="url(#zen-enso-grain)"/>
      {/* Enso circle - brush stroke */}
      <path d="M45.5 6 Q64 6 64 20 Q64 34 45.5 34 Q27 34 27 20 Q27 6 43 6" fill="none" stroke="#2A2A2A" strokeWidth="1.5" strokeLinecap="round" opacity="0.75" filter="url(#zen-enso-brush)"/>
      {/* Gap in circle - zen imperfection */}
      <rect x="41" y="4" width="6" height="4" fill="url(#zen-enso-warm)"/>
      {/* Ink splatter dots */}
      <circle cx="30" cy="8" r="0.2" fill="#2A2A2A" opacity="0.15"/>
      <circle cx="62" cy="32" r="0.15" fill="#2A2A2A" opacity="0.1"/>
      <circle cx="25" cy="28" r="0.12" fill="#2A2A2A" opacity="0.08"/>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="5" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5"/>}
      {/* Name below enso */}
      <text x="45.5" y="42" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="5.5" letterSpacing="2" fill="#2A2A2A" filter="url(#zen-enso-shadow)">{data.nameJa}</text>
      <text x="45.5" y="48" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.8" letterSpacing="0.8" fill="#8A8A7A">{data.nameEn}</text>
      {/* Subtle bottom line */}
      <line x1="35" y1="51" x2="56" y2="51" stroke="#2A2A2A" strokeWidth="0.06" opacity="0.2"/>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="zen-enso-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="5" stitchTiles="stitch" result="noise"/>
          <feColorMatrix type="saturate" values="0" in="noise" result="gray"/>
          <feBlend mode="multiply" in="SourceGraphic" in2="gray"/>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#F8F3E8" filter="url(#zen-enso-b-grain)"/>
      {/* Small enso accent */}
      <path d="M79 6 Q85 6 85 10 Q85 14 79 14 Q73 14 73 10 Q73 6 78 6" fill="none" stroke="#2A2A2A" strokeWidth="0.5" strokeLinecap="round" opacity="0.2"/>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="74" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5"/>}
      {/* Company */}
      <text x="10" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" letterSpacing="0.8" fill="#2A2A2A">{data.companyJa}</text>
      <text x="10" y="16" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.4" fill="#8A8A7A">{data.companyEn}</text>
      <text x="10" y="19.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#5A5A4A">{data.titleJa}</text>
      <line x1="10" y1="22" x2="55" y2="22" stroke="#2A2A2A" strokeWidth="0.08" opacity="0.2"/>
      {/* Contact */}
      <text x="10" y="27" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5A5A4A">{data.tel}</text>
      <text x="10" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5A5A4A">{data.email}</text>
      <text x="10" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5A5A4A">{data.website}</text>
      <line x1="10" y1="38" x2="55" y2="38" stroke="#2A2A2A" strokeWidth="0.06" opacity="0.15"/>
      {/* Address */}
      <text x="10" y="42.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#8A8A7A">〒{data.zipCode}</text>
      <text x="10" y="46" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#8A8A7A">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 2. KARE (枯) — Karesansui, dry landscape garden
// Raked sand patterns, rock placement, mineral tones
// ============================================================
const kareTemplate: TemplateDefinition = {
  id: 'zen-kare',
  name: 'KARE',
  nameJa: '枯',
  category: 'zen',
  designer: 'Kare Garden',
  description: '枯山水の静寂。砂紋と石が織りなす無限の宇宙。',
  accentColor: '#7A7060',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="zen-kare-grain">
          <feTurbulence type="fractalNoise" baseFrequency="1.0" numOctaves="5" stitchTiles="stitch" result="noise"/>
          <feColorMatrix type="saturate" values="0" in="noise" result="gray"/>
          <feBlend mode="multiply" in="SourceGraphic" in2="gray"/>
        </filter>
        <filter id="zen-kare-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3"/>
          <feOffset dx="0.1" dy="0.15"/>
          <feFlood floodColor="#000" floodOpacity="0.06"/>
          <feComposite operator="in"/>
          <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <linearGradient id="zen-kare-sand" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8E0D0"/>
          <stop offset="100%" stopColor="#DDD5C5"/>
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#zen-kare-sand)" filter="url(#zen-kare-grain)"/>
      {/* Raked sand lines */}
      <line x1="0" y1="38" x2="91" y2="38" stroke="#C8C0B0" strokeWidth="0.08"/>
      <line x1="0" y1="40" x2="91" y2="40" stroke="#C8C0B0" strokeWidth="0.08"/>
      <line x1="0" y1="42" x2="91" y2="42" stroke="#C8C0B0" strokeWidth="0.08"/>
      <line x1="0" y1="44" x2="91" y2="44" stroke="#C8C0B0" strokeWidth="0.08"/>
      <line x1="0" y1="46" x2="91" y2="46" stroke="#C8C0B0" strokeWidth="0.08"/>
      {/* Rock elements */}
      <ellipse cx="75" cy="42" rx="4" ry="2" fill="#7A7060" opacity="0.25"/>
      <ellipse cx="73" cy="42" rx="2.5" ry="1.5" fill="#8A8070" opacity="0.3"/>
      {/* Sand ripples around rock */}
      <path d="M68 42 Q73 39 78 42 Q73 45 68 42" fill="none" stroke="#B8B0A0" strokeWidth="0.08"/>
      <path d="M66 42 Q73 38 80 42 Q73 46 66 42" fill="none" stroke="#B8B0A0" strokeWidth="0.06"/>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="75" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5"/>}
      {/* Name */}
      <text x="10" y="18" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="5.5" letterSpacing="1.5" fill="#3A3A2A" filter="url(#zen-kare-shadow)">{data.nameJa}</text>
      <text x="10" y="24" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.6" fill="#7A7060">{data.nameEn}</text>
      {/* Title */}
      <text x="10" y="30" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#7A7060">{data.titleJa}</text>
      {/* Company */}
      <text x="10" y="35" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#9A9080">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="zen-kare-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="1.0" numOctaves="5" stitchTiles="stitch" result="noise"/>
          <feColorMatrix type="saturate" values="0" in="noise" result="gray"/>
          <feBlend mode="multiply" in="SourceGraphic" in2="gray"/>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#E8E0D0" filter="url(#zen-kare-b-grain)"/>
      {/* Raked lines at top */}
      <line x1="0" y1="3" x2="91" y2="3" stroke="#C8C0B0" strokeWidth="0.08"/>
      <line x1="0" y1="5" x2="91" y2="5" stroke="#C8C0B0" strokeWidth="0.08"/>
      {/* Small rock */}
      <ellipse cx="82" cy="4" rx="2" ry="1" fill="#7A7060" opacity="0.2"/>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="74" y="8" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5"/>}
      {/* Company */}
      <text x="10" y="13" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" letterSpacing="0.6" fill="#3A3A2A">{data.companyJa}</text>
      <text x="10" y="17" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.3" fill="#7A7060">{data.companyEn}</text>
      <text x="10" y="20.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#7A7060">{data.titleJa}</text>
      <line x1="10" y1="23" x2="60" y2="23" stroke="#7A7060" strokeWidth="0.08" opacity="0.2"/>
      {/* Contact */}
      <text x="10" y="28" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5A5A4A">{data.tel}</text>
      <text x="10" y="32" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5A5A4A">{data.email}</text>
      <text x="10" y="36" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5A5A4A">{data.website}</text>
      <line x1="10" y1="39" x2="60" y2="39" stroke="#7A7060" strokeWidth="0.06" opacity="0.15"/>
      {/* Address */}
      <text x="10" y="43.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#9A9080">〒{data.zipCode}</text>
      <text x="10" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#9A9080">{data.addressJa}</text>
      {/* Bottom raked lines */}
      <line x1="0" y1="50" x2="91" y2="50" stroke="#C8C0B0" strokeWidth="0.08"/>
      <line x1="0" y1="52" x2="91" y2="52" stroke="#C8C0B0" strokeWidth="0.08"/>
    </g>
  ),
};

// ============================================================
// 3. SABI (寂) — Wabi-sabi patina, beautiful imperfection
// Aged paper, weathered edges, imperfect beauty
// ============================================================
const sabiTemplate: TemplateDefinition = {
  id: 'zen-sabi',
  name: 'SABI',
  nameJa: '寂',
  category: 'zen',
  designer: 'Sabi Workshop',
  description: '寂びの美学。時が刻んだ風合いの中に宿る静けさ。',
  accentColor: '#6A5040',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="zen-sabi-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.95" numOctaves="5" stitchTiles="stitch" result="noise"/>
          <feColorMatrix type="saturate" values="0" in="noise" result="gray"/>
          <feBlend mode="multiply" in="SourceGraphic" in2="gray"/>
        </filter>
        <filter id="zen-sabi-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3"/>
          <feOffset dx="0.1" dy="0.15"/>
          <feFlood floodColor="#000" floodOpacity="0.06"/>
          <feComposite operator="in"/>
          <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <radialGradient id="zen-sabi-age" cx="30%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#F5EDD8"/>
          <stop offset="60%" stopColor="#EDE5D0"/>
          <stop offset="100%" stopColor="#E0D8C0"/>
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#zen-sabi-age)" filter="url(#zen-sabi-grain)"/>
      {/* Weathered edge marks */}
      <path d="M0 0 Q2 1 1 3" stroke="#C8B8A0" strokeWidth="0.15" fill="none" opacity="0.3"/>
      <path d="M91 55 Q89 54 90 52" stroke="#C8B8A0" strokeWidth="0.15" fill="none" opacity="0.3"/>
      <path d="M0 55 Q1 53 3 54" stroke="#C8B8A0" strokeWidth="0.1" fill="none" opacity="0.2"/>
      {/* Patina spots */}
      <circle cx="78" cy="8" r="3" fill="#6A5040" opacity="0.03"/>
      <circle cx="15" cy="48" r="4" fill="#6A5040" opacity="0.02"/>
      <circle cx="60" cy="45" r="2" fill="#8A7060" opacity="0.02"/>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="74" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5"/>}
      {/* Name */}
      <text x="10" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="5.5" letterSpacing="1" fill="#3A2A1A" filter="url(#zen-sabi-shadow)">{data.nameJa}</text>
      <text x="10" y="26" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.5" fill="#6A5040">{data.nameEn}</text>
      {/* Imperfect line divider */}
      <path d="M10 29 Q25 28.5 40 29 Q55 29.5 70 29" fill="none" stroke="#6A5040" strokeWidth="0.1" opacity="0.3"/>
      {/* Title */}
      <text x="10" y="35" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#6A5040">{data.titleJa}</text>
      {/* Company */}
      <text x="10" y="43" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#8A7060">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="zen-sabi-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.95" numOctaves="5" stitchTiles="stitch" result="noise"/>
          <feColorMatrix type="saturate" values="0" in="noise" result="gray"/>
          <feBlend mode="multiply" in="SourceGraphic" in2="gray"/>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#EDE5D0" filter="url(#zen-sabi-b-grain)"/>
      {/* Patina spots */}
      <circle cx="82" cy="10" r="2" fill="#6A5040" opacity="0.03"/>
      <circle cx="8" cy="48" r="3" fill="#8A7060" opacity="0.02"/>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="74" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5"/>}
      {/* Company */}
      <text x="10" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" letterSpacing="0.6" fill="#3A2A1A">{data.companyJa}</text>
      <text x="10" y="16" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.3" fill="#6A5040">{data.companyEn}</text>
      <text x="10" y="19.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#6A5040">{data.titleJa}</text>
      <path d="M10 22 Q30 21.5 55 22" fill="none" stroke="#6A5040" strokeWidth="0.08" opacity="0.25"/>
      {/* Contact */}
      <text x="10" y="27" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5A4030">{data.tel}</text>
      <text x="10" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5A4030">{data.email}</text>
      <text x="10" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5A4030">{data.website}</text>
      <path d="M10 38 Q30 37.5 55 38" fill="none" stroke="#6A5040" strokeWidth="0.06" opacity="0.15"/>
      {/* Address */}
      <text x="10" y="42.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#8A7060">〒{data.zipCode}</text>
      <text x="10" y="46" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#8A7060">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 4. MU (無) — Nothingness, void, absence
// Maximum negative space, near-invisible text
// ============================================================
const muTemplate: TemplateDefinition = {
  id: 'zen-mu',
  name: 'MU',
  nameJa: '無',
  category: 'zen',
  designer: 'Void Studio',
  description: '無の境地。何もないことの中に全てを見出す。',
  accentColor: '#C0C0B8',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="zen-mu-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" result="noise"/>
          <feColorMatrix type="saturate" values="0" in="noise" result="gray"/>
          <feBlend mode="multiply" in="SourceGraphic" in2="gray"/>
        </filter>
        <filter id="zen-mu-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3"/>
          <feOffset dx="0.1" dy="0.15"/>
          <feFlood floodColor="#000" floodOpacity="0.04"/>
          <feComposite operator="in"/>
          <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <radialGradient id="zen-mu-void" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FAFAF5"/>
          <stop offset="100%" stopColor="#F5F5F0"/>
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#zen-mu-void)" filter="url(#zen-mu-grain)"/>
      {/* Ghost kanji - large, nearly invisible */}
      <text x="70" y="35" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="30" fill="#E8E8E0" opacity="0.25">無</text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="5" y="4" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.3"/>}
      {/* Name */}
      <text x="10" y="24" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="5.5" letterSpacing="2" fill="#8A8A80" filter="url(#zen-mu-shadow)">{data.nameJa}</text>
      <text x="10" y="30" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.8" letterSpacing="0.8" fill="#B0B0A8">{data.nameEn}</text>
      {/* Single thin line */}
      <line x1="10" y1="34" x2="35" y2="34" stroke="#C8C8C0" strokeWidth="0.06"/>
      {/* Title */}
      <text x="10" y="39" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#B0B0A8">{data.titleJa}</text>
      {/* Company */}
      <text x="10" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#C0C0B8">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="zen-mu-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" result="noise"/>
          <feColorMatrix type="saturate" values="0" in="noise" result="gray"/>
          <feBlend mode="multiply" in="SourceGraphic" in2="gray"/>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#FAFAF5" filter="url(#zen-mu-b-grain)"/>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="74" y="4" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.3"/>}
      {/* Company */}
      <text x="10" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.5" fill="#8A8A80">{data.companyJa}</text>
      <text x="10" y="16" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.4" letterSpacing="0.3" fill="#B0B0A8">{data.companyEn}</text>
      <text x="10" y="19.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#B0B0A8">{data.titleJa}</text>
      <line x1="10" y1="22" x2="45" y2="22" stroke="#D8D8D0" strokeWidth="0.06"/>
      {/* Contact */}
      <text x="10" y="27" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.4" fill="#9A9A90">{data.tel}</text>
      <text x="10" y="31" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.4" fill="#9A9A90">{data.email}</text>
      <text x="10" y="35" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.4" fill="#9A9A90">{data.website}</text>
      <line x1="10" y1="38" x2="45" y2="38" stroke="#D8D8D0" strokeWidth="0.04"/>
      {/* Address */}
      <text x="10" y="42.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#C0C0B8">〒{data.zipCode}</text>
      <text x="10" y="46" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#C0C0B8">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 5. STONE (石) — Zen stone, weight and permanence
// Rounded stone shape, heavy grounding, earthy palette
// ============================================================
const zenStoneTemplate: TemplateDefinition = {
  id: 'zen-stone',
  name: 'STONE',
  nameJa: '石',
  category: 'zen',
  designer: 'Stone Garden',
  description: '石の重みと永遠。揺るがぬ存在感を名刺に宿す。',
  accentColor: '#5A5A50',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="zen-stone-grain">
          <feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves="5" stitchTiles="stitch" result="noise"/>
          <feColorMatrix type="saturate" values="0" in="noise" result="gray"/>
          <feBlend mode="multiply" in="SourceGraphic" in2="gray"/>
        </filter>
        <filter id="zen-stone-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3"/>
          <feOffset dx="0.1" dy="0.15"/>
          <feFlood floodColor="#000" floodOpacity="0.08"/>
          <feComposite operator="in"/>
          <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <radialGradient id="zen-stone-surface" cx="40%" cy="35%" r="50%">
          <stop offset="0%" stopColor="#8A8A80"/>
          <stop offset="70%" stopColor="#6A6A60"/>
          <stop offset="100%" stopColor="#5A5A50"/>
        </radialGradient>
        <linearGradient id="zen-stone-bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F0EBE0"/>
          <stop offset="100%" stopColor="#E8E3D8"/>
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#zen-stone-bg)" filter="url(#zen-stone-grain)"/>
      {/* Stone shape in top right */}
      <ellipse cx="72" cy="16" rx="10" ry="7" fill="url(#zen-stone-surface)" opacity="0.2"/>
      <ellipse cx="72" cy="16" rx="10" ry="7" fill="none" stroke="#5A5A50" strokeWidth="0.08" opacity="0.15"/>
      {/* Smaller stone */}
      <ellipse cx="80" cy="22" rx="4" ry="3" fill="#7A7A70" opacity="0.1"/>
      {/* Pebble */}
      <circle cx="85" cy="25" r="1.2" fill="#8A8A80" opacity="0.08"/>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="5" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5"/>}
      {/* Name */}
      <text x="10" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="5.5" letterSpacing="0.8" fill="#3A3A30" filter="url(#zen-stone-shadow)">{data.nameJa}</text>
      <text x="10" y="28" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.4" fill="#6A6A60">{data.nameEn}</text>
      {/* Title */}
      <text x="10" y="36" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#6A6A60">{data.titleJa}</text>
      {/* Company */}
      <text x="10" y="45" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#8A8A80">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="zen-stone-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves="5" stitchTiles="stitch" result="noise"/>
          <feColorMatrix type="saturate" values="0" in="noise" result="gray"/>
          <feBlend mode="multiply" in="SourceGraphic" in2="gray"/>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#F0EBE0" filter="url(#zen-stone-b-grain)"/>
      {/* Small stone accent */}
      <ellipse cx="80" cy="8" rx="5" ry="3" fill="#6A6A60" opacity="0.08"/>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="74" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5"/>}
      {/* Company */}
      <text x="10" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" letterSpacing="0.5" fill="#3A3A30">{data.companyJa}</text>
      <text x="10" y="16" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.3" fill="#6A6A60">{data.companyEn}</text>
      <text x="10" y="19.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#6A6A60">{data.titleJa}</text>
      <line x1="10" y1="22" x2="55" y2="22" stroke="#8A8A80" strokeWidth="0.08" opacity="0.2"/>
      {/* Contact */}
      <text x="10" y="27" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5A5A50">{data.tel}</text>
      <text x="10" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5A5A50">{data.email}</text>
      <text x="10" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5A5A50">{data.website}</text>
      <line x1="10" y1="38" x2="55" y2="38" stroke="#8A8A80" strokeWidth="0.06" opacity="0.15"/>
      {/* Address */}
      <text x="10" y="42.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#8A8A80">〒{data.zipCode}</text>
      <text x="10" y="46" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#8A8A80">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 6. BREATH (息) — Breath, meditation, life force
// Gentle wave lines, breathing rhythm, calming tones
// ============================================================
const breathZTemplate: TemplateDefinition = {
  id: 'zen-breath',
  name: 'BREATH',
  nameJa: '息',
  category: 'zen',
  designer: 'Breath Studio',
  description: '一息の間。呼吸のリズムが生む静謐な空間。',
  accentColor: '#8A9A8A',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="zen-breath-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" result="noise"/>
          <feColorMatrix type="saturate" values="0" in="noise" result="gray"/>
          <feBlend mode="multiply" in="SourceGraphic" in2="gray"/>
        </filter>
        <filter id="zen-breath-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3"/>
          <feOffset dx="0.1" dy="0.15"/>
          <feFlood floodColor="#000" floodOpacity="0.05"/>
          <feComposite operator="in"/>
          <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <linearGradient id="zen-breath-mist" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5F8F5"/>
          <stop offset="50%" stopColor="#F0F3EE"/>
          <stop offset="100%" stopColor="#EBF0EB"/>
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#zen-breath-mist)" filter="url(#zen-breath-grain)"/>
      {/* Breathing wave lines */}
      <path d="M0 10 Q22.75 7 45.5 10 Q68.25 13 91 10" fill="none" stroke="#8A9A8A" strokeWidth="0.08" opacity="0.3"/>
      <path d="M0 14 Q22.75 11 45.5 14 Q68.25 17 91 14" fill="none" stroke="#8A9A8A" strokeWidth="0.06" opacity="0.2"/>
      <path d="M0 44 Q22.75 41 45.5 44 Q68.25 47 91 44" fill="none" stroke="#8A9A8A" strokeWidth="0.08" opacity="0.3"/>
      <path d="M0 48 Q22.75 45 45.5 48 Q68.25 51 91 48" fill="none" stroke="#8A9A8A" strokeWidth="0.06" opacity="0.2"/>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="74" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5"/>}
      {/* Name */}
      <text x="45.5" y="25" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="5.5" letterSpacing="1.5" fill="#3A4A3A" filter="url(#zen-breath-shadow)">{data.nameJa}</text>
      <text x="45.5" y="31" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.5" fill="#7A8A7A">{data.nameEn}</text>
      {/* Title */}
      <text x="45.5" y="37" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.7" fill="#7A8A7A">{data.titleJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="zen-breath-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" result="noise"/>
          <feColorMatrix type="saturate" values="0" in="noise" result="gray"/>
          <feBlend mode="multiply" in="SourceGraphic" in2="gray"/>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#F0F3EE" filter="url(#zen-breath-b-grain)"/>
      {/* Gentle wave */}
      <path d="M0 5 Q22.75 3 45.5 5 Q68.25 7 91 5" fill="none" stroke="#8A9A8A" strokeWidth="0.06" opacity="0.2"/>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="74" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5"/>}
      {/* Company */}
      <text x="10" y="13" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="2.2" letterSpacing="0.5" fill="#3A4A3A">{data.companyJa}</text>
      <text x="10" y="17" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.3" fill="#7A8A7A">{data.companyEn}</text>
      <text x="10" y="20.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#7A8A7A">{data.titleJa}</text>
      <line x1="10" y1="23" x2="55" y2="23" stroke="#8A9A8A" strokeWidth="0.06" opacity="0.2"/>
      {/* Contact */}
      <text x="10" y="28" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5A6A5A">{data.tel}</text>
      <text x="10" y="32" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5A6A5A">{data.email}</text>
      <text x="10" y="36" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5A6A5A">{data.website}</text>
      <line x1="10" y1="39" x2="55" y2="39" stroke="#8A9A8A" strokeWidth="0.04" opacity="0.15"/>
      {/* Address */}
      <text x="10" y="43.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#8A9A8A">〒{data.zipCode}</text>
      <text x="10" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#8A9A8A">{data.addressJa}</text>
      {/* Bottom wave */}
      <path d="M0 51 Q22.75 49 45.5 51 Q68.25 53 91 51" fill="none" stroke="#8A9A8A" strokeWidth="0.06" opacity="0.2"/>
    </g>
  ),
};

// ============================================================
// 7. WABI (侘) — Wabi simplicity, rustic elegance
// Minimal, earthy browns, raw unfinished feeling
// ============================================================
const wabiTemplate: TemplateDefinition = {
  id: 'zen-wabi',
  name: 'WABI',
  nameJa: '侘',
  category: 'zen',
  designer: 'Wabi House',
  description: '侘びの精神。素朴さの中に見出す深い美意識。',
  accentColor: '#8A6A50',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="zen-wabi-grain">
          <feTurbulence type="fractalNoise" baseFrequency="1.0" numOctaves="5" stitchTiles="stitch" result="noise"/>
          <feColorMatrix type="saturate" values="0" in="noise" result="gray"/>
          <feBlend mode="multiply" in="SourceGraphic" in2="gray"/>
        </filter>
        <filter id="zen-wabi-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3"/>
          <feOffset dx="0.1" dy="0.15"/>
          <feFlood floodColor="#000" floodOpacity="0.06"/>
          <feComposite operator="in"/>
          <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <linearGradient id="zen-wabi-earth" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F0E8D8"/>
          <stop offset="100%" stopColor="#E8DDD0"/>
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#zen-wabi-earth)" filter="url(#zen-wabi-grain)"/>
      {/* Raw edge mark - top */}
      <path d="M0 2 Q10 1.5 20 2.2 Q30 1.8 40 2 Q50 2.3 60 1.9 Q70 2.1 80 2 Q90 1.8 91 2" fill="none" stroke="#C8B8A0" strokeWidth="0.15" opacity="0.3"/>
      {/* Vertical accent - like a tea room post */}
      <rect x="82" y="8" width="0.8" height="39" fill="#8A6A50" opacity="0.15"/>
      {/* Small knot detail */}
      <circle cx="82.4" cy="20" r="0.6" fill="#8A6A50" opacity="0.12"/>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="5" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5"/>}
      {/* Name */}
      <text x="10" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="5.5" letterSpacing="1" fill="#3A2A1A" filter="url(#zen-wabi-shadow)">{data.nameJa}</text>
      <text x="10" y="28" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.4" fill="#8A6A50">{data.nameEn}</text>
      {/* Title */}
      <text x="10" y="35" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.7" fill="#8A6A50">{data.titleJa}</text>
      {/* Company */}
      <text x="10" y="43" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#A08070">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="zen-wabi-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="1.0" numOctaves="5" stitchTiles="stitch" result="noise"/>
          <feColorMatrix type="saturate" values="0" in="noise" result="gray"/>
          <feBlend mode="multiply" in="SourceGraphic" in2="gray"/>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#F0E8D8" filter="url(#zen-wabi-b-grain)"/>
      {/* Vertical post accent */}
      <rect x="8" y="8" width="0.8" height="39" fill="#8A6A50" opacity="0.12"/>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="74" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5"/>}
      {/* Company */}
      <text x="15" y="13" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="2.2" letterSpacing="0.5" fill="#3A2A1A">{data.companyJa}</text>
      <text x="15" y="17" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.3" fill="#8A6A50">{data.companyEn}</text>
      <text x="15" y="20.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#8A6A50">{data.titleJa}</text>
      <line x1="15" y1="23" x2="55" y2="23" stroke="#8A6A50" strokeWidth="0.06" opacity="0.2"/>
      {/* Contact */}
      <text x="15" y="28" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5A4030">{data.tel}</text>
      <text x="15" y="32" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5A4030">{data.email}</text>
      <text x="15" y="36" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5A4030">{data.website}</text>
      <line x1="15" y1="39" x2="55" y2="39" stroke="#8A6A50" strokeWidth="0.04" opacity="0.15"/>
      {/* Address */}
      <text x="15" y="43.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#A08070">〒{data.zipCode}</text>
      <text x="15" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#A08070">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 8. SAND (砂) — Sand, impermanence, flowing time
// Sand-colored base, grain texture, flowing particles
// ============================================================
const sandTemplate: TemplateDefinition = {
  id: 'zen-sand',
  name: 'SAND',
  nameJa: '砂',
  category: 'zen',
  designer: 'Sand Stream',
  description: '砂の流れ。一粒一粒が時を刻む無常の美。',
  accentColor: '#B0A080',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="zen-sand-grain">
          <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="6" stitchTiles="stitch" result="noise"/>
          <feColorMatrix type="saturate" values="0" in="noise" result="gray"/>
          <feBlend mode="multiply" in="SourceGraphic" in2="gray"/>
        </filter>
        <filter id="zen-sand-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3"/>
          <feOffset dx="0.1" dy="0.15"/>
          <feFlood floodColor="#000" floodOpacity="0.06"/>
          <feComposite operator="in"/>
          <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <linearGradient id="zen-sand-flow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8DEC8"/>
          <stop offset="50%" stopColor="#E0D5C0"/>
          <stop offset="100%" stopColor="#D8CEB8"/>
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#zen-sand-flow)" filter="url(#zen-sand-grain)"/>
      {/* Sand flow curves */}
      <path d="M0 45 Q20 42 40 45 Q60 48 80 44 Q88 42 91 43" fill="none" stroke="#C8B898" strokeWidth="0.1" opacity="0.4"/>
      <path d="M0 47 Q25 44 50 47 Q75 50 91 46" fill="none" stroke="#C8B898" strokeWidth="0.08" opacity="0.3"/>
      <path d="M0 49 Q30 46 60 49 Q80 51 91 48" fill="none" stroke="#C8B898" strokeWidth="0.06" opacity="0.2"/>
      {/* Scattered sand grains */}
      <circle cx="72" cy="10" r="0.15" fill="#A09070" opacity="0.2"/>
      <circle cx="78" cy="14" r="0.1" fill="#A09070" opacity="0.15"/>
      <circle cx="68" cy="8" r="0.12" fill="#A09070" opacity="0.12"/>
      <circle cx="82" cy="12" r="0.08" fill="#A09070" opacity="0.1"/>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="74" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5"/>}
      {/* Name */}
      <text x="10" y="18" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="5.5" letterSpacing="1" fill="#4A3A20" filter="url(#zen-sand-shadow)">{data.nameJa}</text>
      <text x="10" y="24" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.4" fill="#8A7A60">{data.nameEn}</text>
      {/* Title */}
      <text x="10" y="32" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#8A7A60">{data.titleJa}</text>
      {/* Company */}
      <text x="10" y="39" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#A09070">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="zen-sand-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="6" stitchTiles="stitch" result="noise"/>
          <feColorMatrix type="saturate" values="0" in="noise" result="gray"/>
          <feBlend mode="multiply" in="SourceGraphic" in2="gray"/>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#E0D5C0" filter="url(#zen-sand-b-grain)"/>
      {/* Sand flow at bottom */}
      <path d="M0 49 Q30 47 60 49 Q80 51 91 48" fill="none" stroke="#C8B898" strokeWidth="0.08" opacity="0.3"/>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="74" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5"/>}
      {/* Company */}
      <text x="10" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="2.2" letterSpacing="0.5" fill="#4A3A20">{data.companyJa}</text>
      <text x="10" y="16" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.3" fill="#8A7A60">{data.companyEn}</text>
      <text x="10" y="19.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#8A7A60">{data.titleJa}</text>
      <line x1="10" y1="22" x2="60" y2="22" stroke="#B0A080" strokeWidth="0.06" opacity="0.2"/>
      {/* Contact */}
      <text x="10" y="27" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#6A5A40">{data.tel}</text>
      <text x="10" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#6A5A40">{data.email}</text>
      <text x="10" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#6A5A40">{data.website}</text>
      <line x1="10" y1="38" x2="60" y2="38" stroke="#B0A080" strokeWidth="0.04" opacity="0.15"/>
      {/* Address */}
      <text x="10" y="42.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#A09070">〒{data.zipCode}</text>
      <text x="10" y="46" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#A09070">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 9. STILL (静) — Stillness, tranquility, calm water
// Horizontal lines like still water surface, deep calm
// ============================================================
const stillTemplate: TemplateDefinition = {
  id: 'zen-still',
  name: 'STILL',
  nameJa: '静',
  category: 'zen',
  designer: 'Still Waters',
  description: '静寂の水面。一切の波紋なき境地の美しさ。',
  accentColor: '#7A8A9A',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="zen-still-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise"/>
          <feColorMatrix type="saturate" values="0" in="noise" result="gray"/>
          <feBlend mode="multiply" in="SourceGraphic" in2="gray"/>
        </filter>
        <filter id="zen-still-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3"/>
          <feOffset dx="0.1" dy="0.15"/>
          <feFlood floodColor="#000" floodOpacity="0.05"/>
          <feComposite operator="in"/>
          <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <linearGradient id="zen-still-water" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F5F8FA"/>
          <stop offset="40%" stopColor="#EEF2F5"/>
          <stop offset="100%" stopColor="#E5EAF0"/>
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#zen-still-water)" filter="url(#zen-still-grain)"/>
      {/* Still water horizon lines */}
      <line x1="0" y1="35" x2="91" y2="35" stroke="#B0BAC8" strokeWidth="0.08" opacity="0.3"/>
      <line x1="0" y1="37" x2="91" y2="37" stroke="#B0BAC8" strokeWidth="0.06" opacity="0.2"/>
      <line x1="0" y1="39" x2="91" y2="39" stroke="#B0BAC8" strokeWidth="0.04" opacity="0.15"/>
      <line x1="0" y1="41" x2="91" y2="41" stroke="#B0BAC8" strokeWidth="0.03" opacity="0.1"/>
      <line x1="0" y1="43" x2="91" y2="43" stroke="#B0BAC8" strokeWidth="0.02" opacity="0.08"/>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="74" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5"/>}
      {/* Name */}
      <text x="45.5" y="18" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="5.5" letterSpacing="2" fill="#3A4A5A" filter="url(#zen-still-shadow)">{data.nameJa}</text>
      <text x="45.5" y="24" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.6" fill="#7A8A9A">{data.nameEn}</text>
      {/* Title */}
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.7" fill="#7A8A9A">{data.titleJa}</text>
      {/* Company */}
      <text x="45.5" y="50" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#9AAAB8">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="zen-still-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise"/>
          <feColorMatrix type="saturate" values="0" in="noise" result="gray"/>
          <feBlend mode="multiply" in="SourceGraphic" in2="gray"/>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#EEF2F5" filter="url(#zen-still-b-grain)"/>
      {/* Horizon lines */}
      <line x1="0" y1="4" x2="91" y2="4" stroke="#B0BAC8" strokeWidth="0.06" opacity="0.2"/>
      <line x1="0" y1="6" x2="91" y2="6" stroke="#B0BAC8" strokeWidth="0.04" opacity="0.15"/>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="74" y="8" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5"/>}
      {/* Company */}
      <text x="10" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="2.2" letterSpacing="0.5" fill="#3A4A5A">{data.companyJa}</text>
      <text x="10" y="18" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.3" fill="#7A8A9A">{data.companyEn}</text>
      <text x="10" y="21.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#7A8A9A">{data.titleJa}</text>
      <line x1="10" y1="24" x2="55" y2="24" stroke="#B0BAC8" strokeWidth="0.06" opacity="0.2"/>
      {/* Contact */}
      <text x="10" y="29" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5A6A7A">{data.tel}</text>
      <text x="10" y="33" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5A6A7A">{data.email}</text>
      <text x="10" y="37" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5A6A7A">{data.website}</text>
      <line x1="10" y1="40" x2="55" y2="40" stroke="#B0BAC8" strokeWidth="0.04" opacity="0.15"/>
      {/* Address */}
      <text x="10" y="44.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#9AAAB8">〒{data.zipCode}</text>
      <text x="10" y="48" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#9AAAB8">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 10. FLOW (流) — Flow, river, continuous movement
// Ink wash river, sumi-e inspired, flowing energy
// ============================================================
const flowZTemplate: TemplateDefinition = {
  id: 'zen-flow',
  name: 'FLOW',
  nameJa: '流',
  category: 'zen',
  designer: 'Ink Flow',
  description: '流れる墨。水墨画のように静かに、力強く流れる。',
  accentColor: '#4A4A40',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="zen-flow-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="5" stitchTiles="stitch" result="noise"/>
          <feColorMatrix type="saturate" values="0" in="noise" result="gray"/>
          <feBlend mode="multiply" in="SourceGraphic" in2="gray"/>
        </filter>
        <filter id="zen-flow-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3"/>
          <feOffset dx="0.1" dy="0.15"/>
          <feFlood floodColor="#000" floodOpacity="0.08"/>
          <feComposite operator="in"/>
          <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <linearGradient id="zen-flow-ink" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A4A40" stopOpacity="0.15"/>
          <stop offset="50%" stopColor="#3A3A30" stopOpacity="0.08"/>
          <stop offset="100%" stopColor="#4A4A40" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#F5F0E5" filter="url(#zen-flow-grain)"/>
      {/* Ink wash river */}
      <path d="M-5 8 Q15 5 35 10 Q55 15 75 8 Q88 4 96 7" fill="url(#zen-flow-ink)" stroke="none"/>
      <path d="M-5 8 Q15 5 35 10 Q55 15 75 8 Q88 4 96 7" fill="none" stroke="#4A4A40" strokeWidth="0.15" opacity="0.15"/>
      {/* Ink drip accents */}
      <circle cx="40" cy="12" r="0.4" fill="#4A4A40" opacity="0.08"/>
      <circle cx="55" cy="10" r="0.25" fill="#4A4A40" opacity="0.06"/>
      <circle cx="20" cy="8" r="0.3" fill="#4A4A40" opacity="0.05"/>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5"/>}
      {/* Name */}
      <text x="10" y="28" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="6" letterSpacing="1" fill="#2A2A20" filter="url(#zen-flow-shadow)">{data.nameJa}</text>
      <text x="10" y="34" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.5" fill="#6A6A60">{data.nameEn}</text>
      {/* Title */}
      <text x="10" y="41" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#6A6A60">{data.titleJa}</text>
      {/* Company */}
      <text x="10" y="49" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#8A8A80">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="zen-flow-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="5" stitchTiles="stitch" result="noise"/>
          <feColorMatrix type="saturate" values="0" in="noise" result="gray"/>
          <feBlend mode="multiply" in="SourceGraphic" in2="gray"/>
        </filter>
        <linearGradient id="zen-flow-b-ink" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A4A40" stopOpacity="0.08"/>
          <stop offset="100%" stopColor="#4A4A40" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#F5F0E5" filter="url(#zen-flow-b-grain)"/>
      {/* Subtle ink wash */}
      <path d="M-5 48 Q20 45 45 50 Q70 53 96 48" fill="url(#zen-flow-b-ink)" stroke="none"/>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="74" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5"/>}
      {/* Company */}
      <text x="10" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" letterSpacing="0.5" fill="#2A2A20">{data.companyJa}</text>
      <text x="10" y="16" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.3" fill="#6A6A60">{data.companyEn}</text>
      <text x="10" y="19.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#6A6A60">{data.titleJa}</text>
      <line x1="10" y1="22" x2="55" y2="22" stroke="#4A4A40" strokeWidth="0.08" opacity="0.15"/>
      {/* Contact */}
      <text x="10" y="27" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#4A4A40">{data.tel}</text>
      <text x="10" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#4A4A40">{data.email}</text>
      <text x="10" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#4A4A40">{data.website}</text>
      <line x1="10" y1="38" x2="55" y2="38" stroke="#4A4A40" strokeWidth="0.05" opacity="0.1"/>
      {/* Address */}
      <text x="10" y="42.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#8A8A80">〒{data.zipCode}</text>
      <text x="10" y="46" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#8A8A80">{data.addressJa}</text>
    </g>
  ),
};

export const zenTemplates: TemplateDefinition[] = [
  ensoTemplate,
  kareTemplate,
  sabiTemplate,
  muTemplate,
  zenStoneTemplate,
  breathZTemplate,
  wabiTemplate,
  sandTemplate,
  stillTemplate,
  flowZTemplate,
];
