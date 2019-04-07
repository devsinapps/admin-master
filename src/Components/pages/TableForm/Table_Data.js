import React from 'react'
//mdbreact
import { MDBDataTable } from 'mdbreact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const Table_Data = ({dataCar, formAction}) => {
	let no = 1;
	const data = {
		columns: [
			{
				label: 'No',
		        field: 'no',
		        sort: 'asc',
		        width: 50
	        },
	        {
				label: 'Car',
		        field: 'car',
		        sort: 'asc',
		        width: 100
	        },
	        {
				label: 'Price',
		        field: 'price',
		        sort: 'asc',
		        width: 100
	        },
	        {
				label: 'Country',
		        field: 'country',
		        sort: 'asc',
		        width: 100
	        }
		],
		rows: dataCar.map((data)=>{
			return(
				{
					clickEvent: ()=>formAction('GETDATA', data),
					no: no++,
					car: data.car,
					price: data.price,
					country: data.country,
				}
			)
		})
	}
	
	return(
		<MDBDataTable
		  scrollY
		  scrollX
	      striped
	      bordered
	      small
	      hover
	      maxheight='300px'
	      data={data}
	    />
	)
}