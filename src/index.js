import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ChakraProvider, extendTheme, ColorModeScript } from '@chakra-ui/react';

// Optional: theme config with dark mode support
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* Ensures correct color mode is loaded before UI */}
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </>
);

reportWebVitals();