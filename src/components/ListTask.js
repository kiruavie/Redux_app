import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterTasks } from "../redux/actions";
import Task from "./Task";

const ListTask = () => {
  const tasks = useSelector((state) => {
    switch (state.filter) {
      case "done":
        return state.tasks.filter((task) => task.isDone);
      case "not":
        return state.tasks.filter((task) => !task.isDone);
      default:
        return state.tasks;
    }
  });

  const dispatch = useDispatch();

  const handleFilter = (filter) => {
    dispatch(filterTasks(filter));
  };

  return (
    <div>
      <div>
        <button onClick={() => handleFilter("all")}>All</button>
        <button onClick={() => handleFilter("done")}>Done</button>
        <button onClick={() => handleFilter("not")}>Not Done</button>
      </div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
