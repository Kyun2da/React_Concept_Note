import { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';

const AddTodo = ({ addTodo }) => {
  const [input, setInput] = useState('');
  const onChangeInput = (e) => {
    setInput(e.target.value);
  };
  const handleAddTodo = () => {
    addTodo(input);
    setInput('');
  };
  return (
    <div>
      <input onChange={onChangeInput} value={input} />
      <button className='add-todo' onClick={handleAddTodo}>
        투두 리스트 추가하기
      </button>
    </div>
  );
};

export default connect(null, { addTodo })(AddTodo);
