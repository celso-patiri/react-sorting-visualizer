import { useContext } from 'react';
import ReactSlider from 'react-slider';
import styled from 'styled-components';
import { ArrayContext } from '../../context/ArrayContext';

import './ArraySlider.css';

export default function ArraySlder() {
	const { handleArraySlide, fixArrayAfterSlide } = useContext(ArrayContext);

	const Thumb: React.FC = (props, state) => (
		<StyledThumb {...props}>{state.valueNow}</StyledThumb>
	);

	const Track: React.FC = (props, state) => <StyledTrack {...props} />;

	return (
		<ReactSlider
			className="horizontal-slider"
			defaultValue={100}
			onChange={handleArraySlide}
			onAfterChange={fixArrayAfterSlide}
			min={5}
			max={200}
			renderThumb={Thumb}
			renderTrack={Track}
		/>
	);
}

const StyledThumb = styled.div`
	height: 25px;
	line-height: 25px;
	width: 25px;
	text-align: center;
	background-color: #000;
	color: #fff;
	border-radius: 50%;
	cursor: grab;
`;

const StyledTrack = styled.div`
	top: 0;
	bottom: 0;
	height: 1vh;
	background: blue;
	border-radius: 999px;
`;
