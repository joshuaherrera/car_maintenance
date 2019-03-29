import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; 
import './index.css';
import App from './App';
import Firebase, { FirebaseContext } from './components/Firebase';
import registerServiceWorker from './registerServiceWorker';

const app = (
	<FirebaseContext.Provider value={new Firebase()}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</FirebaseContext.Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
