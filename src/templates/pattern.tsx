import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. STRIPE (縞) — Horizontal stripe pattern
// Clean parallel lines creating rhythm and movement
// ============================================================
const stripeTemplate: TemplateDefinition = {
  id: 'pattern-stripe',
  name: 'STRIPE',
  nameJa: '縞',
  category: 'pattern',
  designer: 'Daniel Buren',
  description: '縞模様の秩序。平行線が生み出すリズムと動き。',
  accentColor: '#1B4965',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Horizontal stripes background */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => (
        <rect key={`pattern-stripe-fh-${i}`} x="0" y={i * 4} width="91" height="2" fill="#1B4965" opacity="0.06" />
      ))}
      {/* Accent stripe */}
      <rect x="0" y="18" width="91" height="2" fill="#1B4965" opacity="0.15" />
      {/* Name */}
      <text
        x="10"
        y="25"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#1B4965"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="31"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#5FA8D3"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="10"
        y="37"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#88B4CC"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="46"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#88B4CC"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Stripes on right third */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => (
        <rect key={`pattern-stripe-bh-${i}`} x="62" y={i * 4} width="29" height="2" fill="#1B4965" opacity="0.06" />
      ))}
      {/* Company */}
      <text
        x="10"
        y="13"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#1B4965"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="17.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5FA8D3"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="21" x2="55" y2="21" stroke="#1B4965" strokeWidth="0.15" />
      {/* Contact */}
      <text
        x="10"
        y="27"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#3A7CA5"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="31"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#3A7CA5"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="35"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#3A7CA5"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#88B4CC"
      >
        〒{data.zipCode}
      </text>
      <text
        x="10"
        y="47"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#88B4CC"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 2. CHECK (市松) — Ichimatsu checkerboard pattern
// Traditional Japanese checkerboard grid
// ============================================================
const checkTemplate: TemplateDefinition = {
  id: 'pattern-check',
  name: 'CHECK',
  nameJa: '市松',
  category: 'pattern',
  designer: 'Tokolo Asao',
  description: '市松模様。伝統の格子が現代に息づく。',
  accentColor: '#2D5016',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f8f8f4" />
      {/* Checkerboard pattern in top-right corner */}
      <defs>
        <pattern id="pattern-check-fg" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="2" height="2" fill="#2D5016" opacity="0.08" />
          <rect x="2" y="2" width="2" height="2" fill="#2D5016" opacity="0.08" />
        </pattern>
      </defs>
      <rect x="50" y="0" width="41" height="25" fill="url(#pattern-check-fg)" />
      {/* Name */}
      <text
        x="8"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.6"
        fill="#2D5016"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="28"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#5A7D3A"
      >
        {data.nameEn}
      </text>
      <text
        x="8"
        y="35"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#8AAA6A"
      >
        {data.titleJa}
      </text>
      {/* Single check accent */}
      <rect x="8" y="42" width="2.5" height="2.5" fill="#2D5016" opacity="0.15" />
      <rect x="11" y="42" width="2.5" height="2.5" fill="#2D5016" opacity="0.07" />
      <rect x="8" y="45" width="2.5" height="2.5" fill="#2D5016" opacity="0.07" />
      <rect x="11" y="45" width="2.5" height="2.5" fill="#2D5016" opacity="0.15" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f8f8f4" />
      {/* Checkerboard at bottom-left */}
      <defs>
        <pattern id="pattern-check-bg" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="2" height="2" fill="#2D5016" opacity="0.06" />
          <rect x="2" y="2" width="2" height="2" fill="#2D5016" opacity="0.06" />
        </pattern>
      </defs>
      <rect x="0" y="35" width="35" height="20" fill="url(#pattern-check-bg)" />
      {/* Company */}
      <text
        x="81"
        y="12"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#2D5016"
      >
        {data.companyJa}
      </text>
      <text
        x="81"
        y="16.5"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5A7D3A"
      >
        {data.companyEn}
      </text>
      <line x1="40" y1="20" x2="81" y2="20" stroke="#2D5016" strokeWidth="0.1" opacity="0.3" />
      {/* Contact */}
      <text
        x="81"
        y="26"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#4A6D2A"
      >
        {data.tel}
      </text>
      <text
        x="81"
        y="30"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#4A6D2A"
      >
        {data.email}
      </text>
      <text
        x="81"
        y="34"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#4A6D2A"
      >
        {data.website}
      </text>
      <text
        x="81"
        y="44"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#8AAA6A"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 3. HERRINGBONE (杉綾) — Zigzag weave pattern
// V-shaped lines creating a herringbone textile effect
// ============================================================
const herringboneTemplate: TemplateDefinition = {
  id: 'pattern-herringbone',
  name: 'HERRINGBONE',
  nameJa: '杉綾',
  category: 'pattern',
  designer: 'Coco Chanel',
  description: '杉綾織りの上品さ。V字の連続が生む布の表情。',
  accentColor: '#5C4033',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#faf8f5" />
      {/* Herringbone pattern on right side */}
      <defs>
        <pattern id="pattern-herringbone-fg" x="0" y="0" width="6" height="8" patternUnits="userSpaceOnUse">
          <path d="M 0,0 L 3,4 L 0,8" fill="none" stroke="#5C4033" strokeWidth="0.15" opacity="0.12" />
          <path d="M 3,0 L 6,4 L 3,8" fill="none" stroke="#5C4033" strokeWidth="0.15" opacity="0.12" />
        </pattern>
      </defs>
      <rect x="55" y="0" width="36" height="55" fill="url(#pattern-herringbone-fg)" />
      {/* Name */}
      <text
        x="8"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.4"
        fill="#3C2A1E"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="26"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#8B6F5E"
      >
        {data.nameEn}
      </text>
      <text
        x="8"
        y="33"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#A08070"
      >
        {data.titleJa}
      </text>
      {/* Herringbone accent line */}
      <path d="M 8,40 L 11,43 L 8,46" fill="none" stroke="#5C4033" strokeWidth="0.3" opacity="0.3" />
      <path d="M 11,40 L 14,43 L 11,46" fill="none" stroke="#5C4033" strokeWidth="0.3" opacity="0.3" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#faf8f5" />
      {/* Herringbone on left edge */}
      <defs>
        <pattern id="pattern-herringbone-bg" x="0" y="0" width="6" height="8" patternUnits="userSpaceOnUse">
          <path d="M 0,0 L 3,4 L 0,8" fill="none" stroke="#5C4033" strokeWidth="0.15" opacity="0.08" />
          <path d="M 3,0 L 6,4 L 3,8" fill="none" stroke="#5C4033" strokeWidth="0.15" opacity="0.08" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="20" height="55" fill="url(#pattern-herringbone-bg)" />
      {/* Company */}
      <text
        x="28"
        y="13"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#3C2A1E"
      >
        {data.companyJa}
      </text>
      <text
        x="28"
        y="17.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8B6F5E"
      >
        {data.companyEn}
      </text>
      <line x1="28" y1="21" x2="81" y2="21" stroke="#5C4033" strokeWidth="0.1" opacity="0.2" />
      {/* Contact */}
      <text
        x="28"
        y="27"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#6B5040"
      >
        {data.tel}
      </text>
      <text
        x="28"
        y="31"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#6B5040"
      >
        {data.email}
      </text>
      <text
        x="28"
        y="35"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#6B5040"
      >
        {data.website}
      </text>
      <text
        x="28"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#A08070"
      >
        〒{data.zipCode}
      </text>
      <text
        x="28"
        y="47"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#A08070"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 4. DOTS-P (水玉) — Polka dot pattern
// Playful circles in organic arrangement
// ============================================================
const dotsPTemplate: TemplateDefinition = {
  id: 'pattern-dots-p',
  name: 'DOTS-P',
  nameJa: '水玉',
  category: 'pattern',
  designer: 'Yayoi Kusama',
  description: '水玉模様の宇宙。無限に広がる円の饗宴。',
  accentColor: '#C41E3A',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#fff5f5" />
      {/* Polka dots scattered */}
      <circle cx="78" cy="8" r="3" fill="#C41E3A" opacity="0.08" />
      <circle cx="85" cy="18" r="2" fill="#C41E3A" opacity="0.1" />
      <circle cx="72" cy="14" r="1.5" fill="#C41E3A" opacity="0.12" />
      <circle cx="80" cy="28" r="2.5" fill="#C41E3A" opacity="0.06" />
      <circle cx="68" cy="5" r="1.8" fill="#C41E3A" opacity="0.09" />
      <circle cx="88" cy="40" r="1.2" fill="#C41E3A" opacity="0.14" />
      <circle cx="75" cy="38" r="3.5" fill="#C41E3A" opacity="0.05" />
      <circle cx="82" cy="48" r="2" fill="#C41E3A" opacity="0.08" />
      <circle cx="65" cy="45" r="1" fill="#C41E3A" opacity="0.15" />
      <circle cx="70" cy="25" r="2.2" fill="#C41E3A" opacity="0.07" />
      <circle cx="86" cy="33" r="1.5" fill="#C41E3A" opacity="0.1" />
      {/* Name */}
      <text
        x="10"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#C41E3A"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="28"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#D4546A"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="35"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#E08090"
      >
        {data.titleJa}
      </text>
      {/* Dot accent */}
      <circle cx="10" cy="44" r="1.5" fill="#C41E3A" opacity="0.2" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#fff5f5" />
      {/* Scattered dots */}
      <circle cx="5" cy="48" r="2.5" fill="#C41E3A" opacity="0.06" />
      <circle cx="12" cy="42" r="1.5" fill="#C41E3A" opacity="0.1" />
      <circle cx="3" cy="38" r="1" fill="#C41E3A" opacity="0.12" />
      <circle cx="18" cy="50" r="3" fill="#C41E3A" opacity="0.05" />
      <circle cx="8" cy="52" r="1.8" fill="#C41E3A" opacity="0.08" />
      {/* Company */}
      <text
        x="10"
        y="12"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#C41E3A"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="16.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#D4546A"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="20" x2="50" y2="20" stroke="#C41E3A" strokeWidth="0.1" opacity="0.2" />
      {/* Contact */}
      <text
        x="10"
        y="26"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#A0162E"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="30"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#A0162E"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="34"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#A0162E"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#E08090"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 5. HOUNDSTOOTH (犬牙) — Classic houndstooth textile
// Interlocking abstract four-pointed shapes
// ============================================================
const houndstoothTemplate: TemplateDefinition = {
  id: 'pattern-houndstooth',
  name: 'HOUNDSTOOTH',
  nameJa: '犬牙',
  category: 'pattern',
  designer: 'Alexander McQueen',
  description: '犬牙模様の鋭さ。交差する形が生むテキスタイルの力。',
  accentColor: '#1a1a1a',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Houndstooth pattern top-right */}
      <defs>
        <pattern id="pattern-houndstooth-fg" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
          <path d="M 0,0 L 4,0 L 4,4 L 8,4 L 8,8 L 4,8 L 4,4 L 0,4 Z" fill="#1a1a1a" opacity="0.08" />
          <path d="M 2,0 L 4,2 L 2,4 L 0,2 Z" fill="#1a1a1a" opacity="0.06" />
          <path d="M 6,4 L 8,6 L 6,8 L 4,6 Z" fill="#1a1a1a" opacity="0.06" />
        </pattern>
      </defs>
      <rect x="55" y="0" width="36" height="20" fill="url(#pattern-houndstooth-fg)" />
      {/* Bottom-left corner pattern */}
      <rect x="0" y="40" width="30" height="15" fill="url(#pattern-houndstooth-fg)" />
      {/* Name */}
      <text
        x="10"
        y="28"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#1a1a1a"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="34"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.4"
        fill="#555555"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="55"
        y="34"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#888888"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Full background subtle houndstooth */}
      <defs>
        <pattern id="pattern-houndstooth-bg" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
          <path d="M 0,0 L 4,0 L 4,4 L 8,4 L 8,8 L 4,8 L 4,4 L 0,4 Z" fill="#1a1a1a" opacity="0.03" />
          <path d="M 2,0 L 4,2 L 2,4 L 0,2 Z" fill="#1a1a1a" opacity="0.02" />
          <path d="M 6,4 L 8,6 L 6,8 L 4,6 Z" fill="#1a1a1a" opacity="0.02" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#pattern-houndstooth-bg)" />
      {/* Company */}
      <text
        x="10"
        y="13"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#1a1a1a"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="17.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        letterSpacing="0.2"
        fill="#666666"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="21" x2="81" y2="21" stroke="#1a1a1a" strokeWidth="0.1" />
      {/* Contact */}
      <text
        x="10"
        y="27"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#333333"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="31"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#333333"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="35"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#333333"
      >
        {data.website}
      </text>
      <text
        x="10"
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
// 6. ARGYLE (菱) — Diamond argyle pattern
// Overlapping diamonds with thin diagonal lines
// ============================================================
const argyleTemplate: TemplateDefinition = {
  id: 'pattern-argyle',
  name: 'ARGYLE',
  nameJa: '菱',
  category: 'pattern',
  designer: 'Pringle of Scotland',
  description: '菱形の連鎖。アーガイルの格調高い繰り返し。',
  accentColor: '#6B2D5B',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#fdf8fb" />
      {/* Argyle diamonds */}
      <defs>
        <pattern id="pattern-argyle-fg" x="0" y="0" width="10" height="14" patternUnits="userSpaceOnUse">
          <polygon points="5,0 10,7 5,14 0,7" fill="#6B2D5B" opacity="0.06" />
          <line x1="0" y1="0" x2="10" y2="14" stroke="#6B2D5B" strokeWidth="0.1" opacity="0.08" />
          <line x1="10" y1="0" x2="0" y2="14" stroke="#6B2D5B" strokeWidth="0.1" opacity="0.08" />
        </pattern>
      </defs>
      <rect x="60" y="0" width="31" height="55" fill="url(#pattern-argyle-fg)" />
      {/* Name */}
      <text
        x="8"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.4"
        fill="#4A1D40"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="26"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#8B4D7B"
      >
        {data.nameEn}
      </text>
      <text
        x="8"
        y="33"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#AA7D9B"
      >
        {data.titleJa}
      </text>
      {/* Single diamond accent */}
      <polygon points="12,42 15,46 12,50 9,46" fill="none" stroke="#6B2D5B" strokeWidth="0.2" opacity="0.3" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#fdf8fb" />
      {/* Subtle argyle background */}
      <defs>
        <pattern id="pattern-argyle-bg" x="0" y="0" width="10" height="14" patternUnits="userSpaceOnUse">
          <polygon points="5,0 10,7 5,14 0,7" fill="#6B2D5B" opacity="0.03" />
          <line x1="0" y1="0" x2="10" y2="14" stroke="#6B2D5B" strokeWidth="0.08" opacity="0.04" />
          <line x1="10" y1="0" x2="0" y2="14" stroke="#6B2D5B" strokeWidth="0.08" opacity="0.04" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#pattern-argyle-bg)" />
      {/* Company */}
      <text
        x="10"
        y="13"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#4A1D40"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="17.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8B4D7B"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="21" x2="55" y2="21" stroke="#6B2D5B" strokeWidth="0.12" opacity="0.2" />
      {/* Contact */}
      <text
        x="10"
        y="27"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5A2D4B"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="31"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5A2D4B"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="35"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5A2D4B"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#AA7D9B"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 7. PLAID (格子縞) — Tartan plaid pattern
// Overlapping horizontal and vertical colored bands
// ============================================================
const plaidTemplate: TemplateDefinition = {
  id: 'pattern-plaid',
  name: 'PLAID',
  nameJa: '格子縞',
  category: 'pattern',
  designer: 'Vivienne Westwood',
  description: '格子縞の反骨。色の交差が織りなすスコットランドの誇り。',
  accentColor: '#8B2500',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#faf5f0" />
      {/* Plaid pattern - overlapping bands */}
      <defs>
        <pattern id="pattern-plaid-fg" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
          {/* Horizontal bands */}
          <rect x="0" y="0" width="12" height="3" fill="#8B2500" opacity="0.06" />
          <rect x="0" y="5" width="12" height="1" fill="#2F4F2F" opacity="0.08" />
          <rect x="0" y="8" width="12" height="0.5" fill="#DAA520" opacity="0.1" />
          {/* Vertical bands */}
          <rect x="0" y="0" width="3" height="12" fill="#8B2500" opacity="0.06" />
          <rect x="5" y="0" width="1" height="12" fill="#2F4F2F" opacity="0.08" />
          <rect x="8" y="0" width="0.5" height="12" fill="#DAA520" opacity="0.1" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#pattern-plaid-fg)" />
      {/* White text backing */}
      <rect x="6" y="14" width="50" height="28" fill="#faf5f0" opacity="0.9" />
      {/* Name */}
      <text
        x="10"
        y="24"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.4"
        fill="#5C1800"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="30"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#8B5040"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="37"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#AA7060"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#faf5f0" />
      {/* Lighter plaid */}
      <defs>
        <pattern id="pattern-plaid-bg" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="12" height="3" fill="#8B2500" opacity="0.03" />
          <rect x="0" y="5" width="12" height="1" fill="#2F4F2F" opacity="0.04" />
          <rect x="0" y="8" width="12" height="0.5" fill="#DAA520" opacity="0.05" />
          <rect x="0" y="0" width="3" height="12" fill="#8B2500" opacity="0.03" />
          <rect x="5" y="0" width="1" height="12" fill="#2F4F2F" opacity="0.04" />
          <rect x="8" y="0" width="0.5" height="12" fill="#DAA520" opacity="0.05" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#pattern-plaid-bg)" />
      {/* White backing for text */}
      <rect x="6" y="5" width="79" height="44" fill="#faf5f0" opacity="0.85" rx="0.5" />
      {/* Company */}
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#5C1800"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8B5040"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="22" x2="81" y2="22" stroke="#8B2500" strokeWidth="0.1" opacity="0.2" />
      {/* Contact */}
      <text
        x="10"
        y="28"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#6B3020"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#6B3020"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#6B3020"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#AA7060"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 8. ZIGZAG-P (波型) — Chevron zigzag pattern
// Bold zigzag lines creating energetic movement
// ============================================================
const zigzagPTemplate: TemplateDefinition = {
  id: 'pattern-zigzag-p',
  name: 'ZIGZAG-P',
  nameJa: '波型',
  category: 'pattern',
  designer: 'Missoni',
  description: '波型のエネルギー。ジグザグが走る躍動の連鎖。',
  accentColor: '#E65100',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#fff8f0" />
      {/* Zigzag pattern at top */}
      <defs>
        <pattern id="pattern-zigzag-p-fg" x="0" y="0" width="8" height="6" patternUnits="userSpaceOnUse">
          <polyline points="0,6 4,0 8,6" fill="none" stroke="#E65100" strokeWidth="0.2" opacity="0.12" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="91" height="14" fill="url(#pattern-zigzag-p-fg)" />
      {/* Single bold zigzag accent */}
      <polyline points="0,14 8,8 16,14 24,8 32,14 40,8 48,14 56,8 64,14 72,8 80,14 88,8 91,10.25" fill="none" stroke="#E65100" strokeWidth="0.3" opacity="0.2" />
      {/* Name */}
      <text
        x="10"
        y="28"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#BF4400"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="34"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#E68040"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="10"
        y="41"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#F0A070"
      >
        {data.titleJa}
      </text>
      {/* Bottom zigzag */}
      <polyline points="0,50 4,47 8,50 12,47 16,50 20,47 24,50" fill="none" stroke="#E65100" strokeWidth="0.15" opacity="0.15" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#fff8f0" />
      {/* Zigzag bottom edge */}
      <defs>
        <pattern id="pattern-zigzag-p-bg" x="0" y="0" width="8" height="6" patternUnits="userSpaceOnUse">
          <polyline points="0,6 4,0 8,6" fill="none" stroke="#E65100" strokeWidth="0.15" opacity="0.06" />
        </pattern>
      </defs>
      <rect x="0" y="42" width="91" height="13" fill="url(#pattern-zigzag-p-bg)" />
      {/* Company */}
      <text
        x="10"
        y="13"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#BF4400"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="17.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#E68040"
      >
        {data.companyEn}
      </text>
      <polyline points="10,21 14,19 18,21 22,19 26,21 30,19 34,21" fill="none" stroke="#E65100" strokeWidth="0.15" opacity="0.3" />
      {/* Contact */}
      <text
        x="10"
        y="27"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#CC5500"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="31"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#CC5500"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="35"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#CC5500"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#F0A070"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 9. SCALE (鱗) — Fish scale / scallop pattern
// Overlapping semicircles creating scale texture
// ============================================================
const scaleTemplate: TemplateDefinition = {
  id: 'pattern-scale',
  name: 'SCALE',
  nameJa: '鱗',
  category: 'pattern',
  designer: 'Katsushika Hokusai',
  description: '鱗文様の波動。半円の連なりが生む和の美。',
  accentColor: '#1A5276',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f0f6fa" />
      {/* Scale pattern */}
      <defs>
        <pattern id="pattern-scale-fg" x="0" y="0" width="6" height="5" patternUnits="userSpaceOnUse">
          <path d="M 0,5 A 3,3 0 0 1 6,5" fill="none" stroke="#1A5276" strokeWidth="0.15" opacity="0.1" />
          <path d="M -3,2.5 A 3,3 0 0 1 3,2.5" fill="none" stroke="#1A5276" strokeWidth="0.15" opacity="0.1" />
          <path d="M 3,2.5 A 3,3 0 0 1 9,2.5" fill="none" stroke="#1A5276" strokeWidth="0.15" opacity="0.1" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="91" height="55" fill="url(#pattern-scale-fg)" />
      {/* Text backing */}
      <rect x="5" y="12" width="52" height="32" fill="#f0f6fa" opacity="0.92" rx="0.5" />
      {/* Name */}
      <text
        x="10"
        y="24"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#1A5276"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="30"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#4A82A6"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="37"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#7AB2D6"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f0f6fa" />
      {/* Lighter scale pattern */}
      <defs>
        <pattern id="pattern-scale-bg" x="0" y="0" width="6" height="5" patternUnits="userSpaceOnUse">
          <path d="M 0,5 A 3,3 0 0 1 6,5" fill="none" stroke="#1A5276" strokeWidth="0.1" opacity="0.06" />
          <path d="M -3,2.5 A 3,3 0 0 1 3,2.5" fill="none" stroke="#1A5276" strokeWidth="0.1" opacity="0.06" />
          <path d="M 3,2.5 A 3,3 0 0 1 9,2.5" fill="none" stroke="#1A5276" strokeWidth="0.1" opacity="0.06" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#pattern-scale-bg)" />
      {/* Text backing */}
      <rect x="5" y="4" width="81" height="46" fill="#f0f6fa" opacity="0.88" rx="0.5" />
      {/* Company */}
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#1A5276"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#4A82A6"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="22" x2="55" y2="22" stroke="#1A5276" strokeWidth="0.1" opacity="0.2" />
      {/* Contact */}
      <text
        x="10"
        y="28"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#2A6286"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#2A6286"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#2A6286"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#7AB2D6"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 10. MOSAIC (寄木) — Geometric mosaic / parquet
// Interlocking geometric shapes forming a mosaic
// ============================================================
const mosaicTemplate: TemplateDefinition = {
  id: 'pattern-mosaic',
  name: 'MOSAIC',
  nameJa: '寄木',
  category: 'pattern',
  designer: 'Antoni Gaudí',
  description: '寄木細工の調和。異なる形が寄り添い大きな美を成す。',
  accentColor: '#C17817',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#faf6f0" />
      {/* Mosaic tiles pattern */}
      <defs>
        <pattern id="pattern-mosaic-fg" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="5" height="3" fill="#C17817" opacity="0.06" />
          <rect x="5" y="0" width="3" height="5" fill="#8B5E3C" opacity="0.05" />
          <rect x="0" y="3" width="3" height="5" fill="#D4A050" opacity="0.04" />
          <rect x="3" y="5" width="5" height="3" fill="#A07030" opacity="0.05" />
          <rect x="8" y="5" width="2" height="5" fill="#C17817" opacity="0.04" />
          <rect x="0" y="8" width="5" height="2" fill="#8B5E3C" opacity="0.06" />
          <rect x="5" y="8" width="3" height="2" fill="#D4A050" opacity="0.03" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="91" height="18" fill="url(#pattern-mosaic-fg)" />
      <rect x="0" y="40" width="91" height="15" fill="url(#pattern-mosaic-fg)" />
      {/* Mosaic border line */}
      <line x1="0" y1="18" x2="91" y2="18" stroke="#C17817" strokeWidth="0.2" opacity="0.15" />
      <line x1="0" y1="40" x2="91" y2="40" stroke="#C17817" strokeWidth="0.2" opacity="0.15" />
      {/* Name */}
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.6"
        fill="#7A4810"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="33"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.4"
        fill="#B07830"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="38"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#C09850"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#faf6f0" />
      {/* Mosaic border at top */}
      <defs>
        <pattern id="pattern-mosaic-bg" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="5" height="3" fill="#C17817" opacity="0.04" />
          <rect x="5" y="0" width="3" height="5" fill="#8B5E3C" opacity="0.03" />
          <rect x="0" y="3" width="3" height="5" fill="#D4A050" opacity="0.03" />
          <rect x="3" y="5" width="5" height="3" fill="#A07030" opacity="0.04" />
          <rect x="8" y="5" width="2" height="5" fill="#C17817" opacity="0.03" />
          <rect x="0" y="8" width="5" height="2" fill="#8B5E3C" opacity="0.04" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="91" height="8" fill="url(#pattern-mosaic-bg)" />
      <line x1="0" y1="8" x2="91" y2="8" stroke="#C17817" strokeWidth="0.15" opacity="0.15" />
      {/* Company */}
      <text
        x="10"
        y="17"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#7A4810"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="21.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#B07830"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="25" x2="55" y2="25" stroke="#C17817" strokeWidth="0.1" opacity="0.2" />
      {/* Contact */}
      <text
        x="10"
        y="31"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8A5820"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="35"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8A5820"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="39"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8A5820"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="47"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#C09850"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

export const patternTemplates: TemplateDefinition[] = [
  stripeTemplate,
  checkTemplate,
  herringboneTemplate,
  dotsPTemplate,
  houndstoothTemplate,
  argyleTemplate,
  plaidTemplate,
  zigzagPTemplate,
  scaleTemplate,
  mosaicTemplate,
];
