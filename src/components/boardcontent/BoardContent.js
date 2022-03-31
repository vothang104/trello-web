import React, { useEffect, useState } from 'react'
import './BoardContent.scss'

import { initialData } from 'actions/initialData'
import Column from 'components/column/Column'
import { isEmpty } from 'lodash'
import { v4 } from 'uuid'
import { mapOrder } from 'util/sort'
import { Container, Draggable } from 'react-smooth-dnd'
import { Container as BootstrapContainer, Col, Row } from 'react-bootstrap'

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
    console.log(dropResult);
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
          ></Column>
        </Draggable>
          )
        )
      }
    </Container>
    </div>
  )
}

export default BoardContent