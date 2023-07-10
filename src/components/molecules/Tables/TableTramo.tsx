import React, { useState, useEffect } from 'react';
import { SingleTramo } from '../../../services/backend/backendTypes';
import { Table } from 'react-bootstrap';
import RowTableTramo from '../../atoms/RowTableTramo';
import { ArrowUpCircle, ArrowDownCircle } from 'react-bootstrap-icons';

//SASS
import './Tables.scss';

export default function TableTramo({
  tramos: parentTramos,
  setTramos: setParentTramos,
}: {
  tramos: SingleTramo[];
  setTramos: React.Dispatch<React.SetStateAction<SingleTramo[]>>;
}) {

  const [sortColumn, setSortColumn] = useState<keyof SingleTramo>('Linea');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  //Each time the sortColumn or sortDirection state changes, sort the tramos
  useEffect(() => {
    setParentTramos(sortedTramos);
    console.log('Tramos sorted: ', parentTramos);

  }, [sortColumn, sortDirection]);

  const handleSort = (column: keyof SingleTramo) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  // Sort the tramos according to the sortColumn and sortDirection state
  const sortedTramos = parentTramos.sort((a, b) => {
    const aValue = a[sortColumn] as string | number;
    const bValue = b[sortColumn] as string | number;
    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  const getSortIcon = (column: keyof SingleTramo) => {
    if (sortColumn === column) {
      if (sortDirection === 'asc') {
        return <ArrowUpCircle />; // Upward arrow icon
      } else {
        return <ArrowDownCircle /> // Downward arrow icon
      }
    }
    return null;
  };

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th onClick={() => handleSort('Linea')}>
            Linea {getSortIcon('Linea')}
          </th>
          <th onClick={() => handleSort('consumo')}>
            Consumo {getSortIcon('consumo')}
          </th>
          <th onClick={() => handleSort('costo')}>
            Costo {getSortIcon('costo')}
          </th>
          <th onClick={() => handleSort('perdidas')}>
            Pérdidas {getSortIcon('perdidas')}
          </th>
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
