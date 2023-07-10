import React, { useState, ChangeEvent } from 'react';
import { Form } from 'react-bootstrap';

interface DatepickerProps {
  name: string;
  onChange: any;
}

export default function Datepicker({ name, onChange }: DatepickerProps) {

  let initialDate= name === "Fecha inicial" ? "2010-01-01" : "2010-01-05";
  
  const [selectedDate, setSelectedDate] = useState(initialDate);

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
    onChange(event); // Call the onChange prop to notify the parent component
  };

  return (
    <Form.Group>
      <Form.Label>{name}</Form.Label>
      <Form.Control
        type="date"
        placeholder={name}
        name={name}
        onChange={handleDateChange}
        value={selectedDate}
      />
    </Form.Group>
  );
}

