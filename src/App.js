import React from 'react';
import {Route, Switch} from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import Theme from './styles/Theme';

import Home from '../src/pages/Home';
import Login from '../src/pages/Login';
import SelectPlatform from '../src/pages/SelectPlatform'; 
import SelectRole from '../src/pages/SelectRole';
import MakeParty from '../src/pages/MakeParty';
import PartyList from '../src/pages/PartyList';
import MyPage from '../src/pages/MyPage';

const App = () => {
  return (
    <>
      <GlobalStyles/>
      <Theme>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/login' exact component={Login}/>

          <Route path='/selectplatform' exact component={SelectPlatform}/>
          <Route path='/selectrole/:platform' exact component={SelectRole}/>

          <Route path='/makeparty/:platform' exact component ={MakeParty}/>
          <Route path='/partylist/:platform' exact component={PartyList}/>
          
          <Route path='/mypage' exact component={MyPage}/>
        </Switch>
      </Theme>
    </> 
  );
};

export default App;