'use client';
import styled from 'styled-components';
import { QUERIES } from '@/lib/constants';

function Heading1({ children }) {
  return <Heading>{children}</Heading>;
}

const Heading = styled.h1`
  font-size: ${40 / 16}rem;
  font-weight: 300;
  line-height: 1.1;

  @media ${QUERIES.tabletAndUp} {
    font-size: ${56 / 16}rem;
  }
`;

export default Heading1;
