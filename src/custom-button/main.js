import { Button } from './button-component/button.js';

customElements.define('custom-button', Button);

document.getElementById('btnSaveChanges').addEventListener('click', (e) => {
  let v = prompt('chnage the icon');
  e.target.innerHTML = v;
});
