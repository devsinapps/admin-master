import React from 'react';
import { Link } from 'react-router-dom'
import { CollapsibleBox } from './../../grid/CollapsibleBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Table_Data } from './Table_Data'
import { Form_Input } from './Form_Input'
import {  Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
//Grid
import { ContainerFluidRow, ColCard, Col_B } from './../../grid/Custome-Grid'
//Mdbreact
import { ToastContainer, toast } from 'mdbreact'
export class TableForms extends React.Component{
	state = {
		dataCar: [],
		id: '',
		car: '',
		price: '',
		country: ''
	}

	componentDidMount(){
		this.setState({
			dataCar: this.props.dataRoutes.data.dataCar
		})
	}

	notify = (type) => {
		switch(type){
			case "dataNULL":
				toast.error('Form cannot empty', {
		          autoClose: 3000
		        });
		        break;

		    case 'selectData':
		    	toast.error('Select Data First', {
		          autoClose: 3000
		        });
	       		break;
		}
	}

	formAction = (mode, data) =>{ 
		const { id, car, price, country, dataCar } = this.state
		switch(mode){
			case 'GETDATA':
				this.setState({
					id: data.id,
					car: data.car,
					price: data.price,
					country: data.country
				})
				break;

			case 'SAVE':
				const newData = {
					id: new Date(),
					car, 
					price, 
					country
				}
				if(car.length < 1 || price.length < 1 || country < 1){
					this.notify('dataNULL')
				}else{
					dataCar.push(newData)
					this.setState({
						dataCar: dataCar,
						id: '',
						car: '',
						price: '',
						country: ''
					})
				}
				break;

			case 'DELETE':
			if(car.length < 1 || price.length < 1 || country < 1){
				this.notify('selectData')
			}else{
				const chekDel = window.confirm('Delete?')
				for(let i = 0; i < dataCar.length; i++){
					if(dataCar[i].id && dataCar[i].id === id){
						if(chekDel === true){
							dataCar.splice(i, 1);
							this.setState({
								dataCar: dataCar,
								id: '',
								car: '',
								price: '',
								country: ''
							})
						}else{
							return null
						}
						
					}
				}
			}
			break;	
			
			case 'UPDATE':
				if(car.length < 1 || price.length < 1 || country < 1){
					this.notify('selectData')
				}else{
					for(let i = 0; i < dataCar.length; i++){
						if(dataCar[i].id && dataCar[i].id === id){
							dataCar[i].id = id
							dataCar[i].car = car
							dataCar[i].price = price
							dataCar[i].country = country
							if(car.length < 1 || price.length < 1 || country < 1){
								this.notify('dataNULL')
							}else{
								const checkUpd = window.confirm('Update')
								if(checkUpd === true){
									this.setState({
										dataCar: dataCar,
										id: '',
										car: '',
										price: '',
										country: ''
									})
								}else{
									return null
								}
							}
						}
					}
				}
				break;

			case 'RESET':
				this.setState({
					id: '',
					car: '',
					price: '',
					country: ''
				})
				break;

			default:
				return null
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	render(){
		const { dataCar, id, car, price, country } = this.state
		const { dataRoutes } = this.props 
		const value = { dataCar, id, car, price, country }
		let num = 1;
		return(
			<div className="TableForms-Admin-Master">
				<ContainerFluidRow>
					<Col_B lgCol='12' mdCol='12' smCol='12'>
						<Breadcrumb>
					        <BreadcrumbItem active className='BreadcrumbDashboard'>
					        	<Link to='/'> Dashboard </Link>
					        </BreadcrumbItem>
					        <BreadcrumbItem active className='BreadcrumbDashboard'>
					        	 Table Forms
					        </BreadcrumbItem>
					    </Breadcrumb>
					</Col_B>
					<CollapsibleBox lgCol='12' mdCol='12' smCol='12' title="Basic Form Input Table">
						<Table_Data 
							dataCar={this.state.dataCar}
							formAction={this.formAction}
						/>
						<br />
					    <div className="FormInput">
					    	<ContainerFluidRow>
					    		<Col lg='9' className='mx-auto'>
								    <Form_Input 
								    	value={value}
								    	handleChange={this.handleChange}
								    	formAction={this.formAction}
								    />
							   	</Col>
							</ContainerFluidRow>
					    </div>	
					</CollapsibleBox>
					<ToastContainer
			          hideProgressBar={true}
			          newestOnTop={true}
			          autoClose={5000}
			        />
				</ContainerFluidRow>
			</div>
		)
	}
}