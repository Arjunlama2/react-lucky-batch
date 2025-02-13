import React from 'react'
import"../css/header.css"

function Header() {

    console.log("this is header")
    return (
        <div className='container'>
            <div className='left'>
                <ul>
                    <li>Logo</li>
                    <li>Home</li>
                </ul>
            </div>
            <div className='right'>
                <ul>
                    <li>
                        About Us
                    </li>
                    <li>
                        Services
                    </li>
                    <li><button>Login</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header