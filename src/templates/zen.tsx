import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. ENSO (円相) — Ensō circle, zen brush stroke
// Bold brush circle, extreme whitespace, ink black on paper white
// ============================================================
const ensoTemplate: TemplateDefinition = {
  id: 'zen-enso',
  name: 'ENSO',
  nameJa: '円相',
  category: 'zen',
  designer: 'Zen Brush',
  description: '一筆の円に全てを込める。悟りの形としての名刺。',
  accentColor: '#2A2A2A',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E8" />
      {/* Ensō circle - brush stroke style */}
      <defs>
        <filter id="zen-enso-blur">
          <feGaussianBlur stdDeviation="0.15" />
        </filter>
      </defs>
      <path
        d="M45.5 6 Q62 6 62 20 Q62 34 45.5 34 Q29 34 29 20 Q29 6 44 6"
        fill="none"
        stroke="#2A2A2A"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.8"
        filter="url(#zen-enso-blur)"
      />
      {/* Gap in circle - zen imperfection */}
      <rect x="42" y="4.5" width="5" height="3" fill="#F5F0E8" />
      {/* Name centered below ensō */}
      <text
        x="45.5"
        y="42"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="4.5"
        letterSpacing="1.5"
        fill="#2A2A2A"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="48"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.5"
        fill="#7A7A6A"
      >
        {data.nameEn}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E8" />
      {/* Small ensō mark */}
      <path
        d="M78 8 Q83 8 83 13 Q83 18 78 18 Q73 18 73 13 Q73 8 77 8"
        fill="none"
        stroke="#2A2A2A"
        strokeWidth="0.4"
        strokeLinecap="round"
        opacity="0.4"
      />
      {/* Company */}
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2"
        fill="#2A2A2A"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#7A7A6A"
      >
        {data.companyEn}
      </text>
      {/* Contact - minimal */}
      <text
        x="10"
        y="27"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5A5A4A"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="31"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5A5A4A"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="35"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5A5A4A"
      >
        {data.website}
      </text>
      {/* Address */}
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#9A9A8A"
      >
        〒{data.zipCode}
      </text>
      <text
        x="10"
        y="47.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#9A9A8A"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 2. KARE (枯) — Karesansui dry landscape
// Rock garden dots in rows, raked sand pattern
// ============================================================
const kareTemplate: TemplateDefinition = {
  id: 'zen-kare',
  name: 'KARE',
  nameJa: '枯',
  category: 'zen',
  designer: 'Ryoan-ji',
  description: '枯山水の静謐。砂紋と石が織りなす無限の庭。',
  accentColor: '#B5B0A8',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E8" />
      {/* Raked sand lines */}
      <line x1="0" y1="3" x2="91" y2="3" stroke="#DDD8D0" strokeWidth="0.06" />
      <line x1="0" y1="5" x2="91" y2="5" stroke="#DDD8D0" strokeWidth="0.06" />
      <line x1="0" y1="7" x2="91" y2="7" stroke="#DDD8D0" strokeWidth="0.06" />
      <line x1="0" y1="9" x2="91" y2="9" stroke="#DDD8D0" strokeWidth="0.06" />
      <line x1="0" y1="11" x2="91" y2="11" stroke="#DDD8D0" strokeWidth="0.06" />
      {/* Rock stones */}
      <ellipse cx="72" cy="7" rx="3" ry="2" fill="#B5B0A8" opacity="0.4" />
      <ellipse cx="78" cy="9" rx="1.5" ry="1" fill="#A5A098" opacity="0.3" />
      {/* Raked sand curves around rocks */}
      <path d="M66 5 Q72 3 78 5" fill="none" stroke="#DDD8D0" strokeWidth="0.06" />
      <path d="M65 7 Q72 5 79 7" fill="none" stroke="#DDD8D0" strokeWidth="0.06" />
      <path d="M66 9 Q72 7 78 9" fill="none" stroke="#DDD8D0" strokeWidth="0.06" />
      {/* Name in zen stillness */}
      <text
        x="10"
        y="26"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="5.5"
        letterSpacing="1.5"
        fill="#3A3A2A"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.4"
        fill="#8A8A7A"
      >
        {data.nameEn}
      </text>
      {/* Title */}
      <text
        x="10"
        y="40"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#9A9A8A"
      >
        {data.titleJa}
      </text>
      {/* Bottom raked lines */}
      <line x1="0" y1="47" x2="91" y2="47" stroke="#DDD8D0" strokeWidth="0.06" />
      <line x1="0" y1="49" x2="91" y2="49" stroke="#DDD8D0" strokeWidth="0.06" />
      <line x1="0" y1="51" x2="91" y2="51" stroke="#DDD8D0" strokeWidth="0.06" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E8" />
      {/* Raked sand lines throughout */}
      <line x1="0" y1="4" x2="91" y2="4" stroke="#DDD8D0" strokeWidth="0.06" />
      <line x1="0" y1="6" x2="91" y2="6" stroke="#DDD8D0" strokeWidth="0.06" />
      <line x1="0" y1="8" x2="91" y2="8" stroke="#DDD8D0" strokeWidth="0.06" />
      {/* Small rock */}
      <ellipse cx="15" cy="6" rx="2" ry="1.2" fill="#B5B0A8" opacity="0.3" />
      {/* Company */}
      <text
        x="81"
        y="16"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2"
        fill="#3A3A2A"
      >
        {data.companyJa}
      </text>
      <text
        x="81"
        y="20"
        textAnchor="end"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8A8A7A"
      >
        {data.companyEn}
      </text>
      {/* Contact */}
      <text
        x="81"
        y="28"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5A5A4A"
      >
        {data.tel}
      </text>
      <text
        x="81"
        y="32"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5A5A4A"
      >
        {data.email}
      </text>
      <text
        x="81"
        y="36"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5A5A4A"
      >
        {data.website}
      </text>
      {/* Address */}
      <text
        x="81"
        y="44"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#9A9A8A"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
      {/* Bottom raked lines */}
      <line x1="0" y1="49" x2="91" y2="49" stroke="#DDD8D0" strokeWidth="0.06" />
      <line x1="0" y1="51" x2="91" y2="51" stroke="#DDD8D0" strokeWidth="0.06" />
    </g>
  ),
};

// ============================================================
// 3. SABI (寂) — Wabi-sabi imperfection beauty
// Aged, weathered texture, patina effect, organic imperfection
// ============================================================
const sabiTemplate: TemplateDefinition = {
  id: 'zen-sabi',
  name: 'SABI',
  nameJa: '寂',
  category: 'zen',
  designer: 'Wabi-Sabi',
  description: '寂びた美しさ。時の経過が生む味わい深い佇まい。',
  accentColor: '#7A8B6F',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#EDE8DE" />
      {/* Aged paper spots / patina */}
      <circle cx="20" cy="12" r="4" fill="#D8D0C0" opacity="0.3" />
      <circle cx="70" cy="40" r="6" fill="#D8D0C0" opacity="0.2" />
      <circle cx="50" cy="48" r="3" fill="#D8D0C0" opacity="0.25" />
      {/* Subtle moss green accent */}
      <circle cx="82" cy="8" r="1.5" fill="#7A8B6F" opacity="0.2" />
      <circle cx="80" cy="11" r="0.8" fill="#7A8B6F" opacity="0.15" />
      {/* Name - weathered, organic placement */}
      <text
        x="12"
        y="24"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="5.5"
        letterSpacing="0.8"
        fill="#4A4A3A"
        opacity="0.9"
      >
        {data.nameJa}
      </text>
      <text
        x="12"
        y="30"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#7A7A6A"
      >
        {data.nameEn}
      </text>
      {/* Title */}
      <text
        x="12"
        y="38"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#8A8A7A"
      >
        {data.titleJa}
      </text>
      {/* Company */}
      <text
        x="12"
        y="48"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#A0A090"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#EDE8DE" />
      {/* Aged spots */}
      <circle cx="30" cy="38" r="5" fill="#D8D0C0" opacity="0.25" />
      <circle cx="65" cy="15" r="3" fill="#D8D0C0" opacity="0.2" />
      {/* Company */}
      <text
        x="12"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2"
        fill="#4A4A3A"
      >
        {data.companyJa}
      </text>
      <text
        x="12"
        y="18"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#7A7A6A"
      >
        {data.companyEn}
      </text>
      {/* Contact */}
      <text
        x="12"
        y="27"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5A5A4A"
      >
        {data.tel}
      </text>
      <text
        x="12"
        y="31"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5A5A4A"
      >
        {data.email}
      </text>
      <text
        x="12"
        y="35"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5A5A4A"
      >
        {data.website}
      </text>
      {/* Address */}
      <text
        x="12"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#9A9A8A"
      >
        〒{data.zipCode}
      </text>
      <text
        x="12"
        y="47.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#9A9A8A"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 4. MU (無) — Nothingness, the void of zen
// Almost nothing on the card, extreme emptiness
// ============================================================
const muTemplate: TemplateDefinition = {
  id: 'zen-mu',
  name: 'MU',
  nameJa: '無',
  category: 'zen',
  designer: 'Void Temple',
  description: '無。何もないところに全てがある。究極の禅的名刺。',
  accentColor: '#3A3A3A',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E8" />
      {/* Almost nothing - just the name, floating */}
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="4"
        letterSpacing="2"
        fill="#3A3A3A"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="34"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.5"
        letterSpacing="0.5"
        fill="#B0B0A0"
      >
        {data.nameEn}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E8" />
      {/* Minimal contact - bottom right, nearly invisible */}
      <text
        x="83"
        y="30"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#6A6A5A"
      >
        {data.companyJa}
      </text>
      <text
        x="83"
        y="36"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="1.3"
        fill="#9A9A8A"
      >
        {data.tel}
      </text>
      <text
        x="83"
        y="39.5"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="1.3"
        fill="#9A9A8A"
      >
        {data.email}
      </text>
      <text
        x="83"
        y="43"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="1.3"
        fill="#9A9A8A"
      >
        {data.website}
      </text>
      <text
        x="83"
        y="49"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.1"
        fill="#C0C0B0"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 5. ZEN-STONE (石庭) — Stone garden, stacked stones
// Stacked pebble shapes, balanced composition
// ============================================================
const zenStoneTemplate: TemplateDefinition = {
  id: 'zen-stone',
  name: 'ZEN-STONE',
  nameJa: '石庭',
  category: 'zen',
  designer: 'Stone Garden',
  description: '石庭の均衡。積み石のように重ねられた静かな調和。',
  accentColor: '#8A8478',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E8" />
      {/* Stacked stones */}
      <ellipse cx="75" cy="40" rx="7" ry="3" fill="#C8C0B0" opacity="0.5" />
      <ellipse cx="75" cy="35" rx="5.5" ry="2.5" fill="#B8B0A0" opacity="0.5" />
      <ellipse cx="75" cy="31" rx="4" ry="2" fill="#A8A098" opacity="0.5" />
      <ellipse cx="75" cy="28" rx="2.5" ry="1.5" fill="#989088" opacity="0.5" />
      <ellipse cx="75" cy="26" rx="1.5" ry="0.8" fill="#888078" opacity="0.5" />
      {/* Name */}
      <text
        x="10"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="5.5"
        letterSpacing="1"
        fill="#3A3A30"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="26"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.4"
        fill="#8A8A7A"
      >
        {data.nameEn}
      </text>
      {/* Title */}
      <text
        x="10"
        y="35"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#8A8478"
      >
        {data.titleJa}
      </text>
      {/* Company */}
      <text
        x="10"
        y="45"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#A8A098"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E8" />
      {/* Small stacked stones accent */}
      <ellipse cx="80" cy="45" rx="4" ry="1.8" fill="#C8C0B0" opacity="0.3" />
      <ellipse cx="80" cy="42" rx="3" ry="1.5" fill="#B8B0A0" opacity="0.3" />
      <ellipse cx="80" cy="40" rx="2" ry="1" fill="#A8A098" opacity="0.3" />
      {/* Company */}
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2"
        fill="#3A3A30"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8A8A7A"
      >
        {data.companyEn}
      </text>
      {/* Contact */}
      <text
        x="10"
        y="26"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5A5A4A"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="30"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5A5A4A"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="34"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5A5A4A"
      >
        {data.website}
      </text>
      {/* Address */}
      <text
        x="10"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#A8A098"
      >
        〒{data.zipCode}
      </text>
      <text
        x="10"
        y="46.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#A8A098"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 6. BREATH-Z (呼吸) — Zen breathing meditation
// Concentric circles radiating like breath, rhythmic spacing
// ============================================================
const breathZTemplate: TemplateDefinition = {
  id: 'zen-breath-z',
  name: 'BREATH-Z',
  nameJa: '呼吸',
  category: 'zen',
  designer: 'Breath Temple',
  description: '呼吸の波紋。吸って、吐いて。同心円が瞑想の世界へ導く。',
  accentColor: '#7A8B6F',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E8" />
      {/* Concentric breath circles */}
      <circle cx="70" cy="20" r="3" fill="none" stroke="#7A8B6F" strokeWidth="0.08" opacity="0.5" />
      <circle cx="70" cy="20" r="6" fill="none" stroke="#7A8B6F" strokeWidth="0.06" opacity="0.4" />
      <circle cx="70" cy="20" r="9" fill="none" stroke="#7A8B6F" strokeWidth="0.05" opacity="0.3" />
      <circle cx="70" cy="20" r="12" fill="none" stroke="#7A8B6F" strokeWidth="0.04" opacity="0.2" />
      <circle cx="70" cy="20" r="15" fill="none" stroke="#7A8B6F" strokeWidth="0.03" opacity="0.15" />
      <circle cx="70" cy="20" r="18" fill="none" stroke="#7A8B6F" strokeWidth="0.03" opacity="0.1" />
      {/* Center point - the breath */}
      <circle cx="70" cy="20" r="0.5" fill="#7A8B6F" opacity="0.4" />
      {/* Name */}
      <text
        x="10"
        y="24"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="5"
        letterSpacing="1"
        fill="#3A3A30"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="30"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.4"
        fill="#7A8B6F"
      >
        {data.nameEn}
      </text>
      {/* Title */}
      <text
        x="10"
        y="38"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#8A9A7A"
      >
        {data.titleJa}
      </text>
      {/* Company */}
      <text
        x="10"
        y="48"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#A0B090"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E8" />
      {/* Smaller breath circles */}
      <circle cx="78" cy="10" r="2" fill="none" stroke="#7A8B6F" strokeWidth="0.06" opacity="0.4" />
      <circle cx="78" cy="10" r="4" fill="none" stroke="#7A8B6F" strokeWidth="0.04" opacity="0.3" />
      <circle cx="78" cy="10" r="6" fill="none" stroke="#7A8B6F" strokeWidth="0.03" opacity="0.2" />
      {/* Company */}
      <text
        x="10"
        y="13"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2"
        fill="#3A3A30"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="17"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#7A8B6F"
      >
        {data.companyEn}
      </text>
      {/* Contact */}
      <text
        x="10"
        y="26"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5A5A4A"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="30"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5A5A4A"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="34"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5A5A4A"
      >
        {data.website}
      </text>
      {/* Address */}
      <text
        x="10"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#A0B090"
      >
        〒{data.zipCode}
      </text>
      <text
        x="10"
        y="46.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#A0B090"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 7. WABI (侘) — Wabi rustic simplicity
// Rough textures, earth tones, humble beauty
// ============================================================
const wabiTemplate: TemplateDefinition = {
  id: 'zen-wabi',
  name: 'WABI',
  nameJa: '侘',
  category: 'zen',
  designer: 'Tea Room',
  description: '侘びの心。素朴な中に見出す深い美しさ。茶室の精神。',
  accentColor: '#8A7B68',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#EAE2D4" />
      {/* Rough earth texture patches */}
      <defs>
        <radialGradient id="zen-wabi-earth" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#8A7B68" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#8A7B68" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#zen-wabi-earth)" />
      {/* Single dried branch line */}
      <path d="M65 5 Q68 10 66 18 Q65 22 67 28" fill="none" stroke="#8A7B68" strokeWidth="0.15" opacity="0.3" strokeLinecap="round" />
      <path d="M66 12 Q70 10 73 11" fill="none" stroke="#8A7B68" strokeWidth="0.1" opacity="0.2" strokeLinecap="round" />
      {/* Name - humble placement */}
      <text
        x="10"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="5"
        letterSpacing="0.8"
        fill="#4A3A2A"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="28"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#8A7B68"
      >
        {data.nameEn}
      </text>
      {/* Title */}
      <text
        x="10"
        y="36"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#8A7B68"
      >
        {data.titleJa}
      </text>
      {/* Company */}
      <text
        x="10"
        y="46"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#A89B88"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#EAE2D4" />
      <rect width="91" height="55" fill="url(#zen-wabi-earth)" />
      {/* Small branch */}
      <path d="M75 42 Q78 38 76 32" fill="none" stroke="#8A7B68" strokeWidth="0.1" opacity="0.2" strokeLinecap="round" />
      {/* Company */}
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2"
        fill="#4A3A2A"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8A7B68"
      >
        {data.companyEn}
      </text>
      {/* Contact */}
      <text
        x="10"
        y="27"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5A4A3A"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="31"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5A4A3A"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="35"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5A4A3A"
      >
        {data.website}
      </text>
      {/* Address */}
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#A89B88"
      >
        〒{data.zipCode}
      </text>
      <text
        x="10"
        y="47.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#A89B88"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 8. SAND (砂) — Sand garden patterns
// Fine ripple patterns, sand-colored palette, meditative flow
// ============================================================
const sandTemplate: TemplateDefinition = {
  id: 'zen-sand',
  name: 'SAND',
  nameJa: '砂',
  category: 'zen',
  designer: 'Sand Garden',
  description: '砂の波紋が広がる。砂紋の一筋一筋に心を込めて。',
  accentColor: '#C8BDA8',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E8" />
      {/* Ripple sand patterns - concentric arcs from bottom left */}
      <path d="M-5 55 Q10 35 35 40 Q60 45 91 30" fill="none" stroke="#DDD8D0" strokeWidth="0.06" />
      <path d="M-5 55 Q12 38 37 42 Q62 47 91 33" fill="none" stroke="#DDD8D0" strokeWidth="0.06" />
      <path d="M-5 55 Q14 40 39 44 Q64 49 91 36" fill="none" stroke="#DDD8D0" strokeWidth="0.06" />
      <path d="M-5 55 Q16 42 41 46 Q66 51 91 39" fill="none" stroke="#DDD8D0" strokeWidth="0.06" />
      <path d="M-5 55 Q18 44 43 48 Q68 53 91 42" fill="none" stroke="#DDD8D0" strokeWidth="0.06" />
      <path d="M-5 55 Q20 46 45 50 Q70 55 91 45" fill="none" stroke="#DDD8D0" strokeWidth="0.06" />
      {/* Name above the waves */}
      <text
        x="45.5"
        y="16"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="5.5"
        letterSpacing="1.5"
        fill="#4A4A3A"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.4"
        fill="#8A8A7A"
      >
        {data.nameEn}
      </text>
      {/* Title */}
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#9A9A8A"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E8" />
      {/* Ripple patterns from top right */}
      <path d="M91 0 Q70 8 60 5 Q40 2 0 15" fill="none" stroke="#DDD8D0" strokeWidth="0.06" />
      <path d="M91 0 Q72 10 62 7 Q42 4 0 18" fill="none" stroke="#DDD8D0" strokeWidth="0.06" />
      <path d="M91 0 Q74 12 64 9 Q44 6 0 21" fill="none" stroke="#DDD8D0" strokeWidth="0.06" />
      {/* Company */}
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2"
        fill="#4A4A3A"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="18"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8A8A7A"
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
        fill="#5A5A4A"
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
        fill="#5A5A4A"
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
        fill="#5A5A4A"
      >
        {data.website}
      </text>
      {/* Address */}
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#A0A090"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="47.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#A0A090"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 9. STILL (静) — Stillness, quiet water surface
// Horizontal reflection line, mirror-like calm
// ============================================================
const stillTemplate: TemplateDefinition = {
  id: 'zen-still',
  name: 'STILL',
  nameJa: '静',
  category: 'zen',
  designer: 'Still Water',
  description: '静寂の水面。一本の水平線が天と地を映し分ける。',
  accentColor: '#8AA0B0',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E8" />
      {/* Horizon line - the still water */}
      <line x1="0" y1="30" x2="91" y2="30" stroke="#B5B0A8" strokeWidth="0.1" />
      {/* Above water - clear */}
      <text
        x="45.5"
        y="18"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="5.5"
        letterSpacing="1"
        fill="#3A3A30"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.4"
        fill="#6A6A5A"
      >
        {data.nameEn}
      </text>
      {/* Below water - reflection, lighter/faded */}
      <text
        x="45.5"
        y="39"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="5.5"
        letterSpacing="1"
        fill="#D0D0C0"
        opacity="0.3"
      >
        {data.nameJa}
      </text>
      {/* Title on water line */}
      <text
        x="45.5"
        y="48"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#B5B0A8"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E8" />
      {/* Horizon line */}
      <line x1="0" y1="22" x2="91" y2="22" stroke="#B5B0A8" strokeWidth="0.08" />
      {/* Company above */}
      <text
        x="45.5"
        y="12"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2"
        fill="#3A3A30"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="16.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8A8A7A"
      >
        {data.companyEn}
      </text>
      {/* Contact below the water line */}
      <text
        x="45.5"
        y="29"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5A5A4A"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="33"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5A5A4A"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="37"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5A5A4A"
      >
        {data.website}
      </text>
      {/* Address */}
      <text
        x="45.5"
        y="45"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#B5B0A8"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="48.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#B5B0A8"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 10. FLOW-Z (流転) — Flowing impermanence
// Ink wash flowing effect, sumi-e inspired movement
// ============================================================
const flowZTemplate: TemplateDefinition = {
  id: 'zen-flow-z',
  name: 'FLOW-Z',
  nameJa: '流転',
  category: 'zen',
  designer: 'Sumi-e Flow',
  description: '流転する世界。墨の流れが万物の無常を描く。',
  accentColor: '#4A4A40',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E8" />
      {/* Ink wash flow - sumi-e effect */}
      <defs>
        <linearGradient id="zen-flow-z-ink" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A4A40" stopOpacity="0.12" />
          <stop offset="40%" stopColor="#4A4A40" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#4A4A40" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0 10 Q15 5 30 12 Q50 20 70 10 Q85 5 91 12" fill="url(#zen-flow-z-ink)" />
      <path d="M0 12 Q20 8 35 14 Q55 22 75 12 Q88 7 91 14" fill="none" stroke="#4A4A40" strokeWidth="0.08" opacity="0.2" />
      {/* Ink drops */}
      <circle cx="25" cy="10" r="0.8" fill="#4A4A40" opacity="0.1" />
      <circle cx="55" cy="14" r="0.5" fill="#4A4A40" opacity="0.08" />
      {/* Name */}
      <text
        x="10"
        y="28"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="5.5"
        letterSpacing="1"
        fill="#2A2A20"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="34"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.4"
        fill="#6A6A5A"
      >
        {data.nameEn}
      </text>
      {/* Title */}
      <text
        x="10"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#8A8A7A"
      >
        {data.titleJa}
      </text>
      {/* Bottom ink flow */}
      <path d="M0 50 Q30 48 50 51 Q70 54 91 50" fill="none" stroke="#4A4A40" strokeWidth="0.06" opacity="0.15" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E8" />
      {/* Ink wash flow */}
      <path d="M0 45 Q25 40 45 47 Q65 52 91 44" fill="url(#zen-flow-z-ink)" />
      <path d="M0 5 Q20 8 40 4 Q60 1 91 6" fill="none" stroke="#4A4A40" strokeWidth="0.06" opacity="0.1" />
      {/* Company */}
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2"
        fill="#2A2A20"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#6A6A5A"
      >
        {data.companyEn}
      </text>
      {/* Contact */}
      <text
        x="10"
        y="27"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5A5A4A"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="31"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5A5A4A"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="35"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5A5A4A"
      >
        {data.website}
      </text>
      {/* Address */}
      <text
        x="10"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#9A9A8A"
      >
        〒{data.zipCode}
      </text>
      <text
        x="10"
        y="46.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#9A9A8A"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

export const zenTemplates: TemplateDefinition[] = [
  ensoTemplate,
  kareTemplate,
  sabiTemplate,
  muTemplate,
  zenStoneTemplate,
  breathZTemplate,
  wabiTemplate,
  sandTemplate,
  stillTemplate,
  flowZTemplate,
];
