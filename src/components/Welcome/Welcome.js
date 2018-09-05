import React from 'react';

import Aux from '../../hoc/Aux/Aux';
import Attention from '../Attention/Attention';

const welcome = (props) => {
	//return some jsx to render
	return (
		<Aux>
			<Attention />
			<div>More info</div>
		</Aux>
	);
}

export default welcome;