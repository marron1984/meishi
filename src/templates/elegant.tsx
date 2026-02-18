import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. GRACE (雅) — Refined grace with thin borders
// Delicate gold accents, serif typography, ample breathing room
// ============================================================
const graceTemplate: TemplateDefinition = {
  id: 'elegant-grace',
  name: 'GRACE',
  nameJa: '雅',
  category: 'elegant',
  designer: 'Coco Chanel',
  description: '雅の極み。繊細な金の縁取りと上質な余白。',
  accentColor: '#C5A572',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="elegant-grace-front-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFF8" />
          <stop offset="50%" stopColor="#FFFFF0" />
          <stop offset="100%" stopColor="#FAF5E8" />
        </linearGradient>
        <linearGradient id="elegant-grace-front-gold" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C5A572" />
          <stop offset="50%" stopColor="#D4B882" />
          <stop offset="100%" stopColor="#C5A572" />
        </linearGradient>
        <filter id="elegant-grace-front-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
        </filter>
        <filter id="elegant-grace-front-shadow">
          <feDropShadow dx="0.12" dy="0.15" stdDeviation="0.25" floodColor="#8B7355" floodOpacity="0.12" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#elegant-grace-front-bg)" />
      {/* Double gold border */}
      <rect x="5" y="4" width="81" height="47" fill="none" stroke="url(#elegant-grace-front-gold)" strokeWidth="0.18" />
      <rect x="6.5" y="5.5" width="78" height="44" fill="none" stroke="#C5A572" strokeWidth="0.06" strokeDasharray="0.6,1.2" opacity="0.4" />
      {/* Corner ornaments with flourish */}
      <path d="M 5,7.5 L 5,4 L 8.5,4" fill="none" stroke="#C5A572" strokeWidth="0.12" />
      <circle cx="5" cy="4" r="0.4" fill="#D4B882" opacity="0.6" />
      <path d="M 86,7.5 L 86,4 L 82.5,4" fill="none" stroke="#C5A572" strokeWidth="0.12" />
      <circle cx="86" cy="4" r="0.4" fill="#D4B882" opacity="0.6" />
      <path d="M 5,47.5 L 5,51 L 8.5,51" fill="none" stroke="#C5A572" strokeWidth="0.12" />
      <circle cx="5" cy="51" r="0.4" fill="#D4B882" opacity="0.6" />
      <path d="M 86,47.5 L 86,51 L 82.5,51" fill="none" stroke="#C5A572" strokeWidth="0.12" />
      <circle cx="86" cy="51" r="0.4" fill="#D4B882" opacity="0.6" />
      {/* Scrollwork divider */}
      <path d="M 30,24.5 Q 37,22.5 45.5,25 Q 54,22.5 61,24.5" fill="none" stroke="#C5A572" strokeWidth="0.08" opacity="0.5" />
      <circle cx="45.5" cy="24.5" r="0.2" fill="#C5A572" opacity="0.4" />
      {/* Name */}
      <text x="45.5" y="22" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="300" fontSize="2.8" letterSpacing="1.4" fill="url(#elegant-grace-front-gold)">{data.nameEn.toUpperCase()}</text>
      <text x="45.5" y="33" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="6" letterSpacing="2" fill="#3a3530" filter="url(#elegant-grace-front-shadow)">{data.nameJa}</text>
      <text x="45.5" y="39.5" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="300" fontSize="1.9" letterSpacing="0.6" fill="#999080">{data.titleJa}</text>
      {/* Decorative diamond */}
      <path d="M 45.5,43 L 46.3,44.2 L 45.5,45.4 L 44.7,44.2 Z" fill="#C5A572" opacity="0.25" />
      {data.logo && <image href={data.logo} x="8" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="elegant-grace-back-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFF8" />
          <stop offset="100%" stopColor="#FAF5E8" />
        </linearGradient>
        <linearGradient id="elegant-grace-back-gold" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C5A572" />
          <stop offset="50%" stopColor="#D4B882" />
          <stop offset="100%" stopColor="#C5A572" />
        </linearGradient>
        <filter id="elegant-grace-back-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
        </filter>
        <filter id="elegant-grace-back-shadow">
          <feDropShadow dx="0.08" dy="0.1" stdDeviation="0.15" floodColor="#8B7355" floodOpacity="0.1" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#elegant-grace-back-bg)" />
      {/* Matching border */}
      <rect x="5" y="4" width="81" height="47" fill="none" stroke="url(#elegant-grace-back-gold)" strokeWidth="0.15" />
      <rect x="6.5" y="5.5" width="78" height="44" fill="none" stroke="#C5A572" strokeWidth="0.06" strokeDasharray="0.6,1.2" opacity="0.35" />
      {/* Corner ornaments */}
      <circle cx="5" cy="4" r="0.35" fill="#D4B882" opacity="0.5" />
      <circle cx="86" cy="4" r="0.35" fill="#D4B882" opacity="0.5" />
      <circle cx="5" cy="51" r="0.35" fill="#D4B882" opacity="0.5" />
      <circle cx="86" cy="51" r="0.35" fill="#D4B882" opacity="0.5" />
      {/* Top center ornament */}
      <path d="M 40,7 Q 42.5,5.5 45.5,7 Q 48.5,5.5 51,7" fill="none" stroke="#C5A572" strokeWidth="0.08" opacity="0.4" />
      <circle cx="45.5" cy="6" r="0.2" fill="#C5A572" opacity="0.35" />
      {/* Company */}
      <text x="45.5" y="14" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="2.5" letterSpacing="0.8" fill="#3a3530">{data.companyJa}</text>
      <text x="45.5" y="18" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="300" fontSize="1.5" letterSpacing="0.5" fill="#B0A080">{data.companyEn}</text>
      <text x="45.5" y="22" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#C5A572">{data.titleJa}</text>
      {/* Scrollwork divider */}
      <path d="M 30,24.5 Q 37,23 45.5,25 Q 54,23 61,24.5" fill="none" stroke="#C5A572" strokeWidth="0.06" opacity="0.35" />
      {/* Contact */}
      <text x="45.5" y="29.5" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#8A7A68">{data.tel}</text>
      <text x="45.5" y="33.5" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#8A7A68">{data.email}</text>
      <text x="45.5" y="37.5" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#8A7A68">{data.website}</text>
      <line x1="28" y1="40" x2="63" y2="40" stroke="#C5A572" strokeWidth="0.06" opacity="0.3" />
      <text x="45.5" y="44.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#B0A090">〒{data.zipCode}</text>
      <text x="45.5" y="48" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#B0A090">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="74" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 2. EMPRESS (妃) — Imperial elegance
// Rich charcoal with gold lettering, centered symmetry
// ============================================================
const empressTemplate: TemplateDefinition = {
  id: 'elegant-empress',
  name: 'EMPRESS',
  nameJa: '妃',
  category: 'elegant',
  designer: 'Hubert de Givenchy',
  description: '皇妃の風格。漆黒と金が織りなす帝国の美。',
  accentColor: '#C5A572',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="elegant-empress-front-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E1C18" />
          <stop offset="50%" stopColor="#171512" />
          <stop offset="100%" stopColor="#0F0E0C" />
        </linearGradient>
        <linearGradient id="elegant-empress-front-gold" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A08850" />
          <stop offset="30%" stopColor="#D4B882" />
          <stop offset="70%" stopColor="#C5A572" />
          <stop offset="100%" stopColor="#A08850" />
        </linearGradient>
        <filter id="elegant-empress-front-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
        </filter>
        <filter id="elegant-empress-front-shadow">
          <feDropShadow dx="0.15" dy="0.2" stdDeviation="0.4" floodColor="#C5A572" floodOpacity="0.2" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#elegant-empress-front-bg)" />
      {/* Gold ornamental lines */}
      <line x1="10" y1="8" x2="81" y2="8" stroke="url(#elegant-empress-front-gold)" strokeWidth="0.1" opacity="0.5" />
      <line x1="12" y1="9" x2="79" y2="9" stroke="#C5A572" strokeWidth="0.03" opacity="0.25" />
      <line x1="10" y1="46" x2="81" y2="46" stroke="url(#elegant-empress-front-gold)" strokeWidth="0.1" opacity="0.5" />
      <line x1="12" y1="47" x2="79" y2="47" stroke="#C5A572" strokeWidth="0.03" opacity="0.25" />
      {/* Diamond ornament chain */}
      <polygon points="45.5,12 46.5,13.2 45.5,14.4 44.5,13.2" fill="#C5A572" opacity="0.35" />
      <polygon points="40,12.5 40.5,13.2 40,13.9 39.5,13.2" fill="#C5A572" opacity="0.2" />
      <polygon points="51,12.5 51.5,13.2 51,13.9 50.5,13.2" fill="#C5A572" opacity="0.2" />
      <line x1="36" y1="13.2" x2="39.5" y2="13.2" stroke="#C5A572" strokeWidth="0.04" opacity="0.2" />
      <line x1="41" y1="13.2" x2="44.5" y2="13.2" stroke="#C5A572" strokeWidth="0.04" opacity="0.25" />
      <line x1="46.5" y1="13.2" x2="50" y2="13.2" stroke="#C5A572" strokeWidth="0.04" opacity="0.25" />
      <line x1="51.5" y1="13.2" x2="55" y2="13.2" stroke="#C5A572" strokeWidth="0.04" opacity="0.2" />
      {/* Name */}
      <text x="45.5" y="25" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="6.5" letterSpacing="2" fill="#C5A572" filter="url(#elegant-empress-front-shadow)">{data.nameJa}</text>
      <text x="45.5" y="31.5" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="300" fontSize="2" letterSpacing="1" fill="#8A7A58">{data.nameEn.toUpperCase()}</text>
      <text x="45.5" y="38" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.9" fill="#6A5A40">{data.titleJa}</text>
      {/* Bottom diamond */}
      <path d="M 43.5,42 L 45.5,40.5 L 47.5,42 L 45.5,43.5 Z" fill="none" stroke="#C5A572" strokeWidth="0.06" opacity="0.25" />
      {data.logo && <image href={data.logo} x="8" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="elegant-empress-back-bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1E1C18" />
          <stop offset="100%" stopColor="#121110" />
        </linearGradient>
        <linearGradient id="elegant-empress-back-gold" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A08850" />
          <stop offset="50%" stopColor="#D4B882" />
          <stop offset="100%" stopColor="#A08850" />
        </linearGradient>
        <filter id="elegant-empress-back-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
        </filter>
        <filter id="elegant-empress-back-shadow">
          <feDropShadow dx="0.08" dy="0.1" stdDeviation="0.2" floodColor="#C5A572" floodOpacity="0.15" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#elegant-empress-back-bg)" />
      <line x1="10" y1="8" x2="81" y2="8" stroke="url(#elegant-empress-back-gold)" strokeWidth="0.08" opacity="0.4" />
      <line x1="10" y1="46" x2="81" y2="46" stroke="url(#elegant-empress-back-gold)" strokeWidth="0.08" opacity="0.4" />
      {/* Crown ornament */}
      <polygon points="45.5,6 46.2,7.5 45.5,7 44.8,7.5" fill="#C5A572" opacity="0.3" />
      <line x1="42" y1="7.5" x2="49" y2="7.5" stroke="#C5A572" strokeWidth="0.04" opacity="0.2" />
      {/* Company */}
      <text x="10" y="15" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="2.5" letterSpacing="0.6" fill="#C5A572">{data.companyJa}</text>
      <text x="10" y="19.5" fontFamily="'Cormorant Garamond', serif" fontWeight="300" fontSize="1.5" letterSpacing="0.5" fill="#8A7A58">{data.companyEn}</text>
      <text x="10" y="24" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#6A5A40">{data.titleJa}</text>
      <line x1="10" y1="26.5" x2="81" y2="26.5" stroke="url(#elegant-empress-back-gold)" strokeWidth="0.05" opacity="0.25" />
      {/* Contact */}
      <text x="10" y="31.5" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#8A7A58">{data.tel}</text>
      <text x="10" y="35.5" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#8A7A58">{data.email}</text>
      <text x="10" y="39.5" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#8A7A58">{data.website}</text>
      <line x1="10" y1="42" x2="81" y2="42" stroke="#3a3530" strokeWidth="0.04" opacity="0.3" />
      <text x="10" y="45.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#6A5A40">〒{data.zipCode} {data.addressJa}</text>
      {data.logo && <image href={data.logo} x="74" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 3. VERSAILLES (宮) — Palace-inspired ornamental
// Ornamental curved frames, lavish gold detailing
// ============================================================
const versaillesTemplate: TemplateDefinition = {
  id: 'elegant-versailles',
  name: 'VERSAILLES',
  nameJa: '宮',
  category: 'elegant',
  designer: 'Marie Antoinette',
  description: '宮殿の華麗さ。渦巻く装飾が織りなす豪華絢爛。',
  accentColor: '#B8941F',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="elegant-versailles-front-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFF5" />
          <stop offset="40%" stopColor="#FFFFF0" />
          <stop offset="100%" stopColor="#F8F2E5" />
        </linearGradient>
        <linearGradient id="elegant-versailles-front-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4A520" />
          <stop offset="50%" stopColor="#B8941F" />
          <stop offset="100%" stopColor="#9A7A10" />
        </linearGradient>
        <filter id="elegant-versailles-front-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="5" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
        </filter>
        <filter id="elegant-versailles-front-shadow">
          <feDropShadow dx="0.12" dy="0.15" stdDeviation="0.25" floodColor="#8B7020" floodOpacity="0.12" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#elegant-versailles-front-bg)" />
      {/* Ornamental border */}
      <rect x="8" y="6" width="75" height="43" fill="none" stroke="url(#elegant-versailles-front-gold)" strokeWidth="0.15" opacity="0.4" />
      {/* Ornate scroll decorations - corners */}
      <path d="M 10,9 Q 15,5.5 20,9 Q 17.5,12 15,8.5" fill="none" stroke="#B8941F" strokeWidth="0.1" opacity="0.25" />
      <path d="M 71,9 Q 76,5.5 81,9 Q 78.5,12 76,8.5" fill="none" stroke="#B8941F" strokeWidth="0.1" opacity="0.25" />
      <path d="M 10,46 Q 15,49.5 20,46 Q 17.5,43 15,46.5" fill="none" stroke="#B8941F" strokeWidth="0.1" opacity="0.25" />
      <path d="M 71,46 Q 76,49.5 81,46 Q 78.5,43 76,46.5" fill="none" stroke="#B8941F" strokeWidth="0.1" opacity="0.25" />
      {/* Top center scrollwork */}
      <path d="M 35,8 Q 40,5 45.5,7.5 Q 51,5 56,8" fill="none" stroke="#B8941F" strokeWidth="0.1" opacity="0.3" />
      <circle cx="45.5" cy="6.5" r="0.3" fill="#B8941F" opacity="0.25" />
      {/* Name */}
      <text x="45.5" y="22" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="600" fontSize="2.5" letterSpacing="1.2" fill="url(#elegant-versailles-front-gold)">{data.nameEn.toUpperCase()}</text>
      <line x1="22" y1="24.5" x2="69" y2="24.5" stroke="#B8941F" strokeWidth="0.05" opacity="0.25" />
      <text x="45.5" y="33" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="6" letterSpacing="1.5" fill="#4A3A20" filter="url(#elegant-versailles-front-shadow)">{data.nameJa}</text>
      {/* Ornament below name */}
      <path d="M 38,36.5 Q 41.5,35 45.5,37 Q 49.5,35 53,36.5" fill="none" stroke="#B8941F" strokeWidth="0.08" opacity="0.3" />
      <text x="45.5" y="42" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.9" letterSpacing="0.5" fill="#B0A070">{data.titleJa}</text>
      {/* Bottom scrollwork */}
      <path d="M 38,47 Q 42,45.5 45.5,47 Q 49,45.5 53,47" fill="none" stroke="#B8941F" strokeWidth="0.06" opacity="0.2" />
      {data.logo && <image href={data.logo} x="8" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="elegant-versailles-back-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFF5" />
          <stop offset="100%" stopColor="#F8F2E5" />
        </linearGradient>
        <linearGradient id="elegant-versailles-back-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4A520" />
          <stop offset="100%" stopColor="#9A7A10" />
        </linearGradient>
        <filter id="elegant-versailles-back-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="5" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
        </filter>
        <filter id="elegant-versailles-back-shadow">
          <feDropShadow dx="0.08" dy="0.1" stdDeviation="0.18" floodColor="#8B7020" floodOpacity="0.1" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#elegant-versailles-back-bg)" />
      <rect x="8" y="6" width="75" height="43" fill="none" stroke="url(#elegant-versailles-back-gold)" strokeWidth="0.1" opacity="0.3" />
      {/* Corner scrolls */}
      <path d="M 10,9 Q 14,6 18,9" fill="none" stroke="#B8941F" strokeWidth="0.08" opacity="0.2" />
      <path d="M 73,9 Q 77,6 81,9" fill="none" stroke="#B8941F" strokeWidth="0.08" opacity="0.2" />
      <path d="M 10,46 Q 14,49 18,46" fill="none" stroke="#B8941F" strokeWidth="0.08" opacity="0.2" />
      <path d="M 73,46 Q 77,49 81,46" fill="none" stroke="#B8941F" strokeWidth="0.08" opacity="0.2" />
      {/* Top scrollwork */}
      <path d="M 38,8 Q 42,6.5 45.5,8 Q 49,6.5 53,8" fill="none" stroke="#B8941F" strokeWidth="0.06" opacity="0.2" />
      {/* Company */}
      <text x="10" y="15" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="2.5" letterSpacing="0.8" fill="#4A3A20">{data.companyJa}</text>
      <text x="10" y="19.5" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" letterSpacing="0.5" fill="#B8941F">{data.companyEn}</text>
      <text x="10" y="23.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#B0A070">{data.titleJa}</text>
      <line x1="10" y1="26" x2="81" y2="26" stroke="url(#elegant-versailles-back-gold)" strokeWidth="0.06" opacity="0.25" />
      {/* Contact */}
      <text x="10" y="31" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#7A6A40">{data.tel}</text>
      <text x="10" y="35" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#7A6A40">{data.email}</text>
      <text x="10" y="39" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#7A6A40">{data.website}</text>
      <line x1="10" y1="41.5" x2="81" y2="41.5" stroke="#ddd0b0" strokeWidth="0.05" opacity="0.3" />
      <text x="10" y="45.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#B0A070">〒{data.zipCode}</text>
      <text x="10" y="49" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#B0A070">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="74" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 4. ROSE (薔薇) — Dusty rose romantic
// Soft pink tones with thin rose-colored lines
// ============================================================
const roseTemplate: TemplateDefinition = {
  id: 'elegant-rose',
  name: 'ROSE',
  nameJa: '薔薇',
  category: 'elegant',
  designer: 'Christian Dior',
  description: '薔薇色の夢。淡いピンクと繊細な線が紡ぐロマンス。',
  accentColor: '#DCAE96',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="elegant-rose-front-bg" cx="50%" cy="50%" r="65%">
          <stop offset="0%" stopColor="#FFF8F5" />
          <stop offset="100%" stopColor="#FAF0EC" />
        </radialGradient>
        <radialGradient id="elegant-rose-front-bloom" cx="80%" cy="18%" r="25%">
          <stop offset="0%" stopColor="#DCAE96" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#DCAE96" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="elegant-rose-front-accent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8BCA8" />
          <stop offset="100%" stopColor="#C89A82" />
        </linearGradient>
        <filter id="elegant-rose-front-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
        </filter>
        <filter id="elegant-rose-front-shadow">
          <feDropShadow dx="0.1" dy="0.12" stdDeviation="0.2" floodColor="#8B6050" floodOpacity="0.1" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#elegant-rose-front-bg)" />
      <rect width="91" height="55" fill="url(#elegant-rose-front-bloom)" />
      {/* Rose petal curves - top right */}
      <path d="M 75,12 Q 78,8 82,12 Q 78,16 75,12" fill="none" stroke="#DCAE96" strokeWidth="0.08" opacity="0.2" />
      <path d="M 73,14 Q 78,10 83,14" fill="none" stroke="#DCAE96" strokeWidth="0.06" opacity="0.15" />
      <circle cx="78" cy="12" r="0.3" fill="#DCAE96" opacity="0.2" />
      {/* Rose petal - bottom left */}
      <path d="M 9,43 Q 12,39 16,43 Q 12,47 9,43" fill="none" stroke="#DCAE96" strokeWidth="0.06" opacity="0.15" />
      <circle cx="12" cy="43" r="0.2" fill="#DCAE96" opacity="0.15" />
      {/* Name */}
      <text x="45.5" y="20" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="300" fontSize="2.5" letterSpacing="1" fill="url(#elegant-rose-front-accent)">{data.nameEn.toUpperCase()}</text>
      <line x1="28" y1="23" x2="63" y2="23" stroke="#DCAE96" strokeWidth="0.06" opacity="0.4" />
      <text x="45.5" y="32" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="6" letterSpacing="1" fill="#6A4A3A" filter="url(#elegant-rose-front-shadow)">{data.nameJa}</text>
      <text x="45.5" y="38.5" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="300" fontSize="1.9" fill="#C0A090">{data.titleJa}</text>
      {/* Dot ornaments */}
      <circle cx="43" cy="42.5" r="0.3" fill="#DCAE96" opacity="0.3" />
      <circle cx="45.5" cy="42" r="0.4" fill="#DCAE96" opacity="0.35" />
      <circle cx="48" cy="42.5" r="0.3" fill="#DCAE96" opacity="0.3" />
      {data.logo && <image href={data.logo} x="8" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="elegant-rose-back-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF8F5" />
          <stop offset="100%" stopColor="#FAF0EC" />
        </linearGradient>
        <radialGradient id="elegant-rose-back-bloom" cx="20%" cy="80%" r="25%">
          <stop offset="0%" stopColor="#DCAE96" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#DCAE96" stopOpacity="0" />
        </radialGradient>
        <filter id="elegant-rose-back-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
        </filter>
        <filter id="elegant-rose-back-shadow">
          <feDropShadow dx="0.06" dy="0.08" stdDeviation="0.12" floodColor="#8B6050" floodOpacity="0.08" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#elegant-rose-back-bg)" />
      <rect width="91" height="55" fill="url(#elegant-rose-back-bloom)" />
      {/* Rose petal accent */}
      <path d="M 79,6 Q 82,3 85,6 Q 82,9 79,6" fill="none" stroke="#DCAE96" strokeWidth="0.05" opacity="0.15" />
      <circle cx="82" cy="6" r="0.2" fill="#DCAE96" opacity="0.12" />
      {/* Company */}
      <text x="10" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="2.5" letterSpacing="0.6" fill="#6A4A3A">{data.companyJa}</text>
      <text x="10" y="18.5" fontFamily="'Cormorant Garamond', serif" fontWeight="300" fontSize="1.5" letterSpacing="0.4" fill="#DCAE96">{data.companyEn}</text>
      <text x="10" y="22.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#C0A090">{data.titleJa}</text>
      <line x1="10" y1="25" x2="60" y2="25" stroke="#DCAE96" strokeWidth="0.06" opacity="0.3" />
      {/* Contact */}
      <text x="10" y="30" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#8A6A5A">{data.tel}</text>
      <text x="10" y="34" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#8A6A5A">{data.email}</text>
      <text x="10" y="38" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#8A6A5A">{data.website}</text>
      <line x1="10" y1="40.5" x2="60" y2="40.5" stroke="#e8d0c4" strokeWidth="0.05" opacity="0.3" />
      <text x="10" y="44.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#C0A090">〒{data.zipCode}</text>
      <text x="10" y="48.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#C0A090">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="74" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 5. CAMEO (彫像) — Cameo brooch inspired
// Oval frame motif with classical serif typography
// ============================================================
const cameoTemplate: TemplateDefinition = {
  id: 'elegant-cameo',
  name: 'CAMEO',
  nameJa: '彫像',
  category: 'elegant',
  designer: 'Josiah Wedgwood',
  description: '彫像の気品。楕円の枠に刻まれた古典の美。',
  accentColor: '#8B7355',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="elegant-cameo-front-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F8F5F0" />
          <stop offset="100%" stopColor="#EDE5DC" />
        </linearGradient>
        <linearGradient id="elegant-cameo-front-accent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A08860" />
          <stop offset="100%" stopColor="#6E5B40" />
        </linearGradient>
        <radialGradient id="elegant-cameo-front-oval" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FAF7F2" />
          <stop offset="100%" stopColor="#F0EBE2" />
        </radialGradient>
        <filter id="elegant-cameo-front-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
        </filter>
        <filter id="elegant-cameo-front-shadow">
          <feDropShadow dx="0.15" dy="0.2" stdDeviation="0.35" floodColor="#8B7355" floodOpacity="0.15" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#elegant-cameo-front-bg)" />
      {/* Cameo oval at right */}
      <ellipse cx="72" cy="27.5" rx="13" ry="17" fill="none" stroke="url(#elegant-cameo-front-accent)" strokeWidth="0.18" opacity="0.15" />
      <ellipse cx="72" cy="27.5" rx="11" ry="15" fill="none" stroke="#8B7355" strokeWidth="0.08" opacity="0.1" />
      <ellipse cx="72" cy="27.5" rx="9" ry="13" fill="none" stroke="#8B7355" strokeWidth="0.04" strokeDasharray="0.5,0.8" opacity="0.08" />
      {/* Name */}
      <text x="12" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="5.5" letterSpacing="0.5" fill="#4A3A28" filter="url(#elegant-cameo-front-shadow)">{data.nameJa}</text>
      <text x="12" y="28.5" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="2" letterSpacing="0.4" fill="url(#elegant-cameo-front-accent)">{data.nameEn}</text>
      <line x1="12" y1="31" x2="52" y2="31" stroke="#8B7355" strokeWidth="0.06" opacity="0.2" />
      <text x="12" y="36.5" fontFamily="'Cormorant Garamond', serif" fontWeight="300" fontSize="1.9" fill="#A89070">{data.titleJa}</text>
      {/* Corner accents */}
      <circle cx="7" cy="5" r="0.3" fill="#8B7355" opacity="0.2" />
      <circle cx="84" cy="5" r="0.3" fill="#8B7355" opacity="0.2" />
      <circle cx="7" cy="50" r="0.3" fill="#8B7355" opacity="0.2" />
      <circle cx="84" cy="50" r="0.3" fill="#8B7355" opacity="0.2" />
      {data.logo && <image href={data.logo} x="12" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="elegant-cameo-back-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F8F5F0" />
          <stop offset="100%" stopColor="#EDE5DC" />
        </linearGradient>
        <linearGradient id="elegant-cameo-back-accent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A08860" />
          <stop offset="100%" stopColor="#6E5B40" />
        </linearGradient>
        <filter id="elegant-cameo-back-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
        </filter>
        <filter id="elegant-cameo-back-shadow">
          <feDropShadow dx="0.08" dy="0.1" stdDeviation="0.2" floodColor="#8B7355" floodOpacity="0.1" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#elegant-cameo-back-bg)" />
      {/* Small oval accent */}
      <ellipse cx="83" cy="8" rx="5" ry="6" fill="none" stroke="url(#elegant-cameo-back-accent)" strokeWidth="0.1" opacity="0.12" />
      <ellipse cx="83" cy="8" rx="3.5" ry="4.5" fill="none" stroke="#8B7355" strokeWidth="0.05" opacity="0.08" />
      {/* Company */}
      <text x="10" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="2.5" letterSpacing="0.5" fill="#4A3A28">{data.companyJa}</text>
      <text x="10" y="18.5" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" letterSpacing="0.3" fill="#8B7355">{data.companyEn}</text>
      <text x="10" y="22.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#A89070">{data.titleJa}</text>
      <line x1="10" y1="25" x2="72" y2="25" stroke="#8B7355" strokeWidth="0.06" opacity="0.18" />
      {/* Contact */}
      <text x="10" y="30" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#6A5A40">{data.tel}</text>
      <text x="10" y="34" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#6A5A40">{data.email}</text>
      <text x="10" y="38" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#6A5A40">{data.website}</text>
      <line x1="10" y1="40.5" x2="72" y2="40.5" stroke="#d5c5b0" strokeWidth="0.05" opacity="0.25" />
      <text x="10" y="44.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#A89070">〒{data.zipCode}</text>
      <text x="10" y="48.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#A89070">{data.addressJa}</text>
      {/* Corner dots */}
      <circle cx="7" cy="5" r="0.3" fill="#8B7355" opacity="0.18" />
      <circle cx="84" cy="50" r="0.3" fill="#8B7355" opacity="0.18" />
      {data.logo && <image href={data.logo} x="74" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 6. TIARA (冠) — Crown/tiara inspired
// Upward arches suggesting a crown, regal spacing
// ============================================================
const tiaraTemplate: TemplateDefinition = {
  id: 'elegant-tiara',
  name: 'TIARA',
  nameJa: '冠',
  category: 'elegant',
  designer: 'Cartier',
  description: '冠の威厳。上向きのアーチが戴冠の瞬間を描く。',
  accentColor: '#C5A572',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="elegant-tiara-front-bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFF8" />
          <stop offset="100%" stopColor="#F8F2E8" />
        </linearGradient>
        <linearGradient id="elegant-tiara-front-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E0C888" />
          <stop offset="50%" stopColor="#C5A572" />
          <stop offset="100%" stopColor="#A08850" />
        </linearGradient>
        <radialGradient id="elegant-tiara-front-jewel" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F0E0B0" />
          <stop offset="100%" stopColor="#C5A572" />
        </radialGradient>
        <filter id="elegant-tiara-front-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
        </filter>
        <filter id="elegant-tiara-front-shadow">
          <feDropShadow dx="0.1" dy="0.12" stdDeviation="0.2" floodColor="#8B7355" floodOpacity="0.1" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#elegant-tiara-front-bg)" />
      {/* Crown arches */}
      <path d="M 20,10 Q 30,3.5 45.5,3 Q 61,3.5 71,10" fill="none" stroke="url(#elegant-tiara-front-gold)" strokeWidth="0.18" opacity="0.35" />
      <path d="M 25,10 Q 35,5 45.5,4.5 Q 56,5 66,10" fill="none" stroke="#C5A572" strokeWidth="0.08" opacity="0.2" />
      {/* Jewel dots */}
      <circle cx="45.5" cy="3" r="0.55" fill="url(#elegant-tiara-front-jewel)" opacity="0.4" />
      <circle cx="35" cy="5.5" r="0.3" fill="#C5A572" opacity="0.25" />
      <circle cx="56" cy="5.5" r="0.3" fill="#C5A572" opacity="0.25" />
      <circle cx="28" cy="7.5" r="0.2" fill="#C5A572" opacity="0.15" />
      <circle cx="63" cy="7.5" r="0.2" fill="#C5A572" opacity="0.15" />
      {/* Name */}
      <text x="45.5" y="23" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="6" letterSpacing="1.2" fill="#3a3530" filter="url(#elegant-tiara-front-shadow)">{data.nameJa}</text>
      <text x="45.5" y="29" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="300" fontSize="2" letterSpacing="0.8" fill="url(#elegant-tiara-front-gold)">{data.nameEn.toUpperCase()}</text>
      <line x1="25" y1="32" x2="66" y2="32" stroke="#C5A572" strokeWidth="0.05" opacity="0.25" />
      <text x="45.5" y="37.5" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="300" fontSize="1.9" fill="#B0A080">{data.titleJa}</text>
      {/* Bottom line with center dot */}
      <line x1="15" y1="47" x2="76" y2="47" stroke="url(#elegant-tiara-front-gold)" strokeWidth="0.08" opacity="0.25" />
      <circle cx="45.5" cy="47" r="0.25" fill="#C5A572" opacity="0.3" />
      {data.logo && <image href={data.logo} x="8" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="elegant-tiara-back-bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFF8" />
          <stop offset="100%" stopColor="#F8F2E8" />
        </linearGradient>
        <linearGradient id="elegant-tiara-back-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E0C888" />
          <stop offset="100%" stopColor="#A08850" />
        </linearGradient>
        <filter id="elegant-tiara-back-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
        </filter>
        <filter id="elegant-tiara-back-shadow">
          <feDropShadow dx="0.06" dy="0.08" stdDeviation="0.12" floodColor="#8B7355" floodOpacity="0.08" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#elegant-tiara-back-bg)" />
      {/* Small tiara accent */}
      <path d="M 30,6 Q 38,3 45.5,5 Q 53,3 61,6" fill="none" stroke="url(#elegant-tiara-back-gold)" strokeWidth="0.1" opacity="0.25" />
      <circle cx="45.5" cy="4" r="0.35" fill="#C5A572" opacity="0.3" />
      <circle cx="38" cy="4.5" r="0.2" fill="#C5A572" opacity="0.2" />
      <circle cx="53" cy="4.5" r="0.2" fill="#C5A572" opacity="0.2" />
      {/* Company */}
      <text x="10" y="15" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="2.5" letterSpacing="0.6" fill="#3a3530">{data.companyJa}</text>
      <text x="10" y="19.5" fontFamily="'Cormorant Garamond', serif" fontWeight="300" fontSize="1.5" letterSpacing="0.5" fill="#C5A572">{data.companyEn}</text>
      <text x="10" y="23.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#B0A080">{data.titleJa}</text>
      <line x1="10" y1="26" x2="81" y2="26" stroke="url(#elegant-tiara-back-gold)" strokeWidth="0.06" opacity="0.2" />
      {/* Contact */}
      <text x="10" y="31" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#8A7A60">{data.tel}</text>
      <text x="10" y="35" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#8A7A60">{data.email}</text>
      <text x="10" y="39" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#8A7A60">{data.website}</text>
      <line x1="10" y1="41.5" x2="81" y2="41.5" stroke="#e0d4c0" strokeWidth="0.05" opacity="0.2" />
      <text x="10" y="45.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#B0A080">〒{data.zipCode}</text>
      <text x="10" y="49" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#B0A080">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="74" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 7. LACE (蕾絲) — Delicate lace pattern overlay
// Fine interconnected curves suggesting lace fabric
// ============================================================
const laceTemplate: TemplateDefinition = {
  id: 'elegant-lace',
  name: 'LACE',
  nameJa: '蕾絲',
  category: 'elegant',
  designer: 'Valentino',
  description: '蕾絲の繊細。細い糸が絡み合う布の芸術。',
  accentColor: '#B8A8C0',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="elegant-lace-front-bg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#FDFAFF" />
          <stop offset="100%" stopColor="#F2EDF5" />
        </radialGradient>
        <linearGradient id="elegant-lace-front-accent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C8B8D4" />
          <stop offset="100%" stopColor="#9A8AAC" />
        </linearGradient>
        <pattern id="elegant-lace-front-pattern" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="4" r="3.2" fill="none" stroke="#B8A8C0" strokeWidth="0.05" opacity="0.06" />
          <circle cx="0" cy="0" r="2" fill="none" stroke="#B8A8C0" strokeWidth="0.04" opacity="0.04" />
          <circle cx="8" cy="8" r="2" fill="none" stroke="#B8A8C0" strokeWidth="0.04" opacity="0.04" />
          <circle cx="4" cy="4" r="0.2" fill="#B8A8C0" opacity="0.06" />
        </pattern>
        <filter id="elegant-lace-front-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
        </filter>
        <filter id="elegant-lace-front-shadow">
          <feDropShadow dx="0.1" dy="0.12" stdDeviation="0.2" floodColor="#6A5A7A" floodOpacity="0.1" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#elegant-lace-front-bg)" />
      <rect width="91" height="55" fill="url(#elegant-lace-front-pattern)" />
      {/* Lace border bands */}
      <line x1="0" y1="12" x2="91" y2="12" stroke="#B8A8C0" strokeWidth="0.04" opacity="0.2" />
      <line x1="0" y1="43" x2="91" y2="43" stroke="#B8A8C0" strokeWidth="0.04" opacity="0.2" />
      {/* Scallop at center top */}
      <path d="M 38,12 Q 42,10 45.5,12 Q 49,10 53,12" fill="none" stroke="#B8A8C0" strokeWidth="0.08" opacity="0.25" />
      <circle cx="45.5" cy="10.5" r="0.2" fill="#B8A8C0" opacity="0.2" />
      {/* Name */}
      <text x="45.5" y="22" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="300" fontSize="2.5" letterSpacing="0.8" fill="url(#elegant-lace-front-accent)">{data.nameEn.toUpperCase()}</text>
      <text x="45.5" y="32" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="6" letterSpacing="1" fill="#5A4A5A" filter="url(#elegant-lace-front-shadow)">{data.nameJa}</text>
      <text x="45.5" y="38.5" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="300" fontSize="1.9" fill="#A098A8">{data.titleJa}</text>
      {data.logo && <image href={data.logo} x="8" y="43" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="elegant-lace-back-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDFAFF" />
          <stop offset="100%" stopColor="#F2EDF5" />
        </linearGradient>
        <pattern id="elegant-lace-back-pattern" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="4" r="3.2" fill="none" stroke="#B8A8C0" strokeWidth="0.04" opacity="0.04" />
        </pattern>
        <filter id="elegant-lace-back-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
        </filter>
        <filter id="elegant-lace-back-shadow">
          <feDropShadow dx="0.06" dy="0.08" stdDeviation="0.12" floodColor="#6A5A7A" floodOpacity="0.08" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#elegant-lace-back-bg)" />
      <rect width="91" height="55" fill="url(#elegant-lace-back-pattern)" />
      {/* Lace edges */}
      <line x1="0" y1="6" x2="91" y2="6" stroke="#B8A8C0" strokeWidth="0.04" opacity="0.15" />
      <line x1="0" y1="49" x2="91" y2="49" stroke="#B8A8C0" strokeWidth="0.04" opacity="0.15" />
      <path d="M 38,6 Q 42,4.5 45.5,6 Q 49,4.5 53,6" fill="none" stroke="#B8A8C0" strokeWidth="0.06" opacity="0.2" />
      {/* Company */}
      <text x="10" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="2.5" letterSpacing="0.5" fill="#5A4A5A">{data.companyJa}</text>
      <text x="10" y="18.5" fontFamily="'Cormorant Garamond', serif" fontWeight="300" fontSize="1.5" fill="#B8A8C0">{data.companyEn}</text>
      <text x="10" y="22.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#A098A8">{data.titleJa}</text>
      <line x1="10" y1="25" x2="60" y2="25" stroke="#B8A8C0" strokeWidth="0.06" opacity="0.2" />
      {/* Contact */}
      <text x="10" y="30" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#7A6A7A">{data.tel}</text>
      <text x="10" y="34" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#7A6A7A">{data.email}</text>
      <text x="10" y="38" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#7A6A7A">{data.website}</text>
      <line x1="10" y1="40.5" x2="60" y2="40.5" stroke="#d8c8d4" strokeWidth="0.05" opacity="0.2" />
      <text x="10" y="44.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#A098A8">〒{data.zipCode}</text>
      <text x="10" y="48.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#A098A8">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="74" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 8. PERFUME (香) — Perfume bottle inspired
// Elegant asymmetric layout, subtle warm gradient
// ============================================================
const perfumeTemplate: TemplateDefinition = {
  id: 'elegant-perfume',
  name: 'PERFUME',
  nameJa: '香',
  category: 'elegant',
  designer: 'Jacques Guerlain',
  description: '香りの記憶。目に見えない優雅さを形にする。',
  accentColor: '#D4A070',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="elegant-perfume-front-bg" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FFFAF5" />
          <stop offset="100%" stopColor="#F8F0E8" />
        </radialGradient>
        <radialGradient id="elegant-perfume-front-glow" cx="70%" cy="20%" r="28%">
          <stop offset="0%" stopColor="#D4A070" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#D4A070" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="elegant-perfume-front-accent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E0B080" />
          <stop offset="100%" stopColor="#B88858" />
        </linearGradient>
        <filter id="elegant-perfume-front-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
        </filter>
        <filter id="elegant-perfume-front-shadow">
          <feDropShadow dx="0.1" dy="0.12" stdDeviation="0.2" floodColor="#8B6040" floodOpacity="0.1" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#elegant-perfume-front-bg)" />
      <rect width="91" height="55" fill="url(#elegant-perfume-front-glow)" />
      {/* Perfume diffusion curves - top right */}
      <path d="M 75,15 Q 80,10 82,15 Q 80,20 75,15" fill="none" stroke="#D4A070" strokeWidth="0.06" opacity="0.15" />
      <path d="M 73,18 Q 80,12 85,18" fill="none" stroke="#D4A070" strokeWidth="0.04" opacity="0.1" />
      <circle cx="78" cy="14" r="0.2" fill="#D4A070" opacity="0.12" />
      {/* Spray mist dots */}
      <circle cx="77" cy="8" r="0.15" fill="#D4A070" opacity="0.08" />
      <circle cx="80" cy="6" r="0.1" fill="#D4A070" opacity="0.06" />
      {/* Name */}
      <text x="10" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="6" letterSpacing="0.5" fill="#5A4030" filter="url(#elegant-perfume-front-shadow)">{data.nameJa}</text>
      <text x="10" y="28.5" fontFamily="'Cormorant Garamond', serif" fontWeight="600" fontSize="2" letterSpacing="0.5" fill="url(#elegant-perfume-front-accent)">{data.nameEn}</text>
      <line x1="10" y1="31" x2="55" y2="31" stroke="#D4A070" strokeWidth="0.06" opacity="0.2" />
      <text x="10" y="36.5" fontFamily="'Cormorant Garamond', serif" fontWeight="300" fontSize="1.9" fill="#C0A080">{data.titleJa}</text>
      <text x="10" y="45" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#A08060">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="75" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="elegant-perfume-back-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFAF5" />
          <stop offset="100%" stopColor="#F8F0E8" />
        </linearGradient>
        <linearGradient id="elegant-perfume-back-accent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E0B080" />
          <stop offset="100%" stopColor="#B88858" />
        </linearGradient>
        <filter id="elegant-perfume-back-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
        </filter>
        <filter id="elegant-perfume-back-shadow">
          <feDropShadow dx="0.06" dy="0.08" stdDeviation="0.12" floodColor="#8B6040" floodOpacity="0.08" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#elegant-perfume-back-bg)" />
      {/* Diffusion curve accent */}
      <path d="M 80,8 Q 84,4 86,8 Q 84,12 80,8" fill="none" stroke="#D4A070" strokeWidth="0.04" opacity="0.1" />
      <circle cx="83" cy="8" r="0.15" fill="#D4A070" opacity="0.08" />
      {/* Company */}
      <text x="10" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="2.5" letterSpacing="0.5" fill="#5A4030">{data.companyJa}</text>
      <text x="10" y="18.5" fontFamily="'Cormorant Garamond', serif" fontWeight="300" fontSize="1.5" letterSpacing="0.4" fill="#D4A070">{data.companyEn}</text>
      <text x="10" y="22.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#C0A080">{data.titleJa}</text>
      <line x1="10" y1="25" x2="62" y2="25" stroke="url(#elegant-perfume-back-accent)" strokeWidth="0.06" opacity="0.2" />
      {/* Contact */}
      <text x="10" y="30" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#8A6A4A">{data.tel}</text>
      <text x="10" y="34" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#8A6A4A">{data.email}</text>
      <text x="10" y="38" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#8A6A4A">{data.website}</text>
      <line x1="10" y1="40.5" x2="62" y2="40.5" stroke="#e5d0bc" strokeWidth="0.05" opacity="0.2" />
      <text x="10" y="44.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#C0A080">〒{data.zipCode}</text>
      <text x="10" y="48.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#C0A080">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="74" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 9. BALLROOM (舞) — Ballroom dance inspired
// Sweeping curves suggesting movement and dance
// ============================================================
const ballroomTemplate: TemplateDefinition = {
  id: 'elegant-ballroom',
  name: 'BALLROOM',
  nameJa: '舞',
  category: 'elegant',
  designer: 'Oscar de la Renta',
  description: '舞踏会の華。優雅な曲線が踊るように流れる。',
  accentColor: '#8B6550',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="elegant-ballroom-front-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF8F0" />
          <stop offset="100%" stopColor="#F5ECE2" />
        </linearGradient>
        <linearGradient id="elegant-ballroom-front-curve" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8B6550" stopOpacity="0" />
          <stop offset="40%" stopColor="#8B6550" stopOpacity="0.12" />
          <stop offset="60%" stopColor="#8B6550" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#8B6550" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="elegant-ballroom-front-accent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A07860" />
          <stop offset="100%" stopColor="#6E4E3A" />
        </linearGradient>
        <filter id="elegant-ballroom-front-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
        </filter>
        <filter id="elegant-ballroom-front-shadow">
          <feDropShadow dx="0.1" dy="0.12" stdDeviation="0.2" floodColor="#5A3520" floodOpacity="0.1" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#elegant-ballroom-front-bg)" />
      {/* Sweeping dance curves */}
      <path d="M -5,43 Q 22,22 48,36 Q 74,50 96,30" fill="none" stroke="url(#elegant-ballroom-front-curve)" strokeWidth="0.6" />
      <path d="M -5,47 Q 26,27 52,40 Q 78,53 96,34" fill="none" stroke="#8B6550" strokeWidth="0.06" opacity="0.06" />
      <path d="M -5,51 Q 30,33 58,44 Q 82,53 96,40" fill="none" stroke="#8B6550" strokeWidth="0.04" opacity="0.04" />
      {/* Decorative swirl top right */}
      <path d="M 78,8 Q 82,5 84,9 Q 86,13 82,12" fill="none" stroke="#8B6550" strokeWidth="0.06" opacity="0.1" />
      {/* Name */}
      <text x="45.5" y="20" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="300" fontSize="2.2" letterSpacing="0.8" fill="url(#elegant-ballroom-front-accent)">{data.nameEn.toUpperCase()}</text>
      <line x1="25" y1="23" x2="66" y2="23" stroke="#8B6550" strokeWidth="0.05" opacity="0.18" />
      <text x="45.5" y="33" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="6.5" letterSpacing="1" fill="#4A3525" filter="url(#elegant-ballroom-front-shadow)">{data.nameJa}</text>
      <text x="45.5" y="39.5" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="300" fontSize="1.9" fill="#B09878">{data.titleJa}</text>
      {/* Dance step dots */}
      <circle cx="42" cy="43" r="0.25" fill="#8B6550" opacity="0.15" />
      <circle cx="45.5" cy="42.5" r="0.3" fill="#8B6550" opacity="0.18" />
      <circle cx="49" cy="43" r="0.25" fill="#8B6550" opacity="0.15" />
      {data.logo && <image href={data.logo} x="8" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="elegant-ballroom-back-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF8F0" />
          <stop offset="100%" stopColor="#F5ECE2" />
        </linearGradient>
        <linearGradient id="elegant-ballroom-back-accent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A07860" />
          <stop offset="100%" stopColor="#6E4E3A" />
        </linearGradient>
        <filter id="elegant-ballroom-back-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
        </filter>
        <filter id="elegant-ballroom-back-shadow">
          <feDropShadow dx="0.06" dy="0.08" stdDeviation="0.12" floodColor="#5A3520" floodOpacity="0.08" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#elegant-ballroom-back-bg)" />
      {/* Subtle dance curves */}
      <path d="M -5,8 Q 25,3 55,8 Q 78,13 96,7" fill="none" stroke="#8B6550" strokeWidth="0.08" opacity="0.06" />
      <path d="M -5,11 Q 28,5 58,10 Q 80,15 96,10" fill="none" stroke="#8B6550" strokeWidth="0.05" opacity="0.04" />
      {/* Decorative swirl */}
      <path d="M 82,48 Q 85,45 83,42 Q 80,45 83,47" fill="none" stroke="#8B6550" strokeWidth="0.05" opacity="0.08" />
      {/* Company */}
      <text x="10" y="15" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="2.5" letterSpacing="0.5" fill="#4A3525">{data.companyJa}</text>
      <text x="10" y="19.5" fontFamily="'Cormorant Garamond', serif" fontWeight="300" fontSize="1.5" fill="#8B6550">{data.companyEn}</text>
      <text x="10" y="23.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#B09878">{data.titleJa}</text>
      <line x1="10" y1="26" x2="81" y2="26" stroke="url(#elegant-ballroom-back-accent)" strokeWidth="0.06" opacity="0.15" />
      {/* Contact */}
      <text x="10" y="31" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#6A5040">{data.tel}</text>
      <text x="10" y="35" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#6A5040">{data.email}</text>
      <text x="10" y="39" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#6A5040">{data.website}</text>
      <line x1="10" y1="41.5" x2="81" y2="41.5" stroke="#dcc8b8" strokeWidth="0.05" opacity="0.2" />
      <text x="10" y="45.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#B09878">〒{data.zipCode}</text>
      <text x="10" y="49" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#B09878">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="74" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 10. SWAN (白鳥) — Swan lake inspired
// Graceful curves, white on white with subtle blue-gray
// ============================================================
const swanTemplate: TemplateDefinition = {
  id: 'elegant-swan',
  name: 'SWAN',
  nameJa: '白鳥',
  category: 'elegant',
  designer: 'Ralph Lauren',
  description: '白鳥の気品。純白の中に浮かぶ気高い曲線。',
  accentColor: '#8A9BAA',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="elegant-swan-front-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F2F6FA" />
        </linearGradient>
        <linearGradient id="elegant-swan-front-accent" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A0B0C0" />
          <stop offset="100%" stopColor="#6A7A8A" />
        </linearGradient>
        <radialGradient id="elegant-swan-front-glow" cx="80%" cy="30%" r="30%">
          <stop offset="0%" stopColor="#8A9BAA" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#8A9BAA" stopOpacity="0" />
        </radialGradient>
        <filter id="elegant-swan-front-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
        </filter>
        <filter id="elegant-swan-front-shadow">
          <feDropShadow dx="0.08" dy="0.1" stdDeviation="0.18" floodColor="#4A5A6A" floodOpacity="0.1" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#elegant-swan-front-bg)" />
      <rect width="91" height="55" fill="url(#elegant-swan-front-glow)" />
      {/* Swan neck curve */}
      <path d="M 76,42 Q 79,28 74,18 Q 72,13 70,15" fill="none" stroke="url(#elegant-swan-front-accent)" strokeWidth="0.15" opacity="0.12" />
      <path d="M 78,42 Q 81,30 76,20 Q 74,15 72,17" fill="none" stroke="#8A9BAA" strokeWidth="0.08" opacity="0.07" />
      {/* Wing feather strokes */}
      <path d="M 74,18 Q 80,15 85,12" fill="none" stroke="#8A9BAA" strokeWidth="0.06" opacity="0.06" />
      <path d="M 73,21 Q 80,19 86,16" fill="none" stroke="#8A9BAA" strokeWidth="0.04" opacity="0.04" />
      {/* Water ripples */}
      <ellipse cx="77" cy="44" rx="7" ry="0.8" fill="none" stroke="#8A9BAA" strokeWidth="0.03" opacity="0.06" />
      <ellipse cx="77" cy="44" rx="11" ry="1.2" fill="none" stroke="#8A9BAA" strokeWidth="0.02" opacity="0.04" />
      {/* Name */}
      <text x="10" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="6" letterSpacing="0.8" fill="#3A4A5A" filter="url(#elegant-swan-front-shadow)">{data.nameJa}</text>
      <text x="10" y="28.5" fontFamily="'Cormorant Garamond', serif" fontWeight="300" fontSize="2" letterSpacing="0.5" fill="url(#elegant-swan-front-accent)">{data.nameEn}</text>
      <line x1="10" y1="31.5" x2="48" y2="31.5" stroke="#8A9BAA" strokeWidth="0.05" opacity="0.2" />
      <text x="10" y="37" fontFamily="'Cormorant Garamond', serif" fontWeight="300" fontSize="1.9" fill="#A0B0C0">{data.titleJa}</text>
      <text x="10" y="46" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#7A8A9A">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="75" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="elegant-swan-back-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F2F6FA" />
        </linearGradient>
        <linearGradient id="elegant-swan-back-accent" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A0B0C0" />
          <stop offset="100%" stopColor="#6A7A8A" />
        </linearGradient>
        <filter id="elegant-swan-back-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
        </filter>
        <filter id="elegant-swan-back-shadow">
          <feDropShadow dx="0.05" dy="0.06" stdDeviation="0.1" floodColor="#4A5A6A" floodOpacity="0.06" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#elegant-swan-back-bg)" />
      {/* Subtle feather accent top right */}
      <path d="M 80,4 Q 83,8 80,13" fill="none" stroke="#8A9BAA" strokeWidth="0.08" opacity="0.07" />
      <path d="M 79,5 Q 81.5,8 79,12" fill="none" stroke="#8A9BAA" strokeWidth="0.04" opacity="0.05" />
      {/* Water ripple */}
      <ellipse cx="82" cy="50" rx="5" ry="0.6" fill="none" stroke="#8A9BAA" strokeWidth="0.03" opacity="0.05" />
      {/* Company */}
      <text x="10" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="2.5" letterSpacing="0.4" fill="#3A4A5A">{data.companyJa}</text>
      <text x="10" y="18.5" fontFamily="'Cormorant Garamond', serif" fontWeight="300" fontSize="1.5" fill="#8A9BAA">{data.companyEn}</text>
      <text x="10" y="22.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#A0B0C0">{data.titleJa}</text>
      <line x1="10" y1="25" x2="62" y2="25" stroke="url(#elegant-swan-back-accent)" strokeWidth="0.06" opacity="0.15" />
      {/* Contact */}
      <text x="10" y="30" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#6A7A8A">{data.tel}</text>
      <text x="10" y="34" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#6A7A8A">{data.email}</text>
      <text x="10" y="38" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#6A7A8A">{data.website}</text>
      <line x1="10" y1="40.5" x2="62" y2="40.5" stroke="#d0dce4" strokeWidth="0.05" opacity="0.18" />
      <text x="10" y="44.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#A0B0C0">〒{data.zipCode}</text>
      <text x="10" y="48.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#A0B0C0">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="74" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

export const elegantTemplates: TemplateDefinition[] = [
  graceTemplate, empressTemplate, versaillesTemplate, roseTemplate, cameoTemplate,
  tiaraTemplate, laceTemplate, perfumeTemplate, ballroomTemplate, swanTemplate,
];
