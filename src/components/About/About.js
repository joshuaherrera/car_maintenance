import React from 'react';
import { Container, Segment, Header } from 'semantic-ui-react';
import Aux from '../../hoc/Aux/Aux';

const about = (props) => {
	//return some jsx to render
	return (
		<Aux>
			<Container>
				<Segment padded textAlign='center'>
					<Header dividing as='h2'>
					<div>first part of about</div>
					<Header.Subheader>Some background</Header.Subheader>
					</Header>
					<p>Some initial info</p>
				</Segment>
				<Segment padded textAlign='center'>
					<div>second part of about</div>
				</Segment>
			</Container>
		</Aux>
	);
}

export default about;