import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Welcome from './components/Welcome/Welcome';
import About from './components/About/About';
import Signup from './containers/Signup/Signup';
import Vehicle from './components/Vehicle/Vehicle';
import EditVehicle from './components/EditVehicle/EditVehicle';
import AddVehicle from './components/AddVehicle/AddVehicle';
import Login from './containers/Login/Login';
import Vehicles from './containers/Vehicles/Vehicles';
import AddMaintenance from './containers/AddMaintenance/AddMaintenance';
import Reset from './containers/Reset/Reset';
import Account from './containers/Account/Account';
import Admin from './containers/Admin/Admin';
import { withAuth } from './components/Session';

/*TODO: 
	-add a footer
	-find out how to make a seperate menu render when at mobile [STRETCH]
	-resolution[LOOK INTO DEVICE VISIBILITY FOR GRID]
	-how to use realtime database with firebase
	-sync backend with frontend to display cars and work done
	-setup email reminders for work done ie oil change every 3 months. (look into services)
		-start with three basic maintenance types: oil change, brake change, tire rotation
	-develop edit maintenance page
	04/04/19:
	-setup routes constant
    04/08/19:
    -setup auth pages and nonauth
        -adjust homepage when user logs in
        -may need to remove about and contact, seems unneccessary for
        a logged in user.
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
	    			<Route path="/reset" component={Reset} />
	    			<Route path="/account" component={Account} />
	    			<Route path="/admin" component={Admin} />
	    			<Route path="/vehicle" component={Vehicle} />
	    			<Route path="/edit-vehicle" component={EditVehicle} />
	    			<Route path="/add-vehicle" component={AddVehicle} />
	    			<Route path="/add-maintenance" component={AddMaintenance} />
	    			<Route path="/" exact component={Welcome} />
	    		</Switch>
	    	</Layout>
    );
  }
}

export default withAuth(App);
