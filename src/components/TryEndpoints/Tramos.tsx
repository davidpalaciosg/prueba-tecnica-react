import React, { useState, ChangeEvent, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { getTramo } from '../../services/backend/backendServices';
import { transformTramos } from '../../services/backend/transformData';
import { SingleTramo } from '../../services/backend/backendTypes'
import Datepicker from '../atoms/Datepicker';
import { formatDate } from '../../utils/Dates';
import TableTramo from '../molecules/Tables/TableTramo';

export default function Tramos() {

    const [fechaInicial, setFechaInicial] = useState("2010-01-01");
    const [fechaFinal, setFechaFinal] = useState("2010-01-05");

    //API Data
    const [tramos, setTramos] = useState<SingleTramo[]> ([]);

    const handleClick = async () => {
        //Call the API
        const tramosResponses = await getTramo(fechaInicial, fechaFinal);
        //Transform the data into SingleTramo[]
        const tramosConverted = transformTramos(tramosResponses);
        setTramos(tramosConverted);
    };
    
    useEffect(() => {
        printDates();
    }, [fechaInicial, fechaFinal, tramos]);


    const printDates = () => {
        console.log('Fecha inicial: ', fechaInicial);
        console.log('Fecha final: ', fechaFinal);
        console.log('Tramos: ', tramos);
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
                {tramos.length > 0 ? <TableTramo tramos={tramos} setTramos={setTramos} /> : (<p>No hay datos</p>)}
                </Col>
            </Row>
        </Container>
    );
}
