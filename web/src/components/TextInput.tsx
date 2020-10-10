import React from 'react';
import {FormLabel, TextField, withStyles} from '@material-ui/core';
import {makeStyles, Theme} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(4),
    '& .MuiFormHelperText-contained': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  inputRoot: {
    marginTop: theme.spacing(2),
    borderRadius: theme.spacing(1),
    backgroundColor: 'white',
    fontSize: 14,
  },
  inner: {
    padding: 10,
    // borderRadius: '0 !important',
  },
}));

export const Input = ({InputProps = {}, label, ...other}: any) => {
  const classes = useStyles();
  const props = {
    ...InputProps,
    classes: {
      root: classes.inputRoot,
      input: classes.inner,
    },
  };

  return (
    <div className={classes.root}>
      {label ? (
        <FormLabel color="secondary" style={{fontSize: 14}}>
          {label}
        </FormLabel>
      ) : (
        <div style={{height: 20}} />
      )}
      <TextField id="margin-none" variant="outlined" InputProps={props} {...other} />
    </div>
  );
};

export const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    paddingLeft: 10,
    height: 20,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);
