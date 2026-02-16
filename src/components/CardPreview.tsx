import { useRef } from 'react';
import type { CardData, TemplateDefinition } from '../types';
import { CARD_WIDTH, CARD_HEIGHT, BLEED } from '../types';
import { exportSVG, exportSVGWithBleed } from '../utils/export';

interface Props {
  template: TemplateDefinition;
  data: CardData;
  side: 'front' | 'back';
  onFlip: () => void;
}

export default function CardPreview({ template, data, side, onFlip }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);

  const handleExport = () => {
    if (!svgRef.current) return;
    const render = side === 'front' ? template.renderFront : template.renderBack;
    exportSVG(render, data, `meishi-${template.id}-${side}`);
  };

  const handleExportWithBleed = () => {
    if (!svgRef.current) return;
    const render = side === 'front' ? template.renderFront : template.renderBack;
    exportSVGWithBleed(render, data, `meishi-${template.id}-${side}-bleed`);
  };

  return (
    <div className="card-preview">
      <div className="preview-header">
        <div className="preview-label">
          <span className="preview-template-name">{template.name}</span>
          <span className="preview-side">{side === 'front' ? 'FRONT — 表' : 'BACK — 裏'}</span>
        </div>
        <button className="flip-btn" onClick={onFlip}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" />
          </svg>
          {side === 'front' ? '裏面を見る' : '表面を見る'}
        </button>
      </div>

      <div className="preview-card-wrapper">
        <div className="preview-card">
          <svg
            ref={svgRef}
            viewBox={`0 0 ${CARD_WIDTH} ${CARD_HEIGHT}`}
            xmlns="http://www.w3.org/2000/svg"
            className="card-svg"
          >
            {side === 'front' ? template.renderFront(data) : template.renderBack(data)}
          </svg>
        </div>
        <div className="preview-dimensions">
          {CARD_WIDTH}mm × {CARD_HEIGHT}mm — 塗り足し {BLEED}mm
        </div>
      </div>

      <div className="export-actions">
        <button className="export-btn primary" onClick={handleExport}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
          </svg>
          SVG ダウンロード
        </button>
        <button className="export-btn secondary" onClick={handleExportWithBleed}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
          </svg>
          入稿用 SVG（塗り足し付）
        </button>
      </div>
    </div>
  );
}
