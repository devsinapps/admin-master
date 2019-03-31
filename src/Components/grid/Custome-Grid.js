import React from 'react'
//mdbreact

import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardHeader, MDBCardBody } from 'mdbreact'

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