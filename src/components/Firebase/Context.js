import React from 'react';

//creates a context to use as a singleton throughout project

const FirebaseContext = React.createContext(null);

export const withFirebase = Component => props => (
	<FirebaseContext.Consumer>
		{firebase => <Component {...props} firebase={firebase} />}
	</FirebaseContext.Consumer>
)

export default FirebaseContext;