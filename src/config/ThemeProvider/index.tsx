import colors from '@assets/colors.json';
import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { createContext, useContext, useState, useEffect } from 'react';
import { MantineProvider, createTheme, MantineColorsTuple, MantineTheme } from '@mantine/core';

const ThemeContext = createContext<MantineTheme | null>(null);

export const useTheme = () => useContext(ThemeContext);

const defaultTheme = createTheme({
  colors: {
		'dark': colors.dark as unknown as MantineColorsTuple,
  },
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);

  useEffect(() => {
	  if (location.pathname.startsWith('/admin')) {
	    setCurrentTheme(createTheme({
		  colors: {
		    'dark': colors.admin as unknown as MantineColorsTuple,
		  },
	  }));
	  } else if (location.pathname.startsWith('/x100')) {
	    setCurrentTheme(createTheme({
		  colors: {
		    'dark': colors.x100 as unknown as MantineColorsTuple,
		  },
	  }));
	  } else {
	    setCurrentTheme(defaultTheme);
	  }
  }, [location.pathname]);

  return (
	<ThemeContext.Provider value={currentTheme as MantineTheme}>
	  <MantineProvider theme={currentTheme} forceColorScheme="dark">
		{children}
	  </MantineProvider>
	</ThemeContext.Provider>
  );
};