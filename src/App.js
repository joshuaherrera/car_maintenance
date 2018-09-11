import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Welcome from './components/Welcome/Welcome';
import About from './components/About/About';
import Signup from './containers/Signup/Signup';
import Login from './containers/Login/Login';

/*TODO: 
	-finish styling MoreInfo, About
	-add a footer
	-find out how to make a seperate menu render when at mobile
	-resolution[LOOK INTO DEVICE VISIBILITY FOR GRID]
	-make other pages 
		sign up
		login
		cars
		about [WIP]
	~add routing [pretty much done]
	***after this accomplishment ^ need to watch more vids for authentication***
	-add authentication
	-conditionally render cars page.

	-setup backend to store maintenance data using a database
	(look into using firebase for the free tier)
	-sync backend with frontend to display cars and work done

	-setup email reminders for work done ie oil change every 3 months. (look into services)

*/

class App extends Component {
  render() {
    return (
	    	<Layout>
	    		<Switch>
	    			<Route path="/about" component={About} />
	    			<Route path="/sign-up" component={Signup} />
	    			<Route path="/login" component={Login} />
	    			<Route path="/" exact component={Welcome} />
	    		</Switch>
	    	</Layout>
    );
  }
}

export default App;
