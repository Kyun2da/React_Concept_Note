import React, { useState } from 'react';
import InformationArea, { InformationAreaProps } from './InformationArea';

const data = {
  tel: '1111-1111',
  mail: 'taro@example.com',
  organization: 'AAA Company',
  account: 'taro@facebook',
};

const InformationContainer = () => {
  const [contacts] = useState<InformationAreaProps[]>([data]);
  return <InformationArea {...contacts[0]} />;
};

export default InformationContainer;
