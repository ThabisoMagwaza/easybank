'use client';
import Image from 'next/image';
import styled from 'styled-components';

import { COLORS } from '@/lib/constants';

import Heading1 from '../Heading1';
import Button from '../Button';

function Hero() {
  return (
    <Wrapper>
      <Header>
        <HeroImage
          src="/images/image-mockups.png"
          width={767}
          height={939}
          alt=""
          priority={true}
        />
      </Header>

      <ContentWrapper>
        <Heading1>Next generation digital banking</Heading1>
        <Paragraph>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </Paragraph>

        <Button>Request Invite</Button>
      </ContentWrapper>
    </Wrapper>
  );
}

const Paragraph = styled.p`
  color: ${COLORS.Secondary61};
  font-size: ${15 / 16}rem;

  padding-top: 16px;
  padding-bottom: 32px;
`;

const Wrapper = styled.section`
  padding-bottom: 88px;
`;

const ContentWrapper = styled.div`
  margin-top: -116px;
  text-align: center;

  margin-left: auto;
  margin-right: auto;
  padding: 0 24px;
`;

const Header = styled.header`
  background-image: url('/images/bg-intro-mobile.svg');
  background-repeat: no-repeat;
  background-position-y: -75px;
  background-size: 100% 100%;

  padding: 0 12px;

  display: flex;
  justify-content: center;
`;

const HeroImage = styled(Image)`
  height: 100%;
  object-fit: cover;
  object-position: 100% -125px;
`;

export default Hero;
