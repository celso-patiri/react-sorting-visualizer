import React from 'react';
import { ArrayContextProvider } from '../../context/ArrayContext';
import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';

import './App.scss';

function App() {
	return (
		<div className="App">
			<nav>Navbar</nav>
			<ArrayContextProvider>
				<div className="main-container">
					<Sidebar />
					<Main />
				</div>
			</ArrayContextProvider>
			<footer>footer</footer>
		</div>
	);
}

export default App;
