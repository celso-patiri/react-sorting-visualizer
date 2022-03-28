import styled from 'styled-components';

type arrayBarProps = { height: number };

export default function ArrayBar({ height }: arrayBarProps) {
	return <Bar style={{ height: `${height}px` }}></Bar>;
}

const Bar = styled.div`
	width: 5px;
	background-color: turquoise;

	animation: slidein 300ms ease-in;

	@keyframes slidein {
		from {
			transform: translateY(60%);
		}

		to {
			transform: translateY(0);
		}
	
`;
