import './index.css';

import { ChakraProvider } from '@chakra-ui/react';
import { createRoot } from 'react-dom/client';

import App from '~/app/App.tsx';
import { appTheme } from '~/theme/theme.ts';

createRoot(document.getElementById('root')!).render(
    <ChakraProvider theme={appTheme}>
        <App />
    </ChakraProvider>,
);
