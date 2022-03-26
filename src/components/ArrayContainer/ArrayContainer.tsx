import { useContext } from 'react';
import { ArrayContext } from '../../context/ArrayContext';
import ArrayBar from './ArrayBar';
import './ArrayContainer.scss';

export default function ArrayContainer() {
	const { array } = useContext(ArrayContext);

	return (
		<div className="array-container">
			{array.map((value, index) => (
				<ArrayBar height={value} key={value.toString() + index} />
			))}
		</div>
	);
}
