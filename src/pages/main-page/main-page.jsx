import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Paper } from '@material-ui/core';

import Header from '../../components/header';
import StatusBar from '../../components/status-bar';
import Question from '../../components/question';
import ResponseOptions from '../../components/response-options';
import BirdInfo from '../../components/bird-info';
import Footer from '../../components/footer';
import YouWinPage from '../congrat-page';
import Audio from '../../components/hidden-audio';

import getRandomBird from '../../utils/randomizer';

import useStyles from './main-page-style';

const MainPage = ({ setTotalScore, setProgress, totalScore, progress }) => {
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);
  const [current, setCurrent] = useState('');
  const [listScore, setListScore] = useState(5);

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

  if (progress === 5) return <YouWinPage totalScore={totalScore} />;
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
      setTotalScore(listScore);
      setOpen(true);
    } else if (index !== answer && !isOpen && !target.classList.contains(classes.wrong)) {
      target.classList.add(classes.wrong);
      const wrong = document.getElementById('wrong') || '';
      wrong.play();
      setListScore(listScore - 1);
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
      setListScore(5);
      clearOptions();
      setBird(getRandomBird(!checked));
    }
  };
  return (
    <div>
      <Audio />
      <Header listScore={listScore} totalScore={totalScore} />
      <StatusBar progress={progress} />
      <Question questionInfo={group[answer]} isOpen={isOpen} />
      <Paper className={classes.paper} style={{ display: 'flex', justifyContent: 'space-around' }}>
        <section className={classes.birdInfo}>
          <ResponseOptions variants={group} handleAnswer={handleAnswer} />
          <BirdInfo info={current} progress={progress} />
        </section>
      </Paper>
      <Footer isOpen={isOpen} nextPage={nextPage} toggleChecked={toggleChecked} />
    </div>
  );
};

MainPage.propTypes = {
  setTotalScore: PropTypes.func.isRequired,
  setProgress: PropTypes.func.isRequired,
  totalScore: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
};

export default MainPage;
