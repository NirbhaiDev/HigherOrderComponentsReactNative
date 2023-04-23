import React, {Component} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Dimensions
} from 'react-native';
import * as images from 'src/images';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round((dimensions.width * 9) / 16);
const imageWidth = dimensions.width;

export default class Login extends Component {
  state = {
    logging: false,
  };
  async callLoginAPI() {
    this.setState({logging: true});
    await new Promise(resolve => {
      setTimeout(resolve, 2000);
    });
    alert('SIGN IN success');
    this.setState({logging: false});
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image
            resizeMode="contain"
            style={[
              {
                height: imageHeight,
                width: imageWidth,
              },
            ]}
            source={images.gembul}
          />
          
        </View>
        <View>
          <TextInput
            placeholder="Username"
            style={[styles.textInput, {marginTop: 40}]}
          />
          <TextInput
            placeholder="Password"
            style={[styles.textInput, {marginVertical: 20}]}
          />

          <TouchableOpacity
            onPress={() => {
              this.callLoginAPI();
            }}
            style={[styles.button]}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: '600'}}>
              SIGN IN
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              height: 40,
              justifyContent: 'center',
              marginBottom: 20,
            }}>
            <Text style={{color: '#BDC3C6', fontSize: 15}}>Need Help?</Text>
          </TouchableOpacity>
          <Text style={{alignSelf: 'center', color: '#A6A8A9', fontSize: 15}}>
            Don’t have an account yet ?
          </Text>
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              height: 34,
              justifyContent: 'center',
            }}>
            <Text style={{color: '#0D92CA', fontSize: 15}}>
              Create an account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 26,
    paddingTop: 26,
    paddingBottom: 18,
  },
  logo: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  textInput: {
    height: 60,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#ECF0F3',
    paddingHorizontal: 19,
  },
  button: {
    height: 60,
    borderRadius: 3,
    backgroundColor: '#11B8FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    alignItems: 'center',
  },
});
