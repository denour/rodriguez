import React, {useState} from "react";
import './solutions.scss';
import { Link } from "react-scroll";

const Solutions: React.FC = () => {
    const [items, setItems] = useState([
        {
            styles: {background: 'url("banner-soluciones.png")'},
            active: true,
            title: <h3><strong>Agencia</strong> Aduanal</h3>,
            link: <Link spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                        to="soluciones">Soluciones</Link>
        },  {
            styles: {background: 'url("banner-soluciones.png")'},
            active: false,
            title: <h3><strong>Agencia</strong> Aduanal 2</h3>,
            link: <Link spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                        to="soluciones">Soluciones</Link>
        },  {
            styles: {background: 'url("banner-soluciones.png")'},
            active: false,
            title: <h3><strong>Agencia</strong> Aduanal 3</h3>,
            link: <Link spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                        to="soluciones">Soluciones</Link>
        }
    ]);

    const getCurrentItem = (event: any = ''): [any, number] => {
        event !== '' && event.preventDefault();
        let customItems = [...items];
        let index = customItems.findIndex((item: any) => {
            return item.active;
        });

        customItems[index].active = false;
        return [customItems, index];
    };

    const nextSlide = (event: any) => {

        let [customItems, index] = getCurrentItem(event);
        index++;

        (typeof customItems[index] !== "undefined") ?
            customItems[index].active = true :
            customItems[0].active = true;

        setItems(customItems);
    };

    const changeItem = (nextIndex: number) => {
        let [customItems, index] = getCurrentItem();
        customItems[nextIndex].active = true;
        setItems(customItems);
    };

    const backSlide = (event: any) => {
        let [customItems, index] = getCurrentItem(event);
        index = (index === 0) ? (customItems.length - 1) : index - 1;
        customItems[index].active = true;
        setItems(customItems);
    };


    return (
        <div className="solutions" id="soluciones">
            <div className='header-solutions' style={{background: 'url("solutions-header.png")'}}>
                <div className='left-side'>
                    <h1>
                        RODRÍGUEZ
                    </h1>
                    <h4>SOLUCIONES EN LOGÍSTICA</h4>
                </div>
                <div className='right-side'>
                    <p>Hemos servido a la comunidad industrial y comercial de la región con Operaciones en San Diego, Tijuana y Ensenada durante 8 décadas; con el objetivo claro de garantizar el cumplimiento aduanero. Contamos con personal de amplia experiencia y nos distinguimos entre los mejores proveedores de este servicio por el alto nivel de profesionalismo y seguridad jurídica que brindamos a nuestros clientes. Ofrecemos servicios y soluciones de logística intregal que se adaptan para mover el mundo a tu favor.</p>
                    <img src="solutions-brands.png" alt="brands"/>
                </div>
            </div>
            <div className="slider">
                <a href="/#" onClick={(e) => backSlide(e)} className="arrow left"><img src="slider-left-arrow.png" alt="slide arrow"/></a>
                {items.map((item, index) => (
                    <div key={index} className={item.active ? 'slider-item active' : 'slider-item'} style={item.styles}>
                        {item.title}
                        {item.link}
                    </div>
                ))}
                <a href="/#" onClick={(e) => { nextSlide(e) }} className="arrow right"><img src="slider-right-arrow.png" alt="slide arrow"/></a>
                <ul className="bullets">
                    {items.map((item, index) => (<li onClick={(e) => changeItem(index)} key={index} className={item.active ? 'active' : ''} />))}
                </ul>
            </div>
        </div>
    );
}

export default Solutions;
