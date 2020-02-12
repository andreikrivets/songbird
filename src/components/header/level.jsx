import React from 'react';
import PropTypes from 'prop-types';
import uniquid from 'uniquid';

import { Typography } from '@material-ui/core';

import useStyles from './header-style';

const Level = ({ lives, progress }) => {
  const classes = useStyles();
  const hearts = new Array(lives).fill(0).map(() => (
    <span role="img" aria-label="heart" key={uniquid()}>
      {' '}
      ❤️
    </span>
  ));
  return (
    <div className={classes.pointsBlock}>
      <Typography paragraph className={classes.points}>
        lives:
        {lives > 0 ? hearts : 0}
      </Typography>
      <Typography paragraph className={classes.points}>
        score:
        <b>{progress || 0}</b>
      </Typography>
    </div>
  );
};

Level.defaultProps = {
  lives: 5,
  // progress: 0,
};

Level.propTypes = {
  lives: PropTypes.number,
  progress: PropTypes.number.isRequired,
};

export default Level;
