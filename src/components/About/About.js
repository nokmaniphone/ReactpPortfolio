import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CardHeader from '@material-ui/core/CardHeader';
import Link from '@material-ui/core/Link';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import purple from '@material-ui/core/colors/purple';

import profile from "../../assets/img/nokmaniphone.jpg";



const useStyles = makeStyles((theme) => ({
  profile: {
    width: 400,
    height:550,
    borderRadius: "50% !important"
    

  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  primary: {
    color:purple.A400,

  },
  textprimary: {
    color:"white"
  },

}));
export default function Album() {
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="m" style={{ backgroundColor: 'black',  }}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
        <img src={profile} alt="..." align="center" className={classes.profile} />
     </Typography>
       
        <Typography component="h1" variant="h2" align="center" className={classes.primary} gutterBottom>
          Nokmaniphone Santhavichit Sayavong
     </Typography>
        <Typography variant="h5" align="center" className={classes.textprimary} paragraph>
          I am a new programmer. I am very excited with all of the opportunities and challenges ahead of me in the programming game.
     </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button href='https://github.com/nokmaniphone' target="_blank" variant="outlined" className={classes.primary}>
                <GitHubIcon />
           </Button>
            </Grid>
            <Grid item>
              <Button href='https://www.linkedin.com/in/nokmaniphone-santhavicit-sayavong-10307a177' target="_blank" variant="outlined" className={classes.primary}>
                <LinkedInIcon />
           </Button>
            </Grid>
            <Grid item>
              <Button href="https://drive.google.com/open?id=1vx7EKtc3j2gds45RIT32EEZMw5ACau9EFXkirdYvUfc" target="_blank" variant="outlined" className={classes.primary}>
                <PictureAsPdfIcon /> Resume
           </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )

}