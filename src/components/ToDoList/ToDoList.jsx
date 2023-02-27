import React from 'react'
import ToDo from '../ToDo/ToDo'
import ToDoFilter from '../ToDoFilter/ToDoFilter'

const ToDoList = ({ todos }) => {
  return (
    <div className='flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl'>
        {todos.map(todo =>{
          return (
            <ToDo  key={todo.id} todo={todo} />
          )
        })}
        <ToDoFilter />
    </div>
  )
}

export default ToDoList