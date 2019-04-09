import React from 'react';
import { Header } from 'semantic-ui-react';
import PassChangeForm from '../../containers/PassChange/PassChange';

const AccountPage = () => (
	<div>
		<Header textAlign='center' as='h2'>Account Page</Header>
		<PassChangeForm />
	</div>
);

export default AccountPage;