import React from 'react';
import HomeView from '../views/Home';

import { Switch, Route } from 'react-router-dom';

const RouterMain = () => (
    <main>
        <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomeView}/>
        </Switch>
    </main>
);

export default RouterMain;
