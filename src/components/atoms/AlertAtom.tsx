import React from 'react'
import { Alert } from 'react-bootstrap';

interface AlertProps {
    variant: string;
    message: string;
    show: boolean;
}

export default function AlertAtom({variant, message, show}: AlertProps) {
  return (
    <Alert variant={variant} show={show}>
        {message}
    </Alert>
  )
}
