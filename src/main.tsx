import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Power Apps親フレームに即座に通知
try {
  if (window.parent && window.parent !== window) {
    window.parent.postMessage({ type: 'appReady', source: 'code-app' }, '*');
  }
} catch (e) {
  console.log('Could not notify parent:', e);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
