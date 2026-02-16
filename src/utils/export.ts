import type { CardData } from '../types';
import { CARD_WIDTH, CARD_HEIGHT, BLEED } from '../types';
import { renderToStaticMarkup } from 'react-dom/server';
import { createElement } from 'react';

type RenderFn = (data: CardData) => React.ReactNode;

function renderToSVGString(
  renderFn: RenderFn,
  data: CardData,
  width: number,
  height: number,
  offsetX: number = 0,
  offsetY: number = 0,
  includeBleed: boolean = false,
): string {
  const content = renderFn(data);
  const inner = renderToStaticMarkup(createElement('g', null, content));

  const trimMarks = includeBleed
    ? `
    <!-- Trim marks -->
    <line x1="${BLEED - 2}" y1="${BLEED}" x2="${BLEED - 0.5}" y2="${BLEED}" stroke="#000" stroke-width="0.1"/>
    <line x1="${BLEED}" y1="${BLEED - 2}" x2="${BLEED}" y2="${BLEED - 0.5}" stroke="#000" stroke-width="0.1"/>
    <line x1="${width - BLEED + 0.5}" y1="${BLEED}" x2="${width - BLEED + 2}" y2="${BLEED}" stroke="#000" stroke-width="0.1"/>
    <line x1="${width - BLEED}" y1="${BLEED - 2}" x2="${width - BLEED}" y2="${BLEED - 0.5}" stroke="#000" stroke-width="0.1"/>
    <line x1="${BLEED - 2}" y1="${height - BLEED}" x2="${BLEED - 0.5}" y2="${height - BLEED}" stroke="#000" stroke-width="0.1"/>
    <line x1="${BLEED}" y1="${height - BLEED + 0.5}" x2="${BLEED}" y2="${height - BLEED + 2}" stroke="#000" stroke-width="0.1"/>
    <line x1="${width - BLEED + 0.5}" y1="${height - BLEED}" x2="${width - BLEED + 2}" y2="${height - BLEED}" stroke="#000" stroke-width="0.1"/>
    <line x1="${width - BLEED}" y1="${height - BLEED + 0.5}" x2="${width - BLEED}" y2="${height - BLEED + 2}" stroke="#000" stroke-width="0.1"/>
    `
    : '';

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg"
     width="${width}mm"
     height="${height}mm"
     viewBox="0 0 ${width} ${height}">
  <g transform="translate(${offsetX}, ${offsetY})">
    ${inner}
  </g>
  ${trimMarks}
</svg>`;
}

function downloadSVG(svgString: string, filename: string): void {
  const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${filename}.svg`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function exportSVG(renderFn: RenderFn, data: CardData, filename: string): void {
  const svg = renderToSVGString(renderFn, data, CARD_WIDTH, CARD_HEIGHT);
  downloadSVG(svg, filename);
}

export function exportSVGWithBleed(renderFn: RenderFn, data: CardData, filename: string): void {
  const width = CARD_WIDTH + BLEED * 2;
  const height = CARD_HEIGHT + BLEED * 2;
  const svg = renderToSVGString(renderFn, data, width, height, BLEED, BLEED, true);
  downloadSVG(svg, filename);
}
