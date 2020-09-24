import React, { useState } from 'react';
import FlagSwitch from './FlagSwitch';
import ViewFlagValue from './ViewFlagValue';

const SwitchContainer = () => {
  const [flag, setFlag] = useState<boolean>(false);
  const changeFlag = () => setFlag(!flag);
  return (
    <div>
      <FlagSwitch onClick={changeFlag} />
      <ViewFlagValue flag={flag} />
    </div>
  );
};

export default SwitchContainer;
