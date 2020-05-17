import React ,{useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { Input } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const styles = (theme) => ({
    input: {
        display: 'none',
        
      }
  });
  

function ManualUpload(props){

    const {classes} = props;
    const [file, setFile] = useState(null);

    //after the file is uploaded 
	// const onChangeHandler = event=>{
	// 	this.setState({
    //   		selectedFile: event.target.files[0],
    //   		loaded: 0,
    // 		})

	// //end of onChangeHandler
	// }

	//if the user hits the submit button with out file upload 
	//fileExist = {
	//}

	//validating the file format & validatin user invalid submit button
	const isValidFile=()=> {
	      const fileLength = file.name.split(".");
	      const fileExtension = fileLength[1];
		if(fileLength.length >  1 && fileExtension == "csv"){ 
			return true;
		}
		else{
			return false;
		}
	}

	//after the submit button clicked 
	const onClickHandler=()=>{
		if(isValidFile()){
		const data = new FormData();
		data.append('file',file);
		alert("server yet to configure");
		//use the axios API to send the file 
		}else{
		alert("Enter a file with valid format");
		}
	}


    return(
        <form  noValidate autoComplete="off">
            <h1>Manual Uplaod Panel</h1>
        <input
                onChange={(e) => setFile(e.target.files[0])}
                id="raised-button-file"
                multiple
                type="file"
                />
        <Button variant="contained" 
            onClick ={onClickHandler}
        color="primary">
            Upload
        </Button>
        </form>
    );
}
 export default withStyles(styles)(ManualUpload);