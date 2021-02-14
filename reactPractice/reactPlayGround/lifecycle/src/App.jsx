import { useState } from 'react';
import './App.css';
import ClassPage from './ClassPage';
import FunctionalPage from './FunctionalPage';

function App() {
  const [page, setPage] = useState(1);
  const changePage = () => {
    page === 0 ? setPage(1) : setPage(0);
  };
  return (
    <div className='App'>
      <button onClick={changePage}>
        {page === 0 ? '함수형 페이지로 가기' : '클래스형 페이지로 가기'}
      </button>
      {page === 0 ? <ClassPage /> : <FunctionalPage />}
    </div>
  );
}

export default App;
