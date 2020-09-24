import React from 'react';

type TabPanel = {
  children: React.ReactChild[];
  current: number;
  changeIndex: (index: number) => void;
};

const TabPanel = (props: TabPanel) => {
  const tabs = props.children.map((comp: React.ReactChild, index: number) => (
    <div key={index} style={{ display: props.current === index ? 'block' : 'none' }}>
      {comp}
    </div>
  ));
  const tabLabel = (
    <div>
      <button onClick={() => props.changeIndex(0)}>상품리스트</button>
      <button onClick={() => props.changeIndex(1)}>회원리스트</button>
      <button onClick={() => props.changeIndex(2)}>지역리스트</button>
    </div>
  );
  return (
    <div>
      {tabLabel}
      {tabs}
    </div>
  );
};

export default TabPanel;
