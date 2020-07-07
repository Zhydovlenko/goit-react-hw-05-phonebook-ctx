import React, { Component } from 'react';
import styles from './Toggler.module.css';
import withTheme from '../../hoc/withTheme';

class Toggler extends Component {
  render() {
    const { theme } = this.props;
    return (
      <div
        style={{
          background: theme.config.bodyBg,
          color: theme.config.fontColor,
        }}
        className={styles.themeSelector}
      >
        <span className={styles.label}></span>
        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={theme.type === 'light'}
            onChange={event =>
              this.props.toggleTheme(event.currentTarget.value)
            }
          />
          <span className={styles.slider}></span>
        </label>
      </div>
    );
  }
}

export default withTheme(Toggler);
