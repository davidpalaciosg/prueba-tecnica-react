import React from 'react';
import { SingleCliente } from '../../../services/backend/backendTypes';

interface RowTableTramoProps {
  cliente: SingleCliente;
  business: string;
}

export default function RowTableCliente({ cliente, business }: RowTableTramoProps) {
  const getInfoCliente = () => {
    switch (business) {
      case 'residencial':
        return (
          <tr>
            <td>{cliente.Linea}</td>
            <td>{cliente.consumo_residencial}</td>
            <td>{cliente.costo_residencial}</td>
            <td>{cliente.perdidas_residencial}</td>
          </tr>
        );
      case 'industrial':
        return (
          <tr>
            <td>{cliente.Linea}</td>
            <td>{cliente.consumo_industrial}</td>
            <td>{cliente.costo_industrial}</td>
            <td>{cliente.perdidas_industrial}</td>
          </tr>
        );
      case 'comercial':
        return (
          <tr>
            <td>{cliente.Linea}</td>
            <td>{cliente.consumo_comercial}</td>
            <td>{cliente.costo_comercial}</td>
            <td>{cliente.perdidas_comercial}</td>
          </tr>
        );
      default:
        return (
          <tr>
            <td>{cliente.consumo_residencial}</td>
            <td>{cliente.costo_residencial}</td>
            <td>{cliente.perdidas_residencial}</td>
          </tr>
        );
    }
  };

  return <>{getInfoCliente()}</>;
}
