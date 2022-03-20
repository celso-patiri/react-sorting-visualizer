import { useContext } from 'react';
import { ArrayContext } from '../../context/ArrayContext';

import './Main.scss';

export default function Main() {
	const { array } = useContext(ArrayContext);

	return <main>ArrayContainer: {array}</main>;
}
