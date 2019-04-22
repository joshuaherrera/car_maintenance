import React, { Component } from 'react';
import {Link, withRouter } from 'react-router-dom';
import { Form, Header, Checkbox } from 'semantic-ui-react';
import { compose } from 'recompose';
import { withFirebase } from '../../components/Firebase';
import Aux from '../../hoc/Aux/Aux';
import * as ROLES from '../../constants/roles';

//return this page to have firebase props passed
const SignupPage = () => (
  <Signup />
);

const INIT_STATE = {
    username: '',
    email: '',
    pass1: '', /*Don't store !! look into best practice*/
    pass2: '',
    isAdmin: false,
    error: null,
}

class SignupBase extends Component {
  constructor(props) {
    super(props);

    this.state = {...INIT_STATE};
  }

  //TODO: verify username not taken
  handleUsernameChange = (event) => {
    this.setState({username: event.target.value});
    //console.log(this.state);
  }

  //TODO: verify email is in right format
  handleEmailChange = (event) => {
    this.setState({email: event.target.value});
    //console.log(this.state);
  }
  //figure out how to set up terms
/*  handleTermsChange = (event) => {
    console.log(event.target.value);
    this.setState({termsBool: event.target.value});
    console.log(this.state);
  }*/

  handlePass1Change = (event) => {
    this.setState({pass1: event.target.value});
    //console.log(this.state);
  }
  handlePass2Change = (event) => {
    this.setState({pass2: event.target.value});
    //console.log(this.state);
  }

    onChangeCheckbox = event => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  onSubmit = event => {
    const {username, email, pass1, isAdmin } = this.state;

    const roles = {};

    if(isAdmin) {
      roles[ROLES.ADMIN] = ROLES.ADMIN;
    }
    //would need to pass in firebase api
    this.props.firebase
    .doCreateUserWithEmailAndPassword(email, pass1)
    .then(authUser => {
      //create user in firebase realtime db
      return this.props.firebase
        .user(authUser.user.uid) //store into rtdb with uid and set the values
        .set({
          username,
          email,
          roles,
        });
    })
    .then(() => {
      return this.props.firebase.doSendEmailVerification();
    })
    .then(authUser => { //seems to check if req returns correctly, by checking if authuser is available
      this.setState({...INIT_STATE});
      this.props.history.push('/'); //go to home page after signup. nees history
    })
    .catch(error => {
      this.setState({ error });
    });

    event.preventDefault();
  };

  render() {
    const { value } = this.state;

    //copy state for comparison
    const {
      username,
      email,
      pass1,
      pass2,
      isAdmin,
      error,
    } = this.state;

    //not sure if best practice. theres probably a package i could use
    const isInvalid = pass1 !== pass2 ||
            pass1 === '' ||
            email === '' ||
            username === '';

    return (
      <Aux>
      <Header as='h2' textAlign='center'>Sign Up</Header>
      <Form>
        <Form.Field>
          <Form.Input onChange={this.handleUsernameChange} fluid name='username' label='Username' placeholder='Username' type='text'/>
          <Form.Input onChange={this.handleEmailChange} fluid name='email' label='Email' placeholder='Email' type='text'/>
          <Form.Input onChange={this.handlePass1Change}fluid name='pass1' label='Password' placeholder='Password' type='password' />
          <Form.Input onChange={this.handlePass2Change}fluid name='pass2' label='Confirm Password' placeholder='Confirm Password' type='password' />
        </Form.Field>
        <label>
           <input type='checkbox' disabled onChange={this.onChangeCheckbox} name='isAdmin' checked={isAdmin} />
           Admin
        </label>
        <Form.Button type='submit' onClick={this.onSubmit} disabled={isInvalid}>Submit</Form.Button>
        {error && <p>{error.message}</p>}
      </Form>
      </Aux>
    )
  }
}

const Signup = compose(
  withRouter,
  withFirebase,
)(SignupBase);

export default SignupPage;