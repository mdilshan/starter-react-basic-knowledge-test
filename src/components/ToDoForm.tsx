import { memo } from "react";

export const ToDoForm: React.FC<{
  newToDo: string;
  onAddTodo: (todo: string) => void;
  setNewToDo: (e: any) => void;
}> = memo(({ newToDo, setNewToDo, onAddTodo }) => {
  console.log("TODO-FORM", "update trigger");
  return (
    <>
      <input
        type="text"
        className="App__todo-container--top-input"
        onChange={(e) => setNewToDo(e.target.value)}
        value={newToDo}
      />
      <button
        className="App__todo-container--top-button"
        onClick={() => {
          onAddTodo(newToDo);
        }}
      >
        ADD
      </button>
    </>
  );
});
