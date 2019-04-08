import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { withFirebase } from '../../components/Firebase';

const LogoutButton = ({ firebase }) => (
	<Button onClick={firebase.doSignOut}
	as={ Link }
	to='/'
	inverted
	basic
	name='logout'>
		Sign Out
	</Button>
);

export default withFirebase(LogoutButton);