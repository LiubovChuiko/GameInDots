import React from 'react';
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100
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
        paddingHorizontal: 15,
        paddingVertical: 15,
        margin: 10,
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
        width: 185,
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
        width: 150,
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
        height: 40,
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