import type { CardData, TemplateDefinition } from '../types';

const EN = "'Inter', sans-serif";
const JA = "'Noto Sans JP', sans-serif";

// ============================================================
// 1. RATIO — Müller-Brockmann
// ============================================================
const ratioTemplate: TemplateDefinition = {
  id: 'ratio',
  name: 'RATIO',
  nameJa: '律',
  category: 'swiss',
  designer: 'Müller-Brockmann',
  description: '比率と秩序。ブルーのアクセントブロックが厳密なグリッドを支配する。',
  accentColor: '#0057B8',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="swiss-ratio-paper"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="swiss-ratio-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.3" result="blur"/><feOffset dx="0.1" dy="0.15" result="shifted"/><feFlood floodColor="#000" floodOpacity="0.08" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <linearGradient id="swiss-ratio-accent" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#0062D0"/><stop offset="100%" stopColor="#003F8A"/></linearGradient>
      </defs>
      <rect width="91" height="55" fill="#ffffff" filter="url(#swiss-ratio-paper)" />
      <rect x="0" y="0" width="24" height="16" fill="url(#swiss-ratio-accent)" />
      <rect x="0" y="16" width="24" height="0.3" fill="#003366" opacity="0.4" />
      <line x1="28" y1="0" x2="28" y2="55" stroke="#e8e8e8" strokeWidth="0.1" />
      <line x1="0" y1="31" x2="91" y2="31" stroke="#e8e8e8" strokeWidth="0.1" />
      <circle cx="4" cy="20" r="0.4" fill="#0057B8" opacity="0.3" />
      <text x="28" y="12" textAnchor="start" fontFamily={JA} fontWeight="700" fontSize="6" letterSpacing="0.5" fill="#1a1a1a" filter="url(#swiss-ratio-shadow)">{data.nameJa}</text>
      <text x="28" y="17" textAnchor="start" fontFamily={EN} fontWeight="400" fontSize="2.4" letterSpacing="0.3" fill="#666666">{data.nameEn}</text>
      <text x="28" y="24" textAnchor="start" fontFamily={JA} fontWeight="400" fontSize="2" fill="#999999">{data.titleJa}</text>
      <text x="28" y="27.5" textAnchor="start" fontFamily={EN} fontWeight="300" fontSize="1.8" fill="#999999">{data.titleEn}</text>
      <line x1="28" y1="31" x2="83" y2="31" stroke="#0057B8" strokeWidth="0.3" />
      <text x="28" y="36" textAnchor="start" fontFamily={JA} fontWeight="500" fontSize="2.2" fill="#333333">{data.companyJa}</text>
      <text x="28" y="40" textAnchor="start" fontFamily={EN} fontWeight="300" fontSize="1.5" fill="#888888">{data.companyEn}</text>
      {data.logo && <image href={data.logo} x="75" y="38" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="swiss-ratio-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <linearGradient id="swiss-ratio-accent-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#003F8A"/><stop offset="100%" stopColor="#0062D0"/></linearGradient>
      </defs>
      <rect width="91" height="55" fill="#ffffff" filter="url(#swiss-ratio-paper-b)" />
      <rect x="67" y="39" width="24" height="16" fill="url(#swiss-ratio-accent-b)" />
      <rect x="67" y="38.7" width="24" height="0.3" fill="#003366" opacity="0.4" />
      <line x1="8" y1="0" x2="8" y2="55" stroke="#e8e8e8" strokeWidth="0.1" />
      <circle cx="87" cy="35" r="0.4" fill="#0057B8" opacity="0.3" />
      <circle cx="4" cy="4" r="0.3" fill="#0057B8" opacity="0.2" />
      <text x="8" y="10" textAnchor="start" fontFamily={JA} fontWeight="700" fontSize="2.8" fill="#1a1a1a">{data.companyJa}</text>
      <text x="8" y="14" textAnchor="start" fontFamily={EN} fontWeight="500" fontSize="2" letterSpacing="0.2" fill="#666666">{data.companyEn}</text>
      <text x="8" y="18.5" textAnchor="start" fontFamily={JA} fontWeight="300" fontSize="1.6" fill="#888888">{data.titleJa}</text>
      <line x1="8" y1="21" x2="60" y2="21" stroke="#0057B8" strokeWidth="0.3" />
      <text x="8" y="25.5" textAnchor="start" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#333333">TEL {data.tel}</text>
      <text x="8" y="29.5" textAnchor="start" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#333333">{data.email}</text>
      <text x="8" y="33.5" textAnchor="start" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#333333">{data.website}</text>
      <line x1="8" y1="36" x2="60" y2="36" stroke="#0057B8" strokeWidth="0.3" />
      <text x="8" y="40" textAnchor="start" fontFamily={JA} fontWeight="300" fontSize="1.4" fill="#666666">〒{data.zipCode}</text>
      <text x="8" y="43.5" textAnchor="start" fontFamily={JA} fontWeight="300" fontSize="1.4" fill="#666666">{data.addressJa}</text>
      <text x="8" y="47" textAnchor="start" fontFamily={EN} fontWeight="300" fontSize="1.2" fill="#999999">{data.addressEn}</text>
      {data.logo && <image href={data.logo} x="50" y="24" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 2. AKZIDENZ — Max Miedinger
// ============================================================
const akzidenzTemplate: TemplateDefinition = {
  id: 'akzidenz',
  name: 'AKZIDENZ',
  nameJa: '活',
  category: 'swiss',
  designer: 'Max Miedinger',
  description: 'ヘルベチカの精神。装飾なし、余白と書体だけで語る。',
  accentColor: '#000000',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="swiss-akzidenz-paper"><feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="swiss-akzidenz-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.25" result="blur"/><feOffset dx="0.08" dy="0.12" result="shifted"/><feFlood floodColor="#000" floodOpacity="0.06" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <rect width="91" height="55" fill="#fefefe" filter="url(#swiss-akzidenz-paper)" />
      <rect x="8" y="5" width="0.8" height="0.8" fill="#000000" opacity="0.15" />
      <line x1="8" y1="38" x2="40" y2="38" stroke="#000" strokeWidth="0.08" opacity="0.15" />
      <rect x="8" y="50.5" width="3" height="0.15" fill="#000" opacity="0.2" />
      <text x="8" y="16" textAnchor="start" fontFamily={JA} fontWeight="700" fontSize="7" letterSpacing="0.8" fill="#000000" filter="url(#swiss-akzidenz-shadow)">{data.nameJa}</text>
      <text x="8" y="22" textAnchor="start" fontFamily={EN} fontWeight="400" fontSize="2.6" letterSpacing="0.4" fill="#333333">{data.nameEn}</text>
      <text x="8" y="32" textAnchor="start" fontFamily={JA} fontWeight="300" fontSize="2.2" fill="#666666">{data.titleJa}</text>
      <text x="8" y="36" textAnchor="start" fontFamily={EN} fontWeight="300" fontSize="1.8" fill="#888888">{data.titleEn}</text>
      <text x="8" y="46" textAnchor="start" fontFamily={JA} fontWeight="500" fontSize="2.2" fill="#000000">{data.companyJa}</text>
      <text x="8" y="50" textAnchor="start" fontFamily={EN} fontWeight="300" fontSize="1.5" fill="#777777">{data.companyEn}</text>
      {data.logo && <image href={data.logo} x="75" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="swiss-akzidenz-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
      </defs>
      <rect width="91" height="55" fill="#fefefe" filter="url(#swiss-akzidenz-paper-b)" />
      <rect x="8" y="5" width="0.8" height="0.8" fill="#000" opacity="0.15" />
      <line x1="8" y1="18" x2="83" y2="18" stroke="#000" strokeWidth="0.08" opacity="0.15" />
      <line x1="8" y1="36" x2="83" y2="36" stroke="#000" strokeWidth="0.08" opacity="0.15" />
      <rect x="80" y="50.5" width="3" height="0.15" fill="#000" opacity="0.2" />
      <text x="8" y="12" textAnchor="start" fontFamily={EN} fontWeight="700" fontSize="3" letterSpacing="0.3" fill="#000000">{data.companyEn}</text>
      <text x="8" y="16.5" textAnchor="start" fontFamily={JA} fontWeight="400" fontSize="2" fill="#666666">{data.companyJa}</text>
      <text x="8" y="17.5" textAnchor="start" fontFamily={JA} fontWeight="300" fontSize="1.4" fill="#999999">{data.titleJa}</text>
      <text x="8" y="24" textAnchor="start" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#333333">{data.tel}</text>
      <text x="8" y="28" textAnchor="start" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#333333">{data.email}</text>
      <text x="8" y="32" textAnchor="start" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#333333">{data.website}</text>
      <text x="8" y="41" textAnchor="start" fontFamily={JA} fontWeight="300" fontSize="1.4" fill="#666666">〒{data.zipCode}</text>
      <text x="8" y="44.5" textAnchor="start" fontFamily={JA} fontWeight="300" fontSize="1.4" fill="#666666">{data.addressJa}</text>
      <text x="8" y="48" textAnchor="start" fontFamily={EN} fontWeight="300" fontSize="1.2" fill="#999999">{data.addressEn}</text>
      {data.logo && <image href={data.logo} x="75" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 3. GRID-SWISS — Karl Gerstner
// ============================================================
const gridSwissTemplate: TemplateDefinition = {
  id: 'grid-swiss',
  name: 'GRID',
  nameJa: '格',
  category: 'swiss',
  designer: 'Karl Gerstner',
  description: '可視グリッドの美学。交点にコンテンツが配置される構造美。',
  accentColor: '#0057B8',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="swiss-grid-paper"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="swiss-grid-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.3" result="blur"/><feOffset dx="0.1" dy="0.15" result="shifted"/><feFlood floodColor="#000" floodOpacity="0.07" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <pattern id="swiss-grid-pattern-f" x="0" y="0" width="7.583" height="6.875" patternUnits="userSpaceOnUse">
          <line x1="7.583" y1="0" x2="7.583" y2="6.875" stroke="#e0e0e0" strokeWidth="0.12" />
          <line x1="0" y1="6.875" x2="7.583" y2="6.875" stroke="#e0e0e0" strokeWidth="0.12" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="#ffffff" filter="url(#swiss-grid-paper)" />
      <rect width="91" height="55" fill="url(#swiss-grid-pattern-f)" />
      <circle cx="7.583" cy="13.75" r="1.2" fill="#0057B8" />
      <circle cx="7.583" cy="48.125" r="0.4" fill="#0057B8" opacity="0.4" />
      <rect x="15.166" y="47" width="4" height="0.2" fill="#0057B8" opacity="0.3" />
      <text x="15.166" y="13.75" textAnchor="start" fontFamily={JA} fontWeight="700" fontSize="6.5" fill="#1a1a1a" filter="url(#swiss-grid-shadow)">{data.nameJa}</text>
      <text x="15.166" y="20.625" textAnchor="start" fontFamily={EN} fontWeight="400" fontSize="2.4" letterSpacing="0.3" fill="#0057B8">{data.nameEn}</text>
      <text x="15.166" y="27.5" textAnchor="start" fontFamily={JA} fontWeight="300" fontSize="2" fill="#666666">{data.titleJa}</text>
      <text x="15.166" y="48.125" textAnchor="start" fontFamily={JA} fontWeight="500" fontSize="2.2" fill="#333333">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="75" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="swiss-grid-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <pattern id="swiss-grid-pattern-b" x="0" y="0" width="7.583" height="6.875" patternUnits="userSpaceOnUse">
          <line x1="7.583" y1="0" x2="7.583" y2="6.875" stroke="#e0e0e0" strokeWidth="0.12" />
          <line x1="0" y1="6.875" x2="7.583" y2="6.875" stroke="#e0e0e0" strokeWidth="0.12" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="#ffffff" filter="url(#swiss-grid-paper-b)" />
      <rect width="91" height="55" fill="url(#swiss-grid-pattern-b)" />
      <circle cx="7.583" cy="6.875" r="1" fill="#0057B8" />
      <circle cx="7.583" cy="20.625" r="0.5" fill="#0057B8" />
      <circle cx="7.583" cy="41.25" r="0.3" fill="#0057B8" opacity="0.4" />
      <text x="15.166" y="6.875" textAnchor="start" fontFamily={JA} fontWeight="700" fontSize="2.8" fill="#1a1a1a">{data.companyJa}</text>
      <text x="15.166" y="13.75" textAnchor="start" fontFamily={EN} fontWeight="500" fontSize="2" fill="#0057B8">{data.companyEn}</text>
      <text x="15.166" y="15.5" textAnchor="start" fontFamily={JA} fontWeight="300" fontSize="1.4" fill="#888888">{data.titleJa}</text>
      <text x="15.166" y="20.625" textAnchor="start" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#333333">{data.tel}</text>
      <text x="15.166" y="27.5" textAnchor="start" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#333333">{data.email}</text>
      <text x="15.166" y="34.375" textAnchor="start" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#333333">{data.website}</text>
      <text x="15.166" y="41.25" textAnchor="start" fontFamily={JA} fontWeight="300" fontSize="1.4" fill="#666666">〒{data.zipCode} {data.addressJa}</text>
      <text x="15.166" y="48.125" textAnchor="start" fontFamily={EN} fontWeight="300" fontSize="1.2" fill="#999999">{data.addressEn}</text>
      {data.logo && <image href={data.logo} x="75" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 4. MODULAR — Wim Crouwel
// ============================================================
const modularTemplate: TemplateDefinition = {
  id: 'modular',
  name: 'MODULAR',
  nameJa: '組',
  category: 'swiss',
  designer: 'Wim Crouwel',
  description: 'モジュラースケールの秩序。8の倍数が全てを支配する。',
  accentColor: '#FFD700',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="swiss-modular-grain"><feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="swiss-modular-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.35" result="blur"/><feOffset dx="0.12" dy="0.18" result="shifted"/><feFlood floodColor="#FFD700" floodOpacity="0.1" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <linearGradient id="swiss-modular-bar" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#FFE44D"/><stop offset="100%" stopColor="#D4A800"/></linearGradient>
      </defs>
      <rect width="91" height="55" fill="#1a1a1a" filter="url(#swiss-modular-grain)" />
      <rect x="8" y="8" width="2" height="24" fill="url(#swiss-modular-bar)" />
      <rect x="8" y="40" width="8" height="0.15" fill="#FFD700" opacity="0.3" />
      <circle cx="84" cy="48" r="0.5" fill="#FFD700" opacity="0.15" />
      <rect x="80" y="8" width="0.15" height="8" fill="#333333" />
      <text x="16" y="16" textAnchor="start" fontFamily={JA} fontWeight="700" fontSize="5.5" letterSpacing="0.6" fill="#ffffff" filter="url(#swiss-modular-shadow)">{data.nameJa}</text>
      <text x="16" y="22" textAnchor="start" fontFamily={EN} fontWeight="300" fontSize="2.4" letterSpacing="0.5" fill="#FFD700">{data.nameEn.toUpperCase()}</text>
      <text x="16" y="32" textAnchor="start" fontFamily={JA} fontWeight="300" fontSize="2" fill="#888888">{data.titleJa}</text>
      <text x="16" y="36" textAnchor="start" fontFamily={EN} fontWeight="300" fontSize="1.8" fill="#666666">{data.titleEn}</text>
      <text x="16" y="48" textAnchor="start" fontFamily={JA} fontWeight="500" fontSize="2" fill="#cccccc">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="74" y="10" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="swiss-modular-grain-b"><feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <linearGradient id="swiss-modular-bar-b" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#FFE44D"/><stop offset="100%" stopColor="#D4A800"/></linearGradient>
      </defs>
      <rect width="91" height="55" fill="#1a1a1a" filter="url(#swiss-modular-grain-b)" />
      <rect x="8" y="8" width="16" height="0.5" fill="url(#swiss-modular-bar-b)" />
      <rect x="8" y="16" width="16" height="0.5" fill="#333333" />
      <rect x="8" y="24" width="16" height="0.5" fill="#333333" />
      <circle cx="12" cy="48" r="0.4" fill="#FFD700" opacity="0.2" />
      <rect x="80" y="44" width="0.15" height="4" fill="#333333" />
      <text x="32" y="12" textAnchor="start" fontFamily={JA} fontWeight="700" fontSize="2.8" fill="#ffffff">{data.companyJa}</text>
      <text x="32" y="16" textAnchor="start" fontFamily={EN} fontWeight="400" fontSize="2" letterSpacing="0.3" fill="#FFD700">{data.companyEn}</text>
      <text x="32" y="20" textAnchor="start" fontFamily={JA} fontWeight="300" fontSize="1.4" fill="#777777">{data.titleJa}</text>
      <text x="32" y="26" textAnchor="start" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#cccccc">{data.tel}</text>
      <text x="32" y="30" textAnchor="start" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#cccccc">{data.email}</text>
      <text x="32" y="34" textAnchor="start" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#cccccc">{data.website}</text>
      <rect x="32" y="37" width="48" height="0.3" fill="#FFD700" />
      <text x="32" y="42" textAnchor="start" fontFamily={JA} fontWeight="300" fontSize="1.4" fill="#888888">〒{data.zipCode} {data.addressJa}</text>
      <text x="32" y="46" textAnchor="start" fontFamily={EN} fontWeight="300" fontSize="1.2" fill="#666666">{data.addressEn}</text>
      {data.logo && <image href={data.logo} x="74" y="38" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 5. RED-DOT — Hans Hillmann
// ============================================================
const redDotTemplate: TemplateDefinition = {
  id: 'red-dot',
  name: 'RED DOT',
  nameJa: '赤',
  category: 'swiss',
  designer: 'Hans Hillmann',
  description: '小さな赤い円が唯一のアクセント。白黒の文字が静かに語る。',
  accentColor: '#E60012',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="swiss-reddot-paper"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="swiss-reddot-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.3" result="blur"/><feOffset dx="0.1" dy="0.15" result="shifted"/><feFlood floodColor="#000" floodOpacity="0.07" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <radialGradient id="swiss-reddot-dot" cx="0.4" cy="0.4" r="0.6"><stop offset="0%" stopColor="#FF2233"/><stop offset="100%" stopColor="#C00010"/></radialGradient>
      </defs>
      <rect width="91" height="55" fill="#ffffff" filter="url(#swiss-reddot-paper)" />
      <circle cx="12" cy="12" r="2.5" fill="url(#swiss-reddot-dot)" />
      <circle cx="12" cy="12" r="3.2" fill="none" stroke="#E60012" strokeWidth="0.1" opacity="0.2" />
      <line x1="12" y1="17" x2="12" y2="20" stroke="#e0e0e0" strokeWidth="0.1" />
      <rect x="78" y="48" width="4" height="0.12" fill="#e0e0e0" />
      <text x="12" y="26" textAnchor="start" fontFamily={JA} fontWeight="700" fontSize="6.5" letterSpacing="0.6" fill="#000000" filter="url(#swiss-reddot-shadow)">{data.nameJa}</text>
      <text x="12" y="32" textAnchor="start" fontFamily={EN} fontWeight="400" fontSize="2.4" letterSpacing="0.4" fill="#333333">{data.nameEn}</text>
      <text x="12" y="39" textAnchor="start" fontFamily={JA} fontWeight="300" fontSize="2" fill="#888888">{data.titleJa}</text>
      <text x="12" y="48" textAnchor="start" fontFamily={JA} fontWeight="500" fontSize="2.2" fill="#000000">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="75" y="7" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="swiss-reddot-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <radialGradient id="swiss-reddot-dot-b" cx="0.4" cy="0.4" r="0.6"><stop offset="0%" stopColor="#FF2233"/><stop offset="100%" stopColor="#C00010"/></radialGradient>
      </defs>
      <rect width="91" height="55" fill="#ffffff" filter="url(#swiss-reddot-paper-b)" />
      <circle cx="79" cy="43" r="2.5" fill="url(#swiss-reddot-dot-b)" />
      <circle cx="79" cy="43" r="3.2" fill="none" stroke="#E60012" strokeWidth="0.1" opacity="0.2" />
      <line x1="12" y1="16" x2="60" y2="16" stroke="#e0e0e0" strokeWidth="0.1" />
      <rect x="12" y="4" width="4" height="0.12" fill="#e0e0e0" />
      <text x="12" y="10" textAnchor="start" fontFamily={JA} fontWeight="700" fontSize="2.8" fill="#000000">{data.companyJa}</text>
      <text x="12" y="14.5" textAnchor="start" fontFamily={EN} fontWeight="500" fontSize="2" fill="#333333">{data.companyEn}</text>
      <text x="12" y="15.5" textAnchor="start" fontFamily={JA} fontWeight="300" fontSize="1.4" fill="#888888">{data.titleJa}</text>
      <text x="12" y="22" textAnchor="start" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#000000">{data.tel}</text>
      <text x="12" y="26" textAnchor="start" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#000000">{data.email}</text>
      <text x="12" y="30" textAnchor="start" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#000000">{data.website}</text>
      <line x1="12" y1="33" x2="60" y2="33" stroke="#e0e0e0" strokeWidth="0.1" />
      <text x="12" y="38" textAnchor="start" fontFamily={JA} fontWeight="300" fontSize="1.4" fill="#666666">〒{data.zipCode}</text>
      <text x="12" y="41.5" textAnchor="start" fontFamily={JA} fontWeight="300" fontSize="1.4" fill="#666666">{data.addressJa}</text>
      <text x="12" y="45" textAnchor="start" fontFamily={EN} fontWeight="300" fontSize="1.2" fill="#999999">{data.addressEn}</text>
      {data.logo && <image href={data.logo} x="4" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 6. POSTER — Armin Hofmann
// ============================================================
const posterTemplate: TemplateDefinition = {
  id: 'poster',
  name: 'POSTER',
  nameJa: '貼',
  category: 'swiss',
  designer: 'Armin Hofmann',
  description: 'ポスターのような大胆な文字階層。非対称のバランスが緊張感を生む。',
  accentColor: '#000000',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="swiss-poster-paper"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="swiss-poster-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.4" result="blur"/><feOffset dx="0.15" dy="0.2" result="shifted"/><feFlood floodColor="#000" floodOpacity="0.1" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <rect width="91" height="55" fill="#ffffff" filter="url(#swiss-poster-paper)" />
      <rect x="0" y="0" width="91" height="2" fill="#000" opacity="0.04" />
      <line x1="6" y1="33" x2="45" y2="33" stroke="#000" strokeWidth="0.2" opacity="0.15" />
      <rect x="82" y="44" width="0.2" height="6" fill="#000" opacity="0.1" />
      <circle cx="85" cy="6" r="0.5" fill="#000" opacity="0.08" />
      <text x="6" y="24" textAnchor="start" fontFamily={JA} fontWeight="900" fontSize="11" letterSpacing="1" fill="#000000" filter="url(#swiss-poster-shadow)">{data.nameJa}</text>
      <text x="6" y="30" textAnchor="start" fontFamily={EN} fontWeight="300" fontSize="2" letterSpacing="0.6" fill="#888888">{data.nameEn.toUpperCase()}</text>
      <text x="83" y="42" textAnchor="end" fontFamily={JA} fontWeight="300" fontSize="2" fill="#666666">{data.titleJa}</text>
      <text x="6" y="50" textAnchor="start" fontFamily={JA} fontWeight="500" fontSize="2.4" fill="#000000">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="75" y="14" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="swiss-poster-grain-b"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <linearGradient id="swiss-poster-bg-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#000000"/><stop offset="100%" stopColor="#1a1a1a"/></linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#swiss-poster-bg-b)" filter="url(#swiss-poster-grain-b)" />
      <line x1="6" y1="22" x2="85" y2="22" stroke="#333" strokeWidth="0.15" />
      <line x1="6" y1="42" x2="85" y2="42" stroke="#333" strokeWidth="0.15" />
      <rect x="6" y="4" width="0.2" height="6" fill="#ffffff" opacity="0.1" />
      <circle cx="85" cy="48" r="0.5" fill="#fff" opacity="0.06" />
      <text x="6" y="14" textAnchor="start" fontFamily={JA} fontWeight="900" fontSize="4.5" fill="#ffffff">{data.companyJa}</text>
      <text x="6" y="19" textAnchor="start" fontFamily={EN} fontWeight="700" fontSize="2.2" letterSpacing="0.5" fill="#ffffff">{data.companyEn}</text>
      <text x="6" y="21" textAnchor="start" fontFamily={JA} fontWeight="300" fontSize="1.4" fill="#777777">{data.titleJa}</text>
      <text x="83" y="28" textAnchor="end" fontFamily={EN} fontWeight="300" fontSize="1.5" fill="#cccccc">{data.tel}</text>
      <text x="83" y="32" textAnchor="end" fontFamily={EN} fontWeight="300" fontSize="1.5" fill="#cccccc">{data.email}</text>
      <text x="83" y="36" textAnchor="end" fontFamily={EN} fontWeight="300" fontSize="1.5" fill="#cccccc">{data.website}</text>
      <text x="6" y="47" textAnchor="start" fontFamily={JA} fontWeight="300" fontSize="1.4" fill="#888888">〒{data.zipCode} {data.addressJa}</text>
      <text x="6" y="51" textAnchor="start" fontFamily={EN} fontWeight="300" fontSize="1.2" fill="#666666">{data.addressEn}</text>
      {data.logo && <image href={data.logo} x="75" y="4" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 7. BASELINE — Emil Ruder
// ============================================================
const baselineTemplate: TemplateDefinition = {
  id: 'baseline',
  name: 'BASELINE',
  nameJa: '基',
  category: 'swiss',
  designer: 'Emil Ruder',
  description: 'ベースライングリッドの美学。全てのテキストが見えない線に従う。',
  accentColor: '#E60012',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="swiss-baseline-paper"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="swiss-baseline-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.3" result="blur"/><feOffset dx="0.1" dy="0.15" result="shifted"/><feFlood floodColor="#000" floodOpacity="0.07" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <pattern id="swiss-baseline-lines-f" x="0" y="4.5" width="91" height="4.5" patternUnits="userSpaceOnUse">
          <line x1="0" y1="4.5" x2="91" y2="4.5" stroke="#f0e0e0" strokeWidth="0.12" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="#ffffff" filter="url(#swiss-baseline-paper)" />
      <rect width="91" height="55" fill="url(#swiss-baseline-lines-f)" />
      <line x1="10" y1="4.5" x2="10" y2="49.5" stroke="#E60012" strokeWidth="0.3" />
      <circle cx="10" cy="4.5" r="0.4" fill="#E60012" opacity="0.5" />
      <circle cx="10" cy="49.5" r="0.4" fill="#E60012" opacity="0.5" />
      <rect x="83" y="4.5" width="0.15" height="4.5" fill="#E60012" opacity="0.1" />
      <text x="13" y="9" textAnchor="start" fontFamily={JA} fontWeight="300" fontSize="2" fill="#999999">{data.titleJa}</text>
      <text x="13" y="18" textAnchor="start" fontFamily={JA} fontWeight="700" fontSize="6.5" fill="#000000" filter="url(#swiss-baseline-shadow)">{data.nameJa}</text>
      <text x="13" y="27" textAnchor="start" fontFamily={EN} fontWeight="400" fontSize="2.4" letterSpacing="0.3" fill="#333333">{data.nameEn}</text>
      <text x="13" y="45" textAnchor="start" fontFamily={JA} fontWeight="500" fontSize="2.4" fill="#000000">{data.companyJa}</text>
      <text x="13" y="49.5" textAnchor="start" fontFamily={EN} fontWeight="400" fontSize="1.8" fill="#666666">{data.companyEn}</text>
      {data.logo && <image href={data.logo} x="75" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="swiss-baseline-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <pattern id="swiss-baseline-lines-b" x="0" y="4.5" width="91" height="4.5" patternUnits="userSpaceOnUse">
          <line x1="0" y1="4.5" x2="91" y2="4.5" stroke="#f0e0e0" strokeWidth="0.12" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="#ffffff" filter="url(#swiss-baseline-paper-b)" />
      <rect width="91" height="55" fill="url(#swiss-baseline-lines-b)" />
      <line x1="10" y1="4.5" x2="10" y2="49.5" stroke="#E60012" strokeWidth="0.3" />
      <circle cx="10" cy="4.5" r="0.4" fill="#E60012" opacity="0.5" />
      <circle cx="10" cy="49.5" r="0.4" fill="#E60012" opacity="0.5" />
      <rect x="83" y="4.5" width="0.15" height="4.5" fill="#E60012" opacity="0.1" />
      <text x="13" y="9" textAnchor="start" fontFamily={JA} fontWeight="700" fontSize="2.8" fill="#000000">{data.companyJa}</text>
      <text x="13" y="13.5" textAnchor="start" fontFamily={EN} fontWeight="500" fontSize="1.8" fill="#666666">{data.companyEn}</text>
      <text x="13" y="15" textAnchor="start" fontFamily={JA} fontWeight="300" fontSize="1.4" fill="#888888">{data.titleJa}</text>
      <text x="13" y="22.5" textAnchor="start" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#333333">T {data.tel}</text>
      <text x="13" y="27" textAnchor="start" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#333333">E {data.email}</text>
      <text x="13" y="31.5" textAnchor="start" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#333333">W {data.website}</text>
      <text x="13" y="38" textAnchor="start" fontFamily={JA} fontWeight="300" fontSize="1.4" fill="#666666">〒{data.zipCode}</text>
      <text x="13" y="42" textAnchor="start" fontFamily={JA} fontWeight="300" fontSize="1.4" fill="#666666">{data.addressJa}</text>
      <text x="13" y="46" textAnchor="start" fontFamily={EN} fontWeight="300" fontSize="1.2" fill="#999999">{data.addressEn}</text>
      {data.logo && <image href={data.logo} x="75" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 8. COLUMN — Richard Paul Lohse
// ============================================================
const columnTemplate: TemplateDefinition = {
  id: 'column',
  name: 'COLUMN',
  nameJa: '柱',
  category: 'swiss',
  designer: 'Richard Paul Lohse',
  description: '段組の構造美。新聞のような二段・三段レイアウトが情報を整理する。',
  accentColor: '#0057B8',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="swiss-column-paper"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="swiss-column-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.3" result="blur"/><feOffset dx="0.1" dy="0.15" result="shifted"/><feFlood floodColor="#000" floodOpacity="0.07" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <linearGradient id="swiss-column-bar" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#0057B8"/><stop offset="100%" stopColor="#003D80"/></linearGradient>
      </defs>
      <rect width="91" height="55" fill="#ffffff" filter="url(#swiss-column-paper)" />
      <line x1="32" y1="6" x2="32" y2="49" stroke="#e0e0e0" strokeWidth="0.15" />
      <line x1="62" y1="6" x2="62" y2="49" stroke="#e0e0e0" strokeWidth="0.15" />
      <rect x="6" y="46" width="79" height="0.8" fill="url(#swiss-column-bar)" />
      <circle cx="6" cy="49" r="0.3" fill="#0057B8" opacity="0.3" />
      <circle cx="85" cy="49" r="0.3" fill="#0057B8" opacity="0.3" />
      <text x="6" y="12" textAnchor="start" fontFamily={JA} fontWeight="700" fontSize="6" fill="#000000" filter="url(#swiss-column-shadow)">{data.nameJa}</text>
      <text x="6" y="17.5" textAnchor="start" fontFamily={EN} fontWeight="400" fontSize="2.2" letterSpacing="0.2" fill="#0057B8">{data.nameEn}</text>
      <text x="35" y="12" textAnchor="start" fontFamily={JA} fontWeight="400" fontSize="2" fill="#666666">{data.titleJa}</text>
      <text x="35" y="16" textAnchor="start" fontFamily={EN} fontWeight="300" fontSize="1.5" fill="#999999">{data.titleEn}</text>
      <text x="65" y="12" textAnchor="start" fontFamily={JA} fontWeight="500" fontSize="2.2" fill="#333333">{data.companyJa}</text>
      <text x="65" y="16" textAnchor="start" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#666666">{data.companyEn}</text>
      {data.logo && <image href={data.logo} x="75" y="30" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="swiss-column-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <linearGradient id="swiss-column-header-b" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#0057B8"/><stop offset="100%" stopColor="#003D80"/></linearGradient>
      </defs>
      <rect width="91" height="55" fill="#ffffff" filter="url(#swiss-column-paper-b)" />
      <rect x="0" y="0" width="91" height="8" fill="url(#swiss-column-header-b)" />
      <text x="6" y="5.5" textAnchor="start" fontFamily={JA} fontWeight="700" fontSize="2.8" fill="#ffffff">{data.companyJa}</text>
      <text x="83" y="5.5" textAnchor="end" fontFamily={EN} fontWeight="500" fontSize="1.8" fill="#ffffff">{data.companyEn}</text>
      <line x1="46" y1="12" x2="46" y2="48" stroke="#e0e0e0" strokeWidth="0.15" />
      <circle cx="46" cy="11" r="0.3" fill="#0057B8" opacity="0.3" />
      <text x="6" y="15" textAnchor="start" fontFamily={EN} fontWeight="600" fontSize="1.4" letterSpacing="0.3" fill="#0057B8">CONTACT</text>
      <line x1="6" y1="16.5" x2="42" y2="16.5" stroke="#0057B8" strokeWidth="0.12" />
      <text x="6" y="21" textAnchor="start" fontFamily={JA} fontWeight="300" fontSize="1.4" fill="#777777">{data.titleJa}</text>
      <text x="6" y="26" textAnchor="start" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#333333">{data.tel}</text>
      <text x="6" y="30" textAnchor="start" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#333333">{data.email}</text>
      <text x="6" y="34" textAnchor="start" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#333333">{data.website}</text>
      <text x="49" y="15" textAnchor="start" fontFamily={EN} fontWeight="600" fontSize="1.4" letterSpacing="0.3" fill="#0057B8">ADDRESS</text>
      <line x1="49" y1="16.5" x2="83" y2="16.5" stroke="#0057B8" strokeWidth="0.12" />
      <text x="49" y="21" textAnchor="start" fontFamily={JA} fontWeight="400" fontSize="1.4" fill="#333333">〒{data.zipCode}</text>
      <text x="49" y="25" textAnchor="start" fontFamily={JA} fontWeight="400" fontSize="1.4" fill="#333333">{data.addressJa}</text>
      <text x="49" y="29" textAnchor="start" fontFamily={EN} fontWeight="300" fontSize="1.2" fill="#999999">{data.addressEn}</text>
      {data.logo && <image href={data.logo} x="75" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 9. NEUE — Neue Grafik
// ============================================================
const neueTemplate: TemplateDefinition = {
  id: 'neue',
  name: 'NEUE',
  nameJa: '新',
  category: 'swiss',
  designer: 'Neue Grafik',
  description: 'ノイエ・グラフィーク誌の精神。ラベル付きセクションが情報を構造化する。',
  accentColor: '#E60012',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="swiss-neue-paper"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="swiss-neue-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.3" result="blur"/><feOffset dx="0.1" dy="0.15" result="shifted"/><feFlood floodColor="#000" floodOpacity="0.07" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <linearGradient id="swiss-neue-accent" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#E60012"/><stop offset="100%" stopColor="#CC0010"/></linearGradient>
      </defs>
      <rect width="91" height="55" fill="#ffffff" filter="url(#swiss-neue-paper)" />
      <rect x="0" y="0" width="91" height="0.4" fill="url(#swiss-neue-accent)" />
      <circle cx="85" cy="50" r="0.3" fill="#E60012" opacity="0.2" />
      <text x="8" y="8" textAnchor="start" fontFamily={EN} fontWeight="600" fontSize="1.4" letterSpacing="0.5" fill="#E60012">NAME</text>
      <line x1="8" y1="9.5" x2="40" y2="9.5" stroke="#E60012" strokeWidth="0.15" />
      <text x="8" y="16" textAnchor="start" fontFamily={JA} fontWeight="700" fontSize="6" fill="#000000" filter="url(#swiss-neue-shadow)">{data.nameJa}</text>
      <text x="8" y="21" textAnchor="start" fontFamily={EN} fontWeight="400" fontSize="2.4" letterSpacing="0.3" fill="#333333">{data.nameEn}</text>
      <text x="8" y="29" textAnchor="start" fontFamily={EN} fontWeight="600" fontSize="1.4" letterSpacing="0.5" fill="#E60012">TITLE</text>
      <line x1="8" y1="30.5" x2="40" y2="30.5" stroke="#E60012" strokeWidth="0.15" />
      <text x="8" y="35" textAnchor="start" fontFamily={JA} fontWeight="400" fontSize="2.2" fill="#666666">{data.titleJa}</text>
      <text x="8" y="39" textAnchor="start" fontFamily={EN} fontWeight="300" fontSize="1.8" fill="#999999">{data.titleEn}</text>
      <text x="8" y="46" textAnchor="start" fontFamily={EN} fontWeight="600" fontSize="1.4" letterSpacing="0.5" fill="#E60012">COMPANY</text>
      <text x="28" y="46" textAnchor="start" fontFamily={JA} fontWeight="500" fontSize="2.2" fill="#000000">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="75" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="swiss-neue-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <linearGradient id="swiss-neue-accent-b" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#E60012"/><stop offset="100%" stopColor="#CC0010"/></linearGradient>
      </defs>
      <rect width="91" height="55" fill="#ffffff" filter="url(#swiss-neue-paper-b)" />
      <rect x="0" y="0" width="91" height="0.8" fill="url(#swiss-neue-accent-b)" />
      <circle cx="6" cy="52" r="0.3" fill="#E60012" opacity="0.2" />
      <rect x="83" y="4" width="0.15" height="3" fill="#E60012" opacity="0.15" />
      <text x="8" y="8" textAnchor="start" fontFamily={EN} fontWeight="600" fontSize="1.4" letterSpacing="0.5" fill="#E60012">COMPANY</text>
      <line x1="8" y1="9.5" x2="83" y2="9.5" stroke="#E60012" strokeWidth="0.15" />
      <text x="8" y="14" textAnchor="start" fontFamily={JA} fontWeight="700" fontSize="2.8" fill="#000000">{data.companyJa}</text>
      <text x="8" y="18" textAnchor="start" fontFamily={EN} fontWeight="500" fontSize="2" fill="#333333">{data.companyEn}</text>
      <text x="8" y="20.5" textAnchor="start" fontFamily={JA} fontWeight="300" fontSize="1.4" fill="#888888">{data.titleJa}</text>
      <text x="8" y="25" textAnchor="start" fontFamily={EN} fontWeight="600" fontSize="1.4" letterSpacing="0.5" fill="#E60012">CONTACT</text>
      <line x1="8" y1="26.5" x2="83" y2="26.5" stroke="#E60012" strokeWidth="0.15" />
      <text x="8" y="31" textAnchor="start" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#333333">{data.tel}</text>
      <text x="40" y="31" textAnchor="start" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#333333">{data.email}</text>
      <text x="8" y="35" textAnchor="start" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#333333">{data.website}</text>
      <text x="8" y="41" textAnchor="start" fontFamily={EN} fontWeight="600" fontSize="1.4" letterSpacing="0.5" fill="#E60012">ADDRESS</text>
      <line x1="8" y1="42.5" x2="83" y2="42.5" stroke="#E60012" strokeWidth="0.15" />
      <text x="8" y="47" textAnchor="start" fontFamily={JA} fontWeight="300" fontSize="1.4" fill="#666666">〒{data.zipCode} {data.addressJa}</text>
      <text x="8" y="51" textAnchor="start" fontFamily={EN} fontWeight="300" fontSize="1.2" fill="#999999">{data.addressEn}</text>
      {data.logo && <image href={data.logo} x="75" y="12" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 10. SYSTEM — Unimark (Massimo Vignelli)
// ============================================================
const systemTemplate: TemplateDefinition = {
  id: 'system',
  name: 'SYSTEM',
  nameJa: '系',
  category: 'swiss',
  designer: 'Unimark (Massimo Vignelli)',
  description: 'システムの美学。情報が最優先。装飾はゼロ、秩序は最大。',
  accentColor: '#000000',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="swiss-system-paper"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="swiss-system-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.25" result="blur"/><feOffset dx="0.08" dy="0.12" result="shifted"/><feFlood floodColor="#000" floodOpacity="0.06" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <rect width="91" height="55" fill="#ffffff" filter="url(#swiss-system-paper)" />
      <line x1="6" y1="6" x2="85" y2="6" stroke="#000000" strokeWidth="0.5" />
      <line x1="6" y1="22" x2="85" y2="22" stroke="#000000" strokeWidth="0.12" />
      <line x1="6" y1="43" x2="85" y2="43" stroke="#000000" strokeWidth="0.12" />
      <line x1="6" y1="50" x2="85" y2="50" stroke="#000000" strokeWidth="0.5" />
      <rect x="6" y="6" width="0.5" height="0.5" fill="#000" />
      <rect x="84.5" y="6" width="0.5" height="0.5" fill="#000" />
      <text x="6" y="14" textAnchor="start" fontFamily={JA} fontWeight="700" fontSize="5.5" fill="#000000" filter="url(#swiss-system-shadow)">{data.nameJa}</text>
      <text x="6" y="19" textAnchor="start" fontFamily={EN} fontWeight="400" fontSize="2.2" letterSpacing="0.3" fill="#333333">{data.nameEn}</text>
      <text x="6" y="27" textAnchor="start" fontFamily={JA} fontWeight="400" fontSize="2" fill="#666666">{data.titleJa}</text>
      <text x="6" y="31" textAnchor="start" fontFamily={EN} fontWeight="300" fontSize="1.8" fill="#999999">{data.titleEn}</text>
      <text x="6" y="48" textAnchor="start" fontFamily={JA} fontWeight="500" fontSize="2.4" fill="#000000">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="75" y="36" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="swiss-system-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
      </defs>
      <rect width="91" height="55" fill="#ffffff" filter="url(#swiss-system-paper-b)" />
      <line x1="6" y1="6" x2="85" y2="6" stroke="#000000" strokeWidth="0.5" />
      <line x1="6" y1="19" x2="85" y2="19" stroke="#000000" strokeWidth="0.12" />
      <line x1="6" y1="36" x2="85" y2="36" stroke="#000000" strokeWidth="0.12" />
      <line x1="6" y1="50" x2="85" y2="50" stroke="#000000" strokeWidth="0.5" />
      <rect x="6" y="6" width="0.5" height="0.5" fill="#000" />
      <rect x="84.5" y="49.5" width="0.5" height="0.5" fill="#000" />
      <text x="6" y="12" textAnchor="start" fontFamily={JA} fontWeight="700" fontSize="2.8" fill="#000000">{data.companyJa}</text>
      <text x="6" y="16" textAnchor="start" fontFamily={EN} fontWeight="500" fontSize="2" letterSpacing="0.2" fill="#333333">{data.companyEn}</text>
      <text x="6" y="18.5" textAnchor="start" fontFamily={JA} fontWeight="300" fontSize="1.4" fill="#888888">{data.titleJa}</text>
      <text x="6" y="24" textAnchor="start" fontFamily={EN} fontWeight="500" fontSize="1.2" fill="#999999">TEL</text>
      <text x="18" y="24" textAnchor="start" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#333333">{data.tel}</text>
      <text x="6" y="28" textAnchor="start" fontFamily={EN} fontWeight="500" fontSize="1.2" fill="#999999">EMAIL</text>
      <text x="18" y="28" textAnchor="start" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#333333">{data.email}</text>
      <text x="6" y="32" textAnchor="start" fontFamily={EN} fontWeight="500" fontSize="1.2" fill="#999999">WEB</text>
      <text x="18" y="32" textAnchor="start" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#333333">{data.website}</text>
      <text x="6" y="40.5" textAnchor="start" fontFamily={JA} fontWeight="300" fontSize="1.4" fill="#666666">〒{data.zipCode} {data.addressJa}</text>
      <text x="6" y="44.5" textAnchor="start" fontFamily={EN} fontWeight="300" fontSize="1.2" fill="#999999">{data.addressEn}</text>
      {data.logo && <image href={data.logo} x="75" y="38" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

export const swissTemplates: TemplateDefinition[] = [
  ratioTemplate,
  akzidenzTemplate,
  gridSwissTemplate,
  modularTemplate,
  redDotTemplate,
  posterTemplate,
  baselineTemplate,
  columnTemplate,
  neueTemplate,
  systemTemplate,
];
