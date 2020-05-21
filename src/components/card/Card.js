import React from 'react'
import './Card.css'

const Card = (props) => {
    return <article className="latamer uxd senior" >
        <h3>{props.name}</h3>
        <h4>{props.rol}</h4>
        <p>Hola! en mi paso por el equipo UX de LATAM Airlines trabajé como UX Designer con foco en productos digitales dentro del flujo de compra del sitio. En mi rol como UXD trabajé en procesos de <em>Discovery</em>, <em>AI</em>, <em>storytelling</em>, <em>testing</em>, creación de <em>wireframes</em>, prototipos y accesibilidad dentro de células ágiles.</p>
        <ul className="contact">
            <li className="contact-cv"><a href="https://drive.google.com/open?id=1E48rb5mKkxbJkkgL8lZWurvk1cwHn_St" target="_blank"><i className="fas fa-passport"></i> Currículum</a></li>
            <li className="contact-in"><a href="https://www.linkedin.com/in/andreaescudero/" target="_blank"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
            <li className="contact-wl"><a href="https://medium.com/latam-airlines/accesibilidad-digital-creando-experiencias-para-todos-52e420d3dbdb" target="_blank"><i className="fab fa-medium"></i> Medium</a></li>
        </ul>
    </article>
}

export default Card