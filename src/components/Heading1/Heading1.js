'use client';
import styled from 'styled-components';

function Heading1({ children }) {
  return <Heading>{children}</Heading>;
}

const Heading = styled.h1`
  font-size: ${40 / 16}rem;
  font-weight: 300;
  line-height: 1.1;
`;

export default Heading1;
