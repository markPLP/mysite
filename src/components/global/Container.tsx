import React from 'react';

const Container = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={`align-element ${className}`}>{children}</div>;
};

export default Container;
