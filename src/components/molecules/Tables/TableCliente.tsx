import React, { useState, useEffect } from 'react';
import { SingleCliente } from '../../../services/backend/backendTypes';
import { Table } from 'react-bootstrap';
import { ArrowUpCircle, ArrowDownCircle } from 'react-bootstrap-icons';

//SASS
import './Tables.scss';
import RowTableCliente from '../../atoms/Clientes/RowTableCliente';

interface TableClientesProps {
  clientes: SingleCliente[];
  handleSortClientes: (sortedClientes: SingleCliente[]) => void;
  business: string;
}

export default function TableClientes({clientes, handleSortClientes, business}: TableClientesProps) {

  const [sortColumn, setSortColumn] = useState<keyof SingleCliente>('Linea');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    // Sort the clientes according to the sortColumn and sortDirection state
    const sortedClientes = clientes.slice().sort((a, b) => {
      const aValue = a[sortColumn] as string | number;
      const bValue = b[sortColumn] as string | number;
      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
    handleSortClientes(sortedClientes); // Pass the sorted clientes to the parent component
  }, [sortColumn, sortDirection]);

  const handleSort = (column: keyof SingleCliente) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const getSortIcon = (column: keyof SingleCliente) => {
    if (sortColumn === column) {
      if (sortDirection === 'asc') {
        return <ArrowUpCircle />; // Upward arrow icon
      } else {
        return <ArrowDownCircle /> // Downward arrow icon
      }
    }
    return null;
  };

  const getClientKey = (expenseType:string) => {
    return `${expenseType}_${business}`;
  };

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th onClick={() => handleSort('Linea')}>
            Linea {getSortIcon('Linea')}
          </th>
          <th onClick={() => handleSort(getClientKey('consumo'))}>
            Consumo {getSortIcon(getClientKey('consumo'))}
          </th>
          <th onClick={() => handleSort(getClientKey('costo'))}>
            Costo {getSortIcon(getClientKey('costo'))}
          </th>
          <th onClick={() => handleSort(getClientKey('perdidas'))}>
            Pérdidas {getSortIcon(getClientKey('perdidas'))}
          </th>
        </tr>
      </thead>
      <tbody>
        {clientes.map((cliente, index) => (
          <RowTableCliente key={index} cliente={cliente} business={business}/>
        ))}
      </tbody>
    </Table>
  );
}
