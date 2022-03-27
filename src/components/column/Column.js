import Card from 'components/card/Card'
import React from 'react'
import { mapOrder } from 'util/sort';
import { v4 } from 'uuid';
import './Column.scss'

function Column({ column }) {
  const cards = column.cards;
  if(cards) {
    mapOrder(cards, column.cardOrder, 'id')
  }
  return (
    <div className="column">
      <h3 className='title'>{column.title}</h3>
      <ul className="list-todo">
        {
          cards && cards.length > 0 &&
          cards.map(card => (
            <Card
            card={card}
            key={v4()}
            ></Card>
          ))
        }
      </ul>
      <div className="todo-add">
        <input placeholder='Filling todo' type="text" />
        <button>Add</button>
      </div>
    </div>
  )
}

export default Column