import React from 'react';
import PropTypes from 'prop-types';

import { Button, Switch, Tooltip, FormControlLabel } from '@material-ui/core';

import useStyles from './footer-style';

const Footer = ({ isOpen, nextPage, toggleChecked }) => {
  const classes = useStyles();
  const button = isOpen ? 'contained' : 'outlined';
  return (
    <div className={classes.nextPageWrapper}>
      <Button
        type="button"
        variant={button}
        onClick={() => {
          return isOpen ? nextPage() : null;
        }}
      >
        next
      </Button>
      <Tooltip title="change database" arrow>
        <FormControlLabel
          control={<Switch onChange={toggleChecked} />}
          label="database"
          labelPlacement="top"
        />
      </Tooltip>
    </div>
  );
};

Footer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  nextPage: PropTypes.func.isRequired,
  toggleChecked: PropTypes.func.isRequired,
};

export default Footer;
