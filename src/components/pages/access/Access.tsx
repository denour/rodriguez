import React from 'react';
import './access.scss';

const Access: React.FC = () => {
    return (
        <div className="access" id="acceso">
            <div className="app-container">
                <h2>APP <strong>360</strong></h2>
                <img src="access.png" alt=""/>
                <div>
                    <p>
                        <strong> - APP 360:</strong><br/>
                        Integra el seguimiento del proceso de despacho, presenta datos estadísticos de sus operaciones considerando la etapa de revisión de mercancías y la descarga de archivos que conforman el Expediente Electrónico, entre otros beneficios.<br/>
                        <strong> - APP CTPAT</strong><br/>
                        <strong> - APP PORTAL CLIENTES</strong>
                    </p>
                </div>
            </div>
            <div className="people">
                <div className="item">
                    <div className="normal">
                        <h3>Rancho<br/>
                            Don Juanito</h3>
                        <img src="rancho-juanito.png" width={220} alt="Rancho Juanito"/>
                    </div>
                    <div className="hovered">
                        <img src="quotes.png" alt="Quotes"/>
                        <p>En situaciones extraordinarias. hemos comprobado que <strong>Rodríguez</strong> nos da un excelente servicio. Es notable su enfoque para atendernos cada vez mejor.</p>
                    </div>
                </div>
                <div className="item">
                    <div className="normal">
                        <h3>St. John <br/>
                            Healthcare</h3>
                        <img src="quotes.png" alt="Quotes"/>
                    </div>
                    <div className="hovered">
                        <img src="quotes.png" alt="Quotes"/>
                        <p>Cuando cambiamos a <strong>Rodríguez</strong> notamos la diferencia, nuestro desempeño mejoró y nuestras incidencias se eliminaron. Es una agencia segura.”</p>
                    </div>
                </div>
                <div className="item">
                    <div className="normal">
                        <h3>Distribuidora de
                            Materiales Rojas</h3>
                        <img src="rojas.png" width={200} alt="Rojas"/>
                    </div>
                    <div className="hovered">
                        <img src="quotes.png" alt="Quotes"/>
                        <p>En <strong>Rodríguez</strong> hay personas experimentadas y con capacidad probada, sus soluciones mejoran nuestros proyectos de negocio.”</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Access;
