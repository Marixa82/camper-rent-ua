import { Routes, Route} from 'react-router-dom';
import { lazy } from "react";
import Layout from '../Layout/Layout';

const HomePage = lazy(() => import('../../pages/HomePage'));
const CatalogPage = lazy(() => import('../../pages/CatalogPage'));
const FavoritePage = lazy(() => import('../../pages/FavoritePage'));

export const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<HomePage />} />
                <Route path='/catalog' element={<CatalogPage />} />
                <Route path='/favorites' element={<FavoritePage />} />
                <Route path="*" element={<HomePage />} />
            </Route>
        </Routes>
    )
};
export default App;