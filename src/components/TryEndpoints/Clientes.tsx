import React from 'react'
import { getCliente } from '../../services/backend/backendServices';
import { transformClientes } from '../../services/backend/transformData';
import { Button, Col, Container, Row } from 'react-bootstrap';

export default function Clientes() {

    const handleClick = async () => {
        const fechaInicial = "2010-01-01";
        const fechaFinal = "2012-05-30";
        const clienteResponses = await getCliente(fechaInicial, fechaFinal);
        const clientes = transformClientes(clienteResponses);
        console.log(clientes);
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Tramos</h1>
                    
                    <Button variant="secondary" onClick={handleClick}>Get Clientes</Button>
                </Col>
            </Row>
        </Container>
    )
}
