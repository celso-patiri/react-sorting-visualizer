import { useContext } from 'react';
import styled from 'styled-components';
import { ArrayContext } from '../../context/ArrayContext';

export default function Sidebar() {
	const { randomizeArray } = useContext(ArrayContext);

	return (
		<Aside>
			<button onClick={randomizeArray}>Shuffle</button>
		</Aside>
	);
}

const Aside = styled.aside`
	width: 4vw;
	background-color: rgb(151, 151, 151);
	border: 1px solid #888888;
`;
