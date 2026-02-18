import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. PULSE (脈) — Heartbeat/pulse wave neon
// Neon pulse line across dark background with glow and texture
// ============================================================
const pulseTemplate: TemplateDefinition = {
  id: 'neon-pulse',
  name: 'PULSE',
  nameJa: '脈',
  category: 'neon',
  designer: 'Neon Lab',
  description: '暗闘に走る光の脈動。心臓の鼓動をネオンが描く。',
  accentColor: '#FF006E',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="neon-pulse-texture" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="3" seed="50" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="overlay" />
        </filter>
        <filter id="neon-pulse-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1" result="blur1" />
          <feGaussianBlur stdDeviation="0.4" in="SourceGraphic" result="blur2" />
          <feMerge>
            <feMergeNode in="blur1" />
            <feMergeNode in="blur2" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="neon-pulse-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0A0818" />
          <stop offset="50%" stopColor="#0D0D1A" />
          <stop offset="100%" stopColor="#100A1E" />
        </linearGradient>
        <radialGradient id="neon-pulse-ambient" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor="#FF006E" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#0D0D1A" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#neon-pulse-bg)" />
      <rect width="91" height="55" fill="url(#neon-pulse-bg)" filter="url(#neon-pulse-texture)" opacity="0.3" />
      <rect width="91" height="55" fill="url(#neon-pulse-ambient)" />
      {/* Wide glow background pulse */}
      <path d="M 0,28 L 15,28 L 20,28 L 24,18 L 28,38 L 32,22 L 36,34 L 40,28 L 55,28 L 60,28 L 64,15 L 68,40 L 72,20 L 76,35 L 80,28 L 91,28" stroke="#FF006E" strokeWidth="3" fill="none" strokeOpacity="0.06" strokeLinecap="round" strokeLinejoin="round" />
      {/* Medium glow pulse */}
      <path d="M 0,28 L 15,28 L 20,28 L 24,18 L 28,38 L 32,22 L 36,34 L 40,28 L 55,28 L 60,28 L 64,15 L 68,40 L 72,20 L 76,35 L 80,28 L 91,28" stroke="#FF006E" strokeWidth="1.2" fill="none" strokeOpacity="0.12" strokeLinecap="round" strokeLinejoin="round" />
      {/* Sharp pulse line */}
      <path d="M 0,28 L 15,28 L 20,28 L 24,18 L 28,38 L 32,22 L 36,34 L 40,28 L 55,28 L 60,28 L 64,15 L 68,40 L 72,20 L 76,35 L 80,28 L 91,28" stroke="#FF006E" strokeWidth="0.4" fill="none" filter="url(#neon-pulse-glow)" strokeLinecap="round" strokeLinejoin="round" />
      {/* Pulse peak dots */}
      <circle cx="64" cy="15" r="0.5" fill="#FF006E" fillOpacity="0.6" filter="url(#neon-pulse-glow)" />
      <circle cx="68" cy="40" r="0.4" fill="#FF006E" fillOpacity="0.5" />
      {/* Name */}
      <text x="45.5" y="15" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="5.5" letterSpacing="0.5" fill="#FF006E" filter="url(#neon-pulse-glow)">{data.nameJa}</text>
      <text x="45.5" y="45" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.4" fill="#FF80B7">{data.nameEn}</text>
      <text x="45.5" y="50" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#994060">{data.titleJa}</text>
      {/* Small decorative heartbeat monitor dots */}
      <circle cx="5" cy="28" r="0.3" fill="#FF006E" fillOpacity="0.3" />
      <circle cx="91" cy="28" r="0.3" fill="#FF006E" fillOpacity="0.3" />
      {data.logo && <image href={data.logo} x="41.5" y="35" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="neon-pulse-btexture" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="3" seed="51" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="overlay" />
        </filter>
        <filter id="neon-pulse-bglow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.6" result="blur1" />
          <feGaussianBlur stdDeviation="0.25" in="SourceGraphic" result="blur2" />
          <feMerge>
            <feMergeNode in="blur1" />
            <feMergeNode in="blur2" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#0D0D1A" />
      <rect width="91" height="55" fill="#0D0D1A" filter="url(#neon-pulse-btexture)" opacity="0.3" />
      {/* Subtle pulse accent */}
      <path d="M 0,8 L 10,8 L 13,4 L 16,12 L 19,6 L 22,10 L 25,8 L 45,8" stroke="#FF006E" strokeWidth="0.25" fill="none" strokeOpacity="0.3" strokeLinecap="round" strokeLinejoin="round" filter="url(#neon-pulse-bglow)" />
      <path d="M 0,8 L 10,8 L 13,4 L 16,12 L 19,6 L 22,10 L 25,8 L 45,8" stroke="#FF006E" strokeWidth="1.5" fill="none" strokeOpacity="0.04" strokeLinecap="round" strokeLinejoin="round" />
      {/* Bottom pulse accent */}
      <path d="M 50,50 L 60,50 L 63,46 L 66,54 L 69,48 L 72,52 L 75,50 L 91,50" stroke="#FF006E" strokeWidth="0.15" fill="none" strokeOpacity="0.2" strokeLinecap="round" strokeLinejoin="round" />
      <text x="10" y="17" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#FF006E" filter="url(#neon-pulse-bglow)">{data.companyJa}</text>
      <text x="10" y="22" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#FF80B7">{data.companyEn}</text>
      <text x="10" y="26.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#994060">{data.titleJa}</text>
      <line x1="10" y1="29" x2="55" y2="29" stroke="#FF006E" strokeWidth="0.08" strokeOpacity="0.35" />
      <text x="10" y="34" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#CC5090">{data.tel}</text>
      <text x="10" y="38.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#CC5090">{data.email}</text>
      <text x="10" y="43" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#994060">{data.website}</text>
      <line x1="10" y1="45.5" x2="55" y2="45.5" stroke="#FF006E" strokeWidth="0.06" strokeOpacity="0.25" />
      <text x="10" y="50" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#664050">〒{data.zipCode} {data.addressJa}</text>
      {data.logo && <image href={data.logo} x="74" y="28" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
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
      <defs>
        <filter id="neon-laser-texture" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="1.5" numOctaves="3" seed="55" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="overlay" />
        </filter>
        <filter id="neon-laser-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.8" result="blur1" />
          <feGaussianBlur stdDeviation="0.3" in="SourceGraphic" result="blur2" />
          <feMerge>
            <feMergeNode in="blur1" />
            <feMergeNode in="blur2" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="neon-laser-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#080812" />
          <stop offset="100%" stopColor="#0D0D1A" />
        </linearGradient>
        <linearGradient id="neon-laser-beam" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#00F5D4" stopOpacity="0" />
          <stop offset="20%" stopColor="#00F5D4" stopOpacity="1" />
          <stop offset="80%" stopColor="#00F5D4" stopOpacity="1" />
          <stop offset="100%" stopColor="#00F5D4" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#neon-laser-bg)" />
      <rect width="91" height="55" fill="url(#neon-laser-bg)" filter="url(#neon-laser-texture)" opacity="0.25" />
      {/* Primary laser beam - wide glow */}
      <line x1="0" y1="12" x2="91" y2="5" stroke="#00F5D4" strokeWidth="2" strokeOpacity="0.06" />
      <line x1="0" y1="12" x2="91" y2="5" stroke="#00F5D4" strokeWidth="0.8" strokeOpacity="0.1" />
      <line x1="0" y1="12" x2="91" y2="5" stroke="#00F5D4" strokeWidth="0.3" filter="url(#neon-laser-glow)" />
      {/* Secondary laser beam */}
      <line x1="0" y1="50" x2="91" y2="42" stroke="#00F5D4" strokeWidth="1.2" strokeOpacity="0.04" />
      <line x1="0" y1="50" x2="91" y2="42" stroke="#00F5D4" strokeWidth="0.2" filter="url(#neon-laser-glow)" strokeOpacity="0.7" />
      {/* Cross laser accent */}
      <line x1="75" y1="0" x2="91" y2="30" stroke="#00F5D4" strokeWidth="0.8" strokeOpacity="0.03" />
      <line x1="75" y1="0" x2="91" y2="30" stroke="#00F5D4" strokeWidth="0.12" strokeOpacity="0.35" filter="url(#neon-laser-glow)" />
      {/* Intersection glow points */}
      <circle cx="82" cy="13" r="0.6" fill="#00F5D4" fillOpacity="0.3" filter="url(#neon-laser-glow)" />
      <circle cx="88" cy="22" r="0.4" fill="#FFFFFF" fillOpacity="0.15" />
      {/* Name */}
      <text x="45.5" y="24" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6" letterSpacing="0.6" fill="#00F5D4" filter="url(#neon-laser-glow)">{data.nameJa}</text>
      <text x="45.5" y="31" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.5" fill="#80FAE9">{data.nameEn.toUpperCase()}</text>
      <text x="45.5" y="38" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#408880">{data.titleJa}</text>
      {data.logo && <image href={data.logo} x="41.5" y="39" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="neon-laser-btexture" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="1.5" numOctaves="3" seed="56" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="overlay" />
        </filter>
        <filter id="neon-laser-bglow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.5" result="blur1" />
          <feGaussianBlur stdDeviation="0.2" in="SourceGraphic" result="blur2" />
          <feMerge>
            <feMergeNode in="blur1" />
            <feMergeNode in="blur2" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#0D0D1A" />
      <rect width="91" height="55" fill="#0D0D1A" filter="url(#neon-laser-btexture)" opacity="0.25" />
      {/* Subtle laser lines */}
      <line x1="0" y1="7" x2="91" y2="4" stroke="#00F5D4" strokeWidth="0.15" strokeOpacity="0.25" filter="url(#neon-laser-bglow)" />
      <line x1="0" y1="7" x2="91" y2="4" stroke="#00F5D4" strokeWidth="1" strokeOpacity="0.03" />
      <line x1="60" y1="55" x2="91" y2="45" stroke="#00F5D4" strokeWidth="0.1" strokeOpacity="0.2" />
      {/* Grid dots decoration */}
      <circle cx="85" cy="5" r="0.3" fill="#00F5D4" fillOpacity="0.2" />
      <circle cx="88" cy="3" r="0.2" fill="#00F5D4" fillOpacity="0.15" />
      <text x="10" y="16" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#00F5D4" filter="url(#neon-laser-bglow)">{data.companyJa}</text>
      <text x="10" y="21" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#80FAE9">{data.companyEn}</text>
      <text x="10" y="25.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#408880">{data.titleJa}</text>
      <line x1="10" y1="28" x2="55" y2="28" stroke="#00F5D4" strokeWidth="0.08" strokeOpacity="0.3" />
      <text x="10" y="33" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#40C8B0">{data.tel}</text>
      <text x="10" y="37.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#40C8B0">{data.email}</text>
      <text x="10" y="42" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#308880">{data.website}</text>
      <line x1="10" y1="44.5" x2="55" y2="44.5" stroke="#00F5D4" strokeWidth="0.06" strokeOpacity="0.2" />
      <text x="10" y="49.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#306860">〒{data.zipCode} {data.addressJa}</text>
      {data.logo && <image href={data.logo} x="74" y="25" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
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
      <defs>
        <filter id="neon-plasma-texture" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="1" numOctaves="3" seed="60" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="overlay" />
        </filter>
        <filter id="neon-plasma-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.9" result="blur1" />
          <feGaussianBlur stdDeviation="0.35" in="SourceGraphic" result="blur2" />
          <feMerge>
            <feMergeNode in="blur1" />
            <feMergeNode in="blur2" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="neon-plasma-core" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#EE80FF" stopOpacity="0.25" />
          <stop offset="30%" stopColor="#BF00FF" stopOpacity="0.15" />
          <stop offset="60%" stopColor="#8000B0" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#0D0D1A" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="neon-plasma-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0D0818" />
          <stop offset="100%" stopColor="#0D0D1A" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#neon-plasma-bg)" />
      <rect width="91" height="55" fill="url(#neon-plasma-bg)" filter="url(#neon-plasma-texture)" opacity="0.25" />
      {/* Plasma core glow */}
      <circle cx="73" cy="20" r="20" fill="url(#neon-plasma-core)" />
      {/* Plasma arcs */}
      <path d="M 73,20 Q 68,10 60,4" stroke="#BF00FF" strokeWidth="0.3" fill="none" strokeOpacity="0.5" filter="url(#neon-plasma-glow)" />
      <path d="M 73,20 Q 68,10 60,4" stroke="#BF00FF" strokeWidth="1.5" fill="none" strokeOpacity="0.04" />
      <path d="M 73,20 Q 80,11 88,6" stroke="#BF00FF" strokeWidth="0.22" fill="none" strokeOpacity="0.4" filter="url(#neon-plasma-glow)" />
      <path d="M 73,20 Q 79,28 86,36" stroke="#9F40DF" strokeWidth="0.2" fill="none" strokeOpacity="0.35" filter="url(#neon-plasma-glow)" />
      <path d="M 73,20 Q 64,26 56,30" stroke="#BF00FF" strokeWidth="0.18" fill="none" strokeOpacity="0.3" filter="url(#neon-plasma-glow)" />
      <path d="M 73,20 Q 76,8 81,0" stroke="#9F40DF" strokeWidth="0.15" fill="none" strokeOpacity="0.25" />
      <path d="M 73,20 Q 83,22 91,17" stroke="#BF00FF" strokeWidth="0.12" fill="none" strokeOpacity="0.2" />
      {/* Core center with bright point */}
      <circle cx="73" cy="20" r="2.5" fill="#BF00FF" fillOpacity="0.12" />
      <circle cx="73" cy="20" r="1.2" fill="#BF00FF" fillOpacity="0.2" filter="url(#neon-plasma-glow)" />
      <circle cx="73" cy="20" r="0.5" fill="#FFFFFF" fillOpacity="0.3" />
      {/* Name */}
      <text x="10" y="21" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="5.5" letterSpacing="0.4" fill="#BF00FF" filter="url(#neon-plasma-glow)">{data.nameJa}</text>
      <text x="10" y="28" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.3" fill="#DF80FF">{data.nameEn}</text>
      <text x="10" y="39" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#704090">{data.titleJa}</text>
      <text x="10" y="46" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#604080">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="10" y="47" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="neon-plasma-btexture" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="1" numOctaves="3" seed="61" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="overlay" />
        </filter>
        <filter id="neon-plasma-bglow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.5" result="blur1" />
          <feGaussianBlur stdDeviation="0.2" in="SourceGraphic" result="blur2" />
          <feMerge>
            <feMergeNode in="blur1" />
            <feMergeNode in="blur2" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#0D0D1A" />
      <rect width="91" height="55" fill="#0D0D1A" filter="url(#neon-plasma-btexture)" opacity="0.25" />
      {/* Small plasma accent */}
      <circle cx="82" cy="10" r="8" fill="#BF00FF" fillOpacity="0.03" />
      <path d="M 82,10 Q 86,5 89,2" stroke="#BF00FF" strokeWidth="0.15" fill="none" strokeOpacity="0.25" filter="url(#neon-plasma-bglow)" />
      <path d="M 82,10 Q 78,5 75,3" stroke="#9F40DF" strokeWidth="0.12" fill="none" strokeOpacity="0.2" filter="url(#neon-plasma-bglow)" />
      <path d="M 82,10 Q 87,12 91,14" stroke="#BF00FF" strokeWidth="0.1" fill="none" strokeOpacity="0.15" />
      <circle cx="82" cy="10" r="1" fill="#BF00FF" fillOpacity="0.15" filter="url(#neon-plasma-bglow)" />
      <circle cx="82" cy="10" r="0.3" fill="#FFFFFF" fillOpacity="0.15" />
      <text x="10" y="16" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#BF00FF" filter="url(#neon-plasma-bglow)">{data.companyJa}</text>
      <text x="10" y="21" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#DF80FF">{data.companyEn}</text>
      <text x="10" y="25.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#704090">{data.titleJa}</text>
      <line x1="10" y1="28" x2="55" y2="28" stroke="#BF00FF" strokeWidth="0.08" strokeOpacity="0.3" />
      <text x="10" y="33" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#A050D0">{data.tel}</text>
      <text x="10" y="37.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#A050D0">{data.email}</text>
      <text x="10" y="42" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#8040A0">{data.website}</text>
      <line x1="10" y1="44.5" x2="55" y2="44.5" stroke="#BF00FF" strokeWidth="0.06" strokeOpacity="0.2" />
      <text x="10" y="49.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#603080">〒{data.zipCode} {data.addressJa}</text>
      {data.logo && <image href={data.logo} x="74" y="30" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
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
      <defs>
        <filter id="neon-volt-texture" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="1.3" numOctaves="3" seed="65" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="overlay" />
        </filter>
        <filter id="neon-volt-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1" result="blur1" />
          <feGaussianBlur stdDeviation="0.35" in="SourceGraphic" result="blur2" />
          <feMerge>
            <feMergeNode in="blur1" />
            <feMergeNode in="blur2" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="neon-volt-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#080D08" />
          <stop offset="100%" stopColor="#0D0D1A" />
        </linearGradient>
        <radialGradient id="neon-volt-flash" cx="0.2" cy="0.4" r="0.5">
          <stop offset="0%" stopColor="#39FF14" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#0D0D1A" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#neon-volt-bg)" />
      <rect width="91" height="55" fill="url(#neon-volt-bg)" filter="url(#neon-volt-texture)" opacity="0.25" />
      <rect width="91" height="55" fill="url(#neon-volt-flash)" />
      {/* Main lightning bolt */}
      <path d="M 20,0 L 15,20 L 25,18 L 12,55" stroke="#39FF14" strokeWidth="3" fill="none" strokeOpacity="0.05" strokeLinejoin="round" />
      <path d="M 20,0 L 15,20 L 25,18 L 12,55" stroke="#39FF14" strokeWidth="1" fill="none" strokeOpacity="0.1" strokeLinejoin="round" />
      <path d="M 20,0 L 15,20 L 25,18 L 12,55" stroke="#39FF14" strokeWidth="0.4" fill="none" filter="url(#neon-volt-glow)" strokeLinejoin="round" />
      {/* Secondary bolt */}
      <path d="M 80,0 L 78,12 L 82,11 L 76,28" stroke="#39FF14" strokeWidth="1.5" fill="none" strokeOpacity="0.03" strokeLinejoin="round" />
      <path d="M 80,0 L 78,12 L 82,11 L 76,28" stroke="#39FF14" strokeWidth="0.2" fill="none" strokeOpacity="0.3" filter="url(#neon-volt-glow)" strokeLinejoin="round" />
      {/* Bolt junction bright points */}
      <circle cx="15" cy="20" r="0.6" fill="#39FF14" fillOpacity="0.4" filter="url(#neon-volt-glow)" />
      <circle cx="25" cy="18" r="0.5" fill="#FFFFFF" fillOpacity="0.2" />
      <circle cx="78" cy="12" r="0.4" fill="#39FF14" fillOpacity="0.3" />
      {/* Name */}
      <text x="50" y="22" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="6" letterSpacing="0.5" fill="#39FF14" filter="url(#neon-volt-glow)">{data.nameJa}</text>
      <text x="50" y="30" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="500" fontSize="2" letterSpacing="0.5" fill="#9CFF8A">{data.nameEn.toUpperCase()}</text>
      <text x="50" y="40" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#308020">{data.titleJa}</text>
      {data.logo && <image href={data.logo} x="41.5" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="neon-volt-btexture" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="1.3" numOctaves="3" seed="66" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="overlay" />
        </filter>
        <filter id="neon-volt-bglow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.5" result="blur1" />
          <feGaussianBlur stdDeviation="0.2" in="SourceGraphic" result="blur2" />
          <feMerge>
            <feMergeNode in="blur1" />
            <feMergeNode in="blur2" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#0D0D1A" />
      <rect width="91" height="55" fill="#0D0D1A" filter="url(#neon-volt-btexture)" opacity="0.25" />
      {/* Small bolt accent */}
      <path d="M 84,0 L 82,8 L 85,7 L 80,22" stroke="#39FF14" strokeWidth="0.15" fill="none" strokeOpacity="0.2" filter="url(#neon-volt-bglow)" strokeLinejoin="round" />
      <path d="M 84,0 L 82,8 L 85,7 L 80,22" stroke="#39FF14" strokeWidth="1" fill="none" strokeOpacity="0.02" strokeLinejoin="round" />
      <circle cx="82" cy="8" r="0.35" fill="#39FF14" fillOpacity="0.2" filter="url(#neon-volt-bglow)" />
      {/* Bottom spark line */}
      <path d="M 0,50 L 5,48 L 3,52 L 10,50" stroke="#39FF14" strokeWidth="0.1" fill="none" strokeOpacity="0.15" strokeLinejoin="round" />
      <text x="10" y="16" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#39FF14" filter="url(#neon-volt-bglow)">{data.companyJa}</text>
      <text x="10" y="21" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#9CFF8A">{data.companyEn}</text>
      <text x="10" y="25.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#308020">{data.titleJa}</text>
      <line x1="10" y1="28" x2="55" y2="28" stroke="#39FF14" strokeWidth="0.08" strokeOpacity="0.3" />
      <text x="10" y="33" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#60CC50">{data.tel}</text>
      <text x="10" y="37.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#60CC50">{data.email}</text>
      <text x="10" y="42" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#409830">{data.website}</text>
      <line x1="10" y1="44.5" x2="55" y2="44.5" stroke="#39FF14" strokeWidth="0.06" strokeOpacity="0.2" />
      <text x="10" y="49.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#306020">〒{data.zipCode} {data.addressJa}</text>
      {data.logo && <image href={data.logo} x="74" y="30" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
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
      <defs>
        <filter id="neon-flux-texture" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves="3" seed="70" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="overlay" />
        </filter>
        <filter id="neon-flux-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.8" result="blur1" />
          <feGaussianBlur stdDeviation="0.3" in="SourceGraphic" result="blur2" />
          <feMerge>
            <feMergeNode in="blur1" />
            <feMergeNode in="blur2" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="neon-flux-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#080D12" />
          <stop offset="100%" stopColor="#0D0D1A" />
        </linearGradient>
        <linearGradient id="neon-flux-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#00F5D4" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#00F5D4" stopOpacity="1" />
          <stop offset="100%" stopColor="#00F5D4" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#neon-flux-bg)" />
      <rect width="91" height="55" fill="url(#neon-flux-bg)" filter="url(#neon-flux-texture)" opacity="0.25" />
      {/* Flowing energy curves - wide glow */}
      <path d="M -5,40 Q 15,35 30,42 Q 50,50 70,38 Q 85,28 96,35" stroke="#00F5D4" strokeWidth="2.5" fill="none" strokeOpacity="0.05" />
      <path d="M -5,40 Q 15,35 30,42 Q 50,50 70,38 Q 85,28 96,35" stroke="#00F5D4" strokeWidth="0.4" fill="none" filter="url(#neon-flux-glow)" />
      {/* Second flow - pink accent */}
      <path d="M -5,44 Q 20,38 35,46 Q 55,54 75,42 Q 88,32 96,39" stroke="#FF006E" strokeWidth="1.5" fill="none" strokeOpacity="0.04" />
      <path d="M -5,44 Q 20,38 35,46 Q 55,54 75,42 Q 88,32 96,39" stroke="#FF006E" strokeWidth="0.2" fill="none" strokeOpacity="0.35" filter="url(#neon-flux-glow)" />
      {/* Third flow - subtle */}
      <path d="M -5,36 Q 10,32 25,38 Q 45,46 65,34 Q 80,24 96,31" stroke="#00F5D4" strokeWidth="0.15" fill="none" strokeOpacity="0.2" />
      {/* Flow particle dots */}
      <circle cx="30" cy="42" r="0.4" fill="#00F5D4" fillOpacity="0.35" filter="url(#neon-flux-glow)" />
      <circle cx="70" cy="38" r="0.3" fill="#00F5D4" fillOpacity="0.25" />
      <circle cx="50" cy="47" r="0.25" fill="#FF006E" fillOpacity="0.2" />
      {/* Name */}
      <text x="45.5" y="18" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="6" letterSpacing="0.5" fill="#00F5D4" filter="url(#neon-flux-glow)">{data.nameJa}</text>
      <text x="45.5" y="25" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.3" fill="#80FAE9">{data.nameEn}</text>
      <text x="45.5" y="32" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#408880">{data.titleJa}</text>
      {data.logo && <image href={data.logo} x="41.5" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="neon-flux-btexture" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves="3" seed="71" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="overlay" />
        </filter>
        <filter id="neon-flux-bglow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.5" result="blur1" />
          <feMerge>
            <feMergeNode in="blur1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#0D0D1A" />
      <rect width="91" height="55" fill="#0D0D1A" filter="url(#neon-flux-btexture)" opacity="0.25" />
      {/* Subtle flux lines */}
      <path d="M -5,48 Q 20,44 45,50 Q 70,55 96,48" stroke="#00F5D4" strokeWidth="0.2" fill="none" strokeOpacity="0.2" filter="url(#neon-flux-bglow)" />
      <path d="M -5,5 Q 20,8 45,4 Q 70,1 96,5" stroke="#FF006E" strokeWidth="0.1" fill="none" strokeOpacity="0.12" />
      <circle cx="45" cy="50" r="0.25" fill="#00F5D4" fillOpacity="0.2" />
      <text x="10" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#00F5D4" filter="url(#neon-flux-bglow)">{data.companyJa}</text>
      <text x="10" y="19" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#80FAE9">{data.companyEn}</text>
      <text x="10" y="23.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#408880">{data.titleJa}</text>
      <line x1="10" y1="26" x2="55" y2="26" stroke="#00F5D4" strokeWidth="0.08" strokeOpacity="0.3" />
      <text x="10" y="31" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#40C8B0">{data.tel}</text>
      <text x="10" y="35.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#40C8B0">{data.email}</text>
      <text x="10" y="40" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#308880">{data.website}</text>
      <line x1="10" y1="42.5" x2="55" y2="42.5" stroke="#00F5D4" strokeWidth="0.06" strokeOpacity="0.2" />
      <text x="10" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#306860">〒{data.zipCode} {data.addressJa}</text>
      {data.logo && <image href={data.logo} x="74" y="12" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 6. STROBE (閃) — Strobe flash/alternating bands
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
      <defs>
        <filter id="neon-strobe-texture" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="2" numOctaves="2" seed="75" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="overlay" />
        </filter>
        <filter id="neon-strobe-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.6" result="blur1" />
          <feGaussianBlur stdDeviation="0.2" in="SourceGraphic" result="blur2" />
          <feMerge>
            <feMergeNode in="blur1" />
            <feMergeNode in="blur2" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="neon-strobe-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#080808" />
          <stop offset="50%" stopColor="#0D0D12" />
          <stop offset="100%" stopColor="#080808" />
        </linearGradient>
        <linearGradient id="neon-strobe-flash" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.03" />
          <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.06" />
          <stop offset="55%" stopColor="#FFFFFF" stopOpacity="0.03" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#neon-strobe-bg)" />
      <rect width="91" height="55" fill="url(#neon-strobe-bg)" filter="url(#neon-strobe-texture)" opacity="0.2" />
      <rect width="91" height="55" fill="url(#neon-strobe-flash)" />
      {/* Strobe bands */}
      {[0, 5, 10, 15, 20, 33, 38, 43, 48, 52].map((y, i) => (
        <rect key={`neon-strobe-band-${i}`} x="0" y={y} width="91" height={1 + (i % 3) * 0.5} fill="#FFFFFF" fillOpacity={0.02 + (i % 4) * 0.015} />
      ))}
      {/* Central flash zone */}
      <rect x="0" y="21" width="91" height="12" fill="#FFFFFF" fillOpacity="0.02" />
      {/* Horizontal scan lines */}
      <line x1="0" y1="22" x2="91" y2="22" stroke="#FFFFFF" strokeWidth="0.05" strokeOpacity="0.15" />
      <line x1="0" y1="32" x2="91" y2="32" stroke="#FFFFFF" strokeWidth="0.05" strokeOpacity="0.15" />
      {/* Name */}
      <text x="45.5" y="25" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="6" letterSpacing="0.5" fill="#FFFFFF" filter="url(#neon-strobe-glow)">{data.nameJa}</text>
      <text x="45.5" y="31" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="500" fontSize="2" letterSpacing="0.6" fill="#CCCCCC">{data.nameEn.toUpperCase()}</text>
      <text x="45.5" y="39" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#666666">{data.titleJa}</text>
      <text x="45.5" y="46" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#555555">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="41.5" y="6" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="neon-strobe-btexture" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="2" numOctaves="2" seed="76" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="overlay" />
        </filter>
        <filter id="neon-strobe-bglow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.4" result="blur1" />
          <feMerge>
            <feMergeNode in="blur1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#0D0D1A" />
      <rect width="91" height="55" fill="#0D0D1A" filter="url(#neon-strobe-btexture)" opacity="0.2" />
      {/* Subtle strobe bands */}
      <rect x="0" y="3" width="91" height="1" fill="#FFFFFF" fillOpacity="0.025" />
      <rect x="0" y="8" width="91" height="0.8" fill="#FFFFFF" fillOpacity="0.03" />
      <rect x="0" y="47" width="91" height="1" fill="#FFFFFF" fillOpacity="0.025" />
      <rect x="0" y="51" width="91" height="0.8" fill="#FFFFFF" fillOpacity="0.03" />
      {/* Scan lines */}
      <line x1="0" y1="3" x2="91" y2="3" stroke="#FFFFFF" strokeWidth="0.04" strokeOpacity="0.1" />
      <line x1="0" y1="51" x2="91" y2="51" stroke="#FFFFFF" strokeWidth="0.04" strokeOpacity="0.1" />
      <text x="10" y="16" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="2.5" fill="#FFFFFF" filter="url(#neon-strobe-bglow)">{data.companyJa}</text>
      <text x="10" y="21" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#AAAAAA">{data.companyEn}</text>
      <text x="10" y="25.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#666666">{data.titleJa}</text>
      <line x1="10" y1="28" x2="55" y2="28" stroke="#FFFFFF" strokeWidth="0.06" strokeOpacity="0.25" />
      <text x="10" y="33" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#CCCCCC">{data.tel}</text>
      <text x="10" y="37.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#CCCCCC">{data.email}</text>
      <text x="10" y="42" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#999999">{data.website}</text>
      <line x1="10" y1="44.5" x2="55" y2="44.5" stroke="#FFFFFF" strokeWidth="0.04" strokeOpacity="0.2" />
      <text x="10" y="49" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#555555">〒{data.zipCode} {data.addressJa}</text>
      {data.logo && <image href={data.logo} x="74" y="14" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 7. PRISM-N (稜) — Prismatic light refraction
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
      <defs>
        <filter id="neon-prism-n-texture" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="1.4" numOctaves="3" seed="80" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="overlay" />
        </filter>
        <filter id="neon-prism-n-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.7" result="blur1" />
          <feGaussianBlur stdDeviation="0.25" in="SourceGraphic" result="blur2" />
          <feMerge>
            <feMergeNode in="blur1" />
            <feMergeNode in="blur2" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="neon-prism-n-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0A0A14" />
          <stop offset="100%" stopColor="#0D0D1A" />
        </linearGradient>
        <linearGradient id="neon-prism-n-rainbow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF006E" />
          <stop offset="16%" stopColor="#FF6B00" />
          <stop offset="33%" stopColor="#FDD835" />
          <stop offset="50%" stopColor="#39FF14" />
          <stop offset="66%" stopColor="#00F5D4" />
          <stop offset="83%" stopColor="#2979FF" />
          <stop offset="100%" stopColor="#BF00FF" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#neon-prism-n-bg)" />
      <rect width="91" height="55" fill="url(#neon-prism-n-bg)" filter="url(#neon-prism-n-texture)" opacity="0.2" />
      {/* Prism triangle */}
      <polygon points="12,40 22,15 32,40" fill="#FFFFFF" fillOpacity="0.015" />
      <polygon points="12,40 22,15 32,40" fill="none" stroke="#555555" strokeWidth="0.2" />
      {/* Internal refraction line */}
      <line x1="17" y1="27" x2="27" y2="27" stroke="#FFFFFF" strokeWidth="0.06" strokeOpacity="0.1" />
      {/* Incoming white beam with glow */}
      <line x1="0" y1="25" x2="17" y2="27" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.04" />
      <line x1="0" y1="25" x2="17" y2="27" stroke="#FFFFFF" strokeWidth="0.3" strokeOpacity="0.5" filter="url(#neon-prism-n-glow)" />
      {/* Refracted spectral beams with glow */}
      <line x1="27" y1="24" x2="91" y2="11" stroke="#FF006E" strokeWidth="0.3" strokeOpacity="0.5" filter="url(#neon-prism-n-glow)" />
      <line x1="27" y1="24" x2="91" y2="11" stroke="#FF006E" strokeWidth="1.5" strokeOpacity="0.04" />
      <line x1="27" y1="26" x2="91" y2="17" stroke="#FF6B00" strokeWidth="0.25" strokeOpacity="0.4" filter="url(#neon-prism-n-glow)" />
      <line x1="27" y1="28" x2="91" y2="23" stroke="#FDD835" strokeWidth="0.25" strokeOpacity="0.4" filter="url(#neon-prism-n-glow)" />
      <line x1="27" y1="30" x2="91" y2="29" stroke="#39FF14" strokeWidth="0.25" strokeOpacity="0.4" filter="url(#neon-prism-n-glow)" />
      <line x1="27" y1="32" x2="91" y2="35" stroke="#00F5D4" strokeWidth="0.25" strokeOpacity="0.4" filter="url(#neon-prism-n-glow)" />
      <line x1="27" y1="34" x2="91" y2="41" stroke="#2979FF" strokeWidth="0.25" strokeOpacity="0.4" filter="url(#neon-prism-n-glow)" />
      <line x1="27" y1="36" x2="91" y2="47" stroke="#BF00FF" strokeWidth="0.3" strokeOpacity="0.5" filter="url(#neon-prism-n-glow)" />
      <line x1="27" y1="36" x2="91" y2="47" stroke="#BF00FF" strokeWidth="1.5" strokeOpacity="0.04" />
      {/* Name */}
      <text x="58" y="9" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="5.5" letterSpacing="0.3" fill="#FFFFFF" filter="url(#neon-prism-n-glow)">{data.nameJa}</text>
      <text x="10" y="50" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.3" fill="#AAAAAA">{data.nameEn}</text>
      {data.logo && <image href={data.logo} x="10" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="neon-prism-n-btexture" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="1.4" numOctaves="3" seed="81" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="overlay" />
        </filter>
        <filter id="neon-prism-n-bglow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.4" result="blur1" />
          <feMerge>
            <feMergeNode in="blur1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#0D0D1A" />
      <rect width="91" height="55" fill="#0D0D1A" filter="url(#neon-prism-n-btexture)" opacity="0.2" />
      {/* Subtle spectral accent */}
      <line x1="68" y1="0" x2="91" y2="4" stroke="#FF006E" strokeWidth="0.15" strokeOpacity="0.2" filter="url(#neon-prism-n-bglow)" />
      <line x1="71" y1="0" x2="91" y2="6" stroke="#39FF14" strokeWidth="0.12" strokeOpacity="0.15" filter="url(#neon-prism-n-bglow)" />
      <line x1="74" y1="0" x2="91" y2="8" stroke="#BF00FF" strokeWidth="0.12" strokeOpacity="0.15" filter="url(#neon-prism-n-bglow)" />
      <line x1="77" y1="0" x2="91" y2="10" stroke="#00F5D4" strokeWidth="0.1" strokeOpacity="0.1" />
      {/* Small prism */}
      <polygon points="80,2 83,0 86,2" fill="none" stroke="#555555" strokeWidth="0.08" strokeOpacity="0.3" />
      <text x="10" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#FFFFFF" filter="url(#neon-prism-n-bglow)">{data.companyJa}</text>
      <text x="10" y="19" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#AAAAAA">{data.companyEn}</text>
      <text x="10" y="23.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#777777">{data.titleJa}</text>
      <line x1="10" y1="26" x2="55" y2="26" stroke="#FFFFFF" strokeWidth="0.06" strokeOpacity="0.2" />
      <text x="10" y="31" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#CCCCCC">{data.tel}</text>
      <text x="10" y="35.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#CCCCCC">{data.email}</text>
      <text x="10" y="40" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#999999">{data.website}</text>
      <line x1="10" y1="42.5" x2="55" y2="42.5" stroke="#FFFFFF" strokeWidth="0.04" strokeOpacity="0.15" />
      <text x="10" y="47.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#555555">〒{data.zipCode} {data.addressJa}</text>
      {data.logo && <image href={data.logo} x="74" y="30" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 8. BEAM (射) — Focused light beam / spotlight
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
      <defs>
        <filter id="neon-beam-texture" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="3" seed="85" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="overlay" />
        </filter>
        <filter id="neon-beam-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.6" result="blur1" />
          <feMerge>
            <feMergeNode in="blur1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="neon-beam-light" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#00F5D4" stopOpacity="0.18" />
          <stop offset="40%" stopColor="#00F5D4" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#00F5D4" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="neon-beam-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#080D12" />
          <stop offset="100%" stopColor="#0D0D1A" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#neon-beam-bg)" />
      <rect width="91" height="55" fill="url(#neon-beam-bg)" filter="url(#neon-beam-texture)" opacity="0.2" />
      {/* Light beam cone */}
      <polygon points="40,0 50,0 65,55 25,55" fill="url(#neon-beam-light)" />
      {/* Beam edges */}
      <line x1="40" y1="0" x2="25" y2="55" stroke="#00F5D4" strokeWidth="0.12" strokeOpacity="0.25" filter="url(#neon-beam-glow)" />
      <line x1="50" y1="0" x2="65" y2="55" stroke="#00F5D4" strokeWidth="0.12" strokeOpacity="0.25" filter="url(#neon-beam-glow)" />
      {/* Dust particles in beam */}
      <circle cx="42" cy="12" r="0.35" fill="#00F5D4" fillOpacity="0.4" filter="url(#neon-beam-glow)" />
      <circle cx="46" cy="20" r="0.2" fill="#FFFFFF" fillOpacity="0.35" />
      <circle cx="40" cy="30" r="0.3" fill="#00F5D4" fillOpacity="0.3" filter="url(#neon-beam-glow)" />
      <circle cx="49" cy="35" r="0.2" fill="#FFFFFF" fillOpacity="0.2" />
      <circle cx="37" cy="42" r="0.35" fill="#00F5D4" fillOpacity="0.2" />
      <circle cx="53" cy="40" r="0.2" fill="#FFFFFF" fillOpacity="0.15" />
      <circle cx="44" cy="48" r="0.25" fill="#00F5D4" fillOpacity="0.15" />
      {/* Name in beam */}
      <text x="45.5" y="24" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="6" letterSpacing="0.5" fill="#FFFFFF" filter="url(#neon-beam-glow)">{data.nameJa}</text>
      <text x="45.5" y="31" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.3" fill="#80FAE9">{data.nameEn}</text>
      <text x="45.5" y="40" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#408880">{data.titleJa}</text>
      {data.logo && <image href={data.logo} x="5" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="neon-beam-btexture" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="3" seed="86" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="overlay" />
        </filter>
        <filter id="neon-beam-bglow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.4" result="blur1" />
          <feMerge>
            <feMergeNode in="blur1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="neon-beam-blight" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#00F5D4" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#00F5D4" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#0D0D1A" />
      <rect width="91" height="55" fill="#0D0D1A" filter="url(#neon-beam-btexture)" opacity="0.2" />
      {/* Subtle beam accent */}
      <polygon points="75,0 80,0 86,55 69,55" fill="url(#neon-beam-blight)" />
      <line x1="75" y1="0" x2="69" y2="55" stroke="#00F5D4" strokeWidth="0.06" strokeOpacity="0.15" />
      <line x1="80" y1="0" x2="86" y2="55" stroke="#00F5D4" strokeWidth="0.06" strokeOpacity="0.15" />
      {/* Particles */}
      <circle cx="77" cy="15" r="0.2" fill="#00F5D4" fillOpacity="0.15" />
      <circle cx="79" cy="30" r="0.15" fill="#FFFFFF" fillOpacity="0.1" />
      <text x="10" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#00F5D4" filter="url(#neon-beam-bglow)">{data.companyJa}</text>
      <text x="10" y="19" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#80FAE9">{data.companyEn}</text>
      <text x="10" y="23.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#408880">{data.titleJa}</text>
      <line x1="10" y1="26" x2="55" y2="26" stroke="#00F5D4" strokeWidth="0.06" strokeOpacity="0.25" />
      <text x="10" y="31" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#40C8B0">{data.tel}</text>
      <text x="10" y="35.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#40C8B0">{data.email}</text>
      <text x="10" y="40" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#308880">{data.website}</text>
      <line x1="10" y1="42.5" x2="55" y2="42.5" stroke="#00F5D4" strokeWidth="0.04" strokeOpacity="0.2" />
      <text x="10" y="47.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#306860">〒{data.zipCode} {data.addressJa}</text>
      {data.logo && <image href={data.logo} x="60" y="10" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 9. SPARK (火花) — Electric spark particles
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
      <defs>
        <filter id="neon-spark-texture" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="1.3" numOctaves="3" seed="90" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="overlay" />
        </filter>
        <filter id="neon-spark-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.7" result="blur1" />
          <feGaussianBlur stdDeviation="0.25" in="SourceGraphic" result="blur2" />
          <feMerge>
            <feMergeNode in="blur1" />
            <feMergeNode in="blur2" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="neon-spark-origin" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#FDD835" stopOpacity="0.2" />
          <stop offset="40%" stopColor="#FDD835" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#0D0D1A" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="neon-spark-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0D0D0A" />
          <stop offset="100%" stopColor="#0D0D1A" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#neon-spark-bg)" />
      <rect width="91" height="55" fill="url(#neon-spark-bg)" filter="url(#neon-spark-texture)" opacity="0.25" />
      {/* Spark origin glow */}
      <circle cx="76" cy="14" r="10" fill="url(#neon-spark-origin)" />
      {/* Origin point */}
      <circle cx="76" cy="14" r="1.2" fill="#FDD835" fillOpacity="0.5" filter="url(#neon-spark-glow)" />
      <circle cx="76" cy="14" r="0.4" fill="#FFFFFF" fillOpacity="0.5" />
      {/* Spark trails with glow */}
      <line x1="76" y1="14" x2="86" y2="7" stroke="#FDD835" strokeWidth="0.2" strokeOpacity="0.6" filter="url(#neon-spark-glow)" />
      <line x1="76" y1="14" x2="89" y2="17" stroke="#FFE082" strokeWidth="0.15" strokeOpacity="0.5" filter="url(#neon-spark-glow)" />
      <line x1="76" y1="14" x2="83" y2="2" stroke="#FDD835" strokeWidth="0.15" strokeOpacity="0.4" filter="url(#neon-spark-glow)" />
      <line x1="76" y1="14" x2="66" y2="4" stroke="#FFE082" strokeWidth="0.12" strokeOpacity="0.35" />
      <line x1="76" y1="14" x2="89" y2="24" stroke="#FDD835" strokeWidth="0.12" strokeOpacity="0.3" />
      <line x1="76" y1="14" x2="70" y2="24" stroke="#FFE082" strokeWidth="0.1" strokeOpacity="0.25" />
      {/* Spark dots at trail ends */}
      <circle cx="86" cy="7" r="0.5" fill="#FDD835" fillOpacity="0.6" filter="url(#neon-spark-glow)" />
      <circle cx="89" cy="17" r="0.35" fill="#FFE082" fillOpacity="0.5" />
      <circle cx="83" cy="2" r="0.35" fill="#FDD835" fillOpacity="0.4" />
      <circle cx="66" cy="4" r="0.3" fill="#FFE082" fillOpacity="0.35" />
      <circle cx="89" cy="24" r="0.25" fill="#FDD835" fillOpacity="0.3" />
      {/* Floating ambient sparks */}
      <circle cx="8" cy="45" r="0.3" fill="#FDD835" fillOpacity="0.2" filter="url(#neon-spark-glow)" />
      <circle cx="28" cy="48" r="0.2" fill="#FFE082" fillOpacity="0.15" />
      <circle cx="48" cy="51" r="0.25" fill="#FDD835" fillOpacity="0.12" />
      <circle cx="15" cy="50" r="0.15" fill="#FFE082" fillOpacity="0.1" />
      {/* Name */}
      <text x="10" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6" letterSpacing="0.5" fill="#FDD835" filter="url(#neon-spark-glow)">{data.nameJa}</text>
      <text x="10" y="30" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.3" fill="#FFE082">{data.nameEn}</text>
      <text x="10" y="40" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#8B7A20">{data.titleJa}</text>
      {data.logo && <image href={data.logo} x="10" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="neon-spark-btexture" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="1.3" numOctaves="3" seed="91" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="overlay" />
        </filter>
        <filter id="neon-spark-bglow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.4" result="blur1" />
          <feGaussianBlur stdDeviation="0.15" in="SourceGraphic" result="blur2" />
          <feMerge>
            <feMergeNode in="blur1" />
            <feMergeNode in="blur2" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#0D0D1A" />
      <rect width="91" height="55" fill="#0D0D1A" filter="url(#neon-spark-btexture)" opacity="0.25" />
      {/* Small spark accent */}
      <circle cx="82" cy="8" r="0.6" fill="#FDD835" fillOpacity="0.3" filter="url(#neon-spark-bglow)" />
      <circle cx="82" cy="8" r="0.2" fill="#FFFFFF" fillOpacity="0.2" />
      <line x1="82" y1="8" x2="87" y2="3" stroke="#FDD835" strokeWidth="0.12" strokeOpacity="0.3" filter="url(#neon-spark-bglow)" />
      <line x1="82" y1="8" x2="88" y2="11" stroke="#FFE082" strokeWidth="0.08" strokeOpacity="0.2" />
      <line x1="82" y1="8" x2="78" y2="3" stroke="#FDD835" strokeWidth="0.08" strokeOpacity="0.15" />
      <circle cx="87" cy="3" r="0.25" fill="#FDD835" fillOpacity="0.25" />
      <circle cx="88" cy="11" r="0.2" fill="#FFE082" fillOpacity="0.15" />
      {/* Bottom ambient sparks */}
      <circle cx="5" cy="50" r="0.15" fill="#FDD835" fillOpacity="0.1" />
      <circle cx="20" cy="52" r="0.1" fill="#FFE082" fillOpacity="0.08" />
      <text x="10" y="16" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#FDD835" filter="url(#neon-spark-bglow)">{data.companyJa}</text>
      <text x="10" y="21" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#FFE082">{data.companyEn}</text>
      <text x="10" y="25.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#8B7A20">{data.titleJa}</text>
      <line x1="10" y1="28" x2="55" y2="28" stroke="#FDD835" strokeWidth="0.06" strokeOpacity="0.3" />
      <text x="10" y="33" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#CCBB40">{data.tel}</text>
      <text x="10" y="37.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#CCBB40">{data.email}</text>
      <text x="10" y="42" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#998A30">{data.website}</text>
      <line x1="10" y1="44.5" x2="55" y2="44.5" stroke="#FDD835" strokeWidth="0.04" strokeOpacity="0.2" />
      <text x="10" y="49.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#665E20">〒{data.zipCode} {data.addressJa}</text>
      {data.logo && <image href={data.logo} x="74" y="30" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 10. CIRCUIT (回路) — Circuit board traces
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
      <defs>
        <filter id="neon-circuit-texture" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="1.5" numOctaves="3" seed="95" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="overlay" />
        </filter>
        <filter id="neon-circuit-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.5" result="blur1" />
          <feGaussianBlur stdDeviation="0.2" in="SourceGraphic" result="blur2" />
          <feMerge>
            <feMergeNode in="blur1" />
            <feMergeNode in="blur2" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="neon-circuit-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#080A08" />
          <stop offset="100%" stopColor="#0A0A12" />
        </linearGradient>
        <radialGradient id="neon-circuit-chip" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#39FF14" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#0A0A12" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#neon-circuit-bg)" />
      <rect width="91" height="55" fill="url(#neon-circuit-bg)" filter="url(#neon-circuit-texture)" opacity="0.2" />
      {/* Circuit traces with glow */}
      <path d="M 0,10 L 8,10 L 12,6 L 20,6 L 20,10 L 28,10" stroke="#39FF14" strokeWidth="0.2" fill="none" strokeOpacity="0.4" filter="url(#neon-circuit-glow)" />
      <path d="M 0,10 L 8,10 L 12,6 L 20,6 L 20,10 L 28,10" stroke="#39FF14" strokeWidth="1" fill="none" strokeOpacity="0.03" />
      <path d="M 28,10 L 28,15 L 35,15" stroke="#39FF14" strokeWidth="0.2" fill="none" strokeOpacity="0.3" filter="url(#neon-circuit-glow)" />
      <path d="M 0,46 L 10,46 L 14,42 L 22,42 L 22,46 L 30,46 L 30,50 L 40,50" stroke="#39FF14" strokeWidth="0.2" fill="none" strokeOpacity="0.35" filter="url(#neon-circuit-glow)" />
      <path d="M 0,46 L 10,46 L 14,42 L 22,42 L 22,46 L 30,46 L 30,50 L 40,50" stroke="#39FF14" strokeWidth="1" fill="none" strokeOpacity="0.03" />
      <path d="M 65,0 L 65,6 L 70,6 L 70,12 L 75,12 L 75,6 L 80,6 L 80,0" stroke="#00F5D4" strokeWidth="0.15" fill="none" strokeOpacity="0.25" filter="url(#neon-circuit-glow)" />
      <path d="M 70,55 L 70,48 L 75,48 L 78,44 L 85,44 L 85,48 L 91,48" stroke="#00F5D4" strokeWidth="0.15" fill="none" strokeOpacity="0.2" filter="url(#neon-circuit-glow)" />
      {/* Circuit nodes (solder points) with glow */}
      <circle cx="8" cy="10" r="0.7" fill="#39FF14" fillOpacity="0.5" filter="url(#neon-circuit-glow)" />
      <circle cx="28" cy="10" r="0.6" fill="#39FF14" fillOpacity="0.4" filter="url(#neon-circuit-glow)" />
      <circle cx="35" cy="15" r="0.5" fill="#39FF14" fillOpacity="0.35" />
      <circle cx="14" cy="42" r="0.5" fill="#39FF14" fillOpacity="0.4" filter="url(#neon-circuit-glow)" />
      <circle cx="30" cy="46" r="0.5" fill="#39FF14" fillOpacity="0.35" />
      <circle cx="70" cy="6" r="0.5" fill="#00F5D4" fillOpacity="0.3" filter="url(#neon-circuit-glow)" />
      <circle cx="75" cy="12" r="0.5" fill="#00F5D4" fillOpacity="0.25" />
      <circle cx="78" cy="44" r="0.4" fill="#00F5D4" fillOpacity="0.25" />
      {/* IC chip outline with ambient glow */}
      <rect x="60" y="22" width="10" height="6" fill="url(#neon-circuit-chip)" stroke="#39FF14" strokeWidth="0.15" strokeOpacity="0.25" />
      <line x1="58" y1="24" x2="60" y2="24" stroke="#39FF14" strokeWidth="0.1" strokeOpacity="0.2" />
      <line x1="58" y1="26" x2="60" y2="26" stroke="#39FF14" strokeWidth="0.1" strokeOpacity="0.2" />
      <line x1="70" y1="24" x2="72" y2="24" stroke="#39FF14" strokeWidth="0.1" strokeOpacity="0.2" />
      <line x1="70" y1="26" x2="72" y2="26" stroke="#39FF14" strokeWidth="0.1" strokeOpacity="0.2" />
      {/* Name */}
      <text x="30" y="24" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="5.5" letterSpacing="0.4" fill="#39FF14" filter="url(#neon-circuit-glow)">{data.nameJa}</text>
      <text x="10" y="33" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.3" fill="#9CFF8A">{data.nameEn}</text>
      <text x="10" y="40" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#308020">{data.titleJa}</text>
      {data.logo && <image href={data.logo} x="78" y="30" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="neon-circuit-btexture" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="1.5" numOctaves="3" seed="96" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="overlay" />
        </filter>
        <filter id="neon-circuit-bglow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.4" result="blur1" />
          <feGaussianBlur stdDeviation="0.15" in="SourceGraphic" result="blur2" />
          <feMerge>
            <feMergeNode in="blur1" />
            <feMergeNode in="blur2" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#0A0A12" />
      <rect width="91" height="55" fill="#0A0A12" filter="url(#neon-circuit-btexture)" opacity="0.2" />
      {/* Subtle circuit traces */}
      <path d="M 70,0 L 70,4 L 75,4 L 78,8 L 85,8 L 85,4 L 91,4" stroke="#39FF14" strokeWidth="0.12" fill="none" strokeOpacity="0.2" filter="url(#neon-circuit-bglow)" />
      <path d="M 70,0 L 70,4 L 75,4 L 78,8 L 85,8 L 85,4 L 91,4" stroke="#39FF14" strokeWidth="0.8" fill="none" strokeOpacity="0.02" />
      <circle cx="75" cy="4" r="0.4" fill="#39FF14" fillOpacity="0.2" filter="url(#neon-circuit-bglow)" />
      <circle cx="85" cy="8" r="0.35" fill="#39FF14" fillOpacity="0.2" />
      <circle cx="78" cy="8" r="0.3" fill="#39FF14" fillOpacity="0.15" />
      {/* Bottom trace */}
      <path d="M 0,50 L 5,50 L 8,46 L 15,46 L 15,50 L 25,50" stroke="#00F5D4" strokeWidth="0.1" fill="none" strokeOpacity="0.15" />
      <circle cx="8" cy="46" r="0.3" fill="#00F5D4" fillOpacity="0.15" />
      <text x="10" y="16" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.5" fill="#39FF14" filter="url(#neon-circuit-bglow)">{data.companyJa}</text>
      <text x="10" y="21" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#9CFF8A">{data.companyEn}</text>
      <text x="10" y="25.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#308020">{data.titleJa}</text>
      <line x1="10" y1="28" x2="55" y2="28" stroke="#39FF14" strokeWidth="0.06" strokeOpacity="0.3" />
      <text x="10" y="33" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#60CC50">{data.tel}</text>
      <text x="10" y="37.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#60CC50">{data.email}</text>
      <text x="10" y="42" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#409830">{data.website}</text>
      <line x1="10" y1="44.5" x2="55" y2="44.5" stroke="#39FF14" strokeWidth="0.04" strokeOpacity="0.2" />
      <text x="10" y="49.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#306020">〒{data.zipCode} {data.addressJa}</text>
      {data.logo && <image href={data.logo} x="74" y="30" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
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
