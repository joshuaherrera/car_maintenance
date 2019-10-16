import React from 'react';
import { Container, Segment, Header } from 'semantic-ui-react';
import Aux from '../../hoc/Aux/Aux';
import classes from './About.css';

const about = (props) => {
	//return some jsx to render
	return (
		<Aux>
			<Container>
				<Segment padded textAlign='center'>
					<Header dividing as='h2'>
						<div>About the Site</div>
					<Header.Subheader>Some Background</Header.Subheader>
					</Header>

					<p className={classes.Content}>The intent behind this site was to make vehicle maintenance easier for owners. Have you ever had instances in life
					where you have so much going on you forget 3 months have gone by and it is time for an oil change? With this site you can add vehicles to your account
					and setup email reminders for upcoming maintenance intervals. This frees up mental energy for other activities and also take tip top shape of your vehicle!</p>
				
					<Header dividing as='h2'>
						<div>About the Author</div>
					</Header>

					<div className={classes.Content}>
					<p>Joshua Herrera is a technology lover and car enthusiast. He graduated from California State University, Long Beach
					in 2015 with a degree in Human Development and went back to school for Computer Science with Oregon State University, graduating in 2019.
					</p>
					<p>One day, he decided to utilize both of his interests and develop this site, mainly for personal use, as well as a way to learn first hand
					the React framework.
					</p>
					</div>
				</Segment>
{/*
				<Segment padded textAlign='center'>
					<Header dividing as='h2'>
						<div>About the Author</div>
					</Header>
					<div>second part of about</div>
				</Segment>*/}
			</Container>
		</Aux>
	);
}

export default about;