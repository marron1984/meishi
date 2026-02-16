import { templates } from '../templates';
import type { TemplateDefinition, CardData } from '../types';
import { CARD_WIDTH, CARD_HEIGHT } from '../types';

interface Props {
  selected: string;
  onSelect: (id: string) => void;
  cardData: CardData;
}

export default function TemplateSelector({ selected, onSelect, cardData }: Props) {
  return (
    <div className="template-selector">
      <h3 className="section-title">STYLE</h3>
      <div className="template-grid">
        {templates.map((t: TemplateDefinition) => (
          <button
            key={t.id}
            className={`template-card ${selected === t.id ? 'active' : ''}`}
            onClick={() => onSelect(t.id)}
            style={{ '--accent': t.accentColor } as React.CSSProperties}
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
            <div className="template-designer">{t.designer}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
