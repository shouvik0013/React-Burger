import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';   // where we only import index.css, not imported as class so it will be applied globally
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
