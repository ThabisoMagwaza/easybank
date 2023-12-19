'use client';
import Image from 'next/image';
import styled from 'styled-components';

import { COLORS } from '@/lib/constants';

function FeatureCard({ imgSrc, imgAlt, title, children }) {
  return (
    <Wrapper>
      <Image src={imgSrc} width={72} height={72} alt={imgAlt} />

      <Title>{title}</Title>

      <Content>{children}</Content>
    </Wrapper>
  );
}

const Content = styled.p`
  font-size: ${15 / 16}rem;
  color: ${COLORS.Secondary61};
`;

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  font-size: ${20 / 16}rem;
  color: ${COLORS.Secondary24};
  font-weight: 300;

  margin-top: 24px;
  margin-bottom: 16px;
`;

export default FeatureCard;
