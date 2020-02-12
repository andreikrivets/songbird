import React from 'react';
import PropTypes from 'prop-types';
import Player from 'react-hooks-player';

import { Typography } from '@material-ui/core';

import useStyles from './bird-info-style';

const BirdInfo = ({ info, progress }) => {
  const classes = useStyles();
  if (!info) {
    return (
      <div className={classes.pressAnyKeyToStart}>
        <Typography>
          <span>
            current level:
            {progress + 1}
          </span>
          <br />
          <span>press play to play</span>
        </Typography>
      </div>
    );
  }
  return (
    <div className={classes.birdInfoBlock}>
      <img src={info.image} alt="info.name" className={classes.picture} />
      <div style={{ maxWidth: '500px', margin: '0 1rem' }}>
        <Typography
          variant="h5"
          component="h5"
          className={classes.questionBirdName}
          style={{ backgroundColor: 'lightcyan' }}
        >
          {info.name}
        </Typography>
        <Typography variant="subtitle1" style={{ backgroundColor: 'lightcyan' }}>
          {info.species}
        </Typography>
        <Player
          url={info.audio}
          title={info.name}
          background="lightgray"
          className={classes.mediaContent}
        />
        <Typography paragraph className={classes.birdDescription}>
          {info.description}
        </Typography>
      </div>
    </div>
  );
};

BirdInfo.propTypes = {
  info: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]).isRequired,
  progress: PropTypes.number.isRequired,
};

export default BirdInfo;
