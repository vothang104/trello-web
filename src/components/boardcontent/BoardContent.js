import React, { useEffect, useState } from 'react'
import './BoardContent.scss'

import { initialData } from 'actions/initialData'
import Column from 'components/column/Column'
import { isEmpty } from 'lodash'
import { v4 } from 'uuid'
import { mapOrder } from 'util/sort'
import { Container, Draggable } from 'react-smooth-dnd'
import { applyDrag } from 'util/dragDrop'

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
    console.log('drop result ~ ', dropResult);
    const cloneBoards = {...boards};
    let cloneColumns = [...cloneBoards.columns]

    cloneColumns = applyDrag(cloneColumns, dropResult);
    cloneBoards.columns = cloneColumns;
    cloneBoards.columnOrder = cloneColumns.map(item => item.id);
    setColumns(cloneColumns);
    setBoards(cloneBoards);
  }
  // on drag card
  const onCardDrop = (columnId, dropResult) => {
    if(dropResult.addedIndex !== null || dropResult.removedIndex !== null) {
      const cloneColumns = [...columns]
      let currentColumn = cloneColumns.find(item => item.id === columnId);
      currentColumn.cards = applyDrag(currentColumn.cards, dropResult);
      currentColumn.cardOrder = currentColumn.cards.map(item => item.id);
      setColumns(cloneColumns);
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
          onCardDrop={onCardDrop}
          column={column}
          ></Column>
        </Draggable>
          )
        )
      }
    </Container>
    <div
    className='flex items-center gap-x-2 cursor-pointer group grow h-fit p-4 rounded-lg bg-gray-400 bg-opacity-30 text-white text-xl'
    >
    <svg className='group-hover:font-semibold h-6 w-6' xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
    <span className='group-hover:font-semibold'>Add new column</span>
    </div>
    </div>
  )
}

export default BoardContent