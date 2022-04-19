import { TodoList } from "./TodoList";
import { Metadata } from "./Metadata";

const todoList = new TodoList<Metadata>();

todoList.note("Code aufräumen", Date());
console.log(todoList.getOpenTodos());
