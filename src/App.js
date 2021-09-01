import { nanoid } from "nanoid";
import { useRef, useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Delete from "./components/Delete";
import TaskList from "./components/TaskList";

function App() {
  const refInputTaskName = useRef(null);
  const [inputTaskName, setInputTaskName] = useState("");
  const [todoList, setTodoList] = useState([
    // Item sample
    // {
    //   id: nanoid(),
    //   name: "Task 1",
    //   selected: true,
    //   completed: true,
    // },
  ]);

  const genTodoList = () => {
    return todoList.map((todoItem) => {
      return (
        <li className="list-group-item" key={todoItem.id}>
          <input
            className="form-check-input"
            type="checkbox"
            style={{ marginRight: "10px" }}
            onChange={() => handleSelected(todoItem.id)}
          />
          <span
            onClick={() => handleCompleted(todoItem.id)}
            role="button"
            className={todoItem.completed ? "item-completed" : ""}
          >
            {todoItem.completed ? (todoItem.name + "- Completed") : todoItem.name}
          </span>
        </li>
      );
    });
  };

  /**
   * Xử lý thêm task
   * action:
   * 1. thêm vào array todoList,
   * 2. Thêm xong thì clear value trong ô input task name
   * 3. Cho con chuột focus vào ô input, sử dụng ref (hình như viết tắt của reference) trong react để focus
   */
  const handleAddTask = () => {
    // Neu inputTaskName là rỗng thì không add
    if (inputTaskName === "") return;
    // Step 1
    setTodoList([
      {
        id: nanoid(),
        name: inputTaskName,
        selected: false,
        completed: false,
      },
      ...todoList,
    ]);

    // Step 2
    setInputTaskName("");

    // Step 3
    refInputTaskName.current.focus();
  };

  // Sử dụng filter để remove
  // Check xem trong todoList nếu không có item nào có field selected: true => delete All
  // Ngược lại, delete những item có selected: true
  const handleDeleteTask = (id) => {
    // console.log("handleDeleteTask");
    let deleteAll = true;
    let newtodoList = todoList.filter((item) => {
      if (item.selected) {
        deleteAll = false;
      }
      return item.selected === false; 
    });
    if (deleteAll) {
      setTodoList([]);
    } else {
      setTodoList([...newtodoList]);
    }
  };

  // Lấy value trong input để set vào state, tạo ra dữ liệu đồng bộ 2 chiều state <=> input
  const handleInputTaskName = (event) => {
    // console.log("handleInputTaskName", event.target.value);
    setInputTaskName(event.target.value);
  };

  // Sử dụng hàm map duyệt qua các phần tử
  // Gặp phần tử có id truyền vào thì đổi trạng thái
  // Sử dụng cú pháp es6
  const handleSelected = (id) => {
    // console.log("handleSelected : ", id);
    todoList.map((item) => {
      if (item.id === id) {
        item.selected = !item.selected;
      }
      return item;
    });
    setTodoList([...todoList]);
  };

  // Sử dụng hàm map duyệt qua các phần tử
  // Gặp phần tử có id truyền vào thì đổi trạng thái
  // Sử dụng cú pháp es6
  const handleCompleted = (id) => {
    // console.log("handleCompleted : ", id);
    todoList.map((item) => {
      if ( item.id === id ) {
        item.completed = !item.completed;
      }
      return item;
    });
    setTodoList([...todoList]);
  };

  return (
    <div className="container">

      <Heading />
      
      <Input 
        handleInputTaskName={handleInputTaskName} 
        handleAddTask={handleAddTask}
        refInputTaskName={refInputTaskName}
        inputTaskName={inputTaskName}
      />
      
      <Delete items={todoList} handleDeleteTask={handleDeleteTask}/>

      <TaskList genTodoList={genTodoList}/>      
    </div>
  );
}

export default App;
