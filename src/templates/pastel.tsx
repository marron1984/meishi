import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. BLUSH (頬) — Warm blush pink
// Soft pink gradient with gentle circular accents
// ============================================================
const blushTemplate: TemplateDefinition = {
  id: 'pastel-blush',
  name: 'BLUSH',
  nameJa: '頬',
  category: 'pastel',
  designer: 'Pastel Atelier',
  description: '頬を染める淡い桜色。やわらかな温もりのデザイン。',
  accentColor: '#F8BBD9',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFF0F5" />
      <defs>
        <radialGradient id="pastel-blush-g1" cx="0.7" cy="0.3" r="0.5">
          <stop offset="0%" stopColor="#F8BBD9" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FFF0F5" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="pastel-blush-g2" cx="0.2" cy="0.8" r="0.4">
          <stop offset="0%" stopColor="#F48FB1" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#FFF0F5" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Soft pink blush areas */}
      <circle cx="65" cy="16" r="20" fill="url(#pastel-blush-g1)" />
      <circle cx="20" cy="44" r="16" fill="url(#pastel-blush-g2)" />
      {/* Gentle circles */}
      <circle cx="78" cy="10" r="6" fill="#F8BBD9" fillOpacity="0.12" />
      <circle cx="72" cy="20" r="4" fill="#F48FB1" fillOpacity="0.08" />
      <circle cx="12" cy="42" r="5" fill="#F8BBD9" fillOpacity="0.1" />
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="6"
        letterSpacing="0.6"
        fill="#AD1457"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="29"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2.2"
        letterSpacing="0.4"
        fill="#C2185B"
        fontStyle="italic"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#E91E8C"
        fillOpacity="0.5"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFF0F5" />
      <circle cx="80" cy="45" r="12" fill="#F8BBD9" fillOpacity="0.15" />
      <circle cx="76" cy="42" r="5" fill="#F48FB1" fillOpacity="0.08" />
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#AD1457"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18.5"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#C2185B"
        fontStyle="italic"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="22" x2="55" y2="22" stroke="#F8BBD9" strokeWidth="0.15" strokeOpacity="0.6" />
      <text
        x="10"
        y="28"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#AD1457"
        fillOpacity="0.7"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#AD1457"
        fillOpacity="0.7"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#AD1457"
        fillOpacity="0.7"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#E91E8C"
        fillOpacity="0.4"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 2. MINT (薄荷) — Cool mint green
// Fresh mint tones with rounded rectangle accents
// ============================================================
const mintTemplate: TemplateDefinition = {
  id: 'pastel-mint',
  name: 'MINT',
  nameJa: '薄荷',
  category: 'pastel',
  designer: 'Pastel Atelier',
  description: '薄荷のような爽やかさ。清涼感あふれるミントグリーン。',
  accentColor: '#B2DFDB',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#E0F2F1" />
      {/* Rounded rectangle accents */}
      <rect x="60" y="4" width="26" height="16" rx="8" fill="#B2DFDB" fillOpacity="0.4" />
      <rect x="65" y="8" width="18" height="10" rx="5" fill="#80CBC4" fillOpacity="0.2" />
      <rect x="5" y="38" width="22" height="12" rx="6" fill="#B2DFDB" fillOpacity="0.3" />
      <rect x="8" y="40" width="16" height="8" rx="4" fill="#80CBC4" fillOpacity="0.15" />
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#00695C"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="29"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.3"
        fill="#00897B"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#4DB6AC"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#E0F2F1" />
      <rect x="68" y="38" width="18" height="12" rx="6" fill="#B2DFDB" fillOpacity="0.3" />
      <rect x="71" y="40" width="12" height="8" rx="4" fill="#80CBC4" fillOpacity="0.15" />
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#00695C"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#00897B"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="22" x2="55" y2="22" stroke="#4DB6AC" strokeWidth="0.15" strokeOpacity="0.5" />
      <text
        x="10"
        y="28"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#00796B"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#00796B"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#00796B"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#4DB6AC"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 3. LAVENDER (薰衣草) — Soft purple lavender
// Dreamy lavender with gentle wave patterns
// ============================================================
const lavenderTemplate: TemplateDefinition = {
  id: 'pastel-lavender',
  name: 'LAVENDER',
  nameJa: '薰衣草',
  category: 'pastel',
  designer: 'Pastel Atelier',
  description: 'ラベンダー畑の夢見心地。紫の霞がかった優しさ。',
  accentColor: '#D1C4E9',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#EDE7F6" />
      <defs>
        <linearGradient id="pastel-lavender-wave" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#D1C4E9" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#B39DDB" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#D1C4E9" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      {/* Gentle wave layers */}
      <path d="M 0,42 Q 15,38 30,42 Q 45,46 60,42 Q 75,38 91,42 L 91,55 L 0,55 Z" fill="#D1C4E9" fillOpacity="0.2" />
      <path d="M 0,46 Q 15,42 30,46 Q 45,50 60,46 Q 75,42 91,46 L 91,55 L 0,55 Z" fill="#B39DDB" fillOpacity="0.15" />
      <path d="M 0,50 Q 15,47 30,50 Q 45,53 60,50 Q 75,47 91,50 L 91,55 L 0,55 Z" fill="#9575CD" fillOpacity="0.1" />
      <text
        x="45.5"
        y="18"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="6"
        letterSpacing="0.6"
        fill="#4527A0"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="25"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2.2"
        letterSpacing="0.3"
        fill="#5E35B1"
        fontStyle="italic"
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
        fill="#7E57C2"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#EDE7F6" />
      {/* Subtle wave at top */}
      <path d="M 0,0 L 91,0 L 91,8 Q 75,12 60,8 Q 45,4 30,8 Q 15,12 0,8 Z" fill="#D1C4E9" fillOpacity="0.2" />
      <text
        x="10"
        y="18"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#4527A0"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="22.5"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#5E35B1"
        fontStyle="italic"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="26" x2="55" y2="26" stroke="#B39DDB" strokeWidth="0.15" strokeOpacity="0.5" />
      <text
        x="10"
        y="32"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5E35B1"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5E35B1"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="40"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5E35B1"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="48"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#9575CD"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 4. PEACH (桃) — Warm peach tone
// Peachy gradient with soft oval shapes
// ============================================================
const peachTemplate: TemplateDefinition = {
  id: 'pastel-peach',
  name: 'PEACH',
  nameJa: '桃',
  category: 'pastel',
  designer: 'Pastel Atelier',
  description: '桃のように温かく柔らかい。ピーチトーンの優しい空間。',
  accentColor: '#FFCCBC',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFF3E0" />
      <defs>
        <radialGradient id="pastel-peach-g1" cx="0.3" cy="0.4" r="0.6">
          <stop offset="0%" stopColor="#FFCCBC" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#FFF3E0" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Soft peach ovals */}
      <ellipse cx="25" cy="22" rx="20" ry="14" fill="url(#pastel-peach-g1)" />
      <ellipse cx="70" cy="38" rx="16" ry="10" fill="#FFAB91" fillOpacity="0.15" />
      <ellipse cx="80" cy="10" rx="10" ry="7" fill="#FFCCBC" fillOpacity="0.2" />
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="6"
        letterSpacing="0.5"
        fill="#BF360C"
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
        letterSpacing="0.3"
        fill="#D84315"
        fontStyle="italic"
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
        fill="#FF8A65"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFF3E0" />
      <ellipse cx="78" cy="42" rx="12" ry="8" fill="#FFCCBC" fillOpacity="0.2" />
      <ellipse cx="85" cy="38" rx="8" ry="5" fill="#FFAB91" fillOpacity="0.12" />
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#BF360C"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18.5"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#D84315"
        fontStyle="italic"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="22" x2="55" y2="22" stroke="#FFAB91" strokeWidth="0.15" strokeOpacity="0.5" />
      <text
        x="10"
        y="28"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#D84315"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#D84315"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#D84315"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#FF8A65"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 5. SKY-P (蒼) — Soft sky blue
// Light blue sky with cloud-like shapes
// ============================================================
const skyPTemplate: TemplateDefinition = {
  id: 'pastel-sky-p',
  name: 'SKY-P',
  nameJa: '蒼',
  category: 'pastel',
  designer: 'Pastel Atelier',
  description: '柔らかな空色。雲のような形が浮かぶ穏やかな青空。',
  accentColor: '#BBDEFB',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#E3F2FD" />
      <defs>
        <linearGradient id="pastel-sky-p-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#BBDEFB" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#E3F2FD" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="91" height="25" fill="url(#pastel-sky-p-bg)" />
      {/* Cloud shapes */}
      <ellipse cx="70" cy="10" rx="12" ry="5" fill="#FFFFFF" fillOpacity="0.5" />
      <ellipse cx="65" cy="8" rx="8" ry="4" fill="#FFFFFF" fillOpacity="0.4" />
      <ellipse cx="78" cy="9" rx="7" ry="3.5" fill="#FFFFFF" fillOpacity="0.35" />
      <ellipse cx="20" cy="42" rx="10" ry="4" fill="#FFFFFF" fillOpacity="0.35" />
      <ellipse cx="15" cy="40" rx="6" ry="3" fill="#FFFFFF" fillOpacity="0.3" />
      <ellipse cx="27" cy="41" rx="5" ry="2.5" fill="#FFFFFF" fillOpacity="0.25" />
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="6"
        letterSpacing="0.6"
        fill="#1565C0"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="29"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.3"
        fill="#1976D2"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#42A5F5"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#E3F2FD" />
      {/* Small cloud accent */}
      <ellipse cx="78" cy="8" rx="8" ry="3.5" fill="#FFFFFF" fillOpacity="0.35" />
      <ellipse cx="74" cy="7" rx="5" ry="2.5" fill="#FFFFFF" fillOpacity="0.3" />
      <ellipse cx="83" cy="7.5" rx="4" ry="2" fill="#FFFFFF" fillOpacity="0.25" />
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#1565C0"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#1976D2"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="22" x2="55" y2="22" stroke="#90CAF9" strokeWidth="0.15" strokeOpacity="0.5" />
      <text
        x="10"
        y="28"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#1976D2"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#1976D2"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#1976D2"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#64B5F6"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 6. LEMON (檸檬) — Soft lemon yellow
// Cheerful yellow with dot pattern accents
// ============================================================
const lemonTemplate: TemplateDefinition = {
  id: 'pastel-lemon',
  name: 'LEMON',
  nameJa: '檸檬',
  category: 'pastel',
  designer: 'Pastel Atelier',
  description: 'レモンの爽快さ。明るいイエローが元気を運ぶ。',
  accentColor: '#FFF9C4',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFDE7" />
      {/* Dot pattern in corner */}
      {[5, 10, 15, 20, 25].map((x) =>
        [5, 10, 15].map((y, j) => (
          <circle key={`pastel-lemon-dot-${x}-${j}`} cx={x} cy={y} r="0.5" fill="#FFF176" fillOpacity={0.4 - j * 0.1} />
        ))
      )}
      {/* Bottom-right dots */}
      {[66, 71, 76, 81, 86].map((x) =>
        [40, 45, 50].map((y, j) => (
          <circle key={`pastel-lemon-bdot-${x}-${j}`} cx={x} cy={y} r="0.5" fill="#FFF176" fillOpacity={0.3 - j * 0.08} />
        ))
      )}
      {/* Lemon slice accent */}
      <circle cx="80" cy="10" r="7" fill="#FFF9C4" fillOpacity="0.4" />
      <circle cx="80" cy="10" r="5" fill="none" stroke="#FFD54F" strokeWidth="0.15" strokeOpacity="0.3" />
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#F57F17"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.3"
        fill="#F9A825"
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
        fill="#FBC02D"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFDE7" />
      {/* Subtle lemon dots */}
      {[72, 77, 82, 87].map((x) =>
        [42, 47, 52].map((y, j) => (
          <circle key={`pastel-lemon-back-${x}-${j}`} cx={x} cy={y} r="0.4" fill="#FFF176" fillOpacity={0.25 - j * 0.06} />
        ))
      )}
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#F57F17"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#F9A825"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="22" x2="55" y2="22" stroke="#FFD54F" strokeWidth="0.15" strokeOpacity="0.4" />
      <text
        x="10"
        y="28"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#F9A825"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#F9A825"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#F9A825"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#FBC02D"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 7. LILAC (藤) — Soft lilac purple
// Delicate lilac with hanging wisteria-like shapes
// ============================================================
const lilacTemplate: TemplateDefinition = {
  id: 'pastel-lilac',
  name: 'LILAC',
  nameJa: '藤',
  category: 'pastel',
  designer: 'Pastel Atelier',
  description: '藤の花のような薄紫。枝垂れる花房のリズム。',
  accentColor: '#CE93D8',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F3E5F5" />
      {/* Hanging wisteria-like clusters from top */}
      <g opacity="0.3">
        <circle cx="12" cy="3" r="1.2" fill="#CE93D8" />
        <circle cx="12" cy="6" r="1" fill="#BA68C8" />
        <circle cx="12" cy="9" r="0.8" fill="#AB47BC" />
        <circle cx="12" cy="11.5" r="0.6" fill="#9C27B0" />
      </g>
      <g opacity="0.25">
        <circle cx="20" cy="2" r="1" fill="#CE93D8" />
        <circle cx="20" cy="4.5" r="0.9" fill="#BA68C8" />
        <circle cx="20" cy="7" r="0.7" fill="#AB47BC" />
        <circle cx="20" cy="9" r="0.5" fill="#9C27B0" />
      </g>
      <g opacity="0.2">
        <circle cx="28" cy="3" r="0.9" fill="#CE93D8" />
        <circle cx="28" cy="5.5" r="0.7" fill="#BA68C8" />
        <circle cx="28" cy="7.5" r="0.5" fill="#AB47BC" />
      </g>
      {/* Right side clusters */}
      <g opacity="0.25">
        <circle cx="75" cy="2" r="1.1" fill="#CE93D8" />
        <circle cx="75" cy="5" r="0.9" fill="#BA68C8" />
        <circle cx="75" cy="7.5" r="0.7" fill="#AB47BC" />
        <circle cx="75" cy="9.5" r="0.5" fill="#9C27B0" />
      </g>
      <g opacity="0.2">
        <circle cx="82" cy="3" r="0.8" fill="#CE93D8" />
        <circle cx="82" cy="5" r="0.6" fill="#BA68C8" />
        <circle cx="82" cy="7" r="0.4" fill="#AB47BC" />
      </g>
      {/* Vine lines */}
      <path d="M 8,0 Q 10,4 12,3 Q 14,2 16,4 Q 18,3 20,2 Q 22,1 24,3 Q 26,2 28,3 Q 30,4 32,2" stroke="#8E24AA" strokeWidth="0.1" fill="none" strokeOpacity="0.2" />
      <path d="M 70,0 Q 72,2 75,2 Q 78,1 80,3 Q 82,4 84,2 Q 86,1 88,3" stroke="#8E24AA" strokeWidth="0.1" fill="none" strokeOpacity="0.15" />
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="6"
        letterSpacing="0.6"
        fill="#6A1B9A"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.3"
        fill="#7B1FA2"
        fontStyle="italic"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="39"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#AB47BC"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F3E5F5" />
      {/* Subtle wisteria accent */}
      <g opacity="0.15">
        <circle cx="80" cy="3" r="0.8" fill="#CE93D8" />
        <circle cx="80" cy="5" r="0.6" fill="#BA68C8" />
        <circle cx="80" cy="7" r="0.4" fill="#AB47BC" />
      </g>
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#6A1B9A"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18.5"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#7B1FA2"
        fontStyle="italic"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="22" x2="55" y2="22" stroke="#CE93D8" strokeWidth="0.15" strokeOpacity="0.4" />
      <text
        x="10"
        y="28"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#7B1FA2"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#7B1FA2"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#7B1FA2"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#AB47BC"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 8. CORAL-P (珊) — Soft coral pastel
// Warm coral with overlapping transparent circles
// ============================================================
const coralPTemplate: TemplateDefinition = {
  id: 'pastel-coral-p',
  name: 'CORAL-P',
  nameJa: '珊',
  category: 'pastel',
  designer: 'Pastel Atelier',
  description: '珊瑚色の温もり。透明な円が重なり合う穏やかな調和。',
  accentColor: '#EF9A9A',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFEBEE" />
      {/* Overlapping transparent coral circles */}
      <circle cx="68" cy="14" r="12" fill="#EF9A9A" fillOpacity="0.15" />
      <circle cx="78" cy="18" r="10" fill="#E57373" fillOpacity="0.1" />
      <circle cx="72" cy="22" r="8" fill="#EF5350" fillOpacity="0.08" />
      <circle cx="18" cy="42" r="10" fill="#EF9A9A" fillOpacity="0.12" />
      <circle cx="25" cy="46" r="8" fill="#E57373" fillOpacity="0.08" />
      <circle cx="14" cy="48" r="6" fill="#EF5350" fillOpacity="0.06" />
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="6"
        letterSpacing="0.5"
        fill="#C62828"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="29"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.3"
        fill="#D32F2F"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#E57373"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFEBEE" />
      <circle cx="80" cy="44" r="8" fill="#EF9A9A" fillOpacity="0.1" />
      <circle cx="76" cy="48" r="6" fill="#E57373" fillOpacity="0.08" />
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#C62828"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#D32F2F"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="22" x2="55" y2="22" stroke="#EF9A9A" strokeWidth="0.15" strokeOpacity="0.5" />
      <text
        x="10"
        y="28"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#D32F2F"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#D32F2F"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#D32F2F"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#E57373"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 9. SAGE (鼠) — Muted sage green
// Earthy sage with subtle leaf vein pattern
// ============================================================
const sageTemplate: TemplateDefinition = {
  id: 'pastel-sage',
  name: 'SAGE',
  nameJa: '鼠',
  category: 'pastel',
  designer: 'Pastel Atelier',
  description: 'セージの落ち着き。灰みがかった緑が静けさを纏う。',
  accentColor: '#A5D6A7',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#E8F5E9" />
      <defs>
        <linearGradient id="pastel-sage-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C8E6C9" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#E8F5E9" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Large sage leaf vein pattern in bg */}
      <ellipse cx="70" cy="28" rx="22" ry="18" fill="url(#pastel-sage-grad)" />
      {/* Leaf vein lines */}
      <path d="M 58,28 Q 70,28 82,28" stroke="#A5D6A7" strokeWidth="0.15" fill="none" strokeOpacity="0.3" />
      <path d="M 65,20 Q 70,25 72,28" stroke="#A5D6A7" strokeWidth="0.1" fill="none" strokeOpacity="0.2" />
      <path d="M 66,36 Q 70,31 73,28" stroke="#A5D6A7" strokeWidth="0.1" fill="none" strokeOpacity="0.2" />
      <path d="M 60,22 Q 66,26 70,28" stroke="#A5D6A7" strokeWidth="0.08" fill="none" strokeOpacity="0.15" />
      <path d="M 61,34 Q 67,30 70,28" stroke="#A5D6A7" strokeWidth="0.08" fill="none" strokeOpacity="0.15" />
      <path d="M 74,20 Q 72,24 70,28" stroke="#A5D6A7" strokeWidth="0.08" fill="none" strokeOpacity="0.15" />
      <path d="M 76,36 Q 73,31 70,28" stroke="#A5D6A7" strokeWidth="0.08" fill="none" strokeOpacity="0.15" />
      <text
        x="10"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#2E7D32"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="27"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.3"
        fill="#388E3C"
        fontStyle="italic"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="35"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#66BB6A"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#E8F5E9" />
      {/* Subtle leaf vein */}
      <ellipse cx="80" cy="44" rx="12" ry="8" fill="#C8E6C9" fillOpacity="0.2" />
      <path d="M 74,44 Q 80,44 86,44" stroke="#A5D6A7" strokeWidth="0.1" fill="none" strokeOpacity="0.2" />
      <path d="M 78,40 Q 80,42 80,44" stroke="#A5D6A7" strokeWidth="0.06" fill="none" strokeOpacity="0.15" />
      <path d="M 78,48 Q 80,46 80,44" stroke="#A5D6A7" strokeWidth="0.06" fill="none" strokeOpacity="0.15" />
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#2E7D32"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18.5"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#388E3C"
        fontStyle="italic"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="22" x2="55" y2="22" stroke="#A5D6A7" strokeWidth="0.15" strokeOpacity="0.4" />
      <text
        x="10"
        y="28"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#388E3C"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#388E3C"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#388E3C"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#66BB6A"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 10. CREAM (練) — Warm cream/vanilla
// Warm cream base with soft diagonal stripe accents
// ============================================================
const creamTemplate: TemplateDefinition = {
  id: 'pastel-cream',
  name: 'CREAM',
  nameJa: '練',
  category: 'pastel',
  designer: 'Pastel Atelier',
  description: 'クリームの温かみ。バニラ色のやわらかな品格。',
  accentColor: '#FFE0B2',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFF8E1" />
      <defs>
        <linearGradient id="pastel-cream-diag" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFE0B2" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FFF8E1" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Soft diagonal stripes */}
      <line x1="55" y1="0" x2="91" y2="36" stroke="#FFE0B2" strokeWidth="8" strokeOpacity="0.08" />
      <line x1="65" y1="0" x2="91" y2="26" stroke="#FFCC80" strokeWidth="6" strokeOpacity="0.06" />
      <line x1="75" y1="0" x2="91" y2="16" stroke="#FFB74D" strokeWidth="4" strokeOpacity="0.05" />
      {/* Bottom-left soft stripe */}
      <line x1="0" y1="30" x2="30" y2="55" stroke="#FFE0B2" strokeWidth="8" strokeOpacity="0.06" />
      <line x1="0" y1="38" x2="22" y2="55" stroke="#FFCC80" strokeWidth="5" strokeOpacity="0.05" />
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="6"
        letterSpacing="0.5"
        fill="#E65100"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="29"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2.2"
        letterSpacing="0.3"
        fill="#EF6C00"
        fontStyle="italic"
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
        fill="#FF9800"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFF8E1" />
      {/* Subtle diagonal stripe */}
      <line x1="60" y1="40" x2="91" y2="55" stroke="#FFE0B2" strokeWidth="6" strokeOpacity="0.06" />
      <line x1="68" y1="40" x2="91" y2="50" stroke="#FFCC80" strokeWidth="4" strokeOpacity="0.05" />
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#E65100"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18.5"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#EF6C00"
        fontStyle="italic"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="22" x2="55" y2="22" stroke="#FFCC80" strokeWidth="0.15" strokeOpacity="0.5" />
      <text
        x="10"
        y="28"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#EF6C00"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#EF6C00"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#EF6C00"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#FF9800"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

export const pastelTemplates: TemplateDefinition[] = [
  blushTemplate,
  mintTemplate,
  lavenderTemplate,
  peachTemplate,
  skyPTemplate,
  lemonTemplate,
  lilacTemplate,
  coralPTemplate,
  sageTemplate,
  creamTemplate,
];
