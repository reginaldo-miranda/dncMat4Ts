import { useState } from 'react'

import './App.css'


interface TodoItem{
  id: string,
  texto: string,
  completado: boolean
}

function App() {

  const [todoList, setTodoList] = useState<TodoItem[]>([])
  const [newtodo, setNewTodo] = useState<string>('')

  const adicionarTarefa = () => {
    if(newtodo !== "") {
      const newId = crypto.randomUUID()
      const newTodoItem: TodoItem = {
          id: newId,
          texto: newtodo,
          completado: false
      }
      setTodoList([...todoList, newTodoItem])
      setNewTodo('')

    }
  }
  const marcarCompleto = (id: string) => {
    const newTodoList = todoList.map(item => {
      if(item.id === id) {
        return {...item, completado: !item.completado}

      }
    return item
  }) 
   setTodoList(newTodoList)
  }

  return (
      <div className='app'>
        <div className='container'>
        <h1>Lista de Tarefas</h1>
        <div className='input-container'>
          <input type="text" value={newtodo} onChange={(e) => setNewTodo(e.target.value)}/>
          <button onClick={adicionarTarefa}>Adicionar Tarefa</button> 
        </div>
          <ol>
            {
            todoList.map((todo) => (
              <li key={todo.id}>
                <input type="checkbox" checked={todo.completado} onChange={() => marcarCompleto(todo.id)} />
                <span style={{textDecoration: todo.completado ? 'line-through' : 'none'}} >{todo.texto}</span>
              </li>
            ))
            }
          </ol>
        </div>
        

      </div>
  )
}

export default App
