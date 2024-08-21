import React from 'react';
import { Button } from 'react-bootstrap';

/**
 * IncrementButton component that triggers an increment in the counter.
 *
 * Props:   
 * - onIncrement (function): Function to call when the button is clicked.
 */
const IncrementButton = ({ onIncrement }) => {
  return (
    <Button variant="primary" onClick={onIncrement}>
      CLICKEAA
    </Button>
  );
};

export default IncrementButton;