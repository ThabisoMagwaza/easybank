'use client';
import Image from 'next/image';
import styled from 'styled-components';

import { COLORS } from '@/lib/constants';

function Article({ imgSrc, imgAlt, author, title, children }) {
  return (
    <Wrapper>
      <Header>
        <ImageStyled src={imgSrc} width={600} height={400} alt={imgAlt} />
      </Header>
      <Content>
        <Author>{author}</Author>
        <Summary>
          <Title>{title}</Title>
          <Text>{children}</Text>
        </Summary>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  text-align: start;
  background: ${COLORS.White};
  border-radius: 5px;
  overflow: hidden;
`;

const Header = styled.header`
  height: 200px;
`;

const ImageStyled = styled(Image)`
  height: 100%;
`;

const Content = styled.main`
  padding: 25px 30px;
`;

const Author = styled.p`
  font-size: ${10 / 16}rem;
  color: ${COLORS.Secondary61};
  margin-bottom: 8px;
`;

const Title = styled.h4`
  font-size: 1rem;
  color: ${COLORS.Secondary24};
  font-weight: 300;
  margin-bottom: 8px;
`;

const Text = styled.p`
  font-size: ${13 / 16}rem;
  color: ${COLORS.Secondary61};

  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

const Summary = styled.div`
  height: 120px;
`;

export default Article;
