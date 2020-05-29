
import React from 'react'
import axios from 'axios'

	const contacts  = [
	{
	name:"Siva Charan",
	phone:"9299393",
	},
	{
	name:"ramya sri",
	phone:"3459299393",
	},

	{
	name:"Jaya Laksmi",
	phone:"12312",
	},
	]

function TableDisplay(){


	console.log("Prining the fetch data")

	const fetchData = ()=>{
		const  response = axios.get("http://ergast.com/api/f1/2004/1/results.json")
		const data = response.MRData

	console.log("Inside the detchData method ")
		console.log(response)
		console.log(data)
	}

	fetchData()
	
    return (
		<div>
		<table style={{border:1}}>
		<tr>
			<th>Name</th>
			<th>Phone</th>
		</tr>
		    {contacts.map((contact) => (
		        <tr>
				<td>{contact.name}</td>
				<td>{contact.phone}</td>
			</tr>
		    ))}
	        </table>
		</div>
	);

	//return(
	//	{contacts.map((contact)=> (contact.name))}
	//)
}
export default TableDisplay
