import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { withFirebase } from '../../components/Firebase';
import { Header, Container, List, Button } from 'semantic-ui-react';
import Aux from '../../hoc/Aux/Aux';
import { compose } from 'recompose';
import { withAuthorization, withEmailVerification } from '../../components/Session';
import * as ROLES from '../../constants/roles';
import * as ROUTES from '../../constants/routes';

const AdminPage = () => (
	<Aux>
		<Container textAlign='center'>
			<Header as='h2'>Admin</Header>
			<p>The Admin page is accessible by every signed in admin user.</p>
			
			<Switch>
				<Route exact path={ROUTES.ADMIN_DETAILS} component={UserItem} />
				<Route exact path={ROUTES.ADMIN} component={UserList} />
			</Switch>
		</Container>
	</Aux>
); 

class UserListBase extends Component {
	constructor(props) {
		super(props);

	this.state = {
		loading: false,
		users: [],
	};
	}

	componentDidMount() {
		this.setState({ loading: true });
		//on is a listener that checks for any changes
		this.props.firebase.users().on('value', snapshot => {
			const usersObject = snapshot.val();
			const usersList = Object.keys(usersObject).map(key => ({
				...usersObject[key],
				uid: key,
			}));
			this.setState({
				users: usersList,
				loading: false,
			});
		});
	}

	componentWillUnmount() {
		this.props.firebase.users().off();
	}

	render() {
		const { users, loading } = this.state;
		return (
			<Aux>
				<Container textAlign='center'>
					<Header as='h2'>Users</Header>
					{loading && <div>Loading...</div>}

			<List bulleted>
				{users.map(user => (
					<List.Item key={user.uid}>
						<span>
							<strong>ID:</strong> {user.uid} 
						</span>
						<span>
							<strong> Email:</strong> {user.email} 
						</span>
						<span>
							<strong> Username:</strong> {user.username} 
						</span>
						<span>
							<Link 
								to={{
									pathname: `${ROUTES.ADMIN}/${user.uid}`,
									state: { user },
								}}>
								 Details 
							</Link>
						</span>		
					</List.Item>
				))}
			</List>
				</Container>
			</Aux>
		);
	}
}

class UserItemBase extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: false,
			user: null,
			...props.location.state,
		};
	}

	componentDidMount() {
		if(this.state.user) {
			//console.log('state detected'); //mostly called from admin page
			return;
		}

		this.setState({ loading : true });

		this.props.firebase
			.user(this.props.match.params.id)
			.on('value', snapshot => { /*whenever there is some change (.on) we update the state. only called if navigated to component directly ie not admin page*/
				this.setState({
					user: snapshot.val(),
					loading: false,
				});
				console.log('called from: ' + this.props.match.params.id)
			});
	}

	componentWillUnmount() {
		this.props.firebase.user(this.props.match.params.id).off();
	}

	onSendPasswordResetEmail = () => {
		this.props.firebase.doPasswordReset(this.state.user.email);
	};

	render() {
		const { user, loading } = this.state;

		return (
			<Container>
				<Header as='h2'>
					User ({this.props.match.params.id})
				</Header>
				{loading && <div>Loading...</div>}

				{user && (
					<div>
						<span><strong>ID:</strong> {user.uid} </span>
						<span><strong>E-mail:</strong>{user.email} </span>
						<span><strong>Username:</strong> {user.username} </span>
						<span>
							<Button onClick={this.onSendPasswordResetEmail}>Send Password Reset</Button>
						</span>
					</div>
				)}
			</Container>
		);
	}
}

const UserItemOld = ({ match }) => (
	<Container>
		<Header as='h2'>
			User ({match.params.id})
		</Header>
	</Container>
);

const condition = authUser => 
	authUser && !!authUser.roles[ROLES.ADMIN];

const UserList = withFirebase(UserListBase);

const UserItem = withFirebase(UserItemBase);

export default compose(
	withEmailVerification,
	withAuthorization(condition),
	withFirebase,
	)(AdminPage);