import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import GameButton from "./Button";



export default class GameBoard extends Component {


    static propTypes = {
        data: PropTypes.array,
        label: PropTypes.string,
        input: PropTypes.shape({
            onChange: PropTypes.func,
            value: PropTypes.string,
        }),
        withDataLabel: PropTypes.bool,
    };

    static defaultProps = {
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        label: 'Data Label',
        withDataLabel: true,
        disabled: false,
    };

    constructor(props) {
        super(props);
        this.isReduxForm = !!props.input;
    };

    toggleSwitchValue = (value) => {
        const { input: { onChange } } = this.props;
        onChange(value);
    };



    render() {
            const { initial,
                data, label, input: { value }, meta: { error, touched, valid },
                withDataLabel,
            } = this.props;

    return (
        <View style={styles.container}>
            <Text>Game Board will be here</Text>



        <View style={[styles.container, withDataLabel && { flexDirection: 'row' }]}>
            {data.map((specs, index) => (
                <View key={index} style={{ flexDirection: 'row' }}>
                    <GameButton
                        plain
                        onClick={() => this.toggleSwitchValue(specs)}
                        initial={value === specs}
                        label={data[index]}
                    />
                </View>
            ))}
        </View>
        </View>


    );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});