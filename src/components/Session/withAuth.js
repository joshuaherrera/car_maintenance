import React from 'react'; 
import { withFirebase } from '../../components/Firebase';
import { AuthUserContext } from '../../components/Session';

const withAuth = Component => {
	class withAuth extends React.Component {
		constructor(props) {
		    super(props);

		    this.state = {
		    	authUser: null,
		    };
		}

	    componentDidMount() {
	      this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
	          authUser
	          ? this.setState({ authUser })
	          : this.setState({ authUser: null });
	      });
	    }

	    componentWillUnmount() {
	      this.listener();
	    }

		render() {
			return (
				<AuthUserContext.Provider value={this.state.authUser}>
					<Component {...this.props} />
				</AuthUserContext.Provider>
			);
		}
	}

	return withFirebase(withAuth);
};

export default withAuth;