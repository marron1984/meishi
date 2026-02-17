import { useState } from 'react';
import type { CardData } from './types';
import { defaultCardData, categories } from './types';
import { templates } from './templates/index';
import TemplateSelector from './components/TemplateSelector';
import CardForm from './components/CardForm';
import CardPreview from './components/CardPreview';

export default function App() {
  const [cardData, setCardData] = useState<CardData>(defaultCardData);
  const [templateId, setTemplateId] = useState(templates[0].id);
  const [side, setSide] = useState<'front' | 'back'>('front');
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

  const currentTemplate = templates.find((t) => t.id === templateId) ?? templates[0];
  const filteredTemplates = categoryFilter
    ? templates.filter((t) => t.category === categoryFilter)
    : templates;

  return (
    <div className="app">
      <header className="header">
        <div className="header-brand">
          <h1 className="logo">
            <svg className="logo-icon" viewBox="0 0 40 32" width="40" height="32" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#888888" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="logo-accent" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
              {/* Back card (shadow) */}
              <rect x="6" y="2" width="32" height="20" rx="1.5" fill="none" stroke="#555555" strokeWidth="0.6" opacity="0.4" />
              {/* Front card */}
              <rect x="2" y="6" width="32" height="20" rx="1.5" fill="none" stroke="url(#logo-grad)" strokeWidth="0.8" />
              {/* Accent line on front card */}
              <line x1="6" y1="12" x2="22" y2="12" stroke="url(#logo-accent)" strokeWidth="1" strokeLinecap="round" />
              {/* Abstract text lines */}
              <line x1="6" y1="16" x2="18" y2="16" stroke="#666666" strokeWidth="0.4" strokeLinecap="round" />
              <line x1="6" y1="19" x2="14" y2="19" stroke="#555555" strokeWidth="0.4" strokeLinecap="round" />
              <line x1="6" y1="22" x2="16" y2="22" stroke="#444444" strokeWidth="0.4" strokeLinecap="round" />
              {/* Kanji stamp mark */}
              <rect x="26" y="15" width="6" height="6" rx="0.5" fill="none" stroke="url(#logo-accent)" strokeWidth="0.5" opacity="0.7" />
              <text x="29" y="20" textAnchor="middle" fontFamily="'Noto Sans JP', sans-serif" fontWeight="700" fontSize="4" fill="url(#logo-accent)" opacity="0.8">名</text>
            </svg>
            <span className="logo-text">名刺</span>
            <span className="logo-en">MEISHI</span>
          </h1>
          <p className="tagline">{templates.length} Designs — Creative Business Card Generator</p>
        </div>
        <div className="header-badge">
          SVG出力対応
        </div>
      </header>

      <main className="main">
        <aside className="sidebar">
          <TemplateSelector
            selected={templateId}
            onSelect={(id) => {
              setTemplateId(id);
              setSide('front');
            }}
            cardData={cardData}
            categories={categories}
            categoryFilter={categoryFilter}
            onCategoryChange={setCategoryFilter}
            filteredTemplates={filteredTemplates}
          />
          <CardForm data={cardData} onChange={setCardData} />
        </aside>
        <section className="preview-area">
          <CardPreview
            template={currentTemplate}
            data={cardData}
            side={side}
            onFlip={() => setSide((s) => (s === 'front' ? 'back' : 'front'))}
          />
        </section>
      </main>
    </div>
  );
}
