import './App.scss'

function App() {
  return (
    <div className="trello">
      <nav className="navbar app">App bar</nav>
      <nav className="navbar board">Board bar</nav>
      <div className="board-columns">
        <div className="column">
          <h3 className='title'>Trello todo</h3>
          <ul className="list-todo">
            <li className="item">
              <img className='img' src="https://images.unsplash.com/photo-1644982647869-e1337f992828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
              <span className='text'>Todo text</span>
            </li>
            <li className="item">your todo</li>
            <li className="item">your todo</li>
            <li className="item">your todo</li>
          </ul>
          <div className="todo-add">
            <input placeholder='Filling todo' type="text" />
            <button>Add</button>
          </div>
        </div>
        <div className="column">
          <h3 className='title'>Trello todo</h3>
          <ul className="list-todo">
            <li className="item">your todo</li>
            <li className="item">your todo</li>
            <li className="item">your todo</li>
            <li className="item">your todo</li>
            <li className="item">your todo</li>
            <li className="item">your todo</li>
            <li className="item">your todo</li>
          </ul>
          <div className="todo-add">
            <input placeholder='Filling todo' type="text" />
            <button>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
