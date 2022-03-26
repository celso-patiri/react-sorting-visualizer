import ReactSlider from 'react-slider';

import './ArraySlider.scss';

export default function ArraySlder() {
	return (
		<ReactSlider
			className="horizontal-slider"
			thumbClassName="example-thumb"
			trackClassName="example-track"
			defaultValue={50}
			onChange={handleChange}
			min={5}
			max={100}
		/>
	);

	function handleChange(value: number) {
		console.log(value);
	}
}
