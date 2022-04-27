import React from 'react'
import {Link} from 'react-router-dom'
import classes from './MainHeader.module.css'
const MainHeader = () => {
  return (
    <header className={classes.header}>
        <nav>
            <ul>
                <li>
                    <Link to="/welcome">Welcome page</Link>
                </li>
                <li>
                    <Link to="/products">Products page</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default MainHeader