import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. FOLD (折) — Irma Boom
// Physical fold reference with diagonal crease line, split content
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
        <linearGradient id="fold-grad-front" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F5F0EB" />
          <stop offset="48%" stopColor="#F5F0EB" />
          <stop offset="50%" stopColor="#E8E0D8" />
          <stop offset="52%" stopColor="#EDE6DF" />
          <stop offset="100%" stopColor="#EDE6DF" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#fold-grad-front)" />
      {/* The crease — a diagonal fold line */}
      <line x1="0" y1="0" x2="91" y2="55" stroke="#C8B8A8" strokeWidth="0.3" />
      <line x1="0.3" y1="0" x2="91.3" y2="55" stroke="#D8CCC0" strokeWidth="0.15" />
      {/* Shadow along the fold */}
      <line x1="-0.3" y1="0" x2="90.7" y2="55" stroke="#A89888" strokeWidth="0.1" opacity="0.5" />
      {/* Upper-left triangle: Japanese name */}
      <text
        x="10"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="0.3"
        fill="#5B4A3F"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="26"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="#8B7B6B"
      >
        {data.titleJa}
      </text>
      {/* Lower-right triangle: English name */}
      <text
        x="82"
        y="40"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2.2"
        letterSpacing="0.3"
        fill="#5B4A3F"
      >
        {data.nameEn}
      </text>
      <text
        x="82"
        y="45"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#8B7B6B"
      >
        {data.titleEn}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="fold-grad-back" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EDE6DF" />
          <stop offset="48%" stopColor="#EDE6DF" />
          <stop offset="50%" stopColor="#D8CCC0" />
          <stop offset="52%" stopColor="#F5F0EB" />
          <stop offset="100%" stopColor="#F5F0EB" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#fold-grad-back)" />
      {/* Reverse crease */}
      <line x1="91" y1="0" x2="0" y2="55" stroke="#C8B8A8" strokeWidth="0.3" />
      <line x1="91.3" y1="0" x2="0.3" y2="55" stroke="#D8CCC0" strokeWidth="0.15" />
      {/* Upper-right: company info */}
      <text
        x="82"
        y="14"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#5B4A3F"
      >
        {data.companyJa}
      </text>
      <text
        x="82"
        y="18.5"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#8B7B6B"
      >
        {data.companyEn}
      </text>
      {/* Lower-left: contact details */}
      <text
        x="8"
        y="36"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#5B4A3F"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="39.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#5B4A3F"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="43"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#8B7B6B"
      >
        {data.website}
      </text>
      <text
        x="8"
        y="49"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#A89888"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 2. TRANSPARENT (透) — Tokujin Yoshioka
// Overlapping translucent colored rectangles, layered depth
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
      <rect width="91" height="55" fill="#FAFCFF" />
      {/* Overlapping translucent rectangles */}
      <rect x="5" y="3" width="35" height="25" rx="1" fill="#0088CC" opacity="0.3" />
      <rect x="25" y="10" width="30" height="22" rx="1" fill="#CC3388" opacity="0.3" />
      <rect x="15" y="20" width="28" height="18" rx="1" fill="#44BB66" opacity="0.3" />
      <rect x="50" y="5" width="20" height="15" rx="1" fill="#FFAA00" opacity="0.35" />
      <rect x="60" y="15" width="25" height="20" rx="1" fill="#6644CC" opacity="0.25" />
      {/* Smaller floating rectangles */}
      <rect x="42" y="2" width="12" height="8" rx="0.5" fill="#0088CC" opacity="0.15" />
      <rect x="70" y="32" width="15" height="10" rx="0.5" fill="#CC3388" opacity="0.2" />
      {/* Name floats above the color layers */}
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="0.5"
        fill="#1a1a1a"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="38"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.3"
        fill="#444444"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#888888"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FAFCFF" />
      {/* Back: larger, softer translucent blocks */}
      <rect x="-5" y="-5" width="45" height="35" rx="2" fill="#0088CC" opacity="0.15" />
      <rect x="30" y="15" width="40" height="30" rx="2" fill="#CC3388" opacity="0.15" />
      <rect x="55" y="-3" width="40" height="25" rx="2" fill="#FFAA00" opacity="0.2" />
      <rect x="10" y="30" width="35" height="28" rx="2" fill="#44BB66" opacity="0.15" />
      <rect x="60" y="28" width="35" height="30" rx="2" fill="#6644CC" opacity="0.12" />
      {/* Company info */}
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#1a1a1a"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="19"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#666666"
      >
        {data.companyEn}
      </text>
      {/* Contact info */}
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#555555"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#555555"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#555555"
      >
        {data.website}
      </text>
      <text
        x="45.5"
        y="45"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#999999"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 3. CUT (切) — Stefan Sagmeister
// Die-cut reference — rounded rectangle cutouts on colored bg
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
      <rect width="91" height="55" fill="#E63946" />
      {/* Die-cut shapes — white "holes" suggesting physical cutouts */}
      <rect x="6" y="4" width="26" height="10" rx="3" fill="#ffffff" />
      <rect x="36" y="4" width="14" height="10" rx="3" fill="#ffffff" />
      <rect x="6" y="18" width="18" height="6" rx="2" fill="#ffffff" />
      <rect x="28" y="18" width="10" height="6" rx="2" fill="#ffffff" />
      {/* Circular cutouts as decorative elements */}
      <circle cx="60" cy="9" r="5" fill="#ffffff" />
      <circle cx="75" cy="9" r="3.5" fill="#ffffff" />
      <circle cx="84" cy="9" r="2" fill="#ffffff" />
      {/* Small window cutouts */}
      <rect x="54" y="18" width="8" height="6" rx="1.5" fill="#ffffff" />
      <rect x="65" y="18" width="20" height="6" rx="1.5" fill="#ffffff" />
      {/* Name appears "through" the largest cutout area */}
      <text
        x="19"
        y="11"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="4.5"
        fill="#E63946"
      >
        {data.nameJa}
      </text>
      <text
        x="43"
        y="11"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="2"
        fill="#E63946"
      >
        {data.nameEn}
      </text>
      {/* Title in cutout */}
      <text
        x="15"
        y="22.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="#E63946"
      >
        {data.titleJa}
      </text>
      {/* Text directly on the red background */}
      <text
        x="8"
        y="34"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="rgba(255,255,255,0.9)"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="38"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="rgba(255,255,255,0.9)"
      >
        {data.email}
      </text>
      {/* Bottom row of small cutout dots */}
      <circle cx="8" cy="49" r="1.5" fill="#ffffff" opacity="0.4" />
      <circle cx="14" cy="49" r="1.5" fill="#ffffff" opacity="0.35" />
      <circle cx="20" cy="49" r="1.5" fill="#ffffff" opacity="0.3" />
      <circle cx="26" cy="49" r="1.5" fill="#ffffff" opacity="0.25" />
      <circle cx="32" cy="49" r="1.5" fill="#ffffff" opacity="0.2" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#E63946" />
      {/* Large central die-cut window */}
      <rect x="12" y="10" width="67" height="22" rx="5" fill="#ffffff" />
      {/* Company info visible "through" the window */}
      <text
        x="45.5"
        y="20"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="3"
        fill="#E63946"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.3"
        fill="#E63946"
      >
        {data.companyEn}
      </text>
      {/* Small cutout windows for address */}
      <rect x="12" y="36" width="67" height="8" rx="2.5" fill="#ffffff" />
      <text
        x="45.5"
        y="41.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#E63946"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
      {/* Website on the red */}
      <text
        x="45.5"
        y="51"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="rgba(255,255,255,0.8)"
      >
        {data.website}
      </text>
    </g>
  ),
};

// ============================================================
// 4. GRADIENT-EXP (虹) — Olafur Eliasson
// Full-bleed multi-stop gradient, sunrise/rainbow feel
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
        <linearGradient id="gradient-exp-front" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF6B35" />
          <stop offset="20%" stopColor="#F7C948" />
          <stop offset="40%" stopColor="#88D498" />
          <stop offset="60%" stopColor="#44B8D5" />
          <stop offset="80%" stopColor="#6C63FF" />
          <stop offset="100%" stopColor="#C850C0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#gradient-exp-front)" />
      {/* Subtle white overlay for text readability */}
      <rect x="0" y="28" width="91" height="27" fill="#ffffff" opacity="0.15" />
      {/* Name in white, bold to stand against the gradient */}
      <text
        x="8"
        y="18"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="7"
        letterSpacing="0.3"
        fill="#ffffff"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="25"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        letterSpacing="0.3"
        fill="rgba(255,255,255,0.9)"
      >
        {data.nameEn}
      </text>
      <text
        x="8"
        y="31"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="rgba(255,255,255,0.8)"
      >
        {data.titleJa}
      </text>
      <text
        x="8"
        y="41"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="rgba(255,255,255,0.85)"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="45"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="rgba(255,255,255,0.85)"
      >
        {data.email}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="gradient-exp-back" x1="1" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#FF6B35" />
          <stop offset="15%" stopColor="#FF3864" />
          <stop offset="35%" stopColor="#C850C0" />
          <stop offset="55%" stopColor="#6C63FF" />
          <stop offset="75%" stopColor="#44B8D5" />
          <stop offset="90%" stopColor="#88D498" />
          <stop offset="100%" stopColor="#F7C948" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#gradient-exp-back)" />
      {/* Semi-transparent panel for readability */}
      <rect x="10" y="10" width="71" height="35" rx="2" fill="#000000" opacity="0.2" />
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="3.5"
        fill="#ffffff"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.4"
        fill="rgba(255,255,255,0.85)"
      >
        {data.companyEn}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="rgba(255,255,255,0.7)"
      >
        {data.website}
      </text>
      <text
        x="45.5"
        y="40"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="rgba(255,255,255,0.6)"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 5. DIMENSION (奥) — Zaha Hadid
// 3D perspective illusion using parallelograms, architectural depth
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
        <linearGradient id="dimension-depth" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#F0F0F0" />
          <stop offset="100%" stopColor="#D0D0D0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#FAFAFA" />
      {/* Architectural perspective shapes — parallelograms creating depth */}
      {/* Back wall */}
      <polygon points="25,8 70,8 65,20 30,20" fill="#E8E8E8" />
      {/* Left wall */}
      <polygon points="25,8 30,20 30,42 18,48" fill="#D8D8D8" />
      {/* Right wall */}
      <polygon points="70,8 65,20 65,42 77,48" fill="url(#dimension-depth)" />
      {/* Floor plane */}
      <polygon points="30,42 65,42 77,48 18,48" fill="#E0E0E0" />
      {/* Accent line — vanishing point guide */}
      <line x1="47.5" y1="0" x2="47.5" y2="14" stroke="#2D3436" strokeWidth="0.2" opacity="0.3" />
      <line x1="47.5" y1="14" x2="0" y2="55" stroke="#2D3436" strokeWidth="0.15" opacity="0.15" />
      <line x1="47.5" y1="14" x2="91" y2="55" stroke="#2D3436" strokeWidth="0.15" opacity="0.15" />
      {/* Floating structural beam */}
      <polygon points="30,25 65,25 67,27 28,27" fill="#2D3436" opacity="0.12" />
      {/* Name placed with perspective feel */}
      <text
        x="47.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="5.5"
        letterSpacing="0.4"
        fill="#2D3436"
      >
        {data.nameJa}
      </text>
      <text
        x="47.5"
        y="42"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.2"
        fill="#666666"
      >
        {data.nameEn}
      </text>
      {/* Title at the base */}
      <text
        x="47.5"
        y="52"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#999999"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="dimension-back-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2D3436" />
          <stop offset="100%" stopColor="#636E72" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#dimension-back-grad)" />
      {/* Receding perspective grid lines */}
      <line x1="45.5" y1="0" x2="0" y2="55" stroke="#ffffff" strokeWidth="0.15" opacity="0.12" />
      <line x1="45.5" y1="0" x2="91" y2="55" stroke="#ffffff" strokeWidth="0.15" opacity="0.12" />
      <line x1="45.5" y1="0" x2="20" y2="55" stroke="#ffffff" strokeWidth="0.1" opacity="0.08" />
      <line x1="45.5" y1="0" x2="71" y2="55" stroke="#ffffff" strokeWidth="0.1" opacity="0.08" />
      {/* Horizontal depth lines */}
      <line x1="30" y1="15" x2="61" y2="15" stroke="#ffffff" strokeWidth="0.1" opacity="0.15" />
      <line x1="22" y1="25" x2="69" y2="25" stroke="#ffffff" strokeWidth="0.1" opacity="0.12" />
      <line x1="14" y1="35" x2="77" y2="35" stroke="#ffffff" strokeWidth="0.1" opacity="0.1" />
      {/* 3D extruded text feel for company */}
      <text
        x="45.5"
        y="21"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="3"
        fill="rgba(255,255,255,0.3)"
        transform="translate(0.5, 0.5)"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="21"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="3"
        fill="#ffffff"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="rgba(255,255,255,0.7)"
      >
        {data.companyEn}
      </text>
      {/* Contact info */}
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="rgba(255,255,255,0.6)"
      >
        {data.tel} | {data.email}
      </text>
      <text
        x="45.5"
        y="40"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="rgba(255,255,255,0.5)"
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
        fill="rgba(255,255,255,0.35)"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 6. MIRROR (鏡) — Anish Kapoor
// Mirrored/reflected text, name repeated upside-down with opacity
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
        <linearGradient id="mirror-reflection" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F8F8FC" />
          <stop offset="45%" stopColor="#F8F8FC" />
          <stop offset="50%" stopColor="#E0E0E8" />
          <stop offset="55%" stopColor="#ECECF2" />
          <stop offset="100%" stopColor="#ECECF2" />
        </linearGradient>
        <clipPath id="mirror-clip-bottom">
          <rect x="0" y="28" width="91" height="27" />
        </clipPath>
      </defs>
      <rect width="91" height="55" fill="url(#mirror-reflection)" />
      {/* Mirror axis line */}
      <line x1="0" y1="27.5" x2="91" y2="27.5" stroke="#C0C0CC" strokeWidth="0.2" />
      {/* Original name — above the mirror line */}
      <text
        x="45.5"
        y="16"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="6.5"
        letterSpacing="0.5"
        fill="#1B1B2F"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="23"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2.2"
        letterSpacing="0.3"
        fill="#555566"
      >
        {data.nameEn}
      </text>
      {/* Reflected (mirrored) name — flipped vertically, fading */}
      <g clipPath="url(#mirror-clip-bottom)">
        <text
          x="45.5"
          y="16"
          textAnchor="middle"
          fontFamily="'Noto Sans JP', sans-serif"
          fontWeight="600"
          fontSize="6.5"
          letterSpacing="0.5"
          fill="#1B1B2F"
          opacity="0.15"
          transform="scale(1,-1) translate(0,-55)"
        >
          {data.nameJa}
        </text>
        <text
          x="45.5"
          y="23"
          textAnchor="middle"
          fontFamily="'Inter', sans-serif"
          fontWeight="300"
          fontSize="2.2"
          letterSpacing="0.3"
          fill="#555566"
          opacity="0.12"
          transform="scale(1,-1) translate(0,-55)"
        >
          {data.nameEn}
        </text>
      </g>
      {/* Title floating near the reflection */}
      <text
        x="45.5"
        y="49"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#9999AA"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="mirror-back-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1B1B2F" />
          <stop offset="48%" stopColor="#1B1B2F" />
          <stop offset="50%" stopColor="#2A2A44" />
          <stop offset="100%" stopColor="#24243A" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#mirror-back-grad)" />
      {/* Mirror axis */}
      <line x1="0" y1="27.5" x2="91" y2="27.5" stroke="#444466" strokeWidth="0.2" />
      {/* Company — original */}
      <text
        x="45.5"
        y="16"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="3"
        fill="#ffffff"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="rgba(255,255,255,0.6)"
      >
        {data.companyEn}
      </text>
      {/* Company — reflected */}
      <text
        x="45.5"
        y="40"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="3"
        fill="#ffffff"
        opacity="0.12"
        transform="translate(0, 0) scale(1, -1)"
        style={{ transformOrigin: '45.5px 40px' }}
      >
        {data.companyJa}
      </text>
      {/* Contact details at the bottom */}
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="rgba(255,255,255,0.5)"
      >
        {data.tel} | {data.email}
      </text>
      <text
        x="45.5"
        y="40"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="rgba(255,255,255,0.4)"
      >
        {data.website}
      </text>
      <text
        x="45.5"
        y="49"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.1"
        fill="rgba(255,255,255,0.25)"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 7. SCAN (走) — Nam June Paik
// Horizontal scan lines across card, CRT/video art feel
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
        <line
          key={`scan-front-${i}`}
          x1="0"
          y1={i}
          x2="91"
          y2={i}
          stroke="#00FF88"
          strokeWidth="0.3"
          opacity={0.06 + (i % 4.5 === 0 ? 0.08 : 0)}
        />
      );
    }
    return (
      <g>
        <rect width="91" height="55" fill="#0A0A12" />
        {/* CRT scan lines */}
        {scanLines}
        {/* Slight phosphor glow effect — horizontal band */}
        <rect x="0" y="12" width="91" height="8" fill="#00FF88" opacity="0.03" />
        <rect x="0" y="30" width="91" height="6" fill="#00FF88" opacity="0.02" />
        {/* Glitch-offset name */}
        <text
          x="9"
          y="20"
          fontFamily="'Noto Sans JP', sans-serif"
          fontWeight="500"
          fontSize="6.5"
          fill="#00FF88"
          opacity="0.15"
        >
          {data.nameJa}
        </text>
        <text
          x="8"
          y="20"
          fontFamily="'Noto Sans JP', sans-serif"
          fontWeight="500"
          fontSize="6.5"
          fill="#00FF88"
        >
          {data.nameJa}
        </text>
        {/* Slight red channel offset for glitch effect */}
        <text
          x="8.4"
          y="20"
          fontFamily="'Noto Sans JP', sans-serif"
          fontWeight="500"
          fontSize="6.5"
          fill="#FF0044"
          opacity="0.08"
        >
          {data.nameJa}
        </text>
        <text
          x="8"
          y="27"
          fontFamily="'Space Grotesk', sans-serif"
          fontWeight="400"
          fontSize="2.2"
          letterSpacing="0.3"
          fill="#00DD77"
        >
          {data.nameEn}
        </text>
        <text
          x="8"
          y="33"
          fontFamily="'Noto Sans JP', sans-serif"
          fontWeight="300"
          fontSize="1.8"
          fill="#00AA55"
        >
          {data.titleJa}
        </text>
        {/* Blinking cursor */}
        <rect x="8" y="40" width="1" height="3" fill="#00FF88" opacity="0.8" />
        <text
          x="12"
          y="42.5"
          fontFamily="'Space Grotesk', sans-serif"
          fontWeight="300"
          fontSize="1.5"
          fill="#00BB66"
        >
          {data.tel}
        </text>
        <text
          x="12"
          y="46.5"
          fontFamily="'Space Grotesk', sans-serif"
          fontWeight="300"
          fontSize="1.5"
          fill="#00BB66"
        >
          {data.email}
        </text>
      </g>
    );
  },
  renderBack: (data: CardData) => {
    const scanLines: React.ReactNode[] = [];
    for (let i = 0; i < 55; i += 1.5) {
      scanLines.push(
        <line
          key={`scan-back-${i}`}
          x1="0"
          y1={i}
          x2="91"
          y2={i}
          stroke="#00FF88"
          strokeWidth="0.3"
          opacity={0.05 + (i % 6 === 0 ? 0.06 : 0)}
        />
      );
    }
    return (
      <g>
        <rect width="91" height="55" fill="#0A0A12" />
        {scanLines}
        {/* Signal noise band */}
        <rect x="0" y="22" width="91" height="2" fill="#00FF88" opacity="0.04" />
        {/* Company as broadcast signal */}
        <text
          x="45.5"
          y="18"
          textAnchor="middle"
          fontFamily="'Noto Sans JP', sans-serif"
          fontWeight="500"
          fontSize="3.5"
          fill="#00FF88"
        >
          {data.companyJa}
        </text>
        <text
          x="45.5"
          y="24"
          textAnchor="middle"
          fontFamily="'Space Grotesk', sans-serif"
          fontWeight="400"
          fontSize="2"
          letterSpacing="0.4"
          fill="#00DD77"
        >
          {data.companyEn}
        </text>
        {/* Horizontal divider — signal break */}
        <line x1="15" y1="29" x2="76" y2="29" stroke="#00FF88" strokeWidth="0.15" opacity="0.5" />
        <text
          x="45.5"
          y="35"
          textAnchor="middle"
          fontFamily="'Space Grotesk', sans-serif"
          fontWeight="300"
          fontSize="1.4"
          fill="#00AA55"
        >
          {data.website}
        </text>
        <text
          x="45.5"
          y="42"
          textAnchor="middle"
          fontFamily="'Noto Sans JP', sans-serif"
          fontWeight="200"
          fontSize="1.2"
          fill="#008844"
        >
          〒{data.zipCode} {data.addressJa}
        </text>
        {/* Channel indicator bottom-right */}
        <text
          x="82"
          y="51"
          textAnchor="end"
          fontFamily="'Space Grotesk', sans-serif"
          fontWeight="500"
          fontSize="1.2"
          fill="#00FF88"
          opacity="0.4"
        >
          CH-01 NTSC
        </text>
      </g>
    );
  },
};

// ============================================================
// 8. THERMAL (熱) — Experimental print
// Thermal printer aesthetic — rough, monospaced, receipt-like
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
      <rect width="91" height="55" fill="#F5F0E8" />
      {/* Thermal paper texture — faint horizontal streaks */}
      <rect x="0" y="3" width="91" height="0.3" fill="#E0D8CC" opacity="0.5" />
      <rect x="0" y="8" width="91" height="0.2" fill="#E0D8CC" opacity="0.4" />
      <rect x="0" y="14" width="91" height="0.3" fill="#E0D8CC" opacity="0.3" />
      <rect x="0" y="21" width="91" height="0.2" fill="#E0D8CC" opacity="0.5" />
      <rect x="0" y="28" width="91" height="0.3" fill="#E0D8CC" opacity="0.35" />
      <rect x="0" y="35" width="91" height="0.2" fill="#E0D8CC" opacity="0.45" />
      <rect x="0" y="42" width="91" height="0.3" fill="#E0D8CC" opacity="0.3" />
      <rect x="0" y="49" width="91" height="0.2" fill="#E0D8CC" opacity="0.4" />
      {/* Receipt-like dashed separator */}
      <line x1="6" y1="5" x2="85" y2="5" stroke="#2C2C2C" strokeWidth="0.15" strokeDasharray="1 0.5" />
      {/* Monospaced receipt-style header */}
      <text
        x="45.5"
        y="11"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="1.4"
        letterSpacing="0.8"
        fill="#2C2C2C"
      >
        *** BUSINESS CARD ***
      </text>
      <line x1="6" y1="14" x2="85" y2="14" stroke="#2C2C2C" strokeWidth="0.15" strokeDasharray="1 0.5" />
      {/* Name — slightly rough, thermal feel */}
      <text
        x="8"
        y="21"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5"
        fill="#2C2C2C"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="26.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.2"
        fill="#4A4A4A"
      >
        {data.nameEn}
      </text>
      <text
        x="8"
        y="32"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#666666"
      >
        {data.titleJa}
      </text>
      <line x1="6" y1="35" x2="85" y2="35" stroke="#2C2C2C" strokeWidth="0.15" strokeDasharray="1 0.5" />
      {/* Receipt-style key:value */}
      <text
        x="8"
        y="39.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#2C2C2C"
      >
        TEL: {data.tel}
      </text>
      <text
        x="8"
        y="43"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#2C2C2C"
      >
        MAIL: {data.email}
      </text>
      <text
        x="8"
        y="46.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#2C2C2C"
      >
        WEB: {data.website}
      </text>
      <line x1="6" y1="49.5" x2="85" y2="49.5" stroke="#2C2C2C" strokeWidth="0.15" strokeDasharray="1 0.5" />
      <text
        x="45.5"
        y="53"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1"
        letterSpacing="0.3"
        fill="#999999"
      >
        THANK YOU
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E8" />
      {/* Thermal streaks */}
      <rect x="0" y="5" width="91" height="0.3" fill="#E0D8CC" opacity="0.4" />
      <rect x="0" y="12" width="91" height="0.2" fill="#E0D8CC" opacity="0.5" />
      <rect x="0" y="20" width="91" height="0.3" fill="#E0D8CC" opacity="0.35" />
      <rect x="0" y="30" width="91" height="0.2" fill="#E0D8CC" opacity="0.45" />
      <rect x="0" y="38" width="91" height="0.3" fill="#E0D8CC" opacity="0.3" />
      <rect x="0" y="46" width="91" height="0.2" fill="#E0D8CC" opacity="0.4" />
      {/* Top separator */}
      <line x1="6" y1="6" x2="85" y2="6" stroke="#2C2C2C" strokeWidth="0.15" strokeDasharray="1 0.5" />
      {/* Company header */}
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="3"
        fill="#2C2C2C"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="19"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#4A4A4A"
      >
        {data.companyEn}
      </text>
      <line x1="6" y1="23" x2="85" y2="23" stroke="#2C2C2C" strokeWidth="0.15" strokeDasharray="1 0.5" />
      {/* Address block */}
      <text
        x="8"
        y="28"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#2C2C2C"
      >
        ZIP: {data.zipCode}
      </text>
      <text
        x="8"
        y="32"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#2C2C2C"
      >
        {data.addressJa}
      </text>
      <text
        x="8"
        y="36"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#666666"
      >
        {data.addressEn}
      </text>
      <line x1="6" y1="40" x2="85" y2="40" stroke="#2C2C2C" strokeWidth="0.15" strokeDasharray="1 0.5" />
      {/* Barcode-like decorative stripe */}
      <rect x="20" y="43" width="0.8" height="6" fill="#2C2C2C" />
      <rect x="22" y="43" width="0.4" height="6" fill="#2C2C2C" />
      <rect x="23.5" y="43" width="1.2" height="6" fill="#2C2C2C" />
      <rect x="26" y="43" width="0.6" height="6" fill="#2C2C2C" />
      <rect x="28" y="43" width="0.4" height="6" fill="#2C2C2C" />
      <rect x="29.5" y="43" width="1" height="6" fill="#2C2C2C" />
      <rect x="31.5" y="43" width="0.4" height="6" fill="#2C2C2C" />
      <rect x="33" y="43" width="0.8" height="6" fill="#2C2C2C" />
      <rect x="35" y="43" width="0.4" height="6" fill="#2C2C2C" />
      <rect x="36.5" y="43" width="1.2" height="6" fill="#2C2C2C" />
      <rect x="39" y="43" width="0.6" height="6" fill="#2C2C2C" />
      <rect x="41" y="43" width="0.4" height="6" fill="#2C2C2C" />
      <rect x="42.5" y="43" width="1" height="6" fill="#2C2C2C" />
      <rect x="44.5" y="43" width="0.4" height="6" fill="#2C2C2C" />
      <rect x="46" y="43" width="0.8" height="6" fill="#2C2C2C" />
      <rect x="48" y="43" width="1.2" height="6" fill="#2C2C2C" />
      <rect x="50.5" y="43" width="0.4" height="6" fill="#2C2C2C" />
      <rect x="52" y="43" width="0.6" height="6" fill="#2C2C2C" />
      <rect x="54" y="43" width="0.4" height="6" fill="#2C2C2C" />
      <rect x="55.5" y="43" width="1" height="6" fill="#2C2C2C" />
      <rect x="57.5" y="43" width="0.8" height="6" fill="#2C2C2C" />
      <rect x="59.5" y="43" width="0.4" height="6" fill="#2C2C2C" />
      <rect x="61" y="43" width="1.2" height="6" fill="#2C2C2C" />
      <rect x="63.5" y="43" width="0.6" height="6" fill="#2C2C2C" />
      <rect x="65.5" y="43" width="0.4" height="6" fill="#2C2C2C" />
      <rect x="67" y="43" width="1" height="6" fill="#2C2C2C" />
      <rect x="69" y="43" width="0.4" height="6" fill="#2C2C2C" />
      <rect x="70.5" y="43" width="0.8" height="6" fill="#2C2C2C" />
    </g>
  ),
};

// ============================================================
// 9. OVERPRINT (重) — Karel Martens
// Overprint effect — overlapping colored shapes creating intersections
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
      <rect width="91" height="55" fill="#F8F6F0" />
      {/* Red ink layer — large circle */}
      <circle cx="30" cy="22" r="18" fill="#DD2244" opacity="0.5" />
      {/* Blue ink layer — large circle, overlapping */}
      <circle cx="48" cy="22" r="18" fill="#2244AA" opacity="0.5" />
      {/* The overlap creates a purple/dark area via mix-blend */}
      {/* Additional red shapes */}
      <rect x="60" y="4" width="25" height="14" fill="#DD2244" opacity="0.35" />
      {/* Additional blue shapes */}
      <rect x="65" y="10" width="22" height="14" fill="#2244AA" opacity="0.35" />
      {/* Small accent shapes */}
      <circle cx="78" cy="40" r="6" fill="#DD2244" opacity="0.25" />
      <rect x="70" y="36" width="14" height="8" fill="#2244AA" opacity="0.25" />
      {/* Name — set in the "white" reading area */}
      <text
        x="8"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="5.5"
        fill="#1a1a1a"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="48"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.2"
        fill="#2244AA"
      >
        {data.nameEn}
      </text>
      <text
        x="8"
        y="53"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#DD2244"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F8F6F0" />
      {/* Overprint layer 1: Red geometric shapes */}
      <rect x="0" y="0" width="50" height="28" fill="#DD2244" opacity="0.4" />
      <circle cx="70" cy="35" r="20" fill="#DD2244" opacity="0.3" />
      {/* Overprint layer 2: Blue geometric shapes */}
      <rect x="35" y="12" width="56" height="24" fill="#2244AA" opacity="0.4" />
      <circle cx="25" cy="40" r="15" fill="#2244AA" opacity="0.3" />
      {/* Company info in the complex overprint field */}
      <text
        x="45.5"
        y="16"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="3"
        fill="#ffffff"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#ffffff"
      >
        {data.companyEn}
      </text>
      {/* Contact details */}
      <text
        x="45.5"
        y="33"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#1a1a1a"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="37"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#1a1a1a"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="41"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#1a1a1a"
      >
        {data.website}
      </text>
      <text
        x="45.5"
        y="49"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#666666"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 10. META (己) — Metahaven
// Self-referential — card displays its own dimensions and specs
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
      <rect width="91" height="55" fill="#ffffff" />
      {/* Dimension markers — top edge */}
      <line x1="0" y1="2" x2="91" y2="2" stroke="#0A0A0A" strokeWidth="0.1" />
      <line x1="0" y1="1" x2="0" y2="3" stroke="#0A0A0A" strokeWidth="0.1" />
      <line x1="91" y1="1" x2="91" y2="3" stroke="#0A0A0A" strokeWidth="0.1" />
      <text
        x="45.5"
        y="1.5"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="0.9"
        fill="#999999"
      >
        91mm
      </text>
      {/* Dimension markers — left edge */}
      <line x1="2" y1="0" x2="2" y2="55" stroke="#0A0A0A" strokeWidth="0.1" />
      <line x1="1" y1="0" x2="3" y2="0" stroke="#0A0A0A" strokeWidth="0.1" />
      <line x1="1" y1="55" x2="3" y2="55" stroke="#0A0A0A" strokeWidth="0.1" />
      <text
        x="2"
        y="27.5"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="0.9"
        fill="#999999"
        transform="rotate(-90, 2, 27.5)"
      >
        55mm
      </text>
      {/* Spec label: top-left */}
      <text
        x="7"
        y="8"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1"
        fill="#BBBBBB"
      >
        TYPE: MEISHI (名刺)
      </text>
      <text
        x="7"
        y="10.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1"
        fill="#BBBBBB"
      >
        STANDARD: JIS X 5101
      </text>
      <text
        x="7"
        y="13"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1"
        fill="#BBBBBB"
      >
        DIMENSIONS: 91 x 55 mm
      </text>
      <text
        x="7"
        y="15.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1"
        fill="#BBBBBB"
      >
        SIDE: FRONT (OMOTE / 表)
      </text>
      {/* Thin border indicating safe zone */}
      <rect x="5" y="5" width="81" height="45" fill="none" stroke="#E0E0E0" strokeWidth="0.1" strokeDasharray="1 0.8" />
      {/* The actual content — the person IS the data */}
      <text
        x="7"
        y="24"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1"
        fill="#999999"
      >
        FIELD: name_ja
      </text>
      <text
        x="7"
        y="30"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="5.5"
        fill="#0A0A0A"
      >
        {data.nameJa}
      </text>
      <text
        x="7"
        y="34"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1"
        fill="#999999"
      >
        FIELD: name_en
      </text>
      <text
        x="7"
        y="38"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        letterSpacing="0.15"
        fill="#333333"
      >
        {data.nameEn}
      </text>
      <text
        x="7"
        y="42"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1"
        fill="#999999"
      >
        FIELD: title_ja
      </text>
      <text
        x="7"
        y="45.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="#666666"
      >
        {data.titleJa}
      </text>
      {/* Bottom-right: object ID */}
      <text
        x="84"
        y="52"
        textAnchor="end"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="0.9"
        fill="#CCCCCC"
      >
        OBJECT: business_card_v1.0
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Dimension markers — top */}
      <line x1="0" y1="2" x2="91" y2="2" stroke="#0A0A0A" strokeWidth="0.1" />
      <line x1="0" y1="1" x2="0" y2="3" stroke="#0A0A0A" strokeWidth="0.1" />
      <line x1="91" y1="1" x2="91" y2="3" stroke="#0A0A0A" strokeWidth="0.1" />
      <text
        x="45.5"
        y="1.5"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="0.9"
        fill="#999999"
      >
        91mm
      </text>
      {/* Safe zone border */}
      <rect x="5" y="5" width="81" height="45" fill="none" stroke="#E0E0E0" strokeWidth="0.1" strokeDasharray="1 0.8" />
      {/* Side indicator */}
      <text
        x="7"
        y="8"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1"
        fill="#BBBBBB"
      >
        SIDE: BACK (URA / 裏)
      </text>
      {/* Company data fields */}
      <text
        x="7"
        y="13"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1"
        fill="#999999"
      >
        FIELD: company_ja
      </text>
      <text
        x="7"
        y="17"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.8"
        fill="#0A0A0A"
      >
        {data.companyJa}
      </text>
      <text
        x="7"
        y="20"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1"
        fill="#999999"
      >
        FIELD: company_en
      </text>
      <text
        x="7"
        y="23"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#444444"
      >
        {data.companyEn}
      </text>
      {/* Contact data */}
      <text
        x="7"
        y="27"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1"
        fill="#999999"
      >
        FIELD: tel
      </text>
      <text
        x="7"
        y="30"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#333333"
      >
        {data.tel}
      </text>
      <text
        x="7"
        y="33"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1"
        fill="#999999"
      >
        FIELD: email
      </text>
      <text
        x="7"
        y="36"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#333333"
      >
        {data.email}
      </text>
      <text
        x="7"
        y="39"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1"
        fill="#999999"
      >
        FIELD: website
      </text>
      <text
        x="7"
        y="42"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#333333"
      >
        {data.website}
      </text>
      <text
        x="7"
        y="45"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1"
        fill="#999999"
      >
        FIELD: address
      </text>
      <text
        x="7"
        y="48"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#555555"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
      {/* Object metadata footer */}
      <text
        x="84"
        y="52"
        textAnchor="end"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="0.9"
        fill="#CCCCCC"
      >
        RENDER: SVG | FIELDS: 12 | FORMAT: JIS
      </text>
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
