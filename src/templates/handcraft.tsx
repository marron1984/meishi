import type { CardData, TemplateDefinition } from '../types';

// ============================================================
// 1. STAMP (印) — Rubber stamp/hanko inspired
// Circular stamp mark, slightly imperfect edges, kraft colors
// ============================================================
const stampTemplate: TemplateDefinition = {
  id: 'handcraft-stamp',
  name: 'STAMP',
  nameJa: '印',
  category: 'handcraft',
  designer: 'Handcraft Series',
  description: '朱肉の印。丸い印鑑がぽんと押された温かみ。',
  accentColor: '#C75C2E',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="hc-stamp-f-bg" x1="0" y1="0" x2="0.1" y2="1">
          <stop offset="0%" stopColor="#F8F0E5" />
          <stop offset="50%" stopColor="#F5EDE3" />
          <stop offset="100%" stopColor="#EDE3D5" />
        </linearGradient>
        <filter id="hc-stamp-f-paper">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" stitchTiles="stitch" result="fiber" />
          <feColorMatrix type="saturate" values="0" in="fiber" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="hc-stamp-f-rough">
          <feTurbulence type="turbulence" baseFrequency="0.4" numOctaves="3" result="rough" />
          <feDisplacementMap in="SourceGraphic" in2="rough" scale="0.4" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="hc-stamp-f-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
          <feOffset dx="0.1" dy="0.15" />
          <feFlood floodColor="#5C3D2E" floodOpacity="0.06" />
          <feComposite operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="91" height="55" fill="url(#hc-stamp-f-bg)" />
      <rect width="91" height="55" filter="url(#hc-stamp-f-paper)" opacity="0.03" fill="transparent" />
      <line x1="0" y1="8" x2="91" y2="8" stroke="#E8DDD0" strokeWidth="0.15" />
      <line x1="0" y1="32" x2="91" y2="32" stroke="#E5D8C8" strokeWidth="0.1" />
      <line x1="0" y1="50" x2="91" y2="50" stroke="#E8DDD0" strokeWidth="0.12" />
      <g filter="url(#hc-stamp-f-rough)">
        <circle cx="72" cy="18" r="10" fill="none" stroke="#C75C2E" strokeWidth="0.6" opacity="0.75" />
        <circle cx="72" cy="18" r="7" fill="none" stroke="#C75C2E" strokeWidth="0.12" opacity="0.5" />
      </g>
      <text x="72" y="17" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="4" fill="#C75C2E" opacity="0.8">{data.nameJa.charAt(0)}</text>
      <text x="72" y="21.5" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="1.6" fill="#C75C2E" opacity="0.6">印</text>
      {data.logo && <image href={data.logo} x="74" y="38" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.45" />}
      <g filter="url(#hc-stamp-f-shadow)">
        <text x="10" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6.5" letterSpacing="0.4" fill="#5C3D2E">{data.nameJa}</text>
      </g>
      <text x="10" y="28" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.8" letterSpacing="0.2" fill="#8B6F5E">{data.nameEn}</text>
      <line x1="10" y1="32.5" x2="52" y2="32.5" stroke="#C75C2E" strokeWidth="0.1" opacity="0.3" />
      <text x="10" y="38" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#A68B7B">{data.titleJa}</text>
      <text x="10" y="46" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#B5A090">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="hc-stamp-b-paper">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" stitchTiles="stitch" result="fiber" />
          <feColorMatrix type="saturate" values="0" in="fiber" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
        <filter id="hc-stamp-b-rough">
          <feTurbulence type="turbulence" baseFrequency="0.4" numOctaves="3" result="rough" />
          <feDisplacementMap in="SourceGraphic" in2="rough" scale="0.4" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
      <rect width="91" height="55" fill="#F5EDE3" />
      <rect width="91" height="55" filter="url(#hc-stamp-b-paper)" opacity="0.03" fill="transparent" />
      <line x1="0" y1="15" x2="91" y2="15" stroke="#E8DDD0" strokeWidth="0.1" />
      <line x1="0" y1="42" x2="91" y2="42" stroke="#E5D8C8" strokeWidth="0.12" />
      <g filter="url(#hc-stamp-b-rough)">
        <circle cx="82" cy="8" r="3.5" fill="none" stroke="#C75C2E" strokeWidth="0.35" opacity="0.45" />
      </g>
      <text x="82" y="9.2" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="2" fill="#C75C2E" opacity="0.5">印</text>
      {data.logo && <image href={data.logo} x="10" y="6" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.45" />}
      <text x="81" y="19" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" fill="#5C3D2E">{data.companyJa}</text>
      <text x="81" y="23.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#A68B7B">{data.companyEn}</text>
      <text x="81" y="27.5" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#A68B7B">{data.titleJa}</text>
      <line x1="40" y1="30" x2="81" y2="30" stroke="#C75C2E" strokeWidth="0.08" opacity="0.25" />
      <text x="81" y="35" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#8B6F5E">{data.tel}</text>
      <text x="81" y="39" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#8B6F5E">{data.email}</text>
      <text x="81" y="43" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#8B6F5E">{data.website}</text>
      <text x="81" y="49" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#B5A090">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 2. WASHI (和紙) — Japanese handmade paper
// ============================================================
const washiTemplate: TemplateDefinition = { id: 'handcraft-washi', name: 'WASHI', nameJa: '和紙', category: 'handcraft', designer: 'Handcraft Series', description: '手漉き和紙。繊維の風合いが優しく触れる指に伝わる。', accentColor: '#274472',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="hc-washi-f-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#F8F5F0" /><stop offset="40%" stopColor="#F5F0E8" /><stop offset="100%" stopColor="#EDE8DE" /></linearGradient>
        <filter id="hc-washi-f-paper"><feTurbulence type="fractalNoise" baseFrequency="0.02 0.08" numOctaves="6" stitchTiles="stitch" result="fiber" /><feColorMatrix type="saturate" values="0" in="fiber" result="gray" /><feBlend mode="multiply" in="SourceGraphic" in2="gray" /></filter>
        <filter id="hc-washi-f-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.25" /><feOffset dx="0.08" dy="0.12" /><feFlood floodColor="#274472" floodOpacity="0.06" /><feComposite operator="in" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <rect width="91" height="55" fill="url(#hc-washi-f-bg)" />
      <rect width="91" height="55" filter="url(#hc-washi-f-paper)" opacity="0.04" fill="transparent" />
      <path d="M0,12 C20,10 40,15 60,11 C75,9 85,13 91,12" fill="none" stroke="#DDD5C8" strokeWidth="0.3" />
      <path d="M0,35 C15,37 35,33 55,36 C70,38 80,34 91,35" fill="none" stroke="#E0D8CB" strokeWidth="0.25" />
      <path d="M0,48 C25,46 50,50 75,47 C85,46 88,48 91,48" fill="none" stroke="#DDD5C8" strokeWidth="0.2" />
      <rect x="0" y="0" width="3" height="55" fill="#274472" opacity="0.08" />
      <line x1="3" y1="0" x2="3" y2="55" stroke="#274472" strokeWidth="0.1" opacity="0.15" />
      {data.logo && <image href={data.logo} x="74" y="6" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
      <g filter="url(#hc-washi-f-shadow)"><text x="12" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="6.5" letterSpacing="0.8" fill="#274472">{data.nameJa}</text></g>
      <text x="12" y="28" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.8" letterSpacing="0.3" fill="#5A7AA0">{data.nameEn}</text>
      <text x="12" y="37" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#7A9ABB">{data.titleJa}</text>
      <text x="12" y="45" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#9AB0C8">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="hc-washi-b-paper"><feTurbulence type="fractalNoise" baseFrequency="0.02 0.08" numOctaves="6" stitchTiles="stitch" result="fiber" /><feColorMatrix type="saturate" values="0" in="fiber" result="gray" /><feBlend mode="multiply" in="SourceGraphic" in2="gray" /></filter>
      </defs>
      <rect width="91" height="55" fill="#F5F0E8" />
      <rect width="91" height="55" filter="url(#hc-washi-b-paper)" opacity="0.04" fill="transparent" />
      <path d="M0,20 C30,18 60,22 91,20" fill="none" stroke="#DDD5C8" strokeWidth="0.25" />
      <path d="M0,40 C25,42 55,38 91,40" fill="none" stroke="#E0D8CB" strokeWidth="0.2" />
      <rect x="88" y="0" width="3" height="55" fill="#274472" opacity="0.08" />
      <line x1="88" y1="0" x2="88" y2="55" stroke="#274472" strokeWidth="0.1" opacity="0.15" />
      {data.logo && <image href={data.logo} x="10" y="6" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
      <text x="81" y="14" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" fill="#274472">{data.companyJa}</text>
      <text x="81" y="18.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#7A9ABB">{data.companyEn}</text>
      <text x="81" y="22.5" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#7A9ABB">{data.titleJa}</text>
      <line x1="40" y1="25.5" x2="81" y2="25.5" stroke="#274472" strokeWidth="0.08" opacity="0.2" />
      <text x="81" y="30.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#4A6A8E">{data.tel}</text>
      <text x="81" y="34.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#4A6A8E">{data.email}</text>
      <text x="81" y="38.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#4A6A8E">{data.website}</text>
      <text x="81" y="47" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#9AB0C8">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 3. STITCH (縫) — Hand-stitched embroidery feel
// ============================================================
const stitchTemplate: TemplateDefinition = { id: 'handcraft-stitch', name: 'STITCH', nameJa: '縫', category: 'handcraft', designer: 'Handcraft Series', description: '針と糸。点線の縫い目が温かな手仕事の記憶を運ぶ。', accentColor: '#8B4513',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="hc-stitch-f-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#F8F0E5" /><stop offset="100%" stopColor="#F0E5D5" /></linearGradient>
        <filter id="hc-stitch-f-paper"><feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="4" stitchTiles="stitch" result="fiber" /><feColorMatrix type="saturate" values="0" in="fiber" result="gray" /><feBlend mode="multiply" in="SourceGraphic" in2="gray" /></filter>
        <filter id="hc-stitch-f-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.3" /><feOffset dx="0.1" dy="0.15" /><feFlood floodColor="#5C3210" floodOpacity="0.06" /><feComposite operator="in" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <rect width="91" height="55" fill="url(#hc-stitch-f-bg)" />
      <rect width="91" height="55" filter="url(#hc-stitch-f-paper)" opacity="0.025" fill="transparent" />
      <line x1="6" y1="6" x2="85" y2="6" stroke="#8B4513" strokeWidth="0.2" strokeDasharray="1.5 1" opacity="0.3" />
      <line x1="6" y1="49" x2="85" y2="49" stroke="#8B4513" strokeWidth="0.2" strokeDasharray="1.5 1" opacity="0.3" />
      <line x1="6" y1="6" x2="6" y2="49" stroke="#8B4513" strokeWidth="0.2" strokeDasharray="1.5 1" opacity="0.3" />
      <line x1="85" y1="6" x2="85" y2="49" stroke="#8B4513" strokeWidth="0.2" strokeDasharray="1.5 1" opacity="0.3" />
      <line x1="5" y1="5" x2="7" y2="7" stroke="#8B4513" strokeWidth="0.2" opacity="0.25" />
      <line x1="7" y1="5" x2="5" y2="7" stroke="#8B4513" strokeWidth="0.2" opacity="0.25" />
      <line x1="84" y1="48" x2="86" y2="50" stroke="#8B4513" strokeWidth="0.2" opacity="0.25" />
      <line x1="86" y1="48" x2="84" y2="50" stroke="#8B4513" strokeWidth="0.2" opacity="0.25" />
      {data.logo && <image href={data.logo} x="73" y="8" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.45" />}
      <g filter="url(#hc-stitch-f-shadow)"><text x="12" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6" letterSpacing="0.4" fill="#5C3210">{data.nameJa}</text></g>
      <text x="12" y="28" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.8" letterSpacing="0.2" fill="#8B6545">{data.nameEn}</text>
      <line x1="12" y1="33" x2="50" y2="33" stroke="#8B4513" strokeWidth="0.15" strokeDasharray="1 0.8" opacity="0.2" />
      <text x="12" y="38" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#A08060">{data.titleJa}</text>
      <text x="12" y="45" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#B8A080">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs><filter id="hc-stitch-b-paper"><feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="4" stitchTiles="stitch" result="fiber" /><feColorMatrix type="saturate" values="0" in="fiber" result="gray" /><feBlend mode="multiply" in="SourceGraphic" in2="gray" /></filter></defs>
      <rect width="91" height="55" fill="#F5EDE3" />
      <rect width="91" height="55" filter="url(#hc-stitch-b-paper)" opacity="0.025" fill="transparent" />
      <line x1="6" y1="6" x2="85" y2="6" stroke="#8B4513" strokeWidth="0.2" strokeDasharray="1.5 1" opacity="0.25" />
      <line x1="6" y1="49" x2="85" y2="49" stroke="#8B4513" strokeWidth="0.2" strokeDasharray="1.5 1" opacity="0.25" />
      <line x1="6" y1="6" x2="6" y2="49" stroke="#8B4513" strokeWidth="0.2" strokeDasharray="1.5 1" opacity="0.25" />
      <line x1="85" y1="6" x2="85" y2="49" stroke="#8B4513" strokeWidth="0.2" strokeDasharray="1.5 1" opacity="0.25" />
      <line x1="84" y1="5" x2="86" y2="7" stroke="#8B4513" strokeWidth="0.2" opacity="0.2" />
      <line x1="86" y1="5" x2="84" y2="7" stroke="#8B4513" strokeWidth="0.2" opacity="0.2" />
      {data.logo && <image href={data.logo} x="10" y="8" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.45" />}
      <text x="79" y="14" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" fill="#5C3210">{data.companyJa}</text>
      <text x="79" y="18.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#A08060">{data.companyEn}</text>
      <text x="79" y="22.5" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#A08060">{data.titleJa}</text>
      <line x1="40" y1="25.5" x2="79" y2="25.5" stroke="#8B4513" strokeWidth="0.1" strokeDasharray="1 0.8" opacity="0.2" />
      <text x="79" y="30.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#8B6545">{data.tel}</text>
      <text x="79" y="34.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#8B6545">{data.email}</text>
      <text x="79" y="38.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#8B6545">{data.website}</text>
      <text x="79" y="46" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#B8A080">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 4. PRESS (刷) — Letterpress printing
// ============================================================
const pressTemplate: TemplateDefinition = { id: 'handcraft-press', name: 'PRESS', nameJa: '刷', category: 'handcraft', designer: 'Handcraft Series', description: '活版印刷の凹み。文字が紙に深く刻まれた質感。', accentColor: '#1A1A2E',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="hc-press-f-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#FBF8F4" /><stop offset="100%" stopColor="#F5F0E8" /></linearGradient>
        <filter id="hc-press-f-paper"><feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="5" stitchTiles="stitch" result="fiber" /><feColorMatrix type="saturate" values="0" in="fiber" result="gray" /><feBlend mode="multiply" in="SourceGraphic" in2="gray" /></filter>
        <filter id="hc-press-f-deboss"><feGaussianBlur in="SourceAlpha" stdDeviation="0.15" /><feOffset dx="0.06" dy="0.08" /><feFlood floodColor="#1A1A2E" floodOpacity="0.12" /><feComposite operator="in" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <rect width="91" height="55" fill="url(#hc-press-f-bg)" />
      <rect width="91" height="55" filter="url(#hc-press-f-paper)" opacity="0.03" fill="transparent" />
      <rect x="8" y="14" width="50" height="10" fill="#1A1A2E" opacity="0.02" rx="0.5" />
      <rect x="8" y="27.5" width="30" height="0.3" fill="#1A1A2E" opacity="0.08" />
      <circle cx="84" cy="6" r="1.5" fill="none" stroke="#1A1A2E" strokeWidth="0.08" opacity="0.15" />
      <line x1="84" y1="4" x2="84" y2="8" stroke="#1A1A2E" strokeWidth="0.06" opacity="0.15" />
      <line x1="82" y1="6" x2="86" y2="6" stroke="#1A1A2E" strokeWidth="0.06" opacity="0.15" />
      {data.logo && <image href={data.logo} x="74" y="40" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
      <g filter="url(#hc-press-f-deboss)"><text x="10" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="7" letterSpacing="0.3" fill="#1A1A2E">{data.nameJa}</text></g>
      <text x="10" y="28" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="2" letterSpacing="0.4" fill="#1A1A2E" opacity="0.7">{data.nameEn.toUpperCase()}</text>
      <text x="10" y="37" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#4A4A5E">{data.titleJa}</text>
      <text x="10" y="45" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#6A6A7E">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs><filter id="hc-press-b-paper"><feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="5" stitchTiles="stitch" result="fiber" /><feColorMatrix type="saturate" values="0" in="fiber" result="gray" /><feBlend mode="multiply" in="SourceGraphic" in2="gray" /></filter></defs>
      <rect width="91" height="55" fill="#F8F5F0" />
      <rect width="91" height="55" filter="url(#hc-press-b-paper)" opacity="0.03" fill="transparent" />
      <rect x="8" y="8.5" width="35" height="0.3" fill="#1A1A2E" opacity="0.06" />
      <circle cx="7" cy="49" r="1.5" fill="none" stroke="#1A1A2E" strokeWidth="0.08" opacity="0.12" />
      <line x1="7" y1="47" x2="7" y2="51" stroke="#1A1A2E" strokeWidth="0.06" opacity="0.12" />
      <line x1="5" y1="49" x2="9" y2="49" stroke="#1A1A2E" strokeWidth="0.06" opacity="0.12" />
      {data.logo && <image href={data.logo} x="10" y="6" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
      <text x="83" y="14" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="2.2" fill="#1A1A2E">{data.companyJa}</text>
      <text x="83" y="18.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.4" letterSpacing="0.2" fill="#1A1A2E" opacity="0.6">{data.companyEn}</text>
      <text x="83" y="22.5" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#4A4A5E">{data.titleJa}</text>
      <line x1="45" y1="25.5" x2="83" y2="25.5" stroke="#1A1A2E" strokeWidth="0.12" opacity="0.12" />
      <text x="83" y="30.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#2A2A3E">{data.tel}</text>
      <text x="83" y="34.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#2A2A3E">{data.email}</text>
      <text x="83" y="38.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#2A2A3E">{data.website}</text>
      <text x="83" y="46" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#6A6A7E">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 5. WOODCUT (版) — Woodblock print style
// ============================================================
const woodcutTemplate: TemplateDefinition = { id: 'handcraft-woodcut', name: 'WOODCUT', nameJa: '版', category: 'handcraft', designer: 'Handcraft Series', description: '木版画。彫刻刀で削り出された力強い線と面。', accentColor: '#4A2C17',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="hc-woodcut-f-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#FAF5EC" /><stop offset="100%" stopColor="#F2E8D8" /></linearGradient>
        <filter id="hc-woodcut-f-paper"><feTurbulence type="fractalNoise" baseFrequency="0.03 0.06" numOctaves="5" stitchTiles="stitch" result="fiber" /><feColorMatrix type="saturate" values="0" in="fiber" result="gray" /><feBlend mode="multiply" in="SourceGraphic" in2="gray" /></filter>
        <filter id="hc-woodcut-f-rough"><feTurbulence type="turbulence" baseFrequency="0.5" numOctaves="3" result="rough" /><feDisplacementMap in="SourceGraphic" in2="rough" scale="0.3" xChannelSelector="R" yChannelSelector="G" /></filter>
        <filter id="hc-woodcut-f-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.35" /><feOffset dx="0.12" dy="0.18" /><feFlood floodColor="#4A2C17" floodOpacity="0.08" /><feComposite operator="in" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <rect width="91" height="55" fill="url(#hc-woodcut-f-bg)" />
      <rect width="91" height="55" filter="url(#hc-woodcut-f-paper)" opacity="0.035" fill="transparent" />
      <g filter="url(#hc-woodcut-f-rough)"><rect x="0" y="0" width="91" height="8" fill="#4A2C17" opacity="0.05" /><rect x="0" y="42" width="91" height="13" fill="#4A2C17" opacity="0.04" /></g>
      <line x1="0" y1="8" x2="91" y2="8" stroke="#4A2C17" strokeWidth="0.4" opacity="0.12" />
      <line x1="0" y1="42" x2="91" y2="42" stroke="#4A2C17" strokeWidth="0.3" opacity="0.1" />
      <line x1="80" y1="3" x2="82" y2="5" stroke="#4A2C17" strokeWidth="0.15" opacity="0.15" />
      <line x1="82" y1="3" x2="80" y2="5" stroke="#4A2C17" strokeWidth="0.15" opacity="0.15" />
      {data.logo && <image href={data.logo} x="74" y="44" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
      <g filter="url(#hc-woodcut-f-shadow)"><text x="10" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="6.5" letterSpacing="0.3" fill="#4A2C17">{data.nameJa}</text></g>
      <text x="10" y="28" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.8" letterSpacing="0.2" fill="#7A5C40">{data.nameEn}</text>
      <text x="10" y="36" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#9A7E60">{data.titleJa}</text>
      <text x="10" y="46" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.5" fill="#F2E8D8">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs><filter id="hc-woodcut-b-paper"><feTurbulence type="fractalNoise" baseFrequency="0.03 0.06" numOctaves="5" stitchTiles="stitch" result="fiber" /><feColorMatrix type="saturate" values="0" in="fiber" result="gray" /><feBlend mode="multiply" in="SourceGraphic" in2="gray" /></filter></defs>
      <rect width="91" height="55" fill="#F5EDE0" />
      <rect width="91" height="55" filter="url(#hc-woodcut-b-paper)" opacity="0.035" fill="transparent" />
      <rect x="0" y="0" width="91" height="8" fill="#4A2C17" opacity="0.04" />
      <rect x="0" y="47" width="91" height="8" fill="#4A2C17" opacity="0.04" />
      <line x1="0" y1="8" x2="91" y2="8" stroke="#4A2C17" strokeWidth="0.3" opacity="0.1" />
      <line x1="0" y1="47" x2="91" y2="47" stroke="#4A2C17" strokeWidth="0.25" opacity="0.08" />
      {data.logo && <image href={data.logo} x="10" y="8" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
      <text x="81" y="16" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="2.2" fill="#4A2C17">{data.companyJa}</text>
      <text x="81" y="20.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="1.4" fill="#7A5C40">{data.companyEn}</text>
      <text x="81" y="24.5" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#9A7E60">{data.titleJa}</text>
      <line x1="40" y1="27.5" x2="81" y2="27.5" stroke="#4A2C17" strokeWidth="0.1" opacity="0.12" />
      <text x="81" y="32.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#6A4A30">{data.tel}</text>
      <text x="81" y="36.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#6A4A30">{data.email}</text>
      <text x="81" y="40.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#6A4A30">{data.website}</text>
      <text x="81" y="50" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#F5EDE0">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 6. LINO (彫) — Linocut print style
// ============================================================
const linoTemplate: TemplateDefinition = { id: 'handcraft-lino', name: 'LINO', nameJa: '彫', category: 'handcraft', designer: 'Handcraft Series', description: 'リノカット。彫り出した面がインクで力強く紙に転写される。', accentColor: '#274472',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="hc-lino-f-paper"><feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="4" stitchTiles="stitch" result="fiber" /><feColorMatrix type="saturate" values="0" in="fiber" result="gray" /><feBlend mode="multiply" in="SourceGraphic" in2="gray" /></filter>
        <filter id="hc-lino-f-rough"><feTurbulence type="turbulence" baseFrequency="0.6" numOctaves="2" result="rough" /><feDisplacementMap in="SourceGraphic" in2="rough" scale="0.5" xChannelSelector="R" yChannelSelector="G" /></filter>
        <filter id="hc-lino-f-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.3" /><feOffset dx="0.1" dy="0.15" /><feFlood floodColor="#274472" floodOpacity="0.08" /><feComposite operator="in" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <rect width="91" height="55" fill="#FAF6F0" />
      <rect width="91" height="55" filter="url(#hc-lino-f-paper)" opacity="0.03" fill="transparent" />
      <g filter="url(#hc-lino-f-rough)"><rect x="60" y="5" width="28" height="25" fill="#274472" opacity="0.08" rx="0.5" /></g>
      <line x1="63" y1="10" x2="85" y2="10" stroke="#FAF6F0" strokeWidth="0.15" opacity="0.3" />
      <line x1="63" y1="15" x2="85" y2="15" stroke="#FAF6F0" strokeWidth="0.12" opacity="0.25" />
      <line x1="63" y1="20" x2="85" y2="20" stroke="#FAF6F0" strokeWidth="0.15" opacity="0.3" />
      <line x1="63" y1="25" x2="85" y2="25" stroke="#FAF6F0" strokeWidth="0.1" opacity="0.2" />
      {data.logo && <image href={data.logo} x="65" y="10" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
      <g filter="url(#hc-lino-f-shadow)"><text x="8" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="6.5" letterSpacing="0.4" fill="#274472">{data.nameJa}</text></g>
      <text x="8" y="28.5" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.8" letterSpacing="0.3" fill="#4A6A90">{data.nameEn}</text>
      <text x="8" y="37" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#6A8AB0">{data.titleJa}</text>
      <text x="8" y="45" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#8AAAC8">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs><filter id="hc-lino-b-paper"><feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="4" stitchTiles="stitch" result="fiber" /><feColorMatrix type="saturate" values="0" in="fiber" result="gray" /><feBlend mode="multiply" in="SourceGraphic" in2="gray" /></filter></defs>
      <rect width="91" height="55" fill="#FAF6F0" />
      <rect width="91" height="55" filter="url(#hc-lino-b-paper)" opacity="0.03" fill="transparent" />
      <rect x="3" y="25" width="28" height="27" fill="#274472" opacity="0.06" rx="0.5" />
      <line x1="6" y1="30" x2="28" y2="30" stroke="#FAF6F0" strokeWidth="0.12" opacity="0.25" />
      <line x1="6" y1="38" x2="28" y2="38" stroke="#FAF6F0" strokeWidth="0.1" opacity="0.2" />
      <line x1="6" y1="46" x2="28" y2="46" stroke="#FAF6F0" strokeWidth="0.12" opacity="0.25" />
      {data.logo && <image href={data.logo} x="7" y="31" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
      <text x="83" y="12" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="600" fontSize="2.2" fill="#274472">{data.companyJa}</text>
      <text x="83" y="16.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fill="#6A8AB0">{data.companyEn}</text>
      <text x="83" y="20.5" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#6A8AB0">{data.titleJa}</text>
      <line x1="45" y1="23.5" x2="83" y2="23.5" stroke="#274472" strokeWidth="0.1" opacity="0.15" />
      <text x="83" y="28.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#3A5A7E">{data.tel}</text>
      <text x="83" y="32.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#3A5A7E">{data.email}</text>
      <text x="83" y="36.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#3A5A7E">{data.website}</text>
      <text x="83" y="46" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#8AAAC8">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 7. BRUSH (筆) — Calligraphic brush stroke
// ============================================================
const brushTemplate: TemplateDefinition = { id: 'handcraft-brush', name: 'BRUSH', nameJa: '筆', category: 'handcraft', designer: 'Handcraft Series', description: '筆の一閃。墨の飛沫と筆跡が紙面に生命を吹き込む。', accentColor: '#2D2D2D',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="hc-brush-f-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#FBF8F2" /><stop offset="100%" stopColor="#F5EFE5" /></linearGradient>
        <filter id="hc-brush-f-paper"><feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" stitchTiles="stitch" result="fiber" /><feColorMatrix type="saturate" values="0" in="fiber" result="gray" /><feBlend mode="multiply" in="SourceGraphic" in2="gray" /></filter>
        <filter id="hc-brush-f-rough"><feTurbulence type="turbulence" baseFrequency="0.3" numOctaves="2" result="rough" /><feDisplacementMap in="SourceGraphic" in2="rough" scale="0.6" xChannelSelector="R" yChannelSelector="G" /></filter>
        <filter id="hc-brush-f-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.4" /><feOffset dx="0.15" dy="0.2" /><feFlood floodColor="#2D2D2D" floodOpacity="0.08" /><feComposite operator="in" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <rect width="91" height="55" fill="url(#hc-brush-f-bg)" />
      <rect width="91" height="55" filter="url(#hc-brush-f-paper)" opacity="0.03" fill="transparent" />
      <g filter="url(#hc-brush-f-rough)"><path d="M5,38 Q20,35 45,37 Q65,39 85,36" fill="none" stroke="#2D2D2D" strokeWidth="2" opacity="0.06" strokeLinecap="round" /></g>
      <circle cx="78" cy="8" r="0.5" fill="#2D2D2D" opacity="0.08" />
      <circle cx="82" cy="10" r="0.25" fill="#2D2D2D" opacity="0.06" />
      <circle cx="76" cy="12" r="0.35" fill="#2D2D2D" opacity="0.05" />
      {data.logo && <image href={data.logo} x="74" y="40" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
      <g filter="url(#hc-brush-f-shadow)"><text x="10" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="8" letterSpacing="0.3" fill="#2D2D2D">{data.nameJa}</text></g>
      <text x="10" y="29" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.8" letterSpacing="0.2" fill="#5A5A5A">{data.nameEn}</text>
      <text x="10" y="42" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#7A7A7A">{data.titleJa}</text>
      <text x="10" y="49" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.6" fill="#9A9A9A">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="hc-brush-b-paper"><feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" stitchTiles="stitch" result="fiber" /><feColorMatrix type="saturate" values="0" in="fiber" result="gray" /><feBlend mode="multiply" in="SourceGraphic" in2="gray" /></filter>
        <filter id="hc-brush-b-rough"><feTurbulence type="turbulence" baseFrequency="0.3" numOctaves="2" result="rough" /><feDisplacementMap in="SourceGraphic" in2="rough" scale="0.6" xChannelSelector="R" yChannelSelector="G" /></filter>
      </defs>
      <rect width="91" height="55" fill="#F8F5EE" />
      <rect width="91" height="55" filter="url(#hc-brush-b-paper)" opacity="0.03" fill="transparent" />
      <g filter="url(#hc-brush-b-rough)"><path d="M5,15 Q25,12 50,14 Q70,16 86,13" fill="none" stroke="#2D2D2D" strokeWidth="1.5" opacity="0.04" strokeLinecap="round" /></g>
      <circle cx="12" cy="45" r="0.4" fill="#2D2D2D" opacity="0.06" />
      <circle cx="15" cy="47" r="0.2" fill="#2D2D2D" opacity="0.04" />
      {data.logo && <image href={data.logo} x="10" y="6" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
      <text x="83" y="10" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="2.5" fill="#2D2D2D">{data.companyJa}</text>
      <text x="83" y="14.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.4" fill="#7A7A7A">{data.companyEn}</text>
      <text x="83" y="22" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="300" fontSize="1.3" fill="#7A7A7A">{data.titleJa}</text>
      <line x1="45" y1="25" x2="83" y2="25" stroke="#2D2D2D" strokeWidth="0.1" opacity="0.1" />
      <text x="83" y="30" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#4A4A4A">{data.tel}</text>
      <text x="83" y="34" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#4A4A4A">{data.email}</text>
      <text x="83" y="38" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="1.5" fill="#4A4A4A">{data.website}</text>
      <text x="83" y="46" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#9A9A9A">〒{data.zipCode}</text>
      <text x="83" y="49.5" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#9A9A9A">{data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 8. WEAVE (織) — Woven textile pattern
// ============================================================
const weaveTemplate: TemplateDefinition = { id: 'handcraft-weave', name: 'WEAVE', nameJa: '織', category: 'handcraft', designer: 'Handcraft Series', description: '織物の経緯。縦糸と横糸が交差して生まれる布目の美。', accentColor: '#7B6B5E',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="hc-weave-f-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#F8F3EC" /><stop offset="100%" stopColor="#F0E8DD" /></linearGradient>
        <filter id="hc-weave-f-paper"><feTurbulence type="fractalNoise" baseFrequency="0.08 0.04" numOctaves="4" stitchTiles="stitch" result="fiber" /><feColorMatrix type="saturate" values="0" in="fiber" result="gray" /><feBlend mode="multiply" in="SourceGraphic" in2="gray" /></filter>
        <filter id="hc-weave-f-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.25" /><feOffset dx="0.08" dy="0.12" /><feFlood floodColor="#5A4A3E" floodOpacity="0.06" /><feComposite operator="in" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <rect width="91" height="55" fill="url(#hc-weave-f-bg)" />
      <rect width="91" height="55" filter="url(#hc-weave-f-paper)" opacity="0.03" fill="transparent" />
      <g opacity="0.06">
        <line x1="65" y1="0" x2="65" y2="55" stroke="#7B6B5E" strokeWidth="0.3" /><line x1="68" y1="0" x2="68" y2="55" stroke="#8B7B6E" strokeWidth="0.25" /><line x1="71" y1="0" x2="71" y2="55" stroke="#7B6B5E" strokeWidth="0.3" /><line x1="74" y1="0" x2="74" y2="55" stroke="#8B7B6E" strokeWidth="0.25" /><line x1="77" y1="0" x2="77" y2="55" stroke="#7B6B5E" strokeWidth="0.3" /><line x1="80" y1="0" x2="80" y2="55" stroke="#8B7B6E" strokeWidth="0.25" /><line x1="83" y1="0" x2="83" y2="55" stroke="#7B6B5E" strokeWidth="0.3" /><line x1="86" y1="0" x2="86" y2="55" stroke="#8B7B6E" strokeWidth="0.25" /><line x1="89" y1="0" x2="89" y2="55" stroke="#7B6B5E" strokeWidth="0.3" />
        <line x1="63" y1="5" x2="91" y2="5" stroke="#9B8B7E" strokeWidth="0.25" /><line x1="63" y1="10" x2="91" y2="10" stroke="#8B7B6E" strokeWidth="0.3" /><line x1="63" y1="15" x2="91" y2="15" stroke="#9B8B7E" strokeWidth="0.25" /><line x1="63" y1="20" x2="91" y2="20" stroke="#8B7B6E" strokeWidth="0.3" /><line x1="63" y1="25" x2="91" y2="25" stroke="#9B8B7E" strokeWidth="0.25" /><line x1="63" y1="30" x2="91" y2="30" stroke="#8B7B6E" strokeWidth="0.3" /><line x1="63" y1="35" x2="91" y2="35" stroke="#9B8B7E" strokeWidth="0.25" /><line x1="63" y1="40" x2="91" y2="40" stroke="#8B7B6E" strokeWidth="0.3" /><line x1="63" y1="45" x2="91" y2="45" stroke="#9B8B7E" strokeWidth="0.25" /><line x1="63" y1="50" x2="91" y2="50" stroke="#8B7B6E" strokeWidth="0.3" />
      </g>
      {data.logo && <image href={data.logo} x="70" y="6" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.3" />}
      <g filter="url(#hc-weave-f-shadow)"><text x="10" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="6" letterSpacing="0.5" fill="#5A4A3E">{data.nameJa}</text></g>
      <text x="10" y="28" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.8" letterSpacing="0.3" fill="#7B6B5E">{data.nameEn}</text>
      <text x="10" y="36" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#9B8B7E">{data.titleJa}</text>
      <text x="10" y="44" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#ADA09A">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs><filter id="hc-weave-b-paper"><feTurbulence type="fractalNoise" baseFrequency="0.08 0.04" numOctaves="4" stitchTiles="stitch" result="fiber" /><feColorMatrix type="saturate" values="0" in="fiber" result="gray" /><feBlend mode="multiply" in="SourceGraphic" in2="gray" /></filter></defs>
      <rect width="91" height="55" fill="#F5EDE3" />
      <rect width="91" height="55" filter="url(#hc-weave-b-paper)" opacity="0.03" fill="transparent" />
      <g opacity="0.05">
        <line x1="2" y1="0" x2="2" y2="55" stroke="#7B6B5E" strokeWidth="0.3" /><line x1="5" y1="0" x2="5" y2="55" stroke="#8B7B6E" strokeWidth="0.25" /><line x1="8" y1="0" x2="8" y2="55" stroke="#7B6B5E" strokeWidth="0.3" /><line x1="11" y1="0" x2="11" y2="55" stroke="#8B7B6E" strokeWidth="0.25" /><line x1="14" y1="0" x2="14" y2="55" stroke="#7B6B5E" strokeWidth="0.3" />
        <line x1="0" y1="5" x2="28" y2="5" stroke="#9B8B7E" strokeWidth="0.25" /><line x1="0" y1="10" x2="28" y2="10" stroke="#8B7B6E" strokeWidth="0.3" /><line x1="0" y1="15" x2="28" y2="15" stroke="#9B8B7E" strokeWidth="0.25" /><line x1="0" y1="20" x2="28" y2="20" stroke="#8B7B6E" strokeWidth="0.3" /><line x1="0" y1="25" x2="28" y2="25" stroke="#9B8B7E" strokeWidth="0.25" /><line x1="0" y1="30" x2="28" y2="30" stroke="#8B7B6E" strokeWidth="0.3" /><line x1="0" y1="35" x2="28" y2="35" stroke="#9B8B7E" strokeWidth="0.25" /><line x1="0" y1="40" x2="28" y2="40" stroke="#8B7B6E" strokeWidth="0.3" /><line x1="0" y1="45" x2="28" y2="45" stroke="#9B8B7E" strokeWidth="0.25" /><line x1="0" y1="50" x2="28" y2="50" stroke="#8B7B6E" strokeWidth="0.3" />
      </g>
      {data.logo && <image href={data.logo} x="5" y="6" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.3" />}
      <text x="81" y="14" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" fill="#5A4A3E">{data.companyJa}</text>
      <text x="81" y="18.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#9B8B7E">{data.companyEn}</text>
      <text x="81" y="22.5" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#9B8B7E">{data.titleJa}</text>
      <line x1="40" y1="25.5" x2="81" y2="25.5" stroke="#ADA09A" strokeWidth="0.12" />
      <text x="81" y="30.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#7B6B5E">{data.tel}</text>
      <text x="81" y="34.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#7B6B5E">{data.email}</text>
      <text x="81" y="38.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#7B6B5E">{data.website}</text>
      <text x="81" y="47" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#ADA09A">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 9. CLAY (土) — Terracotta ceramic texture
// ============================================================
const clayTemplate: TemplateDefinition = { id: 'handcraft-clay', name: 'CLAY', nameJa: '土', category: 'handcraft', designer: 'Handcraft Series', description: '土の温もり。テラコッタ色が大地の記憶を呼び覚ます。', accentColor: '#C17950',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="hc-clay-f-bg" x1="0" y1="0" x2="0.1" y2="1"><stop offset="0%" stopColor="#F5EBE0" /><stop offset="40%" stopColor="#F0E2D4" /><stop offset="100%" stopColor="#E8D8C8" /></linearGradient>
        <filter id="hc-clay-f-paper"><feTurbulence type="fractalNoise" baseFrequency="0.06 0.03" numOctaves="5" stitchTiles="stitch" result="fiber" /><feColorMatrix type="saturate" values="0" in="fiber" result="gray" /><feBlend mode="multiply" in="SourceGraphic" in2="gray" /></filter>
        <filter id="hc-clay-f-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.25" /><feOffset dx="0.08" dy="0.12" /><feFlood floodColor="#8A5030" floodOpacity="0.06" /><feComposite operator="in" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <rect width="91" height="55" fill="url(#hc-clay-f-bg)" />
      <rect width="91" height="55" filter="url(#hc-clay-f-paper)" opacity="0.04" fill="transparent" />
      <circle cx="75" cy="12" r="8" fill="#C17950" opacity="0.05" />
      <circle cx="80" cy="8" r="5" fill="#D08A60" opacity="0.04" />
      <circle cx="70" cy="18" r="4" fill="#B06840" opacity="0.03" />
      <path d="M65,45 Q70,43 75,46 Q80,48 85,45" fill="none" stroke="#C17950" strokeWidth="0.12" opacity="0.15" />
      {data.logo && <image href={data.logo} x="74" y="38" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.45" />}
      <g filter="url(#hc-clay-f-shadow)"><text x="10" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="6" letterSpacing="0.4" fill="#8A5030">{data.nameJa}</text></g>
      <text x="10" y="28" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.8" letterSpacing="0.25" fill="#C17950">{data.nameEn}</text>
      <text x="10" y="37" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#D0906A">{data.titleJa}</text>
      <text x="10" y="45" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.6" fill="#DDA888">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs><filter id="hc-clay-b-paper"><feTurbulence type="fractalNoise" baseFrequency="0.06 0.03" numOctaves="5" stitchTiles="stitch" result="fiber" /><feColorMatrix type="saturate" values="0" in="fiber" result="gray" /><feBlend mode="multiply" in="SourceGraphic" in2="gray" /></filter></defs>
      <rect width="91" height="55" fill="#F0E2D4" />
      <rect width="91" height="55" filter="url(#hc-clay-b-paper)" opacity="0.04" fill="transparent" />
      <circle cx="18" cy="44" r="7" fill="#C17950" opacity="0.04" />
      <circle cx="12" cy="48" r="4" fill="#D08A60" opacity="0.03" />
      <path d="M6,10 Q12,8 18,11 Q24,13 30,10" fill="none" stroke="#C17950" strokeWidth="0.1" opacity="0.12" />
      {data.logo && <image href={data.logo} x="10" y="6" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.45" />}
      <text x="81" y="14" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="500" fontSize="2.2" fill="#8A5030">{data.companyJa}</text>
      <text x="81" y="18.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#D0906A">{data.companyEn}</text>
      <text x="81" y="22.5" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#D0906A">{data.titleJa}</text>
      <line x1="40" y1="25.5" x2="81" y2="25.5" stroke="#C17950" strokeWidth="0.08" opacity="0.2" />
      <text x="81" y="30.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#A06840">{data.tel}</text>
      <text x="81" y="34.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#A06840">{data.email}</text>
      <text x="81" y="38.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#A06840">{data.website}</text>
      <text x="81" y="47" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#DDA888">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

// ============================================================
// 10. KNOT (結) — Decorative knot/rope pattern
// ============================================================
const knotTemplate: TemplateDefinition = { id: 'handcraft-knot', name: 'KNOT', nameJa: '結', category: 'handcraft', designer: 'Handcraft Series', description: '結び目。紐が絡み合い、縁を結ぶ吉祥の文様。', accentColor: '#5C6E4E',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <linearGradient id="hc-knot-f-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#F8F5EE" /><stop offset="100%" stopColor="#F0EBE0" /></linearGradient>
        <filter id="hc-knot-f-paper"><feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="4" stitchTiles="stitch" result="fiber" /><feColorMatrix type="saturate" values="0" in="fiber" result="gray" /><feBlend mode="multiply" in="SourceGraphic" in2="gray" /></filter>
        <filter id="hc-knot-f-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.25" /><feOffset dx="0.08" dy="0.12" /><feFlood floodColor="#3A4A30" floodOpacity="0.06" /><feComposite operator="in" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <rect width="91" height="55" fill="url(#hc-knot-f-bg)" />
      <rect width="91" height="55" filter="url(#hc-knot-f-paper)" opacity="0.025" fill="transparent" />
      <g opacity="0.12">
        <path d="M72,10 Q76,6 80,10 Q84,14 80,18 Q76,22 72,18 Q68,14 72,10 Z" fill="none" stroke="#5C6E4E" strokeWidth="0.3" />
        <path d="M70,14 Q74,10 78,14 Q82,18 78,22 Q74,26 70,22 Q66,18 70,14 Z" fill="none" stroke="#6B7E5E" strokeWidth="0.25" />
        <path d="M73,12 L77,16" stroke="#5C6E4E" strokeWidth="0.15" />
        <path d="M77,12 L73,16" stroke="#5C6E4E" strokeWidth="0.15" />
      </g>
      {data.logo && <image href={data.logo} x="74" y="38" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
      <g filter="url(#hc-knot-f-shadow)"><text x="10" y="22" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="6" letterSpacing="0.5" fill="#3A4A30">{data.nameJa}</text></g>
      <text x="10" y="28" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.8" letterSpacing="0.3" fill="#6B7E5E">{data.nameEn}</text>
      <line x1="10" y1="32" x2="55" y2="32" stroke="#B5C0A8" strokeWidth="0.15" />
      <text x="10" y="38" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#8B9E78">{data.titleJa}</text>
      <text x="10" y="45" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.5" fill="#A0B090">{data.companyJa}</text>
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs><filter id="hc-knot-b-paper"><feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="4" stitchTiles="stitch" result="fiber" /><feColorMatrix type="saturate" values="0" in="fiber" result="gray" /><feBlend mode="multiply" in="SourceGraphic" in2="gray" /></filter></defs>
      <rect width="91" height="55" fill="#F5F0E5" />
      <rect width="91" height="55" filter="url(#hc-knot-b-paper)" opacity="0.025" fill="transparent" />
      <g opacity="0.1">
        <path d="M12,38 Q16,34 20,38 Q24,42 20,46 Q16,50 12,46 Q8,42 12,38 Z" fill="none" stroke="#5C6E4E" strokeWidth="0.25" />
        <path d="M14,40 L18,44" stroke="#5C6E4E" strokeWidth="0.12" />
        <path d="M18,40 L14,44" stroke="#5C6E4E" strokeWidth="0.12" />
      </g>
      {data.logo && <image href={data.logo} x="10" y="6" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
      <text x="81" y="14" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="400" fontSize="2.2" fill="#3A4A30">{data.companyJa}</text>
      <text x="81" y="18.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.4" fill="#8B9E78">{data.companyEn}</text>
      <text x="81" y="22.5" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.3" fill="#8B9E78">{data.titleJa}</text>
      <line x1="40" y1="25.5" x2="81" y2="25.5" stroke="#B5C0A8" strokeWidth="0.12" />
      <text x="81" y="30.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#6B7E5E">{data.tel}</text>
      <text x="81" y="34.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#6B7E5E">{data.email}</text>
      <text x="81" y="38.5" textAnchor="end" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="1.5" fill="#6B7E5E">{data.website}</text>
      <text x="81" y="47" textAnchor="end" fontFamily="'Noto Sans JP', sans-serif" fontWeight="200" fontSize="1.2" fill="#A0B090">〒{data.zipCode} {data.addressJa}</text>
    </g>
  ),
};

export const handcraftTemplates: TemplateDefinition[] = [
  stampTemplate,
  washiTemplate,
  stitchTemplate,
  pressTemplate,
  woodcutTemplate,
  linoTemplate,
  brushTemplate,
  weaveTemplate,
  clayTemplate,
  knotTemplate,
];
