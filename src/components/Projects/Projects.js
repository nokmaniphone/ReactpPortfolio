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
import purple from '@material-ui/core/colors/purple'


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
  primary: {
    color: purple.A400,
  },
}));

const cards = [{
  name: 'Felp', description: "This is a restaurant application whereby users can view restaurant ratings by simply searching for the establishment’s name and location. Users are also welcomed to write reviews of the restaurants they’ve attended. This is a hand- built, user authentication register and login to write a review and give restaurant a rating and using UI kit styling library.It utilizes RESTful routes, a mobile - responsive, full stack application, utilizing MySQL, Express, React - views, and Node.", github: 'https://github.com/evanyang1/felp/tree/nok', deployed: 'https://warm-stream-20124.herokuapp.com/' , image: ''},
  { name: 'Garden Array', description: "This app, you can log in by accout or register for add your garden, add plant and search plant by name and add or delect.  ", github: 'https://github.com/UCI-Bootcamp/Garden-Array', deployed: 'http://banana-pudding-35031.herokuapp.com/' },
  { name: 'GitHoops', description: "A mobile-responsive web app with up-to-date NBA game, team, and player information, utilizing theSportsDB API, mySportsFeed API, ESPN API, and Google Maps API. Utilized HTML, CSS, JavaScript, and Materialize's styling library.", github: 'https://github.com/nokmaniphone/GitHoops', deployed: 'https://nokmaniphone.github.io/GitHoops/' }]

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
            <CardContent className={classes.cardContent} style={{ backgroundColor: 'black', color:'white' }}>
              <Typography gutterBottom variant="h5" component="h2" className={classes.primary}>
                {card.name}
              </Typography>
              <Typography>
                {card.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button href={card.github} target="_blank" size="small" className={classes.primary}>
                Github
          </Button>
              <Button href={card.deployed} target="_blank" size="small" className={classes.primary}>
                Deployed
          </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}