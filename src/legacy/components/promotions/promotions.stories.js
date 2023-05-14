import defaultMarkup from './examples/promotions.html?raw';
import promoMarkup from './examples/promo.html?raw';

export default {
  title: 'Legacy/Components/Promotions',
  tags: ['autodocs'],
};

export const Promotions = {
  render: () => defaultMarkup,
};

export const Promo = {
  render: () => promoMarkup,
};
