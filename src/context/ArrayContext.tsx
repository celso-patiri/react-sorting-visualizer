import React, { createContext, useState } from 'react';

interface IArrayContext {
	array: number[];
	setArray?: any;
}

type ArrayProviderProps = {
	children: React.ReactNode;
};

export const ArrayContext = createContext<IArrayContext>({ array: [] });

export const ArrayContextProvider = ({ children }: ArrayProviderProps) => {
	const [array, setArray] = useState([1]);

	return <ArrayContext.Provider value={{ array, setArray }}>{children}</ArrayContext.Provider>;
};
