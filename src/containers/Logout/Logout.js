import React from 'react';
import { Button } from 'semantic-ui-react';
import { withFirebase } from '../../components/Firebase';

const LogoutButton = ({ firebase }) => (
	<Button onClick={firebase.doSignOut}
	inverted
	basic
	name='logout'>
		Sign Out
	</Button>
);

export default withFirebase(LogoutButton);