import React from 'react';
import { Container, Row, Col, Card, CardBody, CardText, Button } from 'reactstrap'
import gear from './../../Assets/gear3.png'
import { Link } from 'react-router-dom'

export class NotFoundPage extends React.Component{
	render(){
		return(
			<div className="NotFoundPage">
				<Container>
					<Row>
						<Col lg='9' className='mx-auto'>
							<Card>
								<CardBody className='text-center'>
									<CardText> Page Not Found </CardText>
									<Link to="/"> 
									<Button>
										 
										Back to Previous
										
									</Button>
									</Link> 
								</CardBody>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		)
	}
}