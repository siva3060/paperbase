


import React from 'react';

import AppBar from '@material-ui/core/AppBar';

import { withStyles } from '@material-ui/core/styles';

import Avatar from '@material-ui/core/Avatar';

import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';

import HelpIcon from '@material-ui/icons/Help';

import Hidden from '@material-ui/core/Hidden';

import IconButton from '@material-ui/core/IconButton';

import Link from '@material-ui/core/Link';

import MenuIcon from '@material-ui/icons/Menu';

import NotificationsIcon from '@material-ui/icons/Notifications';

import Tab from '@material-ui/core/Tab';

import Tabs from '@material-ui/core/Tabs';

import Toolbar from '@material-ui/core/Toolbar';

import Tooltip from '@material-ui/core/Tooltip';

import Typography from '@material-ui/core/Typography';



const lightColor = 'rgba(255, 255, 255, 0.7)';



const styles = (theme) => ({

  secondaryBar: {

    zIndex: 0,

  },

  menuButton: {

    marginLeft: -theme.spacing(1),

  },

  iconButtonAvatar: {

    padding: 4,

  },

  button: {

    borderColor: lightColor,

  },

});



function AppBarBody(props){



  const {classes} = props;

  console.log(props)



  return(



      <AppBar

      component="div"

      className={classes.secondaryBar}

      color="primary"

      position="static"

      elevation={0}

    >

      <Toolbar>

        <Grid container alignItems="center" spacing={1}>

          <Grid item xs>

            <Typography color="inherit" variant="h5" component="h1">

              {props.data}

            </Typography>

          </Grid>

          <Grid item>

            <Button className={classes.button} variant="outlined" color="inherit" size="small">

              Web setup

            </Button>

          </Grid>

          <Grid item>

            <Tooltip title="Help">

              <IconButton color="inherit">

                <HelpIcon />

              </IconButton>

            </Tooltip>

          </Grid>

        </Grid>

      </Toolbar>

    </AppBar>

  );

}

export default withStyles(styles)(AppBarBody);


