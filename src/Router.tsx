import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { useRecoilValue } from 'recoil';
import Main from './routes/Main';
import Camp from './routes/Camp';
import Home from './routes/Home';
import Addinfo from './routes/AddInfo';
import MyPage from './routes/MyPage';

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
            <Home />
          </Route>
          <Route exact path="/main">
            <Main />
          </Route>
          <Route exact path="/camp/:campId">
            <Camp />
          </Route>
          <Route exact path="/addInfo">
            <Addinfo />
          </Route>
          <Route exact path="/mypage">
            <MyPage />
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
