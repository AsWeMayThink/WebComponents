import { LitElement, html } from 'lit-element';
import { debounce, throttle } from 'lodash';

export class DebounceExample extends LitElement {
  static get properties() {
    // All of the properties of this component and a type for each (used when converting
    // attributes to property values).
    return {
      show: { type: Boolean }
    };
  }

  constructor() {
    super();

    this.show = false;

    this.debouncedButtonClicked = debounce(this.buttonClicked, 1000, {
      trailing: true
    });
    this.throttleButtonClicked = throttle(this.buttonClicked, 1000);
  }

  buttonClicked() {
    this.show = true;

    setTimeout(() => (this.show = false), 500);
  }

  render() {
    return html`
      <style>
        .triggered {
          width: 300px;
          text-align: center;
          background-color: OrangeRed;
        }
      </style>

      <button @click="${this.throttleButtonClicked}">Trigger!</button>
      ${this.show
        ? html`
            <p class="triggered">Triggered</p>
          `
        : ``}
    `;
  }
}

// Note: Your element must have a hypen in the name (for example, "hello-world"). It's a requirement
// so that our components don't collide with future additions to HTML.
customElements.define('debounce-example', DebounceExample);
