import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. CLINIC (院) — Clean clinical white
// Professional medical clinic with pristine layout
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
      <rect width="91" height="55" fill="#ffffff" />
      {/* Blue accent bar at top */}
      <rect x="0" y="0" width="91" height="2" fill="#0077B6" />
      {/* Small cross mark */}
      <rect x="8" y="8" width="4" height="0.6" fill="#0077B6" rx="0.1" />
      <rect x="9.7" y="6.3" width="0.6" height="4" fill="#0077B6" rx="0.1" />
      {/* Name */}
      <text
        x="10"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#1a2a3a"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="28.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.3"
        fill="#0077B6"
      >
        {data.nameEn}
      </text>
      <line x1="10" y1="32.5" x2="55" y2="32.5" stroke="#0077B6" strokeWidth="0.06" />
      <text
        x="10"
        y="38"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#666666"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="46"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        fill="#1a2a3a"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      <rect x="0" y="0" width="91" height="2" fill="#0077B6" />
      {/* Company */}
      <text
        x="10"
        y="12"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        fill="#1a2a3a"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="16.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#0077B6"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="19.5" x2="81" y2="19.5" stroke="#0077B6" strokeWidth="0.06" />
      {/* Contact */}
      <text x="10" y="25" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#333333">
        {data.tel}
      </text>
      <text x="10" y="29" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#333333">
        {data.email}
      </text>
      <text x="10" y="33" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#333333">
        {data.website}
      </text>
      <line x1="10" y1="36" x2="81" y2="36" stroke="#0077B6" strokeWidth="0.06" />
      <text
        x="10"
        y="41"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#666666"
      >
        〒{data.zipCode}
      </text>
      <text
        x="10"
        y="45"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#666666"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 2. PULSE-M (脈搏) — Heartbeat/pulse line monitor
// ECG-inspired pulse line running across card
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
      <rect width="91" height="55" fill="#f0f5f8" />
      {/* ECG grid pattern - subtle */}
      <defs>
        <pattern id="medical-pulse-grid" width="5" height="5" patternUnits="userSpaceOnUse">
          <path d="M 5 0 L 0 0 0 5" fill="none" stroke="#d0dde6" strokeWidth="0.06" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#medical-pulse-grid)" />
      {/* ECG heartbeat line */}
      <path
        d="M 0 12 L 15 12 L 18 12 L 20 8 L 22 16 L 24 4 L 26 18 L 28 10 L 30 12 L 50 12 L 53 12 L 55 8 L 57 16 L 59 4 L 61 18 L 63 10 L 65 12 L 91 12"
        fill="none"
        stroke="#0077B6"
        strokeWidth="0.2"
      />
      {/* Heart rate display */}
      <text
        x="82"
        y="8"
        textAnchor="end"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.2"
        fill="#0077B6"
      >
        72 BPM
      </text>
      {/* Name */}
      <text
        x="10"
        y="28"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#1a2a3a"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="35"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.3"
        fill="#0077B6"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#666666"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="50"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#1a2a3a"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f0f5f8" />
      <defs>
        <pattern id="medical-pulse-grid-b" width="5" height="5" patternUnits="userSpaceOnUse">
          <path d="M 5 0 L 0 0 0 5" fill="none" stroke="#d0dde6" strokeWidth="0.04" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#medical-pulse-grid-b)" />
      {/* Subtle pulse line at bottom */}
      <path
        d="M 0 48 L 25 48 L 28 48 L 30 45 L 32 51 L 34 43 L 36 53 L 38 47 L 40 48 L 91 48"
        fill="none"
        stroke="#0077B6"
        strokeWidth="0.1"
        opacity="0.3"
      />
      {/* Company */}
      <text
        x="10"
        y="13"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        fill="#1a2a3a"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="17.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#0077B6"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="20.5" x2="81" y2="20.5" stroke="#0077B6" strokeWidth="0.06" />
      {/* Contact */}
      <text x="10" y="26" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#333333">
        {data.tel}
      </text>
      <text x="10" y="30" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#333333">
        {data.email}
      </text>
      <text x="10" y="34" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#333333">
        {data.website}
      </text>
      <line x1="10" y1="37" x2="81" y2="37" stroke="#0077B6" strokeWidth="0.06" />
      <text
        x="10"
        y="42"
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
// 3. CARE (看) — Caring hands, soft approach
// Gentle curves and soft blue-gray tones
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
      <rect width="91" height="55" fill="#f5faf8" />
      {/* Gentle arc - suggesting care */}
      <path d="M 0 40 Q 45.5 30 91 40" fill="none" stroke="#2A9D8F" strokeWidth="0.12" opacity="0.3" />
      <path d="M 0 43 Q 45.5 33 91 43" fill="none" stroke="#2A9D8F" strokeWidth="0.08" opacity="0.2" />
      <path d="M 0 46 Q 45.5 36 91 46" fill="none" stroke="#2A9D8F" strokeWidth="0.06" opacity="0.15" />
      {/* Small leaf/hand symbol */}
      <path
        d="M 80 8 Q 83 5 86 8 Q 83 11 80 8"
        fill="#2A9D8F"
        opacity="0.2"
      />
      {/* Name */}
      <text
        x="10"
        y="16"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#1a3a3a"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="22.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.3"
        fill="#2A9D8F"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="30"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#668888"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="37"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#1a3a3a"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f5faf8" />
      {/* Gentle arcs */}
      <path d="M 0 44 Q 45.5 37 91 44" fill="none" stroke="#2A9D8F" strokeWidth="0.06" opacity="0.15" />
      {/* Company */}
      <text
        x="10"
        y="13"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#1a3a3a"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="17.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#2A9D8F"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="20.5" x2="81" y2="20.5" stroke="#2A9D8F" strokeWidth="0.06" />
      {/* Contact */}
      <text x="10" y="26" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#333333">
        {data.tel}
      </text>
      <text x="10" y="30" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#333333">
        {data.email}
      </text>
      <text x="10" y="34" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#333333">
        {data.website}
      </text>
      <line x1="10" y1="37" x2="81" y2="37" stroke="#2A9D8F" strokeWidth="0.06" />
      <text
        x="10"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#668888"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 4. PHARMA (薬) — Pharmaceutical precision
// Clean grid structure with molecular precision
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
      <rect width="91" height="55" fill="#ffffff" />
      {/* Molecular structure suggestion - hexagons */}
      <polygon points="76,10 80,7 84,10 84,15 80,18 76,15" fill="none" stroke="#0077B6" strokeWidth="0.08" opacity="0.2" />
      <polygon points="84,10 88,7 92,10 92,15 88,18 84,15" fill="none" stroke="#0077B6" strokeWidth="0.08" opacity="0.15" />
      <polygon points="80,18 84,15 88,18 88,23 84,26 80,23" fill="none" stroke="#0077B6" strokeWidth="0.08" opacity="0.15" />
      {/* Bond lines */}
      <line x1="76" y1="15" x2="72" y2="18" stroke="#0077B6" strokeWidth="0.06" opacity="0.15" />
      <circle cx="72" cy="18" r="0.5" fill="#0077B6" opacity="0.15" />
      {/* Name */}
      <text
        x="10"
        y="18"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.3"
        fill="#1a2a3a"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="25"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.4"
        fill="#0077B6"
      >
        {data.nameEn}
      </text>
      <line x1="10" y1="29" x2="60" y2="29" stroke="#0077B6" strokeWidth="0.06" />
      <text
        x="10"
        y="35"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#666666"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#1a2a3a"
      >
        {data.companyJa}
      </text>
      {/* Rx symbol */}
      <text
        x="82"
        y="48"
        textAnchor="end"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#0077B6"
        opacity="0.3"
      >
        Rx
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Subtle molecular pattern */}
      <polygon points="76,42 80,39 84,42 84,47 80,50 76,47" fill="none" stroke="#0077B6" strokeWidth="0.06" opacity="0.1" />
      <polygon points="84,42 88,39 92,42 92,47 88,50 84,47" fill="none" stroke="#0077B6" strokeWidth="0.06" opacity="0.08" />
      {/* Company */}
      <text
        x="10"
        y="13"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        fill="#1a2a3a"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="17.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#0077B6"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="20.5" x2="81" y2="20.5" stroke="#0077B6" strokeWidth="0.06" />
      {/* Contact */}
      <text x="10" y="26" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#333333">
        {data.tel}
      </text>
      <text x="10" y="30" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#333333">
        {data.email}
      </text>
      <text x="10" y="34" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#333333">
        {data.website}
      </text>
      <line x1="10" y1="37" x2="81" y2="37" stroke="#0077B6" strokeWidth="0.06" />
      <text
        x="10"
        y="42"
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
// 5. LAB-M (検) — Laboratory testing aesthetic
// Scientific precision with graph paper feel
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
        <pattern id="medical-lab-graph" width="4" height="4" patternUnits="userSpaceOnUse">
          <path d="M 4 0 L 0 0 0 4" fill="none" stroke="#d0e8e4" strokeWidth="0.05" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="#f8fafa" />
      <rect width="91" height="55" fill="url(#medical-lab-graph)" />
      {/* Test tube / flask suggestion */}
      <rect x="78" y="8" width="4" height="15" rx="0.5" fill="none" stroke="#2A9D8F" strokeWidth="0.1" opacity="0.3" />
      <rect x="78" y="16" width="4" height="7" rx="0.5" fill="#2A9D8F" opacity="0.06" />
      <line x1="77" y1="8" x2="83" y2="8" stroke="#2A9D8F" strokeWidth="0.08" opacity="0.3" />
      {/* Measurement marks */}
      <line x1="77.5" y1="12" x2="78" y2="12" stroke="#2A9D8F" strokeWidth="0.06" opacity="0.3" />
      <line x1="77.5" y1="16" x2="78" y2="16" stroke="#2A9D8F" strokeWidth="0.06" opacity="0.3" />
      <line x1="77.5" y1="20" x2="78" y2="20" stroke="#2A9D8F" strokeWidth="0.06" opacity="0.3" />
      {/* Name */}
      <text
        x="10"
        y="18"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.3"
        fill="#1a3a3a"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="25"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.3"
        fill="#2A9D8F"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="34"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#668888"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#1a3a3a"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <pattern id="medical-lab-graph-b" width="4" height="4" patternUnits="userSpaceOnUse">
          <path d="M 4 0 L 0 0 0 4" fill="none" stroke="#d0e8e4" strokeWidth="0.04" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="#f8fafa" />
      <rect width="91" height="55" fill="url(#medical-lab-graph-b)" />
      {/* Company */}
      <text
        x="10"
        y="13"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        fill="#1a3a3a"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="17.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#2A9D8F"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="20.5" x2="81" y2="20.5" stroke="#2A9D8F" strokeWidth="0.06" />
      {/* Contact */}
      <text x="10" y="26" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#333333">
        {data.tel}
      </text>
      <text x="10" y="30" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#333333">
        {data.email}
      </text>
      <text x="10" y="34" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#333333">
        {data.website}
      </text>
      <line x1="10" y1="37" x2="81" y2="37" stroke="#2A9D8F" strokeWidth="0.06" />
      <text
        x="10"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#668888"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 6. DENTAL (歯) — Dental practice clean brightness
// Bright white with gentle blue, tooth-clean feel
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
      <rect width="91" height="55" fill="#ffffff" />
      {/* Clean sparkle dots */}
      <circle cx="75" cy="10" r="0.8" fill="#4AABCC" opacity="0.3" />
      <circle cx="78" cy="8" r="0.4" fill="#4AABCC" opacity="0.2" />
      <circle cx="72" cy="7" r="0.5" fill="#4AABCC" opacity="0.25" />
      <circle cx="80" cy="12" r="0.3" fill="#4AABCC" opacity="0.15" />
      {/* Gentle arc - smile */}
      <path d="M 65 46 Q 72 50 79 46" fill="none" stroke="#4AABCC" strokeWidth="0.08" opacity="0.3" />
      {/* Left border accent */}
      <rect x="0" y="0" width="2" height="55" fill="#4AABCC" opacity="0.08" />
      <rect x="0" y="0" width="0.5" height="55" fill="#4AABCC" opacity="0.3" />
      {/* Name */}
      <text
        x="10"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#1a3040"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="27"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.3"
        fill="#4AABCC"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="35"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        fill="#1a3040"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      <rect x="0" y="0" width="0.5" height="55" fill="#4AABCC" opacity="0.3" />
      {/* Sparkle */}
      <circle cx="80" cy="8" r="0.5" fill="#4AABCC" opacity="0.2" />
      <circle cx="77" cy="10" r="0.3" fill="#4AABCC" opacity="0.15" />
      {/* Company */}
      <text
        x="10"
        y="13"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#1a3040"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="17.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#4AABCC"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="20.5" x2="81" y2="20.5" stroke="#4AABCC" strokeWidth="0.06" />
      {/* Contact */}
      <text x="10" y="26" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#333333">
        {data.tel}
      </text>
      <text x="10" y="30" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#333333">
        {data.email}
      </text>
      <text x="10" y="34" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#333333">
        {data.website}
      </text>
      <line x1="10" y1="37" x2="81" y2="37" stroke="#4AABCC" strokeWidth="0.06" />
      <text
        x="10"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#888888"
      >
        〒{data.zipCode}
      </text>
      <text
        x="10"
        y="46"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#888888"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 7. OPTIC (眼) — Ophthalmology / eye care
// Circular iris motif with clean design
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
        <clipPath id="medical-optic-clip">
          <rect width="91" height="55" />
        </clipPath>
      </defs>
      <rect width="91" height="55" fill="#f5f8fa" />
      {/* Iris circle motif */}
      <g clipPath="url(#medical-optic-clip)">
        <circle cx="75" cy="20" r="14" fill="none" stroke="#0077B6" strokeWidth="0.1" opacity="0.15" />
        <circle cx="75" cy="20" r="10" fill="none" stroke="#0077B6" strokeWidth="0.12" opacity="0.2" />
        <circle cx="75" cy="20" r="6" fill="none" stroke="#0077B6" strokeWidth="0.15" opacity="0.25" />
        <circle cx="75" cy="20" r="3" fill="#0077B6" opacity="0.06" />
        <circle cx="75" cy="20" r="1.5" fill="#0077B6" opacity="0.1" />
        {/* Iris radial lines */}
        {[...Array(16)].map((_, i) => (
          <line
            key={i}
            x1={75 + Math.cos((i * 22.5 * Math.PI) / 180) * 3.5}
            y1={20 + Math.sin((i * 22.5 * Math.PI) / 180) * 3.5}
            x2={75 + Math.cos((i * 22.5 * Math.PI) / 180) * 9.5}
            y2={20 + Math.sin((i * 22.5 * Math.PI) / 180) * 9.5}
            stroke="#0077B6"
            strokeWidth="0.04"
            opacity="0.15"
          />
        ))}
      </g>
      {/* Name */}
      <text
        x="10"
        y="18"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#1a2a3a"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="25"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.3"
        fill="#0077B6"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="34"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#666666"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#1a2a3a"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <clipPath id="medical-optic-clip-b">
          <rect width="91" height="55" />
        </clipPath>
      </defs>
      <rect width="91" height="55" fill="#f5f8fa" />
      {/* Subtle iris */}
      <g clipPath="url(#medical-optic-clip-b)">
        <circle cx="80" cy="45" r="10" fill="none" stroke="#0077B6" strokeWidth="0.06" opacity="0.08" />
        <circle cx="80" cy="45" r="6" fill="none" stroke="#0077B6" strokeWidth="0.06" opacity="0.1" />
      </g>
      {/* Company */}
      <text
        x="10"
        y="13"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#1a2a3a"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="17.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#0077B6"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="20.5" x2="81" y2="20.5" stroke="#0077B6" strokeWidth="0.06" />
      {/* Contact */}
      <text x="10" y="26" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#333333">
        {data.tel}
      </text>
      <text x="10" y="30" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#333333">
        {data.email}
      </text>
      <text x="10" y="34" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#333333">
        {data.website}
      </text>
      <line x1="10" y1="37" x2="81" y2="37" stroke="#0077B6" strokeWidth="0.06" />
      <text
        x="10"
        y="42"
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
// 8. CARDIO (心) — Cardiology / heart health
// Heart-centered design with warm red accent
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
      <rect width="91" height="55" fill="#ffffff" />
      {/* Heart rhythm across top */}
      <path
        d="M 0 8 L 20 8 L 23 5 L 26 11 L 29 2 L 32 14 L 35 6 L 38 8 L 91 8"
        fill="none"
        stroke="#C0392B"
        strokeWidth="0.15"
        opacity="0.4"
      />
      {/* Subtle heart shape */}
      <path
        d="M 78 38 C 78 35 74 33 74 36 C 74 39 78 42 78 42 C 78 42 82 39 82 36 C 82 33 78 35 78 38"
        fill="#C0392B"
        opacity="0.08"
      />
      {/* Name */}
      <text
        x="10"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#1a1a2a"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="29"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.3"
        fill="#C0392B"
      >
        {data.nameEn}
      </text>
      <line x1="10" y1="33" x2="55" y2="33" stroke="#C0392B" strokeWidth="0.06" opacity="0.4" />
      <text
        x="10"
        y="39"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#666666"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="47"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#1a1a2a"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Subtle rhythm at bottom */}
      <path
        d="M 0 48 L 30 48 L 33 45 L 36 51 L 39 43 L 42 53 L 45 47 L 48 48 L 91 48"
        fill="none"
        stroke="#C0392B"
        strokeWidth="0.08"
        opacity="0.2"
      />
      {/* Company */}
      <text
        x="10"
        y="13"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        fill="#1a1a2a"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="17.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#C0392B"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="20.5" x2="81" y2="20.5" stroke="#C0392B" strokeWidth="0.06" opacity="0.4" />
      {/* Contact */}
      <text x="10" y="26" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#333333">
        {data.tel}
      </text>
      <text x="10" y="30" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#333333">
        {data.email}
      </text>
      <text x="10" y="34" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#333333">
        {data.website}
      </text>
      <line x1="10" y1="37" x2="81" y2="37" stroke="#C0392B" strokeWidth="0.06" opacity="0.4" />
      <text
        x="10"
        y="42"
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
// 9. THERAPY (療) — Physical therapy / rehabilitation
// Dynamic motion lines suggesting recovery movement
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
      <rect width="91" height="55" fill="#ffffff" />
      {/* Motion arc lines - suggesting movement/recovery */}
      <path d="M 70 45 Q 78 35 86 45" fill="none" stroke="#2A9D8F" strokeWidth="0.1" opacity="0.3" />
      <path d="M 68 42 Q 78 30 88 42" fill="none" stroke="#2A9D8F" strokeWidth="0.08" opacity="0.2" />
      <path d="M 66 39 Q 78 25 90 39" fill="none" stroke="#2A9D8F" strokeWidth="0.06" opacity="0.15" />
      {/* Rising lines suggesting upward progress */}
      <line x1="82" y1="50" x2="82" y2="38" stroke="#2A9D8F" strokeWidth="0.06" opacity="0.2" />
      <path d="M 80 39 L 82 36 L 84 39" fill="none" stroke="#2A9D8F" strokeWidth="0.06" opacity="0.2" />
      {/* Name */}
      <text
        x="10"
        y="18"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#1a3a3a"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="25"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.3"
        fill="#2A9D8F"
      >
        {data.nameEn}
      </text>
      <line x1="10" y1="29" x2="55" y2="29" stroke="#2A9D8F" strokeWidth="0.06" />
      <text
        x="10"
        y="35"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#668888"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#1a3a3a"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Subtle motion arcs */}
      <path d="M 72 48 Q 78 42 84 48" fill="none" stroke="#2A9D8F" strokeWidth="0.06" opacity="0.15" />
      <path d="M 70 45 Q 78 38 86 45" fill="none" stroke="#2A9D8F" strokeWidth="0.04" opacity="0.1" />
      {/* Company */}
      <text
        x="10"
        y="13"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#1a3a3a"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="17.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#2A9D8F"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="20.5" x2="81" y2="20.5" stroke="#2A9D8F" strokeWidth="0.06" />
      {/* Contact */}
      <text x="10" y="26" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#333333">
        {data.tel}
      </text>
      <text x="10" y="30" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#333333">
        {data.email}
      </text>
      <text x="10" y="34" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#333333">
        {data.website}
      </text>
      <line x1="10" y1="37" x2="81" y2="37" stroke="#2A9D8F" strokeWidth="0.06" />
      <text
        x="10"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#668888"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 10. WELLNESS (健) — Holistic wellness and health
// Balanced, harmonious design with circular balance motif
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
        <linearGradient id="medical-wellness-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f5faf8" />
          <stop offset="100%" stopColor="#f0f5fa" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#medical-wellness-grad)" />
      {/* Balance/harmony circles */}
      <circle cx="75" cy="15" r="8" fill="none" stroke="#2A9D8F" strokeWidth="0.08" opacity="0.15" />
      <circle cx="75" cy="15" r="5" fill="none" stroke="#0077B6" strokeWidth="0.06" opacity="0.12" />
      <circle cx="75" cy="15" r="2" fill="none" stroke="#2A9D8F" strokeWidth="0.06" opacity="0.2" />
      {/* Zen stone stack suggestion */}
      <ellipse cx="75" cy="40" rx="4" ry="1.5" fill="none" stroke="#2A9D8F" strokeWidth="0.06" opacity="0.15" />
      <ellipse cx="75" cy="38" rx="3" ry="1.2" fill="none" stroke="#2A9D8F" strokeWidth="0.06" opacity="0.12" />
      <ellipse cx="75" cy="36.5" rx="2" ry="0.8" fill="none" stroke="#2A9D8F" strokeWidth="0.06" opacity="0.1" />
      {/* Name */}
      <text
        x="10"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="5.5"
        letterSpacing="0.8"
        fill="#1a3a3a"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="27"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="2"
        letterSpacing="0.4"
        fill="#2A9D8F"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#668888"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="46"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#1a3a3a"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="medical-wellness-grad-b" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f5faf8" />
          <stop offset="100%" stopColor="#f0f5fa" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#medical-wellness-grad-b)" />
      {/* Subtle harmony circle */}
      <circle cx="78" cy="42" r="6" fill="none" stroke="#2A9D8F" strokeWidth="0.04" opacity="0.1" />
      <circle cx="78" cy="42" r="3" fill="none" stroke="#2A9D8F" strokeWidth="0.04" opacity="0.08" />
      {/* Company */}
      <text
        x="10"
        y="13"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#1a3a3a"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="17.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#2A9D8F"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="20.5" x2="81" y2="20.5" stroke="#2A9D8F" strokeWidth="0.06" />
      {/* Contact */}
      <text x="10" y="26" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#333333">
        {data.tel}
      </text>
      <text x="10" y="30" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#333333">
        {data.email}
      </text>
      <text x="10" y="34" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#333333">
        {data.website}
      </text>
      <line x1="10" y1="37" x2="81" y2="37" stroke="#2A9D8F" strokeWidth="0.06" />
      <text
        x="10"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#668888"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
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
