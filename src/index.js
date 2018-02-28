import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import UserSelector from './containers/UserSelector';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<UserSelector />, document.getElementById('root'));
registerServiceWorker();
