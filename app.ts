import {TodoList} from "./TodoList"
import {Metadata} from "./Metadata"

const todoList = new TodoList<Metadata>()

// @ts-ignore
todoList.note("Code aufräumen", Date())
// @ts-ignore
todoList.note("SQL Lernen", Date())

console.log(todoList.getOpenTodos())
