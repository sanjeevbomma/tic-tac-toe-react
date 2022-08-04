import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const init = { '11': '', '12': '', '13': '', '21': '', '22': '', '23': '', '31': '', '32': '', '33': '' };
  const [list, setList] = useState(init);
  const players = ['X', 'O'];
  const [playersTurn, setPlayerTurn] = useState(players[1]);
  const [gameStatus, setGameStatus] = useState('');

  const playerChange = () => {
    checkPositions();
    setPlayerTurn(playersTurn === 'O' ? 'X' : 'O');
  }

  const handleClick = (key) => {
    if (!gameStatus) {
      setList({ ...list, [key]: playersTurn });
    }
  }

  const resetGame = () => {
    setPlayerTurn('O');
    setGameStatus('');
    setList(init);
  }

  const checkPositions = () => {

    if (list['11'] && list['12'] && list['13'] && list['11'] === list['12'] && list['11'] === list['13']) {
      setGameStatus('Game Winner is  ' + list['11'])
    }
    else if (list['21'] && list['22'] && list['23'] && list['21'] === list['22'] && list['21'] === list['23']) {
      setGameStatus('Game Winner is  ' + list['21'])
    }
    else if (list['31'] && list['32'] && list['33'] && list['31'] === list['32'] && list['31'] === list['33']) {
      setGameStatus('Game Winner is  ' + list['31'])
    }
    else if (list['11'] && list['21'] && list['31'] && list['11'] === list['21'] && list['11'] === list['31']) {
      setGameStatus('Game Winner is  ' + list['11'])
    }
    else if (list['12'] && list['22'] && list['32'] && list['12'] === list['22'] && list['12'] === list['32']) {
      setGameStatus('Game Winner is  ' + list['12'])
    }
    else if (list['13'] && list['23'] && list['33'] && list['13'] === list['23'] && list['13'] === list['33']) {
      setGameStatus('Game Winner is  ' + list['13'])
    }
    else if (list['11'] && list['22'] && list['33'] && list['11'] === list['22'] && list['11'] === list['33']) {
      setGameStatus('Game Winner is  ' + list['33'])
    }
    else if (list['11'] && list['22'] && list['33'] && list['11'] === list['22'] && list['11'] === list['33']) {
      setGameStatus('Game Winner is  ' + list['33'])
    }
    else if (list['11'] && list['12'] && list['13'] && list['21'] && list['22'] && list['23'] && list['31'] && list['32'] && list['33']) {
      setGameStatus('Game Draw');
    }


  }
  // eslint-disable-next-line 
  useEffect(() => playerChange(), [list]);

  return (
    <div className='Parent'>
      <div className='Child'>
        <div className="Grid padding2rem">
          {Object.keys(list).map(function (key) {
            return <button className={`tile-of-board ${list[key] ? '' : 'cursorPointer'}`} key={key} onClick={() => handleClick(key)} disabled={list[key] ? true : false}>{list[key]}</button>
          })}

        </div>
        {gameStatus && <div className="endCard paddingHor2rem paddingVer1rem">
          {gameStatus}
        </div>}
      </div>
      <div className="Grid paddingHor2rem">
        {players.length && players.map((p) => <div className={`button ${p === playersTurn ? 'green borderBottom' : 'gray'}`} key={p}>Player <span className='textShadow fontLarge'>{p}</span></div>)}
      </div>

      <div className="Grid paddingHor2rem paddingVer1rem">
        <button type="button" className='button red cursorPointer' onClick={() => resetGame()}>Reset</button>
      </div>
    </div>
  );
}

export default App;
