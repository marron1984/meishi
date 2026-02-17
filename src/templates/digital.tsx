import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. BINARY (零壱) — Binary code streams, 0s and 1s
// Matrix-style data cascade, dark background with green digits
// ============================================================
const binaryTemplate: TemplateDefinition = {
  id: 'digital-binary',
  name: 'BINARY',
  nameJa: '零壱',
  category: 'digital',
  designer: 'Data Architect',
  description: 'ゼロとイチの洪水。全てはこの二つの数字から始まる。',
  accentColor: '#00FF41',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0A0E17" />
      {/* Binary rain columns */}
      <text fontFamily="'Space Grotesk', monospace" fontSize="1.2" fill="#00FF41" opacity="0.08">
        <tspan x="5" y="5">01101001</tspan>
        <tspan x="5" y="8">11010010</tspan>
        <tspan x="5" y="11">00101101</tspan>
        <tspan x="5" y="14">10110100</tspan>
        <tspan x="5" y="17">01001011</tspan>
        <tspan x="5" y="20">11100110</tspan>
        <tspan x="5" y="23">00011001</tspan>
        <tspan x="5" y="26">10100111</tspan>
        <tspan x="5" y="29">01110010</tspan>
        <tspan x="5" y="32">11001100</tspan>
        <tspan x="5" y="35">00110011</tspan>
        <tspan x="5" y="38">10011010</tspan>
        <tspan x="5" y="41">01100101</tspan>
        <tspan x="5" y="44">11011011</tspan>
        <tspan x="5" y="47">00100100</tspan>
        <tspan x="5" y="50">10111000</tspan>
        <tspan x="5" y="53">01000111</tspan>
      </text>
      <text fontFamily="'Space Grotesk', monospace" fontSize="1.2" fill="#00FF41" opacity="0.06">
        <tspan x="70" y="5">10110010</tspan>
        <tspan x="70" y="8">01001101</tspan>
        <tspan x="70" y="11">11010110</tspan>
        <tspan x="70" y="14">00101001</tspan>
        <tspan x="70" y="17">10010100</tspan>
        <tspan x="70" y="20">01101011</tspan>
        <tspan x="70" y="23">11000110</tspan>
        <tspan x="70" y="26">00111001</tspan>
        <tspan x="70" y="29">10100100</tspan>
        <tspan x="70" y="32">01011011</tspan>
        <tspan x="70" y="35">11110000</tspan>
        <tspan x="70" y="38">00001111</tspan>
        <tspan x="70" y="41">10101010</tspan>
        <tspan x="70" y="44">01010101</tspan>
        <tspan x="70" y="47">11001001</tspan>
        <tspan x="70" y="50">00110110</tspan>
        <tspan x="70" y="53">10011101</tspan>
      </text>
      {/* Glowing name */}
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="6"
        letterSpacing="0.8"
        fill="#00FF41"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Space Grotesk', monospace"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.3"
        fill="#00CC33"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Underline glow */}
      <line x1="25" y1="31" x2="66" y2="31" stroke="#00FF41" strokeWidth="0.15" opacity="0.4" />
      <text
        x="45.5"
        y="37"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#00AA2A"
      >
        {data.titleJa}
      </text>
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#00AA2A"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0A0E17" />
      {/* Faint binary background */}
      <text fontFamily="'Space Grotesk', monospace" fontSize="1" fill="#00FF41" opacity="0.04">
        <tspan x="3" y="4">0110100101101001011010010110100101101001011010010110100101101001011010010110100101</tspan>
        <tspan x="3" y="7">1101001011010010110100101101001011010010110100101101001011010010110100101101001011</tspan>
        <tspan x="3" y="10">0010110100101101001011010010110100101101001011010010110100101101001011010010110100</tspan>
        <tspan x="3" y="49">1010010110100101101001011010010110100101101001011010010110100101101001011010010110</tspan>
        <tspan x="3" y="52">0101101001011010010110100101101001011010010110100101101001011010010110100101101001</tspan>
      </text>
      <text
        x="45.5"
        y="13"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#00FF41"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="17"
        textAnchor="middle"
        fontFamily="'Space Grotesk', monospace"
        fontWeight="400"
        fontSize="1.4"
        fill="#00CC33"
      >
        {data.companyEn}
      </text>
      <line x1="15" y1="21" x2="76" y2="21" stroke="#00FF41" strokeWidth="0.1" opacity="0.3" />
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Space Grotesk', monospace"
        fontWeight="400"
        fontSize="1.4"
        fill="#00CC33"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Space Grotesk', monospace"
        fontWeight="400"
        fontSize="1.4"
        fill="#00CC33"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Space Grotesk', monospace"
        fontWeight="400"
        fontSize="1.4"
        fill="#00CC33"
      >
        {data.website}
      </text>
      <line x1="15" y1="39" x2="76" y2="39" stroke="#00FF41" strokeWidth="0.1" opacity="0.3" />
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#00AA2A"
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
        fill="#00AA2A"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 2. VECTOR (矢) — Vector graphics, directional arrows, paths
// Geometric precision, bezier handles, endpoint markers
// ============================================================
const vectorTemplate: TemplateDefinition = {
  id: 'digital-vector',
  name: 'VECTOR',
  nameJa: '矢',
  category: 'digital',
  designer: 'Vector Artist',
  description: 'ベクターの精密さ。制御点とパスが描く無限解像度。',
  accentColor: '#00D4FF',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0A0E17" />
      {/* Vector path with control handles */}
      <path
        d="M10,40 C20,10 40,45 55,20 S80,35 85,15"
        fill="none"
        stroke="#00D4FF"
        strokeWidth="0.3"
        opacity="0.3"
      />
      {/* Control point handles */}
      <line x1="10" y1="40" x2="20" y2="10" stroke="#00D4FF" strokeWidth="0.08" opacity="0.2" strokeDasharray="0.5,0.5" />
      <line x1="55" y1="20" x2="40" y2="45" stroke="#00D4FF" strokeWidth="0.08" opacity="0.2" strokeDasharray="0.5,0.5" />
      <line x1="55" y1="20" x2="70" y2="5" stroke="#00D4FF" strokeWidth="0.08" opacity="0.2" strokeDasharray="0.5,0.5" />
      {/* Anchor points */}
      <rect x="9.3" y="39.3" width="1.4" height="1.4" fill="#00D4FF" opacity="0.5" />
      <rect x="54.3" y="19.3" width="1.4" height="1.4" fill="#00D4FF" opacity="0.5" />
      <rect x="84.3" y="14.3" width="1.4" height="1.4" fill="#00D4FF" opacity="0.5" />
      {/* Control handle dots */}
      <circle cx="20" cy="10" r="0.5" fill="none" stroke="#00D4FF" strokeWidth="0.15" opacity="0.4" />
      <circle cx="40" cy="45" r="0.5" fill="none" stroke="#00D4FF" strokeWidth="0.15" opacity="0.4" />
      <text
        x="12"
        y="24"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#FFFFFF"
      >
        {data.nameJa}
      </text>
      <text
        x="12"
        y="30"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#00D4FF"
      >
        {data.nameEn}
      </text>
      <text
        x="12"
        y="36"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#5599AA"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0A0E17" />
      {/* Background vector paths */}
      <path
        d="M5,45 C15,30 30,50 50,25 S75,40 88,20"
        fill="none"
        stroke="#00D4FF"
        strokeWidth="0.15"
        opacity="0.12"
      />
      <path
        d="M3,15 C20,30 35,5 50,30 S70,10 90,25"
        fill="none"
        stroke="#00D4FF"
        strokeWidth="0.15"
        opacity="0.08"
      />
      <text
        x="45.5"
        y="12"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#FFFFFF"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="16"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#00D4FF"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="20" x2="71" y2="20" stroke="#00D4FF" strokeWidth="0.1" opacity="0.2" />
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#00AACC"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#00AACC"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="34"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#00AACC"
      >
        {data.website}
      </text>
      <line x1="20" y1="38" x2="71" y2="38" stroke="#00D4FF" strokeWidth="0.1" opacity="0.2" />
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#5599AA"
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
        fill="#5599AA"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 3. RENDER (描画) — 3D render wireframe, polygon mesh
// Wireframe grid, ambient occlusion, render viewport
// ============================================================
const renderTemplate: TemplateDefinition = {
  id: 'digital-render',
  name: 'RENDER',
  nameJa: '描画',
  category: 'digital',
  designer: '3D Artist',
  description: 'ワイヤーフレームの骨格。ポリゴンが形作る仮想世界。',
  accentColor: '#FFB000',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0A0E17" />
      {/* Viewport border */}
      <rect x="2" y="2" width="87" height="51" fill="none" stroke="#FFB000" strokeWidth="0.1" opacity="0.3" />
      {/* Viewport label */}
      <text x="4" y="5" fontFamily="'Space Grotesk', monospace" fontSize="1" fill="#FFB000" opacity="0.4">
        PERSPECTIVE_FRONT
      </text>
      {/* 3D wireframe cube in background */}
      <polygon points="62,8 78,12 78,28 62,24" fill="none" stroke="#FFB000" strokeWidth="0.1" opacity="0.15" />
      <polygon points="62,8 70,5 86,9 78,12" fill="none" stroke="#FFB000" strokeWidth="0.1" opacity="0.15" />
      <polygon points="78,12 86,9 86,25 78,28" fill="none" stroke="#FFB000" strokeWidth="0.1" opacity="0.15" />
      {/* Grid floor */}
      <line x1="5" y1="48" x2="86" y2="48" stroke="#FFB000" strokeWidth="0.05" opacity="0.1" />
      <line x1="10" y1="50" x2="81" y2="50" stroke="#FFB000" strokeWidth="0.05" opacity="0.08" />
      {[15, 25, 35, 45, 55, 65, 75].map((x, i) => (
        <line key={`digital-render-gl-${i}`} x1={x} y1="45" x2={x - 5} y2="52" stroke="#FFB000" strokeWidth="0.04" opacity="0.06" />
      ))}
      <text
        x="8"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#FFFFFF"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="28"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.3"
        fill="#FFB000"
      >
        {data.nameEn}
      </text>
      <text
        x="8"
        y="35"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#AA7700"
      >
        {data.titleJa}
      </text>
      <text
        x="8"
        y="41"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#AA7700"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0A0E17" />
      <rect x="2" y="2" width="87" height="51" fill="none" stroke="#FFB000" strokeWidth="0.1" opacity="0.3" />
      <text x="4" y="5" fontFamily="'Space Grotesk', monospace" fontSize="1" fill="#FFB000" opacity="0.4">
        PERSPECTIVE_BACK
      </text>
      {/* Subtle wireframe sphere */}
      <circle cx="72" cy="38" r="8" fill="none" stroke="#FFB000" strokeWidth="0.05" opacity="0.1" />
      <ellipse cx="72" cy="38" rx="8" ry="3" fill="none" stroke="#FFB000" strokeWidth="0.05" opacity="0.1" />
      <ellipse cx="72" cy="38" rx="3" ry="8" fill="none" stroke="#FFB000" strokeWidth="0.05" opacity="0.1" />
      <text
        x="45.5"
        y="13"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#FFFFFF"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="17"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#FFB000"
      >
        {data.companyEn}
      </text>
      <line x1="15" y1="21" x2="76" y2="21" stroke="#FFB000" strokeWidth="0.08" opacity="0.2" />
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#DDAA00"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#DDAA00"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#DDAA00"
      >
        {data.website}
      </text>
      <line x1="15" y1="39" x2="76" y2="39" stroke="#FFB000" strokeWidth="0.08" opacity="0.2" />
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#AA7700"
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
        fill="#AA7700"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 4. CODE-D (符) — Source code, syntax highlighting
// IDE-like layout, monospace, highlighted keywords
// ============================================================
const codeTemplate: TemplateDefinition = {
  id: 'digital-code',
  name: 'CODE-D',
  nameJa: '符',
  category: 'digital',
  designer: 'Code Poet',
  description: 'ソースコードの美学。構文が彩る論理の詩。',
  accentColor: '#00FF41',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0D1117" />
      {/* Title bar */}
      <rect x="0" y="0" width="91" height="4" fill="#161B22" />
      <circle cx="4" cy="2" r="0.7" fill="#FF5F56" />
      <circle cx="7" cy="2" r="0.7" fill="#FFBD2E" />
      <circle cx="10" cy="2" r="0.7" fill="#27C93F" />
      <text x="20" y="2.6" fontFamily="'Space Grotesk', monospace" fontSize="1.1" fill="#8B949E">
        meishi.tsx
      </text>
      {/* Line numbers */}
      <text fontFamily="'Space Grotesk', monospace" fontSize="1.2" fill="#484F58">
        <tspan x="3" y="9">1</tspan>
        <tspan x="3" y="12">2</tspan>
        <tspan x="3" y="15">3</tspan>
        <tspan x="3" y="18">4</tspan>
        <tspan x="3" y="21">5</tspan>
        <tspan x="3" y="24">6</tspan>
        <tspan x="3" y="27">7</tspan>
        <tspan x="3" y="30">8</tspan>
        <tspan x="3" y="33">9</tspan>
        <tspan x="3" y="36">10</tspan>
        <tspan x="3" y="39">11</tspan>
        <tspan x="3" y="42">12</tspan>
        <tspan x="3" y="45">13</tspan>
        <tspan x="3" y="48">14</tspan>
        <tspan x="3" y="51">15</tspan>
      </text>
      {/* Vertical separator */}
      <line x1="8" y1="5" x2="8" y2="55" stroke="#21262D" strokeWidth="0.15" />
      {/* Code-styled name display */}
      <text x="10" y="9" fontFamily="'Space Grotesk', monospace" fontSize="1.2" fill="#FF7B72">const </text>
      <text x="18" y="9" fontFamily="'Space Grotesk', monospace" fontSize="1.2" fill="#79C0FF">person</text>
      <text x="27" y="9" fontFamily="'Space Grotesk', monospace" fontSize="1.2" fill="#C9D1D9"> = {'{'}</text>
      {/* Name in large styled text */}
      <text
        x="12"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#E6EDF3"
      >
        {data.nameJa}
      </text>
      <text
        x="12"
        y="26"
        fontFamily="'Space Grotesk', monospace"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.2"
        fill="#79C0FF"
      >
        {data.nameEn}
      </text>
      <text x="10" y="33" fontFamily="'Space Grotesk', monospace" fontSize="1.2" fill="#8B949E">
        {'  // '}{data.titleJa}
      </text>
      <text x="10" y="39" fontFamily="'Space Grotesk', monospace" fontSize="1.2" fill="#8B949E">
        {'  // '}{data.companyJa}
      </text>
      <text x="10" y="45" fontFamily="'Space Grotesk', monospace" fontSize="1.2" fill="#C9D1D9">{'};'}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0D1117" />
      <rect x="0" y="0" width="91" height="4" fill="#161B22" />
      <circle cx="4" cy="2" r="0.7" fill="#FF5F56" />
      <circle cx="7" cy="2" r="0.7" fill="#FFBD2E" />
      <circle cx="10" cy="2" r="0.7" fill="#27C93F" />
      <text x="20" y="2.6" fontFamily="'Space Grotesk', monospace" fontSize="1.1" fill="#8B949E">
        contact.json
      </text>
      <line x1="8" y1="5" x2="8" y2="55" stroke="#21262D" strokeWidth="0.15" />
      {/* JSON-style contact info */}
      <text fontFamily="'Space Grotesk', monospace" fontSize="1.2" fill="#484F58">
        <tspan x="3" y="9">1</tspan>
        <tspan x="3" y="12">2</tspan>
        <tspan x="3" y="15">3</tspan>
        <tspan x="3" y="18">4</tspan>
        <tspan x="3" y="21">5</tspan>
        <tspan x="3" y="24">6</tspan>
        <tspan x="3" y="27">7</tspan>
        <tspan x="3" y="30">8</tspan>
        <tspan x="3" y="33">9</tspan>
        <tspan x="3" y="36">10</tspan>
        <tspan x="3" y="39">11</tspan>
      </text>
      <text x="10" y="9" fontFamily="'Space Grotesk', monospace" fontSize="1.2" fill="#C9D1D9">{'{'}</text>
      <text x="10" y="12" fontFamily="'Space Grotesk', monospace" fontSize="1.2">
        <tspan fill="#79C0FF">  "company"</tspan><tspan fill="#C9D1D9">: </tspan><tspan fill="#A5D6FF">"{data.companyJa}"</tspan>
      </text>
      <text x="10" y="15" fontFamily="'Space Grotesk', monospace" fontSize="1.2">
        <tspan fill="#79C0FF">  "companyEn"</tspan><tspan fill="#C9D1D9">: </tspan><tspan fill="#A5D6FF">"{data.companyEn}"</tspan>
      </text>
      <text x="10" y="18" fontFamily="'Space Grotesk', monospace" fontSize="1.2">
        <tspan fill="#79C0FF">  "tel"</tspan><tspan fill="#C9D1D9">: </tspan><tspan fill="#A5D6FF">"{data.tel}"</tspan>
      </text>
      <text x="10" y="21" fontFamily="'Space Grotesk', monospace" fontSize="1.2">
        <tspan fill="#79C0FF">  "email"</tspan><tspan fill="#C9D1D9">: </tspan><tspan fill="#A5D6FF">"{data.email}"</tspan>
      </text>
      <text x="10" y="24" fontFamily="'Space Grotesk', monospace" fontSize="1.2">
        <tspan fill="#79C0FF">  "web"</tspan><tspan fill="#C9D1D9">: </tspan><tspan fill="#A5D6FF">"{data.website}"</tspan>
      </text>
      <text x="10" y="27" fontFamily="'Space Grotesk', monospace" fontSize="1.2">
        <tspan fill="#79C0FF">  "zip"</tspan><tspan fill="#C9D1D9">: </tspan><tspan fill="#A5D6FF">"{data.zipCode}"</tspan>
      </text>
      <text x="10" y="30" fontFamily="'Space Grotesk', monospace" fontSize="1.2">
        <tspan fill="#79C0FF">  "address"</tspan><tspan fill="#C9D1D9">: </tspan><tspan fill="#A5D6FF">"{data.addressJa}"</tspan>
      </text>
      <text x="10" y="33" fontFamily="'Space Grotesk', monospace" fontSize="1.2" fill="#C9D1D9">{'}'}</text>
    </g>
  ),
};

// ============================================================
// 5. CLOUD-D (雲端) — Cloud computing, distributed nodes
// Floating node clusters, connection lines, cloud shapes
// ============================================================
const cloudTemplate: TemplateDefinition = {
  id: 'digital-cloud',
  name: 'CLOUD-D',
  nameJa: '雲端',
  category: 'digital',
  designer: 'Cloud Architect',
  description: '分散する知性。クラウドの中を漂うデータの星雲。',
  accentColor: '#00D4FF',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <radialGradient id="digital-cloud-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#00D4FF" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="#0A0E17" />
      {/* Cloud glow */}
      <ellipse cx="70" cy="15" rx="15" ry="10" fill="url(#digital-cloud-glow)" />
      {/* Floating nodes */}
      <circle cx="65" cy="10" r="0.8" fill="#00D4FF" opacity="0.4" />
      <circle cx="72" cy="8" r="0.6" fill="#00D4FF" opacity="0.3" />
      <circle cx="78" cy="12" r="0.7" fill="#00D4FF" opacity="0.35" />
      <circle cx="68" cy="16" r="0.5" fill="#00D4FF" opacity="0.25" />
      <circle cx="75" cy="18" r="0.9" fill="#00D4FF" opacity="0.3" />
      <circle cx="80" cy="8" r="0.4" fill="#00D4FF" opacity="0.2" />
      {/* Node connections */}
      <line x1="65" y1="10" x2="72" y2="8" stroke="#00D4FF" strokeWidth="0.06" opacity="0.2" />
      <line x1="72" y1="8" x2="78" y2="12" stroke="#00D4FF" strokeWidth="0.06" opacity="0.2" />
      <line x1="78" y1="12" x2="75" y2="18" stroke="#00D4FF" strokeWidth="0.06" opacity="0.2" />
      <line x1="68" y1="16" x2="65" y2="10" stroke="#00D4FF" strokeWidth="0.06" opacity="0.2" />
      <line x1="68" y1="16" x2="75" y2="18" stroke="#00D4FF" strokeWidth="0.06" opacity="0.2" />
      <line x1="72" y1="8" x2="80" y2="8" stroke="#00D4FF" strokeWidth="0.06" opacity="0.15" />
      <text
        x="10"
        y="24"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#E0F0FF"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="30"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#00D4FF"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="37"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#4488AA"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#4488AA"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0A0E17" />
      {/* Scattered cloud nodes background */}
      {[{cx: 15, cy: 42}, {cx: 20, cy: 45}, {cx: 25, cy: 40}, {cx: 18, cy: 38}, {cx: 70, cy: 44}, {cx: 75, cy: 41}, {cx: 78, cy: 46}].map((n, i) => (
        <circle key={`digital-cloud-bn-${i}`} cx={n.cx} cy={n.cy} r={0.4 + (i % 3) * 0.2} fill="#00D4FF" opacity={0.1 + (i % 3) * 0.05} />
      ))}
      <text
        x="45.5"
        y="12"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#E0F0FF"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="16"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#00D4FF"
      >
        {data.companyEn}
      </text>
      <line x1="15" y1="20" x2="76" y2="20" stroke="#00D4FF" strokeWidth="0.08" opacity="0.2" />
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#00AACC"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#00AACC"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="34"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#00AACC"
      >
        {data.website}
      </text>
      <line x1="15" y1="38" x2="76" y2="38" stroke="#00D4FF" strokeWidth="0.08" opacity="0.2" />
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#4488AA"
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
        fill="#4488AA"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 6. NODE (節) — Network nodes, graph theory, interconnected
// Connected dots and lines, network topology visualization
// ============================================================
const nodeTemplate: TemplateDefinition = {
  id: 'digital-node',
  name: 'NODE',
  nameJa: '節',
  category: 'digital',
  designer: 'Network Designer',
  description: 'ノードとエッジ。つながりが生み出す知のネットワーク。',
  accentColor: '#00FF41',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0A0E17" />
      {/* Network nodes and edges */}
      {/* Edges first (behind nodes) */}
      <line x1="8" y1="8" x2="25" y2="12" stroke="#00FF41" strokeWidth="0.08" opacity="0.2" />
      <line x1="25" y1="12" x2="40" y2="6" stroke="#00FF41" strokeWidth="0.08" opacity="0.2" />
      <line x1="25" y1="12" x2="30" y2="20" stroke="#00FF41" strokeWidth="0.08" opacity="0.15" />
      <line x1="60" y1="8" x2="75" y2="5" stroke="#00FF41" strokeWidth="0.08" opacity="0.2" />
      <line x1="75" y1="5" x2="85" y2="10" stroke="#00FF41" strokeWidth="0.08" opacity="0.2" />
      <line x1="60" y1="8" x2="65" y2="15" stroke="#00FF41" strokeWidth="0.08" opacity="0.15" />
      <line x1="40" y1="6" x2="60" y2="8" stroke="#00FF41" strokeWidth="0.08" opacity="0.15" />
      {/* Bottom network */}
      <line x1="10" y1="48" x2="28" y2="45" stroke="#00FF41" strokeWidth="0.08" opacity="0.15" />
      <line x1="28" y1="45" x2="45" y2="50" stroke="#00FF41" strokeWidth="0.08" opacity="0.15" />
      <line x1="65" y1="47" x2="80" y2="42" stroke="#00FF41" strokeWidth="0.08" opacity="0.15" />
      <line x1="80" y1="42" x2="88" y2="48" stroke="#00FF41" strokeWidth="0.08" opacity="0.15" />
      {/* Node dots */}
      <circle cx="8" cy="8" r="0.6" fill="#00FF41" opacity="0.5" />
      <circle cx="25" cy="12" r="0.8" fill="#00FF41" opacity="0.6" />
      <circle cx="40" cy="6" r="0.5" fill="#00FF41" opacity="0.4" />
      <circle cx="60" cy="8" r="0.7" fill="#00FF41" opacity="0.5" />
      <circle cx="75" cy="5" r="0.5" fill="#00FF41" opacity="0.4" />
      <circle cx="85" cy="10" r="0.6" fill="#00FF41" opacity="0.4" />
      <circle cx="10" cy="48" r="0.5" fill="#00FF41" opacity="0.3" />
      <circle cx="28" cy="45" r="0.6" fill="#00FF41" opacity="0.3" />
      <circle cx="65" cy="47" r="0.5" fill="#00FF41" opacity="0.3" />
      <circle cx="80" cy="42" r="0.6" fill="#00FF41" opacity="0.3" />
      <text
        x="10"
        y="26"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#E0FFE6"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#00FF41"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="38"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#00AA2A"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0A0E17" />
      {/* Background network */}
      <line x1="5" y1="5" x2="20" y2="10" stroke="#00FF41" strokeWidth="0.06" opacity="0.1" />
      <line x1="20" y1="10" x2="35" y2="5" stroke="#00FF41" strokeWidth="0.06" opacity="0.1" />
      <line x1="55" y1="48" x2="70" y2="45" stroke="#00FF41" strokeWidth="0.06" opacity="0.1" />
      <line x1="70" y1="45" x2="85" y2="50" stroke="#00FF41" strokeWidth="0.06" opacity="0.1" />
      <circle cx="5" cy="5" r="0.4" fill="#00FF41" opacity="0.2" />
      <circle cx="20" cy="10" r="0.5" fill="#00FF41" opacity="0.2" />
      <circle cx="35" cy="5" r="0.4" fill="#00FF41" opacity="0.2" />
      <circle cx="55" cy="48" r="0.4" fill="#00FF41" opacity="0.2" />
      <circle cx="70" cy="45" r="0.5" fill="#00FF41" opacity="0.2" />
      <circle cx="85" cy="50" r="0.4" fill="#00FF41" opacity="0.2" />
      <text
        x="45.5"
        y="13"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#E0FFE6"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="17"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#00FF41"
      >
        {data.companyEn}
      </text>
      <line x1="15" y1="21" x2="76" y2="21" stroke="#00FF41" strokeWidth="0.08" opacity="0.2" />
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#00CC33"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#00CC33"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#00CC33"
      >
        {data.website}
      </text>
      <line x1="15" y1="39" x2="76" y2="39" stroke="#00FF41" strokeWidth="0.08" opacity="0.2" />
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#00AA2A"
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
        fill="#00AA2A"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 7. PIXEL-D (素) — Pixel art, retro-digital, 8-bit blocks
// Blocky pixel grid, low-res aesthetic, CRT feel
// ============================================================
const pixelTemplate: TemplateDefinition = {
  id: 'digital-pixel',
  name: 'PIXEL-D',
  nameJa: '素',
  category: 'digital',
  designer: 'Pixel Artist',
  description: 'ピクセルの原点。8ビットが紡ぐデジタル原始の美。',
  accentColor: '#00FF41',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0A0E17" />
      {/* Pixel grid pattern */}
      {[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54].map((y, i) => (
        <line key={`digital-pixel-gh-${i}`} x1="0" y1={y} x2="91" y2={y} stroke="#111822" strokeWidth="0.05" />
      ))}
      {[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90].map((x, i) => (
        <line key={`digital-pixel-gv-${i}`} x1={x} y1="0" x2={x} y2="55" stroke="#111822" strokeWidth="0.05" />
      ))}
      {/* Random lit pixels as stars */}
      <rect x="4" y="4" width="1.8" height="1.8" fill="#00FF41" opacity="0.15" />
      <rect x="20" y="6" width="1.8" height="1.8" fill="#00FF41" opacity="0.1" />
      <rect x="74" y="8" width="1.8" height="1.8" fill="#00FF41" opacity="0.12" />
      <rect x="80" y="4" width="1.8" height="1.8" fill="#FFB000" opacity="0.1" />
      <rect x="60" y="42" width="1.8" height="1.8" fill="#00FF41" opacity="0.1" />
      <rect x="78" y="46" width="1.8" height="1.8" fill="#00D4FF" opacity="0.1" />
      <rect x="8" y="44" width="1.8" height="1.8" fill="#00FF41" opacity="0.08" />
      <text
        x="10"
        y="24"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="6"
        letterSpacing="0.5"
        fill="#00FF41"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="30"
        fontFamily="'Space Grotesk', monospace"
        fontWeight="500"
        fontSize="2"
        letterSpacing="0.3"
        fill="#00CC33"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="10"
        y="37"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#008822"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#008822"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0A0E17" />
      {/* Pixel grid - lighter */}
      {[0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52].map((y, i) => (
        <line key={`digital-pixel-bh-${i}`} x1="0" y1={y} x2="91" y2={y} stroke="#111822" strokeWidth="0.05" />
      ))}
      {/* Scattered pixels */}
      <rect x="6" y="8" width="1.8" height="1.8" fill="#00FF41" opacity="0.08" />
      <rect x="82" y="44" width="1.8" height="1.8" fill="#00FF41" opacity="0.08" />
      <text
        x="45.5"
        y="13"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="2.2"
        fill="#00FF41"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="17"
        textAnchor="middle"
        fontFamily="'Space Grotesk', monospace"
        fontWeight="400"
        fontSize="1.4"
        fill="#00CC33"
      >
        {data.companyEn}
      </text>
      <line x1="15" y1="21" x2="76" y2="21" stroke="#00FF41" strokeWidth="0.1" opacity="0.2" />
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Space Grotesk', monospace"
        fontWeight="400"
        fontSize="1.4"
        fill="#00CC33"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Space Grotesk', monospace"
        fontWeight="400"
        fontSize="1.4"
        fill="#00CC33"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Space Grotesk', monospace"
        fontWeight="400"
        fontSize="1.4"
        fill="#00CC33"
      >
        {data.website}
      </text>
      <line x1="15" y1="39" x2="76" y2="39" stroke="#00FF41" strokeWidth="0.1" opacity="0.2" />
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#008822"
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
        fill="#008822"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 8. BYTE (位) — Data storage, hex dump, memory blocks
// Hexadecimal display, memory address style, data blocks
// ============================================================
const byteTemplate: TemplateDefinition = {
  id: 'digital-byte',
  name: 'BYTE',
  nameJa: '位',
  category: 'digital',
  designer: 'Systems Engineer',
  description: 'メモリの深層。16進数が刻むデータの記憶。',
  accentColor: '#FFB000',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0A0E17" />
      {/* Hex dump header */}
      <rect x="0" y="0" width="91" height="5" fill="#0F1520" />
      <text x="4" y="3.5" fontFamily="'Space Grotesk', monospace" fontSize="1" fill="#FFB000" opacity="0.5">
        OFFSET  00 01 02 03 04 05 06 07  08 09 0A 0B 0C 0D 0E 0F
      </text>
      {/* Hex data rows */}
      <text fontFamily="'Space Grotesk', monospace" fontSize="0.9" fill="#FFB000" opacity="0.12">
        <tspan x="4" y="8">0x0000  4D 45 49 53 48 49 20 43  41 52 44 20 44 41 54 41</tspan>
        <tspan x="4" y="10.5">0x0010  00 FF 41 0A 0E 17 CC 66  44 8B 5E 3C 1B 3A 5C 5F</tspan>
        <tspan x="4" y="13">0x0020  85 75 C4 A3 5A 00 D4 FF  FF B0 00 00 FF 41 3C 24</tspan>
        <tspan x="4" y="43">0x00E0  54 41 52 4F 20 59 41 4D  41 44 41 00 00 00 00 00</tspan>
        <tspan x="4" y="45.5">0x00F0  6D 65 69 73 68 69 2E 63  6F 2E 6A 70 00 00 00 00</tspan>
        <tspan x="4" y="48">0x0100  30 33 2D 31 32 33 34 2D  35 36 37 38 00 00 00 00</tspan>
        <tspan x="4" y="50.5">0x0110  31 35 30 2D 30 30 30 31  00 00 00 00 00 00 00 FF</tspan>
      </text>
      {/* Name overlay */}
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#FFB000"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Space Grotesk', monospace"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.2"
        fill="#CC8800"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#997700"
      >
        {data.titleJa}
      </text>
      <text
        x="45.5"
        y="40"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#997700"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0A0E17" />
      <rect x="0" y="0" width="91" height="5" fill="#0F1520" />
      <text x="4" y="3.5" fontFamily="'Space Grotesk', monospace" fontSize="1" fill="#FFB000" opacity="0.5">
        CONTACT DATA BLOCK — READ ONLY
      </text>
      {/* Memory address styled contact */}
      <text x="8" y="12" fontFamily="'Space Grotesk', monospace" fontSize="1.2" fill="#FFB000" opacity="0.4">
        0x00:
      </text>
      <text
        x="20"
        y="12"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2"
        fill="#FFB000"
      >
        {data.companyJa}
      </text>
      <text x="8" y="16" fontFamily="'Space Grotesk', monospace" fontSize="1.2" fill="#FFB000" opacity="0.4">
        0x01:
      </text>
      <text x="20" y="16" fontFamily="'Space Grotesk', monospace" fontSize="1.3" fill="#CC8800">
        {data.companyEn}
      </text>
      <line x1="8" y1="20" x2="83" y2="20" stroke="#FFB000" strokeWidth="0.08" opacity="0.2" />
      <text x="8" y="25" fontFamily="'Space Grotesk', monospace" fontSize="1.2" fill="#FFB000" opacity="0.4">
        0x10:
      </text>
      <text x="20" y="25" fontFamily="'Space Grotesk', monospace" fontSize="1.3" fill="#CC8800">
        TEL {data.tel}
      </text>
      <text x="8" y="29" fontFamily="'Space Grotesk', monospace" fontSize="1.2" fill="#FFB000" opacity="0.4">
        0x20:
      </text>
      <text x="20" y="29" fontFamily="'Space Grotesk', monospace" fontSize="1.3" fill="#CC8800">
        {data.email}
      </text>
      <text x="8" y="33" fontFamily="'Space Grotesk', monospace" fontSize="1.2" fill="#FFB000" opacity="0.4">
        0x30:
      </text>
      <text x="20" y="33" fontFamily="'Space Grotesk', monospace" fontSize="1.3" fill="#CC8800">
        {data.website}
      </text>
      <line x1="8" y1="37" x2="83" y2="37" stroke="#FFB000" strokeWidth="0.08" opacity="0.2" />
      <text x="8" y="42" fontFamily="'Space Grotesk', monospace" fontSize="1.2" fill="#FFB000" opacity="0.4">
        0x40:
      </text>
      <text x="20" y="42" fontFamily="'Noto Sans JP', sans-serif" fontSize="1.2" fill="#997700">
        〒{data.zipCode}
      </text>
      <text x="8" y="46" fontFamily="'Space Grotesk', monospace" fontSize="1.2" fill="#FFB000" opacity="0.4">
        0x50:
      </text>
      <text x="20" y="46" fontFamily="'Noto Sans JP', sans-serif" fontSize="1.2" fill="#997700">
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 9. STREAM (配信) — Data streaming, live feed, flowing data
// Horizontal data flow lines, streaming indicators
// ============================================================
const streamTemplate: TemplateDefinition = {
  id: 'digital-stream',
  name: 'STREAM',
  nameJa: '配信',
  category: 'digital',
  designer: 'Stream Engineer',
  description: 'データの奔流。途切れることのない情報の川。',
  accentColor: '#00D4FF',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0A0E17" />
      {/* Streaming data lines */}
      <line x1="0" y1="8" x2="30" y2="8" stroke="#00D4FF" strokeWidth="0.3" opacity="0.08" />
      <line x1="5" y1="10" x2="45" y2="10" stroke="#00D4FF" strokeWidth="0.2" opacity="0.06" />
      <line x1="0" y1="12" x2="20" y2="12" stroke="#00D4FF" strokeWidth="0.15" opacity="0.1" />
      <line x1="60" y1="8" x2="91" y2="8" stroke="#00D4FF" strokeWidth="0.2" opacity="0.06" />
      <line x1="70" y1="10" x2="91" y2="10" stroke="#00D4FF" strokeWidth="0.3" opacity="0.08" />
      {/* Streaming arrows */}
      <line x1="0" y1="44" x2="25" y2="44" stroke="#00D4FF" strokeWidth="0.15" opacity="0.06" />
      <line x1="0" y1="46" x2="35" y2="46" stroke="#00D4FF" strokeWidth="0.2" opacity="0.08" />
      <line x1="0" y1="48" x2="15" y2="48" stroke="#00D4FF" strokeWidth="0.15" opacity="0.05" />
      <line x1="55" y1="44" x2="91" y2="44" stroke="#00D4FF" strokeWidth="0.2" opacity="0.06" />
      <line x1="65" y1="46" x2="91" y2="46" stroke="#00D4FF" strokeWidth="0.15" opacity="0.08" />
      <line x1="75" y1="48" x2="91" y2="48" stroke="#00D4FF" strokeWidth="0.2" opacity="0.06" />
      {/* Live indicator */}
      <circle cx="84" cy="5" r="0.8" fill="#FF3333" opacity="0.7" />
      <text x="78" y="5.6" fontFamily="'Space Grotesk', monospace" fontSize="1" fill="#FF3333" opacity="0.5">
        LIVE
      </text>
      <text
        x="10"
        y="24"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#E0F8FF"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="30"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#00D4FF"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="37"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#0088AA"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#0088AA"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0A0E17" />
      {/* Streaming lines background */}
      <line x1="0" y1="5" x2="20" y2="5" stroke="#00D4FF" strokeWidth="0.2" opacity="0.05" />
      <line x1="0" y1="7" x2="35" y2="7" stroke="#00D4FF" strokeWidth="0.15" opacity="0.04" />
      <line x1="55" y1="50" x2="91" y2="50" stroke="#00D4FF" strokeWidth="0.2" opacity="0.05" />
      <line x1="65" y1="48" x2="91" y2="48" stroke="#00D4FF" strokeWidth="0.15" opacity="0.04" />
      <text
        x="45.5"
        y="12"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#E0F8FF"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="16"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#00D4FF"
      >
        {data.companyEn}
      </text>
      <line x1="15" y1="20" x2="76" y2="20" stroke="#00D4FF" strokeWidth="0.08" opacity="0.2" />
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#00AACC"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#00AACC"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="34"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#00AACC"
      >
        {data.website}
      </text>
      <line x1="15" y1="38" x2="76" y2="38" stroke="#00D4FF" strokeWidth="0.08" opacity="0.2" />
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#0088AA"
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
        fill="#0088AA"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 10. ALGO (算) — Algorithm visualization, flowchart, logic
// Decision diamonds, process boxes, flowchart connectors
// ============================================================
const algoTemplate: TemplateDefinition = {
  id: 'digital-algo',
  name: 'ALGO',
  nameJa: '算',
  category: 'digital',
  designer: 'Algorithm Designer',
  description: 'アルゴリズムの論理美。フローチャートが導く解。',
  accentColor: '#00FF41',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0A0E17" />
      {/* Flowchart elements in background */}
      {/* Decision diamond */}
      <polygon points="75,8 80,12 75,16 70,12" fill="none" stroke="#00FF41" strokeWidth="0.12" opacity="0.2" />
      {/* Process boxes */}
      <rect x="68" y="20" width="14" height="5" fill="none" stroke="#00FF41" strokeWidth="0.12" opacity="0.2" rx="0.3" />
      <rect x="68" y="30" width="14" height="5" fill="none" stroke="#00FF41" strokeWidth="0.12" opacity="0.15" rx="0.3" />
      {/* Start/end oval */}
      <ellipse cx="75" cy="42" rx="7" ry="3" fill="none" stroke="#00FF41" strokeWidth="0.12" opacity="0.15" />
      {/* Connectors */}
      <line x1="75" y1="16" x2="75" y2="20" stroke="#00FF41" strokeWidth="0.08" opacity="0.15" />
      <line x1="75" y1="25" x2="75" y2="30" stroke="#00FF41" strokeWidth="0.08" opacity="0.15" />
      <line x1="75" y1="35" x2="75" y2="39" stroke="#00FF41" strokeWidth="0.08" opacity="0.15" />
      {/* Arrow heads */}
      <polygon points="74,20 75,19 76,20" fill="#00FF41" opacity="0.15" />
      <polygon points="74,30 75,29 76,30" fill="#00FF41" opacity="0.15" />
      <text
        x="10"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#E0FFE6"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="28"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#00FF41"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#00AA2A"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#00AA2A"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0A0E17" />
      {/* Background flowchart elements */}
      <polygon points="12,5 16,8 12,11 8,8" fill="none" stroke="#00FF41" strokeWidth="0.08" opacity="0.1" />
      <rect x="6" y="13" width="12" height="4" fill="none" stroke="#00FF41" strokeWidth="0.08" opacity="0.1" rx="0.3" />
      <line x1="12" y1="11" x2="12" y2="13" stroke="#00FF41" strokeWidth="0.06" opacity="0.1" />
      <ellipse cx="80" cy="45" rx="5" ry="2.5" fill="none" stroke="#00FF41" strokeWidth="0.08" opacity="0.08" />
      <text
        x="45.5"
        y="12"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#E0FFE6"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="16"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#00FF41"
      >
        {data.companyEn}
      </text>
      <line x1="15" y1="20" x2="76" y2="20" stroke="#00FF41" strokeWidth="0.08" opacity="0.2" />
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#00CC33"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#00CC33"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="34"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#00CC33"
      >
        {data.website}
      </text>
      <line x1="15" y1="38" x2="76" y2="38" stroke="#00FF41" strokeWidth="0.08" opacity="0.2" />
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#00AA2A"
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
        fill="#00AA2A"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

export const digitalTemplates: TemplateDefinition[] = [
  binaryTemplate,
  vectorTemplate,
  renderTemplate,
  codeTemplate,
  cloudTemplate,
  nodeTemplate,
  pixelTemplate,
  byteTemplate,
  streamTemplate,
  algoTemplate,
];
