import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. METRO (地下) — Subway/underground inspired
// Transit map style lines and station dots
// ============================================================
const metroTemplate: TemplateDefinition = {
  id: 'urban-metro',
  name: 'METRO',
  nameJa: '地下',
  category: 'urban',
  designer: 'Urban Studio',
  description: '地下鉄路線図の美学。色分けされた線が都市を繋ぐ。',
  accentColor: '#E53935',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FAFAFA" />
      {/* Metro lines */}
      <line x1="0" y1="12" x2="35" y2="12" stroke="#E53935" strokeWidth="0.8" />
      <line x1="35" y1="12" x2="45" y2="22" stroke="#E53935" strokeWidth="0.8" />
      <line x1="45" y1="22" x2="91" y2="22" stroke="#E53935" strokeWidth="0.8" />
      <line x1="0" y1="42" x2="25" y2="42" stroke="#1E88E5" strokeWidth="0.6" />
      <line x1="25" y1="42" x2="35" y2="35" stroke="#1E88E5" strokeWidth="0.6" />
      <line x1="35" y1="35" x2="91" y2="35" stroke="#1E88E5" strokeWidth="0.6" />
      <line x1="60" y1="0" x2="60" y2="55" stroke="#FDD835" strokeWidth="0.5" strokeOpacity="0.4" />
      {/* Station dots */}
      <circle cx="35" cy="12" r="1.2" fill="#ffffff" stroke="#E53935" strokeWidth="0.5" />
      <circle cx="45" cy="22" r="1.2" fill="#ffffff" stroke="#E53935" strokeWidth="0.5" />
      <circle cx="25" cy="42" r="1" fill="#ffffff" stroke="#1E88E5" strokeWidth="0.4" />
      <circle cx="35" cy="35" r="1" fill="#ffffff" stroke="#1E88E5" strokeWidth="0.4" />
      <circle cx="60" cy="22" r="1.5" fill="#ffffff" stroke="#333333" strokeWidth="0.5" />
      <circle cx="60" cy="35" r="1.5" fill="#ffffff" stroke="#333333" strokeWidth="0.5" />
      <text
        x="48"
        y="18"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="700"
        fontSize="5"
        letterSpacing="0.3"
        fill="#1a1a1a"
      >
        {data.nameJa}
      </text>
      <text
        x="62"
        y="30"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.2"
        fill="#666666"
      >
        {data.nameEn}
      </text>
      <text
        x="62"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#999999"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FAFAFA" />
      {/* Subtle metro line on back */}
      <line x1="0" y1="8" x2="91" y2="8" stroke="#E53935" strokeWidth="0.4" strokeOpacity="0.3" />
      <line x1="0" y1="48" x2="91" y2="48" stroke="#1E88E5" strokeWidth="0.4" strokeOpacity="0.3" />
      <circle cx="10" cy="8" r="0.8" fill="#ffffff" stroke="#E53935" strokeWidth="0.3" />
      <circle cx="82" cy="48" r="0.8" fill="#ffffff" stroke="#1E88E5" strokeWidth="0.3" />
      <text
        x="10"
        y="16"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#1a1a1a"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="20"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#666666"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="23" x2="50" y2="23" stroke="#333333" strokeWidth="0.1" />
      <text
        x="10"
        y="28"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#555555"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#555555"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#555555"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#999999"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 2. SKYLINE (街並) — City skyline silhouette
// Building silhouettes along the bottom edge
// ============================================================
const skylineTemplate: TemplateDefinition = {
  id: 'urban-skyline',
  name: 'SKYLINE',
  nameJa: '街並',
  category: 'urban',
  designer: 'Urban Studio',
  description: '夕暮れの街並み。ビルのシルエットが地平線を描く。',
  accentColor: '#1A237E',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1A237E" />
      <defs>
        <linearGradient id="urban-skyline-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1A237E" />
          <stop offset="60%" stopColor="#283593" />
          <stop offset="100%" stopColor="#3949AB" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#urban-skyline-sky)" />
      {/* City skyline silhouette */}
      <path d="M 0,55 L 0,42 L 4,42 L 4,38 L 7,38 L 7,42 L 10,42 L 10,35 L 13,35 L 13,32 L 15,32 L 15,35 L 18,35 L 18,40 L 22,40 L 22,28 L 24,28 L 24,25 L 26,25 L 26,28 L 28,28 L 28,38 L 32,38 L 32,30 L 35,30 L 35,22 L 37,22 L 37,20 L 39,20 L 39,22 L 41,22 L 41,32 L 44,32 L 44,38 L 48,38 L 48,26 L 50,26 L 50,24 L 52,24 L 52,26 L 54,26 L 54,35 L 58,35 L 58,30 L 62,30 L 62,34 L 65,34 L 65,40 L 68,40 L 68,36 L 72,36 L 72,28 L 74,28 L 74,26 L 76,26 L 76,28 L 78,28 L 78,38 L 82,38 L 82,42 L 86,42 L 86,40 L 91,40 L 91,55 Z" fill="#0D1240" fillOpacity="0.7" />
      {/* Window lights */}
      <rect x="23" y="30" width="1" height="1" fill="#FDD835" fillOpacity="0.6" />
      <rect x="25" y="32" width="1" height="1" fill="#FDD835" fillOpacity="0.5" />
      <rect x="36" y="24" width="0.8" height="0.8" fill="#FFE082" fillOpacity="0.7" />
      <rect x="38" y="26" width="0.8" height="0.8" fill="#FDD835" fillOpacity="0.5" />
      <rect x="49" y="28" width="0.8" height="0.8" fill="#FFE082" fillOpacity="0.6" />
      <rect x="51" y="30" width="0.8" height="0.8" fill="#FDD835" fillOpacity="0.5" />
      <rect x="73" y="30" width="0.8" height="0.8" fill="#FFE082" fillOpacity="0.6" />
      <rect x="75" y="32" width="0.8" height="0.8" fill="#FDD835" fillOpacity="0.5" />
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="5.5"
        letterSpacing="0.6"
        fill="#E8EAF6"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="20"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#9FA8DA"
      >
        {data.nameEn.toUpperCase()}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1A237E" />
      <defs>
        <linearGradient id="urban-skyline-back-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#283593" />
          <stop offset="100%" stopColor="#3949AB" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#urban-skyline-back-sky)" />
      {/* Minimal skyline silhouette at bottom */}
      <path d="M 0,55 L 0,50 L 8,50 L 8,46 L 12,46 L 12,48 L 18,48 L 18,44 L 22,44 L 22,50 L 91,50 L 91,55 Z" fill="#0D1240" fillOpacity="0.5" />
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#E8EAF6"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#9FA8DA"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="22" x2="55" y2="22" stroke="#5C6BC0" strokeWidth="0.12" strokeOpacity="0.5" />
      <text
        x="10"
        y="28"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#C5CAE9"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#C5CAE9"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#C5CAE9"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#7986CB"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 3. ALLEY (路地) — Narrow alleyway perspective
// Converging lines creating depth, concrete texture
// ============================================================
const alleyTemplate: TemplateDefinition = {
  id: 'urban-alley',
  name: 'ALLEY',
  nameJa: '路地',
  category: 'urban',
  designer: 'Urban Studio',
  description: '路地裏の奥行き。収束する線が都市の深度を描く。',
  accentColor: '#78909C',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ECEFF1" />
      {/* Perspective lines converging to vanishing point */}
      <defs>
        <linearGradient id="urban-alley-wall-l" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#B0BEC5" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#ECEFF1" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="urban-alley-wall-r" x1="1" y1="0" x2="0" y2="0">
          <stop offset="0%" stopColor="#90A4AE" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#ECEFF1" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Left wall */}
      <polygon points="0,0 30,15 30,40 0,55" fill="url(#urban-alley-wall-l)" />
      {/* Right wall */}
      <polygon points="91,0 61,15 61,40 91,55" fill="url(#urban-alley-wall-r)" />
      {/* Perspective converging lines */}
      <line x1="0" y1="0" x2="30" y2="15" stroke="#78909C" strokeWidth="0.15" strokeOpacity="0.3" />
      <line x1="0" y1="55" x2="30" y2="40" stroke="#78909C" strokeWidth="0.15" strokeOpacity="0.3" />
      <line x1="91" y1="0" x2="61" y2="15" stroke="#78909C" strokeWidth="0.15" strokeOpacity="0.3" />
      <line x1="91" y1="55" x2="61" y2="40" stroke="#78909C" strokeWidth="0.15" strokeOpacity="0.3" />
      {/* Horizontal depth lines */}
      <line x1="30" y1="22" x2="61" y2="22" stroke="#78909C" strokeWidth="0.08" strokeOpacity="0.2" />
      <line x1="30" y1="28" x2="61" y2="28" stroke="#78909C" strokeWidth="0.08" strokeOpacity="0.15" />
      <line x1="30" y1="34" x2="61" y2="34" stroke="#78909C" strokeWidth="0.08" strokeOpacity="0.2" />
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5"
        letterSpacing="0.4"
        fill="#37474F"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#607D8B"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#90A4AE"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ECEFF1" />
      {/* Subtle perspective accent */}
      <line x1="0" y1="8" x2="91" y2="8" stroke="#78909C" strokeWidth="0.12" strokeOpacity="0.25" />
      <line x1="0" y1="48" x2="91" y2="48" stroke="#78909C" strokeWidth="0.12" strokeOpacity="0.25" />
      <polygon points="0,0 12,8 12,48 0,55" fill="#B0BEC5" fillOpacity="0.1" />
      <text
        x="14"
        y="16"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#37474F"
      >
        {data.companyJa}
      </text>
      <text
        x="14"
        y="20"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#607D8B"
      >
        {data.companyEn}
      </text>
      <line x1="14" y1="23" x2="55" y2="23" stroke="#78909C" strokeWidth="0.1" strokeOpacity="0.3" />
      <text
        x="14"
        y="28"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#546E7A"
      >
        {data.tel}
      </text>
      <text
        x="14"
        y="32"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#546E7A"
      >
        {data.email}
      </text>
      <text
        x="14"
        y="36"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#546E7A"
      >
        {data.website}
      </text>
      <text
        x="14"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#90A4AE"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 4. SIGNAL (信号) — Traffic signal / urban signage
// Bold colored circles (traffic light) and clean signage style
// ============================================================
const signalTemplate: TemplateDefinition = {
  id: 'urban-signal',
  name: 'SIGNAL',
  nameJa: '信号',
  category: 'urban',
  designer: 'Urban Studio',
  description: '信号機の三色。都市のリズムを支配する赤・黄・緑。',
  accentColor: '#F44336',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#212121" />
      {/* Traffic signal housing */}
      <rect x="5" y="10" width="8" height="35" rx="2" fill="#333333" />
      {/* Signal lights */}
      <circle cx="9" cy="16" r="2.5" fill="#F44336" fillOpacity="0.85" />
      <circle cx="9" cy="27" r="2.5" fill="#FFC107" fillOpacity="0.6" />
      <circle cx="9" cy="38" r="2.5" fill="#4CAF50" fillOpacity="0.4" />
      {/* Glow effect on red */}
      <circle cx="9" cy="16" r="5" fill="#F44336" fillOpacity="0.1" />
      {/* Signal pole */}
      <rect x="8" y="45" width="2" height="5" fill="#333333" />
      <text
        x="22"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="0.4"
        fill="#FFFFFF"
      >
        {data.nameJa}
      </text>
      <text
        x="22"
        y="29"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.3"
        fill="#BDBDBD"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="22"
        y="36"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#757575"
      >
        {data.titleJa}
      </text>
      {/* Crosswalk stripes at bottom */}
      <rect x="22" y="46" width="8" height="1.2" fill="#FFFFFF" fillOpacity="0.3" />
      <rect x="33" y="46" width="8" height="1.2" fill="#FFFFFF" fillOpacity="0.3" />
      <rect x="44" y="46" width="8" height="1.2" fill="#FFFFFF" fillOpacity="0.3" />
      <rect x="55" y="46" width="8" height="1.2" fill="#FFFFFF" fillOpacity="0.3" />
      <rect x="66" y="46" width="8" height="1.2" fill="#FFFFFF" fillOpacity="0.3" />
      <rect x="77" y="46" width="8" height="1.2" fill="#FFFFFF" fillOpacity="0.3" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#212121" />
      {/* Small signal dots top-right */}
      <circle cx="80" cy="8" r="1.5" fill="#F44336" fillOpacity="0.4" />
      <circle cx="80" cy="14" r="1.5" fill="#FFC107" fillOpacity="0.3" />
      <circle cx="80" cy="20" r="1.5" fill="#4CAF50" fillOpacity="0.2" />
      {/* Crosswalk at bottom */}
      <rect x="5" y="49" width="6" height="1" fill="#FFFFFF" fillOpacity="0.2" />
      <rect x="14" y="49" width="6" height="1" fill="#FFFFFF" fillOpacity="0.2" />
      <rect x="23" y="49" width="6" height="1" fill="#FFFFFF" fillOpacity="0.2" />
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#FFFFFF"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#BDBDBD"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="22" x2="55" y2="22" stroke="#555555" strokeWidth="0.12" />
      <text
        x="10"
        y="28"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#E0E0E0"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#E0E0E0"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#E0E0E0"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#757575"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 5. BRIDGE (橋) — Suspension bridge cables
// Cable/wire patterns stretching across the card
// ============================================================
const bridgeTemplate: TemplateDefinition = {
  id: 'urban-bridge',
  name: 'BRIDGE',
  nameJa: '橋',
  category: 'urban',
  designer: 'Urban Studio',
  description: '吊り橋のケーブルが空を横切る。構造美の極致。',
  accentColor: '#455A64',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F5F5" />
      <defs>
        <linearGradient id="urban-bridge-cable" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#78909C" stopOpacity="0" />
          <stop offset="50%" stopColor="#455A64" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#78909C" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Bridge towers */}
      <rect x="20" y="5" width="1.5" height="50" fill="#455A64" fillOpacity="0.3" />
      <rect x="70" y="5" width="1.5" height="50" fill="#455A64" fillOpacity="0.3" />
      {/* Main cable catenary */}
      <path d="M 0,8 Q 21,20 45.5,22 Q 70,20 91,8" stroke="#455A64" strokeWidth="0.3" fill="none" strokeOpacity="0.4" />
      {/* Suspension cables from main cable to deck */}
      <line x1="25" y1="18" x2="25" y2="42" stroke="#78909C" strokeWidth="0.1" strokeOpacity="0.25" />
      <line x1="30" y1="19" x2="30" y2="42" stroke="#78909C" strokeWidth="0.1" strokeOpacity="0.25" />
      <line x1="35" y1="20" x2="35" y2="42" stroke="#78909C" strokeWidth="0.1" strokeOpacity="0.25" />
      <line x1="40" y1="21" x2="40" y2="42" stroke="#78909C" strokeWidth="0.1" strokeOpacity="0.25" />
      <line x1="45" y1="22" x2="45" y2="42" stroke="#78909C" strokeWidth="0.1" strokeOpacity="0.25" />
      <line x1="50" y1="21.5" x2="50" y2="42" stroke="#78909C" strokeWidth="0.1" strokeOpacity="0.25" />
      <line x1="55" y1="21" x2="55" y2="42" stroke="#78909C" strokeWidth="0.1" strokeOpacity="0.25" />
      <line x1="60" y1="20" x2="60" y2="42" stroke="#78909C" strokeWidth="0.1" strokeOpacity="0.25" />
      <line x1="65" y1="19" x2="65" y2="42" stroke="#78909C" strokeWidth="0.1" strokeOpacity="0.25" />
      {/* Bridge deck */}
      <line x1="0" y1="42" x2="91" y2="42" stroke="#455A64" strokeWidth="0.4" strokeOpacity="0.5" />
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#263238"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="38"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#607D8B"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="48"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#90A4AE"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F5F5" />
      {/* Subtle cable accent */}
      <path d="M 0,5 Q 45.5,12 91,5" stroke="#455A64" strokeWidth="0.2" fill="none" strokeOpacity="0.2" />
      <line x1="0" y1="48" x2="91" y2="48" stroke="#455A64" strokeWidth="0.2" strokeOpacity="0.2" />
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#263238"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#607D8B"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="22" x2="55" y2="22" stroke="#78909C" strokeWidth="0.1" strokeOpacity="0.3" />
      <text
        x="10"
        y="28"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#455A64"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#455A64"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#455A64"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#90A4AE"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 6. GRID-U (碁盤) — Urban grid/block layout
// City block grid pattern with highlighted blocks
// ============================================================
const gridUTemplate: TemplateDefinition = {
  id: 'urban-grid-u',
  name: 'GRID-U',
  nameJa: '碁盤',
  category: 'urban',
  designer: 'Urban Studio',
  description: '碁盤の目のように整然とした都市計画。街区の幾何学。',
  accentColor: '#37474F',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FAFAFA" />
      {/* City grid pattern - streets */}
      {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90].map((x, i) => (
        <line key={`urban-grid-u-v-${i}`} x1={x} y1="0" x2={x} y2="55" stroke="#CFD8DC" strokeWidth="0.15" />
      ))}
      {[0, 11, 22, 33, 44, 55].map((y, i) => (
        <line key={`urban-grid-u-h-${i}`} x1="0" y1={y} x2="91" y2={y} stroke="#CFD8DC" strokeWidth="0.15" />
      ))}
      {/* Highlighted city blocks */}
      <rect x="60" y="0" width="10" height="11" fill="#37474F" fillOpacity="0.08" />
      <rect x="70" y="0" width="10" height="11" fill="#37474F" fillOpacity="0.12" />
      <rect x="80" y="0" width="10" height="11" fill="#37474F" fillOpacity="0.06" />
      <rect x="70" y="11" width="10" height="11" fill="#37474F" fillOpacity="0.06" />
      <rect x="80" y="11" width="10" height="11" fill="#37474F" fillOpacity="0.1" />
      <rect x="0" y="44" width="10" height="11" fill="#37474F" fillOpacity="0.08" />
      <rect x="10" y="44" width="10" height="11" fill="#37474F" fillOpacity="0.06" />
      {/* Accent block */}
      <rect x="70" y="0" width="10" height="11" fill="#E53935" fillOpacity="0.08" />
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.4"
        fill="#263238"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.2"
        fill="#607D8B"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#90A4AE"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FAFAFA" />
      {/* Subtle grid on back */}
      {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90].map((x, i) => (
        <line key={`urban-grid-u-bv-${i}`} x1={x} y1="0" x2={x} y2="55" stroke="#ECEFF1" strokeWidth="0.1" />
      ))}
      {[0, 11, 22, 33, 44, 55].map((y, i) => (
        <line key={`urban-grid-u-bh-${i}`} x1="0" y1={y} x2="91" y2={y} stroke="#ECEFF1" strokeWidth="0.1" />
      ))}
      {/* Accent blocks */}
      <rect x="70" y="44" width="10" height="11" fill="#37474F" fillOpacity="0.06" />
      <rect x="80" y="44" width="10" height="11" fill="#37474F" fillOpacity="0.08" />
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#263238"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#607D8B"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="22" x2="55" y2="22" stroke="#90A4AE" strokeWidth="0.1" strokeOpacity="0.3" />
      <text
        x="10"
        y="28"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#455A64"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#455A64"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#455A64"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#90A4AE"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 7. TOWER (塔) — Skyscraper/tower form
// Tall vertical emphasis with window pattern
// ============================================================
const towerTemplate: TemplateDefinition = {
  id: 'urban-tower',
  name: 'TOWER',
  nameJa: '塔',
  category: 'urban',
  designer: 'Urban Studio',
  description: '摩天楼の垂直性。天を突く塔が都市のアイコンとなる。',
  accentColor: '#546E7A',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#263238" />
      <defs>
        <linearGradient id="urban-tower-glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#455A64" />
          <stop offset="100%" stopColor="#37474F" />
        </linearGradient>
      </defs>
      {/* Tower body */}
      <rect x="68" y="0" width="16" height="55" fill="url(#urban-tower-glass)" />
      {/* Window grid on tower */}
      {[4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52].map((y, i) => (
        <g key={`urban-tower-win-${i}`}>
          <rect x="70" y={y} width="2.5" height="2" fill="#78909C" fillOpacity={i % 3 === 0 ? 0.5 : 0.2} />
          <rect x="74" y={y} width="2.5" height="2" fill="#78909C" fillOpacity={i % 2 === 0 ? 0.4 : 0.15} />
          <rect x="78" y={y} width="2.5" height="2" fill="#78909C" fillOpacity={i % 4 === 0 ? 0.5 : 0.2} />
        </g>
      ))}
      {/* Lit windows (yellow) */}
      <rect x="70" y="20" width="2.5" height="2" fill="#FDD835" fillOpacity="0.4" />
      <rect x="78" y="32" width="2.5" height="2" fill="#FFE082" fillOpacity="0.35" />
      <rect x="74" y="44" width="2.5" height="2" fill="#FDD835" fillOpacity="0.3" />
      {/* Tower antenna */}
      <line x1="76" y1="0" x2="76" y2="3" stroke="#90A4AE" strokeWidth="0.3" />
      <text
        x="10"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="6"
        letterSpacing="0.5"
        fill="#ECEFF1"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="27"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.3"
        fill="#78909C"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="34"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#607D8B"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#263238" />
      {/* Small tower silhouette */}
      <rect x="78" y="0" width="8" height="55" fill="#37474F" fillOpacity="0.4" />
      <rect x="80" y="4" width="1.5" height="1.2" fill="#78909C" fillOpacity="0.2" />
      <rect x="83" y="4" width="1.5" height="1.2" fill="#78909C" fillOpacity="0.15" />
      <rect x="80" y="8" width="1.5" height="1.2" fill="#FDD835" fillOpacity="0.2" />
      <rect x="83" y="8" width="1.5" height="1.2" fill="#78909C" fillOpacity="0.2" />
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#ECEFF1"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#78909C"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="22" x2="55" y2="22" stroke="#546E7A" strokeWidth="0.12" />
      <text
        x="10"
        y="28"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#B0BEC5"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#B0BEC5"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#B0BEC5"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#607D8B"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 8. TUNNEL (隧道) — Tunnel perspective
// Concentric rectangles creating tunnel depth effect
// ============================================================
const tunnelTemplate: TemplateDefinition = {
  id: 'urban-tunnel',
  name: 'TUNNEL',
  nameJa: '隧道',
  category: 'urban',
  designer: 'Urban Studio',
  description: 'トンネルの向こうに見える出口の光。奥行きの幾何学。',
  accentColor: '#424242',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#2C2C2C" />
      {/* Tunnel concentric rectangles */}
      <rect x="3" y="2" width="85" height="51" fill="none" stroke="#555555" strokeWidth="0.15" />
      <rect x="10" y="6" width="71" height="43" fill="none" stroke="#666666" strokeWidth="0.15" />
      <rect x="17" y="10" width="57" height="35" fill="none" stroke="#777777" strokeWidth="0.15" />
      <rect x="24" y="14" width="43" height="27" fill="none" stroke="#888888" strokeWidth="0.15" />
      <rect x="31" y="18" width="29" height="19" fill="none" stroke="#999999" strokeWidth="0.15" />
      {/* Light at the end of tunnel */}
      <rect x="36" y="21" width="19" height="13" fill="#ECEFF1" fillOpacity="0.06" />
      <rect x="39" y="23" width="13" height="9" fill="#ECEFF1" fillOpacity="0.08" />
      <rect x="42" y="25" width="7" height="5" fill="#FAFAFA" fillOpacity="0.12" />
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="3"
        letterSpacing="0.3"
        fill="#FAFAFA"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        letterSpacing="0.2"
        fill="#BDBDBD"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="47"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#757575"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#2C2C2C" />
      {/* Subtle tunnel rings */}
      <rect x="60" y="5" width="26" height="20" fill="none" stroke="#444444" strokeWidth="0.1" />
      <rect x="63" y="7" width="20" height="16" fill="none" stroke="#555555" strokeWidth="0.1" />
      <rect x="66" y="9" width="14" height="12" fill="none" stroke="#666666" strokeWidth="0.1" />
      <rect x="69" y="11" width="8" height="8" fill="#ECEFF1" fillOpacity="0.04" />
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#ECEFF1"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#9E9E9E"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="22" x2="50" y2="22" stroke="#555555" strokeWidth="0.12" />
      <text
        x="10"
        y="28"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#BDBDBD"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#BDBDBD"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#BDBDBD"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#757575"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 9. PARK (公園) — Urban park oasis
// Green space in concrete with bench/tree elements
// ============================================================
const parkTemplate: TemplateDefinition = {
  id: 'urban-park',
  name: 'PARK',
  nameJa: '公園',
  category: 'urban',
  designer: 'Urban Studio',
  description: 'コンクリートの中の緑。都市公園が生む安らぎの空間。',
  accentColor: '#43A047',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#E8F5E9" />
      <defs>
        <linearGradient id="urban-park-path" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#BDBDBD" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#BDBDBD" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Park path */}
      <path d="M 0,40 Q 20,38 40,42 Q 60,46 91,40" stroke="#BDBDBD" strokeWidth="1.5" fill="none" strokeOpacity="0.3" />
      {/* Tree canopy shapes */}
      <circle cx="15" cy="18" r="8" fill="#66BB6A" fillOpacity="0.25" />
      <circle cx="12" cy="15" r="6" fill="#81C784" fillOpacity="0.2" />
      <circle cx="18" cy="14" r="5" fill="#A5D6A7" fillOpacity="0.2" />
      {/* Tree trunk */}
      <rect x="14" y="24" width="1.2" height="8" fill="#795548" fillOpacity="0.3" rx="0.3" />
      {/* Second tree */}
      <circle cx="80" cy="22" r="6" fill="#66BB6A" fillOpacity="0.2" />
      <circle cx="78" cy="20" r="4.5" fill="#81C784" fillOpacity="0.15" />
      <rect x="79" y="27" width="1" height="6" fill="#795548" fillOpacity="0.25" rx="0.2" />
      {/* Park bench */}
      <rect x="42" y="36" width="8" height="0.5" fill="#8D6E63" fillOpacity="0.4" />
      <rect x="43" y="36.5" width="0.5" height="2" fill="#8D6E63" fillOpacity="0.3" />
      <rect x="49" y="36.5" width="0.5" height="2" fill="#8D6E63" fillOpacity="0.3" />
      <text
        x="45.5"
        y="18"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#2E7D32"
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
        letterSpacing="0.3"
        fill="#43A047"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#66BB6A"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#E8F5E9" />
      {/* Subtle tree in corner */}
      <circle cx="82" cy="8" r="5" fill="#66BB6A" fillOpacity="0.15" />
      <circle cx="80" cy="6" r="3.5" fill="#81C784" fillOpacity="0.12" />
      <rect x="81" y="12" width="0.8" height="4" fill="#795548" fillOpacity="0.2" rx="0.2" />
      {/* Path hint */}
      <path d="M 0,50 Q 30,48 60,51 Q 80,53 91,50" stroke="#BDBDBD" strokeWidth="0.8" fill="none" strokeOpacity="0.15" />
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#2E7D32"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#43A047"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="22" x2="55" y2="22" stroke="#43A047" strokeWidth="0.1" strokeOpacity="0.3" />
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
// 10. STATION (駅) — Train station platform
// Platform edge, track lines, departure board aesthetic
// ============================================================
const stationTemplate: TemplateDefinition = {
  id: 'urban-station',
  name: 'STATION',
  nameJa: '駅',
  category: 'urban',
  designer: 'Urban Studio',
  description: '駅のホーム。出発と到着が交差する都市の結節点。',
  accentColor: '#FFC107',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1B1B2F" />
      {/* Platform edge line */}
      <rect x="0" y="38" width="91" height="0.5" fill="#FFC107" fillOpacity="0.8" />
      {/* Warning stripes on platform edge */}
      {[0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84].map((x, i) => (
        <rect key={`urban-station-stripe-${i}`} x={x} y="38.5" width="3" height="2" fill="#FFC107" fillOpacity="0.15" />
      ))}
      {/* Track lines */}
      <line x1="0" y1="48" x2="91" y2="48" stroke="#555555" strokeWidth="0.3" />
      <line x1="0" y1="50" x2="91" y2="50" stroke="#555555" strokeWidth="0.3" />
      {/* Rail ties */}
      {[5, 15, 25, 35, 45, 55, 65, 75, 85].map((x, i) => (
        <rect key={`urban-station-tie-${i}`} x={x} y="47" width="4" height="4" fill="#333333" fillOpacity="0.3" rx="0.2" />
      ))}
      {/* Departure board style */}
      <rect x="5" y="4" width="42" height="14" rx="1" fill="#0D0D1A" stroke="#333333" strokeWidth="0.2" />
      <text
        x="26"
        y="12"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5"
        letterSpacing="0.3"
        fill="#FFC107"
      >
        {data.nameJa}
      </text>
      <text
        x="26"
        y="16"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        letterSpacing="0.2"
        fill="#E0E0E0"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="26"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#9E9E9E"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#757575"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1B1B2F" />
      {/* Platform edge */}
      <rect x="0" y="46" width="91" height="0.4" fill="#FFC107" fillOpacity="0.5" />
      {/* Small departure indicator */}
      <rect x="72" y="4" width="14" height="8" rx="0.5" fill="#0D0D1A" stroke="#333333" strokeWidth="0.15" />
      <circle cx="79" cy="8" r="2" fill="#FFC107" fillOpacity="0.15" />
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#FFC107"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#BDBDBD"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="22" x2="55" y2="22" stroke="#FFC107" strokeWidth="0.1" strokeOpacity="0.3" />
      <text
        x="10"
        y="28"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#E0E0E0"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#E0E0E0"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#E0E0E0"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#757575"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

export const urbanTemplates: TemplateDefinition[] = [
  metroTemplate,
  skylineTemplate,
  alleyTemplate,
  signalTemplate,
  bridgeTemplate,
  gridUTemplate,
  towerTemplate,
  tunnelTemplate,
  parkTemplate,
  stationTemplate,
];
