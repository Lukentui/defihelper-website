import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Main from 'src/main';
import NotFound from 'src/not-found';
import Tokenomics from 'src/tokenomics';
import { ScrollToTop } from './scroll-to-top';
import { URLS } from './urls';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route exact path={URLS.main}>
          <Main />
        </Route>
        <Route path={URLS.tokenomics}>
          <Tokenomics />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;