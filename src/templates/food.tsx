import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. KITCHEN (厨) — Professional kitchen, clean whites
// Crisp white with clean lines suggesting a pro kitchen
// ============================================================
const kitchenTemplate: TemplateDefinition = {
  id: 'food-kitchen',
  name: 'KITCHEN',
  nameJa: '厨',
  category: 'food',
  designer: 'Jiro Ono',
  description: '厨房の清潔感。プロフェッショナルの白い空間。',
  accentColor: '#2C1810',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFF8F0" />
      {/* Clean horizontal lines like a kitchen pass */}
      <rect x="0" y="0" width="91" height="1.5" fill="#2C1810" />
      <rect x="0" y="53.5" width="91" height="1.5" fill="#2C1810" />
      {/* Subtle tile pattern */}
      {[...Array(6)].map((_, i) => (
        <line key={i} x1={i * 15.2 + 7.5} y1="4" x2={i * 15.2 + 7.5} y2="51" stroke="#f0e8dc" strokeWidth="0.06" />
      ))}
      {/* Name */}
      <text
        x="10"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="0.8"
        fill="#2C1810"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="27"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.4"
        fill="#8B6F5C"
      >
        {data.nameEn}
      </text>
      <line x1="10" y1="31" x2="50" y2="31" stroke="#2C1810" strokeWidth="0.08" />
      <text
        x="10"
        y="37"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#8B6F5C"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="45"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        fill="#2C1810"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFF8F0" />
      <rect x="0" y="0" width="91" height="1.5" fill="#2C1810" />
      <rect x="0" y="53.5" width="91" height="1.5" fill="#2C1810" />
      {/* Company */}
      <text
        x="10"
        y="12"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        letterSpacing="0.3"
        fill="#2C1810"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="16.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8B6F5C"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="19.5" x2="81" y2="19.5" stroke="#2C1810" strokeWidth="0.06" />
      {/* Contact */}
      <text x="10" y="25" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#444444">
        {data.tel}
      </text>
      <text x="10" y="29" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#444444">
        {data.email}
      </text>
      <text x="10" y="33" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#444444">
        {data.website}
      </text>
      <line x1="10" y1="36" x2="81" y2="36" stroke="#2C1810" strokeWidth="0.06" />
      <text
        x="10"
        y="41"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#8B6F5C"
      >
        〒{data.zipCode}
      </text>
      <text
        x="10"
        y="45"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#8B6F5C"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 2. SAKE (酒) — Japanese sake bottle label aesthetic
// Vertical Japanese text with traditional label feel
// ============================================================
const sakeTemplate: TemplateDefinition = {
  id: 'food-sake',
  name: 'SAKE',
  nameJa: '酒',
  category: 'food',
  designer: 'Sake Master',
  description: '酒蔵のラベル。和の伝統が息づく品格。',
  accentColor: '#8B0000',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f5f0e0" />
      {/* Label border */}
      <rect x="25" y="4" width="41" height="47" fill="#ffffff" stroke="#2C1810" strokeWidth="0.15" />
      <rect x="26.5" y="5.5" width="38" height="44" fill="none" stroke="#8B0000" strokeWidth="0.08" />
      {/* Vertical name in center */}
      <text
        x="45.5"
        y="15"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="7"
        letterSpacing="1.5"
        fill="#2C1810"
        writingMode="vertical-rl"
      >
        {data.nameJa}
      </text>
      {/* English name below */}
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.5"
        fill="#8B0000"
      >
        {data.nameEn}
      </text>
      {/* Side annotations */}
      <text
        x="30"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#8B6F5C"
      >
        {data.titleJa}
      </text>
      {/* Seal-like mark */}
      <rect x="55" y="8" width="6" height="6" fill="#8B0000" opacity="0.8" rx="0.3" />
      <text x="58" y="12" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#ffffff">
        酒
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f5f0e0" />
      {/* Simple label frame */}
      <rect x="8" y="6" width="75" height="43" fill="none" stroke="#2C1810" strokeWidth="0.1" />
      <rect x="9.5" y="7.5" width="72" height="40" fill="none" stroke="#8B0000" strokeWidth="0.06" />
      {/* Company */}
      <text
        x="45.5"
        y="16"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        letterSpacing="0.5"
        fill="#2C1810"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="20.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.3"
        letterSpacing="0.3"
        fill="#8B0000"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="23.5" x2="71" y2="23.5" stroke="#2C1810" strokeWidth="0.06" />
      {/* Contact */}
      <text x="45.5" y="28" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#444444">
        {data.tel}
      </text>
      <text x="45.5" y="32" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#444444">
        {data.email}
      </text>
      <text x="45.5" y="36" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#444444">
        {data.website}
      </text>
      <line x1="20" y1="39" x2="71" y2="39" stroke="#2C1810" strokeWidth="0.06" />
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.1"
        fill="#8B6F5C"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 3. SUSHI (寿) — Clean sushi bar counter aesthetic
// Minimalist with natural wood and clean white
// ============================================================
const sushiTemplate: TemplateDefinition = {
  id: 'food-sushi',
  name: 'SUSHI',
  nameJa: '寿',
  category: 'food',
  designer: 'Sukiyabashi',
  description: '寿司カウンターの清浄さ。一貫の美学。',
  accentColor: '#2C1810',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="food-sushi-counter" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="70%" stopColor="#ffffff" />
          <stop offset="70%" stopColor="#e8d8c4" />
          <stop offset="100%" stopColor="#d4c0a8" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#food-sushi-counter)" />
      {/* Counter edge line */}
      <line x1="0" y1="38.5" x2="91" y2="38.5" stroke="#2C1810" strokeWidth="0.2" />
      {/* Wood grain lines */}
      <line x1="0" y1="42" x2="91" y2="42" stroke="#c8b498" strokeWidth="0.04" />
      <line x1="0" y1="46" x2="91" y2="46" stroke="#c8b498" strokeWidth="0.03" />
      <line x1="0" y1="50" x2="91" y2="50" stroke="#c8b498" strokeWidth="0.04" />
      {/* Name */}
      <text
        x="45.5"
        y="18"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6.5"
        letterSpacing="1"
        fill="#2C1810"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="25"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.4"
        fill="#8B6F5C"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="33"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#999999"
      >
        {data.titleJa}
      </text>
      {/* Chopstick rest suggestion */}
      <rect x="38" y="43" width="15" height="1" rx="0.5" fill="#2C1810" opacity="0.15" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="food-sushi-counter-b" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="85%" stopColor="#ffffff" />
          <stop offset="85%" stopColor="#e8d8c4" />
          <stop offset="100%" stopColor="#d4c0a8" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#food-sushi-counter-b)" />
      <line x1="0" y1="46.75" x2="91" y2="46.75" stroke="#2C1810" strokeWidth="0.15" />
      {/* Company */}
      <text
        x="10"
        y="13"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        fill="#2C1810"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="17.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#8B6F5C"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="20.5" x2="81" y2="20.5" stroke="#2C1810" strokeWidth="0.06" />
      {/* Contact */}
      <text x="10" y="26" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#444444">
        {data.tel}
      </text>
      <text x="10" y="30" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#444444">
        {data.email}
      </text>
      <text x="10" y="34" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#444444">
        {data.website}
      </text>
      <line x1="10" y1="37" x2="81" y2="37" stroke="#2C1810" strokeWidth="0.06" />
      <text
        x="10"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#8B6F5C"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 4. PATISSERIE (菓舗) — French pastry elegance
// Delicate, ornamental with pastel touches
// ============================================================
const patisserieTemplate: TemplateDefinition = {
  id: 'food-patisserie',
  name: 'PATISSERIE',
  nameJa: '菓舗',
  category: 'food',
  designer: 'Pierre Hermé',
  description: 'パティスリーの繊細さ。甘美な装飾の世界。',
  accentColor: '#D4A0A0',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Delicate border with corner flourishes */}
      <rect x="6" y="6" width="79" height="43" fill="none" stroke="#D4A0A0" strokeWidth="0.08" rx="1" />
      {/* Corner ornaments */}
      <circle cx="6" cy="6" r="1.5" fill="none" stroke="#D4A0A0" strokeWidth="0.06" />
      <circle cx="85" cy="6" r="1.5" fill="none" stroke="#D4A0A0" strokeWidth="0.06" />
      <circle cx="6" cy="49" r="1.5" fill="none" stroke="#D4A0A0" strokeWidth="0.06" />
      <circle cx="85" cy="49" r="1.5" fill="none" stroke="#D4A0A0" strokeWidth="0.06" />
      {/* Floral dot pattern */}
      <circle cx="6" cy="6" r="0.5" fill="#D4A0A0" />
      <circle cx="85" cy="6" r="0.5" fill="#D4A0A0" />
      <circle cx="6" cy="49" r="0.5" fill="#D4A0A0" />
      <circle cx="85" cy="49" r="0.5" fill="#D4A0A0" />
      {/* Name */}
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="5.5"
        letterSpacing="0.8"
        fill="#2C1810"
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
        fill="#D4A0A0"
      >
        {data.nameEn}
      </text>
      <line x1="30" y1="33" x2="61" y2="33" stroke="#D4A0A0" strokeWidth="0.04" />
      <text
        x="45.5"
        y="38"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#999999"
      >
        {data.titleJa}
      </text>
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        letterSpacing="0.3"
        fill="#D4A0A0"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      <rect x="6" y="6" width="79" height="43" fill="none" stroke="#D4A0A0" strokeWidth="0.08" rx="1" />
      <circle cx="6" cy="6" r="0.5" fill="#D4A0A0" />
      <circle cx="85" cy="6" r="0.5" fill="#D4A0A0" />
      <circle cx="6" cy="49" r="0.5" fill="#D4A0A0" />
      <circle cx="85" cy="49" r="0.5" fill="#D4A0A0" />
      {/* Company */}
      <text
        x="45.5"
        y="15"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2.5"
        letterSpacing="0.5"
        fill="#2C1810"
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
        letterSpacing="0.4"
        fill="#D4A0A0"
      >
        {data.companyEn}
      </text>
      <line x1="25" y1="22.5" x2="66" y2="22.5" stroke="#D4A0A0" strokeWidth="0.04" />
      {/* Contact */}
      <text x="45.5" y="27.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.4" fill="#555555">
        {data.tel}
      </text>
      <text x="45.5" y="31.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.4" fill="#555555">
        {data.email}
      </text>
      <text x="45.5" y="35.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.4" fill="#555555">
        {data.website}
      </text>
      <line x1="25" y1="38.5" x2="66" y2="38.5" stroke="#D4A0A0" strokeWidth="0.04" />
      <text
        x="45.5"
        y="43.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.1"
        fill="#999999"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 5. CAFE (珈) — Coffee house warmth
// Warm browns with cup circle motif
// ============================================================
const cafeTemplate: TemplateDefinition = {
  id: 'food-cafe',
  name: 'CAFE',
  nameJa: '珈',
  category: 'food',
  designer: 'Blue Bottle',
  description: '珈琲の温もり。一杯の豊かな時間。',
  accentColor: '#5C3A1E',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFF8F0" />
      {/* Coffee cup ring stain as design element */}
      <circle cx="72" cy="20" r="10" fill="none" stroke="#d4c0a8" strokeWidth="0.3" opacity="0.4" />
      <circle cx="72" cy="20" r="9.5" fill="none" stroke="#d4c0a8" strokeWidth="0.08" opacity="0.3" />
      {/* Small cup suggestion */}
      <circle cx="72" cy="20" r="5" fill="none" stroke="#c8b498" strokeWidth="0.1" />
      <path d="M 77 18 Q 80 18 80 21 Q 80 24 77 24" fill="none" stroke="#c8b498" strokeWidth="0.1" />
      {/* Name */}
      <text
        x="10"
        y="18"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.3"
        fill="#5C3A1E"
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
        fill="#8B6F5C"
      >
        {data.nameEn}
      </text>
      <line x1="10" y1="29" x2="55" y2="29" stroke="#d4c0a8" strokeWidth="0.06" />
      <text
        x="10"
        y="35"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#8B6F5C"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="45"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        fill="#5C3A1E"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFF8F0" />
      {/* Subtle coffee ring */}
      <circle cx="75" cy="40" r="8" fill="none" stroke="#d4c0a8" strokeWidth="0.15" opacity="0.2" />
      {/* Company */}
      <text
        x="10"
        y="13"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#5C3A1E"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="17.5"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        letterSpacing="0.3"
        fill="#8B6F5C"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="20.5" x2="81" y2="20.5" stroke="#d4c0a8" strokeWidth="0.06" />
      {/* Contact */}
      <text x="10" y="26" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5C3A1E">
        {data.tel}
      </text>
      <text x="10" y="30" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5C3A1E">
        {data.email}
      </text>
      <text x="10" y="34" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5C3A1E">
        {data.website}
      </text>
      <line x1="10" y1="37" x2="81" y2="37" stroke="#d4c0a8" strokeWidth="0.06" />
      <text
        x="10"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#8B6F5C"
      >
        〒{data.zipCode}
      </text>
      <text
        x="10"
        y="46"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#8B6F5C"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 6. FARM (農) — Farm-to-table organic feel
// Natural, earthy with matcha green accents
// ============================================================
const farmTemplate: TemplateDefinition = {
  id: 'food-farm',
  name: 'FARM',
  nameJa: '農',
  category: 'food',
  designer: 'Dan Barber',
  description: '農園の豊かさ。大地から食卓へ。',
  accentColor: '#3D5B3D',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f5f0e0" />
      {/* Earth/soil line at bottom */}
      <rect x="0" y="46" width="91" height="9" fill="#3D5B3D" opacity="0.1" />
      <line x1="0" y1="46" x2="91" y2="46" stroke="#3D5B3D" strokeWidth="0.15" />
      {/* Subtle crop rows */}
      {[...Array(7)].map((_, i) => (
        <line key={i} x1={10 + i * 10} y1="48" x2={10 + i * 10} y2="55" stroke="#3D5B3D" strokeWidth="0.06" opacity="0.3" />
      ))}
      {/* Leaf accent */}
      <path
        d="M 78 8 Q 82 5 86 8 Q 82 11 78 8"
        fill="#3D5B3D"
        opacity="0.2"
      />
      <line x1="82" y1="8" x2="82" y2="13" stroke="#3D5B3D" strokeWidth="0.06" opacity="0.3" />
      {/* Name */}
      <text
        x="10"
        y="18"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.3"
        fill="#2C3E2C"
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
        fill="#3D5B3D"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="33"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#7a8a7a"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="40"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#3D5B3D"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f5f0e0" />
      <rect x="0" y="48" width="91" height="7" fill="#3D5B3D" opacity="0.08" />
      <line x1="0" y1="48" x2="91" y2="48" stroke="#3D5B3D" strokeWidth="0.1" />
      {/* Company */}
      <text
        x="10"
        y="13"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#2C3E2C"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="17.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#3D5B3D"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="20.5" x2="81" y2="20.5" stroke="#3D5B3D" strokeWidth="0.06" />
      {/* Contact */}
      <text x="10" y="26" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#444444">
        {data.tel}
      </text>
      <text x="10" y="30" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#444444">
        {data.email}
      </text>
      <text x="10" y="34" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#444444">
        {data.website}
      </text>
      <line x1="10" y1="37" x2="81" y2="37" stroke="#3D5B3D" strokeWidth="0.06" />
      <text
        x="10"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#7a8a7a"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 7. BAKERY (窯) — Artisan bakery with oven warmth
// Warm tones suggesting brick oven and fresh bread
// ============================================================
const bakeryTemplate: TemplateDefinition = {
  id: 'food-bakery',
  name: 'BAKERY',
  nameJa: '窯',
  category: 'food',
  designer: 'Chad Robertson',
  description: '窯の温もり。焼きたてパンの香り立つ空間。',
  accentColor: '#A0522D',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="food-bakery-warm" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF8F0" />
          <stop offset="100%" stopColor="#f5e6d0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#food-bakery-warm)" />
      {/* Oven arch at top */}
      <path d="M 15 0 Q 15 12 45.5 12 Q 76 12 76 0" fill="none" stroke="#A0522D" strokeWidth="0.15" />
      <path d="M 18 0 Q 18 10 45.5 10 Q 73 10 73 0" fill="none" stroke="#A0522D" strokeWidth="0.08" opacity="0.5" />
      {/* Brick pattern at top */}
      {[...Array(8)].map((_, i) => (
        <rect key={i} x={15 + i * 7.6} y="0" width="7" height="2" fill="none" stroke="#A0522D" strokeWidth="0.04" opacity="0.3" />
      ))}
      {/* Name */}
      <text
        x="45.5"
        y="25"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#5C2810"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.5"
        fill="#A0522D"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="40"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#8B6F5C"
      >
        {data.titleJa}
      </text>
      <text
        x="45.5"
        y="48"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#5C2810"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="food-bakery-warm-b" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF8F0" />
          <stop offset="100%" stopColor="#f5e6d0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#food-bakery-warm-b)" />
      <path d="M 15 0 Q 15 8 45.5 8 Q 76 8 76 0" fill="none" stroke="#A0522D" strokeWidth="0.1" opacity="0.4" />
      {/* Company */}
      <text
        x="45.5"
        y="16"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#5C2810"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="20.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#A0522D"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="23.5" x2="71" y2="23.5" stroke="#A0522D" strokeWidth="0.06" />
      {/* Contact */}
      <text x="45.5" y="28" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5C2810">
        {data.tel}
      </text>
      <text x="45.5" y="32" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5C2810">
        {data.email}
      </text>
      <text x="45.5" y="36" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5C2810">
        {data.website}
      </text>
      <line x1="20" y1="39" x2="71" y2="39" stroke="#A0522D" strokeWidth="0.06" />
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.1"
        fill="#8B6F5C"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 8. TEA (茶) — Japanese tea ceremony aesthetic
// Matcha green with wabi-sabi simplicity
// ============================================================
const teaTemplate: TemplateDefinition = {
  id: 'food-tea',
  name: 'TEA',
  nameJa: '茶',
  category: 'food',
  designer: 'Sen no Rikyu',
  description: '茶の湯の侘び。一服の静寂と味わい。',
  accentColor: '#3D5B3D',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f0ebe0" />
      {/* Tea bowl circle - chawan */}
      <circle cx="72" cy="27.5" r="12" fill="none" stroke="#3D5B3D" strokeWidth="0.12" opacity="0.3" />
      <circle cx="72" cy="27.5" r="8" fill="#3D5B3D" opacity="0.04" />
      {/* Matcha surface */}
      <circle cx="72" cy="27.5" r="7" fill="none" stroke="#3D5B3D" strokeWidth="0.06" opacity="0.2" />
      {/* Chasen (whisk) lines in matcha */}
      {[...Array(5)].map((_, i) => (
        <line key={i} x1={68 + i * 2} y1="22" x2={68 + i * 2} y2="33" stroke="#3D5B3D" strokeWidth="0.03" opacity="0.15" />
      ))}
      {/* Name */}
      <text
        x="10"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#2C3E2C"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="27"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#3D5B3D"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#7a8a7a"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="45"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#3D5B3D"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f0ebe0" />
      {/* Subtle tea bowl ring */}
      <circle cx="78" cy="42" r="8" fill="none" stroke="#3D5B3D" strokeWidth="0.06" opacity="0.15" />
      {/* Company */}
      <text
        x="10"
        y="13"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#2C3E2C"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="17.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="1.3"
        fill="#3D5B3D"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="20.5" x2="70" y2="20.5" stroke="#3D5B3D" strokeWidth="0.06" />
      {/* Contact */}
      <text x="10" y="26" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#444444">
        {data.tel}
      </text>
      <text x="10" y="30" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#444444">
        {data.email}
      </text>
      <text x="10" y="34" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#444444">
        {data.website}
      </text>
      <line x1="10" y1="37" x2="70" y2="37" stroke="#3D5B3D" strokeWidth="0.06" />
      <text
        x="10"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#7a8a7a"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 9. RAMEN (麺) — Bold ramen shop energy
// Strong bold type with steamy warm feeling
// ============================================================
const ramenTemplate: TemplateDefinition = {
  id: 'food-ramen',
  name: 'RAMEN',
  nameJa: '麺',
  category: 'food',
  designer: 'Ivan Orkin',
  description: '麺の力強さ。湯気が立ち昇る活力の一杯。',
  accentColor: '#8B0000',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#2C1810" />
      {/* Steam curves */}
      <path d="M 30 50 Q 32 44 30 38" fill="none" stroke="#ffffff" strokeWidth="0.08" opacity="0.15" />
      <path d="M 45.5 52 Q 47.5 45 45.5 38" fill="none" stroke="#ffffff" strokeWidth="0.08" opacity="0.15" />
      <path d="M 61 50 Q 63 44 61 38" fill="none" stroke="#ffffff" strokeWidth="0.08" opacity="0.15" />
      {/* Bowl rim suggestion */}
      <ellipse cx="45.5" cy="49" rx="25" ry="5" fill="none" stroke="#8B0000" strokeWidth="0.15" opacity="0.4" />
      {/* Noodle wave lines */}
      <path d="M 25 44 Q 30 42 35 44 Q 40 46 45 44 Q 50 42 55 44 Q 60 46 65 44" fill="none" stroke="#FFF8F0" strokeWidth="0.08" opacity="0.2" />
      {/* Name - bold and prominent */}
      <text
        x="45.5"
        y="17"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="7"
        letterSpacing="1"
        fill="#FFF8F0"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="2"
        letterSpacing="0.5"
        fill="#8B0000"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#d4a888"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#2C1810" />
      {/* Subtle bowl at bottom */}
      <ellipse cx="45.5" cy="51" rx="20" ry="4" fill="none" stroke="#8B0000" strokeWidth="0.1" opacity="0.2" />
      {/* Company */}
      <text
        x="10"
        y="13"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="2.5"
        fill="#FFF8F0"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="17.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8B0000"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="20.5" x2="81" y2="20.5" stroke="#8B0000" strokeWidth="0.08" />
      {/* Contact */}
      <text x="10" y="26" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#d4a888">
        {data.tel}
      </text>
      <text x="10" y="30" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#d4a888">
        {data.email}
      </text>
      <text x="10" y="34" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#d4a888">
        {data.website}
      </text>
      <line x1="10" y1="37" x2="81" y2="37" stroke="#8B0000" strokeWidth="0.08" />
      <text
        x="10"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#a08068"
      >
        〒{data.zipCode}
      </text>
      <text
        x="10"
        y="46"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#a08068"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 10. IZAKAYA (居酒) — Lantern-lit pub atmosphere
// Warm red lantern glow with casual warmth
// ============================================================
const izakayaTemplate: TemplateDefinition = {
  id: 'food-izakaya',
  name: 'IZAKAYA',
  nameJa: '居酒',
  category: 'food',
  designer: 'Yokocho Master',
  description: '居酒屋の灯り。赤提灯が誘う温かな宵。',
  accentColor: '#CC3300',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="food-izakaya-glow" cx="50%" cy="25%" r="70%">
          <stop offset="0%" stopColor="#3a2010" />
          <stop offset="100%" stopColor="#1a0a05" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#food-izakaya-glow)" />
      {/* Lantern shape */}
      <ellipse cx="76" cy="15" rx="6" ry="9" fill="#CC3300" opacity="0.25" />
      <ellipse cx="76" cy="15" rx="4.5" ry="7.5" fill="#CC3300" opacity="0.15" />
      <line x1="76" y1="5" x2="76" y2="6" stroke="#CC3300" strokeWidth="0.15" />
      {/* Lantern ribs */}
      <ellipse cx="76" cy="12" rx="5" ry="0.3" fill="none" stroke="#CC3300" strokeWidth="0.06" opacity="0.3" />
      <ellipse cx="76" cy="15" rx="5.5" ry="0.3" fill="none" stroke="#CC3300" strokeWidth="0.06" opacity="0.3" />
      <ellipse cx="76" cy="18" rx="5" ry="0.3" fill="none" stroke="#CC3300" strokeWidth="0.06" opacity="0.3" />
      {/* Kanji on lantern */}
      <text x="76" y="16.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="3.5" fill="#FFE0B0" opacity="0.8">
        酒
      </text>
      {/* Name */}
      <text
        x="10"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#FFE0B0"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="27"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#CC3300"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#a08060"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="46"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#FFE0B0"
        opacity="0.7"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="food-izakaya-glow-b" cx="50%" cy="25%" r="70%">
          <stop offset="0%" stopColor="#3a2010" />
          <stop offset="100%" stopColor="#1a0a05" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#food-izakaya-glow-b)" />
      {/* Small lantern accent */}
      <ellipse cx="82" cy="10" rx="3" ry="5" fill="#CC3300" opacity="0.15" />
      {/* Company */}
      <text
        x="10"
        y="13"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        fill="#FFE0B0"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="17.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#CC3300"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="20.5" x2="81" y2="20.5" stroke="#CC3300" strokeWidth="0.06" opacity="0.5" />
      {/* Contact */}
      <text x="10" y="26" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#d4a878">
        {data.tel}
      </text>
      <text x="10" y="30" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#d4a878">
        {data.email}
      </text>
      <text x="10" y="34" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#d4a878">
        {data.website}
      </text>
      <line x1="10" y1="37" x2="81" y2="37" stroke="#CC3300" strokeWidth="0.06" opacity="0.5" />
      <text
        x="10"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#a08060"
      >
        〒{data.zipCode}
      </text>
      <text
        x="10"
        y="46"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#a08060"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

export const foodTemplates: TemplateDefinition[] = [
  kitchenTemplate,
  sakeTemplate,
  sushiTemplate,
  patisserieTemplate,
  cafeTemplate,
  farmTemplate,
  bakeryTemplate,
  teaTemplate,
  ramenTemplate,
  izakayaTemplate,
];
