import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. STAMP (印) — Rubber stamp/hanko inspired
// Circular stamp mark, slightly imperfect edges, kraft colors
// ============================================================
const stampTemplate: TemplateDefinition = {
  id: 'handcraft-stamp',
  name: 'STAMP',
  nameJa: '印',
  category: 'handcraft',
  designer: 'Handcraft Series',
  description: '朱肉の印。丸い印鑑がぽんと押された温かみ。',
  accentColor: '#C75C2E',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5EDE3" />
      {/* Stamp circle - slightly imperfect */}
      <circle cx="70" cy="20" r="10" fill="none" stroke="#C75C2E" strokeWidth="0.6" opacity="0.8" />
      <circle cx="70" cy="20" r="9.5" fill="none" stroke="#C75C2E" strokeWidth="0.15" opacity="0.4" />
      <circle cx="70" cy="20" r="7" fill="none" stroke="#C75C2E" strokeWidth="0.12" opacity="0.6" />
      <text
        x="70"
        y="18.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="3.5"
        fill="#C75C2E"
        opacity="0.85"
      >
        {data.nameJa.charAt(0)}
      </text>
      <text
        x="70"
        y="23"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="1.8"
        fill="#C75C2E"
        opacity="0.7"
      >
        印
      </text>
      <text
        x="10"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="0.4"
        fill="#5C3D2E"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="28"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.2"
        fill="#8B6F5E"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#A68B7B"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#B5A090"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5EDE3" />
      {/* Small corner stamp */}
      <circle cx="80" cy="9" r="3.5" fill="none" stroke="#C75C2E" strokeWidth="0.35" opacity="0.5" />
      <text
        x="80"
        y="10.2"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="2.5"
        fill="#C75C2E"
        opacity="0.5"
      >
        印
      </text>
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#5C3D2E"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#A68B7B"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="22" x2="55" y2="22" stroke="#C9B8A8" strokeWidth="0.15" />
      <text
        x="10"
        y="28"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#7A6252"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#7A6252"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#7A6252"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#B5A090"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 2. WASHI (和紙) — Japanese handmade paper
// Textured washi paper feel, fibrous edges, natural tones
// ============================================================
const washiTemplate: TemplateDefinition = {
  id: 'handcraft-washi',
  name: 'WASHI',
  nameJa: '和紙',
  category: 'handcraft',
  designer: 'Handcraft Series',
  description: '手漉き和紙。繊維の風合いが優しく触れる指に伝わる。',
  accentColor: '#274472',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F8F4ED" />
      {/* Washi fiber texture */}
      <line x1="3" y1="2" x2="15" y2="3.5" stroke="#E8DFD0" strokeWidth="0.15" />
      <line x1="20" y1="1" x2="38" y2="2.8" stroke="#E8DFD0" strokeWidth="0.12" />
      <line x1="50" y1="1.5" x2="70" y2="3" stroke="#E8DFD0" strokeWidth="0.18" />
      <line x1="5" y1="51" x2="25" y2="53" stroke="#E8DFD0" strokeWidth="0.15" />
      <line x1="35" y1="52" x2="60" y2="53.5" stroke="#E8DFD0" strokeWidth="0.12" />
      <line x1="65" y1="51.5" x2="88" y2="53" stroke="#E8DFD0" strokeWidth="0.18" />
      <line x1="2" y1="15" x2="4" y2="40" stroke="#E8DFD0" strokeWidth="0.12" />
      <line x1="87" y1="10" x2="89" y2="45" stroke="#E8DFD0" strokeWidth="0.15" />
      <text
        x="45.5"
        y="20"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="6.5"
        letterSpacing="1.5"
        fill="#274472"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.5"
        fill="#5C7EA0"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#8BA4BD"
      >
        {data.titleJa}
      </text>
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#A0B5C8"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F8F4ED" />
      <line x1="5" y1="1.5" x2="22" y2="3" stroke="#E8DFD0" strokeWidth="0.15" />
      <line x1="40" y1="1" x2="65" y2="2.5" stroke="#E8DFD0" strokeWidth="0.12" />
      <line x1="10" y1="52" x2="35" y2="53.5" stroke="#E8DFD0" strokeWidth="0.15" />
      <line x1="55" y1="52.5" x2="85" y2="54" stroke="#E8DFD0" strokeWidth="0.12" />
      <text
        x="45.5"
        y="12"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        letterSpacing="0.5"
        fill="#274472"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="17"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8BA4BD"
      >
        {data.companyEn}
      </text>
      <line x1="25" y1="21" x2="66" y2="21" stroke="#C9BFAF" strokeWidth="0.12" />
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#4A6A8A"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#4A6A8A"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#4A6A8A"
      >
        {data.website}
      </text>
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#A0B5C8"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 3. STITCH (縫) — Sewing stitch pattern
// Dashed stitch borders, thread-like decorative lines
// ============================================================
const stitchTemplate: TemplateDefinition = {
  id: 'handcraft-stitch',
  name: 'STITCH',
  nameJa: '縫',
  category: 'handcraft',
  designer: 'Handcraft Series',
  description: '針と糸。点線の縫い目が温かな手仕事の記憶を運ぶ。',
  accentColor: '#8B4513',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FBF7F0" />
      {/* Stitch border */}
      <rect
        x="5" y="5" width="81" height="45"
        fill="none" stroke="#B5896A" strokeWidth="0.2"
        strokeDasharray="1.5,1" strokeLinecap="round"
      />
      {/* Cross stitch corners */}
      <line x1="4" y1="4" x2="7" y2="7" stroke="#B5896A" strokeWidth="0.15" />
      <line x1="7" y1="4" x2="4" y2="7" stroke="#B5896A" strokeWidth="0.15" />
      <line x1="84" y1="4" x2="87" y2="7" stroke="#B5896A" strokeWidth="0.15" />
      <line x1="87" y1="4" x2="84" y2="7" stroke="#B5896A" strokeWidth="0.15" />
      <line x1="4" y1="48" x2="7" y2="51" stroke="#B5896A" strokeWidth="0.15" />
      <line x1="7" y1="48" x2="4" y2="51" stroke="#B5896A" strokeWidth="0.15" />
      <line x1="84" y1="48" x2="87" y2="51" stroke="#B5896A" strokeWidth="0.15" />
      <line x1="87" y1="48" x2="84" y2="51" stroke="#B5896A" strokeWidth="0.15" />
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.6"
        fill="#5C3D2E"
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
        letterSpacing="0.3"
        fill="#8B6F5E"
      >
        {data.nameEn}
      </text>
      {/* Decorative stitch line */}
      <line x1="25" y1="32" x2="66" y2="32" stroke="#B5896A" strokeWidth="0.15" strokeDasharray="1,0.8" strokeLinecap="round" />
      <text
        x="45.5"
        y="38"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#A68B7B"
      >
        {data.titleJa}
      </text>
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#B5A090"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FBF7F0" />
      <rect
        x="5" y="5" width="81" height="45"
        fill="none" stroke="#B5896A" strokeWidth="0.2"
        strokeDasharray="1.5,1" strokeLinecap="round"
      />
      <line x1="4" y1="4" x2="7" y2="7" stroke="#B5896A" strokeWidth="0.15" />
      <line x1="7" y1="4" x2="4" y2="7" stroke="#B5896A" strokeWidth="0.15" />
      <line x1="84" y1="4" x2="87" y2="7" stroke="#B5896A" strokeWidth="0.15" />
      <line x1="87" y1="4" x2="84" y2="7" stroke="#B5896A" strokeWidth="0.15" />
      <line x1="4" y1="48" x2="7" y2="51" stroke="#B5896A" strokeWidth="0.15" />
      <line x1="7" y1="48" x2="4" y2="51" stroke="#B5896A" strokeWidth="0.15" />
      <line x1="84" y1="48" x2="87" y2="51" stroke="#B5896A" strokeWidth="0.15" />
      <line x1="87" y1="48" x2="84" y2="51" stroke="#B5896A" strokeWidth="0.15" />
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#5C3D2E"
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
        fill="#A68B7B"
      >
        {data.companyEn}
      </text>
      <line x1="25" y1="22" x2="66" y2="22" stroke="#B5896A" strokeWidth="0.12" strokeDasharray="1,0.8" strokeLinecap="round" />
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#7A6252"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#7A6252"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#7A6252"
      >
        {data.website}
      </text>
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#B5A090"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 4. PRESS (刷) — Letterpress printed feel
// Debossed look, deep ink impression, slightly uneven type
// ============================================================
const pressTemplate: TemplateDefinition = {
  id: 'handcraft-press',
  name: 'PRESS',
  nameJa: '刷',
  category: 'handcraft',
  designer: 'Handcraft Series',
  description: '活版印刷の凹み。文字が紙に深く刻まれた質感。',
  accentColor: '#1A1A2E',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E8" />
      {/* Impression shadow for debossed effect */}
      <text
        x="10.15"
        y="23.15"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="6.5"
        letterSpacing="0.3"
        fill="#E8E0D3"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="23"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="6.5"
        letterSpacing="0.3"
        fill="#1A1A2E"
      >
        {data.nameJa}
      </text>
      <text
        x="10.1"
        y="29.6"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="2"
        letterSpacing="0.3"
        fill="#E8E0D3"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="10"
        y="29.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="2"
        letterSpacing="0.3"
        fill="#1A1A2E"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <line x1="10" y1="34" x2="50" y2="34" stroke="#1A1A2E" strokeWidth="0.2" />
      <text
        x="10"
        y="39.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#4A4A5E"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="46"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#6A6A7E"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E8" />
      <text
        x="81.1"
        y="14.1"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        fill="#E8E0D3"
      >
        {data.companyJa}
      </text>
      <text
        x="81"
        y="14"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        fill="#1A1A2E"
      >
        {data.companyJa}
      </text>
      <text
        x="81"
        y="18.5"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#6A6A7E"
      >
        {data.companyEn}
      </text>
      <line x1="45" y1="22" x2="81" y2="22" stroke="#1A1A2E" strokeWidth="0.15" />
      <text
        x="81"
        y="28"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#3A3A4E"
      >
        {data.tel}
      </text>
      <text
        x="81"
        y="32"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#3A3A4E"
      >
        {data.email}
      </text>
      <text
        x="81"
        y="36"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#3A3A4E"
      >
        {data.website}
      </text>
      <text
        x="81"
        y="44"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#8A8A9E"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 5. WOODCUT (版) — Woodblock print inspired
// Bold graphic shapes, woodgrain texture lines, earthy palette
// ============================================================
const woodcutTemplate: TemplateDefinition = {
  id: 'handcraft-woodcut',
  name: 'WOODCUT',
  nameJa: '版',
  category: 'handcraft',
  designer: 'Handcraft Series',
  description: '木版画。彫刻刀で削り出された力強い線と面。',
  accentColor: '#4A2C17',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F0E6D6" />
      {/* Woodcut block background */}
      <rect x="5" y="5" width="40" height="30" fill="#4A2C17" />
      {/* Woodgrain texture in the block */}
      <line x1="7" y1="8" x2="43" y2="8" stroke="#5C3D2E" strokeWidth="0.2" />
      <line x1="6" y1="14" x2="44" y2="14" stroke="#5C3D2E" strokeWidth="0.15" />
      <line x1="7" y1="20" x2="43" y2="20.5" stroke="#5C3D2E" strokeWidth="0.2" />
      <line x1="6" y1="26" x2="44" y2="26" stroke="#5C3D2E" strokeWidth="0.15" />
      <line x1="7" y1="32" x2="43" y2="31.5" stroke="#5C3D2E" strokeWidth="0.2" />
      <text
        x="25"
        y="18"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="5.5"
        fill="#F0E6D6"
      >
        {data.nameJa}
      </text>
      <text
        x="25"
        y="24"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.6"
        fill="#D4C0A8"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="10"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#6B4D38"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="49"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#8B6F5E"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F0E6D6" />
      <rect x="46" y="20" width="40" height="30" fill="#4A2C17" />
      <line x1="48" y1="23" x2="84" y2="23" stroke="#5C3D2E" strokeWidth="0.2" />
      <line x1="47" y1="29" x2="85" y2="29" stroke="#5C3D2E" strokeWidth="0.15" />
      <line x1="48" y1="35" x2="84" y2="35.5" stroke="#5C3D2E" strokeWidth="0.2" />
      <line x1="47" y1="41" x2="85" y2="41" stroke="#5C3D2E" strokeWidth="0.15" />
      <line x1="48" y1="47" x2="84" y2="46.5" stroke="#5C3D2E" strokeWidth="0.2" />
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#4A2C17"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8B6F5E"
      >
        {data.companyEn}
      </text>
      <text
        x="10"
        y="27"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#6B4D38"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="31"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#6B4D38"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="35"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#6B4D38"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#A68B7B"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 6. LINO (彫) — Linocut print style
// Bold carved-out shapes, high contrast, rough edges
// ============================================================
const linoTemplate: TemplateDefinition = {
  id: 'handcraft-lino',
  name: 'LINO',
  nameJa: '彫',
  category: 'handcraft',
  designer: 'Handcraft Series',
  description: 'リノカット。彫り出した面がインクで力強く紙に転写される。',
  accentColor: '#274472',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#EDE8DF" />
      {/* Linocut decorative band */}
      <rect x="0" y="0" width="91" height="16" fill="#274472" />
      {/* Carved-out lines in the band */}
      <line x1="5" y1="3" x2="86" y2="3" stroke="#EDE8DF" strokeWidth="0.3" />
      <line x1="5" y1="13" x2="86" y2="13" stroke="#EDE8DF" strokeWidth="0.3" />
      <line x1="5" y1="3" x2="5" y2="13" stroke="#EDE8DF" strokeWidth="0.3" />
      <line x1="86" y1="3" x2="86" y2="13" stroke="#EDE8DF" strokeWidth="0.3" />
      <text
        x="45.5"
        y="10.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="5"
        fill="#EDE8DF"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="25"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#274472"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <line x1="10" y1="29" x2="60" y2="29" stroke="#274472" strokeWidth="0.2" />
      <text
        x="10"
        y="35"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#4A6A8A"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#5C7EA0"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#EDE8DF" />
      <rect x="0" y="39" width="91" height="16" fill="#274472" />
      <line x1="5" y1="42" x2="86" y2="42" stroke="#EDE8DF" strokeWidth="0.3" />
      <line x1="5" y1="52" x2="86" y2="52" stroke="#EDE8DF" strokeWidth="0.3" />
      <line x1="5" y1="42" x2="5" y2="52" stroke="#EDE8DF" strokeWidth="0.3" />
      <line x1="86" y1="42" x2="86" y2="52" stroke="#EDE8DF" strokeWidth="0.3" />
      <text
        x="45.5"
        y="49.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#C0D0E0"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
      <text
        x="10"
        y="12"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        fill="#274472"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="16.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5C7EA0"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="20" x2="60" y2="20" stroke="#274472" strokeWidth="0.15" />
      <text
        x="10"
        y="26"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#3A5A7A"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="30"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#3A5A7A"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="34"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#3A5A7A"
      >
        {data.website}
      </text>
    </g>
  ),
};

// ============================================================
// 7. BRUSH (筆) — Calligraphy brush stroke
// Expressive brush mark, sumi ink aesthetic
// ============================================================
const brushTemplate: TemplateDefinition = {
  id: 'handcraft-brush',
  name: 'BRUSH',
  nameJa: '筆',
  category: 'handcraft',
  designer: 'Handcraft Series',
  description: '筆の一閃。墨の飛沫と筆跡が紙面に生命を吹き込む。',
  accentColor: '#2D2D2D',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FAF5EC" />
      {/* Brush stroke - thick sweeping path */}
      <path
        d="M5,18 Q15,14 30,16 Q50,19 65,15 Q78,12 88,16"
        fill="none" stroke="#2D2D2D" strokeWidth="3" strokeLinecap="round" opacity="0.12"
      />
      <path
        d="M5,18 Q15,14 30,16 Q50,19 65,15 Q78,12 88,16"
        fill="none" stroke="#2D2D2D" strokeWidth="0.8" strokeLinecap="round" opacity="0.3"
      />
      {/* Ink splatter dots */}
      <circle cx="82" cy="12" r="0.4" fill="#2D2D2D" opacity="0.15" />
      <circle cx="85" cy="14" r="0.25" fill="#2D2D2D" opacity="0.12" />
      <circle cx="80" cy="10" r="0.3" fill="#2D2D2D" opacity="0.1" />
      <text
        x="12"
        y="30"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="7"
        letterSpacing="0.5"
        fill="#2D2D2D"
      >
        {data.nameJa}
      </text>
      <text
        x="12"
        y="36.5"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.3"
        fontStyle="italic"
        fill="#6B5E50"
      >
        {data.nameEn}
      </text>
      <text
        x="12"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#9B8E80"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FAF5EC" />
      <path
        d="M3,42 Q20,38 40,40 Q60,43 80,39 Q85,38 90,40"
        fill="none" stroke="#2D2D2D" strokeWidth="2" strokeLinecap="round" opacity="0.08"
      />
      <text
        x="79"
        y="12"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        fill="#2D2D2D"
      >
        {data.companyJa}
      </text>
      <text
        x="79"
        y="16.5"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#9B8E80"
      >
        {data.companyEn}
      </text>
      <text
        x="79"
        y="24"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#5C4F42"
      >
        {data.tel}
      </text>
      <text
        x="79"
        y="28"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#5C4F42"
      >
        {data.email}
      </text>
      <text
        x="79"
        y="32"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#5C4F42"
      >
        {data.website}
      </text>
      <text
        x="79"
        y="45"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#B5A898"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 8. WEAVE (織) — Woven textile pattern
// Cross-hatch weave pattern, fabric texture
// ============================================================
const weaveTemplate: TemplateDefinition = {
  id: 'handcraft-weave',
  name: 'WEAVE',
  nameJa: '織',
  category: 'handcraft',
  designer: 'Handcraft Series',
  description: '織物の経緯。縦糸と横糸が交差して生まれる布目の美。',
  accentColor: '#7B6B5E',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F2EBE0" />
      {/* Weave pattern in corner */}
      <g opacity="0.12">
        {/* Vertical threads */}
        <line x1="65" y1="3" x2="65" y2="20" stroke="#7B6B5E" strokeWidth="0.3" />
        <line x1="68" y1="3" x2="68" y2="20" stroke="#7B6B5E" strokeWidth="0.3" />
        <line x1="71" y1="3" x2="71" y2="20" stroke="#7B6B5E" strokeWidth="0.3" />
        <line x1="74" y1="3" x2="74" y2="20" stroke="#7B6B5E" strokeWidth="0.3" />
        <line x1="77" y1="3" x2="77" y2="20" stroke="#7B6B5E" strokeWidth="0.3" />
        <line x1="80" y1="3" x2="80" y2="20" stroke="#7B6B5E" strokeWidth="0.3" />
        <line x1="83" y1="3" x2="83" y2="20" stroke="#7B6B5E" strokeWidth="0.3" />
        <line x1="86" y1="3" x2="86" y2="20" stroke="#7B6B5E" strokeWidth="0.3" />
        {/* Horizontal threads */}
        <line x1="63" y1="5" x2="88" y2="5" stroke="#8B7B6E" strokeWidth="0.3" />
        <line x1="63" y1="8" x2="88" y2="8" stroke="#8B7B6E" strokeWidth="0.3" />
        <line x1="63" y1="11" x2="88" y2="11" stroke="#8B7B6E" strokeWidth="0.3" />
        <line x1="63" y1="14" x2="88" y2="14" stroke="#8B7B6E" strokeWidth="0.3" />
        <line x1="63" y1="17" x2="88" y2="17" stroke="#8B7B6E" strokeWidth="0.3" />
      </g>
      <text
        x="10"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#4A3D32"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="26"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.25"
        fill="#7B6B5E"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="34"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#9B8B7E"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="41"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#AE9E91"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="48"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#C0B0A3"
      >
        {data.email}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F2EBE0" />
      {/* Weave pattern in bottom-left */}
      <g opacity="0.12">
        <line x1="5" y1="35" x2="5" y2="52" stroke="#7B6B5E" strokeWidth="0.3" />
        <line x1="8" y1="35" x2="8" y2="52" stroke="#7B6B5E" strokeWidth="0.3" />
        <line x1="11" y1="35" x2="11" y2="52" stroke="#7B6B5E" strokeWidth="0.3" />
        <line x1="14" y1="35" x2="14" y2="52" stroke="#7B6B5E" strokeWidth="0.3" />
        <line x1="17" y1="35" x2="17" y2="52" stroke="#7B6B5E" strokeWidth="0.3" />
        <line x1="20" y1="35" x2="20" y2="52" stroke="#7B6B5E" strokeWidth="0.3" />
        <line x1="23" y1="35" x2="23" y2="52" stroke="#7B6B5E" strokeWidth="0.3" />
        <line x1="26" y1="35" x2="26" y2="52" stroke="#7B6B5E" strokeWidth="0.3" />
        <line x1="3" y1="37" x2="28" y2="37" stroke="#8B7B6E" strokeWidth="0.3" />
        <line x1="3" y1="40" x2="28" y2="40" stroke="#8B7B6E" strokeWidth="0.3" />
        <line x1="3" y1="43" x2="28" y2="43" stroke="#8B7B6E" strokeWidth="0.3" />
        <line x1="3" y1="46" x2="28" y2="46" stroke="#8B7B6E" strokeWidth="0.3" />
        <line x1="3" y1="49" x2="28" y2="49" stroke="#8B7B6E" strokeWidth="0.3" />
      </g>
      <text
        x="81"
        y="12"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#4A3D32"
      >
        {data.companyJa}
      </text>
      <text
        x="81"
        y="16.5"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#9B8B7E"
      >
        {data.companyEn}
      </text>
      <line x1="40" y1="20" x2="81" y2="20" stroke="#C0B0A3" strokeWidth="0.12" />
      <text
        x="81"
        y="26"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#6B5E52"
      >
        {data.tel}
      </text>
      <text
        x="81"
        y="30"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#6B5E52"
      >
        {data.email}
      </text>
      <text
        x="81"
        y="34"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#6B5E52"
      >
        {data.website}
      </text>
      <text
        x="81"
        y="44"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#AE9E91"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 9. CLAY (土) — Earthy terra cotta
// Warm earth tones, organic rounded shapes, pottery feel
// ============================================================
const clayTemplate: TemplateDefinition = {
  id: 'handcraft-clay',
  name: 'CLAY',
  nameJa: '土',
  category: 'handcraft',
  designer: 'Handcraft Series',
  description: '土の温もり。テラコッタ色が大地の記憶を呼び覚ます。',
  accentColor: '#C17950',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5E6D8" />
      {/* Clay/pottery organic shapes */}
      <circle cx="75" cy="27.5" r="16" fill="#E8D5C4" />
      <circle cx="75" cy="27.5" r="11" fill="#DFC8B4" />
      <circle cx="75" cy="27.5" r="6" fill="#D4B8A0" />
      <circle cx="75" cy="27.5" r="2" fill="#C17950" opacity="0.3" />
      <text
        x="10"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="0.4"
        fill="#8B4B2E"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="26"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.2"
        fill="#B07050"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="34"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#C09070"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#D0A090"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5E6D8" />
      <circle cx="16" cy="27.5" r="14" fill="#E8D5C4" />
      <circle cx="16" cy="27.5" r="9" fill="#DFC8B4" />
      <circle cx="16" cy="27.5" r="4.5" fill="#D4B8A0" />
      <text
        x="81"
        y="12"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#8B4B2E"
      >
        {data.companyJa}
      </text>
      <text
        x="81"
        y="16"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#C09070"
      >
        {data.companyEn}
      </text>
      <text
        x="81"
        y="24"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#9B6040"
      >
        {data.tel}
      </text>
      <text
        x="81"
        y="28"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#9B6040"
      >
        {data.email}
      </text>
      <text
        x="81"
        y="32"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#9B6040"
      >
        {data.website}
      </text>
      <text
        x="81"
        y="44"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#C09070"
      >
        〒{data.zipCode}
      </text>
      <text
        x="81"
        y="47.5"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#C09070"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 10. KNOT (結) — Decorative knot/rope pattern
// Celtic/Japanese knot inspired, intertwining lines, olive and cream
// ============================================================
const knotTemplate: TemplateDefinition = {
  id: 'handcraft-knot',
  name: 'KNOT',
  nameJa: '結',
  category: 'handcraft',
  designer: 'Handcraft Series',
  description: '結び目。紐が絡み合い、縁を結ぶ吉祥の文様。',
  accentColor: '#5C6E4E',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E5" />
      {/* Decorative knot pattern */}
      <g opacity="0.2">
        <path d="M72,8 Q78,8 78,14 Q78,20 72,20 Q66,20 66,14 Q66,8 72,8 Z" fill="none" stroke="#5C6E4E" strokeWidth="0.5" />
        <path d="M72,11 Q75,11 75,14 Q75,17 72,17 Q69,17 69,14 Q69,11 72,11 Z" fill="none" stroke="#5C6E4E" strokeWidth="0.4" />
        <line x1="66" y1="14" x2="60" y2="14" stroke="#5C6E4E" strokeWidth="0.3" />
        <line x1="78" y1="14" x2="84" y2="14" stroke="#5C6E4E" strokeWidth="0.3" />
        <line x1="72" y1="8" x2="72" y2="3" stroke="#5C6E4E" strokeWidth="0.3" />
        <line x1="72" y1="20" x2="72" y2="25" stroke="#5C6E4E" strokeWidth="0.3" />
      </g>
      <text
        x="10"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="6"
        letterSpacing="0.5"
        fill="#3A4A30"
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
        fill="#6B7E5E"
      >
        {data.nameEn}
      </text>
      <line x1="10" y1="32" x2="55" y2="32" stroke="#B5C0A8" strokeWidth="0.15" />
      <text
        x="10"
        y="38"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#8B9E78"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="45"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#A0B090"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E5" />
      {/* Decorative knot pattern bottom-right */}
      <g opacity="0.15">
        <path d="M75,40 Q81,40 81,46 Q81,52 75,52 Q69,52 69,46 Q69,40 75,40 Z" fill="none" stroke="#5C6E4E" strokeWidth="0.5" />
        <path d="M75,43 Q78,43 78,46 Q78,49 75,49 Q72,49 72,46 Q72,43 75,43 Z" fill="none" stroke="#5C6E4E" strokeWidth="0.4" />
      </g>
      <text
        x="10"
        y="12"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#3A4A30"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="16.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8B9E78"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="20" x2="60" y2="20" stroke="#B5C0A8" strokeWidth="0.12" />
      <text
        x="10"
        y="26"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#5C6E4E"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="30"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#5C6E4E"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="34"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#5C6E4E"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#A0B090"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

export const handcraftTemplates: TemplateDefinition[] = [
  stampTemplate,
  washiTemplate,
  stitchTemplate,
  pressTemplate,
  woodcutTemplate,
  linoTemplate,
  brushTemplate,
  weaveTemplate,
  clayTemplate,
  knotTemplate,
];
