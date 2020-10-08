import React, {useEffect} from 'react';
import {Grid} from '@material-ui/core';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

import {colors} from 'styles/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'column',
      marginTop: theme.spacing(4),
      maxWidth: 1200,
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

  useEffect(() => {});

  return (
    <Grid container justify="center" alignItems="center" className={classes.root}>
      <Grid item xs={12} md={10} lg={9}>
        <Grid container>
          <Grid item xs={12}></Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
