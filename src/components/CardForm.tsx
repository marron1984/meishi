import type { CardData } from '../types';

interface Props {
  data: CardData;
  onChange: (data: CardData) => void;
}

interface FieldDef {
  key: keyof CardData;
  label: string;
  placeholder: string;
}

const fields: FieldDef[] = [
  { key: 'nameJa', label: '氏名', placeholder: '山田 太郎' },
  { key: 'nameEn', label: 'Name', placeholder: 'Taro Yamada' },
  { key: 'companyJa', label: '会社名', placeholder: '株式会社メイシ' },
  { key: 'companyEn', label: 'Company', placeholder: 'MEISHI Inc.' },
  { key: 'titleJa', label: '肩書き', placeholder: 'クリエイティブディレクター' },
  { key: 'titleEn', label: 'Title', placeholder: 'Creative Director' },
  { key: 'tel', label: '電話番号', placeholder: '03-1234-5678' },
  { key: 'email', label: 'メール', placeholder: 'taro@meishi.co.jp' },
  { key: 'website', label: 'Web', placeholder: 'meishi.co.jp' },
  { key: 'zipCode', label: '郵便番号', placeholder: '150-0001' },
  { key: 'addressJa', label: '住所', placeholder: '東京都渋谷区神宮前 3-21-5' },
  { key: 'addressEn', label: 'Address', placeholder: '3-21-5 Jingumae, Shibuya-ku, Tokyo' },
];

export default function CardForm({ data, onChange }: Props) {
  const handleChange = (key: keyof CardData, value: string) => {
    onChange({ ...data, [key]: value });
  };

  return (
    <div className="card-form">
      <h3 className="section-title">INFORMATION</h3>
      <div className="form-fields">
        {fields.map((field) => (
          <div key={field.key} className="form-field">
            <label>{field.label}</label>
            <input
              type="text"
              value={data[field.key]}
              placeholder={field.placeholder}
              onChange={(e) => handleChange(field.key, e.target.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
