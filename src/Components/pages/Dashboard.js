import React from 'react';
import { BarChart, LineChart, DoghnutChart, HorizontalChart } from './../grid/Chart';
import { CollapsibleBox } from './../grid/CollapsibleBox';
//Reactstrap
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
//Grid
import { ContainerFluidRow, ColCard, Col_B } from './../grid/Custome-Grid'
export class Dashboard extends React.Component{
	render(){
		return(
			<div className="Dashboard">
				<ContainerFluidRow>
					<Col_B lgCol='12' mdCol='12' smCol='12'>
						<Breadcrumb>
					        <BreadcrumbItem active className='BreadcrumbDashboard'>Dashboard</BreadcrumbItem>
					    </Breadcrumb>
					</Col_B>
					<CollapsibleBox lgCol='6' mdCol='6' smCol='6' title="Bar Chart"> 
							<BarChart />
					</CollapsibleBox>
					<CollapsibleBox lgCol='6' mdCol='6' smCol='6' title="Line Chart"> 
						<LineChart />
					</CollapsibleBox>
					<CollapsibleBox lgCol='6' mdCol='6' smCol='6' title="Doghnut Chart"> 
						<DoghnutChart />
					</CollapsibleBox>
					<CollapsibleBox lgCol='6' mdCol='6' smCol='6' title="Horizontal Chart"> 
						<HorizontalChart />
					</CollapsibleBox>
				</ContainerFluidRow>
			</div>
		)
	}
}



