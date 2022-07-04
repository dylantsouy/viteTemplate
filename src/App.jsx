import React from 'react';
import Layout from '@/components/layouts/main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/containers/Home';
import Page404 from '@/containers/Page404';
import Auth from '@/auths/Auth';

function App() {
    return (
        <Auth>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path='/' element={<Home />} />
                        <Route path='*' element={<Page404 />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </Auth>
    );
}

export default App;
