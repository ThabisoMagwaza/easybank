'use client';
import styled from 'styled-components';

import { COLORS } from '@/lib/constants';

function Button({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.button`
  border: none;
  padding: 0 34px;
  height: 44px;
  background: ${COLORS.GradientPrimary};

  border-radius: 1000px;

  font-size: ${14 / 16}rem;
  font-weight: 700;
  color: ${COLORS.White};

  cursor: pointer;

  &:hover {
    background: linear-gradient(
        to right,
        hsl(0deg, 100%, 100%, 0.3),
        hsl(0deg, 100%, 100%, 0.3)
      ),
      ${COLORS.GradientPrimary};
  }
`;

export default Button;
