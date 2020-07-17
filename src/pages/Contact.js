
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function MultilineTextFields() {
    const classes = useStyles();


    return (
        <form className={classes.root} noValidate autoComplete="off">

            <div>
                 <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          
                <Typography gutterBottom variant="h5" component="h2">
                    Contact Me
                </Typography>
          </Paper>
       
                <TextField
                    id="outlined-multiline-flexible"
                    label="Name"
                    type="text"
                    multiline
                    //   value={value}
                    //   onChange={handleChange}
                    variant="outlined"
                />
                <TextField
                    id="outlined-textarea"
                    label="Email"
                    type="email"
                    variant="outlined"
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Message"
                    type="text"
                    multiline
                    rows={4}
                    //   defaultValue="Default Value"
                    variant="outlined"
                />
             </Grid>
             </Grid>
            </div>
        </form>
    );
}

