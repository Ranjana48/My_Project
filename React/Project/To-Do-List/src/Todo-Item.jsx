/* eslint-disable react/prop-types */
// import PropTypes from "prop-types";

function TodoItem({ todoName, todoDate }) {
  return (
    <div className="container">
      <div className="row todo-row">
        <div className="col-4">{todoName}</div>
        <div className="col-4"> {todoDate} </div>
        <div className="col-2">
          <div>
            <button type="button" className="btn btn-danger kg-button">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// TodoItem.prototype = {
//   todoName: PropTypes.string.isRequired,
//   todoDate: PropTypes.string.isRequired,
// };

export default TodoItem;
