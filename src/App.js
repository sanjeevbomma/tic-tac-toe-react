import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const init = { '11': '', '12': '', '13': '', '21': '', '22': '', '23': '', '31': '', '32': '', '33': '' };
  const [list, setList] = useState(init);
  const players = ['X', 'O'];
  const [playersTurn, setPlayerTurn] = useState(players[0]);
  const [gameStatus, setGameStatus] = useState('');

  const playerChange = () => {
    setPlayerTurn(playersTurn == 'O' ? 'X' : 'O');
    checkPositions();
  }

  const handleClick = (key) => {
    if (!gameStatus) {
      setList({ ...list, [key]: playersTurn });
    }
  }

  const resetGame = () => {
    setGameStatus('');
    setList(init);
  }

  const checkPositions = () => {

    if (list['11'] && list['12'] && list['13'] && list['11'] == list['12'] && list['11'] == list['13']) {
      setGameStatus('Game Winner:  ' + list['11'])
    }
    else if (list['21'] && list['22'] && list['23'] && list['21'] == list['22'] && list['21'] == list['23']) {
      setGameStatus('Game Winner:  ' + list['21'])
    }
    else if (list['31'] && list['32'] && list['33'] && list['31'] == list['32'] && list['31'] == list['33']) {
      setGameStatus('Game Winner:  ' + list['31'])
    }
    else if (list['11'] && list['21'] && list['31'] && list['11'] == list['21'] && list['11'] == list['31']) {
      setGameStatus('Game Winner:  ' + list['11'])
    }
    else if (list['12'] && list['22'] && list['32'] && list['12'] == list['22'] && list['12'] == list['32']) {
      setGameStatus('Game Winner:  ' + list['12'])
    }
    else if (list['13'] && list['23'] && list['33'] && list['13'] == list['23'] && list['13'] == list['33']) {
      setGameStatus('Game Winner:  ' + list['13'])
    }
    else if (list['11'] && list['22'] && list['33'] && list['11'] == list['22'] && list['11'] == list['33']) {
      setGameStatus('Game Winner:  ' + list['33'])
    }
    else if (list['11'] && list['22'] && list['33'] && list['11'] == list['22'] && list['11'] == list['33']) {
      setGameStatus('Game Winner:  ' + list['33'])
    }
    else if (list['11'] && list['12'] && list['13'] && list['21'] && list['22'] && list['23'] && list['31'] && list['32'] && list['33']) {
      setGameStatus('Game Draw');
    }


  }

  useEffect(() => playerChange(), [list]);
  return (
    <div className='Parent'>
      <div className="App">
        {Object.keys(list).map(function (key) {
          return <button className='tile-of-board' key={key} onClick={() => handleClick(key)} disabled={list[key] ? true : false}>{list[key]}</button>
        })}
      </div>
      <div className="App">
        {players.length && players.map((p) => <span key={p}>Player: {p}</span>)}
      </div>
      <div className="App">
        {gameStatus}
      </div>
      <div className="App">
        Turn: {playersTurn}
      </div>
      <div className="App">
        <button onClick={() => resetGame()}>reset</button>
      </div>
    </div>
  );
}

export default App;
