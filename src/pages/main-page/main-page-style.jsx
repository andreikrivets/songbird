import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  paper: {
    width: '98%',
    margin: '0 auto',
    padding: '1% 0',
  },
  birdInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  correct: {
    '&::before': {
      content: '"👌"',
    },
  },
  wrong: {
    '&::before': {
      content: '"❌"',
    },
  },
});

export default useStyles;
