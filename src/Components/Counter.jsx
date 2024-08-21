import React from 'react';
import { Card } from 'react-bootstrap';

/**
 * Counter component that displays the current count.
 *
 * Props:
 * - count (number): The current value of the counter.
 */
const Counter = ({ count }) => {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>Counter</Card.Title>
        <Card.Text>
          la cantidad total de clicks es: <strong>{count}</strong>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Counter;