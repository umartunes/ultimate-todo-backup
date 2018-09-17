import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from './Login'

class Routes extends Component {

	render() {
		return (
			<Fragment>
				<Switch>
					<Route path="/" component={Login} />
				</Switch>
			</Fragment>
		)
	}

}

export default Routes;
