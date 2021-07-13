import { memo } from "react";
import { Card } from "./Card";

export const ToDoList: React.FC<{ todos: string[] }> = memo(({ todos }) => {
  console.log("TODO-LIST", "update trigger");
  return (
    <>
      {todos.map((item, index) => {
        return <Card key={index}>{item}</Card>;
      })}
    </>
  );
});
