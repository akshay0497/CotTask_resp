import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AddData = () => {
    const data = {title:"", description:""}
    const[inputdata, setInputdata]=useState(data)

      const handledata=(e)=>{
        setInputdata({...inputdata, [e.target.value]:e.target.value})
      }

      const handlesubmit=()=>{
        axios
        .post('https://jsonplaceholder.typicode.com/posts', inputdata)
        .then(response => 
            console.log(response))

      }
    return (
    <SafeAreaView>
        <KeyboardAvoidingView>
            <View>
                <View>
                    <Text>Title :</Text>
                    <TextInput placeholder='enter title' name='title' value={inputdata.title} onChangeText={handledata}/>
                </View>
            
                <View>
                    <Text>Description :</Text>
                    <TextInput placeholder='enter description' name='description' value={inputdata.description} onChangeText={handledata}/>
                </View>

                <View>
                    <Text onPress={handlesubmit}>Add Data</Text>
                </View>
            </View>
        </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default AddData

const styles = StyleSheet.create({})