import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Welcome from './components/Welcome/Welcome';

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
