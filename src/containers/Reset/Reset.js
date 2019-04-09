import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Header } from 'semantic-ui-react';
import Aux from '../../hoc/Aux/Aux';
import { withFirebase } from '../../components/Firebase';

const ResetPage = () => (
	<div>
		<Header textAlign='center' as='h2'>Password Reset</Header>
		<ResetForm />
	</div>
);

const INIT_STATE = {
	email: '',
	error: null,
};

class ResetFormBase extends Component {
	constructor(props) {
		super(props);

		this.state = {...INIT_STATE};
	}

	onSubmit = event => {
		const { email } = this.state;

		this.props.firebase
		.doPasswordReset(email)
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
		const { email, error } = this.state;

		const isInvalid = email === '';

		return (
			<Aux>
		      <Form>
		        <Form.Field>
		          <Form.Input
		          	onChange={this.handleChange}
		          	fluid
		          	name='email'
		          	value={this.state.email}
		          	label='Email'
		          	placeholder='Email Address'
		          	type='text'/>
		        </Form.Field>
		        {/*<Form.Checkbox onChange={this.handleTermsChange} name='terms' label='I agree to the Terms and Conditions' />*/}
		        <Form.Button type='submit' onClick={this.onSubmit} disabled={isInvalid}>Reset Password</Form.Button>
		        {error && <p>{error.message}</p>}
		      </Form>
			</Aux>
		);
	}
}

export default ResetPage;

const ResetForm = withFirebase(ResetFormBase);

export { ResetForm }