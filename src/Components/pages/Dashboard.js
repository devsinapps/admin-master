import React from 'react';
import { BarChart, LineChart, DoghnutChart, HorizontalChart } from './../grid/Chart';
//Reactstrap
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
//Grid
import { ContainerFluidRow, ColCard, Col_B, Collapsible } from './../grid/Custome-Grid'
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
					<Collapsible lgCol='6' mdCol='6' smCol='6' brCard='mb-3' tlCard="Horizontal Chart"> 
						<BarChart />
					</Collapsible>
					<Collapsible lgCol='6' mdCol='6' smCol='6' brCard='mb-3' tlCard="Horizontal Chart"> 
						<LineChart />
					</Collapsible>
					<Collapsible lgCol='6' mdCol='6' smCol='6' brCard='mb-3' tlCard="Horizontal Chart"> 
						<DoghnutChart />
					</Collapsible>
					<Collapsible lgCol='6' mdCol='6' smCol='6' brCard='mb-3' tlCard="Horizontal Chart"> 
						<HorizontalChart />
					</Collapsible>
				</ContainerFluidRow>
			</div>
		)
	}
}



