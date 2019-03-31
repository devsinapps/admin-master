import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, CardHeader } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class CollapsibleBox extends React.Component{
	state = {
		isExpanded: false,
		arrowBox: "angle-right",
		displayBox: "block"
	}

	handleToggle(e){
		this.setState({
			isExpanded: !this.state.isExpanded,
			height: this.refs.inner.clientHeight
		})
	}

	handleClose(e){
		this.setState({
			displayBox: "none"
		})
	}

	render(){
		const { isExpanded, height, arrowBox, displayBox } = this.state;
		const { title, lgCol, mdCol, smCol, children } = this.props;
		const currentHeight = isExpanded ? 0 : height;
		const currentArrow = isExpanded ? arrowBox : "angle-down";
		const currentDisplay = displayBox;
		return(
			<Col lg={lgCol} md={mdCol} sm={smCol}> 
				<Card className='mb-3' style={{display: currentDisplay}}>
					<CardHeader> 
						{title} 
						<FontAwesomeIcon icon={currentArrow} onClick={(e) => (this.handleToggle(e))} />
						<FontAwesomeIcon icon="times" onClick={(e) => (this.handleClose(e))} />
					</CardHeader>
					<CardBody>
						<div className='panel-collapse' style={{height: currentHeight+'px'}}>
							<div ref="inner">
								{children}
							</div>
						</div>					
					</CardBody>
				</Card>
			</Col>
		)
	}
}
