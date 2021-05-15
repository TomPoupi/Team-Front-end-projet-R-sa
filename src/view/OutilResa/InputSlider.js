import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";
import { QueuePlayNextOutlined } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    width: 250
  },
  input: {
    width: 42
  }
});

export default function InputSlider(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
    props.parentCallBack(value)

  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > props.nombreMax) {
      setValue(props.nombreMax);
    }
    props.parentCallBack(value)

  };

  return (
    <div className={classes.root}>


      <Grid container spacing={2} alignItems="center">
        <Grid item>
          Quantité :
          <Input

            className={classes.input}
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            onClick={() => props.parentCallBack(value)}
            inputProps={{
              step: 1,
              min: 0,
              max: props.nombreMax,
              type: "number",
              "aria-labelledby": "input-slider"
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
