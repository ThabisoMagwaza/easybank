'use client';
import Link from 'next/link';
import Image from 'next/image';

import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

import { COLORS } from '@/lib/constants';

function MobileNavigation({ children }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <CloseWrapper>
            <Dialog.Close asChild>
              <CloseButton>
                <Image
                  src="/images/icon-close.svg"
                  width={18}
                  height={19}
                  alt=""
                />
              </CloseButton>
            </Dialog.Close>
          </CloseWrapper>

          <Navigation>
            <NavList>
              <li>
                <NavLink href="/">Home</NavLink>
              </li>
              <li>
                <NavLink href="/">About</NavLink>
              </li>
              <li>
                <NavLink href="/">Contact</NavLink>
              </li>
              <li>
                <NavLink href="/">Blog</NavLink>
              </li>
              <li>
                <NavLink href="/">Careers</NavLink>
              </li>
            </NavList>
          </Navigation>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

const CloseButton = styled.button`
  border: none;
  background: transparent;
  padding: 0;
  margin: 0;
`;

const CloseWrapper = styled.div`
  height: 64px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  position: absolute;
  right: 24px;
`;

const Navigation = styled.nav`
  background: ${COLORS.White};
  border-radius: 4px;
  padding: 24px 0;
  position: absolute;
  left: 24px;
  right: 24px;

  top: ${64 + 24}px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: ${18 / 16}rem;
  color: ${COLORS.Secondary24};
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  gap: 24px;
`;

const Content = styled(Dialog.Content)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const Overlay = styled(Dialog.Overlay)`
  background-image: linear-gradient(
    to bottom,
    ${COLORS.Secondary24} 0%,
    ${COLORS.Secondary24} 60%,
    transparent
  );
  opacity: 50%;

  position: fixed;
  left: 0;
  right: 0;
  top: 64px;

  height: calc(100% - 64px);
`;

export default MobileNavigation;
