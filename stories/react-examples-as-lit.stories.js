import { storiesOf } from '@storybook/html';

import '../app/js/react-examples-as-lit/a-simple-example.component';
import '../app/js/react-examples-as-lit/a-stateful-component.component';
import '../app/js/react-examples-as-lit/an-application.component';
import '../app/js/react-examples-as-lit/a-component-using-external-plugins.component';

storiesOf('React Examples as LitElement', module)
  .add(
    'A Simple Example',
    () => /* html */ `
      <h2>Brief</h2>
      <ul>
        <li>Class named HelloMessage</li>
        <li>It renders a &lt;div&gt; with "Hello {name attribute}"</li>
        <li>The custom element is named &lt;hello-world&gt;</li>
      </ul>

      <hello-world name="world"></hello-world>`
  )
  .add(
    'A Stateful Component',
    () => /* html */ `
      <h2>Brief</h2>
      <ul>
        <li>Class named Timer</li>
        <li>It renders a &lt;div&gt; with "Seconds: {state value for seconds}"</li>
        <li>The state initializes the seconds to 0 and it ticks upward once a second</li>
        <li>The custom element is named &lt;timer-example&gt;</li>
      </ul>

      <timer-example></timer-example>
      <timer-example seconds="55"></timer-example>`
  )
  .add(
    'An Application',
    () => /* html */ `
      <h2>Brief</h2>
      <ul>
        <li>Class named TodoApp</li>
        <li>It renders &lt;div&gt;&lt;h3&gt;TODO&lt;/h3&gt;&lt;/div&gt; and a sub-component which displays the list of items</li>
        <li>Finally, it has a form with a label ("What needs to be done?"), an input, and a button labeled "Add {number of the next todo to be added}"</li>
        <li>The state is an array of items and something to hold the text of the item currently being edited.</li>
        <li>The custom element is named &lt;todos-example&gt;</li>
        <li>The second class is named TodoList, and it renders a &lt;ul&gt; filled with list items, each of which contains the item text of the corresponding todo list item</li>
      </ul>
      
      <todos-example></todos-example>`
  )
  .add(
    'A Component Using External Plugins',
    () => /* html */ `
      <h2>Brief</h2>
      <ul>
        <li>Class named MarkdownEditor</li>
        <li>It uses the "remarkable" library to take input Markdown text and convert it to HTML output</li>
        <li>There is a &lt;h3&gt;Input&lt;/h3&gt; and the text "Enter some Markdown", followed by a textarea and an &lt;h3&gt;Output&lt;/h3&gt; followed by the HTML</li>
        <li>The HTML should be generated and displayed in real time as the input text is edited</li>
        <li>The custom element is named &lt;markdown-example&gt;</li>
      </ul>
      
      <markdown-example></markdown-example>`
  );
