import React from 'react';
import { SingleCliente, } from '../../../services/backend/backendTypes';
import { Container, Row, Col } from 'react-bootstrap';
import LineChartCliente from '../../atoms/Clientes/LineChartCliente';

interface ClientesChartsProps {
  clientes: SingleCliente[];
  business: string;
  expenseType: string[];
}


export default function ClientesCharts({ clientes, business, expenseType }: ClientesChartsProps) { 
  return (
    <Container fluid>
      <Row>
        {expenseType.map((expense, index) => (
          <Col key={index} xs={12} sm={12} md={12} lg={12} xl={12}>
            <div style={{ width: '100%', height: '300px' }}>
              <LineChartCliente business={business} clientes={clientes} expenseType={expense}/>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
