import React, { useEffect, useState } from 'react'
import './BoardContent.scss'

import { initialData } from 'actions/initialData'
import Column from 'components/column/Column'
import { isEmpty } from 'lodash'
import { v4 } from 'uuid'
import { mapOrder } from 'util/sort'

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
  
  return (
    <div className="board-columns">
      {
        columns && columns.length > 0 &&
        columns.map(column =>(
        <Column
        column={column}
        key={v4()}></Column>
          )
        )
      }
    </div>
  )
}

export default BoardContent