import React, { Component } from 'react';

import Content from '../Content/Content';
import Toggler from '../Toggler/Toggler';
import ThemeContext from '../../context/ThemeContext';
import { themeConfig } from '../../context/ThemeContext';

import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    theme: 'light',
  };
  toggleTheme = this.toggleTheme.bind(this);

  toggleTheme(newTheme) {
    this.setState({
      theme: this.state.theme === 'dark' ? 'light' : 'dark',
    });
  }

  render() {
    return (
      <ThemeContext.Provider
        value={{
          type: this.state.theme,
          config: themeConfig[this.state.theme],
        }}
      >
        <Toggler toggleTheme={this.toggleTheme} />
        <Content />
      </ThemeContext.Provider>
    );
  }
}

export default App;
