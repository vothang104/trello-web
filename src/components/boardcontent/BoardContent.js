import React, { useEffect, useState } from 'react'
import './BoardContent.scss'

import { initialData } from 'actions/initialData'
import Column from 'components/column/Column'
import { isEmpty } from 'lodash'
import { v4 } from 'uuid'
import { mapOrder } from 'util/sort'
import { Container, Draggable } from 'react-smooth-dnd'
<<<<<<< HEAD
import { Container as BootstrapContainer, Col, Row } from 'react-bootstrap'
=======
import { applyDrag } from 'util/dragDrop'
>>>>>>> 3c0945d5a8266332c4589c25ca92cd3b35c0b552

function BoardContent() {
  const [boards, setBoards] = useState({})
  const [columns, setColumns] = useState([])

  useEffect(() => {
    const boardFromDB = initialData.boards.find(board => board.id === 'board-1')
    if(boardFromDB) {
      setBoards(boardFromDB)
      boardFromDB.columns.sort((a, b) => {
          return boardFromDB.columnOrder.indexOf(b.id) - boardFromDB.columnOrder.indexOf(a.id)
        })
      setColumns(mapOrder(boardFromDB.columns, boardFromDB.columnOrder, 'id'))
    }
  }, [])
  if(isEmpty(boards)) return <div className='not-found'>Board not found</div>

  const onColumnDrop = (dropResult) => {
    let newColumns = [...columns];
    let newBoards = {...boards};

    newColumns = applyDrag(newColumns, dropResult);
    setColumns(newColumns);
    const newColumnOrder = newColumns.reduce((initialData, item) => {
      return [...initialData, item.id];
    }, [])
    newBoards = {
      ...newBoards,
      columnOrder: newColumnOrder,
      columns: newColumns
    }
    setBoards(newBoards);
  }
  // onCardDrop function
  const onCardDrop = (columnId, dropResult) => {
    if(dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
      console.log('column id ~ ', columnId);
      console.log('dropresult ~ ', dropResult);
      const newColumns = [...columns];
      const currentColumn = newColumns.find(item => item.id === columnId);
      
      currentColumn.cards = applyDrag(currentColumn.cards, dropResult);
      currentColumn.cardOrder = currentColumn.cards.map(item => item.id);
      setColumns(newColumns);
    }
  }
  
  return (
    <div className="board-columns">
    <Container
    orientation='horizontal'
    onDrop={onColumnDrop}
    dragHandleSelector=".column-drag-handle"
    getChildPayload={index => columns[index]}
    dropPlaceholder={{
      animationDuration: 150,
      showOnTop: true,
      className: 'cards-drop-preview'
    }}
    >
      {
        columns && columns.length > 0 &&
        columns.map(column =>(
        <Draggable key={v4()}>
          <Column
          column={column}
          onCardDrop={onCardDrop}
          ></Column>
        </Draggable>
          )
        )
      }
    </Container>
    <div
    className='flex gap-x-3 cursor-pointer text-white hover:font-medium basis-1/4 h-fit p-4 rounded-lg bg-[#eee] bg-opacity-30'
    >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
    <span>Add another column</span>
    </div>
    </div> 
  )
}

export default BoardContent