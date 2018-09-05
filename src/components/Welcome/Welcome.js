import React from 'react';

import Aux from '../../hoc/Aux/Aux';
import Attention from '../Attention/Attention';
import MoreInfo from '../MoreInfo/MoreInfo';

const welcome = (props) => {
	//return some jsx to render
	return (
		<Aux>
			<Attention />
			{/*<div>More info</div>*/}
			<MoreInfo />

		</Aux>
	);
}

export default welcome;