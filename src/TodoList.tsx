import { Todo } from "./type";
type Props = {
  todos: Todo[];
};
export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <div>
      {todos.length === 0 ? (
        <p>No todos yet.</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                textDecoration: todo.isCompleted ? "line-through" : "none",
              }}
            >
              {todo.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};