import React, { useState, useEffect, ChangeEvent } from 'react';
import { SingleTramo } from '../../services/backend/backendTypes';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { getTramo } from '../../services/backend/backendServices';
import { transformTramos } from '../../services/backend/transformData';
import Datepicker from '../atoms/Datepicker';
import TableTramo from '../molecules/Tables/TableTramo';
import TramosCharts from '../molecules/Plots/TramosCharts';

export default function Tramos() {
    const [fechaInicial, setFechaInicial] = useState('2010-01-01');
    const [fechaFinal, setFechaFinal] = useState('2010-01-05');
    const [tramos, setTramos] = useState<SingleTramo[]>([]);

    const handleClick = async () => {
        const tramosResponses = await getTramo(fechaInicial, fechaFinal);
        const tramosConverted = transformTramos(tramosResponses);
        setTramos(tramosConverted);
    };

    const handleSortTramos = (sortedTramos: SingleTramo[]) => {
        setTramos(sortedTramos);
    };

    useEffect(() => {
        console.log('Tramos', tramos)
    },[tramos, fechaInicial, fechaFinal]);

    const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === 'Fecha inicial') {
            setFechaInicial(event.target.value);
        } else {
            setFechaFinal(event.target.value);
        }
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
            <Row>
                <Col>
                    {tramos.length > 0 ? (
                        <TableTramo tramos={tramos} handleSortTramos={handleSortTramos} />
                    ) : (
                        <p>No hay datos</p>
                    )}
                </Col>
            </Row>
            <Row>
                <Col>
                    {tramos.length > 0 ? (
                        <TramosCharts tramos={tramos} />
                    ) : (
                        <p>No hay datos</p>
                    )}
                </Col>
            </Row>
        </Container>
    );
}
