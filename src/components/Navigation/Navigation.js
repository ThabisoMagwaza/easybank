'use client';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { COLORS } from '@/lib/constants';

import VisuallyHidden from '../VisuallyHidden';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';

function Navigation() {
  return (
    <Wrapper>
      <LogoWrapper href="/">
        <Logo />
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

const LogoWrapper = styled(Link)`
  color: ${COLORS.Secondary24};
  text-decoration: none;
`;

const Menu = styled.button`
  border: none;
  background-color: transparent;

  /* increase tappable area */
  padding: 16px;
  margin: -16px;
`;

export default Navigation;
