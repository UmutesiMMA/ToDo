import { useState } from "react";
import Activity from "./Activity";
export default function ActivityList() {
  const initalInputState={job:''}
  const [task, setTask] = useState(initalInputState);
  const [List, setList] = useState([]);
  //Good
  function handleChange(event) {
    setTask(prevState=>({
      [prevState.job]:event.target.value}));
    console.log(task)
  }

  function handleDelete(index) {
    setList((prevState) =>
      prevState.slice(0, index).concat(prevState.slice(index + 1))
    );
  }
  function addToDo(event) {
    event.preventDefault();
    setList((prevState) => [...prevState, task]);
    setTask(initalInputState)
  }

  const listItems = List.map((item, index) => {
    if (item !== "") {
    return (
      <li key={index}>
        <Activity detail={item} index={index} handleDelete={handleDelete} />
      </li>
    );}
  });
  return (
    <>
      <form onSubmit={addToDo} className="flex  justify-center mt-32 mb-20">
        <div className="border p-4 rounded-full flex justify-between w-full">
          <input
            type="text"
            placeholder="Add a task"
            name="job"
            value={task.job}
            onChange={handleChange}
            className="w-full border-transparent outline-none"
          />
          <button type="submit" className="border-l px-4">
            +
          </button>
        </div>
      </form>
      <ul className="flex flex-col gap-4">{listItems.reverse()}</ul>
    </>
  );
}
