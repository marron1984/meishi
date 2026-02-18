import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. SPARK (閃) — Electric inspiration burst
// Vivid yellow-orange spark, dynamic asymmetric layout
// ============================================================
const sparkTemplate: TemplateDefinition = {
  id: 'creative-spark',
  name: 'SPARK',
  nameJa: '閃',
  category: 'creative',
  designer: 'Electric Studio',
  description: '閃光のような創造の瞬間。鮮烈な色彩が着火する。',
  accentColor: '#FF6B2B',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="creative-spark-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="creative-spark-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.15" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="creative-spark-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B2B" />
          <stop offset="50%" stopColor="#FFAA44" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
        <radialGradient id="creative-spark-glow" cx="72" cy="12" r="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FF6B2B" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#FFD700" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#FF6B2B" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="creative-spark-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="30%" stopColor="#FFD700" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#FF6B2B" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="#1A1A1A" filter="url(#creative-spark-texture)" />
      <rect width="91" height="55" fill="url(#creative-spark-glow)" />
      {/* Spark burst lines */}
      <line x1="72" y1="12" x2="83" y2="4" stroke="url(#creative-spark-grad)" strokeWidth="0.35" opacity="0.8" />
      <line x1="72" y1="12" x2="86" y2="12" stroke="url(#creative-spark-grad)" strokeWidth="0.3" opacity="0.7" />
      <line x1="72" y1="12" x2="81" y2="21" stroke="url(#creative-spark-grad)" strokeWidth="0.25" opacity="0.6" />
      <line x1="72" y1="12" x2="79" y2="2" stroke="url(#creative-spark-grad)" strokeWidth="0.2" opacity="0.5" />
      <line x1="72" y1="12" x2="85" y2="19" stroke="url(#creative-spark-grad)" strokeWidth="0.15" opacity="0.4" />
      <line x1="72" y1="12" x2="66" y2="3" stroke="url(#creative-spark-grad)" strokeWidth="0.15" opacity="0.35" />
      {/* Core spark */}
      <circle cx="72" cy="12" r="2.5" fill="url(#creative-spark-core)" opacity="0.5" />
      <circle cx="72" cy="12" r="1" fill="#FFD700" opacity="0.8" />
      <circle cx="72" cy="12" r="0.4" fill="#FFFFFF" opacity="0.9" />
      {/* Flying sparks */}
      <circle cx="81" cy="5" r="0.3" fill="#FFD700" opacity="0.6" />
      <circle cx="85" cy="16" r="0.2" fill="#FF6B2B" opacity="0.5" />
      <circle cx="64" cy="4" r="0.25" fill="#FFAA44" opacity="0.4" />
      <circle cx="88" cy="8" r="0.15" fill="#FFD700" opacity="0.35" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Name */}
      <text x="8" y="28" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="7" letterSpacing="0.5" fill="#FFFFFF" filter="url(#creative-spark-shadow)">{data.nameJa}</text>
      <text x="8" y="34" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="2.2" letterSpacing="0.3" fill="#FF6B2B">{data.nameEn.toUpperCase()}</text>
      {/* Title */}
      <text x="8" y="40" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#AA7755">{data.titleJa}</text>
      {/* Accent line */}
      <line x1="8" y1="44" x2="38" y2="44" stroke="url(#creative-spark-grad)" strokeWidth="0.4" />
      <text x="8" y="48.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#777777">{data.companyEn}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="creative-spark-b-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="creative-spark-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.08" dy="0.1" />
          <feFlood floodColor="#000" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="creative-spark-b-glow" cx="85%" cy="12%" r="20%">
          <stop offset="0%" stopColor="#FF6B2B" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#FF6B2B" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="#1A1A1A" filter="url(#creative-spark-b-texture)" />
      <rect width="91" height="55" fill="url(#creative-spark-b-glow)" />
      {/* Small spark cluster */}
      <circle cx="83" cy="8" r="1.5" fill="#FF6B2B" opacity="0.35" />
      <circle cx="83" cy="8" r="0.5" fill="#FFD700" opacity="0.6" />
      <line x1="83" y1="8" x2="87" y2="4" stroke="#FF6B2B" strokeWidth="0.12" opacity="0.3" />
      <line x1="83" y1="8" x2="88" y2="9" stroke="#FFD700" strokeWidth="0.08" opacity="0.25" />
      <line x1="83" y1="8" x2="86" y2="12" stroke="#FFAA44" strokeWidth="0.08" opacity="0.2" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="75" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Company */}
      <text x="8" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#FFFFFF" filter="url(#creative-spark-b-shadow)">{data.companyJa}</text>
      <text x="8" y="16" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#FF6B2B">{data.companyEn}</text>
      <text x="8" y="19.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#AA7755">{data.titleJa}</text>
      <line x1="8" y1="22" x2="50" y2="22" stroke="#FF6B2B" strokeWidth="0.2" opacity="0.4" />
      {/* Contact */}
      <text x="8" y="27" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#AAAAAA">{data.tel}</text>
      <text x="8" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#AAAAAA">{data.email}</text>
      <text x="8" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#AAAAAA">{data.website}</text>
      <line x1="8" y1="38.5" x2="50" y2="38.5" stroke="#333333" strokeWidth="0.15" />
      {/* Address */}
      <text x="8" y="43" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#666666">{'\u3012'}{data.zipCode}</text>
      <text x="8" y="46.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#666666">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 2. MUSE (霊) — Ethereal muse/inspiration
// Soft gradients, flowing curves, dreamy purple palette
// ============================================================
const museTemplate: TemplateDefinition = {
  id: 'creative-muse',
  name: 'MUSE',
  nameJa: '霊',
  category: 'creative',
  designer: 'Ethereal Arts',
  description: '創造の女神が宿る。紫の霞が感性を揺り動かす。',
  accentColor: '#8B5CF6',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="creative-muse-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="creative-muse-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#4C1D95" floodOpacity="0.12" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="creative-muse-flow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#D946EF" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.05" />
        </linearGradient>
        <radialGradient id="creative-muse-glow" cx="50%" cy="80%" r="50%">
          <stop offset="0%" stopColor="#D946EF" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#D946EF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="creative-muse-curve" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="50%" stopColor="#D946EF" />
          <stop offset="100%" stopColor="#A78BFA" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#F8F5FF" filter="url(#creative-muse-texture)" />
      <rect width="91" height="55" fill="url(#creative-muse-glow)" />
      {/* Flowing muse curves */}
      <path d="M0 35 Q20 15 45.5 25 Q70 35 91 10" fill="none" stroke="url(#creative-muse-curve)" strokeWidth="0.18" opacity="0.35" />
      <path d="M0 40 Q25 20 50 30 Q75 40 91 15" fill="none" stroke="#D946EF" strokeWidth="0.12" opacity="0.25" />
      <path d="M0 45 Q30 25 55 35 Q80 45 91 20" fill="none" stroke="#8B5CF6" strokeWidth="0.08" opacity="0.15" />
      <path d="M0 50 Q35 30 60 40 Q85 50 91 25" fill="none" stroke="#A78BFA" strokeWidth="0.05" opacity="0.1" />
      {/* Ethereal dots */}
      <circle cx="78" cy="14" r="0.4" fill="#D946EF" opacity="0.3" />
      <circle cx="82" cy="20" r="0.25" fill="#8B5CF6" opacity="0.25" />
      <circle cx="70" cy="8" r="0.3" fill="#A78BFA" opacity="0.2" />
      <circle cx="85" cy="8" r="0.2" fill="#D946EF" opacity="0.15" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="76" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Name */}
      <text x="10" y="18" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="6.5" letterSpacing="0.8" fill="#4C1D95" filter="url(#creative-muse-shadow)">{data.nameJa}</text>
      <text x="10" y="24" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2.2" letterSpacing="0.5" fill="#8B5CF6">{data.nameEn}</text>
      {/* Title */}
      <text x="10" y="31" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#A78BFA">{data.titleJa}</text>
      {/* Company */}
      <text x="10" y="42" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.7" fill="#C4B5FD">{data.companyJa}</text>
      <text x="10" y="48" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#DDD6FE">{data.companyEn}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="creative-muse-b-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="creative-muse-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.08" dy="0.1" />
          <feFlood floodColor="#4C1D95" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="creative-muse-b-glow" cx="70%" cy="70%" r="40%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="#F8F5FF" filter="url(#creative-muse-b-texture)" />
      <rect width="91" height="55" fill="url(#creative-muse-b-glow)" />
      {/* Subtle flowing curves */}
      <path d="M0 10 Q30 30 60 15 Q80 5 91 20" fill="none" stroke="#8B5CF6" strokeWidth="0.1" opacity="0.15" />
      <path d="M0 45 Q20 30 50 40 Q75 48 91 35" fill="none" stroke="#D946EF" strokeWidth="0.08" opacity="0.1" />
      {/* Ethereal dots */}
      <circle cx="82" cy="44" r="0.3" fill="#D946EF" opacity="0.1" />
      <circle cx="78" cy="48" r="0.2" fill="#8B5CF6" opacity="0.08" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="5" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Company */}
      <text x="81" y="12" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="2.5" fill="#4C1D95" filter="url(#creative-muse-b-shadow)">{data.companyJa}</text>
      <text x="81" y="16" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" letterSpacing="0.3" fill="#A78BFA">{data.companyEn}</text>
      <text x="81" y="19.5" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#8B5CF6">{data.titleJa}</text>
      {/* Divider */}
      <line x1="40" y1="22" x2="81" y2="22" stroke="#D946EF" strokeWidth="0.12" opacity="0.25" />
      {/* Contact */}
      <text x="81" y="27" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#6D28D9">{data.tel}</text>
      <text x="81" y="31" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#6D28D9">{data.email}</text>
      <text x="81" y="35" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#6D28D9">{data.website}</text>
      <line x1="40" y1="38" x2="81" y2="38" stroke="#D946EF" strokeWidth="0.06" opacity="0.15" />
      {/* Address */}
      <text x="81" y="43" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#C4B5FD">{'\u3012'}{data.zipCode}</text>
      <text x="81" y="46.5" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#C4B5FD">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 3. VISION (視) — Bold visionary design
// Strong diagonal cut, high contrast, visionary eye motif
// ============================================================
const visionTemplate: TemplateDefinition = {
  id: 'creative-vision',
  name: 'VISION',
  nameJa: '視',
  category: 'creative',
  designer: 'Vision Lab',
  description: '視界を切り裂くダイナミズム。大胆な斜めカットが未来を見据える。',
  accentColor: '#06B6D4',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="creative-vision-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="creative-vision-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.35" />
          <feOffset dx="0.12" dy="0.18" />
          <feFlood floodColor="#000" floodOpacity="0.18" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="creative-vision-diag" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#0891B2" stopOpacity="0.03" />
        </linearGradient>
        <linearGradient id="creative-vision-line" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#22D3EE" />
        </linearGradient>
        <radialGradient id="creative-vision-eye" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="#0F172A" filter="url(#creative-vision-texture)" />
      {/* Diagonal cut */}
      <polygon points="0,0 60,0 40,55 0,55" fill="url(#creative-vision-diag)" />
      <line x1="60" y1="0" x2="40" y2="55" stroke="url(#creative-vision-line)" strokeWidth="0.35" />
      {/* Eye / vision motif */}
      <ellipse cx="75" cy="15" rx="9" ry="4.5" fill="none" stroke="#06B6D4" strokeWidth="0.2" opacity="0.4" />
      <circle cx="75" cy="15" r="2.5" fill="url(#creative-vision-eye)" />
      <circle cx="75" cy="15" r="1.2" fill="#06B6D4" opacity="0.3" />
      <circle cx="75" cy="15" r="0.4" fill="#22D3EE" opacity="0.6" />
      {/* Scan lines */}
      <line x1="66" y1="15" x2="84" y2="15" stroke="#06B6D4" strokeWidth="0.03" opacity="0.25" />
      <line x1="75" y1="10.5" x2="75" y2="19.5" stroke="#06B6D4" strokeWidth="0.03" opacity="0.25" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Name */}
      <text x="8" y="28" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="6.5" letterSpacing="0.3" fill="#FFFFFF" filter="url(#creative-vision-shadow)">{data.nameJa}</text>
      <text x="8" y="34" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="2.2" letterSpacing="0.4" fill="#06B6D4">{data.nameEn.toUpperCase()}</text>
      {/* Title */}
      <text x="8" y="40" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#67E8F9">{data.titleJa}</text>
      {/* Company */}
      <text x="8" y="48" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#475569">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="creative-vision-b-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="creative-vision-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.08" dy="0.1" />
          <feFlood floodColor="#000" floodOpacity="0.12" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="creative-vision-b-diag" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#0F172A" filter="url(#creative-vision-b-texture)" />
      {/* Reverse diagonal */}
      <polygon points="51,0 91,0 91,55 31,55" fill="url(#creative-vision-b-diag)" />
      <line x1="51" y1="0" x2="31" y2="55" stroke="#06B6D4" strokeWidth="0.2" opacity="0.2" />
      {/* Small eye motif */}
      <ellipse cx="80" cy="8" rx="4" ry="2" fill="none" stroke="#06B6D4" strokeWidth="0.1" opacity="0.2" />
      <circle cx="80" cy="8" r="0.6" fill="#06B6D4" opacity="0.2" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="75" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Company */}
      <text x="83" y="12" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#FFFFFF" filter="url(#creative-vision-b-shadow)">{data.companyJa}</text>
      <text x="83" y="16" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#06B6D4">{data.companyEn}</text>
      <text x="83" y="19.5" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#67E8F9">{data.titleJa}</text>
      <line x1="40" y1="22" x2="83" y2="22" stroke="#06B6D4" strokeWidth="0.15" opacity="0.25" />
      {/* Contact */}
      <text x="83" y="27" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#94A3B8">{data.tel}</text>
      <text x="83" y="31" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#94A3B8">{data.email}</text>
      <text x="83" y="35" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#94A3B8">{data.website}</text>
      <line x1="40" y1="38" x2="83" y2="38" stroke="#06B6D4" strokeWidth="0.08" opacity="0.15" />
      {/* Address */}
      <text x="83" y="43" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#475569">{'\u3012'}{data.zipCode}</text>
      <text x="83" y="46.5" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#475569">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 4. PALETTE (色盤) — Paint palette inspired
// Color dots, playful arrangement, brush stroke accents
// ============================================================
const paletteTemplate: TemplateDefinition = {
  id: 'creative-palette',
  name: 'PALETTE',
  nameJa: '色盤',
  category: 'creative',
  designer: 'Color Workshop',
  description: 'パレットの上で混ざり合う色彩。アーティストの遊び心。',
  accentColor: '#E11D48',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="creative-palette-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="creative-palette-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="creative-palette-warm" cx="80%" cy="20%" r="40%">
          <stop offset="0%" stopColor="#E11D48" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#E11D48" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="creative-palette-stroke" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E11D48" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#FFFBF5" filter="url(#creative-palette-texture)" />
      <rect width="91" height="55" fill="url(#creative-palette-warm)" />
      {/* Paint palette dots */}
      <circle cx="70" cy="8" r="3.2" fill="#E11D48" opacity="0.65" />
      <circle cx="79" cy="11" r="2.8" fill="#F59E0B" opacity="0.55" />
      <circle cx="74" cy="16" r="2.2" fill="#3B82F6" opacity="0.55" />
      <circle cx="83" cy="6" r="2" fill="#10B981" opacity="0.45" />
      <circle cx="81" cy="17" r="1.6" fill="#8B5CF6" opacity="0.45" />
      <circle cx="66" cy="13" r="1.3" fill="#EC4899" opacity="0.4" />
      {/* Brush stroke */}
      <path d="M58 21 Q65 18 72 20 Q79 22 84 20" fill="none" stroke="url(#creative-palette-stroke)" strokeWidth="0.8" strokeLinecap="round" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Name */}
      <text x="10" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="6.5" letterSpacing="0.4" fill="#1A1A2E" filter="url(#creative-palette-shadow)">{data.nameJa}</text>
      <text x="10" y="28" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2.2" letterSpacing="0.3" fill="#E11D48">{data.nameEn}</text>
      {/* Title */}
      <text x="10" y="35" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#6B7280">{data.titleJa}</text>
      {/* Company with color dot */}
      <circle cx="10" cy="43.5" r="0.9" fill="#E11D48" opacity="0.5" />
      <text x="13.5" y="44" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#9CA3AF">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="creative-palette-b-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="creative-palette-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.08" dy="0.1" />
          <feFlood floodColor="#000" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="creative-palette-b-warm" cx="85%" cy="15%" r="25%">
          <stop offset="0%" stopColor="#E11D48" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#E11D48" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="#FFFBF5" filter="url(#creative-palette-b-texture)" />
      <rect width="91" height="55" fill="url(#creative-palette-b-warm)" />
      {/* Small color dots */}
      <circle cx="80" cy="8" r="1.8" fill="#E11D48" opacity="0.4" />
      <circle cx="85" cy="11" r="1.2" fill="#F59E0B" opacity="0.35" />
      <circle cx="77" cy="12" r="0.9" fill="#3B82F6" opacity="0.3" />
      <circle cx="83" cy="14" r="0.6" fill="#10B981" opacity="0.25" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="74" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Company */}
      <text x="10" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#1A1A2E" filter="url(#creative-palette-b-shadow)">{data.companyJa}</text>
      <text x="10" y="16" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#E11D48">{data.companyEn}</text>
      <text x="10" y="19.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#6B7280">{data.titleJa}</text>
      <line x1="10" y1="22" x2="55" y2="22" stroke="#E11D48" strokeWidth="0.15" opacity="0.3" />
      {/* Contact */}
      <text x="10" y="27" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#4B5563">{data.tel}</text>
      <text x="10" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#4B5563">{data.email}</text>
      <text x="10" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#4B5563">{data.website}</text>
      <line x1="10" y1="38" x2="55" y2="38" stroke="#E8E0D0" strokeWidth="0.1" />
      {/* Address */}
      <text x="10" y="42.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#9CA3AF">{'\u3012'}{data.zipCode}</text>
      <text x="10" y="46" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#9CA3AF">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 5. CANVAS (画布) — Artist's canvas / stretched frame
// Canvas texture, golden frame, earthy creative tones
// ============================================================
const canvasTemplate: TemplateDefinition = {
  id: 'creative-canvas',
  name: 'CANVAS',
  nameJa: '画布',
  category: 'creative',
  designer: 'Canvas Studio',
  description: '真っ白なキャンバスに描かれる一枚の名刺。余白が可能性を語る。',
  accentColor: '#92400E',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="creative-canvas-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="5" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="creative-canvas-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#3C1F08" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="creative-canvas-frame" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4A76A" />
          <stop offset="30%" stopColor="#C89A5E" />
          <stop offset="70%" stopColor="#B8894A" />
          <stop offset="100%" stopColor="#D4A76A" />
        </linearGradient>
        <linearGradient id="creative-canvas-inner" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFDF8" />
          <stop offset="100%" stopColor="#FFF8F0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#FAF5EF" filter="url(#creative-canvas-texture)" />
      {/* Canvas frame with depth */}
      <rect x="4" y="3" width="83" height="49" fill="none" stroke="url(#creative-canvas-frame)" strokeWidth="0.6" />
      <rect x="4.8" y="3.8" width="81.4" height="47.4" fill="none" stroke="#B8894A" strokeWidth="0.1" opacity="0.3" />
      <rect x="5.5" y="4.5" width="80" height="46" fill="url(#creative-canvas-inner)" stroke="#E8DCC8" strokeWidth="0.15" />
      {/* Canvas weave texture lines */}
      {[...Array(8)].map((_, i) => (
        <line key={`h${i}`} x1="5.5" y1={7 + i * 6} x2="85.5" y2={7 + i * 6} stroke="#F0E8D8" strokeWidth="0.04" />
      ))}
      {[...Array(6)].map((_, i) => (
        <line key={`v${i}`} x1={15 + i * 12} y1="4.5" x2={15 + i * 12} y2="50.5" stroke="#F0E8D8" strokeWidth="0.04" />
      ))}
      {/* Logo */}
      {data.logo && <image href={data.logo} x="76" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Name painted on canvas */}
      <text x="45.5" y="22" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6" letterSpacing="0.6" fill="#3C1F08" filter="url(#creative-canvas-shadow)">{data.nameJa}</text>
      <text x="45.5" y="28" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="2.2" letterSpacing="0.5" fill="#92400E">{data.nameEn}</text>
      {/* Title */}
      <text x="45.5" y="35" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#A07850">{data.titleJa}</text>
      {/* Company */}
      <text x="45.5" y="44" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#C4A882">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="creative-canvas-b-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="5" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="creative-canvas-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.08" dy="0.1" />
          <feFlood floodColor="#3C1F08" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="creative-canvas-b-frame" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4A76A" />
          <stop offset="100%" stopColor="#C89A5E" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#FAF5EF" filter="url(#creative-canvas-b-texture)" />
      {/* Canvas frame */}
      <rect x="4" y="3" width="83" height="49" fill="none" stroke="url(#creative-canvas-b-frame)" strokeWidth="0.5" />
      <rect x="5.5" y="4.5" width="80" height="46" fill="#FFFDF8" stroke="#E8DCC8" strokeWidth="0.15" />
      {/* Subtle weave */}
      <line x1="5.5" y1="13" x2="85.5" y2="13" stroke="#F0E8D8" strokeWidth="0.03" />
      <line x1="5.5" y1="25" x2="85.5" y2="25" stroke="#F0E8D8" strokeWidth="0.03" />
      <line x1="5.5" y1="37" x2="85.5" y2="37" stroke="#F0E8D8" strokeWidth="0.03" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="38" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Company */}
      <text x="45.5" y="13" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#3C1F08" filter="url(#creative-canvas-b-shadow)">{data.companyJa}</text>
      <text x="45.5" y="17" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" letterSpacing="0.3" fill="#92400E">{data.companyEn}</text>
      <text x="45.5" y="20.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#A07850">{data.titleJa}</text>
      <line x1="20" y1="23" x2="71" y2="23" stroke="#D4A76A" strokeWidth="0.1" opacity="0.3" />
      {/* Contact */}
      <text x="45.5" y="28" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#6B5040">{data.tel}</text>
      <text x="45.5" y="32" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#6B5040">{data.email}</text>
      <text x="45.5" y="36" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#6B5040">{data.website}</text>
      <line x1="20" y1="39" x2="71" y2="39" stroke="#D4A76A" strokeWidth="0.08" opacity="0.2" />
      {/* Address */}
      <text x="45.5" y="43.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#C4A882">{'\u3012'}{data.zipCode}</text>
      <text x="45.5" y="47" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#C4A882">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 6. CHISEL (彫刀) — Sculptor/carving inspired
// Angular cuts, stone-like texture, chisel marks
// ============================================================
const chiselTemplate: TemplateDefinition = {
  id: 'creative-chisel',
  name: 'CHISEL',
  nameJa: '彫刀',
  category: 'creative',
  designer: 'Stone Atelier',
  description: '彫刀で削り出された存在感。石と影が生む力強い造形。',
  accentColor: '#6B7280',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="creative-chisel-texture">
          <feTurbulence type="fractalNoise" baseFrequency="1.0" numOctaves="5" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="creative-chisel-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.4" />
          <feOffset dx="0.15" dy="0.2" />
          <feFlood floodColor="#000" floodOpacity="0.18" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="creative-chisel-stone" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#374151" />
          <stop offset="50%" stopColor="#4B5563" />
          <stop offset="100%" stopColor="#374151" />
        </linearGradient>
        <linearGradient id="creative-chisel-edge" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6B7280" />
          <stop offset="100%" stopColor="#9CA3AF" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#E5E7EB" filter="url(#creative-chisel-texture)" />
      {/* Chiseled angular block */}
      <polygon points="0,0 65,0 55,22 0,22" fill="url(#creative-chisel-stone)" />
      <line x1="55" y1="22" x2="65" y2="0" stroke="url(#creative-chisel-edge)" strokeWidth="0.5" />
      {/* Chisel texture marks */}
      <line x1="5" y1="4" x2="52" y2="4" stroke="#4B5563" strokeWidth="0.08" />
      <line x1="5" y1="7" x2="50" y2="7" stroke="#4B5563" strokeWidth="0.06" />
      <line x1="5" y1="10" x2="48" y2="10" stroke="#4B5563" strokeWidth="0.04" />
      <line x1="5" y1="13" x2="46" y2="13" stroke="#4B5563" strokeWidth="0.03" />
      {/* Chip fragments */}
      <path d="M58 18 L60 16 L62 19 Z" fill="#9CA3AF" opacity="0.2" />
      <path d="M63 4 L65 2 L66 5 Z" fill="#9CA3AF" opacity="0.15" />
      <path d="M56 20 L57 18 L58.5 21 Z" fill="#D1D5DB" opacity="0.12" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="74" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Name on stone */}
      <text x="8" y="16" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="5.5" letterSpacing="0.3" fill="#F9FAFB" filter="url(#creative-chisel-shadow)">{data.nameJa}</text>
      <text x="8" y="20" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.8" letterSpacing="0.3" fill="#9CA3AF">{data.nameEn.toUpperCase()}</text>
      {/* Below the chisel */}
      <text x="8" y="32" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2" fill="#374151">{data.titleJa}</text>
      <text x="8" y="39" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#6B7280">{data.companyJa}</text>
      {/* Chisel accent mark */}
      <line x1="8" y1="43" x2="28" y2="43" stroke="#374151" strokeWidth="0.4" />
      <text x="8" y="48" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#9CA3AF">{data.email}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="creative-chisel-b-texture">
          <feTurbulence type="fractalNoise" baseFrequency="1.0" numOctaves="5" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="creative-chisel-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.1" dy="0.12" />
          <feFlood floodColor="#000" floodOpacity="0.12" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="creative-chisel-b-stone" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#374151" />
          <stop offset="100%" stopColor="#4B5563" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#E5E7EB" filter="url(#creative-chisel-b-texture)" />
      {/* Chiseled accent at top */}
      <polygon points="50,0 91,0 91,15 40,15" fill="url(#creative-chisel-b-stone)" />
      <line x1="40" y1="15" x2="50" y2="0" stroke="#6B7280" strokeWidth="0.4" />
      {/* Chip detail */}
      <path d="M42 13 L44 11 L45 14 Z" fill="#9CA3AF" opacity="0.15" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Company on dark */}
      <text x="83" y="8" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="2.5" fill="#F9FAFB" filter="url(#creative-chisel-b-shadow)">{data.companyJa}</text>
      <text x="83" y="12" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#9CA3AF">{data.companyEn}</text>
      {/* Title */}
      <text x="10" y="21" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#6B7280">{data.titleJa}</text>
      {/* Contact */}
      <text x="10" y="27" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#374151">{data.tel}</text>
      <text x="10" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#374151">{data.email}</text>
      <text x="10" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#374151">{data.website}</text>
      <line x1="10" y1="38" x2="55" y2="38" stroke="#9CA3AF" strokeWidth="0.1" />
      {/* Address */}
      <text x="10" y="43" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#6B7280">{'\u3012'}{data.zipCode}</text>
      <text x="10" y="46.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#6B7280">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 7. INK-C (墨彩) — Ink and watercolor creative
// Ink splatters, watercolor washes, artistic expression
// ============================================================
const inkCTemplate: TemplateDefinition = {
  id: 'creative-ink-c',
  name: 'INK-C',
  nameJa: '墨彩',
  category: 'creative',
  designer: 'Ink Flow Studio',
  description: '墨と彩りが紡ぐ表現。インクの飛沫が感情を映す。',
  accentColor: '#1E1B4B',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="creative-inkc-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="creative-inkc-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#1E1B4B" floodOpacity="0.12" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="creative-inkc-wash1" cx="80%" cy="20%" r="40%">
          <stop offset="0%" stopColor="#818CF8" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#818CF8" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="creative-inkc-wash2" cx="20%" cy="80%" r="35%">
          <stop offset="0%" stopColor="#F472B6" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#F472B6" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="creative-inkc-splat" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1E1B4B" stopOpacity="0.15" />
          <stop offset="60%" stopColor="#1E1B4B" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#1E1B4B" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="#FFFEF9" filter="url(#creative-inkc-texture)" />
      <rect width="91" height="55" fill="url(#creative-inkc-wash1)" />
      <rect width="91" height="55" fill="url(#creative-inkc-wash2)" />
      {/* Ink splatters */}
      <circle cx="75" cy="10" r="3.5" fill="url(#creative-inkc-splat)" />
      <circle cx="79" cy="7" r="1.8" fill="#1E1B4B" opacity="0.08" />
      <circle cx="71" cy="13" r="1" fill="#1E1B4B" opacity="0.1" />
      <circle cx="81" cy="12" r="0.6" fill="#4338CA" opacity="0.12" />
      <circle cx="67" cy="7" r="0.4" fill="#1E1B4B" opacity="0.08" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Name */}
      <text x="10" y="24" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="6.5" letterSpacing="0.5" fill="#1E1B4B" filter="url(#creative-inkc-shadow)">{data.nameJa}</text>
      <text x="10" y="30" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="2.2" letterSpacing="0.4" fill="#4338CA">{data.nameEn}</text>
      {/* Ink stroke separator */}
      <path d="M10 34 Q25 32 40 34 Q50 36 60 34" fill="none" stroke="#1E1B4B" strokeWidth="0.25" opacity="0.25" strokeLinecap="round" />
      {/* Title */}
      <text x="10" y="40" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#6366F1">{data.titleJa}</text>
      {/* Company */}
      <text x="10" y="48" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#A5B4FC">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="creative-inkc-b-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="creative-inkc-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.08" dy="0.1" />
          <feFlood floodColor="#1E1B4B" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="creative-inkc-b-wash" cx="70%" cy="70%" r="40%">
          <stop offset="0%" stopColor="#818CF8" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#818CF8" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="#FFFEF9" filter="url(#creative-inkc-b-texture)" />
      <rect width="91" height="55" fill="url(#creative-inkc-b-wash)" />
      {/* Ink splatter accent */}
      <circle cx="82" cy="45" r="2.5" fill="#1E1B4B" opacity="0.04" />
      <circle cx="84" cy="43" r="0.8" fill="#1E1B4B" opacity="0.06" />
      <circle cx="79" cy="47" r="0.4" fill="#4338CA" opacity="0.05" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="75" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Company */}
      <text x="10" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#1E1B4B" filter="url(#creative-inkc-b-shadow)">{data.companyJa}</text>
      <text x="10" y="16" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#6366F1">{data.companyEn}</text>
      <text x="10" y="19.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#4338CA">{data.titleJa}</text>
      <path d="M10 22 Q30 20.5 50 22" fill="none" stroke="#1E1B4B" strokeWidth="0.15" opacity="0.2" strokeLinecap="round" />
      {/* Contact */}
      <text x="10" y="27" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#312E81">{data.tel}</text>
      <text x="10" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#312E81">{data.email}</text>
      <text x="10" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#312E81">{data.website}</text>
      <path d="M10 38 Q30 36.5 50 38" fill="none" stroke="#1E1B4B" strokeWidth="0.08" opacity="0.12" strokeLinecap="round" />
      {/* Address */}
      <text x="10" y="43" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#A5B4FC">{'\u3012'}{data.zipCode}</text>
      <text x="10" y="46.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#A5B4FC">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 8. PRISM-C (虹彩C) — Light refraction / rainbow prism
// Rainbow gradient accents, triangular prism, spectral light
// ============================================================
const prismCTemplate: TemplateDefinition = {
  id: 'creative-prism-c',
  name: 'PRISM-C',
  nameJa: '虹彩C',
  category: 'creative',
  designer: 'Spectrum Lab',
  description: 'プリズムが放つ七色の光。分光された美が名刺に宿る。',
  accentColor: '#7C3AED',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="creative-prism-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="creative-prism-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="creative-prism-rainbow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#EF4444" />
          <stop offset="17%" stopColor="#F97316" />
          <stop offset="33%" stopColor="#EAB308" />
          <stop offset="50%" stopColor="#22C55E" />
          <stop offset="67%" stopColor="#3B82F6" />
          <stop offset="83%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>
        <linearGradient id="creative-prism-face" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FAFAFA" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#E5E7EB" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#FAFAFA" filter="url(#creative-prism-texture)" />
      {/* Prism triangle with fill */}
      <polygon points="70,5 82,25 58,25" fill="url(#creative-prism-face)" stroke="#555" strokeWidth="0.2" />
      {/* Light beam entering */}
      <line x1="91" y1="2" x2="74" y2="13" stroke="#999" strokeWidth="0.18" />
      {/* Rainbow beams exiting */}
      <line x1="64" y1="22" x2="8" y2="38" stroke="#EF4444" strokeWidth="0.15" opacity="0.55" />
      <line x1="64" y1="23" x2="8" y2="40" stroke="#F97316" strokeWidth="0.15" opacity="0.55" />
      <line x1="64" y1="24" x2="8" y2="42" stroke="#EAB308" strokeWidth="0.15" opacity="0.55" />
      <line x1="63" y1="25" x2="8" y2="44" stroke="#22C55E" strokeWidth="0.15" opacity="0.55" />
      <line x1="62" y1="25.5" x2="8" y2="46" stroke="#3B82F6" strokeWidth="0.15" opacity="0.55" />
      <line x1="61" y1="26" x2="8" y2="48" stroke="#6366F1" strokeWidth="0.15" opacity="0.55" />
      <line x1="60" y1="26.5" x2="8" y2="50" stroke="#A855F7" strokeWidth="0.15" opacity="0.55" />
      {/* Refraction sparkle */}
      <circle cx="70" cy="15" r="0.4" fill="#FFFFFF" opacity="0.7" />
      <circle cx="71" cy="13" r="0.15" fill="#FFFFFF" opacity="0.5" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Name */}
      <text x="10" y="15" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="6" letterSpacing="0.4" fill="#1A1A1A" filter="url(#creative-prism-shadow)">{data.nameJa}</text>
      <text x="10" y="21" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2.2" letterSpacing="0.3" fill="#7C3AED">{data.nameEn}</text>
      {/* Title */}
      <text x="10" y="28" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#6B7280">{data.titleJa}</text>
      {/* Rainbow bar at bottom */}
      <rect x="0" y="53" width="91" height="2" fill="url(#creative-prism-rainbow)" opacity="0.6" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="creative-prism-b-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="creative-prism-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.08" dy="0.1" />
          <feFlood floodColor="#000" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#FAFAFA" filter="url(#creative-prism-b-texture)" />
      {/* Rainbow bar at top */}
      <rect x="0" y="0" width="91" height="1.5" fill="url(#creative-prism-rainbow)" opacity="0.5" />
      {/* Small prism */}
      <polygon points="80,6 84,12 76,12" fill="none" stroke="#999" strokeWidth="0.1" opacity="0.2" />
      <circle cx="80" cy="9" r="0.2" fill="#FFFFFF" opacity="0.4" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="74" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Company */}
      <text x="45.5" y="12" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#1A1A1A" filter="url(#creative-prism-b-shadow)">{data.companyJa}</text>
      <text x="45.5" y="16" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#7C3AED">{data.companyEn}</text>
      <text x="45.5" y="19.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#6B7280">{data.titleJa}</text>
      <line x1="20" y1="22" x2="71" y2="22" stroke="#E5E7EB" strokeWidth="0.15" />
      {/* Contact */}
      <text x="45.5" y="27" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#4B5563">{data.tel}</text>
      <text x="45.5" y="31" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#4B5563">{data.email}</text>
      <text x="45.5" y="35" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#4B5563">{data.website}</text>
      <line x1="20" y1="38" x2="71" y2="38" stroke="#E5E7EB" strokeWidth="0.1" />
      {/* Address */}
      <text x="45.5" y="43" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#9CA3AF">{'\u3012'}{data.zipCode}</text>
      <text x="45.5" y="46.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#9CA3AF">{data.addressJa}</text>
      {/* Rainbow bar at bottom */}
      <rect x="0" y="53.5" width="91" height="1.5" fill="url(#creative-prism-rainbow)" opacity="0.5" />
    </g>
  ),
};

// ============================================================
// 9. COLLAGE (拼) — Collage / mixed media inspired
// Overlapping rectangles, layered elements, washi tape
// ============================================================
const collageTemplate: TemplateDefinition = {
  id: 'creative-collage',
  name: 'COLLAGE',
  nameJa: '拼',
  category: 'creative',
  designer: 'Mixed Media Co.',
  description: '断片を重ねて生まれる美。コラージュの重層的な表現。',
  accentColor: '#DC2626',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="creative-collage-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="creative-collage-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="creative-collage-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5F5F0" />
          <stop offset="100%" stopColor="#FAF8F5" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#creative-collage-bg)" filter="url(#creative-collage-texture)" />
      {/* Collage layers */}
      <rect x="55" y="2" width="26" height="18" fill="#FEE2E2" stroke="#FECACA" strokeWidth="0.1" transform="rotate(3, 68, 11)" />
      <rect x="60" y="5" width="23" height="14" fill="#DBEAFE" stroke="#BFDBFE" strokeWidth="0.1" transform="rotate(-2, 71.5, 12)" />
      <rect x="5" y="35" width="22" height="16" fill="#FEF3C7" stroke="#FDE68A" strokeWidth="0.1" transform="rotate(2, 16, 43)" />
      {/* Torn paper edge */}
      <path d="M50 2 L52 4 L50 6 L53 8 L50 10 L52 12" stroke="#E5E7EB" strokeWidth="0.1" fill="none" />
      {/* Washi tape strips */}
      <rect x="58" y="0" width="12" height="2.5" fill="#DC2626" opacity="0.12" transform="rotate(3, 64, 1.25)" />
      <rect x="3" y="34" width="10" height="2" fill="#3B82F6" opacity="0.1" transform="rotate(-1, 8, 35)" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="76" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Name */}
      <text x="12" y="19" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="6.5" fill="#1A1A1A" filter="url(#creative-collage-shadow)">{data.nameJa}</text>
      <text x="12" y="25" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="2.2" letterSpacing="0.3" fill="#DC2626">{data.nameEn}</text>
      {/* Title on a paper scrap */}
      <rect x="10" y="28" width="40" height="5.5" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="0.08" />
      <text x="12" y="32" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#4B5563">{data.titleJa}</text>
      {/* Company overlapping */}
      <text x="30" y="44" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#9CA3AF">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="creative-collage-b-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="creative-collage-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.08" dy="0.1" />
          <feFlood floodColor="#000" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#F5F5F0" filter="url(#creative-collage-b-texture)" />
      {/* Collage scraps */}
      <rect x="60" y="35" width="23" height="15" fill="#FEE2E2" stroke="#FECACA" strokeWidth="0.08" transform="rotate(-2, 71.5, 42.5)" />
      <rect x="5" y="2" width="19" height="13" fill="#DBEAFE" stroke="#BFDBFE" strokeWidth="0.08" transform="rotate(1, 14.5, 8.5)" />
      {/* Washi tape */}
      <rect x="62" y="33" width="10" height="2" fill="#DC2626" opacity="0.1" transform="rotate(-1, 67, 34)" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="74" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Company on scrap */}
      <text x="10" y="10" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="2.5" fill="#1A1A1A" filter="url(#creative-collage-b-shadow)">{data.companyJa}</text>
      <text x="10" y="14.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#DC2626">{data.companyEn}</text>
      <text x="10" y="18" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#4B5563">{data.titleJa}</text>
      {/* Contact on white paper */}
      <rect x="8" y="21" width="52" height="18" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="0.08" />
      <text x="12" y="26" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#374151">{data.tel}</text>
      <text x="12" y="30" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#374151">{data.email}</text>
      <text x="12" y="34" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#374151">{data.website}</text>
      {/* Address */}
      <text x="10" y="44" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#9CA3AF">{'\u3012'}{data.zipCode}</text>
      <text x="10" y="47.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#9CA3AF">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 10. SKETCH (素描) — Pencil sketch / drawing inspired
// Hand-drawn aesthetic, sketch lines, graphite tones
// ============================================================
const sketchTemplate: TemplateDefinition = {
  id: 'creative-sketch',
  name: 'SKETCH',
  nameJa: '素描',
  category: 'creative',
  designer: 'Pencil Lab',
  description: '鉛筆のスケッチのような素朴さ。下描きの中に完成形を見る。',
  accentColor: '#57534E',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="creative-sketch-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="creative-sketch-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.08" dy="0.1" />
          <feFlood floodColor="#44403C" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="creative-sketch-paper" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FAFAF9" />
          <stop offset="100%" stopColor="#F5F5F4" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#creative-sketch-paper)" filter="url(#creative-sketch-texture)" />
      {/* Sketch grid lines */}
      <line x1="0" y1="13.75" x2="91" y2="13.75" stroke="#E7E5E4" strokeWidth="0.05" />
      <line x1="0" y1="27.5" x2="91" y2="27.5" stroke="#E7E5E4" strokeWidth="0.05" />
      <line x1="0" y1="41.25" x2="91" y2="41.25" stroke="#E7E5E4" strokeWidth="0.05" />
      <line x1="22.75" y1="0" x2="22.75" y2="55" stroke="#E7E5E4" strokeWidth="0.05" />
      <line x1="45.5" y1="0" x2="45.5" y2="55" stroke="#E7E5E4" strokeWidth="0.05" />
      <line x1="68.25" y1="0" x2="68.25" y2="55" stroke="#E7E5E4" strokeWidth="0.05" />
      {/* Sketch-style frame — hand-drawn feel */}
      <path d="M6 5 L84 5.3 L84.2 49.5 L5.8 49.8 Z" fill="none" stroke="#A8A29E" strokeWidth="0.12" />
      {/* Cross registration marks */}
      <line x1="2" y1="27.5" x2="4" y2="27.5" stroke="#A8A29E" strokeWidth="0.1" />
      <line x1="3" y1="26.5" x2="3" y2="28.5" stroke="#A8A29E" strokeWidth="0.1" />
      <line x1="87" y1="27.5" x2="89" y2="27.5" stroke="#A8A29E" strokeWidth="0.1" />
      <line x1="88" y1="26.5" x2="88" y2="28.5" stroke="#A8A29E" strokeWidth="0.1" />
      {/* Pencil smudge */}
      <ellipse cx="80" cy="42" rx="3" ry="1.5" fill="#A8A29E" opacity="0.04" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="76" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Name */}
      <text x="45.5" y="21" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="6" letterSpacing="0.5" fill="#44403C" filter="url(#creative-sketch-shadow)">{data.nameJa}</text>
      <text x="45.5" y="27" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2.2" letterSpacing="0.4" fill="#78716C">{data.nameEn}</text>
      {/* Sketch underline */}
      <path d="M25 30 Q35 29.5 45.5 30 Q56 30.5 66 30" fill="none" stroke="#A8A29E" strokeWidth="0.15" strokeLinecap="round" />
      {/* Title */}
      <text x="45.5" y="36" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#78716C">{data.titleJa}</text>
      {/* Company */}
      <text x="45.5" y="44" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#A8A29E">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="creative-sketch-b-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="creative-sketch-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.15" />
          <feOffset dx="0.06" dy="0.08" />
          <feFlood floodColor="#44403C" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#FAFAF9" filter="url(#creative-sketch-b-texture)" />
      {/* Grid lines */}
      <line x1="0" y1="13.75" x2="91" y2="13.75" stroke="#E7E5E4" strokeWidth="0.05" />
      <line x1="0" y1="27.5" x2="91" y2="27.5" stroke="#E7E5E4" strokeWidth="0.05" />
      <line x1="0" y1="41.25" x2="91" y2="41.25" stroke="#E7E5E4" strokeWidth="0.05" />
      <line x1="22.75" y1="0" x2="22.75" y2="55" stroke="#E7E5E4" strokeWidth="0.05" />
      <line x1="45.5" y1="0" x2="45.5" y2="55" stroke="#E7E5E4" strokeWidth="0.05" />
      <line x1="68.25" y1="0" x2="68.25" y2="55" stroke="#E7E5E4" strokeWidth="0.05" />
      {/* Sketch frame */}
      <path d="M6 5 L84 5.2 L84.3 49.5 L5.8 49.7 Z" fill="none" stroke="#A8A29E" strokeWidth="0.1" />
      {/* Registration marks */}
      <line x1="2" y1="27.5" x2="4" y2="27.5" stroke="#A8A29E" strokeWidth="0.08" />
      <line x1="3" y1="26.5" x2="3" y2="28.5" stroke="#A8A29E" strokeWidth="0.08" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="38" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Company */}
      <text x="45.5" y="13" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#44403C" filter="url(#creative-sketch-b-shadow)">{data.companyJa}</text>
      <text x="45.5" y="17" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#78716C">{data.companyEn}</text>
      <text x="45.5" y="20.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#78716C">{data.titleJa}</text>
      <path d="M20 23 Q35 22.5 45.5 23 Q56 23.5 71 23" fill="none" stroke="#A8A29E" strokeWidth="0.1" strokeLinecap="round" />
      {/* Contact */}
      <text x="45.5" y="28" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#57534E">{data.tel}</text>
      <text x="45.5" y="32" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#57534E">{data.email}</text>
      <text x="45.5" y="36" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#57534E">{data.website}</text>
      <path d="M20 39 Q35 38.5 45.5 39 Q56 39.5 71 39" fill="none" stroke="#A8A29E" strokeWidth="0.08" strokeLinecap="round" />
      {/* Address */}
      <text x="45.5" y="44" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#A8A29E">{'\u3012'}{data.zipCode}</text>
      <text x="45.5" y="47.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#A8A29E">{data.addressJa}</text>
    </g>
  ),
};

export const creativeTemplates: TemplateDefinition[] = [
  sparkTemplate,
  museTemplate,
  visionTemplate,
  paletteTemplate,
  canvasTemplate,
  chiselTemplate,
  inkCTemplate,
  prismCTemplate,
  collageTemplate,
  sketchTemplate,
];
