export class Table extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const headers = this.dataset.headers.split(',').map((h) => h.trim());
    this.shadowRoot.innerHTML = /*html*/ `
      <style> 
        /** we can write css there using style tag, pros is htere will not be network request for css thst is so useful, or by link */
        /** for using link we will have extra network request */
      </style>
      <link rel="stylesheet" href="./components/table.css" />
        <table>
            <thead>
                <tr part="table-header">
                    ${headers.map((header) => `<th>${header}</th>`).join('')}
                </tr>
            </thead>
            <tbody></tbody>
        </table>
      `;
  }
  /**
   * @param data {string[][]}
   */
  set data(data) {
    const tableBody = this.shadowRoot.querySelector('tbody');
    const rows = data.map((rowData) => {
      const row = document.createElement('tr');
      const cells = rowData.map((cellData) => {
        const cell = document.createElement('td');

        cell.textContent = cellData;

        return cell;
      });
      row.append(...cells);

      return row;
    });
    tableBody.innerHTML = '';
    tableBody.append(...rows);
  }
}
