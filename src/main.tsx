import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const targetElement = document.getElementById('root') || document.getElementById('dewk-toolkit');
if (targetElement) {
  createRoot(targetElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

