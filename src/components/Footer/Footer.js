'use client';
import Link from 'next/link';
import styled from 'styled-components';

import { COLORS, QUERIES } from '@/lib/constants';

import Logo from '../Logo';
import Facebook from '../Facebook';
import YouTube from '../YouTube';
import Twitter from '../Twitter';
import Pinterest from '../Pinterest';
import Instagram from '../Instagram';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Button from '../Button';

function Footer() {
  return (
    <Wrapper>
      <InnerWrapper>
        <LeftColumn>
          <LogoWrapper href="/">
            <Logo />
          </LogoWrapper>

          <SocialIcons>
            <li>
              <SocialIcon href="/">
                <Facebook />
              </SocialIcon>
            </li>
            <li>
              <SocialIcon href="/">
                <YouTube />
              </SocialIcon>
            </li>
            <li>
              <SocialIcon href="/">
                <Twitter />
              </SocialIcon>
            </li>
            <li>
              <SocialIcon href="/">
                <Pinterest />
              </SocialIcon>
            </li>
            <li>
              <SocialIcon href="/">
                <Instagram />
              </SocialIcon>
            </li>
          </SocialIcons>
        </LeftColumn>
        <nav>
          <NavList>
            <NavListColumn>
              <li>
                <NavLink href="/">About Us</NavLink>
              </li>
              <li>
                <NavLink href="/">Contact</NavLink>
              </li>
              <li>
                <NavLink href="/">Blog</NavLink>
              </li>
            </NavListColumn>
            <NavListColumn>
              <li>
                <NavLink href="/">Careers</NavLink>
              </li>
              <li>
                <NavLink href="/">Support</NavLink>
              </li>
              <li>
                <NavLink href="/">Privacy Policy</NavLink>
              </li>
            </NavListColumn>
          </NavList>
        </nav>
        <RightColumn>
          <Button>Request Invite</Button>

          <Copyright> &copy; Easybank. All Rights Reserved</Copyright>
        </RightColumn>
      </InnerWrapper>
    </Wrapper>
  );
}

const NavListColumn = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 24px;

  @media ${QUERIES.mobileAndUp} {
    margin-left: auto;
    align-items: flex-end;
    justify-content: space-between;
    text-align: end;
  }
`;

const Copyright = styled.p`
  font-size: ${15 / 16}rem;
  color: ${COLORS.White};
  opacity: 50%;
`;

const InnerWrapper = styled(MaxWidthWrapper)`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media ${QUERIES.mobileAndUp} {
    flex-direction: row;
    gap: 0;
  }
`;

const NavList = styled.ul`
  list-style: none;
  font-size: ${15 / 16}rem;
  text-align: center;
  padding: 0;

  display: flex;
  flex-direction: column;

  @media ${QUERIES.mobileAndUp} {
    flex-direction: row;
    flex-wrap: wrap;
    text-align: start;
    gap: 8px;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${COLORS.White};

  &:hover {
    color: ${COLORS.Primary};
  }

  @media ${QUERIES.mobileAndUp} {
    width: 160px;
    display: block;
  }
`;

const Wrapper = styled.footer`
  padding: 40px 24px;
  background: ${COLORS.Secondary24};
`;

const LogoWrapper = styled(Link)`
  color: ${COLORS.White};
  text-decoration: none;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media ${QUERIES.mobileAndUp} {
    width: 285px;
    align-items: flex-start;
    gap: 52px;
  }
`;

const SocialIcons = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  align-items: center;
  gap: 16px;
`;

const SocialIcon = styled(Link)`
  width: 24px;
  display: inline-block;
  color: ${COLORS.White};
  text-decoration: none;

  &:hover {
    color: ${COLORS.Primary};
  }
`;

export default Footer;
