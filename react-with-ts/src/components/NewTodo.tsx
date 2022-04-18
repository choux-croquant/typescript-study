import React, { useContext, useRef } from "react";
import { TodosContext } from "../store/todos-context";

// const NewTodo: React.FC<{onAddTodo: (text: string) => void}> = (props) => {
  // input요소에 ref로 참조된 값의 타입을 정의하는 시점에서 알 수 없기 때문에 Generic타입으로 미리 정의할 수 있다.
  // 다음은 Input태그에 대한 미리 설정된 제네릭타입, 추가적으로 default값까지 지정해 주어야 한다.
  // const todoTextInputRef = useRef<HTMLInputElement>(null);

  // React패키지에 설정된 타입중에는 이벤트 타입도 존재한다.
  // const submitHandler = (event: React.FormEvent) => {
    // event.preventDefault();

    // const enteredText = todoTextInputRef.current!.value;

    // if (enteredText.trim().length === 0) {
      // return;
    // }

    // props.onAddTodo(enteredText);
  // };

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext)
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  // React패키지에 설정된 타입중에는 이벤트 타입도 존재한다.
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enteredText);
  };
  return(
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="text">Todo text</label>
        <input type="text" id="text" ref={todoTextInputRef} />
        <button>Add Todo</button>
      </form>
    </>
  );
};

export default NewTodo;

