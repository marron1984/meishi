import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. FOLD (折) — Irma Boom
// ============================================================
const foldTemplate: TemplateDefinition = {
  id: 'fold',
  name: 'FOLD',
  nameJa: '折',
  category: 'experimental',
  designer: 'Irma Boom',
  description: '折り目が紙の記憶を語る。対角線が空間を二つの世界に分断する。',
  accentColor: '#5B4A3F',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="exp-fold-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F7F2ED" />
          <stop offset="46%" stopColor="#F5F0EB" />
          <stop offset="50%" stopColor="#E0D5C8" />
          <stop offset="54%" stopColor="#EDE6DF" />
          <stop offset="100%" stopColor="#EBE4DC" />
        </linearGradient>
        <linearGradient id="exp-fold-accent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5B4A3F" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#8B7B6B" stopOpacity="0.03" />
        </linearGradient>
        <filter id="exp-fold-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" result="noise" />
          <feColorMatrix in="noise" type="saturate" values="0" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
        </filter>
        <filter id="exp-fold-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.4" result="blur" />
          <feOffset dx="0.2" dy="0.3" result="off" />
          <feFlood floodColor="#5B4A3F" floodOpacity="0.15" result="color" />
          <feComposite in="color" in2="off" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#exp-fold-bg)" />
      <rect width="91" height="55" fill="url(#exp-fold-accent)" />
      {/* Crease lines */}
      <line x1="0" y1="0" x2="91" y2="55" stroke="#A89888" strokeWidth="0.12" opacity="0.4" />
      <line x1="0" y1="0" x2="91" y2="55" stroke="#C8B8A8" strokeWidth="0.3" />
      <line x1="0.4" y1="0" x2="91.4" y2="55" stroke="#D8CCC0" strokeWidth="0.15" />
      {/* Decorative fold marks */}
      <circle cx="22.75" cy="13.75" r="0.4" fill="none" stroke="#C8B8A8" strokeWidth="0.1" opacity="0.4" />
      <circle cx="68.25" cy="41.25" r="0.4" fill="none" stroke="#C8B8A8" strokeWidth="0.1" opacity="0.4" />
      <path d="M0,0 L14,0 L0,8.5 Z" fill="#5B4A3F" opacity="0.04" />
      <path d="M91,55 L77,55 L91,46.5 Z" fill="#5B4A3F" opacity="0.04" />
      {/* Upper-left content */}
      <text x="8" y="18" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="6.5" letterSpacing="0.3" fill="#5B4A3F" filter="url(#exp-fold-shadow)">{data.nameJa}</text>
      <text x="8" y="24.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#8B7B6B">{data.titleJa}</text>
      {/* Lower-right content */}
      <text x="83" y="39" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2.2" letterSpacing="0.3" fill="#5B4A3F">{data.nameEn}</text>
      <text x="83" y="44" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.5" fill="#8B7B6B">{data.titleEn}</text>
      {data.logo && <image href={data.logo} x="75" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="exp-fold-bgb" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EDE6DF" />
          <stop offset="46%" stopColor="#EDE6DF" />
          <stop offset="50%" stopColor="#D0C4B4" />
          <stop offset="54%" stopColor="#F5F0EB" />
          <stop offset="100%" stopColor="#F5F0EB" />
        </linearGradient>
        <filter id="exp-fold-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" result="noise" />
          <feColorMatrix in="noise" type="saturate" values="0" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
        </filter>
        <filter id="exp-fold-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" result="blur" />
          <feOffset dx="-0.2" dy="0.2" result="off" />
          <feFlood floodColor="#5B4A3F" floodOpacity="0.12" result="color" />
          <feComposite in="color" in2="off" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#exp-fold-bgb)" />
      {/* Reverse crease */}
      <line x1="91" y1="0" x2="0" y2="55" stroke="#C8B8A8" strokeWidth="0.3" />
      <line x1="91.4" y1="0" x2="0.4" y2="55" stroke="#D8CCC0" strokeWidth="0.15" />
      <line x1="90.6" y1="0" x2="-0.4" y2="55" stroke="#A89888" strokeWidth="0.1" opacity="0.4" />
      {/* Decorative corner folds */}
      <path d="M91,0 L77,0 L91,8.5 Z" fill="#5B4A3F" opacity="0.04" />
      <path d="M0,55 L14,55 L0,46.5 Z" fill="#5B4A3F" opacity="0.04" />
      <circle cx="45.5" cy="27.5" r="0.3" fill="#C8B8A8" opacity="0.4" />
      {data.logo && <image href={data.logo} x="7" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Upper-right: company */}
      <text x="83" y="13" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#5B4A3F">{data.companyJa}</text>
      <text x="83" y="17.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#8B7B6B">{data.companyEn}</text>
      <text x="83" y="22" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#A89888">{data.titleJa}</text>
      {/* Lower-left: contact */}
      <text x="7" y="34" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#5B4A3F">{data.tel}</text>
      <text x="7" y="37.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#5B4A3F">{data.email}</text>
      <text x="7" y="41" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#8B7B6B">{data.website}</text>
      <text x="7" y="48" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#A89888">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 2. TRANSPARENT (透) — Tokujin Yoshioka
// ============================================================
const transparentTemplate: TemplateDefinition = {
  id: 'transparent',
  name: 'TRANSPARENT',
  nameJa: '透',
  category: 'experimental',
  designer: 'Tokujin Yoshioka',
  description: '透明な色面が重なり合い、光のような深度を生み出す。',
  accentColor: '#0088CC',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="exp-trans-glow" cx="0.5" cy="0.4" r="0.7">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#EEF4FA" />
        </radialGradient>
        <filter id="exp-trans-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" result="noise" />
          <feColorMatrix in="noise" type="saturate" values="0" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="soft-light" />
        </filter>
        <filter id="exp-trans-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.6" result="blur" />
          <feOffset dx="0" dy="0.5" result="off" />
          <feFlood floodColor="#003366" floodOpacity="0.18" result="color" />
          <feComposite in="color" in2="off" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="exp-trans-bar" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0088CC" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#CC3388" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#44BB66" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#exp-trans-glow)" />
      {/* Translucent layers */}
      <rect x="3" y="2" width="32" height="24" rx="2" fill="#0088CC" opacity="0.22" />
      <rect x="22" y="8" width="28" height="20" rx="2" fill="#CC3388" opacity="0.18" />
      <rect x="12" y="18" width="26" height="16" rx="2" fill="#44BB66" opacity="0.2" />
      <rect x="48" y="3" width="22" height="18" rx="2" fill="#FFAA00" opacity="0.25" />
      <rect x="58" y="14" width="28" height="22" rx="2" fill="#6644CC" opacity="0.16" />
      {/* Smaller floating shards */}
      <rect x="40" y="1" width="10" height="7" rx="1" fill="#0088CC" opacity="0.1" />
      <rect x="72" y="34" width="14" height="10" rx="1" fill="#CC3388" opacity="0.12" />
      <circle cx="8" cy="48" r="4" fill="#44BB66" opacity="0.08" />
      {/* Prismatic bar */}
      <rect x="0" y="44" width="91" height="0.4" fill="url(#exp-trans-bar)" />
      {/* Name */}
      <text x="45.5" y="33" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6.5" letterSpacing="0.5" fill="#1a1a1a" filter="url(#exp-trans-shadow)">{data.nameJa}</text>
      <text x="45.5" y="39" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.3" fill="#444444">{data.nameEn}</text>
      <text x="45.5" y="43.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#888888">{data.titleJa}</text>
      {data.logo && <image href={data.logo} x="4" y="44" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="exp-trans-glowb" cx="0.5" cy="0.5" r="0.8">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F0F5FA" />
        </radialGradient>
        <filter id="exp-trans-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
          <feColorMatrix in="noise" type="saturate" values="0" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="soft-light" />
        </filter>
        <filter id="exp-trans-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.4" result="blur" />
          <feOffset dx="0" dy="0.3" result="off" />
          <feFlood floodColor="#003366" floodOpacity="0.12" result="color" />
          <feComposite in="color" in2="off" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#exp-trans-glowb)" />
      <rect x="-5" y="-5" width="42" height="32" rx="3" fill="#0088CC" opacity="0.1" />
      <rect x="28" y="14" width="38" height="28" rx="3" fill="#CC3388" opacity="0.1" />
      <rect x="52" y="-3" width="42" height="28" rx="3" fill="#FFAA00" opacity="0.14" />
      <rect x="8" y="28" width="32" height="26" rx="3" fill="#44BB66" opacity="0.1" />
      <rect x="58" y="26" width="36" height="28" rx="3" fill="#6644CC" opacity="0.08" />
      {data.logo && <image href={data.logo} x="41.5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="45.5" y="18" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.8" fill="#1a1a1a">{data.companyJa}</text>
      <text x="45.5" y="22.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.6" fill="#666666">{data.companyEn}</text>
      <text x="45.5" y="26.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#888888">{data.titleJa}</text>
      <rect x="20" y="29" width="51" height="0.15" fill="#0088CC" opacity="0.3" />
      <text x="45.5" y="33.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#555555">{data.tel}</text>
      <text x="45.5" y="37.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#555555">{data.email}</text>
      <text x="45.5" y="41.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#555555">{data.website}</text>
      <rect x="20" y="44" width="51" height="0.15" fill="#CC3388" opacity="0.3" />
      <text x="45.5" y="49" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#999999">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 3. CUT (切) — Stefan Sagmeister
// ============================================================
const cutTemplate: TemplateDefinition = {
  id: 'cut',
  name: 'CUT',
  nameJa: '切',
  category: 'experimental',
  designer: 'Stefan Sagmeister',
  description: '型抜きされた穴が情報を露出させる。物理的不在が存在を語る。',
  accentColor: '#E63946',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="exp-cut-bg" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#EC4B55" />
          <stop offset="100%" stopColor="#D42D3A" />
        </linearGradient>
        <filter id="exp-cut-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" result="noise" />
          <feColorMatrix in="noise" type="saturate" values="0" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
        </filter>
        <filter id="exp-cut-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.5" result="blur" />
          <feOffset dx="0.15" dy="0.3" result="off" />
          <feFlood floodColor="#000000" floodOpacity="0.25" result="color" />
          <feComposite in="color" in2="off" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#exp-cut-bg)" />
      {/* Die-cut windows */}
      <rect x="6" y="4" width="28" height="11" rx="3" fill="#ffffff" filter="url(#exp-cut-shadow)" />
      <rect x="38" y="4" width="16" height="11" rx="3" fill="#ffffff" />
      <rect x="6" y="19" width="20" height="6.5" rx="2" fill="#ffffff" />
      <rect x="30" y="19" width="12" height="6.5" rx="2" fill="#ffffff" />
      <circle cx="62" cy="9.5" r="5.5" fill="#ffffff" />
      <circle cx="77" cy="9.5" r="3.8" fill="#ffffff" />
      <circle cx="85" cy="9.5" r="2" fill="#ffffff" />
      {/* Name in cutouts */}
      <text x="20" y="12" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="5" fill="#E63946">{data.nameJa}</text>
      <text x="46" y="12" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2.2" fill="#E63946">{data.nameEn}</text>
      <text x="16" y="23.8" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#E63946">{data.titleJa}</text>
      {/* On-red content */}
      <text x="8" y="33" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.6" fill="rgba(255,255,255,0.92)">{data.tel}</text>
      <text x="8" y="37" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.6" fill="rgba(255,255,255,0.92)">{data.email}</text>
      {/* Fading dot row */}
      {[0,1,2,3,4,5,6].map(i => <circle key={`cut-dot-${i}`} cx={8 + i * 6} cy="49" r="1.3" fill="#ffffff" opacity={0.4 - i * 0.05} />)}
      {data.logo && <image href={data.logo} x="75" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="exp-cut-bgb" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#EC4B55" />
          <stop offset="100%" stopColor="#CC2233" />
        </linearGradient>
        <filter id="exp-cut-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" result="noise" />
          <feColorMatrix in="noise" type="saturate" values="0" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
        </filter>
        <filter id="exp-cut-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.6" result="blur" />
          <feOffset dx="0.2" dy="0.4" result="off" />
          <feFlood floodColor="#000000" floodOpacity="0.2" result="color" />
          <feComposite in="color" in2="off" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#exp-cut-bgb)" />
      {/* Large central window */}
      <rect x="10" y="8" width="71" height="22" rx="5" fill="#ffffff" filter="url(#exp-cut-shadow-b)" />
      <text x="45.5" y="18" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="3" fill="#E63946">{data.companyJa}</text>
      <text x="45.5" y="24" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.3" fill="#E63946">{data.companyEn}</text>
      {/* Title row */}
      <rect x="25" y="33" width="41" height="5" rx="2" fill="#ffffff" opacity="0.9" />
      <text x="45.5" y="36.8" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#E63946">{data.titleJa}</text>
      {/* Address window */}
      <rect x="10" y="40" width="71" height="8" rx="2.5" fill="#ffffff" />
      <text x="45.5" y="44.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#E63946">{data.tel} | {data.email}</text>
      <text x="45.5" y="47" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#E63946">{data.website}</text>
      {/* Address on red */}
      <text x="45.5" y="53" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="rgba(255,255,255,0.7)">〒{data.zipCode} {data.addressJa}</text>
      {/* Decorative dots corners */}
      <circle cx="6" cy="5" r="1" fill="#ffffff" opacity="0.3" />
      <circle cx="85" cy="5" r="1" fill="#ffffff" opacity="0.3" />
      <circle cx="6" cy="50" r="1" fill="#ffffff" opacity="0.3" />
      <circle cx="85" cy="50" r="1" fill="#ffffff" opacity="0.3" />
      {data.logo && <image href={data.logo} x="41.5" y="10" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 4. GRADIENT-EXP (虹) — Olafur Eliasson
// ============================================================
const gradientExpTemplate: TemplateDefinition = {
  id: 'gradient-exp',
  name: 'GRADIENT-EXP',
  nameJa: '虹',
  category: 'experimental',
  designer: 'Olafur Eliasson',
  description: '虹のスペクトラムが名刺を光の体験に変える。色彩の連続体。',
  accentColor: '#FF6B35',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="exp-grad-front" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF6B35" />
          <stop offset="18%" stopColor="#F7C948" />
          <stop offset="36%" stopColor="#88D498" />
          <stop offset="54%" stopColor="#44B8D5" />
          <stop offset="72%" stopColor="#6C63FF" />
          <stop offset="100%" stopColor="#C850C0" />
        </linearGradient>
        <linearGradient id="exp-grad-overlay" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.08" />
        </linearGradient>
        <filter id="exp-grad-texture">
          <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="3" result="noise" />
          <feColorMatrix in="noise" type="saturate" values="0" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="soft-light" />
        </filter>
        <filter id="exp-grad-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.7" result="blur" />
          <feOffset dx="0" dy="0.5" result="off" />
          <feFlood floodColor="#000000" floodOpacity="0.3" result="color" />
          <feComposite in="color" in2="off" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#exp-grad-front)" />
      <rect width="91" height="55" fill="url(#exp-grad-overlay)" />
      {/* Light refraction lines */}
      <line x1="0" y1="20" x2="91" y2="18" stroke="#ffffff" strokeWidth="0.15" opacity="0.15" />
      <line x1="0" y1="38" x2="91" y2="40" stroke="#ffffff" strokeWidth="0.1" opacity="0.1" />
      {/* Spectral circles */}
      <circle cx="78" cy="8" r="6" fill="#ffffff" opacity="0.06" />
      <circle cx="82" cy="12" r="3" fill="#ffffff" opacity="0.05" />
      <circle cx="12" cy="48" r="4" fill="#ffffff" opacity="0.05" />
      <text x="8" y="17" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="7" letterSpacing="0.3" fill="#ffffff" filter="url(#exp-grad-shadow)">{data.nameJa}</text>
      <text x="8" y="24" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2.2" letterSpacing="0.3" fill="rgba(255,255,255,0.92)">{data.nameEn}</text>
      <text x="8" y="30" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="rgba(255,255,255,0.8)">{data.titleJa}</text>
      <text x="8" y="40" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="rgba(255,255,255,0.85)">{data.tel}</text>
      <text x="8" y="44" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="rgba(255,255,255,0.85)">{data.email}</text>
      {data.logo && <image href={data.logo} x="75" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="exp-grad-back" x1="1" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#FF6B35" />
          <stop offset="14%" stopColor="#FF3864" />
          <stop offset="32%" stopColor="#C850C0" />
          <stop offset="50%" stopColor="#6C63FF" />
          <stop offset="68%" stopColor="#44B8D5" />
          <stop offset="86%" stopColor="#88D498" />
          <stop offset="100%" stopColor="#F7C948" />
        </linearGradient>
        <filter id="exp-grad-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="1.0" numOctaves="3" result="noise" />
          <feColorMatrix in="noise" type="saturate" values="0" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="soft-light" />
        </filter>
        <filter id="exp-grad-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.5" result="blur" />
          <feOffset dx="0" dy="0.4" result="off" />
          <feFlood floodColor="#000000" floodOpacity="0.25" result="color" />
          <feComposite in="color" in2="off" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#exp-grad-back)" />
      <rect x="10" y="8" width="71" height="39" rx="3" fill="#000000" opacity="0.2" />
      {/* Light specks */}
      <circle cx="14" cy="12" r="0.5" fill="#ffffff" opacity="0.2" />
      <circle cx="77" cy="42" r="0.5" fill="#ffffff" opacity="0.2" />
      <circle cx="45.5" cy="9" r="0.3" fill="#ffffff" opacity="0.15" />
      {data.logo && <image href={data.logo} x="41.5" y="11" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="45.5" y="26" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="3.5" fill="#ffffff">{data.companyJa}</text>
      <text x="45.5" y="31" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.4" fill="rgba(255,255,255,0.85)">{data.companyEn}</text>
      <text x="45.5" y="35" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="rgba(255,255,255,0.65)">{data.titleJa}</text>
      <line x1="20" y1="37" x2="71" y2="37" stroke="#ffffff" strokeWidth="0.1" opacity="0.25" />
      <text x="45.5" y="40.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(255,255,255,0.7)">{data.tel} | {data.email}</text>
      <text x="45.5" y="44" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(255,255,255,0.6)">{data.website}</text>
      <text x="45.5" y="51" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="rgba(255,255,255,0.45)">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 5. DIMENSION (奥) — Zaha Hadid
// ============================================================
const dimensionTemplate: TemplateDefinition = {
  id: 'dimension',
  name: 'DIMENSION',
  nameJa: '奥',
  category: 'experimental',
  designer: 'Zaha Hadid',
  description: '平面に奥行きを錯視させる。建築的パースペクティブが名刺を立体に。',
  accentColor: '#2D3436',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="exp-dim-depth" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#F0F0F0" />
          <stop offset="100%" stopColor="#C8C8C8" />
        </linearGradient>
        <linearGradient id="exp-dim-floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E0E0E0" />
          <stop offset="100%" stopColor="#D0D0D0" />
        </linearGradient>
        <filter id="exp-dim-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="4" result="noise" />
          <feColorMatrix in="noise" type="saturate" values="0" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
        </filter>
        <filter id="exp-dim-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.5" result="blur" />
          <feOffset dx="0.3" dy="0.6" result="off" />
          <feFlood floodColor="#2D3436" floodOpacity="0.2" result="color" />
          <feComposite in="color" in2="off" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#FAFAFA" />
      {/* Perspective room */}
      <polygon points="25,8 70,8 65,20 30,20" fill="#E8E8E8" />
      <polygon points="25,8 30,20 30,42 18,48" fill="#D8D8D8" />
      <polygon points="70,8 65,20 65,42 77,48" fill="url(#exp-dim-depth)" />
      <polygon points="30,42 65,42 77,48 18,48" fill="url(#exp-dim-floor)" />
      {/* Vanishing point guides */}
      <line x1="47.5" y1="0" x2="47.5" y2="14" stroke="#2D3436" strokeWidth="0.2" opacity="0.2" />
      <line x1="47.5" y1="14" x2="0" y2="55" stroke="#2D3436" strokeWidth="0.1" opacity="0.1" />
      <line x1="47.5" y1="14" x2="91" y2="55" stroke="#2D3436" strokeWidth="0.1" opacity="0.1" />
      {/* Structural beam */}
      <polygon points="30,25 65,25 67,27 28,27" fill="#2D3436" opacity="0.1" />
      {/* Small architectural accent */}
      <rect x="43" y="8" width="9" height="0.5" fill="#2D3436" opacity="0.08" />
      <text x="47.5" y="36" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="5.5" letterSpacing="0.4" fill="#2D3436" filter="url(#exp-dim-shadow)">{data.nameJa}</text>
      <text x="47.5" y="42" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.2" fill="#666666">{data.nameEn}</text>
      <text x="47.5" y="52" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#999999">{data.titleJa}</text>
      {data.logo && <image href={data.logo} x="4" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="exp-dim-bgb" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2D3436" />
          <stop offset="100%" stopColor="#636E72" />
        </linearGradient>
        <filter id="exp-dim-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.4" numOctaves="4" result="noise" />
          <feColorMatrix in="noise" type="saturate" values="0" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="screen" />
        </filter>
        <filter id="exp-dim-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.4" result="blur" />
          <feOffset dx="0.2" dy="0.3" result="off" />
          <feFlood floodColor="#000000" floodOpacity="0.35" result="color" />
          <feComposite in="color" in2="off" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#exp-dim-bgb)" />
      {/* Perspective grid */}
      <line x1="45.5" y1="0" x2="0" y2="55" stroke="#ffffff" strokeWidth="0.15" opacity="0.1" />
      <line x1="45.5" y1="0" x2="91" y2="55" stroke="#ffffff" strokeWidth="0.15" opacity="0.1" />
      <line x1="45.5" y1="0" x2="20" y2="55" stroke="#ffffff" strokeWidth="0.08" opacity="0.06" />
      <line x1="45.5" y1="0" x2="71" y2="55" stroke="#ffffff" strokeWidth="0.08" opacity="0.06" />
      <line x1="30" y1="15" x2="61" y2="15" stroke="#ffffff" strokeWidth="0.08" opacity="0.12" />
      <line x1="22" y1="25" x2="69" y2="25" stroke="#ffffff" strokeWidth="0.08" opacity="0.1" />
      <line x1="14" y1="35" x2="77" y2="35" stroke="#ffffff" strokeWidth="0.08" opacity="0.08" />
      {data.logo && <image href={data.logo} x="41.5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* 3D text shadow */}
      <text x="46" y="19.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="3" fill="rgba(255,255,255,0.2)">{data.companyJa}</text>
      <text x="45.5" y="19" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="3" fill="#ffffff">{data.companyJa}</text>
      <text x="45.5" y="24.5" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.8" letterSpacing="0.3" fill="rgba(255,255,255,0.7)">{data.companyEn}</text>
      <text x="45.5" y="28.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="rgba(255,255,255,0.5)">{data.titleJa}</text>
      <text x="45.5" y="36" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(255,255,255,0.6)">{data.tel} | {data.email}</text>
      <text x="45.5" y="40" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(255,255,255,0.5)">{data.website}</text>
      <text x="45.5" y="49" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="rgba(255,255,255,0.3)">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 6. MIRROR (鏡) — Anish Kapoor
// ============================================================
const mirrorTemplate: TemplateDefinition = {
  id: 'mirror',
  name: 'MIRROR',
  nameJa: '鏡',
  category: 'experimental',
  designer: 'Anish Kapoor',
  description: '鏡像が自己を問い直す。反転されたテキストが存在の二重性を示す。',
  accentColor: '#1B1B2F',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="exp-mirror-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F8F8FC" />
          <stop offset="44%" stopColor="#F5F5FA" />
          <stop offset="50%" stopColor="#D8D8E4" />
          <stop offset="56%" stopColor="#ECECF2" />
          <stop offset="100%" stopColor="#E8E8F0" />
        </linearGradient>
        <clipPath id="exp-mirror-clip">
          <rect x="0" y="28" width="91" height="27" />
        </clipPath>
        <filter id="exp-mirror-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
          <feColorMatrix in="noise" type="saturate" values="0" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
        </filter>
        <filter id="exp-mirror-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.5" result="blur" />
          <feOffset dx="0" dy="0.4" result="off" />
          <feFlood floodColor="#1B1B2F" floodOpacity="0.15" result="color" />
          <feComposite in="color" in2="off" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#exp-mirror-bg)" />
      {/* Mirror axis */}
      <line x1="0" y1="27.5" x2="91" y2="27.5" stroke="#B0B0C0" strokeWidth="0.25" />
      <line x1="0" y1="27.5" x2="91" y2="27.5" stroke="#D0D0DD" strokeWidth="0.8" opacity="0.15" />
      {/* Decorative edge marks */}
      <rect x="0" y="27" width="3" height="1" fill="#1B1B2F" opacity="0.08" />
      <rect x="88" y="27" width="3" height="1" fill="#1B1B2F" opacity="0.08" />
      <circle cx="45.5" cy="4" r="0.4" fill="#1B1B2F" opacity="0.1" />
      {/* Original text */}
      <text x="45.5" y="16" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="6.5" letterSpacing="0.5" fill="#1B1B2F" filter="url(#exp-mirror-shadow)">{data.nameJa}</text>
      <text x="45.5" y="23" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2.2" letterSpacing="0.3" fill="#555566">{data.nameEn}</text>
      {/* Reflected text */}
      <g clipPath="url(#exp-mirror-clip)">
        <text x="45.5" y="16" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="6.5" letterSpacing="0.5" fill="#1B1B2F" opacity="0.12" transform="scale(1,-1) translate(0,-55)">{data.nameJa}</text>
        <text x="45.5" y="23" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2.2" letterSpacing="0.3" fill="#555566" opacity="0.08" transform="scale(1,-1) translate(0,-55)">{data.nameEn}</text>
      </g>
      <text x="45.5" y="49" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#9999AA">{data.titleJa}</text>
      {data.logo && <image href={data.logo} x="4" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="exp-mirror-bgb" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1B1B2F" />
          <stop offset="46%" stopColor="#1B1B2F" />
          <stop offset="50%" stopColor="#2E2E48" />
          <stop offset="100%" stopColor="#24243A" />
        </linearGradient>
        <filter id="exp-mirror-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" result="noise" />
          <feColorMatrix in="noise" type="saturate" values="0" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="screen" />
        </filter>
        <filter id="exp-mirror-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" result="blur" />
          <feOffset dx="0" dy="0.2" result="off" />
          <feFlood floodColor="#000000" floodOpacity="0.3" result="color" />
          <feComposite in="color" in2="off" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#exp-mirror-bgb)" />
      <line x1="0" y1="27.5" x2="91" y2="27.5" stroke="#444466" strokeWidth="0.2" />
      {/* Decorative edge glows */}
      <rect x="0" y="27" width="91" height="1" fill="#6666AA" opacity="0.05" />
      <circle cx="5" cy="5" r="0.4" fill="#ffffff" opacity="0.1" />
      <circle cx="86" cy="50" r="0.4" fill="#ffffff" opacity="0.1" />
      {data.logo && <image href={data.logo} x="41.5" y="2" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="45.5" y="16" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="3" fill="#ffffff">{data.companyJa}</text>
      <text x="45.5" y="21" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.8" fill="rgba(255,255,255,0.6)">{data.companyEn}</text>
      <text x="45.5" y="25" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="rgba(255,255,255,0.4)">{data.titleJa}</text>
      {/* Contact below axis */}
      <text x="45.5" y="34" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(255,255,255,0.5)">{data.tel}</text>
      <text x="45.5" y="38" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(255,255,255,0.5)">{data.email}</text>
      <text x="45.5" y="42" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(255,255,255,0.4)">{data.website}</text>
      <text x="45.5" y="50" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.1" fill="rgba(255,255,255,0.22)">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 7. SCAN (走) — Nam June Paik
// ============================================================
const scanTemplate: TemplateDefinition = {
  id: 'scan',
  name: 'SCAN',
  nameJa: '走',
  category: 'experimental',
  designer: 'Nam June Paik',
  description: '走査線がブラウン管の記憶を呼び起こす。ビデオアートの脈動。',
  accentColor: '#00FF88',
  renderFront: (data: CardData) => {
    const scanLines: React.ReactNode[] = [];
    for (let i = 0; i < 55; i += 1.5) {
      scanLines.push(
        <line key={`scan-f-${i}`} x1="0" y1={i} x2="91" y2={i} stroke="#00FF88" strokeWidth="0.3" opacity={0.05 + (i % 4.5 === 0 ? 0.08 : 0)} />
      );
    }
    return (
      <g>
        <defs>
          <radialGradient id="exp-scan-vignette" cx="0.5" cy="0.5" r="0.7">
            <stop offset="0%" stopColor="#0D0D18" />
            <stop offset="100%" stopColor="#050510" />
          </radialGradient>
          <filter id="exp-scan-texture">
            <feTurbulence type="fractalNoise" baseFrequency="1.5" numOctaves="2" result="noise" />
            <feColorMatrix in="noise" type="saturate" values="0" result="mono" />
            <feBlend in="SourceGraphic" in2="mono" mode="screen" />
          </filter>
          <filter id="exp-scan-shadow">
            <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur" />
            <feOffset dx="0" dy="0" result="off" />
            <feFlood floodColor="#00FF88" floodOpacity="0.3" result="color" />
            <feComposite in="color" in2="off" operator="in" result="shadow" />
            <feMerge>
              <feMergeNode in="shadow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect width="91" height="55" fill="url(#exp-scan-vignette)" />
        {scanLines}
        {/* Phosphor glow bands */}
        <rect x="0" y="12" width="91" height="8" fill="#00FF88" opacity="0.025" />
        <rect x="0" y="30" width="91" height="6" fill="#00FF88" opacity="0.02" />
        {/* CRT corner darkening */}
        <rect x="0" y="0" width="6" height="6" fill="#000000" opacity="0.15" rx="2" />
        <rect x="85" y="0" width="6" height="6" fill="#000000" opacity="0.15" rx="2" />
        <rect x="0" y="49" width="6" height="6" fill="#000000" opacity="0.15" rx="2" />
        <rect x="85" y="49" width="6" height="6" fill="#000000" opacity="0.15" rx="2" />
        {/* Glitch name layers */}
        <text x="9" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6.5" fill="#00FF88" opacity="0.15">{data.nameJa}</text>
        <text x="8" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6.5" fill="#00FF88" filter="url(#exp-scan-shadow)">{data.nameJa}</text>
        <text x="8.4" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6.5" fill="#FF0044" opacity="0.07">{data.nameJa}</text>
        <text x="8" y="27" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="2.2" letterSpacing="0.3" fill="#00DD77">{data.nameEn}</text>
        <text x="8" y="33" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#00AA55">{data.titleJa}</text>
        <rect x="8" y="40" width="1" height="3" fill="#00FF88" opacity="0.8" />
        <text x="12" y="42.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.5" fill="#00BB66">{data.tel}</text>
        <text x="12" y="46.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.5" fill="#00BB66">{data.email}</text>
        {data.logo && <image href={data.logo} x="75" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      </g>
    );
  },
  renderBack: (data: CardData) => {
    const scanLines: React.ReactNode[] = [];
    for (let i = 0; i < 55; i += 1.5) {
      scanLines.push(
        <line key={`scan-b-${i}`} x1="0" y1={i} x2="91" y2={i} stroke="#00FF88" strokeWidth="0.3" opacity={0.04 + (i % 6 === 0 ? 0.06 : 0)} />
      );
    }
    return (
      <g>
        <defs>
          <filter id="exp-scan-texture-b">
            <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="2" result="noise" />
            <feColorMatrix in="noise" type="saturate" values="0" result="mono" />
            <feBlend in="SourceGraphic" in2="mono" mode="screen" />
          </filter>
          <filter id="exp-scan-shadow-b">
            <feGaussianBlur in="SourceAlpha" stdDeviation="0.8" result="blur" />
            <feOffset dx="0" dy="0" result="off" />
            <feFlood floodColor="#00FF88" floodOpacity="0.2" result="color" />
            <feComposite in="color" in2="off" operator="in" result="shadow" />
            <feMerge>
              <feMergeNode in="shadow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect width="91" height="55" fill="#0A0A12" />
        {scanLines}
        <rect x="0" y="22" width="91" height="2" fill="#00FF88" opacity="0.03" />
        {/* CRT corners */}
        <rect x="0" y="0" width="5" height="5" fill="#000000" opacity="0.15" rx="2" />
        <rect x="86" y="0" width="5" height="5" fill="#000000" opacity="0.15" rx="2" />
        <rect x="0" y="50" width="5" height="5" fill="#000000" opacity="0.15" rx="2" />
        <rect x="86" y="50" width="5" height="5" fill="#000000" opacity="0.15" rx="2" />
        {data.logo && <image href={data.logo} x="41.5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
        <text x="45.5" y="18" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="3" fill="#00FF88">{data.companyJa}</text>
        <text x="45.5" y="23" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.4" fill="#00DD77">{data.companyEn}</text>
        <text x="45.5" y="27" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#00AA55">{data.titleJa}</text>
        <line x1="15" y1="30" x2="76" y2="30" stroke="#00FF88" strokeWidth="0.15" opacity="0.4" />
        <text x="45.5" y="34.5" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#00BB66">{data.tel}</text>
        <text x="45.5" y="38.5" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#00AA55">{data.email}</text>
        <text x="45.5" y="42.5" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#00AA55">{data.website}</text>
        <text x="45.5" y="48" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#008844">〒{data.zipCode} {data.addressJa}</text>
        <text x="83" y="52" textAnchor="end" fontFamily="'Space Grotesk', sans-serif" fontWeight="500" fontSize="1.2" fill="#00FF88" opacity="0.35">CH-01 NTSC</text>
      </g>
    );
  },
};

// ============================================================
// 8. THERMAL (熱) — Experimental print
// ============================================================
const thermalTemplate: TemplateDefinition = {
  id: 'thermal',
  name: 'THERMAL',
  nameJa: '熱',
  category: 'experimental',
  designer: 'Experimental Print',
  description: '感熱紙のノスタルジー。レシートの即物性が名刺の概念を裏返す。',
  accentColor: '#2C2C2C',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="exp-therm-paper" x1="0" y1="0" x2="0.1" y2="1">
          <stop offset="0%" stopColor="#F8F3EB" />
          <stop offset="100%" stopColor="#F0EADF" />
        </linearGradient>
        <filter id="exp-therm-texture">
          <feTurbulence type="fractalNoise" baseFrequency="2" numOctaves="5" result="noise" />
          <feColorMatrix in="noise" type="saturate" values="0" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
        </filter>
        <filter id="exp-therm-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" result="blur" />
          <feOffset dx="0.1" dy="0.1" result="off" />
          <feFlood floodColor="#2C2C2C" floodOpacity="0.1" result="color" />
          <feComposite in="color" in2="off" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#exp-therm-paper)" />
      {/* Thermal streaks */}
      {[3,8,14,21,28,35,42,49].map((y, i) => (
        <rect key={`therm-s-${i}`} x="0" y={y} width="91" height={0.2 + (i % 2) * 0.1} fill="#E0D8CC" opacity={0.3 + (i % 3) * 0.1} />
      ))}
      {/* Dashed separators */}
      <line x1="6" y1="5" x2="85" y2="5" stroke="#2C2C2C" strokeWidth="0.15" strokeDasharray="1 0.5" />
      <text x="45.5" y="11" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="500" fontSize="1.4" letterSpacing="0.8" fill="#2C2C2C">*** BUSINESS CARD ***</text>
      <line x1="6" y1="14" x2="85" y2="14" stroke="#2C2C2C" strokeWidth="0.15" strokeDasharray="1 0.5" />
      <text x="8" y="21" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="5.5" fill="#2C2C2C">{data.nameJa}</text>
      <text x="8" y="27" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.2" fill="#4A4A4A">{data.nameEn}</text>
      <text x="8" y="32" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#666666">{data.titleJa}</text>
      <line x1="6" y1="35" x2="85" y2="35" stroke="#2C2C2C" strokeWidth="0.15" strokeDasharray="1 0.5" />
      <text x="8" y="39.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.4" fill="#2C2C2C">TEL: {data.tel}</text>
      <text x="8" y="43" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.4" fill="#2C2C2C">MAIL: {data.email}</text>
      <text x="8" y="46.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.4" fill="#2C2C2C">WEB: {data.website}</text>
      <line x1="6" y1="49.5" x2="85" y2="49.5" stroke="#2C2C2C" strokeWidth="0.15" strokeDasharray="1 0.5" />
      <text x="45.5" y="53" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1" letterSpacing="0.3" fill="#999999">THANK YOU</text>
      {data.logo && <image href={data.logo} x="75" y="16" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="exp-therm-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="1.8" numOctaves="4" result="noise" />
          <feColorMatrix in="noise" type="saturate" values="0" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
        </filter>
        <filter id="exp-therm-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.15" result="blur" />
          <feOffset dx="0.1" dy="0.1" result="off" />
          <feFlood floodColor="#2C2C2C" floodOpacity="0.08" result="color" />
          <feComposite in="color" in2="off" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#F5F0E8" />
      {[5,12,20,30,38,46].map((y, i) => (
        <rect key={`therm-sb-${i}`} x="0" y={y} width="91" height={0.2 + (i % 2) * 0.1} fill="#E0D8CC" opacity={0.35 + (i % 3) * 0.08} />
      ))}
      <line x1="6" y1="6" x2="85" y2="6" stroke="#2C2C2C" strokeWidth="0.15" strokeDasharray="1 0.5" />
      {data.logo && <image href={data.logo} x="41.5" y="7" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="45.5" y="20" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.8" fill="#2C2C2C">{data.companyJa}</text>
      <text x="45.5" y="24.5" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.8" letterSpacing="0.3" fill="#4A4A4A">{data.companyEn}</text>
      <text x="45.5" y="28" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#666666">{data.titleJa}</text>
      <line x1="6" y1="30" x2="85" y2="30" stroke="#2C2C2C" strokeWidth="0.15" strokeDasharray="1 0.5" />
      <text x="8" y="34" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.3" fill="#2C2C2C">ZIP: {data.zipCode}</text>
      <text x="8" y="37.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#2C2C2C">{data.addressJa}</text>
      <text x="8" y="41" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.2" fill="#666666">{data.addressEn}</text>
      <line x1="6" y1="43.5" x2="85" y2="43.5" stroke="#2C2C2C" strokeWidth="0.15" strokeDasharray="1 0.5" />
      {/* Barcode */}
      {[20,22,23.5,26,28,29.5,31.5,33,35,36.5,39,41,42.5,44.5,46,48,50.5,52,54,55.5,57.5,59.5,61,63.5,65.5,67,69,70.5].map((x, i) => (
        <rect key={`therm-bar-${i}`} x={x} y="45" width={[0.8,0.4,1.2,0.6,0.4,1,0.4,0.8,0.4,1.2,0.6,0.4,1,0.4,0.8,1.2,0.4,0.6,0.4,1,0.8,0.4,1.2,0.6,0.4,1,0.4,0.8][i]} height="5" fill="#2C2C2C" />
      ))}
    </g>
  ),
};

// ============================================================
// 9. OVERPRINT (重) — Karel Martens
// ============================================================
const overprintTemplate: TemplateDefinition = {
  id: 'overprint',
  name: 'OVERPRINT',
  nameJa: '重',
  category: 'experimental',
  designer: 'Karel Martens',
  description: '版ズレの美学。赤と青の重なりが紫の第三の色を生む。',
  accentColor: '#2244AA',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="exp-over-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" result="noise" />
          <feColorMatrix in="noise" type="saturate" values="0" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
        </filter>
        <filter id="exp-over-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" result="blur" />
          <feOffset dx="0.5" dy="0.5" result="off" />
          <feFlood floodColor="#DD2244" floodOpacity="0.15" result="color" />
          <feComposite in="color" in2="off" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="exp-over-paper" x1="0" y1="0" x2="0.2" y2="1">
          <stop offset="0%" stopColor="#FAF8F2" />
          <stop offset="100%" stopColor="#F5F2EA" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#exp-over-paper)" />
      {/* Overprint layers */}
      <circle cx="30" cy="22" r="18" fill="#DD2244" opacity="0.45" />
      <circle cx="48" cy="22" r="18" fill="#2244AA" opacity="0.45" />
      <rect x="58" y="3" width="27" height="15" fill="#DD2244" opacity="0.3" />
      <rect x="63" y="9" width="24" height="15" fill="#2244AA" opacity="0.3" />
      <circle cx="78" cy="40" r="6" fill="#DD2244" opacity="0.2" />
      <rect x="70" y="36" width="14" height="8" fill="#2244AA" opacity="0.2" />
      {/* Registration marks */}
      <circle cx="4" cy="4" r="1.2" fill="none" stroke="#DD2244" strokeWidth="0.1" opacity="0.3" />
      <line x1="2.8" y1="4" x2="5.2" y2="4" stroke="#DD2244" strokeWidth="0.08" opacity="0.3" />
      <line x1="4" y1="2.8" x2="4" y2="5.2" stroke="#DD2244" strokeWidth="0.08" opacity="0.3" />
      <text x="8" y="42" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="5.5" fill="#1a1a1a" filter="url(#exp-over-shadow)">{data.nameJa}</text>
      <text x="8" y="48" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.2" fill="#2244AA">{data.nameEn}</text>
      <text x="8" y="53" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#DD2244">{data.titleJa}</text>
      {data.logo && <image href={data.logo} x="75" y="44" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="exp-over-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" result="noise" />
          <feColorMatrix in="noise" type="saturate" values="0" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
        </filter>
        <filter id="exp-over-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" result="blur" />
          <feOffset dx="0.3" dy="0.3" result="off" />
          <feFlood floodColor="#2244AA" floodOpacity="0.12" result="color" />
          <feComposite in="color" in2="off" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#F8F6F0" />
      <rect x="0" y="0" width="50" height="28" fill="#DD2244" opacity="0.35" />
      <circle cx="70" cy="35" r="20" fill="#DD2244" opacity="0.25" />
      <rect x="35" y="12" width="56" height="24" fill="#2244AA" opacity="0.35" />
      <circle cx="25" cy="40" r="15" fill="#2244AA" opacity="0.25" />
      {/* Registration mark */}
      <circle cx="87" cy="51" r="1.2" fill="none" stroke="#2244AA" strokeWidth="0.1" opacity="0.3" />
      <line x1="85.8" y1="51" x2="88.2" y2="51" stroke="#2244AA" strokeWidth="0.08" opacity="0.3" />
      <line x1="87" y1="49.8" x2="87" y2="52.2" stroke="#2244AA" strokeWidth="0.08" opacity="0.3" />
      {data.logo && <image href={data.logo} x="41.5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="45.5" y="16" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="2.8" fill="#ffffff">{data.companyJa}</text>
      <text x="45.5" y="21" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.8" letterSpacing="0.3" fill="#ffffff">{data.companyEn}</text>
      <text x="45.5" y="25" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#1a1a1a">{data.titleJa}</text>
      <text x="45.5" y="33" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#1a1a1a">{data.tel}</text>
      <text x="45.5" y="37" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#1a1a1a">{data.email}</text>
      <text x="45.5" y="41" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#1a1a1a">{data.website}</text>
      <text x="45.5" y="49" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#666666">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 10. META (己) — Metahaven
// ============================================================
const metaTemplate: TemplateDefinition = {
  id: 'meta',
  name: 'META',
  nameJa: '己',
  category: 'experimental',
  designer: 'Metahaven',
  description: '名刺が自己を記述する。メタデータとしてのアイデンティティ。',
  accentColor: '#0A0A0A',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="exp-meta-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.4" numOctaves="3" result="noise" />
          <feColorMatrix in="noise" type="saturate" values="0" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
        </filter>
        <filter id="exp-meta-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" result="blur" />
          <feOffset dx="0.1" dy="0.1" result="off" />
          <feFlood floodColor="#0A0A0A" floodOpacity="0.1" result="color" />
          <feComposite in="color" in2="off" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="exp-meta-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#FAFAFA" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#exp-meta-bg)" />
      {/* Dimension markers */}
      <line x1="0" y1="2" x2="91" y2="2" stroke="#0A0A0A" strokeWidth="0.08" />
      <line x1="0" y1="1" x2="0" y2="3" stroke="#0A0A0A" strokeWidth="0.08" />
      <line x1="91" y1="1" x2="91" y2="3" stroke="#0A0A0A" strokeWidth="0.08" />
      <text x="45.5" y="1.5" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="0.9" fill="#BBBBBB">91mm</text>
      <line x1="2" y1="0" x2="2" y2="55" stroke="#0A0A0A" strokeWidth="0.08" />
      <line x1="1" y1="0" x2="3" y2="0" stroke="#0A0A0A" strokeWidth="0.08" />
      <line x1="1" y1="55" x2="3" y2="55" stroke="#0A0A0A" strokeWidth="0.08" />
      <text x="2" y="27.5" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="0.9" fill="#BBBBBB" transform="rotate(-90, 2, 27.5)">55mm</text>
      {/* Safe zone */}
      <rect x="5" y="5" width="81" height="45" fill="none" stroke="#E0E0E0" strokeWidth="0.1" strokeDasharray="1 0.8" />
      {/* Corner ticks */}
      <line x1="5" y1="5" x2="8" y2="5" stroke="#CCCCCC" strokeWidth="0.08" />
      <line x1="5" y1="5" x2="5" y2="8" stroke="#CCCCCC" strokeWidth="0.08" />
      <line x1="83" y1="50" x2="86" y2="50" stroke="#CCCCCC" strokeWidth="0.08" />
      <line x1="86" y1="47" x2="86" y2="50" stroke="#CCCCCC" strokeWidth="0.08" />
      {/* Spec labels */}
      <text x="7" y="8" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1" fill="#BBBBBB">TYPE: MEISHI (名刺)</text>
      <text x="7" y="10.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1" fill="#BBBBBB">STANDARD: JIS X 5101</text>
      <text x="7" y="13" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1" fill="#BBBBBB">DIMENSIONS: 91 x 55 mm</text>
      <text x="7" y="15.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1" fill="#BBBBBB">SIDE: FRONT (OMOTE / 表)</text>
      {/* Data fields */}
      <text x="7" y="22" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1" fill="#999999">FIELD: name_ja</text>
      <text x="7" y="28" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="5.5" fill="#0A0A0A" filter="url(#exp-meta-shadow)">{data.nameJa}</text>
      <text x="7" y="32" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1" fill="#999999">FIELD: name_en</text>
      <text x="7" y="36" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2.2" letterSpacing="0.15" fill="#333333">{data.nameEn}</text>
      <text x="7" y="40" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1" fill="#999999">FIELD: title_ja</text>
      <text x="7" y="44" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#666666">{data.titleJa}</text>
      <text x="84" y="52" textAnchor="end" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="0.9" fill="#CCCCCC">OBJECT: business_card_v1.0</text>
      {data.logo && <image href={data.logo} x="75" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="exp-meta-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.4" numOctaves="3" result="noise" />
          <feColorMatrix in="noise" type="saturate" values="0" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
        </filter>
        <filter id="exp-meta-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.15" result="blur" />
          <feOffset dx="0.1" dy="0.1" result="off" />
          <feFlood floodColor="#0A0A0A" floodOpacity="0.08" result="color" />
          <feComposite in="color" in2="off" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#ffffff" />
      <line x1="0" y1="2" x2="91" y2="2" stroke="#0A0A0A" strokeWidth="0.08" />
      <line x1="0" y1="1" x2="0" y2="3" stroke="#0A0A0A" strokeWidth="0.08" />
      <line x1="91" y1="1" x2="91" y2="3" stroke="#0A0A0A" strokeWidth="0.08" />
      <text x="45.5" y="1.5" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="0.9" fill="#999999">91mm</text>
      <rect x="5" y="5" width="81" height="45" fill="none" stroke="#E0E0E0" strokeWidth="0.1" strokeDasharray="1 0.8" />
      {/* Corner ticks */}
      <line x1="83" y1="5" x2="86" y2="5" stroke="#CCCCCC" strokeWidth="0.08" />
      <line x1="86" y1="5" x2="86" y2="8" stroke="#CCCCCC" strokeWidth="0.08" />
      <line x1="5" y1="50" x2="8" y2="50" stroke="#CCCCCC" strokeWidth="0.08" />
      <line x1="5" y1="47" x2="5" y2="50" stroke="#CCCCCC" strokeWidth="0.08" />
      <text x="7" y="8" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1" fill="#BBBBBB">SIDE: BACK (URA / 裏)</text>
      {data.logo && <image href={data.logo} x="75" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <text x="7" y="12.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1" fill="#999999">FIELD: company_ja</text>
      <text x="7" y="16" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.8" fill="#0A0A0A">{data.companyJa}</text>
      <text x="7" y="19" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1" fill="#999999">FIELD: company_en</text>
      <text x="7" y="22" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.6" fill="#444444">{data.companyEn}</text>
      <text x="7" y="24.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1" fill="#999999">FIELD: title_ja</text>
      <text x="7" y="27.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#555555">{data.titleJa}</text>
      <text x="7" y="30.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1" fill="#999999">FIELD: tel</text>
      <text x="7" y="33.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#333333">{data.tel}</text>
      <text x="7" y="36" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1" fill="#999999">FIELD: email</text>
      <text x="7" y="39" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#333333">{data.email}</text>
      <text x="7" y="41.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1" fill="#999999">FIELD: website</text>
      <text x="7" y="44.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#333333">{data.website}</text>
      <text x="7" y="47" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1" fill="#999999">FIELD: address</text>
      <text x="7" y="50" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#555555">〒{data.zipCode} {data.addressJa}</text>
      <text x="84" y="53" textAnchor="end" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="0.9" fill="#CCCCCC">RENDER: SVG | FIELDS: 12 | FORMAT: JIS</text>
    </g>
  ),
};

export const experimentalTemplates: TemplateDefinition[] = [
  foldTemplate,
  transparentTemplate,
  cutTemplate,
  gradientExpTemplate,
  dimensionTemplate,
  mirrorTemplate,
  scanTemplate,
  thermalTemplate,
  overprintTemplate,
  metaTemplate,
];
