import React, {useState} from 'react';
import { View, TouchableOpacity } from 'react-native';
import ListTodo from '../listTodo'
import FetchData from '../../database/fetchData'
const ListTodoContainer = (props) => {
    return(
        // <ListTodo todoList={props.todoList}/>
        <FetchData todoList={props.todoList} todo={props.todo} setAddTodoFunction={props.setAddTodoFunction}/>
    );
}

export default ListTodoContainer;