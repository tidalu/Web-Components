export class Button extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const icon = this.getAttribute('data-icon');
    const variant = this.getAttribute('data-variant');
    console.log(variant);
    this.shadowRoot.innerHTML = ` 
            <style>${css}</style>
            <button class="button">
            ${(icon && `<ion-icon name="${icon}"></ion-icon>`) || ''}
                <span class="label"><slot></slot></span>
            </button>
        `;

    if (variant) {
      this.shadowRoot
        .querySelector('.button')
        .classList.add(`variant-${variant}`);
    }
  }
}

const css = `
    .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 8px 16px;
    gap: 8px;

    background-color: #166df7;
    border-radius: 5px;
    color: #ffffff;
    border: none;
    outline: none;
    cursor: pointer;

    font-family: "Lexend", sans-serif;
}

    .variant-success {
        background-color: #3cba02;
        color: #ffffff;
    }

    .variant-error {
        background-color: #dd050c;
        color: #ffffff;
    }

`;
