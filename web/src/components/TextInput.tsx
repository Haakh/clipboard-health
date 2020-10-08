import React from 'react';
import {FormLabel, TextField} from '@material-ui/core';
import {makeStyles, Theme} from '@material-ui/core/styles';
import {colors} from 'styles/colors';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(4),
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
