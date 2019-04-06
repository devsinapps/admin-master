import React from 'react'
//mdbreact
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardHeader, MDBCardBody } from 'mdbreact'
//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ContainerFluidRow = (props) => {
	const { rowClass, children } = props
	return(
		<MDBContainer fluid className={rowClass}>
			<MDBRow>
				{children}
			</MDBRow>
		</MDBContainer>
	)
}

export const ContainerRow = (props) => {
	const { rowClass, children } = props
	return(
		<MDBContainer className={rowClass}>
			<MDBRow>
				{children}
			</MDBRow>
		</MDBContainer>
	)
}

export const ColCard = (props) => {
	const { lgCol, mdCol, smCol, brCard, tlCard, children } = props
	const config = {
		viewHeader: tlCard === '' ? null : <MDBCardHeader> {tlCard} </MDBCardHeader>
	}
	return(
		<MDBCol lg={lgCol} md={mdCol} sm={smCol}>
			<MDBCard className={brCard}>
				{config.viewHeader}
				<MDBCardBody>
					{children}
				</MDBCardBody>
			</MDBCard>
		</MDBCol>
	)
}


export const Col_B = (props) => {
 	const { lgCol, mdCol, smCol, children } = props
 	return(
 		<MDBCol lg={lgCol} md={mdCol} sm={smCol}>
 			{children}
 		</MDBCol>
 	)
}

export class Collapsible extends React.Component{
	state = {
		isExpanded: false,
		display: true
	}

	toggle = (mode) => {
		switch(mode){
			case 'minimize':
				this.setState({
					isExpanded: !this.state.isExpanded,
					height: this.refs.inner.clientHeight
				})
				break;

			case 'close':
				this.setState({
					display: false
				})
		}
		
	}
	render(){
		const { isExpanded, height, display } = this.state
		const { lgCol, mdCol, smCol, brCard, tlCard, children } = this.props
		const statement = {
			click: children === undefined ? null : this.toggle,
			styleCard: {
				display: display === true ? 'block' : 'none'
			},
			styleBody: {
				overflow: 'hidden',
				transition: 'all .3s',
				height: isExpanded ? '0' : height + 40 ,
				padding: isExpanded ? '0' : '',
				opacity: isExpanded ? '0' : '1'
			}
		}
		const config = {
			viewHeader: tlCard === '' ? null : (<MDBCardHeader onClick={statement.click}> 
												{tlCard} 
												<FontAwesomeIcon icon='angle-down' onClick={()=>this.toggle('minimize')}/>
												<FontAwesomeIcon icon="times" onClick={()=>this.toggle('close')} />
												</MDBCardHeader>),
			viewBody: children === undefined ? null : ( <MDBCardBody style={statement.styleBody}> <div ref='inner'> {children} </div> </MDBCardBody> )
		}
		return(
		<MDBCol lg={lgCol} md={mdCol} sm={smCol} style={statement.styleCard}>
			<MDBCard className={brCard}>
				{config.viewHeader}
				{config.viewBody}
			</MDBCard>
		</MDBCol>
		)
	}
}