import React, { useState } from 'react';
import ProductList from '../molecules/ProductList';
import RegionList from '../molecules/RegionList';
import UserList from '../molecules/UserList';
import TabPanel from './TabPanel';

type SalesRankingProps = {
  items: { name: string; url: string }[];
  users: { name: string }[];
  regions: { name: string; code: string }[];
};

const SalesRanking = ({ items, users, regions }: SalesRankingProps) => {
  const [index, setIndex] = useState(0);
  const handleChangeIndex = (index: number) => setIndex(index);
  return (
    <div>
      <TabPanel changeIndex={handleChangeIndex} current={index}>
        <ProductList items={items} />
        <UserList users={users} />
        <RegionList regions={regions} />
      </TabPanel>
    </div>
  );
};

export default SalesRanking;
