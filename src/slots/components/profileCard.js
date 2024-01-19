export default class ProfileCard extends HTMLElement {
  static css = ` 
    :host {
      width: 200px;
      display: block;
      padding: 16px;
      text-align: center;
      font-size: 14px;
      font-family: 'Inter', sans-serif;
    }

    .image {
      width: 100%;
      border-radius: 50%;
      margin-bottom: 16px;
    }

    .name {
      font-size: 24px;
      font-weight: bold;
    }

    .divider {
      border: none;
      border-top: 1px solid #eeeeee;
      margin: 16px 0;
    }

`;
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const imageSrc = this.dataset.img || 'https://placehold.co/400x400';

    this.shadowRoot.innerHTML = /*html*/ `
      <style>
        ${ProfileCard.css}
      </style>

      <img class="image" src="${imageSrc}" alt="dcode" />
      <div class="name"><slot name="username"></slot></div>
      <hr class="divider" />
      <slot></slot>
      <slot name="descript"></slot>
    `;
  }
}
