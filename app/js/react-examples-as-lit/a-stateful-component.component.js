import { LitElement, html } from 'lit-element';

class Timer extends LitElement {
  static get properties() {
    return { seconds: { type: Number } };
  }

  constructor() {
    super();

    this.seconds = 0;

    this.interval = setInterval(() => {
      this.seconds++;
    }, 1000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    clearInterval(this.interval);
  }

  render() {
    return html`
      <div>
        Seconds: ${this.seconds}
      </div>
    `;
  }
}

customElements.define('timer-example', Timer);
