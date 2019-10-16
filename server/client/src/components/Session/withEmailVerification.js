import React from 'react';
import AuthUserContext from './Context';
import { withFirebase } from '../Firebase';
import { Container, Button } from 'semantic-ui-react';
import classes from './withEmailVerification.css';

const needsEmailVerification = authUser => 
	authUser &&
	!authUser.emailVerified &&
	authUser.providerData
		.map(provider => provider.providerId)
		.includes('password');

const withEmailVerification = Component => {
	class WithEmailVerification extends React.Component {
		constructor(props) {
			super(props);

			this.state = { isSent: false };
		}

		onSendEmailVerification = () => {
			this.props.firebase
				.doSendEmailVerification()
				.then(() => this.setState({ isSent: true }));
		};

		render() {
			return (
				<AuthUserContext.Consumer>
					{authUser => 
						needsEmailVerification(authUser) ? (
							<Container text>
								<div className={classes.Content}>
									{this.state.isSent ? (
										<p>
											E-mail confirmation sent: Check your E-mails (Spam included)
											for a confirmation E-mail. Refresh this page once you confirmed 
											your E-mail.
										</p>
									) : (
										<p>
											Verify your E-mail: Check your E-mails 
											(Spam folder included) for a confirmation E-mail or 
											send another confirmation E-mail.
										</p>
									)}

									<Button 
										onClick={this.onSendEmailVerification}
										disabled={this.state.isSent}>
											Send Confirmation E-mail
									</Button>
								</div>
							</Container>
						) : (
							<Component {...this.props} />
						)
					}
				</AuthUserContext.Consumer>
			);
		}
	}
	return withFirebase(WithEmailVerification);
};

export default withEmailVerification;