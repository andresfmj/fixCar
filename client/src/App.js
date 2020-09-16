import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Toolbar from './components/UI/Toolbar/Toolbar';
import Index from './components/pages/Index/Index';

function App() {
	return (
		<React.Fragment>
			<Toolbar />
			<Switch>
				<Route exact path='/' component={Index} />
				<Route exact path='/client/:clientId/cars' render={() => <h2>Cars by Client</h2>} />
				<Route exact path='/cars/:carId/fixes' render={() => <h2>Fixes by Car</h2>} />
			</Switch>
		</React.Fragment>
	);
}

export default App;
