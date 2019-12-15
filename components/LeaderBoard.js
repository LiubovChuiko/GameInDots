import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';

export default class LeaderBoard extends React.Component {
    constructor(props) {
        super(props);
    }

    createLeaderBoard() {
        let list = [];
        const usersboard = this.props.users.reverse();
        {usersboard.map((users, key) => {
                if (key < 3) {
                    list.push(<View key={key} style={styles.leaderBoard}>
                        <Text style={styles.boardViewTxt1}>{users.winner}</Text>
                        <Text style={styles.boardViewTxt2}>{users.date}</Text>
                    </View>)
                }
            }
        )};
        return list;
    };

    render()
    {

        return (

            <View style={styles.boardView}>

                {
                    this.createLeaderBoard()
                }
            </View>


        )}

}