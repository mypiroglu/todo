import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';

const AddTodo = (props) => {
    return(
        <View style={styles.container}> 
            <TextInput 
                value={props.todo} 
                onChangeText={(item)=>{
                    props.todoSet(item)
                }} 
                 style={styles.input} 
                />
        </View>
    );
}

export default AddTodo;