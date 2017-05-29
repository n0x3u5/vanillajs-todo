import TodoList from './javascripts/todo-list'
import prepFilters from './javascripts/todo-filter'
import { isReturnPressed } from './javascripts/util'

import './stylesheets/todo.css'

let newTodo = document.querySelector('.new-todo')

let toggleAllCheckBox = document.querySelector('.toggle-all')
let toggleAllLabel = document.querySelector('.toggle-all-label')
let footer = document.querySelector('.footer')
let invisibles = [toggleAllCheckBox, toggleAllLabel, footer]

let todoList = new TodoList(invisibles)
prepFilters(todoList)

newTodo.addEventListener('keyup', e => {
  let code = (e.keyCode ? e.keyCode : e.which)
  if (isReturnPressed(code)) {
    todoList.addItem(newTodo.value)
    newTodo.value = ''
  }
})
