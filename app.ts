import {TodoList} from "./TodoList"
import {Metadata} from "./Metadata"

const todoList = new TodoList<Metadata>()


todoList.note("Code aufräumen", {date: Date()})
todoList.note("SQL Lernen", {date: Date()})

console.log(todoList.getOpenTodos())
