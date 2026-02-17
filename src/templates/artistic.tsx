import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. BAUHAUS (造) — Walter Gropius inspired
// Primary colors, geometric shapes, functional typography
// ============================================================
const bauhausTemplate: TemplateDefinition = {
  id: 'artistic-bauhaus',
  name: 'BAUHAUS',
  nameJa: '造',
  category: 'artistic',
  designer: 'Walter Gropius',
  description: '原色と幾何学形態。バウハウスの機能美が宿る名刺。',
  accentColor: '#E60012',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E8" />
      {/* Primary color geometric blocks */}
      <rect x="0" y="0" width="28" height="18" fill="#E60012" />
      <rect x="28" y="0" width="14" height="18" fill="#FFD700" />
      <circle cx="78" cy="12" r="9" fill="#0057B8" />
      <rect x="0" y="18" width="6" height="37" fill="#1A1A1A" />
      {/* Horizontal rule */}
      <line x1="10" y1="32" x2="68" y2="32" stroke="#1A1A1A" strokeWidth="0.6" />
      {/* Name */}
      <text
        x="10"
        y="28"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="6.5"
        fill="#1A1A1A"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="38"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="2.2"
        letterSpacing="0.4"
        fill="#1A1A1A"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="10"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        fill="#555555"
      >
        {data.titleJa}
      </text>
      {/* Small yellow triangle accent */}
      <polygon points="75,45 83,45 79,39" fill="#FFD700" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E8" />
      {/* Geometric composition */}
      <rect x="0" y="0" width="91" height="8" fill="#1A1A1A" />
      <rect x="0" y="8" width="30" height="4" fill="#E60012" />
      <rect x="30" y="8" width="20" height="4" fill="#FFD700" />
      <rect x="50" y="8" width="41" height="4" fill="#0057B8" />
      {/* Company */}
      <text
        x="8"
        y="5.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="3"
        fill="#FFFFFF"
      >
        {data.companyJa}
      </text>
      <text
        x="83"
        y="5.5"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="1.8"
        fill="#FFD700"
      >
        {data.companyEn}
      </text>
      {/* Contact info */}
      <text
        x="8"
        y="22"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.6"
        fill="#1A1A1A"
      >
        TEL
      </text>
      <text
        x="20"
        y="22"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#333333"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="26"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.6"
        fill="#1A1A1A"
      >
        MAIL
      </text>
      <text
        x="20"
        y="26"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#333333"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="30"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.6"
        fill="#1A1A1A"
      >
        WEB
      </text>
      <text
        x="20"
        y="30"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#333333"
      >
        {data.website}
      </text>
      {/* Address */}
      <line x1="8" y1="34" x2="83" y2="34" stroke="#1A1A1A" strokeWidth="0.3" />
      <text
        x="8"
        y="39"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#555555"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
      {/* Bottom geometric accent */}
      <rect x="0" y="47" width="91" height="8" fill="#1A1A1A" />
      <circle cx="45.5" cy="51" r="2.5" fill="#E60012" />
    </g>
  ),
};

// ============================================================
// 2. DADA (壊) — Hannah Höch inspired
// Collage-like overlapping rectangles, tilted text, chaos
// ============================================================
const dadaTemplate: TemplateDefinition = {
  id: 'artistic-dada',
  name: 'DADA',
  nameJa: '壊',
  category: 'artistic',
  designer: 'Hannah Höch',
  description: '秩序の破壊。コラージュのように重なる情報の断片。',
  accentColor: '#D4380D',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F2EDE4" />
      {/* Collage-like overlapping rectangles */}
      <rect x="5" y="3" width="25" height="14" fill="#D4380D" opacity="0.85" />
      <rect x="18" y="10" width="30" height="10" fill="#2B2B2B" opacity="0.7" />
      <rect x="55" y="2" width="18" height="22" fill="#C4A35A" opacity="0.6" />
      <rect x="62" y="30" width="24" height="15" fill="#3D6B50" opacity="0.5" />
      <rect x="3" y="38" width="20" height="12" fill="#8B4513" opacity="0.4" />
      {/* Tilted name */}
      <text
        x="45"
        y="30"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="8"
        fill="#1A1A1A"
        transform="rotate(-3, 45, 30)"
      >
        {data.nameJa}
      </text>
      {/* English name at different angle */}
      <text
        x="30"
        y="42"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="2.5"
        letterSpacing="0.3"
        fill="#D4380D"
        transform="rotate(2, 30, 42)"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Small tilted title */}
      <text
        x="12"
        y="8"
        fontFamily="'Inter', sans-serif"
        fontWeight="800"
        fontSize="1.6"
        fill="#FFFFFF"
        transform="rotate(-1, 12, 8)"
      >
        DADA
      </text>
      <text
        x="50"
        y="50"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#666666"
        transform="rotate(1.5, 50, 50)"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F2EDE4" />
      {/* Chaotic overlapping rectangles */}
      <rect x="40" y="0" width="20" height="55" fill="#2B2B2B" opacity="0.08" />
      <rect x="10" y="5" width="35" height="8" fill="#D4380D" opacity="0.7" transform="rotate(-1, 27, 9)" />
      <rect x="50" y="25" width="30" height="10" fill="#C4A35A" opacity="0.5" transform="rotate(2, 65, 30)" />
      <rect x="5" y="35" width="22" height="8" fill="#3D6B50" opacity="0.4" transform="rotate(-2, 16, 39)" />
      {/* Company tilted */}
      <text
        x="14"
        y="11"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="3"
        fill="#FFFFFF"
        transform="rotate(-1, 14, 11)"
      >
        {data.companyJa}
      </text>
      {/* Contact info at various angles */}
      <text
        x="12"
        y="24"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.8"
        fill="#1A1A1A"
        transform="rotate(1, 12, 24)"
      >
        {data.tel}
      </text>
      <text
        x="55"
        y="32"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.7"
        fill="#1A1A1A"
        transform="rotate(2, 55, 32)"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="40"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#3D6B50"
        transform="rotate(-2, 10, 40)"
      >
        {data.website}
      </text>
      <text
        x="20"
        y="50"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#888888"
        transform="rotate(0.5, 20, 50)"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 3. POP (弾) — Andy Warhol inspired
// Bold flat colors, thick outlines, comic-like energy
// ============================================================
const popTemplate: TemplateDefinition = {
  id: 'artistic-pop',
  name: 'POP',
  nameJa: '弾',
  category: 'artistic',
  designer: 'Andy Warhol',
  description: '大胆な色彩とポップな輪郭。ウォーホル的エネルギー。',
  accentColor: '#FF1493',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFE135" />
      {/* Bold background shapes */}
      <circle cx="75" cy="15" r="12" fill="#FF1493" />
      <circle cx="75" cy="15" r="8" fill="#FFE135" />
      <circle cx="75" cy="15" r="5" fill="#FF1493" />
      {/* Thick border */}
      <rect x="2" y="2" width="87" height="51" fill="none" stroke="#1A1A1A" strokeWidth="1.5" />
      {/* Name with outline effect */}
      <text
        x="8"
        y="24"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="9"
        fill="#1A1A1A"
        stroke="#1A1A1A"
        strokeWidth="0.3"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="32"
        fontFamily="'Inter', sans-serif"
        fontWeight="800"
        fontSize="3"
        letterSpacing="0.5"
        fill="#FF1493"
        stroke="#1A1A1A"
        strokeWidth="0.15"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Title in bold bar */}
      <rect x="6" y="36" width="50" height="5" fill="#1A1A1A" />
      <text
        x="8"
        y="39.8"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="2.2"
        fill="#FFE135"
      >
        {data.titleJa}
      </text>
      {/* Pop dots */}
      <circle cx="10" cy="48" r="1.5" fill="#FF1493" stroke="#1A1A1A" strokeWidth="0.3" />
      <circle cx="16" cy="48" r="1.5" fill="#00BFFF" stroke="#1A1A1A" strokeWidth="0.3" />
      <circle cx="22" cy="48" r="1.5" fill="#32CD32" stroke="#1A1A1A" strokeWidth="0.3" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FF1493" />
      <rect x="2" y="2" width="87" height="51" fill="none" stroke="#1A1A1A" strokeWidth="1.5" />
      {/* Company in bold */}
      <rect x="6" y="5" width="79" height="9" fill="#FFE135" stroke="#1A1A1A" strokeWidth="0.5" />
      <text
        x="45.5"
        y="11.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="4"
        fill="#1A1A1A"
      >
        {data.companyJa}
      </text>
      {/* Contact info with pop styling */}
      <text
        x="10"
        y="22"
        fontFamily="'Inter', sans-serif"
        fontWeight="800"
        fontSize="1.8"
        fill="#FFE135"
      >
        TEL
      </text>
      <text
        x="22"
        y="22"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="1.8"
        fill="#FFFFFF"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="27"
        fontFamily="'Inter', sans-serif"
        fontWeight="800"
        fontSize="1.8"
        fill="#FFE135"
      >
        MAIL
      </text>
      <text
        x="22"
        y="27"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="1.8"
        fill="#FFFFFF"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Inter', sans-serif"
        fontWeight="800"
        fontSize="1.8"
        fill="#FFE135"
      >
        WEB
      </text>
      <text
        x="22"
        y="32"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="1.8"
        fill="#FFFFFF"
      >
        {data.website}
      </text>
      {/* Address bar */}
      <rect x="6" y="37" width="79" height="5" fill="#1A1A1A" />
      <text
        x="45.5"
        y="40.8"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="1.5"
        fill="#FFE135"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
      {/* Bottom pop dots row */}
      <circle cx="30" cy="48" r="2" fill="#FFE135" stroke="#1A1A1A" strokeWidth="0.4" />
      <circle cx="45.5" cy="48" r="2" fill="#00BFFF" stroke="#1A1A1A" strokeWidth="0.4" />
      <circle cx="61" cy="48" r="2" fill="#32CD32" stroke="#1A1A1A" strokeWidth="0.4" />
    </g>
  ),
};

// ============================================================
// 4. ABSTRACT (象) — Kandinsky inspired
// Abstract colored shapes as decoration
// ============================================================
const abstractTemplate: TemplateDefinition = {
  id: 'artistic-abstract',
  name: 'ABSTRACT',
  nameJa: '象',
  category: 'artistic',
  designer: 'Kandinsky',
  description: '色と形の交響曲。カンディンスキーの抽象世界。',
  accentColor: '#1B4D8E',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FDF8EF" />
      {/* Kandinsky-style abstract shapes */}
      <circle cx="18" cy="14" r="8" fill="#1B4D8E" opacity="0.8" />
      <circle cx="22" cy="18" r="4" fill="#D4380D" opacity="0.7" />
      <polygon points="70,5 80,20 60,20" fill="#FFD700" opacity="0.75" />
      <circle cx="76" cy="42" r="6" fill="none" stroke="#1B4D8E" strokeWidth="0.6" />
      <circle cx="76" cy="42" r="3" fill="#D4380D" opacity="0.5" />
      <line x1="10" y1="28" x2="35" y2="22" stroke="#1A1A1A" strokeWidth="0.3" />
      <line x1="60" y1="25" x2="80" y2="30" stroke="#D4380D" strokeWidth="0.3" />
      {/* Small decorative triangle */}
      <polygon points="5,45 12,45 8.5,39" fill="#FFD700" opacity="0.6" />
      {/* Name */}
      <text
        x="20"
        y="36"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        fill="#1A1A1A"
      >
        {data.nameJa}
      </text>
      <text
        x="20"
        y="42"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.3"
        fill="#555555"
      >
        {data.nameEn}
      </text>
      <text
        x="20"
        y="47"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#888888"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FDF8EF" />
      {/* Abstract composition */}
      <circle cx="80" cy="10" r="7" fill="#1B4D8E" opacity="0.15" />
      <polygon points="5,50 15,50 10,42" fill="#FFD700" opacity="0.4" />
      <circle cx="75" cy="45" r="5" fill="#D4380D" opacity="0.12" />
      <line x1="0" y1="15" x2="91" y2="15" stroke="#1B4D8E" strokeWidth="0.15" />
      {/* Company */}
      <text
        x="10"
        y="12"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="2.8"
        fill="#1A1A1A"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="12"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#888888"
        dy="4"
      >
        {data.companyEn}
      </text>
      {/* Contact info */}
      <circle cx="10" cy="25" r="0.8" fill="#D4380D" />
      <text
        x="14"
        y="26"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#333333"
      >
        {data.tel}
      </text>
      <circle cx="10" cy="30" r="0.8" fill="#1B4D8E" />
      <text
        x="14"
        y="31"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#333333"
      >
        {data.email}
      </text>
      <circle cx="10" cy="35" r="0.8" fill="#FFD700" />
      <text
        x="14"
        y="36"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#333333"
      >
        {data.website}
      </text>
      {/* Address */}
      <line x1="10" y1="40" x2="80" y2="40" stroke="#1B4D8E" strokeWidth="0.15" />
      <text
        x="10"
        y="45"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#888888"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 5. CONSTRUCTIVIST (構) — El Lissitzky inspired
// Red/black/white, diagonal bold bars, revolutionary energy
// ============================================================
const constructivistTemplate: TemplateDefinition = {
  id: 'artistic-constructivist',
  name: 'CONSTRUCTIVIST',
  nameJa: '構',
  category: 'artistic',
  designer: 'El Lissitzky',
  description: '赤と黒の革命。斜めの力強い構成が空間を支配する。',
  accentColor: '#CC0000',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F0EADC" />
      {/* Bold diagonal bars */}
      <rect x="-5" y="20" width="101" height="6" fill="#CC0000" transform="rotate(-12, 45.5, 27.5)" />
      <rect x="-5" y="34" width="101" height="4" fill="#1A1A1A" transform="rotate(-12, 45.5, 27.5)" />
      {/* Red wedge/triangle */}
      <polygon points="0,0 30,0 0,25" fill="#CC0000" opacity="0.9" />
      {/* Black geometric block */}
      <rect x="70" y="38" width="21" height="17" fill="#1A1A1A" />
      {/* Name - bold, impactful */}
      <text
        x="8"
        y="40"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="900"
        fontSize="7"
        fill="#1A1A1A"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="47"
        fontFamily="'Inter', sans-serif"
        fontWeight="800"
        fontSize="2.5"
        letterSpacing="0.5"
        fill="#CC0000"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Title in white on black block */}
      <text
        x="80"
        y="48"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="1.4"
        fill="#FFFFFF"
      >
        {data.titleJa}
      </text>
      {/* Small red circle accent */}
      <circle cx="5" cy="8" r="2" fill="#FFFFFF" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F0EADC" />
      {/* Diagonal bar */}
      <rect x="-5" y="6" width="101" height="5" fill="#CC0000" transform="rotate(-8, 45.5, 8.5)" />
      <rect x="-5" y="12" width="101" height="2" fill="#1A1A1A" transform="rotate(-8, 45.5, 13)" />
      {/* Black header block */}
      <rect x="0" y="0" width="40" height="8" fill="#1A1A1A" />
      <text
        x="4"
        y="5.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="2.8"
        fill="#FFFFFF"
      >
        {data.companyJa}
      </text>
      {/* Contact info - stark, militant layout */}
      <text
        x="8"
        y="26"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="1.5"
        fill="#CC0000"
      >
        TEL
      </text>
      <text
        x="18"
        y="26"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.6"
        fill="#1A1A1A"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="30"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="1.5"
        fill="#CC0000"
      >
        MAIL
      </text>
      <text
        x="18"
        y="30"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.6"
        fill="#1A1A1A"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="34"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="1.5"
        fill="#CC0000"
      >
        WEB
      </text>
      <text
        x="18"
        y="34"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.6"
        fill="#1A1A1A"
      >
        {data.website}
      </text>
      {/* Bottom red bar with address */}
      <rect x="0" y="43" width="91" height="12" fill="#1A1A1A" />
      <rect x="0" y="43" width="91" height="3" fill="#CC0000" />
      <text
        x="8"
        y="51"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#FFFFFF"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 6. MEMPHIS (遊) — Ettore Sottsass inspired
// Memphis Design squiggles, pastels, playful geometry
// ============================================================
const memphisTemplate: TemplateDefinition = {
  id: 'artistic-memphis',
  name: 'MEMPHIS',
  nameJa: '遊',
  category: 'artistic',
  designer: 'Ettore Sottsass',
  description: '遊び心のメンフィス。パステルと幾何学の祝祭。',
  accentColor: '#FF6B9D',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFF5E6" />
      {/* Memphis geometric shapes */}
      <circle cx="78" cy="12" r="8" fill="#FF6B9D" />
      <circle cx="78" cy="12" r="4" fill="#FFF5E6" />
      <rect x="3" y="3" width="10" height="10" fill="#7FD8BE" transform="rotate(15, 8, 8)" />
      <polygon points="65,42 75,48 55,48" fill="#B088F9" opacity="0.8" />
      {/* Squiggly line using simple path */}
      <path
        d="M5,30 Q12,25 19,30 Q26,35 33,30 Q40,25 47,30"
        fill="none"
        stroke="#FFD166"
        strokeWidth="0.8"
      />
      <path
        d="M60,38 Q65,34 70,38 Q75,42 80,38 Q85,34 90,38"
        fill="none"
        stroke="#FF6B9D"
        strokeWidth="0.6"
      />
      {/* Dotted pattern */}
      <circle cx="82" cy="28" r="0.6" fill="#B088F9" />
      <circle cx="85" cy="31" r="0.6" fill="#B088F9" />
      <circle cx="82" cy="34" r="0.6" fill="#B088F9" />
      <circle cx="85" cy="37" r="0.6" fill="#B088F9" />
      {/* Small zigzag */}
      <path d="M3,42 L6,38 L9,42 L12,38 L15,42" fill="none" stroke="#7FD8BE" strokeWidth="0.5" />
      {/* Name */}
      <text
        x="10"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="6.5"
        fill="#333333"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="37"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="2.2"
        letterSpacing="0.3"
        fill="#FF6B9D"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="48"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#888888"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFF5E6" />
      {/* Memphis shapes */}
      <rect x="70" y="2" width="8" height="8" fill="#FFD166" transform="rotate(20, 74, 6)" />
      <circle cx="12" cy="48" r="5" fill="#B088F9" opacity="0.4" />
      <polygon points="78,40 85,48 71,48" fill="#7FD8BE" opacity="0.5" />
      {/* Squiggle */}
      <path
        d="M2,20 Q8,16 14,20 Q20,24 26,20"
        fill="none"
        stroke="#FF6B9D"
        strokeWidth="0.5"
      />
      {/* Company */}
      <rect x="8" y="5" width="55" height="7" fill="#FF6B9D" rx="1" />
      <text
        x="35"
        y="10.2"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="3"
        fill="#FFFFFF"
      >
        {data.companyJa}
      </text>
      {/* Contact info */}
      <circle cx="10" cy="21.5" r="1" fill="#FFD166" />
      <text
        x="14"
        y="22.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.6"
        fill="#333333"
      >
        {data.tel}
      </text>
      <circle cx="10" cy="27" r="1" fill="#7FD8BE" />
      <text
        x="14"
        y="28"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.6"
        fill="#333333"
      >
        {data.email}
      </text>
      <circle cx="10" cy="32.5" r="1" fill="#B088F9" />
      <text
        x="14"
        y="33.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.6"
        fill="#333333"
      >
        {data.website}
      </text>
      {/* Address with zigzag separator */}
      <path d="M8,38 L12,35 L16,38 L20,35 L24,38 L28,35 L32,38" fill="none" stroke="#FFD166" strokeWidth="0.4" />
      <text
        x="8"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#888888"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 7. NOUVEAU (麗) — Alphonse Mucha inspired
// Art Nouveau curves, organic border, warm tones
// ============================================================
const nouveauTemplate: TemplateDefinition = {
  id: 'artistic-nouveau',
  name: 'NOUVEAU',
  nameJa: '麗',
  category: 'artistic',
  designer: 'Alphonse Mucha',
  description: '優美な曲線。アール・ヌーヴォーの有機的装飾美。',
  accentColor: '#8B6914',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="nouveau-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5E6C8" />
          <stop offset="100%" stopColor="#EDD9A3" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#nouveau-grad)" />
      {/* Art Nouveau organic border */}
      <path
        d="M5,5 Q20,2 45.5,3 Q70,2 86,5 Q89,15 88,27.5 Q89,40 86,50 Q70,53 45.5,52 Q20,53 5,50 Q2,40 3,27.5 Q2,15 5,5 Z"
        fill="none"
        stroke="#8B6914"
        strokeWidth="0.5"
      />
      {/* Inner decorative frame */}
      <path
        d="M8,8 Q20,6 45.5,6.5 Q70,6 83,8 Q85,15 84.5,27.5 Q85,40 83,47 Q70,49 45.5,48.5 Q20,49 8,47 Q6,40 6.5,27.5 Q6,15 8,8 Z"
        fill="none"
        stroke="#8B6914"
        strokeWidth="0.2"
      />
      {/* Corner floral curves */}
      <path d="M5,5 Q10,10 8,18 Q6,12 5,5" fill="#8B6914" opacity="0.3" />
      <path d="M86,5 Q81,10 83,18 Q85,12 86,5" fill="#8B6914" opacity="0.3" />
      <path d="M5,50 Q10,45 8,37 Q6,43 5,50" fill="#8B6914" opacity="0.3" />
      <path d="M86,50 Q81,45 83,37 Q85,43 86,50" fill="#8B6914" opacity="0.3" />
      {/* Decorative vine at top */}
      <path
        d="M25,8 Q30,5 35,8 Q40,11 45.5,8 Q51,5 56,8 Q61,11 66,8"
        fill="none"
        stroke="#8B6914"
        strokeWidth="0.3"
      />
      {/* Name */}
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="0.8"
        fill="#5C4A1E"
      >
        {data.nameJa}
      </text>
      {/* Ornamental divider */}
      <path d="M30,28 Q37,26 45.5,28 Q53,26 61,28" fill="none" stroke="#8B6914" strokeWidth="0.3" />
      <circle cx="45.5" cy="28" r="0.6" fill="#8B6914" />
      <text
        x="45.5"
        y="34"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.4"
        fill="#8B6914"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="40"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#A08030"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="nouveau-grad-back" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5E6C8" />
          <stop offset="100%" stopColor="#EDD9A3" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#nouveau-grad-back)" />
      {/* Simplified organic border */}
      <path
        d="M5,5 Q20,2 45.5,3 Q70,2 86,5 Q89,15 88,27.5 Q89,40 86,50 Q70,53 45.5,52 Q20,53 5,50 Q2,40 3,27.5 Q2,15 5,5 Z"
        fill="none"
        stroke="#8B6914"
        strokeWidth="0.4"
      />
      {/* Decorative top curve */}
      <path
        d="M30,6 Q37,4 45.5,6 Q53,4 61,6"
        fill="none"
        stroke="#8B6914"
        strokeWidth="0.25"
      />
      {/* Company */}
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        letterSpacing="0.5"
        fill="#5C4A1E"
      >
        {data.companyJa}
      </text>
      <path d="M25,16 Q35,14.5 45.5,16 Q55,14.5 66,16" fill="none" stroke="#8B6914" strokeWidth="0.2" />
      <circle cx="45.5" cy="16" r="0.4" fill="#8B6914" />
      {/* Contact */}
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#5C4A1E"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#5C4A1E"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#5C4A1E"
      >
        {data.website}
      </text>
      {/* Divider */}
      <path d="M30,35 Q37,33.5 45.5,35 Q53,33.5 61,35" fill="none" stroke="#8B6914" strokeWidth="0.2" />
      {/* Address */}
      <text
        x="45.5"
        y="40"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#A08030"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="43.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#A08030"
      >
        {data.addressJa}
      </text>
      {/* Bottom vine */}
      <path
        d="M30,49 Q37,47 45.5,49 Q53,47 61,49"
        fill="none"
        stroke="#8B6914"
        strokeWidth="0.25"
      />
    </g>
  ),
};

// ============================================================
// 8. DE STIJL (風) — Mondrian inspired
// Strict horizontal/vertical lines, grid cells, primary colors
// ============================================================
const destijlTemplate: TemplateDefinition = {
  id: 'artistic-destijl',
  name: 'DE STIJL',
  nameJa: '風',
  category: 'artistic',
  designer: 'Mondrian',
  description: '水平と垂直の絶対。モンドリアンの厳格なグリッド。',
  accentColor: '#E60012',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFFFF" />
      {/* Mondrian grid lines */}
      <line x1="0" y1="18" x2="91" y2="18" stroke="#1A1A1A" strokeWidth="1.2" />
      <line x1="0" y1="40" x2="91" y2="40" stroke="#1A1A1A" strokeWidth="1.2" />
      <line x1="60" y1="0" x2="60" y2="55" stroke="#1A1A1A" strokeWidth="1.2" />
      <line x1="25" y1="40" x2="25" y2="55" stroke="#1A1A1A" strokeWidth="1.2" />
      <line x1="75" y1="18" x2="75" y2="40" stroke="#1A1A1A" strokeWidth="1.2" />
      {/* Colored cells */}
      <rect x="60.6" y="0" width="30.4" height="17.4" fill="#E60012" />
      <rect x="0" y="40.6" width="24.4" height="14.4" fill="#0057B8" />
      <rect x="60.6" y="40.6" width="30.4" height="14.4" fill="#FFD700" />
      <rect x="75.6" y="18.6" width="15.4" height="20.8" fill="#1A1A1A" />
      {/* Name in the large white cell */}
      <text
        x="8"
        y="30"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="5.5"
        fill="#1A1A1A"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="36"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#555555"
      >
        {data.nameEn}
      </text>
      {/* Title in top-left cell */}
      <text
        x="8"
        y="10"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        fill="#555555"
      >
        {data.titleJa}
      </text>
      {/* Company in bottom-right yellow cell */}
      <text
        x="65"
        y="50"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="1.3"
        fill="#1A1A1A"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFFFF" />
      {/* Mondrian grid */}
      <line x1="0" y1="14" x2="91" y2="14" stroke="#1A1A1A" strokeWidth="1.2" />
      <line x1="0" y1="42" x2="91" y2="42" stroke="#1A1A1A" strokeWidth="1.2" />
      <line x1="35" y1="0" x2="35" y2="14" stroke="#1A1A1A" strokeWidth="1.2" />
      <line x1="55" y1="14" x2="55" y2="42" stroke="#1A1A1A" strokeWidth="1.2" />
      <line x1="70" y1="42" x2="70" y2="55" stroke="#1A1A1A" strokeWidth="1.2" />
      {/* Colored cells */}
      <rect x="0" y="0" width="34.4" height="13.4" fill="#E60012" />
      <rect x="55.6" y="14.6" width="35.4" height="26.8" fill="#FFFFFF" />
      <rect x="0" y="42.6" width="69.4" height="12.4" fill="#FFD700" />
      <rect x="70.6" y="42.6" width="20.4" height="12.4" fill="#0057B8" />
      {/* Company in red cell */}
      <text
        x="5"
        y="9"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="2.8"
        fill="#FFFFFF"
      >
        {data.companyJa}
      </text>
      {/* Contact in white main area */}
      <text
        x="8"
        y="23"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.7"
        fill="#1A1A1A"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="28"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.7"
        fill="#1A1A1A"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="33"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.7"
        fill="#1A1A1A"
      >
        {data.website}
      </text>
      {/* Address in yellow cell */}
      <text
        x="5"
        y="50"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#1A1A1A"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 9. UKIYOE (浮) — Japanese Woodblock inspired
// Layered color blocks, wave motif, printing technique
// ============================================================
const ukiyoeTemplate: TemplateDefinition = {
  id: 'artistic-ukiyoe',
  name: 'UKIYOE',
  nameJa: '浮',
  category: 'artistic',
  designer: 'Katsushika Hokusai',
  description: '浮世絵の重なり。版画の色層と波のモチーフ。',
  accentColor: '#1B4B73',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5E6C8" />
      {/* Layered color blocks evoking woodblock printing */}
      <rect x="0" y="35" width="91" height="20" fill="#1B4B73" />
      <rect x="0" y="38" width="91" height="17" fill="#2A6496" opacity="0.7" />
      {/* Wave motif */}
      <path
        d="M0,35 Q6,31 12,35 Q18,39 24,35 Q30,31 36,35 Q42,39 48,35 Q54,31 60,35 Q66,39 72,35 Q78,31 84,35 Q90,39 96,35"
        fill="none"
        stroke="#F5E6C8"
        strokeWidth="0.6"
      />
      <path
        d="M-3,38 Q3,34 9,38 Q15,42 21,38 Q27,34 33,38 Q39,42 45,38 Q51,34 57,38 Q63,42 69,38 Q75,34 81,38 Q87,42 93,38"
        fill="none"
        stroke="#F5E6C8"
        strokeWidth="0.4"
        opacity="0.5"
      />
      {/* Foam dots on waves */}
      <circle cx="12" cy="33" r="0.5" fill="#FFFFFF" opacity="0.6" />
      <circle cx="36" cy="33" r="0.4" fill="#FFFFFF" opacity="0.5" />
      <circle cx="60" cy="33" r="0.5" fill="#FFFFFF" opacity="0.6" />
      <circle cx="84" cy="33" r="0.3" fill="#FFFFFF" opacity="0.4" />
      {/* Red seal mark (hanko) */}
      <rect x="73" y="8" width="10" height="12" fill="#C03030" rx="0.5" opacity="0.85" />
      <text
        x="78"
        y="16"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="5"
        fill="#F5E6C8"
      >
        {data.nameJa.charAt(0)}
      </text>
      {/* Name */}
      <text
        x="10"
        y="16"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="6"
        letterSpacing="1"
        fill="#1B4B73"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="22"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#8B6914"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="28"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#8B7355"
      >
        {data.titleJa}
      </text>
      {/* Company at bottom in wave area */}
      <text
        x="10"
        y="48"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="1.8"
        fill="#F5E6C8"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5E6C8" />
      {/* Top color block */}
      <rect x="0" y="0" width="91" height="14" fill="#1B4B73" />
      <rect x="0" y="10" width="91" height="6" fill="#2A6496" opacity="0.6" />
      {/* Wave at block edge */}
      <path
        d="M0,14 Q6,11 12,14 Q18,17 24,14 Q30,11 36,14 Q42,17 48,14 Q54,11 60,14 Q66,17 72,14 Q78,11 84,14 Q90,17 96,14"
        fill="none"
        stroke="#F5E6C8"
        strokeWidth="0.5"
      />
      {/* Company in blue block */}
      <text
        x="10"
        y="8"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="3.5"
        fill="#F5E6C8"
      >
        {data.companyJa}
      </text>
      {/* Red seal */}
      <rect x="75" y="3" width="8" height="8" fill="#C03030" rx="0.5" opacity="0.8" />
      <text
        x="79"
        y="9"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="3.5"
        fill="#F5E6C8"
      >
        印
      </text>
      {/* Contact info */}
      <text
        x="10"
        y="24"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#1B4B73"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="29"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#1B4B73"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="34"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.6"
        fill="#1B4B73"
      >
        {data.website}
      </text>
      {/* Address with subtle divider */}
      <line x1="10" y1="38" x2="80" y2="38" stroke="#C8B080" strokeWidth="0.2" />
      <text
        x="10"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#8B7355"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
      {/* Bottom wave strip */}
      <rect x="0" y="47" width="91" height="8" fill="#1B4B73" opacity="0.15" />
      <path
        d="M0,47 Q6,44 12,47 Q18,50 24,47 Q30,44 36,47 Q42,50 48,47 Q54,44 60,47 Q66,50 72,47 Q78,44 84,47 Q90,50 96,47"
        fill="none"
        stroke="#1B4B73"
        strokeWidth="0.3"
        opacity="0.4"
      />
    </g>
  ),
};

// ============================================================
// 10. OP ART (眩) — Bridget Riley inspired
// Optical pattern with parallel lines, B&W hypnotic effect
// ============================================================
const opartTemplate: TemplateDefinition = {
  id: 'artistic-opart',
  name: 'OP ART',
  nameJa: '眩',
  category: 'artistic',
  designer: 'Bridget Riley',
  description: '視覚の眩惑。平行線が生み出す催眠的パターン。',
  accentColor: '#000000',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFFFF" />
      {/* Optical parallel lines with varying spacing - left side pattern */}
      <defs>
        <clipPath id="opart-front-clip">
          <rect x="0" y="0" width="30" height="55" />
        </clipPath>
      </defs>
      <g clipPath="url(#opart-front-clip)">
        {/* Lines with varying spacing creating optical illusion */}
        <line x1="2" y1="0" x2="2" y2="55" stroke="#1A1A1A" strokeWidth="1.2" />
        <line x1="4.5" y1="0" x2="4.5" y2="55" stroke="#1A1A1A" strokeWidth="1" />
        <line x1="6.5" y1="0" x2="6.5" y2="55" stroke="#1A1A1A" strokeWidth="0.8" />
        <line x1="8.2" y1="0" x2="8.2" y2="55" stroke="#1A1A1A" strokeWidth="0.7" />
        <line x1="9.8" y1="0" x2="9.8" y2="55" stroke="#1A1A1A" strokeWidth="1.0" />
        <line x1="11.8" y1="0" x2="11.8" y2="55" stroke="#1A1A1A" strokeWidth="1.5" />
        <line x1="14.2" y1="0" x2="14.2" y2="55" stroke="#1A1A1A" strokeWidth="1.8" />
        <line x1="17" y1="0" x2="17" y2="55" stroke="#1A1A1A" strokeWidth="1.5" />
        <line x1="19.2" y1="0" x2="19.2" y2="55" stroke="#1A1A1A" strokeWidth="1.0" />
        <line x1="21" y1="0" x2="21" y2="55" stroke="#1A1A1A" strokeWidth="0.7" />
        <line x1="22.5" y1="0" x2="22.5" y2="55" stroke="#1A1A1A" strokeWidth="0.5" />
        <line x1="23.8" y1="0" x2="23.8" y2="55" stroke="#1A1A1A" strokeWidth="0.4" />
        <line x1="25" y1="0" x2="25" y2="55" stroke="#1A1A1A" strokeWidth="0.3" />
        <line x1="26.2" y1="0" x2="26.2" y2="55" stroke="#1A1A1A" strokeWidth="0.25" />
        <line x1="27.3" y1="0" x2="27.3" y2="55" stroke="#1A1A1A" strokeWidth="0.2" />
        <line x1="28.3" y1="0" x2="28.3" y2="55" stroke="#1A1A1A" strokeWidth="0.15" />
      </g>
      {/* Right side - bottom corner pattern */}
      <g>
        <line x1="60" y1="42" x2="91" y2="42" stroke="#1A1A1A" strokeWidth="0.15" />
        <line x1="60" y1="43.2" x2="91" y2="43.2" stroke="#1A1A1A" strokeWidth="0.2" />
        <line x1="60" y1="44.5" x2="91" y2="44.5" stroke="#1A1A1A" strokeWidth="0.3" />
        <line x1="60" y1="46" x2="91" y2="46" stroke="#1A1A1A" strokeWidth="0.5" />
        <line x1="60" y1="47.8" x2="91" y2="47.8" stroke="#1A1A1A" strokeWidth="0.7" />
        <line x1="60" y1="49.8" x2="91" y2="49.8" stroke="#1A1A1A" strokeWidth="1.0" />
        <line x1="60" y1="52" x2="91" y2="52" stroke="#1A1A1A" strokeWidth="1.5" />
        <line x1="60" y1="54.5" x2="91" y2="54.5" stroke="#1A1A1A" strokeWidth="1.2" />
      </g>
      {/* Name on clean white area */}
      <text
        x="38"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="6"
        fill="#1A1A1A"
      >
        {data.nameJa}
      </text>
      <text
        x="38"
        y="28"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="2"
        letterSpacing="0.4"
        fill="#1A1A1A"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="38"
        y="34"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#666666"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFFFF" />
      {/* Top optical stripe pattern */}
      <defs>
        <clipPath id="opart-back-clip">
          <rect x="0" y="0" width="91" height="12" />
        </clipPath>
      </defs>
      <g clipPath="url(#opart-back-clip)">
        <line x1="0" y1="1" x2="91" y2="1" stroke="#1A1A1A" strokeWidth="1.5" />
        <line x1="0" y1="3.2" x2="91" y2="3.2" stroke="#1A1A1A" strokeWidth="1.2" />
        <line x1="0" y1="5" x2="91" y2="5" stroke="#1A1A1A" strokeWidth="0.8" />
        <line x1="0" y1="6.4" x2="91" y2="6.4" stroke="#1A1A1A" strokeWidth="0.5" />
        <line x1="0" y1="7.5" x2="91" y2="7.5" stroke="#1A1A1A" strokeWidth="0.3" />
        <line x1="0" y1="8.3" x2="91" y2="8.3" stroke="#1A1A1A" strokeWidth="0.2" />
        <line x1="0" y1="9" x2="91" y2="9" stroke="#1A1A1A" strokeWidth="0.15" />
        <line x1="0" y1="9.6" x2="91" y2="9.6" stroke="#1A1A1A" strokeWidth="0.1" />
      </g>
      {/* Bottom optical pattern */}
      <g>
        <line x1="0" y1="45" x2="91" y2="45" stroke="#1A1A1A" strokeWidth="0.1" />
        <line x1="0" y1="45.8" x2="91" y2="45.8" stroke="#1A1A1A" strokeWidth="0.15" />
        <line x1="0" y1="46.8" x2="91" y2="46.8" stroke="#1A1A1A" strokeWidth="0.2" />
        <line x1="0" y1="48" x2="91" y2="48" stroke="#1A1A1A" strokeWidth="0.3" />
        <line x1="0" y1="49.5" x2="91" y2="49.5" stroke="#1A1A1A" strokeWidth="0.5" />
        <line x1="0" y1="51.2" x2="91" y2="51.2" stroke="#1A1A1A" strokeWidth="0.8" />
        <line x1="0" y1="53" x2="91" y2="53" stroke="#1A1A1A" strokeWidth="1.2" />
        <line x1="0" y1="55" x2="91" y2="55" stroke="#1A1A1A" strokeWidth="1.5" />
      </g>
      {/* Company */}
      <text
        x="10"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="2.8"
        fill="#1A1A1A"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="24"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#666666"
      >
        {data.companyEn}
      </text>
      {/* Contact */}
      <text
        x="10"
        y="30"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.6"
        fill="#1A1A1A"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="34"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.6"
        fill="#1A1A1A"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="38"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="1.6"
        fill="#1A1A1A"
      >
        {data.website}
      </text>
      {/* Address */}
      <text
        x="10"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#666666"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

export const artisticTemplates: TemplateDefinition[] = [
  bauhausTemplate,
  dadaTemplate,
  popTemplate,
  abstractTemplate,
  constructivistTemplate,
  memphisTemplate,
  nouveauTemplate,
  destijlTemplate,
  ukiyoeTemplate,
  opartTemplate,
];
