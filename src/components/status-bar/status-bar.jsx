import React from 'react';
import PropTypes from 'prop-types';
import uniquid from 'uniquid';

import { Paper, Button, ButtonGroup } from '@material-ui/core';

import useStyles from './status-bar-style';

const StatusBar = ({ progress }) => {
  const classes = useStyles();
  const a = ['I', 'II', ' III', 'IV', 'V'];
  return (
    <Paper className={classes.paper} style={{ padding: '0 0' }}>
      <ButtonGroup size="large" className={classes.buttonGroup}>
        {a.map((el, i) => {
          return i <= progress ? (
            <Button className={classes.progressBar} variant="contained" key={uniquid()}>
              {el}
            </Button>
          ) : (
            <Button className={classes.progressBar} key={uniquid()}>
              {el}
            </Button>
          );
        })}
      </ButtonGroup>
    </Paper>
  );
};

StatusBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default StatusBar;
