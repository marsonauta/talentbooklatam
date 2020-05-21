import React from 'react'
import './Header.css'

const Header = (props) => {
    return <header>
        <h1><a href="/"><i className="fas fa-plane-departure"></i></a></h1>
        <nav>
            <a href="en.html">🇺🇸<span className="mobile-no"> English</span></a>
            <a href="pt.html">🇧🇷<span className="mobile-no"> Português</span></a>
        </nav>
    </header>
}

export default Header