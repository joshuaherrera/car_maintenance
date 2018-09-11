import React, { Component } from 'react';
import {Container, Segment, Form} from 'semantic-ui-react';

class Signup extends Component {
	state = {
		username: null,
		email: null,
		pass: null, /*Don't store !! look into best practice*/
		termsBool: null,
	};


  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Field>
          <Form.Input fluid label='Username' placeholder='Username' />
          <Form.Input fluid label='Email' placeholder='Email' />
          <Form.Input fluid label='Password' placeholder='Password' type='password' />
          <Form.Input fluid label='Confirm Password' placeholder='Confirm Password' type='password' />
        </Form.Field>
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default Signup;