import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. GAZETTE (報) — Old newspaper masthead style
// Column rules, serif headers, newsprint aesthetic
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
      <rect width="91" height="55" fill="#F5F0E1" />
      {/* Double rule top */}
      <line x1="6" y1="6" x2="85" y2="6" stroke="#704214" strokeWidth="0.3" />
      <line x1="6" y1="7" x2="85" y2="7" stroke="#704214" strokeWidth="0.1" />
      {/* Masthead name */}
      <text
        x="45.5"
        y="16"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="700"
        fontSize="7"
        letterSpacing="0.8"
        fill="#704214"
      >
        {data.nameJa}
      </text>
      {/* Thin rule under name */}
      <line x1="20" y1="19" x2="71" y2="19" stroke="#704214" strokeWidth="0.08" />
      {/* Subtitle */}
      <text
        x="45.5"
        y="24"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2.2"
        letterSpacing="0.5"
        fill="#8B6934"
        fontStyle="italic"
      >
        {data.nameEn}
      </text>
      {/* Column rule */}
      <line x1="45.5" y1="28" x2="45.5" y2="46" stroke="#704214" strokeWidth="0.08" />
      {/* Left column */}
      <text
        x="25"
        y="33"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#704214"
      >
        {data.titleJa}
      </text>
      <text
        x="25"
        y="38"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8B6934"
      >
        {data.companyJa}
      </text>
      {/* Right column */}
      <text
        x="68"
        y="33"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#704214"
      >
        {data.tel}
      </text>
      <text
        x="68"
        y="38"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#704214"
      >
        {data.email}
      </text>
      {/* Double rule bottom */}
      <line x1="6" y1="48" x2="85" y2="48" stroke="#704214" strokeWidth="0.1" />
      <line x1="6" y1="49" x2="85" y2="49" stroke="#704214" strokeWidth="0.3" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E1" />
      {/* Decorative rules */}
      <line x1="6" y1="6" x2="85" y2="6" stroke="#704214" strokeWidth="0.3" />
      <line x1="6" y1="7" x2="85" y2="7" stroke="#704214" strokeWidth="0.1" />
      <text
        x="45.5"
        y="15"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="600"
        fontSize="2.8"
        letterSpacing="0.5"
        fill="#704214"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="19.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.6"
        letterSpacing="0.3"
        fill="#8B6934"
        fontStyle="italic"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="22" x2="71" y2="22" stroke="#704214" strokeWidth="0.08" />
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#704214"
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
        fill="#704214"
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
        fill="#704214"
      >
        {data.website}
      </text>
      <line x1="30" y1="39" x2="61" y2="39" stroke="#704214" strokeWidth="0.08" />
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#A08050"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
      <line x1="6" y1="48" x2="85" y2="48" stroke="#704214" strokeWidth="0.1" />
      <line x1="6" y1="49" x2="85" y2="49" stroke="#704214" strokeWidth="0.3" />
    </g>
  ),
};

// ============================================================
// 2. TELEGRAM (電報) — Vintage telegram form
// Dotted borders, typewriter font feel, urgent style
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
      <rect width="91" height="55" fill="#F5F0E1" />
      {/* Telegram border - dashed */}
      <rect x="5" y="4" width="81" height="47" fill="none" stroke="#2D4A3E" strokeWidth="0.25" strokeDasharray="1.5 0.8" />
      {/* TELEGRAM header */}
      <text
        x="45.5"
        y="10"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="700"
        fontSize="2"
        letterSpacing="1.5"
        fill="#2D4A3E"
      >
        TELEGRAM
      </text>
      <line x1="10" y1="12" x2="81" y2="12" stroke="#2D4A3E" strokeWidth="0.1" />
      {/* Date line style */}
      <text
        x="12"
        y="17"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.2"
        fill="#8B7D6B"
      >
        TO:
      </text>
      <text
        x="20"
        y="17"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="1.2"
        fill="#2D4A3E"
      >
        {data.companyJa}
      </text>
      <line x1="10" y1="19" x2="81" y2="19" stroke="#2D4A3E" strokeWidth="0.06" />
      {/* Main message - name */}
      <text
        x="45.5"
        y="29"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="0.8"
        fill="#2D4A3E"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="35"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="500"
        fontSize="2"
        letterSpacing="0.5"
        fill="#4A7060"
      >
        {data.nameEn.toUpperCase()}
      </text>
      <line x1="10" y1="39" x2="81" y2="39" stroke="#2D4A3E" strokeWidth="0.06" />
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#6B8A7A"
      >
        {data.titleJa}
      </text>
      {/* STOP marker */}
      <text
        x="78"
        y="44"
        textAnchor="end"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="700"
        fontSize="1.2"
        fill="#2D4A3E"
        fillOpacity="0.4"
      >
        STOP
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E1" />
      <rect x="5" y="4" width="81" height="47" fill="none" stroke="#2D4A3E" strokeWidth="0.25" strokeDasharray="1.5 0.8" />
      <text
        x="45.5"
        y="10"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="700"
        fontSize="1.6"
        letterSpacing="1"
        fill="#2D4A3E"
      >
        REPLY
      </text>
      <line x1="10" y1="12" x2="81" y2="12" stroke="#2D4A3E" strokeWidth="0.1" />
      <text
        x="12"
        y="18"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2"
        fill="#2D4A3E"
      >
        {data.companyJa}
      </text>
      <text
        x="12"
        y="22"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#4A7060"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="25" x2="81" y2="25" stroke="#2D4A3E" strokeWidth="0.06" />
      <text
        x="12"
        y="30"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#2D4A3E"
      >
        TEL: {data.tel}
      </text>
      <text
        x="12"
        y="34"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#2D4A3E"
      >
        MAIL: {data.email}
      </text>
      <text
        x="12"
        y="38"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#2D4A3E"
      >
        WEB: {data.website}
      </text>
      <line x1="10" y1="41" x2="81" y2="41" stroke="#2D4A3E" strokeWidth="0.06" />
      <text
        x="12"
        y="46"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#6B8A7A"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 3. LEDGER (簿) — Accounting ledger book
// Ruled lines, precise columns, bookkeeping aesthetic
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
      <rect width="91" height="55" fill="#F5F0E1" />
      {/* Ledger binding edge */}
      <rect x="0" y="0" width="4" height="55" fill="#722F37" fillOpacity="0.15" />
      <line x1="4" y1="0" x2="4" y2="55" stroke="#722F37" strokeWidth="0.3" />
      {/* Horizontal ruled lines */}
      {[10, 15, 20, 25, 30, 35, 40, 45, 50].map((y, i) => (
        <line key={`vintage-ledger-rule-${i}`} x1="6" y1={y} x2="88" y2={y} stroke="#C4A882" strokeWidth="0.08" />
      ))}
      {/* Vertical column divider */}
      <line x1="55" y1="5" x2="55" y2="50" stroke="#722F37" strokeWidth="0.08" strokeOpacity="0.4" />
      {/* Header area */}
      <line x1="6" y1="7" x2="88" y2="7" stroke="#722F37" strokeWidth="0.15" />
      <text
        x="30"
        y="6"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="600"
        fontSize="2"
        letterSpacing="0.3"
        fill="#722F37"
      >
        NAME
      </text>
      <text
        x="71"
        y="6"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="600"
        fontSize="2"
        letterSpacing="0.3"
        fill="#722F37"
      >
        DETAILS
      </text>
      {/* Name in main column */}
      <text
        x="30"
        y="18"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5"
        fill="#3D1A20"
      >
        {data.nameJa}
      </text>
      <text
        x="30"
        y="24"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.8"
        fill="#722F37"
        fontStyle="italic"
      >
        {data.nameEn}
      </text>
      {/* Details in right column */}
      <text
        x="71"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#704214"
      >
        {data.titleJa}
      </text>
      <text
        x="71"
        y="19"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#704214"
      >
        {data.companyJa}
      </text>
      <text
        x="71"
        y="29"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#704214"
      >
        {data.tel}
      </text>
      <text
        x="71"
        y="34"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.3"
        fill="#704214"
      >
        {data.email}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E1" />
      {/* Ledger binding */}
      <rect x="0" y="0" width="4" height="55" fill="#722F37" fillOpacity="0.15" />
      <line x1="4" y1="0" x2="4" y2="55" stroke="#722F37" strokeWidth="0.3" />
      {/* Ruled lines */}
      {[10, 15, 20, 25, 30, 35, 40, 45, 50].map((y, i) => (
        <line key={`vintage-ledger-brule-${i}`} x1="6" y1={y} x2="88" y2={y} stroke="#C4A882" strokeWidth="0.08" />
      ))}
      <line x1="6" y1="7" x2="88" y2="7" stroke="#722F37" strokeWidth="0.15" />
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#3D1A20"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="19"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#722F37"
        fontStyle="italic"
      >
        {data.companyEn}
      </text>
      <text
        x="10"
        y="28"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#704214"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="33"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#704214"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="38"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#704214"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="46"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#A08050"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
    </g>
  ),
};

// ============================================================
// 4. SEAL (封) — Wax seal / official stamp
// Circular seal element, formal and authoritative
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
      <rect width="91" height="55" fill="#F5F0E1" />
      <defs>
        <radialGradient id="vintage-seal-wax" cx="0.45" cy="0.45" r="0.55">
          <stop offset="0%" stopColor="#A0404A" />
          <stop offset="60%" stopColor="#722F37" />
          <stop offset="100%" stopColor="#5A2028" />
        </radialGradient>
      </defs>
      {/* Wax seal */}
      <circle cx="72" cy="28" r="14" fill="url(#vintage-seal-wax)" fillOpacity="0.2" />
      <circle cx="72" cy="28" r="11" fill="none" stroke="#722F37" strokeWidth="0.3" strokeOpacity="0.4" />
      <circle cx="72" cy="28" r="9" fill="none" stroke="#722F37" strokeWidth="0.15" strokeOpacity="0.3" />
      {/* Seal wavy edge */}
      <path d="M 72,14 Q 76,15 78,14 Q 80,14 82,16 Q 84,18 86,18 Q 86,20 86,22 Q 87,24 86,26 Q 87,28 86,30 Q 87,32 86,34 Q 86,36 84,38 Q 82,40 80,42 Q 78,42 76,42 Q 74,43 72,42 Q 70,43 68,42 Q 66,42 64,40 Q 62,38 60,38 Q 58,36 58,34 Q 57,32 58,30 Q 57,28 58,26 Q 57,24 58,22 Q 58,20 60,18 Q 62,16 64,16 Q 66,14 68,14 Q 70,13 72,14" fill="none" stroke="#722F37" strokeWidth="0.2" strokeOpacity="0.25" />
      {/* Initial in seal */}
      <text
        x="72"
        y="31"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="700"
        fontSize="6"
        fill="#722F37"
        fillOpacity="0.3"
      >
        {data.nameJa.charAt(0)}
      </text>
      <text
        x="10"
        y="18"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.5"
        fill="#3D1A20"
      >
        {data.nameJa}
      </text>
      <text
        x="10"
        y="25"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2.2"
        letterSpacing="0.3"
        fill="#722F37"
        fontStyle="italic"
      >
        {data.nameEn}
      </text>
      <text
        x="10"
        y="33"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#8B6060"
      >
        {data.titleJa}
      </text>
      <text
        x="10"
        y="40"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#A08070"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E1" />
      {/* Small seal in top-right */}
      <circle cx="80" cy="10" r="5" fill="#722F37" fillOpacity="0.1" />
      <circle cx="80" cy="10" r="3.5" fill="none" stroke="#722F37" strokeWidth="0.2" strokeOpacity="0.25" />
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#3D1A20"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="19"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#722F37"
        fontStyle="italic"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="22" x2="55" y2="22" stroke="#722F37" strokeWidth="0.1" strokeOpacity="0.3" />
      <text
        x="10"
        y="28"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#704214"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#704214"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#704214"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#A08050"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
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
      <rect width="91" height="55" fill="#F5F0E1" />
      {/* Ticket border with rounded corners */}
      <rect x="4" y="4" width="83" height="47" rx="2" fill="none" stroke="#704214" strokeWidth="0.3" />
      {/* Perforation line (left stub) */}
      {[6, 8.5, 11, 13.5, 16, 18.5, 21, 23.5, 26, 28.5, 31, 33.5, 36, 38.5, 41, 43.5, 46, 48.5].map((y, i) => (
        <line key={`vintage-ticket-perf-${i}`} x1="22" y1={y} x2="22" y2={y + 1.5} stroke="#704214" strokeWidth="0.15" strokeOpacity="0.4" />
      ))}
      {/* Stub section */}
      <text
        x="13"
        y="22"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="700"
        fontSize="1.8"
        letterSpacing="0.2"
        fill="#704214"
        transform="rotate(-90 13 22)"
      >
        ADMIT ONE
      </text>
      {/* Main ticket content */}
      <text
        x="56"
        y="10"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="700"
        fontSize="1.2"
        letterSpacing="2"
        fill="#704214"
        fillOpacity="0.5"
      >
        No. 001
      </text>
      <text
        x="56"
        y="22"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="500"
        fontSize="6"
        letterSpacing="0.5"
        fill="#3D2008"
      >
        {data.nameJa}
      </text>
      <text
        x="56"
        y="29"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.4"
        fill="#704214"
        fontStyle="italic"
      >
        {data.nameEn}
      </text>
      <line x1="30" y1="34" x2="82" y2="34" stroke="#704214" strokeWidth="0.08" />
      <text
        x="56"
        y="39"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#8B6934"
      >
        {data.titleJa} — {data.companyJa}
      </text>
      <text
        x="56"
        y="46"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.2"
        fill="#A08050"
      >
        {data.email}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E1" />
      <rect x="4" y="4" width="83" height="47" rx="2" fill="none" stroke="#704214" strokeWidth="0.3" />
      {/* Perforation line */}
      {[6, 8.5, 11, 13.5, 16, 18.5, 21, 23.5, 26, 28.5, 31, 33.5, 36, 38.5, 41, 43.5, 46, 48.5].map((y, i) => (
        <line key={`vintage-ticket-bperf-${i}`} x1="22" y1={y} x2="22" y2={y + 1.5} stroke="#704214" strokeWidth="0.15" strokeOpacity="0.4" />
      ))}
      <text
        x="56"
        y="14"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#3D2008"
      >
        {data.companyJa}
      </text>
      <text
        x="56"
        y="19"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        textAnchor="middle"
        fill="#704214"
        fontStyle="italic"
      >
        {data.companyEn}
      </text>
      <line x1="30" y1="22" x2="82" y2="22" stroke="#704214" strokeWidth="0.08" />
      <text
        x="56"
        y="28"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#704214"
      >
        {data.tel}
      </text>
      <text
        x="56"
        y="32"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#704214"
      >
        {data.email}
      </text>
      <text
        x="56"
        y="36"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#704214"
      >
        {data.website}
      </text>
      <line x1="30" y1="40" x2="82" y2="40" stroke="#704214" strokeWidth="0.08" />
      <text
        x="56"
        y="46"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#A08050"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
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
      <rect width="91" height="55" fill="#F5F0E1" />
      {/* Ornamental frame - outer */}
      <rect x="6" y="5" width="79" height="45" rx="1" fill="none" stroke="#704214" strokeWidth="0.25" />
      {/* Inner frame */}
      <rect x="9" y="8" width="73" height="39" rx="0.5" fill="none" stroke="#704214" strokeWidth="0.12" />
      {/* Corner ornaments */}
      <path d="M 6,5 Q 8,8 6,11" stroke="#704214" strokeWidth="0.15" fill="none" strokeOpacity="0.5" />
      <path d="M 85,5 Q 83,8 85,11" stroke="#704214" strokeWidth="0.15" fill="none" strokeOpacity="0.5" />
      <path d="M 6,50 Q 8,47 6,44" stroke="#704214" strokeWidth="0.15" fill="none" strokeOpacity="0.5" />
      <path d="M 85,50 Q 83,47 85,44" stroke="#704214" strokeWidth="0.15" fill="none" strokeOpacity="0.5" />
      {/* Decorative rule above name */}
      <line x1="25" y1="14" x2="66" y2="14" stroke="#704214" strokeWidth="0.1" />
      <circle cx="25" cy="14" r="0.4" fill="#704214" />
      <circle cx="66" cy="14" r="0.4" fill="#704214" />
      <text
        x="45.5"
        y="12"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="1"
        letterSpacing="1.5"
        fill="#704214"
        fillOpacity="0.6"
      >
        ESTABLISHED
      </text>
      <text
        x="45.5"
        y="23"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.6"
        fill="#3D2008"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="29"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.4"
        fill="#704214"
        fontStyle="italic"
      >
        {data.nameEn}
      </text>
      {/* Decorative rule below name */}
      <line x1="25" y1="33" x2="66" y2="33" stroke="#704214" strokeWidth="0.1" />
      <circle cx="45.5" cy="33" r="0.5" fill="#704214" fillOpacity="0.5" />
      <text
        x="45.5"
        y="39"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#8B6934"
      >
        {data.titleJa}
      </text>
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.3"
        fill="#A08050"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E1" />
      <rect x="6" y="5" width="79" height="45" rx="1" fill="none" stroke="#704214" strokeWidth="0.25" />
      <rect x="9" y="8" width="73" height="39" rx="0.5" fill="none" stroke="#704214" strokeWidth="0.12" />
      <text
        x="45.5"
        y="16"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#3D2008"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="20.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#704214"
        fontStyle="italic"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="23" x2="71" y2="23" stroke="#704214" strokeWidth="0.08" />
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#704214"
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
        fill="#704214"
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
        fill="#704214"
      >
        {data.website}
      </text>
      <line x1="20" y1="39" x2="71" y2="39" stroke="#704214" strokeWidth="0.08" />
      <text
        x="45.5"
        y="44"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#A08050"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
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
      <rect width="91" height="55" fill="#F5F0E1" />
      {/* Stamp area with perforated edge */}
      <rect x="55" y="6" width="30" height="43" fill="#E8DDD0" />
      {/* Top perforation */}
      {[57, 60, 63, 66, 69, 72, 75, 78, 81].map((x, i) => (
        <circle key={`vintage-stamp-v-pt-${i}`} cx={x} cy="6" r="0.6" fill="#F5F0E1" />
      ))}
      {/* Bottom perforation */}
      {[57, 60, 63, 66, 69, 72, 75, 78, 81].map((x, i) => (
        <circle key={`vintage-stamp-v-pb-${i}`} cx={x} cy="49" r="0.6" fill="#F5F0E1" />
      ))}
      {/* Left perforation */}
      {[8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47].map((y, i) => (
        <circle key={`vintage-stamp-v-pl-${i}`} cx="55" cy={y} r="0.6" fill="#F5F0E1" />
      ))}
      {/* Right perforation */}
      {[8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47].map((y, i) => (
        <circle key={`vintage-stamp-v-pr-${i}`} cx="85" cy={y} r="0.6" fill="#F5F0E1" />
      ))}
      {/* Stamp inner border */}
      <rect x="58" y="9" width="24" height="37" fill="none" stroke="#2D4A3E" strokeWidth="0.15" />
      {/* Stamp denomination */}
      <text
        x="70"
        y="17"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="700"
        fontSize="4"
        fill="#2D4A3E"
        fillOpacity="0.4"
      >
        ¥
      </text>
      <text
        x="70"
        y="32"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="2.5"
        fill="#2D4A3E"
        fillOpacity="0.5"
      >
        {data.nameJa.charAt(0)}
      </text>
      <text
        x="70"
        y="42"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="400"
        fontSize="0.9"
        letterSpacing="0.5"
        fill="#2D4A3E"
        fillOpacity="0.4"
      >
        NIPPON
      </text>
      {/* Main text area */}
      <text
        x="8"
        y="18"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        letterSpacing="0.4"
        fill="#2D4A3E"
      >
        {data.nameJa}
      </text>
      <text
        x="8"
        y="25"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        fill="#4A7060"
        fontStyle="italic"
      >
        {data.nameEn}
      </text>
      <text
        x="8"
        y="33"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#6B8A7A"
      >
        {data.titleJa}
      </text>
      <text
        x="8"
        y="40"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#8BA898"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E1" />
      {/* Small stamp in corner */}
      <rect x="72" y="4" width="14" height="14" fill="#E8DDD0" />
      <rect x="74" y="6" width="10" height="10" fill="none" stroke="#2D4A3E" strokeWidth="0.1" />
      {[73, 76, 79, 82, 85].map((x, i) => (
        <circle key={`vintage-stamp-v-bpt-${i}`} cx={x} cy="4" r="0.4" fill="#F5F0E1" />
      ))}
      {[73, 76, 79, 82, 85].map((x, i) => (
        <circle key={`vintage-stamp-v-bpb-${i}`} cx={x} cy="18" r="0.4" fill="#F5F0E1" />
      ))}
      <text
        x="10"
        y="14"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#2D4A3E"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="19"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#4A7060"
        fontStyle="italic"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="22" x2="60" y2="22" stroke="#2D4A3E" strokeWidth="0.1" strokeOpacity="0.3" />
      <text
        x="10"
        y="28"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#2D4A3E"
      >
        {data.tel}
      </text>
      <text
        x="10"
        y="32"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#2D4A3E"
      >
        {data.email}
      </text>
      <text
        x="10"
        y="36"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#2D4A3E"
      >
        {data.website}
      </text>
      <text
        x="10"
        y="44"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#8BA898"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
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
      <rect width="91" height="55" fill="#F5F0E1" />
      {/* Postcard text "POST CARD" header */}
      <text
        x="45.5"
        y="8"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="700"
        fontSize="2.5"
        letterSpacing="1.5"
        fill="#704214"
        fillOpacity="0.4"
      >
        POST CARD
      </text>
      <line x1="6" y1="10" x2="85" y2="10" stroke="#704214" strokeWidth="0.15" />
      {/* Center dividing line */}
      <line x1="45.5" y1="10" x2="45.5" y2="50" stroke="#704214" strokeWidth="0.12" />
      {/* Left side - message/name */}
      <text
        x="25"
        y="24"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="5"
        fill="#3D2008"
      >
        {data.nameJa}
      </text>
      <text
        x="25"
        y="31"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.8"
        fill="#704214"
        fontStyle="italic"
      >
        {data.nameEn}
      </text>
      <text
        x="25"
        y="39"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.4"
        fill="#8B6934"
      >
        {data.titleJa}
      </text>
      {/* Right side - address lines */}
      <line x1="50" y1="22" x2="83" y2="22" stroke="#B8A080" strokeWidth="0.08" />
      <line x1="50" y1="28" x2="83" y2="28" stroke="#B8A080" strokeWidth="0.08" />
      <line x1="50" y1="34" x2="83" y2="34" stroke="#B8A080" strokeWidth="0.08" />
      <line x1="50" y1="40" x2="83" y2="40" stroke="#B8A080" strokeWidth="0.08" />
      <line x1="50" y1="46" x2="83" y2="46" stroke="#B8A080" strokeWidth="0.08" />
      {/* Stamp area */}
      <rect x="73" y="12" width="9" height="8" fill="none" stroke="#704214" strokeWidth="0.12" strokeDasharray="0.5 0.3" />
      <text
        x="77.5"
        y="17"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1"
        fill="#B8A080"
      >
        STAMP
      </text>
      {/* Company on address lines */}
      <text
        x="52"
        y="21"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.3"
        fill="#704214"
      >
        {data.companyJa}
      </text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E1" />
      <text
        x="45.5"
        y="8"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="600"
        fontSize="2"
        letterSpacing="1"
        fill="#704214"
        fillOpacity="0.3"
      >
        CORRESPONDENCE
      </text>
      <line x1="6" y1="10" x2="85" y2="10" stroke="#704214" strokeWidth="0.15" />
      <text
        x="10"
        y="18"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#3D2008"
      >
        {data.companyJa}
      </text>
      <text
        x="10"
        y="22.5"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#704214"
        fontStyle="italic"
      >
        {data.companyEn}
      </text>
      <line x1="10" y1="25" x2="81" y2="25" stroke="#B8A080" strokeWidth="0.08" />
      <text
        x="10"
        y="31"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#704214"
      >
        {data.tel}
      </text>
      <line x1="10" y1="33" x2="81" y2="33" stroke="#B8A080" strokeWidth="0.08" />
      <text
        x="10"
        y="38"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#704214"
      >
        {data.email}
      </text>
      <line x1="10" y1="40" x2="81" y2="40" stroke="#B8A080" strokeWidth="0.08" />
      <text
        x="10"
        y="45"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#704214"
      >
        {data.website}
      </text>
      <line x1="10" y1="47" x2="81" y2="47" stroke="#B8A080" strokeWidth="0.08" />
      <text
        x="10"
        y="52"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#A08050"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
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
      <rect width="91" height="55" fill="#F5F0E1" />
      {/* Decorative top ornament */}
      <path d="M 35,7 Q 38,5 41,7 Q 43,8 45.5,6 Q 48,8 50,7 Q 53,5 56,7" stroke="#722F37" strokeWidth="0.2" fill="none" strokeOpacity="0.4" />
      <circle cx="45.5" cy="6" r="0.6" fill="#722F37" fillOpacity="0.3" />
      {/* Menu header */}
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        letterSpacing="1.5"
        fill="#722F37"
        fillOpacity="0.5"
      >
        MENU
      </text>
      {/* Decorative rule */}
      <line x1="30" y1="16" x2="61" y2="16" stroke="#722F37" strokeWidth="0.08" />
      <circle cx="30" cy="16" r="0.3" fill="#722F37" fillOpacity="0.3" />
      <circle cx="61" cy="16" r="0.3" fill="#722F37" fillOpacity="0.3" />
      <text
        x="45.5"
        y="25"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="6"
        letterSpacing="0.8"
        fill="#3D1A20"
      >
        {data.nameJa}
      </text>
      <text
        x="45.5"
        y="31"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="2"
        letterSpacing="0.4"
        fill="#722F37"
        fontStyle="italic"
      >
        {data.nameEn}
      </text>
      {/* Decorative divider */}
      <line x1="30" y1="35" x2="61" y2="35" stroke="#722F37" strokeWidth="0.08" />
      <circle cx="45.5" cy="35" r="0.3" fill="#722F37" fillOpacity="0.3" />
      <text
        x="45.5"
        y="41"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.5"
        fill="#8B5060"
      >
        {data.titleJa}
      </text>
      <text
        x="45.5"
        y="46"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.3"
        fill="#A07080"
      >
        {data.companyJa}
      </text>
      {/* Bottom ornament */}
      <path d="M 35,49 Q 38,51 41,49 Q 43,48 45.5,50 Q 48,48 50,49 Q 53,51 56,49" stroke="#722F37" strokeWidth="0.2" fill="none" strokeOpacity="0.4" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E1" />
      {/* Top ornament */}
      <path d="M 35,7 Q 38,5 41,7 Q 43,8 45.5,6 Q 48,8 50,7 Q 53,5 56,7" stroke="#722F37" strokeWidth="0.2" fill="none" strokeOpacity="0.3" />
      <text
        x="45.5"
        y="15"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="400"
        fontSize="2.2"
        fill="#3D1A20"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="19.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#722F37"
        fontStyle="italic"
      >
        {data.companyEn}
      </text>
      <line x1="25" y1="22" x2="66" y2="22" stroke="#722F37" strokeWidth="0.08" />
      <text
        x="45.5"
        y="28"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#722F37"
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
        fill="#722F37"
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
        fill="#722F37"
      >
        {data.website}
      </text>
      <line x1="25" y1="39" x2="66" y2="39" stroke="#722F37" strokeWidth="0.08" />
      <text
        x="45.5"
        y="44.5"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#A07080"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
      {/* Bottom ornament */}
      <path d="M 35,49 Q 38,51 41,49 Q 43,48 45.5,50 Q 48,48 50,49 Q 53,51 56,49" stroke="#722F37" strokeWidth="0.2" fill="none" strokeOpacity="0.3" />
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
      <rect width="91" height="55" fill="#F5F0E1" />
      {/* Heavy top border */}
      <rect x="5" y="4" width="81" height="2.5" fill="#1A1A1A" />
      {/* Thin rules */}
      <line x1="5" y1="8" x2="86" y2="8" stroke="#1A1A1A" strokeWidth="0.15" />
      <text
        x="45.5"
        y="7.5"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="700"
        fontSize="1.2"
        letterSpacing="2"
        fill="#F5F0E1"
      >
        PLAYBILL
      </text>
      {/* Main title */}
      <text
        x="45.5"
        y="19"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="700"
        fontSize="7"
        letterSpacing="0.5"
        fill="#1A1A1A"
      >
        {data.nameJa}
      </text>
      {/* Decorative line */}
      <line x1="15" y1="22" x2="76" y2="22" stroke="#1A1A1A" strokeWidth="0.12" />
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="600"
        fontSize="2.2"
        letterSpacing="0.6"
        fill="#1A1A1A"
      >
        {data.nameEn.toUpperCase()}
      </text>
      {/* Cast/role info */}
      <line x1="25" y1="31" x2="66" y2="31" stroke="#1A1A1A" strokeWidth="0.08" />
      <text
        x="45.5"
        y="36"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        fill="#555555"
        fontStyle="italic"
      >
        {data.titleJa}
      </text>
      <text
        x="45.5"
        y="41"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="300"
        fontSize="1.4"
        fill="#777777"
      >
        {data.companyJa}
      </text>
      {/* Bottom heavy border */}
      <line x1="5" y1="47" x2="86" y2="47" stroke="#1A1A1A" strokeWidth="0.15" />
      <rect x="5" y="48.5" width="81" height="2.5" fill="#1A1A1A" />
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <rect width="91" height="55" fill="#F5F0E1" />
      {/* Top border matching front */}
      <rect x="5" y="4" width="81" height="1.5" fill="#1A1A1A" />
      <line x1="5" y1="7" x2="86" y2="7" stroke="#1A1A1A" strokeWidth="0.1" />
      <text
        x="45.5"
        y="14"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="700"
        fontSize="2.5"
        letterSpacing="0.4"
        fill="#1A1A1A"
      >
        {data.companyJa}
      </text>
      <text
        x="45.5"
        y="18.5"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.5"
        letterSpacing="0.3"
        fill="#555555"
        fontStyle="italic"
      >
        {data.companyEn}
      </text>
      <line x1="20" y1="21" x2="71" y2="21" stroke="#1A1A1A" strokeWidth="0.08" />
      <text
        x="45.5"
        y="27"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="1.4"
        fill="#333333"
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
        fill="#333333"
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
        fill="#333333"
      >
        {data.website}
      </text>
      <line x1="20" y1="38" x2="71" y2="38" stroke="#1A1A1A" strokeWidth="0.08" />
      <text
        x="45.5"
        y="43"
        textAnchor="middle"
        fontFamily="'Noto Sans JP', sans-serif"
        fontWeight="200"
        fontSize="1.2"
        fill="#777777"
      >
        〒{data.zipCode} {data.addressJa}
      </text>
      {/* Bottom border */}
      <line x1="5" y1="47" x2="86" y2="47" stroke="#1A1A1A" strokeWidth="0.1" />
      <rect x="5" y="48.5" width="81" height="1.5" fill="#1A1A1A" />
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
