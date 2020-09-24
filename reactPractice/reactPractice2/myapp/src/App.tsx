import React from 'react';
import InformationContainer from './components/InformationContainer';
import SalesRanking from './components/organisms/SalesRanking';
import SwitchContainer from './components/SwitchContainer';

const productData = [
  { name: 'Product 1', url: 'http://www.example.com/p1' },
  { name: 'Product 2', url: 'http://www.example.com/p2' },
  { name: 'Product 3', url: 'http://www.example.com/p3' },
  { name: 'Product 4', url: 'http://www.example.com/p4' },
];

const users = [{ name: 'user00' }, { name: 'user01' }, { name: 'user02' }];

const regions = [
  { name: 'Korea', code: 'KO' },
  { name: 'Japan', code: 'JR' },
];

const App: React.FC = () => (
  <div className="App">
    <div>
      <SwitchContainer />
      <InformationContainer />
      <SalesRanking items={productData} users={users} regions={regions} />
    </div>
  </div>
);

export default App;
