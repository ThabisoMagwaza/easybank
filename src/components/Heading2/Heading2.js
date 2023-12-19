'use client';
import styled from 'styled-components';

import { COLORS } from '@/lib/constants';

function Heading2({ children }) {
  return <Heading>{children}</Heading>;
}

const Heading = styled.h2`
  font-size: ${32 / 16}rem;
  font-weight: 300;
  color: ${COLORS.Secondary24};

  line-height: 1.1;
`;

export default Heading2;
