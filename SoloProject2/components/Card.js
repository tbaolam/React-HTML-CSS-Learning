import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <div><img src={`../images/${props.imageUrl}`} className="card-image"/></div>
            <div className="card-location">
                <div className="location-props">
                    <img src="../images/navi-icon.png" className="card-navi"/>
                    <span className="country-name">{props.location}</span>
                    <span className="gray"><a href={props.googleMapsUrl}>Views on Google Maps</a> </span>
                </div>
                <h1 className="location-name">{props.title}</h1>
                <h3 className="card-time">{props.startDate} - {props.endDate}</h3>
                <p className="card-note">{props.description}</p>
            </div>
        </div>
    )
}