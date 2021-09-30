import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/' exact component={Login}></Route>
				<Route path='/dashboard' exact component={Dashboard}></Route>
			</Switch>
		</Router>
	);
}

export default App;
