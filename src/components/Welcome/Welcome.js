import React from 'react';

import Aux from '../../hoc/Aux/Aux';
import Attention from '../Attention/Attention';
import MoreInfo from '../MoreInfo/MoreInfo';

const welcome = (props) => {
	//return some jsx to render
	return (
		<Aux>
			<Attention />
			{/*<div>More info</div>*/}{/*NOTE: Add screenshots of each action to convince user to signup.*/}
			<MoreInfo info="Easily add vehicles to your account" img="https://i.imgur.com/KnDJb0B.jpg"/>
			<MoreInfo info="Search for many common maintenance procedures" img="https://i.imgur.com/bgnhOn3.jpg"/>
			<MoreInfo info="Setup reminders for your next scheduled maintenance" img="https://i.imgur.com/XnRZcI6.jpg"/>

		</Aux>
	);
}

export default welcome;