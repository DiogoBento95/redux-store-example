import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../actions";


const TaskList = () => {
    // The useSelector hook provides access to the state from the Redux store.
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    };

    return (
        <div className="tasklist">
            <div className="display-tasks">
                <h3>Your tasks:</h3>
                <ul className="tasks">
                    {tasks.map((task) => ( // tasks.map is not a function?
                    <li className="task" key={task.id}>
                        {task.text}
                        <button
                        className="delete-btn"
                        onClick={() => handleDelete(task.id)}
                        >
                        delete
                        </button>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TaskList;