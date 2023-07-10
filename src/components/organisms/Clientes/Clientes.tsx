import React, { useState, ChangeEvent } from 'react';
import { SingleCliente, SingleTramo } from '../../../services/backend/backendTypes';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { getCliente, getTramo } from '../../../services/backend/backendServices';
import { transformClientes, transformTramos } from '../../../services/backend/transformData';
import Datepicker from '../../atoms/Datepicker';
import AlertAtom from '../../atoms/AlertAtom';
import { isBeforeString } from '../../../utils/Dates';
import { businessTypes } from '../../../services/backend/backendTypes';

//SASS
import './Clientes.scss';
import SelectAtom from '../../atoms/SelectAtom';

export default function Clientes() {
    
    // Datepickers
    const [initialDate, setInitialDate] = useState('2010-01-01');
    const [finalDate, setFinalDate] = useState('2010-01-05');

    //Business select
    const [selectedBusiness, setSelectedBusiness] = useState('industrial');

    // Alert message
    const [showAlert, setshowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('Error');


    // API Data
    const [clientes, setClientes] = useState<SingleCliente[]>([]);

    // Get data from API
    const handleButtonClick = async () => {

        //Check if the initial date is before the final date
        if (!isBeforeString(initialDate, finalDate)) {
            setshowAlert(true);
            setAlertMessage('La fecha inicial debe ser anterior a la fecha final');
            return;
        }

        setshowAlert(false);
        setAlertMessage('');

        const clientesResponses = await getCliente(initialDate, finalDate);
        const clientesConverted = transformClientes(clientesResponses);
        setClientes(clientesConverted);
        console.log(clientesConverted);
    };

    // Sort tramos from table child
    const handleSortClientes = (sortedClientes: SingleCliente[]) => {
        setClientes(sortedClientes);
    };

    // Update initial and final date when change
    const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === 'Fecha inicial') {
            setInitialDate(event.target.value);
        } else {
            setFinalDate(event.target.value);
        }
    };

    //Update business when change
    const handleBusinessChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedBusiness(event.target.value);
    };

    return (
        <Container className='clientesContainer'>
            {/* Title and button */}
            <Row>
                <Col>
                    <h1>Clientes</h1>
                    <h5>POST: clientes/</h5>
                    <Button variant="primary" onClick={handleButtonClick} className='apiButton'>
                        Obtener info clientes
                    </Button>
                </Col>
            </Row>
            {/* Alert */}
            <Row>
                <Col>
                    <AlertAtom variant="danger" message={alertMessage} show={showAlert}/>
                </Col>
            </Row>
            {/* Datepickers and selector */}
            <Row className='datepickers'>
                <Col>
                    <Datepicker name="Fecha inicial" onChange={handleDateChange} />
                </Col>
                <Col>
                    <Datepicker name="Fecha final" onChange={handleDateChange} />
                </Col>
                <Col>
                    <SelectAtom label='Tipo de negocio' options={businessTypes} onChange={handleBusinessChange} name='Tipo de negocio' />
                </Col>
            </Row>
            {/* Tramos table */}
            <Row>
                <Col>
                    {clientes.length > 0 ? (
                        // <TableTramo tramos={clientes} handleSortTramos={handleSortTramos} />
                        <p>Clientes</p>
                    ) : (
                        <p></p>
                    )}
                </Col>
            </Row>
            {/* Tramos Charts */}
            <Row>
                <Col>
                    {clientes.length > 0 ? (
                        // <TramosCharts tramos={clientes} />
                        <p>Clientes charts</p>
                    ) : (
                        <p></p>
                    )}
                </Col>
            </Row>
        </Container>
    );
}
