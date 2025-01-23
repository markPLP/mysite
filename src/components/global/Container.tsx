import React from 'react';

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <section className={`align-element ${className}`}>{children}</section>;
};

export default Container;
