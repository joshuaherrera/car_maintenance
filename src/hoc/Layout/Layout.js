import React from 'react';

import Aux from '../Aux/Aux';
import classes from './Layout.css';
import Navigation from '../../containers/Navigation/Navbar';
import { Container } from 'semantic-ui-react';

const layout = (props) => (
	<Aux>
		{/*<div>Toolbar, Sidedrawer, Backdrop (maybe), Footer</div>*/}
		<Navigation authUser={props.authUser}/>
		<Container>
		<main className={classes.Content}>
			{props.children}
		</main>
		</Container>
	</Aux>
);

export default layout;