import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. GRACE (雅) — Refined grace with thin borders
// Delicate gold accents, serif typography, ample breathing room
// ============================================================
const graceTemplate: TemplateDefinition = {
  id: 'elegant-grace',
  name: 'GRACE',
  nameJa: '雅',
  category: 'elegant',
  designer: 'Coco Chanel',
  description: '雅の極み。繊細な金の縁取りと上質な余白。',
  accentColor: '#C5A572',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFFF0" />
      {/* Thin gold border */}
      <rect x="5" y="4" width="81" height="47" fill="none" stroke="#C5A572" strokeWidth="0.15" />
      <rect x="6" y="5" width="79" height="45" fill="none" stroke="#C5A572" strokeWidth="0.08" />
      {/* Name - serif */}
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="3"
        letterSpacing="1.2"
        fill="#C5A572"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <line x1="28" y1="25" x2="63" y2="25" stroke="#C5A572" strokeWidth="0.08" />
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="5"
        letterSpacing="1.5"
        fill="#3a3530"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="38"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.6"
        letterSpacing="0.6"
        fill="#999080"
      >
        {data.titleJa}
      </text>
      {/* Corner flourish dots */}
      <circle cx="8" cy="7" r="0.3" fill="#C5A572" />
      <circle cx="83" cy="7" r="0.3" fill="#C5A572" />
      <circle cx="8" cy="48" r="0.3" fill="#C5A572" />
      <circle cx="83" cy="48" r="0.3" fill="#C5A572" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFFF0" />
      {/* Matching border */}
      <rect x="5" y="4" width="81" height="47" fill="none" stroke="#C5A572" strokeWidth="0.15" />
      <rect x="6" y="5" width="79" height="45" fill="none" stroke="#C5A572" strokeWidth="0.08" />
      {/* Company */}
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.8"
        fill="#3a3530"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="18"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.4"
        letterSpacing="0.5"
        fill="#999080"
      >
        {data.companyEn}
      </text>
      <line x1="30" y1="21" x2="61" y2="21" stroke="#C5A572" strokeWidth="0.08" />
      {/* Contact */}
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#666055"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#666055"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#666055"
      >
        {data.website}
      </text>
      <line x1="30" y1="38" x2="61" y2="38" stroke="#C5A572" strokeWidth="0.06" />
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#aaa598"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
      {/* Corner dots */}
      <circle cx="8" cy="7" r="0.3" fill="#C5A572" />
      <circle cx="83" cy="7" r="0.3" fill="#C5A572" />
      <circle cx="8" cy="48" r="0.3" fill="#C5A572" />
      <circle cx="83" cy="48" r="0.3" fill="#C5A572" />
    </g>
  ),
};

// ============================================================
// 2. EMPRESS (妃) — Imperial elegance
// Rich charcoal with gold lettering, centered symmetry
// ============================================================
const empressTemplate: TemplateDefinition = {
  id: 'elegant-empress',
  name: 'EMPRESS',
  nameJa: '妃',
  category: 'elegant',
  designer: 'Hubert de Givenchy',
  description: '皇妃の風格。漆黒と金が織りなす帝国の美。',
  accentColor: '#C5A572',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#2a2824" />
      {/* Thin gold lines */}
      <line x1="10" y1="10" x2="81" y2="10" stroke="#C5A572" strokeWidth="0.1" />
      <line x1="10" y1="45" x2="81" y2="45" stroke="#C5A572" strokeWidth="0.1" />
      {/* Name */}
      <text
        x="45.5"
        y="23"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="2.2"
        letterSpacing="1.5"
        fill="#C5A572"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="5.5"
        letterSpacing="2"
        fill="#FFFFF0"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="39"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.5"
        letterSpacing="0.8"
        fill="#8B7D5E"
      >
        {data.titleJa}
      </text>
      {/* Gold ornament diamond */}
      <polygon points="45.5,14 47,15.5 45.5,17 44,15.5" fill="#C5A572" opacity="0.4" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#2a2824" />
      <line x1="10" y1="10" x2="81" y2="10" stroke="#C5A572" strokeWidth="0.1" />
      <line x1="10" y1="45" x2="81" y2="45" stroke="#C5A572" strokeWidth="0.1" />
      {/* Company */}
      <text
        x="45.5"
        y="17"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.8"
        fill="#FFFFF0"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="21"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.3"
        letterSpacing="0.6"
        fill="#8B7D5E"
      >
        {data.companyEn}
      </text>
      {/* Small diamond separator */}
      <polygon points="45.5,24 46.3,25 45.5,26 44.7,25" fill="#C5A572" opacity="0.3" />
      {/* Contact */}
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#9A8C6E"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="33.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#9A8C6E"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="37"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#9A8C6E"
      >
        {data.website}
      </text>
      <text
        x="45.5"
        y="42"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.1"
        fill="#6B5E48"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 3. VERSAILLES (宮) — Palace-inspired ornamental
// Ornamental curved frames, lavish gold detailing
// ============================================================
const versaillesTemplate: TemplateDefinition = {
  id: 'elegant-versailles',
  name: 'VERSAILLES',
  nameJa: '宮',
  category: 'elegant',
  designer: 'Marie Antoinette',
  description: '宮殿の華麗さ。渦巻く装飾が織りなす豪華絢爛。',
  accentColor: '#B8941F',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFFF0" />
      {/* Ornamental corner curves */}
      <path d="M 8,8 Q 8,4 12,4" fill="none" stroke="#B8941F" strokeWidth="0.2" />
      <path d="M 12,4 Q 16,4 16,8" fill="none" stroke="#B8941F" strokeWidth="0.12" />
      <path d="M 83,8 Q 83,4 79,4" fill="none" stroke="#B8941F" strokeWidth="0.2" />
      <path d="M 79,4 Q 75,4 75,8" fill="none" stroke="#B8941F" strokeWidth="0.12" />
      <path d="M 8,47 Q 8,51 12,51" fill="none" stroke="#B8941F" strokeWidth="0.2" />
      <path d="M 12,51 Q 16,51 16,47" fill="none" stroke="#B8941F" strokeWidth="0.12" />
      <path d="M 83,47 Q 83,51 79,51" fill="none" stroke="#B8941F" strokeWidth="0.2" />
      <path d="M 79,51 Q 75,51 75,47" fill="none" stroke="#B8941F" strokeWidth="0.12" />
      {/* Top scrollwork */}
      <path d="M 35,8 Q 40,5 45.5,8 Q 51,5 56,8" fill="none" stroke="#B8941F" strokeWidth="0.12" />
      {/* Name */}
      <text
        x="45.5"
        y="23"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="600"
        fontSize="3"
        letterSpacing="1"
        fill="#B8941F"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="5"
        letterSpacing="1.8"
        fill="#3a3530"
      >
        {data.nameJa}
      </text>
      {/* Ornament below name */}
      <path d="M 38,36 Q 41,34 45.5,36 Q 50,34 53,36" fill="none" stroke="#B8941F" strokeWidth="0.1" />
      <text
        x="45.5"
        y="42"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        letterSpacing="0.5"
        fill="#9A8A5A"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFFF0" />
      {/* Corner curves */}
      <path d="M 8,8 Q 8,4 12,4" fill="none" stroke="#B8941F" strokeWidth="0.2" />
      <path d="M 83,8 Q 83,4 79,4" fill="none" stroke="#B8941F" strokeWidth="0.2" />
      <path d="M 8,47 Q 8,51 12,51" fill="none" stroke="#B8941F" strokeWidth="0.2" />
      <path d="M 83,47 Q 83,51 79,51" fill="none" stroke="#B8941F" strokeWidth="0.2" />
      {/* Company */}
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="1"
        fill="#3a3530"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="18.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        letterSpacing="0.5"
        fill="#9A8A5A"
      >
        {data.companyEn}
      </text>
      <path d="M 35,21 Q 40,20 45.5,21 Q 51,20 56,21" fill="none" stroke="#B8941F" strokeWidth="0.08" />
      {/* Contact */}
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#6B6040"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#6B6040"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#6B6040"
      >
        {data.website}
      </text>
      <path d="M 35,38 Q 40,37 45.5,38 Q 51,37 56,38" fill="none" stroke="#B8941F" strokeWidth="0.06" />
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.1"
        fill="#aaa598"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 4. ROSE (薔薇) — Dusty rose romantic
// Soft pink tones with thin rose-colored lines
// ============================================================
const roseTemplate: TemplateDefinition = {
  id: 'elegant-rose',
  name: 'ROSE',
  nameJa: '薔薇',
  category: 'elegant',
  designer: 'Christian Dior',
  description: '薔薇色の夢。淡いピンクと繊細な線が紡ぐロマンス。',
  accentColor: '#DCAE96',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="elegant-rose-fbg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFF0" />
          <stop offset="100%" stopColor="#FFF5EE" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#elegant-rose-fbg)" />
      {/* Rose-tinted thin border */}
      <rect x="7" y="6" width="77" height="43" fill="none" stroke="#DCAE96" strokeWidth="0.1" />
      {/* Subtle curved flourish at top */}
      <path d="M 30,6 Q 45.5,2 61,6" fill="none" stroke="#DCAE96" strokeWidth="0.1" />
      {/* Name */}
      <text
        x="45.5"
        y="21"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="2.5"
        letterSpacing="1.2"
        fill="#DCAE96"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="5"
        letterSpacing="1.5"
        fill="#5C3A30"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="37"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.5"
        letterSpacing="0.5"
        fill="#C09A82"
      >
        {data.titleJa}
      </text>
      {/* Small rose-colored dot */}
      <circle cx="45.5" cy="42" r="0.5" fill="#DCAE96" opacity="0.5" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFFF0" />
      <rect x="7" y="6" width="77" height="43" fill="none" stroke="#DCAE96" strokeWidth="0.1" />
      {/* Company */}
      <text
        x="45.5"
        y="15"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.8"
        fill="#5C3A30"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="19"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.3"
        letterSpacing="0.4"
        fill="#C09A82"
      >
        {data.companyEn}
      </text>
      <line x1="32" y1="22" x2="59" y2="22" stroke="#DCAE96" strokeWidth="0.06" />
      {/* Contact */}
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#8A6A5A"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#8A6A5A"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#8A6A5A"
      >
        {data.website}
      </text>
      <line x1="32" y1="39" x2="59" y2="39" stroke="#DCAE96" strokeWidth="0.06" />
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.1"
        fill="#C09A82"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 5. CAMEO (彫像) — Cameo brooch inspired
// Oval frame motif with classical serif typography
// ============================================================
const cameoTemplate: TemplateDefinition = {
  id: 'elegant-cameo',
  name: 'CAMEO',
  nameJa: '彫像',
  category: 'elegant',
  designer: 'Josiah Wedgwood',
  description: '彫像の気品。楕円の枠に刻まれた古典の美。',
  accentColor: '#8B7355',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f8f5f0" />
      {/* Oval cameo frame */}
      <ellipse cx="45.5" cy="24" rx="20" ry="14" fill="none" stroke="#8B7355" strokeWidth="0.2" />
      <ellipse cx="45.5" cy="24" rx="18.5" ry="12.5" fill="none" stroke="#8B7355" strokeWidth="0.1" />
      {/* Name inside oval */}
      <text
        x="45.5"
        y="21"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="4.5"
        letterSpacing="1"
        fill="#3a3530"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.5"
        fill="#8B7355"
      >
        {data.nameEn}
      </text>
      {/* Title below oval */}
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.5"
        letterSpacing="0.4"
        fill="#9A8A7A"
      >
        {data.titleJa}
      </text>
      {/* Small decorative line below oval */}
      <line x1="38" y1="39" x2="53" y2="39" stroke="#8B7355" strokeWidth="0.08" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f8f5f0" />
      {/* Small oval accent */}
      <ellipse cx="45.5" cy="8" rx="6" ry="3.5" fill="none" stroke="#8B7355" strokeWidth="0.12" />
      {/* Company inside small oval */}
      <text
        x="45.5"
        y="9"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.2"
        letterSpacing="0.3"
        fill="#8B7355"
      >
        {data.companyEn}
      </text>
      {/* Company Japanese */}
      <text
        x="45.5"
        y="17"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.6"
        fill="#3a3530"
      >
        {data.companyJa}
      </text>
      <line x1="30" y1="20" x2="61" y2="20" stroke="#8B7355" strokeWidth="0.08" />
      {/* Contact */}
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#6B5A4A"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#6B5A4A"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="34"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#6B5A4A"
      >
        {data.website}
      </text>
      <line x1="30" y1="37" x2="61" y2="37" stroke="#8B7355" strokeWidth="0.06" />
      <text
        x="45.5"
        y="42"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.1"
        fill="#aaa090"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="46"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.1"
        fill="#aaa090"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 6. TIARA (冠) — Crown/tiara inspired
// Upward arches suggesting a crown, regal spacing
// ============================================================
const tiaraTemplate: TemplateDefinition = {
  id: 'elegant-tiara',
  name: 'TIARA',
  nameJa: '冠',
  category: 'elegant',
  designer: 'Cartier',
  description: '冠の威厳。上向きのアーチが戴冠の瞬間を描く。',
  accentColor: '#C5A572',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFFF0" />
      {/* Tiara arches at top */}
      <path d="M 20,10 Q 28,3 36,10" fill="none" stroke="#C5A572" strokeWidth="0.15" />
      <path d="M 36,10 Q 41,5 45.5,8" fill="none" stroke="#C5A572" strokeWidth="0.15" />
      <path d="M 45.5,8 Q 50,5 55,10" fill="none" stroke="#C5A572" strokeWidth="0.15" />
      <path d="M 55,10 Q 63,3 71,10" fill="none" stroke="#C5A572" strokeWidth="0.15" />
      {/* Small jewel dots on peaks */}
      <circle cx="28" cy="4.5" r="0.4" fill="#C5A572" />
      <circle cx="45.5" cy="6.5" r="0.5" fill="#C5A572" />
      <circle cx="63" cy="4.5" r="0.4" fill="#C5A572" />
      {/* Name */}
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="5.5"
        letterSpacing="1.5"
        fill="#3a3530"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.8"
        fill="#C5A572"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <line x1="25" y1="33" x2="66" y2="33" stroke="#C5A572" strokeWidth="0.06" />
      <text
        x="45.5"
        y="39"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#9A8A7A"
      >
        {data.titleJa}
      </text>
      {/* Bottom line */}
      <line x1="15" y1="47" x2="76" y2="47" stroke="#C5A572" strokeWidth="0.08" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFFF0" />
      {/* Small tiara accent */}
      <path d="M 38,6 Q 42,3 45.5,5 Q 49,3 53,6" fill="none" stroke="#C5A572" strokeWidth="0.12" />
      <circle cx="45.5" cy="4" r="0.3" fill="#C5A572" />
      {/* Company */}
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.8"
        fill="#3a3530"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="18.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.4"
        letterSpacing="0.5"
        fill="#9A8A7A"
      >
        {data.companyEn}
      </text>
      <line x1="28" y1="21" x2="63" y2="21" stroke="#C5A572" strokeWidth="0.06" />
      {/* Contact */}
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#6B6050"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#6B6050"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#6B6050"
      >
        {data.website}
      </text>
      <line x1="28" y1="38" x2="63" y2="38" stroke="#C5A572" strokeWidth="0.06" />
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.1"
        fill="#aaa598"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 7. LACE (蕾絲) — Delicate lace pattern overlay
// Fine interconnected curves suggesting lace fabric
// ============================================================
const laceTemplate: TemplateDefinition = {
  id: 'elegant-lace',
  name: 'LACE',
  nameJa: '蕾絲',
  category: 'elegant',
  designer: 'Valentino',
  description: '蕾絲の繊細。細い糸が絡み合う布の芸術。',
  accentColor: '#B8A8C0',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#faf8fc" />
      {/* Lace-like curved pattern at top */}
      <defs>
        <pattern id="elegant-lace-fg" x="0" y="0" width="8" height="6" patternUnits="userSpaceOnUse">
          <path d="M 0,3 Q 2,0 4,3 Q 6,6 8,3" fill="none" stroke="#B8A8C0" strokeWidth="0.1" opacity="0.2" />
          <path d="M 0,0 Q 2,3 4,0 Q 6,-3 8,0" fill="none" stroke="#B8A8C0" strokeWidth="0.08" opacity="0.15" />
          <circle cx="4" cy="3" r="0.3" fill="#B8A8C0" opacity="0.15" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="91" height="12" fill="url(#elegant-lace-fg)" />
      <rect x="0" y="44" width="91" height="11" fill="url(#elegant-lace-fg)" />
      {/* Name */}
      <text
        x="45.5"
        y="23"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="2.2"
        letterSpacing="1"
        fill="#B8A8C0"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="5"
        letterSpacing="1.5"
        fill="#4A3A5A"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="39"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#8A7A9A"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#faf8fc" />
      {/* Lace edges */}
      <defs>
        <pattern id="elegant-lace-bg" x="0" y="0" width="8" height="6" patternUnits="userSpaceOnUse">
          <path d="M 0,3 Q 2,0 4,3 Q 6,6 8,3" fill="none" stroke="#B8A8C0" strokeWidth="0.08" opacity="0.12" />
          <circle cx="4" cy="3" r="0.2" fill="#B8A8C0" opacity="0.1" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="91" height="6" fill="url(#elegant-lace-bg)" />
      <rect x="0" y="49" width="91" height="6" fill="url(#elegant-lace-bg)" />
      {/* Company */}
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.6"
        fill="#4A3A5A"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="18.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8A7A9A"
      >
        {data.companyEn}
      </text>
      <line x1="30" y1="21" x2="61" y2="21" stroke="#B8A8C0" strokeWidth="0.06" />
      {/* Contact */}
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#5A4A6A"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#5A4A6A"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#5A4A6A"
      >
        {data.website}
      </text>
      <line x1="30" y1="38" x2="61" y2="38" stroke="#B8A8C0" strokeWidth="0.06" />
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.1"
        fill="#aaa0b0"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 8. PERFUME (香) — Perfume bottle inspired
// Elegant asymmetric layout, subtle warm gradient
// ============================================================
const perfumeTemplate: TemplateDefinition = {
  id: 'elegant-perfume',
  name: 'PERFUME',
  nameJa: '香',
  category: 'elegant',
  designer: 'Jacques Guerlain',
  description: '香りの記憶。目に見えない優雅さを形にする。',
  accentColor: '#D4A070',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="elegant-perfume-fbg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFF0" />
          <stop offset="100%" stopColor="#FFF8EE" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#elegant-perfume-fbg)" />
      {/* Perfume bottle silhouette abstraction - top */}
      <rect x="42" y="3" width="7" height="1.5" fill="none" stroke="#D4A070" strokeWidth="0.12" rx="0.3" />
      <line x1="45.5" y1="4.5" x2="45.5" y2="7" stroke="#D4A070" strokeWidth="0.1" />
      <rect x="39" y="7" width="13" height="4" fill="none" stroke="#D4A070" strokeWidth="0.1" rx="1" />
      {/* Name */}
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="600"
        fontSize="2.5"
        letterSpacing="1.2"
        fill="#D4A070"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="5.5"
        letterSpacing="1.5"
        fill="#4A3A28"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="39"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.5"
        letterSpacing="0.5"
        fill="#B08A68"
      >
        {data.titleJa}
      </text>
      {/* Bottom accent line */}
      <line x1="20" y1="47" x2="71" y2="47" stroke="#D4A070" strokeWidth="0.06" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFFF0" />
      {/* Company */}
      <text
        x="81"
        y="12"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.6"
        fill="#4A3A28"
      >
        {data.companyJa}
      </text>
      <text
        x="81"
        y="16.5"
        textAnchor="end"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.4"
        letterSpacing="0.4"
        fill="#B08A68"
      >
        {data.companyEn}
      </text>
      <line x1="50" y1="20" x2="81" y2="20" stroke="#D4A070" strokeWidth="0.06" />
      {/* Contact - right aligned */}
      <text
        x="81"
        y="27"
        textAnchor="end"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#7A6A52"
      >
        {data.tel}
      </text>
      <text
        x="81"
        y="31"
        textAnchor="end"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#7A6A52"
      >
        {data.email}
      </text>
      <text
        x="81"
        y="35"
        textAnchor="end"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#7A6A52"
      >
        {data.website}
      </text>
      <line x1="50" y1="38" x2="81" y2="38" stroke="#D4A070" strokeWidth="0.06" />
      <text
        x="81"
        y="44"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.1"
        fill="#C0AA90"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 9. BALLROOM (舞) — Ballroom dance inspired
// Sweeping curves suggesting movement and dance
// ============================================================
const ballroomTemplate: TemplateDefinition = {
  id: 'elegant-ballroom',
  name: 'BALLROOM',
  nameJa: '舞',
  category: 'elegant',
  designer: 'Oscar de la Renta',
  description: '舞踏会の華。優雅な曲線が踊るように流れる。',
  accentColor: '#8B6550',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="elegant-ballroom-fbg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fdf6f0" />
          <stop offset="100%" stopColor="#f8f0e8" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#elegant-ballroom-fbg)" />
      {/* Sweeping dance curves */}
      <path d="M 0,40 Q 25,20 50,35 Q 75,50 91,30" fill="none" stroke="#8B6550" strokeWidth="0.12" opacity="0.15" />
      <path d="M 0,45 Q 30,25 55,40 Q 80,55 91,35" fill="none" stroke="#8B6550" strokeWidth="0.08" opacity="0.1" />
      {/* Name */}
      <text
        x="10"
        y="18"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="2.2"
        letterSpacing="0.8"
        fill="#8B6550"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="28"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="5.5"
        letterSpacing="1"
        fill="#3a2a20"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="35"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.5"
        letterSpacing="0.4"
        fill="#AA8A70"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#fdf6f0" />
      {/* Subtle dance curve */}
      <path d="M 0,15 Q 30,5 60,15 Q 80,22 91,12" fill="none" stroke="#8B6550" strokeWidth="0.08" opacity="0.1" />
      {/* Company */}
      <text
        x="10"
        y="13"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.5"
        fill="#3a2a20"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="17.5"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#AA8A70"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="21" x2="50" y2="21" stroke="#8B6550" strokeWidth="0.08" opacity="0.2" />
      {/* Contact */}
      <text
        x="10"
        y="27"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#6B5040"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="31"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#6B5040"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="35"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#6B5040"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.1"
        fill="#C0AA90"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 10. SWAN (白鳥) — Swan lake inspired
// Graceful curves, white on white with subtle blue-gray
// ============================================================
const swanTemplate: TemplateDefinition = {
  id: 'elegant-swan',
  name: 'SWAN',
  nameJa: '白鳥',
  category: 'elegant',
  designer: 'Ralph Lauren',
  description: '白鳥の気品。純白の中に浮かぶ気高い曲線。',
  accentColor: '#8A9BAA',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Swan neck curve - abstract S shape */}
      <path
        d="M 75,50 Q 78,35 72,25 Q 65,15 70,5"
        fill="none"
        stroke="#8A9BAA"
        strokeWidth="0.2"
        opacity="0.15"
      />
      <path
        d="M 76,50 Q 79,36 73,26 Q 66,16 71,6"
        fill="none"
        stroke="#8A9BAA"
        strokeWidth="0.1"
        opacity="0.1"
      />
      {/* Wing feather strokes */}
      <path d="M 72,25 Q 80,22 85,18" fill="none" stroke="#8A9BAA" strokeWidth="0.08" opacity="0.1" />
      <path d="M 71,28 Q 79,26 86,23" fill="none" stroke="#8A9BAA" strokeWidth="0.06" opacity="0.08" />
      <path d="M 70,31 Q 78,30 85,28" fill="none" stroke="#8A9BAA" strokeWidth="0.06" opacity="0.06" />
      {/* Name */}
      <text
        x="10"
        y="20"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="2.2"
        letterSpacing="1"
        fill="#8A9BAA"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="30"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="5.5"
        letterSpacing="1"
        fill="#3a3a44"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="37"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.5"
        letterSpacing="0.4"
        fill="#AAB5C0"
      >
        {data.titleJa}
      </text>
      {/* Thin horizontal line */}
      <line x1="10" y1="42" x2="50" y2="42" stroke="#8A9BAA" strokeWidth="0.06" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Subtle feather accent */}
      <path d="M 80,3 Q 84,8 80,13" fill="none" stroke="#8A9BAA" strokeWidth="0.1" opacity="0.1" />
      <path d="M 79,4 Q 82,8 79,12" fill="none" stroke="#8A9BAA" strokeWidth="0.06" opacity="0.08" />
      {/* Company */}
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.5"
        fill="#3a3a44"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18.5"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#AAB5C0"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="22" x2="55" y2="22" stroke="#8A9BAA" strokeWidth="0.06" />
      {/* Contact */}
      <text
        x="10"
        y="28"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#5A6A7A"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#5A6A7A"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#5A6A7A"
      >
        {data.website}
      </text>
      <line x1="10" y1="39" x2="55" y2="39" stroke="#8A9BAA" strokeWidth="0.06" />
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.1"
        fill="#C0CAD4"
      >
        〒{data.zipCode}
      </text>
      <text
        x="10"
        y="48"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.1"
        fill="#C0CAD4"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

export const elegantTemplates: TemplateDefinition[] = [
  graceTemplate,
  empressTemplate,
  versaillesTemplate,
  roseTemplate,
  cameoTemplate,
  tiaraTemplate,
  laceTemplate,
  perfumeTemplate,
  ballroomTemplate,
  swanTemplate,
];
