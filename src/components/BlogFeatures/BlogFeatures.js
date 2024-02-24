'use client';
import styled from 'styled-components';
import Heading2 from '../Heading2';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Article from '../Article';
import { QUERIES } from '@/lib/constants';

function BlogFeatures() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Heading2>Latest Articles</Heading2>

        <BlogsList>
          <Article
            imgSrc="/images/image-currency.jpg"
            imgAlt="A montage of money with different currencies"
            author="By Claire Robinson"
            title="Receive money in any currency with no fees"
          >
            The world is getting smaller and we&apos;re becoming more mobile. So
            why should you be forced to only receive money in a single …
          </Article>
          <Article
            imgSrc="/images/image-restaurant.jpg"
            imgAlt="Dining in a fine restaurant"
            author="By Wilson Hutton"
            title="Treat yourself without worrying about money"
          >
            Our simple budgeting feature allows you to separate out your
            spending and set realistic limits each month. That means you …
          </Article>
          <Article
            imgSrc="/images/image-plane.jpg"
            imgAlt="An earoplane flying throung a beautiful sunset"
            author="By Wilson Hutton"
            title="Take your Easybank card wherever you go"
          >
            We want you to enjoy your travels. This is why we don&apos;t charge
            any fees on purchases while you&apos;re abroad. We&apos;ll even show
            you …
          </Article>
          <Article
            imgSrc="/images/image-confetti.jpg"
            imgAlt="Confetti celebrations"
            author="By Claire Robinson"
            title="Our invite-only Beta accounts are now live!"
          >
            After a lot of hard work by the whole team, we&apos;re excited to
            launch our closed beta. It&apos;s easy to request an invite through
            the site ...
          </Article>
        </BlogsList>
      </ContentWrapper>
    </Wrapper>
  );
}

const ContentWrapper = styled(MaxWidthWrapper)`
  @media ${QUERIES.mobileAndUp} {
    text-align: left;
  }
`;

const Wrapper = styled.div`
  padding: 88px 0;
  text-align: center;
`;

const BlogsList = styled.div`
  margin-top: 31px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${QUERIES.mobileAndUp} {
    flex-direction: row;
    gap: 30px;
  }
`;

export default BlogFeatures;
