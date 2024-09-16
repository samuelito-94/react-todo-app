import React from 'react';
import {TodoRowItem} from './TodoRowItem';
import { TodoModel } from '../models/todo-model';

interface Props {
  todos: TodoModel[],
  deleteTodo: Function
}

export const TodoTable: React.FC<Props> = ({todos, deleteTodo})  => {

  return (
    
        <table className='table table-hover'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Description</th>
              <th scope='col'>Assigned</th>
            </tr>
          </thead>
          <tbody>
            { todos.map(item => 
            <TodoRowItem 
                key={item.rowNumber} 
                rowNumber={item.rowNumber} 
                rowDescription={item.rowDescription} 
                rowAssigned={item.rowAssigned}
                deleteTodo={deleteTodo}
              />)}
          </tbody>
        </table>
      
  );
}
