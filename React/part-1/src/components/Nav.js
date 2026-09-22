import { Link, NavLink } from 'react-router-dom';

export default function Nav({children}){
    return <>
     <nav className='app-nav'>
        <ul>
          <li>
            <NavLink className={(isActive)=>{
                return isActive ? 'active-link' : '';
            }} to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink className={(isActive)=>{
                return isActive ? 'active-link' : '';
            }} to='/login'>Login</NavLink>
          </li>
          <li>
            <NavLink className={(isActive)=>{
                return isActive ? 'active-link' : '';
            }} to='/signup'>Sign Up</NavLink>
          </li>
          <li>
            <NavLink className={(isActive)=>{
                return isActive ? 'active-link' : '';
            }} to='/users'>UserMgmt</NavLink>
          </li>
        </ul>
      </nav>
      {children}
    </>
}