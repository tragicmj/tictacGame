import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {
  Text,
  Container,
  Content,
  Header,
  Body,
  Card,
  H1,
  H3,
  Title,
  Button
} from "native-base";

import Icons from "./components/Icons";
import Snackbar from "react-native-snackbar";

const itemArray = new Array(9).fill('empty');

const App = ()  => {

  const [isCross,setIsCross] = useState(false);
  const [winMessage,setWinMessage] = useState('');

  const changeItem = (itemNumber) => {
    if(winMessage){
      return Snackbar.show(
        {
          text:winMessage,
          backgroundColor:"#1b1b1b",
          textColor:"#fff"
        }
      )
    }
    
    if(itemArray[itemNumber] === 'empty' ){
      itemArray[itemNumber] = isCross ? 'cross' : 'circle';
      setIsCross(!isCross);
    }
    else{
      return Snackbar.show(
        {
          text:"Position is already filled",
          backgroundColor:"red",
          textColor:"#fff"
        }
      )
    }
    checkIsWinner();
  }

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty", 0, 9);
  }

  const checkIsWinner = () => {
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} wins`);
    } else if (
      itemArray[3] !== "empty" &&
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5]
    ) {
      setWinMessage(`${itemArray[3]} wins`);
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[6]} wins`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[0]} wins`);
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ) {
      setWinMessage(`${itemArray[1]} wins`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[2]} wins`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[0]} wins`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[2]} wins`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[1] !== "empty" &&
      itemArray[2] !== "empty" &&
      itemArray[3] !== "empty" &&
      itemArray[4] !== "empty" &&
      itemArray[5] !== "empty" &&
      itemArray[6] !== "empty" &&
      itemArray[7] !== "empty" &&
      itemArray[8] !== "empty"
    ) {
      setWinMessage("It's a draw");
    }
  }

  return (
      <SafeAreaView style={{flex:1}}>
        <StatusBar backgroundColor="#fff" />
        <Container style={{backgroundColor:"#333945",padding:5}}>
          <Header>
            <Body>
                <Title>
                  Tic Tac Toe Game
                </Title>
            </Body> 
          </Header>
          <Content>
              <View style={styles.grid}>
                {
                  itemArray.map(
                    (item,index) => (
                      <TouchableOpacity 
                        style={styles.box} 
                        key={index}
                        onPress={()=>changeItem(index)}
                      >
                        <Card style={styles.card}>
                          <Icons name={item} />
                        </Card>
                      </TouchableOpacity>
                    )
                  )
                }
              </View>

              {
                winMessage 
                ? (
                  <View>
                    <H1 style={styles.message}>
                      {
                        winMessage
                      }
                    </H1>
                    <Button
                      onPress={reloadGame}
                      primary
                      block
                      style={{marginTop:15}}
                    >
                      <Text>
                        Reload Game
                      </Text>
                    </Button>
                  </View>
                )
                : (
                  <H3 style={styles.message}>
                    {
                      isCross ? ('Cross') : ('Circle')
                    } turn
                  </H3>
                )
              }

          </Content>
        </Container>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  grid:{
    flex:1,
    flexDirection:'row',
    flexWrap:"wrap",
    justifyContent:'space-between',
    marginTop:20,
    paddingHorizontal:5
  },
  box:{
    width:'32%',
    marginBottom:3,
  },
  card:{
    height:100,
    justifyContent:'center',
    alignItems:'center',
  },
  message:{
    textAlign:'center',
    textTransform:'uppercase',
    color:'#fff',
    marginTop:20,
    backgroundColor:'#4652B3',
    paddingVertical:10
  }
});

export default App;
