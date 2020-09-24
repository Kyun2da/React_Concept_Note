import React from 'react';

type ViewFlagValueProps = {
  flag: boolean;
};

const ViewFlagValue = ({ flag }: ViewFlagValueProps) => {
  return <p>{flag ? '유효' : '무효'}</p>;
};

export default ViewFlagValue;
