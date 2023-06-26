import { Todo } from "./Todo";
import { v4 } from "uuid";

class TodoList<T> {
  private readonly todos: Todo<T>[];


  public constructor() {
    this.todos = [];
  }

  public note(discription: string, data: T): string {
    const id = v4();

    const todo: Todo<T> = {
      id,
      discription,
      status: "open",
      data,
    };

    this.todos.push(todo);
    return id;
  }

  public edit(id: string, discription: string): void {
    const todo = this.todos.find((todo) => todo.id === id);

    if (!todo) {
      throw new Error("Todo not found");
    }

    todo.discription = discription;
  }

  public markOff(id: string): void {
    const todo = this.todos.find((todo) => todo.id === id);

    if (!todo) {
      throw new Error("Todo not found");
    }

    todo.status = "done";
  }

  public discarded(id: string): void {
    const todo = this.todos.find((todo) => todo.id === id);

    if (!todo) {
      throw new Error("Todo not found");
    }

    todo.status = "discarded";
  }

  public getAllTodos(): Todo<T>[] {
    return this.todos;
  }

  public getOpenTodos(): Todo<T>[] {
    return this.todos.filter((todo) => todo.status === "open");
  }
  public getDoneTodos(): Todo<T>[] {
    return this.todos.filter((todo) => todo.status === "done");
  }
  public getDiscardedTodos(): Todo<T>[] {
    return this.todos.filter((todo) => todo.status === "discarded");
  }
}

export { TodoList };
