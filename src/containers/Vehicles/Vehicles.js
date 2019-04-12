import React, { Component } from 'react';
import {Grid, Header, Container, Button, Divider, Segment} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Aux from '../../hoc/Aux/Aux';
import { AuthUserContext, withAuthorization } from '../../components/Session';

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
				   {'Make': 'Toyota', 'Model': 'Corolla', 'Year': '1994'},
				   {'Make': 'Toyota', 'Model': 'Corolla', 'Year': '1994'}], /*intent is to be an array of objects*/
	}
	/*TODO: Use index # as logic to display as left or right segment (even or odd)*/
	/*may want to have 4 grid.columns and loop through array, using idx
	  to decide where the vehicle goes. may use a for loop
	*/

	render () {
		return (
			<Aux>
			<Container text>
				<Header as='h2' textAlign='center'>Your Vehicles</Header>
			{/*loop through this section*/}
			<Grid stackable columns={4}>
			{this.state.vehicles.map((vehicle, idx) => (		
				<Grid.Column key={idx}>
					<Segment textAlign='center' padded floated='left'>
					<p>Make: {vehicle['Make']}</p>
					<p>Model: {vehicle['Model']}</p>
					<p>Year: {vehicle['Year']}</p>
					<p>
						<Button 
							as={Link}
							to={{
								pathname: '/vehicle',
								state: {
								make: vehicle['Make'],
								model: vehicle['Model'],
								year: vehicle['Year'],
								}
							}}
							floated='right'

							>Select
						</Button>
					</p>
					</Segment>
				</Grid.Column>
				)
			)}
			</Grid>
			<Divider hidden />
			<Button floated='right'>Add Vehicle</Button>
			</Container>
			</Aux>

		);
	}

}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Vehicles);