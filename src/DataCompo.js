import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const DataCompo = ({navigation}) => {
  const [data, setData] = useState('');
  const [isloading, setIsloading] = useState(true);
  const [errors, setErrors] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          setData(response.data);
        })
        .catch(error => console.error(error));
      setIsloading(false);
    };

    fetchData();
  }, []);

  const renderItem = ({item}) => {
    return (
      <View
        style={[styles.container, {backgroundColor: 'grey', borderRadius: 20}]}>
        <Text style={styles.title}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '700',
              fontStyle: 'italic',
              textDecorationLine: 'underline',
            }}>
            Title:
          </Text>{' '}
          {item.title}
        </Text>
        <Text style={styles.body}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '700',
              fontStyle: 'italic',
              textDecorationLine: 'underline',
            }}>
            Description :
          </Text>{' '}
          {item.body}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <FlatList data={data} renderItem={renderItem} />
      </ScrollView>
      <View style={styles.data}>
        <Text style={{textAlign:"center", color:"white", fontSize:19, padding:7}} 
        onPress={() => navigation.navigate('AddData')}>Add Data</Text>
      </View>
    </SafeAreaView>
  );
};

export default DataCompo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  title: {
    backgroundColor: 'yellow',
    padding: 8,
  },
  body: {
    padding: 8,
  },
  data: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: "purple",
    width:100,
    height:40,
    borderRadius:12
    // paddingVertical:9
  },
});
