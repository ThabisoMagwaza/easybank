'use client';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { COLORS } from '@/lib/constants';

import VisuallyHidden from '../VisuallyHidden';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import MobileNavigation from '../MobileNavigation';

function Navigation() {
  return (
    <OuterWrapper>
      <Wrapper>
        <LogoWrapper href="/">
          <Logo />
        </LogoWrapper>

        <MobileNavigation>
          <Menu>
            <Image
              src="/images/icon-hamburger.svg"
              width={24}
              height={11}
              alt=""
            />
            <VisuallyHidden>Open Menu</VisuallyHidden>
          </Menu>
        </MobileNavigation>
      </Wrapper>
    </OuterWrapper>
  );
}

const OuterWrapper = styled.div`
  background: ${COLORS.White};
`;

const Wrapper = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
  height: 64px;
  align-items: center;
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

  &[data-state='open'] {
    display: none;
  }
`;

export default Navigation;
