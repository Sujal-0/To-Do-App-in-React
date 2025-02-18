import React, { Fragment, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import "./InputTodo.css";

const EditTodo = ({ todo }) => {
    const [description, setDescription] = useState(todo.description);

    const handleInputChange = (e) => {
        setDescription(e.target.value);
    };

    const handleSaveChanges = async(e) => {
        // Add logic to save changes here
        e.preventDefault();
        try {
            const body = { description };
            await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            window.location = "/";
        } catch (err) {
        console.error(err.message);
        }
    };

    return (
        <Fragment>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#id${todo.todo_id}`} onClick={() => setDescription(todo.description)}>
                <EditIcon />
            </button>

            <div className="modal fade" id={`id${todo.todo_id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-7" id="exampleModalLabel">Edit ToDo</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setDescription(todo.description)}></button>
                        </div>
                        <div className="modal-body">
                            <input type="text" className="form-control" value={description} onChange={handleInputChange} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setDescription(todo.description)}>
                                <CloseIcon />
                            </button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleSaveChanges}>
                                <DoneAllIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default EditTodo;
