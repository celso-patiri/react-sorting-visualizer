import { useContext } from 'react';
import { ArrayContext } from '../../context/ArrayContext';
import './Sidebar.scss';

export default function Sidebar() {
	const { randomizeArray } = useContext(ArrayContext);

	return (
		<aside>
			<button onClick={randomizeArray}>Shuffle</button>
		</aside>
	);
}
