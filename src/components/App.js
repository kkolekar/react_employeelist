import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Userlist from './Userlist';
import User from './User';

const App = () => (
	<div>
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Userlist} />
				<Route path='/full-view/id=:id&name=:name&salary=:salary&age=:age' component={User} />
			</Switch>
		</BrowserRouter>
	</div>
)

export default App;