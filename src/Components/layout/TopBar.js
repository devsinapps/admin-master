import React from 'react'
//Assets
import backgroundProfile from './../../Assets/backgroundProfile.png';
import UserIcon from './../../Assets/default.png';
import messageOpen from './../../Assets/messageOpen.png'; 
import facebook from './../../Assets/facebook.png';
import github from './../../Assets/github.png';
import gmail from './../../Assets/gmail.png';
import instagram from './../../Assets/instagram.png';
//Reactstrap
import {  Button, Collapse,  Navbar,  NavbarToggler,  NavbarBrand,  Nav, NavLink,  NavItem,  Container, Row, Col, Card, CardText, CardTitle, CardBody, CardImg, ListGroup, ListGroupItem } from 'reactstrap';
//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class TopBar extends React.Component{
	navbarAction = (mode) => {
		switch(mode){
			case 'MESSAGE':
				const Message = document.querySelector('.Message');
	 		  		  Message.classList.toggle('MessageClick');
	 		  		  break;

	 		case 'PROFILE':
	 			const Profile = document.querySelector('.Profile');
	 		 	 	  Profile.classList.toggle('ProfileClick');
	 		 	 	  break;

	 		case 'SLIDER':
	 			const Pages = document.querySelector('.Pages');
				const Sidebar = document.querySelector('.Sidebar');
				const Navbar = document.querySelector('.AdminNavbar');
					  Sidebar.classList.toggle('SidebarToggle');
					  Navbar.classList.toggle('AdminNavbarToggle');
					  Pages.classList.toggle('Pages-Toggle');
					  break;

	 		default:
	 			return null
		}
	}
	render(){
		return(
			<Navbar expand="md" className="AdminNavbar">
	          	<NavbarBrand className='ToggleSlider' onClick={()=>this.navbarAction('SLIDER')}>
					<FontAwesomeIcon icon="bars" />
				</NavbarBrand>
	           	<div className='rightMenu'>
	           		<Nav>
	           			<NavItem>
				           	<NavLink onClick={()=>this.navbarAction('MESSAGE')}>
				                <FontAwesomeIcon icon="envelope" />
				            </NavLink>
				            <div className="Message">
			                	<Row>
			                		<Col lg='12'>
				                	<Card>
				                		<CardBody> 			
				                			<CardTitle> Message </CardTitle>
				                		</CardBody>
				                		<ListGroup>
				                			<ListGroupItem>	
				                				Still Develop By Sandy 
				                				<img src={UserIcon} />
				                			</ListGroupItem>
				                			<ListGroupItem>	
				                				Still Develop By Sandy 
				                				<img src={UserIcon} />
				                			</ListGroupItem>
				                			<ListGroupItem>	
				                				Still Develop By Sandy 
				                				<img src={UserIcon} />
				                			</ListGroupItem>
				                		</ListGroup>
				                	</Card>
				                	</Col>
				                </Row>
			                </div>
				        </NavItem>
				        <NavItem>
				           	<NavLink onClick={()=>this.navbarAction('PROFILE')}>
				                <FontAwesomeIcon icon="user-circle" />
				            </NavLink>
				            <div className="Profile">
			                	<Row>
			                		<Col lg='12'>
				                	<Card>
				                		<CardImg top src={backgroundProfile} />
				                		<CardBody>
				                			<img src={UserIcon} className='ProfileNavbar'/>
				                			<CardTitle> Sandy Kurniawan </CardTitle>
				                			<CardText> Follow Me </CardText>
				                			<div className='Social_Media text-center'>
				                				<NavLink href="https://www.facebook.com/sandy.kurniawan.9028" target="__blank">
				                					<img src={facebook} className='logo_social_media'/>
				                				</NavLink>
				                				<NavLink href="https://www.instagram.com/sierraeska/" target="__blank">
				                					<img src={instagram} className='logo_social_media'/>
				                				</NavLink>
				                			</div>
				                		</CardBody>
				                	</Card>
				                	</Col>
				                </Row>
			                </div>
				        </NavItem>
				        <NavItem>
				           	<NavLink href="#">
				                Admin Master
				            </NavLink>
				        </NavItem>
				    </Nav>
	      	  </div>
	        </Navbar>
		)
	}
}

