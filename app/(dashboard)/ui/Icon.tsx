import React from 'react';

interface IconProps {
  icon: React.ReactNode;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ icon, className }) => {
  return <div className={className}>{icon}</div>;
};

export default Icon;
