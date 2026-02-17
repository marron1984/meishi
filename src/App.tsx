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
          <h1 className="logo">名刺<span className="logo-en">MEISHI</span></h1>
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
