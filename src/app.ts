import * as fromStore from "./store";
import { renderTodos } from "./utils";

const input = document.querySelector("input") as HTMLInputElement;
const button = document.querySelector("button") as HTMLButtonElement;
const destroy = document.querySelector(".unsubscribe") as HTMLButtonElement;
const todoList = document.querySelector(".todos") as HTMLLIElement;

const reducers = {
  todos: fromStore.reducers,
};
const store = new fromStore.Store(reducers);
const unsubscribe = store.subscribe((state) => {
  renderTodos(state.todos.data);
});
store.subscribe((state) => console.log("STATE: ", state)); // stays subscribed even if todos unsubscribe

button.addEventListener(
  "click",
  () => {
    if (!input.value.trim()) return;

    const todo = { label: input.value, complete: false };

    store.dispatch(new fromStore.AddTodo(todo));

    input.value = "";
  },
  false
);

destroy.addEventListener("click", unsubscribe, false);

// this is also unsubscribed by the above unsubscribe
todoList.addEventListener("click", function (event) {
  const target = event.target as HTMLButtonElement;
  if (target.nodeName.toLowerCase() === "button") {
    const todo = JSON.parse(target.getAttribute("data-todo") as any);
    store.dispatch(new fromStore.RemoveTodo(todo));
  }
});
