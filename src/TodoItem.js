import React from "react"

function TodoItem(props) {

    // styled my completed items by creating a variable for it
    const completedTodo = {
        fontStyle: "italic",
        color: "grey",
        textDecoration: "line-through"
    }

    return (
        <div className="TodoHeader">
            <input type="checkbox" checked={props.item.completed} onChange={() => props.handleClick(props.item.id)}/>
            <p style={props.item.completed ? completedTodo : null }>{props.item.text}</p>
        </div>
    )
}


export default TodoItem