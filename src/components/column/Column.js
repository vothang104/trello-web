import Task from 'components/task/Task'
import React from 'react'
import './Column.scss'

function Column() {
  return (
    <div className="column">
      <h3 className='title'>Trello todo</h3>
      <ul className="list-todo">
        <Task></Task>
        <li className="item">your todo</li>
        <li className="item">your todo</li>
        <li className="item">your todo</li>
      </ul>
      <div className="todo-add">
        <input placeholder='Filling todo' type="text" />
        <button>Add</button>
      </div>
    </div>
  )
}

export default Column