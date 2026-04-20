import React from 'react'

function Header ({todos}) {
    const isTaskPlural = todos != 1;
    const taskOrTasks = isTaskPlural ? "tasks" : "task";
    return (
        <div>
            <h1>You have {todos} open todo {taskOrTasks}.</h1>
        </div>
    )
}
export default Header