import React from 'react';
//Tools
import { Link } from 'react-router-dom'
//Reactstrap
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
//Grid
import { ContainerFluidRow, ColCard, Col_B } from './../grid/Custome-Grid'
export const BlankPageAdminMaster = () => {
	return(
		<div className="Blank-Page-Admin-Master">
			<ContainerFluidRow>
				<Col_B lgCol='12' mdCol='12' smCol='12'>
					<Breadcrumb>
				        <BreadcrumbItem active className='BreadcrumbDashboard'>
				        	<Link to='/'> Dashboard </Link>
				        </BreadcrumbItem>
				        <BreadcrumbItem active className='BreadcrumbDashboard'>
				        	 Blank Page 
				        </BreadcrumbItem>
				    </Breadcrumb>
				</Col_B>
			</ContainerFluidRow>
		</div>
	)
}
