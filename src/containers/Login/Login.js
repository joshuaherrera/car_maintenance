import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Container, Segment, Form, Divider } from 'semantic-ui-react';
import { compose } from 'recompose';
import { withFirebase } from '../../components/Firebase';
import Aux from '../../hoc/Aux/Aux';

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
      <Aux>
      <Form>
        <Form.Field>
          <Form.Input onChange={this.handleEmailChange}fluid name='email' type='text' label='Email' placeholder='Email Address' />
          <Form.Input onChange={this.handlePassChange}fluid name='pass' label='Password' placeholder='Password' type='password' />
        </Form.Field>
        <Form.Button disabled={isInvalid} type='submit' onClick={this.onSubmit}>Submit</Form.Button>
        {error && <p>{error.message} </p>}
      </Form>
      <Divider hidden />
      <p>
        <Link to='/'>Forgot password?</Link>
      </p>
      </Aux>
    );
  }
}

const Login = compose(
  withRouter,
  withFirebase,
)(LoginBase);

export default LoginPage;