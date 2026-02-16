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

export interface TemplateDefinition {
  id: string;
  name: string;
  nameJa: string;
  designer: string;
  description: string;
  accentColor: string;
  renderFront: (data: CardData) => React.ReactNode;
  renderBack: (data: CardData) => React.ReactNode;
}

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
