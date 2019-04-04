import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Segment, Form } from 'semantic-ui-react';
import { compose } from 'recompose';
import { withFirebase } from '../../components/Firebase';

const LoginPage = () => (
  <Login />
);

const INIT_STATE = {
  email: '',
  pass: '',
  error: null,
};

class LoginBase extends Component {
	constructor(props) {
    super(props);

    this.state = {...INIT_STATE};
  }


  handleEmailChange = event => {
    this.setState({email: event.target.value});
  };

  handlePassChange = event => {
    this.setState({pass: event.target.value});
  };

  onSubmit = event => {
    const { email, pass } = this.state;

    this.props.firebase
    .doSignInWithEmailAndPassword(email, pass)
    .then(() => {
      this.setState({...INIT_STATE});
      this.props.history.push('/');
    })
    .catch(error => {
      this.setState({ error });
    });
    event.preventDefault();
  };

  render() {
    const { value } = this.state
    const { email, pass, error } = this.state;
    const isInvalid = pass === '' || email === '';
    return (
      <Form>
        <Form.Field>
          <Form.Input onChange={this.handleEmailChange}fluid name='email' type='text' label='Email' placeholder='Email Address' />
          <Form.Input onChange={this.handlePassChange}fluid name='pass' label='Password' placeholder='Password' type='password' />
        </Form.Field>
        <Form.Button disabled={isInvalid} type='submit' onClick={this.onSubmit}>Submit</Form.Button>
        {error && <p>{error.message} </p>}
      </Form>
    );
  }
}

const Login = compose(
  withRouter,
  withFirebase,
)(LoginBase);

export default LoginPage;