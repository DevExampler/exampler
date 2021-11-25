import React from 'react';
import {
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import AppRoute from './AppRoute/index.jsx';

// Layouts
import GeneralLayout from '../layouts/general/index.jsx';

// Components / Views
import Home from '../components/home/index.jsx';
import Examples from '../components/examples/index.jsx';
import Err404 from '../components/errs/404/index.jsx';

const AoDownloaderApp = () => 
<Router>
    <Switch>
        <AppRoute path="/" exact component={Home} layout={GeneralLayout}></AppRoute>
        <AppRoute path="/examples" exact component={Examples} layout={GeneralLayout}></AppRoute>

        <AppRoute component={Err404} layout={GeneralLayout}></AppRoute>    
    </Switch>
</Router>

export default AoDownloaderApp;