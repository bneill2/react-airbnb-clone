import React from "react"
import './card.css'
import star from '/assets/star.png'

export default function Card(props) {
    let badgeText;
    if(props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if(props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--image" src={`/assets/${props.coverImg}`} alt="card-image" />
            <div className="card--stats">
                <img src={star} alt="star" className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="light">&nbsp;({props.stats.reviewCount}) &middot;&nbsp;</span> 
                <span className="light">{props.location}</span>
            </div>
                <p className="card--title">{props.title}</p>
                <p className="card--price"><span className="dark">From ${props.price}</span> / person</p>
        </div>
    )
}