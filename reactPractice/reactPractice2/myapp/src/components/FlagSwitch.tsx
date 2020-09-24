import React, { SetStateAction } from 'react';

type FlagSwitchProps = {
  onClick: () => void;
};

const FlagSwitch = ({ onClick }: FlagSwitchProps) => {
  return <button onClick={onClick}>Switch Flag</button>;
};

export default FlagSwitch;
