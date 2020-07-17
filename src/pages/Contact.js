
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
//   const [value, setValue] = React.useState('Controlled');

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      
      <div>
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
      </div>
    </form>
  );
}

