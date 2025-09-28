import { useState , useEffect, Fragment } from "react"
import '../style/list.css'
import { Link } from "react-router-dom"
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

    const deleteTask= async(id)=>{
        let item = await fetch("http://localhost:5000/delete/"+id, {method: 'delete'});
        item = await item.json();
        if(item){
            getListData();
            console.log("item deleted successfully")
        }
    }
    return(
       <div>
      <h1>To Do List</h1>
      <ul className="task-list">
        <li className="list-header">S.No</li>
        <li className="list-header">Title</li>
        <li className="list-header">Description</li>
        <li className="list-header">Action</li>

        {
            taskData && taskData.map((item,index) =>(
                <Fragment key={item._id}>
                <li className="list-header">{index+1}</li>
                <li className="list-header">{item.title}</li>
                <li className="list-header">{item.description}</li>
                <li className="list-header"><button className="delete-item" onClick={()=>(deleteTask(item._id))}>Delete</button>
                <Link to={"update/"+item._id} className="update-item" >Update</Link>
                </li>

                </Fragment>
            ))
        }
      </ul>
    </div>
    )
}