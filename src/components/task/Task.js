import React from 'react'
import './Task.scss'

function Task() {
  return (
    <li className="item">
      <img className='img' src="https://images.unsplash.com/photo-1644982647869-e1337f992828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
      <span className='text'>Todo text</span>
    </li>
  )
}

export default Task