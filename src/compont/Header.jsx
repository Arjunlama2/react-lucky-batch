import React from 'react'
import"../css/header.css"
import { Link } from 'react-router-dom'

function Header() {

    console.log("this is header")
    return (
        <div className='container'>
            <div className='left'>
                <ul>
                    <li>Logo</li>
                    <li>
                        <Link to="/">
                        Home
                        </Link>
                        </li>
                </ul>
            </div>
            <div className='right'>
                <ul>
                    <li>
                      <Link to="/about">  About Us</Link>
                    </li>
                    <li>
                        Services
                    </li>
                    <li>
                        <Link to='/login'>
                        <button>Login</button>
                        </Link>
                        </li>
                </ul>
            </div>
        </div>
    )
}

export default Header