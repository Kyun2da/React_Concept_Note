import React from 'react';
import LinkButton from '../atoms/LinkButton';

type itemsProps = {
  items: itemProps[];
};

type itemProps = {
  name: string;
  url: string;
};

const ProductList = ({ items }: itemsProps) => {
  return <ul>{itemList(items)}</ul>;
};

const itemList = (items: itemProps[]) => {
  return items.map((item: itemProps, index: number) => {
    return (
      <li key={index}>
        <p>{item.name}</p>
        <LinkButton url={item.url} label="상품 상세" />
      </li>
    );
  });
};

export default ProductList;
