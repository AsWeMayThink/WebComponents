import { LitElement, html } from 'lit-element';

class TodoApp extends LitElement {
  constructor() {
    super();

    this.todos = ['like', 'subscribe', 'tell my friends'];
  }

  render() {
    return html`
      <div><h3>TODO</h3></div>
      <todo-list .todos=${this.todos}></todo-list>
    `;
  }
}

class TodoList extends LitElement {
  static get properties() {
    return {
      todos: { type: Array }
    };
  }

  render() {
    return html`
      <ul>
        ${this.todos.map(
          todo =>
            html`
              <li>${todo}</li>
            `
        )}
      </ul>
    `;
  }
}

customElements.define('todos-example', TodoApp);
customElements.define('todo-list', TodoList);
