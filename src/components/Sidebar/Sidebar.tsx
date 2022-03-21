import { useContext } from 'react';
import { ArrayContext } from '../../context/ArrayContext';
import './Sidebar.scss';

export default function Sidebar() {
	const { array, changeArray } = useContext(ArrayContext);

	return (
		<aside>
			<button onClick={() => changeArray([...array, 1])}>add</button>
		</aside>
	);
}
