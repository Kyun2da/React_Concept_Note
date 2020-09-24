import React from 'react';

type PrimaryButtonProps = {
  handleClick: () => void;
  label: string;
};

const PrimaryButton = ({ handleClick, label }: PrimaryButtonProps) => {
  return <button onClick={handleClick}>{label}</button>;
};

export default PrimaryButton;
