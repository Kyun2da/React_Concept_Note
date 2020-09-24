import React from 'react';

type SectionTitleProps = {
  heading: string;
};

const SectionTitle = ({ heading }: SectionTitleProps) => {
  return <h2>{heading}</h2>;
};

export default SectionTitle;
