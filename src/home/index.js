import { Fragment } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';


function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const useStyles = makeStyles((theme) => ({
    juniContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const Home = () =>{
    const classes = useStyles();

    return(
        <Fragment>
            <CssBaseline />
            <main>
                <div className={classes.juniContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Album layout
                        </Typography>

                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Something short and leading about the collection below—its contents, the creator, etc.
                            Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                            entirely.
                        </Typography>

                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                <Button variant="contained" color="primary">
                                    Main call to action
                                </Button>
                                </Grid>
                                <Grid item>
                                <Button variant="outlined" color="primary">
                                    Secondary action
                                </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
            </main>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Something here to give the footer a purpose!
                </Typography>
                <Copyright />
            </footer>
        </Fragment>
    );
}

export default Home;