import React from 'react';
import withRequest from '../WithRequest';

const Post = ({ data }) => {
  if (!data) return null;

  return <div>{JSON.stringify(data)}</div>;
};

export default withRequest(
  Post,
  'https://jsonplaceholder.typicode.com/posts/1'
);
