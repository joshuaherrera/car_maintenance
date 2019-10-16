import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import { Container, Header, Segment } from 'semantic-ui-react';
import classes from './Contact.css'

const contact = (props) => {
	return (
		<Aux>
			<Container>
				<Segment>
					<Header dividing textAlign='center' as='h2'>Contact The Author</Header>
					<div className={classes.Content}>
						Reach me by:
						<p className={classes.SubContent}>
							<a href='mailto:joshua.herrera@outlook.com'>
								E-mail
							</a> |
							<a href='https://github.com/joshuaherrera'>
								Github
							</a>
							 |
							<a href='https://www.linkedin.com/in/joshherrera/'>
								LinkedIn
							</a>
							
						</p>
					</div>
				</Segment>
			</Container>
		</Aux>
	);
}

export default contact;