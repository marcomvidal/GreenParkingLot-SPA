import { ListGroup } from "react-bootstrap";
import styled from "styled-components";
import { CarListGroupItemProps } from "../types";

const CarListGroupItem = styled(ListGroup.Item)<CarListGroupItemProps>`
  background-color: ${({ isSelected }: CarListGroupItemProps) => 
    isSelected ? 'var(--green)' : 'var(--white)' };

  color: ${({ isSelected }: CarListGroupItemProps) =>
    isSelected ? 'var(--white)' : 'var(--dark)' };
  
  &:hover {
    filter: brightness(95%);
  }
`;

export default CarListGroupItem;
