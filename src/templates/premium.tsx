import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. SUPREME (至) — Supreme luxury, ultimate authority
// Deep black with gold foil effect, hammered metal texture
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
      <defs>
        <filter id="premium-supreme-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" seed="1" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
        </filter>
        <filter id="premium-supreme-shadow">
          <feGaussianBlur stdDeviation="0.3" />
          <feOffset dx="0.15" dy="0.15" />
          <feComposite operator="over" in="SourceGraphic" />
        </filter>
        <filter id="premium-supreme-foil">
          <feTurbulence type="turbulence" baseFrequency="1.5" numOctaves="3" seed="7" result="foilNoise" />
          <feColorMatrix type="matrix" values="0.2 0 0 0 0.83  0 0.2 0 0 0.69  0 0 0.1 0 0.22  0 0 0 0.15 0" in="foilNoise" result="gold" />
          <feBlend in="SourceGraphic" in2="gold" mode="screen" />
        </filter>
        <linearGradient id="premium-supreme-goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F0D060" />
          <stop offset="25%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#F5E080" />
          <stop offset="75%" stopColor="#B8960B" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
        <linearGradient id="premium-supreme-darkGold" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8A7340" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="premium-supreme-glow" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="#080808" filter="url(#premium-supreme-texture)" />
      <rect width="91" height="55" fill="url(#premium-supreme-glow)" />
      {/* Outer gold foil border */}
      <rect x="3.5" y="3" width="84" height="49" fill="none" stroke="url(#premium-supreme-goldGrad)" strokeWidth="0.3" filter="url(#premium-supreme-foil)" />
      <rect x="5" y="4.5" width="81" height="46" fill="none" stroke="#B8860B" strokeWidth="0.08" opacity="0.6" />
      {/* Corner filigree ornaments */}
      <path d="M5.5 5.5 L9 5.5 Q7 5.5 7 8 L7 5.5 Q5.5 5.5 5.5 8" fill="none" stroke="#D4AF37" strokeWidth="0.12" opacity="0.7" />
      <path d="M85.5 5.5 L82 5.5 Q84 5.5 84 8 L84 5.5 Q85.5 5.5 85.5 8" fill="none" stroke="#D4AF37" strokeWidth="0.12" opacity="0.7" />
      <path d="M5.5 49.5 L9 49.5 Q7 49.5 7 47 L7 49.5 Q5.5 49.5 5.5 47" fill="none" stroke="#D4AF37" strokeWidth="0.12" opacity="0.7" />
      <path d="M85.5 49.5 L82 49.5 Q84 49.5 84 47 L84 49.5 Q85.5 49.5 85.5 47" fill="none" stroke="#D4AF37" strokeWidth="0.12" opacity="0.7" />
      {/* Subtle top decorative diamond chain */}
      <path d="M30 8 L32 6.5 L34 8 L32 9.5 Z" fill="none" stroke="#D4AF37" strokeWidth="0.06" opacity="0.3" />
      <line x1="34" y1="8" x2="38" y2="8" stroke="#D4AF37" strokeWidth="0.04" opacity="0.2" />
      <path d="M38 8 L40 6.5 L42 8 L40 9.5 Z" fill="none" stroke="#D4AF37" strokeWidth="0.06" opacity="0.3" />
      <line x1="42" y1="8" x2="49" y2="8" stroke="#D4AF37" strokeWidth="0.04" opacity="0.2" />
      <path d="M49 8 L51 6.5 L53 8 L51 9.5 Z" fill="none" stroke="#D4AF37" strokeWidth="0.06" opacity="0.3" />
      <line x1="53" y1="8" x2="57" y2="8" stroke="#D4AF37" strokeWidth="0.04" opacity="0.2" />
      <path d="M57 8 L59 6.5 L61 8 L59 9.5 Z" fill="none" stroke="#D4AF37" strokeWidth="0.06" opacity="0.3" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="41.5" y="10" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Name in gold with foil shimmer */}
      <text x="45.5" y="25" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6" letterSpacing="2" fill="url(#premium-supreme-goldGrad)" filter="url(#premium-supreme-foil)">{data.nameJa}</text>
      {/* Gold separator with center diamond */}
      <line x1="22" y1="28.5" x2="42" y2="28.5" stroke="#D4AF37" strokeWidth="0.12" opacity="0.6" />
      <path d="M43 28.5 L45.5 27 L48 28.5 L45.5 30 Z" fill="#D4AF37" opacity="0.4" />
      <line x1="49" y1="28.5" x2="69" y2="28.5" stroke="#D4AF37" strokeWidth="0.12" opacity="0.6" />
      <text x="45.5" y="34" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="2.2" letterSpacing="1.2" fill="#B8860B">{data.nameEn.toUpperCase()}</text>
      {/* Title */}
      <text x="45.5" y="39.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#8A7340">{data.titleJa}</text>
      {/* Company */}
      <text x="45.5" y="46" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#6A5A30">{data.companyJa}</text>
      {/* Bottom decorative line */}
      <line x1="30" y1="48.5" x2="61" y2="48.5" stroke="url(#premium-supreme-darkGold)" strokeWidth="0.06" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="premium-supreme-back-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" seed="2" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="#080808" filter="url(#premium-supreme-back-texture)" />
      {/* Outer gold foil border */}
      <rect x="3.5" y="3" width="84" height="49" fill="none" stroke="url(#premium-supreme-goldGrad)" strokeWidth="0.3" />
      <rect x="5" y="4.5" width="81" height="46" fill="none" stroke="#B8860B" strokeWidth="0.08" opacity="0.6" />
      {/* Corner ornaments */}
      <path d="M5.5 5.5 L9 5.5 Q7 5.5 7 8" fill="none" stroke="#D4AF37" strokeWidth="0.12" opacity="0.7" />
      <path d="M85.5 5.5 L82 5.5 Q84 5.5 84 8" fill="none" stroke="#D4AF37" strokeWidth="0.12" opacity="0.7" />
      <path d="M5.5 49.5 L9 49.5 Q7 49.5 7 47" fill="none" stroke="#D4AF37" strokeWidth="0.12" opacity="0.7" />
      <path d="M85.5 49.5 L82 49.5 Q84 49.5 84 47" fill="none" stroke="#D4AF37" strokeWidth="0.12" opacity="0.7" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="41.5" y="5.5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Company header */}
      <text x="45.5" y="11" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" letterSpacing="0.8" fill="url(#premium-supreme-goldGrad)">{data.companyJa}</text>
      <text x="45.5" y="15" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" letterSpacing="0.6" fill="#8A7340">{data.companyEn}</text>
      {/* Title */}
      <text x="45.5" y="19" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#7A6A40">{data.titleJa}</text>
      {/* Ornamental divider */}
      <line x1="22" y1="21.5" x2="42" y2="21.5" stroke="#D4AF37" strokeWidth="0.1" opacity="0.5" />
      <path d="M43 21.5 L45.5 20.5 L48 21.5 L45.5 22.5 Z" fill="#D4AF37" opacity="0.3" />
      <line x1="49" y1="21.5" x2="69" y2="21.5" stroke="#D4AF37" strokeWidth="0.1" opacity="0.5" />
      {/* Contact block */}
      <text x="45.5" y="27" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#B8860B">{data.tel}</text>
      <text x="45.5" y="31" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#B8860B">{data.email}</text>
      <text x="45.5" y="35" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#B8860B">{data.website}</text>
      {/* Lower divider */}
      <line x1="28" y1="38" x2="63" y2="38" stroke="#D4AF37" strokeWidth="0.06" opacity="0.4" />
      {/* Address */}
      <text x="45.5" y="42" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#6A5A30">〒{data.zipCode}</text>
      <text x="45.5" y="45.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#6A5A30">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 2. APEX (頂) — Peak of luxury, mountain-top authority
// Dark navy base, gold triangular peak motif with aurora gradient
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
      <defs>
        <filter id="premium-apex-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="5" seed="10" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
        </filter>
        <filter id="premium-apex-shadow">
          <feGaussianBlur stdDeviation="0.4" />
          <feOffset dx="0.1" dy="0.2" />
          <feComposite operator="over" in="SourceGraphic" />
        </filter>
        <linearGradient id="premium-apex-gold" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F5E080" stopOpacity="0.6" />
          <stop offset="40%" stopColor="#D4AF37" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="premium-apex-skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0A1628" />
          <stop offset="40%" stopColor="#0D1B2A" />
          <stop offset="100%" stopColor="#14243A" />
        </linearGradient>
        <linearGradient id="premium-apex-peakGold" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B8860B" />
          <stop offset="50%" stopColor="#F5E080" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <radialGradient id="premium-apex-starGlow" cx="50%" cy="5%" r="30%">
          <stop offset="0%" stopColor="#F5E080" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#0D1B2A" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#premium-apex-skyGrad)" filter="url(#premium-apex-texture)" />
      <rect width="91" height="55" fill="url(#premium-apex-starGlow)" />
      {/* Mountain range silhouette */}
      <path d="M0 38 L12 28 L20 33 L30 22 L40 30 L45.5 14 L51 30 L61 22 L71 33 L79 28 L91 38 L91 55 L0 55 Z" fill="#0A1220" opacity="0.4" />
      {/* Apex triangle / mountain peak - main */}
      <polygon points="45.5,4 62,22 29,22" fill="url(#premium-apex-gold)" />
      <line x1="45.5" y1="4" x2="62" y2="22" stroke="url(#premium-apex-peakGold)" strokeWidth="0.2" />
      <line x1="45.5" y1="4" x2="29" y2="22" stroke="url(#premium-apex-peakGold)" strokeWidth="0.2" />
      <line x1="29" y1="22" x2="62" y2="22" stroke="#D4AF37" strokeWidth="0.1" opacity="0.5" />
      {/* Peak diamond jewel */}
      <path d="M44 6.5 L45.5 4 L47 6.5 L45.5 7.5 Z" fill="#F5E080" opacity="0.8" />
      {/* Small star accents */}
      <circle cx="18" cy="8" r="0.2" fill="#F5E080" opacity="0.5" />
      <circle cx="74" cy="12" r="0.15" fill="#D4AF37" opacity="0.4" />
      <circle cx="82" cy="6" r="0.18" fill="#F5E080" opacity="0.35" />
      <circle cx="10" cy="15" r="0.12" fill="#D4AF37" opacity="0.3" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="41.5" y="10" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Name */}
      <text x="45.5" y="31" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="5.5" letterSpacing="1.5" fill="#F5F0E0">{data.nameJa}</text>
      <text x="45.5" y="36.5" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="2" letterSpacing="0.8" fill="url(#premium-apex-peakGold)">{data.nameEn.toUpperCase()}</text>
      {/* Title */}
      <text x="45.5" y="42" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#7A8A9A">{data.titleJa}</text>
      {/* Company at base */}
      <text x="45.5" y="49" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#4A5A6A">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="premium-apex-back-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="5" seed="11" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#premium-apex-skyGrad)" filter="url(#premium-apex-back-texture)" />
      {/* Small apex triangle */}
      <polygon points="45.5,4 53,13 38,13" fill="none" stroke="url(#premium-apex-peakGold)" strokeWidth="0.12" />
      <path d="M44.5 6 L45.5 4.5 L46.5 6 L45.5 6.8 Z" fill="#D4AF37" opacity="0.4" />
      {/* Mountain silhouette - subtle */}
      <path d="M0 48 L15 42 L30 46 L45 40 L60 46 L75 42 L91 48 L91 55 L0 55 Z" fill="#0A1220" opacity="0.3" />
      {/* Stars */}
      <circle cx="12" cy="8" r="0.15" fill="#F5E080" opacity="0.3" />
      <circle cx="80" cy="6" r="0.12" fill="#D4AF37" opacity="0.3" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="41.5" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Company */}
      <text x="45.5" y="11" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" letterSpacing="0.6" fill="#F5F0E0">{data.companyJa}</text>
      <text x="45.5" y="15" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" letterSpacing="0.4" fill="#B8860B">{data.companyEn}</text>
      {/* Title */}
      <text x="45.5" y="19.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#6A7A8A">{data.titleJa}</text>
      <line x1="28" y1="22" x2="63" y2="22" stroke="#D4AF37" strokeWidth="0.08" opacity="0.4" />
      {/* Contact */}
      <text x="45.5" y="27" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#8A9AAA">{data.tel}</text>
      <text x="45.5" y="31" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#8A9AAA">{data.email}</text>
      <text x="45.5" y="35" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#8A9AAA">{data.website}</text>
      <line x1="28" y1="38" x2="63" y2="38" stroke="#D4AF37" strokeWidth="0.06" opacity="0.3" />
      {/* Address */}
      <text x="45.5" y="42" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#4A5A6A">〒{data.zipCode}</text>
      <text x="45.5" y="45.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#4A5A6A">{data.addressJa}</text>
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
      <defs>
        <filter id="premium-elite-texture">
          <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="4" seed="20" result="noise" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.96  0 0 0 0 0.94  0 0 0 0 0.91  0 0 0 0.04 0" in="noise" result="paper" />
          <feBlend in="SourceGraphic" in2="paper" mode="multiply" />
        </filter>
        <filter id="premium-elite-emboss">
          <feGaussianBlur stdDeviation="0.15" in="SourceAlpha" result="blur" />
          <feOffset dx="0.12" dy="0.12" in="blur" result="offsetBlur" />
          <feComposite in="SourceGraphic" in2="offsetBlur" operator="over" />
        </filter>
        <filter id="premium-elite-shadow">
          <feGaussianBlur stdDeviation="0.2" />
          <feOffset dx="0.08" dy="0.08" />
          <feComposite operator="over" in="SourceGraphic" />
        </filter>
        <linearGradient id="premium-elite-goldEmb" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="30%" stopColor="#F0D860" />
          <stop offset="60%" stopColor="#C8A030" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
        <linearGradient id="premium-elite-ivory" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FAF5EC" />
          <stop offset="100%" stopColor="#F0EBE0" />
        </linearGradient>
        <pattern id="premium-elite-linen" x="0" y="0" width="2" height="2" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="2" y2="0" stroke="#E8E0D4" strokeWidth="0.03" />
          <line x1="0" y1="1" x2="2" y2="1" stroke="#E8E0D4" strokeWidth="0.03" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#premium-elite-ivory)" filter="url(#premium-elite-texture)" />
      <rect width="91" height="55" fill="url(#premium-elite-linen)" opacity="0.3" />
      {/* Thick card edge effect */}
      <rect x="0" y="0" width="91" height="55" fill="none" stroke="#E0D8C8" strokeWidth="0.6" />
      <rect x="0.8" y="0.8" width="89.4" height="53.4" fill="none" stroke="#D0C8B8" strokeWidth="0.15" />
      {/* Decorative corner brackets */}
      <path d="M6 4 L6 7" stroke="url(#premium-elite-goldEmb)" strokeWidth="0.15" fill="none" />
      <path d="M6 4 L9 4" stroke="url(#premium-elite-goldEmb)" strokeWidth="0.15" fill="none" />
      <path d="M85 4 L85 7" stroke="url(#premium-elite-goldEmb)" strokeWidth="0.15" fill="none" />
      <path d="M82 4 L85 4" stroke="url(#premium-elite-goldEmb)" strokeWidth="0.15" fill="none" />
      <path d="M6 51 L6 48" stroke="url(#premium-elite-goldEmb)" strokeWidth="0.15" fill="none" />
      <path d="M6 51 L9 51" stroke="url(#premium-elite-goldEmb)" strokeWidth="0.15" fill="none" />
      <path d="M85 51 L85 48" stroke="url(#premium-elite-goldEmb)" strokeWidth="0.15" fill="none" />
      <path d="M82 51 L85 51" stroke="url(#premium-elite-goldEmb)" strokeWidth="0.15" fill="none" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="41.5" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Name - embossed gold effect: shadow layer + gold layer */}
      <text x="45.5" y="22.2" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="5.5" letterSpacing="1.5" fill="#D8D0C0" opacity="0.5">{data.nameJa}</text>
      <text x="45.5" y="22" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="5.5" letterSpacing="1.5" fill="url(#premium-elite-goldEmb)" filter="url(#premium-elite-emboss)">{data.nameJa}</text>
      <text x="45.5" y="28" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="500" fontSize="2" letterSpacing="0.8" fill="#B8860B">{data.nameEn.toUpperCase()}</text>
      {/* Gold rule with end dots */}
      <circle cx="26" cy="31.5" r="0.3" fill="#D4AF37" opacity="0.4" />
      <line x1="28" y1="31.5" x2="63" y2="31.5" stroke="url(#premium-elite-goldEmb)" strokeWidth="0.12" />
      <circle cx="65" cy="31.5" r="0.3" fill="#D4AF37" opacity="0.4" />
      {/* Title */}
      <text x="45.5" y="37" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#8A7A5A">{data.titleJa}</text>
      {/* Company */}
      <text x="45.5" y="45" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#A09070">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="premium-elite-back-texture">
          <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="4" seed="21" result="noise" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.96  0 0 0 0 0.94  0 0 0 0 0.91  0 0 0 0.04 0" in="noise" result="paper" />
          <feBlend in="SourceGraphic" in2="paper" mode="multiply" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#premium-elite-ivory)" filter="url(#premium-elite-back-texture)" />
      <rect width="91" height="55" fill="url(#premium-elite-linen)" opacity="0.3" />
      {/* Thick card edge */}
      <rect x="0" y="0" width="91" height="55" fill="none" stroke="#E0D8C8" strokeWidth="0.6" />
      <rect x="0.8" y="0.8" width="89.4" height="53.4" fill="none" stroke="#D0C8B8" strokeWidth="0.15" />
      {/* Corner brackets */}
      <path d="M6 4 L6 7 M6 4 L9 4" stroke="url(#premium-elite-goldEmb)" strokeWidth="0.12" fill="none" />
      <path d="M85 4 L85 7 M82 4 L85 4" stroke="url(#premium-elite-goldEmb)" strokeWidth="0.12" fill="none" />
      <path d="M6 51 L6 48 M6 51 L9 51" stroke="url(#premium-elite-goldEmb)" strokeWidth="0.12" fill="none" />
      <path d="M85 51 L85 48 M82 51 L85 51" stroke="url(#premium-elite-goldEmb)" strokeWidth="0.12" fill="none" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="41.5" y="4.5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Company - embossed style */}
      <text x="45.5" y="11" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" letterSpacing="0.8" fill="url(#premium-elite-goldEmb)">{data.companyJa}</text>
      <text x="45.5" y="15" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" letterSpacing="0.5" fill="#A09070">{data.companyEn}</text>
      {/* Title */}
      <text x="45.5" y="19.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#8A7A5A">{data.titleJa}</text>
      <circle cx="26" cy="22" r="0.25" fill="#D4AF37" opacity="0.3" />
      <line x1="28" y1="22" x2="63" y2="22" stroke="#D4AF37" strokeWidth="0.1" />
      <circle cx="65" cy="22" r="0.25" fill="#D4AF37" opacity="0.3" />
      {/* Contact */}
      <text x="45.5" y="27" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#7A6A4A">{data.tel}</text>
      <text x="45.5" y="31" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#7A6A4A">{data.email}</text>
      <text x="45.5" y="35" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#7A6A4A">{data.website}</text>
      <line x1="28" y1="38" x2="63" y2="38" stroke="#D4AF37" strokeWidth="0.06" opacity="0.4" />
      {/* Address */}
      <text x="45.5" y="42.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#A09070">〒{data.zipCode}</text>
      <text x="45.5" y="46" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#A09070">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 4. REGAL (麗) — Regal beauty, royal splendor
// Deep burgundy with gold filigree patterns, velvet texture
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
      <defs>
        <filter id="premium-regal-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="5" seed="30" result="noise" />
          <feColorMatrix type="matrix" values="0.15 0 0 0 0.16  0 0.05 0 0 0.04  0 0 0.05 0 0.04  0 0 0 0.08 0" in="noise" result="velvet" />
          <feBlend in="SourceGraphic" in2="velvet" mode="screen" />
        </filter>
        <filter id="premium-regal-shadow">
          <feGaussianBlur stdDeviation="0.25" />
          <feOffset dx="0.1" dy="0.1" />
          <feComposite operator="over" in="SourceGraphic" />
        </filter>
        <linearGradient id="premium-regal-bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2A0A0A" />
          <stop offset="50%" stopColor="#350E0E" />
          <stop offset="100%" stopColor="#2A0A0A" />
        </linearGradient>
        <linearGradient id="premium-regal-goldFil" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B8860B" />
          <stop offset="30%" stopColor="#F0D060" />
          <stop offset="70%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <radialGradient id="premium-regal-vignette" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#3A1010" stopOpacity="0" />
          <stop offset="100%" stopColor="#1A0505" stopOpacity="0.5" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#premium-regal-bgGrad)" filter="url(#premium-regal-texture)" />
      <rect width="91" height="55" fill="url(#premium-regal-vignette)" />
      {/* Gold filigree border */}
      <rect x="4" y="3" width="83" height="49" fill="none" stroke="url(#premium-regal-goldFil)" strokeWidth="0.25" />
      {/* Elaborate filigree corner scrolls */}
      <path d="M6 5 Q6 9 10 9 Q6 9 6 13" fill="none" stroke="#D4AF37" strokeWidth="0.12" opacity="0.8" />
      <path d="M8 5 Q8 7 10 7" fill="none" stroke="#D4AF37" strokeWidth="0.08" opacity="0.5" />
      <path d="M85 5 Q85 9 81 9 Q85 9 85 13" fill="none" stroke="#D4AF37" strokeWidth="0.12" opacity="0.8" />
      <path d="M83 5 Q83 7 81 7" fill="none" stroke="#D4AF37" strokeWidth="0.08" opacity="0.5" />
      <path d="M6 50 Q6 46 10 46 Q6 46 6 42" fill="none" stroke="#D4AF37" strokeWidth="0.12" opacity="0.8" />
      <path d="M8 50 Q8 48 10 48" fill="none" stroke="#D4AF37" strokeWidth="0.08" opacity="0.5" />
      <path d="M85 50 Q85 46 81 46 Q85 46 85 42" fill="none" stroke="#D4AF37" strokeWidth="0.12" opacity="0.8" />
      <path d="M83 50 Q83 48 81 48" fill="none" stroke="#D4AF37" strokeWidth="0.08" opacity="0.5" />
      {/* Center filigree crown ornament */}
      <path d="M38 9 Q40 7 42 9 Q43 7.5 45.5 9 Q48 7.5 49 9 Q51 7 53 9" fill="none" stroke="#D4AF37" strokeWidth="0.1" opacity="0.6" />
      <circle cx="45.5" cy="9" r="0.5" fill="#D4AF37" opacity="0.5" />
      <circle cx="42" cy="9" r="0.25" fill="#D4AF37" opacity="0.4" />
      <circle cx="49" cy="9" r="0.25" fill="#D4AF37" opacity="0.4" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="41.5" y="10" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Name */}
      <text x="45.5" y="24" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="5.5" letterSpacing="1.5" fill="#F0D070">{data.nameJa}</text>
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="2" letterSpacing="0.8" fill="#D4AF37">{data.nameEn.toUpperCase()}</text>
      {/* Ornamental divider with center diamond and scrolls */}
      <path d="M22 33 Q25 32 28 33" fill="none" stroke="#D4AF37" strokeWidth="0.08" opacity="0.5" />
      <line x1="28" y1="33" x2="42" y2="33" stroke="#D4AF37" strokeWidth="0.1" opacity="0.6" />
      <path d="M43 33 L45.5 31.5 L48 33 L45.5 34.5 Z" fill="#D4AF37" opacity="0.4" />
      <line x1="49" y1="33" x2="63" y2="33" stroke="#D4AF37" strokeWidth="0.1" opacity="0.6" />
      <path d="M63 33 Q66 32 69 33" fill="none" stroke="#D4AF37" strokeWidth="0.08" opacity="0.5" />
      {/* Title */}
      <text x="45.5" y="39" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#C0A050">{data.titleJa}</text>
      {/* Company */}
      <text x="45.5" y="46" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#8A6A30">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="premium-regal-back-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="5" seed="31" result="noise" />
          <feColorMatrix type="matrix" values="0.15 0 0 0 0.16  0 0.05 0 0 0.04  0 0 0.05 0 0.04  0 0 0 0.08 0" in="noise" result="velvet" />
          <feBlend in="SourceGraphic" in2="velvet" mode="screen" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#premium-regal-bgGrad)" filter="url(#premium-regal-back-texture)" />
      <rect width="91" height="55" fill="url(#premium-regal-vignette)" />
      {/* Gold border */}
      <rect x="4" y="3" width="83" height="49" fill="none" stroke="url(#premium-regal-goldFil)" strokeWidth="0.25" />
      {/* Filigree corners */}
      <path d="M6 5 Q6 9 10 9 Q6 9 6 13" fill="none" stroke="#D4AF37" strokeWidth="0.12" opacity="0.8" />
      <path d="M85 5 Q85 9 81 9 Q85 9 85 13" fill="none" stroke="#D4AF37" strokeWidth="0.12" opacity="0.8" />
      <path d="M6 50 Q6 46 10 46 Q6 46 6 42" fill="none" stroke="#D4AF37" strokeWidth="0.12" opacity="0.8" />
      <path d="M85 50 Q85 46 81 46 Q85 46 85 42" fill="none" stroke="#D4AF37" strokeWidth="0.12" opacity="0.8" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="41.5" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Company */}
      <text x="45.5" y="11" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" letterSpacing="0.8" fill="#F0D070">{data.companyJa}</text>
      <text x="45.5" y="15" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" letterSpacing="0.5" fill="#B8860B">{data.companyEn}</text>
      {/* Title */}
      <text x="45.5" y="19.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#C0A050">{data.titleJa}</text>
      <line x1="25" y1="22" x2="66" y2="22" stroke="#D4AF37" strokeWidth="0.08" opacity="0.5" />
      {/* Contact */}
      <text x="45.5" y="27" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#C0A050">{data.tel}</text>
      <text x="45.5" y="31" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#C0A050">{data.email}</text>
      <text x="45.5" y="35" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#C0A050">{data.website}</text>
      <line x1="25" y1="38" x2="66" y2="38" stroke="#D4AF37" strokeWidth="0.06" opacity="0.4" />
      {/* Address */}
      <text x="45.5" y="42.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#8A6A30">〒{data.zipCode}</text>
      <text x="45.5" y="46" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#8A6A30">{data.addressJa}</text>
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
      <defs>
        <filter id="premium-opulent-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" seed="40" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
        </filter>
        <filter id="premium-opulent-shadow">
          <feGaussianBlur stdDeviation="0.2" />
          <feOffset dx="0.08" dy="0.08" />
          <feComposite operator="over" in="SourceGraphic" />
        </filter>
        <pattern id="premium-opulent-pattern" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse">
          <path d="M0 2.5 L2.5 0 L5 2.5 L2.5 5 Z" fill="none" stroke="#D4AF37" strokeWidth="0.06" opacity="0.25" />
          <circle cx="2.5" cy="2.5" r="0.3" fill="#D4AF37" opacity="0.15" />
        </pattern>
        <linearGradient id="premium-opulent-goldBand" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B8860B" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#F5E080" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#B8860B" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="premium-opulent-goldText" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5E080" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#F0D060" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#0A0A0A" filter="url(#premium-opulent-texture)" />
      {/* Gold geometric pattern bands */}
      <rect x="0" y="0" width="91" height="12" fill="url(#premium-opulent-pattern)" />
      <rect x="0" y="43" width="91" height="12" fill="url(#premium-opulent-pattern)" />
      {/* Thick gold bands with gradient */}
      <rect x="0" y="11.5" width="91" height="0.6" fill="url(#premium-opulent-goldBand)" />
      <rect x="0" y="43" width="91" height="0.6" fill="url(#premium-opulent-goldBand)" />
      {/* Gold corner accents */}
      <path d="M3 2 L7 2 M3 2 L3 6" stroke="#D4AF37" strokeWidth="0.12" opacity="0.5" fill="none" />
      <path d="M88 2 L84 2 M88 2 L88 6" stroke="#D4AF37" strokeWidth="0.12" opacity="0.5" fill="none" />
      <path d="M3 53 L7 53 M3 53 L3 49" stroke="#D4AF37" strokeWidth="0.12" opacity="0.5" fill="none" />
      <path d="M88 53 L84 53 M88 53 L88 49" stroke="#D4AF37" strokeWidth="0.12" opacity="0.5" fill="none" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="41.5" y="13" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Name centered in clear zone */}
      <text x="45.5" y="25" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="5.5" letterSpacing="1" fill="url(#premium-opulent-goldText)">{data.nameJa}</text>
      <text x="45.5" y="31" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="500" fontSize="2" letterSpacing="0.6" fill="#B8860B">{data.nameEn.toUpperCase()}</text>
      {/* Title */}
      <text x="45.5" y="37" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#8A7A50">{data.titleJa}</text>
      {/* Company in pattern zone */}
      <text x="45.5" y="49" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#D4AF37" opacity="0.6">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="premium-opulent-back-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" seed="41" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="#0A0A0A" filter="url(#premium-opulent-back-texture)" />
      {/* Gold geometric bands */}
      <rect x="0" y="0" width="91" height="8" fill="url(#premium-opulent-pattern)" />
      <rect x="0" y="7.5" width="91" height="0.5" fill="url(#premium-opulent-goldBand)" />
      <rect x="0" y="47" width="91" height="8" fill="url(#premium-opulent-pattern)" />
      <rect x="0" y="47" width="91" height="0.5" fill="url(#premium-opulent-goldBand)" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="41.5" y="9" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Company */}
      <text x="45.5" y="13" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" letterSpacing="0.6" fill="url(#premium-opulent-goldText)">{data.companyJa}</text>
      <text x="45.5" y="17" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" letterSpacing="0.4" fill="#8A7A50">{data.companyEn}</text>
      {/* Title */}
      <text x="45.5" y="21.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#8A7A50">{data.titleJa}</text>
      {/* Contact */}
      <text x="45.5" y="27" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#B8860B">{data.tel}</text>
      <text x="45.5" y="31" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#B8860B">{data.email}</text>
      <text x="45.5" y="35" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#B8860B">{data.website}</text>
      <line x1="25" y1="38" x2="66" y2="38" stroke="#D4AF37" strokeWidth="0.06" opacity="0.3" />
      {/* Address */}
      <text x="45.5" y="42.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#6A5A30">〒{data.zipCode}</text>
      <text x="45.5" y="46" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#6A5A30">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 6. SOVEREIGN (統) — Sovereign ruler, commanding authority
// Navy with gold crown motif, brushed metal texture
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
      <defs>
        <filter id="premium-sovereign-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.5 2.0" numOctaves="3" seed="50" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
        </filter>
        <filter id="premium-sovereign-shadow">
          <feGaussianBlur stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feComposite operator="over" in="SourceGraphic" />
        </filter>
        <linearGradient id="premium-sovereign-navy" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0E1E30" />
          <stop offset="100%" stopColor="#081420" />
        </linearGradient>
        <linearGradient id="premium-sovereign-crownGold" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B8860B" />
          <stop offset="50%" stopColor="#F5E080" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <radialGradient id="premium-sovereign-glow" cx="50%" cy="15%" r="40%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#0A1628" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#premium-sovereign-navy)" filter="url(#premium-sovereign-texture)" />
      <rect width="91" height="55" fill="url(#premium-sovereign-glow)" />
      {/* Crown motif - refined */}
      <path d="M38 7 L40.5 3.5 L42.5 6.5 L45.5 2 L48.5 6.5 L50.5 3.5 L53 7 L52 9 L39 9 Z" fill="none" stroke="url(#premium-sovereign-crownGold)" strokeWidth="0.18" />
      <rect x="39" y="9" width="13" height="1.8" fill="none" stroke="#D4AF37" strokeWidth="0.1" rx="0.3" />
      {/* Jewels in crown */}
      <circle cx="42.5" cy="5.5" r="0.35" fill="#F5E080" opacity="0.7" />
      <circle cx="45.5" cy="3.5" r="0.45" fill="#F5E080" opacity="0.8" />
      <circle cx="48.5" cy="5.5" r="0.35" fill="#F5E080" opacity="0.7" />
      {/* Decorative lines from crown */}
      <line x1="25" y1="9.5" x2="38" y2="9.5" stroke="#D4AF37" strokeWidth="0.06" opacity="0.3" />
      <line x1="53" y1="9.5" x2="66" y2="9.5" stroke="#D4AF37" strokeWidth="0.06" opacity="0.3" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="41.5" y="11" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Name */}
      <text x="45.5" y="22" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6" letterSpacing="1.5" fill="#F0E8D0">{data.nameJa}</text>
      <line x1="20" y1="25" x2="71" y2="25" stroke="url(#premium-sovereign-crownGold)" strokeWidth="0.12" />
      <text x="45.5" y="30.5" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="2.2" letterSpacing="0.8" fill="#D4AF37">{data.nameEn.toUpperCase()}</text>
      {/* Title */}
      <text x="45.5" y="37" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#8A9AB0">{data.titleJa}</text>
      {/* Company */}
      <text x="45.5" y="46" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#5A6A80">{data.companyJa}</text>
      {/* Bottom decorative band */}
      <line x1="10" y1="51" x2="81" y2="51" stroke="#D4AF37" strokeWidth="0.04" opacity="0.2" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="premium-sovereign-back-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.5 2.0" numOctaves="3" seed="51" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#premium-sovereign-navy)" filter="url(#premium-sovereign-back-texture)" />
      {/* Small crown */}
      <path d="M42 6 L43.5 4 L45.5 6.5 L47.5 4 L49 6 L48.5 7.5 L42.5 7.5 Z" fill="#D4AF37" opacity="0.25" />
      <circle cx="45.5" cy="5" r="0.3" fill="#F5E080" opacity="0.5" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="41.5" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Company */}
      <text x="45.5" y="12" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" letterSpacing="0.6" fill="#F0E8D0">{data.companyJa}</text>
      <text x="45.5" y="16" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" letterSpacing="0.4" fill="#B8860B">{data.companyEn}</text>
      {/* Title */}
      <text x="45.5" y="20.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#7A8A9A">{data.titleJa}</text>
      <line x1="25" y1="23" x2="66" y2="23" stroke="#D4AF37" strokeWidth="0.08" opacity="0.3" />
      {/* Contact */}
      <text x="45.5" y="28" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#8A9AB0">{data.tel}</text>
      <text x="45.5" y="32" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#8A9AB0">{data.email}</text>
      <text x="45.5" y="36" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#8A9AB0">{data.website}</text>
      <line x1="25" y1="39" x2="66" y2="39" stroke="#D4AF37" strokeWidth="0.06" opacity="0.3" />
      {/* Address */}
      <text x="45.5" y="43" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#5A6A80">〒{data.zipCode}</text>
      <text x="45.5" y="46.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#5A6A80">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 7. NOBLE (貴) — Noble elegance, refined aristocracy
// Left-aligned regal layout, gold monogram accent, leather texture
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
      <defs>
        <filter id="premium-noble-texture">
          <feTurbulence type="fractalNoise" baseFrequency="1.5" numOctaves="6" seed="60" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
        </filter>
        <filter id="premium-noble-shadow">
          <feGaussianBlur stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.1" />
          <feComposite operator="over" in="SourceGraphic" />
        </filter>
        <linearGradient id="premium-noble-goldBar" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F5E080" />
          <stop offset="30%" stopColor="#D4AF37" />
          <stop offset="70%" stopColor="#B8860B" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
        <radialGradient id="premium-noble-monogram" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="#0F0F0F" filter="url(#premium-noble-texture)" />
      {/* Left gold bar with gradient */}
      <rect x="0" y="0" width="2.2" height="55" fill="url(#premium-noble-goldBar)" opacity="0.7" />
      <rect x="2.8" y="0" width="0.3" height="55" fill="#D4AF37" opacity="0.25" />
      <rect x="3.5" y="0" width="0.1" height="55" fill="#D4AF37" opacity="0.15" />
      {/* Monogram circle in top right with glow */}
      <circle cx="78" cy="12" r="7" fill="url(#premium-noble-monogram)" />
      <circle cx="78" cy="12" r="6" fill="none" stroke="#D4AF37" strokeWidth="0.15" opacity="0.6" />
      <circle cx="78" cy="12" r="5" fill="none" stroke="#B8860B" strokeWidth="0.08" opacity="0.4" />
      <text x="78" y="14.5" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="600" fontSize="5.5" fill="#D4AF37" opacity="0.35">N</text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="8" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Name */}
      <text x="10" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="5.5" letterSpacing="1" fill="#F0E8D0">{data.nameJa}</text>
      <text x="10" y="28" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="2" letterSpacing="0.5" fill="#D4AF37">{data.nameEn}</text>
      {/* Gold rule */}
      <line x1="10" y1="31.5" x2="55" y2="31.5" stroke="url(#premium-noble-goldBar)" strokeWidth="0.12" />
      {/* Title */}
      <text x="10" y="37" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#8A8A70">{data.titleJa}</text>
      {/* Company */}
      <text x="10" y="45" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#5A5A40">{data.companyJa}</text>
      {/* Bottom subtle decorative dots */}
      <circle cx="10" cy="50" r="0.2" fill="#D4AF37" opacity="0.2" />
      <circle cx="13" cy="50" r="0.15" fill="#D4AF37" opacity="0.15" />
      <circle cx="15.5" cy="50" r="0.1" fill="#D4AF37" opacity="0.1" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="premium-noble-back-texture">
          <feTurbulence type="fractalNoise" baseFrequency="1.5" numOctaves="6" seed="61" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="#0F0F0F" filter="url(#premium-noble-back-texture)" />
      {/* Left gold bar */}
      <rect x="0" y="0" width="2.2" height="55" fill="url(#premium-noble-goldBar)" opacity="0.7" />
      <rect x="2.8" y="0" width="0.3" height="55" fill="#D4AF37" opacity="0.25" />
      <rect x="3.5" y="0" width="0.1" height="55" fill="#D4AF37" opacity="0.15" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="8" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Company */}
      <text x="10" y="11" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" letterSpacing="0.5" fill="#F0E8D0">{data.companyJa}</text>
      <text x="10" y="15.5" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" letterSpacing="0.3" fill="#B8860B">{data.companyEn}</text>
      {/* Title */}
      <text x="10" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#8A8A70">{data.titleJa}</text>
      <line x1="10" y1="22.5" x2="55" y2="22.5" stroke="#D4AF37" strokeWidth="0.1" opacity="0.4" />
      {/* Contact */}
      <text x="10" y="27.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#A0A080">{data.tel}</text>
      <text x="10" y="31.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#A0A080">{data.email}</text>
      <text x="10" y="35.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#A0A080">{data.website}</text>
      <line x1="10" y1="38.5" x2="55" y2="38.5" stroke="#D4AF37" strokeWidth="0.06" opacity="0.3" />
      {/* Address */}
      <text x="10" y="43" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#5A5A40">〒{data.zipCode}</text>
      <text x="10" y="46.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#5A5A40">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 8. PRESTIGE (威) — Prestige and authority
// Bold centered gold typography, dramatic weight, marble texture
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
      <defs>
        <filter id="premium-prestige-texture">
          <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="5" seed="70" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
        </filter>
        <filter id="premium-prestige-shadow">
          <feGaussianBlur stdDeviation="0.4" in="SourceAlpha" result="blur" />
          <feOffset dx="0.2" dy="0.2" in="blur" result="shadow" />
          <feComposite in="SourceGraphic" in2="shadow" operator="over" />
        </filter>
        <linearGradient id="premium-prestige-goldHeavy" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F5E080" />
          <stop offset="40%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#A08020" />
        </linearGradient>
        <linearGradient id="premium-prestige-topBand" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
          <stop offset="20%" stopColor="#D4AF37" stopOpacity="0.6" />
          <stop offset="80%" stopColor="#D4AF37" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#0A0A0A" filter="url(#premium-prestige-texture)" />
      {/* Top gold accent band with fade */}
      <rect x="0" y="0" width="91" height="2" fill="url(#premium-prestige-topBand)" />
      <rect x="0" y="2.5" width="91" height="0.3" fill="#D4AF37" opacity="0.15" />
      {/* Decorative flourish top center */}
      <path d="M35 5 Q40 3 45.5 5 Q51 3 56 5" fill="none" stroke="#D4AF37" strokeWidth="0.08" opacity="0.3" />
      <circle cx="45.5" cy="4.5" r="0.3" fill="#D4AF37" opacity="0.3" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="41.5" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Name - heavy weight, commanding, with shadow */}
      <text x="45.7" y="23.3" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="7" letterSpacing="1.5" fill="#1A1A0A" opacity="0.4">{data.nameJa}</text>
      <text x="45.5" y="23" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="7" letterSpacing="1.5" fill="url(#premium-prestige-goldHeavy)" filter="url(#premium-prestige-shadow)">{data.nameJa}</text>
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="600" fontSize="2.5" letterSpacing="1" fill="#B8860B">{data.nameEn.toUpperCase()}</text>
      {/* Title */}
      <text x="45.5" y="37.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.8" fill="#8A7A50">{data.titleJa}</text>
      {/* Company */}
      <text x="45.5" y="46" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#5A4A20">{data.companyJa}</text>
      {/* Bottom band */}
      <rect x="0" y="52.5" width="91" height="0.3" fill="#D4AF37" opacity="0.15" />
      <rect x="0" y="53" width="91" height="2" fill="url(#premium-prestige-topBand)" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="premium-prestige-back-texture">
          <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="5" seed="71" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="#0A0A0A" filter="url(#premium-prestige-back-texture)" />
      {/* Top band */}
      <rect x="0" y="0" width="91" height="1.5" fill="url(#premium-prestige-topBand)" opacity="0.7" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="41.5" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Company - bold */}
      <text x="45.5" y="10" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="2.8" letterSpacing="0.8" fill="url(#premium-prestige-goldHeavy)">{data.companyJa}</text>
      <text x="45.5" y="14.5" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.6" letterSpacing="0.5" fill="#8A7A50">{data.companyEn}</text>
      {/* Title */}
      <text x="45.5" y="19" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#8A7A50">{data.titleJa}</text>
      <line x1="20" y1="21.5" x2="71" y2="21.5" stroke="#D4AF37" strokeWidth="0.1" opacity="0.3" />
      {/* Contact */}
      <text x="45.5" y="27" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#B8860B">{data.tel}</text>
      <text x="45.5" y="31" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#B8860B">{data.email}</text>
      <text x="45.5" y="35" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#B8860B">{data.website}</text>
      <line x1="20" y1="38" x2="71" y2="38" stroke="#D4AF37" strokeWidth="0.06" opacity="0.3" />
      {/* Address */}
      <text x="45.5" y="42.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#5A4A20">〒{data.zipCode}</text>
      <text x="45.5" y="46" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#5A4A20">{data.addressJa}</text>
      {/* Bottom band */}
      <rect x="0" y="53.5" width="91" height="1.5" fill="url(#premium-prestige-topBand)" opacity="0.7" />
    </g>
  ),
};

// ============================================================
// 9. PINNACLE (極) — The absolute pinnacle
// Minimal black with single gold accent, extreme refinement, silk texture
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
      <defs>
        <filter id="premium-pinnacle-texture">
          <feTurbulence type="fractalNoise" baseFrequency="2.0 0.5" numOctaves="3" seed="80" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
        </filter>
        <filter id="premium-pinnacle-shadow">
          <feGaussianBlur stdDeviation="0.2" />
          <feOffset dx="0.05" dy="0.1" />
          <feComposite operator="over" in="SourceGraphic" />
        </filter>
        <linearGradient id="premium-pinnacle-goldLine" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F5E080" stopOpacity="0" />
          <stop offset="15%" stopColor="#F5E080" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="85%" stopColor="#F5E080" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#F5E080" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="premium-pinnacle-spotlight" cx="30%" cy="40%" r="45%">
          <stop offset="0%" stopColor="#1A1A14" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#0A0A0A" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="#0A0A0A" filter="url(#premium-pinnacle-texture)" />
      <rect width="91" height="55" fill="url(#premium-pinnacle-spotlight)" />
      {/* Single gold vertical line - the pinnacle, with gradient fade */}
      <line x1="12" y1="5" x2="12" y2="50" stroke="url(#premium-pinnacle-goldLine)" strokeWidth="0.35" />
      {/* Small diamond accent on line */}
      <path d="M11 27.5 L12 26 L13 27.5 L12 29 Z" fill="#D4AF37" opacity="0.4" />
      {/* Subtle horizontal tick marks */}
      <line x1="12" y1="12" x2="14" y2="12" stroke="#D4AF37" strokeWidth="0.06" opacity="0.3" />
      <line x1="12" y1="43" x2="14" y2="43" stroke="#D4AF37" strokeWidth="0.06" opacity="0.3" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="16" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Name right of the pinnacle line */}
      <text x="18" y="21" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="5.5" letterSpacing="1" fill="#F0E8D0">{data.nameJa}</text>
      <text x="18" y="27" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="2" letterSpacing="0.5" fill="#D4AF37">{data.nameEn}</text>
      {/* Title */}
      <text x="18" y="35" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#6A6A50">{data.titleJa}</text>
      {/* Company */}
      <text x="18" y="43" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#4A4A30">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="premium-pinnacle-back-texture">
          <feTurbulence type="fractalNoise" baseFrequency="2.0 0.5" numOctaves="3" seed="81" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="#0A0A0A" filter="url(#premium-pinnacle-back-texture)" />
      {/* Single gold vertical line - mirrored position */}
      <line x1="79" y1="5" x2="79" y2="50" stroke="url(#premium-pinnacle-goldLine)" strokeWidth="0.35" />
      <path d="M78 27.5 L79 26 L80 27.5 L79 29 Z" fill="#D4AF37" opacity="0.4" />
      <line x1="77" y1="12" x2="79" y2="12" stroke="#D4AF37" strokeWidth="0.06" opacity="0.3" />
      <line x1="77" y1="43" x2="79" y2="43" stroke="#D4AF37" strokeWidth="0.06" opacity="0.3" />
      {/* Logo */}
      {data.logo && <image href={data.logo} x="67" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Company */}
      <text x="73" y="11" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" letterSpacing="0.5" fill="#F0E8D0">{data.companyJa}</text>
      <text x="73" y="15" textAnchor="end" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" letterSpacing="0.3" fill="#B8860B">{data.companyEn}</text>
      {/* Title */}
      <text x="73" y="20" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#6A6A50">{data.titleJa}</text>
      {/* Contact */}
      <text x="73" y="27" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#8A8A60">{data.tel}</text>
      <text x="73" y="31" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#8A8A60">{data.email}</text>
      <text x="73" y="35" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#8A8A60">{data.website}</text>
      {/* Address */}
      <text x="73" y="42" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#4A4A30">〒{data.zipCode}</text>
      <text x="73" y="45.5" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#4A4A30">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 10. IMPERIAL (帝) — Imperial dynasty, emperor's seal
// Heavy borders, seal motif, maximum gold presence, damascene texture
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
      <defs>
        <filter id="premium-imperial-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="5" seed="90" result="noise" />
          <feColorMatrix type="matrix" values="0.1 0 0 0 0.04  0 0.08 0 0 0.03  0 0 0.05 0 0.02  0 0 0 0.06 0" in="noise" result="damascene" />
          <feBlend in="SourceGraphic" in2="damascene" mode="screen" />
        </filter>
        <filter id="premium-imperial-shadow">
          <feGaussianBlur stdDeviation="0.3" />
          <feOffset dx="0.15" dy="0.15" />
          <feComposite operator="over" in="SourceGraphic" />
        </filter>
        <linearGradient id="premium-imperial-goldFrame" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="25%" stopColor="#F5E080" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="75%" stopColor="#F5E080" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
        <radialGradient id="premium-imperial-sealGlow" cx="50%" cy="20%" r="20%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="premium-imperial-sealGold" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F5E080" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#0A0A0A" filter="url(#premium-imperial-texture)" />
      <rect width="91" height="55" fill="url(#premium-imperial-sealGlow)" />
      {/* Triple border - imperial weight */}
      <rect x="3" y="2.5" width="85" height="50" fill="none" stroke="url(#premium-imperial-goldFrame)" strokeWidth="0.4" />
      <rect x="4.5" y="4" width="82" height="47" fill="none" stroke="#B8860B" strokeWidth="0.15" />
      <rect x="6" y="5.5" width="79" height="44" fill="none" stroke="#D4AF37" strokeWidth="0.08" opacity="0.6" />
      {/* Imperial seal in top center */}
      <circle cx="45.5" cy="11" r="4" fill="none" stroke="url(#premium-imperial-sealGold)" strokeWidth="0.22" />
      <circle cx="45.5" cy="11" r="3.2" fill="none" stroke="#B8860B" strokeWidth="0.1" />
      <circle cx="45.5" cy="11" r="2.5" fill="none" stroke="#D4AF37" strokeWidth="0.06" opacity="0.5" />
      <text x="45.5" y="12.8" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="3" fill="url(#premium-imperial-sealGold)">帝</text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="41.5" y="7" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Name */}
      <text x="45.5" y="24" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="5.5" letterSpacing="2" fill="url(#premium-imperial-goldFrame)" filter="url(#premium-imperial-shadow)">{data.nameJa}</text>
      {/* Gold bars with end ornaments */}
      <circle cx="16" cy="27" r="0.3" fill="#D4AF37" opacity="0.4" />
      <line x1="18" y1="27" x2="73" y2="27" stroke="url(#premium-imperial-goldFrame)" strokeWidth="0.12" />
      <circle cx="75" cy="27" r="0.3" fill="#D4AF37" opacity="0.4" />
      <text x="45.5" y="32.5" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="500" fontSize="2" letterSpacing="0.8" fill="#B8860B">{data.nameEn.toUpperCase()}</text>
      {/* Title */}
      <text x="45.5" y="38.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#8A7A50">{data.titleJa}</text>
      {/* Company */}
      <text x="45.5" y="45" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#6A5A30">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="premium-imperial-back-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="5" seed="91" result="noise" />
          <feColorMatrix type="matrix" values="0.1 0 0 0 0.04  0 0.08 0 0 0.03  0 0 0.05 0 0.02  0 0 0 0.06 0" in="noise" result="damascene" />
          <feBlend in="SourceGraphic" in2="damascene" mode="screen" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="#0A0A0A" filter="url(#premium-imperial-back-texture)" />
      {/* Triple border */}
      <rect x="3" y="2.5" width="85" height="50" fill="none" stroke="url(#premium-imperial-goldFrame)" strokeWidth="0.4" />
      <rect x="4.5" y="4" width="82" height="47" fill="none" stroke="#B8860B" strokeWidth="0.15" />
      <rect x="6" y="5.5" width="79" height="44" fill="none" stroke="#D4AF37" strokeWidth="0.08" opacity="0.6" />
      {/* Small imperial seal */}
      <circle cx="45.5" cy="9" r="2.5" fill="none" stroke="#D4AF37" strokeWidth="0.12" opacity="0.5" />
      <text x="45.5" y="10.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="2" fill="#D4AF37" opacity="0.4">帝</text>
      {/* Logo */}
      {data.logo && <image href={data.logo} x="41.5" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      {/* Company with seal */}
      <text x="45.5" y="15" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" letterSpacing="1" fill="url(#premium-imperial-goldFrame)">{data.companyJa}</text>
      <text x="45.5" y="19" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" letterSpacing="0.5" fill="#8A7A50">{data.companyEn}</text>
      {/* Title */}
      <text x="45.5" y="23" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#8A7A50">{data.titleJa}</text>
      <line x1="20" y1="25.5" x2="71" y2="25.5" stroke="#D4AF37" strokeWidth="0.1" opacity="0.4" />
      {/* Contact */}
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#B8860B">{data.tel}</text>
      <text x="45.5" y="34" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#B8860B">{data.email}</text>
      <text x="45.5" y="38" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#B8860B">{data.website}</text>
      <line x1="20" y1="40.5" x2="71" y2="40.5" stroke="#D4AF37" strokeWidth="0.06" opacity="0.3" />
      {/* Address */}
      <text x="45.5" y="44.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#6A5A30">〒{data.zipCode}</text>
      <text x="45.5" y="48" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#6A5A30">{data.addressJa}</text>
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
