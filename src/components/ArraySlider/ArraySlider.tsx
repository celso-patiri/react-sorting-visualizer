import ReactSlider from 'react-slider';

import './ArraySlider.scss';

export default function ArraySlder() {
	return (
		<ReactSlider
			className="horizontal-slider"
			thumbClassName="example-thumb"
			trackClassName="example-track"
			defaultValue={50}
			min={5}
			max={100}
		/>
	);
}
