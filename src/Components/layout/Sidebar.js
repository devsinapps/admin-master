import React from 'react';
//Assets
import UserIcon from './../../Assets/default.png';
//Tools
import { Link } from 'react-router-dom';
//Reactstrap
import{ CardText } from 'reactstrap';
//Components
import DropdownNav from './../grid/Dropdown-Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Sidebar extends React.Component{
	render(){
		return(
			<div className='Sidebar'>
				<div className='Menu-Sidebar'>
					<div className='PhotoUser text-center'>
						<img src={UserIcon} alt='user-icon' />
						<CardText> Admin Master </CardText>
						<hr />
					</div>
					<div className='Menu'>
						<ul>
							<li>
								<FontAwesomeIcon icon="tachometer-alt" />
								<Link to='/'> Dashboard </Link>
							</li>
							<li>
								<FontAwesomeIcon icon="table" />
								<Link to='/tableadminmaster'> Tables </Link>
							</li>
							<li>
								<FontAwesomeIcon icon="file-signature" />
								<Link to='/formadminmaster'> Forms </Link>
							</li>
							<DropdownNav title="Sample Pages" Icon="file-signature">
								<ul>
									<li>
										<FontAwesomeIcon icon="circle-notch" />
										<Link to="/blankpageadminmaster"> Blank Page </Link>
									</li>
									<li>
										<FontAwesomeIcon icon="circle-notch" />
										<Link to="/profilepageadminmaster"> Profile Page </Link>
									</li>
								</ul>
							</DropdownNav>
							<li>
								<FontAwesomeIcon icon="th-large" />
								<Link to='/formadminmaster'> Extra </Link>
							</li>
							<DropdownNav title="Others" Icon="cogs">
								<ul>
									<li>
										<FontAwesomeIcon icon="circle-notch" />
										<Link to="/tableforms"> Table Forms </Link>
									</li>
									<li>
										<FontAwesomeIcon icon="circle-notch" />
										<Link to="#"> Slot </Link>
									</li>
								</ul>
							</DropdownNav>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}
