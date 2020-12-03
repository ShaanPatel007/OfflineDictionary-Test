import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import { Header } from 'react-native-elements';
import dictionary from './database'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      definition:[],
      lexicalCategory:[],
      word:[]
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Monkey Chunky',
            style: { color: '#fff', fontSize: 20 },
          }}
        />

        <Image style = {styles.imageIcon}
        source = {{
          uri: 'https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png'
        }}/>

        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            this.setState({ word: dictionary[this.state.text].word });
            this.setState({ lexicalCategory: dictionary[this.state.text].lexicalCategory });
            this.setState({ definition: dictionary[this.state.text].definition });
          }}>
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
        <View> {
          this.state.word.map(item => { 
          return ( 
            <TouchableOpacity style={styles.chunkButton} > 
            <Text style={styles.displayText}>
            {item}
            </Text> 
            </TouchableOpacity> ); 
            })} 
            </View>
            <View> {
          this.state.lexicalCategory.map(item => { 
          return ( 
            <TouchableOpacity style={styles.chunkButton} > 
            <Text style={styles.displayText}>
            {item}
            </Text> 
            </TouchableOpacity> ); 
            })} 
            </View>
            <View> {
          this.state.definition.map(item => { 
          return ( 
            <TouchableOpacity style={styles.chunkButton} > 
            <Text style={styles.displayText}>
            {item}
            </Text> 
            </TouchableOpacity> ); 
            })} 
            </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 200,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  displayText: {
    textAlign: 'center',
    fontSize: 30,
    color: 'red'
  },
  imageIcon: {
    width:100,
    height:100,
    margin: 100

  },
  chunkButton: {
    width: 300,
    height: 30,
    marginRight: 30,
    borderRadius: 50,
    backgroundColor: 'aquamarine'
  }
});
