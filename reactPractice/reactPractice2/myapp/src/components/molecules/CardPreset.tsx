import React from 'react';
import PrimaryButton from '../atoms/PrimaryButton';

type CardPresetProps = {
  name: string;
  linkLabel: string;
  handleClick: () => void;
};

const CardPreset = ({ name, linkLabel, handleClick }: CardPresetProps) => {
  return (
    <div>
      <p>{name}</p>
      <PrimaryButton label={linkLabel} handleClick={handleClick} />
    </div>
  );
};

export default CardPreset;
