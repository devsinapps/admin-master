import React from 'react'
//Tools
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class DropdownNav extends React.Component{
	state = {
		isExpanded: false
	}

	handleToggle(e){
		this.setState({
			isExpanded: !this.state.isExpanded,
			height: this.refs.inner.clientHeight
		})
	}

	render(){
		const {title, children, Icon} = this.props;
		const {isExpanded, height} = this.state;
		const config = {
			activeIcon: isExpanded ? 'active' : '',
			currentHeight: isExpanded ? height : 0
		}
		return(
			<div className='Dropdown'>
				<li onClick={(e) => (this.handleToggle(e))}>
					<FontAwesomeIcon icon={Icon} />
					<Link to='#' className='btnDropdown'> 
						{title} 
					</Link>
					<FontAwesomeIcon icon='angle-right' className={'arrowDropdown' + ' ' + config.activeIcon} />
				</li>
				<div className="Menu-Dropdown" style={{height: config.currentHeight+'px'}}>
					<div className="Menu" ref="inner">
						{children}
					</div>
				</div>
			</div>
		)
	}
}

export default DropdownNav