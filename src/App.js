import {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Signup';
import Signup from './components/Signup';

function App() {

return (
	<Router>
	<div className="App">
	<Route exact path='/register' component={Signup} />
	<Route exact path='/login' component={Login} />
	</div>
	</Router>
);
}

export default App;
