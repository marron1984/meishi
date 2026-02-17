import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. VOID (余白) — Kenya Hara inspired
// Ultra-white, centered name only on front, minimal contact on back
// ============================================================
const voidTemplate: TemplateDefinition = {
  id: 'minimal-void',
  name: 'VOID',
  nameJa: '余白',
  category: 'minimal',
  designer: 'Kenya Hara',
  description: '極限の余白。白の中に名前だけが静かに浮かぶ。',
  accentColor: '#1a1a1a',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="minimal-void-paper"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="minimal-void-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.3" result="blur"/><feOffset dx="0.1" dy="0.15" result="shifted"/><feFlood floodColor="#000000" floodOpacity="0.08" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <rect width="91" height="55" fill="#fafaf8" filter="url(#minimal-void-paper)" />
      {/* Subtle margin guides */}
      <line x1="7" y1="0" x2="7" y2="55" stroke="#e8e6e2" strokeWidth="0.08" />
      <line x1="84" y1="0" x2="84" y2="55" stroke="#e8e6e2" strokeWidth="0.08" />
      <line x1="0" y1="7" x2="91" y2="7" stroke="#e8e6e2" strokeWidth="0.08" />
      <line x1="0" y1="48" x2="91" y2="48" stroke="#e8e6e2" strokeWidth="0.08" />
      {/* Corner marks */}
      <line x1="7" y1="7" x2="9" y2="7" stroke="#d0cec8" strokeWidth="0.06" />
      <line x1="7" y1="7" x2="7" y2="9" stroke="#d0cec8" strokeWidth="0.06" />
      <line x1="84" y1="7" x2="82" y2="7" stroke="#d0cec8" strokeWidth="0.06" />
      <line x1="84" y1="7" x2="84" y2="9" stroke="#d0cec8" strokeWidth="0.06" />
      <text x="45.5" y="24" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="100" fontSize="6.5" letterSpacing="2" fill="#1a1a1a" filter="url(#minimal-void-shadow)">{data.nameJa}</text>
      <line x1="38" y1="27" x2="53" y2="27" stroke="#c0bdb8" strokeWidth="0.08" />
      <text x="45.5" y="31" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="2" letterSpacing="0.8" fill="#a0a09a">{data.nameEn.toUpperCase()}</text>
      {data.logo && <image href={data.logo} x="41.75" y="38" width="7.5" height="7.5" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="minimal-void-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
      </defs>
      <rect width="91" height="55" fill="#fafaf8" filter="url(#minimal-void-paper-b)" />
      <line x1="7" y1="0" x2="7" y2="55" stroke="#e8e6e2" strokeWidth="0.08" />
      <line x1="84" y1="0" x2="84" y2="55" stroke="#e8e6e2" strokeWidth="0.08" />
      <line x1="0" y1="7" x2="91" y2="7" stroke="#e8e6e2" strokeWidth="0.08" />
      <line x1="0" y1="48" x2="91" y2="48" stroke="#e8e6e2" strokeWidth="0.08" />
      <text x="84" y="12" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="2.2" fill="#555550">{data.companyJa}</text>
      <text x="84" y="15.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.4" letterSpacing="0.3" fill="#9a9a94">{data.companyEn}</text>
      <text x="84" y="20" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#888884">{data.titleJa}</text>
      <line x1="55" y1="23" x2="84" y2="23" stroke="#d8d6d2" strokeWidth="0.08" />
      <text x="84" y="28" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#888884">{data.tel}</text>
      <text x="84" y="31.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#888884">{data.email}</text>
      <text x="84" y="35" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#888884">{data.website}</text>
      <line x1="55" y1="38" x2="84" y2="38" stroke="#d8d6d2" strokeWidth="0.08" />
      <text x="84" y="42" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#a0a09a">〒{data.zipCode}</text>
      <text x="84" y="45.5" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#a0a09a">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="7" y="38" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
    </g>
  ),
};

// ============================================================
// 2. BREATH (息) — Naoto Fukasawa inspired
// Off-center single name, extreme right margin usage
// ============================================================
const breathTemplate: TemplateDefinition = {
  id: 'minimal-breath',
  name: 'BREATH',
  nameJa: '息',
  category: 'minimal',
  designer: 'Naoto Fukasawa',
  description: '右に寄り添う呼吸のようなリズム。余白が語る。',
  accentColor: '#444444',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="minimal-breath-paper"><feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="minimal-breath-glow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.5" result="blur"/><feFlood floodColor="#444444" floodOpacity="0.06" result="color"/><feComposite in="color" in2="blur" operator="in" result="glow"/><feMerge><feMergeNode in="glow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <rect width="91" height="55" fill="#fdfcfa" filter="url(#minimal-breath-paper)" />
      {/* Subtle vertical rhythm line */}
      <line x1="84" y1="6" x2="84" y2="49" stroke="#e6e4e0" strokeWidth="0.06" />
      {/* Breath-like dot rhythm */}
      <circle cx="84" cy="6" r="0.2" fill="#d0cec8" />
      <circle cx="84" cy="49" r="0.2" fill="#d0cec8" />
      <circle cx="87" cy="27.5" r="0.15" fill="#e0deda" />
      <text x="82" y="21" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="5.8" letterSpacing="0.8" fill="#1a1a1a" filter="url(#minimal-breath-glow)">{data.nameJa}</text>
      <line x1="68" y1="24" x2="82" y2="24" stroke="#d8d6d0" strokeWidth="0.06" />
      <text x="82" y="28.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.9" letterSpacing="0.5" fill="#8a8a84">{data.nameEn}</text>
      <text x="82" y="33" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#b0b0aa">{data.titleJa}</text>
      {data.logo && <image href={data.logo} x="8" y="40" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.45" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="minimal-breath-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
      </defs>
      <rect width="91" height="55" fill="#fdfcfa" filter="url(#minimal-breath-paper-b)" />
      <line x1="84" y1="6" x2="84" y2="49" stroke="#e6e4e0" strokeWidth="0.06" />
      <circle cx="84" cy="6" r="0.2" fill="#d0cec8" />
      <circle cx="84" cy="49" r="0.2" fill="#d0cec8" />
      <text x="82" y="12" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="2.2" fill="#555550">{data.companyJa}</text>
      <text x="82" y="16" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.4" letterSpacing="0.3" fill="#9a9a94">{data.companyEn}</text>
      <text x="82" y="20.5" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#a0a09a">{data.titleJa}</text>
      <line x1="58" y1="23.5" x2="82" y2="23.5" stroke="#e0ded8" strokeWidth="0.06" />
      <text x="82" y="28" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#888884">{data.tel}</text>
      <text x="82" y="31.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#888884">{data.email}</text>
      <text x="82" y="35" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#888884">{data.website}</text>
      <line x1="58" y1="38" x2="82" y2="38" stroke="#e0ded8" strokeWidth="0.06" />
      <text x="82" y="42" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#b0b0aa">〒{data.zipCode}</text>
      <text x="82" y="45.5" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#b0b0aa">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="8" y="40" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.35" />}
    </g>
  ),
};

// ============================================================
// 3. MONO (墨) — John Pawson inspired
// Pure black/white, thin hairline rules
// ============================================================
const monoTemplate: TemplateDefinition = {
  id: 'minimal-mono',
  name: 'MONO',
  nameJa: '墨',
  category: 'minimal',
  designer: 'John Pawson',
  description: '黒と白の絶対。細い罫線が空間を切り取る。',
  accentColor: '#000000',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="minimal-mono-paper"><feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="minimal-mono-sharp"><feGaussianBlur in="SourceAlpha" stdDeviation="0.15" result="blur"/><feOffset dx="0.05" dy="0.08" result="shifted"/><feFlood floodColor="#000" floodOpacity="0.1" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <rect width="91" height="55" fill="#ffffff" filter="url(#minimal-mono-paper)" />
      {/* Precise frame */}
      <line x1="7" y1="7" x2="84" y2="7" stroke="#1a1a1a" strokeWidth="0.12" />
      <line x1="7" y1="48" x2="84" y2="48" stroke="#1a1a1a" strokeWidth="0.12" />
      <line x1="7" y1="7" x2="7" y2="48" stroke="#1a1a1a" strokeWidth="0.12" />
      <line x1="84" y1="7" x2="84" y2="48" stroke="#1a1a1a" strokeWidth="0.12" />
      {/* Inner hairlines */}
      <line x1="9" y1="9" x2="82" y2="9" stroke="#1a1a1a" strokeWidth="0.04" />
      <line x1="9" y1="46" x2="82" y2="46" stroke="#1a1a1a" strokeWidth="0.04" />
      <text x="45.5" y="24" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="5.5" letterSpacing="1" fill="#1a1a1a" filter="url(#minimal-mono-sharp)">{data.nameJa}</text>
      <line x1="34" y1="27.5" x2="57" y2="27.5" stroke="#1a1a1a" strokeWidth="0.1" />
      <text x="45.5" y="32" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.9" letterSpacing="0.4" fill="#1a1a1a">{data.nameEn.toUpperCase()}</text>
      <text x="45.5" y="37" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#666660">{data.titleJa}</text>
      {data.logo && <image href={data.logo} x="41.75" y="39" width="7.5" height="7.5" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="minimal-mono-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
      </defs>
      <rect width="91" height="55" fill="#ffffff" filter="url(#minimal-mono-paper-b)" />
      <line x1="7" y1="7" x2="84" y2="7" stroke="#1a1a1a" strokeWidth="0.12" />
      <line x1="7" y1="48" x2="84" y2="48" stroke="#1a1a1a" strokeWidth="0.12" />
      <line x1="7" y1="7" x2="7" y2="48" stroke="#1a1a1a" strokeWidth="0.12" />
      <line x1="84" y1="7" x2="84" y2="48" stroke="#1a1a1a" strokeWidth="0.12" />
      <line x1="9" y1="9" x2="82" y2="9" stroke="#1a1a1a" strokeWidth="0.04" />
      <line x1="9" y1="46" x2="82" y2="46" stroke="#1a1a1a" strokeWidth="0.04" />
      <text x="45.5" y="15" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" letterSpacing="0.5" fill="#1a1a1a">{data.companyJa}</text>
      <text x="45.5" y="19" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" letterSpacing="0.3" fill="#666660">{data.companyEn.toUpperCase()}</text>
      <text x="45.5" y="23" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#888884">{data.titleJa}</text>
      <line x1="20" y1="25.5" x2="71" y2="25.5" stroke="#1a1a1a" strokeWidth="0.08" />
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#555550">{data.tel}</text>
      <text x="45.5" y="33.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#555550">{data.email}</text>
      <text x="45.5" y="37" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#555550">{data.website}</text>
      <line x1="20" y1="39.5" x2="71" y2="39.5" stroke="#1a1a1a" strokeWidth="0.08" />
      <text x="45.5" y="43" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#999994">〒{data.zipCode}</text>
      <text x="45.5" y="46" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#999994">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="10" y="10" width="6" height="6" preserveAspectRatio="xMidYMid meet" opacity="0.35" />}
    </g>
  ),
};

// ============================================================
// 4. MIST (霞) — Jasper Morrison inspired
// Ghost-light typography on white
// ============================================================
const mistTemplate: TemplateDefinition = {
  id: 'minimal-mist',
  name: 'MIST',
  nameJa: '霞',
  category: 'minimal',
  designer: 'Jasper Morrison',
  description: '霞のように淡く。消えかかる文字に宿る静謐さ。',
  accentColor: '#cccccc',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="minimal-mist-fog"><feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="5" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="minimal-mist-blur"><feGaussianBlur in="SourceGraphic" stdDeviation="0.15"/></filter>
        <linearGradient id="minimal-mist-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8e6e2" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#e8e6e2" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#ffffff" filter="url(#minimal-mist-fog)" />
      {/* Atmospheric gradient veil */}
      <rect x="0" y="0" width="91" height="20" fill="url(#minimal-mist-fade)" />
      {/* Ghost lines */}
      <line x1="10" y1="8" x2="50" y2="8" stroke="#e8e6e2" strokeWidth="0.04" filter="url(#minimal-mist-blur)" />
      <line x1="10" y1="48" x2="40" y2="48" stroke="#e8e6e2" strokeWidth="0.04" filter="url(#minimal-mist-blur)" />
      <circle cx="6" cy="8" r="0.2" fill="#ddddd8" />
      <text x="10" y="21" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="6.5" letterSpacing="0.8" fill="#c8c8c2">{data.nameJa}</text>
      <text x="10" y="27.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.4" fill="#d8d8d2">{data.nameEn}</text>
      <text x="10" y="34" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.7" fill="#d8d8d2">{data.titleJa}</text>
      <text x="10" y="42" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.7" fill="#d8d8d2">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="74" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.25" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="minimal-mist-fog-b"><feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="5" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <linearGradient id="minimal-mist-fade-b" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#e8e6e2" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#e8e6e2" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#ffffff" filter="url(#minimal-mist-fog-b)" />
      <rect x="0" y="35" width="91" height="20" fill="url(#minimal-mist-fade-b)" />
      <line x1="10" y1="7" x2="40" y2="7" stroke="#e8e6e2" strokeWidth="0.04" />
      <circle cx="6" cy="7" r="0.2" fill="#ddddd8" />
      <text x="10" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="2.2" fill="#c0c0ba">{data.companyJa}</text>
      <text x="10" y="18.5" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.4" letterSpacing="0.3" fill="#d0d0ca">{data.companyEn}</text>
      <text x="10" y="23" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#d0d0ca">{data.titleJa}</text>
      <line x1="10" y1="25.5" x2="45" y2="25.5" stroke="#e8e6e2" strokeWidth="0.04" />
      <text x="10" y="30" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#c8c8c2">{data.tel}</text>
      <text x="10" y="33.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#c8c8c2">{data.email}</text>
      <text x="10" y="37" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#c8c8c2">{data.website}</text>
      <line x1="10" y1="39.5" x2="45" y2="39.5" stroke="#e8e6e2" strokeWidth="0.04" />
      <text x="10" y="43.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#d8d8d2">〒{data.zipCode}</text>
      <text x="10" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#d8d8d2">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="74" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.2" />}
    </g>
  ),
};

// ============================================================
// 5. LINE (線) — Donald Judd inspired
// Single horizontal line divides name from contact
// ============================================================
const lineTemplate: TemplateDefinition = {
  id: 'minimal-line',
  name: 'LINE',
  nameJa: '線',
  category: 'minimal',
  designer: 'Donald Judd',
  description: '一本の線が空間を二分する。明快な秩序。',
  accentColor: '#333333',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="minimal-line-paper"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="minimal-line-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.2" result="blur"/><feOffset dx="0.08" dy="0.12" result="shifted"/><feFlood floodColor="#000" floodOpacity="0.06" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <rect width="91" height="55" fill="#fafaf8" filter="url(#minimal-line-paper)" />
      {/* Subtle edge markers */}
      <line x1="8" y1="5" x2="8" y2="7" stroke="#d0cec8" strokeWidth="0.06" />
      <line x1="83" y1="5" x2="83" y2="7" stroke="#d0cec8" strokeWidth="0.06" />
      <line x1="8" y1="48" x2="8" y2="50" stroke="#d0cec8" strokeWidth="0.06" />
      <line x1="83" y1="48" x2="83" y2="50" stroke="#d0cec8" strokeWidth="0.06" />
      <text x="8" y="19" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="5.8" letterSpacing="0.4" fill="#1a1a1a" filter="url(#minimal-line-shadow)">{data.nameJa}</text>
      <text x="8" y="25" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.9" letterSpacing="0.3" fill="#666660">{data.nameEn}</text>
      {/* The defining line */}
      <line x1="8" y1="29" x2="83" y2="29" stroke="#1a1a1a" strokeWidth="0.2" />
      <text x="8" y="34.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#888884">{data.titleJa}</text>
      <text x="8" y="39" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#888884">{data.tel}</text>
      <text x="8" y="42.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#888884">{data.email}</text>
      <text x="8" y="46" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#888884">{data.website}</text>
      {data.logo && <image href={data.logo} x="75" y="32" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="minimal-line-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
      </defs>
      <rect width="91" height="55" fill="#fafaf8" filter="url(#minimal-line-paper-b)" />
      <line x1="8" y1="5" x2="8" y2="7" stroke="#d0cec8" strokeWidth="0.06" />
      <line x1="83" y1="5" x2="83" y2="7" stroke="#d0cec8" strokeWidth="0.06" />
      <line x1="8" y1="48" x2="8" y2="50" stroke="#d0cec8" strokeWidth="0.06" />
      <line x1="83" y1="48" x2="83" y2="50" stroke="#d0cec8" strokeWidth="0.06" />
      <text x="8" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" letterSpacing="0.4" fill="#1a1a1a">{data.companyJa}</text>
      <text x="8" y="18.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.2" fill="#888884">{data.companyEn}</text>
      <text x="8" y="23" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#999994">{data.titleJa}</text>
      <line x1="8" y1="26" x2="83" y2="26" stroke="#1a1a1a" strokeWidth="0.2" />
      <text x="8" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#888884">{data.tel}</text>
      <text x="8" y="34.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#888884">{data.email}</text>
      <text x="8" y="38" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#888884">{data.website}</text>
      <line x1="8" y1="41" x2="83" y2="41" stroke="#d0cec8" strokeWidth="0.08" />
      <text x="8" y="45" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#a0a09a">〒{data.zipCode}</text>
      <text x="8" y="48.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#a0a09a">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="75" y="32" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
    </g>
  ),
};

// ============================================================
// 6. DOT (点) — Dieter Rams inspired
// Single small accent dot, Braun-like precision
// ============================================================
const dotTemplate: TemplateDefinition = {
  id: 'minimal-dot',
  name: 'DOT',
  nameJa: '点',
  category: 'minimal',
  designer: 'Dieter Rams',
  description: '一つの点が全てを統べる。ブラウン的精密さ。',
  accentColor: '#2d2d2d',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="minimal-dot-texture"><feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="minimal-dot-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.25" result="blur"/><feOffset dx="0.08" dy="0.1" result="shifted"/><feFlood floodColor="#2d2d2d" floodOpacity="0.1" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <rect width="91" height="55" fill="#f8f7f5" filter="url(#minimal-dot-texture)" />
      {/* The defining dot */}
      <circle cx="8" cy="10" r="1.2" fill="#1a1a1a" />
      {/* Secondary dots for rhythm */}
      <circle cx="8" cy="14" r="0.15" fill="#c0c0ba" />
      <circle cx="8" cy="16" r="0.1" fill="#d0d0ca" />
      {/* Alignment line */}
      <line x1="12" y1="10" x2="14" y2="10" stroke="#d8d6d0" strokeWidth="0.06" />
      <text x="8" y="24" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="5.5" letterSpacing="0.3" fill="#2d2d2d" filter="url(#minimal-dot-shadow)">{data.nameJa}</text>
      <text x="8" y="29" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.8" letterSpacing="0.2" fill="#777770">{data.nameEn}</text>
      <text x="8" y="33.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#999994">{data.titleJa}</text>
      <line x1="8" y1="36.5" x2="30" y2="36.5" stroke="#e0ded8" strokeWidth="0.06" />
      <text x="8" y="41" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#888884">{data.tel}</text>
      <text x="8" y="44.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#888884">{data.email}</text>
      {data.logo && <image href={data.logo} x="75" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="minimal-dot-texture-b"><feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
      </defs>
      <rect width="91" height="55" fill="#f8f7f5" filter="url(#minimal-dot-texture-b)" />
      <circle cx="83" cy="10" r="1.2" fill="#1a1a1a" />
      <circle cx="83" cy="14" r="0.15" fill="#c0c0ba" />
      <circle cx="83" cy="16" r="0.1" fill="#d0d0ca" />
      <line x1="79" y1="10" x2="81" y2="10" stroke="#d8d6d0" strokeWidth="0.06" />
      <text x="83" y="22" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" letterSpacing="0.3" fill="#2d2d2d">{data.companyJa}</text>
      <text x="83" y="26" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" letterSpacing="0.2" fill="#888884">{data.companyEn}</text>
      <text x="83" y="30" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#999994">{data.titleJa}</text>
      <line x1="55" y1="32.5" x2="83" y2="32.5" stroke="#e0ded8" strokeWidth="0.06" />
      <text x="83" y="36.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#888884">{data.tel}</text>
      <text x="83" y="40" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#888884">{data.email}</text>
      <text x="83" y="43.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#888884">{data.website}</text>
      <line x1="55" y1="46" x2="83" y2="46" stroke="#e0ded8" strokeWidth="0.06" />
      <text x="83" y="49.5" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#a0a09a">〒{data.zipCode} {data.addressJa}</text>
      {data.logo && <image href={data.logo} x="7" y="40" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
    </g>
  ),
};

// ============================================================
// 7. EDGE (端) — John Maeda inspired
// Text positioned at extreme bottom-right edge
// ============================================================
const edgeTemplate: TemplateDefinition = {
  id: 'minimal-edge',
  name: 'EDGE',
  nameJa: '端',
  category: 'minimal',
  designer: 'John Maeda',
  description: '端に集まる情報。コードのような精密配置。',
  accentColor: '#1a1a1a',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="minimal-edge-grain"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="minimal-edge-lift"><feGaussianBlur in="SourceAlpha" stdDeviation="0.35" result="blur"/><feOffset dx="0.1" dy="0.15" result="shifted"/><feFlood floodColor="#000" floodOpacity="0.07" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <rect width="91" height="55" fill="#ffffff" filter="url(#minimal-edge-grain)" />
      {/* Edge markers */}
      <line x1="87" y1="3" x2="87" y2="5" stroke="#1a1a1a" strokeWidth="0.08" />
      <line x1="85" y1="3" x2="87" y2="3" stroke="#1a1a1a" strokeWidth="0.08" />
      <line x1="87" y1="52" x2="87" y2="50" stroke="#1a1a1a" strokeWidth="0.08" />
      <line x1="85" y1="52" x2="87" y2="52" stroke="#1a1a1a" strokeWidth="0.08" />
      {/* Computational grid dots */}
      <circle cx="4" cy="4" r="0.12" fill="#e0e0da" />
      <circle cx="4" cy="51" r="0.12" fill="#e0e0da" />
      <text x="86" y="34" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="5.5" letterSpacing="0.3" fill="#1a1a1a" filter="url(#minimal-edge-lift)">{data.nameJa}</text>
      <text x="86" y="39.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.9" letterSpacing="0.3" fill="#666660">{data.nameEn}</text>
      <text x="86" y="44" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#999994">{data.titleJa}</text>
      <text x="86" y="50" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.2" letterSpacing="0.2" fill="#b0b0aa">{data.companyEn}</text>
      {data.logo && <image href={data.logo} x="4" y="8" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="minimal-edge-grain-b"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
      </defs>
      <rect width="91" height="55" fill="#ffffff" filter="url(#minimal-edge-grain-b)" />
      <line x1="87" y1="3" x2="87" y2="5" stroke="#1a1a1a" strokeWidth="0.08" />
      <line x1="85" y1="3" x2="87" y2="3" stroke="#1a1a1a" strokeWidth="0.08" />
      <line x1="87" y1="52" x2="87" y2="50" stroke="#1a1a1a" strokeWidth="0.08" />
      <line x1="85" y1="52" x2="87" y2="52" stroke="#1a1a1a" strokeWidth="0.08" />
      <circle cx="4" cy="4" r="0.12" fill="#e0e0da" />
      <circle cx="4" cy="51" r="0.12" fill="#e0e0da" />
      <text x="86" y="12" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" fill="#1a1a1a">{data.companyJa}</text>
      <text x="86" y="16" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" letterSpacing="0.2" fill="#888884">{data.companyEn}</text>
      <text x="86" y="20.5" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#999994">{data.titleJa}</text>
      <line x1="55" y1="23" x2="86" y2="23" stroke="#e0ded8" strokeWidth="0.06" />
      <text x="86" y="27.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#666660">{data.tel}</text>
      <text x="86" y="31" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#666660">{data.email}</text>
      <text x="86" y="34.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#666660">{data.website}</text>
      <line x1="55" y1="37.5" x2="86" y2="37.5" stroke="#e0ded8" strokeWidth="0.06" />
      <text x="86" y="41.5" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#a0a09a">〒{data.zipCode}</text>
      <text x="86" y="45" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#a0a09a">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="4" y="8" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
    </g>
  ),
};

// ============================================================
// 8. BLANK (無) — Muji style inspired
// Maximum emptiness, text grouped at one corner
// ============================================================
const blankTemplate: TemplateDefinition = {
  id: 'minimal-blank',
  name: 'BLANK',
  nameJa: '無',
  category: 'minimal',
  designer: 'Muji',
  description: '無印の哲学。角に集約された最小限の情報。',
  accentColor: '#8b7355',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="minimal-blank-kraft"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="5" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="minimal-blank-soft"><feGaussianBlur in="SourceAlpha" stdDeviation="0.2" result="blur"/><feOffset dx="0.06" dy="0.1" result="shifted"/><feFlood floodColor="#8b7355" floodOpacity="0.06" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <rect width="91" height="55" fill="#faf8f4" filter="url(#minimal-blank-kraft)" />
      {/* Muji-like subtle corner marks */}
      <line x1="4" y1="4" x2="7" y2="4" stroke="#d8d4cc" strokeWidth="0.06" />
      <line x1="4" y1="4" x2="4" y2="7" stroke="#d8d4cc" strokeWidth="0.06" />
      <line x1="87" y1="51" x2="84" y2="51" stroke="#d8d4cc" strokeWidth="0.06" />
      <line x1="87" y1="51" x2="87" y2="48" stroke="#d8d4cc" strokeWidth="0.06" />
      <text x="7" y="40" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="5.5" letterSpacing="0.3" fill="#3d3d38" filter="url(#minimal-blank-soft)">{data.nameJa}</text>
      <text x="7" y="45" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.7" letterSpacing="0.2" fill="#888880">{data.nameEn}</text>
      <text x="7" y="49" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#a0a098">{data.titleJa}</text>
      {data.logo && <image href={data.logo} x="76" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="minimal-blank-kraft-b"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="5" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
      </defs>
      <rect width="91" height="55" fill="#faf8f4" filter="url(#minimal-blank-kraft-b)" />
      <line x1="4" y1="4" x2="7" y2="4" stroke="#d8d4cc" strokeWidth="0.06" />
      <line x1="4" y1="4" x2="4" y2="7" stroke="#d8d4cc" strokeWidth="0.06" />
      <line x1="87" y1="51" x2="84" y2="51" stroke="#d8d4cc" strokeWidth="0.06" />
      <line x1="87" y1="51" x2="87" y2="48" stroke="#d8d4cc" strokeWidth="0.06" />
      <text x="7" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2" fill="#3d3d38">{data.companyJa}</text>
      <text x="7" y="16" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.3" fill="#a0a098">{data.companyEn}</text>
      <text x="7" y="20.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#999994">{data.titleJa}</text>
      <line x1="7" y1="23" x2="40" y2="23" stroke="#dcd8d0" strokeWidth="0.06" />
      <text x="7" y="27.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#888880">{data.tel}</text>
      <text x="7" y="31" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#888880">{data.email}</text>
      <text x="7" y="34.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#888880">{data.website}</text>
      <line x1="7" y1="37.5" x2="40" y2="37.5" stroke="#dcd8d0" strokeWidth="0.06" />
      <text x="7" y="41.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#a0a098">〒{data.zipCode}</text>
      <text x="7" y="45" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#a0a098">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="76" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.35" />}
    </g>
  ),
};

// ============================================================
// 9. PURE (純) — Shin Murakami inspired
// Centered, ultra-light weight (100), generous spacing
// ============================================================
const pureTemplate: TemplateDefinition = {
  id: 'minimal-pure',
  name: 'PURE',
  nameJa: '純',
  category: 'minimal',
  designer: 'Shin Murakami',
  description: '純粋な中央配置。極細のウェイトが空気をまとう。',
  accentColor: '#555555',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="minimal-pure-linen"><feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="minimal-pure-float"><feGaussianBlur in="SourceAlpha" stdDeviation="0.4" result="blur"/><feOffset dx="0" dy="0.2" result="shifted"/><feFlood floodColor="#555555" floodOpacity="0.05" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <rect width="91" height="55" fill="#fefefe" filter="url(#minimal-pure-linen)" />
      {/* Ethereal center cross */}
      <line x1="45.5" y1="3" x2="45.5" y2="6" stroke="#e8e6e2" strokeWidth="0.04" />
      <line x1="45.5" y1="49" x2="45.5" y2="52" stroke="#e8e6e2" strokeWidth="0.04" />
      <line x1="3" y1="27.5" x2="6" y2="27.5" stroke="#e8e6e2" strokeWidth="0.04" />
      <line x1="85" y1="27.5" x2="88" y2="27.5" stroke="#e8e6e2" strokeWidth="0.04" />
      <text x="45.5" y="20" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="100" fontSize="6.5" letterSpacing="2" fill="#333330" filter="url(#minimal-pure-float)">{data.nameJa}</text>
      <line x1="36" y1="23.5" x2="55" y2="23.5" stroke="#d8d6d0" strokeWidth="0.05" />
      <text x="45.5" y="28" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="100" fontSize="2" letterSpacing="1" fill="#999994">{data.nameEn.toUpperCase()}</text>
      <text x="45.5" y="35" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="100" fontSize="1.6" letterSpacing="0.5" fill="#b0b0aa">{data.titleJa}</text>
      <text x="45.5" y="40" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="100" fontSize="1.6" letterSpacing="0.5" fill="#b0b0aa">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="41.75" y="43" width="7.5" height="7.5" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="minimal-pure-linen-b"><feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
      </defs>
      <rect width="91" height="55" fill="#fefefe" filter="url(#minimal-pure-linen-b)" />
      <line x1="45.5" y1="3" x2="45.5" y2="6" stroke="#e8e6e2" strokeWidth="0.04" />
      <line x1="45.5" y1="49" x2="45.5" y2="52" stroke="#e8e6e2" strokeWidth="0.04" />
      <line x1="3" y1="27.5" x2="6" y2="27.5" stroke="#e8e6e2" strokeWidth="0.04" />
      <line x1="85" y1="27.5" x2="88" y2="27.5" stroke="#e8e6e2" strokeWidth="0.04" />
      <text x="45.5" y="12" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="100" fontSize="2.5" letterSpacing="0.8" fill="#555550">{data.companyJa}</text>
      <text x="45.5" y="16.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="100" fontSize="1.4" letterSpacing="0.6" fill="#a0a09a">{data.companyEn.toUpperCase()}</text>
      <text x="45.5" y="21" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="100" fontSize="1.5" letterSpacing="0.3" fill="#b0b0aa">{data.titleJa}</text>
      <line x1="30" y1="24" x2="61" y2="24" stroke="#e0ded8" strokeWidth="0.05" />
      <text x="45.5" y="29" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="100" fontSize="1.4" letterSpacing="0.3" fill="#888884">{data.tel}</text>
      <text x="45.5" y="33" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="100" fontSize="1.4" letterSpacing="0.3" fill="#888884">{data.email}</text>
      <text x="45.5" y="37" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="100" fontSize="1.4" letterSpacing="0.3" fill="#888884">{data.website}</text>
      <line x1="30" y1="40" x2="61" y2="40" stroke="#e0ded8" strokeWidth="0.05" />
      <text x="45.5" y="44" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="100" fontSize="1.2" letterSpacing="0.2" fill="#c0c0ba">〒{data.zipCode}</text>
      <text x="45.5" y="47.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="100" fontSize="1.2" letterSpacing="0.2" fill="#c0c0ba">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="7" y="7" width="6" height="6" preserveAspectRatio="xMidYMid meet" opacity="0.3" />}
    </g>
  ),
};

// ============================================================
// 10. AIR (空) — Tokujin Yoshioka inspired
// Asymmetric floating text, lots of open space
// ============================================================
const airTemplate: TemplateDefinition = {
  id: 'minimal-air',
  name: 'AIR',
  nameJa: '空',
  category: 'minimal',
  designer: 'Tokujin Yoshioka',
  description: '空中に浮遊する文字。非対称の軽やかさ。',
  accentColor: '#e0e0e0',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="minimal-air-haze"><feTurbulence type="fractalNoise" baseFrequency="0.45" numOctaves="5" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="minimal-air-float"><feGaussianBlur in="SourceAlpha" stdDeviation="0.5" result="blur"/><feOffset dx="0" dy="0.25" result="shifted"/><feFlood floodColor="#444" floodOpacity="0.04" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <linearGradient id="minimal-air-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f0efed" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#f0efed" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#ffffff" filter="url(#minimal-air-haze)" />
      {/* Atmospheric gradient */}
      <rect x="0" y="0" width="45" height="30" fill="url(#minimal-air-gradient)" />
      {/* Floating dots */}
      <circle cx="20" cy="38" r="0.15" fill="#d8d8d2" />
      <circle cx="70" cy="15" r="0.12" fill="#e0e0da" />
      <circle cx="50" cy="48" r="0.1" fill="#e0e0da" />
      <text x="14" y="15" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="5.8" letterSpacing="0.5" fill="#444440" filter="url(#minimal-air-float)">{data.nameJa}</text>
      <text x="58" y="30" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.8" letterSpacing="0.4" fill="#a0a09a">{data.nameEn}</text>
      <text x="30" y="42" fontFamily="'Noto Sans JP', sans-serif" fontWeight="100" fontSize="1.5" fill="#c0c0ba">{data.titleJa}</text>
      {data.logo && <image href={data.logo} x="72" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.35" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="minimal-air-haze-b"><feTurbulence type="fractalNoise" baseFrequency="0.45" numOctaves="5" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <linearGradient id="minimal-air-gradient-b" x1="1" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#f0efed" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#f0efed" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#ffffff" filter="url(#minimal-air-haze-b)" />
      <rect x="46" y="25" width="45" height="30" fill="url(#minimal-air-gradient-b)" />
      <circle cx="15" cy="10" r="0.15" fill="#d8d8d2" />
      <circle cx="75" cy="42" r="0.12" fill="#e0e0da" />
      <circle cx="40" cy="50" r="0.1" fill="#e0e0da" />
      <text x="55" y="10" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="2" fill="#666660">{data.companyJa}</text>
      <text x="12" y="20" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.4" fill="#999994">{data.companyEn}</text>
      <text x="60" y="18" fontFamily="'Noto Sans JP', sans-serif" fontWeight="100" fontSize="1.4" fill="#a0a09a">{data.titleJa}</text>
      <line x1="12" y1="24" x2="35" y2="24" stroke="#e8e6e2" strokeWidth="0.04" />
      <text x="50" y="30" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.4" fill="#999994">{data.tel}</text>
      <text x="20" y="36" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.4" fill="#999994">{data.email}</text>
      <text x="55" y="42" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="1.4" fill="#999994">{data.website}</text>
      <line x1="55" y1="46" x2="78" y2="46" stroke="#e8e6e2" strokeWidth="0.04" />
      <text x="15" y="48" fontFamily="'Noto Sans JP', sans-serif" fontWeight="100" fontSize="1.2" fill="#c0c0ba">〒{data.zipCode}</text>
      <text x="15" y="51.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="100" fontSize="1.2" fill="#c0c0ba">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="72" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.3" />}
    </g>
  ),
};

export const minimalTemplates: TemplateDefinition[] = [
  voidTemplate,
  breathTemplate,
  monoTemplate,
  mistTemplate,
  lineTemplate,
  dotTemplate,
  edgeTemplate,
  blankTemplate,
  pureTemplate,
  airTemplate,
];
