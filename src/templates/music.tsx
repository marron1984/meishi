import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. NOTE (音符) — Musical notation elegance
// Staff lines with note-like typography placement
// ============================================================
const noteTemplate: TemplateDefinition = {
  id: 'music-note',
  name: 'NOTE',
  nameJa: '音符',
  category: 'music',
  designer: 'Ryuichi Sakamoto',
  description: '楽譜の上に浮かぶ名前。音符のように響く存在感。',
  accentColor: '#2E1A47',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="music-note-texture-f">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" seed="2" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="soft-light" result="blended" />
        </filter>
        <filter id="music-note-shadow-f">
          <feDropShadow dx="0.2" dy="0.2" stdDeviation="0.3" floodColor="#2E1A47" floodOpacity="0.2" />
        </filter>
        <linearGradient id="music-note-gold-f" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C9A84C" />
          <stop offset="50%" stopColor="#E8D48B" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <linearGradient id="music-note-bg-f" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fdfbf8" />
          <stop offset="100%" stopColor="#f5f0e8" />
        </linearGradient>
        <radialGradient id="music-note-glow-f" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#f8f4ed" />
          <stop offset="100%" stopColor="#efe8da" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#music-note-bg-f)" />
      <rect width="91" height="55" fill="url(#music-note-glow-f)" opacity="0.4" />
      <rect width="91" height="55" filter="url(#music-note-texture-f)" opacity="0.03" fill="#2E1A47" />
      {/* Staff lines */}
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1="5" y1={11 + i * 2.5} x2="86" y2={11 + i * 2.5} stroke="#2E1A47" strokeWidth="0.07" opacity="0.35" />
      ))}
      {/* Treble clef decorative curve */}
      <path
        d="M 8.5 13 C 8.5 9 12.5 9 12.5 13 C 12.5 17 8.5 21 10.5 23.5"
        fill="none"
        stroke="url(#music-note-gold-f)"
        strokeWidth="0.2"
        opacity="0.6"
      />
      {/* Note heads with stems */}
      <ellipse cx="28" cy="16" rx="1.3" ry="0.95" fill="#2E1A47" transform="rotate(-15 28 16)" opacity="0.7" />
      <line x1="29.3" y1="16" x2="29.3" y2="9.5" stroke="#2E1A47" strokeWidth="0.12" opacity="0.7" />
      <ellipse cx="42" cy="18.5" rx="1.3" ry="0.95" fill="#2E1A47" transform="rotate(-15 42 18.5)" opacity="0.5" />
      <line x1="43.3" y1="18.5" x2="43.3" y2="12" stroke="#2E1A47" strokeWidth="0.12" opacity="0.5" />
      <ellipse cx="56" cy="13.5" rx="1.3" ry="0.95" fill="url(#music-note-gold-f)" transform="rotate(-15 56 13.5)" opacity="0.5" />
      <line x1="57.3" y1="13.5" x2="57.3" y2="7" stroke="#B8860B" strokeWidth="0.12" opacity="0.5" />
      {/* Decorative bar line */}
      <line x1="70" y1="11" x2="70" y2="21" stroke="#2E1A47" strokeWidth="0.15" opacity="0.25" />
      <line x1="71" y1="11" x2="71" y2="21" stroke="#2E1A47" strokeWidth="0.08" opacity="0.25" />
      {/* Golden accent line */}
      <line x1="10" y1="28" x2="50" y2="28" stroke="url(#music-note-gold-f)" strokeWidth="0.08" opacity="0.4" />
      {/* Name */}
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#2E1A47"
        filter="url(#music-note-shadow-f)"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="42"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.6"
        fill="url(#music-note-gold-f)"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="48"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#8a7a9a"
      >
        {data.titleJa}
      </text>
      {data.logo && <image href={data.logo} x="75" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="music-note-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" seed="3" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="soft-light" result="blended" />
        </filter>
        <filter id="music-note-shadow-b">
          <feDropShadow dx="0.15" dy="0.15" stdDeviation="0.2" floodColor="#2E1A47" floodOpacity="0.15" />
        </filter>
        <linearGradient id="music-note-gold-b" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C9A84C" />
          <stop offset="50%" stopColor="#E8D48B" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <linearGradient id="music-note-bg-b" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fdfbf8" />
          <stop offset="100%" stopColor="#f5f0e8" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#music-note-bg-b)" />
      <rect width="91" height="55" filter="url(#music-note-texture-b)" opacity="0.03" fill="#2E1A47" />
      {/* Staff lines at bottom */}
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1="5" y1={42 + i * 2.5} x2="86" y2={42 + i * 2.5} stroke="#2E1A47" strokeWidth="0.05" opacity="0.2" />
      ))}
      {/* Decorative rest symbol */}
      <path d="M 78 44 C 78 42 80 43 79 45 C 78 47 80 48 80 46" fill="none" stroke="url(#music-note-gold-b)" strokeWidth="0.12" opacity="0.35" />
      {/* Decorative double bar */}
      <line x1="5" y1="42" x2="5" y2="52" stroke="#2E1A47" strokeWidth="0.15" opacity="0.15" />
      <line x1="6" y1="42" x2="6" y2="52" stroke="#2E1A47" strokeWidth="0.08" opacity="0.15" />
      {/* Company */}
      <text
        x="10"
        y="12"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#2E1A47"
        filter="url(#music-note-shadow-b)"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="16.5"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        letterSpacing="0.3"
        fill="url(#music-note-gold-b)"
      >
        {data.companyEn}
      </text>
      <text
        x="10"
        y="21"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#8a7a9a"
      >
        {data.titleJa}
      </text>
      <line x1="10" y1="23.5" x2="81" y2="23.5" stroke="url(#music-note-gold-b)" strokeWidth="0.06" opacity="0.4" />
      {/* Contact */}
      <text x="10" y="28" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#444444">
        {data.tel}
      </text>
      <text x="10" y="31.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#444444">
        {data.email}
      </text>
      <text x="10" y="35" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#444444">
        {data.website}
      </text>
      <line x1="10" y1="37.5" x2="81" y2="37.5" stroke="url(#music-note-gold-b)" strokeWidth="0.06" opacity="0.4" />
      <text
        x="10"
        y="41"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#888888"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="75" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 2. VINYL-M (円盤) — Vinyl record aesthetic
// Circular groove pattern with label center
// ============================================================
const vinylTemplate: TemplateDefinition = {
  id: 'music-vinyl',
  name: 'VINYL-M',
  nameJa: '円盤',
  category: 'music',
  designer: 'Peter Saville',
  description: 'レコード盤の同心円。音溝に刻まれた記憶。',
  accentColor: '#1a1a1a',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="music-vinyl-texture-f">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" seed="5" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="overlay" result="blended" />
        </filter>
        <filter id="music-vinyl-shadow-f">
          <feDropShadow dx="0.2" dy="0.2" stdDeviation="0.4" floodColor="#000000" floodOpacity="0.4" />
        </filter>
        <radialGradient id="music-vinyl-sheen-f" cx="35%" cy="35%" r="55%">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="40%" stopColor="#222222" />
          <stop offset="100%" stopColor="#111111" />
        </radialGradient>
        <radialGradient id="music-vinyl-label-f" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#E8D48B" />
          <stop offset="100%" stopColor="#B8860B" />
        </radialGradient>
        <linearGradient id="music-vinyl-highlight-f" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.08" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.04" />
        </linearGradient>
        <clipPath id="music-vinyl-clip-f">
          <rect width="91" height="55" />
        </clipPath>
      </defs>
      <rect width="91" height="55" fill="#0d0d0d" />
      <rect width="91" height="55" fill="url(#music-vinyl-sheen-f)" opacity="0.6" />
      {/* Vinyl grooves */}
      <g clipPath="url(#music-vinyl-clip-f)">
        {[...Array(22)].map((_, i) => (
          <circle
            key={i}
            cx="73"
            cy="27.5"
            r={5 + i * 2.3}
            fill="none"
            stroke={i % 3 === 0 ? '#444444' : '#2a2a2a'}
            strokeWidth={i % 3 === 0 ? '0.1' : '0.06'}
            opacity={0.5 - i * 0.015}
          />
        ))}
        {/* Vinyl sheen highlight */}
        <ellipse cx="65" cy="20" rx="30" ry="25" fill="url(#music-vinyl-highlight-f)" />
        {/* Label */}
        <circle cx="73" cy="27.5" r="5" fill="url(#music-vinyl-label-f)" />
        <circle cx="73" cy="27.5" r="4.5" fill="none" stroke="#2E1A47" strokeWidth="0.08" opacity="0.4" />
        <circle cx="73" cy="27.5" r="1.2" fill="#1a1a1a" />
        <circle cx="73" cy="27.5" r="0.5" fill="#333" />
        {/* Label text */}
        <text x="73" y="26" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontSize="0.8" fill="#2E1A47" opacity="0.7">RPM</text>
        <text x="73" y="30" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontSize="0.7" fill="#2E1A47" opacity="0.5">33&#x2153;</text>
      </g>
      <rect width="91" height="55" filter="url(#music-vinyl-texture-f)" opacity="0.02" fill="#ffffff" />
      {/* Label area with text */}
      <text
        x="10"
        y="17"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="0.5"
        fill="#ffffff"
        filter="url(#music-vinyl-shadow-f)"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="24"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.4"
        fill="#B8860B"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <line x1="10" y1="27.5" x2="42" y2="27.5" stroke="#555555" strokeWidth="0.06" />
      <text
        x="10"
        y="33"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#666666"
      >
        {data.companyJa}
      </text>
      {/* Decorative track listing lines */}
      <line x1="10" y1="46" x2="30" y2="46" stroke="#444" strokeWidth="0.04" opacity="0.4" />
      <line x1="10" y1="48" x2="25" y2="48" stroke="#444" strokeWidth="0.04" opacity="0.3" />
      {data.logo && <image href={data.logo} x="3" y="44" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="music-vinyl-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" seed="6" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="overlay" result="blended" />
        </filter>
        <filter id="music-vinyl-shadow-b">
          <feDropShadow dx="0.15" dy="0.15" stdDeviation="0.3" floodColor="#000000" floodOpacity="0.3" />
        </filter>
        <radialGradient id="music-vinyl-label-b" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#E8D48B" />
          <stop offset="100%" stopColor="#B8860B" />
        </radialGradient>
        <clipPath id="music-vinyl-clip-b">
          <rect width="91" height="55" />
        </clipPath>
      </defs>
      <rect width="91" height="55" fill="#0d0d0d" />
      <g clipPath="url(#music-vinyl-clip-b)">
        {[...Array(14)].map((_, i) => (
          <circle key={i} cx="16" cy="27.5" r={5 + i * 2.3} fill="none" stroke={i % 3 === 0 ? '#3a3a3a' : '#252525'} strokeWidth={i % 3 === 0 ? '0.08' : '0.05'} />
        ))}
        <circle cx="16" cy="27.5" r="5" fill="url(#music-vinyl-label-b)" />
        <circle cx="16" cy="27.5" r="1.2" fill="#1a1a1a" />
        <circle cx="16" cy="27.5" r="0.5" fill="#333" />
      </g>
      <rect width="91" height="55" filter="url(#music-vinyl-texture-b)" opacity="0.02" fill="#ffffff" />
      {/* Company */}
      <text
        x="81"
        y="13"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#ffffff"
        filter="url(#music-vinyl-shadow-b)"
      >
        {data.companyJa}
      </text>
      <text
        x="81"
        y="17.5"
        textAnchor="end"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#B8860B"
      >
        {data.companyEn}
      </text>
      <text
        x="81"
        y="21.5"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#777"
      >
        {data.titleJa}
      </text>
      <line x1="40" y1="24" x2="81" y2="24" stroke="#555555" strokeWidth="0.06" />
      {/* Contact */}
      <text x="81" y="28.5" textAnchor="end" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.5" fill="#cccccc">
        {data.tel}
      </text>
      <text x="81" y="32.5" textAnchor="end" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.5" fill="#cccccc">
        {data.email}
      </text>
      <text x="81" y="36.5" textAnchor="end" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.5" fill="#cccccc">
        {data.website}
      </text>
      <line x1="40" y1="39" x2="81" y2="39" stroke="#555555" strokeWidth="0.06" />
      <text x="81" y="43" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.1" fill="#666666">
        〒{data.zipCode}
      </text>
      <text x="81" y="47" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.1" fill="#666666">
        {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="40" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 3. FREQUENCY (周波) — Sound wave / frequency visualization
// Horizontal frequency bars creating a waveform
// ============================================================
const frequencyTemplate: TemplateDefinition = {
  id: 'music-frequency',
  name: 'FREQUENCY',
  nameJa: '周波',
  category: 'music',
  designer: 'Alva Noto',
  description: '周波数の可視化。音の波形が描く電子的風景。',
  accentColor: '#0088cc',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="music-freq-texture-f">
          <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="3" seed="10" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="soft-light" result="blended" />
        </filter>
        <filter id="music-freq-shadow-f">
          <feDropShadow dx="0" dy="0.3" stdDeviation="0.5" floodColor="#0088cc" floodOpacity="0.3" />
        </filter>
        <filter id="music-freq-glow-f">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <linearGradient id="music-freq-bar-f" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00ccff" />
          <stop offset="50%" stopColor="#0088cc" />
          <stop offset="100%" stopColor="#004466" />
        </linearGradient>
        <linearGradient id="music-freq-bg-f" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#070a18" />
          <stop offset="100%" stopColor="#0a0e20" />
        </linearGradient>
        <radialGradient id="music-freq-ambient-f" cx="30%" cy="15%" r="70%">
          <stop offset="0%" stopColor="#0088cc" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#music-freq-bg-f)" />
      <rect width="91" height="55" fill="url(#music-freq-ambient-f)" />
      {/* Frequency bars - waveform visualization */}
      {[...Array(45)].map((_, i) => {
        const h = Math.abs(Math.sin(i * 0.35) * 8 + Math.sin(i * 0.7) * 4);
        return (
          <rect
            key={i}
            x={i * 2 + 0.5}
            y={6 - h / 2}
            width="1.2"
            height={h}
            fill="url(#music-freq-bar-f)"
            opacity={0.25 + Math.sin(i * 0.35) * 0.25}
            rx="0.3"
          />
        );
      })}
      {/* Horizontal center line with glow */}
      <line x1="0" y1="6" x2="91" y2="6" stroke="#0088cc" strokeWidth="0.06" opacity="0.4" />
      <line x1="0" y1="6" x2="91" y2="6" stroke="#00ccff" strokeWidth="0.02" opacity="0.2" filter="url(#music-freq-glow-f)" />
      {/* Grid lines */}
      <line x1="0" y1="0" x2="0" y2="12" stroke="#0088cc" strokeWidth="0.03" opacity="0.15" />
      <line x1="22.75" y1="0" x2="22.75" y2="12" stroke="#0088cc" strokeWidth="0.03" opacity="0.1" />
      <line x1="45.5" y1="0" x2="45.5" y2="12" stroke="#0088cc" strokeWidth="0.03" opacity="0.1" />
      <line x1="68.25" y1="0" x2="68.25" y2="12" stroke="#0088cc" strokeWidth="0.03" opacity="0.1" />
      <rect width="91" height="55" filter="url(#music-freq-texture-f)" opacity="0.015" fill="#0088cc" />
      {/* Name */}
      <text
        x="10"
        y="26"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="6"
        letterSpacing="0.5"
        fill="#ffffff"
        filter="url(#music-freq-shadow-f)"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="33"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.4"
        fill="#0088cc"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="10"
        y="41"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#4488aa"
      >
        {data.titleJa}
      </text>
      {/* Frequency label */}
      <text x="81" y="50" textAnchor="end" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="0.9" fill="#0088cc" opacity="0.4">
        440Hz / A4
      </text>
      {/* Decorative data readout */}
      <text x="81" y="14" textAnchor="end" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="0.7" fill="#0088cc" opacity="0.3">
        SAMPLE RATE: 44.1kHz
      </text>
      {data.logo && <image href={data.logo} x="75" y="36" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="music-freq-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="3" seed="11" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="soft-light" result="blended" />
        </filter>
        <filter id="music-freq-shadow-b">
          <feDropShadow dx="0" dy="0.2" stdDeviation="0.3" floodColor="#0088cc" floodOpacity="0.2" />
        </filter>
        <linearGradient id="music-freq-bar-b" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#004466" />
          <stop offset="100%" stopColor="#0088cc" />
        </linearGradient>
        <linearGradient id="music-freq-bg-b" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#070a18" />
          <stop offset="100%" stopColor="#0a0e20" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#music-freq-bg-b)" />
      {/* Subtle frequency bars at bottom */}
      {[...Array(45)].map((_, i) => {
        const h = Math.abs(Math.sin(i * 0.4) * 5 + Math.sin(i * 0.8) * 2);
        return (
          <rect
            key={i}
            x={i * 2 + 0.5}
            y={52 - h}
            width="1.2"
            height={h}
            fill="url(#music-freq-bar-b)"
            opacity={0.12}
            rx="0.3"
          />
        );
      })}
      <line x1="0" y1="52" x2="91" y2="52" stroke="#0088cc" strokeWidth="0.04" opacity="0.2" />
      {/* Decorative oscilloscope dot */}
      <circle cx="82" cy="8" r="0.4" fill="#00ccff" opacity="0.5" />
      <circle cx="82" cy="8" r="1" fill="none" stroke="#0088cc" strokeWidth="0.04" opacity="0.3" />
      <rect width="91" height="55" filter="url(#music-freq-texture-b)" opacity="0.015" fill="#0088cc" />
      {/* Company */}
      <text
        x="10"
        y="12"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#ffffff"
        filter="url(#music-freq-shadow-b)"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="16.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#0088cc"
      >
        {data.companyEn}
      </text>
      <text
        x="10"
        y="20.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#4488aa"
      >
        {data.titleJa}
      </text>
      <line x1="10" y1="23" x2="81" y2="23" stroke="#0088cc" strokeWidth="0.04" opacity="0.3" />
      {/* Contact */}
      <text x="10" y="27.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.5" fill="#cccccc">
        {data.tel}
      </text>
      <text x="10" y="31.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.5" fill="#cccccc">
        {data.email}
      </text>
      <text x="10" y="35.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.5" fill="#cccccc">
        {data.website}
      </text>
      <line x1="10" y1="38" x2="81" y2="38" stroke="#0088cc" strokeWidth="0.04" opacity="0.3" />
      <text
        x="10"
        y="42.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#4488aa"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="75" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 4. TREBLE (高音) — Treble clef inspired elegant design
// Serif elegance with musical character
// ============================================================
const trebleTemplate: TemplateDefinition = {
  id: 'music-treble',
  name: 'TREBLE',
  nameJa: '高音',
  category: 'music',
  designer: 'Claude Debussy',
  description: '高音域の繊細さ。ト音記号が誘う優美な旋律。',
  accentColor: '#B8860B',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="music-treble-texture-f">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" seed="20" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="soft-light" result="blended" />
        </filter>
        <filter id="music-treble-shadow-f">
          <feDropShadow dx="0.15" dy="0.2" stdDeviation="0.3" floodColor="#B8860B" floodOpacity="0.15" />
        </filter>
        <linearGradient id="music-treble-gold-f" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8D48B" />
          <stop offset="40%" stopColor="#B8860B" />
          <stop offset="100%" stopColor="#8B6508" />
        </linearGradient>
        <linearGradient id="music-treble-bg-f" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a1520" />
          <stop offset="50%" stopColor="#1e1828" />
          <stop offset="100%" stopColor="#150f1e" />
        </linearGradient>
        <radialGradient id="music-treble-glow-f" cx="75%" cy="35%" r="45%">
          <stop offset="0%" stopColor="#B8860B" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#music-treble-bg-f)" />
      <rect width="91" height="55" fill="url(#music-treble-glow-f)" />
      <rect width="91" height="55" filter="url(#music-treble-texture-f)" opacity="0.02" fill="#B8860B" />
      {/* Large decorative treble clef */}
      <path
        d="M 76 45 C 76 35 82 30 82 22 C 82 14 76 10 72 14 C 68 18 72 24 76 22 C 80 20 78 14 76 12 C 74 10 70 12 70 18 C 70 26 78 30 78 40"
        fill="none"
        stroke="url(#music-treble-gold-f)"
        strokeWidth="0.2"
        opacity="0.25"
      />
      {/* Secondary treble clef echo */}
      <path
        d="M 78 47 C 78 37 84 32 84 24 C 84 16 78 12 74 16 C 70 20 74 26 78 24 C 82 22 80 16 78 14"
        fill="none"
        stroke="#B8860B"
        strokeWidth="0.08"
        opacity="0.1"
      />
      {/* Staff lines - very subtle */}
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1="60" y1={18 + i * 3} x2="88" y2={18 + i * 3} stroke="#B8860B" strokeWidth="0.04" opacity="0.15" />
      ))}
      {/* Decorative corner bracket */}
      <path d="M 5 5 L 5 10 M 5 5 L 10 5" fill="none" stroke="#B8860B" strokeWidth="0.1" opacity="0.3" />
      <path d="M 5 50 L 5 45 M 5 50 L 10 50" fill="none" stroke="#B8860B" strokeWidth="0.1" opacity="0.3" />
      {/* Name */}
      <text
        x="10"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="6"
        letterSpacing="1"
        fill="#ffffff"
        filter="url(#music-treble-shadow-f)"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="27.5"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2.2"
        letterSpacing="0.8"
        fill="url(#music-treble-gold-f)"
      >
        {data.nameEn}
      </text>
      <line x1="10" y1="31.5" x2="55" y2="31.5" stroke="#B8860B" strokeWidth="0.06" opacity="0.4" />
      <text
        x="10"
        y="37"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="46"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#B8860B"
        opacity="0.6"
      >
        {data.companyJa}
      </text>
      {data.logo && <image href={data.logo} x="75" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="music-treble-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" seed="21" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="soft-light" result="blended" />
        </filter>
        <filter id="music-treble-shadow-b">
          <feDropShadow dx="0.1" dy="0.15" stdDeviation="0.2" floodColor="#B8860B" floodOpacity="0.12" />
        </filter>
        <linearGradient id="music-treble-gold-b" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E8D48B" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <linearGradient id="music-treble-bg-b" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a1520" />
          <stop offset="100%" stopColor="#150f1e" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#music-treble-bg-b)" />
      <rect width="91" height="55" filter="url(#music-treble-texture-b)" opacity="0.02" fill="#B8860B" />
      {/* Subtle staff lines at bottom */}
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1="5" y1={44 + i * 2.2} x2="86" y2={44 + i * 2.2} stroke="#B8860B" strokeWidth="0.03" opacity="0.12" />
      ))}
      {/* Decorative note */}
      <ellipse cx="80" cy="46" rx="1" ry="0.7" fill="#B8860B" opacity="0.15" transform="rotate(-15 80 46)" />
      <line x1="81" y1="46" x2="81" y2="41" stroke="#B8860B" strokeWidth="0.06" opacity="0.15" />
      {/* Corner bracket */}
      <path d="M 86 5 L 86 10 M 86 5 L 81 5" fill="none" stroke="#B8860B" strokeWidth="0.1" opacity="0.2" />
      {/* Company */}
      <text
        x="10"
        y="12"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2.8"
        letterSpacing="0.5"
        fill="#ffffff"
        filter="url(#music-treble-shadow-b)"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="17"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.4"
        letterSpacing="0.4"
        fill="url(#music-treble-gold-b)"
      >
        {data.companyEn}
      </text>
      <text
        x="10"
        y="21.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#888"
      >
        {data.titleJa}
      </text>
      <line x1="10" y1="24" x2="81" y2="24" stroke="#B8860B" strokeWidth="0.04" opacity="0.25" />
      {/* Contact */}
      <text x="10" y="28.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#cccccc">
        {data.tel}
      </text>
      <text x="10" y="32.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#cccccc">
        {data.email}
      </text>
      <text x="10" y="36.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#cccccc">
        {data.website}
      </text>
      <line x1="10" y1="39" x2="81" y2="39" stroke="#B8860B" strokeWidth="0.04" opacity="0.25" />
      <text
        x="10"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#666666"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="75" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 5. RHYTHM (拍) — Rhythmic pattern with beat markers
// Repeating beat pattern creating visual rhythm
// ============================================================
const rhythmTemplate: TemplateDefinition = {
  id: 'music-rhythm',
  name: 'RHYTHM',
  nameJa: '拍',
  category: 'music',
  designer: 'Kraftwerk',
  description: '拍の刻み。リズムが生む秩序と躍動。',
  accentColor: '#2E1A47',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="music-rhythm-texture-f">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" seed="30" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="soft-light" result="blended" />
        </filter>
        <filter id="music-rhythm-shadow-f">
          <feDropShadow dx="0.15" dy="0.2" stdDeviation="0.25" floodColor="#2E1A47" floodOpacity="0.2" />
        </filter>
        <linearGradient id="music-rhythm-accent-f" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6644aa" />
          <stop offset="50%" stopColor="#8855cc" />
          <stop offset="100%" stopColor="#2E1A47" />
        </linearGradient>
        <linearGradient id="music-rhythm-bg-f" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f8f5fc" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#music-rhythm-bg-f)" />
      <rect width="91" height="55" filter="url(#music-rhythm-texture-f)" opacity="0.02" fill="#2E1A47" />
      {/* Rhythm grid - beat markers at top */}
      {[...Array(16)].map((_, i) => (
        <g key={i}>
          <rect
            x={5.5 + i * 5}
            y="4"
            width={i % 4 === 0 ? 2.5 : 1.5}
            height={i % 4 === 0 ? 7 : i % 2 === 0 ? 5 : 3}
            fill={i % 4 === 0 ? '#2E1A47' : 'url(#music-rhythm-accent-f)'}
            opacity={i % 4 === 0 ? 0.9 : i % 2 === 0 ? 0.4 : 0.15}
            rx="0.3"
          />
        </g>
      ))}
      {/* Time signature with decorative box */}
      <rect x="1.5" y="4" width="4" height="8" fill="none" stroke="#2E1A47" strokeWidth="0.06" opacity="0.3" rx="0.3" />
      <text x="3.5" y="8" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="500" fontSize="2" fill="#2E1A47">4</text>
      <text x="3.5" y="11" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="500" fontSize="2" fill="#2E1A47">4</text>
      {/* Decorative horizontal measure lines */}
      <line x1="5" y1="12.5" x2="86" y2="12.5" stroke="#2E1A47" strokeWidth="0.04" opacity="0.15" />
      {/* Name */}
      <text
        x="10"
        y="26"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="0.5"
        fill="#2E1A47"
        filter="url(#music-rhythm-shadow-f)"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="33"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.5"
        fill="url(#music-rhythm-accent-f)"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="10"
        y="41"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#999999"
      >
        {data.titleJa}
      </text>
      {/* Bottom beat bar with gradient */}
      {[...Array(4)].map((_, i) => (
        <rect key={`b${i}`} x={10 + i * 20} y="48" width="8" height="2.5" fill="url(#music-rhythm-accent-f)" opacity={0.08 + i * 0.03} rx="0.3" />
      ))}
      {/* BPM marker */}
      <text x="81" y="50" textAnchor="end" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="0.8" fill="#6644aa" opacity="0.4">BPM 120</text>
      {data.logo && <image href={data.logo} x="75" y="22" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="music-rhythm-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" seed="31" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="soft-light" result="blended" />
        </filter>
        <filter id="music-rhythm-shadow-b">
          <feDropShadow dx="0.1" dy="0.15" stdDeviation="0.2" floodColor="#2E1A47" floodOpacity="0.15" />
        </filter>
        <linearGradient id="music-rhythm-accent-b" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6644aa" />
          <stop offset="100%" stopColor="#2E1A47" />
        </linearGradient>
        <linearGradient id="music-rhythm-bg-b" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f8f5fc" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#music-rhythm-bg-b)" />
      <rect width="91" height="55" filter="url(#music-rhythm-texture-b)" opacity="0.02" fill="#2E1A47" />
      {/* Subtle rhythm markers at bottom */}
      {[...Array(16)].map((_, i) => (
        <rect
          key={i}
          x={5.5 + i * 5}
          y="48"
          width={i % 4 === 0 ? 2 : 1}
          height={i % 4 === 0 ? 4 : 2.5}
          fill="url(#music-rhythm-accent-b)"
          opacity={i % 4 === 0 ? 0.2 : 0.08}
          rx="0.2"
        />
      ))}
      {/* Decorative measure lines */}
      <line x1="5" y1="47" x2="86" y2="47" stroke="#2E1A47" strokeWidth="0.04" opacity="0.1" />
      {/* Company */}
      <text
        x="10"
        y="12"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        fill="#2E1A47"
        filter="url(#music-rhythm-shadow-b)"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="16.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="url(#music-rhythm-accent-b)"
      >
        {data.companyEn}
      </text>
      <text
        x="10"
        y="20.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#999"
      >
        {data.titleJa}
      </text>
      <line x1="10" y1="23" x2="81" y2="23" stroke="#2E1A47" strokeWidth="0.06" opacity="0.2" />
      {/* Contact */}
      <text x="10" y="27.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.5" fill="#444444">
        {data.tel}
      </text>
      <text x="10" y="31.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.5" fill="#444444">
        {data.email}
      </text>
      <text x="10" y="35.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.5" fill="#444444">
        {data.website}
      </text>
      <line x1="10" y1="38" x2="81" y2="38" stroke="#2E1A47" strokeWidth="0.06" opacity="0.2" />
      <text
        x="10"
        y="42.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#999999"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="75" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 6. BASS (低音) — Deep bass, heavy bottom design
// Dark, heavy lower section with weight at bottom
// ============================================================
const bassTemplate: TemplateDefinition = {
  id: 'music-bass',
  name: 'BASS',
  nameJa: '低音',
  category: 'music',
  designer: 'Lee Scratch Perry',
  description: '深い低音の振動。底から響く力強さ。',
  accentColor: '#2E1A47',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="music-bass-texture-f">
          <feTurbulence type="fractalNoise" baseFrequency="0.4" numOctaves="4" seed="40" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="soft-light" result="blended" />
        </filter>
        <filter id="music-bass-shadow-f">
          <feDropShadow dx="0.2" dy="0.3" stdDeviation="0.4" floodColor="#2E1A47" floodOpacity="0.25" />
        </filter>
        <linearGradient id="music-bass-grad-f" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="45%" stopColor="#f0ecf5" />
          <stop offset="75%" stopColor="#c4b0d8" />
          <stop offset="100%" stopColor="#2E1A47" />
        </linearGradient>
        <linearGradient id="music-bass-purple-f" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2E1A47" />
          <stop offset="50%" stopColor="#6644aa" />
          <stop offset="100%" stopColor="#2E1A47" />
        </linearGradient>
        <radialGradient id="music-bass-rumble-f" cx="50%" cy="90%" r="60%">
          <stop offset="0%" stopColor="#2E1A47" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#2E1A47" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#music-bass-grad-f)" />
      <rect width="91" height="55" fill="url(#music-bass-rumble-f)" />
      <rect width="91" height="55" filter="url(#music-bass-texture-f)" opacity="0.02" fill="#2E1A47" />
      {/* Bass waves at bottom */}
      <path d="M 0 46 Q 11 40 23 46 Q 34 52 45.5 46 Q 57 40 68 46 Q 79 52 91 46" fill="none" stroke="url(#music-bass-purple-f)" strokeWidth="0.25" opacity="0.35" />
      <path d="M 0 48.5 Q 11 43 23 48.5 Q 34 54 45.5 48.5 Q 57 43 68 48.5 Q 79 54 91 48.5" fill="none" stroke="#2E1A47" strokeWidth="0.15" opacity="0.2" />
      <path d="M 0 51 Q 11 46 23 51 Q 34 56 45.5 51 Q 57 46 68 51 Q 79 56 91 51" fill="none" stroke="#2E1A47" strokeWidth="0.08" opacity="0.12" />
      {/* Bass clef symbol suggestion */}
      <circle cx="79" cy="16" r="0.7" fill="#2E1A47" opacity="0.6" />
      <circle cx="79" cy="20" r="0.7" fill="#2E1A47" opacity="0.6" />
      <path d="M 76 12 C 78 12 80 14 80 17 C 80 20 77 22 74 22" fill="none" stroke="#2E1A47" strokeWidth="0.15" opacity="0.4" />
      {/* Decorative low-frequency indicator */}
      <text x="81" y="50" textAnchor="end" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="0.8" fill="#6644aa" opacity="0.4">SUB 40Hz</text>
      {/* Name */}
      <text
        x="10"
        y="18"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="6.5"
        letterSpacing="0.5"
        fill="#2E1A47"
        filter="url(#music-bass-shadow-f)"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="25"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="2"
        letterSpacing="0.5"
        fill="#6644aa"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="10"
        y="33"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      {data.logo && <image href={data.logo} x="75" y="30" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="music-bass-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.4" numOctaves="4" seed="41" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="soft-light" result="blended" />
        </filter>
        <filter id="music-bass-shadow-b">
          <feDropShadow dx="0.1" dy="0.2" stdDeviation="0.25" floodColor="#2E1A47" floodOpacity="0.15" />
        </filter>
        <linearGradient id="music-bass-grad-b" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="70%" stopColor="#f0ecf5" />
          <stop offset="100%" stopColor="#2E1A47" />
        </linearGradient>
        <linearGradient id="music-bass-purple-b" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2E1A47" />
          <stop offset="100%" stopColor="#6644aa" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#music-bass-grad-b)" />
      <rect width="91" height="55" filter="url(#music-bass-texture-b)" opacity="0.02" fill="#2E1A47" />
      {/* Subtle bass wave */}
      <path d="M 0 50 Q 15 46 30 50 Q 45 54 60 50 Q 75 46 91 50" fill="none" stroke="#2E1A47" strokeWidth="0.1" opacity="0.15" />
      {/* Bass clef dots */}
      <circle cx="82" cy="46" r="0.5" fill="#6644aa" opacity="0.25" />
      <circle cx="82" cy="49" r="0.5" fill="#6644aa" opacity="0.25" />
      {/* Company */}
      <text
        x="10"
        y="12"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        fill="#2E1A47"
        filter="url(#music-bass-shadow-b)"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="16.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="url(#music-bass-purple-b)"
      >
        {data.companyEn}
      </text>
      <text
        x="10"
        y="21"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#888"
      >
        {data.titleJa}
      </text>
      <line x1="10" y1="23.5" x2="81" y2="23.5" stroke="#2E1A47" strokeWidth="0.06" opacity="0.2" />
      {/* Contact */}
      <text x="10" y="28" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.5" fill="#444444">
        {data.tel}
      </text>
      <text x="10" y="32" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.5" fill="#444444">
        {data.email}
      </text>
      <text x="10" y="36" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.5" fill="#444444">
        {data.website}
      </text>
      <line x1="10" y1="38.5" x2="81" y2="38.5" stroke="#2E1A47" strokeWidth="0.06" opacity="0.2" />
      <text
        x="10"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#888888"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="75" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 7. CHORD (和音) — Layered harmonics, stacked elements
// Multiple overlapping transparent layers
// ============================================================
const chordTemplate: TemplateDefinition = {
  id: 'music-chord',
  name: 'CHORD',
  nameJa: '和音',
  category: 'music',
  designer: 'Brian Eno',
  description: '和音の層。重なり合う音が生む豊かなハーモニー。',
  accentColor: '#2E1A47',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="music-chord-texture-f">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" seed="50" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="soft-light" result="blended" />
        </filter>
        <filter id="music-chord-shadow-f">
          <feDropShadow dx="0.1" dy="0.15" stdDeviation="0.3" floodColor="#2E1A47" floodOpacity="0.15" />
        </filter>
        <linearGradient id="music-chord-layer1-f" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2E1A47" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#2E1A47" stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id="music-chord-layer2-f" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6644aa" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#8866ee" stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id="music-chord-layer3-f" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#B8860B" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#E8D48B" stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id="music-chord-bg-f" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8f4fc" />
          <stop offset="100%" stopColor="#f0eaf6" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#music-chord-bg-f)" />
      <rect width="91" height="55" filter="url(#music-chord-texture-f)" opacity="0.02" fill="#2E1A47" />
      {/* Chord layers - overlapping transparent shapes */}
      <rect x="3" y="3" width="42" height="49" fill="url(#music-chord-layer1-f)" rx="1.5" />
      <rect x="15" y="3" width="42" height="49" fill="url(#music-chord-layer2-f)" rx="1.5" />
      <rect x="27" y="3" width="42" height="49" fill="url(#music-chord-layer2-f)" rx="1.5" />
      <rect x="39" y="3" width="42" height="49" fill="url(#music-chord-layer3-f)" rx="1.5" />
      <rect x="48" y="3" width="40" height="49" fill="url(#music-chord-layer3-f)" rx="1.5" />
      {/* Harmonic overtone circles */}
      <circle cx="78" cy="10" r="3" fill="none" stroke="#6644aa" strokeWidth="0.04" opacity="0.15" />
      <circle cx="78" cy="10" r="6" fill="none" stroke="#8866ee" strokeWidth="0.03" opacity="0.1" />
      <circle cx="78" cy="10" r="9" fill="none" stroke="#B8860B" strokeWidth="0.02" opacity="0.08" />
      {/* Name */}
      <text
        x="45.5"
        y="22"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="6"
        letterSpacing="0.8"
        fill="#2E1A47"
        filter="url(#music-chord-shadow-f)"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="29.5"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.5"
        fill="#6644aa"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="38"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      {/* Chord notation */}
      <text x="80" y="49" textAnchor="end" fontFamily="'Cormorant Garamond', serif" fontWeight="300" fontSize="1.2" fill="#B8860B" opacity="0.35">
        Cmaj7
      </text>
      {data.logo && <image href={data.logo} x="5" y="42" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="music-chord-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" seed="51" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="soft-light" result="blended" />
        </filter>
        <filter id="music-chord-shadow-b">
          <feDropShadow dx="0.1" dy="0.1" stdDeviation="0.2" floodColor="#2E1A47" floodOpacity="0.12" />
        </filter>
        <linearGradient id="music-chord-bg-b" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8f4fc" />
          <stop offset="100%" stopColor="#f0eaf6" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#music-chord-bg-b)" />
      <rect width="91" height="55" filter="url(#music-chord-texture-b)" opacity="0.02" fill="#2E1A47" />
      {/* Subtle chord layers */}
      <rect x="8" y="3" width="30" height="49" fill="#2E1A47" opacity="0.02" rx="1" />
      <rect x="28" y="3" width="30" height="49" fill="#6644aa" opacity="0.02" rx="1" />
      <rect x="48" y="3" width="30" height="49" fill="#8866ee" opacity="0.02" rx="1" />
      {/* Harmonic circles */}
      <circle cx="80" cy="45" r="2" fill="none" stroke="#B8860B" strokeWidth="0.03" opacity="0.15" />
      <circle cx="80" cy="45" r="4" fill="none" stroke="#6644aa" strokeWidth="0.02" opacity="0.1" />
      {/* Company */}
      <text
        x="45.5"
        y="12"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#2E1A47"
        filter="url(#music-chord-shadow-b)"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="16.5"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#6644aa"
      >
        {data.companyEn}
      </text>
      <text
        x="45.5"
        y="20.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#999"
      >
        {data.titleJa}
      </text>
      <line x1="20" y1="23" x2="71" y2="23" stroke="#2E1A47" strokeWidth="0.06" opacity="0.15" />
      {/* Contact */}
      <text x="45.5" y="27.5" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.5" fill="#444444">
        {data.tel}
      </text>
      <text x="45.5" y="31.5" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.5" fill="#444444">
        {data.email}
      </text>
      <text x="45.5" y="35.5" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.5" fill="#444444">
        {data.website}
      </text>
      <line x1="20" y1="38" x2="71" y2="38" stroke="#2E1A47" strokeWidth="0.06" opacity="0.15" />
      <text
        x="45.5"
        y="42.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#999999"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="5" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 8. TEMPO (速度) — Metronome-inspired precision
// Angular geometric with pendulum motif
// ============================================================
const tempoTemplate: TemplateDefinition = {
  id: 'music-tempo',
  name: 'TEMPO',
  nameJa: '速度',
  category: 'music',
  designer: 'Steve Reich',
  description: 'メトロノームの精密さ。テンポが刻む時の構造。',
  accentColor: '#1a1a1a',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="music-tempo-texture-f">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" seed="60" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="soft-light" result="blended" />
        </filter>
        <filter id="music-tempo-shadow-f">
          <feDropShadow dx="0.15" dy="0.2" stdDeviation="0.3" floodColor="#1a1a1a" floodOpacity="0.18" />
        </filter>
        <linearGradient id="music-tempo-gold-f" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4A84C" />
          <stop offset="50%" stopColor="#B8860B" />
          <stop offset="100%" stopColor="#8B6508" />
        </linearGradient>
        <linearGradient id="music-tempo-bg-f" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f8f6f2" />
        </linearGradient>
        <linearGradient id="music-tempo-pendulum-f" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#444444" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#music-tempo-bg-f)" />
      <rect width="91" height="55" filter="url(#music-tempo-texture-f)" opacity="0.02" fill="#1a1a1a" />
      {/* Metronome pendulum line */}
      <line x1="80" y1="55" x2="68" y2="3" stroke="url(#music-tempo-pendulum-f)" strokeWidth="0.18" />
      {/* Pendulum weight */}
      <rect x="71" y="19" width="5.5" height="3" fill="url(#music-tempo-gold-f)" rx="0.4" />
      {/* Tick marks with varying weight */}
      <line x1="75" y1="4" x2="86" y2="4" stroke="#1a1a1a" strokeWidth="0.1" opacity="0.6" />
      <line x1="74" y1="9" x2="84" y2="9" stroke="#1a1a1a" strokeWidth="0.06" opacity="0.4" />
      <line x1="73" y1="14" x2="83" y2="14" stroke="#1a1a1a" strokeWidth="0.06" opacity="0.3" />
      <line x1="72" y1="25" x2="82" y2="25" stroke="#1a1a1a" strokeWidth="0.06" opacity="0.3" />
      <line x1="71" y1="30" x2="81" y2="30" stroke="#1a1a1a" strokeWidth="0.06" opacity="0.2" />
      {/* BPM notation */}
      <text x="85" y="7.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.1" fill="url(#music-tempo-gold-f)">
        120
      </text>
      {/* Decorative metronome base triangle */}
      <path d="M 75 55 L 85 55 L 80 50 Z" fill="none" stroke="#1a1a1a" strokeWidth="0.06" opacity="0.15" />
      {/* Name */}
      <text
        x="8"
        y="19"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.3"
        fill="#1a1a1a"
        filter="url(#music-tempo-shadow-f)"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="26"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.4"
        fill="#666666"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="8"
        y="35"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#999999"
      >
        {data.titleJa}
      </text>
      <text
        x="8"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.6"
        fill="#555555"
      >
        {data.companyJa}
      </text>
      {data.logo && <image href={data.logo} x="8" y="46" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="music-tempo-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" seed="61" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="soft-light" result="blended" />
        </filter>
        <filter id="music-tempo-shadow-b">
          <feDropShadow dx="0.1" dy="0.1" stdDeviation="0.2" floodColor="#1a1a1a" floodOpacity="0.12" />
        </filter>
        <linearGradient id="music-tempo-gold-b" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D4A84C" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <linearGradient id="music-tempo-bg-b" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f8f6f2" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#music-tempo-bg-b)" />
      <rect width="91" height="55" filter="url(#music-tempo-texture-b)" opacity="0.02" fill="#1a1a1a" />
      {/* Subtle metronome pendulum */}
      <line x1="80" y1="55" x2="73" y2="10" stroke="#e0e0e0" strokeWidth="0.1" />
      <rect x="75" y="24" width="4" height="2" fill="url(#music-tempo-gold-b)" opacity="0.3" rx="0.2" />
      {/* Tick marks */}
      <line x1="76" y1="14" x2="83" y2="14" stroke="#ddd" strokeWidth="0.04" />
      <line x1="77" y1="19" x2="83" y2="19" stroke="#ddd" strokeWidth="0.04" />
      {/* Decorative base */}
      <path d="M 76 55 L 84 55 L 80 51 Z" fill="none" stroke="#ddd" strokeWidth="0.04" />
      {/* Company */}
      <text
        x="8"
        y="12"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        fill="#1a1a1a"
        filter="url(#music-tempo-shadow-b)"
      >
        {data.companyJa}
      </text>
      <text
        x="8"
        y="16.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#666666"
      >
        {data.companyEn}
      </text>
      <text
        x="8"
        y="20.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#999"
      >
        {data.titleJa}
      </text>
      <line x1="8" y1="23" x2="65" y2="23" stroke="#1a1a1a" strokeWidth="0.06" opacity="0.15" />
      {/* Contact */}
      <text x="8" y="27.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.5" fill="#444444">
        {data.tel}
      </text>
      <text x="8" y="31.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.5" fill="#444444">
        {data.email}
      </text>
      <text x="8" y="35.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.5" fill="#444444">
        {data.website}
      </text>
      <line x1="8" y1="38" x2="65" y2="38" stroke="#1a1a1a" strokeWidth="0.06" opacity="0.15" />
      <text
        x="8"
        y="42.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#999999"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="67" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 9. ACOUSTIC (響) — Warm acoustic tones
// Warm wood-toned design suggesting acoustic instruments
// ============================================================
const acousticTemplate: TemplateDefinition = {
  id: 'music-acoustic',
  name: 'ACOUSTIC',
  nameJa: '響',
  category: 'music',
  designer: 'Antonio Stradivari',
  description: '響きの温もり。アコースティックな木の音色。',
  accentColor: '#8B6914',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="music-acoustic-texture-f">
          <feTurbulence type="fractalNoise" baseFrequency="0.3" numOctaves="5" seed="70" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="soft-light" result="blended" />
        </filter>
        <filter id="music-acoustic-shadow-f">
          <feDropShadow dx="0.15" dy="0.2" stdDeviation="0.3" floodColor="#3d2810" floodOpacity="0.2" />
        </filter>
        <linearGradient id="music-acoustic-wood-f" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f0dbb8" />
          <stop offset="25%" stopColor="#f8ecd0" />
          <stop offset="50%" stopColor="#faf0dc" />
          <stop offset="75%" stopColor="#f5e6c8" />
          <stop offset="100%" stopColor="#f0dbb8" />
        </linearGradient>
        <radialGradient id="music-acoustic-hole-f" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2a1808" />
          <stop offset="60%" stopColor="#3d2810" />
          <stop offset="100%" stopColor="#5c3d18" />
        </radialGradient>
        <linearGradient id="music-acoustic-rosette-f" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C9A84C" />
          <stop offset="50%" stopColor="#8B6914" />
          <stop offset="100%" stopColor="#C9A84C" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#music-acoustic-wood-f)" />
      <rect width="91" height="55" filter="url(#music-acoustic-texture-f)" opacity="0.04" fill="#8B6914" />
      {/* Sound hole */}
      <circle cx="72" cy="32" r="10" fill="url(#music-acoustic-hole-f)" opacity="0.08" />
      <circle cx="72" cy="32" r="10" fill="none" stroke="#8B6914" strokeWidth="0.2" opacity="0.3" />
      <circle cx="72" cy="32" r="9.2" fill="none" stroke="url(#music-acoustic-rosette-f)" strokeWidth="0.12" opacity="0.4" />
      <circle cx="72" cy="32" r="8.4" fill="none" stroke="#8B6914" strokeWidth="0.06" opacity="0.2" />
      {/* Rosette pattern ticks */}
      {[...Array(36)].map((_, i) => (
        <line
          key={i}
          x1={72 + Math.cos((i * 10 * Math.PI) / 180) * 8.8}
          y1={32 + Math.sin((i * 10 * Math.PI) / 180) * 8.8}
          x2={72 + Math.cos((i * 10 * Math.PI) / 180) * 9.5}
          y2={32 + Math.sin((i * 10 * Math.PI) / 180) * 9.5}
          stroke="url(#music-acoustic-rosette-f)"
          strokeWidth={i % 3 === 0 ? '0.08' : '0.04'}
          opacity={i % 3 === 0 ? 0.4 : 0.2}
        />
      ))}
      {/* String lines */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <line key={i} x1={69 + i * 1.2} y1="3" x2={69 + i * 1.2} y2="55" stroke="#8B6914" strokeWidth={0.03 + i * 0.005} opacity={0.2 + i * 0.02} />
      ))}
      {/* Name */}
      <text
        x="8"
        y="17"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.3"
        fill="#3d2810"
        filter="url(#music-acoustic-shadow-f)"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="24"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.4"
        fill="#8B6914"
      >
        {data.nameEn}
      </text>
      <text
        x="8"
        y="33"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.6"
        fill="#8B7355"
      >
        {data.titleJa}
      </text>
      <text
        x="8"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#5c4a28"
      >
        {data.companyJa}
      </text>
      {data.logo && <image href={data.logo} x="8" y="46" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="music-acoustic-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.3" numOctaves="5" seed="71" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="soft-light" result="blended" />
        </filter>
        <filter id="music-acoustic-shadow-b">
          <feDropShadow dx="0.1" dy="0.15" stdDeviation="0.2" floodColor="#3d2810" floodOpacity="0.15" />
        </filter>
        <linearGradient id="music-acoustic-wood-b" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f0dbb8" />
          <stop offset="50%" stopColor="#faf0dc" />
          <stop offset="100%" stopColor="#f0dbb8" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#music-acoustic-wood-b)" />
      <rect width="91" height="55" filter="url(#music-acoustic-texture-b)" opacity="0.04" fill="#8B6914" />
      {/* Subtle sound hole */}
      <circle cx="78" cy="42" r="6" fill="none" stroke="#8B6914" strokeWidth="0.1" opacity="0.2" />
      <circle cx="78" cy="42" r="5.5" fill="none" stroke="#C9A84C" strokeWidth="0.06" opacity="0.15" />
      {/* Rosette ticks */}
      {[...Array(18)].map((_, i) => (
        <line
          key={i}
          x1={78 + Math.cos((i * 20 * Math.PI) / 180) * 5.2}
          y1={42 + Math.sin((i * 20 * Math.PI) / 180) * 5.2}
          x2={78 + Math.cos((i * 20 * Math.PI) / 180) * 5.8}
          y2={42 + Math.sin((i * 20 * Math.PI) / 180) * 5.8}
          stroke="#8B6914"
          strokeWidth="0.04"
          opacity="0.15"
        />
      ))}
      {/* String suggestion */}
      <line x1="76" y1="36" x2="76" y2="48" stroke="#8B6914" strokeWidth="0.03" opacity="0.15" />
      <line x1="78" y1="36" x2="78" y2="48" stroke="#8B6914" strokeWidth="0.03" opacity="0.15" />
      <line x1="80" y1="36" x2="80" y2="48" stroke="#8B6914" strokeWidth="0.03" opacity="0.15" />
      {/* Company */}
      <text
        x="10"
        y="12"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#3d2810"
        filter="url(#music-acoustic-shadow-b)"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="16.5"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        letterSpacing="0.3"
        fill="#8B6914"
      >
        {data.companyEn}
      </text>
      <text
        x="10"
        y="21"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#8B7355"
      >
        {data.titleJa}
      </text>
      <line x1="10" y1="23.5" x2="70" y2="23.5" stroke="#8B6914" strokeWidth="0.06" opacity="0.3" />
      {/* Contact */}
      <text x="10" y="28" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#5c4a28">
        {data.tel}
      </text>
      <text x="10" y="32" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#5c4a28">
        {data.email}
      </text>
      <text x="10" y="36" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#5c4a28">
        {data.website}
      </text>
      <line x1="10" y1="38.5" x2="70" y2="38.5" stroke="#8B6914" strokeWidth="0.06" opacity="0.3" />
      <text
        x="10"
        y="43"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#8B7355"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="68" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 10. LOOP (環) — Infinite loop / repeat symbol
// Circular infinity-like loop motif
// ============================================================
const loopTemplate: TemplateDefinition = {
  id: 'music-loop',
  name: 'LOOP',
  nameJa: '環',
  category: 'music',
  designer: 'Aphex Twin',
  description: '無限ループの環。繰り返しの中に生まれる変化。',
  accentColor: '#0088cc',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="music-loop-texture-f">
          <feTurbulence type="fractalNoise" baseFrequency="1.0" numOctaves="3" seed="80" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="soft-light" result="blended" />
        </filter>
        <filter id="music-loop-shadow-f">
          <feDropShadow dx="0" dy="0.2" stdDeviation="0.4" floodColor="#0088cc" floodOpacity="0.2" />
        </filter>
        <filter id="music-loop-glow-f">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <linearGradient id="music-loop-cyan-f" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#006699" />
          <stop offset="50%" stopColor="#0099dd" />
          <stop offset="100%" stopColor="#006699" />
        </linearGradient>
        <linearGradient id="music-loop-bg-f" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#080c18" />
          <stop offset="100%" stopColor="#0c1020" />
        </linearGradient>
        <radialGradient id="music-loop-center-f" cx="50%" cy="28%" r="40%">
          <stop offset="0%" stopColor="#0088cc" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#music-loop-bg-f)" />
      <rect width="91" height="55" fill="url(#music-loop-center-f)" />
      <rect width="91" height="55" filter="url(#music-loop-texture-f)" opacity="0.015" fill="#0088cc" />
      {/* Loop / infinity symbol - multiple layers */}
      <path
        d="M 45.5 10 C 55 10 62 5 70 5 C 78 5 84 10 84 15 C 84 20 78 25 70 25 C 62 25 55 20 45.5 20 C 36 20 29 25 21 25 C 13 25 7 20 7 15 C 7 10 13 5 21 5 C 29 5 36 10 45.5 10 Z"
        fill="none"
        stroke="url(#music-loop-cyan-f)"
        strokeWidth="0.2"
        opacity="0.5"
      />
      <path
        d="M 45.5 11.5 C 54 11.5 60 7.5 68 7.5 C 75 7.5 80 11.5 80 15 C 80 18.5 75 22.5 68 22.5 C 60 22.5 54 18.5 45.5 18.5 C 37 18.5 31 22.5 23 22.5 C 16 22.5 11 18.5 11 15 C 11 11.5 16 7.5 23 7.5 C 31 7.5 37 11.5 45.5 11.5 Z"
        fill="none"
        stroke="#0088cc"
        strokeWidth="0.1"
        opacity="0.3"
      />
      <path
        d="M 45.5 13 C 53 13 58 10 66 10 C 72 10 76 13 76 15 C 76 17 72 20 66 20 C 58 20 53 17 45.5 17 C 38 17 33 20 25 20 C 19 20 15 17 15 15 C 15 13 19 10 25 10 C 33 10 38 13 45.5 13 Z"
        fill="none"
        stroke="#00ccff"
        strokeWidth="0.06"
        opacity="0.2"
      />
      {/* Pulsing circles at loop center */}
      <circle cx="45.5" cy="15" r="2.5" fill="none" stroke="#0088cc" strokeWidth="0.06" opacity="0.3" />
      <circle cx="45.5" cy="15" r="1.5" fill="none" stroke="#00ccff" strokeWidth="0.04" opacity="0.4" />
      <circle cx="45.5" cy="15" r="0.8" fill="#0088cc" opacity="0.6" />
      {/* Signal dots at loop extremes */}
      <circle cx="7" cy="15" r="0.4" fill="#00ccff" opacity="0.4" />
      <circle cx="84" cy="15" r="0.4" fill="#00ccff" opacity="0.4" />
      {/* Name */}
      <text
        x="45.5"
        y="34"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="6"
        letterSpacing="0.8"
        fill="#ffffff"
        filter="url(#music-loop-shadow-f)"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="41"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.6"
        fill="#0088cc"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="45.5"
        y="48"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#4488aa"
      >
        {data.titleJa}
      </text>
      {data.logo && <image href={data.logo} x="75" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="music-loop-texture-b">
          <feTurbulence type="fractalNoise" baseFrequency="1.0" numOctaves="3" seed="81" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="soft-light" result="blended" />
        </filter>
        <filter id="music-loop-shadow-b">
          <feDropShadow dx="0" dy="0.15" stdDeviation="0.25" floodColor="#0088cc" floodOpacity="0.15" />
        </filter>
        <linearGradient id="music-loop-cyan-b" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#006699" />
          <stop offset="50%" stopColor="#0099dd" />
          <stop offset="100%" stopColor="#006699" />
        </linearGradient>
        <linearGradient id="music-loop-bg-b" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#080c18" />
          <stop offset="100%" stopColor="#0c1020" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#music-loop-bg-b)" />
      <rect width="91" height="55" filter="url(#music-loop-texture-b)" opacity="0.015" fill="#0088cc" />
      {/* Subtle loop at bottom */}
      <path
        d="M 45.5 47 C 52 47 57 44 63 44 C 69 44 73 47 73 49.5 C 73 52 69 55 63 55 C 57 55 52 52 45.5 52 C 39 52 34 55 28 55 C 22 55 18 52 18 49.5 C 18 47 22 44 28 44 C 34 44 39 47 45.5 47 Z"
        fill="none"
        stroke="url(#music-loop-cyan-b)"
        strokeWidth="0.1"
        opacity="0.2"
      />
      <path
        d="M 45.5 48.5 C 51 48.5 55 46 61 46 C 66 46 69 48.5 69 49.5 C 69 50.5 66 53 61 53 C 55 53 51 50.5 45.5 50.5 C 40 50.5 36 53 30 53 C 25 53 22 50.5 22 49.5 C 22 48.5 25 46 30 46 C 36 46 40 48.5 45.5 48.5 Z"
        fill="none"
        stroke="#0088cc"
        strokeWidth="0.06"
        opacity="0.12"
      />
      {/* Loop center dot */}
      <circle cx="45.5" cy="49.5" r="0.5" fill="#0088cc" opacity="0.25" />
      {/* Corner data markers */}
      <circle cx="5" cy="5" r="0.3" fill="#00ccff" opacity="0.3" />
      <circle cx="86" cy="5" r="0.3" fill="#00ccff" opacity="0.3" />
      {/* Company */}
      <text
        x="45.5"
        y="11"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#ffffff"
        filter="url(#music-loop-shadow-b)"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="15.5"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#0088cc"
      >
        {data.companyEn}
      </text>
      <text
        x="45.5"
        y="19.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#4488aa"
      >
        {data.titleJa}
      </text>
      <line x1="20" y1="22" x2="71" y2="22" stroke="#0088cc" strokeWidth="0.04" opacity="0.3" />
      {/* Contact */}
      <text x="45.5" y="26.5" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.5" fill="#cccccc">
        {data.tel}
      </text>
      <text x="45.5" y="30.5" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.5" fill="#cccccc">
        {data.email}
      </text>
      <text x="45.5" y="34.5" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.5" fill="#cccccc">
        {data.website}
      </text>
      <line x1="20" y1="37" x2="71" y2="37" stroke="#0088cc" strokeWidth="0.04" opacity="0.3" />
      <text
        x="45.5"
        y="41.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#4488aa"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
      {data.logo && <image href={data.logo} x="75" y="5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

export const musicTemplates: TemplateDefinition[] = [
  noteTemplate,
  vinylTemplate,
  frequencyTemplate,
  trebleTemplate,
  rhythmTemplate,
  bassTemplate,
  chordTemplate,
  tempoTemplate,
  acousticTemplate,
  loopTemplate,
];
