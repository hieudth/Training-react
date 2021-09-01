import Task from "./Task";

function TaskList(props) {
  return (
    <div className="mb-3" style={{ width: "100%" }}>
      <Task genTodoList={props.genTodoList} />
    </div>
  );
}
export default TaskList;
