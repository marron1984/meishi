import type { CardData, TemplateDefinition } from '../types';

const EN = "'Inter', sans-serif";
const JA = "'Noto Sans JP', sans-serif";

// ============================================================
// 1. SILICON (谷) — Jony Ive inspired
// Ultra-clean white, SF Pro feel, precise spacing, light gray text
// ============================================================
const siliconTemplate: TemplateDefinition = {
  id: 'tech-silicon',
  name: 'SILICON',
  nameJa: '谷',
  category: 'tech',
  designer: 'Jony Ive',
  description: 'Appleの精神。極限まで削ぎ落とされた白の美学。',
  accentColor: '#A1A1A6',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="tech-silicon-paper"><feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="tech-silicon-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.2" result="blur"/><feOffset dx="0.06" dy="0.1" result="shifted"/><feFlood floodColor="#000" floodOpacity="0.05" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <linearGradient id="tech-silicon-line" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#D2D2D7" stopOpacity="0"/><stop offset="10%" stopColor="#D2D2D7"/><stop offset="90%" stopColor="#D2D2D7"/><stop offset="100%" stopColor="#D2D2D7" stopOpacity="0"/></linearGradient>
      </defs>
      <rect width="91" height="55" fill="#ffffff" filter="url(#tech-silicon-paper)" />
      <line x1="8" y1="6" x2="20" y2="6" stroke="#D2D2D7" strokeWidth="0.3" />
      <circle cx="8" cy="6" r="0.15" fill="#A1A1A6" opacity="0.4" />
      <rect x="82" y="48" width="4" height="0.08" fill="#D2D2D7" opacity="0.5" />
      <circle cx="84" cy="4" r="0.2" fill="#A1A1A6" opacity="0.2" />
      <text x="8" y="22" fontFamily={JA} fontWeight="600" fontSize="5.5" letterSpacing="0.15" fill="#1D1D1F" filter="url(#tech-silicon-shadow)">{data.nameJa}</text>
      <text x="8" y="28" fontFamily={EN} fontWeight="300" fontSize="2" letterSpacing="0.4" fill="#86868B">{data.nameEn}</text>
      <text x="8" y="34" fontFamily={JA} fontWeight="300" fontSize="1.8" letterSpacing="0.2" fill="#A1A1A6">{data.titleJa}</text>
      <text x="8" y="38" fontFamily={EN} fontWeight="200" fontSize="1.4" letterSpacing="0.2" fill="#A1A1A6">{data.titleEn}</text>
      <line x1="8" y1="42" x2="40" y2="42" stroke="url(#tech-silicon-line)" strokeWidth="0.12" />
      <text x="8" y="48" fontFamily={EN} fontWeight="300" fontSize="1.3" letterSpacing="0.15" fill="#A1A1A6">{data.companyEn}</text>
      <text x="8" y="51.5" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#BBBBC0">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="76" y="40" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.45" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="tech-silicon-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
      </defs>
      <rect width="91" height="55" fill="#ffffff" filter="url(#tech-silicon-paper-b)" />
      <line x1="8" y1="6" x2="30" y2="6" stroke="#D2D2D7" strokeWidth="0.2" />
      <circle cx="83" cy="48" r="0.2" fill="#A1A1A6" opacity="0.2" />
      <rect x="8" y="3" width="0.08" height="3" fill="#D2D2D7" opacity="0.4" />
      <text x="8" y="12" fontFamily={JA} fontWeight="500" fontSize="2.2" letterSpacing="0.3" fill="#1D1D1F">{data.companyJa}</text>
      <text x="8" y="16.5" fontFamily={EN} fontWeight="300" fontSize="1.4" letterSpacing="0.3" fill="#86868B">{data.companyEn}</text>
      <text x="8" y="20" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#A1A1A6">{data.titleJa}</text>
      <line x1="8" y1="23" x2="83" y2="23" stroke="#D2D2D7" strokeWidth="0.12" />
      <text x="8" y="28" fontFamily={EN} fontWeight="300" fontSize="1.5" letterSpacing="0.1" fill="#6E6E73">TEL {data.tel}</text>
      <text x="8" y="32" fontFamily={EN} fontWeight="300" fontSize="1.5" letterSpacing="0.1" fill="#6E6E73">{data.email}</text>
      <text x="8" y="36" fontFamily={EN} fontWeight="300" fontSize="1.5" letterSpacing="0.1" fill="#6E6E73">{data.website}</text>
      <line x1="8" y1="39" x2="83" y2="39" stroke="#D2D2D7" strokeWidth="0.12" />
      <text x="8" y="44" fontFamily={JA} fontWeight="200" fontSize="1.2" fill="#A1A1A6">〒{data.zipCode}</text>
      <text x="8" y="47.5" fontFamily={JA} fontWeight="200" fontSize="1.2" fill="#A1A1A6">{data.addressJa}</text>
      <text x="8" y="51" fontFamily={EN} fontWeight="200" fontSize="1.1" fill="#BBBBC0">{data.addressEn}</text>
      {data.logo && <image href={data.logo} x="76" y="8" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
    </g>
  ),
};

// ============================================================
// 2. TERMINAL (端) — Hacker aesthetic
// Dark background, green monospace text, command-line feel
// ============================================================
const terminalTemplate: TemplateDefinition = {
  id: 'tech-terminal',
  name: 'TERMINAL',
  nameJa: '端',
  category: 'tech',
  designer: 'Hacker Culture',
  description: 'ターミナルの闇。緑の文字が静かに点滅する。',
  accentColor: '#00FF41',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="tech-terminal-paper"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="5" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="tech-terminal-glow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.5" result="blur"/><feFlood floodColor="#00FF41" floodOpacity="0.15" result="color"/><feComposite in="color" in2="blur" operator="in" result="glow"/><feMerge><feMergeNode in="glow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <pattern id="tech-terminal-scan" width="91" height="1.5" patternUnits="userSpaceOnUse"><rect width="91" height="0.75" fill="transparent" /><rect y="0.75" width="91" height="0.75" fill="rgba(0,255,65,0.015)" /></pattern>
        <radialGradient id="tech-terminal-vignette" cx="50%" cy="50%" r="70%"><stop offset="0%" stopColor="#0D1117"/><stop offset="100%" stopColor="#060A0E"/></radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#tech-terminal-vignette)" filter="url(#tech-terminal-paper)" />
      <rect width="91" height="55" fill="url(#tech-terminal-scan)" />
      <text x="6" y="10" fontFamily="'Space Grotesk', monospace" fontWeight="400" fontSize="1.4" fill="#00FF41" opacity="0.4">{'$> whoami'}</text>
      <rect x="6" y="11.5" width="15" height="0.08" fill="#00FF41" opacity="0.15" />
      <text x="6" y="22" fontFamily={JA} fontWeight="500" fontSize="6" letterSpacing="0.3" fill="#00FF41" filter="url(#tech-terminal-glow)">{data.nameJa}</text>
      <text x="6" y="28" fontFamily="'Space Grotesk', monospace" fontWeight="400" fontSize="2" letterSpacing="0.3" fill="#00FF41" opacity="0.8">{data.nameEn}</text>
      <text x="6" y="33.5" fontFamily={JA} fontWeight="300" fontSize="1.8" fill="#00FF41" opacity="0.45">{data.titleJa}</text>
      <rect x="6" y="37" width="3" height="0.4" fill="#00FF41" opacity="0.7" />
      <circle cx="84" cy="6" r="0.3" fill="#00FF41" opacity="0.4" />
      <circle cx="80" cy="6" r="0.3" fill="#00FF41" opacity="0.2" />
      <rect x="6" y="43" width="1" height="0.6" fill="#00FF41" opacity="0.5" />
      <text x="6" y="48" fontFamily="'Space Grotesk', monospace" fontWeight="400" fontSize="1.2" fill="#0E4F1F">// {data.companyEn}</text>
      <text x="6" y="51.5" fontFamily={JA} fontWeight="300" fontSize="1.1" fill="#0E4F1F">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="76" y="40" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.3" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="tech-terminal-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="5" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <pattern id="tech-terminal-scan-b" width="91" height="1.5" patternUnits="userSpaceOnUse"><rect width="91" height="0.75" fill="transparent" /><rect y="0.75" width="91" height="0.75" fill="rgba(0,255,65,0.015)" /></pattern>
      </defs>
      <rect width="91" height="55" fill="#0D1117" filter="url(#tech-terminal-paper-b)" />
      <rect width="91" height="55" fill="url(#tech-terminal-scan-b)" />
      <text x="6" y="8" fontFamily="'Space Grotesk', monospace" fontWeight="400" fontSize="1.2" fill="#00FF41" opacity="0.35">{'$> cat contact.txt'}</text>
      <rect x="6" y="9.5" width="12" height="0.06" fill="#00FF41" opacity="0.15" />
      <text x="6" y="15" fontFamily={JA} fontWeight="400" fontSize="2.2" fill="#00FF41" opacity="0.9">{data.companyJa}</text>
      <text x="6" y="19.5" fontFamily="'Space Grotesk', monospace" fontWeight="300" fontSize="1.4" fill="#00FF41" opacity="0.55">{data.companyEn}</text>
      <text x="6" y="23" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#00FF41" opacity="0.35">{data.titleJa}</text>
      <line x1="6" y1="25.5" x2="85" y2="25.5" stroke="#00FF41" strokeWidth="0.08" opacity="0.2" />
      <text x="6" y="30" fontFamily="'Space Grotesk', monospace" fontWeight="400" fontSize="1.4" fill="#00FF41" opacity="0.7">TEL: {data.tel}</text>
      <text x="6" y="34" fontFamily="'Space Grotesk', monospace" fontWeight="400" fontSize="1.4" fill="#00FF41" opacity="0.7">EMAIL: {data.email}</text>
      <text x="6" y="38" fontFamily="'Space Grotesk', monospace" fontWeight="400" fontSize="1.4" fill="#00FF41" opacity="0.7">WEB: {data.website}</text>
      <line x1="6" y1="40.5" x2="85" y2="40.5" stroke="#00FF41" strokeWidth="0.08" opacity="0.2" />
      <text x="6" y="44.5" fontFamily={JA} fontWeight="300" fontSize="1.2" fill="#00FF41" opacity="0.35">〒{data.zipCode}</text>
      <text x="6" y="48" fontFamily={JA} fontWeight="300" fontSize="1.2" fill="#00FF41" opacity="0.35">{data.addressJa}</text>
      <text x="6" y="51.5" fontFamily={EN} fontWeight="300" fontSize="1.1" fill="#00FF41" opacity="0.25">{data.addressEn}</text>
      <rect x="6" y="53" width="3" height="0.4" fill="#00FF41" opacity="0.5" />
      {data.logo && <image href={data.logo} x="76" y="6" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.25" />}
    </g>
  ),
};

// ============================================================
// 3. MATERIAL (素) — Google Material Design
// Card shadow effect, colored top bar, clean typography
// ============================================================
const materialTemplate: TemplateDefinition = {
  id: 'tech-material',
  name: 'MATERIAL',
  nameJa: '素',
  category: 'tech',
  designer: 'Google Design',
  description: 'マテリアルの層。影が奥行きを語る。',
  accentColor: '#4285F4',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="tech-material-paper"><feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="tech-material-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.25" result="blur"/><feOffset dx="0.08" dy="0.12" result="shifted"/><feFlood floodColor="#000" floodOpacity="0.06" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <filter id="tech-material-card"><feGaussianBlur in="SourceAlpha" stdDeviation="0.6" result="blur"/><feOffset dx="0.2" dy="0.4" result="shifted"/><feFlood floodColor="#000" floodOpacity="0.1" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <linearGradient id="tech-material-bar" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#4285F4"/><stop offset="50%" stopColor="#5B9BF7"/><stop offset="100%" stopColor="#4285F4"/></linearGradient>
      </defs>
      <rect width="91" height="55" fill="#FAFAFA" filter="url(#tech-material-paper)" />
      <rect x="5" y="5" width="81" height="45" rx="0.8" fill="#FFFFFF" filter="url(#tech-material-card)" />
      <rect x="5.2" y="5.2" width="80.6" height="44.6" rx="0.8" fill="none" stroke="#E0E0E0" strokeWidth="0.1" />
      <rect x="5" y="5" width="81" height="3.5" rx="0.8" fill="url(#tech-material-bar)" />
      <rect x="5" y="7" width="81" height="1.5" fill="#4285F4" />
      <text x="12" y="18" fontFamily={JA} fontWeight="500" fontSize="5.5" letterSpacing="0.2" fill="#212121" filter="url(#tech-material-shadow)">{data.nameJa}</text>
      <text x="12" y="23.5" fontFamily={EN} fontWeight="400" fontSize="2" letterSpacing="0.15" fill="#757575">{data.nameEn}</text>
      <text x="12" y="29" fontFamily={JA} fontWeight="300" fontSize="1.8" fill="#9E9E9E">{data.titleJa}</text>
      <line x1="12" y1="32.5" x2="80" y2="32.5" stroke="#E0E0E0" strokeWidth="0.15" />
      <text x="12" y="37.5" fontFamily={EN} fontWeight="400" fontSize="1.4" fill="#757575">{data.email}</text>
      <text x="12" y="41.5" fontFamily={EN} fontWeight="400" fontSize="1.4" fill="#757575">{data.tel}</text>
      <circle cx="78" cy="38" r="3.5" fill="#4285F4" opacity="0.08" />
      <circle cx="78" cy="38" r="1.5" fill="#4285F4" opacity="0.2" />
      <circle cx="78" cy="38" r="0.4" fill="#4285F4" opacity="0.4" />
      <text x="12" y="46" fontFamily={JA} fontWeight="300" fontSize="1.2" fill="#BDBDBD">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="72" y="42" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="tech-material-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="tech-material-card-b"><feGaussianBlur in="SourceAlpha" stdDeviation="0.6" result="blur"/><feOffset dx="0.2" dy="0.4" result="shifted"/><feFlood floodColor="#000" floodOpacity="0.1" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <rect width="91" height="55" fill="#FAFAFA" filter="url(#tech-material-paper-b)" />
      <rect x="5" y="5" width="81" height="45" rx="0.8" fill="#FFFFFF" filter="url(#tech-material-card-b)" />
      <rect x="5" y="5" width="81" height="3.5" rx="0.8" fill="#4285F4" />
      <rect x="5" y="7" width="81" height="1.5" fill="#4285F4" />
      <text x="12" y="16" fontFamily={JA} fontWeight="500" fontSize="2.2" fill="#212121">{data.companyJa}</text>
      <text x="12" y="20.5" fontFamily={EN} fontWeight="400" fontSize="1.5" letterSpacing="0.15" fill="#757575">{data.companyEn}</text>
      <text x="12" y="24" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#9E9E9E">{data.titleJa}</text>
      <line x1="12" y1="26.5" x2="80" y2="26.5" stroke="#E0E0E0" strokeWidth="0.15" />
      <text x="12" y="31" fontFamily={EN} fontWeight="400" fontSize="1.4" fill="#616161">TEL {data.tel}</text>
      <text x="12" y="35" fontFamily={EN} fontWeight="400" fontSize="1.4" fill="#616161">{data.email}</text>
      <text x="12" y="39" fontFamily={EN} fontWeight="400" fontSize="1.4" fill="#616161">{data.website}</text>
      <line x1="12" y1="41.5" x2="80" y2="41.5" stroke="#E0E0E0" strokeWidth="0.15" />
      <text x="12" y="45.5" fontFamily={JA} fontWeight="300" fontSize="1.2" fill="#9E9E9E">〒{data.zipCode}</text>
      <text x="12" y="48.5" fontFamily={JA} fontWeight="300" fontSize="1.2" fill="#9E9E9E">{data.addressJa}</text>
      <circle cx="78" cy="14" r="2.5" fill="#4285F4" opacity="0.08" />
      <circle cx="78" cy="14" r="1" fill="#4285F4" opacity="0.15" />
      {data.logo && <image href={data.logo} x="72" y="42" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
    </g>
  ),
};

// ============================================================
// 4. CARBON (炭) — Dark mode native
// Near-black background, white text, subtle borders
// ============================================================
const carbonTemplate: TemplateDefinition = {
  id: 'tech-carbon',
  name: 'CARBON',
  nameJa: '炭',
  category: 'tech',
  designer: 'Dark Mode',
  description: '漆黒のカーボン。闇の中に浮かぶ白い文字。',
  accentColor: '#FFFFFF',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="tech-carbon-paper"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="tech-carbon-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.3" result="blur"/><feOffset dx="0.1" dy="0.15" result="shifted"/><feFlood floodColor="#fff" floodOpacity="0.04" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <linearGradient id="tech-carbon-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#161616"/><stop offset="100%" stopColor="#0E0E0E"/></linearGradient>
        <pattern id="tech-carbon-fiber" width="2" height="2" patternUnits="userSpaceOnUse"><rect width="2" height="2" fill="#111111"/><rect width="1" height="1" fill="#141414"/><rect x="1" y="1" width="1" height="1" fill="#141414"/></pattern>
      </defs>
      <rect width="91" height="55" fill="url(#tech-carbon-bg)" filter="url(#tech-carbon-paper)" />
      <rect width="91" height="55" fill="url(#tech-carbon-fiber)" opacity="0.3" />
      <rect x="0.5" y="0.5" width="90" height="54" fill="none" stroke="#2A2A2A" strokeWidth="0.15" />
      <line x1="7" y1="7" x2="25" y2="7" stroke="#3A3A3A" strokeWidth="0.3" />
      <circle cx="7" cy="7" r="0.2" fill="#555555" />
      <rect x="80" y="4" width="4" height="0.1" fill="#333333" />
      <text x="7" y="22" fontFamily={JA} fontWeight="500" fontSize="5.5" letterSpacing="0.3" fill="#FFFFFF" filter="url(#tech-carbon-shadow)">{data.nameJa}</text>
      <text x="7" y="28" fontFamily={EN} fontWeight="300" fontSize="2" letterSpacing="0.4" fill="#888888">{data.nameEn}</text>
      <text x="7" y="34" fontFamily={JA} fontWeight="300" fontSize="1.8" fill="#555555">{data.titleJa}</text>
      <text x="7" y="38" fontFamily={EN} fontWeight="200" fontSize="1.4" fill="#444444">{data.titleEn}</text>
      <line x1="7" y1="42" x2="84" y2="42" stroke="#2A2A2A" strokeWidth="0.12" />
      <text x="84" y="48" textAnchor="end" fontFamily={EN} fontWeight="300" fontSize="1.3" letterSpacing="0.2" fill="#444444">{data.companyEn}</text>
      <text x="84" y="51.5" textAnchor="end" fontFamily={JA} fontWeight="300" fontSize="1.2" fill="#3A3A3A">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="76" y="6" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.35" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="tech-carbon-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <pattern id="tech-carbon-fiber-b" width="2" height="2" patternUnits="userSpaceOnUse"><rect width="2" height="2" fill="#111111"/><rect width="1" height="1" fill="#141414"/><rect x="1" y="1" width="1" height="1" fill="#141414"/></pattern>
      </defs>
      <rect width="91" height="55" fill="#111111" filter="url(#tech-carbon-paper-b)" />
      <rect width="91" height="55" fill="url(#tech-carbon-fiber-b)" opacity="0.3" />
      <rect x="0.5" y="0.5" width="90" height="54" fill="none" stroke="#2A2A2A" strokeWidth="0.15" />
      <circle cx="84" cy="48" r="0.2" fill="#555555" />
      <rect x="7" y="4" width="4" height="0.1" fill="#333333" />
      <text x="7" y="12" fontFamily={JA} fontWeight="500" fontSize="2.2" fill="#FFFFFF">{data.companyJa}</text>
      <text x="7" y="16.5" fontFamily={EN} fontWeight="300" fontSize="1.5" letterSpacing="0.2" fill="#666666">{data.companyEn}</text>
      <text x="7" y="20" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#444444">{data.titleJa}</text>
      <line x1="7" y1="22.5" x2="84" y2="22.5" stroke="#2A2A2A" strokeWidth="0.12" />
      <text x="7" y="27.5" fontFamily={EN} fontWeight="300" fontSize="1.5" fill="#AAAAAA">TEL {data.tel}</text>
      <text x="7" y="31.5" fontFamily={EN} fontWeight="300" fontSize="1.5" fill="#AAAAAA">{data.email}</text>
      <text x="7" y="35.5" fontFamily={EN} fontWeight="300" fontSize="1.5" fill="#AAAAAA">{data.website}</text>
      <line x1="7" y1="38.5" x2="84" y2="38.5" stroke="#2A2A2A" strokeWidth="0.12" />
      <text x="7" y="43" fontFamily={JA} fontWeight="300" fontSize="1.2" fill="#555555">〒{data.zipCode}</text>
      <text x="7" y="46.5" fontFamily={JA} fontWeight="300" fontSize="1.2" fill="#555555">{data.addressJa}</text>
      <text x="7" y="50" fontFamily={EN} fontWeight="300" fontSize="1.1" fill="#3A3A3A">{data.addressEn}</text>
      {data.logo && <image href={data.logo} x="76" y="40" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.3" />}
    </g>
  ),
};

// ============================================================
// 5. CYBER (電) — Cyberpunk neon
// Black background, neon cyan accents, futuristic
// ============================================================
const cyberTemplate: TemplateDefinition = {
  id: 'tech-cyber',
  name: 'CYBER',
  nameJa: '電',
  category: 'tech',
  designer: 'Cyberpunk',
  description: 'ネオンが走る電脳空間。サイバーパンクの光。',
  accentColor: '#00FFFF',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="tech-cyber-paper"><feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="5" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="tech-cyber-glow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.6" result="blur"/><feFlood floodColor="#00FFFF" floodOpacity="0.2" result="color"/><feComposite in="color" in2="blur" operator="in" result="glow"/><feMerge><feMergeNode in="glow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <linearGradient id="tech-cyber-grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#00FFFF" stopOpacity="0.12"/><stop offset="100%" stopColor="#FF00FF" stopOpacity="0.04"/></linearGradient>
        <linearGradient id="tech-cyber-edge" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#00FFFF"/><stop offset="50%" stopColor="#0088AA"/><stop offset="100%" stopColor="#00FFFF"/></linearGradient>
      </defs>
      <rect width="91" height="55" fill="#000000" filter="url(#tech-cyber-paper)" />
      <rect width="91" height="55" fill="url(#tech-cyber-grad)" />
      <line x1="4" y1="4" x2="20" y2="4" stroke="#00FFFF" strokeWidth="0.25" opacity="0.7" />
      <line x1="4" y1="4" x2="4" y2="15" stroke="#00FFFF" strokeWidth="0.25" opacity="0.7" />
      <line x1="71" y1="51" x2="87" y2="51" stroke="#00FFFF" strokeWidth="0.25" opacity="0.35" />
      <line x1="87" y1="40" x2="87" y2="51" stroke="#00FFFF" strokeWidth="0.25" opacity="0.35" />
      <rect x="4" y="17" width="12" height="0.25" fill="#FF00FF" opacity="0.25" />
      <rect x="4" y="18" width="8" height="0.25" fill="#00FFFF" opacity="0.15" />
      <circle cx="80" cy="8" r="0.35" fill="#00FFFF" opacity="0.5" />
      <circle cx="83" cy="8" r="0.35" fill="#FF00FF" opacity="0.35" />
      <circle cx="86" cy="8" r="0.35" fill="#00FFFF" opacity="0.2" />
      <text x="7" y="28" fontFamily={JA} fontWeight="700" fontSize="6" letterSpacing="0.4" fill="#00FFFF" filter="url(#tech-cyber-glow)">{data.nameJa}</text>
      <text x="7" y="34" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="2.2" letterSpacing="0.5" fill="#00FFFF" opacity="0.6">{data.nameEn.toUpperCase()}</text>
      <text x="7" y="39" fontFamily={JA} fontWeight="300" fontSize="1.8" fill="#FF00FF" opacity="0.45">{data.titleJa}</text>
      <text x="7" y="48" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.3" fill="#00AAAA" opacity="0.4">{data.companyEn}</text>
      {data.logo && <image href={data.logo} x="76" y="38" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.3" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="tech-cyber-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="5" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <linearGradient id="tech-cyber-grad-b" x1="1" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#00FFFF" stopOpacity="0.08"/><stop offset="100%" stopColor="#FF00FF" stopOpacity="0.04"/></linearGradient>
      </defs>
      <rect width="91" height="55" fill="#000000" filter="url(#tech-cyber-paper-b)" />
      <rect width="91" height="55" fill="url(#tech-cyber-grad-b)" />
      <line x1="4" y1="4" x2="12" y2="4" stroke="#00FFFF" strokeWidth="0.2" opacity="0.5" />
      <line x1="4" y1="4" x2="4" y2="10" stroke="#00FFFF" strokeWidth="0.2" opacity="0.5" />
      <line x1="79" y1="51" x2="87" y2="51" stroke="#00FFFF" strokeWidth="0.2" opacity="0.35" />
      <line x1="87" y1="45" x2="87" y2="51" stroke="#00FFFF" strokeWidth="0.2" opacity="0.35" />
      <rect x="60" y="3" width="8" height="0.15" fill="#FF00FF" opacity="0.2" />
      <text x="7" y="14" fontFamily={JA} fontWeight="500" fontSize="2.2" fill="#00FFFF" opacity="0.9">{data.companyJa}</text>
      <text x="7" y="18.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.3" fill="#00FFFF" opacity="0.45">{data.companyEn}</text>
      <text x="7" y="22" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#FF00FF" opacity="0.35">{data.titleJa}</text>
      <line x1="7" y1="24.5" x2="84" y2="24.5" stroke="#00FFFF" strokeWidth="0.08" opacity="0.25" />
      <text x="7" y="29.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.4" fill="#00FFFF" opacity="0.65">TEL {data.tel}</text>
      <text x="7" y="33.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.4" fill="#00FFFF" opacity="0.65">{data.email}</text>
      <text x="7" y="37.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.4" fill="#00FFFF" opacity="0.65">{data.website}</text>
      <line x1="7" y1="40" x2="84" y2="40" stroke="#FF00FF" strokeWidth="0.08" opacity="0.2" />
      <text x="7" y="44.5" fontFamily={JA} fontWeight="300" fontSize="1.2" fill="#FF00FF" opacity="0.35">〒{data.zipCode}</text>
      <text x="7" y="48" fontFamily={JA} fontWeight="300" fontSize="1.2" fill="#FF00FF" opacity="0.35">{data.addressJa}</text>
      <text x="7" y="51.5" fontFamily={EN} fontWeight="300" fontSize="1.1" fill="#FF00FF" opacity="0.2">{data.addressEn}</text>
      {data.logo && <image href={data.logo} x="76" y="6" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.25" />}
    </g>
  ),
};

// ============================================================
// 6. DATA (数) — Data visualization accent
// Small chart-like decorative elements, analytical feel
// ============================================================
const dataTemplate: TemplateDefinition = {
  id: 'tech-data',
  name: 'DATA',
  nameJa: '数',
  category: 'tech',
  designer: 'Data Science',
  description: 'データが語る物語。可視化の美学を名刺に。',
  accentColor: '#6366F1',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="tech-data-paper"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="tech-data-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.25" result="blur"/><feOffset dx="0.08" dy="0.12" result="shifted"/><feFlood floodColor="#000" floodOpacity="0.06" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <linearGradient id="tech-data-accent" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#818CF8"/><stop offset="100%" stopColor="#4F46E5"/></linearGradient>
        <pattern id="tech-data-dots" width="4" height="4" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="0.12" fill="#6366F1" opacity="0.08" /></pattern>
      </defs>
      <rect width="91" height="55" fill="#FFFFFF" filter="url(#tech-data-paper)" />
      <rect width="91" height="55" fill="url(#tech-data-dots)" />
      <rect x="68" y="8" width="2.5" height="8" rx="0.3" fill="url(#tech-data-accent)" opacity="0.12" />
      <rect x="72" y="11" width="2.5" height="5" rx="0.3" fill="url(#tech-data-accent)" opacity="0.2" />
      <rect x="76" y="6" width="2.5" height="10" rx="0.3" fill="url(#tech-data-accent)" opacity="0.3" />
      <rect x="80" y="9" width="2.5" height="7" rx="0.3" fill="url(#tech-data-accent)" opacity="0.18" />
      <rect x="84" y="4" width="2.5" height="12" rx="0.3" fill="url(#tech-data-accent)" opacity="0.4" />
      <line x1="67" y1="16.5" x2="87" y2="16.5" stroke="#6366F1" strokeWidth="0.12" opacity="0.25" />
      <text x="7" y="22" fontFamily={JA} fontWeight="600" fontSize="5.5" letterSpacing="0.2" fill="#1E1B4B" filter="url(#tech-data-shadow)">{data.nameJa}</text>
      <text x="7" y="27.5" fontFamily={EN} fontWeight="400" fontSize="2" letterSpacing="0.25" fill="#6366F1">{data.nameEn}</text>
      <text x="7" y="33" fontFamily={JA} fontWeight="300" fontSize="1.8" fill="#94A3B8">{data.titleJa}</text>
      <text x="7" y="37" fontFamily={EN} fontWeight="300" fontSize="1.4" fill="#94A3B8">{data.titleEn}</text>
      <circle cx="60" cy="44" r="0.5" fill="#6366F1" opacity="0.12" />
      <circle cx="65" cy="42" r="0.7" fill="#6366F1" opacity="0.18" />
      <circle cx="70" cy="46" r="0.4" fill="#6366F1" opacity="0.22" />
      <circle cx="75" cy="43" r="0.6" fill="#6366F1" opacity="0.08" />
      <circle cx="80" cy="45" r="0.5" fill="#6366F1" opacity="0.25" />
      <circle cx="84" cy="41" r="0.8" fill="#6366F1" opacity="0.12" />
      <text x="7" y="45" fontFamily={JA} fontWeight="400" fontSize="1.3" fill="#94A3B8">{data.companyJa}</text>
      <text x="7" y="48.5" fontFamily={EN} fontWeight="300" fontSize="1.2" fill="#94A3B8">{data.companyEn}</text>
      {data.logo && <image href={data.logo} x="76" y="40" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="tech-data-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <pattern id="tech-data-dots-b" width="5" height="5" patternUnits="userSpaceOnUse"><circle cx="2.5" cy="2.5" r="0.12" fill="#6366F1" opacity="0.06" /></pattern>
      </defs>
      <rect width="91" height="55" fill="#FFFFFF" filter="url(#tech-data-paper-b)" />
      <rect width="91" height="55" fill="url(#tech-data-dots-b)" />
      <polyline points="60,8 65,12 70,9 75,14 80,10 85,7" fill="none" stroke="#6366F1" strokeWidth="0.25" opacity="0.2" />
      <circle cx="60" cy="8" r="0.3" fill="#6366F1" opacity="0.2" />
      <circle cx="80" cy="10" r="0.3" fill="#6366F1" opacity="0.2" />
      <text x="7" y="12" fontFamily={JA} fontWeight="500" fontSize="2.2" fill="#1E1B4B">{data.companyJa}</text>
      <text x="7" y="16" fontFamily={EN} fontWeight="400" fontSize="1.5" letterSpacing="0.15" fill="#6366F1" opacity="0.7">{data.companyEn}</text>
      <text x="7" y="19.5" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#94A3B8">{data.titleJa}</text>
      <line x1="7" y1="22" x2="50" y2="22" stroke="#6366F1" strokeWidth="0.12" opacity="0.25" />
      <text x="7" y="27" fontFamily={EN} fontWeight="400" fontSize="1.4" fill="#475569">TEL {data.tel}</text>
      <text x="7" y="31" fontFamily={EN} fontWeight="400" fontSize="1.4" fill="#475569">{data.email}</text>
      <text x="7" y="35" fontFamily={EN} fontWeight="400" fontSize="1.4" fill="#475569">{data.website}</text>
      <line x1="7" y1="38" x2="50" y2="38" stroke="#6366F1" strokeWidth="0.12" opacity="0.25" />
      <text x="7" y="42.5" fontFamily={JA} fontWeight="300" fontSize="1.2" fill="#94A3B8">〒{data.zipCode}</text>
      <text x="7" y="46" fontFamily={JA} fontWeight="300" fontSize="1.2" fill="#94A3B8">{data.addressJa}</text>
      <text x="7" y="49.5" fontFamily={EN} fontWeight="300" fontSize="1.1" fill="#94A3B8">{data.addressEn}</text>
      {data.logo && <image href={data.logo} x="76" y="8" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
    </g>
  ),
};

// ============================================================
// 7. API (接) — Developer style
// Monospaced URL/email, code-bracket decorations
// ============================================================
const apiTemplate: TemplateDefinition = {
  id: 'tech-api',
  name: 'API',
  nameJa: '接',
  category: 'tech',
  designer: 'Developer Culture',
  description: 'コードが繋ぐ接点。開発者のための名刺。',
  accentColor: '#F97316',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="tech-api-paper"><feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="tech-api-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.3" result="blur"/><feOffset dx="0.1" dy="0.12" result="shifted"/><feFlood floodColor="#fff" floodOpacity="0.04" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <linearGradient id="tech-api-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1E1E3A"/><stop offset="100%" stopColor="#14142A"/></linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#tech-api-bg)" filter="url(#tech-api-paper)" />
      <text x="5" y="10" fontFamily="'Space Grotesk', monospace" fontWeight="300" fontSize="3" fill="#F97316" opacity="0.25">{'{ '}</text>
      <text x="79" y="52" fontFamily="'Space Grotesk', monospace" fontWeight="300" fontSize="3" fill="#F97316" opacity="0.25">{' }'}</text>
      <rect x="12" y="4" width="0.08" height="2.5" fill="#4A5568" opacity="0.4" />
      <circle cx="85" cy="5" r="0.25" fill="#F97316" opacity="0.2" />
      <text x="12" y="9" fontFamily="'Space Grotesk', monospace" fontWeight="300" fontSize="1.2" fill="#4A5568">{'// identity'}</text>
      <text x="12" y="20" fontFamily={JA} fontWeight="600" fontSize="5.5" letterSpacing="0.3" fill="#FFFFFF" filter="url(#tech-api-shadow)">{data.nameJa}</text>
      <text x="12" y="26" fontFamily="'Space Grotesk', monospace" fontWeight="400" fontSize="2" letterSpacing="0.3" fill="#F97316">{data.nameEn}</text>
      <text x="12" y="33" fontFamily="'Space Grotesk', monospace" fontWeight="300" fontSize="1.4" fill="#4A5568">{'role: '}<tspan fill="#A78BFA">{data.titleEn}</tspan></text>
      <text x="12" y="37.5" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#4A5568">{data.titleJa}</text>
      <text x="12" y="44" fontFamily="'Space Grotesk', monospace" fontWeight="300" fontSize="1.3" fill="#4A5568">{'org: '}<tspan fill="#A78BFA">{data.companyEn}</tspan></text>
      {data.logo && <image href={data.logo} x="76" y="38" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.3" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="tech-api-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
      </defs>
      <rect width="91" height="55" fill="#1A1A2E" filter="url(#tech-api-paper-b)" />
      <text x="5" y="10" fontFamily="'Space Grotesk', monospace" fontWeight="300" fontSize="2.5" fill="#F97316" opacity="0.25">{'{ '}</text>
      <text x="79" y="52" fontFamily="'Space Grotesk', monospace" fontWeight="300" fontSize="2.5" fill="#F97316" opacity="0.25">{' }'}</text>
      <rect x="10" y="3" width="0.08" height="2" fill="#4A5568" opacity="0.3" />
      <text x="10" y="14" fontFamily={JA} fontWeight="500" fontSize="2.2" fill="#FFFFFF">{data.companyJa}</text>
      <text x="10" y="18.5" fontFamily="'Space Grotesk', monospace" fontWeight="300" fontSize="1.4" fill="#F97316" opacity="0.7">{data.companyEn}</text>
      <text x="10" y="22" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#4A5568">{data.titleJa}</text>
      <line x1="10" y1="24.5" x2="81" y2="24.5" stroke="#2D2D4A" strokeWidth="0.12" />
      <text x="10" y="29" fontFamily="'Space Grotesk', monospace" fontWeight="300" fontSize="1.4" fill="#4A5568">{'tel: '}<tspan fill="#6EE7B7">"{data.tel}"</tspan></text>
      <text x="10" y="33" fontFamily="'Space Grotesk', monospace" fontWeight="300" fontSize="1.4" fill="#4A5568">{'email: '}<tspan fill="#6EE7B7">"{data.email}"</tspan></text>
      <text x="10" y="37" fontFamily="'Space Grotesk', monospace" fontWeight="300" fontSize="1.4" fill="#4A5568">{'web: '}<tspan fill="#6EE7B7">"{data.website}"</tspan></text>
      <line x1="10" y1="39.5" x2="81" y2="39.5" stroke="#2D2D4A" strokeWidth="0.12" />
      <text x="10" y="43.5" fontFamily="'Space Grotesk', monospace" fontWeight="300" fontSize="1.2" fill="#4A5568">{'zip: '}<tspan fill="#A78BFA">"{data.zipCode}"</tspan></text>
      <text x="10" y="47" fontFamily={JA} fontWeight="300" fontSize="1.2" fill="#4A5568">{data.addressJa}</text>
      <text x="10" y="50.5" fontFamily={EN} fontWeight="300" fontSize="1.1" fill="#3A3A50">{data.addressEn}</text>
      {data.logo && <image href={data.logo} x="76" y="6" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.25" />}
    </g>
  ),
};

// ============================================================
// 8. NEURAL (脳) — AI/ML style
// Gradient from blue to purple, connected dots pattern
// ============================================================
const neuralTemplate: TemplateDefinition = {
  id: 'tech-neural',
  name: 'NEURAL',
  nameJa: '脳',
  category: 'tech',
  designer: 'AI Lab',
  description: 'ニューラルネットの閃き。知性の結節点。',
  accentColor: '#8B5CF6',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="tech-neural-paper"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="tech-neural-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.35" result="blur"/><feOffset dx="0.1" dy="0.15" result="shifted"/><feFlood floodColor="#fff" floodOpacity="0.05" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <linearGradient id="tech-neural-grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#1E3A5F"/><stop offset="40%" stopColor="#252855"/><stop offset="100%" stopColor="#2D1B69"/></linearGradient>
        <radialGradient id="tech-neural-glow" cx="30%" cy="40%" r="60%"><stop offset="0%" stopColor="#3A4F7A" stopOpacity="0.3"/><stop offset="100%" stopColor="transparent"/></radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#tech-neural-grad)" filter="url(#tech-neural-paper)" />
      <rect width="91" height="55" fill="url(#tech-neural-glow)" />
      <circle cx="70" cy="8" r="0.8" fill="#8B5CF6" opacity="0.35" />
      <circle cx="78" cy="12" r="0.6" fill="#60A5FA" opacity="0.45" />
      <circle cx="85" cy="7" r="0.7" fill="#8B5CF6" opacity="0.25" />
      <circle cx="74" cy="16" r="0.5" fill="#60A5FA" opacity="0.35" />
      <circle cx="82" cy="18" r="0.9" fill="#8B5CF6" opacity="0.3" />
      <line x1="70" y1="8" x2="78" y2="12" stroke="#8B5CF6" strokeWidth="0.1" opacity="0.25" />
      <line x1="78" y1="12" x2="85" y2="7" stroke="#60A5FA" strokeWidth="0.1" opacity="0.2" />
      <line x1="78" y1="12" x2="74" y2="16" stroke="#8B5CF6" strokeWidth="0.1" opacity="0.25" />
      <line x1="74" y1="16" x2="82" y2="18" stroke="#60A5FA" strokeWidth="0.1" opacity="0.2" />
      <line x1="70" y1="8" x2="74" y2="16" stroke="#8B5CF6" strokeWidth="0.1" opacity="0.15" />
      <line x1="85" y1="7" x2="82" y2="18" stroke="#60A5FA" strokeWidth="0.1" opacity="0.15" />
      <text x="7" y="24" fontFamily={JA} fontWeight="500" fontSize="6" letterSpacing="0.3" fill="#FFFFFF" filter="url(#tech-neural-shadow)">{data.nameJa}</text>
      <text x="7" y="30" fontFamily={EN} fontWeight="300" fontSize="2" letterSpacing="0.4" fill="#A78BFA">{data.nameEn}</text>
      <text x="7" y="36" fontFamily={JA} fontWeight="300" fontSize="1.8" fill="#7C6EB0">{data.titleJa}</text>
      <text x="7" y="40" fontFamily={EN} fontWeight="300" fontSize="1.4" fill="#6B5FA0">{data.titleEn}</text>
      <circle cx="8" cy="46" r="0.5" fill="#60A5FA" opacity="0.25" />
      <circle cx="15" cy="48" r="0.4" fill="#8B5CF6" opacity="0.2" />
      <circle cx="22" cy="45" r="0.6" fill="#60A5FA" opacity="0.15" />
      <line x1="8" y1="46" x2="15" y2="48" stroke="#60A5FA" strokeWidth="0.08" opacity="0.15" />
      <line x1="15" y1="48" x2="22" y2="45" stroke="#8B5CF6" strokeWidth="0.08" opacity="0.15" />
      {data.logo && <image href={data.logo} x="76" y="40" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.35" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="tech-neural-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <linearGradient id="tech-neural-grad-b" x1="1" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1E3A5F"/><stop offset="100%" stopColor="#2D1B69"/></linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#tech-neural-grad-b)" filter="url(#tech-neural-paper-b)" />
      <circle cx="10" cy="5" r="0.4" fill="#60A5FA" opacity="0.25" />
      <circle cx="20" cy="3.5" r="0.6" fill="#8B5CF6" opacity="0.2" />
      <circle cx="30" cy="6" r="0.35" fill="#60A5FA" opacity="0.3" />
      <circle cx="50" cy="4" r="0.5" fill="#60A5FA" opacity="0.2" />
      <circle cx="70" cy="3" r="0.4" fill="#8B5CF6" opacity="0.2" />
      <circle cx="80" cy="6" r="0.55" fill="#60A5FA" opacity="0.25" />
      <line x1="10" y1="5" x2="20" y2="3.5" stroke="#60A5FA" strokeWidth="0.08" opacity="0.15" />
      <line x1="20" y1="3.5" x2="30" y2="6" stroke="#8B5CF6" strokeWidth="0.08" opacity="0.12" />
      <line x1="50" y1="4" x2="70" y2="3" stroke="#60A5FA" strokeWidth="0.08" opacity="0.12" />
      <line x1="70" y1="3" x2="80" y2="6" stroke="#8B5CF6" strokeWidth="0.08" opacity="0.15" />
      <text x="7" y="15" fontFamily={JA} fontWeight="500" fontSize="2.2" fill="#FFFFFF">{data.companyJa}</text>
      <text x="7" y="19.5" fontFamily={EN} fontWeight="300" fontSize="1.5" letterSpacing="0.2" fill="#A78BFA" opacity="0.7">{data.companyEn}</text>
      <text x="7" y="23" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#7C6EB0">{data.titleJa}</text>
      <line x1="7" y1="25.5" x2="50" y2="25.5" stroke="#8B5CF6" strokeWidth="0.1" opacity="0.25" />
      <text x="7" y="30" fontFamily={EN} fontWeight="300" fontSize="1.5" fill="#CBD5E1">TEL {data.tel}</text>
      <text x="7" y="34" fontFamily={EN} fontWeight="300" fontSize="1.5" fill="#CBD5E1">{data.email}</text>
      <text x="7" y="38" fontFamily={EN} fontWeight="300" fontSize="1.5" fill="#CBD5E1">{data.website}</text>
      <line x1="7" y1="40.5" x2="50" y2="40.5" stroke="#8B5CF6" strokeWidth="0.1" opacity="0.25" />
      <text x="7" y="44.5" fontFamily={JA} fontWeight="300" fontSize="1.2" fill="#7C6EB0">〒{data.zipCode}</text>
      <text x="7" y="48" fontFamily={JA} fontWeight="300" fontSize="1.2" fill="#7C6EB0">{data.addressJa}</text>
      <text x="7" y="51.5" fontFamily={EN} fontWeight="300" fontSize="1.1" fill="#5B4FA0">{data.addressEn}</text>
      {data.logo && <image href={data.logo} x="76" y="40" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.3" />}
    </g>
  ),
};

// ============================================================
// 9. PIXEL (画) — Retro digital
// Pixel-like grid pattern accent, 8-bit aesthetic feel
// ============================================================
const pixelTemplate: TemplateDefinition = {
  id: 'tech-pixel',
  name: 'PIXEL',
  nameJa: '画',
  category: 'tech',
  designer: 'Retro Digital',
  description: 'ピクセルの原点。8ビットの懐かしき未来。',
  accentColor: '#10B981',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="tech-pixel-paper"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="tech-pixel-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.25" result="blur"/><feOffset dx="0.08" dy="0.1" result="shifted"/><feFlood floodColor="#000" floodOpacity="0.06" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <linearGradient id="tech-pixel-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#F0FDF4"/><stop offset="100%" stopColor="#ECFDF5"/></linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#tech-pixel-bg)" filter="url(#tech-pixel-paper)" />
      <rect x="65" y="3" width="2.5" height="2.5" fill="#10B981" opacity="0.25" />
      <rect x="67.5" y="3" width="2.5" height="2.5" fill="#10B981" opacity="0.12" />
      <rect x="70" y="3" width="2.5" height="2.5" fill="#10B981" opacity="0.35" />
      <rect x="72.5" y="3" width="2.5" height="2.5" fill="#10B981" opacity="0.08" />
      <rect x="75" y="3" width="2.5" height="2.5" fill="#10B981" opacity="0.2" />
      <rect x="77.5" y="3" width="2.5" height="2.5" fill="#10B981" opacity="0.4" />
      <rect x="80" y="3" width="2.5" height="2.5" fill="#10B981" opacity="0.15" />
      <rect x="82.5" y="3" width="2.5" height="2.5" fill="#10B981" opacity="0.3" />
      <rect x="85" y="3" width="2.5" height="2.5" fill="#10B981" opacity="0.08" />
      <rect x="65" y="5.5" width="2.5" height="2.5" fill="#10B981" opacity="0.08" />
      <rect x="67.5" y="5.5" width="2.5" height="2.5" fill="#10B981" opacity="0.3" />
      <rect x="72.5" y="5.5" width="2.5" height="2.5" fill="#10B981" opacity="0.25" />
      <rect x="80" y="5.5" width="2.5" height="2.5" fill="#10B981" opacity="0.35" />
      <rect x="85" y="5.5" width="2.5" height="2.5" fill="#10B981" opacity="0.2" />
      <rect x="67.5" y="8" width="2.5" height="2.5" fill="#10B981" opacity="0.15" />
      <rect x="77.5" y="8" width="2.5" height="2.5" fill="#10B981" opacity="0.25" />
      <text x="7" y="22" fontFamily={JA} fontWeight="600" fontSize="5.5" letterSpacing="0.2" fill="#065F46" filter="url(#tech-pixel-shadow)">{data.nameJa}</text>
      <text x="7" y="27.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="500" fontSize="2" letterSpacing="0.3" fill="#10B981">{data.nameEn}</text>
      <text x="7" y="33" fontFamily={JA} fontWeight="300" fontSize="1.8" fill="#6EE7B7">{data.titleJa}</text>
      <text x="7" y="37" fontFamily={EN} fontWeight="300" fontSize="1.4" fill="#6EE7B7">{data.titleEn}</text>
      <rect x="7" y="44" width="2.5" height="2.5" fill="#10B981" opacity="0.45" />
      <rect x="9.5" y="44" width="2.5" height="2.5" fill="#10B981" opacity="0.25" />
      <rect x="12" y="44" width="2.5" height="2.5" fill="#10B981" opacity="0.12" />
      <rect x="14.5" y="44" width="2.5" height="2.5" fill="#10B981" opacity="0.05" />
      <text x="7" y="51" fontFamily={JA} fontWeight="400" fontSize="1.3" fill="#059669">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="76" y="42" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.45" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="tech-pixel-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
      </defs>
      <rect width="91" height="55" fill="#F0FDF4" filter="url(#tech-pixel-paper-b)" />
      <rect x="3" y="3" width="2" height="2" fill="#10B981" opacity="0.35" />
      <rect x="5" y="3" width="2" height="2" fill="#10B981" opacity="0.15" />
      <rect x="7" y="3" width="2" height="2" fill="#10B981" opacity="0.3" />
      <rect x="9" y="3" width="2" height="2" fill="#10B981" opacity="0.08" />
      <rect x="82" y="3" width="2" height="2" fill="#10B981" opacity="0.2" />
      <rect x="84" y="3" width="2" height="2" fill="#10B981" opacity="0.12" />
      <rect x="86" y="3" width="2" height="2" fill="#10B981" opacity="0.35" />
      <text x="7" y="14" fontFamily={JA} fontWeight="600" fontSize="2.2" fill="#065F46">{data.companyJa}</text>
      <text x="7" y="18" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" letterSpacing="0.15" fill="#10B981">{data.companyEn}</text>
      <text x="7" y="21.5" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#6EE7B7">{data.titleJa}</text>
      <line x1="7" y1="24" x2="50" y2="24" stroke="#10B981" strokeWidth="0.15" opacity="0.25" />
      <text x="7" y="28.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.4" fill="#047857">TEL {data.tel}</text>
      <text x="7" y="32.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.4" fill="#047857">{data.email}</text>
      <text x="7" y="36.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.4" fill="#047857">{data.website}</text>
      <line x1="7" y1="39" x2="50" y2="39" stroke="#10B981" strokeWidth="0.15" opacity="0.25" />
      <text x="7" y="43" fontFamily={JA} fontWeight="300" fontSize="1.2" fill="#6EE7B7">〒{data.zipCode}</text>
      <text x="7" y="46.5" fontFamily={JA} fontWeight="300" fontSize="1.2" fill="#6EE7B7">{data.addressJa}</text>
      <text x="7" y="50" fontFamily={EN} fontWeight="300" fontSize="1.1" fill="#6EE7B7">{data.addressEn}</text>
      <rect x="80" y="50" width="2" height="2" fill="#10B981" opacity="0.25" />
      <rect x="82" y="50" width="2" height="2" fill="#10B981" opacity="0.12" />
      <rect x="84" y="50" width="2" height="2" fill="#10B981" opacity="0.35" />
      <rect x="86" y="50" width="2" height="2" fill="#10B981" opacity="0.15" />
      {data.logo && <image href={data.logo} x="76" y="8" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
    </g>
  ),
};

// ============================================================
// 10. CIRCUIT (路) — PCB inspired
// Circuit board trace line patterns, technical green
// ============================================================
const circuitTemplate: TemplateDefinition = {
  id: 'tech-circuit',
  name: 'CIRCUIT',
  nameJa: '路',
  category: 'tech',
  designer: 'PCB Engineering',
  description: '回路が走る基盤。テクノロジーの骨格。',
  accentColor: '#00A86B',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="tech-circuit-paper"><feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="5" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="tech-circuit-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.3" result="blur"/><feOffset dx="0.1" dy="0.12" result="shifted"/><feFlood floodColor="#00FF88" floodOpacity="0.06" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <linearGradient id="tech-circuit-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#0D1B28"/><stop offset="100%" stopColor="#081420"/></linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#tech-circuit-bg)" filter="url(#tech-circuit-paper)" />
      <line x1="0" y1="8" x2="15" y2="8" stroke="#00A86B" strokeWidth="0.2" opacity="0.25" />
      <line x1="15" y1="8" x2="17" y2="10" stroke="#00A86B" strokeWidth="0.2" opacity="0.25" />
      <line x1="17" y1="10" x2="30" y2="10" stroke="#00A86B" strokeWidth="0.2" opacity="0.25" />
      <circle cx="15" cy="8" r="0.5" fill="none" stroke="#00A86B" strokeWidth="0.15" opacity="0.35" />
      <circle cx="15" cy="8" r="0.2" fill="#00A86B" opacity="0.45" />
      <line x1="0" y1="14" x2="8" y2="14" stroke="#00A86B" strokeWidth="0.15" opacity="0.18" />
      <line x1="8" y1="14" x2="10" y2="12" stroke="#00A86B" strokeWidth="0.15" opacity="0.18" />
      <line x1="10" y1="12" x2="22" y2="12" stroke="#00A86B" strokeWidth="0.15" opacity="0.18" />
      <line x1="70" y1="5" x2="80" y2="5" stroke="#00A86B" strokeWidth="0.15" opacity="0.18" />
      <line x1="80" y1="5" x2="82" y2="7" stroke="#00A86B" strokeWidth="0.15" opacity="0.18" />
      <line x1="82" y1="7" x2="91" y2="7" stroke="#00A86B" strokeWidth="0.15" opacity="0.18" />
      <circle cx="80" cy="5" r="0.4" fill="none" stroke="#00A86B" strokeWidth="0.12" opacity="0.25" />
      <circle cx="80" cy="5" r="0.15" fill="#00A86B" opacity="0.35" />
      <rect x="75" y="38" width="10" height="6" rx="0.3" fill="none" stroke="#00A86B" strokeWidth="0.15" opacity="0.2" />
      <line x1="77" y1="38" x2="77" y2="36" stroke="#00A86B" strokeWidth="0.1" opacity="0.15" />
      <line x1="79" y1="38" x2="79" y2="36" stroke="#00A86B" strokeWidth="0.1" opacity="0.15" />
      <line x1="81" y1="38" x2="81" y2="36" stroke="#00A86B" strokeWidth="0.1" opacity="0.15" />
      <line x1="83" y1="38" x2="83" y2="36" stroke="#00A86B" strokeWidth="0.1" opacity="0.15" />
      <line x1="77" y1="44" x2="77" y2="46" stroke="#00A86B" strokeWidth="0.1" opacity="0.15" />
      <line x1="79" y1="44" x2="79" y2="46" stroke="#00A86B" strokeWidth="0.1" opacity="0.15" />
      <line x1="81" y1="44" x2="81" y2="46" stroke="#00A86B" strokeWidth="0.1" opacity="0.15" />
      <line x1="83" y1="44" x2="83" y2="46" stroke="#00A86B" strokeWidth="0.1" opacity="0.15" />
      <text x="7" y="27" fontFamily={JA} fontWeight="500" fontSize="6" letterSpacing="0.3" fill="#FFFFFF" filter="url(#tech-circuit-shadow)">{data.nameJa}</text>
      <text x="7" y="33" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.3" fill="#00A86B">{data.nameEn}</text>
      <text x="7" y="38.5" fontFamily={JA} fontWeight="300" fontSize="1.8" fill="#00A86B" opacity="0.45">{data.titleJa}</text>
      <line x1="0" y1="50" x2="20" y2="50" stroke="#00A86B" strokeWidth="0.15" opacity="0.18" />
      <line x1="20" y1="50" x2="22" y2="48" stroke="#00A86B" strokeWidth="0.15" opacity="0.18" />
      <line x1="22" y1="48" x2="35" y2="48" stroke="#00A86B" strokeWidth="0.15" opacity="0.18" />
      <circle cx="20" cy="50" r="0.35" fill="none" stroke="#00A86B" strokeWidth="0.1" opacity="0.25" />
      <circle cx="20" cy="50" r="0.12" fill="#00A86B" opacity="0.35" />
      {data.logo && <image href={data.logo} x="76" y="24" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.3" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="tech-circuit-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="5" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
      </defs>
      <rect width="91" height="55" fill="#0A1628" filter="url(#tech-circuit-paper-b)" />
      <line x1="0" y1="4" x2="10" y2="4" stroke="#00A86B" strokeWidth="0.15" opacity="0.12" />
      <line x1="10" y1="4" x2="12" y2="6" stroke="#00A86B" strokeWidth="0.15" opacity="0.12" />
      <line x1="12" y1="6" x2="30" y2="6" stroke="#00A86B" strokeWidth="0.15" opacity="0.12" />
      <circle cx="10" cy="4" r="0.35" fill="none" stroke="#00A86B" strokeWidth="0.1" opacity="0.18" />
      <circle cx="10" cy="4" r="0.12" fill="#00A86B" opacity="0.25" />
      <line x1="60" y1="3" x2="75" y2="3" stroke="#00A86B" strokeWidth="0.12" opacity="0.12" />
      <line x1="75" y1="3" x2="77" y2="5" stroke="#00A86B" strokeWidth="0.12" opacity="0.12" />
      <line x1="77" y1="5" x2="91" y2="5" stroke="#00A86B" strokeWidth="0.12" opacity="0.12" />
      <text x="7" y="14" fontFamily={JA} fontWeight="500" fontSize="2.2" fill="#FFFFFF">{data.companyJa}</text>
      <text x="7" y="18.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.2" fill="#00A86B" opacity="0.65">{data.companyEn}</text>
      <text x="7" y="22" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#00A86B" opacity="0.4">{data.titleJa}</text>
      <line x1="7" y1="24.5" x2="55" y2="24.5" stroke="#00A86B" strokeWidth="0.12" opacity="0.18" />
      <text x="7" y="29" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.4" fill="#88CCAA">TEL {data.tel}</text>
      <text x="7" y="33" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.4" fill="#88CCAA">{data.email}</text>
      <text x="7" y="37" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.4" fill="#88CCAA">{data.website}</text>
      <line x1="7" y1="39.5" x2="55" y2="39.5" stroke="#00A86B" strokeWidth="0.12" opacity="0.18" />
      <text x="7" y="44" fontFamily={JA} fontWeight="300" fontSize="1.2" fill="#00A86B" opacity="0.45">〒{data.zipCode}</text>
      <text x="7" y="47.5" fontFamily={JA} fontWeight="300" fontSize="1.2" fill="#00A86B" opacity="0.45">{data.addressJa}</text>
      <text x="7" y="51" fontFamily={EN} fontWeight="300" fontSize="1.1" fill="#00A86B" opacity="0.3">{data.addressEn}</text>
      <line x1="55" y1="51" x2="70" y2="51" stroke="#00A86B" strokeWidth="0.15" opacity="0.12" />
      <line x1="70" y1="51" x2="72" y2="49" stroke="#00A86B" strokeWidth="0.15" opacity="0.12" />
      <line x1="72" y1="49" x2="91" y2="49" stroke="#00A86B" strokeWidth="0.15" opacity="0.12" />
      <circle cx="70" cy="51" r="0.35" fill="none" stroke="#00A86B" strokeWidth="0.1" opacity="0.18" />
      <circle cx="70" cy="51" r="0.12" fill="#00A86B" opacity="0.25" />
      {data.logo && <image href={data.logo} x="76" y="40" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.25" />}
    </g>
  ),
};

export const techTemplates: TemplateDefinition[] = [
  siliconTemplate,
  terminalTemplate,
  materialTemplate,
  carbonTemplate,
  cyberTemplate,
  dataTemplate,
  apiTemplate,
  neuralTemplate,
  pixelTemplate,
  circuitTemplate,
];
