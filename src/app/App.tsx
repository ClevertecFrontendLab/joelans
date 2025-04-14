import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router';

import Home from '~/pages/Home';

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path="/vegan" element={<Vegan />} />
            <Route path="/juicy" element={<Juicy />} /> */}
        </Routes>
    </BrowserRouter>
);

export default App;
