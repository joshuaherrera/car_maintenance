import React from 'react';
import { Header } from 'semantic-ui-react';
import { compose } from 'recompose';
import PassChangeForm from '../../containers/PassChange/PassChange';
import { AuthUserContext,
		 withAuthorization,
		 withEmailVerification,
		} from '../../components/Session';

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

export default compose(
	withEmailVerification,
	withAuthorization(condition),
)(AccountPage);