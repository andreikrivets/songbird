import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  responseOptionsButtonGroup: {
    flexDirection: 'column',
    justifyContent: 'start',
    width: '30%',
  },
  responseOptionsButton: {
    textTransform: 'none',
    minWidth: '30%',
    fontSize: '0.8rem',
  },
});

export default useStyles;
