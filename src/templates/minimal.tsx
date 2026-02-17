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
      <rect width="91" height="55" fill="#ffffff" />
      <text
        x="45.5"
        y="25"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="100"
        fontSize="6"
        letterSpacing="1.2"
        fill="#1a1a1a"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="2"
        letterSpacing="0.5"
        fill="#aaaaaa"
      >
        {data.nameEn.toUpperCase()}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      <text
        x="83"
        y="35"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2"
        fill="#666666"
      >
        {data.companyJa}
      </text>
      <text
        x="83"
        y="39"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#999999"
      >
        {data.titleJa}
      </text>
      <text
        x="83"
        y="44"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#999999"
      >
        {data.email}
      </text>
      <text
        x="83"
        y="47.5"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#999999"
      >
        {data.tel}
      </text>
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
      <rect width="91" height="55" fill="#ffffff" />
      <text
        x="84"
        y="22"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="5.5"
        letterSpacing="0.6"
        fill="#1a1a1a"
      >
        {data.nameJa}
      </text>
      <text
        x="84"
        y="28"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="1.8"
        letterSpacing="0.4"
        fill="#888888"
      >
        {data.nameEn}
      </text>
      <text
        x="84"
        y="34"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#bbbbbb"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      <text
        x="84"
        y="14"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2"
        fill="#555555"
      >
        {data.companyJa}
      </text>
      <text
        x="84"
        y="18"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        letterSpacing="0.2"
        fill="#888888"
      >
        {data.companyEn}
      </text>
      <line x1="60" y1="22" x2="84" y2="22" stroke="#dddddd" strokeWidth="0.15" />
      <text
        x="84"
        y="27"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#999999"
      >
        {data.tel}
      </text>
      <text
        x="84"
        y="30.5"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#999999"
      >
        {data.email}
      </text>
      <text
        x="84"
        y="34"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#999999"
      >
        {data.website}
      </text>
      <text
        x="84"
        y="40"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.3"
        fill="#bbbbbb"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
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
      <rect width="91" height="55" fill="#ffffff" />
      <line x1="7" y1="7" x2="84" y2="7" stroke="#1a1a1a" strokeWidth="0.12" />
      <line x1="7" y1="48" x2="84" y2="48" stroke="#1a1a1a" strokeWidth="0.12" />
      <line x1="7" y1="7" x2="7" y2="48" stroke="#1a1a1a" strokeWidth="0.12" />
      <line x1="84" y1="7" x2="84" y2="48" stroke="#1a1a1a" strokeWidth="0.12" />
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5"
        letterSpacing="0.8"
        fill="#1a1a1a"
      >
        {data.nameJa}
      </text>
      <line x1="34" y1="28" x2="57" y2="28" stroke="#1a1a1a" strokeWidth="0.1" />
      <text
        x="45.5"
        y="33"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.35"
        fill="#1a1a1a"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="38"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#777777"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      <line x1="7" y1="7" x2="84" y2="7" stroke="#1a1a1a" strokeWidth="0.12" />
      <line x1="7" y1="48" x2="84" y2="48" stroke="#1a1a1a" strokeWidth="0.12" />
      <text
        x="45.5"
        y="15"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        letterSpacing="0.4"
        fill="#1a1a1a"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="19"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        letterSpacing="0.3"
        fill="#777777"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <line x1="7" y1="23" x2="84" y2="23" stroke="#1a1a1a" strokeWidth="0.08" />
      <text
        x="45.5"
        y="29"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#555555"
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
        fill="#555555"
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
        fill="#555555"
      >
        {data.website}
      </text>
      <line x1="7" y1="40" x2="84" y2="40" stroke="#1a1a1a" strokeWidth="0.08" />
      <text
        x="45.5"
        y="45"
        textAnchor="middle"
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
// 4. MIST (霞) — Jasper Morrison inspired
// Ghost-light typography (#cccccc text on white)
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
      <rect width="91" height="55" fill="#ffffff" />
      <text
        x="10"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="7"
        letterSpacing="0.5"
        fill="#cccccc"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="27"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2.2"
        letterSpacing="0.3"
        fill="#dddddd"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="35"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.8"
        fill="#dddddd"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.8"
        fill="#dddddd"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      <text
        x="10"
        y="16"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2.2"
        fill="#cccccc"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="20.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        letterSpacing="0.2"
        fill="#dddddd"
      >
        {data.companyEn}
      </text>
      <text
        x="10"
        y="28"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#cccccc"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#cccccc"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#cccccc"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.3"
        fill="#dddddd"
      >
        〒{data.zipCode}
      </text>
      <text
        x="10"
        y="46.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.3"
        fill="#dddddd"
      >
        {data.addressJa}
      </text>
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
      <rect width="91" height="55" fill="#ffffff" />
      <text
        x="8"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.3"
        fill="#1a1a1a"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="25.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.25"
        fill="#666666"
      >
        {data.nameEn}
      </text>
      <line x1="8" y1="30" x2="83" y2="30" stroke="#1a1a1a" strokeWidth="0.2" />
      <text
        x="8"
        y="36"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      <text
        x="8"
        y="40"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#888888"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="44"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#888888"
      >
        {data.email}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      <text
        x="8"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        letterSpacing="0.3"
        fill="#1a1a1a"
      >
        {data.companyJa}
      </text>
      <text
        x="8"
        y="26.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        letterSpacing="0.2"
        fill="#888888"
      >
        {data.companyEn}
      </text>
      <line x1="8" y1="30" x2="83" y2="30" stroke="#1a1a1a" strokeWidth="0.2" />
      <text
        x="8"
        y="35.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#888888"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="39"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#888888"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="42.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#888888"
      >
        {data.website}
      </text>
      <text
        x="8"
        y="48"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.3"
        fill="#aaaaaa"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
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
      <rect width="91" height="55" fill="#fafafa" />
      <circle cx="8" cy="10" r="1" fill="#1a1a1a" />
      <text
        x="8"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="4.5"
        letterSpacing="0.2"
        fill="#2d2d2d"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="27"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.7"
        letterSpacing="0.15"
        fill="#777777"
      >
        {data.nameEn}
      </text>
      <text
        x="8"
        y="32"
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
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#888888"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="45.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#888888"
      >
        {data.email}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#fafafa" />
      <circle cx="83" cy="10" r="1" fill="#1a1a1a" />
      <text
        x="83"
        y="22"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        letterSpacing="0.3"
        fill="#2d2d2d"
      >
        {data.companyJa}
      </text>
      <text
        x="83"
        y="26"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        letterSpacing="0.15"
        fill="#888888"
      >
        {data.companyEn}
      </text>
      <text
        x="83"
        y="33"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#888888"
      >
        {data.tel}
      </text>
      <text
        x="83"
        y="36.5"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#888888"
      >
        {data.email}
      </text>
      <text
        x="83"
        y="40"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#888888"
      >
        {data.website}
      </text>
      <text
        x="83"
        y="47"
        textAnchor="end"
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
      <rect width="91" height="55" fill="#ffffff" />
      <text
        x="87"
        y="35"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5"
        letterSpacing="0.2"
        fill="#1a1a1a"
      >
        {data.nameJa}
      </text>
      <text
        x="87"
        y="40"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.2"
        fill="#666666"
      >
        {data.nameEn}
      </text>
      <text
        x="87"
        y="45"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#999999"
      >
        {data.titleJa}
      </text>
      <text
        x="87"
        y="51"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        letterSpacing="0.1"
        fill="#bbbbbb"
      >
        {data.companyEn}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      <text
        x="87"
        y="28"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2"
        fill="#1a1a1a"
      >
        {data.companyJa}
      </text>
      <text
        x="87"
        y="35"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#666666"
      >
        {data.tel}
      </text>
      <text
        x="87"
        y="38.5"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#666666"
      >
        {data.email}
      </text>
      <text
        x="87"
        y="42"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#666666"
      >
        {data.website}
      </text>
      <text
        x="87"
        y="48"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#aaaaaa"
      >
        〒{data.zipCode}
      </text>
      <text
        x="87"
        y="51"
        textAnchor="end"
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
      <rect width="91" height="55" fill="#ffffff" />
      <text
        x="7"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="4"
        letterSpacing="0.2"
        fill="#3d3d3d"
      >
        {data.nameJa}
      </text>
      <text
        x="7"
        y="46.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        letterSpacing="0.15"
        fill="#888888"
      >
        {data.nameEn}
      </text>
      <text
        x="7"
        y="50.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#aaaaaa"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      <text
        x="7"
        y="36"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        fill="#3d3d3d"
      >
        {data.companyJa}
      </text>
      <text
        x="7"
        y="39.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#aaaaaa"
      >
        {data.companyEn}
      </text>
      <text
        x="7"
        y="44"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#888888"
      >
        {data.tel}
      </text>
      <text
        x="7"
        y="47"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#888888"
      >
        {data.email}
      </text>
      <text
        x="7"
        y="50"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#888888"
      >
        {data.website}
      </text>
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
      <rect width="91" height="55" fill="#ffffff" />
      <text
        x="45.5"
        y="20"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="100"
        fontSize="7"
        letterSpacing="1.5"
        fill="#333333"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="100"
        fontSize="2"
        letterSpacing="0.8"
        fill="#999999"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="37"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="100"
        fontSize="1.6"
        letterSpacing="0.4"
        fill="#bbbbbb"
      >
        {data.titleJa}
      </text>
      <text
        x="45.5"
        y="42"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="100"
        fontSize="1.6"
        letterSpacing="0.4"
        fill="#bbbbbb"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      <text
        x="45.5"
        y="15"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="100"
        fontSize="2.5"
        letterSpacing="0.6"
        fill="#555555"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="20"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="100"
        fontSize="1.5"
        letterSpacing="0.5"
        fill="#aaaaaa"
      >
        {data.companyEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="29"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="100"
        fontSize="1.4"
        letterSpacing="0.3"
        fill="#888888"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="33"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="100"
        fontSize="1.4"
        letterSpacing="0.3"
        fill="#888888"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="37"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="100"
        fontSize="1.4"
        letterSpacing="0.3"
        fill="#888888"
      >
        {data.website}
      </text>
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="100"
        fontSize="1.2"
        letterSpacing="0.2"
        fill="#cccccc"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
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
      <rect width="91" height="55" fill="#ffffff" />
      <text
        x="14"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="5.5"
        letterSpacing="0.4"
        fill="#444444"
      >
        {data.nameJa}
      </text>
      <text
        x="62"
        y="30"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="1.7"
        letterSpacing="0.3"
        fill="#aaaaaa"
      >
        {data.nameEn}
      </text>
      <text
        x="30"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="100"
        fontSize="1.5"
        fill="#cccccc"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      <text
        x="55"
        y="12"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="2"
        fill="#666666"
      >
        {data.companyJa}
      </text>
      <text
        x="12"
        y="25"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#999999"
      >
        {data.companyEn}
      </text>
      <text
        x="50"
        y="33"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#999999"
      >
        {data.tel}
      </text>
      <text
        x="20"
        y="39"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#999999"
      >
        {data.email}
      </text>
      <text
        x="58"
        y="45"
        fontFamily="'Inter', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#999999"
      >
        {data.website}
      </text>
      <text
        x="15"
        y="51"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="100"
        fontSize="1.1"
        fill="#cccccc"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
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
