import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Customer from './components/Customer';
import Devices from './components/Devices';
import Service from './components/Service';
import Payment from './components/Payment';

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/' exact component={Login}></Route>
				<Route path='/dashboard' exact component={Dashboard}></Route>
				<Route path='/customer' exact component={Customer}></Route>
				<Route path='/devices' exact component={Devices}></Route>
				<Route path='/service' exact component={Service}></Route>
				<Route path='/payment' exact component={Payment}></Route>
			</Switch>
		</Router>
	);
}

export default App;
