import React from 'react';
import HomeView from '../views/Home';
import NewBlog from '../views/NewBlog';

import { Switch, Route } from 'react-router-dom';

const RouterMain = () => (
    <main>
        <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomeView}/>
            <Route path={`${process.env.PUBLIC_URL}/blog/new`} component={NewBlog} />
        </Switch>
    </main>
);

export default RouterMain;
