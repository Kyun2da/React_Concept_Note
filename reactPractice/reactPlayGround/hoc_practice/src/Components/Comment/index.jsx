import React from 'react';
import withRequest from '../WithRequest';

const Comment = ({ data }) => {
  if (!data) return null;

  return <div>{JSON.stringify(data)}</div>;
};

export default withRequest(
  Comment,
  'https://jsonplaceholder.typicode.com/comments?postId=1'
);
