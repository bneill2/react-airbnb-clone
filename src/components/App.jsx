import React from 'react'
import data from '../data.js'
import Navbar from './Navbar'
import Hero from './Hero'
import Card from './Card'

export default function App() {
    const cards = data.map((card) => {
        return <Card 
                    key={card.id}
                    {...card}
                />
    })
    return (
        <div className="container">
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}