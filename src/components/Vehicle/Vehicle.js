import React from 'react';
import { Link } from 'react-router-dom';
import {Grid, Header, Container, Button, Divider, Segment} from 'semantic-ui-react';
import Aux from '../../hoc/Aux/Aux';
import { withAuthorization } from '../../components/Session';

//think about adding a column={1}  for a picture of the car
const Vehicle = (props) => {
	return (
		<Aux>
		<Container text>
			<Header as='h2' textAlign='center'>{props.location.state.year} {props.location.state.make} {props.location.state.model}</Header>
			<Grid padded stackable columns={2}>
				<Grid.Row>
					<Grid.Column>
						Upcoming Maintenance : oil change[dynamically render]
					</Grid.Column>
					<Grid.Column>
						Date Performed : 04/20/2019 [dynamically render]
					</Grid.Column>					
				</Grid.Row>
				<Grid.Row>
					<Grid.Column>
						<Link to='/vehicles'>Maintenance History</Link>
					</Grid.Column>					
				</Grid.Row>
				<Grid.Row>
					<Grid.Column>
						<Button>Edit Vehicle</Button>
					</Grid.Column>
					<Grid.Column>
						<Button>Add Maintenance Record</Button>
					</Grid.Column>					
				</Grid.Row>
				
			</Grid>

		</Container>
		</Aux>
	);
}



const condition = authUser => !!authUser;

export default withAuthorization(condition)(Vehicle);