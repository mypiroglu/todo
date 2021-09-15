import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CheckBox from '@react-native-community/checkbox';
import { ActivityIndicator, Alert, View,Text, TouchableOpacity, FlatList } from 'react-native';
import styles from '../components/listTodo/styles';
import addTodo from '../components/addTodo';
const FetchData = (props) => {
    const ListURL = 'https://development.pigasoft.com/api/v1/todoList';
    const UpdateURL= 'https://development.pigasoft.com/api/v1/updateTodo';
    const AddURL='https://development.pigasoft.com/api/v1/addTodo';
    const DeleteURL='https://development.pigasoft.com/api/v1/deleteTodo';
    const [Loading, setLoading] = useState(true)
    const [Data, setData] = useState([])
    const Connection = () =>{
        axios.get(ListURL)
        .then(e =>{
            setLoading(false)
            setData(e.data.data)
        })
        .catch(err =>Alert.alert(err))
    }
    useEffect(() =>{
        Connection();
        },[]    
        );
        const UpdateTodo = (item,id) => {
            const param = new URLSearchParams()
        param.append('id',item.id)
        param.append('isDone',item.isDone == 0 ? 1:0)
        axios.post(UpdateURL,param)
        .then(async(res)=>{
            await Connection();
        })
        .catch(err=>alert("Todos",err))
    }
    const AddTodoDB = (item,id) => {
        const param = new URLSearchParams()
        param.append('title',props.todo)
        axios.post(AddURL,param)
        .then(async(res)=>{
            await Connection();
        })
        .catch(err=>alert(err))
    }
    const DeleteTodo = (item) => {
        const param = new URLSearchParams()
        param.append('id',item.id)
        axios.post(DeleteURL,param)
        .then(async (res)=>{
            await Connection();
        })
        .catch(err => alert(err))
    }
    const renderItem = (item,) => {
        return (
            <TouchableOpacity style={styles.todos}
            onPress={() => UpdateTodo(item,item.id) }
            >
                <CheckBox
                value={item.isDone === '1' ? true:false}
                onValueChange={() => UpdateTodo(item) }
                />
                <Text
                    style={{textDecorationLine: item.isDone==='1' ? 'line-through' : 'none'}}
                    >
                    {item.id}:{item.title} : {item.isDone}
                </Text>
            </TouchableOpacity>
        );
    }
    // props.setAddTodoFunction(()=> AddTodoDB())
    return (
        <View>
            {
                Loading ? (
                    <ActivityIndicator size='large' color='#eceff1'/>
                    ):(
                        
                        <FlatList
                            data={Data}
                            renderItem={({ item, index }) => renderItem(item)}
                            keyExtractor={(item, index) => index}
                        />
                    ) 
            }
        </View>
    );
}
export default FetchData;