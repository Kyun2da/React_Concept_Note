import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import KeyExample from './Pages/MapKey';

function App() {
  return (
    <div className='App'>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>홈으로 가기</Link>
              </li>
              <li>
                <Link to='/mapkey'>맵키페이지로 가기</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path='/mapkey'>
              <KeyExample />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
