import { useState , useEffect } from "react"

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
        <>
        <h1>List</h1>
        <ul>
            {taskData.map((task,index)=>(
                <li key={index}>{task.title}: {task.description}</li>
            ))}
        </ul>
        </>
    )
}