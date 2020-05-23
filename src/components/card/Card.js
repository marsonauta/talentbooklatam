import React from 'react'
import './Card.css'

const Card = (props) => {
    return <article className={props.rolClass} >
        <h3>{props.name}</h3>
        <h4>{props.rol}</h4>
        <p>{props.summary}</p>
        <ul className="contact">
            <li className="contact-cv"><a href="https://drive.google.com/open?id=1E48rb5mKkxbJkkgL8lZWurvk1cwHn_St" target="_blank"><i className="fas fa-passport"></i> Currículum</a></li>
            <li className="contact-in"><a href="https://www.linkedin.com/in/andreaescudero/" target="_blank"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
            <li className="contact-wl"><a href="https://medium.com/latam-airlines/accesibilidad-digital-creando-experiencias-para-todos-52e420d3dbdb" target="_blank"><i className="fab fa-medium"></i> Medium</a></li>
        </ul>
    </article>
}

export default Card