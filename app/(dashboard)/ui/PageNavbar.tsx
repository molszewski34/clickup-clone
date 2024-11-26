import React from 'react';
import Wrapper from './Wrapper';
import ButtonExpandSidebar from '@/app/(dashboard)/ui/ButtonExpandSidebar';

interface PageNavbarProps {
  children: React.ReactNode;
}

const PageNavbar: React.FC<PageNavbarProps> = ({ children }) => {
  return (
    <Wrapper>
      <ButtonExpandSidebar />
      {children}
    </Wrapper>
  );
};

export default PageNavbar;
