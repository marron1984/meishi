import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. SPLASH (飛) — Paint splatter explosion
// ============================================================
const splashTemplate: TemplateDefinition = {
  id: 'pop-splash',
  name: 'SPLASH',
  nameJa: '飛',
  category: 'pop',
  designer: 'Splash Studio',
  description: '飛び散るペンキが弾けるエネルギー。',
  accentColor: '#FF1493',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Paint splashes */}
      <circle cx="15" cy="12" r="8" fill="#FF1493" opacity="0.2" />
      <circle cx="18" cy="10" r="5" fill="#FF1493" opacity="0.3" />
      <circle cx="12" cy="15" r="3" fill="#FF1493" opacity="0.15" />
      <circle cx="75" cy="42" r="10" fill="#00BFFF" opacity="0.15" />
      <circle cx="80" cy="38" r="6" fill="#00BFFF" opacity="0.25" />
      <circle cx="70" cy="45" r="4" fill="#00BFFF" opacity="0.12" />
      <circle cx="50" cy="8" r="5" fill="#FFD700" opacity="0.2" />
      <circle cx="55" cy="6" r="3" fill="#FFD700" opacity="0.25" />
      {/* Splash droplets */}
      <circle cx="25" cy="6" r="1" fill="#FF1493" opacity="0.3" />
      <circle cx="10" cy="22" r="0.8" fill="#FF1493" opacity="0.25" />
      <circle cx="65" cy="48" r="1.2" fill="#00BFFF" opacity="0.3" />
      <circle cx="85" cy="30" r="0.7" fill="#00BFFF" opacity="0.2" />
      <circle cx="42" cy="4" r="0.6" fill="#FFD700" opacity="0.3" />
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="7"
        letterSpacing="0.5"
        fill="#FF1493"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="34"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="700"
        fontSize="2.5"
        letterSpacing="0.3"
        fill="#00BFFF"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="41"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#666666"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Subtle splashes */}
      <circle cx="80" cy="8" r="6" fill="#FF1493" opacity="0.1" />
      <circle cx="10" cy="48" r="5" fill="#00BFFF" opacity="0.08" />
      <circle cx="70" cy="50" r="3" fill="#FFD700" opacity="0.1" />
      <text
        x="45.5"
        y="12"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="800"
        fontSize="2.5"
        fill="#FF1493"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="17"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="600"
        fontSize="1.5"
        fill="#00BFFF"
      >
        {data.companyEn}
      </text>
      <line x1="15" y1="20.5" x2="76" y2="20.5" stroke="#FF1493" strokeWidth="0.3" opacity="0.3" />
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.4"
        fill="#444444"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.4"
        fill="#444444"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="34"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.4"
        fill="#444444"
      >
        {data.website}
      </text>
      <line x1="15" y1="37.5" x2="76" y2="37.5" stroke="#00BFFF" strokeWidth="0.3" opacity="0.3" />
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.2"
        fill="#888888"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="47"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.2"
        fill="#888888"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 2. BUBBLE (泡) — Floating colorful soap bubbles
// ============================================================
const bubbleTemplate: TemplateDefinition = {
  id: 'pop-bubble',
  name: 'BUBBLE',
  nameJa: '泡',
  category: 'pop',
  designer: 'Bubble Studio',
  description: 'カラフルなシャボン玉が空中を舞う。',
  accentColor: '#9B59B6',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="pop-bubble-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fce4ec" />
          <stop offset="50%" stopColor="#e8eaf6" />
          <stop offset="100%" stopColor="#e0f7fa" />
        </linearGradient>
        <radialGradient id="pop-bubble-b1" cx="0.35" cy="0.3" r="0.5">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#9B59B6" stopOpacity="0.15" />
        </radialGradient>
        <radialGradient id="pop-bubble-b2" cx="0.35" cy="0.3" r="0.5">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#3498DB" stopOpacity="0.15" />
        </radialGradient>
        <radialGradient id="pop-bubble-b3" cx="0.35" cy="0.3" r="0.5">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#E91E63" stopOpacity="0.15" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#pop-bubble-bg)" />
      {/* Bubbles */}
      <circle cx="12" cy="10" r="7" fill="url(#pop-bubble-b1)" stroke="#9B59B6" strokeWidth="0.15" opacity="0.7" />
      <circle cx="78" cy="15" r="9" fill="url(#pop-bubble-b2)" stroke="#3498DB" strokeWidth="0.15" opacity="0.6" />
      <circle cx="20" cy="42" r="6" fill="url(#pop-bubble-b3)" stroke="#E91E63" strokeWidth="0.12" opacity="0.5" />
      <circle cx="82" cy="45" r="5" fill="url(#pop-bubble-b1)" stroke="#9B59B6" strokeWidth="0.1" opacity="0.4" />
      <circle cx="55" cy="5" r="4" fill="url(#pop-bubble-b2)" stroke="#3498DB" strokeWidth="0.1" opacity="0.45" />
      {/* Tiny bubbles */}
      <circle cx="35" cy="48" r="2" fill="url(#pop-bubble-b3)" stroke="#E91E63" strokeWidth="0.08" opacity="0.35" />
      <circle cx="65" cy="50" r="1.5" fill="url(#pop-bubble-b1)" stroke="#9B59B6" strokeWidth="0.06" opacity="0.3" />
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="6"
        letterSpacing="0.5"
        fill="#9B59B6"
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
        letterSpacing="0.3"
        fill="#3498DB"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="38"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#E91E63"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f8f0f8" />
      {/* Small decorative bubbles */}
      <circle cx="80" cy="10" r="4" fill="none" stroke="#9B59B6" strokeWidth="0.12" opacity="0.3" />
      <circle cx="10" cy="45" r="3" fill="none" stroke="#3498DB" strokeWidth="0.1" opacity="0.25" />
      <circle cx="75" cy="48" r="2" fill="none" stroke="#E91E63" strokeWidth="0.08" opacity="0.2" />
      <text
        x="45.5"
        y="12"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="2.2"
        fill="#9B59B6"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="16.5"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="1.5"
        fill="#3498DB"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="20" x2="71" y2="20" stroke="#E91E63" strokeWidth="0.2" opacity="0.3" />
      <text
        x="45.5"
        y="25.5"
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
        y="29.5"
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
        y="33.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#555555"
      >
        {data.website}
      </text>
      <line x1="20" y1="37" x2="71" y2="37" stroke="#9B59B6" strokeWidth="0.2" opacity="0.3" />
      <text
        x="45.5"
        y="42"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.2"
        fill="#888888"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="46"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.2"
        fill="#888888"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 3. COMIC (漫) — Comic panel style with speech bubbles
// ============================================================
const comicTemplate: TemplateDefinition = {
  id: 'pop-comic',
  name: 'COMIC',
  nameJa: '漫',
  category: 'pop',
  designer: 'Comic Studio',
  description: 'コミックの一コマから飛び出す躍動感。',
  accentColor: '#FF4444',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFEB3B" />
      {/* Halftone dot pattern background */}
      {[...Array(6)].map((_, row) =>
        [...Array(10)].map((_, col) => (
          <circle
            key={`pop-comic-dot-${row}-${col}`}
            cx={5 + col * 9}
            cy={5 + row * 10}
            r="1"
            fill="#FF4444"
            opacity="0.08"
          />
        ))
      )}
      {/* Bold comic border */}
      <rect x="3" y="2" width="85" height="51" fill="none" stroke="#000000" strokeWidth="0.8" />
      {/* Speech bubble shape for name */}
      <path d="M15,12 Q15,8 20,8 L72,8 Q77,8 77,12 L77,30 Q77,34 72,34 L35,34 L28,40 L30,34 L20,34 Q15,34 15,30 Z" fill="#ffffff" stroke="#000000" strokeWidth="0.4" />
      <text
        x="46"
        y="20"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="6"
        letterSpacing="0.3"
        fill="#FF4444"
      >
        {data.nameJa}
      </text>
      <text
        x="46"
        y="27"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="700"
        fontSize="2"
        letterSpacing="0.3"
        fill="#333333"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="65"
        y="45"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="1.6"
        fill="#333333"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFEB3B" />
      {/* Halftone dots */}
      {[...Array(6)].map((_, row) =>
        [...Array(10)].map((_, col) => (
          <circle
            key={`pop-comic-dotb-${row}-${col}`}
            cx={5 + col * 9}
            cy={5 + row * 10}
            r="0.8"
            fill="#FF4444"
            opacity="0.06"
          />
        ))
      )}
      <rect x="3" y="2" width="85" height="51" fill="none" stroke="#000000" strokeWidth="0.8" />
      {/* Company panel */}
      <rect x="10" y="6" width="71" height="10" fill="#ffffff" stroke="#000000" strokeWidth="0.3" />
      <text
        x="45.5"
        y="12"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="2.5"
        fill="#FF4444"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="20"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="600"
        fontSize="1.5"
        fill="#333333"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="23" x2="81" y2="23" stroke="#000000" strokeWidth="0.3" />
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="1.4"
        fill="#333333"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="1.4"
        fill="#333333"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="1.4"
        fill="#333333"
      >
        {data.website}
      </text>
      <line x1="10" y1="39" x2="81" y2="39" stroke="#000000" strokeWidth="0.3" />
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="1.2"
        fill="#555555"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="48"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="1.2"
        fill="#555555"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 4. CANDY (菓) — Sweet candy stripes and bright colors
// ============================================================
const candyTemplate: TemplateDefinition = {
  id: 'pop-candy',
  name: 'CANDY',
  nameJa: '菓',
  category: 'pop',
  designer: 'Candy Studio',
  description: 'キャンディのように甘くカラフルなデザイン。',
  accentColor: '#FF69B4',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#fff0f5" />
      {/* Candy stripes - diagonal */}
      <defs>
        <pattern id="pop-candy-stripes" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="3" height="6" fill="#FF69B4" opacity="0.08" />
          <rect x="3" width="3" height="6" fill="#ffffff" opacity="0" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#pop-candy-stripes)" />
      {/* Candy circles decoration */}
      <circle cx="10" cy="8" r="4" fill="#FF69B4" opacity="0.15" />
      <circle cx="82" cy="8" r="3" fill="#87CEEB" opacity="0.15" />
      <circle cx="8" cy="48" r="3" fill="#98FB98" opacity="0.12" />
      <circle cx="84" cy="48" r="4" fill="#DDA0DD" opacity="0.12" />
      {/* Lollipop swirl */}
      <circle cx="80" cy="10" r="5" fill="none" stroke="#FF69B4" strokeWidth="0.3" opacity="0.2" />
      <path d="M80,5 Q85,10 80,15" fill="none" stroke="#87CEEB" strokeWidth="0.2" opacity="0.2" />
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="6.5"
        letterSpacing="0.5"
        fill="#FF69B4"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="600"
        fontSize="2.2"
        letterSpacing="0.3"
        fill="#87CEEB"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="40"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#DDA0DD"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#fff0f5" />
      <defs>
        <pattern id="pop-candy-stripes-b" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
          <rect width="3" height="6" fill="#87CEEB" opacity="0.06" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#pop-candy-stripes-b)" />
      <text
        x="45.5"
        y="12"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="2.2"
        fill="#FF69B4"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="16.5"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="1.5"
        fill="#87CEEB"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="20" x2="71" y2="20" stroke="#FF69B4" strokeWidth="0.2" opacity="0.4" />
      <text
        x="45.5"
        y="25.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.4"
        fill="#cc5590"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="29.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.4"
        fill="#cc5590"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="33.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.4"
        fill="#cc5590"
      >
        {data.website}
      </text>
      <line x1="20" y1="37" x2="71" y2="37" stroke="#87CEEB" strokeWidth="0.2" opacity="0.4" />
      <text
        x="45.5"
        y="42"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.2"
        fill="#DDA0DD"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="46"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.2"
        fill="#DDA0DD"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 5. PIXEL (粒) — Pixel art grid pattern
// ============================================================
const pixelTemplate: TemplateDefinition = {
  id: 'pop-pixel',
  name: 'PIXEL',
  nameJa: '粒',
  category: 'pop',
  designer: 'Pixel Studio',
  description: 'ピクセルの一粒一粒が世界を構成する。',
  accentColor: '#00CC44',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#111111" />
      {/* Pixel grid pattern */}
      {[...Array(5)].map((_, row) =>
        [...Array(8)].map((_, col) => (
          <rect
            key={`pop-pixel-g-${row}-${col}`}
            x={3 + col * 11}
            y={3 + row * 11}
            width="9"
            height="9"
            fill="#1a1a1a"
            stroke="#222222"
            strokeWidth="0.15"
          />
        ))
      )}
      {/* Colored pixels scattered */}
      <rect x="3" y="3" width="9" height="9" fill="#00CC44" opacity="0.3" />
      <rect x="25" y="3" width="9" height="9" fill="#FF4444" opacity="0.2" />
      <rect x="69" y="3" width="9" height="9" fill="#4444FF" opacity="0.25" />
      <rect x="80" y="14" width="9" height="9" fill="#FFCC00" opacity="0.2" />
      <rect x="3" y="36" width="9" height="9" fill="#FF44FF" opacity="0.2" />
      <rect x="14" y="47" width="9" height="9" fill="#00CCFF" opacity="0.25" />
      <rect x="69" y="47" width="9" height="9" fill="#00CC44" opacity="0.2" />
      <rect x="80" y="36" width="9" height="9" fill="#FF4444" opacity="0.15" />
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="800"
        fontSize="6"
        letterSpacing="0.5"
        fill="#00CC44"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="600"
        fontSize="2.2"
        letterSpacing="0.4"
        fill="#00ff55"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="40"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#00aa33"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#111111" />
      {/* Subtle pixel grid */}
      {[...Array(5)].map((_, row) =>
        [...Array(8)].map((_, col) => (
          <rect
            key={`pop-pixel-gb-${row}-${col}`}
            x={3 + col * 11}
            y={3 + row * 11}
            width="9"
            height="9"
            fill="none"
            stroke="#1a1a1a"
            strokeWidth="0.1"
          />
        ))
      )}
      <text
        x="45.5"
        y="12"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="2.2"
        fill="#00CC44"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="16.5"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="1.5"
        fill="#00aa33"
      >
        {data.companyEn}
      </text>
      <line x1="15" y1="20" x2="76" y2="20" stroke="#00CC44" strokeWidth="0.2" opacity="0.4" />
      <text
        x="45.5"
        y="25.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#00ff55"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="29.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#00ff55"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="33.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#00ff55"
      >
        {data.website}
      </text>
      <line x1="15" y1="37" x2="76" y2="37" stroke="#00CC44" strokeWidth="0.2" opacity="0.4" />
      <text
        x="45.5"
        y="42.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.2"
        fill="#00aa33"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="46.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.2"
        fill="#00aa33"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 6. STICKER (貼) — Peeled sticker with white border
// ============================================================
const stickerTemplate: TemplateDefinition = {
  id: 'pop-sticker',
  name: 'STICKER',
  nameJa: '貼',
  category: 'pop',
  designer: 'Sticker Studio',
  description: 'ペタッと貼れるステッカーのような存在感。',
  accentColor: '#FF6600',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f5f5f5" />
      {/* Sticker shape with thick white border */}
      <rect x="8" y="5" width="75" height="45" rx="6" fill="#FF6600" />
      <rect x="10" y="7" width="71" height="41" rx="5" fill="#FF6600" />
      {/* White border between */}
      <rect x="8" y="5" width="75" height="45" rx="6" fill="none" stroke="#ffffff" strokeWidth="1.5" />
      {/* Subtle peel shadow */}
      <path d="M76,45 Q80,44 83,48 Q82,50 78,50 Z" fill="#cccccc" opacity="0.3" />
      {/* Sticker shine */}
      <ellipse cx="30" cy="12" rx="15" ry="4" fill="#ffffff" opacity="0.1" transform="rotate(-10 30 12)" />
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="800"
        fontSize="6"
        letterSpacing="0.5"
        fill="#ffffff"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="600"
        fontSize="2.2"
        letterSpacing="0.3"
        fill="#ffe0c0"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="40"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#ffccaa"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f5f5f5" />
      {/* Sticker shape back */}
      <rect x="8" y="5" width="75" height="45" rx="6" fill="#ffffff" stroke="#FF6600" strokeWidth="0.5" />
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="2.2"
        fill="#FF6600"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="18.5"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="1.5"
        fill="#cc5500"
      >
        {data.companyEn}
      </text>
      <line x1="18" y1="22" x2="73" y2="22" stroke="#FF6600" strokeWidth="0.2" opacity="0.4" />
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.4"
        fill="#555555"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.4"
        fill="#555555"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.4"
        fill="#555555"
      >
        {data.website}
      </text>
      <line x1="18" y1="38.5" x2="73" y2="38.5" stroke="#FF6600" strokeWidth="0.2" opacity="0.4" />
      <text
        x="45.5"
        y="43.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.2"
        fill="#888888"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="47.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.2"
        fill="#888888"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 7. HALFTONE (網) — Large halftone dot pattern
// ============================================================
const halftoneTemplate: TemplateDefinition = {
  id: 'pop-halftone',
  name: 'HALFTONE',
  nameJa: '網',
  category: 'pop',
  designer: 'Halftone Studio',
  description: '網点の集合が生み出すポップな世界。',
  accentColor: '#E91E63',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Large halftone dots - gradient from large to small */}
      {[...Array(8)].map((_, row) =>
        [...Array(12)].map((_, col) => {
          const dist = Math.sqrt(Math.pow(col - 2, 2) + Math.pow(row - 1, 2));
          const r = Math.max(0.2, 2.5 - dist * 0.3);
          return (
            <circle
              key={`pop-half-d-${row}-${col}`}
              cx={4 + col * 7.5}
              cy={4 + row * 7}
              r={r}
              fill="#E91E63"
              opacity={Math.max(0.05, 0.3 - dist * 0.03)}
            />
          );
        })
      )}
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="7"
        letterSpacing="0.5"
        fill="#E91E63"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="33"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="700"
        fontSize="2.5"
        letterSpacing="0.4"
        fill="#333333"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="41"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#999999"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Halftone dots - corner pattern */}
      {[...Array(5)].map((_, row) =>
        [...Array(5)].map((_, col) => (
          <circle
            key={`pop-half-db-${row}-${col}`}
            cx={70 + col * 5}
            cy={35 + row * 5}
            r={1.5 - (row + col) * 0.15}
            fill="#E91E63"
            opacity={0.15 - (row + col) * 0.015}
          />
        ))
      )}
      <text
        x="45.5"
        y="12"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="800"
        fontSize="2.5"
        fill="#E91E63"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="17"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="600"
        fontSize="1.5"
        fill="#666666"
      >
        {data.companyEn}
      </text>
      <line x1="15" y1="20.5" x2="76" y2="20.5" stroke="#E91E63" strokeWidth="0.3" />
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.4"
        fill="#444444"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.4"
        fill="#444444"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="34"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.4"
        fill="#444444"
      >
        {data.website}
      </text>
      <line x1="15" y1="37.5" x2="76" y2="37.5" stroke="#E91E63" strokeWidth="0.3" />
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.2"
        fill="#888888"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="47"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.2"
        fill="#888888"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 8. WARHOL (複) — Warhol multi-color repeated pattern
// ============================================================
const warholTemplate: TemplateDefinition = {
  id: 'pop-warhol',
  name: 'WARHOL',
  nameJa: '複',
  category: 'pop',
  designer: 'Warhol Studio',
  description: 'ウォーホルの複製芸術が名刺に宿る。',
  accentColor: '#FF4081',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Four color quadrants */}
      <rect x="0" y="0" width="45.5" height="27.5" fill="#FF4081" opacity="0.08" />
      <rect x="45.5" y="0" width="45.5" height="27.5" fill="#536DFE" opacity="0.08" />
      <rect x="0" y="27.5" width="45.5" height="27.5" fill="#FFAB40" opacity="0.08" />
      <rect x="45.5" y="27.5" width="45.5" height="27.5" fill="#69F0AE" opacity="0.08" />
      {/* Grid lines */}
      <line x1="45.5" y1="0" x2="45.5" y2="55" stroke="#000000" strokeWidth="0.15" opacity="0.1" />
      <line x1="0" y1="27.5" x2="91" y2="27.5" stroke="#000000" strokeWidth="0.15" opacity="0.1" />
      {/* Name repeated in each quadrant */}
      <text x="22.75" y="14" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="800" fontSize="3.5" fill="#FF4081" opacity="0.5">
        {data.nameJa}
      </text>
      <text x="68.25" y="14" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="800" fontSize="3.5" fill="#536DFE" opacity="0.5">
        {data.nameJa}
      </text>
      <text x="22.75" y="42" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="800" fontSize="3.5" fill="#FFAB40" opacity="0.5">
        {data.nameJa}
      </text>
      <text x="68.25" y="42" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="800" fontSize="3.5" fill="#69F0AE" opacity="0.5">
        {data.nameJa}
      </text>
      {/* Center overlay */}
      <rect x="20" y="18" width="51" height="19" fill="#ffffff" opacity="0.85" />
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="5"
        fill="#333333"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="33"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="600"
        fontSize="1.8"
        fill="#FF4081"
      >
        {data.nameEn.toUpperCase()}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Subtle quadrant tints */}
      <rect x="0" y="0" width="45.5" height="27.5" fill="#FF4081" opacity="0.04" />
      <rect x="45.5" y="0" width="45.5" height="27.5" fill="#536DFE" opacity="0.04" />
      <rect x="0" y="27.5" width="45.5" height="27.5" fill="#FFAB40" opacity="0.04" />
      <rect x="45.5" y="27.5" width="45.5" height="27.5" fill="#69F0AE" opacity="0.04" />
      <text
        x="45.5"
        y="12"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="800"
        fontSize="2.5"
        fill="#FF4081"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="17"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="600"
        fontSize="1.5"
        fill="#536DFE"
      >
        {data.companyEn}
      </text>
      <line x1="15" y1="20.5" x2="76" y2="20.5" stroke="#FF4081" strokeWidth="0.2" />
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.4"
        fill="#555555"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.4"
        fill="#555555"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="34"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.4"
        fill="#555555"
      >
        {data.website}
      </text>
      <line x1="15" y1="37.5" x2="76" y2="37.5" stroke="#536DFE" strokeWidth="0.2" />
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.2"
        fill="#888888"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="47"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.2"
        fill="#888888"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 9. BANG (爆) — Explosive starburst with bold text
// ============================================================
const bangTemplate: TemplateDefinition = {
  id: 'pop-bang',
  name: 'BANG',
  nameJa: '爆',
  category: 'pop',
  designer: 'Bang Studio',
  description: '爆発的なスターバーストが目を引く。',
  accentColor: '#FF0000',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFDD00" />
      {/* Explosion starburst */}
      <polygon
        points="45.5,2 50,14 62,5 54,17 68,14 56,22 70,27 56,28 65,38 53,33 55,47 45.5,37 36,47 38,33 26,38 35,28 21,27 35,22 23,14 37,17 29,5 41,14"
        fill="#FF0000"
        opacity="0.15"
      />
      <polygon
        points="45.5,8 49,16 57,10 52,19 62,17 54,23 63,27 54,28 60,35 51,31 52,41 45.5,34 39,41 40,31 31,35 37,28 28,27 37,23 29,17 39,19 34,10 42,16"
        fill="#FF0000"
        opacity="0.1"
      />
      {/* Bold border */}
      <rect x="2" y="1" width="87" height="53" fill="none" stroke="#FF0000" strokeWidth="0.8" />
      <text
        x="45.5"
        y="25"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="7"
        letterSpacing="0.5"
        fill="#FF0000"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="33"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="800"
        fontSize="2.5"
        letterSpacing="0.3"
        fill="#000000"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="42"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="1.6"
        fill="#cc0000"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFDD00" />
      <rect x="2" y="1" width="87" height="53" fill="none" stroke="#FF0000" strokeWidth="0.6" />
      {/* Small starburst */}
      <polygon points="45.5,3 47,5 49,3 48,5.5 50,6 48,7 49,9 47,7.5 45.5,9 44,7.5 42,9 43,7 41,6 43,5.5 42,3 44,5" fill="#FF0000" opacity="0.2" />
      <text
        x="45.5"
        y="15"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="2.5"
        fill="#FF0000"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="20"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="700"
        fontSize="1.5"
        fill="#000000"
      >
        {data.companyEn}
      </text>
      <line x1="12" y1="23.5" x2="79" y2="23.5" stroke="#FF0000" strokeWidth="0.3" />
      <text
        x="45.5"
        y="28.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="1.4"
        fill="#333333"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="32.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="1.4"
        fill="#333333"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="36.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="1.4"
        fill="#333333"
      >
        {data.website}
      </text>
      <line x1="12" y1="40" x2="79" y2="40" stroke="#FF0000" strokeWidth="0.3" />
      <text
        x="45.5"
        y="45"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="1.2"
        fill="#cc0000"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 10. RAINBOW (虹) — Rainbow gradient stripe pattern
// ============================================================
const rainbowTemplate: TemplateDefinition = {
  id: 'pop-rainbow',
  name: 'RAINBOW',
  nameJa: '虹',
  category: 'pop',
  designer: 'Rainbow Studio',
  description: '七色の虹が架ける希望の橋。',
  accentColor: '#FF6B6B',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      <defs>
        <linearGradient id="pop-rainbow-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FF6B6B" />
          <stop offset="16%" stopColor="#FFA500" />
          <stop offset="33%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#4CAF50" />
          <stop offset="66%" stopColor="#2196F3" />
          <stop offset="83%" stopColor="#3F51B5" />
          <stop offset="100%" stopColor="#9C27B0" />
        </linearGradient>
      </defs>
      {/* Rainbow stripes at top */}
      <rect x="0" y="0" width="91" height="1.2" fill="#FF6B6B" />
      <rect x="0" y="1.2" width="91" height="1.2" fill="#FFA500" />
      <rect x="0" y="2.4" width="91" height="1.2" fill="#FFD700" />
      <rect x="0" y="3.6" width="91" height="1.2" fill="#4CAF50" />
      <rect x="0" y="4.8" width="91" height="1.2" fill="#2196F3" />
      <rect x="0" y="6" width="91" height="1.2" fill="#3F51B5" />
      <rect x="0" y="7.2" width="91" height="1.2" fill="#9C27B0" />
      {/* Rainbow stripes at bottom */}
      <rect x="0" y="46.6" width="91" height="1.2" fill="#9C27B0" />
      <rect x="0" y="47.8" width="91" height="1.2" fill="#3F51B5" />
      <rect x="0" y="49" width="91" height="1.2" fill="#2196F3" />
      <rect x="0" y="50.2" width="91" height="1.2" fill="#4CAF50" />
      <rect x="0" y="51.4" width="91" height="1.2" fill="#FFD700" />
      <rect x="0" y="52.6" width="91" height="1.2" fill="#FFA500" />
      <rect x="0" y="53.8" width="91" height="1.2" fill="#FF6B6B" />
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="800"
        fontSize="6.5"
        letterSpacing="0.5"
        fill="url(#pop-rainbow-grad)"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="600"
        fontSize="2.2"
        letterSpacing="0.3"
        fill="#333333"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="40"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#666666"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Left rainbow edge */}
      <rect x="0" y="0" width="1" height="55" fill="#FF6B6B" />
      <rect x="1" y="0" width="1" height="55" fill="#FFA500" />
      <rect x="2" y="0" width="1" height="55" fill="#FFD700" />
      <rect x="3" y="0" width="1" height="55" fill="#4CAF50" />
      <rect x="4" y="0" width="1" height="55" fill="#2196F3" />
      <rect x="5" y="0" width="1" height="55" fill="#3F51B5" />
      <rect x="6" y="0" width="1" height="55" fill="#9C27B0" />
      <text
        x="50"
        y="13"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="2.2"
        fill="#FF6B6B"
      >
        {data.companyJa}
      </text>
      <text
        x="50"
        y="17.5"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="1.5"
        fill="#3F51B5"
      >
        {data.companyEn}
      </text>
      <line x1="15" y1="21" x2="85" y2="21" stroke="#4CAF50" strokeWidth="0.2" opacity="0.5" />
      <text
        x="50"
        y="26.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.4"
        fill="#555555"
      >
        {data.tel}
      </text>
      <text
        x="50"
        y="30.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.4"
        fill="#555555"
      >
        {data.email}
      </text>
      <text
        x="50"
        y="34.5"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.4"
        fill="#555555"
      >
        {data.website}
      </text>
      <line x1="15" y1="38" x2="85" y2="38" stroke="#FFA500" strokeWidth="0.2" opacity="0.5" />
      <text
        x="50"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.2"
        fill="#888888"
      >
        〒{data.zipCode}
      </text>
      <text
        x="50"
        y="47"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.2"
        fill="#888888"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

export const popTemplates: TemplateDefinition[] = [
  splashTemplate,
  bubbleTemplate,
  comicTemplate,
  candyTemplate,
  pixelTemplate,
  stickerTemplate,
  halftoneTemplate,
  warholTemplate,
  bangTemplate,
  rainbowTemplate,
];
