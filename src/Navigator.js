
import { Typography } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

//Importing icons
import EqualizerIcon from '@material-ui/icons/Equalizer';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import HomeIcon from '@material-ui/icons/Home';
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';

//Menu Items
const categories = [
      {id :'File Upload', icon : <CloudUploadIcon /> },
      {id :'CallFailed Records', icon : <CloudUploadIcon /> },
    ];

//Pane Theme
const styles = (theme) => ({
  categoryHeader: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white,
  },
  item: {
    paddingTop: 1,
    paddingBottom: 1,
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover,&:focus': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
  },
  itemCategory: {
    backgroundColor: '#232f3e',
    boxShadow: '0 -1px 0 #404854 inset',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  firebase: {
    fontSize: 24,
    color: theme.palette.common.white,
  },
  itemActiveItem: {
    color: '#4fc3f7',
  },
  itemPrimary: {
    fontSize: 'inherit',
  },
  itemIcon: {
    minWidth: 'auto',
    marginRight: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(2),
  },
});


function Navigator(props) {
  const { classes,...other } = props;

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem className={clsx(classes.item, classes.itemCategory)}>
	  	<Typography variant="h4"  >
	  		HCL
	   	</Typography>
        </ListItem>

        <ListItem className={clsx(classes.item, classes.itemCategory)}>
		  <ListItemIcon className={classes.itemIcon}>
		    <HomeIcon />
		  </ListItemIcon>
		  <ListItemText classes={{primary: classes.itemPrimary,}}>
		   COMPLIANCE
		  </ListItemText>
        </ListItem>

            {categories.map(({id,icon}) => (
              <ListItem
                key={id}
                button
                onClick = {()=> props.handleclick(id)}
                className={clsx(classes.item, classes.itemActiveItem)}>

		<ListItemText   className={classes.categoryHeaderPrimary}>
                  {id}
                </ListItemText>

              </ListItem>
            ))}

      </List>
    </Drawer>
  );
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigator);
