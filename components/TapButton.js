import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';

export default class TapButton extends React.Component {
  constructor(props){
    super(props);
  }

  buttonTap(){

    if(this.props.id==this.props.activeButton){
      this.props.addTappedButton(this.props.id);
    }
  }

  render()
  {

    return (
      <TouchableOpacity onPress={this.buttonTap.bind(this)}>
        {
          this.props.id == this.props.activeButton &&
          <View style={[styles.tap_button, {backgroundColor: '#2089dc'}]}>
          </View>
        }
        {
          this.props.id != this.props.activeButton &&
          <View style={[styles.tap_button, {backgroundColor: this.props.backgroundColor}]}>
          </View>
        }
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  tap_button: {
    height: 60,
    width: 60,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 0,
    margin: 0,
  },
});
