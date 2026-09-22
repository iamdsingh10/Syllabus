import { getPersons } from "../components/apiutils";
import Nav from "../components/Nav";
import {useState,useEffect} from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import './userMgmt.css';


export default function UserMgmt(){
    const {search} = useLocation();
    const [users, setUsers] = useState([]);
    const [keyWord, setKeyWord] = useState(new URLSearchParams(search).get('query'));

    useEffect(()=>{
        getPersons()
        .then((users)=>{
            setUsers(users)
        })
    },[]);

    
    console.log(search);

    const addUser = (user) => {
        setUsers((prevUsers) => [
            ...prevUsers,
            { id: Date.now(), name: user.name, email: user.email, mobile: user.phone }
        ]);
    };

    return <>
    <Nav>
        <div>
        <input placeholder="search User" value={keyWord} onChange={e=> setKeyWord(e.target.value)}/>
        <Link to={`/users?query=${keyWord}`}><button>search user</button></Link>
        </div>
        <div>
            <Link to="/users/add"><button>Add User</button></Link>
        </div>
        
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.filter(u=> u.name.toLowerCase().includes(keyWord.toLowerCase())).map((user)=>{
                    return <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.mobile}</td> 
                        <td>
                            <Link to={`/users/${user.id}`} state={{ user }}>View Details</Link>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
        <Outlet context={{ addUser }} />  {/*place holder of child component or where child component will be rendered   this helps in minimum intereaction with server  */}
    </Nav>
    </>
}