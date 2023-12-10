
import Card from 'react-bootstrap/Card';

const MiCard = ({propsCard}) => {
  return (
    
      <Card style={{ width: '18rem' , backgroundColor: "rgb(235, 230, 221)" }}>
      <Card.Img variant="top" src={propsCard.image} />
      <Card.Body>
        <Card.Title>{propsCard.name}</Card.Title>
        <Card.Text>
          
        </Card.Text>
        <ul>
          <li>Species: {propsCard.species}</li>
          <li>Origin: {propsCard.origin.name} </li>
          <li>Status: {propsCard.status}</li>
          <li>Location:{propsCard.location.name} </li>
        </ul>

      </Card.Body>
    </Card>
    
  )
}

export default MiCard