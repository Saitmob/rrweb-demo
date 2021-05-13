/*
 * @Description: 
 * @Author: qxp
 * @Date: 2021-04-27 17:36:22
 * @LastEditors: qxp
 * @LastEditTime: 2021-05-07 10:10:55
 */
import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
  } from "react-router-dom";

import routes from './routers';
import Nav from '@/components/Nav';
import './app.less';

function App() {
	console.log('aaa')
	return (
		<div className="App">
			<Router>
				<Nav />
				{/* <div>
					<nav>
						<ul>
							{routes.map(r => (<li>
								<Link to={r.path}>{r.name}</Link>
							</li>))}
						</ul>
					</nav>
				</div> */}
				<Switch>
					{routes.map(r => {
						let { path, component: Component } = r;
						return (
							<Route
								path={path}
								render={props => (
									<Component {...props} />
								)}
							/>
						)
					})}
				</Switch>
			</Router>
		</div>
	);
}

export default App;
