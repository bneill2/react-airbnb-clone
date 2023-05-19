import React from "react"
import './Hero.css'
import photoGrid from '/assets/photo-grid.png'

export default function Hero() {
    return (
        
        <section className="hero">
            <img src={photoGrid} alt="photogrid" className="hero--image" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts--all without leaving home.</p>
        </section>
    
    )
}