import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Welcome from './components/Welcome/Welcome';
import About from './components/About/About';
import Signup from './containers/Signup/Signup';
import Login from './containers/Login/Login';
import Vehicles from './containers/Vehicles/Vehicles';

/*TODO: 
	-finish styling MoreInfo, About
	-add a footer
	-find out how to make a seperate menu render when at mobile [STRETCH]
	-resolution[LOOK INTO DEVICE VISIBILITY FOR GRID]
	-make other pages 
		~~logged in home page
		~~navbar when logged in
		~~individual vehicle page
		~~page to add maintenance events

	-sync backend with frontend to display cars and work done

	-setup email reminders for work done ie oil change every 3 months. (look into services)

	09/10/2018: 
	-vehicle page
	-develop add maintenance page
	-develop edit maintenance page
	-setup functionality of signup/login/vehicles... prototype by console.logging
		-initial console logging done for signup page

	04/04/19:
	-setup routes constant

*/

class App extends Component {
  render() {
    return (
	    	<Layout>
	    		<Switch>
	    			<Route path="/about" component={About} />
	    			<Route path="/sign-up" component={Signup} />
	    			<Route path="/login" component={Login} />
	    			<Route path="/vehicles" component={Vehicles} />
	    			<Route path="/" exact component={Welcome} />
	    		</Switch>
	    	</Layout>
    );
  }
}

export default App;
