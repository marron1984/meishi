import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. IMPACT (衝) — Maximum impact
// Full black background, oversized white text, heavy weight
// ============================================================
const impactTemplate: TemplateDefinition = {
  id: 'bold-impact',
  name: 'IMPACT',
  nameJa: '衝',
  category: 'bold',
  designer: 'David Carson',
  description: '衝撃の一撃。圧倒的な存在感で目を射抜く。',
  accentColor: '#ffffff',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="impact-f-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="impact-f-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.4" />
          <feOffset dx="0.15" dy="0.2" />
          <feFlood floodColor="#ffffff" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="impact-f-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0a0a0a" />
          <stop offset="40%" stopColor="#000000" />
          <stop offset="100%" stopColor="#0d0d0d" />
        </linearGradient>
        <radialGradient id="impact-f-spot" cx="30%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#1a1a1a" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#impact-f-bg)" />
      <rect width="91" height="55" fill="url(#impact-f-spot)" />
      {/* Noise texture overlay */}
      <rect width="91" height="55" fill="transparent" filter="url(#impact-f-grain)" opacity="0.04" />
      {/* Impact fracture lines */}
      <line x1="0" y1="12" x2="30" y2="12" stroke="#ffffff" strokeWidth="0.15" opacity="0.08" />
      <line x1="62" y1="43" x2="91" y2="43" stroke="#ffffff" strokeWidth="0.15" opacity="0.08" />
      <line x1="80" y1="0" x2="80" y2="15" stroke="#ffffff" strokeWidth="0.08" opacity="0.06" />
      {/* Oversized name */}
      <text x="8" y="28" fontFamily="'Noto Sans JP', sans-serif" fontWeight="900" fontSize="10" letterSpacing="-0.5" fill="#ffffff" filter="url(#impact-f-shadow)">
        {data.nameJa}
      </text>
      <text x="8" y="36" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="2.5" letterSpacing="0.5" fill="#ffffff" opacity="0.45">
        {data.nameEn.toUpperCase()}
      </text>
      {/* Title bar */}
      <rect x="8" y="40" width="30" height="3" fill="#ffffff" />
      <text x="9.5" y="42.2" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="1.5" fill="#000000">
        {data.titleJa}
      </text>
      {/* Corner decorative blocks */}
      <rect x="0" y="0" width="3" height="0.6" fill="#ffffff" opacity="0.15" />
      <rect x="0" y="0" width="0.6" height="3" fill="#ffffff" opacity="0.15" />
      <rect x="88" y="52" width="3" height="0.6" fill="#ffffff" opacity="0.1" />
      <rect x="90.4" y="52" width="0.6" height="3" fill="#ffffff" opacity="0.1" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="75" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="impact-b-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <linearGradient id="impact-b-bg" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0a0a0a" />
          <stop offset="100%" stopColor="#050505" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#impact-b-bg)" />
      <rect width="91" height="55" fill="transparent" filter="url(#impact-b-grain)" opacity="0.04" />
      {/* Bold company name */}
      <text x="8" y="15" fontFamily="'Noto Sans JP', sans-serif" fontWeight="900" fontSize="4" fill="#ffffff">
        {data.companyJa}
      </text>
      <text x="8" y="20" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="1.6" letterSpacing="0.3" fill="#ffffff" opacity="0.35">
        {data.companyEn.toUpperCase()}
      </text>
      {/* Thick divider */}
      <rect x="8" y="23" width="75" height="0.8" fill="#ffffff" />
      {/* Contact - bold */}
      <text x="8" y="30" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="1.6" fill="#ffffff">{data.tel}</text>
      <text x="8" y="34" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="1.6" fill="#ffffff">{data.email}</text>
      <text x="8" y="38" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="1.6" fill="#ffffff">{data.website}</text>
      <rect x="8" y="41" width="75" height="0.4" fill="#ffffff" opacity="0.25" />
      {/* Fracture decoration */}
      <line x1="60" y1="28" x2="83" y2="28" stroke="#ffffff" strokeWidth="0.06" opacity="0.08" />
      <line x1="70" y1="32" x2="83" y2="32" stroke="#ffffff" strokeWidth="0.06" opacity="0.06" />
      <text x="8" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="1.3" fill="#ffffff" opacity="0.4">
        〒{data.zipCode} {data.addressJa}
      </text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="75" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
};

// ============================================================
// 2. THUNDER (雷) — Electrifying diagonal energy
// ============================================================
const thunderTemplate: TemplateDefinition = {
  id: 'bold-thunder',
  name: 'THUNDER',
  nameJa: '雷',
  category: 'bold',
  designer: 'Neville Brody',
  description: '雷の閃光。斜めに裂ける電撃のエネルギー。',
  accentColor: '#FFD700',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="thunder-f-grain"><feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" /><feColorMatrix type="saturate" values="0" in="noise" result="gray" /><feBlend mode="multiply" in="SourceGraphic" in2="gray" /></filter>
        <filter id="thunder-f-glow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.6" /><feOffset dx="0" dy="0" /><feFlood floodColor="#FFD700" floodOpacity="0.15" /><feComposite operator="in" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        <linearGradient id="thunder-f-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1a1a1a" /><stop offset="50%" stopColor="#151510" /><stop offset="100%" stopColor="#121208" /></linearGradient>
        <linearGradient id="thunder-f-bolt" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#FFD700" /><stop offset="50%" stopColor="#FFA500" /><stop offset="100%" stopColor="#FFD700" /></linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#thunder-f-bg)" />
      <rect width="91" height="55" fill="transparent" filter="url(#thunder-f-grain)" opacity="0.03" />
      {/* Lightning bolt split */}
      <polygon points="50,0 55,22 45,22 52,55 48,55 41,22 51,22 46,0" fill="url(#thunder-f-bolt)" opacity="0.06" />
      {/* Bold diagonal line */}
      <line x1="48" y1="0" x2="43" y2="55" stroke="#FFD700" strokeWidth="0.4" opacity="0.7" />
      <line x1="48.8" y1="0" x2="43.8" y2="55" stroke="#FFD700" strokeWidth="0.08" opacity="0.25" />
      {/* Electric arc sparks */}
      <line x1="46" y1="15" x2="42" y2="17" stroke="#FFD700" strokeWidth="0.1" opacity="0.3" />
      <line x1="45" y1="35" x2="50" y2="37" stroke="#FFD700" strokeWidth="0.1" opacity="0.25" />
      <circle cx="47" cy="15" r="0.3" fill="#FFD700" opacity="0.4" />
      {/* Name on left */}
      <text x="8" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="900" fontSize="7" fill="#ffffff" filter="url(#thunder-f-glow)">{data.nameJa}</text>
      <text x="8" y="29" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="2.2" letterSpacing="0.3" fill="#FFD700">{data.nameEn.toUpperCase()}</text>
      {/* Title */}
      <text x="8" y="40" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="1.6" fill="#888888">{data.titleJa}</text>
      {/* Electric accent bar */}
      <rect x="8" y="44" width="15" height="0.5" fill="#FFD700" />
      <rect x="8" y="45" width="8" height="0.15" fill="#FFD700" opacity="0.3" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="thunder-b-grain"><feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" /><feColorMatrix type="saturate" values="0" in="noise" result="gray" /><feBlend mode="multiply" in="SourceGraphic" in2="gray" /></filter>
        <linearGradient id="thunder-b-bg" x1="100%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#1a1a1a" /><stop offset="100%" stopColor="#121208" /></linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#thunder-b-bg)" />
      <rect width="91" height="55" fill="transparent" filter="url(#thunder-b-grain)" opacity="0.03" />
      {/* Diagonal accent */}
      <line x1="60" y1="0" x2="55" y2="55" stroke="#FFD700" strokeWidth="0.2" opacity="0.25" />
      <line x1="60.6" y1="0" x2="55.6" y2="55" stroke="#FFD700" strokeWidth="0.06" opacity="0.12" />
      {/* Company */}
      <text x="8" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="800" fontSize="3" fill="#ffffff">{data.companyJa}</text>
      <text x="8" y="19" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1.5" fill="#FFD700" opacity="0.55">{data.companyEn.toUpperCase()}</text>
      <rect x="8" y="22" width="40" height="0.4" fill="#FFD700" />
      {/* Contact */}
      <text x="8" y="28" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1.5" fill="#cccccc">{data.tel}</text>
      <text x="8" y="32" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1.5" fill="#cccccc">{data.email}</text>
      <text x="8" y="36" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1.5" fill="#cccccc">{data.website}</text>
      {/* Spark decorations */}
      <circle cx="52" cy="28" r="0.2" fill="#FFD700" opacity="0.3" />
      <line x1="52" y1="28" x2="54" y2="27" stroke="#FFD700" strokeWidth="0.06" opacity="0.2" />
      <text x="8" y="46" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.2" fill="#666666">〒{data.zipCode} {data.addressJa}</text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="75" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
};

// ============================================================
// 3. TITAN (巨) — Titanic scale
// ============================================================
const titanTemplate: TemplateDefinition = {
  id: 'bold-titan',
  name: 'TITAN',
  nameJa: '巨',
  category: 'bold',
  designer: 'Massimo Vignelli',
  description: '巨人の文字。画面を超えるスケールの存在感。',
  accentColor: '#1a1a1a',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="titan-f-grain"><feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="3" stitchTiles="stitch" result="noise" /><feColorMatrix type="saturate" values="0" in="noise" result="gray" /><feBlend mode="multiply" in="SourceGraphic" in2="gray" /></filter>
        <filter id="titan-f-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.35" /><feOffset dx="0.1" dy="0.15" /><feFlood floodColor="#000" floodOpacity="0.1" /><feComposite operator="in" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        <linearGradient id="titan-f-bg" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#f2f2f2" /><stop offset="50%" stopColor="#ececec" /><stop offset="100%" stopColor="#e8e8e8" /></linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#titan-f-bg)" />
      <rect width="91" height="55" fill="transparent" filter="url(#titan-f-grain)" opacity="0.03" />
      {/* Enormous cropped character as background */}
      <text x="-5" y="55" fontFamily="'Noto Sans JP', sans-serif" fontWeight="900" fontSize="55" fill="#1a1a1a" opacity="0.04">巨</text>
      {/* Structural grid lines */}
      <line x1="8" y1="10" x2="8" y2="44" stroke="#1a1a1a" strokeWidth="0.06" opacity="0.08" />
      <line x1="83" y1="10" x2="83" y2="44" stroke="#1a1a1a" strokeWidth="0.06" opacity="0.08" />
      {/* Name */}
      <text x="8" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="900" fontSize="8" letterSpacing="-0.5" fill="#1a1a1a" filter="url(#titan-f-shadow)">{data.nameJa}</text>
      <text x="8" y="29" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="2.5" letterSpacing="0.3" fill="#1a1a1a" opacity="0.35">{data.nameEn.toUpperCase()}</text>
      {/* Thick bottom bar */}
      <rect x="0" y="48" width="91" height="7" fill="#1a1a1a" />
      <text x="8" y="53" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="1.8" fill="#f0f0f0">{data.titleJa}</text>
      {/* Tiny structural marks */}
      <rect x="8" y="10" width="2" height="0.3" fill="#1a1a1a" opacity="0.1" />
      <rect x="81" y="10" width="2" height="0.3" fill="#1a1a1a" opacity="0.1" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="75" y="49" width="7" height="5" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="titan-b-grain"><feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="3" stitchTiles="stitch" result="noise" /><feColorMatrix type="saturate" values="0" in="noise" result="gray" /><feBlend mode="multiply" in="SourceGraphic" in2="gray" /></filter>
        <linearGradient id="titan-b-bg" x1="0%" y1="100%" x2="0%" y2="0%"><stop offset="0%" stopColor="#f2f2f2" /><stop offset="100%" stopColor="#e8e8e8" /></linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#titan-b-bg)" />
      <rect width="91" height="55" fill="transparent" filter="url(#titan-b-grain)" opacity="0.03" />
      {/* Top heavy bar */}
      <rect x="0" y="0" width="91" height="7" fill="#1a1a1a" />
      <text x="8" y="5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="800" fontSize="2.8" fill="#f0f0f0">{data.companyJa}</text>
      <text x="8" y="14" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1.5" fill="#1a1a1a" opacity="0.35">{data.companyEn.toUpperCase()}</text>
      {/* Thick divider */}
      <rect x="8" y="17" width="75" height="0.6" fill="#1a1a1a" />
      {/* Contact bold */}
      <text x="8" y="24" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="1.6" fill="#1a1a1a">{data.tel}</text>
      <text x="8" y="28.5" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="1.6" fill="#1a1a1a">{data.email}</text>
      <text x="8" y="33" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="1.6" fill="#1a1a1a">{data.website}</text>
      <rect x="8" y="36" width="75" height="0.3" fill="#1a1a1a" opacity="0.2" />
      {/* Structural marks */}
      <line x1="83" y1="10" x2="83" y2="35" stroke="#1a1a1a" strokeWidth="0.06" opacity="0.08" />
      <text x="8" y="42" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="1.3" fill="#666666">〒{data.zipCode}</text>
      <text x="8" y="46" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="1.3" fill="#666666">{data.addressJa}</text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="75" y="1" width="6" height="5" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 4. SHOUT (叫) — Screaming typography
// ============================================================
const shoutTemplate: TemplateDefinition = {
  id: 'bold-shout',
  name: 'SHOUT',
  nameJa: '叫',
  category: 'bold',
  designer: 'Stefan Sagmeister',
  description: '絶叫のタイポグラフィ。赤と黒が叫ぶ衝動。',
  accentColor: '#CC0000',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="shout-f-grain"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" result="noise" /><feColorMatrix type="saturate" values="0" in="noise" result="gray" /><feBlend mode="multiply" in="SourceGraphic" in2="gray" /></filter>
        <filter id="shout-f-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.5" /><feOffset dx="0.2" dy="0.25" /><feFlood floodColor="#CC0000" floodOpacity="0.12" /><feComposite operator="in" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        <linearGradient id="shout-f-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#0a0a0a" /><stop offset="100%" stopColor="#0e0505" /></linearGradient>
        <linearGradient id="shout-f-red" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#CC0000" /><stop offset="100%" stopColor="#990000" /></linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#shout-f-bg)" />
      <rect width="91" height="55" fill="transparent" filter="url(#shout-f-grain)" opacity="0.04" />
      {/* Red accent blocks */}
      <rect x="0" y="0" width="4" height="55" fill="url(#shout-f-red)" />
      <rect x="0" y="0" width="91" height="3" fill="url(#shout-f-red)" />
      {/* Scratch marks */}
      <line x1="20" y1="5" x2="22" y2="7" stroke="#CC0000" strokeWidth="0.08" opacity="0.2" />
      <line x1="70" y1="48" x2="73" y2="50" stroke="#CC0000" strokeWidth="0.08" opacity="0.15" />
      <line x1="65" y1="10" x2="68" y2="8" stroke="#CC0000" strokeWidth="0.06" opacity="0.1" />
      {/* Name - large */}
      <text x="12" y="26" fontFamily="'Noto Sans JP', sans-serif" fontWeight="900" fontSize="8" fill="#CC0000" filter="url(#shout-f-shadow)">{data.nameJa}</text>
      <text x="12" y="33" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="2.5" letterSpacing="0.5" fill="#ffffff">{data.nameEn.toUpperCase()}</text>
      {/* Title in red bar */}
      <rect x="12" y="38" width="35" height="3.5" fill="#CC0000" />
      <text x="13.5" y="40.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="1.6" fill="#ffffff">{data.titleJa}</text>
      {/* Exclamation accent */}
      <text x="82" y="48" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="6" fill="#CC0000" opacity="0.12">!</text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="75" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="shout-b-grain"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" result="noise" /><feColorMatrix type="saturate" values="0" in="noise" result="gray" /><feBlend mode="multiply" in="SourceGraphic" in2="gray" /></filter>
        <linearGradient id="shout-b-bg" x1="100%" y1="100%" x2="0%" y2="0%"><stop offset="0%" stopColor="#0a0a0a" /><stop offset="100%" stopColor="#0e0505" /></linearGradient>
        <linearGradient id="shout-b-red" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#990000" /><stop offset="100%" stopColor="#CC0000" /></linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#shout-b-bg)" />
      <rect width="91" height="55" fill="transparent" filter="url(#shout-b-grain)" opacity="0.04" />
      {/* Red edge accents */}
      <rect x="87" y="0" width="4" height="55" fill="url(#shout-b-red)" />
      <rect x="0" y="52" width="91" height="3" fill="#CC0000" />
      {/* Company */}
      <text x="8" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="900" fontSize="3.5" fill="#CC0000">{data.companyJa}</text>
      <text x="8" y="19" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="1.5" fill="#666666">{data.companyEn.toUpperCase()}</text>
      <rect x="8" y="22" width="70" height="0.5" fill="#CC0000" />
      {/* Contact */}
      <text x="8" y="29" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="1.5" fill="#ffffff">{data.tel}</text>
      <text x="8" y="33.5" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="1.5" fill="#ffffff">{data.email}</text>
      <text x="8" y="38" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="1.5" fill="#ffffff">{data.website}</text>
      {/* Scratch accents */}
      <line x1="60" y1="27" x2="62" y2="29" stroke="#CC0000" strokeWidth="0.06" opacity="0.15" />
      <text x="8" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="1.2" fill="#666666">〒{data.zipCode} {data.addressJa}</text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="5" y="49" width="6" height="4" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
};

// ============================================================
// 5. HEAVY (重) — Heavy weight, centered mass
// ============================================================
const heavyTemplate: TemplateDefinition = {
  id: 'bold-heavy',
  name: 'HEAVY',
  nameJa: '重',
  category: 'bold',
  designer: 'Paula Scher',
  description: '重力のタイポ。文字の塊が中央に鎮座する重厚感。',
  accentColor: '#2C3E50',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="heavy-f-grain"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" /><feColorMatrix type="saturate" values="0" in="noise" result="gray" /><feBlend mode="multiply" in="SourceGraphic" in2="gray" /></filter>
        <filter id="heavy-f-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.5" /><feOffset dx="0.2" dy="0.3" /><feFlood floodColor="#1a252f" floodOpacity="0.2" /><feComposite operator="in" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        <linearGradient id="heavy-f-outer" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#ECF0F1" /><stop offset="100%" stopColor="#DDE4E6" /></linearGradient>
        <linearGradient id="heavy-f-block" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#2C3E50" /><stop offset="40%" stopColor="#34495E" /><stop offset="100%" stopColor="#2C3E50" /></linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#heavy-f-outer)" />
      <rect width="91" height="55" fill="transparent" filter="url(#heavy-f-grain)" opacity="0.03" />
      {/* Heavy center block */}
      <rect x="10" y="10" width="71" height="35" fill="url(#heavy-f-block)" rx="0.5" filter="url(#heavy-f-shadow)" />
      {/* Subtle inner border */}
      <rect x="11.5" y="11.5" width="68" height="32" fill="none" stroke="#ECF0F1" strokeWidth="0.08" opacity="0.1" />
      {/* Name inside block */}
      <text x="45.5" y="25" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="900" fontSize="7" fill="#ECF0F1">{data.nameJa}</text>
      <text x="45.5" y="32" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="2.2" letterSpacing="0.5" fill="#ECF0F1" opacity="0.55">{data.nameEn.toUpperCase()}</text>
      <text x="45.5" y="39" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="1.6" fill="#ECF0F1" opacity="0.35">{data.titleJa}</text>
      {/* Corner weight marks */}
      <rect x="10" y="10" width="3" height="0.4" fill="#95A5A6" opacity="0.15" />
      <rect x="10" y="10" width="0.4" height="3" fill="#95A5A6" opacity="0.15" />
      <rect x="78" y="44.6" width="3" height="0.4" fill="#95A5A6" opacity="0.15" />
      <rect x="80.6" y="42" width="0.4" height="3" fill="#95A5A6" opacity="0.15" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="75" y="2" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="heavy-b-grain"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" /><feColorMatrix type="saturate" values="0" in="noise" result="gray" /><feBlend mode="multiply" in="SourceGraphic" in2="gray" /></filter>
        <linearGradient id="heavy-b-outer" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stopColor="#ECF0F1" /><stop offset="100%" stopColor="#DDE4E6" /></linearGradient>
        <linearGradient id="heavy-b-bar" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#2C3E50" /><stop offset="100%" stopColor="#34495E" /></linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#heavy-b-outer)" />
      <rect width="91" height="55" fill="transparent" filter="url(#heavy-b-grain)" opacity="0.03" />
      {/* Top heavy bar */}
      <rect x="0" y="0" width="91" height="18" fill="url(#heavy-b-bar)" />
      <text x="45.5" y="10" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="900" fontSize="3.5" fill="#ECF0F1">{data.companyJa}</text>
      <text x="45.5" y="15" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1.4" fill="#ECF0F1" opacity="0.45">{data.companyEn.toUpperCase()}</text>
      {/* Contact below */}
      <text x="45.5" y="27" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="1.6" fill="#2C3E50">{data.tel}</text>
      <text x="45.5" y="31.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="1.6" fill="#2C3E50">{data.email}</text>
      <text x="45.5" y="36" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="1.6" fill="#2C3E50">{data.website}</text>
      <rect x="20" y="39" width="51" height="0.3" fill="#2C3E50" opacity="0.25" />
      {/* Weight mark decorations */}
      <circle cx="20" cy="43" r="0.3" fill="#2C3E50" opacity="0.12" />
      <circle cx="71" cy="43" r="0.3" fill="#2C3E50" opacity="0.12" />
      <text x="45.5" y="45" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="1.2" fill="#7F8C8D">〒{data.zipCode} {data.addressJa}</text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="75" y="1" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
};

// ============================================================
// 6. FORCE (力) — Force and power
// ============================================================
const forceTemplate: TemplateDefinition = {
  id: 'bold-force',
  name: 'FORCE',
  nameJa: '力',
  category: 'bold',
  designer: 'Aaron Siskind',
  description: '力の結晶。紺青と金が放つ不動の威厳。',
  accentColor: '#DAA520',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="force-f-grain"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" /><feColorMatrix type="saturate" values="0" in="noise" result="gray" /><feBlend mode="multiply" in="SourceGraphic" in2="gray" /></filter>
        <filter id="force-f-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.35" /><feOffset dx="0.1" dy="0.15" /><feFlood floodColor="#000" floodOpacity="0.15" /><feComposite operator="in" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        <linearGradient id="force-f-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#0A1628" /><stop offset="40%" stopColor="#0D1B30" /><stop offset="100%" stopColor="#081420" /></linearGradient>
        <linearGradient id="force-f-gold" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#DAA520" /><stop offset="50%" stopColor="#C4941C" /><stop offset="100%" stopColor="#DAA520" /></linearGradient>
        <radialGradient id="force-f-glow" cx="10%" cy="50%" r="40%"><stop offset="0%" stopColor="#DAA520" stopOpacity="0.04" /><stop offset="100%" stopColor="#DAA520" stopOpacity="0" /></radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#force-f-bg)" />
      <rect width="91" height="55" fill="url(#force-f-glow)" />
      <rect width="91" height="55" fill="transparent" filter="url(#force-f-grain)" opacity="0.03" />
      {/* Gold accent bar */}
      <rect x="0" y="0" width="3" height="55" fill="url(#force-f-gold)" />
      {/* Diagonal gold line */}
      <line x1="3" y1="55" x2="91" y2="40" stroke="#DAA520" strokeWidth="0.15" opacity="0.2" />
      <line x1="3" y1="50" x2="50" y2="38" stroke="#DAA520" strokeWidth="0.06" opacity="0.1" />
      {/* Name */}
      <text x="12" y="23" fontFamily="'Noto Sans JP', sans-serif" fontWeight="900" fontSize="7.5" fill="#ffffff" filter="url(#force-f-shadow)">{data.nameJa}</text>
      <text x="12" y="30" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="2.2" letterSpacing="0.4" fill="#DAA520">{data.nameEn.toUpperCase()}</text>
      {/* Title */}
      <text x="12" y="38" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="1.6" fill="#6B7B9B">{data.titleJa}</text>
      {/* Gold bottom accent */}
      <rect x="12" y="45" width="20" height="0.5" fill="#DAA520" />
      <rect x="12" y="46" width="10" height="0.15" fill="#DAA520" opacity="0.3" />
      {/* Decorative stars */}
      <circle cx="80" cy="10" r="0.4" fill="#DAA520" opacity="0.25" />
      <circle cx="76" cy="14" r="0.2" fill="#DAA520" opacity="0.15" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="75" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="force-b-grain"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" /><feColorMatrix type="saturate" values="0" in="noise" result="gray" /><feBlend mode="multiply" in="SourceGraphic" in2="gray" /></filter>
        <linearGradient id="force-b-bg" x1="100%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#0A1628" /><stop offset="100%" stopColor="#081420" /></linearGradient>
        <linearGradient id="force-b-gold" x1="0%" y1="100%" x2="0%" y2="0%"><stop offset="0%" stopColor="#DAA520" /><stop offset="100%" stopColor="#C4941C" /></linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#force-b-bg)" />
      <rect width="91" height="55" fill="transparent" filter="url(#force-b-grain)" opacity="0.03" />
      <rect x="88" y="0" width="3" height="55" fill="url(#force-b-gold)" />
      {/* Company */}
      <text x="82" y="14" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="800" fontSize="3" fill="#ffffff">{data.companyJa}</text>
      <text x="82" y="19" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1.4" fill="#DAA520" opacity="0.55">{data.companyEn.toUpperCase()}</text>
      <rect x="40" y="22" width="42" height="0.4" fill="#DAA520" />
      {/* Contact */}
      <text x="82" y="28" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1.5" fill="#8B9BBB">{data.tel}</text>
      <text x="82" y="32" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1.5" fill="#8B9BBB">{data.email}</text>
      <text x="82" y="36" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1.5" fill="#8B9BBB">{data.website}</text>
      {/* Diagonal accent */}
      <line x1="88" y1="0" x2="40" y2="15" stroke="#DAA520" strokeWidth="0.06" opacity="0.1" />
      <text x="82" y="46" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.2" fill="#4A5A7A">〒{data.zipCode} {data.addressJa}</text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="5" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
};

// ============================================================
// 7. GIANT (大) — Giant letterforms
// ============================================================
const giantTemplate: TemplateDefinition = {
  id: 'bold-giant',
  name: 'GIANT',
  nameJa: '大',
  category: 'bold',
  designer: 'Herb Lubalin',
  description: '大の一字。一文字が空間を支配する究極の大胆さ。',
  accentColor: '#E74C3C',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="giant-f-grain"><feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" stitchTiles="stitch" result="noise" /><feColorMatrix type="saturate" values="0" in="noise" result="gray" /><feBlend mode="multiply" in="SourceGraphic" in2="gray" /></filter>
        <filter id="giant-f-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.3" /><feOffset dx="0.1" dy="0.15" /><feFlood floodColor="#000" floodOpacity="0.08" /><feComposite operator="in" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        <linearGradient id="giant-f-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#ffffff" /><stop offset="100%" stopColor="#f8f8f8" /></linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#giant-f-bg)" />
      <rect width="91" height="55" fill="transparent" filter="url(#giant-f-grain)" opacity="0.025" />
      {/* Giant background character */}
      <text x="55" y="52" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="900" fontSize="60" fill="#E74C3C" opacity="0.05">大</text>
      {/* Name overlaid */}
      <text x="10" y="25" fontFamily="'Noto Sans JP', sans-serif" fontWeight="900" fontSize="8" fill="#1a1a1a" filter="url(#giant-f-shadow)">{data.nameJa}</text>
      <text x="10" y="32" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="2.2" letterSpacing="0.3" fill="#E74C3C">{data.nameEn.toUpperCase()}</text>
      {/* Red dot + title */}
      <circle cx="12" cy="39.5" r="1.2" fill="#E74C3C" />
      <circle cx="12" cy="39.5" r="1.8" fill="none" stroke="#E74C3C" strokeWidth="0.08" opacity="0.3" />
      <text x="16" y="41" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="1.6" fill="#666666">{data.titleJa}</text>
      {/* Decorative micro lines */}
      <line x1="10" y1="46" x2="25" y2="46" stroke="#E74C3C" strokeWidth="0.08" opacity="0.15" />
      <line x1="10" y1="47" x2="18" y2="47" stroke="#E74C3C" strokeWidth="0.06" opacity="0.1" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="75" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="giant-b-grain"><feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" stitchTiles="stitch" result="noise" /><feColorMatrix type="saturate" values="0" in="noise" result="gray" /><feBlend mode="multiply" in="SourceGraphic" in2="gray" /></filter>
        <linearGradient id="giant-b-bg" x1="100%" y1="100%" x2="0%" y2="0%"><stop offset="0%" stopColor="#ffffff" /><stop offset="100%" stopColor="#f8f8f8" /></linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#giant-b-bg)" />
      <rect width="91" height="55" fill="transparent" filter="url(#giant-b-grain)" opacity="0.025" />
      {/* Red top bar */}
      <rect x="0" y="0" width="91" height="2" fill="#E74C3C" />
      {/* Company */}
      <text x="10" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="900" fontSize="3" fill="#1a1a1a">{data.companyJa}</text>
      <text x="10" y="19" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1.5" fill="#E74C3C" opacity="0.55">{data.companyEn.toUpperCase()}</text>
      <rect x="10" y="22" width="71" height="0.5" fill="#1a1a1a" />
      {/* Contact */}
      <text x="10" y="28" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="1.5" fill="#333333">{data.tel}</text>
      <text x="10" y="32" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="1.5" fill="#333333">{data.email}</text>
      <text x="10" y="36" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="1.5" fill="#333333">{data.website}</text>
      <rect x="10" y="39" width="71" height="0.3" fill="#1a1a1a" opacity="0.15" />
      <text x="10" y="45" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="1.2" fill="#888888">〒{data.zipCode} {data.addressJa}</text>
      {/* Red bottom bar */}
      <rect x="0" y="53" width="91" height="2" fill="#E74C3C" />
      {/* Decorative dot pair */}
      <circle cx="79" cy="28" r="0.3" fill="#E74C3C" opacity="0.2" />
      <circle cx="79" cy="32" r="0.2" fill="#E74C3C" opacity="0.15" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="75" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
};

// ============================================================
// 8. CRUSH (砕) — Fragmented, broken grid
// ============================================================
const crushTemplate: TemplateDefinition = {
  id: 'bold-crush',
  name: 'CRUSH',
  nameJa: '砕',
  category: 'bold',
  designer: 'Wolfgang Weingart',
  description: '砕けるグリッド。崩壊したレイアウトの中の秩序。',
  accentColor: '#8E44AD',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="crush-f-grain"><feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" result="noise" /><feColorMatrix type="saturate" values="0" in="noise" result="gray" /><feBlend mode="multiply" in="SourceGraphic" in2="gray" /></filter>
        <filter id="crush-f-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.4" /><feOffset dx="0.15" dy="0.2" /><feFlood floodColor="#8E44AD" floodOpacity="0.1" /><feComposite operator="in" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        <linearGradient id="crush-f-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1a1a1a" /><stop offset="50%" stopColor="#1a171e" /><stop offset="100%" stopColor="#18151c" /></linearGradient>
        <linearGradient id="crush-f-purple" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#8E44AD" stopOpacity="0.12" /><stop offset="100%" stopColor="#6C3483" stopOpacity="0.06" /></linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#crush-f-bg)" />
      <rect width="91" height="55" fill="transparent" filter="url(#crush-f-grain)" opacity="0.04" />
      {/* Crushed overlapping blocks */}
      <rect x="5" y="3" width="35" height="20" fill="url(#crush-f-purple)" />
      <rect x="30" y="10" width="40" height="15" fill="#8E44AD" opacity="0.06" />
      <rect x="55" y="0" width="30" height="25" fill="#8E44AD" opacity="0.04" />
      {/* Bottom fragment */}
      <rect x="0" y="42" width="50" height="13" fill="#8E44AD" opacity="0.07" />
      {/* Fragment border lines */}
      <line x1="5" y1="3" x2="40" y2="3" stroke="#8E44AD" strokeWidth="0.08" opacity="0.2" />
      <line x1="30" y1="10" x2="30" y2="25" stroke="#8E44AD" strokeWidth="0.06" opacity="0.15" />
      {/* Name - bold layered shadow */}
      <text x="10" y="26" fontFamily="'Noto Sans JP', sans-serif" fontWeight="900" fontSize="8" fill="#8E44AD" opacity="0.25">{data.nameJa}</text>
      <text x="8" y="24" fontFamily="'Noto Sans JP', sans-serif" fontWeight="900" fontSize="8" fill="#ffffff" filter="url(#crush-f-shadow)">{data.nameJa}</text>
      <text x="8" y="32" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="2.2" letterSpacing="0.3" fill="#8E44AD">{data.nameEn.toUpperCase()}</text>
      <text x="8" y="40" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="1.6" fill="#777777">{data.titleJa}</text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="75" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="crush-b-grain"><feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" result="noise" /><feColorMatrix type="saturate" values="0" in="noise" result="gray" /><feBlend mode="multiply" in="SourceGraphic" in2="gray" /></filter>
        <linearGradient id="crush-b-bg" x1="100%" y1="100%" x2="0%" y2="0%"><stop offset="0%" stopColor="#1a1a1a" /><stop offset="100%" stopColor="#18151c" /></linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#crush-b-bg)" />
      <rect width="91" height="55" fill="transparent" filter="url(#crush-b-grain)" opacity="0.04" />
      {/* Fragments */}
      <rect x="60" y="0" width="31" height="12" fill="#8E44AD" opacity="0.08" />
      <rect x="0" y="45" width="40" height="10" fill="#8E44AD" opacity="0.06" />
      <line x1="60" y1="12" x2="91" y2="12" stroke="#8E44AD" strokeWidth="0.06" opacity="0.15" />
      {/* Company */}
      <text x="8" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="900" fontSize="3" fill="#ffffff">{data.companyJa}</text>
      <text x="8" y="19" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1.4" fill="#8E44AD" opacity="0.55">{data.companyEn.toUpperCase()}</text>
      <rect x="8" y="22" width="60" height="0.5" fill="#8E44AD" />
      {/* Contact */}
      <text x="8" y="28" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1.5" fill="#cccccc">{data.tel}</text>
      <text x="8" y="32" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1.5" fill="#cccccc">{data.email}</text>
      <text x="8" y="36" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1.5" fill="#cccccc">{data.website}</text>
      <text x="8" y="46" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.2" fill="#555555">〒{data.zipCode} {data.addressJa}</text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="75" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
};

// ============================================================
// 9. MEGA (超) — Super-sized everything
// ============================================================
const megaTemplate: TemplateDefinition = {
  id: 'bold-mega',
  name: 'MEGA',
  nameJa: '超',
  category: 'bold',
  designer: 'Milton Glaser',
  description: '超越のデザイン。すべてが最大で、すべてが主役。',
  accentColor: '#FF4500',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="mega-f-grain"><feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="3" stitchTiles="stitch" result="noise" /><feColorMatrix type="saturate" values="0" in="noise" result="gray" /><feBlend mode="multiply" in="SourceGraphic" in2="gray" /></filter>
        <filter id="mega-f-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.5" /><feOffset dx="0.2" dy="0.25" /><feFlood floodColor="#CC3700" floodOpacity="0.15" /><feComposite operator="in" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        <linearGradient id="mega-f-orange" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#FF4500" /><stop offset="50%" stopColor="#FF5722" /><stop offset="100%" stopColor="#FF4500" /></linearGradient>
        <radialGradient id="mega-f-glow" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#ffffff" stopOpacity="0.06" /><stop offset="100%" stopColor="#ffffff" stopOpacity="0" /></radialGradient>
      </defs>
      {/* Full bleed orange-red */}
      <rect width="91" height="55" fill="url(#mega-f-orange)" />
      <rect width="91" height="55" fill="transparent" filter="url(#mega-f-grain)" opacity="0.04" />
      {/* White block for text */}
      <rect x="6" y="6" width="79" height="43" fill="#ffffff" rx="0.3" filter="url(#mega-f-shadow)" />
      <rect x="6" y="6" width="79" height="43" fill="url(#mega-f-glow)" />
      {/* Mega name */}
      <text x="45.5" y="24" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="900" fontSize="9" fill="#FF4500">{data.nameJa}</text>
      <text x="45.5" y="32" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="2.8" letterSpacing="0.5" fill="#1a1a1a">{data.nameEn.toUpperCase()}</text>
      <text x="45.5" y="40" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="1.8" fill="#FF4500" opacity="0.55">{data.titleJa}</text>
      {/* Corner marks on white block */}
      <line x1="7" y1="7" x2="10" y2="7" stroke="#FF4500" strokeWidth="0.1" opacity="0.15" />
      <line x1="7" y1="7" x2="7" y2="10" stroke="#FF4500" strokeWidth="0.1" opacity="0.15" />
      <line x1="84" y1="48" x2="81" y2="48" stroke="#FF4500" strokeWidth="0.1" opacity="0.15" />
      <line x1="84" y1="48" x2="84" y2="45" stroke="#FF4500" strokeWidth="0.1" opacity="0.15" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="76" y="7" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="mega-b-grain"><feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="3" stitchTiles="stitch" result="noise" /><feColorMatrix type="saturate" values="0" in="noise" result="gray" /><feBlend mode="multiply" in="SourceGraphic" in2="gray" /></filter>
        <filter id="mega-b-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.4" /><feOffset dx="0.15" dy="0.2" /><feFlood floodColor="#CC3700" floodOpacity="0.12" /><feComposite operator="in" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        <linearGradient id="mega-b-orange" x1="100%" y1="100%" x2="0%" y2="0%"><stop offset="0%" stopColor="#FF4500" /><stop offset="100%" stopColor="#FF5722" /></linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#mega-b-orange)" />
      <rect width="91" height="55" fill="transparent" filter="url(#mega-b-grain)" opacity="0.04" />
      <rect x="6" y="6" width="79" height="43" fill="#ffffff" rx="0.3" filter="url(#mega-b-shadow)" />
      {/* Company */}
      <text x="45.5" y="15" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="900" fontSize="3" fill="#FF4500">{data.companyJa}</text>
      <text x="45.5" y="20" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="1.5" fill="#1a1a1a" opacity="0.45">{data.companyEn.toUpperCase()}</text>
      <rect x="20" y="23" width="51" height="0.5" fill="#FF4500" />
      {/* Contact */}
      <text x="45.5" y="29" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="1.5" fill="#1a1a1a">{data.tel}</text>
      <text x="45.5" y="33" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="1.5" fill="#1a1a1a">{data.email}</text>
      <text x="45.5" y="37" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="1.5" fill="#1a1a1a">{data.website}</text>
      <text x="45.5" y="44" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="1.2" fill="#FF4500" opacity="0.55">〒{data.zipCode} {data.addressJa}</text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="8" y="8" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
    </g>
  ),
};

// ============================================================
// 10. PRIME (首) — Prime, first, chief
// ============================================================
const primeTemplate: TemplateDefinition = {
  id: 'bold-prime',
  name: 'PRIME',
  nameJa: '首',
  category: 'bold',
  designer: 'Saul Bass',
  description: '首位の証。垂直の分断が生む圧倒的な構成力。',
  accentColor: '#1a1a1a',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="prime-f-grain"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" /><feColorMatrix type="saturate" values="0" in="noise" result="gray" /><feBlend mode="multiply" in="SourceGraphic" in2="gray" /></filter>
        <filter id="prime-f-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.3" /><feOffset dx="0.1" dy="0.12" /><feFlood floodColor="#000" floodOpacity="0.08" /><feComposite operator="in" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        <linearGradient id="prime-f-dark" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#1a1a1a" /><stop offset="100%" stopColor="#111111" /></linearGradient>
        <linearGradient id="prime-f-light" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#ffffff" /><stop offset="100%" stopColor="#f8f8f8" /></linearGradient>
      </defs>
      {/* Left half black, right half white */}
      <rect x="0" y="0" width="45" height="55" fill="url(#prime-f-dark)" />
      <rect x="45" y="0" width="46" height="55" fill="url(#prime-f-light)" />
      <rect width="91" height="55" fill="transparent" filter="url(#prime-f-grain)" opacity="0.03" />
      {/* Bold vertical divider */}
      <rect x="43.5" y="0" width="3" height="55" fill="#CC0000" />
      {/* Divider inner accent */}
      <line x1="44.2" y1="0" x2="44.2" y2="55" stroke="#ffffff" strokeWidth="0.06" opacity="0.1" />
      {/* Name on dark side */}
      <text x="6" y="24" fontFamily="'Noto Sans JP', sans-serif" fontWeight="900" fontSize="6" fill="#ffffff" filter="url(#prime-f-shadow)">{data.nameJa}</text>
      {/* English name on light side */}
      <text x="50" y="24" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="2.5" fill="#1a1a1a">{data.nameEn.toUpperCase()}</text>
      {/* Title spanning */}
      <text x="6" y="36" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="1.5" fill="#888888">{data.titleJa}</text>
      <text x="50" y="36" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="1.5" fill="#888888">{data.companyJa}</text>
      {/* Micro corner marks */}
      <rect x="2" y="2" width="2" height="0.3" fill="#ffffff" opacity="0.08" />
      <rect x="2" y="2" width="0.3" height="2" fill="#ffffff" opacity="0.08" />
      <rect x="83" y="50" width="2" height="0.3" fill="#1a1a1a" opacity="0.06" />
      <rect x="84.7" y="48" width="0.3" height="2" fill="#1a1a1a" opacity="0.06" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="50" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="prime-b-grain"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" /><feColorMatrix type="saturate" values="0" in="noise" result="gray" /><feBlend mode="multiply" in="SourceGraphic" in2="gray" /></filter>
        <linearGradient id="prime-b-dark" x1="0%" y1="100%" x2="0%" y2="0%"><stop offset="0%" stopColor="#1a1a1a" /><stop offset="100%" stopColor="#111111" /></linearGradient>
        <linearGradient id="prime-b-light" x1="0%" y1="100%" x2="0%" y2="0%"><stop offset="0%" stopColor="#ffffff" /><stop offset="100%" stopColor="#f8f8f8" /></linearGradient>
      </defs>
      <rect x="0" y="0" width="45" height="55" fill="url(#prime-b-dark)" />
      <rect x="45" y="0" width="46" height="55" fill="url(#prime-b-light)" />
      <rect width="91" height="55" fill="transparent" filter="url(#prime-b-grain)" opacity="0.03" />
      <rect x="43.5" y="0" width="3" height="55" fill="#CC0000" />
      <line x1="45.8" y1="0" x2="45.8" y2="55" stroke="#1a1a1a" strokeWidth="0.06" opacity="0.1" />
      {/* Company on dark side */}
      <text x="6" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="800" fontSize="2.5" fill="#ffffff">{data.companyJa}</text>
      <text x="6" y="19" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.2" fill="#666666">{data.companyEn}</text>
      {/* Contact on light side */}
      <text x="50" y="14" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="1.5" fill="#1a1a1a">{data.tel}</text>
      <text x="50" y="19" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="1.5" fill="#1a1a1a">{data.email}</text>
      <text x="50" y="24" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="1.5" fill="#1a1a1a">{data.website}</text>
      {/* Address on dark side */}
      <text x="6" y="36" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.1" fill="#555555">〒{data.zipCode}</text>
      <text x="6" y="40" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.1" fill="#555555">{data.addressJa}</text>
      {/* Structural dots */}
      <circle cx="6" cy="47" r="0.3" fill="#CC0000" opacity="0.3" />
      <circle cx="85" cy="47" r="0.3" fill="#CC0000" opacity="0.3" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="6" y="42" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
};

export const boldTemplates: TemplateDefinition[] = [
  impactTemplate,
  thunderTemplate,
  titanTemplate,
  shoutTemplate,
  heavyTemplate,
  forceTemplate,
  giantTemplate,
  crushTemplate,
  megaTemplate,
  primeTemplate,
];
