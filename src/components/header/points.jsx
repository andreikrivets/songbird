import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@material-ui/core';

import useStyles from './header-style';

const Points = ({ totalScore, listScore }) => {
  const classes = useStyles();
  return (
    <div className={classes.pointsBlock}>
      <Typography paragraph className={classes.points}>
        total score:
        <b className={totalScore === 25 ? classes.maximum : 'normal'}>
          {totalScore}
          pts
        </b>
      </Typography>
      <Typography paragraph className={classes.points}>
        page score:
        <b>
          {listScore || 0}
          pts
        </b>
      </Typography>
    </div>
  );
};

Points.propTypes = {
  totalScore: PropTypes.number.isRequired,
  listScore: PropTypes.number.isRequired,
};

export default Points;
