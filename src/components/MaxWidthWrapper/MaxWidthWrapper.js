'use client';
import styled from 'styled-components';

function MaxWidthWrapper({ children, ...delegated }) {
  return <Wrapper {...delegated}>{children}</Wrapper>;
}

const Wrapper = styled.div`
  max-width: ${1110 + 24 * 2}px;
  margin: 0 auto;
  padding: 0 24px;
`;

export default MaxWidthWrapper;
