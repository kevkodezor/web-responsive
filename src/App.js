import { useState } from 'react';
import {
	ColumnCenter, ColumnLeft, ColumnRight
} from './component';
import './App.css';

export default function App () {

	const [radius, setRadius] = useState(30);

	const onInput = (e) => {
		const { target: { value } } = e;
		const isNum = Number(value);
		if (isNum === -1 || isNum === 51) return;
		if (value.length === 3) return;
		if (value > 50) {
			setRadius(30);
		}
		setRadius(value);
	}

	return (
		<div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 p-5 min-h-screen'>
			<ColumnLeft />
			<ColumnCenter
				radius={radius} 
			/>
			<ColumnRight
				radiusValue={radius} 
				onChange={onInput}
			/>
		</div>
	);
}

