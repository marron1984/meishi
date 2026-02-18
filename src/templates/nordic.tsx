import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. FJORD (峡) — Deep Norwegian fjord
// Deep blue-gray water, clean cliff edges, serene depth
// ============================================================
const fjordTemplate: TemplateDefinition = {
  id: 'nordic-fjord',
  name: 'FJORD',
  nameJa: '峡',
  category: 'nordic',
  designer: 'Nordic Series',
  description: 'フィヨルドの静寂。深い青灰色の水面が崖に抱かれる。',
  accentColor: '#5B7B94',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="nordic-fjord-front-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8EDF2" />
          <stop offset="40%" stopColor="#F0F3F7" />
          <stop offset="100%" stopColor="#F5F1EB" />
        </linearGradient>
        <linearGradient id="nordic-fjord-front-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5B7B94" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#3D5A6E" stopOpacity="0.06" />
        </linearGradient>
        <filter id="nordic-fjord-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="multiply" />
        </filter>
        <filter id="nordic-fjord-shadow">
          <feDropShadow dx="0" dy="0.3" stdDeviation="0.4" floodColor="#3D5A6E" floodOpacity="0.15" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#nordic-fjord-front-sky)" />
      {/* Fjord water surface */}
      <rect x="0" y="33" width="91" height="22" fill="url(#nordic-fjord-front-water)" />
      {/* Mountain range silhouettes - layered depth */}
      <path d="M0,38 L8,28 L14,32 L22,22 L30,26 L38,18 L46,24 L54,20 L62,25 L70,19 L78,24 L86,21 L91,26 L91,38 Z" fill="#5B7B94" opacity="0.07" />
      <path d="M0,40 L10,32 L18,35 L28,28 L36,33 L44,27 L52,31 L60,28 L68,33 L76,29 L84,32 L91,30 L91,40 Z" fill="#7A99AD" opacity="0.05" />
      {/* Water ripple lines */}
      <path d="M0,42 Q22,40 45.5,43 Q68,46 91,42" fill="none" stroke="#5B7B94" strokeWidth="0.12" opacity="0.15" />
      <path d="M0,46 Q25,44 50,47 Q75,50 91,46" fill="none" stroke="#5B7B94" strokeWidth="0.08" opacity="0.10" />
      <path d="M0,50 Q20,48 45,51 Q70,54 91,50" fill="none" stroke="#5B7B94" strokeWidth="0.06" opacity="0.07" />
      {/* Cliff edge accent left */}
      <line x1="6" y1="18" x2="6" y2="38" stroke="#3D5A6E" strokeWidth="0.15" opacity="0.12" />
      {data.logo && <image href={data.logo} x="74" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="10"
        y="16"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="6.5"
        letterSpacing="0.8"
        fill="#3D5A6E"
        filter="url(#nordic-fjord-shadow)"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="22.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.4"
        fill="#7A99AD"
      >
        {data.nameEn}
      </text>
      <line x1="10" y1="26" x2="42" y2="26" stroke="#95AEC0" strokeWidth="0.15" opacity="0.4" />
      <text
        x="10"
        y="30.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.8"
        fill="#7A99AD"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="nordic-fjord-back-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5F1EB" />
          <stop offset="100%" stopColor="#E8EDF2" />
        </linearGradient>
        <filter id="nordic-fjord-back-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="multiply" />
        </filter>
        <filter id="nordic-fjord-back-shadow">
          <feDropShadow dx="0" dy="0.2" stdDeviation="0.3" floodColor="#3D5A6E" floodOpacity="0.12" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#nordic-fjord-back-sky)" />
      {/* Top mountain reflection */}
      <path d="M0,4 L12,0 L20,3 L30,0 L42,5 L54,1 L66,4 L78,0 L91,3 L91,8 L0,8 Z" fill="#5B7B94" opacity="0.05" />
      {/* Water band at bottom */}
      <rect x="0" y="44" width="91" height="11" fill="#5B7B94" opacity="0.06" />
      <path d="M0,44 Q22,42 45.5,45 Q68,48 91,44" fill="none" stroke="#5B7B94" strokeWidth="0.1" opacity="0.12" />
      <path d="M0,48 Q25,46 50,49 Q75,52 91,48" fill="none" stroke="#5B7B94" strokeWidth="0.08" opacity="0.08" />
      {/* Vertical cliff accent */}
      <line x1="85" y1="10" x2="85" y2="44" stroke="#95AEC0" strokeWidth="0.1" opacity="0.15" />
      {data.logo && <image href={data.logo} x="8" y="38" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="81"
        y="13"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#3D5A6E"
        filter="url(#nordic-fjord-back-shadow)"
      >
        {data.companyJa}
      </text>
      <text
        x="81"
        y="17.5"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#7A99AD"
      >
        {data.companyEn}
      </text>
      <text
        x="81"
        y="22"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#95AEC0"
      >
        {data.titleJa}
      </text>
      <line x1="38" y1="25" x2="81" y2="25" stroke="#C0D0DB" strokeWidth="0.12" opacity="0.5" />
      <text
        x="81"
        y="30"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#5B7B94"
      >
        {data.tel}
      </text>
      <text
        x="81"
        y="34"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#5B7B94"
      >
        {data.email}
      </text>
      <text
        x="81"
        y="38"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#5B7B94"
      >
        {data.website}
      </text>
      <text
        x="81"
        y="47"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#95AEC0"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 2. HYGGE (温) — Danish coziness and warmth
// Warm whites, soft pink, candle-like warmth
// ============================================================
const hyggeTemplate: TemplateDefinition = {
  id: 'nordic-hygge',
  name: 'HYGGE',
  nameJa: '温',
  category: 'nordic',
  designer: 'Nordic Series',
  description: 'ヒュッゲの温もり。柔らかな灯りが包む北欧の団欒。',
  accentColor: '#D4A5A5',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="nordic-hygge-front-glow" cx="0.82" cy="0.25" r="0.45">
          <stop offset="0%" stopColor="#F0D0C0" stopOpacity="0.25" />
          <stop offset="50%" stopColor="#D4A5A5" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#FBF8F4" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="nordic-hygge-front-bg" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#FBF8F4" />
          <stop offset="100%" stopColor="#F5EDE5" />
        </linearGradient>
        <filter id="nordic-hygge-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="multiply" />
        </filter>
        <filter id="nordic-hygge-shadow">
          <feDropShadow dx="0" dy="0.2" stdDeviation="0.5" floodColor="#D4A5A5" floodOpacity="0.2" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#nordic-hygge-front-bg)" />
      <rect width="91" height="55" fill="url(#nordic-hygge-front-glow)" />
      {/* Warm glow circles - candle effect */}
      <circle cx="76" cy="14" r="14" fill="#D4A5A5" opacity="0.06" />
      <circle cx="76" cy="14" r="8" fill="#E0B8A8" opacity="0.08" />
      <circle cx="76" cy="14" r="3.5" fill="#F0D0C0" opacity="0.12" />
      <circle cx="76" cy="14" r="1" fill="#F5E0D0" opacity="0.25" />
      {/* Soft decorative arc */}
      <path d="M0,52 Q45.5,44 91,52" fill="none" stroke="#D4A5A5" strokeWidth="0.15" opacity="0.2" />
      {data.logo && <image href={data.logo} x="74" y="38" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="12"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="6.5"
        letterSpacing="1"
        fill="#6B5050"
        filter="url(#nordic-hygge-shadow)"
      >
        {data.nameJa}
      </text>
      <text
        x="12"
        y="28.5"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2.1"
        letterSpacing="0.5"
        fill="#A08080"
      >
        {data.nameEn}
      </text>
      <line x1="12" y1="33" x2="50" y2="33" stroke="#D4A5A5" strokeWidth="0.12" opacity="0.5" />
      <text
        x="12"
        y="38"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.8"
        fill="#B09090"
      >
        {data.titleJa}
      </text>
      <text
        x="12"
        y="45"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#C0AAAA"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="nordic-hygge-back-glow" cx="0.18" cy="0.75" r="0.4">
          <stop offset="0%" stopColor="#F0D0C0" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#FBF8F4" stopOpacity="0" />
        </radialGradient>
        <filter id="nordic-hygge-back-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="multiply" />
        </filter>
        <filter id="nordic-hygge-back-shadow">
          <feDropShadow dx="0" dy="0.2" stdDeviation="0.3" floodColor="#6B5050" floodOpacity="0.1" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="#FBF8F4" />
      <rect width="91" height="55" fill="url(#nordic-hygge-back-glow)" />
      {/* Warm glow on back */}
      <circle cx="16" cy="42" r="12" fill="#D4A5A5" opacity="0.05" />
      <circle cx="16" cy="42" r="6" fill="#E0B8A8" opacity="0.06" />
      <circle cx="16" cy="42" r="2" fill="#F0D0C0" opacity="0.1" />
      {/* Decorative top arc */}
      <path d="M0,3 Q45.5,8 91,3" fill="none" stroke="#D4A5A5" strokeWidth="0.12" opacity="0.2" />
      {/* Subtle diamond ornament */}
      <path d="M79,4 L81,6 L79,8 L77,6 Z" fill="none" stroke="#D4A5A5" strokeWidth="0.1" opacity="0.2" />
      {data.logo && <image href={data.logo} x="8" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="79"
        y="14"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2.5"
        fill="#6B5050"
        filter="url(#nordic-hygge-back-shadow)"
      >
        {data.companyJa}
      </text>
      <text
        x="79"
        y="18.5"
        textAnchor="end"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#A08080"
      >
        {data.companyEn}
      </text>
      <text
        x="79"
        y="23"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#B09090"
      >
        {data.titleJa}
      </text>
      <line x1="38" y1="26" x2="79" y2="26" stroke="#D4A5A5" strokeWidth="0.1" opacity="0.4" />
      <text
        x="79"
        y="31"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#806060"
      >
        {data.tel}
      </text>
      <text
        x="79"
        y="35"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#806060"
      >
        {data.email}
      </text>
      <text
        x="79"
        y="39"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#806060"
      >
        {data.website}
      </text>
      <text
        x="79"
        y="48"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#C0AAAA"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 3. BIRCH (白樺) — White birch forest
// Vertical birch trunk lines, natural light, white and sage
// ============================================================
const birchTemplate: TemplateDefinition = {
  id: 'nordic-birch',
  name: 'BIRCH',
  nameJa: '白樺',
  category: 'nordic',
  designer: 'Nordic Series',
  description: '白樺の林。細い幹が並び、木漏れ日が揺れる。',
  accentColor: '#7A9E7E',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="nordic-birch-front-light" x1="0.4" y1="0" x2="0.7" y2="1">
          <stop offset="0%" stopColor="#E8F0E0" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#F5F1EB" stopOpacity="0" />
        </linearGradient>
        <filter id="nordic-birch-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="multiply" />
        </filter>
        <filter id="nordic-birch-shadow">
          <feDropShadow dx="0.2" dy="0.3" stdDeviation="0.3" floodColor="#4A6A4E" floodOpacity="0.12" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="#F5F1EB" />
      <rect width="91" height="55" fill="url(#nordic-birch-front-light)" />
      {/* Birch trunks - varied thickness and tone */}
      <rect x="63" y="0" width="1.8" height="55" fill="#D0D8C8" opacity="0.5" rx="0.4" />
      <rect x="70" y="0" width="1.2" height="55" fill="#D8DFD0" opacity="0.4" rx="0.3" />
      <rect x="76" y="0" width="2.2" height="55" fill="#C8D0C0" opacity="0.55" rx="0.5" />
      <rect x="83" y="0" width="1" height="55" fill="#D5DCD0" opacity="0.35" rx="0.2" />
      {/* Birch bark markings */}
      <ellipse cx="63.9" cy="12" rx="0.8" ry="0.2" fill="#A8B8A0" opacity="0.3" />
      <ellipse cx="63.9" cy="28" rx="0.6" ry="0.15" fill="#A8B8A0" opacity="0.25" />
      <ellipse cx="77" cy="18" rx="1" ry="0.2" fill="#A8B8A0" opacity="0.3" />
      <ellipse cx="77" cy="38" rx="0.7" ry="0.18" fill="#A8B8A0" opacity="0.25" />
      <ellipse cx="70.6" cy="35" rx="0.5" ry="0.12" fill="#A8B8A0" opacity="0.2" />
      <ellipse cx="83.5" cy="22" rx="0.4" ry="0.1" fill="#A8B8A0" opacity="0.2" />
      {/* Dappled sunlight spots */}
      <circle cx="50" cy="8" r="3" fill="#E8F0E0" opacity="0.15" />
      <circle cx="58" cy="40" r="2" fill="#E8F0E0" opacity="0.1" />
      {data.logo && <image href={data.logo} x="10" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="10"
        y="18"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="6"
        letterSpacing="0.6"
        fill="#4A6A4E"
        filter="url(#nordic-birch-shadow)"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="24"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.3"
        fill="#7A9E7E"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="31"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.8"
        fill="#90B090"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="37.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#A8C0A8"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="nordic-birch-back-light" x1="0.3" y1="0" x2="0.6" y2="1">
          <stop offset="0%" stopColor="#E8F0E0" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#F5F1EB" stopOpacity="0" />
        </linearGradient>
        <filter id="nordic-birch-back-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="multiply" />
        </filter>
        <filter id="nordic-birch-back-shadow">
          <feDropShadow dx="0" dy="0.2" stdDeviation="0.3" floodColor="#4A6A4E" floodOpacity="0.1" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="#F5F1EB" />
      <rect width="91" height="55" fill="url(#nordic-birch-back-light)" />
      {/* Birch trunks on left */}
      <rect x="5" y="0" width="1.8" height="55" fill="#D0D8C8" opacity="0.5" rx="0.4" />
      <rect x="11" y="0" width="1" height="55" fill="#D8DFD0" opacity="0.35" rx="0.2" />
      <rect x="17" y="0" width="2.2" height="55" fill="#C8D0C0" opacity="0.55" rx="0.5" />
      <rect x="24" y="0" width="1.2" height="55" fill="#D5DCD0" opacity="0.4" rx="0.3" />
      {/* Bark markings */}
      <ellipse cx="5.9" cy="15" rx="0.8" ry="0.2" fill="#A8B8A0" opacity="0.3" />
      <ellipse cx="18" cy="30" rx="1" ry="0.2" fill="#A8B8A0" opacity="0.3" />
      <ellipse cx="11.5" cy="42" rx="0.5" ry="0.12" fill="#A8B8A0" opacity="0.2" />
      {/* Dappled light */}
      <circle cx="35" cy="45" r="2.5" fill="#E8F0E0" opacity="0.12" />
      {data.logo && <image href={data.logo} x="74" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="81"
        y="12"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#4A6A4E"
        filter="url(#nordic-birch-back-shadow)"
      >
        {data.companyJa}
      </text>
      <text
        x="81"
        y="16.5"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#90B090"
      >
        {data.companyEn}
      </text>
      <text
        x="81"
        y="21"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#7A9E7E"
      >
        {data.titleJa}
      </text>
      <line x1="38" y1="24" x2="81" y2="24" stroke="#C0D0C0" strokeWidth="0.1" opacity="0.4" />
      <text
        x="81"
        y="29"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#5A7A5E"
      >
        {data.tel}
      </text>
      <text
        x="81"
        y="33"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#5A7A5E"
      >
        {data.email}
      </text>
      <text
        x="81"
        y="37"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#5A7A5E"
      >
        {data.website}
      </text>
      <text
        x="81"
        y="47"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#A8C0A8"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 4. FROST (霜) — Winter frost crystals
// Ice crystal patterns, cool blue-white palette
// ============================================================
const frostTemplate: TemplateDefinition = {
  id: 'nordic-frost',
  name: 'FROST',
  nameJa: '霜',
  category: 'nordic',
  designer: 'Nordic Series',
  description: '窓の霜。氷の結晶が描く繊細な幾何学模様。',
  accentColor: '#8AAEC0',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="nordic-frost-front-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F0F4F8" />
          <stop offset="50%" stopColor="#E8EFF5" />
          <stop offset="100%" stopColor="#F0F4F8" />
        </linearGradient>
        <radialGradient id="nordic-frost-front-crystal" cx="0.8" cy="0.2" r="0.35">
          <stop offset="0%" stopColor="#C8E0F0" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#F0F4F8" stopOpacity="0" />
        </radialGradient>
        <filter id="nordic-frost-texture">
          <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="4" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="multiply" />
        </filter>
        <filter id="nordic-frost-shadow">
          <feDropShadow dx="0" dy="0.2" stdDeviation="0.4" floodColor="#4A6A7E" floodOpacity="0.12" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#nordic-frost-front-bg)" />
      <rect width="91" height="55" fill="url(#nordic-frost-front-crystal)" />
      {/* Frost crystal 1 - large, top right */}
      <g opacity="0.14" transform="translate(75,12)">
        <line x1="0" y1="-8" x2="0" y2="8" stroke="#8AAEC0" strokeWidth="0.3" />
        <line x1="-7" y1="0" x2="7" y2="0" stroke="#8AAEC0" strokeWidth="0.3" />
        <line x1="-5" y1="-5" x2="5" y2="5" stroke="#8AAEC0" strokeWidth="0.2" />
        <line x1="5" y1="-5" x2="-5" y2="5" stroke="#8AAEC0" strokeWidth="0.2" />
        <line x1="-2" y1="-6" x2="-4" y2="-8" stroke="#8AAEC0" strokeWidth="0.15" />
        <line x1="2" y1="-6" x2="4" y2="-8" stroke="#8AAEC0" strokeWidth="0.15" />
        <line x1="-2" y1="6" x2="-4" y2="8" stroke="#8AAEC0" strokeWidth="0.15" />
        <line x1="2" y1="6" x2="4" y2="8" stroke="#8AAEC0" strokeWidth="0.15" />
        <line x1="-6" y1="-2" x2="-8" y2="-4" stroke="#8AAEC0" strokeWidth="0.15" />
        <line x1="6" y1="-2" x2="8" y2="-4" stroke="#8AAEC0" strokeWidth="0.15" />
        <line x1="-6" y1="2" x2="-8" y2="4" stroke="#8AAEC0" strokeWidth="0.15" />
        <line x1="6" y1="2" x2="8" y2="4" stroke="#8AAEC0" strokeWidth="0.15" />
      </g>
      {/* Frost crystal 2 - smaller, bottom */}
      <g opacity="0.09" transform="translate(60,44)">
        <line x1="0" y1="-5" x2="0" y2="5" stroke="#8AAEC0" strokeWidth="0.25" />
        <line x1="-5" y1="0" x2="5" y2="0" stroke="#8AAEC0" strokeWidth="0.25" />
        <line x1="-3.5" y1="-3.5" x2="3.5" y2="3.5" stroke="#8AAEC0" strokeWidth="0.15" />
        <line x1="3.5" y1="-3.5" x2="-3.5" y2="3.5" stroke="#8AAEC0" strokeWidth="0.15" />
      </g>
      {/* Ice dust particles */}
      <circle cx="85" cy="30" r="0.3" fill="#8AAEC0" opacity="0.15" />
      <circle cx="55" cy="5" r="0.2" fill="#8AAEC0" opacity="0.12" />
      <circle cx="42" cy="48" r="0.25" fill="#8AAEC0" opacity="0.1" />
      {data.logo && <image href={data.logo} x="74" y="38" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="10"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="6.5"
        letterSpacing="0.8"
        fill="#4A6A7E"
        filter="url(#nordic-frost-shadow)"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="26"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="2"
        letterSpacing="0.4"
        fill="#8AAEC0"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="34"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.8"
        fill="#A0BED0"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="41"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#B8D0E0"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="nordic-frost-back-crystal" cx="0.15" cy="0.8" r="0.3">
          <stop offset="0%" stopColor="#C8E0F0" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#F0F4F8" stopOpacity="0" />
        </radialGradient>
        <filter id="nordic-frost-back-texture">
          <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="4" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="multiply" />
        </filter>
        <filter id="nordic-frost-back-shadow">
          <feDropShadow dx="0" dy="0.2" stdDeviation="0.3" floodColor="#4A6A7E" floodOpacity="0.1" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="#F0F4F8" />
      <rect width="91" height="55" fill="url(#nordic-frost-back-crystal)" />
      {/* Crystal on back - bottom left */}
      <g opacity="0.1" transform="translate(15,42)">
        <line x1="0" y1="-7" x2="0" y2="7" stroke="#8AAEC0" strokeWidth="0.3" />
        <line x1="-7" y1="0" x2="7" y2="0" stroke="#8AAEC0" strokeWidth="0.3" />
        <line x1="-5" y1="-5" x2="5" y2="5" stroke="#8AAEC0" strokeWidth="0.2" />
        <line x1="5" y1="-5" x2="-5" y2="5" stroke="#8AAEC0" strokeWidth="0.2" />
        <line x1="-2" y1="-5.5" x2="-3.5" y2="-7" stroke="#8AAEC0" strokeWidth="0.12" />
        <line x1="2" y1="-5.5" x2="3.5" y2="-7" stroke="#8AAEC0" strokeWidth="0.12" />
      </g>
      {/* Ice dust */}
      <circle cx="5" cy="8" r="0.25" fill="#8AAEC0" opacity="0.12" />
      <circle cx="82" cy="35" r="0.2" fill="#8AAEC0" opacity="0.1" />
      <circle cx="45" cy="50" r="0.3" fill="#8AAEC0" opacity="0.08" />
      {data.logo && <image href={data.logo} x="8" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="81"
        y="12"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2.5"
        fill="#4A6A7E"
        filter="url(#nordic-frost-back-shadow)"
      >
        {data.companyJa}
      </text>
      <text
        x="81"
        y="16.5"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#A0BED0"
      >
        {data.companyEn}
      </text>
      <text
        x="81"
        y="21"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#8AAEC0"
      >
        {data.titleJa}
      </text>
      <line x1="38" y1="24" x2="81" y2="24" stroke="#C8D8E4" strokeWidth="0.1" opacity="0.4" />
      <text
        x="81"
        y="29"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#5A7A8E"
      >
        {data.tel}
      </text>
      <text
        x="81"
        y="33"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#5A7A8E"
      >
        {data.email}
      </text>
      <text
        x="81"
        y="37"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#5A7A8E"
      >
        {data.website}
      </text>
      <text
        x="81"
        y="47"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#B8D0E0"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 5. TUNDRA (原) — Arctic tundra landscape
// Vast horizontal lines, muted earth tones, open space
// ============================================================
const tundraTemplate: TemplateDefinition = {
  id: 'nordic-tundra',
  name: 'TUNDRA',
  nameJa: '原',
  category: 'nordic',
  designer: 'Nordic Series',
  description: 'ツンドラの広がり。果てしない地平線が静かに横たわる。',
  accentColor: '#8A9A7E',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="nordic-tundra-front-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8E4DC" />
          <stop offset="60%" stopColor="#F0ECE4" />
          <stop offset="100%" stopColor="#F5F1EB" />
        </linearGradient>
        <linearGradient id="nordic-tundra-front-earth" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D0C8B8" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#B8B0A0" stopOpacity="0.08" />
        </linearGradient>
        <filter id="nordic-tundra-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="multiply" />
        </filter>
        <filter id="nordic-tundra-shadow">
          <feDropShadow dx="0" dy="0.3" stdDeviation="0.5" floodColor="#5A6A50" floodOpacity="0.1" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#nordic-tundra-front-sky)" />
      {/* Tundra horizon layers - gradual earth strata */}
      <rect x="0" y="36" width="91" height="4" fill="#D0C8B8" opacity="0.25" />
      <rect x="0" y="40" width="91" height="4" fill="#C8C0B0" opacity="0.2" />
      <rect x="0" y="44" width="91" height="4" fill="#C0B8A8" opacity="0.15" />
      <rect x="0" y="48" width="91" height="7" fill="url(#nordic-tundra-front-earth)" />
      {/* Horizon line */}
      <line x1="0" y1="35.5" x2="91" y2="35.5" stroke="#8A9A7E" strokeWidth="0.25" opacity="0.35" />
      {/* Distant tundra bush dots */}
      <circle cx="20" cy="35" r="0.4" fill="#8A9A7E" opacity="0.15" />
      <circle cx="45" cy="34.8" r="0.3" fill="#8A9A7E" opacity="0.12" />
      <circle cx="68" cy="35.2" r="0.35" fill="#8A9A7E" opacity="0.13" />
      <circle cx="82" cy="34.5" r="0.25" fill="#8A9A7E" opacity="0.1" />
      {data.logo && <image href={data.logo} x="78" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="45.5"
        y="15"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="6.5"
        letterSpacing="2"
        fill="#5A6A50"
        filter="url(#nordic-tundra-shadow)"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="2"
        letterSpacing="0.6"
        fill="#8A9A7E"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="29.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.8"
        fill="#A0B098"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="nordic-tundra-back-earth" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D0C8B8" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#F5F1EB" stopOpacity="0" />
        </linearGradient>
        <filter id="nordic-tundra-back-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="multiply" />
        </filter>
        <filter id="nordic-tundra-back-shadow">
          <feDropShadow dx="0" dy="0.2" stdDeviation="0.3" floodColor="#5A6A50" floodOpacity="0.08" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="#F5F1EB" />
      {/* Top earth strata */}
      <rect x="0" y="0" width="91" height="4" fill="#D0C8B8" opacity="0.2" />
      <rect x="0" y="4" width="91" height="4" fill="#C8C0B0" opacity="0.15" />
      <rect x="0" y="8" width="91" height="4" fill="url(#nordic-tundra-back-earth)" />
      <line x1="0" y1="12" x2="91" y2="12" stroke="#8A9A7E" strokeWidth="0.18" opacity="0.25" />
      {/* Distant bush dots */}
      <circle cx="15" cy="12.5" r="0.3" fill="#8A9A7E" opacity="0.12" />
      <circle cx="50" cy="12.2" r="0.25" fill="#8A9A7E" opacity="0.1" />
      <circle cx="75" cy="12.8" r="0.35" fill="#8A9A7E" opacity="0.11" />
      {data.logo && <image href={data.logo} x="5" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="45.5"
        y="21"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2.5"
        fill="#5A6A50"
        filter="url(#nordic-tundra-back-shadow)"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="25.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#8A9A7E"
      >
        {data.companyEn}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#A0B098"
      >
        {data.titleJa}
      </text>
      <line x1="25" y1="33" x2="66" y2="33" stroke="#C0B8A8" strokeWidth="0.1" opacity="0.35" />
      <text
        x="45.5"
        y="38"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#6A7A60"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="42"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#6A7A60"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="46"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#6A7A60"
      >
        {data.website}
      </text>
      <text
        x="45.5"
        y="52"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#A0B098"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 6. AURORA-N (光幕) — Northern lights display
// Vertical curtain shimmer, green and violet on dark sky
// ============================================================
const auroraNTemplate: TemplateDefinition = {
  id: 'nordic-aurora-n',
  name: 'AURORA-N',
  nameJa: '光幕',
  category: 'nordic',
  designer: 'Nordic Series',
  description: 'オーロラの幕。暗い空に揺れる緑と紫の光のカーテン。',
  accentColor: '#7A9E7E',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="nordic-aurora-n-front-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0D1620" />
          <stop offset="50%" stopColor="#152030" />
          <stop offset="100%" stopColor="#1A2332" />
        </linearGradient>
        <linearGradient id="nordic-aurora-n-front-curtain" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7A9E7E" stopOpacity="0.2" />
          <stop offset="40%" stopColor="#8AB88E" stopOpacity="0.12" />
          <stop offset="70%" stopColor="#8E7AA0" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#1A2332" stopOpacity="0" />
        </linearGradient>
        <filter id="nordic-aurora-n-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.4" numOctaves="3" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="screen" />
        </filter>
        <filter id="nordic-aurora-n-shadow">
          <feDropShadow dx="0" dy="0.3" stdDeviation="0.6" floodColor="#7A9E7E" floodOpacity="0.3" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#nordic-aurora-n-front-sky)" />
      {/* Aurora curtain bands */}
      <path d="M12,0 Q14,8 13,18 Q12,28 15,35" stroke="#7A9E7E" strokeWidth="2.5" fill="none" opacity="0.1" strokeLinecap="round" />
      <path d="M22,0 Q24,10 21,22 Q20,32 24,40" stroke="#8AB88E" strokeWidth="3" fill="none" opacity="0.08" strokeLinecap="round" />
      <path d="M33,0 Q35,6 32,16 Q30,26 34,32" stroke="#6A8E9E" strokeWidth="2" fill="none" opacity="0.09" strokeLinecap="round" />
      <path d="M42,0 Q44,12 41,24 Q40,34 43,42" stroke="#7A9E7E" strokeWidth="2.8" fill="none" opacity="0.12" strokeLinecap="round" />
      <path d="M52,0 Q50,8 53,16 Q55,24 51,30" stroke="#8E7AA0" strokeWidth="2" fill="none" opacity="0.08" strokeLinecap="round" />
      <path d="M62,0 Q64,6 61,14 Q60,22 63,28" stroke="#8AB88E" strokeWidth="2.5" fill="none" opacity="0.1" strokeLinecap="round" />
      <path d="M72,0 Q70,10 73,20 Q74,28 71,34" stroke="#6A8E9E" strokeWidth="2" fill="none" opacity="0.07" strokeLinecap="round" />
      <path d="M80,0 Q82,5 79,12 Q78,20 81,26" stroke="#8E7AA0" strokeWidth="2.2" fill="none" opacity="0.06" strokeLinecap="round" />
      {/* Stars */}
      <circle cx="8" cy="4" r="0.25" fill="#ffffff" opacity="0.5" />
      <circle cx="48" cy="7" r="0.18" fill="#ffffff" opacity="0.35" />
      <circle cx="86" cy="3" r="0.22" fill="#ffffff" opacity="0.45" />
      <circle cx="30" cy="2" r="0.12" fill="#ffffff" opacity="0.3" />
      <circle cx="70" cy="6" r="0.15" fill="#ffffff" opacity="0.28" />
      {data.logo && <image href={data.logo} x="74" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="10"
        y="36"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="6.5"
        letterSpacing="0.8"
        fill="#C0E0C8"
        filter="url(#nordic-aurora-n-shadow)"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="42"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="2"
        letterSpacing="0.3"
        fill="rgba(192,224,200,0.6)"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="49"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.8"
        fill="rgba(192,224,200,0.4)"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="nordic-aurora-n-back-sky" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#0D1620" />
          <stop offset="100%" stopColor="#1A2332" />
        </linearGradient>
        <filter id="nordic-aurora-n-back-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.4" numOctaves="3" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="screen" />
        </filter>
        <filter id="nordic-aurora-n-back-shadow">
          <feDropShadow dx="0" dy="0.2" stdDeviation="0.4" floodColor="#7A9E7E" floodOpacity="0.2" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#nordic-aurora-n-back-sky)" />
      {/* Aurora curtain from bottom */}
      <path d="M8,55 Q10,45 8,35 Q7,28 10,22" stroke="#7A9E7E" strokeWidth="2" fill="none" opacity="0.08" strokeLinecap="round" />
      <path d="M20,55 Q22,42 19,32 Q18,25 21,20" stroke="#8AB88E" strokeWidth="2.5" fill="none" opacity="0.07" strokeLinecap="round" />
      <path d="M35,55 Q33,46 36,38 Q37,30 34,24" stroke="#6A8E9E" strokeWidth="2" fill="none" opacity="0.1" strokeLinecap="round" />
      <path d="M55,55 Q57,44 54,34 Q53,26 56,20" stroke="#8E7AA0" strokeWidth="2.2" fill="none" opacity="0.06" strokeLinecap="round" />
      <path d="M72,55 Q70,46 73,38 Q74,30 71,24" stroke="#7A9E7E" strokeWidth="2.5" fill="none" opacity="0.08" strokeLinecap="round" />
      {/* Stars */}
      <circle cx="42" cy="4" r="0.2" fill="#ffffff" opacity="0.4" />
      <circle cx="78" cy="8" r="0.15" fill="#ffffff" opacity="0.3" />
      <circle cx="12" cy="6" r="0.18" fill="#ffffff" opacity="0.35" />
      {data.logo && <image href={data.logo} x="8" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="81"
        y="12"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2.5"
        fill="#C0E0C8"
        filter="url(#nordic-aurora-n-back-shadow)"
      >
        {data.companyJa}
      </text>
      <text
        x="81"
        y="16.5"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="rgba(192,224,200,0.5)"
      >
        {data.companyEn}
      </text>
      <text
        x="81"
        y="21"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="rgba(192,224,200,0.45)"
      >
        {data.titleJa}
      </text>
      <line x1="48" y1="24" x2="81" y2="24" stroke="rgba(122,158,126,0.2)" strokeWidth="0.12" />
      <text
        x="81"
        y="29"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="rgba(192,224,200,0.7)"
      >
        {data.tel}
      </text>
      <text
        x="81"
        y="33"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="rgba(192,224,200,0.7)"
      >
        {data.email}
      </text>
      <text
        x="81"
        y="37"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="rgba(192,224,200,0.7)"
      >
        {data.website}
      </text>
      <text
        x="81"
        y="47"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="rgba(192,224,200,0.4)"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 7. CABIN (小屋) — Scandinavian log cabin
// Warm wood tones, horizontal log-like lines, cozy interior
// ============================================================
const cabinTemplate: TemplateDefinition = {
  id: 'nordic-cabin',
  name: 'CABIN',
  nameJa: '小屋',
  category: 'nordic',
  designer: 'Nordic Series',
  description: '北欧の小屋。丸太が積まれた壁の温もりが感じられる。',
  accentColor: '#A68B6B',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="nordic-cabin-front-wood" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5EDE3" />
          <stop offset="100%" stopColor="#EDE5D8" />
        </linearGradient>
        <linearGradient id="nordic-cabin-front-log" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D4C4B0" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#C8B8A0" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#D4C4B0" stopOpacity="0.8" />
        </linearGradient>
        <filter id="nordic-cabin-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="multiply" />
        </filter>
        <filter id="nordic-cabin-shadow">
          <feDropShadow dx="0" dy="0.3" stdDeviation="0.4" floodColor="#6B5040" floodOpacity="0.15" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#nordic-cabin-front-wood)" />
      {/* Log cabin horizontal boards - top section */}
      <rect x="0" y="3" width="91" height="3.5" fill="#D4C4B0" opacity="0.25" rx="0.3" />
      <line x1="0" y1="3" x2="91" y2="3" stroke="#C0B0A0" strokeWidth="0.12" opacity="0.3" />
      <rect x="0" y="7.5" width="91" height="3" fill="#DCCFC0" opacity="0.2" rx="0.3" />
      <rect x="0" y="11.5" width="91" height="3.5" fill="#D0C0AD" opacity="0.28" rx="0.3" />
      <line x1="0" y1="11.5" x2="91" y2="11.5" stroke="#C0B0A0" strokeWidth="0.12" opacity="0.25" />
      {/* Log cabin horizontal boards - bottom section */}
      <rect x="0" y="41" width="91" height="3" fill="#D4C4B0" opacity="0.2" rx="0.3" />
      <rect x="0" y="45" width="91" height="3.5" fill="#DCCFC0" opacity="0.25" rx="0.3" />
      <line x1="0" y1="45" x2="91" y2="45" stroke="#C0B0A0" strokeWidth="0.12" opacity="0.3" />
      <rect x="0" y="49.5" width="91" height="3" fill="#D0C0AD" opacity="0.22" rx="0.3" />
      {/* Wood grain hint */}
      <path d="M15,5 Q30,4.5 50,5.2 Q70,5.8 91,5" fill="none" stroke="#C0B0A0" strokeWidth="0.06" opacity="0.2" />
      <path d="M0,47 Q20,46.5 45,47.2 Q75,47.8 91,47" fill="none" stroke="#C0B0A0" strokeWidth="0.06" opacity="0.2" />
      {data.logo && <image href={data.logo} x="74" y="22" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="12"
        y="24"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="6"
        letterSpacing="0.5"
        fill="#6B5040"
        filter="url(#nordic-cabin-shadow)"
      >
        {data.nameJa}
      </text>
      <text
        x="12"
        y="30"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.4"
        fill="#A08060"
      >
        {data.nameEn}
      </text>
      <text
        x="12"
        y="37"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.8"
        fill="#B09878"
      >
        {data.titleJa} | {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="nordic-cabin-back-wood" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EDE5D8" />
          <stop offset="100%" stopColor="#F5EDE3" />
        </linearGradient>
        <filter id="nordic-cabin-back-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="multiply" />
        </filter>
        <filter id="nordic-cabin-back-shadow">
          <feDropShadow dx="0" dy="0.2" stdDeviation="0.3" floodColor="#6B5040" floodOpacity="0.1" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#nordic-cabin-back-wood)" />
      {/* Log boards */}
      <rect x="0" y="3" width="91" height="3.5" fill="#D4C4B0" opacity="0.25" rx="0.3" />
      <rect x="0" y="7.5" width="91" height="3" fill="#DCCFC0" opacity="0.2" rx="0.3" />
      <line x1="0" y1="7.5" x2="91" y2="7.5" stroke="#C0B0A0" strokeWidth="0.1" opacity="0.25" />
      <rect x="0" y="45" width="91" height="3" fill="#D4C4B0" opacity="0.2" rx="0.3" />
      <rect x="0" y="49" width="91" height="3.5" fill="#DCCFC0" opacity="0.25" rx="0.3" />
      <line x1="0" y1="49" x2="91" y2="49" stroke="#C0B0A0" strokeWidth="0.1" opacity="0.25" />
      {/* Wood grain */}
      <path d="M10,5 Q35,4.5 60,5.2 Q80,5.5 91,5" fill="none" stroke="#C0B0A0" strokeWidth="0.06" opacity="0.18" />
      {data.logo && <image href={data.logo} x="5" y="14" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="45.5"
        y="17"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#6B5040"
        filter="url(#nordic-cabin-back-shadow)"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="21.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#A08060"
      >
        {data.companyEn}
      </text>
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#B09878"
      >
        {data.titleJa}
      </text>
      <line x1="22" y1="29" x2="69" y2="29" stroke="#C8B8A0" strokeWidth="0.12" opacity="0.4" />
      <text
        x="45.5"
        y="34"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#806848"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="38"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#806848"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="42"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#806848"
      >
        {data.website}
      </text>
      <text
        x="45.5"
        y="48"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#B09878"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 8. PINE (松) — Pine forest simplicity
// Dark green accent, needle-like fine lines, evergreen
// ============================================================
const pineTemplate: TemplateDefinition = {
  id: 'nordic-pine',
  name: 'PINE',
  nameJa: '松',
  category: 'nordic',
  designer: 'Nordic Series',
  description: '松林の香り。常緑の深い緑が静かな力を湛える。',
  accentColor: '#3A5A40',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="nordic-pine-front-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5F1EB" />
          <stop offset="100%" stopColor="#EDF0E8" />
        </linearGradient>
        <linearGradient id="nordic-pine-front-ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3A5A40" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#3A5A40" stopOpacity="0.02" />
        </linearGradient>
        <filter id="nordic-pine-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="multiply" />
        </filter>
        <filter id="nordic-pine-shadow">
          <feDropShadow dx="0" dy="0.3" stdDeviation="0.4" floodColor="#2A4A30" floodOpacity="0.15" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#nordic-pine-front-bg)" />
      <rect x="0" y="48" width="91" height="7" fill="url(#nordic-pine-front-ground)" />
      {/* Stylized pine tree 1 - large */}
      <g opacity="0.09">
        <polygon points="79,46 74,46 76.5,38 73,38 76,30 73.5,30 76.5,22 79.5,22 82.5,30 80,30 83,38 79.5,38 82,46" fill="#3A5A40" />
        <rect x="78" y="46" width="2" height="4" fill="#5A3A28" opacity="0.5" rx="0.3" />
      </g>
      {/* Stylized pine tree 2 - smaller */}
      <g opacity="0.06">
        <polygon points="67.5,49 64,49 65.5,42 63,42 65.5,35 63.5,35 66,28 69,28 71.5,35 69.5,35 72,42 69.5,42 71,49" fill="#3A5A40" />
        <rect x="66.8" y="49" width="1.5" height="3" fill="#5A3A28" opacity="0.4" rx="0.2" />
      </g>
      {/* Pine needle scatter */}
      <line x1="85" y1="20" x2="87" y2="19" stroke="#3A5A40" strokeWidth="0.08" opacity="0.1" />
      <line x1="60" y1="48" x2="62" y2="47.5" stroke="#3A5A40" strokeWidth="0.06" opacity="0.08" />
      <line x1="88" y1="35" x2="90" y2="34" stroke="#3A5A40" strokeWidth="0.07" opacity="0.09" />
      {data.logo && <image href={data.logo} x="74" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="10"
        y="18"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6.5"
        letterSpacing="0.5"
        fill="#2A4A30"
        filter="url(#nordic-pine-shadow)"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="24"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.3"
        fill="#5A7A60"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.8"
        fill="#7A9A80"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="39"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#90AA90"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="nordic-pine-back-bg" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#F5F1EB" />
          <stop offset="100%" stopColor="#EDF0E8" />
        </linearGradient>
        <filter id="nordic-pine-back-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="multiply" />
        </filter>
        <filter id="nordic-pine-back-shadow">
          <feDropShadow dx="0" dy="0.2" stdDeviation="0.3" floodColor="#2A4A30" floodOpacity="0.1" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#nordic-pine-back-bg)" />
      <rect x="0" y="48" width="91" height="7" fill="#3A5A40" opacity="0.03" />
      {/* Pine tree on left */}
      <g opacity="0.07">
        <polygon points="14,49 10.5,49 12,42 9.5,42 12,35 10,35 12.5,28 15,28 17.5,35 15.5,35 18,42 15.5,42 17,49" fill="#3A5A40" />
        <rect x="13" y="49" width="1.5" height="3" fill="#5A3A28" opacity="0.4" rx="0.2" />
      </g>
      {/* Needle scatter */}
      <line x1="22" y1="46" x2="24" y2="45.5" stroke="#3A5A40" strokeWidth="0.06" opacity="0.08" />
      <line x1="6" y1="26" x2="8" y2="25.5" stroke="#3A5A40" strokeWidth="0.07" opacity="0.09" />
      {data.logo && <image href={data.logo} x="74" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="81"
        y="12"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#2A4A30"
        filter="url(#nordic-pine-back-shadow)"
      >
        {data.companyJa}
      </text>
      <text
        x="81"
        y="16.5"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#7A9A80"
      >
        {data.companyEn}
      </text>
      <text
        x="81"
        y="21"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#5A7A60"
      >
        {data.titleJa}
      </text>
      <line x1="38" y1="24" x2="81" y2="24" stroke="#A0B8A0" strokeWidth="0.1" opacity="0.35" />
      <text
        x="81"
        y="29"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#4A6A50"
      >
        {data.tel}
      </text>
      <text
        x="81"
        y="33"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#4A6A50"
      >
        {data.email}
      </text>
      <text
        x="81"
        y="37"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#4A6A50"
      >
        {data.website}
      </text>
      <text
        x="81"
        y="47"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#90AA90"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 9. LAKE (湖) — Still Scandinavian lake
// Mirror-like reflection, horizontal calm, muted blue
// ============================================================
const lakeTemplate: TemplateDefinition = {
  id: 'nordic-lake',
  name: 'LAKE',
  nameJa: '湖',
  category: 'nordic',
  designer: 'Nordic Series',
  description: '北欧の湖。鏡のような水面が空と大地を映し出す。',
  accentColor: '#5B7B94',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="nordic-lake-front-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8EDF2" />
          <stop offset="100%" stopColor="#F5F1EB" />
        </linearGradient>
        <linearGradient id="nordic-lake-front-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5B7B94" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#3D5A6E" stopOpacity="0.04" />
        </linearGradient>
        <filter id="nordic-lake-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.3" numOctaves="2" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="multiply" />
        </filter>
        <filter id="nordic-lake-shadow">
          <feDropShadow dx="0" dy="0.2" stdDeviation="0.5" floodColor="#3D5A6E" floodOpacity="0.1" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#nordic-lake-front-sky)" />
      {/* Water surface - bottom half */}
      <rect x="0" y="27.5" width="91" height="27.5" fill="url(#nordic-lake-front-water)" />
      {/* Horizon line - the mirror edge */}
      <line x1="0" y1="27.5" x2="91" y2="27.5" stroke="#5B7B94" strokeWidth="0.3" opacity="0.18" />
      {/* Water ripple lines */}
      <path d="M8,33 Q25,32 42,33.5 Q60,35 78,33" fill="none" stroke="#5B7B94" strokeWidth="0.08" opacity="0.12" />
      <path d="M15,38 Q35,37 55,38.5 Q75,40 88,38" fill="none" stroke="#5B7B94" strokeWidth="0.06" opacity="0.1" />
      <path d="M5,43 Q30,42 55,43.5 Q80,45 91,43" fill="none" stroke="#5B7B94" strokeWidth="0.06" opacity="0.08" />
      <path d="M12,48 Q40,47 65,48.5 Q85,50 91,48" fill="none" stroke="#5B7B94" strokeWidth="0.05" opacity="0.06" />
      {data.logo && <image href={data.logo} x="74" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="6.5"
        letterSpacing="1.2"
        fill="#3D5A6E"
        filter="url(#nordic-lake-shadow)"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="20.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="2"
        letterSpacing="0.4"
        fill="#7A99AD"
      >
        {data.nameEn}
      </text>
      {/* Reflected name - mirrored in water */}
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="4"
        letterSpacing="1.2"
        fill="#5B7B94"
        opacity="0.06"
        transform="translate(0,0) scale(1,1)"
      >
        {data.nameJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="nordic-lake-back-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5B7B94" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#3D5A6E" stopOpacity="0.03" />
        </linearGradient>
        <filter id="nordic-lake-back-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.3" numOctaves="2" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="multiply" />
        </filter>
        <filter id="nordic-lake-back-shadow">
          <feDropShadow dx="0" dy="0.2" stdDeviation="0.3" floodColor="#3D5A6E" floodOpacity="0.08" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="#F5F1EB" />
      <rect x="0" y="27.5" width="91" height="27.5" fill="url(#nordic-lake-back-water)" />
      <line x1="0" y1="27.5" x2="91" y2="27.5" stroke="#5B7B94" strokeWidth="0.3" opacity="0.12" />
      {/* Ripples */}
      <path d="M10,32 Q32,31 54,32.5 Q76,34 88,32" fill="none" stroke="#5B7B94" strokeWidth="0.06" opacity="0.1" />
      <path d="M18,37 Q42,36 66,37.5 Q82,39 91,37" fill="none" stroke="#5B7B94" strokeWidth="0.05" opacity="0.07" />
      {data.logo && <image href={data.logo} x="74" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="10"
        y="10"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2.5"
        fill="#3D5A6E"
        filter="url(#nordic-lake-back-shadow)"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="14.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#7A99AD"
      >
        {data.companyEn}
      </text>
      <text
        x="10"
        y="19"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#95AEC0"
      >
        {data.titleJa}
      </text>
      <line x1="10" y1="22" x2="50" y2="22" stroke="#C0D0DB" strokeWidth="0.1" opacity="0.35" />
      <text
        x="10"
        y="32"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#5B7B94"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#5B7B94"
      >
        {data.email}
      </text>
      <text
        x="81"
        y="32"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#5B7B94"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="47"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#95AEC0"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 10. WOOL (毛) — Knitted wool texture
// Warm, soft, textured feel with knit-like pattern lines
// ============================================================
const woolTemplate: TemplateDefinition = {
  id: 'nordic-wool',
  name: 'WOOL',
  nameJa: '毛',
  category: 'nordic',
  designer: 'Nordic Series',
  description: '毛糸の温もり。編み目の柔らかな質感が手に伝わる。',
  accentColor: '#D4A5A5',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="nordic-wool-front-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F8F3ED" />
          <stop offset="100%" stopColor="#F5EFE8" />
        </linearGradient>
        <pattern id="nordic-wool-front-knit" x="0" y="0" width="6" height="8" patternUnits="userSpaceOnUse">
          <path d="M1,0 L3,3.5 L5,0" fill="none" stroke="#D4A5A5" strokeWidth="0.25" opacity="0.12" />
          <path d="M1,4 L3,7.5 L5,4" fill="none" stroke="#B09090" strokeWidth="0.25" opacity="0.1" />
        </pattern>
        <filter id="nordic-wool-texture">
          <feTurbulence type="fractalNoise" baseFrequency="1.5" numOctaves="5" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="multiply" />
        </filter>
        <filter id="nordic-wool-shadow">
          <feDropShadow dx="0" dy="0.2" stdDeviation="0.4" floodColor="#6B5050" floodOpacity="0.12" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#nordic-wool-front-bg)" />
      {/* Knit pattern band at top */}
      <rect x="0" y="0" width="91" height="12" fill="url(#nordic-wool-front-knit)" />
      {/* Yarn accent line */}
      <path d="M0,12.5 Q22,11 45.5,13 Q68,15 91,12.5" fill="none" stroke="#D4A5A5" strokeWidth="0.2" opacity="0.25" />
      {/* Wool fiber dots */}
      <circle cx="82" cy="25" r="0.3" fill="#D4A5A5" opacity="0.12" />
      <circle cx="78" cy="42" r="0.25" fill="#B09090" opacity="0.1" />
      <circle cx="85" cy="48" r="0.2" fill="#D4A5A5" opacity="0.08" />
      {data.logo && <image href={data.logo} x="74" y="38" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="12"
        y="24"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="6"
        letterSpacing="0.5"
        fill="#6B5050"
        filter="url(#nordic-wool-shadow)"
      >
        {data.nameJa}
      </text>
      <text
        x="12"
        y="30"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.25"
        fill="#A08080"
      >
        {data.nameEn}
      </text>
      <text
        x="12"
        y="38"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.8"
        fill="#B09898"
      >
        {data.titleJa}
      </text>
      <text
        x="12"
        y="45"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#C8B0B0"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="nordic-wool-back-bg" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#F8F3ED" />
          <stop offset="100%" stopColor="#F5EFE8" />
        </linearGradient>
        <pattern id="nordic-wool-back-knit" x="0" y="0" width="6" height="8" patternUnits="userSpaceOnUse">
          <path d="M1,0 L3,3.5 L5,0" fill="none" stroke="#D4A5A5" strokeWidth="0.25" opacity="0.1" />
          <path d="M1,4 L3,7.5 L5,4" fill="none" stroke="#B09090" strokeWidth="0.25" opacity="0.08" />
        </pattern>
        <filter id="nordic-wool-back-texture">
          <feTurbulence type="fractalNoise" baseFrequency="1.5" numOctaves="5" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="multiply" />
        </filter>
        <filter id="nordic-wool-back-shadow">
          <feDropShadow dx="0" dy="0.2" stdDeviation="0.3" floodColor="#6B5050" floodOpacity="0.1" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#nordic-wool-back-bg)" />
      {/* Knit pattern band at bottom */}
      <rect x="0" y="43" width="91" height="12" fill="url(#nordic-wool-back-knit)" />
      {/* Yarn accent line */}
      <path d="M0,42.5 Q22,44 45.5,42 Q68,40 91,42.5" fill="none" stroke="#D4A5A5" strokeWidth="0.2" opacity="0.2" />
      {/* Wool fiber dots */}
      <circle cx="8" cy="35" r="0.25" fill="#D4A5A5" opacity="0.1" />
      <circle cx="5" cy="12" r="0.2" fill="#B09090" opacity="0.08" />
      {data.logo && <image href={data.logo} x="8" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text
        x="79"
        y="12"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#6B5050"
        filter="url(#nordic-wool-back-shadow)"
      >
        {data.companyJa}
      </text>
      <text
        x="79"
        y="16.5"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#A08080"
      >
        {data.companyEn}
      </text>
      <text
        x="79"
        y="21"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#B09898"
      >
        {data.titleJa}
      </text>
      <line x1="35" y1="24" x2="79" y2="24" stroke="#D4C0C0" strokeWidth="0.1" opacity="0.4" />
      <text
        x="79"
        y="29"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#806060"
      >
        {data.tel}
      </text>
      <text
        x="79"
        y="33"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#806060"
      >
        {data.email}
      </text>
      <text
        x="79"
        y="37"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#806060"
      >
        {data.website}
      </text>
      <text
        x="79"
        y="46"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#C8B0B0"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

export const nordicTemplates: TemplateDefinition[] = [
  fjordTemplate,
  hyggeTemplate,
  birchTemplate,
  frostTemplate,
  tundraTemplate,
  auroraNTemplate,
  cabinTemplate,
  pineTemplate,
  lakeTemplate,
  woolTemplate,
];
