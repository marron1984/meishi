import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. SILICON (谷) — Apple / Jony Ive inspired
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
      <rect width="91" height="55" fill="#ffffff" />
      {/* Subtle top accent line */}
      <line x1="8" y1="6" x2="20" y2="6" stroke="#D2D2D7" strokeWidth="0.3" />
      <text
        x="8"
        y="22"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="5.5"
        letterSpacing="0.15"
        fill="#1D1D1F"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="28"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.4"
        fill="#86868B"
      >
        {data.nameEn}
      </text>
      <text
        x="8"
        y="34"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        letterSpacing="0.2"
        fill="#A1A1A6"
      >
        {data.titleJa}
      </text>
      <text
        x="8"
        y="48"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        letterSpacing="0.15"
        fill="#A1A1A6"
      >
        {data.companyEn}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      <text
        x="8"
        y="12"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        letterSpacing="0.3"
        fill="#1D1D1F"
      >
        {data.companyJa}
      </text>
      <text
        x="8"
        y="16.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        letterSpacing="0.3"
        fill="#86868B"
      >
        {data.companyEn}
      </text>
      <line x1="8" y1="21" x2="83" y2="21" stroke="#D2D2D7" strokeWidth="0.15" />
      <text
        x="8"
        y="27"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        letterSpacing="0.1"
        fill="#6E6E73"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="31"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        letterSpacing="0.1"
        fill="#6E6E73"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="35"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        letterSpacing="0.1"
        fill="#6E6E73"
      >
        {data.website}
      </text>
      <line x1="8" y1="39" x2="83" y2="39" stroke="#D2D2D7" strokeWidth="0.15" />
      <text
        x="8"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#A1A1A6"
      >
        〒{data.zipCode}
      </text>
      <text
        x="8"
        y="47.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#A1A1A6"
      >
        {data.addressJa}
      </text>
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
      <rect width="91" height="55" fill="#0D1117" />
      {/* Scanline effect */}
      <defs>
        <pattern id="terminal-scanlines" width="91" height="1.5" patternUnits="userSpaceOnUse">
          <rect width="91" height="0.75" fill="transparent" />
          <rect y="0.75" width="91" height="0.75" fill="rgba(0,255,65,0.015)" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#terminal-scanlines)" />
      {/* Prompt symbol */}
      <text
        x="6"
        y="14"
        fontFamily="'Space Grotesk', monospace"
        fontWeight="400"
        fontSize="1.6"
        fill="#00FF41"
        opacity="0.5"
      >
        {'$> whoami'}
      </text>
      <text
        x="6"
        y="24"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="0.3"
        fill="#00FF41"
      >
        {data.nameJa}
      </text>
      <text
        x="6"
        y="30"
        fontFamily="'Space Grotesk', monospace"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.3"
        fill="#00FF41"
        opacity="0.8"
      >
        {data.nameEn}
      </text>
      <text
        x="6"
        y="36"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#00FF41"
        opacity="0.5"
      >
        {data.titleJa}
      </text>
      {/* Blinking cursor */}
      <rect x="6" y="42" width="3" height="0.4" fill="#00FF41" opacity="0.7" />
      <text
        x="6"
        y="49"
        fontFamily="'Space Grotesk', monospace"
        fontWeight="400"
        fontSize="1.2"
        fill="#0E4F1F"
      >
        // {data.companyEn}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0D1117" />
      <defs>
        <pattern id="terminal-scanlines-back" width="91" height="1.5" patternUnits="userSpaceOnUse">
          <rect width="91" height="0.75" fill="transparent" />
          <rect y="0.75" width="91" height="0.75" fill="rgba(0,255,65,0.015)" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#terminal-scanlines-back)" />
      <text
        x="6"
        y="10"
        fontFamily="'Space Grotesk', monospace"
        fontWeight="400"
        fontSize="1.3"
        fill="#00FF41"
        opacity="0.4"
      >
        {'$> cat contact.txt'}
      </text>
      <text
        x="6"
        y="16"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2"
        fill="#00FF41"
        opacity="0.9"
      >
        {data.companyJa}
      </text>
      <text
        x="6"
        y="20"
        fontFamily="'Space Grotesk', monospace"
        fontWeight="300"
        fontSize="1.3"
        fill="#00FF41"
        opacity="0.6"
      >
        {data.companyEn}
      </text>
      <line x1="6" y1="23" x2="85" y2="23" stroke="#00FF41" strokeWidth="0.1" opacity="0.2" />
      <text
        x="6"
        y="28"
        fontFamily="'Space Grotesk', monospace"
        fontWeight="400"
        fontSize="1.3"
        fill="#00FF41"
        opacity="0.7"
      >
        TEL: {data.tel}
      </text>
      <text
        x="6"
        y="32"
        fontFamily="'Space Grotesk', monospace"
        fontWeight="400"
        fontSize="1.3"
        fill="#00FF41"
        opacity="0.7"
      >
        EMAIL: {data.email}
      </text>
      <text
        x="6"
        y="36"
        fontFamily="'Space Grotesk', monospace"
        fontWeight="400"
        fontSize="1.3"
        fill="#00FF41"
        opacity="0.7"
      >
        WEB: {data.website}
      </text>
      <line x1="6" y1="39" x2="85" y2="39" stroke="#00FF41" strokeWidth="0.1" opacity="0.2" />
      <text
        x="6"
        y="43.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#00FF41"
        opacity="0.4"
      >
        〒{data.zipCode}
      </text>
      <text
        x="6"
        y="47"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#00FF41"
        opacity="0.4"
      >
        {data.addressJa}
      </text>
      <rect x="6" y="50" width="3" height="0.4" fill="#00FF41" opacity="0.7" />
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
      <rect width="91" height="55" fill="#FAFAFA" />
      {/* Material shadow card */}
      <rect x="5" y="5" width="81" height="45" rx="0.8" fill="#FFFFFF" />
      <rect x="5.3" y="5.3" width="81" height="45" rx="0.8" fill="none" stroke="#E0E0E0" strokeWidth="0.15" />
      {/* Top colored bar */}
      <rect x="5" y="5" width="81" height="3.5" rx="0.8" fill="#4285F4" />
      <rect x="5" y="7" width="81" height="1.5" fill="#4285F4" />
      {/* Content */}
      <text
        x="12"
        y="18"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5"
        letterSpacing="0.2"
        fill="#212121"
      >
        {data.nameJa}
      </text>
      <text
        x="12"
        y="23"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.15"
        fill="#757575"
      >
        {data.nameEn}
      </text>
      <text
        x="12"
        y="28.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#9E9E9E"
      >
        {data.titleJa}
      </text>
      {/* Divider */}
      <line x1="12" y1="32" x2="80" y2="32" stroke="#E0E0E0" strokeWidth="0.15" />
      <text
        x="12"
        y="37"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#757575"
      >
        {data.email}
      </text>
      <text
        x="12"
        y="41"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#757575"
      >
        {data.tel}
      </text>
      {/* FAB-like accent circle */}
      <circle cx="78" cy="38" r="3.5" fill="#4285F4" opacity="0.1" />
      <circle cx="78" cy="38" r="1.5" fill="#4285F4" opacity="0.3" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FAFAFA" />
      <rect x="5" y="5" width="81" height="45" rx="0.8" fill="#FFFFFF" />
      <rect x="5.3" y="5.3" width="81" height="45" rx="0.8" fill="none" stroke="#E0E0E0" strokeWidth="0.15" />
      {/* Top colored bar */}
      <rect x="5" y="5" width="81" height="3.5" rx="0.8" fill="#4285F4" />
      <rect x="5" y="7" width="81" height="1.5" fill="#4285F4" />
      <text
        x="12"
        y="16"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#212121"
      >
        {data.companyJa}
      </text>
      <text
        x="12"
        y="20"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        letterSpacing="0.15"
        fill="#757575"
      >
        {data.companyEn}
      </text>
      <line x1="12" y1="23" x2="80" y2="23" stroke="#E0E0E0" strokeWidth="0.15" />
      <text
        x="12"
        y="28"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#616161"
      >
        {data.tel}
      </text>
      <text
        x="12"
        y="32"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#616161"
      >
        {data.email}
      </text>
      <text
        x="12"
        y="36"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#616161"
      >
        {data.website}
      </text>
      <line x1="12" y1="39" x2="80" y2="39" stroke="#E0E0E0" strokeWidth="0.15" />
      <text
        x="12"
        y="43.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#9E9E9E"
      >
        〒{data.zipCode}
      </text>
      <text
        x="12"
        y="47"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#9E9E9E"
      >
        {data.addressJa}
      </text>
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
      <rect width="91" height="55" fill="#111111" />
      {/* Subtle border */}
      <rect x="0.5" y="0.5" width="90" height="54" rx="0" fill="none" stroke="#2A2A2A" strokeWidth="0.2" />
      {/* Thin accent line */}
      <line x1="7" y1="7" x2="25" y2="7" stroke="#3A3A3A" strokeWidth="0.3" />
      <text
        x="7"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.3"
        fill="#FFFFFF"
      >
        {data.nameJa}
      </text>
      <text
        x="7"
        y="28"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.4"
        fill="#888888"
      >
        {data.nameEn}
      </text>
      <text
        x="7"
        y="34"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#555555"
      >
        {data.titleJa}
      </text>
      {/* Bottom accent */}
      <line x1="7" y1="48" x2="84" y2="48" stroke="#2A2A2A" strokeWidth="0.15" />
      <text
        x="84"
        y="47"
        textAnchor="end"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        letterSpacing="0.2"
        fill="#444444"
      >
        {data.companyEn}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#111111" />
      <rect x="0.5" y="0.5" width="90" height="54" rx="0" fill="none" stroke="#2A2A2A" strokeWidth="0.2" />
      <text
        x="7"
        y="13"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#FFFFFF"
      >
        {data.companyJa}
      </text>
      <text
        x="7"
        y="17.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        letterSpacing="0.2"
        fill="#666666"
      >
        {data.companyEn}
      </text>
      <line x1="7" y1="21" x2="84" y2="21" stroke="#2A2A2A" strokeWidth="0.15" />
      <text
        x="7"
        y="27"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#AAAAAA"
      >
        {data.tel}
      </text>
      <text
        x="7"
        y="31"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#AAAAAA"
      >
        {data.email}
      </text>
      <text
        x="7"
        y="35"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#AAAAAA"
      >
        {data.website}
      </text>
      <line x1="7" y1="39" x2="84" y2="39" stroke="#2A2A2A" strokeWidth="0.15" />
      <text
        x="7"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#555555"
      >
        〒{data.zipCode}
      </text>
      <text
        x="7"
        y="47.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#555555"
      >
        {data.addressJa}
      </text>
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
      <rect width="91" height="55" fill="#000000" />
      <defs>
        <linearGradient id="cyber-glow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00FFFF" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FF00FF" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      {/* Subtle gradient overlay */}
      <rect width="91" height="55" fill="url(#cyber-glow)" />
      {/* Neon border lines */}
      <line x1="4" y1="4" x2="20" y2="4" stroke="#00FFFF" strokeWidth="0.3" opacity="0.8" />
      <line x1="4" y1="4" x2="4" y2="15" stroke="#00FFFF" strokeWidth="0.3" opacity="0.8" />
      <line x1="71" y1="51" x2="87" y2="51" stroke="#00FFFF" strokeWidth="0.3" opacity="0.4" />
      <line x1="87" y1="40" x2="87" y2="51" stroke="#00FFFF" strokeWidth="0.3" opacity="0.4" />
      {/* Glitch decoration */}
      <rect x="4" y="17" width="12" height="0.3" fill="#FF00FF" opacity="0.3" />
      <rect x="4" y="18" width="8" height="0.3" fill="#00FFFF" opacity="0.2" />
      <text
        x="7"
        y="28"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="6"
        letterSpacing="0.4"
        fill="#00FFFF"
      >
        {data.nameJa}
      </text>
      <text
        x="7"
        y="34"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        letterSpacing="0.5"
        fill="#00FFFF"
        opacity="0.6"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="7"
        y="39"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#FF00FF"
        opacity="0.5"
      >
        {data.titleJa}
      </text>
      {/* Small decorative dots */}
      <circle cx="80" cy="8" r="0.4" fill="#00FFFF" opacity="0.6" />
      <circle cx="83" cy="8" r="0.4" fill="#FF00FF" opacity="0.4" />
      <circle cx="86" cy="8" r="0.4" fill="#00FFFF" opacity="0.2" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#000000" />
      <defs>
        <linearGradient id="cyber-glow-back" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00FFFF" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#FF00FF" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#cyber-glow-back)" />
      {/* Corner accents */}
      <line x1="4" y1="4" x2="12" y2="4" stroke="#00FFFF" strokeWidth="0.2" opacity="0.6" />
      <line x1="4" y1="4" x2="4" y2="10" stroke="#00FFFF" strokeWidth="0.2" opacity="0.6" />
      <text
        x="7"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#00FFFF"
        opacity="0.9"
      >
        {data.companyJa}
      </text>
      <text
        x="7"
        y="18.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        letterSpacing="0.3"
        fill="#00FFFF"
        opacity="0.5"
      >
        {data.companyEn}
      </text>
      <line x1="7" y1="22" x2="84" y2="22" stroke="#00FFFF" strokeWidth="0.1" opacity="0.3" />
      <text
        x="7"
        y="28"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#00FFFF"
        opacity="0.7"
      >
        {data.tel}
      </text>
      <text
        x="7"
        y="32"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#00FFFF"
        opacity="0.7"
      >
        {data.email}
      </text>
      <text
        x="7"
        y="36"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#00FFFF"
        opacity="0.7"
      >
        {data.website}
      </text>
      <line x1="7" y1="39.5" x2="84" y2="39.5" stroke="#FF00FF" strokeWidth="0.1" opacity="0.2" />
      <text
        x="7"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#FF00FF"
        opacity="0.4"
      >
        〒{data.zipCode}
      </text>
      <text
        x="7"
        y="47.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#FF00FF"
        opacity="0.4"
      >
        {data.addressJa}
      </text>
      {/* Bottom corner */}
      <line x1="79" y1="51" x2="87" y2="51" stroke="#00FFFF" strokeWidth="0.2" opacity="0.4" />
      <line x1="87" y1="45" x2="87" y2="51" stroke="#00FFFF" strokeWidth="0.2" opacity="0.4" />
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
      <rect width="91" height="55" fill="#FFFFFF" />
      {/* Mini bar chart decoration */}
      <rect x="68" y="8" width="2" height="8" rx="0.3" fill="#6366F1" opacity="0.15" />
      <rect x="72" y="11" width="2" height="5" rx="0.3" fill="#6366F1" opacity="0.25" />
      <rect x="76" y="6" width="2" height="10" rx="0.3" fill="#6366F1" opacity="0.35" />
      <rect x="80" y="9" width="2" height="7" rx="0.3" fill="#6366F1" opacity="0.2" />
      <rect x="84" y="4" width="2" height="12" rx="0.3" fill="#6366F1" opacity="0.45" />
      {/* Axis line */}
      <line x1="67" y1="16.5" x2="87" y2="16.5" stroke="#6366F1" strokeWidth="0.15" opacity="0.3" />
      <text
        x="7"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="5.5"
        letterSpacing="0.2"
        fill="#1E1B4B"
      >
        {data.nameJa}
      </text>
      <text
        x="7"
        y="27.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.25"
        fill="#6366F1"
      >
        {data.nameEn}
      </text>
      <text
        x="7"
        y="33"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#94A3B8"
      >
        {data.titleJa}
      </text>
      {/* Mini scatter dots decoration bottom */}
      <circle cx="60" cy="44" r="0.5" fill="#6366F1" opacity="0.15" />
      <circle cx="65" cy="42" r="0.7" fill="#6366F1" opacity="0.2" />
      <circle cx="70" cy="46" r="0.4" fill="#6366F1" opacity="0.25" />
      <circle cx="75" cy="43" r="0.6" fill="#6366F1" opacity="0.1" />
      <circle cx="80" cy="45" r="0.5" fill="#6366F1" opacity="0.3" />
      <circle cx="84" cy="41" r="0.8" fill="#6366F1" opacity="0.15" />
      <text
        x="7"
        y="48"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#94A3B8"
      >
        {data.companyEn}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#FFFFFF" />
      {/* Grid dots pattern background */}
      <defs>
        <pattern id="data-grid" width="5" height="5" patternUnits="userSpaceOnUse">
          <circle cx="2.5" cy="2.5" r="0.15" fill="#6366F1" opacity="0.1" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#data-grid)" />
      {/* Mini line chart decoration top-right */}
      <polyline
        points="60,8 65,12 70,9 75,14 80,10 85,7"
        fill="none"
        stroke="#6366F1"
        strokeWidth="0.3"
        opacity="0.25"
      />
      <text
        x="7"
        y="13"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#1E1B4B"
      >
        {data.companyJa}
      </text>
      <text
        x="7"
        y="17"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        letterSpacing="0.15"
        fill="#6366F1"
        opacity="0.7"
      >
        {data.companyEn}
      </text>
      <line x1="7" y1="20.5" x2="50" y2="20.5" stroke="#6366F1" strokeWidth="0.15" opacity="0.3" />
      <text
        x="7"
        y="26"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#475569"
      >
        {data.tel}
      </text>
      <text
        x="7"
        y="30"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#475569"
      >
        {data.email}
      </text>
      <text
        x="7"
        y="34"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#475569"
      >
        {data.website}
      </text>
      <line x1="7" y1="37.5" x2="50" y2="37.5" stroke="#6366F1" strokeWidth="0.15" opacity="0.3" />
      <text
        x="7"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#94A3B8"
      >
        〒{data.zipCode}
      </text>
      <text
        x="7"
        y="45.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#94A3B8"
      >
        {data.addressJa}
      </text>
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
      <rect width="91" height="55" fill="#1A1A2E" />
      {/* Code bracket decorations */}
      <text
        x="5"
        y="10"
        fontFamily="'Space Grotesk', monospace"
        fontWeight="300"
        fontSize="3"
        fill="#F97316"
        opacity="0.3"
      >
        {'{ '}
      </text>
      <text
        x="79"
        y="52"
        fontFamily="'Space Grotesk', monospace"
        fontWeight="300"
        fontSize="3"
        fill="#F97316"
        opacity="0.3"
      >
        {' }'}
      </text>
      {/* Syntax-like comment */}
      <text
        x="12"
        y="13"
        fontFamily="'Space Grotesk', monospace"
        fontWeight="300"
        fontSize="1.2"
        fill="#4A5568"
      >
        {'// identity'}
      </text>
      <text
        x="12"
        y="23"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="5.5"
        letterSpacing="0.3"
        fill="#FFFFFF"
      >
        {data.nameJa}
      </text>
      <text
        x="12"
        y="29"
        fontFamily="'Space Grotesk', monospace"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.3"
        fill="#F97316"
      >
        {data.nameEn}
      </text>
      {/* Role as key:value */}
      <text
        x="12"
        y="36"
        fontFamily="'Space Grotesk', monospace"
        fontWeight="300"
        fontSize="1.3"
        fill="#4A5568"
      >
        {'role: '}
        <tspan fill="#A78BFA">{data.titleEn}</tspan>
      </text>
      <text
        x="12"
        y="43"
        fontFamily="'Space Grotesk', monospace"
        fontWeight="300"
        fontSize="1.3"
        fill="#4A5568"
      >
        {'org: '}
        <tspan fill="#A78BFA">{data.companyEn}</tspan>
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1A1A2E" />
      {/* Opening bracket */}
      <text
        x="5"
        y="10"
        fontFamily="'Space Grotesk', monospace"
        fontWeight="300"
        fontSize="2.5"
        fill="#F97316"
        opacity="0.3"
      >
        {'{ '}
      </text>
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2"
        fill="#FFFFFF"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18"
        fontFamily="'Space Grotesk', monospace"
        fontWeight="300"
        fontSize="1.3"
        fill="#F97316"
        opacity="0.7"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="21" x2="81" y2="21" stroke="#2D2D4A" strokeWidth="0.15" />
      {/* Contact as JSON-like key:value */}
      <text
        x="10"
        y="26"
        fontFamily="'Space Grotesk', monospace"
        fontWeight="300"
        fontSize="1.3"
        fill="#4A5568"
      >
        {'tel: '}
        <tspan fill="#6EE7B7">"{data.tel}"</tspan>
      </text>
      <text
        x="10"
        y="30"
        fontFamily="'Space Grotesk', monospace"
        fontWeight="300"
        fontSize="1.3"
        fill="#4A5568"
      >
        {'email: '}
        <tspan fill="#6EE7B7">"{data.email}"</tspan>
      </text>
      <text
        x="10"
        y="34"
        fontFamily="'Space Grotesk', monospace"
        fontWeight="300"
        fontSize="1.3"
        fill="#4A5568"
      >
        {'web: '}
        <tspan fill="#6EE7B7">"{data.website}"</tspan>
      </text>
      <line x1="10" y1="37" x2="81" y2="37" stroke="#2D2D4A" strokeWidth="0.15" />
      <text
        x="10"
        y="41.5"
        fontFamily="'Space Grotesk', monospace"
        fontWeight="300"
        fontSize="1.1"
        fill="#4A5568"
      >
        {'zip: '}
        <tspan fill="#A78BFA">"{data.zipCode}"</tspan>
      </text>
      <text
        x="10"
        y="45.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.1"
        fill="#4A5568"
      >
        {data.addressJa}
      </text>
      {/* Closing bracket */}
      <text
        x="79"
        y="52"
        fontFamily="'Space Grotesk', monospace"
        fontWeight="300"
        fontSize="2.5"
        fill="#F97316"
        opacity="0.3"
      >
        {' }'}
      </text>
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
        <linearGradient id="neural-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1E3A5F" />
          <stop offset="100%" stopColor="#2D1B69" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#neural-grad)" />
      {/* Neural network nodes and connections */}
      {/* Layer 1 */}
      <circle cx="70" cy="8" r="0.8" fill="#8B5CF6" opacity="0.4" />
      <circle cx="78" cy="12" r="0.6" fill="#60A5FA" opacity="0.5" />
      <circle cx="85" cy="7" r="0.7" fill="#8B5CF6" opacity="0.3" />
      <circle cx="74" cy="16" r="0.5" fill="#60A5FA" opacity="0.4" />
      <circle cx="82" cy="18" r="0.9" fill="#8B5CF6" opacity="0.35" />
      {/* Connections */}
      <line x1="70" y1="8" x2="78" y2="12" stroke="#8B5CF6" strokeWidth="0.12" opacity="0.3" />
      <line x1="78" y1="12" x2="85" y2="7" stroke="#60A5FA" strokeWidth="0.12" opacity="0.25" />
      <line x1="78" y1="12" x2="74" y2="16" stroke="#8B5CF6" strokeWidth="0.12" opacity="0.3" />
      <line x1="74" y1="16" x2="82" y2="18" stroke="#60A5FA" strokeWidth="0.12" opacity="0.25" />
      <line x1="70" y1="8" x2="74" y2="16" stroke="#8B5CF6" strokeWidth="0.12" opacity="0.2" />
      <line x1="85" y1="7" x2="82" y2="18" stroke="#60A5FA" strokeWidth="0.12" opacity="0.2" />
      <text
        x="7"
        y="24"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="0.3"
        fill="#FFFFFF"
      >
        {data.nameJa}
      </text>
      <text
        x="7"
        y="30"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.4"
        fill="#A78BFA"
      >
        {data.nameEn}
      </text>
      <text
        x="7"
        y="36"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#7C6EB0"
      >
        {data.titleJa}
      </text>
      {/* Bottom network nodes */}
      <circle cx="8" cy="46" r="0.5" fill="#60A5FA" opacity="0.3" />
      <circle cx="15" cy="48" r="0.4" fill="#8B5CF6" opacity="0.25" />
      <circle cx="22" cy="45" r="0.6" fill="#60A5FA" opacity="0.2" />
      <line x1="8" y1="46" x2="15" y2="48" stroke="#60A5FA" strokeWidth="0.1" opacity="0.2" />
      <line x1="15" y1="48" x2="22" y2="45" stroke="#8B5CF6" strokeWidth="0.1" opacity="0.2" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="neural-grad-back" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1E3A5F" />
          <stop offset="100%" stopColor="#2D1B69" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#neural-grad-back)" />
      {/* Neural network decoration across top */}
      <circle cx="10" cy="6" r="0.5" fill="#60A5FA" opacity="0.3" />
      <circle cx="20" cy="4" r="0.7" fill="#8B5CF6" opacity="0.25" />
      <circle cx="30" cy="7" r="0.4" fill="#60A5FA" opacity="0.35" />
      <circle cx="40" cy="5" r="0.6" fill="#8B5CF6" opacity="0.2" />
      <circle cx="50" cy="3" r="0.5" fill="#60A5FA" opacity="0.3" />
      <circle cx="60" cy="6" r="0.8" fill="#8B5CF6" opacity="0.2" />
      <circle cx="70" cy="4" r="0.4" fill="#60A5FA" opacity="0.25" />
      <circle cx="80" cy="7" r="0.6" fill="#8B5CF6" opacity="0.3" />
      <line x1="10" y1="6" x2="20" y2="4" stroke="#60A5FA" strokeWidth="0.1" opacity="0.2" />
      <line x1="20" y1="4" x2="30" y2="7" stroke="#8B5CF6" strokeWidth="0.1" opacity="0.15" />
      <line x1="30" y1="7" x2="40" y2="5" stroke="#60A5FA" strokeWidth="0.1" opacity="0.2" />
      <line x1="40" y1="5" x2="50" y2="3" stroke="#8B5CF6" strokeWidth="0.1" opacity="0.15" />
      <line x1="50" y1="3" x2="60" y2="6" stroke="#60A5FA" strokeWidth="0.1" opacity="0.2" />
      <line x1="60" y1="6" x2="70" y2="4" stroke="#8B5CF6" strokeWidth="0.1" opacity="0.15" />
      <line x1="70" y1="4" x2="80" y2="7" stroke="#60A5FA" strokeWidth="0.1" opacity="0.2" />
      <text
        x="7"
        y="16"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#FFFFFF"
      >
        {data.companyJa}
      </text>
      <text
        x="7"
        y="20"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        letterSpacing="0.2"
        fill="#A78BFA"
        opacity="0.7"
      >
        {data.companyEn}
      </text>
      <line x1="7" y1="23" x2="50" y2="23" stroke="#8B5CF6" strokeWidth="0.1" opacity="0.3" />
      <text
        x="7"
        y="28"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#CBD5E1"
      >
        {data.tel}
      </text>
      <text
        x="7"
        y="32"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#CBD5E1"
      >
        {data.email}
      </text>
      <text
        x="7"
        y="36"
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#CBD5E1"
      >
        {data.website}
      </text>
      <line x1="7" y1="39" x2="50" y2="39" stroke="#8B5CF6" strokeWidth="0.1" opacity="0.3" />
      <text
        x="7"
        y="43.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#7C6EB0"
      >
        〒{data.zipCode}
      </text>
      <text
        x="7"
        y="47"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#7C6EB0"
      >
        {data.addressJa}
      </text>
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
      <rect width="91" height="55" fill="#F0FDF4" />
      {/* Pixel grid decoration top-right corner */}
      <defs>
        <pattern id="pixel-grid" width="2.5" height="2.5" patternUnits="userSpaceOnUse">
          <rect width="2" height="2" fill="#10B981" opacity="0.08" />
        </pattern>
      </defs>
      {/* Pixel blocks - top right cluster */}
      <rect x="65" y="3" width="2.5" height="2.5" fill="#10B981" opacity="0.3" />
      <rect x="67.5" y="3" width="2.5" height="2.5" fill="#10B981" opacity="0.15" />
      <rect x="70" y="3" width="2.5" height="2.5" fill="#10B981" opacity="0.4" />
      <rect x="72.5" y="3" width="2.5" height="2.5" fill="#10B981" opacity="0.1" />
      <rect x="75" y="3" width="2.5" height="2.5" fill="#10B981" opacity="0.25" />
      <rect x="77.5" y="3" width="2.5" height="2.5" fill="#10B981" opacity="0.45" />
      <rect x="80" y="3" width="2.5" height="2.5" fill="#10B981" opacity="0.2" />
      <rect x="82.5" y="3" width="2.5" height="2.5" fill="#10B981" opacity="0.35" />
      <rect x="85" y="3" width="2.5" height="2.5" fill="#10B981" opacity="0.1" />
      <rect x="65" y="5.5" width="2.5" height="2.5" fill="#10B981" opacity="0.1" />
      <rect x="67.5" y="5.5" width="2.5" height="2.5" fill="#10B981" opacity="0.35" />
      <rect x="70" y="5.5" width="2.5" height="2.5" fill="#10B981" opacity="0.05" />
      <rect x="72.5" y="5.5" width="2.5" height="2.5" fill="#10B981" opacity="0.3" />
      <rect x="80" y="5.5" width="2.5" height="2.5" fill="#10B981" opacity="0.4" />
      <rect x="85" y="5.5" width="2.5" height="2.5" fill="#10B981" opacity="0.25" />
      <rect x="67.5" y="8" width="2.5" height="2.5" fill="#10B981" opacity="0.2" />
      <rect x="72.5" y="8" width="2.5" height="2.5" fill="#10B981" opacity="0.15" />
      <rect x="77.5" y="8" width="2.5" height="2.5" fill="#10B981" opacity="0.3" />
      <rect x="82.5" y="8" width="2.5" height="2.5" fill="#10B981" opacity="0.1" />
      <text
        x="7"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="5.5"
        letterSpacing="0.2"
        fill="#065F46"
      >
        {data.nameJa}
      </text>
      <text
        x="7"
        y="27.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="2"
        letterSpacing="0.3"
        fill="#10B981"
      >
        {data.nameEn}
      </text>
      <text
        x="7"
        y="33"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#6EE7B7"
      >
        {data.titleJa}
      </text>
      {/* Pixel accent bar bottom */}
      <rect x="7" y="46" width="2.5" height="2.5" fill="#10B981" opacity="0.5" />
      <rect x="9.5" y="46" width="2.5" height="2.5" fill="#10B981" opacity="0.3" />
      <rect x="12" y="46" width="2.5" height="2.5" fill="#10B981" opacity="0.15" />
      <rect x="14.5" y="46" width="2.5" height="2.5" fill="#10B981" opacity="0.08" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F0FDF4" />
      {/* Pixel border top */}
      <rect x="3" y="3" width="2" height="2" fill="#10B981" opacity="0.4" />
      <rect x="5" y="3" width="2" height="2" fill="#10B981" opacity="0.2" />
      <rect x="7" y="3" width="2" height="2" fill="#10B981" opacity="0.35" />
      <rect x="9" y="3" width="2" height="2" fill="#10B981" opacity="0.1" />
      <rect x="11" y="3" width="2" height="2" fill="#10B981" opacity="0.3" />
      <rect x="82" y="3" width="2" height="2" fill="#10B981" opacity="0.25" />
      <rect x="84" y="3" width="2" height="2" fill="#10B981" opacity="0.15" />
      <rect x="86" y="3" width="2" height="2" fill="#10B981" opacity="0.4" />
      <text
        x="7"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="2.2"
        fill="#065F46"
      >
        {data.companyJa}
      </text>
      <text
        x="7"
        y="18"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        letterSpacing="0.15"
        fill="#10B981"
      >
        {data.companyEn}
      </text>
      <line x1="7" y1="21" x2="50" y2="21" stroke="#10B981" strokeWidth="0.2" opacity="0.3" />
      <text
        x="7"
        y="26"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#047857"
      >
        {data.tel}
      </text>
      <text
        x="7"
        y="30"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#047857"
      >
        {data.email}
      </text>
      <text
        x="7"
        y="34"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#047857"
      >
        {data.website}
      </text>
      <line x1="7" y1="37" x2="50" y2="37" stroke="#10B981" strokeWidth="0.2" opacity="0.3" />
      <text
        x="7"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#6EE7B7"
      >
        〒{data.zipCode}
      </text>
      <text
        x="7"
        y="45.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#6EE7B7"
      >
        {data.addressJa}
      </text>
      {/* Pixel border bottom */}
      <rect x="80" y="50" width="2" height="2" fill="#10B981" opacity="0.3" />
      <rect x="82" y="50" width="2" height="2" fill="#10B981" opacity="0.15" />
      <rect x="84" y="50" width="2" height="2" fill="#10B981" opacity="0.4" />
      <rect x="86" y="50" width="2" height="2" fill="#10B981" opacity="0.2" />
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
      <rect width="91" height="55" fill="#0A1628" />
      {/* Circuit trace patterns */}
      {/* Horizontal traces */}
      <line x1="0" y1="8" x2="15" y2="8" stroke="#00A86B" strokeWidth="0.25" opacity="0.3" />
      <line x1="15" y1="8" x2="17" y2="10" stroke="#00A86B" strokeWidth="0.25" opacity="0.3" />
      <line x1="17" y1="10" x2="30" y2="10" stroke="#00A86B" strokeWidth="0.25" opacity="0.3" />
      {/* Via/pad at junction */}
      <circle cx="15" cy="8" r="0.6" fill="none" stroke="#00A86B" strokeWidth="0.2" opacity="0.4" />
      <circle cx="15" cy="8" r="0.25" fill="#00A86B" opacity="0.5" />
      {/* Another trace */}
      <line x1="0" y1="14" x2="8" y2="14" stroke="#00A86B" strokeWidth="0.2" opacity="0.2" />
      <line x1="8" y1="14" x2="10" y2="12" stroke="#00A86B" strokeWidth="0.2" opacity="0.2" />
      <line x1="10" y1="12" x2="22" y2="12" stroke="#00A86B" strokeWidth="0.2" opacity="0.2" />
      {/* Top-right traces */}
      <line x1="70" y1="5" x2="80" y2="5" stroke="#00A86B" strokeWidth="0.2" opacity="0.2" />
      <line x1="80" y1="5" x2="82" y2="7" stroke="#00A86B" strokeWidth="0.2" opacity="0.2" />
      <line x1="82" y1="7" x2="91" y2="7" stroke="#00A86B" strokeWidth="0.2" opacity="0.2" />
      <circle cx="80" cy="5" r="0.5" fill="none" stroke="#00A86B" strokeWidth="0.15" opacity="0.3" />
      <circle cx="80" cy="5" r="0.2" fill="#00A86B" opacity="0.4" />
      {/* IC/chip decoration */}
      <rect x="75" y="38" width="10" height="6" rx="0.3" fill="none" stroke="#00A86B" strokeWidth="0.2" opacity="0.25" />
      <line x1="77" y1="38" x2="77" y2="36" stroke="#00A86B" strokeWidth="0.15" opacity="0.2" />
      <line x1="79" y1="38" x2="79" y2="36" stroke="#00A86B" strokeWidth="0.15" opacity="0.2" />
      <line x1="81" y1="38" x2="81" y2="36" stroke="#00A86B" strokeWidth="0.15" opacity="0.2" />
      <line x1="83" y1="38" x2="83" y2="36" stroke="#00A86B" strokeWidth="0.15" opacity="0.2" />
      <line x1="77" y1="44" x2="77" y2="46" stroke="#00A86B" strokeWidth="0.15" opacity="0.2" />
      <line x1="79" y1="44" x2="79" y2="46" stroke="#00A86B" strokeWidth="0.15" opacity="0.2" />
      <line x1="81" y1="44" x2="81" y2="46" stroke="#00A86B" strokeWidth="0.15" opacity="0.2" />
      <line x1="83" y1="44" x2="83" y2="46" stroke="#00A86B" strokeWidth="0.15" opacity="0.2" />
      <text
        x="7"
        y="27"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="0.3"
        fill="#FFFFFF"
      >
        {data.nameJa}
      </text>
      <text
        x="7"
        y="33"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.3"
        fill="#00A86B"
      >
        {data.nameEn}
      </text>
      <text
        x="7"
        y="38.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#00A86B"
        opacity="0.5"
      >
        {data.titleJa}
      </text>
      {/* Bottom trace */}
      <line x1="0" y1="50" x2="20" y2="50" stroke="#00A86B" strokeWidth="0.2" opacity="0.2" />
      <line x1="20" y1="50" x2="22" y2="48" stroke="#00A86B" strokeWidth="0.2" opacity="0.2" />
      <line x1="22" y1="48" x2="35" y2="48" stroke="#00A86B" strokeWidth="0.2" opacity="0.2" />
      <circle cx="20" cy="50" r="0.4" fill="none" stroke="#00A86B" strokeWidth="0.15" opacity="0.3" />
      <circle cx="20" cy="50" r="0.15" fill="#00A86B" opacity="0.4" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0A1628" />
      {/* Circuit traces background */}
      <line x1="0" y1="4" x2="10" y2="4" stroke="#00A86B" strokeWidth="0.2" opacity="0.15" />
      <line x1="10" y1="4" x2="12" y2="6" stroke="#00A86B" strokeWidth="0.2" opacity="0.15" />
      <line x1="12" y1="6" x2="30" y2="6" stroke="#00A86B" strokeWidth="0.2" opacity="0.15" />
      <circle cx="10" cy="4" r="0.4" fill="none" stroke="#00A86B" strokeWidth="0.12" opacity="0.2" />
      <circle cx="10" cy="4" r="0.15" fill="#00A86B" opacity="0.3" />
      <line x1="60" y1="3" x2="75" y2="3" stroke="#00A86B" strokeWidth="0.15" opacity="0.15" />
      <line x1="75" y1="3" x2="77" y2="5" stroke="#00A86B" strokeWidth="0.15" opacity="0.15" />
      <line x1="77" y1="5" x2="91" y2="5" stroke="#00A86B" strokeWidth="0.15" opacity="0.15" />
      <text
        x="7"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#FFFFFF"
      >
        {data.companyJa}
      </text>
      <text
        x="7"
        y="18.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        letterSpacing="0.2"
        fill="#00A86B"
        opacity="0.7"
      >
        {data.companyEn}
      </text>
      <line x1="7" y1="22" x2="55" y2="22" stroke="#00A86B" strokeWidth="0.15" opacity="0.2" />
      <text
        x="7"
        y="27.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#88CCAA"
      >
        {data.tel}
      </text>
      <text
        x="7"
        y="31.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#88CCAA"
      >
        {data.email}
      </text>
      <text
        x="7"
        y="35.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#88CCAA"
      >
        {data.website}
      </text>
      <line x1="7" y1="39" x2="55" y2="39" stroke="#00A86B" strokeWidth="0.15" opacity="0.2" />
      <text
        x="7"
        y="43.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#00A86B"
        opacity="0.5"
      >
        〒{data.zipCode}
      </text>
      <text
        x="7"
        y="47"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#00A86B"
        opacity="0.5"
      >
        {data.addressJa}
      </text>
      {/* Bottom traces */}
      <line x1="55" y1="51" x2="70" y2="51" stroke="#00A86B" strokeWidth="0.2" opacity="0.15" />
      <line x1="70" y1="51" x2="72" y2="49" stroke="#00A86B" strokeWidth="0.2" opacity="0.15" />
      <line x1="72" y1="49" x2="91" y2="49" stroke="#00A86B" strokeWidth="0.2" opacity="0.15" />
      <circle cx="70" cy="51" r="0.4" fill="none" stroke="#00A86B" strokeWidth="0.12" opacity="0.2" />
      <circle cx="70" cy="51" r="0.15" fill="#00A86B" opacity="0.3" />
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
