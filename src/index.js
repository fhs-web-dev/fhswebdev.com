import React from 'react';
import ReactDOM from 'react-dom';
// Global CSS
// normalize.css fixes css issues brought about by browsers; it makes styling easier
import 'normalize.css/normalize.css';
import './reset.css';
import './index.css';

import elia from './images/elia.png';
import kyle from './images/kyle.png';
import saurabh from './images/saurabh.png';

import App from './App';
// Service Worker is for offline browser use
import registerServiceWorker from './registerServiceWorker';

const people = [
  {
    name: 'Elia Gorokhovsky',
    link: 'http://eliagorokhovsky.herokuapp.com/',
    image: elia
  },
  {
    name: 'Kyle Pfromer',
    link: 'https://kylepfromer.com',
    image: kyle
  },
  {
    name: 'Saurabh Totey',
    link: 'http://SaurabhTotey.com',
    image: saurabh
  }
]

ReactDOM.render(<App people={people} />, document.getElementById('root'));
registerServiceWorker();
