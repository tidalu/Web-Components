export class Table extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
    
      <link rel="stylesheet" href="./components/table.css" /> 
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Country</th>
                </tr>
            </thead>
        
        </table>
      `;
  }
}
