import React from 'react';
//Tools
import { Link } from 'react-router-dom'
//Reactstrap
import { Row, Col, Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, FormText, FormFeedback, CustomInput } from 'reactstrap';
//Grid
import { ContainerFluidRow, ColCard, Col_B, Collapsible } from './../grid/Custome-Grid'
export class FormAdminMaster extends React.Component{
	render(){
		return(
			<div className="Form-Admin-Master">
				<ContainerFluidRow>
					<Col_B lgCol='12' mdCol='12' smCol='12'>
						<Breadcrumb>
					        <BreadcrumbItem>
					        	<Link to="/"> Dashboard </Link>
					        </BreadcrumbItem>
								<BreadcrumbItem active> Form Admin Master </BreadcrumbItem>
					    </Breadcrumb>
					</Col_B>
					<Collapsible lgCol='6' mdCol='6' smCol='6' brCard='mb-3' tlCard="Form"> 
						<Form>
					        <FormGroup>
					          <Label for="exampleEmail">Email</Label>
					          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
					        </FormGroup>
					        <FormGroup>
					          <Label for="examplePassword">Password</Label>
					          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
					        </FormGroup>
					        <FormGroup>
					          <Label for="exampleSelect">Select</Label>
					          <Input type="select" name="select" id="exampleSelect">
					            <option>1</option>
					            <option>2</option>
					            <option>3</option>
					            <option>4</option>
					            <option>5</option>
					          </Input>
					        </FormGroup>
					        <FormGroup>
					          <Label for="exampleSelectMulti">Select Multiple</Label>
					          <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
					            <option>1</option>
					            <option>2</option>
					            <option>3</option>
					            <option>4</option>
					            <option>5</option>
					          </Input>
					        </FormGroup>
					        <FormGroup>
					          <Label for="exampleText">Text Area</Label>
					          <Input type="textarea" name="text" id="exampleText" />
					        </FormGroup>
					        <FormGroup>
					          <Label for="exampleFile">File</Label>
					          <Input type="file" name="file" id="exampleFile" />
					          <FormText color="muted">
					            This is some placeholder block-level help text for the above input.
					            It's a bit lighter and easily wraps to a new line.
					          </FormText>
					        </FormGroup>
					        <FormGroup tag="fieldset">
					          <legend>Radio Buttons</legend>
					          <FormGroup check>
					            <Label check>
					              <Input type="radio" name="radio1" />{' '}
					              Option one is this and that—be sure to include why it's great
					            </Label>
					          </FormGroup>
					          <FormGroup check>
					            <Label check>
					              <Input type="radio" name="radio1" />{' '}
					              Option two can be something else and selecting it will deselect option one
					            </Label>
					          </FormGroup>
					          <FormGroup check disabled>
					            <Label check>
					              <Input type="radio" name="radio1" disabled />{' '}
					              Option three is disabled
					            </Label>
					          </FormGroup>
					        </FormGroup>
					        <FormGroup check>
					          <Label check>
					            <Input type="checkbox" />{' '}
					            Check me out
					          </Label>
					        </FormGroup>
					        <Button>Submit</Button>
					      </Form>
					</Collapsible>
					<Collapsible lgCol='6' mdCol='6' smCol='6' brCard='mb-3' tlCard="Form Grid"> 
						<Form>
					        <FormGroup row>
					          <Label for="exampleEmail" sm={2}>Email</Label>
					          <Col sm={10}>
					            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
					          </Col>
					        </FormGroup>
					        <FormGroup row>
					          <Label for="examplePassword" sm={2}>Password</Label>
					          <Col sm={10}>
					            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
					          </Col>
					        </FormGroup>
					        <FormGroup row>
					          <Label for="exampleSelect" sm={2}>Select</Label>
					          <Col sm={10}>
					            <Input type="select" name="select" id="exampleSelect" />
					          </Col>
					        </FormGroup>
					        <FormGroup row>
					          <Label for="exampleSelectMulti" sm={2}>Select Multiple</Label>
					          <Col sm={10}>
					            <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple />
					          </Col>
					        </FormGroup>
					        <FormGroup row>
					          <Label for="exampleText" sm={2}>Text Area</Label>
					          <Col sm={10}>
					            <Input type="textarea" name="text" id="exampleText" />
					          </Col>
					        </FormGroup>
					        <FormGroup row>
					          <Label for="exampleFile" sm={2}>File</Label>
					          <Col sm={10}>
					            <Input type="file" name="file" id="exampleFile" />
					            <FormText color="muted">
					              This is some placeholder block-level help text for the above input.
					              It's a bit lighter and easily wraps to a new line.
					            </FormText>
					          </Col>
					        </FormGroup>
					        <FormGroup tag="fieldset" row>
					          <legend className="col-form-label col-sm-2">Radio Buttons</legend>
					          <Col sm={10}>
					            <FormGroup check>
					              <Label check>
					                <Input type="radio" name="radio2" />{' '}
					                Option one is this and that—be sure to include why it's great
					              </Label>
					            </FormGroup>
					            <FormGroup check>
					              <Label check>
					                <Input type="radio" name="radio2" />{' '}
					                Option two can be something else and selecting it will deselect option one
					              </Label>
					            </FormGroup>
					            <FormGroup check disabled>
					              <Label check>
					                <Input type="radio" name="radio2" disabled />{' '}
					                Option three is disabled
					              </Label>
					            </FormGroup>
					          </Col>
					        </FormGroup>
					        <FormGroup row>
					          <Label for="checkbox2" sm={2}>Checkbox</Label>
					          <Col sm={{ size: 10 }}>
					            <FormGroup check>
					              <Label check>
					                <Input type="checkbox" id="checkbox2" />{' '}
					                Check me out
					              </Label>
					            </FormGroup>
					          </Col>
					        </FormGroup>
					        <FormGroup check row>
					          <Col sm={{ size: 10, offset: 2 }}>
					            <Button>Submit</Button>
					          </Col>
					        </FormGroup>
					      </Form>
					</Collapsible>
					<Collapsible lgCol='6' mdCol='6' smCol='6' brCard='mb-3' tlCard="Input Types"> 
						<Form>
					        <FormGroup>
					          <Label for="exampleEmail">Plain Text (Static)</Label>
					          <Input plaintext>Some plain text/ static value</Input>
					        </FormGroup>
					        <FormGroup>
					          <Label for="exampleEmail">Email</Label>
					          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
					        </FormGroup>
					        <FormGroup>
					          <Label for="examplePassword">Password</Label>
					          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
					        </FormGroup>
					        <FormGroup>
					          <Label for="exampleUrl">Url</Label>
					          <Input type="url" name="url" id="exampleUrl" placeholder="url placeholder" />
					        </FormGroup>
					        <FormGroup>
					          <Label for="exampleNumber">Number</Label>
					          <Input type="number" name="number" id="exampleNumber" placeholder="number placeholder" />
					        </FormGroup>
					        <FormGroup>
					          <Label for="exampleDatetime">Datetime</Label>
					          <Input type="datetime" name="datetime" id="exampleDatetime" placeholder="datetime placeholder" />
					        </FormGroup>
					        <FormGroup>
					          <Label for="exampleDate">Date</Label>
					          <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
					        </FormGroup>
					        <FormGroup>
					          <Label for="exampleTime">Time</Label>
					          <Input type="time" name="time" id="exampleTime" placeholder="time placeholder" />
					        </FormGroup>
					        <FormGroup>
					          <Label for="exampleColor">Color</Label>
					          <Input type="color" name="color" id="exampleColor" placeholder="color placeholder" />
					        </FormGroup>
					        <FormGroup>
					          <Label for="exampleSearch">Search</Label>
					          <Input type="search" name="search" id="exampleSearch" placeholder="search placeholder" />
					        </FormGroup>
					        <FormGroup>
					          <Label for="exampleSelect">Select</Label>
					          <Input type="select" name="select" id="exampleSelect">
					            <option>1</option>
					            <option>2</option>
					            <option>3</option>
					            <option>4</option>
					            <option>5</option>
					          </Input>
					        </FormGroup>
					        <FormGroup>
					          <Label for="exampleSelectMulti">Select Multiple</Label>
					          <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
					            <option>1</option>
					            <option>2</option>
					            <option>3</option>
					            <option>4</option>
					            <option>5</option>
					          </Input>
					        </FormGroup>
					        <FormGroup>
					          <Label for="exampleText">Text Area</Label>
					          <Input type="textarea" name="text" id="exampleText" />
					        </FormGroup>
					        <FormGroup>
					          <Label for="exampleFile">File</Label>
					          <Input type="file" name="file" id="exampleFile" />
					          <FormText color="muted">
					            This is some placeholder block-level help text for the above input.
					            It's a bit lighter and easily wraps to a new line.
					          </FormText>
					        </FormGroup>
					        <FormGroup check>
					          <Label check>
					            <Input type="radio" />{' '}
					            Option one is this and that—be sure to include why it's great
					          </Label>
					        </FormGroup>
					        <FormGroup check>
					          <Label check>
					            <Input type="checkbox" />{' '}
					            Check me out
					          </Label>
					        </FormGroup>
					      </Form>
					</Collapsible>
					<Collapsible lgCol='6' mdCol='6' smCol='6' brCard='mb-3' tlCard="Custom Inputs"> 
						<Form>
					        <FormGroup>
					          <Label for="exampleCheckbox">Checkboxes</Label>
					          <div>
					            <CustomInput type="checkbox" id="exampleCustomCheckbox" label="Check this custom checkbox" />
					            <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="Or this one" />
					            <CustomInput type="checkbox" id="exampleCustomCheckbox3" label="But not this disabled one" disabled />
					          </div>
					        </FormGroup>
					        <FormGroup>
					          <Label for="exampleCheckbox">Radios</Label>
					          <div>
					            <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="Select this custom radio" />
					            <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="Or this one" />
					            <CustomInput type="radio" id="exampleCustomRadio3" label="But not this disabled one" disabled />
					          </div>
					        </FormGroup>
					        <FormGroup>
					          <Label for="exampleCheckbox">Inline</Label>
					          <div>
					            <CustomInput type="checkbox" id="exampleCustomInline" label="An inline custom input" inline />
					            <CustomInput type="checkbox" id="exampleCustomInline2" label="and another one" inline />
					          </div>
					        </FormGroup>
					        <FormGroup>
					          <Label for="exampleCustomSelect">Custom Select</Label>
					          <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
					            <option value="">Select</option>
					            <option>Value 1</option>
					            <option>Value 2</option>
					            <option>Value 3</option>
					            <option>Value 4</option>
					            <option>Value 5</option>
					          </CustomInput>
					        </FormGroup>
					        <FormGroup>
					          <Label for="exampleCustomMutlipleSelect">Custom Multiple Select</Label>
					          <CustomInput type="select" id="exampleCustomMutlipleSelect" name="customSelect" multiple>
					            <option value="">Select</option>
					            <option>Value 1</option>
					            <option>Value 2</option>
					            <option>Value 3</option>
					            <option>Value 4</option>
					            <option>Value 5</option>
					          </CustomInput>
					        </FormGroup>
					        <FormGroup>
					          <Label for="exampleCustomSelectDisabled">Custom Select Disabled</Label>
					          <CustomInput type="select" id="exampleCustomSelectDisabled" name="customSelect" disabled>
					            <option value="">Select</option>
					            <option>Value 1</option>
					            <option>Value 2</option>
					            <option>Value 3</option>
					            <option>Value 4</option>
					            <option>Value 5</option>
					          </CustomInput>
					        </FormGroup>
					        <FormGroup>
					          <Label for="exampleCustomMutlipleSelectDisabled">Custom Multiple Select Disabled</Label>
					          <CustomInput type="select" id="exampleCustomMutlipleSelectDisabled" name="customSelect" multiple disabled>
					            <option value="">Select</option>
					            <option>Value 1</option>
					            <option>Value 2</option>
					            <option>Value 3</option>
					            <option>Value 4</option>
					            <option>Value 5</option>
					          </CustomInput>
					        </FormGroup>
					        <FormGroup>
					          <Label for="exampleCustomFileBrowser">File Browser</Label>
					          <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" />
					        </FormGroup>
					        <FormGroup>
					          <Label for="exampleCustomFileBrowser">File Browser with Custom Label</Label>
					          <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" label="Yo, pick a file!" />
					        </FormGroup>
					        <FormGroup>
					          <Label for="exampleCustomFileBrowser">File Browser Disabled</Label>
					          <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" disabled />
					        </FormGroup>
							</Form>
					</Collapsible>	
					<Collapsible lgCol='6' mdCol='6' smCol='6' brCard='mb-3' tlCard="Inline Form"> 
						<Form inline>
					        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
					          <Label for="exampleEmail" className="mr-sm-2">Email</Label>
					          <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
					        </FormGroup>
					        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
					          <Label for="examplePassword" className="mr-sm-2">Password</Label>
					          <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
					        </FormGroup>
					        <Button>Submit</Button>
					      </Form>
					</Collapsible>
					<Collapsible lgCol='6' mdCol='6' smCol='6' brCard='mb-3' tlCard="Inline checkboxes"> 
						<Form>
					        <FormGroup check inline>
					          <Label check>
					            <Input type="checkbox" /> Some input
					          </Label>
					        </FormGroup>
					        <FormGroup check inline>
					          <Label check>
					             <Input type="checkbox" /> Some other input
					          </Label>
					        </FormGroup>
					      </Form>
					</Collapsible>
					<Collapsible lgCol='6' mdCol='6' smCol='6' brCard='mb-3' tlCard="Input Sizing"> 
						<Form>
					        <Input placeholder="lg" bsSize="lg" />
					        <Input placeholder="default" />
					        <Input placeholder="sm" bsSize="sm" />
					        <Input type="select" bsSize="lg">
					          <option>Large Select</option>
					        </Input>
					        <Input type="select">
					          <option>Default Select</option>
					        </Input>
					        <Input type="select" bsSize="sm">
					          <option>Small Select</option>
					        </Input>
					      </Form>
					</Collapsible>
					<Collapsible lgCol='6' mdCol='6' smCol='6' brCard='mb-3' tlCard="Input Grid Sizing"> 
						<Form>
					        <FormGroup row>
					          <Label for="exampleEmail" sm={2} size="lg">Email</Label>
					          <Col sm={10}>
					            <Input type="email" name="email" id="exampleEmail" placeholder="lg" bsSize="lg" />
					          </Col>
					        </FormGroup>
					        <FormGroup row>
					          <Label for="exampleEmail2" sm={2}>Email</Label>
					          <Col sm={10}>
					            <Input type="email" name="email" id="exampleEmail2" placeholder="default" />
					          </Col>
					        </FormGroup>
							</Form>
					</Collapsible>
					<Collapsible lgCol='6' mdCol='6' smCol='6' brCard='mb-3' tlCard="Hidden Labels"> 
						<Form inline>
					        <FormGroup>
					          <Label for="exampleEmail" hidden>Email</Label>
					          <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
					        </FormGroup>
					        {' '}
					        <FormGroup>
					          <Label for="examplePassword" hidden>Password</Label>
					          <Input type="password" name="password" id="examplePassword" placeholder="Password" />
					        </FormGroup>
					        {' '}
					        <Button>Submit</Button>
							</Form>
					</Collapsible>
					<Collapsible lgCol='6' mdCol='6' smCol='6' brCard='mb-3' tlCard="Form Grid with Form Row"> 
						<Form>
					        <Row form>
					          <Col md={6}>
					            <FormGroup>
					              <Label for="exampleEmail">Email</Label>
					              <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
					            </FormGroup>
					          </Col>
					          <Col md={6}>
					            <FormGroup>
					              <Label for="examplePassword">Password</Label>
					              <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
					            </FormGroup>
					          </Col>
					        </Row>
					        <FormGroup>
					          <Label for="exampleAddress">Address</Label>
					          <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
					        </FormGroup>
					        <FormGroup>
					          <Label for="exampleAddress2">Address 2</Label>
					          <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
					        </FormGroup>
					        <Row form>
					          <Col md={6}>
					            <FormGroup>
					              <Label for="exampleCity">City</Label>
					              <Input type="text" name="city" id="exampleCity"/>
					            </FormGroup>
					          </Col>
					          <Col md={4}>
					            <FormGroup>
					              <Label for="exampleState">State</Label>
					              <Input type="text" name="state" id="exampleState"/>
					            </FormGroup>
					          </Col>
					          <Col md={2}>
					            <FormGroup>
					              <Label for="exampleZip">Zip</Label>
					              <Input type="text" name="zip" id="exampleZip"/>
					            </FormGroup>  
					          </Col>
					        </Row>
					        <FormGroup check>
					          <Input type="checkbox" name="check" id="exampleCheck"/>
					          <Label for="exampleCheck" check>Check me out</Label>
					        </FormGroup>
					        <Button>Sign in</Button>
					      </Form>
					</Collapsible>
					<Collapsible lgCol='6' mdCol='6' smCol='6' brCard='mb-3' tlCard="Form Validation"> 
						<Form>
					       <FormGroup>
					          <Label for="exampleEmail">Input without validation</Label>
					          <Input />
					          <FormFeedback>You will not be able to see this</FormFeedback>
					          <FormText>Example help text that remains unchanged.</FormText>
					        </FormGroup>
					        <FormGroup>
					          <Label for="exampleEmail">Valid input</Label>
					          <Input valid />
					          <FormFeedback valid>Sweet! that name is available</FormFeedback>
					          <FormText>Example help text that remains unchanged.</FormText>
					        </FormGroup>
					        <FormGroup>
					          <Label for="examplePassword">Invalid input</Label>
					          <Input invalid />
					          <FormFeedback>Oh noes! that name is already taken</FormFeedback>
					          <FormText>Example help text that remains unchanged.</FormText>
					        </FormGroup>
					        <FormGroup>
					          <Label for="exampleEmail">Input without validation</Label>
					          <Input />
					          <FormFeedback tooltip>You will not be able to see this</FormFeedback>
					          <FormText>Example help text that remains unchanged.</FormText>
					        </FormGroup>
					        <FormGroup>
					          <Label for="exampleEmail">Valid input</Label>
					          <Input valid />
					          <FormFeedback valid tooltip>Sweet! that name is available</FormFeedback>
					          <FormText>Example help text that remains unchanged.</FormText>
					        </FormGroup>
					        <FormGroup>
					          <Label for="examplePassword">Invalid input</Label>
					          <Input invalid />
					          <FormFeedback tooltip>Oh noes! that name is already taken</FormFeedback>
					          <FormText>Example help text that remains unchanged.</FormText>
					        </FormGroup>
					      </Form>
					</Collapsible>
				</ContainerFluidRow>
			</div>
		)
	}
}