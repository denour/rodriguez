import React, {useState} from 'react';
import './contact.scss';

const Contact: React.FC = () => {
    const [importation, setImportation] = useState(false);
    return (
        <div id="contacto" className="contact" style={{background: 'url("contact.png")'}}>
            <div>
                <h3>Visítanos</h3>
                <br/>
                <p><strong>Dirección</strong></p>
                <p>Blvd. Tercera Oeste 17500-C,</p>
                <p>Blvd. de las Bellas Artes 17500,</p>
                <p>Mesa de Otay, 22430 Tijuana, B.C.</p>
                <br/>
                <p><strong>Teléfono</strong></p>
                <p>Tel: <a href="tel:016646831022">01 664 683 1022</a></p>
                <p>Fax: 123-456-7890</p>
                <br/>
                <p><strong>Correo</strong></p>
                <p><a href="mailto:info@gruporodriguez.com">info@gruporodriguez.com</a></p>
                <br/>
                <form action="">
                    <div>
                        <input type="text" placeholder="Nombre"/>
                        <input type="text" placeholder="Teléfono"/>
                    </div>
                    <div>
                        <input type="text" placeholder="Correo"/>
                        <input type="text"  placeholder="Dirección"/>
                    </div>
                    <div>
                        <input className="large" type="text" placeholder="Compañia"/>
                    </div>
                    <div>
                        <textarea className="large" rows={6} placeholder="Mensaje"/>
                    </div>
                    <div className="subcontainer">
                        <input className="dates" type="date" placeholder="Fecha"/>
                        <div className="importacion">
                            <label className={!importation ? 'active' : ''}>
                                <input onChange={(e) => {setImportation(!importation) }} id="importacion" name="importacion" type="radio" checked={!importation}/>
                                Importación
                            </label>

                            <label className={importation ? 'active' : ''}>
                                <input onChange={(e) => {setImportation(!importation) }} id="exportacion"  name="importacion" type="radio" checked={importation}/>
                                Exportación
                            </label>
                        </div>
                    </div>

                    <button className="yellowButton">Programar Cita</button>
                    <button className="BlackButton">Enviar</button>
                </form>
            </div>
            <div className="right">
                <h3>¡Queremos <br/><strong>conocerte!</strong></h3>
                <p>Programa una sesión de asesoría y aprende de nuestros servicios con nuestro equipo de negocios. </p>
                <ul>
                    <li><a href="/#" target="_blank"><img width="14"  height="27" src="facebook.png" alt="facebook" /></a></li>
                    <li><a href="/#" target="_blank" ><img width="24"  height="24" src="linkedin.png" alt="Linkedin" /></a></li>
                </ul>
            </div>
        </div>
    );
}

export default Contact;
