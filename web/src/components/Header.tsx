import React, {useState} from 'react';

import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import {Grid, Container, Typography, Hidden, Drawer, List, ListItem} from '@material-ui/core';
import {useHistory, useLocation} from 'react-router-dom';
import {CancelOutlined} from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import {Button} from './Button';
import {Link} from './Link';
import {RoutePath} from '../types/routes';
import {colors} from 'styles/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      boxShadow: '0px 1px 0px #E0E0E0',
      borderBottom: '0.5px solid #E0E0E0',
      backgroundColor: colors.white,
    },
    headerContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      height: 60,
    },
    logoContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
    headerMenu: {
      display: 'flex',
      flex: 3,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    headerMenuMobile: {
      display: 'flex',
      flex: 3,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    headerItem: {
      marginLeft: theme.spacing(4),
    },
    routeText: {
      color: colors.darkGrey,
      fontSize: 16,
      marginBottom: 4,
      fontWeight: 'bold',
      height: 20,
      letterSpacing: 0,
    },
    activeRouteText: {
      color: colors.darkGrey,
    },
    selected: {
      display: 'flex',
      flexDirection: 'column',
    },
    underline: {
      width: 34,
      height: 2,
      backgroundColor: colors.blue,
      borderRadius: 1,
    },
    drawer: {
      width: '100vw',
    },
    mobileMenu: {
      width: '100vw',
    },
    mobileMenuHeader: {
      padding: theme.spacing(4),
      paddingTop: theme.spacing(7),
      paddingBottom: theme.spacing(9),
    },
    mobileClose: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    mobileMenuContent: {
      marginTop: theme.spacing(4),
    },
    mobileMenuListItem: {
      height: theme.spacing(12),
      marginTop: theme.spacing(2),
      display: 'flex',
      justifyContent: 'flex-start',
      padding: 0,
    },
    mobileMenuActive: {
      width: theme.spacing(2),
      height: theme.spacing(12),
      backgroundColor: colors.blue,
    },
    mobileMenuText: {
      marginLeft: theme.spacing(4),
    },
  }),
);

export const Header: React.FC = props => {
  const classes = useStyles(props);
  const history = useHistory();
  const {pathname} = useLocation();

  const [modalOpen, setShowModal] = useState(false);

  const signOut = () => {};

  const renderMobileMenu = () => (
    <Grid
      className={classes.mobileMenu}
      role="presentation"
      onClick={() => setShowModal(false)}
      onKeyDown={() => setShowModal(false)}>
      <Grid container className={classes.mobileMenuHeader}>
        <Grid item xs={11} className={classes.logoContainer}>
          <Typography variant="h4">ClipboardHealth</Typography>
        </Grid>
        <Grid item xs={1} className={classes.mobileClose}>
          <Link style={{padding: 0, minWidth: 'auto'}} onClick={() => setShowModal(false)}>
            {/* <CancelIcon /> */}
          </Link>
        </Grid>
      </Grid>
      <Grid container className={classes.mobileMenuContent}>
        <List disablePadding>
          {renderMobileMenuItem('Jobs', pathname === RoutePath.SearchJob, RoutePath.SearchJob, CancelOutlined)}
          {renderMobileMenuItem('Post a Job', pathname === RoutePath.CreateJob, RoutePath.CreateJob, CancelOutlined)}
          {renderMobileMenuItem('Sign out', false, RoutePath.Root, CancelOutlined)}
        </List>
      </Grid>
    </Grid>
  );

  const renderMobileMenuItem = (label: string, isActive: boolean, route: string, Icon: any) => (
    <ListItem
      button
      className={classes.mobileMenuListItem}
      onClick={() => {
        label === 'Sign out' ? signOut() : history.replace(route);
      }}>
      {isActive && <div className={classes.mobileMenuActive} />}
      <div style={{marginLeft: isActive ? 40 : 48}}>
        <Icon color={isActive ? colors.darkGrey : colors.mysticGrey} />
      </div>
      <Typography
        component="h2"
        align="center"
        className={`${classes.mobileMenuText} ${classes.routeText} ${isActive ? classes.activeRouteText : ''}`}>
        {label}
      </Typography>
    </ListItem>
  );

  const renderHeaderItem = (label: string, isActive: boolean) => (
    <div className={`${classes.selected} ${classes.headerItem}`}>
      <Typography
        component="h2"
        align="center"
        className={`${classes.routeText} ${isActive ? classes.activeRouteText : ''}`}>
        {label}
      </Typography>
      <div className={isActive ? classes.underline : ''} />
    </div>
  );

  return (
    <Container maxWidth={false} className={classes.header}>
      <Grid className={classes.headerContainer}>
        <Grid className={classes.logoContainer} style={{marginLeft: '10%'}}>
          <Typography variant="h4" style={{fontWeight: 'bold'}}>
            ClipboardHealth
          </Typography>
        </Grid>
        <Hidden smDown>
          <Grid className={classes.headerMenu}>
            <Link onClick={() => history.replace(RoutePath.SearchJob)}>
              {renderHeaderItem('Jobs', pathname === RoutePath.SearchJob)}
            </Link>
            <Link onClick={() => history.replace(RoutePath.CreateJob)}>
              {renderHeaderItem('Post a Job', pathname === RoutePath.CreateJob)}
            </Link>
            <Button color="primary" className={classes.headerItem} onClick={() => {}}>
              Sign out
            </Button>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid className={classes.headerMenuMobile}>
            <MenuIcon onClick={() => setShowModal(!modalOpen)} />
            <React.Fragment key={'left'}>
              <Drawer
                classes={{paper: classes.drawer}}
                anchor={'left'}
                open={modalOpen}
                onClose={() => setShowModal(false)}>
                {renderMobileMenu()}
              </Drawer>
            </React.Fragment>
          </Grid>
        </Hidden>
      </Grid>
    </Container>
  );
};
