import './App.css';
import Comment from './Components/Comment';
import Post from './Components/Post';

function App() {
  return (
    <div className='App'>
      <h1>포스트</h1>
      <Post />
      <h2>댓글</h2>
      <Comment />
    </div>
  );
}

export default App;
