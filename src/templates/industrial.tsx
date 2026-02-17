import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. STEEL (鋼) — Heavy steel plate aesthetic
// Brushed metal with noise texture, rivets, and embossed borders
// ============================================================
const steelTemplate: TemplateDefinition = {
  id: 'industrial-steel',
  name: 'STEEL',
  nameJa: '鋼',
  category: 'industrial',
  designer: 'Heavy Industry',
  description: '鋼鉄の重厚感。ブラッシュドメタルの質感と太い枠線。',
  accentColor: '#71797E',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="industrial-steel-metal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9AA1A6" />
          <stop offset="30%" stopColor="#858C91" />
          <stop offset="60%" stopColor="#71797E" />
          <stop offset="100%" stopColor="#5C6368" />
        </linearGradient>
        <filter id="industrial-steel-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="industrial-steel-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="industrial-steel-rivet" cx="50%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#A0A8AD" />
          <stop offset="100%" stopColor="#4A5258" />
        </linearGradient>
        <pattern id="industrial-steel-brush" width="2" height="0.3" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0.15" x2="2" y2="0.15" stroke="#7D858A" strokeWidth="0.05" opacity="0.3" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#industrial-steel-metal)" />
      <rect width="91" height="55" fill="url(#industrial-steel-brush)" />
      <rect width="91" height="55" filter="url(#industrial-steel-grain)" opacity="0.12" fill="#888" />
      {/* Double border frame */}
      <rect x="3" y="3" width="85" height="49" fill="none" stroke="#A0A8AD" strokeWidth="0.6" />
      <rect x="4.5" y="4.5" width="82" height="46" fill="none" stroke="#5C6368" strokeWidth="0.2" />
      {/* Decorative corner brackets */}
      <path d="M6,8 L6,6 L8,6" fill="none" stroke="#C8CDD0" strokeWidth="0.3" />
      <path d="M83,6 L85,6 L85,8" fill="none" stroke="#C8CDD0" strokeWidth="0.3" />
      <path d="M6,47 L6,49 L8,49" fill="none" stroke="#C8CDD0" strokeWidth="0.3" />
      <path d="M83,49 L85,49 L85,47" fill="none" stroke="#C8CDD0" strokeWidth="0.3" />
      <text x="45.5" y="22" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="6.5" letterSpacing="1.5" fill="#E8ECEF" filter="url(#industrial-steel-shadow)">{data.nameJa}</text>
      <line x1="20" y1="26" x2="71" y2="26" stroke="#A0A8AD" strokeWidth="0.3" />
      <text x="45.5" y="32" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="2.2" letterSpacing="2" fill="#C8CDD0">{data.nameEn.toUpperCase()}</text>
      <text x="45.5" y="38" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.8" fill="#A0A8AD">{data.titleJa}</text>
      {/* Corner rivets */}
      <circle cx="7" cy="7" r="1" fill="#5C6368" stroke="#8A9199" strokeWidth="0.3" />
      <circle cx="7" cy="7" r="0.35" fill="#8A9199" />
      <circle cx="84" cy="7" r="1" fill="#5C6368" stroke="#8A9199" strokeWidth="0.3" />
      <circle cx="84" cy="7" r="0.35" fill="#8A9199" />
      <circle cx="7" cy="48" r="1" fill="#5C6368" stroke="#8A9199" strokeWidth="0.3" />
      <circle cx="7" cy="48" r="0.35" fill="#8A9199" />
      <circle cx="84" cy="48" r="1" fill="#5C6368" stroke="#8A9199" strokeWidth="0.3" />
      <circle cx="84" cy="48" r="0.35" fill="#8A9199" />
      {data.logo && <image href={data.logo} x="75" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="industrial-steel-metal-b" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9AA1A6" />
          <stop offset="50%" stopColor="#71797E" />
          <stop offset="100%" stopColor="#5C6368" />
        </linearGradient>
        <filter id="industrial-steel-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="industrial-steel-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <pattern id="industrial-steel-brush-b" width="2" height="0.3" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0.15" x2="2" y2="0.15" stroke="#7D858A" strokeWidth="0.05" opacity="0.3" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#industrial-steel-metal-b)" />
      <rect width="91" height="55" fill="url(#industrial-steel-brush-b)" />
      <rect width="91" height="55" filter="url(#industrial-steel-grain-b)" opacity="0.12" fill="#888" />
      <rect x="3" y="3" width="85" height="49" fill="none" stroke="#A0A8AD" strokeWidth="0.6" />
      <rect x="4.5" y="4.5" width="82" height="46" fill="none" stroke="#5C6368" strokeWidth="0.2" />
      {data.logo && <image href={data.logo} x="41.5" y="5.5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text x="45.5" y="19" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="2.5" letterSpacing="1" fill="#E8ECEF" filter="url(#industrial-steel-shadow-b)">{data.companyJa}</text>
      <text x="45.5" y="23" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" letterSpacing="1" fill="#A0A8AD">{data.companyEn.toUpperCase()}</text>
      <text x="45.5" y="27" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#8A9199">{data.titleJa}</text>
      <line x1="12" y1="29.5" x2="79" y2="29.5" stroke="#A0A8AD" strokeWidth="0.2" />
      <text x="45.5" y="34" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#C8CDD0">TEL: {data.tel}</text>
      <text x="45.5" y="37.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#C8CDD0">{data.email}</text>
      <text x="45.5" y="41" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#C8CDD0">{data.website}</text>
      <line x1="12" y1="43.5" x2="79" y2="43.5" stroke="#A0A8AD" strokeWidth="0.2" />
      <text x="45.5" y="47" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#A0A8AD">〒{data.zipCode}</text>
      <text x="45.5" y="50" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#A0A8AD">{data.addressJa}</text>
      <circle cx="7" cy="7" r="1" fill="#5C6368" stroke="#8A9199" strokeWidth="0.3" />
      <circle cx="84" cy="7" r="1" fill="#5C6368" stroke="#8A9199" strokeWidth="0.3" />
      <circle cx="7" cy="48" r="1" fill="#5C6368" stroke="#8A9199" strokeWidth="0.3" />
      <circle cx="84" cy="48" r="1" fill="#5C6368" stroke="#8A9199" strokeWidth="0.3" />
    </g>
  ),
};

// ============================================================
// 2. RIVET (鋲) — Riveted metal panel with punched holes
// ============================================================
const rivetTemplate: TemplateDefinition = {
  id: 'industrial-rivet',
  name: 'RIVET',
  nameJa: '鋲',
  category: 'industrial',
  designer: 'Heavy Industry',
  description: '鋲打ちの鉄板。パンチされた穴と重厚なプレート感。',
  accentColor: '#B7410E',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="industrial-rivet-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="industrial-rivet-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.12" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="industrial-rivet-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#444" />
          <stop offset="50%" stopColor="#3B3B3B" />
          <stop offset="100%" stopColor="#2E2E2E" />
        </linearGradient>
        <pattern id="industrial-rivet-diamond" width="3" height="3" patternUnits="userSpaceOnUse">
          <polygon points="1.5,0 3,1.5 1.5,3 0,1.5" fill="none" stroke="#4A4A4A" strokeWidth="0.1" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#industrial-rivet-bg)" />
      <rect width="91" height="55" fill="url(#industrial-rivet-diamond)" opacity="0.4" />
      <rect width="91" height="55" filter="url(#industrial-rivet-grain)" opacity="0.08" fill="#555" />
      {/* Top rivet row */}
      {[8,16,24,32,40,48,56,64,72,80].map((cx, i) => (
        <g key={`rt${i}`}><circle cx={cx} cy="4" r="0.8" fill="#555" stroke="#666" strokeWidth="0.2" /><circle cx={cx} cy="3.7" r="0.25" fill="#777" /></g>
      ))}
      {/* Bottom rivet row */}
      {[8,16,24,32,40,48,56,64,72,80].map((cx, i) => (
        <g key={`rb${i}`}><circle cx={cx} cy="51" r="0.8" fill="#555" stroke="#666" strokeWidth="0.2" /><circle cx={cx} cy="50.7" r="0.25" fill="#777" /></g>
      ))}
      <rect x="10" y="12" width="71" height="31" fill="#2A2A2A" stroke="#B7410E" strokeWidth="0.4" rx="0.5" />
      <rect x="10.8" y="12.8" width="69.4" height="29.4" fill="none" stroke="#4A2A1A" strokeWidth="0.15" rx="0.3" />
      <text x="45.5" y="24" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="6" letterSpacing="1" fill="#E8E8E8" filter="url(#industrial-rivet-shadow)">{data.nameJa}</text>
      <text x="45.5" y="31" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="2.2" letterSpacing="1.5" fill="#B7410E">{data.nameEn.toUpperCase()}</text>
      <text x="45.5" y="37" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.8" fill="#888888">{data.titleJa}</text>
      {data.logo && <image href={data.logo} x="73" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="industrial-rivet-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="industrial-rivet-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.12" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="industrial-rivet-bg-b" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#444" />
          <stop offset="100%" stopColor="#2E2E2E" />
        </linearGradient>
        <pattern id="industrial-rivet-diamond-b" width="3" height="3" patternUnits="userSpaceOnUse">
          <polygon points="1.5,0 3,1.5 1.5,3 0,1.5" fill="none" stroke="#4A4A4A" strokeWidth="0.1" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#industrial-rivet-bg-b)" />
      <rect width="91" height="55" fill="url(#industrial-rivet-diamond-b)" opacity="0.4" />
      <rect width="91" height="55" filter="url(#industrial-rivet-grain-b)" opacity="0.08" fill="#555" />
      {[8,24,40,56,72].map((cx, i) => (
        <g key={`rbt${i}`}><circle cx={cx} cy="4" r="0.8" fill="#555" stroke="#666" strokeWidth="0.2" /><circle cx={cx} cy="3.7" r="0.25" fill="#777" /></g>
      ))}
      {[8,24,40,56,72].map((cx, i) => (
        <g key={`rbb${i}`}><circle cx={cx} cy="51" r="0.8" fill="#555" stroke="#666" strokeWidth="0.2" /><circle cx={cx} cy="50.7" r="0.25" fill="#777" /></g>
      ))}
      {data.logo && <image href={data.logo} x="41.5" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text x="45.5" y="11" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="2.5" letterSpacing="0.8" fill="#E8E8E8" filter="url(#industrial-rivet-shadow-b)">{data.companyJa}</text>
      <text x="45.5" y="15" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" letterSpacing="0.8" fill="#B7410E">{data.companyEn.toUpperCase()}</text>
      <text x="45.5" y="19" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#888">{data.titleJa}</text>
      <rect x="15" y="21" width="61" height="0.3" fill="#B7410E" />
      <text x="45.5" y="26" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#AAAAAA">TEL {data.tel}</text>
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#AAAAAA">{data.email}</text>
      <text x="45.5" y="34" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#AAAAAA">{data.website}</text>
      <rect x="15" y="37" width="61" height="0.3" fill="#B7410E" />
      <text x="45.5" y="42" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#888888">〒{data.zipCode}</text>
      <text x="45.5" y="46" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#888888">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 3. GEAR (歯車) — Interlocking gears motif
// ============================================================
const gearTemplate: TemplateDefinition = {
  id: 'industrial-gear',
  name: 'GEAR',
  nameJa: '歯車',
  category: 'industrial',
  designer: 'Heavy Industry',
  description: '噛み合う歯車。精密機械のような確かさ。',
  accentColor: '#FFD700',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="industrial-gear-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="industrial-gear-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="industrial-gear-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#222" />
          <stop offset="100%" stopColor="#1C1C1C" />
        </linearGradient>
        <clipPath id="industrial-gear-clip"><rect width="91" height="55" /></clipPath>
      </defs>
      <rect width="91" height="55" fill="url(#industrial-gear-bg)" />
      <rect width="91" height="55" filter="url(#industrial-gear-grain)" opacity="0.06" fill="#444" />
      <g clipPath="url(#industrial-gear-clip)" opacity="0.15">
        <circle cx="78" cy="8" r="18" fill="none" stroke="#FFD700" strokeWidth="0.3" />
        <circle cx="78" cy="8" r="15" fill="none" stroke="#FFD700" strokeWidth="0.2" />
        <circle cx="78" cy="8" r="3" fill="none" stroke="#FFD700" strokeWidth="0.3" />
        {[0,45,90,135,180,225,270,315].map((a, i) => {
          const rad = (a * Math.PI) / 180;
          return <line key={i} x1={78 + 15 * Math.cos(rad)} y1={8 + 15 * Math.sin(rad)} x2={78 + 19 * Math.cos(rad)} y2={8 + 19 * Math.sin(rad)} stroke="#FFD700" strokeWidth="0.8" />;
        })}
        <circle cx="12" cy="48" r="10" fill="none" stroke="#FFD700" strokeWidth="0.3" />
        <circle cx="12" cy="48" r="7.5" fill="none" stroke="#FFD700" strokeWidth="0.2" />
        <circle cx="12" cy="48" r="2" fill="none" stroke="#FFD700" strokeWidth="0.3" />
      </g>
      <text x="10" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="6.5" letterSpacing="0.8" fill="#FFFFFF" filter="url(#industrial-gear-shadow)">{data.nameJa}</text>
      <text x="10" y="29" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="2.2" letterSpacing="1.2" fill="#FFD700">{data.nameEn.toUpperCase()}</text>
      <rect x="10" y="33" width="30" height="0.3" fill="#FFD700" />
      <text x="10" y="39" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.8" fill="#888888">{data.titleJa}</text>
      <text x="10" y="44" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.6" fill="#666666">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="73" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="industrial-gear-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="industrial-gear-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <clipPath id="industrial-gear-clip-b"><rect width="91" height="55" /></clipPath>
      </defs>
      <rect width="91" height="55" fill="#1C1C1C" />
      <rect width="91" height="55" filter="url(#industrial-gear-grain-b)" opacity="0.06" fill="#444" />
      <g clipPath="url(#industrial-gear-clip-b)" opacity="0.1">
        <circle cx="75" cy="45" r="20" fill="none" stroke="#FFD700" strokeWidth="0.3" />
        <circle cx="75" cy="45" r="17" fill="none" stroke="#FFD700" strokeWidth="0.2" />
        <circle cx="75" cy="45" r="3.5" fill="none" stroke="#FFD700" strokeWidth="0.3" />
      </g>
      {data.logo && <image href={data.logo} x="5" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text x="10" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="2.8" letterSpacing="0.5" fill="#FFFFFF" filter="url(#industrial-gear-shadow-b)">{data.companyJa}</text>
      <text x="10" y="17" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" letterSpacing="0.8" fill="#888888">{data.companyEn.toUpperCase()}</text>
      <text x="10" y="21" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#777">{data.titleJa}</text>
      <rect x="10" y="23.5" width="71" height="0.2" fill="#FFD700" opacity="0.5" />
      <text x="10" y="29" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#AAAAAA">T: {data.tel}</text>
      <text x="10" y="33" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#AAAAAA">E: {data.email}</text>
      <text x="10" y="37" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#AAAAAA">W: {data.website}</text>
      <rect x="10" y="40" width="71" height="0.2" fill="#FFD700" opacity="0.5" />
      <text x="10" y="45" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#666666">〒{data.zipCode}</text>
      <text x="10" y="49" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#666666">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 4. PIPE (管) — Industrial piping and conduit lines
// ============================================================
const pipeTemplate: TemplateDefinition = {
  id: 'industrial-pipe',
  name: 'PIPE',
  nameJa: '管',
  category: 'industrial',
  designer: 'Heavy Industry',
  description: '配管のリズム。パイプが走る工場の美しさ。',
  accentColor: '#71797E',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="industrial-pipe-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="industrial-pipe-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="industrial-pipe-h" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C0C8CD" />
          <stop offset="50%" stopColor="#A0A8AD" />
          <stop offset="100%" stopColor="#8A9199" />
        </linearGradient>
        <linearGradient id="industrial-pipe-v" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#A0A8AD" />
          <stop offset="50%" stopColor="#8A9199" />
          <stop offset="100%" stopColor="#71797E" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#E8E4DF" />
      <rect width="91" height="55" filter="url(#industrial-pipe-grain)" opacity="0.06" fill="#CCC" />
      {/* Horizontal pipes */}
      <rect x="0" y="5" width="91" height="1.5" fill="url(#industrial-pipe-h)" rx="0.75" />
      <rect x="0" y="5.2" width="91" height="0.3" fill="#D0D8DD" opacity="0.6" />
      <rect x="0" y="48" width="91" height="1.5" fill="url(#industrial-pipe-h)" rx="0.75" />
      <rect x="0" y="48.2" width="91" height="0.3" fill="#D0D8DD" opacity="0.6" />
      {/* Vertical pipes */}
      <rect x="5" y="5" width="1.5" height="44.5" fill="url(#industrial-pipe-v)" rx="0.75" />
      <rect x="5.2" y="5" width="0.3" height="44.5" fill="#B0B8BD" opacity="0.5" />
      <rect x="84" y="5" width="1.5" height="44.5" fill="url(#industrial-pipe-v)" rx="0.75" />
      <rect x="84.2" y="5" width="0.3" height="44.5" fill="#B0B8BD" opacity="0.5" />
      {/* Pipe joints */}
      <circle cx="5.75" cy="5.75" r="2" fill="#71797E" stroke="#5C6368" strokeWidth="0.3" />
      <circle cx="5.75" cy="5.75" r="0.6" fill="#8A9199" />
      <circle cx="84.75" cy="5.75" r="2" fill="#71797E" stroke="#5C6368" strokeWidth="0.3" />
      <circle cx="84.75" cy="5.75" r="0.6" fill="#8A9199" />
      <circle cx="5.75" cy="48.75" r="2" fill="#71797E" stroke="#5C6368" strokeWidth="0.3" />
      <circle cx="5.75" cy="48.75" r="0.6" fill="#8A9199" />
      <circle cx="84.75" cy="48.75" r="2" fill="#71797E" stroke="#5C6368" strokeWidth="0.3" />
      <circle cx="84.75" cy="48.75" r="0.6" fill="#8A9199" />
      <text x="45.5" y="23" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="6" letterSpacing="0.5" fill="#333333" filter="url(#industrial-pipe-shadow)">{data.nameJa}</text>
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="2" letterSpacing="1" fill="#71797E">{data.nameEn.toUpperCase()}</text>
      <text x="45.5" y="37" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#888888">{data.titleJa}</text>
      {data.logo && <image href={data.logo} x="73" y="10" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="industrial-pipe-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <linearGradient id="industrial-pipe-h-b" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C0C8CD" />
          <stop offset="50%" stopColor="#A0A8AD" />
          <stop offset="100%" stopColor="#8A9199" />
        </linearGradient>
        <linearGradient id="industrial-pipe-v-b" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#A0A8AD" />
          <stop offset="50%" stopColor="#8A9199" />
          <stop offset="100%" stopColor="#71797E" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#E8E4DF" />
      <rect width="91" height="55" filter="url(#industrial-pipe-grain-b)" opacity="0.06" fill="#CCC" />
      <rect x="0" y="5" width="91" height="1.5" fill="url(#industrial-pipe-h-b)" rx="0.75" />
      <rect x="0" y="48" width="91" height="1.5" fill="url(#industrial-pipe-h-b)" rx="0.75" />
      <rect x="5" y="5" width="1.5" height="44.5" fill="url(#industrial-pipe-v-b)" rx="0.75" />
      <rect x="84" y="5" width="1.5" height="44.5" fill="url(#industrial-pipe-v-b)" rx="0.75" />
      <circle cx="5.75" cy="5.75" r="2" fill="#71797E" stroke="#5C6368" strokeWidth="0.3" />
      <circle cx="84.75" cy="5.75" r="2" fill="#71797E" stroke="#5C6368" strokeWidth="0.3" />
      <circle cx="5.75" cy="48.75" r="2" fill="#71797E" stroke="#5C6368" strokeWidth="0.3" />
      <circle cx="84.75" cy="48.75" r="2" fill="#71797E" stroke="#5C6368" strokeWidth="0.3" />
      {data.logo && <image href={data.logo} x="41.5" y="8" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text x="45.5" y="14" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="2.5" fill="#333333">{data.companyJa}</text>
      <text x="45.5" y="18.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" letterSpacing="0.5" fill="#71797E">{data.companyEn.toUpperCase()}</text>
      <text x="45.5" y="22" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#888">{data.titleJa}</text>
      <line x1="20" y1="24.5" x2="71" y2="24.5" stroke="#A0A8AD" strokeWidth="0.3" />
      <text x="45.5" y="29" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#555555">{data.tel}</text>
      <text x="45.5" y="33" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#555555">{data.email}</text>
      <text x="45.5" y="37" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#555555">{data.website}</text>
      <line x1="20" y1="39.5" x2="71" y2="39.5" stroke="#A0A8AD" strokeWidth="0.3" />
      <text x="45.5" y="44" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#888888">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 5. CRANE (鶴機) — Construction crane silhouette
// ============================================================
const craneTemplate: TemplateDefinition = {
  id: 'industrial-crane',
  name: 'CRANE',
  nameJa: '鶴機',
  category: 'industrial',
  designer: 'Heavy Industry',
  description: '建設クレーンの威容。安全黄色が警鐘を鳴らす。',
  accentColor: '#FFD700',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="industrial-crane-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="industrial-crane-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <pattern id="industrial-crane-hazard" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="2" height="4" fill="#FFD700" opacity="0.8" />
        </pattern>
        <clipPath id="industrial-crane-clip"><rect width="91" height="55" /></clipPath>
      </defs>
      <rect width="91" height="55" fill="#2B2B2B" />
      <rect width="91" height="55" filter="url(#industrial-crane-grain)" opacity="0.06" fill="#444" />
      <g clipPath="url(#industrial-crane-clip)">
        <rect x="72" y="8" width="2" height="50" fill="#FFD700" opacity="0.3" />
        <rect x="75" y="8" width="0.5" height="50" fill="#FFD700" opacity="0.2" />
        <line x1="73" y1="10" x2="20" y2="10" stroke="#FFD700" strokeWidth="0.6" opacity="0.3" />
        <line x1="73" y1="12" x2="25" y2="12" stroke="#FFD700" strokeWidth="0.3" opacity="0.2" />
        {/* Diagonal braces */}
        <line x1="73" y1="10" x2="68" y2="20" stroke="#FFD700" strokeWidth="0.2" opacity="0.15" />
        <line x1="68" y1="10" x2="73" y2="20" stroke="#FFD700" strokeWidth="0.2" opacity="0.15" />
        <line x1="63" y1="10" x2="68" y2="20" stroke="#FFD700" strokeWidth="0.2" opacity="0.15" />
        <line x1="73" y1="20" x2="68" y2="30" stroke="#FFD700" strokeWidth="0.2" opacity="0.15" />
        <line x1="68" y1="20" x2="73" y2="30" stroke="#FFD700" strokeWidth="0.2" opacity="0.15" />
        <line x1="30" y1="10" x2="30" y2="30" stroke="#FFD700" strokeWidth="0.15" opacity="0.25" />
        <path d="M28.5,30 Q28.5,33 30,33 Q31.5,33 31.5,30" fill="none" stroke="#FFD700" strokeWidth="0.3" opacity="0.3" />
      </g>
      <rect x="0" y="0" width="91" height="2" fill="url(#industrial-crane-hazard)" />
      <text x="10" y="26" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="6.5" letterSpacing="0.5" fill="#FFFFFF" filter="url(#industrial-crane-shadow)">{data.nameJa}</text>
      <text x="10" y="33" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="2.2" letterSpacing="1.5" fill="#FFD700">{data.nameEn.toUpperCase()}</text>
      <text x="10" y="40" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.8" fill="#888888">{data.titleJa}</text>
      <rect x="0" y="53" width="91" height="2" fill="url(#industrial-crane-hazard)" />
      {data.logo && <image href={data.logo} x="10" y="43" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="industrial-crane-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="industrial-crane-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <pattern id="industrial-crane-hazard-b" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="2" height="4" fill="#FFD700" opacity="0.8" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="#2B2B2B" />
      <rect width="91" height="55" filter="url(#industrial-crane-grain-b)" opacity="0.06" fill="#444" />
      <rect x="0" y="0" width="91" height="2" fill="url(#industrial-crane-hazard-b)" />
      {data.logo && <image href={data.logo} x="5" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text x="10" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="2.8" letterSpacing="0.5" fill="#FFFFFF" filter="url(#industrial-crane-shadow-b)">{data.companyJa}</text>
      <text x="10" y="17" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" letterSpacing="0.8" fill="#FFD700">{data.companyEn.toUpperCase()}</text>
      <text x="10" y="21" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#888">{data.titleJa}</text>
      <line x1="10" y1="23.5" x2="81" y2="23.5" stroke="#FFD700" strokeWidth="0.2" opacity="0.5" />
      <text x="10" y="28.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#CCCCCC">{data.tel}</text>
      <text x="10" y="32.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#CCCCCC">{data.email}</text>
      <text x="10" y="36.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#CCCCCC">{data.website}</text>
      <line x1="10" y1="39" x2="81" y2="39" stroke="#FFD700" strokeWidth="0.2" opacity="0.5" />
      <text x="10" y="44" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#888888">〒{data.zipCode}</text>
      <text x="10" y="48" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#888888">{data.addressJa}</text>
      <rect x="0" y="53" width="91" height="2" fill="url(#industrial-crane-hazard-b)" />
    </g>
  ),
};

// ============================================================
// 6. WELD (溶接) — Welding sparks and seam lines
// ============================================================
const weldTemplate: TemplateDefinition = {
  id: 'industrial-weld',
  name: 'WELD',
  nameJa: '溶接',
  category: 'industrial',
  designer: 'Heavy Industry',
  description: '溶接の閃光。暗闇に散る火花と溶着の痕跡。',
  accentColor: '#B7410E',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="industrial-weld-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="industrial-weld-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="industrial-weld-glow">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
        </filter>
        <radialGradient id="industrial-weld-spark" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#FF6B35" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="#1A1A1A" />
      <rect width="91" height="55" filter="url(#industrial-weld-grain)" opacity="0.06" fill="#333" />
      {/* Weld seam */}
      <line x1="0" y1="27.5" x2="91" y2="27.5" stroke="#B7410E" strokeWidth="0.4" opacity="0.6" />
      <line x1="0" y1="27.5" x2="91" y2="27.5" stroke="#FF6B35" strokeWidth="0.15" opacity="0.8" />
      <path d="M0,27.5 Q5,26.5 10,27.5 Q15,28.5 20,27.5 Q25,26.5 30,27.5 Q35,28.5 40,27.5 Q45,26.5 50,27.5 Q55,28.5 60,27.5 Q65,26.5 70,27.5 Q75,28.5 80,27.5 Q85,26.5 91,27.5" fill="none" stroke="#666" strokeWidth="0.15" />
      {/* Sparks with glow */}
      <circle cx="15" cy="25" r="0.4" fill="#FFD700" opacity="0.7" />
      <circle cx="15" cy="25" r="1" fill="url(#industrial-weld-spark)" filter="url(#industrial-weld-glow)" />
      <circle cx="22" cy="23" r="0.2" fill="#FF6B35" opacity="0.6" />
      <circle cx="35" cy="26" r="0.3" fill="#FFD700" opacity="0.5" />
      <circle cx="48" cy="24" r="0.35" fill="#FF6B35" opacity="0.7" />
      <circle cx="55" cy="29" r="0.2" fill="#FFD700" opacity="0.4" />
      <circle cx="68" cy="25" r="0.3" fill="#FF6B35" opacity="0.6" />
      <circle cx="78" cy="30" r="0.2" fill="#FFD700" opacity="0.5" />
      <text x="10" y="18" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="6" letterSpacing="0.5" fill="#E8E8E8" filter="url(#industrial-weld-shadow)">{data.nameJa}</text>
      <text x="10" y="24" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="2" letterSpacing="1" fill="#B7410E">{data.nameEn.toUpperCase()}</text>
      <text x="10" y="38" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.8" fill="#888888">{data.titleJa}</text>
      <text x="10" y="43" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.5" fill="#666666">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="73" y="38" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="industrial-weld-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="industrial-weld-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#1A1A1A" />
      <rect width="91" height="55" filter="url(#industrial-weld-grain-b)" opacity="0.06" fill="#333" />
      <line x1="0" y1="20" x2="91" y2="20" stroke="#B7410E" strokeWidth="0.4" opacity="0.6" />
      <line x1="0" y1="20" x2="91" y2="20" stroke="#FF6B35" strokeWidth="0.15" opacity="0.8" />
      <circle cx="20" cy="18" r="0.2" fill="#FFD700" opacity="0.5" />
      <circle cx="45" cy="22" r="0.25" fill="#FF6B35" opacity="0.6" />
      <circle cx="70" cy="18.5" r="0.3" fill="#FFD700" opacity="0.4" />
      {data.logo && <image href={data.logo} x="5" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text x="10" y="13" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="2.8" fill="#E8E8E8" filter="url(#industrial-weld-shadow-b)">{data.companyJa}</text>
      <text x="10" y="17.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" letterSpacing="0.5" fill="#B7410E">{data.companyEn.toUpperCase()}</text>
      <text x="10" y="26" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#888">{data.titleJa}</text>
      <text x="10" y="30" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#AAAAAA">{data.tel}</text>
      <text x="10" y="34" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#AAAAAA">{data.email}</text>
      <text x="10" y="38" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#AAAAAA">{data.website}</text>
      <line x1="10" y1="41" x2="81" y2="41" stroke="#444444" strokeWidth="0.15" />
      <text x="10" y="45.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#666666">〒{data.zipCode}</text>
      <text x="10" y="49" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#666666">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 7. PRESS-I (圧) — Hydraulic press / stamped metal
// ============================================================
const pressTemplate: TemplateDefinition = {
  id: 'industrial-press',
  name: 'PRESS-I',
  nameJa: '圧',
  category: 'industrial',
  designer: 'Heavy Industry',
  description: 'プレス加工の力。金属に刻印された文字の確かさ。',
  accentColor: '#333333',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="industrial-press-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D8D8D8" />
          <stop offset="40%" stopColor="#C8C8C8" />
          <stop offset="100%" stopColor="#B0B0B0" />
        </linearGradient>
        <filter id="industrial-press-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="industrial-press-emboss">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" result="blur" />
          <feOffset in="blur" dx="0.15" dy="0.2" result="offset" />
          <feFlood floodColor="#FFF" floodOpacity="0.4" result="white" />
          <feComposite in="white" in2="offset" operator="in" result="highlight" />
          <feMerge><feMergeNode in="highlight" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#industrial-press-bg)" />
      <rect width="91" height="55" filter="url(#industrial-press-grain)" opacity="0.08" fill="#AAA" />
      <rect x="4" y="4" width="83" height="47" fill="none" stroke="#999999" strokeWidth="0.8" />
      <rect x="5.5" y="5.5" width="80" height="44" fill="none" stroke="#A8A8A8" strokeWidth="0.2" />
      {/* Embossed corner marks */}
      <path d="M8,8 L12,8 M8,8 L8,12" fill="none" stroke="#DADADA" strokeWidth="0.3" />
      <path d="M83,8 L79,8 M83,8 L83,12" fill="none" stroke="#DADADA" strokeWidth="0.3" />
      <path d="M8,47 L12,47 M8,47 L8,43" fill="none" stroke="#DADADA" strokeWidth="0.3" />
      <path d="M83,47 L79,47 M83,47 L83,43" fill="none" stroke="#DADADA" strokeWidth="0.3" />
      <text x="45.5" y="22.3" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="800" fontSize="6.5" letterSpacing="0.8" fill="#C8C8C8">{data.nameJa}</text>
      <text x="45.5" y="22" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="800" fontSize="6.5" letterSpacing="0.8" fill="#888888" filter="url(#industrial-press-emboss)">{data.nameJa}</text>
      <text x="45.5" y="30.3" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="2.2" letterSpacing="1.5" fill="#C8C8C8">{data.nameEn.toUpperCase()}</text>
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="2.2" letterSpacing="1.5" fill="#888888">{data.nameEn.toUpperCase()}</text>
      <text x="45.5" y="38" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.8" fill="#777777">{data.titleJa}</text>
      {data.logo && <image href={data.logo} x="73" y="38" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="industrial-press-bg-b" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D0D0D0" />
          <stop offset="100%" stopColor="#B8B8B8" />
        </linearGradient>
        <filter id="industrial-press-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#industrial-press-bg-b)" />
      <rect width="91" height="55" filter="url(#industrial-press-grain-b)" opacity="0.08" fill="#AAA" />
      <rect x="4" y="4" width="83" height="47" fill="none" stroke="#999999" strokeWidth="0.8" />
      <rect x="5.5" y="5.5" width="80" height="44" fill="none" stroke="#A8A8A8" strokeWidth="0.2" />
      {data.logo && <image href={data.logo} x="41.5" y="5.5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text x="45.5" y="14" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="2.8" fill="#888888">{data.companyJa}</text>
      <text x="45.5" y="18.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.5" letterSpacing="0.8" fill="#999999">{data.companyEn.toUpperCase()}</text>
      <text x="45.5" y="22" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#888">{data.titleJa}</text>
      <line x1="15" y1="24.5" x2="76" y2="24.5" stroke="#A8A8A8" strokeWidth="0.3" />
      <text x="45.5" y="29.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fill="#777777">{data.tel}</text>
      <text x="45.5" y="33.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fill="#777777">{data.email}</text>
      <text x="45.5" y="37.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fill="#777777">{data.website}</text>
      <line x1="15" y1="40" x2="76" y2="40" stroke="#A8A8A8" strokeWidth="0.3" />
      <text x="45.5" y="44.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#999999">〒{data.zipCode}</text>
      <text x="45.5" y="48" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#999999">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 8. BOLT (栓) — Hex bolt and threaded patterns
// ============================================================
const boltTemplate: TemplateDefinition = {
  id: 'industrial-bolt',
  name: 'BOLT',
  nameJa: '栓',
  category: 'industrial',
  designer: 'Heavy Industry',
  description: 'ボルトの六角形。ネジ山が刻む精密なリズム。',
  accentColor: '#71797E',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="industrial-bolt-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="industrial-bolt-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <clipPath id="industrial-bolt-clip"><rect width="91" height="55" /></clipPath>
      </defs>
      <rect width="91" height="55" fill="#2A2A2A" />
      <rect width="91" height="55" filter="url(#industrial-bolt-grain)" opacity="0.06" fill="#444" />
      <g clipPath="url(#industrial-bolt-clip)">
        <polygon points="78,2 86,6.6 86,15.8 78,20.4 70,15.8 70,6.6" fill="none" stroke="#555555" strokeWidth="0.4" />
        <polygon points="78,4.5 83.5,7.7 83.5,14.1 78,17.3 72.5,14.1 72.5,7.7" fill="none" stroke="#444444" strokeWidth="0.2" />
        <circle cx="78" cy="11.2" r="3" fill="none" stroke="#555555" strokeWidth="0.3" />
        <polygon points="14,40 19,42.9 19,48.7 14,51.6 9,48.7 9,42.9" fill="none" stroke="#555555" strokeWidth="0.3" />
        <circle cx="14" cy="47.25" r="2" fill="none" stroke="#444444" strokeWidth="0.2" />
        {/* Thread lines */}
        {[1, 2.5, 4, 51, 52.5, 54].map((y, i) => (
          <line key={i} x1="0" y1={y} x2="91" y2={y} stroke="#3A3A3A" strokeWidth="0.15" />
        ))}
      </g>
      <text x="10" y="23" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="5.5" letterSpacing="0.5" fill="#DDDDDD" filter="url(#industrial-bolt-shadow)">{data.nameJa}</text>
      <text x="10" y="29" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.8" fill="#71797E">{data.nameEn.toUpperCase()}</text>
      <text x="10" y="36" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#888888">{data.titleJa}</text>
      {data.logo && <image href={data.logo} x="73" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="industrial-bolt-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="industrial-bolt-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#2A2A2A" />
      <rect width="91" height="55" filter="url(#industrial-bolt-grain-b)" opacity="0.06" fill="#444" />
      {[1, 2.5, 4, 51, 52.5, 54].map((y, i) => (
        <line key={i} x1="0" y1={y} x2="91" y2={y} stroke="#3A3A3A" strokeWidth="0.15" />
      ))}
      <polygon points="80,42 84,44.3 84,48.9 80,51.2 76,48.9 76,44.3" fill="none" stroke="#555555" strokeWidth="0.3" />
      {data.logo && <image href={data.logo} x="5" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text x="10" y="13" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="2.8" fill="#DDDDDD" filter="url(#industrial-bolt-shadow-b)">{data.companyJa}</text>
      <text x="10" y="17.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" letterSpacing="0.5" fill="#71797E">{data.companyEn.toUpperCase()}</text>
      <text x="10" y="21.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#888">{data.titleJa}</text>
      <line x1="10" y1="24" x2="70" y2="24" stroke="#444444" strokeWidth="0.2" />
      <text x="10" y="29" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fill="#AAAAAA">{data.tel}</text>
      <text x="10" y="33" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fill="#AAAAAA">{data.email}</text>
      <text x="10" y="37" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fill="#AAAAAA">{data.website}</text>
      <line x1="10" y1="40" x2="70" y2="40" stroke="#444444" strokeWidth="0.2" />
      <text x="10" y="44.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#777777">〒{data.zipCode}</text>
      <text x="10" y="48" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#777777">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 9. FACTORY (工場) — Factory floor plan aesthetic
// ============================================================
const factoryTemplate: TemplateDefinition = {
  id: 'industrial-factory',
  name: 'FACTORY',
  nameJa: '工場',
  category: 'industrial',
  designer: 'Heavy Industry',
  description: '工場の設計図。ブループリントに刻まれた情報。',
  accentColor: '#B7410E',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="industrial-factory-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="industrial-factory-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <pattern id="industrial-factory-grid" width="5" height="5" patternUnits="userSpaceOnUse">
          <line x1="5" y1="0" x2="5" y2="5" stroke="#2A4A6B" strokeWidth="0.1" />
          <line x1="0" y1="5" x2="5" y2="5" stroke="#2A4A6B" strokeWidth="0.1" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="#1E3248" />
      <rect width="91" height="55" fill="url(#industrial-factory-grid)" />
      <rect width="91" height="55" filter="url(#industrial-factory-grain)" opacity="0.06" fill="#2A4A6B" />
      {/* Factory outline shapes */}
      <rect x="60" y="35" width="20" height="12" fill="none" stroke="#4A7AAA" strokeWidth="0.2" strokeDasharray="0.5,0.5" />
      <rect x="65" y="38" width="10" height="6" fill="none" stroke="#4A7AAA" strokeWidth="0.15" />
      <line x1="60" y1="41" x2="80" y2="41" stroke="#4A7AAA" strokeWidth="0.1" strokeDasharray="0.3,0.3" />
      {/* Blueprint corner marks */}
      <path d="M3,3 L8,3 M3,3 L3,8" fill="none" stroke="#6AA0D0" strokeWidth="0.15" />
      <path d="M88,3 L83,3 M88,3 L88,8" fill="none" stroke="#6AA0D0" strokeWidth="0.15" />
      <path d="M3,52 L8,52 M3,47 L3,52" fill="none" stroke="#6AA0D0" strokeWidth="0.15" />
      <path d="M88,52 L83,52 M88,47 L88,52" fill="none" stroke="#6AA0D0" strokeWidth="0.15" />
      <text x="8" y="18" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="6" letterSpacing="0.5" fill="#C8DCF0" filter="url(#industrial-factory-shadow)">{data.nameJa}</text>
      <text x="8" y="25" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="2.2" letterSpacing="1" fill="#6AA0D0">{data.nameEn.toUpperCase()}</text>
      <line x1="8" y1="29" x2="50" y2="29" stroke="#6AA0D0" strokeWidth="0.2" />
      <text x="8" y="35" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#8AB8E0">{data.titleJa}</text>
      <text x="8" y="42" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#6A90B0">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="73" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="industrial-factory-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <pattern id="industrial-factory-grid-b" width="5" height="5" patternUnits="userSpaceOnUse">
          <line x1="5" y1="0" x2="5" y2="5" stroke="#2A4A6B" strokeWidth="0.1" />
          <line x1="0" y1="5" x2="5" y2="5" stroke="#2A4A6B" strokeWidth="0.1" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="#1E3248" />
      <rect width="91" height="55" fill="url(#industrial-factory-grid-b)" />
      <rect width="91" height="55" filter="url(#industrial-factory-grain-b)" opacity="0.06" fill="#2A4A6B" />
      <path d="M3,3 L8,3 M3,3 L3,8" fill="none" stroke="#6AA0D0" strokeWidth="0.15" />
      <path d="M88,3 L83,3 M88,3 L88,8" fill="none" stroke="#6AA0D0" strokeWidth="0.15" />
      <path d="M3,52 L8,52 M3,47 L3,52" fill="none" stroke="#6AA0D0" strokeWidth="0.15" />
      <path d="M88,52 L83,52 M88,47 L88,52" fill="none" stroke="#6AA0D0" strokeWidth="0.15" />
      {data.logo && <image href={data.logo} x="5" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text x="8" y="13" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="2.5" fill="#C8DCF0">{data.companyJa}</text>
      <text x="8" y="17.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" letterSpacing="0.5" fill="#6AA0D0">{data.companyEn.toUpperCase()}</text>
      <text x="8" y="21.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#8AB8E0">{data.titleJa}</text>
      <line x1="8" y1="24" x2="83" y2="24" stroke="#4A7AAA" strokeWidth="0.15" />
      <text x="8" y="29" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fill="#8AB8E0">TEL: {data.tel}</text>
      <text x="8" y="33" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fill="#8AB8E0">EMAIL: {data.email}</text>
      <text x="8" y="37" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fill="#8AB8E0">WEB: {data.website}</text>
      <line x1="8" y1="40" x2="83" y2="40" stroke="#4A7AAA" strokeWidth="0.15" />
      <text x="8" y="44.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#6A90B0">〒{data.zipCode}</text>
      <text x="8" y="48.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#6A90B0">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 10. FORGE (鍛) — Blacksmith forge aesthetic
// ============================================================
const forgeTemplate: TemplateDefinition = {
  id: 'industrial-forge',
  name: 'FORGE',
  nameJa: '鍛',
  category: 'industrial',
  designer: 'Heavy Industry',
  description: '鍛冶場の炎。鉄を打つ槌の響きが宿る。',
  accentColor: '#B7410E',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="industrial-forge-ember" cx="50%" cy="80%" r="50%">
          <stop offset="0%" stopColor="#B7410E" stopOpacity="0.3" />
          <stop offset="60%" stopColor="#B7410E" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#B7410E" stopOpacity="0" />
        </radialGradient>
        <filter id="industrial-forge-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="industrial-forge-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="industrial-forge-glow">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.4" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="#141414" />
      <rect width="91" height="55" fill="url(#industrial-forge-ember)" />
      <rect width="91" height="55" filter="url(#industrial-forge-grain)" opacity="0.06" fill="#333" />
      {/* Ember particles */}
      <circle cx="30" cy="48" r="0.4" fill="#FF6B35" opacity="0.6" />
      <circle cx="30" cy="48" r="0.8" fill="#FF6B35" opacity="0.15" filter="url(#industrial-forge-glow)" />
      <circle cx="45" cy="45" r="0.3" fill="#FFD700" opacity="0.4" />
      <circle cx="55" cy="50" r="0.35" fill="#B7410E" opacity="0.7" />
      <circle cx="38" cy="42" r="0.2" fill="#FF6B35" opacity="0.3" />
      <circle cx="62" cy="47" r="0.25" fill="#FFD700" opacity="0.5" />
      <circle cx="50" cy="52" r="0.3" fill="#B7410E" opacity="0.4" />
      <rect x="8" y="30" width="50" height="0.8" fill="#B7410E" opacity="0.6" />
      <text x="8" y="24" fontFamily="'Noto Sans JP', sans-serif" fontWeight="900" fontSize="7" letterSpacing="1" fill="#E8E8E8" filter="url(#industrial-forge-shadow)">{data.nameJa}</text>
      <text x="8" y="38" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="2.5" letterSpacing="2" fill="#B7410E">{data.nameEn.toUpperCase()}</text>
      <text x="8" y="45" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.8" fill="#777777">{data.titleJa}</text>
      {data.logo && <image href={data.logo} x="73" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="industrial-forge-ember-b" cx="50%" cy="20%" r="50%">
          <stop offset="0%" stopColor="#B7410E" stopOpacity="0.2" />
          <stop offset="60%" stopColor="#B7410E" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#B7410E" stopOpacity="0" />
        </radialGradient>
        <filter id="industrial-forge-grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="industrial-forge-shadow-b">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#000" floodOpacity="0.08" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#141414" />
      <rect width="91" height="55" fill="url(#industrial-forge-ember-b)" />
      <rect width="91" height="55" filter="url(#industrial-forge-grain-b)" opacity="0.06" fill="#333" />
      <circle cx="20" cy="8" r="0.3" fill="#FF6B35" opacity="0.4" />
      <circle cx="40" cy="5" r="0.25" fill="#FFD700" opacity="0.3" />
      <circle cx="65" cy="10" r="0.35" fill="#B7410E" opacity="0.5" />
      {data.logo && <image href={data.logo} x="5" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      <text x="8" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="900" fontSize="3" letterSpacing="0.5" fill="#E8E8E8" filter="url(#industrial-forge-shadow-b)">{data.companyJa}</text>
      <text x="8" y="19" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.5" letterSpacing="1" fill="#B7410E">{data.companyEn.toUpperCase()}</text>
      <text x="8" y="23" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#888">{data.titleJa}</text>
      <rect x="8" y="25.5" width="75" height="0.5" fill="#B7410E" opacity="0.4" />
      <text x="8" y="31" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#AAAAAA">{data.tel}</text>
      <text x="8" y="35" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#AAAAAA">{data.email}</text>
      <text x="8" y="39" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#AAAAAA">{data.website}</text>
      <rect x="8" y="42" width="75" height="0.5" fill="#B7410E" opacity="0.4" />
      <text x="8" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#666666">〒{data.zipCode}</text>
      <text x="8" y="51" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#666666">{data.addressJa}</text>
    </g>
  ),
};

export const industrialTemplates: TemplateDefinition[] = [
  steelTemplate,
  rivetTemplate,
  gearTemplate,
  pipeTemplate,
  craneTemplate,
  weldTemplate,
  pressTemplate,
  boltTemplate,
  factoryTemplate,
  forgeTemplate,
];
