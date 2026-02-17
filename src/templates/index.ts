import { minimalTemplates } from './minimal';
import { geometricTemplates } from './geometric';
import { japaneseTemplates } from './japanese';
import { typographyTemplates } from './typography';
import { avantgardeTemplates } from './avantgarde';
import { swissTemplates } from './swiss';
import { corporateTemplates } from './corporate';
import { techTemplates } from './tech';
import { artisticTemplates } from './artistic';
import { experimentalTemplates } from './experimental';
import type { TemplateDefinition } from '../types';

export const templates: TemplateDefinition[] = [
  ...minimalTemplates,
  ...geometricTemplates,
  ...japaneseTemplates,
  ...typographyTemplates,
  ...avantgardeTemplates,
  ...swissTemplates,
  ...corporateTemplates,
  ...techTemplates,
  ...artisticTemplates,
  ...experimentalTemplates,
];
