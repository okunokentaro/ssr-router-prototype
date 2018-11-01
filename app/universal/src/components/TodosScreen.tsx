import * as React from 'react';
import { History, HistoryContext } from '../lib/history/history';
import { TodosContext } from './AppProvider';

const useMediator = () => {
  const { state, dispatch } = (React as any).useContext(TodosContext);

  return {
    todos: state.todos,
    todoCount: state.todos.length,
    add(v: string) {
      dispatch({ type: 'add', payload: { text: v } });
    },
  };
};

export function TodosScreen() {
  const mediator = useMediator();
  const history_ = (React as any).useContext(HistoryContext) as History;
  const [input, setInput] = (React as any).useState('') as [string, (v: string) => void];

  const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    console.log('onChange');
    setInput(ev.currentTarget.value);
  };

  const onClickAdd = () => {
    console.log('onClickAdd', input);
    mediator.add(input);
    setInput('');
  };

  const onClickHome = () => {
    history_.push('/');
  };

  return (
    <>
      <h1>Todoアプリ</h1>

      <h2>タスク追加</h2>
      <div>
        <input onChange={onChange} value={input} type="text" />
        <button onClick={onClickAdd}>追加</button>
      </div>

      <h2>タスク一覧 {mediator.todoCount}</h2>
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
          {mediator.todos.map((todo: string, i: number) => {
            console.log('map');
            return (
              <tr key={i}>
                <td>ID</td>
                <td>済</td>
                <td>{todo}</td>
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
    </>
  );
}
