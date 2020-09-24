import React from 'react';
import InformationContainer from './components/InformationContainer';
import SwitchContainer from './components/SwitchContainer';

const App: React.FC = () => (
  <div className="App">
    <div>
      <SwitchContainer />
      <InformationContainer />
    </div>
  </div>
);

export default App;
