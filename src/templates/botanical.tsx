import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. FERN (蕨) — Unfurling fern fronds
// Delicate curling frond shapes with forest greens
// ============================================================
const fernTemplate: TemplateDefinition = {
  id: 'botanical-fern',
  name: 'FERN',
  nameJa: '蕨',
  category: 'botanical',
  designer: 'Botanical Studio',
  description: '蕨の渦巻き。森の床に広がる原始的な美しさ。',
  accentColor: '#228B22',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FDFAF5" />
      <defs>
        <clipPath id="botanical-fern-clip">
          <rect width="91" height="55" />
        </clipPath>
      </defs>
      <g clipPath="url(#botanical-fern-clip)" opacity="0.2">
        {/* Fern frond curls */}
        <path d="M80,55 Q78,42 72,35 Q68,30 70,25 Q73,20 71,14 Q69,10 72,5" fill="none" stroke="#228B22" strokeWidth="0.5" />
        <path d="M72,35 Q66,33 62,36" fill="none" stroke="#228B22" strokeWidth="0.3" />
        <path d="M70,25 Q64,23 60,26" fill="none" stroke="#228B22" strokeWidth="0.3" />
        <path d="M71,14 Q65,12 62,15" fill="none" stroke="#228B22" strokeWidth="0.3" />
        <path d="M72,35 Q76,32 79,34" fill="none" stroke="#228B22" strokeWidth="0.3" />
        <path d="M70,25 Q74,22 77,24" fill="none" stroke="#228B22" strokeWidth="0.3" />
        <path d="M71,14 Q75,11 78,13" fill="none" stroke="#228B22" strokeWidth="0.3" />
        {/* Spiral tip */}
        <path d="M72,5 Q74,2 76,3 Q78,5 75,7" fill="none" stroke="#228B22" strokeWidth="0.4" />
      </g>
      <text
        x="10"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="6"
        letterSpacing="0.5"
        fill="#2D4A2D"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="27"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2.2"
        letterSpacing="0.5"
        fontStyle="italic"
        fill="#228B22"
      >
        {data.nameEn}
      </text>
      <line x1="10" y1="31" x2="45" y2="31" stroke="#228B22" strokeWidth="0.15" />
      <text
        x="10"
        y="37"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#6B8E6B"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#8BAA8B"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FDFAF5" />
      <g opacity="0.12">
        <path d="M5,55 Q8,42 14,35 Q18,30 16,25 Q13,20 15,14 Q17,10 14,5" fill="none" stroke="#228B22" strokeWidth="0.5" />
        <path d="M14,35 Q20,33 24,36" fill="none" stroke="#228B22" strokeWidth="0.3" />
        <path d="M16,25 Q22,23 26,26" fill="none" stroke="#228B22" strokeWidth="0.3" />
        <path d="M14,35 Q10,32 7,34" fill="none" stroke="#228B22" strokeWidth="0.3" />
        <path d="M16,25 Q12,22 9,24" fill="none" stroke="#228B22" strokeWidth="0.3" />
      </g>
      <text
        x="81"
        y="13"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#2D4A2D"
      >
        {data.companyJa}
      </text>
      <text
        x="81"
        y="17.5"
        textAnchor="end"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        fontStyle="italic"
        fill="#228B22"
      >
        {data.companyEn}
      </text>
      <line x1="40" y1="21" x2="81" y2="21" stroke="#228B22" strokeWidth="0.15" />
      <text
        x="81"
        y="27"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5D7A5D"
      >
        {data.tel}
      </text>
      <text
        x="81"
        y="31"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5D7A5D"
      >
        {data.email}
      </text>
      <text
        x="81"
        y="35"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5D7A5D"
      >
        {data.website}
      </text>
      <line x1="40" y1="38.5" x2="81" y2="38.5" stroke="#228B22" strokeWidth="0.15" />
      <text
        x="81"
        y="44"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#8BAA8B"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 2. LOTUS (蓮) — Sacred lotus blossom
// Layered petal shapes radiating from center
// ============================================================
const lotusTemplate: TemplateDefinition = {
  id: 'botanical-lotus',
  name: 'LOTUS',
  nameJa: '蓮',
  category: 'botanical',
  designer: 'Botanical Studio',
  description: '蓮の花弁。水面から立ち上がる聖なる美。',
  accentColor: '#E8A0BF',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFF8F0" />
      <defs>
        <clipPath id="botanical-lotus-clip">
          <rect width="91" height="55" />
        </clipPath>
      </defs>
      <g clipPath="url(#botanical-lotus-clip)" opacity="0.15">
        {/* Lotus petals radiating from bottom-right corner */}
        <ellipse cx="82" cy="50" rx="8" ry="16" fill="none" stroke="#E8A0BF" strokeWidth="0.3" transform="rotate(-15,82,50)" />
        <ellipse cx="82" cy="50" rx="8" ry="16" fill="none" stroke="#E8A0BF" strokeWidth="0.3" transform="rotate(15,82,50)" />
        <ellipse cx="82" cy="50" rx="8" ry="16" fill="none" stroke="#E8A0BF" strokeWidth="0.3" transform="rotate(0,82,50)" />
        <ellipse cx="82" cy="50" rx="7" ry="14" fill="none" stroke="#E8A0BF" strokeWidth="0.3" transform="rotate(-30,82,50)" />
        <ellipse cx="82" cy="50" rx="7" ry="14" fill="none" stroke="#E8A0BF" strokeWidth="0.3" transform="rotate(30,82,50)" />
        <ellipse cx="82" cy="50" rx="6" ry="12" fill="none" stroke="#D4899A" strokeWidth="0.3" transform="rotate(-45,82,50)" />
        <ellipse cx="82" cy="50" rx="6" ry="12" fill="none" stroke="#D4899A" strokeWidth="0.3" transform="rotate(45,82,50)" />
        <circle cx="82" cy="50" r="3" fill="none" stroke="#E8A0BF" strokeWidth="0.4" />
      </g>
      <text
        x="10"
        y="19"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="6"
        letterSpacing="0.8"
        fill="#5D4037"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="26"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2.2"
        letterSpacing="0.4"
        fontStyle="italic"
        fill="#D4899A"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="34"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#A0887A"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="41"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#C0A898"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFF8F0" />
      <g opacity="0.1">
        <ellipse cx="10" cy="5" rx="7" ry="14" fill="none" stroke="#E8A0BF" strokeWidth="0.3" transform="rotate(15,10,5)" />
        <ellipse cx="10" cy="5" rx="7" ry="14" fill="none" stroke="#E8A0BF" strokeWidth="0.3" transform="rotate(-15,10,5)" />
        <ellipse cx="10" cy="5" rx="7" ry="14" fill="none" stroke="#E8A0BF" strokeWidth="0.3" transform="rotate(0,10,5)" />
        <ellipse cx="10" cy="5" rx="6" ry="12" fill="none" stroke="#E8A0BF" strokeWidth="0.3" transform="rotate(30,10,5)" />
        <ellipse cx="10" cy="5" rx="6" ry="12" fill="none" stroke="#E8A0BF" strokeWidth="0.3" transform="rotate(-30,10,5)" />
        <circle cx="10" cy="5" r="2.5" fill="none" stroke="#E8A0BF" strokeWidth="0.3" />
      </g>
      <text
        x="45.5"
        y="13"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#5D4037"
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
        fontStyle="italic"
        fill="#D4899A"
      >
        {data.companyEn}
      </text>
      <line x1="25" y1="21" x2="66" y2="21" stroke="#E8A0BF" strokeWidth="0.15" />
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8A7060"
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
        fill="#8A7060"
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
        fill="#8A7060"
      >
        {data.website}
      </text>
      <line x1="25" y1="38.5" x2="66" y2="38.5" stroke="#E8A0BF" strokeWidth="0.15" />
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#C0A898"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 3. BAMBOO (竹) — Vertical bamboo stalks
// Tall vertical lines with node marks, zen-like spacing
// ============================================================
const bambooTemplate: TemplateDefinition = {
  id: 'botanical-bamboo',
  name: 'BAMBOO',
  nameJa: '竹',
  category: 'botanical',
  designer: 'Botanical Studio',
  description: '竹林の静寂。真っ直ぐに伸びる緑の柱。',
  accentColor: '#4CAF50',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E8" />
      {/* Bamboo stalks */}
      <rect x="70" y="0" width="1.8" height="55" fill="#4CAF50" opacity="0.12" rx="0.5" />
      <rect x="70" y="12" width="1.8" height="0.4" fill="#388E3C" opacity="0.15" />
      <rect x="70" y="28" width="1.8" height="0.4" fill="#388E3C" opacity="0.15" />
      <rect x="70" y="44" width="1.8" height="0.4" fill="#388E3C" opacity="0.15" />
      <rect x="76" y="0" width="1.2" height="55" fill="#4CAF50" opacity="0.08" rx="0.3" />
      <rect x="76" y="18" width="1.2" height="0.3" fill="#388E3C" opacity="0.1" />
      <rect x="76" y="36" width="1.2" height="0.3" fill="#388E3C" opacity="0.1" />
      <rect x="81" y="0" width="2.2" height="55" fill="#4CAF50" opacity="0.15" rx="0.6" />
      <rect x="81" y="8" width="2.2" height="0.5" fill="#388E3C" opacity="0.18" />
      <rect x="81" y="22" width="2.2" height="0.5" fill="#388E3C" opacity="0.18" />
      <rect x="81" y="38" width="2.2" height="0.5" fill="#388E3C" opacity="0.18" />
      {/* Small leaf */}
      <path d="M71.8,12 Q74,9 76,11" fill="none" stroke="#4CAF50" strokeWidth="0.2" opacity="0.2" />
      <path d="M83.2,22 Q86,19 88,21" fill="none" stroke="#4CAF50" strokeWidth="0.2" opacity="0.2" />
      <text
        x="10"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="6.5"
        letterSpacing="0.5"
        fill="#2E4A2E"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="27"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.5"
        fontStyle="italic"
        fill="#4CAF50"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="35"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#6B8B6B"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#8BAA8B"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E8" />
      <rect x="5" y="0" width="2" height="55" fill="#4CAF50" opacity="0.1" rx="0.5" />
      <rect x="5" y="15" width="2" height="0.4" fill="#388E3C" opacity="0.12" />
      <rect x="5" y="35" width="2" height="0.4" fill="#388E3C" opacity="0.12" />
      <rect x="10" y="0" width="1.3" height="55" fill="#4CAF50" opacity="0.07" rx="0.3" />
      <rect x="10" y="22" width="1.3" height="0.3" fill="#388E3C" opacity="0.09" />
      <text
        x="20"
        y="13"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#2E4A2E"
      >
        {data.companyJa}
      </text>
      <text
        x="20"
        y="17.5"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        fontStyle="italic"
        fill="#4CAF50"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="21" x2="80" y2="21" stroke="#4CAF50" strokeWidth="0.1" />
      <text
        x="20"
        y="27"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5D7A5D"
      >
        {data.tel}
      </text>
      <text
        x="20"
        y="31"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5D7A5D"
      >
        {data.email}
      </text>
      <text
        x="20"
        y="35"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5D7A5D"
      >
        {data.website}
      </text>
      <line x1="20" y1="38.5" x2="80" y2="38.5" stroke="#4CAF50" strokeWidth="0.1" />
      <text
        x="20"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#8BAA8B"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 4. SAKURA (桜) — Cherry blossom petals
// Scattered five-petal flowers with pink gradient
// ============================================================
const sakuraTemplate: TemplateDefinition = {
  id: 'botanical-sakura',
  name: 'SAKURA',
  nameJa: '桜',
  category: 'botanical',
  designer: 'Botanical Studio',
  description: '桜吹雪。風に舞う花びらの儚さ。',
  accentColor: '#FFB7C5',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFF5F7" />
      <defs>
        <clipPath id="botanical-sakura-clip">
          <rect width="91" height="55" />
        </clipPath>
      </defs>
      <g clipPath="url(#botanical-sakura-clip)" opacity="0.25">
        {/* Sakura petals scattered */}
        <path d="M75,8 Q77,5 79,8 Q77,10 75,8Z" fill="#FFB7C5" />
        <path d="M82,15 Q84,12 86,15 Q84,17 82,15Z" fill="#FFB7C5" opacity="0.7" />
        <path d="M68,12 Q70,9 72,12 Q70,14 68,12Z" fill="#FFCDD7" opacity="0.5" />
        <path d="M85,25 Q87,22 89,25 Q87,27 85,25Z" fill="#FFB7C5" opacity="0.4" />
        <path d="M72,42 Q74,39 76,42 Q74,44 72,42Z" fill="#FFCDD7" opacity="0.6" />
        <path d="M80,48 Q82,45 84,48 Q82,50 80,48Z" fill="#FFB7C5" opacity="0.3" />
        {/* Full 5-petal flower */}
        <g transform="translate(78,10)">
          <ellipse cx="0" cy="-3" rx="1" ry="2.5" fill="#FFB7C5" opacity="0.6" />
          <ellipse cx="2.85" cy="-0.93" rx="1" ry="2.5" fill="#FFB7C5" opacity="0.6" transform="rotate(72,0,0)" />
          <ellipse cx="1.76" cy="2.43" rx="1" ry="2.5" fill="#FFB7C5" opacity="0.6" transform="rotate(144,0,0)" />
          <ellipse cx="-1.76" cy="2.43" rx="1" ry="2.5" fill="#FFB7C5" opacity="0.6" transform="rotate(216,0,0)" />
          <ellipse cx="-2.85" cy="-0.93" rx="1" ry="2.5" fill="#FFB7C5" opacity="0.6" transform="rotate(288,0,0)" />
          <circle cx="0" cy="0" r="0.6" fill="#C97A88" opacity="0.5" />
        </g>
      </g>
      <text
        x="10"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="6"
        letterSpacing="1"
        fill="#5D4037"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="29"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.5"
        fontStyle="italic"
        fill="#C97A88"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="37"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#A08878"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#C0A898"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFF5F7" />
      <g opacity="0.15">
        <path d="M8,45 Q10,42 12,45 Q10,47 8,45Z" fill="#FFB7C5" />
        <path d="M15,50 Q17,47 19,50 Q17,52 15,50Z" fill="#FFCDD7" />
        <path d="M5,38 Q7,35 9,38 Q7,40 5,38Z" fill="#FFB7C5" opacity="0.6" />
      </g>
      <text
        x="45.5"
        y="12"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#5D4037"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="16.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        fontStyle="italic"
        fill="#C97A88"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="20" x2="71" y2="20" stroke="#FFB7C5" strokeWidth="0.15" />
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8A7060"
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
        fill="#8A7060"
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
        fill="#8A7060"
      >
        {data.website}
      </text>
      <line x1="20" y1="37.5" x2="71" y2="37.5" stroke="#FFB7C5" strokeWidth="0.15" />
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#C0A898"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 5. IVY (蔦) — Climbing ivy vine pattern
// Trailing vine lines with small leaf clusters
// ============================================================
const ivyTemplate: TemplateDefinition = {
  id: 'botanical-ivy',
  name: 'IVY',
  nameJa: '蔦',
  category: 'botanical',
  designer: 'Botanical Studio',
  description: '蔦が這う。壁を覆い尽くす生命の意志。',
  accentColor: '#228B22',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F8F5EF" />
      <defs>
        <clipPath id="botanical-ivy-clip">
          <rect width="91" height="55" />
        </clipPath>
      </defs>
      <g clipPath="url(#botanical-ivy-clip)" opacity="0.18">
        {/* Ivy vine main stem climbing right border */}
        <path d="M88,55 Q86,45 87,38 Q89,30 86,22 Q84,15 87,8 Q88,3 86,0" fill="none" stroke="#228B22" strokeWidth="0.4" />
        {/* Ivy leaves */}
        <path d="M87,38 L83,36 L85,33 Z" fill="#228B22" opacity="0.6" />
        <path d="M86,22 L82,24 L83,20 Z" fill="#228B22" opacity="0.5" />
        <path d="M87,8 L83,10 L84,6 Z" fill="#228B22" opacity="0.7" />
        <path d="M87,45 L84,47 L85,43 Z" fill="#228B22" opacity="0.4" />
        {/* Secondary tendril */}
        <path d="M87,30 Q82,28 78,30" fill="none" stroke="#228B22" strokeWidth="0.2" />
        <path d="M78,30 L75,28 L76,32 Z" fill="#228B22" opacity="0.3" />
      </g>
      <text
        x="8"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#2D4A2D"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="27"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="500"
        fontSize="2"
        letterSpacing="0.4"
        fontStyle="italic"
        fill="#228B22"
      >
        {data.nameEn}
      </text>
      <text
        x="8"
        y="35"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#5D7A5D"
      >
        {data.titleJa}
      </text>
      <text
        x="8"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#7B9A7B"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F8F5EF" />
      <g opacity="0.12">
        <path d="M3,0 Q5,10 4,18 Q2,26 5,34 Q7,40 4,48 Q3,52 5,55" fill="none" stroke="#228B22" strokeWidth="0.4" />
        <path d="M4,18 L8,16 L6,20 Z" fill="#228B22" opacity="0.5" />
        <path d="M5,34 L9,32 L7,36 Z" fill="#228B22" opacity="0.4" />
        <path d="M4,48 L8,46 L6,50 Z" fill="#228B22" opacity="0.6" />
      </g>
      <text
        x="81"
        y="12"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#2D4A2D"
      >
        {data.companyJa}
      </text>
      <text
        x="81"
        y="16.5"
        textAnchor="end"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fontStyle="italic"
        fill="#228B22"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="20" x2="81" y2="20" stroke="#228B22" strokeWidth="0.1" />
      <text
        x="81"
        y="26"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5D7A5D"
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
        fill="#5D7A5D"
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
        fill="#5D7A5D"
      >
        {data.website}
      </text>
      <line x1="20" y1="37.5" x2="81" y2="37.5" stroke="#228B22" strokeWidth="0.1" />
      <text
        x="81"
        y="43"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#8BAA8B"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 6. PALM (椰) — Tropical palm frond silhouette
// Bold palm leaf shapes, warm tropical feel
// ============================================================
const palmTemplate: TemplateDefinition = {
  id: 'botanical-palm',
  name: 'PALM',
  nameJa: '椰',
  category: 'botanical',
  designer: 'Botanical Studio',
  description: '椰子の葉陰。南国の風が吹き抜ける。',
  accentColor: '#2E7D32',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFEF5" />
      <defs>
        <clipPath id="botanical-palm-clip">
          <rect width="91" height="55" />
        </clipPath>
      </defs>
      <g clipPath="url(#botanical-palm-clip)" opacity="0.12">
        {/* Palm frond from top-right */}
        <path d="M91,0 Q75,8 65,18" fill="none" stroke="#2E7D32" strokeWidth="0.6" />
        {/* Frond leaves */}
        <path d="M85,3 Q80,1 78,5 Q82,4 85,3Z" fill="#2E7D32" />
        <path d="M80,7 Q74,4 72,9 Q77,7 80,7Z" fill="#2E7D32" />
        <path d="M75,12 Q69,9 67,14 Q72,12 75,12Z" fill="#2E7D32" />
        <path d="M70,16 Q64,14 63,18 Q67,16 70,16Z" fill="#2E7D32" />
        <path d="M88,2 Q86,7 84,5 Q87,4 88,2Z" fill="#2E7D32" opacity="0.8" />
        <path d="M83,5 Q82,10 79,9 Q82,7 83,5Z" fill="#2E7D32" opacity="0.8" />
        <path d="M78,10 Q77,15 74,13 Q77,12 78,10Z" fill="#2E7D32" opacity="0.8" />
      </g>
      <text
        x="10"
        y="25"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="6"
        letterSpacing="0.5"
        fill="#2E4A2E"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2.2"
        letterSpacing="0.4"
        fontStyle="italic"
        fill="#2E7D32"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="40"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#6B8E6B"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="47"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#8BAA8B"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFEF5" />
      <g opacity="0.08">
        <path d="M0,55 Q16,46 26,36" fill="none" stroke="#2E7D32" strokeWidth="0.6" />
        <path d="M6,52 Q12,54 14,49 Q10,50 6,52Z" fill="#2E7D32" />
        <path d="M12,47 Q18,50 20,44 Q15,46 12,47Z" fill="#2E7D32" />
        <path d="M18,42 Q24,44 25,38 Q21,40 18,42Z" fill="#2E7D32" />
      </g>
      <text
        x="10"
        y="13"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#2E4A2E"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="17.5"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fontStyle="italic"
        fill="#2E7D32"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="21" x2="81" y2="21" stroke="#2E7D32" strokeWidth="0.1" />
      <text
        x="10"
        y="27"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5D7A5D"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="31"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5D7A5D"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="35"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5D7A5D"
      >
        {data.website}
      </text>
      <line x1="10" y1="38.5" x2="81" y2="38.5" stroke="#2E7D32" strokeWidth="0.1" />
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#8BAA8B"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 7. HERB (薬草) — Medicinal herb garden layout
// Small botanical illustrations with labeled feel
// ============================================================
const herbTemplate: TemplateDefinition = {
  id: 'botanical-herb',
  name: 'HERB',
  nameJa: '薬草',
  category: 'botanical',
  designer: 'Botanical Studio',
  description: '薬草図鑑。植物画のような精密な美しさ。',
  accentColor: '#5D4037',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FAF6EE" />
      {/* Border like botanical illustration plate */}
      <rect x="4" y="4" width="83" height="47" fill="none" stroke="#D4C8B8" strokeWidth="0.2" />
      <rect x="5.5" y="5.5" width="80" height="44" fill="none" stroke="#E8DDD0" strokeWidth="0.1" />
      {/* Small herb sprig illustration */}
      <g opacity="0.25" transform="translate(68,8)">
        <line x1="0" y1="20" x2="0" y2="0" stroke="#5D4037" strokeWidth="0.3" />
        <ellipse cx="-2" cy="5" rx="2" ry="3.5" fill="none" stroke="#228B22" strokeWidth="0.2" transform="rotate(-20,-2,5)" />
        <ellipse cx="2" cy="8" rx="2" ry="3" fill="none" stroke="#228B22" strokeWidth="0.2" transform="rotate(15,2,8)" />
        <ellipse cx="-1.5" cy="12" rx="1.8" ry="3" fill="none" stroke="#228B22" strokeWidth="0.2" transform="rotate(-10,-1.5,12)" />
        <ellipse cx="1.5" cy="15" rx="1.5" ry="2.5" fill="none" stroke="#228B22" strokeWidth="0.2" transform="rotate(10,1.5,15)" />
        <ellipse cx="0" cy="2" rx="1.5" ry="2.8" fill="none" stroke="#228B22" strokeWidth="0.2" />
      </g>
      <text
        x="10"
        y="18"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#5D4037"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="25"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.5"
        fontStyle="italic"
        fill="#8B6F5E"
      >
        {data.nameEn}
      </text>
      <line x1="10" y1="29" x2="55" y2="29" stroke="#D4C8B8" strokeWidth="0.15" />
      <text
        x="10"
        y="35"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#8B7B6B"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#A0907E"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FAF6EE" />
      <rect x="4" y="4" width="83" height="47" fill="none" stroke="#D4C8B8" strokeWidth="0.2" />
      <rect x="5.5" y="5.5" width="80" height="44" fill="none" stroke="#E8DDD0" strokeWidth="0.1" />
      {/* Small herb sprig back */}
      <g opacity="0.15" transform="translate(12,32)">
        <line x1="0" y1="14" x2="0" y2="0" stroke="#5D4037" strokeWidth="0.2" />
        <ellipse cx="-1.5" cy="3" rx="1.5" ry="2.5" fill="none" stroke="#228B22" strokeWidth="0.15" />
        <ellipse cx="1.5" cy="6" rx="1.5" ry="2.5" fill="none" stroke="#228B22" strokeWidth="0.15" />
        <ellipse cx="-1" cy="10" rx="1.2" ry="2" fill="none" stroke="#228B22" strokeWidth="0.15" />
      </g>
      <text
        x="45.5"
        y="13"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#5D4037"
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
        fontStyle="italic"
        fill="#8B6F5E"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="21" x2="71" y2="21" stroke="#D4C8B8" strokeWidth="0.15" />
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8B7B6B"
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
        fill="#8B7B6B"
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
        fill="#8B7B6B"
      >
        {data.website}
      </text>
      <line x1="20" y1="38.5" x2="71" y2="38.5" stroke="#D4C8B8" strokeWidth="0.15" />
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#A0907E"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 8. GARDEN (庭) — Japanese garden composition
// Stones, raked gravel lines, moss patches
// ============================================================
const gardenTemplate: TemplateDefinition = {
  id: 'botanical-garden',
  name: 'GARDEN',
  nameJa: '庭',
  category: 'botanical',
  designer: 'Botanical Studio',
  description: '枯山水の庭。砂紋と苔が織りなす静寂。',
  accentColor: '#4CAF50',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F0EDE5" />
      {/* Raked gravel lines */}
      <g opacity="0.08">
        <line x1="0" y1="42" x2="91" y2="42" stroke="#8B8578" strokeWidth="0.15" />
        <line x1="0" y1="43.5" x2="91" y2="43.5" stroke="#8B8578" strokeWidth="0.15" />
        <line x1="0" y1="45" x2="91" y2="45" stroke="#8B8578" strokeWidth="0.15" />
        <line x1="0" y1="46.5" x2="91" y2="46.5" stroke="#8B8578" strokeWidth="0.15" />
        <line x1="0" y1="48" x2="91" y2="48" stroke="#8B8578" strokeWidth="0.15" />
        <line x1="0" y1="49.5" x2="91" y2="49.5" stroke="#8B8578" strokeWidth="0.15" />
        <line x1="0" y1="51" x2="91" y2="51" stroke="#8B8578" strokeWidth="0.15" />
        <line x1="0" y1="52.5" x2="91" y2="52.5" stroke="#8B8578" strokeWidth="0.15" />
      </g>
      {/* Stone */}
      <ellipse cx="75" cy="46" rx="5" ry="3" fill="#C8C0B0" opacity="0.3" />
      {/* Moss patch */}
      <circle cx="68" cy="48" r="2" fill="#4CAF50" opacity="0.08" />
      <circle cx="70" cy="46.5" r="1.5" fill="#4CAF50" opacity="0.06" />
      <text
        x="10"
        y="18"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="6"
        letterSpacing="1"
        fill="#3A3530"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="25"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.4"
        fontStyle="italic"
        fill="#6B8E6B"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="33"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#8B8578"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="39"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#A09A8E"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F0EDE5" />
      {/* Raked gravel lines */}
      <g opacity="0.08">
        <line x1="0" y1="3" x2="91" y2="3" stroke="#8B8578" strokeWidth="0.15" />
        <line x1="0" y1="4.5" x2="91" y2="4.5" stroke="#8B8578" strokeWidth="0.15" />
        <line x1="0" y1="6" x2="91" y2="6" stroke="#8B8578" strokeWidth="0.15" />
        <line x1="0" y1="7.5" x2="91" y2="7.5" stroke="#8B8578" strokeWidth="0.15" />
      </g>
      <ellipse cx="15" cy="6" rx="4" ry="2.5" fill="#C8C0B0" opacity="0.25" />
      <circle cx="22" cy="5" r="1.2" fill="#4CAF50" opacity="0.06" />
      <text
        x="81"
        y="17"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#3A3530"
      >
        {data.companyJa}
      </text>
      <text
        x="81"
        y="21.5"
        textAnchor="end"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fontStyle="italic"
        fill="#6B8E6B"
      >
        {data.companyEn}
      </text>
      <line x1="40" y1="25" x2="81" y2="25" stroke="#C8C0B0" strokeWidth="0.15" />
      <text
        x="81"
        y="31"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8B8578"
      >
        {data.tel}
      </text>
      <text
        x="81"
        y="35"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8B8578"
      >
        {data.email}
      </text>
      <text
        x="81"
        y="39"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8B8578"
      >
        {data.website}
      </text>
      <line x1="40" y1="42" x2="81" y2="42" stroke="#C8C0B0" strokeWidth="0.15" />
      <text
        x="81"
        y="47.5"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#A09A8E"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 9. BONSAI (盆栽) — Miniature tree silhouette
// Asymmetric bonsai tree outline with aged pot
// ============================================================
const bonsaiTemplate: TemplateDefinition = {
  id: 'botanical-bonsai',
  name: 'BONSAI',
  nameJa: '盆栽',
  category: 'botanical',
  designer: 'Botanical Studio',
  description: '盆栽の佇まい。小さな鉢に宿る大自然。',
  accentColor: '#5D4037',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FBF8F2" />
      <defs>
        <clipPath id="botanical-bonsai-clip">
          <rect width="91" height="55" />
        </clipPath>
      </defs>
      <g clipPath="url(#botanical-bonsai-clip)" opacity="0.15">
        {/* Bonsai tree silhouette right side */}
        {/* Trunk */}
        <path d="M72,50 Q71,42 70,38 Q69,34 72,30" fill="none" stroke="#5D4037" strokeWidth="0.6" />
        {/* Main branches */}
        <path d="M72,30 Q68,26 64,25" fill="none" stroke="#5D4037" strokeWidth="0.4" />
        <path d="M72,30 Q76,24 80,22" fill="none" stroke="#5D4037" strokeWidth="0.3" />
        <path d="M70,35 Q66,32 62,33" fill="none" stroke="#5D4037" strokeWidth="0.3" />
        {/* Foliage clouds */}
        <ellipse cx="63" cy="23" rx="6" ry="4" fill="#228B22" opacity="0.4" />
        <ellipse cx="72" cy="20" rx="5" ry="3.5" fill="#228B22" opacity="0.35" />
        <ellipse cx="79" cy="21" rx="4" ry="3" fill="#228B22" opacity="0.3" />
        <ellipse cx="61" cy="31" rx="4" ry="3" fill="#228B22" opacity="0.3" />
        {/* Pot */}
        <path d="M66,50 L78,50 L76,53 L68,53 Z" fill="#5D4037" opacity="0.3" />
      </g>
      <text
        x="10"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#3A3025"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="27"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.4"
        fontStyle="italic"
        fill="#5D4037"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="35"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#7B6B5B"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#A09080"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FBF8F2" />
      <g opacity="0.08">
        {/* Small bonsai silhouette */}
        <path d="M15,48 Q14,42 15,38 Q16,35 14,32" fill="none" stroke="#5D4037" strokeWidth="0.4" />
        <ellipse cx="12" cy="30" rx="4" ry="3" fill="#228B22" opacity="0.4" />
        <ellipse cx="17" cy="29" rx="3" ry="2.5" fill="#228B22" opacity="0.3" />
        <path d="M11,48 L19,48 L18,50 L12,50 Z" fill="#5D4037" opacity="0.3" />
      </g>
      <text
        x="45.5"
        y="12"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#3A3025"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="16.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fontStyle="italic"
        fill="#5D4037"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="20" x2="71" y2="20" stroke="#D4C8B8" strokeWidth="0.15" />
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#7B6B5B"
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
        fill="#7B6B5B"
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
        fill="#7B6B5B"
      >
        {data.website}
      </text>
      <line x1="20" y1="37.5" x2="71" y2="37.5" stroke="#D4C8B8" strokeWidth="0.15" />
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#A09080"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 10. WISTERIA (藤花) — Cascading wisteria flowers
// Hanging cluster shapes in purple/lavender tones
// ============================================================
const wisteriaTemplate: TemplateDefinition = {
  id: 'botanical-wisteria',
  name: 'WISTERIA',
  nameJa: '藤花',
  category: 'botanical',
  designer: 'Botanical Studio',
  description: '藤の花房。紫の滝のように垂れ下がる優雅さ。',
  accentColor: '#9C27B0',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FDF8FF" />
      <defs>
        <clipPath id="botanical-wisteria-clip">
          <rect width="91" height="55" />
        </clipPath>
      </defs>
      <g clipPath="url(#botanical-wisteria-clip)" opacity="0.2">
        {/* Wisteria vine at top */}
        <path d="M55,0 Q58,2 65,2 Q72,2 78,0" fill="none" stroke="#5D4037" strokeWidth="0.3" />
        {/* Hanging flower clusters */}
        <g transform="translate(60,2)">
          <ellipse cx="0" cy="4" rx="1.5" ry="2" fill="#CE93D8" />
          <ellipse cx="0" cy="7" rx="1.3" ry="1.8" fill="#BA68C8" />
          <ellipse cx="0" cy="10" rx="1.1" ry="1.5" fill="#AB47BC" />
          <ellipse cx="0" cy="12.5" rx="0.8" ry="1.2" fill="#9C27B0" />
          <ellipse cx="0" cy="14.5" rx="0.5" ry="0.8" fill="#9C27B0" />
        </g>
        <g transform="translate(68,1)">
          <ellipse cx="0" cy="3" rx="1.3" ry="1.8" fill="#CE93D8" />
          <ellipse cx="0" cy="6" rx="1.1" ry="1.5" fill="#BA68C8" />
          <ellipse cx="0" cy="8.5" rx="0.9" ry="1.2" fill="#AB47BC" />
          <ellipse cx="0" cy="10.5" rx="0.6" ry="0.8" fill="#9C27B0" />
        </g>
        <g transform="translate(74,0)">
          <ellipse cx="0" cy="3.5" rx="1.4" ry="1.9" fill="#CE93D8" />
          <ellipse cx="0" cy="6.5" rx="1.2" ry="1.6" fill="#BA68C8" />
          <ellipse cx="0" cy="9" rx="1" ry="1.3" fill="#AB47BC" />
          <ellipse cx="0" cy="11" rx="0.7" ry="1" fill="#9C27B0" />
          <ellipse cx="0" cy="12.5" rx="0.4" ry="0.6" fill="#9C27B0" />
        </g>
        {/* Leaves */}
        <path d="M57,1 Q54,4 56,6" fill="none" stroke="#4CAF50" strokeWidth="0.2" />
        <path d="M65,2 Q62,5 64,7" fill="none" stroke="#4CAF50" strokeWidth="0.2" />
      </g>
      <text
        x="10"
        y="25"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="6"
        letterSpacing="0.8"
        fill="#4A2050"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.4"
        fontStyle="italic"
        fill="#9C27B0"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="40"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#8B6B9B"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="47"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#A08BAA"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FDF8FF" />
      <g opacity="0.12">
        <path d="M10,55 Q12,52 18,52 Q24,53 28,55" fill="none" stroke="#5D4037" strokeWidth="0.3" />
        <g transform="translate(14,48) scale(1,-1)">
          <ellipse cx="0" cy="3" rx="1.2" ry="1.5" fill="#CE93D8" />
          <ellipse cx="0" cy="5.5" rx="1" ry="1.2" fill="#BA68C8" />
          <ellipse cx="0" cy="7.5" rx="0.7" ry="0.9" fill="#AB47BC" />
        </g>
        <g transform="translate(22,49) scale(1,-1)">
          <ellipse cx="0" cy="3" rx="1" ry="1.3" fill="#CE93D8" />
          <ellipse cx="0" cy="5" rx="0.8" ry="1" fill="#BA68C8" />
        </g>
      </g>
      <text
        x="45.5"
        y="12"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#4A2050"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="16.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fontStyle="italic"
        fill="#9C27B0"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="20" x2="71" y2="20" stroke="#CE93D8" strokeWidth="0.15" />
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#7B5B8B"
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
        fill="#7B5B8B"
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
        fill="#7B5B8B"
      >
        {data.website}
      </text>
      <line x1="20" y1="37.5" x2="71" y2="37.5" stroke="#CE93D8" strokeWidth="0.15" />
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#A08BAA"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

export const botanicalTemplates: TemplateDefinition[] = [
  fernTemplate,
  lotusTemplate,
  bambooTemplate,
  sakuraTemplate,
  ivyTemplate,
  palmTemplate,
  herbTemplate,
  gardenTemplate,
  bonsaiTemplate,
  wisteriaTemplate,
];
