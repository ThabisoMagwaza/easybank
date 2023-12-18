'use client';
import Image from 'next/image';
import styled from 'styled-components';

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
    </Wrapper>
  );
}

const Wrapper = styled.section``;

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
