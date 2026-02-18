import type { CardData, TemplateDefinition } from '../types';

const EN = "'Inter', sans-serif";
const JA = "'Noto Sans JP', sans-serif";

// ============================================================
// 1. BAUHAUS (造) — Walter Gropius inspired
// Primary colors, geometric shapes, functional typography
// ============================================================
const bauhausTemplate: TemplateDefinition = {
  id: 'artistic-bauhaus',
  name: 'BAUHAUS',
  nameJa: '造',
  category: 'artistic',
  designer: 'Walter Gropius',
  description: '原色と幾何学形態。バウハウスの機能美が宿る名刺。',
  accentColor: '#E60012',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="art-bauhaus-paper"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="art-bauhaus-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.3" result="blur"/><feOffset dx="0.1" dy="0.15" result="shifted"/><feFlood floodColor="#000" floodOpacity="0.08" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <linearGradient id="art-bauhaus-red" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#E60012"/><stop offset="100%" stopColor="#CC000E"/></linearGradient>
      </defs>
      <rect width="91" height="55" fill="#F5F0E8" filter="url(#art-bauhaus-paper)" />
      <rect x="0" y="0" width="28" height="18" fill="url(#art-bauhaus-red)" />
      <rect x="28" y="0" width="14" height="18" fill="#FFD700" />
      <circle cx="78" cy="12" r="9" fill="#0057B8" opacity="0.85" />
      <rect x="0" y="18" width="5" height="37" fill="#1A1A1A" />
      <line x1="10" y1="32" x2="65" y2="32" stroke="#1A1A1A" strokeWidth="0.5" />
      <polygon points="74,46 82,46 78,40" fill="#FFD700" opacity="0.7" />
      <circle cx="65" cy="8" r="0.5" fill="#1A1A1A" opacity="0.2" />
      <text x="10" y="28" fontFamily={JA} fontWeight="700" fontSize="6.5" fill="#1A1A1A" filter="url(#art-bauhaus-shadow)">{data.nameJa}</text>
      <text x="10" y="38" fontFamily={EN} fontWeight="600" fontSize="2.2" letterSpacing="0.4" fill="#1A1A1A">{data.nameEn.toUpperCase()}</text>
      <text x="10" y="43" fontFamily={JA} fontWeight="400" fontSize="1.8" fill="#555555">{data.titleJa}</text>
      <text x="10" y="47" fontFamily={EN} fontWeight="300" fontSize="1.4" fill="#777777">{data.titleEn}</text>
      <text x="10" y="52" fontFamily={JA} fontWeight="400" fontSize="1.3" fill="#888888">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="76" y="40" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="art-bauhaus-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
      </defs>
      <rect width="91" height="55" fill="#F5F0E8" filter="url(#art-bauhaus-paper-b)" />
      <rect x="0" y="0" width="91" height="8" fill="#1A1A1A" />
      <rect x="0" y="8" width="30" height="3.5" fill="#E60012" />
      <rect x="30" y="8" width="20" height="3.5" fill="#FFD700" />
      <rect x="50" y="8" width="41" height="3.5" fill="#0057B8" />
      <circle cx="84" cy="48" r="3" fill="#E60012" opacity="0.15" />
      <rect x="80" y="42" width="0.3" height="8" fill="#1A1A1A" opacity="0.1" />
      <text x="8" y="5.5" fontFamily={JA} fontWeight="700" fontSize="2.8" fill="#FFFFFF">{data.companyJa}</text>
      <text x="8" y="17" fontFamily={EN} fontWeight="600" fontSize="2" letterSpacing="0.4" fill="#1A1A1A">{data.companyEn.toUpperCase()}</text>
      <text x="8" y="21" fontFamily={JA} fontWeight="300" fontSize="1.5" fill="#888888">{data.titleJa}</text>
      <line x1="8" y1="24" x2="83" y2="24" stroke="#1A1A1A" strokeWidth="0.3" />
      <text x="8" y="29" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#333333">TEL {data.tel}</text>
      <text x="8" y="33" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#333333">{data.email}</text>
      <text x="8" y="37" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#333333">{data.website}</text>
      <line x1="8" y1="40" x2="60" y2="40" stroke="#E60012" strokeWidth="0.2" />
      <text x="8" y="44.5" fontFamily={JA} fontWeight="300" fontSize="1.2" fill="#666666">〒{data.zipCode}</text>
      <text x="8" y="48" fontFamily={JA} fontWeight="300" fontSize="1.2" fill="#666666">{data.addressJa}</text>
      <text x="8" y="51.5" fontFamily={EN} fontWeight="300" fontSize="1.1" fill="#999999">{data.addressEn}</text>
      {data.logo && <image href={data.logo} x="72" y="14" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
    </g>
  ),
};

// ============================================================
// 2. DADA (壊) — Hannah Höch inspired
// Collage aesthetic, overlapping rotated elements, chaos
// ============================================================
const dadaTemplate: TemplateDefinition = {
  id: 'artistic-dada',
  name: 'DADA',
  nameJa: '壊',
  category: 'artistic',
  designer: 'Hannah Höch',
  description: '秩序の破壊。コラージュのように重なる情報の断片。',
  accentColor: '#D4380D',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="art-dada-paper"><feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="5" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="art-dada-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.35" result="blur"/><feOffset dx="0.12" dy="0.18" result="shifted"/><feFlood floodColor="#000" floodOpacity="0.1" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <rect width="91" height="55" fill="#F2EDE4" filter="url(#art-dada-paper)" />
      <rect x="12" y="5" width="35" height="14" fill="#D4380D" opacity="0.12" transform="rotate(-3, 29.5, 12)" />
      <rect x="50" y="30" width="30" height="18" fill="#2B5EA7" opacity="0.08" transform="rotate(5, 65, 39)" />
      <line x1="0" y1="25" x2="91" y2="22" stroke="#D4380D" strokeWidth="0.3" opacity="0.35" />
      <line x1="60" y1="0" x2="55" y2="55" stroke="#2B5EA7" strokeWidth="0.2" opacity="0.15" />
      <circle cx="82" cy="8" r="2.5" fill="none" stroke="#D4380D" strokeWidth="0.3" opacity="0.25" />
      <rect x="5" y="42" width="8" height="8" fill="none" stroke="#2B5EA7" strokeWidth="0.25" opacity="0.18" transform="rotate(-8, 9, 46)" />
      <text x="12" y="18" fontFamily={JA} fontWeight="700" fontSize="7" fill="#1A1A1A" filter="url(#art-dada-shadow)" transform="rotate(-2, 12, 18)">{data.nameJa}</text>
      <text x="14" y="28" fontFamily={EN} fontWeight="600" fontSize="2.2" letterSpacing="0.5" fill="#D4380D" transform="rotate(1, 14, 28)">{data.nameEn.toUpperCase()}</text>
      <text x="10" y="37" fontFamily={JA} fontWeight="300" fontSize="1.8" fill="#666666" transform="rotate(-1, 10, 37)">{data.titleJa}</text>
      <text x="10" y="41" fontFamily={EN} fontWeight="200" fontSize="1.4" fill="#888888">{data.titleEn}</text>
      <text x="60" y="50" fontFamily={JA} fontWeight="400" fontSize="1.3" fill="#999999" transform="rotate(2, 60, 50)">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="76" y="38" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.45" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="art-dada-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="5" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
      </defs>
      <rect width="91" height="55" fill="#F2EDE4" filter="url(#art-dada-paper-b)" />
      <rect x="5" y="3" width="40" height="10" fill="#D4380D" opacity="0.1" transform="rotate(2, 25, 8)" />
      <rect x="40" y="35" width="35" height="12" fill="#2B5EA7" opacity="0.08" transform="rotate(-3, 57, 41)" />
      <circle cx="15" cy="45" r="3" fill="none" stroke="#D4380D" strokeWidth="0.25" opacity="0.2" />
      <line x1="30" y1="0" x2="28" y2="55" stroke="#D4380D" strokeWidth="0.15" opacity="0.12" />
      <text x="8" y="10" fontFamily={JA} fontWeight="600" fontSize="2.2" fill="#1A1A1A" transform="rotate(-1, 8, 10)">{data.companyJa}</text>
      <text x="8" y="15" fontFamily={EN} fontWeight="400" fontSize="1.5" letterSpacing="0.3" fill="#D4380D" transform="rotate(1, 8, 15)">{data.companyEn}</text>
      <text x="8" y="19" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#999999">{data.titleJa}</text>
      <line x1="8" y1="22" x2="83" y2="21" stroke="#1A1A1A" strokeWidth="0.2" />
      <text x="8" y="27" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#444444" transform="rotate(-0.5, 8, 27)">TEL {data.tel}</text>
      <text x="8" y="31" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#444444">{data.email}</text>
      <text x="8" y="35" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#444444" transform="rotate(0.5, 8, 35)">{data.website}</text>
      <line x1="8" y1="38" x2="83" y2="38.5" stroke="#D4380D" strokeWidth="0.2" />
      <text x="8" y="43" fontFamily={JA} fontWeight="300" fontSize="1.2" fill="#777777">〒{data.zipCode}</text>
      <text x="8" y="46.5" fontFamily={JA} fontWeight="300" fontSize="1.2" fill="#777777">{data.addressJa}</text>
      <text x="8" y="50" fontFamily={EN} fontWeight="300" fontSize="1.1" fill="#999999">{data.addressEn}</text>
      {data.logo && <image href={data.logo} x="74" y="5" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
    </g>
  ),
};

// ============================================================
// 3. POP (弾) — Andy Warhol inspired
// Bold colors, halftone dots, graphic outlines
// ============================================================
const popTemplate: TemplateDefinition = {
  id: 'artistic-pop',
  name: 'POP',
  nameJa: '弾',
  category: 'artistic',
  designer: 'Andy Warhol',
  description: '大胆な色彩とポップな輪郭。ウォーホル的エネルギー。',
  accentColor: '#FF1493',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="art-pop-paper"><feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="art-pop-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.35" result="blur"/><feOffset dx="0.15" dy="0.2" result="shifted"/><feFlood floodColor="#000" floodOpacity="0.1" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <pattern id="art-pop-halftone" width="2" height="2" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="0.35" fill="#FF1493" opacity="0.06" /></pattern>
        <linearGradient id="art-pop-grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#FFE500"/><stop offset="100%" stopColor="#FFD000"/></linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#art-pop-grad)" filter="url(#art-pop-paper)" />
      <rect width="91" height="55" fill="url(#art-pop-halftone)" />
      <rect x="0" y="0" width="91" height="3" fill="#FF1493" />
      <rect x="0" y="52" width="91" height="3" fill="#FF1493" />
      <circle cx="78" cy="12" r="5" fill="#00BFFF" opacity="0.35" />
      <circle cx="78" cy="12" r="5" fill="none" stroke="#FF1493" strokeWidth="0.4" opacity="0.5" />
      <rect x="65" y="38" width="20" height="10" rx="1" fill="#FF1493" opacity="0.08" />
      <text x="8" y="20" fontFamily={JA} fontWeight="900" fontSize="7" fill="#FF1493" filter="url(#art-pop-shadow)">{data.nameJa}</text>
      <text x="8" y="20" fontFamily={JA} fontWeight="900" fontSize="7" fill="none" stroke="#1A1A1A" strokeWidth="0.15">{data.nameJa}</text>
      <text x="8" y="27" fontFamily={EN} fontWeight="700" fontSize="2.5" letterSpacing="0.3" fill="#1A1A1A">{data.nameEn.toUpperCase()}</text>
      <text x="8" y="33" fontFamily={JA} fontWeight="400" fontSize="2" fill="#CC1177">{data.titleJa}</text>
      <text x="8" y="37" fontFamily={EN} fontWeight="300" fontSize="1.5" fill="#CC1177">{data.titleEn}</text>
      <rect x="8" y="42" width="25" height="0.4" fill="#FF1493" opacity="0.4" />
      <text x="8" y="48" fontFamily={JA} fontWeight="500" fontSize="1.3" fill="#1A1A1A">{data.companyJa}</text>
      <text x="8" y="51.5" fontFamily={EN} fontWeight="300" fontSize="1.2" fill="#666666">{data.companyEn}</text>
      {data.logo && <image href={data.logo} x="76" y="40" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="art-pop-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <pattern id="art-pop-halftone-b" width="2.5" height="2.5" patternUnits="userSpaceOnUse"><circle cx="1.25" cy="1.25" r="0.4" fill="#FF1493" opacity="0.05" /></pattern>
      </defs>
      <rect width="91" height="55" fill="#FFE500" filter="url(#art-pop-paper-b)" />
      <rect width="91" height="55" fill="url(#art-pop-halftone-b)" />
      <rect x="0" y="0" width="91" height="3" fill="#FF1493" />
      <rect x="0" y="52" width="91" height="3" fill="#FF1493" />
      <circle cx="15" cy="12" r="4" fill="#00BFFF" opacity="0.25" />
      <circle cx="80" cy="44" r="3" fill="#FF1493" opacity="0.12" />
      <text x="45.5" y="14" textAnchor="middle" fontFamily={JA} fontWeight="700" fontSize="2.8" fill="#FF1493">{data.companyJa}</text>
      <text x="45.5" y="19" textAnchor="middle" fontFamily={EN} fontWeight="600" fontSize="1.8" letterSpacing="0.3" fill="#1A1A1A">{data.companyEn.toUpperCase()}</text>
      <text x="45.5" y="23" textAnchor="middle" fontFamily={JA} fontWeight="300" fontSize="1.4" fill="#CC1177">{data.titleJa}</text>
      <line x1="15" y1="26" x2="76" y2="26" stroke="#FF1493" strokeWidth="0.3" />
      <text x="45.5" y="31" textAnchor="middle" fontFamily={EN} fontWeight="500" fontSize="1.5" fill="#1A1A1A">TEL {data.tel}</text>
      <text x="45.5" y="35" textAnchor="middle" fontFamily={EN} fontWeight="500" fontSize="1.5" fill="#1A1A1A">{data.email}</text>
      <text x="45.5" y="39" textAnchor="middle" fontFamily={EN} fontWeight="500" fontSize="1.5" fill="#1A1A1A">{data.website}</text>
      <line x1="15" y1="42" x2="76" y2="42" stroke="#FF1493" strokeWidth="0.3" />
      <text x="45.5" y="46.5" textAnchor="middle" fontFamily={JA} fontWeight="300" fontSize="1.2" fill="#666666">〒{data.zipCode}</text>
      <text x="45.5" y="49.5" textAnchor="middle" fontFamily={JA} fontWeight="300" fontSize="1.2" fill="#666666">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="74" y="6" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.45" />}
    </g>
  ),
};

// ============================================================
// 4. ABSTRACT (象) — Kandinsky inspired
// Free-form shapes, warm & cool contrasts
// ============================================================
const abstractTemplate: TemplateDefinition = {
  id: 'artistic-abstract',
  name: 'ABSTRACT',
  nameJa: '象',
  category: 'artistic',
  designer: 'Kandinsky',
  description: '色と形の交響曲。カンディンスキーの抽象世界。',
  accentColor: '#1B4D8E',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="art-abstract-paper"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="art-abstract-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.25" result="blur"/><feOffset dx="0.08" dy="0.12" result="shifted"/><feFlood floodColor="#000" floodOpacity="0.07" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <radialGradient id="art-abstract-warm" cx="20%" cy="30%" r="40%"><stop offset="0%" stopColor="#E8A040" stopOpacity="0.25"/><stop offset="100%" stopColor="#E8A040" stopOpacity="0"/></radialGradient>
      </defs>
      <rect width="91" height="55" fill="#FDF8F0" filter="url(#art-abstract-paper)" />
      <rect width="91" height="55" fill="url(#art-abstract-warm)" />
      <circle cx="72" cy="14" r="8" fill="#1B4D8E" opacity="0.15" />
      <circle cx="72" cy="14" r="4.5" fill="#1B4D8E" opacity="0.12" />
      <circle cx="72" cy="14" r="1.5" fill="#1B4D8E" opacity="0.3" />
      <polygon points="15,5 22,5 18.5,12" fill="#E8A040" opacity="0.3" />
      <line x1="6" y1="42" x2="35" y2="42" stroke="#C0392B" strokeWidth="0.3" opacity="0.3" />
      <line x1="28" y1="38" x2="28" y2="48" stroke="#1B4D8E" strokeWidth="0.2" opacity="0.2" />
      <circle cx="84" cy="45" r="2" fill="#C0392B" opacity="0.12" />
      <rect x="80" y="5" width="5" height="3" fill="#E8A040" opacity="0.15" rx="0.3" />
      <text x="8" y="24" fontFamily={JA} fontWeight="500" fontSize="6" letterSpacing="0.3" fill="#2C1810" filter="url(#art-abstract-shadow)">{data.nameJa}</text>
      <text x="8" y="30" fontFamily={EN} fontWeight="300" fontSize="2" letterSpacing="0.3" fill="#1B4D8E">{data.nameEn}</text>
      <text x="8" y="36" fontFamily={JA} fontWeight="300" fontSize="1.8" fill="#8B7355">{data.titleJa}</text>
      <text x="8" y="40" fontFamily={EN} fontWeight="200" fontSize="1.4" fill="#8B7355">{data.titleEn}</text>
      <text x="8" y="49" fontFamily={JA} fontWeight="400" fontSize="1.3" fill="#C0392B" opacity="0.6">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="76" y="40" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.45" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="art-abstract-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <radialGradient id="art-abstract-cool" cx="80%" cy="70%" r="50%"><stop offset="0%" stopColor="#1B4D8E" stopOpacity="0.12"/><stop offset="100%" stopColor="transparent"/></radialGradient>
      </defs>
      <rect width="91" height="55" fill="#FDF8F0" filter="url(#art-abstract-paper-b)" />
      <rect width="91" height="55" fill="url(#art-abstract-cool)" />
      <circle cx="78" cy="8" r="5" fill="#C0392B" opacity="0.08" />
      <polygon points="8,3 15,3 11.5,9" fill="#1B4D8E" opacity="0.15" />
      <circle cx="20" cy="48" r="2.5" fill="#E8A040" opacity="0.12" />
      <text x="8" y="14" fontFamily={JA} fontWeight="500" fontSize="2.2" fill="#2C1810">{data.companyJa}</text>
      <text x="8" y="18.5" fontFamily={EN} fontWeight="300" fontSize="1.5" letterSpacing="0.2" fill="#1B4D8E">{data.companyEn}</text>
      <text x="8" y="22" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#8B7355">{data.titleJa}</text>
      <line x1="8" y1="25" x2="60" y2="25" stroke="#C0392B" strokeWidth="0.15" opacity="0.3" />
      <text x="8" y="30" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#4A3728">TEL {data.tel}</text>
      <text x="8" y="34" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#4A3728">{data.email}</text>
      <text x="8" y="38" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#4A3728">{data.website}</text>
      <line x1="8" y1="41" x2="60" y2="41" stroke="#1B4D8E" strokeWidth="0.15" opacity="0.25" />
      <text x="8" y="45.5" fontFamily={JA} fontWeight="300" fontSize="1.2" fill="#8B7355">〒{data.zipCode}</text>
      <text x="8" y="49" fontFamily={JA} fontWeight="300" fontSize="1.2" fill="#8B7355">{data.addressJa}</text>
      <text x="8" y="52" fontFamily={EN} fontWeight="300" fontSize="1.1" fill="#8B7355">{data.addressEn}</text>
      {data.logo && <image href={data.logo} x="74" y="6" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
    </g>
  ),
};

// ============================================================
// 5. CONSTRUCTIVIST (構) — El Lissitzky inspired
// Red/black, diagonal compositions, bold geometric
// ============================================================
const constructivistTemplate: TemplateDefinition = {
  id: 'artistic-constructivist',
  name: 'CONSTRUCTIVIST',
  nameJa: '構',
  category: 'artistic',
  designer: 'El Lissitzky',
  description: '赤と黒の革命。斜めの力強い構成が空間を支配する。',
  accentColor: '#CC0000',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="art-construct-paper"><feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="5" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="art-construct-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.3" result="blur"/><feOffset dx="0.12" dy="0.15" result="shifted"/><feFlood floodColor="#000" floodOpacity="0.1" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <rect width="91" height="55" fill="#F0E8D8" filter="url(#art-construct-paper)" />
      <polygon points="0,0 45,0 25,55 0,55" fill="#CC0000" opacity="0.85" />
      <polygon points="0,0 45,0 25,55 0,55" fill="none" stroke="#880000" strokeWidth="0.15" opacity="0.3" />
      <rect x="48" y="15" width="35" height="0.6" fill="#1A1A1A" transform="rotate(-12, 65.5, 15.3)" />
      <circle cx="82" cy="8" r="3.5" fill="#1A1A1A" opacity="0.8" />
      <circle cx="82" cy="8" r="2.2" fill="#CC0000" opacity="0.4" />
      <rect x="50" y="40" width="4" height="4" fill="#1A1A1A" opacity="0.15" transform="rotate(12, 52, 42)" />
      <text x="5" y="22" fontFamily={JA} fontWeight="700" fontSize="6.5" fill="#FFFFFF" filter="url(#art-construct-shadow)">{data.nameJa}</text>
      <text x="50" y="27" fontFamily={EN} fontWeight="700" fontSize="2.5" letterSpacing="0.4" fill="#1A1A1A">{data.nameEn.toUpperCase()}</text>
      <text x="50" y="33" fontFamily={JA} fontWeight="400" fontSize="2" fill="#CC0000">{data.titleJa}</text>
      <text x="50" y="37" fontFamily={EN} fontWeight="300" fontSize="1.5" fill="#555555">{data.titleEn}</text>
      <text x="5" y="40" fontFamily={JA} fontWeight="300" fontSize="1.5" fill="rgba(255,255,255,0.7)">{data.companyJa}</text>
      <text x="5" y="48" fontFamily={EN} fontWeight="300" fontSize="1.2" fill="rgba(255,255,255,0.5)">{data.companyEn}</text>
      {data.logo && <image href={data.logo} x="76" y="42" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.5" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="art-construct-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="5" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
      </defs>
      <rect width="91" height="55" fill="#F0E8D8" filter="url(#art-construct-paper-b)" />
      <polygon points="91,0 46,0 66,55 91,55" fill="#1A1A1A" opacity="0.85" />
      <rect x="5" y="20" width="35" height="0.5" fill="#CC0000" transform="rotate(8, 22.5, 20)" />
      <circle cx="10" cy="8" r="2.5" fill="#CC0000" opacity="0.2" />
      <rect x="30" y="42" width="3" height="3" fill="#CC0000" opacity="0.12" transform="rotate(-10, 31.5, 43.5)" />
      <text x="8" y="12" fontFamily={JA} fontWeight="600" fontSize="2.5" fill="#1A1A1A">{data.companyJa}</text>
      <text x="8" y="17" fontFamily={EN} fontWeight="400" fontSize="1.5" letterSpacing="0.3" fill="#CC0000">{data.companyEn}</text>
      <text x="8" y="21" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#888888">{data.titleJa}</text>
      <line x1="8" y1="24" x2="42" y2="24" stroke="#CC0000" strokeWidth="0.25" />
      <text x="8" y="29" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#444444">TEL {data.tel}</text>
      <text x="8" y="33" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#444444">{data.email}</text>
      <text x="8" y="37" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#444444">{data.website}</text>
      <line x1="8" y1="40" x2="42" y2="40" stroke="#1A1A1A" strokeWidth="0.15" />
      <text x="8" y="44.5" fontFamily={JA} fontWeight="300" fontSize="1.2" fill="#777777">〒{data.zipCode}</text>
      <text x="8" y="48" fontFamily={JA} fontWeight="300" fontSize="1.2" fill="#777777">{data.addressJa}</text>
      <text x="72" y="16" fontFamily={EN} fontWeight="300" fontSize="1.1" fill="rgba(255,255,255,0.5)">{data.addressEn}</text>
      {data.logo && <image href={data.logo} x="73" y="38" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.35" />}
    </g>
  ),
};

// ============================================================
// 6. MEMPHIS (遊) — Ettore Sottsass inspired
// Pastel shapes, squiggly lines, playful geometry
// ============================================================
const memphisTemplate: TemplateDefinition = {
  id: 'artistic-memphis',
  name: 'MEMPHIS',
  nameJa: '遊',
  category: 'artistic',
  designer: 'Ettore Sottsass',
  description: '遊び心のメンフィス。パステルと幾何学の祝祭。',
  accentColor: '#FF6B9D',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="art-memphis-paper"><feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="art-memphis-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.25" result="blur"/><feOffset dx="0.1" dy="0.12" result="shifted"/><feFlood floodColor="#000" floodOpacity="0.06" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <pattern id="art-memphis-confetti" width="8" height="8" patternUnits="userSpaceOnUse"><rect x="1" y="2" width="0.8" height="0.3" fill="#FF6B9D" opacity="0.15" transform="rotate(30, 1.4, 2.15)"/><rect x="5" y="5" width="0.8" height="0.3" fill="#50C4E8" opacity="0.15" transform="rotate(-20, 5.4, 5.15)"/><rect x="3" y="7" width="0.8" height="0.3" fill="#FFD700" opacity="0.12" transform="rotate(60, 3.4, 7.15)"/></pattern>
      </defs>
      <rect width="91" height="55" fill="#FFF5F8" filter="url(#art-memphis-paper)" />
      <rect width="91" height="55" fill="url(#art-memphis-confetti)" />
      <circle cx="78" cy="10" r="5" fill="#50C4E8" opacity="0.25" />
      <circle cx="78" cy="10" r="5" fill="none" stroke="#50C4E8" strokeWidth="0.4" />
      <polygon points="68,42 76,42 72,36" fill="#FFD700" opacity="0.35" />
      <polygon points="68,42 76,42 72,36" fill="none" stroke="#E6C200" strokeWidth="0.3" />
      <rect x="4" y="4" width="6" height="6" fill="#FF6B9D" opacity="0.18" rx="0.5" />
      <path d="M 82 28 Q 85 25 88 28 Q 85 31 82 28" fill="none" stroke="#FF6B9D" strokeWidth="0.3" opacity="0.3" />
      <text x="8" y="22" fontFamily={JA} fontWeight="600" fontSize="6" fill="#333333" filter="url(#art-memphis-shadow)">{data.nameJa}</text>
      <text x="8" y="28" fontFamily={EN} fontWeight="500" fontSize="2.2" letterSpacing="0.3" fill="#FF6B9D">{data.nameEn}</text>
      <text x="8" y="34" fontFamily={JA} fontWeight="300" fontSize="1.8" fill="#888888">{data.titleJa}</text>
      <text x="8" y="38" fontFamily={EN} fontWeight="300" fontSize="1.4" fill="#888888">{data.titleEn}</text>
      <text x="8" y="48" fontFamily={JA} fontWeight="400" fontSize="1.3" fill="#50C4E8">{data.companyJa}</text>
      <text x="8" y="51.5" fontFamily={EN} fontWeight="300" fontSize="1.1" fill="#999999">{data.companyEn}</text>
      {data.logo && <image href={data.logo} x="76" y="40" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.45" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="art-memphis-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
      </defs>
      <rect width="91" height="55" fill="#FFF5F8" filter="url(#art-memphis-paper-b)" />
      <circle cx="15" cy="8" r="4" fill="#FFD700" opacity="0.2" />
      <polygon points="78,48 86,48 82,42" fill="#50C4E8" opacity="0.2" />
      <rect x="70" y="4" width="5" height="5" fill="#FF6B9D" opacity="0.12" rx="0.5" />
      <path d="M 5 45 Q 8 42 11 45 Q 8 48 5 45" fill="none" stroke="#FFD700" strokeWidth="0.25" opacity="0.3" />
      <text x="8" y="12" fontFamily={JA} fontWeight="500" fontSize="2.2" fill="#333333">{data.companyJa}</text>
      <text x="8" y="16.5" fontFamily={EN} fontWeight="400" fontSize="1.5" letterSpacing="0.15" fill="#FF6B9D">{data.companyEn}</text>
      <text x="8" y="20" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#888888">{data.titleJa}</text>
      <line x1="8" y1="23" x2="60" y2="23" stroke="#50C4E8" strokeWidth="0.2" />
      <text x="8" y="28" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#555555">TEL {data.tel}</text>
      <text x="8" y="32" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#555555">{data.email}</text>
      <text x="8" y="36" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#555555">{data.website}</text>
      <line x1="8" y1="39" x2="60" y2="39" stroke="#FF6B9D" strokeWidth="0.2" />
      <text x="8" y="43.5" fontFamily={JA} fontWeight="300" fontSize="1.2" fill="#888888">〒{data.zipCode}</text>
      <text x="8" y="47" fontFamily={JA} fontWeight="300" fontSize="1.2" fill="#888888">{data.addressJa}</text>
      <text x="8" y="50.5" fontFamily={EN} fontWeight="300" fontSize="1.1" fill="#AAAAAA">{data.addressEn}</text>
      {data.logo && <image href={data.logo} x="76" y="8" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
    </g>
  ),
};

// ============================================================
// 7. NOUVEAU (麗) — Alphonse Mucha inspired
// Organic curves, warm tones, ornamental borders
// ============================================================
const nouveauTemplate: TemplateDefinition = {
  id: 'artistic-nouveau',
  name: 'NOUVEAU',
  nameJa: '麗',
  category: 'artistic',
  designer: 'Alphonse Mucha',
  description: '優美な曲線。アール・ヌーヴォーの有機的装飾美。',
  accentColor: '#8B6914',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="art-nouveau-paper"><feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="5" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="art-nouveau-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.3" result="blur"/><feOffset dx="0.1" dy="0.15" result="shifted"/><feFlood floodColor="#5A3A10" floodOpacity="0.1" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <linearGradient id="art-nouveau-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#FDF6E8"/><stop offset="100%" stopColor="#F5E8D0"/></linearGradient>
        <linearGradient id="art-nouveau-gold" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#8B6914" stopOpacity="0"/><stop offset="20%" stopColor="#B8860B"/><stop offset="50%" stopColor="#DAA520"/><stop offset="80%" stopColor="#B8860B"/><stop offset="100%" stopColor="#8B6914" stopOpacity="0"/></linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#art-nouveau-bg)" filter="url(#art-nouveau-paper)" />
      <path d="M 3,3 Q 3,0 6,0 L 85,0 Q 88,0 88,3 L 88,52 Q 88,55 85,55 L 6,55 Q 3,55 3,52 Z" fill="none" stroke="#B8860B" strokeWidth="0.3" opacity="0.4" />
      <path d="M 5,5 Q 5,3 7,3 L 84,3 Q 86,3 86,5 L 86,50 Q 86,52 84,52 L 7,52 Q 5,52 5,50 Z" fill="none" stroke="#DAA520" strokeWidth="0.12" opacity="0.25" />
      <path d="M 5 10 C 10 6, 15 14, 20 10 C 25 6, 30 14, 35 10" fill="none" stroke="#B8860B" strokeWidth="0.15" opacity="0.2" />
      <path d="M 56 45 C 61 41, 66 49, 71 45 C 76 41, 81 49, 86 45" fill="none" stroke="#B8860B" strokeWidth="0.15" opacity="0.18" />
      <circle cx="10" cy="10" r="1" fill="none" stroke="#8B6914" strokeWidth="0.1" opacity="0.2" />
      <text x="45.5" y="22" textAnchor="middle" fontFamily={JA} fontWeight="500" fontSize="6" letterSpacing="0.8" fill="#5A3A10" filter="url(#art-nouveau-shadow)">{data.nameJa}</text>
      <line x1="15" y1="26" x2="76" y2="26" stroke="url(#art-nouveau-gold)" strokeWidth="0.25" />
      <text x="45.5" y="32" textAnchor="middle" fontFamily={EN} fontWeight="300" fontSize="2" letterSpacing="0.5" fill="#8B6914">{data.nameEn}</text>
      <text x="45.5" y="38" textAnchor="middle" fontFamily={JA} fontWeight="300" fontSize="1.8" fill="#A08050">{data.titleJa}</text>
      <text x="45.5" y="42" textAnchor="middle" fontFamily={EN} fontWeight="200" fontSize="1.4" fill="#A08050">{data.titleEn}</text>
      <text x="45.5" y="48" textAnchor="middle" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#B8860B">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="76" y="3" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.35" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="art-nouveau-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="5" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
      </defs>
      <rect width="91" height="55" fill="#FDF6E8" filter="url(#art-nouveau-paper-b)" />
      <path d="M 3,3 Q 3,0 6,0 L 85,0 Q 88,0 88,3 L 88,52 Q 88,55 85,55 L 6,55 Q 3,55 3,52 Z" fill="none" stroke="#B8860B" strokeWidth="0.3" opacity="0.35" />
      <path d="M 56 4 C 61 0, 66 8, 71 4 C 76 0, 81 8, 86 4" fill="none" stroke="#B8860B" strokeWidth="0.12" opacity="0.18" />
      <path d="M 5 51 C 10 47, 15 55, 20 51 C 25 47, 30 55, 35 51" fill="none" stroke="#B8860B" strokeWidth="0.12" opacity="0.15" />
      <text x="45.5" y="13" textAnchor="middle" fontFamily={JA} fontWeight="400" fontSize="2.5" letterSpacing="0.5" fill="#5A3A10">{data.companyJa}</text>
      <text x="45.5" y="18" textAnchor="middle" fontFamily={EN} fontWeight="300" fontSize="1.4" letterSpacing="0.4" fill="#8B6914">{data.companyEn}</text>
      <text x="45.5" y="22" textAnchor="middle" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#A08050">{data.titleJa}</text>
      <line x1="20" y1="25" x2="71" y2="25" stroke="#B8860B" strokeWidth="0.15" opacity="0.3" />
      <text x="45.5" y="30" textAnchor="middle" fontFamily={EN} fontWeight="300" fontSize="1.5" fill="#5A3A10">TEL {data.tel}</text>
      <text x="45.5" y="34" textAnchor="middle" fontFamily={EN} fontWeight="300" fontSize="1.5" fill="#5A3A10">{data.email}</text>
      <text x="45.5" y="38" textAnchor="middle" fontFamily={EN} fontWeight="300" fontSize="1.5" fill="#5A3A10">{data.website}</text>
      <line x1="20" y1="41" x2="71" y2="41" stroke="#B8860B" strokeWidth="0.15" opacity="0.3" />
      <text x="45.5" y="45.5" textAnchor="middle" fontFamily={JA} fontWeight="300" fontSize="1.2" fill="#A08050">〒{data.zipCode}</text>
      <text x="45.5" y="48.5" textAnchor="middle" fontFamily={JA} fontWeight="300" fontSize="1.2" fill="#A08050">{data.addressJa}</text>
      <text x="45.5" y="52" textAnchor="middle" fontFamily={EN} fontWeight="300" fontSize="1.1" fill="#A08050">{data.addressEn}</text>
      {data.logo && <image href={data.logo} x="76" y="3" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.35" />}
    </g>
  ),
};

// ============================================================
// 8. DE STIJL (風) — Mondrian inspired
// Black grid, primary color blocks
// ============================================================
const destijlTemplate: TemplateDefinition = {
  id: 'artistic-destijl',
  name: 'DE STIJL',
  nameJa: '風',
  category: 'artistic',
  designer: 'Mondrian',
  description: '水平と垂直の絶対。モンドリアンの厳格なグリッド。',
  accentColor: '#E60012',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="art-destijl-paper"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="art-destijl-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.25" result="blur"/><feOffset dx="0.08" dy="0.1" result="shifted"/><feFlood floodColor="#000" floodOpacity="0.08" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <rect width="91" height="55" fill="#FFFFFF" filter="url(#art-destijl-paper)" />
      <rect x="0" y="0" width="25" height="20" fill="#E60012" />
      <rect x="72" y="0" width="19" height="20" fill="#FFD700" />
      <rect x="72" y="38" width="19" height="17" fill="#0057B8" />
      <line x1="25" y1="0" x2="25" y2="55" stroke="#1A1A1A" strokeWidth="0.8" />
      <line x1="72" y1="0" x2="72" y2="55" stroke="#1A1A1A" strokeWidth="0.8" />
      <line x1="0" y1="20" x2="91" y2="20" stroke="#1A1A1A" strokeWidth="0.8" />
      <line x1="72" y1="38" x2="91" y2="38" stroke="#1A1A1A" strokeWidth="0.8" />
      <text x="30" y="14" fontFamily={JA} fontWeight="700" fontSize="5.5" fill="#1A1A1A" filter="url(#art-destijl-shadow)">{data.nameJa}</text>
      <text x="30" y="30" fontFamily={EN} fontWeight="400" fontSize="2" letterSpacing="0.3" fill="#333333">{data.nameEn}</text>
      <text x="30" y="36" fontFamily={JA} fontWeight="300" fontSize="1.8" fill="#888888">{data.titleJa}</text>
      <text x="30" y="40" fontFamily={EN} fontWeight="200" fontSize="1.4" fill="#888888">{data.titleEn}</text>
      <text x="30" y="48" fontFamily={JA} fontWeight="400" fontSize="1.3" fill="#555555">{data.companyJa}</text>
      <text x="30" y="52" fontFamily={EN} fontWeight="300" fontSize="1.1" fill="#888888">{data.companyEn}</text>
      {data.logo && <image href={data.logo} x="76" y="24" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.45" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="art-destijl-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
      </defs>
      <rect width="91" height="55" fill="#FFFFFF" filter="url(#art-destijl-paper-b)" />
      <rect x="0" y="0" width="20" height="15" fill="#0057B8" />
      <rect x="0" y="42" width="20" height="13" fill="#FFD700" />
      <rect x="75" y="0" width="16" height="15" fill="#E60012" />
      <line x1="20" y1="0" x2="20" y2="55" stroke="#1A1A1A" strokeWidth="0.8" />
      <line x1="75" y1="0" x2="75" y2="55" stroke="#1A1A1A" strokeWidth="0.8" />
      <line x1="0" y1="15" x2="91" y2="15" stroke="#1A1A1A" strokeWidth="0.8" />
      <line x1="0" y1="42" x2="20" y2="42" stroke="#1A1A1A" strokeWidth="0.8" />
      <text x="25" y="11" fontFamily={JA} fontWeight="600" fontSize="2.2" fill="#1A1A1A">{data.companyJa}</text>
      <text x="25" y="24" fontFamily={EN} fontWeight="400" fontSize="1.5" letterSpacing="0.2" fill="#333333">{data.companyEn}</text>
      <text x="25" y="28" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#888888">{data.titleJa}</text>
      <line x1="25" y1="31" x2="70" y2="31" stroke="#1A1A1A" strokeWidth="0.3" />
      <text x="25" y="36" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#333333">TEL {data.tel}</text>
      <text x="25" y="40" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#333333">{data.email}</text>
      <text x="25" y="44" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#333333">{data.website}</text>
      <text x="25" y="50" fontFamily={JA} fontWeight="300" fontSize="1.2" fill="#777777">〒{data.zipCode}</text>
      <text x="25" y="53.5" fontFamily={JA} fontWeight="300" fontSize="1.2" fill="#777777">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="77" y="20" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
    </g>
  ),
};

// ============================================================
// 9. UKIYOE (浮) — Katsushika Hokusai inspired
// Wave patterns, traditional Japanese blue palette
// ============================================================
const ukiyoeTemplate: TemplateDefinition = {
  id: 'artistic-ukiyoe',
  name: 'UKIYOE',
  nameJa: '浮',
  category: 'artistic',
  designer: 'Katsushika Hokusai',
  description: '浮世絵の重なり。版画の色層と波のモチーフ。',
  accentColor: '#1B4B73',
  renderFront: (data: CardData) => (
    <g>
      <defs>
        <filter id="art-ukiyoe-paper"><feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="5" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        <filter id="art-ukiyoe-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.3" result="blur"/><feOffset dx="0.1" dy="0.12" result="shifted"/><feFlood floodColor="#0A2540" floodOpacity="0.08" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <linearGradient id="art-ukiyoe-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#F5EDE0"/><stop offset="100%" stopColor="#EDE0CC"/></linearGradient>
      </defs>
      <rect width="91" height="55" fill="url(#art-ukiyoe-bg)" filter="url(#art-ukiyoe-paper)" />
      <path d="M 0 42 Q 8 36, 16 42 Q 24 48, 32 42 Q 40 36, 48 42 Q 56 48, 64 42 Q 72 36, 80 42 Q 88 48, 96 42" fill="none" stroke="#1B4B73" strokeWidth="0.3" opacity="0.2" />
      <path d="M 0 46 Q 10 40, 20 46 Q 30 52, 40 46 Q 50 40, 60 46 Q 70 52, 80 46 Q 90 40, 100 46" fill="none" stroke="#1B4B73" strokeWidth="0.2" opacity="0.12" />
      <path d="M 0 50 Q 12 44, 24 50 Q 36 56, 48 50 Q 60 44, 72 50 Q 84 56, 96 50" fill="none" stroke="#1B4B73" strokeWidth="0.15" opacity="0.08" />
      <circle cx="80" cy="10" r="5" fill="#C84031" opacity="0.08" />
      <circle cx="80" cy="10" r="5" fill="none" stroke="#C84031" strokeWidth="0.2" opacity="0.12" />
      <rect x="3" y="3" width="0.4" height="12" fill="#1B4B73" opacity="0.12" />
      <text x="8" y="18" fontFamily={JA} fontWeight="500" fontSize="6" letterSpacing="1" fill="#1B4B73" filter="url(#art-ukiyoe-shadow)">{data.nameJa}</text>
      <text x="8" y="24.5" fontFamily={EN} fontWeight="300" fontSize="2" letterSpacing="0.4" fill="#3A6B8E">{data.nameEn}</text>
      <text x="8" y="30.5" fontFamily={JA} fontWeight="300" fontSize="1.8" fill="#8B7050">{data.titleJa}</text>
      <text x="8" y="34.5" fontFamily={EN} fontWeight="200" fontSize="1.4" fill="#8B7050">{data.titleEn}</text>
      <text x="83" y="52" textAnchor="end" fontFamily={JA} fontWeight="400" fontSize="1.3" fill="#C84031" opacity="0.5">{data.companyJa}</text>
      {data.logo && <image href={data.logo} x="76" y="28" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
    </g>
  ),
  renderBack: (data: CardData) => (
    <g>
      <defs>
        <filter id="art-ukiyoe-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="5" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
      </defs>
      <rect width="91" height="55" fill="#F5EDE0" filter="url(#art-ukiyoe-paper-b)" />
      <path d="M 0 6 Q 10 0, 20 6 Q 30 12, 40 6 Q 50 0, 60 6 Q 70 12, 80 6 Q 90 0, 100 6" fill="none" stroke="#1B4B73" strokeWidth="0.2" opacity="0.12" />
      <path d="M 0 10 Q 12 4, 24 10 Q 36 16, 48 10 Q 60 4, 72 10 Q 84 16, 96 10" fill="none" stroke="#1B4B73" strokeWidth="0.15" opacity="0.08" />
      <circle cx="10" cy="48" r="3" fill="#C84031" opacity="0.06" />
      <rect x="87" y="40" width="0.4" height="12" fill="#1B4B73" opacity="0.1" />
      <text x="8" y="18" fontFamily={JA} fontWeight="500" fontSize="2.2" fill="#1B4B73">{data.companyJa}</text>
      <text x="8" y="22.5" fontFamily={EN} fontWeight="300" fontSize="1.4" letterSpacing="0.3" fill="#3A6B8E">{data.companyEn}</text>
      <text x="8" y="26" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#8B7050">{data.titleJa}</text>
      <line x1="8" y1="29" x2="60" y2="29" stroke="#1B4B73" strokeWidth="0.12" opacity="0.2" />
      <text x="8" y="33.5" fontFamily={EN} fontWeight="300" fontSize="1.5" fill="#4A3728">TEL {data.tel}</text>
      <text x="8" y="37.5" fontFamily={EN} fontWeight="300" fontSize="1.5" fill="#4A3728">{data.email}</text>
      <text x="8" y="41.5" fontFamily={EN} fontWeight="300" fontSize="1.5" fill="#4A3728">{data.website}</text>
      <line x1="8" y1="44" x2="60" y2="44" stroke="#C84031" strokeWidth="0.12" opacity="0.15" />
      <text x="8" y="48.5" fontFamily={JA} fontWeight="300" fontSize="1.2" fill="#8B7050">〒{data.zipCode}</text>
      <text x="8" y="52" fontFamily={JA} fontWeight="300" fontSize="1.2" fill="#8B7050">{data.addressJa}</text>
      {data.logo && <image href={data.logo} x="76" y="14" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.35" />}
    </g>
  ),
};

// ============================================================
// 10. OP ART (眩) — Bridget Riley inspired
// Parallel lines creating optical illusion, monochrome
// ============================================================
const opartTemplate: TemplateDefinition = {
  id: 'artistic-opart',
  name: 'OP ART',
  nameJa: '眩',
  category: 'artistic',
  designer: 'Bridget Riley',
  description: '視覚の眩惑。平行線が生み出す催眠的パターン。',
  accentColor: '#000000',
  renderFront: (data: CardData) => {
    const lines: React.ReactNode[] = [];
    for (let i = 0; i < 55; i += 1.2) {
      const wobble = Math.sin(i * 0.15) * 3;
      lines.push(
        <line key={`op-f-${i}`} x1={60 + wobble} y1={i} x2={91} y2={i} stroke="#000000" strokeWidth={0.2 + Math.sin(i * 0.25) * 0.1} opacity={0.08 + Math.sin(i * 0.2) * 0.04} />
      );
    }
    return (
      <g>
        <defs>
          <filter id="art-opart-paper"><feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
          <filter id="art-opart-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="0.25" result="blur"/><feOffset dx="0.08" dy="0.12" result="shifted"/><feFlood floodColor="#000" floodOpacity="0.06" result="color"/><feComposite in="color" in2="shifted" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        <rect width="91" height="55" fill="#FFFFFF" filter="url(#art-opart-paper)" />
        {lines}
        <circle cx="75" cy="27.5" r="8" fill="none" stroke="#000000" strokeWidth="0.3" opacity="0.08" />
        <circle cx="75" cy="27.5" r="5" fill="none" stroke="#000000" strokeWidth="0.2" opacity="0.06" />
        <circle cx="75" cy="27.5" r="2" fill="none" stroke="#000000" strokeWidth="0.15" opacity="0.04" />
        <text x="7" y="20" fontFamily={JA} fontWeight="700" fontSize="6.5" letterSpacing="0.3" fill="#000000" filter="url(#art-opart-shadow)">{data.nameJa}</text>
        <text x="7" y="27" fontFamily={EN} fontWeight="400" fontSize="2.2" letterSpacing="0.3" fill="#333333">{data.nameEn}</text>
        <text x="7" y="33" fontFamily={JA} fontWeight="300" fontSize="1.8" fill="#666666">{data.titleJa}</text>
        <text x="7" y="37" fontFamily={EN} fontWeight="200" fontSize="1.4" fill="#888888">{data.titleEn}</text>
        <line x1="7" y1="41" x2="50" y2="41" stroke="#000000" strokeWidth="0.15" opacity="0.2" />
        <text x="7" y="47" fontFamily={JA} fontWeight="400" fontSize="1.3" fill="#444444">{data.companyJa}</text>
        <text x="7" y="51" fontFamily={EN} fontWeight="300" fontSize="1.1" fill="#888888">{data.companyEn}</text>
        {data.logo && <image href={data.logo} x="48" y="44" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
      </g>
    );
  },
  renderBack: (data: CardData) => {
    const lines: React.ReactNode[] = [];
    for (let i = 0; i < 55; i += 1.2) {
      const wobble = Math.sin(i * 0.15) * 3;
      lines.push(
        <line key={`op-b-${i}`} x1={0} y1={i} x2={28 + wobble} y2={i} stroke="#000000" strokeWidth={0.2 + Math.sin(i * 0.25) * 0.1} opacity={0.08 + Math.sin(i * 0.2) * 0.04} />
      );
    }
    return (
      <g>
        <defs>
          <filter id="art-opart-paper-b"><feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" stitchTiles="stitch" result="noise"/><feColorMatrix type="saturate" values="0" in="noise" result="gray"/><feBlend mode="multiply" in="SourceGraphic" in2="gray"/></filter>
        </defs>
        <rect width="91" height="55" fill="#FFFFFF" filter="url(#art-opart-paper-b)" />
        {lines}
        <circle cx="16" cy="27.5" r="8" fill="none" stroke="#000000" strokeWidth="0.25" opacity="0.06" />
        <circle cx="16" cy="27.5" r="4" fill="none" stroke="#000000" strokeWidth="0.15" opacity="0.04" />
        <text x="35" y="12" fontFamily={JA} fontWeight="600" fontSize="2.2" fill="#000000">{data.companyJa}</text>
        <text x="35" y="17" fontFamily={EN} fontWeight="400" fontSize="1.5" letterSpacing="0.2" fill="#333333">{data.companyEn}</text>
        <text x="35" y="21" fontFamily={JA} fontWeight="300" fontSize="1.3" fill="#888888">{data.titleJa}</text>
        <line x1="35" y1="24" x2="83" y2="24" stroke="#000000" strokeWidth="0.2" opacity="0.15" />
        <text x="35" y="29" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#333333">TEL {data.tel}</text>
        <text x="35" y="33" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#333333">{data.email}</text>
        <text x="35" y="37" fontFamily={EN} fontWeight="400" fontSize="1.5" fill="#333333">{data.website}</text>
        <line x1="35" y1="40" x2="83" y2="40" stroke="#000000" strokeWidth="0.15" opacity="0.15" />
        <text x="35" y="44.5" fontFamily={JA} fontWeight="300" fontSize="1.2" fill="#666666">〒{data.zipCode}</text>
        <text x="35" y="48" fontFamily={JA} fontWeight="300" fontSize="1.2" fill="#666666">{data.addressJa}</text>
        <text x="35" y="51.5" fontFamily={EN} fontWeight="300" fontSize="1.1" fill="#999999">{data.addressEn}</text>
        {data.logo && <image href={data.logo} x="76" y="6" width="7" height="7" preserveAspectRatio="xMidYMid meet" opacity="0.4" />}
      </g>
    );
  },
};

export const artisticTemplates: TemplateDefinition[] = [
  bauhausTemplate,
  dadaTemplate,
  popTemplate,
  abstractTemplate,
  constructivistTemplate,
  memphisTemplate,
  nouveauTemplate,
  destijlTemplate,
  ukiyoeTemplate,
  opartTemplate,
];
