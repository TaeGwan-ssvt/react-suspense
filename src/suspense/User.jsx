import React, { Suspense } from 'react';
import Posts from './Posts';

function User({ resource }) {
  const user = resource.user.read();

  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
}

export default User;
