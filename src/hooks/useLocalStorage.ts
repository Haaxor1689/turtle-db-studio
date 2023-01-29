import { useEffect, useState } from 'react';

const getValue = (key: string) => {
	const val = localStorage.getItem(key);
	return val ? JSON.parse(val) : undefined;
};

const useLocalStorage = <T = string>(key: string, initialValue?: T) => {
	const [value, setValue] = useState(initialValue);

	// Register `storage` listener that updates the state
	useEffect(() => {
		const updateState = () => setValue(getValue(key));
		updateState();
		addEventListener('storage', updateState);
		return () => {
			removeEventListener('storage', updateState);
		};
	}, []);

	return [
		value,
		// Inside setter, instead of directly setting react state, change the value in localStorage and dispatch an event
		(newVal: T | undefined) => {
			newVal !== undefined
				? localStorage.setItem(key, JSON.stringify(newVal))
				: localStorage.removeItem(key);
			dispatchEvent(new Event('storage'));
		}
	] as const;
};

export default useLocalStorage;
