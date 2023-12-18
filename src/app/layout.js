import { Public_Sans } from 'next/font/google';

import StyledComponentsRegistry from '@/lib/registry';
import GlobalStyles from '@/components/GlobalStyles';

const publicSans = Public_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Manage | Landing page',
  description: 'Fontend Mentor Challenge',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={publicSans.className}>
        <StyledComponentsRegistry>
          {children}
          <GlobalStyles />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
