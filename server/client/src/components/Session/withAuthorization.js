import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import AuthUserContext from './Context';
import { withFirebase } from '../Firebase';

const withAuthorization = condition => Component => {
	class WithAuthorization extends React.Component {
		//this function will listen for an authorization change
		//and will check if the passed in condition is met.
		//the passed in condition is used to check if a user is 
		//authorized or not.
		//if a user is not authorized, the user is redirected to the
		//login page
		componentDidMount() {
			this.listener = this.props.firebase.onAuthUserListener(
				authUser => {
					if(!condition(authUser)) {
						this.props.history.push('/login');
					}
				},
				() => this.props.history.push('/login'),
			);
		}

		componentWillUnmount() {
			this.listener();
		}

		render() {
			return(
				<AuthUserContext.Consumer>
					{authUser =>
						condition(authUser) ? <Component {...this.props} /> : null
					}
				</AuthUserContext.Consumer>
			);
		}
	}

	return compose(
		withRouter,
		withFirebase,
	)(WithAuthorization);
};

export default withAuthorization;