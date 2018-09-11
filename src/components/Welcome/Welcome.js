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
			<MoreInfo info="This is the first bit of info" img="this would be an img link"/>
			<MoreInfo info="This is the second bit of info" img="this would be an img link"/>
			<MoreInfo info="This is the third bit of info" img="this would be an img link"/>

		</Aux>
	);
}

export default welcome;