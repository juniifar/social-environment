import { v4 as uuid } from 'uuid';

export default [
  {
    id: uuid(),
    description: 'Asset Valuation Description',
    media: '/static/images/project_types/asset_valuation.png',
    title: 'Asset Valuation',
  },
  {
    id: uuid(),
    description: 'Business Valuation Description',
    media: '/static/images/project_types/business_valuation.png',
    title: 'Business Valuation Corporation',
  },
  {
    id: uuid(),
    description: 'Advisory Description',
    media: '/static/images/project_types/advisory.png',
    title: 'Advisory',
  },
];
