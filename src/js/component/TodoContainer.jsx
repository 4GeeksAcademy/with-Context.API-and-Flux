import React, {useContext, useState} from "react";
import Todo, { NO_TODO_TEXT } from "./Todo.jsx";

import { Context } from '../Context.jsx';

export default function TodoContainer() {

    const [userInput, setUserInput] = useState("");
    const { taskList, setTaskList } = useContext(Context);

    // Store the user input (text)
    const onChangeHandler = (e) => setUserInput(e.target.value);
    
    // Remove a task when the user click on the delete option
    const removeTask = (key) => {
       setTaskList(taskList => taskList.filter((_, index) => key !== index))
    }

    // DO THE SAME AS THE FILTER ----------------------------------
    //     const filteredTaskList = [];
    //     for (let index = 0; index < taskList.length; index++) {
    //         if (index !== key) {
    //             filteredTaskList.push(taskList[index]);
    //         }
    //     }
    //     setTaskList(filteredTaskList);
    // ------------------------------------------------------------


    // Add to the page the new task, store this task to the taskList and then clears the iput
    const addTodoHandler = (e) => {
        if(e.key === 'Enter'){
            setTaskList([...taskList, userInput]);
            setUserInput("");
        }
    }

    // Evaluate if there is tasks already, if not, add a text to the first line
    const noTaskHandler = (arr) => {
        if(arr.length === 0){
            return (<Todo todo={NO_TODO_TEXT} />);
        }else{
            return taskList.map((todo,index) => <Todo key={index} index={index} todo={todo} remove={removeTask}/>);
        }
    }

    
    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                value={userInput}
                onChange={onChangeHandler}
                onKeyUp={addTodoHandler}
                />
            </form>
            {noTaskHandler(taskList)}
            <div className="paper">{taskList.length} Items left</div>
        </div>
        )
}
