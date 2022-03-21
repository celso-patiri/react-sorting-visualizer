import './ArrayBar.scss';

type arrayBarProps = { height: number };

export default function ArrayBar({ height }: arrayBarProps) {
	return <div className="array-bar" style={{ height: `${height}px` }}></div>;
}
