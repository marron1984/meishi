export interface CardData {
  nameJa: string;
  nameEn: string;
  titleJa: string;
  titleEn: string;
  companyJa: string;
  companyEn: string;
  tel: string;
  email: string;
  website: string;
  addressJa: string;
  addressEn: string;
  zipCode: string;
}

export interface TemplateCategory {
  id: string;
  name: string;
  nameJa: string;
}

export interface TemplateDefinition {
  id: string;
  name: string;
  nameJa: string;
  category: string;
  designer: string;
  description: string;
  accentColor: string;
  renderFront: (data: CardData) => React.ReactNode;
  renderBack: (data: CardData) => React.ReactNode;
}

export const categories: TemplateCategory[] = [
  { id: 'minimal', name: 'MINIMAL', nameJa: 'ミニマル' },
  { id: 'geometric', name: 'GEOMETRIC', nameJa: '幾何学' },
  { id: 'japanese', name: 'JAPANESE', nameJa: '和' },
  { id: 'typography', name: 'TYPOGRAPHY', nameJa: 'タイポ' },
  { id: 'avantgarde', name: 'AVANT-GARDE', nameJa: '前衛' },
  { id: 'swiss', name: 'SWISS', nameJa: 'スイス' },
  { id: 'corporate', name: 'CORPORATE', nameJa: '企業' },
  { id: 'tech', name: 'TECH', nameJa: 'テック' },
  { id: 'artistic', name: 'ARTISTIC', nameJa: '芸術' },
  { id: 'experimental', name: 'EXPERIMENTAL', nameJa: '実験' },
  { id: 'nature', name: 'NATURE', nameJa: '自然' },
  { id: 'retro', name: 'RETRO', nameJa: 'レトロ' },
  { id: 'luxury', name: 'LUXURY', nameJa: '高級' },
  { id: 'pop', name: 'POP', nameJa: 'ポップ' },
  { id: 'brutalist', name: 'BRUTALIST', nameJa: '粗野' },
  { id: 'gradient', name: 'GRADIENT', nameJa: '階調' },
  { id: 'monochrome', name: 'MONO', nameJa: '単色' },
  { id: 'handcraft', name: 'HANDCRAFT', nameJa: '手仕事' },
  { id: 'bauhaus', name: 'BAUHAUS', nameJa: '造形' },
  { id: 'nordic', name: 'NORDIC', nameJa: '北欧' },
  { id: 'organic', name: 'ORGANIC', nameJa: '有機' },
  { id: 'urban', name: 'URBAN', nameJa: '都市' },
  { id: 'vintage', name: 'VINTAGE', nameJa: '古典' },
  { id: 'neon', name: 'NEON', nameJa: '光彩' },
  { id: 'pastel', name: 'PASTEL', nameJa: '淡彩' },
  { id: 'industrial', name: 'INDUSTRIAL', nameJa: '工業' },
  { id: 'botanical', name: 'BOTANICAL', nameJa: '植物' },
  { id: 'abstract', name: 'ABSTRACT', nameJa: '抽象' },
  { id: 'deco', name: 'ART DECO', nameJa: '装飾' },
  { id: 'grid', name: 'GRID', nameJa: '格子' },
  { id: 'photo', name: 'PHOTO', nameJa: '写真' },
  { id: 'pattern', name: 'PATTERN', nameJa: '文様' },
  { id: 'elegant', name: 'ELEGANT', nameJa: '優雅' },
  { id: 'bold', name: 'BOLD', nameJa: '剛' },
  { id: 'studio', name: 'STUDIO', nameJa: '工房' },
  { id: 'craft', name: 'CRAFT', nameJa: '匠' },
  { id: 'digital', name: 'DIGITAL', nameJa: '電子' },
  { id: 'classic', name: 'CLASSIC', nameJa: '正統' },
  { id: 'color', name: 'COLOR', nameJa: '彩' },
  { id: 'wave', name: 'WAVE', nameJa: '波' },
  { id: 'architect', name: 'ARCHITECT', nameJa: '建築' },
  { id: 'fashion', name: 'FASHION', nameJa: '服飾' },
  { id: 'music', name: 'MUSIC', nameJa: '音楽' },
  { id: 'food', name: 'FOOD', nameJa: '食' },
  { id: 'medical', name: 'MEDICAL', nameJa: '医療' },
  { id: 'education', name: 'EDUCATION', nameJa: '学' },
  { id: 'creative', name: 'CREATIVE', nameJa: '創造' },
  { id: 'premium', name: 'PREMIUM', nameJa: '極上' },
  { id: 'zen', name: 'ZEN', nameJa: '禅' },
  { id: 'future', name: 'FUTURE', nameJa: '未来' },
];

export const CARD_WIDTH = 91;
export const CARD_HEIGHT = 55;
export const BLEED = 3;

export const defaultCardData: CardData = {
  nameJa: '山田 太郎',
  nameEn: 'Taro Yamada',
  titleJa: 'クリエイティブディレクター',
  titleEn: 'Creative Director',
  companyJa: '株式会社メイシ',
  companyEn: 'MEISHI Inc.',
  tel: '03-1234-5678',
  email: 'taro@meishi.co.jp',
  website: 'meishi.co.jp',
  addressJa: '東京都渋谷区神宮前 3-21-5',
  addressEn: '3-21-5 Jingumae, Shibuya-ku, Tokyo',
  zipCode: '150-0001',
};
