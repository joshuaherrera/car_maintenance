import React from 'react';
import { Link } from 'react-router-dom';
import {Header, Container, Form} from 'semantic-ui-react';
import Aux from '../../hoc/Aux/Aux';
import { withAuthorization } from '../../components/Session';

//note, will need to change to stateful component when adding
//firebase functionality
const AddVehicle = (props) => {
	return (
		<Aux>
		<Container text>
			<Header
				as='h2'
				textAlign='center'
				>Add Vehicle
			</Header>
			<Form>
	          <Form.Field>
	            <Form.Input fluid name='year' type='text' label='Year' placeholder='Year' />
	            <Form.Input fluid name='make' label='Make' placeholder='Make' type='text' />
	            <Form.Input fluid name='model' label='Model' placeholder='Model' type='text' />
	            <Form.Input fluid name='mileage' label='Mileage' placeholder='Mileage' type='text' />
	          </Form.Field>
	          <Form.Button type='submit' floated='right'>Add</Form.Button>
	        </Form>
		</Container>
		</Aux>
	);
}



const condition = authUser => !!authUser;

export default withAuthorization(condition)(AddVehicle);