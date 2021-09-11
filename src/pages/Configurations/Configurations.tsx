import { Card, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "store/types";

const Configurations = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <Card>
      <Card.Header>Configurations</Card.Header>
      <Card.Body>
        <p>You are currently logged in as {user.name} since TIME.</p>
        <ListGroup>
          <ListGroup.Item>Currency is BRL</ListGroup.Item>
          <ListGroup.Item>Base tax is R$ 10 / hour</ListGroup.Item>
          <ListGroup.Item>Password is ...</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default Configurations;
