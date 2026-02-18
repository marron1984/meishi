import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. DESSAU (校) — The Bauhaus school building
// Architectural color blocks with texture overlays and grid precision
// ============================================================
const dessauTemplate: TemplateDefinition = {
  id: 'bauhaus-dessau',
  name: 'DESSAU',
  nameJa: '校',
  category: 'bauhaus',
  designer: 'Bauhaus Series',
  description: 'デッサウ校舎。直角と原色のブロックが建築的秩序を描く。',
  accentColor: '#E63946',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="bauhaus-dessau-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" seed="30" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
        </filter>
        <filter id="bauhaus-dessau-shadow">
          <feGaussianBlur stdDeviation="0.4" />
          <feOffset dx="0.2" dy="0.25" />
          <feComposite in="SourceGraphic" />
        </filter>
        <linearGradient id="bauhaus-dessau-navy" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1D3557" />
          <stop offset="100%" stopColor="#152A48" />
        </linearGradient>
        <linearGradient id="bauhaus-dessau-red" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E63946" />
          <stop offset="100%" stopColor="#D42D3A" />
        </linearGradient>
        <linearGradient id="bauhaus-dessau-yellow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#F4D35E" />
          <stop offset="100%" stopColor="#E8C44A" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#FAFAFA" />
      {/* Architectural color blocks */}
      <rect x="0" y="0" width="25" height="55" fill="url(#bauhaus-dessau-navy)" filter="url(#bauhaus-dessau-texture)" />
      <rect x="0" y="0" width="25" height="18" fill="url(#bauhaus-dessau-red)" />
      <rect x="25" y="45" width="66" height="10" fill="url(#bauhaus-dessau-yellow)" />
      {/* Grid alignment marks */}
      <line x1="25" y1="0" x2="25" y2="55" stroke="#1D3557" strokeWidth="0.08" opacity="0.1" />
      <line x1="25" y1="18" x2="91" y2="18" stroke="#E63946" strokeWidth="0.06" opacity="0.08" />
      {/* Window grid pattern in navy */}
      <g opacity="0.12">
        <rect x="3" y="22" width="4" height="3" fill="#FAFAFA" rx="0.2" />
        <rect x="9" y="22" width="4" height="3" fill="#FAFAFA" rx="0.2" />
        <rect x="15" y="22" width="4" height="3" fill="#FAFAFA" rx="0.2" />
        <rect x="3" y="28" width="4" height="3" fill="#FAFAFA" rx="0.2" />
        <rect x="9" y="28" width="4" height="3" fill="#FAFAFA" rx="0.2" />
        <rect x="15" y="28" width="4" height="3" fill="#FAFAFA" rx="0.2" />
      </g>
      {/* Corner accent dot */}
      <circle cx="88" cy="3" r="0.6" fill="#E63946" opacity="0.2" />
      <text x="34" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="6.5" letterSpacing="0.3" fill="#1a1a1a">
        {data.nameJa}
      </text>
      <text x="34" y="26.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="500" fontSize="2" letterSpacing="0.3" fill="#555555">
        {data.nameEn.toUpperCase()}
      </text>
      <text x="34" y="34" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#888888">
        {data.titleJa}
      </text>
      <text x="12.5" y="32" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(255,255,255,0.7)">
        {data.companyJa}
      </text>
      <text x="34" y="49" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#1a1a1a">
        {data.email}
      </text>
      {data.logo && <image href={data.logo} x="34" y="36" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="bauhaus-dessau-back-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="3" seed="31" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
        </filter>
        <filter id="bauhaus-dessau-back-shadow">
          <feGaussianBlur stdDeviation="0.3" />
          <feOffset dx="0.15" dy="0.2" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="#FAFAFA" />
      <rect x="66" y="0" width="25" height="55" fill="url(#bauhaus-dessau-navy)" filter="url(#bauhaus-dessau-back-texture)" />
      <rect x="66" y="37" width="25" height="18" fill="url(#bauhaus-dessau-red)" />
      <rect x="0" y="0" width="66" height="10" fill="url(#bauhaus-dessau-yellow)" />
      {/* Grid marks */}
      <line x1="66" y1="0" x2="66" y2="55" stroke="#1D3557" strokeWidth="0.08" opacity="0.1" />
      {/* Window pattern */}
      <g opacity="0.12">
        <rect x="72" y="8" width="4" height="3" fill="#FAFAFA" rx="0.2" />
        <rect x="78" y="8" width="4" height="3" fill="#FAFAFA" rx="0.2" />
        <rect x="72" y="14" width="4" height="3" fill="#FAFAFA" rx="0.2" />
        <rect x="78" y="14" width="4" height="3" fill="#FAFAFA" rx="0.2" />
      </g>
      {/* Accent dot */}
      <circle cx="3" cy="52" r="0.6" fill="#F4D35E" opacity="0.3" />
      <text x="10" y="7.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="2.5" fill="#1a1a1a">
        {data.companyJa}
      </text>
      <text x="10" y="19" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#666666">
        {data.companyEn}
      </text>
      <text x="10" y="23.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#888888">
        {data.titleJa}
      </text>
      <line x1="10" y1="26.5" x2="55" y2="26.5" stroke="#E63946" strokeWidth="0.12" />
      <text x="10" y="31.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#333333">
        {data.tel}
      </text>
      <text x="10" y="36" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#333333">
        {data.email}
      </text>
      <text x="10" y="40.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#333333">
        {data.website}
      </text>
      <text x="10" y="48" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#999999">
        〒{data.zipCode} {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="78" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 2. KANDINSKY (点線面) — Point, Line, Plane
// Dynamic abstract composition with geometric interplay
// ============================================================
const kandinskyTemplate: TemplateDefinition = {
  id: 'bauhaus-kandinsky',
  name: 'KANDINSKY',
  nameJa: '点線面',
  category: 'bauhaus',
  designer: 'Bauhaus Series',
  description: '点・線・面。カンディンスキーの抽象構成が踊る。',
  accentColor: '#1D3557',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="bauhaus-kandinsky-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" seed="32" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
        </filter>
        <filter id="bauhaus-kandinsky-shadow">
          <feGaussianBlur stdDeviation="0.3" />
          <feOffset dx="0.15" dy="0.18" />
          <feComposite in="SourceGraphic" />
        </filter>
        <radialGradient id="bauhaus-kandinsky-circle" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E63946" stopOpacity="0.25" />
          <stop offset="60%" stopColor="#E63946" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#E63946" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="bauhaus-kandinsky-diag" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#1D3557" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#1D3557" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#FFFFF5" />
      {/* Abstract geometric elements */}
      <circle cx="72" cy="15" r="9" fill="url(#bauhaus-kandinsky-circle)" />
      <circle cx="72" cy="15" r="8" fill="none" stroke="#E63946" strokeWidth="0.45" opacity="0.6" />
      <circle cx="72" cy="15" r="4" fill="#E63946" opacity="0.12" />
      <circle cx="72" cy="15" r="1.5" fill="#E63946" opacity="0.8" />
      {/* Triangle */}
      <polygon points="15,42 23,42 19,35" fill="#F4D35E" opacity="0.55" />
      <polygon points="15,42 23,42 19,35" fill="none" stroke="#F4D35E" strokeWidth="0.2" opacity="0.3" />
      {/* Diagonal tension line */}
      <line x1="10" y1="48" x2="80" y2="5" stroke="#1D3557" strokeWidth="0.12" opacity="0.25" />
      {/* Horizontal force line */}
      <line x1="5" y1="35" x2="32" y2="35" stroke="#1D3557" strokeWidth="0.35" />
      <circle cx="5" cy="35" r="0.5" fill="#1D3557" />
      {/* Square element */}
      <rect x="79" y="39" width="7" height="7" fill="#1D3557" opacity="0.18" />
      <rect x="79" y="39" width="7" height="7" fill="none" stroke="#1D3557" strokeWidth="0.15" opacity="0.25" />
      <text x="10" y="18" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="6" letterSpacing="0.3" fill="#1D3557">
        {data.nameJa}
      </text>
      <text x="10" y="24" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.8" letterSpacing="0.3" fill="#555555">
        {data.nameEn}
      </text>
      <text x="10" y="31" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#888888">
        {data.titleJa}
      </text>
      {data.logo && <image href={data.logo} x="10" y="44" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="bauhaus-kandinsky-back-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" seed="33" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
        </filter>
        <filter id="bauhaus-kandinsky-back-shadow">
          <feGaussianBlur stdDeviation="0.25" />
          <feOffset dx="0.12" dy="0.15" />
          <feComposite in="SourceGraphic" />
        </filter>
        <radialGradient id="bauhaus-kandinsky-back-circle" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E63946" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#E63946" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="#FFFFF5" />
      {/* Mirrored abstract elements */}
      <circle cx="20" cy="42" r="7" fill="url(#bauhaus-kandinsky-back-circle)" />
      <circle cx="20" cy="42" r="6" fill="none" stroke="#E63946" strokeWidth="0.35" opacity="0.4" />
      <circle cx="20" cy="42" r="2" fill="#E63946" opacity="0.2" />
      <polygon points="75,8 83,8 79,1" fill="#F4D35E" opacity="0.35" />
      <line x1="30" y1="50" x2="85" y2="10" stroke="#1D3557" strokeWidth="0.1" opacity="0.2" />
      <rect x="4" y="4" width="5" height="5" fill="#1D3557" opacity="0.12" />
      {/* Force line */}
      <line x1="60" y1="20" x2="85" y2="20" stroke="#1D3557" strokeWidth="0.25" />
      <circle cx="85" cy="20" r="0.4" fill="#1D3557" />
      <text x="45.5" y="12" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="2.5" fill="#1D3557">
        {data.companyJa}
      </text>
      <text x="45.5" y="16.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#888888">
        {data.companyEn}
      </text>
      <text x="45.5" y="21" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.7" fill="#666666">
        {data.titleJa}
      </text>
      <line x1="20" y1="24" x2="71" y2="24" stroke="#1D3557" strokeWidth="0.12" />
      <text x="45.5" y="29.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#333333">
        {data.tel}
      </text>
      <text x="45.5" y="33.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#333333">
        {data.email}
      </text>
      <text x="45.5" y="37.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#333333">
        {data.website}
      </text>
      <text x="45.5" y="48" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#999999">
        〒{data.zipCode} {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="41.5" y="49" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 3. MOHOLY (光) — Moholy-Nagy light experiments
// Luminous overlapping circles on dark ground, photogram aesthetic
// ============================================================
const moholyTemplate: TemplateDefinition = {
  id: 'bauhaus-moholy',
  name: 'MOHOLY',
  nameJa: '光',
  category: 'bauhaus',
  designer: 'Bauhaus Series',
  description: '光の実験。モホイ＝ナジの透過する円と光のコンポジション。',
  accentColor: '#F4D35E',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="bauhaus-moholy-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="4" seed="34" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="screen" />
        </filter>
        <filter id="bauhaus-moholy-shadow">
          <feGaussianBlur stdDeviation="0.5" />
          <feOffset dx="0.2" dy="0.3" />
          <feComposite in="SourceGraphic" />
        </filter>
        <radialGradient id="bauhaus-moholy-glow-r" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E63946" stopOpacity="0.35" />
          <stop offset="60%" stopColor="#E63946" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#E63946" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="bauhaus-moholy-glow-y" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F4D35E" stopOpacity="0.3" />
          <stop offset="60%" stopColor="#F4D35E" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#F4D35E" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="bauhaus-moholy-glow-b" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4A7AB5" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#1D3557" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="bauhaus-moholy-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#222222" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#bauhaus-moholy-bg)" />
      {/* Luminous overlapping circles */}
      <circle cx="65" cy="20" r="18" fill="url(#bauhaus-moholy-glow-r)" />
      <circle cx="55" cy="30" r="14" fill="url(#bauhaus-moholy-glow-y)" />
      <circle cx="72" cy="35" r="10" fill="url(#bauhaus-moholy-glow-b)" />
      {/* Light center */}
      <circle cx="60" cy="25" r="3" fill="#ffffff" opacity="0.1" />
      <circle cx="60" cy="25" r="1" fill="#ffffff" opacity="0.2" />
      {/* Light beam lines */}
      <line x1="0" y1="10" x2="45" y2="20" stroke="#ffffff" strokeWidth="0.06" opacity="0.25" />
      <line x1="0" y1="15" x2="45" y2="25" stroke="#ffffff" strokeWidth="0.06" opacity="0.18" />
      <line x1="0" y1="20" x2="45" y2="30" stroke="#ffffff" strokeWidth="0.04" opacity="0.12" />
      <text x="8" y="19" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="6" letterSpacing="0.8" fill="#ffffff">
        {data.nameJa}
      </text>
      <text x="8" y="25.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.8" letterSpacing="0.4" fill="rgba(255,255,255,0.6)">
        {data.nameEn}
      </text>
      <text x="8" y="37" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="rgba(255,255,255,0.4)">
        {data.titleJa}
      </text>
      <text x="8" y="45" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="2" fill="rgba(255,255,255,0.3)">
        {data.companyJa}
      </text>
      {data.logo && <image href={data.logo} x="8" y="47" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="bauhaus-moholy-back-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.45" numOctaves="4" seed="35" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="screen" />
        </filter>
        <filter id="bauhaus-moholy-back-shadow">
          <feGaussianBlur stdDeviation="0.4" />
          <feOffset dx="0.15" dy="0.2" />
          <feComposite in="SourceGraphic" />
        </filter>
        <radialGradient id="bauhaus-moholy-back-glow-r" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E63946" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#E63946" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="bauhaus-moholy-back-glow-y" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F4D35E" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#F4D35E" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#bauhaus-moholy-bg)" />
      <circle cx="25" cy="35" r="15" fill="url(#bauhaus-moholy-back-glow-r)" />
      <circle cx="35" cy="25" r="11" fill="url(#bauhaus-moholy-back-glow-y)" />
      <circle cx="18" cy="28" r="8" fill="url(#bauhaus-moholy-glow-b)" />
      {/* Light point */}
      <circle cx="28" cy="30" r="1.5" fill="#ffffff" opacity="0.08" />
      {/* Light beams */}
      <line x1="91" y1="5" x2="50" y2="25" stroke="#ffffff" strokeWidth="0.04" opacity="0.15" />
      <line x1="91" y1="10" x2="50" y2="30" stroke="#ffffff" strokeWidth="0.04" opacity="0.1" />
      <text x="83" y="11" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#ffffff">
        {data.companyJa}
      </text>
      <text x="83" y="15.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(255,255,255,0.5)">
        {data.companyEn}
      </text>
      <text x="83" y="20" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.7" fill="rgba(255,255,255,0.4)">
        {data.titleJa}
      </text>
      <line x1="50" y1="23" x2="83" y2="23" stroke="rgba(255,255,255,0.12)" strokeWidth="0.15" />
      <text x="83" y="28" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="rgba(255,255,255,0.7)">
        {data.tel}
      </text>
      <text x="83" y="32.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="rgba(255,255,255,0.7)">
        {data.email}
      </text>
      <text x="83" y="37" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="rgba(255,255,255,0.7)">
        {data.website}
      </text>
      <text x="83" y="48" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="rgba(255,255,255,0.35)">
        〒{data.zipCode} {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="75" y="48" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 4. ALBERS (色) — Josef Albers color interaction
// Nested squares with chromatic vibration and depth
// ============================================================
const albersTemplate: TemplateDefinition = {
  id: 'bauhaus-albers',
  name: 'ALBERS',
  nameJa: '色',
  category: 'bauhaus',
  designer: 'Bauhaus Series',
  description: '色の相互作用。ネストされた正方形が色彩の対話を生む。',
  accentColor: '#E63946',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="bauhaus-albers-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="3" seed="36" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
        </filter>
        <filter id="bauhaus-albers-shadow">
          <feGaussianBlur stdDeviation="0.35" />
          <feOffset dx="0.18" dy="0.22" />
          <feComposite in="SourceGraphic" />
        </filter>
        <linearGradient id="bauhaus-albers-yellow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F4D35E" />
          <stop offset="100%" stopColor="#E8C44A" />
        </linearGradient>
        <linearGradient id="bauhaus-albers-red" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E63946" />
          <stop offset="100%" stopColor="#D42D3A" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#bauhaus-albers-yellow)" />
      {/* Albers nested squares with subtle depth */}
      <rect x="54" y="4" width="33" height="33" fill="url(#bauhaus-albers-red)" filter="url(#bauhaus-albers-texture)" />
      <rect x="59" y="9" width="23" height="23" fill="#1D3557" />
      <rect x="65" y="15" width="11" height="11" fill="#F4D35E" />
      <rect x="68" y="18" width="5" height="5" fill="#E63946" opacity="0.5" />
      {/* Subtle vibration lines */}
      <line x1="54" y1="4" x2="54" y2="37" stroke="#D42D3A" strokeWidth="0.08" opacity="0.3" />
      <line x1="87" y1="4" x2="87" y2="37" stroke="#D42D3A" strokeWidth="0.08" opacity="0.3" />
      <text x="10" y="19" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="6" letterSpacing="0.3" fill="#1D3557">
        {data.nameJa}
      </text>
      <text x="10" y="25.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="500" fontSize="1.8" letterSpacing="0.3" fill="rgba(29,53,87,0.7)">
        {data.nameEn.toUpperCase()}
      </text>
      <text x="10" y="35" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="rgba(29,53,87,0.5)">
        {data.titleJa}
      </text>
      <text x="10" y="45" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="2.2" fill="rgba(29,53,87,0.4)">
        {data.companyJa}
      </text>
      {data.logo && <image href={data.logo} x="10" y="47" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="bauhaus-albers-back-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" seed="37" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
        </filter>
        <filter id="bauhaus-albers-back-shadow">
          <feGaussianBlur stdDeviation="0.3" />
          <feOffset dx="0.15" dy="0.18" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="#1D3557" />
      {/* Inverted nested squares */}
      <rect x="3" y="17" width="33" height="33" fill="url(#bauhaus-albers-red)" filter="url(#bauhaus-albers-back-texture)" />
      <rect x="8" y="22" width="23" height="23" fill="#F4D35E" />
      <rect x="14" y="28" width="11" height="11" fill="#1D3557" />
      <rect x="17" y="31" width="5" height="5" fill="#E63946" opacity="0.4" />
      {/* Vibration lines */}
      <line x1="3" y1="17" x2="3" y2="50" stroke="#D42D3A" strokeWidth="0.06" opacity="0.25" />
      <text x="81" y="11" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="2.5" fill="#F4D35E">
        {data.companyJa}
      </text>
      <text x="81" y="16" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="rgba(244,211,94,0.6)">
        {data.companyEn}
      </text>
      <text x="81" y="21" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.7" fill="rgba(244,211,94,0.5)">
        {data.titleJa}
      </text>
      <line x1="45" y1="24" x2="81" y2="24" stroke="#F4D35E" strokeWidth="0.1" opacity="0.3" />
      <text x="81" y="29" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="rgba(255,255,255,0.8)">
        {data.tel}
      </text>
      <text x="81" y="33.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="rgba(255,255,255,0.8)">
        {data.email}
      </text>
      <text x="81" y="38" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="rgba(255,255,255,0.8)">
        {data.website}
      </text>
      <text x="81" y="48" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="rgba(244,211,94,0.5)">
        〒{data.zipCode} {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="73" y="48" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 5. KLEE (夢) — Paul Klee dreamlike composition
// Playful mosaic grid with varied opacity and whimsy
// ============================================================
const kleeTemplate: TemplateDefinition = {
  id: 'bauhaus-klee',
  name: 'KLEE',
  nameJa: '夢',
  category: 'bauhaus',
  designer: 'Bauhaus Series',
  description: 'クレーの夢。色彩の小さなマスが遊び心を描く。',
  accentColor: '#E63946',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="bauhaus-klee-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" seed="38" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
        </filter>
        <filter id="bauhaus-klee-shadow">
          <feGaussianBlur stdDeviation="0.2" />
          <feOffset dx="0.1" dy="0.12" />
          <feComposite in="SourceGraphic" />
        </filter>
        <linearGradient id="bauhaus-klee-warm" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF8E7" />
          <stop offset="100%" stopColor="#FFF2D8" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#bauhaus-klee-warm)" />
      {/* Klee-style mosaic grid */}
      <g filter="url(#bauhaus-klee-texture)">
        <rect x="59" y="3" width="6.5" height="6.5" fill="#E63946" opacity="0.65" rx="0.2" />
        <rect x="66.5" y="3" width="6.5" height="6.5" fill="#F4D35E" opacity="0.55" rx="0.2" />
        <rect x="74" y="3" width="6.5" height="6.5" fill="#1D3557" opacity="0.5" rx="0.2" />
        <rect x="81.5" y="3" width="6.5" height="6.5" fill="#E63946" opacity="0.3" rx="0.2" />
        <rect x="59" y="10.5" width="6.5" height="6.5" fill="#1D3557" opacity="0.4" rx="0.2" />
        <rect x="66.5" y="10.5" width="6.5" height="6.5" fill="#E63946" opacity="0.45" rx="0.2" />
        <rect x="74" y="10.5" width="6.5" height="6.5" fill="#F4D35E" opacity="0.65" rx="0.2" />
        <rect x="81.5" y="10.5" width="6.5" height="6.5" fill="#1D3557" opacity="0.55" rx="0.2" />
        <rect x="59" y="18" width="6.5" height="6.5" fill="#F4D35E" opacity="0.5" rx="0.2" />
        <rect x="66.5" y="18" width="6.5" height="6.5" fill="#1D3557" opacity="0.65" rx="0.2" />
        <rect x="74" y="18" width="6.5" height="6.5" fill="#E63946" opacity="0.35" rx="0.2" />
        <rect x="81.5" y="18" width="6.5" height="6.5" fill="#F4D35E" opacity="0.3" rx="0.2" />
      </g>
      {/* Playful dot */}
      <circle cx="56" cy="13" r="0.5" fill="#E63946" opacity="0.2" />
      <text x="10" y="19" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6" letterSpacing="0.4" fill="#1D3557">
        {data.nameJa}
      </text>
      <text x="10" y="25.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.8" letterSpacing="0.2" fill="#666666">
        {data.nameEn}
      </text>
      <text x="10" y="34" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#888888">
        {data.titleJa}
      </text>
      <text x="10" y="42" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="2.2" fill="#666666">
        {data.companyJa}
      </text>
      {data.logo && <image href={data.logo} x="10" y="44" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="bauhaus-klee-back-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="2" seed="39" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
        </filter>
        <filter id="bauhaus-klee-back-shadow">
          <feGaussianBlur stdDeviation="0.18" />
          <feOffset dx="0.08" dy="0.1" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#bauhaus-klee-warm)" />
      {/* Color grid bottom-left */}
      <g filter="url(#bauhaus-klee-back-texture)">
        <rect x="3" y="31" width="6.5" height="6.5" fill="#F4D35E" opacity="0.55" rx="0.2" />
        <rect x="10.5" y="31" width="6.5" height="6.5" fill="#1D3557" opacity="0.45" rx="0.2" />
        <rect x="18" y="31" width="6.5" height="6.5" fill="#E63946" opacity="0.4" rx="0.2" />
        <rect x="25.5" y="31" width="6.5" height="6.5" fill="#F4D35E" opacity="0.3" rx="0.2" />
        <rect x="3" y="38.5" width="6.5" height="6.5" fill="#1D3557" opacity="0.6" rx="0.2" />
        <rect x="10.5" y="38.5" width="6.5" height="6.5" fill="#E63946" opacity="0.55" rx="0.2" />
        <rect x="18" y="38.5" width="6.5" height="6.5" fill="#F4D35E" opacity="0.45" rx="0.2" />
        <rect x="25.5" y="38.5" width="6.5" height="6.5" fill="#1D3557" opacity="0.35" rx="0.2" />
        <rect x="3" y="46" width="6.5" height="6.5" fill="#E63946" opacity="0.45" rx="0.2" />
        <rect x="10.5" y="46" width="6.5" height="6.5" fill="#F4D35E" opacity="0.6" rx="0.2" />
        <rect x="18" y="46" width="6.5" height="6.5" fill="#1D3557" opacity="0.5" rx="0.2" />
        <rect x="25.5" y="46" width="6.5" height="6.5" fill="#E63946" opacity="0.3" rx="0.2" />
      </g>
      {/* Playful dot */}
      <circle cx="35" cy="40" r="0.5" fill="#F4D35E" opacity="0.25" />
      <text x="81" y="11" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#1D3557">
        {data.companyJa}
      </text>
      <text x="81" y="15.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#888888">
        {data.companyEn}
      </text>
      <text x="81" y="20" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.7" fill="#666666">
        {data.titleJa}
      </text>
      <line x1="45" y1="23" x2="81" y2="23" stroke="#1D3557" strokeWidth="0.1" opacity="0.15" />
      <text x="81" y="28" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#444444">
        {data.tel}
      </text>
      <text x="81" y="32.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#444444">
        {data.email}
      </text>
      <text x="81" y="37" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#444444">
        {data.website}
      </text>
      <text x="81" y="48" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#999999">
        〒{data.zipCode} {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="73" y="48" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 6. GROPIUS (構) — Walter Gropius structural clarity
// Precise grid system with structural lines and zones
// ============================================================
const gropiusTemplate: TemplateDefinition = {
  id: 'bauhaus-gropius',
  name: 'GROPIUS',
  nameJa: '構',
  category: 'bauhaus',
  designer: 'Bauhaus Series',
  description: 'グロピウスの構築。水平と垂直が完璧な秩序を生む。',
  accentColor: '#1D3557',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="bauhaus-gropius-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" seed="40" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
        </filter>
        <filter id="bauhaus-gropius-shadow">
          <feGaussianBlur stdDeviation="0.3" />
          <feOffset dx="0.15" dy="0.18" />
          <feComposite in="SourceGraphic" />
        </filter>
        <linearGradient id="bauhaus-gropius-zone" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1D3557" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#1D3557" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Structural grid */}
      <line x1="30" y1="0" x2="30" y2="55" stroke="#1D3557" strokeWidth="0.5" />
      <line x1="0" y1="35" x2="91" y2="35" stroke="#E63946" strokeWidth="0.3" />
      {/* Zone fill */}
      <rect x="0" y="0" width="30" height="35" fill="url(#bauhaus-gropius-zone)" />
      {/* Registration marks */}
      <line x1="28" y1="33" x2="32" y2="33" stroke="#1D3557" strokeWidth="0.08" opacity="0.3" />
      <line x1="30" y1="33" x2="30" y2="37" stroke="#1D3557" strokeWidth="0.08" opacity="0.3" />
      {/* Grid dots */}
      <circle cx="30" cy="35" r="0.4" fill="#E63946" opacity="0.5" />
      <circle cx="30" cy="0" r="0.3" fill="#1D3557" opacity="0.3" />
      <text x="35" y="16" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="5.5" letterSpacing="0.2" fill="#1D3557">
        {data.nameJa}
      </text>
      <text x="35" y="22" fontFamily="'Space Grotesk', sans-serif" fontWeight="500" fontSize="1.8" letterSpacing="0.4" fill="#E63946">
        {data.nameEn.toUpperCase()}
      </text>
      <text x="35" y="30" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#888888">
        {data.titleJa}
      </text>
      <text x="5" y="43" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="2" fill="#666666">
        {data.companyJa}
      </text>
      <text x="5" y="49" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#999999">
        {data.email}
      </text>
      {data.logo && <image href={data.logo} x="73" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="bauhaus-gropius-back-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="3" seed="41" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
        </filter>
        <filter id="bauhaus-gropius-back-shadow">
          <feGaussianBlur stdDeviation="0.25" />
          <feOffset dx="0.12" dy="0.15" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="#ffffff" />
      <line x1="61" y1="0" x2="61" y2="55" stroke="#1D3557" strokeWidth="0.5" />
      <line x1="0" y1="20" x2="91" y2="20" stroke="#E63946" strokeWidth="0.3" />
      <rect x="61" y="20" width="30" height="35" fill="url(#bauhaus-gropius-zone)" />
      {/* Registration marks */}
      <circle cx="61" cy="20" r="0.4" fill="#E63946" opacity="0.5" />
      <line x1="59" y1="18" x2="63" y2="18" stroke="#1D3557" strokeWidth="0.06" opacity="0.25" />
      <text x="8" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="2.5" fill="#1D3557">
        {data.companyJa}
      </text>
      <text x="8" y="16.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#888888">
        {data.companyEn}
      </text>
      <text x="8" y="28" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.7" fill="#666666">
        {data.titleJa}
      </text>
      <line x1="8" y1="31" x2="50" y2="31" stroke="#1D3557" strokeWidth="0.08" opacity="0.15" />
      <text x="8" y="36" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#333333">
        {data.tel}
      </text>
      <text x="8" y="40.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#333333">
        {data.email}
      </text>
      <text x="8" y="45" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#333333">
        {data.website}
      </text>
      <text x="8" y="52" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#999999">
        〒{data.zipCode} {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="73" y="28" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 7. BREUER (椅) — Marcel Breuer tubular steel
// Thin structural lines, tension joints, industrial elegance
// ============================================================
const breuerTemplate: TemplateDefinition = {
  id: 'bauhaus-breuer',
  name: 'BREUER',
  nameJa: '椅',
  category: 'bauhaus',
  designer: 'Bauhaus Series',
  description: 'ブロイヤーの鋼管。細い線が家具の骨格を描く。',
  accentColor: '#333333',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="bauhaus-breuer-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.4" numOctaves="3" seed="42" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
        </filter>
        <filter id="bauhaus-breuer-shadow">
          <feGaussianBlur stdDeviation="0.25" />
          <feOffset dx="0.12" dy="0.15" />
          <feComposite in="SourceGraphic" />
        </filter>
        <linearGradient id="bauhaus-breuer-steel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#444444" />
          <stop offset="50%" stopColor="#333333" />
          <stop offset="100%" stopColor="#444444" />
        </linearGradient>
        <linearGradient id="bauhaus-breuer-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F8F8F8" />
          <stop offset="100%" stopColor="#F2F2F2" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#bauhaus-breuer-bg)" />
      {/* Tubular steel frame */}
      <line x1="8" y1="5" x2="8" y2="50" stroke="url(#bauhaus-breuer-steel)" strokeWidth="0.45" />
      <line x1="83" y1="5" x2="83" y2="50" stroke="url(#bauhaus-breuer-steel)" strokeWidth="0.45" />
      <line x1="8" y1="5" x2="83" y2="5" stroke="url(#bauhaus-breuer-steel)" strokeWidth="0.45" />
      <line x1="8" y1="50" x2="83" y2="50" stroke="url(#bauhaus-breuer-steel)" strokeWidth="0.45" />
      {/* Curved corner bends */}
      <path d="M8,5 Q5,5 5,8" fill="none" stroke="#333333" strokeWidth="0.2" opacity="0.2" />
      <path d="M83,5 Q86,5 86,8" fill="none" stroke="#333333" strokeWidth="0.2" opacity="0.2" />
      {/* Cross support with joints */}
      <line x1="8" y1="28" x2="83" y2="28" stroke="#E63946" strokeWidth="0.25" />
      <circle cx="8" cy="28" r="0.9" fill="none" stroke="#E63946" strokeWidth="0.3" />
      <circle cx="8" cy="28" r="0.35" fill="#E63946" />
      <circle cx="83" cy="28" r="0.9" fill="none" stroke="#E63946" strokeWidth="0.3" />
      <circle cx="83" cy="28" r="0.35" fill="#E63946" />
      {/* Tension wire */}
      <line x1="8" y1="5" x2="83" y2="28" stroke="#333333" strokeWidth="0.06" opacity="0.08" />
      <text x="15" y="18" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="5.5" letterSpacing="0.3" fill="#1a1a1a">
        {data.nameJa}
      </text>
      <text x="15" y="23.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.8" letterSpacing="0.3" fill="#666666">
        {data.nameEn}
      </text>
      <text x="15" y="36" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#888888">
        {data.titleJa}
      </text>
      <text x="15" y="43" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="2" fill="#666666">
        {data.companyJa}
      </text>
      {data.logo && <image href={data.logo} x="73" y="36" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="bauhaus-breuer-back-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.38" numOctaves="3" seed="43" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
        </filter>
        <filter id="bauhaus-breuer-back-shadow">
          <feGaussianBlur stdDeviation="0.2" />
          <feOffset dx="0.1" dy="0.12" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#bauhaus-breuer-bg)" />
      {/* Frame */}
      <line x1="8" y1="5" x2="8" y2="50" stroke="url(#bauhaus-breuer-steel)" strokeWidth="0.45" />
      <line x1="83" y1="5" x2="83" y2="50" stroke="url(#bauhaus-breuer-steel)" strokeWidth="0.45" />
      <line x1="8" y1="5" x2="83" y2="5" stroke="url(#bauhaus-breuer-steel)" strokeWidth="0.45" />
      <line x1="8" y1="50" x2="83" y2="50" stroke="url(#bauhaus-breuer-steel)" strokeWidth="0.45" />
      {/* Cross support */}
      <line x1="8" y1="22" x2="83" y2="22" stroke="#E63946" strokeWidth="0.25" />
      <circle cx="8" cy="22" r="0.9" fill="none" stroke="#E63946" strokeWidth="0.3" />
      <circle cx="8" cy="22" r="0.35" fill="#E63946" />
      <circle cx="83" cy="22" r="0.9" fill="none" stroke="#E63946" strokeWidth="0.3" />
      <circle cx="83" cy="22" r="0.35" fill="#E63946" />
      {/* Tension wire */}
      <line x1="83" y1="50" x2="8" y2="22" stroke="#333333" strokeWidth="0.06" opacity="0.08" />
      <text x="45.5" y="14" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#1a1a1a">
        {data.companyJa}
      </text>
      <text x="45.5" y="18.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#888888">
        {data.companyEn}
      </text>
      <text x="45.5" y="29" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.7" fill="#666666">
        {data.titleJa}
      </text>
      <text x="45.5" y="33.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#444444">
        {data.tel}
      </text>
      <text x="45.5" y="37.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#444444">
        {data.email}
      </text>
      <text x="45.5" y="41.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#444444">
        {data.website}
      </text>
      <text x="45.5" y="47.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#999999">
        〒{data.zipCode} {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="41.5" y="7" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 8. ITTEN (環) — Johannes Itten color wheel
// Concentric chromatic rings with harmonic intervals
// ============================================================
const ittenTemplate: TemplateDefinition = {
  id: 'bauhaus-itten',
  name: 'ITTEN',
  nameJa: '環',
  category: 'bauhaus',
  designer: 'Bauhaus Series',
  description: 'イッテンの色環。同心円の色が対話し共鳴する。',
  accentColor: '#E63946',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="bauhaus-itten-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" seed="44" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
        </filter>
        <filter id="bauhaus-itten-shadow">
          <feGaussianBlur stdDeviation="0.3" />
          <feOffset dx="0.15" dy="0.18" />
          <feComposite in="SourceGraphic" />
        </filter>
        <radialGradient id="bauhaus-itten-outer" cx="50%" cy="50%" r="50%">
          <stop offset="80%" stopColor="#E63946" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#E63946" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="bauhaus-itten-mid" cx="50%" cy="50%" r="50%">
          <stop offset="70%" stopColor="#F4D35E" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#F4D35E" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="bauhaus-itten-inner" cx="50%" cy="50%" r="50%">
          <stop offset="60%" stopColor="#1D3557" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#1D3557" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="#FFFFF8" />
      {/* Itten color rings with glow */}
      <circle cx="72" cy="27.5" r="22" fill="url(#bauhaus-itten-outer)" />
      <circle cx="72" cy="27.5" r="20" fill="none" stroke="#E63946" strokeWidth="2.5" opacity="0.15" />
      <circle cx="72" cy="27.5" r="16" fill="url(#bauhaus-itten-mid)" />
      <circle cx="72" cy="27.5" r="15" fill="none" stroke="#F4D35E" strokeWidth="2" opacity="0.2" />
      <circle cx="72" cy="27.5" r="11" fill="url(#bauhaus-itten-inner)" />
      <circle cx="72" cy="27.5" r="10" fill="none" stroke="#1D3557" strokeWidth="1.5" opacity="0.2" />
      <circle cx="72" cy="27.5" r="5" fill="none" stroke="#E63946" strokeWidth="1" opacity="0.25" />
      <circle cx="72" cy="27.5" r="1.5" fill="#1D3557" opacity="0.3" />
      <text x="10" y="17" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="6" letterSpacing="0.3" fill="#1D3557">
        {data.nameJa}
      </text>
      <text x="10" y="23.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.8" letterSpacing="0.3" fill="#E63946">
        {data.nameEn}
      </text>
      <text x="10" y="33" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#888888">
        {data.titleJa}
      </text>
      <text x="10" y="41" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="2.2" fill="#666666">
        {data.companyJa}
      </text>
      {data.logo && <image href={data.logo} x="10" y="44" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="bauhaus-itten-back-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.45" numOctaves="3" seed="45" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
        </filter>
        <filter id="bauhaus-itten-back-shadow">
          <feGaussianBlur stdDeviation="0.25" />
          <feOffset dx="0.12" dy="0.15" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="#FFFFF8" />
      {/* Mirrored rings on left */}
      <circle cx="19" cy="27.5" r="18" fill="none" stroke="#F4D35E" strokeWidth="2" opacity="0.1" />
      <circle cx="19" cy="27.5" r="12" fill="none" stroke="#1D3557" strokeWidth="1.5" opacity="0.12" />
      <circle cx="19" cy="27.5" r="6" fill="none" stroke="#E63946" strokeWidth="1" opacity="0.15" />
      <circle cx="19" cy="27.5" r="1" fill="#F4D35E" opacity="0.2" />
      {/* Small accent dots */}
      <circle cx="35" cy="8" r="0.4" fill="#E63946" opacity="0.12" />
      <circle cx="85" cy="48" r="0.35" fill="#1D3557" opacity="0.1" />
      <text x="81" y="11" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#1D3557">
        {data.companyJa}
      </text>
      <text x="81" y="15.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#888888">
        {data.companyEn}
      </text>
      <text x="81" y="20" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.7" fill="#666666">
        {data.titleJa}
      </text>
      <line x1="45" y1="23" x2="81" y2="23" stroke="#E63946" strokeWidth="0.12" />
      <text x="81" y="28" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#333333">
        {data.tel}
      </text>
      <text x="81" y="32.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#333333">
        {data.email}
      </text>
      <text x="81" y="37" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#333333">
        {data.website}
      </text>
      <text x="81" y="48" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#999999">
        〒{data.zipCode} {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="73" y="48" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 9. SCHLEMMER (像) — Oskar Schlemmer figure study
// Geometric human figure, theatrical abstraction, stage lighting
// ============================================================
const schlemmerTemplate: TemplateDefinition = {
  id: 'bauhaus-schlemmer',
  name: 'SCHLEMMER',
  nameJa: '像',
  category: 'bauhaus',
  designer: 'Bauhaus Series',
  description: 'シュレンマーの人体。幾何学的な人形が舞台に立つ。',
  accentColor: '#1D3557',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="bauhaus-schlemmer-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="3" seed="46" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
        </filter>
        <filter id="bauhaus-schlemmer-shadow">
          <feGaussianBlur stdDeviation="0.35" />
          <feOffset dx="0.18" dy="0.22" />
          <feComposite in="SourceGraphic" />
        </filter>
        <radialGradient id="bauhaus-schlemmer-spotlight" cx="50%" cy="0%" r="80%">
          <stop offset="0%" stopColor="#F4D35E" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#F4D35E" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="bauhaus-schlemmer-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FAF8F3" />
          <stop offset="100%" stopColor="#F5F2EC" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#bauhaus-schlemmer-bg)" />
      {/* Stage spotlight */}
      <rect x="60" y="0" width="31" height="55" fill="url(#bauhaus-schlemmer-spotlight)" />
      {/* Geometric figure */}
      <circle cx="76" cy="11" r="4.5" fill="#1D3557" opacity="0.18" />
      <circle cx="76" cy="11" r="2.5" fill="#F4D35E" opacity="0.25" />
      <ellipse cx="76" cy="24" rx="5.5" ry="8.5" fill="#E63946" opacity="0.1" />
      <ellipse cx="76" cy="24" rx="5.5" ry="8.5" fill="none" stroke="#E63946" strokeWidth="0.15" opacity="0.2" />
      {/* Limbs */}
      <line x1="76" y1="32.5" x2="71" y2="46" stroke="#1D3557" strokeWidth="0.5" opacity="0.18" />
      <line x1="76" y1="32.5" x2="81" y2="46" stroke="#1D3557" strokeWidth="0.5" opacity="0.18" />
      <line x1="70.5" y1="21" x2="64" y2="28" stroke="#1D3557" strokeWidth="0.4" opacity="0.18" />
      <line x1="81.5" y1="21" x2="88" y2="28" stroke="#1D3557" strokeWidth="0.4" opacity="0.18" />
      {/* Joint dots */}
      <circle cx="76" cy="32.5" r="0.5" fill="#E63946" opacity="0.2" />
      <circle cx="70.5" cy="21" r="0.4" fill="#1D3557" opacity="0.15" />
      <circle cx="81.5" cy="21" r="0.4" fill="#1D3557" opacity="0.15" />
      <text x="10" y="19" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="6.5" letterSpacing="0.3" fill="#1D3557">
        {data.nameJa}
      </text>
      <text x="10" y="25.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.8" letterSpacing="0.25" fill="#666666">
        {data.nameEn}
      </text>
      <text x="10" y="35" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#888888">
        {data.titleJa}
      </text>
      <text x="10" y="43" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="2" fill="#999999">
        {data.companyJa}
      </text>
      {data.logo && <image href={data.logo} x="10" y="45" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="bauhaus-schlemmer-back-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" seed="47" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
        </filter>
        <filter id="bauhaus-schlemmer-back-shadow">
          <feGaussianBlur stdDeviation="0.28" />
          <feOffset dx="0.14" dy="0.18" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#bauhaus-schlemmer-bg)" />
      {/* Smaller figure mirrored */}
      <circle cx="15" cy="37" r="3.5" fill="#1D3557" opacity="0.12" />
      <circle cx="15" cy="37" r="1.8" fill="#F4D35E" opacity="0.18" />
      <ellipse cx="15" cy="46" rx="4" ry="6" fill="#E63946" opacity="0.06" />
      {/* Limbs */}
      <line x1="11" y1="43" x2="8" y2="52" stroke="#1D3557" strokeWidth="0.3" opacity="0.12" />
      <line x1="19" y1="43" x2="22" y2="52" stroke="#1D3557" strokeWidth="0.3" opacity="0.12" />
      {/* Stage line */}
      <line x1="0" y1="53" x2="30" y2="53" stroke="#1D3557" strokeWidth="0.1" opacity="0.08" />
      <text x="81" y="11" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#1D3557">
        {data.companyJa}
      </text>
      <text x="81" y="15.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#888888">
        {data.companyEn}
      </text>
      <text x="81" y="20" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.7" fill="#666666">
        {data.titleJa}
      </text>
      <line x1="40" y1="23" x2="81" y2="23" stroke="#1D3557" strokeWidth="0.12" />
      <text x="81" y="28.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#444444">
        {data.tel}
      </text>
      <text x="81" y="33" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#444444">
        {data.email}
      </text>
      <text x="81" y="37.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#444444">
        {data.website}
      </text>
      <text x="81" y="48" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#999999">
        〒{data.zipCode} {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="73" y="48" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 10. BAYER (型) — Herbert Bayer universal type
// Bold diagonal composition with typographic power
// ============================================================
const bayerTemplate: TemplateDefinition = {
  id: 'bauhaus-bayer',
  name: 'BAYER',
  nameJa: '型',
  category: 'bauhaus',
  designer: 'Bauhaus Series',
  description: 'バイヤーの活字。ユニバーサルな書体が力強く語る。',
  accentColor: '#E63946',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="bauhaus-bayer-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.45" numOctaves="3" seed="48" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
        </filter>
        <filter id="bauhaus-bayer-shadow">
          <feGaussianBlur stdDeviation="0.4" />
          <feOffset dx="0.2" dy="0.25" />
          <feComposite in="SourceGraphic" />
        </filter>
        <linearGradient id="bauhaus-bayer-navy" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1D3557" />
          <stop offset="100%" stopColor="#152A48" />
        </linearGradient>
        <linearGradient id="bauhaus-bayer-red-tri" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E63946" />
          <stop offset="100%" stopColor="#CC2D3A" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Bold diagonal stripe */}
      <polygon points="0,0 45,0 25,55 0,55" fill="url(#bauhaus-bayer-navy)" filter="url(#bauhaus-bayer-texture)" />
      <polygon points="0,0 10,0 0,22" fill="url(#bauhaus-bayer-red-tri)" />
      {/* Diagonal grid line */}
      <line x1="45" y1="0" x2="25" y2="55" stroke="#ffffff" strokeWidth="0.08" opacity="0.15" />
      {/* Type specimen dot */}
      <circle cx="5" cy="50" r="1" fill="#F4D35E" opacity="0.3" />
      {/* Diagonal accent */}
      <line x1="46" y1="0" x2="26" y2="55" stroke="#1D3557" strokeWidth="0.06" opacity="0.06" />
      <text x="32" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="800" fontSize="7" letterSpacing="0.2" fill="#ffffff">
        {data.nameJa}
      </text>
      <text x="35" y="28" fontFamily="'Space Grotesk', sans-serif" fontWeight="600" fontSize="2.2" letterSpacing="0.4" fill="#F4D35E">
        {data.nameEn.toUpperCase()}
      </text>
      <text x="38" y="37" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#888888">
        {data.titleJa}
      </text>
      <text x="10" y="48" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="2" fill="rgba(255,255,255,0.6)">
        {data.companyJa}
      </text>
      {data.logo && <image href={data.logo} x="73" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="bauhaus-bayer-back-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.42" numOctaves="3" seed="49" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
        </filter>
        <filter id="bauhaus-bayer-back-shadow">
          <feGaussianBlur stdDeviation="0.35" />
          <feOffset dx="0.18" dy="0.22" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Mirrored diagonal */}
      <polygon points="46,0 91,0 91,55 66,55" fill="url(#bauhaus-bayer-navy)" filter="url(#bauhaus-bayer-back-texture)" />
      <polygon points="81,55 91,55 91,33" fill="url(#bauhaus-bayer-red-tri)" />
      {/* Grid line */}
      <line x1="46" y1="0" x2="66" y2="55" stroke="#ffffff" strokeWidth="0.08" opacity="0.15" />
      {/* Type dot */}
      <circle cx="86" cy="5" r="1" fill="#F4D35E" opacity="0.3" />
      {/* Accent line */}
      <line x1="45" y1="0" x2="65" y2="55" stroke="#1D3557" strokeWidth="0.06" opacity="0.06" />
      <text x="10" y="13" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="2.5" fill="#1D3557">
        {data.companyJa}
      </text>
      <text x="10" y="18" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fill="#888888">
        {data.companyEn}
      </text>
      <text x="10" y="23" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.7" fill="#666666">
        {data.titleJa}
      </text>
      <line x1="10" y1="26" x2="42" y2="26" stroke="#E63946" strokeWidth="0.18" />
      <text x="10" y="31" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.5" fill="#333333">
        {data.tel}
      </text>
      <text x="10" y="35.5" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.5" fill="#333333">
        {data.email}
      </text>
      <text x="10" y="40" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.5" fill="#333333">
        {data.website}
      </text>
      <text x="10" y="48" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#999999">
        〒{data.zipCode} {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="10" y="49" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

export const bauhausTemplates: TemplateDefinition[] = [
  dessauTemplate,
  kandinskyTemplate,
  moholyTemplate,
  albersTemplate,
  kleeTemplate,
  gropiusTemplate,
  breuerTemplate,
  ittenTemplate,
  schlemmerTemplate,
  bayerTemplate,
];
