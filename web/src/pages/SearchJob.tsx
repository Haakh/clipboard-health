import React, {useEffect} from 'react';
import {Grid} from '@material-ui/core';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

import {colors} from 'styles/colors';
import {useAppState} from 'store';
import {Card, Input} from 'components';
import {FormValues} from './CreateJob';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'column',
      marginTop: theme.spacing(4),
      maxWidth: 900,
      height: '90vh',
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(4),
      },
    },
    bottomCardWrapper: {
      paddingTop: theme.spacing(2),
    },
    downloadAction: {
      color: colors.royalBlue,
      fontFamily: 'Averta-Semibold',
      fontWeight: 500,
    },
    underline: {
      width: 26,
      height: 2,
      backgroundColor: colors.blue,
      borderRadius: 1,
    },
    listContainer: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      paddingTop: 18,
      borderRadius: 12,
      paddingBottom: 18,
      backgroundColor: colors.whisperWhite,
      marginTop: 8,
    },
    listRightWrapper: {
      display: 'flex',
      justifyContent: 'flex-end',
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'flex-start',
      },
    },
    listTitle: {
      fontFamily: 'Averta',
      fontWeight: 'normal',
      color: colors.darkGrey,
      marginLeft: theme.spacing(4),
    },
    listDate: {
      fontFamily: 'Averta',
      fontWeight: 'normal',
      fontSize: 12,
      color: colors.darkGrey,
    },
  }),
);

export const SearchJob: React.FC = props => {
  const classes = useStyles(props);

  const {jobs} = useAppState();

  useEffect(() => {});

  const renderJobs = (job: FormValues) => {
    return (
      <Grid
        item
        style={{
          width: '100%',
          paddingTop: 16,
          paddingBottom: 16,
          marginLeft: 16,
          marginRight: 16,
          borderBottom: '1px solid #F1F1F1',
        }}>
        <Grid container>
          <Grid xs={8}>
            <div style={{color: '#333333', fontSize: 17, fontWeight: 400}}>{job.jobTitle}</div>
            <div style={{color: '#7C7C7C', fontSize: 13, fontWeight: 400}}>
              {`Full Time | $${job.salaryStart} - ${job.salaryEnd} an hour | ${job.location}`}
            </div>
          </Grid>
          <Grid xs={4} style={{display: 'flex', justifyContent: 'flex-end', color: '#ABABAB', fontSize: 13}}>
            5 days ago
          </Grid>
        </Grid>
      </Grid>
    );
  };

  return (
    <Grid container justify="center" alignItems="center" className={classes.root}>
      <Grid item style={{width: '100%', marginBottom: 16}}>
        <Input fullWidth={true} name="Search" placeholder="eg. Register Nurse" />
      </Grid>

      <Grid item style={{width: '100%'}}>
        <Grid container>
          <Grid item xs={12} lg={3}>
            <Card />
          </Grid>
          <Grid item xs={12} lg={9} style={{backgroundColor: colors.white}}>
            <Grid container>{jobs.map(renderJobs)}</Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
