import React, { createContext, useEffect, useState } from 'react';

interface IArrayContext {
	array: number[];
	changeArray: (array: number[]) => void;
	doSwap: (i: number, j: number) => void;
	randomizeArray: () => void;
}

export const ArrayContext = createContext<IArrayContext>({
	array: [],
	changeArray: () => true,
	doSwap: () => true,
	randomizeArray: () => true,
});

export const ArrayContextProvider: React.FC = ({ children }) => {
	const [array, setArray] = useState([] as number[]);

	useEffect(() => {
		randomizeArray();
	}, []);

	function changeArray(newArray: number[]) {
		setArray(newArray);
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
		<ArrayContext.Provider value={{ array, changeArray, doSwap, randomizeArray }}>
			{children}
		</ArrayContext.Provider>
	);
};

function randomNumber() {
	const min = Math.ceil(5);
	const max = Math.floor(500);
	return Math.floor(Math.random() * (max - min) + min);
}
