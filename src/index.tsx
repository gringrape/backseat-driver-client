import { createRoot } from 'react-dom/client';

import App from './App';

const domElement = document.getElementById('root');

if (!domElement) {
  throw Error('Root DOM element not found');
}

const root = createRoot(domElement);
root.render((
  <App />
));
