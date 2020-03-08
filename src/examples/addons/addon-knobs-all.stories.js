// this one is in a separate file because it was causing a nested JSX error

// eslint-disable-next-line import/no-extraneous-dependencies
import {
  array,
  boolean,
  color,
  date,
  select,
  withKnobs,
  text,
  number,
} from '@storybook/addon-knobs';

export default {
  title: 'Addons/Knobs/All',
  decorators: [withKnobs],
  includeStories: [],
};

export const Story4 = () => {
  const name = text('Name', 'Jane');
  const stock = number('Stock', 20, {
    range: true,
    min: 0,
    max: 30,
    step: 5,
  });
  const fruits = {
    Apple: 'apples',
    Banana: 'bananas',
    Cherry: 'cherries',
  };
  const fruit = select('Fruit', fruits, 'apples');
  const price = number('Price', 2.25);
  const colour = color('Border', 'deeppink');
  const today = date('Today', new Date('Jan 20 2017 GMT+0'));
  const items = array('Items', ['Laptop', 'Book', 'Whiskey']);
  const nice = boolean('Nice', true);

  const stockMessage = stock
    ? `I have a stock of ${stock} ${fruit}, costing &dollar;${price} each.`
    : `I'm out of ${fruit}${nice ? ', Sorry!' : '.'}`;

  const salutation = nice ? 'Nice to meet you!' : 'Leave me alone!';
  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  };

  const style = `border: 2px dotted ${colour}; padding: 8px 22px; border-radius: 8px`;

  return `
    <div style="${style}">
      <h1>My name is ${name},</h1>
      <h3>today is ${new Date(today).toLocaleDateString('en-US', dateOptions)}</h3>
      <p>${stockMessage}</p>
      <p>Also, I have:</p>
      <ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>
      <p>${salutation}</p>
    </div>`;
};
Story4.story = { name: 'All knobs' };
