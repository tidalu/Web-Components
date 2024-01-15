import { Search } from '../components/search.js';

customElements.define('search-bar', Search);

const search = document.getElementById('search');
search.addEventListener('search-input', ({ detail: e }) => {
  console.log(e);
});
