import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Header } from 'semantic-ui-react';
import Aux from '../../hoc/Aux/Aux';
import { withFirebase } from '../../components/Firebase';

const INIT_STATE = {
	pass1: '',
	pass2: '',
	error: null,
};

class PassChangeForm extends Component {
	constructor(props) {
		super(props);

		this.state = {...INIT_STATE};
	}

	onSubmit = event => {
		const { pass1 } = this.state;

		this.props.firebase
		.doPasswordUpdate(pass1)
		.then(() => {
			this.setState({...INIT_STATE});
		})
		.catch(error => {
			this.setState({ error });
		});

		event.preventDefault();
	};

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value});
	}

	render() {
		const { pass1, pass2, error } = this.state;

		const isInvalid =
			pass1 !== pass2 || pass1 ==='';

		return (
			<Aux>
		      <Form>
		        <Form.Field>
		          <Form.Input
		          	onChange={this.handleChange}
		          	fluid
		          	name='pass1'
		          	value={pass1}
		          	label='New Password'
		          	placeholder='New Password'
		          	type='password'
		          />
		          <Form.Input
		          	onChange={this.handleChange}
		          	fluid
		          	name='pass2'
		          	value={pass2}
		          	label='Confirm New Password'
		          	placeholder='Confirm New Password'
		          	type='password'
		          />
		        </Form.Field>
		        <Form.Button type='submit' onClick={this.onSubmit} disabled={isInvalid}>Change Password</Form.Button>
		        {error && <p>{error.message}</p>}
		      </Form>
			</Aux>
		);
	}
}

export default withFirebase(PassChangeForm);