import React from "react"
import logo from "/assets/airbnb-logo.png"
import './navbar.css'

export default function Navbar() {
    return (
        <nav className="nav">
            <img src={logo} alt="airbnb-logo" className="nav--logo"/>
        </nav>
    )
}