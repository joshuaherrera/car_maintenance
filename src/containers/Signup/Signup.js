import React, { Component } from 'react';
import {Container, Segment, Form} from 'semantic-ui-react';

class Signup extends Component {
	state = {
		username: null,
		email: null,
		pass: null, /*Don't store !! look into best practice*/
		termsBool: null,
	};
  //TODO: verify username not taken
  handleUsernameChange = (event) => {
    this.setState({username: event.target.value});
    console.log(this.state);
  }
  //TODO: verify email is in right format
  handleEmailChange = (event) => {
    this.setState({email: event.target.value});
    console.log(this.state);
  }
  //figure out how to set up terms
/*  handleTermsChange = (event) => {
    console.log(event.target.value);
    this.setState({termsBool: event.target.value});
    console.log(this.state);
  }*/
/*
  handleUsernameChange = (event) => {
    this.setState({username: event.target.value});
    console.log(this.state);
  }
*/

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Field>
          <Form.Input onChange={this.handleUsernameChange} fluid name='username' label='Username' placeholder='Username' />
          <Form.Input onChange={this.handleEmailChange} fluid name='email' label='Email' placeholder='Email' />
          <Form.Input fluid name='pass' label='Password' placeholder='Password' type='password' />
          <Form.Input fluid name='confirmed-pass' label='Confirm Password' placeholder='Confirm Password' type='password' />
        </Form.Field>
        <Form.Checkbox onChange={this.handleTermsChange} name='terms' label='I agree to the Terms and Conditions' />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default Signup;