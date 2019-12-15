import React from 'react';
import { Button, TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import TapButton from './TapButton';

const TapBoard= ({
                     data,
                     activeButton,
                     increaseMiss,
                     increaseScore,
                     playedButtons,
                     tappedButtons,
                     onPress,
                 }) => {

    return (
        <View>
            {data.map((item, key) => {
                return (
                    <TouchableOpacity
                        key={key}
                        id={key}
                        activeButton={activeButton}
                        style={styles.tap_button}
                    >
                        <View>{item} {activeButton}</View>
                    </TouchableOpacity>
                )
            })}
        </View>
    )

}

module.exports = {
    TapBoard: TapBoard
}

const styles = StyleSheet.create({
    tap_button: {
        height: 70,
        width: 70,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 0,
        margin: 0,
    },
});