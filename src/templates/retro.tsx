import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. VINYL (盤) — Vinyl record grooves, spinning disc aesthetic
// ============================================================
const vinylTemplate: TemplateDefinition = {
  id: 'retro-vinyl',
  name: 'VINYL',
  nameJa: '盤',
  category: 'retro',
  designer: 'Vinyl Studio',
  description: 'レコードの溝が奏でるアナログの温もり。',
  accentColor: '#2C2C2C',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1a1a1a" />
      <defs>
        <radialGradient id="retro-vinyl-disc" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#444444" />
          <stop offset="30%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </radialGradient>
      </defs>
      {/* Vinyl record */}
      <circle cx="70" cy="27.5" r="24" fill="url(#retro-vinyl-disc)" />
      {/* Record grooves */}
      <circle cx="70" cy="27.5" r="22" fill="none" stroke="#333333" strokeWidth="0.15" />
      <circle cx="70" cy="27.5" r="20" fill="none" stroke="#333333" strokeWidth="0.12" />
      <circle cx="70" cy="27.5" r="18" fill="none" stroke="#333333" strokeWidth="0.15" />
      <circle cx="70" cy="27.5" r="16" fill="none" stroke="#333333" strokeWidth="0.12" />
      <circle cx="70" cy="27.5" r="14" fill="none" stroke="#333333" strokeWidth="0.15" />
      <circle cx="70" cy="27.5" r="12" fill="none" stroke="#333333" strokeWidth="0.12" />
      <circle cx="70" cy="27.5" r="10" fill="none" stroke="#333333" strokeWidth="0.15" />
      <circle cx="70" cy="27.5" r="8" fill="none" stroke="#333333" strokeWidth="0.12" />
      {/* Center label */}
      <circle cx="70" cy="27.5" r="6" fill="#c85a30" />
      <circle cx="70" cy="27.5" r="1.2" fill="#1a1a1a" />
      {/* Light reflection */}
      <path d="M55,15 Q70,10 85,15 Q80,27 55,25 Z" fill="#ffffff" opacity="0.03" />
      <text
        x="8"
        y="18"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#f0e0d0"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="25"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.3"
        fill="#c85a30"
      >
        {data.nameEn}
      </text>
      <text
        x="8"
        y="38"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#888888"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1a1a1a" />
      {/* Record sleeve line pattern */}
      <line x1="0" y1="5" x2="91" y2="5" stroke="#2a2a2a" strokeWidth="0.3" />
      <line x1="0" y1="50" x2="91" y2="50" stroke="#2a2a2a" strokeWidth="0.3" />
      <rect x="6" y="7" width="79" height="0.3" fill="#c85a30" opacity="0.6" />
      <text
        x="45.5"
        y="16"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#f0e0d0"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="20.5"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#c85a30"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="24" x2="71" y2="24" stroke="#333333" strokeWidth="0.15" />
      <text
        x="45.5"
        y="29"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#999999"
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
        fill="#999999"
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
        fill="#999999"
      >
        {data.website}
      </text>
      <line x1="20" y1="40" x2="71" y2="40" stroke="#333333" strokeWidth="0.15" />
      <text
        x="45.5"
        y="45"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#666666"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 2. DINER (店) — 1950s American diner, checkered pattern
// ============================================================
const dinerTemplate: TemplateDefinition = {
  id: 'retro-diner',
  name: 'DINER',
  nameJa: '店',
  category: 'retro',
  designer: 'Diner Studio',
  description: '50年代のダイナーの陽気な活気。',
  accentColor: '#D44B3F',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFF8E7" />
      {/* Top red stripe */}
      <rect x="0" y="0" width="91" height="4" fill="#D44B3F" />
      <rect x="0" y="4" width="91" height="1.5" fill="#ffffff" />
      <rect x="0" y="5.5" width="91" height="1.5" fill="#D44B3F" />
      {/* Bottom red stripe */}
      <rect x="0" y="48" width="91" height="1.5" fill="#D44B3F" />
      <rect x="0" y="49.5" width="91" height="1.5" fill="#ffffff" />
      <rect x="0" y="51" width="91" height="4" fill="#D44B3F" />
      {/* Checkerboard pattern corners */}
      {[0, 1, 2, 3].map((i) =>
        [0, 1, 2, 3].map((j) => (
          <rect
            key={`retro-diner-check-${i}-${j}`}
            x={i * 2.5}
            y={8 + j * 2.5}
            width="2.5"
            height="2.5"
            fill={(i + j) % 2 === 0 ? '#D44B3F' : '#FFF8E7'}
            opacity="0.15"
          />
        ))
      )}
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="6"
        letterSpacing="0.5"
        fill="#D44B3F"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="700"
        fontSize="2.2"
        letterSpacing="0.3"
        fill="#333333"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="38"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#888888"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFF8E7" />
      <rect x="0" y="0" width="91" height="3" fill="#D44B3F" />
      <rect x="0" y="52" width="91" height="3" fill="#D44B3F" />
      {/* Diner star burst */}
      <polygon points="45.5,4 47,8 51,8 48,10.5 49,14.5 45.5,12 42,14.5 43,10.5 40,8 44,8" fill="#D44B3F" opacity="0.1" />
      <text
        x="45.5"
        y="15"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="2.2"
        fill="#D44B3F"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="19.5"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="1.5"
        fill="#666666"
      >
        {data.companyEn}
      </text>
      <line x1="15" y1="23" x2="76" y2="23" stroke="#D44B3F" strokeWidth="0.2" strokeDasharray="1,0.5" />
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#555555"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#555555"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#555555"
      >
        {data.website}
      </text>
      <line x1="15" y1="39.5" x2="76" y2="39.5" stroke="#D44B3F" strokeWidth="0.2" strokeDasharray="1,0.5" />
      <text
        x="45.5"
        y="44.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#888888"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 3. ARCADE (遊) — Retro pixel-style game aesthetic
// ============================================================
const arcadeTemplate: TemplateDefinition = {
  id: 'retro-arcade',
  name: 'ARCADE',
  nameJa: '遊',
  category: 'retro',
  designer: 'Arcade Studio',
  description: 'ゲームセンターの蛍光灯が照らすノスタルジー。',
  accentColor: '#00CC66',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0a0a2e" />
      <defs>
        <linearGradient id="retro-arcade-glow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00CC66" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#00CC66" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Scanline effect */}
      {[...Array(28)].map((_, i) => (
        <line
          key={`retro-arcade-scan-${i}`}
          x1="0"
          y1={i * 2}
          x2="91"
          y2={i * 2}
          stroke="#ffffff"
          strokeWidth="0.1"
          opacity="0.05"
        />
      ))}
      {/* Border pixels */}
      <rect x="3" y="3" width="85" height="49" fill="none" stroke="#00CC66" strokeWidth="0.4" />
      <rect x="4.5" y="4.5" width="82" height="46" fill="none" stroke="#00CC66" strokeWidth="0.15" opacity="0.5" />
      {/* Corner decorations */}
      <rect x="3" y="3" width="2" height="2" fill="#00CC66" opacity="0.6" />
      <rect x="86" y="3" width="2" height="2" fill="#00CC66" opacity="0.6" />
      <rect x="3" y="50" width="2" height="2" fill="#00CC66" opacity="0.6" />
      <rect x="86" y="50" width="2" height="2" fill="#00CC66" opacity="0.6" />
      {/* Star decorations */}
      <rect x="10" y="8" width="1" height="1" fill="#ffcc00" opacity="0.6" />
      <rect x="78" y="10" width="1" height="1" fill="#ffcc00" opacity="0.5" />
      <rect x="15" y="45" width="1" height="1" fill="#ffcc00" opacity="0.4" />
      <rect width="91" height="8" fill="url(#retro-arcade-glow)" />
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="6"
        letterSpacing="0.8"
        fill="#00CC66"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="29"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="2"
        letterSpacing="0.5"
        fill="#00ff80"
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
        fill="#008844"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0a0a2e" />
      {/* Scanlines */}
      {[...Array(28)].map((_, i) => (
        <line
          key={`retro-arcade-scan-b-${i}`}
          x1="0"
          y1={i * 2}
          x2="91"
          y2={i * 2}
          stroke="#ffffff"
          strokeWidth="0.1"
          opacity="0.05"
        />
      ))}
      <rect x="3" y="3" width="85" height="49" fill="none" stroke="#00CC66" strokeWidth="0.4" />
      <text
        x="45.5"
        y="13"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="2.2"
        fill="#00CC66"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="17.5"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#008844"
      >
        {data.companyEn}
      </text>
      <line x1="15" y1="21" x2="76" y2="21" stroke="#00CC66" strokeWidth="0.15" opacity="0.5" />
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#00ff80"
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
        fill="#00ff80"
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
        fill="#00ff80"
      >
        {data.website}
      </text>
      <line x1="15" y1="37.5" x2="76" y2="37.5" stroke="#00CC66" strokeWidth="0.15" opacity="0.5" />
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#008844"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="47"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#008844"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 4. POLAROID (写) — Instant photo frame aesthetic
// ============================================================
const polaroidTemplate: TemplateDefinition = {
  id: 'retro-polaroid',
  name: 'POLAROID',
  nameJa: '写',
  category: 'retro',
  designer: 'Polaroid Studio',
  description: 'インスタント写真の余白に刻まれた記憶。',
  accentColor: '#E8D5B7',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f5f0e8" />
      {/* Polaroid frame */}
      <rect x="22" y="3" width="47" height="42" rx="0.5" fill="#ffffff" />
      <rect x="22" y="3" width="47" height="42" rx="0.5" fill="none" stroke="#ddd5c8" strokeWidth="0.3" />
      {/* Photo area (gradient to simulate faded photo) */}
      <defs>
        <linearGradient id="retro-polaroid-photo" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d8c8b0" />
          <stop offset="50%" stopColor="#c8b8a0" />
          <stop offset="100%" stopColor="#b8a890" />
        </linearGradient>
      </defs>
      <rect x="25" y="6" width="41" height="28" fill="url(#retro-polaroid-photo)" />
      {/* Faded photo elements */}
      <circle cx="38" cy="16" r="5" fill="#c0a880" opacity="0.4" />
      <rect x="30" y="25" width="26" height="5" fill="#b8a080" opacity="0.3" />
      {/* Name in the white border area */}
      <text
        x="45.5"
        y="40"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="3"
        fill="#555555"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="49"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.2"
        fill="#888888"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="53"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#aaaaaa"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f5f0e8" />
      {/* Subtle aged paper texture lines */}
      <line x1="0" y1="10" x2="91" y2="10" stroke="#e0d8c8" strokeWidth="0.1" />
      <line x1="0" y1="20" x2="91" y2="20" stroke="#e0d8c8" strokeWidth="0.1" />
      <line x1="0" y1="30" x2="91" y2="30" stroke="#e0d8c8" strokeWidth="0.1" />
      <line x1="0" y1="40" x2="91" y2="40" stroke="#e0d8c8" strokeWidth="0.1" />
      <text
        x="45.5"
        y="13"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#555555"
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
        fill="#888888"
      >
        {data.companyEn}
      </text>
      <line x1="25" y1="21" x2="66" y2="21" stroke="#c8baa8" strokeWidth="0.2" />
      <text
        x="45.5"
        y="26.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#777777"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="30.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#777777"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="34.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#777777"
      >
        {data.website}
      </text>
      <line x1="25" y1="38" x2="66" y2="38" stroke="#c8baa8" strokeWidth="0.2" />
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#aaaaaa"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="47"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#aaaaaa"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 5. CASSETTE (録) — Cassette tape window and reels
// ============================================================
const cassetteTemplate: TemplateDefinition = {
  id: 'retro-cassette',
  name: 'CASSETTE',
  nameJa: '録',
  category: 'retro',
  designer: 'Cassette Studio',
  description: 'カセットテープの巻き戻せない時間。',
  accentColor: '#C8963E',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f0e8d0" />
      {/* Cassette body outline */}
      <rect x="8" y="5" width="75" height="45" rx="3" fill="#e8dcc0" stroke="#c8b898" strokeWidth="0.3" />
      {/* Label area */}
      <rect x="14" y="8" width="63" height="18" rx="1" fill="#ffffff" stroke="#d8ccb0" strokeWidth="0.2" />
      {/* Tape window */}
      <rect x="28" y="30" width="35" height="10" rx="2" fill="#3a3028" />
      {/* Tape reels */}
      <circle cx="37" cy="35" r="3.5" fill="none" stroke="#5a4838" strokeWidth="0.3" />
      <circle cx="37" cy="35" r="1.5" fill="#C8963E" />
      <circle cx="37" cy="35" r="0.5" fill="#3a3028" />
      <circle cx="54" cy="35" r="3.5" fill="none" stroke="#5a4838" strokeWidth="0.3" />
      <circle cx="54" cy="35" r="1.5" fill="#C8963E" />
      <circle cx="54" cy="35" r="0.5" fill="#3a3028" />
      {/* Tape between reels */}
      <line x1="40.5" y1="35" x2="50.5" y2="35" stroke="#5a4838" strokeWidth="0.2" />
      {/* Screw holes */}
      <circle cx="12" cy="9" r="1" fill="none" stroke="#c8b898" strokeWidth="0.2" />
      <circle cx="79" cy="9" r="1" fill="none" stroke="#c8b898" strokeWidth="0.2" />
      <circle cx="12" cy="46" r="1" fill="none" stroke="#c8b898" strokeWidth="0.2" />
      <circle cx="79" cy="46" r="1" fill="none" stroke="#c8b898" strokeWidth="0.2" />
      {/* Name on label */}
      <text
        x="45.5"
        y="16"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="4"
        letterSpacing="0.3"
        fill="#4a3a28"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.2"
        fill="#8a7a60"
      >
        {data.nameEn}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f0e8d0" />
      {/* Lined paper effect */}
      {[...Array(10)].map((_, i) => (
        <line
          key={`retro-cassette-line-${i}`}
          x1="10"
          y1={8 + i * 4.5}
          x2="81"
          y2={8 + i * 4.5}
          stroke="#d8ccb0"
          strokeWidth="0.1"
        />
      ))}
      <text
        x="45.5"
        y="12"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="2.2"
        fill="#4a3a28"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="16.5"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#8a7a60"
      >
        {data.companyEn}
      </text>
      <rect x="20" y="19.5" width="51" height="0.2" fill="#C8963E" opacity="0.5" />
      <text
        x="45.5"
        y="25"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#6a5a42"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="29.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#6a5a42"
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
        fill="#6a5a42"
      >
        {data.website}
      </text>
      <rect x="20" y="37" width="51" height="0.2" fill="#C8963E" opacity="0.5" />
      <text
        x="45.5"
        y="42.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#8a7a60"
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
        fill="#8a7a60"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 6. NEONRETRO (管) — Neon tubes on dark background
// ============================================================
const neonretroTemplate: TemplateDefinition = {
  id: 'retro-neonretro',
  name: 'NEONRETRO',
  nameJa: '管',
  category: 'retro',
  designer: 'Neon Studio',
  description: 'ネオン管が夜を彩るレトロフューチャー。',
  accentColor: '#FF6EC7',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1a0a2e" />
      <defs>
        <filter id="retro-neonretro-glow">
          <feGaussianBlur stdDeviation="0.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Neon border */}
      <rect x="5" y="4" width="81" height="47" rx="2" fill="none" stroke="#FF6EC7" strokeWidth="0.3" opacity="0.6" />
      <rect x="5" y="4" width="81" height="47" rx="2" fill="none" stroke="#FF6EC7" strokeWidth="0.8" opacity="0.15" />
      {/* Neon accent lines */}
      <line x1="10" y1="10" x2="30" y2="10" stroke="#00FFFF" strokeWidth="0.3" opacity="0.7" />
      <line x1="10" y1="10" x2="30" y2="10" stroke="#00FFFF" strokeWidth="0.8" opacity="0.15" />
      <line x1="61" y1="45" x2="81" y2="45" stroke="#FF6EC7" strokeWidth="0.3" opacity="0.7" />
      <line x1="61" y1="45" x2="81" y2="45" stroke="#FF6EC7" strokeWidth="0.8" opacity="0.15" />
      {/* Star accents */}
      <circle cx="80" cy="10" r="0.4" fill="#FF6EC7" opacity="0.6" />
      <circle cx="12" cy="45" r="0.4" fill="#00FFFF" opacity="0.6" />
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="6"
        letterSpacing="0.5"
        fill="#FF6EC7"
        filter="url(#retro-neonretro-glow)"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="2"
        letterSpacing="0.4"
        fill="#00FFFF"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="38"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#9966cc"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1a0a2e" />
      <rect x="5" y="4" width="81" height="47" rx="2" fill="none" stroke="#FF6EC7" strokeWidth="0.3" opacity="0.4" />
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#FF6EC7"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="18.5"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#00FFFF"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="22" x2="71" y2="22" stroke="#9966cc" strokeWidth="0.15" opacity="0.5" />
      <text
        x="45.5"
        y="27.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#cc88ee"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="31.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#cc88ee"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="35.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#cc88ee"
      >
        {data.website}
      </text>
      <line x1="20" y1="39" x2="71" y2="39" stroke="#9966cc" strokeWidth="0.15" opacity="0.5" />
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#9966cc"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="48"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#9966cc"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 7. TYPEWRITER (打) — Typewriter key impressions
// ============================================================
const typewriterTemplate: TemplateDefinition = {
  id: 'retro-typewriter',
  name: 'TYPEWRITER',
  nameJa: '打',
  category: 'retro',
  designer: 'Typewriter Studio',
  description: 'タイプライターが紡ぐ一文字一文字の重み。',
  accentColor: '#4A4035',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f8f0e0" />
      {/* Paper texture - subtle horizontal lines */}
      {[...Array(22)].map((_, i) => (
        <line
          key={`retro-typewriter-rule-${i}`}
          x1="5"
          y1={5 + i * 2.3}
          x2="86"
          y2={5 + i * 2.3}
          stroke="#e0d8c8"
          strokeWidth="0.08"
        />
      ))}
      {/* Red margin line */}
      <line x1="12" y1="0" x2="12" y2="55" stroke="#cc4444" strokeWidth="0.15" opacity="0.3" />
      {/* Typewriter ribbon smudge */}
      <rect x="14" y="18" width="70" height="8" fill="#4A4035" opacity="0.03" rx="1" />
      <text
        x="45.5"
        y="23"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5"
        letterSpacing="0.8"
        fill="#4A4035"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="500"
        fontSize="2.2"
        letterSpacing="0.3"
        fill="#6a5a4a"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="37"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#8a7a6a"
      >
        {data.titleJa}
      </text>
      {/* Page number style decoration */}
      <text
        x="45.5"
        y="50"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#c0b8a8"
      >
        — 1 —
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f8f0e0" />
      {/* Paper lines */}
      {[...Array(22)].map((_, i) => (
        <line
          key={`retro-typewriter-rule-b-${i}`}
          x1="5"
          y1={5 + i * 2.3}
          x2="86"
          y2={5 + i * 2.3}
          stroke="#e0d8c8"
          strokeWidth="0.08"
        />
      ))}
      <line x1="12" y1="0" x2="12" y2="55" stroke="#cc4444" strokeWidth="0.15" opacity="0.3" />
      <text
        x="45.5"
        y="12"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#4A4035"
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
        fill="#6a5a4a"
      >
        {data.companyEn}
      </text>
      <text
        x="45.5"
        y="20"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1"
        fill="#c0b8a8"
      >
        ————————————————————
      </text>
      <text
        x="45.5"
        y="25.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#6a5a4a"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="29.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#6a5a4a"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="33.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#6a5a4a"
      >
        {data.website}
      </text>
      <text
        x="45.5"
        y="37"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1"
        fill="#c0b8a8"
      >
        ————————————————————
      </text>
      <text
        x="45.5"
        y="42"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#8a7a6a"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="46"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#8a7a6a"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 8. FILM (映) — Film strip perforations and frames
// ============================================================
const filmTemplate: TemplateDefinition = {
  id: 'retro-film',
  name: 'FILM',
  nameJa: '映',
  category: 'retro',
  designer: 'Film Studio',
  description: 'フィルムの一コマに焼き付いた瞬間。',
  accentColor: '#2C2C2C',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#2C2C2C" />
      {/* Film strip perforations - left */}
      {[...Array(9)].map((_, i) => (
        <rect
          key={`retro-film-perf-l-${i}`}
          x="2"
          y={3 + i * 5.8}
          width="3"
          height="3"
          rx="0.5"
          fill="#1a1a1a"
          stroke="#444444"
          strokeWidth="0.1"
        />
      ))}
      {/* Film strip perforations - right */}
      {[...Array(9)].map((_, i) => (
        <rect
          key={`retro-film-perf-r-${i}`}
          x="86"
          y={3 + i * 5.8}
          width="3"
          height="3"
          rx="0.5"
          fill="#1a1a1a"
          stroke="#444444"
          strokeWidth="0.1"
        />
      ))}
      {/* Film frame border */}
      <rect x="8" y="3" width="75" height="49" fill="#1a1a1a" stroke="#444444" strokeWidth="0.2" />
      {/* Inner frame - exposure area */}
      <defs>
        <linearGradient id="retro-film-exposure" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#483828" />
          <stop offset="100%" stopColor="#382818" />
        </linearGradient>
      </defs>
      <rect x="10" y="5" width="71" height="45" fill="url(#retro-film-exposure)" />
      {/* Light leak effect */}
      <rect x="10" y="5" width="20" height="45" fill="#c86030" opacity="0.08" />
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="0.5"
        fill="#e8d8c0"
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
        fill="#c8a880"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="38"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#a08860"
      >
        {data.titleJa}
      </text>
      {/* Frame number */}
      <text
        x="75"
        y="10"
        textAnchor="end"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.2"
        fill="#887860"
      >
        24A
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#2C2C2C" />
      {/* Perforations */}
      {[...Array(9)].map((_, i) => (
        <rect
          key={`retro-film-perf-lb-${i}`}
          x="2"
          y={3 + i * 5.8}
          width="3"
          height="3"
          rx="0.5"
          fill="#1a1a1a"
          stroke="#444444"
          strokeWidth="0.1"
        />
      ))}
      {[...Array(9)].map((_, i) => (
        <rect
          key={`retro-film-perf-rb-${i}`}
          x="86"
          y={3 + i * 5.8}
          width="3"
          height="3"
          rx="0.5"
          fill="#1a1a1a"
          stroke="#444444"
          strokeWidth="0.1"
        />
      ))}
      <rect x="8" y="3" width="75" height="49" fill="#1a1a1a" stroke="#444444" strokeWidth="0.2" />
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#e8d8c0"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="18.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#c8a880"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="22" x2="71" y2="22" stroke="#444444" strokeWidth="0.15" />
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#b8a888"
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
        fill="#b8a888"
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
        fill="#b8a888"
      >
        {data.website}
      </text>
      <line x1="20" y1="38.5" x2="71" y2="38.5" stroke="#444444" strokeWidth="0.15" />
      <text
        x="45.5"
        y="43.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#887860"
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
        fill="#887860"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 9. JUKEBOX (箱) — Colorful jukebox arches, chrome accents
// ============================================================
const jukeboxTemplate: TemplateDefinition = {
  id: 'retro-jukebox',
  name: 'JUKEBOX',
  nameJa: '箱',
  category: 'retro',
  designer: 'Jukebox Studio',
  description: 'ジュークボックスが奏でる華やかな時代。',
  accentColor: '#C0392B',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="retro-jukebox-chrome" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8e0d0" />
          <stop offset="50%" stopColor="#d8c8b0" />
          <stop offset="100%" stopColor="#c8b898" />
        </linearGradient>
        <linearGradient id="retro-jukebox-arch" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C0392B" />
          <stop offset="100%" stopColor="#962d22" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#retro-jukebox-chrome)" />
      {/* Arch decoration at top */}
      <path d="M10,0 Q10,12 25,12 L66,12 Q81,12 81,0 Z" fill="url(#retro-jukebox-arch)" />
      <path d="M15,0 Q15,9 27,9 L64,9 Q76,9 76,0 Z" fill="#d4a020" opacity="0.4" />
      {/* Chrome trim lines */}
      <line x1="5" y1="14" x2="86" y2="14" stroke="#a08868" strokeWidth="0.3" />
      <line x1="5" y1="15" x2="86" y2="15" stroke="#d8c8b0" strokeWidth="0.15" />
      {/* Bottom chrome trim */}
      <line x1="5" y1="48" x2="86" y2="48" stroke="#a08868" strokeWidth="0.3" />
      <line x1="5" y1="49" x2="86" y2="49" stroke="#d8c8b0" strokeWidth="0.15" />
      {/* Bubble lights */}
      <circle cx="15" cy="6" r="1.5" fill="#ffcc00" opacity="0.5" />
      <circle cx="25" cy="4" r="1.2" fill="#ff6644" opacity="0.4" />
      <circle cx="66" cy="4" r="1.2" fill="#44ccff" opacity="0.4" />
      <circle cx="76" cy="6" r="1.5" fill="#ffcc00" opacity="0.5" />
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="6"
        letterSpacing="0.5"
        fill="#C0392B"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="2"
        letterSpacing="0.3"
        fill="#6a3a28"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="42"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#8a6a50"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#e8e0d0" />
      {/* Chrome borders */}
      <rect x="4" y="3" width="83" height="49" fill="none" stroke="#c8b898" strokeWidth="0.3" rx="2" />
      <rect x="6" y="5" width="79" height="45" fill="none" stroke="#d8c8b0" strokeWidth="0.15" rx="1" />
      {/* Small arch at top center */}
      <path d="M35,5 Q35,10 45.5,10 Q56,10 56,5" fill="none" stroke="#C0392B" strokeWidth="0.3" />
      <text
        x="45.5"
        y="16"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="2.2"
        fill="#C0392B"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="20.5"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#6a3a28"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="24" x2="71" y2="24" stroke="#c8b898" strokeWidth="0.2" />
      <text
        x="45.5"
        y="29"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#6a5a48"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="33"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#6a5a48"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="37"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#6a5a48"
      >
        {data.website}
      </text>
      <line x1="20" y1="40" x2="71" y2="40" stroke="#c8b898" strokeWidth="0.2" />
      <text
        x="45.5"
        y="45"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#8a7a60"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 10. POSTER (報) — Vintage poster typography, bold layered
// ============================================================
const posterTemplate: TemplateDefinition = {
  id: 'retro-poster',
  name: 'POSTER',
  nameJa: '報',
  category: 'retro',
  designer: 'Poster Studio',
  description: '古いポスターの重ね刷りが生む味わい。',
  accentColor: '#1B5E6B',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f5e6c8" />
      {/* Aged paper distress effects */}
      <circle cx="10" cy="8" r="15" fill="#e8d4b0" opacity="0.3" />
      <circle cx="80" cy="48" r="12" fill="#e8d4b0" opacity="0.2" />
      {/* Bold poster border */}
      <rect x="4" y="3" width="83" height="49" fill="none" stroke="#1B5E6B" strokeWidth="0.8" />
      <rect x="6" y="5" width="79" height="45" fill="none" stroke="#1B5E6B" strokeWidth="0.3" />
      {/* Stars decoration */}
      <polygon points="12,8 13,10.5 15.5,10.5 13.5,12 14.5,14.5 12,13 9.5,14.5 10.5,12 8.5,10.5 11,10.5" fill="#1B5E6B" opacity="0.15" />
      <polygon points="79,42 80,44.5 82.5,44.5 80.5,46 81.5,48.5 79,47 76.5,48.5 77.5,46 75.5,44.5 78,44.5" fill="#1B5E6B" opacity="0.15" />
      {/* Large bold name */}
      <text
        x="45.5"
        y="21"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="7"
        letterSpacing="1"
        fill="#1B5E6B"
      >
        {data.nameJa}
      </text>
      {/* Shadow/offset effect */}
      <text
        x="46"
        y="21.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="7"
        letterSpacing="1"
        fill="#C0392B"
        opacity="0.15"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="700"
        fontSize="2.5"
        letterSpacing="0.8"
        fill="#1B5E6B"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <line x1="20" y1="34" x2="71" y2="34" stroke="#1B5E6B" strokeWidth="0.3" />
      <text
        x="45.5"
        y="40"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#4a7a88"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f5e6c8" />
      <rect x="4" y="3" width="83" height="49" fill="none" stroke="#1B5E6B" strokeWidth="0.6" />
      {/* Aged paper distress */}
      <circle cx="75" cy="10" r="10" fill="#e8d4b0" opacity="0.25" />
      <text
        x="45.5"
        y="13"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="800"
        fontSize="2.5"
        letterSpacing="0.5"
        fill="#1B5E6B"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="18"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="600"
        fontSize="1.5"
        letterSpacing="0.4"
        fill="#4a7a88"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <line x1="15" y1="21.5" x2="76" y2="21.5" stroke="#1B5E6B" strokeWidth="0.3" />
      <line x1="15" y1="22.5" x2="76" y2="22.5" stroke="#1B5E6B" strokeWidth="0.15" />
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#3a5a68"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#3a5a68"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#3a5a68"
      >
        {data.website}
      </text>
      <line x1="15" y1="39.5" x2="76" y2="39.5" stroke="#1B5E6B" strokeWidth="0.3" />
      <line x1="15" y1="40.5" x2="76" y2="40.5" stroke="#1B5E6B" strokeWidth="0.15" />
      <text
        x="45.5"
        y="45.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.2"
        fill="#4a7a88"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

export const retroTemplates: TemplateDefinition[] = [
  vinylTemplate,
  dinerTemplate,
  arcadeTemplate,
  polaroidTemplate,
  cassetteTemplate,
  neonretroTemplate,
  typewriterTemplate,
  filmTemplate,
  jukeboxTemplate,
  posterTemplate,
];
