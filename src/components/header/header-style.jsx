import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  paper: {
    width: '98%',
    margin: '0 auto',
    padding: '1% 0',
  },
  headerWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  header: {
    fontSize: '5vh',
    backgroundColor: 'lightcyan',
    margin: '0 0',
  },
  link: {
    textDecoration: 'none',
  },
  pointsBlock: {
    backgroundColor: 'lightcyan',
  },
  points: {
    margin: '0 0',
    padding: '0 0',
  },
});

export default useStyles;
