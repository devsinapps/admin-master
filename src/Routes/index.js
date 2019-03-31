import React from 'react';
//Tools
import { connect } from 'react-redux'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
//Layout
import { Sidebar } from './../Components/layout/Sidebar';
import { TopBar } from './../Components/layout/TopBar';
//Pages
import { Dashboard } from './../Components/pages/Dashboard';
import { TableAdminMaster } from './../Components/pages/TableAdminMaster';
import { FormAdminMaster } from './../Components/pages/FormAdminMaster';
import { BlankPageAdminMaster } from './../Components/pages/BlankPageAdminMaster';
import { ProfilePageAdminMaster } from './../Components/pages/ProfilePageAdminMaster';
import { NotFoundPage } from './../Components/pages/404Page';

import { TableForms } from './../Components/pages/TableForm/TableForms';


import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserEdit, faPhone, faHome, faBars, faEnvelope, faTrashAlt, faUserCircle, faTachometerAlt, faFileSignature, faFileInvoice, faTable, faCogs, faCircleNotch, faAngleRight, faAngleDown, faTimes, faThLarge } from '@fortawesome/free-solid-svg-icons'

library.add(faUserEdit, faPhone, faHome, faBars, faEnvelope, faTrashAlt, faUserCircle, faTachometerAlt, faFileSignature, faFileInvoice, faTable, faCogs, faCircleNotch, faAngleRight, faAngleDown, faTimes, faThLarge)

class Routes extends React.Component{
	render(){
		const { dataRoutes } = this.props
		return(
			<Router>
				<div id='Routes'>
					<Sidebar />
					<TopBar />
					<div className='Pages'>
						<Switch>
							<Route path='/' component={Dashboard} exact />
							<Route path='/tableadminmaster' component={TableAdminMaster} />
							<Route path='/formadminmaster' component={FormAdminMaster} />
							<Route path='/blankpageadminmaster' component={BlankPageAdminMaster} />
							<Route path='/profilepageadminmaster' component={ProfilePageAdminMaster} />
							<Route path='/notfoundpage' component={NotFoundPage} />
							<Route path='/tableforms' render={(routeProps) => (<TableForms {...routeProps} dataRoutes={dataRoutes}/> )}/>	
						</Switch>
					</div>
				</div>
			</Router>
		)
	}
}

const mapStateToProps = (state) => {
	return{
		dataRoutes: state
	}
}

export default connect(mapStateToProps)(Routes)