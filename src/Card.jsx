import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <div style={{background: "red", padding: "6em", display: 'flex', gap: '2em',}}>
      <Card style={{ width: '25rem',
       }}>
        <Card.Img variant="top" src="./img/g1.jpg"  style={{height: '260px'}}/>
        <Card.Body>
          <Card.Title>Nike Shoe</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '25rem',
       }}>
        <Card.Img variant="top" src="./img/g5.jpg" style={{height: '260px'}} />
        <Card.Body>
          <Card.Title>Nike Shoe</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '25rem',
       }}>
        <Card.Img variant="top" src="./img/g3.jpg" style={{height: '260px'}} />
        <Card.Body>
          <Card.Title>Nike Shoe</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

    </div>
    
  );
}

export default BasicExample;