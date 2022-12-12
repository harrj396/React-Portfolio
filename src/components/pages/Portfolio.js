import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

function GroupExample() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="secondary">Go somewhere</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="secondary">Go somewhere</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://via.placeholder.com/800x600" />
        <Card.Body>
          <Card.Title>Project 3</Card.Title>
          <Card.Text>
            This is a placeholder for my third project currently in development.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="secondary">Go somewhere</Button>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;
