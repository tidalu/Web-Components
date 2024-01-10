import { Table } from './components/table.js';

customElements.define('styled-table', Table);
const metaData = [
  [1776, 'Washington, D.C.', 'USA'],
  [1066, 'London', 'UK'],
  [660, 'Tokyo', 'Japan'],
  [843, 'Paris', 'France'],
  [1788, 'Sydney', 'Australia'],
  [1867, 'Toronto', 'Canada'],
  [1871, 'Berlin', 'Germany'],
  [1945, 'Seoul', 'South Korea'],
];

const userTable = document.getElementById('users');

userTable.data = metaData;
