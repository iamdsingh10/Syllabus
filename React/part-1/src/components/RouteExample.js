 import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/Signup';
import UserMgmt from '../pages/UserMgmt';
import './route-example.css';
import AddUsers from '../pages/AddUsers';
import GetUserDetails from '../pages/GetUserDetails';

export default function RouteExample() {

function NotFound(){
        return <>404 Not Found</>
      }

  return (
    
    <BrowserRouter>
      {/* <nav className='app-nav'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/signup'>Sign Up</Link>
          </li>
        </ul>
      </nav> */}

      

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/users' element={<UserMgmt />}>
             <Route path='add' element={<AddUsers />} />               {/*  this path is localhost:3000/users/add       either of the child route is rendered both of them cannot be rendered together*/    }
             <Route path=':userId' element={<GetUserDetails />} />     {/*  this path is localhost:3000/users/:userId     here colon means it is not a permanent value it will vary it is a variable and this type of path is known as path parameter*/}
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      
    </BrowserRouter>
  );
}
