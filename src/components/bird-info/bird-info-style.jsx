import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  pressAnyKeyToStart: {
    margin: '0 auto',
  },
  birdInfoBlock: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  picture: {
    width: 'auto',
    maxHeight: '25vh',
    padding: '0 0',
    borderRadius: '20px',
    height: 'min-content',
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
  birdDescription: {
    fontSize: '0.8rem',
    maxWidth: '100%',
  },
});

export default useStyles;
