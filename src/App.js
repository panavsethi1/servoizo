import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/' exact component={Login}></Route>
			</Switch>
		</Router>
	);
}

export default App;
