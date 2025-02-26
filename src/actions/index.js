

/* These action creators can be dispatched to the Redux store using the dispatch() method,
which will trigger the corresponding reducer function to update the application state accordingly. */

export const addTodo = (text) => {
    return {
        type: "ADD_TASK",
        payload: {
            id: new Date().getTime(),
            text: text,
        },
    };
};

export const deleteTodo = (id) => {
    return {
        type: "DELETE_TASK",
        payload: id,
    };
};