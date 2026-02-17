import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. COUTURE (仕立) — Haute couture elegance
// Ultra-refined, thin serif typography, luxurious spacing
// ============================================================
const coutureTemplate: TemplateDefinition = {
  id: 'fashion-couture',
  name: 'COUTURE',
  nameJa: '仕立',
  category: 'fashion',
  designer: 'Coco Chanel',
  description: 'オートクチュールの気品。極限まで研ぎ澄まされた優雅さ。',
  accentColor: '#1a1a1a',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Thin elegant border */}
      <rect x="6" y="6" width="79" height="43" fill="none" stroke="#1a1a1a" strokeWidth="0.08" />
      {/* Decorative corner marks */}
      <line x1="6" y1="10" x2="9" y2="10" stroke="#1a1a1a" strokeWidth="0.15" />
      <line x1="6" y1="6" x2="6" y2="10" stroke="#1a1a1a" strokeWidth="0.15" />
      <line x1="82" y1="6" x2="85" y2="6" stroke="#1a1a1a" strokeWidth="0.15" />
      <line x1="85" y1="6" x2="85" y2="10" stroke="#1a1a1a" strokeWidth="0.15" />
      <line x1="82" y1="49" x2="85" y2="49" stroke="#1a1a1a" strokeWidth="0.15" />
      <line x1="85" y1="45" x2="85" y2="49" stroke="#1a1a1a" strokeWidth="0.15" />
      <line x1="6" y1="45" x2="6" y2="49" stroke="#1a1a1a" strokeWidth="0.15" />
      <line x1="6" y1="49" x2="9" y2="49" stroke="#1a1a1a" strokeWidth="0.15" />
      {/* Name - elegant serif */}
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="7"
        letterSpacing="1.5"
        fill="#1a1a1a"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="2.5"
        letterSpacing="1.2"
        fill="#1a1a1a"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Thin rule */}
      <line x1="30" y1="34" x2="61" y2="34" stroke="#1a1a1a" strokeWidth="0.06" />
      <text
        x="45.5"
        y="39.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        letterSpacing="0.5"
        fill="#888888"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      <rect x="6" y="6" width="79" height="43" fill="none" stroke="#1a1a1a" strokeWidth="0.08" />
      {/* Company */}
      <text
        x="45.5"
        y="15"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2.8"
        letterSpacing="1"
        fill="#1a1a1a"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="19.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.5"
        letterSpacing="0.8"
        fill="#888888"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <line x1="25" y1="23" x2="66" y2="23" stroke="#1a1a1a" strokeWidth="0.04" />
      {/* Contact */}
      <text x="45.5" y="28" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.4" fill="#555555">
        {data.tel}
      </text>
      <text x="45.5" y="32" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.4" fill="#555555">
        {data.email}
      </text>
      <text x="45.5" y="36" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.4" fill="#555555">
        {data.website}
      </text>
      <line x1="25" y1="39" x2="66" y2="39" stroke="#1a1a1a" strokeWidth="0.04" />
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.1"
        fill="#aaaaaa"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 2. VOGUE (流行) — Fashion editorial bold style
// High contrast black and white, bold statement typography
// ============================================================
const vogueTemplate: TemplateDefinition = {
  id: 'fashion-vogue',
  name: 'VOGUE',
  nameJa: '流行',
  category: 'fashion',
  designer: 'Diana Vreeland',
  description: 'ファッション誌の大胆さ。コントラストが生む衝撃。',
  accentColor: '#000000',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#000000" />
      {/* Bold white name */}
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="8"
        letterSpacing="2"
        fill="#ffffff"
      >
        {data.nameJa}
      </text>
      {/* Thin serif English name */}
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="2.5"
        letterSpacing="2"
        fill="#ffffff"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Thin line separator */}
      <line x1="20" y1="35" x2="71" y2="35" stroke="#ffffff" strokeWidth="0.06" />
      {/* Title */}
      <text
        x="45.5"
        y="41"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        letterSpacing="1"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      {/* Blush pink accent dot */}
      <circle cx="45.5" cy="48" r="0.6" fill="#F4C2C2" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#000000" />
      {/* Company */}
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="3"
        letterSpacing="1.5"
        fill="#ffffff"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="19"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="1.3"
        letterSpacing="1"
        fill="#666666"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <line x1="25" y1="23" x2="66" y2="23" stroke="#333333" strokeWidth="0.06" />
      {/* Contact */}
      <text x="45.5" y="28" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.4" fill="#cccccc">
        {data.tel}
      </text>
      <text x="45.5" y="32" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.4" fill="#cccccc">
        {data.email}
      </text>
      <text x="45.5" y="36" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.4" fill="#cccccc">
        {data.website}
      </text>
      <line x1="25" y1="39.5" x2="66" y2="39.5" stroke="#333333" strokeWidth="0.06" />
      <text
        x="45.5"
        y="44.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.1"
        fill="#666666"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
      <circle cx="45.5" cy="50" r="0.6" fill="#F4C2C2" />
    </g>
  ),
};

// ============================================================
// 3. RUNWAY (舞台) — Fashion runway with spotlight effect
// Dramatic vertical composition with spotlight highlight
// ============================================================
const runwayTemplate: TemplateDefinition = {
  id: 'fashion-runway',
  name: 'RUNWAY',
  nameJa: '舞台',
  category: 'fashion',
  designer: 'Alexander McQueen',
  description: 'ランウェイのスポットライト。ドラマチックな舞台。',
  accentColor: '#8B0000',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="fashion-runway-spot" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f0e8e0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#fashion-runway-spot)" />
      {/* Runway line */}
      <line x1="45.5" y1="0" x2="45.5" y2="55" stroke="#8B0000" strokeWidth="0.1" />
      {/* Name */}
      <text
        x="45.5"
        y="20"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="6"
        letterSpacing="1.5"
        fill="#1a1a1a"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="2.2"
        letterSpacing="1.5"
        fill="#8B0000"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Title with runway-like alignment */}
      <text
        x="45.5"
        y="37"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#999999"
      >
        {data.titleJa}
      </text>
      {/* Red accent marks at bottom */}
      <rect x="43" y="48" width="5" height="0.3" fill="#8B0000" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="fashion-runway-spot-b" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f0e8e0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#fashion-runway-spot-b)" />
      <line x1="45.5" y1="0" x2="45.5" y2="55" stroke="#8B0000" strokeWidth="0.06" />
      {/* Company */}
      <text
        x="45.5"
        y="13"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2.8"
        letterSpacing="0.8"
        fill="#1a1a1a"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="17.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="1.3"
        letterSpacing="0.5"
        fill="#999999"
      >
        {data.companyEn}
      </text>
      <rect x="35" y="20.5" width="21" height="0.15" fill="#8B0000" />
      {/* Contact */}
      <text x="45.5" y="26" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.4" fill="#555555">
        {data.tel}
      </text>
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.4" fill="#555555">
        {data.email}
      </text>
      <text x="45.5" y="34" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.4" fill="#555555">
        {data.website}
      </text>
      <rect x="35" y="37.5" width="21" height="0.15" fill="#8B0000" />
      <text
        x="45.5"
        y="42.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.1"
        fill="#999999"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="46"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.1"
        fill="#999999"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 4. ATELIER-F (仕立場) — Fashion atelier / workshop
// Warm tones, handcrafted feeling with measuring tape motif
// ============================================================
const atelierFTemplate: TemplateDefinition = {
  id: 'fashion-atelier',
  name: 'ATELIER-F',
  nameJa: '仕立場',
  category: 'fashion',
  designer: 'Christian Dior',
  description: 'アトリエの温もり。仕立ての手仕事が薫る空間。',
  accentColor: '#8B0000',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#faf5f0" />
      {/* Measuring tape along top edge */}
      <rect x="0" y="0" width="91" height="2.5" fill="#f5e6c8" />
      {[...Array(91)].map((_, i) => (
        <line
          key={i}
          x1={i}
          y1={i % 10 === 0 ? 0 : i % 5 === 0 ? 0.8 : 1.2}
          x2={i}
          y2="2.5"
          stroke="#8B0000"
          strokeWidth={i % 10 === 0 ? '0.12' : '0.06'}
        />
      ))}
      {/* Small cm numbers */}
      {[...Array(10)].map((_, i) => (
        <text key={i} x={i * 10 + 0.5} y="1" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="0.7" fill="#8B0000">
          {i}
        </text>
      ))}
      {/* Name */}
      <text
        x="10"
        y="18"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#1a1a1a"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="24.5"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.6"
        fill="#8B0000"
      >
        {data.nameEn}
      </text>
      <line x1="10" y1="28" x2="60" y2="28" stroke="#d4c5b0" strokeWidth="0.08" />
      <text
        x="10"
        y="33"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="40"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#555555"
      >
        {data.companyJa}
      </text>
      {/* Scissors icon suggestion */}
      <text x="78" y="48" fontFamily="'Inter', sans-serif" fontSize="2" fill="#d4c5b0">
        ✂
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#faf5f0" />
      {/* Measuring tape along bottom edge */}
      <rect x="0" y="52.5" width="91" height="2.5" fill="#f5e6c8" />
      {[...Array(91)].map((_, i) => (
        <line
          key={i}
          x1={i}
          y1="52.5"
          x2={i}
          y2={i % 10 === 0 ? 55 : i % 5 === 0 ? 54.2 : 53.8}
          stroke="#8B0000"
          strokeWidth={i % 10 === 0 ? '0.12' : '0.06'}
        />
      ))}
      {/* Company */}
      <text
        x="10"
        y="13"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#1a1a1a"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="17.5"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        letterSpacing="0.3"
        fill="#8B0000"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="20.5" x2="81" y2="20.5" stroke="#d4c5b0" strokeWidth="0.06" />
      {/* Contact */}
      <text x="10" y="26" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.4" fill="#555555">
        {data.tel}
      </text>
      <text x="10" y="30" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.4" fill="#555555">
        {data.email}
      </text>
      <text x="10" y="34" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.4" fill="#555555">
        {data.website}
      </text>
      <line x1="10" y1="37.5" x2="81" y2="37.5" stroke="#d4c5b0" strokeWidth="0.06" />
      <text
        x="10"
        y="42.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#999999"
      >
        〒{data.zipCode}
      </text>
      <text
        x="10"
        y="46.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#999999"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 5. DRAPE (襞) — Flowing fabric drape curves
// Soft curves suggesting draped fabric
// ============================================================
const drapeTemplate: TemplateDefinition = {
  id: 'fashion-drape',
  name: 'DRAPE',
  nameJa: '襞',
  category: 'fashion',
  designer: 'Madeleine Vionnet',
  description: '布の襞が描く柔らかな曲線。流れるような優美さ。',
  accentColor: '#F4C2C2',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Drape curves */}
      <path d="M 0 0 Q 20 15 0 30" fill="none" stroke="#F4C2C2" strokeWidth="0.2" />
      <path d="M 0 0 Q 25 18 0 36" fill="none" stroke="#F4C2C2" strokeWidth="0.12" opacity="0.6" />
      <path d="M 0 0 Q 30 20 0 42" fill="none" stroke="#F4C2C2" strokeWidth="0.08" opacity="0.4" />
      <path d="M 91 55 Q 71 40 91 25" fill="none" stroke="#F4C2C2" strokeWidth="0.2" />
      <path d="M 91 55 Q 66 38 91 19" fill="none" stroke="#F4C2C2" strokeWidth="0.12" opacity="0.6" />
      <path d="M 91 55 Q 61 35 91 13" fill="none" stroke="#F4C2C2" strokeWidth="0.08" opacity="0.4" />
      {/* Name */}
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="6"
        letterSpacing="1"
        fill="#1a1a1a"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="29"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="2.2"
        letterSpacing="1"
        fill="#8B0000"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="38"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#ccaaaa"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Subtle drape at corners */}
      <path d="M 91 0 Q 75 10 91 20" fill="none" stroke="#F4C2C2" strokeWidth="0.15" />
      <path d="M 0 55 Q 16 45 0 35" fill="none" stroke="#F4C2C2" strokeWidth="0.15" />
      {/* Company */}
      <text
        x="45.5"
        y="13"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2.5"
        letterSpacing="0.6"
        fill="#1a1a1a"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="17.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.4"
        letterSpacing="0.5"
        fill="#ccaaaa"
      >
        {data.companyEn}
      </text>
      <line x1="30" y1="21" x2="61" y2="21" stroke="#F4C2C2" strokeWidth="0.06" />
      {/* Contact */}
      <text x="45.5" y="26" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.4" fill="#555555">
        {data.tel}
      </text>
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.4" fill="#555555">
        {data.email}
      </text>
      <text x="45.5" y="34" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.4" fill="#555555">
        {data.website}
      </text>
      <line x1="30" y1="37.5" x2="61" y2="37.5" stroke="#F4C2C2" strokeWidth="0.06" />
      <text
        x="45.5"
        y="42.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.1"
        fill="#ccaaaa"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 6. THREAD (糸) — Stitching lines and thread motif
// Dotted stitch lines creating structure
// ============================================================
const threadTemplate: TemplateDefinition = {
  id: 'fashion-thread',
  name: 'THREAD',
  nameJa: '糸',
  category: 'fashion',
  designer: 'Issey Miyake',
  description: '糸の一本一本が紡ぐ物語。縫い目の美学。',
  accentColor: '#8B0000',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#faf8f5" />
      {/* Stitch lines - horizontal */}
      <line x1="5" y1="10" x2="86" y2="10" stroke="#8B0000" strokeWidth="0.1" strokeDasharray="1.5,0.8" />
      <line x1="5" y1="44" x2="86" y2="44" stroke="#8B0000" strokeWidth="0.1" strokeDasharray="1.5,0.8" />
      {/* Vertical stitch on left */}
      <line x1="5" y1="10" x2="5" y2="44" stroke="#8B0000" strokeWidth="0.1" strokeDasharray="1.5,0.8" />
      {/* Cross stitch corner marks */}
      <line x1="3" y1="8" x2="7" y2="12" stroke="#8B0000" strokeWidth="0.08" />
      <line x1="7" y1="8" x2="3" y2="12" stroke="#8B0000" strokeWidth="0.08" />
      <line x1="3" y1="42" x2="7" y2="46" stroke="#8B0000" strokeWidth="0.08" />
      <line x1="7" y1="42" x2="3" y2="46" stroke="#8B0000" strokeWidth="0.08" />
      {/* Name */}
      <text
        x="14"
        y="24"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#1a1a1a"
      >
        {data.nameJa}
      </text>
      <text
        x="14"
        y="30.5"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.5"
        fill="#8B0000"
      >
        {data.nameEn}
      </text>
      <text
        x="14"
        y="37"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#999999"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#faf8f5" />
      {/* Stitch border */}
      <line x1="5" y1="10" x2="86" y2="10" stroke="#8B0000" strokeWidth="0.1" strokeDasharray="1.5,0.8" />
      <line x1="86" y1="10" x2="86" y2="44" stroke="#8B0000" strokeWidth="0.1" strokeDasharray="1.5,0.8" />
      <line x1="5" y1="44" x2="86" y2="44" stroke="#8B0000" strokeWidth="0.1" strokeDasharray="1.5,0.8" />
      {/* Company */}
      <text
        x="14"
        y="18"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#1a1a1a"
      >
        {data.companyJa}
      </text>
      <text
        x="14"
        y="22"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        letterSpacing="0.3"
        fill="#8B0000"
      >
        {data.companyEn}
      </text>
      <line x1="14" y1="24.5" x2="78" y2="24.5" stroke="#d4c5b0" strokeWidth="0.04" />
      {/* Contact */}
      <text x="14" y="29" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.4" fill="#555555">
        {data.tel}
      </text>
      <text x="14" y="33" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.4" fill="#555555">
        {data.email}
      </text>
      <text x="14" y="37" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.4" fill="#555555">
        {data.website}
      </text>
      <line x1="14" y1="39.5" x2="78" y2="39.5" stroke="#d4c5b0" strokeWidth="0.04" />
      <text
        x="14"
        y="48"
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
// 7. BESPOKE (誂) — Custom tailoring, precise measurements
// Structured layout suggesting precision tailoring
// ============================================================
const bespokeTemplate: TemplateDefinition = {
  id: 'fashion-bespoke',
  name: 'BESPOKE',
  nameJa: '誂',
  category: 'fashion',
  designer: 'Savile Row',
  description: 'ビスポークの精密さ。一点物の誇り。',
  accentColor: '#1a1a1a',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1a1a1a" />
      {/* Gold pinstripes */}
      {[...Array(46)].map((_, i) => (
        <line key={i} x1={i * 2} y1="0" x2={i * 2} y2="55" stroke="#B8860B" strokeWidth="0.03" opacity="0.3" />
      ))}
      {/* Gold accent line */}
      <rect x="8" y="8" width="0.3" height="39" fill="#B8860B" />
      {/* Name */}
      <text
        x="14"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="5.5"
        letterSpacing="0.8"
        fill="#ffffff"
      >
        {data.nameJa}
      </text>
      <text
        x="14"
        y="29"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="2.2"
        letterSpacing="0.8"
        fill="#B8860B"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="14"
        y="37"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      {/* Bespoke label */}
      <text
        x="83"
        y="46"
        textAnchor="end"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1"
        letterSpacing="1"
        fill="#B8860B"
        opacity="0.5"
      >
        BESPOKE
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1a1a1a" />
      {/* Gold pinstripes */}
      {[...Array(46)].map((_, i) => (
        <line key={i} x1={i * 2} y1="0" x2={i * 2} y2="55" stroke="#B8860B" strokeWidth="0.03" opacity="0.3" />
      ))}
      <rect x="8" y="8" width="0.3" height="39" fill="#B8860B" />
      {/* Company */}
      <text
        x="14"
        y="16"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2.5"
        letterSpacing="0.5"
        fill="#ffffff"
      >
        {data.companyJa}
      </text>
      <text
        x="14"
        y="20.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="1.3"
        letterSpacing="0.4"
        fill="#B8860B"
      >
        {data.companyEn}
      </text>
      <line x1="14" y1="23.5" x2="80" y2="23.5" stroke="#B8860B" strokeWidth="0.04" opacity="0.5" />
      {/* Contact */}
      <text x="14" y="28" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.4" fill="#cccccc">
        {data.tel}
      </text>
      <text x="14" y="32" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.4" fill="#cccccc">
        {data.email}
      </text>
      <text x="14" y="36" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.4" fill="#cccccc">
        {data.website}
      </text>
      <line x1="14" y1="39" x2="80" y2="39" stroke="#B8860B" strokeWidth="0.04" opacity="0.5" />
      <text
        x="14"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#888888"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 8. PATTERN-F (型紙) — Sewing pattern with dashed outlines
// Fashion pattern paper aesthetic
// ============================================================
const patternFTemplate: TemplateDefinition = {
  id: 'fashion-pattern',
  name: 'PATTERN-F',
  nameJa: '型紙',
  category: 'fashion',
  designer: 'Rei Kawakubo',
  description: '型紙の上に広がる可能性。パターンの構造美。',
  accentColor: '#2C3E50',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f5ede0" />
      {/* Pattern paper grid dots */}
      {[...Array(9)].map((_, row) =>
        [...Array(15)].map((_, col) => (
          <circle key={`${row}-${col}`} cx={col * 6 + 3} cy={row * 6 + 3} r="0.15" fill="#ccbbaa" />
        ))
      )}
      {/* Pattern piece outline - dashed */}
      <path
        d="M 15 8 L 76 8 L 80 15 L 80 42 L 76 47 L 15 47 L 11 42 L 11 15 Z"
        fill="none"
        stroke="#2C3E50"
        strokeWidth="0.12"
        strokeDasharray="2,1"
      />
      {/* Notch marks */}
      <line x1="45" y1="6" x2="45" y2="10" stroke="#2C3E50" strokeWidth="0.12" />
      <line x1="45" y1="45" x2="45" y2="49" stroke="#2C3E50" strokeWidth="0.12" />
      {/* Grain line arrow */}
      <line x1="20" y1="20" x2="20" y2="38" stroke="#2C3E50" strokeWidth="0.08" />
      <path d="M 19 21 L 20 18 L 21 21" fill="none" stroke="#2C3E50" strokeWidth="0.08" />
      <path d="M 19 37 L 20 40 L 21 37" fill="none" stroke="#2C3E50" strokeWidth="0.08" />
      {/* Name */}
      <text
        x="50"
        y="22"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5"
        fill="#2C3E50"
      >
        {data.nameJa}
      </text>
      <text
        x="50"
        y="28"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.5"
        fill="#8B0000"
      >
        {data.nameEn}
      </text>
      <text
        x="50"
        y="36"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      {/* Pattern label */}
      <text
        x="72"
        y="13"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="0.9"
        fill="#aaa099"
      >
        FRONT × 1
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f5ede0" />
      {/* Pattern paper grid dots */}
      {[...Array(9)].map((_, row) =>
        [...Array(15)].map((_, col) => (
          <circle key={`${row}-${col}`} cx={col * 6 + 3} cy={row * 6 + 3} r="0.15" fill="#ccbbaa" />
        ))
      )}
      {/* Pattern outline */}
      <path
        d="M 10 6 L 81 6 L 81 49 L 10 49 Z"
        fill="none"
        stroke="#2C3E50"
        strokeWidth="0.12"
        strokeDasharray="2,1"
      />
      {/* Company */}
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#2C3E50"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="18.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#8B0000"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="21.5" x2="71" y2="21.5" stroke="#ccbbaa" strokeWidth="0.06" />
      {/* Contact */}
      <text x="45.5" y="27" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#555555">
        {data.tel}
      </text>
      <text x="45.5" y="31" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#555555">
        {data.email}
      </text>
      <text x="45.5" y="35" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#555555">
        {data.website}
      </text>
      <line x1="20" y1="38" x2="71" y2="38" stroke="#ccbbaa" strokeWidth="0.06" />
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.1"
        fill="#aaa099"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
      <text
        x="75"
        y="11"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="0.9"
        fill="#aaa099"
      >
        BACK × 1
      </text>
    </g>
  ),
};

// ============================================================
// 9. FABRIC (布) — Woven fabric texture
// Crosshatch pattern suggesting woven textile
// ============================================================
const fabricTemplate: TemplateDefinition = {
  id: 'fashion-fabric',
  name: 'FABRIC',
  nameJa: '布',
  category: 'fashion',
  designer: 'Yohji Yamamoto',
  description: '布の質感。織りの中に宿る深い美意識。',
  accentColor: '#1a1a1a',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <pattern id="fashion-fabric-weave" width="2" height="2" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="2" y2="0" stroke="#e8e0d4" strokeWidth="0.08" />
          <line x1="0" y1="0" x2="0" y2="2" stroke="#e8e0d4" strokeWidth="0.08" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="#f5ede0" />
      <rect width="91" height="55" fill="url(#fashion-fabric-weave)" />
      {/* Selvage line on left */}
      <rect x="4" y="0" width="0.5" height="55" fill="#8B0000" opacity="0.3" />
      <rect x="5.5" y="0" width="0.2" height="55" fill="#8B0000" opacity="0.2" />
      {/* Name */}
      <text
        x="45.5"
        y="20"
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
        y="28"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2.2"
        letterSpacing="0.8"
        fill="#1a1a1a"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="37"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#555555"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <pattern id="fashion-fabric-weave-b" width="2" height="2" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="2" y2="0" stroke="#e8e0d4" strokeWidth="0.08" />
          <line x1="0" y1="0" x2="0" y2="2" stroke="#e8e0d4" strokeWidth="0.08" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="#f5ede0" />
      <rect width="91" height="55" fill="url(#fashion-fabric-weave-b)" />
      <rect x="4" y="0" width="0.5" height="55" fill="#8B0000" opacity="0.3" />
      <rect x="5.5" y="0" width="0.2" height="55" fill="#8B0000" opacity="0.2" />
      {/* Company */}
      <text
        x="45.5"
        y="13"
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
        y="17.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        letterSpacing="0.4"
        fill="#555555"
      >
        {data.companyEn}
      </text>
      <line x1="25" y1="21" x2="66" y2="21" stroke="#ccbbaa" strokeWidth="0.06" />
      {/* Contact */}
      <text x="45.5" y="26" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#555555">
        {data.tel}
      </text>
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#555555">
        {data.email}
      </text>
      <text x="45.5" y="34" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#555555">
        {data.website}
      </text>
      <line x1="25" y1="37.5" x2="66" y2="37.5" stroke="#ccbbaa" strokeWidth="0.06" />
      <text
        x="45.5"
        y="42.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.1"
        fill="#999999"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="46"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.1"
        fill="#999999"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 10. MAISON (家) — Fashion house brand identity
// Luxury maison branding with monogram-like design
// ============================================================
const maisonTemplate: TemplateDefinition = {
  id: 'fashion-maison',
  name: 'MAISON',
  nameJa: '家',
  category: 'fashion',
  designer: 'Hubert de Givenchy',
  description: 'メゾンの格式。ブランドの歴史と誇りを纏う。',
  accentColor: '#B8860B',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="fashion-maison-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B8860B" />
          <stop offset="50%" stopColor="#DAA520" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#0a0a0a" />
      {/* Ornamental border */}
      <rect x="5" y="5" width="81" height="45" fill="none" stroke="url(#fashion-maison-gold)" strokeWidth="0.12" />
      <rect x="6.5" y="6.5" width="78" height="42" fill="none" stroke="#B8860B" strokeWidth="0.04" />
      {/* Corner ornaments */}
      <circle cx="5" cy="5" r="0.8" fill="#B8860B" />
      <circle cx="86" cy="5" r="0.8" fill="#B8860B" />
      <circle cx="5" cy="50" r="0.8" fill="#B8860B" />
      <circle cx="86" cy="50" r="0.8" fill="#B8860B" />
      {/* Name */}
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="6"
        letterSpacing="1.5"
        fill="#ffffff"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="2.5"
        letterSpacing="2"
        fill="#B8860B"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Gold line */}
      <line x1="30" y1="34.5" x2="61" y2="34.5" stroke="#B8860B" strokeWidth="0.06" />
      <text
        x="45.5"
        y="40"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        letterSpacing="0.5"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      {/* Maison text */}
      <text
        x="45.5"
        y="46"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1"
        letterSpacing="2"
        fill="#B8860B"
        opacity="0.5"
      >
        MAISON
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="fashion-maison-gold-b" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B8860B" />
          <stop offset="50%" stopColor="#DAA520" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#0a0a0a" />
      <rect x="5" y="5" width="81" height="45" fill="none" stroke="url(#fashion-maison-gold-b)" strokeWidth="0.12" />
      <rect x="6.5" y="6.5" width="78" height="42" fill="none" stroke="#B8860B" strokeWidth="0.04" />
      <circle cx="5" cy="5" r="0.8" fill="#B8860B" />
      <circle cx="86" cy="5" r="0.8" fill="#B8860B" />
      <circle cx="5" cy="50" r="0.8" fill="#B8860B" />
      <circle cx="86" cy="50" r="0.8" fill="#B8860B" />
      {/* Company */}
      <text
        x="45.5"
        y="15"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2.5"
        letterSpacing="1"
        fill="#ffffff"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="19.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.3"
        letterSpacing="0.8"
        fill="#B8860B"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <line x1="25" y1="22.5" x2="66" y2="22.5" stroke="#B8860B" strokeWidth="0.04" />
      {/* Contact */}
      <text x="45.5" y="27.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.4" fill="#cccccc">
        {data.tel}
      </text>
      <text x="45.5" y="31.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.4" fill="#cccccc">
        {data.email}
      </text>
      <text x="45.5" y="35.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.4" fill="#cccccc">
        {data.website}
      </text>
      <line x1="25" y1="38.5" x2="66" y2="38.5" stroke="#B8860B" strokeWidth="0.04" />
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.1"
        fill="#666666"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

export const fashionTemplates: TemplateDefinition[] = [
  coutureTemplate,
  vogueTemplate,
  runwayTemplate,
  atelierFTemplate,
  drapeTemplate,
  threadTemplate,
  bespokeTemplate,
  patternFTemplate,
  fabricTemplate,
  maisonTemplate,
];
