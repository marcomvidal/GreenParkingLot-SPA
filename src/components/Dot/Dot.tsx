import styled from 'styled-components';
import { DotProps } from './types';

const isSizeSmall = (props: DotProps) => (props.size === 'sm' ? '0.5rem' : '0.75rem');

const Dot = styled.div<DotProps>`
  height: ${isSizeSmall};
  width: ${isSizeSmall};
  background-color: ${props => props.bg || 'var(--gray)'};
  border-radius: 50%;
  display: inline-block;
`;

export default Dot;
