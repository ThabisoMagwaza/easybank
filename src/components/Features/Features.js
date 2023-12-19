'use client';
import styled from 'styled-components';

import { COLORS } from '@/lib/constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Heading2 from '../Heading2';
import FeatureCard from '../FeatureCard';

function Features() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Header>
          <Heading2>Why choose Easybank?</Heading2>
          <SubHeading>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </SubHeading>
        </Header>

        <FeaturesList>
          <FeatureCard
            imgSrc="/images/icon-online.svg"
            imgAlt="An illustration demonstrating the card payment fearure"
            title="Online Banking"
          >
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </FeatureCard>
          <FeatureCard
            imgSrc="/images/icon-budgeting.svg"
            imgAlt="An illustration demonstrating the simple budgeting feature"
            title="Simple Budgeting"
          >
            See exactly where your money goes each month. Receive notifications
            when you&nbsp;re close to your hitting limits.
          </FeatureCard>
          <FeatureCard
            imgSrc="/images/icon-onboarding.svg"
            imgAlt="An illustration demonstrating the fast onboarding feature"
            title="Fast Onboarding"
          >
            We don&nbsp;t do branches. Open your account in minutes online and
            start taking control of your finances right away.
          </FeatureCard>
          <FeatureCard
            imgSrc="/images/icon-api.svg"
            imgAlt="An illustration demonstrating the open API feature"
            title="Open API"
          >
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </FeatureCard>
        </FeaturesList>
      </ContentWrapper>
    </Wrapper>
  );
}

const ContentWrapper = styled(MaxWidthWrapper)`
  display: flex;
  flex-direction: column;
  gap: 56px;
`;

const FeaturesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 14px;

  text-align: center;
`;

const SubHeading = styled.p`
  color: ${COLORS.Secondary61};
  font-size: ${15 / 16}rem;
`;

const Wrapper = styled.section`
  background: ${COLORS.Secondary96};

  padding: 64px 0;
`;

export default Features;
