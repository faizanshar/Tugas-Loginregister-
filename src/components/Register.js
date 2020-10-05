import React, {Component} from 'react';
import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import {styles} from './styleregister';
export default class Register extends Component {
  render() {
    return (
      <View style={styles.view1}>
        <View style={styles.view2}>
          <View style={styles.view4}>
            <Text style={styles.register}>REGISTER</Text>
            <View style={styles.view3}>
              <Text style={styles.name}>Name</Text>
              <TextInput style={styles.textinput1} placeholder={'  name'} />
            </View>
            <View>
              <Text style={styles.username}>Email</Text>
              <TextInput style={styles.textinput1} placeholder={'  email'} />
            </View>
            <View>
              <Text style={styles.username}>Username</Text>
              <TextInput style={styles.textinput1} placeholder={'  username'} />
            </View>
            <View>
              <Text style={styles.password}>Password</Text>
              <TextInput style={styles.textinput1} placeholder={'  password'} />
            </View>
            <View>
              <Text style={styles.password}>Password Confirm</Text>
              <TextInput style={styles.textinput1} placeholder={'  password'} />
            </View>
            <TouchableOpacity
              style={styles.button1}
              onPress={() => alert('Selamat anda sudah terdaftar')}>
              <Text style={styles.login}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.view5}>
            <Text>Not registered?</Text>
            <TouchableOpacity onPress={() => alert('Daftar yuk!')}>
              <Text style={styles.textinput2}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
