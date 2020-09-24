import React from 'react';

type LinkButtonProps = {
  url: string;
  label: string;
};

const LinkButton = ({ url, label }: LinkButtonProps) => {
  return (
    <div>
      <a href={`${url}`}>{label}</a>
    </div>
  );
};

export default LinkButton;
