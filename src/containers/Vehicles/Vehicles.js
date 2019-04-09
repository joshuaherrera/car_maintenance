import React, { Component } from 'react';
import {Segment, Header, Container, Button} from 'semantic-ui-react';
import Aux from '../../hoc/Aux/Aux';

class Vehicles extends Component {
	/*hard coding objects for testing... intent would be to make a call to db so set vehicles array.
	re:arrays : https://firebase.googleblog.com/2014/04/best-practices-arrays-in-firebase.html
	*/
	state = {
		vehicles: [{'Make': 'Jeep', 'Model': 'Grand Cherokee', 'Year': '1995'},
				   {'Make': 'Toyota', 'Model': 'Corolla', 'Year': '1994'},
				   {'Make': 'Toyota', 'Model': 'Corolla', 'Year': '1994'},
				   {'Make': 'Toyota', 'Model': 'Corolla', 'Year': '1994'},
				   {'Make': 'Toyota', 'Model': 'Corolla', 'Year': '1994'},
				   {'Make': 'Toyota', 'Model': 'Corolla', 'Year': '1994'},
				   {'Make': 'Toyota', 'Model': 'Corolla', 'Year': '1994'},
				   {'Make': 'Toyota', 'Model': 'Corolla', 'Year': '1994'},
				   {'Make': 'Toyota', 'Model': 'Corolla', 'Year': '1994'}], /*intent is to be an array of objects*/
	}
	/*TODO: Use index # as logic to display as left or right segment (even or odd)*/

	render () {
		return (
			<Aux>
			<Container text>
				<Header as='h2' textAlign='center'>Your Vehicles</Header>
			{/*loop through this section*/}
			{this.state.vehicles.map((vehicle, idx) => (			
				<Segment key={idx} compact textAlign='center' padded floated='left'>
					<p>Make: {vehicle['Make']}</p>
					<p>Model: {vehicle['Model']}</p>
					<p>Year: {vehicle['Year']}</p>
					<p>
						<Button floated='right'>Select</Button>
					</p>
				</Segment>
				)
			)}
			</Container>
			</Aux>

		);
	}

}

export default Vehicles;