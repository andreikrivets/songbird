import React from 'react';
import PropTypes from 'prop-types';
import Player from 'react-hooks-player';

import { Paper, Typography } from '@material-ui/core';

import '../../styles/audioplayerfix.css';

import useStyles from './question-style';

const Question = ({ questionInfo, isOpen }) => {
  const classes = useStyles();
  const name = isOpen ? questionInfo.name : '*** *** ***';
  const pic = isOpen ? questionInfo.image : 'https://images.emojiterra.com/mozilla/512px/1f426.png';
  return (
    <Paper className={classes.paper}>
      <section className={classes.questionBlock}>
        <section className={classes.questionMain}>
          <img src={pic} alt={name} className={classes.picture} />
        </section>
        <section className={classes.questionMain}>
          <Typography variant="subtitle1" className={classes.questionBirdName}>
            {name}
          </Typography>
          <Player
            url={questionInfo.audio}
            title="** **"
            background="lightgray"
            className={classes.mediaContent}
          />
        </section>
      </section>
    </Paper>
  );
};

Question.propTypes = {
  questionInfo: PropTypes.shape().isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Question;
