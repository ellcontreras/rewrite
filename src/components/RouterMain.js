import React from 'react';
import HomeView from '../views/Home';
import NewBlog from '../views/NewBlog';
import Blog from '../views/Blog';

import { Switch, Route } from 'react-router-dom';

const RouterMain = () => (
    <main>
        <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomeView}/>
            <Route path={`${process.env.PUBLIC_URL}/blog/new`} component={NewBlog} />
            <Route path={`${process.env.PUBLIC_URL}/blog/:id`} component={Blog} />
        </Switch>
    </main>
);

export default RouterMain;
