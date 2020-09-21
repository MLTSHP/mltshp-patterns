import * as colors from '../design-tokens/colors.yml';

export const themes = [
  { name: 'Light', class: 't-light', color: colors.colorPageBgLight },
  { name: 'Dark', class: 't-dark', color: colors.colorPageBgDark },
];

export const darkDefault = themes.map((theme) => {
  return {
    ...theme,
    default: theme.class === 't-dark',
  };
});
