import React from 'react';

import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import {Grid, Container} from '@material-ui/core';

import {colors} from 'styles/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      boxShadow: '0px 1px 0px #E0E0E0',
      borderBottom: '0.5px solid #E0E0E0',
      backgroundColor: colors.white,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: theme.spacing(20),
    },
    footerContainer: {
      justifyContent: 'space-between',
      marginTop: theme.spacing(1),
    },
  }),
);

export const Footer: React.FC = props => {
  const classes = useStyles(props);

  return (
    <Container maxWidth={false} className={classes.footer}>
      <Grid lg={9}>
        <Grid container direction="row" className={classes.footerContainer}>
          <Grid item xs={12} md={6}>
            <Grid style={{color: '#333333', marginTop: 40, fontWeight: 600, marginBottom: 14}}>About US</Grid>
            <Grid style={{color: '#7C7C7C'}}>
              We are a team of Nurses, Doctors, Technologists and Executives dedicated to help nurses find jobs that
              they love.
            </Grid>
            <Grid style={{color: '#7C7C7C'}}>All copyrights reserved @ 2017 - Clipboard Health</Grid>
          </Grid>
          <Grid item xs={12} md={2} />
          <Grid item xs={12} md={2}>
            <Grid style={{color: '#333333', marginTop: 40, fontWeight: 600, marginBottom: 14}}>Site map</Grid>
            <Grid style={{color: '#7C7C7C'}}>Nurses</Grid>
            <Grid style={{color: '#7C7C7C'}}>Employers</Grid>
            <Grid style={{color: '#7C7C7C'}}>Social networking</Grid>
            <Grid style={{color: '#7C7C7C'}}>Jobs</Grid>
          </Grid>
          <Grid item xs={12} md={2}>
            <Grid style={{color: '#333333', marginTop: 40, fontWeight: 600, marginBottom: 14}}>Privacy</Grid>
            <Grid style={{color: '#7C7C7C'}}>Terms of Use</Grid>
            <Grid style={{color: '#7C7C7C'}}>Privacy Policy</Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
