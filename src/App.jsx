import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Counter from './Components/Counter';
import IncrementButton from './Components/IncrementButton';

/**
 * Main App component that manages the state and renders the Counter
 * and IncrementButton components.
 */
function App() {
  // State to hold the current count value
  const [count, setCount] = useState(0);
  const [isFirstClick, setIsFirstClick] = useState(true); // State to track the first click

  // Function to increment the count
  const handleIncrement = () => {
    setCount(count + 1);

    // Show alert only on the first click
    if (isFirstClick) {
      alert("Primer click :)");
      setIsFirstClick(false); // Update state so alert doesn't show on subsequent clicks
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Counter count={count} />
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-3">
        <Col md="auto">
          <IncrementButton onIncrement={handleIncrement} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
