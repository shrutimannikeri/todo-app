import React,{useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';
function TodoList() {
    const [todos,setTodos] =useState([]);
    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
          return;
        }
    
        const newTodos = [todo, ...todos];
    
        setTodos(newTodos);
        console.log(...todos);
      };
      const completeTodo=id=>{
          let updateTodos =todos.map((todo)=>{
              if(todo.id===id){
                  todo.isComplete=!todo.isComplete;
              }
          });
          setTodos(updateTodos)
      }
      const updateTodo=(todoId, newValue)=>{
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
          }
        setTodos(prev=>prev.map(item=>(item.id===todoId?newValue : item)))
    }
      const removeTodo=(id)=>{
          const removeArr=[...todos].filter((todo)=>todo.id!==id);
          setTodos(removeArr)
      }
      
    return (
        <div>
            <h1>what is plan for today</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos} 
            completeTodos={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
            />
            
        </div>
    )
}

export default TodoList;
