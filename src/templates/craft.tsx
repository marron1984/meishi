import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. POTTERY (陶) — Handmade ceramic aesthetics
// Warm terracotta tones, organic shapes, kiln-fired texture
// ============================================================
const potteryTemplate: TemplateDefinition = {
  id: 'craft-pottery',
  name: 'POTTERY',
  nameJa: '陶',
  category: 'craft',
  designer: 'Ceramic Artisan',
  description: '手びねりの温もり。土と炎が生み出す素朴な美しさ。',
  accentColor: '#CC6644',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <pattern id="craft-pottery-grain" width="2" height="2" patternUnits="userSpaceOnUse">
          <rect width="2" height="2" fill="#F5E6D3" />
          <circle cx="0.5" cy="0.5" r="0.15" fill="#E8D5BF" opacity="0.6" />
          <circle cx="1.5" cy="1.2" r="0.1" fill="#D4C0A8" opacity="0.4" />
          <circle cx="0.8" cy="1.8" r="0.12" fill="#E0CCBA" opacity="0.5" />
        </pattern>
        <filter id="craft-pottery-rough">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#craft-pottery-grain)" />
      {/* Kiln mark circle */}
      <circle cx="76" cy="12" r="6" fill="none" stroke="#CC6644" strokeWidth="0.3" opacity="0.4" />
      <circle cx="76" cy="12" r="4.5" fill="none" stroke="#CC6644" strokeWidth="0.15" opacity="0.25" />
      {/* Organic border line */}
      <path
        d="M8,8 Q20,7 45.5,7.5 Q70,8 83,8"
        fill="none"
        stroke="#CC6644"
        strokeWidth="0.25"
        opacity="0.5"
      />
      <path
        d="M8,47 Q20,47.5 45.5,47 Q70,46.5 83,47"
        fill="none"
        stroke="#CC6644"
        strokeWidth="0.25"
        opacity="0.5"
      />
      <text
        x="10"
        y="24"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="0.8"
        fill="#5C3A28"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="30"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.3"
        fill="#8B6F5E"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#A08070"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#A08070"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <pattern id="craft-pottery-grain-b" width="2" height="2" patternUnits="userSpaceOnUse">
          <rect width="2" height="2" fill="#F5E6D3" />
          <circle cx="0.5" cy="0.5" r="0.15" fill="#E8D5BF" opacity="0.6" />
          <circle cx="1.5" cy="1.2" r="0.1" fill="#D4C0A8" opacity="0.4" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#craft-pottery-grain-b)" />
      {/* Large kiln stamp */}
      <circle cx="45.5" cy="16" r="8" fill="none" stroke="#CC6644" strokeWidth="0.2" opacity="0.2" />
      <text
        x="45.5"
        y="12"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        fill="#5C3A28"
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
        fill="#8B6F5E"
      >
        {data.companyEn}
      </text>
      <path
        d="M20,21 Q45.5,20 71,21"
        fill="none"
        stroke="#CC6644"
        strokeWidth="0.2"
        opacity="0.4"
      />
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8B6F5E"
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
        fill="#8B6F5E"
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
        fill="#8B6F5E"
      >
        {data.website}
      </text>
      <text
        x="45.5"
        y="42"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#A08070"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="45.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#A08070"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 2. LEATHER (革) — Rich leather craft, stitched edges
// Deep brown tones, saddle-stitching detail, tooled borders
// ============================================================
const leatherTemplate: TemplateDefinition = {
  id: 'craft-leather',
  name: 'LEATHER',
  nameJa: '革',
  category: 'craft',
  designer: 'Leather Craftsman',
  description: '革細工の重厚さ。手縫いのステッチが生む味わい。',
  accentColor: '#8B5E3C',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#8B5E3C" />
      <rect x="0.5" y="0.5" width="90" height="54" fill="none" rx="0.5" ry="0.5" stroke="#A67B5B" strokeWidth="0.3" />
      {/* Stitching pattern - top */}
      {[0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87].map((x, i) => (
        <line key={`craft-leather-st-${i}`} x1={x + 1.5} y1="2" x2={x + 3} y2="2" stroke="#C4956A" strokeWidth="0.15" opacity="0.5" />
      ))}
      {/* Stitching pattern - bottom */}
      {[0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87].map((x, i) => (
        <line key={`craft-leather-sb-${i}`} x1={x + 1.5} y1="53" x2={x + 3} y2="53" stroke="#C4956A" strokeWidth="0.15" opacity="0.5" />
      ))}
      {/* Tooled frame inner */}
      <rect x="5" y="5" width="81" height="45" fill="none" rx="0.3" stroke="#6B4226" strokeWidth="0.15" opacity="0.4" />
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="1"
        fill="#F5E6D3"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.4"
        fill="#D4B896"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <line x1="30" y1="32" x2="61" y2="32" stroke="#D4B896" strokeWidth="0.15" opacity="0.5" />
      <text
        x="45.5"
        y="37"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#C4956A"
      >
        {data.titleJa}
      </text>
      <text
        x="45.5"
        y="42"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#C4956A"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#8B5E3C" />
      <rect x="0.5" y="0.5" width="90" height="54" fill="none" rx="0.5" ry="0.5" stroke="#A67B5B" strokeWidth="0.3" />
      {/* Stitching top */}
      {[0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87].map((x, i) => (
        <line key={`craft-leather-bt-${i}`} x1={x + 1.5} y1="2" x2={x + 3} y2="2" stroke="#C4956A" strokeWidth="0.15" opacity="0.5" />
      ))}
      {/* Stitching bottom */}
      {[0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87].map((x, i) => (
        <line key={`craft-leather-bb-${i}`} x1={x + 1.5} y1="53" x2={x + 3} y2="53" stroke="#C4956A" strokeWidth="0.15" opacity="0.5" />
      ))}
      <text
        x="45.5"
        y="13"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        letterSpacing="0.5"
        fill="#F5E6D3"
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
        letterSpacing="0.3"
        fill="#D4B896"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="21" x2="71" y2="21" stroke="#6B4226" strokeWidth="0.15" opacity="0.5" />
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#D4B896"
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
        fill="#D4B896"
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
        fill="#D4B896"
      >
        {data.website}
      </text>
      <line x1="20" y1="39" x2="71" y2="39" stroke="#6B4226" strokeWidth="0.15" opacity="0.5" />
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#C4956A"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="47.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#C4956A"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 3. PAPER (紙) — Washi paper craft, torn edges, layered
// Cream and natural tones, fibrous texture, layered rectangles
// ============================================================
const paperTemplate: TemplateDefinition = {
  id: 'craft-paper',
  name: 'PAPER',
  nameJa: '紙',
  category: 'craft',
  designer: 'Washi Master',
  description: '和紙の繊維が光を透かす。重なりが生む奥行き。',
  accentColor: '#B8A88A',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="craft-paper-fiber">
          <feTurbulence type="fractalNoise" baseFrequency="1.5" numOctaves="4" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="multiply" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="#F7F2E8" />
      {/* Layered paper sheets */}
      <rect x="3" y="3" width="85" height="49" fill="#EDE5D5" rx="0.3" opacity="0.5" />
      <rect x="5" y="5" width="81" height="45" fill="#F2EBD9" rx="0.2" opacity="0.7" />
      {/* Torn edge effect top */}
      <path
        d="M5,5 L8,5.3 L12,4.8 L18,5.5 L24,5 L30,5.4 L36,4.9 L42,5.2 L48,5 L54,5.6 L60,5.1 L66,5.3 L72,4.8 L78,5.4 L84,5 L86,5.2"
        fill="none"
        stroke="#D4C4A8"
        strokeWidth="0.2"
        opacity="0.6"
      />
      {/* Fibers visible */}
      <line x1="15" y1="10" x2="22" y2="10.5" stroke="#D4C4A8" strokeWidth="0.08" opacity="0.3" />
      <line x1="40" y1="15" x2="48" y2="14.8" stroke="#D4C4A8" strokeWidth="0.08" opacity="0.3" />
      <line x1="60" y1="40" x2="70" y2="40.3" stroke="#D4C4A8" strokeWidth="0.08" opacity="0.3" />
      <text
        x="12"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.6"
        fill="#5C4A32"
      >
        {data.nameJa}
      </text>
      <text
        x="12"
        y="28"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.2"
        fill="#8B7B60"
      >
        {data.nameEn}
      </text>
      <text
        x="12"
        y="35"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#A0906E"
      >
        {data.titleJa}
      </text>
      <text
        x="12"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#A0906E"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F7F2E8" />
      <rect x="3" y="3" width="85" height="49" fill="#EDE5D5" rx="0.3" opacity="0.5" />
      <rect x="5" y="5" width="81" height="45" fill="#F2EBD9" rx="0.2" opacity="0.7" />
      {/* Decorative washi fiber lines */}
      <line x1="10" y1="20" x2="18" y2="20.2" stroke="#D4C4A8" strokeWidth="0.08" opacity="0.3" />
      <line x1="55" y1="32" x2="65" y2="31.8" stroke="#D4C4A8" strokeWidth="0.08" opacity="0.3" />
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        letterSpacing="0.4"
        fill="#5C4A32"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="18"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8B7B60"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="22" x2="71" y2="22" stroke="#C4B494" strokeWidth="0.15" opacity="0.4" />
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8B7B60"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8B7B60"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8B7B60"
      >
        {data.website}
      </text>
      <line x1="20" y1="40" x2="71" y2="40" stroke="#C4B494" strokeWidth="0.15" opacity="0.4" />
      <text
        x="45.5"
        y="45"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#A0906E"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 4. IRON (鉄) — Blacksmith forged metal aesthetic
// Dark iron tones, hammered texture, forge marks
// ============================================================
const ironTemplate: TemplateDefinition = {
  id: 'craft-iron',
  name: 'IRON',
  nameJa: '鉄',
  category: 'craft',
  designer: 'Iron Forger',
  description: '鍛冶場の火花。鉄を打つ槌音が聞こえる重厚さ。',
  accentColor: '#4A4A4A',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="craft-iron-metal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3C3C3C" />
          <stop offset="30%" stopColor="#4A4A4A" />
          <stop offset="60%" stopColor="#555555" />
          <stop offset="100%" stopColor="#3A3A3A" />
        </linearGradient>
        <pattern id="craft-iron-hammered" width="3" height="3" patternUnits="userSpaceOnUse">
          <rect width="3" height="3" fill="transparent" />
          <circle cx="1.5" cy="1.5" r="0.8" fill="none" stroke="#5A5A5A" strokeWidth="0.05" opacity="0.3" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#craft-iron-metal)" />
      <rect width="91" height="55" fill="url(#craft-iron-hammered)" />
      {/* Forge mark / anvil symbol */}
      <path
        d="M75,8 L79,8 L80,10 L74,10 Z"
        fill="none"
        stroke="#777777"
        strokeWidth="0.2"
        opacity="0.4"
      />
      <line x1="76.5" y1="10" x2="76.5" y2="13" stroke="#777777" strokeWidth="0.2" opacity="0.4" />
      {/* Rivets at corners */}
      <circle cx="5" cy="5" r="0.6" fill="#555555" stroke="#666666" strokeWidth="0.1" />
      <circle cx="86" cy="5" r="0.6" fill="#555555" stroke="#666666" strokeWidth="0.1" />
      <circle cx="5" cy="50" r="0.6" fill="#555555" stroke="#666666" strokeWidth="0.1" />
      <circle cx="86" cy="50" r="0.6" fill="#555555" stroke="#666666" strokeWidth="0.1" />
      <text
        x="10"
        y="24"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="6"
        letterSpacing="0.5"
        fill="#D0D0D0"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="30"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.3"
        fill="#999999"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <line x1="10" y1="34" x2="50" y2="34" stroke="#666666" strokeWidth="0.15" />
      <text
        x="10"
        y="39"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#888888"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="craft-iron-metal-b" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3C3C3C" />
          <stop offset="50%" stopColor="#4A4A4A" />
          <stop offset="100%" stopColor="#3A3A3A" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#craft-iron-metal-b)" />
      {/* Rivets */}
      <circle cx="5" cy="5" r="0.6" fill="#555555" stroke="#666666" strokeWidth="0.1" />
      <circle cx="86" cy="5" r="0.6" fill="#555555" stroke="#666666" strokeWidth="0.1" />
      <circle cx="5" cy="50" r="0.6" fill="#555555" stroke="#666666" strokeWidth="0.1" />
      <circle cx="86" cy="50" r="0.6" fill="#555555" stroke="#666666" strokeWidth="0.1" />
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="2.2"
        letterSpacing="0.4"
        fill="#D0D0D0"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="18"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#999999"
      >
        {data.companyEn}
      </text>
      <line x1="15" y1="22" x2="76" y2="22" stroke="#666666" strokeWidth="0.15" />
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#AAAAAA"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#AAAAAA"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#AAAAAA"
      >
        {data.website}
      </text>
      <line x1="15" y1="40" x2="76" y2="40" stroke="#666666" strokeWidth="0.15" />
      <text
        x="45.5"
        y="45"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#888888"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="48.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#888888"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 5. GLASS (硝) — Blown glass, translucent, light-catching
// Clear, cool tones, transparency effects, prismatic hints
// ============================================================
const glassTemplate: TemplateDefinition = {
  id: 'craft-glass',
  name: 'GLASS',
  nameJa: '硝',
  category: 'craft',
  designer: 'Glass Blower',
  description: '吹きガラスの透明感。光が屈折する繊細な色彩。',
  accentColor: '#6BA3BE',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="craft-glass-bg" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#F0F8FF" />
          <stop offset="40%" stopColor="#E8F4F8" />
          <stop offset="100%" stopColor="#F5FAFE" />
        </linearGradient>
        <radialGradient id="craft-glass-orb" cx="0.3" cy="0.3" r="0.7">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#D4EAF5" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#A8D4E6" stopOpacity="0.1" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#craft-glass-bg)" />
      {/* Glass orb highlight */}
      <ellipse cx="72" cy="14" rx="10" ry="10" fill="url(#craft-glass-orb)" />
      <ellipse cx="72" cy="14" rx="10" ry="10" fill="none" stroke="#B0D8E8" strokeWidth="0.15" opacity="0.4" />
      {/* Prismatic light rays */}
      <line x1="65" y1="8" x2="60" y2="5" stroke="#FFD4D4" strokeWidth="0.08" opacity="0.3" />
      <line x1="66" y1="10" x2="58" y2="8" stroke="#D4FFD4" strokeWidth="0.08" opacity="0.3" />
      <line x1="65" y1="12" x2="57" y2="12" stroke="#D4D4FF" strokeWidth="0.08" opacity="0.3" />
      <text
        x="10"
        y="24"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="5.5"
        letterSpacing="0.4"
        fill="#3A6B80"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="30"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#6BA3BE"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="37"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#8BB8CC"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#8BB8CC"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="craft-glass-bg-b" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#F0F8FF" />
          <stop offset="100%" stopColor="#F5FAFE" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#craft-glass-bg-b)" />
      {/* Subtle glass circle decorations */}
      <circle cx="15" cy="42" r="5" fill="none" stroke="#B0D8E8" strokeWidth="0.1" opacity="0.2" />
      <circle cx="75" cy="12" r="7" fill="none" stroke="#B0D8E8" strokeWidth="0.1" opacity="0.15" />
      <text
        x="45.5"
        y="13"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#3A6B80"
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
        fill="#6BA3BE"
      >
        {data.companyEn}
      </text>
      <line x1="25" y1="21" x2="66" y2="21" stroke="#B0D8E8" strokeWidth="0.1" opacity="0.4" />
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#6BA3BE"
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
        fill="#6BA3BE"
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
        fill="#6BA3BE"
      >
        {data.website}
      </text>
      <line x1="25" y1="39" x2="66" y2="39" stroke="#B0D8E8" strokeWidth="0.1" opacity="0.4" />
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#8BB8CC"
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
        fill="#8BB8CC"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 6. COPPER (銅) — Patina copper, verdigris, aged metal
// Green patina on copper, oxidized beauty
// ============================================================
const copperTemplate: TemplateDefinition = {
  id: 'craft-copper',
  name: 'COPPER',
  nameJa: '銅',
  category: 'craft',
  designer: 'Coppersmith',
  description: '緑青の時間。銅が風雨に磨かれた侘びの色。',
  accentColor: '#5F8575',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="craft-copper-patina" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#B87333" />
          <stop offset="25%" stopColor="#A66828" />
          <stop offset="50%" stopColor="#5F8575" />
          <stop offset="75%" stopColor="#6B9A85" />
          <stop offset="100%" stopColor="#B87333" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#B87333" />
      {/* Patina patches */}
      <ellipse cx="70" cy="15" rx="15" ry="10" fill="#5F8575" opacity="0.4" />
      <ellipse cx="20" cy="42" rx="12" ry="8" fill="#6B9A85" opacity="0.3" />
      <ellipse cx="50" cy="30" rx="8" ry="6" fill="#5F8575" opacity="0.15" />
      {/* Oxidation spots */}
      <circle cx="30" cy="10" r="2" fill="#4A7565" opacity="0.2" />
      <circle cx="80" cy="40" r="3" fill="#4A7565" opacity="0.15" />
      <text
        x="10"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#FFF5E6"
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
        fill="#FFE8CC"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="35"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#FFDDB3"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="41"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#FFDDB3"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#B87333" />
      {/* Patina patches - back */}
      <ellipse cx="25" cy="12" rx="18" ry="8" fill="#5F8575" opacity="0.35" />
      <ellipse cx="65" cy="45" rx="14" ry="7" fill="#6B9A85" opacity="0.25" />
      <text
        x="45.5"
        y="13"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#FFF5E6"
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
        fill="#FFE8CC"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="21" x2="71" y2="21" stroke="#FFE8CC" strokeWidth="0.12" opacity="0.3" />
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#FFE8CC"
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
        fill="#FFE8CC"
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
        fill="#FFE8CC"
      >
        {data.website}
      </text>
      <line x1="20" y1="39" x2="71" y2="39" stroke="#FFE8CC" strokeWidth="0.12" opacity="0.3" />
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#FFDDB3"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="47.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#FFDDB3"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 7. BAMBOO-C (簪) — Bamboo craft, woven patterns
// Natural green-brown, woven grid texture, organic joints
// ============================================================
const bambooTemplate: TemplateDefinition = {
  id: 'craft-bamboo',
  name: 'BAMBOO-C',
  nameJa: '簪',
  category: 'craft',
  designer: 'Bamboo Weaver',
  description: '竹編みの規則と揺らぎ。自然の幾何学が宿る。',
  accentColor: '#7A8B50',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <pattern id="craft-bamboo-weave" width="4" height="4" patternUnits="userSpaceOnUse">
          <rect width="4" height="4" fill="#F0EBD8" />
          <rect x="0" y="0" width="2" height="1" fill="#D4C8A0" opacity="0.3" rx="0.1" />
          <rect x="2" y="2" width="2" height="1" fill="#D4C8A0" opacity="0.3" rx="0.1" />
          <line x1="0" y1="1.5" x2="4" y2="1.5" stroke="#C4B888" strokeWidth="0.04" opacity="0.2" />
          <line x1="0" y1="3.5" x2="4" y2="3.5" stroke="#C4B888" strokeWidth="0.04" opacity="0.2" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#craft-bamboo-weave)" />
      {/* Bamboo joint lines */}
      <line x1="5" y1="0" x2="5" y2="55" stroke="#B8A870" strokeWidth="0.15" opacity="0.2" />
      <line x1="86" y1="0" x2="86" y2="55" stroke="#B8A870" strokeWidth="0.15" opacity="0.2" />
      {/* Node marks */}
      <ellipse cx="5" cy="15" rx="0.6" ry="0.2" fill="#A89860" opacity="0.3" />
      <ellipse cx="5" cy="40" rx="0.6" ry="0.2" fill="#A89860" opacity="0.3" />
      <ellipse cx="86" cy="20" rx="0.6" ry="0.2" fill="#A89860" opacity="0.3" />
      <ellipse cx="86" cy="45" rx="0.6" ry="0.2" fill="#A89860" opacity="0.3" />
      <text
        x="12"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#4A5A2A"
      >
        {data.nameJa}
      </text>
      <text
        x="12"
        y="28"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.2"
        fill="#7A8B50"
      >
        {data.nameEn}
      </text>
      <text
        x="12"
        y="35"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#8A9B60"
      >
        {data.titleJa}
      </text>
      <text
        x="12"
        y="41"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#8A9B60"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <pattern id="craft-bamboo-weave-b" width="4" height="4" patternUnits="userSpaceOnUse">
          <rect width="4" height="4" fill="#F0EBD8" />
          <rect x="0" y="0" width="2" height="1" fill="#D4C8A0" opacity="0.3" rx="0.1" />
          <rect x="2" y="2" width="2" height="1" fill="#D4C8A0" opacity="0.3" rx="0.1" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#craft-bamboo-weave-b)" />
      <line x1="5" y1="0" x2="5" y2="55" stroke="#B8A870" strokeWidth="0.15" opacity="0.2" />
      <line x1="86" y1="0" x2="86" y2="55" stroke="#B8A870" strokeWidth="0.15" opacity="0.2" />
      <text
        x="45.5"
        y="13"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#4A5A2A"
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
        fill="#7A8B50"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="21" x2="71" y2="21" stroke="#B8A870" strokeWidth="0.12" opacity="0.3" />
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#7A8B50"
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
        fill="#7A8B50"
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
        fill="#7A8B50"
      >
        {data.website}
      </text>
      <line x1="20" y1="39" x2="71" y2="39" stroke="#B8A870" strokeWidth="0.12" opacity="0.3" />
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#8A9B60"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="47.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#8A9B60"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 8. LACQUER (漆) — Urushi lacquerware, deep gloss black/red
// Deep black with vermillion accents, high gloss feel
// ============================================================
const lacquerTemplate: TemplateDefinition = {
  id: 'craft-lacquer',
  name: 'LACQUER',
  nameJa: '漆',
  category: 'craft',
  designer: 'Urushi Master',
  description: '漆黒の深淵に浮かぶ朱。何層もの塗りが生む輝き。',
  accentColor: '#CC2222',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="craft-lacquer-gloss" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#1A1A1A" />
          <stop offset="40%" stopColor="#111111" />
          <stop offset="70%" stopColor="#1A1A1A" />
          <stop offset="100%" stopColor="#0D0D0D" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#craft-lacquer-gloss)" />
      {/* Gloss highlight */}
      <ellipse cx="60" cy="15" rx="25" ry="8" fill="#222222" opacity="0.3" />
      {/* Vermillion accent stripe */}
      <rect x="0" y="0" width="2" height="55" fill="#CC2222" />
      {/* Gold maki-e dot pattern along left */}
      <circle cx="1" cy="8" r="0.3" fill="#C4A35A" opacity="0.5" />
      <circle cx="1" cy="14" r="0.2" fill="#C4A35A" opacity="0.4" />
      <circle cx="1" cy="20" r="0.3" fill="#C4A35A" opacity="0.5" />
      <circle cx="1" cy="26" r="0.2" fill="#C4A35A" opacity="0.4" />
      <circle cx="1" cy="32" r="0.3" fill="#C4A35A" opacity="0.5" />
      <circle cx="1" cy="38" r="0.2" fill="#C4A35A" opacity="0.4" />
      <circle cx="1" cy="44" r="0.3" fill="#C4A35A" opacity="0.5" />
      <text
        x="10"
        y="23"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="1"
        fill="#CC2222"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="29"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#C4A35A"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="10"
        y="37"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#888888"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="craft-lacquer-gloss-b" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#1A1A1A" />
          <stop offset="50%" stopColor="#111111" />
          <stop offset="100%" stopColor="#0D0D0D" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#craft-lacquer-gloss-b)" />
      {/* Vermillion accent stripe */}
      <rect x="89" y="0" width="2" height="55" fill="#CC2222" />
      {/* Gold maki-e dots right edge */}
      <circle cx="90" cy="8" r="0.3" fill="#C4A35A" opacity="0.5" />
      <circle cx="90" cy="16" r="0.2" fill="#C4A35A" opacity="0.4" />
      <circle cx="90" cy="24" r="0.3" fill="#C4A35A" opacity="0.5" />
      <circle cx="90" cy="32" r="0.2" fill="#C4A35A" opacity="0.4" />
      <circle cx="90" cy="40" r="0.3" fill="#C4A35A" opacity="0.5" />
      <circle cx="90" cy="48" r="0.2" fill="#C4A35A" opacity="0.4" />
      <text
        x="80"
        y="13"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#CC2222"
      >
        {data.companyJa}
      </text>
      <text
        x="80"
        y="17"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#C4A35A"
      >
        {data.companyEn}
      </text>
      <line x1="15" y1="21" x2="80" y2="21" stroke="#CC2222" strokeWidth="0.1" opacity="0.3" />
      <text
        x="80"
        y="27"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#AAAAAA"
      >
        {data.tel}
      </text>
      <text
        x="80"
        y="31"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#AAAAAA"
      >
        {data.email}
      </text>
      <text
        x="80"
        y="35"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#AAAAAA"
      >
        {data.website}
      </text>
      <line x1="15" y1="39" x2="80" y2="39" stroke="#CC2222" strokeWidth="0.1" opacity="0.3" />
      <text
        x="80"
        y="44"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#888888"
      >
        〒{data.zipCode}
      </text>
      <text
        x="80"
        y="47.5"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#888888"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 9. INDIGO (藍) — Aizome indigo dyeing, shibori patterns
// Deep indigo blue, resist-dye patterns, fabric texture
// ============================================================
const indigoTemplate: TemplateDefinition = {
  id: 'craft-indigo',
  name: 'INDIGO',
  nameJa: '藍',
  category: 'craft',
  designer: 'Aizome Dyer',
  description: '藍染めの深い青。布に染み込む日本の伝統色。',
  accentColor: '#1B3A5C',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <pattern id="craft-indigo-shibori" width="6" height="6" patternUnits="userSpaceOnUse">
          <rect width="6" height="6" fill="#1B3A5C" />
          <circle cx="3" cy="3" r="2" fill="none" stroke="#2A5080" strokeWidth="0.3" opacity="0.4" />
          <circle cx="0" cy="0" r="1.5" fill="none" stroke="#2A5080" strokeWidth="0.2" opacity="0.3" />
          <circle cx="6" cy="0" r="1.5" fill="none" stroke="#2A5080" strokeWidth="0.2" opacity="0.3" />
          <circle cx="0" cy="6" r="1.5" fill="none" stroke="#2A5080" strokeWidth="0.2" opacity="0.3" />
          <circle cx="6" cy="6" r="1.5" fill="none" stroke="#2A5080" strokeWidth="0.2" opacity="0.3" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#craft-indigo-shibori)" />
      {/* Resist-dyed white area for text */}
      <rect x="6" y="14" width="50" height="30" fill="#1B3A5C" opacity="0.8" rx="0.5" />
      <text
        x="10"
        y="25"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.8"
        fill="#E8E0D0"
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
        fill="#A8B8CC"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="37"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#8A9AB0"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#8A9AB0"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <pattern id="craft-indigo-shibori-b" width="6" height="6" patternUnits="userSpaceOnUse">
          <rect width="6" height="6" fill="#1B3A5C" />
          <circle cx="3" cy="3" r="2" fill="none" stroke="#2A5080" strokeWidth="0.3" opacity="0.4" />
          <circle cx="0" cy="0" r="1.5" fill="none" stroke="#2A5080" strokeWidth="0.2" opacity="0.3" />
          <circle cx="6" cy="6" r="1.5" fill="none" stroke="#2A5080" strokeWidth="0.2" opacity="0.3" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#craft-indigo-shibori-b)" />
      <rect x="10" y="6" width="71" height="43" fill="#1B3A5C" opacity="0.85" rx="0.5" />
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#E8E0D0"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="18"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#A8B8CC"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="22" x2="71" y2="22" stroke="#A8B8CC" strokeWidth="0.1" opacity="0.3" />
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#A8B8CC"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#A8B8CC"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#A8B8CC"
      >
        {data.website}
      </text>
      <line x1="20" y1="40" x2="71" y2="40" stroke="#A8B8CC" strokeWidth="0.1" opacity="0.3" />
      <text
        x="45.5"
        y="45"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#8A9AB0"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 10. GOLD-C (金工) — Gold metalwork, kintsukuroi philosophy
// Rich gold on dark, kintsugi crack lines
// ============================================================
const goldCraftTemplate: TemplateDefinition = {
  id: 'craft-gold',
  name: 'GOLD-C',
  nameJa: '金工',
  category: 'craft',
  designer: 'Gold Artisan',
  description: '金継ぎの哲学。傷を黄金で繋ぐ美の再生。',
  accentColor: '#C4A35A',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1A1814" />
      {/* Kintsugi crack lines */}
      <path
        d="M0,20 L15,18 L20,22 L35,19 L40,25 L55,22 L60,20 L75,23 L91,21"
        fill="none"
        stroke="#C4A35A"
        strokeWidth="0.2"
        opacity="0.5"
      />
      <path
        d="M20,0 L22,10 L18,18 L20,22 L25,35 L22,45 L24,55"
        fill="none"
        stroke="#C4A35A"
        strokeWidth="0.15"
        opacity="0.3"
      />
      <path
        d="M70,0 L68,8 L72,15 L75,23 L73,32 L76,42 L74,55"
        fill="none"
        stroke="#C4A35A"
        strokeWidth="0.15"
        opacity="0.3"
      />
      {/* Gold dust scatter */}
      <circle cx="20" cy="22" r="0.4" fill="#C4A35A" opacity="0.6" />
      <circle cx="40" cy="25" r="0.3" fill="#C4A35A" opacity="0.5" />
      <circle cx="75" cy="23" r="0.35" fill="#C4A35A" opacity="0.5" />
      <circle cx="35" cy="19" r="0.2" fill="#C4A35A" opacity="0.4" />
      <text
        x="45.5"
        y="20"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="1.2"
        fill="#C4A35A"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.4"
        fill="#8B7A44"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#7A6B3A"
      >
        {data.titleJa}
      </text>
      <text
        x="45.5"
        y="42"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#7A6B3A"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1A1814" />
      {/* Kintsugi crack lines */}
      <path
        d="M0,35 L10,33 L25,36 L40,34 L55,37 L70,35 L85,33 L91,34"
        fill="none"
        stroke="#C4A35A"
        strokeWidth="0.2"
        opacity="0.4"
      />
      <path
        d="M45,0 L43,12 L46,20 L44,30 L47,40 L45,55"
        fill="none"
        stroke="#C4A35A"
        strokeWidth="0.12"
        opacity="0.25"
      />
      {/* Gold dust */}
      <circle cx="25" cy="36" r="0.3" fill="#C4A35A" opacity="0.5" />
      <circle cx="55" cy="37" r="0.25" fill="#C4A35A" opacity="0.4" />
      <text
        x="45.5"
        y="13"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#C4A35A"
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
        fill="#8B7A44"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="21" x2="71" y2="21" stroke="#C4A35A" strokeWidth="0.08" opacity="0.3" />
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8B7A44"
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
        fill="#8B7A44"
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
        fill="#8B7A44"
      >
        {data.website}
      </text>
      <line x1="20" y1="39" x2="71" y2="39" stroke="#C4A35A" strokeWidth="0.08" opacity="0.3" />
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#7A6B3A"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="47.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#7A6B3A"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

export const craftTemplates: TemplateDefinition[] = [
  potteryTemplate,
  leatherTemplate,
  paperTemplate,
  ironTemplate,
  glassTemplate,
  copperTemplate,
  bambooTemplate,
  lacquerTemplate,
  indigoTemplate,
  goldCraftTemplate,
];
