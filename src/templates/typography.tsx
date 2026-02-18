import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. TYPO (字) — Helmut Schmid: Giant ghost initials background
// ============================================================
const typoTemplate: TemplateDefinition = {
  id: 'typo',
  name: 'TYPO',
  nameJa: '字',
  category: 'typography',
  designer: 'Helmut Schmid',
  description: 'タイポグラフィの力。巨大なゴースト文字が背景を支配する。',
  accentColor: '#333333',
  renderFront: (data: CardData) => {
    const initials = data.nameEn.split(' ').map((n) => n[0]).join('');
    return (
      <g>
        <defs>
          <filter id="typography-typo-paper"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
          <filter id="typography-typo-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.25" result="blur"/><feOffset dx="0.08" dy="0.12" result="shifted"/><feFlood floodColor="#000000" floodOpacity="0.08" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          <clipPath id="typography-typo-clip"><rect width="91" height="55" /></clipPath>
        </defs>
        <rect width="91" height="55" fill="#ffffff" filter="url(#typography-typo-paper)" />
        <g clipPath="url(#typography-typo-clip)">
          <text x="-4" y="52" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="48" fill="#f2f2f2" letterSpacing="-3">{initials}</text>
        </g>
        {/* Subtle top accent line */}
        <line x1="8" y1="7" x2="40" y2="7" stroke="#333333" strokeWidth="0.15" opacity="0.15" />
        <text x="8" y="16" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="5.5" letterSpacing="0.4" fill="#1a1a1a" filter="url(#typography-typo-shadow)">{data.nameJa}</text>
        <text x="8" y="22" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2.2" letterSpacing="0.3" fill="#555555">{data.nameEn}</text>
        <text x="8" y="27" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#999999">{data.titleJa}</text>
        <line x1="8" y1="30.5" x2="83" y2="30.5" stroke="#e8e8e8" strokeWidth="0.12" />
        {/* Contact block */}
        <text x="8" y="35" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#888888">T. {data.tel}</text>
        <text x="8" y="38.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#888888">{data.email}</text>
        <text x="8" y="42" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#888888">{data.website}</text>
        <line x1="8" y1="44.5" x2="50" y2="44.5" stroke="#e8e8e8" strokeWidth="0.08" />
        <text x="8" y="48" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#aaaaaa">〒{data.zipCode} {data.addressJa}</text>
        {data.logo && <image href={data.logo} x="78" y="42" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      </g>
    );
  },
  renderBack: (data: CardData) => {
    const firstChar = data.companyEn.charAt(0);
    return (
      <g>
        <defs>
          <filter id="typography-typo-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
          <clipPath id="typography-typo-clip-b"><rect width="91" height="55" /></clipPath>
        </defs>
        <rect width="91" height="55" fill="#1a1a1a" filter="url(#typography-typo-paper-b)" />
        <g clipPath="url(#typography-typo-clip-b)">
          <text x="50" y="50" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="60" fill="#222222">{firstChar}</text>
        </g>
        {/* Corner marks */}
        <line x1="5" y1="5" x2="10" y2="5" stroke="#333333" strokeWidth="0.1" />
        <line x1="5" y1="5" x2="5" y2="10" stroke="#333333" strokeWidth="0.1" />
        <line x1="86" y1="50" x2="81" y2="50" stroke="#333333" strokeWidth="0.1" />
        <line x1="86" y1="50" x2="86" y2="45" stroke="#333333" strokeWidth="0.1" />
        <text x="45.5" y="24" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="3.5" letterSpacing="1.5" fill="#ffffff">{data.companyEn.toUpperCase()}</text>
        <text x="45.5" y="30" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="2" fill="#666666">{data.companyJa}</text>
        <text x="45.5" y="34" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#555555">{data.titleJa}</text>
        <line x1="30" y1="37" x2="61" y2="37" stroke="#333333" strokeWidth="0.08" />
        <text x="45.5" y="41" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#555555">{data.tel}</text>
        <text x="45.5" y="44.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#555555">{data.email}</text>
        <text x="45.5" y="48" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#444444">〒{data.zipCode} {data.addressJa}</text>
        {data.logo && <image href={data.logo} x="4" y="4" width="6" height="6" preserveAspectRatio="xMidYMid meet" opacity="0.35" />}
      </g>
    );
  },
};

// ============================================================
// 2. STACK (重) — Neville Brody: Stacked type at multiple scales
// ============================================================
const stackTemplate: TemplateDefinition = {
  id: 'stack',
  name: 'STACK',
  nameJa: '重',
  category: 'typography',
  designer: 'Neville Brody',
  description: '重層するタイポグラフィ。スケールの劇的な対比。',
  accentColor: '#1a1a1a',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="typography-stack-paper"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="typography-stack-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.3" result="blur"/><feOffset dx="0.1" dy="0.15" result="shifted"/><feFlood floodColor="#000000" floodOpacity="0.06" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <clipPath id="typography-stack-clip"><rect width="91" height="55" /></clipPath>
      </defs>
      <rect width="91" height="55" fill="#ffffff" filter="url(#typography-stack-paper)" />
      <g clipPath="url(#typography-stack-clip)">
        <text x="6" y="22" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="14" fill="#f5f5f5" letterSpacing="-0.5">{data.nameEn.split(' ')[1]?.toUpperCase() || data.nameEn.toUpperCase()}</text>
        <text x="6" y="28" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="8" fill="#1a1a1a" filter="url(#typography-stack-shadow)">{data.nameJa}</text>
      </g>
      {/* Accent stripe */}
      <rect x="0" y="0" width="2" height="55" fill="#1a1a1a" opacity="0.06" />
      <text x="6" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2.4" letterSpacing="0.4" fill="#666666">{data.nameEn.toUpperCase()}</text>
      <text x="6" y="39.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#aaaaaa">{data.titleJa}</text>
      <line x1="6" y1="42" x2="50" y2="42" stroke="#e0e0e0" strokeWidth="0.08" />
      <text x="6" y="46" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#999999">{data.tel}  |  {data.email}</text>
      <text x="6" y="49.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#999999">{data.website}</text>
      {data.logo && <image href={data.logo} x="78" y="42" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="typography-stack-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <clipPath id="typography-stack-clip-b"><rect width="91" height="55" /></clipPath>
      </defs>
      <rect width="91" height="55" fill="#1a1a1a" filter="url(#typography-stack-paper-b)" />
      <g clipPath="url(#typography-stack-clip-b)">
        <text x="6" y="20" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="18" fill="#2a2a2a" letterSpacing="-1">{data.companyEn.split(' ')[0]?.toUpperCase()}</text>
        <text x="6" y="38" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="18" fill="#2a2a2a" letterSpacing="-1">{data.companyEn.split(' ').slice(1).join(' ').toUpperCase() || '.'}</text>
      </g>
      <rect x="0" y="0" width="2" height="55" fill="#ffffff" opacity="0.06" />
      <text x="45.5" y="22" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="3.5" letterSpacing="0.8" fill="#ffffff">{data.companyJa}</text>
      <text x="45.5" y="28" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="200" fontSize="2" letterSpacing="0.6" fill="#888888">{data.companyEn.toUpperCase()}</text>
      <text x="45.5" y="32" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#666666">{data.titleJa}</text>
      <line x1="25" y1="35" x2="66" y2="35" stroke="#333333" strokeWidth="0.08" />
      <text x="45.5" y="39" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#666666">{data.tel}</text>
      <text x="45.5" y="42.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#666666">{data.email}</text>
      <text x="45.5" y="48" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#555555">〒{data.zipCode} {data.addressJa}</text>
      {data.logo && <image href={data.logo} x="4" y="4" width="6" height="6" preserveAspectRatio="xMidYMid meet" opacity="0.3" />}
    </g>
  ),
};

// ============================================================
// 3. CLASH (衝) — David Carson: Contrasting font weights
// ============================================================
const clashTemplate: TemplateDefinition = {
  id: 'clash',
  name: 'CLASH',
  nameJa: '衝',
  category: 'typography',
  designer: 'David Carson',
  description: '極細と極太の衝突。ウェイトの対比が生む緊張感。',
  accentColor: '#1a1a1a',
  renderFront: (data: CardData) => {
    const nameParts = data.nameEn.split(' ');
    return (
      <g>
        <defs>
          <filter id="typography-clash-paper"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
          <filter id="typography-clash-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.3" result="blur"/><feOffset dx="0.1" dy="0.15" result="shifted"/><feFlood floodColor="#000000" floodOpacity="0.06" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        <rect width="91" height="55" fill="#ffffff" filter="url(#typography-clash-paper)" />
        {/* Thin vertical accent */}
        <line x1="4" y1="4" x2="4" y2="51" stroke="#1a1a1a" strokeWidth="0.06" opacity="0.1" />
        {/* Ultra-thin first name */}
        <text x="6" y="17" fontFamily="'Inter', sans-serif" fontWeight="100" fontSize="10" letterSpacing="0.5" fill="#1a1a1a">{nameParts[0]?.toUpperCase()}</text>
        {/* Ultra-bold last name */}
        <text x="6" y="29" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="10" letterSpacing="-0.3" fill="#1a1a1a" filter="url(#typography-clash-shadow)">{nameParts[1]?.toUpperCase() || ''}</text>
        {/* Japanese name in thin weight */}
        <text x="6" y="35" fontFamily="'Noto Sans JP', sans-serif" fontWeight="100" fontSize="2.8" letterSpacing="0.6" fill="#666666">{data.nameJa}</text>
        {/* Bold title */}
        <text x="6" y="41" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="1.5" letterSpacing="0.3" fill="#aaaaaa">{data.titleEn.toUpperCase()}</text>
        <line x1="6" y1="43.5" x2="55" y2="43.5" stroke="#e0e0e0" strokeWidth="0.06" />
        {/* Thin contact */}
        <text x="6" y="47" fontFamily="'Inter', sans-serif" fontWeight="100" fontSize="1.5" fill="#888888">{data.tel}  |  {data.email}</text>
        <text x="6" y="50.5" fontFamily="'Inter', sans-serif" fontWeight="100" fontSize="1.5" fill="#888888">{data.website}</text>
        {data.logo && <image href={data.logo} x="78" y="42" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
      </g>
    );
  },
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="typography-clash-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
      </defs>
      <rect width="91" height="55" fill="#000000" filter="url(#typography-clash-paper-b)" />
      <line x1="4" y1="4" x2="4" y2="51" stroke="#ffffff" strokeWidth="0.06" opacity="0.1" />
      {/* Extreme weight contrast on back */}
      <text x="45.5" y="19" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="100" fontSize="3.5" letterSpacing="2" fill="#ffffff">{data.companyEn.toUpperCase()}</text>
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="900" fontSize="5" fill="#ffffff">{data.companyJa}</text>
      <text x="45.5" y="35" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="100" fontSize="1.5" fill="#666666">{data.titleJa}</text>
      <line x1="25" y1="37.5" x2="66" y2="37.5" stroke="#333333" strokeWidth="0.08" />
      <text x="45.5" y="41.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="100" fontSize="1.4" letterSpacing="0.3" fill="#666666">{data.tel}</text>
      <text x="45.5" y="44.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="1.4" fill="#666666">{data.email}</text>
      <text x="45.5" y="48" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="100" fontSize="1.2" fill="#555555">〒{data.zipCode} {data.addressJa}</text>
      {data.logo && <image href={data.logo} x="4" y="4" width="6" height="6" preserveAspectRatio="xMidYMid meet" opacity="0.3" />}
    </g>
  ),
};

// ============================================================
// 4. MONO-TYPE (等) — Wim Crouwel: Monospaced grid alignment
// ============================================================
const monoTypeTemplate: TemplateDefinition = {
  id: 'mono-type',
  name: 'MONO-TYPE',
  nameJa: '等',
  category: 'typography',
  designer: 'Wim Crouwel',
  description: '等幅の秩序。グリッドに従う情報の美学。',
  accentColor: '#1a1a1a',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="typography-mono-paper"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
      </defs>
      <rect width="91" height="55" fill="#ffffff" filter="url(#typography-mono-paper)" />
      {/* Subtle grid dots */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((col) =>
        [0, 1, 2, 3, 4, 5, 6, 7].map((row) => (
          <circle key={`mono-type-dot-${col}-${row}`} cx={7 + col * 6.5} cy={5 + row * 6.5} r="0.15" fill="#e0e0e0" />
        ))
      )}
      {/* Name in monospace style */}
      <text x="7" y="14" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="5" letterSpacing="1.2" fill="#1a1a1a">{data.nameJa}</text>
      <text x="7" y="20" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.8" fill="#666666">{data.nameEn.toUpperCase()}</text>
      {/* Grid-aligned info */}
      <text x="7" y="27" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.6" letterSpacing="0.5" fill="#999999">TITLE____{data.titleEn}</text>
      <line x1="7" y1="30" x2="84" y2="30" stroke="#f0f0f0" strokeWidth="0.12" />
      <text x="7" y="34.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.5" fill="#999999">TEL______{data.tel}</text>
      <text x="7" y="38.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.5" fill="#999999">MAIL_____{data.email}</text>
      <text x="7" y="42.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.5" fill="#999999">WEB______{data.website}</text>
      <text x="7" y="46.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.5" fill="#999999">ZIP______{data.zipCode}</text>
      <text x="7" y="50.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" letterSpacing="0.3" fill="#aaaaaa">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="78" y="4" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="typography-mono-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
      </defs>
      <rect width="91" height="55" fill="#1a1a1a" filter="url(#typography-mono-paper-b)" />
      {/* Grid dots on dark */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((col) =>
        [0, 1, 2, 3, 4, 5, 6, 7].map((row) => (
          <circle key={`mono-type-bdot-${col}-${row}`} cx={7 + col * 6.5} cy={5 + row * 6.5} r="0.15" fill="#333333" />
        ))
      )}
      <text x="7" y="18" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="3" letterSpacing="1.5" fill="#ffffff">{data.companyEn.toUpperCase()}</text>
      <text x="7" y="24" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="2.2" letterSpacing="0.8" fill="#888888">{data.companyJa}</text>
      <text x="7" y="29" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.3" fill="#666666">{data.titleJa}</text>
      <line x1="7" y1="32" x2="60" y2="32" stroke="#333333" strokeWidth="0.08" />
      <text x="7" y="36.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" letterSpacing="0.5" fill="#555555">TEL______{data.tel}</text>
      <text x="7" y="40" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" letterSpacing="0.5" fill="#555555">MAIL_____{data.email}</text>
      <text x="7" y="43.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" letterSpacing="0.5" fill="#555555">WEB______{data.website}</text>
      <text x="7" y="49" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" letterSpacing="0.3" fill="#444444">〒{data.zipCode} {data.addressJa}</text>
      {data.logo && <image href={data.logo} x="78" y="4" width="6" height="6" preserveAspectRatio="xMidYMid meet" opacity="0.3" />}
    </g>
  ),
};

// ============================================================
// 5. SERIF (明) — Massimo Vignelli: Elegant serif typography
// ============================================================
const serifTemplate: TemplateDefinition = {
  id: 'serif',
  name: 'SERIF',
  nameJa: '明',
  category: 'typography',
  designer: 'Massimo Vignelli',
  description: 'セリフ体の気品。古典的美しさが宿る文字。',
  accentColor: '#2c2c2c',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="typography-serif-paper"><feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="typography-serif-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.2" result="blur"/><feOffset dx="0.06" dy="0.1" result="shifted"/><feFlood floodColor="#000000" floodOpacity="0.06" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <rect width="91" height="55" fill="#faf9f7" filter="url(#typography-serif-paper)" />
      {/* Double top rule */}
      <line x1="10" y1="7.5" x2="81" y2="7.5" stroke="#1a1a1a" strokeWidth="0.2" />
      <line x1="10" y1="8.5" x2="81" y2="8.5" stroke="#1a1a1a" strokeWidth="0.06" />
      {/* Name in serif */}
      <text x="45.5" y="19" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="600" fontSize="6" letterSpacing="0.3" fill="#1a1a1a" filter="url(#typography-serif-shadow)">{data.nameEn}</text>
      <text x="45.5" y="25" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="2.8" letterSpacing="1" fill="#666666">{data.nameJa}</text>
      <line x1="35" y1="28.5" x2="56" y2="28.5" stroke="#cccccc" strokeWidth="0.1" />
      <text x="45.5" y="33.5" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontStyle="italic" fontSize="2.2" fill="#999999">{data.titleEn}</text>
      {/* Contact info */}
      <text x="45.5" y="39.5" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.7" letterSpacing="0.2" fill="#888888">{data.tel}</text>
      <text x="45.5" y="43" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.7" letterSpacing="0.2" fill="#888888">{data.email}</text>
      <text x="45.5" y="46.5" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.6" letterSpacing="0.2" fill="#aaaaaa">{data.website}</text>
      {/* Double bottom rule */}
      <line x1="10" y1="49.5" x2="81" y2="49.5" stroke="#1a1a1a" strokeWidth="0.06" />
      <line x1="10" y1="50.5" x2="81" y2="50.5" stroke="#1a1a1a" strokeWidth="0.2" />
      {data.logo && <image href={data.logo} x="4" y="42" width="6" height="6" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="typography-serif-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
      </defs>
      <rect width="91" height="55" fill="#1a1a1a" filter="url(#typography-serif-paper-b)" />
      <line x1="10" y1="14" x2="81" y2="14" stroke="#444444" strokeWidth="0.12" />
      <line x1="10" y1="14.8" x2="81" y2="14.8" stroke="#444444" strokeWidth="0.04" />
      <text x="45.5" y="24" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="600" fontSize="4.5" letterSpacing="0.8" fill="#faf9f7">{data.companyEn}</text>
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.5" fill="#888888">{data.companyJa}</text>
      <text x="45.5" y="34" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#666666">{data.titleJa}</text>
      <line x1="10" y1="37" x2="81" y2="37" stroke="#444444" strokeWidth="0.04" />
      <line x1="10" y1="37.8" x2="81" y2="37.8" stroke="#444444" strokeWidth="0.12" />
      <text x="45.5" y="42.5" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontStyle="italic" fontSize="1.6" letterSpacing="0.2" fill="#777777">{data.tel}  |  {data.email}</text>
      <text x="45.5" y="46" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#666666">〒{data.zipCode} {data.addressJa}</text>
      <text x="45.5" y="49.5" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#777777">{data.website}</text>
      {data.logo && <image href={data.logo} x="4" y="4" width="6" height="6" preserveAspectRatio="xMidYMid meet" opacity="0.3" />}
    </g>
  ),
};

// ============================================================
// 6. DISPLAY (飾) — Herb Lubalin: Display-sized hero name
// ============================================================
const displayTemplate: TemplateDefinition = {
  id: 'display',
  name: 'DISPLAY',
  nameJa: '飾',
  category: 'typography',
  designer: 'Herb Lubalin',
  description: '名前が全てを語る。ディスプレイサイズの大胆な存在感。',
  accentColor: '#1a1a1a',
  renderFront: (data: CardData) => {
    const nameParts = data.nameEn.split(' ');
    return (
      <g>
        <defs>
          <filter id="typography-display-paper"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
          <filter id="typography-display-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.4" result="blur"/><feOffset dx="0.12" dy="0.18" result="shifted"/><feFlood floodColor="#000000" floodOpacity="0.08" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          <clipPath id="typography-display-clip"><rect width="91" height="55" /></clipPath>
        </defs>
        <rect width="91" height="55" fill="#ffffff" filter="url(#typography-display-paper)" />
        <g clipPath="url(#typography-display-clip)">
          <text x="4" y="26" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="20" letterSpacing="-1" fill="#1a1a1a" filter="url(#typography-display-shadow)">{nameParts[0]?.toUpperCase()}</text>
          <text x="4" y="44" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="20" letterSpacing="-1" fill="#1a1a1a" filter="url(#typography-display-shadow)">{nameParts[1]?.toUpperCase() || ''}</text>
        </g>
        {/* Tiny detail dot */}
        <circle cx="87" cy="4" r="0.4" fill="#1a1a1a" opacity="0.15" />
        <text x="84" y="51" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="2" fill="#999999">{data.nameJa}</text>
        {data.logo && <image href={data.logo} x="78" y="42" width="6" height="6" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
      </g>
    );
  },
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="typography-display-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
      </defs>
      <rect width="91" height="55" fill="#1a1a1a" filter="url(#typography-display-paper-b)" />
      <circle cx="87" cy="4" r="0.4" fill="#ffffff" opacity="0.15" />
      <text x="8" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="3" fill="#ffffff">{data.companyJa}</text>
      <text x="8" y="17" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.8" letterSpacing="0.3" fill="#888888">{data.companyEn}</text>
      <text x="8" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#777777">{data.titleJa}</text>
      <line x1="8" y1="25.5" x2="50" y2="25.5" stroke="#333333" strokeWidth="0.1" />
      <text x="8" y="30" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#999999">{data.tel}</text>
      <text x="8" y="34" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#999999">{data.email}</text>
      <text x="8" y="38" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#999999">{data.website}</text>
      <line x1="8" y1="41" x2="50" y2="41" stroke="#333333" strokeWidth="0.08" />
      <text x="8" y="45" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#666666">〒{data.zipCode} {data.addressJa}</text>
      {data.logo && <image href={data.logo} x="4" y="46" width="6" height="6" preserveAspectRatio="xMidYMid meet" opacity="0.3" />}
    </g>
  ),
};

// ============================================================
// 7. LABEL (札) — Erik Spiekermann: Label/tag style with borders
// ============================================================
const labelTemplate: TemplateDefinition = {
  id: 'label',
  name: 'LABEL',
  nameJa: '札',
  category: 'typography',
  designer: 'Erik Spiekermann',
  description: 'ラベル様式の情報階層。枠線が生む明快な構造。',
  accentColor: '#1a1a1a',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="typography-label-paper"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
      </defs>
      <rect width="91" height="55" fill="#ffffff" filter="url(#typography-label-paper)" />
      {/* Outer border */}
      <rect x="4" y="4" width="83" height="47" fill="none" stroke="#1a1a1a" strokeWidth="0.25" />
      <rect x="4.8" y="4.8" width="81.4" height="45.4" fill="none" stroke="#1a1a1a" strokeWidth="0.06" />
      {/* Name label box */}
      <rect x="4" y="4" width="83" height="14" fill="none" stroke="#1a1a1a" strokeWidth="0.25" />
      <text x="10" y="11" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="5" fill="#1a1a1a">{data.nameJa}</text>
      <text x="10" y="16" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.8" letterSpacing="0.3" fill="#666666">{data.nameEn.toUpperCase()}</text>
      {/* Vertical divider */}
      <line x1="40" y1="18" x2="40" y2="51" stroke="#e0e0e0" strokeWidth="0.15" />
      {/* Left column */}
      <text x="10" y="24.5" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="1.1" letterSpacing="0.5" fill="#aaaaaa">TITLE</text>
      <text x="10" y="28.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.6" fill="#555555">{data.titleJa}</text>
      <text x="10" y="34.5" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="1.1" letterSpacing="0.5" fill="#aaaaaa">COMPANY</text>
      <text x="10" y="38.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.6" fill="#555555">{data.companyJa}</text>
      <text x="10" y="42" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.3" fill="#888888">{data.companyEn}</text>
      {/* Right column */}
      <text x="45" y="24.5" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="1.1" letterSpacing="0.5" fill="#aaaaaa">CONTACT</text>
      <text x="45" y="28.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fill="#555555">{data.tel}</text>
      <text x="45" y="32" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fill="#555555">{data.email}</text>
      <text x="45" y="35.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fill="#555555">{data.website}</text>
      <text x="45" y="41" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="1.1" letterSpacing="0.5" fill="#aaaaaa">ADDRESS</text>
      <text x="45" y="44.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#666666">〒{data.zipCode}</text>
      <text x="45" y="47.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#666666">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="75" y="38" width="6" height="6" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="typography-label-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
      </defs>
      <rect width="91" height="55" fill="#1a1a1a" filter="url(#typography-label-paper-b)" />
      {/* Central label frame */}
      <rect x="12" y="12" width="67" height="31" fill="none" stroke="#ffffff" strokeWidth="0.25" />
      <rect x="13" y="13" width="65" height="29" fill="none" stroke="#555555" strokeWidth="0.1" />
      <text x="45.5" y="23" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="3" letterSpacing="0.8" fill="#ffffff">{data.companyEn.toUpperCase()}</text>
      <text x="45.5" y="28.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.5" fill="#999999">{data.companyJa}</text>
      <text x="45.5" y="32.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#666666">{data.titleJa}</text>
      <line x1="25" y1="35" x2="66" y2="35" stroke="#444444" strokeWidth="0.06" />
      <text x="45.5" y="38.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.3" fill="#666666">{data.tel}  |  {data.email}</text>
      <text x="45.5" y="46" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#555555">〒{data.zipCode} {data.addressJa}</text>
      {data.logo && <image href={data.logo} x="4" y="4" width="6" height="6" preserveAspectRatio="xMidYMid meet" opacity="0.3" />}
    </g>
  ),
};

// ============================================================
// 8. EDITORIAL (誌) — Alexey Brodovitch: Magazine editorial layout
// ============================================================
const editorialTemplate: TemplateDefinition = {
  id: 'editorial',
  name: 'EDITORIAL',
  nameJa: '誌',
  category: 'typography',
  designer: 'Alexey Brodovitch',
  description: '誌面のようなレイアウト。コラム構成が生む知性。',
  accentColor: '#c0392b',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="typography-editorial-paper"><feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="typography-editorial-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.2" result="blur"/><feOffset dx="0.06" dy="0.1" result="shifted"/><feFlood floodColor="#000000" floodOpacity="0.06" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <rect width="91" height="55" fill="#faf9f7" filter="url(#typography-editorial-paper)" />
      {/* Top rule - magazine style */}
      <line x1="6" y1="6" x2="85" y2="6" stroke="#1a1a1a" strokeWidth="0.35" />
      <line x1="6" y1="7.2" x2="85" y2="7.2" stroke="#1a1a1a" strokeWidth="0.08" />
      {/* Headline name */}
      <text x="6" y="16" fontFamily="'Cormorant Garamond', serif" fontWeight="700" fontSize="8" fill="#1a1a1a" filter="url(#typography-editorial-shadow)">{data.nameEn}</text>
      <text x="6" y="21" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" letterSpacing="0.4" fill="#888888">{data.nameJa}  |  {data.titleJa}</text>
      <line x1="6" y1="24" x2="85" y2="24" stroke="#dddddd" strokeWidth="0.08" />
      {/* Column divider */}
      <line x1="45.5" y1="27" x2="45.5" y2="50" stroke="#e8e8e8" strokeWidth="0.08" />
      {/* Left column */}
      <text x="6" y="30" fontFamily="'Cormorant Garamond', serif" fontWeight="600" fontSize="1.4" letterSpacing="0.4" fill="#c0392b">COMPANY</text>
      <text x="6" y="34" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.6" fill="#555555">{data.companyJa}</text>
      <text x="6" y="38" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fill="#777777">{data.companyEn}</text>
      <text x="6" y="44" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#888888">〒{data.zipCode}</text>
      <text x="6" y="47.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#888888">{data.addressJa}</text>
      {/* Right column */}
      <text x="50" y="30" fontFamily="'Cormorant Garamond', serif" fontWeight="600" fontSize="1.4" letterSpacing="0.4" fill="#c0392b">CONTACT</text>
      <text x="50" y="34" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#555555">{data.tel}</text>
      <text x="50" y="38" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#555555">{data.email}</text>
      <text x="50" y="42" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#555555">{data.website}</text>
      {/* Bottom rule */}
      <line x1="6" y1="51" x2="85" y2="51" stroke="#1a1a1a" strokeWidth="0.08" />
      {data.logo && <image href={data.logo} x="78" y="43" width="6" height="6" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="typography-editorial-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
      </defs>
      <rect width="91" height="55" fill="#1a1a1a" filter="url(#typography-editorial-paper-b)" />
      <line x1="10" y1="12" x2="81" y2="12" stroke="#ffffff" strokeWidth="0.35" />
      <line x1="10" y1="13.2" x2="81" y2="13.2" stroke="#ffffff" strokeWidth="0.08" />
      <text x="45.5" y="24" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="700" fontSize="6" letterSpacing="0.5" fill="#ffffff">{data.companyEn}</text>
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="2.5" letterSpacing="0.8" fill="#888888">{data.companyJa}</text>
      <text x="45.5" y="34.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#666666">{data.titleJa}</text>
      <line x1="10" y1="37.5" x2="81" y2="37.5" stroke="#ffffff" strokeWidth="0.08" />
      <line x1="10" y1="38.3" x2="81" y2="38.3" stroke="#ffffff" strokeWidth="0.35" />
      <text x="45.5" y="43.5" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontStyle="italic" fontSize="1.6" fill="#666666">{data.tel}  |  {data.email}  |  {data.website}</text>
      <text x="45.5" y="48" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#555555">〒{data.zipCode} {data.addressJa}</text>
      {data.logo && <image href={data.logo} x="4" y="4" width="6" height="6" preserveAspectRatio="xMidYMid meet" opacity="0.3" />}
    </g>
  ),
};

// ============================================================
// 9. KERN (詰) — Jan Tschichold: Ultra-tight tracking
// ============================================================
const kernTemplate: TemplateDefinition = {
  id: 'kern',
  name: 'KERN',
  nameJa: '詰',
  category: 'typography',
  designer: 'Jan Tschichold',
  description: '極限のカーニング。文字詰めが生む洗練された密度。',
  accentColor: '#2c2c2c',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="typography-kern-paper"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="typography-kern-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.2" result="blur"/><feOffset dx="0.06" dy="0.1" result="shifted"/><feFlood floodColor="#000000" floodOpacity="0.06" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <rect width="91" height="55" fill="#fafafa" filter="url(#typography-kern-paper)" />
      {/* Thin accent bar */}
      <rect x="0" y="0" width="91" height="0.8" fill="#1a1a1a" opacity="0.08" />
      {/* Name with ultra-tight tracking */}
      <text x="8" y="15" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="7" letterSpacing="-0.5" fill="#1a1a1a" filter="url(#typography-kern-shadow)">{data.nameEn.toUpperCase()}</text>
      <text x="8" y="21" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="3" letterSpacing="-0.3" fill="#555555">{data.nameJa}</text>
      <text x="8" y="27" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.8" letterSpacing="-0.2" fill="#999999">{data.titleEn}  /  {data.titleJa}</text>
      <line x1="8" y1="30.5" x2="83" y2="30.5" stroke="#e0e0e0" strokeWidth="0.08" />
      {/* Dense contact block */}
      <text x="8" y="35" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" letterSpacing="-0.3" fill="#777777">{data.companyJa}  {data.companyEn}</text>
      <text x="8" y="39" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" letterSpacing="-0.3" fill="#777777">T {data.tel}  E {data.email}</text>
      <text x="8" y="43" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" letterSpacing="-0.3" fill="#777777">W {data.website}</text>
      <text x="8" y="48" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" letterSpacing="-0.2" fill="#aaaaaa">〒{data.zipCode} {data.addressJa}</text>
      {data.logo && <image href={data.logo} x="78" y="42" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="typography-kern-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
      </defs>
      <rect width="91" height="55" fill="#111111" filter="url(#typography-kern-paper-b)" />
      <rect x="0" y="0" width="91" height="0.8" fill="#ffffff" opacity="0.08" />
      <text x="45.5" y="21" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="5" letterSpacing="-0.5" fill="#ffffff">{data.companyEn.toUpperCase()}</text>
      <text x="45.5" y="28" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" letterSpacing="-0.3" fill="#777777">{data.companyJa}</text>
      <text x="45.5" y="32.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="-0.2" fill="#555555">{data.titleJa}</text>
      <line x1="20" y1="35.5" x2="71" y2="35.5" stroke="#333333" strokeWidth="0.06" />
      <text x="45.5" y="39.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" letterSpacing="-0.2" fill="#555555">{data.tel}  |  {data.email}</text>
      <text x="45.5" y="43.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.3" letterSpacing="-0.2" fill="#555555">{data.website}</text>
      <text x="45.5" y="49" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" letterSpacing="-0.2" fill="#444444">〒{data.zipCode} {data.addressJa}</text>
      {data.logo && <image href={data.logo} x="4" y="4" width="6" height="6" preserveAspectRatio="xMidYMid meet" opacity="0.3" />}
    </g>
  ),
};

// ============================================================
// 10. SCRIPT (筆) — Hermann Zapf: Italic/calligraphic accent
// ============================================================
const scriptTemplate: TemplateDefinition = {
  id: 'script',
  name: 'SCRIPT',
  nameJa: '筆',
  category: 'typography',
  designer: 'Hermann Zapf',
  description: 'イタリック体の優美。筆の流れが宿る文字の芸術。',
  accentColor: '#3d3d3d',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="typography-script-paper"><feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="typography-script-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.2" result="blur"/><feOffset dx="0.06" dy="0.1" result="shifted"/><feFlood floodColor="#2c2c2c" floodOpacity="0.08" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <rect width="91" height="55" fill="#faf8f5" filter="url(#typography-script-paper)" />
      {/* Decorative thin rule */}
      <line x1="8" y1="10" x2="40" y2="10" stroke="#cccccc" strokeWidth="0.12" />
      {/* Small ornamental dot */}
      <circle cx="42" cy="10" r="0.3" fill="#cccccc" />
      {/* Script-style name in italic serif */}
      <text x="8" y="22" fontFamily="'Cormorant Garamond', serif" fontWeight="500" fontStyle="italic" fontSize="9" fill="#2c2c2c" filter="url(#typography-script-shadow)">{data.nameEn}</text>
      <text x="8" y="29" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="2.8" letterSpacing="0.5" fill="#888888">{data.nameJa}</text>
      <text x="8" y="34.5" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontStyle="italic" fontSize="2" fill="#aaaaaa">{data.titleEn}</text>
      {/* Small rule */}
      <line x1="8" y1="37.5" x2="30" y2="37.5" stroke="#dddddd" strokeWidth="0.08" />
      <circle cx="32" cy="37.5" r="0.2" fill="#dddddd" />
      {/* Contact in upright serif */}
      <text x="8" y="41.5" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.6" fill="#999999">{data.tel}</text>
      <text x="8" y="45" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.6" fill="#999999">{data.email}</text>
      <text x="8" y="48.5" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.6" fill="#999999">{data.website}</text>
      {data.logo && <image href={data.logo} x="78" y="42" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.45" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="typography-script-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <linearGradient id="typography-script-grad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#888888"/><stop offset="50%" stopColor="#ffffff"/><stop offset="100%" stopColor="#888888"/></linearGradient>
      </defs>
      <rect width="91" height="55" fill="#2c2c2c" filter="url(#typography-script-paper-b)" />
      {/* Elegant rules */}
      <line x1="15" y1="15" x2="76" y2="15" stroke="url(#typography-script-grad)" strokeWidth="0.12" />
      <circle cx="45.5" cy="15" r="0.25" fill="#ffffff" opacity="0.4" />
      <text x="45.5" y="25" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="600" fontStyle="italic" fontSize="5" fill="#faf8f5">{data.companyEn}</text>
      <text x="45.5" y="31" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="2.2" letterSpacing="0.8" fill="#999999">{data.companyJa}</text>
      <text x="45.5" y="35" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#777777">{data.titleJa}</text>
      <line x1="15" y1="38" x2="76" y2="38" stroke="url(#typography-script-grad)" strokeWidth="0.12" />
      <circle cx="45.5" cy="38" r="0.25" fill="#ffffff" opacity="0.4" />
      <text x="45.5" y="42.5" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontStyle="italic" fontSize="1.5" fill="#777777">{data.tel}  |  {data.email}</text>
      <text x="45.5" y="46.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#666666">〒{data.zipCode} {data.addressJa}</text>
      <text x="45.5" y="50" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontStyle="italic" fontSize="1.5" fill="#777777">{data.website}</text>
      {data.logo && <image href={data.logo} x="4" y="4" width="6" height="6" preserveAspectRatio="xMidYMid meet" opacity="0.3" />}
    </g>
  ),
};

// ============================================================
// Export all typography templates
// ============================================================
export const typographyTemplates: TemplateDefinition[] = [
  typoTemplate,
  stackTemplate,
  clashTemplate,
  monoTypeTemplate,
  serifTemplate,
  displayTemplate,
  labelTemplate,
  editorialTemplate,
  kernTemplate,
  scriptTemplate,
];
