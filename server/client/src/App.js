import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Welcome from './components/Welcome/Welcome';
import About from './components/About/About';
import Signup from './containers/Signup/Signup';
import Vehicle from './components/Vehicle/Vehicle';
import EditVehicle from './components/EditVehicle/EditVehicle';
import AddVehicle from './components/AddVehicle/AddVehicle';
import Contact from './components/Contact/Contact';
import Login from './containers/Login/Login';
import Vehicles from './containers/Vehicles/Vehicles';
import AddMaintenance from './containers/AddMaintenance/AddMaintenance';
import Reset from './containers/Reset/Reset';
import Account from './containers/Account/Account';
import Admin from './containers/Admin/Admin';
import { withAuth } from './components/Session';
import * as ROUTES from './constants/routes';

/*TODO: 
	-add a footer
	-find out how to make a seperate menu render when at mobile [STRETCH]
	-resolution[LOOK INTO DEVICE VISIBILITY FOR GRID]
	-how to use realtime database with firebase
	-sync backend with frontend to display cars and work done
	-setup email reminders for work done ie oil change every 3 months. (look into services)
		-start with three basic maintenance types: oil change, brake change, tire rotation
	-develop edit maintenance page
	NOTE: sendgrid can be used to send emails
	page 150
*/

class App extends Component {
  render() {
    return (
	    	<Layout>
	    		<Switch>
	    			<Route path={ROUTES.ABOUT} component={About} />
	    			<Route path={ROUTES.SIGN_UP} component={Signup} />
	    			<Route path={ROUTES.LOGIN} component={Login} />
	    			<Route path={ROUTES.VEHICLES} component={Vehicles} />
	    			<Route path={ROUTES.RESET} component={Reset} />
	    			<Route path={ROUTES.ACCOUNT} component={Account} />
	    			<Route path={ROUTES.ADMIN} component={Admin} />
	    			<Route path={ROUTES.VEHICLE} component={Vehicle} />
	    			<Route path={ROUTES.CONTACT} component={Contact} />
	    			<Route path={ROUTES.EDIT_VEHICLE} component={EditVehicle} />
	    			<Route path={ROUTES.ADD_VEHICLE} component={AddVehicle} />
	    			<Route path={ROUTES.ADD_MAINT} component={AddMaintenance} />
	    			<Route path={ROUTES.LANDING} exact component={Welcome} />
	    		</Switch>
	    	</Layout>
    );
  }
}

export default withAuth(App);
