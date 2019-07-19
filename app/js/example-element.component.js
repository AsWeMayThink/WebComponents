export class ExampleElement extends HTMLElement {
  connectedCallback() {
    console.log('Hello from the connectedCallback');
    let name = this.getAttribute('name');
    this.innerHTML = `<b>Hello ${name}!</b>`;
  }
}

customElements.define('example-element', ExampleElement);
