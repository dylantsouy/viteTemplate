import React from 'react';
import Layout from '@/layouts/main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '@/containers/dashboard';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
