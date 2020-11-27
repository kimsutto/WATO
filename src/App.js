import React from 'react';

const title = 'Wato';
const cop = {
  name : 'HIFI',
  member : 'MJ, SJ, EH',
};

function App() {
  return (
    <div>
      <h1>Hello {title}</h1>
      <h2>{cop.name} {cop.member} </h2>
</div> );
}

export default App;