import React from 'react';

import Aux from '../Aux/Aux';
import classes from './Layout.css';
import Navigation from '../../containers/Navigation/Navbar';

const layout = (props) => (
	<Aux>
		{/*<div>Toolbar, Sidedrawer, Backdrop (maybe), Footer</div>*/}
		<Navigation />
		<main className={classes.Content}>
			{props.children}
		</main>
	</Aux>
);

export default layout;