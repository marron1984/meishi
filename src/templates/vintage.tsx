import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. GAZETTE (報) — Old newspaper masthead style
// Column rules, serif headers, newsprint aesthetic with aged paper texture
// ============================================================
const gazetteTemplate: TemplateDefinition = {
  id: 'vintage-gazette',
  name: 'GAZETTE',
  nameJa: '報',
  category: 'vintage',
  designer: 'Vintage Press',
  description: '古新聞のマストヘッド。活版印刷の温もりと権威。',
  accentColor: '#704214',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="vintage-gazette-paper" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" seed="2" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" />
        </filter>
        <filter id="vintage-gazette-shadow" x="-10%" y="-10%" width="130%" height="130%">
          <feGaussianBlur stdDeviation="0.3" result="blur" />
          <feOffset dx="0.15" dy="0.15" result="offset" />
          <feMerge>
            <feMergeNode in="offset" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="vintage-gazette-ink" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5A3510" />
          <stop offset="50%" stopColor="#704214" />
          <stop offset="100%" stopColor="#8B5E2B" />
        </linearGradient>
        <radialGradient id="vintage-gazette-age" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor="#F5F0E1" />
          <stop offset="70%" stopColor="#EDE5D0" />
          <stop offset="100%" stopColor="#D8CCAE" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#vintage-gazette-age)" />
      <rect width="91" height="55" fill="url(#vintage-gazette-age)" filter="url(#vintage-gazette-paper)" opacity="0.6" />
      {/* Ornate double rule top */}
      <line x1="5" y1="5.5" x2="86" y2="5.5" stroke="#704214" strokeWidth="0.5" />
      <line x1="5" y1="6.5" x2="86" y2="6.5" stroke="#704214" strokeWidth="0.12" />
      <line x1="5" y1="7" x2="86" y2="7" stroke="#704214" strokeWidth="0.12" />
      {/* Corner fleurons */}
      <text x="5" y="5" fontFamily="serif" fontSize="2.5" fill="#704214" fillOpacity="0.5">&#x2766;</text>
      <text x="83.5" y="5" fontFamily="serif" fontSize="2.5" fill="#704214" fillOpacity="0.5">&#x2766;</text>
      {/* Masthead name */}
      <text
        x="45.5"
        y="16"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="700"
        fontSize="7"
        letterSpacing="1.2"
        fill="url(#vintage-gazette-ink)"
        filter="url(#vintage-gazette-shadow)"
      >
        {data.nameJa}
      </text>
      {/* Ornamental rule with diamond */}
      <line x1="15" y1="19" x2="40" y2="19" stroke="#704214" strokeWidth="0.1" />
      <path d="M 44,19 L 45.5,17.5 L 47,19 L 45.5,20.5 Z" fill="#704214" fillOpacity="0.5" />
      <line x1="51" y1="19" x2="76" y2="19" stroke="#704214" strokeWidth="0.1" />
      {/* Subtitle English */}
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2.2"
        letterSpacing="0.8"
        fill="#8B6934"
        fontStyle="italic"
      >
        {data.nameEn}
      </text>
      {/* Column rule */}
      <line x1="45.5" y1="27" x2="45.5" y2="47" stroke="#704214" strokeWidth="0.1" />
      {/* Left column */}
      <text x="25" y="32" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#704214">{data.titleJa}</text>
      <text x="25" y="37" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.5" fill="#5A3510">{data.companyJa}</text>
      <text x="25" y="42" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.3" fill="#8B6934" fontStyle="italic">{data.companyEn}</text>
      {/* Right column */}
      <text x="68" y="32" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.4" fill="#704214">{data.tel}</text>
      <text x="68" y="37" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.4" fill="#704214">{data.email}</text>
      <text x="68" y="42" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.4" fill="#8B6934">{data.website}</text>
      {/* Bottom decorative ornament */}
      <line x1="5" y1="48" x2="86" y2="48" stroke="#704214" strokeWidth="0.12" />
      <line x1="5" y1="48.5" x2="86" y2="48.5" stroke="#704214" strokeWidth="0.12" />
      <line x1="5" y1="49.5" x2="86" y2="49.5" stroke="#704214" strokeWidth="0.5" />
      {/* Bottom corner fleurons */}
      <text x="5" y="52" fontFamily="serif" fontSize="2.5" fill="#704214" fillOpacity="0.5">&#x2766;</text>
      <text x="83.5" y="52" fontFamily="serif" fontSize="2.5" fill="#704214" fillOpacity="0.5">&#x2766;</text>
      {data.logo && <image href={data.logo} x="38" y="44" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="vintage-gazette-bpaper" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" seed="3" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" />
        </filter>
        <filter id="vintage-gazette-bshadow" x="-10%" y="-10%" width="130%" height="130%">
          <feGaussianBlur stdDeviation="0.2" result="blur" />
          <feOffset dx="0.1" dy="0.1" result="offset" />
          <feMerge>
            <feMergeNode in="offset" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="vintage-gazette-bage" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor="#F5F0E1" />
          <stop offset="100%" stopColor="#D8CCAE" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#vintage-gazette-bage)" />
      <rect width="91" height="55" fill="url(#vintage-gazette-bage)" filter="url(#vintage-gazette-bpaper)" opacity="0.6" />
      {/* Decorative rules */}
      <line x1="5" y1="5.5" x2="86" y2="5.5" stroke="#704214" strokeWidth="0.5" />
      <line x1="5" y1="6.5" x2="86" y2="6.5" stroke="#704214" strokeWidth="0.12" />
      <line x1="5" y1="7" x2="86" y2="7" stroke="#704214" strokeWidth="0.12" />
      {/* Fleuron decorations */}
      <text x="43" y="11.5" fontFamily="serif" fontSize="3" fill="#704214" fillOpacity="0.4">&#x2767;</text>
      <text
        x="45.5"
        y="17"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="600"
        fontSize="2.8"
        letterSpacing="0.6"
        fill="#704214"
        filter="url(#vintage-gazette-bshadow)"
      >
        {data.companyJa}
      </text>
      <text x="45.5" y="21" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.6" letterSpacing="0.4" fill="#8B6934" fontStyle="italic">{data.companyEn}</text>
      <text x="45.5" y="25" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#704214">{data.titleJa}</text>
      <line x1="18" y1="27.5" x2="73" y2="27.5" stroke="#704214" strokeWidth="0.1" />
      <path d="M 44,27.5 L 45.5,26 L 47,27.5 L 45.5,29 Z" fill="#704214" fillOpacity="0.4" />
      <text x="45.5" y="33" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#704214">{data.tel}</text>
      <text x="45.5" y="37" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#704214">{data.email}</text>
      <text x="45.5" y="41" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#8B6934">{data.website}</text>
      <line x1="25" y1="43.5" x2="66" y2="43.5" stroke="#704214" strokeWidth="0.08" />
      <text x="45.5" y="47.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#A08050">〒{data.zipCode} {data.addressJa}</text>
      <line x1="5" y1="48" x2="86" y2="48" stroke="#704214" strokeWidth="0.12" />
      <line x1="5" y1="48.5" x2="86" y2="48.5" stroke="#704214" strokeWidth="0.12" />
      <line x1="5" y1="49.5" x2="86" y2="49.5" stroke="#704214" strokeWidth="0.5" />
      {data.logo && <image href={data.logo} x="75" y="5.5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 2. TELEGRAM (電報) — Vintage telegram form
// Dotted borders, typewriter font feel, urgent style with aged texture
// ============================================================
const telegramTemplate: TemplateDefinition = {
  id: 'vintage-telegram',
  name: 'TELEGRAM',
  nameJa: '電報',
  category: 'vintage',
  designer: 'Vintage Press',
  description: '電報の緊迫感。ドットで囲まれた重要なメッセージ。',
  accentColor: '#2D4A3E',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="vintage-telegram-paper" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" seed="5" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" />
        </filter>
        <filter id="vintage-telegram-stamp" x="-20%" y="-20%" width="150%" height="150%">
          <feGaussianBlur stdDeviation="0.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="vintage-telegram-tint" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F0EBD8" />
          <stop offset="50%" stopColor="#F5F0E1" />
          <stop offset="100%" stopColor="#E8E0C8" />
        </linearGradient>
        <linearGradient id="vintage-telegram-ink" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1E3A2E" />
          <stop offset="100%" stopColor="#3D6050" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#vintage-telegram-tint)" />
      <rect width="91" height="55" fill="url(#vintage-telegram-tint)" filter="url(#vintage-telegram-paper)" opacity="0.5" />
      {/* Telegram border - dashed */}
      <rect x="4.5" y="3.5" width="82" height="48" fill="none" stroke="#2D4A3E" strokeWidth="0.3" strokeDasharray="1.5 0.8" />
      <rect x="6" y="5" width="79" height="45" fill="none" stroke="#2D4A3E" strokeWidth="0.1" strokeDasharray="0.8 0.5" />
      {/* TELEGRAM header banner */}
      <rect x="25" y="6" width="41" height="4" fill="#2D4A3E" fillOpacity="0.08" />
      <text
        x="45.5"
        y="9.5"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="700"
        fontSize="2.2"
        letterSpacing="2"
        fill="url(#vintage-telegram-ink)"
        filter="url(#vintage-telegram-stamp)"
      >
        TELEGRAM
      </text>
      <line x1="8" y1="11.5" x2="83" y2="11.5" stroke="#2D4A3E" strokeWidth="0.15" />
      {/* Date line style with labels */}
      <text x="10" y="16" fontFamily="'Space Grotesk', sans-serif" fontWeight="600" fontSize="1.1" letterSpacing="0.5" fill="#8B7D6B">TO:</text>
      <text x="18" y="16" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.3" fill="#2D4A3E">{data.companyJa}</text>
      <line x1="8" y1="18" x2="83" y2="18" stroke="#2D4A3E" strokeWidth="0.08" />
      {/* FROM label */}
      <text x="10" y="21.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="600" fontSize="1.1" letterSpacing="0.5" fill="#8B7D6B">FROM:</text>
      <text x="22" y="21.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.2" fill="#4A7060">{data.titleJa}</text>
      <line x1="8" y1="23" x2="83" y2="23" stroke="#2D4A3E" strokeWidth="0.08" />
      {/* Main message - name */}
      <text
        x="45.5"
        y="33"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="1"
        fill="#2D4A3E"
        filter="url(#vintage-telegram-stamp)"
      >
        {data.nameJa}
      </text>
      <text x="45.5" y="39" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="500" fontSize="2" letterSpacing="0.6" fill="#4A7060">{data.nameEn.toUpperCase()}</text>
      <line x1="8" y1="42" x2="83" y2="42" stroke="#2D4A3E" strokeWidth="0.08" />
      {/* STOP markers */}
      <text x="10" y="46" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="1" letterSpacing="0.5" fill="#2D4A3E" fillOpacity="0.35">URGENT</text>
      <text x="74" y="46" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="1.2" fill="#2D4A3E" fillOpacity="0.4">STOP</text>
      {/* Circular date stamp decoration */}
      <circle cx="80" cy="15" r="4" fill="none" stroke="#2D4A3E" strokeWidth="0.15" strokeOpacity="0.25" strokeDasharray="0.5 0.3" />
      <circle cx="80" cy="15" r="3" fill="none" stroke="#2D4A3E" strokeWidth="0.1" strokeOpacity="0.2" />
      {data.logo && <image href={data.logo} x="76" y="39" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="vintage-telegram-bpaper" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" seed="6" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" />
        </filter>
        <filter id="vintage-telegram-bstamp" x="-10%" y="-10%" width="130%" height="130%">
          <feGaussianBlur stdDeviation="0.15" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#F5F0E1" />
      <rect width="91" height="55" fill="#F5F0E1" filter="url(#vintage-telegram-bpaper)" opacity="0.5" />
      <rect x="4.5" y="3.5" width="82" height="48" fill="none" stroke="#2D4A3E" strokeWidth="0.3" strokeDasharray="1.5 0.8" />
      <rect x="6" y="5" width="79" height="45" fill="none" stroke="#2D4A3E" strokeWidth="0.1" strokeDasharray="0.8 0.5" />
      {/* REPLY header */}
      <rect x="30" y="6" width="31" height="3.5" fill="#2D4A3E" fillOpacity="0.08" />
      <text x="45.5" y="9" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="1.8" letterSpacing="1.2" fill="#2D4A3E" filter="url(#vintage-telegram-bstamp)">REPLY</text>
      <line x1="8" y1="11" x2="83" y2="11" stroke="#2D4A3E" strokeWidth="0.15" />
      {/* Company info */}
      <text x="10" y="16" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" fill="#2D4A3E" filter="url(#vintage-telegram-bstamp)">{data.companyJa}</text>
      <text x="10" y="20.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#4A7060">{data.companyEn}</text>
      <text x="10" y="24.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#6B8A7A">{data.titleJa}</text>
      <line x1="8" y1="27" x2="83" y2="27" stroke="#2D4A3E" strokeWidth="0.08" />
      {/* Contact info in telegram style */}
      <text x="10" y="31.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="600" fontSize="1" fill="#8B7D6B" letterSpacing="0.5">TEL:</text>
      <text x="20" y="31.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#2D4A3E">{data.tel}</text>
      <text x="10" y="35.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="600" fontSize="1" fill="#8B7D6B" letterSpacing="0.5">MAIL:</text>
      <text x="22" y="35.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#2D4A3E">{data.email}</text>
      <text x="10" y="39.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="600" fontSize="1" fill="#8B7D6B" letterSpacing="0.5">WEB:</text>
      <text x="20" y="39.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1.5" fill="#2D4A3E">{data.website}</text>
      <line x1="8" y1="42" x2="83" y2="42" stroke="#2D4A3E" strokeWidth="0.08" />
      <text x="10" y="46.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#6B8A7A">〒{data.zipCode} {data.addressJa}</text>
      {/* Circular postmark decoration */}
      <circle cx="78" cy="14" r="4.5" fill="none" stroke="#2D4A3E" strokeWidth="0.15" strokeOpacity="0.2" strokeDasharray="0.5 0.3" />
      <circle cx="78" cy="14" r="3.2" fill="none" stroke="#2D4A3E" strokeWidth="0.1" strokeOpacity="0.15" />
      <text x="10" y="49.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="0.9" fill="#2D4A3E" fillOpacity="0.3" letterSpacing="0.5">END OF MESSAGE STOP</text>
      {data.logo && <image href={data.logo} x="74" y="38" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 3. LEDGER (簿) — Accounting ledger book
// Ruled lines, precise columns, bookkeeping aesthetic with paper texture
// ============================================================
const ledgerTemplate: TemplateDefinition = {
  id: 'vintage-ledger',
  name: 'LEDGER',
  nameJa: '簿',
  category: 'vintage',
  designer: 'Vintage Press',
  description: '帳簿の正確さ。罫線が整える古典的な秩序美。',
  accentColor: '#722F37',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="vintage-ledger-paper" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" seed="10" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" />
        </filter>
        <filter id="vintage-ledger-shadow" x="-10%" y="-10%" width="130%" height="130%">
          <feGaussianBlur stdDeviation="0.25" result="blur" />
          <feOffset dx="0.1" dy="0.1" result="offset" />
          <feMerge>
            <feMergeNode in="offset" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="vintage-ledger-binding" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#5A1A22" />
          <stop offset="40%" stopColor="#722F37" />
          <stop offset="100%" stopColor="#8A3A44" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="vintage-ledger-edge" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#E8DDD0" />
          <stop offset="100%" stopColor="#F5F0E1" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#F5F0E1" />
      <rect width="91" height="55" fill="#F5F0E1" filter="url(#vintage-ledger-paper)" opacity="0.5" />
      {/* Ledger binding edge with gradient */}
      <rect x="0" y="0" width="5" height="55" fill="url(#vintage-ledger-binding)" fillOpacity="0.2" />
      <line x1="5" y1="0" x2="5" y2="55" stroke="#722F37" strokeWidth="0.4" />
      <line x1="5.6" y1="0" x2="5.6" y2="55" stroke="#722F37" strokeWidth="0.1" strokeOpacity="0.5" />
      {/* Horizontal ruled lines (pale blue like real ledger) */}
      {[10, 15, 20, 25, 30, 35, 40, 45, 50].map((y, i) => (
        <line key={`vintage-ledger-rule-${i}`} x1="7" y1={y} x2="89" y2={y} stroke="#B8CAD8" strokeWidth="0.08" />
      ))}
      {/* Vertical column dividers (red, like real ledger) */}
      <line x1="55" y1="4" x2="55" y2="51" stroke="#722F37" strokeWidth="0.1" strokeOpacity="0.35" />
      <line x1="55.5" y1="4" x2="55.5" y2="51" stroke="#722F37" strokeWidth="0.05" strokeOpacity="0.2" />
      {/* Header area */}
      <line x1="7" y1="7" x2="89" y2="7" stroke="#722F37" strokeWidth="0.2" />
      <text x="30" y="6" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="600" fontSize="1.8" letterSpacing="0.5" fill="#722F37">NAME</text>
      <text x="72" y="6" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="600" fontSize="1.8" letterSpacing="0.5" fill="#722F37">DETAILS</text>
      {/* Name in main column */}
      <text
        x="30"
        y="18"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        fill="#3D1A20"
        filter="url(#vintage-ledger-shadow)"
      >
        {data.nameJa}
      </text>
      <text x="30" y="24" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="2" fill="#722F37" fontStyle="italic">{data.nameEn}</text>
      {/* Small page number decoration */}
      <text x="30" y="48" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1" fill="#C4A882" fontStyle="italic">page one</text>
      {/* Details in right column */}
      <text x="72" y="14" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#704214">{data.titleJa}</text>
      <text x="72" y="19" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="1.5" fill="#5A1A22">{data.companyJa}</text>
      <line x1="58" y1="22" x2="86" y2="22" stroke="#722F37" strokeWidth="0.06" strokeOpacity="0.3" />
      <text x="72" y="28" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.4" fill="#704214">{data.tel}</text>
      <text x="72" y="33" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.4" fill="#704214">{data.email}</text>
      <text x="72" y="38" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.4" fill="#8B6934">{data.website}</text>
      {data.logo && <image href={data.logo} x="26" y="28" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="vintage-ledger-bpaper" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" seed="11" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" />
        </filter>
        <filter id="vintage-ledger-bshadow" x="-10%" y="-10%" width="130%" height="130%">
          <feGaussianBlur stdDeviation="0.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#F5F0E1" />
      <rect width="91" height="55" fill="#F5F0E1" filter="url(#vintage-ledger-bpaper)" opacity="0.5" />
      {/* Ledger binding */}
      <rect x="86" y="0" width="5" height="55" fill="#722F37" fillOpacity="0.15" />
      <line x1="86" y1="0" x2="86" y2="55" stroke="#722F37" strokeWidth="0.4" />
      <line x1="85.4" y1="0" x2="85.4" y2="55" stroke="#722F37" strokeWidth="0.1" strokeOpacity="0.5" />
      {/* Ruled lines */}
      {[10, 15, 20, 25, 30, 35, 40, 45, 50].map((y, i) => (
        <line key={`vintage-ledger-brule-${i}`} x1="3" y1={y} x2="84" y2={y} stroke="#B8CAD8" strokeWidth="0.08" />
      ))}
      <line x1="3" y1="7" x2="84" y2="7" stroke="#722F37" strokeWidth="0.2" />
      {/* Header */}
      <text x="7" y="6" fontFamily="'Cormorant Garamond', serif" fontWeight="600" fontSize="1.5" letterSpacing="0.5" fill="#722F37">RECORD</text>
      {/* Company info */}
      <text x="8" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" fill="#3D1A20" filter="url(#vintage-ledger-bshadow)">{data.companyJa}</text>
      <text x="8" y="19" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#722F37" fontStyle="italic">{data.companyEn}</text>
      <text x="8" y="24" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#704214">{data.titleJa}</text>
      <line x1="8" y1="26.5" x2="60" y2="26.5" stroke="#722F37" strokeWidth="0.08" strokeOpacity="0.3" />
      <text x="8" y="31" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#704214">{data.tel}</text>
      <text x="8" y="35.5" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#704214">{data.email}</text>
      <text x="8" y="40" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#8B6934">{data.website}</text>
      <line x1="8" y1="42.5" x2="60" y2="42.5" stroke="#722F37" strokeWidth="0.08" strokeOpacity="0.3" />
      <text x="8" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#A08050">〒{data.zipCode} {data.addressJa}</text>
      {/* Page number decoration */}
      <text x="42" y="52" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1" fill="#C4A882" fontStyle="italic">- continued -</text>
      {data.logo && <image href={data.logo} x="68" y="12" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 4. SEAL (封) — Wax seal / official stamp
// Circular seal element, formal and authoritative with embossed texture
// ============================================================
const sealTemplate: TemplateDefinition = {
  id: 'vintage-seal',
  name: 'SEAL',
  nameJa: '封',
  category: 'vintage',
  designer: 'Vintage Press',
  description: '封蝋の重厚さ。公式の証としての丸い紋章。',
  accentColor: '#722F37',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="vintage-seal-paper" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" seed="14" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" />
        </filter>
        <filter id="vintage-seal-emboss" x="-20%" y="-20%" width="150%" height="150%">
          <feGaussianBlur stdDeviation="0.5" result="blur" />
          <feOffset dx="0.2" dy="0.3" in="blur" result="offset" />
          <feMerge>
            <feMergeNode in="offset" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="vintage-seal-wax" cx="0.45" cy="0.42" r="0.58">
          <stop offset="0%" stopColor="#C0505A" />
          <stop offset="30%" stopColor="#A0404A" />
          <stop offset="60%" stopColor="#722F37" />
          <stop offset="100%" stopColor="#4A1820" />
        </radialGradient>
        <radialGradient id="vintage-seal-age" cx="0.3" cy="0.3" r="0.8">
          <stop offset="0%" stopColor="#F8F3E6" />
          <stop offset="50%" stopColor="#F5F0E1" />
          <stop offset="100%" stopColor="#D8CCAE" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#vintage-seal-age)" />
      <rect width="91" height="55" fill="url(#vintage-seal-age)" filter="url(#vintage-seal-paper)" opacity="0.5" />
      {/* Wax seal with full detail */}
      <circle cx="73" cy="27" r="14" fill="url(#vintage-seal-wax)" fillOpacity="0.18" />
      <circle cx="73" cy="27" r="11.5" fill="none" stroke="#722F37" strokeWidth="0.35" strokeOpacity="0.35" />
      <circle cx="73" cy="27" r="9.5" fill="none" stroke="#722F37" strokeWidth="0.18" strokeOpacity="0.25" />
      <circle cx="73" cy="27" r="8" fill="none" stroke="#722F37" strokeWidth="0.1" strokeOpacity="0.2" />
      {/* Seal wavy edge */}
      <path d="M 73,13 Q 77,14 79,13 Q 81,12 83.5,14.5 Q 86,17 87,19 Q 87.5,21 87,23 Q 88,25 87,27 Q 88,29 87,31 Q 87.5,33 87,35 Q 86,37 83.5,39.5 Q 81,42 79,41 Q 77,42 73,41 Q 69,42 67,41 Q 65,42 62.5,39.5 Q 60,37 59,35 Q 58.5,33 59,31 Q 58,29 59,27 Q 58,25 59,23 Q 58.5,21 59,19 Q 60,17 62.5,14.5 Q 65,12 67,13 Q 69,12 73,13" fill="none" stroke="#722F37" strokeWidth="0.2" strokeOpacity="0.2" />
      {/* Initial in seal center */}
      <text
        x="73"
        y="30"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="700"
        fontSize="6.5"
        fill="#722F37"
        fillOpacity="0.25"
        filter="url(#vintage-seal-emboss)"
      >
        {data.nameJa.charAt(0)}
      </text>
      {/* Name and details - left side */}
      <text
        x="8"
        y="17"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#3D1A20"
        filter="url(#vintage-seal-emboss)"
      >
        {data.nameJa}
      </text>
      <text x="8" y="24" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="2.2" letterSpacing="0.4" fill="#722F37" fontStyle="italic">{data.nameEn}</text>
      {/* Decorative line */}
      <line x1="8" y1="27" x2="52" y2="27" stroke="#722F37" strokeWidth="0.1" strokeOpacity="0.3" />
      <text x="8" y="33" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#8B6060">{data.titleJa}</text>
      <text x="8" y="39" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#A08070">{data.companyJa}</text>
      <text x="8" y="44" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.3" fill="#B0907A" fontStyle="italic">{data.companyEn}</text>
      {data.logo && <image href={data.logo} x="8" y="46" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="vintage-seal-bpaper" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" seed="15" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" />
        </filter>
        <filter id="vintage-seal-bemboss" x="-10%" y="-10%" width="130%" height="130%">
          <feGaussianBlur stdDeviation="0.3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#F5F0E1" />
      <rect width="91" height="55" fill="#F5F0E1" filter="url(#vintage-seal-bpaper)" opacity="0.5" />
      {/* Small seal in top-right */}
      <circle cx="79" cy="11" r="6" fill="#722F37" fillOpacity="0.08" />
      <circle cx="79" cy="11" r="4.5" fill="none" stroke="#722F37" strokeWidth="0.2" strokeOpacity="0.2" />
      <circle cx="79" cy="11" r="3.2" fill="none" stroke="#722F37" strokeWidth="0.12" strokeOpacity="0.15" />
      {/* Company info */}
      <text x="8" y="14" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#3D1A20" filter="url(#vintage-seal-bemboss)">{data.companyJa}</text>
      <text x="8" y="19.5" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.6" fill="#722F37" fontStyle="italic">{data.companyEn}</text>
      <text x="8" y="24" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#8B6060">{data.titleJa}</text>
      <line x1="8" y1="26.5" x2="55" y2="26.5" stroke="#722F37" strokeWidth="0.1" strokeOpacity="0.25" />
      {/* Decorative diamond */}
      <path d="M 30,26.5 L 31.5,25 L 33,26.5 L 31.5,28 Z" fill="#722F37" fillOpacity="0.2" />
      <text x="8" y="31.5" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#704214">{data.tel}</text>
      <text x="8" y="36" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#704214">{data.email}</text>
      <text x="8" y="40.5" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#8B6934">{data.website}</text>
      <line x1="8" y1="43" x2="55" y2="43" stroke="#722F37" strokeWidth="0.08" strokeOpacity="0.2" />
      <text x="8" y="47.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#A08050">〒{data.zipCode} {data.addressJa}</text>
      {data.logo && <image href={data.logo} x="70" y="40" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 5. TICKET (券) — Vintage admission ticket
// Perforated edge, ticket number style, admission aesthetic
// ============================================================
const ticketTemplate: TemplateDefinition = {
  id: 'vintage-ticket',
  name: 'TICKET',
  nameJa: '券',
  category: 'vintage',
  designer: 'Vintage Press',
  description: '入場券の高揚感。切り取り線が特別な体験を約束する。',
  accentColor: '#704214',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="vintage-ticket-paper" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" seed="20" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" />
        </filter>
        <filter id="vintage-ticket-stamp" x="-15%" y="-15%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.3" result="blur" />
          <feOffset dx="0.15" dy="0.15" result="offset" />
          <feMerge>
            <feMergeNode in="offset" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="vintage-ticket-stub" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#E8DDD0" />
          <stop offset="100%" stopColor="#F5F0E1" />
        </linearGradient>
        <linearGradient id="vintage-ticket-ink" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3D2008" />
          <stop offset="100%" stopColor="#704214" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#F5F0E1" />
      <rect width="91" height="55" fill="#F5F0E1" filter="url(#vintage-ticket-paper)" opacity="0.5" />
      {/* Ticket border with rounded corners */}
      <rect x="3.5" y="3.5" width="84" height="48" rx="2" fill="none" stroke="#704214" strokeWidth="0.35" />
      <rect x="5" y="5" width="81" height="45" rx="1.5" fill="none" stroke="#704214" strokeWidth="0.12" />
      {/* Perforation line (left stub) */}
      {[5, 7.5, 10, 12.5, 15, 17.5, 20, 22.5, 25, 27.5, 30, 32.5, 35, 37.5, 40, 42.5, 45, 47.5].map((y, i) => (
        <line key={`vintage-ticket-perf-${i}`} x1="22" y1={y} x2="22" y2={y + 1.5} stroke="#704214" strokeWidth="0.2" strokeOpacity="0.35" />
      ))}
      {/* Stub section background */}
      <rect x="4" y="4" width="17.5" height="47" rx="1" fill="#704214" fillOpacity="0.04" />
      {/* Stub text */}
      <text x="13" y="28" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="700" fontSize="1.6" letterSpacing="0.3" fill="#704214" transform="rotate(-90 13 28)">ADMIT ONE</text>
      {/* Star decorations in stub */}
      <text x="11.5" y="10" textAnchor="middle" fontFamily="serif" fontSize="2.5" fill="#704214" fillOpacity="0.25">&#x2605;</text>
      <text x="11.5" y="49" textAnchor="middle" fontFamily="serif" fontSize="2.5" fill="#704214" fillOpacity="0.25">&#x2605;</text>
      {/* Ticket number */}
      <text x="56" y="9" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="1.2" letterSpacing="2.5" fill="#704214" fillOpacity="0.45">No. 001</text>
      {/* Decorative rule */}
      <line x1="28" y1="11" x2="84" y2="11" stroke="#704214" strokeWidth="0.1" />
      {/* Main ticket content */}
      <text
        x="56"
        y="23"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="0.5"
        fill="url(#vintage-ticket-ink)"
        filter="url(#vintage-ticket-stamp)"
      >
        {data.nameJa}
      </text>
      <text x="56" y="30" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="2.2" letterSpacing="0.5" fill="#704214" fontStyle="italic">{data.nameEn}</text>
      <line x1="30" y1="34" x2="82" y2="34" stroke="#704214" strokeWidth="0.1" />
      <circle cx="30" cy="34" r="0.35" fill="#704214" fillOpacity="0.4" />
      <circle cx="82" cy="34" r="0.35" fill="#704214" fillOpacity="0.4" />
      <text x="56" y="39.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#8B6934">{data.titleJa} — {data.companyJa}</text>
      <text x="56" y="45" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.3" fill="#A08050">{data.email}</text>
      {data.logo && <image href={data.logo} x="5" y="13" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="vintage-ticket-bpaper" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" seed="21" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" />
        </filter>
        <filter id="vintage-ticket-bstamp" x="-10%" y="-10%" width="130%" height="130%">
          <feGaussianBlur stdDeviation="0.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#F5F0E1" />
      <rect width="91" height="55" fill="#F5F0E1" filter="url(#vintage-ticket-bpaper)" opacity="0.5" />
      <rect x="3.5" y="3.5" width="84" height="48" rx="2" fill="none" stroke="#704214" strokeWidth="0.35" />
      <rect x="5" y="5" width="81" height="45" rx="1.5" fill="none" stroke="#704214" strokeWidth="0.12" />
      {/* Perforation line */}
      {[5, 7.5, 10, 12.5, 15, 17.5, 20, 22.5, 25, 27.5, 30, 32.5, 35, 37.5, 40, 42.5, 45, 47.5].map((y, i) => (
        <line key={`vintage-ticket-bperf-${i}`} x1="22" y1={y} x2="22" y2={y + 1.5} stroke="#704214" strokeWidth="0.2" strokeOpacity="0.35" />
      ))}
      {/* Stub decoration */}
      <rect x="4" y="4" width="17.5" height="47" rx="1" fill="#704214" fillOpacity="0.04" />
      <text x="13" y="28" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="700" fontSize="1.4" letterSpacing="0.3" fill="#704214" fillOpacity="0.5" transform="rotate(-90 13 28)">RETAIN STUB</text>
      {/* Company info */}
      <text x="56" y="13" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#3D2008" filter="url(#vintage-ticket-bstamp)">{data.companyJa}</text>
      <text x="56" y="18" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" textAnchor="middle" fill="#704214" fontStyle="italic">{data.companyEn}</text>
      <text x="56" y="22.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#8B6934">{data.titleJa}</text>
      <line x1="30" y1="25" x2="82" y2="25" stroke="#704214" strokeWidth="0.1" />
      <text x="56" y="30" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#704214">{data.tel}</text>
      <text x="56" y="34.5" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#704214">{data.email}</text>
      <text x="56" y="39" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#8B6934">{data.website}</text>
      <line x1="30" y1="42" x2="82" y2="42" stroke="#704214" strokeWidth="0.1" />
      <text x="56" y="47" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#A08050">〒{data.zipCode} {data.addressJa}</text>
      {data.logo && <image href={data.logo} x="5" y="13" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 6. LABEL (札) — Vintage product label
// Ornate frame, centered text, label border style
// ============================================================
const labelTemplate: TemplateDefinition = {
  id: 'vintage-label',
  name: 'LABEL',
  nameJa: '札',
  category: 'vintage',
  designer: 'Vintage Press',
  description: '古いラベルの装飾美。商品を彩った枠と文字の調和。',
  accentColor: '#704214',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="vintage-label-paper" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" seed="25" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" />
        </filter>
        <filter id="vintage-label-shadow" x="-15%" y="-15%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.3" result="blur" />
          <feOffset dx="0.1" dy="0.15" result="offset" />
          <feMerge>
            <feMergeNode in="offset" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="vintage-label-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8B6934" />
          <stop offset="50%" stopColor="#704214" />
          <stop offset="100%" stopColor="#5A3510" />
        </linearGradient>
        <radialGradient id="vintage-label-bg" cx="0.5" cy="0.5" r="0.55">
          <stop offset="0%" stopColor="#F8F4E8" />
          <stop offset="100%" stopColor="#E8DDD0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="url(#vintage-label-bg)" />
      <rect width="91" height="55" fill="url(#vintage-label-bg)" filter="url(#vintage-label-paper)" opacity="0.5" />
      {/* Ornamental frame - outer */}
      <rect x="5" y="4" width="81" height="47" rx="1.5" fill="none" stroke="#704214" strokeWidth="0.3" />
      {/* Inner frame */}
      <rect x="8" y="7" width="75" height="41" rx="0.8" fill="none" stroke="#704214" strokeWidth="0.15" />
      {/* Corner ornaments - flourishes */}
      <path d="M 8,7 C 10,9 8,12 5,12" stroke="#704214" strokeWidth="0.15" fill="none" strokeOpacity="0.5" />
      <path d="M 83,7 C 81,9 83,12 86,12" stroke="#704214" strokeWidth="0.15" fill="none" strokeOpacity="0.5" />
      <path d="M 8,48 C 10,46 8,43 5,43" stroke="#704214" strokeWidth="0.15" fill="none" strokeOpacity="0.5" />
      <path d="M 83,48 C 81,46 83,43 86,43" stroke="#704214" strokeWidth="0.15" fill="none" strokeOpacity="0.5" />
      {/* Corner dots */}
      <circle cx="8" cy="7" r="0.5" fill="#704214" fillOpacity="0.4" />
      <circle cx="83" cy="7" r="0.5" fill="#704214" fillOpacity="0.4" />
      <circle cx="8" cy="48" r="0.5" fill="#704214" fillOpacity="0.4" />
      <circle cx="83" cy="48" r="0.5" fill="#704214" fillOpacity="0.4" />
      {/* Decorative rule above name */}
      <line x1="22" y1="14" x2="40" y2="14" stroke="#704214" strokeWidth="0.12" />
      <circle cx="22" cy="14" r="0.4" fill="#704214" fillOpacity="0.5" />
      <path d="M 43,14 L 45.5,12 L 48,14 L 45.5,16 Z" fill="#704214" fillOpacity="0.4" />
      <line x1="51" y1="14" x2="69" y2="14" stroke="#704214" strokeWidth="0.12" />
      <circle cx="69" cy="14" r="0.4" fill="#704214" fillOpacity="0.5" />
      {/* ESTABLISHED text */}
      <text x="45.5" y="12" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="1" letterSpacing="1.8" fill="#704214" fillOpacity="0.5">ESTABLISHED</text>
      {/* Main name */}
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.8"
        fill="#3D2008"
        filter="url(#vintage-label-shadow)"
      >
        {data.nameJa}
      </text>
      <text x="45.5" y="30" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="2.2" letterSpacing="0.5" fill="url(#vintage-label-gold)" fontStyle="italic">{data.nameEn}</text>
      {/* Decorative rule below name */}
      <line x1="22" y1="34" x2="40" y2="34" stroke="#704214" strokeWidth="0.12" />
      <circle cx="45.5" cy="34" r="0.6" fill="#704214" fillOpacity="0.4" />
      <line x1="51" y1="34" x2="69" y2="34" stroke="#704214" strokeWidth="0.12" />
      <text x="45.5" y="39.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#8B6934">{data.titleJa}</text>
      <text x="45.5" y="44.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#A08050">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="41.5" y="44" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="vintage-label-bpaper" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" seed="26" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" />
        </filter>
        <filter id="vintage-label-bshadow" x="-10%" y="-10%" width="130%" height="130%">
          <feGaussianBlur stdDeviation="0.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#F5F0E1" />
      <rect width="91" height="55" fill="#F5F0E1" filter="url(#vintage-label-bpaper)" opacity="0.5" />
      <rect x="5" y="4" width="81" height="47" rx="1.5" fill="none" stroke="#704214" strokeWidth="0.3" />
      <rect x="8" y="7" width="75" height="41" rx="0.8" fill="none" stroke="#704214" strokeWidth="0.15" />
      {/* Corner ornaments */}
      <circle cx="8" cy="7" r="0.5" fill="#704214" fillOpacity="0.4" />
      <circle cx="83" cy="7" r="0.5" fill="#704214" fillOpacity="0.4" />
      <circle cx="8" cy="48" r="0.5" fill="#704214" fillOpacity="0.4" />
      <circle cx="83" cy="48" r="0.5" fill="#704214" fillOpacity="0.4" />
      <text x="45.5" y="15" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#3D2008" filter="url(#vintage-label-bshadow)">{data.companyJa}</text>
      <text x="45.5" y="19.5" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.6" fill="#704214" fontStyle="italic">{data.companyEn}</text>
      <text x="45.5" y="24" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#8B6934">{data.titleJa}</text>
      <line x1="18" y1="26.5" x2="73" y2="26.5" stroke="#704214" strokeWidth="0.1" />
      <circle cx="45.5" cy="26.5" r="0.4" fill="#704214" fillOpacity="0.3" />
      <text x="45.5" y="31" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#704214">{data.tel}</text>
      <text x="45.5" y="35" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#704214">{data.email}</text>
      <text x="45.5" y="39" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#8B6934">{data.website}</text>
      <line x1="18" y1="41.5" x2="73" y2="41.5" stroke="#704214" strokeWidth="0.1" />
      <text x="45.5" y="46" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#A08050">〒{data.zipCode} {data.addressJa}</text>
      {data.logo && <image href={data.logo} x="41.5" y="10" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 7. STAMP-V (切手) — Vintage postage stamp
// Perforated stamp border, denomination style
// ============================================================
const stampVTemplate: TemplateDefinition = {
  id: 'vintage-stamp-v',
  name: 'STAMP-V',
  nameJa: '切手',
  category: 'vintage',
  designer: 'Vintage Press',
  description: '切手の精密な美。小さな枠に凝縮された芸術。',
  accentColor: '#2D4A3E',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="vintage-stamp-v-paper" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" seed="30" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" />
        </filter>
        <filter id="vintage-stamp-v-shadow" x="-15%" y="-15%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.25" result="blur" />
          <feOffset dx="0.1" dy="0.1" result="offset" />
          <feMerge>
            <feMergeNode in="offset" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="vintage-stamp-v-tint" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D8E8DD" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#2D4A3E" stopOpacity="0.05" />
        </linearGradient>
        <radialGradient id="vintage-stamp-v-center" cx="0.5" cy="0.4" r="0.6">
          <stop offset="0%" stopColor="#E8F0EA" />
          <stop offset="100%" stopColor="#D8DDD0" />
        </radialGradient>
      </defs>
      <rect width="91" height="55" fill="#F5F0E1" />
      <rect width="91" height="55" fill="#F5F0E1" filter="url(#vintage-stamp-v-paper)" opacity="0.5" />
      {/* Stamp area with perforated edge */}
      <rect x="55" y="5" width="31" height="45" fill="url(#vintage-stamp-v-center)" />
      <rect x="55" y="5" width="31" height="45" fill="url(#vintage-stamp-v-tint)" />
      {/* Perforations - top */}
      {[56.5, 59.5, 62.5, 65.5, 68.5, 71.5, 74.5, 77.5, 80.5, 83.5].map((x, i) => (
        <circle key={`vintage-stamp-v-pt-${i}`} cx={x} cy="5" r="0.7" fill="#F5F0E1" />
      ))}
      {/* Perforations - bottom */}
      {[56.5, 59.5, 62.5, 65.5, 68.5, 71.5, 74.5, 77.5, 80.5, 83.5].map((x, i) => (
        <circle key={`vintage-stamp-v-pb-${i}`} cx={x} cy="50" r="0.7" fill="#F5F0E1" />
      ))}
      {/* Perforations - left */}
      {[7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 43, 46, 49].map((y, i) => (
        <circle key={`vintage-stamp-v-pl-${i}`} cx="55" cy={y} r="0.7" fill="#F5F0E1" />
      ))}
      {/* Perforations - right */}
      {[7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 43, 46, 49].map((y, i) => (
        <circle key={`vintage-stamp-v-pr-${i}`} cx="86" cy={y} r="0.7" fill="#F5F0E1" />
      ))}
      {/* Stamp inner border */}
      <rect x="58" y="8" width="25" height="39" fill="none" stroke="#2D4A3E" strokeWidth="0.18" />
      <rect x="59.5" y="9.5" width="22" height="36" fill="none" stroke="#2D4A3E" strokeWidth="0.08" />
      {/* Stamp denomination */}
      <text x="70.5" y="17" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="700" fontSize="4.5" fill="#2D4A3E" fillOpacity="0.35">&#x00A5;</text>
      {/* Decorative guilloche pattern (simplified) */}
      <ellipse cx="70.5" cy="28" rx="8" ry="5" fill="none" stroke="#2D4A3E" strokeWidth="0.08" strokeOpacity="0.2" />
      <ellipse cx="70.5" cy="28" rx="6" ry="3.5" fill="none" stroke="#2D4A3E" strokeWidth="0.06" strokeOpacity="0.15" />
      {/* Initial in stamp */}
      <text x="70.5" y="31" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="3" fill="#2D4A3E" fillOpacity="0.4">{data.nameJa.charAt(0)}</text>
      <text x="70.5" y="43" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="0.9" letterSpacing="0.8" fill="#2D4A3E" fillOpacity="0.35">NIPPON</text>
      {/* Main text area */}
      <text
        x="7"
        y="17"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#2D4A3E"
        filter="url(#vintage-stamp-v-shadow)"
      >
        {data.nameJa}
      </text>
      <text x="7" y="24" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="2" fill="#4A7060" fontStyle="italic">{data.nameEn}</text>
      <line x1="7" y1="27" x2="48" y2="27" stroke="#2D4A3E" strokeWidth="0.08" strokeOpacity="0.3" />
      <text x="7" y="33" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#6B8A7A">{data.titleJa}</text>
      <text x="7" y="39" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#8BA898">{data.companyJa}</text>
      <text x="7" y="44" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.3" fill="#8BA898" fontStyle="italic">{data.companyEn}</text>
      {data.logo && <image href={data.logo} x="7" y="45" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="vintage-stamp-v-bpaper" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" seed="31" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" />
        </filter>
        <filter id="vintage-stamp-v-bshadow" x="-10%" y="-10%" width="130%" height="130%">
          <feGaussianBlur stdDeviation="0.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#F5F0E1" />
      <rect width="91" height="55" fill="#F5F0E1" filter="url(#vintage-stamp-v-bpaper)" opacity="0.5" />
      {/* Small stamp in corner */}
      <rect x="71" y="3" width="16" height="16" fill="#E8F0EA" />
      <rect x="73" y="5" width="12" height="12" fill="none" stroke="#2D4A3E" strokeWidth="0.12" />
      <rect x="74" y="6" width="10" height="10" fill="none" stroke="#2D4A3E" strokeWidth="0.06" />
      {[72, 75, 78, 81, 84, 87].map((x, i) => (
        <circle key={`vintage-stamp-v-bpt-${i}`} cx={x} cy="3" r="0.45" fill="#F5F0E1" />
      ))}
      {[72, 75, 78, 81, 84, 87].map((x, i) => (
        <circle key={`vintage-stamp-v-bpb-${i}`} cx={x} cy="19" r="0.45" fill="#F5F0E1" />
      ))}
      {[5, 8, 11, 14, 17].map((y, i) => (
        <circle key={`vintage-stamp-v-bpl-${i}`} cx="71" cy={y} r="0.45" fill="#F5F0E1" />
      ))}
      {/* Company info */}
      <text x="8" y="13" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#2D4A3E" filter="url(#vintage-stamp-v-bshadow)">{data.companyJa}</text>
      <text x="8" y="18" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.6" fill="#4A7060" fontStyle="italic">{data.companyEn}</text>
      <text x="8" y="23" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#6B8A7A">{data.titleJa}</text>
      <line x1="8" y1="25.5" x2="60" y2="25.5" stroke="#2D4A3E" strokeWidth="0.1" strokeOpacity="0.25" />
      <text x="8" y="30.5" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#2D4A3E">{data.tel}</text>
      <text x="8" y="35" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#2D4A3E">{data.email}</text>
      <text x="8" y="39.5" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#4A7060">{data.website}</text>
      <line x1="8" y1="42" x2="60" y2="42" stroke="#2D4A3E" strokeWidth="0.08" strokeOpacity="0.2" />
      <text x="8" y="47" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#8BA898">〒{data.zipCode} {data.addressJa}</text>
      {data.logo && <image href={data.logo} x="62" y="30" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 8. POSTCARD (葉書) — Vintage postcard layout
// Divided back, address lines, stamp area
// ============================================================
const postcardTemplate: TemplateDefinition = {
  id: 'vintage-postcard',
  name: 'POSTCARD',
  nameJa: '葉書',
  category: 'vintage',
  designer: 'Vintage Press',
  description: '絵葉書の裏面。手書きの温もりと郵便の記憶。',
  accentColor: '#704214',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="vintage-postcard-paper" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" seed="35" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" />
        </filter>
        <filter id="vintage-postcard-shadow" x="-10%" y="-10%" width="130%" height="130%">
          <feGaussianBlur stdDeviation="0.2" result="blur" />
          <feOffset dx="0.1" dy="0.1" result="offset" />
          <feMerge>
            <feMergeNode in="offset" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="vintage-postcard-tint" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F8F3E6" />
          <stop offset="100%" stopColor="#E8E0C8" />
        </linearGradient>
        <linearGradient id="vintage-postcard-ink" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3D2008" />
          <stop offset="100%" stopColor="#704214" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#vintage-postcard-tint)" />
      <rect width="91" height="55" fill="url(#vintage-postcard-tint)" filter="url(#vintage-postcard-paper)" opacity="0.5" />
      {/* Outer border */}
      <rect x="2" y="2" width="87" height="51" fill="none" stroke="#704214" strokeWidth="0.15" />
      {/* POST CARD header with ornaments */}
      <text x="45.5" y="8" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="700" fontSize="2.8" letterSpacing="2" fill="#704214" fillOpacity="0.4">POST CARD</text>
      <line x1="5" y1="10" x2="86" y2="10" stroke="#704214" strokeWidth="0.2" />
      {/* Center dividing line */}
      <line x1="45.5" y1="10" x2="45.5" y2="51" stroke="#704214" strokeWidth="0.15" />
      {/* Left side - message/name */}
      <text x="8" y="14" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="0.9" letterSpacing="0.5" fill="#B8A080">CORRESPONDENCE</text>
      <text
        x="24"
        y="26"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        fill="url(#vintage-postcard-ink)"
        filter="url(#vintage-postcard-shadow)"
      >
        {data.nameJa}
      </text>
      <text x="24" y="32" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="2" fill="#704214" fontStyle="italic">{data.nameEn}</text>
      <line x1="10" y1="36" x2="38" y2="36" stroke="#704214" strokeWidth="0.08" />
      <text x="24" y="41" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#8B6934">{data.titleJa}</text>
      <text x="24" y="46" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#A08050">{data.companyJa}</text>
      {/* Right side - address lines */}
      {/* Stamp area */}
      <rect x="73" y="12" width="10" height="9" fill="none" stroke="#704214" strokeWidth="0.15" strokeDasharray="0.6 0.3" />
      <text x="78" y="17.5" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="0.9" fill="#B8A080" letterSpacing="0.3">STAMP</text>
      {/* Address lines */}
      <line x1="49" y1="24" x2="84" y2="24" stroke="#B8A080" strokeWidth="0.1" />
      <line x1="49" y1="30" x2="84" y2="30" stroke="#B8A080" strokeWidth="0.1" />
      <line x1="49" y1="36" x2="84" y2="36" stroke="#B8A080" strokeWidth="0.1" />
      <line x1="49" y1="42" x2="84" y2="42" stroke="#B8A080" strokeWidth="0.1" />
      <line x1="49" y1="48" x2="84" y2="48" stroke="#B8A080" strokeWidth="0.1" />
      {/* Company on address line */}
      <text x="50" y="23" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.4" fill="#704214">{data.companyJa}</text>
      <text x="50" y="29" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.3" fill="#8B6934" fontStyle="italic">{data.companyEn}</text>
      {data.logo && <image href={data.logo} x="8" y="12" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="vintage-postcard-bpaper" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" seed="36" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" />
        </filter>
        <filter id="vintage-postcard-bshadow" x="-10%" y="-10%" width="130%" height="130%">
          <feGaussianBlur stdDeviation="0.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#F5F0E1" />
      <rect width="91" height="55" fill="#F5F0E1" filter="url(#vintage-postcard-bpaper)" opacity="0.5" />
      <rect x="2" y="2" width="87" height="51" fill="none" stroke="#704214" strokeWidth="0.15" />
      {/* Header */}
      <text x="45.5" y="8" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="600" fontSize="2" letterSpacing="1.2" fill="#704214" fillOpacity="0.35">CORRESPONDENCE</text>
      <line x1="5" y1="10" x2="86" y2="10" stroke="#704214" strokeWidth="0.2" />
      {/* Circular postmark decoration */}
      <circle cx="78" cy="6" r="3" fill="none" stroke="#704214" strokeWidth="0.12" strokeOpacity="0.2" />
      <circle cx="78" cy="6" r="2" fill="none" stroke="#704214" strokeWidth="0.08" strokeOpacity="0.15" />
      {/* Company info */}
      <text x="8" y="17" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#3D2008" filter="url(#vintage-postcard-bshadow)">{data.companyJa}</text>
      <text x="8" y="22" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.6" fill="#704214" fontStyle="italic">{data.companyEn}</text>
      <text x="8" y="26.5" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#8B6934">{data.titleJa}</text>
      <line x1="8" y1="28.5" x2="82" y2="28.5" stroke="#B8A080" strokeWidth="0.1" />
      <text x="8" y="33" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#704214">{data.tel}</text>
      <line x1="8" y1="35" x2="82" y2="35" stroke="#B8A080" strokeWidth="0.1" />
      <text x="8" y="39.5" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#704214">{data.email}</text>
      <line x1="8" y1="41.5" x2="82" y2="41.5" stroke="#B8A080" strokeWidth="0.1" />
      <text x="8" y="46" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#8B6934">{data.website}</text>
      <line x1="8" y1="48" x2="82" y2="48" stroke="#B8A080" strokeWidth="0.1" />
      <text x="8" y="52" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#A08050">〒{data.zipCode} {data.addressJa}</text>
      {data.logo && <image href={data.logo} x="74" y="12" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 9. MENU (献立) — Vintage restaurant menu
// Centered layout, decorative dividers, menu card feel
// ============================================================
const menuTemplate: TemplateDefinition = {
  id: 'vintage-menu',
  name: 'MENU',
  nameJa: '献立',
  category: 'vintage',
  designer: 'Vintage Press',
  description: '古いレストランのメニュー。美食を導く洗練された書式。',
  accentColor: '#722F37',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="vintage-menu-paper" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" seed="40" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" />
        </filter>
        <filter id="vintage-menu-shadow" x="-15%" y="-15%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.3" result="blur" />
          <feOffset dx="0.1" dy="0.15" result="offset" />
          <feMerge>
            <feMergeNode in="offset" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="vintage-menu-bg" cx="0.5" cy="0.5" r="0.55">
          <stop offset="0%" stopColor="#FBF6EC" />
          <stop offset="100%" stopColor="#E8DDD0" />
        </radialGradient>
        <linearGradient id="vintage-menu-wine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8A3545" />
          <stop offset="50%" stopColor="#722F37" />
          <stop offset="100%" stopColor="#5A2028" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#vintage-menu-bg)" />
      <rect width="91" height="55" fill="url(#vintage-menu-bg)" filter="url(#vintage-menu-paper)" opacity="0.5" />
      {/* Thin outer border */}
      <rect x="4" y="3" width="83" height="49" fill="none" stroke="#722F37" strokeWidth="0.1" />
      {/* Decorative top ornament - scrollwork */}
      <path d="M 30,6 Q 33,4 36,6 Q 39,7 41,5 Q 43,3.5 45.5,5 Q 48,3.5 50,5 Q 52,7 55,6 Q 58,4 61,6" stroke="#722F37" strokeWidth="0.2" fill="none" strokeOpacity="0.45" />
      <circle cx="45.5" cy="5" r="0.7" fill="#722F37" fillOpacity="0.3" />
      <circle cx="36" cy="6" r="0.35" fill="#722F37" fillOpacity="0.25" />
      <circle cx="55" cy="6" r="0.35" fill="#722F37" fillOpacity="0.25" />
      {/* MENU header */}
      <text x="45.5" y="13.5" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.6" letterSpacing="2" fill="url(#vintage-menu-wine)" fillOpacity="0.6">MENU</text>
      {/* Decorative rule with end dots */}
      <line x1="27" y1="16" x2="64" y2="16" stroke="#722F37" strokeWidth="0.1" />
      <circle cx="27" cy="16" r="0.4" fill="#722F37" fillOpacity="0.3" />
      <circle cx="64" cy="16" r="0.4" fill="#722F37" fillOpacity="0.3" />
      {/* Main name */}
      <text
        x="45.5"
        y="26"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="6.5"
        letterSpacing="1"
        fill="#3D1A20"
        filter="url(#vintage-menu-shadow)"
      >
        {data.nameJa}
      </text>
      <text x="45.5" y="32" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="2.2" letterSpacing="0.5" fill="url(#vintage-menu-wine)" fontStyle="italic">{data.nameEn}</text>
      {/* Decorative divider */}
      <line x1="27" y1="36" x2="40" y2="36" stroke="#722F37" strokeWidth="0.1" />
      <circle cx="45.5" cy="36" r="0.5" fill="#722F37" fillOpacity="0.3" />
      <line x1="51" y1="36" x2="64" y2="36" stroke="#722F37" strokeWidth="0.1" />
      <text x="45.5" y="41.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#8B5060">{data.titleJa}</text>
      <text x="45.5" y="46" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.4" fill="#A07080">{data.companyJa}</text>
      {/* Bottom ornament */}
      <path d="M 30,49 Q 33,51 36,49 Q 39,48 41,50 Q 43,51.5 45.5,50 Q 48,51.5 50,50 Q 52,48 55,49 Q 58,51 61,49" stroke="#722F37" strokeWidth="0.2" fill="none" strokeOpacity="0.45" />
      <circle cx="45.5" cy="50" r="0.7" fill="#722F37" fillOpacity="0.3" />
      {data.logo && <image href={data.logo} x="41.5" y="7" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="vintage-menu-bpaper" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" seed="41" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" />
        </filter>
        <filter id="vintage-menu-bshadow" x="-10%" y="-10%" width="130%" height="130%">
          <feGaussianBlur stdDeviation="0.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#F5F0E1" />
      <rect width="91" height="55" fill="#F5F0E1" filter="url(#vintage-menu-bpaper)" opacity="0.5" />
      <rect x="4" y="3" width="83" height="49" fill="none" stroke="#722F37" strokeWidth="0.1" />
      {/* Top ornament */}
      <path d="M 30,6 Q 33,4 36,6 Q 39,7 41,5 Q 43,3.5 45.5,5 Q 48,3.5 50,5 Q 52,7 55,6 Q 58,4 61,6" stroke="#722F37" strokeWidth="0.2" fill="none" strokeOpacity="0.35" />
      <circle cx="45.5" cy="5" r="0.5" fill="#722F37" fillOpacity="0.2" />
      {/* Company */}
      <text x="45.5" y="14" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.5" fill="#3D1A20" filter="url(#vintage-menu-bshadow)">{data.companyJa}</text>
      <text x="45.5" y="18.5" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.6" fill="#722F37" fontStyle="italic">{data.companyEn}</text>
      <text x="45.5" y="23" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#8B5060">{data.titleJa}</text>
      <line x1="22" y1="25.5" x2="69" y2="25.5" stroke="#722F37" strokeWidth="0.1" />
      <circle cx="45.5" cy="25.5" r="0.35" fill="#722F37" fillOpacity="0.25" />
      <text x="45.5" y="30.5" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#722F37">{data.tel}</text>
      <text x="45.5" y="35" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#722F37">{data.email}</text>
      <text x="45.5" y="39.5" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#8B5060">{data.website}</text>
      <line x1="22" y1="42" x2="69" y2="42" stroke="#722F37" strokeWidth="0.1" />
      <circle cx="45.5" cy="42" r="0.35" fill="#722F37" fillOpacity="0.25" />
      <text x="45.5" y="47" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#A07080">〒{data.zipCode} {data.addressJa}</text>
      {/* Bottom ornament */}
      <path d="M 30,49 Q 33,51 36,49 Q 39,48 41,50 Q 43,51.5 45.5,50 Q 48,51.5 50,50 Q 52,48 55,49 Q 58,51 61,49" stroke="#722F37" strokeWidth="0.2" fill="none" strokeOpacity="0.35" />
      {data.logo && <image href={data.logo} x="41.5" y="7" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

// ============================================================
// 10. PLAYBILL (番付) — Theater playbill / programme
// Bold header, act/scene structure, dramatic typography
// ============================================================
const playbillTemplate: TemplateDefinition = {
  id: 'vintage-playbill',
  name: 'PLAYBILL',
  nameJa: '番付',
  category: 'vintage',
  designer: 'Vintage Press',
  description: '芝居の番付。劇場の華やかさと格式が共存する書体美。',
  accentColor: '#1A1A1A',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="vintage-playbill-paper" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" seed="45" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" />
        </filter>
        <filter id="vintage-playbill-shadow" x="-15%" y="-15%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.35" result="blur" />
          <feOffset dx="0.15" dy="0.2" result="offset" />
          <feMerge>
            <feMergeNode in="offset" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="vintage-playbill-gold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#C4A060" />
          <stop offset="50%" stopColor="#E0C878" />
          <stop offset="100%" stopColor="#C4A060" />
        </linearGradient>
        <linearGradient id="vintage-playbill-dark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0A0A0A" />
          <stop offset="100%" stopColor="#2A2A2A" />
        </linearGradient>
      </defs>
      <rect width="91" height="55" fill="#F5F0E1" />
      <rect width="91" height="55" fill="#F5F0E1" filter="url(#vintage-playbill-paper)" opacity="0.5" />
      {/* Heavy top banner */}
      <rect x="4" y="3.5" width="83" height="3.5" fill="url(#vintage-playbill-dark)" />
      {/* PLAYBILL text in banner */}
      <text x="45.5" y="6.5" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="1.5" letterSpacing="2.5" fill="#F5F0E1">PLAYBILL</text>
      {/* Thin rules below banner */}
      <line x1="4" y1="8" x2="87" y2="8" stroke="#1A1A1A" strokeWidth="0.2" />
      <line x1="4" y1="8.6" x2="87" y2="8.6" stroke="#1A1A1A" strokeWidth="0.08" />
      {/* Decorative stars */}
      <text x="8" y="8.5" fontFamily="serif" fontSize="1.5" fill="#1A1A1A" fillOpacity="0.3">&#x2605;</text>
      <text x="83" y="8.5" fontFamily="serif" fontSize="1.5" fill="#1A1A1A" fillOpacity="0.3">&#x2605;</text>
      {/* Main title */}
      <text
        x="45.5"
        y="20"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="7"
        letterSpacing="0.5"
        fill="#1A1A1A"
        filter="url(#vintage-playbill-shadow)"
      >
        {data.nameJa}
      </text>
      {/* Decorative line */}
      <line x1="12" y1="23" x2="79" y2="23" stroke="#1A1A1A" strokeWidth="0.15" />
      <text x="45.5" y="28" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="600" fontSize="2.2" letterSpacing="0.8" fill="#1A1A1A">{data.nameEn.toUpperCase()}</text>
      {/* Act / Scene divider */}
      <line x1="20" y1="31.5" x2="37" y2="31.5" stroke="#1A1A1A" strokeWidth="0.1" />
      <text x="45.5" y="32.5" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1" letterSpacing="1" fill="#777777">ACT I</text>
      <line x1="54" y1="31.5" x2="71" y2="31.5" stroke="#1A1A1A" strokeWidth="0.1" />
      {/* Cast info */}
      <text x="45.5" y="37.5" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.6" fill="#555555" fontStyle="italic">{data.titleJa}</text>
      <text x="45.5" y="42" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#777777">{data.companyJa}</text>
      {/* Bottom heavy border */}
      <line x1="4" y1="46.5" x2="87" y2="46.5" stroke="#1A1A1A" strokeWidth="0.08" />
      <line x1="4" y1="47" x2="87" y2="47" stroke="#1A1A1A" strokeWidth="0.2" />
      <rect x="4" y="48" width="83" height="3.5" fill="url(#vintage-playbill-dark)" />
      {/* Bottom stars */}
      <text x="8" y="46.5" fontFamily="serif" fontSize="1.5" fill="#1A1A1A" fillOpacity="0.3">&#x2605;</text>
      <text x="83" y="46.5" fontFamily="serif" fontSize="1.5" fill="#1A1A1A" fillOpacity="0.3">&#x2605;</text>
      {data.logo && <image href={data.logo} x="41.5" y="9.5" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="vintage-playbill-bpaper" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" seed="46" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" />
        </filter>
        <filter id="vintage-playbill-bshadow" x="-10%" y="-10%" width="130%" height="130%">
          <feGaussianBlur stdDeviation="0.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="#F5F0E1" />
      <rect width="91" height="55" fill="#F5F0E1" filter="url(#vintage-playbill-bpaper)" opacity="0.5" />
      {/* Top border matching front */}
      <rect x="4" y="3.5" width="83" height="2.5" fill="#1A1A1A" />
      <line x1="4" y1="7" x2="87" y2="7" stroke="#1A1A1A" strokeWidth="0.15" />
      <line x1="4" y1="7.5" x2="87" y2="7.5" stroke="#1A1A1A" strokeWidth="0.06" />
      {/* PROGRAMME text */}
      <text x="45.5" y="5.5" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="1.2" letterSpacing="2" fill="#F5F0E1">PROGRAMME</text>
      {/* Company */}
      <text x="45.5" y="14" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="700" fontSize="2.8" letterSpacing="0.5" fill="#1A1A1A" filter="url(#vintage-playbill-bshadow)">{data.companyJa}</text>
      <text x="45.5" y="18.5" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.6" letterSpacing="0.4" fill="#555555" fontStyle="italic">{data.companyEn}</text>
      <text x="45.5" y="23" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#777777">{data.titleJa}</text>
      <line x1="18" y1="25.5" x2="73" y2="25.5" stroke="#1A1A1A" strokeWidth="0.1" />
      {/* Stars decoration */}
      <text x="18" y="26" fontFamily="serif" fontSize="1.2" fill="#1A1A1A" fillOpacity="0.25">&#x2605;</text>
      <text x="71" y="26" fontFamily="serif" fontSize="1.2" fill="#1A1A1A" fillOpacity="0.25">&#x2605;</text>
      <text x="45.5" y="31" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#333333">{data.tel}</text>
      <text x="45.5" y="35" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#333333">{data.email}</text>
      <text x="45.5" y="39" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="1.5" fill="#555555">{data.website}</text>
      <line x1="18" y1="41.5" x2="73" y2="41.5" stroke="#1A1A1A" strokeWidth="0.1" />
      <text x="45.5" y="46" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#777777">〒{data.zipCode} {data.addressJa}</text>
      {/* Bottom border */}
      <line x1="4" y1="47" x2="87" y2="47" stroke="#1A1A1A" strokeWidth="0.06" />
      <line x1="4" y1="47.5" x2="87" y2="47.5" stroke="#1A1A1A" strokeWidth="0.15" />
      <rect x="4" y="48.5" width="83" height="2.5" fill="#1A1A1A" />
      {data.logo && <image href={data.logo} x="41.5" y="8" width="8" height="8" preserveAspectRatio="xMidYMid meet" opacity="0.6" />}
    </g>
  ),
};

export const vintageTemplates: TemplateDefinition[] = [
  gazetteTemplate,
  telegramTemplate,
  ledgerTemplate,
  sealTemplate,
  ticketTemplate,
  labelTemplate,
  stampVTemplate,
  postcardTemplate,
  menuTemplate,
  playbillTemplate,
];
