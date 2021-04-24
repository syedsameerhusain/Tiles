import React, { useEffect, Fragment } from 'react';
import './App.css';
import Navbar from './Components/navbar/navbar';
import Landing from './Components/Landing';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import FormData from './Components/forms/FormData';
import List from './Components/list/list';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Alerts from './Components/Alerts';
import { loadUser } from './actions/auth';
import setAuthToken from './util/setAuthToken';
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  useEffect(() => {});
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <body id='body'>
            <Alerts />
            <Switch>
              <Route exact path='/' component={() => <Landing />} />
              <Route exact path='/Login' component={Login} />
              <Route exact path='/Register' component={Register} />
              <Route exact path='/FormData' component={FormData} />
              <Route exact path='/List' component={List} />
            </Switch>
          </body>
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
