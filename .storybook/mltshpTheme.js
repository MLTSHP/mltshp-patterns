import { create } from '@storybook/theming/create';

const mltshpCustomization = {
  brandTitle: 'MLTSHP Patterns',
  brandUrl: 'https://mltshp.com',
  brandImage: 'https://mltshp-cdn.com/static/images/logo-compact.svg',
};

export const mltshpThemeLight = create({
  base: 'light',
  ...mltshpCustomization,
});

export const mltshpThemeDark = create({
  base: 'dark',
  ...mltshpCustomization,
});
