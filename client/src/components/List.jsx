import { useState , useEffect } from "react"
import '../style/list.css'
export default function List(){
    const [taskData,setTaskData]=useState([])

    useEffect(()=>{
        getListData();
    },[])

    const getListData= async()=>{
        let list = await fetch("http://localhost:5000/tasks")
        list = await list.json()
        setTaskData(list.tasks)
        console.log(list)
    }
    return(
       <div className="list-container">
      <h1>Tasks</h1>

      {taskData.length === 0 ? (
        <p className="empty-message">No tasks available. Add one!</p>
      ) : (
        <ul className="task-list">
          {taskData.map((task, index) => (
            <li key={index} className="task-item">
              <div className="task-title">{task.title}</div>
              <div className="task-desc">{task.description}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
    )
}