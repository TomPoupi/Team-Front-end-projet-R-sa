import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function DatePicker() {
  // The first commit of Material-UI
  const [dateIn, setDateIn] = React.useState(new Date());
  const [dateOut, setDateOut] = React.useState(new Date());

  const dateChangeIn = (date) => {
    setDateIn(date);
  };

  const dateChangeOut = (date) => {
    setDateOut(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid >
          <div>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date début"
              value={dateIn}
              onChange={dateChangeIn}
              KeyboardButtonProps={{
               'aria-label': 'change date',
              }}
            />
          </div>
          <div>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date fin"
              value={dateOut}
              onChange={dateChangeOut}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </div>
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
