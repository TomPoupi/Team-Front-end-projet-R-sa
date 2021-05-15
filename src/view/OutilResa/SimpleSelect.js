import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [asso, setAsso] = React.useState('');

  const handleChange = (event) => {
    setAsso(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Asso</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={asso}
          onChange={handleChange}
        >
          <MenuItem value={10}>Asso1</MenuItem>
          <MenuItem value={20}>Asso2</MenuItem>
          <MenuItem value={30}>Asso3</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}