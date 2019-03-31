import React from 'react'
import {Col, Form, FormGroup, Label, Input} from 'reactstrap';
//mdbreact
import { MDBBtn, MDBIcon } from 'mdbreact'

export const Form_Input = ({value, formAction, handleChange}) => {
	return(
		<Form>
			<FormGroup row>
				<Label for="exampleEmail" sm={3}>Input Car</Label>
				<Col sm={9}>
					<Input 
						type="teks" 
						id="car" 
						value={value.car}
						onChange={handleChange}/>
				</Col>
			</FormGroup>
			<FormGroup row>
				<Label for="exampleEmail" sm={3}>Price Data</Label>
				<Col sm={9}>
					<Input 
						type="teks" 
						id="price" 
						value={value.price}
						onChange={handleChange}/>
				</Col>
			</FormGroup>
			<FormGroup row>
				<Label for="exampleEmail" sm={3}>Country Data</Label>
					<Col sm={9}>
						<Input 
							type="teks" 
							id="country" 
							value={value.country}
							onChange={handleChange}/>
					</Col>
			</FormGroup>
			<FormGroup className='text-center'>   		
				<MDBBtn color="primary"  onClick={()=>formAction('SAVE', '')}>
	        		<MDBIcon icon="file-signature" className="mr-1" /> Save
		        </MDBBtn>
		        <MDBBtn color="warning"  onClick={()=>formAction('UPDATE', '')}>
	        		<MDBIcon icon="file-contract" className="mr-1" /> Update
		        </MDBBtn>
		        <MDBBtn color="info"  onClick={()=>formAction('RESET', '')}>
	        		<MDBIcon icon="retweet" className="mr-1" /> Reset
		        </MDBBtn>
				<MDBBtn color="danger"  onClick={()=>formAction('DELETE', '')}>
	        		<MDBIcon icon="trash" className="mr-1" /> Delete
		        </MDBBtn>
			</FormGroup>
		</Form>
	)
}
