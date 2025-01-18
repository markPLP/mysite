import React from 'react';

const Container = ({ children }: { children: React.ReactNode }) => {
  return <section className="align-element">{children}</section>;
};

export default Container;
