import elementsMarkup from './examples/elements.html?raw';
import defaultMarkup from './examples/default.html?raw';
import pastelMarkup from './examples/pastel.html?raw';
import shadowMarkup from './examples/shadow.html?raw';
import iconMarkup from './examples/icon.html?raw';
import paddedMarkup from './examples/padded.html?raw';
import largeMarkup from './examples/large.html?raw';
import smallMarkup from './examples/small.html?raw';
import tinyMarkup from './examples/tiny.html?raw';

export default {
  title: 'Legacy/Components/Buttons',
  tags: ['autodocs'],
};

export const Elements = {
  render: () => elementsMarkup,
};

export const Default = {
  render: () => defaultMarkup,
};

export const Pastel = {
  render: () => pastelMarkup,
};

export const Shadow = {
  render: () => shadowMarkup,
};

export const IconOnly = {
  render: () => iconMarkup,
};

export const Padded = {
  render: () => paddedMarkup,
};

export const Large = {
  render: () => largeMarkup,
};

export const Small = {
  render: () => smallMarkup,
};

export const Tiny = {
  render: () => tinyMarkup,
};
