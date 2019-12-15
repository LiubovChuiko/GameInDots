import React from 'react';
import { Button, TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native';
import { Picker } from 'react-native-picker-dropdown';
import moment from 'moment';
import axios from 'axios';
import TapButton from './components/TapButton';
import LevelConstants from "./components/LevelConstants";
import LeaderBoard from "./components/LeaderBoard";
import styles from './styles';

export default class App extends React.Component {

  state = {
    pressButtonTxt: 'Play',
    level: 'low',
    users: [],
    score: 0,
    playeduntapped: 0,
    playedButtons: [],
    tappedButtons: [],
    gamePlaying: false,
    interval: ''
  }

  constructor(props){
    super(props);
    this.addTappedButton = this.addTappedButton.bind(this);
    this.onValueChange = this.handleValueChange.bind(this);
    this.gameOver = this.gameOver.bind(this);
    this.setState({pressButtonTxt: 'Play'});
  }

  handleValueChange(level) {
    this.setState({ level: level });
  };

  addTappedButton = (item) => {
    if(this.state.gamePlaying==true){
      this.state.tappedButtons.push(item);
    }
  };

  checkScore() {
    if(this.state.gamePlaying==true){
      let tapped = this.state.tappedButtons.length;
      let played = this.state.playedButtons.length;
      let playeduntapped = played - tapped;
      this.setState({score: tapped});
      this.setState({playeduntapped: playeduntapped-1});
      if(playeduntapped>13){
        let winner = "Computer";
        this.gameOver(winner);
      }
      if(tapped>=13){
        let winner = "User " + this.state.username;
        this.gameOver(winner);
      }
    }
  };

  gameOver(winner){
    let endtime = new Date();
    endtime = moment(endtime).format('MMMM Do YYYY, hh:mm:ss');
    let userData = {winner: winner, date: endtime};
    this.state.users.push(userData);
    axios.post('https://starnavi-react-native-test-tas.herokuapp.com/winners', userData)
        .then((res) => {
          console.log('request is ok');
        })
        .catch((err) => {
          console.log(err);
        })
    clearInterval(this.state.interval);
    this.setState({
      gamePlaying: false,
      defBG: 'white',
      pressButtonTxt: 'Play again',
    })
  };

  SetNewActiveButton() {
    const generateRandom = () => {
      const rndNum = (Math.floor((Math.random() * LevelConstants.tapButtonsCount)));
      const exclude = this.state.playedButtons.find((element) => element === rndNum);
      if (rndNum === exclude) {
        return generateRandom();
      } else {
        return rndNum;
      }
    };
    let activeBut = generateRandom();
    this.setState({activeButton: activeBut});
    this.state.playedButtons.push(activeBut);
  };

  startGame(){
    let tmeout = 0;
    if(this.state.level=='low' || this.state.level=='extra'){
      tmeout = LevelConstants.Timeout1;
    }
    if(this.state.level=='high'){
      tmeout = LevelConstants.Timeout2;
    }

    let interval = setInterval(()=>{
      this.SetNewActiveButton(); this.checkScore();
    }, tmeout)

    this.setState({
      gamePlaying: true,
      score: 0,
      activeButton: LevelConstants.tapButtonsCount + 10,
      playeduntapped: 0,
      playedButtons: [],
      tappedButtons: [],
      interval: interval
    });
  };

  checkColor = (val) => {
    let bgColor = '';
    const played = this.state.playedButtons.find((element) => element === val);
    const tapped = this.state.tappedButtons.find((element) => element === val);
    let defColor = 'white';
    if(this.state.level=='low' || this.state.level=='high'){
      defColor = LevelConstants.Color1;
    }
    if(this.state.level=='extra'){
      defColor = LevelConstants.Color2[Math.floor(Math.random()*LevelConstants.Color2.length)];
    }

    if(val == played && val == tapped){
      bgColor = '#228B22';
    } else if(val == played){
      bgColor = 'red';
    } else {
      bgColor = defColor;
    }
    return bgColor;
  };

  createTaps = () => {
    let table = [];
    let count = 0;
    let brgColor = '';
    for (let i = 1; i <= 5; i++) {
      let children = []
      for (let j = 1; j <= 5; j++) {
        brgColor = this.checkColor(count);
        children.push(<TapButton addTappedButton={this.addTappedButton} key={count} id={count} activeButton={this.state.activeButton} backgroundColor={brgColor}/>)
        count += 1;
      }
      table.push(<View key={i} style={styles.row}>{children}</View>)
    }
    return table;
  };


  render() {
    return (
        <View style={styles.container}>

          <Picker
                selectedValue={this.state.level}
                onValueChange={this.onValueChange}
                style={styles.picker}
                textStyle={styles.pickerText}
                cancel
            >
              <Picker.Item label="Pick game mode (defined: low)" value="low" />
              <Picker.Item label="High" value="high" />
              <Picker.Item label="Extra" value="extra" />
            </Picker>

          <View style={styles.inputView}>

            <TextInput placeholder="Enter your name" placeholderTextColor={'#666'} style={styles.textinput} onChangeText={(text) => this.setState({username: text})} value={this.state.username} />
            {
              !this.state.gamePlaying &&
              <TouchableOpacity style={styles.inputButton} onPress={this.startGame.bind(this)}>
                <Text style={styles.buttonText}>{this.state.pressButtonTxt}</Text>
              </TouchableOpacity>
            }
          </View>

          <View style={styles.msgView}><Text style={styles.score_text}>Score: {this.state.score} - {this.state.playeduntapped}</Text></View>

          <View style={styles.boardView}>
            {
              this.createTaps()
            }
          </View>

          <View style={styles.msgView}><Text style={styles.score_text}>Leader Board</Text></View>
          <LeaderBoard users={this.state.users} />

        </View>
    );
  };
};

