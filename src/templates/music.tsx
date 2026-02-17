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
      <rect width="91" height="55" fill="#faf8f5" />
      {/* Staff lines */}
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1="5" y1={12 + i * 2.5} x2="86" y2={12 + i * 2.5} stroke="#2E1A47" strokeWidth="0.06" />
      ))}
      {/* Treble clef suggestion - decorative curve */}
      <path
        d="M 8 14 C 8 10 12 10 12 14 C 12 18 8 22 10 24"
        fill="none"
        stroke="#2E1A47"
        strokeWidth="0.15"
      />
      {/* Note head decorative elements */}
      <ellipse cx="30" cy="17" rx="1.2" ry="0.9" fill="#2E1A47" transform="rotate(-15 30 17)" />
      <line x1="31.2" y1="17" x2="31.2" y2="10" stroke="#2E1A47" strokeWidth="0.1" />
      <ellipse cx="50" cy="19.5" rx="1.2" ry="0.9" fill="#2E1A47" transform="rotate(-15 50 19.5)" />
      <line x1="51.2" y1="19.5" x2="51.2" y2="12.5" stroke="#2E1A47" strokeWidth="0.1" />
      {/* Name */}
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#2E1A47"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="41.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.6"
        fill="#B8860B"
      >
        {data.nameEn}
      </text>
      <text
        x="45.5"
        y="48"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#888888"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#faf8f5" />
      {/* Staff lines at bottom */}
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1="5" y1={42 + i * 2.5} x2="86" y2={42 + i * 2.5} stroke="#2E1A47" strokeWidth="0.04" opacity="0.4" />
      ))}
      {/* Company */}
      <text
        x="10"
        y="13"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#2E1A47"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="17.5"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        letterSpacing="0.3"
        fill="#B8860B"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="20.5" x2="81" y2="20.5" stroke="#2E1A47" strokeWidth="0.06" />
      {/* Contact */}
      <text x="10" y="25.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#444444">
        {data.tel}
      </text>
      <text x="10" y="29.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#444444">
        {data.email}
      </text>
      <text x="10" y="33.5" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#444444">
        {data.website}
      </text>
      <line x1="10" y1="36.5" x2="81" y2="36.5" stroke="#2E1A47" strokeWidth="0.06" />
      <text
        x="10"
        y="40.5"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#888888"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
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
        <clipPath id="music-vinyl-clip">
          <rect width="91" height="55" />
        </clipPath>
      </defs>
      <rect width="91" height="55" fill="#1a1a1a" />
      {/* Vinyl grooves */}
      <g clipPath="url(#music-vinyl-clip)">
        {[...Array(20)].map((_, i) => (
          <circle
            key={i}
            cx="75"
            cy="27.5"
            r={5 + i * 2.5}
            fill="none"
            stroke="#333333"
            strokeWidth="0.08"
          />
        ))}
        {/* Highlight sheen */}
        <circle cx="75" cy="27.5" r="4" fill="#2a2a2a" />
        <circle cx="75" cy="27.5" r="1" fill="#B8860B" />
      </g>
      {/* Label area with text */}
      <text
        x="10"
        y="18"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="0.5"
        fill="#ffffff"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="25"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="2"
        letterSpacing="0.4"
        fill="#B8860B"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <line x1="10" y1="29" x2="45" y2="29" stroke="#555555" strokeWidth="0.06" />
      <text
        x="10"
        y="35"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#666666"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <clipPath id="music-vinyl-clip-b">
          <rect width="91" height="55" />
        </clipPath>
      </defs>
      <rect width="91" height="55" fill="#1a1a1a" />
      <g clipPath="url(#music-vinyl-clip-b)">
        {[...Array(12)].map((_, i) => (
          <circle key={i} cx="16" cy="27.5" r={5 + i * 2.5} fill="none" stroke="#333333" strokeWidth="0.06" />
        ))}
        <circle cx="16" cy="27.5" r="4" fill="#2a2a2a" />
        <circle cx="16" cy="27.5" r="1" fill="#B8860B" />
      </g>
      {/* Company */}
      <text
        x="81"
        y="14"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#ffffff"
      >
        {data.companyJa}
      </text>
      <text
        x="81"
        y="18.5"
        textAnchor="end"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#B8860B"
      >
        {data.companyEn}
      </text>
      <line x1="40" y1="21.5" x2="81" y2="21.5" stroke="#555555" strokeWidth="0.06" />
      {/* Contact */}
      <text x="81" y="26" textAnchor="end" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#cccccc">
        {data.tel}
      </text>
      <text x="81" y="30" textAnchor="end" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#cccccc">
        {data.email}
      </text>
      <text x="81" y="34" textAnchor="end" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#cccccc">
        {data.website}
      </text>
      <line x1="40" y1="37" x2="81" y2="37" stroke="#555555" strokeWidth="0.06" />
      <text
        x="81"
        y="42"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.1"
        fill="#666666"
      >
        〒{data.zipCode}
      </text>
      <text
        x="81"
        y="46"
        textAnchor="end"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.1"
        fill="#666666"
      >
        {data.addressJa}
      </text>
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
      <rect width="91" height="55" fill="#0a0a14" />
      {/* Frequency bars - waveform visualization */}
      {[...Array(45)].map((_, i) => {
        const h = Math.abs(Math.sin(i * 0.35) * 8 + Math.sin(i * 0.7) * 4);
        return (
          <rect
            key={i}
            x={i * 2 + 0.5}
            y={6 - h / 2}
            width="1"
            height={h}
            fill="#0088cc"
            opacity={0.3 + Math.sin(i * 0.35) * 0.3}
            rx="0.2"
          />
        );
      })}
      {/* Horizontal center line */}
      <line x1="0" y1="6" x2="91" y2="6" stroke="#0088cc" strokeWidth="0.04" opacity="0.3" />
      {/* Name */}
      <text
        x="10"
        y="26"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="6"
        letterSpacing="0.5"
        fill="#ffffff"
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
        fontSize="1.5"
        fill="#556688"
      >
        {data.titleJa}
      </text>
      {/* Frequency label */}
      <text
        x="81"
        y="49"
        textAnchor="end"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="0.9"
        fill="#0088cc"
        opacity="0.5"
      >
        440Hz
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0a0a14" />
      {/* Subtle frequency bars at bottom */}
      {[...Array(45)].map((_, i) => {
        const h = Math.abs(Math.sin(i * 0.4) * 5 + Math.sin(i * 0.8) * 2);
        return (
          <rect
            key={i}
            x={i * 2 + 0.5}
            y={50 - h}
            width="1"
            height={h}
            fill="#0088cc"
            opacity={0.15}
            rx="0.2"
          />
        );
      })}
      {/* Company */}
      <text
        x="10"
        y="13"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#ffffff"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="17.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#0088cc"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="20.5" x2="81" y2="20.5" stroke="#0088cc" strokeWidth="0.04" opacity="0.4" />
      {/* Contact */}
      <text x="10" y="25.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#cccccc">
        {data.tel}
      </text>
      <text x="10" y="29.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#cccccc">
        {data.email}
      </text>
      <text x="10" y="33.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#cccccc">
        {data.website}
      </text>
      <line x1="10" y1="36.5" x2="81" y2="36.5" stroke="#0088cc" strokeWidth="0.04" opacity="0.4" />
      <text
        x="10"
        y="41"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#556688"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
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
      <rect width="91" height="55" fill="#1a1520" />
      {/* Large decorative treble clef suggestion */}
      <path
        d="M 76 45 C 76 35 82 30 82 22 C 82 14 76 10 72 14 C 68 18 72 24 76 22 C 80 20 78 14 76 12 C 74 10 70 12 70 18 C 70 26 78 30 78 40"
        fill="none"
        stroke="#B8860B"
        strokeWidth="0.15"
        opacity="0.3"
      />
      {/* Staff lines suggestion - very subtle */}
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1="60" y1={18 + i * 3} x2="88" y2={18 + i * 3} stroke="#B8860B" strokeWidth="0.03" opacity="0.2" />
      ))}
      {/* Name */}
      <text
        x="10"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="6"
        letterSpacing="1"
        fill="#ffffff"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="28"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2.5"
        letterSpacing="0.8"
        fill="#B8860B"
      >
        {data.nameEn}
      </text>
      <line x1="10" y1="32.5" x2="55" y2="32.5" stroke="#B8860B" strokeWidth="0.06" opacity="0.5" />
      <text
        x="10"
        y="38"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="46"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#B8860B"
        opacity="0.7"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#1a1520" />
      {/* Subtle staff lines */}
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1="5" y1={44 + i * 2.2} x2="86" y2={44 + i * 2.2} stroke="#B8860B" strokeWidth="0.03" opacity="0.15" />
      ))}
      {/* Company */}
      <text
        x="10"
        y="13"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2.8"
        letterSpacing="0.5"
        fill="#ffffff"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="17.5"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.4"
        letterSpacing="0.4"
        fill="#B8860B"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="20.5" x2="81" y2="20.5" stroke="#B8860B" strokeWidth="0.04" opacity="0.3" />
      {/* Contact */}
      <text x="10" y="26" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#cccccc">
        {data.tel}
      </text>
      <text x="10" y="30" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#cccccc">
        {data.email}
      </text>
      <text x="10" y="34" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#cccccc">
        {data.website}
      </text>
      <line x1="10" y1="37" x2="81" y2="37" stroke="#B8860B" strokeWidth="0.04" opacity="0.3" />
      <text
        x="10"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#666666"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
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
      <rect width="91" height="55" fill="#ffffff" />
      {/* Rhythm grid - beat markers at top */}
      {[...Array(16)].map((_, i) => (
        <g key={i}>
          <rect
            x={5.5 + i * 5}
            y="5"
            width={i % 4 === 0 ? 2.5 : 1.5}
            height={i % 4 === 0 ? 6 : 4}
            fill="#2E1A47"
            opacity={i % 4 === 0 ? 1 : i % 2 === 0 ? 0.5 : 0.2}
            rx="0.3"
          />
        </g>
      ))}
      {/* Time signature */}
      <text x="3" y="8" fontFamily="'Space Grotesk', sans-serif" fontWeight="500" fontSize="2" fill="#2E1A47">4</text>
      <text x="3" y="11" fontFamily="'Space Grotesk', sans-serif" fontWeight="500" fontSize="2" fill="#2E1A47">4</text>
      {/* Name */}
      <text
        x="10"
        y="26"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="0.5"
        fill="#2E1A47"
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
        fill="#6644aa"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <text
        x="10"
        y="41"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#999999"
      >
        {data.titleJa}
      </text>
      {/* Bottom beat bar */}
      {[...Array(4)].map((_, i) => (
        <rect key={`b${i}`} x={10 + i * 20} y="48" width="8" height="2" fill="#2E1A47" opacity="0.15" rx="0.3" />
      ))}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Subtle rhythm markers */}
      {[...Array(16)].map((_, i) => (
        <rect
          key={i}
          x={5.5 + i * 5}
          y="48"
          width={i % 4 === 0 ? 2 : 1}
          height={i % 4 === 0 ? 4 : 2.5}
          fill="#2E1A47"
          opacity={i % 4 === 0 ? 0.3 : 0.1}
          rx="0.2"
        />
      ))}
      {/* Company */}
      <text
        x="10"
        y="13"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        fill="#2E1A47"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="17.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#6644aa"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="20.5" x2="81" y2="20.5" stroke="#2E1A47" strokeWidth="0.06" />
      {/* Contact */}
      <text x="10" y="26" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#444444">
        {data.tel}
      </text>
      <text x="10" y="30" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#444444">
        {data.email}
      </text>
      <text x="10" y="34" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#444444">
        {data.website}
      </text>
      <line x1="10" y1="37" x2="81" y2="37" stroke="#2E1A47" strokeWidth="0.06" />
      <text
        x="10"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#999999"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
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
        <linearGradient id="music-bass-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#f0ecf5" />
          <stop offset="100%" stopColor="#2E1A47" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#music-bass-grad)" />
      {/* Bass wave at bottom */}
      <path
        d="M 0 48 Q 11 42 23 48 Q 34 54 45.5 48 Q 57 42 68 48 Q 79 54 91 48"
        fill="none"
        stroke="#2E1A47"
        strokeWidth="0.2"
        opacity="0.4"
      />
      <path
        d="M 0 50 Q 11 44 23 50 Q 34 56 45.5 50 Q 57 44 68 50 Q 79 56 91 50"
        fill="none"
        stroke="#2E1A47"
        strokeWidth="0.12"
        opacity="0.2"
      />
      {/* Name */}
      <text
        x="10"
        y="18"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="600"
        fontSize="6.5"
        letterSpacing="0.5"
        fill="#2E1A47"
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
        fontSize="1.5"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      {/* Bass clef dots */}
      <circle cx="80" cy="18" r="0.6" fill="#2E1A47" />
      <circle cx="80" cy="22" r="0.6" fill="#2E1A47" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="music-bass-grad-b" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="80%" stopColor="#f0ecf5" />
          <stop offset="100%" stopColor="#2E1A47" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#music-bass-grad-b)" />
      {/* Company */}
      <text
        x="10"
        y="13"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        fill="#2E1A47"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="17.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#6644aa"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="20.5" x2="81" y2="20.5" stroke="#2E1A47" strokeWidth="0.06" />
      {/* Contact */}
      <text x="10" y="26" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#444444">
        {data.tel}
      </text>
      <text x="10" y="30" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#444444">
        {data.email}
      </text>
      <text x="10" y="34" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#444444">
        {data.website}
      </text>
      <line x1="10" y1="37" x2="81" y2="37" stroke="#2E1A47" strokeWidth="0.06" />
      <text
        x="10"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#888888"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
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
      <rect width="91" height="55" fill="#f5f0fa" />
      {/* Chord layers - overlapping transparent rectangles */}
      <rect x="5" y="5" width="40" height="45" fill="#2E1A47" opacity="0.04" rx="1" />
      <rect x="15" y="5" width="40" height="45" fill="#4422aa" opacity="0.04" rx="1" />
      <rect x="25" y="5" width="40" height="45" fill="#6644cc" opacity="0.04" rx="1" />
      <rect x="35" y="5" width="40" height="45" fill="#8866ee" opacity="0.04" rx="1" />
      <rect x="45" y="5" width="40" height="45" fill="#B8860B" opacity="0.03" rx="1" />
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
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="30"
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
        y="39"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#888888"
      >
        {data.titleJa}
      </text>
      {/* Chord notation */}
      <text
        x="80"
        y="48"
        textAnchor="end"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontSize="1.2"
        fill="#B8860B"
        opacity="0.4"
      >
        Cmaj7
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#f5f0fa" />
      {/* Subtle chord layers */}
      <rect x="10" y="5" width="30" height="45" fill="#2E1A47" opacity="0.03" rx="1" />
      <rect x="30" y="5" width="30" height="45" fill="#4422aa" opacity="0.03" rx="1" />
      <rect x="50" y="5" width="30" height="45" fill="#6644cc" opacity="0.03" rx="1" />
      {/* Company */}
      <text
        x="45.5"
        y="13"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#2E1A47"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="17.5"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#6644aa"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="20.5" x2="71" y2="20.5" stroke="#2E1A47" strokeWidth="0.06" />
      {/* Contact */}
      <text x="45.5" y="26" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#444444">
        {data.tel}
      </text>
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#444444">
        {data.email}
      </text>
      <text x="45.5" y="34" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#444444">
        {data.website}
      </text>
      <line x1="20" y1="37" x2="71" y2="37" stroke="#2E1A47" strokeWidth="0.06" />
      <text
        x="45.5"
        y="42"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#999999"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
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
      <rect width="91" height="55" fill="#ffffff" />
      {/* Metronome pendulum line */}
      <line x1="80" y1="55" x2="68" y2="5" stroke="#1a1a1a" strokeWidth="0.15" />
      {/* Pendulum weight */}
      <rect x="71" y="20" width="5" height="2.5" fill="#B8860B" rx="0.3" />
      {/* Tick marks */}
      <line x1="75" y1="5" x2="85" y2="5" stroke="#1a1a1a" strokeWidth="0.08" />
      <line x1="74" y1="10" x2="84" y2="10" stroke="#1a1a1a" strokeWidth="0.06" />
      <line x1="73" y1="15" x2="83" y2="15" stroke="#1a1a1a" strokeWidth="0.06" />
      <line x1="72" y1="25" x2="82" y2="25" stroke="#1a1a1a" strokeWidth="0.06" />
      <line x1="71" y1="30" x2="81" y2="30" stroke="#1a1a1a" strokeWidth="0.06" />
      {/* BPM text */}
      <text x="84" y="8" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1" fill="#B8860B">
        120
      </text>
      {/* Name */}
      <text
        x="8"
        y="20"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="5.5"
        letterSpacing="0.3"
        fill="#1a1a1a"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="27"
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
        y="36"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#999999"
      >
        {data.titleJa}
      </text>
      <text
        x="8"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.5"
        fill="#555555"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#ffffff" />
      {/* Subtle metronome pendulum */}
      <line x1="80" y1="55" x2="72" y2="10" stroke="#e0e0e0" strokeWidth="0.1" />
      <rect x="74" y="25" width="4" height="2" fill="#B8860B" opacity="0.3" rx="0.2" />
      {/* Company */}
      <text
        x="8"
        y="13"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="2.5"
        fill="#1a1a1a"
      >
        {data.companyJa}
      </text>
      <text
        x="8"
        y="17.5"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#666666"
      >
        {data.companyEn}
      </text>
      <line x1="8" y1="20.5" x2="65" y2="20.5" stroke="#1a1a1a" strokeWidth="0.06" />
      {/* Contact */}
      <text x="8" y="26" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#444444">
        {data.tel}
      </text>
      <text x="8" y="30" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#444444">
        {data.email}
      </text>
      <text x="8" y="34" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#444444">
        {data.website}
      </text>
      <line x1="8" y1="37" x2="65" y2="37" stroke="#1a1a1a" strokeWidth="0.06" />
      <text
        x="8"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#999999"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
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
        <linearGradient id="music-acoustic-wood" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f5e6c8" />
          <stop offset="50%" stopColor="#faf0dc" />
          <stop offset="100%" stopColor="#f5e6c8" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#music-acoustic-wood)" />
      {/* Sound hole - circular motif */}
      <circle cx="72" cy="32" r="10" fill="none" stroke="#8B6914" strokeWidth="0.15" />
      <circle cx="72" cy="32" r="9" fill="none" stroke="#8B6914" strokeWidth="0.08" />
      <circle cx="72" cy="32" r="8" fill="none" stroke="#8B6914" strokeWidth="0.04" />
      {/* Rosette pattern */}
      {[...Array(24)].map((_, i) => (
        <line
          key={i}
          x1={72 + Math.cos((i * 15 * Math.PI) / 180) * 8.5}
          y1={32 + Math.sin((i * 15 * Math.PI) / 180) * 8.5}
          x2={72 + Math.cos((i * 15 * Math.PI) / 180) * 9.5}
          y2={32 + Math.sin((i * 15 * Math.PI) / 180) * 9.5}
          stroke="#8B6914"
          strokeWidth="0.06"
        />
      ))}
      {/* String lines */}
      <line x1="69" y1="5" x2="69" y2="55" stroke="#8B6914" strokeWidth="0.04" opacity="0.3" />
      <line x1="71" y1="5" x2="71" y2="55" stroke="#8B6914" strokeWidth="0.04" opacity="0.3" />
      <line x1="73" y1="5" x2="73" y2="55" stroke="#8B6914" strokeWidth="0.04" opacity="0.3" />
      <line x1="75" y1="5" x2="75" y2="55" stroke="#8B6914" strokeWidth="0.04" opacity="0.3" />
      {/* Name */}
      <text
        x="8"
        y="18"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.3"
        fill="#3d2810"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="25"
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
        y="34"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
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
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="music-acoustic-wood-b" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f5e6c8" />
          <stop offset="50%" stopColor="#faf0dc" />
          <stop offset="100%" stopColor="#f5e6c8" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#music-acoustic-wood-b)" />
      {/* Subtle sound hole */}
      <circle cx="78" cy="42" r="6" fill="none" stroke="#8B6914" strokeWidth="0.08" opacity="0.3" />
      {/* Company */}
      <text
        x="10"
        y="13"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#3d2810"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="17.5"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        letterSpacing="0.3"
        fill="#8B6914"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="20.5" x2="70" y2="20.5" stroke="#8B6914" strokeWidth="0.06" />
      {/* Contact */}
      <text x="10" y="26" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5c4a28">
        {data.tel}
      </text>
      <text x="10" y="30" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5c4a28">
        {data.email}
      </text>
      <text x="10" y="34" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#5c4a28">
        {data.website}
      </text>
      <line x1="10" y1="37" x2="70" y2="37" stroke="#8B6914" strokeWidth="0.06" />
      <text
        x="10"
        y="42"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#8B7355"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
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
      <rect width="91" height="55" fill="#0a0a14" />
      {/* Loop / infinity symbol */}
      <path
        d="M 45.5 10 C 55 10 62 5 70 5 C 78 5 84 10 84 15 C 84 20 78 25 70 25 C 62 25 55 20 45.5 20 C 36 20 29 25 21 25 C 13 25 7 20 7 15 C 7 10 13 5 21 5 C 29 5 36 10 45.5 10 Z"
        fill="none"
        stroke="#0088cc"
        strokeWidth="0.15"
        opacity="0.5"
      />
      <path
        d="M 45.5 12 C 54 12 60 8 68 8 C 75 8 80 12 80 15 C 80 18 75 22 68 22 C 60 22 54 18 45.5 18 C 37 18 31 22 23 22 C 16 22 11 18 11 15 C 11 12 16 8 23 8 C 31 8 37 12 45.5 12 Z"
        fill="none"
        stroke="#0088cc"
        strokeWidth="0.08"
        opacity="0.3"
      />
      {/* Pulsing circles at loop center */}
      <circle cx="45.5" cy="15" r="2" fill="none" stroke="#0088cc" strokeWidth="0.08" opacity="0.5" />
      <circle cx="45.5" cy="15" r="1" fill="#0088cc" opacity="0.6" />
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
        fontSize="1.4"
        fill="#556688"
      >
        {data.titleJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#0a0a14" />
      {/* Subtle loop at bottom */}
      <path
        d="M 45.5 48 C 52 48 57 45 63 45 C 69 45 73 48 73 50 C 73 52 69 55 63 55 C 57 55 52 52 45.5 52 C 39 52 34 55 28 55 C 22 55 18 52 18 50 C 18 48 22 45 28 45 C 34 45 39 48 45.5 48 Z"
        fill="none"
        stroke="#0088cc"
        strokeWidth="0.08"
        opacity="0.2"
      />
      {/* Company */}
      <text
        x="45.5"
        y="12"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.5"
        fill="#ffffff"
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
        fill="#0088cc"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="19.5" x2="71" y2="19.5" stroke="#0088cc" strokeWidth="0.04" opacity="0.4" />
      {/* Contact */}
      <text x="45.5" y="25" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#cccccc">
        {data.tel}
      </text>
      <text x="45.5" y="29" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#cccccc">
        {data.email}
      </text>
      <text x="45.5" y="33" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="1.4" fill="#cccccc">
        {data.website}
      </text>
      <line x1="20" y1="36" x2="71" y2="36" stroke="#0088cc" strokeWidth="0.04" opacity="0.4" />
      <text
        x="45.5"
        y="41"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#556688"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
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
