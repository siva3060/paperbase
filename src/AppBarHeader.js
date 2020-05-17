
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';



const styles = (theme) => ({
    
    menuButton: {
      marginLeft: -theme.spacing(1),
    },
    
  });

function AppBarHeader(props){

    const { classes,...others } = props;

    
return(
<AppBar color="primary" position="sticky" elevation={0}>
<Toolbar>
   <Grid container spacing={1} alignItems="center">
     <Hidden smUp>
       <Grid item>
         <IconButton
           color="inherit"
           aria-label="open drawer"
           onClick={others.onDrawerToggle}
           className={classes.menuButton}
         >
           <MenuIcon />
         </IconButton>
       </Grid>
     </Hidden>
     <Grid item xs />
     <Grid item>
       <Link className={classes.link} href="#" variant="body2">
         Go to docs
       </Link>
     </Grid>
     <Grid item>
       <Tooltip title="Alerts • No alerts">
         <IconButton color="inherit">
           <NotificationsIcon />
         </IconButton>
       </Tooltip>
     </Grid>
     {/** can add any icons here */}
   </Grid>
</Toolbar>
</AppBar>
);
}
export default withStyles(styles)(AppBarHeader);
