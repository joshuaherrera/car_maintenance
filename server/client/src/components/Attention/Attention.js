import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Aux from '../../hoc/Aux/Aux';
import classes from './Attention.css';
import { Container, Header, Button, Divider } from 'semantic-ui-react';
import { AuthUserContext } from '../../components/Session';


class Attention extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const AttnNonAuth = () => (
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

		const AttnAuth = () => (
			<Aux>
				<div className={classes.All}>
				<Container >
				{/*<Segment basic padded>*/}
					<Header textAlign='center' as='h2'>
						Vehicle Maintenance Tracker
					</Header>
					<Divider hidden />
					<div className={classes.Content}>To add vehicles to your account, track their maintenance history, and
						schedule maintenance reminders, click the button below.
					</div>
					<Button as={Link} to='/vehicles' basic color="blue" floated="right">
						Vehicles
					</Button>
				{/*</Segment>*/}
				<Divider hidden />
				</Container>
				</div>
			</Aux>
		);

		const Attn = () => (
			<div>
				<AuthUserContext.Consumer>
					{authUser => 
						authUser ? <AttnAuth /> : <AttnNonAuth />
					}
				</AuthUserContext.Consumer>
			</div>
		);

		return (
			<Attn />
		);
	}
}

export default Attention;