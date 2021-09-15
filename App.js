import React, {useState} from 'react';
import { View } from 'react-native';
import AddContainer from './src/components/addContainer';
import Footer from './src/components/footer';
import Header from './src/components/header';
import ListTodoContainer from './src/components/listTodoContainer';
const App = () => {
  const [TodoText, setTodoText] = useState("");
  const [TodoList, setTodoList] = useState([]);
  const [AddTodoFunction, setAddTodoFunction] = useState(null)
  return(
    <View>
      <Header name={TodoText}/>
      <AddContainer todo={TodoText} todoSet={setTodoText} todoList={TodoList} setTodoList={setTodoList} addTodoFunction={AddTodoFunction} />
      <ListTodoContainer todoList={TodoList} todo={TodoText} setAddTodoFunction={setAddTodoFunction}/>
      <Footer/>
    </View>
  );
}
export default App;