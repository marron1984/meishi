import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. PULSE (脈) — Heartbeat/pulse wave neon
// Neon pulse line across dark background
// ============================================================
const pulseTemplate: TemplateDefinition = {
  id: 'neon-pulse',
  name: 'PULSE',
  nameJa: '脈',
  category: 'neon',
  designer: 'Neon Lab',
  description: '暗闇に走る光の脈動。心臓の鼓動をネオンが描く。',
  accentColor: '#FF006E',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0D0D1A" />
      <defs>
        <filter id="neon-pulse-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Pulse wave line */}
      <path
        d="M 0,28 L 15,28 L 20,28 L 24,18 L 28,38 L 32,22 L 36,34 L 40,28 L 55,28 L 60,28 L 64,15 L 68,40 L 72,20 L 76,35 L 80,28 L 91,28"
        stroke="#FF006E"
        strokeWidth="0.5"
        fill="none"
        filter="url(#neon-pulse-glow)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Subtle background pulse */}
      <path
        d="M 0,28 L 15,28 L 20,28 L 24,18 L 28,38 L 32,22 L 36,34 L 40,28 L 55,28 L 60,28 L 64,15 L 68,40 L 72,20 L 76,35 L 80,28 L 91,28"
        stroke="#FF006E"
        strokeWidth="2"
        fill="none"
        strokeOpacity="0.08"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x="45.5"
        y="16"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#FF006E"
        filter="url(#neon-pulse-glow)"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="45"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#FF80B7"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="50"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.3"
        fill="#994060"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0D0D1A" />
      <defs>
        <filter id="neon-pulse-bglow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Subtle pulse accent */}
      <path d="M 0,8 L 10,8 L 13,4 L 16,12 L 19,6 L 22,10 L 25,8 L 40,8" stroke="#FF006E" strokeWidth="0.3" fill="none" strokeOpacity="0.3" strokeLinecap="round" strokeLinejoin="round" />
      <text
        x="10"
        y="18"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#FF006E"
        filter="url(#neon-pulse-bglow)"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="22.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#FF80B7"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="26" x2="50" y2="26" stroke="#FF006E" strokeWidth="0.08" strokeOpacity="0.4" />
      <text
        x="10"
        y="32"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#CC5090"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#CC5090"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="40"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#CC5090"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="48"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#664050"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 2. LASER (光線) — Laser beam lines
// Sharp diagonal laser lines cutting across dark bg
// ============================================================
const laserTemplate: TemplateDefinition = {
  id: 'neon-laser',
  name: 'LASER',
  nameJa: '光線',
  category: 'neon',
  designer: 'Neon Lab',
  description: '闇を切り裂くレーザー光線。鋭角な光の軌跡。',
  accentColor: '#00F5D4',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0D0D1A" />
      <defs>
        <filter id="neon-laser-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Laser beams cutting across */}
      <line x1="0" y1="12" x2="91" y2="5" stroke="#00F5D4" strokeWidth="0.3" filter="url(#neon-laser-glow)" />
      <line x1="0" y1="12" x2="91" y2="5" stroke="#00F5D4" strokeWidth="1.5" strokeOpacity="0.06" />
      <line x1="0" y1="50" x2="91" y2="42" stroke="#00F5D4" strokeWidth="0.2" filter="url(#neon-laser-glow)" />
      <line x1="0" y1="50" x2="91" y2="42" stroke="#00F5D4" strokeWidth="1" strokeOpacity="0.04" />
      {/* Cross laser */}
      <line x1="75" y1="0" x2="91" y2="30" stroke="#00F5D4" strokeWidth="0.15" strokeOpacity="0.4" />
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="0.6"
        fill="#00F5D4"
        filter="url(#neon-laser-glow)"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.4"
        fill="#80FAE9"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="38"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#408880"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0D0D1A" />
      <defs>
        <filter id="neon-laser-bglow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Subtle laser line */}
      <line x1="0" y1="8" x2="91" y2="4" stroke="#00F5D4" strokeWidth="0.15" strokeOpacity="0.3" />
      <text
        x="10"
        y="16"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#00F5D4"
        filter="url(#neon-laser-bglow)"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="20.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#80FAE9"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="24" x2="50" y2="24" stroke="#00F5D4" strokeWidth="0.08" strokeOpacity="0.3" />
      <text
        x="10"
        y="30"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#40C8B0"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="34"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#40C8B0"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="38"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#40C8B0"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="48"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#306860"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 3. PLASMA (電漿) — Plasma ball discharge effect
// Radiating electrical arcs from a center point
// ============================================================
const plasmaTemplate: TemplateDefinition = {
  id: 'neon-plasma',
  name: 'PLASMA',
  nameJa: '電漿',
  category: 'neon',
  designer: 'Neon Lab',
  description: 'プラズマ球の放電。中心から放射する光のフィラメント。',
  accentColor: '#BF00FF',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0D0D1A" />
      <defs>
        <filter id="neon-plasma-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.7" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="neon-plasma-core" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#BF00FF" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#8000B0" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#0D0D1A" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Plasma core glow */}
      <circle cx="72" cy="20" r="18" fill="url(#neon-plasma-core)" />
      {/* Plasma arcs radiating from core */}
      <path d="M 72,20 Q 68,10 60,5" stroke="#BF00FF" strokeWidth="0.25" fill="none" strokeOpacity="0.5" filter="url(#neon-plasma-glow)" />
      <path d="M 72,20 Q 80,12 88,8" stroke="#BF00FF" strokeWidth="0.2" fill="none" strokeOpacity="0.4" filter="url(#neon-plasma-glow)" />
      <path d="M 72,20 Q 78,28 85,35" stroke="#9F40DF" strokeWidth="0.2" fill="none" strokeOpacity="0.35" filter="url(#neon-plasma-glow)" />
      <path d="M 72,20 Q 65,26 58,30" stroke="#BF00FF" strokeWidth="0.18" fill="none" strokeOpacity="0.3" filter="url(#neon-plasma-glow)" />
      <path d="M 72,20 Q 75,8 80,0" stroke="#9F40DF" strokeWidth="0.15" fill="none" strokeOpacity="0.3" />
      <path d="M 72,20 Q 82,22 91,18" stroke="#BF00FF" strokeWidth="0.15" fill="none" strokeOpacity="0.25" />
      {/* Core center */}
      <circle cx="72" cy="20" r="2" fill="#BF00FF" fillOpacity="0.15" />
      <circle cx="72" cy="20" r="0.8" fill="#FFFFFF" fillOpacity="0.2" />
      <text
        x="10"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.4"
        fill="#BF00FF"
        filter="url(#neon-plasma-glow)"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="29"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#DF80FF"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="40"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#704090"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0D0D1A" />
      <defs>
        <filter id="neon-plasma-bglow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Small plasma accent */}
      <circle cx="82" cy="10" r="6" fill="#BF00FF" fillOpacity="0.05" />
      <path d="M 82,10 Q 85,6 88,3" stroke="#BF00FF" strokeWidth="0.12" fill="none" strokeOpacity="0.25" />
      <path d="M 82,10 Q 78,6 75,4" stroke="#9F40DF" strokeWidth="0.1" fill="none" strokeOpacity="0.2" />
      <text
        x="10"
        y="16"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#BF00FF"
        filter="url(#neon-plasma-bglow)"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="20.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#DF80FF"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="24" x2="50" y2="24" stroke="#BF00FF" strokeWidth="0.08" strokeOpacity="0.3" />
      <text
        x="10"
        y="30"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#A050D0"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="34"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#A050D0"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="38"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#A050D0"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="48"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#603080"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 4. VOLT (電) — Electric voltage arc
// Zigzag lightning bolt on dark background
// ============================================================
const voltTemplate: TemplateDefinition = {
  id: 'neon-volt',
  name: 'VOLT',
  nameJa: '電',
  category: 'neon',
  designer: 'Neon Lab',
  description: '電圧の衝撃。稲妻のジグザグが闇を切り裂く。',
  accentColor: '#39FF14',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0D0D1A" />
      <defs>
        <filter id="neon-volt-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Lightning bolt */}
      <path d="M 20,0 L 15,20 L 25,18 L 12,55" stroke="#39FF14" strokeWidth="0.5" fill="none" filter="url(#neon-volt-glow)" strokeLinejoin="round" />
      <path d="M 20,0 L 15,20 L 25,18 L 12,55" stroke="#39FF14" strokeWidth="2.5" fill="none" strokeOpacity="0.06" strokeLinejoin="round" />
      {/* Secondary small bolt */}
      <path d="M 80,0 L 78,12 L 82,11 L 76,28" stroke="#39FF14" strokeWidth="0.2" fill="none" strokeOpacity="0.3" filter="url(#neon-volt-glow)" strokeLinejoin="round" />
      <text
        x="50"
        y="22"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="6"
        letterSpacing="0.5"
        fill="#39FF14"
        filter="url(#neon-volt-glow)"
      >
        {data.nameJa}
      </text>
      <text
        x="50"
        y="30"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="2"
        letterSpacing="0.4"
        fill="#9CFF8A"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="50"
        y="40"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#308020"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0D0D1A" />
      <defs>
        <filter id="neon-volt-bglow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Small bolt accent */}
      <path d="M 84,0 L 82,8 L 85,7 L 80,20" stroke="#39FF14" strokeWidth="0.15" fill="none" strokeOpacity="0.25" strokeLinejoin="round" />
      <text
        x="10"
        y="16"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#39FF14"
        filter="url(#neon-volt-bglow)"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="20.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#9CFF8A"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="24" x2="50" y2="24" stroke="#39FF14" strokeWidth="0.08" strokeOpacity="0.3" />
      <text
        x="10"
        y="30"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#60CC50"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="34"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#60CC50"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="38"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#60CC50"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="48"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#306020"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 5. FLUX (流束) — Flowing energy stream
// Smooth flowing neon curves representing energy flow
// ============================================================
const fluxTemplate: TemplateDefinition = {
  id: 'neon-flux',
  name: 'FLUX',
  nameJa: '流束',
  category: 'neon',
  designer: 'Neon Lab',
  description: '流束のような光の流れ。エネルギーが曲線を描いて流れる。',
  accentColor: '#00F5D4',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0D0D1A" />
      <defs>
        <filter id="neon-flux-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Flowing energy curves */}
      <path d="M -5,40 Q 15,35 30,42 Q 50,50 70,38 Q 85,28 96,35" stroke="#00F5D4" strokeWidth="0.4" fill="none" filter="url(#neon-flux-glow)" />
      <path d="M -5,40 Q 15,35 30,42 Q 50,50 70,38 Q 85,28 96,35" stroke="#00F5D4" strokeWidth="2" fill="none" strokeOpacity="0.05" />
      <path d="M -5,44 Q 20,38 35,46 Q 55,54 75,42 Q 88,32 96,39" stroke="#FF006E" strokeWidth="0.2" fill="none" strokeOpacity="0.4" filter="url(#neon-flux-glow)" />
      <path d="M -5,36 Q 10,32 25,38 Q 45,46 65,34 Q 80,24 96,31" stroke="#00F5D4" strokeWidth="0.15" fill="none" strokeOpacity="0.25" />
      <text
        x="45.5"
        y="18"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="6"
        letterSpacing="0.5"
        fill="#00F5D4"
        filter="url(#neon-flux-glow)"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="25"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#80FAE9"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="32"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#408880"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0D0D1A" />
      <defs>
        <filter id="neon-flux-bglow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Subtle flux line */}
      <path d="M -5,48 Q 20,44 45,50 Q 70,55 96,48" stroke="#00F5D4" strokeWidth="0.2" fill="none" strokeOpacity="0.2" />
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#00F5D4"
        filter="url(#neon-flux-bglow)"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#80FAE9"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="22" x2="50" y2="22" stroke="#00F5D4" strokeWidth="0.08" strokeOpacity="0.3" />
      <text
        x="10"
        y="28"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#40C8B0"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#40C8B0"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#40C8B0"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#306860"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 6. STROBE (閃) — Strobe flash/alternating bands
// Horizontal banding with bright flash accent
// ============================================================
const strobeTemplate: TemplateDefinition = {
  id: 'neon-strobe',
  name: 'STROBE',
  nameJa: '閃',
  category: 'neon',
  designer: 'Neon Lab',
  description: 'ストロボの閃光。明滅するバンドが空間を切り刻む。',
  accentColor: '#FFFFFF',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0D0D1A" />
      {/* Strobe bands */}
      <rect x="0" y="0" width="91" height="2" fill="#FFFFFF" fillOpacity="0.03" />
      <rect x="0" y="5" width="91" height="1.5" fill="#FFFFFF" fillOpacity="0.05" />
      <rect x="0" y="10" width="91" height="1" fill="#FFFFFF" fillOpacity="0.08" />
      <rect x="0" y="15" width="91" height="2" fill="#FFFFFF" fillOpacity="0.04" />
      <rect x="0" y="20" width="91" height="1.5" fill="#FFFFFF" fillOpacity="0.06" />
      <rect x="0" y="33" width="91" height="1.5" fill="#FFFFFF" fillOpacity="0.06" />
      <rect x="0" y="38" width="91" height="2" fill="#FFFFFF" fillOpacity="0.04" />
      <rect x="0" y="43" width="91" height="1" fill="#FFFFFF" fillOpacity="0.08" />
      <rect x="0" y="48" width="91" height="1.5" fill="#FFFFFF" fillOpacity="0.05" />
      <rect x="0" y="52" width="91" height="2" fill="#FFFFFF" fillOpacity="0.03" />
      {/* Central flash zone */}
      <rect x="0" y="22" width="91" height="10" fill="#FFFFFF" fillOpacity="0.02" />
      <text
        x="45.5"
        y="25"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="6"
        letterSpacing="0.5"
        fill="#FFFFFF"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="2"
        letterSpacing="0.5"
        fill="#CCCCCC"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="39"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#666666"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0D0D1A" />
      {/* Subtle strobe bands */}
      <rect x="0" y="3" width="91" height="1" fill="#FFFFFF" fillOpacity="0.03" />
      <rect x="0" y="8" width="91" height="0.8" fill="#FFFFFF" fillOpacity="0.04" />
      <rect x="0" y="47" width="91" height="1" fill="#FFFFFF" fillOpacity="0.03" />
      <rect x="0" y="51" width="91" height="0.8" fill="#FFFFFF" fillOpacity="0.04" />
      <text
        x="10"
        y="16"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="2.2"
        fill="#FFFFFF"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="20.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#AAAAAA"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="24" x2="50" y2="24" stroke="#FFFFFF" strokeWidth="0.06" strokeOpacity="0.3" />
      <text
        x="10"
        y="30"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#CCCCCC"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="34"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#CCCCCC"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="38"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#CCCCCC"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="46"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#555555"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 7. PRISM-N (稜) — Prismatic light refraction
// Rainbow-like spectral bands from a prism
// ============================================================
const prismNTemplate: TemplateDefinition = {
  id: 'neon-prism-n',
  name: 'PRISM-N',
  nameJa: '稜',
  category: 'neon',
  designer: 'Neon Lab',
  description: 'プリズムの分光。白い光が虹色のスペクトルに変わる。',
  accentColor: '#FF006E',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0D0D1A" />
      <defs>
        <filter id="neon-prism-n-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Prism triangle */}
      <polygon points="12,40 22,15 32,40" fill="none" stroke="#666666" strokeWidth="0.2" />
      <polygon points="12,40 22,15 32,40" fill="#FFFFFF" fillOpacity="0.02" />
      {/* Incoming white beam */}
      <line x1="0" y1="25" x2="17" y2="27" stroke="#FFFFFF" strokeWidth="0.3" strokeOpacity="0.4" />
      {/* Refracted spectral beams */}
      <line x1="27" y1="24" x2="91" y2="12" stroke="#FF006E" strokeWidth="0.3" strokeOpacity="0.5" filter="url(#neon-prism-n-glow)" />
      <line x1="27" y1="26" x2="91" y2="18" stroke="#FF6B00" strokeWidth="0.25" strokeOpacity="0.4" />
      <line x1="27" y1="28" x2="91" y2="24" stroke="#FDD835" strokeWidth="0.25" strokeOpacity="0.4" />
      <line x1="27" y1="30" x2="91" y2="30" stroke="#39FF14" strokeWidth="0.25" strokeOpacity="0.4" filter="url(#neon-prism-n-glow)" />
      <line x1="27" y1="32" x2="91" y2="36" stroke="#00F5D4" strokeWidth="0.25" strokeOpacity="0.4" />
      <line x1="27" y1="34" x2="91" y2="42" stroke="#2979FF" strokeWidth="0.25" strokeOpacity="0.4" />
      <line x1="27" y1="36" x2="91" y2="48" stroke="#BF00FF" strokeWidth="0.3" strokeOpacity="0.5" filter="url(#neon-prism-n-glow)" />
      <text
        x="58"
        y="10"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="4"
        letterSpacing="0.3"
        fill="#FFFFFF"
      >
        {data.nameJa}
      </text>
      <text
        x="58"
        y="54"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#AAAAAA"
      >
        {data.nameEn}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0D0D1A" />
      {/* Subtle spectral accent */}
      <line x1="70" y1="0" x2="91" y2="4" stroke="#FF006E" strokeWidth="0.15" strokeOpacity="0.2" />
      <line x1="72" y1="0" x2="91" y2="6" stroke="#39FF14" strokeWidth="0.12" strokeOpacity="0.15" />
      <line x1="74" y1="0" x2="91" y2="8" stroke="#BF00FF" strokeWidth="0.12" strokeOpacity="0.15" />
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#FFFFFF"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#AAAAAA"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="22" x2="50" y2="22" stroke="#FFFFFF" strokeWidth="0.06" strokeOpacity="0.2" />
      <text
        x="10"
        y="28"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#CCCCCC"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#CCCCCC"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#CCCCCC"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="46"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#555555"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 8. BEAM (射) — Focused light beam / spotlight
// Single concentrated beam of light from above
// ============================================================
const beamTemplate: TemplateDefinition = {
  id: 'neon-beam',
  name: 'BEAM',
  nameJa: '射',
  category: 'neon',
  designer: 'Neon Lab',
  description: '一条の光。暗闇を射抜くスポットライトの集中力。',
  accentColor: '#00F5D4',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0D0D1A" />
      <defs>
        <linearGradient id="neon-beam-light" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#00F5D4" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#00F5D4" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Light beam cone from top */}
      <polygon points="40,0 50,0 65,55 25,55" fill="url(#neon-beam-light)" />
      {/* Beam edges */}
      <line x1="40" y1="0" x2="25" y2="55" stroke="#00F5D4" strokeWidth="0.12" strokeOpacity="0.3" />
      <line x1="50" y1="0" x2="65" y2="55" stroke="#00F5D4" strokeWidth="0.12" strokeOpacity="0.3" />
      {/* Dust particles in beam */}
      <circle cx="42" cy="15" r="0.3" fill="#00F5D4" fillOpacity="0.4" />
      <circle cx="46" cy="22" r="0.2" fill="#FFFFFF" fillOpacity="0.3" />
      <circle cx="40" cy="30" r="0.25" fill="#00F5D4" fillOpacity="0.3" />
      <circle cx="48" cy="35" r="0.2" fill="#FFFFFF" fillOpacity="0.25" />
      <circle cx="38" cy="42" r="0.3" fill="#00F5D4" fillOpacity="0.2" />
      <circle cx="52" cy="40" r="0.2" fill="#FFFFFF" fillOpacity="0.2" />
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="6"
        letterSpacing="0.5"
        fill="#FFFFFF"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#80FAE9"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="40"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#408880"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0D0D1A" />
      <defs>
        <linearGradient id="neon-beam-back-light" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#00F5D4" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#00F5D4" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Subtle beam accent */}
      <polygon points="75,0 80,0 85,55 70,55" fill="url(#neon-beam-back-light)" />
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#00F5D4"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="18.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#80FAE9"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="22" x2="50" y2="22" stroke="#00F5D4" strokeWidth="0.06" strokeOpacity="0.3" />
      <text
        x="10"
        y="28"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#40C8B0"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#40C8B0"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#40C8B0"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="46"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#306860"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 9. SPARK (火花) — Electric spark particles
// Scattered spark particles emanating from a point
// ============================================================
const sparkTemplate: TemplateDefinition = {
  id: 'neon-spark',
  name: 'SPARK',
  nameJa: '火花',
  category: 'neon',
  designer: 'Neon Lab',
  description: '火花が散る。接触の瞬間に生まれる光の粒子たち。',
  accentColor: '#FDD835',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0D0D1A" />
      <defs>
        <filter id="neon-spark-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Spark origin point */}
      <circle cx="75" cy="15" r="1" fill="#FDD835" fillOpacity="0.6" filter="url(#neon-spark-glow)" />
      {/* Spark trails radiating outward */}
      <line x1="75" y1="15" x2="85" y2="8" stroke="#FDD835" strokeWidth="0.2" strokeOpacity="0.6" filter="url(#neon-spark-glow)" />
      <line x1="75" y1="15" x2="88" y2="18" stroke="#FFE082" strokeWidth="0.15" strokeOpacity="0.5" />
      <line x1="75" y1="15" x2="82" y2="3" stroke="#FDD835" strokeWidth="0.15" strokeOpacity="0.4" />
      <line x1="75" y1="15" x2="65" y2="5" stroke="#FFE082" strokeWidth="0.12" strokeOpacity="0.35" />
      <line x1="75" y1="15" x2="88" y2="25" stroke="#FDD835" strokeWidth="0.12" strokeOpacity="0.3" />
      <line x1="75" y1="15" x2="70" y2="25" stroke="#FFE082" strokeWidth="0.1" strokeOpacity="0.3" />
      {/* Spark dots at trail ends */}
      <circle cx="85" cy="8" r="0.4" fill="#FDD835" fillOpacity="0.6" />
      <circle cx="88" cy="18" r="0.3" fill="#FFE082" fillOpacity="0.5" />
      <circle cx="82" cy="3" r="0.3" fill="#FDD835" fillOpacity="0.4" />
      <circle cx="65" cy="5" r="0.25" fill="#FFE082" fillOpacity="0.35" />
      <circle cx="88" cy="25" r="0.2" fill="#FDD835" fillOpacity="0.3" />
      {/* Floating sparks */}
      <circle cx="10" cy="45" r="0.3" fill="#FDD835" fillOpacity="0.2" />
      <circle cx="30" cy="48" r="0.2" fill="#FFE082" fillOpacity="0.15" />
      <circle cx="50" cy="50" r="0.25" fill="#FDD835" fillOpacity="0.15" />
      <text
        x="10"
        y="22"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="0.5"
        fill="#FDD835"
        filter="url(#neon-spark-glow)"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="30"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.3"
        fill="#FFE082"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="40"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#8B7A20"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0D0D1A" />
      <defs>
        <filter id="neon-spark-bglow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Small spark accent */}
      <circle cx="82" cy="8" r="0.5" fill="#FDD835" fillOpacity="0.3" filter="url(#neon-spark-bglow)" />
      <line x1="82" y1="8" x2="86" y2="4" stroke="#FDD835" strokeWidth="0.1" strokeOpacity="0.3" />
      <line x1="82" y1="8" x2="88" y2="10" stroke="#FFE082" strokeWidth="0.08" strokeOpacity="0.2" />
      <circle cx="86" cy="4" r="0.2" fill="#FDD835" fillOpacity="0.25" />
      <text
        x="10"
        y="16"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#FDD835"
        filter="url(#neon-spark-bglow)"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="20.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#FFE082"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="24" x2="50" y2="24" stroke="#FDD835" strokeWidth="0.06" strokeOpacity="0.3" />
      <text
        x="10"
        y="30"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#CCBB40"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="34"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#CCBB40"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="38"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#CCBB40"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="48"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#665E20"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 10. CIRCUIT (回路) — Circuit board traces
// PCB-style traces with neon glow on dark background
// ============================================================
const circuitTemplate: TemplateDefinition = {
  id: 'neon-circuit',
  name: 'CIRCUIT',
  nameJa: '回路',
  category: 'neon',
  designer: 'Neon Lab',
  description: '回路基板の美。電子が巡る光のパスウェイ。',
  accentColor: '#39FF14',
  renderFront: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0A0A12" />
      <defs>
        <filter id="neon-circuit-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Circuit traces */}
      <path d="M 0,10 L 8,10 L 12,6 L 20,6 L 20,10 L 28,10" stroke="#39FF14" strokeWidth="0.2" fill="none" strokeOpacity="0.4" filter="url(#neon-circuit-glow)" />
      <path d="M 28,10 L 28,15 L 35,15" stroke="#39FF14" strokeWidth="0.2" fill="none" strokeOpacity="0.3" />
      <path d="M 0,46 L 10,46 L 14,42 L 22,42 L 22,46 L 30,46 L 30,50 L 40,50" stroke="#39FF14" strokeWidth="0.2" fill="none" strokeOpacity="0.35" filter="url(#neon-circuit-glow)" />
      <path d="M 65,0 L 65,6 L 70,6 L 70,12 L 75,12 L 75,6 L 80,6 L 80,0" stroke="#00F5D4" strokeWidth="0.15" fill="none" strokeOpacity="0.3" />
      <path d="M 70,55 L 70,48 L 75,48 L 78,44 L 85,44 L 85,48 L 91,48" stroke="#00F5D4" strokeWidth="0.15" fill="none" strokeOpacity="0.25" />
      {/* Circuit nodes (solder points) */}
      <circle cx="8" cy="10" r="0.6" fill="#39FF14" fillOpacity="0.5" />
      <circle cx="28" cy="10" r="0.6" fill="#39FF14" fillOpacity="0.4" />
      <circle cx="35" cy="15" r="0.5" fill="#39FF14" fillOpacity="0.35" />
      <circle cx="14" cy="42" r="0.5" fill="#39FF14" fillOpacity="0.4" />
      <circle cx="30" cy="46" r="0.5" fill="#39FF14" fillOpacity="0.35" />
      <circle cx="70" cy="6" r="0.5" fill="#00F5D4" fillOpacity="0.35" />
      <circle cx="75" cy="12" r="0.5" fill="#00F5D4" fillOpacity="0.3" />
      <circle cx="78" cy="44" r="0.4" fill="#00F5D4" fillOpacity="0.3" />
      {/* IC chip outline */}
      <rect x="60" y="22" width="10" height="6" fill="none" stroke="#39FF14" strokeWidth="0.15" strokeOpacity="0.2" />
      <line x1="58" y1="24" x2="60" y2="24" stroke="#39FF14" strokeWidth="0.1" strokeOpacity="0.2" />
      <line x1="58" y1="26" x2="60" y2="26" stroke="#39FF14" strokeWidth="0.1" strokeOpacity="0.2" />
      <line x1="70" y1="24" x2="72" y2="24" stroke="#39FF14" strokeWidth="0.1" strokeOpacity="0.2" />
      <line x1="70" y1="26" x2="72" y2="26" stroke="#39FF14" strokeWidth="0.1" strokeOpacity="0.2" />
      <text
        x="30"
        y="24"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.4"
        fill="#39FF14"
        filter="url(#neon-circuit-glow)"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="33"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.8"
        letterSpacing="0.3"
        fill="#9CFF8A"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="40"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#308020"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0A0A12" />
      <defs>
        <filter id="neon-circuit-bglow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Subtle circuit traces */}
      <path d="M 70,0 L 70,4 L 75,4 L 78,8 L 85,8 L 85,4 L 91,4" stroke="#39FF14" strokeWidth="0.12" fill="none" strokeOpacity="0.2" />
      <circle cx="75" cy="4" r="0.4" fill="#39FF14" fillOpacity="0.2" />
      <circle cx="85" cy="8" r="0.3" fill="#39FF14" fillOpacity="0.2" />
      <text
        x="10"
        y="16"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.2"
        fill="#39FF14"
        filter="url(#neon-circuit-bglow)"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="20.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#9CFF8A"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="24" x2="50" y2="24" stroke="#39FF14" strokeWidth="0.06" strokeOpacity="0.3" />
      <text
        x="10"
        y="30"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#60CC50"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="34"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#60CC50"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="38"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#60CC50"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="48"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#306020"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

export const neonTemplates: TemplateDefinition[] = [
  pulseTemplate,
  laserTemplate,
  plasmaTemplate,
  voltTemplate,
  fluxTemplate,
  strobeTemplate,
  prismNTemplate,
  beamTemplate,
  sparkTemplate,
  circuitTemplate,
];
