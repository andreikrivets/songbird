import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  paper: {
    width: '98%',
    margin: '0 auto',
    padding: '1% 0',
  },
  questionBlock: {
    width: '80%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    textAlign: 'center',
    minHeight: '200px',
    height: 'auto',
  },
  questionMain: {
    width: '100%',
  },
  picture: {
    width: 'auto',
    maxHeight: '25vh',
    padding: '0 0',
    borderRadius: '20px',
  },
  questionBirdName: {
    fontSize: '3vh',
    backgroundColor: 'lightcyan',
  },
  mediaContent: {
    fontFamily: 'Roboto',
    minWidth: '0px',
    padding: '0 0',
    margin: '0 0',
  },
});

export default useStyles;
