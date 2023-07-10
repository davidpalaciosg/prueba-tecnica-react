import React, { useState } from 'react';
import { SingleTramo } from '../../services/backend/backendTypes';
import { Table } from 'react-bootstrap';
import RowTableTramo from '../atoms/RowTableTramo';

export default function TableTramo({ tramos }: { tramos: SingleTramo[] }) {

    const [sortColumn, setSortColumn] = useState<keyof SingleTramo>('Linea');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

    const handleSort = (column: keyof SingleTramo) => {
        if (sortColumn === column) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortColumn(column);
            setSortDirection('asc');
        }
    };

    const sortedTramos = tramos.sort((a, b) => {
        const aValue = a[sortColumn] as string | number;
        const bValue = b[sortColumn] as string | number;
        if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
        return 0;
    });

    return (
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th onClick={() => handleSort('Linea')}>Linea</th>
                    <th onClick={() => handleSort('consumo')}>Consumo</th>
                    <th onClick={() => handleSort('costo')}>Costo</th>
                    <th onClick={() => handleSort('perdidas')}>Pérdidas</th>
                </tr>
            </thead>
            <tbody>
                {sortedTramos.map((tramo, index) => (
                    <RowTableTramo key={index} tramo={tramo} />
                ))}
            </tbody>
        </Table>
    );
}
