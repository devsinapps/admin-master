import React from 'react'
//mdbreact
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Table_Data = ({dataCar, formAction}) => {
	let number = 1;
	return(
		<MDBTable scrollX scrollY striped hover bordered maxHeight="250px"  size="sm">
			<MDBTableHead>
				<tr>
					<th style={{width: "40px"}}>No</th>
					<th> Car </th>
					<th> Price </th>
					<th> Country </th>
				</tr>
			</MDBTableHead>
			<MDBTableBody>
				{dataCar.map((listCar)=>{
				return(
					<tr key={listCar.id} onClick={()=>formAction('GETDATA', listCar)}>
						<td> {number++} </td>
						<td> {listCar.car} </td>
						<td> $.{listCar.price} </td>
						<td> {listCar.country} </td>
					</tr>
					)
				})} 
			</MDBTableBody>
		</MDBTable>
	)
}