
import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native'
import Todo from './components/Todo'

var data = [];
function App() {
  const [text, setText] = useState('');
  const [list, setList] = useState(data);
  const [count, setCount] = useState(data.length);



  const onPress = () => {
    var todo = {
      id: data.length === 0 ? 0 : Math.max.apply(null, data.map(item => item.id)) + 1,
      text: text,
      isCompleted: false
    }
    data.push(todo);
    setList(data);
    setCount(count + 1)
    setText('')
  }
  const onPressCompleted = (id) => {
    var index = data.findIndex((obj => obj.id == id));
    var cdata = data[index];
    cdata.isCompleted = true;
    console.log(data)
    setList(data);
    count === 0 ? setCount(0) : setCount(count - 1)
  }

  const renderItem = ({ item }) => {
    return (<TouchableOpacity onPress={() => onPressCompleted(item.id)}>
      <Todo todo={item.text} isCompleted={item.isCompleted} />
    </TouchableOpacity>)
  }



  return (
    <SafeAreaView style={styles.headerContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>Yapilacaklar</Text>
        <Text style={styles.count}>{count}</Text>
      </View>

      <FlatList
        data={list}
        renderItem={renderItem}
      />
      <View style={styles.bottom_container}>
        <TextInput
          style={styles.bottom_input}
          value={text}
          onChangeText={setText}
          placeholder="Yapilacak..." />
        <TouchableOpacity
          onPress={onPress}
          style={styles.button}
        >
          <Text style={styles.buttonText} >Kaydet</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    backgroundColor: 'grey',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  },
  title: {
    color: 'orange',
    fontSize: 20,
    fontWeight: 'bold'
  },
  count: {
    color: 'orange',
    fontSize: 20
  },
  bottom_container: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#336699',
  },
  bottom_input: {
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 1,
    borderColor: '#e5e5e5'
  },
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 10
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center'
  }

});

export default App;
