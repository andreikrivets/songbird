import React from 'react';
import PropTypes from 'prop-types';

import { Paper, Typography } from '@material-ui/core';

import Points from './points';
import Level from './level';

import useStyles from './header-style';

const Header = ({ listScore, totalScore, mode, lives, progress }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <header className={classes.headerWrapper}>
        <Typography variant="h1" component="h2" className={classes.header} gutterBottom>
          <a href="./" className={classes.link}>
            <span role="img" aria-label="bird">
              🐦
            </span>
          </a>
          BisQiz
        </Typography>
        {mode === 'imposible' ? (
          <Level lives={lives} progress={progress} />
        ) : (
          <Points classes={classes} totalScore={totalScore} listScore={listScore} />
        )}
      </header>
    </Paper>
  );
};

Header.defaultProps = {
  listScore: 0,
  mode: '',
  totalScore: 0,
  lives: 0,
  progress: 0,
};

Header.propTypes = {
  listScore: PropTypes.number,
  totalScore: PropTypes.number,
  mode: PropTypes.string,
  lives: PropTypes.number,
  progress: PropTypes.number,
};

export default Header;
