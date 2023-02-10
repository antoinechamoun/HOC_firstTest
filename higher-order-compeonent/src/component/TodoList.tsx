import { typeOfTodo } from "../modal";
import HOC from "./HOC";

const TodoList: React.FC = ({ data }: any) => {
  return (
    <div>
      {data.map((todo: typeOfTodo) => {
        return (
          <div key={todo.id}>
            <p>
              <strong>{todo.title}</strong>
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default HOC(TodoList, "todos");
