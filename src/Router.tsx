import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { useRecoilValue } from 'recoil';
import Main from './routes/Main';
import Camp from './routes/Camp';

// import { IsLoginState } from './store/atom';

function Router() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   const isUserLoggedIn = useRecoilValue(IsLoginState);

  return (
    <BrowserRouter>
      <Switch>
        {/* {isUserLoggedIn ? ( */}
        <>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/camp/:campId">
            <Camp />
          </Route>
        </>
        {/* ) : (
              <Redirect to="/first" />
            )} */}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
