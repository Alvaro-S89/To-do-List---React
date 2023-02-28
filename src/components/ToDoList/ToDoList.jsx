import React from 'react'
import ToDo from '../ToDo/ToDo'
import ToDoFilter from '../ToDoFilter/ToDoFilter'

const ToDoList = ({ todos, handleSetComplete, handleDelete, activeFilter, handleClearComplete, showAllTodos, showActiveTodos, showCompletedTodos}) => {
  return (
    <div className='flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl'>
        {todos.map(todo =>{
          return (
            <ToDo  key={todo.id} todo={todo} handleSetComplete={handleSetComplete} handleDelete={handleDelete} />
          )
        })}
        <ToDoFilter
          activeFilter={activeFilter}
          total={todos.length}
          showAllTodos={showAllTodos} 
          showActiveTodos={showActiveTodos} 
          showCompletedTodos={showCompletedTodos}
          handleClearComplete={handleClearComplete} 
        />
    </div>
  )
}

export default ToDoList