import React, { createContext, useEffect, useState } from 'react';

interface IArrayContext {
	array: number[];
	changeArray: (array: number[]) => void;
	doSwap: (i: number, j: number) => void;
	randomizeArray: () => void;
	handleArraySlide: (value: number) => void;
	fixArrayAfterSlide: (value: number) => void;
}

export const ArrayContext = createContext<IArrayContext>({
	array: [],
	changeArray: () => true,
	doSwap: () => true,
	randomizeArray: () => true,
	handleArraySlide: () => true,
	fixArrayAfterSlide: () => true,
});

const timer = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const ArrayContextProvider: React.FC = ({ children }) => {
	const [array, setArray] = useState([] as number[]);

	useEffect(() => {
		const newArray = [] as number[];
		for (let i = 0; i < 100; i++) newArray.push(randomNumber());
		setArray(newArray);
	}, []);

	function changeArray(newArray: number[]) {
		setArray(newArray);
	}

	function handleArraySlide(value: number) {
		if (value > array.length) {
			array.push(randomNumber());
		} else {
			array.pop();
		}
		setArray([...array]);
	}

	async function fixArrayAfterSlide(value: number) {
		if (value > array.length) {
			for (let i = array.length; i < value; i++) {
				array.push(randomNumber());
				setArray([...array]);
				await timer(10);
			}
		}

		if (value < array.length) {
			for (let i = array.length; i > value; i--) {
				array.pop();
				setArray([...array]);
				await timer(10);
			}
		}
	}

	function doSwap(i: number, j: number) {
		const aux = array[i];
		array[i] = array[j];
		array[j] = aux;
		setArray([...array]);
	}

	function randomizeArray() {
		const newArray = [] as number[];
		const newLength = array.length > 0 ? array.length : 100;

		for (let i = 0; i < newLength; i++) newArray.push(randomNumber());

		setArray(newArray);
	}

	return (
		<ArrayContext.Provider
			value={{
				array,
				changeArray,
				doSwap,
				randomizeArray,
				handleArraySlide,
				fixArrayAfterSlide,
			}}
		>
			{children}
		</ArrayContext.Provider>
	);
};

function randomNumber() {
	const min = Math.ceil(5);
	const max = Math.floor(500);
	return Math.floor(Math.random() * (max - min) + min);
}
