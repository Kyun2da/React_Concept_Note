import React from 'react';
import { connect } from 'react-redux';
import { getTodosByVisibilityFilter } from '../redux/selectors';
import Todo from './Todo';

const TodoList = ({ todos }) => {
  return (
    <ul className='todo-list'>
      {todos && todos.length
        ? todos.map((todo, index) => {
            return <Todo key={`todo-${todo.id}`} todo={todo} />;
          })
        : '아직 투두가 없습니다.'}
    </ul>
  );
};

const mapStateToProps = (state) => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return { todos };
};

export default connect(mapStateToProps)(TodoList);
