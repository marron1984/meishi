import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. ROMAN (羅馬) — Roman classical, column proportions
// Pediment shapes, classical column lines, imperial order
// ============================================================
const romanTemplate: TemplateDefinition = {
  id: 'classic-roman',
  name: 'ROMAN',
  nameJa: '羅馬',
  category: 'classic',
  designer: 'Classical Scholar',
  description: 'ローマの威厳。列柱の比例が生む古典の秩序美。',
  accentColor: '#1B2A4A',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="classic-roman-linen">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="classic-roman-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.08" dy="0.12" />
          <feFlood floodColor="#0D1A30" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="classic-roman-bg" x1="0" y1="0" x2="0.2" y2="1">
          <stop offset="0%" stopColor="#FFFEF8" />
          <stop offset="30%" stopColor="#FBF8F0" />
          <stop offset="70%" stopColor="#F8F4EA" />
          <stop offset="100%" stopColor="#F5F0E4" />
        </linearGradient>
        <radialGradient id="classic-roman-glow" cx="0.5" cy="0.15" r="0.5">
          <stop offset="0%" stopColor="#D4C4A0" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#D4C4A0" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#classic-roman-bg)" />
      <rect width="91" height="55" fill="url(#classic-roman-glow)" />
      <rect width="91" height="55" fill="transparent" filter="url(#classic-roman-linen)" opacity="0.2" />
      {/* Pediment triangle */}
      <path d="M20,10 L45.5,4 L71,10" fill="none" stroke="#1B2A4A" strokeWidth="0.25" opacity="0.3" />
      <line x1="20" y1="10" x2="71" y2="10" stroke="#1B2A4A" strokeWidth="0.2" opacity="0.25" />
      {/* Column lines with capitals */}
      <line x1="24" y1="10" x2="24" y2="18" stroke="#1B2A4A" strokeWidth="0.2" opacity="0.2" />
      <line x1="67" y1="10" x2="67" y2="18" stroke="#1B2A4A" strokeWidth="0.2" opacity="0.2" />
      <line x1="22" y1="18" x2="26" y2="18" stroke="#1B2A4A" strokeWidth="0.15" opacity="0.2" />
      <line x1="65" y1="18" x2="69" y2="18" stroke="#1B2A4A" strokeWidth="0.15" opacity="0.2" />
      {/* Capital volutes */}
      <path d="M22.5,10 Q23,9.5 24,9.5 Q25,9.5 25.5,10" fill="none" stroke="#1B2A4A" strokeWidth="0.1" opacity="0.15" />
      <path d="M65.5,10 Q66,9.5 67,9.5 Q68,9.5 68.5,10" fill="none" stroke="#1B2A4A" strokeWidth="0.1" opacity="0.15" />
      {/* Entablature detail */}
      <line x1="20" y1="10.5" x2="71" y2="10.5" stroke="#1B2A4A" strokeWidth="0.06" opacity="0.15" />
      {data.logo && <image href={data.logo} x="73" y="38" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
      <g filter="url(#classic-roman-shadow)">
        <text x="45.5" y="28" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="600" fontSize="6" letterSpacing="0.5" fill="#1B2A4A">{data.nameJa}</text>
      </g>
      <text x="45.5" y="33.5" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="2" letterSpacing="0.4" fill="#4A5A7A">{data.nameEn.toUpperCase()}</text>
      {/* Decorative rule with end dots */}
      <line x1="28" y1="37" x2="63" y2="37" stroke="#1B2A4A" strokeWidth="0.15" opacity="0.25" />
      <circle cx="28" cy="37" r="0.35" fill="#1B2A4A" opacity="0.25" />
      <circle cx="63" cy="37" r="0.35" fill="#1B2A4A" opacity="0.25" />
      <text x="45.5" y="42" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#6B7B9A">{data.titleJa}</text>
      <text x="45.5" y="47" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#6B7B9A">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="classic-roman-linen-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="classic-roman-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.08" dy="0.12" />
          <feFlood floodColor="#0D1A30" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="classic-roman-bg-b" x1="0" y1="0" x2="0.2" y2="1">
          <stop offset="0%" stopColor="#FFFEF8" />
          <stop offset="50%" stopColor="#F8F4EA" />
          <stop offset="100%" stopColor="#F5F0E4" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#classic-roman-bg-b)" />
      <rect width="91" height="55" fill="transparent" filter="url(#classic-roman-linen-b)" opacity="0.2" />
      {/* Classical double border */}
      <rect x="5" y="5" width="81" height="45" fill="none" stroke="#1B2A4A" strokeWidth="0.15" opacity="0.2" />
      <rect x="7" y="7" width="77" height="41" fill="none" stroke="#1B2A4A" strokeWidth="0.08" opacity="0.12" />
      {/* Pediment watermark */}
      <path d="M35,3 L45.5,1 L56,3" fill="none" stroke="#1B2A4A" strokeWidth="0.08" opacity="0.06" />
      {data.logo && <image href={data.logo} x="41.75" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <g filter="url(#classic-roman-shadow-b)">
        <text x="45.5" y="18" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="600" fontSize="2.5" letterSpacing="0.3" fill="#1B2A4A">{data.companyJa}</text>
      </g>
      <text x="45.5" y="22" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" letterSpacing="0.3" fill="#4A5A7A">{data.companyEn.toUpperCase()}</text>
      <line x1="25" y1="25" x2="66" y2="25" stroke="#1B2A4A" strokeWidth="0.1" opacity="0.2" />
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#4A5A7A">{data.tel}</text>
      <text x="45.5" y="34" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#4A5A7A">{data.email}</text>
      <text x="45.5" y="38" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#4A5A7A">{data.website}</text>
      <line x1="25" y1="41" x2="66" y2="41" stroke="#1B2A4A" strokeWidth="0.1" opacity="0.2" />
      <text x="45.5" y="45" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#8B9BBB">{'\u3012'}{data.zipCode}</text>
      <text x="45.5" y="48.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#8B9BBB">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 2. COPPERPLATE (銅板) — Copperplate engraving style
// Fine engraved lines, formal script feel, intaglio print
// ============================================================
const copperplateTemplate: TemplateDefinition = {
  id: 'classic-copperplate',
  name: 'COPPERPLATE',
  nameJa: '銅板',
  category: 'classic',
  designer: 'Master Engraver',
  description: '銅版画の精緻。ビュランが刻む格式の極み。',
  accentColor: '#3C2415',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="classic-copper-plate">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="softLight" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="classic-copper-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.05" dy="0.1" />
          <feFlood floodColor="#2A1508" floodOpacity="0.12" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="classic-copper-bg" x1="0" y1="0" x2="0.15" y2="1">
          <stop offset="0%" stopColor="#FFFEF6" />
          <stop offset="35%" stopColor="#FCF8EE" />
          <stop offset="65%" stopColor="#F8F2E4" />
          <stop offset="100%" stopColor="#F5EED8" />
        </linearGradient>
        <radialGradient id="classic-copper-warmth" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor="#E8D4B0" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#E8D4B0" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#classic-copper-bg)" />
      <rect width="91" height="55" fill="url(#classic-copper-warmth)" />
      <rect width="91" height="55" fill="transparent" filter="url(#classic-copper-plate)" opacity="0.15" />
      {/* Fine engraved double border */}
      <rect x="5" y="5" width="81" height="45" fill="none" stroke="#3C2415" strokeWidth="0.22" opacity="0.3" />
      <rect x="6.5" y="6.5" width="78" height="42" fill="none" stroke="#3C2415" strokeWidth="0.08" opacity="0.2" />
      {/* Corner ornaments - engraved L-shapes */}
      <path d="M5,5 L9,5 M5,5 L5,9" stroke="#3C2415" strokeWidth="0.3" opacity="0.35" />
      <path d="M86,5 L82,5 M86,5 L86,9" stroke="#3C2415" strokeWidth="0.3" opacity="0.35" />
      <path d="M5,50 L9,50 M5,50 L5,46" stroke="#3C2415" strokeWidth="0.3" opacity="0.35" />
      <path d="M86,50 L82,50 M86,50 L86,46" stroke="#3C2415" strokeWidth="0.3" opacity="0.35" />
      {/* Fine hatching under name */}
      {[14, 14.3, 14.6, 14.9, 15.2, 15.5, 15.8].map((y, i) => (
        <line key={`classic-cp-hf-${i}`} x1="28" y1={y} x2="63" y2={y} stroke="#3C2415" strokeWidth="0.03" opacity="0.1" />
      ))}
      {data.logo && <image href={data.logo} x="73" y="8" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <g filter="url(#classic-copper-shadow)">
        <text x="45.5" y="24" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="600" fontSize="5.5" letterSpacing="0.3" fill="#3C2415">{data.nameJa}</text>
      </g>
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="300" fontSize="2" letterSpacing="0.5" fontStyle="italic" fill="#6B5040">{data.nameEn}</text>
      <line x1="25" y1="34" x2="66" y2="34" stroke="#3C2415" strokeWidth="0.1" opacity="0.25" />
      <text x="45.5" y="39.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#8B6B50">{data.titleJa}</text>
      <text x="45.5" y="45" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#8B6B50">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="classic-copper-plate-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="softLight" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="classic-copper-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
          <feOffset dx="0.05" dy="0.1" />
          <feFlood floodColor="#2A1508" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="classic-copper-bg-b" x1="0" y1="0" x2="0.15" y2="1">
          <stop offset="0%" stopColor="#FFFEF6" />
          <stop offset="50%" stopColor="#F8F2E4" />
          <stop offset="100%" stopColor="#F5EED8" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#classic-copper-bg-b)" />
      <rect width="91" height="55" fill="transparent" filter="url(#classic-copper-plate-b)" opacity="0.15" />
      {/* Engraved border */}
      <rect x="5" y="5" width="81" height="45" fill="none" stroke="#3C2415" strokeWidth="0.22" opacity="0.25" />
      <rect x="6.5" y="6.5" width="78" height="42" fill="none" stroke="#3C2415" strokeWidth="0.08" opacity="0.15" />
      {/* Decorative engraved cartouche at top */}
      <path d="M30,7 Q35,6 40,7 Q42,7.5 45.5,7 Q49,7.5 51,7 Q56,6 61,7" fill="none" stroke="#3C2415" strokeWidth="0.08" opacity="0.15" />
      {data.logo && <image href={data.logo} x="41.75" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <g filter="url(#classic-copper-shadow-b)">
        <text x="45.5" y="18" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="600" fontSize="2.5" letterSpacing="0.3" fill="#3C2415">{data.companyJa}</text>
      </g>
      <text x="45.5" y="22" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="300" fontSize="1.5" letterSpacing="0.3" fontStyle="italic" fill="#6B5040">{data.companyEn}</text>
      <text x="45.5" y="25.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#8B6B50">{data.titleJa}</text>
      <line x1="20" y1="28.5" x2="71" y2="28.5" stroke="#3C2415" strokeWidth="0.08" opacity="0.2" />
      <text x="45.5" y="32.5" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#6B5040">{data.tel}</text>
      <text x="45.5" y="36" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#6B5040">{data.email}</text>
      <text x="45.5" y="39.5" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#6B5040">{data.website}</text>
      <line x1="20" y1="42.5" x2="71" y2="42.5" stroke="#3C2415" strokeWidth="0.08" opacity="0.2" />
      <text x="45.5" y="46" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#8B6B50">{'\u3012'}{data.zipCode}</text>
      <text x="45.5" y="49" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#8B6B50">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 3. LINEN (麻) — Linen textured paper, warm cream, understated
// Soft fabric feel, natural fibers, warm neutral palette
// ============================================================
const linenTemplate: TemplateDefinition = {
  id: 'classic-linen',
  name: 'LINEN',
  nameJa: '麻',
  category: 'classic',
  designer: 'Paper Mill Master',
  description: '麻紙の手触り。素材が語る上質な日常。',
  accentColor: '#6B5040',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="classic-linen-weave">
          <feTurbulence type="fractalNoise" baseFrequency="1.8 0.6" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="classic-linen-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.08" dy="0.12" />
          <feFlood floodColor="#3C2415" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="classic-linen-bg" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#FAF6EE" />
          <stop offset="30%" stopColor="#F6F0E6" />
          <stop offset="70%" stopColor="#F2ECDE" />
          <stop offset="100%" stopColor="#EEE6D6" />
        </linearGradient>
        <pattern id="classic-linen-tex" width="3" height="3" patternUnits="userSpaceOnUse">
          <rect width="3" height="3" fill="transparent" />
          <line x1="0" y1="0.5" x2="3" y2="0.5" stroke="#E0D8C8" strokeWidth="0.04" />
          <line x1="0" y1="1.5" x2="3" y2="1.5" stroke="#E0D8C8" strokeWidth="0.04" />
          <line x1="0" y1="2.5" x2="3" y2="2.5" stroke="#E0D8C8" strokeWidth="0.04" />
          <line x1="0.5" y1="0" x2="0.5" y2="3" stroke="#E0D8C8" strokeWidth="0.03" />
          <line x1="1.5" y1="0" x2="1.5" y2="3" stroke="#E0D8C8" strokeWidth="0.03" />
          <line x1="2.5" y1="0" x2="2.5" y2="3" stroke="#E0D8C8" strokeWidth="0.03" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#classic-linen-bg)" />
      <rect width="91" height="55" fill="url(#classic-linen-tex)" opacity="0.6" />
      <rect width="91" height="55" fill="transparent" filter="url(#classic-linen-weave)" opacity="0.12" />
      {/* Subtle fiber wisps */}
      <path d="M5,12 Q15,11.5 25,12.3" fill="none" stroke="#C4B494" strokeWidth="0.04" opacity="0.3" />
      <path d="M60,42 Q70,41.5 80,42.2" fill="none" stroke="#C4B494" strokeWidth="0.04" opacity="0.25" />
      <path d="M30,48 Q40,47.6 50,48.1" fill="none" stroke="#C4B494" strokeWidth="0.03" opacity="0.2" />
      {data.logo && <image href={data.logo} x="73" y="38" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <g filter="url(#classic-linen-shadow)">
        <text x="45.5" y="23" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="500" fontSize="5.5" letterSpacing="0.4" fill="#3C2415">{data.nameJa}</text>
      </g>
      <text x="45.5" y="29" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="300" fontSize="2" letterSpacing="0.4" fill="#6B5040">{data.nameEn}</text>
      <text x="45.5" y="37" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#8B7B60">{data.titleJa}</text>
      <text x="45.5" y="43" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#8B7B60">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="classic-linen-weave-b">
          <feTurbulence type="fractalNoise" baseFrequency="1.8 0.6" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="classic-linen-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.08" dy="0.12" />
          <feFlood floodColor="#3C2415" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="classic-linen-bg-b" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#FAF6EE" />
          <stop offset="50%" stopColor="#F2ECDE" />
          <stop offset="100%" stopColor="#EEE6D6" />
        </linearGradient>
        <pattern id="classic-linen-tex-b" width="3" height="3" patternUnits="userSpaceOnUse">
          <rect width="3" height="3" fill="transparent" />
          <line x1="0" y1="0.5" x2="3" y2="0.5" stroke="#E0D8C8" strokeWidth="0.04" />
          <line x1="0" y1="1.5" x2="3" y2="1.5" stroke="#E0D8C8" strokeWidth="0.04" />
          <line x1="0" y1="2.5" x2="3" y2="2.5" stroke="#E0D8C8" strokeWidth="0.04" />
          <line x1="0.5" y1="0" x2="0.5" y2="3" stroke="#E0D8C8" strokeWidth="0.03" />
          <line x1="1.5" y1="0" x2="1.5" y2="3" stroke="#E0D8C8" strokeWidth="0.03" />
          <line x1="2.5" y1="0" x2="2.5" y2="3" stroke="#E0D8C8" strokeWidth="0.03" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#classic-linen-bg-b)" />
      <rect width="91" height="55" fill="url(#classic-linen-tex-b)" opacity="0.6" />
      <rect width="91" height="55" fill="transparent" filter="url(#classic-linen-weave-b)" opacity="0.12" />
      {/* Subtle fiber detail */}
      <path d="M15,8 Q25,7.6 35,8.2" fill="none" stroke="#C4B494" strokeWidth="0.03" opacity="0.25" />
      <path d="M55,46 Q65,45.7 75,46.3" fill="none" stroke="#C4B494" strokeWidth="0.03" opacity="0.2" />
      {data.logo && <image href={data.logo} x="41.75" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <g filter="url(#classic-linen-shadow-b)">
        <text x="45.5" y="17" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="500" fontSize="2.5" fill="#3C2415">{data.companyJa}</text>
      </g>
      <text x="45.5" y="21" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="300" fontSize="1.4" fill="#6B5040">{data.companyEn}</text>
      <line x1="25" y1="24" x2="66" y2="24" stroke="#C4B494" strokeWidth="0.1" opacity="0.35" />
      <text x="45.5" y="29" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#6B5040">{data.tel}</text>
      <text x="45.5" y="33" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#6B5040">{data.email}</text>
      <text x="45.5" y="37" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#6B5040">{data.website}</text>
      <line x1="25" y1="40" x2="66" y2="40" stroke="#C4B494" strokeWidth="0.1" opacity="0.35" />
      <text x="45.5" y="44" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#8B7B60">{'\u3012'}{data.zipCode}</text>
      <text x="45.5" y="47.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#8B7B60">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 4. EMBASSY (大使館) — Diplomatic formal style
// Navy and gold, crest placeholder, formal hierarchy
// ============================================================
const embassyTemplate: TemplateDefinition = {
  id: 'classic-embassy',
  name: 'EMBASSY',
  nameJa: '大使館',
  category: 'classic',
  designer: 'Diplomatic Designer',
  description: '外交の格式。紋章が示す信頼と権威の証。',
  accentColor: '#1B2A4A',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="classic-embassy-linen">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="classic-embassy-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.08" dy="0.12" />
          <feFlood floodColor="#0D1528" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="classic-embassy-bg" x1="0" y1="0" x2="0.1" y2="1">
          <stop offset="0%" stopColor="#FFFEF8" />
          <stop offset="40%" stopColor="#FBF8F0" />
          <stop offset="70%" stopColor="#F8F4EA" />
          <stop offset="100%" stopColor="#F4F0E2" />
        </linearGradient>
        <linearGradient id="classic-embassy-gold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#C4A35A" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#D4B86A" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#C4A35A" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#classic-embassy-bg)" />
      <rect width="91" height="55" fill="transparent" filter="url(#classic-embassy-linen)" opacity="0.15" />
      {/* Gold top stripe */}
      <rect x="0" y="0" width="91" height="1.5" fill="url(#classic-embassy-gold)" />
      <rect x="0" y="1.5" width="91" height="0.3" fill="#1B2A4A" opacity="0.2" />
      {/* Diplomatic crest */}
      <circle cx="45.5" cy="11" r="4.5" fill="none" stroke="#C4A35A" strokeWidth="0.18" opacity="0.3" />
      <circle cx="45.5" cy="11" r="3.2" fill="none" stroke="#C4A35A" strokeWidth="0.1" opacity="0.2" />
      {/* Shield in crest */}
      <path d="M43.5,9 L47.5,9 L47.5,12 L45.5,13.5 L43.5,12 Z" fill="none" stroke="#1B2A4A" strokeWidth="0.12" opacity="0.25" />
      {/* Laurel hints */}
      <path d="M40.5,12 Q41,10 42,9" fill="none" stroke="#C4A35A" strokeWidth="0.06" opacity="0.15" />
      <path d="M50.5,12 Q50,10 49,9" fill="none" stroke="#C4A35A" strokeWidth="0.06" opacity="0.15" />
      {data.logo && <image href={data.logo} x="73" y="38" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <g filter="url(#classic-embassy-shadow)">
        <text x="45.5" y="24" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="5.5" letterSpacing="1" fill="#1B2A4A">{data.nameJa}</text>
      </g>
      <text x="45.5" y="29.5" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="2" letterSpacing="0.5" fill="#4A5A7A">{data.nameEn.toUpperCase()}</text>
      <line x1="28" y1="33" x2="63" y2="33" stroke="#C4A35A" strokeWidth="0.12" opacity="0.3" />
      <text x="45.5" y="38" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#6B7B9A">{data.titleJa}</text>
      <text x="45.5" y="44" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.6" fill="#1B2A4A">{data.companyJa}</text>
      {/* Gold bottom stripe */}
      <rect x="0" y="53.2" width="91" height="0.3" fill="#1B2A4A" opacity="0.2" />
      <rect x="0" y="53.5" width="91" height="1.5" fill="url(#classic-embassy-gold)" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="classic-embassy-linen-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="classic-embassy-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.08" dy="0.12" />
          <feFlood floodColor="#0D1528" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="classic-embassy-bg-b" x1="0" y1="0" x2="0.1" y2="1">
          <stop offset="0%" stopColor="#FFFEF8" />
          <stop offset="50%" stopColor="#F8F4EA" />
          <stop offset="100%" stopColor="#F4F0E2" />
        </linearGradient>
        <linearGradient id="classic-embassy-gold-b" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#C4A35A" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#D4B86A" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#C4A35A" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#classic-embassy-bg-b)" />
      <rect width="91" height="55" fill="transparent" filter="url(#classic-embassy-linen-b)" opacity="0.15" />
      <rect x="0" y="0" width="91" height="1.5" fill="url(#classic-embassy-gold-b)" />
      <rect x="0" y="1.5" width="91" height="0.3" fill="#1B2A4A" opacity="0.2" />
      {/* Faded crest watermark */}
      <circle cx="45.5" cy="8" r="3" fill="none" stroke="#C4A35A" strokeWidth="0.08" opacity="0.08" />
      {data.logo && <image href={data.logo} x="41.75" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
      <g filter="url(#classic-embassy-shadow-b)">
        <text x="45.5" y="16" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" letterSpacing="0.4" fill="#1B2A4A">{data.companyJa}</text>
      </g>
      <text x="45.5" y="20" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" letterSpacing="0.3" fill="#4A5A7A">{data.companyEn.toUpperCase()}</text>
      <line x1="20" y1="23.5" x2="71" y2="23.5" stroke="#C4A35A" strokeWidth="0.1" opacity="0.25" />
      <text x="45.5" y="28" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#4A5A7A">{data.tel}</text>
      <text x="45.5" y="32" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#4A5A7A">{data.email}</text>
      <text x="45.5" y="36" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#4A5A7A">{data.website}</text>
      <line x1="20" y1="39.5" x2="71" y2="39.5" stroke="#C4A35A" strokeWidth="0.1" opacity="0.25" />
      <text x="45.5" y="43.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#8B9BBB">{'\u3012'}{data.zipCode}</text>
      <text x="45.5" y="47" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#8B9BBB">{data.addressJa}</text>
      <rect x="0" y="53.2" width="91" height="0.3" fill="#1B2A4A" opacity="0.2" />
      <rect x="0" y="53.5" width="91" height="1.5" fill="url(#classic-embassy-gold-b)" />
    </g>
  ),
};

// ============================================================
// 5. HERITAGE (遺産) — Heritage style, established tradition
// Burgundy accents, formal typography, aged elegance
// ============================================================
const heritageTemplate: TemplateDefinition = {
  id: 'classic-heritage',
  name: 'HERITAGE',
  nameJa: '遺産',
  category: 'classic',
  designer: 'Heritage Keeper',
  description: '受け継がれる格式。時を越えて輝く伝統の美。',
  accentColor: '#6B2D3E',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="classic-heritage-linen">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="classic-heritage-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.12" />
          <feFlood floodColor="#2A0F18" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="classic-heritage-bg" x1="0" y1="0" x2="0.2" y2="1">
          <stop offset="0%" stopColor="#FFFEF8" />
          <stop offset="35%" stopColor="#FBF8F2" />
          <stop offset="70%" stopColor="#F8F4EA" />
          <stop offset="100%" stopColor="#F4EEE0" />
        </linearGradient>
        <linearGradient id="classic-heritage-bar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8B3D50" />
          <stop offset="50%" stopColor="#6B2D3E" />
          <stop offset="100%" stopColor="#5A2034" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#classic-heritage-bg)" />
      <rect width="91" height="55" fill="transparent" filter="url(#classic-heritage-linen)" opacity="0.18" />
      {/* Burgundy left accent bar with gradient */}
      <rect x="0" y="0" width="2.5" height="55" fill="url(#classic-heritage-bar)" opacity="0.8" />
      <line x1="2.5" y1="0" x2="2.5" y2="55" stroke="#C4A35A" strokeWidth="0.15" opacity="0.35" />
      {/* Decorative diamond motif */}
      <path d="M1.25,10 L1.8,11 L1.25,12 L0.7,11 Z" fill="#C4A35A" opacity="0.3" />
      <path d="M1.25,43 L1.8,44 L1.25,45 L0.7,44 Z" fill="#C4A35A" opacity="0.3" />
      {/* Thin aged line at right */}
      <line x1="85" y1="8" x2="85" y2="47" stroke="#6B2D3E" strokeWidth="0.06" opacity="0.1" />
      {data.logo && <image href={data.logo} x="73" y="38" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <g filter="url(#classic-heritage-shadow)">
        <text x="10" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="5.5" letterSpacing="0.5" fill="#3C1A28">{data.nameJa}</text>
      </g>
      <text x="10" y="28" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="2" letterSpacing="0.3" fill="#6B2D3E">{data.nameEn}</text>
      <line x1="10" y1="32" x2="55" y2="32" stroke="#6B2D3E" strokeWidth="0.1" opacity="0.2" />
      <text x="10" y="37.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#8B5060">{data.titleJa}</text>
      <text x="10" y="43.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.6" fill="#3C1A28">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="classic-heritage-linen-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="classic-heritage-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.12" />
          <feFlood floodColor="#2A0F18" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="classic-heritage-bg-b" x1="0" y1="0" x2="0.2" y2="1">
          <stop offset="0%" stopColor="#FFFEF8" />
          <stop offset="50%" stopColor="#F8F4EA" />
          <stop offset="100%" stopColor="#F4EEE0" />
        </linearGradient>
        <linearGradient id="classic-heritage-bar-b" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8B3D50" />
          <stop offset="50%" stopColor="#6B2D3E" />
          <stop offset="100%" stopColor="#5A2034" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#classic-heritage-bg-b)" />
      <rect width="91" height="55" fill="transparent" filter="url(#classic-heritage-linen-b)" opacity="0.18" />
      {/* Mirrored: accent bar on right */}
      <rect x="88.5" y="0" width="2.5" height="55" fill="url(#classic-heritage-bar-b)" opacity="0.8" />
      <line x1="88.5" y1="0" x2="88.5" y2="55" stroke="#C4A35A" strokeWidth="0.15" opacity="0.35" />
      <path d="M89.75,10 L90.3,11 L89.75,12 L89.2,11 Z" fill="#C4A35A" opacity="0.3" />
      {data.logo && <image href={data.logo} x="5" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
      <g filter="url(#classic-heritage-shadow-b)">
        <text x="80" y="16" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#3C1A28">{data.companyJa}</text>
      </g>
      <text x="80" y="20" textAnchor="end" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#6B2D3E">{data.companyEn}</text>
      <line x1="20" y1="23.5" x2="80" y2="23.5" stroke="#6B2D3E" strokeWidth="0.08" opacity="0.2" />
      <text x="80" y="28" textAnchor="end" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#8B5060">{data.tel}</text>
      <text x="80" y="32" textAnchor="end" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#8B5060">{data.email}</text>
      <text x="80" y="36" textAnchor="end" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#8B5060">{data.website}</text>
      <line x1="20" y1="39.5" x2="80" y2="39.5" stroke="#6B2D3E" strokeWidth="0.08" opacity="0.2" />
      <text x="80" y="44" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#A07080">{'\u3012'}{data.zipCode}</text>
      <text x="80" y="47.5" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#A07080">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 6. GUILD (組合) — Medieval guild, craft emblem, structured
// Structured compartments, emblem space, guild hierarchy
// ============================================================
const guildTemplate: TemplateDefinition = {
  id: 'classic-guild',
  name: 'GUILD',
  nameJa: '組合',
  category: 'classic',
  designer: 'Guild Master',
  description: 'ギルドの誇り。職人たちの絆が刻む紋章の力。',
  accentColor: '#1B2A4A',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="classic-guild-linen">
          <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="classic-guild-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.08" dy="0.12" />
          <feFlood floodColor="#0D1528" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="classic-guild-bg" x1="0" y1="0" x2="0.15" y2="1">
          <stop offset="0%" stopColor="#FFFEF8" />
          <stop offset="35%" stopColor="#FBF8F0" />
          <stop offset="70%" stopColor="#F8F3E8" />
          <stop offset="100%" stopColor="#F4EEE0" />
        </linearGradient>
        <radialGradient id="classic-guild-shield-glow" cx="0.17" cy="0.25" r="0.2">
          <stop offset="0%" stopColor="#1B2A4A" stopOpacity="0.03" />
          <stop offset="100%" stopColor="#1B2A4A" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#classic-guild-bg)" />
      <rect width="91" height="55" fill="url(#classic-guild-shield-glow)" />
      <rect width="91" height="55" fill="transparent" filter="url(#classic-guild-linen)" opacity="0.18" />
      {/* Guild shield emblem */}
      <path d="M10,8 L22,8 L22,16 L16,20 L10,16 Z" fill="none" stroke="#1B2A4A" strokeWidth="0.25" opacity="0.3" />
      <path d="M11.5,9.5 L20.5,9.5 L20.5,15.5 L16,18.5 L11.5,15.5 Z" fill="none" stroke="#1B2A4A" strokeWidth="0.1" opacity="0.18" />
      {/* Cross in shield */}
      <line x1="16" y1="10" x2="16" y2="17" stroke="#1B2A4A" strokeWidth="0.12" opacity="0.15" />
      <line x1="12.5" y1="13" x2="19.5" y2="13" stroke="#1B2A4A" strokeWidth="0.12" opacity="0.15" />
      {/* Small stars flanking shield */}
      <path d="M8,14 L8.3,13 L8.6,14 L7.7,13.4 L8.9,13.4 Z" fill="#C4A35A" opacity="0.2" />
      <path d="M24,14 L24.3,13 L24.6,14 L23.7,13.4 L24.9,13.4 Z" fill="#C4A35A" opacity="0.2" />
      {data.logo && <image href={data.logo} x="73" y="8" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <g filter="url(#classic-guild-shadow)">
        <text x="28" y="16" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="5.5" letterSpacing="0.5" fill="#1B2A4A">{data.nameJa}</text>
      </g>
      <text x="28" y="22" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.8" letterSpacing="0.3" fill="#4A5A7A">{data.nameEn.toUpperCase()}</text>
      <line x1="8" y1="26" x2="83" y2="26" stroke="#1B2A4A" strokeWidth="0.12" opacity="0.18" />
      <text x="10" y="33" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#6B7B9A">{data.titleJa}</text>
      <text x="10" y="39.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.6" fill="#1B2A4A">{data.companyJa}</text>
      <text x="10" y="45" fontFamily="'Cormorant Garamond', serif" fontWeight="300" fontSize="1.4" fill="#6B7B9A">{data.companyEn}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="classic-guild-linen-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="classic-guild-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.08" dy="0.12" />
          <feFlood floodColor="#0D1528" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="classic-guild-bg-b" x1="0" y1="0" x2="0.15" y2="1">
          <stop offset="0%" stopColor="#FFFEF8" />
          <stop offset="50%" stopColor="#F8F3E8" />
          <stop offset="100%" stopColor="#F4EEE0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#classic-guild-bg-b)" />
      <rect width="91" height="55" fill="transparent" filter="url(#classic-guild-linen-b)" opacity="0.18" />
      {/* Large faded guild shield watermark */}
      <path d="M35,3 L56,3 L56,18 L45.5,24 L35,18 Z" fill="none" stroke="#1B2A4A" strokeWidth="0.1" opacity="0.06" />
      <line x1="45.5" y1="4" x2="45.5" y2="22" stroke="#1B2A4A" strokeWidth="0.06" opacity="0.04" />
      <line x1="36" y1="10" x2="55" y2="10" stroke="#1B2A4A" strokeWidth="0.06" opacity="0.04" />
      {data.logo && <image href={data.logo} x="41.75" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
      <g filter="url(#classic-guild-shadow-b)">
        <text x="45.5" y="16" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#1B2A4A">{data.companyJa}</text>
      </g>
      <text x="45.5" y="20" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#4A5A7A">{data.companyEn}</text>
      <line x1="20" y1="23" x2="71" y2="23" stroke="#1B2A4A" strokeWidth="0.08" opacity="0.18" />
      <text x="45.5" y="28" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#4A5A7A">{data.tel}</text>
      <text x="45.5" y="32" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#4A5A7A">{data.email}</text>
      <text x="45.5" y="36" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#4A5A7A">{data.website}</text>
      <line x1="20" y1="39" x2="71" y2="39" stroke="#1B2A4A" strokeWidth="0.08" opacity="0.18" />
      <text x="45.5" y="43.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#8B9BBB">{'\u3012'}{data.zipCode}</text>
      <text x="45.5" y="47" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#8B9BBB">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 7. LIBRARY (書院) — Library / scholar's study
// Book-spine layout, scholarly, muted tones, bookplate style
// ============================================================
const libraryTemplate: TemplateDefinition = {
  id: 'classic-library',
  name: 'LIBRARY',
  nameJa: '書院',
  category: 'classic',
  designer: 'Librarian',
  description: '書院の静寂。積み重なる知の背表紙が並ぶ空間。',
  accentColor: '#3C2415',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="classic-library-paper">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="5" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="classic-library-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#1A0E08" floodOpacity="0.12" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="classic-library-bg" x1="0" y1="0" x2="0.2" y2="1">
          <stop offset="0%" stopColor="#F8F3E8" />
          <stop offset="35%" stopColor="#F4EEE0" />
          <stop offset="70%" stopColor="#F0EAD8" />
          <stop offset="100%" stopColor="#ECE4D0" />
        </linearGradient>
        <linearGradient id="classic-library-spine1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#4A3020" />
          <stop offset="50%" stopColor="#3C2415" />
          <stop offset="100%" stopColor="#4A3020" />
        </linearGradient>
        <linearGradient id="classic-library-spine2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7A3040" />
          <stop offset="50%" stopColor="#6B2D3E" />
          <stop offset="100%" stopColor="#7A3040" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#classic-library-bg)" />
      <rect width="91" height="55" fill="transparent" filter="url(#classic-library-paper)" opacity="0.2" />
      {/* Book spine stripes on left with gradients */}
      <rect x="0" y="0" width="4" height="55" fill="url(#classic-library-spine1)" opacity="0.85" />
      <rect x="4" y="0" width="2.5" height="55" fill="url(#classic-library-spine2)" opacity="0.65" />
      <rect x="6.5" y="0" width="1.5" height="55" fill="#1B2A4A" opacity="0.75" />
      <rect x="8" y="0" width="3" height="55" fill="#5A4030" opacity="0.55" />
      {/* Gold foil lines between spines */}
      <line x1="4" y1="0" x2="4" y2="55" stroke="#C4A35A" strokeWidth="0.12" opacity="0.35" />
      <line x1="6.5" y1="0" x2="6.5" y2="55" stroke="#C4A35A" strokeWidth="0.12" opacity="0.3" />
      <line x1="8" y1="0" x2="8" y2="55" stroke="#C4A35A" strokeWidth="0.1" opacity="0.3" />
      <line x1="11" y1="0" x2="11" y2="55" stroke="#C4A35A" strokeWidth="0.1" opacity="0.3" />
      {/* Spine title text rotated */}
      <text x="2" y="45" fontFamily="'Cormorant Garamond', serif" fontSize="0.8" fill="#C4A35A" opacity="0.4" transform="rotate(-90,2,45)" letterSpacing="0.3">MEISHI</text>
      {data.logo && <image href={data.logo} x="73" y="38" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <g filter="url(#classic-library-shadow)">
        <text x="18" y="23" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="5.5" letterSpacing="0.4" fill="#3C2415">{data.nameJa}</text>
      </g>
      <text x="18" y="29" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.8" letterSpacing="0.3" fill="#6B5040">{data.nameEn}</text>
      <text x="18" y="37" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#8B7B60">{data.titleJa}</text>
      <text x="18" y="43" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#8B7B60">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="classic-library-paper-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="5" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="classic-library-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#1A0E08" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="classic-library-bg-b" x1="0" y1="0" x2="0.2" y2="1">
          <stop offset="0%" stopColor="#F8F3E8" />
          <stop offset="50%" stopColor="#F0EAD8" />
          <stop offset="100%" stopColor="#ECE4D0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#classic-library-bg-b)" />
      <rect width="91" height="55" fill="transparent" filter="url(#classic-library-paper-b)" opacity="0.2" />
      {/* Bookplate frame */}
      <rect x="15" y="5" width="61" height="45" fill="none" stroke="#3C2415" strokeWidth="0.18" opacity="0.25" />
      <rect x="16.5" y="6.5" width="58" height="42" fill="none" stroke="#3C2415" strokeWidth="0.08" opacity="0.15" />
      {/* Ex Libris text */}
      <text x="45.5" y="11" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="600" fontSize="1.2" letterSpacing="0.5" fill="#3C2415" opacity="0.4">EX LIBRIS</text>
      {data.logo && <image href={data.logo} x="41.75" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
      <g filter="url(#classic-library-shadow-b)">
        <text x="45.5" y="18" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#3C2415">{data.companyJa}</text>
      </g>
      <text x="45.5" y="22" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#6B5040">{data.companyEn}</text>
      <line x1="25" y1="25" x2="66" y2="25" stroke="#3C2415" strokeWidth="0.08" opacity="0.2" />
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#6B5040">{data.tel}</text>
      <text x="45.5" y="34" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#6B5040">{data.email}</text>
      <text x="45.5" y="38" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#6B5040">{data.website}</text>
      <line x1="25" y1="41" x2="66" y2="41" stroke="#3C2415" strokeWidth="0.08" opacity="0.2" />
      <text x="45.5" y="45" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#8B7B60">{'\u3012'}{data.zipCode}</text>
      <text x="45.5" y="48.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#8B7B60">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 8. CROWN (王冠) — Royal, regal, crown motif
// Gold and navy, regal symmetry, crown symbol
// ============================================================
const crownTemplate: TemplateDefinition = {
  id: 'classic-crown',
  name: 'CROWN',
  nameJa: '王冠',
  category: 'classic',
  designer: 'Royal Designer',
  description: '王冠の威光。頂に輝く黄金の秩序。',
  accentColor: '#C4A35A',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="classic-crown-velvet">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="5" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="classic-crown-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.4" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.15" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="classic-crown-bg" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#1E3050" />
          <stop offset="30%" stopColor="#1B2A4A" />
          <stop offset="70%" stopColor="#162440" />
          <stop offset="100%" stopColor="#121E38" />
        </linearGradient>
        <radialGradient id="classic-crown-glow" cx="0.5" cy="0.3" r="0.5">
          <stop offset="0%" stopColor="#C4A35A" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#C4A35A" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="classic-crown-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D4B86A" />
          <stop offset="50%" stopColor="#C4A35A" />
          <stop offset="100%" stopColor="#B8954A" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#classic-crown-bg)" />
      <rect width="91" height="55" fill="url(#classic-crown-glow)" />
      <rect width="91" height="55" fill="transparent" filter="url(#classic-crown-velvet)" opacity="0.15" />
      {/* Crown symbol */}
      <path d="M40,6 L42,10 L44,6 L45.5,11 L47,6 L49,10 L51,6 L51,13 L40,13 Z" fill="none" stroke="url(#classic-crown-gold)" strokeWidth="0.22" opacity="0.5" />
      <line x1="40" y1="14" x2="51" y2="14" stroke="#C4A35A" strokeWidth="0.18" opacity="0.4" />
      {/* Three gems */}
      <circle cx="42" cy="10.5" r="0.35" fill="#C4A35A" opacity="0.45" />
      <circle cx="45.5" cy="11.5" r="0.45" fill="#D4B86A" opacity="0.5" />
      <circle cx="49" cy="10.5" r="0.35" fill="#C4A35A" opacity="0.45" />
      {/* Regal side flourishes */}
      <path d="M32,12 Q36,10 39,12" fill="none" stroke="#C4A35A" strokeWidth="0.08" opacity="0.2" />
      <path d="M52,12 Q55,10 59,12" fill="none" stroke="#C4A35A" strokeWidth="0.08" opacity="0.2" />
      {data.logo && <image href={data.logo} x="73" y="38" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <g filter="url(#classic-crown-shadow)">
        <text x="45.5" y="26" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="5.5" letterSpacing="0.8" fill="#C4A35A">{data.nameJa}</text>
      </g>
      <text x="45.5" y="32" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="2" letterSpacing="0.5" fill="#8B8050">{data.nameEn.toUpperCase()}</text>
      <line x1="25" y1="36" x2="66" y2="36" stroke="#C4A35A" strokeWidth="0.1" opacity="0.2" />
      <text x="45.5" y="41" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#8B8B6B">{data.titleJa}</text>
      <text x="45.5" y="47" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#8B8B6B">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="classic-crown-velvet-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="5" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="classic-crown-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.4" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.12" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="classic-crown-bg-b" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#1E3050" />
          <stop offset="50%" stopColor="#1B2A4A" />
          <stop offset="100%" stopColor="#121E38" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#classic-crown-bg-b)" />
      <rect width="91" height="55" fill="transparent" filter="url(#classic-crown-velvet-b)" opacity="0.15" />
      {/* Subtle crown watermark */}
      <path d="M38,3 L41,8 L43.5,3 L45.5,9 L47.5,3 L50,8 L53,3 L53,11 L38,11 Z" fill="none" stroke="#C4A35A" strokeWidth="0.08" opacity="0.08" />
      {data.logo && <image href={data.logo} x="41.75" y="3" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
      <g filter="url(#classic-crown-shadow-b)">
        <text x="45.5" y="17" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#C4A35A">{data.companyJa}</text>
      </g>
      <text x="45.5" y="21" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#8B8050">{data.companyEn.toUpperCase()}</text>
      <line x1="20" y1="24.5" x2="71" y2="24.5" stroke="#C4A35A" strokeWidth="0.08" opacity="0.18" />
      <text x="45.5" y="29" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#8B8050">{data.tel}</text>
      <text x="45.5" y="33" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#8B8050">{data.email}</text>
      <text x="45.5" y="37" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#8B8050">{data.website}</text>
      <line x1="20" y1="40.5" x2="71" y2="40.5" stroke="#C4A35A" strokeWidth="0.08" opacity="0.18" />
      <text x="45.5" y="45" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#8B8B6B">{'\u3012'}{data.zipCode}</text>
      <text x="45.5" y="48.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#8B8B6B">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 9. COURT (宮廷) — Court/palace style, baroque ornament
// Ornate frames, fleur-de-lis hints, palatial grandeur
// ============================================================
const courtTemplate: TemplateDefinition = {
  id: 'classic-court',
  name: 'COURT',
  nameJa: '宮廷',
  category: 'classic',
  designer: 'Court Designer',
  description: '宮廷の華麗さ。バロックの装飾が彩る壮麗な空間。',
  accentColor: '#6B2D3E',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="classic-court-parchment">
          <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="classic-court-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.08" dy="0.12" />
          <feFlood floodColor="#2A0F18" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="classic-court-bg" x1="0" y1="0" x2="0.2" y2="1">
          <stop offset="0%" stopColor="#FFFEF8" />
          <stop offset="30%" stopColor="#FBF8F2" />
          <stop offset="70%" stopColor="#F8F4EA" />
          <stop offset="100%" stopColor="#F5F0E2" />
        </linearGradient>
        <radialGradient id="classic-court-warmth" cx="0.5" cy="0.2" r="0.5">
          <stop offset="0%" stopColor="#E8D4B8" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#E8D4B8" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#classic-court-bg)" />
      <rect width="91" height="55" fill="url(#classic-court-warmth)" />
      <rect width="91" height="55" fill="transparent" filter="url(#classic-court-parchment)" opacity="0.18" />
      {/* Ornate top border - baroque curves */}
      <path d="M10,6 Q20,3 30,6 Q40,3 45.5,6 Q51,3 61,6 Q71,3 81,6" fill="none" stroke="#6B2D3E" strokeWidth="0.18" opacity="0.3" />
      <path d="M10,7.5 Q20,5 30,7.5 Q40,5 45.5,7.5 Q51,5 61,7.5 Q71,5 81,7.5" fill="none" stroke="#6B2D3E" strokeWidth="0.08" opacity="0.18" />
      {/* Bottom border mirror */}
      <path d="M10,49 Q20,52 30,49 Q40,52 45.5,49 Q51,52 61,49 Q71,52 81,49" fill="none" stroke="#6B2D3E" strokeWidth="0.18" opacity="0.3" />
      <path d="M10,47.5 Q20,50 30,47.5 Q40,50 45.5,47.5 Q51,50 61,47.5 Q71,50 81,47.5" fill="none" stroke="#6B2D3E" strokeWidth="0.08" opacity="0.18" />
      {/* Center fleur-de-lis motif */}
      <path d="M44.5,10 Q45.5,8 46.5,10" fill="none" stroke="#C4A35A" strokeWidth="0.15" opacity="0.3" />
      <path d="M43,11.5 Q45.5,8.5 48,11.5" fill="none" stroke="#C4A35A" strokeWidth="0.1" opacity="0.25" />
      <line x1="44" y1="12.5" x2="47" y2="12.5" stroke="#C4A35A" strokeWidth="0.08" opacity="0.2" />
      {data.logo && <image href={data.logo} x="73" y="38" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <g filter="url(#classic-court-shadow)">
        <text x="45.5" y="25" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="600" fontSize="5.5" letterSpacing="0.5" fill="#3C1A28">{data.nameJa}</text>
      </g>
      <text x="45.5" y="31" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="300" fontSize="2" letterSpacing="0.4" fontStyle="italic" fill="#6B2D3E">{data.nameEn}</text>
      <text x="45.5" y="38" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#8B5060">{data.titleJa}</text>
      <text x="45.5" y="44" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#8B5060">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="classic-court-parchment-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="classic-court-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.08" dy="0.12" />
          <feFlood floodColor="#2A0F18" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="classic-court-bg-b" x1="0" y1="0" x2="0.2" y2="1">
          <stop offset="0%" stopColor="#FFFEF8" />
          <stop offset="50%" stopColor="#F8F4EA" />
          <stop offset="100%" stopColor="#F5F0E2" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#classic-court-bg-b)" />
      <rect width="91" height="55" fill="transparent" filter="url(#classic-court-parchment-b)" opacity="0.18" />
      {/* Baroque borders */}
      <path d="M10,6 Q20,3 30,6 Q40,3 45.5,6 Q51,3 61,6 Q71,3 81,6" fill="none" stroke="#6B2D3E" strokeWidth="0.12" opacity="0.18" />
      <path d="M10,49 Q20,52 30,49 Q40,52 45.5,49 Q51,52 61,49 Q71,52 81,49" fill="none" stroke="#6B2D3E" strokeWidth="0.12" opacity="0.18" />
      {data.logo && <image href={data.logo} x="41.75" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
      <g filter="url(#classic-court-shadow-b)">
        <text x="45.5" y="17" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="600" fontSize="2.5" fill="#3C1A28">{data.companyJa}</text>
      </g>
      <text x="45.5" y="21" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="300" fontSize="1.5" fontStyle="italic" fill="#6B2D3E">{data.companyEn}</text>
      <line x1="20" y1="24" x2="71" y2="24" stroke="#6B2D3E" strokeWidth="0.08" opacity="0.18" />
      <text x="45.5" y="29" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#8B5060">{data.tel}</text>
      <text x="45.5" y="33" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#8B5060">{data.email}</text>
      <text x="45.5" y="37" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#8B5060">{data.website}</text>
      <line x1="20" y1="40" x2="71" y2="40" stroke="#6B2D3E" strokeWidth="0.08" opacity="0.18" />
      <text x="45.5" y="44.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#A07080">{'\u3012'}{data.zipCode}</text>
      <text x="45.5" y="48" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#A07080">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 10. MANOR (館) — English manor house, country estate
// Deep green and brown, countryside estate feel, landed gentry
// ============================================================
const manorTemplate: TemplateDefinition = {
  id: 'classic-manor',
  name: 'MANOR',
  nameJa: '館',
  category: 'classic',
  designer: 'Estate Designer',
  description: '英国邸宅の風格。緑の庭園に佇む館の気品。',
  accentColor: '#2A4A2A',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="classic-manor-linen">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="classic-manor-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.08" dy="0.12" />
          <feFlood floodColor="#0A200A" floodOpacity="0.1" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="classic-manor-bg" x1="0" y1="0" x2="0.15" y2="1">
          <stop offset="0%" stopColor="#F8F5EC" />
          <stop offset="35%" stopColor="#F4F0E4" />
          <stop offset="70%" stopColor="#F0ECDC" />
          <stop offset="100%" stopColor="#ECE8D4" />
        </linearGradient>
        <linearGradient id="classic-manor-green" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3A5A3A" />
          <stop offset="50%" stopColor="#2A4A2A" />
          <stop offset="100%" stopColor="#1E3A1E" />
        </linearGradient>
        <linearGradient id="classic-manor-gold-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#C4A35A" stopOpacity="0" />
          <stop offset="20%" stopColor="#C4A35A" stopOpacity="0.4" />
          <stop offset="80%" stopColor="#C4A35A" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#C4A35A" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#classic-manor-bg)" />
      <rect width="91" height="55" fill="transparent" filter="url(#classic-manor-linen)" opacity="0.18" />
      {/* Dark green top band */}
      <rect x="0" y="0" width="91" height="8" fill="url(#classic-manor-green)" opacity="0.9" />
      <line x1="0" y1="8" x2="91" y2="8" stroke="url(#classic-manor-gold-line)" strokeWidth="0.25" />
      {/* Company name in top band */}
      <text x="45.5" y="5.5" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.6" letterSpacing="0.5" fill="#C4A35A">{data.companyEn.toUpperCase()}</text>
      {/* Leaf ornament detail */}
      <path d="M40,5.5 Q41,4.5 42,5.5" fill="none" stroke="#C4A35A" strokeWidth="0.06" opacity="0.3" />
      <path d="M49,5.5 Q50,4.5 51,5.5" fill="none" stroke="#C4A35A" strokeWidth="0.06" opacity="0.3" />
      {data.logo && <image href={data.logo} x="73" y="38" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <g filter="url(#classic-manor-shadow)">
        <text x="45.5" y="24" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="5.5" letterSpacing="0.5" fill="#2A4A2A">{data.nameJa}</text>
      </g>
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="2" letterSpacing="0.3" fill="#4A6A4A">{data.nameEn}</text>
      <text x="45.5" y="37.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#6A8A6A">{data.titleJa}</text>
      <text x="45.5" y="43.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.6" fill="#2A4A2A">{data.companyJa}</text>
      {/* Green bottom band */}
      <line x1="0" y1="47" x2="91" y2="47" stroke="url(#classic-manor-gold-line)" strokeWidth="0.25" />
      <rect x="0" y="47" width="91" height="8" fill="url(#classic-manor-green)" opacity="0.9" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="classic-manor-linen-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="classic-manor-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.08" dy="0.12" />
          <feFlood floodColor="#0A200A" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="classic-manor-bg-b" x1="0" y1="0" x2="0.15" y2="1">
          <stop offset="0%" stopColor="#F8F5EC" />
          <stop offset="50%" stopColor="#F0ECDC" />
          <stop offset="100%" stopColor="#ECE8D4" />
        </linearGradient>
        <linearGradient id="classic-manor-green-b" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3A5A3A" />
          <stop offset="50%" stopColor="#2A4A2A" />
          <stop offset="100%" stopColor="#1E3A1E" />
        </linearGradient>
        <linearGradient id="classic-manor-gold-line-b" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#C4A35A" stopOpacity="0" />
          <stop offset="20%" stopColor="#C4A35A" stopOpacity="0.4" />
          <stop offset="80%" stopColor="#C4A35A" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#C4A35A" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#classic-manor-bg-b)" />
      <rect width="91" height="55" fill="transparent" filter="url(#classic-manor-linen-b)" opacity="0.18" />
      <rect x="0" y="0" width="91" height="6" fill="url(#classic-manor-green-b)" opacity="0.9" />
      <line x1="0" y1="6" x2="91" y2="6" stroke="url(#classic-manor-gold-line-b)" strokeWidth="0.25" />
      <text x="45.5" y="4.2" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.4" letterSpacing="0.5" fill="#C4A35A">{data.companyEn.toUpperCase()}</text>
      {data.logo && <image href={data.logo} x="41.75" y="7" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
      <g filter="url(#classic-manor-shadow-b)">
        <text x="45.5" y="19" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#2A4A2A">{data.companyJa}</text>
      </g>
      <line x1="25" y1="22" x2="66" y2="22" stroke="#2A4A2A" strokeWidth="0.08" opacity="0.18" />
      <text x="45.5" y="27" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#4A6A4A">{data.tel}</text>
      <text x="45.5" y="31" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#4A6A4A">{data.email}</text>
      <text x="45.5" y="35" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#4A6A4A">{data.website}</text>
      <line x1="25" y1="38" x2="66" y2="38" stroke="#2A4A2A" strokeWidth="0.08" opacity="0.18" />
      <text x="45.5" y="42.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#6A8A6A">{'\u3012'}{data.zipCode}</text>
      <text x="45.5" y="46" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#6A8A6A">{data.addressJa}</text>
      <line x1="0" y1="49" x2="91" y2="49" stroke="url(#classic-manor-gold-line-b)" strokeWidth="0.25" />
      <rect x="0" y="49" width="91" height="6" fill="url(#classic-manor-green-b)" opacity="0.9" />
    </g>
  ),
};

export const classicTemplates: TemplateDefinition[] = [
  romanTemplate,
  copperplateTemplate,
  linenTemplate,
  embassyTemplate,
  heritageTemplate,
  guildTemplate,
  libraryTemplate,
  crownTemplate,
  courtTemplate,
  manorTemplate,
];
