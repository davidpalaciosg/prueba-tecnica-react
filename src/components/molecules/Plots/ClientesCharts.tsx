import React from 'react';
import { SingleCliente, SingleTramo } from '../../../services/backend/backendTypes';
import { Container, Row, Col } from 'react-bootstrap';
import BarChartTramo from '../../atoms/Tramos/BarChartTramo';
import BarChartCliente from '../../atoms/Clientes/BarChartCliente';

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
              <BarChartCliente business={business} clientes={clientes} expenseType={expense}/>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
