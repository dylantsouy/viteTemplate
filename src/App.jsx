import React from 'react';
import Layout from '@/components/layouts/main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/containers/Home';
import Page404 from '@/containers/Page404';
import Auth from '@/auths/Auth';
import ProductList from './containers/ProductList';
import ProductDetail from './containers/ProductDetail/ProductDetail';

function App() {
    return (
        <Auth>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route index element={<ProductList />} />
                        <Route path='/product' element={<ProductList />} />
                        <Route path='/product/:productId' element={<ProductDetail />} />
                        <Route path='*' element={<Page404 />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </Auth>
    );
}

export default App;
