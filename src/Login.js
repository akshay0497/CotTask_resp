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

const Login = ({navigation}) => {
  const [email, setEmail] = useState(['']);
  const [password, setPassword] = useState(['']);

  const userdetails = {
    email: email,
    password: password,
  };
  console.log('userdetails ======>', userdetails);

  const saveValue = async () => {
    if (!email) {
      Alert.alert('Please enter your Email address');
      return;
    }

    if (!password) {
      alert('Please enter your Password');
      return;
    }

    try {
      await AsyncStorage.setItem('userdetails', JSON.stringify(userdetails));
      console.log('userdetails inside---------', userdetails);
      Alert.alert(
        'Success',
        'You are Registered Successfully',
        [
          {
            text: 'Ok',
            onPress: () => navigation.navigate('DataCompo'),
          },
        ],
        { cancelable: false }
      );

      const jsonValue = await AsyncStorage.getItem('userdetails');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView>
        <View style={{
          alignItems:"center",
          justifyContent:"center",
          marginVertical:20
        }}>
          <View>
          <View style={{marginv:10}}>
            <Text style={{fontSize:20, fontStyle:"italic", }}>Login in your account</Text>
          </View>
          <View style={{marginVertical:10, flexDirection:"row", alignItems:"center",}}>
            <Text>Email :</Text>
            <TextInput
              placeholder="enter your email"
              keyboardType="email-address"
              onChangeText={email => setEmail(email)}
              style={{borderWidth:0.5, padding:2, borderRadius:10, width:200}}
            />
          </View>

          <View style={{marginVertical:10, flexDirection:"row", alignItems:"center",}}>
            <Text>Password :</Text>
            <TextInput
              placeholder="**********"
              keyboardType="default"
              secureTextEntry={true}
              onChangeText={password => setPassword(password)}
              style={{borderWidth:0.5, padding:2, borderRadius:10, width:200}}
            />
          </View>

          <View>
            <TouchableOpacity
              onPress={() => {
                saveValue();
                // navigation.navigate('DataCompo');
                // title = 'API Data';
              }}>
              <Text style={{fontSize:18, color:"white", backgroundColor: "blue", width:80, textAlign:"center", height:25, borderRadius:12}}> Login </Text>
            </TouchableOpacity>
          </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
