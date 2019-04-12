import React from 'react';
import { Link } from 'react-router-dom';
import Aux from '../../hoc/Aux/Aux';
import classes from './Attention.css';
//import Button from '../UI/Button/Button';
import { Container, Header, Button, Divider, Segment } from 'semantic-ui-react';
//used as attention grabber for first page
//probably need to use css to style appropriately
//look into UI frameworks like semantic ui react
const attention = (props) => {
	return (
		<Aux>
		<div className={classes.All}>
		<Container >
		{/*<Segment basic padded>*/}
			<Header textAlign='center' as='h2'>
				Vehicle Maintenance Tracker
			</Header>
			<Divider hidden />
			<div className={classes.Content}>This site was designed to make it easy for you to track your car's maintenance history. Simply log in to your account, add
			a vehicle, and begin keeping track. If you don't have an account, click the sign up button below!
			</div>
			<Button as={Link} to='sign-up' basic color="blue" floated="right">
				Sign Up
			</Button>
		{/*</Segment>*/}
		<Divider hidden />
		</Container>
		</div>
		</Aux>
	);
}

export default attention;