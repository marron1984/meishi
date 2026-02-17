import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. SUPREME (至) — Supreme luxury, ultimate authority
// Deep black with gold foil effect, commanding presence
// ============================================================
const supremeTemplate: TemplateDefinition = {
  id: 'premium-supreme',
  name: 'SUPREME',
  nameJa: '至',
  category: 'premium',
  designer: 'House of Supreme',
  description: '至高の存在感。漆黒に浮かぶ金箔の威厳。',
  accentColor: '#D4AF37',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0A0A0A" />
      {/* Gold foil border */}
      <rect x="4" y="3.5" width="83" height="48" fill="none" stroke="#D4AF37" strokeWidth="0.2" />
      <rect x="5" y="4.5" width="81" height="46" fill="none" stroke="#B8860B" strokeWidth="0.08" />
      {/* Gold corner accents */}
      <line x1="4" y1="8" x2="8" y2="3.5" stroke="#D4AF37" strokeWidth="0.15" />
      <line x1="87" y1="8" x2="83" y2="3.5" stroke="#D4AF37" strokeWidth="0.15" />
      <line x1="4" y1="47" x2="8" y2="51.5" stroke="#D4AF37" strokeWidth="0.15" />
      <line x1="87" y1="47" x2="83" y2="51.5" stroke="#D4AF37" strokeWidth="0.15" />
      {/* Name in gold */}
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="2"
        fill="#D4AF37"
      >
        {data.nameJa}
      </text>
      {/* Gold separator */}
      <line x1="25" y1="26" x2="66" y2="26" stroke="#D4AF37" strokeWidth="0.15" />
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2.2"
        letterSpacing="1"
        fill="#B8860B"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Title */}
      <text
        x="45.5"
        y="37"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.7"
        fill="#8A7340"
      >
        {data.titleJa}
      </text>
      {/* Company */}
      <text
        x="45.5"
        y="45"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#6A5A30"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0A0A0A" />
      {/* Gold foil border */}
      <rect x="4" y="3.5" width="83" height="48" fill="none" stroke="#D4AF37" strokeWidth="0.2" />
      <rect x="5" y="4.5" width="81" height="46" fill="none" stroke="#B8860B" strokeWidth="0.08" />
      {/* Company */}
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        letterSpacing="0.8"
        fill="#D4AF37"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="18.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        letterSpacing="0.6"
        fill="#8A7340"
      >
        {data.companyEn}
      </text>
      <line x1="25" y1="21.5" x2="66" y2="21.5" stroke="#D4AF37" strokeWidth="0.1" />
      {/* Contact in gold tones */}
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#B8860B"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#B8860B"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#B8860B"
      >
        {data.website}
      </text>
      <line x1="25" y1="38" x2="66" y2="38" stroke="#D4AF37" strokeWidth="0.08" />
      {/* Address */}
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#6A5A30"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="46.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#6A5A30"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 2. APEX (頂) — Peak of luxury, mountain-top authority
// Dark navy base, gold triangular peak motif
// ============================================================
const apexTemplate: TemplateDefinition = {
  id: 'premium-apex',
  name: 'APEX',
  nameJa: '頂',
  category: 'premium',
  designer: 'Apex Atelier',
  description: '頂点を極めた者だけが手にする一枚。峰のような威光。',
  accentColor: '#B8860B',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0D1B2A" />
      {/* Apex triangle / mountain peak */}
      <defs>
        <linearGradient id="premium-apex-gold" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points="45.5,3 60,20 31,20" fill="url(#premium-apex-gold)" />
      <line x1="45.5" y1="3" x2="60" y2="20" stroke="#D4AF37" strokeWidth="0.15" />
      <line x1="45.5" y1="3" x2="31" y2="20" stroke="#D4AF37" strokeWidth="0.15" />
      <line x1="31" y1="20" x2="60" y2="20" stroke="#D4AF37" strokeWidth="0.1" />
      {/* Peak diamond */}
      <path d="M44.5 5 L45.5 3 L46.5 5 L45.5 6 Z" fill="#D4AF37" opacity="0.7" />
      {/* Name */}
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="1.5"
        fill="#F5F0E0"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="35.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.8"
        fill="#D4AF37"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Title */}
      <text
        x="45.5"
        y="41"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#7A8A9A"
      >
        {data.titleJa}
      </text>
      {/* Company at base */}
      <text
        x="45.5"
        y="49"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#4A5A6A"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0D1B2A" />
      {/* Small apex triangle */}
      <polygon points="45.5,5 51,12 40,12" fill="none" stroke="#D4AF37" strokeWidth="0.1" />
      {/* Company */}
      <text
        x="45.5"
        y="20"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        letterSpacing="0.6"
        fill="#F5F0E0"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        letterSpacing="0.4"
        fill="#B8860B"
      >
        {data.companyEn}
      </text>
      <line x1="30" y1="27" x2="61" y2="27" stroke="#D4AF37" strokeWidth="0.08" />
      {/* Contact */}
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8A9AAA"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8A9AAA"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="40"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8A9AAA"
      >
        {data.website}
      </text>
      {/* Address */}
      <text
        x="45.5"
        y="48"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#4A5A6A"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 3. ELITE (選) — Elite selection, exclusive membership
// Ivory with gold emboss-like text, thick stock feel
// ============================================================
const eliteTemplate: TemplateDefinition = {
  id: 'premium-elite',
  name: 'ELITE',
  nameJa: '選',
  category: 'premium',
  designer: 'Elite Circle',
  description: '選ばれし者の証。象牙色に浮かぶ金のエンボス。',
  accentColor: '#D4AF37',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E8" />
      {/* Emboss-like shadow effect for name */}
      <defs>
        <filter id="premium-elite-emboss">
          <feOffset dx="0.1" dy="0.1" />
          <feGaussianBlur stdDeviation="0.2" />
          <feComposite operator="out" in="SourceGraphic" />
        </filter>
      </defs>
      {/* Subtle thick card edge */}
      <rect x="0" y="0" width="91" height="55" fill="none" stroke="#E0D8C8" strokeWidth="0.5" />
      <rect x="0.5" y="0.5" width="90" height="54" fill="none" stroke="#D0C8B8" strokeWidth="0.15" />
      {/* Name - embossed gold */}
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="1.5"
        fill="#C8B060"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="22.2"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="1.5"
        fill="#D4AF37"
        opacity="0.3"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="500"
        fontSize="2"
        letterSpacing="0.8"
        fill="#B8860B"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Gold rule */}
      <line x1="28" y1="31.5" x2="63" y2="31.5" stroke="#D4AF37" strokeWidth="0.12" />
      {/* Title */}
      <text
        x="45.5"
        y="37"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.7"
        fill="#8A7A5A"
      >
        {data.titleJa}
      </text>
      {/* Company */}
      <text
        x="45.5"
        y="45"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#A09070"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E8" />
      {/* Thick card edge */}
      <rect x="0" y="0" width="91" height="55" fill="none" stroke="#E0D8C8" strokeWidth="0.5" />
      <rect x="0.5" y="0.5" width="90" height="54" fill="none" stroke="#D0C8B8" strokeWidth="0.15" />
      {/* Company - embossed style */}
      <text
        x="45.5"
        y="13"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        letterSpacing="0.8"
        fill="#C8B060"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="17.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        letterSpacing="0.5"
        fill="#A09070"
      >
        {data.companyEn}
      </text>
      <line x1="28" y1="20.5" x2="63" y2="20.5" stroke="#D4AF37" strokeWidth="0.1" />
      {/* Contact */}
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#7A6A4A"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#7A6A4A"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="34"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#7A6A4A"
      >
        {data.website}
      </text>
      <line x1="28" y1="37" x2="63" y2="37" stroke="#D4AF37" strokeWidth="0.06" />
      {/* Address */}
      <text
        x="45.5"
        y="42"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#A09070"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="45.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#A09070"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 4. REGAL (麗) — Regal beauty, royal splendor
// Deep burgundy with gold filigree patterns
// ============================================================
const regalTemplate: TemplateDefinition = {
  id: 'premium-regal',
  name: 'REGAL',
  nameJa: '麗',
  category: 'premium',
  designer: 'Royal Atelier',
  description: '麗しき王者の風格。深紅と金の優美な紋様。',
  accentColor: '#8B0000',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#2A0A0A" />
      {/* Gold filigree border pattern */}
      <rect x="4" y="3" width="83" height="49" fill="none" stroke="#D4AF37" strokeWidth="0.25" />
      {/* Filigree corner elements */}
      <path d="M6 5 Q10 5 10 9 Q10 5 14 5" fill="none" stroke="#D4AF37" strokeWidth="0.12" />
      <path d="M77 5 Q81 5 81 9 Q81 5 85 5" fill="none" stroke="#D4AF37" strokeWidth="0.12" />
      <path d="M6 50 Q10 50 10 46 Q10 50 14 50" fill="none" stroke="#D4AF37" strokeWidth="0.12" />
      <path d="M77 50 Q81 50 81 46 Q81 50 85 50" fill="none" stroke="#D4AF37" strokeWidth="0.12" />
      {/* Center filigree ornament */}
      <path d="M40 10 Q42 8 45.5 10 Q49 8 51 10" fill="none" stroke="#D4AF37" strokeWidth="0.1" />
      <circle cx="45.5" cy="10" r="0.4" fill="#D4AF37" />
      {/* Name */}
      <text
        x="45.5"
        y="23"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="1.5"
        fill="#F0D070"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="29"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.8"
        fill="#D4AF37"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Ornamental divider */}
      <line x1="25" y1="32.5" x2="40" y2="32.5" stroke="#D4AF37" strokeWidth="0.1" />
      <circle cx="45.5" cy="32.5" r="0.5" fill="#D4AF37" opacity="0.5" />
      <line x1="51" y1="32.5" x2="66" y2="32.5" stroke="#D4AF37" strokeWidth="0.1" />
      {/* Title */}
      <text
        x="45.5"
        y="38"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.7"
        fill="#C0A050"
      >
        {data.titleJa}
      </text>
      {/* Company */}
      <text
        x="45.5"
        y="46"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8A6A30"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#2A0A0A" />
      {/* Gold border */}
      <rect x="4" y="3" width="83" height="49" fill="none" stroke="#D4AF37" strokeWidth="0.25" />
      {/* Filigree corners */}
      <path d="M6 5 Q10 5 10 9 Q10 5 14 5" fill="none" stroke="#D4AF37" strokeWidth="0.12" />
      <path d="M77 5 Q81 5 81 9 Q81 5 85 5" fill="none" stroke="#D4AF37" strokeWidth="0.12" />
      <path d="M6 50 Q10 50 10 46 Q10 50 14 50" fill="none" stroke="#D4AF37" strokeWidth="0.12" />
      <path d="M77 50 Q81 50 81 46 Q81 50 85 50" fill="none" stroke="#D4AF37" strokeWidth="0.12" />
      {/* Company */}
      <text
        x="45.5"
        y="13"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        letterSpacing="0.8"
        fill="#F0D070"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="17.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        letterSpacing="0.5"
        fill="#B8860B"
      >
        {data.companyEn}
      </text>
      <line x1="25" y1="20.5" x2="66" y2="20.5" stroke="#D4AF37" strokeWidth="0.08" />
      {/* Contact */}
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#C0A050"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#C0A050"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="34"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#C0A050"
      >
        {data.website}
      </text>
      <line x1="25" y1="37.5" x2="66" y2="37.5" stroke="#D4AF37" strokeWidth="0.06" />
      {/* Address */}
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#8A6A30"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="46.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#8A6A30"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 5. OPULENT (豪) — Opulent grandeur, excessive luxury
// Black with heavy gold geometric patterns, rich textures
// ============================================================
const opulentTemplate: TemplateDefinition = {
  id: 'premium-opulent',
  name: 'OPULENT',
  nameJa: '豪',
  category: 'premium',
  designer: 'Grand Maison',
  description: '豪華絢爛。黒と金の幾何学模様が圧倒的な富を表現。',
  accentColor: '#D4AF37',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0A0A0A" />
      {/* Gold geometric pattern - top band */}
      <defs>
        <pattern id="premium-opulent-pattern" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
          <path d="M0 3 L3 0 L6 3 L3 6 Z" fill="none" stroke="#D4AF37" strokeWidth="0.08" opacity="0.3" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="91" height="12" fill="url(#premium-opulent-pattern)" />
      <rect x="0" y="43" width="91" height="12" fill="url(#premium-opulent-pattern)" />
      {/* Thick gold band */}
      <rect x="0" y="11.5" width="91" height="0.5" fill="#D4AF37" opacity="0.6" />
      <rect x="0" y="43" width="91" height="0.5" fill="#D4AF37" opacity="0.6" />
      {/* Name centered in clear zone */}
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="5.5"
        letterSpacing="1"
        fill="#D4AF37"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="500"
        fontSize="2"
        letterSpacing="0.6"
        fill="#B8860B"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Title */}
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#8A7A50"
      >
        {data.titleJa}
      </text>
      {/* Company in pattern zone */}
      <text
        x="45.5"
        y="49"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#D4AF37"
        opacity="0.6"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0A0A0A" />
      {/* Gold geometric bands */}
      <rect x="0" y="0" width="91" height="8" fill="url(#premium-opulent-pattern)" />
      <rect x="0" y="7.5" width="91" height="0.5" fill="#D4AF37" opacity="0.5" />
      <rect x="0" y="47" width="91" height="8" fill="url(#premium-opulent-pattern)" />
      <rect x="0" y="47" width="91" height="0.5" fill="#D4AF37" opacity="0.5" />
      {/* Company */}
      <text
        x="45.5"
        y="16"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        letterSpacing="0.6"
        fill="#D4AF37"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="20"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        letterSpacing="0.4"
        fill="#8A7A50"
      >
        {data.companyEn}
      </text>
      {/* Contact */}
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#B8860B"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#B8860B"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#B8860B"
      >
        {data.website}
      </text>
      {/* Address */}
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#6A5A30"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 6. SOVEREIGN (統) — Sovereign ruler, commanding authority
// Navy with gold crown motif, authoritative layout
// ============================================================
const sovereignTemplate: TemplateDefinition = {
  id: 'premium-sovereign',
  name: 'SOVEREIGN',
  nameJa: '統',
  category: 'premium',
  designer: 'Crown House',
  description: '統治者の風格。紺碧の中に輝く王冠の威信。',
  accentColor: '#D4AF37',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0A1628" />
      {/* Crown motif */}
      <path d="M39 6 L41.5 3 L43.5 6 L45.5 2 L47.5 6 L49.5 3 L52 6 L51 8 L40 8 Z" fill="none" stroke="#D4AF37" strokeWidth="0.15" />
      <rect x="40" y="8" width="11" height="1.5" fill="none" stroke="#D4AF37" strokeWidth="0.1" />
      {/* Three jewels in crown */}
      <circle cx="43.5" cy="5" r="0.3" fill="#D4AF37" />
      <circle cx="45.5" cy="3.5" r="0.4" fill="#D4AF37" />
      <circle cx="47.5" cy="5" r="0.3" fill="#D4AF37" />
      {/* Name */}
      <text
        x="45.5"
        y="20"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="1.5"
        fill="#F0E8D0"
      >
        {data.nameJa}
      </text>
      <line x1="22" y1="23.5" x2="69" y2="23.5" stroke="#D4AF37" strokeWidth="0.12" />
      <text
        x="45.5"
        y="29"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.8"
        fill="#D4AF37"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Title */}
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.7"
        fill="#8A9AB0"
      >
        {data.titleJa}
      </text>
      {/* Company */}
      <text
        x="45.5"
        y="46"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5A6A80"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0A1628" />
      {/* Small crown */}
      <path d="M43 6 L44 4 L45.5 6 L47 4 L48 6 L47.5 7 L43.5 7 Z" fill="#D4AF37" opacity="0.3" />
      {/* Company */}
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        letterSpacing="0.6"
        fill="#F0E8D0"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="18"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        letterSpacing="0.4"
        fill="#B8860B"
      >
        {data.companyEn}
      </text>
      <line x1="25" y1="21" x2="66" y2="21" stroke="#D4AF37" strokeWidth="0.08" />
      {/* Contact */}
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8A9AB0"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8A9AB0"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8A9AB0"
      >
        {data.website}
      </text>
      <line x1="25" y1="38" x2="66" y2="38" stroke="#D4AF37" strokeWidth="0.06" />
      {/* Address */}
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#5A6A80"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="46.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#5A6A80"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 7. NOBLE (貴) — Noble elegance, refined aristocracy
// Left-aligned regal layout, gold monogram accent
// ============================================================
const nobleTemplate: TemplateDefinition = {
  id: 'premium-noble',
  name: 'NOBLE',
  nameJa: '貴',
  category: 'premium',
  designer: 'Noble House',
  description: '貴族の優雅さ。左寄せのフォーマルな構成とモノグラム。',
  accentColor: '#B8860B',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0F0F0F" />
      {/* Left gold bar */}
      <rect x="0" y="0" width="2" height="55" fill="#D4AF37" opacity="0.6" />
      <rect x="2.5" y="0" width="0.3" height="55" fill="#D4AF37" opacity="0.3" />
      {/* Monogram circle in top right */}
      <circle cx="78" cy="12" r="6" fill="none" stroke="#D4AF37" strokeWidth="0.15" />
      <circle cx="78" cy="12" r="5" fill="none" stroke="#B8860B" strokeWidth="0.08" />
      <text
        x="78"
        y="14"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="600"
        fontSize="5"
        fill="#D4AF37"
        opacity="0.4"
      >
        N
      </text>
      {/* Name */}
      <text
        x="10"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="1"
        fill="#F0E8D0"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="28"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.5"
        fill="#D4AF37"
      >
        {data.nameEn}
      </text>
      {/* Gold rule */}
      <line x1="10" y1="31.5" x2="50" y2="31.5" stroke="#D4AF37" strokeWidth="0.12" />
      {/* Title */}
      <text
        x="10"
        y="37"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.7"
        fill="#8A8A70"
      >
        {data.titleJa}
      </text>
      {/* Company */}
      <text
        x="10"
        y="45"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5A5A40"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0F0F0F" />
      {/* Left gold bar */}
      <rect x="0" y="0" width="2" height="55" fill="#D4AF37" opacity="0.6" />
      <rect x="2.5" y="0" width="0.3" height="55" fill="#D4AF37" opacity="0.3" />
      {/* Company */}
      <text
        x="10"
        y="13"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        letterSpacing="0.5"
        fill="#F0E8D0"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="17"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        letterSpacing="0.3"
        fill="#B8860B"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="20" x2="55" y2="20" stroke="#D4AF37" strokeWidth="0.1" />
      {/* Contact */}
      <text
        x="10"
        y="26"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#A0A080"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="30"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#A0A080"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="34"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#A0A080"
      >
        {data.website}
      </text>
      <line x1="10" y1="38" x2="55" y2="38" stroke="#D4AF37" strokeWidth="0.06" />
      {/* Address */}
      <text
        x="10"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#5A5A40"
      >
        〒{data.zipCode}
      </text>
      <text
        x="10"
        y="46.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#5A5A40"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 8. PRESTIGE (威) — Prestige and authority
// Bold centered gold typography, dramatic weight
// ============================================================
const prestigeTemplate: TemplateDefinition = {
  id: 'premium-prestige',
  name: 'PRESTIGE',
  nameJa: '威',
  category: 'premium',
  designer: 'Prestige Guild',
  description: '威信を放つ重厚感。太く力強い金文字が圧倒する。',
  accentColor: '#D4AF37',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0A0A0A" />
      {/* Top gold accent band */}
      <rect x="0" y="0" width="91" height="2" fill="#D4AF37" opacity="0.5" />
      <rect x="0" y="2.5" width="91" height="0.3" fill="#D4AF37" opacity="0.2" />
      {/* Name - heavy weight, commanding */}
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="7"
        letterSpacing="1.5"
        fill="#D4AF37"
      >
        {data.nameJa}
      </text>
      {/* Shadow line for emboss effect */}
      <text
        x="45.7"
        y="22.2"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="7"
        letterSpacing="1.5"
        fill="#1A1A0A"
        opacity="0.5"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="7"
        letterSpacing="1.5"
        fill="#D4AF37"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="29"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="600"
        fontSize="2.5"
        letterSpacing="1"
        fill="#B8860B"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Title */}
      <text
        x="45.5"
        y="37"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        fill="#8A7A50"
      >
        {data.titleJa}
      </text>
      {/* Company */}
      <text
        x="45.5"
        y="46"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#5A4A20"
      >
        {data.companyJa}
      </text>
      {/* Bottom band */}
      <rect x="0" y="52.5" width="91" height="0.3" fill="#D4AF37" opacity="0.2" />
      <rect x="0" y="53" width="91" height="2" fill="#D4AF37" opacity="0.5" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0A0A0A" />
      {/* Top band */}
      <rect x="0" y="0" width="91" height="1.5" fill="#D4AF37" opacity="0.4" />
      {/* Company - bold */}
      <text
        x="45.5"
        y="13"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="2.8"
        letterSpacing="0.8"
        fill="#D4AF37"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="17.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.6"
        letterSpacing="0.5"
        fill="#8A7A50"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="20.5" x2="71" y2="20.5" stroke="#D4AF37" strokeWidth="0.1" />
      {/* Contact */}
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#B8860B"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#B8860B"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#B8860B"
      >
        {data.website}
      </text>
      <line x1="20" y1="38" x2="71" y2="38" stroke="#D4AF37" strokeWidth="0.06" />
      {/* Address */}
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#5A4A20"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="46.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#5A4A20"
      >
        {data.addressJa}
      </text>
      {/* Bottom band */}
      <rect x="0" y="53.5" width="91" height="1.5" fill="#D4AF37" opacity="0.4" />
    </g>
  ),
};

// ============================================================
// 9. PINNACLE (極) — The absolute pinnacle
// Minimal black with single gold accent, extreme refinement
// ============================================================
const pinnacleTemplate: TemplateDefinition = {
  id: 'premium-pinnacle',
  name: 'PINNACLE',
  nameJa: '極',
  category: 'premium',
  designer: 'Pinnacle Studio',
  description: '極みの一枚。一条の金が漆黒を貫く研ぎ澄まされた美。',
  accentColor: '#D4AF37',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0A0A0A" />
      {/* Single gold vertical line - the pinnacle */}
      <line x1="12" y1="5" x2="12" y2="50" stroke="#D4AF37" strokeWidth="0.3" />
      {/* Name right of the pinnacle line */}
      <text
        x="18"
        y="21"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="1"
        fill="#F0E8D0"
      >
        {data.nameJa}
      </text>
      <text
        x="18"
        y="27"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.5"
        fill="#D4AF37"
      >
        {data.nameEn}
      </text>
      {/* Title */}
      <text
        x="18"
        y="35"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#6A6A50"
      >
        {data.titleJa}
      </text>
      {/* Company */}
      <text
        x="18"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#4A4A30"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0A0A0A" />
      {/* Single gold vertical line */}
      <line x1="79" y1="5" x2="79" y2="50" stroke="#D4AF37" strokeWidth="0.3" />
      {/* Company */}
      <text
        x="73"
        y="13"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        letterSpacing="0.5"
        fill="#F0E8D0"
      >
        {data.companyJa}
      </text>
      <text
        x="73"
        y="17"
        textAnchor="end"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        letterSpacing="0.3"
        fill="#B8860B"
      >
        {data.companyEn}
      </text>
      {/* Contact */}
      <text
        x="73"
        y="25"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8A8A60"
      >
        {data.tel}
      </text>
      <text
        x="73"
        y="29"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8A8A60"
      >
        {data.email}
      </text>
      <text
        x="73"
        y="33"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8A8A60"
      >
        {data.website}
      </text>
      {/* Address */}
      <text
        x="73"
        y="42"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#4A4A30"
      >
        〒{data.zipCode}
      </text>
      <text
        x="73"
        y="45.5"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#4A4A30"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 10. IMPERIAL (帝) — Imperial dynasty, emperor's seal
// Heavy borders, seal motif, maximum gold presence
// ============================================================
const imperialTemplate: TemplateDefinition = {
  id: 'premium-imperial',
  name: 'IMPERIAL',
  nameJa: '帝',
  category: 'premium',
  designer: 'Imperial House',
  description: '帝王の印。重厚な枠と金の印章が最高位を物語る。',
  accentColor: '#D4AF37',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0A0A0A" />
      {/* Triple border - imperial weight */}
      <rect x="3" y="2.5" width="85" height="50" fill="none" stroke="#D4AF37" strokeWidth="0.35" />
      <rect x="4.5" y="4" width="82" height="47" fill="none" stroke="#B8860B" strokeWidth="0.15" />
      <rect x="6" y="5.5" width="79" height="44" fill="none" stroke="#D4AF37" strokeWidth="0.08" />
      {/* Imperial seal in top center */}
      <circle cx="45.5" cy="11" r="3.5" fill="none" stroke="#D4AF37" strokeWidth="0.2" />
      <circle cx="45.5" cy="11" r="2.8" fill="none" stroke="#B8860B" strokeWidth="0.1" />
      <text
        x="45.5"
        y="12.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="3"
        fill="#D4AF37"
      >
        帝
      </text>
      {/* Name */}
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="2"
        fill="#D4AF37"
      >
        {data.nameJa}
      </text>
      {/* Gold bars */}
      <line x1="18" y1="27" x2="73" y2="27" stroke="#D4AF37" strokeWidth="0.12" />
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="500"
        fontSize="2"
        letterSpacing="0.8"
        fill="#B8860B"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Title */}
      <text
        x="45.5"
        y="38"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#8A7A50"
      >
        {data.titleJa}
      </text>
      {/* Company */}
      <text
        x="45.5"
        y="45"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#6A5A30"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0A0A0A" />
      {/* Triple border */}
      <rect x="3" y="2.5" width="85" height="50" fill="none" stroke="#D4AF37" strokeWidth="0.35" />
      <rect x="4.5" y="4" width="82" height="47" fill="none" stroke="#B8860B" strokeWidth="0.15" />
      <rect x="6" y="5.5" width="79" height="44" fill="none" stroke="#D4AF37" strokeWidth="0.08" />
      {/* Company with seal */}
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        letterSpacing="1"
        fill="#D4AF37"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="18.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        letterSpacing="0.5"
        fill="#8A7A50"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="21.5" x2="71" y2="21.5" stroke="#D4AF37" strokeWidth="0.1" />
      {/* Contact */}
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#B8860B"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#B8860B"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#B8860B"
      >
        {data.website}
      </text>
      <line x1="20" y1="38" x2="71" y2="38" stroke="#D4AF37" strokeWidth="0.06" />
      {/* Address */}
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#6A5A30"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="46.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#6A5A30"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

export const premiumTemplates: TemplateDefinition[] = [
  supremeTemplate,
  apexTemplate,
  eliteTemplate,
  regalTemplate,
  opulentTemplate,
  sovereignTemplate,
  nobleTemplate,
  prestigeTemplate,
  pinnacleTemplate,
  imperialTemplate,
];
