
import React,{useState,useEffect}from 'react';
import PropTypes from 'prop-types';
import AppBarHeader from './AppBarHeader';
import AppBarBody from './AppBarBody';
import AppBarTail from './AppBarTail';
import { withStyles } from '@material-ui/core/styles';

const lightColor = 'rgba(255, 255, 255, 0.7)';

const styles = (theme) => ({
  secondaryBar: {
    zIndex: 0,
  },
  link: {
    textDecoration: 'none',
    color: lightColor,
    '&:hover': {
      color: theme.palette.common.white,
    },
  },
 
});

    


function Header(props) {

  //const {headerBodyData} = props;
  
  console.log(props);
  console.log(props.headerBodyData);

  return (
    <React.Fragment>
      <AppBarHeader />
      <AppBarBody data = {props.headerBodyData} />
    </React.Fragment>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);
