import type { TemplateDefinition, TemplateCategory, CardData } from '../types';
import { CARD_WIDTH, CARD_HEIGHT } from '../types';

interface Props {
  selected: string;
  onSelect: (id: string) => void;
  cardData: CardData;
  categories: TemplateCategory[];
  categoryFilter: string | null;
  onCategoryChange: (category: string | null) => void;
  filteredTemplates: TemplateDefinition[];
}

export default function TemplateSelector({
  selected,
  onSelect,
  cardData,
  categories,
  categoryFilter,
  onCategoryChange,
  filteredTemplates,
}: Props) {
  return (
    <div className="template-selector">
      <h3 className="section-title">
        STYLE
        <span className="template-count">{filteredTemplates.length}</span>
      </h3>

      <div className="category-pills">
        <button
          className={`category-pill ${categoryFilter === null ? 'active' : ''}`}
          onClick={() => onCategoryChange(null)}
        >
          ALL
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`category-pill ${categoryFilter === cat.id ? 'active' : ''}`}
            onClick={() => onCategoryChange(cat.id)}
          >
            {cat.nameJa}
          </button>
        ))}
      </div>

      <div className="template-grid">
        {filteredTemplates.map((t: TemplateDefinition) => (
          <button
            key={t.id}
            className={`template-card ${selected === t.id ? 'active' : ''}`}
            onClick={() => onSelect(t.id)}
            title={`${t.name} — ${t.designer}\n${t.description}`}
          >
            <div className="template-thumb">
              <svg
                viewBox={`0 0 ${CARD_WIDTH} ${CARD_HEIGHT}`}
                xmlns="http://www.w3.org/2000/svg"
              >
                {t.renderFront(cardData)}
              </svg>
            </div>
            <div className="template-info">
              <span className="template-name">{t.name}</span>
              <span className="template-name-ja">{t.nameJa}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
