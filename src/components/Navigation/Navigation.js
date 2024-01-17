'use client';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { COLORS, QUERIES } from '@/lib/constants';

import VisuallyHidden from '../VisuallyHidden';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import MobileNavigation from '../MobileNavigation';
import Button from '../Button';

function Navigation() {
  return (
    <OuterWrapper>
      <Wrapper>
        <LeftWrapper>
          <LogoWrapper href="/">
            <Logo />
          </LogoWrapper>
        </LeftWrapper>

        <DesktopNavigation>
          <NavList>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Careers</NavLink>
            </NavItem>
          </NavList>
        </DesktopNavigation>

        <RightWrapper>
          <Button>Request Invite</Button>
        </RightWrapper>

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

const NavItem = styled.li`
  display: flex;
  align-items: center;

  position: relative;
  cursor: pointer;

  &:hover&::after {
    display: block;
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    height: 4px;
    background: linear-gradient(
      110deg,
      hsl(134deg, 64%, 51%),
      hsl(192deg, 69%, 51%)
    );
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: ${14 / 16}rem;
  color: ${COLORS.Secondary61};
`;

const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
`;

const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  margin-left: 10px;

  display: none;

  @media ${QUERIES.mobileAndUp} {
    display: flex;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  gap: 18px;

  @media ${QUERIES.tabletAndUp} {
    gap: 30px;
  }
`;

const DesktopNavigation = styled.nav`
  display: none;
  align-self: stretch;

  @media ${QUERIES.mobileAndUp} {
    display: flex;
  }
`;

const OuterWrapper = styled.div`
  background: ${COLORS.White};
`;

const Wrapper = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
  height: 64px;
  align-items: center;

  @media ${QUERIES.tabletAndUp} {
    height: 80px;
  }
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

  @media ${QUERIES.mobileAndUp} {
    display: none;
  }
`;

export default Navigation;
