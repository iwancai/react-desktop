import React, { Component } from 'react';
import { TitleBar, View } from 'react-desktop/windows';

export default class extends Component {
  static defaultProps = {
    color: '#cc7f29',
    theme: 'light'
  };

  constructor(props) {
    super(props);
    this.state = { isMaximized: true };
  }

  close = () => console.log('close');
  minimize = () => console.log('minimize');
  toggleMaximize = () => this.setState({ isMaximized: !this.state.isMaximized });

  render() {
    return (
      <View width="100%" color={this.props.color}>
        <TitleBar
          title="My Windows Application"
          controls
          isMaximized={this.state.isMaximized}
          theme={this.props.theme}
          background
          onCloseClick={this.close}
          onMinimizeClick={this.minimize}
          onMaximizeClick={this.toggleMaximize}
          onRestoreDownClick={this.toggleMaximize}
        />
      </View>
    );
  }
}
