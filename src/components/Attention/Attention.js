import React from 'react';

import Aux from '../../hoc/Aux/Aux';
import classes from './Attention.css';
//import Button from '../UI/Button/Button';
import { Container, Header, Button, Segment } from 'semantic-ui-react'
//used as attention grabber for first page
//probably need to use css to style appropriately
//look into UI frameworks like semantic ui react
const attention = (props) => {
	return (
		<Aux>
		<Segment padded>
			<div className={classes.Content}>[AttnGrabber] Information about the site, maybe a small logo, used to 
			persuade user to sign up
				<Segment basic textAlign='right'>
					<Button basic color="blue">
						Sign Up
					</Button>
{/*					<Button basic color="green">
						Log In
					</Button>*/}
				</Segment>
			</div>
		</Segment>
		</Aux>
	);
}

export default attention;