import React from 'react';
import {Router, Switch} from 'react-router-dom';
import history from 'utils/history';

import {RoutePath} from 'types/routes';
import Layout from './Layout';
import {AppProvider} from 'store';
import {Route, Redirect} from 'react-router-dom';
import {SearchJob, CreateJob} from 'pages/index';

import './styles/variables.scss';

const PrivateRoute = ({component: Component, ...rest}: any) => {
  // const {isAuthenticated} = useAppState();
  const isAuthenticated = true;

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{pathname: RoutePath.Root, state: {from: props.location}}} />
        )
      }
    />
  );
};

const PublicRoute = ({component: Component, ...rest}: any) => {
  return <Route {...rest} render={props => <Component {...props} />} />;
};

function App() {
  return (
    <AppProvider>
      <Router history={history}>
        <Switch>
          <Layout>
            {/* <PrivateRoute path={RoutePath.Listings} component={Listings} /> */}

            <PublicRoute path={RoutePath.SearchJob} component={SearchJob} />
            <PublicRoute path={RoutePath.CreateJob} component={CreateJob} />

            <PublicRoute path={RoutePath.Root} component={CreateJob} exact />
          </Layout>
        </Switch>
      </Router>{' '}
    </AppProvider>
  );
}

export default App;
