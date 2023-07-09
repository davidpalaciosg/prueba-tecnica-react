import React, { useRef, ChangeEvent } from 'react';
import { Form } from 'react-bootstrap';

interface DatepickerProps {
  name: string;
  onChange: any;
}

export default function Datepicker({ name, onChange }: DatepickerProps) {
  return (
    <Form.Group>
      <Form.Label>{name}</Form.Label>
      <Form.Control
        type="date"
        placeholder="Fecha Inicial"
        name={name}
        onChange={onChange}
      />
    </Form.Group>
  );
}
