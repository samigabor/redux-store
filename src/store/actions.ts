// action constants
export const ADD_TODO = "[ToDo] Add Todo";
export const REMOVE_TODO = "[ToDo] Remove Todo";

// action creators
export class AddTodo {
  readonly type = ADD_TODO;
  constructor(private payload: any) {}
}

export class RemoveTodo {
  readonly type = REMOVE_TODO;
  constructor(private payload: any) {}
}
