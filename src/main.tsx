import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/app.tsx';
import { ErrorBoundary } from './components/error-boundary/error-boundary.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find #root element');
}

ReactDOM.createRoot(rootElement).render(
  <ErrorBoundary>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ErrorBoundary>
);
