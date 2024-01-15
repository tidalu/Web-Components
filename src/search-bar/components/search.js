export class Search extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const placeholder = this.dataset.placeholder || 'Search';
    this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/src/search-bar/components/search.css" />
        <ion-icon class="icon" name="search"></ion-icon>
        <input class="input" type="search" placeholder="${placeholder}">
    `;

    const input = this.shadowRoot.querySelector('.input');
    input.addEventListener('input', (ev) => {
      this.dispatchEvent(new CustomEvent('search-input', { detail: ev }));
    });
  }
}
