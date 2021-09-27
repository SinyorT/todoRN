import React from 'react';
import { View, Text } from 'react-native'
import styles from './Todo.styles'
const Todo = (props) => { 
    return (
        <View style={props.isCompleted ? styles.containerDelete : styles.container}>
            <Text style={props.isCompleted ? styles.todoDelete : styles.todo}>{props.todo}</Text>
        </View>
    );
}

export default Todo;
