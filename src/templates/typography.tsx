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
    const initials = data.nameEn
      .split(' ')
      .map((n) => n[0])
      .join('');
    return (
      <g>
        <rect width="91" height="55" fill="#ffffff" />
        <defs>
          <clipPath id="typo-clip-front">
            <rect width="91" height="55" />
          </clipPath>
        </defs>
        <g clipPath="url(#typo-clip-front)">
          <text
            x="-4"
            y="52"
            fontFamily="'Inter', sans-serif"
            fontWeight="900"
            fontSize="48"
            fill="#f2f2f2"
            letterSpacing="-3"
          >
            {initials}
          </text>
        </g>
        <text
          x="8"
          y="18"
          fontFamily="'Noto Sans JP', sans-serif"
          fontWeight="600"
          fontSize="5.5"
          letterSpacing="0.4"
          fill="#1a1a1a"
        >
          {data.nameJa}
        </text>
        <text
          x="8"
          y="24"
          fontFamily="'Inter', sans-serif"
          fontWeight="300"
          fontSize="2.2"
          letterSpacing="0.3"
          fill="#555555"
        >
          {data.nameEn}
        </text>
        <text
          x="8"
          y="29"
          fontFamily="'Noto Sans JP', sans-serif"
          fontWeight="300"
          fontSize="1.8"
          fill="#999999"
        >
          {data.titleJa}
        </text>
        <line x1="8" y1="33" x2="83" y2="33" stroke="#e8e8e8" strokeWidth="0.15" />
        <text
          x="8"
          y="37.5"
          fontFamily="'Inter', sans-serif"
          fontWeight="400"
          fontSize="1.6"
          fill="#888888"
        >
          T. {data.tel}
        </text>
        <text
          x="8"
          y="41.5"
          fontFamily="'Inter', sans-serif"
          fontWeight="400"
          fontSize="1.6"
          fill="#888888"
        >
          {data.email}
        </text>
        <text
          x="8"
          y="45.5"
          fontFamily="'Inter', sans-serif"
          fontWeight="400"
          fontSize="1.6"
          fill="#888888"
        >
          {data.website}
        </text>
      </g>
    );
  },
  renderBack: (data: CardData) => {
    const firstChar = data.companyEn.charAt(0);
    return (
      <g>
        <rect width="91" height="55" fill="#1a1a1a" />
        <defs>
          <clipPath id="typo-clip-back">
            <rect width="91" height="55" />
          </clipPath>
        </defs>
        <g clipPath="url(#typo-clip-back)">
          <text
            x="50"
            y="50"
            textAnchor="middle"
            fontFamily="'Inter', sans-serif"
            fontWeight="900"
            fontSize="60"
            fill="#222222"
          >
            {firstChar}
          </text>
        </g>
        <text
          x="45.5"
          y="28"
          textAnchor="middle"
          fontFamily="'Inter', sans-serif"
          fontWeight="200"
          fontSize="3.5"
          letterSpacing="1.5"
          fill="#ffffff"
        >
          {data.companyEn.toUpperCase()}
        </text>
        <text
          x="45.5"
          y="34"
          textAnchor="middle"
          fontFamily="'Noto Sans JP', sans-serif"
          fontWeight="300"
          fontSize="2"
          fill="#666666"
        >
          {data.companyJa}
        </text>
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
      <rect width="91" height="55" fill="#ffffff" />
      <defs>
        <clipPath id="stack-clip-front">
          <rect width="91" height="55" />
        </clipPath>
      </defs>
      <g clipPath="url(#stack-clip-front)">
        {/* Large name layer */}
        <text
          x="6"
          y="22"
          fontFamily="'Inter', sans-serif"
          fontWeight="900"
          fontSize="14"
          fill="#f5f5f5"
          letterSpacing="-0.5"
        >
          {data.nameEn.split(' ')[1]?.toUpperCase() || data.nameEn.toUpperCase()}
        </text>
        {/* Medium Japanese name */}
        <text
          x="6"
          y="28"
          fontFamily="'Noto Sans JP', sans-serif"
          fontWeight="700"
          fontSize="8"
          fill="#1a1a1a"
        >
          {data.nameJa}
        </text>
      </g>
      {/* Small English name */}
      <text
        x="6"
        y="35"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2.4"
        letterSpacing="0.4"
        fill="#666666"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Tiny title */}
      <text
        x="6"
        y="39.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#aaaaaa"
      >
        {data.titleJa}
      </text>
      {/* Contact details - smallest scale */}
      <text
        x="6"
        y="45"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#999999"
      >
        {data.tel}  |  {data.email}
      </text>
      <text
        x="6"
        y="48.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#999999"
      >
        {data.website}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1a1a1a" />
      <defs>
        <clipPath id="stack-clip-back">
          <rect width="91" height="55" />
        </clipPath>
      </defs>
      <g clipPath="url(#stack-clip-back)">
        {/* Massive company name stacked */}
        <text
          x="6"
          y="20"
          fontFamily="'Inter', sans-serif"
          fontWeight="900"
          fontSize="18"
          fill="#2a2a2a"
          letterSpacing="-1"
        >
          {data.companyEn.split(' ')[0]?.toUpperCase()}
        </text>
        <text
          x="6"
          y="38"
          fontFamily="'Inter', sans-serif"
          fontWeight="900"
          fontSize="18"
          fill="#2a2a2a"
          letterSpacing="-1"
        >
          {data.companyEn.split(' ').slice(1).join(' ').toUpperCase() || '.'}
        </text>
      </g>
      {/* Readable company overlay */}
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="3.5"
        letterSpacing="0.8"
        fill="#ffffff"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="33"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="2"
        letterSpacing="0.6"
        fill="#888888"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#555555"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
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
        <rect width="91" height="55" fill="#ffffff" />
        {/* Ultra-thin first name */}
        <text
          x="6"
          y="17"
          fontFamily="'Inter', sans-serif"
          fontWeight="100"
          fontSize="10"
          letterSpacing="0.5"
          fill="#1a1a1a"
        >
          {nameParts[0]?.toUpperCase()}
        </text>
        {/* Ultra-bold last name right below */}
        <text
          x="6"
          y="29"
          fontFamily="'Inter', sans-serif"
          fontWeight="900"
          fontSize="10"
          letterSpacing="-0.3"
          fill="#1a1a1a"
        >
          {nameParts[1]?.toUpperCase() || ''}
        </text>
        {/* Japanese name in thin weight */}
        <text
          x="6"
          y="35"
          fontFamily="'Noto Sans JP', sans-serif"
          fontWeight="100"
          fontSize="2.8"
          letterSpacing="0.6"
          fill="#666666"
        >
          {data.nameJa}
        </text>
        {/* Bold title */}
        <text
          x="6"
          y="41"
          fontFamily="'Inter', sans-serif"
          fontWeight="900"
          fontSize="1.5"
          letterSpacing="0.3"
          fill="#aaaaaa"
        >
          {data.titleEn.toUpperCase()}
        </text>
        {/* Thin contact */}
        <text
          x="6"
          y="46"
          fontFamily="'Inter', sans-serif"
          fontWeight="100"
          fontSize="1.6"
          fill="#888888"
        >
          {data.tel}
        </text>
        <text
          x="6"
          y="49.5"
          fontFamily="'Inter', sans-serif"
          fontWeight="100"
          fontSize="1.6"
          fill="#888888"
        >
          {data.email}
        </text>
      </g>
    );
  },
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#000000" />
      {/* Extreme weight contrast on back */}
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="100"
        fontSize="4"
        letterSpacing="2"
        fill="#ffffff"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="33"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="5"
        fill="#ffffff"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="42"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="100"
        fontSize="1.5"
        letterSpacing="0.5"
        fill="#666666"
      >
        {data.addressEn}
      </text>
      <text
        x="45.5"
        y="46"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="900"
        fontSize="1.5"
        fill="#666666"
      >
        {data.website}
      </text>
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
      <rect width="91" height="55" fill="#ffffff" />
      {/* Subtle grid dots */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((col) =>
        [0, 1, 2, 3, 4, 5, 6, 7].map((row) => (
          <circle
            key={`mono-type-dot-${col}-${row}`}
            cx={7 + col * 6.5}
            cy={5 + row * 6.5}
            r="0.15"
            fill="#e0e0e0"
          />
        ))
      )}
      {/* Name in monospace style */}
      <text
        x="7"
        y="14"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="5"
        letterSpacing="1.2"
        fill="#1a1a1a"
      >
        {data.nameJa}
      </text>
      <text
        x="7"
        y="20"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.8"
        fill="#666666"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Grid-aligned info */}
      <text
        x="7"
        y="27"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        letterSpacing="0.5"
        fill="#999999"
      >
        TITLE____{data.titleEn}
      </text>
      <line x1="7" y1="30" x2="84" y2="30" stroke="#f0f0f0" strokeWidth="0.15" />
      <text
        x="7"
        y="34.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        letterSpacing="0.5"
        fill="#999999"
      >
        TEL______{data.tel}
      </text>
      <text
        x="7"
        y="38.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        letterSpacing="0.5"
        fill="#999999"
      >
        MAIL_____{data.email}
      </text>
      <text
        x="7"
        y="42.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        letterSpacing="0.5"
        fill="#999999"
      >
        WEB______{data.website}
      </text>
      <text
        x="7"
        y="46.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        letterSpacing="0.5"
        fill="#999999"
      >
        ZIP______{data.zipCode}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1a1a1a" />
      {/* Grid dots on dark */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((col) =>
        [0, 1, 2, 3, 4, 5, 6, 7].map((row) => (
          <circle
            key={`mono-type-bdot-${col}-${row}`}
            cx={7 + col * 6.5}
            cy={5 + row * 6.5}
            r="0.15"
            fill="#333333"
          />
        ))
      )}
      <text
        x="7"
        y="22"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="3"
        letterSpacing="1.5"
        fill="#ffffff"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <text
        x="7"
        y="28"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2.2"
        letterSpacing="0.8"
        fill="#888888"
      >
        {data.companyJa}
      </text>
      <text
        x="7"
        y="38"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        letterSpacing="0.5"
        fill="#555555"
      >
        ADDR_____{data.addressEn}
      </text>
      <text
        x="7"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        letterSpacing="0.3"
        fill="#555555"
      >
        {data.addressJa}
      </text>
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
      <rect width="91" height="55" fill="#faf9f7" />
      {/* Thin top rule */}
      <line x1="10" y1="8" x2="81" y2="8" stroke="#1a1a1a" strokeWidth="0.2" />
      {/* Name in serif */}
      <text
        x="45.5"
        y="19"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="600"
        fontSize="6"
        letterSpacing="0.3"
        fill="#1a1a1a"
      >
        {data.nameEn}
      </text>
      {/* Japanese name below, smaller */}
      <text
        x="45.5"
        y="25"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2.8"
        letterSpacing="1"
        fill="#666666"
      >
        {data.nameJa}
      </text>
      {/* Thin rule */}
      <line x1="35" y1="29" x2="56" y2="29" stroke="#cccccc" strokeWidth="0.15" />
      {/* Title */}
      <text
        x="45.5"
        y="34"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontStyle="italic"
        fontSize="2.2"
        fill="#999999"
      >
        {data.titleEn}
      </text>
      {/* Contact info */}
      <text
        x="45.5"
        y="41"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.2"
        fill="#888888"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="45"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.2"
        fill="#888888"
      >
        {data.email}
      </text>
      {/* Thin bottom rule */}
      <line x1="10" y1="49" x2="81" y2="49" stroke="#1a1a1a" strokeWidth="0.2" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1a1a1a" />
      <line x1="10" y1="15" x2="81" y2="15" stroke="#444444" strokeWidth="0.15" />
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="600"
        fontSize="4.5"
        letterSpacing="0.8"
        fill="#faf9f7"
      >
        {data.companyEn}
      </text>
      <text
        x="45.5"
        y="33"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.5"
        fill="#888888"
      >
        {data.companyJa}
      </text>
      <line x1="10" y1="37" x2="81" y2="37" stroke="#444444" strokeWidth="0.15" />
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontStyle="italic"
        fontSize="1.7"
        letterSpacing="0.2"
        fill="#777777"
      >
        {data.addressEn}
      </text>
      <text
        x="45.5"
        y="47"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.7"
        fill="#777777"
      >
        {data.website}
      </text>
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
        <rect width="91" height="55" fill="#ffffff" />
        <defs>
          <clipPath id="display-clip-front">
            <rect width="91" height="55" />
          </clipPath>
        </defs>
        <g clipPath="url(#display-clip-front)">
          {/* Hero first name - massive */}
          <text
            x="4"
            y="26"
            fontFamily="'Inter', sans-serif"
            fontWeight="900"
            fontSize="20"
            letterSpacing="-1"
            fill="#1a1a1a"
          >
            {nameParts[0]?.toUpperCase()}
          </text>
          {/* Hero last name - massive */}
          <text
            x="4"
            y="44"
            fontFamily="'Inter', sans-serif"
            fontWeight="900"
            fontSize="20"
            letterSpacing="-1"
            fill="#1a1a1a"
          >
            {nameParts[1]?.toUpperCase() || ''}
          </text>
        </g>
        {/* Japanese name - small, anchored to bottom right */}
        <text
          x="84"
          y="51"
          textAnchor="end"
          fontFamily="'Noto Sans JP', sans-serif"
          fontWeight="300"
          fontSize="2"
          fill="#999999"
        >
          {data.nameJa}
        </text>
      </g>
    );
  },
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1a1a1a" />
      <text
        x="8"
        y="12"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="3"
        fill="#ffffff"
      >
        {data.companyJa}
      </text>
      <text
        x="8"
        y="17"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#888888"
      >
        {data.companyEn}
      </text>
      <text
        x="8"
        y="23"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.7"
        fill="#777777"
      >
        {data.titleJa}
      </text>
      <line x1="8" y1="27" x2="50" y2="27" stroke="#333333" strokeWidth="0.15" />
      <text
        x="8"
        y="32"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#999999"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="36"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#999999"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="40"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#999999"
      >
        {data.website}
      </text>
      <text
        x="8"
        y="47"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#666666"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
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
      <rect width="91" height="55" fill="#ffffff" />
      {/* Outer border */}
      <rect
        x="4"
        y="4"
        width="83"
        height="47"
        fill="none"
        stroke="#1a1a1a"
        strokeWidth="0.3"
      />
      {/* Name label box */}
      <rect
        x="4"
        y="4"
        width="83"
        height="14"
        fill="none"
        stroke="#1a1a1a"
        strokeWidth="0.3"
      />
      {/* Name */}
      <text
        x="10"
        y="11"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="5"
        fill="#1a1a1a"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="16"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#666666"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Vertical divider for contact section */}
      <line x1="40" y1="18" x2="40" y2="51" stroke="#e0e0e0" strokeWidth="0.2" />
      {/* Left column: Title & Company */}
      <text
        x="10"
        y="25"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="1.2"
        letterSpacing="0.5"
        fill="#aaaaaa"
      >
        TITLE
      </text>
      <text
        x="10"
        y="29"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.7"
        fill="#555555"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="1.2"
        letterSpacing="0.5"
        fill="#aaaaaa"
      >
        COMPANY
      </text>
      <text
        x="10"
        y="40"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.7"
        fill="#555555"
      >
        {data.companyJa}
      </text>
      {/* Right column: Contact */}
      <text
        x="45"
        y="25"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="1.2"
        letterSpacing="0.5"
        fill="#aaaaaa"
      >
        CONTACT
      </text>
      <text
        x="45"
        y="29"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#555555"
      >
        {data.tel}
      </text>
      <text
        x="45"
        y="33"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#555555"
      >
        {data.email}
      </text>
      <text
        x="45"
        y="37"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#555555"
      >
        {data.website}
      </text>
      <text
        x="45"
        y="44"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="1.2"
        letterSpacing="0.5"
        fill="#aaaaaa"
      >
        ADDRESS
      </text>
      <text
        x="45"
        y="48"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#555555"
      >
        〒{data.zipCode}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1a1a1a" />
      {/* Central label frame */}
      <rect
        x="12"
        y="12"
        width="67"
        height="31"
        fill="none"
        stroke="#ffffff"
        strokeWidth="0.3"
      />
      <rect
        x="14"
        y="14"
        width="63"
        height="27"
        fill="none"
        stroke="#555555"
        strokeWidth="0.15"
      />
      <text
        x="45.5"
        y="25"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="3"
        letterSpacing="0.8"
        fill="#ffffff"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.5"
        fill="#999999"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="37"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#666666"
      >
        {data.addressEn}
      </text>
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
      <rect width="91" height="55" fill="#faf9f7" />
      {/* Top rule - magazine style */}
      <line x1="6" y1="6" x2="85" y2="6" stroke="#1a1a1a" strokeWidth="0.4" />
      <line x1="6" y1="7" x2="85" y2="7" stroke="#1a1a1a" strokeWidth="0.1" />
      {/* Headline name */}
      <text
        x="6"
        y="16"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="700"
        fontSize="8"
        fill="#1a1a1a"
      >
        {data.nameEn}
      </text>
      {/* Japanese name as subhead */}
      <text
        x="6"
        y="21"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        letterSpacing="0.4"
        fill="#888888"
      >
        {data.nameJa}  |  {data.titleJa}
      </text>
      {/* Thin rule separator */}
      <line x1="6" y1="24" x2="85" y2="24" stroke="#dddddd" strokeWidth="0.1" />
      {/* Column divider */}
      <line x1="45.5" y1="27" x2="45.5" y2="50" stroke="#e8e8e8" strokeWidth="0.1" />
      {/* Left column: Company info */}
      <text
        x="6"
        y="30"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="600"
        fontSize="1.5"
        letterSpacing="0.4"
        fill="#c0392b"
      >
        COMPANY
      </text>
      <text
        x="6"
        y="34"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.7"
        fill="#555555"
      >
        {data.companyJa}
      </text>
      <text
        x="6"
        y="38"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#777777"
      >
        {data.companyEn}
      </text>
      <text
        x="6"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#888888"
      >
        〒{data.zipCode}
      </text>
      <text
        x="6"
        y="47.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#888888"
      >
        {data.addressJa}
      </text>
      {/* Right column: Contact */}
      <text
        x="50"
        y="30"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="600"
        fontSize="1.5"
        letterSpacing="0.4"
        fill="#c0392b"
      >
        CONTACT
      </text>
      <text
        x="50"
        y="34"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#555555"
      >
        {data.tel}
      </text>
      <text
        x="50"
        y="38"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#555555"
      >
        {data.email}
      </text>
      <text
        x="50"
        y="42"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#555555"
      >
        {data.website}
      </text>
      {/* Bottom rule */}
      <line x1="6" y1="51" x2="85" y2="51" stroke="#1a1a1a" strokeWidth="0.1" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1a1a1a" />
      {/* Editorial back - mastheadstyle */}
      <line x1="10" y1="12" x2="81" y2="12" stroke="#ffffff" strokeWidth="0.4" />
      <line x1="10" y1="13" x2="81" y2="13" stroke="#ffffff" strokeWidth="0.1" />
      <text
        x="45.5"
        y="25"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="700"
        fontSize="6"
        letterSpacing="0.5"
        fill="#ffffff"
      >
        {data.companyEn}
      </text>
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2.5"
        letterSpacing="0.8"
        fill="#888888"
      >
        {data.companyJa}
      </text>
      <line x1="10" y1="37" x2="81" y2="37" stroke="#ffffff" strokeWidth="0.1" />
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontStyle="italic"
        fontSize="1.8"
        fill="#666666"
      >
        {data.addressEn}
      </text>
      <line x1="10" y1="46" x2="81" y2="46" stroke="#ffffff" strokeWidth="0.4" />
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
      <rect width="91" height="55" fill="#fafafa" />
      {/* Name with ultra-tight tracking */}
      <text
        x="8"
        y="15"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="7"
        letterSpacing="-0.5"
        fill="#1a1a1a"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="8"
        y="21"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="3"
        letterSpacing="-0.3"
        fill="#555555"
      >
        {data.nameJa}
      </text>
      {/* Tight title */}
      <text
        x="8"
        y="27"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="-0.2"
        fill="#999999"
      >
        {data.titleEn}  /  {data.titleJa}
      </text>
      {/* Dense contact block */}
      <line x1="8" y1="31" x2="83" y2="31" stroke="#e0e0e0" strokeWidth="0.1" />
      <text
        x="8"
        y="36"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        letterSpacing="-0.3"
        fill="#777777"
      >
        {data.companyJa}  {data.companyEn}
      </text>
      <text
        x="8"
        y="40"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        letterSpacing="-0.3"
        fill="#777777"
      >
        T {data.tel}  E {data.email}
      </text>
      <text
        x="8"
        y="44"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        letterSpacing="-0.3"
        fill="#777777"
      >
        W {data.website}
      </text>
      <text
        x="8"
        y="48"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        letterSpacing="-0.3"
        fill="#aaaaaa"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#111111" />
      {/* Ultra-tight company display */}
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="5"
        letterSpacing="-0.5"
        fill="#ffffff"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        letterSpacing="-0.3"
        fill="#777777"
      >
        {data.companyJa}
      </text>
      {/* Dense address line */}
      <text
        x="45.5"
        y="42"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        letterSpacing="-0.2"
        fill="#555555"
      >
        {data.addressEn}  |  {data.website}
      </text>
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
      <rect width="91" height="55" fill="#faf8f5" />
      {/* Decorative thin rule */}
      <line x1="8" y1="10" x2="40" y2="10" stroke="#cccccc" strokeWidth="0.15" />
      {/* Script-style name in italic serif */}
      <text
        x="8"
        y="22"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="500"
        fontStyle="italic"
        fontSize="9"
        fill="#2c2c2c"
      >
        {data.nameEn}
      </text>
      {/* Japanese name */}
      <text
        x="8"
        y="29"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2.8"
        letterSpacing="0.5"
        fill="#888888"
      >
        {data.nameJa}
      </text>
      {/* Title in italic */}
      <text
        x="8"
        y="34.5"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontStyle="italic"
        fontSize="2"
        fill="#aaaaaa"
      >
        {data.titleEn}
      </text>
      {/* Small rule */}
      <line x1="8" y1="38" x2="30" y2="38" stroke="#dddddd" strokeWidth="0.1" />
      {/* Contact in upright serif */}
      <text
        x="8"
        y="42"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.7"
        fill="#999999"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="46"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.7"
        fill="#999999"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="50"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.7"
        fill="#999999"
      >
        {data.website}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#2c2c2c" />
      <defs>
        <linearGradient id="script-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#888888" />
          <stop offset="50%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#888888" />
        </linearGradient>
      </defs>
      {/* Elegant rules */}
      <line x1="15" y1="16" x2="76" y2="16" stroke="url(#script-grad)" strokeWidth="0.15" />
      {/* Company in elegant italic serif */}
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="600"
        fontStyle="italic"
        fontSize="5"
        fill="#faf8f5"
      >
        {data.companyEn}
      </text>
      <text
        x="45.5"
        y="33"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2.2"
        letterSpacing="0.8"
        fill="#999999"
      >
        {data.companyJa}
      </text>
      <line x1="15" y1="37" x2="76" y2="37" stroke="url(#script-grad)" strokeWidth="0.15" />
      {/* Address in italic */}
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontStyle="italic"
        fontSize="1.6"
        fill="#777777"
      >
        {data.addressEn}
      </text>
      <text
        x="45.5"
        y="47"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontStyle="italic"
        fontSize="1.6"
        fill="#777777"
      >
        {data.website}
      </text>
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
