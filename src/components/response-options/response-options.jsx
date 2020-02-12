import React from 'react';
import PropTypes from 'prop-types';

import { Button, ButtonGroup } from '@material-ui/core';

import useStyles from './response-options-style';

const ResponseOptions = ({ variants, handleAnswer }) => {
  if (!variants) return null;
  const classes = useStyles();
  return (
    <ButtonGroup orientation="vertical" className={classes.responseOptionsButtonGroup}>
      {variants.map(el => (
        <Button onClick={handleAnswer} className={classes.responseOptionsButton} key={el.id}>
          {el.name}
        </Button>
      ))}
    </ButtonGroup>
  );
};

ResponseOptions.propTypes = {
  variants: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  handleAnswer: PropTypes.func.isRequired,
};

export default ResponseOptions;
