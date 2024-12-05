import React from 'react';

interface PageIndicatorProps {
  name: string;
  icon: React.ReactNode;
}

const PageIndicator: React.FC<PageIndicatorProps> = ({ name, icon }) => {
  return (
    <div className="flex gap-2 items-center px-2 text-white_100">
      <span className="icon">{icon}</span>
      <span className="name">{name}</span>
    </div>
  );
};

export default PageIndicator;
