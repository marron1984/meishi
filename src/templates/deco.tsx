import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. GATSBY (華) — Roaring Twenties glamour
// Bold gold on black with geometric fan motifs
// ============================================================
const gatsbyTemplate: TemplateDefinition = {
  id: 'deco-gatsby',
  name: 'GATSBY',
  nameJa: '華',
  category: 'deco',
  designer: 'Art Deco Studio',
  description: '華やかなる時代。金と黒の狂騒曲。',
  accentColor: '#C9A96E',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="deco-gatsby-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0F0F0F" />
          <stop offset="50%" stopColor="#0A0A0A" />
          <stop offset="100%" stopColor="#050505" />
        </linearGradient>
        <linearGradient id="deco-gatsby-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E8D5A3" />
          <stop offset="30%" stopColor="#C9A96E" />
          <stop offset="60%" stopColor="#B8943E" />
          <stop offset="100%" stopColor="#D4BC84" />
        </linearGradient>
        <filter id="deco-gatsby-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="screen" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="deco-gatsby-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#C9A96E" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="deco-gatsby-foil">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" result="foil" />
          <feColorMatrix type="matrix" values="0.3 0.3 0 0 0.3  0.25 0.25 0 0 0.2  0.05 0.05 0 0 0  0 0 0 0.1 0" in="foil" result="gold" />
          <feBlend mode="screen" in="SourceGraphic" in2="gold" />
        </filter>
        <clipPath id="deco-gatsby-fan">
          <rect x="30" y="3" width="31" height="12" />
        </clipPath>
      </defs>
      <rect width="91" height="55" fill="url(#deco-gatsby-bg)" />
      <rect width="91" height="55" filter="url(#deco-gatsby-grain)" opacity="0.05" fill="#222" />
      {/* Decorative gold borders */}
      <rect x="3" y="3" width="85" height="49" fill="none" stroke="url(#deco-gatsby-gold)" strokeWidth="0.4" />
      <rect x="5" y="5" width="81" height="45" fill="none" stroke="#C9A96E" strokeWidth="0.15" opacity="0.5" />
      {/* Corner ornaments */}
      <line x1="3" y1="10" x2="10" y2="3" stroke="#C9A96E" strokeWidth="0.2" />
      <line x1="81" y1="3" x2="88" y2="10" stroke="#C9A96E" strokeWidth="0.2" />
      <line x1="3" y1="45" x2="10" y2="52" stroke="#C9A96E" strokeWidth="0.2" />
      <line x1="81" y1="52" x2="88" y2="45" stroke="#C9A96E" strokeWidth="0.2" />
      {/* Corner diamonds */}
      <path d="M6,6 L8,4 L10,6 L8,8Z" fill="#C9A96E" opacity="0.2" />
      <path d="M83,6 L85,4 L87,6 L85,8Z" fill="#C9A96E" opacity="0.2" />
      {/* Fan motif top center */}
      <g clipPath="url(#deco-gatsby-fan)" opacity="0.3" filter="url(#deco-gatsby-foil)">
        <line x1="45.5" y1="15" x2="35" y2="3" stroke="#C9A96E" strokeWidth="0.15" />
        <line x1="45.5" y1="15" x2="38" y2="3" stroke="#C9A96E" strokeWidth="0.15" />
        <line x1="45.5" y1="15" x2="41" y2="3" stroke="#C9A96E" strokeWidth="0.15" />
        <line x1="45.5" y1="15" x2="44" y2="3" stroke="#C9A96E" strokeWidth="0.15" />
        <line x1="45.5" y1="15" x2="47" y2="3" stroke="#C9A96E" strokeWidth="0.15" />
        <line x1="45.5" y1="15" x2="50" y2="3" stroke="#C9A96E" strokeWidth="0.15" />
        <line x1="45.5" y1="15" x2="53" y2="3" stroke="#C9A96E" strokeWidth="0.15" />
        <line x1="45.5" y1="15" x2="56" y2="3" stroke="#C9A96E" strokeWidth="0.15" />
        <circle cx="45.5" cy="15" r="12" fill="none" stroke="#C9A96E" strokeWidth="0.15" />
        <circle cx="45.5" cy="15" r="10" fill="none" stroke="#C9A96E" strokeWidth="0.1" />
      </g>
      <text x="45.5" y="25" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6" letterSpacing="1.5" fill="url(#deco-gatsby-gold)" filter="url(#deco-gatsby-shadow)">{data.nameJa}</text>
      <line x1="20" y1="29" x2="71" y2="29" stroke="#C9A96E" strokeWidth="0.2" />
      <text x="45.5" y="35" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="2.2" letterSpacing="2" fill="#C9A96E">{data.nameEn.toUpperCase()}</text>
      <text x="45.5" y="42" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#8A7A5A">{data.titleJa}</text>
      {data.logo && <image href={data.logo} x="78" y="43" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="deco-gatsby-bg-b" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#0F0F0F" />
          <stop offset="100%" stopColor="#050505" />
        </linearGradient>
        <linearGradient id="deco-gatsby-gold-b" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E8D5A3" />
          <stop offset="50%" stopColor="#C9A96E" />
          <stop offset="100%" stopColor="#D4BC84" />
        </linearGradient>
        <filter id="deco-gatsby-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="screen" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="deco-gatsby-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#C9A96E" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#deco-gatsby-bg-b)" />
      <rect width="91" height="55" filter="url(#deco-gatsby-grain-b)" opacity="0.05" fill="#222" />
      <rect x="3" y="3" width="85" height="49" fill="none" stroke="url(#deco-gatsby-gold-b)" strokeWidth="0.4" />
      <rect x="5" y="5" width="81" height="45" fill="none" stroke="#C9A96E" strokeWidth="0.15" opacity="0.5" />
      <line x1="3" y1="10" x2="10" y2="3" stroke="#C9A96E" strokeWidth="0.2" />
      <line x1="81" y1="3" x2="88" y2="10" stroke="#C9A96E" strokeWidth="0.2" />
      <line x1="3" y1="45" x2="10" y2="52" stroke="#C9A96E" strokeWidth="0.2" />
      <line x1="81" y1="52" x2="88" y2="45" stroke="#C9A96E" strokeWidth="0.2" />
      {data.logo && <image href={data.logo} x="41.5" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text x="45.5" y="17" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" letterSpacing="0.8" fill="#C9A96E" filter="url(#deco-gatsby-shadow-b)">{data.companyJa}</text>
      <text x="45.5" y="21" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" letterSpacing="1" fill="#8A7A5A">{data.companyEn.toUpperCase()}</text>
      <text x="45.5" y="25" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#8A7A5A">{data.titleJa}</text>
      <line x1="15" y1="27.5" x2="76" y2="27.5" stroke="#C9A96E" strokeWidth="0.15" />
      <text x="45.5" y="32" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#C9A96E">{data.tel}</text>
      <text x="45.5" y="36" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#C9A96E">{data.email}</text>
      <text x="45.5" y="40" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#C9A96E">{data.website}</text>
      <line x1="15" y1="42.5" x2="76" y2="42.5" stroke="#C9A96E" strokeWidth="0.15" />
      <text x="45.5" y="47" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#8A7A5A">〒{data.zipCode}</text>
      <text x="45.5" y="50.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#8A7A5A">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 2. CHRYSLER (尖) — Chrysler Building inspired
// ============================================================
const chryslerTemplate: TemplateDefinition = {
  id: 'deco-chrysler',
  name: 'CHRYSLER',
  nameJa: '尖',
  category: 'deco',
  designer: 'Art Deco Studio',
  description: '尖塔の輝き。クライスラービルの冠を戴く。',
  accentColor: '#C0C0C0',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="deco-chrysler-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1A1A2E" /><stop offset="100%" stopColor="#12122A" />
        </linearGradient>
        <linearGradient id="deco-chrysler-chrome" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E0E0E0" /><stop offset="40%" stopColor="#C0C0C0" /><stop offset="70%" stopColor="#A0A0A0" /><stop offset="100%" stopColor="#D0D0D0" />
        </linearGradient>
        <filter id="deco-chrysler-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="screen" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="deco-chrysler-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#C0C0C0" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="deco-chrysler-foil">
          <feTurbulence type="fractalNoise" baseFrequency="0.4" numOctaves="3" result="foil" />
          <feColorMatrix type="saturate" values="0" in="foil" result="gray" />
          <feBlend mode="overlay" in="SourceGraphic" in2="gray" />
        </filter>
        <clipPath id="deco-chrysler-crown">
          <rect width="91" height="55" />
        </clipPath>
      </defs>
      <rect width="91" height="55" fill="url(#deco-chrysler-bg)" />
      <rect width="91" height="55" filter="url(#deco-chrysler-grain)" opacity="0.04" fill="#333" />
      <g clipPath="url(#deco-chrysler-crown)" opacity="0.2" filter="url(#deco-chrysler-foil)">
        <polygon points="45.5,0 55,12 50,12 50,8 45.5,5 41,8 41,12 36,12" fill="none" stroke="url(#deco-chrysler-chrome)" strokeWidth="0.3" />
        <line x1="45.5" y1="0" x2="45.5" y2="12" stroke="#C0C0C0" strokeWidth="0.15" />
        <line x1="45.5" y1="12" x2="30" y2="0" stroke="#C0C0C0" strokeWidth="0.1" />
        <line x1="45.5" y1="12" x2="35" y2="0" stroke="#C0C0C0" strokeWidth="0.1" />
        <line x1="45.5" y1="12" x2="40" y2="0" stroke="#C0C0C0" strokeWidth="0.1" />
        <line x1="45.5" y1="12" x2="51" y2="0" stroke="#C0C0C0" strokeWidth="0.1" />
        <line x1="45.5" y1="12" x2="56" y2="0" stroke="#C0C0C0" strokeWidth="0.1" />
        <line x1="45.5" y1="12" x2="61" y2="0" stroke="#C0C0C0" strokeWidth="0.1" />
      </g>
      <path d="M5,48 L5,45 L8,45 L8,43 L11,43 L11,41 L80,41 L80,43 L83,43 L83,45 L86,45 L86,48" fill="none" stroke="url(#deco-chrysler-chrome)" strokeWidth="0.2" opacity="0.3" />
      {/* Chrome accent dots */}
      <circle cx="45.5" cy="14" r="0.5" fill="#C0C0C0" opacity="0.2" />
      <circle cx="11" cy="41" r="0.3" fill="#C0C0C0" opacity="0.15" />
      <circle cx="80" cy="41" r="0.3" fill="#C0C0C0" opacity="0.15" />
      <text x="45.5" y="24" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="6" letterSpacing="1" fill="#E8E8E8" filter="url(#deco-chrysler-shadow)">{data.nameJa}</text>
      <text x="45.5" y="31" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="2" letterSpacing="1.5" fill="url(#deco-chrysler-chrome)">{data.nameEn.toUpperCase()}</text>
      <text x="45.5" y="38" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#808090">{data.titleJa}</text>
      {data.logo && <image href={data.logo} x="78" y="43" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="deco-chrysler-bg-b" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#1A1A2E" /><stop offset="100%" stopColor="#12122A" />
        </linearGradient>
        <filter id="deco-chrysler-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="screen" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="deco-chrysler-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.1" dy="0.12" />
          <feFlood floodColor="#C0C0C0" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#deco-chrysler-bg-b)" />
      <rect width="91" height="55" filter="url(#deco-chrysler-grain-b)" opacity="0.04" fill="#333" />
      <path d="M5,7 L5,10 L8,10 L8,12 L11,12 L11,14 L80,14 L80,12 L83,12 L83,10 L86,10 L86,7" fill="none" stroke="#C0C0C0" strokeWidth="0.2" opacity="0.3" />
      {data.logo && <image href={data.logo} x="41.5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
      <text x="45.5" y="12" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" letterSpacing="0.8" fill="#E8E8E8" filter="url(#deco-chrysler-shadow-b)">{data.companyJa}</text>
      <text x="45.5" y="20" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" letterSpacing="0.8" fill="#C0C0C0">{data.companyEn.toUpperCase()}</text>
      <text x="45.5" y="24.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#808090">{data.titleJa}</text>
      <line x1="20" y1="27" x2="71" y2="27" stroke="#C0C0C0" strokeWidth="0.1" opacity="0.4" />
      <text x="45.5" y="31.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#A0A0B0">{data.tel}</text>
      <text x="45.5" y="35.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#A0A0B0">{data.email}</text>
      <text x="45.5" y="39.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#A0A0B0">{data.website}</text>
      <line x1="20" y1="42" x2="71" y2="42" stroke="#C0C0C0" strokeWidth="0.1" opacity="0.4" />
      <text x="45.5" y="46.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#808090">〒{data.zipCode}</text>
      <text x="45.5" y="50" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#808090">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 3. METROPOLIS (都) — Film Metropolis inspired
// ============================================================
const metropolisTemplate: TemplateDefinition = {
  id: 'deco-metropolis',
  name: 'METROPOLIS',
  nameJa: '都',
  category: 'deco',
  designer: 'Art Deco Studio',
  description: '大都市の威容。摩天楼が空を突き刺す。',
  accentColor: '#C9A96E',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="deco-metro-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0D0D0D" /><stop offset="100%" stopColor="#080808" />
        </linearGradient>
        <linearGradient id="deco-metro-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8D5A3" /><stop offset="50%" stopColor="#C9A96E" /><stop offset="100%" stopColor="#B8943E" />
        </linearGradient>
        <filter id="deco-metro-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="screen" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="deco-metro-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.2" />
          <feFlood floodColor="#C9A96E" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#deco-metro-bg)" />
      <rect width="91" height="55" filter="url(#deco-metro-grain)" opacity="0.04" fill="#222" />
      {/* Building silhouettes with gold gradient */}
      <g opacity="0.15">
        <rect x="3" y="15" width="4" height="40" fill="url(#deco-metro-gold)" />
        <rect x="4" y="12" width="2" height="3" fill="#C9A96E" />
        <rect x="9" y="20" width="3" height="35" fill="#C9A96E" />
        <rect x="14" y="10" width="5" height="45" fill="url(#deco-metro-gold)" />
        <rect x="15.5" y="6" width="2" height="4" fill="#C9A96E" />
        <rect x="21" y="25" width="3" height="30" fill="#C9A96E" />
        <rect x="76" y="18" width="4" height="37" fill="url(#deco-metro-gold)" />
        <rect x="82" y="22" width="3" height="33" fill="#C9A96E" />
        <rect x="87" y="15" width="4" height="40" fill="url(#deco-metro-gold)" />
        <rect x="88" y="10" width="2" height="5" fill="#C9A96E" />
      </g>
      {/* Perspective vanishing lines */}
      <g opacity="0.06">
        <line x1="45.5" y1="10" x2="0" y2="55" stroke="#C9A96E" strokeWidth="0.15" />
        <line x1="45.5" y1="10" x2="91" y2="55" stroke="#C9A96E" strokeWidth="0.15" />
      </g>
      {/* Tiny window dots on buildings */}
      <rect x="15" y="14" width="0.8" height="0.8" fill="#C9A96E" opacity="0.2" />
      <rect x="17" y="14" width="0.8" height="0.8" fill="#C9A96E" opacity="0.15" />
      <rect x="15" y="17" width="0.8" height="0.8" fill="#C9A96E" opacity="0.12" />
      <text x="45.5" y="27" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6" letterSpacing="1" fill="#FFFFFF" filter="url(#deco-metro-shadow)">{data.nameJa}</text>
      <text x="45.5" y="34" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="2" letterSpacing="1.5" fill="#C9A96E">{data.nameEn.toUpperCase()}</text>
      <text x="45.5" y="42" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#8A7A5A">{data.titleJa}</text>
      {data.logo && <image href={data.logo} x="38" y="43" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="deco-metro-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="screen" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="deco-metro-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.1" dy="0.12" />
          <feFlood floodColor="#C9A96E" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#0D0D0D" />
      <rect width="91" height="55" filter="url(#deco-metro-grain-b)" opacity="0.04" fill="#222" />
      <g opacity="0.1">
        <rect x="3" y="0" width="4" height="15" fill="#C9A96E" />
        <rect x="9" y="0" width="3" height="10" fill="#C9A96E" />
        <rect x="82" y="0" width="3" height="12" fill="#C9A96E" />
        <rect x="87" y="0" width="4" height="18" fill="#C9A96E" />
      </g>
      {data.logo && <image href={data.logo} x="41.5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
      <text x="45.5" y="16" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" letterSpacing="0.5" fill="#FFFFFF" filter="url(#deco-metro-shadow-b)">{data.companyJa}</text>
      <text x="45.5" y="20" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" letterSpacing="0.8" fill="#C9A96E">{data.companyEn.toUpperCase()}</text>
      <text x="45.5" y="24.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#8A7A5A">{data.titleJa}</text>
      <line x1="15" y1="27" x2="76" y2="27" stroke="#C9A96E" strokeWidth="0.15" opacity="0.4" />
      <text x="45.5" y="31.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#C9A96E">{data.tel}</text>
      <text x="45.5" y="35.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#C9A96E">{data.email}</text>
      <text x="45.5" y="39.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#C9A96E">{data.website}</text>
      <line x1="15" y1="42" x2="76" y2="42" stroke="#C9A96E" strokeWidth="0.15" opacity="0.4" />
      <text x="45.5" y="46.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#8A7A5A">〒{data.zipCode}</text>
      <text x="45.5" y="50" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#8A7A5A">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 4. FLAPPER (踊) — Dance-era elegance
// ============================================================
const flapperTemplate: TemplateDefinition = {
  id: 'deco-flapper',
  name: 'FLAPPER',
  nameJa: '踊',
  category: 'deco',
  designer: 'Art Deco Studio',
  description: '踊る時代。エメラルドと金のフラッパーの夜。',
  accentColor: '#046A38',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="deco-flapper-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FDF5E6" /><stop offset="100%" stopColor="#F5ECD5" />
        </linearGradient>
        <linearGradient id="deco-flapper-emerald" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#058B48" /><stop offset="100%" stopColor="#046A38" />
        </linearGradient>
        <filter id="deco-flapper-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="deco-flapper-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.1" dy="0.12" />
          <feFlood floodColor="#046A38" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#deco-flapper-bg)" />
      <rect width="91" height="55" filter="url(#deco-flapper-grain)" opacity="0.06" fill="#AA9977" />
      <rect x="0" y="0" width="91" height="1" fill="url(#deco-flapper-emerald)" opacity="0.5" />
      <rect x="0" y="2" width="91" height="0.3" fill="#C9A96E" opacity="0.4" />
      <rect x="0" y="52.7" width="91" height="0.3" fill="#C9A96E" opacity="0.4" />
      <rect x="0" y="54" width="91" height="1" fill="url(#deco-flapper-emerald)" opacity="0.5" />
      {/* Curved deco ornament left */}
      <path d="M8,15 Q4,27.5 8,40" fill="none" stroke="#046A38" strokeWidth="0.3" opacity="0.3" />
      <path d="M10,17 Q7,27.5 10,38" fill="none" stroke="#C9A96E" strokeWidth="0.15" opacity="0.3" />
      <circle cx="8" cy="14" r="0.8" fill="#046A38" opacity="0.3" />
      <circle cx="8" cy="41" r="0.8" fill="#046A38" opacity="0.3" />
      {/* Small emerald accents */}
      <path d="M83,15 Q87,27.5 83,40" fill="none" stroke="#046A38" strokeWidth="0.2" opacity="0.15" />
      <text x="45.5" y="23" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="5.5" letterSpacing="1" fill="#1A1A1A" filter="url(#deco-flapper-shadow)">{data.nameJa}</text>
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="2" letterSpacing="1" fontStyle="italic" fill="#046A38">{data.nameEn.toUpperCase()}</text>
      <text x="45.5" y="38" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#8A8A6A">{data.titleJa}</text>
      {data.logo && <image href={data.logo} x="78" y="43" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="deco-flapper-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="deco-flapper-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.1" dy="0.12" />
          <feFlood floodColor="#046A38" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#FDF5E6" />
      <rect width="91" height="55" filter="url(#deco-flapper-grain-b)" opacity="0.06" fill="#AA9977" />
      <rect x="0" y="0" width="91" height="1" fill="#046A38" opacity="0.5" />
      <rect x="0" y="2" width="91" height="0.3" fill="#C9A96E" opacity="0.4" />
      <rect x="0" y="52.7" width="91" height="0.3" fill="#C9A96E" opacity="0.4" />
      <rect x="0" y="54" width="91" height="1" fill="#046A38" opacity="0.5" />
      {data.logo && <image href={data.logo} x="41.5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text x="45.5" y="15" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#1A1A1A" filter="url(#deco-flapper-shadow-b)">{data.companyJa}</text>
      <text x="45.5" y="19.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" letterSpacing="0.5" fontStyle="italic" fill="#046A38">{data.companyEn.toUpperCase()}</text>
      <text x="45.5" y="24" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#8A8A6A">{data.titleJa}</text>
      <line x1="20" y1="26.5" x2="71" y2="26.5" stroke="#C9A96E" strokeWidth="0.2" opacity="0.4" />
      <text x="45.5" y="31" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#555555">{data.tel}</text>
      <text x="45.5" y="35" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#555555">{data.email}</text>
      <text x="45.5" y="39" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#555555">{data.website}</text>
      <line x1="20" y1="41.5" x2="71" y2="41.5" stroke="#C9A96E" strokeWidth="0.2" opacity="0.4" />
      <text x="45.5" y="46" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#8A8A6A">〒{data.zipCode}</text>
      <text x="45.5" y="49.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#8A8A6A">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 5. DECO-GOLD (箔) — Pure gold leaf on cream
// ============================================================
const decoGoldTemplate: TemplateDefinition = {
  id: 'deco-gold',
  name: 'DECO-GOLD',
  nameJa: '箔',
  category: 'deco',
  designer: 'Art Deco Studio',
  description: '金箔の輝き。黄金の幾何学模様が踊る。',
  accentColor: '#C9A96E',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="deco-gold-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FDF5E6" /><stop offset="100%" stopColor="#F5ECD5" />
        </linearGradient>
        <linearGradient id="deco-gold-foil" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E8D5A3" /><stop offset="25%" stopColor="#C9A96E" /><stop offset="50%" stopColor="#D4BC84" /><stop offset="75%" stopColor="#B8943E" /><stop offset="100%" stopColor="#E0CCA0" />
        </linearGradient>
        <filter id="deco-gold-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="deco-gold-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#8A6F3A" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="deco-gold-foileffect">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" result="foil" />
          <feColorMatrix type="matrix" values="0.4 0.3 0 0 0.3  0.3 0.25 0 0 0.2  0.1 0.05 0 0 0  0 0 0 0.08 0" in="foil" result="gold" />
          <feBlend mode="screen" in="SourceGraphic" in2="gold" />
        </filter>
        <pattern id="deco-gold-pattern" width="8" height="8" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="4" height="4" fill="none" stroke="#C9A96E" strokeWidth="0.1" opacity="0.15" />
          <rect x="4" y="4" width="4" height="4" fill="none" stroke="#C9A96E" strokeWidth="0.1" opacity="0.15" />
          <line x1="0" y1="0" x2="4" y2="4" stroke="#C9A96E" strokeWidth="0.05" opacity="0.1" />
          <line x1="4" y1="4" x2="8" y2="8" stroke="#C9A96E" strokeWidth="0.05" opacity="0.1" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#deco-gold-bg)" />
      <rect width="91" height="55" fill="url(#deco-gold-pattern)" />
      <rect width="91" height="55" filter="url(#deco-gold-grain)" opacity="0.06" fill="#AA9966" />
      {/* Gold frame with foil effect */}
      <rect x="8" y="8" width="75" height="39" fill="none" stroke="url(#deco-gold-foil)" strokeWidth="0.6" filter="url(#deco-gold-foileffect)" />
      <rect x="10" y="10" width="71" height="35" fill="#FDF5E6" stroke="#C9A96E" strokeWidth="0.15" />
      {/* Corner rosettes */}
      <circle cx="10" cy="10" r="0.8" fill="#C9A96E" opacity="0.2" />
      <circle cx="81" cy="10" r="0.8" fill="#C9A96E" opacity="0.2" />
      <circle cx="10" cy="45" r="0.8" fill="#C9A96E" opacity="0.2" />
      <circle cx="81" cy="45" r="0.8" fill="#C9A96E" opacity="0.2" />
      <text x="45.5" y="24" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6" letterSpacing="1" fill="#8A6F3A" filter="url(#deco-gold-shadow)">{data.nameJa}</text>
      <line x1="22" y1="28" x2="69" y2="28" stroke="url(#deco-gold-foil)" strokeWidth="0.3" />
      <text x="45.5" y="34" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="2" letterSpacing="1.5" fill="#C9A96E">{data.nameEn.toUpperCase()}</text>
      <text x="45.5" y="41" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#A09060">{data.titleJa}</text>
      {data.logo && <image href={data.logo} x="78" y="43" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="deco-gold-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="deco-gold-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.1" dy="0.12" />
          <feFlood floodColor="#8A6F3A" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <pattern id="deco-gold-pattern-b" width="8" height="8" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="4" height="4" fill="none" stroke="#C9A96E" strokeWidth="0.1" opacity="0.15" />
          <rect x="4" y="4" width="4" height="4" fill="none" stroke="#C9A96E" strokeWidth="0.1" opacity="0.15" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="#FDF5E6" />
      <rect width="91" height="55" fill="url(#deco-gold-pattern-b)" />
      <rect width="91" height="55" filter="url(#deco-gold-grain-b)" opacity="0.06" fill="#AA9966" />
      <rect x="8" y="8" width="75" height="39" fill="none" stroke="#C9A96E" strokeWidth="0.6" />
      <rect x="10" y="10" width="71" height="35" fill="#FDF5E6" stroke="#C9A96E" strokeWidth="0.15" />
      {data.logo && <image href={data.logo} x="41.5" y="11" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text x="45.5" y="24" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#8A6F3A" filter="url(#deco-gold-shadow-b)">{data.companyJa}</text>
      <text x="45.5" y="28" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" letterSpacing="0.5" fill="#C9A96E">{data.companyEn.toUpperCase()}</text>
      <text x="45.5" y="32" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#A09060">{data.titleJa}</text>
      <line x1="20" y1="34" x2="71" y2="34" stroke="#C9A96E" strokeWidth="0.2" />
      <text x="45.5" y="37.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#8A6F3A">{data.tel}</text>
      <text x="45.5" y="40.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#8A6F3A">{data.email}</text>
      <text x="45.5" y="43.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#8A6F3A">{data.website}</text>
      <text x="45.5" y="48" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#A09060">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 6. SUNBURST (旭) — Radiating sunburst rays
// ============================================================
const sunburstTemplate: TemplateDefinition = {
  id: 'deco-sunburst', name: 'SUNBURST', nameJa: '旭', category: 'deco', designer: 'Art Deco Studio',
  description: '旭日の光芒。中心から放射される力強い光線。', accentColor: '#C9A96E',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="deco-sun-bg" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stopColor="#1A0A0A" /><stop offset="100%" stopColor="#120808" /></linearGradient>
        <radialGradient id="deco-sun-glow" cx="50%" cy="100%" r="80%"><stop offset="0%" stopColor="#C9A96E" stopOpacity="0.06" /><stop offset="100%" stopColor="#C9A96E" stopOpacity="0" /></radialGradient>
        <filter id="deco-sun-grain"><feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" /><feColorMatrix type="saturate" values="0" in="noise" result="gray" /><feBlend mode="screen" in="SourceGraphic" in2="gray" /></filter>
        <filter id="deco-sun-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.3" /><feOffset dx="0.1" dy="0.15" /><feFlood floodColor="#C9A96E" floodOpacity="0.1" /><feComposite operator="in" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        <clipPath id="deco-sun-clip"><rect width="91" height="55" /></clipPath>
      </defs>
      <rect width="91" height="55" fill="url(#deco-sun-bg)" />
      <rect width="91" height="55" fill="url(#deco-sun-glow)" />
      <rect width="91" height="55" filter="url(#deco-sun-grain)" opacity="0.04" fill="#332211" />
      <g clipPath="url(#deco-sun-clip)" opacity="0.15">
        <line x1="45.5" y1="55" x2="0" y2="0" stroke="#C9A96E" strokeWidth="0.3" /><line x1="45.5" y1="55" x2="10" y2="0" stroke="#C9A96E" strokeWidth="0.3" />
        <line x1="45.5" y1="55" x2="20" y2="0" stroke="#C9A96E" strokeWidth="0.3" /><line x1="45.5" y1="55" x2="30" y2="0" stroke="#C9A96E" strokeWidth="0.3" />
        <line x1="45.5" y1="55" x2="40" y2="0" stroke="#C9A96E" strokeWidth="0.3" /><line x1="45.5" y1="55" x2="51" y2="0" stroke="#C9A96E" strokeWidth="0.3" />
        <line x1="45.5" y1="55" x2="61" y2="0" stroke="#C9A96E" strokeWidth="0.3" /><line x1="45.5" y1="55" x2="71" y2="0" stroke="#C9A96E" strokeWidth="0.3" />
        <line x1="45.5" y1="55" x2="81" y2="0" stroke="#C9A96E" strokeWidth="0.3" /><line x1="45.5" y1="55" x2="91" y2="0" stroke="#C9A96E" strokeWidth="0.3" />
      </g>
      <circle cx="45.5" cy="55" r="2" fill="#C9A96E" opacity="0.08" />
      <text x="45.5" y="22" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6.5" letterSpacing="1" fill="#C9A96E" filter="url(#deco-sun-shadow)">{data.nameJa}</text>
      <line x1="20" y1="26" x2="71" y2="26" stroke="#C9A96E" strokeWidth="0.2" />
      <text x="45.5" y="32" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="2" letterSpacing="1.5" fill="#E8D8B8">{data.nameEn.toUpperCase()}</text>
      <text x="45.5" y="40" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#8A7A5A">{data.titleJa}</text>
      {data.logo && <image href={data.logo} x="78" y="43" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="deco-sun-grain-b"><feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" /><feColorMatrix type="saturate" values="0" in="noise" result="gray" /><feBlend mode="screen" in="SourceGraphic" in2="gray" /></filter>
        <filter id="deco-sun-shadow-b"><feGaussianBlur in="SourceAlpha" stdDeviation="0.25" /><feOffset dx="0.1" dy="0.12" /><feFlood floodColor="#C9A96E" floodOpacity="0.08" /><feComposite operator="in" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        <clipPath id="deco-sun-clip-b"><rect width="91" height="55" /></clipPath>
      </defs>
      <rect width="91" height="55" fill="#1A0A0A" />
      <rect width="91" height="55" filter="url(#deco-sun-grain-b)" opacity="0.04" fill="#332211" />
      <g clipPath="url(#deco-sun-clip-b)" opacity="0.08">
        <line x1="45.5" y1="0" x2="0" y2="55" stroke="#C9A96E" strokeWidth="0.2" /><line x1="45.5" y1="0" x2="20" y2="55" stroke="#C9A96E" strokeWidth="0.2" />
        <line x1="45.5" y1="0" x2="40" y2="55" stroke="#C9A96E" strokeWidth="0.2" /><line x1="45.5" y1="0" x2="51" y2="55" stroke="#C9A96E" strokeWidth="0.2" />
        <line x1="45.5" y1="0" x2="71" y2="55" stroke="#C9A96E" strokeWidth="0.2" /><line x1="45.5" y1="0" x2="91" y2="55" stroke="#C9A96E" strokeWidth="0.2" />
      </g>
      {data.logo && <image href={data.logo} x="41.5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
      <text x="45.5" y="16" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#C9A96E" filter="url(#deco-sun-shadow-b)">{data.companyJa}</text>
      <text x="45.5" y="20" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" letterSpacing="0.8" fill="#E8D8B8">{data.companyEn.toUpperCase()}</text>
      <text x="45.5" y="24.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#8A7A5A">{data.titleJa}</text>
      <line x1="15" y1="27" x2="76" y2="27" stroke="#C9A96E" strokeWidth="0.15" />
      <text x="45.5" y="31.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#C9A96E">{data.tel}</text>
      <text x="45.5" y="35.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#C9A96E">{data.email}</text>
      <text x="45.5" y="39.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#C9A96E">{data.website}</text>
      <line x1="15" y1="42" x2="76" y2="42" stroke="#C9A96E" strokeWidth="0.15" />
      <text x="45.5" y="46.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#8A7A5A">〒{data.zipCode}</text>
      <text x="45.5" y="50" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#8A7A5A">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 7. ZIGZAG (稲妻) — Zigzag chevron patterns
// ============================================================
const zigzagTemplate: TemplateDefinition = {
  id: 'deco-zigzag', name: 'ZIGZAG', nameJa: '稲妻', category: 'deco', designer: 'Art Deco Studio',
  description: '稲妻の閃き。ジグザグが走る力強いリズム。', accentColor: '#C9A96E',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="deco-zz-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1A1A1A" /><stop offset="100%" stopColor="#111111" /></linearGradient>
        <linearGradient id="deco-zz-gold" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#E8D5A3" /><stop offset="50%" stopColor="#C9A96E" /><stop offset="100%" stopColor="#E8D5A3" /></linearGradient>
        <filter id="deco-zz-grain"><feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" /><feColorMatrix type="saturate" values="0" in="noise" result="gray" /><feBlend mode="screen" in="SourceGraphic" in2="gray" /></filter>
        <filter id="deco-zz-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.3" /><feOffset dx="0.1" dy="0.15" /><feFlood floodColor="#C9A96E" floodOpacity="0.08" /><feComposite operator="in" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <rect width="91" height="55" fill="url(#deco-zz-bg)" />
      <rect width="91" height="55" filter="url(#deco-zz-grain)" opacity="0.04" fill="#222" />
      <path d="M0,3 L4,7 L8,3 L12,7 L16,3 L20,7 L24,3 L28,7 L32,3 L36,7 L40,3 L44,7 L48,3 L52,7 L56,3 L60,7 L64,3 L68,7 L72,3 L76,7 L80,3 L84,7 L88,3 L91,5.5" fill="none" stroke="url(#deco-zz-gold)" strokeWidth="0.4" opacity="0.6" />
      <path d="M0,49.5 L4,48 L8,52 L12,48 L16,52 L20,48 L24,52 L28,48 L32,52 L36,48 L40,52 L44,48 L48,52 L52,48 L56,52 L60,48 L64,52 L68,48 L72,52 L76,48 L80,52 L84,48 L88,52 L91,49.5" fill="none" stroke="url(#deco-zz-gold)" strokeWidth="0.4" opacity="0.6" />
      {/* Inner zigzag echo */}
      <path d="M0,6 L4,9 L8,6 L12,9 L16,6 L20,9 L24,6 L28,9 L32,6 L36,9 L40,6 L44,9 L48,6 L52,9 L56,6 L60,9 L64,6 L68,9 L72,6 L76,9 L80,6 L84,9 L88,6 L91,7.5" fill="none" stroke="#C9A96E" strokeWidth="0.15" opacity="0.2" />
      <text x="45.5" y="24" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="6" letterSpacing="1" fill="#FFFFFF" filter="url(#deco-zz-shadow)">{data.nameJa}</text>
      <text x="45.5" y="32" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="2" letterSpacing="1.5" fill="#C9A96E">{data.nameEn.toUpperCase()}</text>
      <text x="45.5" y="40" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#8A8A6A">{data.titleJa}</text>
      {data.logo && <image href={data.logo} x="78" y="38" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="deco-zz-grain-b"><feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" /><feColorMatrix type="saturate" values="0" in="noise" result="gray" /><feBlend mode="screen" in="SourceGraphic" in2="gray" /></filter>
        <filter id="deco-zz-shadow-b"><feGaussianBlur in="SourceAlpha" stdDeviation="0.25" /><feOffset dx="0.1" dy="0.12" /><feFlood floodColor="#C9A96E" floodOpacity="0.06" /><feComposite operator="in" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <rect width="91" height="55" fill="#1A1A1A" />
      <rect width="91" height="55" filter="url(#deco-zz-grain-b)" opacity="0.04" fill="#222" />
      <path d="M0,3 L4,7 L8,3 L12,7 L16,3 L20,7 L24,3 L28,7 L32,3 L36,7 L40,3 L44,7 L48,3 L52,7 L56,3 L60,7 L64,3 L68,7 L72,3 L76,7 L80,3 L84,7 L88,3 L91,5.5" fill="none" stroke="#C9A96E" strokeWidth="0.4" opacity="0.6" />
      <path d="M0,49.5 L4,48 L8,52 L12,48 L16,52 L20,48 L24,52 L28,48 L32,52 L36,48 L40,52 L44,48 L48,52 L52,48 L56,52 L60,48 L64,52 L68,48 L72,52 L76,48 L80,52 L84,48 L88,52 L91,49.5" fill="none" stroke="#C9A96E" strokeWidth="0.4" opacity="0.6" />
      {data.logo && <image href={data.logo} x="41.5" y="8" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
      <text x="45.5" y="17" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#FFFFFF" filter="url(#deco-zz-shadow-b)">{data.companyJa}</text>
      <text x="45.5" y="21.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" letterSpacing="0.8" fill="#C9A96E">{data.companyEn.toUpperCase()}</text>
      <text x="45.5" y="26" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#8A8A6A">{data.titleJa}</text>
      <line x1="20" y1="28.5" x2="71" y2="28.5" stroke="#C9A96E" strokeWidth="0.15" />
      <text x="45.5" y="33" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#C9A96E">{data.tel}</text>
      <text x="45.5" y="37" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#C9A96E">{data.email}</text>
      <text x="45.5" y="41" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#C9A96E">{data.website}</text>
      <line x1="20" y1="43.5" x2="71" y2="43.5" stroke="#C9A96E" strokeWidth="0.15" />
      <text x="45.5" y="47.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#8A8A6A">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 8. FAN (扇) — Decorative fan/shell motif
// ============================================================
const fanTemplate: TemplateDefinition = {
  id: 'deco-fan', name: 'FAN', nameJa: '扇', category: 'deco', designer: 'Art Deco Studio',
  description: '扇の優雅。貝殻のような扇形が彩る装飾美。', accentColor: '#800020',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="deco-fan-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#FDF5E6" /><stop offset="100%" stopColor="#F5ECD5" /></linearGradient>
        <linearGradient id="deco-fan-burg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#A0002A" /><stop offset="100%" stopColor="#800020" /></linearGradient>
        <filter id="deco-fan-grain"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" /><feColorMatrix type="saturate" values="0" in="noise" result="gray" /><feBlend mode="multiply" in="SourceGraphic" in2="gray" /></filter>
        <filter id="deco-fan-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.25" /><feOffset dx="0.1" dy="0.12" /><feFlood floodColor="#800020" floodOpacity="0.06" /><feComposite operator="in" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        <clipPath id="deco-fan-tl"><rect x="0" y="0" width="20" height="20" /></clipPath>
        <clipPath id="deco-fan-br"><rect x="71" y="35" width="20" height="20" /></clipPath>
      </defs>
      <rect width="91" height="55" fill="url(#deco-fan-bg)" />
      <rect width="91" height="55" filter="url(#deco-fan-grain)" opacity="0.06" fill="#AA8877" />
      <g clipPath="url(#deco-fan-tl)" opacity="0.2">
        <circle cx="0" cy="0" r="6" fill="none" stroke="url(#deco-fan-burg)" strokeWidth="0.2" />
        <circle cx="0" cy="0" r="10" fill="none" stroke="#800020" strokeWidth="0.2" />
        <circle cx="0" cy="0" r="14" fill="none" stroke="#800020" strokeWidth="0.2" />
        <circle cx="0" cy="0" r="18" fill="none" stroke="#800020" strokeWidth="0.2" />
        <line x1="0" y1="0" x2="18" y2="6" stroke="#800020" strokeWidth="0.1" />
        <line x1="0" y1="0" x2="16" y2="10" stroke="#800020" strokeWidth="0.1" />
        <line x1="0" y1="0" x2="12" y2="14" stroke="#800020" strokeWidth="0.1" />
        <line x1="0" y1="0" x2="6" y2="18" stroke="#800020" strokeWidth="0.1" />
      </g>
      <g clipPath="url(#deco-fan-br)" opacity="0.2">
        <circle cx="91" cy="55" r="6" fill="none" stroke="#800020" strokeWidth="0.2" />
        <circle cx="91" cy="55" r="10" fill="none" stroke="#800020" strokeWidth="0.2" />
        <circle cx="91" cy="55" r="14" fill="none" stroke="#800020" strokeWidth="0.2" />
        <circle cx="91" cy="55" r="18" fill="none" stroke="#800020" strokeWidth="0.2" />
        <line x1="91" y1="55" x2="73" y2="49" stroke="#800020" strokeWidth="0.1" />
        <line x1="91" y1="55" x2="75" y2="45" stroke="#800020" strokeWidth="0.1" />
        <line x1="91" y1="55" x2="79" y2="41" stroke="#800020" strokeWidth="0.1" />
        <line x1="91" y1="55" x2="85" y2="37" stroke="#800020" strokeWidth="0.1" />
      </g>
      <text x="45.5" y="23" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="5.5" letterSpacing="1" fill="#800020" filter="url(#deco-fan-shadow)">{data.nameJa}</text>
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="2" letterSpacing="1" fontStyle="italic" fill="#C9A96E">{data.nameEn.toUpperCase()}</text>
      <text x="45.5" y="38" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#A06070">{data.titleJa}</text>
      {data.logo && <image href={data.logo} x="78" y="43" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="deco-fan-grain-b"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" /><feColorMatrix type="saturate" values="0" in="noise" result="gray" /><feBlend mode="multiply" in="SourceGraphic" in2="gray" /></filter>
        <filter id="deco-fan-shadow-b"><feGaussianBlur in="SourceAlpha" stdDeviation="0.25" /><feOffset dx="0.1" dy="0.12" /><feFlood floodColor="#800020" floodOpacity="0.06" /><feComposite operator="in" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        <clipPath id="deco-fan-tl-b"><rect x="0" y="0" width="15" height="15" /></clipPath>
        <clipPath id="deco-fan-br-b"><rect x="76" y="40" width="15" height="15" /></clipPath>
      </defs>
      <rect width="91" height="55" fill="#FDF5E6" />
      <rect width="91" height="55" filter="url(#deco-fan-grain-b)" opacity="0.06" fill="#AA8877" />
      <g clipPath="url(#deco-fan-tl-b)" opacity="0.15"><circle cx="0" cy="0" r="5" fill="none" stroke="#800020" strokeWidth="0.2" /><circle cx="0" cy="0" r="9" fill="none" stroke="#800020" strokeWidth="0.2" /><circle cx="0" cy="0" r="13" fill="none" stroke="#800020" strokeWidth="0.2" /></g>
      <g clipPath="url(#deco-fan-br-b)" opacity="0.15"><circle cx="91" cy="55" r="5" fill="none" stroke="#800020" strokeWidth="0.2" /><circle cx="91" cy="55" r="9" fill="none" stroke="#800020" strokeWidth="0.2" /><circle cx="91" cy="55" r="13" fill="none" stroke="#800020" strokeWidth="0.2" /></g>
      {data.logo && <image href={data.logo} x="41.5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text x="45.5" y="16" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#800020" filter="url(#deco-fan-shadow-b)">{data.companyJa}</text>
      <text x="45.5" y="20" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fontStyle="italic" fill="#C9A96E">{data.companyEn.toUpperCase()}</text>
      <text x="45.5" y="24.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#A06070">{data.titleJa}</text>
      <line x1="20" y1="27" x2="71" y2="27" stroke="#C9A96E" strokeWidth="0.15" />
      <text x="45.5" y="31.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#8A5060">{data.tel}</text>
      <text x="45.5" y="35.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#8A5060">{data.email}</text>
      <text x="45.5" y="39.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#8A5060">{data.website}</text>
      <line x1="20" y1="42" x2="71" y2="42" stroke="#C9A96E" strokeWidth="0.15" />
      <text x="45.5" y="46.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#A07080">〒{data.zipCode}</text>
      <text x="45.5" y="50" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#A07080">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 9. EMPIRE (帝) — Empire State inspired grandeur
// ============================================================
const empireTemplate: TemplateDefinition = {
  id: 'deco-empire', name: 'EMPIRE', nameJa: '帝', category: 'deco', designer: 'Art Deco Studio',
  description: '帝国の威光。ピラミッドのように積み上がる力。', accentColor: '#C9A96E',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="deco-emp-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#0A0A12" /><stop offset="100%" stopColor="#06060E" /></linearGradient>
        <linearGradient id="deco-emp-gold" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#E8D5A3" /><stop offset="50%" stopColor="#C9A96E" /><stop offset="100%" stopColor="#D4BC84" /></linearGradient>
        <filter id="deco-emp-grain"><feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" /><feColorMatrix type="saturate" values="0" in="noise" result="gray" /><feBlend mode="screen" in="SourceGraphic" in2="gray" /></filter>
        <filter id="deco-emp-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.3" /><feOffset dx="0.1" dy="0.15" /><feFlood floodColor="#C9A96E" floodOpacity="0.1" /><feComposite operator="in" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <rect width="91" height="55" fill="url(#deco-emp-bg)" />
      <rect width="91" height="55" filter="url(#deco-emp-grain)" opacity="0.04" fill="#222" />
      <g opacity="0.25">
        <rect x="35" y="0" width="21" height="3" fill="url(#deco-emp-gold)" />
        <rect x="38" y="3" width="15" height="2.5" fill="#C9A96E" />
        <rect x="41" y="5.5" width="9" height="2" fill="#C9A96E" />
        <rect x="43.5" y="7.5" width="4" height="1.5" fill="#C9A96E" />
        <line x1="45.5" y1="9" x2="45.5" y2="14" stroke="#C9A96E" strokeWidth="0.3" />
      </g>
      <line x1="10" y1="5" x2="10" y2="50" stroke="#C9A96E" strokeWidth="0.15" opacity="0.15" />
      <line x1="81" y1="5" x2="81" y2="50" stroke="#C9A96E" strokeWidth="0.15" opacity="0.15" />
      <circle cx="45.5" cy="14.5" r="0.4" fill="#C9A96E" opacity="0.3" />
      <text x="45.5" y="26" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6.5" letterSpacing="1.5" fill="#C9A96E" filter="url(#deco-emp-shadow)">{data.nameJa}</text>
      <text x="45.5" y="33" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="2" letterSpacing="2" fill="#E8D8B8">{data.nameEn.toUpperCase()}</text>
      <text x="45.5" y="41" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#8A7A5A">{data.titleJa}</text>
      {data.logo && <image href={data.logo} x="78" y="43" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="deco-emp-grain-b"><feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" /><feColorMatrix type="saturate" values="0" in="noise" result="gray" /><feBlend mode="screen" in="SourceGraphic" in2="gray" /></filter>
        <filter id="deco-emp-shadow-b"><feGaussianBlur in="SourceAlpha" stdDeviation="0.25" /><feOffset dx="0.1" dy="0.12" /><feFlood floodColor="#C9A96E" floodOpacity="0.08" /><feComposite operator="in" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <rect width="91" height="55" fill="#0A0A12" />
      <rect width="91" height="55" filter="url(#deco-emp-grain-b)" opacity="0.04" fill="#222" />
      <g opacity="0.15">
        <rect x="35" y="52" width="21" height="3" fill="#C9A96E" /><rect x="38" y="49.5" width="15" height="2.5" fill="#C9A96E" />
        <rect x="41" y="47.5" width="9" height="2" fill="#C9A96E" /><rect x="43.5" y="46" width="4" height="1.5" fill="#C9A96E" />
      </g>
      <line x1="10" y1="5" x2="10" y2="50" stroke="#C9A96E" strokeWidth="0.15" opacity="0.15" />
      <line x1="81" y1="5" x2="81" y2="50" stroke="#C9A96E" strokeWidth="0.15" opacity="0.15" />
      {data.logo && <image href={data.logo} x="41.5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
      <text x="45.5" y="16" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" letterSpacing="0.5" fill="#C9A96E" filter="url(#deco-emp-shadow-b)">{data.companyJa}</text>
      <text x="45.5" y="20.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" letterSpacing="1" fill="#E8D8B8">{data.companyEn.toUpperCase()}</text>
      <text x="45.5" y="25" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#8A7A5A">{data.titleJa}</text>
      <line x1="18" y1="27.5" x2="73" y2="27.5" stroke="#C9A96E" strokeWidth="0.15" />
      <text x="45.5" y="32" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#C9A96E">{data.tel}</text>
      <text x="45.5" y="36" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#C9A96E">{data.email}</text>
      <text x="45.5" y="40" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#C9A96E">{data.website}</text>
      <line x1="18" y1="42.5" x2="73" y2="42.5" stroke="#C9A96E" strokeWidth="0.15" />
      <text x="45.5" y="46.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#8A7A5A">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 10. JAZZ (韻) — Jazz Age rhythm and movement
// ============================================================
const jazzTemplate: TemplateDefinition = {
  id: 'deco-jazz', name: 'JAZZ', nameJa: '韻', category: 'deco', designer: 'Art Deco Studio',
  description: 'ジャズの韻律。斜線が奏でるスウィングのリズム。', accentColor: '#046A38',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="deco-jazz-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#0D0D0D" /><stop offset="100%" stopColor="#080808" /></linearGradient>
        <linearGradient id="deco-jazz-green" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#058B48" /><stop offset="100%" stopColor="#046A38" /></linearGradient>
        <filter id="deco-jazz-grain"><feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" /><feColorMatrix type="saturate" values="0" in="noise" result="gray" /><feBlend mode="screen" in="SourceGraphic" in2="gray" /></filter>
        <filter id="deco-jazz-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.3" /><feOffset dx="0.1" dy="0.15" /><feFlood floodColor="#C9A96E" floodOpacity="0.08" /><feComposite operator="in" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <rect width="91" height="55" fill="url(#deco-jazz-bg)" />
      <rect width="91" height="55" filter="url(#deco-jazz-grain)" opacity="0.04" fill="#222" />
      <g opacity="0.12">
        <line x1="0" y1="55" x2="15" y2="0" stroke="#C9A96E" strokeWidth="1.5" />
        <line x1="8" y1="55" x2="23" y2="0" stroke="url(#deco-jazz-green)" strokeWidth="0.8" />
        <line x1="14" y1="55" x2="29" y2="0" stroke="#C9A96E" strokeWidth="0.4" />
        <line x1="62" y1="55" x2="77" y2="0" stroke="#C9A96E" strokeWidth="0.4" />
        <line x1="68" y1="55" x2="83" y2="0" stroke="url(#deco-jazz-green)" strokeWidth="0.8" />
        <line x1="76" y1="55" x2="91" y2="0" stroke="#C9A96E" strokeWidth="1.5" />
      </g>
      {/* Musical note micro-detail */}
      <circle cx="20" cy="30" r="0.3" fill="#C9A96E" opacity="0.1" />
      <circle cx="71" cy="25" r="0.25" fill="#046A38" opacity="0.08" />
      <text x="45.5" y="23" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6" letterSpacing="1" fill="#C9A96E" filter="url(#deco-jazz-shadow)">{data.nameJa}</text>
      <line x1="22" y1="27" x2="69" y2="27" stroke="#046A38" strokeWidth="0.3" />
      <text x="45.5" y="34" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="2" letterSpacing="1.5" fill="#046A38">{data.nameEn.toUpperCase()}</text>
      <text x="45.5" y="42" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#8A8A6A">{data.titleJa}</text>
      {data.logo && <image href={data.logo} x="38" y="43" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="deco-jazz-grain-b"><feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" /><feColorMatrix type="saturate" values="0" in="noise" result="gray" /><feBlend mode="screen" in="SourceGraphic" in2="gray" /></filter>
        <filter id="deco-jazz-shadow-b"><feGaussianBlur in="SourceAlpha" stdDeviation="0.25" /><feOffset dx="0.1" dy="0.12" /><feFlood floodColor="#C9A96E" floodOpacity="0.06" /><feComposite operator="in" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <rect width="91" height="55" fill="#0D0D0D" />
      <rect width="91" height="55" filter="url(#deco-jazz-grain-b)" opacity="0.04" fill="#222" />
      <g opacity="0.08">
        <line x1="0" y1="55" x2="15" y2="0" stroke="#C9A96E" strokeWidth="1" /><line x1="6" y1="55" x2="21" y2="0" stroke="#046A38" strokeWidth="0.5" />
        <line x1="76" y1="55" x2="91" y2="0" stroke="#C9A96E" strokeWidth="1" /><line x1="70" y1="55" x2="85" y2="0" stroke="#046A38" strokeWidth="0.5" />
      </g>
      {data.logo && <image href={data.logo} x="41.5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
      <text x="45.5" y="16" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#C9A96E" filter="url(#deco-jazz-shadow-b)">{data.companyJa}</text>
      <text x="45.5" y="20" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" letterSpacing="0.8" fill="#046A38">{data.companyEn.toUpperCase()}</text>
      <text x="45.5" y="24.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#8A8A6A">{data.titleJa}</text>
      <line x1="20" y1="27" x2="71" y2="27" stroke="#C9A96E" strokeWidth="0.15" />
      <text x="45.5" y="31.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#C9A96E">{data.tel}</text>
      <text x="45.5" y="35.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#C9A96E">{data.email}</text>
      <text x="45.5" y="39.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#C9A96E">{data.website}</text>
      <line x1="20" y1="42" x2="71" y2="42" stroke="#C9A96E" strokeWidth="0.15" />
      <text x="45.5" y="46.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#8A8A6A">〒{data.zipCode}</text>
      <text x="45.5" y="50" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#8A8A6A">{data.addressJa}</text>
    </g>
  ),
};

export const decoTemplates: TemplateDefinition[] = [
  gatsbyTemplate,
  chryslerTemplate,
  metropolisTemplate,
  flapperTemplate,
  decoGoldTemplate,
  sunburstTemplate,
  zigzagTemplate,
  fanTemplate,
  empireTemplate,
  jazzTemplate,
];
