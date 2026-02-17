import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. SPARK (閃) — Electric inspiration burst
// Vivid yellow-orange spark, dynamic asymmetric layout
// ============================================================
const sparkTemplate: TemplateDefinition = {
  id: 'creative-spark',
  name: 'SPARK',
  nameJa: '閃',
  category: 'creative',
  designer: 'Electric Studio',
  description: '閃光のような創造の瞬間。鮮烈な色彩が着火する。',
  accentColor: '#FF6B2B',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1A1A1A" />
      {/* Spark burst lines */}
      <defs>
        <linearGradient id="creative-spark-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B2B" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
      </defs>
      <line x1="72" y1="12" x2="82" y2="5" stroke="url(#creative-spark-grad)" strokeWidth="0.3" />
      <line x1="72" y1="12" x2="85" y2="12" stroke="url(#creative-spark-grad)" strokeWidth="0.25" />
      <line x1="72" y1="12" x2="80" y2="20" stroke="url(#creative-spark-grad)" strokeWidth="0.2" />
      <line x1="72" y1="12" x2="78" y2="3" stroke="url(#creative-spark-grad)" strokeWidth="0.2" />
      <line x1="72" y1="12" x2="84" y2="18" stroke="url(#creative-spark-grad)" strokeWidth="0.15" />
      <line x1="72" y1="12" x2="68" y2="3" stroke="url(#creative-spark-grad)" strokeWidth="0.15" />
      <circle cx="72" cy="12" r="2" fill="#FF6B2B" opacity="0.6" />
      <circle cx="72" cy="12" r="0.8" fill="#FFD700" />
      {/* Name - bold and dynamic */}
      <text
        x="8"
        y="28"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="7"
        letterSpacing="0.5"
        fill="#FFFFFF"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="34"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        letterSpacing="0.3"
        fill="#FF6B2B"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Title */}
      <text
        x="8"
        y="40"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      {/* Accent line */}
      <line x1="8" y1="44" x2="35" y2="44" stroke="#FF6B2B" strokeWidth="0.4" />
      <text
        x="8"
        y="48"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#666666"
      >
        {data.companyEn}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1A1A1A" />
      {/* Small spark in corner */}
      <circle cx="83" cy="8" r="1.5" fill="#FF6B2B" opacity="0.4" />
      <circle cx="83" cy="8" r="0.5" fill="#FFD700" />
      {/* Company */}
      <text
        x="8"
        y="12"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#FFFFFF"
      >
        {data.companyJa}
      </text>
      <text
        x="8"
        y="16"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#FF6B2B"
      >
        {data.companyEn}
      </text>
      <line x1="8" y1="19" x2="50" y2="19" stroke="#FF6B2B" strokeWidth="0.2" />
      {/* Contact */}
      <text
        x="8"
        y="25"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#AAAAAA"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="29"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#AAAAAA"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="33"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#AAAAAA"
      >
        {data.website}
      </text>
      <line x1="8" y1="37" x2="50" y2="37" stroke="#333333" strokeWidth="0.15" />
      {/* Address */}
      <text
        x="8"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#666666"
      >
        〒{data.zipCode}
      </text>
      <text
        x="8"
        y="45.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#666666"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 2. MUSE (霊) — Ethereal muse/inspiration
// Soft gradients, flowing curves, dreamy purple palette
// ============================================================
const museTemplate: TemplateDefinition = {
  id: 'creative-muse',
  name: 'MUSE',
  nameJa: '霊',
  category: 'creative',
  designer: 'Ethereal Arts',
  description: '創造の女神が宿る。紫の霞が感性を揺り動かす。',
  accentColor: '#8B5CF6',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F8F5FF" />
      {/* Flowing muse curves */}
      <defs>
        <linearGradient id="creative-muse-flow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#D946EF" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <path d="M0 35 Q20 15 45.5 25 Q70 35 91 10" fill="none" stroke="#8B5CF6" strokeWidth="0.15" opacity="0.4" />
      <path d="M0 40 Q25 20 50 30 Q75 40 91 15" fill="none" stroke="#D946EF" strokeWidth="0.1" opacity="0.3" />
      <path d="M0 45 Q30 25 55 35 Q80 45 91 20" fill="none" stroke="#8B5CF6" strokeWidth="0.08" opacity="0.2" />
      {/* Name */}
      <text
        x="10"
        y="18"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="6"
        letterSpacing="0.8"
        fill="#4C1D95"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="24"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.5"
        fill="#8B5CF6"
      >
        {data.nameEn}
      </text>
      {/* Title with ethereal style */}
      <text
        x="10"
        y="31"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.7"
        fill="#A78BFA"
      >
        {data.titleJa}
      </text>
      {/* Company */}
      <text
        x="10"
        y="48"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#C4B5FD"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F8F5FF" />
      {/* Subtle flowing curves */}
      <path d="M0 10 Q30 30 60 15 Q80 5 91 20" fill="none" stroke="#8B5CF6" strokeWidth="0.1" opacity="0.2" />
      <path d="M0 45 Q20 30 50 40 Q75 48 91 35" fill="none" stroke="#D946EF" strokeWidth="0.08" opacity="0.15" />
      {/* Company */}
      <text
        x="81"
        y="12"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2.2"
        fill="#4C1D95"
      >
        {data.companyJa}
      </text>
      <text
        x="81"
        y="16"
        textAnchor="end"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        letterSpacing="0.3"
        fill="#A78BFA"
      >
        {data.companyEn}
      </text>
      {/* Contact */}
      <text
        x="81"
        y="24"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#6D28D9"
      >
        {data.tel}
      </text>
      <text
        x="81"
        y="28"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#6D28D9"
      >
        {data.email}
      </text>
      <text
        x="81"
        y="32"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#6D28D9"
      >
        {data.website}
      </text>
      {/* Address */}
      <text
        x="81"
        y="42"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#C4B5FD"
      >
        〒{data.zipCode}
      </text>
      <text
        x="81"
        y="45.5"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#C4B5FD"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 3. VISION (視) — Bold visionary design
// Strong diagonal cut, high contrast, visionary typography
// ============================================================
const visionTemplate: TemplateDefinition = {
  id: 'creative-vision',
  name: 'VISION',
  nameJa: '視',
  category: 'creative',
  designer: 'Vision Lab',
  description: '視界を切り裂くダイナミズム。大胆な斜めカットが未来を見据える。',
  accentColor: '#06B6D4',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0F172A" />
      {/* Diagonal cut */}
      <polygon points="0,0 60,0 40,55 0,55" fill="#06B6D4" opacity="0.1" />
      <line x1="60" y1="0" x2="40" y2="55" stroke="#06B6D4" strokeWidth="0.3" />
      {/* Eye / vision circle motif */}
      <ellipse cx="75" cy="15" rx="8" ry="4" fill="none" stroke="#06B6D4" strokeWidth="0.2" opacity="0.5" />
      <circle cx="75" cy="15" r="2" fill="none" stroke="#06B6D4" strokeWidth="0.15" opacity="0.6" />
      <circle cx="75" cy="15" r="0.8" fill="#06B6D4" opacity="0.4" />
      {/* Name */}
      <text
        x="8"
        y="28"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="6.5"
        letterSpacing="0.3"
        fill="#FFFFFF"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="34"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        letterSpacing="0.4"
        fill="#06B6D4"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Title */}
      <text
        x="8"
        y="40"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#67E8F9"
      >
        {data.titleJa}
      </text>
      {/* Company */}
      <text
        x="8"
        y="48"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#475569"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0F172A" />
      {/* Reverse diagonal */}
      <polygon points="51,0 91,0 91,55 31,55" fill="#06B6D4" opacity="0.05" />
      <line x1="51" y1="0" x2="31" y2="55" stroke="#06B6D4" strokeWidth="0.2" opacity="0.3" />
      {/* Company */}
      <text
        x="83"
        y="12"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#FFFFFF"
      >
        {data.companyJa}
      </text>
      <text
        x="83"
        y="16"
        textAnchor="end"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#06B6D4"
      >
        {data.companyEn}
      </text>
      {/* Contact */}
      <text
        x="83"
        y="24"
        textAnchor="end"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#94A3B8"
      >
        {data.tel}
      </text>
      <text
        x="83"
        y="28"
        textAnchor="end"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#94A3B8"
      >
        {data.email}
      </text>
      <text
        x="83"
        y="32"
        textAnchor="end"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#94A3B8"
      >
        {data.website}
      </text>
      {/* Address */}
      <text
        x="83"
        y="42"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#475569"
      >
        〒{data.zipCode}
      </text>
      <text
        x="83"
        y="45.5"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#475569"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 4. PALETTE (色盤) — Paint palette inspired
// Color dots, playful arrangement, artist's workspace
// ============================================================
const paletteTemplate: TemplateDefinition = {
  id: 'creative-palette',
  name: 'PALETTE',
  nameJa: '色盤',
  category: 'creative',
  designer: 'Color Workshop',
  description: 'パレットの上で混ざり合う色彩。アーティストの遊び心。',
  accentColor: '#E11D48',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFBF5" />
      {/* Paint palette dots */}
      <circle cx="70" cy="8" r="3" fill="#E11D48" opacity="0.7" />
      <circle cx="78" cy="11" r="2.5" fill="#F59E0B" opacity="0.6" />
      <circle cx="74" cy="16" r="2" fill="#3B82F6" opacity="0.6" />
      <circle cx="82" cy="6" r="1.8" fill="#10B981" opacity="0.5" />
      <circle cx="80" cy="17" r="1.5" fill="#8B5CF6" opacity="0.5" />
      <circle cx="66" cy="13" r="1.2" fill="#EC4899" opacity="0.4" />
      {/* Smear / brush stroke hint */}
      <path d="M60 20 Q65 18 70 20 Q75 22 80 20" fill="none" stroke="#E11D48" strokeWidth="0.8" opacity="0.2" strokeLinecap="round" />
      {/* Name */}
      <text
        x="10"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="6"
        letterSpacing="0.4"
        fill="#1A1A2E"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="28"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.3"
        fill="#E11D48"
      >
        {data.nameEn}
      </text>
      {/* Title */}
      <text
        x="10"
        y="35"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.7"
        fill="#6B7280"
      >
        {data.titleJa}
      </text>
      {/* Company with color dot */}
      <circle cx="10" cy="42.5" r="0.8" fill="#E11D48" opacity="0.6" />
      <text
        x="13"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#9CA3AF"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFBF5" />
      {/* Small color dots accent */}
      <circle cx="80" cy="8" r="1.5" fill="#E11D48" opacity="0.5" />
      <circle cx="84" cy="11" r="1" fill="#F59E0B" opacity="0.4" />
      <circle cx="77" cy="12" r="0.8" fill="#3B82F6" opacity="0.4" />
      {/* Company */}
      <text
        x="10"
        y="12"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#1A1A2E"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="16"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#E11D48"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="19" x2="55" y2="19" stroke="#E11D48" strokeWidth="0.15" />
      {/* Contact */}
      <text
        x="10"
        y="25"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#4B5563"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="29"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#4B5563"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="33"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#4B5563"
      >
        {data.website}
      </text>
      <line x1="10" y1="37" x2="55" y2="37" stroke="#E8E0D0" strokeWidth="0.1" />
      {/* Address */}
      <text
        x="10"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#9CA3AF"
      >
        〒{data.zipCode}
      </text>
      <text
        x="10"
        y="45.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#9CA3AF"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 5. CANVAS (画布) — Artist's canvas / stretched frame
// Canvas texture hint, frame border, earthy creative tones
// ============================================================
const canvasTemplate: TemplateDefinition = {
  id: 'creative-canvas',
  name: 'CANVAS',
  nameJa: '画布',
  category: 'creative',
  designer: 'Canvas Studio',
  description: '真っ白なキャンバスに描かれる一枚の名刺。余白が可能性を語る。',
  accentColor: '#92400E',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FAF5EF" />
      {/* Canvas frame */}
      <rect x="4" y="3" width="83" height="49" fill="none" stroke="#D4A76A" strokeWidth="0.5" />
      <rect x="5.5" y="4.5" width="80" height="46" fill="#FFFDF8" stroke="#E8DCC8" strokeWidth="0.15" />
      {/* Canvas texture lines (subtle) */}
      <line x1="5.5" y1="10" x2="85.5" y2="10" stroke="#F0E8D8" strokeWidth="0.05" />
      <line x1="5.5" y1="16" x2="85.5" y2="16" stroke="#F0E8D8" strokeWidth="0.05" />
      <line x1="5.5" y1="22" x2="85.5" y2="22" stroke="#F0E8D8" strokeWidth="0.05" />
      <line x1="5.5" y1="28" x2="85.5" y2="28" stroke="#F0E8D8" strokeWidth="0.05" />
      <line x1="5.5" y1="34" x2="85.5" y2="34" stroke="#F0E8D8" strokeWidth="0.05" />
      <line x1="5.5" y1="40" x2="85.5" y2="40" stroke="#F0E8D8" strokeWidth="0.05" />
      <line x1="5.5" y1="46" x2="85.5" y2="46" stroke="#F0E8D8" strokeWidth="0.05" />
      {/* Name painted on canvas */}
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.6"
        fill="#3C1F08"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="500"
        fontSize="2"
        letterSpacing="0.5"
        fill="#92400E"
      >
        {data.nameEn}
      </text>
      {/* Title */}
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#A07850"
      >
        {data.titleJa}
      </text>
      {/* Company at bottom */}
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#C4A882"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FAF5EF" />
      {/* Canvas frame */}
      <rect x="4" y="3" width="83" height="49" fill="none" stroke="#D4A76A" strokeWidth="0.5" />
      <rect x="5.5" y="4.5" width="80" height="46" fill="#FFFDF8" stroke="#E8DCC8" strokeWidth="0.15" />
      {/* Company */}
      <text
        x="45.5"
        y="13"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#3C1F08"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="17"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        letterSpacing="0.3"
        fill="#92400E"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="20" x2="71" y2="20" stroke="#D4A76A" strokeWidth="0.1" />
      {/* Contact */}
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#6B5040"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#6B5040"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="34"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#6B5040"
      >
        {data.website}
      </text>
      <line x1="20" y1="37" x2="71" y2="37" stroke="#D4A76A" strokeWidth="0.08" />
      {/* Address */}
      <text
        x="45.5"
        y="42"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#C4A882"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="45.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#C4A882"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 6. CHISEL (彫刀) — Sculptor/carving inspired
// Angular cuts, stone-like texture, chisel marks
// ============================================================
const chiselTemplate: TemplateDefinition = {
  id: 'creative-chisel',
  name: 'CHISEL',
  nameJa: '彫刀',
  category: 'creative',
  designer: 'Stone Atelier',
  description: '彫刀で削り出された存在感。石と影が生む力強い造形。',
  accentColor: '#6B7280',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#E5E7EB" />
      {/* Chiseled angular shape */}
      <polygon points="0,0 65,0 55,22 0,22" fill="#374151" />
      <line x1="55" y1="22" x2="65" y2="0" stroke="#4B5563" strokeWidth="0.5" />
      {/* Chisel marks / texture lines */}
      <line x1="5" y1="4" x2="50" y2="4" stroke="#4B5563" strokeWidth="0.08" />
      <line x1="5" y1="7" x2="48" y2="7" stroke="#4B5563" strokeWidth="0.06" />
      <line x1="5" y1="10" x2="46" y2="10" stroke="#4B5563" strokeWidth="0.04" />
      {/* Name on stone */}
      <text
        x="8"
        y="16"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="4.5"
        letterSpacing="0.3"
        fill="#F9FAFB"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="20"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="1.6"
        letterSpacing="0.3"
        fill="#9CA3AF"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Below the chisel - on lighter surface */}
      <text
        x="8"
        y="32"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        fill="#374151"
      >
        {data.titleJa}
      </text>
      <text
        x="8"
        y="39"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#6B7280"
      >
        {data.companyJa}
      </text>
      {/* Chisel accent mark */}
      <line x1="8" y1="43" x2="25" y2="43" stroke="#374151" strokeWidth="0.4" />
      <text
        x="8"
        y="47"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#9CA3AF"
      >
        {data.email}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#E5E7EB" />
      {/* Chiseled accent at top */}
      <polygon points="50,0 91,0 91,15 40,15" fill="#374151" />
      <line x1="40" y1="15" x2="50" y2="0" stroke="#4B5563" strokeWidth="0.4" />
      {/* Company on dark */}
      <text
        x="83"
        y="8"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="2.2"
        fill="#F9FAFB"
      >
        {data.companyJa}
      </text>
      <text
        x="83"
        y="12"
        textAnchor="end"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#9CA3AF"
      >
        {data.companyEn}
      </text>
      {/* Contact on light surface */}
      <text
        x="10"
        y="24"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#374151"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="28"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#374151"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#374151"
      >
        {data.website}
      </text>
      <line x1="10" y1="36" x2="55" y2="36" stroke="#9CA3AF" strokeWidth="0.1" />
      {/* Address */}
      <text
        x="10"
        y="41"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#6B7280"
      >
        〒{data.zipCode}
      </text>
      <text
        x="10"
        y="44.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#6B7280"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 7. INK-C (墨彩) — Ink and watercolor creative
// Ink splatters, watercolor washes, bold artistic expression
// ============================================================
const inkCTemplate: TemplateDefinition = {
  id: 'creative-ink-c',
  name: 'INK-C',
  nameJa: '墨彩',
  category: 'creative',
  designer: 'Ink Flow Studio',
  description: '墨と彩りが紡ぐ表現。インクの飛沫が感情を映す。',
  accentColor: '#1E1B4B',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFEF9" />
      {/* Watercolor wash background */}
      <defs>
        <radialGradient id="creative-ink-c-wash1" cx="80%" cy="20%" r="40%">
          <stop offset="0%" stopColor="#818CF8" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#818CF8" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="creative-ink-c-wash2" cx="20%" cy="80%" r="35%">
          <stop offset="0%" stopColor="#F472B6" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#F472B6" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#creative-ink-c-wash1)" />
      <rect width="91" height="55" fill="url(#creative-ink-c-wash2)" />
      {/* Ink splatters */}
      <circle cx="75" cy="10" r="3" fill="#1E1B4B" opacity="0.08" />
      <circle cx="78" cy="8" r="1.5" fill="#1E1B4B" opacity="0.1" />
      <circle cx="72" cy="13" r="0.8" fill="#1E1B4B" opacity="0.12" />
      <circle cx="80" cy="12" r="0.5" fill="#1E1B4B" opacity="0.15" />
      {/* Name */}
      <text
        x="10"
        y="24"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="6"
        letterSpacing="0.5"
        fill="#1E1B4B"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="30"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="500"
        fontSize="2"
        letterSpacing="0.4"
        fill="#4338CA"
      >
        {data.nameEn}
      </text>
      {/* Ink stroke separator */}
      <path d="M10 34 Q25 32 40 34 Q50 36 60 34" fill="none" stroke="#1E1B4B" strokeWidth="0.2" opacity="0.3" strokeLinecap="round" />
      {/* Title */}
      <text
        x="10"
        y="40"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.7"
        fill="#6366F1"
      >
        {data.titleJa}
      </text>
      {/* Company */}
      <text
        x="10"
        y="48"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#A5B4FC"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFEF9" />
      {/* Subtle wash */}
      <defs>
        <radialGradient id="creative-ink-c-wash3" cx="70%" cy="70%" r="40%">
          <stop offset="0%" stopColor="#818CF8" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#818CF8" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#creative-ink-c-wash3)" />
      {/* Company */}
      <text
        x="10"
        y="12"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#1E1B4B"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="16"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#6366F1"
      >
        {data.companyEn}
      </text>
      <path d="M10 19 Q30 17.5 50 19" fill="none" stroke="#1E1B4B" strokeWidth="0.15" opacity="0.3" strokeLinecap="round" />
      {/* Contact */}
      <text
        x="10"
        y="25"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#312E81"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="29"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#312E81"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="33"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#312E81"
      >
        {data.website}
      </text>
      {/* Address */}
      <text
        x="10"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#A5B4FC"
      >
        〒{data.zipCode}
      </text>
      <text
        x="10"
        y="45.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#A5B4FC"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 8. PRISM-C (虹彩C) — Light refraction / rainbow prism
// Rainbow gradient accents, triangular prism shape, light play
// ============================================================
const prismCTemplate: TemplateDefinition = {
  id: 'creative-prism-c',
  name: 'PRISM-C',
  nameJa: '虹彩C',
  category: 'creative',
  designer: 'Spectrum Lab',
  description: 'プリズムが放つ七色の光。分光された美が名刺に宿る。',
  accentColor: '#7C3AED',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FAFAFA" />
      {/* Prism triangle */}
      <defs>
        <linearGradient id="creative-prism-c-rainbow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#EF4444" />
          <stop offset="17%" stopColor="#F97316" />
          <stop offset="33%" stopColor="#EAB308" />
          <stop offset="50%" stopColor="#22C55E" />
          <stop offset="67%" stopColor="#3B82F6" />
          <stop offset="83%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>
      </defs>
      <polygon points="70,5 82,25 58,25" fill="none" stroke="#333" strokeWidth="0.2" />
      {/* Light beam entering prism */}
      <line x1="91" y1="2" x2="74" y2="13" stroke="#999" strokeWidth="0.15" />
      {/* Rainbow beams exiting */}
      <line x1="64" y1="22" x2="8" y2="38" stroke="#EF4444" strokeWidth="0.12" opacity="0.6" />
      <line x1="64" y1="23" x2="8" y2="40" stroke="#F97316" strokeWidth="0.12" opacity="0.6" />
      <line x1="64" y1="24" x2="8" y2="42" stroke="#EAB308" strokeWidth="0.12" opacity="0.6" />
      <line x1="63" y1="25" x2="8" y2="44" stroke="#22C55E" strokeWidth="0.12" opacity="0.6" />
      <line x1="62" y1="25.5" x2="8" y2="46" stroke="#3B82F6" strokeWidth="0.12" opacity="0.6" />
      <line x1="61" y1="26" x2="8" y2="48" stroke="#6366F1" strokeWidth="0.12" opacity="0.6" />
      <line x1="60" y1="26.5" x2="8" y2="50" stroke="#A855F7" strokeWidth="0.12" opacity="0.6" />
      {/* Name */}
      <text
        x="10"
        y="15"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="5.5"
        letterSpacing="0.4"
        fill="#1A1A1A"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="21"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.3"
        fill="#7C3AED"
      >
        {data.nameEn}
      </text>
      {/* Title */}
      <text
        x="10"
        y="28"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#6B7280"
      >
        {data.titleJa}
      </text>
      {/* Rainbow bar at bottom */}
      <rect x="0" y="53" width="91" height="2" fill="url(#creative-prism-c-rainbow)" opacity="0.6" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FAFAFA" />
      {/* Rainbow bar at top */}
      <rect x="0" y="0" width="91" height="1.5" fill="url(#creative-prism-c-rainbow)" opacity="0.5" />
      {/* Company */}
      <text
        x="45.5"
        y="12"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#1A1A1A"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="16"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#7C3AED"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="19" x2="71" y2="19" stroke="#E5E7EB" strokeWidth="0.15" />
      {/* Contact */}
      <text
        x="45.5"
        y="25"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#4B5563"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="29"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#4B5563"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="33"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#4B5563"
      >
        {data.website}
      </text>
      <line x1="20" y1="36.5" x2="71" y2="36.5" stroke="#E5E7EB" strokeWidth="0.1" />
      {/* Address */}
      <text
        x="45.5"
        y="42"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#9CA3AF"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="45.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#9CA3AF"
      >
        {data.addressJa}
      </text>
      {/* Rainbow bar at bottom */}
      <rect x="0" y="53.5" width="91" height="1.5" fill="url(#creative-prism-c-rainbow)" opacity="0.5" />
    </g>
  ),
};

// ============================================================
// 9. COLLAGE (拼) — Collage / mixed media inspired
// Overlapping rectangles, layered elements, mixed textures
// ============================================================
const collageTemplate: TemplateDefinition = {
  id: 'creative-collage',
  name: 'COLLAGE',
  nameJa: '拼',
  category: 'creative',
  designer: 'Mixed Media Co.',
  description: '断片を重ねて生まれる美。コラージュの重層的な表現。',
  accentColor: '#DC2626',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F5F0" />
      {/* Collage layers - overlapping rectangles */}
      <rect x="55" y="2" width="25" height="18" fill="#FEE2E2" stroke="#FECACA" strokeWidth="0.1" transform="rotate(3, 67.5, 11)" />
      <rect x="60" y="5" width="22" height="14" fill="#DBEAFE" stroke="#BFDBFE" strokeWidth="0.1" transform="rotate(-2, 71, 12)" />
      <rect x="5" y="35" width="20" height="15" fill="#FEF3C7" stroke="#FDE68A" strokeWidth="0.1" transform="rotate(2, 15, 42.5)" />
      {/* Torn paper edge hint */}
      <path d="M50 2 L52 4 L50 6 L53 8 L50 10" stroke="#E5E7EB" strokeWidth="0.1" fill="none" />
      {/* Name - bold, collage-style placement */}
      <text
        x="12"
        y="19"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="6.5"
        fill="#1A1A1A"
      >
        {data.nameJa}
      </text>
      <text
        x="12"
        y="25"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="2"
        letterSpacing="0.3"
        fill="#DC2626"
      >
        {data.nameEn}
      </text>
      {/* Title on a "paper scrap" */}
      <rect x="10" y="28" width="38" height="5" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="0.08" />
      <text
        x="12"
        y="32"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.7"
        fill="#4B5563"
      >
        {data.titleJa}
      </text>
      {/* Company overlapping */}
      <text
        x="30"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#9CA3AF"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F5F0" />
      {/* Collage scrap elements */}
      <rect x="60" y="35" width="22" height="14" fill="#FEE2E2" stroke="#FECACA" strokeWidth="0.08" transform="rotate(-2, 71, 42)" />
      <rect x="5" y="2" width="18" height="12" fill="#DBEAFE" stroke="#BFDBFE" strokeWidth="0.08" transform="rotate(1, 14, 8)" />
      {/* Company on scrap */}
      <text
        x="10"
        y="10"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="2.2"
        fill="#1A1A1A"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="14.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#DC2626"
      >
        {data.companyEn}
      </text>
      {/* Contact on clean area */}
      <rect x="8" y="18" width="50" height="18" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="0.08" />
      <text
        x="12"
        y="23"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#374151"
      >
        {data.tel}
      </text>
      <text
        x="12"
        y="27"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#374151"
      >
        {data.email}
      </text>
      <text
        x="12"
        y="31"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#374151"
      >
        {data.website}
      </text>
      {/* Address */}
      <text
        x="10"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#9CA3AF"
      >
        〒{data.zipCode}
      </text>
      <text
        x="10"
        y="45.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#9CA3AF"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 10. SKETCH (素描) — Pencil sketch / drawing inspired
// Hand-drawn aesthetic, sketch lines, graphite tones
// ============================================================
const sketchTemplate: TemplateDefinition = {
  id: 'creative-sketch',
  name: 'SKETCH',
  nameJa: '素描',
  category: 'creative',
  designer: 'Pencil Lab',
  description: '鉛筆のスケッチのような素朴さ。下描きの中に完成形を見る。',
  accentColor: '#57534E',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FAFAF9" />
      {/* Sketch grid lines */}
      <line x1="0" y1="13.75" x2="91" y2="13.75" stroke="#E7E5E4" strokeWidth="0.05" />
      <line x1="0" y1="27.5" x2="91" y2="27.5" stroke="#E7E5E4" strokeWidth="0.05" />
      <line x1="0" y1="41.25" x2="91" y2="41.25" stroke="#E7E5E4" strokeWidth="0.05" />
      <line x1="22.75" y1="0" x2="22.75" y2="55" stroke="#E7E5E4" strokeWidth="0.05" />
      <line x1="45.5" y1="0" x2="45.5" y2="55" stroke="#E7E5E4" strokeWidth="0.05" />
      <line x1="68.25" y1="0" x2="68.25" y2="55" stroke="#E7E5E4" strokeWidth="0.05" />
      {/* Sketch-style frame with hand-drawn feel */}
      <path d="M6 5 L84 5.3 L84.2 49.5 L5.8 49.8 Z" fill="none" stroke="#A8A29E" strokeWidth="0.12" />
      {/* Cross registration marks */}
      <line x1="2" y1="27.5" x2="4" y2="27.5" stroke="#A8A29E" strokeWidth="0.1" />
      <line x1="3" y1="26.5" x2="3" y2="28.5" stroke="#A8A29E" strokeWidth="0.1" />
      <line x1="87" y1="27.5" x2="89" y2="27.5" stroke="#A8A29E" strokeWidth="0.1" />
      <line x1="88" y1="26.5" x2="88" y2="28.5" stroke="#A8A29E" strokeWidth="0.1" />
      {/* Name in pencil-like weight */}
      <text
        x="45.5"
        y="21"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#44403C"
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
        letterSpacing="0.4"
        fill="#78716C"
      >
        {data.nameEn}
      </text>
      {/* Sketch underline */}
      <path d="M25 30 Q35 29.5 45.5 30 Q56 30.5 66 30" fill="none" stroke="#A8A29E" strokeWidth="0.15" strokeLinecap="round" />
      {/* Title */}
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.7"
        fill="#78716C"
      >
        {data.titleJa}
      </text>
      {/* Company */}
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#A8A29E"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FAFAF9" />
      {/* Grid lines */}
      <line x1="0" y1="13.75" x2="91" y2="13.75" stroke="#E7E5E4" strokeWidth="0.05" />
      <line x1="0" y1="27.5" x2="91" y2="27.5" stroke="#E7E5E4" strokeWidth="0.05" />
      <line x1="0" y1="41.25" x2="91" y2="41.25" stroke="#E7E5E4" strokeWidth="0.05" />
      <line x1="22.75" y1="0" x2="22.75" y2="55" stroke="#E7E5E4" strokeWidth="0.05" />
      <line x1="45.5" y1="0" x2="45.5" y2="55" stroke="#E7E5E4" strokeWidth="0.05" />
      <line x1="68.25" y1="0" x2="68.25" y2="55" stroke="#E7E5E4" strokeWidth="0.05" />
      {/* Sketch frame */}
      <path d="M6 5 L84 5.2 L84.3 49.5 L5.8 49.7 Z" fill="none" stroke="#A8A29E" strokeWidth="0.1" />
      {/* Company */}
      <text
        x="45.5"
        y="13"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#44403C"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="17"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#78716C"
      >
        {data.companyEn}
      </text>
      <path d="M20 20 Q35 19.5 45.5 20 Q56 20.5 71 20" fill="none" stroke="#A8A29E" strokeWidth="0.1" strokeLinecap="round" />
      {/* Contact */}
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#57534E"
      >
        {data.tel}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#57534E"
      >
        {data.email}
      </text>
      <text
        x="45.5"
        y="34"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#57534E"
      >
        {data.website}
      </text>
      <path d="M20 37 Q35 36.5 45.5 37 Q56 37.5 71 37" fill="none" stroke="#A8A29E" strokeWidth="0.08" strokeLinecap="round" />
      {/* Address */}
      <text
        x="45.5"
        y="42"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#A8A29E"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="45.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#A8A29E"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

export const creativeTemplates: TemplateDefinition[] = [
  sparkTemplate,
  museTemplate,
  visionTemplate,
  paletteTemplate,
  canvasTemplate,
  chiselTemplate,
  inkCTemplate,
  prismCTemplate,
  collageTemplate,
  sketchTemplate,
];
