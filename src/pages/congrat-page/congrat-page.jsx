import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@material-ui/core';

import Header from '../../components/header';
import StatusBar from '../../components/status-bar';

import useStyles from './congrat-page-style';

const YouWinPage = ({ totalScore, mode, progress }) => {
  const message = mode === 'imposible' ? 'You Lose!' : 'Game Over!';
  const score = mode === 'imposible' ? `${progress}` : `${totalScore}/25`;
  const classes = useStyles();
  const [counter, setCounter] = useState(0);
  const r = useRef(null);
  r.current = { counter, setCounter };
  useEffect(() => {
    const id = setInterval(() => {
      if (r.current.counter === 4) r.current.setCounter(0);
      else r.current.setCounter(r.current.counter + 1);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, ['once']);

  const imageSource =
    totalScore !== 25
      ? 'https://c7.uihere.com/files/310/653/124/duck-face-goose-bird-emoji-duck.jpg'
      : 'https://memepedia.ru/wp-content/uploads/2016/03/a1LjPuKglGo.jpg';
  return (
    <>
      <Header totalScore={totalScore} mode={mode} progress={progress} />
      <StatusBar progress={counter} />
      <div className={classes.youWinWrapper}>
        <Typography variant="h5">
          <Typography>{message}</Typography>
          <p>{score}</p>
          <a href="./" className={classes.link}>
            play again
          </a>
        </Typography>
        <img src={imageSource} alt="bird" className={classes.picture} />
      </div>
    </>
  );
};

YouWinPage.defaultProps = {
  mode: '',
  progress: 0,
  totalScore: 0,
};

YouWinPage.propTypes = {
  totalScore: PropTypes.number,
  mode: PropTypes.string,
  progress: PropTypes.number,
};

export default YouWinPage;
