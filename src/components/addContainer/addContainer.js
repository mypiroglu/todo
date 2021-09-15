import React from 'react';
import { View, Text } from 'react-native';
import AddTodo from '../addTodo';
import styles from './styles';
import AddTodoButton from '../addTodoButton';

const AddContainer = (props) => {
    return(
        <View style={styles.container}>
            <AddTodo todo={props.todo} todoSet={props.todoSet}/>
            <AddTodoButton todo={props.todo} todoList={props.todoList} setTodoList={props.setTodoList} todoSet={props.todoSet} addTodoFunction={props.addTodoFuncction}/>
        </View>
    );
}
export default AddContainer;