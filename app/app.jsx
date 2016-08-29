import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
	render() {
		return (
			<div>
				<p>Hello World</p>
				<Link to='/about'>About Me</Link>
				{this.props.children}
			</div>
		);
	}
}

export default App;