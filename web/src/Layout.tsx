import React from 'react';
import {makeStyles, ThemeProvider, Theme} from '@material-ui/core/styles';
import theme from './theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Grid, Container, createStyles} from '@material-ui/core';
import {Header} from './components';
import {colors} from 'styles/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: colors.offWhite,
    },
  }),
);

interface Props {
  children: React.ReactNode;
}
export default (props: Props) => {
  const classes = useStyles(props);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Header />

      <Grid container justify="center" alignItems="center" className={classes.root}>
        {props.children}
      </Grid>
    </ThemeProvider>
  );
};
