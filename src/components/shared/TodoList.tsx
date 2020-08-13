import React, { FC } from "react";
import { withLoader } from "./withLoader";

const TodoListRaw: FC = () => {
  return <div>Todo:</div>;
};

export const TodoList = withLoader(TodoListRaw);
