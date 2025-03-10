import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import App from './App';
import './index.css';

// Create a custom theme with better performance settings
const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: true,
  fonts: {
    heading: 'system-ui, sans-serif',
    body: 'system-ui, sans-serif',
  },
});

// Add preconnect for performance
const preconnectLink = document.createElement('link');
preconnectLink.rel = 'preconnect';
preconnectLink.href = 'https://fonts.gstatic.com';
preconnectLink.crossOrigin = 'anonymous';
document.head.appendChild(preconnectLink);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
