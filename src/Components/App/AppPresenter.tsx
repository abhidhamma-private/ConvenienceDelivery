import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from '../../Routes/Home';
import Login from '../../Routes/Login';
import PhoneLogin from '../../Routes/PhoneLogin';
import VerifyPhone from '../../Routes/VerifyPhone';
import Cart from '../../Routes/Cart';
import Hot from '../../Routes/Hot';
import New from '../../Routes/New';
import Tag from '../../Routes/Tag';
import Search from '../../Routes/Search';
import Result from '../../Routes/Result';
import Payment from '../../Routes/Payment';

const AppPresenter: React.SFC<any> = () => (
  <BrowserRouter>
    <LoggedOutRoutes />
  </BrowserRouter>
);

const LoggedOutRoutes: React.SFC<any> = () => (
  <Switch>
    <Route path={'/home'} exact={true} component={Home} />
    <Route path={'/login'} exact={true} component={Login} />
    <Route path={'/phone-login'} exact={true} component={PhoneLogin} />
    <Route path={'/verify-phone'} exact={true} component={VerifyPhone} />
    <Route path={'/cart'} exact={true} component={Cart} />
    <Route path={'/hot'} exact={true} component={Hot} />
    <Route path={'/new'} exact={true} component={New} />
    <Route path={'/tag'} exact={true} component={Tag} />
    <Route path={'/search'} exact={true} component={Search} />
    <Route path={'/result'} exact={true} component={Result} />
    <Route path={'/payment'} exact={true} component={Payment} />
    <Redirect from={'*'} to={'/home'} />
  </Switch>
);

// const LoggedInRoutes: React.SFC = () => (
//   <Switch>
//     <Route path={'/'} exact={true} component={Home} />
//     <Redirect from={'*'} to={'/'} />
//   </Switch>
// );

export default AppPresenter;
