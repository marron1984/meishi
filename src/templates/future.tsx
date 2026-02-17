import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. QUANTUM (量子) — Quantum computing / particle physics
// Particle scatter, quantum grid, electric blue on dark space
// ============================================================
const quantumTemplate: TemplateDefinition = {
  id: 'future-quantum',
  name: 'QUANTUM',
  nameJa: '量子',
  category: 'future',
  designer: 'Quantum Lab',
  description: '量子の揺らぎ。粒子が確率の波の中で名刺を形作る。',
  accentColor: '#00BFFF',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0B0B1A" />
      {/* Quantum grid background */}
      <defs>
        <pattern id="future-quantum-grid" x="0" y="0" width="7" height="7" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="7" y2="0" stroke="#00BFFF" strokeWidth="0.02" opacity="0.15" />
          <line x1="0" y1="0" x2="0" y2="7" stroke="#00BFFF" strokeWidth="0.02" opacity="0.15" />
        </pattern>
      </defs>
      <rect width="91" height="55" fill="url(#future-quantum-grid)" />
      {/* Quantum particles / dots scatter */}
      <circle cx="70" cy="10" r="0.4" fill="#00BFFF" opacity="0.8" />
      <circle cx="75" cy="15" r="0.25" fill="#00BFFF" opacity="0.6" />
      <circle cx="65" cy="13" r="0.3" fill="#7B2FBE" opacity="0.7" />
      <circle cx="80" cy="8" r="0.2" fill="#39FF14" opacity="0.5" />
      <circle cx="72" cy="18" r="0.15" fill="#00BFFF" opacity="0.4" />
      <circle cx="68" cy="7" r="0.35" fill="#00BFFF" opacity="0.5" />
      <circle cx="77" cy="12" r="0.2" fill="#7B2FBE" opacity="0.4" />
      {/* Quantum entanglement lines */}
      <line x1="70" y1="10" x2="75" y2="15" stroke="#00BFFF" strokeWidth="0.04" opacity="0.3" />
      <line x1="65" y1="13" x2="70" y2="10" stroke="#7B2FBE" strokeWidth="0.04" opacity="0.2" />
      <line x1="75" y1="15" x2="80" y2="8" stroke="#00BFFF" strokeWidth="0.03" opacity="0.2" />
      {/* Name */}
      <text
        x="8"
        y="25"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="6"
        letterSpacing="0.5"
        fill="#E0F0FF"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="31"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.5"
        fill="#00BFFF"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Title */}
      <text
        x="8"
        y="38"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#5A8AAA"
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
        fill="#3A5A7A"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0B0B1A" />
      <rect width="91" height="55" fill="url(#future-quantum-grid)" />
      {/* Quantum particles */}
      <circle cx="80" cy="8" r="0.3" fill="#00BFFF" opacity="0.6" />
      <circle cx="84" cy="10" r="0.2" fill="#7B2FBE" opacity="0.5" />
      <circle cx="76" cy="12" r="0.15" fill="#00BFFF" opacity="0.4" />
      {/* Company */}
      <text
        x="8"
        y="12"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#E0F0FF"
      >
        {data.companyJa}
      </text>
      <text
        x="8"
        y="16"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#00BFFF"
      >
        {data.companyEn}
      </text>
      <line x1="8" y1="19" x2="55" y2="19" stroke="#00BFFF" strokeWidth="0.1" opacity="0.3" />
      {/* Contact */}
      <text
        x="8"
        y="25"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#7AB0D0"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="29"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#7AB0D0"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="33"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#7AB0D0"
      >
        {data.website}
      </text>
      <line x1="8" y1="37" x2="55" y2="37" stroke="#00BFFF" strokeWidth="0.06" opacity="0.2" />
      {/* Address */}
      <text
        x="8"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#3A5A7A"
      >
        〒{data.zipCode}
      </text>
      <text
        x="8"
        y="45.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#3A5A7A"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 2. ORBIT (軌道) — Orbital mechanics, satellite paths
// Concentric orbital rings, planet-like elements
// ============================================================
const orbitTemplate: TemplateDefinition = {
  id: 'future-orbit',
  name: 'ORBIT',
  nameJa: '軌道',
  category: 'future',
  designer: 'Orbital Dynamics',
  description: '軌道を描く情報の衛星。宇宙の秩序が名刺に宿る。',
  accentColor: '#7B2FBE',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0B0B1A" />
      {/* Orbital rings */}
      <ellipse cx="72" cy="18" rx="15" ry="5" fill="none" stroke="#7B2FBE" strokeWidth="0.08" opacity="0.3" transform="rotate(-20, 72, 18)" />
      <ellipse cx="72" cy="18" rx="12" ry="8" fill="none" stroke="#00BFFF" strokeWidth="0.06" opacity="0.25" transform="rotate(15, 72, 18)" />
      <ellipse cx="72" cy="18" rx="9" ry="11" fill="none" stroke="#7B2FBE" strokeWidth="0.05" opacity="0.2" transform="rotate(-5, 72, 18)" />
      {/* Central body */}
      <circle cx="72" cy="18" r="2" fill="#7B2FBE" opacity="0.3" />
      <circle cx="72" cy="18" r="1" fill="#00BFFF" opacity="0.5" />
      {/* Orbiting satellites */}
      <circle cx="60" cy="14" r="0.4" fill="#00BFFF" opacity="0.8" />
      <circle cx="83" cy="22" r="0.3" fill="#39FF14" opacity="0.6" />
      <circle cx="68" cy="28" r="0.25" fill="#7B2FBE" opacity="0.7" />
      {/* Name */}
      <text
        x="8"
        y="25"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#E0E0FF"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="31"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.4"
        fill="#7B2FBE"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Title */}
      <text
        x="8"
        y="38"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#8A6AAA"
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
        fill="#4A3A6A"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0B0B1A" />
      {/* Small orbital accent */}
      <ellipse cx="80" cy="10" rx="6" ry="3" fill="none" stroke="#7B2FBE" strokeWidth="0.06" opacity="0.2" transform="rotate(-15, 80, 10)" />
      <circle cx="80" cy="10" r="0.8" fill="#7B2FBE" opacity="0.3" />
      {/* Company */}
      <text
        x="8"
        y="13"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#E0E0FF"
      >
        {data.companyJa}
      </text>
      <text
        x="8"
        y="17"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#7B2FBE"
      >
        {data.companyEn}
      </text>
      <line x1="8" y1="20" x2="55" y2="20" stroke="#7B2FBE" strokeWidth="0.08" opacity="0.3" />
      {/* Contact */}
      <text
        x="8"
        y="26"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#A08ACA"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="30"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#A08ACA"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="34"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#A08ACA"
      >
        {data.website}
      </text>
      {/* Address */}
      <text
        x="8"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#4A3A6A"
      >
        〒{data.zipCode}
      </text>
      <text
        x="8"
        y="46.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#4A3A6A"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 3. NANO (微) — Nanotechnology, molecular scale
// Hexagonal molecular grid, precise technical aesthetic
// ============================================================
const nanoTemplate: TemplateDefinition = {
  id: 'future-nano',
  name: 'NANO',
  nameJa: '微',
  category: 'future',
  designer: 'Nano Systems',
  description: '微細な世界の構造美。分子レベルの精密さを名刺に。',
  accentColor: '#39FF14',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0B0B1A" />
      {/* Hexagonal molecular grid */}
      <defs>
        <pattern id="future-nano-hex" x="0" y="0" width="8" height="9.24" patternUnits="userSpaceOnUse">
          <polygon points="4,0 8,2.31 8,6.93 4,9.24 0,6.93 0,2.31" fill="none" stroke="#39FF14" strokeWidth="0.03" opacity="0.12" />
        </pattern>
      </defs>
      <rect x="55" y="0" width="36" height="30" fill="url(#future-nano-hex)" />
      {/* Molecular bonds */}
      <circle cx="70" cy="10" r="0.5" fill="#39FF14" opacity="0.4" />
      <circle cx="78" cy="14" r="0.4" fill="#39FF14" opacity="0.3" />
      <circle cx="66" cy="16" r="0.35" fill="#00BFFF" opacity="0.3" />
      <line x1="70" y1="10" x2="78" y2="14" stroke="#39FF14" strokeWidth="0.06" opacity="0.3" />
      <line x1="70" y1="10" x2="66" y2="16" stroke="#39FF14" strokeWidth="0.06" opacity="0.25" />
      {/* Name */}
      <text
        x="8"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#E0FFE0"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="28"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.4"
        fill="#39FF14"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Title */}
      <text
        x="8"
        y="36"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#5AAA5A"
      >
        {data.titleJa}
      </text>
      {/* Company */}
      <text
        x="8"
        y="46"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#2A6A2A"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0B0B1A" />
      {/* Small hex grid accent */}
      <rect x="65" y="0" width="26" height="18" fill="url(#future-nano-hex)" />
      {/* Company */}
      <text
        x="8"
        y="13"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#E0FFE0"
      >
        {data.companyJa}
      </text>
      <text
        x="8"
        y="17"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#39FF14"
      >
        {data.companyEn}
      </text>
      <line x1="8" y1="20" x2="50" y2="20" stroke="#39FF14" strokeWidth="0.08" opacity="0.3" />
      {/* Contact */}
      <text
        x="8"
        y="26"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#7ACC7A"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="30"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#7ACC7A"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="34"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#7ACC7A"
      >
        {data.website}
      </text>
      {/* Address */}
      <text
        x="8"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#2A6A2A"
      >
        〒{data.zipCode}
      </text>
      <text
        x="8"
        y="46.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#2A6A2A"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 4. HYPER (超越) — Hyperspace, beyond limits
// Speed lines, warp effect, electric energy
// ============================================================
const hyperTemplate: TemplateDefinition = {
  id: 'future-hyper',
  name: 'HYPER',
  nameJa: '超越',
  category: 'future',
  designer: 'Hyperspace',
  description: '超越する速度。ハイパースペースの歪みが情報を加速させる。',
  accentColor: '#00BFFF',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0B0B1A" />
      {/* Hyperspace warp lines */}
      <defs>
        <linearGradient id="future-hyper-warp" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00BFFF" stopOpacity="0" />
          <stop offset="50%" stopColor="#00BFFF" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#00BFFF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <line x1="0" y1="5" x2="91" y2="5" stroke="url(#future-hyper-warp)" strokeWidth="0.06" />
      <line x1="0" y1="8" x2="91" y2="8" stroke="url(#future-hyper-warp)" strokeWidth="0.04" />
      <line x1="0" y1="10" x2="91" y2="10" stroke="url(#future-hyper-warp)" strokeWidth="0.08" />
      <line x1="0" y1="44" x2="91" y2="44" stroke="url(#future-hyper-warp)" strokeWidth="0.05" />
      <line x1="0" y1="47" x2="91" y2="47" stroke="url(#future-hyper-warp)" strokeWidth="0.07" />
      <line x1="0" y1="50" x2="91" y2="50" stroke="url(#future-hyper-warp)" strokeWidth="0.04" />
      {/* Central bright flash */}
      <circle cx="45.5" cy="27.5" r="8" fill="#00BFFF" opacity="0.03" />
      {/* Name */}
      <text
        x="45.5"
        y="23"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="6.5"
        letterSpacing="0.5"
        fill="#FFFFFF"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="29.5"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        letterSpacing="0.6"
        fill="#00BFFF"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Title */}
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#5A8AAA"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0B0B1A" />
      {/* Speed lines */}
      <line x1="0" y1="4" x2="91" y2="4" stroke="url(#future-hyper-warp)" strokeWidth="0.05" />
      <line x1="0" y1="51" x2="91" y2="51" stroke="url(#future-hyper-warp)" strokeWidth="0.05" />
      {/* Company */}
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
        fontSize="1.5"
        fill="#00BFFF"
      >
        {data.companyEn}
      </text>
      <line x1="25" y1="20" x2="66" y2="20" stroke="#00BFFF" strokeWidth="0.08" opacity="0.3" />
      {/* Contact */}
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#7AB0D0"
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
        fill="#7AB0D0"
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
        fill="#7AB0D0"
      >
        {data.website}
      </text>
      {/* Address */}
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#3A5A7A"
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
        fill="#3A5A7A"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 5. NEXUS (結節) — Network nexus, connection hub
// Network node connections, constellation-like dots and lines
// ============================================================
const nexusTemplate: TemplateDefinition = {
  id: 'future-nexus',
  name: 'NEXUS',
  nameJa: '結節',
  category: 'future',
  designer: 'Nexus Networks',
  description: '結節点。全ての情報が集まるネットワークの核心。',
  accentColor: '#7B2FBE',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0B0B1A" />
      {/* Network constellation */}
      <circle cx="65" cy="12" r="0.6" fill="#7B2FBE" opacity="0.7" />
      <circle cx="75" cy="8" r="0.4" fill="#00BFFF" opacity="0.6" />
      <circle cx="80" cy="16" r="0.5" fill="#7B2FBE" opacity="0.5" />
      <circle cx="70" cy="20" r="0.3" fill="#00BFFF" opacity="0.4" />
      <circle cx="85" cy="10" r="0.35" fill="#39FF14" opacity="0.5" />
      <circle cx="60" cy="18" r="0.25" fill="#7B2FBE" opacity="0.3" />
      <circle cx="78" cy="22" r="0.2" fill="#00BFFF" opacity="0.3" />
      {/* Connection lines */}
      <line x1="65" y1="12" x2="75" y2="8" stroke="#7B2FBE" strokeWidth="0.04" opacity="0.3" />
      <line x1="65" y1="12" x2="80" y2="16" stroke="#7B2FBE" strokeWidth="0.04" opacity="0.25" />
      <line x1="75" y1="8" x2="85" y2="10" stroke="#00BFFF" strokeWidth="0.03" opacity="0.3" />
      <line x1="80" y1="16" x2="70" y2="20" stroke="#7B2FBE" strokeWidth="0.03" opacity="0.2" />
      <line x1="65" y1="12" x2="60" y2="18" stroke="#7B2FBE" strokeWidth="0.03" opacity="0.2" />
      <line x1="75" y1="8" x2="80" y2="16" stroke="#00BFFF" strokeWidth="0.03" opacity="0.2" />
      <line x1="80" y1="16" x2="78" y2="22" stroke="#7B2FBE" strokeWidth="0.03" opacity="0.15" />
      {/* Central nexus glow */}
      <circle cx="72" cy="14" r="3" fill="#7B2FBE" opacity="0.05" />
      {/* Name */}
      <text
        x="8"
        y="25"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#E0E0FF"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="31"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.4"
        fill="#7B2FBE"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Title */}
      <text
        x="8"
        y="38"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#8A6AAA"
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
        fill="#4A3A6A"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0B0B1A" />
      {/* Small constellation */}
      <circle cx="78" cy="8" r="0.4" fill="#7B2FBE" opacity="0.5" />
      <circle cx="84" cy="11" r="0.3" fill="#00BFFF" opacity="0.4" />
      <line x1="78" y1="8" x2="84" y2="11" stroke="#7B2FBE" strokeWidth="0.03" opacity="0.3" />
      {/* Company */}
      <text
        x="8"
        y="13"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#E0E0FF"
      >
        {data.companyJa}
      </text>
      <text
        x="8"
        y="17"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#7B2FBE"
      >
        {data.companyEn}
      </text>
      <line x1="8" y1="20" x2="50" y2="20" stroke="#7B2FBE" strokeWidth="0.08" opacity="0.3" />
      {/* Contact */}
      <text
        x="8"
        y="26"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#A08ACA"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="30"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#A08ACA"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="34"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#A08ACA"
      >
        {data.website}
      </text>
      {/* Address */}
      <text
        x="8"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#4A3A6A"
      >
        〒{data.zipCode}
      </text>
      <text
        x="8"
        y="46.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#4A3A6A"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 6. SINGULARITY (特異) — Technological singularity
// Converging lines to a point, event horizon circle
// ============================================================
const singularityTemplate: TemplateDefinition = {
  id: 'future-singularity',
  name: 'SINGULARITY',
  nameJa: '特異',
  category: 'future',
  designer: 'Singularity Institute',
  description: '特異点。全てが一点に収束する技術的超越の瞬間。',
  accentColor: '#00BFFF',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0B0B1A" />
      {/* Converging lines to singularity point */}
      <defs>
        <radialGradient id="future-singularity-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00BFFF" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#7B2FBE" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#0B0B1A" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="75" cy="15" r="10" fill="url(#future-singularity-glow)" />
      {/* Event horizon ring */}
      <circle cx="75" cy="15" r="5" fill="none" stroke="#00BFFF" strokeWidth="0.08" opacity="0.4" />
      <circle cx="75" cy="15" r="3" fill="none" stroke="#7B2FBE" strokeWidth="0.06" opacity="0.5" />
      <circle cx="75" cy="15" r="1" fill="#00BFFF" opacity="0.6" />
      {/* Converging lines */}
      <line x1="60" y1="3" x2="75" y2="15" stroke="#00BFFF" strokeWidth="0.03" opacity="0.2" />
      <line x1="91" y1="5" x2="75" y2="15" stroke="#00BFFF" strokeWidth="0.03" opacity="0.2" />
      <line x1="91" y1="25" x2="75" y2="15" stroke="#7B2FBE" strokeWidth="0.03" opacity="0.15" />
      <line x1="65" y1="28" x2="75" y2="15" stroke="#7B2FBE" strokeWidth="0.03" opacity="0.15" />
      <line x1="85" y1="0" x2="75" y2="15" stroke="#00BFFF" strokeWidth="0.02" opacity="0.15" />
      {/* Name */}
      <text
        x="8"
        y="24"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#E0F0FF"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="30"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.4"
        fill="#00BFFF"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Title */}
      <text
        x="8"
        y="38"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#5A8AAA"
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
        fill="#3A5A7A"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0B0B1A" />
      {/* Small singularity */}
      <circle cx="82" cy="10" r="3" fill="url(#future-singularity-glow)" />
      <circle cx="82" cy="10" r="1.5" fill="none" stroke="#00BFFF" strokeWidth="0.06" opacity="0.3" />
      <circle cx="82" cy="10" r="0.4" fill="#00BFFF" opacity="0.5" />
      {/* Company */}
      <text
        x="8"
        y="12"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#E0F0FF"
      >
        {data.companyJa}
      </text>
      <text
        x="8"
        y="16"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#00BFFF"
      >
        {data.companyEn}
      </text>
      <line x1="8" y1="19" x2="55" y2="19" stroke="#00BFFF" strokeWidth="0.08" opacity="0.3" />
      {/* Contact */}
      <text
        x="8"
        y="25"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#7AB0D0"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="29"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#7AB0D0"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="33"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#7AB0D0"
      >
        {data.website}
      </text>
      {/* Address */}
      <text
        x="8"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#3A5A7A"
      >
        〒{data.zipCode}
      </text>
      <text
        x="8"
        y="45.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#3A5A7A"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 7. VOID-F (虚空) — Deep space void
// Pure black with tiny stars, vast emptiness feeling
// ============================================================
const voidFTemplate: TemplateDefinition = {
  id: 'future-void-f',
  name: 'VOID-F',
  nameJa: '虚空',
  category: 'future',
  designer: 'Deep Space',
  description: '虚空。果てしない宇宙の闇の中に浮かぶ一筋の光。',
  accentColor: '#E0E0FF',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#050510" />
      {/* Distant stars */}
      <circle cx="15" cy="8" r="0.15" fill="#FFFFFF" opacity="0.7" />
      <circle cx="40" cy="5" r="0.1" fill="#FFFFFF" opacity="0.5" />
      <circle cx="72" cy="12" r="0.12" fill="#FFFFFF" opacity="0.6" />
      <circle cx="85" cy="3" r="0.08" fill="#FFFFFF" opacity="0.4" />
      <circle cx="55" cy="48" r="0.1" fill="#FFFFFF" opacity="0.5" />
      <circle cx="25" cy="45" r="0.08" fill="#FFFFFF" opacity="0.3" />
      <circle cx="80" cy="42" r="0.12" fill="#FFFFFF" opacity="0.4" />
      <circle cx="10" cy="35" r="0.06" fill="#FFFFFF" opacity="0.3" />
      <circle cx="65" cy="38" r="0.08" fill="#FFFFFF" opacity="0.35" />
      <circle cx="35" cy="20" r="0.07" fill="#FFFFFF" opacity="0.3" />
      <circle cx="88" cy="25" r="0.1" fill="#00BFFF" opacity="0.3" />
      <circle cx="5" cy="50" r="0.09" fill="#7B2FBE" opacity="0.3" />
      {/* Name floating in void */}
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="5.5"
        letterSpacing="1.5"
        fill="#E0E0FF"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.6"
        fill="#5A5A8A"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Title - barely visible */}
      <text
        x="45.5"
        y="38"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#3A3A5A"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#050510" />
      {/* Stars */}
      <circle cx="20" cy="10" r="0.1" fill="#FFFFFF" opacity="0.5" />
      <circle cx="50" cy="7" r="0.08" fill="#FFFFFF" opacity="0.4" />
      <circle cx="75" cy="45" r="0.12" fill="#FFFFFF" opacity="0.6" />
      <circle cx="88" cy="15" r="0.07" fill="#FFFFFF" opacity="0.35" />
      <circle cx="35" cy="50" r="0.09" fill="#FFFFFF" opacity="0.4" />
      <circle cx="10" cy="40" r="0.06" fill="#00BFFF" opacity="0.3" />
      {/* Company */}
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2"
        fill="#E0E0FF"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="18"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5A5A8A"
      >
        {data.companyEn}
      </text>
      {/* Contact */}
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#6A6A9A"
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
        fill="#6A6A9A"
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
        fill="#6A6A9A"
      >
        {data.website}
      </text>
      {/* Address */}
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#3A3A5A"
      >
        〒{data.zipCode}
      </text>
      <text
        x="45.5"
        y="47.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#3A3A5A"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 8. MATRIX-F (行列F) — Data matrix, digital rain
// Vertical data streams, code-like characters
// ============================================================
const matrixFTemplate: TemplateDefinition = {
  id: 'future-matrix-f',
  name: 'MATRIX-F',
  nameJa: '行列F',
  category: 'future',
  designer: 'Matrix Systems',
  description: '行列の雨。デジタルデータの滝が現実を再構築する。',
  accentColor: '#39FF14',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0A0A0A" />
      {/* Digital rain columns */}
      <text x="5" y="5" fontFamily="'Space Grotesk', sans-serif" fontSize="1.2" fill="#39FF14" opacity="0.15">01</text>
      <text x="5" y="8" fontFamily="'Space Grotesk', sans-serif" fontSize="1.2" fill="#39FF14" opacity="0.12">10</text>
      <text x="5" y="11" fontFamily="'Space Grotesk', sans-serif" fontSize="1.2" fill="#39FF14" opacity="0.08">11</text>
      <text x="15" y="3" fontFamily="'Space Grotesk', sans-serif" fontSize="1.2" fill="#39FF14" opacity="0.1">00</text>
      <text x="15" y="6" fontFamily="'Space Grotesk', sans-serif" fontSize="1.2" fill="#39FF14" opacity="0.15">01</text>
      <text x="15" y="9" fontFamily="'Space Grotesk', sans-serif" fontSize="1.2" fill="#39FF14" opacity="0.12">11</text>
      <text x="15" y="12" fontFamily="'Space Grotesk', sans-serif" fontSize="1.2" fill="#39FF14" opacity="0.08">10</text>
      <text x="82" y="40" fontFamily="'Space Grotesk', sans-serif" fontSize="1.2" fill="#39FF14" opacity="0.1">01</text>
      <text x="82" y="43" fontFamily="'Space Grotesk', sans-serif" fontSize="1.2" fill="#39FF14" opacity="0.15">10</text>
      <text x="82" y="46" fontFamily="'Space Grotesk', sans-serif" fontSize="1.2" fill="#39FF14" opacity="0.2">11</text>
      <text x="82" y="49" fontFamily="'Space Grotesk', sans-serif" fontSize="1.2" fill="#39FF14" opacity="0.25">01</text>
      <text x="82" y="52" fontFamily="'Space Grotesk', sans-serif" fontSize="1.2" fill="#39FF14" opacity="0.3">10</text>
      <text x="75" y="45" fontFamily="'Space Grotesk', sans-serif" fontSize="1.2" fill="#39FF14" opacity="0.08">00</text>
      <text x="75" y="48" fontFamily="'Space Grotesk', sans-serif" fontSize="1.2" fill="#39FF14" opacity="0.12">11</text>
      <text x="75" y="51" fontFamily="'Space Grotesk', sans-serif" fontSize="1.2" fill="#39FF14" opacity="0.18">01</text>
      {/* Name emerging from the matrix */}
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="0.5"
        fill="#39FF14"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="30"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.4"
        fill="#1A8A1A"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Title */}
      <text
        x="45.5"
        y="37"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#2A6A2A"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0A0A0A" />
      {/* Rain columns */}
      <text x="80" y="4" fontFamily="'Space Grotesk', sans-serif" fontSize="1.2" fill="#39FF14" opacity="0.1">10</text>
      <text x="80" y="7" fontFamily="'Space Grotesk', sans-serif" fontSize="1.2" fill="#39FF14" opacity="0.12">01</text>
      <text x="80" y="10" fontFamily="'Space Grotesk', sans-serif" fontSize="1.2" fill="#39FF14" opacity="0.08">11</text>
      <text x="5" y="46" fontFamily="'Space Grotesk', sans-serif" fontSize="1.2" fill="#39FF14" opacity="0.08">01</text>
      <text x="5" y="49" fontFamily="'Space Grotesk', sans-serif" fontSize="1.2" fill="#39FF14" opacity="0.12">10</text>
      <text x="5" y="52" fontFamily="'Space Grotesk', sans-serif" fontSize="1.2" fill="#39FF14" opacity="0.15">00</text>
      {/* Company */}
      <text
        x="45.5"
        y="13"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#39FF14"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="17"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#1A8A1A"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="20" x2="71" y2="20" stroke="#39FF14" strokeWidth="0.06" opacity="0.3" />
      {/* Contact */}
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#5ACC5A"
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
        fill="#5ACC5A"
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
        fill="#5ACC5A"
      >
        {data.website}
      </text>
      {/* Address */}
      <text
        x="45.5"
        y="42"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#2A6A2A"
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
        fill="#2A6A2A"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 9. STELLAR (星) — Stellar constellation map
// Star map aesthetic, constellation lines, celestial navigation
// ============================================================
const stellarTemplate: TemplateDefinition = {
  id: 'future-stellar',
  name: 'STELLAR',
  nameJa: '星',
  category: 'future',
  designer: 'Stellar Maps',
  description: '星図の美。天体の配置図のような精密な情報設計。',
  accentColor: '#00BFFF',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0B0B1A" />
      {/* Constellation pattern */}
      <circle cx="60" cy="10" r="0.5" fill="#FFFFFF" opacity="0.8" />
      <circle cx="70" cy="7" r="0.3" fill="#FFFFFF" opacity="0.6" />
      <circle cx="78" cy="12" r="0.4" fill="#FFFFFF" opacity="0.7" />
      <circle cx="85" cy="8" r="0.25" fill="#FFFFFF" opacity="0.5" />
      <circle cx="73" cy="18" r="0.35" fill="#FFFFFF" opacity="0.6" />
      <circle cx="82" cy="20" r="0.2" fill="#FFFFFF" opacity="0.4" />
      <circle cx="65" cy="20" r="0.3" fill="#FFFFFF" opacity="0.5" />
      {/* Constellation lines */}
      <line x1="60" y1="10" x2="70" y2="7" stroke="#FFFFFF" strokeWidth="0.04" opacity="0.2" />
      <line x1="70" y1="7" x2="78" y2="12" stroke="#FFFFFF" strokeWidth="0.04" opacity="0.2" />
      <line x1="78" y1="12" x2="85" y2="8" stroke="#FFFFFF" strokeWidth="0.04" opacity="0.15" />
      <line x1="78" y1="12" x2="73" y2="18" stroke="#FFFFFF" strokeWidth="0.04" opacity="0.2" />
      <line x1="73" y1="18" x2="82" y2="20" stroke="#FFFFFF" strokeWidth="0.04" opacity="0.15" />
      <line x1="60" y1="10" x2="65" y2="20" stroke="#FFFFFF" strokeWidth="0.03" opacity="0.15" />
      <line x1="65" y1="20" x2="73" y2="18" stroke="#FFFFFF" strokeWidth="0.03" opacity="0.15" />
      {/* Coordinate marks */}
      <line x1="0" y1="27.5" x2="4" y2="27.5" stroke="#00BFFF" strokeWidth="0.03" opacity="0.3" />
      <line x1="87" y1="27.5" x2="91" y2="27.5" stroke="#00BFFF" strokeWidth="0.03" opacity="0.3" />
      {/* Name */}
      <text
        x="8"
        y="28"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="5.5"
        letterSpacing="0.8"
        fill="#E0F0FF"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="34"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.4"
        fill="#00BFFF"
      >
        {data.nameEn}
      </text>
      {/* Title */}
      <text
        x="8"
        y="41"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#5A8AAA"
      >
        {data.titleJa}
      </text>
      {/* Company */}
      <text
        x="8"
        y="49"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#3A5A7A"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0B0B1A" />
      {/* Small constellation */}
      <circle cx="75" cy="8" r="0.3" fill="#FFFFFF" opacity="0.6" />
      <circle cx="82" cy="10" r="0.25" fill="#FFFFFF" opacity="0.5" />
      <circle cx="79" cy="14" r="0.2" fill="#FFFFFF" opacity="0.4" />
      <line x1="75" y1="8" x2="82" y2="10" stroke="#FFFFFF" strokeWidth="0.03" opacity="0.2" />
      <line x1="82" y1="10" x2="79" y2="14" stroke="#FFFFFF" strokeWidth="0.03" opacity="0.15" />
      {/* Company */}
      <text
        x="8"
        y="13"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2"
        fill="#E0F0FF"
      >
        {data.companyJa}
      </text>
      <text
        x="8"
        y="17"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#00BFFF"
      >
        {data.companyEn}
      </text>
      <line x1="8" y1="20" x2="55" y2="20" stroke="#00BFFF" strokeWidth="0.06" opacity="0.2" />
      {/* Contact */}
      <text
        x="8"
        y="26"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#7AB0D0"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="30"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#7AB0D0"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="34"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#7AB0D0"
      >
        {data.website}
      </text>
      {/* Address */}
      <text
        x="8"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#3A5A7A"
      >
        〒{data.zipCode}
      </text>
      <text
        x="8"
        y="46.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#3A5A7A"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 10. OMEGA (終極) — The final evolution, ultimate endpoint
// Bold omega symbol, gradient from dark to light, finality
// ============================================================
const omegaTemplate: TemplateDefinition = {
  id: 'future-omega',
  name: 'OMEGA',
  nameJa: '終極',
  category: 'future',
  designer: 'Omega Point',
  description: '終極。全ての進化の果てに辿り着く最終形態。',
  accentColor: '#7B2FBE',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0B0B1A" />
      {/* Gradient overlay */}
      <defs>
        <linearGradient id="future-omega-fade" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7B2FBE" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#00BFFF" stopOpacity="0.03" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#future-omega-fade)" />
      {/* Omega symbol - large, ghosted */}
      <text
        x="72"
        y="26"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="20"
        fill="#7B2FBE"
        opacity="0.08"
      >
        {'Ω'}
      </text>
      {/* Thin ring around omega */}
      <circle cx="72" cy="18" r="12" fill="none" stroke="#7B2FBE" strokeWidth="0.04" opacity="0.15" />
      {/* Name */}
      <text
        x="8"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="6"
        letterSpacing="0.8"
        fill="#E0E0FF"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="28"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.5"
        fill="#7B2FBE"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Accent line */}
      <line x1="8" y1="31" x2="40" y2="31" stroke="#7B2FBE" strokeWidth="0.15" opacity="0.4" />
      {/* Title */}
      <text
        x="8"
        y="37"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#8A6AAA"
      >
        {data.titleJa}
      </text>
      {/* Company */}
      <text
        x="8"
        y="47"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#4A3A6A"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0B0B1A" />
      <rect width="91" height="55" fill="url(#future-omega-fade)" />
      {/* Small omega */}
      <text
        x="82"
        y="12"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="8"
        fill="#7B2FBE"
        opacity="0.1"
      >
        {'Ω'}
      </text>
      {/* Company */}
      <text
        x="8"
        y="13"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#E0E0FF"
      >
        {data.companyJa}
      </text>
      <text
        x="8"
        y="17"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#7B2FBE"
      >
        {data.companyEn}
      </text>
      <line x1="8" y1="20" x2="50" y2="20" stroke="#7B2FBE" strokeWidth="0.08" opacity="0.3" />
      {/* Contact */}
      <text
        x="8"
        y="26"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#A08ACA"
      >
        {data.tel}
      </text>
      <text
        x="8"
        y="30"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#A08ACA"
      >
        {data.email}
      </text>
      <text
        x="8"
        y="34"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#A08ACA"
      >
        {data.website}
      </text>
      <line x1="8" y1="38" x2="50" y2="38" stroke="#7B2FBE" strokeWidth="0.05" opacity="0.2" />
      {/* Address */}
      <text
        x="8"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#4A3A6A"
      >
        〒{data.zipCode}
      </text>
      <text
        x="8"
        y="46.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#4A3A6A"
      >
        {data.addressJa}
      </text>
    </g>
  ),
};

export const futureTemplates: TemplateDefinition[] = [
  quantumTemplate,
  orbitTemplate,
  nanoTemplate,
  hyperTemplate,
  nexusTemplate,
  singularityTemplate,
  voidFTemplate,
  matrixFTemplate,
  stellarTemplate,
  omegaTemplate,
];
