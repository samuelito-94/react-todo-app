import { useState } from 'react';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

const INITIAL_TODOS = [
  {rowNumber: 1, rowDescription: 'Feed puppy', rowAssigned: 'Samuel'},
  {rowNumber: 2, rowDescription: 'Make breakfast', rowAssigned: 'Derek'},
  {rowNumber: 3, rowDescription: 'Prepare dinner', rowAssigned: 'Pepe'},
  {rowNumber: 4, rowDescription: 'Take Shower', rowAssigned: 'Samuel'},
  {rowNumber: 5, rowDescription: 'Do karate', rowAssigned: 'Kuiny'},
  {rowNumber: 6, rowDescription: 'Water plants', rowAssigned: 'Caleb'},
]

function App() {

  const [todos, setTodos] = useState(INITIAL_TODOS);
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const onAddTodo = (description, assigned) => {
    let rowNumber = 1;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    }
    const newTodo = {
      rowNumber,
      rowDescription: description,
      rowAssigned: assigned
    }
    setTodos(todos => [...todos, newTodo])
  }

  const onDeleteTodo = (deleteTodoRowNumber) => {
    const filtered = [...todos].filter((item) => item.rowNumber !== deleteTodoRowNumber);
    setTodos(filtered);
  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} deleteTodo={onDeleteTodo} />
          <button className='btn btn-primary' onClick={() => setShowAddTodoForm(!showAddTodoForm)}>
            {showAddTodoForm ? 'Close new todo' : 'New Todo'}
          </button> 
          { showAddTodoForm && <NewTodoForm addTodo={onAddTodo} /> }
        </div>
      </div>
    </div>
  );
}

export default App;
