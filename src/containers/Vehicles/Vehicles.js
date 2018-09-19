import React, { Component } from 'react';
import {Segment, Header, Container, Button} from 'semantic-ui-react';
import Aux from '../../hoc/Aux/Aux';

class Vehicles extends Component {
	state = {
		vehicles: [], /*intent is to be an array of objects*/
	}
	/*TODO: Use index # as logic to display as left or right segment*/

	render () {
		return (
			<Aux>
			<Container text>
				<Header as='h2' textAlign='center'>Your Vehicles</Header>
				<Segment textAlign='center' padded floated='left'>
					<p>Make: Jeep</p>
					<p>Model: Grand Cherokee</p>
					<p>Year: 1995</p>
					<p>
						<Button floated='right'>Select</Button>
					</p>
				</Segment>
				<Segment textAlign='center' padded floated='right'>
					<p>Make: Toyota</p>
					<p>Model: Corolla</p>
					<p>Year: 1994</p>
					<Button floated='right'>Select</Button>
				</Segment>
			</Container>
			</Aux>

		);
	}

}

export default Vehicles;