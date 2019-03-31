import React from 'react';
//Tools
import { Link } from 'react-router-dom'
//Reactstrap
import { Breadcrumb, BreadcrumbItem, Table } from 'reactstrap';
//Grid
import { ContainerFluidRow, ColCard, Col_B } from './../grid/Custome-Grid'
import { CollapsibleBox } from './../grid/CollapsibleBox';
export class TableAdminMaster extends React.Component{
	render(){
		return(
			<div className="Table-Admin-Master">
				<ContainerFluidRow>
					<Col_B lgCol='12' mdCol='12' smCol='12'>
						<Breadcrumb>
					        <BreadcrumbItem className="BreadcrumbDashboard">
					        	<Link to="/"> Dashboard </Link>
					        </BreadcrumbItem>
								<BreadcrumbItem active> Table Admin Master </BreadcrumbItem>
					    </Breadcrumb>
					</Col_B>
					<CollapsibleBox lgCol='6' mdCol='6' smCol='6' title="Tables"> 
						<Table responsive>
					        <thead>
					          <tr>
					            <th>#</th>
					            <th>First Name</th>
					            <th>Last Name</th>
					            <th>Username</th>
					          </tr>
					        </thead>
					        <tbody>
					          <tr>
					            <th scope="row">1</th>
					            <td>Mark</td>
					            <td>Otto</td>
					            <td>@mdo</td>
					          </tr>
					          <tr>
					            <th scope="row">2</th>
					            <td>Jacob</td>
					            <td>Thornton</td>
					            <td>@fat</td>
					          </tr>
					          <tr>
					            <th scope="row">3</th>
					            <td>Larry</td>
					            <td>the Bird</td>
					            <td>@twitter</td>
					          </tr>
					        </tbody>
					    </Table>
					</CollapsibleBox>
					<CollapsibleBox lgCol='6' mdCol='6' smCol='6' title="Dark table"> 
						<Table dark responsive>
					        <thead>
					          <tr>
					            <th>#</th>
					            <th>First Name</th>
					            <th>Last Name</th>
					            <th>Username</th>
					          </tr>
					        </thead>
					        <tbody>
					          <tr>
					            <th scope="row">1</th>
					            <td>Mark</td>
					            <td>Otto</td>
					            <td>@mdo</td>
					          </tr>
					          <tr>
					            <th scope="row">2</th>
					            <td>Jacob</td>
					            <td>Thornton</td>
					            <td>@fat</td>
					          </tr>
					          <tr>
					            <th scope="row">3</th>
					            <td>Larry</td>
					            <td>the Bird</td>
					            <td>@twitter</td>
					          </tr>
					        </tbody>
					    </Table>
					</CollapsibleBox>
					<CollapsibleBox lgCol='6' mdCol='6' smCol='6' title="Striped rows"> 
						<Table striped responsive>
					        <thead>
					          <tr>
					            <th>#</th>
					            <th>First Name</th>
					            <th>Last Name</th>
					            <th>Username</th>
					          </tr>
					        </thead>
					        <tbody>
					          <tr>
					            <th scope="row">1</th>
					            <td>Mark</td>
					            <td>Otto</td>
					            <td>@mdo</td>
					          </tr>
					          <tr>
					            <th scope="row">2</th>
					            <td>Jacob</td>
					            <td>Thornton</td>
					            <td>@fat</td>
					          </tr>
					          <tr>
					            <th scope="row">3</th>
					            <td>Larry</td>
					            <td>the Bird</td>
					            <td>@twitter</td>
					          </tr>
					        </tbody>
					    </Table>
					</CollapsibleBox>
					<CollapsibleBox lgCol='6' mdCol='6' smCol='6' title="Bordered table"> 
						<Table bordered responsive>
					        <thead>
					          <tr>
					            <th>#</th>
					            <th>First Name</th>
					            <th>Last Name</th>
					            <th>Username</th>
					          </tr>
					        </thead>
					        <tbody>
					          <tr>
					            <th scope="row">1</th>
					            <td>Mark</td>
					            <td>Otto</td>
					            <td>@mdo</td>
					          </tr>
					          <tr>
					            <th scope="row">2</th>
					            <td>Jacob</td>
					            <td>Thornton</td>
					            <td>@fat</td>
					          </tr>
					          <tr>
					            <th scope="row">3</th>
					            <td>Larry</td>
					            <td>the Bird</td>
					            <td>@twitter</td>
					          </tr>
					        </tbody>
					    </Table>
					</CollapsibleBox>
					<CollapsibleBox lgCol='6' mdCol='6' smCol='6' title="Borderless table"> 
						<Table borderless responsive>
					        <thead>
					          <tr>
					            <th>#</th>
					            <th>First Name</th>
					            <th>Last Name</th>
					            <th>Username</th>
					          </tr>
					        </thead>
					        <tbody>
					          <tr>
					            <th scope="row">1</th>
					            <td>Mark</td>
					            <td>Otto</td>
					            <td>@mdo</td>
					          </tr>
					          <tr>
					            <th scope="row">2</th>
					            <td>Jacob</td>
					            <td>Thornton</td>
					            <td>@fat</td>
					          </tr>
					          <tr>
					            <th scope="row">3</th>
					            <td>Larry</td>
					            <td>the Bird</td>
					            <td>@twitter</td>
					          </tr>
					        </tbody>
					    </Table>
					</CollapsibleBox>
					<CollapsibleBox lgCol='6' mdCol='6' smCol='6' title="Hoverable rows"> 
						<Table hover responsive>
					        <thead>
					          <tr>
					            <th>#</th>
					            <th>First Name</th>
					            <th>Last Name</th>
					            <th>Username</th>
					          </tr>
					        </thead>
					        <tbody>
					          <tr>
					            <th scope="row">1</th>
					            <td>Mark</td>
					            <td>Otto</td>
					            <td>@mdo</td>
					          </tr>
					          <tr>
					            <th scope="row">2</th>
					            <td>Jacob</td>
					            <td>Thornton</td>
					            <td>@fat</td>
					          </tr>
					          <tr>
					            <th scope="row">3</th>
					            <td>Larry</td>
					            <td>the Bird</td>
					            <td>@twitter</td>
					          </tr>
					        </tbody>
					    </Table>
					</CollapsibleBox>
					<CollapsibleBox lgCol='6' mdCol='6' smCol='6' title="Small table"> 
						<Table size="sm" responsive>
					        <thead>
					          <tr>
					            <th>#</th>
					            <th>First Name</th>
					            <th>Last Name</th>
					            <th>Username</th>
					          </tr>
					        </thead>
					        <tbody>
					          <tr>
					            <th scope="row">1</th>
					            <td>Mark</td>
					            <td>Otto</td>
					            <td>@mdo</td>
					          </tr>
					          <tr>
					            <th scope="row">2</th>
					            <td>Jacob</td>
					            <td>Thornton</td>
					            <td>@fat</td>
					          </tr>
					          <tr>
					            <th scope="row">3</th>
					            <td>Larry</td>
					            <td>the Bird</td>
					            <td>@twitter</td>
					          </tr>
					        </tbody>
					    </Table>
					</CollapsibleBox>
					<CollapsibleBox lgCol='6' mdCol='6' smCol='6' title="Responsive table"> 
						<Table responsive>
					        <thead>
					          <tr>
					            <th>#</th>
					            <th>Table heading</th>
					            <th>Table heading</th>
					            <th>Table heading</th>
					            <th>Table heading</th>
					            <th>Table heading</th>
					            <th>Table heading</th>
					          </tr>
					        </thead>
					        <tbody>
					          <tr>
					            <th scope="row">1</th>
					            <td>Table cell</td>
					            <td>Table cell</td>
					            <td>Table cell</td>
					            <td>Table cell</td>
					            <td>Table cell</td>
					            <td>Table cell</td>
					          </tr>
					          <tr>
					            <th scope="row">2</th>
					            <td>Table cell</td>
					            <td>Table cell</td>
					            <td>Table cell</td>
					            <td>Table cell</td>
					            <td>Table cell</td>
					            <td>Table cell</td>
					          </tr>
					          <tr>
					            <th scope="row">3</th>
					            <td>Table cell</td>
					            <td>Table cell</td>
					            <td>Table cell</td>
					            <td>Table cell</td>
					            <td>Table cell</td>
					            <td>Table cell</td>
					          </tr>
					        </tbody>
					    </Table>
					</CollapsibleBox>
				</ContainerFluidRow>
			</div>
		)
	}
}
