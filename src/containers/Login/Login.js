import React, { Component } from 'react';
import {Container, Segment, Form} from 'semantic-ui-react';

class Login extends Component {
	state = {
		username: null,
		pass: null, /*Don't store !! look into best practice*/
	};


  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Field>
          <Form.Input fluid label='Username' placeholder='Username' />
          <Form.Input fluid label='Password' placeholder='Password' type='password' />
        </Form.Field>
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default Login;