import { useContext } from 'react';
import { ArrayContext } from '../../context/ArrayContext';
import './Sidebar.scss';

export default function Sidebar() {
	const { array, setArray } = useContext(ArrayContext);

	return (
		<aside>
			<button onClick={() => setArray([...array, 1])}>add</button>
		</aside>
	);
}
