/* @flow */

import './deploy.scss';
import App from '../../';
// or import App from 'app/entries/app';

const app = new App();
const url = String(require('data/test.json'));

export default function run() {
  app.init({
    root: document.getElementById('root'),
    msg: 'This is a demo',
  });
  app.getData(url, (res) => {
    console.info(res);
  });
}

document.addEventListener('DOMContentLoaded', run, false);