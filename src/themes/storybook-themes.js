import * as colors from '../design-tokens/colors.yml';

export const themes = [
  { name: 'Blue', class: 't-blue', color: colors.colorPageBgBlue },
  { name: 'Dark', class: 't-dark', color: colors.colorPageBgDark },
];

export const blueDefault = themes.map((theme) => {
  return {
    ...theme,
    default: theme.class === 't-blue',
  };
});

export const darkDefault = themes.map((theme) => {
  return {
    ...theme,
    default: theme.class === 't-dark',
  };
});
