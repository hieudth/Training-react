function Delete(props) {
  return (
    <div className="mb-3">
      <button
        className="btn btn-outline-danger"
        type="button"
        onClick={() => props.handleDeleteTask()}
      >
        <b>Delete selected</b>
      </button>
    </div>
  );
}
export default Delete;
