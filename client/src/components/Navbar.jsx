import { Link } from "react-router-dom"
import "../style/navbar.css"
import "../style/index.css"
export default function Navbar(){
    return(
        <nav className="navbar">
         <div className="nav-logo">To-Do App</div>
         <ul className="nav-links">
            <li><Link to="/">List</Link></li>
            <li><Link to="/add">Add Task</Link></li>
         </ul>
        </nav>
    )
}