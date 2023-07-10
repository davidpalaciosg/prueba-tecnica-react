import React, { useState, ChangeEvent, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { getTramo } from '../../services/backend/backendServices';
import { transformTramos } from '../../services/backend/transformData';
import Datepicker from '../atoms/Datepicker';
import { formatDate } from '../../utils/Dates';

export default function Tramos() {

    const [fechaInicial, setFechaInicial] = useState("2010-01-01");
    const [fechaFinal, setFechaFinal] = useState("2010-01-05");

    useEffect(() => {
        printDates();
    }, [fechaInicial, fechaFinal]);

    const printDates = () => {
        console.log('Fecha inicial: ', fechaInicial);
        console.log('Fecha final: ', fechaFinal);
    };

    const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log("Selected date:", event.target.value);
        if (event.target.name === "Fecha inicial") {
            setFechaInicial(event.target.value);
        }
        else {
            setFechaFinal(event.target.value);
        }
    };

    const handleClick = async () => {
        const tramosResponses = await getTramo(fechaInicial, fechaFinal);
        const tramos = transformTramos(tramosResponses);
        console.log(tramos);
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
                    <Datepicker name="Fecha inicial" onChange={handleDateChange} />
                </Col>
                <Col>
                    <Datepicker name="Fecha final" onChange={handleDateChange} />
                </Col>
            </Row>
        </Container>
    );
}
