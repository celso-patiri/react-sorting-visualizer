import React, { createContext, useState } from 'react';

interface IArrayContext {
	array: number[];
	changeArray: (array: number[]) => void;
	swap: (i: number, j: number) => void;
}

export const ArrayContext = createContext<IArrayContext>({
	array: [],
	changeArray: () => {},
	swap: () => {},
});

export const ArrayContextProvider: React.FC = ({ children }) => {
	const [array, setArray] = useState([] as number[]);

	function changeArray(newArray: number[]) {
		setArray(newArray);
	}

	function swap(i: number, j: number) {
		const aux = array[i];
		array[i] = array[j];
		array[j] = aux;
		setArray([...array]);
	}

	return (
		<ArrayContext.Provider value={{ array, changeArray, swap }}>
			{children}
		</ArrayContext.Provider>
	);
};
