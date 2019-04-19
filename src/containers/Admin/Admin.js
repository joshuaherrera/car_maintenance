import React, { Component } from 'react';
import { withFirebase } from '../../components/Firebase';
import { Header, Container, List } from 'semantic-ui-react';
import Aux from '../../hoc/Aux/Aux';
import { compose } from 'recompose';
import { withAuthorization } from '../../components/Session';
import * as ROLES from '../../constants/roles';

class AdminPage extends Component {
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
					<Header as='h2'>Admin</Header>
					<p>The Admin page is accessible by every signed in admin user.</p>
					{loading && <div>Loading...</div>}
					<UserList users={users} />
				</Container>
			</Aux>
		);
	}
}

const UserList = ( { users }) => (
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
			</List.Item>
		))}
	</List>
);

const condition = authUser => 
	authUser && !!authUser.roles[ROLES.ADMIN];

export default compose(withAuthorization(condition), withFirebase,)(AdminPage);