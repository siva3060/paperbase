
import React, {useState,useEffect}from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import {CardContent}from '@material-ui/core'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import Checkbox from '@material-ui/core/Checkbox';
import TableRow from '@material-ui/core/TableRow';

//Component will preview all the call records which are incomplete 
/*
const records  = [{
	"Delivery Lear":"Kalayan",
	"Mobile Number":"354343543",
	"Experience":"2",
	"Email":"somename@gail.com",
	"Skills":"Java",
	"Interview Status":"Java",
	"Name":"Some Name",
},
{
	"Delivery Lear":"Kalayan",
	"Mobile Number":"1234",
	"Experience":"2",
	"Email":"somename@gail.com",
	"Skills":"Java",
	"Interview Status":"Java",
	"Name":"Some Name",
},
{
	"Delivery Lear":"Kalayan",
	"Mobile Number":"343543",
	"Experience":"2",
	"Email":"somename@gail.com",
	"Skills":"Java",
	"Interview Status":"Java",
	"Name":"Some Name",
},
]

*/

function FailedCallRecords(){


	 const [records,setRecords] = useState([])
	 let selectedItems=[]

	 const [checked,setChecked] = useState(false);

	 const handleDeselectChange = () => {
		 setChecked(false);
	 }
	  
	const handleSelectAllChange = () => {
		    setChecked(true);
	}

	const handleSelectedCall=()=>{
		const query = selectedItems.join()
		console.log(query)
		 axios({
			 url:('http://15.188.74.126:8086/compliance?ecode='+query),
			 method:'GET',
			 }).then((response) =>{
				 console.log(response);
			 });
	}

	const handleChange = ({empCode})=>{

		if(selectedItems.length == 0){
			console.log("record added"+empCode)
			console.log(selectedItems)
			selectedItems.push(empCode)
		}else{
		 if(selectedItems.indexOf(empCode) >= 0){
			console.log("record removed"+empCode)
			console.log(selectedItems)
			selectedItems.pop(empCode)
		}else{
			console.log("record added"+empCode)
			console.log(selectedItems)
			selectedItems.push(empCode)
		}}

	}
	//no records picked 
	const handleAllCall=async ()=>{
		console.log("Calling the all the people")
		  await axios({
			 url:('http://15.188.74.126:8086/compliance'),
			 method:'GET',
			 }).then((response) =>{
				 console.log(response);
			 });
	}

	useEffect( ()=>{
		const fetchData = async () =>{
		console.log("Fetching data from API ")
		const result = await axios('http://15.188.74.126:8086/incomplete-compliance-calls',);
		console.log(result)
		setRecords(result.data)
		};
		fetchData();
	},[]);


	return(

	   <Card>
		<CardContent>
		<Table style={{border: "1px solid black",padding:"5px"}} >
		{records.map( record => 
			<TableRow>
			<TableCell>
			<Checkbox
			onChange={()=>{handleChange(record)}}
			inputProps={{ 'aria-label': 'select all desserts' }}
			/>
			</TableCell>
			{Object.keys(record).map(item => 
				<TableCell>{record[item]}</TableCell>
			)}
			</TableRow>
		 )}
		</Table>
		</CardContent>

	<CardActions style = {{padding:"5px"}}>
		<span style = {{padding:"5px"}}>
	        <Button  onClick = {handleSelectedCall} variant="contained" color="primary">Call Selected</Button>
		</span>
		<span style = {{padding:"5px"}}>
	        <Button  onClick = {handleAllCall} variant="contained" color="primary">Call All</Button>
		</span>
	</CardActions>
	</Card>
	);
}
export default FailedCallRecords;
