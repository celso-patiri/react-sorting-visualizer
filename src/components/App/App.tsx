import { ArrayContextProvider } from '../../context/ArrayContext';
import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';
import styled from 'styled-components';

function App() {
	return (
		<AppContainer>
			<Navbar>Navbar</Navbar>
			<ArrayContextProvider>
				<MainContainer>
					<Sidebar />
					<Main />
				</MainContainer>
			</ArrayContextProvider>
			<Footer>footer</Footer>
		</AppContainer>
	);
}

const AppContainer = styled.div`
	max-width: 100vw;
	display: flex;
	flex-direction: column;
`;

const MainContainer = styled.div`
	margin: 5vh 0;
	height: 90vh;
	display: flex;
`;

const Navbar = styled.nav`
	width: 100vw;
	height: 5vh;
	position: absolute;
	top: 0;
`;

const Footer = styled.footer`
	width: 100%;
	height: 5vh;
	position: absolute;
	bottom: 0;
`;

export default App;
