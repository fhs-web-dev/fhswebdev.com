import React from 'react';
import ReactDOM from 'react-dom';
// Global CSS
// normalize.css fixes css issues brought about by browsers; it makes styling easier
import 'normalize.css/normalize.css';
import './reset.css';
import './index.css';

import App from './App';
// Service Worker is for offline browser use
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
