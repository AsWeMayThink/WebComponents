import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';

import '../app/js/debounce-example.component';

storiesOf('Demo', module)
  .addDecorator(withKnobs)
  .add('debounce-example', () => {
    return /* html */ `<debounce-example></debounce-example>`;
  });
