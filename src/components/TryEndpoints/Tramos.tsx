import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { getTramo } from '../../services/backend/backendServices'
import { transformTramos } from '../../services/backend/transformData';

export default function Tramos() {

    const handleClick = async () => {
        const fechaInicial = "2010-01-01";
        const fechaFinal = "2012-05-30";

        const tramosResponses = await getTramo(fechaInicial, fechaFinal);
        const tramos = transformTramos(tramosResponses);
        console.log(tramos);
    }
  return (
    <Container>
        <Row>
            <Col>
                <h1>Tramos</h1>
                <Button variant="primary" onClick={handleClick}>Get Tramos</Button>
            </Col>
        </Row>
    </Container>
  )
}
