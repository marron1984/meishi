import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. WA (和) — Ikko Tanaka: Concentric circles, Japanese modernism
// ============================================================
const waTemplate: TemplateDefinition = {
  id: 'wa',
  name: 'WA',
  nameJa: '和',
  category: 'japanese',
  designer: 'Ikko Tanaka',
  description: '同心円が織りなす日本のモダニズム。赤・紺・金の三色が調和する。',
  accentColor: '#C41E3A',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="japanese-wa-paper"><feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="japanese-wa-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.3" result="blur"/><feOffset dx="0.1" dy="0.15" result="shifted"/><feFlood floodColor="#1B1464" floodOpacity="0.1" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <linearGradient id="japanese-wa-gold" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#D4A853"/><stop offset="50%" stopColor="#E8C878"/><stop offset="100%" stopColor="#C49A48"/></linearGradient>
        <radialGradient id="japanese-wa-circle" cx="0.5" cy="0.5" r="0.5"><stop offset="0%" stopColor="#C41E3A" stopOpacity="0.8"/><stop offset="100%" stopColor="#C41E3A" stopOpacity="0.4"/></radialGradient>
      </defs>
      <rect width="91" height="55" fill="#F5F0E8" filter="url(#japanese-wa-paper)" />
      {/* Concentric circles — right side, behind text */}
      <circle cx="70" cy="28" r="24" fill="none" stroke="#1B1464" strokeWidth="0.3" opacity="0.12" />
      <circle cx="70" cy="28" r="18" fill="none" stroke="#1B1464" strokeWidth="0.4" opacity="0.18" />
      <circle cx="70" cy="28" r="12" fill="none" stroke="#C41E3A" strokeWidth="0.6" opacity="0.3" />
      <circle cx="70" cy="28" r="6" fill="none" stroke="url(#japanese-wa-gold)" strokeWidth="0.8" opacity="0.5" />
      <circle cx="70" cy="28" r="2" fill="url(#japanese-wa-circle)" />
      {/* Small decorative circles scattered */}
      <circle cx="85" cy="8" r="0.6" fill="#D4A853" opacity="0.2" />
      <circle cx="82" cy="48" r="0.4" fill="#C41E3A" opacity="0.15" />
      <circle cx="5" cy="50" r="0.5" fill="#1B1464" opacity="0.1" />
      {/* Thin gold accent line */}
      <line x1="8" y1="38" x2="40" y2="38" stroke="url(#japanese-wa-gold)" strokeWidth="0.3" opacity="0.6" />
      {/* Name */}
      <text x="8" y="20" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="6.5" fill="#1B1464" filter="url(#japanese-wa-shadow)">{data.nameJa}</text>
      <text x="8" y="26" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2.2" letterSpacing="0.2" fill="#C41E3A">{data.nameEn}</text>
      {/* Title */}
      <text x="8" y="32" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="2" fill="#666666">{data.titleJa}</text>
      {/* Company */}
      <text x="8" y="42" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2" fill="#1B1464">{data.companyJa}</text>
      <text x="8" y="46" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" letterSpacing="0.15" fill="#888888">{data.companyEn}</text>
      {data.logo && <image href={data.logo} x="78" y="44" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="japanese-wa-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <linearGradient id="japanese-wa-gold-b" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#D4A853"/><stop offset="50%" stopColor="#E8C878"/><stop offset="100%" stopColor="#C49A48"/></linearGradient>
      </defs>
      <rect width="91" height="55" fill="#1B1464" filter="url(#japanese-wa-paper-b)" />
      {/* Concentric circles — centered decorative */}
      <circle cx="45.5" cy="27.5" r="26" fill="none" stroke="#D4A853" strokeWidth="0.15" opacity="0.15" />
      <circle cx="45.5" cy="27.5" r="20" fill="none" stroke="#C41E3A" strokeWidth="0.2" opacity="0.2" />
      <circle cx="45.5" cy="27.5" r="14" fill="none" stroke="#D4A853" strokeWidth="0.3" opacity="0.3" />
      <circle cx="45.5" cy="27.5" r="8" fill="none" stroke="#C41E3A" strokeWidth="0.4" opacity="0.35" />
      <circle cx="45.5" cy="27.5" r="3" fill="#C41E3A" opacity="0.5" />
      {/* Corner ornament dots */}
      <circle cx="5" cy="5" r="0.5" fill="#D4A853" opacity="0.3" />
      <circle cx="86" cy="5" r="0.5" fill="#D4A853" opacity="0.3" />
      <circle cx="5" cy="50" r="0.5" fill="#D4A853" opacity="0.3" />
      <circle cx="86" cy="50" r="0.5" fill="#D4A853" opacity="0.3" />
      {/* Company name */}
      <text x="45.5" y="21" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="3.2" fill="#F5F0E8">{data.companyJa}</text>
      <text x="45.5" y="25.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.6" letterSpacing="0.3" fill="url(#japanese-wa-gold-b)">{data.companyEn}</text>
      {/* Separator */}
      <line x1="30" y1="29" x2="61" y2="29" stroke="#D4A853" strokeWidth="0.15" opacity="0.4" />
      {/* Contact info */}
      <text x="45.5" y="33.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#F5F0E8" opacity="0.7">{data.titleJa}</text>
      <text x="45.5" y="37.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#F5F0E8" opacity="0.65">{data.tel}</text>
      <text x="45.5" y="41" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#F5F0E8" opacity="0.65">{data.email}</text>
      <text x="45.5" y="44.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#F5F0E8" opacity="0.5">{data.website}</text>
      <text x="45.5" y="49.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#F5F0E8" opacity="0.35">〒{data.zipCode} {data.addressJa}</text>
      {data.logo && <image href={data.logo} x="4" y="4" width="6" height="6" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
    </g>
  ),
};

// ============================================================
// 2. ZEN (禅) — Shunmyo Masuno: Enso brush stroke, wabi-sabi
// ============================================================
const zenTemplate: TemplateDefinition = {
  id: 'zen',
  name: 'ZEN',
  nameJa: '禅',
  category: 'japanese',
  designer: 'Shunmyo Masuno',
  description: '円相の不完全な美。侘び寂びの精神を一筆に宿す。',
  accentColor: '#1a1a1a',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="japanese-zen-paper"><feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="5" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="japanese-zen-ink"><feGaussianBlur in="SourceGraphic" stdDeviation="0.15" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <linearGradient id="japanese-zen-enso" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#1a1a1a" stopOpacity="0.9"/><stop offset="60%" stopColor="#2a2a2a" stopOpacity="0.65"/><stop offset="100%" stopColor="#1a1a1a" stopOpacity="0.03"/></linearGradient>
      </defs>
      <rect width="91" height="55" fill="#F5F0E8" filter="url(#japanese-zen-paper)" />
      {/* Enso — incomplete circle brush stroke */}
      <path d="M 64 10 A 16 16 0 1 1 55 8" fill="none" stroke="url(#japanese-zen-enso)" strokeWidth="2.8" strokeLinecap="round" filter="url(#japanese-zen-ink)" />
      {/* Subtle ink splatter dots */}
      <circle cx="52" cy="6" r="0.3" fill="#1a1a1a" opacity="0.08" />
      <circle cx="66" cy="8" r="0.2" fill="#1a1a1a" opacity="0.06" />
      <circle cx="57" cy="32" r="0.25" fill="#1a1a1a" opacity="0.05" />
      <circle cx="72" cy="30" r="0.15" fill="#1a1a1a" opacity="0.07" />
      {/* Thin brush-like horizontal stroke */}
      <line x1="8" y1="36" x2="35" y2="36" stroke="#1a1a1a" strokeWidth="0.08" opacity="0.15" />
      {/* Name — bottom left, understated */}
      <text x="8" y="39" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="5.5" fill="#1a1a1a">{data.nameJa}</text>
      <text x="8" y="44.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.15" fill="#888888">{data.nameEn}</text>
      {/* Title — subtle */}
      <text x="8" y="49" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#aaaaaa">{data.titleJa}</text>
      {data.logo && <image href={data.logo} x="78" y="42" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="japanese-zen-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="5" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
      </defs>
      <rect width="91" height="55" fill="#F5F0E8" filter="url(#japanese-zen-paper-b)" />
      {/* Small enso mark */}
      <circle cx="45.5" cy="10" r="4" fill="none" stroke="#1a1a1a" strokeWidth="0.6" opacity="0.12" />
      {/* Stone garden raked lines — subtle */}
      <line x1="10" y1="46" x2="81" y2="46" stroke="#c0bdb5" strokeWidth="0.04" />
      <line x1="10" y1="47.5" x2="81" y2="47.5" stroke="#c0bdb5" strokeWidth="0.04" />
      <line x1="10" y1="49" x2="81" y2="49" stroke="#c0bdb5" strokeWidth="0.04" />
      <line x1="10" y1="50.5" x2="81" y2="50.5" stroke="#c0bdb5" strokeWidth="0.04" />
      {/* Company */}
      <text x="45.5" y="20" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.8" fill="#1a1a1a">{data.companyJa}</text>
      <text x="45.5" y="24" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.2" fill="#888888">{data.companyEn}</text>
      <text x="45.5" y="28" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#aaaaaa">{data.titleJa}</text>
      {/* Thin rule */}
      <line x1="30" y1="30.5" x2="61" y2="30.5" stroke="#1a1a1a" strokeWidth="0.1" opacity="0.15" />
      {/* Contact */}
      <text x="45.5" y="34.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#666666">{data.tel}</text>
      <text x="45.5" y="37.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#666666">{data.email}</text>
      <text x="45.5" y="40.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#888888">{data.website}</text>
      <text x="45.5" y="44" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#aaaaaa">〒{data.zipCode} {data.addressJa}</text>
      {data.logo && <image href={data.logo} x="4" y="4" width="6" height="6" preserveAspectRatio="xMidYMid meet" opacity="0.3" />}
    </g>
  ),
};

// ============================================================
// 3. KAMON (紋) — Traditional: Family crest geometric emblem
// ============================================================
const kamonTemplate: TemplateDefinition = {
  id: 'kamon',
  name: 'KAMON',
  nameJa: '紋',
  category: 'japanese',
  designer: 'Traditional',
  description: '家紋の幾何学的美を現代に。中央に凛と据えた紋章。',
  accentColor: '#1B1464',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="japanese-kamon-paper"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="japanese-kamon-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.25" result="blur"/><feOffset dx="0.08" dy="0.12" result="shifted"/><feFlood floodColor="#1B1464" floodOpacity="0.1" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <rect width="91" height="55" fill="#ffffff" filter="url(#japanese-kamon-paper)" />
      {/* Kamon — stylized mitsu-domoe crest, subtle watermark */}
      <g transform="translate(45.5, 20)" opacity="0.08">
        <circle cx="0" cy="0" r="15" fill="none" stroke="#1B1464" strokeWidth="0.3" />
        <circle cx="0" cy="0" r="14" fill="none" stroke="#1B1464" strokeWidth="0.15" />
        <circle cx="0" cy="-5" r="3.5" fill="#1B1464" />
        <circle cx="4.33" cy="2.5" r="3.5" fill="#1B1464" />
        <circle cx="-4.33" cy="2.5" r="3.5" fill="#1B1464" />
        <path d="M 0 -5 A 5 5 0 0 1 4.33 2.5" fill="none" stroke="#1B1464" strokeWidth="1" />
        <path d="M 4.33 2.5 A 5 5 0 0 1 -4.33 2.5" fill="none" stroke="#1B1464" strokeWidth="1" />
        <path d="M -4.33 2.5 A 5 5 0 0 1 0 -5" fill="none" stroke="#1B1464" strokeWidth="1" />
      </g>
      {/* Corner accents */}
      <line x1="5" y1="5" x2="10" y2="5" stroke="#1B1464" strokeWidth="0.15" opacity="0.2" />
      <line x1="5" y1="5" x2="5" y2="10" stroke="#1B1464" strokeWidth="0.15" opacity="0.2" />
      <line x1="86" y1="50" x2="81" y2="50" stroke="#1B1464" strokeWidth="0.15" opacity="0.2" />
      <line x1="86" y1="50" x2="86" y2="45" stroke="#1B1464" strokeWidth="0.15" opacity="0.2" />
      {/* Name centered below crest */}
      <text x="45.5" y="40" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="5" letterSpacing="0.5" fill="#1B1464" filter="url(#japanese-kamon-shadow)">{data.nameJa}</text>
      <text x="45.5" y="45" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.3" fill="#888888">{data.nameEn}</text>
      <text x="45.5" y="49.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#aaaaaa">{data.titleJa}</text>
      {data.logo && <image href={data.logo} x="4" y="43" width="6" height="6" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="japanese-kamon-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <linearGradient id="japanese-kamon-gold-b" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#D4A853"/><stop offset="50%" stopColor="#E8C878"/><stop offset="100%" stopColor="#C49A48"/></linearGradient>
      </defs>
      <rect width="91" height="55" fill="#1B1464" filter="url(#japanese-kamon-paper-b)" />
      {/* Small kamon mark in gold */}
      <g transform="translate(45.5, 12)" opacity="0.4">
        <circle cx="0" cy="0" r="6" fill="none" stroke="#D4A853" strokeWidth="0.2" />
        <circle cx="0" cy="-2.2" r="1.5" fill="#D4A853" />
        <circle cx="1.9" cy="1.1" r="1.5" fill="#D4A853" />
        <circle cx="-1.9" cy="1.1" r="1.5" fill="#D4A853" />
      </g>
      {/* Corner ornaments */}
      <line x1="5" y1="5" x2="10" y2="5" stroke="#D4A853" strokeWidth="0.15" opacity="0.25" />
      <line x1="5" y1="5" x2="5" y2="10" stroke="#D4A853" strokeWidth="0.15" opacity="0.25" />
      <line x1="86" y1="50" x2="81" y2="50" stroke="#D4A853" strokeWidth="0.15" opacity="0.25" />
      <line x1="86" y1="50" x2="86" y2="45" stroke="#D4A853" strokeWidth="0.15" opacity="0.25" />
      {/* Company */}
      <text x="45.5" y="25" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.8" fill="#F5F0E8">{data.companyJa}</text>
      <text x="45.5" y="29" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.2" fill="url(#japanese-kamon-gold-b)">{data.companyEn}</text>
      <text x="45.5" y="33" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#F5F0E8" opacity="0.6">{data.titleJa}</text>
      {/* Contact */}
      <line x1="30" y1="35.5" x2="61" y2="35.5" stroke="#D4A853" strokeWidth="0.1" opacity="0.3" />
      <text x="45.5" y="39.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#F5F0E8" opacity="0.65">{data.tel}</text>
      <text x="45.5" y="42.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#F5F0E8" opacity="0.65">{data.email}</text>
      <text x="45.5" y="45.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#F5F0E8" opacity="0.5">{data.website}</text>
      <text x="45.5" y="50" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#F5F0E8" opacity="0.35">〒{data.zipCode} {data.addressJa}</text>
      {data.logo && <image href={data.logo} x="4" y="4" width="6" height="6" preserveAspectRatio="xMidYMid meet" opacity="0.35" />}
    </g>
  ),
};

// ============================================================
// 4. WASHI (紙) — Taku Satoh: Paper texture feel, warm cream
// ============================================================
const washiTemplate: TemplateDefinition = {
  id: 'washi',
  name: 'WASHI',
  nameJa: '紙',
  category: 'japanese',
  designer: 'Taku Satoh',
  description: '和紙の温もりを感じる柔らかなクリーム地。素朴な美。',
  accentColor: '#8B7355',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="japanese-washi-paper"><feTurbulence type="fractalNoise" baseFrequency="0.45" numOctaves="6" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="japanese-washi-fiber"><feTurbulence type="turbulence" baseFrequency="0.02 0.3" numOctaves="2" seed="5" result="fiber"/><feColorMatrix type="saturate" values="0" in="fiber" result="gray"/><feBlend mode="soft-light" in="SourceGraphic" in2="gray"/></filter>
        <filter id="japanese-washi-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.2" result="blur"/><feOffset dx="0.06" dy="0.1" result="shifted"/><feFlood floodColor="#4A3C2A" floodOpacity="0.08" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <rect width="91" height="55" fill="#F5F0E8" filter="url(#japanese-washi-paper)" />
      {/* Washi paper fiber lines — scattered */}
      <g opacity="0.05" stroke="#8B7355" strokeWidth="0.12">
        <line x1="5" y1="8" x2="20" y2="9" /><line x1="30" y1="3" x2="45" y2="4.5" /><line x1="60" y1="12" x2="78" y2="11" />
        <line x1="12" y1="20" x2="28" y2="22" /><line x1="50" y1="25" x2="68" y2="24" /><line x1="70" y1="35" x2="88" y2="36" />
        <line x1="8" y1="42" x2="24" y2="43" /><line x1="35" y1="48" x2="52" y2="47" /><line x1="72" y1="46" x2="88" y2="48" />
        <line x1="15" y1="15" x2="30" y2="16" /><line x1="55" y1="6" x2="70" y2="5" /><line x1="40" y1="38" x2="58" y2="39" />
      </g>
      {/* Thin border inset — like a frame on fine paper */}
      <rect x="5" y="4" width="81" height="47" fill="none" stroke="#C4B49A" strokeWidth="0.15" />
      <rect x="5.8" y="4.8" width="79.4" height="45.4" fill="none" stroke="#C4B49A" strokeWidth="0.06" />
      {/* Name */}
      <text x="45.5" y="20" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="5.5" letterSpacing="0.6" fill="#4A3C2A" filter="url(#japanese-washi-shadow)">{data.nameJa}</text>
      <text x="45.5" y="25.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.25" fill="#8B7355">{data.nameEn}</text>
      {/* Company */}
      <text x="45.5" y="32" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#8B7355">{data.companyJa}</text>
      {/* Title */}
      <text x="45.5" y="36" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#A89880">{data.titleJa}</text>
      {/* Decorative diamond */}
      <rect x="44.5" y="39" width="2" height="2" fill="#C4B49A" opacity="0.3" transform="rotate(45, 45.5, 40)" />
      {data.logo && <image href={data.logo} x="38" y="42" width="6" height="6" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="japanese-washi-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.45" numOctaves="6" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
      </defs>
      <rect width="91" height="55" fill="#F5F0E8" filter="url(#japanese-washi-paper-b)" />
      {/* Washi fiber texture */}
      <g opacity="0.05" stroke="#8B7355" strokeWidth="0.12">
        <line x1="10" y1="5" x2="26" y2="6" /><line x1="40" y1="10" x2="58" y2="9" /><line x1="65" y1="15" x2="82" y2="16" />
        <line x1="20" y1="30" x2="38" y2="31" /><line x1="55" y1="40" x2="72" y2="41" /><line x1="8" y1="48" x2="22" y2="49" />
      </g>
      {/* Frame */}
      <rect x="5" y="4" width="81" height="47" fill="none" stroke="#C4B49A" strokeWidth="0.15" />
      <rect x="5.8" y="4.8" width="79.4" height="45.4" fill="none" stroke="#C4B49A" strokeWidth="0.06" />
      {/* Company */}
      <text x="45.5" y="14" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.8" fill="#4A3C2A">{data.companyJa}</text>
      <text x="45.5" y="18" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" letterSpacing="0.2" fill="#8B7355">{data.companyEn}</text>
      <text x="45.5" y="22" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#A89880">{data.titleJa}</text>
      {/* Divider */}
      <line x1="32" y1="24.5" x2="59" y2="24.5" stroke="#C4B49A" strokeWidth="0.1" />
      {/* Contact */}
      <text x="45.5" y="29" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#8B7355">TEL {data.tel}</text>
      <text x="45.5" y="32.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#8B7355">{data.email}</text>
      <text x="45.5" y="36" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#A89880">{data.website}</text>
      {/* Address */}
      <line x1="32" y1="38.5" x2="59" y2="38.5" stroke="#C4B49A" strokeWidth="0.1" />
      <text x="45.5" y="42.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#A89880">〒{data.zipCode}</text>
      <text x="45.5" y="46" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#A89880">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="8" y="8" width="6" height="6" preserveAspectRatio="xMidYMid meet" opacity="0.3" />}
    </g>
  ),
};

// ============================================================
// 5. SUMI (墨) — Yusaku Kamekura: Ink wash gradient, bold
// ============================================================
const sumiTemplate: TemplateDefinition = {
  id: 'sumi',
  name: 'SUMI',
  nameJa: '墨',
  category: 'japanese',
  designer: 'Yusaku Kamekura',
  description: '墨の濃淡が力強く滲む。黒から透明へ、大胆な墨流し。',
  accentColor: '#1a1a1a',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="japanese-sumi-paper"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="japanese-sumi-bleed"><feGaussianBlur in="SourceGraphic" stdDeviation="0.2" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <linearGradient id="japanese-sumi-wash" x1="0" y1="0" x2="1" y2="0.3"><stop offset="0%" stopColor="#1a1a1a" stopOpacity="0.95"/><stop offset="35%" stopColor="#2a2a2a" stopOpacity="0.7"/><stop offset="60%" stopColor="#1a1a1a" stopOpacity="0.25"/><stop offset="100%" stopColor="#1a1a1a" stopOpacity="0"/></linearGradient>
      </defs>
      <rect width="91" height="55" fill="#F5F0E8" filter="url(#japanese-sumi-paper)" />
      {/* Ink wash gradient — sweeping from left */}
      <rect x="0" y="0" width="58" height="55" fill="url(#japanese-sumi-wash)" />
      {/* Ink drip marks */}
      <circle cx="48" cy="15" r="0.3" fill="#1a1a1a" opacity="0.08" />
      <circle cx="52" cy="40" r="0.2" fill="#1a1a1a" opacity="0.06" />
      <ellipse cx="3" cy="52" rx="1" ry="0.4" fill="#1a1a1a" opacity="0.1" />
      {/* Name — white on dark area */}
      <text x="8" y="18" fontFamily="'Noto Sans JP', sans-serif" fontWeight="900" fontSize="7" fill="#F5F0E8" filter="url(#japanese-sumi-bleed)">{data.nameJa}</text>
      <text x="8" y="24" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="2.4" letterSpacing="0.15" fill="#F5F0E8" opacity="0.8">{data.nameEn}</text>
      {/* Title on lighter area */}
      <text x="8" y="31" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#F5F0E8" opacity="0.55">{data.titleJa}</text>
      {/* Company on edge of wash */}
      <text x="8" y="38" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.8" fill="#4a4a4a" opacity="0.6">{data.companyJa}</text>
      {/* Contact in dark text on the light right side */}
      <text x="83" y="40" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#1a1a1a" opacity="0.5">{data.tel}</text>
      <text x="83" y="43.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#1a1a1a" opacity="0.5">{data.email}</text>
      <text x="83" y="47" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fill="#1a1a1a" opacity="0.4">{data.website}</text>
      {data.logo && <image href={data.logo} x="78" y="5" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="japanese-sumi-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <radialGradient id="japanese-sumi-glow" cx="0.5" cy="0.5" r="0.5"><stop offset="0%" stopColor="#F5F0E8" stopOpacity="0.08"/><stop offset="100%" stopColor="#F5F0E8" stopOpacity="0"/></radialGradient>
      </defs>
      <rect width="91" height="55" fill="#1a1a1a" filter="url(#japanese-sumi-paper-b)" />
      {/* Ink wash — lighter area emerging */}
      <rect width="91" height="55" fill="url(#japanese-sumi-glow)" />
      {/* Subtle horizontal ink strokes */}
      <line x1="10" y1="10" x2="81" y2="10" stroke="#F5F0E8" strokeWidth="0.04" opacity="0.08" />
      <line x1="10" y1="44" x2="81" y2="44" stroke="#F5F0E8" strokeWidth="0.04" opacity="0.08" />
      {/* Company — bold white */}
      <text x="45.5" y="19" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="900" fontSize="4" fill="#F5F0E8">{data.companyJa}</text>
      <text x="45.5" y="24" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="1.8" letterSpacing="0.3" fill="#F5F0E8" opacity="0.5">{data.companyEn}</text>
      <text x="45.5" y="28" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#F5F0E8" opacity="0.4">{data.titleJa}</text>
      {/* Separator */}
      <line x1="30" y1="30.5" x2="61" y2="30.5" stroke="#F5F0E8" strokeWidth="0.1" opacity="0.15" />
      {/* Contact */}
      <text x="45.5" y="34.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#F5F0E8" opacity="0.5">{data.tel}</text>
      <text x="45.5" y="37.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#F5F0E8" opacity="0.5">{data.email}</text>
      <text x="45.5" y="40.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.3" fill="#F5F0E8" opacity="0.35">{data.website}</text>
      <text x="45.5" y="48" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#F5F0E8" opacity="0.25">〒{data.zipCode} {data.addressJa}</text>
      {data.logo && <image href={data.logo} x="4" y="4" width="6" height="6" preserveAspectRatio="xMidYMid meet" opacity="0.3" />}
    </g>
  ),
};

// ============================================================
// 6. ORIGAMI (折) — Issey Miyake: Folded triangular geometry
// ============================================================
const origamiTemplate: TemplateDefinition = {
  id: 'origami',
  name: 'ORIGAMI',
  nameJa: '折',
  category: 'japanese',
  designer: 'Issey Miyake',
  description: '折り紙の幾何学。三角形が重なり、奥行きを生む。',
  accentColor: '#C41E3A',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="japanese-origami-paper"><feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="japanese-origami-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.25" result="blur"/><feOffset dx="0.1" dy="0.12" result="shifted"/><feFlood floodColor="#000000" floodOpacity="0.08" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <linearGradient id="japanese-origami-fold1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#C41E3A" stopOpacity="0.12"/><stop offset="100%" stopColor="#C41E3A" stopOpacity="0.04"/></linearGradient>
        <linearGradient id="japanese-origami-fold2" x1="1" y1="1" x2="0" y2="0"><stop offset="0%" stopColor="#1B1464" stopOpacity="0.1"/><stop offset="100%" stopColor="#1B1464" stopOpacity="0.02"/></linearGradient>
      </defs>
      <rect width="91" height="55" fill="#ffffff" filter="url(#japanese-origami-paper)" />
      {/* Layered triangular shapes — origami folds */}
      <polygon points="0,0 42,0 0,36" fill="url(#japanese-origami-fold1)" />
      <polygon points="0,0 56,0 22,32" fill="url(#japanese-origami-fold2)" />
      <polygon points="91,55 48,55 91,18" fill="url(#japanese-origami-fold1)" />
      <polygon points="91,55 34,55 72,23" fill="#D4A853" opacity="0.04" />
      {/* Fold lines — crisp crease marks */}
      <line x1="0" y1="0" x2="42" y2="36" stroke="#C41E3A" strokeWidth="0.1" opacity="0.15" />
      <line x1="91" y1="55" x2="48" y2="18" stroke="#1B1464" strokeWidth="0.1" opacity="0.12" />
      <line x1="0" y1="36" x2="56" y2="0" stroke="#D4A853" strokeWidth="0.06" opacity="0.1" />
      {/* Name */}
      <text x="45.5" y="22" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="6" fill="#1a1a1a" filter="url(#japanese-origami-shadow)">{data.nameJa}</text>
      <text x="45.5" y="28" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2.2" letterSpacing="0.2" fill="#C41E3A">{data.nameEn}</text>
      <text x="45.5" y="34" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#888888">{data.titleJa} | {data.companyJa}</text>
      {/* Tiny decorative triangle */}
      <polygon points="45.5,38 43.5,41 47.5,41" fill="#C41E3A" opacity="0.15" />
      {data.logo && <image href={data.logo} x="78" y="4" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="japanese-origami-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <linearGradient id="japanese-origami-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#C41E3A"/><stop offset="100%" stopColor="#A01830"/></linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#japanese-origami-bg)" filter="url(#japanese-origami-paper-b)" />
      {/* Origami fold shapes on back */}
      <polygon points="0,0 46,0 0,55" fill="#1B1464" opacity="0.2" />
      <polygon points="91,0 91,55 46,55" fill="#D4A853" opacity="0.1" />
      <polygon points="46,0 91,0 91,30" fill="#ffffff" opacity="0.04" />
      {/* Fold crease lines */}
      <line x1="0" y1="55" x2="46" y2="0" stroke="#ffffff" strokeWidth="0.08" opacity="0.15" />
      <line x1="46" y1="55" x2="91" y2="0" stroke="#ffffff" strokeWidth="0.08" opacity="0.1" />
      {/* Company */}
      <text x="45.5" y="18" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="3.2" fill="#ffffff">{data.companyJa}</text>
      <text x="45.5" y="23" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.6" letterSpacing="0.2" fill="#ffffff" opacity="0.7">{data.companyEn}</text>
      <text x="45.5" y="27.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#ffffff" opacity="0.55">{data.titleJa}</text>
      {/* Separator */}
      <line x1="28" y1="30" x2="63" y2="30" stroke="#ffffff" strokeWidth="0.1" opacity="0.25" />
      {/* Contact */}
      <text x="45.5" y="34" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#ffffff" opacity="0.75">{data.tel}</text>
      <text x="45.5" y="37.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#ffffff" opacity="0.75">{data.email}</text>
      <text x="45.5" y="41" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#ffffff" opacity="0.55">{data.website}</text>
      <text x="45.5" y="48" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#ffffff" opacity="0.4">〒{data.zipCode} {data.addressJa}</text>
      {data.logo && <image href={data.logo} x="4" y="4" width="6" height="6" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
    </g>
  ),
};

// ============================================================
// 7. NOREN (暖) — Kengo Kuma: Vertical stripe division
// ============================================================
const norenTemplate: TemplateDefinition = {
  id: 'noren',
  name: 'NOREN',
  nameJa: '暖',
  category: 'japanese',
  designer: 'Kengo Kuma',
  description: '暖簾の縦縞が空間を仕切る。木と布の建築的構成。',
  accentColor: '#5B3A29',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="japanese-noren-paper"><feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="japanese-noren-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.2" result="blur"/><feOffset dx="0.08" dy="0.1" result="shifted"/><feFlood floodColor="#5B3A29" floodOpacity="0.1" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <linearGradient id="japanese-noren-wood" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#5B3A29"/><stop offset="50%" stopColor="#6B4A39"/><stop offset="100%" stopColor="#5B3A29"/></linearGradient>
      </defs>
      <rect width="91" height="55" fill="#F5F0E8" filter="url(#japanese-noren-paper)" />
      {/* Noren vertical stripes — like curtain panels with varied lengths */}
      <rect x="6" y="0" width="8" height="42" fill="#5B3A29" opacity="0.07" rx="0.5" />
      <rect x="18" y="0" width="8" height="45" fill="#5B3A29" opacity="0.05" rx="0.5" />
      <rect x="30" y="0" width="8" height="40" fill="#5B3A29" opacity="0.08" rx="0.5" />
      <rect x="42" y="0" width="8" height="44" fill="#5B3A29" opacity="0.04" rx="0.5" />
      <rect x="54" y="0" width="8" height="41" fill="#5B3A29" opacity="0.07" rx="0.5" />
      <rect x="66" y="0" width="8" height="46" fill="#5B3A29" opacity="0.05" rx="0.5" />
      <rect x="78" y="0" width="8" height="43" fill="#5B3A29" opacity="0.08" rx="0.5" />
      {/* Horizontal bar at top — the noren rod */}
      <rect x="0" y="0" width="91" height="2.2" fill="url(#japanese-noren-wood)" opacity="0.35" />
      {/* Rod end caps */}
      <circle cx="2" cy="1.1" r="1.1" fill="#5B3A29" opacity="0.25" />
      <circle cx="89" cy="1.1" r="1.1" fill="#5B3A29" opacity="0.25" />
      {/* Name in the lower clear area */}
      <text x="10" y="48" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="5" fill="#5B3A29" filter="url(#japanese-noren-shadow)">{data.nameJa}</text>
      <text x="83" y="48" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.15" fill="#8B7355">{data.nameEn}</text>
      <text x="83" y="52" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#A89880">{data.titleJa}</text>
      {data.logo && <image href={data.logo} x="78" y="38" width="6" height="6" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="japanese-noren-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <linearGradient id="japanese-noren-wood-b" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#D4A853"/><stop offset="50%" stopColor="#E8C878"/><stop offset="100%" stopColor="#D4A853"/></linearGradient>
      </defs>
      <rect width="91" height="55" fill="#5B3A29" filter="url(#japanese-noren-paper-b)" />
      {/* Noren stripes — lighter on dark */}
      <rect x="6" y="0" width="8" height="42" fill="#F5F0E8" opacity="0.05" rx="0.5" />
      <rect x="18" y="0" width="8" height="45" fill="#F5F0E8" opacity="0.03" rx="0.5" />
      <rect x="30" y="0" width="8" height="40" fill="#F5F0E8" opacity="0.06" rx="0.5" />
      <rect x="42" y="0" width="8" height="44" fill="#F5F0E8" opacity="0.03" rx="0.5" />
      <rect x="54" y="0" width="8" height="41" fill="#F5F0E8" opacity="0.05" rx="0.5" />
      <rect x="66" y="0" width="8" height="46" fill="#F5F0E8" opacity="0.03" rx="0.5" />
      <rect x="78" y="0" width="8" height="43" fill="#F5F0E8" opacity="0.06" rx="0.5" />
      {/* Rod */}
      <rect x="0" y="0" width="91" height="2.2" fill="url(#japanese-noren-wood-b)" opacity="0.4" />
      <circle cx="2" cy="1.1" r="1.1" fill="#D4A853" opacity="0.3" />
      <circle cx="89" cy="1.1" r="1.1" fill="#D4A853" opacity="0.3" />
      {/* Company */}
      <text x="45.5" y="16" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="3.2" fill="#F5F0E8">{data.companyJa}</text>
      <text x="45.5" y="20.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.2" fill="#D4A853">{data.companyEn}</text>
      <text x="45.5" y="24.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#F5F0E8" opacity="0.5">{data.titleJa}</text>
      {/* Contact */}
      <line x1="25" y1="27" x2="66" y2="27" stroke="#F5F0E8" strokeWidth="0.08" opacity="0.2" />
      <text x="45.5" y="31.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#F5F0E8" opacity="0.65">{data.tel}</text>
      <text x="45.5" y="35" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#F5F0E8" opacity="0.65">{data.email}</text>
      <text x="45.5" y="38.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.3" fill="#F5F0E8" opacity="0.45">{data.website}</text>
      {/* Address */}
      <line x1="25" y1="41" x2="66" y2="41" stroke="#F5F0E8" strokeWidth="0.08" opacity="0.2" />
      <text x="45.5" y="45.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#F5F0E8" opacity="0.35">〒{data.zipCode} {data.addressJa}</text>
      {data.logo && <image href={data.logo} x="4" y="4" width="6" height="6" preserveAspectRatio="xMidYMid meet" opacity="0.3" />}
    </g>
  ),
};

// ============================================================
// 8. SHOJI (障) — Tadao Ando: Grid frame pattern, architectural
// ============================================================
const shojiTemplate: TemplateDefinition = {
  id: 'shoji',
  name: 'SHOJI',
  nameJa: '障',
  category: 'japanese',
  designer: 'Tadao Ando',
  description: '障子の格子が光を濾す。建築的グリッドの静謐な美。',
  accentColor: '#8B7355',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="japanese-shoji-paper"><feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="japanese-shoji-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.2" result="blur"/><feOffset dx="0.06" dy="0.1" result="shifted"/><feFlood floodColor="#4A3C2A" floodOpacity="0.08" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <rect width="91" height="55" fill="#F5F0E8" filter="url(#japanese-shoji-paper)" />
      {/* Shoji grid pattern — full card */}
      <g stroke="#C4B49A" strokeWidth="0.12" opacity="0.3">
        <line x1="18.2" y1="0" x2="18.2" y2="55" /><line x1="36.4" y1="0" x2="36.4" y2="55" />
        <line x1="54.6" y1="0" x2="54.6" y2="55" /><line x1="72.8" y1="0" x2="72.8" y2="55" />
        <line x1="0" y1="11" x2="91" y2="11" /><line x1="0" y1="22" x2="91" y2="22" />
        <line x1="0" y1="33" x2="91" y2="33" /><line x1="0" y1="44" x2="91" y2="44" />
      </g>
      {/* Outer frame — heavier kumiko woodwork */}
      <rect x="1" y="1" width="89" height="53" fill="none" stroke="#8B7355" strokeWidth="0.4" opacity="0.25" />
      <rect x="2" y="2" width="87" height="51" fill="none" stroke="#8B7355" strokeWidth="0.1" opacity="0.15" />
      {/* Light glow through shoji — subtle rectangles */}
      <rect x="19" y="12" width="16.5" height="10" fill="#ffffff" opacity="0.04" />
      <rect x="55.5" y="23" width="16.5" height="10" fill="#ffffff" opacity="0.03" />
      {/* Name */}
      <text x="45.5" y="25" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="5.5" fill="#4A3C2A" filter="url(#japanese-shoji-shadow)">{data.nameJa}</text>
      <text x="45.5" y="30.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2" letterSpacing="0.2" fill="#8B7355">{data.nameEn}</text>
      <text x="45.5" y="37.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.7" fill="#A89880">{data.titleJa}</text>
      {data.logo && <image href={data.logo} x="74" y="3" width="6" height="6" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="japanese-shoji-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
      </defs>
      <rect width="91" height="55" fill="#F5F0E8" filter="url(#japanese-shoji-paper-b)" />
      {/* Shoji grid — subtler on back */}
      <g stroke="#C4B49A" strokeWidth="0.08" opacity="0.18">
        <line x1="18.2" y1="0" x2="18.2" y2="55" /><line x1="36.4" y1="0" x2="36.4" y2="55" />
        <line x1="54.6" y1="0" x2="54.6" y2="55" /><line x1="72.8" y1="0" x2="72.8" y2="55" />
        <line x1="0" y1="11" x2="91" y2="11" /><line x1="0" y1="22" x2="91" y2="22" />
        <line x1="0" y1="33" x2="91" y2="33" /><line x1="0" y1="44" x2="91" y2="44" />
      </g>
      <rect x="1" y="1" width="89" height="53" fill="none" stroke="#8B7355" strokeWidth="0.4" opacity="0.25" />
      <rect x="2" y="2" width="87" height="51" fill="none" stroke="#8B7355" strokeWidth="0.1" opacity="0.15" />
      {/* Company */}
      <text x="45.5" y="14" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.8" fill="#4A3C2A">{data.companyJa}</text>
      <text x="45.5" y="18" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" letterSpacing="0.2" fill="#8B7355">{data.companyEn}</text>
      <text x="45.5" y="21.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#A89880">{data.titleJa}</text>
      {/* Contact — middle */}
      <text x="45.5" y="27.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#8B7355">TEL {data.tel}</text>
      <text x="45.5" y="31" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#8B7355">{data.email}</text>
      <text x="45.5" y="34.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.3" fill="#A89880">{data.website}</text>
      {/* Divider */}
      <line x1="32" y1="37" x2="59" y2="37" stroke="#C4B49A" strokeWidth="0.08" />
      {/* Address */}
      <text x="45.5" y="41" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#A89880">〒{data.zipCode}</text>
      <text x="45.5" y="44" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#A89880">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="4" y="4" width="6" height="6" preserveAspectRatio="xMidYMid meet" opacity="0.3" />}
    </g>
  ),
};

// ============================================================
// 9. FUJI (富) — Hokusai: Mountain silhouette, dawn colors
// ============================================================
const fujiTemplate: TemplateDefinition = {
  id: 'fuji',
  name: 'FUJI',
  nameJa: '富',
  category: 'japanese',
  designer: 'Hokusai',
  description: '富士の稜線が黎明に浮かぶ。北斎の大胆な構図を名刺に。',
  accentColor: '#2D5F8A',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="japanese-fuji-paper"><feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="japanese-fuji-glow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.4" result="blur"/><feFlood floodColor="#ffffff" floodOpacity="0.15" result="color"/><feComposite in="color" in2="blur" operator="in" result="glow"/><feMerge><feMergeNode in="glow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <linearGradient id="japanese-fuji-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1B2A4A"/><stop offset="35%" stopColor="#2D5F8A"/><stop offset="65%" stopColor="#D4856A" stopOpacity="0.7"/><stop offset="100%" stopColor="#F5D6C3"/></linearGradient>
        <linearGradient id="japanese-fuji-mountain" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1B1464"/><stop offset="100%" stopColor="#0A0A30"/></linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#japanese-fuji-sky)" filter="url(#japanese-fuji-paper)" />
      {/* Mt. Fuji silhouette at bottom */}
      <path d="M -5 55 L 30 22 L 38 26 L 42 24 L 55 22 L 96 55 Z" fill="url(#japanese-fuji-mountain)" opacity="0.75" />
      {/* Snow cap */}
      <path d="M 30 22 L 36 28 L 38 26 L 42 24 L 48 28 L 55 22 L 50 25 L 42 20 L 38 22 L 34 25 Z" fill="#ffffff" opacity="0.55" />
      {/* Stars */}
      <circle cx="15" cy="6" r="0.2" fill="#ffffff" opacity="0.4" />
      <circle cx="78" cy="4" r="0.15" fill="#ffffff" opacity="0.3" />
      <circle cx="50" cy="3" r="0.18" fill="#ffffff" opacity="0.35" />
      <circle cx="85" cy="10" r="0.12" fill="#ffffff" opacity="0.25" />
      <circle cx="30" cy="8" r="0.1" fill="#ffffff" opacity="0.2" />
      {/* Name — upper area, light text */}
      <text x="10" y="12" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="5.5" fill="#ffffff" filter="url(#japanese-fuji-glow)">{data.nameJa}</text>
      <text x="10" y="17" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="2" letterSpacing="0.2" fill="#ffffff" opacity="0.8">{data.nameEn}</text>
      {data.logo && <image href={data.logo} x="78" y="42" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="japanese-fuji-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <linearGradient id="japanese-fuji-dawn" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1B1464"/><stop offset="100%" stopColor="#2D5F8A"/></linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#japanese-fuji-dawn)" filter="url(#japanese-fuji-paper-b)" />
      {/* Subtle mountain ridge at very bottom */}
      <path d="M 0 55 L 20 46 L 35 49 L 50 43 L 65 48 L 80 44 L 91 50 L 91 55 Z" fill="#2D5F8A" opacity="0.25" />
      {/* Stars */}
      <circle cx="10" cy="4" r="0.15" fill="#ffffff" opacity="0.2" />
      <circle cx="82" cy="6" r="0.12" fill="#ffffff" opacity="0.15" />
      {/* Company */}
      <text x="45.5" y="14" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="3.2" fill="#F5D6C3">{data.companyJa}</text>
      <text x="45.5" y="18.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.2" fill="#D4856A">{data.companyEn}</text>
      <text x="45.5" y="22.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#F5D6C3" opacity="0.55">{data.titleJa}</text>
      {/* Divider */}
      <line x1="30" y1="25" x2="61" y2="25" stroke="#D4856A" strokeWidth="0.1" opacity="0.35" />
      {/* Contact */}
      <text x="45.5" y="29.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#F5D6C3" opacity="0.65">{data.tel}</text>
      <text x="45.5" y="33" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#F5D6C3" opacity="0.65">{data.email}</text>
      <text x="45.5" y="36.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.3" fill="#F5D6C3" opacity="0.45">{data.website}</text>
      <text x="45.5" y="41" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#F5D6C3" opacity="0.35">〒{data.zipCode} {data.addressJa}</text>
      {data.logo && <image href={data.logo} x="4" y="4" width="6" height="6" preserveAspectRatio="xMidYMid meet" opacity="0.35" />}
    </g>
  ),
};

// ============================================================
// 10. SAKURA (桜) — Rei Kawakubo: Abstract petal shapes, pink accents
// ============================================================
const sakuraTemplate: TemplateDefinition = {
  id: 'sakura',
  name: 'SAKURA',
  nameJa: '桜',
  category: 'japanese',
  designer: 'Rei Kawakubo',
  description: '抽象化された花弁が舞う。淡いピンクの前衛的な桜。',
  accentColor: '#D4728C',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="japanese-sakura-paper"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="japanese-sakura-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.25" result="blur"/><feOffset dx="0.08" dy="0.12" result="shifted"/><feFlood floodColor="#D4728C" floodOpacity="0.1" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <radialGradient id="japanese-sakura-glow" cx="0.7" cy="0.15" r="0.4"><stop offset="0%" stopColor="#D4728C" stopOpacity="0.06"/><stop offset="100%" stopColor="#D4728C" stopOpacity="0"/></radialGradient>
      </defs>
      <rect width="91" height="55" fill="#ffffff" filter="url(#japanese-sakura-paper)" />
      <rect width="91" height="55" fill="url(#japanese-sakura-glow)" />
      {/* Abstract sakura petals — upper right cluster */}
      <g opacity="0.12">
        <ellipse cx="72" cy="10" rx="5" ry="3" fill="#D4728C" transform="rotate(-30 72 10)" />
        <ellipse cx="80" cy="18" rx="4" ry="2.5" fill="#D4728C" transform="rotate(15 80 18)" />
        <ellipse cx="68" cy="20" rx="3.5" ry="2" fill="#E8A0B4" transform="rotate(-60 68 20)" />
        <ellipse cx="78" cy="6" rx="3" ry="1.8" fill="#E8A0B4" transform="rotate(40 78 6)" />
        <ellipse cx="85" cy="12" rx="3.5" ry="2" fill="#D4728C" transform="rotate(-10 85 12)" />
      </g>
      {/* Lower left scatter — falling petals */}
      <g opacity="0.07">
        <ellipse cx="15" cy="45" rx="4" ry="2.5" fill="#D4728C" transform="rotate(20 15 45)" />
        <ellipse cx="8" cy="40" rx="3" ry="2" fill="#E8A0B4" transform="rotate(-45 8 40)" />
        <ellipse cx="22" cy="48" rx="3.5" ry="2" fill="#D4728C" transform="rotate(60 22 48)" />
      </g>
      {/* Tiny petal dots — like distant floating petals */}
      <circle cx="40" cy="5" r="0.4" fill="#D4728C" opacity="0.1" />
      <circle cx="55" cy="42" r="0.3" fill="#E8A0B4" opacity="0.08" />
      <circle cx="35" cy="50" r="0.35" fill="#D4728C" opacity="0.06" />
      {/* Name */}
      <text x="10" y="18" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6" fill="#1a1a1a" filter="url(#japanese-sakura-shadow)">{data.nameJa}</text>
      <text x="10" y="24" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="2.2" letterSpacing="0.2" fill="#D4728C">{data.nameEn}</text>
      {/* Title */}
      <text x="10" y="30" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.8" fill="#999999">{data.titleJa}</text>
      {/* Accent line */}
      <line x1="10" y1="33" x2="32" y2="33" stroke="#D4728C" strokeWidth="0.2" opacity="0.35" />
      {/* Company */}
      <text x="10" y="37.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2" fill="#666666">{data.companyJa}</text>
      <text x="10" y="41.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" letterSpacing="0.1" fill="#999999">{data.companyEn}</text>
      {data.logo && <image href={data.logo} x="78" y="42" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="japanese-sakura-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
      </defs>
      <rect width="91" height="55" fill="#1a1a1a" filter="url(#japanese-sakura-paper-b)" />
      {/* Abstract petals — glowing on dark */}
      <g opacity="0.15">
        <ellipse cx="70" cy="8" rx="5" ry="3" fill="#D4728C" transform="rotate(-20 70 8)" />
        <ellipse cx="78" cy="14" rx="4" ry="2.5" fill="#E8A0B4" transform="rotate(30 78 14)" />
        <ellipse cx="65" cy="16" rx="3.5" ry="2" fill="#D4728C" transform="rotate(-50 65 16)" />
        <ellipse cx="82" cy="5" rx="3" ry="1.8" fill="#E8A0B4" transform="rotate(10 82 5)" />
      </g>
      <g opacity="0.08">
        <ellipse cx="12" cy="46" rx="4" ry="2.5" fill="#D4728C" transform="rotate(25 12 46)" />
        <ellipse cx="20" cy="50" rx="3.5" ry="2" fill="#E8A0B4" transform="rotate(-35 20 50)" />
        <ellipse cx="6" cy="50" rx="3" ry="2" fill="#D4728C" transform="rotate(55 6 50)" />
      </g>
      {/* Company */}
      <text x="45.5" y="18" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="3.2" fill="#F5F0E8">{data.companyJa}</text>
      <text x="45.5" y="22.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" letterSpacing="0.2" fill="#D4728C">{data.companyEn}</text>
      <text x="45.5" y="26.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#F5F0E8" opacity="0.5">{data.titleJa}</text>
      {/* Contact info */}
      <line x1="30" y1="29" x2="61" y2="29" stroke="#D4728C" strokeWidth="0.08" opacity="0.25" />
      <text x="45.5" y="33" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#F5F0E8" opacity="0.65">{data.tel}</text>
      <text x="45.5" y="36.5" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#F5F0E8" opacity="0.65">{data.email}</text>
      <text x="45.5" y="40" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.3" fill="#F5F0E8" opacity="0.45">{data.website}</text>
      <text x="45.5" y="48" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.2" fill="#F5F0E8" opacity="0.3">〒{data.zipCode} {data.addressJa}</text>
      {data.logo && <image href={data.logo} x="4" y="4" width="6" height="6" preserveAspectRatio="xMidYMid meet" opacity="0.35" />}
    </g>
  ),
};

// ============================================================
// Export all Japanese templates
// ============================================================
export const japaneseTemplates: TemplateDefinition[] = [
  waTemplate,
  zenTemplate,
  kamonTemplate,
  washiTemplate,
  sumiTemplate,
  origamiTemplate,
  norenTemplate,
  shojiTemplate,
  fujiTemplate,
  sakuraTemplate,
];
