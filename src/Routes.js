import React from 'react';
import {
    BrowserRouter as BRouter,
    Switch,
    Route
} from 'react-router-dom';

import Home from './pages/home';
import Repos from './pages/repos';
// import Following from './pages/following';
// import Followers from './pages/followers';

const Routes = () => (
    <BRouter>
        <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/repos" component={ Repos } />
            {/* <Route path="/following" component={ Following } />
            <Route path="/followers" component={ Followers } /> */}
        </Switch>
    </BRouter>
);

export default Routes;