import './App.css';

import { ChakraProvider } from '@chakra-ui/react';

import Header from '../components/Header';

const App = () => (
    <ChakraProvider>
        <Header />
    </ChakraProvider>
);

export default App;
