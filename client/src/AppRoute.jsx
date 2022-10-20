import { Routes, Route } from 'react-router-dom';
import React from 'react';
import ROUTES from './constants/routes';
import Home from './pages/Home';

const AppRoute = () => (
    <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
    </Routes>
);

export default AppRoute;