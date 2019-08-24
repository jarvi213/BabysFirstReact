import React from 'react';
import MakeDiv from './makeDiv';
import './App.css';

function App() {
  return (
    <main className='App'> 
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        < MakeDiv />
      </div>
    </main>
  );
}

export default App;
