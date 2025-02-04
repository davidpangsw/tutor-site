"use client";
import { useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  // Check if window is available (to avoid SSR issues)
  const storedValue = typeof window !== 'undefined' ? localStorage.getItem(key) : null;
  
  // Parse the stored value or fallback to the initial value
  const parsedValue: T = storedValue ? JSON.parse(storedValue) : initialValue;

  // State hook to store the value
  const [value, setValue] = useState<T>(parsedValue);

  const setLocalStorageValue = (newValue: T) => {
    setValue(newValue);
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(newValue));
    }
  };

  return [value, setLocalStorageValue];
}
