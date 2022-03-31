import Card from 'components/card/Card'
import React from 'react'
import { mapOrder } from 'util/sort';
import { v4 } from 'uuid';
import './Column.scss'
import { Container, Draggable } from 'react-smooth-dnd'

function Column({ column, onCardDrop }) {
  const cards = column.cards;
  if(cards) {
    mapOrder(cards, column.cardOrder, 'id')
  }
  
  return (
    <div className="column">
      <h3 className='title column-drag-handle'>{column.title}</h3>
      <div className="list-todo">
      <Container
      orientation='vertical'
      groupName='column'
      onDrop={dropResult => onCardDrop(column.id, dropResult)}
      dragHandleSelector=".card-drag-handle"
      getChildPayload={index => cards[index]}
      dropPlaceholder={{
        animationDuration: 150,
        showOnTop: true,
        className: 'cards-drop-preview'
      }}
      >
        {
          cards && cards.length > 0 &&
          cards.map(card => (
          <Draggable key={v4()}>
            <Card
            card={card}
            ></Card>
          </Draggable>
          ))
        }
        </Container>
      </div>
      <div className="todo-add">
        <input placeholder='Filling todo' type="text" />
        <button>Add</button>
      </div>
    </div>
  )
}

export default Column