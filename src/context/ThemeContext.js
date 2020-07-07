import React from 'react';

export const themeConfig = {
  light: {
    fontColor: 'black',
    bodyBg: 'white',
  },
  dark: {
    fontColor: 'white',
    bodyBg: 'black',
  },
};

const ThemeContext = React.createContext(themeConfig.light);
export default ThemeContext;
