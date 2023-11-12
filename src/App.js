
import React from 'react';

import Routes from './routes';

const url = 'https://chart.googleapis.com/chart?cht=qr&chs=350x350&chk=';

function App() {
  return (
      <Routes url={url} /> 
  );
}

export default App;
