
import React, {useState,useEffect}from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';

//Component will preview all the call records which are incomplete 
const testRecords  = [{
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
	"Mobile Number":"354343543",
	"Experience":"2",
	"Email":"somename@gail.com",
	"Skills":"Java",
	"Interview Status":"Java",
	"Name":"Some Name",
},
{
	"Delivery Lear":"Kalayan",
	"Mobile Number":"354343543",
	"Experience":"2",
	"Email":"somename@gail.com",
	"Skills":"Java",
	"Interview Status":"Java",
	"Name":"Some Name",
}
]


function CallRecords(){


	 const [records,setRecords] = useState([])
	 //const [selectedItems,setSelectedItems] = useState([])
		let selectedItems=[]
	  


	/*
		console.log("making axios call")
		const fetchData = async ()=> {
		const resp = await axios('http://15.188.74.126:8086/incomplete-call-list');
		console.log(resp)
		setRecords(resp.data)
		*/

	const handleCall=()=>{
		const resp = axios('http://15.188.174.126:8086/call');
		console.log("Call is Placed")
		console.log(resp)
	}

	const handleChange = (item)=>{
		console.log("Inside Handle Change method ")
		console.log(item)
		selectedItems.push(item)
		console.log("printing selected accounts ")
		console.log(selectedItems)
	}

	const callRecords=()=>{
		console.log("Calling the records ")
		console.log(selectedItems)
	}
	useEffect(async ()=>{
		console.log("Fetching data from API ")
		const result = await axios('http://15.188.74.126:8086/incomplete-call-list')
		console.log(result)
		setRecords(result.data)
	},[])

	return(
	   <div>
		<table style={{border: "1px solid black",padding:"5px"}} >
		{/*
		  <tr>
			{
			  Object.keys(records[0]).map( item => <th>{item}</th>)
			  
			}
		  </tr>
		  */}
		{testRecords.map( record => 
			 <tr>
			<Radio 
			onChange={()=>handleChange(record)}
			/>
			{Object.keys(record).map(item => 
				 <td>{record[item]}</td>
			 )}
			</tr>
		 )}
		</table>
		<div style = {{padding:"5px"}}>
		<span style = {{padding:"5px"}}>
	      <Button onClick = {handleCall} variant="contained" color="primary">Place Call</Button>
		</span>
	<span style = {{padding:"5px"}}>
	<Button variant="contained" color="primary"> Select All</Button>
		
		</span>

		</div>

	   </div>
	);
}
export default CallRecords;
