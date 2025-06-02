import React from 'react';
import './Us.scss';

const Us: React.FC = () => {
    return (
        <div className='us' id="nosotros">
                <div className="rows">
                        <div className='circle-item'>
                        <p className='light'>personal</p>
                        <hr/>
                        <p className='dark'>extraordinario</p>
                        <img src="acceso1.png" alt=""/>
                    </div>
                    <div className='circle-item'>
                        <p className='light'>tecnología</p>
                        <hr/>
                        <p className='dark'>exclusiva</p>
                        <img src="acceso2.png" alt=""/>
                    </div>
                    <div className='circle-item'>
                        <p className='light'>servicio</p>
                        <hr/>
                        <p className='dark'>excepcional</p>
                        <img src="acceso3.png" alt=""/>
                    </div>
                </div>
                <h1>EXPONENCIAMOS</h1>
                <div className='center-header'>
                   <p className='gradient'>TU NEGOCIO CON SOLUCIONES EFECTIVAS</p>
                   <p className='line-heighten'>Creemos en resultados eficientes y efectivos. En grupo Rodriguez nos esforzamos para mover el mundo a tu favor mediante nuestra formula de servicio (EX4) que respaldan nuestro compromiso con nuestros clientes a través de 3 componentes que garantizan Exponenciar tu negocio4</p>
               </div>
        </div>
    );
}

export default Us;
