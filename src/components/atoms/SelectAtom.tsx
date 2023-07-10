import React from 'react'
import { Form } from 'react-bootstrap';
import { capitalize } from '../../utils/String';

interface SelectAtomProps {
    options: string[];
    onChange: any;
    name: string;
    label: string;
}

export default function SelectAtom({ options, onChange, name, label }: SelectAtomProps) {
    return (
      <Form.Group>
        <Form.Label htmlFor={name}>{label}</Form.Label>
        <Form.Select
          id={name}
          aria-label={name}
          name={name}
          onChange={onChange}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {capitalize(option)}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
    );
  }
