import React from "react";
import { TodoModel } from "../models/todo-model";

interface Props {
    rowNumber: number
    rowDescription: string
    rowAssigned: string
    deleteTodo: Function
}

export const TodoRowItem: React.FC<Props> = ({rowNumber, rowDescription, rowAssigned, deleteTodo}) => {

    return (
        <tr onClick={() => deleteTodo(rowNumber)}>
            <th scope="row">{rowNumber}</th>
            <td>{rowDescription}</td>
            <td>{rowAssigned}</td>
        </tr>
    )
}