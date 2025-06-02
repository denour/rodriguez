import React, { useState} from 'react';
import './header.scss';
import { Link } from "react-scroll";
import logo from './logo.svg';

const Header: React.FC = () => {
    const [menu, setMenu] = useState(false);
    let menuClass = () => { return menu ? 'principal active' : 'principal'; };

    const handleMenu = () => { let toggle = !menu; setMenu(toggle); };

    return (
        <nav>
            <div className="menu" onClick={handleMenu}>
                <div />
                <div />
                <div />
            </div>
            <ul className={menuClass()} style={{background: "url('menu.png') no-repeat", backgroundSize: 'contain', backgroundPositionY: 40}}>
                <li>
                    <Link spy={true}
                          smooth={true}
                          activeClass="active"
                          offset={-70}
                          duration= {500} to="home">inicio</Link>
                </li>
                <li>
                    <Link spy={true}
                          smooth={true}
                          activeClass="active"
                          offset={-70}
                          duration= {500} to="nosotros">nosotros</Link>
                </li>
                <li>
                    <Link spy={true}
                          smooth={true}
                          activeClass="active"
                          offset={-70}
                          duration= {500} to="soluciones">soluciones</Link>
                </li>
                <li>
                    <Link spy={true}
                        smooth={true}
                        activeClass="active"
                        offset={-70}
                        duration= {500} to="acceso">acceso</Link>
                </li>
                <li>
                    <Link spy={true}
                          smooth={true}
                          activeClass="active"
                          offset={-70}
                          duration= {500} to="boletines">boletines</Link>
                </li>
                <li>
                    <Link spy={true}
                          smooth={true}
                          activeClass="active"
                          offset={-70}
                          duration= {500} to="contacto">contacto</Link>
                </li>
            </ul>
            <a href="/"><img src={logo} width={200} alt="rodriguez"/></a>
        </nav>
    );
}

export default Header;
