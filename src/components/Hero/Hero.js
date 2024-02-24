'use client';
import Image from 'next/image';
import styled from 'styled-components';

import { COLORS, QUERIES } from '@/lib/constants';

import Heading1 from '../Heading1';
import Button from '../Button';
import MaxWidthWrapper from '../MaxWidthWrapper';

function Hero() {
  return (
    <Wrapper>
      <HeroImageWrapper>
        <HeroImage
          src="/images/image-mockups.png"
          width={767}
          height={939}
          alt=""
          priority={true}
        />
      </HeroImageWrapper>

      <MaxWidthWrapper>
        <ContentWrapper>
          <Heading1>Next generation digital banking</Heading1>
          <Paragraph>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </Paragraph>

          <Button>Request Invite</Button>
        </ContentWrapper>
      </MaxWidthWrapper>
    </Wrapper>
  );
}

const HeroImageWrapper = styled.div`
  @media ${QUERIES.tabletAndUp} {
    position: absolute;
    top: 80px;
    right: 0;
  }
`;

const Paragraph = styled.p`
  color: ${COLORS.Secondary61};
  font-size: ${15 / 16}rem;

  padding-top: 16px;
  padding-bottom: 32px;

  @media ${QUERIES.tabletAndUp} {
    font-size: ${18 / 16}rem;
  }
`;

const Wrapper = styled.header`
  padding-bottom: 88px;
  background-image: url('/images/bg-intro-mobile.svg');
  background-repeat: no-repeat;
  background-size: contain;

  @media ${QUERIES.tabletAndUp} {
    padding-top: 170px;
    padding-bottom: 170px;

    background-image: url('/images/bg-intro-desktop.svg');
    background-position: 45vw -250px;
    background-size: revert;
  }
`;

const ContentWrapper = styled.div`
  margin-top: -116px;
  text-align: center;

  margin-left: auto;
  margin-right: auto;

  @media ${QUERIES.tabletAndUp} {
    margin: 0;
    padding: 0;

    text-align: left;
    max-width: 447px;
  }
`;

const HeroImage = styled(Image)`
  height: 100%;
  object-fit: cover;
  object-position: 100% -125px;

  @media ${QUERIES.tabletAndUp} {
    object-position: 130px -125px;
  }
`;

export default Hero;
