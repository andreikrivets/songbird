import React, { useState } from 'react';

import { Button } from '@material-ui/core';

import MainPage from './pages/main-page';
import ImposibleMode from './pages/imposible-mode';

const App = () => {
  const [totalScore, setTotalScore] = useState(0);
  const [progress, setProgress] = useState(0);
  const [impMode, setImpMode] = useState(true);
  const [mess, setMess] = useState('switch to imposible mode');

  const [lives, setLives] = useState(5);

  const handlePageScore = score => {
    setTotalScore(totalScore + score);
  };

  const handleProgress = () => {
    setProgress(progress + 1);
  };

  const handleGameModeChange = () => {
    if (impMode) setMess('switch to normal mode');
    else setMess('switch to imposible mode');
    setTotalScore(0);
    setProgress(0);
    setImpMode(!impMode);
  };

  const handleDead = () => {
    setLives(lives - 1);
  };

  return (
    <>
      {impMode ? (
        <MainPage
          setTotalScore={handlePageScore}
          setProgress={handleProgress}
          totalScore={totalScore}
          progress={progress}
        />
      ) : (
        <ImposibleMode
          decreaseLivesCount={handleDead}
          setProgress={handleProgress}
          progress={progress}
          lives={lives}
        />
      )}

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button style={{ marginTop: '1rem' }} onClick={handleGameModeChange} variant="contained">
          {mess}
        </Button>
      </div>
    </>
  );
};

export default App;
