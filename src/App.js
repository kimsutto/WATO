import React from 'react';
import {Route, Switch} from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Theme from './styles/theme';

const title = 'Wato';
const cop = {
  name : 'HIFI',
  member : 'MJ, SJ, EH',
};

const App = () => {
  return (
    <>
      <GlobalStyles/>
      <Theme>
        <h1>Hello {title}</h1>
        <h2>{cop.name} {cop.member} </h2>
      </Theme>
    </> 
  );
};

export default App;