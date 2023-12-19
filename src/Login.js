import {
  Alert,
  Button,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const [email, setEmail] = useState(['']);
  const [password, setPassword] = useState(['']);

  const saveValue = () => {
      if(!email){
          Alert("Please enter your Email address")
          return;
      }
    
      if(!password){
          Alert("Please enter your Password")
          return;
      }
      AsyncStorage.setItem({email: email, password: password});
      Alert('Data Saved');
      ResetData();
  };


  const ResetData = () => {
    setEmail('');
    setPassword('');
  };



  return (
    <SafeAreaView >
      <KeyboardAvoidingView >
        <View>
          <Text>Login in your account</Text>
        </View>
        <View>
          <Text>Email :</Text>
          <TextInput
            placeholder="enter your email"
            keyboardType="email-address"
            onChangeText={txt => setEmail(txt)}
          />
        </View>

        <View>
          <Text>Password :</Text>
          <TextInput
            placeholder="**********"
            keyboardType="default"
            secureTextEntry={true}
            onChangeText={pwd => setPassword(pwd)}
          />
        </View>

        <View>
          <TouchableOpacity
            onPress={() => {
              saveValue();
            }}>
            <Text> Login </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
