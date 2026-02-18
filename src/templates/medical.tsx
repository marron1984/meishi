import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. CLINIC (院) — Clean clinical white
// Pristine medical clinic with subtle cross motifs and layered depth
// ============================================================
const clinicTemplate: TemplateDefinition = {
  id: 'medical-clinic',
  name: 'CLINIC',
  nameJa: '院',
  category: 'medical',
  designer: 'Medical Design',
  description: 'クリニックの清潔感。信頼と安心の白い空間。',
  accentColor: '#0077B6',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="medical-clinic-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="medical-clinic-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#003355" floodOpacity="0.12" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="medical-clinic-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F0F7FC" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>
        <linearGradient id="medical-clinic-bar" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0077B6" />
          <stop offset="50%" stopColor="#00A5E0" />
          <stop offset="100%" stopColor="#0077B6" />
        </linearGradient>
        <radialGradient id="medical-clinic-glow" cx="80%" cy="15%" r="35%">
          <stop offset="0%" stopColor="#0077B6" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#0077B6" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#medical-clinic-grad)" filter="url(#medical-clinic-texture)" />
      <rect width="91" height="55" fill="url(#medical-clinic-glow)" />
      {/* Top accent bar with gradient */}
      <rect x="0" y="0" width="91" height="1.8" fill="url(#medical-clinic-bar)" />
      <rect x="0" y="1.8" width="91" height="0.15" fill="#00A5E0" opacity="0.3" />
      {/* Medical cross — layered */}
      <rect x="73" y="8" width="6" height="1" fill="#0077B6" rx="0.2" opacity="0.12" />
      <rect x="75.5" y="5.5" width="1" height="6" fill="#0077B6" rx="0.2" opacity="0.12" />
      <rect x="74" y="8.8" width="4" height="0.5" fill="#00A5E0" rx="0.1" opacity="0.25" />
      <rect x="75.75" y="7.05" width="0.5" height="4" fill="#00A5E0" rx="0.1" opacity="0.25" />
      {/* Corner accent dots */}
      <circle cx="84" cy="6" r="0.3" fill="#0077B6" opacity="0.15" />
      <circle cx="86" cy="8" r="0.2" fill="#00A5E0" opacity="0.2" />
      {/* Subtle horizontal rule system */}
      <line x1="10" y1="33" x2="60" y2="33" stroke="#0077B6" strokeWidth="0.08" opacity="0.25" />
      <line x1="10" y1="33.4" x2="40" y2="33.4" stroke="#00A5E0" strokeWidth="0.04" opacity="0.15" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="76" y="38" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Name */}
      <text x="10" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="6" letterSpacing="0.6" fill="#1a2a3a" filter="url(#medical-clinic-shadow)">{data.nameJa}</text>
      <text x="10" y="26.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2.2" letterSpacing="0.4" fill="#0077B6">{data.nameEn}</text>
      {/* Title */}
      <text x="10" y="38" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#5588AA">{data.titleJa}</text>
      {/* Company */}
      <text x="10" y="46" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" fill="#1a2a3a">{data.companyJa}</text>
      <text x="10" y="50" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#6699BB">{data.companyEn}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="medical-clinic-b-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="medical-clinic-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.08" dy="0.1" />
          <feFlood floodColor="#003355" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="medical-clinic-b-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F0F7FC" />
        </linearGradient>
        <linearGradient id="medical-clinic-b-bar" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0077B6" />
          <stop offset="100%" stopColor="#00A5E0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#medical-clinic-b-grad)" filter="url(#medical-clinic-b-texture)" />
      {/* Top accent bar */}
      <rect x="0" y="0" width="91" height="1.8" fill="url(#medical-clinic-b-bar)" />
      {/* Decorative cross watermark */}
      <rect x="70" y="35" width="12" height="2" fill="#0077B6" rx="0.3" opacity="0.04" />
      <rect x="75" y="30" width="2" height="12" fill="#0077B6" rx="0.3" opacity="0.04" />
      {/* Corner accents */}
      <circle cx="85" cy="48" r="0.4" fill="#00A5E0" opacity="0.12" />
      <circle cx="82" cy="50" r="0.25" fill="#0077B6" opacity="0.1" />
      <path d="M3 50 L3 52 L5 52" fill="none" stroke="#0077B6" strokeWidth="0.08" opacity="0.15" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="75" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Company */}
      <text x="10" y="10" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.8" fill="#1a2a3a" filter="url(#medical-clinic-b-shadow)">{data.companyJa}</text>
      <text x="10" y="14.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" letterSpacing="0.3" fill="#0077B6">{data.companyEn}</text>
      {/* Title */}
      <text x="10" y="19" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#5588AA">{data.titleJa}</text>
      <line x1="10" y1="21.5" x2="81" y2="21.5" stroke="#0077B6" strokeWidth="0.08" opacity="0.2" />
      {/* Contact */}
      <text x="10" y="26.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#334455">TEL {data.tel}</text>
      <text x="10" y="30.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#334455">{data.email}</text>
      <text x="10" y="34.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#334455">{data.website}</text>
      <line x1="10" y1="37.5" x2="81" y2="37.5" stroke="#00A5E0" strokeWidth="0.06" opacity="0.15" />
      {/* Address */}
      <text x="10" y="42" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#6688AA">{'\u3012'}{data.zipCode}</text>
      <text x="10" y="46" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#6688AA">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 2. PULSE-M (脈搏) — Heartbeat/pulse line monitor
// ECG-inspired with grid, gradient rhythm lines, vital signs readout
// ============================================================
const pulseTemplate: TemplateDefinition = {
  id: 'medical-pulse',
  name: 'PULSE-M',
  nameJa: '脈搏',
  category: 'medical',
  designer: 'Vital Signs',
  description: '脈の波形。生命のリズムが刻む信頼の証。',
  accentColor: '#0077B6',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="medical-pulse-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="medical-pulse-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.1" dy="0.12" />
          <feFlood floodColor="#002244" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <pattern id="medical-pulse-grid" width="5" height="5" patternUnits="userSpaceOnUse">
          <path d="M 5 0 L 0 0 0 5" fill="none" stroke="#c0d8e8" strokeWidth="0.06" />
        </pattern>
        <pattern id="medical-pulse-gridSm" width="1" height="1" patternUnits="userSpaceOnUse">
          <path d="M 1 0 L 0 0 0 1" fill="none" stroke="#d8e8f2" strokeWidth="0.02" />
        </pattern>
        <linearGradient id="medical-pulse-ecg" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00CC66" />
          <stop offset="50%" stopColor="#00EEAA" />
          <stop offset="100%" stopColor="#00CC66" />
        </linearGradient>
        <linearGradient id="medical-pulse-bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8F0F8" />
          <stop offset="100%" stopColor="#F4F8FC" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#medical-pulse-bg)" filter="url(#medical-pulse-texture)" />
      <rect width="91" height="55" fill="url(#medical-pulse-gridSm)" />
      <rect width="91" height="55" fill="url(#medical-pulse-grid)" />
      {/* ECG heartbeat line — primary */}
      <path d="M0 12 L15 12 L18 12 L20 9 L22 15 L24 4 L26 18 L28 10 L30 12 L50 12 L53 12 L55 9 L57 15 L59 4 L61 18 L63 10 L65 12 L91 12" fill="none" stroke="url(#medical-pulse-ecg)" strokeWidth="0.3" opacity="0.8" />
      {/* ECG ghost trail */}
      <path d="M0 12 L15 12 L18 12 L20 9 L22 15 L24 4 L26 18 L28 10 L30 12 L50 12 L53 12 L55 9 L57 15 L59 4 L61 18 L63 10 L65 12 L91 12" fill="none" stroke="#00CC66" strokeWidth="0.6" opacity="0.08" />
      {/* Heart rate display */}
      <text x="83" y="7" textAnchor="end" fontFamily="'Space Grotesk', monospace" fontWeight="500" fontSize="1.8" fill="#00CC66" opacity="0.7">72</text>
      <text x="86" y="7" fontFamily="'Space Grotesk', monospace" fontWeight="300" fontSize="1" fill="#00CC66" opacity="0.5">BPM</text>
      {/* SpO2 readout */}
      <text x="83" y="10" textAnchor="end" fontFamily="'Space Grotesk', monospace" fontWeight="400" fontSize="1.2" fill="#0077B6" opacity="0.4">SpO2 98%</text>
      {/* Decorative monitor corner brackets */}
      <path d="M3 3 L3 5.5 M3 3 L5.5 3" fill="none" stroke="#0077B6" strokeWidth="0.1" opacity="0.3" />
      <path d="M88 3 L88 5.5 M88 3 L85.5 3" fill="none" stroke="#0077B6" strokeWidth="0.1" opacity="0.3" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="76" y="38" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Name */}
      <text x="10" y="28" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="6" letterSpacing="0.5" fill="#1a2a3a" filter="url(#medical-pulse-shadow)">{data.nameJa}</text>
      <text x="10" y="34" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2.2" letterSpacing="0.3" fill="#0077B6">{data.nameEn}</text>
      {/* Title */}
      <text x="10" y="41" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#5580AA">{data.titleJa}</text>
      {/* Company */}
      <text x="10" y="49" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2" fill="#1a2a3a">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="medical-pulse-b-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="medical-pulse-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.08" dy="0.1" />
          <feFlood floodColor="#002244" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <pattern id="medical-pulse-b-grid" width="5" height="5" patternUnits="userSpaceOnUse">
          <path d="M 5 0 L 0 0 0 5" fill="none" stroke="#d0dde6" strokeWidth="0.04" />
        </pattern>
        <linearGradient id="medical-pulse-b-ecg" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00CC66" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#00EEAA" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#F0F5F8" filter="url(#medical-pulse-b-texture)" />
      <rect width="91" height="55" fill="url(#medical-pulse-b-grid)" />
      {/* Subtle pulse line at bottom */}
      <path d="M0 48 L25 48 L28 46 L30 50 L32 44 L34 52 L36 47 L38 48 L60 48 L63 46 L65 50 L67 44 L69 52 L71 47 L73 48 L91 48" fill="none" stroke="url(#medical-pulse-b-ecg)" strokeWidth="0.15" />
      {/* Monitor corners */}
      <path d="M3 3 L3 5 M3 3 L5 3" fill="none" stroke="#0077B6" strokeWidth="0.08" opacity="0.2" />
      <path d="M88 52 L88 50 M88 52 L86 52" fill="none" stroke="#0077B6" strokeWidth="0.08" opacity="0.2" />
      {/* Vital signs watermark */}
      <text x="82" y="7" textAnchor="end" fontFamily="'Space Grotesk', monospace" fontWeight="300" fontSize="1" fill="#00CC66" opacity="0.25">VITALS</text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="75" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Company */}
      <text x="10" y="10" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.8" fill="#1a2a3a" filter="url(#medical-pulse-b-shadow)">{data.companyJa}</text>
      <text x="10" y="14.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#0077B6">{data.companyEn}</text>
      <text x="10" y="18.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#5580AA">{data.titleJa}</text>
      <line x1="10" y1="21" x2="81" y2="21" stroke="#0077B6" strokeWidth="0.06" opacity="0.2" />
      {/* Contact */}
      <text x="10" y="26" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#334455">{data.tel}</text>
      <text x="10" y="30" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#334455">{data.email}</text>
      <text x="10" y="34" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#334455">{data.website}</text>
      <line x1="10" y1="37" x2="81" y2="37" stroke="#0077B6" strokeWidth="0.04" opacity="0.15" />
      {/* Address */}
      <text x="10" y="41.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#6688AA">{'\u3012'}{data.zipCode}</text>
      <text x="10" y="45" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#6688AA">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 3. CARE (看) — Caring hands, soft approach
// Gentle flowing curves, leaf motifs, warm teal palette
// ============================================================
const careTemplate: TemplateDefinition = {
  id: 'medical-care',
  name: 'CARE',
  nameJa: '看',
  category: 'medical',
  designer: 'Healing Arts',
  description: '看護の優しさ。寄り添う心の温かさ。',
  accentColor: '#2A9D8F',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="medical-care-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="medical-care-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.1" dy="0.12" />
          <feFlood floodColor="#1A5F55" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="medical-care-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F2FAF8" />
          <stop offset="50%" stopColor="#F8FCFB" />
          <stop offset="100%" stopColor="#EDF7F5" />
        </linearGradient>
        <radialGradient id="medical-care-glow" cx="75%" cy="80%" r="40%">
          <stop offset="0%" stopColor="#2A9D8F" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#2A9D8F" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="medical-care-leaf" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2A9D8F" />
          <stop offset="100%" stopColor="#40BFA8" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#medical-care-bg)" filter="url(#medical-care-texture)" />
      <rect width="91" height="55" fill="url(#medical-care-glow)" />
      {/* Gentle flowing arcs — healing waves */}
      <path d="M0 38 Q22 28 45.5 33 Q68 38 91 30" fill="none" stroke="#2A9D8F" strokeWidth="0.15" opacity="0.2" />
      <path d="M0 42 Q25 32 50 37 Q75 42 91 34" fill="none" stroke="#40BFA8" strokeWidth="0.1" opacity="0.15" />
      <path d="M0 46 Q28 36 55 41 Q78 46 91 38" fill="none" stroke="#2A9D8F" strokeWidth="0.06" opacity="0.1" />
      {/* Leaf/caring symbol — top right */}
      <path d="M78 7 Q82 3 86 7 Q82 11 78 7" fill="url(#medical-care-leaf)" opacity="0.15" />
      <path d="M82 7 L82 12" fill="none" stroke="#2A9D8F" strokeWidth="0.08" opacity="0.15" />
      {/* Small caring dots */}
      <circle cx="74" cy="10" r="0.3" fill="#40BFA8" opacity="0.2" />
      <circle cx="88" cy="5" r="0.2" fill="#2A9D8F" opacity="0.15" />
      <circle cx="72" cy="5" r="0.15" fill="#6DC8B8" opacity="0.2" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="76" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Name */}
      <text x="10" y="17" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6" letterSpacing="0.6" fill="#1A3A38" filter="url(#medical-care-shadow)">{data.nameJa}</text>
      <text x="10" y="23" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2.2" letterSpacing="0.3" fill="#2A9D8F">{data.nameEn}</text>
      {/* Title */}
      <text x="10" y="30" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#5A9A8E">{data.titleJa}</text>
      {/* Company */}
      <text x="10" y="48" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2" fill="#1A3A38">{data.companyJa}</text>
      <text x="10" y="52" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#6DC8B8">{data.companyEn}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="medical-care-b-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="medical-care-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.08" dy="0.1" />
          <feFlood floodColor="#1A5F55" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="medical-care-b-bg" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#EDF7F5" />
          <stop offset="100%" stopColor="#F8FCFB" />
        </linearGradient>
        <radialGradient id="medical-care-b-glow" cx="20%" cy="70%" r="35%">
          <stop offset="0%" stopColor="#40BFA8" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#40BFA8" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#medical-care-b-bg)" filter="url(#medical-care-b-texture)" />
      <rect width="91" height="55" fill="url(#medical-care-b-glow)" />
      {/* Gentle arcs — mirrored theme */}
      <path d="M0 46 Q30 38 60 42 Q80 46 91 40" fill="none" stroke="#2A9D8F" strokeWidth="0.08" opacity="0.12" />
      <path d="M0 50 Q35 42 65 46 Q82 50 91 44" fill="none" stroke="#40BFA8" strokeWidth="0.05" opacity="0.08" />
      {/* Leaf watermark */}
      <path d="M76 42 Q80 38 84 42 Q80 46 76 42" fill="#2A9D8F" opacity="0.04" />
      <path d="M80 42 L80 48" fill="none" stroke="#2A9D8F" strokeWidth="0.04" opacity="0.06" />
      {/* Caring dots */}
      <circle cx="85" cy="48" r="0.25" fill="#40BFA8" opacity="0.12" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="75" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Company */}
      <text x="10" y="10" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.8" fill="#1A3A38" filter="url(#medical-care-b-shadow)">{data.companyJa}</text>
      <text x="10" y="14.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#2A9D8F">{data.companyEn}</text>
      <text x="10" y="18.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#5A9A8E">{data.titleJa}</text>
      <line x1="10" y1="21" x2="81" y2="21" stroke="#2A9D8F" strokeWidth="0.06" opacity="0.15" />
      {/* Contact */}
      <text x="10" y="26" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#3A5A55">{data.tel}</text>
      <text x="10" y="30" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#3A5A55">{data.email}</text>
      <text x="10" y="34" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#3A5A55">{data.website}</text>
      <line x1="10" y1="37" x2="81" y2="37" stroke="#40BFA8" strokeWidth="0.04" opacity="0.1" />
      {/* Address */}
      <text x="10" y="41.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#5A9A8E">{'\u3012'}{data.zipCode}</text>
      <text x="10" y="45" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#5A9A8E">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 4. PHARMA (薬) — Pharmaceutical precision
// Molecular structures, hexagonal lattice, scientific blue
// ============================================================
const pharmaTemplate: TemplateDefinition = {
  id: 'medical-pharma',
  name: 'PHARMA',
  nameJa: '薬',
  category: 'medical',
  designer: 'Pharma Design',
  description: '製薬の精密さ。分子のように正確な配置。',
  accentColor: '#0077B6',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="medical-pharma-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="medical-pharma-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.1" dy="0.12" />
          <feFlood floodColor="#002255" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="medical-pharma-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F5F8FC" />
        </linearGradient>
        <linearGradient id="medical-pharma-mol" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0077B6" />
          <stop offset="100%" stopColor="#00A5E0" />
        </linearGradient>
        <radialGradient id="medical-pharma-glow" cx="80%" cy="20%" r="30%">
          <stop offset="0%" stopColor="#0077B6" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#0077B6" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#medical-pharma-bg)" filter="url(#medical-pharma-texture)" />
      <rect width="91" height="55" fill="url(#medical-pharma-glow)" />
      {/* Molecular hexagonal structure */}
      <polygon points="74,10 78,7 82,10 82,15 78,18 74,15" fill="none" stroke="url(#medical-pharma-mol)" strokeWidth="0.12" opacity="0.25" />
      <polygon points="82,10 86,7 90,10 90,15 86,18 82,15" fill="none" stroke="#0077B6" strokeWidth="0.1" opacity="0.18" />
      <polygon points="78,18 82,15 86,18 86,23 82,26 78,23" fill="none" stroke="#00A5E0" strokeWidth="0.08" opacity="0.15" />
      {/* Bond lines with node dots */}
      <line x1="74" y1="15" x2="70" y2="18" stroke="#0077B6" strokeWidth="0.08" opacity="0.2" />
      <circle cx="70" cy="18" r="0.6" fill="#0077B6" opacity="0.2" />
      <line x1="70" y1="18" x2="66" y2="16" stroke="#00A5E0" strokeWidth="0.06" opacity="0.15" />
      <circle cx="66" cy="16" r="0.4" fill="#00A5E0" opacity="0.15" />
      {/* Atom dots at hexagon vertices */}
      <circle cx="78" cy="7" r="0.4" fill="#0077B6" opacity="0.3" />
      <circle cx="82" cy="10" r="0.35" fill="#00A5E0" opacity="0.25" />
      <circle cx="86" cy="18" r="0.3" fill="#0077B6" opacity="0.2" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="76" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Name */}
      <text x="10" y="18" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="6" letterSpacing="0.4" fill="#1a2a3a" filter="url(#medical-pharma-shadow)">{data.nameJa}</text>
      <text x="10" y="24.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="2.2" letterSpacing="0.4" fill="#0077B6">{data.nameEn}</text>
      <line x1="10" y1="28" x2="55" y2="28" stroke="#0077B6" strokeWidth="0.08" opacity="0.2" />
      {/* Title */}
      <text x="10" y="34" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#5580AA">{data.titleJa}</text>
      {/* Company */}
      <text x="10" y="43" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" fill="#1a2a3a">{data.companyJa}</text>
      {/* Rx symbol */}
      <text x="84" y="50" textAnchor="end" fontFamily="'Cormorant Garamond', serif" fontWeight="500" fontSize="2" fill="#0077B6" opacity="0.2">Rx</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="medical-pharma-b-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="medical-pharma-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.08" dy="0.1" />
          <feFlood floodColor="#002255" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="medical-pharma-b-bg" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#F5F8FC" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#medical-pharma-b-bg)" filter="url(#medical-pharma-b-texture)" />
      {/* Subtle molecular pattern */}
      <polygon points="74,40 78,37 82,40 82,45 78,48 74,45" fill="none" stroke="#0077B6" strokeWidth="0.06" opacity="0.08" />
      <polygon points="82,40 86,37 90,40 90,45 86,48 82,45" fill="none" stroke="#00A5E0" strokeWidth="0.05" opacity="0.06" />
      <circle cx="78" cy="37" r="0.3" fill="#0077B6" opacity="0.1" />
      {/* Rx watermark */}
      <text x="82" y="52" textAnchor="end" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#0077B6" opacity="0.1">Rx</text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="75" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Company */}
      <text x="10" y="10" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.8" fill="#1a2a3a" filter="url(#medical-pharma-b-shadow)">{data.companyJa}</text>
      <text x="10" y="14.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#0077B6">{data.companyEn}</text>
      <text x="10" y="18.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#5580AA">{data.titleJa}</text>
      <line x1="10" y1="21" x2="81" y2="21" stroke="#0077B6" strokeWidth="0.06" opacity="0.2" />
      {/* Contact */}
      <text x="10" y="26" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.5" fill="#334455">{data.tel}</text>
      <text x="10" y="30" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.5" fill="#334455">{data.email}</text>
      <text x="10" y="34" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.5" fill="#334455">{data.website}</text>
      <line x1="10" y1="37" x2="81" y2="37" stroke="#00A5E0" strokeWidth="0.04" opacity="0.12" />
      {/* Address */}
      <text x="10" y="41.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#6688AA">{'\u3012'}{data.zipCode}</text>
      <text x="10" y="45" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#6688AA">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 5. LAB-M (検) — Laboratory testing aesthetic
// Scientific precision with graph paper, flask, and data readouts
// ============================================================
const labTemplate: TemplateDefinition = {
  id: 'medical-lab',
  name: 'LAB-M',
  nameJa: '検',
  category: 'medical',
  designer: 'Lab Sciences',
  description: '検査室の精密さ。科学が裏付ける確かな技術。',
  accentColor: '#2A9D8F',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="medical-lab-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="medical-lab-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.1" dy="0.12" />
          <feFlood floodColor="#1A4040" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <pattern id="medical-lab-graph" width="4" height="4" patternUnits="userSpaceOnUse">
          <path d="M 4 0 L 0 0 0 4" fill="none" stroke="#c8e0d8" strokeWidth="0.06" />
        </pattern>
        <pattern id="medical-lab-graphSm" width="1" height="1" patternUnits="userSpaceOnUse">
          <path d="M 1 0 L 0 0 0 1" fill="none" stroke="#d8ece6" strokeWidth="0.02" />
        </pattern>
        <linearGradient id="medical-lab-flask" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2A9D8F" stopOpacity="0" />
          <stop offset="60%" stopColor="#2A9D8F" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#40BFA8" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="medical-lab-bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F5FAF8" />
          <stop offset="100%" stopColor="#F8FCFA" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#medical-lab-bg)" filter="url(#medical-lab-texture)" />
      <rect width="91" height="55" fill="url(#medical-lab-graphSm)" />
      <rect width="91" height="55" fill="url(#medical-lab-graph)" />
      {/* Test tube / flask */}
      <rect x="77" y="7" width="5" height="18" rx="0.5" fill="url(#medical-lab-flask)" stroke="#2A9D8F" strokeWidth="0.1" opacity="0.4" />
      <line x1="76" y1="7" x2="83" y2="7" stroke="#2A9D8F" strokeWidth="0.1" opacity="0.35" />
      {/* Measurement marks */}
      <line x1="76.5" y1="11" x2="77" y2="11" stroke="#2A9D8F" strokeWidth="0.06" opacity="0.3" />
      <line x1="76.5" y1="15" x2="77" y2="15" stroke="#2A9D8F" strokeWidth="0.06" opacity="0.3" />
      <line x1="76.5" y1="19" x2="77" y2="19" stroke="#2A9D8F" strokeWidth="0.06" opacity="0.3" />
      {/* Bubbles in flask */}
      <circle cx="79" cy="20" r="0.4" fill="#40BFA8" opacity="0.2" />
      <circle cx="80.5" cy="18" r="0.25" fill="#2A9D8F" opacity="0.15" />
      <circle cx="78.5" cy="22" r="0.3" fill="#40BFA8" opacity="0.18" />
      {/* Data plot dots */}
      <circle cx="70" cy="35" r="0.2" fill="#2A9D8F" opacity="0.2" />
      <circle cx="74" cy="33" r="0.2" fill="#2A9D8F" opacity="0.2" />
      <circle cx="78" cy="36" r="0.2" fill="#2A9D8F" opacity="0.2" />
      <circle cx="82" cy="32" r="0.2" fill="#2A9D8F" opacity="0.2" />
      <path d="M70 35 L74 33 L78 36 L82 32" fill="none" stroke="#2A9D8F" strokeWidth="0.06" opacity="0.15" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="76" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Name */}
      <text x="10" y="18" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="6" letterSpacing="0.4" fill="#1A3A38" filter="url(#medical-lab-shadow)">{data.nameJa}</text>
      <text x="10" y="24.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="2.2" letterSpacing="0.3" fill="#2A9D8F">{data.nameEn}</text>
      {/* Title */}
      <text x="10" y="33" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#5A9A8E">{data.titleJa}</text>
      {/* Company */}
      <text x="10" y="43" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2" fill="#1A3A38">{data.companyJa}</text>
      <text x="10" y="47" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#6DC8B8">{data.companyEn}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="medical-lab-b-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="medical-lab-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.08" dy="0.1" />
          <feFlood floodColor="#1A4040" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <pattern id="medical-lab-b-graph" width="4" height="4" patternUnits="userSpaceOnUse">
          <path d="M 4 0 L 0 0 0 4" fill="none" stroke="#d0e8e0" strokeWidth="0.04" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="#F8FAFA" filter="url(#medical-lab-b-texture)" />
      <rect width="91" height="55" fill="url(#medical-lab-b-graph)" />
      {/* Subtle flask watermark */}
      <rect x="78" y="38" width="4" height="12" rx="0.5" fill="none" stroke="#2A9D8F" strokeWidth="0.04" opacity="0.08" />
      {/* Data points decoration */}
      <circle cx="80" cy="44" r="0.15" fill="#40BFA8" opacity="0.1" />
      <circle cx="81" cy="42" r="0.1" fill="#2A9D8F" opacity="0.1" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="75" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Company */}
      <text x="10" y="10" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.8" fill="#1A3A38" filter="url(#medical-lab-b-shadow)">{data.companyJa}</text>
      <text x="10" y="14.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#2A9D8F">{data.companyEn}</text>
      <text x="10" y="18.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#5A9A8E">{data.titleJa}</text>
      <line x1="10" y1="21" x2="81" y2="21" stroke="#2A9D8F" strokeWidth="0.06" opacity="0.15" />
      {/* Contact */}
      <text x="10" y="26" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.5" fill="#3A5A55">{data.tel}</text>
      <text x="10" y="30" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.5" fill="#3A5A55">{data.email}</text>
      <text x="10" y="34" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.5" fill="#3A5A55">{data.website}</text>
      <line x1="10" y1="37" x2="81" y2="37" stroke="#40BFA8" strokeWidth="0.04" opacity="0.1" />
      {/* Address */}
      <text x="10" y="41.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#5A9A8E">{'\u3012'}{data.zipCode}</text>
      <text x="10" y="45" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#5A9A8E">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 6. DENTAL (歯) — Dental practice clean brightness
// Sparkling white, smile curve, clean sparkle particles
// ============================================================
const dentalTemplate: TemplateDefinition = {
  id: 'medical-dental',
  name: 'DENTAL',
  nameJa: '歯',
  category: 'medical',
  designer: 'Dental Arts',
  description: '歯科の輝き。清潔で明るい笑顔の空間。',
  accentColor: '#4AABCC',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="medical-dental-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="medical-dental-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.1" dy="0.12" />
          <feFlood floodColor="#1A5570" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="medical-dental-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F8FCFF" />
        </linearGradient>
        <radialGradient id="medical-dental-sparkle" cx="75%" cy="15%" r="25%">
          <stop offset="0%" stopColor="#4AABCC" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#4AABCC" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="medical-dental-accent" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4AABCC" />
          <stop offset="100%" stopColor="#6BC8E8" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#medical-dental-bg)" filter="url(#medical-dental-texture)" />
      <rect width="91" height="55" fill="url(#medical-dental-sparkle)" />
      {/* Left accent border — gradient */}
      <rect x="0" y="0" width="1.8" height="55" fill="url(#medical-dental-accent)" opacity="0.15" />
      <rect x="0" y="0" width="0.5" height="55" fill="#4AABCC" opacity="0.4" />
      {/* Sparkle cluster — clean/bright */}
      <circle cx="73" cy="9" r="1" fill="#4AABCC" opacity="0.25" />
      <circle cx="77" cy="6" r="0.6" fill="#6BC8E8" opacity="0.2" />
      <circle cx="70" cy="6" r="0.4" fill="#4AABCC" opacity="0.2" />
      <circle cx="80" cy="10" r="0.35" fill="#6BC8E8" opacity="0.15" />
      <circle cx="68" cy="11" r="0.25" fill="#89D8F0" opacity="0.2" />
      {/* Sparkle cross */}
      <line x1="73" y1="7" x2="73" y2="11" stroke="#FFFFFF" strokeWidth="0.1" opacity="0.6" />
      <line x1="71" y1="9" x2="75" y2="9" stroke="#FFFFFF" strokeWidth="0.1" opacity="0.6" />
      {/* Smile arc */}
      <path d="M64 46 Q72 51 80 46" fill="none" stroke="#4AABCC" strokeWidth="0.12" opacity="0.2" />
      <path d="M66 45 Q72 49 78 45" fill="none" stroke="#6BC8E8" strokeWidth="0.08" opacity="0.15" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="76" y="34" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Name */}
      <text x="10" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6" letterSpacing="0.5" fill="#1A3040" filter="url(#medical-dental-shadow)">{data.nameJa}</text>
      <text x="10" y="26.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2.2" letterSpacing="0.3" fill="#4AABCC">{data.nameEn}</text>
      {/* Title */}
      <text x="10" y="34" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#7ABBE0">{data.titleJa}</text>
      {/* Company */}
      <text x="10" y="44" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" fill="#1A3040">{data.companyJa}</text>
      <text x="10" y="48" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#89D8F0">{data.companyEn}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="medical-dental-b-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="medical-dental-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.08" dy="0.1" />
          <feFlood floodColor="#1A5570" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="medical-dental-b-glow" cx="80%" cy="12%" r="25%">
          <stop offset="0%" stopColor="#4AABCC" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#4AABCC" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="#FFFFFF" filter="url(#medical-dental-b-texture)" />
      <rect width="91" height="55" fill="url(#medical-dental-b-glow)" />
      <rect x="0" y="0" width="0.5" height="55" fill="#4AABCC" opacity="0.35" />
      {/* Sparkle accent */}
      <circle cx="80" cy="7" r="0.5" fill="#4AABCC" opacity="0.15" />
      <circle cx="77" cy="9" r="0.3" fill="#6BC8E8" opacity="0.12" />
      <circle cx="83" cy="10" r="0.2" fill="#89D8F0" opacity="0.1" />
      {/* Smile watermark */}
      <path d="M72 48 Q78 52 84 48" fill="none" stroke="#4AABCC" strokeWidth="0.06" opacity="0.08" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="75" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Company */}
      <text x="10" y="10" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.8" fill="#1A3040" filter="url(#medical-dental-b-shadow)">{data.companyJa}</text>
      <text x="10" y="14.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#4AABCC">{data.companyEn}</text>
      <text x="10" y="18.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#7ABBE0">{data.titleJa}</text>
      <line x1="10" y1="21" x2="81" y2="21" stroke="#4AABCC" strokeWidth="0.06" opacity="0.15" />
      {/* Contact */}
      <text x="10" y="26" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#335566">{data.tel}</text>
      <text x="10" y="30" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#335566">{data.email}</text>
      <text x="10" y="34" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#335566">{data.website}</text>
      <line x1="10" y1="37" x2="81" y2="37" stroke="#6BC8E8" strokeWidth="0.04" opacity="0.1" />
      {/* Address */}
      <text x="10" y="41.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#7ABBE0">{'\u3012'}{data.zipCode}</text>
      <text x="10" y="45.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#7ABBE0">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 7. OPTIC (眼) — Ophthalmology / eye care
// Layered iris rings with radial detail, vision-focused
// ============================================================
const opticTemplate: TemplateDefinition = {
  id: 'medical-optic',
  name: 'OPTIC',
  nameJa: '眼',
  category: 'medical',
  designer: 'Vision Care',
  description: '眼科の視界。クリアな視野が開く世界。',
  accentColor: '#0077B6',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="medical-optic-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="medical-optic-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.1" dy="0.12" />
          <feFlood floodColor="#003366" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <clipPath id="medical-optic-clip">
          <rect width="91" height="55" />
        </clipPath>
        <radialGradient id="medical-optic-iris" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0077B6" stopOpacity="0.15" />
          <stop offset="40%" stopColor="#00A5E0" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#0077B6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="medical-optic-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F2F6FA" />
          <stop offset="100%" stopColor="#FAFCFE" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#medical-optic-bg)" filter="url(#medical-optic-texture)" />
      {/* Iris circle motif */}
      <g clipPath="url(#medical-optic-clip)">
        <circle cx="74" cy="18" r="16" fill="none" stroke="#0077B6" strokeWidth="0.08" opacity="0.1" />
        <circle cx="74" cy="18" r="12" fill="none" stroke="#0077B6" strokeWidth="0.1" opacity="0.15" />
        <circle cx="74" cy="18" r="8" fill="none" stroke="#00A5E0" strokeWidth="0.12" opacity="0.2" />
        <circle cx="74" cy="18" r="4" fill="url(#medical-optic-iris)" />
        <circle cx="74" cy="18" r="2" fill="#0077B6" opacity="0.08" />
        <circle cx="74" cy="18" r="0.8" fill="#0077B6" opacity="0.12" />
        {/* Iris radial lines */}
        {[...Array(24)].map((_, i) => (
          <line
            key={i}
            x1={74 + Math.cos((i * 15 * Math.PI) / 180) * 4.5}
            y1={18 + Math.sin((i * 15 * Math.PI) / 180) * 4.5}
            x2={74 + Math.cos((i * 15 * Math.PI) / 180) * 11.5}
            y2={18 + Math.sin((i * 15 * Math.PI) / 180) * 11.5}
            stroke="#0077B6"
            strokeWidth="0.03"
            opacity={0.08 + (i % 3) * 0.03}
          />
        ))}
        {/* Light reflection */}
        <circle cx="71.5" cy="15.5" r="0.8" fill="#FFFFFF" opacity="0.4" />
        <circle cx="72.5" cy="16.5" r="0.3" fill="#FFFFFF" opacity="0.3" />
      </g>
      {/* Crosshair */}
      <line x1="62" y1="18" x2="86" y2="18" stroke="#0077B6" strokeWidth="0.03" opacity="0.15" />
      <line x1="74" y1="6" x2="74" y2="30" stroke="#0077B6" strokeWidth="0.03" opacity="0.15" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="76" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Name */}
      <text x="10" y="18" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6" letterSpacing="0.5" fill="#1a2a3a" filter="url(#medical-optic-shadow)">{data.nameJa}</text>
      <text x="10" y="24.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2.2" letterSpacing="0.3" fill="#0077B6">{data.nameEn}</text>
      {/* Title */}
      <text x="10" y="33" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#5588AA">{data.titleJa}</text>
      {/* Company */}
      <text x="10" y="44" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2" fill="#1a2a3a">{data.companyJa}</text>
      <text x="10" y="48" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#6699BB">{data.companyEn}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="medical-optic-b-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="medical-optic-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.08" dy="0.1" />
          <feFlood floodColor="#003366" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <clipPath id="medical-optic-b-clip">
          <rect width="91" height="55" />
        </clipPath>
        <radialGradient id="medical-optic-b-iris" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0077B6" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#0077B6" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="#F5F8FA" filter="url(#medical-optic-b-texture)" />
      {/* Subtle iris watermark */}
      <g clipPath="url(#medical-optic-b-clip)">
        <circle cx="78" cy="44" r="10" fill="url(#medical-optic-b-iris)" />
        <circle cx="78" cy="44" r="8" fill="none" stroke="#0077B6" strokeWidth="0.04" opacity="0.06" />
        <circle cx="78" cy="44" r="5" fill="none" stroke="#00A5E0" strokeWidth="0.04" opacity="0.08" />
        <circle cx="78" cy="44" r="2" fill="none" stroke="#0077B6" strokeWidth="0.04" opacity="0.1" />
      </g>
      {/* Vision clarity indicator */}
      <text x="83" y="6" textAnchor="end" fontFamily="'Space Grotesk', monospace" fontWeight="300" fontSize="0.9" fill="#0077B6" opacity="0.2">20/20</text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="75" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Company */}
      <text x="10" y="10" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.8" fill="#1a2a3a" filter="url(#medical-optic-b-shadow)">{data.companyJa}</text>
      <text x="10" y="14.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#0077B6">{data.companyEn}</text>
      <text x="10" y="18.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#5588AA">{data.titleJa}</text>
      <line x1="10" y1="21" x2="81" y2="21" stroke="#0077B6" strokeWidth="0.06" opacity="0.15" />
      {/* Contact */}
      <text x="10" y="26" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#334455">{data.tel}</text>
      <text x="10" y="30" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#334455">{data.email}</text>
      <text x="10" y="34" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#334455">{data.website}</text>
      <line x1="10" y1="37" x2="81" y2="37" stroke="#00A5E0" strokeWidth="0.04" opacity="0.1" />
      {/* Address */}
      <text x="10" y="41.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#6688AA">{'\u3012'}{data.zipCode}</text>
      <text x="10" y="45" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#6688AA">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 8. CARDIO (心) — Cardiology / heart health
// Heart rhythm with warm red accent, anatomical heart suggestion
// ============================================================
const cardioTemplate: TemplateDefinition = {
  id: 'medical-cardio',
  name: 'CARDIO',
  nameJa: '心',
  category: 'medical',
  designer: 'Heart Center',
  description: '心臓の鼓動。命を支える情熱と信頼。',
  accentColor: '#C0392B',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="medical-cardio-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="medical-cardio-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.1" dy="0.12" />
          <feFlood floodColor="#600000" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="medical-cardio-rhythm" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C0392B" />
          <stop offset="50%" stopColor="#E74C3C" />
          <stop offset="100%" stopColor="#C0392B" />
        </linearGradient>
        <linearGradient id="medical-cardio-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#FFF8F7" />
        </linearGradient>
        <radialGradient id="medical-cardio-glow" cx="78%" cy="70%" r="25%">
          <stop offset="0%" stopColor="#C0392B" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#C0392B" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#medical-cardio-bg)" filter="url(#medical-cardio-texture)" />
      <rect width="91" height="55" fill="url(#medical-cardio-glow)" />
      {/* Heart rhythm line across top */}
      <path d="M0 8 L20 8 L23 5 L26 11 L29 2 L32 14 L35 6 L38 8 L91 8" fill="none" stroke="url(#medical-cardio-rhythm)" strokeWidth="0.2" opacity="0.35" />
      {/* Ghost trail */}
      <path d="M0 8 L20 8 L23 5 L26 11 L29 2 L32 14 L35 6 L38 8 L91 8" fill="none" stroke="#C0392B" strokeWidth="0.5" opacity="0.04" />
      {/* Stylized heart shape */}
      <path d="M78 38 C78 34 73 32 73 36 C73 40 78 44 78 44 C78 44 83 40 83 36 C83 32 78 34 78 38" fill="#C0392B" opacity="0.06" />
      <path d="M78 38 C78 34 73 32 73 36 C73 40 78 44 78 44 C78 44 83 40 83 36 C83 32 78 34 78 38" fill="none" stroke="#C0392B" strokeWidth="0.08" opacity="0.15" />
      {/* Pulse dot */}
      <circle cx="78" cy="38" r="0.5" fill="#E74C3C" opacity="0.15" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="5" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Name */}
      <text x="10" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="6" letterSpacing="0.5" fill="#1a1a2a" filter="url(#medical-cardio-shadow)">{data.nameJa}</text>
      <text x="10" y="28.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2.2" letterSpacing="0.3" fill="#C0392B">{data.nameEn}</text>
      <line x1="10" y1="32" x2="55" y2="32" stroke="#C0392B" strokeWidth="0.08" opacity="0.25" />
      {/* Title */}
      <text x="10" y="38" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#AA6666">{data.titleJa}</text>
      {/* Company */}
      <text x="10" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2" fill="#1a1a2a">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="medical-cardio-b-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="medical-cardio-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.08" dy="0.1" />
          <feFlood floodColor="#600000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="medical-cardio-b-rhythm" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C0392B" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#E74C3C" stopOpacity="0.08" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#FFFFFF" filter="url(#medical-cardio-b-texture)" />
      {/* Subtle rhythm at bottom */}
      <path d="M0 48 L30 48 L33 45 L36 51 L39 43 L42 53 L45 47 L48 48 L91 48" fill="none" stroke="url(#medical-cardio-b-rhythm)" strokeWidth="0.12" />
      {/* Heart watermark */}
      <path d="M80 44 C80 41.5 77 40.5 77 42.5 C77 44.5 80 47 80 47 C80 47 83 44.5 83 42.5 C83 40.5 80 41.5 80 44" fill="#C0392B" opacity="0.03" />
      {/* Pulse dots decoration */}
      <circle cx="84" cy="6" r="0.3" fill="#E74C3C" opacity="0.12" />
      <circle cx="86" cy="8" r="0.2" fill="#C0392B" opacity="0.1" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="75" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Company */}
      <text x="10" y="10" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.8" fill="#1a1a2a" filter="url(#medical-cardio-b-shadow)">{data.companyJa}</text>
      <text x="10" y="14.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#C0392B">{data.companyEn}</text>
      <text x="10" y="18.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#AA6666">{data.titleJa}</text>
      <line x1="10" y1="21" x2="81" y2="21" stroke="#C0392B" strokeWidth="0.06" opacity="0.2" />
      {/* Contact */}
      <text x="10" y="26" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#443333">{data.tel}</text>
      <text x="10" y="30" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#443333">{data.email}</text>
      <text x="10" y="34" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#443333">{data.website}</text>
      <line x1="10" y1="37" x2="81" y2="37" stroke="#E74C3C" strokeWidth="0.04" opacity="0.12" />
      {/* Address */}
      <text x="10" y="41.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#AA6666">{'\u3012'}{data.zipCode}</text>
      <text x="10" y="45" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#AA6666">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 9. THERAPY (療) — Physical therapy / rehabilitation
// Dynamic motion arcs, upward momentum, recovery energy
// ============================================================
const therapyTemplate: TemplateDefinition = {
  id: 'medical-therapy',
  name: 'THERAPY',
  nameJa: '療',
  category: 'medical',
  designer: 'Rehab Design',
  description: 'リハビリの希望。回復へ向かう前向きな力。',
  accentColor: '#2A9D8F',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="medical-therapy-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="medical-therapy-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.1" dy="0.12" />
          <feFlood floodColor="#1A4040" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="medical-therapy-bg" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F2FAF8" />
        </linearGradient>
        <linearGradient id="medical-therapy-arc" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2A9D8F" />
          <stop offset="100%" stopColor="#40BFA8" />
        </linearGradient>
        <radialGradient id="medical-therapy-glow" cx="80%" cy="60%" r="35%">
          <stop offset="0%" stopColor="#2A9D8F" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#2A9D8F" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#medical-therapy-bg)" filter="url(#medical-therapy-texture)" />
      <rect width="91" height="55" fill="url(#medical-therapy-glow)" />
      {/* Dynamic motion arcs — recovery movement */}
      <path d="M68 48 Q78 36 88 48" fill="none" stroke="url(#medical-therapy-arc)" strokeWidth="0.15" opacity="0.3" />
      <path d="M65 44 Q78 30 91 44" fill="none" stroke="#2A9D8F" strokeWidth="0.1" opacity="0.2" />
      <path d="M62 40 Q78 24 94 40" fill="none" stroke="#40BFA8" strokeWidth="0.06" opacity="0.12" />
      {/* Rising arrow — progress */}
      <line x1="82" y1="50" x2="82" y2="36" stroke="#2A9D8F" strokeWidth="0.1" opacity="0.2" />
      <path d="M79.5 38 L82 34 L84.5 38" fill="none" stroke="#2A9D8F" strokeWidth="0.1" opacity="0.25" />
      {/* Progress dots */}
      <circle cx="72" cy="46" r="0.3" fill="#40BFA8" opacity="0.15" />
      <circle cx="76" cy="42" r="0.25" fill="#2A9D8F" opacity="0.2" />
      <circle cx="80" cy="38" r="0.2" fill="#2A9D8F" opacity="0.25" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="76" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Name */}
      <text x="10" y="18" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6" letterSpacing="0.5" fill="#1A3A38" filter="url(#medical-therapy-shadow)">{data.nameJa}</text>
      <text x="10" y="24.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2.2" letterSpacing="0.3" fill="#2A9D8F">{data.nameEn}</text>
      <line x1="10" y1="28" x2="50" y2="28" stroke="#2A9D8F" strokeWidth="0.08" opacity="0.2" />
      {/* Title */}
      <text x="10" y="34" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#5A9A8E">{data.titleJa}</text>
      {/* Company */}
      <text x="10" y="44" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2" fill="#1A3A38">{data.companyJa}</text>
      <text x="10" y="48" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#6DC8B8">{data.companyEn}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="medical-therapy-b-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="medical-therapy-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.08" dy="0.1" />
          <feFlood floodColor="#1A4040" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="medical-therapy-b-glow" cx="80%" cy="80%" r="30%">
          <stop offset="0%" stopColor="#40BFA8" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#40BFA8" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="#FFFFFF" filter="url(#medical-therapy-b-texture)" />
      <rect width="91" height="55" fill="url(#medical-therapy-b-glow)" />
      {/* Subtle motion arcs */}
      <path d="M72 50 Q80 44 88 50" fill="none" stroke="#2A9D8F" strokeWidth="0.06" opacity="0.1" />
      <path d="M68 46 Q80 38 92 46" fill="none" stroke="#40BFA8" strokeWidth="0.04" opacity="0.06" />
      {/* Progress arrow watermark */}
      <line x1="84" y1="50" x2="84" y2="42" stroke="#2A9D8F" strokeWidth="0.04" opacity="0.08" />
      <path d="M82.5 43.5 L84 41 L85.5 43.5" fill="none" stroke="#2A9D8F" strokeWidth="0.04" opacity="0.1" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="75" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Company */}
      <text x="10" y="10" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.8" fill="#1A3A38" filter="url(#medical-therapy-b-shadow)">{data.companyJa}</text>
      <text x="10" y="14.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#2A9D8F">{data.companyEn}</text>
      <text x="10" y="18.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#5A9A8E">{data.titleJa}</text>
      <line x1="10" y1="21" x2="81" y2="21" stroke="#2A9D8F" strokeWidth="0.06" opacity="0.15" />
      {/* Contact */}
      <text x="10" y="26" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#3A5A55">{data.tel}</text>
      <text x="10" y="30" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#3A5A55">{data.email}</text>
      <text x="10" y="34" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#3A5A55">{data.website}</text>
      <line x1="10" y1="37" x2="81" y2="37" stroke="#40BFA8" strokeWidth="0.04" opacity="0.1" />
      {/* Address */}
      <text x="10" y="41.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#5A9A8E">{'\u3012'}{data.zipCode}</text>
      <text x="10" y="45" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#5A9A8E">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 10. WELLNESS (健) — Holistic wellness and health
// Balanced harmony circles, zen stones, dual-tone gradient
// ============================================================
const wellnessTemplate: TemplateDefinition = {
  id: 'medical-wellness',
  name: 'WELLNESS',
  nameJa: '健',
  category: 'medical',
  designer: 'Wellness Studio',
  description: '健やかな調和。心身のバランスが生む安寧。',
  accentColor: '#2A9D8F',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="medical-wellness-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="medical-wellness-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.1" dy="0.12" />
          <feFlood floodColor="#1A4040" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="medical-wellness-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F2FAF8" />
          <stop offset="50%" stopColor="#F8FCFB" />
          <stop offset="100%" stopColor="#EDF0F8" />
        </linearGradient>
        <radialGradient id="medical-wellness-harmony" cx="75%" cy="25%" r="30%">
          <stop offset="0%" stopColor="#2A9D8F" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#0077B6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="medical-wellness-ring" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2A9D8F" />
          <stop offset="100%" stopColor="#0077B6" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#medical-wellness-grad)" filter="url(#medical-wellness-texture)" />
      <rect width="91" height="55" fill="url(#medical-wellness-harmony)" />
      {/* Harmony circles — balance motif */}
      <circle cx="74" cy="14" r="9" fill="none" stroke="url(#medical-wellness-ring)" strokeWidth="0.08" opacity="0.12" />
      <circle cx="74" cy="14" r="6" fill="none" stroke="#0077B6" strokeWidth="0.06" opacity="0.1" />
      <circle cx="74" cy="14" r="3" fill="none" stroke="#2A9D8F" strokeWidth="0.08" opacity="0.15" />
      <circle cx="74" cy="14" r="0.6" fill="#2A9D8F" opacity="0.1" />
      {/* Zen stone stack */}
      <ellipse cx="76" cy="42" rx="5" ry="1.8" fill="none" stroke="#2A9D8F" strokeWidth="0.06" opacity="0.12" />
      <ellipse cx="76" cy="39.5" rx="3.5" ry="1.3" fill="none" stroke="#40BFA8" strokeWidth="0.06" opacity="0.1" />
      <ellipse cx="76" cy="37.5" rx="2.2" ry="0.9" fill="none" stroke="#2A9D8F" strokeWidth="0.06" opacity="0.08" />
      <ellipse cx="76" cy="36" rx="1.2" ry="0.5" fill="#2A9D8F" opacity="0.06" />
      {/* Balance dots */}
      <circle cx="84" cy="10" r="0.2" fill="#40BFA8" opacity="0.15" />
      <circle cx="65" cy="12" r="0.15" fill="#0077B6" opacity="0.12" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="5" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Name */}
      <text x="10" y="19" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="6" letterSpacing="0.8" fill="#1A3A38" filter="url(#medical-wellness-shadow)">{data.nameJa}</text>
      <text x="10" y="25.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2.2" letterSpacing="0.4" fill="#2A9D8F">{data.nameEn}</text>
      {/* Title */}
      <text x="10" y="34" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.8" fill="#5A9A8E">{data.titleJa}</text>
      {/* Company */}
      <text x="10" y="48" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="2" fill="#1A3A38">{data.companyJa}</text>
      <text x="10" y="52" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.4" fill="#6DC8B8">{data.companyEn}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="medical-wellness-b-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="medical-wellness-b-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" />
          <feOffset dx="0.08" dy="0.1" />
          <feFlood floodColor="#1A4040" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="medical-wellness-b-grad" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#EDF0F8" />
          <stop offset="50%" stopColor="#F8FCFB" />
          <stop offset="100%" stopColor="#F2FAF8" />
        </linearGradient>
        <radialGradient id="medical-wellness-b-glow" cx="80%" cy="80%" r="30%">
          <stop offset="0%" stopColor="#2A9D8F" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#2A9D8F" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#medical-wellness-b-grad)" filter="url(#medical-wellness-b-texture)" />
      <rect width="91" height="55" fill="url(#medical-wellness-b-glow)" />
      {/* Subtle harmony circles watermark */}
      <circle cx="78" cy="44" r="7" fill="none" stroke="#2A9D8F" strokeWidth="0.04" opacity="0.06" />
      <circle cx="78" cy="44" r="4" fill="none" stroke="#0077B6" strokeWidth="0.04" opacity="0.05" />
      <circle cx="78" cy="44" r="1.5" fill="none" stroke="#2A9D8F" strokeWidth="0.04" opacity="0.07" />
      {/* Balance accent */}
      <circle cx="85" cy="48" r="0.15" fill="#40BFA8" opacity="0.1" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="75" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Company */}
      <text x="10" y="10" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.8" fill="#1A3A38" filter="url(#medical-wellness-b-shadow)">{data.companyJa}</text>
      <text x="10" y="14.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.3" fill="#2A9D8F">{data.companyEn}</text>
      <text x="10" y="18.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#5A9A8E">{data.titleJa}</text>
      <line x1="10" y1="21" x2="81" y2="21" stroke="#2A9D8F" strokeWidth="0.06" opacity="0.12" />
      {/* Contact */}
      <text x="10" y="26" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#3A5A55">{data.tel}</text>
      <text x="10" y="30" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#3A5A55">{data.email}</text>
      <text x="10" y="34" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#3A5A55">{data.website}</text>
      <line x1="10" y1="37" x2="81" y2="37" stroke="#40BFA8" strokeWidth="0.04" opacity="0.08" />
      {/* Address */}
      <text x="10" y="41.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#5A9A8E">{'\u3012'}{data.zipCode}</text>
      <text x="10" y="45" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#5A9A8E">{data.addressJa}</text>
    </g>
  ),
};

export const medicalTemplates: TemplateDefinition[] = [
  clinicTemplate,
  pulseTemplate,
  careTemplate,
  pharmaTemplate,
  labTemplate,
  dentalTemplate,
  opticTemplate,
  cardioTemplate,
  therapyTemplate,
  wellnessTemplate,
];
