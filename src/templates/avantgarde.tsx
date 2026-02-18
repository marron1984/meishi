import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. NEO (新) — Sagmeister & Walsh: Gradient purple-to-pink with split layout
// ============================================================
const neoTemplate: TemplateDefinition = {
  id: 'neo',
  name: 'NEO',
  nameJa: '新',
  category: 'avantgarde',
  designer: 'Sagmeister & Walsh',
  description: '新しい感覚の二面性。光と色彩のグラデーションが共存する。',
  accentColor: '#6C2BD9',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="neo-avantgarde-paper-front" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" seed="21" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="multiply" />
        </filter>
        <filter id="neo-avantgarde-shadow-front">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.8" result="blur" />
          <feOffset dx="0.3" dy="0.4" result="offset" />
          <feFlood floodColor="#3a1080" floodOpacity="0.15" result="color" />
          <feComposite in="color" in2="offset" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="neo-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6C2BD9" />
          <stop offset="100%" stopColor="#FF6B9D" />
        </linearGradient>
        <linearGradient id="neo-subtle" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FAFAFA" />
          <stop offset="100%" stopColor="#F0EEF5" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#neo-subtle)" filter="url(#neo-avantgarde-paper-front)" />
      <rect x="52" y="0" width="39" height="55" fill="url(#neo-grad)" />
      {/* Decorative circle bleeding across the divide */}
      <circle cx="52" cy="27.5" r="10" fill="none" stroke="#6C2BD9" strokeWidth="0.15" opacity="0.2" />
      <circle cx="52" cy="27.5" r="6" fill="none" stroke="#FF6B9D" strokeWidth="0.12" opacity="0.15" />
      {/* Subtle grid dots on white side */}
      <circle cx="8" cy="5" r="0.3" fill="#6C2BD9" opacity="0.1" />
      <circle cx="12" cy="5" r="0.2" fill="#6C2BD9" opacity="0.08" />
      {/* Name block with shadow */}
      <g filter="url(#neo-avantgarde-shadow-front)">
        <text
          x="8"
          y="17"
          fontFamily="'Noto Sans JP', sans-serif"
          fontWeight="700"
          fontSize="6"
          fill="#1a1a1a"
        >
          {data.nameJa}
        </text>
      </g>
      <text
        x="8"
        y="23"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2.2"
        letterSpacing="0.15"
        fill="#6C2BD9"
      >
        {data.nameEn}
      </text>
      <text
        x="8"
        y="28"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="#999999"
      >
        {data.titleJa}
      </text>
      {/* Separator */}
      <line x1="8" y1="32" x2="42" y2="32" stroke="#e0dce8" strokeWidth="0.12" />
      {/* Contact info */}
      <text x="8" y="36" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#777777">
        {data.tel}
      </text>
      <text x="8" y="40" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#777777">
        {data.email}
      </text>
      <text x="8" y="44" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#777777">
        {data.website}
      </text>
      <text x="8" y="49" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#aaaaaa">
        〒{data.zipCode}
      </text>
      {/* Vertical name on gradient panel */}
      <text
        x="72"
        y="45"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="2.5"
        fill="rgba(255,255,255,0.85)"
        transform="rotate(-90, 72, 27.5)"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Decorative diamond on gradient panel */}
      <polygon points="60,8 62,10 60,12 58,10" fill="rgba(255,255,255,0.15)" />
      {data.logo && <image href={data.logo} x="36" y="43" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="neo-avantgarde-paper-back" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" seed="22" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="multiply" />
        </filter>
        <filter id="neo-avantgarde-shadow-back">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1.0" result="blur" />
          <feOffset dx="0.4" dy="0.5" result="offset" />
          <feFlood floodColor="#3a1080" floodOpacity="0.25" result="color" />
          <feComposite in="color" in2="offset" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="neo-grad-back" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6C2BD9" />
          <stop offset="50%" stopColor="#FF6B9D" />
          <stop offset="100%" stopColor="#FFC247" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#neo-grad-back)" filter="url(#neo-avantgarde-paper-back)" />
      {/* Decorative translucent circles */}
      <circle cx="75" cy="12" r="18" fill="rgba(255,255,255,0.06)" />
      <circle cx="20" cy="45" r="12" fill="rgba(255,255,255,0.05)" />
      <circle cx="50" cy="30" r="25" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.15" />
      {/* Diamond ornament */}
      <polygon points="45.5,6 47.5,8 45.5,10 43.5,8" fill="rgba(255,255,255,0.15)" />
      {/* Company */}
      <g filter="url(#neo-avantgarde-shadow-back)">
        <text
          x="45.5"
          y="22"
          textAnchor="middle"
          fontFamily="'Inter', sans-serif"
          fontWeight="700"
          fontSize="5"
          letterSpacing="0.5"
          fill="#ffffff"
        >
          {data.companyEn.toUpperCase()}
        </text>
      </g>
      <text
        x="45.5"
        y="29"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="rgba(255,255,255,0.7)"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="34"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="rgba(255,255,255,0.55)"
      >
        {data.titleJa}
      </text>
      {/* Separator */}
      <line x1="25" y1="37" x2="66" y2="37" stroke="rgba(255,255,255,0.2)" strokeWidth="0.12" />
      {/* Contact */}
      <text x="45.5" y="41" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="rgba(255,255,255,0.5)">
        {data.tel}  |  {data.email}
      </text>
      <text x="45.5" y="44.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="rgba(255,255,255,0.5)">
        {data.website}
      </text>
      <text x="45.5" y="48" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(255,255,255,0.4)">
        〒{data.zipCode} {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="41.5" y="10" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 2. GLITCH (乱) — David Carson: Offset/duplicated text elements
// ============================================================
const glitchTemplate: TemplateDefinition = {
  id: 'glitch',
  name: 'GLITCH',
  nameJa: '乱',
  category: 'avantgarde',
  designer: 'David Carson',
  description: 'ノイズとずれの美学。秩序を破壊し再構築する。',
  accentColor: '#FF0040',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="glitch-avantgarde-paper-front" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="2" seed="23" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="multiply" />
        </filter>
        <filter id="glitch-avantgarde-shadow-front">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.6" result="blur" />
          <feOffset dx="0.5" dy="0.3" result="offset" />
          <feFlood floodColor="#FF0040" floodOpacity="0.2" result="color" />
          <feComposite in="color" in2="offset" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="glitch-scan" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0A0A0A" />
          <stop offset="50%" stopColor="#0F0F0F" />
          <stop offset="100%" stopColor="#0A0A0A" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#glitch-scan)" filter="url(#glitch-avantgarde-paper-front)" />
      {/* Glitch offset strips */}
      <rect x="0" y="20" width="91" height="0.4" fill="#FF0040" opacity="0.5" />
      <rect x="0" y="35" width="91" height="0.3" fill="#00FFFF" opacity="0.35" />
      <rect x="15" y="12" width="50" height="0.2" fill="#FF0040" opacity="0.25" />
      {/* Scan line pattern */}
      <rect x="30" y="8" width="0.15" height="40" fill="#FF0040" opacity="0.08" />
      <rect x="65" y="3" width="0.15" height="48" fill="#00FFFF" opacity="0.06" />
      {/* Name - glitch duplicated (cyan shadow offset) */}
      <text
        x="10.4"
        y="22.4"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="7"
        fill="#00FFFF"
        opacity="0.5"
      >
        {data.nameJa}
      </text>
      <g filter="url(#glitch-avantgarde-shadow-front)">
        <text
          x="10"
          y="22"
          fontFamily="'Noto Sans JP', sans-serif"
          fontWeight="900"
          fontSize="7"
          fill="#ffffff"
        >
          {data.nameJa}
        </text>
      </g>
      {/* English name - glitch offset (red shadow) */}
      <text
        x="10.35"
        y="28.35"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="2.5"
        letterSpacing="0.2"
        fill="#FF0040"
        opacity="0.6"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="10"
        y="28"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="2.5"
        letterSpacing="0.2"
        fill="#ffffff"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Title - glitched */}
      <text
        x="10.3"
        y="33.3"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="#FF0040"
        opacity="0.4"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="33"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="rgba(255,255,255,0.7)"
      >
        {data.titleJa}
      </text>
      {/* Contact info */}
      <text x="10" y="40" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="rgba(255,255,255,0.5)">
        T. {data.tel}
      </text>
      <text x="10" y="44" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="rgba(255,255,255,0.5)">
        {data.email}
      </text>
      <text x="10" y="48" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="rgba(255,255,255,0.5)">
        {data.website}
      </text>
      {data.logo && <image href={data.logo} x="75" y="43" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="glitch-avantgarde-paper-back" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="1.0" numOctaves="2" seed="24" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="multiply" />
        </filter>
        <filter id="glitch-avantgarde-shadow-back">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.8" result="blur" />
          <feOffset dx="0.6" dy="0.4" result="offset" />
          <feFlood floodColor="#00FFFF" floodOpacity="0.2" result="color" />
          <feComposite in="color" in2="offset" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="glitch-back-scan" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0A0A0A" />
          <stop offset="100%" stopColor="#060606" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#glitch-back-scan)" filter="url(#glitch-avantgarde-paper-back)" />
      {/* Horizontal glitch lines */}
      <rect x="0" y="8" width="60" height="0.3" fill="#FF0040" opacity="0.4" />
      <rect x="20" y="25" width="71" height="0.2" fill="#00FFFF" opacity="0.25" />
      <rect x="0" y="42" width="45" height="0.3" fill="#FF0040" opacity="0.3" />
      {/* Vertical scan lines */}
      <rect x="20" y="0" width="0.15" height="55" fill="#FF0040" opacity="0.05" />
      <rect x="70" y="0" width="0.15" height="55" fill="#00FFFF" opacity="0.04" />
      {/* Company - glitch duplicated */}
      <text
        x="45.8"
        y="21.4"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="800"
        fontSize="4.5"
        letterSpacing="0.5"
        fill="#00FFFF"
        opacity="0.4"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <g filter="url(#glitch-avantgarde-shadow-back)">
        <text
          x="45.5"
          y="21"
          textAnchor="middle"
          fontFamily="'Inter', sans-serif"
          fontWeight="800"
          fontSize="4.5"
          letterSpacing="0.5"
          fill="#ffffff"
        >
          {data.companyEn.toUpperCase()}
        </text>
      </g>
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="rgba(255,255,255,0.5)"
      >
        {data.companyJa}
      </text>
      <text x="45.5" y="33" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="rgba(255,255,255,0.4)">
        {data.titleJa}
      </text>
      {/* Separator */}
      <line x1="20" y1="36" x2="71" y2="36" stroke="#FF0040" strokeWidth="0.08" opacity="0.5" />
      {/* Contact */}
      <text x="45.5" y="39.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(255,255,255,0.4)">
        {data.tel}  |  {data.email}
      </text>
      <text x="45.5" y="43" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(255,255,255,0.4)">
        {data.website}
      </text>
      <text x="45.5" y="46.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(255,255,255,0.3)">
        〒{data.zipCode} {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="41.5" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 3. NOISE (粒) — Experimental Jetset: Grain-like dot pattern
// ============================================================
const noiseTemplate: TemplateDefinition = {
  id: 'noise',
  name: 'NOISE',
  nameJa: '粒',
  category: 'avantgarde',
  designer: 'Experimental Jetset',
  description: '粒子のざらつき。印刷の原点に立ち返る生々しさ。',
  accentColor: '#222222',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="noise-avantgarde-paper-front" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="1.5" numOctaves="5" seed="25" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="multiply" />
        </filter>
        <filter id="noise-avantgarde-shadow-front">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.5" result="blur" />
          <feOffset dx="0.15" dy="0.2" result="offset" />
          <feFlood floodColor="#000000" floodOpacity="0.1" result="color" />
          <feComposite in="color" in2="offset" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <pattern id="noise-dots" x="0" y="0" width="1.5" height="1.5" patternUnits="userSpaceOnUse">
          <circle cx="0.4" cy="0.4" r="0.25" fill="#222222" opacity="0.15" />
          <circle cx="1.1" cy="1.1" r="0.18" fill="#222222" opacity="0.1" />
        </pattern>
        <linearGradient id="noise-edge" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#222222" />
          <stop offset="100%" stopColor="#555555" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#F5F2ED" filter="url(#noise-avantgarde-paper-front)" />
      {/* Grain dot pattern strip */}
      <rect x="0" y="17" width="91" height="11" fill="url(#noise-dots)" />
      <rect x="0" y="17" width="91" height="0.15" fill="#222222" />
      <rect x="0" y="28" width="91" height="0.15" fill="#222222" />
      {/* Corner crop marks */}
      <line x1="3" y1="3" x2="7" y2="3" stroke="#cccccc" strokeWidth="0.1" />
      <line x1="3" y1="3" x2="3" y2="7" stroke="#cccccc" strokeWidth="0.1" />
      <line x1="84" y1="52" x2="88" y2="52" stroke="#cccccc" strokeWidth="0.1" />
      <line x1="88" y1="48" x2="88" y2="52" stroke="#cccccc" strokeWidth="0.1" />
      {/* Name */}
      <g filter="url(#noise-avantgarde-shadow-front)">
        <text
          x="8"
          y="14"
          fontFamily="'Noto Sans JP', sans-serif"
          fontWeight="700"
          fontSize="5.5"
          fill="#222222"
        >
          {data.nameJa}
        </text>
      </g>
      <text
        x="8"
        y="25"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="2.5"
        letterSpacing="0.3"
        fill="#222222"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Contact */}
      <text x="8" y="34" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.6" fill="#555555">
        {data.titleJa}
      </text>
      <text x="8" y="39" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#888888">
        T {data.tel}
      </text>
      <text x="8" y="43" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#888888">
        E {data.email}
      </text>
      <text x="8" y="47" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#888888">
        W {data.website}
      </text>
      <text x="8" y="51" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#aaaaaa">
        〒{data.zipCode} {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="76" y="43" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="noise-avantgarde-paper-back" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="1.3" numOctaves="5" seed="26" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="multiply" />
        </filter>
        <filter id="noise-avantgarde-shadow-back">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.6" result="blur" />
          <feOffset dx="0.2" dy="0.25" result="offset" />
          <feFlood floodColor="#000000" floodOpacity="0.12" result="color" />
          <feComposite in="color" in2="offset" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <pattern id="noise-dots-back" x="0" y="0" width="1.2" height="1.2" patternUnits="userSpaceOnUse">
          <circle cx="0.35" cy="0.35" r="0.2" fill="#222222" opacity="0.12" />
          <circle cx="0.9" cy="0.85" r="0.15" fill="#222222" opacity="0.08" />
          <circle cx="0.2" cy="0.95" r="0.12" fill="#222222" opacity="0.06" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="#F5F2ED" filter="url(#noise-avantgarde-paper-back)" />
      {/* Dense grain area */}
      <rect x="0" y="0" width="91" height="55" fill="url(#noise-dots-back)" />
      <rect x="0" y="20" width="91" height="0.15" fill="#222222" />
      <rect x="0" y="33" width="91" height="0.15" fill="#222222" />
      {/* Crop marks */}
      <line x1="3" y1="3" x2="7" y2="3" stroke="#aaaaaa" strokeWidth="0.1" />
      <line x1="3" y1="3" x2="3" y2="7" stroke="#aaaaaa" strokeWidth="0.1" />
      <line x1="84" y1="52" x2="88" y2="52" stroke="#aaaaaa" strokeWidth="0.1" />
      <line x1="88" y1="48" x2="88" y2="52" stroke="#aaaaaa" strokeWidth="0.1" />
      {/* Company */}
      <g filter="url(#noise-avantgarde-shadow-back)">
        <text
          x="45.5"
          y="16"
          textAnchor="middle"
          fontFamily="'Inter', sans-serif"
          fontWeight="800"
          fontSize="3.5"
          letterSpacing="0.8"
          fill="#222222"
        >
          {data.companyEn.toUpperCase()}
        </text>
      </g>
      <text x="45.5" y="28" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#444444">
        {data.companyJa}
      </text>
      <text x="45.5" y="33" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#666666">
        {data.titleJa}
      </text>
      {/* Separator */}
      <line x1="25" y1="36" x2="66" y2="36" stroke="#cccccc" strokeWidth="0.1" />
      {/* Contact */}
      <text x="45.5" y="40" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#888888">
        {data.tel}  |  {data.email}
      </text>
      <text x="45.5" y="43.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#888888">
        {data.website}
      </text>
      <text x="45.5" y="47" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#888888">
        〒{data.zipCode} {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="41.5" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 4. BRUTALIST (粗) — Peter Saville: Raw, concrete gray, heavy sans-serif
// ============================================================
const brutalistTemplate: TemplateDefinition = {
  id: 'brutalist',
  name: 'BRUTALIST',
  nameJa: '粗',
  category: 'avantgarde',
  designer: 'Peter Saville',
  description: '無骨なコンクリートの質感。装飾を排した原始的な力。',
  accentColor: '#B0B0B0',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="brutalist-avantgarde-paper-front" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="2.0" numOctaves="6" seed="27" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="multiply" />
        </filter>
        <filter id="brutalist-avantgarde-shadow-front">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.6" result="blur" />
          <feOffset dx="0.3" dy="0.4" result="offset" />
          <feFlood floodColor="#000000" floodOpacity="0.15" result="color" />
          <feComposite in="color" in2="offset" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="brutalist-concrete" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#B8B8B8" />
          <stop offset="50%" stopColor="#A8A8A8" />
          <stop offset="100%" stopColor="#B0B0B0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#brutalist-concrete)" filter="url(#brutalist-avantgarde-paper-front)" />
      {/* Concrete texture marks */}
      <rect x="5" y="3" width="30" height="0.3" fill="#9A9A9A" />
      <rect x="60" y="50" width="25" height="0.3" fill="#9A9A9A" />
      <rect x="0" y="37" width="91" height="0.2" fill="#8A8A8A" opacity="0.4" />
      {/* Heavy structural line */}
      <rect x="0" y="0" width="91" height="1" fill="#777777" opacity="0.3" />
      {/* Heavy name */}
      <g filter="url(#brutalist-avantgarde-shadow-front)">
        <text
          x="8"
          y="18"
          fontFamily="'Noto Sans JP', sans-serif"
          fontWeight="900"
          fontSize="7"
          fill="#1A1A1A"
        >
          {data.nameJa}
        </text>
      </g>
      <text
        x="8"
        y="25"
        fontFamily="'Inter', sans-serif"
        fontWeight="900"
        fontSize="3"
        letterSpacing="0.3"
        fill="#333333"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="8"
        y="31"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2"
        fill="#4A4A4A"
      >
        {data.titleJa}
      </text>
      {/* Contact block */}
      <text x="8" y="41" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="1.5" fill="#333333">
        TEL {data.tel}
      </text>
      <text x="8" y="45" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="1.5" fill="#333333">
        {data.email}
      </text>
      <text x="8" y="49" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="1.5" fill="#333333">
        {data.website}
      </text>
      {data.logo && <image href={data.logo} x="76" y="43" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="brutalist-avantgarde-paper-back" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="1.8" numOctaves="6" seed="28" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="multiply" />
        </filter>
        <filter id="brutalist-avantgarde-shadow-back">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.8" result="blur" />
          <feOffset dx="0.4" dy="0.5" result="offset" />
          <feFlood floodColor="#000000" floodOpacity="0.25" result="color" />
          <feComposite in="color" in2="offset" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="brutalist-dark" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1E1E1E" />
          <stop offset="100%" stopColor="#141414" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#brutalist-dark)" filter="url(#brutalist-avantgarde-paper-back)" />
      {/* Brutalist thick bars */}
      <rect x="0" y="0" width="91" height="3.5" fill="#B0B0B0" />
      <rect x="0" y="51.5" width="91" height="3.5" fill="#B0B0B0" />
      {/* Structural mark */}
      <rect x="4" y="6" width="2" height="2" fill="#555555" />
      <g filter="url(#brutalist-avantgarde-shadow-back)">
        <text
          x="45.5"
          y="22"
          textAnchor="middle"
          fontFamily="'Inter', sans-serif"
          fontWeight="900"
          fontSize="5.5"
          letterSpacing="1"
          fill="#B0B0B0"
        >
          {data.companyEn.toUpperCase()}
        </text>
      </g>
      <text
        x="45.5"
        y="29"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="2.8"
        fill="#888888"
      >
        {data.companyJa}
      </text>
      <text x="45.5" y="34" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#666666">
        {data.titleJa}
      </text>
      {/* Separator */}
      <line x1="20" y1="37" x2="71" y2="37" stroke="#444444" strokeWidth="0.15" />
      {/* Contact */}
      <text x="45.5" y="41" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fill="#666666">
        {data.tel}  |  {data.email}
      </text>
      <text x="45.5" y="44.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fill="#666666">
        {data.website}
      </text>
      <text x="45.5" y="48" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.4" fill="#666666">
        〒{data.zipCode} {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="41.5" y="8" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 5. DECON (崩) — April Greiman: Deconstructed layout, text at angles
// ============================================================
const deconTemplate: TemplateDefinition = {
  id: 'decon',
  name: 'DECON',
  nameJa: '崩',
  category: 'avantgarde',
  designer: 'April Greiman',
  description: '脱構築の自由。角度とレイヤーが秩序を解体する。',
  accentColor: '#E040A0',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="decon-avantgarde-paper-front" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" seed="29" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="multiply" />
        </filter>
        <filter id="decon-avantgarde-shadow-front">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.7" result="blur" />
          <feOffset dx="0.3" dy="0.35" result="offset" />
          <feFlood floodColor="#E040A0" floodOpacity="0.1" result="color" />
          <feComposite in="color" in2="offset" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="decon-pink" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E040A0" />
          <stop offset="100%" stopColor="#FF70C0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#FFFBF5" filter="url(#decon-avantgarde-paper-front)" />
      {/* Deconstructed geometric elements */}
      <rect x="60" y="-5" width="22" height="22" fill="#E040A0" opacity="0.08" transform="rotate(15, 71, 6)" />
      <rect x="-5" y="35" width="28" height="16" fill="#40A0E0" opacity="0.07" transform="rotate(-8, 9, 43)" />
      <line x1="10" y1="0" x2="80" y2="55" stroke="#E040A0" strokeWidth="0.08" opacity="0.2" />
      <line x1="85" y1="0" x2="20" y2="55" stroke="#40A0E0" strokeWidth="0.08" opacity="0.15" />
      {/* Small decorative triangle */}
      <polygon points="78,5 82,5 80,2" fill="url(#decon-pink)" opacity="0.2" />
      {/* Name at slight angle */}
      <g filter="url(#decon-avantgarde-shadow-front)">
        <text
          x="12"
          y="19"
          fontFamily="'Noto Sans JP', sans-serif"
          fontWeight="700"
          fontSize="6"
          fill="#1a1a1a"
          transform="rotate(-3, 12, 19)"
        >
          {data.nameJa}
        </text>
      </g>
      {/* English name rotated differently */}
      <text
        x="14"
        y="27"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        letterSpacing="0.2"
        fill="#E040A0"
        transform="rotate(2, 14, 27)"
      >
        {data.nameEn}
      </text>
      {/* Title tilted */}
      <text
        x="18"
        y="33"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="#888888"
        transform="rotate(-5, 18, 33)"
      >
        {data.titleJa}
      </text>
      {/* Contact at another angle */}
      <text x="10" y="41" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#666666" transform="rotate(1.5, 10, 41)">
        {data.tel} / {data.email}
      </text>
      <text x="10" y="46" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#666666" transform="rotate(-2, 10, 46)">
        {data.website}
      </text>
      <text x="10" y="51" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#aaaaaa" transform="rotate(1, 10, 51)">
        〒{data.zipCode} {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="76" y="43" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="decon-avantgarde-paper-back" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" seed="30" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="multiply" />
        </filter>
        <filter id="decon-avantgarde-shadow-back">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.8" result="blur" />
          <feOffset dx="0.4" dy="0.45" result="offset" />
          <feFlood floodColor="#E040A0" floodOpacity="0.12" result="color" />
          <feComposite in="color" in2="offset" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="decon-pink-back" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E040A0" />
          <stop offset="100%" stopColor="#FF70C0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#FFFBF5" filter="url(#decon-avantgarde-paper-back)" />
      {/* Deconstructed rectangles */}
      <rect x="55" y="3" width="32" height="20" fill="#E040A0" opacity="0.06" transform="rotate(12, 71, 13)" />
      <rect x="3" y="28" width="38" height="16" fill="#40A0E0" opacity="0.05" transform="rotate(-6, 22, 36)" />
      <rect x="40" y="36" width="22" height="12" fill="#E040A0" opacity="0.04" transform="rotate(4, 51, 42)" />
      {/* Triangle decoration */}
      <polygon points="12,5 16,5 14,2" fill="url(#decon-pink-back)" opacity="0.15" />
      {/* Company at angle */}
      <g filter="url(#decon-avantgarde-shadow-back)">
        <text
          x="45.5"
          y="18"
          textAnchor="middle"
          fontFamily="'Inter', sans-serif"
          fontWeight="800"
          fontSize="4.5"
          letterSpacing="0.3"
          fill="#1a1a1a"
          transform="rotate(-7, 45.5, 18)"
        >
          {data.companyEn.toUpperCase()}
        </text>
      </g>
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#E040A0"
        transform="rotate(3, 45.5, 26)"
      >
        {data.companyJa}
      </text>
      <text x="45.5" y="32" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#888888" transform="rotate(-2, 45.5, 32)">
        {data.titleJa}
      </text>
      {/* Address scattered */}
      <text x="15" y="39" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#999999" transform="rotate(-4, 15, 39)">
        〒{data.zipCode}
      </text>
      <text x="50" y="40" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#999999" transform="rotate(2, 50, 40)">
        {data.addressJa}
      </text>
      <text x="20" y="48" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#999999" transform="rotate(-1.5, 20, 48)">
        {data.tel} | {data.email} | {data.website}
      </text>
      {data.logo && <image href={data.logo} x="41.5" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 6. OVERLAP (層) — Irma Boom: Overlapping semi-transparent rectangles
// ============================================================
const overlapTemplate: TemplateDefinition = {
  id: 'overlap',
  name: 'OVERLAP',
  nameJa: '層',
  category: 'avantgarde',
  designer: 'Irma Boom',
  description: '色彩の層が重なり新しい色を生む。透明度の詩学。',
  accentColor: '#FF6600',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="overlap-avantgarde-paper-front" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" seed="31" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="multiply" />
        </filter>
        <filter id="overlap-avantgarde-shadow-front">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.5" result="blur" />
          <feOffset dx="0.2" dy="0.25" result="offset" />
          <feFlood floodColor="#FF6600" floodOpacity="0.08" result="color" />
          <feComposite in="color" in2="offset" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="overlap-warm" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6600" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#FEFEFE" filter="url(#overlap-avantgarde-paper-front)" />
      {/* Overlapping transparent rectangles */}
      <rect x="5" y="5" width="35" height="25" fill="#FF6600" opacity="0.2" />
      <rect x="20" y="15" width="35" height="25" fill="#0066FF" opacity="0.15" />
      <rect x="50" y="2" width="30" height="20" fill="#FFD700" opacity="0.15" />
      <rect x="60" y="30" width="25" height="20" fill="#FF6600" opacity="0.1" />
      <rect x="35" y="35" width="30" height="15" fill="#0066FF" opacity="0.08" />
      {/* Name over layers */}
      <g filter="url(#overlap-avantgarde-shadow-front)">
        <text
          x="10"
          y="20"
          fontFamily="'Noto Sans JP', sans-serif"
          fontWeight="800"
          fontSize="6"
          fill="#1a1a1a"
        >
          {data.nameJa}
        </text>
      </g>
      <text
        x="10"
        y="26"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        letterSpacing="0.15"
        fill="#333333"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="31"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="#666666"
      >
        {data.titleJa}
      </text>
      {/* Separator */}
      <line x1="10" y1="35" x2="45" y2="35" stroke="#e0e0e0" strokeWidth="0.1" />
      {/* Contact */}
      <text x="10" y="39" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#888888">
        {data.tel}
      </text>
      <text x="10" y="43" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#888888">
        {data.email}
      </text>
      <text x="10" y="47" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#888888">
        {data.website}
      </text>
      <text x="10" y="51" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#aaaaaa">
        〒{data.zipCode} {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="76" y="43" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="overlap-avantgarde-paper-back" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="3" seed="32" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="multiply" />
        </filter>
        <filter id="overlap-avantgarde-shadow-back">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.7" result="blur" />
          <feOffset dx="0.3" dy="0.35" result="offset" />
          <feFlood floodColor="#FF6600" floodOpacity="0.1" result="color" />
          <feComposite in="color" in2="offset" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#FEFEFE" filter="url(#overlap-avantgarde-paper-back)" />
      {/* Larger overlapping rectangles */}
      <rect x="-5" y="-5" width="50" height="35" fill="#FF6600" opacity="0.25" />
      <rect x="30" y="10" width="40" height="35" fill="#0066FF" opacity="0.2" />
      <rect x="55" y="-5" width="40" height="30" fill="#FFD700" opacity="0.15" />
      <rect x="10" y="30" width="45" height="25" fill="#00CC66" opacity="0.1" />
      <rect x="50" y="35" width="40" height="20" fill="#FF6600" opacity="0.08" />
      {/* Company */}
      <g filter="url(#overlap-avantgarde-shadow-back)">
        <text
          x="45.5"
          y="20"
          textAnchor="middle"
          fontFamily="'Inter', sans-serif"
          fontWeight="800"
          fontSize="4"
          letterSpacing="0.4"
          fill="#1a1a1a"
        >
          {data.companyEn.toUpperCase()}
        </text>
      </g>
      <text x="45.5" y="27" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#333333">
        {data.companyJa}
      </text>
      <text x="45.5" y="32" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#555555">
        {data.titleJa}
      </text>
      {/* Separator */}
      <line x1="25" y1="35" x2="66" y2="35" stroke="#cccccc" strokeWidth="0.1" />
      {/* Contact */}
      <text x="45.5" y="39" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#666666">
        {data.tel}  |  {data.email}
      </text>
      <text x="45.5" y="42.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#666666">
        {data.website}
      </text>
      <text x="45.5" y="46" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#666666">
        〒{data.zipCode} {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="41.5" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 7. ROTATE (転) — Wolfgang Weingart: Key text rotated 90 degrees
// ============================================================
const rotateTemplate: TemplateDefinition = {
  id: 'rotate',
  name: 'ROTATE',
  nameJa: '転',
  category: 'avantgarde',
  designer: 'Wolfgang Weingart',
  description: '回転する文字が視線を翻弄する。読む行為を再定義。',
  accentColor: '#1A1A8C',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="rotate-avantgarde-paper-front" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" seed="33" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="multiply" />
        </filter>
        <filter id="rotate-avantgarde-shadow-front">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.6" result="blur" />
          <feOffset dx="0.2" dy="0.3" result="offset" />
          <feFlood floodColor="#1A1A8C" floodOpacity="0.15" result="color" />
          <feComposite in="color" in2="offset" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="rotate-blue" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1A1A8C" />
          <stop offset="100%" stopColor="#2828B0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#F0F0F0" filter="url(#rotate-avantgarde-paper-front)" />
      {/* Vertical stripe accent */}
      <rect x="0" y="0" width="3" height="55" fill="url(#rotate-blue)" />
      {/* Decorative horizontal thin line */}
      <line x1="3" y1="27.5" x2="91" y2="27.5" stroke="#1A1A8C" strokeWidth="0.06" opacity="0.15" />
      {/* Small corner square */}
      <rect x="85" y="49" width="3" height="3" fill="#1A1A8C" opacity="0.1" />
      {/* Japanese name rotated 90 degrees along left */}
      <g filter="url(#rotate-avantgarde-shadow-front)">
        <text
          x="8"
          y="50"
          fontFamily="'Noto Sans JP', sans-serif"
          fontWeight="900"
          fontSize="5.5"
          fill="#1A1A8C"
          transform="rotate(-90, 8, 50)"
        >
          {data.nameJa}
        </text>
      </g>
      {/* English name rotated on right side */}
      <text
        x="82"
        y="5"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="2.5"
        letterSpacing="0.2"
        fill="#333333"
        transform="rotate(90, 82, 5)"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Title horizontal for contrast */}
      <text x="25" y="18" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.8" fill="#666666">
        {data.titleJa}
      </text>
      <text x="25" y="23" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.6" fill="#888888">
        {data.titleEn}
      </text>
      {/* Contact info horizontal */}
      <text x="25" y="32" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#666666">
        {data.tel}
      </text>
      <text x="25" y="36" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#666666">
        {data.email}
      </text>
      <text x="25" y="40" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#666666">
        {data.website}
      </text>
      <text x="25" y="46" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#999999">
        〒{data.zipCode} {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="25" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="rotate-avantgarde-paper-back" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" seed="34" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="multiply" />
        </filter>
        <filter id="rotate-avantgarde-shadow-back">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.8" result="blur" />
          <feOffset dx="0.3" dy="0.4" result="offset" />
          <feFlood floodColor="#ffffff" floodOpacity="0.15" result="color" />
          <feComposite in="color" in2="offset" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="rotate-blue-back" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1A1A8C" />
          <stop offset="100%" stopColor="#12126A" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#rotate-blue-back)" filter="url(#rotate-avantgarde-paper-back)" />
      {/* Horizontal stripe */}
      <rect x="0" y="52" width="91" height="3" fill="#F0F0F0" />
      {/* Decorative elements */}
      <rect x="3" y="3" width="3" height="3" fill="rgba(255,255,255,0.1)" />
      <line x1="45.5" y1="0" x2="45.5" y2="52" stroke="rgba(255,255,255,0.04)" strokeWidth="0.1" />
      {/* Company rotated taking up full height */}
      <g filter="url(#rotate-avantgarde-shadow-back)">
        <text
          x="25"
          y="52"
          fontFamily="'Inter', sans-serif"
          fontWeight="800"
          fontSize="4.5"
          letterSpacing="0.5"
          fill="#ffffff"
          transform="rotate(-90, 25, 52)"
        >
          {data.companyEn.toUpperCase()}
        </text>
      </g>
      {/* Japanese company rotated 90 degrees */}
      <text
        x="60"
        y="5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.8"
        fill="rgba(255,255,255,0.45)"
        transform="rotate(90, 60, 5)"
      >
        {data.companyJa}
      </text>
      {/* Title */}
      <text x="45.5" y="34" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="rgba(255,255,255,0.5)">
        {data.titleJa}
      </text>
      {/* Contact */}
      <text x="45.5" y="39" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(255,255,255,0.4)">
        {data.tel}  |  {data.email}
      </text>
      <text x="45.5" y="42.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(255,255,255,0.4)">
        {data.website}
      </text>
      <text x="45.5" y="48" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(255,255,255,0.35)">
        〒{data.zipCode} {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="41.5" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 8. FRAGMENT (破) — Rudy VanderLans: Text split across zones
// ============================================================
const fragmentTemplate: TemplateDefinition = {
  id: 'fragment',
  name: 'FRAGMENT',
  nameJa: '破',
  category: 'avantgarde',
  designer: 'Rudy VanderLans',
  description: '断片化された情報。分離と再結合の緊張感。',
  accentColor: '#CC3300',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="fragment-avantgarde-paper-front" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" seed="35" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="multiply" />
        </filter>
        <filter id="fragment-avantgarde-shadow-front">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.5" result="blur" />
          <feOffset dx="0.2" dy="0.25" result="offset" />
          <feFlood floodColor="#CC3300" floodOpacity="0.1" result="color" />
          <feComposite in="color" in2="offset" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="fragment-red" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#CC3300" />
          <stop offset="100%" stopColor="#FF5533" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#FAF8F5" filter="url(#fragment-avantgarde-paper-front)" />
      {/* Dividing lines creating zones */}
      <line x1="45.5" y1="0" x2="45.5" y2="55" stroke="#CC3300" strokeWidth="0.12" />
      <line x1="0" y1="27.5" x2="91" y2="27.5" stroke="#CC3300" strokeWidth="0.12" />
      {/* Small red square at intersection */}
      <rect x="44" y="26" width="3" height="3" fill="url(#fragment-red)" />
      {/* Decorative corner marks */}
      <rect x="3" y="3" width="1.5" height="1.5" fill="none" stroke="#CC3300" strokeWidth="0.1" />
      <rect x="86.5" y="50.5" width="1.5" height="1.5" fill="none" stroke="#CC3300" strokeWidth="0.1" />
      {/* Zone 1: Top-left - Japanese name */}
      <g filter="url(#fragment-avantgarde-shadow-front)">
        <text
          x="5"
          y="13"
          fontFamily="'Noto Sans JP', sans-serif"
          fontWeight="800"
          fontSize="5.5"
          fill="#1a1a1a"
        >
          {data.nameJa}
        </text>
      </g>
      <text x="5" y="19" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#888888">
        {data.titleJa}
      </text>
      {/* Zone 2: Top-right - English name */}
      <text x="48" y="10" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="2.2" letterSpacing="0.15" fill="#CC3300">
        {data.nameEn.toUpperCase()}
      </text>
      <text x="48" y="15" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#999999">
        {data.titleEn}
      </text>
      {/* Zone 3: Bottom-left - Contact */}
      <text x="5" y="34" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.3" fill="#666666">TEL</text>
      <text x="5" y="38" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.6" fill="#333333">{data.tel}</text>
      <text x="5" y="42.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.3" fill="#666666">MAIL</text>
      <text x="5" y="46.5" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.6" fill="#333333">{data.email}</text>
      {/* Zone 4: Bottom-right - Web & Address */}
      <text x="48" y="34" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.3" fill="#666666">WEB</text>
      <text x="48" y="38" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.6" fill="#333333">{data.website}</text>
      <text x="48" y="43" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.3" fill="#666666">ADDRESS</text>
      <text x="48" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#333333">〒{data.zipCode}</text>
      <text x="48" y="51" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#555555">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="30" y="19" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="fragment-avantgarde-paper-back" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" seed="36" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="multiply" />
        </filter>
        <filter id="fragment-avantgarde-shadow-back">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.6" result="blur" />
          <feOffset dx="0.25" dy="0.3" result="offset" />
          <feFlood floodColor="#CC3300" floodOpacity="0.12" result="color" />
          <feComposite in="color" in2="offset" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="fragment-red-back" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#CC3300" />
          <stop offset="100%" stopColor="#FF5533" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#FAF8F5" filter="url(#fragment-avantgarde-paper-back)" />
      {/* Fragmented grid lines */}
      <line x1="30" y1="0" x2="30" y2="55" stroke="#CC3300" strokeWidth="0.1" />
      <line x1="60" y1="0" x2="60" y2="55" stroke="#CC3300" strokeWidth="0.1" />
      <line x1="0" y1="20" x2="91" y2="20" stroke="#CC3300" strokeWidth="0.1" />
      <line x1="0" y1="38" x2="91" y2="38" stroke="#CC3300" strokeWidth="0.1" />
      {/* Red squares at intersections */}
      <rect x="28.5" y="18.5" width="3" height="3" fill="url(#fragment-red-back)" />
      <rect x="58.5" y="36.5" width="3" height="3" fill="url(#fragment-red-back)" />
      {/* Company across top zones */}
      <g filter="url(#fragment-avantgarde-shadow-back)">
        <text
          x="5"
          y="13"
          fontFamily="'Inter', sans-serif"
          fontWeight="800"
          fontSize="3.5"
          fill="#1a1a1a"
        >
          {data.companyEn.toUpperCase()}
        </text>
      </g>
      {/* Company Japanese in middle zone */}
      <text x="33" y="30" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="2.8" fill="#CC3300">
        {data.companyJa}
      </text>
      <text x="33" y="35" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#888888">
        {data.titleJa}
      </text>
      {/* Address fragments in different zones */}
      <text x="5" y="30" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#999999">
        〒{data.zipCode}
      </text>
      <text x="5" y="45" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#888888">
        {data.addressJa}
      </text>
      <text x="63" y="30" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#999999">
        {data.tel}
      </text>
      <text x="63" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#999999">
        {data.email}
      </text>
      <text x="63" y="45" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#999999">
        {data.website}
      </text>
      {data.logo && <image href={data.logo} x="5" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 9. FLUX (流) — Tomato: Flowing diagonal composition
// ============================================================
const fluxTemplate: TemplateDefinition = {
  id: 'flux',
  name: 'FLUX',
  nameJa: '流',
  category: 'avantgarde',
  designer: 'Tomato',
  description: '流動する対角線。止まることのない動的エネルギー。',
  accentColor: '#FF4400',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="flux-avantgarde-paper-front" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" seed="37" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="multiply" />
        </filter>
        <filter id="flux-avantgarde-shadow-front">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.6" result="blur" />
          <feOffset dx="0.3" dy="0.3" result="offset" />
          <feFlood floodColor="#FF4400" floodOpacity="0.1" result="color" />
          <feComposite in="color" in2="offset" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="flux-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF4400" />
          <stop offset="100%" stopColor="#FF8800" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#FAFAFA" filter="url(#flux-avantgarde-paper-front)" />
      {/* Dynamic diagonal stripes */}
      <polygon points="0,0 40,0 0,24" fill="#FF4400" opacity="0.06" />
      <polygon points="91,55 50,55 91,30" fill="#FF4400" opacity="0.04" />
      <line x1="0" y1="55" x2="91" y2="0" stroke="url(#flux-grad)" strokeWidth="0.25" opacity="0.3" />
      <line x1="0" y1="45" x2="75" y2="0" stroke="#FF4400" strokeWidth="0.12" opacity="0.15" />
      <line x1="15" y1="55" x2="91" y2="10" stroke="#FF8800" strokeWidth="0.12" opacity="0.15" />
      {/* Name flowing diagonally */}
      <g filter="url(#flux-avantgarde-shadow-front)">
        <text
          x="10"
          y="22"
          fontFamily="'Noto Sans JP', sans-serif"
          fontWeight="800"
          fontSize="6"
          fill="#1a1a1a"
          transform="rotate(-12, 10, 22)"
        >
          {data.nameJa}
        </text>
      </g>
      <text
        x="18"
        y="30"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        letterSpacing="0.2"
        fill="#FF4400"
        transform="rotate(-12, 18, 30)"
      >
        {data.nameEn}
      </text>
      {/* Contact flowing along bottom */}
      <text x="30" y="40" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#888888" transform="rotate(-12, 30, 40)">
        {data.titleEn}
      </text>
      <text x="8" y="48" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fill="#999999">
        {data.tel} | {data.email} | {data.website}
      </text>
      {data.logo && <image href={data.logo} x="76" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="flux-avantgarde-paper-back" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" seed="38" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="multiply" />
        </filter>
        <filter id="flux-avantgarde-shadow-back">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.8" result="blur" />
          <feOffset dx="0.4" dy="0.4" result="offset" />
          <feFlood floodColor="#000000" floodOpacity="0.2" result="color" />
          <feComposite in="color" in2="offset" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="flux-grad-back" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF4400" />
          <stop offset="50%" stopColor="#FF6600" />
          <stop offset="100%" stopColor="#FF8800" />
        </linearGradient>
        <linearGradient id="flux-dark" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1E1E1E" />
          <stop offset="100%" stopColor="#141414" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#flux-dark)" filter="url(#flux-avantgarde-paper-back)" />
      {/* Dynamic diagonal fills */}
      <polygon points="0,0 91,0 91,25 0,40" fill="url(#flux-grad-back)" opacity="0.85" />
      <polygon points="0,42 91,27 91,32 0,47" fill="#FF4400" opacity="0.12" />
      {/* Company name riding the diagonal */}
      <g filter="url(#flux-avantgarde-shadow-back)">
        <text
          x="12"
          y="18"
          fontFamily="'Inter', sans-serif"
          fontWeight="800"
          fontSize="4.5"
          letterSpacing="0.4"
          fill="#ffffff"
          transform="rotate(-12, 12, 18)"
        >
          {data.companyEn.toUpperCase()}
        </text>
      </g>
      <text
        x="18"
        y="26"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="rgba(255,255,255,0.7)"
        transform="rotate(-12, 18, 26)"
      >
        {data.companyJa}
      </text>
      {/* Title */}
      <text x="10" y="42" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#FF8800">
        {data.titleJa}
      </text>
      {/* Contact flowing along bottom */}
      <text x="10" y="47" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#FF8800">
        {data.tel}  |  {data.email}  |  {data.website}
      </text>
      <text x="10" y="51" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(255,136,0,0.6)">
        〒{data.zipCode} {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="76" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 10. INVERT (逆) — Tibor Kalman: Inverted colors, subversive
// ============================================================
const invertTemplate: TemplateDefinition = {
  id: 'invert',
  name: 'INVERT',
  nameJa: '逆',
  category: 'avantgarde',
  designer: 'Tibor Kalman',
  description: '反転の衝撃。白と黒の価値を逆転させる挑発。',
  accentColor: '#FFFFFF',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="invert-avantgarde-paper-front" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" seed="39" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="multiply" />
        </filter>
        <filter id="invert-avantgarde-shadow-front">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.7" result="blur" />
          <feOffset dx="0.3" dy="0.4" result="offset" />
          <feFlood floodColor="#ffffff" floodOpacity="0.08" result="color" />
          <feComposite in="color" in2="offset" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="invert-dark" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#050505" />
          <stop offset="100%" stopColor="#000000" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#invert-dark)" filter="url(#invert-avantgarde-paper-front)" />
      {/* Thin white border inset */}
      <rect x="2" y="2" width="87" height="51" fill="none" stroke="#ffffff" strokeWidth="0.15" />
      {/* Corner dots */}
      <circle cx="2" cy="2" r="0.4" fill="#ffffff" opacity="0.3" />
      <circle cx="89" cy="2" r="0.4" fill="#ffffff" opacity="0.3" />
      <circle cx="2" cy="53" r="0.4" fill="#ffffff" opacity="0.3" />
      <circle cx="89" cy="53" r="0.4" fill="#ffffff" opacity="0.3" />
      {/* Name */}
      <g filter="url(#invert-avantgarde-shadow-front)">
        <text
          x="8"
          y="17"
          fontFamily="'Noto Sans JP', sans-serif"
          fontWeight="700"
          fontSize="6.5"
          fill="#ffffff"
        >
          {data.nameJa}
        </text>
      </g>
      <text
        x="8"
        y="23"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        letterSpacing="0.2"
        fill="rgba(255,255,255,0.7)"
      >
        {data.nameEn}
      </text>
      {/* White line divider */}
      <line x1="8" y1="27" x2="42" y2="27" stroke="#ffffff" strokeWidth="0.2" />
      <text
        x="8"
        y="32"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="rgba(255,255,255,0.6)"
      >
        {data.titleJa}
      </text>
      {/* Contact info */}
      <text x="8" y="39" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="rgba(255,255,255,0.5)">
        T. {data.tel}
      </text>
      <text x="8" y="43" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="rgba(255,255,255,0.5)">
        {data.email}
      </text>
      <text x="8" y="47" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="rgba(255,255,255,0.5)">
        {data.website}
      </text>
      {data.logo && <image href={data.logo} x="75" y="43" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="invert-avantgarde-paper-back" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" seed="40" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="multiply" />
        </filter>
        <filter id="invert-avantgarde-shadow-back">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.8" result="blur" />
          <feOffset dx="0.3" dy="0.4" result="offset" />
          <feFlood floodColor="#000000" floodOpacity="0.15" result="color" />
          <feComposite in="color" in2="offset" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="invert-back-dark" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#030303" />
          <stop offset="100%" stopColor="#000000" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#invert-back-dark)" filter="url(#invert-avantgarde-paper-back)" />
      {/* Inverted white block in center */}
      <rect x="14" y="10" width="63" height="35" fill="#ffffff" />
      {/* Corner dots on the outer frame */}
      <circle cx="14" cy="10" r="0.5" fill="#ffffff" opacity="0.3" />
      <circle cx="77" cy="10" r="0.5" fill="#ffffff" opacity="0.3" />
      <circle cx="14" cy="45" r="0.5" fill="#ffffff" opacity="0.3" />
      <circle cx="77" cy="45" r="0.5" fill="#ffffff" opacity="0.3" />
      {/* Black text on white block */}
      <g filter="url(#invert-avantgarde-shadow-back)">
        <text
          x="45.5"
          y="22"
          textAnchor="middle"
          fontFamily="'Inter', sans-serif"
          fontWeight="800"
          fontSize="4"
          letterSpacing="0.5"
          fill="#000000"
        >
          {data.companyEn.toUpperCase()}
        </text>
      </g>
      <text x="45.5" y="28" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.2" fill="#333333">
        {data.companyJa}
      </text>
      <text x="45.5" y="33" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#555555">
        {data.titleJa}
      </text>
      {/* Separator */}
      <line x1="25" y1="35.5" x2="66" y2="35.5" stroke="#cccccc" strokeWidth="0.1" />
      <text x="45.5" y="39" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#666666">
        〒{data.zipCode} {data.addressJa}
      </text>
      <text x="45.5" y="43" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#666666">
        {data.tel}  |  {data.email}
      </text>
      {/* White text below the block */}
      <text x="45.5" y="50" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(255,255,255,0.4)">
        {data.website}
      </text>
      {data.logo && <image href={data.logo} x="41.5" y="12" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

export const avantgardeTemplates: TemplateDefinition[] = [
  neoTemplate,
  glitchTemplate,
  noiseTemplate,
  brutalistTemplate,
  deconTemplate,
  overlapTemplate,
  rotateTemplate,
  fragmentTemplate,
  fluxTemplate,
  invertTemplate,
];
