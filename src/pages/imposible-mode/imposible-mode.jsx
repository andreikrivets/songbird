import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Paper, Typography } from '@material-ui/core';

import Header from '../../components/header';
import StatusBar from '../../components/status-bar';
import Question from '../../components/question';
import ResponseOptions from '../../components/response-options';
import BirdInfo from '../../components/bird-info';
import Footer from '../../components/footer';
import YouWinPage from '../congrat-page';
import Audio from '../../components/hidden-audio';

import getRandomBird from '../../utils/randomizer';

import useStyles from './imposible-mode-style';

const ImposibleMode = ({ decreaseLivesCount, setProgress, progress, lives }) => {
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);
  const [current, setCurrent] = useState('');

  const [checked, setChecked] = useState(true);
  const [bird, setBird] = useState(getRandomBird(!checked));
  const [group, answer] = bird;

  const toggleChecked = () => {
    setChecked(prev => !prev);
    if (!isOpen) setBird(getRandomBird(checked));
  };

  const pausePlayer = () => {
    const playback = document.getElementsByTagName('audio')[2] || '';
    playback.play();
    playback.pause();
  };

  if (lives === 0) return <YouWinPage progress={progress} mode="imposible" />;
  const handleAnswer = e => {
    const target = e.target.tagName === 'BUTTON' ? e.target : e.target.parentNode;
    const parent = target.parentNode;
    const index = Array.prototype.indexOf.call(parent.children, target);
    setCurrent(group[index]);
    if (index === answer && !isOpen) {
      target.classList.add(classes.correct);
      const correct = document.getElementById('correct') || '';
      correct.play();
      pausePlayer();
      setOpen(true);
    } else if (index !== answer && !isOpen && !target.classList.contains(classes.wrong)) {
      target.classList.add(classes.wrong);
      const wrong = document.getElementById('wrong') || '';
      wrong.play();
      decreaseLivesCount();
    }
  };

  const clearOptions = () => {
    const correct = document.querySelectorAll(`.${classes.correct}`);
    correct.forEach(el => el.classList.remove(classes.correct));
    const wrong = document.querySelectorAll(`.${classes.wrong}`);
    wrong.forEach(el => el.classList.remove(classes.wrong));
  };

  const nextPage = () => {
    if (isOpen) {
      pausePlayer();
      setOpen(false);
      setProgress();
      setCurrent('');
      clearOptions();
      setBird(getRandomBird(!checked));
    }
  };
  return (
    <div>
      <Audio />
      <Header lives={lives} progress={progress} mode="imposible" />
      <StatusBar progress={5} />
      <Question questionInfo={group[answer]} isOpen={isOpen} />
      <Paper className={classes.paper} style={{ display: 'flex', justifyContent: 'space-around' }}>
        <section className={classes.birdInfo}>
          <ResponseOptions variants={group} handleAnswer={handleAnswer} />
          {current ? (
            <BirdInfo info={current} progress={progress} />
          ) : (
            <div style={{ margin: '0 auto' }}>
              <Typography>
                this is imposible mode.
                <br />
                five lives, five chanses!
              </Typography>
            </div>
          )}
        </section>
      </Paper>
      <Footer isOpen={isOpen} nextPage={nextPage} toggleChecked={toggleChecked} />
    </div>
  );
};

ImposibleMode.propTypes = {
  decreaseLivesCount: PropTypes.func.isRequired,
  setProgress: PropTypes.func.isRequired,
  progress: PropTypes.number.isRequired,
  lives: PropTypes.number.isRequired,
};

export default ImposibleMode;
