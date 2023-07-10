import React, { useState, useEffect, ChangeEvent } from 'react';
import { SingleTramo } from '../../services/backend/backendTypes';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { getTramo } from '../../services/backend/backendServices';
import { transformTramos } from '../../services/backend/transformData';
import Datepicker from '../atoms/Datepicker';
import TableTramo from '../molecules/Tables/TableTramo';
import TramosCharts from '../molecules/Plots/TramosCharts';
import AlertAtom from '../atoms/AlertAtom';
import { isBeforeString } from '../../utils/Dates';

export default function Tramos() {
    const [initialDate, setInitialDate] = useState('2010-01-01');
    const [finalDate, setFinalDate] = useState('2010-01-05');

    // Alert message
    const [showAlert, setshowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('Error');


    // API Data
    const [tramos, setTramos] = useState<SingleTramo[]>([]);

    const handleButtonClick = async () => {

        //Check if the initial date is before the final date
        if (!isBeforeString(initialDate, finalDate)) {
            setshowAlert(true);
            setAlertMessage('La fecha inicial debe ser anterior a la fecha final');
            return;
        }

        setshowAlert(false);
        setAlertMessage('');

        const tramosResponses = await getTramo(initialDate, finalDate);
        const tramosConverted = transformTramos(tramosResponses);
        setTramos(tramosConverted);
    };

    const handleSortTramos = (sortedTramos: SingleTramo[]) => {
        setTramos(sortedTramos);
    };

    const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === 'Fecha inicial') {
            setInitialDate(event.target.value);
        } else {
            setFinalDate(event.target.value);
        }
    };

    return (
        <Container>
            {/* Title and button */}
            <Row>
                <Col>
                    <h1>Tramos</h1>
                    <Button variant="primary" onClick={handleButtonClick}>
                        Obtener info tramos
                    </Button>
                </Col>
            </Row>
            {/* Alert */}
            <Row>
                <Col>
                    <AlertAtom variant="danger" message={alertMessage} show={showAlert} />
                </Col>
            </Row>
            {/* Datepickers */}
            <Row>
                <Col>
                    <Datepicker name="Fecha inicial" onChange={handleDateChange} />
                </Col>
                <Col>
                    <Datepicker name="Fecha final" onChange={handleDateChange} />
                </Col>
            </Row>
            {/* Tramos table */}
            <Row>
                <Col>
                    {tramos.length > 0 ? (
                        <TableTramo tramos={tramos} handleSortTramos={handleSortTramos} />
                    ) : (
                        <p>No hay datos</p>
                    )}
                </Col>
            </Row>
            {/* Tramos Charts */}
            <Row>
                <Col>
                    {tramos.length > 0 ? (
                        <TramosCharts tramos={tramos} />
                    ) : (
                        <p></p>
                    )}
                </Col>
            </Row>
        </Container>
    );
}
