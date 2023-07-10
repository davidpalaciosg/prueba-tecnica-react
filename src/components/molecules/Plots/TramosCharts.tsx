import React from 'react';
import { SingleTramo } from '../../../services/backend/backendTypes';
import { Container, Row, Col } from 'react-bootstrap';
import BarChartTramo from '../../atoms/Tramos/BarChartTramo';

export default function TramosCharts({ tramos }: { tramos: SingleTramo[] }) {
  return (
    <Container fluid>
      <Row>
        {tramos.map((tramo, index) => (
          <Col key={index} xs={12} sm={6} md={6} lg={5} xl={3}>
            <div style={{ width: '100%', height: '250px' }}>
              <BarChartTramo tramo={tramo} />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
