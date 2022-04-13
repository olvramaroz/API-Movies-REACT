import React from 'react'
import ImgHeader from '../images/cinema.jpg'

class Header extends React.Component {

    render() {
        return(
            <>
            {
                <>
                <header className="header">
                    <img src={ImgHeader} alt="outils de production cinématographique" />
                    <h1>Les films de la semaine !</h1>
                </header>
                <form id="form">
                    <input id="search" type="text" placeholder="Trouver un film" />
                </form>
                </>
            }
            </>
        )
    }
}
export default Header;