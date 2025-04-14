import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router';

import Home from '~/pages/Home';
import Juicy from '~/pages/Juicy';
import Vegan from '~/pages/Vegan';

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/vegan' element={<Vegan />} />
            <Route path='/juicy' element={<Juicy />} />
        </Routes>
    </BrowserRouter>
);

export default App;
