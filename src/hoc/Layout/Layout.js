import React from 'react';
import Aux from '../Aux/Aux';
const layout = (props) => (
	<Aux>
		<div>Toolbar, Sidedrawer, Backdrop maybe</div>
		<main>
			{props.children}
		</main>
	</Aux>
);

export default layout;