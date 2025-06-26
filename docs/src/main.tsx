import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@sippy-platform/valkyrie/valkyrie.css';

import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
