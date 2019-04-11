import React from 'react';
import { Header } from 'semantic-ui-react';
import PassChangeForm from '../../containers/PassChange/PassChange';
import { AuthUserContext, withAuthorization } from '../../components/Session';

const AccountPage = () => (
	<AuthUserContext.Consumer>
		{authUser => (
			<div>
				<Header textAlign='center' as='h2'>Account: {authUser.email}</Header>
				<Header textAlign='left' as='h3'>Change Password</Header>
				<PassChangeForm />
			</div>
		)}
	</AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);