import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Header, Container, Form} from 'semantic-ui-react';
import Aux from '../../hoc/Aux/Aux';
import { withAuthorization } from '../../components/Session';

const INIT_STATE = {
	name: '',
	date: -1,
	error: null,
}
class AddMaintenance extends Component {
	constructor(props) {
		super(props);
		this.state = {...INIT_STATE}
	}

	render() {
		return (
				<Aux>
				<Container text>
					<Header
						as='h2'
						textAlign='center'
						>Add Maintenance Record
					</Header>
					<Form>
			          <Form.Field>
			            <Form.Input fluid name='name' type='text' label='Maintenance Name Search' placeholder='Name' />
			            <Form.Input fluid name='date' label='Date Performed' placeholder='Date' type='date' />
			            <Form.Input fluid name='date' label='Reminder Date' placeholder='Date' type='date' />
			          </Form.Field>
			          <Form.Button type='submit' floated='right'>Add Record</Form.Button>
			        </Form>
				</Container>
				</Aux>
			);
	}
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AddMaintenance);