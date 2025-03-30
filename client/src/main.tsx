import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import emailjs from '@emailjs/browser';
import App from './App';
import { queryClient } from './lib/queryClient';
import './index.css';

// Initialize EmailJS
emailjs.init('Gy6kjSrzpaQznvbx1'); // replace with your actual public key

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);