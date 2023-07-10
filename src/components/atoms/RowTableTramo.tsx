import React from 'react'
import { SingleTramo } from '../../services/backend/backendTypes'


export default function RowTableTramo({ tramo }: { tramo: SingleTramo }) {
  return (
    <tr>
      <td>{tramo.Linea}</td>
      <td>{tramo.consumo}</td>
      <td>{tramo.costo}</td>
      <td>{tramo.perdidas}</td>
    </tr>
  )
}
