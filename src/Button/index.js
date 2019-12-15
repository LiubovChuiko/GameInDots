import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';


class GameButton extends Component {
  static propTypes = {
    label: PropTypes.string,
    size: PropTypes.number,
    disabled: PropTypes.bool,
    color: PropTypes.string,
    input: PropTypes.object,
    initial: PropTypes.bool,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    size: 30,
    disabled: false,
    color: 'grey',
  }

  constructor(props) {
    super(props);
    this.isReduxForm = !!props.input;
  }

  changeMarked = () => {
    const { onClick } = this.props;
    if (this.isReduxForm) {
      const { input: { onChange, value } } = this.props;
      onChange(!value);
    } else if (typeof onClick === 'function') {
      onClick();
    }
  }

  render() {
    const {
      label, size, color, disabled, initial, input,
    } = this.props;
    const marked = this.isReduxForm ? input.value : initial;
    return (
      <TouchableOpacity onPress={this.changeMarked} style={[styles.button, {backgroundColor: marked ? '#2089dc' : "#fff"}]}>
          <Text style={[styles.label, {color: marked ? "#fff" : "#666"}]}>{label}</Text>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 5,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    padding: 10,
    fontSize: 14,
  },
});

export default GameButton;
