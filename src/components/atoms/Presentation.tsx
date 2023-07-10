import React from 'react'
import { Container, Row, Col, } from 'react-bootstrap'

//SASS
import './atomsStyle.scss';
import { Github, Linkedin } from 'react-bootstrap-icons';

export default function Presentation() {
    return (
        <Container className='presentation'>
            <Row>
                <Col>
                    <h3>Prueba técnica React: PeakU</h3>
                    <h4>David Enrique Palacios García</h4>
                    <a href='mailto:paladavid@hotmail.com'>paladavid@hotmail.com</a> <br/>
                    <a href='tel:+573004988952'>+57 300 498 8952</a>
                    <ul className='social-media'>
                        <li className='list-inline-item'><a href='https://www.linkedin.com/in/david-palaciosg/' target='_blank' rel='noreferrer'><Linkedin /></a></li>
                        <li className='list-inline-item'><a href='https://github.com/davidpalaciosg/' target='_blank' rel='noreferrer'><Github /></a></li>

                    </ul>
                    <h5>Herramientas utilizadas</h5>
                    <ul>
                        <li>React JS + Typescript</li>
                        <li>React Bootstrap + Icons</li>
                        <li>ChartJS (React)</li>
                        <li>Axios: peticiones HTTP </li>
                        <li> Sass: estilos</li>
                    </ul>
                    <h5>Consideraciones</h5>
                    <ul>
                        <li>El backend se encuentra disponible en el siguiente enlace: 
                            <a href='https://github.com/RancesBernalInfoDesign/pruebatecnicainfodesignback'
                                target='_blank' rel='noreferrer'> GitHub</a>
                        </li>
                        <li>A partir de los botones se encadenan las peticiones HTTP y con la información obtenida se crean las tablas y los gráficos.</li>
                        <li><b>IMPORTANTE: </b>Las tablas permiten ordenamiento dinámico tocando el nombre de la columna.</li>
                    </ul>


                </Col>
            </Row>
        </Container>
    )
}
