import InputBase from '@material-ui/core/InputBase'

import TextField from '@material-ui/core/TextField';
import { TableCell } from '@material-ui/core';
import { TableRow } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
//import Dropzone from 'react-dropzone';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { CardContent } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import Input from '@material-ui/core/Input'
import React,{useState} from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';


//TODO :
//  use typography for the text

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles	= makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
	},
	root: {
		minWidth: 275,
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
}));


function FileUpload(){

	const classes = useStyles();
	const [masterFile,setMasterFile] = useState(null);
	const [complianceFile,setComplianceFile] = useState(null);
	const [uploadCompleted,setUploadCompleted] = useState(false);


	const connectAndResponse =  (formData) => {
	 axios({
		 url:"http://15.188.74.126:8086/compliance-csv",
		 method:'POST',
		 data:formData,
	 }).then((response)=>{
		 console.log(response);
		 if(response.statue == 'OK' || response.statue == '200'){
			 setUploadCompleted(true);
		 }
	 });
	//method to connect and get respone 
	}



	//after the submit button clicked 
	const onClickHandler=()=>{
		if(isValidComplianceFile() && isValidMasterFile()){
		const formData = new FormData();
		formData.append('complianceFile',complianceFile);
		formData.append('masterFile',masterFile);
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

	const handleUploadCall = () => {
		if(uploadCompleted){
	 axios({
		 url:"http://15.188.74.126:8086/compliance",
		 method:'POST',
	 }).then((response)=>{
		 console.log(response);
	 });
		}else{
			alert("File not uploaded yet")
		}
	}

	const isValidComplianceFile = ()=>{
	      const complianceFileLength  = complianceFile.name.split(".");
	      const complianceFileExtension  = complianceFileLength[1];

		if(complianceFileLength.length >  1 && complianceFileExtension == "csv"){ 
			return true;
		}
		else{
			alert("Invalid Compliance File")
			return false;
		}
	}

	const isValidMasterFile=()=> {
	      const masterFileLength = masterFile.name.split(".");
	      const masterFileExtension = masterFileLength[1];

		if(masterFileLength.length >  1 && masterFileExtension == "csv"){ 
			return true;
		}
		else{
			alert("Invalid Master Records  File")
			return false;
		}
	//end of is ValidFile Method 
	}

	const checkUploadStatus = ()=>{
	}

	return(
		<Card className={classes.root}>
		  <CardContent>
			<TableRow>
				<StyledTableCell variant="header">
					Master File 
				</StyledTableCell>
				<TableCell>
					<input 
					 id="raised-button-file"
					 onChange = { e => setMasterFile(e.target.files[0])}
					 multiple
					 type="file" />
				</TableCell>
			</TableRow>
			<TableRow>
				<StyledTableCell variant ="header">
				     Compliance File 
				</StyledTableCell>
				<TableCell>
					<input 
					 onChange = { e => setComplianceFile(e.target.files[0])}
					 id="raised-button-file"
					 multiple
					 type="file" />
				</TableCell>
			</TableRow>
		  </CardContent>

		  <CardActions>
			<Button variant="contained" 
			color="primary" 
			className = {classes.button} 
			onClick={onClickHandler}
			startIcon={<CloudUploadIcon />}>
				upload
			</Button>
			<Button variant="contained" 
			color="primary" 
			className = {classes.button} 
			onClick={handleUploadCall}
			startIcon={<CloudUploadIcon />}>
				Call Uploads
			</Button>
		  </CardActions>
		</Card>
	);
}
export default FileUpload
