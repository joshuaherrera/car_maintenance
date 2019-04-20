import React from 'react';
import { Link } from 'react-router-dom';
import {Header, Container, Form} from 'semantic-ui-react';
import Aux from '../../hoc/Aux/Aux';
import { withAuthorization } from '../../components/Session';

//note, will need to change to stateful component when adding
//firebase functionality
const EditVehicle = (props) => {
	return (
		<Aux>
		<Container text>
			<Header
				as='h2'
				textAlign='center'
				>Edit {props.location.state.year} {props.location.state.make} {props.location.state.model}
			</Header>
			<Form>
	          <Form.Field>
	            <Form.Input fluid name='year' type='text' label='Year' placeholder={props.location.state.year} />
	            <Form.Input fluid name='make' label='Make' placeholder={props.location.state.make} type='text' />
	            <Form.Input fluid name='model' label='Model' placeholder={props.location.state.model} type='text' />
	            <Form.Input fluid name='mileage' label='Mileage' placeholder='16xxxx' type='text' />
	          </Form.Field>
	          <Form.Button type='submit' floated='right'>Edit</Form.Button>
	        </Form>
		</Container>
		</Aux>
	);
}



const condition = authUser => !!authUser;

export default withAuthorization(condition)(EditVehicle);