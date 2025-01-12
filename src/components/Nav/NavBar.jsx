import "./NavBar.css";
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import { useState, useEffect } from 'react';
import ll from '../../img/ll.svg'

export default function NavBar({user, setUser}) {
    const [ showNav, setShowNav ] = useState(false)
    const [buttonState, setButtonState] = useState();
    const [resetKey, setResetKey] = useState(0)

    return (
        <nav>
                <div className="lessonloom-logo">
                <img src={ll} alt="logo" />
                <h2><Link to="/courses">LessonLoom</Link></h2>
                </div>
                <ul className='nav-links'>
                    <li className='nav-item'><Link to="/courses">All Courses</Link></li>
                    {user && (
                        <>
                            <li className='nav-item'><Link to="/courses/create">Create a Course</Link></li>
                            <li className='nav-item'><Link to="/user">My Profile</Link></li>
                        </>
                    )}
                    <li className='nav-item'><Login key={resetKey} resetKey={resetKey} setResetKey={setResetKey} showNav={showNav} setShowNav={setShowNav} use={user} setUser={setUser}/></li>
                </ul>
        </nav>
    )
}