import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';

import "bootstrap/dist/css/bootstrap.min.css";
import "../shards-dashboard/styles/shards-dashboards.1.1.0.min.css";

const ProtectedRoutes = () => (
  <Switch>
    <Suspense
    >
      {routes.map(({component: Component, path, exact }) => (
        <Route
          path={`/${path}`}
          key={path}
          exact={exact}
        >
          <Component />
        </Route>
      ))}
    </Suspense>
  </Switch>
);

export default ProtectedRoutes;