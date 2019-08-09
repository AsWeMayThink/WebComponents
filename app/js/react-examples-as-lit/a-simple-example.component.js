import { LitElement, html } from 'lit-element';

class Example extends LitElement {
  static get properties() {
    return {
      name: { type: String }
    };
  }

  render() {
    return html`
      <div>
        Hello ${this.name}
      </div>
    `;
  }
}

customElements.define('hello-world', Example);
