import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import purple from '@material-ui/core/colors/purple';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      Nokmaniphone Santhavichit Sayavong
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  primary: {
    color: purple.A400,

  },
}));


export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        <Link className={classes.primary} href="nokmaniphonesayavong@gmail.com">
          Contact Me
      </Link>
      </Typography>
      <Copyright />
    </footer>
  )
}