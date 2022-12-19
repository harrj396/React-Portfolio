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
        <Button variant="secondary" href="https://foodfind.tech/" target="_blank">FoodFind</Button>
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
        <Button variant="secondary" href="https://rose-to-rough.herokuapp.com/" target="_blank">Rosé to Rouch</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://via.placeholder.com/800x600" />
        <Card.Body>
          <Card.Title>Jubilee</Card.Title>
          <Card.Text>
            This project will allow you to create a custom vinyl record by connecting to the Spotify API.  You're able to sign in and save albums, which will then connect to the stripe API and allow for purchases.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="secondary" href="https://jubilee.herokuapp.com/" target="_blank" >GitHub</Button>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;
