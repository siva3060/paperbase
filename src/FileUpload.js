import React ,{useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const styles = (theme) => ({
    input: {
        display: 'none',
        
      }
  });
  

function FileUpload(props){

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
	//end of is ValidFile Method 
	}

	const connectAndResponse =  (formData) => {

		console.log("Connecting  to remote server");
		console.log(formData)

	//const response = llllll axios.post("http://15.188.74.126:8082/Upload",
	 axios({
		 url:"http://15.188.74.126:8086/candidate-csv",
		 method:'POST',
		 data:formData,
	 }).then((response)=>{
		 console.log(response);
	 });
	
		setFile("");

		//console.log(response);
	//method to connect and get respone 
	}

	//after the submit button clicked 
	const onClickHandler=()=>{
		if(isValidFile()){
		const formData = new FormData();
		console.log(file);
		formData.append('file',file);
		console.log(formData);
		const resp = connectAndResponse(formData);
		alert("File has been uploaded")
		//use the axios API to send the file 
		}
		else
		{
		alert("Enter a file with valid format");
		}
	//end of Onclickhandler
	}


    return(

        <form  noValidate autoComplete="off">
        <input
                onChange={(e) => setFile(e.target.files[0])}
                id="raised-button-file"
                multiple
                type="file"
	    	name="uploadedFile"
                />
        <Button variant="contained" 
            onClick ={onClickHandler}
        color="primary">
            Upload
        </Button>
        </form>
    );

	//end of FileUpload Component
}
 export default withStyles(styles)(FileUpload);
