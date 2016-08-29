//Import relevant react libraries
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory, hashHistory } from 'react-router';

import App from './app.jsx';
import Home from './home.jsx';
import AboutMe from './aboutMe.jsx';

require('./styles/style.less');

ReactDOM.render((
		//Använd hashHistory om inte browserHistory funkar
		<Router history={browserHistory}>
			<Route path='/' component={App}>
				<IndexRoute component={Home}/>
				<Route path='about' component={AboutMe}/>
			</Route>
		</Router>
	), document.getElementById('content'));