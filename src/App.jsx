import React from 'react';
import Layout from '@/layouts/main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '@/containers/dashboard';
import NoMatch from '@/containers/noMatch';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route index element={<Dashboard />} />
                    <Route path='/viteTemplate/' element={<Dashboard />} />
                    <Route path='*' element={<NoMatch />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
