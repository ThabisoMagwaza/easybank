'use client';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import VisuallyHidden from '../VisuallyHidden';
import MaxWidthWrapper from '../MaxWidthWrapper';

function Navigation() {
  return (
    <Wrapper>
      <LogoWrapper href="/">
        <Image
          src="/images/logo.svg"
          width={139}
          height={20}
          alt="Easybank - Navigate home"
        />
      </LogoWrapper>

      <Menu>
        <Image src="/images/icon-hamburger.svg" width={24} height={11} alt="" />
        <VisuallyHidden>Open Menu</VisuallyHidden>
      </Menu>
    </Wrapper>
  );
}

const Wrapper = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
  padding-block: 24px;
`;

const LogoWrapper = styled(Link)``;

const Menu = styled.button`
  border: none;
  background-color: transparent;

  /* increase tappable area */
  padding: 16px;
  margin: -16px;
`;

export default Navigation;
