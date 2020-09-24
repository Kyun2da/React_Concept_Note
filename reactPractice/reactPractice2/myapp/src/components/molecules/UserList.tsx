import React from 'react';

type UserListProps = {
  users: { name: string }[];
};

const UserList = ({ users }: UserListProps) => {
  const userDetails = users.map((user, index: number) => <li key={index}>{user.name}</li>);
  return <ul>{userDetails}</ul>;
};

export default UserList;
