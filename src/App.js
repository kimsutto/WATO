import React from 'react';
import {Route, Switch} from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import Theme from './styles/Theme';

import Home from '../src/pages/Home';
import Login from '../src/pages/Login';
import Party from '../src/pages/Party';
import MyPage from '../src/pages/MyPage';

const App = () => {
  return (
    <>
      <GlobalStyles/>
      <Theme>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/login' exact component={Login}/>
          <Route path='/party' exact component={Party}/>
          <Route path='/myparty' exact component={MyPage}/>
        </Switch>
      </Theme>
    </> 
  );
};

export default App;