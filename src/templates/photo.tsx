import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. SHUTTER (幕) — Camera shutter inspired
// Dark room aesthetic with film-strip borders and red accents
// ============================================================
const shutterTemplate: TemplateDefinition = {
  id: 'photo-shutter',
  name: 'SHUTTER',
  nameJa: '幕',
  category: 'photo',
  designer: 'Daido Moriyama',
  description: 'シャッターの一瞬。暗室の赤が静かに灯る。',
  accentColor: '#8B0000',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1a1a1a" />
      {/* Film strip perforations top */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((i) => (
        <rect key={`photo-shutter-ft-${i}`} x={3 + i * 5} y="1.5" width="2.5" height="1.5" rx="0.3" fill="#2a2a2a" />
      ))}
      {/* Film strip perforations bottom */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((i) => (
        <rect key={`photo-shutter-fb-${i}`} x={3 + i * 5} y="52" width="2.5" height="1.5" rx="0.3" fill="#2a2a2a" />
      ))}
      {/* Shutter curtain lines */}
      <line x1="0" y1="18" x2="91" y2="18" stroke="#8B0000" strokeWidth="0.15" opacity="0.6" />
      <line x1="0" y1="37" x2="91" y2="37" stroke="#8B0000" strokeWidth="0.15" opacity="0.6" />
      {/* Name */}
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
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
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.8"
        fill="#8B0000"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Title */}
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#666666"
      >
        {data.titleJa}
      </text>
      {/* Red indicator dot */}
      <circle cx="45.5" cy="45" r="1.2" fill="#8B0000" opacity="0.8" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1a1a1a" />
      {/* Film strip perforations top */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((i) => (
        <rect key={`photo-shutter-bt-${i}`} x={3 + i * 5} y="1.5" width="2.5" height="1.5" rx="0.3" fill="#2a2a2a" />
      ))}
      {/* Film strip perforations bottom */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((i) => (
        <rect key={`photo-shutter-bb-${i}`} x={3 + i * 5} y="52" width="2.5" height="1.5" rx="0.3" fill="#2a2a2a" />
      ))}
      {/* Company */}
      <text
        x="10"
        y="12"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#ffffff"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="16"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        letterSpacing="0.2"
        fill="#666666"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="20" x2="81" y2="20" stroke="#8B0000" strokeWidth="0.15" />
      {/* Contact info */}
      <text
        x="10"
        y="26"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#999999"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="30"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#999999"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="34"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#999999"
      >
        {data.website}
      </text>
      <line x1="10" y1="38" x2="81" y2="38" stroke="#333333" strokeWidth="0.1" />
      <text
        x="10"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.3"
        fill="#666666"
      >
        〒{data.zipCode}
      </text>
      <text
        x="10"
        y="47"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.3"
        fill="#666666"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 2. LENS (玉) — Lens optics inspired
// Concentric circles suggesting lens elements
// ============================================================
const lensTemplate: TemplateDefinition = {
  id: 'photo-lens',
  name: 'LENS',
  nameJa: '玉',
  category: 'photo',
  designer: 'Hiroshi Sugimoto',
  description: 'レンズの同心円。光を集める玉の構造美。',
  accentColor: '#4a4a4a',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f5f5f0" />
      {/* Concentric lens circles */}
      <circle cx="70" cy="27.5" r="22" fill="none" stroke="#e0e0d8" strokeWidth="0.2" />
      <circle cx="70" cy="27.5" r="17" fill="none" stroke="#d5d5cd" strokeWidth="0.3" />
      <circle cx="70" cy="27.5" r="12" fill="none" stroke="#ccccc4" strokeWidth="0.4" />
      <circle cx="70" cy="27.5" r="7" fill="none" stroke="#bbbbb3" strokeWidth="0.5" />
      <circle cx="70" cy="27.5" r="2.5" fill="#4a4a4a" opacity="0.15" />
      {/* Name on left */}
      <text
        x="8"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.4"
        fill="#2a2a2a"
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
        fill="#888888"
      >
        {data.nameEn}
      </text>
      <text
        x="8"
        y="33"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#999999"
      >
        {data.titleJa}
      </text>
      <text
        x="8"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#aaaaaa"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f5f5f0" />
      {/* Single lens ring accent */}
      <circle cx="83" cy="8" r="4" fill="none" stroke="#d5d5cd" strokeWidth="0.3" />
      <circle cx="83" cy="8" r="1.5" fill="#4a4a4a" opacity="0.1" />
      {/* Company info */}
      <text
        x="8"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#2a2a2a"
      >
        {data.companyJa}
      </text>
      <text
        x="8"
        y="18"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        letterSpacing="0.2"
        fill="#888888"
      >
        {data.companyEn}
      </text>
      <line x1="8" y1="22" x2="50" y2="22" stroke="#ccccc4" strokeWidth="0.2" />
      {/* Contact */}
      <text
        x="8"
        y="28"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#777777"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="32"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#777777"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="36"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#777777"
      >
        {data.website}
      </text>
      <text
        x="8"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#aaaaaa"
      >
        〒{data.zipCode}
      </text>
      <text
        x="8"
        y="48"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#aaaaaa"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 3. FOCUS (焦) — Focus ring / depth of field
// Sharp center, blurred edges effect
// ============================================================
const focusTemplate: TemplateDefinition = {
  id: 'photo-focus',
  name: 'FOCUS',
  nameJa: '焦',
  category: 'photo',
  designer: 'William Eggleston',
  description: '焦点を合わせる。鮮明と曖昧の境界線。',
  accentColor: '#D4A017',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="photo-focus-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="70%" stopColor="#f8f8f4" />
          <stop offset="100%" stopColor="#e8e8e0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#photo-focus-grad)" />
      {/* Focus ring marks */}
      <circle cx="45.5" cy="27.5" r="18" fill="none" stroke="#D4A017" strokeWidth="0.15" strokeDasharray="0.8 1.2" />
      <circle cx="45.5" cy="27.5" r="14" fill="none" stroke="#D4A017" strokeWidth="0.1" />
      {/* Center crosshair */}
      <line x1="43.5" y1="18" x2="43.5" y2="20" stroke="#D4A017" strokeWidth="0.15" />
      <line x1="47.5" y1="18" x2="47.5" y2="20" stroke="#D4A017" strokeWidth="0.15" />
      {/* Name - sharp in center */}
      <text
        x="45.5"
        y="25"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="5.5"
        letterSpacing="0.8"
        fill="#1a1a1a"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.4"
        fill="#555555"
      >
        {data.nameEn}
      </text>
      {/* Faded edges - title */}
      <text
        x="45.5"
        y="37"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#bbbbbb"
      >
        {data.titleJa}
      </text>
      {/* Focus distance marker */}
      <text
        x="83"
        y="50"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1"
        fill="#D4A017"
        opacity="0.5"
      >
        f/1.4
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#fafaf6" />
      {/* Focus bracket marks in corners */}
      <path d="M 6,6 L 6,10" fill="none" stroke="#D4A017" strokeWidth="0.2" />
      <path d="M 6,6 L 10,6" fill="none" stroke="#D4A017" strokeWidth="0.2" />
      <path d="M 85,6 L 85,10" fill="none" stroke="#D4A017" strokeWidth="0.2" />
      <path d="M 85,6 L 81,6" fill="none" stroke="#D4A017" strokeWidth="0.2" />
      <path d="M 6,49 L 6,45" fill="none" stroke="#D4A017" strokeWidth="0.2" />
      <path d="M 6,49 L 10,49" fill="none" stroke="#D4A017" strokeWidth="0.2" />
      <path d="M 85,49 L 85,45" fill="none" stroke="#D4A017" strokeWidth="0.2" />
      <path d="M 85,49 L 81,49" fill="none" stroke="#D4A017" strokeWidth="0.2" />
      {/* Company */}
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#2a2a2a"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="18.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#888888"
      >
        {data.companyEn}
      </text>
      <line x1="30" y1="22" x2="61" y2="22" stroke="#D4A017" strokeWidth="0.1" />
      {/* Contact centered */}
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#666666"
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
        fill="#666666"
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
        fill="#666666"
      >
        {data.website}
      </text>
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#aaaaaa"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 4. EXPOSURE (露) — Light exposure / high-key inspired
// Overexposed whites with subtle detail
// ============================================================
const exposureTemplate: TemplateDefinition = {
  id: 'photo-exposure',
  name: 'EXPOSURE',
  nameJa: '露',
  category: 'photo',
  designer: 'Michael Kenna',
  description: '露出の極み。白飛びの中に浮かぶ文字の残像。',
  accentColor: '#c8c8c0',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="photo-exposure-fg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#fefefe" />
          <stop offset="100%" stopColor="#f0f0ec" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#photo-exposure-fg)" />
      {/* Overexposure light flare */}
      <circle cx="20" cy="15" r="25" fill="#ffffff" opacity="0.4" />
      {/* Exposure meter bar at top */}
      <rect x="10" y="4" width="71" height="0.3" fill="#e0e0d8" />
      <rect x="10" y="4" width="50" height="0.3" fill="#c8c8c0" />
      <rect x="58" y="3.5" width="0.3" height="1.3" fill="#8B0000" opacity="0.5" />
      {/* Name */}
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="6.5"
        letterSpacing="1"
        fill="#c8c8c0"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="2"
        letterSpacing="0.6"
        fill="#d0d0c8"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="37"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#dddddd"
      >
        {data.titleJa}
      </text>
      {/* EV value */}
      <text
        x="81"
        y="51"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="0.9"
        fill="#dddddd"
      >
        EV +2.0
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#fafaf8" />
      {/* Subtle exposure gradient */}
      <rect x="0" y="0" width="91" height="8" fill="#f5f5f0" opacity="0.5" />
      {/* Company */}
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2.2"
        fill="#999999"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#bbbbbb"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="22" x2="40" y2="22" stroke="#e0e0d8" strokeWidth="0.15" />
      <text
        x="10"
        y="28"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#aaaaaa"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#aaaaaa"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#aaaaaa"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#cccccc"
      >
        〒{data.zipCode}
      </text>
      <text
        x="10"
        y="48"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#cccccc"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 5. FRAME-P (枠) — Picture frame / viewfinder
// Viewfinder frame with info display overlay
// ============================================================
const framePTemplate: TemplateDefinition = {
  id: 'photo-frame-p',
  name: 'FRAME-P',
  nameJa: '枠',
  category: 'photo',
  designer: 'Sebastião Salgado',
  description: 'ファインダーの枠。世界を切り取る四角い窓。',
  accentColor: '#333333',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1a1a1a" />
      {/* Viewfinder frame */}
      <rect x="8" y="6" width="75" height="43" fill="none" stroke="#555555" strokeWidth="0.3" />
      {/* Corner brackets */}
      <path d="M 8,6 L 14,6" fill="none" stroke="#ffffff" strokeWidth="0.5" />
      <path d="M 8,6 L 8,12" fill="none" stroke="#ffffff" strokeWidth="0.5" />
      <path d="M 83,6 L 77,6" fill="none" stroke="#ffffff" strokeWidth="0.5" />
      <path d="M 83,6 L 83,12" fill="none" stroke="#ffffff" strokeWidth="0.5" />
      <path d="M 8,49 L 14,49" fill="none" stroke="#ffffff" strokeWidth="0.5" />
      <path d="M 8,49 L 8,43" fill="none" stroke="#ffffff" strokeWidth="0.5" />
      <path d="M 83,49 L 77,49" fill="none" stroke="#ffffff" strokeWidth="0.5" />
      <path d="M 83,49 L 83,43" fill="none" stroke="#ffffff" strokeWidth="0.5" />
      {/* Center focus point */}
      <rect x="43.5" y="25.5" width="4" height="4" fill="none" stroke="#8B0000" strokeWidth="0.3" />
      {/* Name */}
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5"
        fill="#ffffff"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.4"
        fill="#888888"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Viewfinder info overlay */}
      <text
        x="12"
        y="47"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="0.9"
        fill="#8B0000"
      >
        ● REC
      </text>
      <text
        x="78"
        y="10"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="0.9"
        fill="#555555"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1a1a1a" />
      {/* Subtle frame */}
      <rect x="8" y="6" width="75" height="43" fill="none" stroke="#333333" strokeWidth="0.2" />
      {/* Company */}
      <text
        x="14"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#ffffff"
      >
        {data.companyJa}
      </text>
      <text
        x="14"
        y="18"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#666666"
      >
        {data.companyEn}
      </text>
      <line x1="14" y1="22" x2="77" y2="22" stroke="#333333" strokeWidth="0.15" />
      {/* Contact */}
      <text
        x="14"
        y="28"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#888888"
      >
        {data.tel}
      </text>
      <text
        x="14"
        y="32"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#888888"
      >
        {data.email}
      </text>
      <text
        x="14"
        y="36"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#888888"
      >
        {data.website}
      </text>
      <text
        x="14"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#555555"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 6. CROP (切) — Crop marks / print registration
// Print crop marks at edges with precise registration
// ============================================================
const cropTemplate: TemplateDefinition = {
  id: 'photo-crop',
  name: 'CROP',
  nameJa: '切',
  category: 'photo',
  designer: 'Irving Penn',
  description: '切り取り線。印刷の精密さが生むデザイン。',
  accentColor: '#1a1a1a',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Crop marks - corners */}
      <line x1="0" y1="5" x2="4" y2="5" stroke="#1a1a1a" strokeWidth="0.15" />
      <line x1="5" y1="0" x2="5" y2="4" stroke="#1a1a1a" strokeWidth="0.15" />
      <line x1="87" y1="5" x2="91" y2="5" stroke="#1a1a1a" strokeWidth="0.15" />
      <line x1="86" y1="0" x2="86" y2="4" stroke="#1a1a1a" strokeWidth="0.15" />
      <line x1="0" y1="50" x2="4" y2="50" stroke="#1a1a1a" strokeWidth="0.15" />
      <line x1="5" y1="51" x2="5" y2="55" stroke="#1a1a1a" strokeWidth="0.15" />
      <line x1="87" y1="50" x2="91" y2="50" stroke="#1a1a1a" strokeWidth="0.15" />
      <line x1="86" y1="51" x2="86" y2="55" stroke="#1a1a1a" strokeWidth="0.15" />
      {/* Registration circles */}
      <circle cx="45.5" cy="3" r="1" fill="none" stroke="#1a1a1a" strokeWidth="0.1" />
      <line x1="44.5" y1="3" x2="46.5" y2="3" stroke="#1a1a1a" strokeWidth="0.1" />
      <line x1="45.5" y1="2" x2="45.5" y2="4" stroke="#1a1a1a" strokeWidth="0.1" />
      <circle cx="45.5" cy="52" r="1" fill="none" stroke="#1a1a1a" strokeWidth="0.1" />
      <line x1="44.5" y1="52" x2="46.5" y2="52" stroke="#1a1a1a" strokeWidth="0.1" />
      <line x1="45.5" y1="51" x2="45.5" y2="53" stroke="#1a1a1a" strokeWidth="0.1" />
      {/* Content area */}
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.6"
        fill="#1a1a1a"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.4"
        fill="#666666"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#999999"
      >
        {data.titleJa}
      </text>
      {/* Color bar at bottom */}
      <rect x="15" y="44" width="4" height="1.5" fill="#00ffff" opacity="0.3" />
      <rect x="20" y="44" width="4" height="1.5" fill="#ff00ff" opacity="0.3" />
      <rect x="25" y="44" width="4" height="1.5" fill="#ffff00" opacity="0.3" />
      <rect x="30" y="44" width="4" height="1.5" fill="#000000" opacity="0.3" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Crop marks */}
      <line x1="0" y1="5" x2="4" y2="5" stroke="#1a1a1a" strokeWidth="0.15" />
      <line x1="5" y1="0" x2="5" y2="4" stroke="#1a1a1a" strokeWidth="0.15" />
      <line x1="87" y1="5" x2="91" y2="5" stroke="#1a1a1a" strokeWidth="0.15" />
      <line x1="86" y1="0" x2="86" y2="4" stroke="#1a1a1a" strokeWidth="0.15" />
      <line x1="0" y1="50" x2="4" y2="50" stroke="#1a1a1a" strokeWidth="0.15" />
      <line x1="5" y1="51" x2="5" y2="55" stroke="#1a1a1a" strokeWidth="0.15" />
      <line x1="87" y1="50" x2="91" y2="50" stroke="#1a1a1a" strokeWidth="0.15" />
      <line x1="86" y1="51" x2="86" y2="55" stroke="#1a1a1a" strokeWidth="0.15" />
      {/* Company */}
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2"
        fill="#1a1a1a"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#888888"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="22" x2="81" y2="22" stroke="#e0e0e0" strokeWidth="0.1" />
      {/* Contact info */}
      <text
        x="10"
        y="28"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#555555"
      >
        TEL {data.tel}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#555555"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#555555"
      >
        {data.website}
      </text>
      <line x1="10" y1="40" x2="81" y2="40" stroke="#e0e0e0" strokeWidth="0.1" />
      <text
        x="10"
        y="45"
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
// 7. DARKROOM (暗) — Darkroom processing
// Red safelight ambience, chemical tray layout
// ============================================================
const darkroomTemplate: TemplateDefinition = {
  id: 'photo-darkroom',
  name: 'DARKROOM',
  nameJa: '暗',
  category: 'photo',
  designer: 'Ansel Adams',
  description: '暗室の赤い灯。現像液に浮かぶ像の美しさ。',
  accentColor: '#8B0000',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="photo-darkroom-safe" cx="50%" cy="50%" r="65%">
          <stop offset="0%" stopColor="#2a0808" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#photo-darkroom-safe)" />
      {/* Safelight glow */}
      <circle cx="80" cy="5" r="8" fill="#8B0000" opacity="0.08" />
      <circle cx="80" cy="5" r="3" fill="#8B0000" opacity="0.12" />
      {/* Developing tray border */}
      <rect x="6" y="10" width="79" height="35" fill="none" stroke="#8B0000" strokeWidth="0.2" opacity="0.3" />
      {/* Text emerging like a developing print */}
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="6"
        letterSpacing="0.8"
        fill="#8B0000"
        opacity="0.9"
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
        letterSpacing="0.5"
        fill="#661111"
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
        fill="#441111"
      >
        {data.titleJa}
      </text>
      {/* Timer display */}
      <text
        x="81"
        y="48"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="0.8"
        fill="#8B0000"
        opacity="0.4"
      >
        00:45
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0f0505" />
      {/* Safelight lines */}
      <line x1="0" y1="8" x2="91" y2="8" stroke="#8B0000" strokeWidth="0.08" opacity="0.3" />
      <line x1="0" y1="46" x2="91" y2="46" stroke="#8B0000" strokeWidth="0.08" opacity="0.3" />
      {/* Company */}
      <text
        x="10"
        y="15"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#8B0000"
        opacity="0.8"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="19"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#661111"
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
        fill="#553333"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="30"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#553333"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="34"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#553333"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#441111"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 8. FILM-P (膜) — Film strip / negative
// Sprocket holes and frame numbers
// ============================================================
const filmPTemplate: TemplateDefinition = {
  id: 'photo-film-p',
  name: 'FILM-P',
  nameJa: '膜',
  category: 'photo',
  designer: 'Henri Cartier-Bresson',
  description: 'フィルムの質感。スプロケットが語る時間の記録。',
  accentColor: '#B8860B',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1c1c1c" />
      {/* Film strip left edge */}
      <rect x="0" y="0" width="8" height="55" fill="#111111" />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
        <rect key={`photo-film-p-ls-${i}`} x="2" y={2 + i * 4.2} width="3.5" height="2.2" rx="0.4" fill="#2a2a2a" />
      ))}
      {/* Film strip right edge */}
      <rect x="83" y="0" width="8" height="55" fill="#111111" />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
        <rect key={`photo-film-p-rs-${i}`} x="85.5" y={2 + i * 4.2} width="3.5" height="2.2" rx="0.4" fill="#2a2a2a" />
      ))}
      {/* Frame number */}
      <text
        x="5"
        y="5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.2"
        fill="#B8860B"
        opacity="0.6"
      >
        36A
      </text>
      {/* Content within film frame */}
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="0.6"
        fill="#e8e0d0"
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
        letterSpacing="0.4"
        fill="#B8860B"
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
        fill="#888880"
      >
        {data.titleJa}
      </text>
      {/* Film edge text */}
      <text
        x="45.5"
        y="49"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="0.9"
        fill="#B8860B"
        opacity="0.4"
      >
        KODAK TRI-X 400
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1c1c1c" />
      {/* Film strip edges */}
      <rect x="0" y="0" width="8" height="55" fill="#111111" />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
        <rect key={`photo-film-p-bls-${i}`} x="2" y={2 + i * 4.2} width="3.5" height="2.2" rx="0.4" fill="#2a2a2a" />
      ))}
      <rect x="83" y="0" width="8" height="55" fill="#111111" />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
        <rect key={`photo-film-p-brs-${i}`} x="85.5" y={2 + i * 4.2} width="3.5" height="2.2" rx="0.4" fill="#2a2a2a" />
      ))}
      {/* Company */}
      <text
        x="14"
        y="13"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#e8e0d0"
      >
        {data.companyJa}
      </text>
      <text
        x="14"
        y="17.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#888880"
      >
        {data.companyEn}
      </text>
      <line x1="14" y1="21" x2="78" y2="21" stroke="#333330" strokeWidth="0.15" />
      {/* Contact */}
      <text
        x="14"
        y="27"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#999990"
      >
        {data.tel}
      </text>
      <text
        x="14"
        y="31"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#999990"
      >
        {data.email}
      </text>
      <text
        x="14"
        y="35"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#999990"
      >
        {data.website}
      </text>
      <text
        x="14"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#666660"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 9. APERTURE (絞) — Aperture blade pattern
// Hexagonal aperture blades forming an iris
// ============================================================
const apertureTemplate: TemplateDefinition = {
  id: 'photo-aperture',
  name: 'APERTURE',
  nameJa: '絞',
  category: 'photo',
  designer: 'Fan Ho',
  description: '絞り羽根の六角形。光を制御する精密機構。',
  accentColor: '#4a5568',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f0f0ec" />
      {/* Aperture blades - hexagonal iris */}
      <defs>
        <clipPath id="photo-aperture-clip">
          <rect width="91" height="55" />
        </clipPath>
      </defs>
      <g opacity="0.08" clipPath="url(#photo-aperture-clip)">
        <polygon points="70,12 80,18 80,30 70,36 60,30 60,18" fill="#4a5568" />
        <polygon points="72,14 78,18 78,28 72,32 66,28 66,18" fill="none" stroke="#4a5568" strokeWidth="0.3" />
        <polygon points="74,16 76,18 76,26 74,28 72,26 72,18" fill="none" stroke="#4a5568" strokeWidth="0.2" />
      </g>
      {/* Additional aperture rings */}
      <circle cx="70" cy="24" r="16" fill="none" stroke="#d0d0cc" strokeWidth="0.15" />
      <circle cx="70" cy="24" r="12" fill="none" stroke="#d0d0cc" strokeWidth="0.2" />
      {/* Name */}
      <text
        x="10"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.4"
        fill="#2d3748"
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
        fill="#718096"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="33"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#a0aec0"
      >
        {data.titleJa}
      </text>
      {/* Aperture value */}
      <text
        x="10"
        y="48"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="0.9"
        fill="#a0aec0"
      >
        f/2.8
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f0f0ec" />
      {/* Small aperture icon */}
      <g opacity="0.1">
        <polygon points="80,8 83,10 83,14 80,16 77,14 77,10" fill="#4a5568" />
      </g>
      {/* Company */}
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#2d3748"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#718096"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="22" x2="55" y2="22" stroke="#cbd5e0" strokeWidth="0.15" />
      {/* Contact */}
      <text
        x="10"
        y="28"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#4a5568"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#4a5568"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#4a5568"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#a0aec0"
      >
        〒{data.zipCode}
      </text>
      <text
        x="10"
        y="48"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#a0aec0"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 10. MACRO (近) — Macro photography close-up
// Extreme detail, magnified grid pattern
// ============================================================
const macroTemplate: TemplateDefinition = {
  id: 'photo-macro',
  name: 'MACRO',
  nameJa: '近',
  category: 'photo',
  designer: 'Karl Blossfeldt',
  description: '接写の世界。拡大された細部が新たな宇宙を見せる。',
  accentColor: '#556B2F',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="photo-macro-bg" cx="30%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#f5f8f0" />
          <stop offset="100%" stopColor="#e8ece2" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#photo-macro-bg)" />
      {/* Magnification grid */}
      <g opacity="0.06">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <line key={`photo-macro-vh-${i}`} x1={i * 9.1} y1="0" x2={i * 9.1} y2="55" stroke="#556B2F" strokeWidth="0.1" />
        ))}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line key={`photo-macro-hh-${i}`} x1="0" y1={i * 9.17} x2="91" y2={i * 9.17} stroke="#556B2F" strokeWidth="0.1" />
        ))}
      </g>
      {/* Macro focus circle */}
      <circle cx="68" cy="20" r="14" fill="none" stroke="#556B2F" strokeWidth="0.15" opacity="0.15" />
      <circle cx="68" cy="20" r="10" fill="none" stroke="#556B2F" strokeWidth="0.1" opacity="0.2" />
      <circle cx="68" cy="20" r="6" fill="none" stroke="#556B2F" strokeWidth="0.1" opacity="0.25" />
      {/* Name */}
      <text
        x="10"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#3a4a2a"
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
        fill="#6b7b5b"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="35"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#8b9b7b"
      >
        {data.titleJa}
      </text>
      {/* Magnification ratio */}
      <text
        x="81"
        y="50"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="0.9"
        fill="#556B2F"
        opacity="0.4"
      >
        1:1 MACRO
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f5f8f0" />
      {/* Light grid */}
      <g opacity="0.04">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <line key={`photo-macro-bvh-${i}`} x1={i * 9.1} y1="0" x2={i * 9.1} y2="55" stroke="#556B2F" strokeWidth="0.1" />
        ))}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line key={`photo-macro-bhh-${i}`} x1="0" y1={i * 9.17} x2="91" y2={i * 9.17} stroke="#556B2F" strokeWidth="0.1" />
        ))}
      </g>
      {/* Company */}
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#3a4a2a"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#6b7b5b"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="22" x2="50" y2="22" stroke="#c0cbb0" strokeWidth="0.15" />
      {/* Contact */}
      <text
        x="10"
        y="28"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#556B2F"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#556B2F"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#556B2F"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#8b9b7b"
      >
        〒{data.zipCode}
      </text>
      <text
        x="10"
        y="48"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#8b9b7b"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

export const photoTemplates: TemplateDefinition[] = [
  shutterTemplate,
  lensTemplate,
  focusTemplate,
  exposureTemplate,
  framePTemplate,
  cropTemplate,
  darkroomTemplate,
  filmPTemplate,
  apertureTemplate,
  macroTemplate,
];
