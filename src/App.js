import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Welcome from './components/Welcome/Welcome';

/*TODO: 
	finish styling MoreInfo
	make other pages (sign up, login, cars)
	add routing
	***after this accomplishment ^ need to watch more vids for authentication***
	add authentication
	conditionally render cars page.

	setup backend to store maintenance data using a database
	(look into using firebase for the free tier)
	sync backend with frontend to display cars and work done

	setup email reminders for work done ie oil change every 3 months. (look into services)

*/

class App extends Component {
  render() {
    return (
    	<Layout>
    		<Welcome />
    	</Layout>
    );
  }
}

export default App;
