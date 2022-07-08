import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Proposal() {
  return (
    <Card style={{ width: '18rem' }}>      
      <Card.Body>
        <Card.Title>Propsal Title</Card.Title>
        <Card.Text>
          Propasl description
        </Card.Text>
        <Button variant="primary">Up Vote</Button>
        <Button variant="danger">Down Vote</Button>
      </Card.Body>
    </Card>
  );
}

export default Proposal;
