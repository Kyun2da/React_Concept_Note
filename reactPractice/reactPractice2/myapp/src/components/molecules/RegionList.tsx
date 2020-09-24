import React from 'react';

type RegionListProps = {
  regions: { name: string; code: string }[];
};

const RegionList = ({ regions }: RegionListProps) => {
  const regionDetails = regions.map(({ name, code }) => <li key={code}>{name}</li>);
  return <ul>{regionDetails}</ul>;
};

export default RegionList;
