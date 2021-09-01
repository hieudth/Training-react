function Input(props) {
    return (
        <div className="input-group mb-3">
        <input
          ref={props.refInputTaskName}
          type="text"
          className="form-control"
          placeholder="Input task name"
          value={props.inputTaskName}
          onChange={props.handleInputTaskName}
          onKeyUp={(e) => {
            // Bắt sự kiện khi ấn enter ở ô input
            if (e.keyCode === 13) {
              props.handleAddTask();
            }
          }}
        />
        <button
          className="btn btn-outline-success"
          type="button"
          onClick={props.handleAddTask}
        >
          <b>+</b>
        </button>
      </div>
    );
}
export default Input;