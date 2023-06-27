import {TodoList} from "./TodoList"
import {Metadata} from "./Metadata"

const todoList = new TodoList<Metadata>()


todoList.note("Code aufräumen", {date: Date(), assignee: "Maik"})
todoList.note("SQL Lernen", {date: Date()})

const improveErrorHandlingId = todoList.note("Felerbehandlung verbessern",
    {date: Date(), assignee: "Maik"});

todoList.edit(improveErrorHandlingId, "Fehlerbehandlung verbessern")
todoList.markOff(improveErrorHandlingId);
console.log(todoList.getAllTodos())
