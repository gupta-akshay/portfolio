import { createContext } from 'react';

type contextType = {
  height: string | number;
};

const ThemeContext = createContext<contextType | null>(null);

export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;

export default ThemeContext;
