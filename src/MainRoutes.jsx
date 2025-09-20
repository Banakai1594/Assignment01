import {Route, Routes} from 'react-router-dom';
import Home from './assets/components/Home';

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
}