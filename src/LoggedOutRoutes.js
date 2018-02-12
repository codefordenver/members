import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

const LoggedOutRoutes = () => <Route component={LandingPage} />;

export default LoggedOutRoutes;
