import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Toolbar from './components/UI/Toolbar/Toolbar';
import Index from './components/pages/Index/Index';
import NewClient from './components/pages/NewClient/NewClient';
import Cars from './components/pages/Cars/Cars';

import FixesByCar from './components/FixesByCar/FixesByCar';

function App() {
	return (
		<React.Fragment>
			<Toolbar />
			<Switch>
				<Route exact path='/' component={Index} />
				<Route exact path='/client/new' component={NewClient} />
				<Route exact path='/client/:clientId/cars' component={Cars} />
				<Route exact path='/cars/:carId/fixes' component={FixesByCar} />
			</Switch>
		</React.Fragment>
	);
}

export default App;
