
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';



const styles = (theme) => ({
  secondaryBar: {
    zIndex: 0,
  },
});


//based on these categories we need to generate the header Tail
//categorie array of objects

const categories =[
 { id: 'File Upload', 
  children : [
      'File Upload',
      'Manual Upload'
    ]
  },
  { id: 'Database', children : [
    'Current Day Records',
    'Monthly Records'
  ]
},
{ id: 'Functions', children : [
  'Label#1',
  'Label#2'
]
},
{ id: 'Statistics', children : [
  'Label#1',
  'Label#2'
]
},
]

function AppBarTail(props){

  const result = categories.filter(
    target => {
          return target.id === props.data
    }
  )

  // const result = categories.find(element=>{
  //   if((element.id).localeCompare(props.data)){
  //     console.log("element-id"+element.id)
  //     return element;
  //   }
  // })

  //A function that gets the children properties based on the props.data
  //  const result = categories.filter(function(item){
  //        if(!(item.id).localeCompare(props.data)){
  //          return item;
  //        }
  //      });

  const tabArray = result[0].children;
  console.log(props);
  console.log(props.data);
  console.log(result);
  console.log(tabArray);

//
 
  
  const {classes,handleTabChange} = props;
// based onthe props.data we need to genrate the menue

      /**For the corresponding get the children tabs and generate 
       * Filitering the array for target arrayItem
       */
      //  const categorie = categories.filter(function(item){
      //    if(!(item.id).localeCompare(props.data)){
      //      return item;
      //    }
      //  });

      //  console.log(categorie);

      // const categorie = categories.filter((element)=>{
      //    if(!(element.id).localeCompare(props.data)){
      //      return element.children;
      //    }
      // })

      //console.log(categorie[0].children);

        //handling Tab Change
        const [value, setValue] = React.useState('File Upload');

        const handleChange = (event, newValue) => {
          setValue(newValue);
        };

  return(
      <AppBar
      component="div"
      className={classes.secondaryBar}
      color="primary"
      position="static"
      elevation={0}
    >
      <Tabs value={0} 
      onChange = {handleTabChange}
      textColor="inherit">
         { tabArray.map((element) => (
            <Tab  textColor = "inherit" label = {element}/>
         ))}
      </Tabs>
    </AppBar>
  );
}
export default withStyles(styles)(AppBarTail);
