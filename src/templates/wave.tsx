import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. TIDE (潮) — Ocean tide, rhythmic water movement
// Horizontal wave bands, deep blue to foam gradient
// ============================================================
const tideTemplate: TemplateDefinition = {
  id: 'wave-tide',
  name: 'TIDE',
  nameJa: '潮',
  category: 'wave',
  designer: 'Ocean Designer',
  description: '潮の満ち引き。海が呼吸するリズムの美。',
  accentColor: '#0A3D62',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="wave-tide-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0A3D62" />
          <stop offset="60%" stopColor="#1A5580" />
          <stop offset="100%" stopColor="#2A6A90" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#wave-tide-bg)" />
      {/* Tide wave layers */}
      <path
        d="M0,35 Q10,32 20,35 Q30,38 40,35 Q50,32 60,35 Q70,38 80,35 Q90,32 91,35 L91,55 L0,55 Z"
        fill="#1A5580"
        opacity="0.4"
      />
      <path
        d="M0,40 Q12,37 24,40 Q36,43 48,40 Q60,37 72,40 Q84,43 91,40 L91,55 L0,55 Z"
        fill="#0A3D62"
        opacity="0.3"
      />
      <path
        d="M0,45 Q15,42 30,45 Q45,48 60,45 Q75,42 91,45 L91,55 L0,55 Z"
        fill="#082D4A"
        opacity="0.3"
      />
      {/* Foam line */}
      <path
        d="M0,35 Q10,32 20,35 Q30,38 40,35 Q50,32 60,35 Q70,38 80,35 Q90,32 91,35"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="0.15"
        opacity="0.2"
      />
      <text
        x="10"
        y="16"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#E0F0FF"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="22"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#88BBDD"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="28"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#6699BB"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="33"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#6699BB"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="wave-tide-bg-b" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0A3D62" />
          <stop offset="100%" stopColor="#1A5580" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#wave-tide-bg-b)" />
      {/* Subtle tide lines */}
      <path
        d="M0,44 Q15,41 30,44 Q45,47 60,44 Q75,41 91,44"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="0.1"
        opacity="0.1"
      />
      <path
        d="M0,48 Q15,45 30,48 Q45,51 60,48 Q75,45 91,48"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="0.08"
        opacity="0.08"
      />
      <text
        x="45.5"
        y="12"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#E0F0FF"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="16"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#88BBDD"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="20" x2="71" y2="20" stroke="#88BBDD" strokeWidth="0.08" opacity="0.2" />
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#88BBDD"
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
        fill="#88BBDD"
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
        fill="#88BBDD"
      >
        {data.website}
      </text>
      <line x1="20" y1="38" x2="71" y2="38" stroke="#88BBDD" strokeWidth="0.08" opacity="0.2" />
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#6699BB"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 2. RIPPLE (波紋) — Concentric ripple rings, drop in water
// Concentric circles expanding outward, calm pond
// ============================================================
const rippleTemplate: TemplateDefinition = {
  id: 'wave-ripple',
  name: 'RIPPLE',
  nameJa: '波紋',
  category: 'wave',
  designer: 'Ripple Artist',
  description: '波紋の同心円。一滴の水が広がる静かな衝撃。',
  accentColor: '#1ABC9C',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F0F8F6" />
      {/* Concentric ripple circles */}
      <circle cx="70" cy="18" r="3" fill="none" stroke="#1ABC9C" strokeWidth="0.15" opacity="0.4" />
      <circle cx="70" cy="18" r="6" fill="none" stroke="#1ABC9C" strokeWidth="0.12" opacity="0.3" />
      <circle cx="70" cy="18" r="9" fill="none" stroke="#1ABC9C" strokeWidth="0.1" opacity="0.2" />
      <circle cx="70" cy="18" r="12" fill="none" stroke="#1ABC9C" strokeWidth="0.08" opacity="0.15" />
      <circle cx="70" cy="18" r="15" fill="none" stroke="#1ABC9C" strokeWidth="0.06" opacity="0.1" />
      <circle cx="70" cy="18" r="18" fill="none" stroke="#1ABC9C" strokeWidth="0.05" opacity="0.07" />
      <circle cx="70" cy="18" r="21" fill="none" stroke="#1ABC9C" strokeWidth="0.04" opacity="0.05" />
      {/* Center drop dot */}
      <circle cx="70" cy="18" r="0.5" fill="#1ABC9C" opacity="0.6" />
      <text
        x="10"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#0A5A4A"
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
        fill="#1ABC9C"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="35"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#4A8A7A"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="41"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#4A8A7A"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F0F8F6" />
      {/* Background ripples */}
      <circle cx="20" cy="42" r="4" fill="none" stroke="#1ABC9C" strokeWidth="0.08" opacity="0.1" />
      <circle cx="20" cy="42" r="8" fill="none" stroke="#1ABC9C" strokeWidth="0.06" opacity="0.07" />
      <circle cx="20" cy="42" r="12" fill="none" stroke="#1ABC9C" strokeWidth="0.04" opacity="0.05" />
      <text
        x="45.5"
        y="13"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#0A5A4A"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="17"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#1ABC9C"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="21" x2="71" y2="21" stroke="#1ABC9C" strokeWidth="0.08" opacity="0.2" />
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#2A8A7A"
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
        fill="#2A8A7A"
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
        fill="#2A8A7A"
      >
        {data.website}
      </text>
      <line x1="20" y1="39" x2="71" y2="39" stroke="#1ABC9C" strokeWidth="0.08" opacity="0.2" />
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#4A8A7A"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 3. CURRENT (流) — Ocean current, flowing water streams
// Smooth parallel curves, laminar flow lines
// ============================================================
const currentTemplate: TemplateDefinition = {
  id: 'wave-current',
  name: 'CURRENT',
  nameJa: '流',
  category: 'wave',
  designer: 'Flow Designer',
  description: '海流の道筋。目に見えない力が導く水の旅路。',
  accentColor: '#0A3D62',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F0F4F8" />
      {/* Flowing current lines */}
      <path d="M0,10 Q20,8 40,12 Q60,16 80,10 Q90,8 91,9" fill="none" stroke="#0A3D62" strokeWidth="0.15" opacity="0.12" />
      <path d="M0,14 Q25,12 45,16 Q65,20 85,14 Q90,12 91,13" fill="none" stroke="#0A3D62" strokeWidth="0.15" opacity="0.1" />
      <path d="M0,18 Q20,16 40,20 Q55,23 75,18 Q88,15 91,17" fill="none" stroke="#0A3D62" strokeWidth="0.12" opacity="0.08" />
      <path d="M0,40 Q15,38 35,42 Q55,46 75,40 Q88,37 91,39" fill="none" stroke="#0A3D62" strokeWidth="0.15" opacity="0.12" />
      <path d="M0,44 Q20,42 40,46 Q60,50 80,44 Q90,42 91,43" fill="none" stroke="#0A3D62" strokeWidth="0.15" opacity="0.1" />
      <path d="M0,48 Q25,46 45,50 Q65,53 85,48 Q90,46 91,47" fill="none" stroke="#0A3D62" strokeWidth="0.12" opacity="0.08" />
      <text
        x="10"
        y="27"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#0A3D62"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="33"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#2A6A90"
      >
        {data.nameEn}
      </text>
      <text
        x="80"
        y="27"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#4A8AAA"
      >
        {data.titleJa}
      </text>
      <text
        x="80"
        y="33"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#4A8AAA"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F0F4F8" />
      {/* Subtle current lines */}
      <path d="M0,5 Q20,3 40,7 Q60,11 80,5 Q90,3 91,4" fill="none" stroke="#0A3D62" strokeWidth="0.1" opacity="0.06" />
      <path d="M0,50 Q20,48 40,52 Q60,54 80,50 Q90,48 91,49" fill="none" stroke="#0A3D62" strokeWidth="0.1" opacity="0.06" />
      <text
        x="45.5"
        y="12"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#0A3D62"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="16"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#2A6A90"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="20" x2="71" y2="20" stroke="#0A3D62" strokeWidth="0.08" opacity="0.15" />
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#2A6A90"
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
        fill="#2A6A90"
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
        fill="#2A6A90"
      >
        {data.website}
      </text>
      <line x1="20" y1="38" x2="71" y2="38" stroke="#0A3D62" strokeWidth="0.08" opacity="0.15" />
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#4A8AAA"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 4. TSUNAMI (津) — Powerful wave, dramatic curve
// Single dramatic great wave, Hokusai-inspired curve
// ============================================================
const tsunamiTemplate: TemplateDefinition = {
  id: 'wave-tsunami',
  name: 'TSUNAMI',
  nameJa: '津',
  category: 'wave',
  designer: 'Wave Master',
  description: '大波の迫力。力強くうねる波頭が白く砕ける。',
  accentColor: '#0A3D62',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0A3D62" />
      {/* Great wave curve */}
      <path
        d="M-5,40 Q10,15 25,18 Q35,20 40,12 Q45,5 55,8 Q60,10 62,7 Q64,5 66,6 L66,8 Q63,10 60,14 Q55,20 45,22 Q35,24 25,35 Q15,46 0,48 Z"
        fill="#1A6090"
        opacity="0.5"
      />
      {/* Foam crest */}
      <path
        d="M40,12 Q42,10 44,11 Q46,8 48,10 Q50,7 52,9 Q54,6 56,8 Q58,6 60,8 Q62,7 64,6"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="0.2"
        opacity="0.3"
      />
      {/* Spray dots */}
      <circle cx="50" cy="10" r="0.3" fill="#FFFFFF" opacity="0.2" />
      <circle cx="55" cy="7" r="0.2" fill="#FFFFFF" opacity="0.15" />
      <circle cx="45" cy="9" r="0.25" fill="#FFFFFF" opacity="0.2" />
      <circle cx="60" cy="9" r="0.15" fill="#FFFFFF" opacity="0.15" />
      <text
        x="10"
        y="30"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#E0F0FF"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#88BBDD"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#6699BB"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="49"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#6699BB"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0A3D62" />
      {/* Subtle wave at bottom */}
      <path
        d="M0,48 Q15,44 30,48 Q45,52 60,48 Q75,44 91,48 L91,55 L0,55 Z"
        fill="#082D4A"
        opacity="0.3"
      />
      <text
        x="45.5"
        y="12"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#E0F0FF"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="16"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#88BBDD"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="20" x2="71" y2="20" stroke="#88BBDD" strokeWidth="0.08" opacity="0.2" />
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#88BBDD"
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
        fill="#88BBDD"
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
        fill="#88BBDD"
      >
        {data.website}
      </text>
      <line x1="20" y1="38" x2="71" y2="38" stroke="#88BBDD" strokeWidth="0.08" opacity="0.2" />
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#6699BB"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 5. SINE (弦) — Mathematical sine wave, precise oscillation
// Clean sine wave curve, geometric precision, scientific
// ============================================================
const sineTemplate: TemplateDefinition = {
  id: 'wave-sine',
  name: 'SINE',
  nameJa: '弦',
  category: 'wave',
  designer: 'Math Artist',
  description: '正弦波の数学美。規則正しい振動が描く永遠の曲線。',
  accentColor: '#1ABC9C',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FAFCFC" />
      {/* Grid lines */}
      <line x1="0" y1="27.5" x2="91" y2="27.5" stroke="#DDDDDD" strokeWidth="0.08" />
      {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90].map((x, i) => (
        <line key={`wave-sine-gv-${i}`} x1={x} y1="15" x2={x} y2="40" stroke="#EEEEEE" strokeWidth="0.05" />
      ))}
      {/* Sine wave */}
      <path
        d="M0,27.5 C5,20 10,15 15,15 C20,15 25,20 30,27.5 C35,35 40,40 45,40 C50,40 55,35 60,27.5 C65,20 70,15 75,15 C80,15 85,20 91,27.5"
        fill="none"
        stroke="#1ABC9C"
        strokeWidth="0.3"
        opacity="0.5"
      />
      {/* Second sine wave offset */}
      <path
        d="M0,27.5 C5,22 10,18 15,18 C20,18 25,22 30,27.5 C35,33 40,37 45,37 C50,37 55,33 60,27.5 C65,22 70,18 75,18 C80,18 85,22 91,27.5"
        fill="none"
        stroke="#1ABC9C"
        strokeWidth="0.15"
        opacity="0.25"
      />
      {/* Axis labels */}
      <text x="2" y="15" fontFamily="'Space Grotesk', monospace" fontSize="0.8" fill="#BBBBBB">+A</text>
      <text x="2" y="41" fontFamily="'Space Grotesk', monospace" fontSize="0.8" fill="#BBBBBB">-A</text>
      <text
        x="45.5"
        y="10"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5"
        letterSpacing="0.5"
        fill="#0A5A4A"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="48"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#1ABC9C"
      >
        {data.nameEn}
      </text>
      <text
        x="80"
        y="48"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#6AAA9A"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FAFCFC" />
      {/* Background sine */}
      <path
        d="M0,27.5 C5,20 10,15 15,15 C20,15 25,20 30,27.5 C35,35 40,40 45,40 C50,40 55,35 60,27.5 C65,20 70,15 75,15 C80,15 85,20 91,27.5"
        fill="none"
        stroke="#1ABC9C"
        strokeWidth="0.1"
        opacity="0.1"
      />
      <text
        x="45.5"
        y="12"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#0A5A4A"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="16"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#1ABC9C"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="20" x2="71" y2="20" stroke="#1ABC9C" strokeWidth="0.08" opacity="0.2" />
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#2A8A7A"
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
        fill="#2A8A7A"
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
        fill="#2A8A7A"
      >
        {data.website}
      </text>
      <line x1="20" y1="38" x2="71" y2="38" stroke="#1ABC9C" strokeWidth="0.08" opacity="0.2" />
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#4A8A7A"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 6. SWELL (膨) — Open ocean swell, long wavelength
// Gentle long-period waves, deep ocean colors
// ============================================================
const swellTemplate: TemplateDefinition = {
  id: 'wave-swell',
  name: 'SWELL',
  nameJa: '膨',
  category: 'wave',
  designer: 'Swell Chaser',
  description: '外洋のうねり。長い波長が運ぶ大海原のエネルギー。',
  accentColor: '#1A5580',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#E8F0F4" />
      {/* Long period swell curves */}
      <path
        d="M0,32 Q22.75,22 45.5,32 Q68.25,42 91,32"
        fill="none"
        stroke="#1A5580"
        strokeWidth="0.2"
        opacity="0.15"
      />
      <path
        d="M0,36 Q22.75,26 45.5,36 Q68.25,46 91,36"
        fill="none"
        stroke="#1A5580"
        strokeWidth="0.18"
        opacity="0.12"
      />
      <path
        d="M0,40 Q22.75,30 45.5,40 Q68.25,50 91,40"
        fill="none"
        stroke="#1A5580"
        strokeWidth="0.15"
        opacity="0.1"
      />
      <path
        d="M0,44 Q22.75,34 45.5,44 Q68.25,54 91,44"
        fill="none"
        stroke="#1A5580"
        strokeWidth="0.12"
        opacity="0.08"
      />
      <text
        x="12"
        y="18"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#0A3D62"
      >
        {data.nameJa}
      </text>
      <text
        x="12"
        y="24"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#1A5580"
      >
        {data.nameEn}
      </text>
      <text
        x="12"
        y="30"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#4A7A9A"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#E8F0F4" />
      {/* Subtle swell */}
      <path d="M0,45 Q22.75,38 45.5,45 Q68.25,52 91,45" fill="none" stroke="#1A5580" strokeWidth="0.1" opacity="0.08" />
      <text
        x="45.5"
        y="12"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#0A3D62"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="16"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#1A5580"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="20" x2="71" y2="20" stroke="#1A5580" strokeWidth="0.08" opacity="0.15" />
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#2A6A88"
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
        fill="#2A6A88"
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
        fill="#2A6A88"
      >
        {data.website}
      </text>
      <line x1="20" y1="38" x2="71" y2="38" stroke="#1A5580" strokeWidth="0.08" opacity="0.15" />
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#4A7A9A"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 7. CASCADE (滝) — Waterfall, vertical flow downward
// Vertical flowing lines, cascade effect, falling water
// ============================================================
const cascadeTemplate: TemplateDefinition = {
  id: 'wave-cascade',
  name: 'CASCADE',
  nameJa: '滝',
  category: 'wave',
  designer: 'Cascade Designer',
  description: '滝の垂直美。落下する水が白い飛沫を散らす。',
  accentColor: '#1ABC9C',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F0F8F6" />
      {/* Vertical cascade lines on right side */}
      <path d="M72,0 Q73,15 71,30 Q70,40 72,55" fill="none" stroke="#1ABC9C" strokeWidth="0.15" opacity="0.15" />
      <path d="M75,0 Q74,12 76,25 Q77,38 75,55" fill="none" stroke="#1ABC9C" strokeWidth="0.12" opacity="0.12" />
      <path d="M78,0 Q79,10 77,22 Q76,35 78,55" fill="none" stroke="#1ABC9C" strokeWidth="0.15" opacity="0.15" />
      <path d="M81,0 Q80,14 82,28 Q83,42 81,55" fill="none" stroke="#1ABC9C" strokeWidth="0.12" opacity="0.12" />
      <path d="M84,0 Q85,12 83,25 Q82,38 84,55" fill="none" stroke="#1ABC9C" strokeWidth="0.1" opacity="0.1" />
      {/* Mist at bottom */}
      <ellipse cx="78" cy="50" rx="10" ry="3" fill="#1ABC9C" opacity="0.06" />
      {/* Splash drops */}
      <circle cx="70" cy="48" r="0.3" fill="#1ABC9C" opacity="0.15" />
      <circle cx="82" cy="47" r="0.2" fill="#1ABC9C" opacity="0.1" />
      <circle cx="75" cy="49" r="0.25" fill="#1ABC9C" opacity="0.12" />
      <text
        x="10"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#0A5A4A"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="26"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#1ABC9C"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="34"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#4A8A7A"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="40"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#4A8A7A"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F0F8F6" />
      {/* Subtle cascade lines on left */}
      <path d="M8,0 Q7,18 9,36 Q10,48 8,55" fill="none" stroke="#1ABC9C" strokeWidth="0.08" opacity="0.08" />
      <path d="M11,0 Q12,16 10,32 Q9,44 11,55" fill="none" stroke="#1ABC9C" strokeWidth="0.08" opacity="0.08" />
      <text
        x="45.5"
        y="12"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#0A5A4A"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="16"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#1ABC9C"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="20" x2="71" y2="20" stroke="#1ABC9C" strokeWidth="0.08" opacity="0.2" />
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#2A8A7A"
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
        fill="#2A8A7A"
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
        fill="#2A8A7A"
      >
        {data.website}
      </text>
      <line x1="20" y1="38" x2="71" y2="38" stroke="#1ABC9C" strokeWidth="0.08" opacity="0.2" />
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#4A8A7A"
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
        fill="#4A8A7A"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 8. SURF (浪) — Beach surf, breaking waves, foam
// Dynamic wave breaking, white foam, beach colors
// ============================================================
const surfTemplate: TemplateDefinition = {
  id: 'wave-surf',
  name: 'SURF',
  nameJa: '浪',
  category: 'wave',
  designer: 'Surf Designer',
  description: '磯の白波。波が砕ける瞬間の躍動感。',
  accentColor: '#0A3D62',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="wave-surf-sand" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2A6A90" />
          <stop offset="50%" stopColor="#C2B280" />
          <stop offset="100%" stopColor="#D4C494" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#wave-surf-sand)" />
      {/* Breaking wave with foam */}
      <path
        d="M0,25 Q10,20 20,22 Q30,24 40,20 Q50,16 60,18 Q70,20 80,17 Q85,16 91,18 L91,30 Q80,28 70,30 Q60,32 50,28 Q40,24 30,27 Q20,30 10,28 Q5,27 0,28 Z"
        fill="#1A5580"
        opacity="0.5"
      />
      {/* Foam line */}
      <path
        d="M0,25 Q10,20 20,22 Q30,24 40,20 Q50,16 60,18 Q70,20 80,17 Q85,16 91,18"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="0.4"
        opacity="0.4"
      />
      {/* Foam scatter */}
      <circle cx="25" cy="23" r="0.4" fill="#FFFFFF" opacity="0.3" />
      <circle cx="45" cy="19" r="0.3" fill="#FFFFFF" opacity="0.25" />
      <circle cx="65" cy="19" r="0.35" fill="#FFFFFF" opacity="0.3" />
      <text
        x="10"
        y="10"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="5"
        letterSpacing="0.5"
        fill="#E0F0FF"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="15"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#AAD0E8"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="38"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#5A4A2A"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#5A4A2A"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#C2B280" />
      {/* Gentle wash at top */}
      <path
        d="M0,0 L91,0 L91,10 Q80,8 70,10 Q60,12 50,9 Q40,6 30,9 Q20,12 10,9 Q5,8 0,10 Z"
        fill="#2A6A90"
        opacity="0.2"
      />
      <text
        x="45.5"
        y="18"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#3A2A10"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5A4A2A"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="26" x2="71" y2="26" stroke="#8A7A5A" strokeWidth="0.08" opacity="0.3" />
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5A4A2A"
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
        fill="#5A4A2A"
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
        fill="#5A4A2A"
      >
        {data.website}
      </text>
      <line x1="20" y1="44" x2="71" y2="44" stroke="#8A7A5A" strokeWidth="0.08" opacity="0.3" />
      <text
        x="45.5"
        y="49"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#6A5A3A"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 9. EDDY (渦) — Whirlpool, spiral vortex
// Spiral curves, vortex center, swirling motion
// ============================================================
const eddyTemplate: TemplateDefinition = {
  id: 'wave-eddy',
  name: 'EDDY',
  nameJa: '渦',
  category: 'wave',
  designer: 'Vortex Designer',
  description: '渦の引力。螺旋が吸い込む深淵の美しさ。',
  accentColor: '#0A3D62',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F0F4F8" />
      {/* Spiral vortex */}
      <path
        d="M70,30 C70,26 66,24 63,24 C58,24 55,28 55,32 C55,38 60,42 66,42 C74,42 78,36 78,30 C78,22 72,17 65,17 C55,17 50,24 50,32 C50,43 58,48 68,48"
        fill="none"
        stroke="#0A3D62"
        strokeWidth="0.15"
        opacity="0.15"
      />
      <path
        d="M70,30 C70,28 68,26 66,26 C63,26 61,28 61,31 C61,35 64,38 68,38 C73,38 76,34 76,30 C76,24 71,20 66,20 C59,20 55,25 55,32 C55,40 60,45 68,45"
        fill="none"
        stroke="#0A3D62"
        strokeWidth="0.1"
        opacity="0.1"
      />
      {/* Center dot */}
      <circle cx="67" cy="30" r="0.5" fill="#0A3D62" opacity="0.2" />
      <text
        x="10"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#0A3D62"
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
        fill="#2A6A90"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#4A8AAA"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#4A8AAA"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F0F4F8" />
      {/* Faint spiral background */}
      <path
        d="M25,27 C25,24 22,22 20,22 C16,22 14,25 14,28 C14,33 18,36 22,36 C28,36 31,32 31,27 C31,21 26,17 21,17 C14,17 10,22 10,28 C10,36 16,41 24,41"
        fill="none"
        stroke="#0A3D62"
        strokeWidth="0.06"
        opacity="0.06"
      />
      <text
        x="45.5"
        y="12"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#0A3D62"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="16"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#2A6A90"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="20" x2="71" y2="20" stroke="#0A3D62" strokeWidth="0.08" opacity="0.15" />
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#2A6A90"
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
        fill="#2A6A90"
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
        fill="#2A6A90"
      >
        {data.website}
      </text>
      <line x1="20" y1="38" x2="71" y2="38" stroke="#0A3D62" strokeWidth="0.08" opacity="0.15" />
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#4A8AAA"
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
        fill="#4A8AAA"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 10. CALM (凪) — Dead calm, mirror water, absolute stillness
// Perfectly still, horizon line, reflection concept
// ============================================================
const calmTemplate: TemplateDefinition = {
  id: 'wave-calm',
  name: 'CALM',
  nameJa: '凪',
  category: 'wave',
  designer: 'Calm Designer',
  description: '凪の静寂。鏡のように澄んだ水面に映る世界。',
  accentColor: '#0A3D62',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="wave-calm-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D8E8F0" />
          <stop offset="45%" stopColor="#E8F0F4" />
          <stop offset="55%" stopColor="#D0E0E8" />
          <stop offset="100%" stopColor="#C0D4E0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#wave-calm-sky)" />
      {/* Perfect horizon line */}
      <line x1="0" y1="27.5" x2="91" y2="27.5" stroke="#0A3D62" strokeWidth="0.12" opacity="0.2" />
      {/* Name above horizon */}
      <text
        x="45.5"
        y="20"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5"
        letterSpacing="0.8"
        fill="#0A3D62"
      >
        {data.nameJa}
      </text>
      {/* Reflection below horizon (flipped, faded) */}
      <text
        x="45.5"
        y="37"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5"
        letterSpacing="0.8"
        fill="#0A3D62"
        opacity="0.08"
        transform="translate(0,0) scale(1, -1) translate(0, -64)"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        letterSpacing="0.4"
        fill="#4A7A9A"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#6A8AA0"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="48"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#6A8AA0"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="wave-calm-sky-b" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D8E8F0" />
          <stop offset="45%" stopColor="#E8F0F4" />
          <stop offset="55%" stopColor="#D0E0E8" />
          <stop offset="100%" stopColor="#C0D4E0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#wave-calm-sky-b)" />
      {/* Horizon */}
      <line x1="0" y1="27.5" x2="91" y2="27.5" stroke="#0A3D62" strokeWidth="0.08" opacity="0.15" />
      <text
        x="45.5"
        y="12"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#0A3D62"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="16"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        letterSpacing="0.3"
        fill="#4A7A9A"
      >
        {data.companyEn}
      </text>
      <text
        x="45.5"
        y="23"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#4A7A9A"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="33"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#6A8AA0"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="37"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#6A8AA0"
      >
        {data.website}
      </text>
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#8AAABB"
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
        fill="#8AAABB"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

export const waveTemplates: TemplateDefinition[] = [
  tideTemplate,
  rippleTemplate,
  currentTemplate,
  tsunamiTemplate,
  sineTemplate,
  swellTemplate,
  cascadeTemplate,
  surfTemplate,
  eddyTemplate,
  calmTemplate,
];
