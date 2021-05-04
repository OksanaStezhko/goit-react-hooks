import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import MainPage from './pages/MainPage';
import Homework1 from './pages/Homework1';
import Homework2Fonebook from './pages/Homework2Fonebook';
import Homework2Feedback from './pages/Homework2Feedback';

const App = () => (
  <>
    <Switch>
      <Route exact path={routes.main} component={MainPage} />;
      <Route path={routes.homework1} component={Homework1} />;
      <Route path={routes.homework2_1} component={Homework2Fonebook} />;
      <Route path={routes.homework2_2} component={Homework2Feedback} />;
      <Route component={MainPage} />
    </Switch>
  </>
);

export default App;
