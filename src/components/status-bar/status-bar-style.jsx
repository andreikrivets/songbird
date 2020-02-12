import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  paper: {
    width: '98%',
    margin: '0 auto',
    padding: '1% 0',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  progressBar: {
    width: '20%',
  },
});

export default useStyles;
