import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const classes = makeStyles({
    root: {
        maxWidth: 200,
    },
    media: {
        height: 140,
    },
    
});


function Projects() {
    return (
            <div className="project-container">
                <div>
                    <h3 className="project-title">This is where all the project titles go</h3>
                    <Card className={classes.root}>
                            <CardMedia title="Portfolio #1" >
                                <img src="https://cdn.motor1.com/images/mgl/P1j3K/s3/2020-chevrolet-corvette-first-drive.jpg" alt="First portfolio project"/>
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    #1
                        </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                        </Typography>
                            </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                    </Button>
                            <Button size="small" color="primary">
                                Learn More
                    </Button>
                        </CardActions>
                    </Card>
                </div>
                <div>
                    <h3 className="project-title">This is where all the project titles go</h3>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia title="Portfolio #1" >
                                <img src="https://cdn.motor1.com/images/mgl/P1j3K/s3/2020-chevrolet-corvette-first-drive.jpg" alt="First portfolio project"/>
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    #2
                        </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                        </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                    </Button>
                            <Button size="small" color="primary">
                                Learn More
                    </Button>
                        </CardActions>
                    </Card>
                </div>
                <div>
                    <h3 className="project-title">This is where all the project titles go</h3>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia title="Portfolio #1" >
                                <img src="https://cdn.motor1.com/images/mgl/P1j3K/s3/2020-chevrolet-corvette-first-drive.jpg" alt="First portfolio project"/>
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    #3
                        </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                        </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                    </Button>
                            <Button size="small" color="primary">
                                Learn More
                    </Button>
                        </CardActions>
                    </Card>
                </div>
                <div>
                    <h3 className="project-title">This is where all the project titles go</h3>
                    <Card className={classes.root}>
                        <CardActionArea>
                        <CardMedia title="Portfolio #1" >
                                <img src="https://cdn.motor1.com/images/mgl/P1j3K/s3/2020-chevrolet-corvette-first-drive.jpg" alt="First portfolio project"/>
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    #4
                        </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                        </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                    </Button>
                            <Button size="small" color="primary">
                                Learn More
                    </Button>
                        </CardActions>
                    </Card>
                </div>
                <div>
                    <h3 className="project-title">This is where all the project titles go</h3>
                    <Card className={classes.root}>
                        <CardActionArea>
                        <CardMedia title="Portfolio #1" >
                                <img src="https://cdn.motor1.com/images/mgl/P1j3K/s3/2020-chevrolet-corvette-first-drive.jpg" alt="First portfolio project"/>
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    #5
                        </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                        </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                    </Button>
                            <Button size="small" color="primary">
                                Learn More
                    </Button>
                        </CardActions>
                    </Card>
                </div>
                <div>
                    <h3 className="project-title">This is where all the project titles go</h3>
                    <Card className={classes.root}>
                        <CardActionArea>
                        <CardMedia title="Portfolio #1" >
                                <img src="https://cdn.motor1.com/images/mgl/P1j3K/s3/2020-chevrolet-corvette-first-drive.jpg" alt="First portfolio project"/>
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    #6
                        </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                        </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                    </Button>
                            <Button size="small" color="primary">
                                Learn More
                    </Button>
                        </CardActions>
                    </Card>
                </div>
            </div>


    )
}

export default Projects
