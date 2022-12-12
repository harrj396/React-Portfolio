import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

function GroupExample() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://via.placeholder.com/800x600" />
        <Card.Body>
          <Card.Title>FoodFind</Card.Title>
          <Card.Text>
            This project connects to two remote APIs and will search for two random related recipes for you to try.  I have also attached a custom URL to the site for easier access.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="secondary" href="https://foodfind.tech/">FoodFind</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://via.placeholder.com/800x600" />
        <Card.Body>
          <Card.Title>Rosé to Rough</Card.Title>
          <Card.Text>
            This website was created by a team of four people.  It is a wine review website connecting to a MySQL database I operate of over 2000 independant wine reviews.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="secondary" href="https://rose-to-rough.herokuapp.com/">Rosé to Rouch</Button>
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
        <Button variant="secondary" href="https://github.com/harrj396" >GitHub</Button>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;
