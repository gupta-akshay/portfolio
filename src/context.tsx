import { createContext } from 'react';
import { ContextInterface } from './types';

const ThemeContext = createContext<ContextInterface>({} as any);

export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;

export default ThemeContext;
