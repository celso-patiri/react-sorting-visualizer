import styled from 'styled-components';
import ArrayContainer from '../ArrayContainer/ArrayContainer';
import ArraySlider from '../ArraySlider/ArraySlider';

export default function Main() {
	return (
		<Container>
			<ArrayContainer />
			<ArraySlider />
		</Container>
	);
}

const Container = styled.main`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
