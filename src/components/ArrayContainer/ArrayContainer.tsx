import { useContext } from 'react';
import styled from 'styled-components';
import { ArrayContext } from '../../context/ArrayContext';
import ArrayBar from '../ArrayBar/ArrayBar';

export default function ArrayContainer() {
	const { array } = useContext(ArrayContext);

	return (
		<Container>
			{array.map((value, index) => (
				<ArrayBar height={value} key={value.toString() + index} />
			))}
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	justify-content: center;
	max-width: 96vw;
	align-items: flex-end;
	gap: 3px;
	padding: 0 1vw;
	overflow: hidden;
`;
