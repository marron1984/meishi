import { useRef } from 'react';
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
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (key: keyof CardData, value: string) => {
    onChange({ ...data, [key]: value });
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      onChange({ ...data, logo: reader.result as string });
    };
    reader.readAsDataURL(file);
  };

  const handleLogoRemove = () => {
    onChange({ ...data, logo: '' });
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="card-form">
      <h3 className="section-title">INFORMATION</h3>
      <div className="form-fields">
        <div className="form-field logo-field">
          <label>ロゴ / Logo</label>
          <div className="logo-upload-area">
            {data.logo ? (
              <div className="logo-preview-row">
                <img src={data.logo} alt="Logo" className="logo-thumb" />
                <button type="button" className="logo-remove-btn" onClick={handleLogoRemove}>
                  削除
                </button>
              </div>
            ) : (
              <button
                type="button"
                className="logo-upload-btn"
                onClick={() => fileInputRef.current?.click()}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" />
                </svg>
                画像をアップロード
              </button>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/png,image/jpeg,image/svg+xml,image/webp"
              onChange={handleLogoUpload}
              style={{ display: 'none' }}
            />
          </div>
        </div>
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
