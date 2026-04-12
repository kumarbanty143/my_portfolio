import React from 'react';
import ReactDOM from 'react-dom/client';
import GitProfile from './components/GitProfile.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GitProfile config={CONFIG} />
  </React.StrictMode>,
);
