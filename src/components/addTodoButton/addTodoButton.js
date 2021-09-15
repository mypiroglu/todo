import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './style';
const AddTodoButton = (props) => {
    return(
        <TouchableOpacity
            style={styles.container}
             onPress={()=> {
                 props.setTodoList([...props.todoList,props.todo]);
                 props.todoSet('');
                 props.addTodoFunction;
                }}
            >
            <Text>Add</Text>
        </TouchableOpacity>
    );
}

export default AddTodoButton;