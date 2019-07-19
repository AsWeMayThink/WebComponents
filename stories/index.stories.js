import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';

import '../app/js/example-element.component';

storiesOf('Demo', module)
  .addDecorator(withKnobs)
  .add('heading', () => '<h1>Hello World</h1>')
  .add('button', () => {
    const button = document.createElement('button');
    button.type = 'button';
    button.innerText = 'Hello Button';
    button.addEventListener('click', e => console.log(e));
    return button;
  })
  .add('example-element', () => {
    const name = text('Name', 'Everyone');

    return /* html */ `<example-element name="${name}"></example-element>`;
  });
