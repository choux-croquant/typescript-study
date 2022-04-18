// props의 타입 지정하기, children과 같은 기본 props에 대해 모두 타입을 지정하는 것은 번거로운 작업이 되기 때문에
// 다음과 같이 @types/react에 미리 작성된 React function 타입으로 작성할 수 있다.
// FC Generic타입의 역할? -> <>안에 작성한 props타입을 chilren과 합쳐주는 것
// 다만 React.FC를 사용할 경우 children이 무조건 있어야 하는 경우, 또는 없어야 하는 경우 등의 예외 처리를 하기 힘들다.(React.FC역시 미리 작성된 Generic타입이기 때문에)
// 따라서 반드시 사용할 필요는 없으며 childeren 사용 유무, props의 형태 등을 고려하여 선택적으로 사용.

// model에서 정의한 class를 import하여 class자체를 Type으로 사용할 수 있다.
// import Todo from '../models/todo';
import TodoItem from './TodoItem';
import { TodosContext } from '../store/todos-context';
import { useContext } from 'react';

const Todos: React.FC = () => {
    const todosCtx = useContext(TodosContext)
  return(
    <ul>
      {todosCtx.items.map(item => <TodoItem key={item.id} text={item.text} onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}/>)}
    </ul>
  )
}

export default Todos;