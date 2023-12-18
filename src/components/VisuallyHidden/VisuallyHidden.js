'use client';
import styled from 'styled-components';

function VisuallyHidden({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  position: absolute;
  width: 1;
  height: 1;
  margin: -1;
  padding: 0;
  border: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export default VisuallyHidden;
