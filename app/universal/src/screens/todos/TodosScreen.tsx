import * as React from 'react';

import useState from '../../lib/react/useState';
import { TodosMediator } from './useMediator';

interface Props {
  useMediator: () => TodosMediator;
}

export default function TodosScreen({ useMediator }: Props) {
  const mediator = useMediator();
  const [newTodoInput, setNewTodoInput] = useState('');

  const onChangeTodoInput = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoInput(ev.currentTarget.value);
  };

  const onClickAddTodo = () => {
    mediator.addTodo(newTodoInput);
    setNewTodoInput('');
  };

  const onClickHome = () => {
    mediator.toHome();
  };

  const onClickTodos1 = () => {
    mediator.toTodos1();
  };

  return (
    <>
      <h1>Todoアプリ</h1>

      <h2>タスク追加</h2>
      <div>
        <input onChange={onChangeTodoInput} value={newTodoInput} type="text" />
        <button onClick={onClickAddTodo}>追加</button>
      </div>

      <h2>タスク一覧 ({mediator.todoCount})</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>済</th>
            <th>タスク</th>
            <th>作成</th>
            <th>修正</th>
            <th>編集</th>
            <th>削除</th>
          </tr>
        </thead>

        <tbody>
          {mediator.todos.map(todo => {
            return (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>済</td>
                <td>{todo.title}</td>
                <td>作成</td>
                <td>修正</td>
                <td>編集</td>
                <td>削除</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <button>さらに読み込む</button>
      <button onClick={onClickHome}>Home</button>
      <button onClick={onClickTodos1}>todos/1</button>
    </>
  );
}
