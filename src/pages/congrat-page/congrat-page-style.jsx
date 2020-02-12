import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  youWinWrapper: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '2%',
  },
  link: {
    textDecoration: 'none',
  },
  picture: {
    width: 'auto',
    maxHeight: '25vh',
    padding: '0 0',
    borderRadius: '20px',
  },
});

export default useStyles;
