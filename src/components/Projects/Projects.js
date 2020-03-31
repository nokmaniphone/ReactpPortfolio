import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [{ name: 'Felp', description: "A mobile-responsive, full stack application, utilizing MySQL, Express, React-views, and Node. An app restaurant for users to check a rating by Search name and location . Hand built user authentication to Register and login to write a review and give restaurant a rating, and using UI kit styling library. Utilizes RESTful routes.", github: 'https://github.com/ariasadeghi530/eFlow-', deployed: 'https://frozen-atoll-04274.herokuapp.com/' },
{ name: 'Pin', description: "Project Idea Network, a platform for developers to share project ideas for their portfolios. Currently in development. April 2020", github: 'https://github.com/ariasadeghi530/pin', deployed: 'https://github.com/ariasadeghi530/pin' },
{ name: 'GitHoops', description: "A mobile-responsive web app with up-to-date NBA game, team, and player information, utilizing theSportsDB API, mySportsFeed API, ESPN API, and Google Maps API. Utilized HTML, CSS, JavaScript, and Materialize's styling library.", github: 'https://github.com/ariasadeghi530/gitHoops', deployed: 'https://ariasadeghi530.github.io/gitHoops/' }]

export default function Projects() {
  const classes = useStyles();
  return (
    <Grid container spacing={4}>
      {cards.map((card, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image="https://source.unsplash.com/random"
              title="Image title"
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {card.name}
              </Typography>
              <Typography>
                {card.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button href={card.github} target="_blank" size="small" color="primary">
                Github
          </Button>
              <Button href={card.deployed} target="_blank" size="small" color="primary">
                Deployed
          </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}