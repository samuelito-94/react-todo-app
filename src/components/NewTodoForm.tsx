import React from "react";
import { useState } from "react";

interface Props {
    addTodo: Function
}

export const NewTodoForm: React.FC<Props> = (props) => {
    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');

    const onSubmitTodo = (e: any) => {
        e.preventDefault();
        if (description != '' && assigned != '') {
            props.addTodo(description, assigned);
            setDescription('');
            setAssigned('');
        }
    }

    return (
        <div className="mt-5">
            <form onSubmit={onSubmitTodo}>
                <div className="mb-3">
                    <label className="form-label">Assigned</label>
                    <input type="text" className="form-control" required value={assigned} onChange={e => setAssigned(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" rows={3} required value={description} onChange={e => setDescription(e.target.value)}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Add Todo</button>
            </form>
        </div>
    )
}