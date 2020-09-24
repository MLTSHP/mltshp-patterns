export const themes = [
  { name: 'Light', class: 't-light', color: 'white' },
  { name: 'Dark', class: 't-dark', color: 'black' },
];

export const darkDefault = themes.map((theme) => {
  return {
    ...theme,
    default: theme.class === 't-dark',
  };
});
