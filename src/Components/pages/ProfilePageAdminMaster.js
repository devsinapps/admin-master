import React from 'react';
//Tools
import { Link } from 'react-router-dom'
//Assets
import background from './../../Assets/backgroundProfile.png'
import userIcon from './../../Assets/default.png'
//Reactstrap
import {  Row, Col, Card, CardBody, CardTitle, CardText, CardHeader, CardImg, Breadcrumb, BreadcrumbItem } from 'reactstrap';
//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//Grid
import { ContainerFluidRow, Col_B } from './../grid/Custome-Grid'
//mdbreact
import { MDBListGroup, MDBListGroupItem,  MDBBadge } from "mdbreact";
export const ProfilePageAdminMaster = () => {
	return(
		<div className="Profile-Page-Admin-Master">
			<ContainerFluidRow>
				<Col_B lgCol='12' mdCol='12' smCol='12'>
					<Breadcrumb>
				        <BreadcrumbItem active className='BreadcrumbDashboard'>
				        	<Link to='/'> Dashboard </Link>
				        </BreadcrumbItem>
				        <BreadcrumbItem active className='BreadcrumbDashboard'>
				        	 Profile Page 
				        </BreadcrumbItem>
				    </Breadcrumb>
				</Col_B>
				<Col lg='9'>
					<Card className='mb-3'>
						<CardImg top src={background} style={{height: "200px"}}/>
						<CardBody>
							<img src={userIcon} className='img-mainpage-profile' alt='img-profile'/>
							<CardTitle> Biography </CardTitle>
							<CardText className='text-mainpage-profile'>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
							</CardText>
						</CardBody>
					</Card>
					<Row>
						<Col lg='12'>
							<Row>
								<Col lg='4'>
									<Card className='mb-3'>
										<CardHeader>
											Profile Page
										</CardHeader>
										<CardBody>
											<ul>
												<li>
													<FontAwesomeIcon icon="user-edit" />
													<a> Sandy Kurniawan </a>
												</li>
												<li>
													<FontAwesomeIcon icon="envelope" />
													<a> sierraeska@gmail.com </a>					
												</li>
												<li>
													<FontAwesomeIcon icon="phone" />
													<a> 0895371407407 </a>								
												</li>
												<li>
													<FontAwesomeIcon icon="home" />
													<a> Indonesia	</a>						
												</li>
											</ul>
										</CardBody>
									</Card>
								</Col>
								<Col lg='8'>
									<Card className='mb-3'>
										<CardHeader>
											Time Line Page
										</CardHeader>
										<CardBody>
											<div className='timeline-page'>
												<div className='boximg-timeline'>
													<img src={userIcon} className='img-timeline'/>
													<div className='user-timeline-page'>
														<CardTitle className='name-timeline-page'> John Doe 
														</CardTitle>
													</div>
												</div>
												<Card>
													<CardText> 
														Lorem Ipsum is simply dummy text of the printing and typesetting.Lorem Ipsum is simply dummy text of the printing and typesetting industry. industry Lorem Ipsum is simply dummy text of the printing and typesetting.Lorem Ipsum is simply dummy text of the printing and typesetting industry. industry 
													</CardText>
												</Card>
											</div>
										</CardBody>
										<CardBody>
											<div className='timeline-page'>
												<div className='boximg-timeline'>
													<img src={userIcon} className='img-timeline'/>
													<div className='user-timeline-page'>
														<CardTitle className='name-timeline-page'> Jane Doe
														</CardTitle>
													</div>
												</div>
												<Card>
													<CardText> 
														Lorem Ipsum is simply dummy text of the printing and typesetting.Lorem Ipsum is simply dummy text of the printing and typesetting industry. industry Lorem Ipsum is simply dummy text of the printing and typesetting.Lorem Ipsum is simply dummy text of the printing and typesetting industry. industry 
													</CardText>
												</Card>
											</div>
										</CardBody>
										<div className="clearFix"> </div> 
									</Card>
								</Col>
							</Row>
						</Col>
					</Row>
				</Col>
				<Col lg='3'>
					<Card className='mb-3'>
						<CardHeader>
							Friend's Who Online 
						</CardHeader>
						<MDBListGroup>
					    <MDBListGroupItem className="d-flex justify-content-between align-items-center">Cras justo odio<MDBBadge color="primary"
					        pill>14</MDBBadge>
					    </MDBListGroupItem>
					    <MDBListGroupItem className="d-flex justify-content-between align-items-center">Dapibus ac facilisis in<MDBBadge
					        color="primary" pill>2</MDBBadge>
					    </MDBListGroupItem>
					    <MDBListGroupItem className="d-flex justify-content-between align-items-center">Morbi leo risus<MDBBadge color="primary"
					        pill>1</MDBBadge>
					    </MDBListGroupItem>
					  </MDBListGroup>
					</Card>
				</Col>
			</ContainerFluidRow>	
		</div>
	)
}
