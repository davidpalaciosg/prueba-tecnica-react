import React, { useRef, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { getTramo } from '../../services/backend/backendServices';
import { transformTramos } from '../../services/backend/transformData';
import Datepicker from '../atoms/Datepicker';
import { formatDate } from '../../utils/Dates';

export default function Tramos() {

    const [fechaInicial, setFechaInicial] = useState('');
    const [fechaFinal, setFechaFinal] = useState('');

    const printDates = () => {
        console.log('Fecha inicial: ', fechaInicial);
        console.log('Fecha final: ', fechaFinal);
    };

    const handleClick = async () => {
        printDates();
        const tramosResponses = await getTramo(fechaInicial, fechaFinal);
        const tramos = transformTramos(tramosResponses);
        console.log(tramos);
    };

    const handleFechaInicial = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setFechaInicial(value);
    };

    const handleFechaFinal = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setFechaFinal(value);
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Tramos</h1>
                    <Button variant="primary" onClick={handleClick}>
                        Get Tramos
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Datepicker name="Fecha inicial" onChange={handleFechaInicial} />
                </Col>
                <Col>
                    <Datepicker name="Fecha final" onChange={handleFechaFinal} />
                </Col>
            </Row>
        </Container>
    );
}
