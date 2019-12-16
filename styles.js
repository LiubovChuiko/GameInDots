import React from 'react';
import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get('window').width);

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    row: {
        flexDirection: 'row',
        margin: 0,
    },
    score_text: {
        fontSize: 20,

    },
    picker: {
        alignSelf: 'stretch',
        backgroundColor: 'white',
        paddingHorizontal: (Platform.OS === 'ios') ? 15 : 0,
        paddingVertical: (Platform.OS === 'ios') ? 15 : 0,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#666',
        borderRadius: 5,
    },
    pickerText: {
        color: '#666',
    },
    inputView: {
        margin: 10,
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'flex-start',
    },
    textinput: {
        paddingHorizontal: 20,
        width: screenWidth * 0.5,
        height: 40,
        borderWidth: 1,
        borderColor: '#666',
        borderRadius: 5,
    },
    inputButton: {
        marginLeft: 15,
        paddingTop: 5,
        backgroundColor: '#2089dc',
        height: 40,
        width: screenWidth * 0.4,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        paddingLeft: 15,
    },
    msgView: {
        top: 5,
        height: (Platform.OS === 'ios') ? 40 : 30,
    },
    boardView: {
        marginTop: 5,
        marginBottom: 5,
    },
    leaderBoard: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'flex-start',
        margin: 5,
        height: 40,
        backgroundColor: '#d0f0c0',
        borderRadius: 5,
    },
    boardViewTxt1: {
        width: '40%',
        padding: 10,
        fontWeight: 'bold',
        fontSize: 14,
        opacity: 1,
        color: '#228B22',
    },
    boardViewTxt2: {
        padding: 10,
        fontSize: 12,
        alignItems: 'flex-end',
        opacity: 1,
        color: '#228B22',
    },
});