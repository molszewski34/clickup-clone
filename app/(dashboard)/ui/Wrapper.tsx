import React from 'react';

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <div className="px-2 flex min-h-12">{children}</div>;
};

export default Wrapper;
