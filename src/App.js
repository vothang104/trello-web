import React from 'react';
import './App.scss'
import AppBar from 'components/appbar/AppBar';
import BoardBar from 'components/boardbar/BoardBar';
import BoardContent from 'components/boardcontent/BoardContent';

function App() {
  return (
    <div className="trello">
      <AppBar></AppBar>
      <BoardBar></BoardBar>
      <BoardContent></BoardContent>
    </div>
  );
}

export default App;
